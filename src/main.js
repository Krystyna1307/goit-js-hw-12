import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from "./js/refs.js";
import { fetchNews } from "./js/news-service.js";

refs.form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const { value: searchQuery } = form.elements.newsKeyword;
    
    fetchNews(searchQuery)
}




// const showBox = new SimpleLightbox('.img-box a', {
//     captions: true,
//     captionsData: 'alt',
//     captionsDelay: 250,
//     overlayOpacity: 0.7,
//     className: 'lightbox',
//     });

// form.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//     event.preventDefault();
//     const form = event.currentTarget;

//     const {
//         searchValue: { value: query },
//     } = form.elements;
    
//     const trimmedQuery = query.trim();

//     if (trimmedQuery === '') {
//         iziToast.show({
//             message: 'Please fill search input',
//             position: 'topCenter',
//             color: 'yellow',
//         });
//         return;
//     }

//     const options = {
//         key: API_KEY,
//         q: trimmedQuery,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: "true",
//     };
//     const params = new URLSearchParams(options);

//     gallery.innerHTML = '';
//     loader.classList.remove('hidden');


//     fetch(`${BASE_URL}?key=${API_KEY}&${params}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Something went wrong');
//             }
//             return response.json();
//         })
//         .then(photos => {
//             if (!photos.hits || photos.hits.length === 0) {
//                 iziToast.show({
//                     message: `'Sorry, there are no images matching your search query. Please try again!'`,
//                     position: 'topCenter',
//                     color: 'red',
//                 });
//                 return;
//             }
//             gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(photos.hits));
//             showBox.refresh();
//         })
//         .catch(error => {
//             console.log(error);
//         })
//         .finally(() => {
//             loader.classList.add('hidden');;
//         });
// }