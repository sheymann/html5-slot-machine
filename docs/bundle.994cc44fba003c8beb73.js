(() => {
  var n = {
      402: (n, r, t) => {
        "use strict";
        t.d(r, { Z: () => o });
        var e = t(645),
          s = t.n(e)()(function (n) {
            return n[1];
          });
        s.push([
          n.id,
          'body {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: 1rem;\r\n  /*background-image: url("../assets/bg.jpg");*/\r\n  background-color: #FBFBF7;\r\n  background-size: cover;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 24px;\r\n  font-family: "Roboto Condensed", sans-serif;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n  body {\r\n    /*background-image: url("../assets/bg_small.jpg");*/\r\n  }\r\n}\r\n\r\n#reels {\r\n  display: flex;\r\n  /*width: 100vw;*/\r\n  height: calc((3 / 5) * 100vw);\r\n  max-height: calc(90vh - 50px - 40px);\r\n  max-width: calc((5 / 3) * (90vh - 50px - 40px));\r\n}\r\n\r\n.reel {\r\n  overflow: hidden;\r\n  width: 20%;\r\n  height: 100%;\r\n}\r\n\r\n.reel > .icons > img {\r\n  width: calc(100% + 6px);\r\n  margin: -3px 0 0 -3px;\r\n  height: auto;\r\n\r\n  /* enable gpu accelaration, fixes iOS flicker */\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.reel > .icons > img:first-child,\r\n.reel > .icons > img:last-child {\r\n\tfilter: blur(7px) opacity(0.7);\r\n\ttransition-duration: 0.5s;\r\n}\r\n\r\n#controls {\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px 30px;\r\n}\r\n\r\n#controls label {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0;\r\n}\r\n\r\n#controls label input {\r\n  margin-right: 5px;\r\n}\r\n\r\nbutton#spin {\r\n\tborder-radius: 12px;\r\n    border: none;\r\n    color: #fff;\r\n    background-color: #4C241D;\r\n}\r\n\r\nbutton#spin:disabled {\r\n\tbackground-color: #ccc;\r\n}\r\n\r\nbutton#spin span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\nbutton#spin span:after {\r\n  content: \'\\00bb\';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  transition: 0.5s;\r\n}\r\n\r\nbutton#spin:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\nbutton#spin:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n#jackpot {\r\n  color: #4C241D;\r\n  font-size: 40px;\r\n  text-align: center;\r\n}\r\n\r\n#slot.inverted .reel {\r\n  transform: scaleY(-1);\r\n}\r\n\r\n#slot.inverted .reel > .icons > img {\r\n  transform: scaleY(-1);\r\n}\r\n',
          "",
        ]);
        const o = s;
      },
      645: (n) => {
        "use strict";
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var t = n(r);
                return r[2] ? "@media ".concat(r[2], " {").concat(t, "}") : t;
              }).join("");
            }),
            (r.i = function (n, t, e) {
              "string" == typeof n && (n = [[null, n, ""]]);
              var s = {};
              if (e)
                for (var o = 0; o < this.length; o++) {
                  var a = this[o][0];
                  null != a && (s[a] = !0);
                }
              for (var i = 0; i < n.length; i++) {
                var c = [].concat(n[i]);
                (e && s[c[0]]) ||
                  (t &&
                    (c[2]
                      ? (c[2] = "".concat(t, " and ").concat(c[2]))
                      : (c[2] = t)),
                  r.push(c));
              }
            }),
            r
          );
        };
      },
      912: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "4e834101bb3527675ffd3e7766a573b5.svg";
      },
      765: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "43b6a634842474621fa1917927d09e46.svg";
      },
      50: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "38626259f1a52e159d3c6ff248530361.svg";
      },
      372: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "49140a56928485a67b5591376160820a.svg";
      },
      652: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "252578de06363a8f337ec2398a40a8b5.svg";
      },
      338: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "e4e92ab9152f858776086f3836d01c6e.svg";
      },
      539: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "8096d7e0c8d3c97e5bc579e5caf2b364.svg";
      },
      682: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "603841869283235529fac0079982a0e5.svg";
      },
      733: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "c8d27b1ea08b0765770ea72f751bae17.svg";
      },
      440: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "5289c8c5e587b7581af46436b92f6853.svg";
      },
      188: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "f474fdc05b46d58fde9262545ade8771.svg";
      },
      993: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "5c8d8b9d97b5cc5e1f7f00686fcbdb36.svg";
      },
      164: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "f0ebb29f165a48b79a489741305d0bd9.svg";
      },
      595: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "38cc9d53f82bf4a159e924da6629db02.svg";
      },
      748: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "26e0512235158be5f6059f09ddcce550.svg";
      },
      826: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "c355c8b913392631c41e2d93673ffc2b.svg";
      },
      844: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "37094d96056dbecbc5d4371025f7640d.svg";
      },
      541: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "27b5ac7bc4de3863dee7ccd2b5871597.svg";
      },
      458: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "48845ecf635a60ea070e063a47b776ab.svg";
      },
      229: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "d4c52e59c4a0a6423896c4459d0e9c04.svg";
      },
      680: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "f5353520e2a4a2f8d254d27e8d8ef2f2.svg";
      },
      380: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "480283d1c9ab0d7268d3f5406549ffc3.svg";
      },
      325: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "99539edc62b63336eb01586e2e33647a.svg";
      },
      404: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "2a174758d723e5ab48d9387f383ad280.svg";
      },
      545: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "6a1f5497d44b9c8ca0e39e7a7202c7cd.svg";
      },
      449: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "064ca2e385e33a574cfcd685820b12d3.svg";
      },
      868: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "1a5e927700d7acbc0891000e8be35d37.svg";
      },
      384: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "a4c5fe1d01e887baf97d2316a3703aa0.svg";
      },
      887: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "278ec87f42b415fef05c957ddb93e2d2.svg";
      },
      453: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "838250416525aff38adcbb61327c0fa7.svg";
      },
      715: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "62b7e177146a46b1f1577d91309a6b3d.svg";
      },
      87: (n, r, t) => {
        "use strict";
        t.r(r), t.d(r, { default: () => e });
        const e = t.p + "dc8289497f4673661e100c0aaf435d32.svg";
      },
      695: (n) => {
        "use strict";
        var r = {};
        n.exports = function (n) {
          if (void 0 === r[n]) {
            var t = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            r[n] = t;
          }
          return r[n];
        };
      },
      379: (n) => {
        "use strict";
        var r = [];
        function t(n) {
          for (var t = -1, e = 0; e < r.length; e++)
            if (r[e].identifier === n) {
              t = e;
              break;
            }
          return t;
        }
        function e(n, e) {
          for (var o = {}, a = [], i = 0; i < n.length; i++) {
            var c = n[i],
              d = e.base ? c[0] + e.base : c[0],
              u = o[d] || 0,
              l = "".concat(d, " ").concat(u);
            o[d] = u + 1;
            var f = t(l),
              p = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== f
              ? (r[f].references++, r[f].updater(p))
              : r.push({ identifier: l, updater: s(p, e), references: 1 }),
              a.push(l);
          }
          return a;
        }
        function s(n, r) {
          var t = r.domAPI(r);
          return (
            t.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap
                )
                  return;
                t.update((n = r));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, s) {
          var o = e((n = n || []), (s = s || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < o.length; a++) {
              var i = t(o[a]);
              r[i].references--;
            }
            for (var c = e(n, s), d = 0; d < o.length; d++) {
              var u = t(o[d]);
              0 === r[u].references && (r[u].updater(), r.splice(u, 1));
            }
            o = c;
          };
        };
      },
      216: (n) => {
        "use strict";
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r), r;
        };
      },
      795: (n) => {
        "use strict";
        n.exports = function (n) {
          var r = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, r, t) {
                var e = t.css,
                  s = t.media,
                  o = t.sourceMap;
                s ? n.setAttribute("media", s) : n.removeAttribute("media"),
                  o &&
                    "undefined" != typeof btoa &&
                    (e +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                        " */"
                      )),
                  r.styleTagTransform(e, n);
              })(r, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      335: (n, r, t) => {
        var e = {
          "./001-stegosaurus.svg": 912,
          "./002-dinosaur.svg": 765,
          "./003-dinosaur.svg": 50,
          "./004-diplodocus.svg": 372,
          "./005-pterodactyl.svg": 652,
          "./006-diplodocus.svg": 338,
          "./007-dinosaur.svg": 539,
          "./008-diplodocus.svg": 682,
          "./009-stegosaurus.svg": 733,
          "./010-stegosaurus.svg": 440,
          "./011-dinosaur.svg": 188,
          "./012-diplodocus.svg": 993,
          "./013-pterodactyl.svg": 164,
          "./014-dinosaur.svg": 595,
          "./015-pterodactyl.svg": 748,
          "./016-dinosaur.svg": 826,
          "./017-dinosaur.svg": 844,
          "./018-dinosaur.svg": 541,
          "./019-dinosaur.svg": 458,
          "./020-pterodactyl.svg": 229,
          "./021-dinosaur.svg": 680,
          "./022-stegosaurus.svg": 380,
          "./023-tyrannosaurus-rex.svg": 325,
          "./024-dinosaur.svg": 404,
          "./025-pterodactyl.svg": 545,
          "./026-triceratops.svg": 449,
          "./027-diplodocus.svg": 868,
          "./028-dinosaur.svg": 384,
          "./029-dinosaur.svg": 887,
          "./030-dinosaur.svg": 453,
          "./itsaboy-dino.svg": 715,
          "./itsagirl-dino.svg": 87,
        };
        function s(n) {
          var r = o(n);
          return t(r);
        }
        function o(n) {
          if (!t.o(e, n)) {
            var r = new Error("Cannot find module '" + n + "'");
            throw ((r.code = "MODULE_NOT_FOUND"), r);
          }
          return e[n];
        }
        (s.keys = function () {
          return Object.keys(e);
        }),
          (s.resolve = o),
          (n.exports = s),
          (s.id = 335);
      },
    },
    r = {};
  function t(e) {
    var s = r[e];
    if (void 0 !== s) return s.exports;
    var o = (r[e] = { id: e, exports: {} });
    return n[e](o, o.exports, t), o.exports;
  }
  (t.n = (n) => {
    var r = n && n.__esModule ? () => n.default : () => n;
    return t.d(r, { a: r }), r;
  }),
    (t.d = (n, r) => {
      for (var e in r)
        t.o(r, e) &&
          !t.o(n, e) &&
          Object.defineProperty(n, e, { enumerable: !0, get: r[e] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (t.r = (n) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var r = t.g.document;
      if (!n && r && (r.currentScript && (n = r.currentScript.src), !n)) {
        var e = r.getElementsByTagName("script");
        e.length && (n = e[e.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (() => {
      "use strict";
      function n(n, r) {
        if (!(n instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(n, r) {
        for (var t = 0; t < r.length; t++) {
          var e = r[t];
          (e.enumerable = e.enumerable || !1),
            (e.configurable = !0),
            "value" in e && (e.writable = !0),
            Object.defineProperty(n, e.key, e);
        }
      }
      var e = {},
        s = (function () {
          function s() {
            var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : s.random();
            n(this, s),
              (this.name = r),
              e[r]
                ? (this.img = e[r].cloneNode())
                : ((this.img = new Image()),
                  (this.img.src = t(335)("./".concat(r, ".svg")).default),
                  (e[r] = this.img));
          }
          var o, a;
          return (
            (o = s),
            (a = [
              {
                key: "preload",
                value: function () {
                  s.symbols.forEach(function (n) {
                    return new s(n);
                  });
                },
              },
              {
                key: "symbols",
                get: function () {
                  return [
                    "001-stegosaurus",
                    "002-dinosaur",
                    "003-dinosaur",
                    "014-dinosaur",
                    "017-dinosaur",
                    "018-dinosaur",
                    "019-dinosaur",
                    "024-dinosaur",
                    "028-dinosaur",
                    "029-dinosaur",
                    "030-dinosaur",
                    "013-pterodactyl",
                    "015-pterodactyl",
                    "020-pterodactyl",
                    "025-pterodactyl",
                    "009-stegosaurus",
                    "022-stegosaurus",
                    "023-tyrannosaurus-rex",
                    "026-triceratops",
                    "itsagirl-dino",
                  ];
                },
              },
              {
                key: "random",
                value: function () {
                  return this.symbols[
                    Math.floor(Math.random() * (this.symbols.length - 1))
                  ];
                },
              },
              {
                key: "getGender",
                value: function () {
                  return this.symbols[this.symbols.length - 1];
                },
              },
            ]),
            null && r(o.prototype, null),
            a && r(o, a),
            s
          );
        })();
      function o(n, r) {
        for (var t = 0; t < r.length; t++) {
          var e = r[t];
          (e.enumerable = e.enumerable || !1),
            (e.configurable = !0),
            "value" in e && (e.writable = !0),
            Object.defineProperty(n, e.key, e);
        }
      }
      var a = (function () {
        function n(r, t, e) {
          var o = this;
          !(function (n, r) {
            if (!(n instanceof r))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.reelContainer = r),
            (this.idx = t),
            (this.symbolContainer = document.createElement("div")),
            this.symbolContainer.classList.add("icons"),
            this.reelContainer.appendChild(this.symbolContainer),
            (this.animation = this.symbolContainer.animate(
              [
                { transform: "none", filter: "blur(0)" },
                { filter: "blur(2px)", offset: 0.5 },
                {
                  transform: "translateY(-".concat(
                    ((10 * Math.floor(this.factor)) /
                      (3 + 10 * Math.floor(this.factor))) *
                      100,
                    "%)"
                  ),
                  filter: "blur(0)",
                },
              ],
              { duration: 2500 * this.factor, easing: "ease-in-out" }
            )),
            this.animation.cancel(),
            e.forEach(function (n) {
              return o.symbolContainer.appendChild(new s(n).img);
            });
        }
        var r, t;
        return (
          (r = n),
          (t = [
            {
              key: "factor",
              get: function () {
                return 1 + Math.pow(this.idx / 2, 2);
              },
            },
            {
              key: "renderSymbols",
              value: function (n) {
                for (
                  var r = document.createDocumentFragment(), t = 3;
                  t < 3 + 10 * Math.floor(this.factor);
                  t++
                ) {
                  var e = new s(
                    t >= 10 * Math.floor(this.factor) - 2
                      ? n[t - 10 * Math.floor(this.factor)]
                      : void 0
                  );
                  r.appendChild(e.img);
                }
                this.symbolContainer.appendChild(r);
              },
            },
            {
              key: "spin",
              value: function () {
                var n = this,
                  r = new Promise(function (r) {
                    return (n.animation.onfinish = r);
                  }),
                  t = new Promise(function (r) {
                    return setTimeout(r, 2500 * n.factor);
                  });
                return (
                  this.animation.play(),
                  Promise.race([r, t]).then(function () {
                    "finished" !== n.animation.playState &&
                      n.animation.finish();
                    for (
                      var r = n.symbolContainer.children.length - 3, t = 0;
                      t < r;
                      t++
                    )
                      n.symbolContainer.firstChild.remove();
                  })
                );
              },
            },
          ]) && o(r.prototype, t),
          n
        );
      })();
      function i(n, r) {
        if (!(n instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(n, r) {
        for (var t = 0; t < r.length; t++) {
          var e = r[t];
          (e.enumerable = e.enumerable || !1),
            (e.configurable = !0),
            "value" in e && (e.writable = !0),
            Object.defineProperty(n, e.key, e);
        }
      }
      new ((function () {
        function n(r) {
          var t = this,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          i(this, n),
            s.preload(),
            (this.currentSymbols = [
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
            ]),
            (this.nextSymbols = [
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
              ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
            ]),
            (this.container = r),
            (this.reels = Array.from(
              this.container.getElementsByClassName("reel")
            ).map(function (n, r) {
              return new a(n, r, t.currentSymbols[r]);
            })),
            (this.spinButton = document.getElementById("spin")),
            this.spinButton.addEventListener("click", function () {
              return t.spin();
            }),
            e.inverted && this.container.classList.add("inverted");
        }
        var r, t;
        return (
          (r = n),
          (t = [
            {
              key: "spin",
              value: function () {
                var n = this;
                return (
                  this.onSpinStart(),
                  (this.currentSymbols = this.nextSymbols),
                  (this.nextSymbols = [
                    [s.random(), s.random(), s.random()],
                    [s.random(), s.random(), s.random()],
                    [s.random(), s.random(), s.random()],
                    [s.random(), s.random(), s.random()],
                    [s.random(), s.getGender(), s.random()],
                  ]),
                  Promise.all(
                    this.reels.map(function (r) {
                      return r.renderSymbols(n.nextSymbols[r.idx]), r.spin();
                    })
                  ).then(function () {
                    return n.onSpinEnd();
                  })
                );
              },
            },
            {
              key: "onSpinStart",
              value: function () {
                (this.spinButton.disabled = !0), console.log("SPIN START");
              },
            },
            {
              key: "onSpinEnd",
              value: function () {
                (this.spinButton.disabled = !1), console.log("SPIN END");
              },
            },
          ]) && c(r.prototype, t),
          n
        );
      })())(document.getElementById("slot"), { inverted: !1 });
    })(),
    (() => {
      "use strict";
      var n = t(379),
        r = t.n(n),
        e = t(795),
        s = t.n(e),
        o = t(695),
        a = t.n(o),
        i = t(216),
        c = t.n(i),
        d = t(402),
        u = {
          styleTagTransform: function (n, r) {
            if (r.styleSheet) r.styleSheet.cssText = n;
            else {
              for (; r.firstChild; ) r.removeChild(r.firstChild);
              r.appendChild(document.createTextNode(n));
            }
          },
          setAttributes: function (n) {
            var r = t.nc;
            r && n.setAttribute("nonce", r);
          },
          insert: function (n) {
            var r = a()("head");
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(n);
          },
        };
      (u.domAPI = s()),
        (u.insertStyleElement = c()),
        r()(d.Z, u),
        d.Z && d.Z.locals && d.Z.locals;
    })();
})();
