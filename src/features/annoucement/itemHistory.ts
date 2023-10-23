type ItemId = number;
type ItemState = "pinned" | "normal" | "hidden";
type ItemHistory = Record<ItemId, ItemState>;

const STORAGE_KEY = "itemHistory";

function updateItemHistory(id: ItemId, state: ItemState) {
   // * The history is updated per item.

   const history = { [id]: state };
   chrome.storage.local
      .get({ [STORAGE_KEY]: {} })
      .then(({ [STORAGE_KEY]: remoteHistory }) => {
         const updatedHistory: ItemHistory = { ...remoteHistory, ...history };

         return chrome.storage.local.set({ [STORAGE_KEY]: updatedHistory }, () => {
            // console.log("success");
         });
      })
      .then(() => {
         // chrome.storage.local.get(null).then(console.log);
         // chrome.storage.local.get(STORAGE_KEY).then(console.log);
      });
}

let history: ItemHistory;
async function getItemHistory(): Promise<ItemHistory> {
   history = (await chrome.storage.local.get({ [STORAGE_KEY]: {} }))[STORAGE_KEY];
   console.log("initial history: ", history);
   return history;
}

export type { ItemId, ItemState, ItemHistory };
export { getItemHistory, updateItemHistory };
