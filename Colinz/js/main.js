$(function(){$("#slider").slick({slidesToShow:1,slidesToScroll:1,autoplaySpeed:3e3,infinite:!0,cssEase:"linear",arrows:!0,prevArrow:'<button type="button" class="slick-prev slick-arrow-prev">Previous</button>',nextArrow:'<button type="button" class="slick-next slick-arrow-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>'}),$(".multiple-items").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,arrows:!0})});