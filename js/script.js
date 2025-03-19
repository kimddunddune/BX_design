$(document).ready(function () {
    const menuButton = $(".gnb .menu-button > a"); 
    const sitemapBg = $(".sitemap_bg"); 

   
    menuButton.on("click", function (event) {
        event.preventDefault(); 
        sitemapBg.fadeToggle(100);
        event.stopPropagation(); 
    });

    
    $(document).on("click", function (event) {
        if (!sitemapBg.is(event.target) && sitemapBg.has(event.target).length === 0) {
            sitemapBg.fadeOut(100);
        }
    });

   
    sitemapBg.on("click", function (event) {
        event.stopPropagation();
    });

    const swiper_mainbn = new Swiper('.swiper_mainbn', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
	    spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },  

        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 150, //활성화 영역 사이즈, 기본속성
          },
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },

          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
              
            
    });
});

