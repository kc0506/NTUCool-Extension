document.querySelector<HTMLButtonElement>("#submit")?.addEventListener("click", (e) => {
    const account = document.querySelector<HTMLInputElement>("#account")!.value;
    const password = document.querySelector<HTMLInputElement>("#password")!.value;

    chrome.storage.local.set({ account, password });
});

