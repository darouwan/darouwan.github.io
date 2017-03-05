/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function ($) {
    $(document).ready(function () {
        var banners = new Array(
            "http://p1.bpimg.com/567571/ffff05aa7207e9a6.jpg",
            "http://i1.piimg.com/567571/4e121bdf51e991eb.jpg",
            "http://p1.bpimg.com/567571/24fb54eca272f0e5.jpg",
            "http://p1.bqimg.com/567571/b0be8ac3780b04b2.jpg",
            "http://i1.piimg.com/567571/50e87ef87bedb7c2.jpg",
            "http://i1.piimg.com/567571/7ec0cc25dacdf28a.jpg",
            "http://i1.piimg.com/567571/c2928762563bb6ce.jpg",
            "http://p1.bpimg.com/567571/84b06fabd2e3c017.jpg");
        $(".banner-image").backstretch(banners[parseInt(Math.random() * (7 + 1))]);


        // Fixed header
        //-----------------------------------------------
        $(window).scroll(function () {
            if (($(".header.fixed").length > 0)) {
                if (($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                } else {
                    $("body").removeClass("fixed-header-on");
                }
            }
            ;
        });

        $(window).load(function () {
            if (($(".header.fixed").length > 0)) {
                if (($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                } else {
                    $("body").removeClass("fixed-header-on");
                }
            }
            ;
        });

        //Scroll Spy
        //-----------------------------------------------
        if ($(".scrollspy").length > 0) {
            $("body").addClass("scroll-spy");
            $('body').scrollspy({
                target: '.scrollspy',
                offset: 152
            });
        }

        //Smooth Scroll
        //-----------------------------------------------
        if ($(".smooth-scroll").length > 0) {
            $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 151
                        }, 1000);
                        return false;
                    }
                }
            });
        }

        // Animations
        //-----------------------------------------------
        if (($("[data-animation-effect]").length > 0) && !Modernizr.touch) {
            $("[data-animation-effect]").each(function () {
                var $this = $(this),
                    animationEffect = $this.attr("data-animation-effect");
                if (Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
                    $this.appear(function () {
                        setTimeout(function () {
                            $this.addClass('animated object-visible ' + animationEffect);
                        }, 400);
                    }, {accX: 0, accY: -130});
                } else {
                    $this.addClass('object-visible');
                }
            });
        }
        ;

        // Isotope filters
        //-----------------------------------------------
        if ($('.isotope-container').length > 0) {
            $(window).load(function () {
                $('.isotope-container').fadeIn();
                var $container = $('.isotope-container').isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    transitionDuration: '0.6s',
                    filter: "*"
                });
                // filter items on button click
                $('.filters').on('click', 'ul.nav li a', function () {
                    var filterValue = $(this).attr('data-filter');
                    $(".filters").find("li.active").removeClass("active");
                    $(this).parent().addClass("active");
                    $container.isotope({filter: filterValue});
                    return false;
                });
            });
        }
        ;

        //Modal
        //-----------------------------------------------
        if ($(".modal").length > 0) {
            $(".modal").each(function () {
                $(".modal").prependTo("body");
            });
        }

    }); // End document ready
})(this.jQuery);