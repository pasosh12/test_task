document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.sidebar__close');
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main-content');

    burger.addEventListener('click', function() {
        sidebar.classList.add('sidebar--active');
        header.classList.add('blur');
        mainContent.classList.add('blur');
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('sidebar--active');
        header.classList.remove('blur');
        mainContent.classList.remove('blur');
    });
});
