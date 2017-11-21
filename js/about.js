/*
* @Author: mqy
* @Date:   2017-05-10 12:25:04
* @Last Modified by:   mqy
* @Last Modified time: 2017-05-15 12:05:52
*/

$(function(){
	$('#dowebok').fullpage({
		anchors: ['page1','page2'],
		'navigation': true,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.tdqy_left').animate({
					top: '0',
					left: '-600'
				},500);
				$('.tdqy_right').animate({
					top: '-320',
					left: '240'
				},500);
				setTimeout(function(){
					$('.tdqy_left').animate({
						top: '-160',
						left: '-400'
					},500);
					$('.tdqy_right').animate({
						top: '-160',
						left: '60'
					},500);
				},500);
				setTimeout(function(){
					$('.tdqy_left_tip').animate({
						left: '-34'
					});
					$('.tdqy_right_tip').animate({
						right: '-34'
					});
				},700);
				setTimeout(function(){
					$('.tdqy_con_con').slideDown(700);
				},500);
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){
				$('.tdqy_left').animate({
					top: '-1000',
					left: '-2000'
				},200);
				$('.tdqy_right').animate({
					top: '1000',
					left: '2000'
				},200);
				setTimeout(function(){
					$('.tdqy_left_tip').animate({
						left: '-1000%'
					});
					$('.tdqy_right_tip').animate({
						right: '-1000%'
					});
				},200);
				setTimeout(function(){
					$('.tdqy_con_con').slideUp();
				},200);
			}
		}
	});
	$('.tdqy_left').animate({
		top: '0',
		left: '-600'
	},500);
	$('.tdqy_right').animate({
		top: '-320',
		left: '240'
	},500);
	setTimeout(function(){
		$('.tdqy_left').animate({
			top: '-160',
			left: '-400'
		},500);
		$('.tdqy_right').animate({
			top: '-160',
			left: '60'
		},500);
	},500);
	setTimeout(function(){
		$('.tdqy_left_tip').animate({
			left: '-34'
		});
		$('.tdqy_right_tip').animate({
			right: '-34'
		});
	},700);
	setTimeout(function(){
		$('.tdqy_con_con').slideDown(700);
	},500);
	// $('.map_bg').mouseenter(function(){
	// 	$.fn.fullpage.setAllowScrolling(false, 'up');
	// });
	// $('.map_bg').mouseout(function(){
	// 	$.fn.fullpage.setAllowScrolling(true);
	// });
	// var href_all = window.location.href;
	// var hreflength=href_all.length;
	// var href_a = href_all.substring(hreflength-2,hreflength);
	// if (href_a === 'ml' || href_a === 'e1') {
	// 	$('.ckdt').css('display','block');
	// }else if(href_a === '/1'){
	// 	$('.ckdt').css('display','none');
	// }
	$('.fp-controlArrow.fp-next').click(function(){
		var href = window.location.href;
		var hreflength=href.length;
		var href_n = href.substring(hreflength-2,hreflength);
		if (href_n === 'ml' || href_n === 'e1') {
			$('.ckdt').css('display','none');
			$('.tdqy_left').animate({
				top: '-1000',
				left: '-2000'
			},200);
			$('.tdqy_right').animate({
				top: '1000',
				left: '2000'
			},200);
			setTimeout(function(){
				$('.tdqy_left_tip').animate({
					left: '-1000%'
				});
				$('.tdqy_right_tip').animate({
					right: '-1000%'
				});
			},200);
			setTimeout(function(){
				$('.tdqy_con_con').slideUp();
			},200);
		}else if(href_n === '/1'){
			$('.ckdt').css('display','block');
			$('.tdqy_left').animate({
				top: '0',
				left: '-600'
			},500);
			$('.tdqy_right').animate({
				top: '-320',
				left: '240'
			},500);
			setTimeout(function(){
				$('.tdqy_left').animate({
					top: '-160',
					left: '-400'
				},500);
				$('.tdqy_right').animate({
					top: '-160',
					left: '60'
				},500);
			},500);
			setTimeout(function(){
				$('.tdqy_left_tip').animate({
					left: '-34'
				});
				$('.tdqy_right_tip').animate({
					right: '-34'
				});
			},700);
			setTimeout(function(){
				$('.tdqy_con_con').slideDown(700);
			},500);
		}
	});
	$('.fp-controlArrow.fp-prev').click(function(){
		var href = window.location.href;
		var hreflength=href.length;
		var href_n = href.substring(hreflength-2,hreflength);
		if (href_n === 'ml' || href_n === 'e1') {
			$('.ckdt').css('display','none');
			$('.tdqy_left').animate({
				top: '-1000',
				left: '-2000'
			},200);
			$('.tdqy_right').animate({
				top: '1000',
				left: '2000'
			},200);
			setTimeout(function(){
				$('.tdqy_left_tip').animate({
					left: '-1000%'
				});
				$('.tdqy_right_tip').animate({
					right: '-1000%'
				});
			},200);
			setTimeout(function(){
				$('.tdqy_con_con').slideUp();
			},200);
		}else if(href_n === '/1'){
			$('.ckdt').css('display','block');
			$('.tdqy_left').animate({
				top: '0',
				left: '-600'
			},500);
			$('.tdqy_right').animate({
				top: '-320',
				left: '240'
			},500);
			setTimeout(function(){
				$('.tdqy_left').animate({
					top: '-160',
					left: '-400'
				},500);
				$('.tdqy_right').animate({
					top: '-160',
					left: '60'
				},500);
			},500);
			setTimeout(function(){
				$('.tdqy_left_tip').animate({
					left: '-34'
				});
				$('.tdqy_right_tip').animate({
					right: '-34'
				});
			},700);
			setTimeout(function(){
				$('.tdqy_con_con').slideDown(700);
			},500);
		}
	});
});