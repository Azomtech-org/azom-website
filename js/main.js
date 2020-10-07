$(document).ready(function () {
    $(".close-search").on('click', function () {
        $('.header-search').fadeOut(200)
    });
    $(".header-search-button").on('click', function () {
        $('.header-search').slideToggle(200)
    });

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
});
