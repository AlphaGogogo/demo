window.onload=function () {
	var container=document.getElementById('container');
	var banner=document.getElementById('banner');
	var imgs=document.getElementsByTagName('img');
	var icons=document.getElementById('icons').getElementsByTagName('span');
	var prev=document.getElementById('btnLeft');
	var next=document.getElementById('btnRight');
	var pos=0;
	var cir=0;
	prev.onclick=function () {
		imgs[pos].style.opacity='0';
		icons[cir].style.background='#333'
		pos=--pos==-1?4:pos;
		imgs[pos].style.opacity='1';
		cir=--cir==-1?4:cir;
		icons[cir].style.background='#f00';
	}
	next.onclick=function(){
		imgs[pos].style.opacity='0';
		icons[cir].style.background='#333'
		pos=++pos==5?0:pos;
		imgs[pos].style.opacity='1';
		cir=++cir==5?0:cir;
		icons[cir].style.background='#f00';
	}
}