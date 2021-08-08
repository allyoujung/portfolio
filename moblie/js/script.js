var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 50,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// var swiper = new Swiper(".mySwiper1", {
//   slidesPerView: "auto",
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
var clickTrue=true
$('.navBtn').click(function(){
  $('.bar').toggleClass('addAppbar');
  
  if(clickTrue==true){
    $('.slide_nav').stop().animate({'right':'0'},500);
    clickTrue=false;
  }else{
    $('.slide_nav').stop().animate({'right':'-200px'},500);
    clickTrue=true;
  }
});
$(window).on('load scroll resize', function(){
  var $scrollTop = $(window).scrollTop();
  var $doH = $(document).height();
  var $winH = $(window).height();
  var $headerH = $('header').height();

  //header 스크롤 시 디자인 변경을 위한 클래스 추가
  if($scrollTop >= $headerH){
    $('header').addClass('slim');
  }else{
    $('header').removeClass('slim');
  };
});

$('.typing').typed({
  strings: ['WEB PUBLISHER', 'LEEYOUJUNG','PORTFOLIO'],
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true, // this is a default
  loop: true
});

//메뉴
var menu=$('.main_menu>li');
var s_menu=$('.slide_menu>li');
var f_menu=$('.foot_menu>li');
var content=$('main>.title');
menu.click(function(e){
    e.preventDefault();
    var tg=$(this);
    var i=tg.index();
    //console.log(i);
    var section=content.eq(i);
    var tt=section.offset().top;

    menu.removeClass('on');
    menu.eq(i).addClass('on');
    $('html,body').stop().animate({scrollTop:tt});
});
s_menu.click(function(e){
  e.preventDefault();
  var tg=$(this);
  var i=tg.index();
  //console.log(i);
  var section=content.eq(i);
  var tt=section.offset().top;

  menu.removeClass('on');
  menu.eq(i).addClass('on');
  $('html,body').stop().animate({scrollTop:tt});
});
f_menu.click(function(e){
  e.preventDefault();
  var tg=$(this);
  var i=tg.index();
  //console.log(i);
  var section=content.eq(i);
  var tt=section.offset().top;

  menu.removeClass('on');
  menu.eq(i).addClass('on');
  $('html,body').stop().animate({scrollTop:tt});
});