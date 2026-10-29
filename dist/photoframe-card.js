var yn, G, qo, De, R1, Qo, Wo, Sn, Rt, dt, Vo, _1, Kn, e1, Uo, Kt = {}, en = [], os = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ct = Array.isArray;
function Ee(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function z1(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function tn(t, e, n) {
  var a, i, s, c = {};
  for (s in e) s == "key" ? a = e[s] : s == "ref" ? i = e[s] : c[s] = e[s];
  if (arguments.length > 2 && (c.children = arguments.length > 3 ? yn.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (s in t.defaultProps) c[s] === void 0 && (c[s] = t.defaultProps[s]);
  return qt(t, c, a, i, null);
}
function qt(t, e, n, a, i) {
  var s = { type: t, props: e, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++qo, __i: -1, __u: 0 };
  return i == null && G.vnode != null && G.vnode(s), s;
}
function U(t) {
  return t.children;
}
function Qt(t, e) {
  this.props = t, this.context = e;
}
function Ve(t, e) {
  if (e == null) return t.__ ? Ve(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? Ve(t) : null;
}
function as(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, a = [], i = [], s = Ee({}, e);
    s.__v = e.__v + 1, G.vnode && G.vnode(s), M1(t.__P, s, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, a, n ?? Ve(e), !!(32 & e.__u), i), s.__v = e.__v, s.__.__k[s.__i] = s, $o(a, s, i), e.__e = e.__ = null, s.__e != n && Yo(s);
  }
}
function Yo(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Yo(t);
}
function t1(t) {
  (!t.__d && (t.__d = !0) && De.push(t) && !nn.__r++ || R1 != G.debounceRendering) && ((R1 = G.debounceRendering) || Qo)(nn);
}
function nn() {
  try {
    for (var t, e = 1; De.length; ) De.length > e && De.sort(Wo), t = De.shift(), e = De.length, as(t);
  } finally {
    De.length = nn.__r = 0;
  }
}
function Go(t, e, n, a, i, s, c, r, f, h, m) {
  var A, l, u, p, g, y, w = a && a.__k || en, k = e.length;
  for (f = is(n, e, w, f, k), A = 0; A < k; A++) (u = n.__k[A]) != null && (l = u.__i != -1 && w[u.__i] || Kt, u.__i = A, y = M1(t, u, l, i, s, c, r, f, h, m), p = u.__e, u.ref && l.ref != u.ref && (l.ref && C1(l.ref, null, u), m.push(u.ref, u.__c || p, u)), g == null && p != null && (g = p), 4 & u.__u ? (f = Zo(u, f, t), l.__e && (l.__e = null)) : typeof u.type == "function" && y !== void 0 ? f = y : p && (f = p.nextSibling), u.__u &= -7);
  return n.__e = g, f;
}
function is(t, e, n, a, i) {
  var s, c, r, f, h, m = n.length, A = m, l = 0;
  for (t.__k = new Array(i), s = 0; s < i; s++) (c = e[s]) != null && typeof c != "boolean" && typeof c != "function" ? (typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? c = t.__k[s] = qt(null, c, null, null, null) : Ct(c) ? c = t.__k[s] = qt(U, { children: c }, null, null, null) : c.constructor === void 0 && c.__b > 0 ? c = t.__k[s] = qt(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : t.__k[s] = c, f = s + l, c.__ = t, c.__b = t.__b + 1, r = null, (h = c.__i = ss(c, n, f, A)) != -1 && (A--, (r = n[h]) && (r.__u |= 2)), r == null || r.__v == null ? (h == -1 && (i > m ? l-- : i < m && l++), typeof c.type != "function" && (c.__u |= 4)) : h != f && (h == f - 1 ? l-- : h == f + 1 ? l++ : (h > f ? l-- : l++, c.__u |= 4))) : t.__k[s] = null;
  if (A) for (s = 0; s < m; s++) (r = n[s]) != null && (2 & r.__u) == 0 && (r.__e == a && (a = Ve(r)), ea(r, r));
  return a;
}
function Zo(t, e, n) {
  var a, i;
  if (typeof t.type == "function") {
    for (a = t.__k, i = 0; a && i < a.length; i++) a[i] && (a[i].__ = t, e = Zo(a[i], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = Ve(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Jo(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Ct(t) ? t.some(function(n) {
    Jo(n, e);
  }) : e.push(t)), e;
}
function ss(t, e, n, a) {
  var i, s, c, r = t.key, f = t.type, h = e[n], m = h != null && (2 & h.__u) == 0;
  if (h === null && r == null || m && r == h.key && f == h.type) return n;
  if (a > (m ? 1 : 0)) {
    for (i = n - 1, s = n + 1; i >= 0 || s < e.length; ) if ((h = e[c = i >= 0 ? i-- : s++]) != null && (2 & h.__u) == 0 && r == h.key && f == h.type) return c;
  }
  return -1;
}
function q1(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || os.test(e) ? n : n + "px";
}
function Bt(t, e, n, a, i) {
  var s, c;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof a == "string" && (t.style.cssText = a = ""), a) for (e in a) n && e in n || q1(t.style, e, "");
    if (n) for (e in n) a && n[e] == a[e] || q1(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") s = e != (e = e.replace(Vo, "$1")), c = e.toLowerCase(), e = c in t || e == "onFocusOut" || e == "onFocusIn" ? c.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = n, n ? a ? n[dt] = a[dt] : (n[dt] = _1, t.addEventListener(e, s ? e1 : Kn, s)) : t.removeEventListener(e, s ? e1 : Kn, s);
  else {
    if (i == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && n == 1 ? "" : n));
  }
}
function Q1(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[Rt] == null) e[Rt] = _1++;
      else if (e[Rt] < n[dt]) return;
      return n(G.event ? G.event(e) : e);
    }
  };
}
function M1(t, e, n, a, i, s, c, r, f, h) {
  var m, A, l, u, p, g, y, w, k, x, C, E, M, b, I, P, B = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), s = [r = e.__e = n.__e]), (m = G.__b) && m(e);
  e: if (typeof B == "function") {
    A = c.length;
    try {
      if (k = e.props, x = B.prototype && B.prototype.render, C = (m = B.contextType) && a[m.__c], E = m ? C ? C.props.value : m.__ : a, n.__c ? w = (l = e.__c = n.__c).__ = l.__E : (x ? e.__c = l = new B(k, E) : (e.__c = l = new Qt(k, E), l.constructor = B, l.render = rs), C && C.sub(l), l.state || (l.state = {}), l.__n = a, u = l.__d = !0, l.__h = [], l._sb = []), x && l.__s == null && (l.__s = l.state), x && B.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Ee({}, l.__s)), Ee(l.__s, B.getDerivedStateFromProps(k, l.__s))), p = l.props, g = l.state, l.__v = e, u) x && B.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), x && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (x && B.getDerivedStateFromProps == null && k !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(k, E), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(k, l.__s, E) === !1) {
          e.__v != n.__v && (l.props = k, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(T) {
            T && (T.__ = e);
          }), en.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && c.push(l), r = Ve(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(k, l.__s, E), x && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(p, g, y);
        });
      }
      if (l.context = E, l.props = k, l.__P = t, l.__e = !1, M = G.__r, b = 0, x) l.state = l.__s, l.__d = !1, M && M(e), m = l.render(l.props, l.state, l.context), en.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, M && M(e), m = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++b < 25);
      l.state = l.__s, l.getChildContext != null && (a = Ee(Ee({}, a), l.getChildContext())), x && !u && l.getSnapshotBeforeUpdate != null && (y = l.getSnapshotBeforeUpdate(p, g)), I = m != null && m.type === U && m.key == null ? Ko(m.props.children) : m, r = Go(t, Ct(I) ? I : [I], e, n, a, i, s, c, r, f, h), l.base = e.__e, e.__u &= -161, l.__h.length && c.push(l), w && (l.__E = l.__ = null);
    } catch (T) {
      if (c.length = A, e.__v = null, f || s != null) {
        if (T.then) {
          for (e.__u |= f ? 160 : 128; r && r.nodeType == 8 && r.nextSibling; ) r = r.nextSibling;
          s != null && (s[s.indexOf(r)] = null), e.__e = r;
        } else if (s != null) for (P = s.length; P--; ) z1(s[P]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), T.then || Xo(e), G.__e(T, e, n);
    }
  } else s == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : r = e.__e = cs(n.__e, e, n, a, i, s, c, f, h);
  return (m = G.diffed) && m(e), 128 & e.__u ? void 0 : r;
}
function Xo(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Xo));
}
function $o(t, e, n) {
  for (var a = 0; a < n.length; a++) C1(n[a], n[++a], n[++a]);
  G.__c && G.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(s) {
        s.call(i);
      });
    } catch (s) {
      G.__e(s, i.__v);
    }
  });
}
function Ko(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Ct(t) ? t.map(Ko) : t.constructor !== void 0 ? null : Ee({}, t);
}
function cs(t, e, n, a, i, s, c, r, f) {
  var h, m, A, l, u, p, g, y = n.props || Kt, w = e.props, k = e.type;
  if (k == "svg" ? i = "http://www.w3.org/2000/svg" : k == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), s != null) {
    for (h = 0; h < s.length; h++) if ((u = s[h]) && "setAttribute" in u == !!k && (k ? u.localName == k : u.nodeType == 3)) {
      t = u, s[h] = null;
      break;
    }
  }
  if (t == null) {
    if (k == null) return document.createTextNode(w);
    t = document.createElementNS(i, k, w.is && w), r && (G.__m && G.__m(e, s), r = !1), s = null;
  }
  if (k == null) y === w || r && t.data == w || (t.data = w);
  else {
    if (s = k == "textarea" && w.defaultValue != null ? null : s && yn.call(t.childNodes), !r && s != null) for (y = {}, h = 0; h < t.attributes.length; h++) y[(u = t.attributes[h]).name] = u.value;
    for (h in y) u = y[h], h == "dangerouslySetInnerHTML" ? A = u : h == "children" || h in w || h == "value" && "defaultValue" in w || h == "checked" && "defaultChecked" in w || Bt(t, h, null, u, i);
    for (h in w) u = w[h], h == "children" ? l = u : h == "dangerouslySetInnerHTML" ? m = u : h == "value" ? p = u : h == "checked" ? g = u : r && typeof u != "function" || y[h] === u || Bt(t, h, u, y[h], i);
    if (m) r || A && (m.__html == A.__html || m.__html == t.innerHTML) || (t.innerHTML = m.__html), e.__k = [];
    else if (A && (t.innerHTML = ""), Go(e.type == "template" ? t.content : t, Ct(l) ? l : [l], e, n, a, k == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, s, c, s ? s[0] : n.__k && Ve(n, 0), r, f), s != null) for (h = s.length; h--; ) z1(s[h]);
    r && k != "textarea" || (h = "value", k == "progress" && p == null ? t.removeAttribute("value") : p != null && (p !== t[h] || k == "progress" && !p || k == "option" && p != y[h]) && Bt(t, h, p, y[h], i), h = "checked", g != null && g != t[h] && Bt(t, h, g, y[h], i));
  }
  return t;
}
function C1(t, e, n) {
  try {
    if (typeof t == "function") {
      var a = typeof t.__u == "function";
      a && t.__u(), a && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    G.__e(i, n);
  }
}
function ea(t, e, n) {
  var a, i;
  if (G.unmount && G.unmount(t), (a = t.ref) && (a.current && a.current != t.__e || C1(a, null, e)), (a = t.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (s) {
      G.__e(s, e);
    }
    a.base = a.__P = a.__n = null;
  }
  if (a = t.__k) for (i = 0; i < a.length; i++) a[i] && ea(a[i], e, n || typeof t.type != "function");
  n || z1(t.__e), t.__c = t.__ = t.__e = void 0;
}
function rs(t, e, n) {
  return this.constructor(t, n);
}
function n1(t, e, n) {
  var a, i, s, c;
  e == document && (e = document.documentElement), G.__ && G.__(t, e), i = (a = !1) ? null : e.__k, s = [], c = [], M1(e, t = e.__k = tn(U, null, [t]), i || Kt, Kt, e.namespaceURI, i ? null : e.firstChild ? yn.call(e.childNodes) : null, s, i ? i.__e : e.firstChild, a, c), $o(s, t, c), t.props.children = null;
}
function vn(t) {
  function e(n) {
    var a, i;
    return this.getChildContext || (a = /* @__PURE__ */ new Set(), (i = {})[e.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      a = null;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value != s.value && a.forEach(function(c) {
        c.__e = !0, t1(c);
      });
    }, this.sub = function(s) {
      a.add(s);
      var c = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        a && a.delete(s), c && c.call(s);
      };
    }), n.children;
  }
  return e.__c = "__cC" + Uo++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, a) {
    return n.children(a);
  }).contextType = e, e;
}
yn = en.slice, G = { __e: function(t, e, n, a) {
  for (var i, s, c; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), c = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, a || {}), c = i.__d), c) return i.__E = i;
  } catch (r) {
    t = r;
  }
  throw t;
} }, qo = 0, Qt.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ee({}, this.state), typeof t == "function" && (t = t(Ee({}, n), this.props)), t && Ee(n, t), t != null && this.__v && (e && this._sb.push(e), t1(this));
}, Qt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), t1(this));
}, Qt.prototype.render = U, De = [], Qo = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Wo = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, nn.__r = 0, Sn = Math.random().toString(8), Rt = "__d" + Sn, dt = "__a" + Sn, Vo = /(PointerCapture)$|Capture$/i, _1 = 0, Kn = Q1(!1), e1 = Q1(!0), Uo = 0;
var ls = 0;
function o(t, e, n, a, i, s) {
  e || (e = {});
  var c, r, f = e;
  if ("ref" in f) for (r in f = {}, e) r == "ref" ? c = e[r] : f[r] = e[r];
  var h = { type: t, props: f, key: n, ref: c, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ls, __i: -1, __u: 0, __source: i, __self: s };
  if (typeof t == "function" && (c = t.defaultProps)) for (r in c) f[r] === void 0 && (f[r] = c[r]);
  return G.vnode && G.vnode(h), h;
}
const ta = ':root{--ink: #f5f7fb;--ink-2: rgba(245, 247, 251, .72);--ink-3: rgba(245, 247, 251, .48);--panel: rgba(12, 14, 22, .42);--panel-line: rgba(255, 255, 255, .09);--chip: rgba(255, 255, 255, .1);--chip-line: rgba(255, 255, 255, .14);--warm: #fbbf24;--red: #fb7185;--green: #34d399;--ease: cubic-bezier(.2, .7, .2, 1)}*{box-sizing:border-box;margin:0;padding:0;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}html,body,#app{height:100%}body{background:#000;color:#f5f7fb;overflow:hidden;font-family:Inter,Roboto,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}button,input,select{font:inherit;color:inherit;border:0;background:none;outline:none}button{cursor:pointer}svg{display:block;flex-shrink:0}.app{position:relative;height:100%;overflow:hidden}.native-photos body,.native-photos .backdrop{background:transparent}.backdrop{position:absolute;inset:0;overflow:hidden}.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transform:scale(1);transition:opacity 2s ease-in-out,transform 20s linear}.slide.active{opacity:1;transform:scale(1.08)}.slide.contain,.slide.contain.active{transform:none;background:#000}.slide-glow{position:absolute;inset:-6%;background-size:cover;background-position:center;opacity:.75}.slide-photo{position:absolute;inset:0;background-size:contain;background-position:center;background-repeat:no-repeat}.q-full .slide-glow{-webkit-filter:blur(28px) saturate(1.3);filter:blur(28px) saturate(1.3)}.aurora{background:radial-gradient(ellipse at 20% 30%,rgba(56,189,248,.35) 0%,transparent 55%),radial-gradient(ellipse at 80% 70%,rgba(168,85,247,.32) 0%,transparent 55%),radial-gradient(ellipse at 60% 10%,rgba(251,191,36,.18) 0%,transparent 50%),#05060c}.soft{position:absolute;inset:-5%;background-size:cover;background-position:center;opacity:0;transition:opacity .6s cubic-bezier(.2,.7,.2,1)}.soft.on{opacity:1}.shade{position:absolute;inset:0;background:linear-gradient(to bottom,#00000040,#0000 30%,#00000026 55%,#000000b3);transition:background-color .6s cubic-bezier(.2,.7,.2,1)}.shade.deep{background-color:#04060c61}.ambient{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;padding:0 5vw 9vh;transform:translateY(-100%);pointer-events:none}.ambient.visible{transform:none}.clock-link{pointer-events:auto;cursor:pointer}.ambient-clock{text-shadow:0 2px 30px rgba(0,0,0,.35)}.ambient-time{font-size:22vh;font-weight:200;letter-spacing:-.04em;line-height:.9}.ambient-date{margin-top:2vh;font-size:3vh;font-weight:400;color:#f5f7fbb8;letter-spacing:.01em}.glances{display:flex;flex-wrap:wrap;justify-content:flex-end;max-width:50%;margin-bottom:1vh}.glance{pointer-events:auto;cursor:pointer;transition:transform .15s,background .2s;display:flex;align-items:center;margin:6px 0 0 8px;padding:9px 16px 9px 13px;border-radius:999px;background:#00000052;border:1px solid rgba(255,255,255,.14);font-size:15px;font-weight:500;color:#f5f7fb}.glance:active{transform:scale(.94);background:#00000080}.glance svg{margin-right:8px;color:#f5f7fbb8}.glance.lit svg{color:#fbbf24}.glance.alert{background:#e11d488c;border-color:#fb718599}.glance.alert svg,.glance.warn svg{color:#fff}.glance.warn{background:#d9770680}.ambient{transition:transform .5s cubic-bezier(.2,.7,.2,1),opacity .4s ease}.home-hint{position:absolute;left:50%;bottom:1.5vh;bottom:max(1.5vh,env(safe-area-inset-bottom));transform:translate(-50%);display:flex;padding:6px 24px;background:none;border:0;color:#f5f7fb;opacity:0;pointer-events:none;transition:opacity .6s ease,color 1.2s ease}.home-hint.visible{opacity:1;pointer-events:auto}.home-hint svg{-webkit-filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));-webkit-animation:nudge 2.4s ease-in-out infinite;animation:nudge 2.4s ease-in-out infinite}.home-hint.text-contrast.ink-dark svg{-webkit-filter:drop-shadow(0 1px 6px rgba(255,255,255,.6));filter:drop-shadow(0 1px 6px rgba(255,255,255,.6))}.ambient.customizing .home-hint{display:none}.q-lite .home-hint svg{-webkit-animation:none;animation:none}@-webkit-keyframes nudge{0%,60%,to{-webkit-transform:translateY(0)}30%{-webkit-transform:translateY(-5px)}}@keyframes nudge{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-5px)}}.photo-step{position:absolute;top:50%;width:72px;height:72px;margin-top:-36px;border-radius:50%;display:flex;align-items:center;justify-content:center;pointer-events:none;color:#fff;background:#00000059;opacity:0;-webkit-animation:photo-step .7s ease-out;animation:photo-step .7s ease-out}.photo-step.next{right:3vw}.photo-step.prev{left:3vw;-webkit-animation-name:photo-step-prev;animation-name:photo-step-prev}@-webkit-keyframes photo-step{0%{opacity:0;-webkit-transform:translateX(16px) scale(.8)}30%{opacity:1;-webkit-transform:translateX(0) scale(1)}to{opacity:0;-webkit-transform:translateX(-8px) scale(1)}}@keyframes photo-step{0%{opacity:0;transform:translate(16px) scale(.8)}30%{opacity:1;transform:translate(0) scale(1)}to{opacity:0;transform:translate(-8px) scale(1)}}@-webkit-keyframes photo-step-prev{0%{opacity:0;-webkit-transform:translateX(-16px) scale(.8)}30%{opacity:1;-webkit-transform:translateX(0) scale(1)}to{opacity:0;-webkit-transform:translateX(8px) scale(1)}}@keyframes photo-step-prev{0%{opacity:0;transform:translate(-16px) scale(.8)}30%{opacity:1;transform:translate(0) scale(1)}to{opacity:0;transform:translate(8px) scale(1)}}.dragging .ambient,.dragging .controls,.dragging .soft{transition:none}.dragging .controls{pointer-events:none}.controls{position:absolute;inset:0;display:flex;flex-direction:column;padding:22px 28px 28px;padding-top:max(22px,env(safe-area-inset-top));padding-left:max(28px,env(safe-area-inset-left));padding-right:max(28px,env(safe-area-inset-right));padding-bottom:max(28px,env(safe-area-inset-bottom));opacity:0;transform:scale(.96);transition:opacity .5s cubic-bezier(.2,.7,.2,1),transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}.controls.visible{opacity:1;transform:none;pointer-events:auto}.bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.bar-time{display:flex;align-items:baseline}.bar-clock{font-size:38px;font-weight:300;letter-spacing:-.03em}.bar-date{margin-left:14px;font-size:15px;color:#f5f7fbb8}.bar-actions{display:flex;align-items:center}.conn{display:flex;align-items:center;margin-right:14px;font-size:13px;color:#f5f7fbb8}.conn i{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#fbbf24}.conn-connected i{background:#34d399;box-shadow:0 0 10px #34d399}.conn-auth_invalid i,.conn-disconnected i{background:#fb7185}.round{width:48px;height:48px;margin-left:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);transition:transform .15s}.round:active{transform:scale(.92)}.round.accent{background:#7dd3fc;color:#0b0d14;border-color:transparent}.bar{position:relative}.bar-narrow .bar-date{display:none}.bar-narrow .bar-clock{font-size:30px}.home-switch{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);transition:opacity .2s}.home-switch:active{transform:translate(-50%,-50%) scale(.96)}.bar-narrow.menu-open .home-switch{opacity:0;pointer-events:none}.bar-narrow.bar-editing .home-switch{display:none}.burger{position:relative;display:flex;align-items:center}.burger-items{position:absolute;right:58px;top:0;display:flex;align-items:center;opacity:0;pointer-events:none;transform:translate(24px);transition:opacity .22s cubic-bezier(.2,.7,.2,1),transform .22s cubic-bezier(.2,.7,.2,1)}.menu-open .burger-items{opacity:1;pointer-events:auto;transform:none}.burger-btn{position:relative}.burger-dot{position:absolute;top:4px;right:4px;width:8px;height:8px;border-radius:50%;background:#fbbf24}.burger-btn.conn-connected .burger-dot{background:#34d399}.burger-btn.conn-auth_invalid .burger-dot,.burger-btn.conn-disconnected .burger-dot{background:#fb7185}.grid{position:relative;flex:1;min-height:0;margin:-16px;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.grid::-webkit-scrollbar{display:none}.grid-inner{position:relative}.cell{position:absolute;display:flex;transition:left .22s cubic-bezier(.2,.7,.2,1),top .22s cubic-bezier(.2,.7,.2,1),width .22s cubic-bezier(.2,.7,.2,1),height .22s cubic-bezier(.2,.7,.2,1)}.cell.dragged{z-index:20;transition:none;-webkit-animation:none;animation:none}.cell.dragged .panel{box-shadow:0 30px 60px #0000008c;border-color:#ffffff80}.drop-slot{position:absolute;border-radius:28px;border:2px dashed rgba(255,255,255,.45);background:#ffffff14;transition:left .15s,top .15s,width .15s,height .15s}.grid-dots{position:absolute;inset:0}.grid-dot{position:absolute;border-radius:10px;background:#ffffff09}.grid-note{font-size:12px;color:#f5f7fb7a;padding:8px 16px 0}.hidden-cards{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.hidden-cards .muted{display:flex;align-items:center;margin-right:8px}.hidden-cards .muted svg{margin-right:4px}.hidden-cards .chip{display:flex;align-items:center;margin:0 6px 6px 0}.hidden-cards .chip svg{margin-right:4px}.editing .cell{cursor:move}.dragging-card,.dragging-card *{cursor:-webkit-grabbing;cursor:grabbing}.badge-btn{position:absolute;top:-8px;width:28px;height:28px;border-radius:50%;z-index:2;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.25);box-shadow:0 4px 12px #0006}.badge-del{left:-8px;background:#3f3f46;color:#fff}.badge-edit{right:-8px;background:#e5e7eb;color:#111}.resize-handle{position:absolute;right:2px;bottom:2px;width:30px;height:30px;cursor:nwse-resize;z-index:2;border-right:3px solid rgba(255,255,255,.85);border-bottom:3px solid rgba(255,255,255,.85);border-bottom-right-radius:24px}.size-tag{position:absolute;left:50%;bottom:10px;padding:3px 8px;border-radius:8px;z-index:2;transform:translate(-50%);background:#0000008c;font-size:11px;font-weight:600;color:#f5f7fbb8}.cell>.panel{flex:1;min-width:0}.panel-body{flex:1;min-height:0;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.panel-body::-webkit-scrollbar,.lights::-webkit-scrollbar{display:none}.card-empty{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;font-size:13px;color:#f5f7fb7a;padding:0 12px}.panel{display:flex;flex-direction:column;min-height:0;background:#0c0e166b;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:20px 22px;box-shadow:0 20px 50px #00000040}.panel-head{display:flex;align-items:center;justify-content:space-between;min-height:30px;margin-bottom:14px}.panel-title{display:flex;align-items:center;min-width:0}.panel-title h2{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.panel-icon{margin-right:8px;color:#f5f7fb7a}.panel-head h2{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#f5f7fbb8}.home-pane{flex:1;min-height:0;display:flex;flex-direction:column}.screen-tabs{display:flex;align-items:center;overflow-x:auto;white-space:nowrap;margin:-8px 0 12px;padding-bottom:2px;-webkit-overflow-scrolling:touch}.screen-tab{display:inline-flex;flex-shrink:0;align-items:center;height:34px;padding:0 14px;margin-right:8px;border-radius:17px;font-size:14px;font-weight:500;color:#f5f7fb7a;background:#ffffff0f}.screen-tab.on{color:#f5f7fb;background:#ffffff29;font-weight:600}.screen-tab.add svg{margin-right:4px}.screen-tab.editing{padding:0 4px}.screen-tab input{width:auto;min-width:0;height:30px;padding:0 6px;border:0;border-radius:10px;background:transparent;color:#f5f7fb;font:inherit;text-align:center}.screen-tab input:focus{background:#00000040;outline:none}.screen-move,.screen-del{display:flex;align-items:center;justify-content:center;min-width:28px;height:28px;border-radius:14px;color:#f5f7fb7a}.screen-del.sure{padding:0 10px;background:#ef4444d9;color:#fff;font-size:13px}.slide-next{-webkit-animation:in-next .35s cubic-bezier(.2,.7,.2,1);animation:in-next .35s cubic-bezier(.2,.7,.2,1)}.slide-prev{-webkit-animation:in-prev .35s cubic-bezier(.2,.7,.2,1);animation:in-prev .35s cubic-bezier(.2,.7,.2,1)}@-webkit-keyframes in-next{0%{opacity:0;-webkit-transform:translateX(60px)}}@keyframes in-next{0%{opacity:0;transform:translate(60px)}}@-webkit-keyframes in-prev{0%{opacity:0;-webkit-transform:translateX(-60px)}}@keyframes in-prev{0%{opacity:0;transform:translate(-60px)}}.home-switch{display:flex;flex-direction:column;align-items:center;padding:6px 14px;border-radius:14px}.home-switch:active{background:#ffffff14}.home-name{font-size:15px;font-weight:600}.home-dots{display:flex;margin-top:5px}.home-dots i{width:6px;height:6px;border-radius:50%;margin:0 3px;background:#ffffff4d}.home-dots i.on{background:#fff}.editing .cell{-webkit-animation:jiggle .9s ease-in-out infinite;animation:jiggle .9s ease-in-out infinite}.editing div:nth-child(2n)>.cell{-webkit-animation-delay:-.45s;animation-delay:-.45s}.editing .cell .panel{border:1px dashed rgba(255,255,255,.35)}.editing .cell .panel-body{pointer-events:none;opacity:.45;overflow:hidden}.editing .cell{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:pan-y}@-webkit-keyframes jiggle{0%,to{-webkit-transform:rotate(-.35deg)}50%{-webkit-transform:rotate(.35deg)}}@keyframes jiggle{0%,to{transform:rotate(-.35deg)}50%{transform:rotate(.35deg)}}.icon-btn.danger{color:#fb7185}.pill-btn{margin-left:10px;display:flex;align-items:center;height:44px;padding:0 18px;border-radius:999px;color:#0b0d14;font-weight:600;background:#7dd3fc}.pill-btn svg{margin-right:6px}.rooms{flex:1;display:flex;flex-direction:column;justify-content:space-around}.rooms.compact .room{padding:4px 0}.rooms.compact .room-temp{font-size:28px}.rooms.compact .room-name{font-size:12px}.room{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.09)}.room:last-child{border-bottom:0}.room-name{font-size:14px;color:#f5f7fbb8}.room-vals{display:flex;align-items:baseline;justify-content:space-between;margin-top:2px}.room-temp{font-size:46px;font-weight:200;letter-spacing:-.03em;line-height:1.05}.room-temp sup{font-size:.5em;font-weight:300;vertical-align:top;position:relative;top:.25em;margin-left:2px;color:#7dd3fc}.room-hum{display:flex;align-items:center;font-size:15px;color:#f5f7fbb8}.room-hum svg{margin-right:4px;color:#7dd3fc}.chip-btn{display:flex;align-items:center;padding:7px 12px;border-radius:999px;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);font-size:13px;font-weight:500}.chip-btn svg{margin-right:6px}.lights{flex:1;min-height:0;display:flex;flex-wrap:wrap;align-content:flex-start;margin:-5px;overflow-y:auto;-webkit-overflow-scrolling:touch}.cols-1 .light{width:calc(100% - 10px)}.cols-2 .light{width:calc(50% - 10px)}.cols-3 .light{width:calc(33.333% - 10px)}.cols-4 .light{width:calc(25% - 10px)}.cols-5 .light{width:calc(20% - 10px)}.cols-6 .light{width:calc(16.666% - 10px)}.lights.compact .light{min-height:70px;padding:10px 12px}.lights.compact .light-icon{width:30px;height:30px;margin-bottom:6px}.lights.list .light{flex-direction:row;align-items:center;justify-content:flex-start;min-height:0;padding:7px 10px;border-radius:14px}.lights.list .light-icon{width:28px;height:28px;margin:0 8px 0 0;flex-shrink:0}.lights.list .light-name{min-width:0;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lights.list .light-state{display:none}.light{width:calc(50% - 10px);margin:5px;min-height:96px;flex-grow:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:14px;border-radius:20px;text-align:left;background:#ffffff0f;border:1px solid rgba(255,255,255,.07);transition:background .25s,border-color .25s,transform .15s,box-shadow .25s}.light:active{transform:scale(.96)}.light-icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;color:#f5f7fbb8;margin-bottom:12px;transition:background .25s,color .25s,box-shadow .25s}.light-name{font-size:15px;font-weight:500;line-height:1.2}.light-state{font-size:12px;color:#f5f7fb7a;margin-top:3px}.light.on{background:#fbbf2429;border-color:#fbbf2480;box-shadow:0 0 30px #fbbf241f}.light.on .light-icon{background:#fbbf24;color:#1a1205;box-shadow:0 0 22px #fbbf248c}.light.on .light-state{color:#f5f7fbb8}.light.na{opacity:.45}.seg{display:flex;background:#00000040;border-radius:999px;padding:3px}.seg button{padding:5px 12px;border-radius:999px;font-size:12px;font-weight:500;color:#f5f7fbb8}.seg .active{background:#ffffff24;color:#f5f7fb}.cam-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.seg-inline{align-self:flex-start;flex-shrink:0;max-width:100%;margin-bottom:10px;overflow-x:auto;-webkit-overflow-scrolling:touch}.seg-inline::-webkit-scrollbar{display:none}.seg-inline button{flex-shrink:0;white-space:nowrap}.seg-full{align-self:stretch}.seg-full button{flex:1 0 auto;text-align:center}.cam{position:relative;flex:1;min-height:120px;border-radius:18px;overflow:hidden;background:#00000073;cursor:pointer}.cam img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.cam-swipe{touch-action:pan-y}.cam-swipe img{-webkit-user-drag:none;user-select:none;-webkit-user-select:none}.cam-dots{display:flex;justify-content:center;flex-wrap:wrap;margin-top:10px}.cam-dots button{width:28px;height:28px;display:flex;align-items:center;justify-content:center}.cam-dots button:before{content:"";width:8px;height:8px;border-radius:50%;background:#ffffff3d}.cam-dots .active:before{background:#7dd3fc}.cam.fit-width img{top:50%;height:auto;transform:translateY(-50%)}.cam.fit-height img{left:50%;width:auto;transform:translate(-50%)}.cam.fit-width,.cam.fit-height{background:#000}.cam-empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:13px}.cam-empty svg{margin-bottom:8px}.cam-loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#00000059;color:#f5f7fbb8;font-size:13px;pointer-events:none}.cam-paused{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0003;color:#fff;font-size:13px}.cam-paused span{margin-top:10px;color:#f5f7fbb8}.cam-play{width:62px;height:62px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#7dd3fce6;color:#0b0d14;box-shadow:0 8px 26px #00000073}.cam-play svg{margin-left:3px}.cam-full .cam-play{width:84px;height:84px}.cam-play-corner{position:absolute;right:8px;bottom:8px;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#0000008c;color:#fff;box-shadow:0 2px 10px #00000059}.cam-play-corner svg{margin-left:2px}.cam-play-corner:hover{background:#7dd3fce6;color:#0b0d14}.cam-spinner{width:22px;height:22px;margin-bottom:8px;border-radius:50%;border:2px solid rgba(255,255,255,.2);border-top-color:#7dd3fc;-webkit-animation:cam-spin .8s linear infinite;animation:cam-spin .8s linear infinite}@-webkit-keyframes cam-spin{to{-webkit-transform:rotate(360deg)}}@keyframes cam-spin{to{transform:rotate(360deg)}}.live{position:absolute;top:10px;left:10px;display:flex;align-items:center;padding:3px 8px;border-radius:6px;background:#00000080;font-size:10px;font-weight:700;letter-spacing:.08em}.live i{width:6px;height:6px;border-radius:50%;background:#fb7185;margin-right:5px;-webkit-animation:pulse 1.6s infinite;animation:pulse 1.6s infinite}@-webkit-keyframes pulse{50%{opacity:.3}}@keyframes pulse{50%{opacity:.3}}.status-row{display:flex;align-items:center;padding:10px 0;color:#f5f7fbb8}.status-row+.status-row{border-top:1px solid rgba(255,255,255,.09)}.status-icon{width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#34d39926;color:#34d399;margin-right:12px}.status-text{flex:1;display:flex;flex-direction:column;min-width:0}.status-text b{font-size:14px;font-weight:500;color:#f5f7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.status-text small{font-size:12px;color:#f5f7fb7a;margin-top:2px}.status-row.alert .status-icon{background:#fb718533;color:#fb7185}.status-row.alert small{color:#fb7185}.sheet-layer{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 5vw 9vh;padding-bottom:calc(9vh + 56px);background:linear-gradient(to top,#00000059,#0000 60%);-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease}.sheet{position:relative;width:460px;max-width:100%;max-height:72vh;overflow:hidden;border-radius:30px;border:1px solid rgba(255,255,255,.16);box-shadow:0 30px 80px #00000073;transform-origin:100% 100%;-webkit-animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1);animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1)}.sheet-wide{width:640px}.sheet .lights{overflow:visible}.sheet-cameras .cam{height:300px;flex:none}.sheet-glass{position:absolute;inset:0;overflow:hidden;background:#10131c}.glass-layer{position:absolute;background-size:cover;background-position:center}.glass-layer.fresh{-webkit-animation:fade-in 1.2s ease;animation:fade-in 1.2s ease}.sheet-tint{position:absolute;inset:0;background:#0a0c1480}.sheet-inner{position:relative;padding:20px 22px 22px;max-height:72vh;overflow-y:auto;-webkit-overflow-scrolling:touch}.sheet .rooms .room{padding:12px 0}.sheet-actions{display:flex;align-items:center}.sheet-close{width:32px;height:32px;margin-left:8px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1f;color:#f5f7fbb8}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes sheet-in{0%{opacity:0;-webkit-transform:translateY(24px) scale(.92)}}@keyframes sheet-in{0%{opacity:0;transform:translateY(24px) scale(.92)}}.modal{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:16px;background:#0009}.modal-box{width:100%;max-width:560px;max-height:92%;display:flex;flex-direction:column;overflow:hidden;background:#141620f7;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:0;box-shadow:0 30px 80px #0009}.modal-wide{max-width:960px}.modal-head{flex-shrink:0;display:flex;justify-content:space-between;align-items:center;margin:0;padding:24px 24px 16px}.modal-head h2{font-size:19px;font-weight:600}.modal-body{flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0 24px 24px}.modal-box.has-foot .modal-body{padding-bottom:8px}.modal-title{display:flex;align-items:center}.modal-title svg{margin-right:10px;color:#7dd3fc}.icon-btn{color:#f5f7fb7a}.cam-full{position:relative;border-radius:18px;overflow:hidden;background:#000}.cam-full img{display:block;width:100%;max-height:72vh;object-fit:contain}.tabs{display:flex;padding:4px;margin-bottom:18px;border-radius:14px;background:#ffffff0d}.tabs button{flex:1;padding:9px;border-radius:10px;font-size:14px;font-weight:500;color:#f5f7fbb8}.tabs .active{background:#ffffff1a;color:#f5f7fb}.modal-box .hint{position:static;opacity:1;text-align:left;font-size:13px;color:#f5f7fb7a;letter-spacing:0;margin-bottom:14px;line-height:1.45}.modal-box .hint.small{font-size:12px;margin:4px 0 0;text-align:center}.drop-zone{position:relative;display:block;text-align:center;padding:26px 16px;margin-bottom:14px;border:2px dashed rgba(255,255,255,.16);border-radius:20px;background:#ffffff08}.drop-zone svg{margin:0 auto 8px}.drop-zone input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.drop-zone.busy{opacity:.6}.drop-zone.over{border-color:#7dd3fc;background:#7dd3fc14}.upload-error{margin:-6px 0 12px}.drop-title{font-size:14px;font-weight:500}.thumbs{display:flex;flex-wrap:wrap;margin:0 -4px 10px}.thumb{position:relative;width:72px;height:72px;margin:4px;border-radius:12px;background-size:cover;background-position:center}.thumb-del{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#000000a6}.option{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-top:1px solid rgba(255,255,255,.09);font-size:14px;color:#f5f7fbb8}.option select{padding:8px 12px;border-radius:10px;background:#ffffff14;color:#f5f7fb;font-size:13px}.option select option{color:#000}.option-col{display:block}.folder-choose{display:flex;align-items:center;max-width:62%;padding:8px 12px;border-radius:10px;background:#ffffff14;color:#f5f7fb;font-size:13px}.folder-choose svg{margin-right:8px;color:#7dd3fc;flex-shrink:0}.folder-choose span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.folder-tree{margin:4px -6px}.folder-row{display:flex;align-items:center;min-height:40px}.folder-toggle{width:26px;height:32px;display:flex;align-items:center;justify-content:center;color:#f5f7fb7a;flex-shrink:0}.folder-name{flex:1;min-width:0;display:flex;align-items:center;height:34px;padding:0 10px;border-radius:10px;color:#f5f7fbb8;font-size:14px;text-align:left}.folder-name:hover{background:#ffffff0f}.folder-name svg{margin-right:8px;color:#f5f7fb7a;flex-shrink:0}.folder-name span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.folder-name em{margin-left:auto;padding-left:10px;font-style:normal;font-size:12px;color:#f5f7fb7a}.folder-name.active{background:#7dd3fc29;color:#f5f7fb}.folder-name.active svg{color:#7dd3fc}.folder-loading{display:flex;flex-direction:column;align-items:center;padding:28px 0;color:#f5f7fb7a;font-size:13px}.folder-loading .cam-spinner{border-top-color:#7dd3fc}.chip-picker{margin-top:8px}.chip-picker .check{margin:4px 0;color:#f5f7fb}.field{display:block;margin-bottom:14px}.field span{display:block;font-size:12px;color:#f5f7fb7a;margin-bottom:6px}.field input{width:100%;padding:13px 14px;border-radius:12px;font-size:15px;background:#ffffff0f;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text}.field input:focus{border-color:#7dd3fc}.table-wrap{max-height:240px;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:12px;background:#0003}.diag{width:100%;border-collapse:collapse;font-size:12px}.diag td{padding:7px 10px;border-bottom:1px solid rgba(255,255,255,.09);word-break:break-all}.mono{font-family:Menlo,Roboto Mono,monospace}.strong{font-weight:600}.muted{color:#f5f7fb7a}.modal-foot{flex-shrink:0;display:flex;justify-content:space-between;align-items:center;margin:0;padding:16px 24px 24px;border-top:1px solid rgba(255,255,255,.09);background:inherit}.btn{display:flex;align-items:center;padding:11px 18px;border-radius:14px;font-size:14px;font-weight:600}.btn svg{margin-right:6px}.btn-accent{background:#7dd3fc;color:#0b0d14}.btn-danger{background:#fb71851f;color:#fb7185}.type-list .type-row{display:flex;align-items:center;width:100%;padding:12px 6px;text-align:left;color:#f5f7fbb8;border-bottom:1px solid rgba(255,255,255,.09)}.type-list .type-row:last-child{border-bottom:0}.seg-wide{align-self:flex-start;display:inline-flex}.seg-wide button{padding:7px 16px;font-size:13px}.swatches{display:flex;flex-wrap:wrap}.swatch{width:34px;height:34px;border-radius:50%;margin:0 8px 6px 0;border:2px solid transparent}.swatch.active{border-color:#fff;box-shadow:0 0 0 2px #00000080 inset}.swatch-auto{background:#ffffff1a;font-size:12px;font-weight:700;color:#f5f7fbb8}.icon-grid{display:flex;flex-wrap:wrap;margin:0 -3px}.icon-grid button{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0d;color:#f5f7fbb8}.icon-grid .active{background:#fff3;color:#f5f7fb}.icon-choose{display:flex;align-items:center;width:100%;padding:8px 10px;border-radius:14px;background:#ffffff0f;color:#f5f7fbb8;text-align:left}.field .icon-choose span{display:inline;margin:0;font-size:14px;color:#f5f7fbb8}.field .icon-choose .icon-choose-preview{width:38px;height:38px;margin-right:12px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff14;color:#f5f7fb;flex-shrink:0}.field .icon-choose .icon-choose-key{margin-left:auto;font-size:11px;color:#f5f7fb7a}.icon-picker-search{margin-bottom:12px}.icon-picker-scroll{max-height:58vh;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-right:4px}.icon-group{margin-bottom:14px}.icon-group h3{margin:0 0 4px;font-size:12px;font-weight:600;color:#f5f7fb7a;text-transform:uppercase;letter-spacing:.06em}.icon-grid-picker button{width:44px;height:44px}.icon-grid-picker .active{background:#7dd3fc;color:#0b0d14}.check{display:flex;align-items:center;font-size:14px;color:#f5f7fbb8;margin:6px 0 10px}.check input{margin-right:10px;width:18px;height:18px}.check-row{padding:10px 0;border-top:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.09);margin-bottom:14px}.items{border-radius:14px;background:#0003;padding:4px 8px 8px}.item-block{border-bottom:1px solid rgba(255,255,255,.09)}.item-row{display:flex;align-items:center;padding:8px 0}.item-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ffffff14;margin-right:10px;flex-shrink:0}.item-main{flex:1;min-width:0;display:flex;flex-direction:column}.item-main input{padding:6px 8px;margin-left:-8px;border-radius:8px;font-size:14px;-webkit-user-select:text;user-select:text}.item-main input:focus{background:#ffffff0f}.item-main .mono{font-size:11px;color:#f5f7fb7a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item-row .icon-btn{width:32px;height:32px;display:flex;align-items:center;justify-content:center}.na-tag{font-style:normal;color:#fb7185}.link{display:flex;align-items:center;font-size:11px;color:#7dd3fc;margin-top:3px;text-align:left}.link svg{margin-right:4px}.btn-ghost{margin-top:8px;background:#ffffff14;color:#f5f7fb;font-weight:500}.btn[disabled]{opacity:.4}.auth{margin-bottom:16px;padding:14px 16px 2px;border-radius:16px;background:#ffffff0a}.auth-title{font-size:15px;font-weight:600;margin-bottom:12px}.auth-or{display:flex;align-items:center;margin:-2px 0 12px;font-size:12px;color:#f5f7fb7a}.auth-or:before,.auth-or:after{content:"";flex:1;height:1px;background:#ffffff1f}.auth-or span{margin:0 12px}.auth .btn-login{width:100%;justify-content:center;margin:0 0 4px}.auth-session{display:flex;align-items:center;justify-content:space-between;margin:-2px 0 6px;font-size:13px;color:#f5f7fbb8}.auth-session .btn{margin:0 0 0 12px;flex-shrink:0}.ha-storage{margin:0 0 14px}.ha-storage .hint{margin:0}.migration{margin:0 0 14px;padding:12px 14px;border-radius:14px;background:#ffffff14}.migration p{margin:0 0 4px;font-size:14px}.picker{border-radius:14px;background:#00000040;padding:8px}.picker-search{display:flex;align-items:center;padding:4px 6px;border-radius:10px;background:#ffffff12;color:#f5f7fb7a}.picker-search input{flex:1;padding:8px;border:0;background:none;font-size:14px;color:#f5f7fb;-webkit-user-select:text;user-select:text}.picker .check{margin:8px 4px;font-size:13px}.picker-mode{margin-bottom:8px}.picker-list{max-height:260px;overflow-y:auto;-webkit-overflow-scrolling:touch}.picker-row{display:flex;flex-wrap:wrap;align-items:baseline;width:100%;padding:9px 6px;text-align:left;border-bottom:1px solid rgba(255,255,255,.09)}.picker-row:active{background:#ffffff14}.picker-name{flex:1;font-size:14px}.picker-state{font-size:12px;color:#f5f7fb7a;margin-left:8px}.picker-id{width:100%;font-size:11px;color:#f5f7fb7a;margin-top:2px}.picker-empty{padding:16px;text-align:center}.home-row{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.09)}.home-row-head{display:flex;align-items:center;margin-bottom:8px}.home-input{flex:1;min-width:0;padding:8px 10px;border-radius:10px;font-size:15px;font-weight:600;background:#ffffff0f;-webkit-user-select:text;user-select:text}.row-btns{display:flex}.row-btns .btn{margin:0 8px 8px 0}.json{display:block;width:100%;height:120px;padding:10px;border-radius:12px;font:12px Menlo,monospace;color:#f5f7fb;background:#0000004d;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text;resize:vertical}.c-red{color:#fb7185}.small{font-size:12px}.ac-wrap,.media-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.ac{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-main{display:flex;align-items:center}.ac-step{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;border:1px solid rgba(255,255,255,.14);margin:0 10px}.ac-step:active{background:#ffffff2e}.ac-step[disabled]{opacity:.3}.ac-dial{position:relative}.ac-dial svg{position:absolute;top:0;left:0}.ac-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-target{font-size:44px;font-weight:200;letter-spacing:-.03em;line-height:1}.ac.compact .ac-target{font-size:34px}.ac-target sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.ac-mode{font-size:12px;color:#f5f7fbb8;margin-top:4px}.ac-room{font-size:11px;color:#f5f7fb7a;margin-top:2px}.ac-modes{display:flex;flex-wrap:wrap;justify-content:center;margin-top:10px}.ac-mode-btn{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0f;border:1px solid transparent;color:#f5f7fbb8}.ac-mode-btn.active{color:#fff;border-color:#fff6}.ac-fan{margin-top:10px;align-self:center}.ac-fan button{padding:6px 10px;font-size:12px}.media-wrap{flex:1 0 auto}.media{flex:1 0 auto;display:flex;flex-direction:column}.media>:first-child{margin-top:auto}.media>:last-child{margin-bottom:auto}.media.short .media-art{width:52px;height:52px;border-radius:12px}.media.short .media-controls{margin:8px 0 2px}.media.short .media-controls button{width:38px;height:38px}.media.short .media-controls .media-play{width:46px;height:46px}.media-top{display:flex;align-items:center}.media-art{width:72px;height:72px;flex-shrink:0;border-radius:14px;background-size:cover;background-position:center;box-shadow:0 8px 24px #00000059}.media.big .media-art{width:112px;height:112px;border-radius:18px}.media-art-empty{display:flex;align-items:center;justify-content:center;background:#ffffff12;color:#f5f7fb7a}.media-art-empty.big{width:96px;height:96px;border-radius:24px;margin-bottom:12px}.media-info{flex:1;min-width:0;margin-left:14px}.media-title{font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media.big .media-title{font-size:19px}.media-sub{font-size:13px;color:#f5f7fbb8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media-state{display:flex;align-items:center;font-size:11px;color:#f5f7fb7a;margin-top:6px;text-transform:uppercase;letter-spacing:.08em}.media-state.on{color:#34d399}.eq{display:inline-flex;align-items:flex-end;height:10px;margin-right:6px}.eq b{width:2px;margin-right:2px;background:#34d399;-webkit-animation:eq .9s ease-in-out infinite;animation:eq .9s ease-in-out infinite}.eq b:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.eq b:nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}@-webkit-keyframes eq{0%,to{height:3px}50%{height:10px}}@keyframes eq{0%,to{height:3px}50%{height:10px}}.icon-round{width:36px;height:36px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;color:#f5f7fbb8;margin-left:8px}.media-controls{display:flex;align-items:center;justify-content:center;margin:14px 0 6px}.media-controls button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:#f5f7fb;margin:0 6px}.media-controls button:active{background:#ffffff1a}.media-controls .media-play{width:56px;height:56px;background:#ffffffeb;color:#0b0d14}.media-volume{display:flex;align-items:center;margin-top:8px}.media-volume button{width:32px;height:32px;display:flex;align-items:center;justify-content:center;color:#f5f7fbb8}.vol-bar{position:relative;flex:1;height:6px;margin:0 10px;border-radius:3px;background:#ffffff1f;cursor:pointer}.vol-bar:before{content:"";position:absolute;inset:-12px 0}.vol-fill{position:absolute;top:0;left:0;bottom:0;border-radius:3px;background:#f5f7fb}.vol-num{width:28px;text-align:right;font-size:12px;color:#f5f7fb7a}.media-sources{margin:10px -4px 0;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}.media-sources::-webkit-scrollbar{display:none}.media-sources .chip{flex-shrink:0;white-space:nowrap}.media-off{align-items:center;text-align:center}.media-power{margin:14px 0 0}.media-hint{margin-top:10px;max-width:220px}.dot-live{display:inline-block;width:6px;height:6px;border-radius:50%;background:#34d399;margin-right:6px;vertical-align:middle}.weather{flex:1;display:flex;flex-direction:column;min-height:0}.weather-now{display:flex;align-items:center}.weather-temp{font-size:48px;font-weight:200;letter-spacing:-.03em;line-height:1;margin:0 14px 0 10px}.weather-temp sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.weather-desc{display:flex;flex-direction:column;min-width:0}.weather-desc b{font-size:15px;font-weight:500}.weather-desc span{font-size:12px;color:#f5f7fb7a;margin-top:2px}.weather-facts{display:flex;flex-wrap:wrap;margin-top:12px;font-size:13px;color:#f5f7fbb8}.weather-facts span{display:flex;align-items:center;margin-right:16px}.weather-facts svg{margin-right:5px;color:#f5f7fb7a}.weather-rooms{margin-top:10px;border-top:1px solid rgba(255,255,255,.09)}.wroom{display:flex;align-items:center;height:36px;font-size:14px}.wroom-name{flex:1;min-width:0;color:#f5f7fbb8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wroom-hum{display:flex;align-items:center;font-size:12px;color:#f5f7fb7a;margin-right:12px}.wroom-hum svg{margin-right:3px;color:#7dd3fc}.wroom-temp{font-weight:500;font-size:16px}.room-name svg{display:inline-block;vertical-align:-2px;margin-right:6px;color:#f5f7fbb8}.weather-hours{display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px -4px 0;padding-bottom:4px}.weather-hours::-webkit-scrollbar{display:none}.hour{flex-shrink:0;width:52px;display:flex;flex-direction:column;align-items:center;font-size:12px}.hour svg{margin:6px 0;color:#f5f7fbb8}.hour b{font-weight:500;font-size:14px}.weather-days{margin-top:12px;border-top:1px solid rgba(255,255,255,.09);padding-top:4px}.day{display:flex;align-items:center;padding:7px 0;font-size:14px}.day-name{width:72px;color:#f5f7fbb8}.day svg{color:#f5f7fbb8;margin-right:10px}.day-lo{width:34px;text-align:right;color:#f5f7fb7a}.day-hi{width:34px}.day-bar{position:relative;flex:1;height:4px;margin:0 10px;border-radius:2px;background:#ffffff14}.day-bar i{position:absolute;top:0;bottom:0;border-radius:2px;background:linear-gradient(to right,#0891b2,#d97706)}.ambient-weather{display:flex;align-items:center;margin-top:2.4vh;font-size:2.8vh;color:#f5f7fb}.ambient-weather svg{width:4.2vh;height:4.2vh}.aw-temp{font-size:4.6vh;font-weight:300;margin:0 1.6vh 0 1.2vh}.aw-desc{display:flex;flex-direction:column;font-size:2.2vh;color:#f5f7fbb8;line-height:1.25}.aw-desc small{font-size:1.9vh;color:#f5f7fb7a}.tappable{cursor:pointer;border-radius:10px;transition:background .15s}.tappable:active{background:#ffffff12}.detail{position:relative;text-align:left}.detail-hero{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px}.hero-value{font-size:52px;font-weight:200;letter-spacing:-.03em;line-height:1;margin-bottom:6px}.chips{display:flex;flex-wrap:wrap;margin:0 -4px 12px}.chip{display:flex;align-items:baseline;margin:4px;padding:8px 12px;border-radius:12px;background:#ffffff0f;border:1px solid transparent;font-size:13px;color:#f5f7fbb8}.chip b{margin-left:8px;font-weight:600;color:#f5f7fb}.chip.active{border-color:#ffffff59;background:#ffffff1f;color:#f5f7fb}.detail-tools{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.chip-btn.on{background:#fff3}.chart{position:relative;margin:0 auto}.chart svg{display:block;overflow:visible}.chart-tick{fill:#f5f7fb7a;font-size:11px}.chart-legend{display:flex;justify-content:flex-end;font-size:12px;color:#f5f7fb7a;margin-top:2px}.chart-legend span{display:flex;align-items:center;margin-left:14px}.chart-legend i{width:12px;height:12px;border-radius:3px;margin-right:6px}.chart-legend i.key-line{height:2px;border-radius:1px}.chart-legend i.key-na{border:1px dashed rgba(255,255,255,.35)}.chart-tip{position:absolute;top:0;padding:7px 10px;border-radius:10px;pointer-events:none;white-space:nowrap;transform:translate(-50%);background:#080a10eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 8px 24px #0006;display:flex;flex-direction:column;font-size:12px;color:#f5f7fbb8}.chart-tip b{font-size:15px;color:#f5f7fb}.chart-empty{height:210px;display:flex;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:14px}.stats{display:flex;flex-wrap:wrap;margin:14px -5px 0}.stat{flex:1;min-width:120px;margin:5px;padding:12px 14px;border-radius:14px;background:#ffffff0d}.stat-label{font-size:12px;color:#f5f7fb7a}.stat-value{font-size:22px;font-weight:300;margin-top:4px;white-space:nowrap}.stat-note{font-size:11px;color:#f5f7fb7a;margin-top:2px}.detail-foot{margin-top:10px}.detail .table-wrap{max-height:210px}.root{height:100%}@supports (backdrop-filter: blur(1px)){.q-full .panel,.q-full .glance,.q-full .round,.q-full .chip-btn{backdrop-filter:blur(18px) saturate(140%)}.q-full .panel{background:#0c0e1652}.q-full .modal{backdrop-filter:blur(6px)}.q-full .modal-box{background:#141620d1;backdrop-filter:blur(24px) saturate(150%)}}.q-lite .slide{transform:none!important;transition:opacity .6s linear}.q-lite .soft{display:none}.q-lite .shade.deep{background-color:#04060cd1}.q-lite .sheet-glass .glass-layer{display:none}.q-lite .panel,.q-lite .modal-box,.q-lite .sheet,.q-lite .glance,.q-lite .cell.dragged .panel,.q-lite .light.on,.q-lite .light.on .light-icon,.q-lite .media-art,.q-lite .badge-btn{box-shadow:none!important}.q-lite .ambient-clock,.q-lite .ambient .header{text-shadow:none}.q-lite .eq b,.q-lite .live i,.q-lite .editing .cell,.q-lite .sheet,.q-lite .sheet-layer{-webkit-animation:none!important;animation:none!important}.q-lite .controls,.q-lite .ambient{transition-duration:.2s}.q-lite .cell,.q-lite .light,.q-lite .light-icon,.q-lite .soft{transition:none}@media(max-width:900px),(orientation:portrait){.ambient{display:block;padding-top:0}.ambient-clock{position:absolute;left:6vw;bottom:24vh}.ambient-time{font-size:13vh}.ambient-date{font-size:2.2vh}.glances{position:absolute;left:6vw;right:6vw;bottom:10vh;max-width:none;justify-content:flex-start}.glance{margin:6px 8px 0 0}.controls{padding:16px;padding-top:max(16px,env(safe-area-inset-top))}}@media(max-width:700px){.ambient-clock{left:6vw;right:6vw;text-align:center}.ambient-weather,.glances{justify-content:center}.glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.glance span{display:none}.glance svg{margin:0;width:22px;height:22px}}@media(max-width:900px),(orientation:portrait){.bar-date,.conn{display:none}.sheet-layer{justify-content:center;padding:0 12px 12px;padding-bottom:max(12px,env(safe-area-inset-bottom))}.sheet,.sheet-wide{width:100%}.sheet-cameras .cam{height:220px}.hero-value{font-size:40px}.stat{min-width:40%}.rooms .room-temp{font-size:36px}}.ambient.lock-size-xs .ambient-time{font-size:10vh}.ambient.lock-size-s .ambient-time{font-size:15vh}.ambient.lock-size-l .ambient-time{font-size:28vh}.ambient.lock-size-xl .ambient-time{font-size:34vh}.ambient.lock-center,.ambient.lock-top{flex-direction:column;align-items:center;justify-content:flex-end}.ambient.lock-top{justify-content:flex-start;padding-top:10vh}.ambient.lock-center .ambient-clock,.ambient.lock-top .ambient-clock{position:static;text-align:center}.ambient.lock-center .ambient-weather,.ambient.lock-top .ambient-weather{justify-content:center}.ambient.lock-center .glances,.ambient.lock-top .glances{position:static;max-width:none;justify-content:center;margin-top:3vh}.ambient.lock-center .glance,.ambient.lock-top .glance{margin:6px 5px 0}.ambient.lock-top .ambient-clock{display:flex;flex-direction:column;align-items:center}.ambient-date.above{margin:0 0 1vh}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .ambient-weather{justify-content:flex-start}.ambient.chips-icons .glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.ambient.chips-icons .glance span{display:none}.ambient.chips-icons .glance svg{margin:0;width:22px;height:22px}.ambient.chips-text .glance{width:auto;height:auto;padding:9px 16px 9px 13px;border-radius:999px}.ambient.chips-text .glance span{display:inline}.ambient.chips-text .glance svg{margin-right:8px;width:18px;height:18px}@media(max-width:900px),(orientation:portrait){.ambient.lock-size-xs .ambient-time{font-size:7vh}.ambient.lock-size-s .ambient-time{font-size:10vh}.ambient.lock-size-m .ambient-time{font-size:13vh}.ambient.lock-size-l .ambient-time{font-size:17vh}.ambient.lock-size-xl .ambient-time{font-size:21vh}}@media(max-width:700px){.ambient.lock-size-xs .ambient-time{font-size:15vw}.ambient.lock-size-s .ambient-time{font-size:20vw}.ambient.lock-size-m .ambient-time{font-size:26vw}.ambient.lock-size-l .ambient-time{font-size:31vw}.ambient.lock-size-xl .ambient-time{font-size:35vw}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .glances{justify-content:flex-start}}.ambient.customizing{transform:scale(.9)}.ambient.customizing .ambient-clock,.ambient.customizing .glances{pointer-events:auto;cursor:pointer;border-radius:18px;padding:10px 14px;border:1.5px dashed rgba(255,255,255,.55);background:#ffffff0f}.ambient.customizing .glances{min-height:64px;min-width:120px}.glance-add{color:#f5f7fbb8}.lock-ui{position:absolute;inset:0;z-index:30;pointer-events:none}.lock-top{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;padding-top:max(16px,env(safe-area-inset-top));pointer-events:auto;font-size:14px;color:#f5f7fbb8;text-shadow:0 1px 8px rgba(0,0,0,.5)}.lock-modal{position:absolute;inset:0;pointer-events:auto;display:flex;align-items:center;justify-content:center;background:#00000059}.lock-panel{position:relative;width:420px;max-width:calc(100% - 24px);max-height:80%;overflow-y:auto;padding:16px 18px 10px;border-radius:24px;pointer-events:auto;background:#141620eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 20px 60px #00000080}.lock-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;font-size:16px}.lock-fonts{display:flex;margin:0 -4px 12px}.lock-font{flex:1;margin:0 4px;height:64px;border-radius:14px;font-size:34px;background:#ffffff0f;border:1.5px solid transparent}.lock-font.on{border-color:#7dd3fc;background:#7dd3fc1f}.lock-colors{display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;margin:0 -18px 6px;padding:4px 18px;-webkit-overflow-scrolling:touch;scrollbar-width:none}.lock-colors::-webkit-scrollbar{display:none}.lock-colors .lock-color{flex-shrink:0}.lock-color{width:34px;height:34px;margin-right:10px;border-radius:50%;border:2px solid rgba(255,255,255,.15)}.lock-color.on{border-color:#fff;box-shadow:0 0 0 3px #ffffff40}.lock-widget{display:flex;align-items:center;border-top:1px solid rgba(255,255,255,.09)}.lock-widget .check{flex:1;margin:10px 0}.lock-widget .check svg{margin-right:8px;color:#f5f7fbb8}.lock-widget .icon-btn{width:36px;height:36px;display:flex;align-items:center;justify-content:center}.lock-widget .icon-btn[disabled]{opacity:.25}.option-hint{display:block;margin-top:2px;font-size:12px;color:#f5f7fb7a}.device-parts{margin:0 0 8px 52px}.device-part{display:flex;align-items:center;padding:2px 0}.device-part input[type=checkbox]{width:18px;height:18px;margin:0 8px 0 0;flex-shrink:0}.device-part .part-name{flex:1;min-width:0;padding:6px 10px;border-radius:10px;font-size:13px;background:#ffffff0d;border:1px solid transparent;color:#f5f7fb}.device-part .part-name:focus{border-color:#ffffff17;outline:none}.device-part .icon-btn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.device-part .icon-btn[disabled]{opacity:.25}.device-part.off .part-name{opacity:.45;text-decoration:line-through}.photos-count{display:flex;align-items:center;justify-content:space-between;margin:12px 0 4px;font-size:13px;color:#f5f7fbb8}.photos-count a{color:#7dd3fc;text-decoration:none}.ambient.widgets-top .glances,.ambient.widgets-bottom .glances{position:absolute;left:4vw;right:4vw;max-width:none;margin:0;justify-content:center}.ambient.widgets-top .glances{top:4vh;top:max(4vh,env(safe-area-inset-top));bottom:auto}.ambient.widgets-bottom .glances{bottom:7vh;bottom:calc(1.5vh + 48px);top:auto}.ambient.widgets-top .glance,.ambient.widgets-bottom .glance{margin:6px 5px 0}.ambient.lock-top.widgets-top{padding-top:18vh}.ambient-time,.ambient-clock,.glances{transition:color 1.2s ease}.text-contrast .ambient-time,.text-contrast .ambient-date,.text-contrast .ambient-weather,.text-contrast .aw-desc,.text-contrast .aw-desc small,.text-contrast .glance,.text-contrast .glance svg{color:inherit}.text-contrast .ambient-date{opacity:.85}.text-contrast .aw-desc,.text-contrast .aw-desc small{opacity:.8}.text-contrast .glance.lit svg{color:#fbbf24}.text-contrast.ink-dark,.text-contrast.ink-dark .ambient-time{text-shadow:0 1px 24px rgba(255,255,255,.45)}.glances.text-contrast.ink-dark .glance{background:#ffffff80;border-color:#0000001a}.glances.text-contrast.ink-dark .glance.alert{color:#fff}.ambient-clock.ink-fixed .ambient-time,.ambient-clock.ink-fixed .ambient-date,.ambient-clock.ink-fixed .ambient-weather,.ambient-clock.ink-fixed .aw-desc,.ambient-clock.ink-fixed .aw-desc small,.ambient-clock.ink-fixed .ambient-weather svg{color:inherit}.ambient-clock.ink-fixed .ambient-date{opacity:.85}.ambient-clock.ink-fixed .aw-desc,.ambient-clock.ink-fixed .aw-desc small{opacity:.8}.glances.ink-fixed .glance,.glances.ink-fixed .glance svg{color:inherit}.glances.ink-fixed .glance.lit svg{color:#fbbf24}.glances.ink-fixed .glance.alert,.glances.ink-fixed .glance.alert svg,.glances.ink-fixed .glance.warn,.glances.ink-fixed .glance.warn svg{color:#fff}.lock-color-custom{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;background:conic-gradient(#f87171,#fbbf24,#4ade80,#22d3ee,#818cf8,#f472b6,#f87171);background-color:#888}.lock-color-custom input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer;border:0;padding:0}.lock-color-custom span{color:#fff;font-weight:800;font-size:14px;text-shadow:0 0 4px rgba(0,0,0,.6);pointer-events:none}.hex-input{width:110px;height:36px;padding:0 10px;border-radius:10px;background:#ffffff14;font-family:monospace;font-size:15px}.hex-input.invalid{box-shadow:inset 0 0 0 1.5px #f87171}.lock-color-same{width:auto;padding:0 12px;border-radius:17px;font-size:13px;white-space:nowrap;flex-shrink:0;color:#fff;background:#ffffff1a}.lock-color-contrast{background:linear-gradient(135deg,#fff 50%,#111 50%)}.lock-color-contrast{padding:0}.lock-color-contrast span{display:block;color:#8c8c8c;font-size:15px;font-weight:800;line-height:30px;text-align:center}.screen-dim{position:fixed;inset:0;z-index:9000;background:#000;pointer-events:none;transition:opacity .8s ease}.screen-dim.asleep{pointer-events:auto}.ambient.lock-grid{display:block;padding:0}.ambient.lock-grid .ambient-clock,.ambient.lock-grid .glances{position:absolute;display:flex;flex-direction:column;box-sizing:border-box;max-width:none;margin:0;overflow:hidden}.ambient.lock-grid .glances{flex-direction:row;flex-wrap:wrap;align-content:flex-start}.ambient.lock-grid .glance{margin:4px}.ambient.lock-grid .ambient-clock.g-left{align-items:flex-start;text-align:left}.ambient.lock-grid .ambient-clock.g-center{align-items:center;text-align:center}.ambient.lock-grid .ambient-clock.g-right{align-items:flex-end;text-align:right}.ambient.lock-grid .ambient-clock.g-top{justify-content:flex-start}.ambient.lock-grid .ambient-clock.g-middle{justify-content:center}.ambient.lock-grid .ambient-clock.g-bottom{justify-content:flex-end}.ambient.lock-grid .g-left .ambient-weather{justify-content:flex-start}.ambient.lock-grid .g-center .ambient-weather{justify-content:center}.ambient.lock-grid .g-right .ambient-weather{justify-content:flex-end}.ambient.lock-grid .glances.g-left{justify-content:flex-start}.ambient.lock-grid .glances.g-center{justify-content:center}.ambient.lock-grid .glances.g-right{justify-content:flex-end}.ambient.lock-grid .glances.g-middle{align-content:center}.ambient.lock-grid .glances.g-bottom{align-content:flex-end}.ambient.customizing.lock-grid .ambient-clock,.ambient.customizing.lock-grid .glances{border-color:transparent;background:none;padding:0;min-height:0;min-width:0}.grid-editor{position:absolute;z-index:5;pointer-events:none;background-image:linear-gradient(to right,rgba(255,255,255,.14) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.14) 1px,transparent 1px);background-size:8.3333% 8.3333%;outline:1px solid rgba(255,255,255,.14)}.grid-box{position:absolute;box-sizing:border-box;pointer-events:auto;cursor:move;border-radius:12px;border:1.5px dashed rgba(255,255,255,.7);background:#7dd3fc1a}.grid-widgets{background:#fcd34d1a}.grid-label{position:absolute;top:6px;left:8px;font-size:12px;color:#fff;padding:2px 8px;border-radius:8px;background:#00000073}.grid-resize{position:absolute;right:-2px;bottom:-2px;width:28px;height:28px;cursor:nwse-resize;border-radius:0 0 12px;background:linear-gradient(135deg,transparent 50%,rgba(255,255,255,.85) 50%)}.lock-top-btns{display:flex;align-items:center}.lock-top-btns .pill-btn{margin-left:8px;display:inline-flex;align-items:center}.lock-top-btns .pill-btn svg{margin-right:6px}.lock-top-btns .pill-btn:not(.accent-bg){background:#ffffff24;color:#fff}.lock-top-btns .pill-btn.on:not(.accent-bg){background:#7dd3fc;color:#0b0d14}.settings-section{margin-top:18px;padding-top:14px;border-top:1px solid rgba(255,255,255,.09)}.settings-section:first-child,.migration+.settings-section{margin-top:0;padding-top:0;border-top:0}.section-title{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#f5f7fb7a;margin-bottom:10px}.lock-sec{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#f5f7fb7a;margin:14px 0 8px}.lock-panel-head+.lock-sec{margin-top:0}';
var Ue, te, En, W1, ut = 0, na = [], ce = G, V1 = ce.__b, U1 = ce.__r, Y1 = ce.diffed, G1 = ce.__c, Z1 = ce.unmount, J1 = ce.__;
function Lt(t, e) {
  ce.__h && ce.__h(te, t, ut || e), ut = 0;
  var n = te.__H || (te.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function v(t) {
  return ut = 1, ds(oa, t);
}
function ds(t, e, n) {
  var a = Lt(Ue++, 2);
  if (a.t = t, !a.__c && (a.__ = [oa(void 0, e), function(r) {
    var f = a.__N ? a.__N[0] : a.__[0], h = a.t(f, r);
    f !== h && (a.__N = [h, a.__[1]], a.__c.setState({}));
  }], a.__c = te, !te.__f)) {
    var i = function(r, f, h) {
      if (!a.__c.__H) return !0;
      var m = !1, A = a.__c.props !== r;
      if (a.__c.__H.__.some(function(u) {
        if (u.__N) {
          m = !0;
          var p = u.__[0];
          u.__ = u.__N, u.__N = void 0, p !== u.__[0] && (A = !0);
        }
      }), s) {
        var l = s.call(this, r, f, h);
        return m ? l || A : l;
      }
      return !m || A;
    };
    te.__f = !0;
    var s = te.shouldComponentUpdate, c = te.componentWillUpdate;
    te.componentWillUpdate = function(r, f, h) {
      if (this.__e) {
        var m = s;
        s = void 0, i(r, f, h), s = m;
      }
      c && c.call(this, r, f, h);
    }, te.shouldComponentUpdate = i;
  }
  return a.__N || a.__;
}
function H(t, e) {
  var n = Lt(Ue++, 3);
  !ce.__s && S1(n.__H, e) && (n.__ = t, n.u = e, te.__H.__h.push(n));
}
function kn(t, e) {
  var n = Lt(Ue++, 4);
  !ce.__s && S1(n.__H, e) && (n.__ = t, n.u = e, te.__h.push(n));
}
function ee(t) {
  return ut = 5, L1(function() {
    return { current: t };
  }, []);
}
function L1(t, e) {
  var n = Lt(Ue++, 7);
  return S1(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function fs(t, e) {
  return ut = 8, L1(function() {
    return t;
  }, e);
}
function on(t) {
  var e = te.context[t.__c], n = Lt(Ue++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(te)), e.props.value) : t.__;
}
function hs() {
  for (var t; t = na.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(Wt), e.__h.some(o1), e.__h = [];
    } catch (n) {
      e.__h = [], ce.__e(n, t.__v);
    }
  }
}
ce.__b = function(t) {
  te = null, V1 && V1(t);
}, ce.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), J1 && J1(t, e);
}, ce.__r = function(t) {
  U1 && U1(t), Ue = 0;
  var e = (te = t.__c).__H;
  e && (En === te ? (e.__h = [], te.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(Wt), e.__h.some(o1), e.__h = [], Ue = 0)), En = te;
}, ce.diffed = function(t) {
  Y1 && Y1(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (na.push(e) !== 1 && W1 === ce.requestAnimationFrame || ((W1 = ce.requestAnimationFrame) || ms)(hs)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), En = te = null;
}, ce.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(Wt), n.__h = n.__h.filter(function(a) {
        return !a.__ || o1(a);
      });
    } catch (a) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], ce.__e(a, n.__v);
    }
  }), G1 && G1(t, e);
}, ce.unmount = function(t) {
  Z1 && Z1(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(a) {
    try {
      Wt(a);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && ce.__e(e, n.__v));
};
var X1 = typeof requestAnimationFrame == "function";
function ms(t) {
  var e, n = function() {
    clearTimeout(a), X1 && cancelAnimationFrame(e), setTimeout(t);
  }, a = setTimeout(n, 35);
  X1 && (e = requestAnimationFrame(n));
}
function Wt(t) {
  var e = te, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), te = e;
}
function o1(t) {
  var e = te;
  t.__c = t.__(), te = e;
}
function S1(t, e) {
  return !t || t.length !== e.length || e.some(function(n, a) {
    return n !== t[a];
  });
}
function oa(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const aa = "photoframe.quality", Be = [];
function ia() {
  try {
    return localStorage.getItem(aa) || "auto";
  } catch {
    return "auto";
  }
}
function us(t) {
  try {
    localStorage.setItem(aa, t);
  } catch {
  }
  Be.forEach((e) => e());
}
function a1() {
  const t = navigator, e = /Android/i.test(navigator.userAgent);
  return typeof t.deviceMemory == "number" ? t.deviceMemory <= 2 ? "lite" : "full" : e && (!navigator.hardwareConcurrency || navigator.hardwareConcurrency <= 4) ? "lite" : "full";
}
function Ye() {
  const t = ia();
  return t === "auto" ? a1() : t;
}
function E1() {
  const [t, e] = v(Ye());
  return H(() => {
    const n = () => e(Ye());
    return Be.push(n), () => {
      Be.splice(Be.indexOf(n), 1);
    };
  }, []), t;
}
function As() {
  return Ye() === "lite" ? 800 : 150;
}
const at = {}, In = [], ps = 4;
function gs() {
  const t = Ye() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  let e = screen.width * t, n = screen.height * t;
  const a = Math.min(1, (Ye() === "lite" ? 1280 : 2560) / Math.max(e, n));
  return e = Math.round(e * a), n = Math.round(n * a), { w: e, h: n };
}
function bs() {
  const t = Ye() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2), e = Math.max(screen.width, screen.height) * t;
  return Math.round(Math.min(Ye() === "lite" ? 1280 : 2560, e));
}
function xs(t, e) {
  return new Promise((n) => {
    const a = new Image();
    a.onerror = () => n(t), a.onload = () => {
      const i = Math.max(a.naturalWidth, a.naturalHeight);
      if (!i || i <= e) {
        n(t);
        return;
      }
      const s = e / i, c = document.createElement("canvas");
      c.width = Math.round(a.naturalWidth * s), c.height = Math.round(a.naturalHeight * s);
      try {
        c.getContext("2d").drawImage(a, 0, 0, c.width, c.height), c.toBlob((r) => {
          c.width = c.height = 0, n(r ? URL.createObjectURL(r) : t);
        }, "image/jpeg", 0.85);
      } catch {
        n(t);
      }
    }, a.src = t;
  });
}
function $1(t) {
  if (!t || /^(data|blob):/.test(t) || !HTMLCanvasElement.prototype.toBlob || t.indexOf("/api/photoframe/photo/") !== -1) return Promise.resolve(t);
  const e = bs(), n = t + "@" + e;
  if (n in at) return at[n];
  const a = xs(t, e);
  for (at[n] = a, In.push(n); In.length > ps; ) {
    const i = In.shift(), s = at[i];
    delete at[i], s.then((c) => {
      /^blob:/.test(c) && URL.revokeObjectURL(c);
    });
  }
  return a;
}
const sa = "photoframe.fit";
function an() {
  try {
    return localStorage.getItem(sa) || "auto";
  } catch {
    return "auto";
  }
}
function ys(t) {
  try {
    localStorage.setItem(sa, t);
  } catch {
  }
  Be.forEach((e) => e());
}
function vs() {
  const [t, e] = v(an());
  return H(() => {
    const n = () => e(an());
    return Be.push(n), () => {
      Be.splice(Be.indexOf(n), 1);
    };
  }, []), t;
}
function ks(t, e) {
  const n = an();
  return !t || !e || n === "cover" ? !1 : n === "contain" ? !0 : t >= e != window.innerWidth >= window.innerHeight;
}
class I1 {
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
    this.emitTimer || (this.emitTimer = window.setTimeout(() => this.emitNow(), As()));
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
    let a;
    try {
      a = new WebSocket(n);
    } catch {
      this.scheduleReconnect();
      return;
    }
    this.ws = a, a.onmessage = (i) => {
      const s = JSON.parse(i.data);
      if (s.type === "auth_required")
        a.send(JSON.stringify({ type: "auth", access_token: e }));
      else if (s.type === "auth_invalid")
        this.stopped = !0, this.setStatus("auth_invalid"), a.close();
      else if (s.type === "auth_ok")
        this.setStatus("connected"), this.call({ type: "auth/current_user" }).then((c) => {
          this.admin = !!c.is_admin, this.emit();
        }, () => {
        }), this.send({ type: "subscribe_events", event_type: "state_changed" }), this.call({ type: "get_states" }).then((c) => {
          const r = {};
          c.forEach((f) => {
            r[f.entity_id] = f;
          }), this.states = r, this.changed = null, this.loaded = !0, this.emit(), this.loadRegistry();
        }, () => {
        });
      else if (s.type === "result") {
        const c = this.pending[s.id];
        c && (delete this.pending[s.id], s.success ? c.resolve(s.result) : c.reject(new Error(s.error && s.error.message || "HA error")));
      } else if (s.type === "event" && this.subs[s.id])
        this.subs[s.id](s.event);
      else if (s.type === "event" && s.event.event_type === "state_changed") {
        const c = s.event.data.new_state;
        c && ((this.changed || (this.changed = {}))[c.entity_id] = c, this.emit());
      }
    }, a.onclose = () => {
      this.ws === a && (this.ws = null), Object.keys(this.pending).forEach((i) => this.pending[+i].reject(new Error("disconnected"))), this.pending = {}, this.subs = {}, this.stopped || (this.setStatus("disconnected"), this.scheduleReconnect());
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
      const n = {}, a = {};
      e.entities.forEach((i) => {
        if (n[i.ei] = i, !i.di) return;
        const s = a[i.di] || (a[i.di] = { id: i.di, name: "", entities: [] });
        s.entities.push(i.ei);
        const c = this.states[i.ei], r = c && String(c.attributes.friendly_name || "");
        r && !s.name && (s.name = i.en && r.length > i.en.length && r.slice(-i.en.length) === i.en ? r.slice(0, -i.en.length).trim() : i.en ? "" : r);
      }), this.registry = n, this.devices = a, this.emit();
    }, () => {
    });
  }
  // Подписка: onEvent вызывается на каждое событие, пока не отпишутся. После переподключения
  // подписки пропадают — компоненты подписываются заново по смене status.
  subscribeMessage(e, n) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return () => {
    };
    const a = this.msgId++, i = this.ws;
    return this.subs[a] = n, i.send(JSON.stringify({ id: a, ...e })), () => {
      delete this.subs[a], i.readyState === WebSocket.OPEN && i.send(JSON.stringify({ id: this.msgId++, type: "unsubscribe_events", subscription: a }));
    };
  }
  // Запрос с ответом: история, статистика, реестр сущностей.
  call(e) {
    return new Promise((n, a) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        a(new Error("not connected"));
        return;
      }
      const i = this.msgId++;
      this.pending[i] = { resolve: n, reject: a }, this.ws.send(JSON.stringify({ id: i, ...e }));
    });
  }
  callService(e, n, a) {
    return this.send({
      type: "call_service",
      domain: e.split(".")[0],
      service: n,
      target: { entity_id: e },
      ...a ? { service_data: a } : {}
    });
  }
  // Обложки и картинки сущностей. Внешние (обложки Яндекс Музыки) — как есть, HA-шные
  // (/api/media_player_proxy/…?token=…) уже подписаны токеном сущности — нужен только адрес HA.
  pictureUrl(e) {
    return this.resolveUrl(e || "");
  }
  // Запрос к REST API HA с авторизацией (загрузка фото в медиатеку). XHR, а не fetch: fetch нет в Chrome 37.
  fetch(e, n = {}) {
    return this.token().then((a) => new Promise((i, s) => {
      const c = new XMLHttpRequest();
      c.open(n.method || "GET", this.baseUrl.replace(/\/+$/, "") + e), c.setRequestHeader("Authorization", "Bearer " + a), c.onload = () => i({ ok: c.status >= 200 && c.status < 300, status: c.status }), c.onerror = () => s(new Error("network")), c.send(n.body || null);
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
    const n = this.states[e], a = n && n.attributes.access_token;
    return a ? this.baseUrl.replace(/\/+$/, "") + "/api/camera_proxy_stream/" + e + "?token=" + a : "";
  }
  // Один кадр камеры: entity_picture в HA уже подписан и обновляется сам; иначе — camera_proxy с токеном.
  cameraSnapshotUrl(e) {
    const n = this.states[e];
    if (!n) return "";
    const a = n.attributes.entity_picture;
    if (a) return this.resolveUrl(a);
    const i = n.attributes.access_token;
    return i ? this.baseUrl.replace(/\/+$/, "") + "/api/camera_proxy/" + e + "?token=" + i : "";
  }
}
const ca = vn(null), i1 = vn(!0);
function ae() {
  const t = on(ca), e = on(i1), [, n] = v(0), a = ee(!1);
  return H(() => {
    if (!e) {
      a.current = !0;
      return;
    }
    return a.current && (a.current = !1, n((i) => i + 1)), t.subscribe(() => n((i) => i + 1));
  }, [t, e]), t;
}
function wn(t) {
  return t === "on" || t === "open" || t === "playing";
}
function At(t) {
  return t === void 0 || t === "unavailable" || t === "unknown";
}
function Ge(t, e) {
  if (t.status !== "connected" || !t.loaded) return !0;
  const n = t.states[e];
  return !!n && n.state !== "unavailable";
}
function Ne(t, e) {
  const n = e ? t.states[e] : void 0;
  return n && !At(n.state) ? n.state : void 0;
}
function Vt(t, e = 1) {
  return t === void 0 || isNaN(parseFloat(t)) ? "--" : parseFloat(t).toFixed(e);
}
function sn(t, e) {
  const n = t.states[e];
  return n && n.attributes.unit_of_measurement ? " " + n.attributes.unit_of_measurement : "";
}
const ra = vn(() => {
});
function _n() {
  return on(ra);
}
const ws = "English", _s = {
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
  _language: ws,
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
  "camera.loading": "Loading stream…",
  "camera.play": "Start stream",
  "camera.play_hint": "Stream paused — press ▶",
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
  "editor.choose_icon": "Choose icon",
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
  "editor.icon_default": "default",
  "editor.icon_pick": "Icon",
  "editor.icon_search": "Search icons",
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
  "icons.group.appliances": "Appliances",
  "icons.group.climate": "Climate and weather",
  "icons.group.home": "Home and furniture",
  "icons.group.light": "Light and power",
  "icons.group.lucide": "Basics",
  "icons.group.media": "Media and devices",
  "icons.group.other": "Other",
  "icons.group.regular": "Outline",
  "icons.group.security": "Security",
  "icons.group.sensors": "Sensors",
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
  "settings.cameras": "Cameras on this device",
  "settings.cameras_auto": "Auto ({mode})",
  "settings.cameras_live": "Live video right away",
  "settings.cameras_paused": "Start paused — still frame first",
  "settings.cameras_snapshot": "Snapshot only, no video",
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
  "photos.folder": "Folder on the frame",
  "photos.folder_all": "Whole folder",
  "photos.folder_title": "Photo folder",
  "photos.folder_hint": "The frame shows photos from the selected HA media folder. The choice is stored on this device — another frame can use a different folder.",
  "photos.folder_count": "{n} photos",
  "photos.folder_loading": "Reading folders…",
  "photos.folder_empty": "No subfolders yet — upload photos or create a folder in the HA media library.",
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
}, zs = "Русский", Ms = {
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
  _language: zs,
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
  "camera.loading": "Загрузка потока…",
  "camera.play": "Включить трансляцию",
  "camera.play_hint": "Трансляция на паузе — нажмите ▶",
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
  "editor.choose_icon": "Выбрать иконку",
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
  "editor.icon_default": "по умолчанию",
  "editor.icon_pick": "Иконка",
  "editor.icon_search": "Поиск иконки",
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
  "icons.group.appliances": "Бытовая техника",
  "icons.group.climate": "Климат и погода",
  "icons.group.home": "Дом и мебель",
  "icons.group.light": "Свет и питание",
  "icons.group.lucide": "Основные",
  "icons.group.media": "Медиа и техника",
  "icons.group.other": "Разное",
  "icons.group.regular": "Контурные",
  "icons.group.security": "Безопасность",
  "icons.group.sensors": "Датчики",
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
  "settings.cameras": "Камеры на этом устройстве",
  "settings.cameras_auto": "Авто ({mode})",
  "settings.cameras_live": "Видео сразу",
  "settings.cameras_paused": "С паузы — сначала кадр",
  "settings.cameras_snapshot": "Только снимок, без видео",
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
  "photos.folder": "Папка на рамке",
  "photos.folder_all": "Вся папка",
  "photos.folder_title": "Папка с фото",
  "photos.folder_hint": "Рамка показывает фото из выбранной папки медиатеки HA. Выбор запоминается у этого устройства — на другой рамке может быть другая папка.",
  "photos.folder_count": "{n} фото",
  "photos.folder_loading": "Читаю папки…",
  "photos.folder_empty": "В папке фото пока нет подпапок — загрузите фото или создайте папку в медиатеке HA.",
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
}, K1 = /* @__PURE__ */ Object.assign({ "./locales/en.json": _s, "./locales/ru.json": Ms }), Ie = {};
Object.keys(K1).forEach((t) => {
  const e = t.replace(/^.*\/([^/]+)\.json$/, "$1");
  Ie[e] = K1[t];
});
const cn = "en", la = "photoframe.language";
let pt = cn;
const Ut = [];
function Cs() {
  return Object.keys(Ie).sort().map((t) => ({ code: t, name: Ie[t]._language || t }));
}
function Nn(t) {
  if (!t) return null;
  if (Ie[t]) return t;
  const e = t.split(/[-_]/)[0].toLowerCase();
  return Ie[e] ? e : null;
}
function da() {
  try {
    return localStorage.getItem(la) || "";
  } catch {
    return "";
  }
}
function Ls(t) {
  try {
    localStorage.setItem(la, t);
  } catch {
  }
}
let eo;
function zn(t) {
  t && (eo = t);
  const e = Nn(da()) || Nn(eo) || Nn(navigator.language) || cn;
  e !== pt && (pt = e, Ut.forEach((n) => n()));
}
function d(t, e) {
  let n = Ie[pt] && Ie[pt][t] || Ie[cn] && Ie[cn][t] || t;
  return e && Object.keys(e).forEach((a) => {
    n = n.split("{" + a + "}").join(String(e[a]));
  }), n;
}
function nt(t) {
  return d(t).split(",").map((e) => e.trim());
}
zn();
function Ss() {
  const [, t] = v(0);
  return H(() => {
    const e = () => t((n) => n + 1);
    return Ut.push(e), () => {
      Ut.splice(Ut.indexOf(e), 1);
    };
  }, []), pt;
}
const Ze = 12, Es = 2, fa = 2, et = 4, rn = {
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
function ha(t) {
  return d("card." + t + ".hint");
}
const ft = {
  amber: "#fbbf24",
  sky: "#7dd3fc",
  green: "#34d399",
  pink: "#f9a8d4",
  violet: "#c4b5fd",
  red: "#fb7185"
};
let ma = 0;
function Is() {
  return "c" + Date.now().toString(36) + (ma++).toString(36);
}
function ua() {
  return {
    cols: Ze,
    cards: [
      { id: "climate", type: "climate", title: "", icon: "thermometer", x: 0, y: 0, w: 3, h: 6, chip: !0, items: [] },
      { id: "lights", type: "switches", title: "", icon: "lightbulb", x: 3, y: 0, w: 6, h: 6, chip: !0, color: "amber", items: [] },
      { id: "weather", type: "weather", title: "", icon: "cloud-sun", x: 9, y: 0, w: 3, h: 3, chip: !0, items: [] },
      { id: "home", type: "sensors", title: "", icon: "shield", x: 9, y: 3, w: 3, h: 3, chip: !0, items: [] }
    ]
  };
}
function to(t, e) {
  return t.x < e.x + e.w && e.x < t.x + t.w && t.y < e.y + e.h && e.y < t.y + t.h;
}
function s1(t, e) {
  return t.y - e.y || t.x - e.x;
}
function bt(t, e = Ze) {
  const n = Math.max(Es, Math.min(e, Math.round(t.w))), a = Math.max(fa, Math.round(t.h));
  return { ...t, w: n, h: a, x: Math.max(0, Math.min(e - n, Math.round(t.x))), y: Math.max(0, Math.round(t.y)) };
}
function qe(t, e) {
  const n = [];
  e && n.push(e), t.filter((s) => !e || s.id !== e.id).slice().sort(s1).forEach((s) => {
    let c = s.y;
    for (let r = 0; r < 500; r++) {
      const f = n.filter((h) => to({ ...s, y: c }, h));
      if (!f.length) break;
      c = Math.max.apply(null, f.map((h) => h.y + h.h));
    }
    n.push({ ...s, y: c });
  });
  const i = [];
  return n.slice().sort((s, c) => s1(s, c) || (e && s.id === e.id ? -1 : 0)).forEach((s) => {
    let c = s.y;
    for (; c > 0 && !i.some((r) => to({ ...s, y: c - 1 }, r)); ) c--;
    i.push({ ...s, y: c });
  }), t.map((s) => i.filter((c) => c.id === s.id)[0]);
}
function c1(t) {
  return t.reduce((e, n) => Math.max(e, n.y + n.h), 0);
}
function Se(t, e) {
  const n = t, i = (n && Array.isArray(n.screens) ? n.screens : n && Array.isArray(n.cards) ? [n] : []).filter((s) => s && Array.isArray(s.cards)).map((s, c) => ({ ...Ds(s), id: String(s.id || (c ? "s" + c : "main")), name: String(s.name || "") }));
  return i.length ? i : [{ ...e ? e() : { cols: Ze, cards: [] }, id: "main", name: "" }];
}
function Ns() {
  return "s" + Date.now().toString(36) + (ma++).toString(36);
}
function Yt(t, e) {
  return t.name || d("screen.default", { n: e + 1 });
}
function Ds(t) {
  if (t.cols === Ze) return no(t);
  const e = [], n = (i, s, c, r) => {
    for (let f = s; f < s + r; f++) for (let h = i; h < i + c; h++) if (e[f] && e[f][h]) return !1;
    return !0;
  }, a = t.cards.map((i) => {
    const s = Math.min(i.w || 1, 4), c = i.h || 1;
    for (let r = 0; ; r++)
      for (let f = 0; f + s <= 4; f++)
        if (n(f, r, s, c)) {
          for (let h = r; h < r + c; h++) {
            e[h] = e[h] || [];
            for (let m = f; m < f + s; m++) e[h][m] = !0;
          }
          return { ...i, x: f * 3, y: r * 3, w: s * 3, h: c * 3 };
        }
  });
  return no({ ...t, cols: Ze, cards: a });
}
function no(t) {
  const e = (i) => typeof i == "number" && isFinite(i);
  let n = t.cards.reduce((i, s) => e(s.y) && e(s.h) ? Math.max(i, s.y + s.h) : i, 0);
  const a = t.cards.map((i) => {
    const s = e(i.w) ? i.w : 3, c = e(i.h) ? i.h : 3;
    if (e(i.x) && e(i.y)) return bt({ ...i, w: s, h: c });
    const r = bt({ ...i, x: 0, y: n, w: s, h: c });
    return n += r.h, r;
  });
  return { ...t, cols: Ze, cards: qe(a) };
}
function Bs(t) {
  const e = t.slice().sort(s1), n = e.filter((s) => s.m && !s.m.hide).map((s) => bt({ ...s, x: s.m.x, y: s.m.y, w: s.m.w, h: s.m.h }, et));
  let a = c1(n);
  const i = e.filter((s) => !s.m).map((s) => {
    const c = Math.max(fa, Math.min(et, Math.round(s.h * 2 / 3))), r = { ...s, x: 0, y: a, w: et, h: c };
    return a += c, r;
  });
  return qe(n.concat(i));
}
function Dn(t, e) {
  return t.map((n) => {
    const a = e.filter((i) => i.id === n.id)[0];
    return a ? { ...n, m: { x: a.x, y: a.y, w: a.w, h: a.h } } : n;
  });
}
const Ts = "photoframe", xt = "photos", Ps = 1920;
function Aa() {
  return new Promise((t, e) => {
    const n = indexedDB.open(Ts, 1);
    n.onupgradeneeded = () => n.result.createObjectStore(xt, { keyPath: "id", autoIncrement: !0 }), n.onsuccess = () => t(n.result), n.onerror = () => e(n.error);
  });
}
function N1(t, e) {
  return Aa().then((n) => new Promise((a, i) => {
    const s = e(n.transaction(xt, t).objectStore(xt));
    s.onsuccess = () => a(s.result), s.onerror = () => i(s.error);
  }));
}
function Bn() {
  return Aa().then((t) => new Promise((e, n) => {
    const a = [], i = t.transaction(xt, "readonly").objectStore(xt).openCursor();
    i.onsuccess = () => {
      const s = i.result;
      s ? (a.push(s.value), s.continue()) : e(a);
    }, i.onerror = () => n(i.error);
  }));
}
function Os(t) {
  return N1("readwrite", (e) => e.delete(t));
}
function oo() {
  return N1("readwrite", (t) => t.clear());
}
function pa(t) {
  return new Promise((e, n) => {
    const a = new FileReader();
    a.onerror = () => n(a.error), a.onload = () => {
      const i = new Image();
      i.onerror = () => n(new Error(d("errors.decode", { name: t.name }))), i.onload = () => {
        const s = Math.min(1, Ps / Math.max(i.width, i.height)), c = document.createElement("canvas");
        c.width = Math.round(i.width * s), c.height = Math.round(i.height * s), c.getContext("2d").drawImage(i, 0, 0, c.width, c.height);
        const r = c.toDataURL("image/jpeg", 0.85);
        c.width = c.height = 0, e(r);
      }, i.src = a.result;
    }, a.readAsDataURL(t);
  });
}
function Hs(t) {
  return pa(t).then((e) => N1("readwrite", (n) => n.add({ data: e }))).then(() => {
  });
}
const ao = "photoframe.frameId", ga = "photoframe.frameName";
function ba(t) {
  try {
    return localStorage.getItem(t) || "";
  } catch {
    return "";
  }
}
function xa(t, e) {
  try {
    localStorage.setItem(t, e);
  } catch {
  }
}
function St() {
  let t = ba(ao);
  if (!t) {
    for (t = ""; t.length < 16; ) t += Math.floor(Math.random() * 16).toString(16);
    xa(ao, t);
  }
  return t;
}
function yt() {
  return ba(ga);
}
function io(t) {
  xa(ga, t);
}
function Fs() {
  const t = navigator.userAgent;
  return /SmartFrame\//.test(t) ? "Android (APK)" : /iPad|iPhone|iPod/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : "Browser";
}
const ya = () => window.SmartFrame;
function so() {
  const t = ya();
  try {
    return t && t.getApkVersion ? t.getApkVersion() : "";
  } catch {
    return "";
  }
}
function js() {
  const t = ya();
  try {
    t && t.updateApk && t.updateApk(location.protocol + "//" + location.host + "/photoframe/photoframe.apk");
  } catch {
  }
}
function Rs(t, e) {
  const n = { type: "photoframe/frame/connect", frame_id: St(), model: Fs(), version: "1.0.0" };
  return yt() && (n.name = yt()), so() && (n.apk = so()), t.subscribeMessage(n, e);
}
function ht(t, e) {
  t.call({ type: "photoframe/frame/report", frame_id: St(), ...e }).catch(() => {
  });
}
const vt = "custom:photoframe-card";
function D1(t) {
  if (!t || typeof t != "object") return null;
  if (t.type === vt) return t;
  const e = [t.views, t.cards, t.sections, t.card ? [t.card] : null];
  for (const n of e)
    if (Array.isArray(n))
      for (const a of n) {
        const i = D1(a);
        if (i) return i;
      }
  return null;
}
function qs() {
  const t = location.pathname.split("/")[1] || "lovelace";
  return t === "lovelace" ? null : t;
}
function va(t) {
  return t.call({ type: "photoframe/config" }).then((e) => ({ ...e, type: vt }), () => null);
}
function Qs(t, e) {
  return t.call({ type: "lovelace/config", url_path: e }).then(
    (n) => D1(n),
    (n) => {
      if (/not found|config_not_found|No config/i.test(n.message)) return null;
      throw n;
    }
  );
}
class ln {
  // dashboard — путь дашборда с карточкой; не задан — тот, на котором открыта карточка.
  // standalone — это PWA со своим подключением к HA, а не карточка внутри фронтенда HA.
  // integration — данные в интеграции Photo Frame (photoframe/config/*), а не в конфиге дашборда.
  constructor(e, n, a, i = !1, s = !1) {
    this.client = e, this.config = n, this.dashboard = a, this.standalone = i, this.integration = s, this.album = "", this.sourceJob = null, this.queue = Promise.resolve(), this.saving = 0;
  }
  // Папка медиатеки внутри папки фото (для дерева в настройках): путь, фото в ней и во всех подпапках.
  folderTree() {
    return this.integration ? this.client.call({ type: "photoframe/folders" }).then((e) => e.folders || [], () => []) : Promise.resolve([]);
  }
  // Выбранная на рамке папка — запоминается у её устройства в HA; all (пусто) — вся папка фото.
  setAlbum(e) {
    return this.album = e && e !== "all" ? e : "all", this.integration ? this.client.call({ type: "photoframe/frame/album", frame_id: St(), album: this.album }).then(() => {
    }, (n) => {
      throw n;
    }) : Promise.resolve();
  }
  get folder() {
    const e = (this.config.media_folder || "photoframe").replace(/^\/+|\/+$/g, "");
    return this.album && this.album !== "all" ? e + "/" + this.album : e;
  }
  source() {
    return this.config.media_source ? Promise.resolve(this.config.media_source) : (this.sourceJob || (this.sourceJob = this.client.call({ type: "media_source/browse_media", media_content_id: "media-source://media_source" }).then((e) => {
      const a = [e.media_content_id || ""].concat((e.children || []).map((i) => i.media_content_id)).map((i) => (/^media-source:\/\/media_source\/([^/]+)\//.exec(i) || [])[1]).filter(Boolean);
      return a.indexOf("local") !== -1 ? "local" : a[0] || "local";
    }, () => "local")), this.sourceJob);
  }
  // Ссылка на папку фото (или альбом) в медиатеке HA — там их смотрят, удаляют и раскладывают.
  mediaBrowserUrl(e) {
    return this.source().then((n) => {
      const a = "media-source://media_source/" + n + "/" + (this.config.media_folder || "photoframe").replace(/^\/+|\/+$/g, ""), i = ["app,media-source://media_source", "," + a];
      return e && e !== "all" && i.push("," + a + "/" + e), this.client.resolveUrl("/media-browser/browser/" + i.map(encodeURIComponent).join("/"));
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
      this.busy || (this.config = { ...n, type: vt }, e(this.config));
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
        const c = { type: "photoframe/config/save" };
        return ["homes", "layouts", "settings"].forEach((r) => {
          r in e && (c[r] = e[r]);
        }), this.config = { ...this.config, ...e }, this.client.call(c);
      }
      const s = this.dashboard !== void 0 ? this.dashboard : qs();
      return this.client.call({ type: "lovelace/config", url_path: s }).then((c) => {
        const r = D1(c);
        if (!r) throw new Error(d("errors.card_not_found", { type: vt }));
        return Object.keys(e).forEach((f) => {
          r[f] = e[f];
        }), this.config = { ...this.config, ...e }, this.client.call({ type: "lovelace/config/save", url_path: s, config: c });
      });
    }, a = this.queue.then(n, n), i = () => {
      this.saving--;
    };
    return a.then(i, i), this.queue = a.catch(() => {
    }), a;
  }
  // Только id фото в папке (без подписанных ссылок) — дёшево проверить, не поменялся ли набор.
  // С интеграцией фото готовит сервер: список альбома со ссылками на кадры под размер этого экрана.
  integrationPhotos() {
    const e = gs();
    return this.client.call({
      type: "photoframe/photos",
      album: this.album || "all",
      width: e.w,
      height: e.h
    }).then((n) => n.photos.map((a) => ({ id: a.id, url: this.client.resolveUrl(a.url) })));
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
      const n = (e.children || []).filter((a) => a.media_class === "image");
      return Promise.all(n.map((a) => this.client.call({
        type: "media_source/resolve_media",
        media_content_id: a.media_content_id,
        expires: 86400
      }).then((i) => ({ id: a.media_content_id, url: this.client.resolveUrl(i.url) }))));
    }, () => {
      throw new Error(d("errors.upload_folder", { folder: this.folder }));
    });
  }
  // album: куда загрузить (подпапка); не задан — альбом этой рамки, а «все» — корень папки фото.
  addPhoto(e, n) {
    if (this.integration) {
      const a = new FormData();
      return a.append("album", n ?? (this.album && this.album !== "all" ? this.album : "")), a.append("file", e, e.name), this.client.fetch("/api/photoframe/upload", { method: "POST", body: a }).then((i) => {
        if (!i.ok)
          throw i.status === 401 || i.status === 403 ? new Error(d("errors.upload_admin")) : i.status === 415 ? new Error(d("errors.decode", { name: e.name })) : new Error(d("errors.upload", { status: i.status }));
      });
    }
    return pa(e).then((a) => this.addPhotoData(a, e.name.replace(/\.[^.]+$/, "") + ".jpg"));
  }
  // Уже уменьшенный кадр (dataURL JPEG) — так же лежат фото, загруженные в браузер до перехода на HA.
  addPhotoData(e, n) {
    return this.folderId().then((a) => {
      const i = atob(e.split(",")[1]), s = new Uint8Array(i.length);
      for (let r = 0; r < i.length; r++) s[r] = i.charCodeAt(r);
      const c = new FormData();
      return c.append("media_content_id", a), c.append("file", new Blob([s], { type: "image/jpeg" }), n), this.client.fetch("/api/media_source/local_source/upload", { method: "POST", body: c }).then((r) => {
        if (!r.ok)
          throw r.status === 401 || r.status === 403 ? new Error(d("errors.upload_admin")) : r.status === 400 || r.status === 404 ? new Error(d("errors.upload_folder", { folder: this.folder })) : new Error(d("errors.upload", { status: r.status }));
      });
    });
  }
  deletePhoto(e) {
    return this.client.call({ type: "media_source/local_source/remove", media_content_id: e });
  }
}
function ka() {
  try {
    if (window.parent === window) return null;
    const t = window.parent.document.querySelector("home-assistant");
    return t && t.hass && t.hass.auth || null;
  } catch {
    return null;
  }
}
const dn = "photoframe.haAuth", Ws = "hassTokens";
function r1(t) {
  try {
    const e = localStorage.getItem(t), n = e ? JSON.parse(e) : null;
    return n && n.hassUrl && n.refresh_token ? n : null;
  } catch {
    return null;
  }
}
function l1(t) {
  try {
    t ? localStorage.setItem(dn, JSON.stringify(t)) : localStorage.removeItem(dn);
  } catch {
  }
}
function fn(t) {
  return t.replace(/\/+$/, "");
}
function Vs() {
  return location.protocol + "//" + location.host + "/";
}
function Us() {
  return location.protocol + "//" + location.host + location.pathname;
}
function hn() {
  if (ka())
    return { hassUrl: location.protocol + "//" + location.host, clientId: "", access_token: "", refresh_token: "", expires: 0, embedded: !0 };
  const t = r1(dn);
  if (t) return t;
  const e = r1(Ws);
  return e && fn(e.hassUrl) === fn(location.protocol + "//" + location.host) ? e : null;
}
function Ys() {
  l1(null);
}
function Gs(t, e) {
  return new Promise((n, a) => {
    const i = new XMLHttpRequest();
    i.open("POST", fn(t) + "/auth/token"), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.timeout = 15e3, i.onload = () => {
      if (i.status >= 200 && i.status < 300)
        try {
          n(JSON.parse(i.responseText));
        } catch (s) {
          a(s);
        }
      else a(new Error("auth " + i.status));
    }, i.onerror = i.ontimeout = () => a(new Error("network")), i.send(Object.keys(e).map((s) => s + "=" + encodeURIComponent(e[s])).join("&"));
  });
}
function Zs() {
  const t = ka();
  if (t) return (t.expired ? t.refreshAccessToken() : Promise.resolve()).then(() => t.accessToken);
  const e = hn();
  return e ? e.expires > Date.now() + 6e4 ? Promise.resolve(e.access_token) : Gs(e.hassUrl, { grant_type: "refresh_token", refresh_token: e.refresh_token, client_id: e.clientId }).then(
    (n) => {
      const a = { ...e, access_token: n.access_token, expires: Date.now() + n.expires_in * 1e3 };
      return l1(a), a.access_token;
    },
    (n) => {
      if (/auth 4/.test(n.message))
        return r1(dn) && l1(null), "";
      throw n;
    }
  ) : Promise.resolve("");
}
function Js(t) {
  const e = fn(t || location.protocol + "//" + location.host);
  location.href = e + "/auth/authorize?response_type=code&client_id=" + encodeURIComponent(Vs()) + "&redirect_uri=" + encodeURIComponent(Us()) + "&state=" + encodeURIComponent(e);
}
const wa = "photoframe.setup", Qe = "photo-frame";
function Xs(t) {
  const e = Date.now();
  return new Promise((n) => {
    const a = () => {
      const i = document.querySelector("home-assistant");
      if (i && i.hass && i.hass.user) return n(i.hass);
      if (Date.now() - e > t) return n(null);
      setTimeout(a, 1e3);
    };
    a();
  });
}
function d1(t) {
  try {
    localStorage.setItem(wa, t);
  } catch {
  }
}
function $s(t) {
  history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function _a(t) {
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
    config: { title: e, views: [{ title: e, path: "frame", type: "panel", cards: [{ type: vt, media_folder: "photoframe" }] }] }
  })).then(() => "/" + Qe + "/frame");
}
function Ks(t) {
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
  const a = document.createElement("div");
  a.setAttribute("style", "margin:6px 0 12px;color:rgba(245,247,251,.72)"), a.textContent = d("setup.text");
  const i = document.createElement("div");
  i.setAttribute("style", "display:flex;justify-content:flex-end;gap:8px");
  const s = (f, h) => {
    const m = document.createElement("button");
    return m.textContent = f, m.setAttribute("style", "border:0;border-radius:10px;padding:8px 14px;font:inherit;font-weight:600;cursor:pointer;" + (h ? "background:#7dd3fc;color:#0b0d14" : "background:rgba(255,255,255,.1);color:#f5f7fb")), i.appendChild(m), m;
  }, c = s(d("setup.later"), !1), r = s(d("setup.create"), !0);
  e.appendChild(n), e.appendChild(a), e.appendChild(i), document.body.appendChild(e), c.onclick = () => {
    d1("dismissed"), e.remove();
  }, r.onclick = () => {
    r.disabled = !0, r.textContent = d("common.loading"), _a((f) => t.callWS(f)).then((f) => {
      d1("done"), e.remove(), $s(f);
    }, (f) => {
      r.disabled = !1, r.textContent = d("setup.create"), a.textContent = d("setup.failed", { error: f && f.message || String(f) });
    });
  };
}
function ec() {
  try {
    if (localStorage.getItem(wa)) return;
  } catch {
    return;
  }
  Xs(3e4).then((t) => {
    if (!(!t || !t.user || !t.user.is_admin))
      return zn(t.language), t.callWS({ type: "lovelace/dashboards/list" }).then((e) => {
        if (e.some((n) => n.url_path === Qe)) {
          d1("done");
          return;
        }
        Ks(t);
      });
  }).catch(() => {
  });
}
const co = "photoframe.preview", f1 = (() => {
  const t = /[?&]preview=1\b/.test(location.search);
  try {
    return t && sessionStorage.setItem(co, "1"), sessionStorage.getItem(co) === "1";
  } catch {
    return t;
  }
})(), K = 12, za = { thin: 200, light: 300, regular: 500, bold: 700 }, Ma = {
  white: "#ffffff",
  contrast: "",
  accent: "",
  warm: "#fcd34d",
  mint: "#6ee7b7",
  sky: "#7dd3fc",
  rose: "#fda4af",
  custom: ""
}, rt = /^#[0-9a-f]{6}$/i;
function ro(t, e) {
  return t === "custom" ? rt.test(e) ? e : "" : Ma[t];
}
const Ca = "photoframe.lockscreen", La = "photoframe.hiddenChips", We = [];
function lt() {
  return { font: "thin", color: "white", widgetsColor: "", customColor: "#ffb86b", widgetsCustomColor: "#ffb86b", size: "m", layout: "auto", date: !0, datePos: "auto", weather: !0, chipStyle: "auto", widgetsPos: "clock", hidden: [], order: [], grid: null, gridPortrait: null, gridRev: 0 };
}
function kt() {
  try {
    const t = localStorage.getItem(Ca);
    if (t) return { ...lt(), ...JSON.parse(t) };
    const e = localStorage.getItem(La);
    return e ? { ...lt(), hidden: JSON.parse(e) } : lt();
  } catch {
    return lt();
  }
}
function re(t) {
  try {
    localStorage.setItem(Ca, JSON.stringify({ ...kt(), ...t })), localStorage.removeItem(La);
  } catch {
  }
  We.forEach((e) => e());
}
function tc(t) {
  return We.push(t), () => {
    We.splice(We.indexOf(t), 1);
  };
}
function Sa() {
  const [, t] = v(0);
  return H(() => {
    const e = () => t((n) => n + 1);
    return We.push(e), () => {
      We.splice(We.indexOf(e), 1);
    };
  }, []), kt();
}
function nc(t, e) {
  const n = (a) => {
    const i = e.order.indexOf(a);
    return i === -1 ? 1e6 : i;
  };
  return t.map((a, i) => ({ c: a, i })).sort((a, i) => n(a.c.id) - n(i.c.id) || a.i - i.i).map((a) => a.c);
}
function Ea(t, e) {
  const n = t.layout === "auto" ? e ? "corner" : "center" : t.layout, a = n === "top" ? { x: 2, y: 1, w: 8, h: 4 } : n === "corner" ? { x: 0, y: 6, w: 6, h: 5 } : { x: 2, y: 6, w: 8, h: 4 }, i = t.widgetsPos === "top" ? { x: 2, y: 0, w: 8, h: 1 } : t.widgetsPos === "bottom" ? { x: 2, y: 10, w: 8, h: 1 } : n === "corner" ? { x: 6, y: 10, w: 6, h: 1 } : { x: 2, y: a.y + a.h, w: 8, h: 1 };
  return { clock: a, widgets: i };
}
function h1(t) {
  const e = Math.max(1, Math.min(K, Math.round(t.w))), n = Math.max(1, Math.min(K, Math.round(t.h))), a = { w: e, h: n, x: Math.max(0, Math.min(K - e, Math.round(t.x))), y: Math.max(0, Math.min(K - n, Math.round(t.y))) };
  return (t.ha === "left" || t.ha === "center" || t.ha === "right") && (a.ha = t.ha), (t.va === "top" || t.va === "middle" || t.va === "bottom") && (a.va = t.va), a;
}
function Re(t) {
  const e = t, n = (a) => a && [a.x, a.y, a.w, a.h].every((i) => typeof i == "number" && isFinite(i));
  return e && n(e.clock) && n(e.widgets) ? { clock: h1(e.clock), widgets: h1(e.widgets) } : null;
}
function lo() {
  return window.innerHeight > window.innerWidth ? "portrait" : "landscape";
}
function Ia() {
  const [t, e] = v(lo());
  return H(() => {
    const n = () => e(lo());
    return window.addEventListener("resize", n), window.addEventListener("orientationchange", n), () => {
      window.removeEventListener("resize", n), window.removeEventListener("orientationchange", n);
    };
  }, []), t;
}
function Na(t, e) {
  return e === "portrait" ? t.gridPortrait : t.grid;
}
function m1(t, e) {
  return t === "portrait" ? { gridPortrait: e } : { grid: e };
}
const Da = [
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
function oc(t) {
  const e = {};
  return Da.forEach((n) => {
    e[n] = t[n];
  }), e;
}
function B1(t) {
  const e = t || {}, n = lt(), a = {};
  return Da.forEach((i) => {
    if (!(i in e)) return;
    const s = e[i];
    i === "grid" || i === "gridPortrait" ? a[i] = s == null ? null : Re(s) : Array.isArray(n[i]) ? Array.isArray(s) && (a[i] = s.filter((c) => typeof c == "string")) : typeof s == typeof n[i] && (a[i] = s);
  }), a;
}
const Ae = "main", Ba = "photoframe.cache", Ta = "photoframe.mainHome", Pa = "photoframe.startScreen";
function mn() {
  try {
    return localStorage.getItem(Ta) || Ae;
  } catch {
    return Ae;
  }
}
function un() {
  try {
    return localStorage.getItem(Pa) || "";
  } catch {
    return "";
  }
}
const An = () => Se(null, ua), Tt = "photoframe.localBackup", Tn = "photoframe.migrated";
function Pn(t) {
  return { screens: t.map((e) => ({ id: e.id, name: e.name, cols: e.cols, cards: e.cards })) };
}
function ac() {
  return {
    settings: {
      haUrl: "",
      slideIntervalMs: 1e4,
      idleSec: 45
    },
    homes: [{ id: Ae, name: d("home.default_name") }],
    screens: { [Ae]: An() },
    active: mn(),
    screen: un(),
    layout: An()[0],
    photos: [],
    sync: "connecting"
  };
}
function ic() {
  const t = ac();
  try {
    const e = localStorage.getItem(Ba);
    if (e) {
      const n = JSON.parse(e), a = {};
      if (n.screens) Object.keys(n.screens).forEach((r) => {
        a[r] = Se({ screens: n.screens[r] });
      });
      else {
        const r = n.layouts || (n.layout ? { [Ae]: n.layout } : {});
        Object.keys(r).forEach((f) => {
          a[f] = Se(r[f]);
        });
      }
      a[Ae] || (a[Ae] = t.screens[Ae]);
      const i = n.settings || {}, s = { ...t.settings };
      typeof i.haUrl == "string" && (s.haUrl = i.haUrl), typeof i.slideIntervalMs == "number" && (s.slideIntervalMs = i.slideIntervalMs), typeof i.idleSec == "number" && (s.idleSec = i.idleSec);
      const c = n.homes ? n.homes.map((r) => ({ id: r.id, name: r.name })) : t.homes;
      return { ...t, settings: s, homes: c, screens: a, photos: n.photos || [] };
    }
  } catch {
  }
  return t;
}
const u1 = "photoframe.integration";
function sc() {
  try {
    return localStorage.getItem(u1) === "1";
  } catch {
    return !1;
  }
}
function fo(t) {
  try {
    t ? localStorage.setItem(u1, "1") : localStorage.removeItem(u1);
  } catch {
  }
}
const Pt = "photoframe.renamePending";
class cc {
  constructor() {
    this.state = ic(), this.listeners = [], this.card = null, this.ui = { controls: f1, editing: !1 }, this.photoTimer = 0, this.bundled = [], this.photoError = "", this.cardError = "", this.haClient = null, this.haLink = "none", this.migration = null, this.frameOff = null, this.gridOff = null, this.frameClient = null, this.screenOn = !0, this.brightness = 100, this.commandListeners = [];
  }
  subscribe(e) {
    return this.listeners.push(e), () => {
      this.listeners = this.listeners.filter((n) => n !== e);
    };
  }
  set(e) {
    const n = { ...this.state, ...e };
    n.homes.some((s) => s.id === n.active) || (n.active = Ae);
    const a = n.screens[n.active] || Se(null), i = a.filter((s) => s.id === n.screen)[0] || a[0];
    if (n.screen = i.id, n.layout = i, this.state = n, e.settings || e.screens || e.homes || e.photos)
      try {
        const { settings: s, homes: c, screens: r, photos: f } = this.state;
        localStorage.setItem(Ba, JSON.stringify({
          settings: s,
          homes: c,
          screens: r,
          photos: this.state.sync === "local" ? [] : f
        }));
      } catch {
      }
    this.listeners.forEach((s) => s());
  }
  // Показать дом (и его экран; без экрана — первый).
  setActive(e, n = "") {
    (e !== this.state.active || n && n !== this.state.screen) && this.set({ active: e, screen: n });
  }
  // Все экраны всех домов подряд: свайп листает их по кругу, переходя от дома к дому.
  step(e) {
    const n = [];
    if (this.state.homes.forEach((s) => (this.state.screens[s.id] || []).forEach((c) => n.push({ home: s.id, screen: c.id }))), n.length < 2) return;
    let a = 0;
    n.forEach((s, c) => {
      s.home === this.state.active && s.screen === this.state.screen && (a = c);
    });
    const i = n[(a + e + n.length) % n.length];
    this.set({ active: i.home, screen: i.screen });
  }
  // Стартовый экран этого устройства — сюда рамка возвращается, когда её оставили в покое.
  setStart(e, n) {
    try {
      localStorage.setItem(Ta, e), localStorage.setItem(Pa, n);
    } catch {
    }
    this.listeners.forEach((a) => a());
  }
  goStart() {
    this.setActive(mn(), un());
  }
  // Карточки всех экранов дома — информеры на фото собираются со всех.
  homeCards(e = this.state.active) {
    return (this.state.screens[e] || []).reduce((n, a) => n.concat(a.cards), []);
  }
  get photoUrls() {
    const e = this.state.photos.map((n) => n.url);
    return e.length ? e : this.card || this.haLink === "ready" || this.haLink === "missing" ? [] : this.bundled;
  }
  // PWA: пока работаем из браузера и, если вход в HA есть, подключаемся — хранилище переедет в HA.
  start() {
    this.card || this.state.sync !== "connecting" || (this.set({ sync: "local" }), this.state.photos.length || this.reloadLocalPhotos(), this.connectHa());
  }
  // Режим карточки дашборда: источник данных — конфиг карточки, его HA присылает заново при каждом сохранении.
  attachCard(e) {
    const n = this.card;
    this.card = e, this.applyCardConfig(e.config), (!n || n.folder !== e.folder) && this.reloadCardPhotos(), n || (this.photoTimer = window.setInterval(() => this.reloadCardPhotos(), 12 * 36e5), window.setInterval(() => this.checkCardPhotos(), 10 * 6e4));
  }
  // Поменялся ли набор фото в папке — только тогда перечитываем ссылки (иначе кадр на экране перезагрузится).
  checkCardPhotos() {
    this.card && this.card.listPhotoIds().then((e) => {
      const n = this.state.photos.map((a) => String(a.id)).sort().join("|");
      e.slice().sort().join("|") !== n && this.reloadCardPhotos();
    }, () => {
    });
  }
  applyCardConfig(e) {
    const n = e.homes && e.homes.length ? e.homes.map((c) => ({ id: c.id, name: c.name })) : [{ id: Ae, name: d("home.default_name") }], a = {};
    n.forEach((c) => {
      const r = e.layouts && e.layouts[c.id];
      a[c.id] = r ? Se(r) : c.id === Ae ? An() : Se(null);
    });
    const i = e.settings || {}, s = { ...this.state.settings };
    typeof i.slideIntervalMs == "number" && (s.slideIntervalMs = i.slideIntervalMs), typeof i.idleSec == "number" && (s.idleSec = i.idleSec), this.set({ sync: "card", homes: n, screens: a, settings: s });
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
  // Выбрали папку на рамке: запоминаем у устройства в HA и сразу показываем её фото.
  setAlbum(e) {
    const n = this.card;
    return n ? n.setAlbum(e).then(() => this.reloadCardPhotos()) : Promise.resolve();
  }
  saveCard(e) {
    this.card && this.card.save(e).catch((n) => {
      this.cardError = n.message || String(n), this.listeners.forEach((a) => a());
    });
  }
  notify() {
    this.listeners.forEach((e) => e());
  }
  connectHa() {
    const e = hn();
    if (!e || this.haClient) return;
    const n = new I1(e.hassUrl, Zs);
    this.haClient = n, this.haLink = "connecting";
    let a = "";
    n.subscribe(() => {
      if (n.status !== a)
        if (a = n.status, n.status === "connected") {
          const i = (s) => va(n).then((c) => {
            if (c) {
              fo(!0), this.useIntegration(n, c);
              return;
            }
            if (sc() && s > 0) {
              window.setTimeout(() => {
                n.status === "connected" && i(s - 1);
              }, 1e4);
              return;
            }
            fo(!1), this.loadHaCard(), n.subscribeMessage({ type: "subscribe_events", event_type: "lovelace_updated" }, (r) => {
              r && r.data && r.data.url_path === Qe && this.loadHaCard();
            });
          });
          i(30);
        } else n.status === "auth_invalid" && (this.haLink = "error", this.notify());
    }), n.connect(), this.notify();
  }
  // Интеграция Photo Frame: данные в её хранилище, изменения — по её подписке.
  useIntegration(e, n) {
    this.haLink = "ready", this.card && this.card.integration ? (this.card.config = n, this.applyCardConfig(n)) : (this.offerMigration(), this.attachCard(new ln(e, n, void 0, !0, !0))), this.card.watch((i) => this.applyCardConfig(i)), this.frameClient = e, this.connectThisFrame();
  }
  connectThisFrame() {
    const e = this.frameClient;
    if (!e || f1) return;
    this.sendRename(), this.frameOff && this.frameOff(), this.frameOff = Rs(e, (f) => f.type === "state" ? this.applyFrameState(f) : this.commandListeners.forEach((h) => h(f)));
    const n = () => ({ lockscreen: oc(kt()), display: { w: window.innerWidth, h: window.innerHeight } });
    let a = JSON.stringify(n());
    ht(e, n());
    const i = () => {
      const f = JSON.stringify(n());
      f !== a && e.status === "connected" && (a = f, ht(e, n()));
    };
    this.gridOff && this.gridOff();
    const s = tc(i);
    let c = 0;
    const r = () => {
      clearTimeout(c), c = window.setTimeout(i, 1500);
    };
    window.addEventListener("resize", r), this.gridOff = () => {
      s(), clearTimeout(c), window.removeEventListener("resize", r);
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
      n = localStorage.getItem(Pt) || "";
    } catch {
    }
    e.name && e.name !== yt() && !n && io(e.name);
    const a = e.lockscreen_push;
    if (a && a.rev > kt().gridRev && re({ ...B1(a.patch), gridRev: a.rev }), e.start_screen) {
      const [c, r] = e.start_screen.split("/");
      (c !== mn() || r !== un()) && this.setStart(c, r);
    }
    e.screen_on !== void 0 && (this.screenOn = e.screen_on), e.brightness !== void 0 && (this.brightness = e.brightness);
    const i = this.card, s = e.album || "all";
    i && i.album !== s && (i.album = s, this.reloadCardPhotos()), this.notify();
  }
  // Коснулись спящей рамки — просыпается и сообщает HA (сущность «Экран» включается).
  wakeScreen() {
    this.screenOn = !0, this.frameClient && ht(this.frameClient, { screen_on: !0 }), this.notify();
  }
  // Имя рамки поменяли на ней самой — переподключаемся, HA узнает новое имя.
  // Это имя устройства в HA: при обычном подключении главное — имя из HA, поэтому переименование — отдельным
  // запросом (иначе HA тут же вернул бы старое имя).
  renameFrame(e) {
    if (!(!e || e === yt())) {
      io(e);
      try {
        localStorage.setItem(Pt, e);
      } catch {
      }
      this.sendRename();
    }
  }
  sendRename() {
    const e = this.frameClient;
    let n = "";
    try {
      n = localStorage.getItem(Pt) || "";
    } catch {
    }
    !n || !e || e.status !== "connected" || e.call({ type: "photoframe/frame/rename", frame_id: St(), name: n }).then(() => {
      try {
        localStorage.removeItem(Pt);
      } catch {
      }
    }, () => {
    });
  }
  loadHaCard() {
    const e = this.haClient;
    e && (this.card && this.card.busy || Qs(e, Qe).then((n) => {
      if (!n) {
        this.haLink = "missing", this.notify();
        return;
      }
      if (this.haLink = "ready", this.card) {
        this.card.config = n, this.applyCardConfig(n);
        return;
      }
      this.offerMigration(), this.attachCard(new ln(e, n, Qe, !0));
    }, () => {
      this.haLink = "error", this.notify();
    }));
  }
  // Создать в HA дашборд «Фоторамка» с карточкой (нужен администратор HA).
  createHaDashboard() {
    const e = this.haClient;
    return e ? _a((n) => e.call(n)).then(() => this.loadHaCard()) : Promise.reject(new Error("not connected"));
  }
  // Первый переход на HA: запоминаем свои экраны (если их меняли) и считаем фото в браузере.
  offerMigration() {
    let e = "";
    try {
      e = localStorage.getItem(Tn) || "";
    } catch {
    }
    if (e === "done") return;
    if (!e) {
      const { homes: a, screens: i } = this.state, s = a.length > 1 || JSON.stringify(Pn(i[Ae] || [])) !== JSON.stringify(Pn(An()));
      try {
        s && localStorage.setItem(Tt, JSON.stringify({ homes: a, screens: i })), localStorage.setItem(Tn, "pending");
      } catch {
      }
    }
    const n = this.backup();
    Bn().then((a) => a.length, () => 0).then((a) => {
      n || a ? (this.migration = { screens: !!n, photos: a }, this.notify()) : this.finishMigration();
    });
  }
  backup() {
    try {
      const e = localStorage.getItem(Tt);
      return e ? JSON.parse(e) : null;
    } catch {
      return null;
    }
  }
  // Заменить экраны в HA теми, что были в браузере.
  migrateScreens() {
    const e = this.backup();
    if (!e || !this.card) return;
    const n = e.homes.map((i) => ({ id: i.id, name: i.name })), a = {};
    n.forEach((i) => {
      a[i.id] = Se({ screens: e.screens[i.id] || [] });
    }), this.set({ homes: n, screens: a }), this.saveCard({ homes: n, layouts: this.packAll() });
    try {
      localStorage.removeItem(Tt);
    } catch {
    }
    this.updateMigration({ screens: !1 });
  }
  // Фото из браузера — в медиатеку HA; после загрузки из браузера их убираем.
  migratePhotos(e) {
    const n = this.card;
    return n ? Bn().then((a) => a.reduce(
      (i, s, c) => i.then(() => n.addPhotoData(s.data, "frame-" + s.id + ".jpg")).then(() => {
        e && e(c + 1, a.length);
      }),
      Promise.resolve()
    )).then(() => oo()).then(() => (this.updateMigration({ photos: 0 }), this.reloadCardPhotos())) : Promise.resolve();
  }
  dismissMigration() {
    try {
      localStorage.removeItem(Tt);
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
      localStorage.setItem(Tn, "done");
    } catch {
    }
    this.migration = null, this.notify();
  }
  reloadLocalPhotos() {
    return Bn().then((e) => this.set({ photos: e.map((n) => ({ id: n.id, url: n.data })) })).catch(() => this.set({ photos: [] }));
  }
  applyHomes(e) {
    const n = {};
    e.forEach((a) => {
      n[a.id] = this.state.screens[a.id] || Se(null);
    }), this.set({ homes: e, screens: n });
  }
  saveHomes(e) {
    const n = e.map((a) => ({ id: a.id, name: a.name }));
    this.applyHomes(n), this.card && this.saveCard({ homes: n, layouts: this.packAll() });
  }
  // Адрес HA — только этого устройства; слайдшоу — общее (в карточке HA).
  saveSettings(e) {
    this.set({ settings: e }), this.card && this.saveCard({ settings: { slideIntervalMs: e.slideIntervalMs, idleSec: e.idleSec } });
  }
  // Раскладка показанного экрана.
  saveLayout(e) {
    const n = this.state.screen;
    this.saveScreens(this.state.active, this.screensOf().map((a) => a.id === n ? { ...a, cols: e.cols, cards: e.cards } : a));
  }
  screensOf(e = this.state.active) {
    return this.state.screens[e] || Se(null);
  }
  packAll() {
    const e = {};
    return Object.keys(this.state.screens).forEach((n) => {
      e[n] = Pn(this.state.screens[n]);
    }), e;
  }
  // Экраны дома целиком: в конфиг карточки HA (без неё — только в этот браузер, через кэш).
  saveScreens(e, n, a) {
    const i = { screens: { ...this.state.screens, [e]: n } };
    a && (i.screen = a), this.set(i), this.card && this.saveCard({ layouts: this.packAll() });
  }
  // Новый пустой экран в конце списка показанного дома — сразу на него и переходим.
  addScreen(e) {
    const n = { id: Ns(), name: e, cols: 12, cards: [] };
    this.saveScreens(this.state.active, this.screensOf().concat(n), n.id);
  }
  renameScreen(e, n) {
    this.saveScreens(this.state.active, this.screensOf().map((a) => a.id === e ? { ...a, name: n } : a));
  }
  // Последний экран дома не удаляется — у дома всегда есть хотя бы один.
  removeScreen(e) {
    const n = this.screensOf();
    if (n.length < 2) return;
    const a = n.map((s) => s.id).indexOf(e), i = n.filter((s) => s.id !== e);
    this.saveScreens(this.state.active, i, i[Math.max(0, a - 1)].id);
  }
  // Сдвинуть экран в списке (dir −1 — левее, +1 — правее).
  moveScreen(e, n) {
    const a = this.screensOf().slice(), i = a.map((r) => r.id).indexOf(e), s = i + n;
    if (i < 0 || s < 0 || s >= a.length) return;
    const c = a[i];
    a[i] = a[s], a[s] = c, this.saveScreens(this.state.active, a);
  }
  // Пачка фото — строго по одному, чтобы не держать в памяти все исходники разом.
  // Ошибка одного файла не останавливает остальные; в конце сообщаем, сколько не загрузилось.
  addPhotos(e, n, a) {
    const i = this.card, s = i ? (h) => i.addPhoto(h, a) : (h) => Hs(h), c = () => i ? this.reloadCardPhotos() : this.reloadLocalPhotos(), r = [];
    let f = 0;
    return e.reduce(
      (h, m) => h.then(() => s(m)).catch((A) => {
        r.push(A && A.message || String(A));
      }).then(() => {
        f++, n && n(f, e.length);
      }),
      Promise.resolve()
    ).then(() => f > r.length ? c() : void 0).then(() => {
      if (r.length)
        throw r.length === e.length ? new Error(r[0]) : new Error(d("errors.upload_some", { failed: r.length, total: e.length }) + " — " + r[0]);
    });
  }
  deletePhoto(e) {
    return this.card ? this.card.deletePhoto(String(e)).then(() => this.reloadCardPhotos()) : Os(Number(e)).then(() => this.reloadLocalPhotos());
  }
  clearPhotos() {
    return this.card ? this.state.photos.reduce((e, n) => e.then(() => this.card.deletePhoto(String(n.id))), Promise.resolve()).then(() => this.reloadCardPhotos()) : oo().then(() => this.reloadLocalPhotos());
  }
}
const ne = new cc();
function ot() {
  const [, t] = v(0);
  return H(() => ne.subscribe(() => t((e) => e + 1)), []), ne;
}
function Mn() {
  const t = window.SmartFrame;
  return t && t.setBrightness ? t : null;
}
const rc = () => !!Mn();
function lc(t, e) {
  const n = Mn();
  if (n)
    try {
      n.setBrightness(t ? Math.max(0.02, e / 100) : 0), n.setScreenOn && n.setScreenOn(t);
    } catch {
    }
}
function dc(t) {
  window.SmartFrameWake = t;
}
function fc(t, e) {
  return t ? rc() ? 0 : Math.round((100 - e) * 0.85) / 100 : 1;
}
function hc() {
  const t = Mn();
  try {
    return t && t.getAutostart ? !!t.getAutostart() : null;
  } catch {
    return null;
  }
}
function mc(t) {
  const e = Mn();
  try {
    e && e.setAutostart && e.setAutostart(t);
  } catch {
  }
}
function Cn() {
  const t = window.SmartFrame;
  return t && t.showPhoto ? t : null;
}
function ho(t) {
  return !!Cn() && /^(https?:)?\//.test(t);
}
function Oa(t) {
  return /^https?:/.test(t) ? t : location.protocol + "//" + location.host + t;
}
function mo(t, e, n) {
  const a = Cn();
  try {
    a && a.showPhoto(t ? Oa(t) : "", e, n);
  } catch {
  }
}
function uc(t) {
  const e = Cn();
  try {
    e && e.preloadPhoto && e.preloadPhoto(Oa(t));
  } catch {
  }
}
function Ac(t) {
  window.SmartFramePhoto = (e, n) => t(n);
}
function On(t) {
  const e = Cn();
  try {
    e && e.setPhotosVisible && e.setPhotosVisible(t);
  } catch {
  }
}
const it = {};
function pc(t, e, n) {
  t /= 255, e /= 255, n /= 255;
  const a = Math.max(t, e, n), i = Math.min(t, e, n), s = (a + i) / 2;
  if (a === i) return [0, 0, s];
  const c = a - i, r = s > 0.5 ? c / (2 - a - i) : c / (a + i);
  return [(a === t ? (e - n) / c + (e < n ? 6 : 0) : a === e ? (n - t) / c + 2 : (t - e) / c + 4) * 60, r, s];
}
function gc(t) {
  return new Promise((e) => {
    const n = new Image();
    n.onload = () => {
      try {
        const a = 48 / Math.max(n.width, n.height), i = document.createElement("canvas");
        i.width = Math.max(1, Math.round(n.width * a)), i.height = Math.max(1, Math.round(n.height * a));
        const s = i.getContext("2d");
        s.drawImage(n, 0, 0, i.width, i.height);
        const c = s.getImageData(0, 0, i.width, i.height).data;
        let r = 0, f = 0, h = 0, m = 0;
        for (let p = 0; p < c.length; p += 4)
          r += c[p], f += c[p + 1], h += c[p + 2], m++;
        const A = pc(r / m, f / m, h / m), l = Math.round(A[0]), u = Math.round(Math.min(Math.max(A[1], 0.45), 0.85) * 100);
        e({
          thumb: i.toDataURL("image/jpeg", 0.7),
          accent: "hsl(" + l + "," + u + "%,68%)",
          accentSoft: "hsla(" + l + "," + u + "%,60%,0.22)"
        });
      } catch {
        e(null);
      }
    }, n.onerror = () => e(null), n.src = t;
  });
}
function bc(t) {
  const [e, n] = v(t && it[t] || null);
  return H(() => {
    if (!t) return;
    if (t in it) {
      it[t] && n(it[t]);
      return;
    }
    let a = !0;
    return gc(t).then((i) => {
      it[t] = i, a && i && n(i);
    }), () => {
      a = !1;
    };
  }, [t]), e;
}
const xc = 0.18, uo = 0.5, yc = 600, st = 10, vc = 0.12;
function Hn(t, e) {
  for (; t && t.nodeType === 1; t = t.parentElement)
    if ((t.matches || t.webkitMatchesSelector).call(t, e)) return t;
  return null;
}
function Ao(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientY : t.clientY;
}
function po(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientX : t.clientX;
}
function kc(t, e, n, a, i, s) {
  H(() => {
    const c = t.root.current;
    if (!c || !a) return;
    let r = 0, f = 0, h = 0, m = 0, A = 0, l = !1, u = 0, p = "";
    const g = (C) => {
      const E = t.controls.current, M = t.ambient.current, b = t.soft.current, I = c.clientHeight;
      E && (E.style.opacity = String(C), E.style.transform = "scale(" + (0.96 + 0.04 * C).toFixed(4) + ")"), M && (M.style.transform = "translateY(" + Math.round(-C * I) + "px)"), b && (b.style.opacity = String(C));
    }, y = () => {
      [t.controls.current, t.ambient.current, t.soft.current].forEach((C) => {
        C && (C.style.opacity = "", C.style.transform = "");
      });
    }, w = (C) => {
      const E = C.target;
      e && (!Hn(E, ".bar") || Hn(E, "button")) || (r = Ao(C), f = po(C), h = Date.now(), m = 0, A = 0, p = "", l = !0, c.classList.add("dragging"), clearTimeout(u), !e && i && !Hn(E, "button") && (u = window.setTimeout(() => {
        !l || Math.abs(m) > st || (l = !1, c.classList.remove("dragging"), y(), i());
      }, yc)));
    }, k = (C) => {
      if (!l) return;
      if (m = Ao(C) - r, A = po(C) - f, (Math.abs(m) > st || Math.abs(A) > st) && clearTimeout(u), !p && (Math.abs(m) > st || Math.abs(A) > st) && (p = !e && s && Math.abs(A) > Math.abs(m) ? "x" : "y"), p === "x") {
        const b = t.ambient.current, I = c.clientWidth || 1;
        b && (b.style.transform = "translateX(" + Math.round(A * 0.25) + "px)", b.style.opacity = String(1 - Math.min(1, Math.abs(A) / I) * 0.6)), C.cancelable && C.preventDefault();
        return;
      }
      const E = c.clientHeight, M = e ? 1 - Math.max(0, m) / E : Math.max(0, -m) / E;
      g(Math.min(1, Math.max(0, M))), C.cancelable && C.preventDefault();
    }, x = () => {
      if (clearTimeout(u), !l) return;
      if (l = !1, c.classList.remove("dragging"), p === "x") {
        y();
        const b = Math.abs(A) / Math.max(1, Date.now() - h) > uo && Math.abs(A) > 30;
        s && (Math.abs(A) > c.clientWidth * vc || b) && s(A < 0 ? 1 : -1);
        return;
      }
      const C = c.clientHeight, E = Math.abs(m) / Math.max(1, Date.now() - h), M = Math.abs(m) > C * xc || E > uo && Math.abs(m) > 30;
      y(), !e && m < 0 && M && n(!0), e && m > 0 && M && n(!1);
    };
    return c.addEventListener("touchstart", w), c.addEventListener("touchmove", k), c.addEventListener("touchend", x), c.addEventListener("touchcancel", x), c.addEventListener("mousedown", w), window.addEventListener("mousemove", k), window.addEventListener("mouseup", x), () => {
      clearTimeout(u), c.removeEventListener("touchstart", w), c.removeEventListener("touchmove", k), c.removeEventListener("touchend", x), c.removeEventListener("touchcancel", x), c.removeEventListener("mousedown", w), window.removeEventListener("mousemove", k), window.removeEventListener("mouseup", x);
    };
  }, [e, a, s]);
}
const pn = (...t) => t.filter((e, n, a) => !!e && e.trim() !== "" && a.indexOf(e) === n).join(" ").trim();
function wc(t, e, n = []) {
  throw new Error("[lucide]: iconNode is required when icon name is used");
}
const _c = (t) => {
  let e = "", n = !1;
  for (const a of t) {
    if (a === "-" || a === "_" || a <= " ") {
      n = e.length > 0;
      continue;
    }
    e.length === 0 ? e += a.toLowerCase() : e += n ? a.toUpperCase() : a, n = !1;
  }
  return e;
};
const zc = (t) => {
  const e = _c(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
const Fe = {
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
function Fn(t) {
  return t != null;
}
function Mc(t, e = {}) {
  const n = e.attributeNames ?? {}, a = (l) => n[l] ?? l, i = t.size ?? t.width ?? Fe.width, s = t.size ?? t.height ?? Fe.height, c = t.aliases?.filter((l) => typeof l == "string" && l.trim() !== "").map((l) => `lucide-${l}`) ?? [], r = [...t.name ? [`lucide-${t.name}`] : [], ...c], f = e.className?.split(" ").filter(Boolean) ?? [], h = e.includeDefaultClasses === !1 ? pn(...f) : pn("lucide", ...r, ...f), m = e.absoluteStrokeWidth ? Number(e.strokeWidth ?? Fe["stroke-width"]) * Number(t.size ?? t.width ?? Fe.width) / Number(e.size ?? e.width ?? Fe.width) : e.strokeWidth ?? Fe["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Fe).reduce((l, [u, p]) => (l[a(u)] = p, l), {}),
      ..."color" in e && e.color && {
        [a("stroke")]: e.color
      },
      ..."size" in e && Fn(e.size) && {
        [a("width")]: e.size,
        [a("height")]: e.size
      },
      ..."width" in e && Fn(e.width) && {
        [a("width")]: e.width
      },
      ..."height" in e && Fn(e.height) && {
        [a("height")]: e.height
      },
      [a("stroke-width")]: m,
      ...h && {
        [a("class")]: h
      },
      [a("viewBox")]: `0 0 ${i} ${s}`,
      ...e.hasA11yProp === !1 ? {
        [a("aria-hidden")]: "true"
      } : {},
      ..."attributes" in e && e.attributes
    },
    t.node.map((l) => {
      const [u, p, g] = l, y = e.nonScalingStroke ? { [a("vector-effect")]: "non-scaling-stroke", ...p } : p;
      return g ? [u, y, g] : [u, y];
    })
  ];
}
const Cc = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
const Lc = vn({
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  absoluteStrokeWidth: !1,
  nonScalingStroke: !1,
  class: ""
}), Sc = () => on(Lc);
const Ec = ({
  color: t,
  size: e,
  width: n,
  height: a,
  strokeWidth: i,
  absoluteStrokeWidth: s,
  nonScalingStroke: c,
  children: r,
  iconNode: f = [],
  icon: h = {
    node: f,
    aliases: [],
    size: 24
  },
  class: m = "",
  ...A
}) => {
  const {
    size: l = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: p = !1,
    nonScalingStroke: g = !1,
    color: y = "currentColor",
    class: w = ""
  } = Sc() ?? {}, [k, x, C = []] = Mc(h, {
    color: t ?? y,
    width: n ?? e ?? l,
    height: a ?? e ?? l,
    strokeWidth: i ?? u,
    absoluteStrokeWidth: s ?? p,
    nonScalingStroke: c ?? g,
    className: pn(w, m),
    hasA11yProp: !!r || Cc(A),
    attributes: A
  });
  return tn(k, { ...x }, [
    ...C.map(([E, M]) => tn(E, M)),
    ...Jo(r)
  ]);
};
function S(t, e, n = []) {
  const a = typeof t == "string" ? wc(t, e, n) : t, i = ({ class: s = "", className: c = "", children: r, ...f }) => tn(
    Ec,
    {
      ...f,
      icon: a,
      class: pn(s, c)
    },
    r
  );
  return a.name && (i.displayName = zc(a.name)), i;
}
const Ha = {
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
Ha.node;
const Ic = S(Ha);
const Fa = {
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
Fa.node;
const ja = S(Fa);
const Ra = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
Ra.node;
const qa = S(Ra);
const Qa = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
Qa.node;
const Wa = S(Qa);
const Va = {
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
Va.node;
const Nc = S(Va);
const Ua = {
  name: "bed",
  size: 24,
  node: [
    ["path", { d: "M2 4v16", key: "vw9hq8" }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
    ["path", { d: "M2 17h20", key: "18nfp3" }],
    ["path", { d: "M6 8v9", key: "1yriud" }]
  ]
};
Ua.node;
const Dc = S(Ua);
const Ya = {
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
Ya.node;
const Bc = S(Ya);
const Ga = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
Ga.node;
const Tc = S(Ga);
const Za = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
Za.node;
const Ja = S(Za);
const Xa = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
Xa.node;
const $a = S(Xa);
const Ka = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
Ka.node;
const T1 = S(Ka);
const ei = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
};
ei.node;
const ti = S(ei);
const ni = {
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
ni.node;
const Pc = S(ni);
const oi = {
  name: "cloud-fog",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 17H7", key: "pygtm1" }],
    ["path", { d: "M17 21H9", key: "1u2q02" }]
  ]
};
oi.node;
const Oc = S(oi);
const ai = {
  name: "cloud-lightning",
  size: 24,
  node: [
    ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
    ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
  ]
};
ai.node;
const jn = S(ai);
const ii = {
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
ii.node;
const go = S(ii);
const si = {
  name: "cloud-rain",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 14v6", key: "1j4efv" }],
    ["path", { d: "M8 14v6", key: "17c4r9" }],
    ["path", { d: "M12 16v6", key: "c8a4gj" }]
  ]
};
si.node;
const Hc = S(si);
const ci = {
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
ci.node;
const ri = S(ci);
const li = {
  name: "cloud-upload",
  size: 24,
  node: [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
  ],
  aliases: ["upload-cloud"]
};
li.node;
const Fc = S(li);
const di = {
  name: "cloud",
  size: 24,
  node: [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]
};
di.node;
const fi = S(di);
const hi = {
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
hi.node;
const jc = S(hi);
const mi = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
mi.node;
const Rc = S(mi);
const ui = {
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
ui.node;
const qc = S(ui);
const Ai = {
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
Ai.node;
const Je = S(Ai);
const pi = {
  name: "eighth-notes",
  size: 24,
  node: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19", key: "uy6ho8" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
    ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }]
  ],
  aliases: ["music"]
};
pi.node;
const Qc = S(pi);
const gi = {
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
gi.node;
const bi = S(gi);
const xi = {
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
xi.node;
const yi = S(xi);
const vi = {
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
vi.node;
const ki = S(vi);
const wi = {
  name: "folder-open",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
        key: "usdka0"
      }
    ]
  ]
};
wi.node;
const Wc = S(wi);
const _i = {
  name: "folder",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360"
      }
    ]
  ]
};
_i.node;
const zi = S(_i);
const Mi = {
  name: "gauge",
  size: 24,
  node: [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
  ]
};
Mi.node;
const Ci = S(Mi);
const Li = {
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
Li.node;
const Vc = S(Li);
const Si = {
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
Si.node;
const Uc = S(Si);
const Ei = {
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
Ei.node;
const Yc = S(Ei);
const Ii = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
Ii.node;
const Ni = S(Ii);
const Di = {
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
Di.node;
const Gc = S(Di);
const Bi = {
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
Bi.node;
const Zc = S(Bi);
const Ti = {
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
Ti.node;
const Jc = S(Ti);
const Pi = {
  name: "layout-grid",
  size: 24,
  node: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
  ]
};
Pi.node;
const Xc = S(Pi);
const Oi = {
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
Oi.node;
const $c = S(Oi);
const Hi = {
  name: "lock",
  size: 24,
  node: [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
  ]
};
Hi.node;
const Kc = S(Hi);
const Fi = {
  name: "log-in",
  size: 24,
  node: [
    ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
    ["path", { d: "M15 12H3", key: "6jk70r" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
  ]
};
Fi.node;
const er = S(Fi);
const ji = {
  name: "log-out",
  size: 24,
  node: [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
  ]
};
ji.node;
const tr = S(ji);
const Ri = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
};
Ri.node;
const nr = S(Ri);
const qi = {
  name: "minus",
  size: 24,
  node: [["path", { d: "M5 12h14", key: "1ays0h" }]]
};
qi.node;
const or = S(qi);
const Qi = {
  name: "monitor",
  size: 24,
  node: [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
  ]
};
Qi.node;
const ar = S(Qi);
const Wi = {
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
Wi.node;
const Vi = S(Wi);
const Ui = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
Ui.node;
const ir = S(Ui);
const Yi = {
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
Yi.node;
const Gi = S(Yi);
const Zi = {
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
Zi.node;
const Ji = S(Zi);
const Xi = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Xi.node;
const $e = S(Xi);
const $i = {
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
$i.node;
const sr = S($i);
const Ki = {
  name: "power",
  size: 24,
  node: [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
  ]
};
Ki.node;
const wt = S(Ki);
const e2 = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
e2.node;
const cr = S(e2);
const t2 = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
  ]
};
t2.node;
const rr = S(t2);
const n2 = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
n2.node;
const o2 = S(n2);
const a2 = {
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
a2.node;
const lr = S(a2);
const i2 = {
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
i2.node;
const dr = S(i2);
const s2 = {
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
s2.node;
const fr = S(s2);
const c2 = {
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
c2.node;
const hr = S(c2);
const r2 = {
  name: "smartphone",
  size: 24,
  node: [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }]
  ]
};
r2.node;
const mr = S(r2);
const l2 = {
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
l2.node;
const P1 = S(l2);
const d2 = {
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
d2.node;
const ur = S(d2);
const f2 = {
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
f2.node;
const A1 = S(f2);
const h2 = {
  name: "speaker",
  size: 24,
  node: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
    ["path", { d: "M12 14h.01", key: "1etili" }]
  ]
};
h2.node;
const m2 = S(h2);
const u2 = {
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
u2.node;
const A2 = S(u2);
const p2 = {
  name: "table-2",
  size: 24,
  node: [
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
  ]
};
p2.node;
const Ar = S(p2);
const g2 = {
  name: "thermometer",
  size: 24,
  node: [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]]
};
g2.node;
const b2 = S(g2);
const x2 = {
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
x2.node;
const _t = S(x2);
const y2 = {
  name: "tv",
  size: 24,
  node: [
    ["path", { d: "m17 2-5 5-5-5", key: "16satq" }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]
  ]
};
y2.node;
const p1 = S(y2);
const v2 = {
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
v2.node;
const pr = S(v2);
const k2 = {
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
k2.node;
const gr = S(k2);
const w2 = {
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
w2.node;
const br = S(w2);
const _2 = {
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
_2.node;
const xr = S(_2);
const z2 = {
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
z2.node;
const yr = S(z2);
const M2 = {
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
M2.node;
const vr = S(M2);
const C2 = {
  name: "wind",
  size: 24,
  node: [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
  ]
};
C2.node;
const gn = S(C2);
const L2 = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
L2.node;
const He = S(L2);
const S2 = {
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
S2.node;
const kr = S(S2);
function wr(t) {
  return new Promise((e) => {
    const n = new Image();
    n.onerror = () => e({ w: 0, h: 0, glow: "" }), n.onload = () => {
      let a = "";
      try {
        const i = 48 / Math.max(n.naturalWidth, n.naturalHeight), s = document.createElement("canvas");
        s.width = Math.max(1, Math.round(n.naturalWidth * i)), s.height = Math.max(1, Math.round(n.naturalHeight * i)), s.getContext("2d").drawImage(n, 0, 0, s.width, s.height), a = s.toDataURL("image/jpeg", 0.7);
      } catch {
      }
      e({ w: n.naturalWidth, h: n.naturalHeight, glow: a });
    }, n.src = t;
  });
}
function _r({ urls: t, index: e, tone: n, soft: a, softRef: i, onShow: s }) {
  const c = vs(), r = E1(), [f, h] = v([]), m = ee(0), A = t.length, l = A ? t[e % A] : "", u = !!l && ho(l);
  return H(() => Ac(s), []), H(() => {
    const p = document.documentElement;
    u ? p.classList.add("native-photos") : p.classList.remove("native-photos");
  }, [u]), H(() => {
    if (u) {
      h([]), mo(l, c, r === "lite"), A > 1 && uc(t[(e + 1) % A]);
      return;
    }
    if (ho("/") && mo("", c, !1), !l) {
      h([]);
      return;
    }
    let p = !0;
    return $1(l).then((g) => wr(g).then((y) => ({ url: g, m: y }))).then(({ url: g, m: y }) => {
      if (!p) return;
      const w = ++m.current;
      h((k) => k.slice(-1).map((x) => ({ ...x, on: !1 })).concat({ id: w, url: g, on: !1, w: y.w, h: y.h, glow: y.glow })), requestAnimationFrame(() => requestAnimationFrame(() => {
        p && h((k) => k.map((x) => x.id === w ? { ...x, on: !0 } : x));
      })), s(g);
    }), A > 1 && $1(t[(e + 1) % A]), () => {
      p = !1;
    };
  }, [l, u, u ? c : "", u ? r : ""]), /* @__PURE__ */ o("div", { class: "backdrop", children: [
    A === 0 && /* @__PURE__ */ o("div", { class: "slide active aurora" }),
    f.map((p) => ks(p.w, p.h) ? /* @__PURE__ */ o("div", { class: "slide contain" + (p.on ? " active" : ""), children: [
      p.glow && /* @__PURE__ */ o("div", { class: "slide-glow", style: { backgroundImage: "url(" + p.glow + ")" } }),
      /* @__PURE__ */ o("div", { class: "slide-photo", style: { backgroundImage: "url(" + p.url + ")" } })
    ] }, p.id) : /* @__PURE__ */ o("div", { class: "slide" + (p.on ? " active" : ""), style: { backgroundImage: "url(" + p.url + ")" } }, p.id)),
    /* @__PURE__ */ o("div", { ref: i, class: "soft" + (a ? " on" : ""), style: n ? { backgroundImage: "url(" + n.thumb + ")" } : void 0 }),
    /* @__PURE__ */ o("div", { class: "shade" + (a ? " deep" : "") })
  ] });
}
var zr = {
  prefix: "fas",
  iconName: "dog",
  icon: [576, 512, [128021], "f6d3", "M32 112c16.6 0 30.2 12.6 31.8 28.7l.3 6.6C65.8 163.4 79.4 176 96 176l179.1 0 140.9 60.4 0 243.6c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-131.3C296 361 268.8 368 240 368s-56-7-80-19.3L160 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-245.6c-37.3-13.2-64-48.6-64-90.4 0-17.7 14.3-32 32-32zM355.8-32c7.7 0 14.9 3.6 19.6 9.8L392 0 444.1 0c12.7 0 24.9 5.1 33.9 14.1L496 32 552 32c13.3 0 24 10.7 24 24l0 24c0 44.2-35.8 80-80 80l-64 0-7 28-124.7-53.4 31.6-147.2C334.3-23.9 344.2-32 355.8-32zM448 44a20 20 0 1 0 0 40 20 20 0 1 0 0-40z"]
}, Mr = {
  prefix: "fas",
  iconName: "kitchen-set",
  icon: [576, 512, [], "e51a", "M240 144a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288 64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112l71.8 0c8.8-9.8 21.6-16 35.8-16l104 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-104 0c-14.2 0-27-6.2-35.8-16l-71.8 0zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24l0 8 96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-240 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l96 0 0-8c0-13.3 10.7-24 24-24zM288 464l0-112 224 0 0 112c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48zM48 320l128 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-80c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0 32 16 0zM24 464l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, Cr = {
  prefix: "fas",
  iconName: "car",
  icon: [512, 512, [128664, "automobile"], "f1b9", "M135.2 117.4l-26.1 74.6 293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 192c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-320 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 304a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, Lr = {
  prefix: "fas",
  iconName: "map-pin",
  icon: [320, 512, [128205], "f276", "M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]
}, Sr = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]
}, Er = {
  prefix: "fas",
  iconName: "baby",
  icon: [384, 512, [], "f77c", "M120 88a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM7.7 144.5c13-17.9 38-21.8 55.9-8.8L99.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25l0 36.3-192 0 0-36.3c-15.2-6.7-29.7-15.1-43.3-25L16.5 200.3c-17.9-13-21.8-38-8.8-55.9zM97.5 329.3l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C38 438.6 36.1 417 47.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6l24.3-24.3-26-37.2z"]
}, Ir = {
  prefix: "fas",
  iconName: "truck",
  icon: [576, 512, [128666, 9951], "f0d1", "M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]
}, Nr = {
  prefix: "fas",
  iconName: "bell",
  icon: [448, 512, [128276, 61602], "f0f3", "M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"]
}, Dr = {
  prefix: "fas",
  iconName: "toggle-off",
  icon: [576, 512, [], "f204", "M384 128c70.7 0 128 57.3 128 128S454.7 384 384 384l-192 0c-70.7 0-128-57.3-128-128s57.3-128 128-128l192 0zM576 256c0-106-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192zM192 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]
}, Br = {
  prefix: "fas",
  iconName: "message",
  icon: [512, 512, ["comment-alt"], "f27a", "M0 352L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120 0c-5.2 0-10.2 1.7-14.4 4.8L166.4 539.2c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24l0-72-32 0c-53 0-96-43-96-96z"]
}, Tr = {
  prefix: "fas",
  iconName: "calendar-days",
  icon: [448, 512, ["calendar-alt"], "f073", "M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]
}, Pr = {
  prefix: "fas",
  iconName: "warehouse",
  icon: [576, 512, [], "f494", "M0 142.1L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-240c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 240c0 17.7 14.3 32 32 32s32-14.3 32-32l0-337.9c0-27.5-17.6-52-43.8-60.7L303.2 5.1c-9.9-3.3-20.5-3.3-30.4 0L43.8 81.4C17.6 90.1 0 114.6 0 142.1zM464 256l-352 0 0 64 352 0 0-64zM112 416l352 0 0-64-352 0 0 64zm352 32l-352 0 0 64 352 0 0-64z"]
}, Or = {
  prefix: "fas",
  iconName: "circle-pause",
  icon: [512, 512, [62092, "pause-circle"], "f28b", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 192l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Hr = {
  prefix: "fas",
  iconName: "gift",
  icon: [512, 512, [127873], "f06b", "M321.5 68.8C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-73.3 0 34.8-59.2zm-131 0l34.8 59.2-73.3 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zm89.6-24.3l-24.1 41-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4zM480 272l-200 0 0 208 136 0c35.3 0 64-28.7 64-64l0-144zm-248 0l-200 0 0 144c0 35.3 28.7 64 64 64l136 0 0-208z"]
}, Fr = {
  prefix: "fas",
  iconName: "gauge",
  icon: [512, 512, ["dashboard", "gauge-med", "tachometer-alt-average"], "f624", "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, jr = {
  prefix: "fas",
  iconName: "toolbox",
  icon: [512, 512, [129520], "f552", "M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 28.1 0c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9l0 76.1-136 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-144 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-136 0 0-76.1c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1L128 96zM0 416l0-96 136 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 144 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 136 0 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64z"]
}, Rr = {
  prefix: "fas",
  iconName: "power-off",
  icon: [512, 512, [9211], "f011", "M288 0c0-17.7-14.3-32-32-32S224-17.7 224 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L288 0zM146.3 98.4c14.5-10.1 18-30.1 7.9-44.6s-30.1-18-44.6-7.9C43.4 92.1 0 169 0 256 0 397.4 114.6 512 256 512S512 397.4 512 256c0-87-43.4-163.9-109.7-210.1-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6c49.8 34.8 82.3 92.4 82.3 157.6 0 106-86 192-192 192S64 362 64 256c0-65.2 32.5-122.9 82.3-157.6z"]
}, qr = {
  prefix: "fas",
  iconName: "signal",
  icon: [512, 512, [128246, "signal-5", "signal-perfect"], "f012", "M488 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400zM360 128c-13.3 0-24 10.7-24 24l0 304c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-13.3-10.7-24-24-24zM280 248c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 208c0 13.3 10.7 24 24 24s24-10.7 24-24l0-208zM152 320c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zM48 384c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-13.3-10.7-24-24-24z"]
}, Qr = {
  prefix: "fas",
  iconName: "display",
  icon: [512, 512, [], "e163", "M448 96l0 256-384 0 0-256 384 0zM64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l144 0-16 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-16-48 144 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 32z"]
}, Wr = {
  prefix: "fas",
  iconName: "unlock",
  icon: [384, 512, [128275], "f09c", "M128 96c0-35.3 28.7-64 64-64 31.7 0 58 23 63.1 53.3 2.9 17.4 19.4 29.2 36.9 26.3s29.2-19.4 26.3-36.9C308.1 14.1 255.5-32 192-32 121.3-32 64 25.3 64 96l0 64c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-192 0 0-64z"]
}, Vr = {
  prefix: "fas",
  iconName: "key",
  icon: [512, 512, [128273], "f084", "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]
}, Ur = {
  prefix: "fas",
  iconName: "tree",
  icon: [448, 512, [127794], "f1bb", "M224-32c7 0 13.7 3.1 18.3 8.5l136 160c6.1 7.1 7.4 17.1 3.5 25.6S369.4 176 360 176l-24.9 0 75.2 88.5c6.1 7.1 7.4 17.1 3.5 25.6S401.4 304 392 304l-38.5 0 88.8 104.5c6.1 7.1 7.4 17.1 3.5 25.6S433.4 448 424 448l-168 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-168 0c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L94.5 304 56 304c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L112.9 176 88 176c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6l136-160C210.3-28.9 217-32 224-32z"]
}, Yr = {
  prefix: "fas",
  iconName: "smog",
  icon: [576, 512, [], "f75f", "M176 288C96.5 288 32 223.5 32 144S96.5 0 176 0c27.2 0 52.6 7.5 74.3 20.6 20.1-13 44-20.6 69.7-20.6 47.4 0 88.7 25.7 110.9 64l1.1 0c61.9 0 112 50.1 112 112 0 60.3-47.6 109.4-107.2 111.9-22.6 20-52.3 32.1-84.8 32.1-32.5 0-62.1-12.1-84.7-32L176 288zM512 392c0 13.3-10.7 24-24 24L24 416c-13.3 0-24-10.7-24-24s10.7-24 24-24l464 0c13.3 0 24 10.7 24 24zM88 464l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm176 0l288 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, Gr = {
  prefix: "fas",
  iconName: "thermometer",
  icon: [512, 512, [], "f491", "M96 382.1l0-88.8c0-14.9 5.9-29.1 16.4-39.6l21.7-21.7 41 41c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 46.1-46.1 41 41c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 46.1-46.1 41 41c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 7.8-7.8c19.4-19.4 45.6-30.2 73-30.2 57 0 103.2 46.2 103.2 103.2 0 27.4-10.9 53.6-30.2 73L258.3 399.6c-10.5 10.5-24.7 16.4-39.6 16.4l-88.8 0-89 89c-9.4 9.4-24.6 9.4-33.9 0S-2.3 480.4 7 471l89-89z"]
}, Zr = {
  prefix: "fas",
  iconName: "bowl-food",
  icon: [512, 512, [], "e4c6", "M0 176c0-35.3 28.7-64 64-64 .5 0 1.1 0 1.6 0 7.4-36.5 39.7-64 78.4-64 15 0 29 4.1 40.9 11.2 13.3-25.7 40.1-43.2 71.1-43.2s57.8 17.6 71.1 43.2c12-7.1 26-11.2 40.9-11.2 38.7 0 71 27.5 78.4 64 .5 0 1.1 0 1.6 0 35.3 0 64 28.7 64 64 0 11.7-3.1 22.6-8.6 32L8.6 208C3.1 198.6 0 187.7 0 176zM0 283.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4 0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"]
}, Jr = {
  prefix: "fas",
  iconName: "temperature-low",
  icon: [512, 512, [], "f76b", "M96 96c0-53 43-96 96-96s96 43 96 96l0 164.7c29.5 26.4 48 64.7 48 107.3 0 79.5-64.5 144-144 144S48 447.5 48 368c0-42.6 18.5-81 48-107.3L96 96zm96 336c35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3l0-28.7c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 28.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64zM464 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 80a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z"]
}, Xr = {
  prefix: "fas",
  iconName: "door-open",
  icon: [448, 512, [], "f52b", "M288 64l64 0 0 416c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-384c0-35.3-28.7-64-64-64l-96 0 0 0-160 0C60.7 0 32 28.7 32 64l0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-416zM160 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, $r = {
  prefix: "fas",
  iconName: "camera",
  icon: [512, 512, [62258, "camera-alt"], "f030", "M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0-10.4-31.2C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]
}, Kr = {
  prefix: "fas",
  iconName: "rainbow",
  icon: [640, 512, [127752], "f75b", "M320 96C178.6 96 64 210.6 64 352l0 64c0 17.7-14.3 32-32 32S0 433.7 0 416l0-64C0 175.3 143.3 32 320 32S640 175.3 640 352l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64C576 210.6 461.4 96 320 96zm0 112c-79.5 0-144 64.5-144 144l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-114.9 93.1-208 208-208s208 93.1 208 208l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-79.5-64.5-144-144-144zM288 352l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-53 43-96 96-96s96 43 96 96l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z"]
}, el = {
  prefix: "fas",
  iconName: "face-grin-stars",
  icon: [512, 512, [129321, "grin-stars"], "f587", "M256 512c141.4 0 256-114.6 256-256 0-24.4-3.4-48.1-9.8-70.5 18.6-36.1-2.7-83.6-46.7-90-46.9-58.3-118.9-95.5-199.5-95.5S103.4 37.3 56.5 95.5c-44 6.4-65.3 53.9-46.7 90-6.4 22.4-9.8 46-9.8 70.5 0 141.4 114.6 256 256 256zM386.7 324.9c11.9-3.7 23.9 6.3 19.6 18.1-22.4 61.3-81.3 105.1-150.3 105.1S128.1 404.2 105.7 342.9c-4.3-11.8 7.7-21.8 19.6-18.1 39.2 12.2 83.7 19.1 130.7 19.1s91.5-6.9 130.7-19.1zm-31.6-231c5.3-10.7 20.5-10.7 25.8 0l20.9 42.4 46.7 6.8c11.8 1.7 16.5 16.2 8 24.5l-33.8 33 8 46.6c2 11.7-10.3 20.7-20.9 15.2l-41.8-22-41.8 22c-10.5 5.5-22.9-3.4-20.9-15.2l8-46.6-33.8-33c-8.5-8.3-3.8-22.8 8-24.5l46.7-6.8 20.9-42.4zm-198.2 0l20.9 42.4 46.7 6.8c11.8 1.7 16.5 16.2 8 24.5l-33.8 33 8 46.6c2 11.7-10.3 20.7-20.9 15.2l-41.8-22-41.8 22c-10.5 5.5-22.9-3.4-20.9-15.2l8-46.6-33.8-33c-8.5-8.3-3.8-22.8 8-24.5l46.7-6.8 20.9-42.4c5.3-10.7 20.5-10.7 25.8 0z"]
}, tl = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]
}, nl = {
  prefix: "fas",
  iconName: "house-lock",
  icon: [640, 512, [], "e510", "M528 224.1c44.2 0 80 35.8 80 80l0 50.6c18.6 6.6 32 24.4 32 45.3l0 96c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48l0-96c0-20.9 13.4-38.7 32-45.3l0-50.6c0-44.2 35.8-80 80-80zM268.6 6.5c12.2-9.3 29.7-8.7 41.2 2l185 171.8C440.2 195 400 244.8 400 304l0 24.4c-19.6 17.6-32 43.1-32 71.5l0 96c0 5.5 .5 10.9 1.3 16.1L144 512c-35.3 0-64-28.7-64-64l0-176-16 0c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8-35.1l224-208 2.4-2zM272 320c-26.5 0-48 21.5-48 48l0 96 96 0 0-87.3c0-16.5 7-31.5 18.4-42.1-8.7-9-20.9-14.6-34.4-14.6l-32 0zm256-47.9c-17.7 0-32 14.3-32 32l0 47.9 64 0 0-47.9c0-17.7-14.3-32-32-32z"]
}, ol = {
  prefix: "fas",
  iconName: "share-from-square",
  icon: [576, 512, [61509, "share-square"], "f14d", "M384.5 24l0 72-64 0c-79.5 0-144 64.5-144 144 0 93.4 82.8 134.8 100.6 142.6 2.2 1 4.6 1.4 7.1 1.4l2.5 0c9.8 0 17.8-8 17.8-17.8 0-8.3-5.9-15.5-12.8-20.3-8.9-6.2-19.2-18.2-19.2-40.5 0-45 36.5-81.5 81.5-81.5l30.5 0 0 72c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l136-136c9.4-9.4 9.4-24.6 0-33.9L425.5 7c-6.9-6.9-17.2-8.9-26.2-5.2S384.5 14.3 384.5 24zm-272 72c-44.2 0-80 35.8-80 80l0 256c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32c0 8.8-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0z"]
}, al = {
  prefix: "fas",
  iconName: "note-sticky",
  icon: [448, 512, [62026, "sticky-note"], "f249", "M64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 213.5c0 17-6.7 33.3-18.7 45.3L322.7 461.3c-12 12-28.3 18.7-45.3 18.7L64 480zM389.5 304L296 304c-13.3 0-24 10.7-24 24l0 93.5 117.5-117.5z"]
}, il = {
  prefix: "fas",
  iconName: "water",
  icon: [512, 512, [], "f773", "M410.6 124.1c20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.8-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9c21.3-16.1 49.9-16.1 71.2 0zm0 144c20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.7-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9c21.3-16.1 49.9-16.1 71.2 0zm-71.2 144c21.3-16.1 49.9-16.1 71.2 0 20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.8-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9z"]
}, sl = {
  prefix: "fas",
  iconName: "stop",
  icon: [448, 512, [9209], "f04d", "M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]
}, cl = {
  prefix: "fas",
  iconName: "temperature-high",
  icon: [512, 512, [], "f769", "M96 96c0-53 43-96 96-96s96 43 96 96l0 164.7c29.5 26.4 48 64.7 48 107.3 0 79.5-64.5 144-144 144S48 447.5 48 368c0-42.6 18.5-81 48-107.3L96 96zm96 336c35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3L216 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 212.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64zM464 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 80a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z"]
}, rl = {
  prefix: "fas",
  iconName: "wave-square",
  icon: [512, 512, [], "f83e", "M64 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 288 96 0 0-128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-288-96 0 0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-128z"]
}, ll = {
  prefix: "fas",
  iconName: "radio",
  icon: [512, 512, [128251], "f8d7", "M494.8 15c12.7-3.7 20-17.1 16.3-29.8S494-34.8 481.3-31L51.8 94.9C42.4 97.6 33.9 102.1 26.6 108 10.5 119.7 0 138.6 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L218.5 96 494.8 15zM368 208a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM64 248c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 272c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 368c-13.3 0-24-10.7-24-24z"]
}, dl = {
  prefix: "fas",
  iconName: "unlock-keyhole",
  icon: [384, 512, ["unlock-alt"], "f13e", "M192 32c-35.3 0-64 28.7-64 64l0 64 192 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l0-64c0-70.7 57.3-128 128-128 63.5 0 116.1 46.1 126.2 106.7 2.9 17.4-8.8 33.9-26.3 36.9s-33.9-8.8-36.9-26.3C250 55.1 223.7 32 192 32zm40 328c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0z"]
}, fl = {
  prefix: "fas",
  iconName: "circle-half-stroke",
  icon: [512, 512, [9680, "adjust"], "f042", "M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]
}, hl = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, ml = {
  prefix: "fas",
  iconName: "paper-plane",
  icon: [576, 512, [61913], "f1d8", "M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]
}, ul = {
  prefix: "fas",
  iconName: "table",
  icon: [448, 512, [], "f0ce", "M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-320 0-6.5-.3C25.2 476.4 0 449.1 0 416L0 96C0 60.7 28.7 32 64 32l320 0zM64 320l0 96 128 0 0-96-128 0zm192 0l0 96 128 0 0-96-128 0zM64 256l128 0 0-96-128 0 0 96zm192 0l128 0 0-96-128 0 0 96z"]
}, Al = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]
}, pl = {
  prefix: "fas",
  iconName: "battery-half",
  icon: [640, 512, ["battery-3"], "f242", "M528 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l416 0zM112 64c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80L112 64zm56 112c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24l-144 0z"]
}, gl = {
  prefix: "fas",
  iconName: "clone",
  icon: [512, 512, [], "f24d", "M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z"]
}, bl = {
  prefix: "fas",
  iconName: "forward",
  icon: [576, 512, [9193], "f04e", "M371.7 43.1C360.1 32 343 28.9 328.3 35.2S304 56 304 72l0 136.3-172.3-165.1C120.1 32 103 28.9 88.3 35.2S64 56 64 72l0 368c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9L304 303.7 304 440c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9l192-184c7.9-7.5 12.3-18 12.3-28.9s-4.5-21.3-12.3-28.9l-192-184z"]
}, xl = {
  prefix: "fas",
  iconName: "shield-virus",
  icon: [512, 512, [], "e06c", "M253.4 2.9C249.2 1 244.7 0 240 0s-9.2 1-13.4 2.9L38.3 82.8c-22 9.3-38.4 31-38.3 57.2 .5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0 172.4-82.5 213.2-264 213.6-363.2 .1-26.2-16.3-47.9-38.3-57.2L253.4 2.9zM240 128c13.3 0 24 10.7 24 24 0 22.9 27.7 34.4 43.9 18.2 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-16.2 16.2-4.7 43.9 18.2 43.9 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.9 0-34.4 27.7-18.2 43.9 9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-16.2-16.2-43.9-4.7-43.9 18.2 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-22.9-27.7-34.4-43.9-18.2-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c16.2-16.2 4.7-43.9-18.2-43.9-13.3 0-24-10.7-24-24s10.7-24 24-24c22.9 0 34.4-27.7 18.2-43.9-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c16.2 16.2 43.9 4.7 43.9-18.2 0-13.3 10.7-24 24-24zM208 264a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm88 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]
}, yl = {
  prefix: "fas",
  iconName: "seedling",
  icon: [512, 512, [127793, "sprout"], "f4d8", "M512 32C512 140.1 435.4 230.3 333.6 251.4 325.7 193.3 299.6 141 261.1 100.5 301.2 40 369.9 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"]
}, vl = {
  prefix: "fas",
  iconName: "star-half",
  icon: [576, 512, [61731], "f089", "M304.1 7.6c0-11.1-7.6-20.7-18.4-23.3s-21.9 2.5-27 12.4L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L291 416.1c8-4.1 13.1-12.4 13.1-21.4l0-387.1z"]
}, kl = {
  prefix: "fas",
  iconName: "photo-film",
  icon: [640, 512, ["photo-video"], "f87c", "M192 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224zM320 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm156.5 11.5C472.1 100.4 464.4 96 456 96s-16.1 4.4-20.5 11.5l-54 88.3-17.9-25.6c-4.5-6.4-11.8-10.2-19.7-10.2s-15.2 3.8-19.7 10.2l-56 80c-5.1 7.3-5.8 16.9-1.6 24.8S279.1 288 288 288l256 0c8.7 0 16.7-4.7 20.9-12.3s4.1-16.8-.5-24.3l-88-144zM144 128l0 160c0 61.9 50.1 112 112 112l192 0 0 16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l80 0zM52 196l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0zm0 96c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0z"]
}, wl = kl, _l = {
  prefix: "fas",
  iconName: "fire",
  icon: [448, 512, [128293], "f06d", "M160.5-26.4c9.3-7.8 23-7.5 31.9 .9 12.3 11.6 23.3 24.4 33.9 37.4 13.5 16.5 29.7 38.3 45.3 64.2 5.2-6.8 10-12.8 14.2-17.9 1.1-1.3 2.2-2.7 3.3-4.1 7.9-9.8 17.7-22.1 30.8-22.1 13.4 0 22.8 11.9 30.8 22.1 1.3 1.7 2.6 3.3 3.9 4.8 10.3 12.4 24 30.3 37.7 52.4 27.2 43.9 55.6 106.4 55.6 176.6 0 123.7-100.3 224-224 224S0 411.7 0 288c0-91.1 41.1-170 80.5-225 19.9-27.7 39.7-49.9 54.6-65.1 8.2-8.4 16.5-16.7 25.5-24.2zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-17.3-22.1-49.1-62.4-65.3-83-5.4-6.9-15.2-8-21.5-1.9-18.3 17.8-51.5 56.8-51.5 104.3 0 68.6 50.6 109.2 113.7 109.2z"]
}, zl = {
  prefix: "fas",
  iconName: "traffic-light",
  icon: [320, 512, [128678], "f637", "M64-32C28.7-32 0-3.3 0 32L0 384c0 88.4 71.6 160 160 160s160-71.6 160-160l0-352c0-35.3-28.7-64-64-64L64-32zm96 392c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-104a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zM160 152a56 56 0 1 1 0-112 56 56 0 1 1 0 112z"]
}, Ml = {
  prefix: "fas",
  iconName: "users",
  icon: [640, 512, [], "f0c0", "M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]
}, Cl = {
  prefix: "fas",
  iconName: "alarm-clock",
  icon: [512, 512, [9200], "f34e", "M504.4 132.5c-4.5 10.5-18.4 9.8-24.9 .4-27.8-40-66.1-72.2-111-92.6-10.4-4.7-13.7-18.3-4.1-24.6 15-9.9 33-15.7 52.3-15.7 52.6 0 95.2 42.6 95.2 95.2 0 13.2-2.7 25.8-7.6 37.3zm-471.9 .4c-6.5 9.4-20.5 10.1-24.9-.4-4.9-11.5-7.6-24.1-7.6-37.3 0-52.6 42.6-95.2 95.2-95.2 19.3 0 37.3 5.8 52.3 15.7 9.6 6.3 6.3 19.9-4.1 24.6-44.8 20.4-83.1 52.6-111 92.6zM390.2 467.4C352.8 495.4 306.3 512 256 512s-96.8-16.6-134.1-44.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l35.2-35.2C48.6 384.8 32 338.3 32 288 32 164.3 132.3 64 256 64S480 164.3 480 288c0 50.3-16.6 96.8-44.6 134.2l35.2 35.2c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-35.2-35.2zM280 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l56 56c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-49-49 0-94.1z"]
}, Ll = {
  prefix: "fas",
  iconName: "newspaper",
  icon: [512, 512, [128240], "f1ea", "M0 416L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 288c0 13.3 10.7 24 24 24s24-10.7 24-24L96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM160 128l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0zm-24-72c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0c-13.3 0-24 10.7-24 24zM360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0z"]
}, Sl = {
  prefix: "fas",
  iconName: "cloud-rain",
  icon: [512, 512, [127783, 9926], "f73d", "M96 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8 0-61.9 50.1-112 112-112 43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16 .5 0 1.1 0 1.6 0 53 0 96 43 96 96s-43 96-96 96L96 320zm1.6 68.2c1.1-2.5 3.6-4.2 6.4-4.2s5.3 1.6 6.4 4.2l30.2 68.2c2.2 5.1 3.4 10.5 3.4 16 0 21.9-18.1 39.6-40 39.6s-40-17.7-40-39.6c0-5.5 1.2-11 3.4-16l30.2-68.2zm152 0c1.1-2.5 3.6-4.2 6.4-4.2s5.3 1.6 6.4 4.2l30.2 68.2c2.2 5.1 3.4 10.5 3.4 16 0 21.9-18.1 39.6-40 39.6s-40-17.7-40-39.6c0-5.5 1.2-11 3.4-16l30.2-68.2zm121.8 68.2l30.2-68.2c1.1-2.5 3.6-4.2 6.4-4.2s5.3 1.6 6.4 4.2l30.2 68.2c2.2 5.1 3.4 10.5 3.4 16 0 21.9-18.1 39.6-40 39.6s-40-17.7-40-39.6c0-5.5 1.2-11 3.4-16z"]
}, El = {
  prefix: "fas",
  iconName: "hospital",
  icon: [576, 512, [127973, 62589, "hospital-alt", "hospital-wide"], "f0f8", "M128 64c0-35.3 28.7-64 64-64L384 0c35.3 0 64 28.7 64 64l0 64 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l64 0 0-64zM272 352c-17.7 0-32 14.3-32 32l0 80 96 0 0-80c0-17.7-14.3-32-32-32l-32 0zM128 368l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM112 256c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zM512 368l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM496 256c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zM264 104l0 32-32 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"]
}, Il = {
  prefix: "fas",
  iconName: "fire-flame-curved",
  icon: [384, 512, ["fire-alt"], "f7e4", "M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0 198.4 0 208 9.6 208 21.3l0 22.1c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7 384 434 306 512 209.7 512L192 512C86 512 0 426 0 320l0-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6 12.5 0 22.6 10.1 22.6 22.6L96 288c0 35.3 28.7 64 64 64s64-28.7 64-64l0-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7 0-27.7 9-54.8 25.6-76.9z"]
}, Nl = {
  prefix: "fas",
  iconName: "blender",
  icon: [512, 512, [], "f517", "M0 56C0 25.1 25.1 0 56 0L437.6 0c21.3 0 36.6 20.3 30.8 40.8L457.1 80 344 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l99.4 0-18.3 64-81.1 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l67.4 0-27.4 96-256 0-9.1-96-62.9 0c-30.9 0-56-25.1-56-56L0 56zM114.3 192L100.6 48 56 48c-4.4 0-8 3.6-8 8l0 128c0 4.4 3.6 8 8 8l58.3 0zM136 384l240 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-240 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm120 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
}, E2 = {
  prefix: "fas",
  iconName: "video",
  icon: [576, 512, ["video-camera"], "f03d", "M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z"]
}, Dl = E2, Bl = {
  prefix: "fas",
  iconName: "user-shield",
  icon: [576, 512, [], "f505", "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l251.5 0C261 469.4 240 414.5 240 356.4l0-31.1c0-7.3 1-14.5 2.9-21.3l-48.6 0zm251 184.5l-13.3 6.3 0-188.1 96 32 0 19.6c0 55.8-32.2 106.5-82.7 130.3zM421.9 259.5l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4l0 31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2l0-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z"]
}, Tl = {
  prefix: "fas",
  iconName: "heart-pulse",
  icon: [512, 512, ["heartbeat"], "f21e", "M256 107.9L241 87.1C216 52.5 175.9 32 133.1 32 59.6 32 0 91.6 0 165.1l0 2.6c0 23.6 6.2 48 16.6 72.3l106 0c3.2 0 6.1-1.9 7.4-4.9l31.8-76.3c3.7-8.8 12.3-14.6 21.8-14.8s18.3 5.4 22.2 14.1l51.3 113.9 41.4-82.8c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3l23.2 46.3c1.4 2.7 4.1 4.4 7.2 4.4l123.6 0c10.5-24.3 16.6-48.7 16.6-72.3l0-2.6C512 91.6 452.4 32 378.9 32 336.2 32 296 52.5 271 87.1l-15 20.7zM469.6 288l-97.8 0c-21.2 0-40.6-12-50.1-31l-1.7-3.4-42.5 85.1c-4.1 8.3-12.7 13.5-22 13.3s-17.6-5.7-21.4-14.1l-49.3-109.5-10.5 25.2c-8.7 20.9-29.1 34.5-51.7 34.5l-80.2 0c47.2 73.8 123 141.7 170.4 177.9 12.4 9.4 27.6 14.1 43.1 14.1s30.8-4.6 43.1-14.1C346.6 429.7 422.4 361.8 469.6 288z"]
}, Pl = {
  prefix: "fas",
  iconName: "hands-bubbles",
  icon: [512, 512, ["hands-wash"], "e05e", "M384 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM128 464a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM0 160l.1 72.6c0 44.8 17.6 87.1 47.9 118.4 .3-77 40.1-148.4 105.4-189.3l1.9-1.2c-2.5-3.7-2.8-8.6-.4-12.7l62-107.4c6.6-11.5 2.7-26.2-8.8-32.8S182 5 175.4 16.5l-68 117.8 0 0 0 0-43.3 75 0-49.3c0-17.7-14.4-32-32-32S0 142.4 0 160zm213.6-35.9c14.1-8.8 29.8-12.7 45.2-12.1l36.5-63.3c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8l-67.1 116.2 27-16.9zm86.5-35.7l-16.4 28.4c15.1 5.5 28.6 15.6 38.3 29.7l19.7-34.2c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8zm46.4 63.7l-12.5 21.7c2 8.6 2.5 17.5 1.7 26.1l4.3 0 0 0 34.4 0 13.7-23.8c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8zM283.1 175c-9.4-15-29.1-19.5-44.1-10.2l-60.2 37.6C127.3 234.7 96 291.2 96 352l0 8c0 8.9 .8 17.6 2.2 26.1 35.4 8.2 61.8 40 61.8 77.9 0 6.3-.7 12.5-2.1 18.4 25.2 18.6 56.4 29.6 90.1 29.6l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-92 0c-6.6 0-12-5.4-12-12s5.4-12 12-12l124 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-124 0c-6.6 0-12-5.4-12-12s5.4-12 12-12l156 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-156 0c-6.6 0-12-5.4-12-12s5.4-12 12-12l124 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-136 0 0 0 0 0-93.2 0 46.2-28.9c15-9.4 19.5-29.1 10.2-44.1z"]
}, Ol = Pl, Hl = {
  prefix: "fas",
  iconName: "laptop",
  icon: [640, 512, [128187], "f109", "M128 32C92.7 32 64 60.7 64 96l0 240 64 0 0-240 384 0 0 240 64 0 0-240c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2L19.2 384z"]
}, Fl = {
  prefix: "fas",
  iconName: "thumbs-down",
  icon: [512, 512, [128078, 61576], "f165", "M384 32c26.5 0 48 21.5 48 48 0 6.3-1.3 12.2-3.4 17.7 20.4 5.5 35.4 24.1 35.4 46.3 0 9.1-2.6 17.6-7 24.9 22.2 4.2 39 23.7 39 47.1 0 19.7-11.9 36.6-28.9 44 17 7.4 28.9 24.3 28.9 44 0 26.5-21.5 48-48 48l-160 0 28.2 70.4c2.5 6.3 3.8 13.1 3.8 19.9l0 4.2c0 27.3-22.1 49.4-49.4 49.4-18.7 0-35.8-10.6-44.2-27.3L170.1 356.3c-6.7-13.3-10.1-28-10.1-42.9l0-186.6c0-19.4 8.9-37.8 24-50l12.2-9.7C224.6 44.4 259.8 32 296.1 32L384 32zM80 96c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l48 0z"]
}, jl = {
  prefix: "fas",
  iconName: "broom",
  icon: [576, 512, [129529], "f51a", "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6l0 29.1 108.3 108.3 29.1 0c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8c-22.3 22.3-34.8 52.5-34.8 84 0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9 0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8 30.6-30.6 45.9-73.1 42.3-115.8z"]
}, Rl = {
  prefix: "fas",
  iconName: "utensils",
  icon: [512, 512, [127860, 61685, "cutlery"], "f2e7", "M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z"]
}, ql = {
  prefix: "fas",
  iconName: "shield-heart",
  icon: [512, 512, [], "e574", "M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2 .5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0 172.4-82.5 213.2-264 213.6-363.2 .1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM249.6 183.5l6.4 8.5 6.4-8.5c11.1-14.8 28.5-23.5 46.9-23.5 32.4 0 58.7 26.3 58.7 58.7l0 5.3c0 49.1-65.8 98.1-96.5 118.3-9.5 6.2-21.5 6.2-30.9 0-30.7-20.2-96.5-69.3-96.5-118.3l0-5.3c0-32.4 26.3-58.7 58.7-58.7 18.5 0 35.9 8.7 46.9 23.5z"]
}, Ql = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM342 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 315.2 137 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]
}, Wl = {
  prefix: "fas",
  iconName: "bath",
  icon: [512, 512, [128705, "bathtub"], "f2cd", "M96 77.3c0-7.3 5.9-13.3 13.3-13.3 3.5 0 6.9 1.4 9.4 3.9l14.9 14.9c-3.6 9.1-5.5 18.9-5.5 29.2 0 19.9 7.2 38 19.2 52-5.3 9.2-4 21.1 3.8 29 9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9-7.8-7.9-19.8-9.1-29-3.8-14-12-32.1-19.2-52-19.2-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0 66.6 0 32 34.6 32 77.3L32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 48c0 28.4 12.4 54 32 71.6L64 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 256 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-40.4c19.6-17.6 32-43.1 32-71.6l0-48c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 256 96 77.3z"]
}, Vl = {
  prefix: "fas",
  iconName: "wand-sparkles",
  icon: [512, 512, [], "f72b", "M464 6.1c9.5-8.5 24-8.1 33 .9l8 8c9 9 9.4 23.5 .9 33l-85.8 95.9c-2.6 2.9-4.1 6.7-4.1 10.7l0 21.4c0 8.8-7.2 16-16 16l-15.8 0c-4.6 0-8.9 1.9-11.9 5.3L100.7 500.9c-6.3 7.1-15.3 11.1-24.8 11.1-8.8 0-17.3-3.5-23.5-9.8L9.7 459.7c-6.2-6.2-9.7-14.7-9.7-23.5 0-9.5 4-18.5 11.1-24.8l111.6-99.8c3.4-3 5.3-7.4 5.3-11.9l0-27.6c0-8.8 7.2-16 16-16l34.6 0c3.9 0 7.7-1.5 10.7-4.1L464 6.1zM432 288c3.6 0 6.7 2.4 7.7 5.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8-14.8 51.7c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8l-14.8-51.7-51.7-14.8c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8 14.8-51.7c1-3.4 4.1-5.8 7.7-5.8zM87.7 69.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8-14.8 51.7c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8L57.5 166.5 5.8 151.7c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8 14.8-51.7c1-3.4 4.1-5.8 7.7-5.8s6.7 2.4 7.7 5.8zM208 0c3.7 0 6.9 2.5 7.8 6.1l6.8 27.3 27.3 6.8c3.6 .9 6.1 4.1 6.1 7.8s-2.5 6.9-6.1 7.8l-27.3 6.8-6.8 27.3c-.9 3.6-4.1 6.1-7.8 6.1s-6.9-2.5-7.8-6.1l-6.8-27.3-27.3-6.8c-3.6-.9-6.1-4.1-6.1-7.8s2.5-6.9 6.1-7.8l27.3-6.8 6.8-27.3c.9-3.6 4.1-6.1 7.8-6.1z"]
}, Ul = {
  prefix: "fas",
  iconName: "shower",
  icon: [512, 512, [128703], "f2cc", "M64 131.9c0-19.8 16.1-35.9 35.9-35.9 9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.1-31.9-123-10.9L170.5 61.3C151.8 42.5 126.4 32 99.9 32 44.7 32 0 76.7 0 131.9L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-316.1zM256 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, Yl = {
  prefix: "fas",
  iconName: "mountain-sun",
  icon: [576, 512, [], "e52f", "M256.5 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5-7.2 12.1-20.3 19.5-34.3 19.5l-432 0c-14.1 0-27.1-7.4-34.3-19.5s-7.5-27.1-.8-39.5l216-400 2.9-4.6C231.7 6.2 243.6 0 256.5 0zM170.4 249.9l26.8 26.8c6.2 6.2 16.4 6.2 22.6 0l43.3-43.3c6-6 14.1-9.4 22.6-9.4l42.8 0-72.1-133.5-86.1 159.4zM496.5 160a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"]
}, Gl = {
  prefix: "fas",
  iconName: "sun",
  icon: [576, 512, [9728], "f185", "M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]
}, Zl = {
  prefix: "fas",
  iconName: "plug-circle-bolt",
  icon: [640, 512, [], "e55b", "M192-32c17.7 0 32 14.3 32 32l0 96 128 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 48.7c-98.6 8.1-176 90.7-176 191.3 0 27.3 5.7 53.3 16 76.9l0 3.1c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-66.7C165.2 398.1 96 319.1 96 224l0-64c-17.7 0-32-14.3-32-32S78.3 96 96 96l64 0 0-96c0-17.7 14.3-32 32-32zM352 400a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm177.4-77c-5.8-4.2-13.8-4-19.4 .5l-80 64c-5.3 4.2-7.4 11.4-5.1 17.8S433.2 416 440 416l32.9 0-15.9 42.4c-2.5 6.7-.2 14.3 5.6 18.6s13.8 4 19.4-.5l80-64c5.3-4.2 7.4-11.4 5.1-17.8S558.8 384 552 384l-32.9 0 15.9-42.4c2.5-6.7 .2-14.3-5.6-18.6z"]
}, Jl = {
  prefix: "fas",
  iconName: "lightbulb",
  icon: [384, 512, [128161], "f0eb", "M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]
}, Xl = {
  prefix: "fas",
  iconName: "carrot",
  icon: [640, 512, [129365], "f787", "M453.1-36.7L440.9-24.6c-31.2 31.2-31.2 81.9 0 113.1 15.6 15.6 31.2 31.2 46.9 46.9 31.2 31.2 81.9 31.2 113.1 0l12.1-12.1c6.2-6.2 6.2-16.4 0-22.6L600.9 88.6c-31.2-31.2-81.9-31.2-113.1 0 31.2-31.2 31.2-81.9 0-113.1L475.7-36.7c-6.2-6.2-16.4-6.2-22.6 0zM331.6 96c-45.2 0-87.1 20.4-115 54.3L273.3 207c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L191.6 193.2 67.2 466.8c-5.5 12.1-2.9 26.4 6.5 35.9s23.7 12 35.9 6.5l141.6-64.4-43.8-43.8c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l56.5 56.5 95.3-43.3c53.1-24.1 87.2-77.1 87.2-135.5 0-82.2-66.6-148.8-148.8-148.8z"]
}, $l = {
  prefix: "fas",
  iconName: "highlighter",
  icon: [576, 512, [], "f591", "M315 315L473.4 99.9 444.1 70.6 229 229 315 315zm-187 5l0 0 0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0 457.6 0 468.5 4.5 476.6 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5 0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5l-71.7 0-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l51.7-51.7 70.6 70.6-19.7 19.7c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z"]
}, Kl = {
  prefix: "fas",
  iconName: "cloud",
  icon: [576, 512, [9729], "f0c2", "M0 336c0 79.5 64.5 144 144 144l304 0c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5-56.9 19.2-97.9 73.1-97.9 136.5z"]
}, e0 = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]
}, t0 = {
  prefix: "fas",
  iconName: "backward",
  icon: [576, 512, [9194], "f04a", "M204.3 43.1C215.9 32 233 28.9 247.7 35.2S272 56 272 72l0 136.3 172.3-165.1C455.9 32 473 28.9 487.7 35.2S512 56 512 72l0 368c0 16-9.6 30.5-24.3 36.8s-31.8 3.2-43.4-7.9L272 303.7 272 440c0 16-9.6 30.5-24.3 36.8s-31.8 3.2-43.4-7.9l-192-184C4.5 277.3 0 266.9 0 256s4.5-21.3 12.3-28.9l192-184z"]
}, n0 = {
  prefix: "fas",
  iconName: "rectangle-list",
  icon: [512, 512, ["list-alt"], "f022", "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm96 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm120-56l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, o0 = {
  prefix: "fas",
  iconName: "hand",
  icon: [512, 512, [129306, 9995, "hand-paper"], "f256", "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4S-3.6 325.7 12.4 341L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z"]
}, a0 = {
  prefix: "fas",
  iconName: "stairs",
  icon: [576, 512, [], "e289", "M384 64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0 0-96c0-17.7 14.3-32 32-32l96 0 0-96c0-17.7 14.3-32 32-32l96 0 0-96z"]
}, i0 = {
  prefix: "fas",
  iconName: "thumbs-up",
  icon: [512, 512, [128077, 61575], "f164", "M80 160c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32L0 192c0-17.7 14.3-32 32-32l48 0zM270.6 16C297.9 16 320 38.1 320 65.4l0 4.2c0 6.8-1.3 13.6-3.8 19.9L288 160 448 160c26.5 0 48 21.5 48 48 0 19.7-11.9 36.6-28.9 44 17 7.4 28.9 24.3 28.9 44 0 23.4-16.8 42.9-39 47.1 4.4 7.3 7 15.8 7 24.9 0 22.2-15 40.8-35.4 46.3 2.2 5.5 3.4 11.5 3.4 17.7 0 26.5-21.5 48-48 48l-87.9 0c-36.3 0-71.6-12.4-99.9-35.1L184 435.2c-15.2-12.1-24-30.5-24-50l0-186.6c0-14.9 3.5-29.6 10.1-42.9L226.3 43.3C234.7 26.6 251.8 16 270.6 16z"]
}, s0 = {
  prefix: "fas",
  iconName: "chart-line",
  icon: [512, 512, ["line-chart"], "f201", "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]
}, c0 = {
  prefix: "fas",
  iconName: "building",
  icon: [384, 512, [127970, 61687], "f1ad", "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]
}, r0 = {
  prefix: "fas",
  iconName: "bicycle",
  icon: [640, 512, [128690], "f206", "M331.7 43.3C336 36.3 343.7 32 352 32l104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-65.6 0 72.2 148.4c10.7-2.9 21.9-4.4 33.4-4.4 70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128c0-42 20.2-79.2 51.4-102.6l-20.4-41.9-73.5 147c-2.3 4.8-6.3 8.8-11.4 11.2-.6 .3-1.2 .5-1.8 .7-2.9 1.1-5.9 1.6-8.9 1.5L271 368c-7.9 63.1-61.7 112-127 112-70.7 0-128-57.3-128-128S73.3 224 144 224c10.8 0 21.2 1.3 31.2 3.8l28.5-56.9-11.5-26.9-40.2 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0c9.6 0 18.3 5.7 22.1 14.5l14.3 33.5 123.7 0-37.7-77.5c-3.6-7.4-3.2-16.2 1.2-23.2zM228.5 228.7l-45.6 91.3 84.8 0-39.1-91.3zM305.7 287l47.5-95-88.2 0 40.7 95zm168.7 75.5l-29.7-61c-12.8 13-20.7 30.8-20.7 50.5 0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72c-2.7 0-5.5 .2-8.1 .5l29.7 61c5.8 11.9 .8 26.3-11.1 32.1s-26.3 .8-32.1-11.1zM149.2 368c-20.2 0-33.4-21.3-24.3-39.4l24.2-48.5c-1.7-.1-3.4-.2-5.1-.2-39.8 0-72 32.2-72 72s32.2 72 72 72c34.3 0 62.9-23.9 70.2-56l-65 0z"]
}, l0 = {
  prefix: "fas",
  iconName: "gear",
  icon: [512, 512, [9881, "cog"], "f013", "M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]
}, d0 = {
  prefix: "fas",
  iconName: "house-chimney",
  icon: [512, 512, [63499, "home-lg"], "e3af", "M234.2 8.6c12.3-11.4 31.3-11.4 43.5 0L368 92.3 368 80c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 101.5 37.8 35.1c9.6 9 12.8 22.9 8 35.1S493.2 272 480 272l-16 0 0 176c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-176-16 0c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8-35.1l224-208zM240 320c-26.5 0-48 21.5-48 48l0 96 128 0 0-96c0-26.5-21.5-48-48-48l-32 0z"]
}, f0 = {
  prefix: "fas",
  iconName: "cloud-showers-heavy",
  icon: [512, 512, [], "f740", "M96 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8 0-61.9 50.1-112 112-112 43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16 .5 0 1.1 0 1.6 0 53 0 96 43 96 96s-43 96-96 96L96 320zm6.8 79.6l-32 96C66.6 508.2 53 515 40.4 510.8S21 493 25.2 480.4l32-96C61.4 371.8 75 365 87.6 369.2S107 387 102.8 399.6zm120 0l-32 96c-4.2 12.6-17.8 19.4-30.4 15.2S141 493 145.2 480.4l32-96c4.2-12.6 17.8-19.4 30.4-15.2S227 387 222.8 399.6zm112 0l-32 96c-4.2 12.6-17.8 19.4-30.4 15.2S253 493 257.2 480.4l32-96c4.2-12.6 17.8-19.4 30.4-15.2S339 387 334.8 399.6zm120 0l-32 96c-4.2 12.6-17.8 19.4-30.4 15.2S373 493 377.2 480.4l32-96c4.2-12.6 17.8-19.4 30.4-15.2S459 387 454.8 399.6z"]
}, h0 = {
  prefix: "fas",
  iconName: "plate-wheat",
  icon: [512, 512, [], "e55a", "M176 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zM56 64l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24S42.7 64 56 64zM24 136l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 48c0-8.8 7.2-16 16-16 44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16zM400 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zm80 160l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM352 176c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80zm-96 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM3.5 347.6C1.6 332.9 13 320 27.8 320l456.4 0c14.8 0 26.2 12.9 24.4 27.6-6.3 50.2-44.4 89.4-92.6 98.4l0 2c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-2c-48.2-9-86.3-48.2-92.5-98.4z"]
}, m0 = {
  prefix: "fas",
  iconName: "shirt",
  icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0L22.9 214.6c-12.5-12.5-12.5-32.8 0-45.3L141.5 50.7c12-12 28.3-18.7 45.3-18.7l53.5 0c0 44.2 35.8 80 80 80z"]
}, u0 = {
  prefix: "fas",
  iconName: "play",
  icon: [448, 512, [9654], "f04b", "M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]
}, A0 = {
  prefix: "fas",
  iconName: "puzzle-piece",
  icon: [512, 512, [129513], "f12e", "M224 0c35.3 0 64 21.5 64 48 0 10.4-4.4 20-12 27.9-6.6 6.9-12 15.3-12 24.9 0 15 12.2 27.2 27.2 27.2l44.8 0c26.5 0 48 21.5 48 48l0 44.8c0 15 12.2 27.2 27.2 27.2 9.5 0 18-5.4 24.9-12 7.9-7.5 17.5-12 27.9-12 26.5 0 48 28.7 48 64s-21.5 64-48 64c-10.4 0-20.1-4.4-27.9-12-6.9-6.6-15.3-12-24.9-12-15 0-27.2 12.2-27.2 27.2L384 464c0 26.5-21.5 48-48 48l-56.8 0c-12.8 0-23.2-10.4-23.2-23.2 0-9.2 5.8-17.3 13.2-22.8 11.6-8.7 18.8-20.7 18.8-34 0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34 7.4 5.5 13.2 13.5 13.2 22.8 0 12.8-10.4 23.2-23.2 23.2L48 512c-26.5 0-48-21.5-48-48L0 343.2c0-12.8 10.4-23.2 23.2-23.2 9.2 0 17.3 5.8 22.8 13.2 8.7 11.6 20.7 18.8 34 18.8 26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8-5.5 7.4-13.5 13.2-22.8 13.2-12.8 0-23.2-10.4-23.2-23.2L0 176c0-26.5 21.5-48 48-48l108.8 0c15 0 27.2-12.2 27.2-27.2 0-9.5-5.4-18-12-24.9-7.5-7.9-12-17.5-12-27.9 0-26.5 28.7-48 64-48z"]
}, p0 = {
  prefix: "fas",
  iconName: "glass-water",
  icon: [384, 512, [], "e4f4", "M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4 .1 34.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3l166.6 0c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0L32 0zM73 156.5l-6.6-92.5 251.3 0-6.6 92.5-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0-20.9-10.4-45.5-10.4-66.4 0-19.4 9.7-42.2 9.7-61.6 0L73 156.5z"]
}, g0 = {
  prefix: "fas",
  iconName: "gem",
  icon: [512, 512, [128142], "f3a5", "M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5L210.5 179.8 63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8l-147.2-12.3 57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"]
}, b0 = {
  prefix: "fas",
  iconName: "toilet",
  icon: [448, 512, [128701], "f7d8", "M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l8 0 0 148.9c-1.9 1.4-3.8 2.9-5.6 4.4-15.5 13.2-26.4 31.6-26.4 54.6 0 46.9 14.3 84.1 37 112.5 14.2 17.7 31.1 31.3 48.5 41.8L65.6 469.9c-3.3 9.8-1.6 20.5 4.4 28.8S85.7 512 96 512l256 0c10.3 0 19.9-4.9 26-13.3s7.7-19.1 4.4-28.8l-19.8-59.5c17.4-10.5 34.3-24.1 48.5-41.8 22.7-28.4 37-65.5 37-112.5 0-23.1-10.9-41.5-26.4-54.6-1.8-1.5-3.7-3-5.6-4.4l0-148.9 8 0c13.3 0 24-10.7 24-24S437.3 0 424 0L24 0zM96 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zM224 288c-88.4 0-160-14.3-160-32s71.6-32 160-32 160 14.3 160 32-71.6 32-160 32z"]
}, x0 = {
  prefix: "fas",
  iconName: "wrench",
  icon: [576, 512, [128295], "f0ad", "M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z"]
}, y0 = {
  prefix: "fas",
  iconName: "trash-can",
  icon: [448, 512, [61460, "trash-alt"], "f2ed", "M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"]
}, v0 = {
  prefix: "fas",
  iconName: "car-side",
  icon: [640, 512, [128663], "f5e4", "M147 106.7l-29.8 85.3 122.9 0 0-96-77.9 0c-6.8 0-12.9 4.3-15.1 10.7zM48.6 193.9L86.5 85.6C97.8 53.5 128.1 32 162.1 32L360 32c25.2 0 48.9 11.9 64 32l96.2 128.3C587.1 196.5 640 252.1 640 320l0 16c0 35.3-28.7 64-64 64l-16.4 0c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80l-144.7 0c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80l-.4 0c-35.3 0-64-28.7-64-64l0-80c0-30.1 20.7-55.3 48.6-62.1zM440 192l-67.2-89.6c-3-4-7.8-6.4-12.8-6.4l-72 0 0 96 152 0zM152 432a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm360-40a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z"]
}, k0 = {
  prefix: "fas",
  iconName: "life-ring",
  icon: [512, 512, [], "f1cd", "M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3S491.8 142.1 458 98.7c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256S20.2 369.9 54 413.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]
}, w0 = {
  prefix: "fas",
  iconName: "fingerprint",
  icon: [512, 512, [], "f577", "M48 256c0-114.9 93.1-208 208-208 63.1 0 119.6 28.1 157.8 72.5 8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0 114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6-15.2 5-18.7 23.7-8.3 35.9 7.1 8.3 18.8 10.8 29.4 7.9 10.6-2.9 21.8-4.4 33.4-4.4 70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3-1.7 14.6 9.4 27.8 24.2 27.8 11.8 0 21.9-8.6 23.3-20.3 3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4-23.1 29.8-36.8 67.1-36.8 107.7l0 24.9c0 24.2-2.6 48.4-7.8 71.9-3.4 15.6 7.9 31.1 23.9 31.1 10.5 0 19.9-7 22.2-17.3 6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1 7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1-3.8 14.3 6.7 29 21.5 29 9.5 0 17.9-6.2 20.4-15.4 10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9-2.7 13.9 7.7 27.2 21.8 27.2 10.2 0 19-7 21-17 7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z"]
}, _0 = {
  prefix: "fas",
  iconName: "house",
  icon: [512, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]
}, z0 = {
  prefix: "fas",
  iconName: "sliders",
  icon: [512, 512, ["sliders-h"], "f1de", "M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z"]
}, M0 = {
  prefix: "fas",
  iconName: "person-walking",
  icon: [384, 512, [128694, "walking"], "f554", "M192 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM105.4 227.9l22.6-22.6 0 69.3c0 28 12.2 54.7 33.5 72.9l71.4 61.2c5.9 5.1 9.8 12.1 10.9 19.8l12.6 88.1c2.5 17.5 18.7 29.7 36.2 27.2s29.7-18.7 27.2-36.2l-12.6-88.1c-3.3-23.1-14.9-44.1-32.6-59.3l-34.5-29.6 0-115.2 3.8 4.7c18.2 22.8 45.8 36 75 36l33.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-33.2 0c-9.7 0-18.9-4.4-25-12l-17.9-22.4c-23-28.8-57.9-45.6-94.8-45.6-32.2 0-63.1 12.8-85.8 35.6L60.1 182.6C42.1 200.6 32 225 32 250.5L32 288c0 17.7 14.3 32 32 32s32-14.3 32-32l0-37.5c0-8.5 3.4-16.6 9.4-22.6zm12.4 179.4c-1.5 5.2-4.3 10-8.1 13.8L41.4 489.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.3-68.3c11.5-11.5 19.9-25.8 24.4-41.5l2.2-7.6-46-39.4c-2.5-2.2-5-4.4-7.4-6.8l-10.4 36.2z"]
}, C0 = {
  prefix: "fas",
  iconName: "champagne-glasses",
  icon: [640, 512, [129346, "glass-cheers"], "f79f", "M155.6 17.3C163 3 179.9-3.6 195 1.9l125 45.6 125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6l31.3 86.2 41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41c-47.4 17.3-94.8 34.5-142.2 51.8-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-33.9-130-95.2l-14.6-64.7-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6.1 25.2 24.4 19.1 41s-24.4 25.2-41 19.1c-47.4-17.3-94.8-34.6-142.2-51.8-16.6-6.1-25.2-24.4-19.1-41S26.3 392 42.9 398l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8 89.2 32.5 13.1-57.9-75.1-27.4zm240.9 0l-75.1 27.4 13.1 57.9 89.2-32.5-27.2-52.8z"]
}, L0 = {
  prefix: "fas",
  iconName: "user",
  icon: [448, 512, [128100, 62144, 62470, "user-alt", "user-large"], "f007", "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]
}, S0 = {
  prefix: "fas",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M288.2 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 62.1-15-15c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l49 49 0 70.6-61.2-35.3-17.9-66.9c-3.4-12.8-16.6-20.4-29.4-17S95.3 98 98.7 110.8l5.5 20.5-53.7-31C35.2 91.5 15.6 96.7 6.8 112s-3.6 34.9 11.7 43.7l53.7 31-20.5 5.5c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l66.9-17.9 61.2 35.3-61.2 35.3-66.9-17.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l20.5 5.5-53.7 31C3.2 365.1-2 384.7 6.8 400s28.4 20.6 43.7 11.7l53.7-31-5.5 20.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l17.9-66.9 61.2-35.3 0 70.6-49 49c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l15-15 0 62.1c0 17.7 14.3 32 32 32s32-14.3 32-32l0-62.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-49-49 0-70.6 61.2 35.3 17.9 66.9c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-5.5-20.5 53.7 31c15.3 8.8 34.9 3.6 43.7-11.7s3.6-34.9-11.7-43.7l-53.7-31 20.5-5.5c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-66.9 17.9-61.2-35.3 61.2-35.3 66.9 17.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-20.5-5.5 53.7-31c15.3-8.8 20.6-28.4 11.7-43.7s-28.4-20.5-43.7-11.7l-53.7 31 5.5-20.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-17.9 66.9-61.2 35.3 0-70.6 49-49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-15 15 0-62.1z"]
}, E0 = {
  prefix: "fas",
  iconName: "wine-glass",
  icon: [320, 512, [127863], "f4e3", "M32.6 25.7C35.6 10.8 48.7 0 64 0L256 0c15.3 0 28.4 10.8 31.4 25.7L316.8 173c2.1 10.5 3.2 21.2 3.2 32l0 3c0 77.4-55 142-128 156.8l0 115.2 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 544c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-115.2C55 350 0 285.4 0 208l0-3c0-10.7 1.1-21.4 3.2-32L32.6 25.7zM77.4 128l165.1 0-12.8-64-139.5 0-12.8 64z"]
}, I0 = {
  prefix: "fas",
  iconName: "temperature-half",
  icon: [320, 512, [127777, "temperature-2", "thermometer-2", "thermometer-half"], "f2c9", "M160 0C107 0 64 43 64 96l0 164.7C34.5 287 16 325.4 16 368 16 447.5 80.5 512 160 512s144-64.5 144-144c0-42.6-18.5-81-48-107.3L256 96c0-53-43-96-96-96zm64 368c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3l0-92.7c0-13.3 10.7-24 24-24s24 10.7 24 24l0 92.7c23.5 9.5 40 32.5 40 59.3z"]
}, N0 = {
  prefix: "fas",
  iconName: "bookmark",
  icon: [384, 512, [128278, 61591], "f02e", "M64 0C28.7 0 0 28.7 0 64L0 480c0 11.5 6.2 22.2 16.2 27.8s22.3 5.5 32.2-.4L192 421.3 335.5 507.4c9.9 5.9 22.2 6.1 32.2 .4S384 491.5 384 480l0-416c0-35.3-28.7-64-64-64L64 0z"]
}, D0 = {
  prefix: "fas",
  iconName: "volume-xmark",
  icon: [576, 512, ["volume-mute", "volume-times"], "f6a9", "M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]
}, B0 = {
  prefix: "fas",
  iconName: "gauge-high",
  icon: [512, 512, [62461, "tachometer-alt", "tachometer-alt-fast"], "f625", "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64 0-16.2-6-31.1-16-42.3l69.5-138.9c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L261.1 288.2c-1.7-.1-3.4-.2-5.1-.2-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, T0 = {
  prefix: "fas",
  iconName: "cloud-sun",
  icon: [640, 512, [9925], "f6c4", "M208.3 192c43.1 0 80.5 24.4 99.2 60.1 14.7-17.2 36.4-28.1 60.8-28.1 44.2 0 80 35.8 80 80 0 5.5-.6 10.9-1.6 16 .5 0 1.1 0 1.6 0 53 0 96 43 96 96s-43 96-96 96l-320 0c-53 0-96-43-96-96 0-42.5 27.7-78.5 66-91.2-1.3-6.8-2-13.7-2-20.8 0-61.9 50.1-112 112-112zm192-223.8c5.3 0 10.3 2.7 13.3 7.1l47.3 70.4 83.3-16.3c5.2-1 10.6 .7 14.3 4.4 3.8 3.8 5.4 9.2 4.4 14.4l-16.3 83.3 70.4 47.3c4.4 3 7.1 8 7.1 13.3 0 5.3-2.6 10.3-7 13.2l-70.4 47.3 14.5 74.2c-17.2-21.7-40.4-38.4-67.2-47.3-2.5-12.7-6.9-24.6-12.8-35.7 9.6-14.9 15.2-32.7 15.2-51.7 0-53-43-96-96-96-47.9 0-87.6 35.1-94.8 80.9-20.9-16-45.9-27-73.1-31.1l21.5-14.5-16.3-83.2-.3-2c-.3-4.6 1.3-9.1 4.6-12.4 3.8-3.8 9.2-5.4 14.4-4.4l83.3 16.3 47.3-70.4 1.2-1.6c3-3.5 7.4-5.5 12.1-5.5zm0 175.8c26.5 0 48 21.5 48 48 0 3.8-.5 7.6-1.4 11.1-21.7-16.9-48.9-27.1-78.6-27.1-4.6 0-9.1 .2-13.5 .7 6.4-19 24.3-32.7 45.5-32.7z"]
}, P0 = {
  prefix: "fas",
  iconName: "dumbbell",
  icon: [640, 512, [], "f44b", "M96 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112 256 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 16 16 0c26.5 0 48 21.5 48 48l0 48c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 48c0 26.5-21.5 48-48 48l-16 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112-256 0 0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-16-16 0c-26.5 0-48-21.5-48-48l0-48c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-48c0-26.5 21.5-48 48-48l16 0 0-16z"]
}, O0 = {
  prefix: "fas",
  iconName: "lock-open",
  icon: [576, 512, [], "f3c1", "M384 96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-70.7-57.3-128-128-128S320 25.3 320 96l0 64-160 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-32 0 0-64z"]
}, H0 = {
  prefix: "fas",
  iconName: "droplet",
  icon: [384, 512, [128167, "tint"], "f043", "M192 512C86 512 0 426 0 320 0 228.8 130.2 45.9 166.6-3.5 172.5-11.5 181.8-16 191.8-16l.4 0c10 0 19.3 4.5 25.2 12.5 36.4 49.4 166.6 232.3 166.6 323.5 0 106-86 192-192 192zM112 312c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 75.1 60.9 136 136 136 13.3 0 24-10.7 24-24s-10.7-24-24-24c-48.6 0-88-39.4-88-88z"]
}, F0 = {
  prefix: "fas",
  iconName: "film",
  icon: [448, 512, [127902, 62368, "film-alt", "film-simple"], "f008", "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm304-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm304-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM352 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0z"]
}, j0 = {
  prefix: "fas",
  iconName: "comments",
  icon: [576, 512, [128490, 61670], "f086", "M384 144c0 97.2-86 176-192 176-26.7 0-52.1-5-75.2-14L35.2 349.2c-9.3 4.9-20.7 3.2-28.2-4.2s-9.2-18.9-4.2-28.2l35.6-67.2C14.3 220.2 0 183.6 0 144 0 46.8 86-32 192-32S384 46.8 384 144zm0 368c-94.1 0-172.4-62.1-188.8-144 120-1.5 224.3-86.9 235.8-202.7 83.3 19.2 145 88.3 145 170.7 0 39.6-14.3 76.2-38.4 105.6l35.6 67.2c4.9 9.3 3.2 20.7-4.2 28.2s-18.9 9.2-28.2 4.2L459.2 498c-23.1 9-48.5 14-75.2 14z"]
}, R0 = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]
}, q0 = {
  prefix: "fas",
  iconName: "moon",
  icon: [512, 512, [127769, 9214], "f186", "M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]
}, Q0 = {
  prefix: "fas",
  iconName: "plane",
  icon: [576, 512, [], "f072", "M520 200c30.9 0 56 25.1 56 56s-25.1 56-56 56l-127.3 0-159.2 173.6c-6.1 6.6-14.6 10.4-23.6 10.4l-43.7 0c-10.9 0-18.6-10.7-15.2-21.1l54.3-162.9-99.7 0-52.8 66c-3 3.8-7.6 6-12.5 6l-19.8 0c-10.4 0-18-9.8-15.5-19.9L32 256 5 147.9C2.4 137.8 10.1 128 20.5 128l19.8 0c4.9 0 9.5 2.2 12.5 6l52.8 66 99.7 0-54.3-162.9C147.6 26.7 155.3 16 166.2 16l43.7 0c9 0 17.5 3.8 23.6 10.4L392.7 200 520 200z"]
}, W0 = {
  prefix: "fas",
  iconName: "mobile-screen",
  icon: [384, 512, ["mobile-android-alt"], "f3cf", "M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM128 440c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24zM304 64l-224 0 0 304 224 0 0-304z"]
}, V0 = {
  prefix: "fas",
  iconName: "phone",
  icon: [512, 512, [128222, 128379], "f095", "M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]
}, U0 = {
  prefix: "fas",
  iconName: "circle-play",
  icon: [512, 512, [61469, "play-circle"], "f144", "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]
}, Y0 = {
  prefix: "fas",
  iconName: "leaf",
  icon: [512, 512, [], "f06c", "M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9c0 131.2-108.1 237.1-238.8 237.1-77 0-143.4-49.5-167.5-118.7-35.4 30.8-57.7 76.1-57.7 126.7 0 13.3-10.7 24-24 24S0 469.3 0 456C0 381.1 38.2 315.1 96.1 276.3 131.4 252.7 173.5 240 216 240l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.7 0-77.3 8.8-111 24.5 23.3-70 89.2-120.5 167-120.5 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z"]
}, G0 = {
  prefix: "fas",
  iconName: "motorcycle",
  icon: [640, 512, [127949], "f21c", "M280 16c-13.3 0-24 10.7-24 24s10.7 24 24 24l56.6 0 22.5 48.7-95.1 71.3c-33.4-25.1-75-40-120-40l-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c78.5 0 143.2 59.6 151.2 136l-25.4 0c-11.2-59.2-63.3-104-125.8-104-70.7 0-128 57.3-128 128S73.3 480 144 480c62.5 0 114.5-44.8 125.8-104l50.2 0c13.3 0 24-10.7 24-24l0-22.5c0-45.1 25.7-85.4 65.5-107.7l12.1 26.1c-32.4 23.2-53.5 61.2-53.5 104.1 0 70.7 57.3 128 128 128s128-57.3 128-128-57.3-128-128-128c-10.7 0-21 1.3-30.9 3.8L433.8 160 488 160c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-53.3 0c-6.9 0-13.7 2.2-19.2 6.4l-17.1 12.8-24.6-53.3C369.9 21.4 361.4 16 352 16l-72 0zM445.8 300.4l28.4 61.6c5.6 12 19.8 17.3 31.8 11.7s17.3-19.8 11.7-31.8l-28.5-61.6c2.2-.2 4.4-.3 6.7-.3 39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72c0-20.2 8.3-38.5 21.8-51.6zM144 424c-39.8 0-72-32.2-72-72s32.2-72 72-72c31.3 0 58 20 67.9 48L144 328c-13.3 0-24 10.7-24 24s10.7 24 24 24l67.9 0c-9.9 28-36.6 48-67.9 48z"]
}, Z0 = {
  prefix: "fas",
  iconName: "spray-can",
  icon: [576, 512, [], "f5bd", "M192 0l64 0c17.7 0 32 14.3 32 32l0 80-128 0 0-80c0-17.7 14.3-32 32-32zM64 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 208c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-208zm240 80a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM320 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM448 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM512 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM448 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, J0 = {
  prefix: "fas",
  iconName: "volume-low",
  icon: [448, 512, [128264, "volume-down"], "f027", "M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"]
}, X0 = {
  prefix: "fas",
  iconName: "person",
  icon: [384, 512, [129485, "male"], "f183", "M248 24a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm24 212.7l46.3 62.4c10.5 14.2 30.6 17.2 44.8 6.6s17.2-30.6 6.6-44.8l-70.5-95C274 132 234.3 112 192 112s-82 20-107.2 53.9l-70.5 95c-10.5 14.2-7.6 34.2 6.6 44.8s34.2 7.6 44.8-6.6L112 236.7 112 512c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-8.8 7.2-16 16-16s16 7.2 16 16l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-275.3z"]
}, $0 = {
  prefix: "fas",
  iconName: "hourglass",
  icon: [384, 512, [9203, 62032, "hourglass-empty"], "f254", "M0 32C0 14.3 14.3 0 32 0L352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1l-67.9 67.9 67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1l67.9-67.9-67.9-67.9C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9l67.9 67.9 67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11-192 0zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9l-67.9-67.9-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z"]
}, K0 = {
  prefix: "fas",
  iconName: "drumstick-bite",
  icon: [512, 512, [], "f6d7", "M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2-4.6-1.1-9.5-1.8-14.5-1.8-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12 0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4l89.2 0c6.3 0 12.4-.3 18.5-1 11.9-1.2 16.4-15.5 10.8-26-8.5-15.8-13.3-33.8-13.3-53 0-61.9 50.1-112 112-112 8 0 15.7 .8 23.2 2.4 11.7 2.5 24.1-5.9 22-17.6-14.7-82.3-86.7-144.8-173.2-144.8-97.2 0-176 78.8-176 176l0 89.2z"]
}, e4 = {
  prefix: "fas",
  iconName: "chart-simple",
  icon: [512, 512, [], "e473", "M192 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM432 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"]
}, t4 = {
  prefix: "fas",
  iconName: "solar-panel",
  icon: [576, 512, [], "f5ba", "M121.8 32c-30 0-56 20.8-62.5 50.1L9.6 306.1C.7 346.1 31.1 384 72 384l184.1 0 0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64 184.1 0c40.9 0 71.4-37.9 62.5-77.9l-49.8-224C510.4 52.8 484.5 32 454.5 32L121.8 32zM245.6 96l85.2 0 7.3 88-99.8 0 7.3-88zm-55.5 88l-87.8 0 19.6-88 75.6 0-7.3 88zM91.6 232l94.5 0-7.3 88-106.7 0 19.6-88zm142.6 0l107.8 0 7.3 88-122.5 0 7.3-88zm156 0l94.5 0 19.6 88-106.7 0-7.3-88zM474 184l-87.8 0-7.3-88 75.6 0 19.6 88z"]
}, n4 = {
  prefix: "fas",
  iconName: "headphones",
  icon: [448, 512, [127911, 62863, "headphones-alt", "headphones-simple"], "f025", "M64 224c0-88.4 71.6-160 160-160s160 71.6 160 160l0 37.5c-10-3.5-20.8-5.5-32-5.5l-16 0c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48l16 0c53 0 96-43 96-96l0-160C448 100.3 347.7 0 224 0S0 100.3 0 224L0 384c0 53 43 96 96 96l16 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-16 0c-11.2 0-22 1.9-32 5.5L64 224z"]
}, o4 = {
  prefix: "fas",
  iconName: "bus",
  icon: [448, 512, [128653], "f207", "M96 0C43 0 0 43 0 96L0 384c0 29.8 20.4 54.9 48 62l0 34c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 192 0 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-34c27.6-7.1 48-32.2 48-62l0-288c0-53-43-96-96-96L96 0zM64 176c0-17.7 14.3-32 32-32l104 0 0 112-104 0c-17.7 0-32-14.3-32-32l0-48zm184 80l0-112 104 0c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32l-104 0zM96 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm256 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM152 72c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24z"]
}, a4 = {
  prefix: "fas",
  iconName: "plug",
  icon: [448, 512, [128268], "f1e6", "M128-32c17.7 0 32 14.3 32 32l0 96 128 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 95.1-69.2 174.1-160 189.3l0 66.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-66.7C101.2 398.1 32 319.1 32 224l0-64c-17.7 0-32-14.3-32-32S14.3 96 32 96l64 0 0-96c0-17.7 14.3-32 32-32z"]
}, i4 = {
  prefix: "fas",
  iconName: "wand-magic-sparkles",
  icon: [576, 512, ["magic-wand-sparkles"], "e2ca", "M263.4-27L278.2 9.8 315 24.6c3 1.2 5 4.2 5 7.4s-2 6.2-5 7.4L278.2 54.2 263.4 91c-1.2 3-4.2 5-7.4 5s-6.2-2-7.4-5L233.8 54.2 197 39.4c-3-1.2-5-4.2-5-7.4s2-6.2 5-7.4L233.8 9.8 248.6-27c1.2-3 4.2-5 7.4-5s6.2 2 7.4 5zM110.7 41.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7L59.8 164.2 9.7 142.7C3.8 140.2 0 134.4 0 128s3.8-12.2 9.7-14.7L59.8 91.8 81.3 41.7C83.8 35.8 89.6 32 96 32s12.2 3.8 14.7 9.7zM464 304c6.4 0 12.2 3.8 14.7 9.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7l-21.5-50.1-50.1-21.5c-5.9-2.5-9.7-8.3-9.7-14.7s3.8-12.2 9.7-14.7l50.1-21.5 21.5-50.1c2.5-5.9 8.3-9.7 14.7-9.7zM460 0c11 0 21.6 4.4 29.5 12.2l42.3 42.3C539.6 62.4 544 73 544 84s-4.4 21.6-12.2 29.5l-88.2 88.2-101.3-101.3 88.2-88.2C438.4 4.4 449 0 460 0zM44.2 398.5L308.4 134.3 409.7 235.6 145.5 499.8C137.6 507.6 127 512 116 512s-21.6-4.4-29.5-12.2L44.2 457.5C36.4 449.6 32 439 32 428s4.4-21.6 12.2-29.5z"]
}, s4 = {
  prefix: "fas",
  iconName: "bell-slash",
  icon: [576, 512, [128277, 61943], "f1f6", "M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-87.5-87.5c17.2-2.4 30.5-17.3 30.5-35.2 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C464.4 308.5 448 261.8 448 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 3.2c-38.6 7.8-72.2 29.6-95.2 59.7L41-24.9zm87 238.5c0 48.1-16.4 94.8-46.4 132.4l-9.8 12.2c-5 6.3-7.8 14.1-7.8 22.2 0 19.6 15.9 35.5 35.5 35.5l235.3 0-206.9-206.9 0 4.5zM288 512c29.8 0 54.9-20.4 62-48l-124 0c7.1 27.6 32.2 48 62 48z"]
}, c4 = {
  prefix: "fas",
  iconName: "bottle-water",
  icon: [320, 512, [], "e4c5", "M112-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0C94.3 32 80 17.7 80 0s14.3-32 32-32zM16 144c0-35.3 28.7-64 64-64l160 0c35.3 0 64 28.7 64 64 0 24.1-13.3 45.1-33 56 19.7 10.9 33 31.9 33 56s-13.3 45.1-33 56c19.7 10.9 33 31.9 33 56s-13.3 45.1-33 56c19.7 10.9 33 31.9 33 56 0 35.3-28.7 64-64 64L80 544c-35.3 0-64-28.7-64-64 0-24.1 13.3-45.1 33-56-19.7-10.9-33-31.9-33-56s13.3-45.1 33-56c-19.7-10.9-33-31.9-33-56s13.3-45.1 33-56c-19.7-10.9-33-31.9-33-56z"]
}, r4 = {
  prefix: "fas",
  iconName: "tv",
  icon: [576, 512, [63717, "television", "tv-alt"], "f26c", "M64 96l0 240 448 0 0-240-448 0zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 240c0 35.3-28.7 64-64 64L64 400c-35.3 0-64-28.7-64-64L0 96zM160 448l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
}, l4 = {
  prefix: "fas",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]
}, d4 = {
  prefix: "fas",
  iconName: "flag",
  icon: [448, 512, [127988, 61725], "f024", "M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-121.6 62.7-18.8c41.9-12.6 87.1-8.7 126.2 10.9 42.7 21.4 92.5 24 137.2 7.2l37.1-13.9c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-11.8 5.9c-44.9 22.5-97.8 22.5-142.8 0-36.4-18.2-78.3-21.8-117.2-10.1L64 54.4 64 32z"]
}, f4 = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]
}, I2 = {
  prefix: "fas",
  iconName: "mug-saucer",
  icon: [576, 512, ["coffee"], "f0f4", "M64 64c0-17.7 14.3-32 32-32l352 0c70.7 0 128 57.3 128 128S518.7 288 448 288c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L64 64zm448 96c0-35.3-28.7-64-64-64l0 128c35.3 0 64-28.7 64-64zM64 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
}, h4 = I2, m4 = {
  prefix: "fas",
  iconName: "lock",
  icon: [384, 512, [128274], "f023", "M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]
}, u4 = {
  prefix: "fas",
  iconName: "volume-high",
  icon: [640, 512, [128266, "volume-up"], "f028", "M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C557.5 113.8 592 180.8 592 256s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.7 640 346.2 640 256S598.5 85.2 533.6 32.5zM473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C434.1 312.9 448 286.1 448 256s-13.9-56.9-35.4-74.5zM80 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L128 160 80 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48z"]
}, A4 = {
  prefix: "fas",
  iconName: "fire-extinguisher",
  icon: [512, 512, [129519], "f134", "M512 32c0-9.6-4.3-18.7-11.7-24.7S483.1-1.3 473.7 .6l-160 32C301.5 35.1 292 44.3 289 56l-65 0 0-24c0-17.7-14.3-32-32-32L160 0c-17.7 0-32 14.3-32 32l0 28.4c-55.3 12.3-101.3 49.5-125.5 99.1-5.8 11.9-.9 26.3 11.1 32.1s26.3 .9 32.1-11.1C62 146.9 91.8 121.1 128 110l0 28.8c-37.8 18-64 56.5-64 101.2l0 128 224 0 0-128c0-44.7-26.2-83.2-64-101.2l0-34.8 65 0c3 11.7 12.5 20.9 24.7 23.4l160 32c9.4 1.9 19.1-.6 26.6-6.6S512 137.6 512 128l0-96zM288 448l0-32-224 0 0 32c0 35.3 28.7 64 64 64l96 0c35.3 0 64-28.7 64-64z"]
}, p4 = {
  prefix: "fas",
  iconName: "couch",
  icon: [640, 512, [], "f4b8", "M144 272C144 224.7 109.8 185.4 64.8 177.5 72 113.6 126.2 64 192 64l256 0c65.8 0 120 49.6 127.2 113.5-45 8-79.2 47.2-79.2 94.5l0 32-352 0 0-32zM0 384L0 272c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 448 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64z"]
}, g4 = {
  prefix: "fas",
  iconName: "child",
  icon: [320, 512, [], "f1ae", "M96 64A64 64 0 1 1 224 64 64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32L80 287.8 59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z"]
}, b4 = {
  prefix: "fas",
  iconName: "toggle-on",
  icon: [576, 512, [], "f205", "M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192S490 64 384 64L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]
}, x4 = {
  prefix: "fas",
  iconName: "battery-full",
  icon: [640, 512, [128267, "battery", "battery-5"], "f240", "M528 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l416 0zM112 64c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80L112 64zm56 112c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24l304 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24l-304 0z"]
}, y4 = {
  prefix: "fas",
  iconName: "shield-halved",
  icon: [512, 512, ["shield-alt"], "f3ed", "M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]
}, v4 = {
  prefix: "fas",
  iconName: "globe",
  icon: [512, 512, [127760], "f0ac", "M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]
}, k4 = {
  prefix: "fas",
  iconName: "battery-quarter",
  icon: [640, 512, ["battery-2"], "f243", "M528 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l416 0zM112 64c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80L112 64zm56 112c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24l-64 0z"]
}, w4 = {
  prefix: "fas",
  iconName: "paw",
  icon: [512, 512, [], "f1b0", "M234.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5 .3-86.2 32.6-96.8 70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3-14.3-70.1 10.2-84.1 59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2-25.8 0-46.7-20.9-46.7-46.7l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3 29.1 51.7 10.2 84.1-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5 46.9 53.9 32.6 96.8-52.1 69.1-84.4 58.5z"]
}, _4 = {
  prefix: "fas",
  iconName: "bed",
  icon: [576, 512, [128716], "f236", "M32 32c17.7 0 32 14.3 32 32l0 224 224 0 0-128c0-17.7 14.3-32 32-32l160 0c53 0 96 43 96 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-448 0 0 64c0 17.7-14.3 32-32 32S0 465.7 0 448L0 64C0 46.3 14.3 32 32 32zm80 160a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]
}, z4 = {
  prefix: "fas",
  iconName: "person-running",
  icon: [448, 512, [127939, "running"], "f70c", "M256.5-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM123.6 176c-3.3 0-6.2 2-7.4 5L94.2 235.9c-6.6 16.4-25.2 24.4-41.6 17.8s-24.4-25.2-17.8-41.6l21.9-54.9C67.7 129.9 94.1 112 123.6 112l97.3 0c28.5 0 54.8 15.1 69.1 39.7l32.8 56.3 61.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-61.6 0c-22.8 0-43.8-12.1-55.3-31.8l-10-17.1-20.7 70.4 75.4 22.6c27.7 8.3 41.8 39 30.1 65.5L285.7 509c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l49.2-110.8-95.9-28.8c-32.7-9.8-52-43.7-43.7-76.8l22.7-90.6-35.9 0zm-8 181c13.3 14.9 30.7 26.3 51.2 32.4l4.7 1.4-6.9 19.3c-5.8 16.3-16 30.8-29.3 41.8L52.9 519.8c-13.6 11.2-33.8 9.3-45-4.3s-9.3-33.8 4.3-45l82.4-67.9c4.5-3.7 7.8-8.5 9.8-13.9L115.6 357z"]
}, M4 = {
  prefix: "fas",
  iconName: "music",
  icon: [512, 512, [127925], "f001", "M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]
}, C4 = {
  prefix: "fas",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]
}, L4 = {
  prefix: "fas",
  iconName: "fan",
  icon: [512, 512, [], "f863", "M160 144c0-79.5 64.5-144 144-144 8.8 0 16 7.2 16 16l0 152.2c15-5.3 31.2-8.2 48-8.2 79.5 0 144 64.5 144 144 0 8.8-7.2 16-16 16l-152.2 0c5.3 15 8.2 31.2 8.2 48 0 79.5-64.5 144-144 144-8.8 0-16-7.2-16-16l0-152.2c-15 5.3-31.2 8.2-48 8.2-79.5 0-144-64.5-144-144 0-8.8 7.2-16 16-16l152.2 0c-5.3-15-8.2-31.2-8.2-48zm96 144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, S4 = {
  prefix: "fas",
  iconName: "door-closed",
  icon: [448, 512, [128682], "f52a", "M32 64C32 28.7 60.7 0 96 0L352 0c35.3 0 64 28.7 64 64l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64zM320 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, E4 = {
  prefix: "fas",
  iconName: "soap",
  icon: [512, 512, [129532], "e06e", "M208-32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM320 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM352 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 160l112 0c0 23.8 7.4 45.9 20.1 64L160 224c-53 0-96 43-96 96s43 96 96 96l192 0c53 0 96-43 96-96 0-35.1-18.9-65.9-47-82.6 19-19.8 30.7-46.6 31-76.1 45.4 7.6 80 47.1 80 94.7l0 128c0 53-43 96-96 96L96 480c-53 0-96-43-96-96L0 256c0-53 43-96 96-96zm64 112l192 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48s21.5-48 48-48z"]
}, I4 = {
  prefix: "fas",
  iconName: "recycle",
  icon: [512, 512, [9842, 9850, 9851], "f1b8", "M152.3 60C198.5-20 314-20 360.2 60l37.3 64.6 27.7-16c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3L436.9 223c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l27.7-16-37.3-64.6c-21.6-37.3-75.4-37.3-97 0l-5.3 9.1c-8.8 15.3-28.4 20.5-43.7 11.7S138.2 84.5 147 69.1l5.3-9.1zM449.7 279.1c15.3-8.8 34.9-3.6 43.7 11.7l5.3 9.1c46.2 80-11.5 180-103.9 180l-74.6 0 0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 74.6 0c43.1 0 70.1-46.7 48.5-84l-5.3-9.1c-8.8-15.3-3.6-34.9 11.7-43.7zM51 235.4l-27.7-16c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20L116.5 152c12.8-3.4 26 4.2 29.4 17l23.4 87.4c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-27.7-16-37.3 64.6c-21.6 37.3 5.4 84 48.5 84l10.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.6 0C25.3 480-32.4 380 13.8 300L51 235.4z"]
}, N4 = {
  prefix: "fas",
  iconName: "money-bill-1",
  icon: [512, 512, ["money-bill-alt"], "f3d1", "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm192 80a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM64 184l0-48c0-4.4 3.6-8 8-8l48 0c4.4 0 8.1 3.6 7.5 8-3.6 29-26.6 51.9-55.5 55.5-4.4 .5-8-3.1-8-7.5zm0 144c0-4.4 3.6-8.1 8-7.5 29 3.6 51.9 26.6 55.5 55.5 .5 4.4-3.1 8-7.5 8l-48 0c-4.4 0-8-3.6-8-8l0-48zM440 191.5c-29-3.6-51.9-26.6-55.5-55.5-.5-4.4 3.1-8 7.5-8l48 0c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8.1-8 7.5zM448 328l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8.1-3.6-7.5-8 3.6-29 26.6-51.9 55.5-55.5 4.4-.5 8 3.1 8 7.5zM240 188c-11 0-20 9-20 20 0 9.7 6.9 17.7 16 19.6l0 48.4-4 0c-11 0-20 9-20 20s9 20 20 20l48 0c11 0 20-9 20-20s-9-20-20-20l-4 0 0-68c0-11-9-20-20-20l-16 0z"]
}, D4 = {
  prefix: "fas",
  iconName: "cloud-bolt",
  icon: [512, 512, [127785, "thunderstorm"], "f76c", "M0 224c0 53 43 96 96 96l38.6 0 124.1-111c12.2-10.9 28-17 44.4-17 44.6 0 76.5 43 63.7 85.7L354.1 320 416 320c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0 1.1-5.2 1.6-10.5 1.6-16 0-44.2-35.8-80-80-80-24.3 0-46.1 10.9-60.8 28-18.7-35.7-56.1-60-99.2-60-61.9 0-112 50.1-112 112 0 7.1 .7 14.1 1.9 20.8-38.3 12.6-65.9 48.7-65.9 91.2zM160.6 400l61.8 0-31.2 104.1c-3.6 11.9 5.3 23.9 17.8 23.9 4.6 0 9-1.7 12.4-4.7L362.5 396.9c3.5-3.1 5.5-7.6 5.5-12.4 0-9.2-7.4-16.6-16.6-16.6l-61.8 0 31.2-104.1c3.6-11.9-5.3-23.9-17.8-23.9-4.6 0-9 1.7-12.4 4.7L149.5 371.1c-3.5 3.1-5.5 7.6-5.5 12.4 0 9.2 7.4 16.6 16.6 16.6z"]
}, B4 = {
  prefix: "fas",
  iconName: "mug-hot",
  icon: [576, 512, [9749], "f7b6", "M152-16c-13.3 0-24 10.7-24 24 0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.3 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C183.5 31.7 176 24.1 176 8 176-5.3 165.3-16 152-16zM96 192c-17.7 0-32 14.3-32 32l0 192c0 53 43 96 96 96l192 0c41.8 0 77.4-26.7 90.5-64l5.5 0c70.7 0 128-57.3 128-128S518.7 192 448 192L96 192zM448 384l0-128c35.3 0 64 28.7 64 64s-28.7 64-64 64zM288 8c0-13.3-10.7-24-24-24S240-5.3 240 8c0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.3 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C295.5 31.7 288 24.1 288 8z"]
}, T4 = {
  prefix: "fas",
  iconName: "bolt",
  icon: [448, 512, [9889, "zap"], "f0e7", "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"]
}, P4 = {
  prefix: "fas",
  iconName: "jar",
  icon: [320, 512, [], "e516", "M32-8c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 16C42.7 16 32 5.3 32-8zM0 128C0 92.7 28.7 64 64 64l192 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128zm96 64c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L96 192z"]
}, O4 = {
  prefix: "fas",
  iconName: "wifi",
  icon: [576, 512, ["wifi-3", "wifi-strong"], "f1eb", "M288 96c-90.9 0-173.2 36-233.7 94.6-12.7 12.3-33 12-45.2-.7s-12-33 .7-45.2C81.7 74.9 179.9 32 288 32S494.3 74.9 566.3 144.7c12.7 12.3 13 32.6 .7 45.2s-32.6 13-45.2 .7C461.2 132 378.9 96 288 96zM240 432a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM168 326.2c-11.7 13.3-31.9 14.5-45.2 2.8s-14.5-31.9-2.8-45.2C161 237.4 221.1 208 288 208s127 29.4 168 75.8c11.7 13.3 10.4 33.5-2.8 45.2s-33.5 10.4-45.2-2.8C378.6 292.9 335.8 272 288 272s-90.6 20.9-120 54.2z"]
}, H4 = {
  prefix: "fas",
  iconName: "elevator",
  icon: [512, 512, [], "e16d", "M292.7-4.7l64 64c6.2 6.2 16.4 6.2 22.6 0l64-64c4.6-4.6 5.9-11.5 3.5-17.4S438.5-32 432-32L304-32c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4zm-160-22.6l-64 64c-4.6 4.6-5.9 11.5-3.5 17.4S73.5 64 80 64l128 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-64-64c-6.2-6.2-16.4-6.2-22.6 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 128zm96 96a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM80 400c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-16zm192 0c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-16zm32-128a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]
}, F4 = {
  prefix: "fas",
  iconName: "hammer",
  icon: [640, 512, [128296], "f6e3", "M246.9 18.3L271 3.8c21.6-13 46.3-19.8 71.5-19.8 36.8 0 72.2 14.6 98.2 40.7l63.9 63.9c15 15 23.4 35.4 23.4 56.6l0 30.9 19.7 19.7 0 0c15.6-15.6 40.9-15.6 56.6 0s15.6 40.9 0 56.6l-64 64c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L464 240 433.1 240c-21.2 0-41.6-8.4-56.6-23.4l-49.1-49.1c-15-15-23.4-35.4-23.4-56.6l0-12.7c0-11.2-5.9-21.7-15.5-27.4l-41.6-25c-10.4-6.2-10.4-21.2 0-27.4zM50.7 402.7l222.1-222.1 90.5 90.5-222.1 222.1c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5z"]
}, j4 = {
  prefix: "fas",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, R4 = {
  prefix: "fas",
  iconName: "face-smile",
  icon: [512, 512, [128578, "smile"], "f118", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM165.4 321.9c20.4 28 53.4 46.1 90.6 46.1s70.2-18.1 90.6-46.1c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5C356.3 390 309.2 416 256 416s-100.3-26-129.4-65.9c-7.8-10.7-5.4-25.7 5.3-33.5s25.7-5.4 33.5 5.3zM144 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, q4 = {
  prefix: "fas",
  iconName: "umbrella",
  icon: [512, 512, [], "f0e9", "M256-32c17.7 0 32 14.3 32 32l0 2c126.3 15.7 224 123.5 224 254 0 3.8-.1 7.5-.2 11.3-.3 6.9-5 12.8-11.7 14.7s-13.8-.7-17.6-6.5c-14.4-21.4-38.8-35.5-66.5-35.5-29.3 0-54.9 15.7-68.9 39.3-2.7 4.6-7.6 7.6-13 7.8s-10.5-2.2-13.7-6.5c-14.6-19.8-38-32.6-64.5-32.6s-49.9 12.8-64.5 32.6c-3.2 4.3-8.3 6.8-13.7 6.5s-10.2-3.2-13-7.8c-14-23.6-39.6-39.3-68.9-39.3-27.7 0-52.1 14.1-66.5 35.5-3.9 5.7-11 8.4-17.6 6.5S.5 274.2 .2 267.3C.1 263.5 0 259.8 0 256 0 125.5 97.7 17.7 224 2l0-2c0-17.7 14.3-32 32-32zm32 360l0 102.6c0 45-36.5 81.4-81.4 81.4-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6 9.6 0 17.4-7.8 17.4-17.4L224 328c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Q4 = {
  prefix: "fas",
  iconName: "microchip",
  icon: [512, 512, [], "f2db", "M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm16 48l0 160 160 0 0-160-160 0z"]
}, W4 = {
  prefix: "fas",
  iconName: "pause",
  icon: [384, 512, [9208], "f04c", "M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"]
}, V4 = {
  prefix: "fas",
  iconName: "desktop",
  icon: [512, 512, [128421, 61704, "desktop-alt"], "f390", "M64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l144 0-16 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-16-48 144 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L96 320c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32z"]
}, U4 = {
  prefix: "fas",
  iconName: "location-dot",
  icon: [384, 512, ["map-marker-alt"], "f3c5", "M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]
}, Y4 = {
  prefix: "fas",
  iconName: "screwdriver-wrench",
  icon: [576, 512, ["tools"], "f7d9", "M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z"]
}, G4 = {
  prefix: "fas",
  iconName: "battery-empty",
  icon: [640, 512, ["battery-0"], "f244", "M112 64c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80L112 64zM96 144c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224z"]
}, Z4 = {
  prefix: "fas",
  iconName: "keyboard",
  icon: [576, 512, [9e3], "f11c", "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM176 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]
}, J4 = {
  prefix: "fas",
  iconName: "stopwatch",
  icon: [448, 512, [9201], "f2f2", "M168.5 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 25.3c-108 11.9-192 103.5-192 214.7 0 119.3 96.7 216 216 216s216-96.7 216-216c0-39.8-10.8-77.1-29.6-109.2l28.2-28.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-23.4 23.4c-32.9-30.2-75.2-50.3-122-55.5l0-25.3 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0zm80 184l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-13.3 10.7-24 24-24s24 10.7 24 24z"]
}, X4 = {
  prefix: "fas",
  iconName: "satellite-dish",
  icon: [512, 512, [128225], "f7c0", "M232 0c154.6 0 280 125.4 280 280 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232-13.3 0-24-10.7-24-24S218.7 0 232 0zM208 120c0-13.3 10.7-24 24-24 101.6 0 184 82.4 184 184 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-75.1-60.9-136-136-136-13.3 0-24-10.7-24-24zM26.4 142.7c8.8-17.9 32.4-19.9 46.5-5.8l128.5 128.5 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32 128.5 128.5c14.1 14.1 12 37.6-5.8 46.5-34.2 16.9-72.6 26.4-113.3 26.4-141.4 0-256-114.6-256-256 0-40.7 9.5-79.2 26.4-113.3z"]
}, $4 = {
  prefix: "fas",
  iconName: "train",
  icon: [384, 512, [128646], "f238", "M0 96C0 43 43 0 96 0L288 0c53 0 96 43 96 96l0 256c0 40.1-24.6 74.5-59.5 88.8l53.9 63.7c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8l-74-87.5-151.3 0-74 87.5c-8.6 10.1-23.7 11.4-33.8 2.8s-11.4-23.7-2.8-33.8l53.9-63.7C24.6 426.5 0 392.1 0 352L0 96zm64 32l0 96c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32zM192 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, K4 = {
  prefix: "fas",
  iconName: "gamepad",
  icon: [640, 512, [], "f11b", "M448 64c106 0 192 86 192 192S554 448 448 448l-256 0C86 448 0 362 0 256S86 64 192 64l256 0zM192 176c-13.3 0-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24zm240 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64-96a32 32 0 1 0 0 64 32 32 0 1 0 0-64z"]
}, e3 = {
  prefix: "fas",
  iconName: "circle-dot",
  icon: [512, 512, [128280, "dot-circle"], "f192", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]
}, t3 = {
  prefix: "fas",
  iconName: "ship",
  icon: [640, 512, [128674], "f21a", "M272 0c-26.5 0-48 21.5-48 48l0 16-16 0c-44.2 0-80 35.8-80 80l0 108.8-21.6 8.6c-14.8 5.9-22.5 22.4-17.4 37.5 10.4 31.3 26.8 59.3 47.7 83.1 20.1-9.2 41.7-13.9 63.3-14 33.1-.2 66.3 10.2 94.4 31.4l1.6 1.2 0-215-104 41.6 0-83.2c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 83.2-104-41.6 0 215 1.6-1.2c27.5-20.7 59.9-31.2 92.4-31.4 22.3-.1 44.6 4.5 65.3 14 20.9-23.7 37.3-51.8 47.7-83.1 5-15.2-2.6-31.6-17.4-37.5L512 252.8 512 144c0-44.2-35.8-80-80-80l-16 0 0-16c0-26.5-21.5-48-48-48L272 0zM403.4 476.1c21.3-16.1 49.9-16.1 71.2 0 19 14.4 41.9 28.2 67.2 33.3 26.5 5.4 54.3 .8 80.7-19.1 10.6-8 12.7-23 4.7-33.6s-23-12.7-33.6-4.7c-14.9 11.2-28.6 13.1-42.3 10.3-14.9-3-30.9-11.9-47.8-24.6-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-21.6 16.3-41.3 25.8-58.9 25.7-9.6-.1-19.9-3-31.2-11.5-10.6-8-25.6-5.9-33.6 4.7S7 482.3 17.6 490.3c19.1 14.4 39.4 21 59.8 21.1 33.9 .2 64.3-17.4 88.1-35.3 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9z"]
}, n3 = {
  prefix: "fas",
  iconName: "cat",
  icon: [576, 512, [128008], "f6be", "M64 96c53 0 96 43 96 96l0 85.8c29.7-44.7 77.8-76.2 133.4-84 25.6 60 85.2 102.1 154.6 102.1 10.9 0 21.6-1.1 32-3.1L480 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-140.8-136 108.8 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-224c0-16.6-12.6-30.2-28.7-31.8l-6.6-.3C44.6 158.2 32 144.6 32 128 32 110.3 46.3 96 64 96zM533.8 3.2C544.2-5.5 560 1.9 560 15.5L560 128c0 61.9-50.1 112-112 112S336 189.9 336 128l0-112.5c0-13.6 15.8-21 26.2-12.3L416 48 480 48 533.8 3.2zM400 108a20 20 0 1 0 0 40 20 20 0 1 0 0-40zm96 0a20 20 0 1 0 0 40 20 20 0 1 0 0-40z"]
}, o3 = {
  prefix: "fas",
  iconName: "cake-candles",
  icon: [448, 512, [127874, "birthday-cake", "cake"], "f1fd", "M86.4-10.5L61.8 31.6C58 38.1 56 45.6 56 53.2L56 56c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L105.6-10.5c-2-3.4-5.7-5.5-9.6-5.5s-7.6 2.1-9.6 5.5zm128 0L189.8 31.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L233.6-10.5c-2-3.4-5.7-5.5-9.6-5.5s-7.6 2.1-9.6 5.5zM317.8 31.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L361.6-10.5c-2-3.4-5.7-5.5-9.6-5.5s-7.6 2.1-9.6 5.5L317.8 31.6zM128 160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.5C26.7 226.6 0 262.2 0 304l0 20.8c20.9 1.3 41.6 7.3 60.3 18l7.1 4.1c26.3 15 58.9 13.4 83.6-4.2 43.7-31.2 102.3-31.2 146 0 24.6 17.6 57.3 19.3 83.6 4.2l7.1-4.1c18.7-10.7 39.3-16.7 60.3-18l0-20.8c0-41.8-26.7-77.4-64-90.5l0-53.5c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48zM448 373c-12.7 1.2-25.1 5-36.5 11.5l-7.1 4.1c-42.6 24.3-95.4 21.7-135.3-6.8-27-19.3-63.2-19.3-90.2 0-39.9 28.5-92.7 31.2-135.3 6.8l-7.1-4.1C25.1 378 12.7 374.1 0 373l0 75c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-75z"]
}, a3 = {
  prefix: "fas",
  iconName: "chair",
  icon: [448, 512, [129681], "f6c0", "M152 256l0-181.8c-24.5 20.5-40 51.4-40 85.8l0 96 40 0zm48 0l48 0 0-205.4c-7.7-1.7-15.8-2.6-24-2.6s-16.3 .9-24 2.6L200 256zM296 74.2l0 181.8 40 0 0-96c0-34.4-15.5-65.2-40-85.8zM32 256l32 0 0-96C64 71.6 135.6 0 224 0S384 71.6 384 160l0 96 32 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-256 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z"]
}, i3 = {
  prefix: "fas",
  iconName: "wind",
  icon: [512, 512, [], "f72e", "M288 32c0 17.7 14.3 32 32 32l40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L32 112c-17.7 0-32 14.3-32 32s14.3 32 32 32l328 0c48.6 0 88-39.4 88-88S408.6 0 360 0L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l40 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L32 336c-17.7 0-32 14.3-32 32s14.3 32 32 32l136 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]
}, s3 = {
  prefix: "fas",
  iconName: "tablet-screen-button",
  icon: [448, 512, ["tablet-alt"], "f3fa", "M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM256 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64l-320 0 0 288 320 0 0-288z"]
}, c3 = {
  prefix: "fas",
  iconName: "shield",
  icon: [512, 512, [128737, "shield-blank"], "f132", "M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0z"]
};
const r3 = {
  "fa-alarm-clock": Cl,
  "fa-baby": Er,
  "fa-backward": t0,
  "fa-bath": Wl,
  "fa-battery-empty": G4,
  "fa-battery-full": x4,
  "fa-battery-half": pl,
  "fa-battery-quarter": k4,
  "fa-bed": _4,
  "fa-bell": Nr,
  "fa-bell-slash": s4,
  "fa-bicycle": r0,
  "fa-blender": Nl,
  "fa-bolt": T4,
  "fa-bookmark": N0,
  "fa-bottle-water": c4,
  "fa-bowl-food": Zr,
  "fa-broom": jl,
  "fa-building": c0,
  "fa-bus": o4,
  "fa-cake-candles": o3,
  "fa-calendar-days": Tr,
  "fa-camera": $r,
  "fa-car": Cr,
  "fa-car-side": v0,
  "fa-carrot": Xl,
  "fa-cat": n3,
  "fa-chair": a3,
  "fa-champagne-glasses": C0,
  "fa-chart-line": s0,
  "fa-chart-simple": e4,
  "fa-child": g4,
  "fa-circle-check": R0,
  "fa-circle-dot": e3,
  "fa-circle-exclamation": e0,
  "fa-circle-half-stroke": fl,
  "fa-circle-pause": Or,
  "fa-circle-play": U0,
  "fa-clock": hl,
  "fa-clone": gl,
  "fa-cloud": Kl,
  "fa-cloud-bolt": D4,
  "fa-cloud-rain": Sl,
  "fa-cloud-showers-heavy": f0,
  "fa-cloud-sun": T0,
  "fa-coffee": h4,
  "fa-comments": j0,
  "fa-compass": j4,
  "fa-copy": C4,
  "fa-couch": p4,
  "fa-desktop": V4,
  "fa-display": Qr,
  "fa-dog": zr,
  "fa-door-closed": S4,
  "fa-door-open": Xr,
  "fa-droplet": H0,
  "fa-drumstick-bite": K0,
  "fa-dumbbell": P0,
  "fa-elevator": H4,
  "fa-envelope": Sr,
  "fa-eye": tl,
  "fa-face-grin-stars": el,
  "fa-face-smile": R4,
  "fa-fan": L4,
  "fa-film": F0,
  "fa-fingerprint": w0,
  "fa-fire": _l,
  "fa-fire-extinguisher": A4,
  "fa-fire-flame-curved": Il,
  "fa-flag": d4,
  "fa-forward": bl,
  "fa-gamepad": K4,
  "fa-gauge": Fr,
  "fa-gauge-high": B0,
  "fa-gear": l0,
  "fa-gem": g0,
  "fa-gift": Hr,
  "fa-glass-water": p0,
  "fa-globe": v4,
  "fa-hammer": F4,
  "fa-hand": o0,
  "fa-hands-wash": Ol,
  "fa-headphones": n4,
  "fa-heart": Al,
  "fa-heart-pulse": Tl,
  "fa-highlighter": $l,
  "fa-hospital": El,
  "fa-hourglass": $0,
  "fa-house": _0,
  "fa-house-chimney": d0,
  "fa-house-lock": nl,
  "fa-jar": P4,
  "fa-key": Vr,
  "fa-keyboard": Z4,
  "fa-kitchen-set": Mr,
  "fa-laptop": Hl,
  "fa-leaf": Y0,
  "fa-life-ring": k0,
  "fa-lightbulb": Jl,
  "fa-location-dot": U4,
  "fa-lock": m4,
  "fa-lock-open": O0,
  "fa-map-pin": Lr,
  "fa-message": Br,
  "fa-microchip": Q4,
  "fa-mobile-screen": W0,
  "fa-money-bill1": N4,
  "fa-moon": q0,
  "fa-motorcycle": G0,
  "fa-mountain-sun": Yl,
  "fa-mug-hot": B4,
  "fa-mug-saucer": I2,
  "fa-music": M4,
  "fa-newspaper": Ll,
  "fa-note-sticky": al,
  "fa-paper-plane": ml,
  "fa-pause": W4,
  "fa-paw": w4,
  "fa-person": X0,
  "fa-person-running": z4,
  "fa-person-walking": M0,
  "fa-phone": V0,
  "fa-photo-video": wl,
  "fa-plane": Q0,
  "fa-plate-wheat": h0,
  "fa-play": u0,
  "fa-plug": a4,
  "fa-plug-circle-bolt": Zl,
  "fa-power-off": Rr,
  "fa-puzzle-piece": A0,
  "fa-radio": ll,
  "fa-rainbow": Kr,
  "fa-rectangle-list": n0,
  "fa-recycle": I4,
  "fa-satellite-dish": X4,
  "fa-screwdriver-wrench": Y4,
  "fa-seedling": yl,
  "fa-share-from-square": ol,
  "fa-shield": c3,
  "fa-shield-halved": y4,
  "fa-shield-heart": ql,
  "fa-shield-virus": xl,
  "fa-ship": t3,
  "fa-shirt": m0,
  "fa-shower": Ul,
  "fa-signal": qr,
  "fa-sliders": z0,
  "fa-smog": Yr,
  "fa-snowflake": S0,
  "fa-soap": E4,
  "fa-solar-panel": t4,
  "fa-spray-can": Z0,
  "fa-square-check": Ql,
  "fa-stairs": a0,
  "fa-star": l4,
  "fa-star-half": vl,
  "fa-stop": sl,
  "fa-stopwatch": J4,
  "fa-sun": Gl,
  "fa-table": ul,
  "fa-tablet-screen-button": s3,
  "fa-temperature-half": I0,
  "fa-temperature-high": cl,
  "fa-temperature-low": Jr,
  "fa-thermometer": Gr,
  "fa-thumbs-down": Fl,
  "fa-thumbs-up": i0,
  "fa-toggle-off": Dr,
  "fa-toggle-on": b4,
  "fa-toilet": b0,
  "fa-toolbox": jr,
  "fa-traffic-light": zl,
  "fa-train": $4,
  "fa-trash-can": y0,
  "fa-tree": Ur,
  "fa-triangle-exclamation": f4,
  "fa-truck": Ir,
  "fa-tv": r4,
  "fa-umbrella": q4,
  "fa-unlock": Wr,
  "fa-unlock-keyhole": dl,
  "fa-user": L0,
  "fa-user-shield": Bl,
  "fa-users": Ml,
  "fa-utensils": Rl,
  "fa-video": E2,
  "fa-video-camera": Dl,
  "fa-volume-high": u4,
  "fa-volume-low": J0,
  "fa-volume-xmark": D0,
  "fa-wand-magic-sparkles": i4,
  "fa-wand-sparkles": Vl,
  "fa-warehouse": Pr,
  "fa-water": il,
  "fa-wave-square": rl,
  "fa-wifi": O4,
  "fa-wind": i3,
  "fa-wine-glass": E0,
  "fa-wrench": x0
}, l3 = [
  { titleKey: "icons.group.home", keys: [
    "fa-house",
    "fa-house-chimney",
    "fa-building",
    "fa-warehouse",
    "fa-tree",
    "fa-couch",
    "fa-bed",
    "fa-chair",
    "fa-table",
    "fa-door-open",
    "fa-door-closed",
    "fa-stairs",
    "fa-elevator",
    "fa-bath",
    "fa-shower",
    "fa-toilet",
    "fa-utensils",
    "fa-mug-saucer",
    "fa-wine-glass",
    "fa-baby",
    "fa-child",
    "fa-person",
    "fa-dog",
    "fa-cat",
    "fa-paw",
    "fa-car",
    "fa-car-side",
    "fa-bicycle",
    "fa-motorcycle",
    "fa-plane",
    "fa-train",
    "fa-bus",
    "fa-ship",
    "fa-truck",
    "fa-kitchen-set",
    "fa-mountain-sun"
  ] },
  { titleKey: "icons.group.light", keys: [
    "fa-lightbulb",
    "fa-plug",
    "fa-power-off",
    "fa-toggle-on",
    "fa-toggle-off",
    "fa-sun",
    "fa-moon",
    "fa-star",
    "fa-fire",
    "fa-fire-flame-curved",
    "fa-bolt",
    "fa-wand-magic-sparkles",
    "fa-wand-sparkles",
    "fa-rainbow",
    "fa-circle-half-stroke",
    "fa-highlighter",
    "fa-traffic-light"
  ] },
  { titleKey: "icons.group.climate", keys: [
    "fa-temperature-high",
    "fa-temperature-low",
    "fa-temperature-half",
    "fa-thermometer",
    "fa-droplet",
    "fa-water",
    "fa-snowflake",
    "fa-wind",
    "fa-fan",
    "fa-smog",
    "fa-cloud",
    "fa-cloud-sun",
    "fa-cloud-rain",
    "fa-cloud-showers-heavy",
    "fa-cloud-bolt",
    "fa-umbrella",
    "fa-leaf",
    "fa-seedling",
    "fa-recycle",
    "fa-solar-panel"
  ] },
  { titleKey: "icons.group.security", keys: [
    "fa-shield",
    "fa-shield-halved",
    "fa-lock",
    "fa-lock-open",
    "fa-key",
    "fa-video",
    "fa-camera",
    "fa-eye",
    "fa-bell",
    "fa-bell-slash",
    "fa-triangle-exclamation",
    "fa-circle-exclamation",
    "fa-fire-extinguisher",
    "fa-fingerprint",
    "fa-user-shield",
    "fa-house-lock",
    "fa-unlock",
    "fa-unlock-keyhole",
    "fa-shield-heart",
    "fa-shield-virus"
  ] },
  { titleKey: "icons.group.media", keys: [
    "fa-tv",
    "fa-display",
    "fa-desktop",
    "fa-laptop",
    "fa-mobile-screen",
    "fa-tablet-screen-button",
    "fa-volume-high",
    "fa-volume-low",
    "fa-volume-xmark",
    "fa-music",
    "fa-radio",
    "fa-headphones",
    "fa-gamepad",
    "fa-film",
    "fa-play",
    "fa-pause",
    "fa-stop",
    "fa-forward",
    "fa-backward",
    "fa-circle-play",
    "fa-circle-pause",
    "fa-photo-video",
    "fa-video-camera"
  ] },
  { titleKey: "icons.group.appliances", keys: [
    "fa-hands-wash",
    "fa-broom",
    "fa-spray-can",
    "fa-soap",
    "fa-shirt",
    "fa-blender",
    "fa-coffee",
    "fa-mug-hot",
    "fa-bottle-water",
    "fa-glass-water",
    "fa-plate-wheat",
    "fa-carrot",
    "fa-drumstick-bite",
    "fa-bowl-food",
    "fa-jar"
  ] },
  { titleKey: "icons.group.sensors", keys: [
    "fa-gauge",
    "fa-gauge-high",
    "fa-wave-square",
    "fa-chart-line",
    "fa-chart-simple",
    "fa-heart-pulse",
    "fa-microchip",
    "fa-satellite-dish",
    "fa-wifi",
    "fa-signal",
    "fa-battery-full",
    "fa-battery-half",
    "fa-battery-quarter",
    "fa-battery-empty",
    "fa-plug-circle-bolt"
  ] },
  { titleKey: "icons.group.other", keys: [
    "fa-gear",
    "fa-sliders",
    "fa-wrench",
    "fa-screwdriver-wrench",
    "fa-hammer",
    "fa-toolbox",
    "fa-calendar-days",
    "fa-clock",
    "fa-stopwatch",
    "fa-alarm-clock",
    "fa-location-dot",
    "fa-map-pin",
    "fa-compass",
    "fa-globe",
    "fa-flag",
    "fa-bookmark",
    "fa-heart",
    "fa-thumbs-up",
    "fa-comments",
    "fa-envelope",
    "fa-phone",
    "fa-user",
    "fa-users",
    "fa-person-walking",
    "fa-person-running",
    "fa-dumbbell",
    "fa-puzzle-piece",
    "fa-gift",
    "fa-cake-candles",
    "fa-champagne-glasses",
    "fa-hourglass",
    "fa-gem",
    "fa-life-ring",
    "fa-newspaper",
    "fa-note-sticky",
    "fa-rectangle-list",
    "fa-clone",
    "fa-copy",
    "fa-trash-can",
    "fa-square-check",
    "fa-circle-check",
    "fa-circle-dot",
    "fa-hand",
    "fa-face-smile",
    "fa-face-grin-stars",
    "fa-keyboard",
    "fa-message",
    "fa-paper-plane",
    "fa-share-from-square",
    "fa-thumbs-down",
    "fa-star-half",
    "fa-hospital",
    "fa-money-bill1"
  ] }
];
var d3 = {
  prefix: "far",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z"]
}, f3 = {
  prefix: "far",
  iconName: "bell",
  icon: [448, 512, [128276, 61602], "f0f3", "M224 0c-13.3 0-24 10.7-24 24l0 9.7C118.6 45.3 56 115.4 56 200l0 14.5c0 37.7-10 74.7-29 107.3L5.1 359.2C1.8 365 0 371.5 0 378.2 0 399.1 16.9 416 37.8 416l372.4 0c20.9 0 37.8-16.9 37.8-37.8 0-6.7-1.8-13.3-5.1-19L421 321.7c-19-32.6-29-69.6-29-107.3l0-14.5c0-84.6-62.6-154.7-144-166.3l0-9.7c0-13.3-10.7-24-24-24zM392.4 368l-336.9 0 12.9-22.1C91.7 306 104 260.6 104 214.5l0-14.5c0-66.3 53.7-120 120-120s120 53.7 120 120l0 14.5c0 46.2 12.3 91.5 35.5 131.4L392.4 368zM156.1 464c9.9 28 36.6 48 67.9 48s58-20 67.9-48l-135.8 0z"]
}, h3 = {
  prefix: "far",
  iconName: "message",
  icon: [512, 512, ["comment-alt"], "f27a", "M203.7 512.9s0 0 0 0l-37.8 26.7c-7.3 5.2-16.9 5.8-24.9 1.7S128 529 128 520l0-72-32 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120.4 0-91.9 64.9zm64.3-104.1c8.1-5.7 17.8-8.8 27.7-8.8L416 400c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L96 80c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l56 0c10.4 0 19.3 6.6 22.6 15.9 .9 2.5 1.4 5.2 1.4 8.1l0 49.7c32.7-23.1 63.3-44.7 91.9-64.9z"]
}, m3 = {
  prefix: "far",
  iconName: "calendar-days",
  icon: [448, 512, ["calendar-alt"], "f073", "M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z"]
}, u3 = {
  prefix: "far",
  iconName: "circle-pause",
  icon: [512, 512, [62092, "pause-circle"], "f28b", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144z"]
}, A3 = {
  prefix: "far",
  iconName: "face-grin-stars",
  icon: [512, 512, [129321, "grin-stars"], "f587", "M0 256c0-29.6 5-57.9 14.2-84.4l17.3 16.9-4.6 27c-4.2 24.4 5.6 46.2 22 59.9 9.8 105.8 98.8 188.7 207.1 188.7s197.4-82.8 207.1-188.6c16.4-13.7 26.1-35.4 22-59.9l-4.6-27 17.3-16.9c9.2 26.4 14.2 54.8 14.2 84.4 0 141.4-114.6 256-256 256S0 397.4 0 256zM256 48c-15.2 0-30 1.6-44.3 4.7L201.4 31.8C197 23 191.1 15.8 184.2 10.2 207 3.6 231.1 0 256 0s49 3.6 71.8 10.2C320.9 15.8 315 23 310.6 31.8L300.3 52.7C286 49.6 271.2 48 256 48zM372.2 302.3c11.8-3.6 23.7 6.1 19.6 17.8-19.8 55.9-73.1 96-135.8 96-62.7 0-116-40-135.8-95.9-4.1-11.6 7.8-21.4 19.6-17.8 34.7 10.6 74.2 16.5 116.1 16.5 42 0 81.5-6 116.3-16.6zM353.7 53.1c5.9-11.9 22.8-11.9 28.7 0l23.3 47.2 52 7.6c13.1 1.9 18.4 18 8.9 27.3l-37.7 36.7 8.9 51.8c2.2 13.1-11.5 23-23.2 16.9L368 216 321.5 240.5c-11.7 6.2-25.5-3.8-23.2-16.9l8.9-51.8-37.7-36.7c-9.5-9.3-4.3-25.4 8.9-27.3l52-7.6 23.3-47.2zm-195.3 0l23.3 47.2 52 7.6c13.1 1.9 18.4 18 8.9 27.3l-37.7 36.7 8.9 51.8c2.2 13.1-11.5 23-23.2 16.9L144 216 97.5 240.5c-11.7 6.2-25.5-3.8-23.2-16.9l8.9-51.8-37.7-36.7c-9.5-9.3-4.3-25.4 8.9-27.3l52-7.6 23.3-47.2c5.9-11.9 22.8-11.9 28.7 0z"]
}, p3 = {
  prefix: "far",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"]
}, g3 = {
  prefix: "far",
  iconName: "share-from-square",
  icon: [576, 512, [61509, "share-square"], "f14d", "M425.5 7c-6.9-6.9-17.2-8.9-26.2-5.2S384.5 14.3 384.5 24l0 56-48 0c-88.4 0-160 71.6-160 160 0 46.7 20.7 80.4 43.6 103.4 8.1 8.2 16.5 14.9 24.3 20.4 9.2 6.5 21.7 5.7 30.1-1.9s10.2-20 4.5-29.8c-3.6-6.3-6.5-14.9-6.5-26.7 0-36.2 29.3-65.5 65.5-65.5l46.5 0 0 56c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l136-136c9.4-9.4 9.4-24.6 0-33.9L425.5 7zm7 97l0-22.1 78.1 78.1-78.1 78.1 0-22.1c0-13.3-10.7-24-24-24L338 192c-50.9 0-93.9 33.5-108.3 79.6-3.3-9.4-5.2-19.8-5.2-31.6 0-61.9 50.1-112 112-112l72 0c13.3 0 24-10.7 24-24zm-320-8c-44.2 0-80 35.8-80 80l0 256c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0z"]
}, b3 = {
  prefix: "far",
  iconName: "note-sticky",
  icon: [448, 512, [62026, "sticky-note"], "f249", "M240 432L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 176-88 0c-39.8 0-72 32.2-72 72l0 88zM380.1 320L288 412.1 288 344c0-13.3 10.7-24 24-24l68.1 0zM0 416c0 35.3 28.7 64 64 64l197.5 0c17 0 33.3-6.7 45.3-18.7L429.3 338.7c12-12 18.7-28.3 18.7-45.3L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416z"]
}, x3 = {
  prefix: "far",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, y3 = {
  prefix: "far",
  iconName: "paper-plane",
  icon: [576, 512, [61913], "f1d8", "M290.5 287.7L491.4 86.9 359 456.3 290.5 287.7zM457.4 53L256.6 253.8 88 185.3 457.4 53zM38.1 216.8l205.8 83.6 83.6 205.8c5.3 13.1 18.1 21.7 32.3 21.7 14.7 0 27.8-9.2 32.8-23.1L570.6 8c3.5-9.8 1-20.6-6.3-28s-18.2-9.8-28-6.3L39.4 151.7c-13.9 5-23.1 18.1-23.1 32.8 0 14.2 8.6 27 21.7 32.3z"]
}, v3 = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"]
}, k3 = {
  prefix: "far",
  iconName: "clone",
  icon: [512, 512, [], "f24d", "M288 464L64 464c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l48 0 0-48-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-48 0 0 48c0 8.8-7.2 16-16 16zM224 304c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-224 0zm-64-16c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224z"]
}, w3 = {
  prefix: "far",
  iconName: "star-half",
  icon: [576, 512, [61731], "f089", "M285.7-15.8c10.8 2.6 18.4 12.2 18.4 23.3l0 387.1c0 9-5.1 17.3-13.1 21.4L143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3L193.1 125.3 258.8-3.3c5-9.9 16.2-15 27-12.4zM256.1 107.4L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 92.2-46.9 0-272.6z"]
}, _3 = {
  prefix: "far",
  iconName: "newspaper",
  icon: [512, 512, [128240], "f1ea", "M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM192 152c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48zm152 24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM216 256l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, z3 = {
  prefix: "far",
  iconName: "hospital",
  icon: [576, 512, [127973, 62589, "hospital-alt", "hospital-wide"], "f0f8", "M176 0c-35.3 0-64 28.7-64 64l0 48-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-272c0-35.3-28.7-64-64-64l-48 0 0-48c0-35.3-28.7-64-64-64L176 0zM160 64c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 72c0 13.3 10.7 24 24 24l72 0c8.8 0 16 7.2 16 16l0 272c0 8.8-7.2 16-16 16l-176 0 0-80c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 80-176 0c-8.8 0-16-7.2-16-16l0-272c0-8.8 7.2-16 16-16l72 0c13.3 0 24-10.7 24-24l0-72zM112 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM96 336l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm320 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm16-112c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM264 104l0 32-32 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"]
}, M3 = {
  prefix: "far",
  iconName: "comment",
  icon: [512, 512, [128489, 61669], "f075", "M51.9 384.9C19.3 344.6 0 294.4 0 240 0 107.5 114.6 0 256 0S512 107.5 512 240 397.4 480 256 480c-36.5 0-71.2-7.2-102.6-20L37 509.9c-3.7 1.6-7.5 2.1-11.5 2.1-14.1 0-25.5-11.4-25.5-25.5 0-4.3 1.1-8.5 3.1-12.2l48.8-89.4zm37.3-30.2c12.2 15.1 14.1 36.1 4.8 53.2l-18 33.1 58.5-25.1c11.8-5.1 25.2-5.2 37.1-.3 25.7 10.5 54.2 16.4 84.3 16.4 117.8 0 208-88.8 208-192S373.8 48 256 48 48 136.8 48 240c0 42.8 15.1 82.4 41.2 114.7z"]
}, C3 = {
  prefix: "far",
  iconName: "thumbs-down",
  icon: [512, 512, [128078, 61576], "f165", "M360 32l7.4 .4c35 3.6 62.5 32.2 64.4 67.7 17.8 11.8 30.1 31.4 32 53.9l.2 6c0 5.7-.7 11.2-2 16.5 10.2 11.5 16.8 26.3 17.8 42.7l.2 4.8c0 13.2-3.6 25.4-9.8 36 4.9 8.4 8.2 17.9 9.3 28l.4 8c0 37.3-28.3 67.9-64.6 71.6l-7.4 .4-109.7 0 14.1 30 3.1 7.6c12.5 35.7-1.8 75.5-34.2 95l-7.2 3.9c-37.5 17.6-81.7 3.6-102.6-31.2l-.6-.9-2.7-5-.6-1.2-30.1-64c-9.4 17.8-28 29.9-49.5 29.9l-32 0c-30.9 0-56-25.1-56-56L0 152c0-30.9 25.1-56 56-56l32 0c12.4 0 23.9 4.1 33.2 11 13.2-21.4 32-39.4 55-51.6l12.2-6.5 .7-.3 6.6-3.2 .7-.3 7.1-3c16.7-6.6 34.5-9.9 52.6-9.9L360 32zM255.9 80c-12 0-23.9 2.3-35.1 6.6l-4.7 2-5.3 2.6 0 0-12.2 6.5c-29.2 15.5-48.3 44.9-50.7 77.6l-.2 8 0 112.9 .1 4.1c.5 8.2 2.5 16.2 6 23.7l56.8 120.9 2.1 3.8c8.4 13.7 26 19.1 40.8 12.2l2.9-1.6c13-7.8 18.7-23.7 13.7-38l-1.2-3-30.2-64.2c-3.5-7.4-2.9-16.1 1.5-23.1s12-11.1 20.2-11.1l147.5 0 2.4-.1c11.3-1.1 20.3-10.1 21.4-21.4l.1-2.5c0-7.1-3.1-13.5-8.2-18-5.2-4.6-8.2-11.1-8.2-18s3-13.4 8.2-18c4.4-3.9 7.4-9.3 8-15.3l.2-2.7c0-8.4-4.4-15.9-11.2-20.2-10.7-6.9-14.2-20.9-8-32 1.5-2.6 2.5-5.6 2.9-8.6l.2-3.2c0-10.6-6.9-19.6-16.6-22.8-11.7-3.8-18.7-15.9-16-28 .2-.9 .3-1.8 .4-2.6l.2-2.6c0-12.4-9.5-22.6-21.6-23.8L360 80 255.9 80zM56 144c-4.4 0-8 3.6-8 8l0 224c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-224c0-4.4-3.6-8-8-8l-32 0z"]
}, L3 = {
  prefix: "far",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"]
}, S3 = {
  prefix: "far",
  iconName: "sun",
  icon: [576, 512, [9728], "f185", "M288-32c8 0 15.4 4 19.9 10.6l58.8 87.4 103.4-20.2c7.8-1.5 15.9 .9 21.6 6.6s8.1 13.8 6.6 21.6L478 177.3 565.4 236.1C572 240.5 576 248 576 256s-4 15.4-10.6 19.9L478 334.7 498.2 438c1.5 7.8-.9 15.9-6.6 21.6s-13.8 8.1-21.6 6.6L366.7 446 307.9 533.4C303.4 540 296 544 288 544s-15.4-4-19.9-10.6L209.3 446 105.9 466.2c-7.8 1.5-15.9-.9-21.6-6.6s-8.1-13.8-6.6-21.6L98 334.7 10.6 275.9C4 271.4 0 264 0 256s4-15.4 10.6-19.9L98 177.3 77.8 73.9c-1.5-7.8 .9-15.9 6.6-21.6s13.8-8.1 21.6-6.6l103.3 20.2 58.8-87.4 1.8-2.3C274.4-29 281-32 288-32zm-47.8 138c-5.4 8-15 12-24.5 10.2l-84-16.4 16.4 84c1.8 9.5-2.2 19.1-10.2 24.5L67 256 138 303.8c8 5.4 12 15 10.2 24.5l-16.4 84 84-16.4 3.5-.4c8.3-.4 16.3 3.6 21 10.6l47.8 71 47.8-71 2.2-2.8c5.6-6.1 14-9 22.3-7.3l84 16.4-16.4-84c-1.8-9.5 2.2-19.1 10.2-24.5l71-47.8-71-47.8c-8-5.4-12-15-10.2-24.5l16.4-84-84 16.4c-9.5 1.8-19.1-2.2-24.5-10.2l-47.8-71-47.8 71zM288 376a120 120 0 1 1 0-240 120 120 0 1 1 0 240zm0-192a72 72 0 1 0 0 144 72 72 0 1 0 0-144z"]
}, E3 = {
  prefix: "far",
  iconName: "image",
  icon: [448, 512, [], "f03e", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm136 72c8.5 0 16.4 4.5 20.7 11.8l80 136c4.4 7.4 4.4 16.6 .1 24.1S352.6 384 344 384l-240 0c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2s15.2 3.8 19.7 10.2l17.2 24.6 46.5-79c4.3-7.3 12.2-11.8 20.7-11.8z"]
}, I3 = {
  prefix: "far",
  iconName: "lightbulb",
  icon: [384, 512, [128161], "f0eb", "M296.5 291.1C321 265.2 336 230.4 336 192 336 112.5 271.5 48 192 48S48 112.5 48 192c0 38.4 15 73.2 39.5 99.1 21.3 22.4 44.9 54 53.3 92.9l102.4 0c8.4-39 32-70.5 53.3-92.9zm34.8 33C307.7 349 288 379.4 288 413.7l0 18.3c0 44.2-35.8 80-80 80l-32 0c-44.2 0-80-35.8-80-80l0-18.3C96 379.4 76.3 349 52.7 324.1 20 289.7 0 243.2 0 192 0 86 86 0 192 0S384 86 384 192c0 51.2-20 97.7-52.7 132.1zM144 184c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40z"]
}, N3 = {
  prefix: "far",
  iconName: "map",
  icon: [512, 512, [128506, 62072], "f279", "M512 48c0-8.3-4.3-16-11.3-20.4s-15.9-4.8-23.3-1.1L352.5 88.1 180 29.4c-13.7-4.7-28.7-3.8-41.9 2.3L13.8 90.3C5.4 94.2 0 102.7 0 112L0 464c0 8.2 4.2 15.9 11.1 20.3s15.6 4.9 23.1 1.4l127.3-59.9 170.7 56.9c13.7 4.6 28.5 3.7 41.6-2.5l124.4-58.5c8.4-4 13.8-12.4 13.8-21.7l0-352zM144 82.1l0 299-96 45.2 0-299 96-45.2zm48 303.3l0-301.1 128 43.5 0 300.3-128-42.7zM368 134l96-47.4 0 298.2-96 45.2 0-296z"]
}, D3 = {
  prefix: "far",
  iconName: "folder",
  icon: [512, 512, [128193, 128447, 61716, "folder-blank"], "f07b", "M64 400l384 0c8.8 0 16-7.2 16-16l0-240c0-8.8-7.2-16-16-16l-149.3 0c-17.3 0-34.2-5.6-48-16L212.3 83.2c-2.8-2.1-6.1-3.2-9.6-3.2L64 80c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16zm384 48L64 448c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4L448 80c35.3 0 64 28.7 64 64l0 240c0 35.3-28.7 64-64 64z"]
}, B3 = {
  prefix: "far",
  iconName: "circle",
  icon: [512, 512, [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], "f111", "M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]
}, T3 = {
  prefix: "far",
  iconName: "rectangle-list",
  icon: [512, 512, ["list-alt"], "f022", "M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM160 320a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm104-56l160 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l160 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, P3 = {
  prefix: "far",
  iconName: "hand",
  icon: [512, 512, [129306, 9995, "hand-paper"], "f256", "M256.5 0c-25.3 0-47.2 14.7-57.6 36-7-2.6-14.5-4-22.4-4-35.3 0-64 28.7-64 64l0 165.5-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L107 437c48 48 113.1 75 181 75l16.5 0c1.5 0 3-.1 4.5-.4 91.7-6.2 165-79.4 171.1-171.1 .3-1.5 .4-3 .4-4.5l0-176c0-35.3-28.7-64-64-64-5.5 0-10.9 .7-16 2l0-2c0-35.3-28.7-64-64-64-7.9 0-15.4 1.4-22.4 4-10.4-21.3-32.3-36-57.6-36zm-16 96.1l0-.1 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 168c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136c0-8.8 7.2-16 16-16s16 7.2 16 16l0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72c0-8.8 7.2-16 16-16s16 7.2 16 16l0 172.9c-.1 .6-.1 1.3-.2 1.9-3.4 69.7-59.3 125.6-129 129-.6 0-1.3 .1-1.9 .2L288 464C232.9 464 180 442.1 141 403.1L53.2 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l43.7 43.7c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-223.4c0-8.8 7.2-16 16-16 8.8 0 16 7.1 16 15.9l0 136.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-135.9z"]
}, O3 = {
  prefix: "far",
  iconName: "thumbs-up",
  icon: [512, 512, [128077, 61575], "f164", "M171.5 38.8C192.3 4 236.5-10 274 7.6l7.2 3.8C316 32.3 330 76.5 312.4 114l0 0-14.1 30 109.7 0 7.4 .4c36.3 3.7 64.6 34.4 64.6 71.6 0 13.2-3.6 25.4-9.8 36 6.1 10.6 9.7 22.8 9.8 36 0 18.3-6.9 34.8-18 47.5 1.3 5.3 2 10.8 2 16.5 0 25.1-12.9 47-32.2 59.9-1.9 35.5-29.4 64.2-64.4 67.7l-7.4 .4-104.1 0c-18 0-35.9-3.4-52.6-9.9l-7.1-3-.7-.3-6.6-3.2-.7-.3-12.2-6.5c-12.3-6.5-23.3-14.7-32.9-24.1-4.1 26.9-27.3 47.4-55.3 47.4l-32 0c-30.9 0-56-25.1-56-56L0 200c0-30.9 25.1-56 56-56l32 0c10.8 0 20.9 3.1 29.5 8.5l50.1-106.5 .6-1.2 2.7-5 .6-.9zM56 192c-4.4 0-8 3.6-8 8l0 224c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-224c0-4.4-3.6-8-8-8l-32 0zM253.6 51c-14.8-6.9-32.3-1.6-40.7 12l-2.2 4-56.8 120.9c-3.5 7.5-5.5 15.5-6 23.7l-.1 4.2 0 112.9 .2 7.9c2.4 32.7 21.4 62.1 50.7 77.7l11.5 6.1 6.3 3.1c12.4 5.6 25.8 8.5 39.4 8.5l104.1 0 2.4-.1c12.1-1.2 21.6-11.5 21.6-23.9l-.2-2.6c-.1-.9-.2-1.7-.4-2.6-2.7-12.1 4.3-24.2 16-28 9.7-3.1 16.6-12.2 16.6-22.8 0-4.3-1.1-8.2-3.1-11.8-6.3-11.1-2.8-25.2 8-32 6.8-4.3 11.2-11.8 11.2-20.2 0-7.1-3.1-13.5-8.2-18-5.2-4.6-8.2-11.1-8.2-18s3-13.4 8.2-18c5.1-4.5 8.2-10.9 8.2-18l-.1-2.4c-1.1-11.3-10.1-20.3-21.4-21.4l-2.4-.1-147.5 0c-8.2 0-15.8-4.2-20.2-11.1-4.4-6.9-5-15.7-1.5-23.1L269 93.6c7-15 1.4-32.7-12.5-41L253.6 51z"]
}, H3 = {
  prefix: "far",
  iconName: "building",
  icon: [384, 512, [127970, 61687], "f1ad", "M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-80c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 80 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm96 48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]
}, F3 = {
  prefix: "far",
  iconName: "file",
  icon: [384, 512, [128196, 128459, 61462], "f15b", "M176 48L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-240-88 0c-39.8 0-72-32.2-72-72l0-88zM316.1 160L224 67.9 224 136c0 13.3 10.7 24 24 24l68.1 0zM0 64C0 28.7 28.7 0 64 0L197.5 0c17 0 33.3 6.7 45.3 18.7L365.3 141.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"]
}, j3 = {
  prefix: "far",
  iconName: "gem",
  icon: [512, 512, [128142], "f3a5", "M168.5 72l87.5 93 87.5-93-175 0zM383.9 99.1l-72.3 76.9 129 0-56.6-76.9zm50 124.9L78.1 224 256 420.3 433.9 224zM71.5 176l129 0-72.3-76.9-56.6 76.9zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"]
}, R3 = {
  prefix: "far",
  iconName: "trash-can",
  icon: [448, 512, [61460, "trash-alt"], "f2ed", "M166.2-16c-13.3 0-25.3 8.3-30 20.8L120 48 24 48C10.7 48 0 58.7 0 72S10.7 96 24 96l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0-16.2-43.2C307.1-7.7 295.2-16 281.8-16L166.2-16zM32 144l0 304c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-304-48 0 0 304c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16l0-304-48 0zm160 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176z"]
}, q3 = {
  prefix: "far",
  iconName: "life-ring",
  icon: [512, 512, [], "f1cd", "M385.1 419.1C349.7 447.2 304.8 464 256 464s-93.7-16.8-129.1-44.9l80.4-80.4c14.3 8.4 31 13.3 48.8 13.3s34.5-4.8 48.8-13.3l80.4 80.4zm68.1 .2C489.9 374.9 512 318.1 512 256S489.9 137.1 453.2 92.7L465 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L419.3 58.8C374.9 22.1 318.1 0 256 0S137.1 22.1 92.7 58.8L81 47c-9.4-9.4-24.6-9.4-33.9 0S37.7 71.6 47 81L58.8 92.7C22.1 137.1 0 193.9 0 256S22.1 374.9 58.8 419.3L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l11.8-11.8C137.1 489.9 193.9 512 256 512s118.9-22.1 163.3-58.8L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-11.8-11.8zm-34.1-34.1l-80.4-80.4c8.4-14.3 13.3-31 13.3-48.8s-4.8-34.5-13.3-48.8l80.4-80.4C447.2 162.3 464 207.2 464 256s-16.8 93.7-44.9 129.1zM385.1 92.9l-80.4 80.4c-14.3-8.4-31-13.3-48.8-13.3s-34.5 4.8-48.8 13.3L126.9 92.9C162.3 64.8 207.2 48 256 48s93.7 16.8 129.1 44.9zM173.3 304.8L92.9 385.1C64.8 349.7 48 304.8 48 256s16.8-93.7 44.9-129.1l80.4 80.4c-8.4 14.3-13.3 31-13.3 48.8s4.8 34.5 13.3 48.8zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]
}, Q3 = {
  prefix: "far",
  iconName: "house",
  icon: [512, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M240 6.1c9.1-8.2 22.9-8.2 32 0l232 208c9.9 8.8 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-8-7.2 0 205.3c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-205.3-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9L240 6.1zm16 50.1L96 199.7 96 448c0 8.8 7.2 16 16 16l48 0 0-104c0-39.8 32.2-72 72-72l48 0c39.8 0 72 32.2 72 72l0 104 48 0c8.8 0 16-7.2 16-16l0-248.3-160-143.4zM208 464l96 0 0-104c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 104z"]
}, W3 = {
  prefix: "far",
  iconName: "user",
  icon: [448, 512, [128100, 62144, 62470, "user-alt", "user-large"], "f007", "M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"]
}, V3 = {
  prefix: "far",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"]
}, U3 = {
  prefix: "far",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm70.7 121.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L243.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"]
}, Y3 = {
  prefix: "far",
  iconName: "moon",
  icon: [512, 512, [127769, 9214], "f186", "M239.3 48.7c-107.1 8.5-191.3 98.1-191.3 207.3 0 114.9 93.1 208 208 208 33.3 0 64.7-7.8 92.6-21.7-103.4-23.4-180.6-115.8-180.6-226.3 0-65.8 27.4-125.1 71.3-167.3zM0 256c0-141.4 114.6-256 256-256 19.4 0 38.4 2.2 56.7 6.3 9.9 2.2 17.3 10.5 18.5 20.5s-4 19.8-13.1 24.4c-60.6 30.2-102.1 92.7-102.1 164.8 0 101.6 82.4 184 184 184 5 0 9.9-.2 14.8-.6 10.1-.8 19.6 4.8 23.8 14.1s2 20.1-5.3 27.1C387.3 484.8 324.8 512 256 512 114.6 512 0 397.4 0 256z"]
}, G3 = {
  prefix: "far",
  iconName: "circle-play",
  icon: [512, 512, [61469, "play-circle"], "f144", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM212.5 147.5c-7.4-4.5-16.7-4.7-24.3-.5S176 159.3 176 168l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88zM298 256l-74 45.2 0-90.4 74 45.2z"]
}, Z3 = {
  prefix: "far",
  iconName: "hourglass",
  icon: [384, 512, [9203, 62032, "hourglass-empty"], "f254", "M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l8 0 0 19c0 40.3 16 79 44.5 107.5l81.5 81.5-81.5 81.5C48 366 32 404.7 32 445l0 19-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-19c0-40.3-16-79-44.5-107.5l-81.5-81.5 81.5-81.5C336 146 352 107.3 352 67l0-19 8 0c13.3 0 24-10.7 24-24S373.3 0 360 0L24 0zM192 289.9l81.5 81.5C293 391 304 417.4 304 445l0 19-224 0 0-19c0-27.6 11-54 30.5-73.5L192 289.9zm0-67.9l-81.5-81.5C91 121 80 94.6 80 67l0-19 224 0 0 19c0 27.6-11 54-30.5 73.5L192 222.1z"]
}, J3 = {
  prefix: "far",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"]
}, X3 = {
  prefix: "far",
  iconName: "lemon",
  icon: [448, 512, [127819], "f094", "M368 80c-3.2 0-6.2 .4-8.9 1.3-19.1 5.5-46.1 10.7-74.3 3.3-57.4-14.9-124.6 7.4-174.7 57.5S37.7 259.4 52.6 316.8c7.3 28.2 2.2 55.2-3.3 74.3-.8 2.8-1.3 5.8-1.3 8.9 0 17.7 14.3 32 32 32 3.2 0 6.2-.4 8.9-1.3 19.1-5.5 46.1-10.7 74.3-3.3 57.4 14.9 124.6-7.4 174.7-57.5s72.4-117.3 57.5-174.7c-7.3-28.2-2.2-55.2 3.3-74.3 .8-2.8 1.3-5.8 1.3-8.9 0-17.7-14.3-32-32-32zm0-48c44.2 0 80 35.8 80 80 0 7.7-1.1 15.2-3.1 22.3-4.6 15.8-7.1 32.9-3 48.9 20.1 77.6-10.9 161.5-70 220.7s-143.1 90.2-220.7 70c-16-4.1-33-1.6-48.9 3-7.1 2-14.6 3.1-22.3 3.1-44.2 0-80-35.8-80-80 0-7.7 1.1-15.2 3.1-22.3 4.6-15.8 7.1-32.9 3-48.9-20.1-77.6 10.9-161.5 70-220.7S219.3 18 296.8 38.1c16 4.1 33 1.6 48.9-3 7.1-2 14.6-3.1 22.3-3.1zM246.7 167c-52 15.2-96.5 59.7-111.7 111.7-3.7 12.7-17.1 20-29.8 16.3S85.2 278 89 265.3c19.8-67.7 76.6-124.5 144.3-144.3 12.7-3.7 26.1 3.6 29.8 16.3s-3.6 26.1-16.3 29.8z"]
}, $3 = {
  prefix: "far",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"]
}, K3 = {
  prefix: "far",
  iconName: "square-plus",
  icon: [448, 512, [61846, "plus-square"], "f0fe", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, e6 = {
  prefix: "far",
  iconName: "money-bill-1",
  icon: [512, 512, ["money-bill-alt"], "f3d1", "M112 112c0 35.3-28.7 64-64 64l0 160c35.3 0 64 28.7 64 64l288 0c0-35.3 28.7-64 64-64l0-160c-35.3 0-64-28.7-64-64l-288 0zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm256 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm-16 44c-11 0-20 9-20 20 0 9.7 6.9 17.7 16 19.6l0 48.4-4 0c-11 0-20 9-20 20s9 20 20 20l48 0c11 0 20-9 20-20s-9-20-20-20l-4 0 0-68c0-11-9-20-20-20l-16 0z"]
}, t6 = {
  prefix: "far",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.3 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, n6 = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
}, o6 = {
  prefix: "far",
  iconName: "face-smile",
  icon: [512, 512, [128578, "smile"], "f118", "M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm177.3 63.4C192.3 335 218.4 352 256 352s63.7-17 78.7-32.6c9.2-9.6 24.4-9.9 33.9-.7s9.9 24.4 .7 33.9c-22.1 23-60 47.4-113.3 47.4s-91.2-24.4-113.3-47.4c-9.2-9.6-8.9-24.8 .7-33.9s24.8-8.9 33.9 .7zM144 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, a6 = {
  prefix: "far",
  iconName: "keyboard",
  icon: [576, 512, [9e3], "f11c", "M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 320l224 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16z"]
}, i6 = {
  prefix: "far",
  iconName: "circle-dot",
  icon: [512, 512, [128280, "dot-circle"], "f192", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm0 304a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]
};
const s6 = {
  "far-bell": f3,
  "far-building": H3,
  "far-calendar-days": m3,
  "far-circle": B3,
  "far-circle-check": U3,
  "far-circle-dot": i6,
  "far-circle-pause": u3,
  "far-circle-play": G3,
  "far-clock": x3,
  "far-clone": k3,
  "far-comment": M3,
  "far-compass": t6,
  "far-copy": $3,
  "far-envelope": d3,
  "far-eye": p3,
  "far-face-grin-stars": A3,
  "far-face-smile": o6,
  "far-file": F3,
  "far-folder": D3,
  "far-gem": j3,
  "far-hand": P3,
  "far-heart": v3,
  "far-hospital": z3,
  "far-hourglass": Z3,
  "far-house": Q3,
  "far-image": E3,
  "far-keyboard": a6,
  "far-lemon": X3,
  "far-life-ring": q3,
  "far-lightbulb": I3,
  "far-map": N3,
  "far-message": h3,
  "far-money-bill1": e6,
  "far-moon": Y3,
  "far-newspaper": _3,
  "far-note-sticky": b3,
  "far-paper-plane": y3,
  "far-rectangle-list": T3,
  "far-share-from-square": g3,
  "far-snowflake": V3,
  "far-square": n6,
  "far-square-check": L3,
  "far-square-plus": K3,
  "far-star": J3,
  "far-star-half": w3,
  "far-sun": S3,
  "far-thumbs-down": C3,
  "far-thumbs-up": O3,
  "far-trash-can": R3,
  "far-user": W3
}, c6 = [
  { titleKey: "icons.group.regular", keys: [
    "far-house",
    "far-lightbulb",
    "far-snowflake",
    "far-moon",
    "far-sun",
    "far-bell",
    "far-star",
    "far-heart",
    "far-clock",
    "far-calendar-days",
    "far-eye",
    "far-comment",
    "far-envelope",
    "far-folder",
    "far-file",
    "far-image",
    "far-circle-play",
    "far-circle-pause",
    "far-square",
    "far-circle",
    "far-face-smile",
    "far-thumbs-up",
    "far-user",
    "far-keyboard",
    "far-message",
    "far-paper-plane",
    "far-square-check",
    "far-circle-check",
    "far-circle-dot",
    "far-hand",
    "far-face-grin-stars",
    "far-compass",
    "far-map",
    "far-clone",
    "far-copy",
    "far-trash-can",
    "far-hourglass",
    "far-gem",
    "far-life-ring",
    "far-square-plus",
    "far-star-half",
    "far-building",
    "far-hospital",
    "far-money-bill1",
    "far-newspaper",
    "far-note-sticky",
    "far-rectangle-list",
    "far-share-from-square",
    "far-thumbs-down",
    "far-lemon"
  ] }
], g1 = {
  lightbulb: $c,
  lamp: Jc,
  "lamp-ceiling": Gc,
  "lamp-desk": Zc,
  plug: sr,
  fan: yi,
  tv: p1,
  speaker: m2,
  thermometer: b2,
  droplets: Je,
  snowflake: P1,
  flame: ki,
  wind: gn,
  sun: A2,
  moon: Vi,
  shield: dr,
  door: qc,
  lock: Kc,
  blinds: Bc,
  video: gr,
  "washing-machine": yr,
  zap: kr,
  gauge: Ci,
  activity: Ic,
  "air-vent": ja,
  "cloud-sun": ri,
  sparkles: A1,
  house: Uc,
  sofa: ur,
  bed: Dc,
  "cooking-pot": jc,
  baby: Nc
}, r6 = [
  { titleKey: "icons.group.lucide", keys: Object.keys(g1) },
  ...l3,
  ...c6
], l6 = {
  lightbulb: "лампа свет",
  lamp: "лампа свет",
  "lamp-ceiling": "люстра свет",
  "lamp-desk": "настольная лампа свет",
  plug: "розетка вилка",
  fan: "вентилятор",
  tv: "телевизор",
  speaker: "колонка динамик",
  thermometer: "температура термометр",
  droplets: "влажность вода капли",
  snowflake: "снег холод кондиционер",
  flame: "огонь котёл",
  wind: "ветер",
  sun: "солнце",
  moon: "луна ночь",
  shield: "защита охрана",
  door: "дверь",
  lock: "замок",
  blinds: "шторы жалюзи",
  video: "камера видео",
  "washing-machine": "стиральная машина",
  zap: "электричество энергия",
  gauge: "датчик счётчик",
  activity: "движение активность",
  "air-vent": "кондиционер воздух",
  "cloud-sun": "погода",
  sparkles: "сценарии сцены",
  house: "дом",
  sofa: "диван",
  bed: "кровать",
  "cooking-pot": "кухня плита",
  baby: "ребёнок детская",
  "fa-house": "дом",
  "fa-house-chimney": "дом коттедж",
  "fa-building": "здание квартира",
  "fa-warehouse": "склад гараж",
  "fa-tree": "дерево сад",
  "fa-couch": "диван",
  "fa-bed": "кровать",
  "fa-chair": "стул",
  "fa-table": "стол",
  "fa-door-open": "дверь открыта",
  "fa-door-closed": "дверь закрыта",
  "fa-bath": "ванная",
  "fa-shower": "душ",
  "fa-toilet": "туалет",
  "fa-utensils": "кухня еда",
  "fa-mug-saucer": "кофе чай",
  "fa-wine-glass": "вино",
  "fa-baby": "ребёнок",
  "fa-child": "ребёнок",
  "fa-person": "человек",
  "fa-dog": "собака",
  "fa-cat": "кошка",
  "fa-car": "машина авто",
  "fa-bicycle": "велосипед",
  "fa-plane": "самолёт",
  "fa-train": "поезд",
  "fa-truck": "грузовик",
  "fa-lightbulb": "лампа свет",
  "fa-plug": "розетка вилка",
  "fa-power-off": "питание выключить",
  "fa-toggle-on": "включено",
  "fa-toggle-off": "выключено",
  "fa-sun": "солнце",
  "fa-moon": "луна ночь",
  "fa-star": "звезда",
  "fa-fire": "огонь котёл",
  "fa-bolt": "молния электричество",
  "fa-wand-magic-sparkles": "сценарии сцены",
  "fa-rainbow": "радуга",
  "fa-temperature-high": "температура жара",
  "fa-temperature-low": "температура холод",
  "fa-thermometer": "термометр",
  "fa-droplet": "вода влажность капля",
  "fa-water": "вода",
  "fa-snowflake": "снег холод кондиционер",
  "fa-wind": "ветер",
  "fa-fan": "вентилятор кондиционер",
  "fa-cloud": "облако",
  "fa-cloud-sun": "погода",
  "fa-cloud-rain": "дождь",
  "fa-cloud-bolt": "гроза",
  "fa-umbrella": "зонт дождь",
  "fa-leaf": "лист растение",
  "fa-seedling": "росток растение",
  "fa-recycle": "переработка",
  "fa-solar-panel": "солнечная панель",
  "fa-shield": "защита охрана",
  "fa-shield-halved": "защита охрана",
  "fa-lock": "замок",
  "fa-lock-open": "замок открыт",
  "fa-key": "ключ",
  "fa-video": "камера видео",
  "fa-camera": "камера",
  "fa-eye": "глаз наблюдение",
  "fa-bell": "звонок уведомление",
  "fa-bell-slash": "без звука",
  "fa-triangle-exclamation": "тревога",
  "fa-fire-extinguisher": "огнетушитель пожар",
  "fa-fingerprint": "отпечаток доступ",
  "fa-user-shield": "охрана пользователь",
  "fa-tv": "телевизор",
  "fa-display": "монитор экран",
  "fa-desktop": "компьютер",
  "fa-laptop": "ноутбук",
  "fa-mobile-screen": "телефон",
  "fa-tablet-screen-button": "планшет",
  "fa-volume-high": "громкость звук",
  "fa-volume-low": "громкость тихо",
  "fa-volume-xmark": "без звука",
  "fa-music": "музыка",
  "fa-radio": "радио",
  "fa-headphones": "наушники",
  "fa-gamepad": "игра",
  "fa-film": "фильм видео",
  "fa-play": "играть",
  "fa-pause": "пауза",
  "fa-stop": "стоп",
  "fa-circle-play": "играть",
  "fa-circle-pause": "пауза",
  "fa-gauge": "датчик счётчик",
  "fa-gauge-high": "датчик счётчик",
  "fa-chart-line": "график",
  "fa-heart-pulse": "пульс здоровье",
  "fa-microchip": "чип",
  "fa-wifi": "вайфай сеть",
  "fa-signal": "сигнал сеть",
  "fa-battery-full": "батарея",
  "fa-battery-half": "батарея",
  "fa-battery-quarter": "батарея",
  "fa-battery-empty": "батарея",
  "fa-gear": "настройки шестерёнка",
  "fa-sliders": "настройки",
  "fa-wrench": "инструмент ремонт",
  "fa-calendar-days": "календарь",
  "fa-clock": "часы время",
  "fa-stopwatch": "секундомер",
  "fa-alarm-clock": "будильник",
  "fa-location-dot": "место геолокация",
  "fa-compass": "компас",
  "fa-globe": "глобус",
  "fa-flag": "флаг",
  "fa-heart": "сердце",
  "fa-thumbs-up": "нравится",
  "fa-comments": "сообщения",
  "fa-envelope": "письмо",
  "fa-phone": "телефон",
  "fa-user": "пользователь",
  "fa-users": "пользователи",
  "fa-person-walking": "идти",
  "fa-person-running": "бег",
  "fa-dumbbell": "спорт",
  "fa-puzzle-piece": "пазл",
  "fa-gift": "подарок",
  "fa-hourglass": "время",
  "fa-newspaper": "новости",
  "fa-note-sticky": "заметка",
  "fa-copy": "копия",
  "fa-trash-can": "корзина удалить",
  "fa-square-check": "галочка готово",
  "fa-circle-check": "галочка готово",
  "fa-face-smile": "смайлик",
  "fa-keyboard": "клавиатура",
  "fa-message": "сообщение",
  "fa-paper-plane": "отправить",
  "far-house": "дом",
  "far-lightbulb": "лампа свет",
  "far-snowflake": "снег холод",
  "far-moon": "луна ночь",
  "far-sun": "солнце",
  "far-bell": "звонок",
  "far-star": "звезда",
  "far-heart": "сердце",
  "far-clock": "часы время",
  "far-calendar-days": "календарь",
  "far-eye": "глаз",
  "far-comment": "сообщение",
  "far-envelope": "письмо",
  "far-folder": "папка",
  "far-file": "файл",
  "far-image": "картинка",
  "far-circle-play": "играть",
  "far-circle-pause": "пауза",
  "far-face-smile": "смайлик",
  "far-thumbs-up": "нравится",
  "far-user": "пользователь",
  "far-message": "сообщение",
  "far-paper-plane": "отправить",
  "far-square-check": "галочка готово",
  "far-circle-check": "галочка готово",
  "far-trash-can": "корзина удалить",
  "far-hourglass": "время",
  "far-life-ring": "помощь",
  "far-building": "здание",
  "far-hospital": "больница",
  "far-newspaper": "новости"
};
function d6(t, e) {
  const n = e.trim().toLowerCase();
  return n ? t.toLowerCase().indexOf(n) !== -1 || (l6[t] || "").indexOf(n) !== -1 : !0;
}
function f6(t) {
  const [e, n, , , a] = t.def.icon, i = Array.isArray(a) ? a : [a];
  return /* @__PURE__ */ o(
    "svg",
    {
      class: t.class,
      width: t.size,
      height: t.size,
      viewBox: `0 0 ${e} ${n}`,
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      children: i.map((s, c) => /* @__PURE__ */ o("path", { d: s }, c))
    }
  );
}
function ke(t) {
  const e = t.name || "house", n = g1[e];
  if (n) return /* @__PURE__ */ o(n, { size: t.size || 18, class: t.class });
  const a = r3[e] || s6[e];
  if (a) return /* @__PURE__ */ o(f6, { def: a, size: t.size || 18, class: t.class });
  const i = g1.house;
  return /* @__PURE__ */ o(i, { size: t.size || 18, class: t.class });
}
function O1(t, e) {
  const n = t.split(".")[0];
  return n === "light" ? "lamp-ceiling" : n === "switch" ? "lamp" : n === "fan" ? "fan" : n === "camera" ? "video" : n === "climate" ? "air-vent" : n === "weather" ? "cloud-sun" : n === "media_player" ? e === "tv" ? "tv" : "speaker" : n === "lock" ? "lock" : n === "cover" ? "blinds" : n === "scene" || n === "script" || n === "automation" ? "sparkles" : e === "temperature" ? "thermometer" : e === "humidity" || e === "moisture" ? "droplets" : e === "door" || e === "window" || e === "opening" ? "door" : e === "power" || e === "voltage" || e === "energy" || e === "current" ? "zap" : e === "motion" || e === "occupancy" ? "activity" : "gauge";
}
function N2(t = 1e3) {
  const [e, n] = v(/* @__PURE__ */ new Date());
  return H(() => {
    const a = setInterval(() => n(/* @__PURE__ */ new Date()), t);
    return () => clearInterval(a);
  }, [t]), e;
}
function Rn(t) {
  return t < 10 ? "0" + t : String(t);
}
function D2(t, e = !1) {
  return Rn(t.getHours()) + ":" + Rn(t.getMinutes()) + (e ? ":" + Rn(t.getSeconds()) : "");
}
function B2(t) {
  return d("date.full", { weekday: nt("date.weekdays")[t.getDay()], day: t.getDate(), month: nt("date.months")[t.getMonth()] });
}
const Le = "#0891b2", b1 = "#d97706", bo = "rgba(255,255,255,0.13)", h6 = "rgba(255,255,255,0.04)", xo = "rgba(255,255,255,0.08)", yo = "#141620", Ke = 210, ue = { l: 46, r: 14, t: 14, b: 26 };
function bn(t) {
  return t < 10 ? "0" + t : String(t);
}
function Xe(t) {
  const e = new Date(t);
  return bn(e.getHours()) + ":" + bn(e.getMinutes());
}
function zt(t) {
  const e = new Date(t);
  return d("date.day_month", { day: e.getDate(), month: nt("date.months_short")[e.getMonth()] });
}
function Te(t, e) {
  return e === "24h" ? Xe(t) : zt(t) + ", " + Xe(t);
}
function de(t) {
  const e = Math.abs(t), n = e >= 100 ? t.toFixed(0) : e >= 10 ? t.toFixed(1) : e >= 1 ? t.toFixed(2) : t.toFixed(3);
  return n.indexOf(".") === -1 ? n : n.replace(/\.?0+$/, "");
}
function m6(t, e, n) {
  t === e && (t -= 1, e += 1);
  const a = (e - t) / n, i = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)), s = [1, 2, 5, 10].map((r) => r * i).filter((r) => r >= a)[0], c = [];
  for (let r = Math.floor(t / s) * s; r <= e + s * 1e-3; r += s) c.push(+r.toFixed(10));
  return c[c.length - 1] < e && c.push(c[c.length - 1] + s), c;
}
function u6(t, e, n) {
  const a = [], i = new Date(t);
  if (n === "24h")
    for (i.setMinutes(0, 0, 0), i.setHours(Math.ceil(i.getHours() / 6) * 6); i.getTime() <= e; i.setHours(i.getHours() + 6)) a.push({ t: i.getTime(), label: Xe(i.getTime()) });
  else {
    i.setHours(0, 0, 0, 0), i.setDate(i.getDate() + 1);
    const s = n === "7d" ? 1 : 5;
    for (; i.getTime() <= e; i.setDate(i.getDate() + s))
      a.push({ t: i.getTime(), label: n === "7d" ? nt("date.weekdays_short")[i.getDay()] : i.getDate() + "." + bn(i.getMonth() + 1) });
  }
  return a;
}
function A6({ series: t, unit: e, range: n, width: a }) {
  const [i, s] = v(null), c = ee(null), r = Math.max(200, a), f = r - ue.l - ue.r, h = Ke - ue.t - ue.b, { from: m, to: A } = t, l = (D) => ue.l + (D - m) / (A - m) * f;
  if (t.kind === "timeline" ? !t.segments.length : !t.points.length) return /* @__PURE__ */ o("div", { class: "chart-empty", children: d("chart.no_data") });
  const p = (D) => {
    const O = c.current;
    if (!O) return;
    const X = O.getBoundingClientRect(), le = m + (D - X.left - ue.l) / f * (A - m);
    if (t.kind === "timeline") {
      let Q = 0;
      t.segments.forEach((J, oe) => {
        J.from <= le && (Q = oe);
      }), s(Q);
      return;
    }
    const V = t.points, _ = t.kind === "bars" ? t.bucketMs / 2 : 0;
    let j = 0;
    V.forEach((Q, J) => {
      Math.abs(Q.t + _ - le) < Math.abs(V[j].t + _ - le) && (j = J);
    }), s(j);
  }, g = {
    onMouseMove: (D) => p(D.clientX),
    onMouseLeave: () => s(null),
    onTouchStart: (D) => p(D.touches[0].clientX),
    onTouchMove: (D) => p(D.touches[0].clientX)
  }, w = u6(m, A, n).map((D) => /* @__PURE__ */ o("text", { x: l(D.t), y: Ke - 6, class: "chart-tick", "text-anchor": "middle", children: D.label }, D.t));
  if (t.kind === "timeline") {
    const D = ue.t + h / 2 - 16, O = i != null ? t.segments[i] : null;
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: r }, children: [
      /* @__PURE__ */ o("svg", { ref: c, width: r, height: Ke, ...g, children: [
        t.segments.map((X, le) => {
          const V = l(X.from), _ = l(X.to), j = Math.max(1, _ - V - (_ - V > 3 ? 2 : 0));
          return /* @__PURE__ */ o("rect", { x: V, y: D, width: j, height: 32, rx: 3, fill: X.on ? b1 : X.on === null ? h6 : bo, stroke: X.on === null ? "rgba(255,255,255,0.25)" : "none", "stroke-dasharray": "3 3", opacity: i == null || i === le ? 1 : 0.55 }, le);
        }),
        /* @__PURE__ */ o("line", { x1: ue.l, x2: r - ue.r, y1: D + 44, y2: D + 44, stroke: xo }),
        w
      ] }),
      /* @__PURE__ */ o("div", { class: "chart-legend", children: [
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: b1 } }),
          d("switch.on")
        ] }),
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: bo } }),
          d("switch.off")
        ] }),
        t.segments.some((X) => X.on === null) && /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { class: "key-na" }),
          d("chart.no_connection")
        ] })
      ] }),
      O && /* @__PURE__ */ o(qn, { x: l(O.from) + Math.min(l(O.to) - l(O.from), 40) / 2, W: r, children: [
        /* @__PURE__ */ o("b", { children: O.on ? d("switch.on") : O.on === null ? d("chart.no_connection") : d("switch.off") }),
        /* @__PURE__ */ o("span", { children: [
          Te(O.from, n),
          " — ",
          Te(O.to, n)
        ] })
      ] })
    ] });
  }
  const k = t.points, x = k.some((D) => D.min != null && D.max != null);
  let C = 1 / 0, E = -1 / 0;
  k.forEach((D) => {
    C = Math.min(C, D.min != null ? D.min : D.v), E = Math.max(E, D.max != null ? D.max : D.v);
  }), t.kind === "bars" && (C = Math.min(0, C));
  const M = m6(C, E, 4), b = M[0], I = M[M.length - 1], P = (D) => ue.t + h - (D - b) / (I - b) * h, B = M.map((D) => /* @__PURE__ */ o("g", { children: [
    /* @__PURE__ */ o("line", { x1: ue.l, x2: r - ue.r, y1: P(D), y2: P(D), stroke: xo }),
    /* @__PURE__ */ o("text", { x: ue.l - 8, y: P(D) + 4, class: "chart-tick", "text-anchor": "end", children: de(D) })
  ] }, D)), T = i != null ? k[i] : null;
  if (t.kind === "bars") {
    const D = t.bucketMs / (A - m) * f, O = Math.max(2, Math.min(24, D - 2)), X = t.bucketMs >= 864e5, le = X && k.map((V, _) => {
      const j = new Date(V.t);
      return n === "30d" && (k.length - 1 - _) % 5 ? null : /* @__PURE__ */ o("text", { x: l(V.t) + D / 2, y: Ke - 6, class: "chart-tick", "text-anchor": "middle", children: n === "7d" ? nt("date.weekdays_short")[j.getDay()] : j.getDate() + "." + bn(j.getMonth() + 1) }, V.t);
    });
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: r }, children: [
      /* @__PURE__ */ o("svg", { ref: c, width: r, height: Ke, ...g, children: [
        B,
        k.map((V, _) => {
          const j = l(V.t) + (D - O) / 2, Q = P(Math.max(0, V.v)), J = P(0), oe = Math.max(0, J - Q), ie = Math.min(4, O / 2, oe), he = "M" + j + "," + J + "V" + (Q + ie) + "Q" + j + "," + Q + " " + (j + ie) + "," + Q + "H" + (j + O - ie) + "Q" + (j + O) + "," + Q + " " + (j + O) + "," + (Q + ie) + "V" + J + "Z";
          return /* @__PURE__ */ o("path", { d: he, fill: Le, opacity: i == null || i === _ ? 1 : 0.5 }, _);
        }),
        X ? le : w
      ] }),
      T && /* @__PURE__ */ o(qn, { x: l(T.t) + D / 2, W: r, children: [
        /* @__PURE__ */ o("b", { children: [
          de(T.v),
          " ",
          e
        ] }),
        /* @__PURE__ */ o("span", { children: t.bucketMs >= 864e5 ? zt(T.t) : zt(T.t) + ", " + Xe(T.t) + "–" + Xe(T.t + t.bucketMs) })
      ] })
    ] });
  }
  const R = x ? k : k.concat({ t: A, v: k[k.length - 1].v }), Z = R.map((D, O) => (O ? "L" : "M") + l(Math.max(D.t, m)).toFixed(1) + "," + P(D.v).toFixed(1)).join(""), se = Z + "L" + l(R[R.length - 1].t).toFixed(1) + "," + P(b) + "L" + l(Math.max(R[0].t, m)).toFixed(1) + "," + P(b) + "Z", N = x ? k.map((D, O) => (O ? "L" : "M") + l(D.t).toFixed(1) + "," + P(D.max).toFixed(1)).join("") + k.slice().reverse().map((D) => "L" + l(D.t).toFixed(1) + "," + P(D.min).toFixed(1)).join("") + "Z" : "", W = k[k.length - 1];
  return /* @__PURE__ */ o("div", { class: "chart", style: { width: r }, children: [
    /* @__PURE__ */ o("svg", { ref: c, width: r, height: Ke, ...g, children: [
      B,
      x ? /* @__PURE__ */ o("path", { d: N, fill: Le, opacity: 0.22 }) : /* @__PURE__ */ o("path", { d: se, fill: Le, opacity: 0.1 }),
      /* @__PURE__ */ o("path", { d: Z, fill: "none", stroke: Le, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }),
      /* @__PURE__ */ o("circle", { cx: l(x ? W.t : A), cy: P(W.v), r: 4, fill: Le, stroke: yo, "stroke-width": 2 }),
      T && /* @__PURE__ */ o("g", { children: [
        /* @__PURE__ */ o("line", { x1: l(T.t), x2: l(T.t), y1: ue.t, y2: ue.t + h, stroke: "rgba(255,255,255,0.35)" }),
        /* @__PURE__ */ o("circle", { cx: l(T.t), cy: P(T.v), r: 5, fill: Le, stroke: yo, "stroke-width": 2 })
      ] }),
      w
    ] }),
    x && /* @__PURE__ */ o("div", { class: "chart-legend", children: [
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { class: "key-line", style: { background: Le } }),
        d("chart.mean")
      ] }),
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { style: { background: Le, opacity: 0.35 } }),
        d("chart.min_max")
      ] })
    ] }),
    T && /* @__PURE__ */ o(qn, { x: l(T.t), W: r, children: [
      /* @__PURE__ */ o("b", { children: [
        de(T.v),
        " ",
        e
      ] }),
      T.min != null && T.max != null && /* @__PURE__ */ o("span", { children: [
        de(T.min),
        " … ",
        de(T.max),
        " ",
        e
      ] }),
      /* @__PURE__ */ o("span", { children: Te(T.t, n) })
    ] })
  ] });
}
function qn(t) {
  const e = Math.max(60, Math.min(t.W - 60, t.x));
  return /* @__PURE__ */ o("div", { class: "chart-tip", style: { left: e }, children: t.children });
}
const Gt = {
  cool: { Icon: P1, color: Le },
  heat: { Icon: ki, color: b1 },
  heat_cool: { Icon: A1, color: "#a3a3a3" },
  auto: { Icon: A1, color: "#a3a3a3" },
  dry: { Icon: Je, color: "#a3a3a3" },
  fan_only: { Icon: yi, color: "#a3a3a3" },
  off: { Icon: wt, color: "rgba(255,255,255,0.25)" }
}, p6 = ["auto", "low", "medium", "middle", "high", "quiet", "turbo", "diffuse", "focus"], g6 = (t) => p6.indexOf(t) !== -1 ? d("ac.fan." + t) : t, vo = (t) => Gt[t] ? d("ac.mode." + t) : t;
function ko(t, e, n, a, i) {
  const s = (135 + a * 270) * Math.PI / 180, c = (135 + i * 270) * Math.PI / 180, r = (i - a) * 270 > 180 ? 1 : 0;
  return "M" + (t + n * Math.cos(s)).toFixed(1) + "," + (e + n * Math.sin(s)).toFixed(1) + "A" + n + "," + n + " 0 " + r + " 1 " + (t + n * Math.cos(c)).toFixed(1) + "," + (e + n * Math.sin(c)).toFixed(1);
}
function b6({ it: t, size: e }) {
  const n = ae(), a = n.states[t.entity], i = a ? a.attributes : {}, s = a ? a.state : "off", c = s === "off", r = i.target_temp_step || 0.5, f = i.min_temp != null ? i.min_temp : 16, h = i.max_temp != null ? i.max_temp : 31, [m, A] = v(null), l = ee(0), u = m ?? i.temperature;
  H(() => {
    A(null);
  }, [i.temperature]);
  const p = (M) => {
    const b = u ?? (f + h) / 2, I = Math.max(f, Math.min(h, Math.round((b + M * r) / r) * r));
    A(I), clearTimeout(l.current), l.current = window.setTimeout(() => n.callService(t.entity, "set_temperature", { temperature: I }), 800);
  }, g = i.current_temperature != null ? String(i.current_temperature) : t.temp ? Ne(n, t.temp) : void 0, y = Gt[s] || Gt.auto, w = e.h < 260 || e.w < 260, k = w ? 132 : 176, x = u != null ? (u - f) / (h - f) : 0, C = i.hvac_modes || [], E = i.fan_modes || [];
  return /* @__PURE__ */ o("div", { class: "ac" + (w ? " compact" : ""), children: [
    /* @__PURE__ */ o("div", { class: "ac-main", children: [
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: c, onClick: () => p(-1), children: /* @__PURE__ */ o(or, { size: 22 }) }),
      /* @__PURE__ */ o("div", { class: "ac-dial", style: { width: k, height: k }, children: [
        /* @__PURE__ */ o("svg", { width: k, height: k, children: [
          /* @__PURE__ */ o("path", { d: ko(k / 2, k / 2, k / 2 - 8, 0, 1), stroke: "rgba(255,255,255,0.1)", "stroke-width": 8, fill: "none", "stroke-linecap": "round" }),
          !c && u != null && /* @__PURE__ */ o("path", { d: ko(k / 2, k / 2, k / 2 - 8, 0, Math.max(0.01, x)), stroke: y.color, "stroke-width": 8, fill: "none", "stroke-linecap": "round" })
        ] }),
        /* @__PURE__ */ o("div", { class: "ac-center", children: [
          /* @__PURE__ */ o("div", { class: "ac-target", children: [
            u != null && !c ? de(u) : "—",
            /* @__PURE__ */ o("sup", { children: "°" })
          ] }),
          /* @__PURE__ */ o("div", { class: "ac-mode", children: vo(s) }),
          g != null && !At(g) && /* @__PURE__ */ o("div", { class: "ac-room", children: d("ac.room", { t: de(Number(g)) }) })
        ] })
      ] }),
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: c, onClick: () => p(1), children: /* @__PURE__ */ o($e, { size: 22 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "ac-modes", children: C.map((M) => {
      const b = Gt[M] || { Icon: ja, color: "#a3a3a3" };
      return /* @__PURE__ */ o(
        "button",
        {
          class: "ac-mode-btn" + (M === s ? " active" : ""),
          title: vo(M),
          style: M === s && M !== "off" ? { background: b.color, borderColor: b.color } : void 0,
          onClick: () => n.callService(t.entity, "set_hvac_mode", { hvac_mode: M }),
          children: /* @__PURE__ */ o(b.Icon, { size: 18 })
        },
        M
      );
    }) }),
    !w && E.length > 0 && !c && /* @__PURE__ */ o("div", { class: "seg seg-wide ac-fan", children: E.map((M) => /* @__PURE__ */ o("button", { class: i.fan_mode === M ? "active" : "", onClick: () => n.callService(t.entity, "set_fan_mode", { fan_mode: M }), children: g6(M) }, M)) })
  ] });
}
function x6({ card: t, size: e }) {
  const n = ae(), [a, i] = v(0), s = t.items[Math.min(a, t.items.length - 1)];
  return /* @__PURE__ */ o("div", { class: "ac-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((c, r) => /* @__PURE__ */ o("button", { class: r === a ? "active" : "", onClick: () => i(r), children: be(n, c) }, c.entity)) }),
    /* @__PURE__ */ o(b6, { it: s, size: e }, s.entity)
  ] });
}
function T2(t, e, n) {
  return n > 0 ? (t + e + n) % n : 0;
}
const y6 = 2500, v6 = 1e4;
function k6(t, e) {
  const [n, a] = v(0);
  return H(() => {
    if (!e || !t) return;
    const i = window.setInterval(() => a((s) => s + 1), v6);
    return () => clearInterval(i);
  }, [t, e]), !t || !n ? t : t + (t.indexOf("?") === -1 ? "?" : "&") + "_=" + n;
}
const Mt = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
function P2(t) {
  const [e, n] = v({ entity: t, state: "loading" }), a = e.entity === t ? e.state : "loading";
  return H(() => {
    n({ entity: t, state: "loading" });
    const i = window.setTimeout(() => n((s) => s.entity === t && s.state === "loading" ? { entity: t, state: "ready" } : s), y6);
    return () => clearTimeout(i);
  }, [t]), {
    state: a,
    img: {
      onLoad: () => n({ entity: t, state: "ready" }),
      onError: () => n({ entity: t, state: "error" })
    }
  };
}
function O2(t) {
  const e = ee(null);
  return H(() => {
    const n = e.current;
    return () => {
      n && (n.src = Mt);
    };
  }, []), /* @__PURE__ */ o(
    "img",
    {
      ref: e,
      src: t.paused ? Mt : t.src,
      alt: "",
      draggable: !1,
      onLoad: t.onLoad,
      onError: t.onError
    }
  );
}
const ye = {
  PAUSE: 1,
  VOLUME_SET: 4,
  VOLUME_MUTE: 8,
  PREVIOUS: 16,
  NEXT: 32,
  TURN_ON: 128,
  TURN_OFF: 256,
  SELECT_SOURCE: 2048,
  PLAY: 16384
}, w6 = ["playing", "paused", "idle", "on", "off", "standby", "buffering"], Ot = (t) => w6.indexOf(t) !== -1 ? d("media.state." + t) : t;
function _6({ it: t, tv: e, sources: n, size: a }) {
  const i = ae(), s = i.states[t.entity], c = s ? s.attributes : {}, r = Number(c.supported_features) || 0, f = (B) => (r & B) === B, h = s ? s.state : "off", m = h === "off" || h === "standby", A = h === "playing", l = (B, T) => i.callService(t.entity, B, T), [u, p] = v(null), g = u ?? (typeof c.volume_level == "number" ? c.volume_level : null);
  H(() => {
    p(null);
  }, [c.volume_level]);
  const y = ee(0), w = (B) => {
    const T = Math.max(0, Math.min(1, Math.round(B * 100) / 100));
    p(T), clearTimeout(y.current), y.current = window.setTimeout(() => l("volume_set", { volume_level: T }), 400);
  }, k = ee(null), x = (B) => {
    const T = k.current;
    if (!T) return;
    const R = T.getBoundingClientRect();
    w((B - R.left) / R.width);
  }, C = i.pictureUrl(c.entity_picture_local || c.entity_picture), E = c.media_title || c.app_name || c.source || Ot(h), M = c.media_artist || c.media_album_name || (c.media_title ? Ot(h) : "") || "", b = a.h >= 300 && a.w >= 300, I = a.h < 250, P = e ? p1 : m ? m2 : Qc;
  return m && e ? /* @__PURE__ */ o("div", { class: "media media-off", children: [
    /* @__PURE__ */ o("div", { class: "media-art-empty big", children: /* @__PURE__ */ o(p1, { size: 40 }) }),
    /* @__PURE__ */ o("div", { class: "media-title", children: be(i, t) }),
    /* @__PURE__ */ o("div", { class: "media-sub", children: Ot(h) }),
    f(ye.TURN_ON) ? /* @__PURE__ */ o("button", { class: "pill-btn media-power", onClick: () => l("turn_on"), children: [
      /* @__PURE__ */ o(wt, { size: 18 }),
      /* @__PURE__ */ o("span", { children: d("common.turn_on") })
    ] }) : /* @__PURE__ */ o("div", { class: "muted small media-hint", children: d("media.tv_remote_only") })
  ] }) : /* @__PURE__ */ o("div", { class: "media" + (b ? " big" : "") + (I ? " short" : ""), children: [
    /* @__PURE__ */ o("div", { class: "media-top", children: [
      C && !m ? /* @__PURE__ */ o("div", { class: "media-art", style: { backgroundImage: "url(" + C + ")" } }) : /* @__PURE__ */ o("div", { class: "media-art media-art-empty", children: /* @__PURE__ */ o(P, { size: b ? 36 : 26 }) }),
      /* @__PURE__ */ o("div", { class: "media-info", children: [
        /* @__PURE__ */ o("div", { class: "media-title", children: E }),
        M && /* @__PURE__ */ o("div", { class: "media-sub", children: M }),
        /* @__PURE__ */ o("div", { class: "media-state" + (A ? " on" : ""), children: [
          A && /* @__PURE__ */ o("i", { class: "eq", children: [
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {})
          ] }),
          Ot(h)
        ] })
      ] }),
      (f(ye.TURN_OFF) || f(ye.TURN_ON)) && /* @__PURE__ */ o("button", { class: "icon-round", title: d(m ? "common.turn_on" : "common.turn_off"), onClick: () => l(m ? "turn_on" : "turn_off"), children: /* @__PURE__ */ o(wt, { size: 16 }) })
    ] }),
    (f(ye.PAUSE) || f(ye.PLAY) || f(ye.NEXT)) && /* @__PURE__ */ o("div", { class: "media-controls", children: [
      f(ye.PREVIOUS) && /* @__PURE__ */ o("button", { onClick: () => l("media_previous_track"), children: /* @__PURE__ */ o(fr, { size: 22 }) }),
      /* @__PURE__ */ o("button", { class: "media-play", onClick: () => l("media_play_pause"), children: A ? /* @__PURE__ */ o(ir, { size: 24 }) : /* @__PURE__ */ o(Ji, { size: 24 }) }),
      f(ye.NEXT) && /* @__PURE__ */ o("button", { onClick: () => l("media_next_track"), children: /* @__PURE__ */ o(hr, { size: 22 }) })
    ] }),
    g != null && f(ye.VOLUME_SET) && /* @__PURE__ */ o("div", { class: "media-volume", children: [
      f(ye.VOLUME_MUTE) && /* @__PURE__ */ o("button", { onClick: () => l("volume_mute", { is_volume_muted: !c.is_volume_muted }), children: c.is_volume_muted ? /* @__PURE__ */ o(xr, { size: 18 }) : /* @__PURE__ */ o(br, { size: 18 }) }),
      /* @__PURE__ */ o(
        "div",
        {
          class: "vol-bar",
          ref: k,
          onClick: (B) => x(B.clientX),
          onTouchMove: (B) => x(B.touches[0].clientX),
          children: /* @__PURE__ */ o("div", { class: "vol-fill", style: { width: Math.round(g * 100) + "%" } })
        }
      ),
      /* @__PURE__ */ o("span", { class: "vol-num", children: Math.round(g * 100) })
    ] }),
    n && f(ye.SELECT_SOURCE) && c.source_list && /* @__PURE__ */ o("div", { class: "chips media-sources", children: c.source_list.map((B) => /* @__PURE__ */ o("button", { class: "chip" + (c.source === B ? " active" : ""), onClick: () => l("select_source", { source: B }), children: B }, B)) })
  ] });
}
function z6({ card: t, size: e }) {
  const n = ae(), a = t.items.findIndex((f) => n.states[f.entity] && n.states[f.entity].state === "playing"), [i, s] = v(a >= 0 ? a : 0), c = t.items[Math.min(i, t.items.length - 1)], r = t.type === "tv" || !!n.states[c.entity] && n.states[c.entity].attributes.device_class === "tv";
  return /* @__PURE__ */ o("div", { class: "media-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline seg-full", children: t.items.map((f, h) => {
      const m = n.states[f.entity];
      return /* @__PURE__ */ o("button", { class: h === i ? "active" : "", onClick: () => s(h), children: [
        m && m.state === "playing" && /* @__PURE__ */ o("i", { class: "dot-live" }),
        be(n, f)
      ] }, f.entity);
    }) }),
    Ge(n, c.entity) && /* @__PURE__ */ o(_6, { it: c, tv: r, sources: t.type === "tv", size: e }, c.entity)
  ] });
}
const M6 = {
  "clear-night": { Icon: Vi },
  cloudy: { Icon: fi },
  exceptional: { Icon: jn },
  fog: { Icon: Oc },
  hail: { Icon: go },
  lightning: { Icon: jn },
  "lightning-rainy": { Icon: jn },
  partlycloudy: { Icon: ri },
  pouring: { Icon: Hc },
  rainy: { Icon: Pc },
  snowy: { Icon: P1 },
  "snowy-rainy": { Icon: go },
  sunny: { Icon: A2 },
  windy: { Icon: gn },
  "windy-variant": { Icon: gn }
};
function tt(t) {
  const e = M6[t || ""];
  return { label: e ? d("weather." + t) : t || "—", Icon: e ? e.Icon : fi };
}
function H2(t, e) {
  const [n, a] = v([]), [i, s] = v([]), c = e ? t.states[e] : void 0, r = c && Number(c.attributes.supported_features) || 0;
  return H(() => {
    if (!e || t.status !== "connected" || !r) return;
    const f = [];
    r & 2 && f.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: "hourly" },
      (m) => a(m.forecast || [])
    ));
    const h = r & 1 ? "daily" : r & 4 ? "twice_daily" : "";
    return h && f.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: h },
      (m) => s(C6(m.forecast || [], h === "twice_daily"))
    )), () => f.forEach((m) => m());
  }, [e, t.status, r]), { hourly: n, days: i };
}
function C6(t, e) {
  if (!e) return t.map((i) => ({ t: Date.parse(i.datetime), hi: i.temperature, lo: i.templow, condition: i.condition }));
  const n = {}, a = [];
  return t.forEach((i) => {
    const s = new Date(Date.parse(i.datetime)), c = s.getFullYear() + "-" + s.getMonth() + "-" + s.getDate();
    n[c] || (n[c] = { t: s.getTime() }, a.push(c));
    const r = n[c];
    [i.temperature, i.templow].filter((h) => typeof h == "number").forEach((h) => {
      r.hi = r.hi == null ? h : Math.max(r.hi, h), r.lo = r.lo == null ? h : Math.min(r.lo, h);
    }), (i.is_daytime !== !1 || !r.condition) && (r.condition = i.condition);
  }), a.map((i) => n[i]);
}
function L6(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "m/s" ? n : e === "mph" ? n * 0.447 : n / 3.6;
}
function S6(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "mmHg" ? n : e === "inHg" ? n * 25.4 : n * 0.750062;
}
function ge(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : String(Math.round(e));
}
const E6 = 64, I6 = 32, wo = 36, _o = 84, N6 = 33;
function F2({ card: t, size: e }) {
  const n = ae(), a = _n(), i = t.items.filter((b) => b.entity.indexOf("weather.") === 0)[0], s = t.items.filter((b) => b !== i), c = i && i.entity, r = c ? n.states[c] : void 0, { hourly: f, days: h } = H2(n, c);
  let m = e.h - (r ? E6 + I6 : 0);
  const A = Math.max(0, Math.min(s.length, Math.floor(m / wo)));
  m -= A * wo + (A ? 10 : 0);
  const l = !!r && f.length > 0 && m >= _o;
  l && (m -= _o + 12);
  const u = r ? Math.max(0, Math.min(h.length, 7, Math.floor((m - 10) / N6))) : 0, p = h.slice(0, u), g = Math.min.apply(null, p.map((b) => b.lo != null ? b.lo : 99)), y = Math.max.apply(null, p.map((b) => b.hi != null ? b.hi : -99)), w = (b) => (b - g) / Math.max(1, y - g) * 100, k = Date.now(), x = r ? r.attributes : {}, C = tt(r && r.state), E = L6(x.wind_speed, x.wind_speed_unit), M = S6(x.pressure, x.pressure_unit);
  return /* @__PURE__ */ o("div", { class: "weather", children: [
    r && /* @__PURE__ */ o("div", { class: "weather-now", children: [
      /* @__PURE__ */ o(C.Icon, { size: e.w > 360 ? 54 : 40 }),
      /* @__PURE__ */ o("div", { class: "weather-temp", children: [
        ge(x.temperature),
        /* @__PURE__ */ o("sup", { children: "°" })
      ] }),
      /* @__PURE__ */ o("div", { class: "weather-desc", children: [
        /* @__PURE__ */ o("b", { children: C.label }),
        x.apparent_temperature != null && /* @__PURE__ */ o("span", { children: d("weather.feels_like", { t: ge(x.apparent_temperature) }) }),
        h[0] && h[0].hi != null && /* @__PURE__ */ o("span", { children: [
          ge(h[0].lo),
          "° … ",
          ge(h[0].hi),
          "°"
        ] })
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { class: "weather-facts", children: [
      E != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(gn, { size: 14 }),
        d("weather.wind", { v: E.toFixed(1) })
      ] }),
      x.humidity != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(Je, { size: 14 }),
        ge(x.humidity),
        "%"
      ] }),
      M != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(Ci, { size: 14 }),
        d("weather.pressure", { v: Math.round(M) })
      ] })
    ] }),
    A > 0 && /* @__PURE__ */ o("div", { class: "weather-rooms", children: s.slice(0, A).map((b) => {
      const I = n.states[b.entity], P = b.entity.indexOf("weather.") === 0, B = P ? I && I.attributes.temperature : I && I.state, T = P ? I && I.attributes.humidity : b.hum ? Ne(n, b.hum) : void 0;
      return /* @__PURE__ */ o("div", { class: "wroom tappable", onClick: () => a(b.hum ? [b.entity, b.hum] : [b.entity]), children: [
        /* @__PURE__ */ o("span", { class: "wroom-name", children: be(n, b) }),
        T != null && /* @__PURE__ */ o("span", { class: "wroom-hum", children: [
          /* @__PURE__ */ o(Je, { size: 12 }),
          ge(T),
          "%"
        ] }),
        /* @__PURE__ */ o("b", { class: "wroom-temp", children: [
          D6(B),
          "°"
        ] })
      ] }, b.entity);
    }) }),
    l && /* @__PURE__ */ o("div", { class: "weather-hours", children: f.filter((b) => Date.parse(b.datetime) > k - 36e5).slice(0, 12).map((b) => {
      const I = tt(b.condition);
      return /* @__PURE__ */ o("div", { class: "hour", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: Xe(Date.parse(b.datetime)) }),
        /* @__PURE__ */ o(I.Icon, { size: 18 }),
        /* @__PURE__ */ o("b", { children: [
          ge(b.temperature),
          "°"
        ] })
      ] }, b.datetime);
    }) }),
    p.length > 0 && /* @__PURE__ */ o("div", { class: "weather-days", children: p.map((b, I) => {
      const P = tt(b.condition);
      return /* @__PURE__ */ o("div", { class: "day", children: [
        /* @__PURE__ */ o("span", { class: "day-name", children: I === 0 ? d("weather.today") : nt("date.weekdays_short")[new Date(b.t).getDay()] }),
        /* @__PURE__ */ o(P.Icon, { size: 18 }),
        /* @__PURE__ */ o("span", { class: "day-lo", children: [
          ge(b.lo),
          "°"
        ] }),
        /* @__PURE__ */ o("span", { class: "day-bar", children: b.lo != null && b.hi != null && /* @__PURE__ */ o("i", { style: { left: w(b.lo) + "%", width: Math.max(4, w(b.hi) - w(b.lo)) + "%" } }) }),
        /* @__PURE__ */ o("span", { class: "day-hi", children: [
          ge(b.hi),
          "°"
        ] })
      ] }, b.t);
    }) })
  ] });
}
function D6(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : (Math.round(e * 10) / 10).toFixed(1);
}
function B6({ entity: t }) {
  const e = ae(), n = e.states[t], { days: a } = H2(e, t);
  if (!n || n.state === "unavailable") return null;
  const i = tt(n.state), s = a[0];
  return /* @__PURE__ */ o("div", { class: "ambient-weather", children: [
    /* @__PURE__ */ o(i.Icon, { size: 30 }),
    /* @__PURE__ */ o("span", { class: "aw-temp", children: [
      ge(n.attributes.temperature),
      "°"
    ] }),
    /* @__PURE__ */ o("span", { class: "aw-desc", children: [
      i.label,
      s && s.hi != null && /* @__PURE__ */ o("small", { children: [
        ge(s.lo),
        "° … ",
        ge(s.hi),
        "°"
      ] })
    ] })
  ] });
}
function H1(t, e) {
  if (!e || rn[t].domains.indexOf(e.entity_id.split(".")[0]) === -1) return !1;
  const n = e.attributes.device_class, a = e.entity_id.indexOf("weather.") === 0;
  return t === "climate" || t === "weather" ? a || n === "temperature" : !0;
}
function zo(t, e, n) {
  return e.filter((a) => t.states[a] && t.states[a].entity_id.indexOf("sensor.") === 0 && t.states[a].attributes.device_class === n)[0];
}
function j2(t, e, n) {
  if (!n.device) return [n];
  const a = t.devices[n.device];
  if (!a) return n.entity ? [{ entity: n.entity, name: n.name }] : [];
  const i = a.entities.filter((l) => t.registry[l] && t.registry[l].ec == null && !!t.states[l]), s = n.skip || [], c = n.order || [], r = (l) => {
    const u = c.indexOf(l);
    return u === -1 ? 1e6 : u;
  }, f = i.filter((l) => H1(e, t.states[l]) && s.indexOf(l) === -1).map((l, u) => ({ id: l, i: u })).sort((l, u) => r(l.id) - r(u.id) || l.i - u.i).map((l) => l.id), h = f.length === 1, m = n.names || {}, A = (l) => m[l] || (h ? n.name || a.name : t.registry[l].en || a.name || void 0);
  return e === "climate" ? f.map((l) => ({ entity: l, hum: zo(t, i, "humidity"), name: A(l) })) : e === "ac" ? f.map((l) => ({ entity: l, temp: n.temp || zo(t, i, "temperature"), name: A(l) })) : f.map((l) => ({ entity: l, name: A(l), icon: void 0 }));
}
function T6(t, e) {
  if (!e.items.some((i) => i.device)) return e;
  const n = {}, a = [];
  return e.items.forEach((i) => j2(t, e.type, i).forEach((s) => {
    n[s.entity] || (n[s.entity] = !0, a.push(s));
  })), { ...e, items: a };
}
const R2 = "photoframe.cameraMode", Zt = [];
function q2() {
  try {
    const t = localStorage.getItem(R2);
    return t === "live" || t === "paused" || t === "snapshot" ? t : "auto";
  } catch {
    return "auto";
  }
}
function P6(t) {
  try {
    localStorage.setItem(R2, t);
  } catch {
  }
  Zt.forEach((e) => e());
}
function O6(t = "full") {
  const e = q2();
  return e === "auto" ? t === "lite" ? "paused" : "live" : e;
}
function H6() {
  const t = E1(), [, e] = v(0);
  return H(() => {
    const n = () => e((a) => a + 1);
    return Zt.push(n), () => {
      Zt.splice(Zt.indexOf(n), 1);
    };
  }, []), O6(t);
}
const F6 = 450;
function j6(t, e, n) {
  const a = ee(0), i = () => {
    a.current && (window.clearTimeout(a.current), a.current = 0);
  };
  return H(() => i, []), {
    onMouseEnter: () => {
      !e || a.current || (a.current = window.setTimeout(() => {
        a.current = 0, t();
      }, F6));
    },
    onMouseLeave: () => {
      i(), n && n();
    }
  };
}
const R6 = 36, q6 = 8;
function Q2(t, e) {
  const n = ee(null), a = ee(!1), i = ee(0), s = (g, y) => {
    n.current = { x: g, y }, a.current = !1;
  }, c = (g, y, w, k) => {
    if (!n.current) return;
    const x = g - n.current.x, C = y - n.current.y;
    Math.abs(x) > q6 && Math.abs(x) > Math.abs(C) && w && k && k.cancelable && w(k);
  }, r = (g, y) => {
    const w = n.current;
    if (n.current = null, !w) return;
    const k = g - w.x, x = y - w.y;
    Math.abs(k) > R6 && Math.abs(k) > Math.abs(x) * 1.2 && (a.current = !0, t(k < 0 ? 1 : -1));
  }, f = () => {
    n.current = null;
  };
  return {
    onTouchStart: (g) => {
      i.current = Date.now();
      const y = g.touches[0];
      y && s(y.clientX, y.clientY);
    },
    onTouchMove: (g) => {
      i.current = Date.now();
      const y = g.touches[0];
      y && c(y.clientX, y.clientY, (w) => w.preventDefault(), g);
    },
    onTouchEnd: (g) => {
      i.current = Date.now();
      const y = g.changedTouches[0];
      y && r(y.clientX, y.clientY);
    },
    onTouchCancel: f,
    onMouseDown: (g) => {
      g.button !== 0 || Date.now() - i.current < 700 || s(g.clientX, g.clientY);
    },
    onMouseMove: (g) => c(g.clientX, g.clientY),
    onMouseUp: (g) => r(g.clientX, g.clientY),
    onMouseLeave: f,
    onDragStart: (g) => g.preventDefault(),
    onClick: () => {
      if (a.current) {
        a.current = !1;
        return;
      }
      e && e();
    }
  };
}
function Ln(t, e) {
  const n = T6(t, e.title ? e : { ...e, title: gt(e.type) }), a = n.items.filter((i) => Ge(t, i.entity));
  return a.length === n.items.length ? n : { ...n, items: a };
}
function be(t, e) {
  const n = t.states[e.entity];
  return e.name || n && n.attributes.friendly_name || e.entity;
}
function Q6(t, e) {
  const n = t.states[e];
  return n ? n.attributes.device_class : void 0;
}
const W6 = [
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
], V6 = ["door", "window", "opening", "garage_door", "moisture", "smoke", "gas", "problem", "safety"];
function x1(t, e) {
  const n = t.states[e];
  if (!n || At(n.state)) return { text: d("sensor.no_data"), alert: !1, on: !1 };
  const a = e.split(".")[0], i = n.attributes.device_class;
  if (a === "binary_sensor") {
    const c = n.state === "on", r = W6.indexOf(i) !== -1 ? "sensor." + i + "." : "sensor.";
    return { text: d(r + (c ? "on" : "off")), alert: c && V6.indexOf(i) !== -1, on: c };
  }
  if (a === "lock") return { text: n.state === "locked" ? d("sensor.locked") : d("sensor.unlocked"), alert: n.state !== "locked", on: n.state !== "locked" };
  if (a === "cover") return { text: n.state === "open" ? d("sensor.open") : n.state === "closed" ? d("sensor.closed") : n.state, alert: !1, on: n.state === "open" };
  const s = parseFloat(n.state);
  return { text: (isNaN(s) ? n.state : String(Math.round(s * 10) / 10)) + sn(t, e), alert: !1, on: !1 };
}
function U6(t) {
  return Math.max(1, Math.min(5, Math.floor(t.w / 150)));
}
function W2(t, e) {
  const a = (c) => (e.h + 10) / Math.ceil(t / c) - 10;
  let i = U6(e);
  for (; i < Math.min(t, 6) && a(i) < 96 && e.w / (i + 1) >= 120; ) i++;
  const s = a(i);
  return "lights cols-" + i + (s >= 96 ? "" : s >= 70 ? " compact" : " list");
}
function Y6({ card: t, size: e }) {
  const n = ae(), a = _n(), i = e.h / Math.max(1, t.items.length) < 95;
  return /* @__PURE__ */ o("div", { class: "rooms" + (i ? " compact" : ""), children: t.items.map((s) => {
    const c = s.entity.indexOf("weather.") === 0 ? n.states[s.entity] : void 0, r = c ? tt(c.state).Icon : null;
    return /* @__PURE__ */ o("div", { class: "room tappable" + (c ? " room-outside" : ""), onClick: () => a(s.hum ? [s.entity, s.hum] : [s.entity]), children: [
      /* @__PURE__ */ o("div", { class: "room-name", children: [
        r && /* @__PURE__ */ o(r, { size: 14 }),
        be(n, s)
      ] }),
      /* @__PURE__ */ o("div", { class: "room-vals", children: [
        /* @__PURE__ */ o("span", { class: "room-temp", children: [
          Vt(c ? String(c.attributes.temperature) : Ne(n, s.entity)),
          /* @__PURE__ */ o("sup", { children: "°" })
        ] }),
        c && c.attributes.humidity != null && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Je, { size: 14 }),
          Math.round(c.attributes.humidity),
          "%"
        ] }),
        !c && s.hum && Ge(n, s.hum) && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Je, { size: 14 }),
          Vt(Ne(n, s.hum), 0),
          "%"
        ] })
      ] })
    ] }, s.entity);
  }) });
}
function G6(t, e) {
  const n = ee(0), a = ee(!1), i = () => {
    a.current = !1, clearTimeout(n.current), n.current = window.setTimeout(() => {
      a.current = !0, t();
    }, 550);
  }, s = () => clearTimeout(n.current);
  return {
    onTouchStart: i,
    onMouseDown: i,
    onTouchEnd: s,
    onTouchMove: s,
    onMouseUp: s,
    onMouseLeave: s,
    onContextMenu: (c) => c.preventDefault(),
    onClick: () => {
      a.current ? a.current = !1 : e();
    }
  };
}
function Z6({ it: t }) {
  const e = ae(), n = _n(), a = G6(() => n([t.entity]), () => e.toggle(t.entity)), i = Ne(e, t.entity), s = wn(i);
  return /* @__PURE__ */ o("button", { class: "light" + (s ? " on" : "") + (i === void 0 ? " na" : ""), ...a, children: [
    /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(ke, { name: t.icon || O1(t.entity), size: 22 }) }),
    /* @__PURE__ */ o("span", { class: "light-name", children: be(e, t) }),
    /* @__PURE__ */ o("span", { class: "light-state", children: d(i === void 0 ? "switch.unavailable" : s ? "switch.on" : "switch.off") })
  ] });
}
function J6({ card: t, size: e }) {
  return /* @__PURE__ */ o("div", { class: W2(t.items.length, e), children: t.items.map((n) => /* @__PURE__ */ o(Z6, { it: n }, n.entity)) });
}
function X6({ card: t, paused: e, onCamera: n }) {
  const a = ae(), i = H6(), [s, c] = v(!1), [r, f] = v(0), h = t.items.map((b) => ({ entity: b.entity, name: be(a, b) })), m = Math.min(r, Math.max(0, h.length - 1)), A = h[m], l = A ? A.entity : "", u = A ? a.cameraStreamUrl(A.entity) : "", p = A ? a.cameraSnapshotUrl(A.entity) : "", [g, y] = v(!1), w = i === "live" || s || g, k = k6(p, !w && !e), x = P2(l), C = Q2(
    (b) => {
      h.length > 1 && f(T2(m, b, h.length));
    },
    () => {
      u && n(h, m);
    }
  ), E = j6(() => y(!0), !w, () => y(!1));
  H(() => {
    c(!1), y(!1);
  }, [i]);
  const M = w ? !u || x.state === "error" : !k;
  return /* @__PURE__ */ o("div", { class: "cam-wrap", children: [
    h.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline seg-full", children: h.map((b, I) => /* @__PURE__ */ o("button", { class: I === m ? "active" : "", onClick: () => f(I), children: b.name }, b.entity + I)) }),
    /* @__PURE__ */ o(
      "div",
      {
        class: "cam cam-swipe fit-" + (t.fit || "cover"),
        ...C,
        ...E,
        onMouseLeave: () => {
          C.onMouseLeave(), E.onMouseLeave();
        },
        children: [
          /* @__PURE__ */ o(O2, { paused: e && w, src: w ? u || Mt : k || Mt, ...x.img }),
          M && /* @__PURE__ */ o("div", { class: "cam-empty", children: [
            /* @__PURE__ */ o(pr, { size: 26 }),
            /* @__PURE__ */ o("span", { children: d("camera.no_stream") })
          ] }),
          !w && !M && /* @__PURE__ */ o("button", { class: "cam-play-corner", onClick: (b) => {
            b.stopPropagation(), c(!0);
          }, title: d("camera.play"), children: /* @__PURE__ */ o(Ji, { size: 15, fill: "currentColor" }) }),
          w && x.state === "loading" && /* @__PURE__ */ o("div", { class: "cam-loading", children: [
            /* @__PURE__ */ o("i", { class: "cam-spinner" }),
            /* @__PURE__ */ o("span", { children: d("camera.loading") })
          ] }),
          w && !M && /* @__PURE__ */ o("span", { class: "live", children: [
            /* @__PURE__ */ o("i", {}),
            "LIVE"
          ] })
        ]
      }
    )
  ] });
}
function $6({ card: t }) {
  const e = ae(), n = _n();
  return /* @__PURE__ */ o("div", { class: "sensors", children: t.items.map((a) => {
    const i = x1(e, a.entity);
    return /* @__PURE__ */ o("div", { class: "status-row tappable" + (i.alert ? " alert" : ""), onClick: () => n([a.entity]), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(ke, { name: a.icon || O1(a.entity, Q6(e, a.entity)), size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: be(e, a) }),
        /* @__PURE__ */ o("small", { children: i.text })
      ] })
    ] }, a.entity);
  }) });
}
function K6({ card: t, size: e }) {
  const n = ae(), [a, i] = v(""), s = (c) => {
    const r = c.split(".")[0];
    n.callService(c, r === "automation" ? "trigger" : "turn_on"), i(c), setTimeout(() => i(""), 1200);
  };
  return /* @__PURE__ */ o("div", { class: W2(t.items.length, e), children: t.items.map((c) => /* @__PURE__ */ o("button", { class: "light scene" + (a === c.entity ? " on" : ""), onClick: () => s(c.entity), children: [
    /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(ke, { name: c.icon || "sparkles", size: 22 }) }),
    /* @__PURE__ */ o("span", { class: "light-name", children: be(n, c) }),
    /* @__PURE__ */ o("span", { class: "light-state", children: a === c.entity ? d("scene.started") : d("scene.tap_to_run") })
  ] }, c.entity)) });
}
function V2(t) {
  const e = ae(), { size: n, onCamera: a } = t;
  if (!t.card.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.empty") });
  const i = Ln(e, t.card);
  if (!i.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.all_unavailable") });
  switch (i.type) {
    case "climate":
      return /* @__PURE__ */ o(Y6, { card: i, size: n });
    case "switches":
      return /* @__PURE__ */ o(J6, { card: i, size: n });
    case "cameras":
      return /* @__PURE__ */ o(X6, { card: i, paused: t.paused, onCamera: a });
    case "sensors":
      return /* @__PURE__ */ o($6, { card: i });
    case "scenes":
      return /* @__PURE__ */ o(K6, { card: i, size: n });
    case "ac":
      return /* @__PURE__ */ o(x6, { card: i, size: n });
    case "speakers":
    case "tv":
      return /* @__PURE__ */ o(z6, { card: i, size: n });
    case "weather":
      return /* @__PURE__ */ o(F2, { card: i, size: n });
  }
}
function U2(t) {
  const e = ae(), n = Ln(e, t.card);
  if (n.type !== "switches") return null;
  const a = n.items.filter((i) => wn(Ne(e, i.entity)));
  return a.length ? /* @__PURE__ */ o("button", { class: "chip-btn", onClick: () => a.forEach((i) => e.turnOff(i.entity)), children: [
    /* @__PURE__ */ o(wt, { size: 14 }),
    /* @__PURE__ */ o("span", { children: d("switches.all_off") })
  ] }) : null;
}
function F1(t, e) {
  const n = Ln(t, e);
  if (n.type === "switches") {
    const a = n.items.filter((i) => wn(Ne(t, i.entity))).length;
    return d("switches.title_count", { title: n.title, on: a, total: n.items.length });
  }
  return n.title;
}
function Mo(t, e) {
  const n = Ln(t, e), a = n.items[0];
  if (n.type === "climate") {
    const i = n.items.filter((s) => s.entity.indexOf("weather.") !== 0)[0];
    return { text: i ? Vt(Ne(t, i.entity)) + "°" : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "switches") {
    const i = n.items.filter((s) => wn(Ne(t, s.entity))).length;
    return { text: i ? d("chip.on_count", { title: n.title, n: i }) : d("chip.off", { title: n.title }), lit: i > 0, alert: !1 };
  }
  if (n.type === "sensors") {
    for (let i = 0; i < n.items.length; i++) {
      const s = x1(t, n.items[i].entity);
      if (s.alert) return { text: be(t, n.items[i]) + ": " + s.text.toLowerCase(), lit: !1, alert: !0 };
    }
    return { text: a ? x1(t, a.entity).text : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "ac" && a) {
    const i = t.states[a.entity];
    return !i || i.state === "off" ? { text: d("chip.off", { title: n.title }), lit: !1, alert: !1 } : { text: n.title + ": " + i.attributes.temperature + "°", lit: !0, alert: !1 };
  }
  if ((n.type === "speakers" || n.type === "tv") && n.items.length) {
    const i = n.items.filter((r) => t.states[r.entity] && t.states[r.entity].state === "playing")[0], s = i && t.states[i.entity];
    return s ? { text: "♪ " + (s.attributes.media_title || be(t, i)), lit: !0, alert: !1 } : { text: n.items.filter((r) => t.states[r.entity] && ["on", "idle", "paused"].indexOf(t.states[r.entity].state) !== -1).length && n.type === "tv" ? d("chip.on", { title: n.title }) : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "weather" && a) {
    const i = t.states[a.entity];
    return { text: i ? Math.round(i.attributes.temperature) + "° " + tt(i.state).label.toLowerCase() : n.title, lit: !1, alert: !1 };
  }
  return { text: n.title, lit: !1, alert: !1 };
}
function ed(t) {
  return /* @__PURE__ */ o("section", { class: "panel " + (t.class || ""), children: [
    /* @__PURE__ */ o("div", { class: "panel-head", children: [
      /* @__PURE__ */ o("div", { class: "panel-title", children: [
        t.icon && /* @__PURE__ */ o(ke, { name: t.icon, size: 16, class: "panel-icon" }),
        /* @__PURE__ */ o("h2", { children: t.title })
      ] }),
      t.aside
    ] }),
    t.children
  ] });
}
function Y2(t, e = 520) {
  const [n, a] = v(t);
  return kn(() => {
    if (t) {
      a(!0);
      return;
    }
    const i = window.setTimeout(() => a(!1), e);
    return () => clearTimeout(i);
  }, [t, e]), t || n;
}
function G2(t) {
  return t.layout === "auto" ? window.innerWidth <= 700 ? "center" : "corner" : t.layout;
}
const Pe = 3, ve = 100 - Pe * 2;
function Z2(t) {
  const e = (n) => (Pe + n / K * ve) / 100;
  return [e(t.x), e(t.y), e(t.x + t.w), e(t.y + t.h)];
}
function Co(t) {
  return {
    left: Pe + t.x / K * ve + "%",
    top: Pe + t.y / K * ve + "%",
    width: t.w / K * ve + "%",
    height: t.h / K * ve + "%"
  };
}
function Lo(t) {
  const e = t.x + t.w / 2, n = t.y + t.h / 2;
  return " g-" + (t.ha || (e < K / 3 ? "left" : e > K * 2 / 3 ? "right" : "center")) + " g-" + (t.va || (n < K / 3 ? "top" : n > K * 2 / 3 ? "bottom" : "middle"));
}
function J2(t, e) {
  if (e) return Z2(e.clock);
  const n = G2(t);
  return n === "top" ? [0.2, 0.05, 0.8, 0.35] : n === "corner" ? [0, 0.55, 0.55, 0.95] : [0.2, 0.55, 0.8, 0.9];
}
const td = [0.4, 0.88, 0.6, 1];
function nd(t, e) {
  return e ? Z2(e.widgets) : t.widgetsPos === "top" ? [0.15, 0, 0.85, 0.2] : t.widgetsPos === "bottom" ? [0.15, 0.78, 0.85, 0.96] : G2(t) === "corner" ? [0.5, 0.7, 1, 0.96] : J2(t, null);
}
function Qn([t, e, n]) {
  const a = (i) => (i /= 255, i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * a(t) + 0.7152 * a(e) + 0.0722 * a(n);
}
const Wn = { color: "#ffffff", dark: !1 };
function Vn(t, e, n) {
  const [a, i] = v(Wn), s = e.join(",");
  return H(() => {
    if (!n || !t) return;
    const c = new Image();
    c.onload = () => {
      try {
        const r = document.createElement("canvas");
        r.width = c.width, r.height = c.height;
        const f = r.getContext("2d");
        f.drawImage(c, 0, 0);
        const h = Math.floor(e[0] * r.width), m = Math.floor(e[1] * r.height), A = Math.max(1, Math.floor((e[2] - e[0]) * r.width)), l = Math.max(1, Math.floor((e[3] - e[1]) * r.height)), u = f.getImageData(h, m, A, l).data, p = [0, 0, 0];
        for (let M = 0; M < u.length; M += 4)
          p[0] += u[M], p[1] += u[M + 1], p[2] += u[M + 2];
        const g = u.length / 4, y = p.map((M) => M / g), w = y.map((M) => 255 - M), k = Qn(y), x = Qn(w), E = (Math.max(k, x) + 0.05) / (Math.min(k, x) + 0.05) >= 3 ? w : k > 0.35 ? [17, 17, 17] : [255, 255, 255];
        i({ color: "rgb(" + E.map(Math.round).join(",") + ")", dark: Qn(E) < 0.25 });
      } catch {
        i(Wn);
      }
    }, c.src = t;
  }, [t, s, n]), n ? a : Wn;
}
function od({ prefs: t }) {
  const e = N2(5e3), n = t.datePos === "above" || t.datePos !== "below" && t.layout === "top", a = t.date && /* @__PURE__ */ o("div", { class: "ambient-date" + (n ? " above" : ""), children: B2(e) });
  return /* @__PURE__ */ o(U, { children: [
    n && a,
    /* @__PURE__ */ o("div", { class: "ambient-time", style: { fontWeight: za[t.font] }, children: D2(e) }),
    !n && a
  ] });
}
function ad(t) {
  const e = ae(), n = ot(), a = Sa(), [i, s] = v(""), c = n.homeCards().filter((N) => N.chip), r = c.filter((N) => N.type === "weather" && N.items.length)[0], f = nc(c.filter((N) => N.type !== "weather"), a), h = f.filter((N) => a.hidden.indexOf(N.id) === -1), m = h.filter((N) => Mo(e, N).alert), A = t.customizing, l = () => {
    s(""), t.onDone();
  }, [u, p] = v(null), g = Ia(), y = Na(a, g), w = u || y, k = () => re(m1(g, y ? null : Ea(a, g === "landscape" && window.innerWidth > 700))), x = a.color === "contrast", C = a.widgetsColor || a.color, E = C === "contrast", M = !E && !(a.widgetsColor === "" && C === "white"), b = ro(C, a.widgetsColor ? a.widgetsCustomColor : a.customColor), I = !x && a.color !== "white", P = ro(a.color, a.customColor), B = Vn(t.photoThumb, J2(a, w), x), T = Vn(t.photoThumb, nd(a, w), E), R = Vn(t.photoThumb, td, x), Z = Y2(t.visible || A), se = "ambient" + (t.visible ? " visible" : "") + (w ? " lock-grid" : " lock-" + a.layout + " widgets-" + a.widgetsPos) + " lock-size-" + a.size + " chips-" + a.chipStyle + (A ? " customizing" : "");
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o("div", { ref: t.innerRef, class: se, children: Z && /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ o(
        "div",
        {
          class: "ambient-clock" + (x ? " text-contrast" : "") + (I ? " ink-fixed" + (a.color === "accent" ? " accent-text" : "") : "") + (B.dark ? " ink-dark" : "") + (w ? Lo(w.clock) : ""),
          style: { ...w ? Co(w.clock) : {}, ...x ? { color: B.color } : I && P ? { color: P } : {} },
          onClick: A ? () => s("clock") : void 0,
          children: [
            /* @__PURE__ */ o(od, { prefs: a }),
            a.weather && r && /* @__PURE__ */ o(B6, { entity: r.items[0].entity })
          ]
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          class: "glances" + (E ? " text-contrast" : "") + (M ? " ink-fixed" + (C === "accent" ? " accent-text" : "") : "") + (T.dark ? " ink-dark" : "") + (w ? Lo(w.widgets) : ""),
          style: { ...w ? Co(w.widgets) : {}, ...E ? { color: T.color } : M && b ? { color: b } : {} },
          onClick: A ? () => s("widgets") : void 0,
          children: [
            e.status !== "connected" && e.status !== "connecting" && !A && /* @__PURE__ */ o("button", { class: "glance warn", onClick: t.onConnection, children: [
              /* @__PURE__ */ o(vr, { size: 18 }),
              /* @__PURE__ */ o("span", { children: d("ambient.offline") })
            ] }),
            A && !h.length && /* @__PURE__ */ o("span", { class: "glance glance-add", children: [
              /* @__PURE__ */ o($e, { size: 18 }),
              /* @__PURE__ */ o("span", { children: d("lock.add_widgets") })
            ] }),
            m.concat(h.filter((N) => m.indexOf(N) === -1)).map((N) => {
              const W = Mo(e, N);
              return /* @__PURE__ */ o(
                "button",
                {
                  class: "glance" + (W.lit ? " lit" : "") + (W.alert ? " alert" : ""),
                  title: W.text,
                  onClick: A ? void 0 : () => t.onSheet(N),
                  children: [
                    /* @__PURE__ */ o(ke, { name: N.icon, size: 18 }),
                    /* @__PURE__ */ o("span", { children: W.text })
                  ]
                },
                N.id
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ o(
        "button",
        {
          class: "home-hint" + (x ? " text-contrast" : "") + (t.showHint ? " visible" : "") + (R.dark ? " ink-dark" : ""),
          "aria-label": d("ambient.home_hint"),
          style: x ? { color: R.color } : void 0,
          onClick: t.onHome,
          tabIndex: t.showHint ? 0 : -1,
          children: /* @__PURE__ */ o(ti, { size: 36, strokeWidth: 1.8 })
        }
      ),
      A && w && !i && /* @__PURE__ */ o(X2, { grid: w, onDraft: p, onDone: (N) => {
        p(null), re(m1(g, N));
      }, onTap: s })
    ] }) }),
    Z && A && /* @__PURE__ */ o("div", { class: "lock-ui", children: [
      /* @__PURE__ */ o("div", { class: "lock-top", children: [
        /* @__PURE__ */ o("span", { children: d(w ? "lock.grid_hint" : "lock.hint") }),
        /* @__PURE__ */ o("span", { class: "lock-top-btns", children: [
          /* @__PURE__ */ o("button", { class: "pill-btn" + (y ? " on" : ""), onClick: k, title: d("lock.grid"), children: [
            /* @__PURE__ */ o(Vc, { size: 16 }),
            /* @__PURE__ */ o("span", { children: d("lock.grid") })
          ] }),
          /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: l, children: d("common.done") })
        ] })
      ] }),
      i && /* @__PURE__ */ o("div", { class: "lock-modal", onClick: (N) => {
        N.target === N.currentTarget && s("");
      }, children: /* @__PURE__ */ o(Ad, { kind: i, widgets: f, hasWeather: !!r, onClose: () => s("") }) })
    ] })
  ] });
}
const id = ["clock", "widgets"];
function X2(t) {
  const e = ee(null), n = (a, i, s) => {
    const c = e.current;
    if (!c) return;
    a.stopPropagation(), a.cancelable && a.preventDefault();
    const r = c.getBoundingClientRect(), f = (I) => {
      const P = "touches" in I ? I.touches[0] || I.changedTouches[0] : I;
      return { x: P.clientX, y: P.clientY };
    }, h = f(a), m = t.grid[i], A = r.width / K, l = r.height / K, u = c.parentElement ? c.parentElement.querySelector(i === "clock" ? ".ambient-clock" : ".glances") : null, g = (u ? [].slice.call(u.children) : []).map((I) => {
      const P = I.getBoundingClientRect(), B = getComputedStyle(I);
      return { w: P.width + parseFloat(B.marginLeft) + parseFloat(B.marginRight), h: P.height + parseFloat(B.marginTop) + parseFloat(B.marginBottom) };
    }), y = u ? (() => {
      const I = getComputedStyle(u);
      return { x: parseFloat(I.paddingLeft) + parseFloat(I.paddingRight), y: parseFloat(I.paddingTop) + parseFloat(I.paddingBottom) };
    })() : { x: 0, y: 0 }, w = g.reduce((I, P) => Math.max(I, P.w), 0), k = Math.max(1, Math.ceil((w + y.x) / A - 0.05)), x = (I) => {
      if (!g.length) return 1;
      if (i === "clock") return Math.max(1, Math.ceil((g.reduce((Z, se) => Z + se.h, 0) + y.y) / l - 0.05));
      const P = I * A - y.x;
      let B = 0, T = 0, R = 0;
      return g.forEach((Z) => {
        B && B + Z.w > P && (R += T, B = 0, T = 0), B += Z.w, T = Math.max(T, Z.h);
      }), R += T, Math.max(1, Math.ceil((R + y.y) / l - 0.05));
    };
    let C = !1, E = t.grid;
    const M = (I) => {
      const P = f(I), B = (P.x - h.x) / r.width * K, T = (P.y - h.y) / r.height * K;
      if ((Math.abs(B) > 0.3 || Math.abs(T) > 0.3) && (C = !0), !C) return;
      I.cancelable && I.preventDefault();
      let R = s ? { ...m, w: m.w + B, h: m.h + T } : { ...m, x: m.x + B, y: m.y + T };
      if (s) {
        const Z = Math.max(k, Math.round(R.w));
        R = { ...R, w: Z, h: Math.max(x(Z), Math.round(R.h)) };
      }
      E = { ...t.grid, [i]: h1(R) }, t.onDraft(E);
    }, b = () => {
      document.removeEventListener("touchmove", M), document.removeEventListener("touchend", b), document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", b), C ? t.onDone(E) : t.onTap(i);
    };
    document.addEventListener("touchmove", M, { passive: !1 }), document.addEventListener("touchend", b), document.addEventListener("mousemove", M), document.addEventListener("mouseup", b);
  };
  return /* @__PURE__ */ o("div", { class: "grid-editor", ref: e, style: { left: Pe + "%", top: Pe + "%", width: ve + "%", height: ve + "%" }, children: id.map((a) => {
    const i = t.grid[a], s = { left: i.x / K * 100 + "%", top: i.y / K * 100 + "%", width: i.w / K * 100 + "%", height: i.h / K * 100 + "%" };
    return /* @__PURE__ */ o(
      "div",
      {
        class: "grid-box grid-" + a,
        style: s,
        onTouchStart: (c) => n(c, a, !1),
        onMouseDown: (c) => n(c, a, !1),
        children: [
          /* @__PURE__ */ o("span", { class: "grid-label", children: d(a === "clock" ? "lock.clock" : "lock.widgets") }),
          /* @__PURE__ */ o("span", { class: "grid-resize", onTouchStart: (c) => n(c, a, !0), onMouseDown: (c) => n(c, a, !0) })
        ]
      },
      a
    );
  }) });
}
function So(t) {
  const [e, n] = v(t.custom);
  H(() => n(t.custom), [t.custom]);
  const a = t.value === "custom";
  return /* @__PURE__ */ o(U, { children: [
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
      cd.map((i) => /* @__PURE__ */ o(
        "button",
        {
          title: d("lock.color." + i),
          class: "lock-color" + (t.value === i ? " on" : "") + (i === "accent" ? " accent-bg" : "") + (i === "contrast" ? " lock-color-contrast" : ""),
          style: i === "accent" || i === "contrast" ? void 0 : { background: Ma[i] },
          onClick: () => t.onPick(i),
          children: i === "contrast" ? /* @__PURE__ */ o("span", { children: "A" }) : null
        },
        i
      )),
      /* @__PURE__ */ o(
        "label",
        {
          class: "lock-color lock-color-custom" + (a ? " on" : ""),
          title: d("lock.color.custom"),
          style: a && rt.test(t.custom) ? { background: t.custom } : void 0,
          onClick: () => {
            a || t.onPick("custom");
          },
          children: [
            /* @__PURE__ */ o("input", { type: "color", value: rt.test(t.custom) ? t.custom : "#ffb86b", onInput: (i) => t.onCustom(i.currentTarget.value) }),
            /* @__PURE__ */ o("span", { children: "#" })
          ]
        }
      )
    ] }),
    a && /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.color.custom") }),
      /* @__PURE__ */ o(
        "input",
        {
          class: "hex-input" + (rt.test(e) ? "" : " invalid"),
          value: e,
          maxLength: 7,
          placeholder: "#ffb86b",
          onInput: (i) => {
            let s = i.currentTarget.value.trim();
            s && s[0] !== "#" && (s = "#" + s), n(s), rt.test(s) && t.onCustom(s.toLowerCase());
          }
        }
      )
    ] })
  ] });
}
const sd = ["thin", "light", "regular", "bold"], cd = ["contrast", "white", "accent", "warm", "mint", "sky", "rose"], rd = ["xs", "s", "m", "l", "xl"], ld = ["clock", "top", "bottom"], dd = ["auto", "above", "below"], fd = ["auto", "corner", "center", "top"], hd = ["", "left", "center", "right"], md = ["", "top", "middle", "bottom"];
function Eo(t) {
  const e = t.grid[t.kind], n = (a) => {
    const i = { ...e, ...a };
    i.ha || delete i.ha, i.va || delete i.va, re(m1(t.orient, { ...t.grid, [t.kind]: i }));
  };
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.align_h") }),
      /* @__PURE__ */ o("div", { class: "seg", children: hd.map((a) => /* @__PURE__ */ o("button", { class: (e.ha || "") === a ? "active" : "", onClick: () => n({ ha: a || void 0 }), children: d("lock.align." + (a || "auto")) }, a)) })
    ] }),
    /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.align_v") }),
      /* @__PURE__ */ o("div", { class: "seg", children: md.map((a) => /* @__PURE__ */ o("button", { class: (e.va || "") === a ? "active" : "", onClick: () => n({ va: a || void 0 }), children: d("lock.align." + (a || "auto")) }, a)) })
    ] })
  ] });
}
const ud = ["auto", "text", "icons"];
function Ad(t) {
  const e = Sa(), n = Ia(), a = Na(e, n), i = (c, r) => {
    const f = t.widgets.map((A) => A.id), h = c + r, m = f[c];
    f[c] = f[h], f[h] = m, re({ order: f });
  }, s = (c, r) => {
    const f = e.hidden.filter((h) => h !== c);
    re({ hidden: r ? f : f.concat(c) });
  };
  return /* @__PURE__ */ o("div", { class: "lock-panel", onClick: (c) => c.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "lock-panel-head", children: [
      /* @__PURE__ */ o("b", { children: t.kind === "clock" ? d("lock.clock") : d("lock.widgets") }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(He, { size: 20 }) })
    ] }),
    t.kind === "clock" ? /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.look") }),
      /* @__PURE__ */ o("div", { class: "lock-fonts", children: sd.map((c) => /* @__PURE__ */ o("button", { class: "lock-font" + (e.font === c ? " on" : ""), style: { fontWeight: za[c] }, onClick: () => re({ font: c }), children: "12" }, c)) }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.size") }),
        /* @__PURE__ */ o("div", { class: "seg", children: rd.map((c) => /* @__PURE__ */ o("button", { class: e.size === c ? "active" : "", onClick: () => re({ size: c }), children: d("lock.size." + c) }, c)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.color") }),
      /* @__PURE__ */ o(
        So,
        {
          value: e.color,
          custom: e.customColor,
          onPick: (c) => re({ color: c }),
          onCustom: (c) => re({ color: "custom", customColor: c })
        }
      ),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.place") }),
      a ? /* @__PURE__ */ o(Eo, { kind: "clock", grid: a, orient: n }) : /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.layout") }),
        /* @__PURE__ */ o("select", { value: e.layout, onChange: (c) => re({ layout: c.currentTarget.value }), children: fd.map((c) => /* @__PURE__ */ o("option", { value: c, children: d("lock.layout." + c) }, c)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.show") }),
      /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.date, onChange: (c) => re({ date: c.currentTarget.checked }) }),
        d("lock.date")
      ] }),
      e.date && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.date_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: dd.map((c) => /* @__PURE__ */ o("button", { class: e.datePos === c ? "active" : "", onClick: () => re({ datePos: c }), children: d("lock.date_pos." + c) }, c)) })
      ] }),
      t.hasWeather && /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.weather, onChange: (c) => re({ weather: c.currentTarget.checked }) }),
        d("lock.weather")
      ] })
    ] }) : /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.color") }),
      /* @__PURE__ */ o(
        So,
        {
          value: e.widgetsColor,
          custom: e.widgetsCustomColor,
          same: !0,
          onPick: (c) => re({ widgetsColor: c }),
          onCustom: (c) => re({ widgetsColor: "custom", widgetsCustomColor: c })
        }
      ),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.place") }),
      a ? /* @__PURE__ */ o(Eo, { kind: "widgets", grid: a, orient: n }) : /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.widgets_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: ld.map((c) => /* @__PURE__ */ o("button", { class: e.widgetsPos === c ? "active" : "", onClick: () => re({ widgetsPos: c }), children: d("lock.widgets_pos." + c) }, c)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.look") }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.chip_style") }),
        /* @__PURE__ */ o("select", { value: e.chipStyle, onChange: (c) => re({ chipStyle: c.currentTarget.value }), children: ud.map((c) => /* @__PURE__ */ o("option", { value: c, children: d("lock.chip_style." + c) }, c)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.which") }),
      !t.widgets.length && /* @__PURE__ */ o("p", { class: "hint", children: d("lock.no_widgets") }),
      t.widgets.map((c, r) => /* @__PURE__ */ o("div", { class: "lock-widget", children: [
        /* @__PURE__ */ o("label", { class: "check", children: [
          /* @__PURE__ */ o("input", { type: "checkbox", checked: e.hidden.indexOf(c.id) === -1, onChange: (f) => s(c.id, f.currentTarget.checked) }),
          /* @__PURE__ */ o(ke, { name: c.icon, size: 16 }),
          /* @__PURE__ */ o("span", { children: c.title || gt(c.type) })
        ] }),
        /* @__PURE__ */ o("button", { class: "icon-btn", disabled: r === 0, onClick: () => i(r, -1), children: /* @__PURE__ */ o(ti, { size: 18 }) }),
        /* @__PURE__ */ o("button", { class: "icon-btn", disabled: r === t.widgets.length - 1, onClick: () => i(r, 1), children: /* @__PURE__ */ o(Ja, { size: 18 }) })
      ] }, c.id))
    ] })
  ] });
}
function j1(t) {
  const [e, n] = v({ w: 0, h: 0 });
  return kn(() => {
    const a = t.current;
    if (!a) return;
    const i = () => {
      const c = a.clientWidth, r = a.clientHeight;
      n((f) => f.w === c && f.h === r ? f : { w: c, h: r });
    };
    i();
    const s = window.ResizeObserver;
    if (s) {
      const c = new s(i);
      return c.observe(a), () => c.disconnect();
    }
    return window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, []), e;
}
const je = 12, Ht = 16, pd = 700, Ft = 6, gd = 350, bd = 44, xd = 84;
function Io(t) {
  const e = "touches" in t ? t.touches[0] || t.changedTouches[0] : t;
  return { x: e.clientX, y: e.clientY };
}
function yd({ editing: t, paused: e, onCamera: n, onEdit: a }) {
  const i = ae(), s = ot(), c = ee(null), r = j1(c), [f, h] = v(null), m = ee(null), A = s.state.layout.cards, l = r.w - Ht * 2, u = r.h - Ht * 2, p = r.w > 0 && l < pd, g = p ? et : Ze, y = p ? Bs(A) : A, w = p ? A.filter((N) => N.m && N.m.hide) : [], k = (l - je * (g - 1)) / g, x = k + je, C = Math.max(1, Math.floor((u + je) / x)), E = Math.max(0, (u - (C * x - je)) / 2), M = (N) => ({ left: N.x * x, top: N.y * x, width: N.w * x - je, height: N.h * x - je }), b = (N, W, D) => {
    if (!t || "button" in N && N.button !== 0) return;
    N.stopPropagation();
    const X = "touches" in N && D === "move", le = Io(N), V = { id: W.id, mode: D, x0: le.x, y0: le.y, orig: W, dx: 0, dy: 0, active: D === "resize", preview: y };
    m.current = V;
    let _ = !X, j = 0;
    X ? j = window.setTimeout(() => {
      const oe = m.current;
      if (!oe) return;
      _ = !0;
      const ie = { ...oe, active: !0 };
      m.current = ie, h(ie);
      try {
        navigator.vibrate && navigator.vibrate(15);
      } catch {
      }
    }, gd) : h(V);
    const Q = (oe) => {
      const ie = m.current;
      if (!ie) return;
      const he = Io(oe), me = he.x - ie.x0, we = he.y - ie.y0;
      if (!_) {
        (Math.abs(me) > Ft || Math.abs(we) > Ft) && J();
        return;
      }
      const ze = ie.active || Math.abs(me) > Ft || Math.abs(we) > Ft;
      if (!ze) return;
      oe.cancelable && oe.preventDefault();
      const fe = ie.orig, Me = bt(ie.mode === "move" ? { ...fe, x: fe.x + me / x, y: fe.y + we / x } : { ...fe, w: fe.w + me / x, h: fe.h + we / x }, g), _e = { ...ie, dx: me, dy: we, active: ze, preview: qe(y, Me) };
      m.current = _e, h(_e);
    }, J = () => {
      clearTimeout(j);
      const oe = m.current;
      m.current = null, h(null), window.removeEventListener("mousemove", Q), window.removeEventListener("mouseup", J), document.removeEventListener("touchmove", Q, { passive: !1 }), document.removeEventListener("touchend", J), document.removeEventListener("touchcancel", J), oe && oe.active && I(oe.preview);
    };
    window.addEventListener("mousemove", Q), window.addEventListener("mouseup", J), document.addEventListener("touchmove", Q, { passive: !1 }), document.addEventListener("touchend", J), document.addEventListener("touchcancel", J);
  }, I = (N) => s.saveLayout({ ...s.state.layout, cards: p ? Dn(A, N) : N }), P = f && f.active ? f.preview : y, B = (N) => {
    if (!p) {
      s.saveLayout({ ...s.state.layout, cards: qe(A.filter((O) => O.id !== N.id)) });
      return;
    }
    const W = y.filter((O) => O.id !== N.id), D = Dn(A, qe(W)).map((O) => O.id === N.id ? { ...O, m: { x: 0, y: 0, w: et, h: 3, hide: !0 } } : O);
    s.saveLayout({ ...s.state.layout, cards: D });
  }, T = (N) => {
    const D = Dn(A, y).map((O) => O.id === N.id ? { ...O, m: { x: 0, y: c1(y), w: et, h: 3 } } : O);
    s.saveLayout({ ...s.state.layout, cards: D });
  }, R = c1(P), Z = t ? Math.max(C, R) : R, se = Z <= C ? E : 0;
  return /* @__PURE__ */ o("main", { class: "grid" + (t ? " editing" : "") + (f && f.active ? " dragging-card" : "") + (p ? " narrow" : ""), ref: c, children: [
    t && p && /* @__PURE__ */ o("div", { class: "grid-note", children: [
      /* @__PURE__ */ o("span", { children: d("grid.narrow_note") }),
      w.length > 0 && /* @__PURE__ */ o("div", { class: "hidden-cards", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: [
          /* @__PURE__ */ o(bi, { size: 14 }),
          d("grid.hidden_on_phone")
        ] }),
        w.map((N) => /* @__PURE__ */ o("button", { class: "chip", onClick: () => T(N), children: [
          /* @__PURE__ */ o($e, { size: 14 }),
          /* @__PURE__ */ o("span", { children: F1(i, N) })
        ] }, N.id))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "grid-inner", style: { height: Math.max(0, Z * x - je), margin: Ht + se + "px " + Ht + "px" }, children: [
      t && r.w > 0 && /* @__PURE__ */ o(vd, { rows: Z, cols: g, cell: k, step: x }),
      r.w > 0 && P.map((N) => {
        const W = !!f && f.active && f.id === N.id;
        let D = M(N);
        if (W && f) {
          const O = M(f.orig);
          D = f.mode === "move" ? { ...O, left: O.left + f.dx, top: O.top + f.dy } : { ...O, width: Math.max(k * 2, O.width + f.dx), height: Math.max(k * 2, O.height + f.dy) };
        }
        return /* @__PURE__ */ o("div", { children: [
          W && /* @__PURE__ */ o("div", { class: "drop-slot", style: M(N) }),
          /* @__PURE__ */ o(
            kd,
            {
              card: N,
              style: D,
              editing: t,
              dragged: W,
              onCamera: n,
              onEdit: a,
              onRemove: B,
              paused: e,
              narrow: p,
              onStart: b,
              ha: i
            }
          )
        ] }, N.id);
      })
    ] })
  ] });
}
function vd({ rows: t, cols: e, cell: n, step: a }) {
  const i = [];
  for (let s = 0; s < t; s++)
    for (let c = 0; c < e; c++)
      i.push(/* @__PURE__ */ o("div", { class: "grid-dot", style: { left: c * a, top: s * a, width: n, height: n } }, s + ":" + c));
  return /* @__PURE__ */ o("div", { class: "grid-dots", children: i });
}
function kd({ card: t, style: e, editing: n, dragged: a, ha: i, onCamera: s, onEdit: c, onRemove: r, paused: f, narrow: h, onStart: m }) {
  const A = t.color ? " tint-" + t.color : "";
  return /* @__PURE__ */ o(
    "div",
    {
      class: "cell" + A + (a ? " dragged" : ""),
      style: e,
      onMouseDown: m ? (l) => m(l, t, "move") : void 0,
      onTouchStart: m ? (l) => m(l, t, "move") : void 0,
      children: [
        /* @__PURE__ */ o(ed, { title: F1(i, t), icon: t.icon, aside: !n && /* @__PURE__ */ o(U2, { card: t }), class: "card-" + t.type, children: /* @__PURE__ */ o("div", { class: "panel-body", children: /* @__PURE__ */ o(V2, { card: t, paused: f, onCamera: s, size: { w: e.width - bd, h: e.height - xd } }) }) }),
        n && /* @__PURE__ */ o(U, { children: [
          /* @__PURE__ */ o("button", { class: "badge-btn badge-del", onMouseDown: jt, onTouchStart: jt, onClick: () => r(t), title: d(h ? "grid.hide_on_phone" : "common.delete"), children: h ? /* @__PURE__ */ o(bi, { size: 14 }) : /* @__PURE__ */ o(He, { size: 16 }) }),
          /* @__PURE__ */ o("button", { class: "badge-btn badge-edit", onMouseDown: jt, onTouchStart: jt, onClick: () => c(t), title: d("common.edit"), children: /* @__PURE__ */ o(Gi, { size: 14 }) }),
          m && /* @__PURE__ */ o(
            "div",
            {
              class: "resize-handle",
              onMouseDown: (l) => m(l, t, "resize"),
              onTouchStart: (l) => m(l, t, "resize")
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
function jt(t) {
  t.stopPropagation();
}
const y1 = "photoframe.kiosk", Jt = [];
function v1() {
  return y1 + ":" + (location.pathname.split("/")[1] || "lovelace");
}
function $2() {
  try {
    const t = localStorage.getItem(y1);
    return t !== null && (localStorage.setItem(v1(), t), localStorage.removeItem(y1)), localStorage.getItem(v1()) || "";
  } catch {
    return "";
  }
}
function wd(t) {
  try {
    localStorage.setItem(v1(), t);
  } catch {
  }
  Jt.forEach((e) => e());
}
function _d(t) {
  return Jt.push(t), () => {
    Jt.splice(Jt.indexOf(t), 1);
  };
}
function zd(t) {
  const e = new URLSearchParams(location.search);
  if (e.has("kiosk")) return e.get("kiosk") !== "0" && e.get("kiosk") !== "false";
  const n = $2();
  return n ? n === "on" : t;
}
function ct(t) {
  return t && t.shadowRoot ? t.shadowRoot : null;
}
const No = "photoframe-kiosk";
let mt = !1;
const Xt = [];
function Md(t) {
  return Xt.push(t), () => {
    Xt.splice(Xt.indexOf(t), 1);
  };
}
function Do(t) {
  t !== mt && (mt = t, Xt.forEach((e) => e()));
}
function Un(t, e, n) {
  if (!t || t.getElementById(No)) return;
  const a = document.createElement("style");
  a.id = No, a.textContent = e, t.appendChild(a), n.push(() => a.remove());
}
function Cd() {
  const [t, e] = v(mt);
  return H(() => {
    const n = Md(() => e(mt));
    return e(mt), n;
  }, []), t;
}
function Ld() {
  history.pushState(null, "", "/"), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function Sd() {
  const t = ct(document.querySelector("home-assistant"))?.querySelector("home-assistant-main"), e = ct(t);
  if (!e) return null;
  const n = e.querySelector("ha-panel-lovelace"), a = ct(n)?.querySelector("hui-root"), i = ct(a);
  if (!a || !i) return null;
  const s = [], c = (h, m, A) => {
    const l = h.style.getPropertyValue(m);
    h.style.setProperty(m, A), s.push(() => l ? h.style.setProperty(m, l) : h.style.removeProperty(m));
  }, r = e.querySelector("ha-drawer");
  [t, r].forEach((h) => {
    h && (c(h, "--ha-sidebar-width", "0px"), c(h, "--mdc-drawer-width", "0px"));
  }), Un(e, ":host{--ha-sidebar-width:0px!important;--mdc-drawer-width:0px!important}ha-sidebar{display:none!important}", s), Un(ct(r), ".sidebar-shell,aside,.mdc-drawer{display:none!important;width:0!important}.app-content,.mdc-drawer-app-content{margin-left:0!important;margin-right:0!important;margin-inline-start:0!important;padding-left:0!important;padding-inline-start:0!important;width:100%!important}", s);
  const f = e.querySelector("ha-sidebar");
  if (f) {
    const h = f.style.display;
    f.style.display = "none", s.push(() => {
      f.style.display = h;
    });
  }
  return c(a, "--header-height", "0px"), Un(i, ".header,app-header,.toolbar{display:none!important}#view{padding-top:0!important;min-height:100vh}", s), Do(!0), () => {
    s.splice(0).reverse().forEach((h) => h()), Do(!1);
  };
}
const Bo = (t) => d("status." + t);
function Ed() {
  const t = N2();
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o("span", { class: "bar-clock", children: D2(t) }),
    /* @__PURE__ */ o("span", { class: "bar-date", children: B2(t) })
  ] });
}
function Id(t) {
  const { active: e, screen: n, screens: a } = ne.state, i = a[e] || [], [s, c] = v("");
  return H(() => c(""), [n, t.editing]), i.length < 2 && !t.editing ? null : /* @__PURE__ */ o("div", { class: "screen-tabs", children: [
    i.map((r, f) => t.editing && r.id === n ? /* @__PURE__ */ o("span", { class: "screen-tab on editing", children: [
      f > 0 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => ne.moveScreen(r.id, -1), children: /* @__PURE__ */ o($a, { size: 14 }) }),
      /* @__PURE__ */ o(
        "input",
        {
          value: r.name,
          placeholder: Yt(r, f),
          size: Math.max(6, (r.name || Yt(r, f)).length),
          onChange: (h) => ne.renameScreen(r.id, h.currentTarget.value.trim())
        }
      ),
      f < i.length - 1 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => ne.moveScreen(r.id, 1), children: /* @__PURE__ */ o(T1, { size: 14 }) }),
      i.length > 1 && /* @__PURE__ */ o(
        "button",
        {
          class: "screen-del" + (s === r.id ? " sure" : ""),
          title: d("screen.delete"),
          onClick: () => s === r.id || !r.cards.length ? ne.removeScreen(r.id) : c(r.id),
          children: s === r.id ? /* @__PURE__ */ o("span", { children: d("screen.delete_sure") }) : /* @__PURE__ */ o(_t, { size: 14 })
        }
      )
    ] }, r.id) : /* @__PURE__ */ o("button", { class: "screen-tab" + (r.id === n ? " on" : ""), onClick: () => ne.setActive(e, r.id), children: Yt(r, f) }, r.id)),
    t.editing && /* @__PURE__ */ o("button", { class: "screen-tab add", onClick: () => ne.addScreen(""), children: [
      /* @__PURE__ */ o($e, { size: 14 }),
      /* @__PURE__ */ o("span", { children: d("screen.add") })
    ] })
  ] });
}
function Nd(t, e) {
  const n = ee(null), a = (s) => "touches" in s ? s.touches[0] || s.changedTouches[0] : s;
  return {
    onTouchStart: (s) => {
      if (t) {
        const c = a(s);
        n.current = { x: c.clientX, y: c.clientY };
      }
    },
    onMouseDown: (s) => {
      t && (n.current = { x: s.clientX, y: s.clientY });
    },
    onTouchEnd: (s) => i(a(s)),
    onMouseUp: (s) => i(s)
  };
  function i(s) {
    const c = n.current;
    if (n.current = null, !c) return;
    const r = s.clientX - c.x, f = s.clientY - c.y;
    Math.abs(r) > 90 && Math.abs(r) > Math.abs(f) * 2 && e(r < 0 ? 1 : -1);
  }
}
function Dd(t) {
  const e = ae(), n = t.homes.length > 1, a = Cd(), i = t.homes.reduce((p, g) => p + (ne.state.screens[g.id] || []).length, 0), s = Nd(i > 1 && !t.editing, t.onStep), c = t.homes.filter((p) => p.id === t.active)[0];
  H(() => {
    !t.visible && t.editing && t.onEditing(!1);
  }, [t.visible]);
  const r = j1(t.innerRef), f = r.w > 0 && r.w < 760, [h, m] = v(!1);
  H(() => {
    (!t.visible || !f) && m(!1);
  }, [t.visible, f]), H(() => {
    if (!h) return;
    const p = () => m(!1), g = window.setTimeout(() => document.addEventListener("click", p), 0);
    return () => {
      clearTimeout(g), document.removeEventListener("click", p);
    };
  }, [h]);
  const A = !ne.card || ne.card.canEdit, l = Y2(t.visible), u = /* @__PURE__ */ o(U, { children: [
    A && /* @__PURE__ */ o("button", { class: "round", onClick: () => t.onEditing(!0), title: d("controls.customize"), children: /* @__PURE__ */ o(Gi, { size: 18 }) }),
    /* @__PURE__ */ o("button", { class: "round", onClick: t.onSettings, title: d("controls.settings"), children: /* @__PURE__ */ o(lr, { size: 20 }) }),
    /* @__PURE__ */ o("button", { class: "round accent", onClick: t.onPhotos, title: d("controls.to_photos"), children: /* @__PURE__ */ o(Ni, { size: 20 }) })
  ] });
  return /* @__PURE__ */ o("div", { ref: t.innerRef, class: "controls" + (t.visible ? " visible" : ""), children: l && /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o("header", { class: "bar" + (f ? " bar-narrow" : "") + (h ? " menu-open" : "") + (t.editing ? " bar-editing" : ""), children: [
      /* @__PURE__ */ o("div", { class: "bar-time" + (a ? " clock-link" : ""), onClick: a ? Ld : void 0, children: /* @__PURE__ */ o(Ed, {}) }),
      n && /* @__PURE__ */ o("button", { class: "home-switch", onClick: () => t.onSwitchHome(1), title: d("controls.next_home"), children: [
        /* @__PURE__ */ o("span", { class: "home-name", children: c ? c.name : "" }),
        /* @__PURE__ */ o("span", { class: "home-dots", children: t.homes.map((p) => /* @__PURE__ */ o("i", { class: p.id === t.active ? "on" : "" }, p.id)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "bar-actions", children: t.editing ? /* @__PURE__ */ o(U, { children: [
        /* @__PURE__ */ o("button", { class: "round", onClick: t.onAddCard, title: d("controls.add_card"), children: /* @__PURE__ */ o($e, { size: 20 }) }),
        /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: () => t.onEditing(!1), children: [
          /* @__PURE__ */ o(Tc, { size: 18 }),
          /* @__PURE__ */ o("span", { children: d("common.done") })
        ] })
      ] }) : f ? /* @__PURE__ */ o("div", { class: "burger", children: [
        /* @__PURE__ */ o("div", { class: "burger-items", children: u }),
        /* @__PURE__ */ o("button", { class: "round burger-btn conn-" + e.status, onClick: () => m(!h), title: Bo(e.status), children: [
          h ? /* @__PURE__ */ o(He, { size: 20 }) : /* @__PURE__ */ o(nr, { size: 20 }),
          /* @__PURE__ */ o("i", { class: "burger-dot" })
        ] })
      ] }) : /* @__PURE__ */ o(U, { children: [
        /* @__PURE__ */ o("span", { class: "conn conn-" + e.status, children: [
          /* @__PURE__ */ o("i", {}),
          Bo(e.status)
        ] }),
        u
      ] }) })
    ] }),
    /* @__PURE__ */ o(Id, { editing: t.editing }),
    /* @__PURE__ */ o("div", { class: "home-pane" + (t.slide ? " slide-" + t.slide : ""), ...s, children: /* @__PURE__ */ o(yd, { editing: t.editing, paused: t.paused, onCamera: t.onCamera, onEdit: t.onEditCard }) }, t.active + "/" + ne.state.screen)
  ] }) });
}
function Bd(t) {
  const e = { name: "", path: "", count: 0, total: 0, children: [] }, n = { "": e };
  return t.forEach((a) => {
    if (!a.path) {
      e.count = a.count, e.total = a.total;
      return;
    }
    const i = a.path.split("/").filter(Boolean);
    let s = e, c = "";
    i.forEach((r, f) => {
      c = c ? c + "/" + r : r;
      let h = n[c];
      h || (h = { name: r, path: c, count: 0, total: 0, children: [] }, n[c] = h, s.children.push(h)), f === i.length - 1 && (h.count = a.count, h.total = a.total), s = h;
    });
  }), e;
}
function Td(t) {
  const [e, n] = v(null), [a, i] = v(""), [s, c] = v(ne.card && ne.card.album && ne.card.album !== "all" ? ne.card.album : ""), [r, f] = v({ "": !0 });
  H(() => {
    const A = ne.card;
    if (!A) {
      n({ name: "", path: "", count: 0, total: 0, children: [] });
      return;
    }
    A.folderTree().then((l) => {
      n(Bd(l));
      const u = { "": !0 };
      let p = "";
      String(A.album || "").split("/").filter(Boolean).forEach((g) => {
        p = p ? p + "/" + g : g, u[p] = !0;
      }), f(u);
    }, (l) => {
      n({ name: "", path: "", count: 0, total: 0, children: [] }), i(l.message || String(l));
    });
  }, []);
  const h = (A) => f({ ...r, [A]: !r[A] }), m = (A, l) => {
    const u = A.children.length > 0, p = A.path === "" || !!r[A.path];
    return /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("div", { class: "folder-row", style: { paddingLeft: l * 16 + "px" }, children: [
        u ? /* @__PURE__ */ o("button", { class: "folder-toggle", onClick: () => h(A.path), "aria-label": A.name || d("photos.folder_all"), children: p ? /* @__PURE__ */ o(Ja, { size: 14 }) : /* @__PURE__ */ o(T1, { size: 14 }) }) : /* @__PURE__ */ o("span", { class: "folder-toggle" }),
        /* @__PURE__ */ o("button", { class: "folder-name" + (s === A.path ? " active" : ""), onClick: () => c(A.path), children: [
          u && p ? /* @__PURE__ */ o(Wc, { size: 16 }) : /* @__PURE__ */ o(zi, { size: 16 }),
          /* @__PURE__ */ o("span", { children: A.path ? A.name : d("photos.folder_all") }),
          /* @__PURE__ */ o("em", { children: d("photos.folder_count", { n: A.total }) })
        ] })
      ] }),
      u && p && A.children.map((g) => m(g, l + 1))
    ] }, A.path || "/");
  };
  return /* @__PURE__ */ o(
    Oe,
    {
      title: d("photos.folder_title"),
      onClose: t.onClose,
      wide: !0,
      footer: /* @__PURE__ */ o(U, { children: [
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: t.onClose, children: d("common.cancel") }),
        /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: () => t.onPick(s || "all"), children: d("common.done") })
      ] }),
      children: [
        /* @__PURE__ */ o("p", { class: "hint", children: d("photos.folder_hint") }),
        !e && /* @__PURE__ */ o("div", { class: "folder-loading", children: [
          /* @__PURE__ */ o("i", { class: "cam-spinner" }),
          /* @__PURE__ */ o("span", { children: d("photos.folder_loading") })
        ] }),
        a && /* @__PURE__ */ o("p", { class: "hint c-red", children: a }),
        e && /* @__PURE__ */ o("div", { class: "folder-tree", children: m(e, 0) }),
        e && !a && !e.children.length && /* @__PURE__ */ o("p", { class: "hint muted", children: d("photos.folder_empty") })
      ]
    }
  );
}
function Oe(t) {
  return /* @__PURE__ */ o("div", { class: "modal", onClick: t.onClose, children: /* @__PURE__ */ o("div", { class: "modal-box" + (t.wide ? " modal-wide" : "") + (t.footer ? " has-foot" : ""), onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "modal-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(He, { size: 24 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-body", children: t.children }),
    t.footer && /* @__PURE__ */ o("div", { class: "modal-foot", children: t.footer })
  ] }) });
}
function Pd(t) {
  const e = ae(), n = t.feeds.length, a = Math.min(Math.max(0, t.index), Math.max(0, n - 1)), i = t.feeds[a], s = i ? i.entity : "", c = i ? e.cameraStreamUrl(i.entity) : "", r = P2(s), f = Q2((h) => {
    n > 1 && t.onIndex(T2(a, h, n));
  });
  return /* @__PURE__ */ o(Oe, { title: i ? i.name : d("camera.live_title"), onClose: t.onClose, wide: !0, children: [
    /* @__PURE__ */ o("div", { class: "cam-full cam-swipe", ...f, children: [
      /* @__PURE__ */ o(O2, { src: c || Mt, ...r.img }),
      (!c || r.state === "error") && /* @__PURE__ */ o("div", { class: "cam-empty", children: /* @__PURE__ */ o("span", { children: d("camera.no_stream") }) }),
      r.state === "loading" && /* @__PURE__ */ o("div", { class: "cam-loading", children: [
        /* @__PURE__ */ o("i", { class: "cam-spinner" }),
        /* @__PURE__ */ o("span", { children: d("camera.loading") })
      ] })
    ] }),
    n > 1 && /* @__PURE__ */ o("div", { class: "cam-dots", children: t.feeds.map((h, m) => /* @__PURE__ */ o(
      "button",
      {
        class: m === a ? "active" : "",
        title: h.name,
        "aria-label": h.name,
        onClick: () => t.onIndex(m)
      },
      h.entity + m
    )) })
  ] });
}
const Od = [5e3, 1e4, 3e4, 6e4], Hd = [20, 45, 120, 0];
function Fd() {
  const t = mn(), e = ne.state.screens[t] || [], n = un();
  return t + "/" + (e.some((a) => a.id === n) ? n : e[0] ? e[0].id : "");
}
function jd() {
  const t = ot(), [e, n] = v(!1), [a, i] = v(""), s = t.haLink;
  if (s !== "missing" && s !== "error") return null;
  const c = () => {
    n(!0), i(""), t.createHaDashboard().then(() => n(!1), (r) => {
      n(!1), i(r.message || String(r));
    });
  };
  return /* @__PURE__ */ o("div", { class: "ha-storage", children: [
    /* @__PURE__ */ o("p", { class: "hint", children: d("storage." + s) }),
    s === "missing" && (t.haClient && t.haClient.isAdmin ? /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: e, onClick: c, children: /* @__PURE__ */ o("span", { children: d(e ? "common.loading" : "storage.create") }) }) : /* @__PURE__ */ o("p", { class: "hint small", children: d("storage.ask_admin") })),
    a && /* @__PURE__ */ o("div", { class: "c-red small", children: a })
  ] });
}
function Rd() {
  const t = ot(), e = t.migration, [n, a] = v(""), [i, s] = v(""), c = () => {
    a("0 / " + e.photos), s(""), t.migratePhotos((r, f) => a(r + " / " + f)).then(
      () => a(""),
      (r) => {
        a(""), s(r.message || String(r));
      }
    );
  };
  return /* @__PURE__ */ o("div", { class: "migration", children: [
    /* @__PURE__ */ o("p", { children: d("migration.text") }),
    /* @__PURE__ */ o("div", { class: "row-btns", children: [
      e.photos > 0 && /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: c, children: /* @__PURE__ */ o("span", { children: n ? d("photos.uploading") + " " + n : d("migration.photos", { n: e.photos }) }) }),
      e.screens && /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: () => t.migrateScreens(), children: /* @__PURE__ */ o("span", { children: d("migration.screens") }) }),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: () => t.dismissMigration(), children: /* @__PURE__ */ o("span", { children: d("migration.skip") }) })
    ] }),
    i && /* @__PURE__ */ o("div", { class: "c-red small", children: i })
  ] });
}
function qd(t) {
  const e = ot(), { settings: n, photos: a } = e.state, i = !!e.card && !e.card.standalone, s = !!e.card || !!hn(), [c, r] = v("photos"), f = s ? c : "ha", [h, m] = v(n), [A, l] = v(!1), [u, p] = v(""), [g, y] = v(""), w = (z) => m({ ...h, ...z }), [k, x] = v(!1), [C, E] = v(""), [M, b] = v(""), I = (z, q) => {
    const xe = Array.prototype.slice.call(z || []).filter((Ce) => /^image\//.test(Ce.type) || /\.(heic|heif)$/i.test(Ce.name));
    q && (q.value = ""), xe.length && (l(!0), E(""), b(""), e.addPhotos(xe, (Ce, L) => b(L > 1 ? Ce + " / " + L : ""), _ ? Q : void 0).then(
      () => l(!1),
      (Ce) => {
        l(!1), E(Ce.message || String(Ce));
      }
    ));
  }, [P, B] = v(da()), [T, R] = v($2()), [Z, se] = v(ia()), [N, W] = v(q2()), [D, O] = v(an()), [X, le] = v(hc()), V = hn(), _ = !!e.card && e.card.integration, j = e.card && e.card.config.albums || [], [Q, J] = v(e.card && e.card.album && e.card.album !== "all" ? e.card.album : ""), [oe, ie] = v(!1), [he, me] = v("");
  H(() => {
    e.card && e.card.mediaBrowserUrl(Q).then(me, () => me(""));
  }, [Q, !!e.card]);
  const [we, ze] = v(yt()), [fe, Me] = v(e.state.homes), _e = JSON.stringify(fe) !== JSON.stringify(e.state.homes), Et = (z, q) => Me(fe.map((xe) => xe.id === z ? { ...xe, ...q } : xe)), It = () => {
    e.saveSettings(h), _e && e.saveHomes(fe), t.onClose();
  }, Nt = () => {
    try {
      const z = JSON.parse(u);
      if (!z || !Array.isArray(z.cards)) throw new Error(d("settings.no_cards_field"));
      e.saveLayout(z), y(""), p("");
    } catch (z) {
      y(d("settings.import_failed", { error: z.message }));
    }
  };
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o(
      Oe,
      {
        title: /* @__PURE__ */ o("span", { class: "modal-title", children: [
          /* @__PURE__ */ o(Yc, { size: 20, class: "accent-text" }),
          /* @__PURE__ */ o("span", { children: d("settings.title") })
        ] }),
        onClose: t.onClose,
        footer: /* @__PURE__ */ o(U, { children: [
          f === "photos" && !e.card && a.length > 0 ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: () => e.clearPhotos(), children: [
            /* @__PURE__ */ o(_t, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("photos.delete_all") })
          ] }) : /* @__PURE__ */ o("span", {}),
          /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: It, children: d("common.done") })
        ] }),
        children: [
          s && /* @__PURE__ */ o("div", { class: "tabs", children: [
            /* @__PURE__ */ o("button", { class: f === "photos" ? "active" : "", onClick: () => r("photos"), children: d("settings.tab.photos") }),
            /* @__PURE__ */ o("button", { class: f === "homes" ? "active" : "", onClick: () => r("homes"), children: d("settings.tab.homes") }),
            /* @__PURE__ */ o("button", { class: f === "layout" ? "active" : "", onClick: () => r("layout"), children: d("settings.tab.layout") }),
            !i && /* @__PURE__ */ o("button", { class: f === "ha" ? "active" : "", onClick: () => r("ha"), children: "Home Assistant" })
          ] }),
          f === "photos" && /* @__PURE__ */ o("div", { children: [
            e.migration && /* @__PURE__ */ o(Rd, {}),
            /* @__PURE__ */ o(Yn, { title: d("settings.section.photos"), children: [
              /* @__PURE__ */ o("p", { class: "hint", children: e.card ? d("photos.card_hint", { folder: e.card.folder }) : d("photos.local_hint") }),
              /* @__PURE__ */ o(
                "label",
                {
                  class: "drop-zone" + (A ? " busy" : "") + (k ? " over" : ""),
                  onDragOver: (z) => {
                    z.preventDefault(), x(!0);
                  },
                  onDragLeave: () => x(!1),
                  onDrop: (z) => {
                    z.preventDefault(), x(!1), A || I(z.dataTransfer && z.dataTransfer.files);
                  },
                  children: [
                    /* @__PURE__ */ o(
                      "input",
                      {
                        type: "file",
                        multiple: !0,
                        accept: "image/*,.heic,.heif",
                        onChange: (z) => I(z.currentTarget.files, z.currentTarget),
                        disabled: A
                      }
                    ),
                    /* @__PURE__ */ o(Fc, { size: 40, class: "muted" }),
                    /* @__PURE__ */ o("p", { class: "drop-title", children: A ? d("photos.uploading") + (M ? " " + M : "") : d("photos.pick") }),
                    /* @__PURE__ */ o("p", { class: "hint small", children: d(_ ? "photos.formats_server" : "photos.formats") })
                  ]
                }
              ),
              (C || e.photoError) && /* @__PURE__ */ o("div", { className: "c-red small upload-error", children: C || e.photoError }),
              _ && j.length > 0 && /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("photos.album") }),
                /* @__PURE__ */ o("select", { value: Q, onChange: (z) => J(z.currentTarget.value), children: [
                  /* @__PURE__ */ o("option", { value: "", children: d("photos.album_root") }),
                  j.map((z) => /* @__PURE__ */ o("option", { value: z, children: z }, z))
                ] })
              ] }),
              _ && e.card && /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("photos.folder") }),
                /* @__PURE__ */ o("button", { class: "folder-choose", onClick: () => ie(!0), children: [
                  /* @__PURE__ */ o(zi, { size: 16 }),
                  /* @__PURE__ */ o("span", { children: e.card.album && e.card.album !== "all" ? e.card.album : d("photos.folder_all") })
                ] })
              ] }),
              e.card && /* @__PURE__ */ o("div", { className: "photos-count", children: [
                /* @__PURE__ */ o("span", { children: d("photos.count", { n: a.length }) }),
                he && /* @__PURE__ */ o("a", { href: he, target: "_blank", rel: "noopener", children: d("photos.open_media") })
              ] }),
              !e.card && a.length > 0 && /* @__PURE__ */ o("div", { className: "thumbs thumbs-small", children: a.map((z) => /* @__PURE__ */ o("div", { className: "thumb", style: { backgroundImage: "url(" + z.url + ")" }, children: /* @__PURE__ */ o("button", { class: "thumb-del", onClick: () => e.deletePhoto(z.id), children: /* @__PURE__ */ o(He, { size: 14 }) }) }, z.id)) })
            ] }),
            /* @__PURE__ */ o(Yn, { title: d("settings.section.slideshow"), children: [
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.slide_interval") }),
                /* @__PURE__ */ o("select", { value: h.slideIntervalMs, onChange: (z) => w({ slideIntervalMs: +z.currentTarget.value }), children: Od.map((z) => /* @__PURE__ */ o("option", { value: z, children: d("settings.interval." + z) }, z)) })
              ] }),
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.idle_return") }),
                /* @__PURE__ */ o("select", { value: h.idleSec, onChange: (z) => w({ idleSec: +z.currentTarget.value }), children: Hd.map((z) => /* @__PURE__ */ o("option", { value: z, children: d("settings.idle." + z) }, z)) })
              ] }),
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.fit") }),
                /* @__PURE__ */ o("select", { value: D, onChange: (z) => {
                  const q = z.currentTarget.value;
                  O(q), ys(q);
                }, children: [
                  /* @__PURE__ */ o("option", { value: "auto", children: d("settings.fit_auto") }),
                  /* @__PURE__ */ o("option", { value: "contain", children: d("settings.fit_contain") }),
                  /* @__PURE__ */ o("option", { value: "cover", children: d("settings.fit_cover") })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ o(Yn, { title: d("settings.section.device"), children: [
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.quality") }),
                /* @__PURE__ */ o("select", { value: Z, onChange: (z) => {
                  const q = z.currentTarget.value;
                  se(q), us(q);
                }, children: [
                  /* @__PURE__ */ o(
                    "option",
                    {
                      value: "auto",
                      children: d("settings.quality_auto", { mode: d(a1() === "lite" ? "settings.quality_lite" : "settings.quality_full") })
                    }
                  ),
                  /* @__PURE__ */ o("option", { value: "full", children: d("settings.quality_full") }),
                  /* @__PURE__ */ o("option", { value: "lite", children: d("settings.quality_lite") })
                ] })
              ] }),
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.cameras") }),
                /* @__PURE__ */ o("select", { value: N, onChange: (z) => {
                  const q = z.currentTarget.value;
                  W(q), P6(q);
                }, children: [
                  /* @__PURE__ */ o("option", { value: "auto", children: d("settings.cameras_auto", { mode: d(a1() === "lite" ? "settings.cameras_paused" : "settings.cameras_live") }) }),
                  /* @__PURE__ */ o("option", { value: "live", children: d("settings.cameras_live") }),
                  /* @__PURE__ */ o("option", { value: "paused", children: d("settings.cameras_paused") }),
                  /* @__PURE__ */ o("option", { value: "snapshot", children: d("settings.cameras_snapshot") })
                ] })
              ] }),
              X !== null && /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.autostart") }),
                /* @__PURE__ */ o("select", { value: X ? "on" : "off", onChange: (z) => {
                  const q = z.currentTarget.value === "on";
                  le(q), mc(q);
                }, children: [
                  /* @__PURE__ */ o("option", { value: "on", children: d("settings.autostart_on") }),
                  /* @__PURE__ */ o("option", { value: "off", children: d("settings.autostart_off") })
                ] })
              ] }),
              i && /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.kiosk") }),
                /* @__PURE__ */ o("select", { value: T, onChange: (z) => {
                  const q = z.currentTarget.value;
                  R(q), wd(q);
                }, children: [
                  /* @__PURE__ */ o("option", { value: "", children: d("settings.kiosk_auto") }),
                  /* @__PURE__ */ o("option", { value: "on", children: d("settings.kiosk_on") }),
                  /* @__PURE__ */ o("option", { value: "off", children: d("settings.kiosk_off") })
                ] })
              ] }),
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.language") }),
                /* @__PURE__ */ o("select", { value: P, onChange: (z) => {
                  B(z.currentTarget.value), Ls(z.currentTarget.value), zn();
                }, children: [
                  /* @__PURE__ */ o("option", { value: "", children: d("settings.language_auto") }),
                  Cs().map((z) => /* @__PURE__ */ o("option", { value: z.code, children: z.name }, z.code))
                ] })
              ] })
            ] })
          ] }),
          f === "ha" && i && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("p", { class: "hint", children: d("ha.card_hint") }) }),
          f === "ha" && !i && /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ o("div", { class: "auth", children: [
              /* @__PURE__ */ o("div", { class: "auth-title", children: d("ha.auth") }),
              /* @__PURE__ */ o("label", { class: "field", children: [
                /* @__PURE__ */ o("span", { children: d("ha.url") }),
                /* @__PURE__ */ o("input", { value: h.haUrl, placeholder: V ? V.hassUrl : location.protocol + "//" + location.host, onInput: (z) => w({ haUrl: z.currentTarget.value.trim() }) })
              ] }),
              V ? /* @__PURE__ */ o("div", { class: "auth-session", children: [
                /* @__PURE__ */ o("span", { children: d("ha.logged_in", { url: V.hassUrl }) }),
                !V.embedded && /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
                  Ys(), location.reload();
                }, children: [
                  /* @__PURE__ */ o(tr, { size: 14 }),
                  /* @__PURE__ */ o("span", { children: d("ha.logout") })
                ] })
              ] }) : /* @__PURE__ */ o("button", { class: "btn btn-ghost btn-login", onClick: () => {
                e.saveSettings(h), Js(h.haUrl);
              }, children: [
                /* @__PURE__ */ o(er, { size: 16 }),
                /* @__PURE__ */ o("span", { children: d("ha.login") })
              ] }),
              /* @__PURE__ */ o("p", { class: "hint", children: d("ha.local_hint") })
            ] }),
            /* @__PURE__ */ o(jd, {}),
            e.frameClient && /* @__PURE__ */ o("label", { class: "field", children: [
              /* @__PURE__ */ o("span", { children: d("frame.name") }),
              /* @__PURE__ */ o(
                "input",
                {
                  value: we,
                  placeholder: d("frame.name_placeholder"),
                  onInput: (z) => ze(z.currentTarget.value),
                  onChange: (z) => e.renameFrame(z.currentTarget.value.trim())
                }
              ),
              /* @__PURE__ */ o("small", { class: "option-hint", children: d("frame.hint") })
            ] })
          ] }),
          f === "homes" && /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ o("p", { class: "hint", children: d("homes.hint") + (e.card ? d("homes.card_hint") : "") }),
            /* @__PURE__ */ o("div", { class: "option", children: [
              /* @__PURE__ */ o("label", { children: d("screen.start") }),
              /* @__PURE__ */ o("select", { value: Fd(), onChange: (z) => {
                const q = z.currentTarget.value.split("/");
                e.setStart(q[0], q[1]);
              }, children: e.state.homes.map((z) => (e.state.screens[z.id] || []).map((q, xe) => /* @__PURE__ */ o("option", { value: z.id + "/" + q.id, children: (e.state.homes.length > 1 ? z.name + " · " : "") + Yt(q, xe) }, z.id + "/" + q.id))) })
            ] }),
            fe.map((z) => /* @__PURE__ */ o("div", { class: "home-row", children: /* @__PURE__ */ o("div", { class: "home-row-head", children: [
              /* @__PURE__ */ o("input", { class: "home-input", value: z.name, onInput: (q) => Et(z.id, { name: q.currentTarget.value }) }),
              z.id !== Ae && /* @__PURE__ */ o("button", { class: "icon-btn danger", title: d("homes.delete"), onClick: () => Me(fe.filter((q) => q.id !== z.id)), children: /* @__PURE__ */ o(_t, { size: 16 }) })
            ] }) }, z.id)),
            /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => Me(fe.concat({ id: "h" + Date.now().toString(36), name: d("homes.new_name") })), children: /* @__PURE__ */ o("span", { children: d("homes.add") }) })
          ] }),
          f === "layout" && /* @__PURE__ */ o("div", { children: [
            e.card && e.cardError && /* @__PURE__ */ o("div", { class: "c-red small", children: d("sync.save_failed", { error: e.cardError }) }),
            _ && /* @__PURE__ */ o(Qd, { client: e.card.client }),
            /* @__PURE__ */ o("div", { class: "field", children: [
              /* @__PURE__ */ o("span", { children: d("layout.title") }),
              /* @__PURE__ */ o("div", { class: "row-btns", children: [
                /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
                  p(JSON.stringify(e.state.layout, null, 2)), y("");
                }, children: [
                  /* @__PURE__ */ o(Rc, { size: 14 }),
                  /* @__PURE__ */ o("span", { children: d("layout.export") })
                ] }),
                /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => e.saveLayout(ua()), children: [
                  /* @__PURE__ */ o(rr, { size: 14 }),
                  /* @__PURE__ */ o("span", { children: d("layout.reset") })
                ] })
              ] }),
              /* @__PURE__ */ o("textarea", { class: "json", value: u, placeholder: d("layout.import_placeholder"), onInput: (z) => p(z.currentTarget.value) }),
              g && /* @__PURE__ */ o("div", { class: "c-red small", children: g }),
              /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !u, onClick: Nt, children: /* @__PURE__ */ o("span", { children: d("layout.import") }) })
            ] })
          ] })
        ]
      }
    ),
    oe && /* @__PURE__ */ o(
      Td,
      {
        onPick: (z) => {
          ie(!1), e.setAlbum(z).then(() => J(z === "all" ? "" : z), () => {
          });
        },
        onClose: () => ie(!1)
      }
    )
  ] });
}
function Qd(t) {
  const [e, n] = v(null), [a, i] = v(""), [s, c] = v("");
  if (H(() => {
    t.client.call({ type: "photoframe/frames" }).then(
      (f) => {
        const h = f.frames.filter((m) => m.frame_id !== St() && (!!m.lockscreen || Re(m.grid) || Re(m.grid_portrait)));
        n(h), h.length && i(h[0].frame_id);
      },
      () => n([])
    );
  }, [t.client]), !e) return null;
  const r = e.filter((f) => f.frame_id === a)[0];
  return /* @__PURE__ */ o("div", { class: "field", children: [
    /* @__PURE__ */ o("span", { children: d("layout.grid_title") }),
    e.length === 0 ? /* @__PURE__ */ o("p", { class: "hint small", children: d("layout.grid_none") }) : /* @__PURE__ */ o(U, { children: [
      /* @__PURE__ */ o("select", { value: a, onChange: (f) => {
        i(f.currentTarget.value), c("");
      }, children: e.map((f) => /* @__PURE__ */ o("option", { value: f.frame_id, children: (f.name || f.frame_id) + (f.online ? "" : " · " + d("layout.grid_offline")) }, f.frame_id)) }),
      /* @__PURE__ */ o("div", { class: "row-btns", children: [
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !r || !r.lockscreen, onClick: () => {
          re(B1(r.lockscreen)), c("all");
        }, children: /* @__PURE__ */ o("span", { children: d(s === "all" ? "layout.grid_done" : "layout.look_take") }) }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !r, onClick: () => {
          re({ grid: Re(r.grid), gridPortrait: Re(r.grid_portrait) }), c("grid");
        }, children: /* @__PURE__ */ o("span", { children: d(s === "grid" ? "layout.grid_done" : "layout.grid_take") }) })
      ] })
    ] })
  ] });
}
function Yn(t) {
  return /* @__PURE__ */ o("div", { class: "settings-section", children: [
    /* @__PURE__ */ o("div", { class: "section-title", children: t.title }),
    t.children
  ] });
}
function Wd(t) {
  const e = Object.keys(rn);
  return /* @__PURE__ */ o(Oe, { title: d("editor.new_card"), onClose: t.onClose, children: /* @__PURE__ */ o("div", { class: "type-list", children: e.map((n) => {
    const a = rn[n];
    return /* @__PURE__ */ o("button", { class: "type-row", onClick: () => t.onPick({
      // Новая карточка встаёт в конец сетки; settle при сохранении поднимет её на свободное место.
      id: Is(),
      type: n,
      title: "",
      icon: a.icon,
      x: 0,
      y: 999,
      w: n === "switches" ? 6 : 3,
      h: 3,
      items: []
    }), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(ke, { name: a.icon, size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: gt(n) }),
        /* @__PURE__ */ o("small", { children: ha(n) })
      ] }),
      /* @__PURE__ */ o($e, { size: 18 })
    ] }, n);
  }) }) });
}
function Vd(t) {
  const e = ae(), [n, a] = v(""), [i, s] = v(!1), [c, r] = v(t.cardType ? "devices" : "entities"), f = n.toLowerCase(), h = Object.keys(e.states).filter((l) => {
    if (t.exclude.indexOf(l) !== -1 || !i && !Ge(e, l) || !i && t.domains.indexOf(l.split(".")[0]) === -1 || !i && t.match && !t.match(e.states[l])) return !1;
    if (!f) return !0;
    const u = String(e.states[l].attributes.friendly_name || "").toLowerCase();
    return l.indexOf(f) !== -1 || u.indexOf(f) !== -1;
  }).sort().slice(0, 150), m = t.cardType, A = m ? Object.keys(e.devices).map((l) => e.devices[l]).map((l) => ({
    dev: l,
    fit: l.entities.filter((u) => e.registry[u] && e.registry[u].ec == null && Ge(e, u) && H1(m, e.states[u]))
  })).filter((l) => l.fit.length && (t.excludeDevices || []).indexOf(l.dev.id) === -1 && (!f || l.dev.name.toLowerCase().indexOf(f) !== -1)).sort((l, u) => l.dev.name.localeCompare(u.dev.name)) : [];
  return /* @__PURE__ */ o("div", { class: "picker", children: [
    m && /* @__PURE__ */ o("div", { class: "seg seg-wide picker-mode", children: [
      /* @__PURE__ */ o("button", { class: c === "devices" ? "active" : "", onClick: () => r("devices"), children: d("editor.devices") }),
      /* @__PURE__ */ o("button", { class: c === "entities" ? "active" : "", onClick: () => r("entities"), children: d("editor.entities") })
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-search", children: [
      /* @__PURE__ */ o(o2, { size: 16 }),
      /* @__PURE__ */ o("input", { placeholder: d(c === "devices" ? "editor.search_device" : "editor.search_entity"), value: n, onInput: (l) => a(l.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(He, { size: 18 }) })
    ] }),
    c === "entities" && /* @__PURE__ */ o("label", { class: "check", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: i, onChange: (l) => s(l.currentTarget.checked) }),
      " ",
      d("editor.show_all")
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-list", children: c === "devices" ? /* @__PURE__ */ o(U, { children: [
      A.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: Object.keys(e.devices).length ? d("editor.no_devices") : d("editor.loading_devices") }),
      A.map(({ dev: l, fit: u }) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPickDevice && t.onPickDevice(l.id, u[0]), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: l.name || u[0] }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: d("editor.count", { n: u.length }) }),
        /* @__PURE__ */ o("span", { class: "picker-id", children: u.slice(0, 4).map((p) => e.registry[p].en || e.states[p].attributes.friendly_name).join(" · ") })
      ] }, l.id))
    ] }) : /* @__PURE__ */ o(U, { children: [
      h.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: d("editor.nothing_found") }),
      h.map((l) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPick(l), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: e.states[l].attributes.friendly_name || l }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: e.states[l].state + (isNaN(parseFloat(e.states[l].state)) ? "" : sn(e, l)) }),
        /* @__PURE__ */ o("span", { class: "picker-id mono", children: l })
      ] }, l))
    ] }) })
  ] });
}
const Ud = ["cover", "width", "height"], Yd = [[2, 2], [3, 3], [4, 3], [6, 3], [3, 6], [6, 6], [12, 3]];
function Gd(t) {
  const e = ae(), [n, a] = v(t.card), [i, s] = v(null), [c, r] = v(null), f = rn[n.type], h = (l) => a({ ...n, ...l }), m = (l, u) => h({ items: n.items.map((p, g) => g === l ? { ...p, ...u } : p) }), A = (l, u) => {
    const p = l + u;
    if (p < 0 || p >= n.items.length) return;
    const g = n.items.slice();
    g[l] = n.items[p], g[p] = n.items[l], h({ items: g });
  };
  return /* @__PURE__ */ o(U, { children: [
    /* @__PURE__ */ o(
      Oe,
      {
        title: d("editor.card_title", { type: gt(n.type) }),
        onClose: t.onClose,
        footer: /* @__PURE__ */ o(U, { children: [
          t.onDelete ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: t.onDelete, children: [
            /* @__PURE__ */ o(_t, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("common.delete") })
          ] }) : /* @__PURE__ */ o("span", {}),
          /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: () => t.onSave(n), children: d("common.save") })
        ] }),
        children: [
          /* @__PURE__ */ o("label", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.name") }),
            /* @__PURE__ */ o("input", { value: n.title, placeholder: gt(n.type), onInput: (l) => h({ title: l.currentTarget.value }) })
          ] }),
          /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.size") }),
            /* @__PURE__ */ o("div", { class: "seg seg-wide", children: Yd.map(([l, u]) => /* @__PURE__ */ o("button", { class: n.w === l && n.h === u ? "active" : "", onClick: () => h({ w: l, h: u }), children: [
              l,
              "×",
              u
            ] }, l + "x" + u)) })
          ] }),
          /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.color") }),
            /* @__PURE__ */ o("div", { class: "swatches", children: [
              /* @__PURE__ */ o("button", { class: "swatch swatch-auto" + (n.color ? "" : " active"), onClick: () => h({ color: void 0 }), title: d("editor.color_auto"), children: "A" }),
              Object.keys(ft).map((l) => /* @__PURE__ */ o("button", { class: "swatch" + (n.color === l ? " active" : ""), style: { background: ft[l] }, onClick: () => h({ color: l }) }, l))
            ] })
          ] }),
          /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.icon") }),
            /* @__PURE__ */ o("button", { class: "icon-choose", onClick: () => r({ index: null }), children: [
              /* @__PURE__ */ o("span", { class: "icon-choose-preview", children: /* @__PURE__ */ o(ke, { name: n.icon || f.icon, size: 22 }) }),
              /* @__PURE__ */ o("span", { children: d("editor.choose_icon") }),
              /* @__PURE__ */ o("span", { class: "icon-choose-key mono", children: n.icon || d("editor.icon_default") })
            ] })
          ] }),
          n.type === "cameras" && /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.camera_picture") }),
            /* @__PURE__ */ o("div", { class: "seg seg-wide", children: Ud.map((l) => /* @__PURE__ */ o("button", { class: (n.fit || "cover") === l ? "active" : "", onClick: () => h({ fit: l }), children: d("editor.fit." + l) }, l)) })
          ] }),
          n.type !== "cameras" && n.type !== "scenes" && /* @__PURE__ */ o("label", { class: "check check-row", children: [
            /* @__PURE__ */ o("input", { type: "checkbox", checked: !!n.chip, onChange: (l) => h({ chip: l.currentTarget.checked }) }),
            n.type === "weather" ? d("editor.weather_on_photo") : d("editor.chip_on_photo")
          ] }),
          /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.items", { n: n.items.length, hint: ha(n.type).toLowerCase() }) }),
            i === null ? /* @__PURE__ */ o("div", { class: "items", children: [
              n.items.map((l, u) => /* @__PURE__ */ o("div", { class: "item-block", children: [
                /* @__PURE__ */ o("div", { class: "item-row", children: [
                  /* @__PURE__ */ o("button", { class: "item-icon", title: d("editor.change_icon"), onClick: () => r({ index: u }), children: /* @__PURE__ */ o(ke, { name: l.icon || O1(l.entity, e.states[l.entity] && e.states[l.entity].attributes.device_class), size: 18 }) }),
                  /* @__PURE__ */ o("div", { class: "item-main", children: [
                    /* @__PURE__ */ o("input", { value: l.name || "", placeholder: l.device ? e.devices[l.device] ? e.devices[l.device].name : d("editor.device") : be(e, { entity: l.entity }), onInput: (p) => m(u, { name: p.currentTarget.value || void 0 }) }),
                    l.device ? /* @__PURE__ */ o("span", { class: "mono", children: d("editor.device") }) : /* @__PURE__ */ o("span", { class: "mono", children: [
                      l.entity,
                      !Ge(e, l.entity) && /* @__PURE__ */ o("em", { class: "na-tag", children: [
                        " · ",
                        d("editor.unavailable")
                      ] })
                    ] }),
                    n.type === "climate" && /* @__PURE__ */ o("button", { class: "link", onClick: () => s({ index: u, field: "hum" }), children: [
                      /* @__PURE__ */ o(Je, { size: 12 }),
                      l.hum ? l.hum : d("editor.add_humidity")
                    ] }),
                    n.type === "ac" && /* @__PURE__ */ o("button", { class: "link", onClick: () => s({ index: u, field: "temp" }), children: [
                      /* @__PURE__ */ o(b2, { size: 12 }),
                      l.temp ? l.temp : d("editor.room_sensor")
                    ] })
                  ] }),
                  /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => A(u, -1), children: /* @__PURE__ */ o(Wa, { size: 16 }) }),
                  /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => A(u, 1), children: /* @__PURE__ */ o(qa, { size: 16 }) }),
                  /* @__PURE__ */ o("button", { class: "icon-btn danger", onClick: () => h({ items: n.items.filter((p, g) => g !== u) }), children: /* @__PURE__ */ o(_t, { size: 16 }) })
                ] }),
                l.device && /* @__PURE__ */ o(Jd, { it: l, type: n.type, onChange: (p) => m(u, p) })
              ] }, l.entity + u)),
              /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => s("add"), children: [
                /* @__PURE__ */ o($e, { size: 16 }),
                /* @__PURE__ */ o("span", { children: n.type === "weather" && !n.items.length ? d("editor.pick_forecast") : d("editor.add_device") })
              ] })
            ] }) : /* @__PURE__ */ o(
              Vd,
              {
                domains: i === "add" ? f.domains : ["sensor"],
                match: i !== "add" ? (l) => l.attributes.device_class === (i.field === "hum" ? "humidity" : "temperature") : (l) => H1(n.type, l),
                exclude: n.items.map((l) => l.entity),
                cardType: i === "add" ? n.type : void 0,
                excludeDevices: n.items.map((l) => l.device || "").filter(Boolean),
                onPickDevice: (l, u) => {
                  h({ items: n.items.concat({ entity: u, device: l }) }), s(null);
                },
                onClose: () => s(null),
                onPick: (l) => {
                  i === "add" ? h({ items: n.items.concat({ entity: l }) }) : m(i.index, { [i.field]: l }), s(null);
                }
              }
            )
          ] })
        ]
      }
    ),
    c && /* @__PURE__ */ o(
      Zd,
      {
        value: c.index === null ? n.icon : n.items[c.index] && n.items[c.index].icon,
        onPick: (l) => {
          c.index === null ? h({ icon: l }) : m(c.index, { icon: l }), r(null);
        },
        onClose: () => r(null)
      }
    )
  ] });
}
function Zd(t) {
  const [e, n] = v(""), a = r6.map((i) => ({ ...i, keys: i.keys.filter((s) => d6(s, e)) })).filter((i) => i.keys.length);
  return /* @__PURE__ */ o(Oe, { title: d("editor.icon_pick"), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "icon-picker", children: [
    /* @__PURE__ */ o("div", { class: "picker-search icon-picker-search", children: [
      /* @__PURE__ */ o(o2, { size: 16 }),
      /* @__PURE__ */ o("input", { autoFocus: !0, placeholder: d("editor.icon_search"), value: e, onInput: (i) => n(i.currentTarget.value) }),
      e && /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => n(""), children: /* @__PURE__ */ o(He, { size: 16 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "icon-picker-scroll", children: [
      !a.length && /* @__PURE__ */ o("p", { class: "muted picker-empty", children: d("editor.nothing_found") }),
      a.map((i) => /* @__PURE__ */ o("section", { class: "icon-group", children: [
        /* @__PURE__ */ o("h3", { children: d(i.titleKey) }),
        /* @__PURE__ */ o("div", { class: "icon-grid icon-grid-picker", children: i.keys.map((s) => /* @__PURE__ */ o("button", { class: t.value === s ? "active" : "", title: s, onClick: () => t.onPick(s), children: /* @__PURE__ */ o(ke, { name: s, size: 22 }) }, s)) })
      ] }, i.titleKey))
    ] })
  ] }) });
}
function Jd(t) {
  const e = ae(), n = t.it, a = n.skip || [], i = n.names || {}, s = j2(e, t.type, { ...n, skip: [], names: {} });
  if (!s.length) return /* @__PURE__ */ o("span", { class: "mono", children: d("editor.no_matching") });
  const c = s.map((m) => m.entity), r = (m, A) => {
    const l = c.slice(), u = l[m];
    l[m] = l[m + A], l[m + A] = u, t.onChange({ order: l });
  }, f = (m, A) => {
    const l = { ...i };
    A ? l[m] = A : delete l[m], t.onChange({ names: Object.keys(l).length ? l : void 0 });
  }, h = (m, A) => {
    const l = A ? a.filter((u) => u !== m) : a.concat(m);
    t.onChange({ skip: l.length ? l : void 0 });
  };
  return /* @__PURE__ */ o("div", { class: "device-parts", children: s.map((m, A) => {
    const l = a.indexOf(m.entity) === -1;
    return /* @__PURE__ */ o("div", { class: "device-part" + (l ? "" : " off"), children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: l, title: d(l ? "editor.part_hide" : "editor.part_show"), onChange: (u) => h(m.entity, u.currentTarget.checked) }),
      /* @__PURE__ */ o("input", { class: "part-name", value: i[m.entity] || "", placeholder: m.name || m.entity, onInput: (u) => f(m.entity, u.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: A === 0, onClick: () => r(A, -1), children: /* @__PURE__ */ o(Wa, { size: 14 }) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: A === s.length - 1, onClick: () => r(A, 1), children: /* @__PURE__ */ o(qa, { size: 14 }) })
    ] }, m.entity);
  }) });
}
function Xd({ thumb: t, sheet: e }) {
  const [n, a] = v({ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }), [i, s] = v(t ? [t] : []);
  kn(() => {
    if (!e) return;
    const r = () => a({ x: e.offsetLeft, y: e.offsetTop, w: window.innerWidth, h: window.innerHeight });
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, [e]), H(() => {
    t && i[i.length - 1] !== t && s(i.slice(-1).concat(t));
  }, [t]);
  const c = {
    left: -n.x - n.w * 0.05,
    top: -n.y - n.h * 0.05,
    width: n.w * 1.1,
    height: n.h * 1.1
  };
  return /* @__PURE__ */ o("div", { class: "sheet-glass", children: [
    i.map((r, f) => /* @__PURE__ */ o("div", { class: "glass-layer" + (f > 0 ? " fresh" : ""), style: { ...c, backgroundImage: "url(" + r + ")" } }, r.length + ":" + r.slice(-32))),
    /* @__PURE__ */ o("div", { class: "sheet-tint" })
  ] });
}
function $d({ card: t, tone: e, onCamera: n, onClose: a }) {
  const i = ae(), s = ee(null), [c, r] = v(null);
  kn(() => {
    r(s.current);
  }, []);
  const f = ["switches", "scenes", "cameras", "ac", "speakers", "tv", "weather"].indexOf(t.type) !== -1;
  return /* @__PURE__ */ o("div", { class: "sheet-layer", onClick: a, children: /* @__PURE__ */ o("div", { ref: s, class: "sheet sheet-" + t.type + (f ? " sheet-wide" : "") + (t.color ? " tint-" + t.color : ""), onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ o(Xd, { thumb: e ? e.thumb : void 0, sheet: c }),
    /* @__PURE__ */ o("div", { class: "sheet-inner", children: [
      /* @__PURE__ */ o("div", { class: "panel-head", children: [
        /* @__PURE__ */ o("div", { class: "panel-title", children: [
          t.icon && /* @__PURE__ */ o(ke, { name: t.icon, size: 18, class: "panel-icon" }),
          /* @__PURE__ */ o("h2", { children: F1(i, t) })
        ] }),
        /* @__PURE__ */ o("div", { class: "sheet-actions", children: [
          /* @__PURE__ */ o(U2, { card: t }),
          /* @__PURE__ */ o("button", { class: "sheet-close", onClick: a, children: /* @__PURE__ */ o(He, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ o(V2, { card: t, size: { w: f ? 600 : 420, h: 600 }, onCamera: n })
    ] })
  ] }) });
}
const K2 = 36e5, $t = 24 * K2, es = { "24h": $t, "7d": 7 * $t, "30d": 30 * $t }, Kd = ["binary_sensor", "switch", "light", "input_boolean", "fan", "lock", "cover", "media_player"], e8 = ["on", "open", "unlocked", "playing", "home"];
function ts(t) {
  if (!t) return "line";
  if (Kd.indexOf(t.entity_id.split(".")[0]) !== -1) return "timeline";
  const e = t.attributes.state_class;
  return e === "total" || e === "total_increasing" ? "bars" : isNaN(parseFloat(t.state)) ? "timeline" : "line";
}
function xn(t) {
  return new Date(t).toISOString();
}
function To(t) {
  return typeof t == "number" ? t : Date.parse(t);
}
function Gn(t, e, n, a) {
  return t.call({
    type: "history/history_during_period",
    start_time: xn(n),
    end_time: xn(a),
    entity_ids: [e],
    minimal_response: !0,
    no_attributes: !0
  }).then((i) => (i[e] || []).map((s) => ({ s: s.s, t: (s.lu || s.lc || 0) * 1e3 || n })));
}
function Po(t, e, n, a, i, s) {
  return t.call({
    type: "recorder/statistics_during_period",
    start_time: xn(n),
    end_time: xn(a),
    statistic_ids: [e],
    period: i,
    types: s
  }).then((c) => c[e] || []);
}
function Oo(t) {
  const e = [];
  return t.forEach((n) => {
    const a = parseFloat(n.s);
    isNaN(a) || e.push({ t: n.t, v: a });
  }), e;
}
function t8(t, e, n) {
  const a = e.entity_id, i = ts(e), s = Date.now(), c = s - es[n], r = { kind: i, from: c, to: s, points: [], segments: [], bucketMs: 0 };
  if (i === "timeline")
    return Gn(t, a, c, s).then((f) => {
      const h = f.map((m, A) => ({
        from: Math.max(c, m.t),
        to: A + 1 < f.length ? f[A + 1].t : s,
        on: m.s === "unavailable" || m.s === "unknown" ? null : e8.indexOf(m.s) !== -1
      }));
      return { ...r, segments: h };
    });
  if (i === "bars") {
    const f = n === "24h" ? "hour" : "day";
    return Po(t, a, c, s, f, ["change"]).then((h) => ({
      ...r,
      bucketMs: f === "hour" ? K2 : $t,
      points: h.filter((m) => m.change != null).map((m) => ({ t: To(m.start), v: m.change }))
    }));
  }
  return n === "24h" ? Gn(t, a, c, s).then((f) => ({ ...r, points: Oo(f) })) : Po(t, a, c, s, n === "7d" ? "hour" : "day", ["mean", "min", "max"]).then((f) => {
    const h = f.filter((m) => m.mean != null).map((m) => ({ t: To(m.start), v: m.mean, min: m.min == null ? void 0 : m.min, max: m.max == null ? void 0 : m.max }));
    return h.length ? { ...r, points: h } : Gn(t, a, c, s).then((m) => ({ ...r, points: Oo(m) }));
  });
}
function n8(t) {
  const e = t.points;
  if (t.kind === "timeline") {
    let c = 0, r = 0, f = null;
    return t.segments.forEach((h) => {
      h.on && (r += h.to - h.from, f === !1 && c++), h.on !== null && (f = h.on);
    }), { onCount: c, onMs: r };
  }
  if (!e.length) return {};
  if (t.kind === "bars") {
    let c = 0, r = e[0];
    return e.forEach((f) => {
      c += f.v, f.v > r.v && (r = f);
    }), { total: c, peak: r, avg: c / e.length };
  }
  let n = e[0], a = e[0];
  e.forEach((c) => {
    (c.min != null ? c.min : c.v) < (n.min != null ? n.min : n.v) && (n = c), (c.max != null ? c.max : c.v) > (a.max != null ? a.max : a.v) && (a = c);
  });
  let i = 0, s = 0;
  return e.forEach((c, r) => {
    const f = r + 1 < e.length ? e[r + 1].t : t.to, h = Math.max(0, f - Math.max(c.t, t.from));
    i += c.v * h, s += h;
  }), {
    min: { t: n.t, v: n.min != null ? n.min : n.v },
    max: { t: a.t, v: a.max != null ? a.max : a.v },
    avg: s ? i / s : void 0
  };
}
function o8(t, e) {
  const n = t.registry[e], a = n && n.di ? t.devices[n.di] : void 0;
  return a ? Promise.resolve(a.entities.filter((i) => i !== e && t.registry[i].ec == null)) : Promise.resolve([]);
}
const a8 = ["24h", "7d", "30d"], i8 = ["switch", "light", "fan", "input_boolean"];
function Zn(t, e) {
  const n = t.states[e];
  return String(n && n.attributes.friendly_name || e);
}
function s8(t) {
  if (t.length < 2) return t;
  const e = t.map((a) => a.split(" "));
  let n = 0;
  for (; e.every((a) => a.length > n + 1 && a[n] === e[0][n]); ) n++;
  return e.map((a) => a.slice(n).join(" "));
}
function c8(t) {
  const e = Math.round(t / 6e4), n = Math.floor(e / 1440), a = Math.floor(e % 1440 / 60), i = e % 60;
  return [n ? d("duration.days", { n }) : "", a || n ? d("duration.hours", { n: a }) : "", n ? "" : d("duration.minutes", { n: i })].filter(Boolean).join(" ");
}
function r8({ entity: t }) {
  const e = ae(), [n, a] = v(!1);
  H(() => {
    if (!n) return;
    const c = setTimeout(() => a(!1), 4e3);
    return () => clearTimeout(c);
  }, [n]);
  const i = e.states[t] && e.states[t].state === "on", s = () => {
    if (i && !n) {
      a(!0);
      return;
    }
    a(!1), e.toggle(t);
  };
  return /* @__PURE__ */ o("button", { class: "btn " + (n ? "btn-danger" : i ? "btn-ghost" : "btn-accent"), onClick: s, children: [
    /* @__PURE__ */ o(wt, { size: 16 }),
    /* @__PURE__ */ o("span", { children: d(n ? "detail.confirm_off" : i ? "common.turn_off" : "common.turn_on") })
  ] });
}
function pe(t) {
  return /* @__PURE__ */ o("div", { class: "stat", children: [
    /* @__PURE__ */ o("div", { class: "stat-label", children: t.label }),
    /* @__PURE__ */ o("div", { class: "stat-value", children: t.value }),
    t.note && /* @__PURE__ */ o("div", { class: "stat-note", children: t.note })
  ] });
}
function l8({ series: t, sum: e, unit: n, range: a, current: i }) {
  const s = n ? " " + n : "";
  if (t.kind === "timeline") {
    const c = t.to - t.from;
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(pe, { label: d("stat.now"), value: i }),
      /* @__PURE__ */ o(pe, { label: d("stat.turned_on"), value: String(e.onCount || 0), note: d("stat.times") }),
      /* @__PURE__ */ o(pe, { label: d("stat.on_time"), value: c8(e.onMs || 0) }),
      /* @__PURE__ */ o(pe, { label: d("stat.on_share"), value: Math.round((e.onMs || 0) / c * 100) + "%" })
    ] });
  }
  if (t.kind === "bars") {
    const c = t.bucketMs >= 864e5 ? d("stat.avg_per_day") : d("stat.avg_per_hour");
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(pe, { label: d("stat.total"), value: e.total != null ? de(e.total) + s : "—" }),
      /* @__PURE__ */ o(pe, { label: c, value: e.avg != null ? de(e.avg) + s : "—" }),
      /* @__PURE__ */ o(
        pe,
        {
          label: d("stat.peak"),
          value: e.peak ? de(e.peak.v) + s : "—",
          note: e.peak ? t.bucketMs >= 864e5 ? zt(e.peak.t) : Xe(e.peak.t) : void 0
        }
      ),
      /* @__PURE__ */ o(pe, { label: d("stat.counter_now"), value: i })
    ] });
  }
  return /* @__PURE__ */ o("div", { class: "stats", children: [
    /* @__PURE__ */ o(pe, { label: d("stat.now"), value: i }),
    /* @__PURE__ */ o(pe, { label: d("stat.min"), value: e.min ? de(e.min.v) + s : "—", note: e.min ? Te(e.min.t, a) : void 0 }),
    /* @__PURE__ */ o(pe, { label: d("stat.max"), value: e.max ? de(e.max.v) + s : "—", note: e.max ? Te(e.max.t, a) : void 0 }),
    /* @__PURE__ */ o(pe, { label: d("stat.avg"), value: e.avg != null ? de(e.avg) + s : "—" })
  ] });
}
function d8({ series: t, unit: e, range: n }) {
  const a = t.kind === "timeline" ? t.segments.slice().reverse().slice(0, 60).map((s) => [Te(s.from, n), s.on ? d("switch.on") : s.on === null ? d("chart.no_connection") : d("switch.off"), "—"]) : t.points.slice().reverse().slice(0, 60).map((s) => [
    t.kind === "bars" && t.bucketMs >= 864e5 ? zt(s.t) : Te(s.t, n),
    de(s.v) + (e ? " " + e : ""),
    s.min != null && s.max != null ? de(s.min) + " … " + de(s.max) : "—"
  ]), i = t.kind === "line" && t.points.some((s) => s.min != null);
  return /* @__PURE__ */ o("div", { class: "table-wrap", children: /* @__PURE__ */ o("table", { class: "diag", children: /* @__PURE__ */ o("tbody", { children: a.map((s, c) => /* @__PURE__ */ o("tr", { children: [
    /* @__PURE__ */ o("td", { children: s[0] }),
    /* @__PURE__ */ o("td", { class: "strong", children: s[1] }),
    i && /* @__PURE__ */ o("td", { class: "muted", children: s[2] })
  ] }, c)) }) }) });
}
function f8(t) {
  const e = ae(), [n, a] = v(t.entities[0]), [i, s] = v("24h"), [c, r] = v(null), [f, h] = v(""), [m, A] = v([]), [l, u] = v(!1), p = ee(null), g = j1(p).w || 600, y = e.states[n], w = sn(e, n).trim(), k = ts(y);
  H(() => {
    o8(e, t.entities[0]).then((b) => A(b.filter((I) => !!e.states[I])), () => {
    });
  }, [t.entities[0]]), H(() => {
    if (!y) return;
    let b = !0;
    return r(null), h(""), t8(e, y, i).then(
      (I) => {
        b && r(I);
      },
      (I) => {
        b && h(I.message);
      }
    ), () => {
      b = !1;
    };
  }, [n, i, e.status]);
  const x = t.entities.concat(m.filter((b) => t.entities.indexOf(b) === -1)).filter((b) => b === n || Ge(e, b)), C = s8(x.map((b) => Zn(e, b))), E = !y || At(y.state) ? d("sensor.no_data") : k === "timeline" ? y.state === "on" ? d("switch.on") : y.state === "off" ? d("switch.off") : y.state : de(parseFloat(y.state)) + (w ? " " + w : ""), M = n.split(".")[0];
  return M === "weather" ? /* @__PURE__ */ o(Oe, { title: Zn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: p, children: /* @__PURE__ */ o(F2, { card: { id: "detail", type: "weather", title: "", x: 0, y: 0, w: 6, h: 6, items: [{ entity: n }] }, size: { w: g, h: 560 } }) }) }) : /* @__PURE__ */ o(Oe, { title: Zn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: p, children: [
    /* @__PURE__ */ o("div", { class: "detail-hero", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ o("div", { class: "hero-value", children: E }),
        y && /* @__PURE__ */ o("div", { class: "muted small", children: d("detail.updated", { when: Te(Date.parse(y.last_changed || "") || Date.now(), "7d") }) })
      ] }),
      i8.indexOf(M) !== -1 && y && /* @__PURE__ */ o(r8, { entity: n }, n)
    ] }),
    x.length > 1 && /* @__PURE__ */ o("div", { class: "chips", children: x.map((b, I) => {
      const P = e.states[b], B = !P || At(P.state) ? "—" : isNaN(parseFloat(P.state)) ? P.state === "on" ? d("chip.state_on") : P.state === "off" ? d("chip.state_off") : P.state : de(parseFloat(P.state)) + sn(e, b);
      return /* @__PURE__ */ o("button", { class: "chip" + (b === n ? " active" : ""), onClick: () => a(b), children: [
        /* @__PURE__ */ o("span", { children: C[I] }),
        /* @__PURE__ */ o("b", { children: B })
      ] }, b);
    }) }),
    /* @__PURE__ */ o("div", { class: "detail-tools", children: [
      /* @__PURE__ */ o("div", { class: "seg", children: a8.map((b) => /* @__PURE__ */ o("button", { class: b === i ? "active" : "", onClick: () => s(b), children: d("range." + b) }, b)) }),
      /* @__PURE__ */ o("button", { class: "chip-btn" + (l ? " on" : ""), onClick: () => u(!l), children: [
        /* @__PURE__ */ o(Ar, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("detail.table") })
      ] })
    ] }),
    f && /* @__PURE__ */ o("div", { class: "chart-empty c-red", children: d("detail.load_error", { error: f }) }),
    !f && !c && /* @__PURE__ */ o("div", { class: "chart-empty", children: d("common.loading") }),
    c && (l ? /* @__PURE__ */ o(d8, { series: c, unit: w, range: i }) : /* @__PURE__ */ o(A6, { series: c, unit: w, range: i, width: g })),
    c && /* @__PURE__ */ o(l8, { series: c, sum: n8(c), unit: w, range: i, current: E }),
    c && c.kind !== "timeline" && i !== "24h" && /* @__PURE__ */ o("div", { class: "muted small detail-foot", children: [
      c.kind === "bars" ? d("detail.foot_bars") : d(i === "7d" ? "detail.foot_hourly" : "detail.foot_daily"),
      " · ",
      d("detail.days", { n: Math.round(es[i] / 864e5) })
    ] })
  ] }) });
}
function ns(t, e, n) {
  const a = (i) => i.split(",").map((s) => t + s).join(",");
  return a(".accent-text") + "{color:" + e + "}" + a(".light.on .light-icon") + "{background:" + e + "}" + a(".light.on") + "{border-color:" + e + ";background:" + n + "}" + a(".seg .active") + "{background:" + n + ";color:" + e + "}" + a(".room-temp sup") + "{color:" + e + "}";
}
function h8(t) {
  const e = parseInt(t.slice(1), 16);
  return "rgba(" + (e >> 16) + "," + (e >> 8 & 255) + "," + (e & 255) + ",0.2)";
}
const m8 = Object.keys(ft).map((t) => ns(".tint-" + t + " ", ft[t], h8(ft[t]))).join("");
function u8() {
  const t = ot(), e = Ss(), n = E1(), { settings: a, layout: i, sync: s, homes: c, active: r } = t.state;
  H(() => t.start(), []);
  const f = L1(() => new I1("", () => Promise.resolve("")), []), h = t.card ? t.card.client : t.haClient || f, [m, A] = v(""), l = (L) => {
    const F = c.findIndex(($) => $.id === r), Y = c[(F + L + c.length) % c.length];
    !Y || Y.id === r || (A(L > 0 ? "next" : "prev"), se(null), t.setActive(Y.id));
  }, u = (L) => {
    A(L > 0 ? "next" : "prev"), se(null), t.step(L);
  }, p = t.photoUrls, g = p.length, [y, w] = v(0), k = g ? p[y % g] : "";
  H(() => {
    const L = t.frameClient;
    if (!L || !k || /^(data|blob):/.test(k)) return;
    const F = k.replace(/^https?:\/\/[^/]+/, "");
    ht(L, { photo: decodeURIComponent(F.split("?")[0].split("/").pop() || ""), photo_url: F });
  }, [k, t.frameClient]), H(() => {
    t.frameClient && ht(t.frameClient, { screen: r + "/" + t.state.screen });
  }, [r, t.state.screen, t.frameClient]);
  const [x, C] = v(t.ui.controls), [E, M] = v(t.ui.editing);
  H(() => {
    t.ui.controls = x, t.ui.editing = E;
  }, [x, E]);
  const [b, I] = v(!1), [P, B] = v(null), T = (L, F) => B({ feeds: L, index: F }), R = ee(0);
  H(() => t.onCommand((L) => {
    if (L.command === "next_photo") w((F) => F + 1);
    else if (L.command === "show_panel") C(!0);
    else if (L.command === "show_photos")
      C(!1), se(null), B(null);
    else if (L.command === "reload") location.reload();
    else if (L.command === "update_apk") js();
    else if (L.command === "show_screen" && L.screen) {
      const F = L.screen.split("/");
      t.setActive(F[0], F[1]), C(!0);
    } else if (L.command === "show_camera" && L.entity) {
      if (!h.cameraStreamUrl(L.entity)) return;
      const Y = h.states[L.entity], $ = Y && Y.attributes.friendly_name || L.entity;
      B({ feeds: [{ entity: L.entity, name: $ }], index: 0 }), clearTimeout(R.current), R.current = window.setTimeout(() => B(null), (L.duration || 30) * 1e3);
    }
  }), [h]);
  const [Z, se] = v(null), [N, W] = v(null), [D, O] = v(!1), [X, le] = v(null), [V, _] = v(!0), [j, Q] = v(""), J = bc(j || void 0), oe = Z && i.cards.filter((L) => L.id === Z)[0] || null, ie = s === "local" && !t.haClient;
  H(() => {
    ie && I(!0);
  }, [ie]);
  const he = t.screenOn || !!P;
  H(() => lc(he, t.brightness), [he, t.brightness]), H(() => dc(() => t.wakeScreen()), []), H(() => {
    if (g < 2 || !he || x) return;
    const L = setInterval(() => w((F) => (F + 1) % g), a.slideIntervalMs);
    return () => clearInterval(L);
  }, [g, a.slideIntervalMs, he, y, x]), H(() => {
    if (!x) {
      On(!0);
      return;
    }
    const L = _e.current;
    let F = 0;
    const Y = () => {
      clearTimeout(F), F = window.setTimeout(() => On(!1), 800);
    }, $ = () => {
      clearTimeout(F), On(!0);
    };
    return Y(), L && (L.addEventListener("touchstart", $), L.addEventListener("mousedown", $), L.addEventListener("touchend", Y), L.addEventListener("mouseup", Y)), () => {
      clearTimeout(F), L && (L.removeEventListener("touchstart", $), L.removeEventListener("mousedown", $), L.removeEventListener("touchend", Y), L.removeEventListener("mouseup", Y));
    };
  }, [x]);
  const [me, we] = v(null), ze = fs((L) => {
    g < 2 || (w((F) => (F % g + L + g) % g), we((F) => ({ dir: L, key: F ? F.key + 1 : 1 })));
  }, [g]);
  H(() => {
    if (!me) return;
    const L = setTimeout(() => we(null), 700);
    return () => clearTimeout(L);
  }, [me]), H(() => {
    let L = window.setTimeout(() => _(!1), 8e3);
    const F = _e.current, Y = () => {
      t.ui.controls || (_(!0), clearTimeout(L), L = window.setTimeout(() => _(!1), 5e3));
    };
    return F && (F.addEventListener("touchstart", Y), F.addEventListener("mousedown", Y)), () => {
      clearTimeout(L), F && (F.removeEventListener("touchstart", Y), F.removeEventListener("mousedown", Y));
    };
  }, []);
  const fe = b || !!P || !!N || D || !!X, Me = fe || !!oe, _e = ee(null), Et = ee(null), It = ee(null), Nt = ee(null);
  H(() => {
    const L = _e.current;
    if (!L) return;
    const F = () => {
      L.scrollTop = 0, L.scrollLeft = 0;
    };
    return L.addEventListener("scroll", F), () => L.removeEventListener("scroll", F);
  }, []);
  const [z, q] = v(!1);
  kc({ root: _e, controls: Et, ambient: It, soft: Nt }, x, C, !Me && !z, () => q(!0), ze), H(() => {
    if (Me || z) return;
    const L = (F) => {
      const Y = F.target;
      if (Y && /^(INPUT|TEXTAREA|SELECT)$/.test(Y.tagName)) return;
      const $ = F.key || "";
      if (!x && ($ === "ArrowLeft" || $ === "Left")) ze(-1);
      else if (!x && ($ === "ArrowRight" || $ === "Right")) ze(1);
      else if (!x && ($ === "ArrowUp" || $ === "Up")) C(!0);
      else if (x && !E && ($ === "ArrowDown" || $ === "Down" || $ === "Escape" || $ === "Esc")) C(!1);
      else return;
      F.preventDefault();
    };
    return document.addEventListener("keydown", L), () => document.removeEventListener("keydown", L);
  }, [Me, z, x, E, ze]);
  const xe = (x || !!oe) && !fe && !E;
  H(() => {
    if (!xe || !a.idleSec || f1) return;
    let L = 0;
    const F = () => {
      clearTimeout(L), L = window.setTimeout(() => {
        C(!1), se(null), t.goStart();
      }, a.idleSec * 1e3);
    }, Y = ["touchstart", "mousedown", "keydown"];
    return Y.forEach(($) => document.addEventListener($, F)), F(), () => {
      clearTimeout(L), Y.forEach(($) => document.removeEventListener($, F));
    };
  }, [xe, a.idleSec]);
  const Ce = (L) => {
    const F = i.cards.some((Dt) => Dt.id === L.id), Y = bt(L), $ = F ? i.cards.map((Dt) => Dt.id === L.id ? Y : Dt) : i.cards.concat(Y);
    t.saveLayout({ ...i, cards: qe($, Y) }), W(null);
  };
  return /* @__PURE__ */ o(ca.Provider, { value: h, children: /* @__PURE__ */ o(ra.Provider, { value: le, children: /* @__PURE__ */ o("div", { class: "root q-" + n, children: [
    /* @__PURE__ */ o("style", { children: m8 + (J ? ns("", J.accent, J.accentSoft) : "") }),
    /* @__PURE__ */ o("div", { class: "app", ref: _e, lang: e, children: [
      /* @__PURE__ */ o(_r, { urls: p, index: y % Math.max(g, 1), tone: J, soft: x, softRef: Nt, onShow: Q }),
      /* @__PURE__ */ o(i1.Provider, { value: !x, children: /* @__PURE__ */ o(
        ad,
        {
          visible: !x,
          innerRef: It,
          onSheet: (L) => se(L.id),
          onConnection: () => I(!0),
          showHint: V && !oe,
          onHome: () => {
            _(!1), C(!0);
          },
          photoThumb: J ? J.thumb : void 0,
          customizing: z,
          onDone: () => q(!1)
        }
      ) }),
      me && /* @__PURE__ */ o("div", { class: "photo-step " + (me.dir > 0 ? "next" : "prev"), children: me.dir > 0 ? /* @__PURE__ */ o(T1, { size: 40, strokeWidth: 1.6 }) : /* @__PURE__ */ o($a, { size: 40, strokeWidth: 1.6 }) }, me.key),
      /* @__PURE__ */ o(i1.Provider, { value: x, children: /* @__PURE__ */ o(
        Dd,
        {
          innerRef: Et,
          visible: x,
          editing: E,
          paused: fe || !!oe,
          onEditing: M,
          onPhotos: () => C(!1),
          onSettings: () => I(!0),
          onCamera: T,
          onEditCard: (L) => W({ card: L, isNew: !1 }),
          homes: c,
          active: r,
          slide: m,
          onSwitchHome: l,
          onStep: u,
          onAddCard: () => O(!0)
        }
      ) })
    ] }),
    oe && /* @__PURE__ */ o($d, { card: oe, tone: J, onCamera: T, onClose: () => se(null) }),
    /* @__PURE__ */ o(
      "div",
      {
        class: "screen-dim" + (he ? "" : " asleep"),
        style: { opacity: fc(he, t.brightness) },
        onClick: he ? void 0 : () => t.wakeScreen()
      }
    ),
    P && /* @__PURE__ */ o(
      Pd,
      {
        feeds: P.feeds,
        index: P.index,
        onIndex: (L) => B((F) => F && { ...F, index: L }),
        onClose: () => B(null)
      }
    ),
    b && /* @__PURE__ */ o(
      qd,
      {
        onClose: () => I(!1)
      }
    ),
    D && /* @__PURE__ */ o(Wd, { onClose: () => O(!1), onPick: (L) => {
      O(!1), W({ card: L, isNew: !0 });
    } }),
    N && /* @__PURE__ */ o(
      Gd,
      {
        card: N.card,
        onSave: Ce,
        onDelete: N.isNew ? void 0 : () => {
          t.saveLayout({ ...i, cards: qe(i.cards.filter((L) => L.id !== N.card.id)) }), W(null);
        },
        onClose: () => W(null)
      }
    ),
    X && /* @__PURE__ */ o(f8, { entities: X, onClose: () => le(null) }, X.join(","))
  ] }) }) });
}
class A8 extends I1 {
  constructor() {
    super("", () => Promise.resolve("")), this.hass = null;
  }
  // HA присылает новый hass при каждом изменении любого состояния — просто перерисовываемся.
  setHass(e) {
    const n = !this.hass;
    this.hass = e, zn(e.language), e.states !== this.states && (this.states = e.states, this.loaded = !0, this.status !== "connected" ? this.setStatus("connected") : this.emit()), n && this.loadRegistry();
  }
  get isAdmin() {
    return !!(this.hass && this.hass.user && this.hass.user.is_admin);
  }
  fetch(e, n = {}) {
    const a = this.hass;
    if (a && a.fetchWithAuth) return a.fetchWithAuth(e, n);
    const i = { ...n.headers || {}, Authorization: "Bearer " + this.accessToken };
    return fetch(e, { ...n, headers: i });
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
  callService(e, n, a) {
    return this.hass ? (this.hass.callService(e.split(".")[0], n, a, { entity_id: e }).catch(() => {
    }), !0) : !1;
  }
  subscribeMessage(e, n) {
    if (!this.hass) return () => {
    };
    let a = null, i = !1;
    return this.hass.connection.subscribeMessage(n, e).then((s) => {
      i ? s().catch(() => {
      }) : a = s;
    }, () => {
    }), () => {
      i = !0, a && a().catch(() => {
      });
    };
  }
  // Тот же origin, что у HA: поток камеры по access_token камеры, картинки — относительными путями.
  cameraStreamUrl(e) {
    const n = this.states[e], a = n && n.attributes.access_token;
    return a ? "/api/camera_proxy_stream/" + e + "?token=" + a : "";
  }
  pictureUrl(e) {
    return e || "";
  }
}
function p8(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Jn, Ho;
function g8() {
  return Ho || (Ho = 1, Jn = {
    webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
    mp4: "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
  }), Jn;
}
var Xn, Fo;
function b8() {
  if (Fo) return Xn;
  Fo = 1;
  const { webm: t, mp4: e } = g8(), n = () => typeof navigator < "u" && parseFloat(
    ("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(
      navigator.userAgent
    ) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")
  ) < 10 && !window.MSStream, a = () => "wakeLock" in navigator;
  class i {
    constructor() {
      if (this.enabled = !1, a()) {
        this._wakeLock = null;
        const c = () => {
          this._wakeLock !== null && document.visibilityState === "visible" && this.enable();
        };
        document.addEventListener("visibilitychange", c), document.addEventListener("fullscreenchange", c);
      } else n() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", t), this._addSourceToVideo(this.noSleepVideo, "mp4", e), this.noSleepVideo.addEventListener("loadedmetadata", () => {
        this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () => {
          this.noSleepVideo.currentTime > 0.5 && (this.noSleepVideo.currentTime = Math.random());
        });
      }));
    }
    _addSourceToVideo(c, r, f) {
      var h = document.createElement("source");
      h.src = f, h.type = `video/${r}`, c.appendChild(h);
    }
    get isEnabled() {
      return this.enabled;
    }
    enable() {
      return a() ? navigator.wakeLock.request("screen").then((c) => {
        this._wakeLock = c, this.enabled = !0, console.log("Wake Lock active."), this._wakeLock.addEventListener("release", () => {
          console.log("Wake Lock released.");
        });
      }).catch((c) => {
        throw this.enabled = !1, console.error(`${c.name}, ${c.message}`), c;
      }) : n() ? (this.disable(), console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `), this.noSleepTimer = window.setInterval(() => {
        document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0));
      }, 15e3), this.enabled = !0, Promise.resolve()) : this.noSleepVideo.play().then((r) => (this.enabled = !0, r)).catch((r) => {
        throw this.enabled = !1, r;
      });
    }
    disable() {
      a() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : n() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = !1;
    }
  }
  return Xn = i, Xn;
}
var x8 = b8();
const y8 = /* @__PURE__ */ p8(x8);
let k1 = null;
const jo = new y8();
function $n() {
  const t = navigator.wakeLock;
  return !t || document.visibilityState !== "visible" ? Promise.resolve(!1) : t.request("screen").then(
    (e) => (k1 = e, e.addEventListener("release", () => {
      k1 = null;
    }), !0),
    () => !1
  );
}
let Ro = !1;
function v8() {
  if (Ro || (Ro = !0, /SmartFrame\//.test(navigator.userAgent))) return;
  $n(), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && !k1 && $n();
  });
  const t = () => {
    document.removeEventListener("touchend", t), document.removeEventListener("click", t), $n().then((e) => {
      !e && !jo.isEnabled && jo.enable().catch(() => {
      });
    });
  };
  document.addEventListener("touchend", t), document.addEventListener("click", t);
}
function k8(t) {
  const e = ee(null), [n, a] = v(900);
  H(() => {
    const r = () => {
      e.current && a(e.current.clientWidth);
    };
    return r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []);
  const { w: i, h: s } = t.disp, c = Math.min(1, n / i, window.innerHeight * 0.72 / s);
  return /* @__PURE__ */ o("div", { class: "admin-screen-wrap", ref: e, children: /* @__PURE__ */ o("div", { class: "admin-iframe-box", style: { width: Math.round(i * c) + "px", height: Math.round(s * c) + "px" }, children: /* @__PURE__ */ o(
    "iframe",
    {
      src: "/photoframe/index.html?preview=1",
      title: "preview",
      style: { width: i + "px", height: s + "px", transform: "scale(" + c + ")" }
    },
    i + "x" + s
  ) }) });
}
function w8(t, e) {
  const n = t.displays || {}, a = n[e];
  if (a) return a;
  const i = n[e === "portrait" ? "landscape" : "portrait"];
  return i ? { w: i.h, h: i.w } : e === "portrait" ? { w: 800, h: 1280 } : { w: 1280, h: 800 };
}
function _8(t) {
  const [e, n] = v(null), [a, i] = v(""), [s, c] = v(""), [r, f] = v("landscape"), [h, m] = v({ landscape: null, portrait: null }), [A, l] = v(null), [u, p] = v("clock"), [g, y] = v(""), [w, k] = v("photo"), x = () => {
    i(""), t.hass.callWS({ type: "photoframe/frames" }).then((_) => {
      n(_.frames), !s && _.frames.length && C(_.frames[0]);
    }, (_) => i(_.message || String(_)));
  };
  H(x, []);
  const C = (_) => {
    c(_.frame_id), m({ landscape: Re(_.grid), portrait: Re(_.grid_portrait) });
    const j = _.displays || {};
    f(j.landscape || !j.portrait ? "landscape" : "portrait"), y("");
  }, E = e && e.filter((_) => _.frame_id === s)[0], M = A || h[r], b = (_) => {
    m({ ...h, [r]: _ }), y("");
  }, I = (_, j) => t.hass.callWS({ type: "photoframe/frame/set_lockscreen", frame_ids: _, patch: j }), P = () => {
    E && (y(d("admin.saving")), I([E.frame_id], { grid: h.landscape, gridPortrait: h.portrait }).then(
      () => {
        y(d(E.online ? "admin.saved_online" : "admin.saved_offline")), x();
      },
      (_) => y(_.message || String(_))
    ));
  }, [B, T] = v(!1), [R, Z] = v([]), [se, N] = v("all"), W = (e || []).filter((_) => _.frame_id !== s), D = () => {
    if (!E || !R.length) return;
    const _ = { grid: h.landscape, gridPortrait: h.portrait }, j = se === "all" ? { ...B1(E.lockscreen), ..._ } : _;
    y(d("admin.saving")), I(R, j).then((Q) => {
      y(d("admin.copied", { n: R.length, online: Q.online.length })), T(!1), Z([]), x();
    }, (Q) => y(Q.message || String(Q)));
  }, O = E ? w8(E, r) : { w: 1280, h: 800 }, X = !!(E && E.displays && E.displays[r]), le = (_) => {
    if (!M) return;
    const j = { ...M[u], ..._ };
    j.ha || delete j.ha, j.va || delete j.va, b({ ...M, [u]: j });
  }, V = M ? M[u] : null;
  return /* @__PURE__ */ o("div", { class: "admin", children: [
    /* @__PURE__ */ o("header", { class: "admin-head", children: [
      /* @__PURE__ */ o("h1", { children: d("admin.title") }),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: x, children: [
        /* @__PURE__ */ o(cr, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("admin.refresh") })
      ] })
    ] }),
    a && /* @__PURE__ */ o("div", { class: "c-red small", children: a }),
    e && !e.length && /* @__PURE__ */ o("p", { class: "hint", children: d("admin.no_frames") }),
    /* @__PURE__ */ o("div", { class: "admin-body", children: [
      /* @__PURE__ */ o("nav", { class: "admin-list", children: (e || []).map((_) => /* @__PURE__ */ o("button", { class: "admin-frame" + (_.frame_id === s ? " on" : ""), onClick: () => C(_), children: [
        /* @__PURE__ */ o("span", { class: "dot" + (_.online ? " online" : "") }),
        /* @__PURE__ */ o("span", { class: "admin-frame-name", children: _.name || _.frame_id }),
        /* @__PURE__ */ o("small", { children: _.model || "" })
      ] }, _.frame_id)) }),
      E && /* @__PURE__ */ o("section", { class: "admin-editor", children: [
        /* @__PURE__ */ o("div", { class: "admin-tools", children: [
          /* @__PURE__ */ o("div", { class: "seg", children: [
            /* @__PURE__ */ o("button", { class: w === "photo" ? "active" : "", onClick: () => k("photo"), children: [
              /* @__PURE__ */ o(Ni, { size: 14 }),
              " ",
              d("admin.mode_photo")
            ] }),
            /* @__PURE__ */ o("button", { class: w === "dashboard" ? "active" : "", onClick: () => k("dashboard"), children: [
              /* @__PURE__ */ o(Xc, { size: 14 }),
              " ",
              d("admin.mode_dashboard")
            ] })
          ] }),
          /* @__PURE__ */ o("div", { class: "seg", children: [
            /* @__PURE__ */ o("button", { class: r === "landscape" ? "active" : "", onClick: () => f("landscape"), children: [
              /* @__PURE__ */ o(ar, { size: 14 }),
              " ",
              d("admin.landscape")
            ] }),
            /* @__PURE__ */ o("button", { class: r === "portrait" ? "active" : "", onClick: () => f("portrait"), children: [
              /* @__PURE__ */ o(mr, { size: 14 }),
              " ",
              d("admin.portrait")
            ] })
          ] }),
          w === "photo" && /* @__PURE__ */ o("label", { class: "check", children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                checked: !!h[r],
                onChange: (_) => b(_.currentTarget.checked ? Ea(kt(), r === "landscape") : null)
              }
            ),
            d("admin.use_grid")
          ] }),
          /* @__PURE__ */ o("span", { class: "hint small", children: [
            O.w,
            "×",
            O.h,
            X ? "" : " · " + d("admin.size_guess")
          ] })
        ] }),
        w === "dashboard" && /* @__PURE__ */ o(U, { children: [
          /* @__PURE__ */ o("p", { class: "hint small", children: d("admin.dashboard_hint") }),
          /* @__PURE__ */ o(k8, { disp: O })
        ] }),
        w === "photo" && /* @__PURE__ */ o(U, { children: [
          /* @__PURE__ */ o("div", { class: "admin-screen-wrap", children: /* @__PURE__ */ o("div", { class: "admin-screen", style: { aspectRatio: O.w + " / " + O.h, ...O.h > O.w ? { height: "60vh" } : { width: "100%" } }, children: M ? /* @__PURE__ */ o(U, { children: [
            ["clock", "widgets"].map((_) => {
              const j = M[_];
              return /* @__PURE__ */ o("div", { class: "admin-block admin-" + _, style: {
                left: Pe + j.x / K * ve + "%",
                top: Pe + j.y / K * ve + "%",
                width: j.w / K * ve + "%",
                height: j.h / K * ve + "%"
              }, children: _ === "clock" ? "12:00" : "◉ ◉ ◉" }, _);
            }),
            /* @__PURE__ */ o(
              X2,
              {
                grid: M,
                onDraft: l,
                onDone: (_) => {
                  l(null), b(_);
                },
                onTap: (_) => p(_)
              }
            )
          ] }) : /* @__PURE__ */ o("p", { class: "admin-off", children: d("admin.no_grid") }) }) }),
          M && V && /* @__PURE__ */ o("div", { class: "admin-align", children: [
            /* @__PURE__ */ o("div", { class: "seg", children: [
              /* @__PURE__ */ o("button", { class: u === "clock" ? "active" : "", onClick: () => p("clock"), children: d("lock.clock") }),
              /* @__PURE__ */ o("button", { class: u === "widgets" ? "active" : "", onClick: () => p("widgets"), children: d("lock.widgets") })
            ] }),
            /* @__PURE__ */ o("div", { class: "option", children: [
              /* @__PURE__ */ o("label", { children: d("lock.align_h") }),
              /* @__PURE__ */ o("div", { class: "seg", children: ["", "left", "center", "right"].map((_) => /* @__PURE__ */ o("button", { class: (V.ha || "") === _ ? "active" : "", onClick: () => le({ ha: _ || void 0 }), children: d("lock.align." + (_ || "auto")) }, _)) })
            ] }),
            /* @__PURE__ */ o("div", { class: "option", children: [
              /* @__PURE__ */ o("label", { children: d("lock.align_v") }),
              /* @__PURE__ */ o("div", { class: "seg", children: ["", "top", "middle", "bottom"].map((_) => /* @__PURE__ */ o("button", { class: (V.va || "") === _ ? "active" : "", onClick: () => le({ va: _ || void 0 }), children: d("lock.align." + (_ || "auto")) }, _)) })
            ] })
          ] }),
          B && /* @__PURE__ */ o("div", { class: "admin-copy", children: [
            /* @__PURE__ */ o("div", { class: "seg", children: [
              /* @__PURE__ */ o("button", { class: se === "all" ? "active" : "", onClick: () => N("all"), children: d("admin.copy_all") }),
              /* @__PURE__ */ o("button", { class: se === "grid" ? "active" : "", onClick: () => N("grid"), children: d("admin.copy_grid") })
            ] }),
            se === "all" && !E.lockscreen && /* @__PURE__ */ o("p", { class: "hint small", children: d("admin.copy_no_look") }),
            W.map((_) => /* @__PURE__ */ o("label", { class: "check", children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  checked: R.indexOf(_.frame_id) !== -1,
                  onChange: (j) => Z(j.currentTarget.checked ? R.concat(_.frame_id) : R.filter((Q) => Q !== _.frame_id))
                }
              ),
              (_.name || _.frame_id) + (_.online ? "" : " · " + d("layout.grid_offline"))
            ] }, _.frame_id)),
            !W.length && /* @__PURE__ */ o("p", { class: "hint small", children: d("admin.copy_none") }),
            /* @__PURE__ */ o("div", { class: "row-btns", children: [
              /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => T(!1), children: /* @__PURE__ */ o("span", { children: d("common.cancel") }) }),
              /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", disabled: !R.length, onClick: D, children: d("admin.copy_go", { n: R.length }) })
            ] })
          ] }),
          /* @__PURE__ */ o("div", { class: "admin-foot", children: [
            /* @__PURE__ */ o("span", { class: "hint small", children: g }),
            /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => T(!B), children: /* @__PURE__ */ o("span", { children: d("admin.copy_to") }) }),
            /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: P, children: d("admin.save") })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const z8 = ':host{display:block;min-height:100vh;background:#0b0d14;color:#f5f7fb;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif}.admin{max-width:1200px;margin:0 auto;padding:16px 20px}.admin-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.admin-head h1{font-size:22px;font-weight:600;margin:0}.admin-body{display:flex;align-items:flex-start}.admin-list{width:230px;flex-shrink:0;margin-right:18px;display:flex;flex-direction:column}.admin-frame{display:flex;align-items:center;flex-wrap:wrap;text-align:left;padding:10px 12px;border-radius:12px;margin-bottom:6px;background:rgba(255,255,255,0.05)}.admin-frame.on{background:rgba(125,211,252,0.18)}.admin-frame .dot{width:8px;height:8px;border-radius:50%;background:#64748b;margin-right:8px}.admin-frame .dot.online{background:#4ade80}.admin-frame-name{flex:1;font-size:14px}.admin-frame small{width:100%;padding-left:16px;color:rgba(255,255,255,0.5);font-size:11px}.admin-editor{flex:1;min-width:0}.admin-tools{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:12px}.admin-tools > *{margin-right:14px}.admin-screen-wrap{display:flex;justify-content:center}.admin-screen{position:relative;max-width:100%;max-height:70vh;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#1e3a5f,#3b2f5c 50%,#5c3a2f);box-shadow:0 0 0 1px rgba(255,255,255,0.15)}.admin-block{position:absolute;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.75);font-size:20px;pointer-events:none}.admin-off{position:absolute;top:50%;left:0;right:0;text-align:center;color:rgba(255,255,255,0.6)}.admin-align{margin-top:14px;max-width:560px}.admin-iframe-box{position:relative;overflow:hidden;border-radius:14px;box-shadow:0 0 0 1px rgba(255,255,255,0.15);background:#000}.admin-iframe-box iframe{position:absolute;top:0;left:0;border:0;transform-origin:0 0}.admin-foot{display:flex;align-items:center;justify-content:flex-end;margin-top:16px}.admin-foot .hint{margin-right:12px}.admin-foot .btn{margin-right:10px}.admin-copy{margin-top:16px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.05);max-width:560px}.admin-copy .check{display:flex;margin:8px 0}.admin-copy .row-btns{display:flex;justify-content:flex-end;margin-top:10px}.admin-copy .row-btns > *{margin-left:8px}@media (max-width:700px){.admin-body{flex-direction:column}.admin-list{width:100%;margin:0 0 14px}}';
class M8 extends HTMLElement {
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
    n.textContent = z8 + ta.replace(":root {", ":host {");
    const a = document.createElement("div");
    e.appendChild(n), e.appendChild(a), this.root = a, n1(/* @__PURE__ */ o(_8, { hass: this._hass }), a);
  }
}
customElements.get("photoframe-admin") || customElements.define("photoframe-admin", M8);
const C8 = ':host{display:block;position:relative;height:calc(100vh - var(--header-height, 56px));min-height:420px;overflow:hidden;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif;color:#f5f7fb;background:#000;border-radius:var(--ha-card-border-radius,0)}#app{position:absolute;top:0;left:0;right:0;bottom:0}';
class L8 extends HTMLElement {
  constructor() {
    super(...arguments), this.client = new A8(), this.backend = null, this.config = { type: "custom:photoframe-card" }, this.root = null, this.exitKiosk = null, this.offKiosk = null, this.offIntegration = null;
  }
  // Включить/выключить киоск по текущим настройкам. Фронтенд HA дорисовывается не сразу —
  // поэтому вызывается и при монтировании, и при каждом обновлении hass, пока не получится.
  syncKiosk() {
    const e = this.config.kiosk != null ? this.config.kiosk : !!(this.backend && this.backend.integration && this.backend.config.kiosk), n = this.isConnected && zd(!!e);
    n && !this.exitKiosk && (this.exitKiosk = Sd()), !n && this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null);
  }
  setConfig(e) {
    this.config = e, this.backend && !this.backend.integration && (this.backend.config = e, ne.applyCardConfig(e)), this.syncKiosk();
  }
  set hass(e) {
    this.client.setHass(e), this.syncKiosk(), this.backend || (this.backend = new ln(this.client, this.config), ne.attachCard(this.backend), va(this.client).then((n) => {
      if (!n) return;
      const a = new ln(this.client, n, void 0, !1, !0);
      this.backend = a, ne.attachCard(a), this.isConnected && !this.offIntegration && (this.offIntegration = a.watch((i) => ne.applyCardConfig(i))), this.syncKiosk();
    })), this.mount();
  }
  connectedCallback() {
    const e = this.backend;
    e && e.integration && !this.offIntegration && (this.offIntegration = e.watch((n) => ne.applyCardConfig(n))), this.mount(), this.offKiosk = _d(() => this.syncKiosk()), this.syncKiosk();
  }
  disconnectedCallback() {
    this.root && n1(null, this.root), this.root = null, this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null), this.offKiosk && (this.offKiosk(), this.offKiosk = null), this.offIntegration && (this.offIntegration(), this.offIntegration = null);
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
    n.textContent = C8 + ta;
    const a = document.createElement("div");
    a.id = "app", e.appendChild(n), e.appendChild(a), this.root = a, n1(/* @__PURE__ */ o(u8, {}), a), v8();
  }
}
customElements.get("photoframe-card") || customElements.define("photoframe-card", L8);
console.info("%c PHOTO-FRAME %c v1.0.0 ", "color:#fff;background:#0891b2;font-weight:700", "color:#0891b2;background:#fff");
ec();
const w1 = window;
w1.customCards = w1.customCards || [];
w1.customCards.push({
  type: "photoframe-card",
  name: "Smart Frame",
  description: "Photo frame with smart-home controls: photos, clock, weather and customizable cards",
  preview: !1
});
