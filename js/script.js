$(function() {
	function backTop() {
	b_t = $(".back_top");
	$(window).scroll(function() {
		var wt = $(window).scrollTop();
		wt > 150 ? b_t.show() : b_t.hide();
	});
	b_t.click(function() {
		$("html,body").animate({scrollTop:0},300);
		});
	}//backTop
	
	timer();//首页时间
	function timer() {
		var myDate = new Date(),
			year = myDate.getFullYear(),
			month = myDate.getMonth()+1,
			date = myDate.getDate(),
			wd = myDate.getDay(),
			h = myDate.getHours(),
			m = myDate.getMinutes(),
			s = myDate.getSeconds();
			if(s<10) {
				s = '0'+s;
			}
		var weekday = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
		document.getElementById('timer').innerHTML = 
		year+'年'+month+'月'+date+'日'+'&nbsp'+weekday[wd]+'&nbsp'+h+':'+m+':'+s;
		setTimeout(timer,500);
	}//首页时间timer
	gotime();
	function gotime(){
		var stime = new Date().getTime();
		var etime = new Date("2017/1/1").getTime();
		var timer_ = Math.ceil((etime-stime)/(24*60*60*1000))
	document.getElementById("endtime").innerHTML = "距离2017年还有："+timer_+"天";
	}
});