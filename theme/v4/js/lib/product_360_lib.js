/*! For license information please see js-cloudimage-360-view.min.js.LICENSE.txt */
(() => {
  var t = {
      5861: (t, e, n) => {
        var i = n(3921);
        t.exports = i;
      },
      3740: (t, e, n) => {
        var i = n(5823);
        t.exports = i;
      },
      909: (t, e, n) => {
        var i = n(6575);
        t.exports = i;
      },
      5354: (t, e, n) => {
        n(7327);
        var i = n(2649);
        t.exports = i("Array", "filter");
      },
      817: (t, e, n) => {
        n(9554);
        var i = n(2649);
        t.exports = i("Array", "forEach");
      },
      3462: (t, e, n) => {
        n(6699);
        var i = n(2649);
        t.exports = i("Array", "includes");
      },
      6139: (t, e, n) => {
        n(7037);
      },
      7528: (t, e, n) => {
        n(4978);
      },
      4577: (t, e, n) => {
        n(9059);
      },
      7037: (t, e, n) => {
        var i = n(5861);
        t.exports = i;
      },
      4978: (t, e, n) => {
        var i = n(3740);
        t.exports = i;
      },
      9059: (t, e, n) => {
        var i = n(909);
        t.exports = i;
      },
      9662: (t, e, n) => {
        var i = n(614),
          o = n(6330),
          r = TypeError;
        t.exports = function (t) {
          if (i(t)) return t;
          throw r(o(t) + " is not a function");
        };
      },
      1223: (t, e, n) => {
        var i = n(5112),
          o = n(30),
          r = n(3070).f,
          a = i("unscopables"),
          s = Array.prototype;
        null == s[a] && r(s, a, { configurable: !0, value: o(null) }),
          (t.exports = function (t) {
            s[a][t] = !0;
          });
      },
      9670: (t, e, n) => {
        var i = n(111),
          o = String,
          r = TypeError;
        t.exports = function (t) {
          if (i(t)) return t;
          throw r(o(t) + " is not an object");
        };
      },
      8533: (t, e, n) => {
        "use strict";
        var i = n(2092).forEach,
          o = n(9341)("forEach");
        t.exports = o
          ? [].forEach
          : function (t) {
              return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      1318: (t, e, n) => {
        var i = n(5656),
          o = n(1400),
          r = n(6244),
          a = function (t) {
            return function (e, n, a) {
              var s,
                c = i(e),
                u = r(c),
                l = o(a, u);
              if (t && n != n) {
                for (; u > l; ) if ((s = c[l++]) != s) return !0;
              } else
                for (; u > l; l++)
                  if ((t || l in c) && c[l] === n) return t || l || 0;
              return !t && -1;
            };
          };
        t.exports = { includes: a(!0), indexOf: a(!1) };
      },
      2092: (t, e, n) => {
        var i = n(9974),
          o = n(1702),
          r = n(8361),
          a = n(7908),
          s = n(6244),
          c = n(5417),
          u = o([].push),
          l = function (t) {
            var e = 1 == t,
              n = 2 == t,
              o = 3 == t,
              l = 4 == t,
              d = 6 == t,
              h = 7 == t,
              f = 5 == t || d;
            return function (p, m, v, g) {
              for (
                var y,
                  b,
                  w = a(p),
                  x = r(w),
                  I = i(m, v),
                  O = s(x),
                  k = 0,
                  E = g || c,
                  S = e ? E(p, O) : n || h ? E(p, 0) : void 0;
                O > k;
                k++
              )
                if ((f || k in x) && ((b = I((y = x[k]), k, w)), t))
                  if (e) S[k] = b;
                  else if (b)
                    switch (t) {
                      case 3:
                        return !0;
                      case 5:
                        return y;
                      case 6:
                        return k;
                      case 2:
                        u(S, y);
                    }
                  else
                    switch (t) {
                      case 4:
                        return !1;
                      case 7:
                        u(S, y);
                    }
              return d ? -1 : o || l ? l : S;
            };
          };
        t.exports = {
          forEach: l(0),
          map: l(1),
          filter: l(2),
          some: l(3),
          every: l(4),
          find: l(5),
          findIndex: l(6),
          filterReject: l(7),
        };
      },
      1194: (t, e, n) => {
        var i = n(7293),
          o = n(5112),
          r = n(7392),
          a = o("species");
        t.exports = function (t) {
          return (
            r >= 51 ||
            !i(function () {
              var e = [];
              return (
                ((e.constructor = {})[a] = function () {
                  return { foo: 1 };
                }),
                1 !== e[t](Boolean).foo
              );
            })
          );
        };
      },
      9341: (t, e, n) => {
        "use strict";
        var i = n(7293);
        t.exports = function (t, e) {
          var n = [][t];
          return (
            !!n &&
            i(function () {
              n.call(
                null,
                e ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };
      },
      7475: (t, e, n) => {
        var i = n(3157),
          o = n(4411),
          r = n(111),
          a = n(5112)("species"),
          s = Array;
        t.exports = function (t) {
          var e;
          return (
            i(t) &&
              ((e = t.constructor),
              ((o(e) && (e === s || i(e.prototype))) ||
                (r(e) && null === (e = e[a]))) &&
                (e = void 0)),
            void 0 === e ? s : e
          );
        };
      },
      5417: (t, e, n) => {
        var i = n(7475);
        t.exports = function (t, e) {
          return new (i(t))(0 === e ? 0 : e);
        };
      },
      4326: (t, e, n) => {
        var i = n(1702),
          o = i({}.toString),
          r = i("".slice);
        t.exports = function (t) {
          return r(o(t), 8, -1);
        };
      },
      648: (t, e, n) => {
        var i = n(1694),
          o = n(614),
          r = n(4326),
          a = n(5112)("toStringTag"),
          s = Object,
          c =
            "Arguments" ==
            r(
              (function () {
                return arguments;
              })()
            );
        t.exports = i
          ? r
          : function (t) {
              var e, n, i;
              return void 0 === t
                ? "Undefined"
                : null === t
                ? "Null"
                : "string" ==
                  typeof (n = (function (t, e) {
                    try {
                      return t[e];
                    } catch (t) {}
                  })((e = s(t)), a))
                ? n
                : c
                ? r(e)
                : "Object" == (i = r(e)) && o(e.callee)
                ? "Arguments"
                : i;
            };
      },
      9920: (t, e, n) => {
        var i = n(2597),
          o = n(3887),
          r = n(1236),
          a = n(3070);
        t.exports = function (t, e, n) {
          for (var s = o(e), c = a.f, u = r.f, l = 0; l < s.length; l++) {
            var d = s[l];
            i(t, d) || (n && i(n, d)) || c(t, d, u(e, d));
          }
        };
      },
      8880: (t, e, n) => {
        var i = n(9781),
          o = n(3070),
          r = n(9114);
        t.exports = i
          ? function (t, e, n) {
              return o.f(t, e, r(1, n));
            }
          : function (t, e, n) {
              return (t[e] = n), t;
            };
      },
      9114: (t) => {
        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e,
          };
        };
      },
      8052: (t, e, n) => {
        var i = n(614),
          o = n(3070),
          r = n(6339),
          a = n(3072);
        t.exports = function (t, e, n, s) {
          s || (s = {});
          var c = s.enumerable,
            u = void 0 !== s.name ? s.name : e;
          if ((i(n) && r(n, u, s), s.global)) c ? (t[e] = n) : a(e, n);
          else {
            try {
              s.unsafe ? t[e] && (c = !0) : delete t[e];
            } catch (t) {}
            c
              ? (t[e] = n)
              : o.f(t, e, {
                  value: n,
                  enumerable: !1,
                  configurable: !s.nonConfigurable,
                  writable: !s.nonWritable,
                });
          }
          return t;
        };
      },
      3072: (t, e, n) => {
        var i = n(7854),
          o = Object.defineProperty;
        t.exports = function (t, e) {
          try {
            o(i, t, { value: e, configurable: !0, writable: !0 });
          } catch (n) {
            i[t] = e;
          }
          return e;
        };
      },
      9781: (t, e, n) => {
        var i = n(7293);
        t.exports = !i(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      4154: (t) => {
        var e = "object" == typeof document && document.all,
          n = void 0 === e && void 0 !== e;
        t.exports = { all: e, IS_HTMLDDA: n };
      },
      317: (t, e, n) => {
        var i = n(7854),
          o = n(111),
          r = i.document,
          a = o(r) && o(r.createElement);
        t.exports = function (t) {
          return a ? r.createElement(t) : {};
        };
      },
      8113: (t) => {
        t.exports =
          ("undefined" != typeof navigator && String(navigator.userAgent)) ||
          "";
      },
      7392: (t, e, n) => {
        var i,
          o,
          r = n(7854),
          a = n(8113),
          s = r.process,
          c = r.Deno,
          u = (s && s.versions) || (c && c.version),
          l = u && u.v8;
        l && (o = (i = l.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
          !o &&
            a &&
            (!(i = a.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
            (i = a.match(/Chrome\/(\d+)/)) &&
            (o = +i[1]),
          (t.exports = o);
      },
      2649: (t, e, n) => {
        var i = n(7854),
          o = n(1702);
        t.exports = function (t, e) {
          return o(i[t].prototype[e]);
        };
      },
      748: (t) => {
        t.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      2109: (t, e, n) => {
        var i = n(7854),
          o = n(1236).f,
          r = n(8880),
          a = n(8052),
          s = n(3072),
          c = n(9920),
          u = n(4705);
        t.exports = function (t, e) {
          var n,
            l,
            d,
            h,
            f,
            p = t.target,
            m = t.global,
            v = t.stat;
          if ((n = m ? i : v ? i[p] || s(p, {}) : (i[p] || {}).prototype))
            for (l in e) {
              if (
                ((h = e[l]),
                (d = t.dontCallGetSet ? (f = o(n, l)) && f.value : n[l]),
                !u(m ? l : p + (v ? "." : "#") + l, t.forced) && void 0 !== d)
              ) {
                if (typeof h == typeof d) continue;
                c(h, d);
              }
              (t.sham || (d && d.sham)) && r(h, "sham", !0), a(n, l, h, t);
            }
        };
      },
      7293: (t) => {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      9974: (t, e, n) => {
        var i = n(1470),
          o = n(9662),
          r = n(4374),
          a = i(i.bind);
        t.exports = function (t, e) {
          return (
            o(t),
            void 0 === e
              ? t
              : r
              ? a(t, e)
              : function () {
                  return t.apply(e, arguments);
                }
          );
        };
      },
      4374: (t, e, n) => {
        var i = n(7293);
        t.exports = !i(function () {
          var t = function () {}.bind();
          return "function" != typeof t || t.hasOwnProperty("prototype");
        });
      },
      6916: (t, e, n) => {
        var i = n(4374),
          o = Function.prototype.call;
        t.exports = i
          ? o.bind(o)
          : function () {
              return o.apply(o, arguments);
            };
      },
      6530: (t, e, n) => {
        var i = n(9781),
          o = n(2597),
          r = Function.prototype,
          a = i && Object.getOwnPropertyDescriptor,
          s = o(r, "name"),
          c = s && "something" === function () {}.name,
          u = s && (!i || (i && a(r, "name").configurable));
        t.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: u };
      },
      1470: (t, e, n) => {
        var i = n(4326),
          o = n(1702);
        t.exports = function (t) {
          if ("Function" === i(t)) return o(t);
        };
      },
      1702: (t, e, n) => {
        var i = n(4374),
          o = Function.prototype,
          r = o.call,
          a = i && o.bind.bind(r, r);
        t.exports = i
          ? a
          : function (t) {
              return function () {
                return r.apply(t, arguments);
              };
            };
      },
      5005: (t, e, n) => {
        var i = n(7854),
          o = n(614);
        t.exports = function (t, e) {
          return arguments.length < 2
            ? ((n = i[t]), o(n) ? n : void 0)
            : i[t] && i[t][e];
          var n;
        };
      },
      8173: (t, e, n) => {
        var i = n(9662),
          o = n(8554);
        t.exports = function (t, e) {
          var n = t[e];
          return o(n) ? void 0 : i(n);
        };
      },
      7854: (t, e, n) => {
        var i = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          i("object" == typeof globalThis && globalThis) ||
          i("object" == typeof window && window) ||
          i("object" == typeof self && self) ||
          i("object" == typeof n.g && n.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      2597: (t, e, n) => {
        var i = n(1702),
          o = n(7908),
          r = i({}.hasOwnProperty);
        t.exports =
          Object.hasOwn ||
          function (t, e) {
            return r(o(t), e);
          };
      },
      3501: (t) => {
        t.exports = {};
      },
      490: (t, e, n) => {
        var i = n(5005);
        t.exports = i("document", "documentElement");
      },
      4664: (t, e, n) => {
        var i = n(9781),
          o = n(7293),
          r = n(317);
        t.exports =
          !i &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(r("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      8361: (t, e, n) => {
        var i = n(1702),
          o = n(7293),
          r = n(4326),
          a = Object,
          s = i("".split);
        t.exports = o(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (t) {
              return "String" == r(t) ? s(t, "") : a(t);
            }
          : a;
      },
      2788: (t, e, n) => {
        var i = n(1702),
          o = n(614),
          r = n(5465),
          a = i(Function.toString);
        o(r.inspectSource) ||
          (r.inspectSource = function (t) {
            return a(t);
          }),
          (t.exports = r.inspectSource);
      },
      9909: (t, e, n) => {
        var i,
          o,
          r,
          a = n(4811),
          s = n(7854),
          c = n(111),
          u = n(8880),
          l = n(2597),
          d = n(5465),
          h = n(6200),
          f = n(3501),
          p = "Object already initialized",
          m = s.TypeError,
          v = s.WeakMap;
        if (a || d.state) {
          var g = d.state || (d.state = new v());
          (g.get = g.get),
            (g.has = g.has),
            (g.set = g.set),
            (i = function (t, e) {
              if (g.has(t)) throw m(p);
              return (e.facade = t), g.set(t, e), e;
            }),
            (o = function (t) {
              return g.get(t) || {};
            }),
            (r = function (t) {
              return g.has(t);
            });
        } else {
          var y = h("state");
          (f[y] = !0),
            (i = function (t, e) {
              if (l(t, y)) throw m(p);
              return (e.facade = t), u(t, y, e), e;
            }),
            (o = function (t) {
              return l(t, y) ? t[y] : {};
            }),
            (r = function (t) {
              return l(t, y);
            });
        }
        t.exports = {
          set: i,
          get: o,
          has: r,
          enforce: function (t) {
            return r(t) ? o(t) : i(t, {});
          },
          getterFor: function (t) {
            return function (e) {
              var n;
              if (!c(e) || (n = o(e)).type !== t)
                throw m("Incompatible receiver, " + t + " required");
              return n;
            };
          },
        };
      },
      3157: (t, e, n) => {
        var i = n(4326);
        t.exports =
          Array.isArray ||
          function (t) {
            return "Array" == i(t);
          };
      },
      614: (t, e, n) => {
        var i = n(4154),
          o = i.all;
        t.exports = i.IS_HTMLDDA
          ? function (t) {
              return "function" == typeof t || t === o;
            }
          : function (t) {
              return "function" == typeof t;
            };
      },
      4411: (t, e, n) => {
        var i = n(1702),
          o = n(7293),
          r = n(614),
          a = n(648),
          s = n(5005),
          c = n(2788),
          u = function () {},
          l = [],
          d = s("Reflect", "construct"),
          h = /^\s*(?:class|function)\b/,
          f = i(h.exec),
          p = !h.exec(u),
          m = function (t) {
            if (!r(t)) return !1;
            try {
              return d(u, l, t), !0;
            } catch (t) {
              return !1;
            }
          },
          v = function (t) {
            if (!r(t)) return !1;
            switch (a(t)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return p || !!f(h, c(t));
            } catch (t) {
              return !0;
            }
          };
        (v.sham = !0),
          (t.exports =
            !d ||
            o(function () {
              var t;
              return (
                m(m.call) ||
                !m(Object) ||
                !m(function () {
                  t = !0;
                }) ||
                t
              );
            })
              ? v
              : m);
      },
      4705: (t, e, n) => {
        var i = n(7293),
          o = n(614),
          r = /#|\.prototype\./,
          a = function (t, e) {
            var n = c[s(t)];
            return n == l || (n != u && (o(e) ? i(e) : !!e));
          },
          s = (a.normalize = function (t) {
            return String(t).replace(r, ".").toLowerCase();
          }),
          c = (a.data = {}),
          u = (a.NATIVE = "N"),
          l = (a.POLYFILL = "P");
        t.exports = a;
      },
      8554: (t) => {
        t.exports = function (t) {
          return null == t;
        };
      },
      111: (t, e, n) => {
        var i = n(614),
          o = n(4154),
          r = o.all;
        t.exports = o.IS_HTMLDDA
          ? function (t) {
              return "object" == typeof t ? null !== t : i(t) || t === r;
            }
          : function (t) {
              return "object" == typeof t ? null !== t : i(t);
            };
      },
      1913: (t) => {
        t.exports = !1;
      },
      2190: (t, e, n) => {
        var i = n(5005),
          o = n(614),
          r = n(7976),
          a = n(3307),
          s = Object;
        t.exports = a
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              var e = i("Symbol");
              return o(e) && r(e.prototype, s(t));
            };
      },
      6244: (t, e, n) => {
        var i = n(7466);
        t.exports = function (t) {
          return i(t.length);
        };
      },
      6339: (t, e, n) => {
        var i = n(1702),
          o = n(7293),
          r = n(614),
          a = n(2597),
          s = n(9781),
          c = n(6530).CONFIGURABLE,
          u = n(2788),
          l = n(9909),
          d = l.enforce,
          h = l.get,
          f = String,
          p = Object.defineProperty,
          m = i("".slice),
          v = i("".replace),
          g = i([].join),
          y =
            s &&
            !o(function () {
              return 8 !== p(function () {}, "length", { value: 8 }).length;
            }),
          b = String(String).split("String"),
          w = (t.exports = function (t, e, n) {
            "Symbol(" === m(f(e), 0, 7) &&
              (e = "[" + v(f(e), /^Symbol\(([^)]*)\)/, "$1") + "]"),
              n && n.getter && (e = "get " + e),
              n && n.setter && (e = "set " + e),
              (!a(t, "name") || (c && t.name !== e)) &&
                (s
                  ? p(t, "name", { value: e, configurable: !0 })
                  : (t.name = e)),
              y &&
                n &&
                a(n, "arity") &&
                t.length !== n.arity &&
                p(t, "length", { value: n.arity });
            try {
              n && a(n, "constructor") && n.constructor
                ? s && p(t, "prototype", { writable: !1 })
                : t.prototype && (t.prototype = void 0);
            } catch (t) {}
            var i = d(t);
            return (
              a(i, "source") ||
                (i.source = g(b, "string" == typeof e ? e : "")),
              t
            );
          });
        Function.prototype.toString = w(function () {
          return (r(this) && h(this).source) || u(this);
        }, "toString");
      },
      4758: (t) => {
        var e = Math.ceil,
          n = Math.floor;
        t.exports =
          Math.trunc ||
          function (t) {
            var i = +t;
            return (i > 0 ? n : e)(i);
          };
      },
      30: (t, e, n) => {
        var i,
          o = n(9670),
          r = n(6048),
          a = n(748),
          s = n(3501),
          c = n(490),
          u = n(317),
          l = n(6200),
          d = "prototype",
          h = "script",
          f = l("IE_PROTO"),
          p = function () {},
          m = function (t) {
            return "<" + h + ">" + t + "</" + h + ">";
          },
          v = function (t) {
            t.write(m("")), t.close();
            var e = t.parentWindow.Object;
            return (t = null), e;
          },
          g = function () {
            try {
              i = new ActiveXObject("htmlfile");
            } catch (t) {}
            var t, e, n;
            g =
              "undefined" != typeof document
                ? document.domain && i
                  ? v(i)
                  : ((e = u("iframe")),
                    (n = "java" + h + ":"),
                    (e.style.display = "none"),
                    c.appendChild(e),
                    (e.src = String(n)),
                    (t = e.contentWindow.document).open(),
                    t.write(m("document.F=Object")),
                    t.close(),
                    t.F)
                : v(i);
            for (var o = a.length; o--; ) delete g[d][a[o]];
            return g();
          };
        (s[f] = !0),
          (t.exports =
            Object.create ||
            function (t, e) {
              var n;
              return (
                null !== t
                  ? ((p[d] = o(t)), (n = new p()), (p[d] = null), (n[f] = t))
                  : (n = g()),
                void 0 === e ? n : r.f(n, e)
              );
            });
      },
      6048: (t, e, n) => {
        var i = n(9781),
          o = n(3353),
          r = n(3070),
          a = n(9670),
          s = n(5656),
          c = n(1956);
        e.f =
          i && !o
            ? Object.defineProperties
            : function (t, e) {
                a(t);
                for (var n, i = s(e), o = c(e), u = o.length, l = 0; u > l; )
                  r.f(t, (n = o[l++]), i[n]);
                return t;
              };
      },
      3070: (t, e, n) => {
        var i = n(9781),
          o = n(4664),
          r = n(3353),
          a = n(9670),
          s = n(4948),
          c = TypeError,
          u = Object.defineProperty,
          l = Object.getOwnPropertyDescriptor,
          d = "enumerable",
          h = "configurable",
          f = "writable";
        e.f = i
          ? r
            ? function (t, e, n) {
                if (
                  (a(t),
                  (e = s(e)),
                  a(n),
                  "function" == typeof t &&
                    "prototype" === e &&
                    "value" in n &&
                    f in n &&
                    !n[f])
                ) {
                  var i = l(t, e);
                  i &&
                    i[f] &&
                    ((t[e] = n.value),
                    (n = {
                      configurable: h in n ? n[h] : i[h],
                      enumerable: d in n ? n[d] : i[d],
                      writable: !1,
                    }));
                }
                return u(t, e, n);
              }
            : u
          : function (t, e, n) {
              if ((a(t), (e = s(e)), a(n), o))
                try {
                  return u(t, e, n);
                } catch (t) {}
              if ("get" in n || "set" in n) throw c("Accessors not supported");
              return "value" in n && (t[e] = n.value), t;
            };
      },
      1236: (t, e, n) => {
        var i = n(9781),
          o = n(6916),
          r = n(5296),
          a = n(9114),
          s = n(5656),
          c = n(4948),
          u = n(2597),
          l = n(4664),
          d = Object.getOwnPropertyDescriptor;
        e.f = i
          ? d
          : function (t, e) {
              if (((t = s(t)), (e = c(e)), l))
                try {
                  return d(t, e);
                } catch (t) {}
              if (u(t, e)) return a(!o(r.f, t, e), t[e]);
            };
      },
      8006: (t, e, n) => {
        var i = n(6324),
          o = n(748).concat("length", "prototype");
        e.f =
          Object.getOwnPropertyNames ||
          function (t) {
            return i(t, o);
          };
      },
      5181: (t, e) => {
        e.f = Object.getOwnPropertySymbols;
      },
      7976: (t, e, n) => {
        var i = n(1702);
        t.exports = i({}.isPrototypeOf);
      },
      6324: (t, e, n) => {
        var i = n(1702),
          o = n(2597),
          r = n(5656),
          a = n(1318).indexOf,
          s = n(3501),
          c = i([].push);
        t.exports = function (t, e) {
          var n,
            i = r(t),
            u = 0,
            l = [];
          for (n in i) !o(s, n) && o(i, n) && c(l, n);
          for (; e.length > u; ) o(i, (n = e[u++])) && (~a(l, n) || c(l, n));
          return l;
        };
      },
      1956: (t, e, n) => {
        var i = n(6324),
          o = n(748);
        t.exports =
          Object.keys ||
          function (t) {
            return i(t, o);
          };
      },
      5296: (t, e) => {
        "use strict";
        var n = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          o = i && !n.call({ 1: 2 }, 1);
        e.f = o
          ? function (t) {
              var e = i(this, t);
              return !!e && e.enumerable;
            }
          : n;
      },
      2140: (t, e, n) => {
        var i = n(6916),
          o = n(614),
          r = n(111),
          a = TypeError;
        t.exports = function (t, e) {
          var n, s;
          if ("string" === e && o((n = t.toString)) && !r((s = i(n, t))))
            return s;
          if (o((n = t.valueOf)) && !r((s = i(n, t)))) return s;
          if ("string" !== e && o((n = t.toString)) && !r((s = i(n, t))))
            return s;
          throw a("Can't convert object to primitive value");
        };
      },
      3887: (t, e, n) => {
        var i = n(5005),
          o = n(1702),
          r = n(8006),
          a = n(5181),
          s = n(9670),
          c = o([].concat);
        t.exports =
          i("Reflect", "ownKeys") ||
          function (t) {
            var e = r.f(s(t)),
              n = a.f;
            return n ? c(e, n(t)) : e;
          };
      },
      4488: (t, e, n) => {
        var i = n(8554),
          o = TypeError;
        t.exports = function (t) {
          if (i(t)) throw o("Can't call method on " + t);
          return t;
        };
      },
      6200: (t, e, n) => {
        var i = n(2309),
          o = n(9711),
          r = i("keys");
        t.exports = function (t) {
          return r[t] || (r[t] = o(t));
        };
      },
      5465: (t, e, n) => {
        var i = n(7854),
          o = n(3072),
          r = "__core-js_shared__",
          a = i[r] || o(r, {});
        t.exports = a;
      },
      2309: (t, e, n) => {
        var i = n(1913),
          o = n(5465);
        (t.exports = function (t, e) {
          return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
          version: "3.30.0",
          mode: i ? "pure" : "global",
          copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      6293: (t, e, n) => {
        var i = n(7392),
          o = n(7293);
        t.exports =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            var t = Symbol();
            return (
              !String(t) ||
              !(Object(t) instanceof Symbol) ||
              (!Symbol.sham && i && i < 41)
            );
          });
      },
      1400: (t, e, n) => {
        var i = n(9303),
          o = Math.max,
          r = Math.min;
        t.exports = function (t, e) {
          var n = i(t);
          return n < 0 ? o(n + e, 0) : r(n, e);
        };
      },
      5656: (t, e, n) => {
        var i = n(8361),
          o = n(4488);
        t.exports = function (t) {
          return i(o(t));
        };
      },
      9303: (t, e, n) => {
        var i = n(4758);
        t.exports = function (t) {
          var e = +t;
          return e != e || 0 === e ? 0 : i(e);
        };
      },
      7466: (t, e, n) => {
        var i = n(9303),
          o = Math.min;
        t.exports = function (t) {
          return t > 0 ? o(i(t), 9007199254740991) : 0;
        };
      },
      7908: (t, e, n) => {
        var i = n(4488),
          o = Object;
        t.exports = function (t) {
          return o(i(t));
        };
      },
      7593: (t, e, n) => {
        var i = n(6916),
          o = n(111),
          r = n(2190),
          a = n(8173),
          s = n(2140),
          c = n(5112),
          u = TypeError,
          l = c("toPrimitive");
        t.exports = function (t, e) {
          if (!o(t) || r(t)) return t;
          var n,
            c = a(t, l);
          if (c) {
            if (
              (void 0 === e && (e = "default"), (n = i(c, t, e)), !o(n) || r(n))
            )
              return n;
            throw u("Can't convert object to primitive value");
          }
          return void 0 === e && (e = "number"), s(t, e);
        };
      },
      4948: (t, e, n) => {
        var i = n(7593),
          o = n(2190);
        t.exports = function (t) {
          var e = i(t, "string");
          return o(e) ? e : e + "";
        };
      },
      1694: (t, e, n) => {
        var i = {};
        (i[n(5112)("toStringTag")] = "z"),
          (t.exports = "[object z]" === String(i));
      },
      6330: (t) => {
        var e = String;
        t.exports = function (t) {
          try {
            return e(t);
          } catch (t) {
            return "Object";
          }
        };
      },
      9711: (t, e, n) => {
        var i = n(1702),
          o = 0,
          r = Math.random(),
          a = i((1).toString);
        t.exports = function (t) {
          return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + r, 36);
        };
      },
      3307: (t, e, n) => {
        var i = n(6293);
        t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      3353: (t, e, n) => {
        var i = n(9781),
          o = n(7293);
        t.exports =
          i &&
          o(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      4811: (t, e, n) => {
        var i = n(7854),
          o = n(614),
          r = i.WeakMap;
        t.exports = o(r) && /native code/.test(String(r));
      },
      5112: (t, e, n) => {
        var i = n(7854),
          o = n(2309),
          r = n(2597),
          a = n(9711),
          s = n(6293),
          c = n(3307),
          u = i.Symbol,
          l = o("wks"),
          d = c ? u.for || u : (u && u.withoutSetter) || a;
        t.exports = function (t) {
          return (
            r(l, t) || (l[t] = s && r(u, t) ? u[t] : d("Symbol." + t)), l[t]
          );
        };
      },
      7327: (t, e, n) => {
        "use strict";
        var i = n(2109),
          o = n(2092).filter;
        i(
          { target: "Array", proto: !0, forced: !n(1194)("filter") },
          {
            filter: function (t) {
              return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      9554: (t, e, n) => {
        "use strict";
        var i = n(2109),
          o = n(8533);
        i(
          { target: "Array", proto: !0, forced: [].forEach != o },
          { forEach: o }
        );
      },
      6699: (t, e, n) => {
        "use strict";
        var i = n(2109),
          o = n(1318).includes,
          r = n(7293),
          a = n(1223);
        i(
          {
            target: "Array",
            proto: !0,
            forced: r(function () {
              return !Array(1).includes();
            }),
          },
          {
            includes: function (t) {
              return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
          a("includes");
      },
      3921: (t, e, n) => {
        var i = n(5354);
        t.exports = i;
      },
      5823: (t, e, n) => {
        var i = n(817);
        t.exports = i;
      },
      6575: (t, e, n) => {
        var i = n(3462);
        t.exports = i;
      },
      850: (t, e, n) => {
        (t.exports = n(3645)(!1)).push([
          t.id,
          ".cloudimage-360-hotspot-link-icon {\n  width: 42px;\n  height: 42px;\n  background: rgba(12, 109, 199, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  box-sizing: border-box;\n  transition: opacity 600ms ease-in-out;\n  cursor: auto;\n}\n\n.cloudimage-360-hotspot-link-icon::before {\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background-image: url('https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/assets/img/link-hotspot.svg');\n  background-color: #0C6DC7;\n  background-repeat: no-repeat;\n  background-size: 9px;\n  background-position: center;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 50%;\n\tanimation: pulse 2s infinite;\n  cursor: auto;\n}\n\n.cloudimage-360-hotspot-custom-icon {\n  width: 42px;\n  height: 42px;\n  background: #76AD0133;\n  border: 1px solid #FFFFFF33;\n  border-radius: 50%;\n  box-sizing: border-box;\n  transition: opacity 300ms ease-in-out;\n  cursor: auto;\n}\n\n.cloudimage-360-hotspot-custom-icon::before {\n  content: '';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  background-image: url('https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/assets/img/plus.svg');\n  background-color: #76AD01;\n  background-repeat: no-repeat;\n  background-size: 9px;\n  background-position: center;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 50%;\n\tanimation: pulse 2s infinite;\n  cursor: auto;\n}\n\n.cloudimage-360-hotspot-popup {\n  visibility: hidden;\n  opacity: 0;\n  background-color: #FFFFFF;\n  padding: 6px;\n  border-radius: 2px;\n  box-shadow: 0px 4px 4px 0px #00000040;\n  z-index: 999;\n}\n\n.cloudimage-360-hotspot-popup[data-show] {\n  visibility: visible;\n  opacity: 1;\n}\n\n.cloudimage-360-popup-arrow,\n.cloudimage-360-popup-arrow::before {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: inherit;\n  cursor: 'auto';\n}\n\n.cloudimage-360-popup-arrow {\n  visibility: hidden;\n}\n\n.cloudimage-360-popup-arrow::before {\n  visibility: visible;\n  content: '';\n  transform: rotate(45deg);\n}\n\n.cloudimage-360-hotspot-popup[data-popper-placement^='top']\n  > .cloudimage-360-popup-arrow {\n  bottom: -4px;\n}\n\n.cloudimage-360-hotspot-popup[data-popper-placement^='bottom']\n  > .cloudimage-360-popup-arrow {\n  top: -4px;\n}\n\n.cloudimage-360-hotspot-popup[data-popper-placement^='left']\n  > .cloudimage-360-popup-arrow {\n  right: -4px;\n}\n\n.cloudimage-360-hotspot-popup[data-popper-placement^='right']\n  > .cloudimage-360-popup-arrow {\n  left: -4px;\n}\n\n.cloudimage-360-modal-wrapper {\n  max-width: 222px;\n}\n\n.cloudimage-360-images-carousel-wrapper {\n  margin: 0 auto;\n}\n\n.cloudimage-360-images-carousel {\n  background-color: #f5f4f4;\n  border-radius: 2px;\n}\n\n.cloudimage-360-images-carousel .cloudimage-360-carousel-image {\n  display: none;\n  object-fit: contain;\n  min-height: 187px;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cloudimage-360-images-carousel .cloudimage-360-carousel-image.active-image {\n  display: block;\n  animation-name: fade-active-image;\n  animation-duration: 1.5s;\n}\n\n.cloudimage-360-carousel-dots {\n  display: flex;\n  column-gap: 6px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 5px auto;\n  row-gap: 3px;\n  padding: 0 6px;\n  width: 50%;\n}\n\n.cloudimage-360-carousel-dot {\n  width: 6px;\n  height: 6px;\n  background-color: #C9D0DE;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.6s ease;\n  border: 0;\n  padding: 0;\n}\n\n.cloudimage-360-carousel-dot.active-dot {\n  background-color: #76AD01;\n}\n\n.cloudimage-360-carousel-dot:focus,\n.cloudimage-360-carousel-dot:focus-visible {\n  border: 0;\n  outline: 0;\n}\n\n.cloudimage-360-modal-title {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 16px;\n  margin: 4px 0;\n}\n\n.cloudimage-360-modal-description {\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 16px;\n  margin: 4px 0;\n}\n\n.cloudimage-360-modal-more-details {\n  color: #76AD01;\n  background-color: #ECFAE6;\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 400;\n  padding: 4px 8px;\n  transition: background-color 200ms ease-in-out;\n  border-radius: 2px;\n  text-decoration: none;\n}\n\n.cloudimage-360-modal-more-details:hover {\n  color: #76AD01;\n  background-color: #e1f5d8;\n}\n\n@keyframes pulse {\n\t0% {\n\t\tbox-shadow: 0 0 0 0 rgba(99, 99, 99, 0.7);\n\t}\n\n\t70% {\n\t\tbox-shadow: 0 0 0 10px rgba(99, 99, 99, 0);\n\t}\n\n\t100% {\n\t\tbox-shadow: 0 0 0 0 rgba(99, 99, 99, 0);\n\t}\n}\n\n@keyframes fade-active-image {\n  from { opacity: 0.7 }\n  to { opacity: 1 }\n}",
          "",
        ]);
      },
      1860: (t, e, n) => {
        (t.exports = n(3645)(!1)).push([
          t.id,
          ".cloudimage-360-icons-container {\n  position: absolute;\n  display: flex;\n  top: 5px;\n  right: 5px;\n  width: 30px;\n  height: 95%;\n  flex-direction: column;\n  align-items: center;\n  z-index: 101;\n}\n\n.cloudimage-360-magnifier-icon {\n  width: 25px;\n  height: 25px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background: url('https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/loupe.svg') 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360-fullscreen-icon {\n  width: 25px;\n  height: 25px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  background: url('https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/full_screen.svg') 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360-reset-zoom-icon {\n  display: none;\n  width: 30px;\n  height: 30px;\n  margin-top: auto;\n  cursor: pointer;\n  background: url('https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/ic-resize.svg?vh=248986') 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360-close-fullscreen-icon {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  background: url('https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/cross.svg') 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360-loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 0%;\n  height: 8px;\n  background-color: rgb(165, 175, 184);\n  z-index: 100;\n}\n\n.cloudimage-360-box-shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\n\n.cloudimage-360-view-360-icon {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 50%;\n  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 4px;\n  transition: 0.5s all;\n  color: rgb(80, 80, 80);\n  text-align: center;\n  line-height: 100px;\n  z-index: 2;\n}\n\n.cloudimage-360-view-360-circle {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 80%;\n  height: auto;\n  margin: auto;\n  pointer-events: none;\n  user-select: none;\n  transition: 0.5s all;\n  z-index: 2;\n}\n\n.cloudimage-360-fullscreen-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background-color: #FFF;\n}\n\n.cloudimage-360-img-magnifier-glass {\n  background-color: #FFF;\n  background-repeat: no-repeat;\n  position: absolute;\n  border: 3px solid #000;\n  border-radius: 50%;\n  cursor: wait;\n  line-height: 200px;\n  text-align: center;\n  z-index: 1000;\n  width: 250px;\n  height: 250px;\n  top: -75px;\n  right: -85px;\n}\n\n.cloudimage-360 .cloudimage-360-left,\n.cloudimage-360 .cloudimage-360-right {\n  padding: 8px;\n  background: rgb(244, 244, 244);\n  border: none;\n  border-radius: 4px;\n}\n\n.cloudimage-360 .cloudimage-360-left:focus,\n.cloudimage-360 .cloudimage-360-right:focus {\n  outline: none;\n}\n\n.cloudimage-360 .cloudimage-360-left {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  top: calc(50% - 15px);\n  left: 20px;\n}\n\n.cloudimage-360 .cloudimage-360-right {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  top: calc(50% - 15px);\n  right: 20px;\n}\n\n.cloudimage-360 .cloudimage-360-left:before,\n.cloudimage-360 .cloudimage-360-right:before {\n  content: '';\n  display: block;\n  width: 30px;\n  height: 30px;\n  background: 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360 .cloudimage-360-left:before {\n  background-image: url('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-left.svg');\n}\n\n.cloudimage-360 .cloudimage-360-right:before {\n  background-image: url('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-right.svg');\n}\n\n.cloudimage-360 .cloudimage-360-left.not-active,\n.cloudimage-360 .cloudimage-360-right.not-active {\n  opacity: 0.4;\n  cursor: default;\n  pointer-events: none;\n}\n\n.cloudimage-360 .cloudimage-360-top,\n.cloudimage-360 .cloudimage-360-bottom {\n  padding: 8px;\n  background: rgb(244, 244, 244);\n  border: none;\n  border-radius: 4px;\n}\n\n.cloudimage-360 .cloudimage-360-top:focus,\n.cloudimage-360 .cloudimage-360-bottom:focus {\n  outline: none;\n}\n\n.cloudimage-360 .cloudimage-360-top {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  left: calc(50% - 15px);\n  top: 20px;\n  transform: rotate(90deg);\n}\n\n.cloudimage-360 .cloudimage-360-bottom {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  left: calc(50% - 15px);\n  bottom: 20px;\n  transform: rotate(90deg);\n}\n\n.cloudimage-360 .cloudimage-360-top:before,\n.cloudimage-360 .cloudimage-360-bottom:before {\n  content: '';\n  display: block;\n  width: 30px;\n  height: 30px;\n  background: 50% 50% / cover no-repeat;\n}\n\n.cloudimage-360 .cloudimage-360-top:before {\n  background-image: url('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-left.svg');\n}\n\n.cloudimage-360 .cloudimage-360-bottom:before {\n  background-image: url('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/assets/img/arrow-right.svg');\n}\n\n.cloudimage-360 .cloudimage-360-top.not-active,\n.cloudimage-360 .cloudimage-360-bottom.not-active {\n  opacity: 0.4;\n  cursor: default;\n}",
          "",
        ]);
      },
      3645: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = (function (t, e) {
                  var n,
                    i = t[1] || "",
                    o = t[3];
                  if (!o) return i;
                  if (e && "function" == typeof btoa) {
                    var r =
                        ((n = o),
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                          btoa(
                            unescape(encodeURIComponent(JSON.stringify(n)))
                          ) +
                          " */"),
                      a = o.sources.map(function (t) {
                        return "/*# sourceURL=" + o.sourceRoot + t + " */";
                      });
                    return [i].concat(a).concat([r]).join("\n");
                  }
                  return [i].join("\n");
                })(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
              }).join("");
            }),
            (e.i = function (t, n) {
              "string" == typeof t && (t = [[null, t, ""]]);
              for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                null != r && (i[r] = !0);
              }
              for (o = 0; o < t.length; o++) {
                var a = t[o];
                (null != a[0] && i[a[0]]) ||
                  (n && !a[2]
                    ? (a[2] = n)
                    : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                  e.push(a));
              }
            }),
            e
          );
        };
      },
      3379: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, i = 0; i < e.length; i++)
            if (e[i].identifier === t) {
              n = i;
              break;
            }
          return n;
        }
        function i(t, i) {
          for (var r = {}, a = [], s = 0; s < t.length; s++) {
            var c = t[s],
              u = i.base ? c[0] + i.base : c[0],
              l = r[u] || 0,
              d = "".concat(u, " ").concat(l);
            r[u] = l + 1;
            var h = n(d),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(f);
            else {
              var p = o(f, i);
              (i.byIndex = s),
                e.splice(s, 0, { identifier: d, updater: p, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var r = i((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < r.length; a++) {
              var s = n(r[a]);
              e[s].references--;
            }
            for (var c = i(t, o), u = 0; u < r.length; u++) {
              var l = n(r[u]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            r = c;
          };
        };
      },
      569: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var i = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          i.appendChild(n);
        };
      },
      9216: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      3565: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      7795: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var i = "";
                n.supports && (i += "@supports (".concat(n.supports, ") {")),
                  n.media && (i += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (i += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (i += n.css),
                  o && (i += "}"),
                  n.media && (i += "}"),
                  n.supports && (i += "}");
                var r = n.sourceMap;
                r &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      " */"
                    )),
                  e.styleTagTransform(i, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      4589: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      7061: (t, e, n) => {
        var i = n(8698).default;
        function o() {
          "use strict";
          (t.exports = o =
            function () {
              return e;
            }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
          var e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            s = "function" == typeof Symbol ? Symbol : {},
            c = s.iterator || "@@iterator",
            u = s.asyncIterator || "@@asyncIterator",
            l = s.toStringTag || "@@toStringTag";
          function d(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            d({}, "");
          } catch (t) {
            d = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function h(t, e, n, i) {
            var o = e && e.prototype instanceof m ? e : m,
              r = Object.create(o.prototype),
              s = new j(i || []);
            return a(r, "_invoke", { value: k(t, n, s) }), r;
          }
          function f(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = h;
          var p = {};
          function m() {}
          function v() {}
          function g() {}
          var y = {};
          d(y, c, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            w = b && b(b(L([])));
          w && w !== n && r.call(w, c) && (y = w);
          var x = (g.prototype = m.prototype = Object.create(y));
          function I(t) {
            ["next", "throw", "return"].forEach(function (e) {
              d(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function O(t, e) {
            function n(o, a, s, c) {
              var u = f(t[o], t, a);
              if ("throw" !== u.type) {
                var l = u.arg,
                  d = l.value;
                return d && "object" == i(d) && r.call(d, "__await")
                  ? e.resolve(d.__await).then(
                      function (t) {
                        n("next", t, s, c);
                      },
                      function (t) {
                        n("throw", t, s, c);
                      }
                    )
                  : e.resolve(d).then(
                      function (t) {
                        (l.value = t), s(l);
                      },
                      function (t) {
                        return n("throw", t, s, c);
                      }
                    );
              }
              c(u.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (t, i) {
                function r() {
                  return new e(function (e, o) {
                    n(t, i, e, o);
                  });
                }
                return (o = o ? o.then(r, r) : r());
              },
            });
          }
          function k(t, e, n) {
            var i = "suspendedStart";
            return function (o, r) {
              if ("executing" === i)
                throw new Error("Generator is already running");
              if ("completed" === i) {
                if ("throw" === o) throw r;
                return { value: void 0, done: !0 };
              }
              for (n.method = o, n.arg = r; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = E(a, n);
                  if (s) {
                    if (s === p) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === i) throw ((i = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                i = "executing";
                var c = f(t, e, n);
                if ("normal" === c.type) {
                  if (
                    ((i = n.done ? "completed" : "suspendedYield"), c.arg === p)
                  )
                    continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((i = "completed"), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          }
          function E(t, e) {
            var n = e.method,
              i = t.iterator[n];
            if (void 0 === i)
              return (
                (e.delegate = null),
                ("throw" === n &&
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  E(t, e),
                  "throw" === e.method)) ||
                  ("return" !== n &&
                    ((e.method = "throw"),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                p
              );
            var o = f(i, t.iterator, e.arg);
            if ("throw" === o.type)
              return (
                (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), p
              );
            var r = o.arg;
            return r
              ? r.done
                ? ((e[t.resultName] = r.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  p)
                : r
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                p);
          }
          function S(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function C(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function j(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(S, this),
              this.reset(!0);
          }
          function L(t) {
            if (t) {
              var e = t[c];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var n = -1,
                  i = function e() {
                    for (; ++n < t.length; )
                      if (r.call(t, n))
                        return (e.value = t[n]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (i.next = i);
              }
            }
            return { next: A };
          }
          function A() {
            return { value: void 0, done: !0 };
          }
          return (
            (v.prototype = g),
            a(x, "constructor", { value: g, configurable: !0 }),
            a(g, "constructor", { value: v, configurable: !0 }),
            (v.displayName = d(g, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === v || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, g)
                  : ((t.__proto__ = g), d(t, l, "GeneratorFunction")),
                (t.prototype = Object.create(x)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            I(O.prototype),
            d(O.prototype, u, function () {
              return this;
            }),
            (e.AsyncIterator = O),
            (e.async = function (t, n, i, o, r) {
              void 0 === r && (r = Promise);
              var a = new O(h(t, n, i, o), r);
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            I(x),
            d(x, l, "Generator"),
            d(x, c, function () {
              return this;
            }),
            d(x, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var i in e) n.push(i);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var i = n.pop();
                    if (i in e) return (t.value = i), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = L),
            (j.prototype = {
              constructor: j,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(C),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      r.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function n(n, i) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = n),
                    i && ((e.method = "next"), (e.arg = void 0)),
                    !!i
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i],
                    a = o.completion;
                  if ("root" === o.tryLoc) return n("end");
                  if (o.tryLoc <= this.prev) {
                    var s = r.call(o, "catchLoc"),
                      c = r.call(o, "finallyLoc");
                    if (s && c) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    } else if (s) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (
                    i.tryLoc <= this.prev &&
                    r.call(i, "finallyLoc") &&
                    this.prev < i.finallyLoc
                  ) {
                    var o = i;
                    break;
                  }
                }
                o &&
                  ("break" === t || "continue" === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  p
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), C(n), p;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var i = n.completion;
                    if ("throw" === i.type) {
                      var o = i.arg;
                      C(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: L(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  p
                );
              },
            }),
            e
          );
        }
        (t.exports = o),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      8698: (t) => {
        function e(n) {
          return (
            (t.exports = e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(n)
          );
        }
        (t.exports = e),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      4687: (t, e, n) => {
        var i = n(7061)();
        t.exports = i;
        try {
          regeneratorRuntime = i;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = i)
            : Function("r", "regeneratorRuntime = r")(i);
        }
      },
    },
    e = {};
  function n(i) {
    var o = e[i];
    if (void 0 !== o) return o.exports;
    var r = (e[i] = { id: i, exports: {} });
    return t[i](r, r.exports, n), r.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      function t(e) {
        return (
          (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          t(e)
        );
      }
      function e(e) {
        var n = (function (e, n) {
          if ("object" !== t(e) || null === e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var o = i.call(e, "string");
            if ("object" !== t(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" === t(n) ? n : String(n);
      }
      function i(t, n, i) {
        return (
          (n = e(n)) in t
            ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = i),
          t
        );
      }
      function o(t, n) {
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, e(o.key), o);
        }
      }
      n(7528), n(6139), n(4577);
      var r = "spin-y",
        a = "spin-xy",
        s = "spin-yx",
        c = "x-axis",
        u = "y-axis",
        l = "center",
        d = function (t) {
          return {
            folder: f(t, "folder") || f(t, "data-folder") || "/",
            apiVersion:
              f(t, "api-version") ||
              f(t, "data-api-version") ||
              f(t, "apiVersion") ||
              f(t, "data-apiVersion") ||
              "v7",
            filenameX:
              f(t, "filename") ||
              f(t, "data-filename") ||
              f(t, "filename-x") ||
              f(t, "data-filename-x") ||
              "{index}.webp",
            filenameY:
              f(t, "filename-y") ||
              f(t, "data-filename-y") ||
              "{index}.webp",
            imageListX:
              f(t, "image-list-x") || f(t, "data-image-list-x") || null,
            imageListY:
              f(t, "image-list-y") || f(t, "data-image-list-y") || null,
            indexZeroBase: parseInt(
              f(t, "index-zero-base") || f(t, "data-index-zero-base") || 0,
              10
            ),
            amountX: parseInt(
              f(t, "amount") ||
                f(t, "data-amount") ||
                f(t, "amount-x") ||
                f(t, "data-amount-x") ||
                36,
              10
            ),
            amountY: parseInt(
              f(t, "amount-y") || f(t, "data-amount-y") || 0,
              10
            ),
            speed: parseInt(f(t, "speed") || f(t, "data-speed") || 80, 10),
            dragSpeed: parseInt(
              f(t, "drag-speed") || f(t, "data-drag-speed") || 150,
              10
            ),
            keys: h(t, "keys"),
            keysReverse: h(t, "keys-reverse"),
            boxShadow: f(t, "box-shadow") || f(t, "data-box-shadow"),
            autoplay: h(t, "autoplay"),
            autoplayBehavior:
              f(t, "autoplay-behavior") ||
              f(t, "data-autoplay-behavior") ||
              "spin-x",
            playOnce: h(t, "play-once"),
            autoplayReverse: h(t, "autoplay-reverse"),
            pointerZoom: parseFloat(
              f(t, "pointer-zoom") || f(t, "data-pointer-zoom") || 0,
              10
            ),
            bottomCircle: h(t, "bottom-circle"),
            disableDrag: h(t, "disable-drag"),
            fullscreen: h(t, "fullscreen") || h(t, "full-screen"),
            magnifier:
              (null !== f(t, "magnifier") || null !== f(t, "data-magnifier")) &&
              parseFloat(f(t, "magnifier") || f(t, "data-magnifier"), 10),
            bottomCircleOffset: parseInt(
              f(t, "bottom-circle-offset") ||
                f(t, "data-bottom-circle-offset") ||
                5,
              10
            ),
            ciToken: f(t, "responsive") || f(t, "data-responsive"),
            ciFilters: f(t, "filters") || f(t, "data-filters"),
            ciTransformation:
              f(t, "transformation") || f(t, "data-transformation"),
            lazyload: h(t, "lazyload"),
            lazySelector:
              f(t, "lazyload-selector") ||
              f(t, "data-lazyload-selector") ||
              "lazyload",
            spinReverse: h(t, "spin-reverse"),
            controlReverse: h(t, "control-reverse"),
            stopAtEdges: h(t, "stop-at-edges"),
            hide360Logo: h(t, "hide-360-logo"),
            logoSrc:
              f(t, "logo-src") ||
              "https://scaleflex.cloudimg.io/v7/filerobot/js-cloudimage-360-view/360_view.svg",
            ratio: f(t, "ratio") || f(t, "data-ratio"),
            imageInfo: f(t, "info") || f(t, "data-info") || h(t, "info"),
            requestResponsiveImages: h(t, "request-responsive-images"),
          };
        },
        h = function (t, e) {
          var n = f(t, e),
            i = f(t, "data-".concat(e));
          return (null !== n && "false" !== n) || (null !== i && "false" !== i);
        },
        f = function (t, e) {
          return t.getAttribute(e);
        },
        p = function (t, e) {
          t.style.background = "rgba(255,255,255,0.8) url('".concat(
            e,
            "') 50% 50% / contain no-repeat"
          );
        },
        m = n(3379),
        v = n.n(m),
        g = n(7795),
        y = n.n(g),
        b = n(569),
        w = n.n(b),
        x = n(3565),
        I = n.n(x),
        O = n(9216),
        k = n.n(O),
        E = n(4589),
        S = n.n(E),
        C = n(1860),
        j = n.n(C),
        L = {};
      (L.styleTagTransform = S()),
        (L.setAttributes = I()),
        (L.insert = w().bind(null, "head")),
        (L.domAPI = y()),
        (L.insertStyleElement = k()),
        v()(j(), L),
        j() && j().locals && j().locals;
      var A = n(850),
        P = n.n(A),
        D = {};
      (D.styleTagTransform = S()),
        (D.setAttributes = I()),
        (D.insert = w().bind(null, "head")),
        (D.domAPI = y()),
        (D.insertStyleElement = k()),
        v()(P(), D),
        P() && P().locals && P().locals;
      var Y = [
          "folder",
          "filenameX",
          "filenameY",
          "apiVersion",
          "imageListX",
          "imageListY",
          "indexZeroBase",
          "lazySelector",
          "keys",
          "stopAtEdges",
          "disableDrag",
          "controlReverse",
          "disableDrag",
        ],
        T = [!1, 0, null, void 0, "false", "0", "null", "undefined"],
        R = function (t, e) {
          var n,
            i,
            o,
            r = t.container,
            a = t.folder,
            s = t.apiVersion,
            c = t.filename,
            u = void 0 === c ? "" : c,
            l = t.ciParams || {},
            d = l.ciToken,
            h = l.ciFilters,
            f = l.ciTransformation,
            p = "".concat(a).concat(u);
          if (d) {
            var m = r.offsetWidth,
              v = -1 === T.indexOf(s) ? s : null,
              g = v ? "".concat(v, "/") : "",
              y =
                ((n = (
                  (o = m) <= 25
                    ? "25"
                    : o <= 50
                    ? "50"
                    : (100 * Math.ceil(o / 100)).toString()
                )
                  .toString()
                  .split("x")),
                (i = []),
                [].forEach.call(n, function (t) {
                  i.push(t * Math.round(window.devicePixelRatio || 1));
                }),
                i.join("x")),
              b =
                -1 !== new URL(p).origin.indexOf("cloudimg")
                  ? p
                  : "https://".concat(d, ".cloudimg.io/").concat(g).concat(p);
            p = ""
              .concat(b, "?")
              .concat(f || "".concat(e ? "" : "width=".concat(y), " "))
              .concat(h ? "&f=".concat(h) : "");
          }
          return p;
        },
        X = function (t, e) {
          var n = new Image();
          n.src = t;
          var i = function () {
            return e(n);
          };
          (n.onload = i), (n.onerror = i);
        },
        M = function t(e, n) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            o = e[i];
          i > e.length - 1 ||
            X(o, function (o) {
              var r = i + 1;
              n(o, i), t(e, n, r);
            });
        };
      function F(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i;
      }
      function z(t, e) {
        if (t) {
          if ("string" == typeof t) return F(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? F(t, e)
              : void 0
          );
        }
      }
      var N = /width=\d+|w=\d+|h=\d+|&width=\d+|&w=\d+|&h=\d+|func=\w+|\?$/g,
        V = /\?&/g,
        B = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (t += "").length >= e
            ? t
            : new Array(e - t.length + 1).join("0") + t;
        },
        _ = function (t, e, n) {
          var i,
            o = e || {},
            r = o.amount,
            a = o.indexZeroBase;
          return ((i = new Array(r)),
          (function (t) {
            if (Array.isArray(t)) return F(t);
          })(i) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(i) ||
            z(i) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()).map(function (e, i) {
            var o = B(i + 1, a),
              r = t.replace("{index}", o);
            return n ? r.replace(N, "").replace(V, "?") : r;
          });
        };
      function W(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      var H = function (t, e, n) {
          var o = e.folder;
          return t.map(function (t) {
            var r = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? W(Object(n), !0).forEach(function (e) {
                      i(t, e, n[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : W(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
              }
              return t;
            })({}, e);
            return (
              (r.folder = /(http(s?)):\/\//gi.test(t) ? "" : o),
              (r.filename = t),
              R(r, n)
            );
          });
        },
        q = function (t, e, n) {
          var i = (t || {}).imageList,
            o = [];
          if (i)
            try {
              var r = JSON.parse(i);
              o = H(r, t);
            } catch (t) {
              console.error(
                "Wrong format in image-list attribute: ".concat(t.message)
              );
            }
          else o = _(e, t);
          M(o, n);
        };
      function U(t, e, n, i, o, r, a) {
        try {
          var s = t[r](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(i, o);
      }
      function Z(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = t.apply(e, n);
            function a(t) {
              U(r, i, o, a, s, "next", t);
            }
            function s(t) {
              U(r, i, o, a, s, "throw", t);
            }
            a(void 0);
          });
        };
      }
      var G = n(4687),
        J = n.n(G),
        $ = (function () {
          var t = Z(
            J().mark(function t(e, n) {
              return J().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        Promise.all(
                          e.map(
                            (function () {
                              var t = Z(
                                J().mark(function t(e, n) {
                                  return J().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (t.next = 2), X(e, n);
                                        case 2:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e, n) {
                                return t.apply(this, arguments);
                              };
                            })()
                          )
                        )
                      );
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })(),
        K = function (t, e, n) {
          var i = (t || {}).imageList,
            o = [];
          if (i)
            try {
              var r = JSON.parse(i);
              o = H(r, t, !0);
            } catch (t) {
              console.error(
                "Wrong format in image-list attribute: ".concat(t.message)
              );
            }
          else o = _(e, t, !0);
          $(o, n);
        };
      function Q(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      var tt = function (t, e, n) {
          var o,
            r = e || {},
            a = r.imageList,
            s = r.lazySelector,
            c = r.innerBox;
          if (a)
            try {
              o = (function (t, e) {
                var n = e.folder,
                  o = t[0],
                  r = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? Q(Object(n), !0).forEach(function (e) {
                            i(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : Q(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e)
                            );
                          });
                    }
                    return t;
                  })({}, e);
                return (
                  (r.folder = /(http(s?)):\/\//gi.test(o) ? "" : n),
                  (r.filename = o),
                  R(r)
                );
              })(JSON.parse(a), e);
            } catch (t) {
              console.error(
                "Wrong format in image-list attribute: ".concat(t.message)
              );
            }
          else
            o = (function (t, e) {
              var n = (e || {}).indexZeroBase,
                i = B(1, n);
              return t.replace("{index}", i);
            })(t, e);
          var u = new Image();
          u.setAttribute("data-src", o),
            (u.style.position = "absolute"),
            (u.style.top = 0),
            (u.style.left = 0),
            (u.style.width = "100%"),
            (u.style.maxWidth = "100%"),
            (u.style.maxHeight = "100%"),
            s && (u.className = s),
            c.appendChild(u),
            n &&
              (u.onload = function () {
                return n(u);
              });
        },
        et = function (t, e, n, i) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 1,
            r = n / i,
            a = t / e,
            s = t * o,
            c = e * o;
          return (
            r > a ? (c = s / r) : (s = c * r),
            {
              width: s,
              height: c,
              offsetX:
                (t - s) *
                (arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0.5),
              offsetY:
                (e - c) *
                (arguments.length > 6 && void 0 !== arguments[6]
                  ? arguments[6]
                  : 0.5),
            }
          );
        },
        nt = function (t, e, n) {
          var i,
            o,
            r = e.container,
            a = e.w,
            s = e.h,
            c = e.zoom,
            u = e.bw,
            l = e.offsetX,
            d = e.offsetY,
            h = (function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : window.event,
                e = 0,
                n = 0,
                i = (
                  arguments.length > 1 ? arguments[1] : void 0
                ).getBoundingClientRect();
              return (
                (e = t.pageX - i.left),
                (n = t.pageY - i.top),
                { x: (e -= window.pageXOffset), y: (n -= window.pageYOffset) }
              );
            })(t, r);
          (i = h.x),
            (o = h.y),
            i > r.offsetWidth - a / c && (i = r.offsetWidth - a / c),
            i < a / c && (i = a / c),
            o > r.offsetHeight - s / c && (o = r.offsetHeight - s / c),
            o < s / c && (o = s / c),
            (n.style.left = "".concat(i - a, "px")),
            (n.style.top = "".concat(o - s, "px"));
          var f = (i - l) * c - a + u,
            p = (o - d) * c - s + u;
          n.style.backgroundPosition = "-".concat(f, "px -").concat(p, "px");
        },
        it = function (t, e, n) {
          var i = (t / 150) * (36 / e) * 25 * (Math.max(n, 600) / 1500) || 1;
          return Math.floor(i);
        },
        ot = function (t, e) {
          var n = t || {};
          n.classList ? n.classList.add(e) : (n.className += " ".concat(e));
        },
        rt = function (t, e) {
          t.classList
            ? t.classList.remove(e)
            : (t.className = t.className.replace(
                new RegExp(
                  "(^|\\b)".concat(e.split(" ").join("|"), "(\\b|$)"),
                  "gi"
                ),
                " "
              ));
        },
        at = function (t, e, n, i, o) {
          var r = l;
          if (t) return o;
          var a = Math.abs(n.x - i.x),
            s = Math.abs(n.y - i.y);
          return a > 10 && (r = c), s > 10 && e && (r = u), r;
        },
        st = function (t, e, n) {
          return Math.floor((t - e) / n) || 1;
        },
        ct = function (t) {
          var e = document.createElement("div");
          return (
            (e.className = "cloudimage-360-icons-container"),
            t.appendChild(e),
            e
          );
        },
        ut = function (t, e) {
          var n = document.createElement("div");
          return (
            (n.className = "cloudimage-360-box-shadow"),
            (n.style.boxShadow = t),
            e.appendChild(n),
            n
          );
        },
        lt = function (t) {
          var e = document.createElement("div");
          return (e.className = "cloudimage-360-loader"), t.appendChild(e), e;
        },
        dt = function (t, e) {
          if (t && e)
            try {
              t.removeChild(e);
            } catch (t) {}
        },
        ht = function (t, e, n) {
          for (var i = new Array(e).length - 1; i > -1; i--) {
            var o,
              r = null === (o = t[i]) || void 0 === o ? void 0 : o[n];
            if (r) return r;
          }
          return "0%";
        },
        ft = function (t) {
          var e = "[data-hotspot-icon-id=".concat(t, "]");
          return document.querySelector(e);
        },
        pt = function (t) {
          (t.style.visibility = "hidden"), (t.style.opacity = 0);
        },
        mt = function (t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : "x-axis";
          e.forEach(function (e) {
            var r = e.positions,
              a = e.initialDimensions,
              s = e.orientation,
              c = e.variant.anchorId,
              u = (function (t) {
                switch (t.toLowerCase()) {
                  case "x-axis":
                  default:
                    return "x";
                  case "y-axis":
                    return "y";
                }
              })(o),
              l = "x" === s ? n : i,
              d = (function (t) {
                return t.reduce(function (e, n, i) {
                  var o = !(null == n || !n.xCoord),
                    r = !(null == n || !n.yCoord);
                  return (
                    o || (n.xCoord = ht(t, i, "xCoord")),
                    r || (n.yCoord = ht(t, i, "yCoord")),
                    e.push(n),
                    e
                  );
                }, []);
              })(r),
              h = d.find(function (t) {
                return t.imageIndex === l;
              }),
              f = ft(c);
            if (h && u === s) {
              var p = h.xCoord,
                m = void 0 === p ? 0 : p,
                v = h.yCoord;
              !(function (t, e, n, i, o) {
                (n.style.visibility = "visible"),
                  (n.style.opacity = 1),
                  (n.style.zIndex = 100),
                  (n.style.left = "".concat(-n.offsetWidth / 2, "px")),
                  (n.style.top = "".concat(-n.offsetHeight / 2, "px"));
                var r = t.offsetWidth / e[0],
                  a = t.offsetHeight / e[1],
                  s = "".concat(r * i, "px"),
                  c = "".concat(a * o, "px");
                n.style.transform = "translate3d("
                  .concat(s, ", ")
                  .concat(c, ", 0)");
              })(t, a, f, m, void 0 === v ? 0 : v);
            } else pt(f);
          });
        };
      function vt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function gt(t) {
        return t instanceof vt(t).Element || t instanceof Element;
      }
      function yt(t) {
        return t instanceof vt(t).HTMLElement || t instanceof HTMLElement;
      }
      function bt(t) {
        return (
          "undefined" != typeof ShadowRoot &&
          (t instanceof vt(t).ShadowRoot || t instanceof ShadowRoot)
        );
      }
      var wt = Math.max,
        xt = Math.min,
        It = Math.round;
      function Ot() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
              .map(function (t) {
                return t.brand + "/" + t.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function kt() {
        return !/^((?!chrome|android).)*safari/i.test(Ot());
      }
      function Et(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var i = t.getBoundingClientRect(),
          o = 1,
          r = 1;
        e &&
          yt(t) &&
          ((o = (t.offsetWidth > 0 && It(i.width) / t.offsetWidth) || 1),
          (r = (t.offsetHeight > 0 && It(i.height) / t.offsetHeight) || 1));
        var a = (gt(t) ? vt(t) : window).visualViewport,
          s = !kt() && n,
          c = (i.left + (s && a ? a.offsetLeft : 0)) / o,
          u = (i.top + (s && a ? a.offsetTop : 0)) / r,
          l = i.width / o,
          d = i.height / r;
        return {
          width: l,
          height: d,
          top: u,
          right: c + l,
          bottom: u + d,
          left: c,
          x: c,
          y: u,
        };
      }
      function St(t) {
        var e = vt(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function Ct(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      function jt(t) {
        return ((gt(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement;
      }
      function Lt(t) {
        return Et(jt(t)).left + St(t).scrollLeft;
      }
      function At(t) {
        return vt(t).getComputedStyle(t);
      }
      function Pt(t) {
        var e = At(t),
          n = e.overflow,
          i = e.overflowX,
          o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i);
      }
      function Dt(t, e, n) {
        void 0 === n && (n = !1);
        var i,
          o,
          r = yt(e),
          a =
            yt(e) &&
            (function (t) {
              var e = t.getBoundingClientRect(),
                n = It(e.width) / t.offsetWidth || 1,
                i = It(e.height) / t.offsetHeight || 1;
              return 1 !== n || 1 !== i;
            })(e),
          s = jt(e),
          c = Et(t, a, n),
          u = { scrollLeft: 0, scrollTop: 0 },
          l = { x: 0, y: 0 };
        return (
          (r || (!r && !n)) &&
            (("body" !== Ct(e) || Pt(s)) &&
              (u =
                (i = e) !== vt(i) && yt(i)
                  ? { scrollLeft: (o = i).scrollLeft, scrollTop: o.scrollTop }
                  : St(i)),
            yt(e)
              ? (((l = Et(e, !0)).x += e.clientLeft), (l.y += e.clientTop))
              : s && (l.x = Lt(s))),
          {
            x: c.left + u.scrollLeft - l.x,
            y: c.top + u.scrollTop - l.y,
            width: c.width,
            height: c.height,
          }
        );
      }
      function Yt(t) {
        var e = Et(t),
          n = t.offsetWidth,
          i = t.offsetHeight;
        return (
          Math.abs(e.width - n) <= 1 && (n = e.width),
          Math.abs(e.height - i) <= 1 && (i = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: n, height: i }
        );
      }
      function Tt(t) {
        return "html" === Ct(t)
          ? t
          : t.assignedSlot || t.parentNode || (bt(t) ? t.host : null) || jt(t);
      }
      function Rt(t) {
        return ["html", "body", "#document"].indexOf(Ct(t)) >= 0
          ? t.ownerDocument.body
          : yt(t) && Pt(t)
          ? t
          : Rt(Tt(t));
      }
      function Xt(t, e) {
        var n;
        void 0 === e && (e = []);
        var i = Rt(t),
          o = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
          r = vt(i),
          a = o ? [r].concat(r.visualViewport || [], Pt(i) ? i : []) : i,
          s = e.concat(a);
        return o ? s : s.concat(Xt(Tt(a)));
      }
      function Mt(t) {
        return ["table", "td", "th"].indexOf(Ct(t)) >= 0;
      }
      function Ft(t) {
        return yt(t) && "fixed" !== At(t).position ? t.offsetParent : null;
      }
      function zt(t) {
        for (
          var e = vt(t), n = Ft(t);
          n && Mt(n) && "static" === At(n).position;

        )
          n = Ft(n);
        return n &&
          ("html" === Ct(n) ||
            ("body" === Ct(n) && "static" === At(n).position))
          ? e
          : n ||
              (function (t) {
                var e = /firefox/i.test(Ot());
                if (
                  /Trident/i.test(Ot()) &&
                  yt(t) &&
                  "fixed" === At(t).position
                )
                  return null;
                var n = Tt(t);
                for (
                  bt(n) && (n = n.host);
                  yt(n) && ["html", "body"].indexOf(Ct(n)) < 0;

                ) {
                  var i = At(n);
                  if (
                    "none" !== i.transform ||
                    "none" !== i.perspective ||
                    "paint" === i.contain ||
                    -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                    (e && "filter" === i.willChange) ||
                    (e && i.filter && "none" !== i.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      var Nt = "top",
        Vt = "bottom",
        Bt = "right",
        _t = "left",
        Wt = "auto",
        Ht = [Nt, Vt, Bt, _t],
        qt = "start",
        Ut = "end",
        Zt = "viewport",
        Gt = "popper",
        Jt = Ht.reduce(function (t, e) {
          return t.concat([e + "-" + qt, e + "-" + Ut]);
        }, []),
        $t = [].concat(Ht, [Wt]).reduce(function (t, e) {
          return t.concat([e, e + "-" + qt, e + "-" + Ut]);
        }, []),
        Kt = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function Qt(t) {
        var e = new Map(),
          n = new Set(),
          i = [];
        function o(t) {
          n.add(t.name),
            []
              .concat(t.requires || [], t.requiresIfExists || [])
              .forEach(function (t) {
                if (!n.has(t)) {
                  var i = e.get(t);
                  i && o(i);
                }
              }),
            i.push(t);
        }
        return (
          t.forEach(function (t) {
            e.set(t.name, t);
          }),
          t.forEach(function (t) {
            n.has(t.name) || o(t);
          }),
          i
        );
      }
      var te = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function ee() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect);
        });
      }
      function ne(t) {
        void 0 === t && (t = {});
        var e = t,
          n = e.defaultModifiers,
          i = void 0 === n ? [] : n,
          o = e.defaultOptions,
          r = void 0 === o ? te : o;
        return function (t, e, n) {
          void 0 === n && (n = r);
          var o,
            a,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, te, r),
              modifiersData: {},
              elements: { reference: t, popper: e },
              attributes: {},
              styles: {},
            },
            c = [],
            u = !1,
            l = {
              state: s,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(s.options) : n;
                d(),
                  (s.options = Object.assign({}, r, s.options, o)),
                  (s.scrollParents = {
                    reference: gt(t)
                      ? Xt(t)
                      : t.contextElement
                      ? Xt(t.contextElement)
                      : [],
                    popper: Xt(e),
                  });
                var a,
                  u,
                  h = (function (t) {
                    var e = Qt(t);
                    return Kt.reduce(function (t, n) {
                      return t.concat(
                        e.filter(function (t) {
                          return t.phase === n;
                        })
                      );
                    }, []);
                  })(
                    ((a = [].concat(i, s.options.modifiers)),
                    (u = a.reduce(function (t, e) {
                      var n = t[e.name];
                      return (
                        (t[e.name] = n
                          ? Object.assign({}, n, e, {
                              options: Object.assign({}, n.options, e.options),
                              data: Object.assign({}, n.data, e.data),
                            })
                          : e),
                        t
                      );
                    }, {})),
                    Object.keys(u).map(function (t) {
                      return u[t];
                    }))
                  );
                return (
                  (s.orderedModifiers = h.filter(function (t) {
                    return t.enabled;
                  })),
                  s.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      n = t.options,
                      i = void 0 === n ? {} : n,
                      o = t.effect;
                    if ("function" == typeof o) {
                      var r = o({ state: s, name: e, instance: l, options: i });
                      c.push(r || function () {});
                    }
                  }),
                  l.update()
                );
              },
              forceUpdate: function () {
                if (!u) {
                  var t = s.elements,
                    e = t.reference,
                    n = t.popper;
                  if (ee(e, n)) {
                    (s.rects = {
                      reference: Dt(e, zt(n), "fixed" === s.options.strategy),
                      popper: Yt(n),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (t) {
                        return (s.modifiersData[t.name] = Object.assign(
                          {},
                          t.data
                        ));
                      });
                    for (var i = 0; i < s.orderedModifiers.length; i++)
                      if (!0 !== s.reset) {
                        var o = s.orderedModifiers[i],
                          r = o.fn,
                          a = o.options,
                          c = void 0 === a ? {} : a,
                          d = o.name;
                        "function" == typeof r &&
                          (s =
                            r({ state: s, options: c, name: d, instance: l }) ||
                            s);
                      } else (s.reset = !1), (i = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (t) {
                    l.forceUpdate(), t(s);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (t) {
                        Promise.resolve().then(function () {
                          (a = void 0), t(o());
                        });
                      })),
                    a
                  );
                }),
              destroy: function () {
                d(), (u = !0);
              },
            };
          if (!ee(t, e)) return l;
          function d() {
            c.forEach(function (t) {
              return t();
            }),
              (c = []);
          }
          return (
            l.setOptions(n).then(function (t) {
              !u && n.onFirstUpdate && n.onFirstUpdate(t);
            }),
            l
          );
        };
      }
      var ie = { passive: !0 };
      const oe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            n = t.instance,
            i = t.options,
            o = i.scroll,
            r = void 0 === o || o,
            a = i.resize,
            s = void 0 === a || a,
            c = vt(e.elements.popper),
            u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return (
            r &&
              u.forEach(function (t) {
                t.addEventListener("scroll", n.update, ie);
              }),
            s && c.addEventListener("resize", n.update, ie),
            function () {
              r &&
                u.forEach(function (t) {
                  t.removeEventListener("scroll", n.update, ie);
                }),
                s && c.removeEventListener("resize", n.update, ie);
            }
          );
        },
        data: {},
      };
      function re(t) {
        return t.split("-")[0];
      }
      function ae(t) {
        return t.split("-")[1];
      }
      function se(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function ce(t) {
        var e,
          n = t.reference,
          i = t.element,
          o = t.placement,
          r = o ? re(o) : null,
          a = o ? ae(o) : null,
          s = n.x + n.width / 2 - i.width / 2,
          c = n.y + n.height / 2 - i.height / 2;
        switch (r) {
          case Nt:
            e = { x: s, y: n.y - i.height };
            break;
          case Vt:
            e = { x: s, y: n.y + n.height };
            break;
          case Bt:
            e = { x: n.x + n.width, y: c };
            break;
          case _t:
            e = { x: n.x - i.width, y: c };
            break;
          default:
            e = { x: n.x, y: n.y };
        }
        var u = r ? se(r) : null;
        if (null != u) {
          var l = "y" === u ? "height" : "width";
          switch (a) {
            case qt:
              e[u] = e[u] - (n[l] / 2 - i[l] / 2);
              break;
            case Ut:
              e[u] = e[u] + (n[l] / 2 - i[l] / 2);
          }
        }
        return e;
      }
      var ue = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function le(t) {
        var e,
          n = t.popper,
          i = t.popperRect,
          o = t.placement,
          r = t.variation,
          a = t.offsets,
          s = t.position,
          c = t.gpuAcceleration,
          u = t.adaptive,
          l = t.roundOffsets,
          d = t.isFixed,
          h = a.x,
          f = void 0 === h ? 0 : h,
          p = a.y,
          m = void 0 === p ? 0 : p,
          v = "function" == typeof l ? l({ x: f, y: m }) : { x: f, y: m };
        (f = v.x), (m = v.y);
        var g = a.hasOwnProperty("x"),
          y = a.hasOwnProperty("y"),
          b = _t,
          w = Nt,
          x = window;
        if (u) {
          var I = zt(n),
            O = "clientHeight",
            k = "clientWidth";
          I === vt(n) &&
            "static" !== At((I = jt(n))).position &&
            "absolute" === s &&
            ((O = "scrollHeight"), (k = "scrollWidth")),
            (o === Nt || ((o === _t || o === Bt) && r === Ut)) &&
              ((w = Vt),
              (m -=
                (d && I === x && x.visualViewport
                  ? x.visualViewport.height
                  : I[O]) - i.height),
              (m *= c ? 1 : -1)),
            (o !== _t && ((o !== Nt && o !== Vt) || r !== Ut)) ||
              ((b = Bt),
              (f -=
                (d && I === x && x.visualViewport
                  ? x.visualViewport.width
                  : I[k]) - i.width),
              (f *= c ? 1 : -1));
        }
        var E,
          S = Object.assign({ position: s }, u && ue),
          C =
            !0 === l
              ? (function (t, e) {
                  var n = t.x,
                    i = t.y,
                    o = e.devicePixelRatio || 1;
                  return { x: It(n * o) / o || 0, y: It(i * o) / o || 0 };
                })({ x: f, y: m }, vt(n))
              : { x: f, y: m };
        return (
          (f = C.x),
          (m = C.y),
          c
            ? Object.assign(
                {},
                S,
                (((E = {})[w] = y ? "0" : ""),
                (E[b] = g ? "0" : ""),
                (E.transform =
                  (x.devicePixelRatio || 1) <= 1
                    ? "translate(" + f + "px, " + m + "px)"
                    : "translate3d(" + f + "px, " + m + "px, 0)"),
                E)
              )
            : Object.assign(
                {},
                S,
                (((e = {})[w] = y ? m + "px" : ""),
                (e[b] = g ? f + "px" : ""),
                (e.transform = ""),
                e)
              )
        );
      }
      const de = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (t) {
            var e = t.state,
              n = t.options,
              i = n.gpuAcceleration,
              o = void 0 === i || i,
              r = n.adaptive,
              a = void 0 === r || r,
              s = n.roundOffsets,
              c = void 0 === s || s,
              u = {
                placement: re(e.placement),
                variation: ae(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: o,
                isFixed: "fixed" === e.options.strategy,
              };
            null != e.modifiersData.popperOffsets &&
              (e.styles.popper = Object.assign(
                {},
                e.styles.popper,
                le(
                  Object.assign({}, u, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: a,
                    roundOffsets: c,
                  })
                )
              )),
              null != e.modifiersData.arrow &&
                (e.styles.arrow = Object.assign(
                  {},
                  e.styles.arrow,
                  le(
                    Object.assign({}, u, {
                      offsets: e.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: c,
                    })
                  )
                )),
              (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement,
              }));
          },
          data: {},
        },
        he = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
              var n = e.styles[t] || {},
                i = e.attributes[t] || {},
                o = e.elements[t];
              yt(o) &&
                Ct(o) &&
                (Object.assign(o.style, n),
                Object.keys(i).forEach(function (t) {
                  var e = i[t];
                  !1 === e
                    ? o.removeAttribute(t)
                    : o.setAttribute(t, !0 === e ? "" : e);
                }));
            });
          },
          effect: function (t) {
            var e = t.state,
              n = {
                popper: {
                  position: e.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            return (
              Object.assign(e.elements.popper.style, n.popper),
              (e.styles = n),
              e.elements.arrow &&
                Object.assign(e.elements.arrow.style, n.arrow),
              function () {
                Object.keys(e.elements).forEach(function (t) {
                  var i = e.elements[t],
                    o = e.attributes[t] || {},
                    r = Object.keys(
                      e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]
                    ).reduce(function (t, e) {
                      return (t[e] = ""), t;
                    }, {});
                  yt(i) &&
                    Ct(i) &&
                    (Object.assign(i.style, r),
                    Object.keys(o).forEach(function (t) {
                      i.removeAttribute(t);
                    }));
                });
              }
            );
          },
          requires: ["computeStyles"],
        },
        fe = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (t) {
            var e = t.state,
              n = t.options,
              i = t.name,
              o = n.offset,
              r = void 0 === o ? [0, 0] : o,
              a = $t.reduce(function (t, n) {
                return (
                  (t[n] = (function (t, e, n) {
                    var i = re(t),
                      o = [_t, Nt].indexOf(i) >= 0 ? -1 : 1,
                      r =
                        "function" == typeof n
                          ? n(Object.assign({}, e, { placement: t }))
                          : n,
                      a = r[0],
                      s = r[1];
                    return (
                      (a = a || 0),
                      (s = (s || 0) * o),
                      [_t, Bt].indexOf(i) >= 0 ? { x: s, y: a } : { x: a, y: s }
                    );
                  })(n, e.rects, r)),
                  t
                );
              }, {}),
              s = a[e.placement],
              c = s.x,
              u = s.y;
            null != e.modifiersData.popperOffsets &&
              ((e.modifiersData.popperOffsets.x += c),
              (e.modifiersData.popperOffsets.y += u)),
              (e.modifiersData[i] = a);
          },
        };
      var pe = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function me(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return pe[t];
        });
      }
      var ve = { start: "end", end: "start" };
      function ge(t) {
        return t.replace(/start|end/g, function (t) {
          return ve[t];
        });
      }
      function ye(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && bt(n)) {
          var i = e;
          do {
            if (i && t.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
          } while (i);
        }
        return !1;
      }
      function be(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        });
      }
      function we(t, e, n) {
        return e === Zt
          ? be(
              (function (t, e) {
                var n = vt(t),
                  i = jt(t),
                  o = n.visualViewport,
                  r = i.clientWidth,
                  a = i.clientHeight,
                  s = 0,
                  c = 0;
                if (o) {
                  (r = o.width), (a = o.height);
                  var u = kt();
                  (u || (!u && "fixed" === e)) &&
                    ((s = o.offsetLeft), (c = o.offsetTop));
                }
                return { width: r, height: a, x: s + Lt(t), y: c };
              })(t, n)
            )
          : gt(e)
          ? (function (t, e) {
              var n = Et(t, !1, "fixed" === e);
              return (
                (n.top = n.top + t.clientTop),
                (n.left = n.left + t.clientLeft),
                (n.bottom = n.top + t.clientHeight),
                (n.right = n.left + t.clientWidth),
                (n.width = t.clientWidth),
                (n.height = t.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(e, n)
          : be(
              (function (t) {
                var e,
                  n = jt(t),
                  i = St(t),
                  o = null == (e = t.ownerDocument) ? void 0 : e.body,
                  r = wt(
                    n.scrollWidth,
                    n.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  a = wt(
                    n.scrollHeight,
                    n.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  s = -i.scrollLeft + Lt(t),
                  c = -i.scrollTop;
                return (
                  "rtl" === At(o || n).direction &&
                    (s += wt(n.clientWidth, o ? o.clientWidth : 0) - r),
                  { width: r, height: a, x: s, y: c }
                );
              })(jt(t))
            );
      }
      function xe(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
      }
      function Ie(t, e) {
        return e.reduce(function (e, n) {
          return (e[n] = t), e;
        }, {});
      }
      function Oe(t, e) {
        void 0 === e && (e = {});
        var n = e,
          i = n.placement,
          o = void 0 === i ? t.placement : i,
          r = n.strategy,
          a = void 0 === r ? t.strategy : r,
          s = n.boundary,
          c = void 0 === s ? "clippingParents" : s,
          u = n.rootBoundary,
          l = void 0 === u ? Zt : u,
          d = n.elementContext,
          h = void 0 === d ? Gt : d,
          f = n.altBoundary,
          p = void 0 !== f && f,
          m = n.padding,
          v = void 0 === m ? 0 : m,
          g = xe("number" != typeof v ? v : Ie(v, Ht)),
          y = h === Gt ? "reference" : Gt,
          b = t.rects.popper,
          w = t.elements[p ? y : h],
          x = (function (t, e, n, i) {
            var o =
                "clippingParents" === e
                  ? (function (t) {
                      var e = Xt(Tt(t)),
                        n =
                          ["absolute", "fixed"].indexOf(At(t).position) >= 0 &&
                          yt(t)
                            ? zt(t)
                            : t;
                      return gt(n)
                        ? e.filter(function (t) {
                            return gt(t) && ye(t, n) && "body" !== Ct(t);
                          })
                        : [];
                    })(t)
                  : [].concat(e),
              r = [].concat(o, [n]),
              a = r[0],
              s = r.reduce(function (e, n) {
                var o = we(t, n, i);
                return (
                  (e.top = wt(o.top, e.top)),
                  (e.right = xt(o.right, e.right)),
                  (e.bottom = xt(o.bottom, e.bottom)),
                  (e.left = wt(o.left, e.left)),
                  e
                );
              }, we(t, a, i));
            return (
              (s.width = s.right - s.left),
              (s.height = s.bottom - s.top),
              (s.x = s.left),
              (s.y = s.top),
              s
            );
          })(gt(w) ? w : w.contextElement || jt(t.elements.popper), c, l, a),
          I = Et(t.elements.reference),
          O = ce({
            reference: I,
            element: b,
            strategy: "absolute",
            placement: o,
          }),
          k = be(Object.assign({}, b, O)),
          E = h === Gt ? k : I,
          S = {
            top: x.top - E.top + g.top,
            bottom: E.bottom - x.bottom + g.bottom,
            left: x.left - E.left + g.left,
            right: E.right - x.right + g.right,
          },
          C = t.modifiersData.offset;
        if (h === Gt && C) {
          var j = C[o];
          Object.keys(S).forEach(function (t) {
            var e = [Bt, Vt].indexOf(t) >= 0 ? 1 : -1,
              n = [Nt, Vt].indexOf(t) >= 0 ? "y" : "x";
            S[t] += j[n] * e;
          });
        }
        return S;
      }
      const ke = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            n = t.options,
            i = t.name;
          if (!e.modifiersData[i]._skip) {
            for (
              var o = n.mainAxis,
                r = void 0 === o || o,
                a = n.altAxis,
                s = void 0 === a || a,
                c = n.fallbackPlacements,
                u = n.padding,
                l = n.boundary,
                d = n.rootBoundary,
                h = n.altBoundary,
                f = n.flipVariations,
                p = void 0 === f || f,
                m = n.allowedAutoPlacements,
                v = e.options.placement,
                g = re(v),
                y =
                  c ||
                  (g !== v && p
                    ? (function (t) {
                        if (re(t) === Wt) return [];
                        var e = me(t);
                        return [ge(t), e, ge(e)];
                      })(v)
                    : [me(v)]),
                b = [v].concat(y).reduce(function (t, n) {
                  return t.concat(
                    re(n) === Wt
                      ? (function (t, e) {
                          void 0 === e && (e = {});
                          var n = e,
                            i = n.placement,
                            o = n.boundary,
                            r = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            c = n.allowedAutoPlacements,
                            u = void 0 === c ? $t : c,
                            l = ae(i),
                            d = l
                              ? s
                                ? Jt
                                : Jt.filter(function (t) {
                                    return ae(t) === l;
                                  })
                              : Ht,
                            h = d.filter(function (t) {
                              return u.indexOf(t) >= 0;
                            });
                          0 === h.length && (h = d);
                          var f = h.reduce(function (e, n) {
                            return (
                              (e[n] = Oe(t, {
                                placement: n,
                                boundary: o,
                                rootBoundary: r,
                                padding: a,
                              })[re(n)]),
                              e
                            );
                          }, {});
                          return Object.keys(f).sort(function (t, e) {
                            return f[t] - f[e];
                          });
                        })(e, {
                          placement: n,
                          boundary: l,
                          rootBoundary: d,
                          padding: u,
                          flipVariations: p,
                          allowedAutoPlacements: m,
                        })
                      : n
                  );
                }, []),
                w = e.rects.reference,
                x = e.rects.popper,
                I = new Map(),
                O = !0,
                k = b[0],
                E = 0;
              E < b.length;
              E++
            ) {
              var S = b[E],
                C = re(S),
                j = ae(S) === qt,
                L = [Nt, Vt].indexOf(C) >= 0,
                A = L ? "width" : "height",
                P = Oe(e, {
                  placement: S,
                  boundary: l,
                  rootBoundary: d,
                  altBoundary: h,
                  padding: u,
                }),
                D = L ? (j ? Bt : _t) : j ? Vt : Nt;
              w[A] > x[A] && (D = me(D));
              var Y = me(D),
                T = [];
              if (
                (r && T.push(P[C] <= 0),
                s && T.push(P[D] <= 0, P[Y] <= 0),
                T.every(function (t) {
                  return t;
                }))
              ) {
                (k = S), (O = !1);
                break;
              }
              I.set(S, T);
            }
            if (O)
              for (
                var R = function (t) {
                    var e = b.find(function (e) {
                      var n = I.get(e);
                      if (n)
                        return n.slice(0, t).every(function (t) {
                          return t;
                        });
                    });
                    if (e) return (k = e), "break";
                  },
                  X = p ? 3 : 1;
                X > 0 && "break" !== R(X);
                X--
              );
            e.placement !== k &&
              ((e.modifiersData[i]._skip = !0),
              (e.placement = k),
              (e.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Ee(t, e, n) {
        return wt(t, xt(e, n));
      }
      const Se = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function (t) {
            var e = t.state,
              n = t.options,
              i = t.name,
              o = n.mainAxis,
              r = void 0 === o || o,
              a = n.altAxis,
              s = void 0 !== a && a,
              c = n.boundary,
              u = n.rootBoundary,
              l = n.altBoundary,
              d = n.padding,
              h = n.tether,
              f = void 0 === h || h,
              p = n.tetherOffset,
              m = void 0 === p ? 0 : p,
              v = Oe(e, {
                boundary: c,
                rootBoundary: u,
                padding: d,
                altBoundary: l,
              }),
              g = re(e.placement),
              y = ae(e.placement),
              b = !y,
              w = se(g),
              x = "x" === w ? "y" : "x",
              I = e.modifiersData.popperOffsets,
              O = e.rects.reference,
              k = e.rects.popper,
              E =
                "function" == typeof m
                  ? m(Object.assign({}, e.rects, { placement: e.placement }))
                  : m,
              S =
                "number" == typeof E
                  ? { mainAxis: E, altAxis: E }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
              C = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement]
                : null,
              j = { x: 0, y: 0 };
            if (I) {
              if (r) {
                var L,
                  A = "y" === w ? Nt : _t,
                  P = "y" === w ? Vt : Bt,
                  D = "y" === w ? "height" : "width",
                  Y = I[w],
                  T = Y + v[A],
                  R = Y - v[P],
                  X = f ? -k[D] / 2 : 0,
                  M = y === qt ? O[D] : k[D],
                  F = y === qt ? -k[D] : -O[D],
                  z = e.elements.arrow,
                  N = f && z ? Yt(z) : { width: 0, height: 0 },
                  V = e.modifiersData["arrow#persistent"]
                    ? e.modifiersData["arrow#persistent"].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  B = V[A],
                  _ = V[P],
                  W = Ee(0, O[D], N[D]),
                  H = b
                    ? O[D] / 2 - X - W - B - S.mainAxis
                    : M - W - B - S.mainAxis,
                  q = b
                    ? -O[D] / 2 + X + W + _ + S.mainAxis
                    : F + W + _ + S.mainAxis,
                  U = e.elements.arrow && zt(e.elements.arrow),
                  Z = U
                    ? "y" === w
                      ? U.clientTop || 0
                      : U.clientLeft || 0
                    : 0,
                  G = null != (L = null == C ? void 0 : C[w]) ? L : 0,
                  J = Y + q - G,
                  $ = Ee(f ? xt(T, Y + H - G - Z) : T, Y, f ? wt(R, J) : R);
                (I[w] = $), (j[w] = $ - Y);
              }
              if (s) {
                var K,
                  Q = "x" === w ? Nt : _t,
                  tt = "x" === w ? Vt : Bt,
                  et = I[x],
                  nt = "y" === x ? "height" : "width",
                  it = et + v[Q],
                  ot = et - v[tt],
                  rt = -1 !== [Nt, _t].indexOf(g),
                  at = null != (K = null == C ? void 0 : C[x]) ? K : 0,
                  st = rt ? it : et - O[nt] - k[nt] - at + S.altAxis,
                  ct = rt ? et + O[nt] + k[nt] - at - S.altAxis : ot,
                  ut =
                    f && rt
                      ? (function (t, e, n) {
                          var i = Ee(t, e, n);
                          return i > n ? n : i;
                        })(st, et, ct)
                      : Ee(f ? st : it, et, f ? ct : ot);
                (I[x] = ut), (j[x] = ut - et);
              }
              e.modifiersData[i] = j;
            }
          },
          requiresIfExists: ["offset"],
        },
        Ce = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (t) {
            var e,
              n = t.state,
              i = t.name,
              o = t.options,
              r = n.elements.arrow,
              a = n.modifiersData.popperOffsets,
              s = re(n.placement),
              c = se(s),
              u = [_t, Bt].indexOf(s) >= 0 ? "height" : "width";
            if (r && a) {
              var l = (function (t, e) {
                  return xe(
                    "number" !=
                      typeof (t =
                        "function" == typeof t
                          ? t(
                              Object.assign({}, e.rects, {
                                placement: e.placement,
                              })
                            )
                          : t)
                      ? t
                      : Ie(t, Ht)
                  );
                })(o.padding, n),
                d = Yt(r),
                h = "y" === c ? Nt : _t,
                f = "y" === c ? Vt : Bt,
                p =
                  n.rects.reference[u] +
                  n.rects.reference[c] -
                  a[c] -
                  n.rects.popper[u],
                m = a[c] - n.rects.reference[c],
                v = zt(r),
                g = v
                  ? "y" === c
                    ? v.clientHeight || 0
                    : v.clientWidth || 0
                  : 0,
                y = p / 2 - m / 2,
                b = l[h],
                w = g - d[u] - l[f],
                x = g / 2 - d[u] / 2 + y,
                I = Ee(b, x, w),
                O = c;
              n.modifiersData[i] =
                (((e = {})[O] = I), (e.centerOffset = I - x), e);
            }
          },
          effect: function (t) {
            var e = t.state,
              n = t.options.element,
              i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i &&
              ("string" != typeof i ||
                (i = e.elements.popper.querySelector(i))) &&
              ye(e.elements.popper, i) &&
              (e.elements.arrow = i);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        };
      function je(t, e, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x,
          }
        );
      }
      function Le(t) {
        return [Nt, Bt, Vt, _t].some(function (e) {
          return t[e] >= 0;
        });
      }
      var Ae = ne({
          defaultModifiers: [
            oe,
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (t) {
                var e = t.state,
                  n = t.name;
                e.modifiersData[n] = ce({
                  reference: e.rects.reference,
                  element: e.rects.popper,
                  strategy: "absolute",
                  placement: e.placement,
                });
              },
              data: {},
            },
            de,
            he,
            fe,
            ke,
            Se,
            Ce,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (t) {
                var e = t.state,
                  n = t.name,
                  i = e.rects.reference,
                  o = e.rects.popper,
                  r = e.modifiersData.preventOverflow,
                  a = Oe(e, { elementContext: "reference" }),
                  s = Oe(e, { altBoundary: !0 }),
                  c = je(a, i),
                  u = je(s, o, r),
                  l = Le(c),
                  d = Le(u);
                (e.modifiersData[n] = {
                  referenceClippingOffsets: c,
                  popperEscapeOffsets: u,
                  isReferenceHidden: l,
                  hasPopperEscaped: d,
                }),
                  (e.attributes.popper = Object.assign(
                    {},
                    e.attributes.popper,
                    {
                      "data-popper-reference-hidden": l,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
          ],
        }),
        Pe = function (t, e) {
          e ||
            (t.removeAttribute("data-show"),
            t.removeAttribute("data-cloudimage-360-show"));
        };
      var De = function (t, e, n) {
          var i,
            o,
            r = t.images,
            a = t.title,
            s = t.description,
            c = t.moreDetailsUrl,
            u = t.moreDetailsTitle,
            l = void 0 === u ? "Read more" : u,
            d = document.createElement("div");
          if (((d.className = "cloudimage-360-modal-wrapper"), r)) {
            var h = document.createElement("div"),
              f =
                ((i = (function (t, e, n) {
                  var i = document.createElement("div"),
                    o = document.createElement("div");
                  return (
                    (i.className = "cloudimage-360-images-carousel"),
                    (i.style.maxWidth = "".concat(n.offsetWidth, "px")),
                    (o.className = "cloudimage-360-carousel-dots"),
                    t.forEach(function (t, n) {
                      var r = (function (t, e) {
                          var n = document.createElement("img");
                          return (
                            (n.className = "cloudimage-360-carousel-image"),
                            n.setAttribute("src", t.src || ""),
                            n.setAttribute("alt", t.alt || "more-info"),
                            e ||
                              (n.setAttribute("data-active-image", ""),
                              (n.className += " active-image")),
                            n
                          );
                        })(t, n),
                        a = (function (t, e, n) {
                          var i = document.createElement("button");
                          return (
                            (i.className = "cloudimage-360-carousel-dot"),
                            (i.onclick = function () {
                              return (function (t, e, n) {
                                var i = n.querySelector("[data-active-dot]"),
                                  o = n.querySelector("[data-active-image]");
                                i.classList.remove("active-dot"),
                                  i.removeAttribute("data-active-dot"),
                                  o.classList.remove("active-image"),
                                  o.removeAttribute("data-active-image"),
                                  (t.className += " active-image"),
                                  t.setAttribute("data-active-image", ""),
                                  (e.className += " active-dot"),
                                  e.setAttribute("data-active-dot", "");
                              })(t, i, n);
                            }),
                            e ||
                              ((i.className += " active-dot"),
                              i.setAttribute("data-active-dot", "")),
                            i
                          );
                        })(r, n, e);
                      o.appendChild(a), i.appendChild(r);
                    }),
                    [i, o]
                  );
                })(r, n, e)),
                (o = 2),
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(i) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != n) {
                      var i,
                        o,
                        r,
                        a,
                        s = [],
                        c = !0,
                        u = !1;
                      try {
                        if (((r = (n = n.call(t)).next), 0 === e)) {
                          if (Object(n) !== n) return;
                          c = !1;
                        } else
                          for (
                            ;
                            !(c = (i = r.call(n)).done) &&
                            (s.push(i.value), s.length !== e);
                            c = !0
                          );
                      } catch (t) {
                        (u = !0), (o = t);
                      } finally {
                        try {
                          if (
                            !c &&
                            null != n.return &&
                            ((a = n.return()), Object(a) !== a)
                          )
                            return;
                        } finally {
                          if (u) throw o;
                        }
                      }
                      return s;
                    }
                  })(i, o) ||
                  z(i, o) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              p = f[0],
              m = f[1];
            h.appendChild(p),
              r.length > 1 && h.appendChild(m),
              d.appendChild(h),
              (h.className = "cloudimage-360-images-carousel-wrapper");
          }
          if (a) {
            var v = (function (t) {
              var e = document.createElement("h4");
              return (
                (e.innerText = t),
                (e.className = "cloudimage-360-modal-title"),
                e
              );
            })(a);
            d.appendChild(v);
          }
          if (s) {
            var g = (function (t) {
              var e = document.createElement("p");
              return (
                (e.innerText = t),
                (e.className = "cloudimage-360-modal-description"),
                e
              );
            })(s);
            d.appendChild(g);
          }
          if (c) {
            var y = (function (t, e) {
              var n = document.createElement("a");
              return (
                (n.href = t),
                (n.innerText = e),
                (n.className = "cloudimage-360-modal-more-details"),
                (n.target = "_blank"),
                n
              );
            })(c, l);
            d.appendChild(y);
          }
          n.appendChild(d);
        },
        Ye = function (e, n) {
          n.forEach(function (n) {
            var i = n.popupProps,
              o = (function (e, n, i) {
                var o,
                  r = n.variant,
                  a = i.popupSelector,
                  s = i.arrow,
                  c = r.url,
                  u = r.images,
                  l = r.title,
                  d = r.anchorId,
                  h = r.description,
                  f = r.moreDetailsUrl,
                  p = document.createElement("div");
                if (
                  ((p.className = "cloudimage-360-hotspot-popup ".concat(a)),
                  p.setAttribute("data-hotspot-popup-id", d),
                  p.setAttribute("data-cloudimage-360-hotspot", ""),
                  (p.style.minHeight = 16),
                  (p.style.minWidth = 16),
                  (p.style.cursor = "default"),
                  (p.onclick = function (t) {
                    return t.stopPropagation();
                  }),
                  ("object" === t(r) && u) || h || f || (l && !c))
                )
                  De(r, e, p);
                else if (c) {
                  var m = (function (t) {
                    var e = t.url,
                      n = t.title,
                      i = t.newTab,
                      o = document.createElement("a");
                    return (
                      (o.href = e),
                      (o.innerText = n),
                      i && (o.target = "_blank"),
                      o
                    );
                  })(r);
                  p.appendChild(m);
                } else if ("string" == typeof r)
                  try {
                    var v =
                        ((o = r),
                        document.querySelector(
                          "["
                            .concat("data-cloudimage-360-hotspots", "=")
                            .concat(o, "]")
                        )),
                      g = v.cloneNode(!0);
                    p.appendChild(g), v.parentNode.removeChild(v);
                  } catch (t) {
                    console.error(
                      "Cloudimage-360: Element with anchorId '".concat(
                        d,
                        "' not exist in the DOM"
                      )
                    );
                  }
                if (s) {
                  var y = (function () {
                    var t = document.createElement("div");
                    return (
                      t.setAttribute("data-popper-arrow", ""),
                      t.setAttribute("data-cloudimage-360-hotspot", ""),
                      (t.className = "cloudimage-360-popup-arrow"),
                      t
                    );
                  })();
                  p.appendChild(y);
                }
                return e.appendChild(p), p;
              })(e, n, i),
              r = (function (t, e, n) {
                var i = e.placement,
                  o = e.offset,
                  r = document.createElement("div"),
                  a = Ae(r, t);
                return (
                  a.setOptions({
                    placement: i,
                    modifiers: [
                      { name: "offset", options: { offset: o } },
                      { name: "preventOverflow", options: { boundary: n } },
                    ],
                  }),
                  a
                );
              })(o, i, e),
              a = (function (t, e, n, i) {
                var o,
                  r = e.indicatorSelector,
                  a = e.variant,
                  s = a.url,
                  c = a.anchorId,
                  u = e.popupProps.open,
                  l = void 0 !== u && u,
                  d = document.createElement("div");
                return (
                  (d.style.position = "absolute"),
                  (d.className = "cloudimage-360-hotspot-"
                    .concat(s ? "link" : "custom", "-icon ")
                    .concat(r)),
                  d.setAttribute("data-hotspot-icon-id", c),
                  d.setAttribute("data-cloudimage-360-hotspot", ""),
                  (d.onclick = function (t) {
                    return t.stopPropagation();
                  }),
                  ["mouseenter", "touchstart", "focus"].forEach(function (t) {
                    d.addEventListener(t, function () {
                      return (function (t, e) {
                        t.setAttribute("data-show", ""),
                          t.setAttribute("data-cloudimage-360-show", ""),
                          e.update();
                      })(n, i);
                    });
                  }),
                  l ||
                    ["mouseleave", "blur"].forEach(function (t) {
                      d.addEventListener(t, function () {
                        return setTimeout(function () {
                          return Pe(n, o);
                        }, 160);
                      });
                    }),
                  n.addEventListener("mouseenter", function () {
                    o = !0;
                  }),
                  n.addEventListener("mouseleave", function () {
                    (o = !1), !l && Pe(n, o);
                  }),
                  pt(d),
                  t.appendChild(d),
                  d
                );
              })(e, n, o, r);
            (r.state.elements.reference = a), r.update();
          });
        };
      function Te(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function Re(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Te(Object(n), !0).forEach(function (e) {
                i(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Te(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Xe = function (t) {
          return t.map(function (t) {
            var e = t.variant,
              n = void 0 === e ? {} : e,
              i = t.positions,
              o = void 0 === i ? [] : i,
              r = t.indicatorSelector,
              a = void 0 === r ? "" : r,
              s = t.popupProps,
              c = void 0 === s ? {} : s,
              u = t.orientation,
              l = void 0 === u ? "x" : u,
              d = t.initialDimensions,
              h = void 0 === d ? [500, 500] : d;
            !(function (t) {
              var e = t.variant,
                n = void 0 === e ? {} : e,
                i = n.url,
                o = n.title,
                r = n.anchorId,
                a = n.images,
                s = n.description,
                c = n.moreDetailsUrl;
              i &&
                !o &&
                console.error(
                  "Cloudimage-360: Hotspot config with variant link must have title for the link"
                ),
                o ||
                  i ||
                  r ||
                  a ||
                  s ||
                  c ||
                  console.error(
                    "Cloudimage-360: Hotspot config with custom variant must provide anchorId"
                  );
            })(t);
            var f = (function (t) {
                var e = t.popupSelector,
                  n = void 0 === e ? "" : e,
                  i = t.arrow,
                  o = void 0 === i || i,
                  r = t.offset,
                  a = void 0 === r ? [0, 10] : r,
                  s = t.placement,
                  c = void 0 === s ? "auto" : s,
                  u = t.open;
                return {
                  popupSelector: n,
                  arrow: o,
                  offset: a,
                  placement: c,
                  open: void 0 !== u && u,
                };
              })(c),
              p = null == n ? void 0 : n.anchorId;
            if (!p) {
              var m = Math.floor(1e4 * Math.random());
              p = "cloudimage-360-".concat(m);
            }
            return {
              variant: Re(Re({}, n), {}, { anchorId: p }),
              popupProps: f,
              positions: o,
              indicatorSelector: a,
              initialDimensions: h,
              orientation: l.toLowerCase(),
            };
          });
        },
        Me = function () {
          return !!document.querySelectorAll("[data-cloudimage-360-show]")
            .length;
        },
        Fe = function (t, e, n) {
          (e && h(e.target, "data-cloudimage-360-hotspot")) ||
            t.forEach(function (t) {
              var e = t.variant.anchorId;
              ft(e).style.pointerEvents = n ? "none" : "all";
            });
        };
      function ze(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function Ne(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ze(Object(n), !0).forEach(function (e) {
                i(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ze(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Ve = (function () {
        function e(t, n, i) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.container = t),
            (this.movementStart = { x: 0, y: 0 }),
            (this.isStartSpin = !1),
            (this.movingDirection = l),
            (this.isClicked = !1),
            (this.loadedImagesX = 0),
            (this.loadedImagesY = 0),
            (this.imagesLoaded = !1),
            (this.reversed = !1),
            (this.fullscreenView = !!n),
            (this.imagesX = []),
            (this.imagesY = []),
            (this.originalImagesX = []),
            (this.originalImagesY = []),
            (this.resizedImagesX = []),
            (this.resizedImagesY = []),
            (this.devicePixelRatio = Math.round(window.devicePixelRatio || 1)),
            (this.isMobile = !(
              !("ontouchstart" in window) && !navigator.msMaxTouchPoints
            )),
            (this.id = t.id),
            (this.hotspotsConfigs = i && Xe(i)),
            (this.isMagnifyOpen = !1),
            (this.isDragged = !1),
            (this.startPointerZoom = !1),
            (this.zoomIntensity = 0),
            (this.mouseTracked = !1),
            (this.intialPositions = { x: 0, y: 0 }),
            (this.pointerCurrentPosition = { x: 0, y: 0 }),
            (this.isStartedLoadOriginalImages = !1),
            this.init(t);
        }
        var n, i;
        return (
          (n = e),
          (i = [
            {
              key: "isReady",
              value: function () {
                var t = this.amountX + this.amountY;
                return this.imagesX.length + this.imagesY.length === t;
              },
            },
            {
              key: "mouseDown",
              value: function (t) {
                if (this.imagesLoaded) {
                  var e = Me(),
                    n = t.pageX,
                    i = t.pageY;
                  this.hideInitialIcons(),
                    (this.autoplay || this.loopTimeoutId) &&
                      (this.stop(),
                      (this.autoplay = !1),
                      (this.isZoomReady = !0)),
                    (this.intialPositions = { x: n, y: i }),
                    (this.movementStart = { x: n, y: i }),
                    (this.isClicked = !0),
                    (this.isDragged = !1),
                    this.hotspotsConfigs && Fe(this.hotspotsConfigs, t, !0),
                    e && (this.isClicked = !1),
                    this.hotspotsConfigs &&
                      mt(
                        this.container,
                        this.hotspotsConfigs,
                        this.activeImageX,
                        this.activeImageY,
                        this.movingDirection
                      );
                }
              },
            },
            {
              key: "mouseUp",
              value: function () {
                var t = this;
                this.imagesLoaded &&
                  this.isClicked &&
                  ((this.movementStart = { x: 0, y: 0 }),
                  (this.isStartSpin = !1),
                  (this.isClicked = !1),
                  this.bottomCircle &&
                    !this.mouseTracked &&
                    this.show360ViewCircleIcon(),
                  this.hotspotsConfigs && Fe(this.hotspotsConfigs),
                  this.pointerZoom && !this.fullscreenView
                    ? (setTimeout(function () {
                        t.isZoomReady = !0;
                      }, 50),
                      this.mouseTracked
                        ? (this.container.style.cursor = "zoom-out")
                        : (this.container.style.cursor = "zoom-in"))
                    : (this.container.style.cursor = "grab"));
              },
            },
            {
              key: "mouseClick",
              value: function (t) {
                this.pointerZoom &&
                  !this.fullscreenView &&
                  (this.setCursorPosition(t),
                  this.hideInitialIcons(),
                  this.isStartedLoadOriginalImages ||
                    this.isDragged ||
                    !this.isZoomReady ||
                    this.prepareOriginalImages(t),
                  this.isAllOriginalImagesLoaded &&
                    !this.isDragged &&
                    this.isZoomReady &&
                    this.togglePointerZoom(t));
              },
            },
            {
              key: "mouseMove",
              value: function (t) {
                if (this.imagesLoaded) {
                  var e = t.pageX,
                    n = t.pageY;
                  if (
                    (this.mouseTracked &&
                      (this.setCursorPosition(t),
                      this.isClicked || this.update()),
                    this.isClicked)
                  ) {
                    var i = { x: e, y: n };
                    (this.container.style.cursor = "grabbing"),
                      (this.isDragged = !0),
                      (this.movingDirection = at(
                        this.isStartSpin,
                        this.allowSpinY,
                        this.intialPositions,
                        i,
                        this.movingDirection
                      )),
                      this.onMoveHandler(t);
                  }
                }
              },
            },
            {
              key: "mouseLeave",
              value: function () {
                this.imagesLoaded &&
                  (this.pointerZoom &&
                    this.mouseTracked &&
                    this.togglePointerZoom(),
                  this.isMagnifyOpen && this.closeMagnifier());
              },
            },
            {
              key: "togglePointerZoom",
              value: function () {
                var t,
                  e = this;
                if (
                  ((this.autoplay || this.loopTimeoutId) &&
                    (this.stop(), (this.autoplay = !1)),
                  this.mouseTracked)
                ) {
                  var n =
                    ((t = this.pointerZoom),
                    Array.from(Array(20)).reduce(function (e, n, i) {
                      var o = +(
                        (i - 1 < 0 ? t : e[i - 1]) -
                        (t - 1) / 20
                      ).toFixed(2);
                      return (e || []).push(o), e;
                    }, []));
                  (this.container.style.cursor = "zoom-in"),
                    n.forEach(function (t, i) {
                      setTimeout(function () {
                        (e.zoomIntensity = t),
                          e.update(),
                          i === n.length - 1 &&
                            ((e.mouseTracked = !1), e.update());
                      }, 200 * (e.pointerZoom - t));
                    });
                } else {
                  this.bottomCircle && this.hide360ViewCircleIcon();
                  var i = (function (t) {
                    return Array.from(Array(20)).reduce(function (e, n, i) {
                      var o = +(
                        (i - 1 < 0 ? 1 : e[i - 1]) +
                        (t - 1) / 20
                      ).toFixed(2);
                      return (e || []).push(o), e;
                    }, []);
                  })(this.pointerZoom);
                  this.hotspotsConfigs &&
                    (
                      document.querySelectorAll("[data-hotspot-icon-id]") || []
                    ).forEach(function (t) {
                      pt(t);
                    }),
                    i.forEach(function (t) {
                      setTimeout(function () {
                        (e.zoomIntensity = t), e.update();
                      }, 200 * t);
                    }),
                    (this.mouseTracked = !0),
                    (this.container.style.cursor = "zoom-out");
                }
              },
            },
            {
              key: "onOriginalImageLoad",
              value: function (t, e, n, i) {
                t === u
                  ? (this.originalImagesY[i] = n)
                  : (this.originalImagesX[i] = n);
                var o = this.originalImagesX.filter(function (t) {
                    return t;
                  }),
                  r = this.originalImagesY.filter(function (t) {
                    return t;
                  }),
                  a = this.amountX + this.amountY,
                  s = o.length + r.length,
                  c = o.length + r.length === this.amountX + this.amountY,
                  l = Math.round((s / a) * 100);
                this.updatePercentageInLoader(l),
                  c &&
                    (this.removeLoader(),
                    this.togglePointerZoom(e),
                    (this.mouseTracked = !0),
                    (this.isAllOriginalImagesLoaded = !0));
              },
            },
            {
              key: "prepareOriginalImages",
              value: function (t) {
                var e = R(this.srcXConfig);
                if (
                  ((this.isStartedLoadOriginalImages = !0),
                  (this.loader = lt(this.innerBox)),
                  (this.container.style.cursor = "wait"),
                  K(
                    this.srcXConfig,
                    e,
                    this.onOriginalImageLoad.bind(this, c, t)
                  ),
                  this.allowSpinY)
                ) {
                  var n = R(this.srcYConfig);
                  K(
                    this.srcYConfig,
                    n,
                    this.onOriginalImageLoad.bind(this, u, t)
                  );
                }
              },
            },
            {
              key: "touchStart",
              value: function (t) {
                if (this.imagesLoaded) {
                  var e = Me();
                  this.hideInitialIcons(),
                    (this.autoplay || this.loopTimeoutId) &&
                      (this.stop(), (this.autoplay = !1)),
                    (this.intialPositions = {
                      x: t.touches[0].clientX,
                      y: t.touches[0].clientY,
                    }),
                    (this.movementStart = {
                      x: t.touches[0].clientX,
                      y: t.touches[0].clientY,
                    }),
                    (this.isClicked = !0),
                    e && (this.isClicked = !1);
                }
              },
            },
            {
              key: "touchEnd",
              value: function () {
                this.imagesLoaded &&
                  (this.bottomCircle && this.show360ViewCircleIcon(),
                  (this.movementStart = { x: 0, y: 0 }),
                  (this.isStartSpin = !1),
                  (this.isClicked = !1));
              },
            },
            {
              key: "touchMove",
              value: function (t) {
                if (this.isClicked && this.imagesLoaded) {
                  t.cancelable && this.allowSpinY && t.preventDefault();
                  var e = { x: t.touches[0].clientX, y: t.touches[0].clientY };
                  (this.movingDirection = at(
                    this.isStartSpin,
                    this.allowSpinY,
                    this.intialPositions,
                    e,
                    this.movingDirection
                  )),
                    this.onMoveHandler(t);
                }
              },
            },
            {
              key: "keyDownGeneral",
              value: function (t) {
                this.imagesLoaded &&
                  (this.glass && this.closeMagnifier(),
                  27 === t.keyCode &&
                    this.mouseTracked &&
                    this.togglePointerZoom());
              },
            },
            {
              key: "hideInitialIcons",
              value: function () {
                this.glass && this.closeMagnifier(),
                  this.view360Icon && this.remove360ViewIcon();
              },
            },
            {
              key: "setCursorPosition",
              value: function (t) {
                this.mousePositions = { x: t.clientX, y: t.clientY };
              },
            },
            {
              key: "getCursorPositionInCanvas",
              value: function () {
                var t = this.canvas.getBoundingClientRect();
                return (
                  (this.pointerCurrentPosition = {
                    x: this.mousePositions.x - t.left,
                    y: this.mousePositions.y - t.top,
                  }),
                  this.pointerCurrentPosition
                );
              },
            },
            {
              key: "keyDown",
              value: function (t) {
                this.imagesLoaded &&
                  (this.glass && this.closeMagnifier(),
                  37 === t.keyCode &&
                    (this.keysReverse ? this.left() : this.right(),
                    this.onSpin()),
                  39 === t.keyCode &&
                    (this.keysReverse ? this.right() : this.left(),
                    this.onSpin()),
                  this.allowSpinY &&
                    (t.preventDefault(),
                    38 === t.keyCode &&
                      (this.keysReverse ? this.top() : this.bottom(),
                      this.onSpin()),
                    40 === t.keyCode &&
                      (this.keysReverse ? this.bottom() : this.top(),
                      this.onSpin())));
              },
            },
            {
              key: "onSpin",
              value: function () {
                this.bottomCircle && this.hide360ViewCircleIcon(),
                  this.view360Icon && this.remove360ViewIcon(),
                  (this.autoplay || this.loopTimeoutId) &&
                    (this.stop(), (this.autoplay = !1));
              },
            },
            {
              key: "keyUp",
              value: function (t) {
                this.imagesLoaded &&
                  -1 !== [37, 39].indexOf(t.keyCode) &&
                  this.onFinishSpin();
              },
            },
            {
              key: "onFinishSpin",
              value: function () {
                this.bottomCircle && this.show360ViewCircleIcon();
              },
            },
            {
              key: "moveActiveIndexUp",
              value: function (t) {
                var e = this.controlReverse
                  ? !this.spinReverse
                  : this.spinReverse;
                this.stopAtEdges
                  ? this.activeImageX + t >= this.amountX
                    ? ((this.activeImageX = this.amountX),
                      (e ? this.leftElem : this.rightElem) &&
                        ot(e ? this.leftElem : this.rightElem, "not-active"))
                    : ((this.activeImageX += t),
                      this.rightElem && rt(this.rightElem, "not-active"),
                      this.leftElem && rt(this.leftElem, "not-active"))
                  : ((this.activeImageX =
                      (this.activeImageX + t) % this.amountX || this.amountX),
                    this.activeImageX === this.amountX &&
                      this.allowSpinY &&
                      (this.spinY = !0));
              },
            },
            {
              key: "moveActiveIndexDown",
              value: function (t) {
                var e = this.controlReverse
                  ? !this.spinReverse
                  : this.spinReverse;
                this.stopAtEdges
                  ? this.activeImageX - t <= 1
                    ? ((this.activeImageX = 1),
                      (e ? this.rightElem : this.leftElem) &&
                        ot(e ? this.rightElem : this.leftElem, "not-active"))
                    : ((this.activeImageX -= t),
                      this.leftElem && rt(this.leftElem, "not-active"),
                      this.rightElem && rt(this.rightElem, "not-active"))
                  : this.activeImageX - t < 1
                  ? ((this.activeImageX =
                      this.amountX + (this.activeImageX - t)),
                    (this.spinY = !0))
                  : (this.activeImageX -= t);
              },
            },
            {
              key: "moveActiveYIndexUp",
              value: function (t) {
                var e = this.controlReverse
                  ? !this.spinReverse
                  : this.spinReverse;
                this.stopAtEdges
                  ? this.activeImageY + t >= this.amountY
                    ? ((this.activeImageY = this.amountY),
                      (e ? this.bottomElem : this.topElem) &&
                        ot(e ? this.bottomElem : this.topElem, "not-active"))
                    : ((this.activeImageY += t),
                      this.topElem && rt(this.topElem, "not-active"),
                      this.bottomElem && rt(this.bottomElem, "not-active"))
                  : ((this.activeImageY =
                      (this.activeImageY + t) % this.amountY || this.amountY),
                    this.activeImageY === this.amountY && (this.spinY = !1));
              },
            },
            {
              key: "moveActiveYIndexDown",
              value: function (t) {
                var e = this.controlReverse
                  ? !this.spinReverse
                  : this.spinReverse;
                this.stopAtEdges
                  ? this.activeImageY - t <= 1
                    ? ((this.activeImageY = 1),
                      (e ? this.topElem : this.bottomElem) &&
                        ot(e ? this.topElem : this.bottomElem, "not-active"))
                    : ((this.activeImageY -= t),
                      this.bottomElem && rt(this.bottomElem, "not-active"),
                      this.topElem && rt(this.topElem, "not-active"))
                  : this.activeImageY - t < 1
                  ? ((this.activeImageY =
                      this.amountY + (this.activeImageY - t)),
                    (this.spinY = !1))
                  : (this.activeImageY -= t);
              },
            },
            {
              key: "moveRight",
              value: function (t) {
                var e = st(t, this.movementStart.x, this.speedFactor);
                this.spinReverse
                  ? this.moveActiveIndexDown(e)
                  : this.moveActiveIndexUp(e),
                  (this.movementStart.x = t),
                  (this.activeImageY = 1),
                  this.update();
              },
            },
            {
              key: "moveLeft",
              value: function (t) {
                var e = st(this.movementStart.x, t, this.speedFactor);
                this.spinReverse
                  ? this.moveActiveIndexUp(e)
                  : this.moveActiveIndexDown(e),
                  (this.activeImageY = 1),
                  (this.movementStart.x = t),
                  this.update();
              },
            },
            {
              key: "moveTop",
              value: function (t) {
                var e = st(this.movementStart.y, t, this.speedFactor);
                this.spinReverse
                  ? this.moveActiveYIndexUp(e)
                  : this.moveActiveYIndexDown(e),
                  (this.activeImageX = 1),
                  (this.movementStart.y = t),
                  this.update();
              },
            },
            {
              key: "moveBottom",
              value: function (t) {
                var e = st(t, this.movementStart.y, this.speedFactor);
                this.spinReverse
                  ? this.moveActiveYIndexDown(e)
                  : this.moveActiveYIndexUp(e),
                  (this.activeImageX = 1),
                  (this.movementStart.y = t),
                  this.update();
              },
            },
            {
              key: "onMoveHandler",
              value: function (t) {
                var e = this.isMobile ? t.touches[0].clientX : t.pageX,
                  n = this.isMobile ? t.touches[0].clientY : t.pageY,
                  i = e - this.movementStart.x >= this.speedFactor,
                  o = this.movementStart.x - e >= this.speedFactor,
                  r = this.movementStart.y - n >= this.speedFactor,
                  a = n - this.movementStart.y >= this.speedFactor;
                this.bottomCircle && this.hide360ViewCircleIcon(),
                  i && this.movingDirection === c
                    ? (this.moveRight(e), (this.isStartSpin = !0))
                    : o && this.movingDirection === c
                    ? (this.moveLeft(e), (this.isStartSpin = !0))
                    : r && this.movingDirection === u
                    ? (this.moveTop(n), (this.isStartSpin = !0))
                    : a &&
                      this.movingDirection === u &&
                      (this.moveBottom(n), (this.isStartSpin = !0));
              },
            },
            {
              key: "left",
              value: function () {
                (this.movingDirection = c),
                  (this.activeImageY = this.reversed ? this.amountY : 1),
                  this.moveActiveIndexDown(1),
                  this.update();
              },
            },
            {
              key: "right",
              value: function () {
                (this.movingDirection = c),
                  (this.activeImageY = this.reversed ? this.amountY : 1),
                  this.moveActiveIndexUp(1),
                  this.update();
              },
            },
            {
              key: "top",
              value: function () {
                (this.movingDirection = u),
                  (this.activeImageX = this.reversed ? this.amountX : 1),
                  this.moveActiveYIndexUp(1),
                  this.update();
              },
            },
            {
              key: "bottom",
              value: function () {
                (this.movingDirection = u),
                  (this.activeImageX = this.reversed ? this.amountX : 1),
                  this.moveActiveYIndexDown(1),
                  this.update();
              },
            },
            {
              key: "loop",
              value: function (t) {
                var e = {
                  left: this.left.bind(this),
                  right: this.right.bind(this),
                  top: this.top.bind(this),
                  bottom: this.bottom.bind(this),
                };
                !(function (t, e, n, i) {
                  var o = i.bottom,
                    c = i.top,
                    u = i.left,
                    l = i.right;
                  switch (t) {
                    case r:
                      n ? o() : c();
                      break;
                    case a:
                    case s:
                      e ? (n ? o() : c()) : n ? u() : l();
                      break;
                    default:
                      n ? u() : l();
                  }
                })(this.autoplayBehavior, this.spinY, t, e);
              },
            },
            {
              key: "updateContainerAndCanvasSize",
              value: function (e) {
                var n = (function (e, n) {
                  try {
                    var i = e.width / e.height;
                    if (
                      ("number" == typeof n && (i = n), n && "object" === t(n))
                    ) {
                      var o = Object.keys(n)
                        .sort(function (t, e) {
                          return t - e;
                        })
                        .find(function (t) {
                          return window.innerWidth <= parseInt(t, 10);
                        });
                      o && (i = n[o]);
                    }
                    return i;
                  } catch (t) {
                    return 1;
                  }
                })(e, this.ratio);
                if (this.fullscreenView)
                  return (
                    (this.container.width =
                      window.innerWidth * this.devicePixelRatio),
                    (this.container.style.width = window.innerWidth + "px"),
                    (this.container.height =
                      window.innerHeight * this.devicePixelRatio),
                    (this.container.style.height = window.innerHeight + "px"),
                    (this.container.style.maxWidth = "unset"),
                    (this.canvas.width =
                      window.innerWidth * this.devicePixelRatio),
                    (this.canvas.style.width = window.innerWidth + "px"),
                    (this.canvas.height =
                      window.innerHeight * this.devicePixelRatio),
                    void (this.canvas.style.height = window.innerHeight + "px")
                  );
                (this.canvas.width =
                  this.container.offsetWidth * this.devicePixelRatio),
                  (this.canvas.style.width = this.container.offsetWidth + "px"),
                  (this.canvas.height =
                    (this.container.offsetWidth / n) * this.devicePixelRatio),
                  (this.canvas.style.height =
                    this.container.offsetWidth / n + "px");
              },
            },
            {
              key: "onResizedImageLoad",
              value: function (t, e, n) {
                t === u
                  ? (this.resizedImagesY[n] = e)
                  : (this.resizedImagesX[n] = e),
                  this.resizedImagesX.length + this.resizedImagesY.length ===
                    this.amountX + this.amountY &&
                    ((this.imagesX = this.resizedImagesX),
                    (this.imagesY = this.resizedImagesY),
                    this.update());
              },
            },
            {
              key: "showImageInfo",
              value: function (t) {
                (t.font = "".concat(this.fullscreenView ? 28 : 14, "px serif")),
                  (t.fillStyle = "white" === this.info ? "#FFF" : "#000");
                var e = "image-dimension: "
                    .concat(this.container.offsetWidth, "x")
                    .concat(this.container.offsetHeight, "px"),
                  n = [
                    "active-index-x: " + this.activeImageX,
                    "active-index-y: " + this.activeImageY,
                  ].join(" | ");
                t.fillText(e, 20, this.container.offsetHeight - 35),
                  t.fillText(n, 20, this.container.offsetHeight - 10);
              },
            },
            {
              key: "requestResizedImages",
              value: function () {
                if (this.isReady()) {
                  var t = this.ciParams.ciToken,
                    e = this.imagesX[0];
                  if (
                    (this.update(),
                    t &&
                      this.requestResponsiveImages &&
                      !(this.container.offsetWidth < 1.5 * e.width))
                  ) {
                    this.speedFactor = it(
                      this.dragSpeed,
                      this.amountX,
                      this.container.offsetWidth
                    );
                    var n = R(this.srcXConfig);
                    if (
                      (q(
                        this.srcXConfig,
                        n,
                        this.onResizedImageLoad.bind(this, c)
                      ),
                      this.allowSpinY)
                    ) {
                      var i = R(this.srcYConfig);
                      q(
                        this.srcYConfig,
                        i,
                        this.onResizedImageLoad.bind(this, u)
                      );
                    }
                  }
                }
              },
            },
            {
              key: "update",
              value: function () {
                var t = this.imagesX[this.activeImageX - 1];
                if (
                  (this.movingDirection === u &&
                    (t = this.imagesY[this.activeImageY - 1]),
                  t)
                ) {
                  var e = this.canvas.getContext("2d");
                  if (
                    (e.scale(this.devicePixelRatio, this.devicePixelRatio),
                    this.updateContainerAndCanvasSize(t),
                    this.fullscreenView)
                  ) {
                    var n = et(
                        this.canvas.width,
                        this.canvas.height,
                        t.width,
                        t.height
                      ),
                      i = n.width,
                      o = n.height,
                      r = n.offsetX,
                      a = n.offsetY;
                    e.drawImage(t, r, a, i, o);
                  } else
                    this.mouseTracked
                      ? this.updateImageScale(e)
                      : (this.hotspotsConfigs &&
                          !this.autoplay &&
                          mt(
                            this.container,
                            this.hotspotsConfigs,
                            this.activeImageX,
                            this.activeImageY,
                            this.movingDirection,
                            this.isClicked
                          ),
                        e.drawImage(
                          t,
                          0,
                          0,
                          this.canvas.width,
                          this.canvas.height
                        ));
                  this.info && this.showImageInfo(e);
                }
              },
            },
            {
              key: "updateImageScale",
              value: function (t) {
                var e = this.originalImagesX[this.activeImageX - 1];
                this.movingDirection === u &&
                  (e = this.originalImagesY[this.activeImageY - 1]);
                var n = this.getCursorPositionInCanvas(),
                  i = this.canvas.width,
                  o = this.canvas.height,
                  r = this.canvas.width * this.zoomIntensity,
                  a = this.canvas.height * this.zoomIntensity,
                  s = 0 - (n.x / i) * (r - this.canvas.width),
                  c = 0 - (n.y / o) * (a - this.canvas.height);
                t.drawImage(e, s, c, r, a);
              },
            },
            {
              key: "updatePercentageInLoader",
              value: function (t) {
                this.loader && (this.loader.style.width = t + "%"),
                  this.view360Icon && (this.view360Icon.innerText = t + "%");
              },
            },
            {
              key: "onFirstImageLoaded",
              value: function (t) {
                this.add360ViewIcon();
                var e = this.canvas.getContext("2d");
                if (
                  (e.scale(this.devicePixelRatio, this.devicePixelRatio),
                  this.updateContainerAndCanvasSize(t),
                  this.fullscreenView)
                ) {
                  var n = et(
                      this.canvas.width,
                      this.canvas.height,
                      t.width,
                      t.height
                    ),
                    i = n.offsetX,
                    o = n.offsetY,
                    r = n.width,
                    a = n.height;
                  (this.offset = { x: i, y: o }),
                    this.addCloseFullscreenView(),
                    e.drawImage(t, i, o, r, a);
                } else
                  e.drawImage(t, 0, 0, this.canvas.width, this.canvas.height);
                this.info && this.showImageInfo(e),
                  this.magnifier && this.addMagnifier(),
                  this.boxShadow &&
                    !this.fullscreenView &&
                    (this.boxShadowEl = ut(this.boxShadow, this.innerBox)),
                  this.bottomCircle &&
                    !this.fullscreenView &&
                    this.add360ViewCircleIcon(),
                  this.fullscreen &&
                    !this.fullscreenView &&
                    this.addFullscreenIcon();
              },
            },
            {
              key: "onAllImagesLoaded",
              value: function () {
                if (
                  (this.removeLoader(),
                  (this.imagesLoaded = !0),
                  this.autoplay && this.pointerZoom
                    ? (this.container.style.cursor = "zoom-in")
                    : (this.container.style.cursor = "grab"),
                  (this.speedFactor = it(
                    this.dragSpeed,
                    this.amountX,
                    this.container.offsetWidth
                  )),
                  this.autoplay && this.play(),
                  this.disableDrag && (this.container.style.cursor = "default"),
                  this.view360Icon)
                ) {
                  if (this.hide360Logo) return this.remove360ViewIcon();
                  (this.view360Icon.innerText = ""),
                    this.logoSrc && p(this.view360Icon, this.logoSrc);
                }
                this.initControls();
              },
            },
            {
              key: "magnify",
              value: function (t) {
                var e = this;
                t.stopPropagation(),
                  this.mouseTracked && this.togglePointerZoom();
                var n,
                  i,
                  o,
                  r,
                  a,
                  s,
                  c,
                  l,
                  d =
                    ((n = this.movingDirection),
                    (i = this.imagesX),
                    (o = this.imagesY),
                    (r = this.activeImageX),
                    (a = this.activeImageY),
                    (s = new Image()),
                    (c = i.map(function (t) {
                      return t.src.replace(N, "").replace(V, "?");
                    })),
                    (l = o.map(function (t) {
                      return t.src.replace(N, "").replace(V, "?");
                    })),
                    (s.src = c[r - 1]),
                    n === u && (s.src = l[a - 1]),
                    s);
                (this.isMagnifyOpen = !0),
                  (d.onload = function () {
                    e.glass && (e.glass.style.cursor = "none");
                  }),
                  (this.glass = document.createElement("div")),
                  (this.container.style.overflow = "hidden"),
                  (function (t, e, n, i, o) {
                    var r = e || {},
                      a = r.x,
                      s = void 0 === a ? 0 : a,
                      c = r.y,
                      u = void 0 === c ? 0 : c,
                      l = (t.offsetWidth - 2 * s) * o,
                      d = (t.offsetHeight - 2 * u) * o;
                    i.setAttribute(
                      "class",
                      "cloudimage-360-img-magnifier-glass"
                    ),
                      t.prepend(i),
                      (i.style.backgroundImage = "url('".concat(n.src, "')")),
                      (i.style.backgroundSize = ""
                        .concat(l, "px ")
                        .concat(d, "px"));
                    var h = {
                        container: t,
                        w: i.offsetWidth / 2,
                        h: i.offsetHeight / 2,
                        zoom: o,
                        bw: 3,
                        offsetX: s,
                        offsetY: u,
                      },
                      f = function (t) {
                        nt(t, h, i);
                      },
                      p = function (t) {
                        nt(t, h, i);
                      };
                    i.addEventListener("mousemove", f),
                      t.addEventListener("mousemove", f),
                      i.addEventListener("touchmove", p, { passive: !0 }),
                      t.addEventListener("touchmove", p, { passive: !0 });
                  })(
                    this.container,
                    this.offset,
                    d,
                    this.glass,
                    this.magnifier || 3
                  );
              },
            },
            {
              key: "closeMagnifier",
              value: function () {
                this.glass &&
                  ((this.container.style.overflow = "visible"),
                  this.container.removeChild(this.glass),
                  (this.glass = null),
                  (this.isMagnifyOpen = !1));
              },
            },
            {
              key: "openFullscreenModal",
              value: function (t) {
                t.stopPropagation(),
                  this.mouseTracked && this.togglePointerZoom(),
                  new e(
                    (function (t) {
                      var e = document.createElement("div");
                      e.className = "cloudimage-360-fullscreen-modal";
                      var n = t.cloneNode();
                      return (
                        (n.style.height = "100%"),
                        (n.style.maxHeight = "100%"),
                        e.appendChild(n),
                        (window.document.body.style.overflow = "hidden"),
                        window.document.body.appendChild(e),
                        n
                      );
                    })(this.container),
                    !0,
                    this.hotspotsConfigs
                  );
              },
            },
            {
              key: "setFullscreenEvents",
              value: function (t, e) {
                if ("click" === e.type) return this.closeFullscreenModal(e);
                "Escape" === e.key &&
                  this.container.parentNode.parentNode === document.body &&
                  this.closeFullscreenModalOnEsc(e);
              },
            },
            {
              key: "closeFullscreenModalOnEsc",
              value: function (t) {
                this.closeFullscreenModal(t);
              },
            },
            {
              key: "play",
              value: function () {
                var t = this;
                this.bottomCircle && this.hide360ViewCircleIcon(),
                  this.remove360ViewIcon(),
                  (this.loopTimeoutId = window.setInterval(function () {
                    t.loop(t.reversed);
                    var e = (function (t, e, n, i, o, s) {
                      switch (t) {
                        case a:
                        case r:
                          return !!(s ? 1 === n : n === o);
                        default:
                          return !!(s ? 1 === e : e === i);
                      }
                    })(
                      t.autoplayBehavior,
                      t.activeImageX,
                      t.activeImageY,
                      t.amountX,
                      t.amountY,
                      t.reversed
                    );
                    t.playOnce &&
                      e &&
                      (window.clearTimeout(t.loopTimeoutId),
                      (t.autoplay = !1),
                      t.hotspotsConfigs &&
                        mt(
                          t.container,
                          t.hotspotsConfigs,
                          t.activeImageX,
                          t.activeImageY,
                          t.movingDirection,
                          t.isClicked
                        ));
                  }, this.autoplaySpeed));
              },
            },
            {
              key: "stop",
              value: function () {
                this.bottomCircle && this.show360ViewCircleIcon(),
                  window.clearTimeout(this.loopTimeoutId);
              },
            },
            {
              key: "updateView",
              value: function (t, n, i) {
                var o,
                  r,
                  a = this,
                  s = this.container,
                  c = d(s);
                if (
                  ((o = this),
                  (r = c),
                  Object.keys(r).reduce(function (t, e) {
                    var n = o[e] !== r[e];
                    return -1 !== Y.indexOf(e) && n && (t = !0), t;
                  }, !1) || t)
                ) {
                  var u = this.container,
                    l = n.findIndex(function (t) {
                      return t.id === a.container.id;
                    });
                  return (
                    s.removeChild(this.innerBox),
                    ((s = s.cloneNode(!0)).className = s.className.replace(
                      " initialized",
                      ""
                    )),
                    u.parentNode.replaceChild(s, u),
                    n.splice(l, 1, new e(s))
                  );
                }
                (s.style.position = "relative"),
                  (s.style.width = "100%"),
                  (s.style.cursor = "default"),
                  s.setAttribute("draggable", "false"),
                  this.stop(),
                  this.init(s, !0, i);
              },
            },
            {
              key: "destroy",
              value: function () {
                this.stop();
                var t = this.container,
                  e = t.cloneNode(!0),
                  n = e.querySelector(".cloudimage-360-inner-box");
                (e.className = e.className.replace(" initialized", "")),
                  (e.style.position = "relative"),
                  (e.style.width = "100%"),
                  (e.style.cursor = "default"),
                  e.setAttribute("draggable", "false"),
                  (e.style.minHeight = "auto"),
                  e.removeChild(n),
                  t.parentNode.replaceChild(e, t);
              },
            },
            {
              key: "addCloseFullscreenView",
              value: function (t) {
                var e = (function () {
                  var t = document.createElement("div");
                  return (
                    (t.className = "cloudimage-360-close-fullscreen-icon"), t
                  );
                })();
                (e.onclick = this.setFullscreenEvents.bind(this, t)),
                  (window.onkeyup = this.setFullscreenEvents.bind(this, t)),
                  this.iconsContainer.appendChild(e);
              },
            },
            {
              key: "add360ViewIcon",
              value: function () {
                var t;
                (this.view360Icon =
                  (((t = document.createElement("div")).className =
                    "cloudimage-360-view-360-icon"),
                  (t.innerText = "0%"),
                  t)),
                  this.innerBox.appendChild(this.view360Icon);
              },
            },
            {
              key: "addFullscreenIcon",
              value: function () {
                var t;
                (this.fullscreenIcon =
                  (((t = document.createElement("div")).className =
                    "cloudimage-360-fullscreen-icon"),
                  t)),
                  (this.fullscreenIcon.onclick =
                    this.openFullscreenModal.bind(this)),
                  this.iconsContainer.appendChild(this.fullscreenIcon);
              },
            },
            {
              key: "showFullscreenIcon",
              value: function () {
                this.fullscreenIcon &&
                  ((this.fullscreenIcon.style.display = "block"),
                  (this.fullscreenIcon.style.pointerEvents = "auto"));
              },
            },
            {
              key: "hideFullscreenIcon",
              value: function () {
                this.fullscreenIcon &&
                  ((this.fullscreenIcon.style.display = "none"),
                  (this.fullscreenIcon.style.pointerEvents = "none"));
              },
            },
            {
              key: "addMagnifier",
              value: function () {
                var t;
                (this.magnifierIcon =
                  (((t = document.createElement("div")).className =
                    "cloudimage-360-magnifier-icon"),
                  t)),
                  (this.magnifierIcon.onclick = this.magnify.bind(this)),
                  this.iconsContainer.appendChild(this.magnifierIcon);
              },
            },
            {
              key: "enableMagnifierIcon",
              value: function () {
                this.magnifierIcon &&
                  ((this.magnifierIcon.style.display = "block"),
                  (this.magnifierIcon.style.pointerEvents = "auto"));
              },
            },
            {
              key: "disableMagnifierIcon",
              value: function () {
                this.magnifierIcon &&
                  ((this.magnifierIcon.style.display = "none"),
                  (this.magnifierIcon.style.pointerEvents = "none"));
              },
            },
            {
              key: "closeFullscreenModal",
              value: function (t) {
                t.stopPropagation(),
                  document.body.removeChild(this.container.parentNode),
                  (window.document.body.style.overflow = "visible");
              },
            },
            {
              key: "add360ViewCircleIcon",
              value: function () {
                var t, e;
                (this.view360CircleIcon =
                  ((t = this.bottomCircleOffset),
                  ((e = new Image()).src =
                    "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/assets/img/360.svg"),
                  (e.style.bottom = "".concat(t, "%")),
                  (e.className = "cloudimage-360-view-360-circle"),
                  e)),
                  this.innerBox.appendChild(this.view360CircleIcon);
              },
            },
            {
              key: "show360ViewCircleIcon",
              value: function () {
                this.view360CircleIcon &&
                  (this.view360CircleIcon.style.opacity = "1");
              },
            },
            {
              key: "hide360ViewCircleIcon",
              value: function () {
                this.view360CircleIcon &&
                  (this.view360CircleIcon.style.opacity = "0");
              },
            },
            {
              key: "remove360ViewCircleIcon",
              value: function () {
                this.view360CircleIcon &&
                  (this.innerBox.removeChild(this.view360CircleIcon),
                  (this.view360CircleIcon = null));
              },
            },
            {
              key: "removeLoader",
              value: function () {
                this.loader &&
                  (this.innerBox.removeChild(this.loader),
                  (this.loader = null));
              },
            },
            {
              key: "remove360ViewIcon",
              value: function () {
                if (this.view360Icon)
                  try {
                    this.innerBox.removeChild(this.view360Icon),
                      (this.view360Icon = null);
                  } catch (t) {}
              },
            },
            {
              key: "initControls",
              value: function () {
                var t = this,
                  e = (function (t, e) {
                    var n = t.container,
                      i = t.spinReverse,
                      o = t.stopAtEdges,
                      r = e.onRightStart,
                      a = e.onLeftStart,
                      s = e.onTopStart,
                      c = e.onBottomStart,
                      u = e.onEventEnd,
                      l = {},
                      d = t.controlReverse ? !i : i,
                      h = n.querySelectorAll(
                        ".cloudimage-360-left, .cloudimage-360-prev"
                      )[0],
                      f = n.querySelectorAll(
                        ".cloudimage-360-right, .cloudimage-360-next"
                      )[0],
                      p = n.querySelector(".cloudimage-360-top"),
                      m = n.querySelector(".cloudimage-360-bottom");
                    return (
                      h &&
                        ((h.style.display = "block"),
                        h.addEventListener("mousedown", d ? r : a),
                        h.addEventListener("touchstart", d ? r : a, {
                          passive: !0,
                        }),
                        h.addEventListener("mouseup", u),
                        h.addEventListener("touchend", u),
                        (l.left = h)),
                      f &&
                        ((f.style.display = "block"),
                        f.addEventListener("mousedown", d ? a : r),
                        f.addEventListener("touchstart", d ? a : r, {
                          passive: !0,
                        }),
                        f.addEventListener("mouseup", u),
                        f.addEventListener("touchend", u),
                        (l.right = f)),
                      p &&
                        ((p.style.display = "block"),
                        p.addEventListener("mousedown", d ? c : s),
                        p.addEventListener("touchstart", d ? c : s),
                        p.addEventListener("mouseup", u),
                        p.addEventListener("touchend", u),
                        (l.top = p)),
                      m &&
                        ((m.style.display = "block"),
                        m.addEventListener("mousedown", d ? s : c),
                        m.addEventListener("touchstart", d ? s : c),
                        m.addEventListener("mouseup", u),
                        m.addEventListener("touchend", u),
                        (l.bottom = m)),
                      (d ? f : h) &&
                        o &&
                        (ot(d ? f : h, "not-active"),
                        ot(d ? p : m, "not-active")),
                      l
                    );
                  })(
                    {
                      container: this.container,
                      controlReverse: this.controlReverse,
                      spinReverse: this.spinReverse,
                      stopAtEdges: this.stopAtEdges,
                    },
                    {
                      onLeftStart: function (e) {
                        e.stopPropagation(),
                          t.onSpin(),
                          t.left(),
                          (t.loopTimeoutId = window.setInterval(
                            t.left.bind(t),
                            t.autoplaySpeed
                          ));
                      },
                      onRightStart: function (e) {
                        e.stopPropagation(),
                          t.onSpin(),
                          t.right(),
                          (t.loopTimeoutId = window.setInterval(
                            t.right.bind(t),
                            t.autoplaySpeed
                          ));
                      },
                      onTopStart: function (e) {
                        e.stopPropagation(),
                          t.onSpin(),
                          t.top(),
                          (t.loopTimeoutId = window.setInterval(
                            t.top.bind(t),
                            t.autoplaySpeed
                          ));
                      },
                      onBottomStart: function (e) {
                        e.stopPropagation(),
                          t.onSpin(),
                          t.bottom(),
                          (t.loopTimeoutId = window.setInterval(
                            t.bottom.bind(t),
                            t.autoplaySpeed
                          ));
                      },
                      onEventEnd: function () {
                        t.onFinishSpin(), window.clearTimeout(t.loopTimeoutId);
                      },
                    }
                  );
                (this.topElem = e.top),
                  (this.bottomElem = e.bottom),
                  (this.leftElem = e.left),
                  (this.rightElem = e.right);
              },
            },
            {
              key: "attachEvents",
              value: function (t, e, n) {
                window.addEventListener(
                  "resize",
                  this.requestResizedImages.bind(this)
                ),
                  t &&
                    !this.disableDrag &&
                    (this.container.addEventListener(
                      "click",
                      this.mouseClick.bind(this)
                    ),
                    this.container.addEventListener(
                      "mousedown",
                      this.mouseDown.bind(this)
                    ),
                    this.container.addEventListener(
                      "mousemove",
                      this.mouseMove.bind(this)
                    ),
                    this.container.addEventListener(
                      "mouseleave",
                      this.mouseLeave.bind(this)
                    ),
                    document.addEventListener(
                      "mouseup",
                      this.mouseUp.bind(this)
                    )),
                  e &&
                    !this.disableDrag &&
                    (this.container.addEventListener(
                      "touchstart",
                      this.touchStart.bind(this),
                      { passive: !0 }
                    ),
                    this.container.addEventListener(
                      "touchend",
                      this.touchEnd.bind(this)
                    ),
                    this.container.addEventListener(
                      "touchmove",
                      this.touchMove.bind(this)
                    )),
                  n &&
                    (document.addEventListener(
                      "keydown",
                      this.keyDown.bind(this)
                    ),
                    document.addEventListener("keyup", this.keyUp.bind(this))),
                  document.addEventListener(
                    "keydown",
                    this.keyDownGeneral.bind(this)
                  );
              },
            },
            {
              key: "init",
              value: function (t) {
                var e,
                  n,
                  i = this,
                  o =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null,
                  a = d(t),
                  l = a.folder,
                  h = a.apiVersion,
                  f = a.filenameX,
                  m = a.filenameY,
                  v = a.imageListX,
                  g = a.imageListY,
                  y = a.indexZeroBase,
                  b = a.amountX,
                  w = a.amountY,
                  x = a.draggable,
                  I = void 0 === x || x,
                  O = a.swipeable,
                  k = void 0 === O || O,
                  E = a.keys,
                  S = a.keysReverse,
                  C = a.bottomCircle,
                  j = a.bottomCircleOffset,
                  L = a.boxShadow,
                  A = a.autoplay,
                  P = a.autoplayBehavior,
                  D = a.playOnce,
                  Y = a.speed,
                  T = a.autoplayReverse,
                  X = a.disableDrag,
                  M = void 0 === X || X,
                  F = a.fullscreen,
                  z = a.magnifier,
                  N = a.ciToken,
                  V = a.ciFilters,
                  B = a.ciTransformation,
                  _ = a.lazyload,
                  W = a.lazySelector,
                  H = a.spinReverse,
                  U = a.dragSpeed,
                  Z = a.stopAtEdges,
                  G = a.controlReverse,
                  J = a.hide360Logo,
                  $ = a.logoSrc,
                  K = a.pointerZoom,
                  Q = a.ratio,
                  et = a.imageInfo,
                  nt = void 0 === et ? "black" : et,
                  it = a.requestResponsiveImages,
                  ot = { ciToken: N, ciFilters: V, ciTransformation: B };
                if (
                  ((this.folder = l),
                  (this.apiVersion = h),
                  (this.filenameX = f),
                  (this.filenameY = m),
                  (this.imageListX = v),
                  (this.imageListY = g),
                  (this.indexZeroBase = y),
                  (this.amountX = v ? JSON.parse(v).length : b),
                  (this.amountY = g ? JSON.parse(g).length : w),
                  (this.allowSpinY = !!this.amountY),
                  (this.activeImageX = T ? this.amountX : 1),
                  (this.activeImageY = T ? this.amountY : 1),
                  (this.spinY = P === s),
                  (this.bottomCircle = C),
                  (this.bottomCircleOffset = j),
                  (this.boxShadow = L),
                  (this.autoplay = A),
                  (this.autoplayBehavior = P),
                  (this.playOnce = D),
                  (this.speed = Y),
                  (this.reversed = T),
                  (this.disableDrag = M),
                  (this.fullscreen = F),
                  (this.magnifier =
                    !this.isMobile && z > 1 ? Math.min(z, 5) : 0),
                  (this.lazySelector = W),
                  (this.spinReverse = H),
                  (this.controlReverse = G),
                  (this.dragSpeed = Math.max(U, 50)),
                  (this.autoplaySpeed = (36 * this.speed) / this.amountX),
                  (this.stopAtEdges = Z),
                  (this.hide360Logo = J),
                  (this.logoSrc = $),
                  (this.ciParams = ot),
                  (this.apiVersion = h),
                  (this.pointerZoom = K > 1 ? Math.min(K, 3) : 0),
                  (this.keysReverse = S),
                  (this.info = nt),
                  (this.keys = E),
                  (this.ratio = Q && JSON.parse(Q)),
                  (this.requestResponsiveImages = it),
                  o)
                )
                  return (
                    dt(this.innerBox, this.iconsContainer),
                    dt(this.innerBox, this.boxShadowEl),
                    dt(this.innerBox, this.view360Icon),
                    this.remove360ViewCircleIcon(),
                    (this.iconsContainer = ct(this.innerBox)),
                    this.hide360Logo ||
                      this.lazyload ||
                      !this.logoSrc ||
                      (this.add360ViewIcon(),
                      p(this.view360Icon, this.logoSrc)),
                    this.magnifier && this.addMagnifier(),
                    this.bottomCircle &&
                      !this.fullscreenView &&
                      this.add360ViewCircleIcon(),
                    this.fullscreen &&
                      !this.fullscreenView &&
                      this.addFullscreenIcon(),
                    this.boxShadow &&
                      !this.fullscreenView &&
                      (this.boxShadowEl = ut(this.boxShadow, this.innerBox)),
                    r &&
                      !this.fullscreenView &&
                      ((this.hotspotsConfigs = Xe(r)),
                      Ye(t, this.hotspotsConfigs)),
                    this.onAllImagesLoaded()
                  );
                (this.innerBox = (function (t) {
                  var e = document.createElement("div");
                  return (
                    (e.className = "cloudimage-360-inner-box"),
                    t.appendChild(e),
                    e
                  );
                })(this.container)),
                  (this.iconsContainer = ct(this.innerBox)),
                  (this.canvas =
                    ((e = this.innerBox),
                    ((n = document.createElement("canvas")).style.width =
                      "100%"),
                    (n.style.fontSize = "0"),
                    e.appendChild(n),
                    n)),
                  (this.loader = lt(this.innerBox)),
                  this.hotspotsConfigs &&
                    !this.fullscreenView &&
                    Ye(t, this.hotspotsConfigs),
                  (function (t) {
                    (t.style.position = "relative"),
                      (t.style.width = "100%"),
                      (t.style.cursor = "wait"),
                      t.setAttribute("draggable", "false"),
                      (t.className = "".concat(t.className, " initialized"));
                  })(this.container),
                  (this.srcXConfig = {
                    folder: l,
                    filename: f,
                    imageList: v,
                    container: t,
                    innerBox: this.innerBox,
                    apiVersion: h,
                    ciParams: ot,
                    lazySelector: W,
                    amount: this.amountX,
                    indexZeroBase: y,
                    fullscreen: this.fullscreenView,
                  }),
                  (this.srcYConfig = Ne(
                    Ne({}, this.srcXConfig),
                    {},
                    {
                      filename: m,
                      orientation: u,
                      imageList: g,
                      amount: this.amountY,
                    }
                  ));
                var rt = R(this.srcXConfig),
                  at = function (t, e, n) {
                    t === c ? (i.imagesX[n] = e) : (i.imagesY[n] = e);
                    var o = i.amountX + i.amountY,
                      r = i.imagesX.length + i.imagesY.length,
                      a = !n && t !== u,
                      s = Math.round((r / o) * 100);
                    i.updatePercentageInLoader(s),
                      a
                        ? i.onFirstImageLoaded(e)
                        : i.autoplay && i.moveRight(n),
                      i.isReady() && i.onAllImagesLoaded();
                  },
                  st = function () {
                    if ((q(i.srcXConfig, rt, at.bind(i, c)), i.allowSpinY)) {
                      var t = R(i.srcYConfig);
                      q(i.srcYConfig, t, at.bind(i, u));
                    }
                  };
                _
                  ? tt(rt, this.srcXConfig, function (t) {
                      i.innerBox.removeChild(t), st();
                    })
                  : st(),
                  this.attachEvents(I, k, E);
              },
            },
          ]),
          i && o(n.prototype, i),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          e
        );
      })();
      const Be = Ve;
      function _e() {
        var t = [],
          e = document.querySelectorAll(".cloudimage-360:not(.initialized)");
        [].slice.call(e).forEach(function (e) {
          var n = (function (t) {
            if (!t.id) {
              var e = Math.floor(1e4 * Math.random()),
                n = "cloudimage-360-view-".concat(e);
              t.id = n;
            }
            return t;
          })(e);
          h(n, "hotspots") || t.push(new Be(n));
        }),
          (window.CI360._viewers = t);
      }
      function We() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        if (t) {
          var i = window.CI360._viewers.filter(function (e) {
            return e.id === t;
          })[0];
          if (n) {
            var o = document.querySelectorAll(".cloudimage-360"),
              r = Array.from(o).find(function (e) {
                return e.id === t;
              });
            r.setAttribute("data-hotspots", !0);
          }
          i.updateView(e, window.CI360._viewers, n);
        } else
          window.CI360._viewers.forEach(function (t) {
            t.updateView(e, window.CI360._viewers);
          });
      }
      function He() {
        return !(window.CI360._viewers && window.CI360._viewers.length > 0);
      }
      (window.CI360 = window.CI360 || {}),
        (window.CI360.init = _e),
        (window.CI360.destroy = function () {
          He() ||
            (window.CI360._viewers.forEach(function (t) {
              t.destroy();
            }),
            (window.CI360._viewers = []));
        }),
        (window.CI360.getActiveIndexByID = function (t, e) {
          if (!He()) {
            var n = window.CI360._viewers.filter(function (e) {
              return e.id === t;
            })[0];
            return "y" === e
              ? n && n.activeImageY - 1
              : n && n.activeImageX - 1;
          }
        }),
        (window.CI360.update = We),
        (window.CI360.add = function (t) {
          var e = Array.from(
            document.querySelectorAll(".cloudimage-360:not(.initialized)")
          );
          if (e.length && t) {
            var n = e.filter(function (e) {
              return e.id === t;
            })[0];
            n && window.CI360._viewers.push(new Be(n));
          }
        }),
        (window.CI360.addHotspots = function (t, e) {
          var n = document.querySelectorAll(
            ".cloudimage-360:not(.initialized)"
          );
          if (
            Array.from(n).find(function (e) {
              return e.id === t;
            })
          )
            return (
              container.setAttribute("data-hotspots", !0),
              window.CI360._viewers.push(new Be(container, !1, e))
            );
          We(t, !1, e);
        }),
        window.CI360.notInitOnLoad || _e();
    })();
})();
