import { useEffect } from 'react';

const useScript = () => {
  useEffect(() => {
    $(".reviews").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    });
    $.fn.jQuerySimpleCounter = function (options) {
      var settings = $.extend(
        {
          start: 0,
          end: 100,
          easing: "swing",
          duration: 400,
          complete: "",
        },
        options
      );
    
      var thisElement = $(this);
    
      $({ count: settings.start }).animate(
        { count: settings.end },
        {
          duration: settings.duration,
          easing: settings.easing,
          step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
          },
          complete: settings.complete,
        }
      );
    };
    $(".number1").jQuerySimpleCounter({ end: 300, duration: 5000 });
    $(".number2").jQuerySimpleCounter({ end: 206, duration: 5000 });
    $(".number3").jQuerySimpleCounter({ end: 200, duration: 5000 });
    $(".number4").jQuerySimpleCounter({ end: 15, duration: 5000 });
    
    $(".ab-sticky-navbar").removeClass("fixed-header");
    $(".ab-sticky-navbar").addClass("d-none");
    $(".ab-main-navbar").removeClass("d-none");
    
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $(".ab-sticky-navbar").addClass("fixed-header");
        $(".ab-sticky-navbar").removeClass("d-none");
        $(".ab-main-navbar").addClass("d-none");
      } else {
        $(".ab-sticky-navbar").removeClass("fixed-header");
        $(".ab-sticky-navbar").addClass("d-none");
        $(".ab-main-navbar").removeClass("d-none");
      }
    });
    
  }, []);
};

export default useScript;