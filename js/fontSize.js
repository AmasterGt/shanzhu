/**
 * Created by Apple on 2017/7/21.
 */
(function (win, doc) {
    //浏览器缩放时
    win.onresize = function () {
        change();
    };
    change();
    function change() {
        var oFs = doc.documentElement.clientWidth / 20;

        //设置根目录字体大小
        doc.documentElement.style.fontSize = oFs + 'px';
        console.log(oFs)
    }
})(window, document);