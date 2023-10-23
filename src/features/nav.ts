import { Feature } from "../content";
import { assignmentAddIcon, downloadIcon } from "../icons";

const HELP_ID = "global_nav_help_link";
const FAQ_ID = "context_external_tool_174_menu_item";
const REGISTRATION_ID = "context_external_tool_258_menu_item";

function fixIconsFeatureFn() {
   // * Replace FAQ icon with help icon.

   const helpIcon = document.getElementById(HELP_ID)?.querySelector("svg")!;

   const container = document.createElement("div");
   container.classList.add("menu-item-icon-container");
   container.appendChild(helpIcon);

   document.getElementById(FAQ_ID)?.querySelector("img")?.replaceWith(container);

   // * Replace registration icon
   const dummy = document.createElement("div");
   dummy.innerHTML = assignmentAddIcon;
   const svg = dummy.querySelector("svg")!;
   svg.classList.add("ic-icon-svg", "menu-item__icon");
   svg.style.height = svg.style.width = "26px";

   document.getElementById(REGISTRATION_ID)?.querySelector("img")?.replaceWith(dummy);
}

const fixIconsFeature: Feature = {
   route: /.*/,
   fn: fixIconsFeatureFn,
};

export { fixIconsFeature };
