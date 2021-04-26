(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__links');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('header__links_active');
    });
}());


