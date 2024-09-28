import{a as n,S as l}from"./assets/vendor-CT7mAZ4U.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",p="46029261-5480acfc9fcdffed316bd43c0",u=15,i={form:document.querySelector(".js-search-form"),container:document.querySelector(".js-cards-container"),loadMoreBtn:document.querySelector(".js-load-more"),loader:document.querySelector(".js-loader")};function m(t,a){const o=t.map(s=>`<li class="li-gallery">
            <div class="img-box">
                <a class="gallery-link" href="${s.largeImageURL}">
            <img
            class="gallery-image"
            src="${s.webformatURL}"
            alt="${s.tags}"
            title="${s.tags}"
            /></a></div>
        <div class="description-box">
            <div class="param-boxes"><p class="parameters">Likes</p>
            <p class="values">${s.likes}</p></div>
            <div class="param-boxes"><p class="parameters">Views</p>
            <p class="values">${s.views}</p></div>
            <div class="param-boxes"><p class="parameters">Comments</p>
            <p class="values">${s.comments}</p></div>
            <div class="param-boxes"><p class="parameters">Downloads</p>
            <p class="values">${s.downloads}</p></div>
        </div>
        </li>`).join("");a.insertAdjacentHTML("beforeend",o)}async function f(t,a=1){const o=new URLSearchParams({q:t,key:p,per_page:u,page:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${d}?${o}`;try{const{data:e,totalHits:r}=await n.get(s);if(!e||e.length===0){iziToast.show({message:"'Sorry, there are no images matching your search query. Please try again!'",position:"topCenter",color:"red"});return}const c=new l(".img-box a",{captions:!0,captionsData:"alt",captionsDelay:250,overlayOpacity:.7,className:"lightbox"});m(e,i.container),c.refresh()}catch(e){console.log(e)}finally{loader.classList.add("hidden")}}i.form.addEventListener("submit",y);function y(t){t.preventDefault();const a=t.currentTarget,{value:o}=a.elements.newsKeyword;f(o)}
//# sourceMappingURL=index.js.map
