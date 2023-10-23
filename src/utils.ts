// * Fetch and parse response from url

// ? Old implementation (only works for SSR)
const parser = new DOMParser();
async function getResponseDocument(url: string): Promise<Document> {
   const text = await fetch(url).then((res) => res.text());
   const new_document = parser.parseFromString(text, "text/html");
   return new_document;
}

async function waitUntil<T extends HTMLElement | Document>(
   doc: T,
   pred: (doc: T) => boolean,
   callback?: Function
) {
   // console.log(pred(doc));
   return new Promise<void>((res) => {
      if (pred(doc)) {
         if (callback) callback();
         setTimeout(() => {
            res();
         }, 0);
      } else {
         requestAnimationFrame(() =>
            waitUntil(doc, pred, () => {
               if (callback) callback();
               res();
            })
         );
      }
   });
}

// // ? New implementation
// const dummyIframe = document.createElement("iframe");
// dummyIframe.style.display = "none";
// document.querySelector("body")!.appendChild(dummyIframe);

// async function getResponseDocument(url: string): Promise<Document> {
//    dummyIframe.src = url;
//    dummyIframe.contentWindow?.location.reload();
//    console.log("hey");

//    const res = await new Promise<Document>((res) => {
//       dummyIframe.onload = (e) => {
//          console.log(e);
//          console.log(dummyIframe.contentDocument);
//          res(dummyIframe.contentDocument!);
//       };
//    });

//    return res;
// }

// * Utils for cookie

function getCookie(cName: string) {
   const name = cName + "=";
   const cDecoded = decodeURIComponent(document.cookie); //to be careful
   const cArr = cDecoded.split("; ");
   let res;
   cArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
   });
   return res;
}

function setCookie(cName: string, cValue: string, expDays: number) {
   let date = new Date();
   date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
   const expires = "expires=" + date.toUTCString();
   document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function clearAllStorage() {
   chrome.storage.local.get(null).then((obj) => {
      for (const key in obj) chrome.storage.local.remove(key);
   });
}

export { getResponseDocument, waitUntil, clearAllStorage };
