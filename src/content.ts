import { announcementFeature } from "./features/annoucement/annoucement";
import itemFeatureFn from "./features/item";
import { fixIconsFeature } from "./features/nav";
import userFeature from "./features/user";

import "./styles.css";

type Feature = {
   route: RegExp | string;
   fn(): unknown;
};

const features: Feature[] = [itemFeatureFn, fixIconsFeature, announcementFeature, userFeature];

features.forEach((feature) => {
   const { route, fn } = feature;
   const { location } = window;

   if (!location.pathname.match(route)) return;

   fn();
});

setTimeout(() => {
   const video = document.querySelector("#vjs_video_3_html5_api");
   if (video) {
      console.log("find");
      chrome.storage.local.set({ video });
      chrome.storage.local.get("video").then(console.log);
   } else {
      chrome.storage.local.get("video").then(console.log);
   }
}, 2000);

const iframe = document.createElement("iframe");
iframe.src = "https://cool.ntu.edu.tw/courses/29425/announcements";
iframe.style.position = "fixed";
iframe.style.top = "0";
iframe.style.height = "100vh";
iframe.style.width = "50vw";
iframe.style.zIndex = "100";

// document.body.appendChild(iframe);
const observer = new MutationObserver((mutations) => {
   mutations.forEach((mu) => {
      console.log("hey");
      if (mu.type !== "attributes" || mu.attributeName !== "style") return;

      const link: HTMLAnchorElement =
         mu.target.parentElement?.querySelector(".ic-DashboardCard__link")!;

      link.style.color = (mu.target as HTMLElement).style.backgroundColor;
   });
});
// document.querySelectorAll(".ic-DashboardCard__link").forEach((node) => {
//    if (node instanceof HTMLAnchorElement) {
//    }
// });

function syncColor(node: HTMLElement) {
   const link: HTMLAnchorElement = node.parentElement?.querySelector(".ic-DashboardCard__link")!;

   link.style.color = node.style.backgroundColor;
}

// setInterval(function () {
//    document.querySelectorAll(".ic-DashboardCard__header_hero").forEach((node) => {
//       syncColor(node as HTMLElement);
//    });
// }, 1000);

export type { Feature };
