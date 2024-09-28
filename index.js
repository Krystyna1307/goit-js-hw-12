import{a as l,S as d}from"./assets/vendor-CT7mAZ4U.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p="https://pixabay.com/api/",u="46029261-5480acfc9fcdffed316bd43c0",m=15,i={form:document.querySelector(".js-search-form"),container:document.querySelector(".js-cards-container"),loadMoreBtn:document.querySelector(".js-load-more"),loader:document.querySelector(".js-loader")};function f(a,t){const o=a.map(r=>`<li class="li-gallery">
            <div class="img-box">
                <a class="gallery-link" href="${r.largeImageURL}">
            <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
            title="${r.tags}"
            /></a></div>
        <div class="description-box">
            <div class="param-boxes"><p class="parameters">Likes</p>
            <p class="values">${r.likes}</p></div>
            <div class="param-boxes"><p class="parameters">Views</p>
            <p class="values">${r.views}</p></div>
            <div class="param-boxes"><p class="parameters">Comments</p>
            <p class="values">${r.comments}</p></div>
            <div class="param-boxes"><p class="parameters">Downloads</p>
            <p class="values">${r.downloads}</p></div>
        </div>
        </li>`).join("");t.insertAdjacentHTML("beforeend",o)}async function y(a,t=1){const o=new URLSearchParams({q:a,key:u,per_page:m,page:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=`${p}?${o}`;try{const{data:e}=await l.get(r),{hits:s,totalHits:c}=e;if(!Array.isArray(s)||s.length===0){iziToast.show({message:"'Sorry, there are no images matching your search query. Please try again!'",position:"topCenter",color:"red"});return}const n=new d(".img-box a",{captions:!0,captionsData:"alt",captionsDelay:250,overlayOpacity:.7,className:"lightbox"});f(s,i.container),n.refresh()}catch(e){console.log(e)}finally{const e=document.getElementById("loader");e&&e.classList.add("hidden")}}i.form.addEventListener("submit",g);function g(a){a.preventDefault();const t=a.currentTarget,{value:o}=t.elements.newsKeyword;y(o)}
//# sourceMappingURL=index.js.map
