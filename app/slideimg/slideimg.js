/*
 *轮播图组件
 * imgs = [{imgsrc:'https://'},{imgsrc:'https://'}]
 */
define(function(require, exports, module) {
    require('slideimg/slideimg.css');
    var _html = require('slideimg/slideimg.html');
    var _htmlFn = _.template( _html );

    var SlideImg = function(option) {
        // imgs 用来存放图片数据
        option = option || {};
        //$.extend 深度拷贝 一般用它编写插件
        $.extend(true, this.default, option);
        this.imgs = this.default.imgs;
        this.gap = this.default.gap;
        this.wraper = this.default.wraper;
        this.wraper.append( _htmlFn({imgs: this.imgs}) );
        this.init();
    }
    //
    SlideImg.prototype.default = {
        imgs: [],
        gap: 2500,
        wraper: $('body')
    }
    SlideImg.prototype.init = function() {
        var me = this;
        var $imgs = $('.showImg img', me.wraper);
        var $pointer = $('.showImg .slidePointer span', me.wraper);
        var curIndex = me.imgs.length-1;
        var inter = setInterval(function() {
            curIndex++;
            if (curIndex == $imgs.length) {
                curIndex = 0;
            }
            $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('img').fadeOut();
            $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');
        }, me.gap);

        $pointer.on('click', function(e) {
            clearInterval(inter);
            //e.target 获取当前元素
            //.index() 获取下标
            var _index = $pointer.index($(e.target));
            curIndex = _index;
            $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('img').fadeOut();
            $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');

            inter = setInterval(function() {
                curIndex++;
                if (curIndex == $imgs.length) {
                    curIndex = 0;
                }
                $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('img').fadeOut();
                $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');
            }, me.gap);
        });
    }
    module.exports = SlideImg;
})
