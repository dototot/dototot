// Foundation JavaScript
// Documentation can be found at: https://foundation.zurb.com/docs

document.querySelectorAll('pre').forEach((block) => {
  hljs.highlightBlock(block);
});

jQuery(document).ready(function($){
    $(document).foundation();

    $('#home-carousel').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 5500,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<i class="prev fa fa-angle-left"></i>',
        nextArrow: '<i class="next fa fa-angle-right"></i>',
        initialSlide: Math.floor(Math.random() * ($('#home-carousel img').length)),
    });
});
