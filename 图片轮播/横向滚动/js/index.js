
/**
 * 获取html元素
 */

var oWrap = document.querySelector('.wrap');
var oUl = document.querySelector('.imglist');
var aIdots = document.querySelector('.idotlist').children;
var oPrev = document.querySelector('.prev');
var oNext = document.querySelector('.next');


var curImgIdx = 1;
var isAnimating = false;
var timer;


/**
 * 事件处理
 */
oPrev.onclick = function() {
	if (isAnimating) {
		return;
	}

	if (curImgIdx == 1) {
		curImgIdx = 6;
	}else {
		curImgIdx--;
	}
	tab(520);
	changeIdots();
}
oNext.onclick = function() {
	if (isAnimating) {
		return;
	}
	if (curImgIdx == 6) {
		curImgIdx = 1;
	}else {
		curImgIdx++;
	}
	tab(-520);
	changeIdots();
}

for (var i = 0; i < aIdots.length; i++) {
	aIdots[i].onclick = function() {
		if (isAnimating) {
			return
		}
		if (this.className == 'active') {
			return;
		}
		var bournIdx = parseInt(this.getAttribute('idx'));
		var offset = -520 * (bournIdx - curImgIdx);
		
		curImgIdx = bournIdx;

		tab(offset);
		changeIdots();
	}
}

oWrap.onmouseover = stop;
oWrap.onmouseout = play;

play();

/**
 * 函数定义
 */

function tab(offset) {
	isAnimating = true;

	var desLeft = parseInt(getStyle(oUl, 'left')) + offset;
	var time = 500; // 位移总时间
	var interval = 15; // 时间间隔
	var speed = Math.ceil(offset/(time/interval)); // 每次位移移动多少
	var t = setInterval(function() {
		if ((speed < 0 && parseInt(getStyle(oUl, 'left')) > desLeft)||(speed > 0 && parseInt(getStyle(oUl, 'left')) < desLeft)) {
			oUl.style.left = parseInt(getStyle(oUl, 'left')) + speed + 'px';
		}else {
			isAnimating = false;
			oUl.style.left = desLeft + 'px';

			if (desLeft > -520) {
				oUl.style.left = '-3120px';
			}

			if (desLeft < -3120) {
				oUl.style.left = '-520px';
			}
			clearInterval(t);
			console.log('清除定时器！');
		}
	}, interval);
}

function changeIdots() {
	for (var i = 0; i < aIdots.length; i++) {
		if (aIdots[i].className == 'active') {
			aIdots[i].className = '';
			break;
		}
	}
	aIdots[curImgIdx - 1].className = 'active' ;
}


// 自动轮播
function play() {
	timer = setInterval(function() {
		oNext.onclick();
	}, 3000);
}
// 停止轮播
function stop() {
	clearInterval(timer);
}

// 获取非行间样式的值
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else {
		return getComputedStyle(obj, false)[attr];
	}
}




















