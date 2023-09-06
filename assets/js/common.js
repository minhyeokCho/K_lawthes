$(document).ready(function(){
	$('.loc_tab_wrap a').length && locTab();
	$('.m_gnb_area').length && mGnbMenu(); //Mobile GNB 메뉴
	$('.swiper').length && swiperSlide();
	$('.news_list').length && newsSlide();
	$('.badge_slide').length && badgeSwiper();
	$('.main_visual').length && mainVisualTab();
	$('.gnb_wrap').length && pcGnb();
});

$(window).on('scroll', function(){
	var scrollTop = $(window).scrollTop(),
		logoH = $('.logo_area').height();

	if(scrollTop > logoH){
		$('#wrap').addClass('fixed')
	}else{
		$('#wrap').removeClass('fixed')
	}
});

$(window).on('load', function(){
	$('.map_cotn .group').css('display','none')
	$('.map_cotn .group.on').css('display','block')
});
var ww = $(window).width();
$(window).on('resize', function(){
	ww = $(window).width();
	if(ww > 1200){
		$('body').css('overflow','');
	}else{
		if($('.m_gnb_area').hasClass('on')){
			$('body').css('overflow','hidden');
		}else{
			$('body').css('overflow','');

		}
	}
});

function dimShow(){ /* 딤드 show */
	$('.dim').addClass('on');
}
function dimHide(){ /* 딤드 hide */
	$('.dim').removeClass('on');
}

function pcGnb() {//PC GNB 메뉴
	$('.gnb ul li > a').on('mouseover',function(){
		$(this).addClass('on')
	})
	$('.gnb ul li').on('mouseleave',function(){
		$(this).find('a').removeClass('on')
	})
}

function mGnbMenu() { //Mobile GNB 메뉴
	var gnbBtn = $('.btn_nav'),
		gnbWrap = $('.m_gnb_area'),
		closeBtn = $('.m_gnb_close');

	gnbBtn.on('click', function(){ //Mobile GNB 열기
		gnbWrap.addClass('on');
		$('body').css('overflow','hidden');
		dimShow();
	});

	closeBtn.on('click', function(){ //Mobile GNB 닫기
		gnbWrap.removeClass('on');
		$('body').css('overflow','');
		dimHide();
	});

	$('.dim').on('click', function(){ //Mobile GNB 닫기
		gnbWrap.removeClass('on');
		$('body').css('overflow','');
		dimHide();
	});

	$('.has_dep').on('click', function(e){ //커뮤니티 슬라이드
		e.preventDefault();
		$(this).toggleClass('on');
		$(this).find('div').slideToggle();
	});
}


function locTab(){ //오시는길 탭
	$('.loc_tab_wrap a').on('click', function(){
		var $this = $(this),
			cnt = $this.index();

		$('.loc_tab_wrap a').removeClass('on');
		$this.addClass('on')

		$('.map_cotn .group').css('display','none').removeClass('on')
		$('.map_cotn .group').eq(cnt).css('display','block').addClass('on');

		window.setTimeout(function() {
			map.relayout();
		}, 0);

		return false;
	});
}

function swiperSlide(){
	var swiper = new Swiper('.main_case_cotn .swiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		centeredSlides: false,
		loop: true,
		loopAdditionalSlides : 1,
		autoplay:{
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {

			1750: {
				slidesPerView:3,
			},
			1200: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			500: {
				slidesPerView: 1,
			},
		},
	});
}

function newsSlide(){
	var newsSlide = new Swiper('.news_list .swiper', {
		slidesPerView: 1,
		spaceBetween: 10,
		centeredSlides: false,
		loop: true,
		loopAdditionalSlides : 1,
		autoplay:{
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.news_btn_next',
			prevEl: '.news_btn_prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			500: {
				slidesPerView: 1,
			},
		},
	});
}

function badgeSwiper(){
	var swiper = new Swiper('.badge_slide .swiper', {
		slidesPerView: 2,
		loop: true,
		loopAdditionalSlides : 1,
		autoplay:{
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			768: {
				slidesPerView: 5,
			},
			500: {
				slidesPerView: 3,
			},
		},
	});
}


function mainVisualTab(){ // 메인슬라이드 탭
	$('.main_tab_list .group').on('click', function(){
		var $this = $(this),
			cnt = $this.index();

		$('.main_tab_list .group').removeClass('on');
		$this.addClass('on');

		// 메인 텍스트
		$('.main_visual_list .group').removeClass('on');
		$('.main_visual_list .group').eq(cnt).addClass('on');

		// 메인 이미지
		$('.main_visual_bg .group').removeClass('on');
		$('.main_visual_bg .group').eq(cnt).addClass('on');

		no = cnt;
	})
}

let no = 1;

function mainNumber() { //메인슬라이드
	if(no <= 6){

		$('.main_tab_list .group').removeClass('on');
		$('.main_tab_list .group').eq(no).addClass('on');
		// 메인 텍스트
		$('.main_visual_list .group').removeClass('on');
		$('.main_visual_list .group').eq(no).addClass('on');

		// 메인 이미지
		$('.main_visual_bg .group').removeClass('on');
		$('.main_visual_bg .group').eq(no).addClass('on');
	}else{
		no = 0;
		return false;
	}
	no++;
}

setInterval(function() {
	mainNumber()
}, 10000);
