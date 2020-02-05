$(document).ready(function(){
  $('#loader').delay(700).fadeOut();
  $(function() {
    AOS.init({
        duration: 900,
        easing: 'ease-in-sine',
        delay: 200,
        disable: window.innerWidth < 500,
        once: true
    });
  });
	$('.s-9-slider').slick({
		centerMode: true,
	  	infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	variableWidth: true,
      responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      }
    ]
	});
  $("#open-menu").click(function(){
      $("nav ul.ul-0").fadeIn();
      $("#open-menu").fadeOut();
      $("#close-menu").fadeIn();
  });
  $("#close-menu").click(function(){
      $("nav ul.ul-0").fadeOut();
      $("#open-menu").fadeIn();
      $("#close-menu").fadeOut();
  });
  $(".home").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 600);
  });
  $(".demos").click(function() {
      $('html, body').animate({
          scrollTop: $("#home-section-6").offset().top
      }, 1000);
  });
   $(".elements").click(function() {
      $('html, body').animate({
          scrollTop: $("#home-section-12").offset().top
      }, 1000);
  });
   $(".buy-button").click(function() {
      $('html, body').animate({
          scrollTop: $("#home-section-13").offset().top
      }, 1000);
  });
});
$(window).scroll(function(){
  var top = $(window).scrollTop();
    var find_class = $.contains('a.a-0', '.small');
    var find_class = $.contains('header', '.bg-active');
    var find_class = $.contains('.a.a-0-9', '.button-small');
    if(top > 50 && find_class == false) { // tu zmieniamy wysokosc - gdy strona zjedzie 200px w dol
      $('a.a-0').addClass('small'); // nawigacja otrzyma klase small
      $('header').addClass('bg-active');
      $('a.a-0-9').addClass('button-small');
    }
    else {
      $('a.a-0').removeClass('small'); // w przeciwnym wypadku usuwamy klase small
      $('header').removeClass('bg-active');
      $('a.a-0-9').removeClass('button-small');
    }

  var find_class_fixed = $.contains('a', '.fixed');
    if(top > 920 && find_class_small == false) {
      $('a').addClass('fixed');
    }
    else {
      $('a').removeClass('fixed');
    }
 
});