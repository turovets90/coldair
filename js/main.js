jQuery(document).ready(function(){


    if(jQuery('.main_slider > div').length >1){
        jQuery('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            fade:true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed:3000,
        });
    }


    jQuery(window).load(function() {
        setTimeout(function() {
            jQuery('.main_slider .slick-current').addClass('act');
        });
    });

    jQuery('.qodef-mobile-menu-opener').click(function(){
        jQuery('.qodef-mobile-nav').slideToggle();
    });



    jQuery(window).resize(function(){
        var header_height = jQuery('.qodef-page-header').outerHeight();
        jQuery(window).scroll(function(){
            if (jQuery(this).scrollTop() > header_height) {
                jQuery('.qodef-page-header').addClass('fixed');
            } else {
                jQuery('.qodef-page-header').removeClass('fixed');
            }
        });

    });
    jQuery(window).resize();



});