var menu = ["Home", "Projects", "Work"];

var swiper = new Swiper("#wrap", { 
    loop: true,
    slidesPerView: "auto", 
    centeredSlides: true, 
    spaceBetween: 60, 
    mousewheel: true, 

    navigation: { 
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: { 
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true, 
        renderBullet: function (index, className) {
            return `<span class="${className}">${menu[index]}</span>`
        }   
    }
});


// var prev = $(".swiper-button-prev");
// var next = $(".swiper-button-next");
// var navi = $(".swiper-pagination span");



