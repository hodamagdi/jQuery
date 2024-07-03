/// <reference types="../@types/jquery"/>

// start sideNav section 

const navAnchorwidth = $('.navAnchor').outerWidth(true);

// console.log(navAnchorwidth);

//! first: Close sideNav 
$('#sideNav')
    .animate({ left: -navAnchorwidth }, 0);

let isOpen = false

//! second: on click "navIcon" ,toggle open & close sideNav
$('#sideNav .navIcon')
    .on('click', function () {
        let status;
        // = isOpen ? -navAnchorwidth : 0;
        if (isOpen) {
            status = -navAnchorwidth
            $('.home-content').animate({ marginLeft: 0 }, 1000)
        } else {
            status = 0
            $('.home-content').animate({ marginLeft: navAnchorwidth }, 1000)
        }
        isOpen = !isOpen;

        $(this).parent()
            .animate({ left: status }, 1000)

    })

//! closeIcon
$('.closeIcon')
    .on('click', function () {
        isOpen = !isOpen;
        $('#sideNav')
            .animate({ left: -navAnchorwidth }, 1000);
        $('.home-content').animate({ marginLeft: 0 }, 1000)
    })


//! scroll to sections
$('.sideNav-link[href^="#"]')
    .on('click', function () {
        const sectionId = $(this).attr('href');
        // console.log(section);
        //! get section top 
        const sectionTop = $(sectionId).offset().top;
        // console.log(top);
        $('html , body')
            .animate({ scrollTop: sectionTop }, 2000)
    })

// end sideNav section 

// start Acordion section 
//! slideToggle effect 
$('#Acordion .toggle').on('click', function () {
    //! slide up all inner except the one i clicked on 
    $('.inner').not($(this).next()).slideUp(500);
    //! slide toggle 
    $(this).next().slideToggle(500);
});
// end Acordion section 

//start count section
$(window).on('load', function () {
    countDownTime("24 january 2025 00:00:00");
})


function countDownTime(countTo) {

    //! get countTo date
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);
    // console.log(futureDate);

    //! get current date 
    let now = new Date();
    // console.log(now);
    now = (now.getTime() / 1000);

    //! get the difference between current date and countTo date by sec
    timeDifference = (futureDate - now);

    //?(24 * 60 * 60) ==> num. of sec in day ==> 86400
    let days = Math.floor(timeDifference / 86400);
    let hours = Math.floor((timeDifference - (days * 86400)) / 3600);
    let mins = Math.floor((timeDifference - (days * 86400) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * 86400) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)

    //! Repeating the Countdown Every Second
    setInterval(function () {
        countDownTime(countTo);
    }, 1000);
}
//end count section

//start contact-us section
let maxLength = 100;
$('textarea').on('keyup', function () {
    //! val as getter ==> lenght
    let length = $(this).val().length;
    // console.log(length);
    let AmountLeft = maxLength - length;
    console.log(AmountLeft);
    if (AmountLeft <= 0) {
        $("#chars").text("your available characters finished");
    }
    else {
        $("#chars").text(AmountLeft);
    }
});
//end contact-us section