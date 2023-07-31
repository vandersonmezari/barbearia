(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })

    $(document).ready(function () {

        /*==== header Section Start here =====*/
        $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
        // drop down menu width overflow problem fix
        $('ul').parent('li').on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });
        $('.menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        });





        $('.ellepsis-bar').on('click', function (e) {
            var element = $('.header-top');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.slideUp(300, "swing");
                $('.overlayTwo').removeClass('active');
            } else {
                element.addClass('open');
                element.slideDown(300, "swing");
                $('.overlayTwo').addClass('active');
            }
        });
        $('.header-bar').on('click', function () {
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
        })
        // $(".menu__link").click(function () {
        //     $(".header-bar").removeClass("active");
        // });

        //Header
        var fixed_top = $("header");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                fixed_top.addClass("header-fixed fadeInUp");
            } else {
                fixed_top.removeClass("header-fixed fadeInUp");
            }
        });

        $(".header-right .search, .search-close").on("click", function () {
            $(".search-area").toggleClass("open");
        });



        /*==== header Section End here =====*/


        //data asos initializing
        AOS.init();

        // lightcase initializing
        $('a[data-rel^=lightcase]').lightcase();

    });


    // scroll up start here
    $(function () {
        //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.scrollToTop').css({
                    'bottom': '4%',
                    'opacity': '1',
                    'transition': 'all .5s ease'
                });
            } else {
                $('.scrollToTop').css({
                    'bottom': '-30%',
                    'opacity': '0',
                    'transition': 'all .5s ease'
                })
            }
        });
        //Click event to scroll to top
        $('.scrollToTop').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });




    //Banner slider
    var swiper = new Swiper(".banner__slider", {
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".banner__slider-next",
            prevEl: ".banner__slider-prev",
        },
    });

    //product single slider
    var swiper = new Swiper(".product__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".product__slider-pagination",
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });


    //client slider
    var swiper = new Swiper(".client__slider", {
        loop: true,
        // autoplay: true,
        navigation: {
            nextEl: ".client__slider-next",
            prevEl: ".client__slider-prev",
        },
        effect: "fade",
    });

    //service single slider
    var swiper = new Swiper(".service__single-slider", {
        loop: true,
        autoplay: true,
        effect: "fade",
        navigation: {
            nextEl: ".service__slide-next",
            prevEl: ".service__slide-prev",
        },
    });


    //insta feed slider
    var swiper = new Swiper(".insta__slider", {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".insta__slider-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    });

    // accordion start here
    $('.accordion-item .active').slideDown();
    $('.accordion-list').click(function (e) {
        if ($(this).next('.accordion-answer').css('display') != 'block') {
            $('.accordion-item .active').slideUp(500).removeClass('active');
            $('.accordion-list').removeClass('in');
            $(this).next('.accordion-answer').addClass('active').slideDown(500);
            $(this).addClass('in');
        } else {
            $('.accordion-item .active').slideUp(500).removeClass('active');
            $(this).removeClass('in');
        }
    });

    // shop cart + - start here
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find(".form-control").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find(".form-control").val(newVal);
    });

    $(function () {
        var galleryThumbs = new Swiper('.pro-single-thumbs', {
            spaceBetween: 10,
            slidesPerView: 3,
            loop: true,
            freeMode: true,
            loopedSlides: 5,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.pro-single-next',
                prevEl: '.pro-single-prev',
            },
        });
        var galleryTop = new Swiper('.pro-single-top', {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 5,
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    });

    //Review Tabs
    $('ul.review-nav').on('click', 'li', function (e) {
        e.preventDefault();
        var reviewContent = $('.review-content');
        var viewRev = $(this).data('target');
        $('ul.review-nav li').removeClass('active');
        $(this).addClass('active');
        reviewContent.removeClass('review-content-show description-show').addClass(viewRev);
    });



    //Countdown js initialization
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
            var clockdiv = document.getElementsByClassName("countdown");
            var countDownDate = new Array();
            for (var i = 0; i < clockdiv.length; i++) {
                countDownDate[i] = new Array();
                countDownDate[i]['el'] = clockdiv[i];
                countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
                countDownDate[i]['days'] = 0;
                countDownDate[i]['hours'] = 0;
                countDownDate[i]['seconds'] = 0;
                countDownDate[i]['minutes'] = 0;
            }

            var countdownfunction = setInterval(function () {
                for (var i = 0; i < countDownDate.length; i++) {
                    var now = new Date().getTime();
                    var distance = countDownDate[i]['time'] - now;
                    countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

                    if (distance < 0) {
                        countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = 0;
                    } else {
                        countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = countDownDate[i]['days'];
                        countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = countDownDate[i]['hours'];
                        countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = countDownDate[i]['minutes'];
                        countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = countDownDate[i]['seconds'];
                    }
                }
            }, 1000);
        }
    });


    /*--------------------------------------------------------------
    Ajax Contact Form And Appointment
--------------------------------------------------------------*/
    //contact form js
    $(function () {
        // Get the form.
        var form = $('#contact-form');
        // Get the messages div.
        var formMessages = $('.form-message');
        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    // Set the message text.
                    $(formMessages).text(response);
                    // Clear the form.
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'problem' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('problem');
                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });
}(jQuery));