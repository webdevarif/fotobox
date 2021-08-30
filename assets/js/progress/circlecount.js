/**
 * CircleCount
 */
! function (t) {
    "use strict";

    function e() {
        var t = document.createElement("style");
        t.appendChild(document.createTextNode("@-ms-viewport { width: device-width; }")), navigator.userAgent.match(/IEMobile\/10\.0/) && t.appendChild(document.createTextNode("@-ms-viewport { width: auto !important; }")), document.getElementsByTagName("head")[0].appendChild(t)
    }

    function a() {
        t(".pie-chart").each(function () {
            var e = t(this),
                a = e.parent().width(),
                i = e.attr("data-barSize");
            i > a && (i = a), e.css("height", i), e.css("width", i), e.css("line-height", i + "px"), e.find("i").css({
                "line-height": i + "px",
                "font-size": i / 3
            })
        })
    }

    function i() {
        "undefined" != typeof t.fn.easyPieChart && t(".pie-chart:in-viewport").each(function () {
            var e = t(this),
                a = e.parent().width(),
                i = e.attr("data-barSize"),
                n = "square";
            void 0 !== e.attr("data-lineCap") && (n = e.attr("data-lineCap")), i > a && (i = a), e.easyPieChart({
                animate: 1300,
                lineCap: n,
                lineWidth: e.attr("data-lineWidth"),
                size: i,
                barColor: e.attr("data-barColor"),
                trackColor: e.attr("data-trackColor"),
                scaleColor: "transparent",
                onStep: function (e, a, i) {
                    t(this.el).find(".pie-chart-percent span").text(Math.round(i))
                }
            })
        })
    }
    t(document).ready(function () {
        e(), a(), i()
    }), t(window).scroll(function () {
        i()
    })
}(window.jQuery);