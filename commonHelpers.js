import{S as c,i as f}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(i){const o="45112034-271f1d190327e1d75e8ffdf0b",t="https://pixabay.com/api/",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const u=document.querySelector(".gallery");function d(i){const o=i.map(t=>`<li class="gallery-item">
  <a class="gallery-li"
    href="${t.largeImageURL}"
    ><img
      src="${t.webformatURL}"
      alt="${t.tags}"
  />
  <ul class="img-discr">
    <li>
      <p><b>Likes</b> ${t.likes}</p>
    </li>
    <li>
      <p><b>Views</b> ${t.views}</p>
    </li>
    <li>
      <p><b>Comments</b> ${t.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${t.downloads}</p>
    </li>
  </ul>
  </a>
</li>`).join("");u.insertAdjacentHTML("beforeend",o),new c(".gallery-li",{captionsData:"alt",captionDelay:250})}const y=document.querySelector(".form"),n=document.querySelector(".loader"),a=document.querySelector("input");n.style.display="none";y.addEventListener("submit",i=>{i.preventDefault(),u.innerHTML="",n.style.display="block";const o=a.value.trim();if(o===""){n.classList.remove("is-open");return}p(o).then(t=>{if(n.style.display="none",t.hits.length===0)return f.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});d(t.hits)}).catch(t=>{console.error("Error fetching images:",t)}).finally(()=>n.style.display="none"),a.value=""});new c(".gallery-li",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
