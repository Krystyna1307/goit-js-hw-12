export default function createGalleryMarkup(hits, wrapper) {
    const hitsMarkup = hits
        .map(hit => `<li class="li-gallery">
            <div class="img-box">
                <a class="gallery-link" href="${hit.largeImageURL}">
            <img
            class="gallery-image"
            src="${hit.webformatURL}"
            alt="${hit.tags}"
            title="${hit.tags}"
            /></a></div>
        <div class="description-box">
            <div class="param-boxes"><p class="parameters">Likes</p>
            <p class="values">${hit.likes}</p></div>
            <div class="param-boxes"><p class="parameters">Views</p>
            <p class="values">${hit.views}</p></div>
            <div class="param-boxes"><p class="parameters">Comments</p>
            <p class="values">${hit.comments}</p></div>
            <div class="param-boxes"><p class="parameters">Downloads</p>
            <p class="values">${hit.downloads}</p></div>
        </div>
        </li>`
    )
        .join('');
    wrapper.insertAdjacentHTML('beforeend', hitsMarkup);
}