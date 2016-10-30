$(function() {
	subnavShowHide();
	function subnavShowHide() {
	$(".subnav ul li").mouseover(function() {
		$(this).addClass('hover').siblings().removeClass('hover');
		var i = $(this).index();
		$(".subnav_cont").css({zIndex: '1'});
		$(".scitem").eq(i).show().siblings().hide();
	});
	$(".subnav ul li").mouseout(function() {
		$(".scitem").hide();
		$(".subnav_cont").css({zIndex: '0'});
	});
	$(".scitem").hover(function() {
	$(this).show();}, function() {$(this).hide();
	});
	$(".scitem").hover(function() {
	$(".subnav_cont").css({zIndex: '1'});
	}, function() {
	$(".subnav_cont").css({zIndex: '0'});
	});
	/*-------------------------------*/
	$(".banner_img>li,.shoping,#header,.main_nav").mouseover(function(){
	$(".subnav_list li").removeClass('hover');
	});
	}//function subnavShowHide()-end商品分类列表导航动态效果

//-------------------------//
	
	var timer = null;
	var i = 0;
	move();
	function move() {
		timer = setInterval(function() {
			i++;
			i%=5;
			$(".small_nav li").eq(i).addClass('select').siblings().removeClass('select');
			$(".banner_img li").eq(i).show().siblings().hide();
		},2500);
	}
	$(".small_nav li").mouseenter(function() {
		var i =$(this).index();
		$(".banner_img li").eq(i).show().siblings().hide();
		$(this).addClass('select').siblings().removeClass('select');
	});

});
