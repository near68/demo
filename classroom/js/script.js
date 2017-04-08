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
	}//nav-end
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
		var bannerbg = document.getElementById('banner_bg')
		var bannerImg = document.getElementById('banner_img');
		var bImg = bannerImg.getElementsByTagName('img')[0];
		var num = 0;
		var timer = null;
		// var optimer = null;
		var bannerbgArr = ['#d32929','#5145FF','#D5EAEF','#000922','#6AC6F5'];
		var imgarr = ['img/1.jpg','img/2.jpg','img/3.png','img/4.png','img/5.jpg'];
		//初始化banner图片和背景颜色
		bImg.src = imgarr[num];
		bannerbg.style.backgroundColor = bannerbgArr[num];
		bImg.onmouseover = function(){
			clearInterval(timer);
		}
		bImg.onmouseout = function(){
			Timer();
		}
		Timer();
		function Timer(){
			timer = setInterval(function(){
			num++;
			if(num==imgarr.length){num=0;}
			bImg.src = imgarr[num];
			bannerbg.style.backgroundColor = bannerbgArr[num];
			// Optimer();
		},2500)
		}
		}
		// function Optimer(){
		// 	var opacitynum = 0.3;
		// 	bImg.style.opacity = opacitynum;
		// 	optimer	= setInterval(function(){
		// 			opacitynum+=0.1;
		// 			bImg.style.opacity = opacitynum;
		// 			if(opacitynum==1){
		// 				clearInterval(Optimer);}
		// 		},200)
		// 	}
		// Optimer();	
		window.onscroll = function(){
			var backTop = document.getElementById('back_top');
			var ostop = document.documentElement.scrollTop || document.body.scrollTop;
			if(ostop>=250){
				backTop.style.display = 'block';
				}else{
					backTop.style.display = 'none';
				}
			}
		backTop();
		function backTop(){
			var backTop = document.getElementById('back_top');
			var AbackTop = backTop.getElementsByTagName('a')[2];
			var ostop = document.documentElement.scrollTop || document.body.scrollTop;
			if(ostop>=250){
				backTop.style.display = 'block';
				}else{
					backTop.style.display = 'none';
				}
			AbackTop.onclick = function(){
					document.documentElement.scrollTop = document.body.scrollTop = 0;
			}
			}
		
		

}