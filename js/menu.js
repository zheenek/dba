$(document).ready(function() {
    $('.navi__menu-link').on('click', function() {
        $('.mob-menu').addClass('show');
        $('.mob-menu').removeClass('close');
    });
    $('.mob-menu__close').on('click', function() {
        $('.mob-menu').addClass('close');
        $('.mob-menu').removeClass('show');
    });
});