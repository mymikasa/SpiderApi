const eee = require('./source.js')


qwer = {};

function s(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function ttt(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
    }
    n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
            ;
            return n.d(t, "a", t),
                t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 423),

        qwer = s(t[423]);
}

function f(e) {
    if (false || "{" === e[0])
        return JSON.parse(e);
    var t = void 0;
    return t = (t = decode(e).slice(10)).split("").map(function(e) {
        return e.charCodeAt(0)
    }),
        t = new Uint8Array(t),
        t = qwer.default.exports.inflate(t),
        t = function(e) {
            var t = void 0
                , n = void 0
                , r = void 0
                , o = void 0
                , i = void 0
                , a = void 0;
            t = "",
                r = e.length,
                n = 0;
            for (; n < r; )
                switch ((o = e[n++]) >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        t += String.fromCharCode(o);
                        break;
                    case 12:
                    case 13:
                        i = e[n++],
                            t += String.fromCharCode((31 & o) << 6 | 63 & i);
                        break;
                    case 14:
                        i = e[n++],
                            a = e[n++],
                            t += String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | (63 & a) << 0)
                }
            return t
        }(t = new Uint16Array(t)),
        t = decodeURIComponent(t),
        JSON.parse(t)
}

function decode(e) {
    let p = /[\t\n\f\r ]/g;
    let d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var t = (e = String(e).replace(p, "")).length;
    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
    (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && f("Invalid character: the string to be decoded is not correctly encoded.");
    for (var n, r, o = 0, i = "", a = -1; ++a < t; )
        r = d.indexOf(e.charAt(a)),
            n = o % 4 ? 64 * n + r : r,
        o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
    return i
}


// console.log(ttt(eee));

// e = `ZWMyNTdiYWY3MHicxVPbbqMwEP2aeW8CBPNoE/LcP0AuuAsKt8XQaP++M0MA
// 02yQtn1YybIG45lz5swxhAqORzvoYbQYgCdxb68UHmPca2Ot/mWWX8uP3tix
// Gu7nXKTRH+7n77HMru5BUTbDWic5gZAQCQ4ikB4F8gKRD4kPSoEKFyw7vg3l
// UK0sDk66ABXcL4fn6f5Nl7Uud7AxZ0E6E/ZTJAKKYhAvkCBJNSNSdgDHwEW1
// JmubPP1P4NdxBxKR4llrDyTWC0BgJbGHHUGE64VJhKBOhC0PIAMm4dNyCPQm
// K3S/OOU5C0ng0QHpBOsUd2gg0wAkcg9JLkycdBPJxidIY2by0Y5ZYXqXiC3a
// W5q1fWP6tNb93ZbvurLma1pqx66rym1+25kmLdp6093jrNDHkUeMFQ8tVLrr
// 0kbXBCJfX3mKKOaJgwP5du4bnfNe9rVTLWStExY9AemvV3WTmWor0IWLnmhI
// QrhTYeK5GXRZ/Yz6HlEcggzn4Pw9onl7a6pW56njmb9SDekhCMXVzqA8doHg
// E0G+UJPSF24kZqVxxfM1ebcPPiIsha+QnPX4PKb0w07bX1G/1zaqXP1JM93n
// ez37RBftsDLm5jcnXFnxGJAVNRyQcejZPmsvZnNdOOuhHYKICGWCIKHdy0/4
// /INNfq7gvD4BDLWZQA==
// `
function transform(e) {
    ttt(eee);
    return f(e);
}

module.exports = transform;