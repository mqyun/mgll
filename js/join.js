/*
* @Author: mqy
* @Date:   2017-05-05 14:12:08
* @Last Modified by:   mqy
* @Last Modified time: 2017-05-10 16:23:05
*/

$(function(){
	$('#dowebok').fullpage({
		anchors: ['page1', 'page2', 'page3'],
		'navigation': true,
		//navigationTooltips: ['合作方案', '编辑备注', '联系我们'],
		afterLoad: function(anchorLink, index){
			if(index == 1){
				setTimeout(function(){
					$(".hezuo_bg").slideDown(700);
				},200);
				setTimeout(function(){
					$(".hezuo_con").eq(0).slideDown(700);
				},300);
				setTimeout(function(){
					$(".hezuo_con").eq(1).slideDown(700);
				},600);
				setTimeout(function(){
					$(".hezuo_con").eq(2).slideDown(700);
				},900);
			}
			if(index == 2){
				$('.zpxx_bg').animate({
					width:'1000'
				},700);
				setTimeout(function(){
					for(var i = 0;i < 3;i++){
						if($('.zpxx_left_nav').eq(i).hasClass('zpxx_left_nav_active')){
							$(".zpxx_right_con").eq(i).slideDown(400);
						}
					}
				},500);
			}
			if(index == 3){
				$('.lxwm_lx').animate({
					width:'50%'
				},700);
				setTimeout(function(){
					$(".lxwm_con").slideDown(400);
				},200);
				setTimeout(function(){
					$(".lxwm_lx_lxb").animate({
						height:'70'
					},100);
				},500);
				setTimeout(function(){
					$(".lxwm_wx_img").slideDown(400);
				},800);
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){
				$(".hezuo_bg").slideUp();
				$(".hezuo_con").slideUp();
			}
			if(index == '2'){
				$('.zpxx_bg').animate({
					width:'0'
				},1000);
				$(".zpxx_right_con").css('display','none');
			}
			if(index == '3'){
				$('.lxwm_lx').animate({
					width:'0'
				},600);
				$(".lxwm_con").slideUp();
				$(".lxwm_lx_lxb").css('height',0);
				$(".lxwm_wx_img").css('display','none');
			}
		}
	});
	setTimeout(function(){
		$(".hezuo_bg").slideDown(700);
	},200);
	setTimeout(function(){
		$(".hezuo_con").eq(0).slideDown(700);
	},300);
	setTimeout(function(){
		$(".hezuo_con").eq(1).slideDown(700);
	},600);
	setTimeout(function(){
		$(".hezuo_con").eq(2).slideDown(700);
	},900);
	$('.zpxx_left_nav').click(function(){
		var index = $('.zpxx_left_nav').index(this);
		$('.zpxx_left_nav').removeClass('zpxx_left_nav_active');
		$('.zpxx_left_nav').eq(index).addClass('zpxx_left_nav_active');
		$('.zpxx_right_con').css('display','none');
		$('.zpxx_right_con').eq(index).slideDown(400);
	});
	$('.zrc_tit_tb').click(function(){
		var index = $('.zrc_tit_tb').index(this);
		$('.zrc_tit_tb').removeClass('zrc_tit_active');
		$('.zrc_tit_tb').eq(index).addClass('zrc_tit_active');
		$('.zrc_con_tb').css('display','none');
		$('.zrc_con_tb').eq(index).slideDown(300);
	});
});