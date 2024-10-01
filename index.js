import{i as l,a as h,S as g}from"./assets/vendor-CRCB-GUD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const y="https://pixabay.com/api/",v="46029261-5480acfc9fcdffed316bd43c0",u=15,r={form:document.querySelector(".js-search-form"),container:document.querySelector(".js-cards-container"),loadMoreBtn:document.querySelector(".js-load-more"),loader:document.querySelector(".js-loader")};function w(a,o){const n=a.map(t=>`<li class="li-gallery">
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
        </li>`).join("");o.insertAdjacentHTML("beforeend",n)}let c=1,d=null,p=0;const L=document.getElementById("loader");r.form.addEventListener("submit",b);r.loadMoreBtn.addEventListener("click",x);function b(a){a.preventDefault();const o=a.currentTarget;if(d=o.elements.newsKeyword.value.trim(),d===""){l.show({message:"Please enter a valid search query",position:"topCenter",color:"red"});return}c=1,r.container.innerHTML="",m(d,o)}async function m(a,o,n=1){const t=new URLSearchParams({q:a,key:v,per_page:u,page:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${y}?${t}`;try{const{data:s}=await h.get(e),{hits:i,totalHits:f}=s;if(p=Math.ceil(f/u),!Array.isArray(i)||i.length===0){l.show({message:"'Sorry, there are no images matching your search query. Please try again!'",position:"topCenter",color:"red"}),r.loadMoreBtn.classList.add("is-hidden");return}w(i,r.container),n>=p?(r.loadMoreBtn.classList.add("is-hidden"),l.show({message:"You have reached the end of search results.",position:"topCenter",color:"blue"})):r.loadMoreBtn.classList.remove("is-hidden"),new g(".img-box a",{captions:!0,captionsData:"alt",captionsDelay:250,overlayOpacity:.7,className:"lightbox"}).refresh()}catch(s){console.log(s),l.show({message:"An error occurred while fetching data",position:"topCenter",color:"red"}),r.loadMoreBtn.classList.add("is-hidden")}finally{L.classList.add("is-hidden"),o.reset()}}async function x(){if(c>=p){l.show({message:"Were sorry, but youve reached the end of search results",position:"topCenter",color:"blue"});return}c+=1,r.loader.classList.remove("is-hidden"),await m(d,r.form,c),r.loader.classList.add("is-hidden"),M()}function M(){const o=r.container.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
