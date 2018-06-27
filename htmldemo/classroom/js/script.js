window.onload = function(){
	nav();
	function nav(){
	var osubul = document.getElementById('subul');
	var ali = osubul.getElementsByTagName('li');
	var scw = document.getElementById('subnav_child_wrap');
	var scwli = scw.getElementsByTagName('li');
	var timer=null;
	for(var i = 0 ; i < ali.length; i++){
		ali[i].index = i;
		ali[i].onmouseover =function(){
			clearInterval(timer);
			for(var i = 0; i < scwli.length; i++){
			 		ali[i].className = '';
                    scwli[i].className = 'subnav_child';
                }
               ali[this.index].className = 'active';
               scwli[this.index].className = 'subnav_child active';
               
			}
		ali[i].onmouseout = function(){
			var This = this;
			timer = setTimeout(function(){
			for(var i = 0; i < scwli.length; i++){
			 		ali[This.index].className = '';
			 		scwli[This.index].className = 'subnav_child';
                }
		},500);
		}
		scwli[i].onmouseover = function(){
			clearInterval(timer);
		}
		scwli[i].onmouseout = function(){
			timer = setTimeout(function(){
			for(var i = 0; i < scwli.length; i++){
			 		ali[i].className = '';
			 		scwli[i].className = 'subnav_child';
                }
		},500);
		}
	}
	}// nav-end
	micorList();
	function micorList(){
		var micorbox = document.getElementById('micor_box');
		var pre = document.getElementById('micor_box_pre');
		var next = document.getElementById('micor_box_next');
		var micor = document.getElementById('micor_list');
		var aarr =micor.getElementsByTagName('a');//7个
		var num = 0;
		var aarrLen = aarr.length-4;//页面展示5个总数减去页面的5个，减4是为了最后一个显示空白，让用户体验更好，知道已经到达最后。
		pre.onclick = function(){
			num--;
			if(num<0){num=0}
			micor.style.marginLeft=(num*-245)-1+'px';
		}
		next.onclick = function(){
			num++;
			if(num>aarrLen){num=aarrLen}
			micor.style.marginLeft=(num*-245)-1+'px';
		}
		micorbox.onmouseover = function(){
			pre.style.display = 'block';
			next.style.display = 'block';
		}
		micorbox.onmouseout = function(){
			pre.style.display = 'none';
			next.style.display = 'none';
		}
		pre.onmouseover = function(){
			if(num==0){return;}
			this.style.backgroundPosition = -53+'px'+' '+-69+'px';
		}
		next.onmouseover = function(){
			this.style.backgroundPosition = -78+'px'+' '+-69+'px';
		}
		pre.onmouseout = function(){
			this.style.backgroundPosition = 0+' '+-69+'px';
		}
		next.onmouseout = function(){
			this.style.backgroundPosition = -27+'px'+' '+-69+'px';
		}
	}//micorList-end
	banner();
	function banner(){
		var banCont 		= document.getElementById('banner_content');
		var bannerbg 		= document.getElementById('banner_bg')
		var bannerImg 	= document.getElementById('banner_img');
		var opre 				= document.getElementById('ban_pre');
		var onext 			= document.getElementById('ban_next');
		var bImg				= bannerImg.getElementsByTagName('img')[0];
		var oul 				= bannerbg.getElementsByTagName('ul')[0];
		var ali 				= oul.getElementsByTagName('li');
		var num 				= 0;
		var timer 			= null;
		var bannerbgArr = ['#d32929','#5145FF','#D5EAEF','#000922','#6AC6F5'];
		var imgarr 			= ['img/1.jpg','img/2.jpg','img/3.png','img/4.png','img/5.jpg'];
		
		//初始化banner和背景颜色
		//动态添加入li
		for(var i = 0; i < imgarr.length;i++){
			oul.innerHTML += "<li></li>";
			}
		ali[num].className = 'select';//设置第一个li的className
		//统一调用的banner_move
		banMove();
		function banMove(){
			for(var i = 0; i <imgarr.length; i++){
				ali[i].className = '';
			}
			bImg.src = imgarr[num];
			bannerbg.style.backgroundColor = bannerbgArr[num];
			ali[num].className = 'select';
		}

		
		for(var i = 0; i <imgarr.length; i++){
			ali[i].index = i;
			ali[i].onclick = function(){
			num=this.index;
			banMove();
			}
		}
		//点击opre&&onext
		opre.onclick = function(){
			num--;
			if(num<0){num=bannerbgArr.length-1;}
			banMove();
			}
		onext.onclick = function(){
			num++;
			num%=imgarr.length;
			banMove();
			}
		//鼠标移入banner清除定时器和开启定时器
		banCont.onmouseover = function(){
			clearInterval(timer);
			opre.style.display = 'block';
			onext.style.display = 'block';
		}
		banCont.onmouseout = function(){
			Timer();
			opre.style.display = 'none';
			onext.style.display = 'none';
		}
		Timer();
		function Timer(){
			timer = setInterval(function(){
			onext.onclick();
			},3000)
		}
	}// banner
		
		backTop();
		function backTop(){//回到顶部函数
			var obt = document.getElementById('back_top')//右侧回到顶部3个按钮
			var obta = obt.getElementsByTagName('a')[2];//回到顶部按钮（第三个a标签）
			var cHeight = document.documentElement.clientHeight;
			var ost = document.documentElement.scrollTop || document.body.scrollTop;
			var bTimer = null;
			var onoff = true;
			ost >= cHeight ? obt.style.display = 'block' : obt.style.display = 'none';
			window.onscroll = function(){
				var ost = document.documentElement.scrollTop || document.body.scrollTop;
				if(!onoff){
					clearInterval(bTimer);
				}
				ost >= cHeight ? obt.style.display = 'block' : obt.style.display = 'none';
				onoff = false;
			}
			obta.onclick = function(){
			bTimer = setInterval(function(){
				var ost = document.documentElement.scrollTop || document.body.scrollTop;//滚动条偏移兼容IE和现代浏览器
				onoff = true;
				var speed = Math.floor(-ost/3);
				document.documentElement.scrollTop = document.body.scrollTop = ost + speed;
				// ost>=400 ? obt.style.display = 'block' : obt.style.display = 'none';//滚动条偏移大于等于400显示
				if(ost==0){clearInterval(bTimer);}
			},50)
			}
		}
	
}