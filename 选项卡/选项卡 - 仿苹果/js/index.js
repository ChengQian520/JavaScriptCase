/**
 * 动态加载数据思路：
 * 1、观察页面，处理数据
 * 2、在HTML中布局容器
 * 3、在JS中布局容器中的子元素，为元素加载数据，对于不一样的数据，需要做字符串拼接。
 * 4、判断元素是否需要设置属性(class)
 * 5、判断元素是否需要设值样式（注：在js中，我们只要去设置属性值不一样的情况，对于相同样式，我们直接在CSS中设计即可。）
 */


var oWrap = $('#wrap');
var oTitles = $('#titles');
var oContents = $('#contents');
var datas = datas;

var ul = document.createElement('ul');

for (var i = 0; i < datas.length; i++) {
	// create elements for titles with ul
	var li = document.createElement('li');
	var a = document.createElement('a');
	a.setAttribute('href', '#');
	var figure = document.createElement('figure');
	figure.style.cssText = `background: url(../images/` + datas[i]['navImg'] +`) no-repeat center; `;
	a.appendChild(figure);
	a.appendChild(document.createTextNode(datas[i]['title']));
	li.appendChild(a);
	ul.appendChild(li);

	// load emlements for contents by innerHTML
	oContents.innerHTML += `
	<div style="display: none;" class="item">
		<div class="left"></div>
		<div class="right">
			<div class="img"></div>
			<h4 class="subTitle">` + datas[i]['title'] + `</h4>
			<div class="des">` + datas[i]['des'] + `</div>
			<a href="#">进一步了解 &gt;</a>
		</div>
	</div>`;
	// oContents.children[i].firstElementChild.style.cssText = `background: url(../images/` + datas[i]['desImg'] + `) norepeat center;`;
	oContents.children[i].firstElementChild.style.background = `url(../images/` + datas[i]['desImg'] + `) no-repeat center`;
	oContents.children[i].lastElementChild.firstElementChild.style.background = `url(../images/` + datas[i]['navImg'] + `) no-repeat left center`;

}

oTitles.appendChild(ul);
ul.firstElementChild.className = 'selected';
contents.firstElementChild.style.display = 'block';

var lis = ul.children;
for (var i = 0; i < lis.length; i++) {
	lis[i].curIdx = i;

	lis[i].onclick = function() {
		for (var i = 0; i < lis.length; i++) {
			if (lis[i].className == 'selected') {
				lis[i].className = '';
				contents.children[i].style.display = 'none';
				break;
			}
		}
		this.className = 'selected';
		contents.children[this.curIdx].style.display = 'block';
	}
}





























