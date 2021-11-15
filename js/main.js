const menu = ["Home", "Projects", "Work", "Contact"];

const swiper = new Swiper("#wrap", { 
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


const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const navi = document.querySelectorAll(".swiper-pagination span");


next.addEventListener("click", activation);
prev.addEventListener("click", activation);
window.addEventListener("mousewheel", activation);
swiper.on("slideChangeTransitionEnd", activation);

