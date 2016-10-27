define(function(require, exports, module){
	var Home = {
		initPage: function(){
			// this == Home
			Home.showImg();
			Home.showUserList();
			Home.showHtml();
		},
		showImg: function(){
			// 通过jquery转化为dom节点
			var $img = $('<img src="images/WoYaoHuiJiaGuoNian.jpg">');
			// $("#showImg").append( $img );
			$("#showImg").append( '<img src="images/WoYaoHuiJiaGuoNian.jpg">'+'<p>hello world</p>' );
		},
		showUserList: function(){
			var datas = [
				{
					name: "jim",
					age: "18"
				},
				{
					name: "tom",
					age: "22"
				}
			];
			var _html = require('view/userlist.html');
			var _htmlFn = _.template( _html );
			$("#showUser").append( _htmlFn({d: datas}) );
		},
		showHtml: function(){
			var html = require('view/slide.html');
			var htmlFn = _.template(html);// 函数
			// console.log( htmlFn() );

			$("#showHtml").html( htmlFn({fileName:"form view folder"}) );
		}
	}
	module.exports = Home;
});