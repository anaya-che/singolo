// MENU

const MENU = document.getElementById('header-menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a.nav-header__link').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// SLIDER

const SLIDER = document.getElementById('slider');
const PAGE_1 = document.getElementById('page1');
const PAGE_2 = document.getElementById('page2');
const PREV_PAGE = document.getElementById('prev_page');
const NEXT_PAGE = document.getElementById('next_page');

PREV_PAGE.addEventListener("click", changeSlide);
NEXT_PAGE.addEventListener("click", changeSlide);

function changeSlide() {
    if (SLIDER.classList.contains('blue')) {
        SLIDER.classList.remove('blue');
        PAGE_1.classList.remove('display');
        PAGE_2.classList.add('display');
    }
    else {
        SLIDER.classList.add('blue');
        PAGE_2.classList.remove('display');
        PAGE_1.classList.add('display');
    }
}

// PHONES

const PHONE_1 = document.getElementById('phone1');
const PHONE_2 = document.getElementById('phone2');
const DISPLAY_1 = document.getElementById('wallpaper1');
const DISPLAY_2 = document.getElementById('wallpaper2');

PHONE_1.addEventListener("click", turnOffPhone1);
PHONE_2.addEventListener("click", turnOffPhone2);

function turnOffPhone1() {
    if (DISPLAY_1.classList.contains('hidden')) {
        DISPLAY_1.classList.remove('hidden');
    }
    else {
        DISPLAY_1.classList.add('hidden');
    }
}

function turnOffPhone2() {
    if (DISPLAY_2.classList.contains('hidden')) {
        DISPLAY_2.classList.remove('hidden');
    }
    else {
        DISPLAY_2.classList.add('hidden');
    }
}

// PORTFOLIO

const PORTFOLIO = document.getElementById('portfolio-images');
const ALL = document.getElementById('all');
const WEB = document.getElementById('web');
const GRAPHIC = document.getElementById('graphic');
const ARTWORK = document.getElementById('artwork');
const TAB = document.getElementById('portfolio-list');

TAB.addEventListener('click', (event) => {
    TAB.querySelectorAll('a.nav-portfolio__link').forEach(el => el.classList.remove('active-tab'));
    event.target.classList.add('active-tab');
});

PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('active-img'));
    event.target.classList.add('active-img');
});

ALL.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach((el, i, arr) => (i < 1) ? (arr[i].style.gridArea = 'img' + (arr.length + i)) : (el.style.gridArea = 'img' + (i)));
});

WEB.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach((el, i, arr) => (i < 2) ? (arr[i].style.gridArea = 'img' + (arr.length + i - 1)) : (el.style.gridArea = 'img' + (i - 1)));
});

GRAPHIC.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach((el, i, arr) => (i < 3) ? (arr[i].style.gridArea = 'img' + (arr.length + i - 2)) : (el.style.gridArea = 'img' + (i - 2)));
});

ARTWORK.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach((el, i, arr) => 
        (i < 4) ? (arr[i].style.gridArea = 'img' + (arr.length + i - 3)) : (el.style.gridArea = 'img' + (i - 3)));
    });

// FORM

const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

BUTTON.addEventListener('click', (event) => {
    const form = document.getElementById('form');
    if (form.checkValidity()) {
        event.preventDefault()
        const subject = document.getElementById('subject').value.toString();
        const description = document.getElementById('description').value.toString();
        if (subject !== '') {
            document.getElementById('subject-result').innerText = 'Тема: ' + subject;
        } else document.getElementById('subject-result').innerText = 'Без темы';
        if (description !== '') {
            document.getElementById('description-result').innerText = 'Описание: ' + description;
        } else document.getElementById('description-result').innerText = 'Без описания';
        document.getElementById('message-block').classList.remove('hidden');
        form.reset();
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('subject-result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});