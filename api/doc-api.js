/**
主要参考：
1、https://github.com/i5ting/i5ting_ztree_toc
2、http://ruby-china.org/topics/17028
**/

function loadScript(url, fn) {
var script = document.createElement("script");
script.type = "text/javascript";
script.src = url;
script.onload = script.onreadystatechange = function () {
if (!script.readyState || 'loaded' === script.readyState || 'complete' === script.readyState) {
fn && fn();
}
};
script.src = url;
document.head.appendChild(script);
}

var baseUrl="https://cpthack.github.io/self-dev-conf/api/";

// 插入左侧目录栏目节点
document.write("<div id='tree' class='ztree'></div>");

//同步加载相关js文件
var newScripts = [ 
	baseUrl+"js/jquery-1.4.4.min.js",
	baseUrl+"js/jquery.ztree.core-3.5.js",
	baseUrl+"js/jquery.ztree.all-3.5.js",
	baseUrl+"js/ztree_toc.js",
	baseUrl+"js/my-ztree-toc.js" 
		];
// 迭代加载,callback为全部加载完成后的回调函数
(function scriptRecurse(count, callback) {
	if (count == newScripts.length) {
		callback && callback();
	} else {
		loadScript(newScripts[count], function() {
//			document.getElementById("test2").innerHTML += newScripts[count]
//					+ ";<br>";
			scriptRecurse(++count, callback);
		});
	}
})(0);

//异步写入相关css文件
document.write("<link rel='stylesheet' href='"+baseUrl+"css/zTreeStyle/zTreeStyle.css' type='text/css'>");
document.write("<link rel='stylesheet' href='"+baseUrl+"css/beatify.css' type='text/css'>");

//设置左侧目录栏目节点的位置
var oDiv = document.getElementById('tree');
oDiv.style.position = 'fixed';
oDiv.style.marginTop = '20px';
oDiv.style.marginLeft = '-290px';
oDiv.style.border='1px solid #ccc';
oDiv.style.borderLeft='3px solid rgb(81, 130, 187)';


