$(document).ready(function () {

    $('.products-area .g-0 .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
    });

    // Owl carousel

    $('.site-main .clients-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
    })

// Sticky navigation menu

let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed(){
    if($('.header_area').length){
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();

            if(scroll >= nav_offset_top){
                $('.header_area .main-menu').addClass('navbar_fixed');
            }else{
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        })
    }
}

navbarFixed();

function activeSection(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        // Loop through each section and check if it is in the viewport
        $('section').each(function () {
            var offset = $(this).offset().top;
            var height = $(this).outerHeight();
            var sectionId = $(this).attr('id');
           if (scroll >= offset-nav_offset_top && scroll < offset + height) {
                // Remove active class from all nav items
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                // Add active class to the corresponding nav item
                $('.navbar-nav').find('a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    })
}
activeSection();

$( "#primary-btn" ).click(function() {

    $('html, body').animate({
        scrollTop: $("#appointment").offset().top-100
    }, 10);
    //alert( "Handler for .click() called." );
});

$( "#secondary-btn" ).click(function() {

    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 10);
});

/* **************** Date Input **************** */
// Get today's date
var today = new Date();

// Format the date as YYYY-MM-DD
var formattedDate = today.toISOString().split('T')[0];

// Set the minimum attribute of the date input to today's date
document.getElementById('date').setAttribute('min', formattedDate);

});