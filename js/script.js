! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    "use strict";
    var r, o, a;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = n(1),
        d = n(2);
    localStorage.setItem("team1Score", "0"), localStorage.setItem("team2Score", "0");
    new l.team1, new d.team2;
    var u = document.createElement("table");
    u.setAttribute("id", "team1PointsTable"), u.innerHTML = "<tr><th>Team1</th>\n                   <th>B1</th>\n                   <th>B2</th>\n                   <th>B3</th>\n                   <th>B4</th>\n                   <th>B5</th>\n                   <th>B6</td>\n                   <th>Total</th>\n                   </tr>";
    for (var i = 0; i < 10; i++) {
        var c = document.createElement("tr"),
            m = document.createElement("th");
        u.append(c), m.innerHTML = "Player" + (i + 1), c.append(m);
        for (var f = 0; f < 7; f++) {
            var s = String(i),
                v = String(f);
            (g = document.createElement("td")).setAttribute("id", "" + (s + v)), c.append(g)
        }
    }
    document.body.append(u);
    var h = document.createElement("table");
    h.setAttribute("id", "team2PointsTable"), h.innerHTML = "<tr><th>Team1</th>\n                   <th>B1</th>\n                   <th>B2</th>\n                   <th>B3</th>\n                   <th>B4</th>\n                   <th>B5</th>\n                   <th>B6</td>\n                   <th>Total</th>\n                   </tr>";
    for (i = 0; i < 10; i++) {
        c = document.createElement("tr"), m = document.createElement("th");
        h.append(c), m.innerHTML = "Player" + (i + 1), c.append(m);
        for (f = 0; f < 7; f++) {
            var g;
            s = String(i), v = String(f);
            (g = document.createElement("td")).setAttribute("id", s + v + "a"), c.append(g)
        }
    }
    document.body.append(h), null === (r = document.getElementById("hit1")) || void 0 === r || r.addEventListener("click", (function () {
        document.getElementById("team1PointsTable");
        for (var e = 0, t = 0; t < 10; t++)
            for (var n = 0, r = 0; r < 6; r++) {
                var o = String(t),
                    a = String(r),
                    l = Math.floor(7 * Math.random());
                n += l;
                var d = document.getElementById("" + (o + a));
                if (null != d && (d.innerText = "" + l), 0 == l) break;
                var u = document.getElementById(o + "6");
                null != u && (u.innerText = "" + n)
            }
        for (var i = 0; i < 10; i++) {
            var c = String(i),
                m = document.getElementById("" + (c + 6));
            e += Number(null == m ? void 0 : m.innerText)
        }
        var f = document.getElementById("team1score");
        null != f && (f.innerText = "" + e, localStorage.setItem("team1Score", "" + e));
        var s = document.getElementById("hit1");
        null == s || s.setAttribute("disabled", "disabled")
    })), null === (o = document.getElementById("hit2")) || void 0 === o || o.addEventListener("click", (function () {
        document.getElementById("team2PointsTable");
        for (var e = 0, t = 0; t < 10; t++)
            for (var n = 0, r = 0; r < 6; r++) {
                var o = String(t),
                    a = String(r),
                    l = Math.floor(7 * Math.random());
                n += l;
                var d = document.getElementById(o + a + "a");
                if (null != d && (d.innerText = "" + l), 0 == l) break;
                var u = document.getElementById(o + "6a");
                null != u && (u.innerText = "" + n)
            }
        for (var i = 0; i < 10; i++) {
            var c = String(i),
                m = document.getElementById(c + 6 + "a");
            e += Number(null == m ? void 0 : m.innerText)
        }
        var f = document.getElementById("team2score");
        null != f && (f.innerText = "" + e, localStorage.setItem("team2Score", "" + e));
        var s = document.getElementById("hit2");
        null == s || s.setAttribute("disabled", "disabled")
    })), null === (a = document.getElementById("genResult")) || void 0 === a || a.addEventListener("click", (function () {
        window.location.href = "result.html"
    }))
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.team1 = void 0;
    var r = function () {
        console.log("Team1 Called")
    };
    t.team1 = r
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.team2 = void 0;
    var r = function () {
        console.log("Team Two Executed!")
    };
    t.team2 = r
}]);