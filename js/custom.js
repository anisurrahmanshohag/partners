$(function() {
    'use strict';

    // banner_part start
    $('.port1').on('click', function() {
        $('.local').addClass('tactive'),
            $('.global').addClass('pactive'),
            $('.global').removeClass('tactive')
    });
    $('.port2').on('click', function() {
        $('.global').addClass('tactive'),
            $('.local').addClass('pactive'),
            $('.local').removeClass('tactive')
    });

    $('.port1').on('click', function() {
        $('.query').addClass('finding_box'),
            $('.query').removeClass('shiping_box')
    });
    $('.port2').on('click', function() {
        $('.query').addClass('shiping_box'),
            $('.query').removeClass('finding_box')
    });
    // banner_part end

    $('.logo_slop').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    });
})