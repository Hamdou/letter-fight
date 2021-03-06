var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var a = Math.PI / 180, b = function (a, b, c, d, e) {
        this.p = b, this.f = "function" == typeof a[b], this.start = this.value = this.f ? a[b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3)]() : parseFloat(a[b]), this.velocity = c || 0, this.v = this.velocity / e, d || 0 === d ? (this.acceleration = d, this.a = this.acceleration / (e * e)) : this.acceleration = this.a = 0
    }, c = Math.random(), d = _gsScope._gsDefine.globals, e = d.com.greensock.core.Animation._rootFramesTimeline, f = "", g = "Physics2DPlugin", h = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), i = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47), j = function (a) {
        for (var b = -1 !== (window ? "http://codepen.io/GreenSock/pen/emjgxw" : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== a.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), c = [h, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], d = c.length; --d > -1;)if (-1 !== a.indexOf(c[d]))return !0;
        return b && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + g + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), b
    }(window ? "" : ""), k = _gsScope._gsDefine.plugin({
        propName: "physics2D",
        version: "0.1.3",
        API: 2,
        init: function (c, d, k) {

            this._target = c, this._tween = k, this._runBackwards = k.vars.runBackwards === !0, this._step = 0;
            for (var s, l = k._timeline, m = Number(d.angle) || 0, n = Number(d.velocity) || 0, o = Number(d.acceleration) || 0, p = d.xProp || "x", q = d.yProp || "y", r = d.accelerationAngle || 0 === d.accelerationAngle ? Number(d.accelerationAngle) : m; l._timeline;)l = l._timeline;
            return this._stepsPerTimeUnit = s = l === e ? 1 : 30, d.gravity && (o = Number(d.gravity), r = 90), m *= a, r *= a, this._friction = 1 - Number(d.friction || 0), this._overwriteProps.push(p), this._overwriteProps.push(q), this._x = new b(c, p, Math.cos(m) * n, Math.cos(r) * o, s), this._y = new b(c, q, Math.sin(m) * n, Math.sin(r) * o, s), this._skipX = this._skipY = !1, j
        },
        set: function (a) {
            var e, f, g, h, i, j, b = this._tween._time, c = this._x, d = this._y;
            if (this._runBackwards === !0 && (b = this._tween._duration - b), 1 === this._friction)g = b * b * .5, e = c.start + (c.velocity * b + c.acceleration * g), f = d.start + (d.velocity * b + d.acceleration * g); else {
                if (b *= this._stepsPerTimeUnit, h = j = (0 | b) - this._step, i = b % 1, j >= 0)for (; --j > -1;)c.v += c.a, d.v += d.a, c.v *= this._friction, d.v *= this._friction, c.value += c.v, d.value += d.v; else for (j = -j; --j > -1;)c.value -= c.v, d.value -= d.v, c.v /= this._friction, d.v /= this._friction, c.v -= c.a, d.v -= d.a;
                e = c.value + c.v * i, f = d.value + d.v * i, this._step += h
            }
            this._skipX || (c.r && (e = e + (0 > e ? -.5 : .5) | 0), c.f ? this._target[c.p](e) : this._target[c.p] = e), this._skipY || (d.r && (f = f + (0 > f ? -.5 : .5) | 0), d.f ? this._target[d.p](f) : this._target[d.p] = f)
        }
    }), l = k.prototype;
    l._kill = function (a) {
        return null != a[this._x.p] && (this._skipX = !0), null != a[this._y.p] && (this._skipY = !0), this._super._kill(a)
    }, l._roundProps = function (a, b) {
        (a.physics2D || a[this._x.p]) && (this._x.r = b), (a.physics2D || a[this._y.p]) && (this._y.r = b)
    }, k._autoCSS = !0, k.source = f, k._cssRegister = function () {
        var a = d.CSSPlugin;
        if (a) {
            var b = a._internals, e = b._parseToProxy, f = b._setPluginRatio, g = b.CSSPropTween;
            b._registerComplexSpecialProp("physics2D", {
                parser: function (a, b, d, h, i, j) {
                    j = new k;
                    var o, l = b.xProp || "x", m = b.yProp || "y", n = {};
                    return n[l] = n[m] = c++, o = e(a, n, h, i, j), i = new g(a, "physics2D", 0, 0, o.pt, 2), i.data = o, i.plugin = j, i.setRatio = f, j._onInitTween(o.proxy, b, h._tween), i
                }
            })
        }
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();