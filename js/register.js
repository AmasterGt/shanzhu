/**
 * Created by admin on 2017/7/21.
 */
$(function () {
    $(".reg_list>div").tap(function () {
        $(".reg_list div>p").removeClass("btm");
        $(".reg_list ul").removeClass("show");
        $(this).next("ul").addClass("show");
        $(this).find("p").addClass("btm");
    })
    $("#title").tap(function () {
        $(".reg_zg").toggle();
    })
    $(".reg_zg span").tap(function () {
        $(".reg_zg span").removeClass("span_bg2");
        $(this).addClass("span_bg2");
    })
    $(".kong").tap(function () {
        $(".reg_zg").hide();
    })
})

