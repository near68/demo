$(function() {
	//快速登录和账号密码登录样式切换
	$(".login_h").click(function(){
		$(this).addClass('select').siblings().removeClass('select');
	});
	//登录错误信息提示login_tip
	$("#user:text").focusout(function(){
		var re=/[^\w\u4e00-\u9fa5\.\@]/g;//^（非此条件），\w字母和数字和下划线\u4e00-\u9fa5中文字符\\全局匹配
		var noNum=/[\D]/;
		if(re.test(this.value)){$(".error_message").html('含有非法字符！').css({ "color": "red"})//有非法字符时加入红色的'含有非法字符！
		}
			else if($("#user").val()==""){//为空时执行
			}
				else if(noNum.test(this.value)){//非数字时执行
					if($(this).val().indexOf("@qq.com")!=-1){//有则@qq.com符号时执行
					}
						else {
							$(this).val(function(){//没有@符号就返回输入的值，并添加字符@qq.com
								return this.value + "@qq.com";
						})
					}
			}
					else{}			
	});//判断输入框是否为空

});//$function-end