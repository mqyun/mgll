/*
* @Author: mqy
* @Date:   2017-04-24 14:28:40
* @Last Modified by:   mqy
* @Last Modified time: 2017-05-12 15:36:04
*/

$(function(){
	$('#dowebok').fullpage({
		anchors: ['page1', 'page2'],
		'navigation': true,
		//menu: '.header_con_nav',
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.section2_bg').addClass('section2_bg_ac');
				$('.section2').find('.section2_bg').delay(500).animate({
					opacity: '1'
				}, 800, 'easeOutExpo');
				$('.section2').find('.section2_lx').delay(500).animate({
					width: '100'
				}, 1300, 'easeOutExpo');
				$('.section2').find('.section2_con1').delay(500).animate({
					opacity: '1',
					top: '-169'
				}, 1300, 'easeOutExpo');
				$('.section2').find('.section2_con2').delay(500).animate({
					top: '101',
					left: '-273'
				}, 1300, 'easeOutExpo');
				$('.section2').find('.section2_con3').delay(500).animate({
					top: '101',
					left: '166'
				}, 1300, 'easeOutExpo');
				// $('.section2').find('.section2_nav1').delay(500).animate({
				// 	opacity: '1'
				// }, 5000, 'easeOutExpo');
				// $('.section2').find('.section2_nav2').delay(500).animate({
				// 	top: '256',
				// 	left: '-47'
				// }, 700, 'easeOutExpo');
				// $('.section2').find('.section2_nav3').delay(500).animate({
				// 	top: '256',
				// 	left: '328'
				// }, 700, 'easeOutExpo');
				// $('.section2_bg').addClass('section2_bg_ac');
				// $('.section2').find('.section2_bg').delay(500).animate({
				// 	opacity: '1'
				// }, 1600, 'easeOutExpo');
				// $('.section2_tit').css('display','block');
				// $('.section2_con').css('display','none');
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2_bg').removeClass('section2_bg_ac');
				$('.section2').find('.section2_bg').delay(500).animate({
					opacity: '0'
				}, 600, 'easeOutExpo');
				$('.section2').find('.section2_lx').delay(500).animate({
					width: '0'
				}, 600, 'easeOutExpo');
				$('.section2').find('.section2_con1').delay(500).animate({
					opacity: '0',
					top: '-1200%'
				}, 600, 'easeOutExpo');
				$('.section2').find('.section2_con2').delay(500).animate({
					top: '1200%',
					left: '-1200%'
				}, 200, 'easeOutExpo');
				$('.section2').find('.section2_con3').delay(500).animate({
					top: '1200%',
					left: '1200%'
				}, 600, 'easeOutExpo');
				// $('.section2').find('.section2_nav1').delay(500).animate({
				// 	opacity: '0'
				// }, 700, 'easeOutExpo');
				// $('.section2').find('.section2_nav2').delay(500).animate({
				// 	top: '1200%',
				// 	left: '-1200%'
				// }, 700, 'easeOutExpo');
				// $('.section2').find('.section2_nav3').delay(500).animate({
				// 	top: '1200%',
				// 	left: '1200%'
				// }, 700, 'easeOutExpo');
				// $('.section2_bg').removeClass('section2_bg_ac');
				// $('.section2').find('.section2_bg').delay(500).animate({
				// 	opacity: '0'
				// }, 700, 'easeOutExpo');
			}
		}
	});
	$('.start_center').animate({
		width:'100%'
	},1000);
	setTimeout(function(){ 
		$('.start_center').css('display','none');
		$('.start_top').animate({
			height:'0'
		},1000);
		$('.start_bottom').animate({
			height:'0'
		},1000);
	},1000);
	setTimeout(function(){
		$('.start_top').css('display','none');
		$('.start_bottom').css('display','none');
	},2000);
	setTimeout(function(){
		$('.section1_logo').animate({
			opacity:'1'
		},1500);
	},1200);
	setTimeout(function(){
		$('.section1_word').animate({
			opacity:'1'
		},1500);
	},1600);
	setTimeout(function(){
		$('.section1_video_img').animate({
			opacity:'1'
		},1500);
	},2200);
	$('.v_start').click(function(){
		$('.v_bg').css('display','block');
		$('.header').css('display','none');
	});
	$('.v_close').click(function(){
		$('.v_bg').css('display','none');
		$('.header').css('display','block');
	});
	// $('.section2_nav').click(function(){
	// 	var index = $('.section2_nav').index(this);
	// 	$('.section2_tit').css('display','none');
	// 	$('.section2_con').css('display','none');
	// 	$('.section2_con').eq(index).css('display','block');
	// });
});