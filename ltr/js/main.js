$(document).ready(function () {
    $(".close-search").on('click', function () {
        $('.header-search').fadeOut(200)
    });
    $(".header-search-button").on('click', function () {
        $('.header-search').slideToggle(200)
    });

    if ($('#different_address').length) {
        $('#different_address').change(function () {
            if (this.checked) {
                $('.form-slide-down').slideDown(1000)
            } else {
                $('.form-slide-down').slideUp(500)
            }

        });
    }
    if ($(".js-modal-btn").length) {
        $(".js-modal-btn").modalVideo({
            channel: 'youtube',
            autoplay: 1
        });
    }
    if ($('#player').length) {
        const player = new Plyr('#player', {
            speed: {selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]},
            quality: {default: 720, options: [1080, 720, 480, 360]}
        });
        player.on('play', () => {
            $('.video-section h3').fadeOut(500);
        });
        player.on('pause', () => {
            $('.video-section h3').fadeIn(500);
        });
    }
    if ($(".plus-btn").length) {
        //plus-btnValue minus-btnValue
        $(document).ready(function () {
            $(document).on('click', '.minus-btn, .plus-btn', function (e) {
                var $this = $(e.target),
                    input = $this.parent().parent().find('.number-cunt'),
                    v = $this.hasClass('minus-btn') ? input.val() - 1 : input.val() * 1 + 1,
                    min = input.attr('data-min') ? input.attr('data-min') : 1,
                    max = input.attr('data-max') ? input.attr('data-max') : false;
                if (v >= min) {
                    if (!max === false && v > max) {
                        return false
                    } else input.val(v);
                }
                e.preventDefault();
            });
            $(document).on('change', '.number-cunt', function (e) {
                var input = $(e.target),
                    min = input.attr('data-min') ? input.attr('data-min') : 1,
                    max = input.attr('data-max'),
                    v = input.val();
                if (v > max) input.val(max);
                else if (v < min) input.val(min);
            });
        });
    }
    $(window).scroll(function () {
        let sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 200) {
            sticky.addClass('fixed');
            // $("body").addClass("headerIsFixed")
        } else {
            sticky.removeClass('fixed');
            // $("body").removeClass("headerIsFixed")
        }
    });
    if ($("#date").length) {
        $('#date').daterangepicker({
            "autoUpdateInput": false,
            "singleDatePicker": true,
            "showDropdowns": true,
            "minYear": 1940,
            "maxYear": 2020,
            "autoApply": true,
            "linkedCalendars": false,
            "showCustomRangeLabel": false,
            "startDate": "02/25/1990",
            "endDate": "10/12/2020"
        });
        $('#date').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('YYYY-MM-DD'));
        });
    }
    if ($("#Purchase_Date").length) {
        $('#Purchase_Date').daterangepicker({
            "autoUpdateInput": false,
            "singleDatePicker": true,
            "showDropdowns": true,
            "minYear": 1940,
            "maxYear": 2020,
            "autoApply": true,
            "linkedCalendars": false,
            "showCustomRangeLabel": false,
        });
        $('#Purchase_Date').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('YYYY-MM-DD'));
        });
    }
    if ($("#customFile").length) {
        $('#customFile').on('change', function () {
            //get the file name
            var fileName = $(this).val();
            var label = $(this).next('.custom-file-label');
            //replace the "Choose a file" label
            label.html(fileName);
            label.addClass("file-has-change")
        })
    }
    if ($(".on-change").length) {
        $(".on-change").parsley({
            triggerAfterFailure: 'input changed.bs.select apply.daterangepicker'
        });
    }
    //show pass
    // let showPassButton = $(".show-pass");
    // showPassButton.on("change",function () {
    //     let passInput = $(this).parent().find("input[type = password]");
    //     let check = $(this).parent().find("input[type = checkbox]");
    //     // let type = passInput.attr("type");
    //     if (check.is(':checked')) {
    //         passInput.type = 'text'
    //     } else {
    //         passInput.type = 'password'
    //     }
    //     console.log(passInput.attr("type"))
    // });

    //show hide password
    document.addEventListener('click', function (event) {

        // If the clicked element isn't our show password checkbox, bail
        if (event.target.id !== 'show_pass') return;

        // Get the password field
        var password = document.querySelector('#password');
        if (!password) return;

        // Check if the password should be shown or hidden
        if (event.target.checked) {
            // Show the password
            password.type = 'text';
        } else {
            // Hide the password
            password.type = 'password';
        }

    }, false);
    document.addEventListener('click', function (event) {

        // If the clicked element isn't our show password checkbox, bail
        if (event.target.id !== 'show_pass2') return;

        // Get the password field
        var password = document.querySelector('#c_password');
        if (!password) return;

        // Check if the password should be shown or hidden
        if (event.target.checked) {
            // Show the password
            password.type = 'text';
        } else {
            // Hide the password
            password.type = 'password';
        }
    }, false);

    if ($(".mobile-check").length) {
        function check_if_mobile_checked() {
            if ($("#blackPhone").is(':checked')) {
                $(".black-buy-phone").addClass("active");
                $(".white-buy-phone").removeClass("active");
                $(".mobile-color-text").text("Black Waaba");
            } else if ($("#whitePhone").is(':checked')) {
                $(".white-buy-phone").addClass("active");
                $(".black-buy-phone").removeClass("active");
                $(".mobile-color-text").text("DAHNA WHITE");
            }
        }

        check_if_mobile_checked();
        $(".mobile-check input").on("change", function () {
            check_if_mobile_checked();
            $(".mobile-color-change").removeClass("d-none");
            $(".mobile-reset").removeClass("d-none");
        });
    }
    $(".mobile-reset").on("click", function () {

        $(".mobile-check input").prop('checked', false);
        $(".black-buy-phone").removeClass("active");
        $(".white-buy-phone").removeClass("active");
        $(".mobile-color-change").addClass("d-none");
        $(this).addClass("d-none");

    });
    if ($(".buds-check").length) {
        function check_if_buds_checked() {
            if ($("#blackBuds").is(':checked')) {
                $(".black-buy-buds").addClass("active");
                $(".white-buy-buds").removeClass("active");
                $(".buds-color-text").text("Black");
            } else if ($("#whiteBuds").is(':checked')) {
                $(".white-buy-buds").addClass("active");
                $(".black-buy-buds").removeClass("active");
                $(".buds-color-text").text("White");
            }
        }

        check_if_buds_checked();
        $(".buds-check input").on("change", function () {
            check_if_buds_checked();
            $(".buds-color-change").removeClass("d-none");
            $(".buds-reset").removeClass("d-none");
        });
    }
    $(".buds-reset").on("click", function () {

        $(".buds-check input").prop('checked', false);
        $(".white-buy-buds").removeClass("active");
        $(".black-buy-buds").removeClass("active");
        $(".buds-color-change").addClass("d-none");
        $(this).addClass("d-none");

    });

    let socialBox = $('.our-social a');
    if (socialBox.length) {
        let divWidth = socialBox.width();

        socialBox.height(divWidth - 10);
        $(window).on("resize", function () {
            let divWidth = socialBox.width();
            socialBox.height(divWidth - 10);
            console.log("hamza")
        });
    }

    // let mobile_img = $(".desert-hero-image-container img");
    // if (mobile_img.length) {
    //     let divHeight = mobile_img.height();
    //     let pb = divHeight / 2;
    //     $(".desert-container").css("paddingBottom", pb + 50);
    //
    //     $(window).on("resize", function () {
    //         let divHeight = mobile_img.height();
    //         let pb = divHeight / 2;
    //         $(".desert-container").css("paddingBottom", pb + 50);
    //     });
    // }
