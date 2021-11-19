/**
 * PRELOADER
 */

window.onload = function() {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add("preloader-remove");
    }, 1000);
};
/**
 * Меню
 */
var menu = document.querySelector(".menu")
let toggle = document.querySelector(".menu-toggle")

function toggleToggle() {
    toggle.classList.toggle("menu-open")
}

function toggleMenu() {
    menu.classList.toggle("active")
}

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);

/**
 * Первый слайдер
 */

let swiper2 = new Swiper(".sSwiper", {
    loop: true,
    autoplay: {
        delay: 6000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/**
 * Второй слайдер
 */

let swiper3 = new Swiper(".fswipe", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 6000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/**
 * Анимация пролистывания
 */

wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();


/**
 * Таблица
 */

let webSites = [{
        name: "Google.com",
        visitors: "92.5 Млрд",
        country: "USA",
        category: "Поисковый сервис"
    },
    {
        name: "Youtube.com",
        visitors: "34.6 Млрд",
        country: "USA",
        category: "Видеохостинг"
    },
    {
        name: "Facebook.com",
        visitors: "25.5 Млрд",
        country: "USA",
        category: "Социальная сеть"
    },
    {
        name: "Twitter.com",
        visitors: "6.6 Млрд",
        country: "USA",
        category: "Социальная сеть"
    },
    {
        name: "Wikipedia.org",
        visitors: "6.1 Млрд",
        country: "USA",
        category: "Энциклопедии"
    },
    {
        name: "Instagram.com",
        visitors: "6.1 Млрд",
        country: "USA",
        category: "Социальная сеть"
    },
    {
        name: "Baidu.com",
        visitors: "5.6 Млрд",
        country: "China",
        category: "Поисковый сервис"
    },
    {
        name: "Yahoo.com",
        visitors: "3.8 Млрд",
        country: "USA",
        category: "Социальная сеть"
    },
    {
        name: "Yandex.ru",
        visitors: "3.2 Млрд",
        country: "Russia",
        category: "Поисковый сервис"
    },
    {
        name: "Whatsapp.com",
        visitors: "3.1 Млрд",
        country: "USA",
        category: "Социальная сеть"
    },
    {
        name: "Amazon.com",
        visitors: "2.9 Млрд",
        country: "USA",
        category: "Торговая площадка"
    },
    {
        name: "Zoom.us",
        visitors: "2.7 Млрд",
        country: "USA",
        category: "Видеосвязь"
    },
    {
        name: "Live.com",
        visitors: "2.5 Млрд",
        country: "USA",
        category: "Почта"
    },
    {
        name: "Netflix.us",
        visitors: "2.4 Млрд",
        country: "USA",
        category: "Видеохостинг"
    },
    {
        name: "Vk.com",
        visitors: "1.8 Млрд",
        country: "Russia",
        category: "Социальная сеть"
    },
    {
        name: "Reddit.com",
        visitors: "1.6 Млрд",
        country: "USA",
        category: "Социальная сеть"
    },
    {
        name: "Office.com",
        visitors: "1.6 Млрд",
        country: "USA",
        category: "Программы и софт"
    },
    {
        name: "Naver.com",
        visitors: "1.5 Млрд",
        country: "South Korea",
        category: "Новости"
    },
    {
        name: "Discord.com",
        visitors: "1.2 Млрд",
        country: "USA",
        category: "Социальная сеть"
    },
    {
        name: "Mail.ru",
        visitors: "1.1 Млрд",
        country: "Russia",
        category: "Почта"
    }

]

let tbody = document.querySelector('.table_content')

for (let i = 0; i < webSites.length; i++) {
    let tr = document.createElement('tr')
    tr.innerHTML =
        '<td class="num"><span>' + parseInt(i + 1) + '</span></td>' +
        '<td class="siteName"><span>' + webSites[i].name + '</span></td>' +
        '<td class="visitors"><span>' + webSites[i].visitors + '</span></td>' +
        '<td class="country"><span>' + webSites[i].country + '</span></td>' +
        '<td class="category"><span>' + webSites[i].category + '</span></td>';
    tbody.appendChild(tr);
}


let userList = new List('web_top', {
    valueNames: ['num', 'siteName', 'visitors', 'country', 'category'],
})

lightGallery(document.getElementById('animated-thumbnails'), {
    plugins: [lgZoom],
    addClass: 'lg-custom-thumbnails',
    appendThumbnailsTo: '.lg-outer',
    thumbnail: true,
    download: true,
});