$(function() {
    window.onscroll = function() {
        var scrollTop = getScrollTop();

        if (scrollTop > 0) {
            $('.index-header').css('background-color', '#282830');
        } else {
            $('.index-header').css('background-color', 'transparent');
        }
    }
});

function getScrollTop() {　　
    // js获取滚动条在Y轴上的滚动距离
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;　　
    if (document.body) {　　　　
        bodyScrollTop = document.body.scrollTop;　　
    }　　
    if (document.documentElement) {　　　　
        documentScrollTop = document.documentElement.scrollTop;　　
    }　　
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
    return scrollTop;
}