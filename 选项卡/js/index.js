
function $(id){
	return typeof id === 'string' ? document.getElementById(id):id;
}

window.onload = function() {

	var index = 0;
	var timer = null;
	var flag = false;

	var lis  = $('title').getElementsByTagName('li');
	var divs = $('content').getElementsByTagName('div');

	for (var i = 0; i < lis.length; i++) {
		lis[i].idx = i;
		lis[i].onmouseenter = function() {
				clearInterval(timer);
				changeOption(this.idx)
		}
		lis[i].onmouseleave = function() {
			timer = setInterval(autoPlay, 2000);
		}
	}

	timer = setInterval(autoPlay, 2000);

	function autoPlay() {
		index++;
		if (index >= lis.length) {
			index = 0;
		}
		changeOption(index);
	}

	function changeOption(curIndex) {
		console.log(curIndex);
		for(var i = 0; i < lis.length; i++) {
			lis[i].className = '';
			divs[i].style.display = 'none';
		}
		lis[curIndex].className = 'selected';
		divs[curIndex].style.display = 'block';
		index = curIndex;
	}
}






