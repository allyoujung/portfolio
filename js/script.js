$(window).scroll(function () {
    var sct = $(window).scrollTop(),
      skill = $('#skill').offset();
	
    if (sct > skill.top-150 ) {
      var leftMain = $('.leftMain>div');
  
      leftMain.each(function () {
        var progressWrap = $(this).find('.progress_bar');
        var progressBar = progressWrap.find('.bar');
        var progressText = progressWrap.find('.num');
        var progressNum = progressText.attr('data-num');

        console.log(progressNum);
  
        //움직일대상.animate({속성:속성값},시간); - 애니메이트주는방법
        progressBar.stop().animate({
          width: progressNum + "%"
        }, 2000);
  
        //setInterval(할일, 시간);
        // % = 움직일려고 하는 넓이/전체넓이 * 100
        setInterval(textNum, 1000 / 10);
  
        function textNum() {
          var currentWidth = progressBar.width() / progressWrap.width() * 100;
          progressText.text(Math.ceil(currentWidth) + "%");
        }
  
      });
    }
    //스크롤
    var sct=$(window).scrollTop();
    content.each(function(){
        var tg=$(this);
        var i=tg.index();
        if (tg.offset().top <= sct) {
            menu.removeClass('on');
            menu.eq(i).addClass('on');
        }
		if(500 > sct){
			menu.removeClass('on');
		}
    });
});

//메뉴 색상변경
var menu=$('#nav > ul > li');
var content=$('#main > div > div');
menu.click(function(e){
    e.preventDefault();
    
    var tg=$(this);
    var i=tg.index();
    var section=content.eq(i);
    var tt=section.offset().top;
    menu.removeClass('on');
    menu.eq(i).addClass('on');
    $('html, body').stop().animate({scrollTop:tt});
});

//배경색 생성
const header = document.querySelector("#nav");
var winH = $(window).height();

window.addEventListener("scroll", () => {
      if (window.scrollY > winH) {
      header.setAttribute("style", "background: white;");
   } else {
      
header.setAttribute("style", "background: transparent;");
   }
});
//슬라이더
$(function(){
	var banner=$('.pofi');
	var button=$('.photo_list>ul>li');
	var current=0;
	var setIntervalId;

	timer();
	function timer(){
		setIntervalId=setInterval(function(){
			
			var prev = banner.eq(current);
			var prevBtn = button.eq(current);
			banner.removeClass('on');
			move(prev,1,0);
			prev.removeClass('on');
			prevBtn.removeClass('on');
			current++;
			
			if(current==banner.size()){
				current=0;
			}
			
			var next = banner.eq(current);
			var nextBtn = button.eq(current);
			
			move(next,0,1);
			next.addClass('on');
			nextBtn.addClass('on');
			
		},3000);
	}
	
	function move(tg, start, end){
		tg.css('opacity',start).stop().animate({opacity:end},1000);
	}
	
	$('.pofi').on({mouseover:function(){
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer();
	}
	});
	
	//button.on({click:function(){}});
	button.click(function(){
		var tg=$(this);
		var i=tg.index();
		clearInterval(setIntervalId);
		banner.removeClass('on');
		banner.eq(i).addClass('on');
		button.removeClass('on');
		tg.addClass('on');
		if(current>i){
			move2(i);
		}else{
			move1(i);
		}
		
	});
	
	function move1(i){
		if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("opacity","1").stop().animate({opacity:'0'},500);
		nextEl.css('opacity','0').stop().animate({opacity:'1'},500);
		current=i;
	}
	function move2(i){
		if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
		var currentEl=banner.eq(current);
		var nextEl=banner.eq(i);
		currentEl.css("opacity","1").stop().animate({opacity:'0'},500);
		nextEl.css('opacity','0').stop().animate({opacity:'1'},500);
		current=i;
	}
	
});
