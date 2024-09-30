import{i as d,a as h,S as g}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const y="https://pixabay.com/api/",v="46029261-5480acfc9fcdffed316bd43c0",p=15,o={form:document.querySelector(".js-search-form"),container:document.querySelector(".js-cards-container"),loadMoreBtn:document.querySelector(".js-load-more"),loader:document.querySelector(".js-loader")};function w(a,r){const n=a.map(t=>`<li class="li-gallery">
            <div class="img-box">
                <a class="gallery-link" href="${t.largeImageURL}">
            <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
            title="${t.tags}"
            /></a></div>
        <div class="description-box">
            <div class="param-boxes"><p class="parameters">Likes</p>
            <p class="values">${t.likes}</p></div>
            <div class="param-boxes"><p class="parameters">Views</p>
            <p class="values">${t.views}</p></div>
            <div class="param-boxes"><p class="parameters">Comments</p>
            <p class="values">${t.comments}</p></div>
            <div class="param-boxes"><p class="parameters">Downloads</p>
            <p class="values">${t.downloads}</p></div>
        </div>
        </li>`).join("");r.insertAdjacentHTML("beforeend",n)}let l=1,c=null,u=0;const L=document.getElementById("loader");o.form.addEventListener("submit",b);o.loadMoreBtn.addEventListener("click",x);function b(a){a.preventDefault();const r=a.currentTarget;if(c=r.elements.newsKeyword.value.trim(),c===""){d.show({message:"Please enter a valid search query",position:"topCenter",color:"red"});return}l=1,o.container.innerHTML="",m(c,r)}async function m(a,r,n=1){const t=new URLSearchParams({q:a,key:v,per_page:p,page:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${y}?${t}`;try{const{data:s}=await h.get(e),{hits:i,totalHits:f}=s;if(u=Math.ceil(f/p),!Array.isArray(i)||i.length===0){d.show({message:"'Sorry, there are no images matching your search query. Please try again!'",position:"topCenter",color:"red"}),o.loadMoreBtn.classList.add("is-hidden");return}w(i,o.container),o.loadMoreBtn.classList.remove("is-hidden"),new g(".img-box a",{captions:!0,captionsData:"alt",captionsDelay:250,overlayOpacity:.7,className:"lightbox"}).refresh()}catch(s){console.log(s),d.show({message:"An error occurred while fetching data",position:"topCenter",color:"red"}),o.loadMoreBtn.classList.add("is-hidden")}finally{L.classList.add("is-hidden"),r.reset()}}async function x(){if(l>=u){d.show({message:"Were sorry, but youve reached the end of search results",position:"topCenter",color:"blue"}),o.loadMoreBtn.classList.add("is-hidden");return}l+=1,o.loader.classList.remove("is-hidden"),await m(c,o.form,l),o.loader.classList.add("is-hidden"),M()}function M(){const r=o.container.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
