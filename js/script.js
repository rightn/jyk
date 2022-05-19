$(document).ready(function () {
    // sidebar
    let sidebar = $('.sidebar');
    let sidebarDiv = $('.side-bar');
    let menuClose = $('.menu-close');
    let body = $('body');

    sidebar.click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        sidebarDiv.addClass("side-bar-active ");
    });

    sidebarDiv.click(function (event) {
        event.stopPropagation();
    });

    menuClose.click(function (event) {
        event.preventDefault();
        sidebarDiv.removeClass("side-bar-active ");
    });

    body.click(function (event) {
        event.preventDefault();
        sidebarDiv.removeClass("side-bar-active ");
    });

    // banner
    let popup = $('.popup')
    popup.click(function (event) {
        event.preventDefault();
        event.stopPropagation();


    });


});
// delivery 
new Swiper('.sw-slider', {
pagination: {
    el: ".sw-slider-pg",
    type: "fraction",
},
navigation: {
    nextEl: '.slide-button-next',
    prevEl: '.slide-button-prev'
}
});
