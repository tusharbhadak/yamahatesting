if ($("#360section").length > 0) {
    $(window).on("load", threesixtyInView);
    // $(window).scroll(threesixtyInView);
}

var product360 = {

    settings: {
        path: null,
        imageCount: 0,
        height: screen.width > 480 ? 360 : screen.width - 100,
        autoplay: false,
        ext: ".webp"
    },
    setExtension: function(extension) {
        product360.settings.ext = "." + extension;
    },
    init: function(autoplay) {
        product360.settings.imgcount = $('#360count').val();
        product360.settings.path = $("#product-image-path").html() + "/360/";
        product360.settings.autoplay = autoplay;
        $(".loading-action-btn").click(function() {
            $(".preview-img").hide();
            $(".preview-img-overlay").hide();
            $(".spinner").removeClass('d-none');
            product360.start();
            $(".play-previous").removeClass('d-none');
            $(".play-next").removeClass('d-none');
            $(".play-action-btn").removeClass('d-none');
            if (product360.settings.autoplay) {
                component.play();
                $('.stop-action-btn').removeClass('d-none');
                $('.play-action-btn').addClass('d-none');
            }
        });
    },
    initLoad: function() {
        product360.settings.imgcount = $('#360count').val();
        product360.settings.path = $("#product-image-path").html() + "/360/";
        $(".preview-img").hide();
        $(".preview-img-overlay").hide();
        $(".spinner").removeClass('d-none');
        product360.start();
        $(".play-previous").removeClass('d-none');
        $(".play-next").removeClass('d-none');
    },
    setHeight: function(height) {
        setTimeout(function() {
            product360.settings.height = $('#threesixty .play-360').height();
        }, 1000);
    },
    start: function() {
        component = jQuery('.product1').ThreeSixty({
            totalFrames: product360.settings.imgcount,
            endFrame: product360.settings.imgcount,
            currentFrame: 1,
            imgList: '.threesixty_images',
            progress: '.spinner',
            imagePath: product360.settings.path,
            filePrefix: '',
            ext: product360.settings.ext,
            height: product360.settings.height,
            width: 600,
            navigation: false,
            disableSpin: false,
            responsive: true,
            rotate: -360,

        });
        $('.play-previous').bind('click', function(e) {
            component.previous();
        });
        $('.play-next').bind('click', function(e) {
            component.next();
        });
        $('.play-action-btn').bind('click', function(e) {
            component.play();
            $('.stop-action-btn').removeClass('d-none');
            $('.play-action-btn').addClass('d-none');
        });
        $('.stop-action-btn').bind('click', function(e) {
            component.stop();
            $('.stop-action-btn').addClass('d-none');
            $('.play-action-btn').removeClass('d-none');
        });
    }
}

// Function to initialise on load of Page
function init_product() {
    //   product360.setHeight(360);
    product360.init();
   
}
// Function to initialise on load of Page (without 360 Section Products Page)
function init_product_no360() {
    colorPreview.init();
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function threesixtyInView() {
  
    if (isScrolledIntoView($("#360section")) && $("#360sectionTriggered").val() == 0) {
        $(".loading-action-btn").trigger("click");
        $("#360sectionTriggered").val(1);
    }
}




