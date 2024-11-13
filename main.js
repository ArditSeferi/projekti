(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


   
    
})(jQuery);
document.addEventListener("DOMContentLoaded", function() {
    // Get the element with ID 'l'
    const lunchTab = document.getElementById('l');
    
    // Add click event listener
    lunchTab.addEventListener('click', function() {
        // Get all menu items
        const menuItems = document.querySelectorAll('.tab-content .d-flex');

        // Change the text color of each menu item to red
        menuItems.forEach(function(item) {
            item.style.color = 'orange';
        });
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        // Get the element with ID 'b'
        const lunchTab = document.getElementById('b');
        
        // Add click event listener
        lunchTab.addEventListener('click', function() {
            // Get all menu items
            const menuItems = document.querySelectorAll('.tab-content .d-flex');

            // Change the text color of each menu item to dark blue
            menuItems.forEach(function(item) {
                item.style.color = 'darkgrey';
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Get the element with ID 'd'
        const lunchTab = document.getElementById('d');
        
        // Add click event listener
        lunchTab.addEventListener('click', function() {
            // Get all menu items
            const menuItems = document.querySelectorAll('.tab-content .d-flex');

            // Change the text color of each menu item to dark blue
            menuItems.forEach(function(item) {
                item.style.color = 'darkblue';
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        // Get the element with ID 'd'
        const lunchTab = document.getElementById('d');
        
        // Add click event listener
        lunchTab.addEventListener('click', function() {
            // Get all price elements (assuming they have a specific class, e.g., 'menu-price')
            const priceItems = document.querySelectorAll('.tab-content .menu-price');

            // Change the text of each price item
            priceItems.forEach(function(item, index) {
                item.textContent = '$' + (10 + index * 5); // Change to your desired price logic
            });
        });
    });


    