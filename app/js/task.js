define(function(require, exports, module){
	// var SlideImg = require('js/slideImg');
	var SlideImg2 = require('slideimg/slideimg');
	var Task = {
		initPage: function(){
			new SlideImg2({
				wraper: $('#slideImgBox'),
				imgs: [
					{
						imgsrc: 'https://static.1qianbao.com/cms/consumer/gongyi/banner/WoYaoHuiJiaGuoNian.jpg'
					},
					{
						imgsrc: 'https://1qianbao.com/img/projectsImgs/pal-detailTitle.jpg'
					}
				]
			});
			// SlideImg.init();
		}
	}
	module.exports = Task;
});