import { Feature } from "./content";

async function waitUntil(pred: () => boolean) {
    return new Promise<void>((res) => {
        const id = setInterval(() => {
            if (pred()) {
                clearInterval(id);
                res();
            }
        });
    });
}

async function sleep(n: number) {
    return new Promise<void>((res) => {
        setTimeout(() => res(), n);
    });
}

function fn1() {
    console.log("login");
    // const panelCls = "LoginPage_panel__1B_VL";
    const loginBtnCls = "css-qxdwt4-view--block-baseButton";
    const loginBtn: HTMLElement = document.querySelector(`button.${loginBtnCls}`)!;
    loginBtn?.click();
}

let ACCOUNT = "",
    PASSWORD = "";
let storageLoaded = false;
(async function () {
    const { account, password } = await (chrome.storage.local.get([
        "account",
        "password",
    ]) as Promise<{
        account: string;
        password: string;
    }>);

    ACCOUNT = account;
    PASSWORD = password;
    storageLoaded = true;
})();

function epo() {
    const a = document.querySelector<HTMLAnchorElement>("a[href='login.asp']");
    if (!a) return;

    a.click();
}

async function putAccountPassText() {
    await waitUntil(() => storageLoaded);
    const acc = document.querySelector<HTMLInputElement>("input[type='text']")!;
    const pass = document.querySelector<HTMLInputElement>("input[type='password']")!;
    acc.value = ACCOUNT;
    pass.value = PASSWORD;
}

async function main() {
    switch (window.location.host) {
        case "cool.ntu.edu.tw":
            fn1();
            break;
        case "if163.aca.ntu.edu.tw":
            epo();
            break;
        case "ntumail.cc.ntu.edu.tw":
            document.querySelector<HTMLAnchorElement>('a[href="webmail.html"')?.click();
            document
                .querySelector<HTMLAnchorElement>('a[href="http://webmail2.ntu.edu.tw"]')
                ?.click();
            console.log("hi");
            break;
        case "wmail1.cc.ntu.edu.tw":
            await putAccountPassText();
            document.body.querySelector<HTMLInputElement>('button[type="submit"]')?.click();
            break;
        default:
            await putAccountPassText();
            const btn = document.body.querySelector<HTMLInputElement>('input[value="登入"]');
            btn!.click();
    }
}

const loginFeature: Feature = {
    routes: [
        /\/adfs\/ls\/|login\/portal/,
        "https://web2.cc.ntu.edu.tw/p/s/login2/p1.php",
        /https:\/\/if163.aca.ntu.edu.tw\/.*/,
        "https://ntumail.cc.ntu.edu.tw/.*",
        "https://wmail1.cc.ntu.edu.tw/rc/index.php",
    ],
    fn: main,
};

export default loginFeature;
