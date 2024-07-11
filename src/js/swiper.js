document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth

    if (width < 768) {
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            slidesPerView: 1.25,
            spaceBetween: 30,
        })
    }
})