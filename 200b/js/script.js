$(document).ready(function() {

	var timer = null,
	 	i = 0;
	move();
	function move(){
		timer = setInterval(function() {
			i++;
			i%=3;
			$(".ad>dl>dd").eq(i).addClass('active').siblings().removeClass('active');
			$(".ad_pic>li").eq(i).fadeIn(2000).siblings().fadeOut();
			$(".l_tit div").eq(i).show().siblings().hide();
			},2500);
	}//move-end

		$(".ad").hover(function() {
			clearInterval(timer);
			$(".prev_pic,.next_pic").show();
			},function(){
			move();
			$(".prev_pic,.next_pic").hide();
			});
		$(".prev_pic").click(function() {
				var i = $(".ad_pic li:visible").index()-1;
				$(".ad_pic li").eq(i).fadeIn().siblings().fadeOut();
				$(".ad>dl>dd").eq(i).addClass('active').siblings().removeClass('active');
			});
		$(".next_pic").click(function() {
				var i = $(".ad_pic li:visible").index()+1;
				i%=3;
				$(".ad_pic li").eq(i).fadeIn().siblings().fadeOut();
				$(".ad>dl>dd").eq(i).addClass('active').siblings().removeClass('active');
			});
		// 移入AD清除计时器和，移出AD运行move。
		$(".ad>dl>dd").mouseenter(function() {//点击小圆点，运行函数
			var i = $(this).index();//获取点击（this）的元素序列赋给i
			$(".ad_pic li").eq(i).fadeIn().siblings().fadeOut();
			//li（图片）对应index值的li淡入，其他淡出。
			$(this).addClass('active').siblings().removeClass('active');
			//点击的对象添加一个类名，其他的移除
		});


		navhover();
		function navhover() {
		var n_info = $("#nav_info"),
		  	l_n_info = $("#li_nav_info"),
		  	l_n_spec = $("#li_nav_spec"),
		    n_spec = $("#nav_spec");
		
		l_n_info.mouseenter(function() {
			n_info.show();
			clearTimeout(info_timer);
		}).mouseleave(function() {
		 	 info_timer = setTimeout(function() {
		 		n_info.hide();
		 	},600);
		});
		n_info.mouseleave(function() {
			n_info.hide();
		}).mouseenter(function() {
			clearTimeout(info_timer);
		});
	//nav_info-end

		l_n_spec.mouseenter(function() {
			n_spec.show();
			clearTimeout(spec_timer);
		}).mouseleave(function() {
			 spec_timer = setTimeout(function() {
				n_spec.hide();
			},600);
		});
		n_spec.mouseenter(function() {
			clearTimeout(spec_timer);
		}).mouseleave(function() {
			n_spec.hide();
		});  //li_nav_spec-end
	 }; //navhover-end

	 $(window).scroll(function() {
	 	var wscr = $(window).scrollTop();
	 	wscr >400 ? $(".back_top").show() : $(".back_top").hide();
	 });
	 $(".b_top").click(function() {
	 	$("html,body").animate({scrollTop:0},500);
	 });

});

