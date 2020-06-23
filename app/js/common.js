$(document).ready(function(){

    /**
     * mobile-mnu customization
     */
    var mmenu = $('#mobile-mnu');
    var menuLogo = mmenu.data("logo");
    var $mmenu = mmenu.mmenu({
        // navbars: [{
        //     content: [ "Навигация" ],
        //     height: 3
        // }],
        "pageScroll": true,

        "navbar": {
            "title" : "Навигация",
        },
        "extensions": [
            "theme-dark",
            "pagedim-black",
            "position-front",
            "fx-listitems-slide",
            "fullscreen",
        ],
    }, {
        offCanvas: {
            pageSelector: "#page-container"
        },
    });

    var mmenuBtn = $("#mmenu-btn");
    var API = $mmenu.data("mmenu");

    mmenuBtn.click(function() {
        API.open();
        $(this).addClass('is-active')
    });

    $('#close-mnu').click(function(e){
        e.preventDefault();
        API.close();
    });


    API.bind( "close:start", function() {
        setTimeout(function() {
            mmenuBtn.removeClass( "is-active" );
        }, 300);
    });
    /**
     * end mobile-mnu customization
     */

    $('.services-slider').owlCarousel({
        loop:true,
        nav: false,
        items: 1,
        margin: 25,
        dots: false,
        autoHeight: false,
        navText: ["",""],
        autoWidth:true,
    });

    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ')

    $('.intro-item-num').each(function () {
        var $val = $(this).data("value");

        $(this).animateNumber(
            {
                number: $val,
                numberStep: comma_separator_number_step
            },
            1500
        );
    });



    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
