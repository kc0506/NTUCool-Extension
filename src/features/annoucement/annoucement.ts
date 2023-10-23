import { Feature } from "../../content";
import { pushPinIcon, visibilityIcon, visibilityOffIcon } from "../../icons";
import { waitUntil } from "../../utils";
import "./announcement.css";
import { ItemHistory, ItemState, getItemHistory, updateItemHistory } from "./itemHistory";

const CLASSNAMES = {
   row: ".ic-announcement-row",
   rowState: {
      pinned: "__COOL_pinned",
      normal: "__COOL_normal",
      hidden: "__COOL_hidden",
   },
   btnWrapper: "__COOL_btn-wrapper",
   pinBtn: "__COOL_pin-btn",
   hideBtn: {
      active: "__COOL_hide-btn--active",
      inactive: "__COOL_hide-btn--inactive",
   },
} as const;

function matchCourseNumber(href: string) {
   const matchResult = href.match(/https:\/\/cool.ntu.edu.tw\/courses\/(\d+)\/announcements/);
   if (!matchResult) return "";
   const courseNumber = matchResult[1];
   return courseNumber;
}

function getCourseNumber() {
   const { location } = window;
   return matchCourseNumber(location.href);
}

function matchItemId(href: string) {
   const matchResult = href.match(
      /https:\/\/cool.ntu.edu.tw\/courses\/\d+\/discussion_topics\/(\d+)/
   );
   if (!matchResult) return "";
   const courseNumber = matchResult[1];
   return courseNumber;
}

function getItemId(ele: HTMLElement) {
   const a: HTMLAnchorElement = ele.querySelector(".ic-item-row__content-link")!;
   return matchItemId(a.href);
}

type Row = { id: number; state: ItemState; ele: HTMLElement | null };

function createBtn(
   iconSVG: string,
   handleActivate: Function,
   handleInactivate: Function,
   isActive: () => boolean,
   className: string
) {
   const icon = document.createElement("div");
   icon.classList.add(CLASSNAMES.btnWrapper, className);
   icon.innerHTML = iconSVG;

   icon.addEventListener("click", () => {
      const svg = icon.firstChild as HTMLElement;
      if (isActive()) {
         handleInactivate();
      } else {
         handleActivate();
      }
   });

   return icon;
}

function updateRowState(row: Row, state: ItemState, updateStorage: boolean = true) {
   const { ele, id } = row;
   row.state = state;
   ele?.classList.remove(...Object.values(CLASSNAMES.rowState));
   ele?.classList.add(CLASSNAMES.rowState[state]);
   if (updateStorage) updateItemHistory(id, state);
}

function createPinBtn({
   rows,
   currentRow,
}: {
   rows: Row[];
   currentRow: Row & { ele: HTMLElement };
}) {
   const { ele: node, id } = currentRow;
   const rowContainer = node.parentElement!;

   function handlePin() {
      updateRowState(currentRow, "pinned");

      const insertAfterRow = rows.findLast((row) => row.id < id && row.state === "pinned");
      if (!insertAfterRow) throw "No row to insert after!";

      node.replaceWith();
      rowContainer.insertBefore(node, insertAfterRow.ele?.nextElementSibling!);
   }

   function handleUnpin() {
      updateRowState(currentRow, "normal");

      let insertBeforeRow = rows.find((row) => row.id > id && row.state === "normal");
      if (!insertBeforeRow) {
         insertBeforeRow = rows.find((row) => row.state === "hidden");
         if (!insertBeforeRow) throw "No row to insert before!";
      }

      node.replaceWith();
      rowContainer.insertBefore(node, insertBeforeRow.ele); // when ele is null, insert as last.
   }

   const icon = createBtn(
      pushPinIcon,
      handlePin,
      handleUnpin,
      () => currentRow.state === "pinned",
      CLASSNAMES.pinBtn
   );
   return icon;
}

