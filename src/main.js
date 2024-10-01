import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

import { BASE_URL, API_KEY, PER_PAGE } from "./js/pixabay-api.js";
import { refs } from "./js/refs.js";
import { createGalleryMarkup } from "./js/render-functions.js";

let currentPage = 1;
let searchQuery = null;
let pages = 0;

const loader = document.getElementById('loader');

refs.form.addEventListener('submit', handleSubmit);
refs.loadMoreBtn.addEventListener('click', handleLoadMore);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    searchQuery = form.elements.newsKeyword.value.trim(); //для видалення пробілів; // Перевизначаємо значення пошукового запиту
    
    if (searchQuery === '') { //Перевірка на порожній запит
        iziToast.show({
            message: 'Please enter a valid search query',
            position: 'topCenter',
            color: 'red',
        });
        return;
    }

    currentPage = 1; // Скидаємо сторінку на 1
    refs.container.innerHTML = ''; // Очищуємо контейнер перед наступним запитом

    fetchNews(searchQuery, form); // Викликаємо fetchNews з потрібними параметрами
}

async function fetchNews(searchQuery, form, currentPage = 1) {
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

    try {
        const { data } = await axios.get(url);
        const { hits, totalHits } = data;
        pages = Math.ceil(totalHits / PER_PAGE); // Підраховуємо кількість сторінок

        if (!Array.isArray(hits) || hits.length === 0) {
            iziToast.show({
                message: `'Sorry, there are no images matching your search query. Please try again!'`,
                position: 'topCenter',
                color: 'red',
            });
            refs.loadMoreBtn.classList.add('is-hidden'); // Приховуємо кнопку, якщо немає результатів
            return;
        }

        createGalleryMarkup(hits, refs.container);

        // Якщо ми на останній сторінці, приховуємо кнопку
        if (currentPage >= pages) {
            refs.loadMoreBtn.classList.add('is-hidden');
            iziToast.show({
                message: 'You have reached the end of search results.',
                position: 'topCenter',
                color: 'blue',
            });
        } else {
            refs.loadMoreBtn.classList.remove('is-hidden'); // Показуємо кнопку після отримання результатів
        }
        

        const showBox = new SimpleLightbox('.img-box a', {
            captions: true,
            captionsData: 'alt',
            captionsDelay: 250,
            overlayOpacity: 0.7,
            className: 'lightbox',
        });

        showBox.refresh();  // Оновлюємо галерею

    } catch (error) {
        console.log(error);
        iziToast.show({
            message: 'An error occurred while fetching data',
            position: 'topCenter',
            color: 'red',
        });
        refs.loadMoreBtn.classList.add('is-hidden'); // Приховуємо кнопку у випадку помилки
        
    } finally {
        loader.classList.add('is-hidden');
        form.reset();
    }
}

async function handleLoadMore() {

    if (currentPage >= pages) { // Перевіряємо, чи є ще сторінки для завантаження

        // refs.loadMoreBtn.classList.add('is-hidden'); // Приховуємо кнопку

        iziToast.show({
            message: 'Were sorry, but youve reached the end of search results',
            position: 'topCenter',
            color: 'blue',
        });
        return;
    }

    currentPage += 1; // Збільшуємо номер поточної сторінки
    refs.loader.classList.remove('is-hidden'); // Показуємо лоадер



    await fetchNews(searchQuery, refs.form, currentPage); // Використовуємо await для асинхронного виклику
    refs.loader.classList.add('is-hidden'); // Ховаємо лоадер після завантаження

    handleScrollView();  // Викликаємо скролінг після завантаження нових даних
}

function handleScrollView() {
    const lastHit = refs.container.lastElementChild;
    
    const hitHeight = lastHit.getBoundingClientRect().height;

    window.scrollBy({
        top: hitHeight * 2,
        left: 0,
        behavior: "smooth",
        });
}