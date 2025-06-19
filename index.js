import{a as b,S as q,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const P="50838161-3c383bf924b9914213562243a";async function m(t,o=1){const a={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await b.get("https://pixabay.com/api/",{params:a})).data}const g=document.querySelector(".load-more"),h=document.querySelector(".load"),E=document.querySelector(".gallery");let u=null;function y(t){const o=t.map(({largeImageURL:a,webformatURL:n,tags:e,likes:r,views:i,comments:v,downloads:S})=>`
      <li class="photo-card">
        <a href="${a}">
        <img src="${n}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
    Likes:
    <span class="value">❤️ ${r}</span>
  </p>
  <p class="info-item">
    Views:
    <span class="value">👀 ${i}</span>
  </p>
  <p class="info-item">
    Comments:
    <span class="value">📝 ${v}</span>
  </p>
  <p class="info-item">
    Downloads:
    <span class="value">⬇️ ${S}</span>
  </p>
        </div>
      </li>`).join("");E.insertAdjacentHTML("beforeend",o),u?u.refresh():u=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function $(){const t=document.querySelector(".gallery");t.innerHTML=""}function L(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}function B(){g.classList.remove("hidden")}function w(){g.classList.add("hidden")}const M=document.querySelector(".form"),O=document.querySelector(".load-more");let c="",s=1;const p=15;let f=0;M.addEventListener("submit",async t=>{if(t.preventDefault(),c=t.currentTarget.elements["search-text"].value.trim(),s=1,!c){l.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}$(),w(),L();try{const o=await m(c,s);if(d(),o.hits.length===0){l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f=o.totalHits,y(o.hits),p*s<f&&B()}catch{d(),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}});O.addEventListener("click",async()=>{s+=1,L();try{const t=await m(c,s,p);d(),y(t.hits),R(),p*s>=f&&(w(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{d(),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}});function R(){const t=document.querySelector(".gallery li");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
