import{S as d,i as l,a as m}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p="https://pixabay.com/api/",u="46029261-5480acfc9fcdffed316bd43c0";function f(t){return t.map(r=>`<li class="li-gallery">
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
        </li>`).join("")}const y=document.querySelector(".js-search-form"),c=document.querySelector(".gallery"),n=document.getElementById("loader"),g=new d(".img-box a",{captions:!0,captionsData:"alt",captionsDelay:250,overlayOpacity:.7,className:"lightbox"});y.addEventListener("submit",h);async function h(t){t.preventDefault();const r=t.currentTarget,{searchValue:{value:o}}=r.elements,a=o.trim();if(a===""){l.show({message:"Please fill search input",position:"topCenter",color:"yellow"});return}const e={key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"};new URLSearchParams(e),c.innerHTML="",n.classList.remove("hidden");try{const s=await m.get(p,{params:e});if(!s.data.hits||s.data.hits.length===0){l.show({message:"'Sorry, there are no images matching your search query. Please try again!'",position:"topCenter",color:"red"});return}c.insertAdjacentHTML("beforeend",f(s.data.hits)),g.refresh()}catch(s){console.log(s)}finally{n.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