//   Gsap start
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();
    var arr1 = [0, 0, 100, 0, 100, 0, 0, 0];
    if ($(".clep-scroll").length) {
        t1.to('.clep-scroll', {
            webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
            duration: 2,
        });
        ScrollTrigger.create({
            animation: t1,
            trigger: ".clep-container",
            start: "top",
            end: "100%",
            scrub: 1,
            pin: true
        });
    }

    // gsap.to(".clep-scroll", {
    //     webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
    //     duration: 2,
    //     ease: Power4.easeOut,
    //     scrollTrigger: {
    //         trigger: ".clep-scroll",
    //         scrub:1,
    //         start: "0 top",
    //         markers:true,
    //         pin:true,
    //         end: "100% top",
    //         // toggleActions: "play none none reverse",
    //     }
    // });
    // gsap.to(".no-clip", {
    //     ease: Power4.easeOut,
    //     scrollTrigger: {
    //         trigger: ".no-clip",
    //         scrub:1,
    //         start: "0 top",
    //         markers:true,
    //         pin:true,
    //         end: "100% top",
    //         // toggleActions: "play none none reverse",
    //     }
    // });
    $(".touch-tabs-right a").on("click", function () {
        $(".touch-tabs-left a").removeClass("active");
    });
    $(".touch-tabs-left a").on("click", function () {
        $(".touch-tabs-right a").removeClass("active");
    });

    // function carousal() {
    //     var $carousel = $("#main_carousal");
    //
    //     $carousel.carousel({
    //         interval: 4000,
    //         keyboard: true,
    //         pause:false
    //     });
    //     $(document).keyup(function(e) {
    //         if(e.which === 39) {
    //             $carousel.carousel("next");
    //         } else if(e.which === 37) {
    //             $carousel.carousel("prev");
    //         }
    //     });
    // }
    // if($("#main_carousal").length){
    //     carousal();
    // }
});

var swiperAnimation = new SwiperAnimation();
var swiper = new Swiper(".swiper-container", {
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },
    spaceBetween: 30,
    effect: 'fade',
    speed: 500,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        init: function () {
            swiperAnimation.init(this).animate();
            $(".swiper-progress-bar").removeClass("animate");
            $(".swiper-progress-bar").removeClass("active");
            $(".swiper-progress-bar").eq(0).addClass("animate");
            $(".swiper-progress-bar").eq(0).addClass("active");
        },
        slideChange: function () {
            swiperAnimation.init(this).animate();
        },
        slideChangeTransitionStart: function () {
            $(".swiper-progress-bar").removeClass("animate");
            $(".swiper-progress-bar").removeClass("active");
            $(".swiper-progress-bar").eq(0).addClass("active");
        },
        slideChangeTransitionEnd: function () {
            $(".swiper-progress-bar").eq(0).addClass("animate");
        }
    }
});