function createHideBtns({
   rows,
   currentRow,
}: {
   rows: Row[];
   currentRow: Row & { ele: HTMLElement };
}) {
   const { ele: node, id } = currentRow;
   const rowContainer = node.parentElement!;

   function handleHide() {
      updateRowState(currentRow, "hidden");

      const insertBeforeRow = rows.find((row) => row.id > id && row.state === "hidden");
      if (!insertBeforeRow) throw "No row to insert before!";

      node.replaceWith();
      rowContainer.insertBefore(node, insertBeforeRow.ele);
   }

   function handleUnhide() {
      updateRowState(currentRow, "normal");

      let insertBeforeRow = rows.find((row) => row.id > id && row.state === "normal");
      if (!insertBeforeRow) {
         insertBeforeRow = rows.find((row) => row.state === "hidden");
         if (!insertBeforeRow) throw "No row to insert before!";
      }
      console.log(rows);
      console.log(insertBeforeRow);

      node.replaceWith();
      rowContainer.insertBefore(node, insertBeforeRow.ele); // when ele is null, insert as last.
   }

   const btnActive = createBtn(
      visibilityOffIcon,
      handleHide,
      handleUnhide,
      () => currentRow.state === "hidden",
      CLASSNAMES.hideBtn.active
   );
   const btnInactive = createBtn(
      visibilityIcon,
      handleHide,
      handleUnhide,
      () => currentRow.state === "hidden",
      CLASSNAMES.hideBtn.inactive
   );

   return [btnActive, btnInactive];
}

function appendBtns(rowEle: HTMLElement, ...btns: HTMLElement[]) {
   if (rowEle.classList.contains(CLASSNAMES["row"])) throw `rowEle (${rowEle}) is not a row item!`;

   const first = rowEle.firstChild;
   btns.forEach((btn) => {
      rowEle.insertBefore(btn, first);
   });
   first?.replaceWith();
}

async function announcementFeatureFn() {
   const wrapper = document.querySelector("#content-wrapper")! as HTMLElement;
   await waitUntil(wrapper, (wrapper) => !!wrapper.querySelector(CLASSNAMES["row"]));

   const history = await getItemHistory();
   console.log(history);

   const btnsToClick: HTMLElement[] = [];

   const rows: Row[] = [];
   document.querySelectorAll(CLASSNAMES["row"]).forEach((node) => {
      if (rows.length === 0) {
         rows.push({
            id: -Infinity,
            ele: node.parentElement?.firstElementChild as HTMLElement,
            state: "pinned",
         });
      }

      if (node instanceof HTMLElement) {
         // TODO: The item has descending ID, but in event handler I assume ascending instead.
         // TODO: Remove that hacky negative sign.
         const id = -parseInt(getItemId(node));
         const currentRow: Row & { ele: HTMLElement } = {
            id,
            ele: node,
            state: "normal",
         };
         console.log("cur: ", currentRow);
         rows.push(currentRow);

         // updateRowState(currentRow, currentRow.state, false);

         const pinBtn = createPinBtn({ rows, currentRow });
         const hideBtn = createHideBtns({ rows, currentRow });
         appendBtns(node, pinBtn, ...hideBtn);

         if (history[id] === "hidden") btnsToClick.push(hideBtn[0]);
         if (history[id] === "pinned") btnsToClick.push(pinBtn);
      }
   });
   rows.push({ id: 0, ele: null, state: "hidden" });

   btnsToClick.forEach((btn) => {
      btn.click();
   });
}

const announcementFeature: Feature = {
   route: /\/courses\/\d+\/announcements$/,
   fn: announcementFeatureFn,
};

export { announcementFeature };

// * Inline mode
// document.querySelectorAll(".ic-announcement-row").forEach((node) => {
//    const a = node.querySelector(
//       ".ic-item-row__content-link"
//    ) as HTMLAnchorElement;
//    console.log(a);

//    getResponseDocument(a.href).then((doc) => {
//       const contentNode = doc.querySelector(
//          ".entry-content"
//       )! as HTMLElement;
//       node.replaceWith(contentNode);
//       console.log(contentNode);
//    });
// });
