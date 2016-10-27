/*
此文件只处理轮播图
 */
define(function(require, exports, module) {
    var SlideImg = {
        init: function() {
            var $imgs = $('.showImg img');
            var $pointer = $('.showImg .slidePointer span');
            var curIndex = 1;
            var inter = setInterval(function() {
                curIndex++;
                if (curIndex == $imgs.length) {
                    curIndex = 0;
                }
                $imgs.eq(curIndex).stop(true, true).fadeIn().siblings('img').fadeOut();
                $pointer.eq(curIndex).addClass('active').siblings().removeClass('active');
            }, 2500);

            $pointer.on('click', function(e) {
                clearInterval(inter);
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
                }, 2500);

            });

        }
    }
    module.exports = SlideImg;
})
