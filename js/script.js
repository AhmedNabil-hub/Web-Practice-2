/* global $, alert, console */

$(function() {
    'use strict';
    $('.header').height($(window).height());
    $(window).resize(function() {
        $('.header').height($(window).height());
        $('.slider').each(function() {
            $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
        });
    });

    $('.links li a').click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.slider').each(function() {
        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
    });

    $(document).ready(function() {
        $('.slider').bxSlider({
            pager: false
        });
    });

    $('.links li a').click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    (function autoSlider() {
        $('.slider2 .active').each(function() {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function() {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function() {
                    $(this).removeClass('active')
                    $('.slider2 div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());


    $('.shuffle li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    mixitup('.photos');

    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',
        cursorborderradies: '6px'
    });


    //let heartElements = document.querySelectorAll(".row .heart");
    //heartElements.forEach(heartElement => {
    //    $(this).click(function() {
    //        this.childNodes[this.childNodes.length - 1].value += 1;
    //        console.log(this.childNodes[this.childNodes.length - 1].value);
    //    });
    //});

});