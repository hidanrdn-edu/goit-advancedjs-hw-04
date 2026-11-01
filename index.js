/* empty css                      */import{a as g,S as q,i as c}from"./assets/vendor-CesYmgD5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const x="58027101-8436ffa8ff8504f480371d17b",y=15;g.defaults.baseURL="https://pixabay.com";const h=async(o,t)=>{const s={image_type:"photo",orientation:"horizontal",safesearch:!0,key:x,q:o,page:t,per_page:y};return(await g.get("/api/",{params:s})).data},n={loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),btn:document.querySelector(".btn-next")},E=new q(".gallery a"),p=o=>{const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:l,comments:S,downloads:P})=>`
    <li class="gallery-card">

        <a href="${a}" class="gallery-link"><img class="gallery-img" src="${s}" alt="${e}" /></a>              

        <div class="box-info">
            <ul class="card-infor">
                <li class="item-infor">
                    <p class="item-infor-name">Likes</p>
                    <p class="item-infor-value">${r}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Views</p>
                    <p class="item-infor-value">${l}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Comments</p>
                    <p class="item-infor-value">${S}</p>
                </li>
                <li class="item-infor">
                    <p class="item-infor-name">Downloads</p>
                    <p class="item-infor-value">${P}</p>
                </li>
            </ul>
        </div>
    </li>
  `).join("");n.gallery.insertAdjacentHTML("beforeend",t),E.refresh()};function M(){n.gallery.innerHTML=""}function b(){n.loader.classList.remove("hidden")}function L(){n.loader.classList.add("hidden")}function $(){n.btn.classList.remove("is-hidden")}function v(){n.btn.classList.add("is-hidden")}const m={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),btn:document.querySelector(".btn-next")};let i=1,d="",u="",f=!1;const w=async o=>{if(!f){f=!0;try{i++,b();const t=await h(d,i);p(t.hits);const s=document.querySelector(".gallery-card");if(s){const a=s.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}i>=u&&(v(),m.btn.removeEventListener("click",w),c.info({title:"Infor",message:"We're sorry, but you've reached the end of search results."}))}catch{c.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{f=!1,L()}}},O=async o=>{try{o.preventDefault();const{currentTarget:t}=o;if(d=t.elements["search-text"].value.trim(),!d){c.warning({message:"The search field should be filled in!"}),t.reset();return}t.reset(),M(),b(),v(),i=1;const s=await h(d,i);if(s.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}u=Math.ceil(s.totalHits/y),u>i&&($(),m.btn.addEventListener("click",w)),p(s.hits)}catch{c.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{L()}};m.form.addEventListener("submit",O);
//# sourceMappingURL=index.js.map
