Download();
function Download(){
/*获取子节点*/
	var HeadDgText=document.getElementsByClassName('Head-right')[0];
	var HeadDgSone=HeadDgText.firstElementChild;
/*获取订购图片*/
	var HeadDg=document.getElementsByClassName('ImageDg')[0];
/*鼠标移入移出*/
	HeadDgSone.onmouseover=function (){
		HeadDg.style.display='block';
		this.style.background="#527BF6";
		this.style.color="#ffffff";
	}
	HeadDgSone.onmouseout=function (){
		HeadDg.style.display='none';
		this.style.background="#ffffff";
		this.style.color="#527BF6";
	}


/*获取列表*/
	var Ullist=document.getElementsByClassName('Head-middle')[0];
	var list=Ullist.getElementsByTagName('li');
/*每个li添加class*/
	for(var i=0;i<list.length;i++){
		list[i].className='menu'+i;
		list[i].onclick=function(){
			var obj=$(this).attr("class");
/*每个li添加动画*/
			$('html,body').animate({
				"scrollTop": $("#"+obj).offset().top
			},500)
		}
	}	


/*Product列表*/
	var Productlist=document.getElementsByClassName('Product-list')[0];
	var listleft=document.getElementsByClassName('Public-left');
	var listright=Productlist.getElementsByTagName('p');
/*每个li添加鼠标移入移出事件*/
	for(var i=0; i<listleft.length; i++){
		listleft[i].index=i;
		listleft[i].onmouseover=function(){
				var a=this.index;
				listright[a].style.display="block";
		}
		listleft[i].onmouseout=function(){
				var b=this.index;
				listright[b].style.display="none";	
		}
	}

/*User*/
	var Left=document.getElementsByClassName('left')[0];
	var Right=document.getElementsByClassName('right')[0];
	var Listdiv=document.getElementsByClassName('User-bottom-middle')[0];
/*鼠标移入移出事件、轮播事件*/
	var time,right;
	Left.onmouseover=function(){
		Left.style.backgroundImage="url(Image/HomePage/Group-left.png)";
		time=setInterval(function(){
			Listdiv.scrollLeft+=100;
		},600);
	}
	
	Left.onmouseout=function(){
		clearInterval(time);
		Left.style.backgroundImage="url(Image/HomePage/Groupleft.png)";
	}

	Right.onmouseover=function(){
		Right.style.backgroundImage="url(Image/HomePage/Group-right.png)";
		right=setInterval(function(){
			Listdiv.scrollLeft-=300;
		},600);		
	}
	Right.onmouseout=function(){
		clearInterval(right);
		Right.style.backgroundImage="url(Image/HomePage/Groupright.png)";
	}
}