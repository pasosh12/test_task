document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const closeBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');
    const contentWrapper=document.querySelector('.content-wrapper');

    burger.addEventListener('click', function() {
        sidebar.classList.add('sidebar--active');
        contentWrapper.classList.add('blur');
     });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('sidebar--active');
        contentWrapper.classList.remove('blur');
     });
});
