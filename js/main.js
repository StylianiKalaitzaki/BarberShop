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



/* **************** START Next Tab Buttons ****************  */

const nextButtons = document.querySelectorAll('.btn-next');
const tabLists = document.querySelectorAll('.nav-tabs .nav-link');

nextButtons.forEach(function(button) {
    button.addEventListener('click', function() {
    const currentTab = document.querySelector('.nav-tabs .nav-link.active');
    const currentIndex = Array.from(tabLists).indexOf(currentTab);
    const nextIndex = (currentIndex + 1) % tabLists.length;
    tabLists[nextIndex].click();
    });
});
/* **************** END Next Tab Buttons **************** */

/* **************** START Back Tab Buttons **************** */

const backButtons = document.querySelectorAll('.btn-back');

backButtons.forEach(function(button) {
    button.addEventListener('click', function() {
    const currentTab = document.querySelector('.nav-tabs .nav-link.active');
    const currentIndex = Array.from(tabLists).indexOf(currentTab);
    const nextIndex = (currentIndex - 1) % tabLists.length;
    tabLists[nextIndex].click();
    });
});

/* **************** END Back Tab Buttons **************** */



    
/* **************** Date Input **************** */
// Get today's date
var today = new Date();

// Format the date as YYYY-MM-DD
var formattedDate = today.toISOString().split('T')[0];

// Set the minimum attribute of the date input to today's date
document.getElementById('date').setAttribute('min', formattedDate);

// Set a Selector listener on the selected day
document.getElementById('date').addEventListener('change', function() {
    var selectedDate = this.value;
    var label = document.querySelector('.day-label');
    var timeSelect = document.querySelector('.time-select');


    if(selectedDate){
        selectedDate = new Date(selectedDate);
        
            
        var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        var dayOfWeek = daysOfWeek[selectedDate.getDay()];
        var month = months[selectedDate.getMonth()];
        var day = selectedDate.getDate();
        
        //alert(dayOfWeek + ', ' + month + ', ' + day);
        var formattedDate = dayOfWeek + ', ' + month + ' ' + day;
        
        label.classList.remove('hidden');
        label.style.color = 'white';
        label.style.background = 'var(--secondary-color)';
        document.querySelector('.day-label').innerHTML = formattedDate;
        timeSelect.classList.remove('hidden');

    }else{
        label.classList.add('hidden');
        timeSelect.classList.add('hidden');
    }

});

});
