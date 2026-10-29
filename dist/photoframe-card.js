var fn, Z, Pi, Ie, Po, Li, Hi, _n, Lt, dt, ji, bo, Zn, Gn, Qi, Yt = {}, Zt = [], Qr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Mt = Array.isArray;
function Ee(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function yo(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Gt(t, e, n) {
  var i, s, a, r = {};
  for (a in e) a == "key" ? i = e[a] : a == "ref" ? s = e[a] : r[a] = e[a];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? fn.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (a in t.defaultProps) r[a] === void 0 && (r[a] = t.defaultProps[a]);
  return Ht(t, r, i, s, null);
}
function Ht(t, e, n, i, s) {
  var a = { type: t, props: e, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: s ?? ++Pi, __i: -1, __u: 0 };
  return s == null && Z.vnode != null && Z.vnode(a), a;
}
function se(t) {
  return t.children;
}
function jt(t, e) {
  this.props = t, this.context = e;
}
function Fe(t, e) {
  if (e == null) return t.__ ? Fe(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? Fe(t) : null;
}
function Nr(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, i = [], s = [], a = Ee({}, e);
    a.__v = e.__v + 1, Z.vnode && Z.vnode(a), xo(t.__P, a, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, i, n ?? Fe(e), !!(32 & e.__u), s), a.__v = e.__v, a.__.__k[a.__i] = a, Vi(i, a, s), e.__e = e.__ = null, a.__e != n && Ni(a);
  }
}
function Ni(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Ni(t);
}
function Jn(t) {
  (!t.__d && (t.__d = !0) && Ie.push(t) && !Jt.__r++ || Po != Z.debounceRendering) && ((Po = Z.debounceRendering) || Li)(Jt);
}
function Jt() {
  try {
    for (var t, e = 1; Ie.length; ) Ie.length > e && Ie.sort(Hi), t = Ie.shift(), e = Ie.length, Nr(t);
  } finally {
    Ie.length = Jt.__r = 0;
  }
}
function Fi(t, e, n, i, s, a, r, c, h, A, u) {
  var m, l, f, p, _, w, k = i && i.__k || Zt, b = e.length;
  for (h = Fr(n, e, k, h, b), m = 0; m < b; m++) (f = n.__k[m]) != null && (l = f.__i != -1 && k[f.__i] || Yt, f.__i = m, w = xo(t, f, l, s, a, r, c, h, A, u), p = f.__e, f.ref && l.ref != f.ref && (l.ref && ko(l.ref, null, f), u.push(f.ref, f.__c || p, f)), _ == null && p != null && (_ = p), 4 & f.__u ? (h = Ri(f, h, t), l.__e && (l.__e = null)) : typeof f.type == "function" && w !== void 0 ? h = w : p && (h = p.nextSibling), f.__u &= -7);
  return n.__e = _, h;
}
function Fr(t, e, n, i, s) {
  var a, r, c, h, A, u = n.length, m = u, l = 0;
  for (t.__k = new Array(s), a = 0; a < s; a++) (r = e[a]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = t.__k[a] = Ht(null, r, null, null, null) : Mt(r) ? r = t.__k[a] = Ht(se, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? r = t.__k[a] = Ht(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : t.__k[a] = r, h = a + l, r.__ = t, r.__b = t.__b + 1, c = null, (A = r.__i = Rr(r, n, h, m)) != -1 && (m--, (c = n[A]) && (c.__u |= 2)), c == null || c.__v == null ? (A == -1 && (s > u ? l-- : s < u && l++), typeof r.type != "function" && (r.__u |= 4)) : A != h && (A == h - 1 ? l-- : A == h + 1 ? l++ : (A > h ? l-- : l++, r.__u |= 4))) : t.__k[a] = null;
  if (m) for (a = 0; a < u; a++) (c = n[a]) != null && (2 & c.__u) == 0 && (c.__e == i && (i = Fe(c)), Yi(c, c));
  return i;
}
function Ri(t, e, n) {
  var i, s;
  if (typeof t.type == "function") {
    for (i = t.__k, s = 0; i && s < i.length; s++) i[s] && (i[s].__ = t, e = Ri(i[s], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = Fe(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function qi(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Mt(t) ? t.some(function(n) {
    qi(n, e);
  }) : e.push(t)), e;
}
function Rr(t, e, n, i) {
  var s, a, r, c = t.key, h = t.type, A = e[n], u = A != null && (2 & A.__u) == 0;
  if (A === null && c == null || u && c == A.key && h == A.type) return n;
  if (i > (u ? 1 : 0)) {
    for (s = n - 1, a = n + 1; s >= 0 || a < e.length; ) if ((A = e[r = s >= 0 ? s-- : a++]) != null && (2 & A.__u) == 0 && c == A.key && h == A.type) return r;
  }
  return -1;
}
function Lo(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Qr.test(e) ? n : n + "px";
}
function zt(t, e, n, i, s) {
  var a, r;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof i == "string" && (t.style.cssText = i = ""), i) for (e in i) n && e in n || Lo(t.style, e, "");
    if (n) for (e in n) i && n[e] == i[e] || Lo(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(ji, "$1")), r = e.toLowerCase(), e = r in t || e == "onFocusOut" || e == "onFocusIn" ? r.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = n, n ? i ? n[dt] = i[dt] : (n[dt] = bo, t.addEventListener(e, a ? Gn : Zn, a)) : t.removeEventListener(e, a ? Gn : Zn, a);
  else {
    if (s == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function Ho(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[Lt] == null) e[Lt] = bo++;
      else if (e[Lt] < n[dt]) return;
      return n(Z.event ? Z.event(e) : e);
    }
  };
}
function xo(t, e, n, i, s, a, r, c, h, A) {
  var u, m, l, f, p, _, w, k, b, y, I, z, M, g, D, L, O = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (h = !!(32 & n.__u), a = [c = e.__e = n.__e]), (u = Z.__b) && u(e);
  e: if (typeof O == "function") {
    m = r.length;
    try {
      if (b = e.props, y = O.prototype && O.prototype.render, I = (u = O.contextType) && i[u.__c], z = u ? I ? I.props.value : u.__ : i, n.__c ? k = (l = e.__c = n.__c).__ = l.__E : (y ? e.__c = l = new O(b, z) : (e.__c = l = new jt(b, z), l.constructor = O, l.render = Wr), I && I.sub(l), l.state || (l.state = {}), l.__n = i, f = l.__d = !0, l.__h = [], l._sb = []), y && l.__s == null && (l.__s = l.state), y && O.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Ee({}, l.__s)), Ee(l.__s, O.getDerivedStateFromProps(b, l.__s))), p = l.props, _ = l.state, l.__v = e, f) y && O.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), y && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (y && O.getDerivedStateFromProps == null && b !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, z), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, z) === !1) {
          e.__v != n.__v && (l.props = b, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(P) {
            P && (P.__ = e);
          }), Zt.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && r.push(l), c = Fe(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, z), y && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(p, _, w);
        });
      }
      if (l.context = z, l.props = b, l.__P = t, l.__e = !1, M = Z.__r, g = 0, y) l.state = l.__s, l.__d = !1, M && M(e), u = l.render(l.props, l.state, l.context), Zt.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, M && M(e), u = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++g < 25);
      l.state = l.__s, l.getChildContext != null && (i = Ee(Ee({}, i), l.getChildContext())), y && !f && l.getSnapshotBeforeUpdate != null && (w = l.getSnapshotBeforeUpdate(p, _)), D = u != null && u.type === se && u.key == null ? Ui(u.props.children) : u, c = Fi(t, Mt(D) ? D : [D], e, n, i, s, a, r, c, h, A), l.base = e.__e, e.__u &= -161, l.__h.length && r.push(l), k && (l.__E = l.__ = null);
    } catch (P) {
      if (r.length = m, e.__v = null, h || a != null) {
        if (P.then) {
          for (e.__u |= h ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          a != null && (a[a.indexOf(c)] = null), e.__e = c;
        } else if (a != null) for (L = a.length; L--; ) yo(a[L]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), P.then || Wi(e), Z.__e(P, e, n);
    }
  } else a == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = qr(n.__e, e, n, i, s, a, r, h, A);
  return (u = Z.diffed) && u(e), 128 & e.__u ? void 0 : c;
}
function Wi(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Wi));
}
function Vi(t, e, n) {
  for (var i = 0; i < n.length; i++) ko(n[i], n[++i], n[++i]);
  Z.__c && Z.__c(e, t), t.some(function(s) {
    try {
      t = s.__h, s.__h = [], t.some(function(a) {
        a.call(s);
      });
    } catch (a) {
      Z.__e(a, s.__v);
    }
  });
}
function Ui(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Mt(t) ? t.map(Ui) : t.constructor !== void 0 ? null : Ee({}, t);
}
function qr(t, e, n, i, s, a, r, c, h) {
  var A, u, m, l, f, p, _, w = n.props || Yt, k = e.props, b = e.type;
  if (b == "svg" ? s = "http://www.w3.org/2000/svg" : b == "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), a != null) {
    for (A = 0; A < a.length; A++) if ((f = a[A]) && "setAttribute" in f == !!b && (b ? f.localName == b : f.nodeType == 3)) {
      t = f, a[A] = null;
      break;
    }
  }
  if (t == null) {
    if (b == null) return document.createTextNode(k);
    t = document.createElementNS(s, b, k.is && k), c && (Z.__m && Z.__m(e, a), c = !1), a = null;
  }
  if (b == null) w === k || c && t.data == k || (t.data = k);
  else {
    if (a = b == "textarea" && k.defaultValue != null ? null : a && fn.call(t.childNodes), !c && a != null) for (w = {}, A = 0; A < t.attributes.length; A++) w[(f = t.attributes[A]).name] = f.value;
    for (A in w) f = w[A], A == "dangerouslySetInnerHTML" ? m = f : A == "children" || A in k || A == "value" && "defaultValue" in k || A == "checked" && "defaultChecked" in k || zt(t, A, null, f, s);
    for (A in k) f = k[A], A == "children" ? l = f : A == "dangerouslySetInnerHTML" ? u = f : A == "value" ? p = f : A == "checked" ? _ = f : c && typeof f != "function" || w[A] === f || zt(t, A, f, w[A], s);
    if (u) c || m && (u.__html == m.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
    else if (m && (t.innerHTML = ""), Fi(e.type == "template" ? t.content : t, Mt(l) ? l : [l], e, n, i, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, a, r, a ? a[0] : n.__k && Fe(n, 0), c, h), a != null) for (A = a.length; A--; ) yo(a[A]);
    c && b != "textarea" || (A = "value", b == "progress" && p == null ? t.removeAttribute("value") : p != null && (p !== t[A] || b == "progress" && !p || b == "option" && p != w[A]) && zt(t, A, p, w[A], s), A = "checked", _ != null && _ != t[A] && zt(t, A, _, w[A], s));
  }
  return t;
}
function ko(t, e, n) {
  try {
    if (typeof t == "function") {
      var i = typeof t.__u == "function";
      i && t.__u(), i && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (s) {
    Z.__e(s, n);
  }
}
function Yi(t, e, n) {
  var i, s;
  if (Z.unmount && Z.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || ko(i, null, e)), (i = t.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (a) {
      Z.__e(a, e);
    }
    i.base = i.__P = i.__n = null;
  }
  if (i = t.__k) for (s = 0; s < i.length; s++) i[s] && Yi(i[s], e, n || typeof t.type != "function");
  n || yo(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Wr(t, e, n) {
  return this.constructor(t, n);
}
function Xn(t, e, n) {
  var i, s, a, r;
  e == document && (e = document.documentElement), Z.__ && Z.__(t, e), s = (i = !1) ? null : e.__k, a = [], r = [], xo(e, t = e.__k = Gt(se, null, [t]), s || Yt, Yt, e.namespaceURI, s ? null : e.firstChild ? fn.call(e.childNodes) : null, a, s ? s.__e : e.firstChild, i, r), Vi(a, t, r), t.props.children = null;
}
function pn(t) {
  function e(n) {
    var i, s;
    return this.getChildContext || (i = /* @__PURE__ */ new Set(), (s = {})[e.__c] = this, this.getChildContext = function() {
      return s;
    }, this.componentWillUnmount = function() {
      i = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && i.forEach(function(r) {
        r.__e = !0, Jn(r);
      });
    }, this.sub = function(a) {
      i.add(a);
      var r = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        i && i.delete(a), r && r.call(a);
      };
    }), n.children;
  }
  return e.__c = "__cC" + Qi++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, i) {
    return n.children(i);
  }).contextType = e, e;
}
fn = Zt.slice, Z = { __e: function(t, e, n, i) {
  for (var s, a, r; e = e.__; ) if ((s = e.__c) && !s.__) try {
    if ((a = s.constructor) && a.getDerivedStateFromError != null && (s.setState(a.getDerivedStateFromError(t)), r = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, i || {}), r = s.__d), r) return s.__E = s;
  } catch (c) {
    t = c;
  }
  throw t;
} }, Pi = 0, jt.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ee({}, this.state), typeof t == "function" && (t = t(Ee({}, n), this.props)), t && Ee(n, t), t != null && this.__v && (e && this._sb.push(e), Jn(this));
}, jt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Jn(this));
}, jt.prototype.render = se, Ie = [], Li = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Hi = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Jt.__r = 0, _n = Math.random().toString(8), Lt = "__d" + _n, dt = "__a" + _n, ji = /(PointerCapture)$|Capture$/i, bo = 0, Zn = Ho(!1), Gn = Ho(!0), Qi = 0;
var Vr = 0;
function o(t, e, n, i, s, a) {
  e || (e = {});
  var r, c, h = e;
  if ("ref" in h) for (c in h = {}, e) c == "ref" ? r = e[c] : h[c] = e[c];
  var A = { type: t, props: h, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Vr, __i: -1, __u: 0, __source: s, __self: a };
  if (typeof t == "function" && (r = t.defaultProps)) for (c in r) h[c] === void 0 && (h[c] = r[c]);
  return Z.vnode && Z.vnode(A), A;
}
const Zi = ':root{--ink: #f5f7fb;--ink-2: rgba(245, 247, 251, .72);--ink-3: rgba(245, 247, 251, .48);--panel: rgba(12, 14, 22, .42);--panel-line: rgba(255, 255, 255, .09);--chip: rgba(255, 255, 255, .1);--chip-line: rgba(255, 255, 255, .14);--warm: #fbbf24;--red: #fb7185;--green: #34d399;--ease: cubic-bezier(.2, .7, .2, 1)}*{box-sizing:border-box;margin:0;padding:0;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}html,body,#app{height:100%}body{background:#000;color:#f5f7fb;overflow:hidden;font-family:Inter,Roboto,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}button,input,select{font:inherit;color:inherit;border:0;background:none;outline:none}button{cursor:pointer}svg{display:block;flex-shrink:0}.app{position:relative;height:100%;overflow:hidden}.native-photos body,.native-photos .backdrop{background:transparent}.backdrop{position:absolute;inset:0;overflow:hidden}.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transform:scale(1);transition:opacity 2s ease-in-out,transform 20s linear}.slide.active{opacity:1;transform:scale(1.08)}.slide.contain,.slide.contain.active{transform:none;background:#000}.slide-glow{position:absolute;inset:-6%;background-size:cover;background-position:center;opacity:.75}.slide-photo{position:absolute;inset:0;background-size:contain;background-position:center;background-repeat:no-repeat}.q-full .slide-glow{-webkit-filter:blur(28px) saturate(1.3);filter:blur(28px) saturate(1.3)}.aurora{background:radial-gradient(ellipse at 20% 30%,rgba(56,189,248,.35) 0%,transparent 55%),radial-gradient(ellipse at 80% 70%,rgba(168,85,247,.32) 0%,transparent 55%),radial-gradient(ellipse at 60% 10%,rgba(251,191,36,.18) 0%,transparent 50%),#05060c}.soft{position:absolute;inset:-5%;background-size:cover;background-position:center;opacity:0;transition:opacity .6s cubic-bezier(.2,.7,.2,1)}.soft.on{opacity:1}.shade{position:absolute;inset:0;background:linear-gradient(to bottom,#00000040,#0000 30%,#00000026 55%,#000000b3);transition:background-color .6s cubic-bezier(.2,.7,.2,1)}.shade.deep{background-color:#04060c61}.ambient{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;padding:0 5vw 9vh;transform:translateY(-100%);pointer-events:none}.ambient.visible{transform:none}.clock-link{pointer-events:auto;cursor:pointer}.ambient-clock{text-shadow:0 2px 30px rgba(0,0,0,.35)}.ambient-time{font-size:22vh;font-weight:200;letter-spacing:-.04em;line-height:.9}.ambient-date{margin-top:2vh;font-size:3vh;font-weight:400;color:#f5f7fbb8;letter-spacing:.01em}.glances{display:flex;flex-wrap:wrap;justify-content:flex-end;max-width:50%;margin-bottom:1vh}.glance{pointer-events:auto;cursor:pointer;transition:transform .15s,background .2s;display:flex;align-items:center;margin:6px 0 0 8px;padding:9px 16px 9px 13px;border-radius:999px;background:#00000052;border:1px solid rgba(255,255,255,.14);font-size:15px;font-weight:500;color:#f5f7fb}.glance:active{transform:scale(.94);background:#00000080}.glance svg{margin-right:8px;color:#f5f7fbb8}.glance.lit svg{color:#fbbf24}.glance.alert{background:#e11d488c;border-color:#fb718599}.glance.alert svg,.glance.warn svg{color:#fff}.glance.warn{background:#d9770680}.ambient{transition:transform .5s cubic-bezier(.2,.7,.2,1),opacity .4s ease}.home-hint{position:absolute;left:50%;bottom:1.5vh;bottom:max(1.5vh,env(safe-area-inset-bottom));transform:translate(-50%);display:flex;padding:6px 24px;background:none;border:0;color:#f5f7fb;opacity:0;pointer-events:none;transition:opacity .6s ease,color 1.2s ease}.home-hint.visible{opacity:1;pointer-events:auto}.home-hint svg{-webkit-filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));-webkit-animation:nudge 2.4s ease-in-out infinite;animation:nudge 2.4s ease-in-out infinite}.home-hint.text-contrast.ink-dark svg{-webkit-filter:drop-shadow(0 1px 6px rgba(255,255,255,.6));filter:drop-shadow(0 1px 6px rgba(255,255,255,.6))}.ambient.customizing .home-hint{display:none}.q-lite .home-hint svg{-webkit-animation:none;animation:none}@-webkit-keyframes nudge{0%,60%,to{-webkit-transform:translateY(0)}30%{-webkit-transform:translateY(-5px)}}@keyframes nudge{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-5px)}}.photo-step{position:absolute;top:50%;width:72px;height:72px;margin-top:-36px;border-radius:50%;display:flex;align-items:center;justify-content:center;pointer-events:none;color:#fff;background:#00000059;opacity:0;-webkit-animation:photo-step .7s ease-out;animation:photo-step .7s ease-out}.photo-step.next{right:3vw}.photo-step.prev{left:3vw;-webkit-animation-name:photo-step-prev;animation-name:photo-step-prev}@-webkit-keyframes photo-step{0%{opacity:0;-webkit-transform:translateX(16px) scale(.8)}30%{opacity:1;-webkit-transform:translateX(0) scale(1)}to{opacity:0;-webkit-transform:translateX(-8px) scale(1)}}@keyframes photo-step{0%{opacity:0;transform:translate(16px) scale(.8)}30%{opacity:1;transform:translate(0) scale(1)}to{opacity:0;transform:translate(-8px) scale(1)}}@-webkit-keyframes photo-step-prev{0%{opacity:0;-webkit-transform:translateX(-16px) scale(.8)}30%{opacity:1;-webkit-transform:translateX(0) scale(1)}to{opacity:0;-webkit-transform:translateX(8px) scale(1)}}@keyframes photo-step-prev{0%{opacity:0;transform:translate(-16px) scale(.8)}30%{opacity:1;transform:translate(0) scale(1)}to{opacity:0;transform:translate(8px) scale(1)}}.dragging .ambient,.dragging .controls,.dragging .soft{transition:none}.dragging .controls{pointer-events:none}.controls{position:absolute;inset:0;display:flex;flex-direction:column;padding:22px 28px 28px;padding-top:max(22px,env(safe-area-inset-top));padding-left:max(28px,env(safe-area-inset-left));padding-right:max(28px,env(safe-area-inset-right));padding-bottom:max(28px,env(safe-area-inset-bottom));opacity:0;transform:scale(.96);transition:opacity .5s cubic-bezier(.2,.7,.2,1),transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}.controls.visible{opacity:1;transform:none;pointer-events:auto}.bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.bar-time{display:flex;align-items:baseline}.bar-clock{font-size:38px;font-weight:300;letter-spacing:-.03em}.bar-date{margin-left:14px;font-size:15px;color:#f5f7fbb8}.bar-actions{display:flex;align-items:center}.conn{display:flex;align-items:center;margin-right:14px;font-size:13px;color:#f5f7fbb8}.conn i{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#fbbf24}.conn-connected i{background:#34d399;box-shadow:0 0 10px #34d399}.conn-auth_invalid i,.conn-disconnected i{background:#fb7185}.round{width:48px;height:48px;margin-left:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);transition:transform .15s}.round:active{transform:scale(.92)}.round.accent{background:#7dd3fc;color:#0b0d14;border-color:transparent}.bar{position:relative}.bar-narrow .bar-date{display:none}.bar-narrow .bar-clock{font-size:30px}.home-switch{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);transition:opacity .2s}.home-switch:active{transform:translate(-50%,-50%) scale(.96)}.bar-narrow.menu-open .home-switch{opacity:0;pointer-events:none}.bar-narrow.bar-editing .home-switch{display:none}.burger{position:relative;display:flex;align-items:center}.burger-items{position:absolute;right:58px;top:0;display:flex;align-items:center;opacity:0;pointer-events:none;transform:translate(24px);transition:opacity .22s cubic-bezier(.2,.7,.2,1),transform .22s cubic-bezier(.2,.7,.2,1)}.menu-open .burger-items{opacity:1;pointer-events:auto;transform:none}.burger-btn{position:relative}.burger-dot{position:absolute;top:4px;right:4px;width:8px;height:8px;border-radius:50%;background:#fbbf24}.burger-btn.conn-connected .burger-dot{background:#34d399}.burger-btn.conn-auth_invalid .burger-dot,.burger-btn.conn-disconnected .burger-dot{background:#fb7185}.grid{position:relative;flex:1;min-height:0;margin:-16px;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.grid::-webkit-scrollbar{display:none}.grid-inner{position:relative}.cell{position:absolute;display:flex;transition:left .22s cubic-bezier(.2,.7,.2,1),top .22s cubic-bezier(.2,.7,.2,1),width .22s cubic-bezier(.2,.7,.2,1),height .22s cubic-bezier(.2,.7,.2,1)}.cell.dragged{z-index:20;transition:none;-webkit-animation:none;animation:none}.cell.dragged .panel{box-shadow:0 30px 60px #0000008c;border-color:#ffffff80}.drop-slot{position:absolute;border-radius:28px;border:2px dashed rgba(255,255,255,.45);background:#ffffff14;transition:left .15s,top .15s,width .15s,height .15s}.grid-dots{position:absolute;inset:0}.grid-dot{position:absolute;border-radius:10px;background:#ffffff09}.grid-note{font-size:12px;color:#f5f7fb7a;padding:8px 16px 0}.hidden-cards{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.hidden-cards .muted{display:flex;align-items:center;margin-right:8px}.hidden-cards .muted svg{margin-right:4px}.hidden-cards .chip{display:flex;align-items:center;margin:0 6px 6px 0}.hidden-cards .chip svg{margin-right:4px}.editing .cell{cursor:move}.dragging-card,.dragging-card *{cursor:-webkit-grabbing;cursor:grabbing}.badge-btn{position:absolute;top:-8px;width:28px;height:28px;border-radius:50%;z-index:2;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.25);box-shadow:0 4px 12px #0006}.badge-del{left:-8px;background:#3f3f46;color:#fff}.badge-edit{right:-8px;background:#e5e7eb;color:#111}.resize-handle{position:absolute;right:2px;bottom:2px;width:30px;height:30px;cursor:nwse-resize;z-index:2;border-right:3px solid rgba(255,255,255,.85);border-bottom:3px solid rgba(255,255,255,.85);border-bottom-right-radius:24px}.size-tag{position:absolute;left:50%;bottom:10px;padding:3px 8px;border-radius:8px;z-index:2;transform:translate(-50%);background:#0000008c;font-size:11px;font-weight:600;color:#f5f7fbb8}.cell>.panel{flex:1;min-width:0}.panel-body{flex:1;min-height:0;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.panel-body::-webkit-scrollbar,.lights::-webkit-scrollbar{display:none}.card-empty{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;font-size:13px;color:#f5f7fb7a;padding:0 12px}.panel{display:flex;flex-direction:column;min-height:0;background:#0c0e166b;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:20px 22px;box-shadow:0 20px 50px #00000040}.panel-head{display:flex;align-items:center;justify-content:space-between;min-height:30px;margin-bottom:14px}.panel-head h2{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#f5f7fbb8}.home-pane{flex:1;min-height:0;display:flex;flex-direction:column}.screen-tabs{display:flex;align-items:center;overflow-x:auto;white-space:nowrap;margin:-8px 0 12px;padding-bottom:2px;-webkit-overflow-scrolling:touch}.screen-tab{display:inline-flex;flex-shrink:0;align-items:center;height:34px;padding:0 14px;margin-right:8px;border-radius:17px;font-size:14px;font-weight:500;color:#f5f7fb7a;background:#ffffff0f}.screen-tab.on{color:#f5f7fb;background:#ffffff29;font-weight:600}.screen-tab.add svg{margin-right:4px}.screen-tab.editing{padding:0 4px}.screen-tab input{width:auto;min-width:0;height:30px;padding:0 6px;border:0;border-radius:10px;background:transparent;color:#f5f7fb;font:inherit;text-align:center}.screen-tab input:focus{background:#00000040;outline:none}.screen-move,.screen-del{display:flex;align-items:center;justify-content:center;min-width:28px;height:28px;border-radius:14px;color:#f5f7fb7a}.screen-del.sure{padding:0 10px;background:#ef4444d9;color:#fff;font-size:13px}.slide-next{-webkit-animation:in-next .35s cubic-bezier(.2,.7,.2,1);animation:in-next .35s cubic-bezier(.2,.7,.2,1)}.slide-prev{-webkit-animation:in-prev .35s cubic-bezier(.2,.7,.2,1);animation:in-prev .35s cubic-bezier(.2,.7,.2,1)}@-webkit-keyframes in-next{0%{opacity:0;-webkit-transform:translateX(60px)}}@keyframes in-next{0%{opacity:0;transform:translate(60px)}}@-webkit-keyframes in-prev{0%{opacity:0;-webkit-transform:translateX(-60px)}}@keyframes in-prev{0%{opacity:0;transform:translate(-60px)}}.home-switch{display:flex;flex-direction:column;align-items:center;padding:6px 14px;border-radius:14px}.home-switch:active{background:#ffffff14}.home-name{font-size:15px;font-weight:600}.home-dots{display:flex;margin-top:5px}.home-dots i{width:6px;height:6px;border-radius:50%;margin:0 3px;background:#ffffff4d}.home-dots i.on{background:#fff}.editing .cell{-webkit-animation:jiggle .9s ease-in-out infinite;animation:jiggle .9s ease-in-out infinite}.editing div:nth-child(2n)>.cell{-webkit-animation-delay:-.45s;animation-delay:-.45s}.editing .cell .panel{border:1px dashed rgba(255,255,255,.35)}.editing .cell .panel-body{pointer-events:none;opacity:.45;overflow:hidden}.editing .cell{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:pan-y}@-webkit-keyframes jiggle{0%,to{-webkit-transform:rotate(-.35deg)}50%{-webkit-transform:rotate(.35deg)}}@keyframes jiggle{0%,to{transform:rotate(-.35deg)}50%{transform:rotate(.35deg)}}.icon-btn.danger{color:#fb7185}.pill-btn{margin-left:10px;display:flex;align-items:center;height:44px;padding:0 18px;border-radius:999px;color:#0b0d14;font-weight:600;background:#7dd3fc}.pill-btn svg{margin-right:6px}.rooms{flex:1;display:flex;flex-direction:column;justify-content:space-around}.rooms.compact .room{padding:4px 0}.rooms.compact .room-temp{font-size:28px}.rooms.compact .room-name{font-size:12px}.room{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.09)}.room:last-child{border-bottom:0}.room-name{font-size:14px;color:#f5f7fbb8}.room-vals{display:flex;align-items:baseline;justify-content:space-between;margin-top:2px}.room-temp{font-size:46px;font-weight:200;letter-spacing:-.03em;line-height:1.05}.room-temp sup{font-size:.5em;font-weight:300;vertical-align:top;position:relative;top:.25em;margin-left:2px;color:#7dd3fc}.room-hum{display:flex;align-items:center;font-size:15px;color:#f5f7fbb8}.room-hum svg{margin-right:4px;color:#7dd3fc}.chip-btn{display:flex;align-items:center;padding:7px 12px;border-radius:999px;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);font-size:13px;font-weight:500}.chip-btn svg{margin-right:6px}.lights{flex:1;min-height:0;display:flex;flex-wrap:wrap;align-content:flex-start;margin:-5px;overflow-y:auto;-webkit-overflow-scrolling:touch}.cols-1 .light{width:calc(100% - 10px)}.cols-2 .light{width:calc(50% - 10px)}.cols-3 .light{width:calc(33.333% - 10px)}.cols-4 .light{width:calc(25% - 10px)}.cols-5 .light{width:calc(20% - 10px)}.cols-6 .light{width:calc(16.666% - 10px)}.lights.compact .light{min-height:70px;padding:10px 12px}.lights.compact .light-icon{width:30px;height:30px;margin-bottom:6px}.lights.list .light{flex-direction:row;align-items:center;justify-content:flex-start;min-height:0;padding:7px 10px;border-radius:14px}.lights.list .light-icon{width:28px;height:28px;margin:0 8px 0 0;flex-shrink:0}.lights.list .light-name{min-width:0;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lights.list .light-state{display:none}.light{width:calc(50% - 10px);margin:5px;min-height:96px;flex-grow:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:14px;border-radius:20px;text-align:left;background:#ffffff0f;border:1px solid rgba(255,255,255,.07);transition:background .25s,border-color .25s,transform .15s,box-shadow .25s}.light:active{transform:scale(.96)}.light-icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;color:#f5f7fbb8;margin-bottom:12px;transition:background .25s,color .25s,box-shadow .25s}.light-name{font-size:15px;font-weight:500;line-height:1.2}.light-state{font-size:12px;color:#f5f7fb7a;margin-top:3px}.light.on{background:#fbbf2429;border-color:#fbbf2480;box-shadow:0 0 30px #fbbf241f}.light.on .light-icon{background:#fbbf24;color:#1a1205;box-shadow:0 0 22px #fbbf248c}.light.on .light-state{color:#f5f7fbb8}.light.na{opacity:.45}.seg{display:flex;background:#00000040;border-radius:999px;padding:3px}.seg button{padding:5px 12px;border-radius:999px;font-size:12px;font-weight:500;color:#f5f7fbb8}.seg .active{background:#ffffff24;color:#f5f7fb}.cam-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.seg-inline{align-self:flex-start;flex-shrink:0;max-width:100%;margin-bottom:10px;overflow-x:auto;-webkit-overflow-scrolling:touch}.seg-inline::-webkit-scrollbar{display:none}.seg-inline button{flex-shrink:0;white-space:nowrap}.seg-full{align-self:stretch}.seg-full button{flex:1 0 auto;text-align:center}.cam{position:relative;flex:1;min-height:120px;border-radius:18px;overflow:hidden;background:#00000073;cursor:pointer}.cam img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.cam.fit-width img{top:50%;height:auto;transform:translateY(-50%)}.cam.fit-height img{left:50%;width:auto;transform:translate(-50%)}.cam.fit-width,.cam.fit-height{background:#000}.cam-empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:13px}.cam-empty svg{margin-bottom:8px}.live{position:absolute;top:10px;left:10px;display:flex;align-items:center;padding:3px 8px;border-radius:6px;background:#00000080;font-size:10px;font-weight:700;letter-spacing:.08em}.live i{width:6px;height:6px;border-radius:50%;background:#fb7185;margin-right:5px;-webkit-animation:pulse 1.6s infinite;animation:pulse 1.6s infinite}@-webkit-keyframes pulse{50%{opacity:.3}}@keyframes pulse{50%{opacity:.3}}.status-row{display:flex;align-items:center;padding:10px 0;color:#f5f7fbb8}.status-row+.status-row{border-top:1px solid rgba(255,255,255,.09)}.status-icon{width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#34d39926;color:#34d399;margin-right:12px}.status-text{flex:1;display:flex;flex-direction:column;min-width:0}.status-text b{font-size:14px;font-weight:500;color:#f5f7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.status-text small{font-size:12px;color:#f5f7fb7a;margin-top:2px}.status-row.alert .status-icon{background:#fb718533;color:#fb7185}.status-row.alert small{color:#fb7185}.sheet-layer{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 5vw 9vh;padding-bottom:calc(9vh + 56px);background:linear-gradient(to top,#00000059,#0000 60%);-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease}.sheet{position:relative;width:460px;max-width:100%;max-height:72vh;overflow:hidden;border-radius:30px;border:1px solid rgba(255,255,255,.16);box-shadow:0 30px 80px #00000073;transform-origin:100% 100%;-webkit-animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1);animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1)}.sheet-wide{width:640px}.sheet .lights{overflow:visible}.sheet-cameras .cam{height:300px;flex:none}.sheet-glass{position:absolute;inset:0;overflow:hidden;background:#10131c}.glass-layer{position:absolute;background-size:cover;background-position:center}.glass-layer.fresh{-webkit-animation:fade-in 1.2s ease;animation:fade-in 1.2s ease}.sheet-tint{position:absolute;inset:0;background:#0a0c1480}.sheet-inner{position:relative;padding:20px 22px 22px;max-height:72vh;overflow-y:auto;-webkit-overflow-scrolling:touch}.sheet .rooms .room{padding:12px 0}.sheet-actions{display:flex;align-items:center}.sheet-close{width:32px;height:32px;margin-left:8px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1f;color:#f5f7fbb8}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes sheet-in{0%{opacity:0;-webkit-transform:translateY(24px) scale(.92)}}@keyframes sheet-in{0%{opacity:0;transform:translateY(24px) scale(.92)}}.modal{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:16px;background:#0009}.modal-box{width:100%;max-width:560px;max-height:92%;overflow-y:auto;-webkit-overflow-scrolling:touch;background:#141620f7;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:24px;box-shadow:0 30px 80px #0009}.modal-wide{max-width:960px}.modal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.modal-head h2{font-size:19px;font-weight:600}.modal-title{display:flex;align-items:center}.modal-title svg{margin-right:10px;color:#7dd3fc}.icon-btn{color:#f5f7fb7a}.cam-full{border-radius:18px;overflow:hidden;background:#000}.cam-full img{display:block;width:100%;max-height:72vh;object-fit:contain}.tabs{display:flex;padding:4px;margin-bottom:18px;border-radius:14px;background:#ffffff0d}.tabs button{flex:1;padding:9px;border-radius:10px;font-size:14px;font-weight:500;color:#f5f7fbb8}.tabs .active{background:#ffffff1a;color:#f5f7fb}.modal-box .hint{position:static;opacity:1;text-align:left;font-size:13px;color:#f5f7fb7a;letter-spacing:0;margin-bottom:14px;line-height:1.45}.modal-box .hint.small{font-size:12px;margin:4px 0 0;text-align:center}.drop-zone{position:relative;display:block;text-align:center;padding:26px 16px;margin-bottom:14px;border:2px dashed rgba(255,255,255,.16);border-radius:20px;background:#ffffff08}.drop-zone svg{margin:0 auto 8px}.drop-zone input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.drop-zone.busy{opacity:.6}.drop-zone.over{border-color:#7dd3fc;background:#7dd3fc14}.upload-error{margin:-6px 0 12px}.drop-title{font-size:14px;font-weight:500}.thumbs{display:flex;flex-wrap:wrap;margin:0 -4px 10px}.thumb{position:relative;width:72px;height:72px;margin:4px;border-radius:12px;background-size:cover;background-position:center}.thumb-del{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#000000a6}.option{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-top:1px solid rgba(255,255,255,.09);font-size:14px;color:#f5f7fbb8}.option select{padding:8px 12px;border-radius:10px;background:#ffffff14;color:#f5f7fb;font-size:13px}.option select option{color:#000}.option-col{display:block}.chip-picker{margin-top:8px}.chip-picker .check{margin:4px 0;color:#f5f7fb}.field{display:block;margin-bottom:14px}.field span{display:block;font-size:12px;color:#f5f7fb7a;margin-bottom:6px}.field input{width:100%;padding:13px 14px;border-radius:12px;font-size:15px;background:#ffffff0f;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text}.field input:focus{border-color:#7dd3fc}.table-wrap{max-height:240px;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:12px;background:#0003}.diag{width:100%;border-collapse:collapse;font-size:12px}.diag td{padding:7px 10px;border-bottom:1px solid rgba(255,255,255,.09);word-break:break-all}.mono{font-family:Menlo,Roboto Mono,monospace}.strong{font-weight:600}.muted{color:#f5f7fb7a}.modal-foot{display:flex;justify-content:space-between;align-items:center;margin-top:18px}.btn{display:flex;align-items:center;padding:11px 18px;border-radius:14px;font-size:14px;font-weight:600}.btn svg{margin-right:6px}.btn-accent{background:#7dd3fc;color:#0b0d14}.btn-danger{background:#fb71851f;color:#fb7185}.type-list .type-row{display:flex;align-items:center;width:100%;padding:12px 6px;text-align:left;color:#f5f7fbb8;border-bottom:1px solid rgba(255,255,255,.09)}.type-list .type-row:last-child{border-bottom:0}.seg-wide{align-self:flex-start;display:inline-flex}.seg-wide button{padding:7px 16px;font-size:13px}.swatches{display:flex;flex-wrap:wrap}.swatch{width:34px;height:34px;border-radius:50%;margin:0 8px 6px 0;border:2px solid transparent}.swatch.active{border-color:#fff;box-shadow:0 0 0 2px #00000080 inset}.swatch-auto{background:#ffffff1a;font-size:12px;font-weight:700;color:#f5f7fbb8}.icon-grid{display:flex;flex-wrap:wrap;margin:0 -3px}.icon-grid button{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0d;color:#f5f7fbb8}.icon-grid .active{background:#fff3;color:#f5f7fb}.check{display:flex;align-items:center;font-size:14px;color:#f5f7fbb8;margin:6px 0 10px}.check input{margin-right:10px;width:18px;height:18px}.check-row{padding:10px 0;border-top:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.09);margin-bottom:14px}.items{border-radius:14px;background:#0003;padding:4px 8px 8px}.item-block{border-bottom:1px solid rgba(255,255,255,.09)}.item-row{display:flex;align-items:center;padding:8px 0}.item-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ffffff14;margin-right:10px;flex-shrink:0}.item-main{flex:1;min-width:0;display:flex;flex-direction:column}.item-main input{padding:6px 8px;margin-left:-8px;border-radius:8px;font-size:14px;-webkit-user-select:text;user-select:text}.item-main input:focus{background:#ffffff0f}.item-main .mono{font-size:11px;color:#f5f7fb7a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item-row .icon-btn{width:32px;height:32px;display:flex;align-items:center;justify-content:center}.na-tag{font-style:normal;color:#fb7185}.link{display:flex;align-items:center;font-size:11px;color:#7dd3fc;margin-top:3px;text-align:left}.link svg{margin-right:4px}.btn-ghost{margin-top:8px;background:#ffffff14;color:#f5f7fb;font-weight:500}.btn[disabled]{opacity:.4}.auth{margin-bottom:16px;padding:14px 16px 2px;border-radius:16px;background:#ffffff0a}.auth-title{font-size:15px;font-weight:600;margin-bottom:12px}.auth-or{display:flex;align-items:center;margin:-2px 0 12px;font-size:12px;color:#f5f7fb7a}.auth-or:before,.auth-or:after{content:"";flex:1;height:1px;background:#ffffff1f}.auth-or span{margin:0 12px}.auth .btn-login{width:100%;justify-content:center;margin:0 0 4px}.auth-session{display:flex;align-items:center;justify-content:space-between;margin:-2px 0 6px;font-size:13px;color:#f5f7fbb8}.auth-session .btn{margin:0 0 0 12px;flex-shrink:0}.ha-storage{margin:0 0 14px}.ha-storage .hint{margin:0}.migration{margin:0 0 14px;padding:12px 14px;border-radius:14px;background:#ffffff14}.migration p{margin:0 0 4px;font-size:14px}.picker{border-radius:14px;background:#00000040;padding:8px}.picker-search{display:flex;align-items:center;padding:4px 6px;border-radius:10px;background:#ffffff12;color:#f5f7fb7a}.picker-search input{flex:1;padding:8px;border:0;background:none;font-size:14px;color:#f5f7fb;-webkit-user-select:text;user-select:text}.picker .check{margin:8px 4px;font-size:13px}.picker-mode{margin-bottom:8px}.picker-list{max-height:260px;overflow-y:auto;-webkit-overflow-scrolling:touch}.picker-row{display:flex;flex-wrap:wrap;align-items:baseline;width:100%;padding:9px 6px;text-align:left;border-bottom:1px solid rgba(255,255,255,.09)}.picker-row:active{background:#ffffff14}.picker-name{flex:1;font-size:14px}.picker-state{font-size:12px;color:#f5f7fb7a;margin-left:8px}.picker-id{width:100%;font-size:11px;color:#f5f7fb7a;margin-top:2px}.picker-empty{padding:16px;text-align:center}.home-row{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.09)}.home-row-head{display:flex;align-items:center;margin-bottom:8px}.home-input{flex:1;min-width:0;padding:8px 10px;border-radius:10px;font-size:15px;font-weight:600;background:#ffffff0f;-webkit-user-select:text;user-select:text}.row-btns{display:flex}.row-btns .btn{margin:0 8px 8px 0}.json{display:block;width:100%;height:120px;padding:10px;border-radius:12px;font:12px Menlo,monospace;color:#f5f7fb;background:#0000004d;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text;resize:vertical}.c-red{color:#fb7185}.small{font-size:12px}.ac-wrap,.media-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.ac{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-main{display:flex;align-items:center}.ac-step{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;border:1px solid rgba(255,255,255,.14);margin:0 10px}.ac-step:active{background:#ffffff2e}.ac-step[disabled]{opacity:.3}.ac-dial{position:relative}.ac-dial svg{position:absolute;top:0;left:0}.ac-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-target{font-size:44px;font-weight:200;letter-spacing:-.03em;line-height:1}.ac.compact .ac-target{font-size:34px}.ac-target sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.ac-mode{font-size:12px;color:#f5f7fbb8;margin-top:4px}.ac-room{font-size:11px;color:#f5f7fb7a;margin-top:2px}.ac-modes{display:flex;flex-wrap:wrap;justify-content:center;margin-top:10px}.ac-mode-btn{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0f;border:1px solid transparent;color:#f5f7fbb8}.ac-mode-btn.active{color:#fff;border-color:#fff6}.ac-fan{margin-top:10px;align-self:center}.ac-fan button{padding:6px 10px;font-size:12px}.media-wrap{flex:1 0 auto}.media{flex:1 0 auto;display:flex;flex-direction:column}.media>:first-child{margin-top:auto}.media>:last-child{margin-bottom:auto}.media.short .media-art{width:52px;height:52px;border-radius:12px}.media.short .media-controls{margin:8px 0 2px}.media.short .media-controls button{width:38px;height:38px}.media.short .media-controls .media-play{width:46px;height:46px}.media-top{display:flex;align-items:center}.media-art{width:72px;height:72px;flex-shrink:0;border-radius:14px;background-size:cover;background-position:center;box-shadow:0 8px 24px #00000059}.media.big .media-art{width:112px;height:112px;border-radius:18px}.media-art-empty{display:flex;align-items:center;justify-content:center;background:#ffffff12;color:#f5f7fb7a}.media-art-empty.big{width:96px;height:96px;border-radius:24px;margin-bottom:12px}.media-info{flex:1;min-width:0;margin-left:14px}.media-title{font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media.big .media-title{font-size:19px}.media-sub{font-size:13px;color:#f5f7fbb8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media-state{display:flex;align-items:center;font-size:11px;color:#f5f7fb7a;margin-top:6px;text-transform:uppercase;letter-spacing:.08em}.media-state.on{color:#34d399}.eq{display:inline-flex;align-items:flex-end;height:10px;margin-right:6px}.eq b{width:2px;margin-right:2px;background:#34d399;-webkit-animation:eq .9s ease-in-out infinite;animation:eq .9s ease-in-out infinite}.eq b:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.eq b:nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}@-webkit-keyframes eq{0%,to{height:3px}50%{height:10px}}@keyframes eq{0%,to{height:3px}50%{height:10px}}.icon-round{width:36px;height:36px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;color:#f5f7fbb8;margin-left:8px}.media-controls{display:flex;align-items:center;justify-content:center;margin:14px 0 6px}.media-controls button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:#f5f7fb;margin:0 6px}.media-controls button:active{background:#ffffff1a}.media-controls .media-play{width:56px;height:56px;background:#ffffffeb;color:#0b0d14}.media-volume{display:flex;align-items:center;margin-top:8px}.media-volume button{width:32px;height:32px;display:flex;align-items:center;justify-content:center;color:#f5f7fbb8}.vol-bar{position:relative;flex:1;height:6px;margin:0 10px;border-radius:3px;background:#ffffff1f;cursor:pointer}.vol-bar:before{content:"";position:absolute;inset:-12px 0}.vol-fill{position:absolute;top:0;left:0;bottom:0;border-radius:3px;background:#f5f7fb}.vol-num{width:28px;text-align:right;font-size:12px;color:#f5f7fb7a}.media-sources{margin:10px -4px 0;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}.media-sources::-webkit-scrollbar{display:none}.media-sources .chip{flex-shrink:0;white-space:nowrap}.media-off{align-items:center;text-align:center}.media-power{margin:14px 0 0}.media-hint{margin-top:10px;max-width:220px}.dot-live{display:inline-block;width:6px;height:6px;border-radius:50%;background:#34d399;margin-right:6px;vertical-align:middle}.weather{flex:1;display:flex;flex-direction:column;min-height:0}.weather-now{display:flex;align-items:center}.weather-temp{font-size:48px;font-weight:200;letter-spacing:-.03em;line-height:1;margin:0 14px 0 10px}.weather-temp sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.weather-desc{display:flex;flex-direction:column;min-width:0}.weather-desc b{font-size:15px;font-weight:500}.weather-desc span{font-size:12px;color:#f5f7fb7a;margin-top:2px}.weather-facts{display:flex;flex-wrap:wrap;margin-top:12px;font-size:13px;color:#f5f7fbb8}.weather-facts span{display:flex;align-items:center;margin-right:16px}.weather-facts svg{margin-right:5px;color:#f5f7fb7a}.weather-rooms{margin-top:10px;border-top:1px solid rgba(255,255,255,.09)}.wroom{display:flex;align-items:center;height:36px;font-size:14px}.wroom-name{flex:1;min-width:0;color:#f5f7fbb8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wroom-hum{display:flex;align-items:center;font-size:12px;color:#f5f7fb7a;margin-right:12px}.wroom-hum svg{margin-right:3px;color:#7dd3fc}.wroom-temp{font-weight:500;font-size:16px}.room-name svg{display:inline-block;vertical-align:-2px;margin-right:6px;color:#f5f7fbb8}.weather-hours{display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px -4px 0;padding-bottom:4px}.weather-hours::-webkit-scrollbar{display:none}.hour{flex-shrink:0;width:52px;display:flex;flex-direction:column;align-items:center;font-size:12px}.hour svg{margin:6px 0;color:#f5f7fbb8}.hour b{font-weight:500;font-size:14px}.weather-days{margin-top:12px;border-top:1px solid rgba(255,255,255,.09);padding-top:4px}.day{display:flex;align-items:center;padding:7px 0;font-size:14px}.day-name{width:72px;color:#f5f7fbb8}.day svg{color:#f5f7fbb8;margin-right:10px}.day-lo{width:34px;text-align:right;color:#f5f7fb7a}.day-hi{width:34px}.day-bar{position:relative;flex:1;height:4px;margin:0 10px;border-radius:2px;background:#ffffff14}.day-bar i{position:absolute;top:0;bottom:0;border-radius:2px;background:linear-gradient(to right,#0891b2,#d97706)}.ambient-weather{display:flex;align-items:center;margin-top:2.4vh;font-size:2.8vh;color:#f5f7fb}.ambient-weather svg{width:4.2vh;height:4.2vh}.aw-temp{font-size:4.6vh;font-weight:300;margin:0 1.6vh 0 1.2vh}.aw-desc{display:flex;flex-direction:column;font-size:2.2vh;color:#f5f7fbb8;line-height:1.25}.aw-desc small{font-size:1.9vh;color:#f5f7fb7a}.tappable{cursor:pointer;border-radius:10px;transition:background .15s}.tappable:active{background:#ffffff12}.detail{position:relative;text-align:left}.detail-hero{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px}.hero-value{font-size:52px;font-weight:200;letter-spacing:-.03em;line-height:1;margin-bottom:6px}.chips{display:flex;flex-wrap:wrap;margin:0 -4px 12px}.chip{display:flex;align-items:baseline;margin:4px;padding:8px 12px;border-radius:12px;background:#ffffff0f;border:1px solid transparent;font-size:13px;color:#f5f7fbb8}.chip b{margin-left:8px;font-weight:600;color:#f5f7fb}.chip.active{border-color:#ffffff59;background:#ffffff1f;color:#f5f7fb}.detail-tools{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.chip-btn.on{background:#fff3}.chart{position:relative;margin:0 auto}.chart svg{display:block;overflow:visible}.chart-tick{fill:#f5f7fb7a;font-size:11px}.chart-legend{display:flex;justify-content:flex-end;font-size:12px;color:#f5f7fb7a;margin-top:2px}.chart-legend span{display:flex;align-items:center;margin-left:14px}.chart-legend i{width:12px;height:12px;border-radius:3px;margin-right:6px}.chart-legend i.key-line{height:2px;border-radius:1px}.chart-legend i.key-na{border:1px dashed rgba(255,255,255,.35)}.chart-tip{position:absolute;top:0;padding:7px 10px;border-radius:10px;pointer-events:none;white-space:nowrap;transform:translate(-50%);background:#080a10eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 8px 24px #0006;display:flex;flex-direction:column;font-size:12px;color:#f5f7fbb8}.chart-tip b{font-size:15px;color:#f5f7fb}.chart-empty{height:210px;display:flex;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:14px}.stats{display:flex;flex-wrap:wrap;margin:14px -5px 0}.stat{flex:1;min-width:120px;margin:5px;padding:12px 14px;border-radius:14px;background:#ffffff0d}.stat-label{font-size:12px;color:#f5f7fb7a}.stat-value{font-size:22px;font-weight:300;margin-top:4px;white-space:nowrap}.stat-note{font-size:11px;color:#f5f7fb7a;margin-top:2px}.detail-foot{margin-top:10px}.detail .table-wrap{max-height:210px}.root{height:100%}@supports (backdrop-filter: blur(1px)){.q-full .panel,.q-full .glance,.q-full .round,.q-full .chip-btn{backdrop-filter:blur(18px) saturate(140%)}.q-full .panel{background:#0c0e1652}.q-full .modal{backdrop-filter:blur(6px)}.q-full .modal-box{background:#141620d1;backdrop-filter:blur(24px) saturate(150%)}}.q-lite .slide{transform:none!important;transition:opacity .6s linear}.q-lite .soft{display:none}.q-lite .shade.deep{background-color:#04060cd1}.q-lite .sheet-glass .glass-layer{display:none}.q-lite .panel,.q-lite .modal-box,.q-lite .sheet,.q-lite .glance,.q-lite .cell.dragged .panel,.q-lite .light.on,.q-lite .light.on .light-icon,.q-lite .media-art,.q-lite .badge-btn{box-shadow:none!important}.q-lite .ambient-clock,.q-lite .ambient .header{text-shadow:none}.q-lite .eq b,.q-lite .live i,.q-lite .editing .cell,.q-lite .sheet,.q-lite .sheet-layer{-webkit-animation:none!important;animation:none!important}.q-lite .controls,.q-lite .ambient{transition-duration:.2s}.q-lite .cell,.q-lite .light,.q-lite .light-icon,.q-lite .soft{transition:none}@media(max-width:900px),(orientation:portrait){.ambient{display:block;padding-top:0}.ambient-clock{position:absolute;left:6vw;bottom:24vh}.ambient-time{font-size:13vh}.ambient-date{font-size:2.2vh}.glances{position:absolute;left:6vw;right:6vw;bottom:10vh;max-width:none;justify-content:flex-start}.glance{margin:6px 8px 0 0}.controls{padding:16px;padding-top:max(16px,env(safe-area-inset-top))}}@media(max-width:700px){.ambient-clock{left:6vw;right:6vw;text-align:center}.ambient-weather,.glances{justify-content:center}.glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.glance span{display:none}.glance svg{margin:0;width:22px;height:22px}}@media(max-width:900px),(orientation:portrait){.bar-date,.conn{display:none}.sheet-layer{justify-content:center;padding:0 12px 12px;padding-bottom:max(12px,env(safe-area-inset-bottom))}.sheet,.sheet-wide{width:100%}.sheet-cameras .cam{height:220px}.hero-value{font-size:40px}.stat{min-width:40%}.rooms .room-temp{font-size:36px}}.ambient.lock-size-xs .ambient-time{font-size:10vh}.ambient.lock-size-s .ambient-time{font-size:15vh}.ambient.lock-size-l .ambient-time{font-size:28vh}.ambient.lock-size-xl .ambient-time{font-size:34vh}.ambient.lock-center,.ambient.lock-top{flex-direction:column;align-items:center;justify-content:flex-end}.ambient.lock-top{justify-content:flex-start;padding-top:10vh}.ambient.lock-center .ambient-clock,.ambient.lock-top .ambient-clock{position:static;text-align:center}.ambient.lock-center .ambient-weather,.ambient.lock-top .ambient-weather{justify-content:center}.ambient.lock-center .glances,.ambient.lock-top .glances{position:static;max-width:none;justify-content:center;margin-top:3vh}.ambient.lock-center .glance,.ambient.lock-top .glance{margin:6px 5px 0}.ambient.lock-top .ambient-clock{display:flex;flex-direction:column;align-items:center}.ambient-date.above{margin:0 0 1vh}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .ambient-weather{justify-content:flex-start}.ambient.chips-icons .glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.ambient.chips-icons .glance span{display:none}.ambient.chips-icons .glance svg{margin:0;width:22px;height:22px}.ambient.chips-text .glance{width:auto;height:auto;padding:9px 16px 9px 13px;border-radius:999px}.ambient.chips-text .glance span{display:inline}.ambient.chips-text .glance svg{margin-right:8px;width:18px;height:18px}@media(max-width:900px),(orientation:portrait){.ambient.lock-size-xs .ambient-time{font-size:7vh}.ambient.lock-size-s .ambient-time{font-size:10vh}.ambient.lock-size-m .ambient-time{font-size:13vh}.ambient.lock-size-l .ambient-time{font-size:17vh}.ambient.lock-size-xl .ambient-time{font-size:21vh}}@media(max-width:700px){.ambient.lock-size-xs .ambient-time{font-size:15vw}.ambient.lock-size-s .ambient-time{font-size:20vw}.ambient.lock-size-m .ambient-time{font-size:26vw}.ambient.lock-size-l .ambient-time{font-size:31vw}.ambient.lock-size-xl .ambient-time{font-size:35vw}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .glances{justify-content:flex-start}}.ambient.customizing{transform:scale(.9)}.ambient.customizing .ambient-clock,.ambient.customizing .glances{pointer-events:auto;cursor:pointer;border-radius:18px;padding:10px 14px;border:1.5px dashed rgba(255,255,255,.55);background:#ffffff0f}.ambient.customizing .glances{min-height:64px;min-width:120px}.glance-add{color:#f5f7fbb8}.lock-ui{position:absolute;inset:0;z-index:30;pointer-events:none}.lock-top{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;padding-top:max(16px,env(safe-area-inset-top));pointer-events:auto;font-size:14px;color:#f5f7fbb8;text-shadow:0 1px 8px rgba(0,0,0,.5)}.lock-modal{position:absolute;inset:0;pointer-events:auto;display:flex;align-items:center;justify-content:center;background:#00000059}.lock-panel{position:relative;width:420px;max-width:calc(100% - 24px);max-height:80%;overflow-y:auto;padding:16px 18px 10px;border-radius:24px;pointer-events:auto;background:#141620eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 20px 60px #00000080}.lock-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;font-size:16px}.lock-fonts{display:flex;margin:0 -4px 12px}.lock-font{flex:1;margin:0 4px;height:64px;border-radius:14px;font-size:34px;background:#ffffff0f;border:1.5px solid transparent}.lock-font.on{border-color:#7dd3fc;background:#7dd3fc1f}.lock-colors{display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;margin:0 -18px 6px;padding:4px 18px;-webkit-overflow-scrolling:touch;scrollbar-width:none}.lock-colors::-webkit-scrollbar{display:none}.lock-colors .lock-color{flex-shrink:0}.lock-color{width:34px;height:34px;margin-right:10px;border-radius:50%;border:2px solid rgba(255,255,255,.15)}.lock-color.on{border-color:#fff;box-shadow:0 0 0 3px #ffffff40}.lock-widget{display:flex;align-items:center;border-top:1px solid rgba(255,255,255,.09)}.lock-widget .check{flex:1;margin:10px 0}.lock-widget .check svg{margin-right:8px;color:#f5f7fbb8}.lock-widget .icon-btn{width:36px;height:36px;display:flex;align-items:center;justify-content:center}.lock-widget .icon-btn[disabled]{opacity:.25}.option-hint{display:block;margin-top:2px;font-size:12px;color:#f5f7fb7a}.device-parts{margin:0 0 8px 52px}.device-part{display:flex;align-items:center;padding:2px 0}.device-part input[type=checkbox]{width:18px;height:18px;margin:0 8px 0 0;flex-shrink:0}.device-part .part-name{flex:1;min-width:0;padding:6px 10px;border-radius:10px;font-size:13px;background:#ffffff0d;border:1px solid transparent;color:#f5f7fb}.device-part .part-name:focus{border-color:#ffffff17;outline:none}.device-part .icon-btn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.device-part .icon-btn[disabled]{opacity:.25}.device-part.off .part-name{opacity:.45;text-decoration:line-through}.photos-count{display:flex;align-items:center;justify-content:space-between;margin:12px 0 4px;font-size:13px;color:#f5f7fbb8}.photos-count a{color:#7dd3fc;text-decoration:none}.ambient.widgets-top .glances,.ambient.widgets-bottom .glances{position:absolute;left:4vw;right:4vw;max-width:none;margin:0;justify-content:center}.ambient.widgets-top .glances{top:4vh;top:max(4vh,env(safe-area-inset-top));bottom:auto}.ambient.widgets-bottom .glances{bottom:7vh;bottom:calc(1.5vh + 48px);top:auto}.ambient.widgets-top .glance,.ambient.widgets-bottom .glance{margin:6px 5px 0}.ambient.lock-top.widgets-top{padding-top:18vh}.ambient-time,.ambient-clock,.glances{transition:color 1.2s ease}.text-contrast .ambient-time,.text-contrast .ambient-date,.text-contrast .ambient-weather,.text-contrast .aw-desc,.text-contrast .aw-desc small,.text-contrast .glance,.text-contrast .glance svg{color:inherit}.text-contrast .ambient-date{opacity:.85}.text-contrast .aw-desc,.text-contrast .aw-desc small{opacity:.8}.text-contrast .glance.lit svg{color:#fbbf24}.text-contrast.ink-dark,.text-contrast.ink-dark .ambient-time{text-shadow:0 1px 24px rgba(255,255,255,.45)}.glances.text-contrast.ink-dark .glance{background:#ffffff80;border-color:#0000001a}.glances.text-contrast.ink-dark .glance.alert{color:#fff}.ambient-clock.ink-fixed .ambient-time,.ambient-clock.ink-fixed .ambient-date,.ambient-clock.ink-fixed .ambient-weather,.ambient-clock.ink-fixed .aw-desc,.ambient-clock.ink-fixed .aw-desc small,.ambient-clock.ink-fixed .ambient-weather svg{color:inherit}.ambient-clock.ink-fixed .ambient-date{opacity:.85}.ambient-clock.ink-fixed .aw-desc,.ambient-clock.ink-fixed .aw-desc small{opacity:.8}.glances.ink-fixed .glance,.glances.ink-fixed .glance svg{color:inherit}.glances.ink-fixed .glance.lit svg{color:#fbbf24}.glances.ink-fixed .glance.alert,.glances.ink-fixed .glance.alert svg,.glances.ink-fixed .glance.warn,.glances.ink-fixed .glance.warn svg{color:#fff}.lock-color-custom{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;background:conic-gradient(#f87171,#fbbf24,#4ade80,#22d3ee,#818cf8,#f472b6,#f87171);background-color:#888}.lock-color-custom input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer;border:0;padding:0}.lock-color-custom span{color:#fff;font-weight:800;font-size:14px;text-shadow:0 0 4px rgba(0,0,0,.6);pointer-events:none}.hex-input{width:110px;height:36px;padding:0 10px;border-radius:10px;background:#ffffff14;font-family:monospace;font-size:15px}.hex-input.invalid{box-shadow:inset 0 0 0 1.5px #f87171}.lock-color-same{width:auto;padding:0 12px;border-radius:17px;font-size:13px;white-space:nowrap;flex-shrink:0;color:#fff;background:#ffffff1a}.lock-color-contrast{background:linear-gradient(135deg,#fff 50%,#111 50%)}.lock-color-contrast{padding:0}.lock-color-contrast span{display:block;color:#8c8c8c;font-size:15px;font-weight:800;line-height:30px;text-align:center}.screen-dim{position:fixed;inset:0;z-index:9000;background:#000;pointer-events:none;transition:opacity .8s ease}.screen-dim.asleep{pointer-events:auto}.ambient.lock-grid{display:block;padding:0}.ambient.lock-grid .ambient-clock,.ambient.lock-grid .glances{position:absolute;display:flex;flex-direction:column;box-sizing:border-box;max-width:none;margin:0;overflow:hidden}.ambient.lock-grid .glances{flex-direction:row;flex-wrap:wrap;align-content:flex-start}.ambient.lock-grid .glance{margin:4px}.ambient.lock-grid .ambient-clock.g-left{align-items:flex-start;text-align:left}.ambient.lock-grid .ambient-clock.g-center{align-items:center;text-align:center}.ambient.lock-grid .ambient-clock.g-right{align-items:flex-end;text-align:right}.ambient.lock-grid .ambient-clock.g-top{justify-content:flex-start}.ambient.lock-grid .ambient-clock.g-middle{justify-content:center}.ambient.lock-grid .ambient-clock.g-bottom{justify-content:flex-end}.ambient.lock-grid .g-left .ambient-weather{justify-content:flex-start}.ambient.lock-grid .g-center .ambient-weather{justify-content:center}.ambient.lock-grid .g-right .ambient-weather{justify-content:flex-end}.ambient.lock-grid .glances.g-left{justify-content:flex-start}.ambient.lock-grid .glances.g-center{justify-content:center}.ambient.lock-grid .glances.g-right{justify-content:flex-end}.ambient.lock-grid .glances.g-middle{align-content:center}.ambient.lock-grid .glances.g-bottom{align-content:flex-end}.ambient.customizing.lock-grid .ambient-clock,.ambient.customizing.lock-grid .glances{border-color:transparent;background:none;padding:0;min-height:0;min-width:0}.grid-editor{position:absolute;z-index:5;pointer-events:none;background-image:linear-gradient(to right,rgba(255,255,255,.14) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.14) 1px,transparent 1px);background-size:8.3333% 8.3333%;outline:1px solid rgba(255,255,255,.14)}.grid-box{position:absolute;box-sizing:border-box;pointer-events:auto;cursor:move;border-radius:12px;border:1.5px dashed rgba(255,255,255,.7);background:#7dd3fc1a}.grid-widgets{background:#fcd34d1a}.grid-label{position:absolute;top:6px;left:8px;font-size:12px;color:#fff;padding:2px 8px;border-radius:8px;background:#00000073}.grid-resize{position:absolute;right:-2px;bottom:-2px;width:28px;height:28px;cursor:nwse-resize;border-radius:0 0 12px;background:linear-gradient(135deg,transparent 50%,rgba(255,255,255,.85) 50%)}.lock-top-btns{display:flex;align-items:center}.lock-top-btns .pill-btn{margin-left:8px;display:inline-flex;align-items:center}.lock-top-btns .pill-btn svg{margin-right:6px}.lock-top-btns .pill-btn:not(.accent-bg){background:#ffffff24;color:#fff}.lock-top-btns .pill-btn.on:not(.accent-bg){background:#7dd3fc;color:#0b0d14}.settings-section{margin-top:18px;padding-top:14px;border-top:1px solid rgba(255,255,255,.09)}.settings-section:first-child,.migration+.settings-section{margin-top:0;padding-top:0;border-top:0}.section-title{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#f5f7fb7a;margin-bottom:10px}.lock-sec{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#f5f7fb7a;margin:14px 0 8px}.lock-panel-head+.lock-sec{margin-top:0}';
var Re, K, Cn, jo, mt = 0, Gi = [], ie = Z, Qo = ie.__b, No = ie.__r, Fo = ie.diffed, Ro = ie.__c, qo = ie.unmount, Wo = ie.__;
function Et(t, e) {
  ie.__h && ie.__h(K, t, mt || e), mt = 0;
  var n = K.__H || (K.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function x(t) {
  return mt = 1, Ur(Ji, t);
}
function Ur(t, e, n) {
  var i = Et(Re++, 2);
  if (i.t = t, !i.__c && (i.__ = [Ji(void 0, e), function(c) {
    var h = i.__N ? i.__N[0] : i.__[0], A = i.t(h, c);
    h !== A && (i.__N = [A, i.__[1]], i.__c.setState({}));
  }], i.__c = K, !K.__f)) {
    var s = function(c, h, A) {
      if (!i.__c.__H) return !0;
      var u = !1, m = i.__c.props !== c;
      if (i.__c.__H.__.some(function(f) {
        if (f.__N) {
          u = !0;
          var p = f.__[0];
          f.__ = f.__N, f.__N = void 0, p !== f.__[0] && (m = !0);
        }
      }), a) {
        var l = a.call(this, c, h, A);
        return u ? l || m : l;
      }
      return !u || m;
    };
    K.__f = !0;
    var a = K.shouldComponentUpdate, r = K.componentWillUpdate;
    K.componentWillUpdate = function(c, h, A) {
      if (this.__e) {
        var u = a;
        a = void 0, s(c, h, A), a = u;
      }
      r && r.call(this, c, h, A);
    }, K.shouldComponentUpdate = s;
  }
  return i.__N || i.__;
}
function H(t, e) {
  var n = Et(Re++, 3);
  !ie.__s && _o(n.__H, e) && (n.__ = t, n.u = e, K.__H.__h.push(n));
}
function wo(t, e) {
  var n = Et(Re++, 4);
  !ie.__s && _o(n.__H, e) && (n.__ = t, n.u = e, K.__h.push(n));
}
function re(t) {
  return mt = 5, vo(function() {
    return { current: t };
  }, []);
}
function vo(t, e) {
  var n = Et(Re++, 7);
  return _o(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function Yr(t, e) {
  return mt = 8, vo(function() {
    return t;
  }, e);
}
function Xt(t) {
  var e = K.context[t.__c], n = Et(Re++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(K)), e.props.value) : t.__;
}
function Zr() {
  for (var t; t = Gi.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(Qt), e.__h.some(Kn), e.__h = [];
    } catch (n) {
      e.__h = [], ie.__e(n, t.__v);
    }
  }
}
ie.__b = function(t) {
  K = null, Qo && Qo(t);
}, ie.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Wo && Wo(t, e);
}, ie.__r = function(t) {
  No && No(t), Re = 0;
  var e = (K = t.__c).__H;
  e && (Cn === K ? (e.__h = [], K.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(Qt), e.__h.some(Kn), e.__h = [], Re = 0)), Cn = K;
}, ie.diffed = function(t) {
  Fo && Fo(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Gi.push(e) !== 1 && jo === ie.requestAnimationFrame || ((jo = ie.requestAnimationFrame) || Gr)(Zr)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Cn = K = null;
}, ie.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(Qt), n.__h = n.__h.filter(function(i) {
        return !i.__ || Kn(i);
      });
    } catch (i) {
      e.some(function(s) {
        s.__h && (s.__h = []);
      }), e = [], ie.__e(i, n.__v);
    }
  }), Ro && Ro(t, e);
}, ie.unmount = function(t) {
  qo && qo(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(i) {
    try {
      Qt(i);
    } catch (s) {
      e = s;
    }
  }), n.__H = void 0, e && ie.__e(e, n.__v));
};
var Vo = typeof requestAnimationFrame == "function";
function Gr(t) {
  var e, n = function() {
    clearTimeout(i), Vo && cancelAnimationFrame(e), setTimeout(t);
  }, i = setTimeout(n, 35);
  Vo && (e = requestAnimationFrame(n));
}
function Qt(t) {
  var e = K, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), K = e;
}
function Kn(t) {
  var e = K;
  t.__c = t.__(), K = e;
}
function _o(t, e) {
  return !t || t.length !== e.length || e.some(function(n, i) {
    return n !== t[i];
  });
}
function Ji(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Xi = "photoframe.quality", De = [];
function Ki() {
  try {
    return localStorage.getItem(Xi) || "auto";
  } catch {
    return "auto";
  }
}
function Jr(t) {
  try {
    localStorage.setItem(Xi, t);
  } catch {
  }
  De.forEach((e) => e());
}
function $i() {
  const t = navigator, e = /Android/i.test(navigator.userAgent);
  return typeof t.deviceMemory == "number" ? t.deviceMemory <= 2 ? "lite" : "full" : e && (!navigator.hardwareConcurrency || navigator.hardwareConcurrency <= 4) ? "lite" : "full";
}
function qe() {
  const t = Ki();
  return t === "auto" ? $i() : t;
}
function es() {
  const [t, e] = x(qe());
  return H(() => {
    const n = () => e(qe());
    return De.push(n), () => {
      De.splice(De.indexOf(n), 1);
    };
  }, []), t;
}
function Xr() {
  return qe() === "lite" ? 800 : 150;
}
const it = {}, Mn = [], Kr = 4;
function $r() {
  const t = qe() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  let e = screen.width * t, n = screen.height * t;
  const i = Math.min(1, (qe() === "lite" ? 1280 : 2560) / Math.max(e, n));
  return e = Math.round(e * i), n = Math.round(n * i), { w: e, h: n };
}
function ec() {
  const t = qe() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2), e = Math.max(screen.width, screen.height) * t;
  return Math.round(Math.min(qe() === "lite" ? 1280 : 2560, e));
}
function tc(t, e) {
  return new Promise((n) => {
    const i = new Image();
    i.onerror = () => n(t), i.onload = () => {
      const s = Math.max(i.naturalWidth, i.naturalHeight);
      if (!s || s <= e) {
        n(t);
        return;
      }
      const a = e / s, r = document.createElement("canvas");
      r.width = Math.round(i.naturalWidth * a), r.height = Math.round(i.naturalHeight * a);
      try {
        r.getContext("2d").drawImage(i, 0, 0, r.width, r.height), r.toBlob((c) => {
          r.width = r.height = 0, n(c ? URL.createObjectURL(c) : t);
        }, "image/jpeg", 0.85);
      } catch {
        n(t);
      }
    }, i.src = t;
  });
}
function Uo(t) {
  if (!t || /^(data|blob):/.test(t) || !HTMLCanvasElement.prototype.toBlob || t.indexOf("/api/photoframe/photo/") !== -1) return Promise.resolve(t);
  const e = ec(), n = t + "@" + e;
  if (n in it) return it[n];
  const i = tc(t, e);
  for (it[n] = i, Mn.push(n); Mn.length > Kr; ) {
    const s = Mn.shift(), a = it[s];
    delete it[s], a.then((r) => {
      /^blob:/.test(r) && URL.revokeObjectURL(r);
    });
  }
  return i;
}
const ts = "photoframe.fit";
function Kt() {
  try {
    return localStorage.getItem(ts) || "auto";
  } catch {
    return "auto";
  }
}
function nc(t) {
  try {
    localStorage.setItem(ts, t);
  } catch {
  }
  De.forEach((e) => e());
}
function oc() {
  const [t, e] = x(Kt());
  return H(() => {
    const n = () => e(Kt());
    return De.push(n), () => {
      De.splice(De.indexOf(n), 1);
    };
  }, []), t;
}
function ic(t, e) {
  const n = Kt();
  return !t || !e || n === "cover" ? !1 : n === "contain" ? !0 : t >= e != window.innerWidth >= window.innerHeight;
}
class Co {
  // baseUrl — адрес HA; token — отдаёт свежий access-токен входа через HA (lib/haAuth).
  constructor(e, n) {
    this.baseUrl = e, this.token = n, this.states = {}, this.loaded = !1, this.registry = {}, this.devices = {}, this.status = "idle", this.admin = !1, this.ws = null, this.msgId = 1, this.listeners = [], this.stopped = !1, this.pending = {}, this.subs = {}, this.emitTimer = 0, this.changed = null;
  }
  get isAdmin() {
    return this.admin;
  }
  // Путь на сервере HA (/media/…, /api/…) → полный адрес; рамка может быть открыта не с домена HA.
  resolveUrl(e) {
    return !e || /^(data:|blob:|https?:)/.test(e) ? e : this.baseUrl.replace(/\/+$/, "") + e;
  }
  subscribe(e) {
    return this.listeners.push(e), () => {
      this.listeners = this.listeners.filter((n) => n !== e);
    };
  }
  emitNow() {
    if (clearTimeout(this.emitTimer), this.emitTimer = 0, this.changed) {
      const e = {};
      for (const n in this.states) e[n] = this.states[n];
      for (const n in this.changed) e[n] = this.changed[n];
      this.states = e, this.changed = null;
    }
    this.listeners.forEach((e) => e());
  }
  emit() {
    this.emitTimer || (this.emitTimer = window.setTimeout(() => this.emitNow(), Xr()));
  }
  setStatus(e) {
    this.status = e, this.emitNow();
  }
  connect() {
    if (!this.baseUrl) {
      this.setStatus("idle");
      return;
    }
    this.stopped = !1, this.setStatus("connecting"), this.token().then((e) => {
      this.stopped || (e ? this.open(e) : (this.stopped = !0, this.setStatus("auth_invalid")));
    }, () => this.scheduleReconnect());
  }
  open(e) {
    const n = this.baseUrl.replace(/\/+$/, "").replace(/^http/, "ws") + "/api/websocket";
    let i;
    try {
      i = new WebSocket(n);
    } catch {
      this.scheduleReconnect();
      return;
    }
    this.ws = i, i.onmessage = (s) => {
      const a = JSON.parse(s.data);
      if (a.type === "auth_required")
        i.send(JSON.stringify({ type: "auth", access_token: e }));
      else if (a.type === "auth_invalid")
        this.stopped = !0, this.setStatus("auth_invalid"), i.close();
      else if (a.type === "auth_ok")
        this.setStatus("connected"), this.call({ type: "auth/current_user" }).then((r) => {
          this.admin = !!r.is_admin, this.emit();
        }, () => {
        }), this.send({ type: "subscribe_events", event_type: "state_changed" }), this.call({ type: "get_states" }).then((r) => {
          const c = {};
          r.forEach((h) => {
            c[h.entity_id] = h;
          }), this.states = c, this.changed = null, this.loaded = !0, this.emit(), this.loadRegistry();
        }, () => {
        });
      else if (a.type === "result") {
        const r = this.pending[a.id];
        r && (delete this.pending[a.id], a.success ? r.resolve(a.result) : r.reject(new Error(a.error && a.error.message || "HA error")));
      } else if (a.type === "event" && this.subs[a.id])
        this.subs[a.id](a.event);
      else if (a.type === "event" && a.event.event_type === "state_changed") {
        const r = a.event.data.new_state;
        r && ((this.changed || (this.changed = {}))[r.entity_id] = r, this.emit());
      }
    }, i.onclose = () => {
      this.ws === i && (this.ws = null), Object.keys(this.pending).forEach((s) => this.pending[+s].reject(new Error("disconnected"))), this.pending = {}, this.subs = {}, this.stopped || (this.setStatus("disconnected"), this.scheduleReconnect());
    };
  }
  scheduleReconnect(e = 5e3) {
    clearTimeout(this.retryTimer), this.retryTimer = window.setTimeout(() => this.connect(), e);
  }
  disconnect() {
    this.stopped = !0, clearTimeout(this.retryTimer), this.ws && this.ws.close(), this.ws = null;
  }
  send(e) {
    return !this.ws || this.ws.readyState !== WebSocket.OPEN ? !1 : (this.ws.send(JSON.stringify({ id: this.msgId++, ...e })), !0);
  }
  loadRegistry() {
    this.call({ type: "config/entity_registry/list_for_display" }).then((e) => {
      const n = {}, i = {};
      e.entities.forEach((s) => {
        if (n[s.ei] = s, !s.di) return;
        const a = i[s.di] || (i[s.di] = { id: s.di, name: "", entities: [] });
        a.entities.push(s.ei);
        const r = this.states[s.ei], c = r && String(r.attributes.friendly_name || "");
        c && !a.name && (a.name = s.en && c.length > s.en.length && c.slice(-s.en.length) === s.en ? c.slice(0, -s.en.length).trim() : s.en ? "" : c);
      }), this.registry = n, this.devices = i, this.emit();
    }, () => {
    });
  }
  // Подписка: onEvent вызывается на каждое событие, пока не отпишутся. После переподключения
  // подписки пропадают — компоненты подписываются заново по смене status.
  subscribeMessage(e, n) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return () => {
    };
    const i = this.msgId++, s = this.ws;
    return this.subs[i] = n, s.send(JSON.stringify({ id: i, ...e })), () => {
      delete this.subs[i], s.readyState === WebSocket.OPEN && s.send(JSON.stringify({ id: this.msgId++, type: "unsubscribe_events", subscription: i }));
    };
  }
  // Запрос с ответом: история, статистика, реестр сущностей.
  call(e) {
    return new Promise((n, i) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        i(new Error("not connected"));
        return;
      }
      const s = this.msgId++;
      this.pending[s] = { resolve: n, reject: i }, this.ws.send(JSON.stringify({ id: s, ...e }));
    });
  }
  callService(e, n, i) {
    return this.send({
      type: "call_service",
      domain: e.split(".")[0],
      service: n,
      target: { entity_id: e },
      ...i ? { service_data: i } : {}
    });
  }
  // Обложки и картинки сущностей. Внешние (обложки Яндекс Музыки) — как есть, HA-шные
  // (/api/media_player_proxy/…?token=…) уже подписаны токеном сущности — нужен только адрес HA.
  pictureUrl(e) {
    return this.resolveUrl(e || "");
  }
  // Запрос к REST API HA с авторизацией (загрузка фото в медиатеку). XHR, а не fetch: fetch нет в Chrome 37.
  fetch(e, n = {}) {
    return this.token().then((i) => new Promise((s, a) => {
      const r = new XMLHttpRequest();
      r.open(n.method || "GET", this.baseUrl.replace(/\/+$/, "") + e), r.setRequestHeader("Authorization", "Bearer " + i), r.onload = () => s({ ok: r.status >= 200 && r.status < 300, status: r.status }), r.onerror = () => a(new Error("network")), r.send(n.body || null);
    }));
  }
  toggle(e) {
    return this.callService(e, "toggle");
  }
  turnOff(e) {
    return this.callService(e, "turn_off");
  }
  // camera_proxy_stream принимает access_token из атрибутов камеры (он сам обновляется в HA).
  cameraStreamUrl(e) {
    const n = this.states[e], i = n && n.attributes.access_token;
    return i ? this.baseUrl.replace(/\/+$/, "") + "/api/camera_proxy_stream/" + e + "?token=" + i : "";
  }
}
const ns = pn(null), $n = pn(!0);
function te() {
  const t = Xt(ns), e = Xt($n), [, n] = x(0), i = re(!1);
  return H(() => {
    if (!e) {
      i.current = !0;
      return;
    }
    return i.current && (i.current = !1, n((s) => s + 1)), t.subscribe(() => n((s) => s + 1));
  }, [t, e]), t;
}
function gn(t) {
  return t === "on" || t === "open" || t === "playing";
}
function ft(t) {
  return t === void 0 || t === "unavailable" || t === "unknown";
}
function We(t, e) {
  if (t.status !== "connected" || !t.loaded) return !0;
  const n = t.states[e];
  return !!n && n.state !== "unavailable";
}
function ze(t, e) {
  const n = e ? t.states[e] : void 0;
  return n && !ft(n.state) ? n.state : void 0;
}
function Nt(t, e = 1) {
  return t === void 0 || isNaN(parseFloat(t)) ? "--" : parseFloat(t).toFixed(e);
}
function $t(t, e) {
  const n = t.states[e];
  return n && n.attributes.unit_of_measurement ? " " + n.attributes.unit_of_measurement : "";
}
const os = pn(() => {
});
function bn() {
  return Xt(os);
}
const sc = "English", ac = {
  "admin.copied": "Copied to {n}, {online} online already have it, the rest get it when they connect",
  "admin.copy_all": "Everything: look and grid",
  "admin.copy_go": "Copy ({n})",
  "admin.copy_grid": "Grid only",
  "admin.copy_no_look": "This frame hasn't reported its look yet — only the grid will be copied.",
  "admin.copy_none": "No other frames.",
  "admin.copy_to": "Copy to…",
  "admin.dashboard_hint": "This is how the dashboard looks on this frame's screen. Edit it right here: the pencil in the header turns on editing. The layout is shared by the home; narrow screens have their own phone layout.",
  "admin.mode_dashboard": "Dashboard",
  "admin.mode_photo": "Photo screen",
  "admin.landscape": "Landscape",
  "admin.no_frames": "No frames yet: open the app on a device and it shows up here.",
  "admin.no_grid": "Grid is off — blocks use the regular layout",
  "admin.portrait": "Portrait",
  "admin.refresh": "Refresh",
  "admin.save": "Save to frame",
  "admin.saved_offline": "Saved — the frame takes it when it connects",
  "admin.saved_online": "Saved — the frame already has it",
  "admin.saving": "Saving…",
  "admin.size_guess": "approximate size — the frame hasn't been in this orientation yet",
  "admin.title": "Photo frames",
  "admin.use_grid": "Grid in this orientation",
  _language: sc,
  "ac.fan.auto": "Auto",
  "ac.fan.diffuse": "Diffuse",
  "ac.fan.focus": "Focus",
  "ac.fan.high": "High",
  "ac.fan.low": "Low",
  "ac.fan.medium": "Medium",
  "ac.fan.middle": "Medium",
  "ac.fan.quiet": "Quiet",
  "ac.fan.turbo": "Turbo",
  "ac.mode.auto": "Auto",
  "ac.mode.cool": "Cooling",
  "ac.mode.dry": "Dry",
  "ac.mode.fan_only": "Fan only",
  "ac.mode.heat": "Heating",
  "ac.mode.heat_cool": "Auto",
  "ac.mode.off": "Off",
  "ac.room": "room {t}°",
  "ambient.home_hint": "Home control",
  "ambient.offline": "No connection to home",
  "camera.live_title": "Live camera",
  "camera.no_stream": "No stream",
  "card.ac.hint": "Temperature, mode and fan",
  "card.ac.title": "Air conditioner",
  "card.all_unavailable": "All devices are currently unavailable",
  "card.cameras.hint": "Live video, switch between cameras",
  "card.cameras.title": "Cameras",
  "card.climate.hint": "Room thermometers and outdoor weather",
  "card.climate.title": "Climate",
  "card.empty": "No devices — add them in the card editor",
  "card.scenes.hint": "Buttons to run scenes and scripts",
  "card.scenes.title": "Scenes",
  "card.sensors.hint": "Doors, leaks, power — display only",
  "card.sensors.title": "Sensors",
  "card.speakers.hint": "Speakers and TVs: now playing, volume, source",
  "card.speakers.title": "Speakers",
  "card.switches.hint": "Lights, plugs, fans — tap to toggle",
  "card.switches.title": "Lights",
  "card.tv.hint": "TVs and speakers: power, volume, source",
  "card.tv.title": "TV",
  "card.weather.hint": "Forecast from Home Assistant plus room thermometers",
  "card.weather.title": "Weather",
  "chart.mean": "Average",
  "chart.min_max": "Min–max",
  "chart.no_connection": "No connection",
  "chart.no_data": "No data for this period",
  "chip.off": "{title}: off",
  "chip.on": "{title}: on",
  "chip.on_count": "{title}: {n} on",
  "chip.state_off": "off",
  "chip.state_on": "on",
  "common.cancel": "Cancel",
  "common.delete": "Delete",
  "common.done": "Done",
  "common.edit": "Edit",
  "common.loading": "Loading…",
  "common.save": "Save",
  "common.turn_off": "Turn off",
  "common.turn_on": "Turn on",
  "controls.add_card": "Add card",
  "controls.customize": "Customize cards",
  "controls.next_home": "Next home",
  "controls.settings": "Settings",
  "controls.to_photos": "Back to photos",
  "date.day_month": "{month} {day}",
  "date.full": "{weekday}, {month} {day}",
  "date.months": "January, February, March, April, May, June, July, August, September, October, November, December",
  "date.months_short": "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec",
  "date.weekdays": "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday",
  "date.weekdays_short": "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
  "detail.confirm_off": "Really turn off?",
  "detail.days": "{n} days",
  "detail.foot_bars": "Consumption from HA long-term statistics",
  "detail.foot_daily": "Daily averages, minimums and maximums",
  "detail.foot_hourly": "Hourly averages, minimums and maximums",
  "detail.load_error": "Couldn’t load history: {error}",
  "detail.table": "Table",
  "detail.updated": "updated {when}",
  "duration.days": "{n}d",
  "duration.hours": "{n}h",
  "duration.minutes": "{n} min",
  "editor.add_device": "Add device",
  "editor.add_humidity": "add humidity",
  "editor.camera_picture": "Camera image",
  "editor.card_title": "Card: {type}",
  "editor.change_icon": "Change icon",
  "editor.chip_on_photo": "Show a chip on the photo",
  "editor.color": "Color",
  "editor.color_auto": "From photo",
  "editor.count": "{n}",
  "editor.device": "Device",
  "editor.devices": "Devices",
  "editor.entities": "Entities",
  "editor.fit.cover": "Fill",
  "editor.fit.height": "Fit height",
  "editor.fit.width": "Fit width",
  "editor.icon": "Icon",
  "editor.items": "Devices ({n}) — {hint}",
  "editor.loading_devices": "Loading devices…",
  "editor.name": "Name",
  "editor.new_card": "New card",
  "editor.no_devices": "No matching devices",
  "editor.no_matching": "no matching entities",
  "editor.nothing_found": "Nothing found",
  "editor.pick_forecast": "Choose forecast",
  "editor.room_sensor": "room temperature sensor",
  "editor.search_device": "Search devices",
  "editor.search_entity": "Search entities",
  "editor.show_all": "Show all entities",
  "editor.size": "Size",
  "editor.unavailable": "unavailable",
  "editor.weather_on_photo": "Show weather on the photo under the clock",
  "errors.card_not_found": "card {type} not found in the dashboard",
  "errors.upload_some": "{failed} of {total} failed to upload",
  "errors.decode": "{name}: the browser cannot open this format",
  "errors.upload": "upload: HTTP {status}",
  "grid.narrow_note": "The phone layout is separate: move and resize cards just like on a big screen. The eye button hides a card here only.",
  "ha.card_hint": "The frame runs inside this Home Assistant — no sign-in needed, everything runs as the signed-in user.",
  "ha.local_hint": "The Home Assistant sign-in stays on this device only. Inside HA (a Webpage dashboard, the HA app) the frame signs in by itself.",
  "ha.login": "Sign in with Home Assistant",
  "ha.logout": "Sign out",
  "ha.logged_in": "Signed in with Home Assistant: {url}",
  "ha.url": "Home Assistant URL",
  "home.default_name": "Home",
  "homes.add": "+ Add home",
  "homes.card_hint": " All homes use devices from this Home Assistant — for example, a country house connected via Remote Home Assistant.",
  "homes.delete": "Delete home",
  "homes.hint": "Homes and their screens are shared by all devices. Each device has its own start screen: the frame starts there and returns to it. Swipe sideways on the panel to flip screens.",
  "homes.new_name": "Country house",
  "layout.export": "Export",
  "layout.grid_done": "Done",
  "layout.grid_none": "No other frame has reported its photo screen yet.",
  "layout.grid_offline": "offline",
  "layout.grid_take": "Grid only",
  "layout.grid_title": "Photo screen from another frame",
  "layout.look_take": "Take everything",
  "layout.import": "Import",
  "layout.import_placeholder": "Paste layout JSON and press Import",
  "layout.reset": "Reset",
  "layout.title": "Card layout",
  "media.state.buffering": "Buffering…",
  "media.state.idle": "Idle",
  "media.state.off": "Off",
  "media.state.on": "On",
  "media.state.paused": "Paused",
  "media.state.playing": "Playing",
  "media.state.standby": "Standby",
  "media.tv_remote_only": "Turn it on with the remote — this TV can’t be woken over the network",
  "photos.card_hint": "Photos from the Home Assistant media library, folder /media/{folder}. Admins can upload.",
  "photos.delete_all": "Delete all photos",
  "photos.formats": "PNG, JPG, WEBP, HEIC — several at once, resized to 1920 px",
  "photos.local_hint": "Photos are stored on this device.",
  "photos.pick": "Drop photos here or tap to choose",
  "photos.uploading": "Uploading photos…",
  "range.24h": "24 hours",
  "range.30d": "30 days",
  "range.7d": "7 days",
  "scene.started": "Started",
  "scene.tap_to_run": "Tap to run",
  "sensor.closed": "Closed",
  "sensor.connectivity.off": "Disconnected",
  "sensor.connectivity.on": "Connected",
  "sensor.door.off": "Closed",
  "sensor.door.on": "Open",
  "sensor.garage_door.off": "Closed",
  "sensor.garage_door.on": "Open",
  "sensor.gas.off": "Clear",
  "sensor.gas.on": "Gas!",
  "sensor.locked": "Locked",
  "sensor.moisture.off": "Dry",
  "sensor.moisture.on": "Leak!",
  "sensor.motion.off": "No motion",
  "sensor.motion.on": "Motion",
  "sensor.no_data": "no data",
  "sensor.occupancy.off": "Clear",
  "sensor.occupancy.on": "Occupied",
  "sensor.off": "Off",
  "sensor.on": "On",
  "sensor.open": "Open",
  "sensor.opening.off": "Closed",
  "sensor.opening.on": "Open",
  "sensor.plug.off": "Off",
  "sensor.plug.on": "On",
  "sensor.power.off": "Off",
  "sensor.power.on": "On",
  "sensor.presence.off": "Away",
  "sensor.presence.on": "Home",
  "sensor.problem.off": "OK",
  "sensor.problem.on": "Problem",
  "sensor.safety.off": "Safe",
  "sensor.safety.on": "Unsafe",
  "sensor.smoke.off": "Clear",
  "sensor.smoke.on": "Smoke!",
  "sensor.unlocked": "Unlocked",
  "sensor.window.off": "Closed",
  "sensor.window.on": "Open",
  "settings.idle.0": "Never",
  "settings.idle.120": "2 minutes",
  "settings.idle.20": "20 seconds",
  "settings.idle.45": "45 seconds",
  "settings.idle_return": "Return to photos when idle after",
  "settings.import_failed": "Failed: {error}",
  "settings.interval.10000": "10 seconds",
  "settings.interval.30000": "30 seconds",
  "settings.interval.5000": "5 seconds",
  "settings.interval.60000": "1 minute",
  "settings.language": "Language",
  "settings.language_auto": "Auto",
  "settings.no_cards_field": 'missing "cards" field',
  "settings.section.device": "This device",
  "settings.section.photos": "Photos",
  "settings.section.slideshow": "Slideshow",
  "settings.slide_interval": "Photo interval",
  "settings.tab.ha": "Home Assistant",
  "settings.tab.homes": "Homes",
  "settings.tab.photos": "Photos",
  "settings.title": "Settings",
  "stat.avg": "Average",
  "stat.avg_per_day": "Average per day",
  "stat.avg_per_hour": "Average per hour",
  "stat.counter_now": "Meter now",
  "stat.max": "Maximum",
  "stat.min": "Minimum",
  "stat.now": "Now",
  "stat.on_share": "Share of time",
  "stat.on_time": "Time on",
  "stat.peak": "Peak",
  "stat.times": "times in period",
  "stat.total": "In period",
  "stat.turned_on": "Turned on",
  "status.auth_invalid": "HA sign-in revoked — sign in again",
  "status.connected": "Home connected",
  "status.connecting": "Connecting…",
  "status.disconnected": "Offline",
  "status.idle": "Not signed in to HA",
  "switch.off": "Off",
  "switch.on": "On",
  "switch.unavailable": "Unavailable",
  "switches.all_off": "Turn all off",
  "switches.title_count": "{title} · {on} of {total}",
  "sync.save_failed": "Not saved: {error}. Admin rights and a UI-mode dashboard are required.",
  "weather.clear-night": "Clear",
  "weather.cloudy": "Cloudy",
  "weather.exceptional": "Severe weather",
  "weather.feels_like": "feels like {t}°",
  "weather.fog": "Fog",
  "weather.hail": "Hail",
  "weather.lightning": "Thunderstorm",
  "weather.lightning-rainy": "Thunderstorm, rain",
  "weather.partlycloudy": "Partly cloudy",
  "weather.pouring": "Pouring",
  "weather.pressure": "{v} mmHg",
  "weather.rainy": "Rain",
  "weather.snowy": "Snow",
  "weather.snowy-rainy": "Sleet",
  "weather.sunny": "Sunny",
  "weather.today": "Today",
  "weather.wind": "{v} m/s",
  "weather.windy": "Windy",
  "weather.windy-variant": "Windy",
  "errors.upload_admin": "Only Home Assistant admins can upload photos",
  "errors.upload_folder": "Folder /media/{folder} not found — create it in the HA media library (Samba, File editor or terminal)",
  "settings.kiosk": "Kiosk mode on this device",
  "settings.kiosk_auto": "As set in the card",
  "settings.kiosk_on": "On — hide HA menus",
  "settings.kiosk_off": "Off",
  "setup.dashboard_title": "Photo frame",
  "setup.title": "Photo Frame is installed",
  "setup.text": "Create a “Photo frame” dashboard in the sidebar? It shows the frame full-screen — everything else is set up right on it.",
  "setup.create": "Create",
  "setup.later": "Not now",
  "setup.failed": "Failed: {error}",
  "settings.tab.layout": "Layout",
  "settings.quality": "Display quality",
  "settings.quality_auto": "Auto ({mode})",
  "settings.quality_full": "Beautiful",
  "settings.quality_lite": "Lite",
  "screen.default": "Screen {n}",
  "screen.add": "Screen",
  "screen.delete": "Delete screen",
  "screen.delete_sure": "Delete?",
  "screen.start": "Start screen on this device",
  "storage.missing": "Home Assistant has no “Photo Frame” dashboard with the card yet, so screens and photos stay in this browser for now.",
  "storage.error": "Couldn't read the “Photo Frame” dashboard in Home Assistant, so everything stays in this browser for now.",
  "storage.create": "Create the “Photo Frame” dashboard in HA",
  "storage.ask_admin": "A Home Assistant administrator can create it.",
  "migration.text": "This browser still has screens or photos from when the frame ran without Home Assistant. Move them to HA?",
  "migration.photos": "Move photos ({n})",
  "migration.screens": "Replace screens in HA with these",
  "migration.skip": "Don't move",
  "ha.auth": "Sign-in",
  "grid.hidden_on_phone": "Hidden on phone:",
  "grid.hide_on_phone": "Hide on phone",
  "lock.hint": "Tap the clock or the widgets",
  "lock.grid": "Grid",
  "lock.grid_hint": "Drag the blocks and the size corner; tap a block for its settings",
  "lock.align.auto": "Auto",
  "lock.align.bottom": "Bottom",
  "lock.align.center": "Center",
  "lock.align.left": "Left",
  "lock.align.middle": "Middle",
  "lock.align.right": "Right",
  "lock.align.top": "Top",
  "lock.align_h": "Horizontal",
  "lock.align_v": "Vertical",
  "lock.clock": "Clock",
  "lock.widgets": "Widgets",
  "lock.add_widgets": "Widgets",
  "lock.no_widgets": "No cards have “Show a chip on the photo” checked — turn it on in the card editor.",
  "lock.sec.color": "Colour",
  "lock.sec.look": "Look",
  "lock.sec.place": "Position",
  "lock.sec.show": "Show",
  "lock.sec.which": "Which widgets",
  "lock.size": "Size",
  "lock.size.s": "S",
  "lock.size.m": "M",
  "lock.size.l": "L",
  "lock.layout": "Position",
  "lock.layout.auto": "Auto",
  "lock.layout.corner": "Corner",
  "lock.layout.center": "Bottom center",
  "lock.layout.top": "Top center",
  "lock.date": "Date",
  "lock.weather": "Weather under the clock",
  "lock.chip_style": "Widget style",
  "lock.chip_style.auto": "Auto",
  "lock.chip_style.text": "Text",
  "lock.chip_style.icons": "Icons",
  "lock.color.white": "White",
  "lock.color.accent": "Match the photo",
  "lock.color.warm": "Warm",
  "lock.color.custom": "Custom colour",
  "lock.color.mint": "Mint",
  "lock.color.same": "As clock",
  "lock.color.sky": "Sky",
  "lock.color.rose": "Rose",
  "editor.part_hide": "Hide in the card",
  "editor.part_show": "Show in the card",
  "frame.name": "This frame's name in Home Assistant",
  "frame.name_placeholder": "e.g. Kitchen",
  "frame.hint": "The frame is a device in HA (Settings → Devices): its album, start screen, buttons and services for automations live there.",
  "photos.album": "Upload to album",
  "photos.album_root": "No album (whole folder)",
  "photos.count": "Photos in the media library: {n}",
  "photos.open_media": "Open in HA media",
  "photos.formats_server": "PNG, JPG, WEBP, HEIC — several at once, the server does the processing",
  "settings.autostart": "Start on power-up",
  "settings.autostart_on": "Yes — the frame opens by itself",
  "settings.autostart_off": "No",
  "settings.fit": "How to show photos",
  "settings.fit_auto": "Auto — whole if orientation differs",
  "settings.fit_contain": "Whole, with glow around",
  "settings.fit_cover": "Fill the screen, crop edges",
  "lock.size.xs": "XS",
  "lock.size.xl": "XL",
  "lock.widgets_pos": "Position",
  "lock.widgets_pos.clock": "With clock",
  "lock.widgets_pos.top": "Top",
  "lock.widgets_pos.bottom": "Bottom",
  "lock.date_pos": "Date",
  "lock.date_pos.auto": "Auto",
  "lock.date_pos.above": "Above clock",
  "lock.date_pos.below": "Below clock",
  "lock.color.contrast": "Auto — contrast with the photo"
}, rc = "Русский", cc = {
  "admin.copied": "Скопировано на {n}, в сети — {online}: они уже взяли, остальные возьмут при подключении",
  "admin.copy_all": "Всё: вид и сетка",
  "admin.copy_go": "Скопировать ({n})",
  "admin.copy_grid": "Только сетка",
  "admin.copy_no_look": "Эта рамка ещё не сообщила свой вид — уйдёт только сетка.",
  "admin.copy_none": "Других рамок нет.",
  "admin.copy_to": "Скопировать на…",
  "admin.dashboard_hint": "Так дашборд выглядит на экране этой рамки. Правьте здесь же: карандаш в шапке — режим редактирования. Раскладка общая для дома, на узких экранах — своя телефонная.",
  "admin.mode_dashboard": "Дашборд",
  "admin.mode_photo": "Экран с фото",
  "admin.landscape": "Горизонтально",
  "admin.no_frames": "Рамок пока нет: откройте приложение на устройстве, и оно появится здесь.",
  "admin.no_grid": "Сетка выключена — блоки стоят обычным расположением",
  "admin.portrait": "Вертикально",
  "admin.refresh": "Обновить",
  "admin.save": "Сохранить на рамку",
  "admin.saved_offline": "Сохранено — рамка возьмёт сетку, когда подключится",
  "admin.saved_online": "Сохранено — рамка уже взяла сетку",
  "admin.saving": "Сохраняю…",
  "admin.size_guess": "размер примерный — рамка ещё не была в этой ориентации",
  "admin.title": "Фоторамки",
  "admin.use_grid": "Сетка в этой ориентации",
  _language: rc,
  "ac.fan.auto": "Авто",
  "ac.fan.diffuse": "Рассеянно",
  "ac.fan.focus": "Направленно",
  "ac.fan.high": "Сильно",
  "ac.fan.low": "Тихо",
  "ac.fan.medium": "Средне",
  "ac.fan.middle": "Средне",
  "ac.fan.quiet": "Бесшумно",
  "ac.fan.turbo": "Турбо",
  "ac.mode.auto": "Авто",
  "ac.mode.cool": "Охлаждение",
  "ac.mode.dry": "Осушение",
  "ac.mode.fan_only": "Вентиляция",
  "ac.mode.heat": "Обогрев",
  "ac.mode.heat_cool": "Авто",
  "ac.mode.off": "Выключен",
  "ac.room": "в комнате {t}°",
  "ambient.home_hint": "Управление домом",
  "ambient.offline": "Нет связи с домом",
  "camera.live_title": "Прямой эфир с камеры",
  "camera.no_stream": "Нет потока",
  "card.ac.hint": "Температура, режим и вентилятор",
  "card.ac.title": "Кондиционер",
  "card.all_unavailable": "Все устройства сейчас недоступны",
  "card.cameras.hint": "Видеопоток с переключением камер",
  "card.cameras.title": "Камеры",
  "card.climate.hint": "Градусники комнат и погода на улице",
  "card.climate.title": "Климат",
  "card.empty": "Нет устройств — добавьте их в редакторе карточки",
  "card.scenes.hint": "Кнопки запуска сцен и скриптов",
  "card.scenes.title": "Сценарии",
  "card.sensors.hint": "Двери, протечки, мощность — только показ",
  "card.sensors.title": "Датчики",
  "card.speakers.hint": "Колонки и телевизоры: что играет, громкость, источник",
  "card.speakers.title": "Колонки",
  "card.switches.hint": "Свет, розетки, вентиляторы — нажатие переключает",
  "card.switches.title": "Свет",
  "card.tv.hint": "Телевизоры и колонки: питание, громкость, источник",
  "card.tv.title": "Телевизор",
  "card.weather.hint": "Прогноз из Home Assistant и градусники квартиры",
  "card.weather.title": "Погода",
  "chart.mean": "Среднее",
  "chart.min_max": "Мин–макс",
  "chart.no_connection": "Нет связи",
  "chart.no_data": "Нет данных за этот период",
  "chip.off": "{title}: выкл",
  "chip.on": "{title}: вкл",
  "chip.on_count": "{title}: {n} вкл",
  "chip.state_off": "выкл",
  "chip.state_on": "вкл",
  "common.cancel": "Отмена",
  "common.delete": "Удалить",
  "common.done": "Готово",
  "common.edit": "Изменить",
  "common.loading": "Загрузка…",
  "common.save": "Сохранить",
  "common.turn_off": "Выключить",
  "common.turn_on": "Включить",
  "controls.add_card": "Добавить карточку",
  "controls.customize": "Настроить карточки",
  "controls.next_home": "Следующий дом",
  "controls.settings": "Настройки",
  "controls.to_photos": "К фото",
  "date.day_month": "{day} {month}",
  "date.full": "{weekday}, {day} {month}",
  "date.months": "января, февраля, марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря",
  "date.months_short": "янв, фев, мар, апр, мая, июн, июл, авг, сен, окт, ноя, дек",
  "date.weekdays": "Воскресенье, Понедельник, Вторник, Среда, Четверг, Пятница, Суббота",
  "date.weekdays_short": "Вс, Пн, Вт, Ср, Чт, Пт, Сб",
  "detail.confirm_off": "Точно выключить?",
  "detail.days": "{n} дн.",
  "detail.foot_bars": "Расход по долгосрочной статистике HA",
  "detail.foot_daily": "Средние, минимумы и максимумы за каждые сутки",
  "detail.foot_hourly": "Средние, минимумы и максимумы за каждый час",
  "detail.load_error": "Не удалось загрузить историю: {error}",
  "detail.table": "Таблица",
  "detail.updated": "обновлено {when}",
  "duration.days": "{n} д",
  "duration.hours": "{n} ч",
  "duration.minutes": "{n} мин",
  "editor.add_device": "Добавить устройство",
  "editor.add_humidity": "добавить влажность",
  "editor.camera_picture": "Картинка камеры",
  "editor.card_title": "Карточка: {type}",
  "editor.change_icon": "Сменить иконку",
  "editor.chip_on_photo": "Показывать информер на фото",
  "editor.color": "Цвет",
  "editor.color_auto": "Из фото",
  "editor.count": "{n} шт.",
  "editor.device": "Устройство",
  "editor.devices": "Устройства",
  "editor.entities": "Сущности",
  "editor.fit.cover": "Заполнить",
  "editor.fit.height": "По высоте",
  "editor.fit.width": "По ширине",
  "editor.icon": "Иконка",
  "editor.items": "Устройства ({n}) — {hint}",
  "editor.loading_devices": "Загрузка устройств…",
  "editor.name": "Название",
  "editor.new_card": "Новая карточка",
  "editor.no_devices": "Подходящих устройств нет",
  "editor.no_matching": "нет подходящих сущностей",
  "editor.nothing_found": "Ничего не найдено",
  "editor.pick_forecast": "Выбрать прогноз",
  "editor.room_sensor": "датчик температуры в комнате",
  "editor.search_device": "Поиск устройства",
  "editor.search_entity": "Поиск сущности",
  "editor.show_all": "Показать все сущности",
  "editor.size": "Размер",
  "editor.unavailable": "недоступно",
  "editor.weather_on_photo": "Показывать погоду на фото под часами",
  "errors.card_not_found": "карточка {type} не найдена в дашборде",
  "errors.upload_some": "Не загрузилось {failed} из {total}",
  "errors.decode": "{name}: браузер не смог открыть этот формат",
  "errors.upload": "загрузка: HTTP {status}",
  "grid.narrow_note": "Раскладка для телефона — своя: двигайте и растягивайте карточки как на большом экране. Значок с глазом прячет карточку только здесь.",
  "ha.card_hint": "Рамка работает внутри этого Home Assistant — входить не нужно, всё от имени вошедшего пользователя.",
  "ha.local_hint": "Вход в Home Assistant хранится только на этом устройстве. Внутри HA (дашборд «Веб-страница», приложение HA) рамка входит сама.",
  "ha.login": "Войти через Home Assistant",
  "ha.logout": "Выйти",
  "ha.logged_in": "Вход через Home Assistant: {url}",
  "ha.url": "Адрес Home Assistant",
  "home.default_name": "Дом",
  "homes.add": "+ Добавить дом",
  "homes.card_hint": " Все дома берут устройства из этого Home Assistant — например, дачу, подключённую к нему через Remote Home Assistant.",
  "homes.delete": "Удалить дом",
  "homes.hint": "Дома и их экраны общие для всех устройств. Стартовый экран — свой у каждого устройства: с него рамка начинает и к нему возвращается. Экраны листаются боковым свайпом по панели.",
  "homes.new_name": "Дача",
  "layout.export": "Экспорт",
  "layout.grid_done": "Взято",
  "layout.grid_none": "Другие рамки ещё не сообщили свой экран с фото.",
  "layout.grid_offline": "не в сети",
  "layout.grid_take": "Только сетку",
  "layout.grid_title": "Экран с фото с другой рамки",
  "layout.look_take": "Взять всё",
  "layout.import": "Импорт",
  "layout.import_placeholder": "Вставьте JSON раскладки и нажмите «Импорт»",
  "layout.reset": "Сбросить",
  "layout.title": "Раскладка карточек",
  "media.state.buffering": "Загрузка…",
  "media.state.idle": "Ожидание",
  "media.state.off": "Выключен",
  "media.state.on": "Включён",
  "media.state.paused": "Пауза",
  "media.state.playing": "Играет",
  "media.state.standby": "Спящий режим",
  "media.tv_remote_only": "Включается пультом — по сети этот телевизор не будится",
  "photos.card_hint": "Фото из медиатеки Home Assistant, папка /media/{folder}. Загружать может администратор.",
  "photos.delete_all": "Удалить все фото",
  "photos.formats": "PNG, JPG, WEBP, HEIC — можно сразу пачкой, кадр уменьшается до 1920 px",
  "photos.local_hint": "Фото хранятся в памяти этого устройства.",
  "photos.pick": "Перетащите фото сюда или нажмите, чтобы выбрать",
  "photos.uploading": "Загрузка фото...",
  "range.24h": "24 часа",
  "range.30d": "30 дней",
  "range.7d": "7 дней",
  "scene.started": "Запущено",
  "scene.tap_to_run": "Нажмите, чтобы запустить",
  "sensor.closed": "Закрыто",
  "sensor.connectivity.off": "Не в сети",
  "sensor.connectivity.on": "В сети",
  "sensor.door.off": "Закрыто",
  "sensor.door.on": "Открыто",
  "sensor.garage_door.off": "Закрыто",
  "sensor.garage_door.on": "Открыто",
  "sensor.gas.off": "Норма",
  "sensor.gas.on": "Газ!",
  "sensor.locked": "Заперто",
  "sensor.moisture.off": "Сухо",
  "sensor.moisture.on": "Протечка!",
  "sensor.motion.off": "Нет движения",
  "sensor.motion.on": "Движение",
  "sensor.no_data": "нет данных",
  "sensor.occupancy.off": "Никого",
  "sensor.occupancy.on": "Кто-то есть",
  "sensor.off": "Выкл",
  "sensor.on": "Вкл",
  "sensor.open": "Открыто",
  "sensor.opening.off": "Закрыто",
  "sensor.opening.on": "Открыто",
  "sensor.plug.off": "Выкл",
  "sensor.plug.on": "Вкл",
  "sensor.power.off": "Выкл",
  "sensor.power.on": "Вкл",
  "sensor.presence.off": "Нет дома",
  "sensor.presence.on": "Дома",
  "sensor.problem.off": "Норма",
  "sensor.problem.on": "Проблема",
  "sensor.safety.off": "Норма",
  "sensor.safety.on": "Опасно",
  "sensor.smoke.off": "Норма",
  "sensor.smoke.on": "Дым!",
  "sensor.unlocked": "Открыто",
  "sensor.window.off": "Закрыто",
  "sensor.window.on": "Открыто",
  "settings.idle.0": "Не возвращаться",
  "settings.idle.120": "2 минуты",
  "settings.idle.20": "20 секунд",
  "settings.idle.45": "45 секунд",
  "settings.idle_return": "Возвращаться к фото без касаний через",
  "settings.import_failed": "Не получилось: {error}",
  "settings.interval.10000": "10 секунд",
  "settings.interval.30000": "30 секунд",
  "settings.interval.5000": "5 секунд",
  "settings.interval.60000": "1 минута",
  "settings.language": "Язык интерфейса",
  "settings.language_auto": "Авто",
  "settings.no_cards_field": "нет поля cards",
  "settings.section.device": "Это устройство",
  "settings.section.photos": "Фото",
  "settings.section.slideshow": "Слайдшоу",
  "settings.slide_interval": "Интервал смены фото",
  "settings.tab.ha": "Home Assistant",
  "settings.tab.homes": "Дома",
  "settings.tab.photos": "Фото",
  "settings.title": "Настройки",
  "stat.avg": "Среднее",
  "stat.avg_per_day": "В среднем в сутки",
  "stat.avg_per_hour": "В среднем в час",
  "stat.counter_now": "Счётчик сейчас",
  "stat.max": "Максимум",
  "stat.min": "Минимум",
  "stat.now": "Сейчас",
  "stat.on_share": "Доля времени",
  "stat.on_time": "Было включено",
  "stat.peak": "Пик",
  "stat.times": "раз за период",
  "stat.total": "За период",
  "stat.turned_on": "Включалось",
  "status.auth_invalid": "Вход в HA отозван — войдите снова",
  "status.connected": "Дом на связи",
  "status.connecting": "Подключение…",
  "status.disconnected": "Нет связи",
  "status.idle": "Нет входа в HA",
  "switch.off": "Выключено",
  "switch.on": "Включено",
  "switch.unavailable": "Недоступно",
  "switches.all_off": "Выключить всё",
  "switches.title_count": "{title} · {on} из {total}",
  "sync.save_failed": "Не сохранилось: {error}. Нужны права администратора и дашборд в режиме UI.",
  "weather.clear-night": "Ясно",
  "weather.cloudy": "Облачно",
  "weather.exceptional": "Непогода",
  "weather.feels_like": "ощущается {t}°",
  "weather.fog": "Туман",
  "weather.hail": "Град",
  "weather.lightning": "Гроза",
  "weather.lightning-rainy": "Гроза с дождём",
  "weather.partlycloudy": "Переменная облачность",
  "weather.pouring": "Ливень",
  "weather.pressure": "{v} мм",
  "weather.rainy": "Дождь",
  "weather.snowy": "Снег",
  "weather.snowy-rainy": "Мокрый снег",
  "weather.sunny": "Солнечно",
  "weather.today": "Сегодня",
  "weather.wind": "{v} м/с",
  "weather.windy": "Ветрено",
  "weather.windy-variant": "Ветрено",
  "errors.upload_admin": "Загружать фото может только администратор Home Assistant",
  "errors.upload_folder": "Нет папки /media/{folder} — создайте её в медиатеке HA (Samba, File editor или терминал)",
  "settings.kiosk": "Режим киоска на этом устройстве",
  "settings.kiosk_auto": "Как в карточке",
  "settings.kiosk_on": "Вкл — прятать меню HA",
  "settings.kiosk_off": "Выкл",
  "setup.dashboard_title": "Фоторамка",
  "setup.title": "Photo Frame установлен",
  "setup.text": "Создать дашборд «Фоторамка» в боковом меню? В нём будет рамка на весь экран — дальше всё настраивается прямо на ней.",
  "setup.create": "Создать",
  "setup.later": "Не сейчас",
  "setup.failed": "Не получилось: {error}",
  "settings.tab.layout": "Раскладка",
  "settings.quality": "Качество отображения",
  "settings.quality_auto": "Авто ({mode})",
  "settings.quality_full": "Красиво",
  "settings.quality_lite": "Лёгкое",
  "screen.default": "Экран {n}",
  "screen.add": "Экран",
  "screen.delete": "Удалить экран",
  "screen.delete_sure": "Удалить?",
  "screen.start": "Стартовый экран на этом устройстве",
  "storage.missing": "В Home Assistant нет дашборда «Фоторамка» с карточкой — пока экраны и фото хранятся только в этом браузере.",
  "storage.error": "Не удалось прочитать дашборд «Фоторамка» в Home Assistant — пока всё хранится в этом браузере.",
  "storage.create": "Создать дашборд «Фоторамка» в HA",
  "storage.ask_admin": "Создать его может администратор Home Assistant.",
  "migration.text": "В этом браузере остались экраны или фото с тех пор, как рамка работала без Home Assistant. Перенести их в HA?",
  "migration.photos": "Перенести фото ({n})",
  "migration.screens": "Заменить экраны в HA этими",
  "migration.skip": "Не переносить",
  "ha.auth": "Авторизация",
  "grid.hidden_on_phone": "Скрыты на телефоне:",
  "grid.hide_on_phone": "Скрыть на телефоне",
  "lock.hint": "Нажмите на часы или виджеты",
  "lock.grid": "Сетка",
  "lock.grid_hint": "Тяните блоки и уголок размера; нажмите на блок — его настройки",
  "lock.align.auto": "Авто",
  "lock.align.bottom": "Снизу",
  "lock.align.center": "Центр",
  "lock.align.left": "Слева",
  "lock.align.middle": "Центр",
  "lock.align.right": "Справа",
  "lock.align.top": "Сверху",
  "lock.align_h": "По горизонтали",
  "lock.align_v": "По вертикали",
  "lock.clock": "Часы",
  "lock.widgets": "Виджеты",
  "lock.add_widgets": "Виджеты",
  "lock.no_widgets": "Нет карточек с галочкой «Показывать информер на фото» — включите её в редакторе карточки.",
  "lock.sec.color": "Цвет",
  "lock.sec.look": "Вид",
  "lock.sec.place": "Расположение",
  "lock.sec.show": "Показывать",
  "lock.sec.which": "Какие виджеты",
  "lock.size": "Размер",
  "lock.size.s": "S",
  "lock.size.m": "M",
  "lock.size.l": "L",
  "lock.layout": "Расположение",
  "lock.layout.auto": "Авто",
  "lock.layout.corner": "В углу",
  "lock.layout.center": "По центру внизу",
  "lock.layout.top": "По центру сверху",
  "lock.date": "Дата",
  "lock.weather": "Погода под часами",
  "lock.chip_style": "Вид виджетов",
  "lock.chip_style.auto": "Авто",
  "lock.chip_style.text": "Текстом",
  "lock.chip_style.icons": "Значками",
  "lock.color.white": "Белый",
  "lock.color.accent": "Под цвет фото",
  "lock.color.warm": "Тёплый",
  "lock.color.custom": "Свой цвет",
  "lock.color.mint": "Мятный",
  "lock.color.same": "Как часы",
  "lock.color.sky": "Голубой",
  "lock.color.rose": "Розовый",
  "editor.part_hide": "Скрыть в карточке",
  "editor.part_show": "Показать в карточке",
  "frame.name": "Имя этой рамки в Home Assistant",
  "frame.name_placeholder": "Например, Кухня",
  "frame.hint": "Рамка — устройство в HA («Настройки → Устройства»): там её альбом, стартовый экран, кнопки и службы для автоматизаций.",
  "photos.album": "Загрузить в альбом",
  "photos.album_root": "Без альбома (вся папка)",
  "photos.count": "Фото в медиатеке: {n}",
  "photos.open_media": "Открыть в медиатеке HA",
  "photos.formats_server": "PNG, JPG, WEBP, HEIC — можно сразу пачкой, обработку делает сервер",
  "settings.autostart": "Запускать при включении",
  "settings.autostart_on": "Да — рамка открывается сама",
  "settings.autostart_off": "Нет",
  "settings.fit": "Как показывать фото",
  "settings.fit_auto": "Авто — чужую ориентацию целиком",
  "settings.fit_contain": "Целиком, с подсветкой по краям",
  "settings.fit_cover": "Во весь экран, края обрезаются",
  "lock.size.xs": "XS",
  "lock.size.xl": "XL",
  "lock.widgets_pos": "Расположение",
  "lock.widgets_pos.clock": "С часами",
  "lock.widgets_pos.top": "Сверху",
  "lock.widgets_pos.bottom": "Снизу",
  "lock.date_pos": "Дата",
  "lock.date_pos.auto": "Авто",
  "lock.date_pos.above": "Над часами",
  "lock.date_pos.below": "Под часами",
  "lock.color.contrast": "Авто — в обратку к фото"
}, Yo = /* @__PURE__ */ Object.assign({ "./locales/en.json": ac, "./locales/ru.json": cc }), Se = {};
Object.keys(Yo).forEach((t) => {
  const e = t.replace(/^.*\/([^/]+)\.json$/, "$1");
  Se[e] = Yo[t];
});
const en = "en", is = "photoframe.language";
let pt = en;
const Ft = [];
function lc() {
  return Object.keys(Se).sort().map((t) => ({ code: t, name: Se[t]._language || t }));
}
function En(t) {
  if (!t) return null;
  if (Se[t]) return t;
  const e = t.split(/[-_]/)[0].toLowerCase();
  return Se[e] ? e : null;
}
function ss() {
  try {
    return localStorage.getItem(is) || "";
  } catch {
    return "";
  }
}
function dc(t) {
  try {
    localStorage.setItem(is, t);
  } catch {
  }
}
let Zo;
function yn(t) {
  t && (Zo = t);
  const e = En(ss()) || En(Zo) || En(navigator.language) || en;
  e !== pt && (pt = e, Ft.forEach((n) => n()));
}
function d(t, e) {
  let n = Se[pt] && Se[pt][t] || Se[en] && Se[en][t] || t;
  return e && Object.keys(e).forEach((i) => {
    n = n.split("{" + i + "}").join(String(e[i]));
  }), n;
}
function et(t) {
  return d(t).split(",").map((e) => e.trim());
}
yn();
function hc() {
  const [, t] = x(0);
  return H(() => {
    const e = () => t((n) => n + 1);
    return Ft.push(e), () => {
      Ft.splice(Ft.indexOf(e), 1);
    };
  }, []), pt;
}
const Ve = 12, Ac = 2, as = 2, Ke = 4, tn = {
  climate: { icon: "thermometer", domains: ["sensor", "weather"] },
  switches: { icon: "lightbulb", domains: ["light", "switch", "fan", "input_boolean"] },
  cameras: { icon: "video", domains: ["camera"] },
  sensors: { icon: "shield", domains: ["binary_sensor", "sensor", "lock", "cover"] },
  scenes: { icon: "sparkles", domains: ["scene", "script", "automation"] },
  ac: { icon: "air-vent", domains: ["climate"] },
  speakers: { icon: "speaker", domains: ["media_player"] },
  tv: { icon: "tv", domains: ["media_player"] },
  weather: { icon: "cloud-sun", domains: ["weather", "sensor"] }
};
function gt(t) {
  return d("card." + t + ".title");
}
function rs(t) {
  return d("card." + t + ".hint");
}
const ht = {
  amber: "#fbbf24",
  sky: "#7dd3fc",
  green: "#34d399",
  pink: "#f9a8d4",
  violet: "#c4b5fd",
  red: "#fb7185"
};
let cs = 0;
function uc() {
  return "c" + Date.now().toString(36) + (cs++).toString(36);
}
function ls() {
  return {
    cols: Ve,
    cards: [
      { id: "climate", type: "climate", title: "", icon: "thermometer", x: 0, y: 0, w: 3, h: 6, chip: !0, items: [] },
      { id: "lights", type: "switches", title: "", icon: "lightbulb", x: 3, y: 0, w: 6, h: 6, chip: !0, color: "amber", items: [] },
      { id: "weather", type: "weather", title: "", icon: "cloud-sun", x: 9, y: 0, w: 3, h: 3, chip: !0, items: [] },
      { id: "home", type: "sensors", title: "", icon: "shield", x: 9, y: 3, w: 3, h: 3, chip: !0, items: [] }
    ]
  };
}
function Go(t, e) {
  return t.x < e.x + e.w && e.x < t.x + t.w && t.y < e.y + e.h && e.y < t.y + t.h;
}
function eo(t, e) {
  return t.y - e.y || t.x - e.x;
}
function bt(t, e = Ve) {
  const n = Math.max(Ac, Math.min(e, Math.round(t.w))), i = Math.max(as, Math.round(t.h));
  return { ...t, w: n, h: i, x: Math.max(0, Math.min(e - n, Math.round(t.x))), y: Math.max(0, Math.round(t.y)) };
}
function je(t, e) {
  const n = [];
  e && n.push(e), t.filter((a) => !e || a.id !== e.id).slice().sort(eo).forEach((a) => {
    let r = a.y;
    for (let c = 0; c < 500; c++) {
      const h = n.filter((A) => Go({ ...a, y: r }, A));
      if (!h.length) break;
      r = Math.max.apply(null, h.map((A) => A.y + A.h));
    }
    n.push({ ...a, y: r });
  });
  const s = [];
  return n.slice().sort((a, r) => eo(a, r) || (e && a.id === e.id ? -1 : 0)).forEach((a) => {
    let r = a.y;
    for (; r > 0 && !s.some((c) => Go({ ...a, y: r - 1 }, c)); ) r--;
    s.push({ ...a, y: r });
  }), t.map((a) => s.filter((r) => r.id === a.id)[0]);
}
function to(t) {
  return t.reduce((e, n) => Math.max(e, n.y + n.h), 0);
}
function Me(t, e) {
  const n = t, s = (n && Array.isArray(n.screens) ? n.screens : n && Array.isArray(n.cards) ? [n] : []).filter((a) => a && Array.isArray(a.cards)).map((a, r) => ({ ...fc(a), id: String(a.id || (r ? "s" + r : "main")), name: String(a.name || "") }));
  return s.length ? s : [{ ...e ? e() : { cols: Ve, cards: [] }, id: "main", name: "" }];
}
function mc() {
  return "s" + Date.now().toString(36) + (cs++).toString(36);
}
function Rt(t, e) {
  return t.name || d("screen.default", { n: e + 1 });
}
function fc(t) {
  if (t.cols === Ve) return Jo(t);
  const e = [], n = (s, a, r, c) => {
    for (let h = a; h < a + c; h++) for (let A = s; A < s + r; A++) if (e[h] && e[h][A]) return !1;
    return !0;
  }, i = t.cards.map((s) => {
    const a = Math.min(s.w || 1, 4), r = s.h || 1;
    for (let c = 0; ; c++)
      for (let h = 0; h + a <= 4; h++)
        if (n(h, c, a, r)) {
          for (let A = c; A < c + r; A++) {
            e[A] = e[A] || [];
            for (let u = h; u < h + a; u++) e[A][u] = !0;
          }
          return { ...s, x: h * 3, y: c * 3, w: a * 3, h: r * 3 };
        }
  });
  return Jo({ ...t, cols: Ve, cards: i });
}
function Jo(t) {
  const e = (s) => typeof s == "number" && isFinite(s);
  let n = t.cards.reduce((s, a) => e(a.y) && e(a.h) ? Math.max(s, a.y + a.h) : s, 0);
  const i = t.cards.map((s) => {
    const a = e(s.w) ? s.w : 3, r = e(s.h) ? s.h : 3;
    if (e(s.x) && e(s.y)) return bt({ ...s, w: a, h: r });
    const c = bt({ ...s, x: 0, y: n, w: a, h: r });
    return n += c.h, c;
  });
  return { ...t, cols: Ve, cards: je(i) };
}
function pc(t) {
  const e = t.slice().sort(eo), n = e.filter((a) => a.m && !a.m.hide).map((a) => bt({ ...a, x: a.m.x, y: a.m.y, w: a.m.w, h: a.m.h }, Ke));
  let i = to(n);
  const s = e.filter((a) => !a.m).map((a) => {
    const r = Math.max(as, Math.min(Ke, Math.round(a.h * 2 / 3))), c = { ...a, x: 0, y: i, w: Ke, h: r };
    return i += r, c;
  });
  return je(n.concat(s));
}
function Sn(t, e) {
  return t.map((n) => {
    const i = e.filter((s) => s.id === n.id)[0];
    return i ? { ...n, m: { x: i.x, y: i.y, w: i.w, h: i.h } } : n;
  });
}
const gc = "photoframe", yt = "photos", bc = 1920;
function ds() {
  return new Promise((t, e) => {
    const n = indexedDB.open(gc, 1);
    n.onupgradeneeded = () => n.result.createObjectStore(yt, { keyPath: "id", autoIncrement: !0 }), n.onsuccess = () => t(n.result), n.onerror = () => e(n.error);
  });
}
function Mo(t, e) {
  return ds().then((n) => new Promise((i, s) => {
    const a = e(n.transaction(yt, t).objectStore(yt));
    a.onsuccess = () => i(a.result), a.onerror = () => s(a.error);
  }));
}
function zn() {
  return ds().then((t) => new Promise((e, n) => {
    const i = [], s = t.transaction(yt, "readonly").objectStore(yt).openCursor();
    s.onsuccess = () => {
      const a = s.result;
      a ? (i.push(a.value), a.continue()) : e(i);
    }, s.onerror = () => n(s.error);
  }));
}
function yc(t) {
  return Mo("readwrite", (e) => e.delete(t));
}
function Xo() {
  return Mo("readwrite", (t) => t.clear());
}
function hs(t) {
  return new Promise((e, n) => {
    const i = new FileReader();
    i.onerror = () => n(i.error), i.onload = () => {
      const s = new Image();
      s.onerror = () => n(new Error(d("errors.decode", { name: t.name }))), s.onload = () => {
        const a = Math.min(1, bc / Math.max(s.width, s.height)), r = document.createElement("canvas");
        r.width = Math.round(s.width * a), r.height = Math.round(s.height * a), r.getContext("2d").drawImage(s, 0, 0, r.width, r.height);
        const c = r.toDataURL("image/jpeg", 0.85);
        r.width = r.height = 0, e(c);
      }, s.src = i.result;
    }, i.readAsDataURL(t);
  });
}
function xc(t) {
  return hs(t).then((e) => Mo("readwrite", (n) => n.add({ data: e }))).then(() => {
  });
}
const xt = "custom:photoframe-card";
function Eo(t) {
  if (!t || typeof t != "object") return null;
  if (t.type === xt) return t;
  const e = [t.views, t.cards, t.sections, t.card ? [t.card] : null];
  for (const n of e)
    if (Array.isArray(n))
      for (const i of n) {
        const s = Eo(i);
        if (s) return s;
      }
  return null;
}
function kc() {
  const t = location.pathname.split("/")[1] || "lovelace";
  return t === "lovelace" ? null : t;
}
function As(t) {
  return t.call({ type: "photoframe/config" }).then((e) => ({ ...e, type: xt }), () => null);
}
function wc(t, e) {
  return t.call({ type: "lovelace/config", url_path: e }).then(
    (n) => Eo(n),
    (n) => {
      if (/not found|config_not_found|No config/i.test(n.message)) return null;
      throw n;
    }
  );
}
class nn {
  // dashboard — путь дашборда с карточкой; не задан — тот, на котором открыта карточка.
  // standalone — это PWA со своим подключением к HA, а не карточка внутри фронтенда HA.
  // integration — данные в интеграции Photo Frame (photoframe/config/*), а не в конфиге дашборда.
  constructor(e, n, i, s = !1, a = !1) {
    this.client = e, this.config = n, this.dashboard = i, this.standalone = s, this.integration = a, this.album = "", this.sourceJob = null, this.queue = Promise.resolve(), this.saving = 0;
  }
  get folder() {
    const e = (this.config.media_folder || "photoframe").replace(/^\/+|\/+$/g, "");
    return this.album && this.album !== "all" ? e + "/" + this.album : e;
  }
  source() {
    return this.config.media_source ? Promise.resolve(this.config.media_source) : (this.sourceJob || (this.sourceJob = this.client.call({ type: "media_source/browse_media", media_content_id: "media-source://media_source" }).then((e) => {
      const i = [e.media_content_id || ""].concat((e.children || []).map((s) => s.media_content_id)).map((s) => (/^media-source:\/\/media_source\/([^/]+)\//.exec(s) || [])[1]).filter(Boolean);
      return i.indexOf("local") !== -1 ? "local" : i[0] || "local";
    }, () => "local")), this.sourceJob);
  }
  // Ссылка на папку фото (или альбом) в медиатеке HA — там их смотрят, удаляют и раскладывают.
  mediaBrowserUrl(e) {
    return this.source().then((n) => {
      const i = "media-source://media_source/" + n + "/" + (this.config.media_folder || "photoframe").replace(/^\/+|\/+$/g, ""), s = ["app,media-source://media_source", "," + i];
      return e && e !== "all" && s.push("," + i + "/" + e), this.client.resolveUrl("/media-browser/browser/" + s.map(encodeURIComponent).join("/"));
    });
  }
  folderId() {
    return this.source().then((e) => "media-source://media_source/" + e + "/" + this.folder);
  }
  get canEdit() {
    return this.integration ? this.config.can_edit !== !1 : this.client.isAdmin;
  }
  // Изменения от других устройств (интеграция рассылает конфиг после каждого сохранения).
  // Пока свои сохранения в пути — пропускаем, иначе раскладка мигнёт назад.
  watch(e) {
    return this.integration ? this.client.subscribeMessage({ type: "photoframe/config/subscribe" }, (n) => {
      this.busy || (this.config = { ...n, type: xt }, e(this.config));
    }) : () => {
    };
  }
  get busy() {
    return this.saving > 0;
  }
  save(e) {
    this.saving++;
    const n = () => {
      if (this.integration) {
        const r = { type: "photoframe/config/save" };
        return ["homes", "layouts", "settings"].forEach((c) => {
          c in e && (r[c] = e[c]);
        }), this.config = { ...this.config, ...e }, this.client.call(r);
      }
      const a = this.dashboard !== void 0 ? this.dashboard : kc();
      return this.client.call({ type: "lovelace/config", url_path: a }).then((r) => {
        const c = Eo(r);
        if (!c) throw new Error(d("errors.card_not_found", { type: xt }));
        return Object.keys(e).forEach((h) => {
          c[h] = e[h];
        }), this.config = { ...this.config, ...e }, this.client.call({ type: "lovelace/config/save", url_path: a, config: r });
      });
    }, i = this.queue.then(n, n), s = () => {
      this.saving--;
    };
    return i.then(s, s), this.queue = i.catch(() => {
    }), i;
  }
  // Только id фото в папке (без подписанных ссылок) — дёшево проверить, не поменялся ли набор.
  // С интеграцией фото готовит сервер: список альбома со ссылками на кадры под размер этого экрана.
  integrationPhotos() {
    const e = $r();
    return this.client.call({
      type: "photoframe/photos",
      album: this.album || "all",
      width: e.w,
      height: e.h
    }).then((n) => n.photos.map((i) => ({ id: i.id, url: this.client.resolveUrl(i.url) })));
  }
  listPhotoIds() {
    return this.integration ? this.integrationPhotos().then((e) => e.map((n) => String(n.id))) : this.folderId().then((e) => this.client.call({
      type: "media_source/browse_media",
      media_content_id: e
    })).then((e) => (e.children || []).filter((n) => n.media_class === "image").map((n) => n.media_content_id));
  }
  // Папки нет — HA отвечает ошибкой; отдаём понятный текст, чтобы показать его в настройках.
  listPhotos() {
    return this.integration ? this.integrationPhotos() : this.folderId().then((e) => this.client.call({
      type: "media_source/browse_media",
      media_content_id: e
    })).then((e) => {
      const n = (e.children || []).filter((i) => i.media_class === "image");
      return Promise.all(n.map((i) => this.client.call({
        type: "media_source/resolve_media",
        media_content_id: i.media_content_id,
        expires: 86400
      }).then((s) => ({ id: i.media_content_id, url: this.client.resolveUrl(s.url) }))));
    }, () => {
      throw new Error(d("errors.upload_folder", { folder: this.folder }));
    });
  }
  // album: куда загрузить (подпапка); не задан — альбом этой рамки, а «все» — корень папки фото.
  addPhoto(e, n) {
    if (this.integration) {
      const i = new FormData();
      return i.append("album", n ?? (this.album && this.album !== "all" ? this.album : "")), i.append("file", e, e.name), this.client.fetch("/api/photoframe/upload", { method: "POST", body: i }).then((s) => {
        if (!s.ok)
          throw s.status === 401 || s.status === 403 ? new Error(d("errors.upload_admin")) : s.status === 415 ? new Error(d("errors.decode", { name: e.name })) : new Error(d("errors.upload", { status: s.status }));
      });
    }
    return hs(e).then((i) => this.addPhotoData(i, e.name.replace(/\.[^.]+$/, "") + ".jpg"));
  }
  // Уже уменьшенный кадр (dataURL JPEG) — так же лежат фото, загруженные в браузер до перехода на HA.
  addPhotoData(e, n) {
    return this.folderId().then((i) => {
      const s = atob(e.split(",")[1]), a = new Uint8Array(s.length);
      for (let c = 0; c < s.length; c++) a[c] = s.charCodeAt(c);
      const r = new FormData();
      return r.append("media_content_id", i), r.append("file", new Blob([a], { type: "image/jpeg" }), n), this.client.fetch("/api/media_source/local_source/upload", { method: "POST", body: r }).then((c) => {
        if (!c.ok)
          throw c.status === 401 || c.status === 403 ? new Error(d("errors.upload_admin")) : c.status === 400 || c.status === 404 ? new Error(d("errors.upload_folder", { folder: this.folder })) : new Error(d("errors.upload", { status: c.status }));
      });
    });
  }
  deletePhoto(e) {
    return this.client.call({ type: "media_source/local_source/remove", media_content_id: e });
  }
}
function us() {
  try {
    if (window.parent === window) return null;
    const t = window.parent.document.querySelector("home-assistant");
    return t && t.hass && t.hass.auth || null;
  } catch {
    return null;
  }
}
const on = "photoframe.haAuth", vc = "hassTokens";
function no(t) {
  try {
    const e = localStorage.getItem(t), n = e ? JSON.parse(e) : null;
    return n && n.hassUrl && n.refresh_token ? n : null;
  } catch {
    return null;
  }
}
function oo(t) {
  try {
    t ? localStorage.setItem(on, JSON.stringify(t)) : localStorage.removeItem(on);
  } catch {
  }
}
function sn(t) {
  return t.replace(/\/+$/, "");
}
function _c() {
  return location.protocol + "//" + location.host + "/";
}
function Cc() {
  return location.protocol + "//" + location.host + location.pathname;
}
function an() {
  if (us())
    return { hassUrl: location.protocol + "//" + location.host, clientId: "", access_token: "", refresh_token: "", expires: 0, embedded: !0 };
  const t = no(on);
  if (t) return t;
  const e = no(vc);
  return e && sn(e.hassUrl) === sn(location.protocol + "//" + location.host) ? e : null;
}
function Mc() {
  oo(null);
}
function Ec(t, e) {
  return new Promise((n, i) => {
    const s = new XMLHttpRequest();
    s.open("POST", sn(t) + "/auth/token"), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.timeout = 15e3, s.onload = () => {
      if (s.status >= 200 && s.status < 300)
        try {
          n(JSON.parse(s.responseText));
        } catch (a) {
          i(a);
        }
      else i(new Error("auth " + s.status));
    }, s.onerror = s.ontimeout = () => i(new Error("network")), s.send(Object.keys(e).map((a) => a + "=" + encodeURIComponent(e[a])).join("&"));
  });
}
function Sc() {
  const t = us();
  if (t) return (t.expired ? t.refreshAccessToken() : Promise.resolve()).then(() => t.accessToken);
  const e = an();
  return e ? e.expires > Date.now() + 6e4 ? Promise.resolve(e.access_token) : Ec(e.hassUrl, { grant_type: "refresh_token", refresh_token: e.refresh_token, client_id: e.clientId }).then(
    (n) => {
      const i = { ...e, access_token: n.access_token, expires: Date.now() + n.expires_in * 1e3 };
      return oo(i), i.access_token;
    },
    (n) => {
      if (/auth 4/.test(n.message))
        return no(on) && oo(null), "";
      throw n;
    }
  ) : Promise.resolve("");
}
function zc(t) {
  const e = sn(t || location.protocol + "//" + location.host);
  location.href = e + "/auth/authorize?response_type=code&client_id=" + encodeURIComponent(_c()) + "&redirect_uri=" + encodeURIComponent(Cc()) + "&state=" + encodeURIComponent(e);
}
const ms = "photoframe.setup", Qe = "photo-frame";
function Ic(t) {
  const e = Date.now();
  return new Promise((n) => {
    const i = () => {
      const s = document.querySelector("home-assistant");
      if (s && s.hass && s.hass.user) return n(s.hass);
      if (Date.now() - e > t) return n(null);
      setTimeout(i, 1e3);
    };
    i();
  });
}
function io(t) {
  try {
    localStorage.setItem(ms, t);
  } catch {
  }
}
function Dc(t) {
  history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function fs(t) {
  const e = d("setup.dashboard_title");
  return t({
    type: "lovelace/dashboards/create",
    url_path: Qe,
    title: e,
    icon: "mdi:image-frame",
    mode: "storage",
    show_in_sidebar: !0,
    require_admin: !1
  }).then(() => t({
    type: "lovelace/config/save",
    url_path: Qe,
    config: { title: e, views: [{ title: e, path: "frame", type: "panel", cards: [{ type: xt, media_folder: "photoframe" }] }] }
  })).then(() => "/" + Qe + "/frame");
}
function Bc(t) {
  const e = document.createElement("div");
  e.setAttribute("style", [
    "position:fixed",
    "right:16px",
    "bottom:16px",
    "z-index:9999",
    "max-width:360px",
    "padding:16px 18px",
    "border-radius:16px",
    "background:#141620",
    "color:#f5f7fb",
    "box-shadow:0 12px 40px rgba(0,0,0,.45)",
    "font:14px/1.45 Roboto,-apple-system,sans-serif",
    "border:1px solid rgba(255,255,255,.12)"
  ].join(";"));
  const n = document.createElement("b");
  n.textContent = d("setup.title");
  const i = document.createElement("div");
  i.setAttribute("style", "margin:6px 0 12px;color:rgba(245,247,251,.72)"), i.textContent = d("setup.text");
  const s = document.createElement("div");
  s.setAttribute("style", "display:flex;justify-content:flex-end;gap:8px");
  const a = (h, A) => {
    const u = document.createElement("button");
    return u.textContent = h, u.setAttribute("style", "border:0;border-radius:10px;padding:8px 14px;font:inherit;font-weight:600;cursor:pointer;" + (A ? "background:#7dd3fc;color:#0b0d14" : "background:rgba(255,255,255,.1);color:#f5f7fb")), s.appendChild(u), u;
  }, r = a(d("setup.later"), !1), c = a(d("setup.create"), !0);
  e.appendChild(n), e.appendChild(i), e.appendChild(s), document.body.appendChild(e), r.onclick = () => {
    io("dismissed"), e.remove();
  }, c.onclick = () => {
    c.disabled = !0, c.textContent = d("common.loading"), fs((h) => t.callWS(h)).then((h) => {
      io("done"), e.remove(), Dc(h);
    }, (h) => {
      c.disabled = !1, c.textContent = d("setup.create"), i.textContent = d("setup.failed", { error: h && h.message || String(h) });
    });
  };
}
function Tc() {
  try {
    if (localStorage.getItem(ms)) return;
  } catch {
    return;
  }
  Ic(3e4).then((t) => {
    if (!(!t || !t.user || !t.user.is_admin))
      return yn(t.language), t.callWS({ type: "lovelace/dashboards/list" }).then((e) => {
        if (e.some((n) => n.url_path === Qe)) {
          io("done");
          return;
        }
        Bc(t);
      });
  }).catch(() => {
  });
}
const Ko = "photoframe.preview", so = (() => {
  const t = /[?&]preview=1\b/.test(location.search);
  try {
    return t && sessionStorage.setItem(Ko, "1"), sessionStorage.getItem(Ko) === "1";
  } catch {
    return t;
  }
})(), J = 12, ps = { thin: 200, light: 300, regular: 500, bold: 700 }, gs = {
  white: "#ffffff",
  contrast: "",
  accent: "",
  warm: "#fcd34d",
  mint: "#6ee7b7",
  sky: "#7dd3fc",
  rose: "#fda4af",
  custom: ""
}, ct = /^#[0-9a-f]{6}$/i;
function $o(t, e) {
  return t === "custom" ? ct.test(e) ? e : "" : gs[t];
}
const bs = "photoframe.lockscreen", ys = "photoframe.hiddenChips", Ne = [];
function lt() {
  return { font: "thin", color: "white", widgetsColor: "", customColor: "#ffb86b", widgetsCustomColor: "#ffb86b", size: "m", layout: "auto", date: !0, datePos: "auto", weather: !0, chipStyle: "auto", widgetsPos: "clock", hidden: [], order: [], grid: null, gridPortrait: null, gridRev: 0 };
}
function kt() {
  try {
    const t = localStorage.getItem(bs);
    if (t) return { ...lt(), ...JSON.parse(t) };
    const e = localStorage.getItem(ys);
    return e ? { ...lt(), hidden: JSON.parse(e) } : lt();
  } catch {
    return lt();
  }
}
function ae(t) {
  try {
    localStorage.setItem(bs, JSON.stringify({ ...kt(), ...t })), localStorage.removeItem(ys);
  } catch {
  }
  Ne.forEach((e) => e());
}
function Oc(t) {
  return Ne.push(t), () => {
    Ne.splice(Ne.indexOf(t), 1);
  };
}
function xs() {
  const [, t] = x(0);
  return H(() => {
    const e = () => t((n) => n + 1);
    return Ne.push(e), () => {
      Ne.splice(Ne.indexOf(e), 1);
    };
  }, []), kt();
}
function Pc(t, e) {
  const n = (i) => {
    const s = e.order.indexOf(i);
    return s === -1 ? 1e6 : s;
  };
  return t.map((i, s) => ({ c: i, i: s })).sort((i, s) => n(i.c.id) - n(s.c.id) || i.i - s.i).map((i) => i.c);
}
function ks(t, e) {
  const n = t.layout === "auto" ? e ? "corner" : "center" : t.layout, i = n === "top" ? { x: 2, y: 1, w: 8, h: 4 } : n === "corner" ? { x: 0, y: 6, w: 6, h: 5 } : { x: 2, y: 6, w: 8, h: 4 }, s = t.widgetsPos === "top" ? { x: 2, y: 0, w: 8, h: 1 } : t.widgetsPos === "bottom" ? { x: 2, y: 10, w: 8, h: 1 } : n === "corner" ? { x: 6, y: 10, w: 6, h: 1 } : { x: 2, y: i.y + i.h, w: 8, h: 1 };
  return { clock: i, widgets: s };
}
function ao(t) {
  const e = Math.max(1, Math.min(J, Math.round(t.w))), n = Math.max(1, Math.min(J, Math.round(t.h))), i = { w: e, h: n, x: Math.max(0, Math.min(J - e, Math.round(t.x))), y: Math.max(0, Math.min(J - n, Math.round(t.y))) };
  return (t.ha === "left" || t.ha === "center" || t.ha === "right") && (i.ha = t.ha), (t.va === "top" || t.va === "middle" || t.va === "bottom") && (i.va = t.va), i;
}
function He(t) {
  const e = t, n = (i) => i && [i.x, i.y, i.w, i.h].every((s) => typeof s == "number" && isFinite(s));
  return e && n(e.clock) && n(e.widgets) ? { clock: ao(e.clock), widgets: ao(e.widgets) } : null;
}
function ei() {
  return window.innerHeight > window.innerWidth ? "portrait" : "landscape";
}
function ws() {
  const [t, e] = x(ei());
  return H(() => {
    const n = () => e(ei());
    return window.addEventListener("resize", n), window.addEventListener("orientationchange", n), () => {
      window.removeEventListener("resize", n), window.removeEventListener("orientationchange", n);
    };
  }, []), t;
}
function vs(t, e) {
  return e === "portrait" ? t.gridPortrait : t.grid;
}
function ro(t, e) {
  return t === "portrait" ? { gridPortrait: e } : { grid: e };
}
const _s = [
  "font",
  "color",
  "widgetsColor",
  "customColor",
  "widgetsCustomColor",
  "size",
  "layout",
  "date",
  "datePos",
  "weather",
  "chipStyle",
  "widgetsPos",
  "hidden",
  "order",
  "grid",
  "gridPortrait"
];
function Lc(t) {
  const e = {};
  return _s.forEach((n) => {
    e[n] = t[n];
  }), e;
}
function So(t) {
  const e = t || {}, n = lt(), i = {};
  return _s.forEach((s) => {
    if (!(s in e)) return;
    const a = e[s];
    s === "grid" || s === "gridPortrait" ? i[s] = a == null ? null : He(a) : Array.isArray(n[s]) ? Array.isArray(a) && (i[s] = a.filter((r) => typeof r == "string")) : typeof a == typeof n[s] && (i[s] = a);
  }), i;
}
const ti = "photoframe.frameId", Cs = "photoframe.frameName";
function Ms(t) {
  try {
    return localStorage.getItem(t) || "";
  } catch {
    return "";
  }
}
function Es(t, e) {
  try {
    localStorage.setItem(t, e);
  } catch {
  }
}
function xn() {
  let t = Ms(ti);
  if (!t) {
    for (t = ""; t.length < 16; ) t += Math.floor(Math.random() * 16).toString(16);
    Es(ti, t);
  }
  return t;
}
function wt() {
  return Ms(Cs);
}
function ni(t) {
  Es(Cs, t);
}
function Hc() {
  const t = navigator.userAgent;
  return /SmartFrame\//.test(t) ? "Android (APK)" : /iPad|iPhone|iPod/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : "Browser";
}
const Ss = () => window.SmartFrame;
function oi() {
  const t = Ss();
  try {
    return t && t.getApkVersion ? t.getApkVersion() : "";
  } catch {
    return "";
  }
}
function jc() {
  const t = Ss();
  try {
    t && t.updateApk && t.updateApk(location.protocol + "//" + location.host + "/photoframe/photoframe.apk");
  } catch {
  }
}
function Qc(t, e) {
  const n = { type: "photoframe/frame/connect", frame_id: xn(), model: Hc(), version: "1.0.0" };
  return wt() && (n.name = wt()), oi() && (n.apk = oi()), t.subscribeMessage(n, e);
}
function At(t, e) {
  t.call({ type: "photoframe/frame/report", frame_id: xn(), ...e }).catch(() => {
  });
}
const ue = "main", zs = "photoframe.cache", Is = "photoframe.mainHome", Ds = "photoframe.startScreen";
function rn() {
  try {
    return localStorage.getItem(Is) || ue;
  } catch {
    return ue;
  }
}
function cn() {
  try {
    return localStorage.getItem(Ds) || "";
  } catch {
    return "";
  }
}
const ln = () => Me(null, ls), It = "photoframe.localBackup", In = "photoframe.migrated";
function Dn(t) {
  return { screens: t.map((e) => ({ id: e.id, name: e.name, cols: e.cols, cards: e.cards })) };
}
function Nc() {
  return {
    settings: {
      haUrl: "",
      slideIntervalMs: 1e4,
      idleSec: 45
    },
    homes: [{ id: ue, name: d("home.default_name") }],
    screens: { [ue]: ln() },
    active: rn(),
    screen: cn(),
    layout: ln()[0],
    photos: [],
    sync: "connecting"
  };
}
function Fc() {
  const t = Nc();
  try {
    const e = localStorage.getItem(zs);
    if (e) {
      const n = JSON.parse(e), i = {};
      if (n.screens) Object.keys(n.screens).forEach((c) => {
        i[c] = Me({ screens: n.screens[c] });
      });
      else {
        const c = n.layouts || (n.layout ? { [ue]: n.layout } : {});
        Object.keys(c).forEach((h) => {
          i[h] = Me(c[h]);
        });
      }
      i[ue] || (i[ue] = t.screens[ue]);
      const s = n.settings || {}, a = { ...t.settings };
      typeof s.haUrl == "string" && (a.haUrl = s.haUrl), typeof s.slideIntervalMs == "number" && (a.slideIntervalMs = s.slideIntervalMs), typeof s.idleSec == "number" && (a.idleSec = s.idleSec);
      const r = n.homes ? n.homes.map((c) => ({ id: c.id, name: c.name })) : t.homes;
      return { ...t, settings: a, homes: r, screens: i, photos: n.photos || [] };
    }
  } catch {
  }
  return t;
}
const co = "photoframe.integration";
function Rc() {
  try {
    return localStorage.getItem(co) === "1";
  } catch {
    return !1;
  }
}
function ii(t) {
  try {
    t ? localStorage.setItem(co, "1") : localStorage.removeItem(co);
  } catch {
  }
}
const Dt = "photoframe.renamePending";
class qc {
  constructor() {
    this.state = Fc(), this.listeners = [], this.card = null, this.ui = { controls: so, editing: !1 }, this.photoTimer = 0, this.bundled = [], this.photoError = "", this.cardError = "", this.haClient = null, this.haLink = "none", this.migration = null, this.frameOff = null, this.gridOff = null, this.frameClient = null, this.screenOn = !0, this.brightness = 100, this.commandListeners = [];
  }
  subscribe(e) {
    return this.listeners.push(e), () => {
      this.listeners = this.listeners.filter((n) => n !== e);
    };
  }
  set(e) {
    const n = { ...this.state, ...e };
    n.homes.some((a) => a.id === n.active) || (n.active = ue);
    const i = n.screens[n.active] || Me(null), s = i.filter((a) => a.id === n.screen)[0] || i[0];
    if (n.screen = s.id, n.layout = s, this.state = n, e.settings || e.screens || e.homes || e.photos)
      try {
        const { settings: a, homes: r, screens: c, photos: h } = this.state;
        localStorage.setItem(zs, JSON.stringify({
          settings: a,
          homes: r,
          screens: c,
          photos: this.state.sync === "local" ? [] : h
        }));
      } catch {
      }
    this.listeners.forEach((a) => a());
  }
  // Показать дом (и его экран; без экрана — первый).
  setActive(e, n = "") {
    (e !== this.state.active || n && n !== this.state.screen) && this.set({ active: e, screen: n });
  }
  // Все экраны всех домов подряд: свайп листает их по кругу, переходя от дома к дому.
  step(e) {
    const n = [];
    if (this.state.homes.forEach((a) => (this.state.screens[a.id] || []).forEach((r) => n.push({ home: a.id, screen: r.id }))), n.length < 2) return;
    let i = 0;
    n.forEach((a, r) => {
      a.home === this.state.active && a.screen === this.state.screen && (i = r);
    });
    const s = n[(i + e + n.length) % n.length];
    this.set({ active: s.home, screen: s.screen });
  }
  // Стартовый экран этого устройства — сюда рамка возвращается, когда её оставили в покое.
  setStart(e, n) {
    try {
      localStorage.setItem(Is, e), localStorage.setItem(Ds, n);
    } catch {
    }
    this.listeners.forEach((i) => i());
  }
  goStart() {
    this.setActive(rn(), cn());
  }
  // Карточки всех экранов дома — информеры на фото собираются со всех.
  homeCards(e = this.state.active) {
    return (this.state.screens[e] || []).reduce((n, i) => n.concat(i.cards), []);
  }
  get photoUrls() {
    return this.bundled.concat(this.state.photos.map((e) => e.url));
  }
  // PWA: пока работаем из браузера и, если вход в HA есть, подключаемся — хранилище переедет в HA.
  start() {
    this.card || this.state.sync !== "connecting" || (this.set({ sync: "local" }), this.reloadLocalPhotos(), this.connectHa());
  }
  // Режим карточки дашборда: источник данных — конфиг карточки, его HA присылает заново при каждом сохранении.
  attachCard(e) {
    const n = this.card;
    this.card = e, this.applyCardConfig(e.config), (!n || n.folder !== e.folder) && this.reloadCardPhotos(), n || (this.photoTimer = window.setInterval(() => this.reloadCardPhotos(), 12 * 36e5), window.setInterval(() => this.checkCardPhotos(), 10 * 6e4));
  }
  // Поменялся ли набор фото в папке — только тогда перечитываем ссылки (иначе кадр на экране перезагрузится).
  checkCardPhotos() {
    this.card && this.card.listPhotoIds().then((e) => {
      const n = this.state.photos.map((i) => String(i.id)).sort().join("|");
      e.slice().sort().join("|") !== n && this.reloadCardPhotos();
    }, () => {
    });
  }
  applyCardConfig(e) {
    const n = e.homes && e.homes.length ? e.homes.map((r) => ({ id: r.id, name: r.name })) : [{ id: ue, name: d("home.default_name") }], i = {};
    n.forEach((r) => {
      const c = e.layouts && e.layouts[r.id];
      i[r.id] = c ? Me(c) : r.id === ue ? ln() : Me(null);
    });
    const s = e.settings || {}, a = { ...this.state.settings };
    typeof s.slideIntervalMs == "number" && (a.slideIntervalMs = s.slideIntervalMs), typeof s.idleSec == "number" && (a.idleSec = s.idleSec), this.set({ sync: "card", homes: n, screens: i, settings: a });
  }
  reloadCardPhotos() {
    return this.card ? this.card.listPhotos().then(
      (e) => {
        this.photoError = "", this.set({ photos: e });
      },
      (e) => {
        this.photoError = e.message, this.set({ photos: [] });
      }
    ) : Promise.resolve();
  }
  saveCard(e) {
    this.card && this.card.save(e).catch((n) => {
      this.cardError = n.message || String(n), this.listeners.forEach((i) => i());
    });
  }
  notify() {
    this.listeners.forEach((e) => e());
  }
  connectHa() {
    const e = an();
    if (!e || this.haClient) return;
    const n = new Co(e.hassUrl, Sc);
    this.haClient = n, this.haLink = "connecting";
    let i = "";
    n.subscribe(() => {
      if (n.status !== i)
        if (i = n.status, n.status === "connected") {
          const s = (a) => As(n).then((r) => {
            if (r) {
              ii(!0), this.useIntegration(n, r);
              return;
            }
            if (Rc() && a > 0) {
              window.setTimeout(() => {
                n.status === "connected" && s(a - 1);
              }, 1e4);
              return;
            }
            ii(!1), this.loadHaCard(), n.subscribeMessage({ type: "subscribe_events", event_type: "lovelace_updated" }, (c) => {
              c && c.data && c.data.url_path === Qe && this.loadHaCard();
            });
          });
          s(30);
        } else n.status === "auth_invalid" && (this.haLink = "error", this.notify());
    }), n.connect(), this.notify();
  }
  // Интеграция Photo Frame: данные в её хранилище, изменения — по её подписке.
  useIntegration(e, n) {
    this.haLink = "ready", this.card && this.card.integration ? (this.card.config = n, this.applyCardConfig(n)) : (this.offerMigration(), this.attachCard(new nn(e, n, void 0, !0, !0))), this.card.watch((s) => this.applyCardConfig(s)), this.frameClient = e, this.connectThisFrame();
  }
  connectThisFrame() {
    const e = this.frameClient;
    if (!e || so) return;
    this.sendRename(), this.frameOff && this.frameOff(), this.frameOff = Qc(e, (h) => h.type === "state" ? this.applyFrameState(h) : this.commandListeners.forEach((A) => A(h)));
    const n = () => ({ lockscreen: Lc(kt()), display: { w: window.innerWidth, h: window.innerHeight } });
    let i = JSON.stringify(n());
    At(e, n());
    const s = () => {
      const h = JSON.stringify(n());
      h !== i && e.status === "connected" && (i = h, At(e, n()));
    };
    this.gridOff && this.gridOff();
    const a = Oc(s);
    let r = 0;
    const c = () => {
      clearTimeout(r), r = window.setTimeout(s, 1500);
    };
    window.addEventListener("resize", c), this.gridOff = () => {
      a(), clearTimeout(r), window.removeEventListener("resize", c);
    };
  }
  // Команды из HA (кнопки устройства, службы): следующее фото, показать камеру… Выполняет App.
  onCommand(e) {
    return this.commandListeners.push(e), () => {
      this.commandListeners = this.commandListeners.filter((n) => n !== e);
    };
  }
  applyFrameState(e) {
    let n = "";
    try {
      n = localStorage.getItem(Dt) || "";
    } catch {
    }
    e.name && e.name !== wt() && !n && ni(e.name);
    const i = e.lockscreen_push;
    if (i && i.rev > kt().gridRev && ae({ ...So(i.patch), gridRev: i.rev }), e.start_screen) {
      const [r, c] = e.start_screen.split("/");
      (r !== rn() || c !== cn()) && this.setStart(r, c);
    }
    e.screen_on !== void 0 && (this.screenOn = e.screen_on), e.brightness !== void 0 && (this.brightness = e.brightness);
    const s = this.card, a = e.album || "all";
    s && s.album !== a && (s.album = a, this.reloadCardPhotos()), this.notify();
  }
  // Коснулись спящей рамки — просыпается и сообщает HA (сущность «Экран» включается).
  wakeScreen() {
    this.screenOn = !0, this.frameClient && At(this.frameClient, { screen_on: !0 }), this.notify();
  }
  // Имя рамки поменяли на ней самой — переподключаемся, HA узнает новое имя.
  // Это имя устройства в HA: при обычном подключении главное — имя из HA, поэтому переименование — отдельным
  // запросом (иначе HA тут же вернул бы старое имя).
  renameFrame(e) {
    if (!(!e || e === wt())) {
      ni(e);
      try {
        localStorage.setItem(Dt, e);
      } catch {
      }
      this.sendRename();
    }
  }
  sendRename() {
    const e = this.frameClient;
    let n = "";
    try {
      n = localStorage.getItem(Dt) || "";
    } catch {
    }
    !n || !e || e.status !== "connected" || e.call({ type: "photoframe/frame/rename", frame_id: xn(), name: n }).then(() => {
      try {
        localStorage.removeItem(Dt);
      } catch {
      }
    }, () => {
    });
  }
  loadHaCard() {
    const e = this.haClient;
    e && (this.card && this.card.busy || wc(e, Qe).then((n) => {
      if (!n) {
        this.haLink = "missing", this.notify();
        return;
      }
      if (this.haLink = "ready", this.card) {
        this.card.config = n, this.applyCardConfig(n);
        return;
      }
      this.offerMigration(), this.attachCard(new nn(e, n, Qe, !0));
    }, () => {
      this.haLink = "error", this.notify();
    }));
  }
  // Создать в HA дашборд «Фоторамка» с карточкой (нужен администратор HA).
  createHaDashboard() {
    const e = this.haClient;
    return e ? fs((n) => e.call(n)).then(() => this.loadHaCard()) : Promise.reject(new Error("not connected"));
  }
  // Первый переход на HA: запоминаем свои экраны (если их меняли) и считаем фото в браузере.
  offerMigration() {
    let e = "";
    try {
      e = localStorage.getItem(In) || "";
    } catch {
    }
    if (e === "done") return;
    if (!e) {
      const { homes: i, screens: s } = this.state, a = i.length > 1 || JSON.stringify(Dn(s[ue] || [])) !== JSON.stringify(Dn(ln()));
      try {
        a && localStorage.setItem(It, JSON.stringify({ homes: i, screens: s })), localStorage.setItem(In, "pending");
      } catch {
      }
    }
    const n = this.backup();
    zn().then((i) => i.length, () => 0).then((i) => {
      n || i ? (this.migration = { screens: !!n, photos: i }, this.notify()) : this.finishMigration();
    });
  }
  backup() {
    try {
      const e = localStorage.getItem(It);
      return e ? JSON.parse(e) : null;
    } catch {
      return null;
    }
  }
  // Заменить экраны в HA теми, что были в браузере.
  migrateScreens() {
    const e = this.backup();
    if (!e || !this.card) return;
    const n = e.homes.map((s) => ({ id: s.id, name: s.name })), i = {};
    n.forEach((s) => {
      i[s.id] = Me({ screens: e.screens[s.id] || [] });
    }), this.set({ homes: n, screens: i }), this.saveCard({ homes: n, layouts: this.packAll() });
    try {
      localStorage.removeItem(It);
    } catch {
    }
    this.updateMigration({ screens: !1 });
  }
  // Фото из браузера — в медиатеку HA; после загрузки из браузера их убираем.
  migratePhotos(e) {
    const n = this.card;
    return n ? zn().then((i) => i.reduce(
      (s, a, r) => s.then(() => n.addPhotoData(a.data, "frame-" + a.id + ".jpg")).then(() => {
        e && e(r + 1, i.length);
      }),
      Promise.resolve()
    )).then(() => Xo()).then(() => (this.updateMigration({ photos: 0 }), this.reloadCardPhotos())) : Promise.resolve();
  }
  dismissMigration() {
    try {
      localStorage.removeItem(It);
    } catch {
    }
    this.finishMigration();
  }
  updateMigration(e) {
    const n = { ...this.migration || { screens: !1, photos: 0 }, ...e };
    !n.screens && !n.photos ? this.finishMigration() : (this.migration = n, this.notify());
  }
  finishMigration() {
    try {
      localStorage.setItem(In, "done");
    } catch {
    }
    this.migration = null, this.notify();
  }
  reloadLocalPhotos() {
    return zn().then((e) => this.set({ photos: e.map((n) => ({ id: n.id, url: n.data })) })).catch(() => this.set({ photos: [] }));
  }
  applyHomes(e) {
    const n = {};
    e.forEach((i) => {
      n[i.id] = this.state.screens[i.id] || Me(null);
    }), this.set({ homes: e, screens: n });
  }
  saveHomes(e) {
    const n = e.map((i) => ({ id: i.id, name: i.name }));
    this.applyHomes(n), this.card && this.saveCard({ homes: n, layouts: this.packAll() });
  }
  // Адрес HA — только этого устройства; слайдшоу — общее (в карточке HA).
  saveSettings(e) {
    this.set({ settings: e }), this.card && this.saveCard({ settings: { slideIntervalMs: e.slideIntervalMs, idleSec: e.idleSec } });
  }
  // Раскладка показанного экрана.
  saveLayout(e) {
    const n = this.state.screen;
    this.saveScreens(this.state.active, this.screensOf().map((i) => i.id === n ? { ...i, cols: e.cols, cards: e.cards } : i));
  }
  screensOf(e = this.state.active) {
    return this.state.screens[e] || Me(null);
  }
  packAll() {
    const e = {};
    return Object.keys(this.state.screens).forEach((n) => {
      e[n] = Dn(this.state.screens[n]);
    }), e;
  }
  // Экраны дома целиком: в конфиг карточки HA (без неё — только в этот браузер, через кэш).
  saveScreens(e, n, i) {
    const s = { screens: { ...this.state.screens, [e]: n } };
    i && (s.screen = i), this.set(s), this.card && this.saveCard({ layouts: this.packAll() });
  }
  // Новый пустой экран в конце списка показанного дома — сразу на него и переходим.
  addScreen(e) {
    const n = { id: mc(), name: e, cols: 12, cards: [] };
    this.saveScreens(this.state.active, this.screensOf().concat(n), n.id);
  }
  renameScreen(e, n) {
    this.saveScreens(this.state.active, this.screensOf().map((i) => i.id === e ? { ...i, name: n } : i));
  }
  // Последний экран дома не удаляется — у дома всегда есть хотя бы один.
  removeScreen(e) {
    const n = this.screensOf();
    if (n.length < 2) return;
    const i = n.map((a) => a.id).indexOf(e), s = n.filter((a) => a.id !== e);
    this.saveScreens(this.state.active, s, s[Math.max(0, i - 1)].id);
  }
  // Сдвинуть экран в списке (dir −1 — левее, +1 — правее).
  moveScreen(e, n) {
    const i = this.screensOf().slice(), s = i.map((c) => c.id).indexOf(e), a = s + n;
    if (s < 0 || a < 0 || a >= i.length) return;
    const r = i[s];
    i[s] = i[a], i[a] = r, this.saveScreens(this.state.active, i);
  }
  // Пачка фото — строго по одному, чтобы не держать в памяти все исходники разом.
  // Ошибка одного файла не останавливает остальные; в конце сообщаем, сколько не загрузилось.
  addPhotos(e, n, i) {
    const s = this.card, a = s ? (A) => s.addPhoto(A, i) : (A) => xc(A), r = () => s ? this.reloadCardPhotos() : this.reloadLocalPhotos(), c = [];
    let h = 0;
    return e.reduce(
      (A, u) => A.then(() => a(u)).catch((m) => {
        c.push(m && m.message || String(m));
      }).then(() => {
        h++, n && n(h, e.length);
      }),
      Promise.resolve()
    ).then(() => h > c.length ? r() : void 0).then(() => {
      if (c.length)
        throw c.length === e.length ? new Error(c[0]) : new Error(d("errors.upload_some", { failed: c.length, total: e.length }) + " — " + c[0]);
    });
  }
  deletePhoto(e) {
    return this.card ? this.card.deletePhoto(String(e)).then(() => this.reloadCardPhotos()) : yc(Number(e)).then(() => this.reloadLocalPhotos());
  }
  clearPhotos() {
    return this.card ? this.state.photos.reduce((e, n) => e.then(() => this.card.deletePhoto(String(n.id))), Promise.resolve()).then(() => this.reloadCardPhotos()) : Xo().then(() => this.reloadLocalPhotos());
  }
}
const le = new qc();
function nt() {
  const [, t] = x(0);
  return H(() => le.subscribe(() => t((e) => e + 1)), []), le;
}
function kn() {
  const t = window.SmartFrame;
  return t && t.setBrightness ? t : null;
}
const Wc = () => !!kn();
function Vc(t, e) {
  const n = kn();
  if (n)
    try {
      n.setBrightness(t ? Math.max(0.02, e / 100) : 0), n.setScreenOn && n.setScreenOn(t);
    } catch {
    }
}
function Uc(t) {
  window.SmartFrameWake = t;
}
function Yc(t, e) {
  return t ? Wc() ? 0 : Math.round((100 - e) * 0.85) / 100 : 1;
}
function Zc() {
  const t = kn();
  try {
    return t && t.getAutostart ? !!t.getAutostart() : null;
  } catch {
    return null;
  }
}
function Gc(t) {
  const e = kn();
  try {
    e && e.setAutostart && e.setAutostart(t);
  } catch {
  }
}
function wn() {
  const t = window.SmartFrame;
  return t && t.showPhoto ? t : null;
}
function si(t) {
  return !!wn() && /^(https?:)?\//.test(t);
}
function Bs(t) {
  return /^https?:/.test(t) ? t : location.protocol + "//" + location.host + t;
}
function ai(t, e, n) {
  const i = wn();
  try {
    i && i.showPhoto(t ? Bs(t) : "", e, n);
  } catch {
  }
}
function Jc(t) {
  const e = wn();
  try {
    e && e.preloadPhoto && e.preloadPhoto(Bs(t));
  } catch {
  }
}
function Xc(t) {
  window.SmartFramePhoto = (e, n) => t(n);
}
function Bn(t) {
  const e = wn();
  try {
    e && e.setPhotosVisible && e.setPhotosVisible(t);
  } catch {
  }
}
const st = {};
function Kc(t, e, n) {
  t /= 255, e /= 255, n /= 255;
  const i = Math.max(t, e, n), s = Math.min(t, e, n), a = (i + s) / 2;
  if (i === s) return [0, 0, a];
  const r = i - s, c = a > 0.5 ? r / (2 - i - s) : r / (i + s);
  return [(i === t ? (e - n) / r + (e < n ? 6 : 0) : i === e ? (n - t) / r + 2 : (t - e) / r + 4) * 60, c, a];
}
function $c(t) {
  return new Promise((e) => {
    const n = new Image();
    n.onload = () => {
      try {
        const i = 48 / Math.max(n.width, n.height), s = document.createElement("canvas");
        s.width = Math.max(1, Math.round(n.width * i)), s.height = Math.max(1, Math.round(n.height * i));
        const a = s.getContext("2d");
        a.drawImage(n, 0, 0, s.width, s.height);
        const r = a.getImageData(0, 0, s.width, s.height).data;
        let c = 0, h = 0, A = 0, u = 0;
        for (let p = 0; p < r.length; p += 4)
          c += r[p], h += r[p + 1], A += r[p + 2], u++;
        const m = Kc(c / u, h / u, A / u), l = Math.round(m[0]), f = Math.round(Math.min(Math.max(m[1], 0.45), 0.85) * 100);
        e({
          thumb: s.toDataURL("image/jpeg", 0.7),
          accent: "hsl(" + l + "," + f + "%,68%)",
          accentSoft: "hsla(" + l + "," + f + "%,60%,0.22)"
        });
      } catch {
        e(null);
      }
    }, n.onerror = () => e(null), n.src = t;
  });
}
function el(t) {
  const [e, n] = x(t && st[t] || null);
  return H(() => {
    if (!t) return;
    if (t in st) {
      st[t] && n(st[t]);
      return;
    }
    let i = !0;
    return $c(t).then((s) => {
      st[t] = s, i && s && n(s);
    }), () => {
      i = !1;
    };
  }, [t]), e;
}
const tl = 0.18, ri = 0.5, nl = 600, at = 10, ol = 0.12;
function Tn(t, e) {
  for (; t && t.nodeType === 1; t = t.parentElement)
    if ((t.matches || t.webkitMatchesSelector).call(t, e)) return t;
  return null;
}
function ci(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientY : t.clientY;
}
function li(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientX : t.clientX;
}
function il(t, e, n, i, s, a) {
  H(() => {
    const r = t.root.current;
    if (!r || !i) return;
    let c = 0, h = 0, A = 0, u = 0, m = 0, l = !1, f = 0, p = "";
    const _ = (I) => {
      const z = t.controls.current, M = t.ambient.current, g = t.soft.current, D = r.clientHeight;
      z && (z.style.opacity = String(I), z.style.transform = "scale(" + (0.96 + 0.04 * I).toFixed(4) + ")"), M && (M.style.transform = "translateY(" + Math.round(-I * D) + "px)"), g && (g.style.opacity = String(I));
    }, w = () => {
      [t.controls.current, t.ambient.current, t.soft.current].forEach((I) => {
        I && (I.style.opacity = "", I.style.transform = "");
      });
    }, k = (I) => {
      const z = I.target;
      e && (!Tn(z, ".bar") || Tn(z, "button")) || (c = ci(I), h = li(I), A = Date.now(), u = 0, m = 0, p = "", l = !0, r.classList.add("dragging"), clearTimeout(f), !e && s && !Tn(z, "button") && (f = window.setTimeout(() => {
        !l || Math.abs(u) > at || (l = !1, r.classList.remove("dragging"), w(), s());
      }, nl)));
    }, b = (I) => {
      if (!l) return;
      if (u = ci(I) - c, m = li(I) - h, (Math.abs(u) > at || Math.abs(m) > at) && clearTimeout(f), !p && (Math.abs(u) > at || Math.abs(m) > at) && (p = !e && a && Math.abs(m) > Math.abs(u) ? "x" : "y"), p === "x") {
        const g = t.ambient.current, D = r.clientWidth || 1;
        g && (g.style.transform = "translateX(" + Math.round(m * 0.25) + "px)", g.style.opacity = String(1 - Math.min(1, Math.abs(m) / D) * 0.6)), I.cancelable && I.preventDefault();
        return;
      }
      const z = r.clientHeight, M = e ? 1 - Math.max(0, u) / z : Math.max(0, -u) / z;
      _(Math.min(1, Math.max(0, M))), I.cancelable && I.preventDefault();
    }, y = () => {
      if (clearTimeout(f), !l) return;
      if (l = !1, r.classList.remove("dragging"), p === "x") {
        w();
        const g = Math.abs(m) / Math.max(1, Date.now() - A) > ri && Math.abs(m) > 30;
        a && (Math.abs(m) > r.clientWidth * ol || g) && a(m < 0 ? 1 : -1);
        return;
      }
      const I = r.clientHeight, z = Math.abs(u) / Math.max(1, Date.now() - A), M = Math.abs(u) > I * tl || z > ri && Math.abs(u) > 30;
      w(), !e && u < 0 && M && n(!0), e && u > 0 && M && n(!1);
    };
    return r.addEventListener("touchstart", k), r.addEventListener("touchmove", b), r.addEventListener("touchend", y), r.addEventListener("touchcancel", y), r.addEventListener("mousedown", k), window.addEventListener("mousemove", b), window.addEventListener("mouseup", y), () => {
      clearTimeout(f), r.removeEventListener("touchstart", k), r.removeEventListener("touchmove", b), r.removeEventListener("touchend", y), r.removeEventListener("touchcancel", y), r.removeEventListener("mousedown", k), window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", y);
    };
  }, [e, i, a]);
}
const dn = (...t) => t.filter((e, n, i) => !!e && e.trim() !== "" && i.indexOf(e) === n).join(" ").trim();
function sl(t, e, n = []) {
  throw new Error("[lucide]: iconNode is required when icon name is used");
}
const al = (t) => {
  let e = "", n = !1;
  for (const i of t) {
    if (i === "-" || i === "_" || i <= " ") {
      n = e.length > 0;
      continue;
    }
    e.length === 0 ? e += i.toLowerCase() : e += n ? i.toUpperCase() : i, n = !1;
  }
  return e;
};
const rl = (t) => {
  const e = al(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
const Pe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function On(t) {
  return t != null;
}
function cl(t, e = {}) {
  const n = e.attributeNames ?? {}, i = (l) => n[l] ?? l, s = t.size ?? t.width ?? Pe.width, a = t.size ?? t.height ?? Pe.height, r = t.aliases?.filter((l) => typeof l == "string" && l.trim() !== "").map((l) => `lucide-${l}`) ?? [], c = [...t.name ? [`lucide-${t.name}`] : [], ...r], h = e.className?.split(" ").filter(Boolean) ?? [], A = e.includeDefaultClasses === !1 ? dn(...h) : dn("lucide", ...c, ...h), u = e.absoluteStrokeWidth ? Number(e.strokeWidth ?? Pe["stroke-width"]) * Number(t.size ?? t.width ?? Pe.width) / Number(e.size ?? e.width ?? Pe.width) : e.strokeWidth ?? Pe["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Pe).reduce((l, [f, p]) => (l[i(f)] = p, l), {}),
      ..."color" in e && e.color && {
        [i("stroke")]: e.color
      },
      ..."size" in e && On(e.size) && {
        [i("width")]: e.size,
        [i("height")]: e.size
      },
      ..."width" in e && On(e.width) && {
        [i("width")]: e.width
      },
      ..."height" in e && On(e.height) && {
        [i("height")]: e.height
      },
      [i("stroke-width")]: u,
      ...A && {
        [i("class")]: A
      },
      [i("viewBox")]: `0 0 ${s} ${a}`,
      ...e.hasA11yProp === !1 ? {
        [i("aria-hidden")]: "true"
      } : {},
      ..."attributes" in e && e.attributes
    },
    t.node.map((l) => {
      const [f, p, _] = l, w = e.nonScalingStroke ? { [i("vector-effect")]: "non-scaling-stroke", ...p } : p;
      return _ ? [f, w, _] : [f, w];
    })
  ];
}
const ll = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
const dl = pn({
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  absoluteStrokeWidth: !1,
  nonScalingStroke: !1,
  class: ""
}), hl = () => Xt(dl);
const Al = ({
  color: t,
  size: e,
  width: n,
  height: i,
  strokeWidth: s,
  absoluteStrokeWidth: a,
  nonScalingStroke: r,
  children: c,
  iconNode: h = [],
  icon: A = {
    node: h,
    aliases: [],
    size: 24
  },
  class: u = "",
  ...m
}) => {
  const {
    size: l = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: p = !1,
    nonScalingStroke: _ = !1,
    color: w = "currentColor",
    class: k = ""
  } = hl() ?? {}, [b, y, I = []] = cl(A, {
    color: t ?? w,
    width: n ?? e ?? l,
    height: i ?? e ?? l,
    strokeWidth: s ?? f,
    absoluteStrokeWidth: a ?? p,
    nonScalingStroke: r ?? _,
    className: dn(k, u),
    hasA11yProp: !!c || ll(m),
    attributes: m
  });
  return Gt(b, { ...y }, [
    ...I.map(([z, M]) => Gt(z, M)),
    ...qi(c)
  ]);
};
function S(t, e, n = []) {
  const i = typeof t == "string" ? sl(t, e, n) : t, s = ({ class: a = "", className: r = "", children: c, ...h }) => Gt(
    Al,
    {
      ...h,
      icon: i,
      class: dn(a, r)
    },
    c
  );
  return i.name && (s.displayName = rl(i.name)), s;
}
const Ts = {
  name: "activity",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ]
};
Ts.node;
const ul = S(Ts);
const Os = {
  name: "air-vent",
  size: 24,
  node: [
    ["path", { d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12", key: "yd12zl" }],
    [
      "path",
      {
        d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
        key: "larmp2"
      }
    ],
    ["path", { d: "M6 8h12", key: "6g4wlu" }],
    ["path", { d: "M6.6 15.572A2 2 0 1 0 10 17v-5", key: "1x1kqn" }]
  ]
};
Os.node;
const Ps = S(Os);
const Ls = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
Ls.node;
const Hs = S(Ls);
const js = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
js.node;
const Qs = S(js);
const Ns = {
  name: "baby",
  size: 24,
  node: [
    ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
    ["path", { d: "M15 12h.01", key: "1k8ypt" }],
    [
      "path",
      {
        d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
        key: "11xh7x"
      }
    ],
    ["path", { d: "M9 12h.01", key: "157uk2" }]
  ]
};
Ns.node;
const ml = S(Ns);
const Fs = {
  name: "bed",
  size: 24,
  node: [
    ["path", { d: "M2 4v16", key: "vw9hq8" }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
    ["path", { d: "M2 17h20", key: "18nfp3" }],
    ["path", { d: "M6 8v9", key: "1yriud" }]
  ]
};
Fs.node;
const fl = S(Fs);
const Rs = {
  name: "blinds",
  size: 24,
  node: [
    ["path", { d: "M3 3h18", key: "o7r712" }],
    ["path", { d: "M20 7H8", key: "gd2fo2" }],
    ["path", { d: "M20 11H8", key: "1ynp89" }],
    ["path", { d: "M10 19h10", key: "19hjk5" }],
    ["path", { d: "M8 15h12", key: "1yqzne" }],
    ["path", { d: "M4 3v14", key: "fggqzn" }],
    ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }]
  ]
};
Rs.node;
const pl = S(Rs);
const qs = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
qs.node;
const gl = S(qs);
const Ws = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
Ws.node;
const bl = S(Ws);
const Vs = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
Vs.node;
const Us = S(Vs);
const Ys = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
Ys.node;
const Zs = S(Ys);
const Gs = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
};
Gs.node;
const Js = S(Gs);
const Xs = {
  name: "cloud-drizzle",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M8 19v1", key: "1dk2by" }],
    ["path", { d: "M8 14v1", key: "84yxot" }],
    ["path", { d: "M16 19v1", key: "v220m7" }],
    ["path", { d: "M16 14v1", key: "g12gj6" }],
    ["path", { d: "M12 21v1", key: "q8vafk" }],
    ["path", { d: "M12 16v1", key: "1mx6rx" }]
  ]
};
Xs.node;
const yl = S(Xs);
const Ks = {
  name: "cloud-fog",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 17H7", key: "pygtm1" }],
    ["path", { d: "M17 21H9", key: "1u2q02" }]
  ]
};
Ks.node;
const xl = S(Ks);
const $s = {
  name: "cloud-lightning",
  size: 24,
  node: [
    ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
    ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
  ]
};
$s.node;
const Pn = S($s);
const ea = {
  name: "cloud-snow",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M8 15h.01", key: "a7atzg" }],
    ["path", { d: "M8 19h.01", key: "puxtts" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
    ["path", { d: "M12 21h.01", key: "h35vbk" }],
    ["path", { d: "M16 15h.01", key: "rnfrdf" }],
    ["path", { d: "M16 19h.01", key: "1vcnzz" }]
  ]
};
ea.node;
const di = S(ea);
const ta = {
  name: "cloud-rain",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 14v6", key: "1j4efv" }],
    ["path", { d: "M8 14v6", key: "17c4r9" }],
    ["path", { d: "M12 16v6", key: "c8a4gj" }]
  ]
};
ta.node;
const kl = S(ta);
const na = {
  name: "cloud-sun",
  size: 24,
  node: [
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
    ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
    ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }]
  ]
};
na.node;
const oa = S(na);
const ia = {
  name: "cloud-upload",
  size: 24,
  node: [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
  ],
  aliases: ["upload-cloud"]
};
ia.node;
const wl = S(ia);
const sa = {
  name: "cloud",
  size: 24,
  node: [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]
};
sa.node;
const aa = S(sa);
const ra = {
  name: "cooking-pot",
  size: 24,
  node: [
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
    ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "u0tga0" }],
    ["path", { d: "m4 8 16-4", key: "16g0ng" }],
    [
      "path",
      {
        d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",
        key: "12cejc"
      }
    ]
  ]
};
ra.node;
const vl = S(ra);
const ca = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
ca.node;
const _l = S(ca);
const la = {
  name: "door-open",
  size: 24,
  node: [
    ["path", { d: "M10 21H2", key: "1sthdo" }],
    ["path", { d: "M10 3H7a2 2 0 00-2 2v16", key: "15gt7x" }],
    ["path", { d: "M14 12h.01", key: "1jfl7z" }],
    [
      "path",
      {
        d: "M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z",
        key: "tyvg9a"
      }
    ],
    ["path", { d: "M22 21h-3", key: "1ec3tr" }]
  ]
};
la.node;
const Cl = S(la);
const da = {
  name: "droplets",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
        key: "1ptgy4"
      }
    ],
    [
      "path",
      {
        d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
        key: "1sl1rz"
      }
    ]
  ]
};
da.node;
const Ue = S(da);
const ha = {
  name: "eighth-notes",
  size: 24,
  node: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19", key: "uy6ho8" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
    ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }]
  ],
  aliases: ["music"]
};
ha.node;
const Ml = S(ha);
const Aa = {
  name: "eye-off",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f"
      }
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a"
      }
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }]
  ]
};
Aa.node;
const ua = S(Aa);
const ma = {
  name: "fan",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
        key: "484a7f"
      }
    ],
    ["path", { d: "M12 12v.01", key: "u5ubse" }]
  ]
};
ma.node;
const fa = S(ma);
const pa = {
  name: "flame",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih"
      }
    ]
  ]
};
pa.node;
const ga = S(pa);
const ba = {
  name: "gauge",
  size: 24,
  node: [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
  ]
};
ba.node;
const ya = S(ba);
const xa = {
  name: "grid-3x3",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M3 15h18", key: "5xshup" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "M15 3v18", key: "14nvp0" }]
  ],
  aliases: ["grid", "grid-3-x-3"]
};
xa.node;
const El = S(xa);
const ka = {
  name: "house",
  size: 24,
  node: [
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1"
      }
    ]
  ],
  aliases: ["home"]
};
ka.node;
const Sl = S(ka);
const wa = {
  name: "image-plus",
  size: 24,
  node: [
    ["path", { d: "M16 5h6", key: "1vod17" }],
    ["path", { d: "M19 2v6", key: "4bpg5p" }],
    ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
  ]
};
wa.node;
const zl = S(wa);
const va = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
va.node;
const _a = S(va);
const Ca = {
  name: "lamp-ceiling",
  size: 24,
  node: [
    ["path", { d: "M12 2v5", key: "nd4vlx" }],
    ["path", { d: "M14.829 15.998a3 3 0 1 1-5.658 0", key: "1pybiy" }],
    [
      "path",
      {
        d: "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z",
        key: "ma1wor"
      }
    ]
  ]
};
Ca.node;
const Il = S(Ca);
const Ma = {
  name: "lamp-desk",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z",
        key: "sb8slu"
      }
    ],
    ["path", { d: "m14.207 4.793-3.414 3.414", key: "m2x3oj" }],
    [
      "path",
      { d: "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", key: "8b3myj" }
    ],
    ["path", { d: "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18", key: "43s6cu" }]
  ]
};
Ma.node;
const Dl = S(Ma);
const Ea = {
  name: "lamp",
  size: 24,
  node: [
    ["path", { d: "M12 12v6", key: "3ahymv" }],
    [
      "path",
      {
        d: "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z",
        key: "1l7kg2"
      }
    ],
    [
      "path",
      { d: "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z", key: "1mmzpi" }
    ]
  ]
};
Ea.node;
const Bl = S(Ea);
const Sa = {
  name: "layout-grid",
  size: 24,
  node: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
  ]
};
Sa.node;
const Tl = S(Sa);
const za = {
  name: "lightbulb",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb"
      }
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }]
  ]
};
za.node;
const Ol = S(za);
const Ia = {
  name: "lock",
  size: 24,
  node: [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
  ]
};
Ia.node;
const Pl = S(Ia);
const Da = {
  name: "log-in",
  size: 24,
  node: [
    ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
    ["path", { d: "M15 12H3", key: "6jk70r" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
  ]
};
Da.node;
const Ll = S(Da);
const Ba = {
  name: "log-out",
  size: 24,
  node: [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
  ]
};
Ba.node;
const Hl = S(Ba);
const Ta = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
};
Ta.node;
const jl = S(Ta);
const Oa = {
  name: "minus",
  size: 24,
  node: [["path", { d: "M5 12h14", key: "1ays0h" }]]
};
Oa.node;
const Ql = S(Oa);
const Pa = {
  name: "monitor",
  size: 24,
  node: [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
  ]
};
Pa.node;
const Nl = S(Pa);
const La = {
  name: "moon",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ]
};
La.node;
const Ha = S(La);
const ja = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
ja.node;
const Fl = S(ja);
const Qa = {
  name: "pencil",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
      }
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
  ]
};
Qa.node;
const Na = S(Qa);
const Fa = {
  name: "play",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ]
};
Fa.node;
const Rl = S(Fa);
const Ra = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Ra.node;
const Ze = S(Ra);
const qa = {
  name: "plug",
  size: 24,
  node: [
    ["path", { d: "M12 22v-5", key: "1ega77" }],
    ["path", { d: "M15 8V2", key: "18g5xt" }],
    [
      "path",
      { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z", key: "1xoxul" }
    ],
    ["path", { d: "M9 8V2", key: "14iosj" }]
  ]
};
qa.node;
const ql = S(qa);
const Wa = {
  name: "power",
  size: 24,
  node: [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
  ]
};
Wa.node;
const vt = S(Wa);
const Va = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
Va.node;
const Wl = S(Va);
const Ua = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
  ]
};
Ua.node;
const Vl = S(Ua);
const Ya = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
Ya.node;
const Ul = S(Ya);
const Za = {
  name: "settings",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
  ]
};
Za.node;
const Yl = S(Za);
const Ga = {
  name: "shield",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ]
  ]
};
Ga.node;
const Zl = S(Ga);
const Ja = {
  name: "skip-back",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
        key: "15892j"
      }
    ],
    ["path", { d: "M3 20V4", key: "1ptbpl" }]
  ]
};
Ja.node;
const Gl = S(Ja);
const Xa = {
  name: "skip-forward",
  size: 24,
  node: [
    ["path", { d: "M21 4v16", key: "7j8fe9" }],
    [
      "path",
      {
        d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
        key: "zs4d6"
      }
    ]
  ]
};
Xa.node;
const Jl = S(Xa);
const Ka = {
  name: "smartphone",
  size: 24,
  node: [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }]
  ]
};
Ka.node;
const Xl = S(Ka);
const $a = {
  name: "snowflake",
  size: 24,
  node: [
    ["path", { d: "m10 20-1.25-2.5L6 18", key: "18frcb" }],
    ["path", { d: "M10 4 8.75 6.5 6 6", key: "7mghy3" }],
    ["path", { d: "m14 20 1.25-2.5L18 18", key: "1chtki" }],
    ["path", { d: "m14 4 1.25 2.5L18 6", key: "1b4wsy" }],
    ["path", { d: "m17 21-3-6h-4", key: "15hhxa" }],
    ["path", { d: "m17 3-3 6 1.5 3", key: "11697g" }],
    ["path", { d: "M2 12h6.5L10 9", key: "kv9z4n" }],
    ["path", { d: "m20 10-1.5 2 1.5 2", key: "1swlpi" }],
    ["path", { d: "M22 12h-6.5L14 15", key: "1mxi28" }],
    ["path", { d: "m4 10 1.5 2L4 14", key: "k9enpj" }],
    ["path", { d: "m7 21 3-6-1.5-3", key: "j8hb9u" }],
    ["path", { d: "m7 3 3 6h4", key: "1otusx" }]
  ]
};
$a.node;
const zo = S($a);
const er = {
  name: "sofa",
  size: 24,
  node: [
    ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }],
    [
      "path",
      {
        d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
        key: "xacw8m"
      }
    ],
    ["path", { d: "M4 18v2", key: "jwo5n2" }],
    ["path", { d: "M20 18v2", key: "1ar1qi" }],
    ["path", { d: "M12 4v9", key: "oqhhn3" }]
  ]
};
er.node;
const Kl = S(er);
const tr = {
  name: "sparkles",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr"
      }
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
  ],
  aliases: ["stars"]
};
tr.node;
const lo = S(tr);
const nr = {
  name: "speaker",
  size: 24,
  node: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
    ["path", { d: "M12 14h.01", key: "1etili" }]
  ]
};
nr.node;
const or = S(nr);
const ir = {
  name: "sun",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
  ]
};
ir.node;
const sr = S(ir);
const ar = {
  name: "table-2",
  size: 24,
  node: [
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
  ]
};
ar.node;
const $l = S(ar);
const rr = {
  name: "thermometer",
  size: 24,
  node: [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]]
};
rr.node;
const cr = S(rr);
const lr = {
  name: "trash",
  size: 24,
  node: [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
  ],
  aliases: ["trash-2"]
};
lr.node;
const _t = S(lr);
const dr = {
  name: "tv",
  size: 24,
  node: [
    ["path", { d: "m17 2-5 5-5-5", key: "16satq" }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]
  ]
};
dr.node;
const ho = S(dr);
const hr = {
  name: "video-off",
  size: 24,
  node: [
    [
      "path",
      { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196", key: "w8jjjt" }
    ],
    ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2", key: "1xawa7" }],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }]
  ]
};
hr.node;
const ed = S(hr);
const Ar = {
  name: "video",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec"
      }
    ],
    ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
  ]
};
Ar.node;
const td = S(Ar);
const ur = {
  name: "volume-2",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw"
      }
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
  ]
};
ur.node;
const nd = S(ur);
const mr = {
  name: "volume-x",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",
        key: "1p7khw"
      }
    ],
    ["path", { d: "m16.5 14.5 5-5", key: "cul3yw" }],
    ["path", { d: "m16.5 9.5 5 5", key: "1akey5" }]
  ]
};
mr.node;
const od = S(mr);
const fr = {
  name: "washing-machine",
  size: 24,
  node: [
    ["path", { d: "M3 6h3", key: "155dbl" }],
    ["path", { d: "M17 6h.01", key: "e2y6kg" }],
    ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2", key: "od3kk9" }],
    ["circle", { cx: "12", cy: "13", r: "5", key: "nlbqau" }],
    ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5", key: "17lach" }]
  ]
};
fr.node;
const id = S(fr);
const pr = {
  name: "wifi-off",
  size: 24,
  node: [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
    ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
    ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }]
  ]
};
pr.node;
const sd = S(pr);
const gr = {
  name: "wind",
  size: 24,
  node: [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
  ]
};
gr.node;
const hn = S(gr);
const br = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
br.node;
const Ge = S(br);
const yr = {
  name: "zap",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",
        key: "1v7up4"
      }
    ]
  ]
};
yr.node;
const ad = S(yr);
function rd(t) {
  return new Promise((e) => {
    const n = new Image();
    n.onerror = () => e({ w: 0, h: 0, glow: "" }), n.onload = () => {
      let i = "";
      try {
        const s = 48 / Math.max(n.naturalWidth, n.naturalHeight), a = document.createElement("canvas");
        a.width = Math.max(1, Math.round(n.naturalWidth * s)), a.height = Math.max(1, Math.round(n.naturalHeight * s)), a.getContext("2d").drawImage(n, 0, 0, a.width, a.height), i = a.toDataURL("image/jpeg", 0.7);
      } catch {
      }
      e({ w: n.naturalWidth, h: n.naturalHeight, glow: i });
    }, n.src = t;
  });
}
function cd({ urls: t, index: e, tone: n, soft: i, softRef: s, onShow: a }) {
  const r = oc(), c = es(), [h, A] = x([]), u = re(0), m = t.length, l = m ? t[e % m] : "", f = !!l && si(l);
  return H(() => Xc(a), []), H(() => {
    const p = document.documentElement;
    f ? p.classList.add("native-photos") : p.classList.remove("native-photos");
  }, [f]), H(() => {
    if (f) {
      A([]), ai(l, r, c === "lite"), m > 1 && Jc(t[(e + 1) % m]);
      return;
    }
    if (si("/") && ai("", r, !1), !l) {
      A([]);
      return;
    }
    let p = !0;
    return Uo(l).then((_) => rd(_).then((w) => ({ url: _, m: w }))).then(({ url: _, m: w }) => {
      if (!p) return;
      const k = ++u.current;
      A((b) => b.slice(-1).map((y) => ({ ...y, on: !1 })).concat({ id: k, url: _, on: !1, w: w.w, h: w.h, glow: w.glow })), requestAnimationFrame(() => requestAnimationFrame(() => {
        p && A((b) => b.map((y) => y.id === k ? { ...y, on: !0 } : y));
      })), a(_);
    }), m > 1 && Uo(t[(e + 1) % m]), () => {
      p = !1;
    };
  }, [l, f, f ? r : "", f ? c : ""]), /* @__PURE__ */ o("div", { class: "backdrop", children: [
    m === 0 && /* @__PURE__ */ o("div", { class: "slide active aurora" }),
    h.map((p) => ic(p.w, p.h) ? /* @__PURE__ */ o("div", { class: "slide contain" + (p.on ? " active" : ""), children: [
      p.glow && /* @__PURE__ */ o("div", { class: "slide-glow", style: { backgroundImage: "url(" + p.glow + ")" } }),
      /* @__PURE__ */ o("div", { class: "slide-photo", style: { backgroundImage: "url(" + p.url + ")" } })
    ] }, p.id) : /* @__PURE__ */ o("div", { class: "slide" + (p.on ? " active" : ""), style: { backgroundImage: "url(" + p.url + ")" } }, p.id)),
    /* @__PURE__ */ o("div", { ref: s, class: "soft" + (i ? " on" : ""), style: n ? { backgroundImage: "url(" + n.thumb + ")" } : void 0 }),
    /* @__PURE__ */ o("div", { class: "shade" + (i ? " deep" : "") })
  ] });
}
const An = {
  lightbulb: Ol,
  lamp: Bl,
  "lamp-ceiling": Il,
  "lamp-desk": Dl,
  plug: ql,
  fan: fa,
  tv: ho,
  speaker: or,
  thermometer: cr,
  droplets: Ue,
  snowflake: zo,
  flame: ga,
  wind: hn,
  sun: sr,
  moon: Ha,
  shield: Zl,
  door: Cl,
  lock: Pl,
  blinds: pl,
  video: td,
  "washing-machine": id,
  zap: ad,
  gauge: ya,
  activity: ul,
  "air-vent": Ps,
  "cloud-sun": oa,
  sparkles: lo,
  house: Sl,
  sofa: Kl,
  bed: fl,
  "cooking-pot": vl,
  baby: ml
};
function Je(t, e = "house") {
  return An[t] || An[e];
}
function Io(t, e) {
  const n = t.split(".")[0];
  return n === "light" ? "lamp-ceiling" : n === "switch" ? "lamp" : n === "fan" ? "fan" : n === "camera" ? "video" : n === "climate" ? "air-vent" : n === "weather" ? "cloud-sun" : n === "media_player" ? e === "tv" ? "tv" : "speaker" : n === "lock" ? "lock" : n === "cover" ? "blinds" : n === "scene" || n === "script" || n === "automation" ? "sparkles" : e === "temperature" ? "thermometer" : e === "humidity" || e === "moisture" ? "droplets" : e === "door" || e === "window" || e === "opening" ? "door" : e === "power" || e === "voltage" || e === "energy" || e === "current" ? "zap" : e === "motion" || e === "occupancy" ? "activity" : "gauge";
}
function xr(t = 1e3) {
  const [e, n] = x(/* @__PURE__ */ new Date());
  return H(() => {
    const i = setInterval(() => n(/* @__PURE__ */ new Date()), t);
    return () => clearInterval(i);
  }, [t]), e;
}
function Ln(t) {
  return t < 10 ? "0" + t : String(t);
}
function kr(t, e = !1) {
  return Ln(t.getHours()) + ":" + Ln(t.getMinutes()) + (e ? ":" + Ln(t.getSeconds()) : "");
}
function wr(t) {
  return d("date.full", { weekday: et("date.weekdays")[t.getDay()], day: t.getDate(), month: et("date.months")[t.getMonth()] });
}
const Ce = "#0891b2", Ao = "#d97706", hi = "rgba(255,255,255,0.13)", ld = "rgba(255,255,255,0.04)", Ai = "rgba(255,255,255,0.08)", ui = "#141620", Xe = 210, Ae = { l: 46, r: 14, t: 14, b: 26 };
function un(t) {
  return t < 10 ? "0" + t : String(t);
}
function Ye(t) {
  const e = new Date(t);
  return un(e.getHours()) + ":" + un(e.getMinutes());
}
function Ct(t) {
  const e = new Date(t);
  return d("date.day_month", { day: e.getDate(), month: et("date.months_short")[e.getMonth()] });
}
function Be(t, e) {
  return e === "24h" ? Ye(t) : Ct(t) + ", " + Ye(t);
}
function he(t) {
  const e = Math.abs(t), n = e >= 100 ? t.toFixed(0) : e >= 10 ? t.toFixed(1) : e >= 1 ? t.toFixed(2) : t.toFixed(3);
  return n.indexOf(".") === -1 ? n : n.replace(/\.?0+$/, "");
}
function dd(t, e, n) {
  t === e && (t -= 1, e += 1);
  const i = (e - t) / n, s = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), a = [1, 2, 5, 10].map((c) => c * s).filter((c) => c >= i)[0], r = [];
  for (let c = Math.floor(t / a) * a; c <= e + a * 1e-3; c += a) r.push(+c.toFixed(10));
  return r[r.length - 1] < e && r.push(r[r.length - 1] + a), r;
}
function hd(t, e, n) {
  const i = [], s = new Date(t);
  if (n === "24h")
    for (s.setMinutes(0, 0, 0), s.setHours(Math.ceil(s.getHours() / 6) * 6); s.getTime() <= e; s.setHours(s.getHours() + 6)) i.push({ t: s.getTime(), label: Ye(s.getTime()) });
  else {
    s.setHours(0, 0, 0, 0), s.setDate(s.getDate() + 1);
    const a = n === "7d" ? 1 : 5;
    for (; s.getTime() <= e; s.setDate(s.getDate() + a))
      i.push({ t: s.getTime(), label: n === "7d" ? et("date.weekdays_short")[s.getDay()] : s.getDate() + "." + un(s.getMonth() + 1) });
  }
  return i;
}
function Ad({ series: t, unit: e, range: n, width: i }) {
  const [s, a] = x(null), r = re(null), c = Math.max(200, i), h = c - Ae.l - Ae.r, A = Xe - Ae.t - Ae.b, { from: u, to: m } = t, l = (E) => Ae.l + (E - u) / (m - u) * h;
  if (t.kind === "timeline" ? !t.segments.length : !t.points.length) return /* @__PURE__ */ o("div", { class: "chart-empty", children: d("chart.no_data") });
  const p = (E) => {
    const N = r.current;
    if (!N) return;
    const G = N.getBoundingClientRect(), ne = u + (E - G.left - Ae.l) / h * (m - u);
    if (t.kind === "timeline") {
      let R = 0;
      t.segments.forEach((Y, ce) => {
        Y.from <= ne && (R = ce);
      }), a(R);
      return;
    }
    const W = t.points, v = t.kind === "bars" ? t.bucketMs / 2 : 0;
    let j = 0;
    W.forEach((R, Y) => {
      Math.abs(R.t + v - ne) < Math.abs(W[j].t + v - ne) && (j = Y);
    }), a(j);
  }, _ = {
    onMouseMove: (E) => p(E.clientX),
    onMouseLeave: () => a(null),
    onTouchStart: (E) => p(E.touches[0].clientX),
    onTouchMove: (E) => p(E.touches[0].clientX)
  }, k = hd(u, m, n).map((E) => /* @__PURE__ */ o("text", { x: l(E.t), y: Xe - 6, class: "chart-tick", "text-anchor": "middle", children: E.label }, E.t));
  if (t.kind === "timeline") {
    const E = Ae.t + A / 2 - 16, N = s != null ? t.segments[s] : null;
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: Xe, ..._, children: [
        t.segments.map((G, ne) => {
          const W = l(G.from), v = l(G.to), j = Math.max(1, v - W - (v - W > 3 ? 2 : 0));
          return /* @__PURE__ */ o("rect", { x: W, y: E, width: j, height: 32, rx: 3, fill: G.on ? Ao : G.on === null ? ld : hi, stroke: G.on === null ? "rgba(255,255,255,0.25)" : "none", "stroke-dasharray": "3 3", opacity: s == null || s === ne ? 1 : 0.55 }, ne);
        }),
        /* @__PURE__ */ o("line", { x1: Ae.l, x2: c - Ae.r, y1: E + 44, y2: E + 44, stroke: Ai }),
        k
      ] }),
      /* @__PURE__ */ o("div", { class: "chart-legend", children: [
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: Ao } }),
          d("switch.on")
        ] }),
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: hi } }),
          d("switch.off")
        ] }),
        t.segments.some((G) => G.on === null) && /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { class: "key-na" }),
          d("chart.no_connection")
        ] })
      ] }),
      N && /* @__PURE__ */ o(Hn, { x: l(N.from) + Math.min(l(N.to) - l(N.from), 40) / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: N.on ? d("switch.on") : N.on === null ? d("chart.no_connection") : d("switch.off") }),
        /* @__PURE__ */ o("span", { children: [
          Be(N.from, n),
          " — ",
          Be(N.to, n)
        ] })
      ] })
    ] });
  }
  const b = t.points, y = b.some((E) => E.min != null && E.max != null);
  let I = 1 / 0, z = -1 / 0;
  b.forEach((E) => {
    I = Math.min(I, E.min != null ? E.min : E.v), z = Math.max(z, E.max != null ? E.max : E.v);
  }), t.kind === "bars" && (I = Math.min(0, I));
  const M = dd(I, z, 4), g = M[0], D = M[M.length - 1], L = (E) => Ae.t + A - (E - g) / (D - g) * A, O = M.map((E) => /* @__PURE__ */ o("g", { children: [
    /* @__PURE__ */ o("line", { x1: Ae.l, x2: c - Ae.r, y1: L(E), y2: L(E), stroke: Ai }),
    /* @__PURE__ */ o("text", { x: Ae.l - 8, y: L(E) + 4, class: "chart-tick", "text-anchor": "end", children: he(E) })
  ] }, E)), P = s != null ? b[s] : null;
  if (t.kind === "bars") {
    const E = t.bucketMs / (m - u) * h, N = Math.max(2, Math.min(24, E - 2)), G = t.bucketMs >= 864e5, ne = G && b.map((W, v) => {
      const j = new Date(W.t);
      return n === "30d" && (b.length - 1 - v) % 5 ? null : /* @__PURE__ */ o("text", { x: l(W.t) + E / 2, y: Xe - 6, class: "chart-tick", "text-anchor": "middle", children: n === "7d" ? et("date.weekdays_short")[j.getDay()] : j.getDate() + "." + un(j.getMonth() + 1) }, W.t);
    });
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: Xe, ..._, children: [
        O,
        b.map((W, v) => {
          const j = l(W.t) + (E - N) / 2, R = L(Math.max(0, W.v)), Y = L(0), ce = Math.max(0, Y - R), de = Math.min(4, N / 2, ce), oe = "M" + j + "," + Y + "V" + (R + de) + "Q" + j + "," + R + " " + (j + de) + "," + R + "H" + (j + N - de) + "Q" + (j + N) + "," + R + " " + (j + N) + "," + (R + de) + "V" + Y + "Z";
          return /* @__PURE__ */ o("path", { d: oe, fill: Ce, opacity: s == null || s === v ? 1 : 0.5 }, v);
        }),
        G ? ne : k
      ] }),
      P && /* @__PURE__ */ o(Hn, { x: l(P.t) + E / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: [
          he(P.v),
          " ",
          e
        ] }),
        /* @__PURE__ */ o("span", { children: t.bucketMs >= 864e5 ? Ct(P.t) : Ct(P.t) + ", " + Ye(P.t) + "–" + Ye(P.t + t.bucketMs) })
      ] })
    ] });
  }
  const F = y ? b : b.concat({ t: m, v: b[b.length - 1].v }), V = F.map((E, N) => (N ? "L" : "M") + l(Math.max(E.t, u)).toFixed(1) + "," + L(E.v).toFixed(1)).join(""), B = V + "L" + l(F[F.length - 1].t).toFixed(1) + "," + L(g) + "L" + l(Math.max(F[0].t, u)).toFixed(1) + "," + L(g) + "Z", U = y ? b.map((E, N) => (N ? "L" : "M") + l(E.t).toFixed(1) + "," + L(E.max).toFixed(1)).join("") + b.slice().reverse().map((E) => "L" + l(E.t).toFixed(1) + "," + L(E.min).toFixed(1)).join("") + "Z" : "", $ = b[b.length - 1];
  return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
    /* @__PURE__ */ o("svg", { ref: r, width: c, height: Xe, ..._, children: [
      O,
      y ? /* @__PURE__ */ o("path", { d: U, fill: Ce, opacity: 0.22 }) : /* @__PURE__ */ o("path", { d: B, fill: Ce, opacity: 0.1 }),
      /* @__PURE__ */ o("path", { d: V, fill: "none", stroke: Ce, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }),
      /* @__PURE__ */ o("circle", { cx: l(y ? $.t : m), cy: L($.v), r: 4, fill: Ce, stroke: ui, "stroke-width": 2 }),
      P && /* @__PURE__ */ o("g", { children: [
        /* @__PURE__ */ o("line", { x1: l(P.t), x2: l(P.t), y1: Ae.t, y2: Ae.t + A, stroke: "rgba(255,255,255,0.35)" }),
        /* @__PURE__ */ o("circle", { cx: l(P.t), cy: L(P.v), r: 5, fill: Ce, stroke: ui, "stroke-width": 2 })
      ] }),
      k
    ] }),
    y && /* @__PURE__ */ o("div", { class: "chart-legend", children: [
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { class: "key-line", style: { background: Ce } }),
        d("chart.mean")
      ] }),
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { style: { background: Ce, opacity: 0.35 } }),
        d("chart.min_max")
      ] })
    ] }),
    P && /* @__PURE__ */ o(Hn, { x: l(P.t), W: c, children: [
      /* @__PURE__ */ o("b", { children: [
        he(P.v),
        " ",
        e
      ] }),
      P.min != null && P.max != null && /* @__PURE__ */ o("span", { children: [
        he(P.min),
        " … ",
        he(P.max),
        " ",
        e
      ] }),
      /* @__PURE__ */ o("span", { children: Be(P.t, n) })
    ] })
  ] });
}
function Hn(t) {
  const e = Math.max(60, Math.min(t.W - 60, t.x));
  return /* @__PURE__ */ o("div", { class: "chart-tip", style: { left: e }, children: t.children });
}
const qt = {
  cool: { Icon: zo, color: Ce },
  heat: { Icon: ga, color: Ao },
  heat_cool: { Icon: lo, color: "#a3a3a3" },
  auto: { Icon: lo, color: "#a3a3a3" },
  dry: { Icon: Ue, color: "#a3a3a3" },
  fan_only: { Icon: fa, color: "#a3a3a3" },
  off: { Icon: vt, color: "rgba(255,255,255,0.25)" }
}, ud = ["auto", "low", "medium", "middle", "high", "quiet", "turbo", "diffuse", "focus"], md = (t) => ud.indexOf(t) !== -1 ? d("ac.fan." + t) : t, mi = (t) => qt[t] ? d("ac.mode." + t) : t;
function fi(t, e, n, i, s) {
  const a = (135 + i * 270) * Math.PI / 180, r = (135 + s * 270) * Math.PI / 180, c = (s - i) * 270 > 180 ? 1 : 0;
  return "M" + (t + n * Math.cos(a)).toFixed(1) + "," + (e + n * Math.sin(a)).toFixed(1) + "A" + n + "," + n + " 0 " + c + " 1 " + (t + n * Math.cos(r)).toFixed(1) + "," + (e + n * Math.sin(r)).toFixed(1);
}
function fd({ it: t, size: e }) {
  const n = te(), i = n.states[t.entity], s = i ? i.attributes : {}, a = i ? i.state : "off", r = a === "off", c = s.target_temp_step || 0.5, h = s.min_temp != null ? s.min_temp : 16, A = s.max_temp != null ? s.max_temp : 31, [u, m] = x(null), l = re(0), f = u ?? s.temperature;
  H(() => {
    m(null);
  }, [s.temperature]);
  const p = (M) => {
    const g = f ?? (h + A) / 2, D = Math.max(h, Math.min(A, Math.round((g + M * c) / c) * c));
    m(D), clearTimeout(l.current), l.current = window.setTimeout(() => n.callService(t.entity, "set_temperature", { temperature: D }), 800);
  }, _ = s.current_temperature != null ? String(s.current_temperature) : t.temp ? ze(n, t.temp) : void 0, w = qt[a] || qt.auto, k = e.h < 260 || e.w < 260, b = k ? 132 : 176, y = f != null ? (f - h) / (A - h) : 0, I = s.hvac_modes || [], z = s.fan_modes || [];
  return /* @__PURE__ */ o("div", { class: "ac" + (k ? " compact" : ""), children: [
    /* @__PURE__ */ o("div", { class: "ac-main", children: [
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => p(-1), children: /* @__PURE__ */ o(Ql, { size: 22 }) }),
      /* @__PURE__ */ o("div", { class: "ac-dial", style: { width: b, height: b }, children: [
        /* @__PURE__ */ o("svg", { width: b, height: b, children: [
          /* @__PURE__ */ o("path", { d: fi(b / 2, b / 2, b / 2 - 8, 0, 1), stroke: "rgba(255,255,255,0.1)", "stroke-width": 8, fill: "none", "stroke-linecap": "round" }),
          !r && f != null && /* @__PURE__ */ o("path", { d: fi(b / 2, b / 2, b / 2 - 8, 0, Math.max(0.01, y)), stroke: w.color, "stroke-width": 8, fill: "none", "stroke-linecap": "round" })
        ] }),
        /* @__PURE__ */ o("div", { class: "ac-center", children: [
          /* @__PURE__ */ o("div", { class: "ac-target", children: [
            f != null && !r ? he(f) : "—",
            /* @__PURE__ */ o("sup", { children: "°" })
          ] }),
          /* @__PURE__ */ o("div", { class: "ac-mode", children: mi(a) }),
          _ != null && !ft(_) && /* @__PURE__ */ o("div", { class: "ac-room", children: d("ac.room", { t: he(Number(_)) }) })
        ] })
      ] }),
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => p(1), children: /* @__PURE__ */ o(Ze, { size: 22 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "ac-modes", children: I.map((M) => {
      const g = qt[M] || { Icon: Ps, color: "#a3a3a3" };
      return /* @__PURE__ */ o(
        "button",
        {
          class: "ac-mode-btn" + (M === a ? " active" : ""),
          title: mi(M),
          style: M === a && M !== "off" ? { background: g.color, borderColor: g.color } : void 0,
          onClick: () => n.callService(t.entity, "set_hvac_mode", { hvac_mode: M }),
          children: /* @__PURE__ */ o(g.Icon, { size: 18 })
        },
        M
      );
    }) }),
    !k && z.length > 0 && !r && /* @__PURE__ */ o("div", { class: "seg seg-wide ac-fan", children: z.map((M) => /* @__PURE__ */ o("button", { class: s.fan_mode === M ? "active" : "", onClick: () => n.callService(t.entity, "set_fan_mode", { fan_mode: M }), children: md(M) }, M)) })
  ] });
}
function pd({ card: t, size: e }) {
  const n = te(), [i, s] = x(0), a = t.items[Math.min(i, t.items.length - 1)];
  return /* @__PURE__ */ o("div", { class: "ac-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((r, c) => /* @__PURE__ */ o("button", { class: c === i ? "active" : "", onClick: () => s(c), children: be(n, r) }, r.entity)) }),
    /* @__PURE__ */ o(fd, { it: a, size: e }, a.entity)
  ] });
}
const ke = {
  PAUSE: 1,
  VOLUME_SET: 4,
  VOLUME_MUTE: 8,
  PREVIOUS: 16,
  NEXT: 32,
  TURN_ON: 128,
  TURN_OFF: 256,
  SELECT_SOURCE: 2048,
  PLAY: 16384
}, gd = ["playing", "paused", "idle", "on", "off", "standby", "buffering"], Bt = (t) => gd.indexOf(t) !== -1 ? d("media.state." + t) : t;
function bd({ it: t, tv: e, sources: n, size: i }) {
  const s = te(), a = s.states[t.entity], r = a ? a.attributes : {}, c = Number(r.supported_features) || 0, h = (O) => (c & O) === O, A = a ? a.state : "off", u = A === "off" || A === "standby", m = A === "playing", l = (O, P) => s.callService(t.entity, O, P), [f, p] = x(null), _ = f ?? (typeof r.volume_level == "number" ? r.volume_level : null);
  H(() => {
    p(null);
  }, [r.volume_level]);
  const w = re(0), k = (O) => {
    const P = Math.max(0, Math.min(1, Math.round(O * 100) / 100));
    p(P), clearTimeout(w.current), w.current = window.setTimeout(() => l("volume_set", { volume_level: P }), 400);
  }, b = re(null), y = (O) => {
    const P = b.current;
    if (!P) return;
    const F = P.getBoundingClientRect();
    k((O - F.left) / F.width);
  }, I = s.pictureUrl(r.entity_picture_local || r.entity_picture), z = r.media_title || r.app_name || r.source || Bt(A), M = r.media_artist || r.media_album_name || (r.media_title ? Bt(A) : "") || "", g = i.h >= 300 && i.w >= 300, D = i.h < 250, L = e ? ho : u ? or : Ml;
  return u && e ? /* @__PURE__ */ o("div", { class: "media media-off", children: [
    /* @__PURE__ */ o("div", { class: "media-art-empty big", children: /* @__PURE__ */ o(ho, { size: 40 }) }),
    /* @__PURE__ */ o("div", { class: "media-title", children: be(s, t) }),
    /* @__PURE__ */ o("div", { class: "media-sub", children: Bt(A) }),
    h(ke.TURN_ON) ? /* @__PURE__ */ o("button", { class: "pill-btn media-power", onClick: () => l("turn_on"), children: [
      /* @__PURE__ */ o(vt, { size: 18 }),
      /* @__PURE__ */ o("span", { children: d("common.turn_on") })
    ] }) : /* @__PURE__ */ o("div", { class: "muted small media-hint", children: d("media.tv_remote_only") })
  ] }) : /* @__PURE__ */ o("div", { class: "media" + (g ? " big" : "") + (D ? " short" : ""), children: [
    /* @__PURE__ */ o("div", { class: "media-top", children: [
      I && !u ? /* @__PURE__ */ o("div", { class: "media-art", style: { backgroundImage: "url(" + I + ")" } }) : /* @__PURE__ */ o("div", { class: "media-art media-art-empty", children: /* @__PURE__ */ o(L, { size: g ? 36 : 26 }) }),
      /* @__PURE__ */ o("div", { class: "media-info", children: [
        /* @__PURE__ */ o("div", { class: "media-title", children: z }),
        M && /* @__PURE__ */ o("div", { class: "media-sub", children: M }),
        /* @__PURE__ */ o("div", { class: "media-state" + (m ? " on" : ""), children: [
          m && /* @__PURE__ */ o("i", { class: "eq", children: [
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {})
          ] }),
          Bt(A)
        ] })
      ] }),
      (h(ke.TURN_OFF) || h(ke.TURN_ON)) && /* @__PURE__ */ o("button", { class: "icon-round", title: d(u ? "common.turn_on" : "common.turn_off"), onClick: () => l(u ? "turn_on" : "turn_off"), children: /* @__PURE__ */ o(vt, { size: 16 }) })
    ] }),
    (h(ke.PAUSE) || h(ke.PLAY) || h(ke.NEXT)) && /* @__PURE__ */ o("div", { class: "media-controls", children: [
      h(ke.PREVIOUS) && /* @__PURE__ */ o("button", { onClick: () => l("media_previous_track"), children: /* @__PURE__ */ o(Gl, { size: 22 }) }),
      /* @__PURE__ */ o("button", { class: "media-play", onClick: () => l("media_play_pause"), children: m ? /* @__PURE__ */ o(Fl, { size: 24 }) : /* @__PURE__ */ o(Rl, { size: 24 }) }),
      h(ke.NEXT) && /* @__PURE__ */ o("button", { onClick: () => l("media_next_track"), children: /* @__PURE__ */ o(Jl, { size: 22 }) })
    ] }),
    _ != null && h(ke.VOLUME_SET) && /* @__PURE__ */ o("div", { class: "media-volume", children: [
      h(ke.VOLUME_MUTE) && /* @__PURE__ */ o("button", { onClick: () => l("volume_mute", { is_volume_muted: !r.is_volume_muted }), children: r.is_volume_muted ? /* @__PURE__ */ o(od, { size: 18 }) : /* @__PURE__ */ o(nd, { size: 18 }) }),
      /* @__PURE__ */ o(
        "div",
        {
          class: "vol-bar",
          ref: b,
          onClick: (O) => y(O.clientX),
          onTouchMove: (O) => y(O.touches[0].clientX),
          children: /* @__PURE__ */ o("div", { class: "vol-fill", style: { width: Math.round(_ * 100) + "%" } })
        }
      ),
      /* @__PURE__ */ o("span", { class: "vol-num", children: Math.round(_ * 100) })
    ] }),
    n && h(ke.SELECT_SOURCE) && r.source_list && /* @__PURE__ */ o("div", { class: "chips media-sources", children: r.source_list.map((O) => /* @__PURE__ */ o("button", { class: "chip" + (r.source === O ? " active" : ""), onClick: () => l("select_source", { source: O }), children: O }, O)) })
  ] });
}
function yd({ card: t, size: e }) {
  const n = te(), i = t.items.findIndex((h) => n.states[h.entity] && n.states[h.entity].state === "playing"), [s, a] = x(i >= 0 ? i : 0), r = t.items[Math.min(s, t.items.length - 1)], c = t.type === "tv" || !!n.states[r.entity] && n.states[r.entity].attributes.device_class === "tv";
  return /* @__PURE__ */ o("div", { class: "media-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline seg-full", children: t.items.map((h, A) => {
      const u = n.states[h.entity];
      return /* @__PURE__ */ o("button", { class: A === s ? "active" : "", onClick: () => a(A), children: [
        u && u.state === "playing" && /* @__PURE__ */ o("i", { class: "dot-live" }),
        be(n, h)
      ] }, h.entity);
    }) }),
    We(n, r.entity) && /* @__PURE__ */ o(bd, { it: r, tv: c, sources: t.type === "tv", size: e }, r.entity)
  ] });
}
const xd = {
  "clear-night": { Icon: Ha },
  cloudy: { Icon: aa },
  exceptional: { Icon: Pn },
  fog: { Icon: xl },
  hail: { Icon: di },
  lightning: { Icon: Pn },
  "lightning-rainy": { Icon: Pn },
  partlycloudy: { Icon: oa },
  pouring: { Icon: kl },
  rainy: { Icon: yl },
  snowy: { Icon: zo },
  "snowy-rainy": { Icon: di },
  sunny: { Icon: sr },
  windy: { Icon: hn },
  "windy-variant": { Icon: hn }
};
function $e(t) {
  const e = xd[t || ""];
  return { label: e ? d("weather." + t) : t || "—", Icon: e ? e.Icon : aa };
}
function vr(t, e) {
  const [n, i] = x([]), [s, a] = x([]), r = e ? t.states[e] : void 0, c = r && Number(r.attributes.supported_features) || 0;
  return H(() => {
    if (!e || t.status !== "connected" || !c) return;
    const h = [];
    c & 2 && h.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: "hourly" },
      (u) => i(u.forecast || [])
    ));
    const A = c & 1 ? "daily" : c & 4 ? "twice_daily" : "";
    return A && h.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: A },
      (u) => a(kd(u.forecast || [], A === "twice_daily"))
    )), () => h.forEach((u) => u());
  }, [e, t.status, c]), { hourly: n, days: s };
}
function kd(t, e) {
  if (!e) return t.map((s) => ({ t: Date.parse(s.datetime), hi: s.temperature, lo: s.templow, condition: s.condition }));
  const n = {}, i = [];
  return t.forEach((s) => {
    const a = new Date(Date.parse(s.datetime)), r = a.getFullYear() + "-" + a.getMonth() + "-" + a.getDate();
    n[r] || (n[r] = { t: a.getTime() }, i.push(r));
    const c = n[r];
    [s.temperature, s.templow].filter((A) => typeof A == "number").forEach((A) => {
      c.hi = c.hi == null ? A : Math.max(c.hi, A), c.lo = c.lo == null ? A : Math.min(c.lo, A);
    }), (s.is_daytime !== !1 || !c.condition) && (c.condition = s.condition);
  }), i.map((s) => n[s]);
}
function wd(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "m/s" ? n : e === "mph" ? n * 0.447 : n / 3.6;
}
function vd(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "mmHg" ? n : e === "inHg" ? n * 25.4 : n * 0.750062;
}
function ge(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : String(Math.round(e));
}
const _d = 64, Cd = 32, pi = 36, gi = 84, Md = 33;
function _r({ card: t, size: e }) {
  const n = te(), i = bn(), s = t.items.filter((g) => g.entity.indexOf("weather.") === 0)[0], a = t.items.filter((g) => g !== s), r = s && s.entity, c = r ? n.states[r] : void 0, { hourly: h, days: A } = vr(n, r);
  let u = e.h - (c ? _d + Cd : 0);
  const m = Math.max(0, Math.min(a.length, Math.floor(u / pi)));
  u -= m * pi + (m ? 10 : 0);
  const l = !!c && h.length > 0 && u >= gi;
  l && (u -= gi + 12);
  const f = c ? Math.max(0, Math.min(A.length, 7, Math.floor((u - 10) / Md))) : 0, p = A.slice(0, f), _ = Math.min.apply(null, p.map((g) => g.lo != null ? g.lo : 99)), w = Math.max.apply(null, p.map((g) => g.hi != null ? g.hi : -99)), k = (g) => (g - _) / Math.max(1, w - _) * 100, b = Date.now(), y = c ? c.attributes : {}, I = $e(c && c.state), z = wd(y.wind_speed, y.wind_speed_unit), M = vd(y.pressure, y.pressure_unit);
  return /* @__PURE__ */ o("div", { class: "weather", children: [
    c && /* @__PURE__ */ o("div", { class: "weather-now", children: [
      /* @__PURE__ */ o(I.Icon, { size: e.w > 360 ? 54 : 40 }),
      /* @__PURE__ */ o("div", { class: "weather-temp", children: [
        ge(y.temperature),
        /* @__PURE__ */ o("sup", { children: "°" })
      ] }),
      /* @__PURE__ */ o("div", { class: "weather-desc", children: [
        /* @__PURE__ */ o("b", { children: I.label }),
        y.apparent_temperature != null && /* @__PURE__ */ o("span", { children: d("weather.feels_like", { t: ge(y.apparent_temperature) }) }),
        A[0] && A[0].hi != null && /* @__PURE__ */ o("span", { children: [
          ge(A[0].lo),
          "° … ",
          ge(A[0].hi),
          "°"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ o("div", { class: "weather-facts", children: [
      z != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(hn, { size: 14 }),
        d("weather.wind", { v: z.toFixed(1) })
      ] }),
      y.humidity != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(Ue, { size: 14 }),
        ge(y.humidity),
        "%"
      ] }),
      M != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(ya, { size: 14 }),
        d("weather.pressure", { v: Math.round(M) })
      ] })
    ] }),
    m > 0 && /* @__PURE__ */ o("div", { class: "weather-rooms", children: a.slice(0, m).map((g) => {
      const D = n.states[g.entity], L = g.entity.indexOf("weather.") === 0, O = L ? D && D.attributes.temperature : D && D.state, P = L ? D && D.attributes.humidity : g.hum ? ze(n, g.hum) : void 0;
      return /* @__PURE__ */ o("div", { class: "wroom tappable", onClick: () => i(g.hum ? [g.entity, g.hum] : [g.entity]), children: [
        /* @__PURE__ */ o("span", { class: "wroom-name", children: be(n, g) }),
        P != null && /* @__PURE__ */ o("span", { class: "wroom-hum", children: [
          /* @__PURE__ */ o(Ue, { size: 12 }),
          ge(P),
          "%"
        ] }),
        /* @__PURE__ */ o("b", { class: "wroom-temp", children: [
          Ed(O),
          "°"
        ] })
      ] }, g.entity);
    }) }),
    l && /* @__PURE__ */ o("div", { class: "weather-hours", children: h.filter((g) => Date.parse(g.datetime) > b - 36e5).slice(0, 12).map((g) => {
      const D = $e(g.condition);
      return /* @__PURE__ */ o("div", { class: "hour", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: Ye(Date.parse(g.datetime)) }),
        /* @__PURE__ */ o(D.Icon, { size: 18 }),
        /* @__PURE__ */ o("b", { children: [
          ge(g.temperature),
          "°"
        ] })
      ] }, g.datetime);
    }) }),
    p.length > 0 && /* @__PURE__ */ o("div", { class: "weather-days", children: p.map((g, D) => {
      const L = $e(g.condition);
      return /* @__PURE__ */ o("div", { class: "day", children: [
        /* @__PURE__ */ o("span", { class: "day-name", children: D === 0 ? d("weather.today") : et("date.weekdays_short")[new Date(g.t).getDay()] }),
        /* @__PURE__ */ o(L.Icon, { size: 18 }),
        /* @__PURE__ */ o("span", { class: "day-lo", children: [
          ge(g.lo),
          "°"
        ] }),
        /* @__PURE__ */ o("span", { class: "day-bar", children: g.lo != null && g.hi != null && /* @__PURE__ */ o("i", { style: { left: k(g.lo) + "%", width: Math.max(4, k(g.hi) - k(g.lo)) + "%" } }) }),
        /* @__PURE__ */ o("span", { class: "day-hi", children: [
          ge(g.hi),
          "°"
        ] })
      ] }, g.t);
    }) })
  ] });
}
function Ed(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : (Math.round(e * 10) / 10).toFixed(1);
}
function Sd({ entity: t }) {
  const e = te(), n = e.states[t], { days: i } = vr(e, t);
  if (!n || n.state === "unavailable") return null;
  const s = $e(n.state), a = i[0];
  return /* @__PURE__ */ o("div", { class: "ambient-weather", children: [
    /* @__PURE__ */ o(s.Icon, { size: 30 }),
    /* @__PURE__ */ o("span", { class: "aw-temp", children: [
      ge(n.attributes.temperature),
      "°"
    ] }),
    /* @__PURE__ */ o("span", { class: "aw-desc", children: [
      s.label,
      a && a.hi != null && /* @__PURE__ */ o("small", { children: [
        ge(a.lo),
        "° … ",
        ge(a.hi),
        "°"
      ] })
    ] })
  ] });
}
function Do(t, e) {
  if (!e || tn[t].domains.indexOf(e.entity_id.split(".")[0]) === -1) return !1;
  const n = e.attributes.device_class, i = e.entity_id.indexOf("weather.") === 0;
  return t === "climate" || t === "weather" ? i || n === "temperature" : !0;
}
function bi(t, e, n) {
  return e.filter((i) => t.states[i] && t.states[i].entity_id.indexOf("sensor.") === 0 && t.states[i].attributes.device_class === n)[0];
}
function Cr(t, e, n) {
  if (!n.device) return [n];
  const i = t.devices[n.device];
  if (!i) return n.entity ? [{ entity: n.entity, name: n.name }] : [];
  const s = i.entities.filter((l) => t.registry[l] && t.registry[l].ec == null && !!t.states[l]), a = n.skip || [], r = n.order || [], c = (l) => {
    const f = r.indexOf(l);
    return f === -1 ? 1e6 : f;
  }, h = s.filter((l) => Do(e, t.states[l]) && a.indexOf(l) === -1).map((l, f) => ({ id: l, i: f })).sort((l, f) => c(l.id) - c(f.id) || l.i - f.i).map((l) => l.id), A = h.length === 1, u = n.names || {}, m = (l) => u[l] || (A ? n.name || i.name : t.registry[l].en || i.name || void 0);
  return e === "climate" ? h.map((l) => ({ entity: l, hum: bi(t, s, "humidity"), name: m(l) })) : e === "ac" ? h.map((l) => ({ entity: l, temp: n.temp || bi(t, s, "temperature"), name: m(l) })) : h.map((l) => ({ entity: l, name: m(l), icon: void 0 }));
}
function zd(t, e) {
  if (!e.items.some((s) => s.device)) return e;
  const n = {}, i = [];
  return e.items.forEach((s) => Cr(t, e.type, s).forEach((a) => {
    n[a.entity] || (n[a.entity] = !0, i.push(a));
  })), { ...e, items: i };
}
function vn(t, e) {
  const n = zd(t, e.title ? e : { ...e, title: gt(e.type) }), i = n.items.filter((s) => We(t, s.entity));
  return i.length === n.items.length ? n : { ...n, items: i };
}
function be(t, e) {
  const n = t.states[e.entity];
  return e.name || n && n.attributes.friendly_name || e.entity;
}
function Id(t, e) {
  const n = t.states[e];
  return n ? n.attributes.device_class : void 0;
}
const Dd = [
  "door",
  "window",
  "opening",
  "garage_door",
  "moisture",
  "smoke",
  "gas",
  "problem",
  "safety",
  "motion",
  "occupancy",
  "presence",
  "connectivity",
  "power",
  "plug"
], Bd = ["door", "window", "opening", "garage_door", "moisture", "smoke", "gas", "problem", "safety"];
function uo(t, e) {
  const n = t.states[e];
  if (!n || ft(n.state)) return { text: d("sensor.no_data"), alert: !1, on: !1 };
  const i = e.split(".")[0], s = n.attributes.device_class;
  if (i === "binary_sensor") {
    const r = n.state === "on", c = Dd.indexOf(s) !== -1 ? "sensor." + s + "." : "sensor.";
    return { text: d(c + (r ? "on" : "off")), alert: r && Bd.indexOf(s) !== -1, on: r };
  }
  if (i === "lock") return { text: n.state === "locked" ? d("sensor.locked") : d("sensor.unlocked"), alert: n.state !== "locked", on: n.state !== "locked" };
  if (i === "cover") return { text: n.state === "open" ? d("sensor.open") : n.state === "closed" ? d("sensor.closed") : n.state, alert: !1, on: n.state === "open" };
  const a = parseFloat(n.state);
  return { text: (isNaN(a) ? n.state : String(Math.round(a * 10) / 10)) + $t(t, e), alert: !1, on: !1 };
}
function Td(t) {
  return Math.max(1, Math.min(5, Math.floor(t.w / 150)));
}
function Mr(t, e) {
  const i = (r) => (e.h + 10) / Math.ceil(t / r) - 10;
  let s = Td(e);
  for (; s < Math.min(t, 6) && i(s) < 96 && e.w / (s + 1) >= 120; ) s++;
  const a = i(s);
  return "lights cols-" + s + (a >= 96 ? "" : a >= 70 ? " compact" : " list");
}
function Od({ card: t, size: e }) {
  const n = te(), i = bn(), s = e.h / Math.max(1, t.items.length) < 95;
  return /* @__PURE__ */ o("div", { class: "rooms" + (s ? " compact" : ""), children: t.items.map((a) => {
    const r = a.entity.indexOf("weather.") === 0 ? n.states[a.entity] : void 0, c = r ? $e(r.state).Icon : null;
    return /* @__PURE__ */ o("div", { class: "room tappable" + (r ? " room-outside" : ""), onClick: () => i(a.hum ? [a.entity, a.hum] : [a.entity]), children: [
      /* @__PURE__ */ o("div", { class: "room-name", children: [
        c && /* @__PURE__ */ o(c, { size: 14 }),
        be(n, a)
      ] }),
      /* @__PURE__ */ o("div", { class: "room-vals", children: [
        /* @__PURE__ */ o("span", { class: "room-temp", children: [
          Nt(r ? String(r.attributes.temperature) : ze(n, a.entity)),
          /* @__PURE__ */ o("sup", { children: "°" })
        ] }),
        r && r.attributes.humidity != null && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Ue, { size: 14 }),
          Math.round(r.attributes.humidity),
          "%"
        ] }),
        !r && a.hum && We(n, a.hum) && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Ue, { size: 14 }),
          Nt(ze(n, a.hum), 0),
          "%"
        ] })
      ] })
    ] }, a.entity);
  }) });
}
function Pd(t, e) {
  const n = re(0), i = re(!1), s = () => {
    i.current = !1, clearTimeout(n.current), n.current = window.setTimeout(() => {
      i.current = !0, t();
    }, 550);
  }, a = () => clearTimeout(n.current);
  return {
    onTouchStart: s,
    onMouseDown: s,
    onTouchEnd: a,
    onTouchMove: a,
    onMouseUp: a,
    onMouseLeave: a,
    onContextMenu: (r) => r.preventDefault(),
    onClick: () => {
      i.current ? i.current = !1 : e();
    }
  };
}
function Ld({ it: t }) {
  const e = te(), n = bn(), i = Pd(() => n([t.entity]), () => e.toggle(t.entity)), s = ze(e, t.entity), a = gn(s), r = Je(t.icon || Io(t.entity));
  return /* @__PURE__ */ o("button", { class: "light" + (a ? " on" : "") + (s === void 0 ? " na" : ""), ...i, children: [
    /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(r, { size: 22 }) }),
    /* @__PURE__ */ o("span", { class: "light-name", children: be(e, t) }),
    /* @__PURE__ */ o("span", { class: "light-state", children: d(s === void 0 ? "switch.unavailable" : a ? "switch.on" : "switch.off") })
  ] });
}
function Hd({ card: t, size: e }) {
  return /* @__PURE__ */ o("div", { class: Mr(t.items.length, e), children: t.items.map((n) => /* @__PURE__ */ o(Ld, { it: n }, n.entity)) });
}
function jd({ card: t, onCamera: e }) {
  const n = te(), [i, s] = x(0), a = t.items[Math.min(i, t.items.length - 1)], r = a ? n.cameraStreamUrl(a.entity) : "";
  return /* @__PURE__ */ o("div", { class: "cam-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline seg-full", children: t.items.map((c, h) => /* @__PURE__ */ o("button", { class: h === i ? "active" : "", onClick: () => s(h), children: be(n, c) }, c.entity + h)) }),
    /* @__PURE__ */ o("div", { class: "cam fit-" + (t.fit || "cover"), onClick: () => r && e(r), children: [
      r ? /* @__PURE__ */ o("img", { src: r, alt: "" }) : /* @__PURE__ */ o("div", { class: "cam-empty", children: [
        /* @__PURE__ */ o(ed, { size: 26 }),
        /* @__PURE__ */ o("span", { children: d("camera.no_stream") })
      ] }),
      r && /* @__PURE__ */ o("span", { class: "live", children: [
        /* @__PURE__ */ o("i", {}),
        "LIVE"
      ] })
    ] })
  ] });
}
function Qd({ card: t }) {
  const e = te(), n = bn();
  return /* @__PURE__ */ o("div", { class: "sensors", children: t.items.map((i) => {
    const s = uo(e, i.entity), a = Je(i.icon || Io(i.entity, Id(e, i.entity)));
    return /* @__PURE__ */ o("div", { class: "status-row tappable" + (s.alert ? " alert" : ""), onClick: () => n([i.entity]), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(a, { size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: be(e, i) }),
        /* @__PURE__ */ o("small", { children: s.text })
      ] })
    ] }, i.entity);
  }) });
}
function Nd({ card: t, size: e }) {
  const n = te(), [i, s] = x(""), a = (r) => {
    const c = r.split(".")[0];
    n.callService(r, c === "automation" ? "trigger" : "turn_on"), s(r), setTimeout(() => s(""), 1200);
  };
  return /* @__PURE__ */ o("div", { class: Mr(t.items.length, e), children: t.items.map((r) => {
    const c = Je(r.icon || "sparkles");
    return /* @__PURE__ */ o("button", { class: "light scene" + (i === r.entity ? " on" : ""), onClick: () => a(r.entity), children: [
      /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(c, { size: 22 }) }),
      /* @__PURE__ */ o("span", { class: "light-name", children: be(n, r) }),
      /* @__PURE__ */ o("span", { class: "light-state", children: i === r.entity ? d("scene.started") : d("scene.tap_to_run") })
    ] }, r.entity);
  }) });
}
function Er(t) {
  const e = te(), { size: n, onCamera: i } = t;
  if (!t.card.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.empty") });
  const s = vn(e, t.card);
  if (!s.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.all_unavailable") });
  switch (s.type) {
    case "climate":
      return /* @__PURE__ */ o(Od, { card: s, size: n });
    case "switches":
      return /* @__PURE__ */ o(Hd, { card: s, size: n });
    case "cameras":
      return /* @__PURE__ */ o(jd, { card: s, onCamera: i });
    case "sensors":
      return /* @__PURE__ */ o(Qd, { card: s });
    case "scenes":
      return /* @__PURE__ */ o(Nd, { card: s, size: n });
    case "ac":
      return /* @__PURE__ */ o(pd, { card: s, size: n });
    case "speakers":
    case "tv":
      return /* @__PURE__ */ o(yd, { card: s, size: n });
    case "weather":
      return /* @__PURE__ */ o(_r, { card: s, size: n });
  }
}
function Sr(t) {
  const e = te(), n = vn(e, t.card);
  if (n.type !== "switches") return null;
  const i = n.items.filter((s) => gn(ze(e, s.entity)));
  return i.length ? /* @__PURE__ */ o("button", { class: "chip-btn", onClick: () => i.forEach((s) => e.turnOff(s.entity)), children: [
    /* @__PURE__ */ o(vt, { size: 14 }),
    /* @__PURE__ */ o("span", { children: d("switches.all_off") })
  ] }) : null;
}
function Bo(t, e) {
  const n = vn(t, e);
  if (n.type === "switches") {
    const i = n.items.filter((s) => gn(ze(t, s.entity))).length;
    return d("switches.title_count", { title: n.title, on: i, total: n.items.length });
  }
  return n.title;
}
function yi(t, e) {
  const n = vn(t, e), i = n.items[0];
  if (n.type === "climate") {
    const s = n.items.filter((a) => a.entity.indexOf("weather.") !== 0)[0];
    return { text: s ? Nt(ze(t, s.entity)) + "°" : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "switches") {
    const s = n.items.filter((a) => gn(ze(t, a.entity))).length;
    return { text: s ? d("chip.on_count", { title: n.title, n: s }) : d("chip.off", { title: n.title }), lit: s > 0, alert: !1 };
  }
  if (n.type === "sensors") {
    for (let s = 0; s < n.items.length; s++) {
      const a = uo(t, n.items[s].entity);
      if (a.alert) return { text: be(t, n.items[s]) + ": " + a.text.toLowerCase(), lit: !1, alert: !0 };
    }
    return { text: i ? uo(t, i.entity).text : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "ac" && i) {
    const s = t.states[i.entity];
    return !s || s.state === "off" ? { text: d("chip.off", { title: n.title }), lit: !1, alert: !1 } : { text: n.title + ": " + s.attributes.temperature + "°", lit: !0, alert: !1 };
  }
  if ((n.type === "speakers" || n.type === "tv") && n.items.length) {
    const s = n.items.filter((c) => t.states[c.entity] && t.states[c.entity].state === "playing")[0], a = s && t.states[s.entity];
    return a ? { text: "♪ " + (a.attributes.media_title || be(t, s)), lit: !0, alert: !1 } : { text: n.items.filter((c) => t.states[c.entity] && ["on", "idle", "paused"].indexOf(t.states[c.entity].state) !== -1).length && n.type === "tv" ? d("chip.on", { title: n.title }) : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "weather" && i) {
    const s = t.states[i.entity];
    return { text: s ? Math.round(s.attributes.temperature) + "° " + $e(s.state).label.toLowerCase() : n.title, lit: !1, alert: !1 };
  }
  return { text: n.title, lit: !1, alert: !1 };
}
function Fd(t) {
  return /* @__PURE__ */ o("section", { class: "panel " + (t.class || ""), children: [
    /* @__PURE__ */ o("div", { class: "panel-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      t.aside
    ] }),
    t.children
  ] });
}
function zr(t) {
  return t.layout === "auto" ? window.innerWidth <= 700 ? "center" : "corner" : t.layout;
}
const Te = 3, we = 100 - Te * 2;
function Ir(t) {
  const e = (n) => (Te + n / J * we) / 100;
  return [e(t.x), e(t.y), e(t.x + t.w), e(t.y + t.h)];
}
function xi(t) {
  return {
    left: Te + t.x / J * we + "%",
    top: Te + t.y / J * we + "%",
    width: t.w / J * we + "%",
    height: t.h / J * we + "%"
  };
}
function ki(t) {
  const e = t.x + t.w / 2, n = t.y + t.h / 2;
  return " g-" + (t.ha || (e < J / 3 ? "left" : e > J * 2 / 3 ? "right" : "center")) + " g-" + (t.va || (n < J / 3 ? "top" : n > J * 2 / 3 ? "bottom" : "middle"));
}
function Dr(t, e) {
  if (e) return Ir(e.clock);
  const n = zr(t);
  return n === "top" ? [0.2, 0.05, 0.8, 0.35] : n === "corner" ? [0, 0.55, 0.55, 0.95] : [0.2, 0.55, 0.8, 0.9];
}
const Rd = [0.4, 0.88, 0.6, 1];
function qd(t, e) {
  return e ? Ir(e.widgets) : t.widgetsPos === "top" ? [0.15, 0, 0.85, 0.2] : t.widgetsPos === "bottom" ? [0.15, 0.78, 0.85, 0.96] : zr(t) === "corner" ? [0.5, 0.7, 1, 0.96] : Dr(t, null);
}
function jn([t, e, n]) {
  const i = (s) => (s /= 255, s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4));
  return 0.2126 * i(t) + 0.7152 * i(e) + 0.0722 * i(n);
}
const Qn = { color: "#ffffff", dark: !1 };
function Nn(t, e, n) {
  const [i, s] = x(Qn), a = e.join(",");
  return H(() => {
    if (!n || !t) return;
    const r = new Image();
    r.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = r.width, c.height = r.height;
        const h = c.getContext("2d");
        h.drawImage(r, 0, 0);
        const A = Math.floor(e[0] * c.width), u = Math.floor(e[1] * c.height), m = Math.max(1, Math.floor((e[2] - e[0]) * c.width)), l = Math.max(1, Math.floor((e[3] - e[1]) * c.height)), f = h.getImageData(A, u, m, l).data, p = [0, 0, 0];
        for (let M = 0; M < f.length; M += 4)
          p[0] += f[M], p[1] += f[M + 1], p[2] += f[M + 2];
        const _ = f.length / 4, w = p.map((M) => M / _), k = w.map((M) => 255 - M), b = jn(w), y = jn(k), z = (Math.max(b, y) + 0.05) / (Math.min(b, y) + 0.05) >= 3 ? k : b > 0.35 ? [17, 17, 17] : [255, 255, 255];
        s({ color: "rgb(" + z.map(Math.round).join(",") + ")", dark: jn(z) < 0.25 });
      } catch {
        s(Qn);
      }
    }, r.src = t;
  }, [t, a, n]), n ? i : Qn;
}
function Wd({ prefs: t }) {
  const e = xr(5e3), n = t.datePos === "above" || t.datePos !== "below" && t.layout === "top", i = t.date && /* @__PURE__ */ o("div", { class: "ambient-date" + (n ? " above" : ""), children: wr(e) });
  return /* @__PURE__ */ o(se, { children: [
    n && i,
    /* @__PURE__ */ o("div", { class: "ambient-time", style: { fontWeight: ps[t.font] }, children: kr(e) }),
    !n && i
  ] });
}
function Vd(t) {
  const e = te(), n = nt(), i = xs(), [s, a] = x(""), r = n.homeCards().filter((B) => B.chip), c = r.filter((B) => B.type === "weather" && B.items.length)[0], h = Pc(r.filter((B) => B.type !== "weather"), i), A = h.filter((B) => i.hidden.indexOf(B.id) === -1), u = A.filter((B) => yi(e, B).alert), m = t.customizing, l = () => {
    a(""), t.onDone();
  }, [f, p] = x(null), _ = ws(), w = vs(i, _), k = f || w, b = () => ae(ro(_, w ? null : ks(i, _ === "landscape" && window.innerWidth > 700))), y = i.color === "contrast", I = i.widgetsColor || i.color, z = I === "contrast", M = !z && !(i.widgetsColor === "" && I === "white"), g = $o(I, i.widgetsColor ? i.widgetsCustomColor : i.customColor), D = !y && i.color !== "white", L = $o(i.color, i.customColor), O = Nn(t.photoThumb, Dr(i, k), y), P = Nn(t.photoThumb, qd(i, k), z), F = Nn(t.photoThumb, Rd, y), V = "ambient" + (t.visible ? " visible" : "") + (k ? " lock-grid" : " lock-" + i.layout + " widgets-" + i.widgetsPos) + " lock-size-" + i.size + " chips-" + i.chipStyle + (m ? " customizing" : "");
  return /* @__PURE__ */ o(se, { children: [
    /* @__PURE__ */ o("div", { ref: t.innerRef, class: V, children: [
      /* @__PURE__ */ o(
        "div",
        {
          class: "ambient-clock" + (y ? " text-contrast" : "") + (D ? " ink-fixed" + (i.color === "accent" ? " accent-text" : "") : "") + (O.dark ? " ink-dark" : "") + (k ? ki(k.clock) : ""),
          style: { ...k ? xi(k.clock) : {}, ...y ? { color: O.color } : D && L ? { color: L } : {} },
          onClick: m ? () => a("clock") : void 0,
          children: [
            /* @__PURE__ */ o(Wd, { prefs: i }),
            i.weather && c && /* @__PURE__ */ o(Sd, { entity: c.items[0].entity })
          ]
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          class: "glances" + (z ? " text-contrast" : "") + (M ? " ink-fixed" + (I === "accent" ? " accent-text" : "") : "") + (P.dark ? " ink-dark" : "") + (k ? ki(k.widgets) : ""),
          style: { ...k ? xi(k.widgets) : {}, ...z ? { color: P.color } : M && g ? { color: g } : {} },
          onClick: m ? () => a("widgets") : void 0,
          children: [
            e.status !== "connected" && e.status !== "connecting" && !m && /* @__PURE__ */ o("button", { class: "glance warn", onClick: t.onConnection, children: [
              /* @__PURE__ */ o(sd, { size: 18 }),
              /* @__PURE__ */ o("span", { children: d("ambient.offline") })
            ] }),
            m && !A.length && /* @__PURE__ */ o("span", { class: "glance glance-add", children: [
              /* @__PURE__ */ o(Ze, { size: 18 }),
              /* @__PURE__ */ o("span", { children: d("lock.add_widgets") })
            ] }),
            u.concat(A.filter((B) => u.indexOf(B) === -1)).map((B) => {
              const U = yi(e, B), $ = Je(B.icon);
              return /* @__PURE__ */ o(
                "button",
                {
                  class: "glance" + (U.lit ? " lit" : "") + (U.alert ? " alert" : ""),
                  title: U.text,
                  onClick: m ? void 0 : () => t.onSheet(B),
                  children: [
                    /* @__PURE__ */ o($, { size: 18 }),
                    /* @__PURE__ */ o("span", { children: U.text })
                  ]
                },
                B.id
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ o(
        "button",
        {
          class: "home-hint" + (y ? " text-contrast" : "") + (t.showHint ? " visible" : "") + (F.dark ? " ink-dark" : ""),
          "aria-label": d("ambient.home_hint"),
          style: y ? { color: F.color } : void 0,
          onClick: t.onHome,
          tabIndex: t.showHint ? 0 : -1,
          children: /* @__PURE__ */ o(Js, { size: 36, strokeWidth: 1.8 })
        }
      ),
      m && k && !s && /* @__PURE__ */ o(Br, { grid: k, onDraft: p, onDone: (B) => {
        p(null), ae(ro(_, B));
      }, onTap: a })
    ] }),
    m && /* @__PURE__ */ o("div", { class: "lock-ui", children: [
      /* @__PURE__ */ o("div", { class: "lock-top", children: [
        /* @__PURE__ */ o("span", { children: d(k ? "lock.grid_hint" : "lock.hint") }),
        /* @__PURE__ */ o("span", { class: "lock-top-btns", children: [
          /* @__PURE__ */ o("button", { class: "pill-btn" + (w ? " on" : ""), onClick: b, title: d("lock.grid"), children: [
            /* @__PURE__ */ o(El, { size: 16 }),
            /* @__PURE__ */ o("span", { children: d("lock.grid") })
          ] }),
          /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: l, children: d("common.done") })
        ] })
      ] }),
      s && /* @__PURE__ */ o("div", { class: "lock-modal", onClick: (B) => {
        B.target === B.currentTarget && a("");
      }, children: /* @__PURE__ */ o(nh, { kind: s, widgets: h, hasWeather: !!c, onClose: () => a("") }) })
    ] })
  ] });
}
const Ud = ["clock", "widgets"];
function Br(t) {
  const e = re(null), n = (i, s, a) => {
    const r = e.current;
    if (!r) return;
    i.stopPropagation(), i.cancelable && i.preventDefault();
    const c = r.getBoundingClientRect(), h = (D) => {
      const L = "touches" in D ? D.touches[0] || D.changedTouches[0] : D;
      return { x: L.clientX, y: L.clientY };
    }, A = h(i), u = t.grid[s], m = c.width / J, l = c.height / J, f = r.parentElement ? r.parentElement.querySelector(s === "clock" ? ".ambient-clock" : ".glances") : null, _ = (f ? [].slice.call(f.children) : []).map((D) => {
      const L = D.getBoundingClientRect(), O = getComputedStyle(D);
      return { w: L.width + parseFloat(O.marginLeft) + parseFloat(O.marginRight), h: L.height + parseFloat(O.marginTop) + parseFloat(O.marginBottom) };
    }), w = f ? (() => {
      const D = getComputedStyle(f);
      return { x: parseFloat(D.paddingLeft) + parseFloat(D.paddingRight), y: parseFloat(D.paddingTop) + parseFloat(D.paddingBottom) };
    })() : { x: 0, y: 0 }, k = _.reduce((D, L) => Math.max(D, L.w), 0), b = Math.max(1, Math.ceil((k + w.x) / m - 0.05)), y = (D) => {
      if (!_.length) return 1;
      if (s === "clock") return Math.max(1, Math.ceil((_.reduce((V, B) => V + B.h, 0) + w.y) / l - 0.05));
      const L = D * m - w.x;
      let O = 0, P = 0, F = 0;
      return _.forEach((V) => {
        O && O + V.w > L && (F += P, O = 0, P = 0), O += V.w, P = Math.max(P, V.h);
      }), F += P, Math.max(1, Math.ceil((F + w.y) / l - 0.05));
    };
    let I = !1, z = t.grid;
    const M = (D) => {
      const L = h(D), O = (L.x - A.x) / c.width * J, P = (L.y - A.y) / c.height * J;
      if ((Math.abs(O) > 0.3 || Math.abs(P) > 0.3) && (I = !0), !I) return;
      D.cancelable && D.preventDefault();
      let F = a ? { ...u, w: u.w + O, h: u.h + P } : { ...u, x: u.x + O, y: u.y + P };
      if (a) {
        const V = Math.max(b, Math.round(F.w));
        F = { ...F, w: V, h: Math.max(y(V), Math.round(F.h)) };
      }
      z = { ...t.grid, [s]: ao(F) }, t.onDraft(z);
    }, g = () => {
      document.removeEventListener("touchmove", M), document.removeEventListener("touchend", g), document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", g), I ? t.onDone(z) : t.onTap(s);
    };
    document.addEventListener("touchmove", M, { passive: !1 }), document.addEventListener("touchend", g), document.addEventListener("mousemove", M), document.addEventListener("mouseup", g);
  };
  return /* @__PURE__ */ o("div", { class: "grid-editor", ref: e, style: { left: Te + "%", top: Te + "%", width: we + "%", height: we + "%" }, children: Ud.map((i) => {
    const s = t.grid[i], a = { left: s.x / J * 100 + "%", top: s.y / J * 100 + "%", width: s.w / J * 100 + "%", height: s.h / J * 100 + "%" };
    return /* @__PURE__ */ o(
      "div",
      {
        class: "grid-box grid-" + i,
        style: a,
        onTouchStart: (r) => n(r, i, !1),
        onMouseDown: (r) => n(r, i, !1),
        children: [
          /* @__PURE__ */ o("span", { class: "grid-label", children: d(i === "clock" ? "lock.clock" : "lock.widgets") }),
          /* @__PURE__ */ o("span", { class: "grid-resize", onTouchStart: (r) => n(r, i, !0), onMouseDown: (r) => n(r, i, !0) })
        ]
      },
      i
    );
  }) });
}
function wi(t) {
  const [e, n] = x(t.custom);
  H(() => n(t.custom), [t.custom]);
  const i = t.value === "custom";
  return /* @__PURE__ */ o(se, { children: [
    /* @__PURE__ */ o("div", { class: "lock-colors", children: [
      t.same && /* @__PURE__ */ o(
        "button",
        {
          class: "lock-color lock-color-same" + (t.value === "" ? " on" : ""),
          title: d("lock.color.same"),
          onClick: () => t.onPick(""),
          children: d("lock.color.same")
        }
      ),
      Zd.map((s) => /* @__PURE__ */ o(
        "button",
        {
          title: d("lock.color." + s),
          class: "lock-color" + (t.value === s ? " on" : "") + (s === "accent" ? " accent-bg" : "") + (s === "contrast" ? " lock-color-contrast" : ""),
          style: s === "accent" || s === "contrast" ? void 0 : { background: gs[s] },
          onClick: () => t.onPick(s),
          children: s === "contrast" ? /* @__PURE__ */ o("span", { children: "A" }) : null
        },
        s
      )),
      /* @__PURE__ */ o(
        "label",
        {
          class: "lock-color lock-color-custom" + (i ? " on" : ""),
          title: d("lock.color.custom"),
          style: i && ct.test(t.custom) ? { background: t.custom } : void 0,
          onClick: () => {
            i || t.onPick("custom");
          },
          children: [
            /* @__PURE__ */ o("input", { type: "color", value: ct.test(t.custom) ? t.custom : "#ffb86b", onInput: (s) => t.onCustom(s.currentTarget.value) }),
            /* @__PURE__ */ o("span", { children: "#" })
          ]
        }
      )
    ] }),
    i && /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.color.custom") }),
      /* @__PURE__ */ o(
        "input",
        {
          class: "hex-input" + (ct.test(e) ? "" : " invalid"),
          value: e,
          maxLength: 7,
          placeholder: "#ffb86b",
          onInput: (s) => {
            let a = s.currentTarget.value.trim();
            a && a[0] !== "#" && (a = "#" + a), n(a), ct.test(a) && t.onCustom(a.toLowerCase());
          }
        }
      )
    ] })
  ] });
}
const Yd = ["thin", "light", "regular", "bold"], Zd = ["contrast", "white", "accent", "warm", "mint", "sky", "rose"], Gd = ["xs", "s", "m", "l", "xl"], Jd = ["clock", "top", "bottom"], Xd = ["auto", "above", "below"], Kd = ["auto", "corner", "center", "top"], $d = ["", "left", "center", "right"], eh = ["", "top", "middle", "bottom"];
function vi(t) {
  const e = t.grid[t.kind], n = (i) => {
    const s = { ...e, ...i };
    s.ha || delete s.ha, s.va || delete s.va, ae(ro(t.orient, { ...t.grid, [t.kind]: s }));
  };
  return /* @__PURE__ */ o(se, { children: [
    /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.align_h") }),
      /* @__PURE__ */ o("div", { class: "seg", children: $d.map((i) => /* @__PURE__ */ o("button", { class: (e.ha || "") === i ? "active" : "", onClick: () => n({ ha: i || void 0 }), children: d("lock.align." + (i || "auto")) }, i)) })
    ] }),
    /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.align_v") }),
      /* @__PURE__ */ o("div", { class: "seg", children: eh.map((i) => /* @__PURE__ */ o("button", { class: (e.va || "") === i ? "active" : "", onClick: () => n({ va: i || void 0 }), children: d("lock.align." + (i || "auto")) }, i)) })
    ] })
  ] });
}
const th = ["auto", "text", "icons"];
function nh(t) {
  const e = xs(), n = ws(), i = vs(e, n), s = (r, c) => {
    const h = t.widgets.map((m) => m.id), A = r + c, u = h[r];
    h[r] = h[A], h[A] = u, ae({ order: h });
  }, a = (r, c) => {
    const h = e.hidden.filter((A) => A !== r);
    ae({ hidden: c ? h : h.concat(r) });
  };
  return /* @__PURE__ */ o("div", { class: "lock-panel", onClick: (r) => r.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "lock-panel-head", children: [
      /* @__PURE__ */ o("b", { children: t.kind === "clock" ? d("lock.clock") : d("lock.widgets") }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Ge, { size: 20 }) })
    ] }),
    t.kind === "clock" ? /* @__PURE__ */ o(se, { children: [
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.look") }),
      /* @__PURE__ */ o("div", { class: "lock-fonts", children: Yd.map((r) => /* @__PURE__ */ o("button", { class: "lock-font" + (e.font === r ? " on" : ""), style: { fontWeight: ps[r] }, onClick: () => ae({ font: r }), children: "12" }, r)) }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.size") }),
        /* @__PURE__ */ o("div", { class: "seg", children: Gd.map((r) => /* @__PURE__ */ o("button", { class: e.size === r ? "active" : "", onClick: () => ae({ size: r }), children: d("lock.size." + r) }, r)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.color") }),
      /* @__PURE__ */ o(
        wi,
        {
          value: e.color,
          custom: e.customColor,
          onPick: (r) => ae({ color: r }),
          onCustom: (r) => ae({ color: "custom", customColor: r })
        }
      ),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.place") }),
      i ? /* @__PURE__ */ o(vi, { kind: "clock", grid: i, orient: n }) : /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.layout") }),
        /* @__PURE__ */ o("select", { value: e.layout, onChange: (r) => ae({ layout: r.currentTarget.value }), children: Kd.map((r) => /* @__PURE__ */ o("option", { value: r, children: d("lock.layout." + r) }, r)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.show") }),
      /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.date, onChange: (r) => ae({ date: r.currentTarget.checked }) }),
        d("lock.date")
      ] }),
      e.date && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.date_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: Xd.map((r) => /* @__PURE__ */ o("button", { class: e.datePos === r ? "active" : "", onClick: () => ae({ datePos: r }), children: d("lock.date_pos." + r) }, r)) })
      ] }),
      t.hasWeather && /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.weather, onChange: (r) => ae({ weather: r.currentTarget.checked }) }),
        d("lock.weather")
      ] })
    ] }) : /* @__PURE__ */ o(se, { children: [
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.color") }),
      /* @__PURE__ */ o(
        wi,
        {
          value: e.widgetsColor,
          custom: e.widgetsCustomColor,
          same: !0,
          onPick: (r) => ae({ widgetsColor: r }),
          onCustom: (r) => ae({ widgetsColor: "custom", widgetsCustomColor: r })
        }
      ),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.place") }),
      i ? /* @__PURE__ */ o(vi, { kind: "widgets", grid: i, orient: n }) : /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.widgets_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: Jd.map((r) => /* @__PURE__ */ o("button", { class: e.widgetsPos === r ? "active" : "", onClick: () => ae({ widgetsPos: r }), children: d("lock.widgets_pos." + r) }, r)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.look") }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.chip_style") }),
        /* @__PURE__ */ o("select", { value: e.chipStyle, onChange: (r) => ae({ chipStyle: r.currentTarget.value }), children: th.map((r) => /* @__PURE__ */ o("option", { value: r, children: d("lock.chip_style." + r) }, r)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.which") }),
      !t.widgets.length && /* @__PURE__ */ o("p", { class: "hint", children: d("lock.no_widgets") }),
      t.widgets.map((r, c) => {
        const h = Je(r.icon);
        return /* @__PURE__ */ o("div", { class: "lock-widget", children: [
          /* @__PURE__ */ o("label", { class: "check", children: [
            /* @__PURE__ */ o("input", { type: "checkbox", checked: e.hidden.indexOf(r.id) === -1, onChange: (A) => a(r.id, A.currentTarget.checked) }),
            /* @__PURE__ */ o(h, { size: 16 }),
            /* @__PURE__ */ o("span", { children: r.title || gt(r.type) })
          ] }),
          /* @__PURE__ */ o("button", { class: "icon-btn", disabled: c === 0, onClick: () => s(c, -1), children: /* @__PURE__ */ o(Js, { size: 18 }) }),
          /* @__PURE__ */ o("button", { class: "icon-btn", disabled: c === t.widgets.length - 1, onClick: () => s(c, 1), children: /* @__PURE__ */ o(bl, { size: 18 }) })
        ] }, r.id);
      })
    ] })
  ] });
}
function To(t) {
  const [e, n] = x({ w: 0, h: 0 });
  return wo(() => {
    const i = t.current;
    if (!i) return;
    const s = () => {
      const r = i.clientWidth, c = i.clientHeight;
      n((h) => h.w === r && h.h === c ? h : { w: r, h: c });
    };
    s();
    const a = window.ResizeObserver;
    if (a) {
      const r = new a(s);
      return r.observe(i), () => r.disconnect();
    }
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []), e;
}
const Le = 12, Tt = 16, oh = 700, Ot = 6, ih = 350, sh = 44, ah = 84;
function _i(t) {
  const e = "touches" in t ? t.touches[0] || t.changedTouches[0] : t;
  return { x: e.clientX, y: e.clientY };
}
function rh({ editing: t, onCamera: e, onEdit: n }) {
  const i = te(), s = nt(), a = re(null), r = To(a), [c, h] = x(null), A = re(null), u = s.state.layout.cards, m = r.w - Tt * 2, l = r.h - Tt * 2, f = r.w > 0 && m < oh, p = f ? Ke : Ve, _ = f ? pc(u) : u, w = f ? u.filter((B) => B.m && B.m.hide) : [], k = (m - Le * (p - 1)) / p, b = k + Le, y = Math.max(1, Math.floor((l + Le) / b)), I = Math.max(0, (l - (y * b - Le)) / 2), z = (B) => ({ left: B.x * b, top: B.y * b, width: B.w * b - Le, height: B.h * b - Le }), M = (B, U, $) => {
    if (!t || "button" in B && B.button !== 0) return;
    B.stopPropagation();
    const N = "touches" in B && $ === "move", G = _i(B), ne = { id: U.id, mode: $, x0: G.x, y0: G.y, orig: U, dx: 0, dy: 0, active: $ === "resize", preview: _ };
    A.current = ne;
    let W = !N, v = 0;
    N ? v = window.setTimeout(() => {
      const Y = A.current;
      if (!Y) return;
      W = !0;
      const ce = { ...Y, active: !0 };
      A.current = ce, h(ce);
      try {
        navigator.vibrate && navigator.vibrate(15);
      } catch {
      }
    }, ih) : h(ne);
    const j = (Y) => {
      const ce = A.current;
      if (!ce) return;
      const de = _i(Y), oe = de.x - ce.x0, me = de.y - ce.y0;
      if (!W) {
        (Math.abs(oe) > Ot || Math.abs(me) > Ot) && R();
        return;
      }
      const _e = ce.active || Math.abs(oe) > Ot || Math.abs(me) > Ot;
      if (!_e) return;
      Y.cancelable && Y.preventDefault();
      const ye = ce.orig, Oe = bt(ce.mode === "move" ? { ...ye, x: ye.x + oe / b, y: ye.y + me / b } : { ...ye, w: ye.w + oe / b, h: ye.h + me / b }, p), ve = { ...ce, dx: oe, dy: me, active: _e, preview: je(_, Oe) };
      A.current = ve, h(ve);
    }, R = () => {
      clearTimeout(v);
      const Y = A.current;
      A.current = null, h(null), window.removeEventListener("mousemove", j), window.removeEventListener("mouseup", R), document.removeEventListener("touchmove", j, { passive: !1 }), document.removeEventListener("touchend", R), document.removeEventListener("touchcancel", R), Y && Y.active && g(Y.preview);
    };
    window.addEventListener("mousemove", j), window.addEventListener("mouseup", R), document.addEventListener("touchmove", j, { passive: !1 }), document.addEventListener("touchend", R), document.addEventListener("touchcancel", R);
  }, g = (B) => s.saveLayout({ ...s.state.layout, cards: f ? Sn(u, B) : B }), D = c && c.active ? c.preview : _, L = (B) => {
    if (!f) {
      s.saveLayout({ ...s.state.layout, cards: je(u.filter((E) => E.id !== B.id)) });
      return;
    }
    const U = _.filter((E) => E.id !== B.id), $ = Sn(u, je(U)).map((E) => E.id === B.id ? { ...E, m: { x: 0, y: 0, w: Ke, h: 3, hide: !0 } } : E);
    s.saveLayout({ ...s.state.layout, cards: $ });
  }, O = (B) => {
    const $ = Sn(u, _).map((E) => E.id === B.id ? { ...E, m: { x: 0, y: to(_), w: Ke, h: 3 } } : E);
    s.saveLayout({ ...s.state.layout, cards: $ });
  }, P = to(D), F = t ? Math.max(y, P) : P, V = F <= y ? I : 0;
  return /* @__PURE__ */ o("main", { class: "grid" + (t ? " editing" : "") + (c && c.active ? " dragging-card" : "") + (f ? " narrow" : ""), ref: a, children: [
    t && f && /* @__PURE__ */ o("div", { class: "grid-note", children: [
      /* @__PURE__ */ o("span", { children: d("grid.narrow_note") }),
      w.length > 0 && /* @__PURE__ */ o("div", { class: "hidden-cards", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: [
          /* @__PURE__ */ o(ua, { size: 14 }),
          d("grid.hidden_on_phone")
        ] }),
        w.map((B) => /* @__PURE__ */ o("button", { class: "chip", onClick: () => O(B), children: [
          /* @__PURE__ */ o(Ze, { size: 14 }),
          /* @__PURE__ */ o("span", { children: Bo(i, B) })
        ] }, B.id))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "grid-inner", style: { height: Math.max(0, F * b - Le), margin: Tt + V + "px " + Tt + "px" }, children: [
      t && r.w > 0 && /* @__PURE__ */ o(ch, { rows: F, cols: p, cell: k, step: b }),
      r.w > 0 && D.map((B) => {
        const U = !!c && c.active && c.id === B.id;
        let $ = z(B);
        if (U && c) {
          const E = z(c.orig);
          $ = c.mode === "move" ? { ...E, left: E.left + c.dx, top: E.top + c.dy } : { ...E, width: Math.max(k * 2, E.width + c.dx), height: Math.max(k * 2, E.height + c.dy) };
        }
        return /* @__PURE__ */ o("div", { children: [
          U && /* @__PURE__ */ o("div", { class: "drop-slot", style: z(B) }),
          /* @__PURE__ */ o(
            lh,
            {
              card: B,
              style: $,
              editing: t,
              dragged: U,
              onCamera: e,
              onEdit: n,
              onRemove: L,
              narrow: f,
              onStart: M,
              ha: i
            }
          )
        ] }, B.id);
      })
    ] })
  ] });
}
function ch({ rows: t, cols: e, cell: n, step: i }) {
  const s = [];
  for (let a = 0; a < t; a++)
    for (let r = 0; r < e; r++)
      s.push(/* @__PURE__ */ o("div", { class: "grid-dot", style: { left: r * i, top: a * i, width: n, height: n } }, a + ":" + r));
  return /* @__PURE__ */ o("div", { class: "grid-dots", children: s });
}
function lh({ card: t, style: e, editing: n, dragged: i, ha: s, onCamera: a, onEdit: r, onRemove: c, narrow: h, onStart: A }) {
  const u = t.color ? " tint-" + t.color : "";
  return /* @__PURE__ */ o(
    "div",
    {
      class: "cell" + u + (i ? " dragged" : ""),
      style: e,
      onMouseDown: A ? (m) => A(m, t, "move") : void 0,
      onTouchStart: A ? (m) => A(m, t, "move") : void 0,
      children: [
        /* @__PURE__ */ o(Fd, { title: Bo(s, t), aside: !n && /* @__PURE__ */ o(Sr, { card: t }), class: "card-" + t.type, children: /* @__PURE__ */ o("div", { class: "panel-body", children: /* @__PURE__ */ o(Er, { card: t, onCamera: a, size: { w: e.width - sh, h: e.height - ah } }) }) }),
        n && /* @__PURE__ */ o(se, { children: [
          /* @__PURE__ */ o("button", { class: "badge-btn badge-del", onMouseDown: Pt, onTouchStart: Pt, onClick: () => c(t), title: d(h ? "grid.hide_on_phone" : "common.delete"), children: h ? /* @__PURE__ */ o(ua, { size: 14 }) : /* @__PURE__ */ o(Ge, { size: 16 }) }),
          /* @__PURE__ */ o("button", { class: "badge-btn badge-edit", onMouseDown: Pt, onTouchStart: Pt, onClick: () => r(t), title: d("common.edit"), children: /* @__PURE__ */ o(Na, { size: 14 }) }),
          A && /* @__PURE__ */ o(
            "div",
            {
              class: "resize-handle",
              onMouseDown: (m) => A(m, t, "resize"),
              onTouchStart: (m) => A(m, t, "resize")
            }
          ),
          /* @__PURE__ */ o("span", { class: "size-tag", children: [
            t.w,
            "×",
            t.h
          ] })
        ] })
      ]
    }
  );
}
function Pt(t) {
  t.stopPropagation();
}
const mo = "photoframe.kiosk", Wt = [];
function fo() {
  return mo + ":" + (location.pathname.split("/")[1] || "lovelace");
}
function Tr() {
  try {
    const t = localStorage.getItem(mo);
    return t !== null && (localStorage.setItem(fo(), t), localStorage.removeItem(mo)), localStorage.getItem(fo()) || "";
  } catch {
    return "";
  }
}
function dh(t) {
  try {
    localStorage.setItem(fo(), t);
  } catch {
  }
  Wt.forEach((e) => e());
}
function hh(t) {
  return Wt.push(t), () => {
    Wt.splice(Wt.indexOf(t), 1);
  };
}
function Ah(t) {
  const e = new URLSearchParams(location.search);
  if (e.has("kiosk")) return e.get("kiosk") !== "0" && e.get("kiosk") !== "false";
  const n = Tr();
  return n ? n === "on" : t;
}
function rt(t) {
  return t && t.shadowRoot ? t.shadowRoot : null;
}
const Ci = "photoframe-kiosk";
let ut = !1;
const Vt = [];
function uh(t) {
  return Vt.push(t), () => {
    Vt.splice(Vt.indexOf(t), 1);
  };
}
function Mi(t) {
  t !== ut && (ut = t, Vt.forEach((e) => e()));
}
function Fn(t, e, n) {
  if (!t || t.getElementById(Ci)) return;
  const i = document.createElement("style");
  i.id = Ci, i.textContent = e, t.appendChild(i), n.push(() => i.remove());
}
function mh() {
  const [t, e] = x(ut);
  return H(() => {
    const n = uh(() => e(ut));
    return e(ut), n;
  }, []), t;
}
function fh() {
  history.pushState(null, "", "/"), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function ph() {
  const t = rt(document.querySelector("home-assistant"))?.querySelector("home-assistant-main"), e = rt(t);
  if (!e) return null;
  const n = e.querySelector("ha-panel-lovelace"), i = rt(n)?.querySelector("hui-root"), s = rt(i);
  if (!i || !s) return null;
  const a = [], r = (A, u, m) => {
    const l = A.style.getPropertyValue(u);
    A.style.setProperty(u, m), a.push(() => l ? A.style.setProperty(u, l) : A.style.removeProperty(u));
  }, c = e.querySelector("ha-drawer");
  [t, c].forEach((A) => {
    A && (r(A, "--ha-sidebar-width", "0px"), r(A, "--mdc-drawer-width", "0px"));
  }), Fn(e, ":host{--ha-sidebar-width:0px!important;--mdc-drawer-width:0px!important}ha-sidebar{display:none!important}", a), Fn(rt(c), ".sidebar-shell,aside,.mdc-drawer{display:none!important;width:0!important}.app-content,.mdc-drawer-app-content{margin-left:0!important;margin-right:0!important;margin-inline-start:0!important;padding-left:0!important;padding-inline-start:0!important;width:100%!important}", a);
  const h = e.querySelector("ha-sidebar");
  if (h) {
    const A = h.style.display;
    h.style.display = "none", a.push(() => {
      h.style.display = A;
    });
  }
  return r(i, "--header-height", "0px"), Fn(s, ".header,app-header,.toolbar{display:none!important}#view{padding-top:0!important;min-height:100vh}", a), Mi(!0), () => {
    a.splice(0).reverse().forEach((A) => A()), Mi(!1);
  };
}
const Ei = (t) => d("status." + t);
function gh() {
  const t = xr();
  return /* @__PURE__ */ o(se, { children: [
    /* @__PURE__ */ o("span", { class: "bar-clock", children: kr(t) }),
    /* @__PURE__ */ o("span", { class: "bar-date", children: wr(t) })
  ] });
}
function bh(t) {
  const { active: e, screen: n, screens: i } = le.state, s = i[e] || [], [a, r] = x("");
  return H(() => r(""), [n, t.editing]), s.length < 2 && !t.editing ? null : /* @__PURE__ */ o("div", { class: "screen-tabs", children: [
    s.map((c, h) => t.editing && c.id === n ? /* @__PURE__ */ o("span", { class: "screen-tab on editing", children: [
      h > 0 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => le.moveScreen(c.id, -1), children: /* @__PURE__ */ o(Us, { size: 14 }) }),
      /* @__PURE__ */ o(
        "input",
        {
          value: c.name,
          placeholder: Rt(c, h),
          size: Math.max(6, (c.name || Rt(c, h)).length),
          onChange: (A) => le.renameScreen(c.id, A.currentTarget.value.trim())
        }
      ),
      h < s.length - 1 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => le.moveScreen(c.id, 1), children: /* @__PURE__ */ o(Zs, { size: 14 }) }),
      s.length > 1 && /* @__PURE__ */ o(
        "button",
        {
          class: "screen-del" + (a === c.id ? " sure" : ""),
          title: d("screen.delete"),
          onClick: () => a === c.id || !c.cards.length ? le.removeScreen(c.id) : r(c.id),
          children: a === c.id ? /* @__PURE__ */ o("span", { children: d("screen.delete_sure") }) : /* @__PURE__ */ o(_t, { size: 14 })
        }
      )
    ] }, c.id) : /* @__PURE__ */ o("button", { class: "screen-tab" + (c.id === n ? " on" : ""), onClick: () => le.setActive(e, c.id), children: Rt(c, h) }, c.id)),
    t.editing && /* @__PURE__ */ o("button", { class: "screen-tab add", onClick: () => le.addScreen(""), children: [
      /* @__PURE__ */ o(Ze, { size: 14 }),
      /* @__PURE__ */ o("span", { children: d("screen.add") })
    ] })
  ] });
}
function yh(t, e) {
  const n = re(null), i = (a) => "touches" in a ? a.touches[0] || a.changedTouches[0] : a;
  return {
    onTouchStart: (a) => {
      if (t) {
        const r = i(a);
        n.current = { x: r.clientX, y: r.clientY };
      }
    },
    onMouseDown: (a) => {
      t && (n.current = { x: a.clientX, y: a.clientY });
    },
    onTouchEnd: (a) => s(i(a)),
    onMouseUp: (a) => s(a)
  };
  function s(a) {
    const r = n.current;
    if (n.current = null, !r) return;
    const c = a.clientX - r.x, h = a.clientY - r.y;
    Math.abs(c) > 90 && Math.abs(c) > Math.abs(h) * 2 && e(c < 0 ? 1 : -1);
  }
}
function xh(t) {
  const e = te(), n = t.homes.length > 1, i = mh(), s = t.homes.reduce((f, p) => f + (le.state.screens[p.id] || []).length, 0), a = yh(s > 1 && !t.editing, t.onStep), r = t.homes.filter((f) => f.id === t.active)[0];
  H(() => {
    !t.visible && t.editing && t.onEditing(!1);
  }, [t.visible]);
  const c = To(t.innerRef), h = c.w > 0 && c.w < 760, [A, u] = x(!1);
  H(() => {
    (!t.visible || !h) && u(!1);
  }, [t.visible, h]), H(() => {
    if (!A) return;
    const f = () => u(!1), p = window.setTimeout(() => document.addEventListener("click", f), 0);
    return () => {
      clearTimeout(p), document.removeEventListener("click", f);
    };
  }, [A]);
  const m = !le.card || le.card.canEdit, l = /* @__PURE__ */ o(se, { children: [
    m && /* @__PURE__ */ o("button", { class: "round", onClick: () => t.onEditing(!0), title: d("controls.customize"), children: /* @__PURE__ */ o(Na, { size: 18 }) }),
    /* @__PURE__ */ o("button", { class: "round", onClick: t.onSettings, title: d("controls.settings"), children: /* @__PURE__ */ o(Yl, { size: 20 }) }),
    /* @__PURE__ */ o("button", { class: "round accent", onClick: t.onPhotos, title: d("controls.to_photos"), children: /* @__PURE__ */ o(_a, { size: 20 }) })
  ] });
  return /* @__PURE__ */ o("div", { ref: t.innerRef, class: "controls" + (t.visible ? " visible" : ""), children: [
    /* @__PURE__ */ o("header", { class: "bar" + (h ? " bar-narrow" : "") + (A ? " menu-open" : "") + (t.editing ? " bar-editing" : ""), children: [
      /* @__PURE__ */ o("div", { class: "bar-time" + (i ? " clock-link" : ""), onClick: i ? fh : void 0, children: /* @__PURE__ */ o(gh, {}) }),
      n && /* @__PURE__ */ o("button", { class: "home-switch", onClick: () => t.onSwitchHome(1), title: d("controls.next_home"), children: [
        /* @__PURE__ */ o("span", { class: "home-name", children: r ? r.name : "" }),
        /* @__PURE__ */ o("span", { class: "home-dots", children: t.homes.map((f) => /* @__PURE__ */ o("i", { class: f.id === t.active ? "on" : "" }, f.id)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "bar-actions", children: t.editing ? /* @__PURE__ */ o(se, { children: [
        /* @__PURE__ */ o("button", { class: "round", onClick: t.onAddCard, title: d("controls.add_card"), children: /* @__PURE__ */ o(Ze, { size: 20 }) }),
        /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: () => t.onEditing(!1), children: [
          /* @__PURE__ */ o(gl, { size: 18 }),
          /* @__PURE__ */ o("span", { children: d("common.done") })
        ] })
      ] }) : h ? /* @__PURE__ */ o("div", { class: "burger", children: [
        /* @__PURE__ */ o("div", { class: "burger-items", children: l }),
        /* @__PURE__ */ o("button", { class: "round burger-btn conn-" + e.status, onClick: () => u(!A), title: Ei(e.status), children: [
          A ? /* @__PURE__ */ o(Ge, { size: 20 }) : /* @__PURE__ */ o(jl, { size: 20 }),
          /* @__PURE__ */ o("i", { class: "burger-dot" })
        ] })
      ] }) : /* @__PURE__ */ o(se, { children: [
        /* @__PURE__ */ o("span", { class: "conn conn-" + e.status, children: [
          /* @__PURE__ */ o("i", {}),
          Ei(e.status)
        ] }),
        l
      ] }) })
    ] }),
    /* @__PURE__ */ o(bh, { editing: t.editing }),
    /* @__PURE__ */ o("div", { class: "home-pane" + (t.slide ? " slide-" + t.slide : ""), ...a, children: /* @__PURE__ */ o(rh, { editing: t.editing, onCamera: t.onCamera, onEdit: t.onEditCard }) }, t.active + "/" + le.state.screen)
  ] });
}
function tt(t) {
  return /* @__PURE__ */ o("div", { class: "modal", onClick: t.onClose, children: /* @__PURE__ */ o("div", { class: "modal-box" + (t.wide ? " modal-wide" : ""), onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "modal-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Ge, { size: 24 }) })
    ] }),
    t.children
  ] }) });
}
function kh(t) {
  return /* @__PURE__ */ o(tt, { title: d("camera.live_title"), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "cam-full", children: /* @__PURE__ */ o("img", { src: t.url, alt: "" }) }) });
}
const wh = [5e3, 1e4, 3e4, 6e4], vh = [20, 45, 120, 0];
function _h() {
  const t = rn(), e = le.state.screens[t] || [], n = cn();
  return t + "/" + (e.some((i) => i.id === n) ? n : e[0] ? e[0].id : "");
}
function Ch() {
  const t = nt(), [e, n] = x(!1), [i, s] = x(""), a = t.haLink;
  if (a !== "missing" && a !== "error") return null;
  const r = () => {
    n(!0), s(""), t.createHaDashboard().then(() => n(!1), (c) => {
      n(!1), s(c.message || String(c));
    });
  };
  return /* @__PURE__ */ o("div", { class: "ha-storage", children: [
    /* @__PURE__ */ o("p", { class: "hint", children: d("storage." + a) }),
    a === "missing" && (t.haClient && t.haClient.isAdmin ? /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: e, onClick: r, children: /* @__PURE__ */ o("span", { children: d(e ? "common.loading" : "storage.create") }) }) : /* @__PURE__ */ o("p", { class: "hint small", children: d("storage.ask_admin") })),
    i && /* @__PURE__ */ o("div", { class: "c-red small", children: i })
  ] });
}
function Mh() {
  const t = nt(), e = t.migration, [n, i] = x(""), [s, a] = x(""), r = () => {
    i("0 / " + e.photos), a(""), t.migratePhotos((c, h) => i(c + " / " + h)).then(
      () => i(""),
      (c) => {
        i(""), a(c.message || String(c));
      }
    );
  };
  return /* @__PURE__ */ o("div", { class: "migration", children: [
    /* @__PURE__ */ o("p", { children: d("migration.text") }),
    /* @__PURE__ */ o("div", { class: "row-btns", children: [
      e.photos > 0 && /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: r, children: /* @__PURE__ */ o("span", { children: n ? d("photos.uploading") + " " + n : d("migration.photos", { n: e.photos }) }) }),
      e.screens && /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: () => t.migrateScreens(), children: /* @__PURE__ */ o("span", { children: d("migration.screens") }) }),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: () => t.dismissMigration(), children: /* @__PURE__ */ o("span", { children: d("migration.skip") }) })
    ] }),
    s && /* @__PURE__ */ o("div", { class: "c-red small", children: s })
  ] });
}
function Eh(t) {
  const e = nt(), { settings: n, photos: i } = e.state, s = !!e.card && !e.card.standalone, a = !!e.card || !!an(), [r, c] = x("photos"), h = a ? r : "ha", [A, u] = x(n), [m, l] = x(!1), [f, p] = x(""), [_, w] = x(""), k = (C) => u({ ...A, ...C }), [b, y] = x(!1), [I, z] = x(""), [M, g] = x(""), D = (C, q) => {
    const xe = Array.prototype.slice.call(C || []).filter((fe) => /^image\//.test(fe.type) || /\.(heic|heif)$/i.test(fe.name));
    q && (q.value = ""), xe.length && (l(!0), z(""), g(""), e.addPhotos(xe, (fe, ot) => g(ot > 1 ? fe + " / " + ot : ""), ne ? v : void 0).then(
      () => l(!1),
      (fe) => {
        l(!1), z(fe.message || String(fe));
      }
    ));
  }, [L, O] = x(ss()), [P, F] = x(Tr()), [V, B] = x(Ki()), [U, $] = x(Kt()), [E, N] = x(Zc()), G = an(), ne = !!e.card && e.card.integration, W = e.card && e.card.config.albums || [], [v, j] = x(e.card && e.card.album && e.card.album !== "all" ? e.card.album : ""), [R, Y] = x("");
  H(() => {
    e.card && e.card.mediaBrowserUrl(v).then(Y, () => Y(""));
  }, [v, !!e.card]);
  const [ce, de] = x(wt()), [oe, me] = x(e.state.homes), _e = JSON.stringify(oe) !== JSON.stringify(e.state.homes), ye = (C, q) => me(oe.map((xe) => xe.id === C ? { ...xe, ...q } : xe)), Oe = () => {
    e.saveSettings(A), _e && e.saveHomes(oe), t.onClose();
  }, ve = () => {
    try {
      const C = JSON.parse(f);
      if (!C || !Array.isArray(C.cards)) throw new Error(d("settings.no_cards_field"));
      e.saveLayout(C), w(""), p("");
    } catch (C) {
      w(d("settings.import_failed", { error: C.message }));
    }
  };
  return /* @__PURE__ */ o(tt, { title: /* @__PURE__ */ o("span", { class: "modal-title", children: [
    /* @__PURE__ */ o(zl, { size: 20, class: "accent-text" }),
    /* @__PURE__ */ o("span", { children: d("settings.title") })
  ] }), onClose: t.onClose, children: [
    a && /* @__PURE__ */ o("div", { class: "tabs", children: [
      /* @__PURE__ */ o("button", { class: h === "photos" ? "active" : "", onClick: () => c("photos"), children: d("settings.tab.photos") }),
      /* @__PURE__ */ o("button", { class: h === "homes" ? "active" : "", onClick: () => c("homes"), children: d("settings.tab.homes") }),
      /* @__PURE__ */ o("button", { class: h === "layout" ? "active" : "", onClick: () => c("layout"), children: d("settings.tab.layout") }),
      !s && /* @__PURE__ */ o("button", { class: h === "ha" ? "active" : "", onClick: () => c("ha"), children: "Home Assistant" })
    ] }),
    h === "photos" && /* @__PURE__ */ o("div", { children: [
      e.migration && /* @__PURE__ */ o(Mh, {}),
      /* @__PURE__ */ o(Rn, { title: d("settings.section.photos"), children: [
        /* @__PURE__ */ o("p", { class: "hint", children: e.card ? d("photos.card_hint", { folder: e.card.folder }) : d("photos.local_hint") }),
        /* @__PURE__ */ o(
          "label",
          {
            class: "drop-zone" + (m ? " busy" : "") + (b ? " over" : ""),
            onDragOver: (C) => {
              C.preventDefault(), y(!0);
            },
            onDragLeave: () => y(!1),
            onDrop: (C) => {
              C.preventDefault(), y(!1), m || D(C.dataTransfer && C.dataTransfer.files);
            },
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "file",
                  multiple: !0,
                  accept: "image/*,.heic,.heif",
                  onChange: (C) => D(C.currentTarget.files, C.currentTarget),
                  disabled: m
                }
              ),
              /* @__PURE__ */ o(wl, { size: 40, class: "muted" }),
              /* @__PURE__ */ o("p", { class: "drop-title", children: m ? d("photos.uploading") + (M ? " " + M : "") : d("photos.pick") }),
              /* @__PURE__ */ o("p", { class: "hint small", children: d(ne ? "photos.formats_server" : "photos.formats") })
            ]
          }
        ),
        (I || e.photoError) && /* @__PURE__ */ o("div", { className: "c-red small upload-error", children: I || e.photoError }),
        ne && W.length > 0 && /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("photos.album") }),
          /* @__PURE__ */ o("select", { value: v, onChange: (C) => j(C.currentTarget.value), children: [
            /* @__PURE__ */ o("option", { value: "", children: d("photos.album_root") }),
            W.map((C) => /* @__PURE__ */ o("option", { value: C, children: C }, C))
          ] })
        ] }),
        e.card && /* @__PURE__ */ o("div", { className: "photos-count", children: [
          /* @__PURE__ */ o("span", { children: d("photos.count", { n: i.length }) }),
          R && /* @__PURE__ */ o("a", { href: R, target: "_blank", rel: "noopener", children: d("photos.open_media") })
        ] }),
        !e.card && i.length > 0 && /* @__PURE__ */ o("div", { className: "thumbs thumbs-small", children: i.map((C) => /* @__PURE__ */ o("div", { className: "thumb", style: { backgroundImage: "url(" + C.url + ")" }, children: /* @__PURE__ */ o("button", { class: "thumb-del", onClick: () => e.deletePhoto(C.id), children: /* @__PURE__ */ o(Ge, { size: 14 }) }) }, C.id)) })
      ] }),
      /* @__PURE__ */ o(Rn, { title: d("settings.section.slideshow"), children: [
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.slide_interval") }),
          /* @__PURE__ */ o("select", { value: A.slideIntervalMs, onChange: (C) => k({ slideIntervalMs: +C.currentTarget.value }), children: wh.map((C) => /* @__PURE__ */ o("option", { value: C, children: d("settings.interval." + C) }, C)) })
        ] }),
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.idle_return") }),
          /* @__PURE__ */ o("select", { value: A.idleSec, onChange: (C) => k({ idleSec: +C.currentTarget.value }), children: vh.map((C) => /* @__PURE__ */ o("option", { value: C, children: d("settings.idle." + C) }, C)) })
        ] }),
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.fit") }),
          /* @__PURE__ */ o("select", { value: U, onChange: (C) => {
            const q = C.currentTarget.value;
            $(q), nc(q);
          }, children: [
            /* @__PURE__ */ o("option", { value: "auto", children: d("settings.fit_auto") }),
            /* @__PURE__ */ o("option", { value: "contain", children: d("settings.fit_contain") }),
            /* @__PURE__ */ o("option", { value: "cover", children: d("settings.fit_cover") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ o(Rn, { title: d("settings.section.device"), children: [
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.quality") }),
          /* @__PURE__ */ o("select", { value: V, onChange: (C) => {
            const q = C.currentTarget.value;
            B(q), Jr(q);
          }, children: [
            /* @__PURE__ */ o(
              "option",
              {
                value: "auto",
                children: d("settings.quality_auto", { mode: d($i() === "lite" ? "settings.quality_lite" : "settings.quality_full") })
              }
            ),
            /* @__PURE__ */ o("option", { value: "full", children: d("settings.quality_full") }),
            /* @__PURE__ */ o("option", { value: "lite", children: d("settings.quality_lite") })
          ] })
        ] }),
        E !== null && /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.autostart") }),
          /* @__PURE__ */ o("select", { value: E ? "on" : "off", onChange: (C) => {
            const q = C.currentTarget.value === "on";
            N(q), Gc(q);
          }, children: [
            /* @__PURE__ */ o("option", { value: "on", children: d("settings.autostart_on") }),
            /* @__PURE__ */ o("option", { value: "off", children: d("settings.autostart_off") })
          ] })
        ] }),
        s && /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.kiosk") }),
          /* @__PURE__ */ o("select", { value: P, onChange: (C) => {
            const q = C.currentTarget.value;
            F(q), dh(q);
          }, children: [
            /* @__PURE__ */ o("option", { value: "", children: d("settings.kiosk_auto") }),
            /* @__PURE__ */ o("option", { value: "on", children: d("settings.kiosk_on") }),
            /* @__PURE__ */ o("option", { value: "off", children: d("settings.kiosk_off") })
          ] })
        ] }),
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.language") }),
          /* @__PURE__ */ o("select", { value: L, onChange: (C) => {
            O(C.currentTarget.value), dc(C.currentTarget.value), yn();
          }, children: [
            /* @__PURE__ */ o("option", { value: "", children: d("settings.language_auto") }),
            lc().map((C) => /* @__PURE__ */ o("option", { value: C.code, children: C.name }, C.code))
          ] })
        ] })
      ] })
    ] }),
    h === "ha" && s && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("p", { class: "hint", children: d("ha.card_hint") }) }),
    h === "ha" && !s && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("div", { class: "auth", children: [
        /* @__PURE__ */ o("div", { class: "auth-title", children: d("ha.auth") }),
        /* @__PURE__ */ o("label", { class: "field", children: [
          /* @__PURE__ */ o("span", { children: d("ha.url") }),
          /* @__PURE__ */ o("input", { value: A.haUrl, placeholder: G ? G.hassUrl : location.protocol + "//" + location.host, onInput: (C) => k({ haUrl: C.currentTarget.value.trim() }) })
        ] }),
        G ? /* @__PURE__ */ o("div", { class: "auth-session", children: [
          /* @__PURE__ */ o("span", { children: d("ha.logged_in", { url: G.hassUrl }) }),
          !G.embedded && /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
            Mc(), location.reload();
          }, children: [
            /* @__PURE__ */ o(Hl, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("ha.logout") })
          ] })
        ] }) : /* @__PURE__ */ o("button", { class: "btn btn-ghost btn-login", onClick: () => {
          e.saveSettings(A), zc(A.haUrl);
        }, children: [
          /* @__PURE__ */ o(Ll, { size: 16 }),
          /* @__PURE__ */ o("span", { children: d("ha.login") })
        ] }),
        /* @__PURE__ */ o("p", { class: "hint", children: d("ha.local_hint") })
      ] }),
      /* @__PURE__ */ o(Ch, {}),
      e.frameClient && /* @__PURE__ */ o("label", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: d("frame.name") }),
        /* @__PURE__ */ o(
          "input",
          {
            value: ce,
            placeholder: d("frame.name_placeholder"),
            onInput: (C) => de(C.currentTarget.value),
            onChange: (C) => e.renameFrame(C.currentTarget.value.trim())
          }
        ),
        /* @__PURE__ */ o("small", { class: "option-hint", children: d("frame.hint") })
      ] })
    ] }),
    h === "homes" && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("p", { class: "hint", children: d("homes.hint") + (e.card ? d("homes.card_hint") : "") }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("screen.start") }),
        /* @__PURE__ */ o("select", { value: _h(), onChange: (C) => {
          const q = C.currentTarget.value.split("/");
          e.setStart(q[0], q[1]);
        }, children: e.state.homes.map((C) => (e.state.screens[C.id] || []).map((q, xe) => /* @__PURE__ */ o("option", { value: C.id + "/" + q.id, children: (e.state.homes.length > 1 ? C.name + " · " : "") + Rt(q, xe) }, C.id + "/" + q.id))) })
      ] }),
      oe.map((C) => /* @__PURE__ */ o("div", { class: "home-row", children: /* @__PURE__ */ o("div", { class: "home-row-head", children: [
        /* @__PURE__ */ o("input", { class: "home-input", value: C.name, onInput: (q) => ye(C.id, { name: q.currentTarget.value }) }),
        C.id !== ue && /* @__PURE__ */ o("button", { class: "icon-btn danger", title: d("homes.delete"), onClick: () => me(oe.filter((q) => q.id !== C.id)), children: /* @__PURE__ */ o(_t, { size: 16 }) })
      ] }) }, C.id)),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => me(oe.concat({ id: "h" + Date.now().toString(36), name: d("homes.new_name") })), children: /* @__PURE__ */ o("span", { children: d("homes.add") }) })
    ] }),
    h === "layout" && /* @__PURE__ */ o("div", { children: [
      e.card && e.cardError && /* @__PURE__ */ o("div", { class: "c-red small", children: d("sync.save_failed", { error: e.cardError }) }),
      ne && /* @__PURE__ */ o(Sh, { client: e.card.client }),
      /* @__PURE__ */ o("div", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: d("layout.title") }),
        /* @__PURE__ */ o("div", { class: "row-btns", children: [
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
            p(JSON.stringify(e.state.layout, null, 2)), w("");
          }, children: [
            /* @__PURE__ */ o(_l, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("layout.export") })
          ] }),
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => e.saveLayout(ls()), children: [
            /* @__PURE__ */ o(Vl, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("layout.reset") })
          ] })
        ] }),
        /* @__PURE__ */ o("textarea", { class: "json", value: f, placeholder: d("layout.import_placeholder"), onInput: (C) => p(C.currentTarget.value) }),
        _ && /* @__PURE__ */ o("div", { class: "c-red small", children: _ }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !f, onClick: ve, children: /* @__PURE__ */ o("span", { children: d("layout.import") }) })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      h === "photos" && !e.card && i.length > 0 ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: () => e.clearPhotos(), children: [
        /* @__PURE__ */ o(_t, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("photos.delete_all") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: Oe, children: d("common.done") })
    ] })
  ] });
}
function Sh(t) {
  const [e, n] = x(null), [i, s] = x(""), [a, r] = x("");
  if (H(() => {
    t.client.call({ type: "photoframe/frames" }).then(
      (h) => {
        const A = h.frames.filter((u) => u.frame_id !== xn() && (!!u.lockscreen || He(u.grid) || He(u.grid_portrait)));
        n(A), A.length && s(A[0].frame_id);
      },
      () => n([])
    );
  }, [t.client]), !e) return null;
  const c = e.filter((h) => h.frame_id === i)[0];
  return /* @__PURE__ */ o("div", { class: "field", children: [
    /* @__PURE__ */ o("span", { children: d("layout.grid_title") }),
    e.length === 0 ? /* @__PURE__ */ o("p", { class: "hint small", children: d("layout.grid_none") }) : /* @__PURE__ */ o(se, { children: [
      /* @__PURE__ */ o("select", { value: i, onChange: (h) => {
        s(h.currentTarget.value), r("");
      }, children: e.map((h) => /* @__PURE__ */ o("option", { value: h.frame_id, children: (h.name || h.frame_id) + (h.online ? "" : " · " + d("layout.grid_offline")) }, h.frame_id)) }),
      /* @__PURE__ */ o("div", { class: "row-btns", children: [
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !c || !c.lockscreen, onClick: () => {
          ae(So(c.lockscreen)), r("all");
        }, children: /* @__PURE__ */ o("span", { children: d(a === "all" ? "layout.grid_done" : "layout.look_take") }) }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !c, onClick: () => {
          ae({ grid: He(c.grid), gridPortrait: He(c.grid_portrait) }), r("grid");
        }, children: /* @__PURE__ */ o("span", { children: d(a === "grid" ? "layout.grid_done" : "layout.grid_take") }) })
      ] })
    ] })
  ] });
}
function Rn(t) {
  return /* @__PURE__ */ o("div", { class: "settings-section", children: [
    /* @__PURE__ */ o("div", { class: "section-title", children: t.title }),
    t.children
  ] });
}
function zh(t) {
  const e = Object.keys(tn);
  return /* @__PURE__ */ o(tt, { title: d("editor.new_card"), onClose: t.onClose, children: /* @__PURE__ */ o("div", { class: "type-list", children: e.map((n) => {
    const i = tn[n], s = Je(i.icon);
    return /* @__PURE__ */ o("button", { class: "type-row", onClick: () => t.onPick({
      // Новая карточка встаёт в конец сетки; settle при сохранении поднимет её на свободное место.
      id: uc(),
      type: n,
      title: "",
      icon: i.icon,
      x: 0,
      y: 999,
      w: n === "switches" ? 6 : 3,
      h: 3,
      items: []
    }), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(s, { size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: gt(n) }),
        /* @__PURE__ */ o("small", { children: rs(n) })
      ] }),
      /* @__PURE__ */ o(Ze, { size: 18 })
    ] }, n);
  }) }) });
}
function Ih(t) {
  const e = te(), [n, i] = x(""), [s, a] = x(!1), [r, c] = x(t.cardType ? "devices" : "entities"), h = n.toLowerCase(), A = Object.keys(e.states).filter((l) => {
    if (t.exclude.indexOf(l) !== -1 || !s && !We(e, l) || !s && t.domains.indexOf(l.split(".")[0]) === -1 || !s && t.match && !t.match(e.states[l])) return !1;
    if (!h) return !0;
    const f = String(e.states[l].attributes.friendly_name || "").toLowerCase();
    return l.indexOf(h) !== -1 || f.indexOf(h) !== -1;
  }).sort().slice(0, 150), u = t.cardType, m = u ? Object.keys(e.devices).map((l) => e.devices[l]).map((l) => ({
    dev: l,
    fit: l.entities.filter((f) => e.registry[f] && e.registry[f].ec == null && We(e, f) && Do(u, e.states[f]))
  })).filter((l) => l.fit.length && (t.excludeDevices || []).indexOf(l.dev.id) === -1 && (!h || l.dev.name.toLowerCase().indexOf(h) !== -1)).sort((l, f) => l.dev.name.localeCompare(f.dev.name)) : [];
  return /* @__PURE__ */ o("div", { class: "picker", children: [
    u && /* @__PURE__ */ o("div", { class: "seg seg-wide picker-mode", children: [
      /* @__PURE__ */ o("button", { class: r === "devices" ? "active" : "", onClick: () => c("devices"), children: d("editor.devices") }),
      /* @__PURE__ */ o("button", { class: r === "entities" ? "active" : "", onClick: () => c("entities"), children: d("editor.entities") })
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-search", children: [
      /* @__PURE__ */ o(Ul, { size: 16 }),
      /* @__PURE__ */ o("input", { placeholder: d(r === "devices" ? "editor.search_device" : "editor.search_entity"), value: n, onInput: (l) => i(l.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Ge, { size: 18 }) })
    ] }),
    r === "entities" && /* @__PURE__ */ o("label", { class: "check", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: s, onChange: (l) => a(l.currentTarget.checked) }),
      " ",
      d("editor.show_all")
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-list", children: r === "devices" ? /* @__PURE__ */ o(se, { children: [
      m.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: Object.keys(e.devices).length ? d("editor.no_devices") : d("editor.loading_devices") }),
      m.map(({ dev: l, fit: f }) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPickDevice && t.onPickDevice(l.id, f[0]), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: l.name || f[0] }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: d("editor.count", { n: f.length }) }),
        /* @__PURE__ */ o("span", { class: "picker-id", children: f.slice(0, 4).map((p) => e.registry[p].en || e.states[p].attributes.friendly_name).join(" · ") })
      ] }, l.id))
    ] }) : /* @__PURE__ */ o(se, { children: [
      A.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: d("editor.nothing_found") }),
      A.map((l) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPick(l), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: e.states[l].attributes.friendly_name || l }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: e.states[l].state + (isNaN(parseFloat(e.states[l].state)) ? "" : $t(e, l)) }),
        /* @__PURE__ */ o("span", { class: "picker-id mono", children: l })
      ] }, l))
    ] }) })
  ] });
}
const Dh = ["cover", "width", "height"], Bh = [[2, 2], [3, 3], [4, 3], [6, 3], [3, 6], [6, 6], [12, 3]];
function Th(t) {
  const e = te(), [n, i] = x(t.card), [s, a] = x(null), r = tn[n.type], c = (m) => i({ ...n, ...m }), h = (m, l) => c({ items: n.items.map((f, p) => p === m ? { ...f, ...l } : f) }), A = (m, l) => {
    const f = m + l;
    if (f < 0 || f >= n.items.length) return;
    const p = n.items.slice();
    p[m] = n.items[f], p[f] = n.items[m], c({ items: p });
  }, u = Object.keys(An);
  return /* @__PURE__ */ o(tt, { title: d("editor.card_title", { type: gt(n.type) }), onClose: t.onClose, children: [
    /* @__PURE__ */ o("label", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.name") }),
      /* @__PURE__ */ o("input", { value: n.title, placeholder: gt(n.type), onInput: (m) => c({ title: m.currentTarget.value }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.size") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: Bh.map(([m, l]) => /* @__PURE__ */ o("button", { class: n.w === m && n.h === l ? "active" : "", onClick: () => c({ w: m, h: l }), children: [
        m,
        "×",
        l
      ] }, m + "x" + l)) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.color") }),
      /* @__PURE__ */ o("div", { class: "swatches", children: [
        /* @__PURE__ */ o("button", { class: "swatch swatch-auto" + (n.color ? "" : " active"), onClick: () => c({ color: void 0 }), title: d("editor.color_auto"), children: "A" }),
        Object.keys(ht).map((m) => /* @__PURE__ */ o("button", { class: "swatch" + (n.color === m ? " active" : ""), style: { background: ht[m] }, onClick: () => c({ color: m }) }, m))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.icon") }),
      /* @__PURE__ */ o("div", { class: "icon-grid", children: u.map((m) => {
        const l = An[m];
        return /* @__PURE__ */ o("button", { class: n.icon === m ? "active" : "", onClick: () => c({ icon: m }), children: /* @__PURE__ */ o(l, { size: 18 }) }, m);
      }) })
    ] }),
    n.type === "cameras" && /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.camera_picture") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: Dh.map((m) => /* @__PURE__ */ o("button", { class: (n.fit || "cover") === m ? "active" : "", onClick: () => c({ fit: m }), children: d("editor.fit." + m) }, m)) })
    ] }),
    n.type !== "cameras" && n.type !== "scenes" && /* @__PURE__ */ o("label", { class: "check check-row", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: !!n.chip, onChange: (m) => c({ chip: m.currentTarget.checked }) }),
      n.type === "weather" ? d("editor.weather_on_photo") : d("editor.chip_on_photo")
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.items", { n: n.items.length, hint: rs(n.type).toLowerCase() }) }),
      s === null ? /* @__PURE__ */ o("div", { class: "items", children: [
        n.items.map((m, l) => {
          const f = Je(m.icon || Io(m.entity, e.states[m.entity] && e.states[m.entity].attributes.device_class));
          return /* @__PURE__ */ o("div", { class: "item-block", children: [
            /* @__PURE__ */ o("div", { class: "item-row", children: [
              /* @__PURE__ */ o("button", { class: "item-icon", title: d("editor.change_icon"), onClick: () => {
                const p = u.indexOf(m.icon || "");
                h(l, { icon: u[(p + 1) % u.length] });
              }, children: /* @__PURE__ */ o(f, { size: 18 }) }),
              /* @__PURE__ */ o("div", { class: "item-main", children: [
                /* @__PURE__ */ o("input", { value: m.name || "", placeholder: m.device ? e.devices[m.device] ? e.devices[m.device].name : d("editor.device") : be(e, { entity: m.entity }), onInput: (p) => h(l, { name: p.currentTarget.value || void 0 }) }),
                m.device ? /* @__PURE__ */ o("span", { class: "mono", children: d("editor.device") }) : /* @__PURE__ */ o("span", { class: "mono", children: [
                  m.entity,
                  !We(e, m.entity) && /* @__PURE__ */ o("em", { class: "na-tag", children: [
                    " · ",
                    d("editor.unavailable")
                  ] })
                ] }),
                n.type === "climate" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "hum" }), children: [
                  /* @__PURE__ */ o(Ue, { size: 12 }),
                  m.hum ? m.hum : d("editor.add_humidity")
                ] }),
                n.type === "ac" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "temp" }), children: [
                  /* @__PURE__ */ o(cr, { size: 12 }),
                  m.temp ? m.temp : d("editor.room_sensor")
                ] })
              ] }),
              /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => A(l, -1), children: /* @__PURE__ */ o(Qs, { size: 16 }) }),
              /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => A(l, 1), children: /* @__PURE__ */ o(Hs, { size: 16 }) }),
              /* @__PURE__ */ o("button", { class: "icon-btn danger", onClick: () => c({ items: n.items.filter((p, _) => _ !== l) }), children: /* @__PURE__ */ o(_t, { size: 16 }) })
            ] }),
            m.device && /* @__PURE__ */ o(Oh, { it: m, type: n.type, onChange: (p) => h(l, p) })
          ] }, m.entity + l);
        }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => a("add"), children: [
          /* @__PURE__ */ o(Ze, { size: 16 }),
          /* @__PURE__ */ o("span", { children: n.type === "weather" && !n.items.length ? d("editor.pick_forecast") : d("editor.add_device") })
        ] })
      ] }) : /* @__PURE__ */ o(
        Ih,
        {
          domains: s === "add" ? r.domains : ["sensor"],
          match: s !== "add" ? (m) => m.attributes.device_class === (s.field === "hum" ? "humidity" : "temperature") : (m) => Do(n.type, m),
          exclude: n.items.map((m) => m.entity),
          cardType: s === "add" ? n.type : void 0,
          excludeDevices: n.items.map((m) => m.device || "").filter(Boolean),
          onPickDevice: (m, l) => {
            c({ items: n.items.concat({ entity: l, device: m }) }), a(null);
          },
          onClose: () => a(null),
          onPick: (m) => {
            s === "add" ? c({ items: n.items.concat({ entity: m }) }) : h(s.index, { [s.field]: m }), a(null);
          }
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      t.onDelete ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: t.onDelete, children: [
        /* @__PURE__ */ o(_t, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("common.delete") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: () => t.onSave(n), children: d("common.save") })
    ] })
  ] });
}
function Oh(t) {
  const e = te(), n = t.it, i = n.skip || [], s = n.names || {}, a = Cr(e, t.type, { ...n, skip: [], names: {} });
  if (!a.length) return /* @__PURE__ */ o("span", { class: "mono", children: d("editor.no_matching") });
  const r = a.map((u) => u.entity), c = (u, m) => {
    const l = r.slice(), f = l[u];
    l[u] = l[u + m], l[u + m] = f, t.onChange({ order: l });
  }, h = (u, m) => {
    const l = { ...s };
    m ? l[u] = m : delete l[u], t.onChange({ names: Object.keys(l).length ? l : void 0 });
  }, A = (u, m) => {
    const l = m ? i.filter((f) => f !== u) : i.concat(u);
    t.onChange({ skip: l.length ? l : void 0 });
  };
  return /* @__PURE__ */ o("div", { class: "device-parts", children: a.map((u, m) => {
    const l = i.indexOf(u.entity) === -1;
    return /* @__PURE__ */ o("div", { class: "device-part" + (l ? "" : " off"), children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: l, title: d(l ? "editor.part_hide" : "editor.part_show"), onChange: (f) => A(u.entity, f.currentTarget.checked) }),
      /* @__PURE__ */ o("input", { class: "part-name", value: s[u.entity] || "", placeholder: u.name || u.entity, onInput: (f) => h(u.entity, f.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: m === 0, onClick: () => c(m, -1), children: /* @__PURE__ */ o(Qs, { size: 14 }) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: m === a.length - 1, onClick: () => c(m, 1), children: /* @__PURE__ */ o(Hs, { size: 14 }) })
    ] }, u.entity);
  }) });
}
function Ph({ thumb: t, sheet: e }) {
  const [n, i] = x({ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }), [s, a] = x(t ? [t] : []);
  wo(() => {
    if (!e) return;
    const c = () => i({ x: e.offsetLeft, y: e.offsetTop, w: window.innerWidth, h: window.innerHeight });
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, [e]), H(() => {
    t && s[s.length - 1] !== t && a(s.slice(-1).concat(t));
  }, [t]);
  const r = {
    left: -n.x - n.w * 0.05,
    top: -n.y - n.h * 0.05,
    width: n.w * 1.1,
    height: n.h * 1.1
  };
  return /* @__PURE__ */ o("div", { class: "sheet-glass", children: [
    s.map((c, h) => /* @__PURE__ */ o("div", { class: "glass-layer" + (h > 0 ? " fresh" : ""), style: { ...r, backgroundImage: "url(" + c + ")" } }, c.length + ":" + c.slice(-32))),
    /* @__PURE__ */ o("div", { class: "sheet-tint" })
  ] });
}
function Lh({ card: t, tone: e, onCamera: n, onClose: i }) {
  const s = te(), a = re(null), [r, c] = x(null);
  wo(() => {
    c(a.current);
  }, []);
  const h = ["switches", "scenes", "cameras", "ac", "speakers", "tv", "weather"].indexOf(t.type) !== -1;
  return /* @__PURE__ */ o("div", { class: "sheet-layer", onClick: i, children: /* @__PURE__ */ o("div", { ref: a, class: "sheet sheet-" + t.type + (h ? " sheet-wide" : "") + (t.color ? " tint-" + t.color : ""), onClick: (A) => A.stopPropagation(), children: [
    /* @__PURE__ */ o(Ph, { thumb: e ? e.thumb : void 0, sheet: r }),
    /* @__PURE__ */ o("div", { class: "sheet-inner", children: [
      /* @__PURE__ */ o("div", { class: "panel-head", children: [
        /* @__PURE__ */ o("h2", { children: Bo(s, t) }),
        /* @__PURE__ */ o("div", { class: "sheet-actions", children: [
          /* @__PURE__ */ o(Sr, { card: t }),
          /* @__PURE__ */ o("button", { class: "sheet-close", onClick: i, children: /* @__PURE__ */ o(Ge, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ o(Er, { card: t, size: { w: h ? 600 : 420, h: 600 }, onCamera: n })
    ] })
  ] }) });
}
const Or = 36e5, Ut = 24 * Or, Pr = { "24h": Ut, "7d": 7 * Ut, "30d": 30 * Ut }, Hh = ["binary_sensor", "switch", "light", "input_boolean", "fan", "lock", "cover", "media_player"], jh = ["on", "open", "unlocked", "playing", "home"];
function Lr(t) {
  if (!t) return "line";
  if (Hh.indexOf(t.entity_id.split(".")[0]) !== -1) return "timeline";
  const e = t.attributes.state_class;
  return e === "total" || e === "total_increasing" ? "bars" : isNaN(parseFloat(t.state)) ? "timeline" : "line";
}
function mn(t) {
  return new Date(t).toISOString();
}
function Si(t) {
  return typeof t == "number" ? t : Date.parse(t);
}
function qn(t, e, n, i) {
  return t.call({
    type: "history/history_during_period",
    start_time: mn(n),
    end_time: mn(i),
    entity_ids: [e],
    minimal_response: !0,
    no_attributes: !0
  }).then((s) => (s[e] || []).map((a) => ({ s: a.s, t: (a.lu || a.lc || 0) * 1e3 || n })));
}
function zi(t, e, n, i, s, a) {
  return t.call({
    type: "recorder/statistics_during_period",
    start_time: mn(n),
    end_time: mn(i),
    statistic_ids: [e],
    period: s,
    types: a
  }).then((r) => r[e] || []);
}
function Ii(t) {
  const e = [];
  return t.forEach((n) => {
    const i = parseFloat(n.s);
    isNaN(i) || e.push({ t: n.t, v: i });
  }), e;
}
function Qh(t, e, n) {
  const i = e.entity_id, s = Lr(e), a = Date.now(), r = a - Pr[n], c = { kind: s, from: r, to: a, points: [], segments: [], bucketMs: 0 };
  if (s === "timeline")
    return qn(t, i, r, a).then((h) => {
      const A = h.map((u, m) => ({
        from: Math.max(r, u.t),
        to: m + 1 < h.length ? h[m + 1].t : a,
        on: u.s === "unavailable" || u.s === "unknown" ? null : jh.indexOf(u.s) !== -1
      }));
      return { ...c, segments: A };
    });
  if (s === "bars") {
    const h = n === "24h" ? "hour" : "day";
    return zi(t, i, r, a, h, ["change"]).then((A) => ({
      ...c,
      bucketMs: h === "hour" ? Or : Ut,
      points: A.filter((u) => u.change != null).map((u) => ({ t: Si(u.start), v: u.change }))
    }));
  }
  return n === "24h" ? qn(t, i, r, a).then((h) => ({ ...c, points: Ii(h) })) : zi(t, i, r, a, n === "7d" ? "hour" : "day", ["mean", "min", "max"]).then((h) => {
    const A = h.filter((u) => u.mean != null).map((u) => ({ t: Si(u.start), v: u.mean, min: u.min == null ? void 0 : u.min, max: u.max == null ? void 0 : u.max }));
    return A.length ? { ...c, points: A } : qn(t, i, r, a).then((u) => ({ ...c, points: Ii(u) }));
  });
}
function Nh(t) {
  const e = t.points;
  if (t.kind === "timeline") {
    let r = 0, c = 0, h = null;
    return t.segments.forEach((A) => {
      A.on && (c += A.to - A.from, h === !1 && r++), A.on !== null && (h = A.on);
    }), { onCount: r, onMs: c };
  }
  if (!e.length) return {};
  if (t.kind === "bars") {
    let r = 0, c = e[0];
    return e.forEach((h) => {
      r += h.v, h.v > c.v && (c = h);
    }), { total: r, peak: c, avg: r / e.length };
  }
  let n = e[0], i = e[0];
  e.forEach((r) => {
    (r.min != null ? r.min : r.v) < (n.min != null ? n.min : n.v) && (n = r), (r.max != null ? r.max : r.v) > (i.max != null ? i.max : i.v) && (i = r);
  });
  let s = 0, a = 0;
  return e.forEach((r, c) => {
    const h = c + 1 < e.length ? e[c + 1].t : t.to, A = Math.max(0, h - Math.max(r.t, t.from));
    s += r.v * A, a += A;
  }), {
    min: { t: n.t, v: n.min != null ? n.min : n.v },
    max: { t: i.t, v: i.max != null ? i.max : i.v },
    avg: a ? s / a : void 0
  };
}
function Fh(t, e) {
  const n = t.registry[e], i = n && n.di ? t.devices[n.di] : void 0;
  return i ? Promise.resolve(i.entities.filter((s) => s !== e && t.registry[s].ec == null)) : Promise.resolve([]);
}
const Rh = ["24h", "7d", "30d"], qh = ["switch", "light", "fan", "input_boolean"];
function Wn(t, e) {
  const n = t.states[e];
  return String(n && n.attributes.friendly_name || e);
}
function Wh(t) {
  if (t.length < 2) return t;
  const e = t.map((i) => i.split(" "));
  let n = 0;
  for (; e.every((i) => i.length > n + 1 && i[n] === e[0][n]); ) n++;
  return e.map((i) => i.slice(n).join(" "));
}
function Vh(t) {
  const e = Math.round(t / 6e4), n = Math.floor(e / 1440), i = Math.floor(e % 1440 / 60), s = e % 60;
  return [n ? d("duration.days", { n }) : "", i || n ? d("duration.hours", { n: i }) : "", n ? "" : d("duration.minutes", { n: s })].filter(Boolean).join(" ");
}
function Uh({ entity: t }) {
  const e = te(), [n, i] = x(!1);
  H(() => {
    if (!n) return;
    const r = setTimeout(() => i(!1), 4e3);
    return () => clearTimeout(r);
  }, [n]);
  const s = e.states[t] && e.states[t].state === "on", a = () => {
    if (s && !n) {
      i(!0);
      return;
    }
    i(!1), e.toggle(t);
  };
  return /* @__PURE__ */ o("button", { class: "btn " + (n ? "btn-danger" : s ? "btn-ghost" : "btn-accent"), onClick: a, children: [
    /* @__PURE__ */ o(vt, { size: 16 }),
    /* @__PURE__ */ o("span", { children: d(n ? "detail.confirm_off" : s ? "common.turn_off" : "common.turn_on") })
  ] });
}
function pe(t) {
  return /* @__PURE__ */ o("div", { class: "stat", children: [
    /* @__PURE__ */ o("div", { class: "stat-label", children: t.label }),
    /* @__PURE__ */ o("div", { class: "stat-value", children: t.value }),
    t.note && /* @__PURE__ */ o("div", { class: "stat-note", children: t.note })
  ] });
}
function Yh({ series: t, sum: e, unit: n, range: i, current: s }) {
  const a = n ? " " + n : "";
  if (t.kind === "timeline") {
    const r = t.to - t.from;
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(pe, { label: d("stat.now"), value: s }),
      /* @__PURE__ */ o(pe, { label: d("stat.turned_on"), value: String(e.onCount || 0), note: d("stat.times") }),
      /* @__PURE__ */ o(pe, { label: d("stat.on_time"), value: Vh(e.onMs || 0) }),
      /* @__PURE__ */ o(pe, { label: d("stat.on_share"), value: Math.round((e.onMs || 0) / r * 100) + "%" })
    ] });
  }
  if (t.kind === "bars") {
    const r = t.bucketMs >= 864e5 ? d("stat.avg_per_day") : d("stat.avg_per_hour");
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(pe, { label: d("stat.total"), value: e.total != null ? he(e.total) + a : "—" }),
      /* @__PURE__ */ o(pe, { label: r, value: e.avg != null ? he(e.avg) + a : "—" }),
      /* @__PURE__ */ o(
        pe,
        {
          label: d("stat.peak"),
          value: e.peak ? he(e.peak.v) + a : "—",
          note: e.peak ? t.bucketMs >= 864e5 ? Ct(e.peak.t) : Ye(e.peak.t) : void 0
        }
      ),
      /* @__PURE__ */ o(pe, { label: d("stat.counter_now"), value: s })
    ] });
  }
  return /* @__PURE__ */ o("div", { class: "stats", children: [
    /* @__PURE__ */ o(pe, { label: d("stat.now"), value: s }),
    /* @__PURE__ */ o(pe, { label: d("stat.min"), value: e.min ? he(e.min.v) + a : "—", note: e.min ? Be(e.min.t, i) : void 0 }),
    /* @__PURE__ */ o(pe, { label: d("stat.max"), value: e.max ? he(e.max.v) + a : "—", note: e.max ? Be(e.max.t, i) : void 0 }),
    /* @__PURE__ */ o(pe, { label: d("stat.avg"), value: e.avg != null ? he(e.avg) + a : "—" })
  ] });
}
function Zh({ series: t, unit: e, range: n }) {
  const i = t.kind === "timeline" ? t.segments.slice().reverse().slice(0, 60).map((a) => [Be(a.from, n), a.on ? d("switch.on") : a.on === null ? d("chart.no_connection") : d("switch.off"), "—"]) : t.points.slice().reverse().slice(0, 60).map((a) => [
    t.kind === "bars" && t.bucketMs >= 864e5 ? Ct(a.t) : Be(a.t, n),
    he(a.v) + (e ? " " + e : ""),
    a.min != null && a.max != null ? he(a.min) + " … " + he(a.max) : "—"
  ]), s = t.kind === "line" && t.points.some((a) => a.min != null);
  return /* @__PURE__ */ o("div", { class: "table-wrap", children: /* @__PURE__ */ o("table", { class: "diag", children: /* @__PURE__ */ o("tbody", { children: i.map((a, r) => /* @__PURE__ */ o("tr", { children: [
    /* @__PURE__ */ o("td", { children: a[0] }),
    /* @__PURE__ */ o("td", { class: "strong", children: a[1] }),
    s && /* @__PURE__ */ o("td", { class: "muted", children: a[2] })
  ] }, r)) }) }) });
}
function Gh(t) {
  const e = te(), [n, i] = x(t.entities[0]), [s, a] = x("24h"), [r, c] = x(null), [h, A] = x(""), [u, m] = x([]), [l, f] = x(!1), p = re(null), _ = To(p).w || 600, w = e.states[n], k = $t(e, n).trim(), b = Lr(w);
  H(() => {
    Fh(e, t.entities[0]).then((g) => m(g.filter((D) => !!e.states[D])), () => {
    });
  }, [t.entities[0]]), H(() => {
    if (!w) return;
    let g = !0;
    return c(null), A(""), Qh(e, w, s).then(
      (D) => {
        g && c(D);
      },
      (D) => {
        g && A(D.message);
      }
    ), () => {
      g = !1;
    };
  }, [n, s, e.status]);
  const y = t.entities.concat(u.filter((g) => t.entities.indexOf(g) === -1)).filter((g) => g === n || We(e, g)), I = Wh(y.map((g) => Wn(e, g))), z = !w || ft(w.state) ? d("sensor.no_data") : b === "timeline" ? w.state === "on" ? d("switch.on") : w.state === "off" ? d("switch.off") : w.state : he(parseFloat(w.state)) + (k ? " " + k : ""), M = n.split(".")[0];
  return M === "weather" ? /* @__PURE__ */ o(tt, { title: Wn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: p, children: /* @__PURE__ */ o(_r, { card: { id: "detail", type: "weather", title: "", x: 0, y: 0, w: 6, h: 6, items: [{ entity: n }] }, size: { w: _, h: 560 } }) }) }) : /* @__PURE__ */ o(tt, { title: Wn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: p, children: [
    /* @__PURE__ */ o("div", { class: "detail-hero", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ o("div", { class: "hero-value", children: z }),
        w && /* @__PURE__ */ o("div", { class: "muted small", children: d("detail.updated", { when: Be(Date.parse(w.last_changed || "") || Date.now(), "7d") }) })
      ] }),
      qh.indexOf(M) !== -1 && w && /* @__PURE__ */ o(Uh, { entity: n }, n)
    ] }),
    y.length > 1 && /* @__PURE__ */ o("div", { class: "chips", children: y.map((g, D) => {
      const L = e.states[g], O = !L || ft(L.state) ? "—" : isNaN(parseFloat(L.state)) ? L.state === "on" ? d("chip.state_on") : L.state === "off" ? d("chip.state_off") : L.state : he(parseFloat(L.state)) + $t(e, g);
      return /* @__PURE__ */ o("button", { class: "chip" + (g === n ? " active" : ""), onClick: () => i(g), children: [
        /* @__PURE__ */ o("span", { children: I[D] }),
        /* @__PURE__ */ o("b", { children: O })
      ] }, g);
    }) }),
    /* @__PURE__ */ o("div", { class: "detail-tools", children: [
      /* @__PURE__ */ o("div", { class: "seg", children: Rh.map((g) => /* @__PURE__ */ o("button", { class: g === s ? "active" : "", onClick: () => a(g), children: d("range." + g) }, g)) }),
      /* @__PURE__ */ o("button", { class: "chip-btn" + (l ? " on" : ""), onClick: () => f(!l), children: [
        /* @__PURE__ */ o($l, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("detail.table") })
      ] })
    ] }),
    h && /* @__PURE__ */ o("div", { class: "chart-empty c-red", children: d("detail.load_error", { error: h }) }),
    !h && !r && /* @__PURE__ */ o("div", { class: "chart-empty", children: d("common.loading") }),
    r && (l ? /* @__PURE__ */ o(Zh, { series: r, unit: k, range: s }) : /* @__PURE__ */ o(Ad, { series: r, unit: k, range: s, width: _ })),
    r && /* @__PURE__ */ o(Yh, { series: r, sum: Nh(r), unit: k, range: s, current: z }),
    r && r.kind !== "timeline" && s !== "24h" && /* @__PURE__ */ o("div", { class: "muted small detail-foot", children: [
      r.kind === "bars" ? d("detail.foot_bars") : d(s === "7d" ? "detail.foot_hourly" : "detail.foot_daily"),
      " · ",
      d("detail.days", { n: Math.round(Pr[s] / 864e5) })
    ] })
  ] }) });
}
function Hr(t, e, n) {
  const i = (s) => s.split(",").map((a) => t + a).join(",");
  return i(".accent-text") + "{color:" + e + "}" + i(".light.on .light-icon") + "{background:" + e + "}" + i(".light.on") + "{border-color:" + e + ";background:" + n + "}" + i(".seg .active") + "{background:" + n + ";color:" + e + "}" + i(".room-temp sup") + "{color:" + e + "}";
}
function Jh(t) {
  const e = parseInt(t.slice(1), 16);
  return "rgba(" + (e >> 16) + "," + (e >> 8 & 255) + "," + (e & 255) + ",0.2)";
}
const Xh = Object.keys(ht).map((t) => Hr(".tint-" + t + " ", ht[t], Jh(ht[t]))).join("");
function Kh() {
  const t = nt(), e = hc(), n = es(), { settings: i, layout: s, sync: a, homes: r, active: c } = t.state;
  H(() => t.start(), []);
  const h = vo(() => new Co("", () => Promise.resolve("")), []), A = t.card ? t.card.client : t.haClient || h, [u, m] = x(""), l = (T) => {
    const Q = r.findIndex((ee) => ee.id === c), X = r[(Q + T + r.length) % r.length];
    !X || X.id === c || (m(T > 0 ? "next" : "prev"), V(null), t.setActive(X.id));
  }, f = (T) => {
    m(T > 0 ? "next" : "prev"), V(null), t.step(T);
  }, p = t.photoUrls, _ = p.length, [w, k] = x(0), b = _ ? p[w % _] : "";
  H(() => {
    const T = t.frameClient;
    if (!T || !b || /^(data|blob):/.test(b)) return;
    const Q = b.replace(/^https?:\/\/[^/]+/, "");
    At(T, { photo: decodeURIComponent(Q.split("?")[0].split("/").pop() || ""), photo_url: Q });
  }, [b, t.frameClient]), H(() => {
    t.frameClient && At(t.frameClient, { screen: c + "/" + t.state.screen });
  }, [c, t.state.screen, t.frameClient]);
  const [y, I] = x(t.ui.controls), [z, M] = x(t.ui.editing);
  H(() => {
    t.ui.controls = y, t.ui.editing = z;
  }, [y, z]);
  const [g, D] = x(!1), [L, O] = x(""), P = re(0);
  H(() => t.onCommand((T) => {
    if (T.command === "next_photo") k((Q) => Q + 1);
    else if (T.command === "show_panel") I(!0);
    else if (T.command === "show_photos")
      I(!1), V(null), O("");
    else if (T.command === "reload") location.reload();
    else if (T.command === "update_apk") jc();
    else if (T.command === "show_screen" && T.screen) {
      const Q = T.screen.split("/");
      t.setActive(Q[0], Q[1]), I(!0);
    } else if (T.command === "show_camera" && T.entity) {
      const Q = A.cameraStreamUrl(T.entity);
      if (!Q) return;
      O(Q), clearTimeout(P.current), P.current = window.setTimeout(() => O(""), (T.duration || 30) * 1e3);
    }
  }), [A]);
  const [F, V] = x(null), [B, U] = x(null), [$, E] = x(!1), [N, G] = x(null), [ne, W] = x(!0), [v, j] = x(""), R = el(v || void 0), Y = F && s.cards.filter((T) => T.id === F)[0] || null, ce = a === "local" && !t.haClient;
  H(() => {
    ce && D(!0);
  }, [ce]);
  const de = t.screenOn || !!L;
  H(() => Vc(de, t.brightness), [de, t.brightness]), H(() => Uc(() => t.wakeScreen()), []), H(() => {
    if (_ < 2 || !de || y) return;
    const T = setInterval(() => k((Q) => (Q + 1) % _), i.slideIntervalMs);
    return () => clearInterval(T);
  }, [_, i.slideIntervalMs, de, w, y]), H(() => {
    if (!y) {
      Bn(!0);
      return;
    }
    const T = ve.current;
    let Q = 0;
    const X = () => {
      clearTimeout(Q), Q = window.setTimeout(() => Bn(!1), 800);
    }, ee = () => {
      clearTimeout(Q), Bn(!0);
    };
    return X(), T && (T.addEventListener("touchstart", ee), T.addEventListener("mousedown", ee), T.addEventListener("touchend", X), T.addEventListener("mouseup", X)), () => {
      clearTimeout(Q), T && (T.removeEventListener("touchstart", ee), T.removeEventListener("mousedown", ee), T.removeEventListener("touchend", X), T.removeEventListener("mouseup", X));
    };
  }, [y]);
  const [oe, me] = x(null), _e = Yr((T) => {
    _ < 2 || (k((Q) => (Q % _ + T + _) % _), me((Q) => ({ dir: T, key: Q ? Q.key + 1 : 1 })));
  }, [_]);
  H(() => {
    if (!oe) return;
    const T = setTimeout(() => me(null), 700);
    return () => clearTimeout(T);
  }, [oe]), H(() => {
    let T = window.setTimeout(() => W(!1), 8e3);
    const Q = ve.current, X = () => {
      t.ui.controls || (W(!0), clearTimeout(T), T = window.setTimeout(() => W(!1), 5e3));
    };
    return Q && (Q.addEventListener("touchstart", X), Q.addEventListener("mousedown", X)), () => {
      clearTimeout(T), Q && (Q.removeEventListener("touchstart", X), Q.removeEventListener("mousedown", X));
    };
  }, []);
  const ye = g || !!L || !!B || $ || !!N, Oe = ye || !!Y, ve = re(null), C = re(null), q = re(null), xe = re(null);
  H(() => {
    const T = ve.current;
    if (!T) return;
    const Q = () => {
      T.scrollTop = 0, T.scrollLeft = 0;
    };
    return T.addEventListener("scroll", Q), () => T.removeEventListener("scroll", Q);
  }, []);
  const [fe, ot] = x(!1);
  il({ root: ve, controls: C, ambient: q, soft: xe }, y, I, !Oe && !fe, () => ot(!0), _e), H(() => {
    if (Oe || fe) return;
    const T = (Q) => {
      const X = Q.target;
      if (X && /^(INPUT|TEXTAREA|SELECT)$/.test(X.tagName)) return;
      const ee = Q.key || "";
      if (!y && (ee === "ArrowLeft" || ee === "Left")) _e(-1);
      else if (!y && (ee === "ArrowRight" || ee === "Right")) _e(1);
      else if (!y && (ee === "ArrowUp" || ee === "Up")) I(!0);
      else if (y && !z && (ee === "ArrowDown" || ee === "Down" || ee === "Escape" || ee === "Esc")) I(!1);
      else return;
      Q.preventDefault();
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [Oe, fe, y, z, _e]);
  const Oo = (y || !!Y) && !ye && !z;
  H(() => {
    if (!Oo || !i.idleSec || so) return;
    let T = 0;
    const Q = () => {
      clearTimeout(T), T = window.setTimeout(() => {
        I(!1), V(null), t.goStart();
      }, i.idleSec * 1e3);
    }, X = ["touchstart", "mousedown", "keydown"];
    return X.forEach((ee) => document.addEventListener(ee, Q)), Q(), () => {
      clearTimeout(T), X.forEach((ee) => document.removeEventListener(ee, Q));
    };
  }, [Oo, i.idleSec]);
  const jr = (T) => {
    const Q = s.cards.some((St) => St.id === T.id), X = bt(T), ee = Q ? s.cards.map((St) => St.id === T.id ? X : St) : s.cards.concat(X);
    t.saveLayout({ ...s, cards: je(ee, X) }), U(null);
  };
  return /* @__PURE__ */ o(ns.Provider, { value: A, children: /* @__PURE__ */ o(os.Provider, { value: G, children: /* @__PURE__ */ o("div", { class: "root q-" + n, children: [
    /* @__PURE__ */ o("style", { children: Xh + (R ? Hr("", R.accent, R.accentSoft) : "") }),
    /* @__PURE__ */ o("div", { class: "app", ref: ve, lang: e, children: [
      /* @__PURE__ */ o(cd, { urls: p, index: w % Math.max(_, 1), tone: R, soft: y, softRef: xe, onShow: j }),
      /* @__PURE__ */ o($n.Provider, { value: !y, children: /* @__PURE__ */ o(
        Vd,
        {
          visible: !y,
          innerRef: q,
          onSheet: (T) => V(T.id),
          onConnection: () => D(!0),
          showHint: ne && !Y,
          onHome: () => {
            W(!1), I(!0);
          },
          photoThumb: R ? R.thumb : void 0,
          customizing: fe,
          onDone: () => ot(!1)
        }
      ) }),
      oe && /* @__PURE__ */ o("div", { class: "photo-step " + (oe.dir > 0 ? "next" : "prev"), children: oe.dir > 0 ? /* @__PURE__ */ o(Zs, { size: 40, strokeWidth: 1.6 }) : /* @__PURE__ */ o(Us, { size: 40, strokeWidth: 1.6 }) }, oe.key),
      /* @__PURE__ */ o($n.Provider, { value: y, children: /* @__PURE__ */ o(
        xh,
        {
          innerRef: C,
          visible: y,
          editing: z,
          onEditing: M,
          onPhotos: () => I(!1),
          onSettings: () => D(!0),
          onCamera: O,
          onEditCard: (T) => U({ card: T, isNew: !1 }),
          homes: r,
          active: c,
          slide: u,
          onSwitchHome: l,
          onStep: f,
          onAddCard: () => E(!0)
        }
      ) })
    ] }),
    Y && /* @__PURE__ */ o(Lh, { card: Y, tone: R, onCamera: O, onClose: () => V(null) }),
    /* @__PURE__ */ o(
      "div",
      {
        class: "screen-dim" + (de ? "" : " asleep"),
        style: { opacity: Yc(de, t.brightness) },
        onClick: de ? void 0 : () => t.wakeScreen()
      }
    ),
    L && /* @__PURE__ */ o(kh, { url: L, onClose: () => O("") }),
    g && /* @__PURE__ */ o(
      Eh,
      {
        onClose: () => D(!1)
      }
    ),
    $ && /* @__PURE__ */ o(zh, { onClose: () => E(!1), onPick: (T) => {
      E(!1), U({ card: T, isNew: !0 });
    } }),
    B && /* @__PURE__ */ o(
      Th,
      {
        card: B.card,
        onSave: jr,
        onDelete: B.isNew ? void 0 : () => {
          t.saveLayout({ ...s, cards: je(s.cards.filter((T) => T.id !== B.card.id)) }), U(null);
        },
        onClose: () => U(null)
      }
    ),
    N && /* @__PURE__ */ o(Gh, { entities: N, onClose: () => G(null) }, N.join(","))
  ] }) }) });
}
class $h extends Co {
  constructor() {
    super("", () => Promise.resolve("")), this.hass = null;
  }
  // HA присылает новый hass при каждом изменении любого состояния — просто перерисовываемся.
  setHass(e) {
    const n = !this.hass;
    this.hass = e, yn(e.language), e.states !== this.states && (this.states = e.states, this.loaded = !0, this.status !== "connected" ? this.setStatus("connected") : this.emit()), n && this.loadRegistry();
  }
  get isAdmin() {
    return !!(this.hass && this.hass.user && this.hass.user.is_admin);
  }
  fetch(e, n = {}) {
    const i = this.hass;
    if (i && i.fetchWithAuth) return i.fetchWithAuth(e, n);
    const s = { ...n.headers || {}, Authorization: "Bearer " + this.accessToken };
    return fetch(e, { ...n, headers: s });
  }
  get accessToken() {
    return this.hass && this.hass.auth && this.hass.auth.data && this.hass.auth.data.access_token || "";
  }
  connect() {
  }
  disconnect() {
  }
  call(e) {
    return this.hass ? this.hass.callWS(e) : Promise.reject(new Error("not connected"));
  }
  callService(e, n, i) {
    return this.hass ? (this.hass.callService(e.split(".")[0], n, i, { entity_id: e }).catch(() => {
    }), !0) : !1;
  }
  subscribeMessage(e, n) {
    if (!this.hass) return () => {
    };
    let i = null, s = !1;
    return this.hass.connection.subscribeMessage(n, e).then((a) => {
      s ? a().catch(() => {
      }) : i = a;
    }, () => {
    }), () => {
      s = !0, i && i().catch(() => {
      });
    };
  }
  // Тот же origin, что у HA: поток камеры по access_token камеры, картинки — относительными путями.
  cameraStreamUrl(e) {
    const n = this.states[e], i = n && n.attributes.access_token;
    return i ? "/api/camera_proxy_stream/" + e + "?token=" + i : "";
  }
  pictureUrl(e) {
    return e || "";
  }
}
function eA(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Vn, Di;
function tA() {
  return Di || (Di = 1, Vn = {
    webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
    mp4: "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
  }), Vn;
}
var Un, Bi;
function nA() {
  if (Bi) return Un;
  Bi = 1;
  const { webm: t, mp4: e } = tA(), n = () => typeof navigator < "u" && parseFloat(
    ("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(
      navigator.userAgent
    ) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")
  ) < 10 && !window.MSStream, i = () => "wakeLock" in navigator;
  class s {
    constructor() {
      if (this.enabled = !1, i()) {
        this._wakeLock = null;
        const r = () => {
          this._wakeLock !== null && document.visibilityState === "visible" && this.enable();
        };
        document.addEventListener("visibilitychange", r), document.addEventListener("fullscreenchange", r);
      } else n() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", t), this._addSourceToVideo(this.noSleepVideo, "mp4", e), this.noSleepVideo.addEventListener("loadedmetadata", () => {
        this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () => {
          this.noSleepVideo.currentTime > 0.5 && (this.noSleepVideo.currentTime = Math.random());
        });
      }));
    }
    _addSourceToVideo(r, c, h) {
      var A = document.createElement("source");
      A.src = h, A.type = `video/${c}`, r.appendChild(A);
    }
    get isEnabled() {
      return this.enabled;
    }
    enable() {
      return i() ? navigator.wakeLock.request("screen").then((r) => {
        this._wakeLock = r, this.enabled = !0, console.log("Wake Lock active."), this._wakeLock.addEventListener("release", () => {
          console.log("Wake Lock released.");
        });
      }).catch((r) => {
        throw this.enabled = !1, console.error(`${r.name}, ${r.message}`), r;
      }) : n() ? (this.disable(), console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `), this.noSleepTimer = window.setInterval(() => {
        document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0));
      }, 15e3), this.enabled = !0, Promise.resolve()) : this.noSleepVideo.play().then((c) => (this.enabled = !0, c)).catch((c) => {
        throw this.enabled = !1, c;
      });
    }
    disable() {
      i() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : n() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = !1;
    }
  }
  return Un = s, Un;
}
var oA = nA();
const iA = /* @__PURE__ */ eA(oA);
let po = null;
const Ti = new iA();
function Yn() {
  const t = navigator.wakeLock;
  return !t || document.visibilityState !== "visible" ? Promise.resolve(!1) : t.request("screen").then(
    (e) => (po = e, e.addEventListener("release", () => {
      po = null;
    }), !0),
    () => !1
  );
}
let Oi = !1;
function sA() {
  if (Oi || (Oi = !0, /SmartFrame\//.test(navigator.userAgent))) return;
  Yn(), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && !po && Yn();
  });
  const t = () => {
    document.removeEventListener("touchend", t), document.removeEventListener("click", t), Yn().then((e) => {
      !e && !Ti.isEnabled && Ti.enable().catch(() => {
      });
    });
  };
  document.addEventListener("touchend", t), document.addEventListener("click", t);
}
function aA(t) {
  const e = re(null), [n, i] = x(900);
  H(() => {
    const c = () => {
      e.current && i(e.current.clientWidth);
    };
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, []);
  const { w: s, h: a } = t.disp, r = Math.min(1, n / s, window.innerHeight * 0.72 / a);
  return /* @__PURE__ */ o("div", { class: "admin-screen-wrap", ref: e, children: /* @__PURE__ */ o("div", { class: "admin-iframe-box", style: { width: Math.round(s * r) + "px", height: Math.round(a * r) + "px" }, children: /* @__PURE__ */ o(
    "iframe",
    {
      src: "/photoframe/index.html?preview=1",
      title: "preview",
      style: { width: s + "px", height: a + "px", transform: "scale(" + r + ")" }
    },
    s + "x" + a
  ) }) });
}
function rA(t, e) {
  const n = t.displays || {}, i = n[e];
  if (i) return i;
  const s = n[e === "portrait" ? "landscape" : "portrait"];
  return s ? { w: s.h, h: s.w } : e === "portrait" ? { w: 800, h: 1280 } : { w: 1280, h: 800 };
}
function cA(t) {
  const [e, n] = x(null), [i, s] = x(""), [a, r] = x(""), [c, h] = x("landscape"), [A, u] = x({ landscape: null, portrait: null }), [m, l] = x(null), [f, p] = x("clock"), [_, w] = x(""), [k, b] = x("photo"), y = () => {
    s(""), t.hass.callWS({ type: "photoframe/frames" }).then((v) => {
      n(v.frames), !a && v.frames.length && I(v.frames[0]);
    }, (v) => s(v.message || String(v)));
  };
  H(y, []);
  const I = (v) => {
    r(v.frame_id), u({ landscape: He(v.grid), portrait: He(v.grid_portrait) });
    const j = v.displays || {};
    h(j.landscape || !j.portrait ? "landscape" : "portrait"), w("");
  }, z = e && e.filter((v) => v.frame_id === a)[0], M = m || A[c], g = (v) => {
    u({ ...A, [c]: v }), w("");
  }, D = (v, j) => t.hass.callWS({ type: "photoframe/frame/set_lockscreen", frame_ids: v, patch: j }), L = () => {
    z && (w(d("admin.saving")), D([z.frame_id], { grid: A.landscape, gridPortrait: A.portrait }).then(
      () => {
        w(d(z.online ? "admin.saved_online" : "admin.saved_offline")), y();
      },
      (v) => w(v.message || String(v))
    ));
  }, [O, P] = x(!1), [F, V] = x([]), [B, U] = x("all"), $ = (e || []).filter((v) => v.frame_id !== a), E = () => {
    if (!z || !F.length) return;
    const v = { grid: A.landscape, gridPortrait: A.portrait }, j = B === "all" ? { ...So(z.lockscreen), ...v } : v;
    w(d("admin.saving")), D(F, j).then((R) => {
      w(d("admin.copied", { n: F.length, online: R.online.length })), P(!1), V([]), y();
    }, (R) => w(R.message || String(R)));
  }, N = z ? rA(z, c) : { w: 1280, h: 800 }, G = !!(z && z.displays && z.displays[c]), ne = (v) => {
    if (!M) return;
    const j = { ...M[f], ...v };
    j.ha || delete j.ha, j.va || delete j.va, g({ ...M, [f]: j });
  }, W = M ? M[f] : null;
  return /* @__PURE__ */ o("div", { class: "admin", children: [
    /* @__PURE__ */ o("header", { class: "admin-head", children: [
      /* @__PURE__ */ o("h1", { children: d("admin.title") }),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: y, children: [
        /* @__PURE__ */ o(Wl, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("admin.refresh") })
      ] })
    ] }),
    i && /* @__PURE__ */ o("div", { class: "c-red small", children: i }),
    e && !e.length && /* @__PURE__ */ o("p", { class: "hint", children: d("admin.no_frames") }),
    /* @__PURE__ */ o("div", { class: "admin-body", children: [
      /* @__PURE__ */ o("nav", { class: "admin-list", children: (e || []).map((v) => /* @__PURE__ */ o("button", { class: "admin-frame" + (v.frame_id === a ? " on" : ""), onClick: () => I(v), children: [
        /* @__PURE__ */ o("span", { class: "dot" + (v.online ? " online" : "") }),
        /* @__PURE__ */ o("span", { class: "admin-frame-name", children: v.name || v.frame_id }),
        /* @__PURE__ */ o("small", { children: v.model || "" })
      ] }, v.frame_id)) }),
      z && /* @__PURE__ */ o("section", { class: "admin-editor", children: [
        /* @__PURE__ */ o("div", { class: "admin-tools", children: [
          /* @__PURE__ */ o("div", { class: "seg", children: [
            /* @__PURE__ */ o("button", { class: k === "photo" ? "active" : "", onClick: () => b("photo"), children: [
              /* @__PURE__ */ o(_a, { size: 14 }),
              " ",
              d("admin.mode_photo")
            ] }),
            /* @__PURE__ */ o("button", { class: k === "dashboard" ? "active" : "", onClick: () => b("dashboard"), children: [
              /* @__PURE__ */ o(Tl, { size: 14 }),
              " ",
              d("admin.mode_dashboard")
            ] })
          ] }),
          /* @__PURE__ */ o("div", { class: "seg", children: [
            /* @__PURE__ */ o("button", { class: c === "landscape" ? "active" : "", onClick: () => h("landscape"), children: [
              /* @__PURE__ */ o(Nl, { size: 14 }),
              " ",
              d("admin.landscape")
            ] }),
            /* @__PURE__ */ o("button", { class: c === "portrait" ? "active" : "", onClick: () => h("portrait"), children: [
              /* @__PURE__ */ o(Xl, { size: 14 }),
              " ",
              d("admin.portrait")
            ] })
          ] }),
          k === "photo" && /* @__PURE__ */ o("label", { class: "check", children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                checked: !!A[c],
                onChange: (v) => g(v.currentTarget.checked ? ks(kt(), c === "landscape") : null)
              }
            ),
            d("admin.use_grid")
          ] }),
          /* @__PURE__ */ o("span", { class: "hint small", children: [
            N.w,
            "×",
            N.h,
            G ? "" : " · " + d("admin.size_guess")
          ] })
        ] }),
        k === "dashboard" && /* @__PURE__ */ o(se, { children: [
          /* @__PURE__ */ o("p", { class: "hint small", children: d("admin.dashboard_hint") }),
          /* @__PURE__ */ o(aA, { disp: N })
        ] }),
        k === "photo" && /* @__PURE__ */ o(se, { children: [
          /* @__PURE__ */ o("div", { class: "admin-screen-wrap", children: /* @__PURE__ */ o("div", { class: "admin-screen", style: { aspectRatio: N.w + " / " + N.h, ...N.h > N.w ? { height: "60vh" } : { width: "100%" } }, children: M ? /* @__PURE__ */ o(se, { children: [
            ["clock", "widgets"].map((v) => {
              const j = M[v];
              return /* @__PURE__ */ o("div", { class: "admin-block admin-" + v, style: {
                left: Te + j.x / J * we + "%",
                top: Te + j.y / J * we + "%",
                width: j.w / J * we + "%",
                height: j.h / J * we + "%"
              }, children: v === "clock" ? "12:00" : "◉ ◉ ◉" }, v);
            }),
            /* @__PURE__ */ o(
              Br,
              {
                grid: M,
                onDraft: l,
                onDone: (v) => {
                  l(null), g(v);
                },
                onTap: (v) => p(v)
              }
            )
          ] }) : /* @__PURE__ */ o("p", { class: "admin-off", children: d("admin.no_grid") }) }) }),
          M && W && /* @__PURE__ */ o("div", { class: "admin-align", children: [
            /* @__PURE__ */ o("div", { class: "seg", children: [
              /* @__PURE__ */ o("button", { class: f === "clock" ? "active" : "", onClick: () => p("clock"), children: d("lock.clock") }),
              /* @__PURE__ */ o("button", { class: f === "widgets" ? "active" : "", onClick: () => p("widgets"), children: d("lock.widgets") })
            ] }),
            /* @__PURE__ */ o("div", { class: "option", children: [
              /* @__PURE__ */ o("label", { children: d("lock.align_h") }),
              /* @__PURE__ */ o("div", { class: "seg", children: ["", "left", "center", "right"].map((v) => /* @__PURE__ */ o("button", { class: (W.ha || "") === v ? "active" : "", onClick: () => ne({ ha: v || void 0 }), children: d("lock.align." + (v || "auto")) }, v)) })
            ] }),
            /* @__PURE__ */ o("div", { class: "option", children: [
              /* @__PURE__ */ o("label", { children: d("lock.align_v") }),
              /* @__PURE__ */ o("div", { class: "seg", children: ["", "top", "middle", "bottom"].map((v) => /* @__PURE__ */ o("button", { class: (W.va || "") === v ? "active" : "", onClick: () => ne({ va: v || void 0 }), children: d("lock.align." + (v || "auto")) }, v)) })
            ] })
          ] }),
          O && /* @__PURE__ */ o("div", { class: "admin-copy", children: [
            /* @__PURE__ */ o("div", { class: "seg", children: [
              /* @__PURE__ */ o("button", { class: B === "all" ? "active" : "", onClick: () => U("all"), children: d("admin.copy_all") }),
              /* @__PURE__ */ o("button", { class: B === "grid" ? "active" : "", onClick: () => U("grid"), children: d("admin.copy_grid") })
            ] }),
            B === "all" && !z.lockscreen && /* @__PURE__ */ o("p", { class: "hint small", children: d("admin.copy_no_look") }),
            $.map((v) => /* @__PURE__ */ o("label", { class: "check", children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  checked: F.indexOf(v.frame_id) !== -1,
                  onChange: (j) => V(j.currentTarget.checked ? F.concat(v.frame_id) : F.filter((R) => R !== v.frame_id))
                }
              ),
              (v.name || v.frame_id) + (v.online ? "" : " · " + d("layout.grid_offline"))
            ] }, v.frame_id)),
            !$.length && /* @__PURE__ */ o("p", { class: "hint small", children: d("admin.copy_none") }),
            /* @__PURE__ */ o("div", { class: "row-btns", children: [
              /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => P(!1), children: /* @__PURE__ */ o("span", { children: d("common.cancel") }) }),
              /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", disabled: !F.length, onClick: E, children: d("admin.copy_go", { n: F.length }) })
            ] })
          ] }),
          /* @__PURE__ */ o("div", { class: "admin-foot", children: [
            /* @__PURE__ */ o("span", { class: "hint small", children: _ }),
            /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => P(!O), children: /* @__PURE__ */ o("span", { children: d("admin.copy_to") }) }),
            /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: L, children: d("admin.save") })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const lA = ':host{display:block;min-height:100vh;background:#0b0d14;color:#f5f7fb;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif}.admin{max-width:1200px;margin:0 auto;padding:16px 20px}.admin-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.admin-head h1{font-size:22px;font-weight:600;margin:0}.admin-body{display:flex;align-items:flex-start}.admin-list{width:230px;flex-shrink:0;margin-right:18px;display:flex;flex-direction:column}.admin-frame{display:flex;align-items:center;flex-wrap:wrap;text-align:left;padding:10px 12px;border-radius:12px;margin-bottom:6px;background:rgba(255,255,255,0.05)}.admin-frame.on{background:rgba(125,211,252,0.18)}.admin-frame .dot{width:8px;height:8px;border-radius:50%;background:#64748b;margin-right:8px}.admin-frame .dot.online{background:#4ade80}.admin-frame-name{flex:1;font-size:14px}.admin-frame small{width:100%;padding-left:16px;color:rgba(255,255,255,0.5);font-size:11px}.admin-editor{flex:1;min-width:0}.admin-tools{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:12px}.admin-tools > *{margin-right:14px}.admin-screen-wrap{display:flex;justify-content:center}.admin-screen{position:relative;max-width:100%;max-height:70vh;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#1e3a5f,#3b2f5c 50%,#5c3a2f);box-shadow:0 0 0 1px rgba(255,255,255,0.15)}.admin-block{position:absolute;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.75);font-size:20px;pointer-events:none}.admin-off{position:absolute;top:50%;left:0;right:0;text-align:center;color:rgba(255,255,255,0.6)}.admin-align{margin-top:14px;max-width:560px}.admin-iframe-box{position:relative;overflow:hidden;border-radius:14px;box-shadow:0 0 0 1px rgba(255,255,255,0.15);background:#000}.admin-iframe-box iframe{position:absolute;top:0;left:0;border:0;transform-origin:0 0}.admin-foot{display:flex;align-items:center;justify-content:flex-end;margin-top:16px}.admin-foot .hint{margin-right:12px}.admin-foot .btn{margin-right:10px}.admin-copy{margin-top:16px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.05);max-width:560px}.admin-copy .check{display:flex;margin:8px 0}.admin-copy .row-btns{display:flex;justify-content:flex-end;margin-top:10px}.admin-copy .row-btns > *{margin-left:8px}@media (max-width:700px){.admin-body{flex-direction:column}.admin-list{width:100%;margin:0 0 14px}}';
class dA extends HTMLElement {
  constructor() {
    super(...arguments), this.root = null, this._hass = null;
  }
  set hass(e) {
    const n = !this._hass;
    this._hass = e, n && this.mount();
  }
  connectedCallback() {
    this.mount();
  }
  mount() {
    if (this.root || !this._hass || !this.isConnected) return;
    const e = this.shadowRoot || this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = lA + Zi.replace(":root {", ":host {");
    const i = document.createElement("div");
    e.appendChild(n), e.appendChild(i), this.root = i, Xn(/* @__PURE__ */ o(cA, { hass: this._hass }), i);
  }
}
customElements.get("photoframe-admin") || customElements.define("photoframe-admin", dA);
const hA = ':host{display:block;position:relative;height:calc(100vh - var(--header-height, 56px));min-height:420px;overflow:hidden;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif;color:#f5f7fb;background:#000;border-radius:var(--ha-card-border-radius,0)}#app{position:absolute;top:0;left:0;right:0;bottom:0}';
class AA extends HTMLElement {
  constructor() {
    super(...arguments), this.client = new $h(), this.backend = null, this.config = { type: "custom:photoframe-card" }, this.root = null, this.exitKiosk = null, this.offKiosk = null, this.offIntegration = null;
  }
  // Включить/выключить киоск по текущим настройкам. Фронтенд HA дорисовывается не сразу —
  // поэтому вызывается и при монтировании, и при каждом обновлении hass, пока не получится.
  syncKiosk() {
    const e = this.config.kiosk != null ? this.config.kiosk : !!(this.backend && this.backend.integration && this.backend.config.kiosk), n = this.isConnected && Ah(!!e);
    n && !this.exitKiosk && (this.exitKiosk = ph()), !n && this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null);
  }
  setConfig(e) {
    this.config = e, this.backend && !this.backend.integration && (this.backend.config = e, le.applyCardConfig(e)), this.syncKiosk();
  }
  set hass(e) {
    this.client.setHass(e), this.syncKiosk(), this.backend || (this.backend = new nn(this.client, this.config), le.attachCard(this.backend), As(this.client).then((n) => {
      if (!n) return;
      const i = new nn(this.client, n, void 0, !1, !0);
      this.backend = i, le.attachCard(i), this.isConnected && !this.offIntegration && (this.offIntegration = i.watch((s) => le.applyCardConfig(s))), this.syncKiosk();
    })), this.mount();
  }
  connectedCallback() {
    const e = this.backend;
    e && e.integration && !this.offIntegration && (this.offIntegration = e.watch((n) => le.applyCardConfig(n))), this.mount(), this.offKiosk = hh(() => this.syncKiosk()), this.syncKiosk();
  }
  disconnectedCallback() {
    this.root && Xn(null, this.root), this.root = null, this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null), this.offKiosk && (this.offKiosk(), this.offKiosk = null), this.offIntegration && (this.offIntegration(), this.offIntegration = null);
  }
  getCardSize() {
    return 12;
  }
  getGridOptions() {
    return { columns: "full", rows: "auto" };
  }
  static getStubConfig() {
    return { media_folder: "photoframe" };
  }
  mount() {
    if (this.root || !this.backend || !this.isConnected) return;
    const e = this.shadowRoot || this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = hA + Zi;
    const i = document.createElement("div");
    i.id = "app", e.appendChild(n), e.appendChild(i), this.root = i, Xn(/* @__PURE__ */ o(Kh, {}), i), sA();
  }
}
customElements.get("photoframe-card") || customElements.define("photoframe-card", AA);
console.info("%c PHOTO-FRAME %c v1.0.0 ", "color:#fff;background:#0891b2;font-weight:700", "color:#0891b2;background:#fff");
Tc();
const go = window;
go.customCards = go.customCards || [];
go.customCards.push({
  type: "photoframe-card",
  name: "Smart Frame",
  description: "Photo frame with smart-home controls: photos, clock, weather and customizable cards",
  preview: !1
});
