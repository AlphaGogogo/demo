var interval;
var pos=0;
var cir=0;
var timeout;
window.onload=function () {
	var tab=document.getElementById('tab');
	var imgs=document.getElementsByTagName('img');
	var divs=document.getElementsByClassName('circle');	
	tab.onmouseover=function () {
		clearInterval(interval);

	}
	tab.onmouseout=function () {
		run(imgs,divs);
	}
	run(imgs,divs);
}
var run=function (imgs,divs) {
	divs[cir].style.background='#f00';
	interval=setInterval(function() {
		imgs[pos].style.display='none';
		divs[cir].style.background='none';
		pos=++pos==imgs.length?0:pos;			
		imgs[pos].style.display='inline';
		cir=++cir==divs.length?0:cir;
		divs[cir].style.background='#f00';
	},2000)
}
var prev=function () {
	var lt=document.getElementsByTagName('button')[0];
	var imgs=document.getElementsByTagName('img');
	var divs=document.getElementsByClassName('circle');
	imgs[pos].style.display='none';
	divs[cir].style.background='none';
	pos=--pos==-1?3:pos;			
	imgs[pos].style.display='inline';
	cir=--cir==-1?3:cir;
	divs[cir].style.background='#f00';
}
var next=function () {
	var gt=document.getElementsByTagName('button')[1];
	var imgs=document.getElementsByTagName('img');
	var divs=document.getElementsByClassName('circle');
	imgs[pos].style.display='none';
	divs[cir].style.background='none';
	pos=++pos==imgs.length?0:pos;			
	imgs[pos].style.display='inline';
	cir=++cir==divs.length?0:cir;
	divs[cir].style.background='#f00';
}
var toPage=function (obj) {
	 var imgs=document.getElementsByTagName('img');
	 var divs=document.getElementsByClassName('circle');
	 // console.log(obj);
	 // obj.style.background='#f00';
	 arr.push(obj);
	 if (arr.length>1) {
		var rem=arr.shift(obj);
		rem.style.background='transparent';		
	}
}



