import axios from "axios";
import { BASE_URL, API_KEY, PER_PAGE } from "./pixabay-api";
import { refs } from "./refs";
import createGalleryMarkup from "./render-functions.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export async function fetchNews(searchQuery, currentPage = 1) {
    const options = new URLSearchParams({
        q: searchQuery,
        key: API_KEY,
        per_page: PER_PAGE,
        page: currentPage,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

    const url = `${BASE_URL}?${options}`;

    // const data = await axios.get(url);
    
    // console.log(data);
    try {
        const { data } = await axios.get(url);
        const { hits, totalHits } = data;
        if (!Array.isArray(hits) || hits.length === 0) {
            iziToast.show({
                message: `'Sorry, there are no images matching your search query. Please try again!'`,
                position: 'topCenter',
                color: 'red',
            });
            return;
        }
        const showBox = new SimpleLightbox('.img-box a', {
            captions: true,
            captionsData: 'alt',
            captionsDelay: 250,
            overlayOpacity: 0.7,
            className: 'lightbox',
        });

        createGalleryMarkup(hits, refs.container);

        showBox.refresh();
    } catch (error) {
        console.log(error);
    } finally {
            const loader = document.getElementById('loader');
            if (loader) {
            loader.classList.add('hidden');
            }
    }
}