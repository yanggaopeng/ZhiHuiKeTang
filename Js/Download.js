Download();
function Download(){
/*获取最外层div*/
	var HeadDgText=document.getElementsByClassName('HeadImage')[0];
/*获取订购图片*/
	var HeadDg=document.getElementsByClassName('DgImage')[0];
/*鼠标移入移出*/
	HeadDgText.onmouseover=over;
	HeadDgText.onmouseout=out;
	function over(){
		HeadDg.style.display='block';
		HeadDgText.style.background="#527BF6";
		HeadDgText.style.color="#ffffff";
	}
	function out(){
		HeadDg.style.display='none';
		HeadDgText.style.background="#ffffff";
		HeadDgText.style.color="#527BF6";
	}
/*Banner轮播*/
//---Banner最外层div---//
	var Banner=document.getElementsByClassName('Banner-list')[0];
//---Banner内容---//
	var Bannerlist=document.getElementsByClassName('list')[0];
	var Bannerli=document.getElementsByClassName('public');
//---原始内容滚动完之后紧接加上新内容---//
	Bannerlist.innerHTML+=Bannerlist.innerHTML;
//---列表父的宽度---//
	Bannerlist.style.width=Bannerli[0].offsetWidth*Bannerli.length+'px';
//---滚动速度--//
	var speed=6;
//---鼠标移入移出、计时函数---//
	Banner.onmouseover=stop;
	Banner.onmouseout=play;
	var time=setInterval(play,600);

	function stop(){
		clearInterval(time);
	}

	function play(){
		//---父元素的offsetLeft植小于它的offsetWidth/2,第一套内容滚动完毕。然后重置归0滚动新内容---//
		if(Bannerlist.offsetLeft<-Bannerlist.offsetWidth/2){
			Bannerlist.style.left=0;
		}
		//---父元素向右滚动处于起始位置或队列，left植等于它的-offsetWidth/2。其次left植等于offsetWidth/2+speed,实现无缝滚动。---//
		if(Bannerlist.offsetLeft>0){
			Bannerlist.style.left=-Bannerlist.offsetWidth/2+'px';
		}else{
			Bannerlist.style.left=Bannerlist.offsetLeft+speed+'px';
		}
	}
}	



