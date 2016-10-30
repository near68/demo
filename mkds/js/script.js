$(function(){
	var numa = $(".imgNum>a"),
		iB_li = $(".imgBox>li");
 	numa.click(function() {
 		i = $(this).index();
 		iB_li.eq(i).show().siblings().hide();
 		$(this).addClass('active').siblings().removeClass('active');
 	})
 	etime();
 	function etime() {
 		var tt = new Date().getTime(),
 		 	et = new Date("2016/12/24,21:30:00").getTime(),
 		 	at = parseInt((et-tt)/1000),
 		 	getday = parseInt(at/(24*60*60)),
 		 	geth = parseInt(at/(60*60)%24),
 		 	getm = parseInt(at/60%60),
 		 	gets = parseInt(at%60);
 		 	if(gets<10) {
 		 		gets ="0"+gets;
 		 	}
 		 $(".wuhuo").text("限时抢购还剩："+getday+"天"+geth+"小时"+getm+"分"+gets+"秒");
 		if(at<=0) {
 		$(".wuhuo").text("抢购结束");
 		}
 		setTimeout(etime,500);
 		}
 	


});
