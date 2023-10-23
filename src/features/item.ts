import { Feature } from "../content";
import { downloadIcon } from "../icons";

import { getResponseDocument } from "../utils";

function getDownloadHref(doc: Document): string {
   const content = doc.getElementById("content");
   const btn = content?.querySelector("a");
   if (btn?.innerText !== "Download") {
      console.log(content);
      console.log(btn);
      throw "Selected button is not download!";
   }

   return btn.href;
}

function getOpenInNewHref(doc: Document): string {
   // @ts-ignore
   console.log(doc.getElementsByTagName("iframe"));
   return doc.getElementById("doc_preview")!.querySelector("iframe")!.src;
}

function getItems<T extends { querySelectorAll(selector: string): NodeList }>(node: T) {
   return node.querySelectorAll(".ig-row");
}

const itemTitleSet: Set<string> = new Set();

type Item = HTMLElement;
type ItemType = "attachment" | "other";

function isItem(node: Node): node is Item {
   return node instanceof HTMLElement && !!node.offsetParent && node.classList.contains("ig-row");
}

type Header = HTMLElement;

function isHeader(node: Node): node is Header {
   return (
      node instanceof HTMLElement && !!node.offsetParent && node.classList.contains("ig-header")
   );
}
function getHeaders() {
   return document.querySelectorAll(".ig-header");
}

const validItemTypes: Capitalize<ItemType>[] = ["Attachment"];
function getItemType(item: Item): ItemType {
   const title = item.querySelector("span.type_icon")?.getAttribute("title");
   for (const x of validItemTypes) {
      if (x === title) return x.toLowerCase() as ItemType;
   }
   return "other";
}

async function handleAttachmentItem(item: Item) {
   const a = item.querySelector<HTMLAnchorElement>("a.for-nvda")!;
   const { ariaLabel: title, href } = a;

   if (itemTitleSet.has(title!)) return;
   itemTitleSet.add(title!);

   const resDocument = await getResponseDocument(href);

   const downloadHref = getDownloadHref(resDocument);
   item.appendChild(iconBtnFactory(downloadHref, "下載文件", downloadIcon));
}

function update() {
   const items = getItems(document);

   items.forEach((_node) => {
      const node = _node as Item;
      if (isItem(node)) {
         if (getItemType(node) === "attachment") handleAttachmentItem(node);
      }
   });
}

function iconBtnFactory(href: string, title: string, iconSVG: string) {
   const node = document.createElement("div");
   node.innerHTML = `
      <a download title='${title}' href=${href} class='__COOL_btn-icon'>
         ${iconSVG}
      </a>
      `;
   return node;
}

const groupObserver = new MutationObserver((mutations) => {
   mutations.forEach((mu) => {
      if (mu.type !== "attributes" && mu.attributeName !== "class") return;

      const group = mu.target as HTMLElement;
      const downloadAllBtn = group.querySelector(".__COOL_btn-download-all")!;

      // ? Not working correctly due to Cool bugs 😡
      // const flag = ele.classList.contains("collapsed_module");

      const content = group.querySelector(".content")! as HTMLElement;
      const isCollapsed =
         content.style.display === "none" && group.classList.contains("collapsed_module");
      // console.log(content);
      // console.log(isCollapsed);

      if (isCollapsed) {
         downloadAllBtn.classList.add("disabled");
      } else {
         const header = group.querySelector(".ig-header")!;
         const _items = getItems(header.parentElement!);
         const availableItems: Item[] = [];
         _items.forEach((node) => {
            if (isItem(node)) availableItems.push(node);
         });

         if (availableItems.length === 0) downloadAllBtn.classList.add("disabled");
         else downloadAllBtn.classList.remove("disabled");
      }
   });
});

// const contentObserver = new MutationObserver(mutations => {
//    mutations.forEach(mu => {

//    })
// })

function itemFeatureFn() {
   const headers = getHeaders();
   headers.forEach((header) => {
      if (isHeader(header)) {
         groupObserver.observe(header.parentElement!, { attributes: true });

         const downloadAllBtn = document.createElement("div");
         downloadAllBtn.classList.add("__COOL_btn-download-all", "disabled");
         downloadAllBtn.innerHTML = "下載全部";
         header.appendChild(downloadAllBtn);

         downloadAllBtn.addEventListener("click", () => {
            if (downloadAllBtn.classList.contains("disabled")) return;

            const _items = getItems(header.parentElement!);
            const availableItems: Item[] = [];
            _items.forEach((node) => {
               if (isItem(node)) availableItems.push(node);
            });

            availableItems.forEach((_node) => {
               if (isItem(_node) && getItemType(_node) === "attachment") {
                  _node.querySelector<HTMLElement>('a[title="下載文件"]')!.click();
               }
            });
         });
      }
   });

   update();
   window.addEventListener("click", update);

   fixExternalUrl();
}

function fixExternalUrl() {
   document.querySelectorAll("a.external_url_link").forEach((a) => {
      a.replaceWith(a.cloneNode(true));
   });
}

const itemFeature: Feature = {
   route: /\/courses\/\d+(\/modules)?$/,
   fn: itemFeatureFn,
};

export default itemFeature;
