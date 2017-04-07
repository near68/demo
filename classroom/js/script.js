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

}