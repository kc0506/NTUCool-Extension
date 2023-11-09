(()=>{"use strict";var t={302:(t,e,n)=>{n.r(e)},279:(t,e,n)=>{n.r(e)},144:function(t,e,n){var c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=n(506),l=c(n(960)),i=n(468),r=c(n(836)),s=c(n(778));n(279),[l.default,i.fixIconsFeature,o.announcementFeature,r.default,s.default].forEach((t=>{const{routes:e,fn:n}=t,{location:c}=window;let o=!1;if(e instanceof Array?e.forEach((t=>{console.log(t),o=o||!!c.href.match(t)})):o=o||!!c.href.match(e),o)try{n()}catch(t){console.error("error: ",t)}})),setTimeout((()=>{const t=document.querySelector("#vjs_video_3_html5_api");t?(console.log("find"),chrome.storage.local.set({video:t}),chrome.storage.local.get("video").then(console.log)):chrome.storage.local.get("video").then(console.log)}),2e3);const a=document.createElement("iframe");a.src="https://cool.ntu.edu.tw/courses/29425/announcements",a.style.position="fixed",a.style.top="0",a.style.height="100vh",a.style.width="50vw",a.style.zIndex="100",new MutationObserver((t=>{t.forEach((t=>{var e;console.log("hey"),"attributes"===t.type&&"style"===t.attributeName&&((null===(e=t.target.parentElement)||void 0===e?void 0:e.querySelector(".ic-DashboardCard__link")).style.color=t.target.style.backgroundColor)}))}))},506:function(t,e,n){var c=this&&this.__awaiter||function(t,e,n,c){return new(n||(n=Promise))((function(o,l){function i(t){try{s(c.next(t))}catch(t){l(t)}}function r(t){try{s(c.throw(t))}catch(t){l(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,r)}s((c=c.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.announcementFeature=void 0;const o=n(672),l=n(593);n(302);const i=n(267),r={row:".ic-announcement-row",rowState:{pinned:"__COOL_pinned",normal:"__COOL_normal",hidden:"__COOL_hidden"},btnWrapper:"__COOL_btn-wrapper",pinBtn:"__COOL_pin-btn",hideBtn:{active:"__COOL_hide-btn--active",inactive:"__COOL_hide-btn--inactive"}};function s(t,e,n,c,o){const l=document.createElement("div");return l.classList.add(r.btnWrapper,o),l.innerHTML=t,l.addEventListener("click",(()=>{l.firstChild,c()?n():e()})),l}function a(t,e,n=!0){const{ele:c,id:o}=t;t.state=e,null==c||c.classList.remove(...Object.values(r.rowState)),null==c||c.classList.add(r.rowState[e]),n&&(0,i.updateItemHistory)(o,e)}const u={routes:/\/courses\/\d+\/announcements$/,fn:function(){return c(this,void 0,void 0,(function*(){const t=document.querySelector("#content-wrapper");yield(0,l.waitUntil)(t,(t=>!!t.querySelector(r.row)));const e=yield(0,i.getItemHistory)();console.log(e);const n=[],c=[];document.querySelectorAll(r.row).forEach((t=>{var l,i;if(0===c.length&&c.push({id:-1/0,ele:null===(l=t.parentElement)||void 0===l?void 0:l.firstElementChild,state:"pinned"}),t instanceof HTMLElement){const l=-parseInt((i=t,function(t){const e=t.match(/https:\/\/cool.ntu.edu.tw\/courses\/\d+\/discussion_topics\/(\d+)/);return e?e[1]:""}(i.querySelector(".ic-item-row__content-link").href))),u={id:l,ele:t,state:"normal"};console.log("cur: ",u),c.push(u);const d=function({rows:t,currentRow:e}){const{ele:n,id:c}=e,l=n.parentElement;return s(o.pushPinIcon,(function(){var o;a(e,"pinned");const i=t.findLast((t=>t.id<c&&"pinned"===t.state));if(!i)throw"No row to insert after!";n.replaceWith(),l.insertBefore(n,null===(o=i.ele)||void 0===o?void 0:o.nextElementSibling)}),(function(){a(e,"normal");let o=t.find((t=>t.id>c&&"normal"===t.state));if(!o&&(o=t.find((t=>"hidden"===t.state)),!o))throw"No row to insert before!";n.replaceWith(),l.insertBefore(n,o.ele)}),(()=>"pinned"===e.state),r.pinBtn)}({rows:c,currentRow:u}),h=function({rows:t,currentRow:e}){const{ele:n,id:c}=e,l=n.parentElement;function i(){a(e,"hidden");const o=t.find((t=>t.id>c&&"hidden"===t.state));if(!o)throw"No row to insert before!";n.replaceWith(),l.insertBefore(n,o.ele)}function u(){a(e,"normal");let o=t.find((t=>t.id>c&&"normal"===t.state));if(!o&&(o=t.find((t=>"hidden"===t.state)),!o))throw"No row to insert before!";console.log(t),console.log(o),n.replaceWith(),l.insertBefore(n,o.ele)}return[s(o.visibilityOffIcon,i,u,(()=>"hidden"===e.state),r.hideBtn.active),s(o.visibilityIcon,i,u,(()=>"hidden"===e.state),r.hideBtn.inactive)]}({rows:c,currentRow:u});!function(t,...e){if(t.classList.contains(r.row))throw`rowEle (${t}) is not a row item!`;const n=t.firstChild;e.forEach((e=>{t.insertBefore(e,n)})),null==n||n.replaceWith()}(t,d,...h),"hidden"===e[l]&&n.push(h[0]),"pinned"===e[l]&&n.push(d)}})),c.push({id:0,ele:null,state:"hidden"}),n.forEach((t=>{t.click()}))}))}};e.announcementFeature=u},267:function(t,e){var n=this&&this.__awaiter||function(t,e,n,c){return new(n||(n=Promise))((function(o,l){function i(t){try{s(c.next(t))}catch(t){l(t)}}function r(t){try{s(c.throw(t))}catch(t){l(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,r)}s((c=c.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.updateItemHistory=e.getItemHistory=void 0;const c="itemHistory";let o;e.updateItemHistory=function(t,e){const n={[t]:e};chrome.storage.local.get({[c]:{}}).then((({[c]:t})=>{const e=Object.assign(Object.assign({},t),n);return chrome.storage.local.set({[c]:e},(()=>{}))})).then((()=>{}))},e.getItemHistory=function(){return n(this,void 0,void 0,(function*(){return o=(yield chrome.storage.local.get({[c]:{}}))[c],console.log("initial history: ",o),o}))}},960:function(t,e,n){var c=this&&this.__awaiter||function(t,e,n,c){return new(n||(n=Promise))((function(o,l){function i(t){try{s(c.next(t))}catch(t){l(t)}}function r(t){try{s(c.throw(t))}catch(t){l(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,r)}s((c=c.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=n(672),l=n(593);function i(t){return t.querySelectorAll(".ig-row")}const r=new Set;function s(t){return t instanceof HTMLElement&&!!t.offsetParent&&t.classList.contains("ig-row")}const a=["Attachment"];function u(t){var e;const n=null===(e=t.querySelector("span.type_icon"))||void 0===e?void 0:e.getAttribute("title");for(const t of a)if(t===n)return t.toLowerCase();return"other"}function d(){i(document).forEach((t=>{const e=t;s(e)&&"attachment"===u(e)&&function(t){c(this,void 0,void 0,(function*(){const e=t.querySelector("a.for-nvda"),{ariaLabel:n,href:c}=e;if(r.has(n))return;r.add(n);const i=function(t){const e=t.getElementById("content"),n=null==e?void 0:e.querySelector("a");if("Download"!==(null==n?void 0:n.innerText))throw console.log(e),console.log(n),"Selected button is not download!";return n.href}(yield(0,l.getResponseDocument)(c));t.appendChild(function(t,e,n){const c=document.createElement("div");return c.innerHTML=`\n      <a download title='下載文件' href=${t} class='__COOL_btn-icon'>\n         ${n}\n      </a>\n      `,c}(i,0,o.downloadIcon))}))}(e)}))}const h=new MutationObserver((t=>{t.forEach((t=>{if("attributes"!==t.type&&"class"!==t.attributeName)return;const e=t.target,n=e.querySelector(".__COOL_btn-download-all");if("none"===e.querySelector(".content").style.display&&e.classList.contains("collapsed_module"))n.classList.add("disabled");else{const t=i(e.querySelector(".ig-header").parentElement),c=[];t.forEach((t=>{s(t)&&c.push(t)})),0===c.length?n.classList.add("disabled"):n.classList.remove("disabled")}}))})),v={routes:/\/courses\/\d+(\/modules)?$/,fn:function(){document.querySelectorAll(".ig-header").forEach((t=>{if((e=t)instanceof HTMLElement&&e.offsetParent&&e.classList.contains("ig-header")){h.observe(t.parentElement,{attributes:!0});const e=document.createElement("div");e.classList.add("__COOL_btn-download-all","disabled"),e.innerHTML="下載全部",t.appendChild(e),e.addEventListener("click",(()=>{if(e.classList.contains("disabled"))return;const n=i(t.parentElement),c=[];n.forEach((t=>{s(t)&&c.push(t)})),c.forEach((t=>{s(t)&&"attachment"===u(t)&&t.querySelector('a[title="下載文件"]').click()}))}))}var e})),d(),window.addEventListener("click",d),document.querySelectorAll("a.external_url_link").forEach((t=>{t.replaceWith(t.cloneNode(!0))}))}};e.default=v},468:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.fixIconsFeature=void 0;const c=n(672),o={routes:/.*/,fn:function(){var t,e,n,o,l;const i=null===(t=document.getElementById("global_nav_help_link"))||void 0===t?void 0:t.querySelector("svg");if(!i)return;const r=document.createElement("div");r.classList.add("menu-item-icon-container"),r.appendChild(i),null===(n=null===(e=document.getElementById("context_external_tool_174_menu_item"))||void 0===e?void 0:e.querySelector("img"))||void 0===n||n.replaceWith(r);const s=document.createElement("div");s.innerHTML=c.assignmentAddIcon;const a=s.querySelector("svg");a.classList.add("ic-icon-svg","menu-item__icon"),a.style.height=a.style.width="26px",null===(l=null===(o=document.getElementById("context_external_tool_258_menu_item"))||void 0===o?void 0:o.querySelector("img"))||void 0===l||l.replaceWith(s)}};e.fixIconsFeature=o},836:function(t,e,n){var c=this&&this.__awaiter||function(t,e,n,c){return new(n||(n=Promise))((function(o,l){function i(t){try{s(c.next(t))}catch(t){l(t)}}function r(t){try{s(c.throw(t))}catch(t){l(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,r)}s((c=c.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=n(593),l=new Map;let i,r,s=!1;const a=700;function u(t){const e=t.querySelector(".paginatedLoadingIndicator");e&&"none"===e.style.display&&(s=!0);const n=t.querySelectorAll(".rosterUser").length,c=Date.now();i&&r==n||(i=c,r=n);const o=c-i,l=!!document.querySelector("#search_input_container input")&&s&&o>a;return l&&window.scrollTo(0,0),l}const d={routes:/\/courses\/\d+\/users$/,fn:function(){!function(){var t;c(this,void 0,void 0,(function*(){yield(0,o.waitUntil)(document,u);const e=document.querySelector("#search_input_container input"),n=e.cloneNode();n.classList.add("__COOL_fake-input"),n.id="",n.addEventListener("input",(t=>{!function(t){const e=document.querySelectorAll(".rosterUser");t=t.replace(/\s/g,"");let n=0;e.forEach((e=>{if(e instanceof HTMLElement){const[c,o]=function(t){var e;if(l.has(t.id))return l.get(t.id);const n=t.querySelector(".roster_user_name ").textContent.replace(/\s/g,"").match(/([^()]+)(\((.+)\))?/);if(!n)throw`User ${t} cannot get name!`;const c=n[1],o=null!==(e=n[3])&&void 0!==e?e:"";return l.set(t.id,[c,o]),[c,o]}(e);c.includes(t)||o.toLowerCase().includes(t.toLowerCase())?(n++,e.classList.contains("invisible")&&e.classList.remove("invisible")):e.classList.add("invisible")}})),0===n?(h.style.display="block",document.querySelector("table").style.display="none"):(h.style.display="none",document.querySelector("table").style.display="table")}(t.target.value)})),null===(t=document.querySelector("[data-view='users']"))||void 0===t||t.appendChild(h),h.style.display="none",e.replaceWith(n)}))}()}};e.default=d;const h=document.createElement("div");h.classList.add("roster-empty-state"),h.innerHTML='   <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n      <circle cx="300.4" cy="38.8" r="13.6" fill="#fdd089"></circle>\n      <path fill="#fbb03b" d="M300.4 53.4c-8.1 0-14.6-6.6-14.6-14.6s6.6-14.6 14.6-14.6S315 30.7 315 38.8s-6.6 14.6-14.6 14.6zm0-27.3c-7 0-12.6 5.7-12.6 12.6s5.7 12.6 12.6 12.6c7 0 12.6-5.7 12.6-12.6s-5.7-12.6-12.6-12.6z"></path>\n      <path fill="#fbb03b" d="M300.4 62.5c-.6 0-1-.4-1-1v-9.1c0-.6.4-1 1-1s1 .4 1 1v9.1c0 .6-.5 1-1 1zM300.4 26.1c-.6 0-1-.4-1-1V16c0-.6.4-1 1-1s1 .4 1 1v9.1c0 .6-.5 1-1 1zM313.4 58.4c-.3 0-.6-.1-.8-.4l-5.2-7.5c-.3-.5-.2-1.1.2-1.4.5-.3 1.1-.2 1.4.2l5.2 7.5c.3.5.2 1.1-.2 1.4-.2.2-.4.2-.6.2zM292.5 28.6c-.3 0-.6-.1-.8-.4l-5.2-7.5c-.3-.5-.2-1.1.2-1.4.5-.3 1.1-.2 1.4.2l5.2 7.5c.3.5.2 1.1-.2 1.4-.2.1-.4.2-.6.2zM321.8 47.5c-.1 0-.2 0-.3-.1l-8.6-3.1c-.5-.2-.8-.8-.6-1.3.2-.5.8-.8 1.3-.6l8.6 3.1c.5.2.8.8.6 1.3-.2.5-.6.7-1 .7zM287.6 35.1c-.1 0-.2 0-.3-.1l-8.6-3.1c-.5-.2-.8-.8-.6-1.3.2-.5.8-.8 1.3-.6l8.6 3.1c.5.2.8.8.6 1.3-.3.4-.6.7-1 .7zM313.5 36.2c-.4 0-.8-.3-1-.7-.1-.5.2-1.1.7-1.2l8.8-2.4c.5-.1 1.1.2 1.2.7.1.5-.2 1.1-.7 1.2l-8.8 2.4h-.2zM278.4 45.7c-.4 0-.8-.3-1-.7-.1-.5.2-1.1.7-1.2l8.8-2.4c.5-.1 1.1.2 1.2.7.1.5-.2 1.1-.7 1.2l-8.8 2.4c-.1-.1-.1 0-.2 0zM309.1 29.3c-.2 0-.5-.1-.6-.2-.4-.4-.5-1-.1-1.4l5.9-7c.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4l-5.9 7c-.2.2-.5.3-.8.3zM285.7 57.2c-.2 0-.5-.1-.6-.2-.4-.4-.5-1-.1-1.4l5.9-7c.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4l-5.9 7c-.2.2-.5.3-.8.3z"></path>\n      <path fill="#d4a082" d="M369.2 171.8l-9.9-6.1-9.2-3.7c-.2-.1-.3-.2-.4-.3l-3.6-3.6c-.2-.2-.4-.3-.6-.3l-3.1-.6c-.6-.1-1-.6-1-1.2v-35.3c0-.2-.1-.5-.2-.7l-2.1-3.2c-.2-.3-.6-.5-1-.5h-15.7c-1.1 0-2 .9-2 2v8c0 .7-.4 1.4-1 1.8-1.3.7-3-.2-3-1.8v-5.1c0-.3-.1-.6-.2-.9l-1.5-2.9c-.3-.7-1-1.1-1.8-1.1h-26.6c-.5 0-1 .2-1.3.5l-2.8 2.5c-.4.4-.7.9-.7 1.5v25.6c0 .7-.3 1.5-.9 1.9l-3.1 2.4-4.5 9-8.1 5-4.5.7c-.8.1-1.5.7-1.8 1.4l-2.2 4.9h112.8zM189.2 171.8l-4.4-8.4-14.3-4.2c-.4-.1-.7-.3-.9-.6l-8.2-10.4c-.2-.2-.4-.4-.7-.5l-11.6-5.4-4.7-2.9c-1.1-.7-1.8-1.9-1.8-3.2v-33.5c0-.4-.1-.7-.2-1.1l-1.4-4.8c-.5-1.6-1.9-2.7-3.6-2.7h-5.3c-1.4 0-2.7.8-3.4 2.1l-1.8 3.5c-.3.5-.4 1.1-.4 1.7v47.3h-4.3c-.8 0-1.5-.5-1.8-1.2l-4.6-11.7c-.6-1.4-2-2.4-3.5-2.4h-5.2c-1 0-1.9-.8-1.9-1.9v-37c0-.7-.2-1.4-.5-1.9l-5.6-9.3c-.7-1.1-1.9-1.8-3.2-1.8H51.4c-1 0-2 .4-2.7 1.1L45 86.3c-.7.7-1.1 1.7-1.1 2.7v67.2c0 .7-.4 1.3-1 1.7l-25.5 13.9h171.8z"></path>\n      <path fill="#243038" d="M8.4 170.8h382v2H8.4z"></path>\n      <path fill="#243038" d="M373.2 172.8H254.8l2.8-6.3c.5-1.1 1.4-1.8 2.6-2l4.3-.7 7.6-4.8 4.4-8.9 3.3-2.5c.3-.3.5-.7.5-1.1v-25.6c0-.9.4-1.7 1-2.2l2.8-2.5c.6-.5 1.3-.8 2-.8h26.6c1.1 0 2.2.6 2.7 1.7l1.5 2.9c.2.4.3.9.3 1.3v5.1c0 .5.3.8.5.9.1.1.5.3 1 0 .3-.2.5-.5.5-.9v-8c0-1.7 1.4-3 3-3H338c.7 0 1.4.4 1.8 1l2.1 3.2c.2.4.4.8.4 1.2V156c0 .1.1.2.2.2l3.1.6c.4.1.8.3 1.1.6l3.6 3.6 9.2 3.7 13.7 8.1zm-115.3-2h103.2l-2.2-4.1-9.2-3.7c-.3-.1-.5-.3-.7-.5l-3.6-3.6s-.1 0-.1-.1l-3.1-.6c-1-.2-1.8-1.1-1.8-2.2v-35.3-.1l-2.1-3.2c0-.1-.1-.1-.2-.1h-15.7c-.6 0-1 .5-1 1v8c0 1.1-.6 2.1-1.5 2.6h-.1c-.9.5-2.1.5-3 0-.9-.5-1.5-1.5-1.5-2.6v-5.1c0-.2 0-.3-.1-.5l-1.5-2.9c-.2-.3-.5-.6-.9-.6h-26.6c-.2 0-.5.1-.7.3l-2.8 2.5c-.2.2-.3.5-.3.8v25.6c0 1-.5 2.1-1.3 2.7l-2.9 2.3-4.5 9-8.5 5.3-4.7.8c-.5.1-.9.4-1.1.8l-1.5 3.5z"></path>\n      <g>\n        <path fill="#abc885" d="M342.5 129.5c3.4 0 6.1 2.7 6.1 6.1v11c0 3.4 4.4 6.8 9 8.6V98.3c0-3.4 2.7-6.1 6.1-6.1 3.4 0 6.1 2.7 6.1 6.1V142c4.6-1.8 9-5.2 9-8.6v-17.6c0-3.4 2.7-6.1 6.1-6.1 3.4 0 6.1 2.7 6.1 6.1v17.6c0 6.4-3.7 12.3-10.3 16.7-3.3 2.2-7.1 3.8-10.9 4.7V192h-12.1l-.1-23.9c-3.7-.9-7.6-2.5-10.9-4.7-6.7-4.4-10.3-10.3-10.3-16.7v-11c0-3.4 2.7-6.2 6.1-6.2z"></path>\n        <path fill="#243038" d="M370.8 193h-14.1l-.1-24.2c-3.7-1-7.3-2.6-10.4-4.6-7-4.6-10.8-10.8-10.8-17.6v-11c0-3.9 3.2-7.1 7.1-7.1s7.1 3.2 7.1 7.1v11c0 2.7 3.4 5.4 7 7.1V98.3c0-3.9 3.2-7.1 7.1-7.1s7.1 3.2 7.1 7.1v42.2c3.6-1.7 7-4.4 7-7.1v-17.6c0-3.9 3.2-7.1 7.1-7.1s7.1 3.2 7.1 7.1v17.6c0 6.7-3.8 13-10.8 17.6-3.1 2-6.8 3.7-10.4 4.6V193zm-12.1-2h10.2v-36.9l.8-.2c3.7-.9 7.5-2.5 10.6-4.6 6.4-4.2 9.9-9.9 9.9-15.9v-17.6c0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1v17.6c0 4.2-5.2 7.8-9.6 9.5l-1.4.5V98.3c0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1v58.4l-1.4-.5c-4.4-1.8-9.6-5.3-9.6-9.5v-11c0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1v11c0 6 3.5 11.7 9.9 15.9 3.1 2.1 6.9 3.7 10.6 4.6l.8.2-.2 23.6z"></path>\n      </g>\n      <g>\n        <path fill="#243038" d="M125.4 231.6c-.4 0-.8-.2-.9-.6l-7.1-17.1 1.3-16.3 8.1-11.5 6.4-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-6.4 6.2-7.6 10.9-1.2 15.3 6.9 16.7c.2.5 0 1.1-.5 1.3h-.4z"></path>\n        <path fill="#243038" d="M127.5 187.8c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.1l6-1c.5-.1 1.1.3 1.1.8.1.5-.3 1.1-.8 1.1l-6 1h-.1zM124 192.7c-.4 0-.7-.2-.9-.5l-2.2-4.2c-.3-.5-.1-1.1.4-1.4.5-.3 1.1-.1 1.4.4l2.2 4.2c.3.5.1 1.1-.4 1.4-.2 0-.3.1-.5.1zM119 207c-.2 0-.3 0-.5-.1-.5-.3-.6-.9-.4-1.4l5.2-8.8 4.5-2.5c.5-.3 1.1-.1 1.4.4.3.5.1 1.1-.4 1.4l-4 2.2-4.9 8.3c-.2.3-.6.5-.9.5z"></path>\n        <path fill="#243038" d="M119.2 204.1c-.3 0-.7-.2-.9-.5l-3.8-6.2c-.3-.5-.1-1.1.3-1.4.5-.3 1.1-.1 1.4.3l3.8 6.2c.3.5.1 1.1-.3 1.4-.1.1-.3.2-.5.2zM127.5 201s0-.1 0 0l-4.8-.3c-.6 0-1-.5-.9-1.1s.5-1 1.1-.9l4.8.3c.6 0 1 .5.9 1.1-.1.4-.6.9-1.1.9zM122.7 225.1h-.2c-.5-.1-.9-.7-.7-1.2l4.1-15.9 8.6-11.7 9.6-6.1 6.9-2.7 2.9-5.3c.3-.5.9-.7 1.4-.4s.7.9.4 1.4l-3.3 5.9-7.5 2.9-9 5.7-8.1 11-4 15.5c-.3.6-.7.9-1.1.9zM119.6 217.7h-.2l-5-.9c-.5-.1-.9-.6-.8-1.2.1-.5.6-.9 1.2-.8l5 .9c.5.1.9.6.8 1.2-.1.5-.5.8-1 .8z"></path>\n        <path fill="#243038" d="M145.1 233.8l-11.2-4.4-10.9-3c-.5-.1-.8-.7-.7-1.2.1-.5.7-.8 1.2-.7l11.1 3.1 10.5 4.1 10-4.1 8.6-4.3c.5-.2 1.1 0 1.3.5.2.5 0 1.1-.5 1.3l-8.7 4.3-10.7 4.4zM146.7 191.3c-.5 0-.9-.4-1-.9l-.4-4.6 4.3-5.5c.3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-3.8 4.9.3 3.8c0 .5-.4 1-1 1.1zM136.6 197.1c-.5 0-1-.4-1-1v-5.3l2.8-5.4 2-3.6c.3-.5.9-.7 1.4-.4.5.3.7.9.4 1.4l-2 3.5-2.6 4.9v4.7c0 .7-.5 1.2-1 1.2zM125.9 212.6c-.3 0-.5-.1-.7-.3l-3.4-3.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l3.4 3.5c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3zM124.4 218.6c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.8-4.7 7.2-4 7.4-7.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7.7 7.5-7.2 4-4.5 4.4c-.2.2-.5.3-.7.3zM129.7 205.4c-.5 0-1-.4-1-1s.4-1 1-1l5.2-.1 2.7-2.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.2-6 .2zM147.7 195.7l-5.9-2.2c-.5-.2-.8-.8-.6-1.3.2-.5.8-.8 1.3-.6l5.4 2 4.1-1c.5-.1 1.1.2 1.2.7.1.5-.2 1.1-.7 1.2l-4.8 1.2z"></path>\n        <path fill="#243038" d="M145.7 224l-12.1-2-10-.3c-.6 0-1-.5-1-1s.5-1 1-1l10.2.3 11.6 1.9 12-4.7 6.1-7.3 5.2-5.6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-5.2 5.5-6.4 7.6-12.8 5.2z"></path>\n        <path fill="#243038" d="M144.2 213.8l-7.9-.3-3.9-1.5c-.5-.2-.8-.8-.6-1.3.2-.5.8-.8 1.3-.6l3.6 1.4 6.4.2 4-6.3 3-6.8 6.8-4.4 2-4.1c.2-.5.8-.7 1.3-.5.5.2.7.8.5 1.3l-2.3 4.6-6.8 4.4-2.9 6.4-4.5 7.5z"></path>\n        <path fill="#243038" d="M139.2 207.2c-.1 0-.3 0-.4-.1-.5-.2-.8-.8-.5-1.3l2.1-5.3 2.5-4.7c.3-.5.9-.7 1.4-.4.5.3.7.9.4 1.4l-2.4 4.6-2.1 5.2c-.2.4-.6.6-1 .6zM132.1 228.9c-.4 0-.7-.2-.9-.6-.2-.5 0-1.1.5-1.3l6.2-2.8 3.8 2.2c.5.3.6.9.4 1.4-.3.5-.9.6-1.4.4l-2.9-1.7-5.3 2.4h-.4zM153.9 230.2c-.1 0-.2 0-.4-.1-.5-.2-.8-.8-.6-1.3l1.8-4.5 6.1-3.4 2.9-4.1 3.7-2.3c.5-.3 1.1-.1 1.4.3.3.5.1 1.1-.3 1.4l-3.4 2.1-2.9 4.1-5.9 3.3-1.5 3.9c-.1.3-.5.6-.9.6z"></path>\n        <path fill="#243038" d="M138.3 235.2c-.4 0-.8-.3-1-.7l-1.4-4.7c-.2-.5.1-1.1.7-1.2.5-.2 1.1.1 1.2.7l1.4 4.7c.2.5-.1 1.1-.7 1.2h-.2zM130.2 221.9c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3.7-3.6 8.2 1.1 5.9-1.8 3.7-1.6 4-6 3.8-9.2 4.4-2.9 3.9.7c.5.1.9.6.8 1.2s-.6.9-1.2.8l-3.2-.6-3.2 2.1-3.7 8.9-4.4 6.6-4.4 1.9-6.4 2-7.7-1.1-3 2.9c0 .2-.3.3-.5.3z"></path>\n        <path fill="#243038" d="M148 207c-.5 0-.9-.4-1-.9-.1-.5.3-1 .9-1.1l2.6-.3 3.6-3.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.1 4-3.3.4h-.1zM147.6 217.8h-.2c-.5-.1-.9-.6-.8-1.2l1-5.3 3.8-3.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3.3 3.2-.8 4.7c-.2.6-.6.9-1.1.9zM156.5 208.2c-.5 0-.9-.3-1-.8-.1-.5.3-1.1.8-1.2l3.5-.6 3.1-3 3.4.2c.6 0 1 .5.9 1.1 0 .6-.5 1-1.1.9l-2.5-.1-2.9 2.9-4.2.7c.1-.1.1-.1 0-.1zM149.8 227.1c-.2 0-.4-.1-.6-.2l-4.2-3.2c-.4-.3-.5-1-.2-1.4.3-.4 1-.5 1.4-.2l4.2 3.2c.4.3.5 1 .2 1.4-.2.3-.5.4-.8.4zM155.9 219.8h-.3c-.5-.2-.8-.7-.6-1.3l1.2-3.7 2.5-4.9c.2-.5.8-.7 1.3-.4.5.2.7.8.4 1.3l-2.4 4.9-1.1 3.5c-.1.4-.5.6-1 .6zM169.4 212.1h-.1l-5.1-.6c-.5-.1-.9-.6-.9-1.1.1-.5.6-.9 1.1-.9l5.1.6c.5.1.9.6.9 1.1-.1.5-.5.9-1 .9z"></path>\n      </g>\n      <path fill="#243038" d="M190.9 172.8H13.4l29-15.8c.3-.2.5-.5.5-.8V89c0-1.3.5-2.5 1.4-3.4l3.8-3.8c.9-.9 2.1-1.4 3.4-1.4H96c1.7 0 3.2.9 4.1 2.3l5.6 9.3c.4.7.7 1.6.7 2.5v36.8c0 .5.4.9.9.9h5.2c2 0 3.7 1.2 4.4 3l4.6 11.7c.1.3.5.6.8.6h3.3v-46.3c0-.7.2-1.5.5-2.1l1.8-3.5c.8-1.6 2.4-2.6 4.3-2.6h5.3c2.1 0 4 1.4 4.6 3.4l1.4 4.8c.1.4.2.9.2 1.4V136c0 1 .5 1.8 1.3 2.3l4.6 2.9 11.6 5.4c.4.2.8.5 1 .8l8.2 10.4c.1.1.3.2.4.3l14.7 4.4 5.4 10.3zm-169.6-2h166.3l-3.5-6.6-13.9-4.1c-.6-.2-1.1-.5-1.4-1l-8.2-10.4-.3-.3-11.7-5.5-4.7-2.9c-1.4-.9-2.2-2.4-2.2-4v-33.5c0-.3 0-.5-.1-.8l-1.4-4.8c-.4-1.2-1.4-2-2.6-2h-5.3c-1.1 0-2 .6-2.5 1.5l-1.8 3.5c-.2.4-.3.8-.3 1.2v48.3h-5.3c-1.2 0-2.2-.7-2.7-1.8L115 136c-.4-1.1-1.4-1.8-2.6-1.8h-5.2c-1.6 0-2.9-1.3-2.9-2.9V94.5c0-.5-.1-1-.4-1.4l-5.6-9.3c-.5-.8-1.4-1.3-2.4-1.3H51.4c-.7 0-1.4.3-2 .8l-3.8 3.8c-.5.5-.8 1.2-.8 2v67.2c0 1.1-.6 2-1.5 2.5l-22 12z"></path>\n      <g>\n        <path fill="#abc885" d="M241 91.3c-5.7 0-10.3 4.6-10.3 10.3V120c0 5.7-7.4 11.4-15 14.4V39c0-5.7-4.6-10.3-10.3-10.3s-10.3 4.6-10.3 10.3v73.3c-7.7-3-15-8.7-15-14.4V68.4c0-5.7-4.6-10.3-10.3-10.3-5.7 0-10.3 4.6-10.3 10.3v29.4c0 10.7 6.2 20.7 17.3 28 5.5 3.6 12 6.4 18.2 7.9V196h20.4l.2-40.1c6.3-1.5 12.7-4.2 18.2-7.9 11.2-7.4 17.3-17.3 17.3-28v-18.4c.2-5.7-4.4-10.3-10.1-10.3z"></path>\n        <path fill="#243038" d="M216.6 197h-22.4v-62.4c-6.2-1.6-12.5-4.4-17.8-7.8-11.5-7.6-17.8-17.8-17.8-28.9V68.4c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v29.4c0 5 6.5 10 13 12.9V39c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3v93.9c6.5-2.9 13-7.9 13-12.9v-18.4c0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3V120c0 11.1-6.3 21.3-17.8 28.9-5.3 3.5-11.5 6.2-17.8 7.8l-.2 40.3zm-20.4-2h18.4l.2-39.9.8-.2c6.3-1.5 12.6-4.3 17.9-7.7 10.9-7.2 16.9-16.8 16.9-27.2v-18.4c0-5.1-4.2-9.3-9.3-9.3-5.1 0-9.3 4.2-9.3 9.3V120c0 6.3-7.9 12.3-15.7 15.4l-1.4.5V39c0-5.1-4.2-9.3-9.3-9.3-5.1 0-9.3 4.2-9.3 9.3v74.8l-1.4-.5c-7.8-3.1-15.7-9-15.7-15.4V68.4c0-5.1-4.2-9.3-9.3-9.3s-9.3 4.2-9.3 9.3v29.4c0 10.4 6 20 16.9 27.2 5.3 3.5 11.6 6.2 17.9 7.7l.8.2V195z"></path>\n      </g>\n    </svg>\n    <h2>找不到任何人</h2>\n    <p>可以按以下方式搜尋：</p>\n    <ul class="empty-state-list">\n      <li class="empty-state-list-item">名稱</li>\n      \n      \n      <li class="empty-state-list-item">Canvas 使用者 ID</li>\n    </ul>'},672:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.visibilityOffIcon=e.visibilityIcon=e.pushPinIcon=e.assignmentAddIcon=e.openInNewIcon=e.downloadIcon=void 0,e.downloadIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>',e.openInNewIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>',e.assignmentAddIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M212.309-140.001q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115v-535.382q0-29.923 21.193-51.115 21.192-21.193 51.115-21.193h178q3.769-33.307 29.076-56.653 25.308-23.347 60.615-23.347 35.692 0 60.999 23.347 25.308 23.346 28.692 56.653h178q29.923 0 51.115 21.193 21.193 21.192 21.193 51.115v252.998Q805.23-501 790.422-505.384q-14.807-4.385-30.422-7v-235.307q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v535.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h234.307q2.23 16.615 6.615 31.422 4.384 14.808 10.692 28.577H212.309ZM200-240v40V-760-512.384v-3V-240Zm90.001-54.616h160.692q2.615-15.615 7.769-30.423 5.154-14.807 11.231-29.576H290.001v59.999Zm0-155.385h253.616q25.846-21.922 55.152-36.73 29.307-14.807 62.768-21.038v-2.23H290.001v59.998Zm0-155.384h379.998v-59.999H290.001v59.999ZM480-786.154q13 0 21.5-8.5t8.5-21.5q0-13-8.5-21.5t-21.5-8.5q-13 0-21.5 8.5t-8.5 21.5q0 13 8.5 21.5t21.5 8.5Zm240 728.46q-74.922 0-127.461-52.538-52.538-52.538-52.538-127.46 0-74.923 52.538-127.461Q645.078-417.691 720-417.691t127.461 52.538q52.538 52.538 52.538 127.461 0 74.922-52.538 127.46Q794.922-57.694 720-57.694ZM702.308-120h35.384v-100h100v-35.384h-100v-100h-35.384v100h-100V-220h100v100Z"/></svg>',e.pushPinIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z"/></svg>',e.visibilityIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>',e.visibilityOffIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>'},778:function(t,e){var n=this&&this.__awaiter||function(t,e,n,c){return new(n||(n=Promise))((function(o,l){function i(t){try{s(c.next(t))}catch(t){l(t)}}function r(t){try{s(c.throw(t))}catch(t){l(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,r)}s((c=c.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});let c="",o="",l=!1;function i(){return n(this,void 0,void 0,(function*(){yield function(t){return n(this,void 0,void 0,(function*(){return new Promise((t=>{const e=setInterval((()=>{l&&(clearInterval(e),t())}))}))}))}();const t=document.querySelector("input[type='text']"),e=document.querySelector("input[type='password']");t.value=c,e.value=o}))}!function(){n(this,void 0,void 0,(function*(){const{account:t,password:e}=yield chrome.storage.local.get(["account","password"]);c=t,o=e,l=!0}))}();const r={routes:[/\/adfs\/ls\/|login\/portal/,"https://web2.cc.ntu.edu.tw/p/s/login2/p1.php",/https:\/\/if163.aca.ntu.edu.tw\/.*/,"https://ntumail.cc.ntu.edu.tw/.*","https://wmail1.cc.ntu.edu.tw/rc/index.php"],fn:function(){var t,e,c;return n(this,void 0,void 0,(function*(){switch(window.location.host){case"cool.ntu.edu.tw":!function(){console.log("login");const t=document.querySelector("button.css-qxdwt4-view--block-baseButton");null==t||t.click()}();break;case"if163.aca.ntu.edu.tw":!function(){const t=document.querySelector("a[href='login.asp']");t&&t.click()}();break;case"ntumail.cc.ntu.edu.tw":null===(t=document.querySelector('a[href="webmail.html"'))||void 0===t||t.click(),null===(e=document.querySelector('a[href="http://webmail2.ntu.edu.tw"]'))||void 0===e||e.click(),console.log("hi");break;case"wmail1.cc.ntu.edu.tw":yield i(),null===(c=document.body.querySelector('button[type="submit"]'))||void 0===c||c.click();break;default:yield i(),document.body.querySelector('input[value="登入"]').click()}}))}};e.default=r},593:function(t,e){var n=this&&this.__awaiter||function(t,e,n,c){return new(n||(n=Promise))((function(o,l){function i(t){try{s(c.next(t))}catch(t){l(t)}}function r(t){try{s(c.throw(t))}catch(t){l(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,r)}s((c=c.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.clearAllStorage=e.waitUntil=e.getResponseDocument=void 0;const c=new DOMParser;e.getResponseDocument=function(t){return n(this,void 0,void 0,(function*(){const e=yield fetch(t).then((t=>t.text()));return c.parseFromString(e,"text/html")}))},e.waitUntil=function t(e,c,o){return n(this,void 0,void 0,(function*(){return new Promise((n=>{c(e)?(o&&o(),setTimeout((()=>{n()}),0)):requestAnimationFrame((()=>t(e,c,(()=>{o&&o(),n()}))))}))}))},e.clearAllStorage=function(){chrome.storage.local.get(null).then((t=>{for(const e in t)chrome.storage.local.remove(e)}))}}},e={};function n(c){var o=e[c];if(void 0!==o)return o.exports;var l=e[c]={exports:{}};return t[c].call(l.exports,l,l.exports,n),l.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(144)})();