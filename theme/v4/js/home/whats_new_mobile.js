const whatsNewImages_mobile = [
    {
        img: "/theme/v4/images/home/whats_new/whats_new (1).jpg",
        details: "Persistence Pays Off In Portugal For Monster Energy Yamaha Moto GP"
    },
    {
        img: "/theme/v4/images/home/whats_new/motoGP-qatar-pc.jpg",
        details: "Solid Catch Up Effort By Quartararo In Cota Race"
    },
    {
        img: "/theme/v4/images/home/whats_new/MotoGP_Thailand-pc.jpg",
        details: "Quartararo And Rins Make Up Ground In Qatar GP Race"
    }
];

// Mobile View
$(document).ready(function () {
    // Iterate over the array and generate HTML for each object
    whatsNewImages_mobile.forEach(function (item) {
        // Create a div element for each item
        var slide = $('<div>');

        // Add image, heading, and button to the div
        slide.append('<img class="whats_new_mobile_img" src="' + item.img + '">');
        slide.append('<h3 class="whats_new_mobile_heading">' + item.details + '</h3>');
        slide.append('<button class="btn-ripples">Read More</button>');

        // Append the created slide to the carousel
        $('.what_new_mobile').append(slide);
    });

    // Initialize slick carousel
    $('.what_new_mobile').slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: '<img id="scrollLeftButton" src="/theme/v4/images/icons/upArrow.svg" alt="left Arrow Icon" class="rotate_290 up-arrow whats_new_icon prev">',
        nextArrow: '<img id="scrollRightButton" src="/theme/v4/images/icons/downArrow.svg" alt="right Arrow Icon" class="rotate_290 down-arrow whats_new_icon next">',
        // prevArrow: '<img id="scrollLeftButton" src="/theme/v4/images/icons/upArrow.svg" alt="left Arrow Icon" class="rotate_270 prev up-arrow">',
        // nextArrow: '<img id="scrollRightButton" src="/theme/v4/images/icons/downArrow.svg" alt="right Arrow Icon" class="rotate_270 next down-arrow">'
    });
});