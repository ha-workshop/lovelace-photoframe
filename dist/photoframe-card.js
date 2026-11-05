var On, oe, Ei, Qe, xa, Ii, Ni, Jn, nn, zt, Di, Ko, Eo, Io, Ti, An = {}, gn = [], Gc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Yt = Array.isArray;
function Oe(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function ea(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function bn(e, t, n) {
  var a, i, c, s = {};
  for (c in t) c == "key" ? a = t[c] : c == "ref" ? i = t[c] : s[c] = t[c];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? On.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (c in e.defaultProps) s[c] === void 0 && (s[c] = e.defaultProps[c]);
  return on(e, s, a, i, null);
}
function on(e, t, n, a, i) {
  var c = { type: e, props: t, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Ei, __i: -1, __u: 0 };
  return i == null && oe.vnode != null && oe.vnode(c), c;
}
function ne(e) {
  return e.children;
}
function an(e, t) {
  this.props = e, this.context = t;
}
function tt(e, t) {
  if (t == null) return e.__ ? tt(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? tt(e) : null;
}
function Xc(e) {
  if (e.__P && e.__d) {
    var t = e.__v, n = t.__e, a = [], i = [], c = Oe({}, t);
    c.__v = t.__v + 1, oe.vnode && oe.vnode(c), ta(e.__P, c, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, a, n ?? tt(t), !!(32 & t.__u), i), c.__v = t.__v, c.__.__k[c.__i] = c, Ri(a, c, i), t.__e = t.__ = null, c.__e != n && Bi(c);
  }
}
function Bi(e) {
  if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
    if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
  }), Bi(e);
}
function No(e) {
  (!e.__d && (e.__d = !0) && Qe.push(e) && !vn.__r++ || xa != oe.debounceRendering) && ((xa = oe.debounceRendering) || Ii)(vn);
}
function vn() {
  try {
    for (var e, t = 1; Qe.length; ) Qe.length > t && Qe.sort(Ni), e = Qe.shift(), t = Qe.length, Xc(e);
  } finally {
    Qe.length = vn.__r = 0;
  }
}
function Pi(e, t, n, a, i, c, s, l, f, h, u) {
  var p, r, m, A, w, b, z = a && a.__k || gn, v = t.length;
  for (f = Zc(n, t, z, f, v), p = 0; p < v; p++) (m = n.__k[p]) != null && (r = m.__i != -1 && z[m.__i] || An, m.__i = p, b = ta(e, m, r, i, c, s, l, f, h, u), A = m.__e, m.ref && r.ref != m.ref && (r.ref && na(r.ref, null, m), u.push(m.ref, m.__c || A, m)), w == null && A != null && (w = A), 4 & m.__u ? (f = Oi(m, f, e), r.__e && (r.__e = null)) : typeof m.type == "function" && b !== void 0 ? f = b : A && (f = A.nextSibling), m.__u &= -7);
  return n.__e = w, f;
}
function Zc(e, t, n, a, i) {
  var c, s, l, f, h, u = n.length, p = u, r = 0;
  for (e.__k = new Array(i), c = 0; c < i; c++) (s = t[c]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = e.__k[c] = on(null, s, null, null, null) : Yt(s) ? s = e.__k[c] = on(ne, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = e.__k[c] = on(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : e.__k[c] = s, f = c + r, s.__ = e, s.__b = e.__b + 1, l = null, (h = s.__i = $c(s, n, f, p)) != -1 && (p--, (l = n[h]) && (l.__u |= 2)), l == null || l.__v == null ? (h == -1 && (i > u ? r-- : i < u && r++), typeof s.type != "function" && (s.__u |= 4)) : h != f && (h == f - 1 ? r-- : h == f + 1 ? r++ : (h > f ? r-- : r++, s.__u |= 4))) : e.__k[c] = null;
  if (p) for (c = 0; c < u; c++) (l = n[c]) != null && (2 & l.__u) == 0 && (l.__e == a && (a = tt(l)), qi(l, l));
  return a;
}
function Oi(e, t, n) {
  var a, i;
  if (typeof e.type == "function") {
    for (a = e.__k, i = 0; a && i < a.length; i++) a[i] && (a[i].__ = e, t = Oi(a[i], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !t.parentNode && (t = tt(e)), t = n.insertBefore(e.__e, t || null));
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Hi(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (Yt(e) ? e.some(function(n) {
    Hi(n, t);
  }) : t.push(e)), t;
}
function $c(e, t, n, a) {
  var i, c, s, l = e.key, f = e.type, h = t[n], u = h != null && (2 & h.__u) == 0;
  if (h === null && l == null || u && l == h.key && f == h.type) return n;
  if (a > (u ? 1 : 0)) {
    for (i = n - 1, c = n + 1; i >= 0 || c < t.length; ) if ((h = t[s = i >= 0 ? i-- : c++]) != null && (2 & h.__u) == 0 && l == h.key && f == h.type) return s;
  }
  return -1;
}
function ya(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Gc.test(t) ? n : n + "px";
}
function Gt(e, t, n, a, i) {
  var c, s;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof a == "string" && (e.style.cssText = a = ""), a) for (t in a) n && t in n || ya(e.style, t, "");
    if (n) for (t in n) a && n[t] == a[t] || ya(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") c = t != (t = t.replace(Di, "$1")), s = t.toLowerCase(), t = s in e || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + c] = n, n ? a ? n[zt] = a[zt] : (n[zt] = Ko, e.addEventListener(t, c ? Io : Eo, c)) : e.removeEventListener(t, c ? Io : Eo, c);
  else {
    if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function wa(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t[nn] == null) t[nn] = Ko++;
      else if (t[nn] < n[zt]) return;
      return n(oe.event ? oe.event(t) : t);
    }
  };
}
function ta(e, t, n, a, i, c, s, l, f, h) {
  var u, p, r, m, A, w, b, z, v, y, N, M, D, g, E, x, C = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (f = !!(32 & n.__u), c = [l = t.__e = n.__e]), (u = oe.__b) && u(t);
  e: if (typeof C == "function") {
    p = s.length;
    try {
      if (v = t.props, y = C.prototype && C.prototype.render, N = (u = C.contextType) && a[u.__c], M = u ? N ? N.props.value : u.__ : a, n.__c ? z = (r = t.__c = n.__c).__ = r.__E : (y ? t.__c = r = new C(v, M) : (t.__c = r = new an(v, M), r.constructor = C, r.render = Kc), N && N.sub(r), r.state || (r.state = {}), r.__n = a, m = r.__d = !0, r.__h = [], r._sb = []), y && r.__s == null && (r.__s = r.state), y && C.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = Oe({}, r.__s)), Oe(r.__s, C.getDerivedStateFromProps(v, r.__s))), A = r.props, w = r.state, r.__v = t, m) y && C.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), y && r.componentDidMount != null && r.__h.push(r.componentDidMount);
      else {
        if (y && C.getDerivedStateFromProps == null && v !== A && r.componentWillReceiveProps != null && r.componentWillReceiveProps(v, M), t.__v == n.__v || !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(v, r.__s, M) === !1) {
          t.__v != n.__v && (r.props = v, r.state = r.__s, r.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(L) {
            L && (L.__ = t);
          }), gn.push.apply(r.__h, r._sb), r._sb = [], r.__h.length && s.push(r), l = tt(n);
          break e;
        }
        r.componentWillUpdate != null && r.componentWillUpdate(v, r.__s, M), y && r.componentDidUpdate != null && r.__h.push(function() {
          r.componentDidUpdate(A, w, b);
        });
      }
      if (r.context = M, r.props = v, r.__P = e, r.__e = !1, D = oe.__r, g = 0, y) r.state = r.__s, r.__d = !1, D && D(t), u = r.render(r.props, r.state, r.context), gn.push.apply(r.__h, r._sb), r._sb = [];
      else do
        r.__d = !1, D && D(t), u = r.render(r.props, r.state, r.context), r.state = r.__s;
      while (r.__d && ++g < 25);
      r.state = r.__s, r.getChildContext != null && (a = Oe(Oe({}, a), r.getChildContext())), y && !m && r.getSnapshotBeforeUpdate != null && (b = r.getSnapshotBeforeUpdate(A, w)), E = u != null && u.type === ne && u.key == null ? ji(u.props.children) : u, l = Pi(e, Yt(E) ? E : [E], t, n, a, i, c, s, l, f, h), r.base = t.__e, t.__u &= -161, r.__h.length && s.push(r), z && (r.__E = r.__ = null);
    } catch (L) {
      if (s.length = p, t.__v = null, f || c != null) {
        if (L.then) {
          for (t.__u |= f ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
          c != null && (c[c.indexOf(l)] = null), t.__e = l;
        } else if (c != null) for (x = c.length; x--; ) ea(c[x]);
      } else t.__e = n.__e;
      t.__k == null && (t.__k = n.__k || []), L.then || Fi(t), oe.__e(L, t, n);
    }
  } else c == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : l = t.__e = Jc(n.__e, t, n, a, i, c, s, f, h);
  return (u = oe.diffed) && u(t), 128 & t.__u ? void 0 : l;
}
function Fi(e) {
  e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(Fi));
}
function Ri(e, t, n) {
  for (var a = 0; a < n.length; a++) na(n[a], n[++a], n[++a]);
  oe.__c && oe.__c(t, e), e.some(function(i) {
    try {
      e = i.__h, i.__h = [], e.some(function(c) {
        c.call(i);
      });
    } catch (c) {
      oe.__e(c, i.__v);
    }
  });
}
function ji(e) {
  return typeof e != "object" || e == null || e.__b > 0 ? e : Yt(e) ? e.map(ji) : e.constructor !== void 0 ? null : Oe({}, e);
}
function Jc(e, t, n, a, i, c, s, l, f) {
  var h, u, p, r, m, A, w, b = n.props || An, z = t.props, v = t.type;
  if (v == "svg" ? i = "http://www.w3.org/2000/svg" : v == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), c != null) {
    for (h = 0; h < c.length; h++) if ((m = c[h]) && "setAttribute" in m == !!v && (v ? m.localName == v : m.nodeType == 3)) {
      e = m, c[h] = null;
      break;
    }
  }
  if (e == null) {
    if (v == null) return document.createTextNode(z);
    e = document.createElementNS(i, v, z.is && z), l && (oe.__m && oe.__m(t, c), l = !1), c = null;
  }
  if (v == null) b === z || l && e.data == z || (e.data = z);
  else {
    if (c = v == "textarea" && z.defaultValue != null ? null : c && On.call(e.childNodes), !l && c != null) for (b = {}, h = 0; h < e.attributes.length; h++) b[(m = e.attributes[h]).name] = m.value;
    for (h in b) m = b[h], h == "dangerouslySetInnerHTML" ? p = m : h == "children" || h in z || h == "value" && "defaultValue" in z || h == "checked" && "defaultChecked" in z || Gt(e, h, null, m, i);
    for (h in z) m = z[h], h == "children" ? r = m : h == "dangerouslySetInnerHTML" ? u = m : h == "value" ? A = m : h == "checked" ? w = m : l && typeof m != "function" || b[h] === m || Gt(e, h, m, b[h], i);
    if (u) l || p && (u.__html == p.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
    else if (p && (e.innerHTML = ""), Pi(t.type == "template" ? e.content : e, Yt(r) ? r : [r], t, n, a, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, c, s, c ? c[0] : n.__k && tt(n, 0), l, f), c != null) for (h = c.length; h--; ) ea(c[h]);
    l && v != "textarea" || (h = "value", v == "progress" && A == null ? e.removeAttribute("value") : A != null && (A !== e[h] || v == "progress" && !A || v == "option" && A != b[h]) && Gt(e, h, A, b[h], i), h = "checked", w != null && w != e[h] && Gt(e, h, w, b[h], i));
  }
  return e;
}
function na(e, t, n) {
  try {
    if (typeof e == "function") {
      var a = typeof e.__u == "function";
      a && e.__u(), a && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (i) {
    oe.__e(i, n);
  }
}
function qi(e, t, n) {
  var a, i;
  if (oe.unmount && oe.unmount(e), (a = e.ref) && (a.current && a.current != e.__e || na(a, null, t)), (a = e.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (c) {
      oe.__e(c, t);
    }
    a.base = a.__P = a.__n = null;
  }
  if (a = e.__k) for (i = 0; i < a.length; i++) a[i] && qi(a[i], t, n || typeof e.type != "function");
  n || ea(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Kc(e, t, n) {
  return this.constructor(e, n);
}
function Do(e, t, n) {
  var a, i, c, s;
  t == document && (t = document.documentElement), oe.__ && oe.__(e, t), i = (a = !1) ? null : t.__k, c = [], s = [], ta(t, e = t.__k = bn(ne, null, [e]), i || An, An, t.namespaceURI, i ? null : t.firstChild ? On.call(t.childNodes) : null, c, i ? i.__e : t.firstChild, a, s), Ri(c, e, s), e.props.children = null;
}
function Hn(e) {
  function t(n) {
    var a, i;
    return this.getChildContext || (a = /* @__PURE__ */ new Set(), (i = {})[t.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      a = null;
    }, this.shouldComponentUpdate = function(c) {
      this.props.value != c.value && a.forEach(function(s) {
        s.__e = !0, No(s);
      });
    }, this.sub = function(c) {
      a.add(c);
      var s = c.componentWillUnmount;
      c.componentWillUnmount = function() {
        a && a.delete(c), s && s.call(c);
      };
    }), n.children;
  }
  return t.__c = "__cC" + Ti++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(n, a) {
    return n.children(a);
  }).contextType = t, t;
}
On = gn.slice, oe = { __e: function(e, t, n, a) {
  for (var i, c, s; t = t.__; ) if ((i = t.__c) && !i.__) try {
    if ((c = i.constructor) && c.getDerivedStateFromError != null && (i.setState(c.getDerivedStateFromError(e)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, a || {}), s = i.__d), s) return i.__E = i;
  } catch (l) {
    e = l;
  }
  throw e;
} }, Ei = 0, an.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Oe({}, this.state), typeof e == "function" && (e = e(Oe({}, n), this.props)), e && Oe(n, e), e != null && this.__v && (t && this._sb.push(t), No(this));
}, an.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), No(this));
}, an.prototype.render = ne, Qe = [], Ii = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ni = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, vn.__r = 0, Jn = Math.random().toString(8), nn = "__d" + Jn, zt = "__a" + Jn, Di = /(PointerCapture)$|Capture$/i, Ko = 0, Eo = wa(!1), Io = wa(!0), Ti = 0;
var e2 = 0;
function o(e, t, n, a, i, c) {
  t || (t = {});
  var s, l, f = t;
  if ("ref" in f) for (l in f = {}, t) l == "ref" ? s = t[l] : f[l] = t[l];
  var h = { type: e, props: f, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --e2, __i: -1, __u: 0, __source: i, __self: c };
  if (typeof e == "function" && (s = e.defaultProps)) for (l in s) f[l] === void 0 && (f[l] = s[l]);
  return oe.vnode && oe.vnode(h), h;
}
const Qi = ':root{--ink: #f5f7fb;--ink-2: rgba(245, 247, 251, .72);--ink-3: rgba(245, 247, 251, .48);--panel: rgba(12, 14, 22, .42);--panel-line: rgba(255, 255, 255, .09);--chip: rgba(255, 255, 255, .1);--chip-line: rgba(255, 255, 255, .14);--warm: #fbbf24;--red: #fb7185;--green: #34d399;--ease: cubic-bezier(.2, .7, .2, 1)}*{box-sizing:border-box;margin:0;padding:0;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}html,body,#app{height:100%}html.standalone:not(.doc-scroll),html.standalone:not(.doc-scroll) body,html.standalone:not(.doc-scroll) #app,html.standalone:not(.doc-scroll) .root,html.standalone:not(.doc-scroll) .app{height:100vh}html.standalone,html.standalone body,html.standalone.doc-scroll,html.standalone.doc-scroll body{min-height:100vh}html.standalone.scroll-lock,html.standalone.scroll-lock body{height:100vh}html.standalone .modal,html.standalone .sheet-layer,html.standalone .atv{bottom:auto;height:100vh}body{background:#000;color:#f5f7fb;overflow:hidden;font-family:Inter,Roboto,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}button,input,select{font:inherit;color:inherit;border:0;background:none;outline:none}button{cursor:pointer}svg{display:block;flex-shrink:0}.app{position:relative;height:100%;overflow:hidden}.native-photos body,.native-photos .backdrop{background:transparent}.backdrop{position:absolute;inset:0;overflow:hidden}.pwa .backdrop{position:fixed}.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transform:scale(1);transition:opacity 2s ease-in-out,transform 20s linear}.slide.active{opacity:1;transform:scale(1.08)}.slide.contain,.slide.contain.active{transform:none;background:#000}.slide-glow{position:absolute;inset:-6%;background-size:cover;background-position:center;opacity:.75}.slide-photo{position:absolute;inset:0;background-size:contain;background-position:center;background-repeat:no-repeat}.q-full .slide-glow{-webkit-filter:blur(28px) saturate(1.3);filter:blur(28px) saturate(1.3)}.aurora{background:radial-gradient(ellipse at 20% 30%,rgba(56,189,248,.35) 0%,transparent 55%),radial-gradient(ellipse at 80% 70%,rgba(168,85,247,.32) 0%,transparent 55%),radial-gradient(ellipse at 60% 10%,rgba(251,191,36,.18) 0%,transparent 50%),#05060c}.soft{position:absolute;inset:-5%;background-size:cover;background-position:center;opacity:0;transition:opacity .6s cubic-bezier(.2,.7,.2,1)}.soft.on{opacity:1}.shade{position:absolute;inset:0;background:linear-gradient(to bottom,#00000040,#0000 30%,#00000026 55%,#000000b3);transition:background-color .6s cubic-bezier(.2,.7,.2,1)}.shade.deep{background-color:#04060c61}@supports (backdrop-filter: blur(1px)){.q-full .shade{backdrop-filter:blur(0px) saturate(1);transition:background-color .6s cubic-bezier(.2,.7,.2,1),backdrop-filter .6s cubic-bezier(.2,.7,.2,1)}.q-full .shade.deep{backdrop-filter:blur(28px) saturate(1.2)}.q-full .soft{display:none}.native-photos .shade{backdrop-filter:none!important}}.ambient{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;padding:0 5vw 9vh;padding-left:max(5vw,env(safe-area-inset-left));padding-right:max(5vw,env(safe-area-inset-right));padding-bottom:max(9vh,env(safe-area-inset-bottom));transform:translateY(-100%);pointer-events:none}.ambient.visible{transform:none}.clock-link{pointer-events:auto;cursor:pointer}.ambient-clock{text-shadow:0 2px 30px rgba(0,0,0,.35)}.ambient-time{font-size:22vh;font-weight:200;letter-spacing:-.04em;line-height:.9}.ambient-date{margin-top:2vh;font-size:3vh;font-weight:400;color:#f5f7fbb8;letter-spacing:.01em}.glances{display:flex;flex-wrap:wrap;justify-content:flex-end;max-width:50%;margin-bottom:1vh}.glance{pointer-events:auto;cursor:pointer;transition:transform .15s,background .2s;display:flex;align-items:center;margin:6px 0 0 8px;padding:9px 16px 9px 13px;border-radius:999px;background:#00000052;border:1px solid rgba(255,255,255,.14);font-size:15px;font-weight:500;color:#f5f7fb}.glance:active{transform:scale(.94);background:#00000080}.glance svg{margin-right:8px;color:#f5f7fbb8}.glance.lit svg{color:#fbbf24}.glance.alert{background:#e11d488c;border-color:#fb718599}.glance.alert svg,.glance.warn svg{color:#fff}.glance.warn{background:#d9770680}.ambient{transition:transform .5s cubic-bezier(.2,.7,.2,1),opacity .4s ease}.home-hint{position:absolute;left:50%;bottom:1.5vh;bottom:max(1.5vh,env(safe-area-inset-bottom),20px);transform:translate(-50%);display:flex;padding:6px 24px;background:none;border:0;color:#f5f7fb;opacity:0;pointer-events:none;transition:opacity .6s ease,color 1.2s ease}.home-hint.visible{opacity:1;pointer-events:auto}.home-hint svg{-webkit-filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));-webkit-animation:nudge 2.4s ease-in-out infinite;animation:nudge 2.4s ease-in-out infinite}.home-hint.text-contrast.ink-dark svg{-webkit-filter:drop-shadow(0 1px 6px rgba(255,255,255,.6));filter:drop-shadow(0 1px 6px rgba(255,255,255,.6))}.ambient.customizing .home-hint{display:none}.q-lite .home-hint svg{-webkit-animation:none;animation:none}@-webkit-keyframes nudge{0%,60%,to{-webkit-transform:translateY(0)}30%{-webkit-transform:translateY(-5px)}}@keyframes nudge{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-5px)}}.photo-step{position:absolute;top:50%;width:72px;height:72px;margin-top:-36px;border-radius:50%;display:flex;align-items:center;justify-content:center;pointer-events:none;color:#fff;background:#00000059;opacity:0;-webkit-animation:photo-step .7s ease-out;animation:photo-step .7s ease-out}.photo-step.next{right:3vw}.photo-step.prev{left:3vw;-webkit-animation-name:photo-step-prev;animation-name:photo-step-prev}@-webkit-keyframes photo-step{0%{opacity:0;-webkit-transform:translateX(16px) scale(.8)}30%{opacity:1;-webkit-transform:translateX(0) scale(1)}to{opacity:0;-webkit-transform:translateX(-8px) scale(1)}}@keyframes photo-step{0%{opacity:0;transform:translate(16px) scale(.8)}30%{opacity:1;transform:translate(0) scale(1)}to{opacity:0;transform:translate(-8px) scale(1)}}@-webkit-keyframes photo-step-prev{0%{opacity:0;-webkit-transform:translateX(-16px) scale(.8)}30%{opacity:1;-webkit-transform:translateX(0) scale(1)}to{opacity:0;-webkit-transform:translateX(8px) scale(1)}}@keyframes photo-step-prev{0%{opacity:0;transform:translate(-16px) scale(.8)}30%{opacity:1;transform:translate(0) scale(1)}to{opacity:0;transform:translate(8px) scale(1)}}.dragging .ambient,.dragging .controls,.dragging .soft{transition:none}.dragging .controls{pointer-events:none}.controls{position:absolute;inset:0;display:flex;flex-direction:column;padding:0 28px 28px;padding-left:max(28px,env(safe-area-inset-left));padding-right:max(28px,env(safe-area-inset-right));padding-bottom:max(28px,env(safe-area-inset-bottom));opacity:0;transform:scale(.96);transition:opacity .5s cubic-bezier(.2,.7,.2,1),transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}.controls.visible{opacity:1;transform:none;pointer-events:auto}.bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.bar-time{display:flex;align-items:baseline}.bar-clock{font-size:38px;font-weight:300;letter-spacing:-.03em}.bar-date{margin-left:14px;font-size:15px;color:#f5f7fbb8}.bar-actions{display:flex;align-items:center}.conn{display:flex;align-items:center;margin-right:14px;font-size:13px;color:#f5f7fbb8}.conn i{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#fbbf24}.conn-connected i{background:#34d399;box-shadow:0 0 10px #34d399}.conn-auth_invalid i,.conn-disconnected i{background:#fb7185}.round{width:48px;height:48px;margin-left:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);transition:transform .15s}.round:active{transform:scale(.92)}.round.accent{background:#7dd3fc;color:#0b0d14;border-color:transparent}.bar{position:relative}.bar-narrow .bar-date{display:none}.bar-narrow .bar-clock{font-size:30px}.home-switch{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);transition:opacity .2s}.home-switch:active{transform:translate(-50%,-50%) scale(.96)}.bar-narrow.menu-open .home-switch{opacity:0;pointer-events:none}.bar-narrow.bar-editing .home-switch{display:none}.burger{position:relative;display:flex;align-items:center}.burger-items{position:absolute;right:58px;top:0;display:flex;align-items:center;opacity:0;pointer-events:none;transform:translate(24px);transition:opacity .22s cubic-bezier(.2,.7,.2,1),transform .22s cubic-bezier(.2,.7,.2,1)}.menu-open .burger-items{opacity:1;pointer-events:auto;transform:none}.burger-btn{position:relative}.burger-dot{position:absolute;top:4px;right:4px;width:8px;height:8px;border-radius:50%;background:#fbbf24}.burger-btn.conn-connected .burger-dot{background:#34d399}.burger-btn.conn-auth_invalid .burger-dot,.burger-btn.conn-disconnected .burger-dot{background:#fb7185}.grid{position:relative;flex:1;min-height:0;margin:-16px;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.grid::-webkit-scrollbar{display:none}.grid-inner{position:relative}.cell{position:absolute;display:flex;transition:left .22s cubic-bezier(.2,.7,.2,1),top .22s cubic-bezier(.2,.7,.2,1),width .22s cubic-bezier(.2,.7,.2,1),height .22s cubic-bezier(.2,.7,.2,1)}.grid-flow{display:grid;grid-auto-rows:auto;align-items:stretch}.grid-flow .cell{position:relative;transition:none}.grid-flow .panel-body,.grid-flow .lights{flex:none;min-height:0;overflow:visible}.cell.dragged{z-index:20;transition:none;-webkit-animation:none;animation:none}.cell.dragged .panel{box-shadow:0 30px 60px #0000008c;border-color:#ffffff80}.drop-slot{position:absolute;border-radius:28px;border:2px dashed rgba(255,255,255,.45);background:#ffffff14;transition:left .15s,top .15s,width .15s,height .15s}.grid-dots{position:absolute;inset:0}.grid-dot{position:absolute;border-radius:10px;background:#ffffff09}.grid-note{font-size:12px;color:#f5f7fb7a;padding:8px 16px 0}.hidden-cards{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.hidden-cards .muted{display:flex;align-items:center;margin-right:8px}.hidden-cards .muted svg{margin-right:4px}.hidden-cards .chip{display:flex;align-items:center;margin:0 6px 6px 0}.hidden-cards .chip svg{margin-right:4px}.editing .cell{cursor:move}.dragging-card,.dragging-card *{cursor:-webkit-grabbing;cursor:grabbing}.badge-btn{position:absolute;top:-8px;width:28px;height:28px;border-radius:50%;z-index:2;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.25);box-shadow:0 4px 12px #0006}.badge-del{left:-8px;background:#3f3f46;color:#fff}.badge-edit{right:-8px;background:#e5e7eb;color:#111}.resize-handle{position:absolute;right:2px;bottom:2px;width:30px;height:30px;cursor:nwse-resize;z-index:2;border-right:3px solid rgba(255,255,255,.85);border-bottom:3px solid rgba(255,255,255,.85);border-bottom-right-radius:24px}.size-tag{position:absolute;left:50%;bottom:10px;padding:3px 8px;border-radius:8px;z-index:2;transform:translate(-50%);background:#0000008c;font-size:11px;font-weight:600;color:#f5f7fbb8}.cell>.panel{flex:1;min-width:0}.panel-body{flex:1;min-height:0;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.panel-body::-webkit-scrollbar,.lights::-webkit-scrollbar{display:none}.card-empty{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;font-size:13px;color:#f5f7fb7a;padding:0 12px}.panel{display:flex;flex-direction:column;min-height:0;background:#0c0e166b;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:20px 22px;box-shadow:0 20px 50px #00000040}.panel-head{display:flex;align-items:center;justify-content:space-between;min-height:30px;margin-bottom:14px}.panel-title{display:flex;align-items:center;min-width:0}.panel-title h2{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.panel-icon{margin-right:8px;color:#f5f7fb7a}.panel-head h2{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#f5f7fbb8}.home-pane{flex:1;min-height:0;display:flex;flex-direction:column}.controls-head{display:flex;flex-direction:column;flex:none;padding-top:max(22px,calc(env(safe-area-inset-top) + 16px))}.screen-tabs{display:flex;align-items:center;overflow-x:auto;white-space:nowrap;margin:-8px 0 12px;padding-bottom:2px;-webkit-overflow-scrolling:touch}.screen-tab{display:inline-flex;flex-shrink:0;align-items:center;height:34px;padding:0 14px;margin-right:8px;border-radius:17px;font-size:14px;font-weight:500;color:#f5f7fb7a;background:#ffffff0f}.screen-tab.on{color:#f5f7fb;background:#ffffff29;font-weight:600}.screen-tab.add svg{margin-right:4px}.screen-tab.editing{padding:0 4px}.screen-tab input{width:auto;min-width:0;height:30px;padding:0 6px;border:0;border-radius:10px;background:transparent;color:#f5f7fb;font:inherit;text-align:center}.screen-tab input:focus{background:#00000040;outline:none}.screen-move,.screen-del{display:flex;align-items:center;justify-content:center;min-width:28px;height:28px;border-radius:14px;color:#f5f7fb7a}.screen-del.sure{padding:0 10px;background:#ef4444d9;color:#fff;font-size:13px}.slide-next{-webkit-animation:in-next .35s cubic-bezier(.2,.7,.2,1);animation:in-next .35s cubic-bezier(.2,.7,.2,1)}.slide-prev{-webkit-animation:in-prev .35s cubic-bezier(.2,.7,.2,1);animation:in-prev .35s cubic-bezier(.2,.7,.2,1)}@-webkit-keyframes in-next{0%{opacity:0;-webkit-transform:translateX(60px)}}@keyframes in-next{0%{opacity:0;transform:translate(60px)}}@-webkit-keyframes in-prev{0%{opacity:0;-webkit-transform:translateX(-60px)}}@keyframes in-prev{0%{opacity:0;transform:translate(-60px)}}.home-switch{display:flex;flex-direction:column;align-items:center;padding:6px 14px;border-radius:14px}.home-switch:active{background:#ffffff14}.home-name{font-size:15px;font-weight:600}.home-dots{display:flex;margin-top:5px}.home-dots i{width:6px;height:6px;border-radius:50%;margin:0 3px;background:#ffffff4d}.home-dots i.on{background:#fff}.editing .cell{-webkit-animation:jiggle .9s ease-in-out infinite;animation:jiggle .9s ease-in-out infinite}.editing div:nth-child(2n)>.cell{-webkit-animation-delay:-.45s;animation-delay:-.45s}.editing .cell .panel{border:1px dashed rgba(255,255,255,.35)}.editing .cell .panel-body{pointer-events:none;opacity:.45;overflow:hidden}.editing .cell{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:pan-y}@-webkit-keyframes jiggle{0%,to{-webkit-transform:rotate(-.35deg)}50%{-webkit-transform:rotate(.35deg)}}@keyframes jiggle{0%,to{transform:rotate(-.35deg)}50%{transform:rotate(.35deg)}}.icon-btn.danger{color:#fb7185}.pill-btn{margin-left:10px;display:flex;align-items:center;height:44px;padding:0 18px;border-radius:999px;color:#0b0d14;font-weight:600;background:#7dd3fc}.pill-btn svg{margin-right:6px}.rooms{flex:1;display:flex;flex-direction:column;justify-content:space-around}.rooms.compact .room{padding:4px 0}.rooms.compact .room-temp{font-size:28px}.rooms.compact .room-name{font-size:12px}.room{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.09)}.room:last-child{border-bottom:0}.room-name{font-size:14px;color:#f5f7fbb8}.room-vals{display:flex;align-items:baseline;justify-content:space-between;margin-top:2px}.room-temp{font-size:46px;font-weight:200;letter-spacing:-.03em;line-height:1.05}.room-temp sup{font-size:.5em;font-weight:300;vertical-align:top;position:relative;top:.25em;margin-left:2px;color:#7dd3fc}.room-hum{display:flex;align-items:center;font-size:15px;color:#f5f7fbb8}.room-hum svg{margin-right:4px;color:#7dd3fc}.chip-btn{display:flex;align-items:center;padding:7px 12px;border-radius:999px;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);font-size:13px;font-weight:500}.chip-btn svg{margin-right:6px}.lights{flex:1;min-height:0;display:grid;grid-gap:10px;gap:10px;grid-auto-rows:minmax(70px,1fr);align-content:stretch;overflow-y:auto;-webkit-overflow-scrolling:touch}.lights.cols-1{grid-template-columns:minmax(0,1fr)}.lights.cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lights.cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lights.cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lights.cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.lights.cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.lights.compact .light{padding:10px 12px}.lights.compact .light-icon{width:28px;height:28px;margin-bottom:5px}.lights.list{grid-auto-rows:minmax(36px,1fr)}.lights.list .light{flex-direction:row;align-items:center;justify-content:flex-start;padding:7px 10px;border-radius:14px}.lights.list .light-icon{width:28px;height:28px;margin:0 8px 0 0;flex-shrink:0}.lights.list .light-name{flex:0 1 auto;min-width:0;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lights.list .light-state{display:none}.light{width:auto;margin:0;min-height:0;min-width:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:14px;border-radius:20px;text-align:left;overflow:hidden;background:#ffffff0f;border:1px solid rgba(255,255,255,.07);transition:background .25s,border-color .25s,transform .15s,box-shadow .25s}.light:active{transform:scale(.96)}.light-icon{width:40px;height:40px;flex:0 0 auto;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;color:#f5f7fbb8;margin-bottom:10px;transition:background .25s,color .25s,box-shadow .25s}.light-name{align-self:stretch;flex:1 1 auto;font-size:15px;font-weight:500;line-height:1.2;min-width:0;min-height:0;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.lights.compact .light-name{font-size:13px;line-height:1.2;display:block;white-space:nowrap;text-overflow:ellipsis}.light-state{align-self:stretch;flex:0 0 auto;font-size:12px;color:#f5f7fb7a;margin-top:3px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:100%}.lights.compact .light-state{font-size:11px;margin-top:2px}.light.on{background:#fbbf2429;border-color:#fbbf2480;box-shadow:0 0 30px #fbbf241f}.light.on .light-icon{background:#fbbf24;color:#1a1205;box-shadow:0 0 22px #fbbf248c}.light.on .light-state{color:#f5f7fbb8}.light.na{opacity:.45}.seg{display:flex;background:#00000040;border-radius:999px;padding:3px}.seg button{padding:5px 12px;border-radius:999px;font-size:12px;font-weight:500;color:#f5f7fbb8}.seg .active{background:#ffffff24;color:#f5f7fb}.cam-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.seg-inline{align-self:flex-start;flex-shrink:0;max-width:100%;margin-bottom:10px;overflow-x:auto;-webkit-overflow-scrolling:touch}.seg-inline::-webkit-scrollbar{display:none}.seg-inline button{flex-shrink:0;white-space:nowrap}.seg-full{align-self:stretch}.seg-full button{flex:1 0 auto;text-align:center}.cam{position:relative;flex:1;min-height:120px;border-radius:18px;overflow:hidden;background:#00000073;cursor:pointer}.cam img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.cam-swipe{touch-action:pan-y}.cam-swipe img{-webkit-user-drag:none;user-select:none;-webkit-user-select:none}.cam.fit-width img{top:50%;height:auto;transform:translateY(-50%)}.cam.fit-height img{left:50%;width:auto;transform:translate(-50%)}.cam.fit-width,.cam.fit-height{background:#000}.cam-empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:13px}.cam-empty svg{margin-bottom:8px}.cam-loading{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#00000059;color:#f5f7fbb8;font-size:13px;pointer-events:none}.cam-paused{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0003;color:#fff;font-size:13px}.cam-paused span{margin-top:10px;color:#f5f7fbb8}.cam-play{width:62px;height:62px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#7dd3fce6;color:#0b0d14;box-shadow:0 8px 26px #00000073}.cam-play svg{margin-left:3px}.cam-play-center{position:absolute;left:50%;top:50%;width:48px;height:48px;margin:-24px 0 0 -24px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#0a0c1280;color:#fff;border:1px solid rgba(255,255,255,.28);box-shadow:0 4px 18px #0006}.cam-play-center svg{margin-left:3px}.cam-play-center:hover{background:#7dd3fceb;border-color:#7dd3fceb;color:#0b0d14}.cam-spinner{width:22px;height:22px;margin-bottom:8px;border-radius:50%;border:2px solid rgba(255,255,255,.2);border-top-color:#7dd3fc;-webkit-animation:cam-spin .8s linear infinite;animation:cam-spin .8s linear infinite}@-webkit-keyframes cam-spin{to{-webkit-transform:rotate(360deg)}}@keyframes cam-spin{to{transform:rotate(360deg)}}.live{position:absolute;top:10px;left:10px;display:flex;align-items:center;padding:3px 8px;border-radius:6px;background:#00000080;font-size:10px;font-weight:700;letter-spacing:.08em}.live i{width:6px;height:6px;border-radius:50%;background:#fb7185;margin-right:5px;-webkit-animation:pulse 1.6s infinite;animation:pulse 1.6s infinite}@-webkit-keyframes pulse{50%{opacity:.3}}@keyframes pulse{50%{opacity:.3}}.status-row{display:flex;align-items:center;padding:10px 0;color:#f5f7fbb8}.status-row+.status-row{border-top:1px solid rgba(255,255,255,.09)}.status-icon{width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#34d39926;color:#34d399;margin-right:12px}.status-text{flex:1;display:flex;flex-direction:column;min-width:0}.status-text b{font-size:14px;font-weight:500;color:#f5f7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.status-text small{font-size:12px;color:#f5f7fb7a;margin-top:2px}.status-row.alert .status-icon{background:#fb718533;color:#fb7185}.status-row.alert small{color:#fb7185}.sheet-layer{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 5vw 9vh;padding-bottom:calc(9vh + 56px);background:linear-gradient(to top,#00000059,#0000 60%);-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease}.sheet{position:relative;width:460px;max-width:100%;max-height:72vh;overflow:hidden;border-radius:30px;border:1px solid rgba(255,255,255,.16);box-shadow:0 30px 80px #00000073;transform-origin:100% 100%;-webkit-animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1);animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1)}.sheet-wide{width:640px}.sheet .lights{overflow:visible}.sheet-cameras .cam{height:300px;flex:none}.sheet-glass{position:absolute;inset:0;overflow:hidden;background:#10131c}.glass-layer{position:absolute;background-size:cover;background-position:center}.glass-layer.fresh{-webkit-animation:fade-in 1.2s ease;animation:fade-in 1.2s ease}.sheet-tint{position:absolute;inset:0;background:#0a0c1480}.sheet-inner{position:relative;padding:20px 22px 22px;max-height:72vh;overflow-y:auto;-webkit-overflow-scrolling:touch}.sheet .rooms .room{padding:12px 0}.sheet-actions{display:flex;align-items:center}.sheet-close{width:32px;height:32px;margin-left:8px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1f;color:#f5f7fbb8}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes sheet-in{0%{opacity:0;-webkit-transform:translateY(24px) scale(.92)}}@keyframes sheet-in{0%{opacity:0;transform:translateY(24px) scale(.92)}}.modal{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:16px;padding-top:max(16px,calc(env(safe-area-inset-top) + 16px));padding-bottom:max(16px,env(safe-area-inset-bottom));padding-left:max(16px,env(safe-area-inset-left));padding-right:max(16px,env(safe-area-inset-right));background:#0009}.modal-box{width:100%;max-width:560px;max-height:92%;display:flex;flex-direction:column;overflow:hidden;background:#141620f7;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:0;box-shadow:0 30px 80px #0009}.modal-wide{max-width:960px}.modal-head{flex-shrink:0;display:flex;justify-content:space-between;align-items:center;margin:0;padding:24px 24px 16px}.modal-head h2{font-size:19px;font-weight:600}.modal-body{flex:1 1 auto;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0 24px 24px}.modal-box.has-foot .modal-body{padding-bottom:8px}.modal-title{display:flex;align-items:center}.modal-title svg{margin-right:10px;color:#7dd3fc}.icon-btn{color:#f5f7fb7a}.cam-peek{position:absolute;top:0;left:0;width:100%;height:100%;background-position:center;background-repeat:no-repeat;pointer-events:none;z-index:1}.tabs{display:flex;padding:4px;margin-bottom:18px;border-radius:14px;background:#ffffff0d}.tabs button{flex:1;padding:9px;border-radius:10px;font-size:14px;font-weight:500;color:#f5f7fbb8}.tabs .active{background:#ffffff1a;color:#f5f7fb}.modal-box .hint{position:static;opacity:1;text-align:left;font-size:13px;color:#f5f7fb7a;letter-spacing:0;margin-bottom:14px;line-height:1.45}.modal-box .hint.small{font-size:12px;margin:4px 0 0;text-align:center}.drop-zone{position:relative;display:block;text-align:center;padding:26px 16px;margin-bottom:14px;border:2px dashed rgba(255,255,255,.16);border-radius:20px;background:#ffffff08}.drop-zone svg{margin:0 auto 8px}.drop-zone input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.drop-zone.busy{opacity:.6}.drop-zone.over{border-color:#7dd3fc;background:#7dd3fc14}.upload-error{margin:-6px 0 12px}.drop-title{font-size:14px;font-weight:500}.thumbs{display:flex;flex-wrap:wrap;margin:0 -4px 10px}.thumb{position:relative;width:72px;height:72px;margin:4px;border-radius:12px;background-size:cover;background-position:center}.thumb-del{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#000000a6}.option{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-top:1px solid rgba(255,255,255,.09);font-size:14px;color:#f5f7fbb8;gap:12px}.option label{flex-shrink:0}.option select{padding:10px 14px;border-radius:10px;background:#ffffff14;color:#f5f7fb;font-size:13px;min-width:0;max-width:60%}.option select option{color:#000}.option-col{display:block}.folder-choose{display:flex;align-items:center;max-width:62%;padding:8px 12px;border-radius:10px;background:#ffffff14;color:#f5f7fb;font-size:13px}.folder-choose svg{margin-right:8px;color:#7dd3fc;flex-shrink:0}.folder-choose span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.folder-tree{margin:4px -6px}.folder-row{display:flex;align-items:center;min-height:40px}.folder-toggle{width:26px;height:32px;display:flex;align-items:center;justify-content:center;color:#f5f7fb7a;flex-shrink:0}.folder-name{flex:1;min-width:0;display:flex;align-items:center;height:34px;padding:0 10px;border-radius:10px;color:#f5f7fbb8;font-size:14px;text-align:left}.folder-name:hover{background:#ffffff0f}.folder-name svg{margin-right:8px;color:#f5f7fb7a;flex-shrink:0}.folder-name span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.folder-name em{margin-left:auto;padding-left:10px;font-style:normal;font-size:12px;color:#f5f7fb7a}.folder-name.active{background:#7dd3fc29;color:#f5f7fb}.folder-name.active svg{color:#7dd3fc}.folder-loading{display:flex;flex-direction:column;align-items:center;padding:28px 0;color:#f5f7fb7a;font-size:13px}.folder-loading .cam-spinner{border-top-color:#7dd3fc}.chip-picker{margin-top:8px}.chip-picker .check{margin:4px 0;color:#f5f7fb}.field{display:block;margin-bottom:14px}.field span{display:block;font-size:12px;color:#f5f7fb7a;margin-bottom:6px}.field input{width:100%;padding:13px 14px;border-radius:12px;font-size:15px;background:#ffffff0f;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text}.field input:focus{border-color:#7dd3fc}.table-wrap{max-height:240px;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:12px;background:#0003}.diag{width:100%;border-collapse:collapse;font-size:12px}.diag td{padding:7px 10px;border-bottom:1px solid rgba(255,255,255,.09);word-break:break-all}.mono{font-family:Menlo,Roboto Mono,monospace}.strong{font-weight:600}.muted{color:#f5f7fb7a}.modal-foot{flex-shrink:0;display:flex;justify-content:space-between;align-items:center;margin:0;padding:16px 24px 24px;border-top:1px solid rgba(255,255,255,.09);background:inherit}.btn{display:flex;align-items:center;padding:11px 18px;border-radius:14px;font-size:14px;font-weight:600}.btn svg{margin-right:6px}.btn-accent{background:#7dd3fc;color:#0b0d14}.btn-danger{background:#fb71851f;color:#fb7185}.type-list .type-row{display:flex;align-items:center;width:100%;padding:12px 6px;text-align:left;color:#f5f7fbb8;border-bottom:1px solid rgba(255,255,255,.09)}.type-list .type-row:last-child{border-bottom:0}.seg-wide{align-self:flex-start;display:inline-flex}.seg-wide button{padding:7px 16px;font-size:13px}.swatches{display:flex;flex-wrap:wrap}.swatch{width:34px;height:34px;border-radius:50%;margin:0 8px 6px 0;border:2px solid transparent}.swatch.active{border-color:#fff;box-shadow:0 0 0 2px #00000080 inset}.swatch-auto{background:#ffffff1a;font-size:12px;font-weight:700;color:#f5f7fbb8}.icon-grid{display:flex;flex-wrap:wrap;margin:0 -3px}.icon-grid button{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0d;color:#f5f7fbb8}.icon-grid .active{background:#fff3;color:#f5f7fb}.icon-choose{display:flex;align-items:center;width:100%;padding:8px 10px;border-radius:14px;background:#ffffff0f;color:#f5f7fbb8;text-align:left}.field .icon-choose span{display:inline;margin:0;font-size:14px;color:#f5f7fbb8}.field .icon-choose .icon-choose-preview{width:38px;height:38px;margin-right:12px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff14;color:#f5f7fb;flex-shrink:0}.field .icon-choose .icon-choose-key{margin-left:auto;font-size:11px;color:#f5f7fb7a}.icon-picker-search{margin-bottom:12px}.icon-picker-scroll{max-height:58vh;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-right:4px}.icon-group{margin-bottom:14px}.icon-group h3{margin:0 0 4px;font-size:12px;font-weight:600;color:#f5f7fb7a;text-transform:uppercase;letter-spacing:.06em}.icon-grid-picker button{width:44px;height:44px}.icon-grid-picker .active{background:#7dd3fc;color:#0b0d14}.check{display:flex;align-items:center;font-size:14px;color:#f5f7fbb8;margin:6px 0 10px}.check input{margin-right:10px;width:18px;height:18px}.check-row{padding:10px 0;border-top:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.09);margin-bottom:14px}.items{border-radius:14px;background:#0003;padding:4px 8px 8px}.item-block{border-bottom:1px solid rgba(255,255,255,.09)}.item-row{display:flex;align-items:center;padding:8px 0}.item-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ffffff14;margin-right:10px;flex-shrink:0}.item-main{flex:1;min-width:0;display:flex;flex-direction:column}.item-main input{padding:6px 8px;margin-left:-8px;border-radius:8px;font-size:14px;-webkit-user-select:text;user-select:text}.item-main input:focus{background:#ffffff0f}.item-main .mono{font-size:11px;color:#f5f7fb7a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item-row .icon-btn{width:32px;height:32px;display:flex;align-items:center;justify-content:center}.na-tag{font-style:normal;color:#fb7185}.link{display:flex;align-items:center;font-size:11px;color:#7dd3fc;margin-top:3px;text-align:left}.link svg{margin-right:4px}.btn-ghost{margin-top:8px;background:#ffffff14;color:#f5f7fb;font-weight:500}.btn[disabled]{opacity:.4}.auth{margin-bottom:16px;padding:14px 16px 2px;border-radius:16px;background:#ffffff0a}.auth-title{font-size:15px;font-weight:600;margin-bottom:12px}.auth-or{display:flex;align-items:center;margin:-2px 0 12px;font-size:12px;color:#f5f7fb7a}.auth-or:before,.auth-or:after{content:"";flex:1;height:1px;background:#ffffff1f}.auth-or span{margin:0 12px}.auth .btn-login{width:100%;justify-content:center;margin:0 0 4px}.auth-session{display:flex;align-items:center;justify-content:space-between;margin:-2px 0 6px;font-size:13px;color:#f5f7fbb8}.auth-session .btn{margin:0 0 0 12px;flex-shrink:0}.ha-storage{margin:0 0 14px}.ha-storage .hint{margin:0}.migration{margin:0 0 14px;padding:12px 14px;border-radius:14px;background:#ffffff14}.migration p{margin:0 0 4px;font-size:14px}.picker{border-radius:14px;background:#00000040;padding:8px}.picker-search{display:flex;align-items:center;padding:4px 6px;border-radius:10px;background:#ffffff12;color:#f5f7fb7a}.picker-search input{flex:1;padding:8px;border:0;background:none;font-size:14px;color:#f5f7fb;-webkit-user-select:text;user-select:text}.picker .check{margin:8px 4px;font-size:13px}.picker-mode{margin-bottom:8px}.picker-list{max-height:260px;overflow-y:auto;-webkit-overflow-scrolling:touch}.picker-row{display:flex;flex-wrap:wrap;align-items:baseline;width:100%;padding:9px 6px;text-align:left;border-bottom:1px solid rgba(255,255,255,.09)}.picker-row:active{background:#ffffff14}.picker-name{flex:1;font-size:14px}.picker-state{font-size:12px;color:#f5f7fb7a;margin-left:8px}.picker-id{width:100%;font-size:11px;color:#f5f7fb7a;margin-top:2px}.picker-empty{padding:16px;text-align:center}.home-row{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.09)}.home-row-head{display:flex;align-items:center;margin-bottom:8px}.home-input{flex:1;min-width:0;padding:8px 10px;border-radius:10px;font-size:15px;font-weight:600;background:#ffffff0f;-webkit-user-select:text;user-select:text}.row-btns{display:flex}.row-btns .btn{margin:0 8px 8px 0}.json{display:block;width:100%;height:120px;padding:10px;border-radius:12px;font:12px Menlo,monospace;color:#f5f7fb;background:#0000004d;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text;resize:vertical}.c-red{color:#fb7185}.small{font-size:12px}.ac-wrap,.media-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.ac{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-main{display:flex;align-items:center}.ac-step{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;border:1px solid rgba(255,255,255,.14);margin:0 10px}.ac-step:active{background:#ffffff2e}.ac-step[disabled]{opacity:.3}.ac-dial{position:relative}.ac-dial svg{position:absolute;top:0;left:0}.ac-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-target{font-size:44px;font-weight:200;letter-spacing:-.03em;line-height:1}.ac.compact .ac-target{font-size:34px}.ac-target sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.ac-mode{font-size:12px;color:#f5f7fbb8;margin-top:4px}.ac-room{font-size:11px;color:#f5f7fb7a;margin-top:2px}.ac-modes{display:flex;flex-wrap:wrap;justify-content:center;margin-top:10px}.ac-mode-btn{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0f;border:1px solid transparent;color:#f5f7fbb8}.ac-mode-btn.active{color:#fff;border-color:#fff6}.ac-fan{margin-top:10px;align-self:center}.ac-fan button{padding:6px 10px;font-size:12px}.media-wrap{flex:1 0 auto}.media{flex:1 0 auto;display:flex;flex-direction:column}.media>:first-child{margin-top:auto}.media>:last-child{margin-bottom:auto}.media.short .media-art{width:52px;height:52px;border-radius:12px}.media.short .media-controls{margin:8px 0 2px}.media.short .media-controls button{width:38px;height:38px}.media.short .media-controls .media-play{width:46px;height:46px}.media-top{display:flex;align-items:center}.media-art{width:72px;height:72px;flex-shrink:0;border-radius:14px;background-size:cover;background-position:center;box-shadow:0 8px 24px #00000059}.media.big .media-art{width:112px;height:112px;border-radius:18px}.media-art-empty{display:flex;align-items:center;justify-content:center;background:#ffffff12;color:#f5f7fb7a}.media-art-empty.big{width:96px;height:96px;border-radius:24px;margin-bottom:12px}.media-info{flex:1;min-width:0;margin-left:14px}.media-title{font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media.big .media-title{font-size:19px}.media-sub{font-size:13px;color:#f5f7fbb8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media-state{display:flex;align-items:center;font-size:11px;color:#f5f7fb7a;margin-top:6px;text-transform:uppercase;letter-spacing:.08em}.media-state.on{color:#34d399}.eq{display:inline-flex;align-items:flex-end;height:10px;margin-right:6px}.eq b{width:2px;margin-right:2px;background:#34d399;-webkit-animation:eq .9s ease-in-out infinite;animation:eq .9s ease-in-out infinite}.eq b:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.eq b:nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}@-webkit-keyframes eq{0%,to{height:3px}50%{height:10px}}@keyframes eq{0%,to{height:3px}50%{height:10px}}.icon-round{width:36px;height:36px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;color:#f5f7fbb8;margin-left:8px}.media-controls{display:flex;align-items:center;justify-content:center;margin:14px 0 6px}.media-controls button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:#f5f7fb;margin:0 6px}.media-controls button:active{background:#ffffff1a}.media-controls .media-play{width:56px;height:56px;background:#ffffffeb;color:#0b0d14}.media-volume{display:flex;align-items:center;margin-top:8px}.media-volume button{width:32px;height:32px;display:flex;align-items:center;justify-content:center;color:#f5f7fbb8}.vol-bar{position:relative;flex:1;height:6px;margin:0 10px;border-radius:3px;background:#ffffff1f;cursor:pointer}.vol-bar:before{content:"";position:absolute;inset:-12px 0}.vol-fill{position:absolute;top:0;left:0;bottom:0;border-radius:3px;background:#f5f7fb}.vol-num{width:28px;text-align:right;font-size:12px;color:#f5f7fb7a}.media-sources{margin:10px -4px 0;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}.media-sources::-webkit-scrollbar{display:none}.media-sources .chip{flex-shrink:0;white-space:nowrap}.media-off{align-items:center;text-align:center}.media-power{margin:14px 0 0}.media-hint{margin-top:10px;max-width:220px}.dot-live{display:inline-block;width:6px;height:6px;border-radius:50%;background:#34d399;margin-right:6px;vertical-align:middle}.weather{flex:1;display:flex;flex-direction:column;min-height:0}.weather-now{display:flex;align-items:center}.weather-temp{font-size:48px;font-weight:200;letter-spacing:-.03em;line-height:1;margin:0 14px 0 10px}.weather-temp sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.weather-desc{display:flex;flex-direction:column;min-width:0}.weather-desc b{font-size:15px;font-weight:500}.weather-desc span{font-size:12px;color:#f5f7fb7a;margin-top:2px}.weather-facts{display:flex;flex-wrap:wrap;margin-top:12px;font-size:13px;color:#f5f7fbb8}.weather-facts span{display:flex;align-items:center;margin-right:16px}.weather-facts svg{margin-right:5px;color:#f5f7fb7a}.weather-rooms{margin-top:10px;border-top:1px solid rgba(255,255,255,.09)}.wroom{display:flex;align-items:center;height:36px;font-size:14px}.wroom-name{flex:1;min-width:0;color:#f5f7fbb8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wroom-hum{display:flex;align-items:center;font-size:12px;color:#f5f7fb7a;margin-right:12px}.wroom-hum svg{margin-right:3px;color:#7dd3fc}.wroom-temp{font-weight:500;font-size:16px}.room-name svg{display:inline-block;vertical-align:-2px;margin-right:6px;color:#f5f7fbb8}.weather-hours{display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px -4px 0;padding-bottom:4px}.weather-hours::-webkit-scrollbar{display:none}.hour{flex-shrink:0;width:52px;display:flex;flex-direction:column;align-items:center;font-size:12px}.hour svg{margin:6px 0;color:#f5f7fbb8}.hour b{font-weight:500;font-size:14px}.weather-days{margin-top:12px;border-top:1px solid rgba(255,255,255,.09);padding-top:4px}.day{display:flex;align-items:center;padding:7px 0;font-size:14px}.day-name{width:72px;color:#f5f7fbb8}.day svg{color:#f5f7fbb8;margin-right:10px}.day-lo{width:34px;text-align:right;color:#f5f7fb7a}.day-hi{width:34px}.day-bar{position:relative;flex:1;height:4px;margin:0 10px;border-radius:2px;background:#ffffff14}.day-bar i{position:absolute;top:0;bottom:0;border-radius:2px;background:linear-gradient(to right,#0891b2,#d97706)}.ambient-weather{display:flex;align-items:center;margin-top:2.4vh;font-size:2.8vh;color:#f5f7fb}.ambient-weather svg{width:4.2vh;height:4.2vh}.aw-temp{font-size:4.6vh;font-weight:300;margin:0 1.6vh 0 1.2vh}.aw-desc{display:flex;flex-direction:column;font-size:2.2vh;color:#f5f7fbb8;line-height:1.25}.aw-desc small{font-size:1.9vh;color:#f5f7fb7a}.tappable{cursor:pointer;border-radius:10px;transition:background .15s}.tappable:active{background:#ffffff12}.detail{position:relative;text-align:left}.detail-hero{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px}.hero-value{font-size:52px;font-weight:200;letter-spacing:-.03em;line-height:1;margin-bottom:6px}.chips{display:flex;flex-wrap:wrap;margin:0 -4px 12px}.chip{display:flex;align-items:baseline;margin:4px;padding:8px 12px;border-radius:12px;background:#ffffff0f;border:1px solid transparent;font-size:13px;color:#f5f7fbb8}.chip b{margin-left:8px;font-weight:600;color:#f5f7fb}.chip.active{border-color:#ffffff59;background:#ffffff1f;color:#f5f7fb}.detail-tools{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.chip-btn.on{background:#fff3}.chart{position:relative;margin:0 auto}.chart svg{display:block;overflow:visible}.chart-tick{fill:#f5f7fb7a;font-size:11px}.chart-legend{display:flex;justify-content:flex-end;font-size:12px;color:#f5f7fb7a;margin-top:2px}.chart-legend span{display:flex;align-items:center;margin-left:14px}.chart-legend i{width:12px;height:12px;border-radius:3px;margin-right:6px}.chart-legend i.key-line{height:2px;border-radius:1px}.chart-legend i.key-na{border:1px dashed rgba(255,255,255,.35)}.chart-tip{position:absolute;top:0;padding:7px 10px;border-radius:10px;pointer-events:none;white-space:nowrap;transform:translate(-50%);background:#080a10eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 8px 24px #0006;display:flex;flex-direction:column;font-size:12px;color:#f5f7fbb8}.chart-tip b{font-size:15px;color:#f5f7fb}.chart-empty{height:210px;display:flex;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:14px}.stats{display:flex;flex-wrap:wrap;margin:14px -5px 0}.stat{flex:1;min-width:120px;margin:5px;padding:12px 14px;border-radius:14px;background:#ffffff0d}.stat-label{font-size:12px;color:#f5f7fb7a}.stat-value{font-size:22px;font-weight:300;margin-top:4px;white-space:nowrap}.stat-note{font-size:11px;color:#f5f7fb7a;margin-top:2px}.detail-foot{margin-top:10px}.detail .table-wrap{max-height:210px}.root{height:100%}.q-lite .slide{transform:none!important;transition:opacity .6s linear}.q-lite .soft{display:none}.q-lite .shade.deep{background-color:#04060cd1}.q-lite .sheet-glass .glass-layer{display:none}.q-lite .panel,.q-lite .modal-box,.q-lite .sheet,.q-lite .glance,.q-lite .cell.dragged .panel,.q-lite .light.on,.q-lite .light.on .light-icon,.q-lite .media-art,.q-lite .badge-btn{box-shadow:none!important}.q-lite .ambient-clock,.q-lite .ambient .header{text-shadow:none}.q-lite .eq b,.q-lite .live i,.q-lite .editing .cell,.q-lite .sheet,.q-lite .sheet-layer{-webkit-animation:none!important;animation:none!important}.q-lite .controls,.q-lite .ambient{transition-duration:.2s}.q-lite .cell,.q-lite .light,.q-lite .light-icon,.q-lite .soft{transition:none}@media(max-width:900px),(orientation:portrait){.ambient{display:block;padding-top:0}.ambient-clock{position:absolute;left:6vw;bottom:24vh}.ambient-time{font-size:13vh}.ambient-date{font-size:2.2vh}.glances{position:absolute;left:6vw;right:6vw;bottom:10vh;max-width:none;justify-content:flex-start}.glance{margin:6px 8px 0 0}.controls-head{padding-top:max(16px,calc(env(safe-area-inset-top) + 16px))}.controls{padding:0 16px 16px;padding-right:max(16px,env(safe-area-inset-right));padding-bottom:max(16px,env(safe-area-inset-bottom));padding-left:max(16px,env(safe-area-inset-left))}}@media(max-width:700px){.ambient-clock{left:6vw;right:6vw;text-align:center}.ambient-weather,.glances{justify-content:center}.glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.glance span{display:none}.glance svg{margin:0;width:22px;height:22px}}@media(max-width:900px),(orientation:portrait){.bar-date,.conn{display:none}.sheet-layer{justify-content:center;padding:0 12px 12px;padding-bottom:max(12px,env(safe-area-inset-bottom))}.sheet,.sheet-wide{width:100%}.sheet-cameras .cam{height:220px}.hero-value{font-size:40px}.stat{min-width:40%}.rooms .room-temp{font-size:36px}}.ambient.lock-size-xs .ambient-time{font-size:10vh}.ambient.lock-size-s .ambient-time{font-size:15vh}.ambient.lock-size-l .ambient-time{font-size:28vh}.ambient.lock-size-xl .ambient-time{font-size:34vh}.ambient.lock-center,.ambient.lock-top{flex-direction:column;align-items:center;justify-content:flex-end}.ambient.lock-top{justify-content:flex-start;padding-top:10vh;padding-top:max(10vh,calc(env(safe-area-inset-top) + 3vh))}.ambient.lock-center .ambient-clock,.ambient.lock-top .ambient-clock{position:static;text-align:center}.ambient.lock-center .ambient-weather,.ambient.lock-top .ambient-weather{justify-content:center}.ambient.lock-center .glances,.ambient.lock-top .glances{position:static;max-width:none;justify-content:center;margin-top:3vh}.ambient.lock-center .glance,.ambient.lock-top .glance{margin:6px 5px 0}.ambient.lock-top .ambient-clock{display:flex;flex-direction:column;align-items:center}.ambient-date.above{margin:0 0 1vh}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .ambient-weather{justify-content:flex-start}.ambient.chips-icons .glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.ambient.chips-icons .glance span{display:none}.ambient.chips-icons .glance svg{margin:0;width:22px;height:22px}.ambient.chips-text .glance{width:auto;height:auto;padding:9px 16px 9px 13px;border-radius:999px}.ambient.chips-text .glance span{display:inline}.ambient.chips-text .glance svg{margin-right:8px;width:18px;height:18px}@media(max-width:900px),(orientation:portrait){.ambient.lock-size-xs .ambient-time{font-size:7vh}.ambient.lock-size-s .ambient-time{font-size:10vh}.ambient.lock-size-m .ambient-time{font-size:13vh}.ambient.lock-size-l .ambient-time{font-size:17vh}.ambient.lock-size-xl .ambient-time{font-size:21vh}}@media(max-width:700px){.ambient.lock-size-xs .ambient-time{font-size:15vw}.ambient.lock-size-s .ambient-time{font-size:20vw}.ambient.lock-size-m .ambient-time{font-size:26vw}.ambient.lock-size-l .ambient-time{font-size:31vw}.ambient.lock-size-xl .ambient-time{font-size:35vw}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .glances{justify-content:flex-start}}.ambient.customizing{transform:scale(.9)}.ambient.customizing .ambient-clock,.ambient.customizing .glances{pointer-events:auto;cursor:pointer;border-radius:18px;padding:10px 14px;border:1.5px dashed rgba(255,255,255,.55);background:#ffffff0f}.ambient.customizing .glances{min-height:64px;min-width:120px}.glance-add{color:#f5f7fbb8}.lock-ui{position:absolute;inset:0;z-index:30;pointer-events:none}.lock-top{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;padding-top:max(16px,calc(env(safe-area-inset-top) + 16px));pointer-events:auto;font-size:14px;color:#f5f7fbb8;text-shadow:0 1px 8px rgba(0,0,0,.5)}.lock-modal{position:absolute;inset:0;pointer-events:auto;display:flex;align-items:center;justify-content:center;background:#00000059}.lock-panel{position:relative;width:420px;max-width:calc(100% - 24px);max-height:80%;overflow-y:auto;padding:16px 18px 10px;border-radius:24px;pointer-events:auto;background:#141620eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 20px 60px #00000080}.lock-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;font-size:16px}.lock-fonts{display:flex;margin:0 -4px 12px}.lock-font{flex:1;margin:0 4px;height:64px;border-radius:14px;font-size:34px;background:#ffffff0f;border:1.5px solid transparent}.lock-font.on{border-color:#7dd3fc;background:#7dd3fc1f}.lock-colors{display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;margin:0 -18px 6px;padding:4px 18px;-webkit-overflow-scrolling:touch;scrollbar-width:none}.lock-colors::-webkit-scrollbar{display:none}.lock-colors .lock-color{flex-shrink:0}.lock-color{width:34px;height:34px;margin-right:10px;border-radius:50%;border:2px solid rgba(255,255,255,.15)}.lock-color.on{border-color:#fff;box-shadow:0 0 0 3px #ffffff40}.lock-widget{display:flex;align-items:center;border-top:1px solid rgba(255,255,255,.09)}.lock-widget .check{flex:1;margin:10px 0}.lock-widget .check svg{margin-right:8px;color:#f5f7fbb8}.lock-widget .icon-btn{width:36px;height:36px;display:flex;align-items:center;justify-content:center}.lock-widget .icon-btn[disabled]{opacity:.25}.option-hint{display:block;margin-top:2px;font-size:12px;color:#f5f7fb7a}.device-parts{margin:0 0 8px 52px}.device-part{display:flex;align-items:center;padding:2px 0}.device-part input[type=checkbox]{width:18px;height:18px;margin:0 8px 0 0;flex-shrink:0}.device-part .part-name{flex:1;min-width:0;padding:6px 10px;border-radius:10px;font-size:13px;background:#ffffff0d;border:1px solid transparent;color:#f5f7fb}.device-part .part-name:focus{border-color:#ffffff17;outline:none}.device-part .icon-btn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.device-part .icon-btn[disabled]{opacity:.25}.device-part.off .part-name{opacity:.45;text-decoration:line-through}.photos-count{display:flex;align-items:center;justify-content:space-between;margin:12px 0 4px;font-size:13px;color:#f5f7fbb8}.photos-count a{color:#7dd3fc;text-decoration:none}.ambient.widgets-top .glances,.ambient.widgets-bottom .glances{position:absolute;left:4vw;right:4vw;max-width:none;margin:0;justify-content:center}.ambient.widgets-top .glances{top:4vh;top:max(4vh,calc(env(safe-area-inset-top) + 16px));bottom:auto}.ambient.widgets-bottom .glances{bottom:7vh;bottom:calc(1.5vh + 48px);top:auto}.ambient.widgets-top .glance,.ambient.widgets-bottom .glance{margin:6px 5px 0}.ambient.lock-top.widgets-top{padding-top:18vh}.ambient-time,.ambient-clock,.glances{transition:color 1.2s ease}.text-contrast .ambient-time,.text-contrast .ambient-date,.text-contrast .ambient-weather,.text-contrast .aw-desc,.text-contrast .aw-desc small,.text-contrast .glance,.text-contrast .glance svg{color:inherit}.text-contrast .ambient-date{opacity:.85}.text-contrast .aw-desc,.text-contrast .aw-desc small{opacity:.8}.text-contrast .glance.lit svg{color:#fbbf24}.text-contrast.ink-dark,.text-contrast.ink-dark .ambient-time{text-shadow:0 1px 24px rgba(255,255,255,.45)}.glances.text-contrast.ink-dark .glance{background:#ffffff80;border-color:#0000001a}.glances.text-contrast.ink-dark .glance.alert{color:#fff}.ambient-clock.ink-fixed .ambient-time,.ambient-clock.ink-fixed .ambient-date,.ambient-clock.ink-fixed .ambient-weather,.ambient-clock.ink-fixed .aw-desc,.ambient-clock.ink-fixed .aw-desc small,.ambient-clock.ink-fixed .ambient-weather svg{color:inherit}.ambient-clock.ink-fixed .ambient-date{opacity:.85}.ambient-clock.ink-fixed .aw-desc,.ambient-clock.ink-fixed .aw-desc small{opacity:.8}.glances.ink-fixed .glance,.glances.ink-fixed .glance svg{color:inherit}.glances.ink-fixed .glance.lit svg{color:#fbbf24}.glances.ink-fixed .glance.alert,.glances.ink-fixed .glance.alert svg,.glances.ink-fixed .glance.warn,.glances.ink-fixed .glance.warn svg{color:#fff}.lock-color-custom{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;background:conic-gradient(#f87171,#fbbf24,#4ade80,#22d3ee,#818cf8,#f472b6,#f87171);background-color:#888}.lock-color-custom input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer;border:0;padding:0}.lock-color-custom span{color:#fff;font-weight:800;font-size:14px;text-shadow:0 0 4px rgba(0,0,0,.6);pointer-events:none}.hex-input{width:110px;height:36px;padding:0 10px;border-radius:10px;background:#ffffff14;font-family:monospace;font-size:15px}.hex-input.invalid{box-shadow:inset 0 0 0 1.5px #f87171}.lock-color-same{width:auto;padding:0 12px;border-radius:17px;font-size:13px;white-space:nowrap;flex-shrink:0;color:#fff;background:#ffffff1a}.lock-color-contrast{background:linear-gradient(135deg,#fff 50%,#111 50%)}.lock-color-contrast{padding:0}.lock-color-contrast span{display:block;color:#8c8c8c;font-size:15px;font-weight:800;line-height:30px;text-align:center}.screen-dim{position:fixed;inset:0;z-index:9000;background:#000;pointer-events:none;transition:opacity .8s ease}.screen-dim.asleep{pointer-events:auto}.ambient.lock-grid{top:env(safe-area-inset-top);bottom:env(safe-area-inset-bottom);left:env(safe-area-inset-left);right:env(safe-area-inset-right)}.ambient.lock-grid{display:block;padding:0;top:calc(env(safe-area-inset-top) + 16px);right:env(safe-area-inset-right);bottom:env(safe-area-inset-bottom);left:env(safe-area-inset-left)}.ambient.lock-grid .ambient-clock,.ambient.lock-grid .glances{position:absolute;display:flex;flex-direction:column;box-sizing:border-box;max-width:none;margin:0;overflow:hidden}.ambient.lock-grid .glances{flex-direction:row;flex-wrap:wrap;align-content:flex-start}.ambient.lock-grid .glance{margin:4px}.ambient.lock-grid .ambient-clock.g-left{align-items:flex-start;text-align:left}.ambient.lock-grid .ambient-clock.g-center{align-items:center;text-align:center}.ambient.lock-grid .ambient-clock.g-right{align-items:flex-end;text-align:right}.ambient.lock-grid .ambient-clock.g-top{justify-content:flex-start}.ambient.lock-grid .ambient-clock.g-middle{justify-content:center}.ambient.lock-grid .ambient-clock.g-bottom{justify-content:flex-end}.ambient.lock-grid .g-left .ambient-weather{justify-content:flex-start}.ambient.lock-grid .g-center .ambient-weather{justify-content:center}.ambient.lock-grid .g-right .ambient-weather{justify-content:flex-end}.ambient.lock-grid .glances.g-left{justify-content:flex-start}.ambient.lock-grid .glances.g-center{justify-content:center}.ambient.lock-grid .glances.g-right{justify-content:flex-end}.ambient.lock-grid .glances.g-middle{align-content:center}.ambient.lock-grid .glances.g-bottom{align-content:flex-end}.ambient.customizing.lock-grid .ambient-clock,.ambient.customizing.lock-grid .glances{border-color:transparent;background:none;padding:0;min-height:0;min-width:0}.grid-editor{position:absolute;z-index:5;pointer-events:none;background-image:linear-gradient(to right,rgba(255,255,255,.14) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.14) 1px,transparent 1px);background-size:8.3333% 8.3333%;outline:1px solid rgba(255,255,255,.14)}.grid-box{position:absolute;box-sizing:border-box;pointer-events:auto;cursor:move;border-radius:12px;border:1.5px dashed rgba(255,255,255,.7);background:#7dd3fc1a}.grid-widgets{background:#fcd34d1a}.grid-label{position:absolute;top:6px;left:8px;font-size:12px;color:#fff;padding:2px 8px;border-radius:8px;background:#00000073}.grid-resize{position:absolute;right:-2px;bottom:-2px;width:28px;height:28px;cursor:nwse-resize;border-radius:0 0 12px;background:linear-gradient(135deg,transparent 50%,rgba(255,255,255,.85) 50%)}.lock-top-btns{display:flex;align-items:center}.lock-top-btns .pill-btn{margin-left:8px;display:inline-flex;align-items:center}.lock-top-btns .pill-btn svg{margin-right:6px}.lock-top-btns .pill-btn:not(.accent-bg){background:#ffffff24;color:#fff}.lock-top-btns .pill-btn.on:not(.accent-bg){background:#7dd3fc;color:#0b0d14}.settings-section{margin-top:18px;padding-top:14px;border-top:1px solid rgba(255,255,255,.09)}.settings-section:first-child,.migration+.settings-section{margin-top:0;padding-top:0;border-top:0}.section-title{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#f5f7fb7a;margin-bottom:10px}.lock-sec{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#f5f7fb7a;margin:14px 0 8px}.lock-panel-head+.lock-sec{margin-top:0}html.doc-scroll{height:auto;min-height:100%;overflow:visible;overflow-x:hidden}html.doc-scroll body,html.doc-scroll #app,html.doc-scroll .root,html.doc-scroll .app{height:auto;min-height:100%;overflow:visible}html.doc-scroll .ambient{position:fixed}html.doc-scroll .controls{position:relative;min-height:100vh}html.doc-scroll .home-pane{flex:none}html.doc-scroll .grid{flex:none;overflow:visible}html.photo-peek,html.photo-peek body,html.photo-peek #app,html.photo-peek .root{overflow:visible;overflow-x:hidden;height:auto}html.photo-peek .app{height:calc(100vh + 1px);height:calc(100lvh + 1px)}html.photo-peek .backdrop{position:absolute}html.photo-peek .ambient{bottom:auto;height:100vh;height:100svh}.tv-bar{position:absolute;left:0;right:0;bottom:0;z-index:6;pointer-events:none;padding:0 0 max(5vh,env(safe-area-inset-bottom));background:linear-gradient(to top,#0009,#00000059 60%,#0000);opacity:0;transition:opacity .25s ease}.tv-bar.visible{opacity:1;-webkit-animation:tv-bar-in .3s cubic-bezier(.2,.7,.2,1);animation:tv-bar-in .3s cubic-bezier(.2,.7,.2,1)}@-webkit-keyframes tv-bar-in{0%{-webkit-transform:translateY(30px)}to{-webkit-transform:none}}@keyframes tv-bar-in{0%{transform:translateY(30px)}to{transform:none}}.tv-row{display:flex;align-items:center;overflow:hidden;scroll-behavior:smooth;padding:96px max(5vw,env(safe-area-inset-left)) 16px}.tv-tile{position:relative;flex:none;display:flex;align-items:center;justify-content:center;width:76px;height:76px;margin-right:14px;border-radius:18px;background:#ffffff24;color:#ffffffd9;transition:transform .18s cubic-bezier(.2,.7,.2,1),background .18s ease,color .18s ease}.tv-tile.on{color:#ffd27a}.tv-tile.alert{color:#ff8a80}.tv-tile.focus{transform:scale(1.22);background:#f4f2ec;color:#1c1c1c;z-index:1}.tv-tile.focus.on{color:#a86a00}.tv-tile.focus.alert{color:#c62828}.tv-label{position:absolute;left:50%;bottom:calc(100% + 12px);transform:translate(-50%) scale(.82);white-space:nowrap;text-align:center;font-size:17px;font-weight:500;color:#fff;text-shadow:0 1px 8px rgba(0,0,0,.6)}.tv-label small{display:block;margin-top:2px;font-size:14px;font-weight:400;color:#ffffffbf}.tv-sep{flex:none;width:1px;height:44px;margin:0 16px 0 2px;background:#ffffff47}.q-lite .tv-bar{background:#0000008c}.kbd-nav .controls :focus,.kbd-nav .modal :focus,.kbd-nav .sheet :focus,.kbd-nav .lock-modal :focus{outline:none;box-shadow:0 0 0 3px #fff,0 0 0 6px #00000059;border-radius:12px;position:relative;z-index:2}.kbd-nav .sheet-layer{align-items:center;justify-content:center;padding:5vh 5vw;background:#00000073}.kbd-nav .sheet{transform-origin:50% 50%;max-height:86vh}.kbd-nav .sheet-inner{max-height:86vh}.kbd-nav .home-hint{display:none}.atv{position:fixed;inset:0;z-index:4;overflow-y:auto;padding:max(5vh,env(safe-area-inset-top)) max(5vw,env(safe-area-inset-right)) 8vh max(5vw,env(safe-area-inset-left));display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(to top,#0000008c,#0000 60%);-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease}.atv-tabs{display:flex;justify-content:flex-start;flex-wrap:wrap;margin-bottom:3vh}.atv-tab{margin:0 6px;padding:8px 22px;border-radius:22px;font-size:18px;color:#fff9;background:transparent;border:0;transition:background .18s ease,color .18s ease}.atv-tab.on{color:#fff;background:#ffffff24}.atv-tab:focus{outline:none;color:#1c1c1c;background:#f4f2ec}.atv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));grid-gap:4vh 2.6vw;gap:4vh 2.6vw}.atv-tile{display:flex;flex-direction:column;align-items:stretch;padding:0;border:0;background:none;color:inherit;text-align:center}.atv-tile:focus{outline:none}.atv-face{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;height:0;padding-bottom:60%;border-radius:16px;background:#ffffff1f;color:#ffffffd9;transition:transform .2s cubic-bezier(.2,.7,.2,1),box-shadow .2s ease,background .2s ease}.atv-face>*{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.atv-tile.lit .atv-face{color:#ffd27a}.atv-tile.alert .atv-face{color:#ff8a80}.atv-tile:focus .atv-face{transform:scale(1.12) translateY(-4px);background:#ffffff3d;box-shadow:0 18px 40px #0000008c}.atv-weather{display:flex;align-items:center;white-space:nowrap}.atv-weather b{margin-left:10px;font-size:40px;font-weight:300}.atv-face .atv-shot{top:0;left:0;width:100%;height:100%;transform:none;object-fit:cover}.atv-name{margin-top:16px;font-size:16px;font-weight:500;color:#fff;opacity:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:opacity .2s ease}.atv-name small{display:block;margin-top:2px;font-size:14px;font-weight:400;color:#ffffffb3}.atv-tile:focus .atv-name{opacity:1}.q-lite .atv-face{transition:none}.tv-home .ambient .glances,.tv-home .home-hint{display:none}.tv-home .soft{opacity:0}.tv-home .shade.deep{background-color:#04060c26}@supports (backdrop-filter: blur(1px)){.q-full .tv-home .shade.deep{backdrop-filter:blur(8px) saturate(1)}}.atv.atv-top{justify-content:flex-start;background:linear-gradient(to bottom,#0000008c,#0000 60%)}.kbd-nav .sheet-layer.cams{padding:2vh 2vw}.kbd-nav .sheet-cameras{width:96vw;max-width:none;height:96vh;max-height:none}.kbd-nav .sheet-cameras .sheet-inner{display:flex;flex-direction:column;height:96vh;max-height:none;box-sizing:border-box;overflow:hidden}.kbd-nav .sheet-cameras .cam-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.kbd-nav .sheet-cameras .cam{flex:1;height:auto;min-height:0}.cam-viewer{position:fixed;inset:0;z-index:120;background:#000;overflow:hidden;-webkit-animation:fade-in .2s ease;animation:fade-in .2s ease;touch-action:none}html.standalone .cam-viewer{bottom:auto;height:100vh}.cam-viewer-stage{position:absolute;inset:0;overflow:hidden}.cam-viewer-stage img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;transform-origin:0 0}.cam-viewer-peek{position:absolute;top:0;left:0;width:100%;height:100%;background:#000 no-repeat center;background-size:contain;pointer-events:none}.cam-viewer-bar{position:absolute;top:0;left:0;right:0;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:max(16px,calc(env(safe-area-inset-top) + 16px)) max(16px,env(safe-area-inset-right)) 18px max(16px,env(safe-area-inset-left));background:linear-gradient(to bottom,#0009,#0000);transition:opacity .2s ease}.cam-viewer-name{color:#fff;font-size:17px;font-weight:500;text-shadow:0 1px 6px rgba(0,0,0,.6)}.cam-viewer-close{width:44px;height:44px;border-radius:50%;border:0;display:flex;align-items:center;justify-content:center;background:#ffffff29;color:#fff}.cam-viewer-dots{position:absolute;left:0;right:0;bottom:max(24px,calc(env(safe-area-inset-bottom) + 12px));z-index:2;display:flex;justify-content:center;transition:opacity .2s ease}.cam-viewer-dots button{width:8px;height:8px;margin:0 5px;padding:0;border:0;border-radius:50%;background:#fff6}.cam-viewer-dots button.active{background:#fff}.cam-viewer.bare .cam-viewer-bar,.cam-viewer.bare .cam-viewer-dots,.cam-viewer.dragging .cam-viewer-bar,.cam-viewer.dragging .cam-viewer-dots{opacity:0;pointer-events:none}html.scroll-lock{overflow:hidden}html.scroll-lock body{position:fixed;left:0;right:0;overflow:hidden}';
var nt, ce, Kn, ka, Nt = 0, Wi = [], he = oe, _a = he.__b, za = he.__r, Ma = he.diffed, Ca = he.__c, La = he.unmount, Sa = he.__;
function Vt(e, t) {
  he.__h && he.__h(ce, e, Nt || t), Nt = 0;
  var n = ce.__H || (ce.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function _(e) {
  return Nt = 1, t2(Ui, e);
}
function t2(e, t, n) {
  var a = Vt(nt++, 2);
  if (a.t = e, !a.__c && (a.__ = [Ui(void 0, t), function(l) {
    var f = a.__N ? a.__N[0] : a.__[0], h = a.t(f, l);
    f !== h && (a.__N = [h, a.__[1]], a.__c.setState({}));
  }], a.__c = ce, !ce.__f)) {
    var i = function(l, f, h) {
      if (!a.__c.__H) return !0;
      var u = !1, p = a.__c.props !== l;
      if (a.__c.__H.__.some(function(m) {
        if (m.__N) {
          u = !0;
          var A = m.__[0];
          m.__ = m.__N, m.__N = void 0, A !== m.__[0] && (p = !0);
        }
      }), c) {
        var r = c.call(this, l, f, h);
        return u ? r || p : r;
      }
      return !u || p;
    };
    ce.__f = !0;
    var c = ce.shouldComponentUpdate, s = ce.componentWillUpdate;
    ce.componentWillUpdate = function(l, f, h) {
      if (this.__e) {
        var u = c;
        c = void 0, i(l, f, h), c = u;
      }
      s && s.call(this, l, f, h);
    }, ce.shouldComponentUpdate = i;
  }
  return a.__N || a.__;
}
function H(e, t) {
  var n = Vt(nt++, 3);
  !he.__s && aa(n.__H, t) && (n.__ = e, n.u = t, ce.__H.__h.push(n));
}
function Ve(e, t) {
  var n = Vt(nt++, 4);
  !he.__s && aa(n.__H, t) && (n.__ = e, n.u = t, ce.__h.push(n));
}
function X(e) {
  return Nt = 5, oa(function() {
    return { current: e };
  }, []);
}
function oa(e, t) {
  var n = Vt(nt++, 7);
  return aa(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function n2(e, t) {
  return Nt = 8, oa(function() {
    return e;
  }, t);
}
function Dt(e) {
  var t = ce.context[e.__c], n = Vt(nt++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(ce)), t.props.value) : e.__;
}
function o2() {
  for (var e; e = Wi.shift(); ) {
    var t = e.__H;
    if (e.__P && t) try {
      t.__h.some(sn), t.__h.some(To), t.__h = [];
    } catch (n) {
      t.__h = [], he.__e(n, e.__v);
    }
  }
}
he.__b = function(e) {
  ce = null, _a && _a(e);
}, he.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Sa && Sa(e, t);
}, he.__r = function(e) {
  za && za(e), nt = 0;
  var t = (ce = e.__c).__H;
  t && (Kn === ce ? (t.__h = [], ce.__h = [], t.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.some(sn), t.__h.some(To), t.__h = [], nt = 0)), Kn = ce;
}, he.diffed = function(e) {
  Ma && Ma(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Wi.push(t) !== 1 && ka === he.requestAnimationFrame || ((ka = he.requestAnimationFrame) || a2)(o2)), t.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), Kn = ce = null;
}, he.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.some(sn), n.__h = n.__h.filter(function(a) {
        return !a.__ || To(a);
      });
    } catch (a) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], he.__e(a, n.__v);
    }
  }), Ca && Ca(e, t);
}, he.unmount = function(e) {
  La && La(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.some(function(a) {
    try {
      sn(a);
    } catch (i) {
      t = i;
    }
  }), n.__H = void 0, t && he.__e(t, n.__v));
};
var Ea = typeof requestAnimationFrame == "function";
function a2(e) {
  var t, n = function() {
    clearTimeout(a), Ea && cancelAnimationFrame(t), setTimeout(e);
  }, a = setTimeout(n, 35);
  Ea && (t = requestAnimationFrame(n));
}
function sn(e) {
  var t = ce, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), ce = t;
}
function To(e) {
  var t = ce;
  e.__c = e.__(), ce = t;
}
function aa(e, t) {
  return !e || e.length !== t.length || t.some(function(n, a) {
    return n !== e[a];
  });
}
function Ui(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Yi = "photoframe.quality", We = [];
function Vi() {
  try {
    return localStorage.getItem(Yi) || "auto";
  } catch {
    return "auto";
  }
}
function i2(e) {
  try {
    localStorage.setItem(Yi, e);
  } catch {
  }
  We.forEach((t) => t());
}
function Bo() {
  const e = navigator, t = /Android/i.test(navigator.userAgent);
  return typeof e.deviceMemory == "number" ? e.deviceMemory <= 2 ? "lite" : "full" : t && (!navigator.hardwareConcurrency || navigator.hardwareConcurrency <= 4) ? "lite" : "full";
}
function ot() {
  const e = Vi();
  return e === "auto" ? Bo() : e;
}
function ia() {
  const [e, t] = _(ot());
  return H(() => {
    const n = () => t(ot());
    return We.push(n), () => {
      We.splice(We.indexOf(n), 1);
    };
  }, []), e;
}
function s2() {
  return ot() === "lite" ? 800 : 150;
}
const bt = {}, eo = [], c2 = 4;
function r2() {
  const e = ot() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  let t = screen.width * e, n = screen.height * e;
  const a = Math.min(1, (ot() === "lite" ? 1280 : 2560) / Math.max(t, n));
  return t = Math.round(t * a), n = Math.round(n * a), { w: t, h: n };
}
function l2() {
  const e = ot() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2), t = Math.max(screen.width, screen.height) * e;
  return Math.round(Math.min(ot() === "lite" ? 1280 : 2560, t));
}
function d2(e, t) {
  return new Promise((n) => {
    const a = new Image();
    a.onerror = () => n(e), a.onload = () => {
      const i = Math.max(a.naturalWidth, a.naturalHeight);
      if (!i || i <= t) {
        n(e);
        return;
      }
      const c = t / i, s = document.createElement("canvas");
      s.width = Math.round(a.naturalWidth * c), s.height = Math.round(a.naturalHeight * c);
      try {
        s.getContext("2d").drawImage(a, 0, 0, s.width, s.height), s.toBlob((l) => {
          s.width = s.height = 0, n(l ? URL.createObjectURL(l) : e);
        }, "image/jpeg", 0.85);
      } catch {
        n(e);
      }
    }, a.src = e;
  });
}
function Ia(e) {
  if (!e || /^(data|blob):/.test(e) || !HTMLCanvasElement.prototype.toBlob || e.indexOf("/api/photoframe/photo/") !== -1) return Promise.resolve(e);
  const t = l2(), n = e + "@" + t;
  if (n in bt) return bt[n];
  const a = d2(e, t);
  for (bt[n] = a, eo.push(n); eo.length > c2; ) {
    const i = eo.shift(), c = bt[i];
    delete bt[i], c.then((s) => {
      /^blob:/.test(s) && URL.revokeObjectURL(s);
    });
  }
  return a;
}
const Gi = "photoframe.fit";
function xn() {
  try {
    return localStorage.getItem(Gi) || "auto";
  } catch {
    return "auto";
  }
}
function f2(e) {
  try {
    localStorage.setItem(Gi, e);
  } catch {
  }
  We.forEach((t) => t());
}
function h2() {
  const [e, t] = _(xn());
  return H(() => {
    const n = () => t(xn());
    return We.push(n), () => {
      We.splice(We.indexOf(n), 1);
    };
  }, []), e;
}
function u2(e, t) {
  const n = xn();
  return !e || !t || n === "cover" ? !1 : n === "contain" ? !0 : e >= t != window.innerWidth >= window.innerHeight;
}
class sa {
  // baseUrl — адрес HA; token — отдаёт свежий access-токен входа через HA (lib/haAuth).
  constructor(t, n) {
    this.baseUrl = t, this.token = n, this.states = {}, this.loaded = !1, this.registry = {}, this.devices = {}, this.status = "idle", this.admin = !1, this.ws = null, this.msgId = 1, this.listeners = [], this.stopped = !1, this.pending = {}, this.subs = {}, this.emitTimer = 0, this.changed = null;
  }
  get isAdmin() {
    return this.admin;
  }
  // Путь на сервере HA (/media/…, /api/…) → полный адрес; рамка может быть открыта не с домена HA.
  resolveUrl(t) {
    return !t || /^(data:|blob:|https?:)/.test(t) ? t : this.baseUrl.replace(/\/+$/, "") + t;
  }
  subscribe(t) {
    return this.listeners.push(t), () => {
      this.listeners = this.listeners.filter((n) => n !== t);
    };
  }
  emitNow() {
    if (clearTimeout(this.emitTimer), this.emitTimer = 0, this.changed) {
      const t = {};
      for (const n in this.states) t[n] = this.states[n];
      for (const n in this.changed) t[n] = this.changed[n];
      this.states = t, this.changed = null;
    }
    this.listeners.forEach((t) => t());
  }
  emit() {
    this.emitTimer || (this.emitTimer = window.setTimeout(() => this.emitNow(), s2()));
  }
  setStatus(t) {
    this.status = t, this.emitNow();
  }
  connect() {
    if (!this.baseUrl) {
      this.setStatus("idle");
      return;
    }
    this.stopped = !1, this.setStatus("connecting"), this.token().then((t) => {
      this.stopped || (t ? this.open(t) : (this.stopped = !0, this.setStatus("auth_invalid")));
    }, () => this.scheduleReconnect());
  }
  open(t) {
    const n = this.baseUrl.replace(/\/+$/, "").replace(/^http/, "ws") + "/api/websocket";
    let a;
    try {
      a = new WebSocket(n);
    } catch {
      this.scheduleReconnect();
      return;
    }
    this.ws = a, a.onmessage = (i) => {
      const c = JSON.parse(i.data);
      if (c.type === "auth_required")
        a.send(JSON.stringify({ type: "auth", access_token: t }));
      else if (c.type === "auth_invalid")
        this.stopped = !0, this.setStatus("auth_invalid"), a.close();
      else if (c.type === "auth_ok")
        this.setStatus("connected"), this.call({ type: "auth/current_user" }).then((s) => {
          this.admin = !!s.is_admin, this.emit();
        }, () => {
        }), this.send({ type: "subscribe_events", event_type: "state_changed" }), this.call({ type: "get_states" }).then((s) => {
          const l = {};
          s.forEach((f) => {
            l[f.entity_id] = f;
          }), this.states = l, this.changed = null, this.loaded = !0, this.emit(), this.loadRegistry();
        }, () => {
        });
      else if (c.type === "result") {
        const s = this.pending[c.id];
        s && (delete this.pending[c.id], c.success ? s.resolve(c.result) : s.reject(new Error(c.error && c.error.message || "HA error")));
      } else if (c.type === "event" && this.subs[c.id])
        this.subs[c.id](c.event);
      else if (c.type === "event" && c.event.event_type === "state_changed") {
        const s = c.event.data.new_state;
        s && ((this.changed || (this.changed = {}))[s.entity_id] = s, this.emit());
      }
    }, a.onclose = () => {
      this.ws === a && (this.ws = null), Object.keys(this.pending).forEach((i) => this.pending[+i].reject(new Error("disconnected"))), this.pending = {}, this.subs = {}, this.stopped || (this.setStatus("disconnected"), this.scheduleReconnect());
    };
  }
  scheduleReconnect(t = 5e3) {
    clearTimeout(this.retryTimer), this.retryTimer = window.setTimeout(() => this.connect(), t);
  }
  disconnect() {
    this.stopped = !0, clearTimeout(this.retryTimer), this.ws && this.ws.close(), this.ws = null;
  }
  send(t) {
    return !this.ws || this.ws.readyState !== WebSocket.OPEN ? !1 : (this.ws.send(JSON.stringify({ id: this.msgId++, ...t })), !0);
  }
  loadRegistry() {
    this.call({ type: "config/entity_registry/list_for_display" }).then((t) => {
      const n = {}, a = {};
      t.entities.forEach((i) => {
        if (n[i.ei] = i, !i.di) return;
        const c = a[i.di] || (a[i.di] = { id: i.di, name: "", entities: [] });
        c.entities.push(i.ei);
        const s = this.states[i.ei], l = s && String(s.attributes.friendly_name || "");
        l && !c.name && (c.name = i.en && l.length > i.en.length && l.slice(-i.en.length) === i.en ? l.slice(0, -i.en.length).trim() : i.en ? "" : l);
      }), this.registry = n, this.devices = a, this.emit();
    }, () => {
    });
  }
  // Подписка: onEvent вызывается на каждое событие, пока не отпишутся. После переподключения
  // подписки пропадают — компоненты подписываются заново по смене status.
  subscribeMessage(t, n) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return () => {
    };
    const a = this.msgId++, i = this.ws;
    return this.subs[a] = n, i.send(JSON.stringify({ id: a, ...t })), () => {
      delete this.subs[a], i.readyState === WebSocket.OPEN && i.send(JSON.stringify({ id: this.msgId++, type: "unsubscribe_events", subscription: a }));
    };
  }
  // Запрос с ответом: история, статистика, реестр сущностей.
  call(t) {
    return new Promise((n, a) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        a(new Error("not connected"));
        return;
      }
      const i = this.msgId++;
      this.pending[i] = { resolve: n, reject: a }, this.ws.send(JSON.stringify({ id: i, ...t }));
    });
  }
  callService(t, n, a) {
    return this.send({
      type: "call_service",
      domain: t.split(".")[0],
      service: n,
      target: { entity_id: t },
      ...a ? { service_data: a } : {}
    });
  }
  // Обложки и картинки сущностей. Внешние (обложки Яндекс Музыки) — как есть, HA-шные
  // (/api/media_player_proxy/…?token=…) уже подписаны токеном сущности — нужен только адрес HA.
  pictureUrl(t) {
    return this.resolveUrl(t || "");
  }
  // Запрос к REST API HA с авторизацией (загрузка фото в медиатеку). XHR, а не fetch: fetch нет в Chrome 37.
  fetch(t, n = {}) {
    return this.token().then((a) => new Promise((i, c) => {
      const s = new XMLHttpRequest();
      s.open(n.method || "GET", this.baseUrl.replace(/\/+$/, "") + t), s.setRequestHeader("Authorization", "Bearer " + a), s.onload = () => i({ ok: s.status >= 200 && s.status < 300, status: s.status }), s.onerror = () => c(new Error("network")), s.send(n.body || null);
    }));
  }
  toggle(t) {
    return this.callService(t, "toggle");
  }
  turnOff(t) {
    return this.callService(t, "turn_off");
  }
  // camera_proxy_stream принимает access_token из атрибутов камеры (он сам обновляется в HA).
  cameraStreamUrl(t) {
    const n = this.states[t], a = n && n.attributes.access_token;
    return a ? this.baseUrl.replace(/\/+$/, "") + "/api/camera_proxy_stream/" + t + "?token=" + a : "";
  }
  // Один кадр камеры: entity_picture в HA уже подписан и обновляется сам; иначе — camera_proxy с токеном.
  cameraSnapshotUrl(t) {
    const n = this.states[t];
    if (!n) return "";
    const a = n.attributes.entity_picture;
    if (a) return this.resolveUrl(a);
    const i = n.attributes.access_token;
    return i ? this.baseUrl.replace(/\/+$/, "") + "/api/camera_proxy/" + t + "?token=" + i : "";
  }
}
const ca = Hn(null), cn = Hn(!0);
function ae() {
  const e = Dt(ca), t = Dt(cn), [, n] = _(0), a = X(!1);
  return H(() => {
    if (!t) {
      a.current = !0;
      return;
    }
    return a.current && (a.current = !1, n((i) => i + 1)), e.subscribe(() => n((i) => i + 1));
  }, [e, t]), e;
}
function Fn(e) {
  return e === "on" || e === "open" || e === "playing";
}
function Tt(e) {
  return e === void 0 || e === "unavailable" || e === "unknown";
}
function at(e, t) {
  if (e.status !== "connected" || !e.loaded) return !0;
  const n = e.states[t];
  return !!n && n.state !== "unavailable";
}
function Fe(e, t) {
  const n = t ? e.states[t] : void 0;
  return n && !Tt(n.state) ? n.state : void 0;
}
function rn(e, t = 1) {
  return e === void 0 || isNaN(parseFloat(e)) ? "--" : parseFloat(e).toFixed(t);
}
function yn(e, t) {
  const n = e.states[t];
  return n && n.attributes.unit_of_measurement ? " " + n.attributes.unit_of_measurement : "";
}
const Xi = Hn(() => {
});
function Rn() {
  return Dt(Xi);
}
const m2 = "English", p2 = {
  "admin.copied": "Copied to {n}, {online} online already have it, the rest get it when they connect",
  "admin.copy_all": "Everything: look and grid",
  "admin.copy_go": "Copy ({n})",
  "admin.copy_grid": "Grid only",
  "admin.copy_no_look": "This frame hasn't reported its look yet — only the grid will be copied.",
  "admin.copy_none": "No other frames.",
  "admin.copy_to": "Copy to…",
  "admin.dashboard_hint": "This is how the dashboard looks on this frame's screen. Edit it right here: the pencil in the header turns on editing. Each frame has its own layout; narrow screens have their own phone layout.",
  "admin.mode_dashboard": "Dashboard",
  "admin.mode_photo": "Photo screen",
  "admin.no_frames": "No frames yet: open the app on a device and it shows up here.",
  "admin.no_grid": "Grid is off — blocks use the regular layout",
  "admin.refresh": "Refresh",
  "admin.save": "Save to frame",
  "admin.saved_offline": "Saved — the frame takes it when it connects",
  "admin.saved_online": "Saved — the frame already has it",
  "admin.saving": "Saving…",
  "admin.size_guess": "approximate size — the frame hasn't reported its screen yet",
  "admin.title": "Photo frames",
  "admin.use_grid": "Grid for this screen",
  _language: m2,
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
  "tv.prev": "Previous photo",
  "tv.next": "Next photo",
  "tv.home": "Home",
  "tv.home_hint": "Open home control",
  "tv.photos": "Photos",
  "ambient.offline": "No connection to home",
  "camera.live_title": "Live camera",
  "camera.close": "Close",
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
}, A2 = "Русский", g2 = {
  "admin.copied": "Скопировано на {n}, в сети — {online}: они уже взяли, остальные возьмут при подключении",
  "admin.copy_all": "Всё: вид и сетка",
  "admin.copy_go": "Скопировать ({n})",
  "admin.copy_grid": "Только сетка",
  "admin.copy_no_look": "Эта рамка ещё не сообщила свой вид — уйдёт только сетка.",
  "admin.copy_none": "Других рамок нет.",
  "admin.copy_to": "Скопировать на…",
  "admin.dashboard_hint": "Так дашборд выглядит на экране этой рамки. Правьте здесь же: карандаш в шапке — режим редактирования. Раскладка у каждой рамки своя, на узких экранах — своя телефонная.",
  "admin.mode_dashboard": "Дашборд",
  "admin.mode_photo": "Экран с фото",
  "admin.no_frames": "Рамок пока нет: откройте приложение на устройстве, и оно появится здесь.",
  "admin.no_grid": "Сетка выключена — блоки стоят обычным расположением",
  "admin.refresh": "Обновить",
  "admin.save": "Сохранить на рамку",
  "admin.saved_offline": "Сохранено — рамка возьмёт сетку, когда подключится",
  "admin.saved_online": "Сохранено — рамка уже взяла сетку",
  "admin.saving": "Сохраняю…",
  "admin.size_guess": "размер примерный — рамка ещё не сообщала свой экран",
  "admin.title": "Фоторамки",
  "admin.use_grid": "Сетка для этого экрана",
  _language: A2,
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
  "tv.prev": "Предыдущее фото",
  "tv.next": "Следующее фото",
  "tv.home": "Дом",
  "tv.home_hint": "Открыть управление домом",
  "tv.photos": "Фото",
  "ambient.offline": "Нет связи с домом",
  "camera.live_title": "Прямой эфир с камеры",
  "camera.close": "Закрыть",
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
}, Na = /* @__PURE__ */ Object.assign({ "./locales/en.json": p2, "./locales/ru.json": g2 }), He = {};
Object.keys(Na).forEach((e) => {
  const t = e.replace(/^.*\/([^/]+)\.json$/, "$1");
  He[t] = Na[e];
});
const wn = "en", Zi = "photoframe.language";
let Bt = wn;
const ln = [];
function b2() {
  return Object.keys(He).sort().map((e) => ({ code: e, name: He[e]._language || e }));
}
function to(e) {
  if (!e) return null;
  if (He[e]) return e;
  const t = e.split(/[-_]/)[0].toLowerCase();
  return He[t] ? t : null;
}
function $i() {
  try {
    return localStorage.getItem(Zi) || "";
  } catch {
    return "";
  }
}
function v2(e) {
  try {
    localStorage.setItem(Zi, e);
  } catch {
  }
}
let Da;
function jn(e) {
  e && (Da = e);
  const t = to($i()) || to(Da) || to(navigator.language) || wn;
  t !== Bt && (Bt = t, ln.forEach((n) => n()));
}
function d(e, t) {
  let n = He[Bt] && He[Bt][e] || He[wn] && He[wn][e] || e;
  return t && Object.keys(t).forEach((a) => {
    n = n.split("{" + a + "}").join(String(t[a]));
  }), n;
}
function mt(e) {
  return d(e).split(",").map((t) => t.trim());
}
jn();
function x2() {
  const [, e] = _(0);
  return H(() => {
    const t = () => e((n) => n + 1);
    return ln.push(t), () => {
      ln.splice(ln.indexOf(t), 1);
    };
  }, []), Bt;
}
const it = 12, y2 = 2, Ji = 2, ut = 4, kn = {
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
function Pt(e) {
  return d("card." + e + ".title");
}
function Ki(e) {
  return d("card." + e + ".hint");
}
const Mt = {
  amber: "#fbbf24",
  sky: "#7dd3fc",
  green: "#34d399",
  pink: "#f9a8d4",
  violet: "#c4b5fd",
  red: "#fb7185"
};
let e1 = 0;
function w2() {
  return "c" + Date.now().toString(36) + (e1++).toString(36);
}
function t1() {
  return {
    cols: it,
    cards: [
      { id: "climate", type: "climate", title: "", icon: "thermometer", x: 0, y: 0, w: 3, h: 6, chip: !0, items: [] },
      { id: "lights", type: "switches", title: "", icon: "lightbulb", x: 3, y: 0, w: 6, h: 6, chip: !0, color: "amber", items: [] },
      { id: "weather", type: "weather", title: "", icon: "cloud-sun", x: 9, y: 0, w: 3, h: 3, chip: !0, items: [] },
      { id: "home", type: "sensors", title: "", icon: "shield", x: 9, y: 3, w: 3, h: 3, chip: !0, items: [] }
    ]
  };
}
function ra(e, t) {
  return e.x < t.x + t.w && t.x < e.x + e.w && e.y < t.y + t.h && t.y < e.y + e.h;
}
function la(e, t) {
  return e.y - t.y || e.x - t.x;
}
function Ot(e, t = it) {
  const n = Math.max(y2, Math.min(t, Math.round(e.w))), a = Math.max(Ji, Math.round(e.h));
  return { ...e, w: n, h: a, x: Math.max(0, Math.min(t - n, Math.round(e.x))), y: Math.max(0, Math.round(e.y)) };
}
function _n(e) {
  return e.reduce((t, n) => Math.max(t, n.y + n.h), 0);
}
function n1(e, t) {
  const n = e.filter((i) => i.id !== t.id);
  let a = Math.max(0, t.y);
  for (let i = 0; i < 500; i++) {
    const c = n.filter((s) => ra({ ...t, y: a }, s));
    if (!c.length) break;
    a = Math.max.apply(null, c.map((s) => s.y + s.h));
  }
  return e.map((i) => i.id === t.id ? { ...t, y: a } : i);
}
function k2(e, t) {
  const n = [t];
  return e.filter((a) => a.id !== t.id).sort(la).forEach((a) => {
    let i = a.y;
    for (let c = 0; c < 500; c++) {
      const s = n.filter((l) => ra({ ...a, y: i }, l));
      if (!s.length) break;
      i = Math.max.apply(null, s.map((l) => l.y + l.h));
    }
    n.push({ ...a, y: i });
  }), e.map((a) => n.filter((i) => i.id === a.id)[0]);
}
function o1(e) {
  const t = [];
  return e.slice().sort(la).forEach((n) => {
    let a = n.y;
    for (let i = 0; i < 500; i++) {
      const c = t.filter((s) => ra({ ...n, y: a }, s));
      if (!c.length) break;
      a = Math.max.apply(null, c.map((s) => s.y + s.h));
    }
    t.push({ ...n, y: a });
  }), e.map((n) => t.filter((a) => a.id === n.id)[0]);
}
function Pe(e, t) {
  const n = e, i = (n && Array.isArray(n.screens) ? n.screens : n && Array.isArray(n.cards) ? [n] : []).filter((c) => c && Array.isArray(c.cards)).map((c, s) => ({ ...z2(c), id: String(c.id || (s ? "s" + s : "main")), name: String(c.name || "") }));
  return i.length ? i : [{ ...t ? t() : { cols: it, cards: [] }, id: "main", name: "" }];
}
function _2() {
  return "s" + Date.now().toString(36) + (e1++).toString(36);
}
function Ct(e, t) {
  return e.name || d("screen.default", { n: t + 1 });
}
function z2(e) {
  if (e.cols === it) return Ta(e);
  const t = [], n = (i, c, s, l) => {
    for (let f = c; f < c + l; f++) for (let h = i; h < i + s; h++) if (t[f] && t[f][h]) return !1;
    return !0;
  }, a = e.cards.map((i) => {
    const c = Math.min(i.w || 1, 4), s = i.h || 1;
    for (let l = 0; ; l++)
      for (let f = 0; f + c <= 4; f++)
        if (n(f, l, c, s)) {
          for (let h = l; h < l + s; h++) {
            t[h] = t[h] || [];
            for (let u = f; u < f + c; u++) t[h][u] = !0;
          }
          return { ...i, x: f * 3, y: l * 3, w: c * 3, h: s * 3 };
        }
  });
  return Ta({ ...e, cols: it, cards: a });
}
function Ta(e) {
  const t = (i) => typeof i == "number" && isFinite(i);
  let n = e.cards.reduce((i, c) => t(c.y) && t(c.h) ? Math.max(i, c.y + c.h) : i, 0);
  const a = e.cards.map((i) => {
    const c = t(i.w) ? i.w : 3, s = t(i.h) ? i.h : 3;
    if (t(i.x) && t(i.y)) return Ot({ ...i, w: c, h: s });
    const l = Ot({ ...i, x: 0, y: n, w: c, h: s });
    return n += l.h, l;
  });
  return { ...e, cols: it, cards: o1(a) };
}
function M2(e) {
  const t = e.slice().sort(la), n = t.filter((c) => c.m && !c.m.hide).map((c) => Ot({ ...c, x: c.m.x, y: c.m.y, w: c.m.w, h: c.m.h }, ut));
  let a = _n(n);
  const i = t.filter((c) => !c.m).map((c) => {
    const s = Math.max(Ji, Math.min(ut, Math.round(c.h * 2 / 3))), l = { ...c, x: 0, y: a, w: ut, h: s };
    return a += s, l;
  });
  return o1(n.concat(i));
}
function no(e, t) {
  return e.map((n) => {
    const a = t.filter((i) => i.id === n.id)[0];
    return a ? { ...n, m: { x: a.x, y: a.y, w: a.w, h: a.h } } : n;
  });
}
const C2 = "photoframe", Ht = "photos", L2 = 1920;
function a1() {
  return new Promise((e, t) => {
    const n = indexedDB.open(C2, 1);
    n.onupgradeneeded = () => n.result.createObjectStore(Ht, { keyPath: "id", autoIncrement: !0 }), n.onsuccess = () => e(n.result), n.onerror = () => t(n.error);
  });
}
function da(e, t) {
  return a1().then((n) => new Promise((a, i) => {
    const c = t(n.transaction(Ht, e).objectStore(Ht));
    c.onsuccess = () => a(c.result), c.onerror = () => i(c.error);
  }));
}
function oo() {
  return a1().then((e) => new Promise((t, n) => {
    const a = [], i = e.transaction(Ht, "readonly").objectStore(Ht).openCursor();
    i.onsuccess = () => {
      const c = i.result;
      c ? (a.push(c.value), c.continue()) : t(a);
    }, i.onerror = () => n(i.error);
  }));
}
function S2(e) {
  return da("readwrite", (t) => t.delete(e));
}
function Ba() {
  return da("readwrite", (e) => e.clear());
}
function i1(e) {
  return new Promise((t, n) => {
    const a = new FileReader();
    a.onerror = () => n(a.error), a.onload = () => {
      const i = new Image();
      i.onerror = () => n(new Error(d("errors.decode", { name: e.name }))), i.onload = () => {
        const c = Math.min(1, L2 / Math.max(i.width, i.height)), s = document.createElement("canvas");
        s.width = Math.round(i.width * c), s.height = Math.round(i.height * c), s.getContext("2d").drawImage(i, 0, 0, s.width, s.height);
        const l = s.toDataURL("image/jpeg", 0.85);
        s.width = s.height = 0, t(l);
      }, i.src = a.result;
    }, a.readAsDataURL(e);
  });
}
function E2(e) {
  return i1(e).then((t) => da("readwrite", (n) => n.add({ data: t }))).then(() => {
  });
}
const Pa = "photoframe.preview", Ft = (() => {
  const e = /[?&]preview=1\b/.test(location.search);
  try {
    return e && sessionStorage.setItem(Pa, "1"), sessionStorage.getItem(Pa) === "1";
  } catch {
    return e;
  }
})(), Oa = "photoframe.frameId", s1 = "photoframe.frameName", Ha = "photoframe.previewFrame";
function I2() {
  if (!Ft) return "";
  try {
    const e = new URLSearchParams(location.search).get("frame_id");
    return e && sessionStorage.setItem(Ha, e), sessionStorage.getItem(Ha) || "";
  } catch {
    return "";
  }
}
const Fa = I2();
function c1(e) {
  try {
    return localStorage.getItem(e) || "";
  } catch {
    return "";
  }
}
function r1(e, t) {
  try {
    localStorage.setItem(e, t);
  } catch {
  }
}
function Ue() {
  if (Fa) return Fa;
  let e = c1(Oa);
  if (!e) {
    for (e = ""; e.length < 16; ) e += Math.floor(Math.random() * 16).toString(16);
    r1(Oa, e);
  }
  return e;
}
function Rt() {
  return c1(s1);
}
function Ra(e) {
  r1(s1, e);
}
function N2() {
  const e = navigator.userAgent;
  return /SmartFrame\//.test(e) ? "Android (APK)" : /iPad|iPhone|iPod/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : "Browser";
}
const l1 = () => window.SmartFrame;
function ja() {
  const e = l1();
  try {
    return e && e.getApkVersion ? e.getApkVersion() : "";
  } catch {
    return "";
  }
}
function D2() {
  const e = l1();
  try {
    e && e.updateApk && e.updateApk(location.protocol + "//" + location.host + "/photoframe/photoframe.apk");
  } catch {
  }
}
function T2(e, t) {
  const n = { type: "photoframe/frame/connect", frame_id: Ue(), model: N2(), version: "1.0.0" };
  return Rt() && (n.name = Rt()), ja() && (n.apk = ja()), e.subscribeMessage(n, t);
}
function Lt(e, t) {
  e.call({ type: "photoframe/frame/report", frame_id: Ue(), ...t }).catch(() => {
  });
}
const jt = "custom:photoframe-card";
function fa(e) {
  if (!e || typeof e != "object") return null;
  if (e.type === jt) return e;
  const t = [e.views, e.cards, e.sections, e.card ? [e.card] : null];
  for (const n of t)
    if (Array.isArray(n))
      for (const a of n) {
        const i = fa(a);
        if (i) return i;
      }
  return null;
}
function B2() {
  const e = location.pathname.split("/")[1] || "lovelace";
  return e === "lovelace" ? null : e;
}
function d1(e) {
  return e.call({ type: "photoframe/config", frame_id: Ue() }).then((t) => ({ ...t, type: jt }), () => null);
}
function P2(e, t) {
  return e.call({ type: "lovelace/config", url_path: t }).then(
    (n) => fa(n),
    (n) => {
      if (/not found|config_not_found|No config/i.test(n.message)) return null;
      throw n;
    }
  );
}
class zn {
  // dashboard — путь дашборда с карточкой; не задан — тот, на котором открыта карточка.
  // standalone — это PWA со своим подключением к HA, а не карточка внутри фронтенда HA.
  // integration — данные в интеграции Photo Frame (photoframe/config/*), а не в конфиге дашборда.
  constructor(t, n, a, i = !1, c = !1) {
    this.client = t, this.config = n, this.dashboard = a, this.standalone = i, this.integration = c, this.album = "", this.sourceJob = null, this.queue = Promise.resolve(), this.saving = 0;
  }
  // Папка медиатеки внутри папки фото (для дерева в настройках): путь, фото в ней и во всех подпапках.
  folderTree() {
    return this.integration ? this.client.call({ type: "photoframe/folders" }).then((t) => t.folders || [], () => []) : Promise.resolve([]);
  }
  // Выбранная на рамке папка — запоминается у её устройства в HA; all (пусто) — вся папка фото.
  setAlbum(t) {
    return this.album = t && t !== "all" ? t : "all", this.integration ? this.client.call({ type: "photoframe/frame/album", frame_id: Ue(), album: this.album }).then(() => {
    }, (n) => {
      throw n;
    }) : Promise.resolve();
  }
  get folder() {
    const t = (this.config.media_folder || "photoframe").replace(/^\/+|\/+$/g, "");
    return this.album && this.album !== "all" ? t + "/" + this.album : t;
  }
  source() {
    return this.config.media_source ? Promise.resolve(this.config.media_source) : (this.sourceJob || (this.sourceJob = this.client.call({ type: "media_source/browse_media", media_content_id: "media-source://media_source" }).then((t) => {
      const a = [t.media_content_id || ""].concat((t.children || []).map((i) => i.media_content_id)).map((i) => (/^media-source:\/\/media_source\/([^/]+)\//.exec(i) || [])[1]).filter(Boolean);
      return a.indexOf("local") !== -1 ? "local" : a[0] || "local";
    }, () => "local")), this.sourceJob);
  }
  // Ссылка на папку фото (или альбом) в медиатеке HA — там их смотрят, удаляют и раскладывают.
  mediaBrowserUrl(t) {
    return this.source().then((n) => {
      const a = "media-source://media_source/" + n + "/" + (this.config.media_folder || "photoframe").replace(/^\/+|\/+$/g, ""), i = ["app,media-source://media_source", "," + a];
      return t && t !== "all" && i.push("," + a + "/" + t), this.client.resolveUrl("/media-browser/browser/" + i.map(encodeURIComponent).join("/"));
    });
  }
  folderId() {
    return this.source().then((t) => "media-source://media_source/" + t + "/" + this.folder);
  }
  get canEdit() {
    return this.integration ? this.config.can_edit !== !1 : this.client.isAdmin;
  }
  // Изменения от других устройств (интеграция рассылает конфиг после каждого сохранения).
  // Пока свои сохранения в пути — пропускаем, иначе раскладка мигнёт назад.
  watch(t) {
    return this.integration ? this.client.subscribeMessage({ type: "photoframe/config/subscribe", frame_id: Ue() }, (n) => {
      this.busy || (this.config = { ...n, type: jt }, t(this.config));
    }) : () => {
    };
  }
  get busy() {
    return this.saving > 0;
  }
  save(t) {
    this.saving++;
    const n = () => {
      if (this.integration) {
        const s = { type: "photoframe/config/save", frame_id: Ue() };
        return ["homes", "layouts", "settings"].forEach((l) => {
          l in t && (s[l] = t[l]);
        }), this.config = { ...this.config, ...t }, this.client.call(s);
      }
      const c = this.dashboard !== void 0 ? this.dashboard : B2();
      return this.client.call({ type: "lovelace/config", url_path: c }).then((s) => {
        const l = fa(s);
        if (!l) throw new Error(d("errors.card_not_found", { type: jt }));
        return Object.keys(t).forEach((f) => {
          l[f] = t[f];
        }), this.config = { ...this.config, ...t }, this.client.call({ type: "lovelace/config/save", url_path: c, config: s });
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
    const t = r2();
    return this.client.call({
      type: "photoframe/photos",
      album: this.album || "all",
      width: t.w,
      height: t.h
    }).then((n) => n.photos.map((a) => ({ id: a.id, url: this.client.resolveUrl(a.url) })));
  }
  listPhotoIds() {
    return this.integration ? this.integrationPhotos().then((t) => t.map((n) => String(n.id))) : this.folderId().then((t) => this.client.call({
      type: "media_source/browse_media",
      media_content_id: t
    })).then((t) => (t.children || []).filter((n) => n.media_class === "image").map((n) => n.media_content_id));
  }
  // Папки нет — HA отвечает ошибкой; отдаём понятный текст, чтобы показать его в настройках.
  listPhotos() {
    return this.integration ? this.integrationPhotos() : this.folderId().then((t) => this.client.call({
      type: "media_source/browse_media",
      media_content_id: t
    })).then((t) => {
      const n = (t.children || []).filter((a) => a.media_class === "image");
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
  addPhoto(t, n) {
    if (this.integration) {
      const a = new FormData();
      return a.append("album", n ?? (this.album && this.album !== "all" ? this.album : "")), a.append("file", t, t.name), this.client.fetch("/api/photoframe/upload", { method: "POST", body: a }).then((i) => {
        if (!i.ok)
          throw i.status === 401 || i.status === 403 ? new Error(d("errors.upload_admin")) : i.status === 415 ? new Error(d("errors.decode", { name: t.name })) : new Error(d("errors.upload", { status: i.status }));
      });
    }
    return i1(t).then((a) => this.addPhotoData(a, t.name.replace(/\.[^.]+$/, "") + ".jpg"));
  }
  // Уже уменьшенный кадр (dataURL JPEG) — так же лежат фото, загруженные в браузер до перехода на HA.
  addPhotoData(t, n) {
    return this.folderId().then((a) => {
      const i = atob(t.split(",")[1]), c = new Uint8Array(i.length);
      for (let l = 0; l < i.length; l++) c[l] = i.charCodeAt(l);
      const s = new FormData();
      return s.append("media_content_id", a), s.append("file", new Blob([c], { type: "image/jpeg" }), n), this.client.fetch("/api/media_source/local_source/upload", { method: "POST", body: s }).then((l) => {
        if (!l.ok)
          throw l.status === 401 || l.status === 403 ? new Error(d("errors.upload_admin")) : l.status === 400 || l.status === 404 ? new Error(d("errors.upload_folder", { folder: this.folder })) : new Error(d("errors.upload", { status: l.status }));
      });
    });
  }
  deletePhoto(t) {
    return this.client.call({ type: "media_source/local_source/remove", media_content_id: t });
  }
}
function f1() {
  try {
    if (window.parent === window) return null;
    const e = window.parent.document.querySelector("home-assistant");
    return e && e.hass && e.hass.auth || null;
  } catch {
    return null;
  }
}
const Mn = "photoframe.haAuth", O2 = "hassTokens";
function Po(e) {
  try {
    const t = localStorage.getItem(e), n = t ? JSON.parse(t) : null;
    return n && n.hassUrl && n.refresh_token ? n : null;
  } catch {
    return null;
  }
}
function Oo(e) {
  try {
    e ? localStorage.setItem(Mn, JSON.stringify(e)) : localStorage.removeItem(Mn);
  } catch {
  }
}
function Cn(e) {
  return e.replace(/\/+$/, "");
}
function H2() {
  return location.protocol + "//" + location.host + "/";
}
function F2() {
  return location.protocol + "//" + location.host + location.pathname;
}
function Ln() {
  if (f1())
    return { hassUrl: location.protocol + "//" + location.host, clientId: "", access_token: "", refresh_token: "", expires: 0, embedded: !0 };
  const e = Po(Mn);
  if (e) return e;
  const t = Po(O2);
  return t && Cn(t.hassUrl) === Cn(location.protocol + "//" + location.host) ? t : null;
}
function R2() {
  Oo(null);
}
function j2(e, t) {
  return new Promise((n, a) => {
    const i = new XMLHttpRequest();
    i.open("POST", Cn(e) + "/auth/token"), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.timeout = 15e3, i.onload = () => {
      if (i.status >= 200 && i.status < 300)
        try {
          n(JSON.parse(i.responseText));
        } catch (c) {
          a(c);
        }
      else a(new Error("auth " + i.status));
    }, i.onerror = i.ontimeout = () => a(new Error("network")), i.send(Object.keys(t).map((c) => c + "=" + encodeURIComponent(t[c])).join("&"));
  });
}
function q2() {
  const e = f1();
  if (e) return (e.expired ? e.refreshAccessToken() : Promise.resolve()).then(() => e.accessToken);
  const t = Ln();
  return t ? t.expires > Date.now() + 6e4 ? Promise.resolve(t.access_token) : j2(t.hassUrl, { grant_type: "refresh_token", refresh_token: t.refresh_token, client_id: t.clientId }).then(
    (n) => {
      const a = { ...t, access_token: n.access_token, expires: Date.now() + n.expires_in * 1e3 };
      return Oo(a), a.access_token;
    },
    (n) => {
      if (/auth 4/.test(n.message))
        return Po(Mn) && Oo(null), "";
      throw n;
    }
  ) : Promise.resolve("");
}
function Q2(e) {
  const t = Cn(e || location.protocol + "//" + location.host);
  location.href = t + "/auth/authorize?response_type=code&client_id=" + encodeURIComponent(H2()) + "&redirect_uri=" + encodeURIComponent(F2()) + "&state=" + encodeURIComponent(t);
}
const h1 = "photoframe.setup", Je = "photo-frame";
function W2(e) {
  const t = Date.now();
  return new Promise((n) => {
    const a = () => {
      const i = document.querySelector("home-assistant");
      if (i && i.hass && i.hass.user) return n(i.hass);
      if (Date.now() - t > e) return n(null);
      setTimeout(a, 1e3);
    };
    a();
  });
}
function Ho(e) {
  try {
    localStorage.setItem(h1, e);
  } catch {
  }
}
function U2(e) {
  history.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function u1(e) {
  const t = d("setup.dashboard_title");
  return e({
    type: "lovelace/dashboards/create",
    url_path: Je,
    title: t,
    icon: "mdi:image-frame",
    mode: "storage",
    show_in_sidebar: !0,
    require_admin: !1
  }).then(() => e({
    type: "lovelace/config/save",
    url_path: Je,
    config: { title: t, views: [{ title: t, path: "frame", type: "panel", cards: [{ type: jt, media_folder: "photoframe" }] }] }
  })).then(() => "/" + Je + "/frame");
}
function Y2(e) {
  const t = document.createElement("div");
  t.setAttribute("style", [
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
  const c = (f, h) => {
    const u = document.createElement("button");
    return u.textContent = f, u.setAttribute("style", "border:0;border-radius:10px;padding:8px 14px;font:inherit;font-weight:600;cursor:pointer;" + (h ? "background:#7dd3fc;color:#0b0d14" : "background:rgba(255,255,255,.1);color:#f5f7fb")), i.appendChild(u), u;
  }, s = c(d("setup.later"), !1), l = c(d("setup.create"), !0);
  t.appendChild(n), t.appendChild(a), t.appendChild(i), document.body.appendChild(t), s.onclick = () => {
    Ho("dismissed"), t.remove();
  }, l.onclick = () => {
    l.disabled = !0, l.textContent = d("common.loading"), u1((f) => e.callWS(f)).then((f) => {
      Ho("done"), t.remove(), U2(f);
    }, (f) => {
      l.disabled = !1, l.textContent = d("setup.create"), a.textContent = d("setup.failed", { error: f && f.message || String(f) });
    });
  };
}
function V2() {
  try {
    if (localStorage.getItem(h1)) return;
  } catch {
    return;
  }
  W2(3e4).then((e) => {
    if (!(!e || !e.user || !e.user.is_admin))
      return jn(e.language), e.callWS({ type: "lovelace/dashboards/list" }).then((t) => {
        if (t.some((n) => n.url_path === Je)) {
          Ho("done");
          return;
        }
        Y2(e);
      });
  }).catch(() => {
  });
}
function qn() {
  const e = window.SmartFrame;
  return e && e.showPhoto ? e : null;
}
function qa(e) {
  return !!qn() && /^(https?:)?\//.test(e);
}
function m1(e) {
  return /^https?:/.test(e) ? e : location.protocol + "//" + location.host + e;
}
function Qa(e, t, n) {
  const a = qn();
  try {
    a && a.showPhoto(e ? m1(e) : "", t, n);
  } catch {
  }
}
function G2(e) {
  const t = qn();
  try {
    t && t.preloadPhoto && t.preloadPhoto(m1(e));
  } catch {
  }
}
function X2(e) {
  window.SmartFramePhoto = (t, n) => e(n);
}
function Z2(e) {
  const t = window.SmartFrame;
  if (!t || !t.prefetchPhotos) return !1;
  try {
    return t.prefetchPhotos(e.join(`
`)), !0;
  } catch {
    return !1;
  }
}
function ao(e) {
  const t = qn();
  try {
    t && t.setPhotosVisible && t.setPhotosVisible(e);
  } catch {
  }
}
const $2 = 120;
let Wa = "", Ua = 0;
function J2(e) {
  const t = e.filter((i) => /^https?:/.test(i)).slice(0, $2);
  if (!t.length) return;
  const n = t.join("|"), a = Date.now();
  n === Wa && a - Ua < 10 * 6e4 || (Wa = n, Ua = a, !Z2(t) && "serviceWorker" in navigator && navigator.serviceWorker.ready.then((i) => {
    const c = navigator.serviceWorker.controller || i.active;
    c && c.postMessage({ type: "cache-photos", urls: t });
  }).catch(() => {
  }));
}
const ie = 12, p1 = { thin: 200, light: 300, regular: 500, bold: 700 }, A1 = {
  white: "#ffffff",
  contrast: "",
  accent: "",
  warm: "#fcd34d",
  mint: "#6ee7b7",
  sky: "#7dd3fc",
  rose: "#fda4af",
  custom: ""
}, kt = /^#[0-9a-f]{6}$/i;
function Ya(e, t) {
  return e === "custom" ? kt.test(t) ? t : "" : A1[e];
}
const g1 = "photoframe.lockscreen", b1 = "photoframe.hiddenChips", Ke = [];
function _t() {
  return { font: "thin", color: "white", widgetsColor: "", customColor: "#ffb86b", widgetsCustomColor: "#ffb86b", size: "m", layout: "auto", date: !0, datePos: "auto", weather: !0, chipStyle: "auto", widgetsPos: "clock", hidden: [], order: [], grid: null, gridPortrait: null, gridRev: 0 };
}
function qt() {
  try {
    const e = localStorage.getItem(g1);
    if (e) return { ..._t(), ...JSON.parse(e) };
    const t = localStorage.getItem(b1);
    return t ? { ..._t(), hidden: JSON.parse(t) } : _t();
  } catch {
    return _t();
  }
}
function me(e) {
  try {
    localStorage.setItem(g1, JSON.stringify({ ...qt(), ...e })), localStorage.removeItem(b1);
  } catch {
  }
  Ke.forEach((t) => t());
}
function K2(e) {
  return Ke.push(e), () => {
    Ke.splice(Ke.indexOf(e), 1);
  };
}
function Qn() {
  const [, e] = _(0);
  return H(() => {
    const t = () => e((n) => n + 1);
    return Ke.push(t), () => {
      Ke.splice(Ke.indexOf(t), 1);
    };
  }, []), qt();
}
function er(e, t) {
  const n = (a) => {
    const i = t.order.indexOf(a);
    return i === -1 ? 1e6 : i;
  };
  return e.map((a, i) => ({ c: a, i })).sort((a, i) => n(a.c.id) - n(i.c.id) || a.i - i.i).map((a) => a.c);
}
function v1(e, t) {
  const n = e.layout === "auto" ? t ? "corner" : "center" : e.layout, a = n === "top" ? { x: 2, y: 1, w: 8, h: 4 } : n === "corner" ? { x: 0, y: 6, w: 6, h: 5 } : { x: 2, y: 6, w: 8, h: 4 }, i = e.widgetsPos === "top" ? { x: 2, y: 0, w: 8, h: 1 } : e.widgetsPos === "bottom" ? { x: 2, y: 10, w: 8, h: 1 } : n === "corner" ? { x: 6, y: 10, w: 6, h: 1 } : { x: 2, y: a.y + a.h, w: 8, h: 1 };
  return { clock: a, widgets: i };
}
function Fo(e) {
  const t = Math.max(1, Math.min(ie, Math.round(e.w))), n = Math.max(1, Math.min(ie, Math.round(e.h))), a = { w: t, h: n, x: Math.max(0, Math.min(ie - t, Math.round(e.x))), y: Math.max(0, Math.min(ie - n, Math.round(e.y))) };
  return (e.ha === "left" || e.ha === "center" || e.ha === "right") && (a.ha = e.ha), (e.va === "top" || e.va === "middle" || e.va === "bottom") && (a.va = e.va), a;
}
function $e(e) {
  const t = e, n = (a) => a && [a.x, a.y, a.w, a.h].every((i) => typeof i == "number" && isFinite(i));
  return t && n(t.clock) && n(t.widgets) ? { clock: Fo(t.clock), widgets: Fo(t.widgets) } : null;
}
function Va() {
  return window.innerHeight > window.innerWidth ? "portrait" : "landscape";
}
function x1() {
  const [e, t] = _(Va());
  return H(() => {
    const n = () => t(Va());
    return window.addEventListener("resize", n), window.addEventListener("orientationchange", n), () => {
      window.removeEventListener("resize", n), window.removeEventListener("orientationchange", n);
    };
  }, []), e;
}
function y1(e, t) {
  return t === "portrait" ? e.gridPortrait : e.grid;
}
function Ro(e, t) {
  return e === "portrait" ? { gridPortrait: t } : { grid: t };
}
const w1 = [
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
function tr(e) {
  const t = {};
  return w1.forEach((n) => {
    t[n] = e[n];
  }), t;
}
function ha(e) {
  const t = e || {}, n = _t(), a = {};
  return w1.forEach((i) => {
    if (!(i in t)) return;
    const c = t[i];
    i === "grid" || i === "gridPortrait" ? a[i] = c == null ? null : $e(c) : Array.isArray(n[i]) ? Array.isArray(c) && (a[i] = c.filter((s) => typeof s == "string")) : typeof c == typeof n[i] && (a[i] = c);
  }), a;
}
const Me = "main", k1 = "photoframe.cache", _1 = "photoframe.mainHome", z1 = "photoframe.startScreen", M1 = "photoframe.slideMs", C1 = "photoframe.idleSec";
function Ga(e) {
  try {
    const t = localStorage.getItem(e), n = t == null ? NaN : +t;
    return isFinite(n) ? n : void 0;
  } catch {
    return;
  }
}
function Sn() {
  return { slideIntervalMs: Ga(M1), idleSec: Ga(C1) };
}
function Xa(e) {
  try {
    localStorage.setItem(M1, String(e.slideIntervalMs)), localStorage.setItem(C1, String(e.idleSec));
  } catch {
  }
}
function En() {
  try {
    return localStorage.getItem(_1) || Me;
  } catch {
    return Me;
  }
}
function In() {
  try {
    return localStorage.getItem(z1) || "";
  } catch {
    return "";
  }
}
const Nn = () => Pe(null, t1), Xt = "photoframe.localBackup", io = "photoframe.migrated";
function so(e) {
  return { screens: e.map((t) => ({ id: t.id, name: t.name, cols: t.cols, cards: t.cards })) };
}
function nr() {
  return {
    settings: {
      haUrl: "",
      slideIntervalMs: Sn().slideIntervalMs ?? 1e4,
      idleSec: Sn().idleSec ?? 45
    },
    homes: [{ id: Me, name: d("home.default_name") }],
    screens: { [Me]: Nn() },
    active: En(),
    screen: In(),
    layout: Nn()[0],
    photos: [],
    sync: "connecting"
  };
}
function or() {
  const e = nr();
  try {
    const t = localStorage.getItem(k1);
    if (t) {
      const n = JSON.parse(t), a = {};
      if (n.screens) Object.keys(n.screens).forEach((f) => {
        a[f] = Pe({ screens: n.screens[f] });
      });
      else {
        const f = n.layouts || (n.layout ? { [Me]: n.layout } : {});
        Object.keys(f).forEach((h) => {
          a[h] = Pe(f[h]);
        });
      }
      a[Me] || (a[Me] = e.screens[Me]);
      const i = n.settings || {}, c = { ...e.settings };
      typeof i.haUrl == "string" && (c.haUrl = i.haUrl);
      const s = Sn();
      s.slideIntervalMs !== void 0 ? c.slideIntervalMs = s.slideIntervalMs : typeof i.slideIntervalMs == "number" && (c.slideIntervalMs = i.slideIntervalMs), s.idleSec !== void 0 ? c.idleSec = s.idleSec : typeof i.idleSec == "number" && (c.idleSec = i.idleSec);
      const l = n.homes ? n.homes.map((f) => ({ id: f.id, name: f.name })) : e.homes;
      return { ...e, settings: c, homes: l, screens: a, photos: n.photos || [] };
    }
  } catch {
  }
  return e;
}
const jo = "photoframe.integration";
function ar() {
  try {
    return localStorage.getItem(jo) === "1";
  } catch {
    return !1;
  }
}
function Za(e) {
  try {
    e ? localStorage.setItem(jo, "1") : localStorage.removeItem(jo);
  } catch {
  }
}
const Zt = "photoframe.renamePending";
class ir {
  constructor() {
    this.state = or(), this.listeners = [], this.card = null, this.ui = { controls: Ft, editing: !1 }, this.photoTimer = 0, this.bundled = [], this.photoError = "", this.cardError = "", this.haClient = null, this.haLink = "none", this.migration = null, this.frameOff = null, this.gridOff = null, this.frameClient = null, this.screenOn = !0, this.brightness = 100, this.commandListeners = [];
  }
  subscribe(t) {
    return this.listeners.push(t), () => {
      this.listeners = this.listeners.filter((n) => n !== t);
    };
  }
  set(t) {
    const n = { ...this.state, ...t };
    n.homes.some((c) => c.id === n.active) || (n.active = Me);
    const a = n.screens[n.active] || Pe(null), i = a.filter((c) => c.id === n.screen)[0] || a[0];
    if (n.screen = i.id, n.layout = i, this.state = n, t.settings || t.screens || t.homes || t.photos)
      try {
        const { settings: c, homes: s, screens: l, photos: f } = this.state;
        localStorage.setItem(k1, JSON.stringify({
          settings: c,
          homes: s,
          screens: l,
          photos: this.state.sync === "local" ? [] : f
        }));
      } catch {
      }
    this.listeners.forEach((c) => c());
  }
  // Показать дом (и его экран; без экрана — первый).
  setActive(t, n = "") {
    (t !== this.state.active || n && n !== this.state.screen) && this.set({ active: t, screen: n });
  }
  // Все экраны всех домов подряд: свайп листает их по кругу, переходя от дома к дому.
  step(t) {
    const n = [];
    if (this.state.homes.forEach((c) => (this.state.screens[c.id] || []).forEach((s) => n.push({ home: c.id, screen: s.id }))), n.length < 2) return;
    let a = 0;
    n.forEach((c, s) => {
      c.home === this.state.active && c.screen === this.state.screen && (a = s);
    });
    const i = n[(a + t + n.length) % n.length];
    this.set({ active: i.home, screen: i.screen });
  }
  // Стартовый экран этого устройства — сюда рамка возвращается, когда её оставили в покое.
  setStart(t, n) {
    try {
      localStorage.setItem(_1, t), localStorage.setItem(z1, n);
    } catch {
    }
    this.listeners.forEach((a) => a());
  }
  goStart() {
    this.setActive(En(), In());
  }
  // Карточки всех экранов дома — информеры на фото собираются со всех.
  homeCards(t = this.state.active) {
    return (this.state.screens[t] || []).reduce((n, a) => n.concat(a.cards), []);
  }
  get photoUrls() {
    const t = this.state.photos.map((n) => n.url);
    return t.length ? t : this.card || this.haLink === "ready" || this.haLink === "missing" ? [] : this.bundled;
  }
  // PWA: пока работаем из браузера и, если вход в HA есть, подключаемся — хранилище переедет в HA.
  start() {
    this.card || this.state.sync !== "connecting" || (this.set({ sync: "local" }), this.state.photos.length || this.reloadLocalPhotos(), this.connectHa());
  }
  // Режим карточки дашборда: источник данных — конфиг карточки, его HA присылает заново при каждом сохранении.
  attachCard(t) {
    const n = this.card;
    this.card = t, this.applyCardConfig(t.config), (!n || n.folder !== t.folder) && this.reloadCardPhotos(), n || (this.photoTimer = window.setInterval(() => this.reloadCardPhotos(), 12 * 36e5), window.setInterval(() => this.checkCardPhotos(), 10 * 6e4));
  }
  // Поменялся ли набор фото в папке — только тогда перечитываем ссылки (иначе кадр на экране перезагрузится).
  checkCardPhotos() {
    this.card && this.card.listPhotoIds().then((t) => {
      const n = this.state.photos.map((a) => String(a.id)).sort().join("|");
      t.slice().sort().join("|") !== n && this.reloadCardPhotos();
    }, () => {
    });
  }
  applyCardConfig(t) {
    const n = t.homes && t.homes.length ? t.homes.map((l) => ({ id: l.id, name: l.name })) : [{ id: Me, name: d("home.default_name") }], a = {};
    n.forEach((l) => {
      const f = t.layouts && t.layouts[l.id];
      a[l.id] = f ? Pe(f) : l.id === Me ? Nn() : Pe(null);
    });
    const i = t.settings || {}, c = Sn(), s = { ...this.state.settings };
    s.slideIntervalMs = c.slideIntervalMs ?? (typeof i.slideIntervalMs == "number" ? i.slideIntervalMs : s.slideIntervalMs), s.idleSec = c.idleSec ?? (typeof i.idleSec == "number" ? i.idleSec : s.idleSec), (c.slideIntervalMs === void 0 || c.idleSec === void 0) && Xa(s), this.set({ sync: "card", homes: n, screens: a, settings: s });
  }
  reloadCardPhotos() {
    return this.card ? this.card.listPhotos().then(
      (t) => {
        this.photoError = "", this.set({ photos: t }), J2(t.map((n) => n.url));
      },
      // Сервер не ответил — оставляем последний список: рамка продолжает показывать его из кэша.
      (t) => {
        this.photoError = t.message, this.notify();
      }
    ) : Promise.resolve();
  }
  // Выбрали папку на рамке: запоминаем у устройства в HA и сразу показываем её фото.
  setAlbum(t) {
    const n = this.card;
    return n ? n.setAlbum(t).then(() => this.reloadCardPhotos()) : Promise.resolve();
  }
  saveCard(t) {
    this.card && this.card.save(t).catch((n) => {
      this.cardError = n.message || String(n), this.listeners.forEach((a) => a());
    });
  }
  notify() {
    this.listeners.forEach((t) => t());
  }
  connectHa() {
    const t = Ln();
    if (!t || this.haClient) return;
    const n = new sa(t.hassUrl, q2);
    this.haClient = n, this.haLink = "connecting";
    let a = "";
    n.subscribe(() => {
      if (n.status !== a)
        if (a = n.status, n.status === "connected") {
          const i = (c) => d1(n).then((s) => {
            if (s) {
              Za(!0), this.useIntegration(n, s);
              return;
            }
            if (ar() && c > 0) {
              window.setTimeout(() => {
                n.status === "connected" && i(c - 1);
              }, 1e4);
              return;
            }
            Za(!1), this.loadHaCard(), n.subscribeMessage({ type: "subscribe_events", event_type: "lovelace_updated" }, (l) => {
              l && l.data && l.data.url_path === Je && this.loadHaCard();
            });
          });
          i(30);
        } else n.status === "auth_invalid" && (this.haLink = "error", this.notify());
    }), n.connect(), this.notify();
  }
  // Интеграция Photo Frame: данные в её хранилище, изменения — по её подписке.
  useIntegration(t, n) {
    this.haLink = "ready", this.card && this.card.integration ? (this.card.config = n, this.applyCardConfig(n)) : (this.offerMigration(), this.attachCard(new zn(t, n, void 0, !0, !0))), this.card.watch((i) => this.applyCardConfig(i)), this.frameClient = t, this.connectThisFrame();
  }
  connectThisFrame() {
    const t = this.frameClient;
    if (!t || Ft) return;
    this.sendRename(), this.frameOff && this.frameOff(), this.frameOff = T2(t, (u) => u.type === "state" ? this.applyFrameState(u) : this.commandListeners.forEach((p) => p(u)));
    const n = () => ({ lockscreen: tr(qt()), display: { w: window.innerWidth, h: window.innerHeight } });
    let a = JSON.stringify(n());
    Lt(t, n());
    const i = () => {
      const u = JSON.stringify(n());
      u !== a && t.status === "connected" && (a = u, Lt(t, n()));
    };
    this.gridOff && this.gridOff();
    const c = K2(i);
    let s = 0;
    const l = () => {
      clearTimeout(s), s = window.setTimeout(i, 1500);
    }, f = () => {
      clearTimeout(s), s = window.setTimeout(i, 300);
    };
    window.addEventListener("resize", l), window.addEventListener("orientationchange", f);
    const h = screen.orientation;
    h && h.addEventListener && h.addEventListener("change", f), this.gridOff = () => {
      c(), clearTimeout(s), window.removeEventListener("resize", l), window.removeEventListener("orientationchange", f), h && h.removeEventListener && h.removeEventListener("change", f);
    };
  }
  // Команды из HA (кнопки устройства, службы): следующее фото, показать камеру… Выполняет App.
  onCommand(t) {
    return this.commandListeners.push(t), () => {
      this.commandListeners = this.commandListeners.filter((n) => n !== t);
    };
  }
  applyFrameState(t) {
    let n = "";
    try {
      n = localStorage.getItem(Zt) || "";
    } catch {
    }
    t.name && t.name !== Rt() && !n && Ra(t.name);
    const a = t.lockscreen_push;
    if (a && a.rev > qt().gridRev && me({ ...ha(a.patch), gridRev: a.rev }), t.start_screen) {
      const [s, l] = t.start_screen.split("/");
      (s !== En() || l !== In()) && this.setStart(s, l);
    }
    t.screen_on !== void 0 && (this.screenOn = t.screen_on), t.brightness !== void 0 && (this.brightness = t.brightness);
    const i = this.card, c = t.album || "all";
    i && i.album !== c && (i.album = c, this.reloadCardPhotos()), this.notify();
  }
  // Коснулись спящей рамки — просыпается и сообщает HA (сущность «Экран» включается).
  wakeScreen() {
    this.screenOn = !0, this.frameClient && Lt(this.frameClient, { screen_on: !0 }), this.notify();
  }
  // Имя рамки поменяли на ней самой — переподключаемся, HA узнает новое имя.
  // Это имя устройства в HA: при обычном подключении главное — имя из HA, поэтому переименование — отдельным
  // запросом (иначе HA тут же вернул бы старое имя).
  renameFrame(t) {
    if (!(!t || t === Rt())) {
      Ra(t);
      try {
        localStorage.setItem(Zt, t);
      } catch {
      }
      this.sendRename();
    }
  }
  sendRename() {
    const t = this.frameClient;
    let n = "";
    try {
      n = localStorage.getItem(Zt) || "";
    } catch {
    }
    !n || !t || t.status !== "connected" || t.call({ type: "photoframe/frame/rename", frame_id: Ue(), name: n }).then(() => {
      try {
        localStorage.removeItem(Zt);
      } catch {
      }
    }, () => {
    });
  }
  loadHaCard() {
    const t = this.haClient;
    t && (this.card && this.card.busy || P2(t, Je).then((n) => {
      if (!n) {
        this.haLink = "missing", this.notify();
        return;
      }
      if (this.haLink = "ready", this.card) {
        this.card.config = n, this.applyCardConfig(n);
        return;
      }
      this.offerMigration(), this.attachCard(new zn(t, n, Je, !0));
    }, () => {
      this.haLink = "error", this.notify();
    }));
  }
  // Создать в HA дашборд «Фоторамка» с карточкой (нужен администратор HA).
  createHaDashboard() {
    const t = this.haClient;
    return t ? u1((n) => t.call(n)).then(() => this.loadHaCard()) : Promise.reject(new Error("not connected"));
  }
  // Первый переход на HA: запоминаем свои экраны (если их меняли) и считаем фото в браузере.
  offerMigration() {
    let t = "";
    try {
      t = localStorage.getItem(io) || "";
    } catch {
    }
    if (t === "done") return;
    if (!t) {
      const { homes: a, screens: i } = this.state, c = a.length > 1 || JSON.stringify(so(i[Me] || [])) !== JSON.stringify(so(Nn()));
      try {
        c && localStorage.setItem(Xt, JSON.stringify({ homes: a, screens: i })), localStorage.setItem(io, "pending");
      } catch {
      }
    }
    const n = this.backup();
    oo().then((a) => a.length, () => 0).then((a) => {
      n || a ? (this.migration = { screens: !!n, photos: a }, this.notify()) : this.finishMigration();
    });
  }
  backup() {
    try {
      const t = localStorage.getItem(Xt);
      return t ? JSON.parse(t) : null;
    } catch {
      return null;
    }
  }
  // Заменить экраны в HA теми, что были в браузере.
  migrateScreens() {
    const t = this.backup();
    if (!t || !this.card) return;
    const n = t.homes.map((i) => ({ id: i.id, name: i.name })), a = {};
    n.forEach((i) => {
      a[i.id] = Pe({ screens: t.screens[i.id] || [] });
    }), this.set({ homes: n, screens: a }), this.saveCard({ homes: n, layouts: this.packAll() });
    try {
      localStorage.removeItem(Xt);
    } catch {
    }
    this.updateMigration({ screens: !1 });
  }
  // Фото из браузера — в медиатеку HA; после загрузки из браузера их убираем.
  migratePhotos(t) {
    const n = this.card;
    return n ? oo().then((a) => a.reduce(
      (i, c, s) => i.then(() => n.addPhotoData(c.data, "frame-" + c.id + ".jpg")).then(() => {
        t && t(s + 1, a.length);
      }),
      Promise.resolve()
    )).then(() => Ba()).then(() => (this.updateMigration({ photos: 0 }), this.reloadCardPhotos())) : Promise.resolve();
  }
  dismissMigration() {
    try {
      localStorage.removeItem(Xt);
    } catch {
    }
    this.finishMigration();
  }
  updateMigration(t) {
    const n = { ...this.migration || { screens: !1, photos: 0 }, ...t };
    !n.screens && !n.photos ? this.finishMigration() : (this.migration = n, this.notify());
  }
  finishMigration() {
    try {
      localStorage.setItem(io, "done");
    } catch {
    }
    this.migration = null, this.notify();
  }
  reloadLocalPhotos() {
    return oo().then((t) => this.set({ photos: t.map((n) => ({ id: n.id, url: n.data })) })).catch(() => this.set({ photos: [] }));
  }
  applyHomes(t) {
    const n = {};
    t.forEach((a) => {
      n[a.id] = this.state.screens[a.id] || Pe(null);
    }), this.set({ homes: t, screens: n });
  }
  saveHomes(t) {
    const n = t.map((a) => ({ id: a.id, name: a.name }));
    this.applyHomes(n), this.card && this.saveCard({ homes: n, layouts: this.packAll() });
  }
  // Настройки панели — только этого устройства: в HA их не пишем, чтобы не менялись на других рамках.
  saveSettings(t) {
    Xa(t), this.set({ settings: t });
  }
  // Раскладка показанного экрана.
  saveLayout(t) {
    const n = this.state.screen;
    this.saveScreens(this.state.active, this.screensOf().map((a) => a.id === n ? { ...a, cols: t.cols, cards: t.cards } : a));
  }
  screensOf(t = this.state.active) {
    return this.state.screens[t] || Pe(null);
  }
  packAll() {
    const t = {};
    return Object.keys(this.state.screens).forEach((n) => {
      t[n] = so(this.state.screens[n]);
    }), t;
  }
  // Экраны дома целиком: в конфиг карточки HA (без неё — только в этот браузер, через кэш).
  saveScreens(t, n, a) {
    const i = { screens: { ...this.state.screens, [t]: n } };
    a && (i.screen = a), this.set(i), this.card && this.saveCard({ layouts: this.packAll() });
  }
  // Новый пустой экран в конце списка показанного дома — сразу на него и переходим.
  addScreen(t) {
    const n = { id: _2(), name: t, cols: 12, cards: [] };
    this.saveScreens(this.state.active, this.screensOf().concat(n), n.id);
  }
  renameScreen(t, n) {
    this.saveScreens(this.state.active, this.screensOf().map((a) => a.id === t ? { ...a, name: n } : a));
  }
  // Последний экран дома не удаляется — у дома всегда есть хотя бы один.
  removeScreen(t) {
    const n = this.screensOf();
    if (n.length < 2) return;
    const a = n.map((c) => c.id).indexOf(t), i = n.filter((c) => c.id !== t);
    this.saveScreens(this.state.active, i, i[Math.max(0, a - 1)].id);
  }
  // Сдвинуть экран в списке (dir −1 — левее, +1 — правее).
  moveScreen(t, n) {
    const a = this.screensOf().slice(), i = a.map((l) => l.id).indexOf(t), c = i + n;
    if (i < 0 || c < 0 || c >= a.length) return;
    const s = a[i];
    a[i] = a[c], a[c] = s, this.saveScreens(this.state.active, a);
  }
  // Пачка фото — строго по одному, чтобы не держать в памяти все исходники разом.
  // Ошибка одного файла не останавливает остальные; в конце сообщаем, сколько не загрузилось.
  addPhotos(t, n, a) {
    const i = this.card, c = i ? (h) => i.addPhoto(h, a) : (h) => E2(h), s = () => i ? this.reloadCardPhotos() : this.reloadLocalPhotos(), l = [];
    let f = 0;
    return t.reduce(
      (h, u) => h.then(() => c(u)).catch((p) => {
        l.push(p && p.message || String(p));
      }).then(() => {
        f++, n && n(f, t.length);
      }),
      Promise.resolve()
    ).then(() => f > l.length ? s() : void 0).then(() => {
      if (l.length)
        throw l.length === t.length ? new Error(l[0]) : new Error(d("errors.upload_some", { failed: l.length, total: t.length }) + " — " + l[0]);
    });
  }
  deletePhoto(t) {
    return this.card ? this.card.deletePhoto(String(t)).then(() => this.reloadCardPhotos()) : S2(Number(t)).then(() => this.reloadLocalPhotos());
  }
  clearPhotos() {
    return this.card ? this.state.photos.reduce((t, n) => t.then(() => this.card.deletePhoto(String(n.id))), Promise.resolve()).then(() => this.reloadCardPhotos()) : Ba().then(() => this.reloadLocalPhotos());
  }
}
const re = new ir();
function Re() {
  const [, e] = _(0);
  return H(() => re.subscribe(() => e((t) => t + 1)), []), re;
}
function Wn() {
  const e = window.SmartFrame;
  return e && e.setBrightness ? e : null;
}
const sr = () => !!Wn();
function cr(e, t) {
  const n = Wn();
  if (n)
    try {
      n.setBrightness(e ? Math.max(0.02, t / 100) : 0), n.setScreenOn && n.setScreenOn(e);
    } catch {
    }
}
function rr(e) {
  window.SmartFrameWake = e;
}
function lr(e, t) {
  return e ? sr() ? 0 : Math.round((100 - t) * 0.85) / 100 : 1;
}
function dr() {
  const e = Wn();
  try {
    return e && e.getAutostart ? !!e.getAutostart() : null;
  } catch {
    return null;
  }
}
function fr(e) {
  const t = Wn();
  try {
    t && t.setAutostart && t.setAutostart(e);
  } catch {
  }
}
function $a(e, t, n, a, i) {
  let c = 0, s = 0, l = 0, f = 0;
  for (let u = n; u < a; u++)
    for (let p = 0; p < t; p++) {
      const r = (u * t + p) * 4;
      c += e[r], s += e[r + 1], l += e[r + 2], f++;
    }
  const h = (u) => Math.round(u / Math.max(1, f) * i);
  return "rgb(" + h(c) + "," + h(s) + "," + h(l) + ")";
}
const vt = {};
function hr(e, t, n) {
  e /= 255, t /= 255, n /= 255;
  const a = Math.max(e, t, n), i = Math.min(e, t, n), c = (a + i) / 2;
  if (a === i) return [0, 0, c];
  const s = a - i, l = c > 0.5 ? s / (2 - a - i) : s / (a + i);
  return [(a === e ? (t - n) / s + (t < n ? 6 : 0) : a === t ? (n - e) / s + 2 : (e - t) / s + 4) * 60, l, c];
}
function ur(e) {
  return new Promise((t) => {
    const n = new Image();
    n.onload = () => {
      try {
        const a = 48 / Math.max(n.width, n.height), i = document.createElement("canvas");
        i.width = Math.max(1, Math.round(n.width * a)), i.height = Math.max(1, Math.round(n.height * a));
        const c = i.getContext("2d");
        c.drawImage(n, 0, 0, i.width, i.height);
        const s = c.getImageData(0, 0, i.width, i.height).data;
        let l = 0, f = 0, h = 0, u = 0;
        for (let w = 0; w < s.length; w += 4)
          l += s[w], f += s[w + 1], h += s[w + 2], u++;
        const p = hr(l / u, f / u, h / u), r = Math.round(p[0]), m = Math.round(Math.min(Math.max(p[1], 0.45), 0.85) * 100), A = Math.max(1, Math.round(i.height / 12));
        t({
          // Сверху затемнение кадра ~25%, снизу ~70% (.shade) — полосы браузера того же тона, что край фото.
          edgeTop: $a(s, i.width, 0, A, 0.75),
          edgeBottom: $a(s, i.width, i.height - A, i.height, 0.3),
          thumb: i.toDataURL("image/jpeg", 0.7),
          accent: "hsl(" + r + "," + m + "%,68%)",
          accentSoft: "hsla(" + r + "," + m + "%,60%,0.22)"
        });
      } catch {
        t(null);
      }
    }, n.onerror = () => t(null), n.src = e;
  });
}
function mr(e) {
  const [t, n] = _(e && vt[e] || null);
  return H(() => {
    if (!e) return;
    if (e in vt) {
      vt[e] && n(vt[e]);
      return;
    }
    let a = !0;
    return ur(e).then((i) => {
      vt[e] = i, a && i && n(i);
    }), () => {
      a = !1;
    };
  }, [e]), t;
}
function pr(e) {
  let t = document.getElementById(e);
  if (!t) {
    t = document.createElement("div"), t.id = e, t.setAttribute("aria-hidden", "true");
    const n = t.style;
    n.position = "fixed", n.left = "0", n.right = "0", n.height = "2px", n.pointerEvents = "none", n.zIndex = "-1", n.top = "0", document.body.appendChild(t);
  }
  return t;
}
function Ar(e, t) {
  if (/SmartFrame\//.test(navigator.userAgent)) return;
  let n = document.querySelector('meta[name="theme-color"]');
  n || (n = document.createElement("meta"), n.name = "theme-color", document.head.appendChild(n)), n.content = e, pr("bar-tint-top").style.backgroundColor = e, document.documentElement.style.backgroundColor = t, document.body.style.backgroundColor = t;
}
function gr() {
  if (!document.documentElement.classList.contains("standalone")) return;
  const e = screen.width, t = screen.height, n = Math.max(window.innerWidth > window.innerHeight ? Math.min(e, t) : Math.max(e, t), window.innerHeight);
  let a = document.getElementById("ios-viewport");
  a || (a = document.createElement("style"), a.id = "ios-viewport", document.head.appendChild(a)), a.textContent = "html.standalone .backdrop{bottom:auto;height:" + n + "px}";
}
const br = /SmartFrame\//.test(navigator.userAgent);
function L1() {
  return !br && document.documentElement.classList.contains("pwa");
}
function vr(e) {
  const t = document.documentElement, n = e && L1();
  n !== t.classList.contains("doc-scroll") && (n ? (gr(), t.classList.add("doc-scroll")) : (t.classList.remove("doc-scroll"), window.scrollTo(0, 0)));
}
function xr() {
  return document.documentElement.classList.contains("doc-scroll");
}
function yr() {
  return navigator.standalone === !0 || !!window.matchMedia && window.matchMedia("(display-mode: standalone)").matches;
}
function wr(e) {
  const t = document.documentElement;
  e && L1() && !yr() ? (t.classList.add("photo-peek"), window.setTimeout(() => {
    t.classList.contains("photo-peek") && window.pageYOffset < 1 && window.scrollTo(0, 1);
  }, 60)) : t.classList.remove("photo-peek");
}
let co = 0;
function kr(e) {
  const t = document.documentElement, n = document.body;
  e !== t.classList.contains("scroll-lock") && (e ? (co = window.pageYOffset, n.style.top = -co + "px", t.classList.add("scroll-lock")) : (t.classList.remove("scroll-lock"), n.style.top = "", window.scrollTo(0, co)));
}
const _r = 0.18, Ja = 0.5, zr = 600, xt = 10, Mr = 0.12;
function ro(e, t) {
  for (; e && e.nodeType === 1; e = e.parentElement)
    if ((e.matches || e.webkitMatchesSelector).call(e, t)) return e;
  return null;
}
function Ka(e) {
  return "touches" in e ? (e.touches[0] || e.changedTouches[0]).clientY : e.clientY;
}
function ei(e) {
  return "touches" in e ? (e.touches[0] || e.changedTouches[0]).clientX : e.clientX;
}
function Cr(e, t, n, a, i, c) {
  H(() => {
    const s = e.root.current;
    if (!s || !a) return;
    let l = 0, f = 0, h = 0, u = 0, p = 0, r = !1, m = 0, A = "";
    const w = (N) => {
      const M = e.controls.current, D = e.ambient.current, g = e.soft.current, E = s.clientHeight;
      M && (M.style.opacity = String(N), M.style.transform = "scale(" + (0.96 + 0.04 * N).toFixed(4) + ")"), D && (D.style.transform = "translateY(" + Math.round(-N * E) + "px)"), g && (g.style.opacity = String(N));
    }, b = () => {
      [e.controls.current, e.ambient.current, e.soft.current].forEach((N) => {
        N && (N.style.opacity = "", N.style.transform = "");
      });
    }, z = (N) => {
      const M = N.target;
      t && (!ro(M, ".bar") || ro(M, "button")) || (l = Ka(N), f = ei(N), h = Date.now(), u = 0, p = 0, A = "", r = !0, s.classList.add("dragging"), clearTimeout(m), !t && i && !ro(M, "button") && (m = window.setTimeout(() => {
        !r || Math.abs(u) > xt || (r = !1, s.classList.remove("dragging"), b(), i());
      }, zr)));
    }, v = (N) => {
      if (!r) return;
      if (u = Ka(N) - l, p = ei(N) - f, (Math.abs(u) > xt || Math.abs(p) > xt) && clearTimeout(m), !A && (Math.abs(u) > xt || Math.abs(p) > xt) && (A = !t && c && Math.abs(p) > Math.abs(u) ? "x" : "y"), A === "x") {
        const g = e.ambient.current, E = s.clientWidth || 1;
        g && (g.style.transform = "translateX(" + Math.round(p * 0.25) + "px)", g.style.opacity = String(1 - Math.min(1, Math.abs(p) / E) * 0.6)), N.cancelable && N.preventDefault();
        return;
      }
      const M = s.clientHeight, D = t ? 1 - Math.max(0, u) / M : Math.max(0, -u) / M;
      w(Math.min(1, Math.max(0, D))), N.cancelable && N.preventDefault();
    }, y = () => {
      if (clearTimeout(m), !r) return;
      if (r = !1, s.classList.remove("dragging"), A === "x") {
        b();
        const g = Math.abs(p) / Math.max(1, Date.now() - h) > Ja && Math.abs(p) > 30;
        c && (Math.abs(p) > s.clientWidth * Mr || g) && c(p < 0 ? 1 : -1);
        return;
      }
      const N = s.clientHeight, M = Math.abs(u) / Math.max(1, Date.now() - h), D = Math.abs(u) > N * _r || M > Ja && Math.abs(u) > 30;
      b(), !t && u < 0 && D && n(!0), t && u > 0 && D && n(!1);
    };
    return s.addEventListener("touchstart", z), s.addEventListener("touchmove", v), s.addEventListener("touchend", y), s.addEventListener("touchcancel", y), s.addEventListener("mousedown", z), window.addEventListener("mousemove", v), window.addEventListener("mouseup", y), () => {
      clearTimeout(m), s.removeEventListener("touchstart", z), s.removeEventListener("touchmove", v), s.removeEventListener("touchend", y), s.removeEventListener("touchcancel", y), s.removeEventListener("mousedown", z), window.removeEventListener("mousemove", v), window.removeEventListener("mouseup", y);
    };
  }, [t, a, c]);
}
const Dn = (...e) => e.filter((t, n, a) => !!t && t.trim() !== "" && a.indexOf(t) === n).join(" ").trim();
function Lr(e, t, n = []) {
  throw new Error("[lucide]: iconNode is required when icon name is used");
}
const Sr = (e) => {
  let t = "", n = !1;
  for (const a of e) {
    if (a === "-" || a === "_" || a <= " ") {
      n = t.length > 0;
      continue;
    }
    t.length === 0 ? t += a.toLowerCase() : t += n ? a.toUpperCase() : a, n = !1;
  }
  return t;
};
const Er = (e) => {
  const t = Sr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
const Ze = {
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
function lo(e) {
  return e != null;
}
function Ir(e, t = {}) {
  const n = t.attributeNames ?? {}, a = (r) => n[r] ?? r, i = e.size ?? e.width ?? Ze.width, c = e.size ?? e.height ?? Ze.height, s = e.aliases?.filter((r) => typeof r == "string" && r.trim() !== "").map((r) => `lucide-${r}`) ?? [], l = [...e.name ? [`lucide-${e.name}`] : [], ...s], f = t.className?.split(" ").filter(Boolean) ?? [], h = t.includeDefaultClasses === !1 ? Dn(...f) : Dn("lucide", ...l, ...f), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? Ze["stroke-width"]) * Number(e.size ?? e.width ?? Ze.width) / Number(t.size ?? t.width ?? Ze.width) : t.strokeWidth ?? Ze["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Ze).reduce((r, [m, A]) => (r[a(m)] = A, r), {}),
      ..."color" in t && t.color && {
        [a("stroke")]: t.color
      },
      ..."size" in t && lo(t.size) && {
        [a("width")]: t.size,
        [a("height")]: t.size
      },
      ..."width" in t && lo(t.width) && {
        [a("width")]: t.width
      },
      ..."height" in t && lo(t.height) && {
        [a("height")]: t.height
      },
      [a("stroke-width")]: u,
      ...h && {
        [a("class")]: h
      },
      [a("viewBox")]: `0 0 ${i} ${c}`,
      ...t.hasA11yProp === !1 ? {
        [a("aria-hidden")]: "true"
      } : {},
      ..."attributes" in t && t.attributes
    },
    e.node.map((r) => {
      const [m, A, w] = r, b = t.nonScalingStroke ? { [a("vector-effect")]: "non-scaling-stroke", ...A } : A;
      return w ? [m, b, w] : [m, b];
    })
  ];
}
const Nr = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Dr = Hn({
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  absoluteStrokeWidth: !1,
  nonScalingStroke: !1,
  class: ""
}), Tr = () => Dt(Dr);
const Br = ({
  color: e,
  size: t,
  width: n,
  height: a,
  strokeWidth: i,
  absoluteStrokeWidth: c,
  nonScalingStroke: s,
  children: l,
  iconNode: f = [],
  icon: h = {
    node: f,
    aliases: [],
    size: 24
  },
  class: u = "",
  ...p
}) => {
  const {
    size: r = 24,
    strokeWidth: m = 2,
    absoluteStrokeWidth: A = !1,
    nonScalingStroke: w = !1,
    color: b = "currentColor",
    class: z = ""
  } = Tr() ?? {}, [v, y, N = []] = Ir(h, {
    color: e ?? b,
    width: n ?? t ?? r,
    height: a ?? t ?? r,
    strokeWidth: i ?? m,
    absoluteStrokeWidth: c ?? A,
    nonScalingStroke: s ?? w,
    className: Dn(z, u),
    hasA11yProp: !!l || Nr(p),
    attributes: p
  });
  return bn(v, { ...y }, [
    ...N.map(([M, D]) => bn(M, D)),
    ...Hi(l)
  ]);
};
function P(e, t, n = []) {
  const a = typeof e == "string" ? Lr(e, t, n) : e, i = ({ class: c = "", className: s = "", children: l, ...f }) => bn(
    Br,
    {
      ...f,
      icon: a,
      class: Dn(c, s)
    },
    l
  );
  return a.name && (i.displayName = Er(a.name)), i;
}
const S1 = {
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
S1.node;
const Pr = P(S1);
const E1 = {
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
E1.node;
const I1 = P(E1);
const N1 = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
N1.node;
const D1 = P(N1);
const T1 = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
T1.node;
const B1 = P(T1);
const P1 = {
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
P1.node;
const Or = P(P1);
const O1 = {
  name: "bed",
  size: 24,
  node: [
    ["path", { d: "M2 4v16", key: "vw9hq8" }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
    ["path", { d: "M2 17h20", key: "18nfp3" }],
    ["path", { d: "M6 8v9", key: "1yriud" }]
  ]
};
O1.node;
const Hr = P(O1);
const H1 = {
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
H1.node;
const Fr = P(H1);
const F1 = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
F1.node;
const Rr = P(F1);
const R1 = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
R1.node;
const j1 = P(R1);
const q1 = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
q1.node;
const ua = P(q1);
const Q1 = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
Q1.node;
const Un = P(Q1);
const W1 = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
};
W1.node;
const U1 = P(W1);
const Y1 = {
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
Y1.node;
const jr = P(Y1);
const V1 = {
  name: "cloud-fog",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 17H7", key: "pygtm1" }],
    ["path", { d: "M17 21H9", key: "1u2q02" }]
  ]
};
V1.node;
const qr = P(V1);
const G1 = {
  name: "cloud-lightning",
  size: 24,
  node: [
    ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
    ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
  ]
};
G1.node;
const fo = P(G1);
const X1 = {
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
X1.node;
const ti = P(X1);
const Z1 = {
  name: "cloud-rain",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 14v6", key: "1j4efv" }],
    ["path", { d: "M8 14v6", key: "17c4r9" }],
    ["path", { d: "M12 16v6", key: "c8a4gj" }]
  ]
};
Z1.node;
const Qr = P(Z1);
const $1 = {
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
$1.node;
const J1 = P($1);
const K1 = {
  name: "cloud-upload",
  size: 24,
  node: [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
  ],
  aliases: ["upload-cloud"]
};
K1.node;
const Wr = P(K1);
const es = {
  name: "cloud",
  size: 24,
  node: [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]
};
es.node;
const ts = P(es);
const ns = {
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
ns.node;
const Ur = P(ns);
const os = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
os.node;
const Yr = P(os);
const as = {
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
as.node;
const Vr = P(as);
const is = {
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
is.node;
const st = P(is);
const ss = {
  name: "eighth-notes",
  size: 24,
  node: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19", key: "uy6ho8" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
    ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }]
  ],
  aliases: ["music"]
};
ss.node;
const Gr = P(ss);
const cs = {
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
cs.node;
const rs = P(cs);
const ls = {
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
ls.node;
const ds = P(ls);
const fs = {
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
fs.node;
const hs = P(fs);
const us = {
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
us.node;
const Xr = P(us);
const ms = {
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
ms.node;
const ps = P(ms);
const As = {
  name: "gauge",
  size: 24,
  node: [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
  ]
};
As.node;
const gs = P(As);
const bs = {
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
bs.node;
const Zr = P(bs);
const vs = {
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
vs.node;
const $r = P(vs);
const xs = {
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
xs.node;
const Jr = P(xs);
const ys = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
ys.node;
const ma = P(ys);
const ws = {
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
ws.node;
const Kr = P(ws);
const ks = {
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
ks.node;
const el = P(ks);
const _s = {
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
_s.node;
const tl = P(_s);
const zs = {
  name: "layout-grid",
  size: 24,
  node: [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
  ]
};
zs.node;
const Ms = P(zs);
const Cs = {
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
Cs.node;
const nl = P(Cs);
const Ls = {
  name: "lock",
  size: 24,
  node: [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
  ]
};
Ls.node;
const ol = P(Ls);
const Ss = {
  name: "log-in",
  size: 24,
  node: [
    ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
    ["path", { d: "M15 12H3", key: "6jk70r" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
  ]
};
Ss.node;
const al = P(Ss);
const Es = {
  name: "log-out",
  size: 24,
  node: [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
  ]
};
Es.node;
const il = P(Es);
const Is = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
};
Is.node;
const sl = P(Is);
const Ns = {
  name: "minus",
  size: 24,
  node: [["path", { d: "M5 12h14", key: "1ays0h" }]]
};
Ns.node;
const cl = P(Ns);
const Ds = {
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
Ds.node;
const Ts = P(Ds);
const Bs = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
Bs.node;
const rl = P(Bs);
const Ps = {
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
Ps.node;
const Os = P(Ps);
const Hs = {
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
Hs.node;
const Fs = P(Hs);
const Rs = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Rs.node;
const lt = P(Rs);
const js = {
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
js.node;
const ll = P(js);
const qs = {
  name: "power",
  size: 24,
  node: [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
  ]
};
qs.node;
const Qt = P(qs);
const Qs = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
Qs.node;
const dl = P(Qs);
const Ws = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
  ]
};
Ws.node;
const fl = P(Ws);
const Us = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
Us.node;
const Ys = P(Us);
const Vs = {
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
Vs.node;
const hl = P(Vs);
const Gs = {
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
Gs.node;
const ul = P(Gs);
const Xs = {
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
Xs.node;
const ml = P(Xs);
const Zs = {
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
Zs.node;
const pl = P(Zs);
const $s = {
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
$s.node;
const pa = P($s);
const Js = {
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
Js.node;
const Al = P(Js);
const Ks = {
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
Ks.node;
const qo = P(Ks);
const ec = {
  name: "speaker",
  size: 24,
  node: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
    ["path", { d: "M12 14h.01", key: "1etili" }]
  ]
};
ec.node;
const tc = P(ec);
const nc = {
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
nc.node;
const oc = P(nc);
const ac = {
  name: "table-2",
  size: 24,
  node: [
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
  ]
};
ac.node;
const gl = P(ac);
const ic = {
  name: "thermometer",
  size: 24,
  node: [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]]
};
ic.node;
const sc = P(ic);
const cc = {
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
cc.node;
const Wt = P(cc);
const rc = {
  name: "tv",
  size: 24,
  node: [
    ["path", { d: "m17 2-5 5-5-5", key: "16satq" }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]
  ]
};
rc.node;
const Qo = P(rc);
const lc = {
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
lc.node;
const bl = P(lc);
const dc = {
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
dc.node;
const vl = P(dc);
const fc = {
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
fc.node;
const xl = P(fc);
const hc = {
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
hc.node;
const yl = P(hc);
const uc = {
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
uc.node;
const wl = P(uc);
const mc = {
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
mc.node;
const kl = P(mc);
const pc = {
  name: "wind",
  size: 24,
  node: [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
  ]
};
pc.node;
const Tn = P(pc);
const Ac = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
Ac.node;
const je = P(Ac);
const gc = {
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
gc.node;
const _l = P(gc);
function zl(e) {
  return new Promise((t) => {
    const n = new Image();
    n.onerror = () => t({ w: 0, h: 0, glow: "" }), n.onload = () => {
      let a = "";
      try {
        const i = 48 / Math.max(n.naturalWidth, n.naturalHeight), c = document.createElement("canvas");
        c.width = Math.max(1, Math.round(n.naturalWidth * i)), c.height = Math.max(1, Math.round(n.naturalHeight * i)), c.getContext("2d").drawImage(n, 0, 0, c.width, c.height), a = c.toDataURL("image/jpeg", 0.7);
      } catch {
      }
      t({ w: n.naturalWidth, h: n.naturalHeight, glow: a });
    }, n.src = e;
  });
}
function Ml({ urls: e, index: t, tone: n, soft: a, softRef: i, onShow: c }) {
  const s = h2(), l = ia(), [f, h] = _([]), u = X(0), p = e.length, r = p ? e[t % p] : "", m = !!r && qa(r);
  return H(() => X2(c), []), H(() => {
    const A = document.documentElement;
    m ? A.classList.add("native-photos") : A.classList.remove("native-photos");
  }, [m]), H(() => {
    if (m) {
      h([]), Qa(r, s, l === "lite"), p > 1 && G2(e[(t + 1) % p]);
      return;
    }
    if (qa("/") && Qa("", s, !1), !r) {
      h([]);
      return;
    }
    let A = !0;
    return Ia(r).then((w) => zl(w).then((b) => ({ url: w, m: b }))).then(({ url: w, m: b }) => {
      if (!A) return;
      const z = ++u.current;
      h((v) => v.slice(-1).map((y) => ({ ...y, on: !1 })).concat({ id: z, url: w, on: !1, w: b.w, h: b.h, glow: b.glow })), requestAnimationFrame(() => requestAnimationFrame(() => {
        A && h((v) => v.map((y) => y.id === z ? { ...y, on: !0 } : y));
      })), c(w);
    }), p > 1 && Ia(e[(t + 1) % p]), () => {
      A = !1;
    };
  }, [r, m, m ? s : "", m ? l : ""]), /* @__PURE__ */ o("div", { class: "backdrop", children: [
    p === 0 && /* @__PURE__ */ o("div", { class: "slide active aurora" }),
    f.map((A) => u2(A.w, A.h) ? /* @__PURE__ */ o("div", { class: "slide contain" + (A.on ? " active" : ""), children: [
      A.glow && /* @__PURE__ */ o("div", { class: "slide-glow", style: { backgroundImage: "url(" + A.glow + ")" } }),
      /* @__PURE__ */ o("div", { class: "slide-photo", style: { backgroundImage: "url(" + A.url + ")" } })
    ] }, A.id) : /* @__PURE__ */ o("div", { class: "slide" + (A.on ? " active" : ""), style: { backgroundImage: "url(" + A.url + ")" } }, A.id)),
    /* @__PURE__ */ o("div", { ref: i, class: "soft" + (a ? " on" : ""), style: n ? { backgroundImage: "url(" + n.thumb + ")" } : void 0 }),
    /* @__PURE__ */ o("div", { class: "shade" + (a ? " deep" : "") })
  ] });
}
const Wo = {
  lightbulb: nl,
  lamp: tl,
  "lamp-ceiling": Kr,
  "lamp-desk": el,
  plug: ll,
  fan: ds,
  tv: Qo,
  speaker: tc,
  thermometer: sc,
  droplets: st,
  snowflake: pa,
  flame: hs,
  wind: Tn,
  sun: oc,
  moon: Ts,
  shield: ul,
  door: Vr,
  lock: ol,
  blinds: Fr,
  video: vl,
  "washing-machine": wl,
  zap: _l,
  gauge: gs,
  activity: Pr,
  "air-vent": I1,
  "cloud-sun": J1,
  sparkles: qo,
  house: $r,
  sofa: Al,
  bed: Hr,
  "cooking-pot": Ur,
  baby: Or
};
let St = null, bc = [], $t = null;
const vc = [];
function Cl() {
  return $t || ($t = Promise.resolve().then(() => nh).then((e) => {
    St = e.FA, bc = e.FA_GROUPS, vc.splice(0).forEach((t) => t());
  }).catch(() => {
    $t = null;
  })), $t;
}
function xc(e) {
  const [, t] = _(0);
  H(() => {
    if (!e || St) return;
    let n = !0;
    return vc.push(() => {
      n && t((a) => a + 1);
    }), Cl(), () => {
      n = !1;
    };
  }, [e]);
}
const Ll = { titleKey: "icons.group.lucide", keys: Object.keys(Wo) };
function Sl() {
  return xc(!0), [Ll].concat(bc);
}
const El = {
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
function Il(e, t) {
  const n = t.trim().toLowerCase();
  return n ? e.toLowerCase().indexOf(n) !== -1 || (El[e] || "").indexOf(n) !== -1 : !0;
}
function Nl(e) {
  const [t, n, , , a] = e.def.icon, i = Array.isArray(a) ? a : [a];
  return /* @__PURE__ */ o(
    "svg",
    {
      class: e.class,
      width: e.size,
      height: e.size,
      viewBox: `0 0 ${t} ${n}`,
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      children: i.map((c, s) => /* @__PURE__ */ o("path", { d: c }, s))
    }
  );
}
function Ce(e) {
  const t = e.name || "house", n = Wo[t], a = !n && /^fa/.test(t);
  if (xc(a), n) return /* @__PURE__ */ o(n, { size: e.size || 18, class: e.class });
  if (a && !St) {
    const s = e.size || 18;
    return /* @__PURE__ */ o("svg", { class: e.class, width: s, height: s, "aria-hidden": "true", focusable: "false" });
  }
  const i = St && St[t];
  if (i) return /* @__PURE__ */ o(Nl, { def: i, size: e.size || 18, class: e.class });
  const c = Wo.house;
  return /* @__PURE__ */ o(c, { size: e.size || 18, class: e.class });
}
function Aa(e, t) {
  const n = e.split(".")[0];
  return n === "light" ? "lamp-ceiling" : n === "switch" ? "lamp" : n === "fan" ? "fan" : n === "camera" ? "video" : n === "climate" ? "air-vent" : n === "weather" ? "cloud-sun" : n === "media_player" ? t === "tv" ? "tv" : "speaker" : n === "lock" ? "lock" : n === "cover" ? "blinds" : n === "scene" || n === "script" || n === "automation" ? "sparkles" : t === "temperature" ? "thermometer" : t === "humidity" || t === "moisture" ? "droplets" : t === "door" || t === "window" || t === "opening" ? "door" : t === "power" || t === "voltage" || t === "energy" || t === "current" ? "zap" : t === "motion" || t === "occupancy" ? "activity" : "gauge";
}
function yc(e = 1e3) {
  const [t, n] = _(/* @__PURE__ */ new Date());
  return H(() => {
    const a = setInterval(() => n(/* @__PURE__ */ new Date()), e);
    return () => clearInterval(a);
  }, [e]), t;
}
function ho(e) {
  return e < 10 ? "0" + e : String(e);
}
function wc(e, t = !1) {
  return ho(e.getHours()) + ":" + ho(e.getMinutes()) + (t ? ":" + ho(e.getSeconds()) : "");
}
function kc(e) {
  return d("date.full", { weekday: mt("date.weekdays")[e.getDay()], day: e.getDate(), month: mt("date.months")[e.getMonth()] });
}
const Be = "#0891b2", Uo = "#d97706", ni = "rgba(255,255,255,0.13)", Dl = "rgba(255,255,255,0.04)", oi = "rgba(255,255,255,0.08)", ai = "#141620", dt = 210, ke = { l: 46, r: 14, t: 14, b: 26 };
function Bn(e) {
  return e < 10 ? "0" + e : String(e);
}
function ct(e) {
  const t = new Date(e);
  return Bn(t.getHours()) + ":" + Bn(t.getMinutes());
}
function Ut(e) {
  const t = new Date(e);
  return d("date.day_month", { day: t.getDate(), month: mt("date.months_short")[t.getMonth()] });
}
function Ye(e, t) {
  return t === "24h" ? ct(e) : Ut(e) + ", " + ct(e);
}
function ve(e) {
  const t = Math.abs(e), n = t >= 100 ? e.toFixed(0) : t >= 10 ? e.toFixed(1) : t >= 1 ? e.toFixed(2) : e.toFixed(3);
  return n.indexOf(".") === -1 ? n : n.replace(/\.?0+$/, "");
}
function Tl(e, t, n) {
  e === t && (e -= 1, t += 1);
  const a = (t - e) / n, i = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)), c = [1, 2, 5, 10].map((l) => l * i).filter((l) => l >= a)[0], s = [];
  for (let l = Math.floor(e / c) * c; l <= t + c * 1e-3; l += c) s.push(+l.toFixed(10));
  return s[s.length - 1] < t && s.push(s[s.length - 1] + c), s;
}
function Bl(e, t, n) {
  const a = [], i = new Date(e);
  if (n === "24h")
    for (i.setMinutes(0, 0, 0), i.setHours(Math.ceil(i.getHours() / 6) * 6); i.getTime() <= t; i.setHours(i.getHours() + 6)) a.push({ t: i.getTime(), label: ct(i.getTime()) });
  else {
    i.setHours(0, 0, 0, 0), i.setDate(i.getDate() + 1);
    const c = n === "7d" ? 1 : 5;
    for (; i.getTime() <= t; i.setDate(i.getDate() + c))
      a.push({ t: i.getTime(), label: n === "7d" ? mt("date.weekdays_short")[i.getDay()] : i.getDate() + "." + Bn(i.getMonth() + 1) });
  }
  return a;
}
function Pl({ series: e, unit: t, range: n, width: a }) {
  const [i, c] = _(null), s = X(null), l = Math.max(200, a), f = l - ke.l - ke.r, h = dt - ke.t - ke.b, { from: u, to: p } = e, r = (B) => ke.l + (B - u) / (p - u) * f;
  if (e.kind === "timeline" ? !e.segments.length : !e.points.length) return /* @__PURE__ */ o("div", { class: "chart-empty", children: d("chart.no_data") });
  const A = (B) => {
    const T = s.current;
    if (!T) return;
    const V = T.getBoundingClientRect(), J = u + (B - V.left - ke.l) / f * (p - u);
    if (e.kind === "timeline") {
      let te = 0;
      e.segments.forEach((le, _e) => {
        le.from <= J && (te = _e);
      }), c(te);
      return;
    }
    const q = e.points, S = e.kind === "bars" ? e.bucketMs / 2 : 0;
    let W = 0;
    q.forEach((te, le) => {
      Math.abs(te.t + S - J) < Math.abs(q[W].t + S - J) && (W = le);
    }), c(W);
  }, w = {
    onMouseMove: (B) => A(B.clientX),
    onMouseLeave: () => c(null),
    onTouchStart: (B) => A(B.touches[0].clientX),
    onTouchMove: (B) => A(B.touches[0].clientX)
  }, z = Bl(u, p, n).map((B) => /* @__PURE__ */ o("text", { x: r(B.t), y: dt - 6, class: "chart-tick", "text-anchor": "middle", children: B.label }, B.t));
  if (e.kind === "timeline") {
    const B = ke.t + h / 2 - 16, T = i != null ? e.segments[i] : null;
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: l }, children: [
      /* @__PURE__ */ o("svg", { ref: s, width: l, height: dt, ...w, children: [
        e.segments.map((V, J) => {
          const q = r(V.from), S = r(V.to), W = Math.max(1, S - q - (S - q > 3 ? 2 : 0));
          return /* @__PURE__ */ o("rect", { x: q, y: B, width: W, height: 32, rx: 3, fill: V.on ? Uo : V.on === null ? Dl : ni, stroke: V.on === null ? "rgba(255,255,255,0.25)" : "none", "stroke-dasharray": "3 3", opacity: i == null || i === J ? 1 : 0.55 }, J);
        }),
        /* @__PURE__ */ o("line", { x1: ke.l, x2: l - ke.r, y1: B + 44, y2: B + 44, stroke: oi }),
        z
      ] }),
      /* @__PURE__ */ o("div", { class: "chart-legend", children: [
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: Uo } }),
          d("switch.on")
        ] }),
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: ni } }),
          d("switch.off")
        ] }),
        e.segments.some((V) => V.on === null) && /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { class: "key-na" }),
          d("chart.no_connection")
        ] })
      ] }),
      T && /* @__PURE__ */ o(uo, { x: r(T.from) + Math.min(r(T.to) - r(T.from), 40) / 2, W: l, children: [
        /* @__PURE__ */ o("b", { children: T.on ? d("switch.on") : T.on === null ? d("chart.no_connection") : d("switch.off") }),
        /* @__PURE__ */ o("span", { children: [
          Ye(T.from, n),
          " — ",
          Ye(T.to, n)
        ] })
      ] })
    ] });
  }
  const v = e.points, y = v.some((B) => B.min != null && B.max != null);
  let N = 1 / 0, M = -1 / 0;
  v.forEach((B) => {
    N = Math.min(N, B.min != null ? B.min : B.v), M = Math.max(M, B.max != null ? B.max : B.v);
  }), e.kind === "bars" && (N = Math.min(0, N));
  const D = Tl(N, M, 4), g = D[0], E = D[D.length - 1], x = (B) => ke.t + h - (B - g) / (E - g) * h, C = D.map((B) => /* @__PURE__ */ o("g", { children: [
    /* @__PURE__ */ o("line", { x1: ke.l, x2: l - ke.r, y1: x(B), y2: x(B), stroke: oi }),
    /* @__PURE__ */ o("text", { x: ke.l - 8, y: x(B) + 4, class: "chart-tick", "text-anchor": "end", children: ve(B) })
  ] }, B)), L = i != null ? v[i] : null;
  if (e.kind === "bars") {
    const B = e.bucketMs / (p - u) * f, T = Math.max(2, Math.min(24, B - 2)), V = e.bucketMs >= 864e5, J = V && v.map((q, S) => {
      const W = new Date(q.t);
      return n === "30d" && (v.length - 1 - S) % 5 ? null : /* @__PURE__ */ o("text", { x: r(q.t) + B / 2, y: dt - 6, class: "chart-tick", "text-anchor": "middle", children: n === "7d" ? mt("date.weekdays_short")[W.getDay()] : W.getDate() + "." + Bn(W.getMonth() + 1) }, q.t);
    });
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: l }, children: [
      /* @__PURE__ */ o("svg", { ref: s, width: l, height: dt, ...w, children: [
        C,
        v.map((q, S) => {
          const W = r(q.t) + (B - T) / 2, te = x(Math.max(0, q.v)), le = x(0), _e = Math.max(0, le - te), pe = Math.min(4, T / 2, _e), se = "M" + W + "," + le + "V" + (te + pe) + "Q" + W + "," + te + " " + (W + pe) + "," + te + "H" + (W + T - pe) + "Q" + (W + T) + "," + te + " " + (W + T) + "," + (te + pe) + "V" + le + "Z";
          return /* @__PURE__ */ o("path", { d: se, fill: Be, opacity: i == null || i === S ? 1 : 0.5 }, S);
        }),
        V ? J : z
      ] }),
      L && /* @__PURE__ */ o(uo, { x: r(L.t) + B / 2, W: l, children: [
        /* @__PURE__ */ o("b", { children: [
          ve(L.v),
          " ",
          t
        ] }),
        /* @__PURE__ */ o("span", { children: e.bucketMs >= 864e5 ? Ut(L.t) : Ut(L.t) + ", " + ct(L.t) + "–" + ct(L.t + e.bucketMs) })
      ] })
    ] });
  }
  const j = y ? v : v.concat({ t: p, v: v[v.length - 1].v }), Q = j.map((B, T) => (T ? "L" : "M") + r(Math.max(B.t, u)).toFixed(1) + "," + x(B.v).toFixed(1)).join(""), U = Q + "L" + r(j[j.length - 1].t).toFixed(1) + "," + x(g) + "L" + r(Math.max(j[0].t, u)).toFixed(1) + "," + x(g) + "Z", Z = y ? v.map((B, T) => (T ? "L" : "M") + r(B.t).toFixed(1) + "," + x(B.max).toFixed(1)).join("") + v.slice().reverse().map((B) => "L" + r(B.t).toFixed(1) + "," + x(B.min).toFixed(1)).join("") + "Z" : "", ee = v[v.length - 1];
  return /* @__PURE__ */ o("div", { class: "chart", style: { width: l }, children: [
    /* @__PURE__ */ o("svg", { ref: s, width: l, height: dt, ...w, children: [
      C,
      y ? /* @__PURE__ */ o("path", { d: Z, fill: Be, opacity: 0.22 }) : /* @__PURE__ */ o("path", { d: U, fill: Be, opacity: 0.1 }),
      /* @__PURE__ */ o("path", { d: Q, fill: "none", stroke: Be, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }),
      /* @__PURE__ */ o("circle", { cx: r(y ? ee.t : p), cy: x(ee.v), r: 4, fill: Be, stroke: ai, "stroke-width": 2 }),
      L && /* @__PURE__ */ o("g", { children: [
        /* @__PURE__ */ o("line", { x1: r(L.t), x2: r(L.t), y1: ke.t, y2: ke.t + h, stroke: "rgba(255,255,255,0.35)" }),
        /* @__PURE__ */ o("circle", { cx: r(L.t), cy: x(L.v), r: 5, fill: Be, stroke: ai, "stroke-width": 2 })
      ] }),
      z
    ] }),
    y && /* @__PURE__ */ o("div", { class: "chart-legend", children: [
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { class: "key-line", style: { background: Be } }),
        d("chart.mean")
      ] }),
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { style: { background: Be, opacity: 0.35 } }),
        d("chart.min_max")
      ] })
    ] }),
    L && /* @__PURE__ */ o(uo, { x: r(L.t), W: l, children: [
      /* @__PURE__ */ o("b", { children: [
        ve(L.v),
        " ",
        t
      ] }),
      L.min != null && L.max != null && /* @__PURE__ */ o("span", { children: [
        ve(L.min),
        " … ",
        ve(L.max),
        " ",
        t
      ] }),
      /* @__PURE__ */ o("span", { children: Ye(L.t, n) })
    ] })
  ] });
}
function uo(e) {
  const t = Math.max(60, Math.min(e.W - 60, e.x));
  return /* @__PURE__ */ o("div", { class: "chart-tip", style: { left: t }, children: e.children });
}
const dn = {
  cool: { Icon: pa, color: Be },
  heat: { Icon: hs, color: Uo },
  heat_cool: { Icon: qo, color: "#a3a3a3" },
  auto: { Icon: qo, color: "#a3a3a3" },
  dry: { Icon: st, color: "#a3a3a3" },
  fan_only: { Icon: ds, color: "#a3a3a3" },
  off: { Icon: Qt, color: "rgba(255,255,255,0.25)" }
}, Ol = ["auto", "low", "medium", "middle", "high", "quiet", "turbo", "diffuse", "focus"], Hl = (e) => Ol.indexOf(e) !== -1 ? d("ac.fan." + e) : e, ii = (e) => dn[e] ? d("ac.mode." + e) : e;
function si(e, t, n, a, i) {
  const c = (135 + a * 270) * Math.PI / 180, s = (135 + i * 270) * Math.PI / 180, l = (i - a) * 270 > 180 ? 1 : 0;
  return "M" + (e + n * Math.cos(c)).toFixed(1) + "," + (t + n * Math.sin(c)).toFixed(1) + "A" + n + "," + n + " 0 " + l + " 1 " + (e + n * Math.cos(s)).toFixed(1) + "," + (t + n * Math.sin(s)).toFixed(1);
}
function Fl({ it: e, size: t }) {
  const n = ae(), a = n.states[e.entity], i = a ? a.attributes : {}, c = a ? a.state : "off", s = c === "off", l = i.target_temp_step || 0.5, f = i.min_temp != null ? i.min_temp : 16, h = i.max_temp != null ? i.max_temp : 31, [u, p] = _(null), r = X(0), m = u ?? i.temperature;
  H(() => {
    p(null);
  }, [i.temperature]);
  const A = (D) => {
    const g = m ?? (f + h) / 2, E = Math.max(f, Math.min(h, Math.round((g + D * l) / l) * l));
    p(E), clearTimeout(r.current), r.current = window.setTimeout(() => n.callService(e.entity, "set_temperature", { temperature: E }), 800);
  }, w = i.current_temperature != null ? String(i.current_temperature) : e.temp ? Fe(n, e.temp) : void 0, b = dn[c] || dn.auto, z = t.h < 260 || t.w < 260, v = z ? 132 : 176, y = m != null ? (m - f) / (h - f) : 0, N = i.hvac_modes || [], M = i.fan_modes || [];
  return /* @__PURE__ */ o("div", { class: "ac" + (z ? " compact" : ""), children: [
    /* @__PURE__ */ o("div", { class: "ac-main", children: [
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: s, onClick: () => A(-1), children: /* @__PURE__ */ o(cl, { size: 22 }) }),
      /* @__PURE__ */ o("div", { class: "ac-dial", style: { width: v, height: v }, children: [
        /* @__PURE__ */ o("svg", { width: v, height: v, children: [
          /* @__PURE__ */ o("path", { d: si(v / 2, v / 2, v / 2 - 8, 0, 1), stroke: "rgba(255,255,255,0.1)", "stroke-width": 8, fill: "none", "stroke-linecap": "round" }),
          !s && m != null && /* @__PURE__ */ o("path", { d: si(v / 2, v / 2, v / 2 - 8, 0, Math.max(0.01, y)), stroke: b.color, "stroke-width": 8, fill: "none", "stroke-linecap": "round" })
        ] }),
        /* @__PURE__ */ o("div", { class: "ac-center", children: [
          /* @__PURE__ */ o("div", { class: "ac-target", children: [
            m != null && !s ? ve(m) : "—",
            /* @__PURE__ */ o("sup", { children: "°" })
          ] }),
          /* @__PURE__ */ o("div", { class: "ac-mode", children: ii(c) }),
          w != null && !Tt(w) && /* @__PURE__ */ o("div", { class: "ac-room", children: d("ac.room", { t: ve(Number(w)) }) })
        ] })
      ] }),
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: s, onClick: () => A(1), children: /* @__PURE__ */ o(lt, { size: 22 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "ac-modes", children: N.map((D) => {
      const g = dn[D] || { Icon: I1, color: "#a3a3a3" };
      return /* @__PURE__ */ o(
        "button",
        {
          class: "ac-mode-btn" + (D === c ? " active" : ""),
          title: ii(D),
          style: D === c && D !== "off" ? { background: g.color, borderColor: g.color } : void 0,
          onClick: () => n.callService(e.entity, "set_hvac_mode", { hvac_mode: D }),
          children: /* @__PURE__ */ o(g.Icon, { size: 18 })
        },
        D
      );
    }) }),
    !z && M.length > 0 && !s && /* @__PURE__ */ o("div", { class: "seg seg-wide ac-fan", children: M.map((D) => /* @__PURE__ */ o("button", { class: i.fan_mode === D ? "active" : "", onClick: () => n.callService(e.entity, "set_fan_mode", { fan_mode: D }), children: Hl(D) }, D)) })
  ] });
}
function Rl({ card: e, size: t }) {
  const n = ae(), [a, i] = _(0), c = e.items[Math.min(a, e.items.length - 1)];
  return /* @__PURE__ */ o("div", { class: "ac-wrap", children: [
    e.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: e.items.map((s, l) => /* @__PURE__ */ o("button", { class: l === a ? "active" : "", onClick: () => i(l), children: Ie(n, s) }, s.entity)) }),
    /* @__PURE__ */ o(Fl, { it: c, size: t }, c.entity)
  ] });
}
function Et(e, t, n) {
  return n > 0 ? (e + t + n) % n : 0;
}
const jl = 2500, ql = 1e4;
function Ql(e, t) {
  const [n, a] = _(0);
  return H(() => {
    if (!t || !e) return;
    const i = window.setInterval(() => a((c) => c + 1), ql);
    return () => clearInterval(i);
  }, [e, t]), !e || !n ? e : e + (e.indexOf("?") === -1 ? "?" : "&") + "_=" + n;
}
const Jt = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
function _c(e) {
  const [t, n] = _({ entity: e, state: "loading" }), a = t.entity === e ? t.state : "loading";
  return H(() => {
    n({ entity: e, state: "loading" });
    const i = window.setTimeout(() => n((c) => c.entity === e && c.state === "loading" ? { entity: e, state: "ready" } : c), jl);
    return () => clearTimeout(i);
  }, [e]), {
    state: a,
    img: {
      onLoad: () => n({ entity: e, state: "ready" }),
      onError: () => n({ entity: e, state: "error" })
    }
  };
}
function Wl(e) {
  const t = e.naturalWidth, n = e.naturalHeight;
  if (!t || !n) return null;
  try {
    const a = document.createElement("canvas");
    a.width = t, a.height = n;
    const i = a.getContext("2d");
    return i ? (i.drawImage(e, 0, 0, t, n), a.toDataURL("image/jpeg", 0.85)) : null;
  } catch {
    return null;
  }
}
function zc(e) {
  const t = X(null), n = X(null), a = X(""), i = X("");
  return H(() => {
    const c = t.current;
    if (c) {
      if (i.current !== e.src && (i.current = e.src, n.current = null, a.current = ""), !e.paused) {
        c.src = e.src || Jt, a.current = e.src;
        return;
      }
      if (e.src && a.current === e.src) {
        const s = Wl(c);
        s && (n.current = s), a.current = "";
      }
      c.src = n.current || e.poster || Jt;
    }
  }, [e.src, e.poster, e.paused]), H(() => {
    const c = t.current;
    return () => {
      c && (c.src = Jt);
    };
  }, []), /* @__PURE__ */ o(
    "img",
    {
      ref: t,
      src: Jt,
      alt: "",
      draggable: !1,
      onLoad: e.onLoad,
      onError: e.onError
    }
  );
}
const Ne = {
  PAUSE: 1,
  VOLUME_SET: 4,
  VOLUME_MUTE: 8,
  PREVIOUS: 16,
  NEXT: 32,
  TURN_ON: 128,
  TURN_OFF: 256,
  SELECT_SOURCE: 2048,
  PLAY: 16384
}, Ul = ["playing", "paused", "idle", "on", "off", "standby", "buffering"], Kt = (e) => Ul.indexOf(e) !== -1 ? d("media.state." + e) : e;
function Yl({ it: e, tv: t, sources: n, size: a }) {
  const i = ae(), c = i.states[e.entity], s = c ? c.attributes : {}, l = Number(s.supported_features) || 0, f = (C) => (l & C) === C, h = c ? c.state : "off", u = h === "off" || h === "standby", p = h === "playing", r = (C, L) => i.callService(e.entity, C, L), [m, A] = _(null), w = m ?? (typeof s.volume_level == "number" ? s.volume_level : null);
  H(() => {
    A(null);
  }, [s.volume_level]);
  const b = X(0), z = (C) => {
    const L = Math.max(0, Math.min(1, Math.round(C * 100) / 100));
    A(L), clearTimeout(b.current), b.current = window.setTimeout(() => r("volume_set", { volume_level: L }), 400);
  }, v = X(null), y = (C) => {
    const L = v.current;
    if (!L) return;
    const j = L.getBoundingClientRect();
    z((C - j.left) / j.width);
  }, N = i.pictureUrl(s.entity_picture_local || s.entity_picture), M = s.media_title || s.app_name || s.source || Kt(h), D = s.media_artist || s.media_album_name || (s.media_title ? Kt(h) : "") || "", g = a.h >= 300 && a.w >= 300, E = a.h < 250, x = t ? Qo : u ? tc : Gr;
  return u && t ? /* @__PURE__ */ o("div", { class: "media media-off", children: [
    /* @__PURE__ */ o("div", { class: "media-art-empty big", children: /* @__PURE__ */ o(Qo, { size: 40 }) }),
    /* @__PURE__ */ o("div", { class: "media-title", children: Ie(i, e) }),
    /* @__PURE__ */ o("div", { class: "media-sub", children: Kt(h) }),
    f(Ne.TURN_ON) ? /* @__PURE__ */ o("button", { class: "pill-btn media-power", onClick: () => r("turn_on"), children: [
      /* @__PURE__ */ o(Qt, { size: 18 }),
      /* @__PURE__ */ o("span", { children: d("common.turn_on") })
    ] }) : /* @__PURE__ */ o("div", { class: "muted small media-hint", children: d("media.tv_remote_only") })
  ] }) : /* @__PURE__ */ o("div", { class: "media" + (g ? " big" : "") + (E ? " short" : ""), children: [
    /* @__PURE__ */ o("div", { class: "media-top", children: [
      N && !u ? /* @__PURE__ */ o("div", { class: "media-art", style: { backgroundImage: "url(" + N + ")" } }) : /* @__PURE__ */ o("div", { class: "media-art media-art-empty", children: /* @__PURE__ */ o(x, { size: g ? 36 : 26 }) }),
      /* @__PURE__ */ o("div", { class: "media-info", children: [
        /* @__PURE__ */ o("div", { class: "media-title", children: M }),
        D && /* @__PURE__ */ o("div", { class: "media-sub", children: D }),
        /* @__PURE__ */ o("div", { class: "media-state" + (p ? " on" : ""), children: [
          p && /* @__PURE__ */ o("i", { class: "eq", children: [
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {})
          ] }),
          Kt(h)
        ] })
      ] }),
      (f(Ne.TURN_OFF) || f(Ne.TURN_ON)) && /* @__PURE__ */ o("button", { class: "icon-round", title: d(u ? "common.turn_on" : "common.turn_off"), onClick: () => r(u ? "turn_on" : "turn_off"), children: /* @__PURE__ */ o(Qt, { size: 16 }) })
    ] }),
    (f(Ne.PAUSE) || f(Ne.PLAY) || f(Ne.NEXT)) && /* @__PURE__ */ o("div", { class: "media-controls", children: [
      f(Ne.PREVIOUS) && /* @__PURE__ */ o("button", { onClick: () => r("media_previous_track"), children: /* @__PURE__ */ o(ml, { size: 22 }) }),
      /* @__PURE__ */ o("button", { class: "media-play", onClick: () => r("media_play_pause"), children: p ? /* @__PURE__ */ o(rl, { size: 24 }) : /* @__PURE__ */ o(Fs, { size: 24 }) }),
      f(Ne.NEXT) && /* @__PURE__ */ o("button", { onClick: () => r("media_next_track"), children: /* @__PURE__ */ o(pl, { size: 22 }) })
    ] }),
    w != null && f(Ne.VOLUME_SET) && /* @__PURE__ */ o("div", { class: "media-volume", children: [
      f(Ne.VOLUME_MUTE) && /* @__PURE__ */ o("button", { onClick: () => r("volume_mute", { is_volume_muted: !s.is_volume_muted }), children: s.is_volume_muted ? /* @__PURE__ */ o(yl, { size: 18 }) : /* @__PURE__ */ o(xl, { size: 18 }) }),
      /* @__PURE__ */ o(
        "div",
        {
          class: "vol-bar",
          ref: v,
          onClick: (C) => y(C.clientX),
          onTouchMove: (C) => y(C.touches[0].clientX),
          children: /* @__PURE__ */ o("div", { class: "vol-fill", style: { width: Math.round(w * 100) + "%" } })
        }
      ),
      /* @__PURE__ */ o("span", { class: "vol-num", children: Math.round(w * 100) })
    ] }),
    n && f(Ne.SELECT_SOURCE) && s.source_list && /* @__PURE__ */ o("div", { class: "chips media-sources", children: s.source_list.map((C) => /* @__PURE__ */ o("button", { class: "chip" + (s.source === C ? " active" : ""), onClick: () => r("select_source", { source: C }), children: C }, C)) })
  ] });
}
function Vl({ card: e, size: t }) {
  const n = ae(), a = e.items.findIndex((f) => n.states[f.entity] && n.states[f.entity].state === "playing"), [i, c] = _(a >= 0 ? a : 0), s = e.items[Math.min(i, e.items.length - 1)], l = e.type === "tv" || !!n.states[s.entity] && n.states[s.entity].attributes.device_class === "tv";
  return /* @__PURE__ */ o("div", { class: "media-wrap", children: [
    e.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline seg-full", children: e.items.map((f, h) => {
      const u = n.states[f.entity];
      return /* @__PURE__ */ o("button", { class: h === i ? "active" : "", onClick: () => c(h), children: [
        u && u.state === "playing" && /* @__PURE__ */ o("i", { class: "dot-live" }),
        Ie(n, f)
      ] }, f.entity);
    }) }),
    at(n, s.entity) && /* @__PURE__ */ o(Yl, { it: s, tv: l, sources: e.type === "tv", size: t }, s.entity)
  ] });
}
const Gl = {
  "clear-night": { Icon: Ts },
  cloudy: { Icon: ts },
  exceptional: { Icon: fo },
  fog: { Icon: qr },
  hail: { Icon: ti },
  lightning: { Icon: fo },
  "lightning-rainy": { Icon: fo },
  partlycloudy: { Icon: J1 },
  pouring: { Icon: Qr },
  rainy: { Icon: jr },
  snowy: { Icon: pa },
  "snowy-rainy": { Icon: ti },
  sunny: { Icon: oc },
  windy: { Icon: Tn },
  "windy-variant": { Icon: Tn }
};
function et(e) {
  const t = Gl[e || ""];
  return { label: t ? d("weather." + e) : e || "—", Icon: t ? t.Icon : ts };
}
function Mc(e, t) {
  const [n, a] = _([]), [i, c] = _([]), s = t ? e.states[t] : void 0, l = s && Number(s.attributes.supported_features) || 0;
  return H(() => {
    if (!t || e.status !== "connected" || !l) return;
    const f = [];
    l & 2 && f.push(e.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: t, forecast_type: "hourly" },
      (u) => a(u.forecast || [])
    ));
    const h = l & 1 ? "daily" : l & 4 ? "twice_daily" : "";
    return h && f.push(e.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: t, forecast_type: h },
      (u) => c(Xl(u.forecast || [], h === "twice_daily"))
    )), () => f.forEach((u) => u());
  }, [t, e.status, l]), { hourly: n, days: i };
}
function Xl(e, t) {
  if (!t) return e.map((i) => ({ t: Date.parse(i.datetime), hi: i.temperature, lo: i.templow, condition: i.condition }));
  const n = {}, a = [];
  return e.forEach((i) => {
    const c = new Date(Date.parse(i.datetime)), s = c.getFullYear() + "-" + c.getMonth() + "-" + c.getDate();
    n[s] || (n[s] = { t: c.getTime() }, a.push(s));
    const l = n[s];
    [i.temperature, i.templow].filter((h) => typeof h == "number").forEach((h) => {
      l.hi = l.hi == null ? h : Math.max(l.hi, h), l.lo = l.lo == null ? h : Math.min(l.lo, h);
    }), (i.is_daytime !== !1 || !l.condition) && (l.condition = i.condition);
  }), a.map((i) => n[i]);
}
function Zl(e, t) {
  const n = Number(e);
  if (!isNaN(n))
    return t === "m/s" ? n : t === "mph" ? n * 0.447 : n / 3.6;
}
function $l(e, t) {
  const n = Number(e);
  if (!isNaN(n))
    return t === "mmHg" ? n : t === "inHg" ? n * 25.4 : n * 0.750062;
}
function Ee(e) {
  const t = Number(e);
  return isNaN(t) ? "—" : String(Math.round(t));
}
const Jl = 64, Kl = 32, ci = 36, ri = 84, e0 = 33;
function Cc({ card: e, size: t }) {
  const n = ae(), a = Rn(), i = e.items.filter((g) => g.entity.indexOf("weather.") === 0)[0], c = e.items.filter((g) => g !== i), s = i && i.entity, l = s ? n.states[s] : void 0, { hourly: f, days: h } = Mc(n, s);
  let u = t.h - (l ? Jl + Kl : 0);
  const p = Math.max(0, Math.min(c.length, Math.floor(u / ci)));
  u -= p * ci + (p ? 10 : 0);
  const r = !!l && f.length > 0 && u >= ri;
  r && (u -= ri + 12);
  const m = l ? Math.max(0, Math.min(h.length, 7, Math.floor((u - 10) / e0))) : 0, A = h.slice(0, m), w = Math.min.apply(null, A.map((g) => g.lo != null ? g.lo : 99)), b = Math.max.apply(null, A.map((g) => g.hi != null ? g.hi : -99)), z = (g) => (g - w) / Math.max(1, b - w) * 100, v = Date.now(), y = l ? l.attributes : {}, N = et(l && l.state), M = Zl(y.wind_speed, y.wind_speed_unit), D = $l(y.pressure, y.pressure_unit);
  return /* @__PURE__ */ o("div", { class: "weather", children: [
    l && /* @__PURE__ */ o("div", { class: "weather-now", children: [
      /* @__PURE__ */ o(N.Icon, { size: t.w > 360 ? 54 : 40 }),
      /* @__PURE__ */ o("div", { class: "weather-temp", children: [
        Ee(y.temperature),
        /* @__PURE__ */ o("sup", { children: "°" })
      ] }),
      /* @__PURE__ */ o("div", { class: "weather-desc", children: [
        /* @__PURE__ */ o("b", { children: N.label }),
        y.apparent_temperature != null && /* @__PURE__ */ o("span", { children: d("weather.feels_like", { t: Ee(y.apparent_temperature) }) }),
        h[0] && h[0].hi != null && /* @__PURE__ */ o("span", { children: [
          Ee(h[0].lo),
          "° … ",
          Ee(h[0].hi),
          "°"
        ] })
      ] })
    ] }),
    l && /* @__PURE__ */ o("div", { class: "weather-facts", children: [
      M != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(Tn, { size: 14 }),
        d("weather.wind", { v: M.toFixed(1) })
      ] }),
      y.humidity != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(st, { size: 14 }),
        Ee(y.humidity),
        "%"
      ] }),
      D != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(gs, { size: 14 }),
        d("weather.pressure", { v: Math.round(D) })
      ] })
    ] }),
    p > 0 && /* @__PURE__ */ o("div", { class: "weather-rooms", children: c.slice(0, p).map((g) => {
      const E = n.states[g.entity], x = g.entity.indexOf("weather.") === 0, C = x ? E && E.attributes.temperature : E && E.state, L = x ? E && E.attributes.humidity : g.hum ? Fe(n, g.hum) : void 0;
      return /* @__PURE__ */ o("div", { class: "wroom tappable", onClick: () => a(g.hum ? [g.entity, g.hum] : [g.entity]), children: [
        /* @__PURE__ */ o("span", { class: "wroom-name", children: Ie(n, g) }),
        L != null && /* @__PURE__ */ o("span", { class: "wroom-hum", children: [
          /* @__PURE__ */ o(st, { size: 12 }),
          Ee(L),
          "%"
        ] }),
        /* @__PURE__ */ o("b", { class: "wroom-temp", children: [
          t0(C),
          "°"
        ] })
      ] }, g.entity);
    }) }),
    r && /* @__PURE__ */ o("div", { class: "weather-hours", children: f.filter((g) => Date.parse(g.datetime) > v - 36e5).slice(0, 12).map((g) => {
      const E = et(g.condition);
      return /* @__PURE__ */ o("div", { class: "hour", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: ct(Date.parse(g.datetime)) }),
        /* @__PURE__ */ o(E.Icon, { size: 18 }),
        /* @__PURE__ */ o("b", { children: [
          Ee(g.temperature),
          "°"
        ] })
      ] }, g.datetime);
    }) }),
    A.length > 0 && /* @__PURE__ */ o("div", { class: "weather-days", children: A.map((g, E) => {
      const x = et(g.condition);
      return /* @__PURE__ */ o("div", { class: "day", children: [
        /* @__PURE__ */ o("span", { class: "day-name", children: E === 0 ? d("weather.today") : mt("date.weekdays_short")[new Date(g.t).getDay()] }),
        /* @__PURE__ */ o(x.Icon, { size: 18 }),
        /* @__PURE__ */ o("span", { class: "day-lo", children: [
          Ee(g.lo),
          "°"
        ] }),
        /* @__PURE__ */ o("span", { class: "day-bar", children: g.lo != null && g.hi != null && /* @__PURE__ */ o("i", { style: { left: z(g.lo) + "%", width: Math.max(4, z(g.hi) - z(g.lo)) + "%" } }) }),
        /* @__PURE__ */ o("span", { class: "day-hi", children: [
          Ee(g.hi),
          "°"
        ] })
      ] }, g.t);
    }) })
  ] });
}
function t0(e) {
  const t = Number(e);
  return isNaN(t) ? "—" : (Math.round(t * 10) / 10).toFixed(1);
}
function n0({ entity: e }) {
  const t = ae(), n = t.states[e], { days: a } = Mc(t, e);
  if (!n || n.state === "unavailable") return null;
  const i = et(n.state), c = a[0];
  return /* @__PURE__ */ o("div", { class: "ambient-weather", children: [
    /* @__PURE__ */ o(i.Icon, { size: 30 }),
    /* @__PURE__ */ o("span", { class: "aw-temp", children: [
      Ee(n.attributes.temperature),
      "°"
    ] }),
    /* @__PURE__ */ o("span", { class: "aw-desc", children: [
      i.label,
      c && c.hi != null && /* @__PURE__ */ o("small", { children: [
        Ee(c.lo),
        "° … ",
        Ee(c.hi),
        "°"
      ] })
    ] })
  ] });
}
function ga(e, t) {
  if (!t || kn[e].domains.indexOf(t.entity_id.split(".")[0]) === -1) return !1;
  const n = t.attributes.device_class, a = t.entity_id.indexOf("weather.") === 0;
  return e === "climate" || e === "weather" ? a || n === "temperature" : !0;
}
function li(e, t, n) {
  return t.filter((a) => e.states[a] && e.states[a].entity_id.indexOf("sensor.") === 0 && e.states[a].attributes.device_class === n)[0];
}
function Lc(e, t, n) {
  if (!n.device) return [n];
  const a = e.devices[n.device];
  if (!a) return n.entity ? [{ entity: n.entity, name: n.name }] : [];
  const i = a.entities.filter((r) => e.registry[r] && e.registry[r].ec == null && !!e.states[r]), c = n.skip || [], s = n.order || [], l = (r) => {
    const m = s.indexOf(r);
    return m === -1 ? 1e6 : m;
  }, f = i.filter((r) => ga(t, e.states[r]) && c.indexOf(r) === -1).map((r, m) => ({ id: r, i: m })).sort((r, m) => l(r.id) - l(m.id) || r.i - m.i).map((r) => r.id), h = f.length === 1, u = n.names || {}, p = (r) => u[r] || (h ? n.name || a.name : e.registry[r].en || a.name || void 0);
  return t === "climate" ? f.map((r) => ({ entity: r, hum: li(e, i, "humidity"), name: p(r) })) : t === "ac" ? f.map((r) => ({ entity: r, temp: n.temp || li(e, i, "temperature"), name: p(r) })) : f.map((r) => ({ entity: r, name: p(r), icon: void 0 }));
}
function o0(e, t) {
  if (!t.items.some((i) => i.device)) return t;
  const n = {}, a = [];
  return t.items.forEach((i) => Lc(e, t.type, i).forEach((c) => {
    n[c.entity] || (n[c.entity] = !0, a.push(c));
  })), { ...t, items: a };
}
const Sc = "photoframe.cameraMode", fn = [];
function Ec() {
  try {
    const e = localStorage.getItem(Sc);
    return e === "live" || e === "paused" || e === "snapshot" ? e : "auto";
  } catch {
    return "auto";
  }
}
function a0(e) {
  try {
    localStorage.setItem(Sc, e);
  } catch {
  }
  fn.forEach((t) => t());
}
function i0(e = "full") {
  const t = Ec();
  return t === "auto" ? e === "lite" ? "paused" : "live" : t;
}
function s0() {
  const e = ia(), [, t] = _(0);
  return H(() => {
    const n = () => t((a) => a + 1);
    return fn.push(n), () => {
      fn.splice(fn.indexOf(n), 1);
    };
  }, []), i0(e);
}
const c0 = 450;
function r0(e, t, n) {
  const a = X(0), i = () => {
    a.current && (window.clearTimeout(a.current), a.current = 0);
  };
  return H(() => i, []), {
    onMouseEnter: () => {
      !t || a.current || (a.current = window.setTimeout(() => {
        a.current = 0, e();
      }, c0));
    },
    onMouseLeave: () => {
      i(), n && n();
    }
  };
}
const l0 = 36, d0 = 8, f0 = 0.25, h0 = 0.5, mo = "transform 0.3s cubic-bezier(0.2, 0.7, 0.2, 1)", yt = "__swipeBase";
function po(e, t, n) {
  const a = e.style, i = e;
  if (i[yt] === void 0) {
    const s = window.getComputedStyle(e).transform || window.getComputedStyle(e).webkitTransform || "";
    i[yt] = s && s !== "none" ? s : "";
  }
  a.webkitTransition = n, a.transition = n;
  const c = t ? "translateX(" + Math.round(t) + "px)" + (i[yt] ? " " + i[yt] : "") : "";
  a.webkitTransform = c, a.transform = c, t || delete i[yt];
}
function u0(e, t, n) {
  const a = X(null), i = X(null), c = X(null), s = X(null), l = X(0), f = X(!1), h = X(!1), u = X(0), p = () => {
    const x = s.current;
    s.current = null, l.current = 0, x && x.parentNode && x.parentNode.removeChild(x);
  }, r = (x) => {
    const C = i.current, L = c.current;
    if (!C || !n || l.current === x) return s.current;
    const j = n(x);
    if (!j)
      return p(), null;
    let Q = s.current;
    if (!Q) {
      Q = document.createElement("div"), Q.className = "cam-peek";
      const U = C.className, Z = L ? window.getComputedStyle(L).objectFit : "";
      Q.style.backgroundSize = /fit-height/.test(U) ? "auto 100%" : /fit-width/.test(U) ? "100% auto" : Z === "contain" || /fit-contain/.test(U) ? "contain" : "cover", Q.style.backgroundColor = window.getComputedStyle(C).backgroundColor || "#000", C.appendChild(Q), s.current = Q;
    }
    return Q.style.backgroundImage = 'url("' + j + '")', l.current = x, Q;
  }, m = () => {
    const x = i.current, C = [];
    if (x)
      for (let L = 0; L < x.children.length; L++) x.children[L] !== s.current && C.push(x.children[L]);
    return C;
  }, A = (x, C) => {
    const L = i.current, j = c.current;
    if (!L || !j) return;
    const Q = L.clientWidth || 1;
    m().forEach((ee) => po(ee, x, C));
    const U = x < 0 ? 1 : x > 0 ? -1 : l.current, Z = U ? r(U) : s.current;
    Z && po(Z, x + U * Q, C);
  }, w = (x, C, L) => {
    a.current = { x, y: C, t: Date.now() }, h.current = !1, f.current = !1, i.current = L, c.current = i.current ? i.current.querySelector("img:not(.cam-peek), video") : null;
  }, b = (x, C, L, j) => {
    if (!a.current) return;
    const Q = x - a.current.x, U = C - a.current.y;
    !f.current && Math.abs(Q) > d0 && Math.abs(Q) > Math.abs(U) && (f.current = !0), f.current && (L && j && j.cancelable && L(j), A(Q, "none"));
  }, z = (x, C) => {
    const L = a.current;
    if (a.current = null, !L) return;
    const j = x - L.x, Q = C - L.y, U = i.current, Z = c.current, ee = U && U.clientWidth || 1, B = Math.abs(j) / Math.max(1, Date.now() - L.t) > h0;
    if (!(f.current && Math.abs(j) > l0 && Math.abs(j) > Math.abs(Q) && (Math.abs(j) > ee * f0 || B))) {
      A(0, mo), window.setTimeout(p, 320);
      return;
    }
    h.current = !0;
    const V = j < 0 ? 1 : -1;
    if (!Z || !s.current) {
      e(V);
      return;
    }
    A(-V * ee, mo), window.setTimeout(() => {
      e(V), m().forEach((W) => po(W, 0, "none"));
      const J = s.current;
      let q = !1;
      const S = () => {
        q || (q = !0, Z.removeEventListener("load", S), s.current === J && p());
      };
      Z.addEventListener("load", S), window.setTimeout(S, 600);
    }, 300);
  }, v = () => {
    a.current && (a.current = null, A(0, mo), window.setTimeout(p, 320));
  };
  return {
    onTouchStart: (x) => {
      u.current = Date.now();
      const C = x.touches[0];
      C && w(C.clientX, C.clientY, x.currentTarget);
    },
    onTouchMove: (x) => {
      u.current = Date.now();
      const C = x.touches[0];
      C && b(C.clientX, C.clientY, (L) => L.preventDefault(), x);
    },
    onTouchEnd: (x) => {
      u.current = Date.now();
      const C = x.changedTouches[0];
      C && z(C.clientX, C.clientY);
    },
    onTouchCancel: v,
    onMouseDown: (x) => {
      x.button !== 0 || Date.now() - u.current < 700 || w(x.clientX, x.clientY, x.currentTarget);
    },
    onMouseMove: (x) => b(x.clientX, x.clientY),
    onMouseUp: (x) => z(x.clientX, x.clientY),
    onMouseLeave: v,
    onDragStart: (x) => x.preventDefault(),
    onClick: () => {
      if (h.current) {
        h.current = !1;
        return;
      }
      t && t();
    }
  };
}
function Yn(e, t) {
  const n = o0(e, t.title ? t : { ...t, title: Pt(t.type) }), a = n.items.filter((i) => at(e, i.entity));
  return a.length === n.items.length ? n : { ...n, items: a };
}
function Ie(e, t) {
  const n = e.states[t.entity];
  return t.name || n && n.attributes.friendly_name || t.entity;
}
function m0(e, t) {
  const n = e.states[t];
  return n ? n.attributes.device_class : void 0;
}
const p0 = [
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
], A0 = ["door", "window", "opening", "garage_door", "moisture", "smoke", "gas", "problem", "safety"];
function Yo(e, t) {
  const n = e.states[t];
  if (!n || Tt(n.state)) return { text: d("sensor.no_data"), alert: !1, on: !1 };
  const a = t.split(".")[0], i = n.attributes.device_class;
  if (a === "binary_sensor") {
    const s = n.state === "on", l = p0.indexOf(i) !== -1 ? "sensor." + i + "." : "sensor.";
    return { text: d(l + (s ? "on" : "off")), alert: s && A0.indexOf(i) !== -1, on: s };
  }
  if (a === "lock") return { text: n.state === "locked" ? d("sensor.locked") : d("sensor.unlocked"), alert: n.state !== "locked", on: n.state !== "locked" };
  if (a === "cover") return { text: n.state === "open" ? d("sensor.open") : n.state === "closed" ? d("sensor.closed") : n.state, alert: !1, on: n.state === "open" };
  const c = parseFloat(n.state);
  return { text: (isNaN(c) ? n.state : String(Math.round(c * 10) / 10)) + yn(e, t), alert: !1, on: !1 };
}
function g0(e) {
  return Math.max(1, Math.min(5, Math.floor(e.w / 150)));
}
function Ic(e, t) {
  const a = (s) => (t.h + 10) / Math.ceil(e / s) - 10;
  let i = g0(t);
  for (; i < Math.min(e, 6) && a(i) < 96 && t.w / (i + 1) >= 120; ) i++;
  const c = a(i);
  return "lights cols-" + i + (c >= 132 ? "" : c >= 84 ? " compact" : " list");
}
function b0({ card: e, size: t }) {
  const n = ae(), a = Rn(), i = t.h / Math.max(1, e.items.length) < 95;
  return /* @__PURE__ */ o("div", { class: "rooms" + (i ? " compact" : ""), children: e.items.map((c) => {
    const s = c.entity.indexOf("weather.") === 0 ? n.states[c.entity] : void 0, l = s ? et(s.state).Icon : null;
    return /* @__PURE__ */ o("div", { class: "room tappable" + (s ? " room-outside" : ""), onClick: () => a(c.hum ? [c.entity, c.hum] : [c.entity]), children: [
      /* @__PURE__ */ o("div", { class: "room-name", children: [
        l && /* @__PURE__ */ o(l, { size: 14 }),
        Ie(n, c)
      ] }),
      /* @__PURE__ */ o("div", { class: "room-vals", children: [
        /* @__PURE__ */ o("span", { class: "room-temp", children: [
          rn(s ? String(s.attributes.temperature) : Fe(n, c.entity)),
          /* @__PURE__ */ o("sup", { children: "°" })
        ] }),
        s && s.attributes.humidity != null && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(st, { size: 14 }),
          Math.round(s.attributes.humidity),
          "%"
        ] }),
        !s && c.hum && at(n, c.hum) && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(st, { size: 14 }),
          rn(Fe(n, c.hum), 0),
          "%"
        ] })
      ] })
    ] }, c.entity);
  }) });
}
function v0(e, t) {
  const n = X(0), a = X(!1), i = () => {
    a.current = !1, clearTimeout(n.current), n.current = window.setTimeout(() => {
      a.current = !0, e();
    }, 550);
  }, c = () => clearTimeout(n.current);
  return {
    onTouchStart: i,
    onMouseDown: i,
    onTouchEnd: c,
    onTouchMove: c,
    onMouseUp: c,
    onMouseLeave: c,
    onContextMenu: (s) => s.preventDefault(),
    onClick: () => {
      a.current ? a.current = !1 : t();
    }
  };
}
function x0({ it: e }) {
  const t = ae(), n = Rn(), a = v0(() => n([e.entity]), () => t.toggle(e.entity)), i = Fe(t, e.entity), c = Fn(i);
  return /* @__PURE__ */ o("button", { class: "light" + (c ? " on" : "") + (i === void 0 ? " na" : ""), ...a, children: [
    /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(Ce, { name: e.icon || Aa(e.entity), size: 22 }) }),
    /* @__PURE__ */ o("span", { class: "light-name", children: Ie(t, e) }),
    /* @__PURE__ */ o("span", { class: "light-state", children: d(i === void 0 ? "switch.unavailable" : c ? "switch.on" : "switch.off") })
  ] });
}
function y0({ card: e, size: t }) {
  return /* @__PURE__ */ o("div", { class: Ic(e.items.length, t), children: e.items.map((n) => /* @__PURE__ */ o(x0, { it: n }, n.entity)) });
}
function w0({ card: e, paused: t, onCamera: n }) {
  const a = ae(), i = s0(), [c, s] = _(!1), [l, f] = _(0), h = e.items.map((g) => ({ entity: g.entity, name: Ie(a, g) })), u = Math.min(l, Math.max(0, h.length - 1)), p = h[u], r = p ? p.entity : "", m = p ? a.cameraStreamUrl(p.entity) : "", A = p ? a.cameraSnapshotUrl(p.entity) : "", [w, b] = _(!1), z = i === "live" || c || w, v = Ql(A, !z && !t), y = _c(r), N = u0(
    (g) => {
      h.length > 1 && f(Et(u, g, h.length));
    },
    () => {
      m && n(h, u);
    },
    (g) => h.length > 1 ? a.cameraSnapshotUrl(h[Et(u, g, h.length)].entity) : void 0
  ), M = r0(() => b(!0), !z, () => b(!1));
  H(() => {
    s(!1), b(!1);
  }, [i]);
  const D = z ? !m || y.state === "error" : !v;
  return /* @__PURE__ */ o("div", { class: "cam-wrap", children: [
    h.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline seg-full", children: h.map((g, E) => /* @__PURE__ */ o("button", { class: E === u ? "active" : "", onClick: () => f(E), children: g.name }, g.entity + E)) }),
    /* @__PURE__ */ o(
      "div",
      {
        class: "cam cam-swipe fit-" + (e.fit || "cover"),
        ...N,
        ...M,
        onMouseLeave: () => {
          N.onMouseLeave(), M.onMouseLeave();
        },
        children: [
          /* @__PURE__ */ o(zc, { src: m, poster: v, paused: !z || !!t, ...y.img }),
          D && /* @__PURE__ */ o("div", { class: "cam-empty", children: [
            /* @__PURE__ */ o(bl, { size: 26 }),
            /* @__PURE__ */ o("span", { children: d("camera.no_stream") })
          ] }),
          !z && !D && /* @__PURE__ */ o("button", { class: "cam-play-center", onClick: (g) => {
            g.stopPropagation(), s(!0);
          }, title: d("camera.play"), children: /* @__PURE__ */ o(Fs, { size: 20, fill: "currentColor" }) }),
          z && y.state === "loading" && /* @__PURE__ */ o("div", { class: "cam-loading", children: [
            /* @__PURE__ */ o("i", { class: "cam-spinner" }),
            /* @__PURE__ */ o("span", { children: d("camera.loading") })
          ] }),
          z && !D && /* @__PURE__ */ o("span", { class: "live", children: [
            /* @__PURE__ */ o("i", {}),
            "LIVE"
          ] })
        ]
      }
    )
  ] });
}
function k0({ card: e }) {
  const t = ae(), n = Rn();
  return /* @__PURE__ */ o("div", { class: "sensors", children: e.items.map((a) => {
    const i = Yo(t, a.entity);
    return /* @__PURE__ */ o("div", { class: "status-row tappable" + (i.alert ? " alert" : ""), onClick: () => n([a.entity]), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(Ce, { name: a.icon || Aa(a.entity, m0(t, a.entity)), size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: Ie(t, a) }),
        /* @__PURE__ */ o("small", { children: i.text })
      ] })
    ] }, a.entity);
  }) });
}
function _0({ card: e, size: t }) {
  const n = ae(), [a, i] = _(""), c = (s) => {
    const l = s.split(".")[0];
    n.callService(s, l === "automation" ? "trigger" : "turn_on"), i(s), setTimeout(() => i(""), 1200);
  };
  return /* @__PURE__ */ o("div", { class: Ic(e.items.length, t), children: e.items.map((s) => /* @__PURE__ */ o("button", { class: "light scene" + (a === s.entity ? " on" : ""), onClick: () => c(s.entity), children: [
    /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(Ce, { name: s.icon || "sparkles", size: 22 }) }),
    /* @__PURE__ */ o("span", { class: "light-name", children: Ie(n, s) }),
    /* @__PURE__ */ o("span", { class: "light-state", children: a === s.entity ? d("scene.started") : d("scene.tap_to_run") })
  ] }, s.entity)) });
}
function Nc(e) {
  const t = ae(), { size: n, onCamera: a } = e;
  if (!e.card.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.empty") });
  const i = Yn(t, e.card);
  if (!i.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.all_unavailable") });
  switch (i.type) {
    case "climate":
      return /* @__PURE__ */ o(b0, { card: i, size: n });
    case "switches":
      return /* @__PURE__ */ o(y0, { card: i, size: n });
    case "cameras":
      return /* @__PURE__ */ o(w0, { card: i, paused: e.paused, onCamera: a });
    case "sensors":
      return /* @__PURE__ */ o(k0, { card: i });
    case "scenes":
      return /* @__PURE__ */ o(_0, { card: i, size: n });
    case "ac":
      return /* @__PURE__ */ o(Rl, { card: i, size: n });
    case "speakers":
    case "tv":
      return /* @__PURE__ */ o(Vl, { card: i, size: n });
    case "weather":
      return /* @__PURE__ */ o(Cc, { card: i, size: n });
  }
}
function Dc(e) {
  const t = ae(), n = Yn(t, e.card);
  if (n.type !== "switches") return null;
  const a = n.items.filter((i) => Fn(Fe(t, i.entity)));
  return a.length ? /* @__PURE__ */ o("button", { class: "chip-btn", onClick: () => a.forEach((i) => t.turnOff(i.entity)), children: [
    /* @__PURE__ */ o(Qt, { size: 14 }),
    /* @__PURE__ */ o("span", { children: d("switches.all_off") })
  ] }) : null;
}
function pt(e, t) {
  const n = Yn(e, t);
  if (n.type === "switches") {
    const a = n.items.filter((i) => Fn(Fe(e, i.entity))).length;
    return d("switches.title_count", { title: n.title, on: a, total: n.items.length });
  }
  return n.title;
}
function Vn(e, t) {
  const n = Yn(e, t), a = n.items[0];
  if (n.type === "climate") {
    const i = n.items.filter((c) => c.entity.indexOf("weather.") !== 0)[0];
    return { text: i ? rn(Fe(e, i.entity)) + "°" : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "switches") {
    const i = n.items.filter((c) => Fn(Fe(e, c.entity))).length;
    return { text: i ? d("chip.on_count", { title: n.title, n: i }) : d("chip.off", { title: n.title }), lit: i > 0, alert: !1 };
  }
  if (n.type === "sensors") {
    for (let i = 0; i < n.items.length; i++) {
      const c = Yo(e, n.items[i].entity);
      if (c.alert) return { text: Ie(e, n.items[i]) + ": " + c.text.toLowerCase(), lit: !1, alert: !0 };
    }
    return { text: a ? Yo(e, a.entity).text : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "ac" && a) {
    const i = e.states[a.entity];
    return !i || i.state === "off" ? { text: d("chip.off", { title: n.title }), lit: !1, alert: !1 } : { text: n.title + ": " + i.attributes.temperature + "°", lit: !0, alert: !1 };
  }
  if ((n.type === "speakers" || n.type === "tv") && n.items.length) {
    const i = n.items.filter((l) => e.states[l.entity] && e.states[l.entity].state === "playing")[0], c = i && e.states[i.entity];
    return c ? { text: "♪ " + (c.attributes.media_title || Ie(e, i)), lit: !0, alert: !1 } : { text: n.items.filter((l) => e.states[l.entity] && ["on", "idle", "paused"].indexOf(e.states[l.entity].state) !== -1).length && n.type === "tv" ? d("chip.on", { title: n.title }) : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "weather" && a) {
    const i = e.states[a.entity];
    return { text: i ? Math.round(i.attributes.temperature) + "° " + et(i.state).label.toLowerCase() : n.title, lit: !1, alert: !1 };
  }
  return { text: n.title, lit: !1, alert: !1 };
}
function z0(e) {
  return /* @__PURE__ */ o("section", { class: "panel " + (e.class || ""), children: [
    /* @__PURE__ */ o("div", { class: "panel-head", children: [
      /* @__PURE__ */ o("div", { class: "panel-title", children: [
        e.icon && /* @__PURE__ */ o(Ce, { name: e.icon, size: 16, class: "panel-icon" }),
        /* @__PURE__ */ o("h2", { children: e.title })
      ] }),
      e.aside
    ] }),
    e.children
  ] });
}
function Tc(e, t = 520) {
  const [n, a] = _(e);
  return Ve(() => {
    if (e) {
      a(!0);
      return;
    }
    const i = window.setTimeout(() => a(!1), t);
    return () => clearTimeout(i);
  }, [e, t]), e || n;
}
function Bc(e) {
  return e.layout === "auto" ? window.innerWidth <= 700 ? "center" : "corner" : e.layout;
}
const Ge = 3, De = 100 - Ge * 2;
function Pc(e) {
  const t = (n) => (Ge + n / ie * De) / 100;
  return [t(e.x), t(e.y), t(e.x + e.w), t(e.y + e.h)];
}
function di(e) {
  return {
    left: Ge + e.x / ie * De + "%",
    top: Ge + e.y / ie * De + "%",
    width: e.w / ie * De + "%",
    height: e.h / ie * De + "%"
  };
}
function fi(e) {
  const t = e.x + e.w / 2, n = e.y + e.h / 2;
  return " g-" + (e.ha || (t < ie / 3 ? "left" : t > ie * 2 / 3 ? "right" : "center")) + " g-" + (e.va || (n < ie / 3 ? "top" : n > ie * 2 / 3 ? "bottom" : "middle"));
}
function Oc(e, t) {
  if (t) return Pc(t.clock);
  const n = Bc(e);
  return n === "top" ? [0.2, 0.05, 0.8, 0.35] : n === "corner" ? [0, 0.55, 0.55, 0.95] : [0.2, 0.55, 0.8, 0.9];
}
const M0 = [0.4, 0.88, 0.6, 1];
function C0(e, t) {
  return t ? Pc(t.widgets) : e.widgetsPos === "top" ? [0.15, 0, 0.85, 0.2] : e.widgetsPos === "bottom" ? [0.15, 0.78, 0.85, 0.96] : Bc(e) === "corner" ? [0.5, 0.7, 1, 0.96] : Oc(e, null);
}
function Ao([e, t, n]) {
  const a = (i) => (i /= 255, i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * a(e) + 0.7152 * a(t) + 0.0722 * a(n);
}
const go = { color: "#ffffff", dark: !1 };
function bo(e, t, n) {
  const [a, i] = _(go), c = t.join(",");
  return H(() => {
    if (!n || !e) return;
    const s = new Image();
    s.onload = () => {
      try {
        const l = document.createElement("canvas");
        l.width = s.width, l.height = s.height;
        const f = l.getContext("2d");
        f.drawImage(s, 0, 0);
        const h = Math.floor(t[0] * l.width), u = Math.floor(t[1] * l.height), p = Math.max(1, Math.floor((t[2] - t[0]) * l.width)), r = Math.max(1, Math.floor((t[3] - t[1]) * l.height)), m = f.getImageData(h, u, p, r).data, A = [0, 0, 0];
        for (let D = 0; D < m.length; D += 4)
          A[0] += m[D], A[1] += m[D + 1], A[2] += m[D + 2];
        const w = m.length / 4, b = A.map((D) => D / w), z = b.map((D) => 255 - D), v = Ao(b), y = Ao(z), M = (Math.max(v, y) + 0.05) / (Math.min(v, y) + 0.05) >= 3 ? z : v > 0.35 ? [17, 17, 17] : [255, 255, 255];
        i({ color: "rgb(" + M.map(Math.round).join(",") + ")", dark: Ao(M) < 0.25 });
      } catch {
        i(go);
      }
    }, s.src = e;
  }, [e, c, n]), n ? a : go;
}
function L0({ prefs: e }) {
  const t = yc(5e3), n = e.datePos === "above" || e.datePos !== "below" && e.layout === "top", a = e.date && /* @__PURE__ */ o("div", { class: "ambient-date" + (n ? " above" : ""), children: kc(t) });
  return /* @__PURE__ */ o(ne, { children: [
    n && a,
    /* @__PURE__ */ o("div", { class: "ambient-time", style: { fontWeight: p1[e.font] }, children: wc(t) }),
    !n && a
  ] });
}
function ba(e, t, n) {
  const a = t.homeCards().filter((f) => f.chip), i = a.filter((f) => f.type === "weather" && f.items.length)[0], c = er(a.filter((f) => f.type !== "weather"), n), s = c.filter((f) => n.hidden.indexOf(f.id) === -1), l = s.filter((f) => Vn(e, f).alert);
  return { weather: i, widgets: c, chips: s, alerts: l, ordered: l.concat(s.filter((f) => l.indexOf(f) === -1)) };
}
function S0(e) {
  const t = ae(), n = Re(), a = Qn(), [i, c] = _(""), { weather: s, widgets: l, chips: f, ordered: h } = ba(t, n, a), u = e.customizing, p = () => {
    c(""), e.onDone();
  }, [r, m] = _(null), A = x1(), w = y1(a, A), b = r || w, z = () => me(Ro(A, w ? null : v1(a, A === "landscape" && window.innerWidth > 700))), v = a.color === "contrast", y = a.widgetsColor || a.color, N = y === "contrast", M = !N && !(a.widgetsColor === "" && y === "white"), D = Ya(y, a.widgetsColor ? a.widgetsCustomColor : a.customColor), g = !v && a.color !== "white", E = Ya(a.color, a.customColor), x = bo(e.photoThumb, Oc(a, b), v), C = bo(e.photoThumb, C0(a, b), N), L = bo(e.photoThumb, M0, v), j = Tc(e.visible || u), Q = "ambient" + (e.visible ? " visible" : "") + (b ? " lock-grid" : " lock-" + a.layout + " widgets-" + a.widgetsPos) + " lock-size-" + a.size + " chips-" + a.chipStyle + (u ? " customizing" : "");
  return /* @__PURE__ */ o(ne, { children: [
    /* @__PURE__ */ o("div", { ref: e.innerRef, class: Q, children: j && /* @__PURE__ */ o(ne, { children: [
      /* @__PURE__ */ o(
        "div",
        {
          class: "ambient-clock" + (v ? " text-contrast" : "") + (g ? " ink-fixed" + (a.color === "accent" ? " accent-text" : "") : "") + (x.dark ? " ink-dark" : "") + (b ? fi(b.clock) : ""),
          style: { ...b ? di(b.clock) : {}, ...v ? { color: x.color } : g && E ? { color: E } : {} },
          onClick: u ? () => c("clock") : void 0,
          children: [
            /* @__PURE__ */ o(L0, { prefs: a }),
            a.weather && s && /* @__PURE__ */ o(n0, { entity: s.items[0].entity })
          ]
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          class: "glances" + (N ? " text-contrast" : "") + (M ? " ink-fixed" + (y === "accent" ? " accent-text" : "") : "") + (C.dark ? " ink-dark" : "") + (b ? fi(b.widgets) : ""),
          style: { ...b ? di(b.widgets) : {}, ...N ? { color: C.color } : M && D ? { color: D } : {} },
          onClick: u ? () => c("widgets") : void 0,
          children: [
            t.status !== "connected" && t.status !== "connecting" && !u && /* @__PURE__ */ o("button", { class: "glance warn", onClick: e.onConnection, children: [
              /* @__PURE__ */ o(kl, { size: 18 }),
              /* @__PURE__ */ o("span", { children: d("ambient.offline") })
            ] }),
            u && !f.length && /* @__PURE__ */ o("span", { class: "glance glance-add", children: [
              /* @__PURE__ */ o(lt, { size: 18 }),
              /* @__PURE__ */ o("span", { children: d("lock.add_widgets") })
            ] }),
            h.map((U) => {
              const Z = Vn(t, U);
              return /* @__PURE__ */ o(
                "button",
                {
                  class: "glance" + (Z.lit ? " lit" : "") + (Z.alert ? " alert" : ""),
                  title: Z.text,
                  onClick: u ? void 0 : () => e.onSheet(U),
                  children: [
                    /* @__PURE__ */ o(Ce, { name: U.icon, size: 18 }),
                    /* @__PURE__ */ o("span", { children: Z.text })
                  ]
                },
                U.id
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ o(
        "button",
        {
          class: "home-hint" + (v ? " text-contrast" : "") + (e.showHint ? " visible" : "") + (L.dark ? " ink-dark" : ""),
          "aria-label": d("ambient.home_hint"),
          style: v ? { color: L.color } : void 0,
          onClick: e.onHome,
          tabIndex: e.showHint ? 0 : -1,
          children: /* @__PURE__ */ o(U1, { size: 36, strokeWidth: 1.8 })
        }
      ),
      u && b && !i && /* @__PURE__ */ o(Hc, { grid: b, onDraft: m, onDone: (U) => {
        m(null), me(Ro(A, U));
      }, onTap: c })
    ] }) }),
    j && u && /* @__PURE__ */ o("div", { class: "lock-ui", children: [
      /* @__PURE__ */ o("div", { class: "lock-top", children: [
        /* @__PURE__ */ o("span", { children: d(b ? "lock.grid_hint" : "lock.hint") }),
        /* @__PURE__ */ o("span", { class: "lock-top-btns", children: [
          /* @__PURE__ */ o("button", { class: "pill-btn" + (w ? " on" : ""), onClick: z, title: d("lock.grid"), children: [
            /* @__PURE__ */ o(Zr, { size: 16 }),
            /* @__PURE__ */ o("span", { children: d("lock.grid") })
          ] }),
          /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: p, children: d("common.done") })
        ] })
      ] }),
      i && /* @__PURE__ */ o("div", { class: "lock-modal", onClick: (U) => {
        U.target === U.currentTarget && c("");
      }, children: /* @__PURE__ */ o(R0, { kind: i, widgets: l, hasWeather: !!s, onClose: () => c("") }) })
    ] })
  ] });
}
const E0 = ["clock", "widgets"];
function Hc(e) {
  const t = X(null), n = (a, i, c) => {
    const s = t.current;
    if (!s) return;
    a.stopPropagation(), a.cancelable && a.preventDefault();
    const l = s.getBoundingClientRect(), f = (E) => {
      const x = "touches" in E ? E.touches[0] || E.changedTouches[0] : E;
      return { x: x.clientX, y: x.clientY };
    }, h = f(a), u = e.grid[i], p = l.width / ie, r = l.height / ie, m = s.parentElement ? s.parentElement.querySelector(i === "clock" ? ".ambient-clock" : ".glances") : null, w = (m ? [].slice.call(m.children) : []).map((E) => {
      const x = E.getBoundingClientRect(), C = getComputedStyle(E);
      return { w: x.width + parseFloat(C.marginLeft) + parseFloat(C.marginRight), h: x.height + parseFloat(C.marginTop) + parseFloat(C.marginBottom) };
    }), b = m ? (() => {
      const E = getComputedStyle(m);
      return { x: parseFloat(E.paddingLeft) + parseFloat(E.paddingRight), y: parseFloat(E.paddingTop) + parseFloat(E.paddingBottom) };
    })() : { x: 0, y: 0 }, z = w.reduce((E, x) => Math.max(E, x.w), 0), v = Math.max(1, Math.ceil((z + b.x) / p - 0.05)), y = (E) => {
      if (!w.length) return 1;
      if (i === "clock") return Math.max(1, Math.ceil((w.reduce((Q, U) => Q + U.h, 0) + b.y) / r - 0.05));
      const x = E * p - b.x;
      let C = 0, L = 0, j = 0;
      return w.forEach((Q) => {
        C && C + Q.w > x && (j += L, C = 0, L = 0), C += Q.w, L = Math.max(L, Q.h);
      }), j += L, Math.max(1, Math.ceil((j + b.y) / r - 0.05));
    };
    let N = !1, M = e.grid;
    const D = (E) => {
      const x = f(E), C = (x.x - h.x) / l.width * ie, L = (x.y - h.y) / l.height * ie;
      if ((Math.abs(C) > 0.3 || Math.abs(L) > 0.3) && (N = !0), !N) return;
      E.cancelable && E.preventDefault();
      let j = c ? { ...u, w: u.w + C, h: u.h + L } : { ...u, x: u.x + C, y: u.y + L };
      if (c) {
        const Q = Math.max(v, Math.round(j.w));
        j = { ...j, w: Q, h: Math.max(y(Q), Math.round(j.h)) };
      }
      M = { ...e.grid, [i]: Fo(j) }, e.onDraft(M);
    }, g = () => {
      document.removeEventListener("touchmove", D), document.removeEventListener("touchend", g), document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", g), N ? e.onDone(M) : e.onTap(i);
    };
    document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", g), document.addEventListener("mousemove", D), document.addEventListener("mouseup", g);
  };
  return /* @__PURE__ */ o("div", { class: "grid-editor", ref: t, style: { left: Ge + "%", top: Ge + "%", width: De + "%", height: De + "%" }, children: E0.map((a) => {
    const i = e.grid[a], c = { left: i.x / ie * 100 + "%", top: i.y / ie * 100 + "%", width: i.w / ie * 100 + "%", height: i.h / ie * 100 + "%" };
    return /* @__PURE__ */ o(
      "div",
      {
        class: "grid-box grid-" + a,
        style: c,
        onTouchStart: (s) => n(s, a, !1),
        onMouseDown: (s) => n(s, a, !1),
        children: [
          /* @__PURE__ */ o("span", { class: "grid-label", children: d(a === "clock" ? "lock.clock" : "lock.widgets") }),
          /* @__PURE__ */ o("span", { class: "grid-resize", onTouchStart: (s) => n(s, a, !0), onMouseDown: (s) => n(s, a, !0) })
        ]
      },
      a
    );
  }) });
}
function hi(e) {
  const [t, n] = _(e.custom);
  H(() => n(e.custom), [e.custom]);
  const a = e.value === "custom";
  return /* @__PURE__ */ o(ne, { children: [
    /* @__PURE__ */ o("div", { class: "lock-colors", children: [
      e.same && /* @__PURE__ */ o(
        "button",
        {
          class: "lock-color lock-color-same" + (e.value === "" ? " on" : ""),
          title: d("lock.color.same"),
          onClick: () => e.onPick(""),
          children: d("lock.color.same")
        }
      ),
      N0.map((i) => /* @__PURE__ */ o(
        "button",
        {
          title: d("lock.color." + i),
          class: "lock-color" + (e.value === i ? " on" : "") + (i === "accent" ? " accent-bg" : "") + (i === "contrast" ? " lock-color-contrast" : ""),
          style: i === "accent" || i === "contrast" ? void 0 : { background: A1[i] },
          onClick: () => e.onPick(i),
          children: i === "contrast" ? /* @__PURE__ */ o("span", { children: "A" }) : null
        },
        i
      )),
      /* @__PURE__ */ o(
        "label",
        {
          class: "lock-color lock-color-custom" + (a ? " on" : ""),
          title: d("lock.color.custom"),
          style: a && kt.test(e.custom) ? { background: e.custom } : void 0,
          onClick: () => {
            a || e.onPick("custom");
          },
          children: [
            /* @__PURE__ */ o("input", { type: "color", value: kt.test(e.custom) ? e.custom : "#ffb86b", onInput: (i) => e.onCustom(i.currentTarget.value) }),
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
          class: "hex-input" + (kt.test(t) ? "" : " invalid"),
          value: t,
          maxLength: 7,
          placeholder: "#ffb86b",
          onInput: (i) => {
            let c = i.currentTarget.value.trim();
            c && c[0] !== "#" && (c = "#" + c), n(c), kt.test(c) && e.onCustom(c.toLowerCase());
          }
        }
      )
    ] })
  ] });
}
const I0 = ["thin", "light", "regular", "bold"], N0 = ["contrast", "white", "accent", "warm", "mint", "sky", "rose"], D0 = ["xs", "s", "m", "l", "xl"], T0 = ["clock", "top", "bottom"], B0 = ["auto", "above", "below"], P0 = ["auto", "corner", "center", "top"], O0 = ["", "left", "center", "right"], H0 = ["", "top", "middle", "bottom"];
function ui(e) {
  const t = e.grid[e.kind], n = (a) => {
    const i = { ...t, ...a };
    i.ha || delete i.ha, i.va || delete i.va, me(Ro(e.orient, { ...e.grid, [e.kind]: i }));
  };
  return /* @__PURE__ */ o(ne, { children: [
    /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.align_h") }),
      /* @__PURE__ */ o("div", { class: "seg", children: O0.map((a) => /* @__PURE__ */ o("button", { class: (t.ha || "") === a ? "active" : "", onClick: () => n({ ha: a || void 0 }), children: d("lock.align." + (a || "auto")) }, a)) })
    ] }),
    /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.align_v") }),
      /* @__PURE__ */ o("div", { class: "seg", children: H0.map((a) => /* @__PURE__ */ o("button", { class: (t.va || "") === a ? "active" : "", onClick: () => n({ va: a || void 0 }), children: d("lock.align." + (a || "auto")) }, a)) })
    ] })
  ] });
}
const F0 = ["auto", "text", "icons"];
function R0(e) {
  const t = Qn(), n = x1(), a = y1(t, n), i = (s, l) => {
    const f = e.widgets.map((p) => p.id), h = s + l, u = f[s];
    f[s] = f[h], f[h] = u, me({ order: f });
  }, c = (s, l) => {
    const f = t.hidden.filter((h) => h !== s);
    me({ hidden: l ? f : f.concat(s) });
  };
  return /* @__PURE__ */ o("div", { class: "lock-panel", onClick: (s) => s.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "lock-panel-head", children: [
      /* @__PURE__ */ o("b", { children: e.kind === "clock" ? d("lock.clock") : d("lock.widgets") }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: e.onClose, children: /* @__PURE__ */ o(je, { size: 20 }) })
    ] }),
    e.kind === "clock" ? /* @__PURE__ */ o(ne, { children: [
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.look") }),
      /* @__PURE__ */ o("div", { class: "lock-fonts", children: I0.map((s) => /* @__PURE__ */ o("button", { class: "lock-font" + (t.font === s ? " on" : ""), style: { fontWeight: p1[s] }, onClick: () => me({ font: s }), children: "12" }, s)) }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.size") }),
        /* @__PURE__ */ o("div", { class: "seg", children: D0.map((s) => /* @__PURE__ */ o("button", { class: t.size === s ? "active" : "", onClick: () => me({ size: s }), children: d("lock.size." + s) }, s)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.color") }),
      /* @__PURE__ */ o(
        hi,
        {
          value: t.color,
          custom: t.customColor,
          onPick: (s) => me({ color: s }),
          onCustom: (s) => me({ color: "custom", customColor: s })
        }
      ),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.place") }),
      a ? /* @__PURE__ */ o(ui, { kind: "clock", grid: a, orient: n }) : /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.layout") }),
        /* @__PURE__ */ o("select", { value: t.layout, onChange: (s) => me({ layout: s.currentTarget.value }), children: P0.map((s) => /* @__PURE__ */ o("option", { value: s, children: d("lock.layout." + s) }, s)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.show") }),
      /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: t.date, onChange: (s) => me({ date: s.currentTarget.checked }) }),
        d("lock.date")
      ] }),
      t.date && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.date_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: B0.map((s) => /* @__PURE__ */ o("button", { class: t.datePos === s ? "active" : "", onClick: () => me({ datePos: s }), children: d("lock.date_pos." + s) }, s)) })
      ] }),
      e.hasWeather && /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: t.weather, onChange: (s) => me({ weather: s.currentTarget.checked }) }),
        d("lock.weather")
      ] })
    ] }) : /* @__PURE__ */ o(ne, { children: [
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.color") }),
      /* @__PURE__ */ o(
        hi,
        {
          value: t.widgetsColor,
          custom: t.widgetsCustomColor,
          same: !0,
          onPick: (s) => me({ widgetsColor: s }),
          onCustom: (s) => me({ widgetsColor: "custom", widgetsCustomColor: s })
        }
      ),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.place") }),
      a ? /* @__PURE__ */ o(ui, { kind: "widgets", grid: a, orient: n }) : /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.widgets_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: T0.map((s) => /* @__PURE__ */ o("button", { class: t.widgetsPos === s ? "active" : "", onClick: () => me({ widgetsPos: s }), children: d("lock.widgets_pos." + s) }, s)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.look") }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.chip_style") }),
        /* @__PURE__ */ o("select", { value: t.chipStyle, onChange: (s) => me({ chipStyle: s.currentTarget.value }), children: F0.map((s) => /* @__PURE__ */ o("option", { value: s, children: d("lock.chip_style." + s) }, s)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.which") }),
      !e.widgets.length && /* @__PURE__ */ o("p", { class: "hint", children: d("lock.no_widgets") }),
      e.widgets.map((s, l) => /* @__PURE__ */ o("div", { class: "lock-widget", children: [
        /* @__PURE__ */ o("label", { class: "check", children: [
          /* @__PURE__ */ o("input", { type: "checkbox", checked: t.hidden.indexOf(s.id) === -1, onChange: (f) => c(s.id, f.currentTarget.checked) }),
          /* @__PURE__ */ o(Ce, { name: s.icon, size: 16 }),
          /* @__PURE__ */ o("span", { children: s.title || Pt(s.type) })
        ] }),
        /* @__PURE__ */ o("button", { class: "icon-btn", disabled: l === 0, onClick: () => i(l, -1), children: /* @__PURE__ */ o(U1, { size: 18 }) }),
        /* @__PURE__ */ o("button", { class: "icon-btn", disabled: l === e.widgets.length - 1, onClick: () => i(l, 1), children: /* @__PURE__ */ o(j1, { size: 18 }) })
      ] }, s.id))
    ] })
  ] });
}
function va(e) {
  const [t, n] = _({ w: 0, h: 0 });
  return Ve(() => {
    const a = e.current;
    if (!a) return;
    const i = () => {
      const s = a.clientWidth, l = a.clientHeight;
      n((f) => f.w === s && f.h === l ? f : { w: s, h: l });
    };
    i();
    const c = window.ResizeObserver;
    if (c) {
      const s = new c(i);
      return s.observe(a), () => s.disconnect();
    }
    return window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, []), t;
}
const Te = 12, qe = 16, j0 = 700, ft = 6, q0 = 350, Q0 = 44, W0 = 84;
function mi(e) {
  const t = "touches" in e ? e.touches[0] || e.changedTouches[0] : e;
  return { x: t.clientX, y: t.clientY };
}
function U0({ editing: e, paused: t, insetTop: n = 0, onCamera: a, onEdit: i }) {
  const c = ae(), s = Re(), l = X(null), f = va(l), [h, u] = _(null), p = X(null), r = s.state.layout.cards, m = f.w - qe * 2, w = (xr() ? window.innerHeight : f.h) - qe * 2 - n, b = f.w > 0 && m < j0, z = b ? ut : it, v = b ? M2(r) : r, y = b ? r.filter((T) => T.m && T.m.hide) : [], N = (m - Te * (z - 1)) / z, M = N + Te, D = Math.max(1, Math.floor((w + Te) / M)), g = Math.max(0, (w - (D * M - Te)) / 2), E = (T) => ({ left: T.x * M, top: T.y * M, width: T.w * M - Te, height: T.h * M - Te }), x = (T, V, J) => {
    if (!e || "button" in T && T.button !== 0) return;
    T.stopPropagation();
    const S = "touches" in T && J === "move", W = mi(T), te = { id: V.id, mode: J, x0: W.x, y0: W.y, orig: V, dx: 0, dy: 0, active: J === "resize", preview: v };
    p.current = te;
    let le = !S, _e = 0, pe = !1;
    S ? _e = window.setTimeout(() => {
      const de = p.current;
      if (!de) return;
      le = !0;
      const K = { ...de, active: !0 };
      p.current = K, u(K);
      try {
        navigator.vibrate && navigator.vibrate(15);
      } catch {
      }
    }, q0) : u(te);
    const se = (de) => {
      const K = p.current;
      if (!K) return;
      const ye = mi(de), Ae = ye.x - K.x0, ze = ye.y - K.y0;
      if (!le) {
        (Math.abs(Ae) > ft || Math.abs(ze) > ft) && (pe = !0, fe());
        return;
      }
      const O = K.active || Math.abs(Ae) > ft || Math.abs(ze) > ft;
      if (!O) return;
      de.cancelable && de.preventDefault();
      const F = K.orig, Y = Ot(K.mode === "move" ? { ...F, x: F.x + Ae / M, y: F.y + ze / M } : { ...F, w: F.w + Ae / M, h: F.h + ze / M }, z), k = K.mode === "resize" ? k2(v, Y) : n1(v, Y), G = { ...K, dx: Ae, dy: ze, active: O, preview: k };
      p.current = G, u(G);
    }, fe = (de) => {
      clearTimeout(_e), de && de.type === "touchcancel" && (pe = !0);
      const K = p.current;
      p.current = null, u(null), window.removeEventListener("mousemove", se), window.removeEventListener("mouseup", fe), document.removeEventListener("touchmove", se, { passive: !1 }), document.removeEventListener("touchend", fe), document.removeEventListener("touchcancel", fe), K && K.active ? C(K.preview) : K && K.mode === "move" && !pe && Math.abs(K.dx) < ft && Math.abs(K.dy) < ft && i(V);
    };
    window.addEventListener("mousemove", se), window.addEventListener("mouseup", fe), document.addEventListener("touchmove", se, { passive: !1 }), document.addEventListener("touchend", fe), document.addEventListener("touchcancel", fe);
  }, C = (T) => s.saveLayout({ ...s.state.layout, cards: b ? no(r, T) : T }), L = h && h.active ? h.preview : v, j = (T) => {
    if (!b) {
      s.saveLayout({ ...s.state.layout, cards: r.filter((q) => q.id !== T.id) });
      return;
    }
    const V = v.filter((q) => q.id !== T.id), J = no(r, V).map((q) => q.id === T.id ? { ...q, m: { x: 0, y: 0, w: ut, h: 3, hide: !0 } } : q);
    s.saveLayout({ ...s.state.layout, cards: J });
  }, Q = (T) => {
    const J = no(r, v).map((q) => q.id === T.id ? { ...q, m: { x: 0, y: _n(v), w: ut, h: 3 } } : q);
    s.saveLayout({ ...s.state.layout, cards: J });
  }, U = b && !e, Z = _n(L), ee = e ? Math.max(D, Z) : Z, B = ee <= D ? g : 0;
  return /* @__PURE__ */ o("main", { class: "grid" + (e ? " editing" : "") + (h && h.active ? " dragging-card" : "") + (b ? " narrow" : ""), ref: l, children: [
    e && b && /* @__PURE__ */ o("div", { class: "grid-note", children: [
      /* @__PURE__ */ o("span", { children: d("grid.narrow_note") }),
      y.length > 0 && /* @__PURE__ */ o("div", { class: "hidden-cards", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: [
          /* @__PURE__ */ o(rs, { size: 14 }),
          d("grid.hidden_on_phone")
        ] }),
        y.map((T) => /* @__PURE__ */ o("button", { class: "chip", onClick: () => Q(T), children: [
          /* @__PURE__ */ o(lt, { size: 14 }),
          /* @__PURE__ */ o("span", { children: pt(c, T) })
        ] }, T.id))
      ] })
    ] }),
    U ? /* @__PURE__ */ o("div", { class: "grid-inner grid-flow", style: { margin: qe + n + "px " + qe + "px " + qe + "px", gridTemplateColumns: "repeat(" + z + ", minmax(0, 1fr))", gridGap: Te + "px", gap: Te + "px" }, children: f.w > 0 && L.slice().sort((T, V) => T.y - V.y || T.x - V.x).map((T) => /* @__PURE__ */ o(
      pi,
      {
        card: T,
        style: E(T),
        flow: !0,
        editing: !1,
        onCamera: a,
        onEdit: i,
        onRemove: j,
        paused: t,
        narrow: b,
        ha: c
      },
      T.id
    )) }) : /* @__PURE__ */ o("div", { class: "grid-inner", style: { height: Math.max(0, ee * M - Te), margin: qe + B + n + "px " + qe + "px " + qe + "px" }, children: [
      e && f.w > 0 && /* @__PURE__ */ o(Y0, { rows: ee, cols: z, cell: N, step: M }),
      f.w > 0 && L.map((T) => {
        const V = !!h && h.active && h.id === T.id;
        let J = E(T);
        if (V && h) {
          const q = E(h.orig);
          J = h.mode === "move" ? { ...q, left: q.left + h.dx, top: q.top + h.dy } : { ...q, width: Math.max(N * 2, q.width + h.dx), height: Math.max(N * 2, q.height + h.dy) };
        }
        return /* @__PURE__ */ o("div", { children: [
          V && /* @__PURE__ */ o("div", { class: "drop-slot", style: E(T) }),
          /* @__PURE__ */ o(
            pi,
            {
              card: T,
              style: J,
              editing: e,
              dragged: V,
              onCamera: a,
              onEdit: i,
              onRemove: j,
              paused: t,
              narrow: b,
              onStart: x,
              ha: c
            }
          )
        ] }, T.id);
      })
    ] })
  ] });
}
function Y0({ rows: e, cols: t, cell: n, step: a }) {
  const i = [];
  for (let c = 0; c < e; c++)
    for (let s = 0; s < t; s++)
      i.push(/* @__PURE__ */ o("div", { class: "grid-dot", style: { left: s * a, top: c * a, width: n, height: n } }, c + ":" + s));
  return /* @__PURE__ */ o("div", { class: "grid-dots", children: i });
}
function pi({ card: e, style: t, editing: n, dragged: a, ha: i, onCamera: c, onEdit: s, onRemove: l, paused: f, narrow: h, flow: u, onStart: p }) {
  const r = e.color ? " tint-" + e.color : "";
  return /* @__PURE__ */ o(
    "div",
    {
      class: "cell" + r + (a ? " dragged" : ""),
      style: u ? { gridColumn: "span " + e.w, minHeight: t.height } : t,
      onMouseDown: p ? (m) => p(m, e, "move") : void 0,
      onTouchStart: p ? (m) => p(m, e, "move") : void 0,
      children: [
        /* @__PURE__ */ o(z0, { title: pt(i, e), icon: e.icon, aside: !n && /* @__PURE__ */ o(Dc, { card: e }), class: "card-" + e.type, children: /* @__PURE__ */ o("div", { class: "panel-body", children: /* @__PURE__ */ o(Nc, { card: e, paused: f, onCamera: c, size: { w: t.width - Q0, h: t.height - W0 } }) }) }),
        n && /* @__PURE__ */ o(ne, { children: [
          /* @__PURE__ */ o("button", { class: "badge-btn badge-del", onMouseDown: en, onTouchStart: en, onClick: () => l(e), title: d(h ? "grid.hide_on_phone" : "common.delete"), children: h ? /* @__PURE__ */ o(rs, { size: 14 }) : /* @__PURE__ */ o(je, { size: 16 }) }),
          /* @__PURE__ */ o("button", { class: "badge-btn badge-edit", onMouseDown: en, onTouchStart: en, onClick: () => s(e), title: d("common.edit"), children: /* @__PURE__ */ o(Os, { size: 14 }) }),
          p && /* @__PURE__ */ o(
            "div",
            {
              class: "resize-handle",
              onMouseDown: (m) => p(m, e, "resize"),
              onTouchStart: (m) => p(m, e, "resize")
            }
          ),
          /* @__PURE__ */ o("span", { class: "size-tag", children: [
            e.w,
            "×",
            e.h
          ] })
        ] })
      ]
    }
  );
}
function en(e) {
  e.stopPropagation();
}
const Vo = "photoframe.kiosk", hn = [];
function Go() {
  return Vo + ":" + (location.pathname.split("/")[1] || "lovelace");
}
function Fc() {
  try {
    const e = localStorage.getItem(Vo);
    return e !== null && (localStorage.setItem(Go(), e), localStorage.removeItem(Vo)), localStorage.getItem(Go()) || "";
  } catch {
    return "";
  }
}
function V0(e) {
  try {
    localStorage.setItem(Go(), e);
  } catch {
  }
  hn.forEach((t) => t());
}
function G0(e) {
  return hn.push(e), () => {
    hn.splice(hn.indexOf(e), 1);
  };
}
function X0(e) {
  const t = new URLSearchParams(location.search);
  if (t.has("kiosk")) return t.get("kiosk") !== "0" && t.get("kiosk") !== "false";
  const n = Fc();
  return n ? n === "on" : e;
}
function wt(e) {
  return e && e.shadowRoot ? e.shadowRoot : null;
}
const Ai = "photoframe-kiosk";
let It = !1;
const un = [];
function Z0(e) {
  return un.push(e), () => {
    un.splice(un.indexOf(e), 1);
  };
}
function gi(e) {
  e !== It && (It = e, un.forEach((t) => t()));
}
function vo(e, t, n) {
  if (!e || e.getElementById(Ai)) return;
  const a = document.createElement("style");
  a.id = Ai, a.textContent = t, e.appendChild(a), n.push(() => a.remove());
}
function $0() {
  const [e, t] = _(It);
  return H(() => {
    const n = Z0(() => t(It));
    return t(It), n;
  }, []), e;
}
function J0() {
  history.pushState(null, "", "/"), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function K0() {
  const e = wt(document.querySelector("home-assistant"))?.querySelector("home-assistant-main"), t = wt(e);
  if (!t) return null;
  const n = t.querySelector("ha-panel-lovelace"), a = wt(n)?.querySelector("hui-root"), i = wt(a);
  if (!a || !i) return null;
  const c = [], s = (h, u, p) => {
    const r = h.style.getPropertyValue(u);
    h.style.setProperty(u, p), c.push(() => r ? h.style.setProperty(u, r) : h.style.removeProperty(u));
  }, l = t.querySelector("ha-drawer");
  [e, l].forEach((h) => {
    h && (s(h, "--ha-sidebar-width", "0px"), s(h, "--mdc-drawer-width", "0px"));
  }), vo(t, ":host{--ha-sidebar-width:0px!important;--mdc-drawer-width:0px!important}ha-sidebar{display:none!important}", c), vo(wt(l), ".sidebar-shell,aside,.mdc-drawer{display:none!important;width:0!important}.app-content,.mdc-drawer-app-content{margin-left:0!important;margin-right:0!important;margin-inline-start:0!important;padding-left:0!important;padding-inline-start:0!important;width:100%!important}", c);
  const f = t.querySelector("ha-sidebar");
  if (f) {
    const h = f.style.display;
    f.style.display = "none", c.push(() => {
      f.style.display = h;
    });
  }
  return s(a, "--header-height", "0px"), vo(i, ".header,app-header,.toolbar{display:none!important}#view{padding-top:0!important;min-height:100vh}", c), gi(!0), () => {
    c.splice(0).reverse().forEach((h) => h()), gi(!1);
  };
}
const bi = (e) => d("status." + e);
function e4() {
  const e = yc();
  return /* @__PURE__ */ o(ne, { children: [
    /* @__PURE__ */ o("span", { class: "bar-clock", children: wc(e) }),
    /* @__PURE__ */ o("span", { class: "bar-date", children: kc(e) })
  ] });
}
function t4(e) {
  const { active: t, screen: n, screens: a } = re.state, i = a[t] || [], [c, s] = _("");
  return H(() => s(""), [n, e.editing]), i.length < 2 && !e.editing ? null : /* @__PURE__ */ o("div", { class: "screen-tabs", children: [
    i.map((l, f) => e.editing && l.id === n ? /* @__PURE__ */ o("span", { class: "screen-tab on editing", children: [
      f > 0 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => re.moveScreen(l.id, -1), children: /* @__PURE__ */ o(ua, { size: 14 }) }),
      /* @__PURE__ */ o(
        "input",
        {
          value: l.name,
          placeholder: Ct(l, f),
          size: Math.max(6, (l.name || Ct(l, f)).length),
          onChange: (h) => re.renameScreen(l.id, h.currentTarget.value.trim())
        }
      ),
      f < i.length - 1 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => re.moveScreen(l.id, 1), children: /* @__PURE__ */ o(Un, { size: 14 }) }),
      i.length > 1 && /* @__PURE__ */ o(
        "button",
        {
          class: "screen-del" + (c === l.id ? " sure" : ""),
          title: d("screen.delete"),
          onClick: () => c === l.id || !l.cards.length ? re.removeScreen(l.id) : s(l.id),
          children: c === l.id ? /* @__PURE__ */ o("span", { children: d("screen.delete_sure") }) : /* @__PURE__ */ o(Wt, { size: 14 })
        }
      )
    ] }, l.id) : /* @__PURE__ */ o("button", { class: "screen-tab" + (l.id === n ? " on" : ""), onClick: () => re.setActive(t, l.id), children: Ct(l, f) }, l.id)),
    e.editing && /* @__PURE__ */ o("button", { class: "screen-tab add", onClick: () => re.addScreen(""), children: [
      /* @__PURE__ */ o(lt, { size: 14 }),
      /* @__PURE__ */ o("span", { children: d("screen.add") })
    ] })
  ] });
}
function n4(e) {
  const t = ae(), n = e.homes.length > 1, a = $0();
  e.homes.reduce((r, m) => r + (re.state.screens[m.id] || []).length, 0);
  const i = e.homes.filter((r) => r.id === e.active)[0];
  H(() => {
    !e.visible && e.editing && e.onEditing(!1);
  }, [e.visible]);
  const c = va(e.innerRef), s = c.w > 0 && c.w < 760, [l, f] = _(!1);
  H(() => {
    (!e.visible || !s) && f(!1);
  }, [e.visible, s]), H(() => {
    if (!l) return;
    const r = () => f(!1), m = window.setTimeout(() => document.addEventListener("click", r), 0);
    return () => {
      clearTimeout(m), document.removeEventListener("click", r);
    };
  }, [l]);
  const h = !re.card || re.card.canEdit, u = Tc(e.visible), p = /* @__PURE__ */ o(ne, { children: [
    h && /* @__PURE__ */ o("button", { class: "round", onClick: () => e.onEditing(!0), title: d("controls.customize"), children: /* @__PURE__ */ o(Os, { size: 18 }) }),
    /* @__PURE__ */ o("button", { class: "round", onClick: e.onSettings, title: d("controls.settings"), children: /* @__PURE__ */ o(hl, { size: 20 }) }),
    /* @__PURE__ */ o("button", { class: "round accent", onClick: e.onPhotos, title: d("controls.to_photos"), children: /* @__PURE__ */ o(ma, { size: 20 }) })
  ] });
  return /* @__PURE__ */ o("div", { ref: e.innerRef, class: "controls" + (e.visible ? " visible" : ""), children: u && /* @__PURE__ */ o(ne, { children: [
    /* @__PURE__ */ o("div", { class: "controls-head", children: [
      /* @__PURE__ */ o("header", { class: "bar" + (s ? " bar-narrow" : "") + (l ? " menu-open" : "") + (e.editing ? " bar-editing" : ""), children: [
        /* @__PURE__ */ o("div", { class: "bar-time" + (a ? " clock-link" : ""), onClick: a ? J0 : void 0, children: /* @__PURE__ */ o(e4, {}) }),
        n && /* @__PURE__ */ o("button", { class: "home-switch", onClick: () => e.onSwitchHome(1), title: d("controls.next_home"), children: [
          /* @__PURE__ */ o("span", { class: "home-name", children: i ? i.name : "" }),
          /* @__PURE__ */ o("span", { class: "home-dots", children: e.homes.map((r) => /* @__PURE__ */ o("i", { class: r.id === e.active ? "on" : "" }, r.id)) })
        ] }),
        /* @__PURE__ */ o("div", { class: "bar-actions", children: e.editing ? /* @__PURE__ */ o(ne, { children: [
          /* @__PURE__ */ o("button", { class: "round", onClick: e.onAddCard, title: d("controls.add_card"), children: /* @__PURE__ */ o(lt, { size: 20 }) }),
          /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: () => e.onEditing(!1), children: [
            /* @__PURE__ */ o(Rr, { size: 18 }),
            /* @__PURE__ */ o("span", { children: d("common.done") })
          ] })
        ] }) : s ? /* @__PURE__ */ o("div", { class: "burger", children: [
          /* @__PURE__ */ o("div", { class: "burger-items", children: p }),
          /* @__PURE__ */ o("button", { class: "round burger-btn conn-" + t.status, onClick: () => f(!l), title: bi(t.status), children: [
            l ? /* @__PURE__ */ o(je, { size: 20 }) : /* @__PURE__ */ o(sl, { size: 20 }),
            /* @__PURE__ */ o("i", { class: "burger-dot" })
          ] })
        ] }) : /* @__PURE__ */ o(ne, { children: [
          /* @__PURE__ */ o("span", { class: "conn conn-" + t.status, children: [
            /* @__PURE__ */ o("i", {}),
            bi(t.status)
          ] }),
          p
        ] }) })
      ] }),
      /* @__PURE__ */ o(t4, { editing: e.editing })
    ] }),
    /* @__PURE__ */ o("div", { class: "home-pane" + (e.slide ? " slide-" + e.slide : ""), children: /* @__PURE__ */ o(U0, { editing: e.editing, paused: e.paused, onCamera: e.onCamera, onEdit: e.onEditCard }) }, e.active + "/" + re.state.screen)
  ] }) });
}
const o4 = 'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea, .tappable, [tabindex]:not([tabindex="-1"])';
function a4(e) {
  return e === "ArrowLeft" || e === "Left" ? "left" : e === "ArrowRight" || e === "Right" ? "right" : e === "ArrowUp" || e === "Up" ? "up" : e === "ArrowDown" || e === "Down" ? "down" : null;
}
function Rc(e, t) {
  const n = e.key || "";
  return n === "Escape" || n === "Esc" || n === "GoBack" || n === "BrowserBack" || e.keyCode === 10009 || e.keyCode === 461 ? !0 : n === "Backspace" && !t;
}
function mn(e) {
  const t = document.documentElement;
  e ? t.classList.add("kbd-nav") : t.classList.remove("kbd-nav");
}
function i4(e) {
  const t = e.getBoundingClientRect();
  if (t.width < 2 || t.height < 2) return !1;
  const n = window.getComputedStyle(e);
  return n.visibility !== "hidden" && n.display !== "none" && n.pointerEvents !== "none";
}
function jc(e) {
  const t = e.querySelectorAll(o4), n = [];
  for (let a = 0; a < t.length; a++) {
    const i = t[a];
    i.parentElement && i.parentElement.closest && i.parentElement.closest("button") || i4(i) && n.push(i);
  }
  return n;
}
function Xo(e) {
  !e.hasAttribute("tabindex") && !/^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/.test(e.tagName) && (e.tabIndex = 0);
  try {
    e.focus({ preventScroll: !0 });
  } catch {
    e.focus();
  }
  const t = e.getBoundingClientRect();
  (t.top < 0 || t.bottom > window.innerHeight || t.left < 0 || t.right > window.innerWidth) && e.scrollIntoView({ block: "center", inline: "nearest" });
}
function s4(e, t) {
  const n = jc(e);
  if (!n.length) return !1;
  const a = document.activeElement;
  if (!a || !e.contains(a) || n.indexOf(a) === -1)
    return Xo(n[0]), !0;
  const i = a.getBoundingClientRect(), c = i.left + i.width / 2, s = i.top + i.height / 2;
  let l = null, f = 1 / 0;
  for (let h = 0; h < n.length; h++) {
    const u = n[h];
    if (u === a) continue;
    const p = u.getBoundingClientRect(), r = p.left + p.width / 2, m = p.top + p.height / 2;
    let A, w;
    if (t === "right") {
      if (A = p.left - i.right, w = Math.abs(m - s), r <= c + 1) continue;
    } else if (t === "left") {
      if (A = i.left - p.right, w = Math.abs(m - s), r >= c - 1) continue;
    } else if (t === "down") {
      if (A = p.top - i.bottom, w = Math.abs(r - c), m <= s + 1) continue;
    } else if (A = i.top - p.bottom, w = Math.abs(r - c), m >= s - 1) continue;
    const b = Math.max(A, 0) + w * 2;
    b < f && (f = b, l = u);
  }
  return l ? (Xo(l), !0) : !1;
}
function c4(e) {
  const t = document.activeElement;
  return !t || !e.contains(t) || /^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/.test(t.tagName) ? !1 : (t.click(), !0);
}
function r4(e) {
  const t = jc(e);
  if (!t.length) return;
  const n = t.filter((a) => !(a.closest && a.closest(".panel-head, .modal-head")));
  Xo(n.length ? n[0] : t[0]);
}
const l4 = 8e3, d4 = 1e3, f4 = /^(Arrow(Left|Right|Up|Down)|Left|Right|Up|Down|Enter| |Spacebar)$/;
function h4(e) {
  const [t, n] = _(!1), [a, i] = _(1), c = X(!1), s = X(1), l = (y) => {
    c.current = y, n(y);
  }, f = (y) => {
    s.current = y, i(y);
  }, h = X([]), u = X(0), p = X(e);
  p.current = e;
  const r = Dt(ca), m = Re(), A = Qn(), w = () => {
    const y = [{ kind: "prev" }, { kind: "next" }];
    return ba(r, m, A).ordered.forEach((N) => y.push({ kind: "card", card: N })), y.push({ kind: "home" }), y;
  }, b = () => {
    clearTimeout(u.current), l(!1);
  }, z = () => {
    clearTimeout(u.current), u.current = window.setTimeout(() => l(!1), l4);
  }, v = X(!1);
  return H(() => {
    if (!e.enabled) {
      b();
      return;
    }
    v.current && document.documentElement.classList.contains("kbd-nav") && (l(!0), z()), v.current = !1;
  }, [e.enabled]), H(() => () => clearTimeout(u.current), []), H(() => {
    if (!e.enabled) return;
    const y = (M) => {
      const D = M.target;
      if (D && /^(INPUT|TEXTAREA|SELECT)$/.test(D.tagName)) return;
      const g = M.key || "", E = p.current, x = w();
      if (h.current = x, !c.current) {
        if (!f4.test(g)) return;
        M.preventDefault(), mn(!0);
        const L = g === "ArrowUp" || g === "Up", j = g === "ArrowDown" || g === "Down";
        f(Math.min(x.length - 1, g === "ArrowLeft" || g === "Left" ? 0 : j ? 2 : L ? d4 : 1)), l(!0), z();
        return;
      }
      const C = Math.min(s.current, x.length - 1);
      if (g === "ArrowLeft" || g === "Left") f(Math.max(0, C - 1));
      else if (g === "ArrowRight" || g === "Right") f(Math.min(x.length - 1, C + 1));
      else if (g === "ArrowUp" || g === "Up" || g === "ArrowDown" || g === "Down" || Rc(M, !1)) b();
      else if (g === "Enter" || g === " " || g === "Spacebar") {
        const L = x[C];
        if (!L) return;
        L.kind === "prev" ? E.onStep(-1) : L.kind === "next" ? E.onStep(1) : L.kind === "home" ? (v.current = !0, b(), E.onHome()) : L.kind === "card" && (v.current = !0, b(), E.onSheet(L.card));
      } else return;
      M.preventDefault(), z();
    }, N = () => {
      v.current = !1, b();
    };
    return document.addEventListener("keydown", y), document.addEventListener("touchstart", N, !0), document.addEventListener("mousedown", N, !0), () => {
      document.removeEventListener("keydown", y), document.removeEventListener("touchstart", N, !0), document.removeEventListener("mousedown", N, !0);
    };
  }, [e.enabled, r, m, A]), /* @__PURE__ */ o("div", { class: "tv-bar" + (t ? " visible" : ""), "aria-hidden": !t, children: t && /* @__PURE__ */ o(u4, { focus: a, items: h }) });
}
function u4({ focus: e, items: t }) {
  const n = ae(), a = Re(), i = Qn(), c = ba(n, a, i).ordered, s = [{ kind: "prev" }, { kind: "next" }];
  c.forEach((u) => s.push({ kind: "card", card: u })), s.push({ kind: "home" }), t.current = s;
  const l = Math.min(e, s.length - 1), f = X(null);
  H(() => {
    const u = f.current, p = u && u.querySelector('[data-i="' + l + '"]');
    if (!u || !p) return;
    const r = p.offsetLeft - u.clientWidth / 2 + p.offsetWidth / 2;
    u.scrollLeft = Math.max(0, r);
  }, [l, s.length]);
  const h = (u, p, r, m, A, w) => /* @__PURE__ */ o("div", { "data-i": u, class: "tv-tile" + (u === l ? " focus" : "") + (A ? " on" : "") + (w ? " alert" : ""), children: [
    p,
    u === l && /* @__PURE__ */ o("div", { class: "tv-label", children: [
      r,
      m && m !== r && /* @__PURE__ */ o("small", { children: m })
    ] })
  ] }, u);
  return /* @__PURE__ */ o("div", { class: "tv-row", ref: f, children: [
    h(0, /* @__PURE__ */ o(ua, { size: 30, strokeWidth: 1.8 }), d("tv.prev")),
    h(1, /* @__PURE__ */ o(Un, { size: 30, strokeWidth: 1.8 }), d("tv.next")),
    /* @__PURE__ */ o("span", { class: "tv-sep" }),
    c.map((u, p) => {
      const r = Vn(n, u);
      return h(p + 2, /* @__PURE__ */ o(Ce, { name: u.icon, size: 28 }), pt(n, u), r.text, r.lit, r.alert);
    }),
    c.length > 0 && /* @__PURE__ */ o("span", { class: "tv-sep" }),
    h(s.length - 1, /* @__PURE__ */ o(Ms, { size: 28, strokeWidth: 1.8 }), d("tv.home"), d("tv.home_hint"))
  ] });
}
function m4(e, t) {
  return e.y - t.y || e.x - t.x;
}
function p4(e) {
  const t = ae(), n = Re(), { active: a, screen: i, screens: c } = n.state, s = c[a] || [], l = n.state.layout.cards.filter((r) => !(r.m && r.m.hide)).slice().sort(m4), f = X(""), [h, u] = _(!1);
  Ve(() => {
    const r = document.querySelector(".ambient-clock");
    if (!r) return;
    const m = r.getBoundingClientRect();
    u(m.height > 0 && m.top + m.height / 2 > window.innerHeight / 2);
  }, []), Ve(() => {
    if (e.covered) return;
    const r = e.innerRef.current;
    if (!r) return;
    const m = f.current && r.querySelector('[data-card="' + f.current + '"]') || r.querySelector(".atv-tile") || r.querySelector(".atv-tab"), A = document.activeElement;
    m && !(A && r.contains(A) && A.classList.contains("atv-tab")) && m.focus();
  }, [e.covered, i, a]);
  const p = (r) => {
    f.current = r.id, e.onOpen(r);
  };
  return /* @__PURE__ */ o("div", { ref: e.innerRef, class: "atv" + (h ? " atv-top" : ""), children: [
    s.length > 1 && /* @__PURE__ */ o("div", { class: "atv-tabs", children: s.map((r, m) => (
      // Фокус на вкладке — сразу её экран (как в Apple TV), без OK.
      /* @__PURE__ */ o(
        "button",
        {
          class: "atv-tab" + (r.id === i ? " on" : ""),
          onFocus: () => {
            r.id !== i && (f.current = "", n.setActive(a, r.id));
          },
          onClick: () => n.setActive(a, r.id),
          children: Ct(r, m)
        },
        r.id
      )
    )) }),
    /* @__PURE__ */ o("div", { class: "atv-grid", children: [
      /* @__PURE__ */ o("button", { class: "atv-tile atv-photos", onClick: e.onPhotos, children: [
        /* @__PURE__ */ o("span", { class: "atv-face", children: /* @__PURE__ */ o(ma, { size: 44 }) }),
        /* @__PURE__ */ o("span", { class: "atv-name", children: d("tv.photos") })
      ] }),
      l.map((r) => {
        const m = Vn(t, r);
        return /* @__PURE__ */ o(
          "button",
          {
            "data-card": r.id,
            class: "atv-tile" + (m.lit ? " lit" : "") + (m.alert ? " alert" : ""),
            onClick: () => p(r),
            children: [
              /* @__PURE__ */ o("span", { class: "atv-face", children: /* @__PURE__ */ o(A4, { card: r }) }),
              /* @__PURE__ */ o("span", { class: "atv-name", children: [
                pt(t, r),
                m.text && m.text !== pt(t, r) && /* @__PURE__ */ o("small", { children: m.text })
              ] })
            ]
          },
          r.id
        );
      })
    ] })
  ] });
}
function A4({ card: e }) {
  const t = ae(), n = e.items[0];
  if (e.type === "weather" && n) {
    const a = t.states[n.entity];
    if (a && a.state !== "unavailable") {
      const i = et(a.state), c = a.attributes.temperature;
      return /* @__PURE__ */ o("span", { class: "atv-weather", children: [
        /* @__PURE__ */ o(i.Icon, { size: 40, strokeWidth: 1.6 }),
        c != null && /* @__PURE__ */ o("b", { children: [
          Math.round(Number(c)),
          "°"
        ] })
      ] });
    }
  }
  if (e.type === "cameras" && n) {
    const a = t.cameraSnapshotUrl(n.entity);
    if (a) return /* @__PURE__ */ o("img", { class: "atv-shot", src: a, alt: "" });
  }
  return /* @__PURE__ */ o(Ce, { name: e.icon, size: 44 });
}
const vi = "photoframe.tv", g4 = window.parent === window, xo = /(?:^\?|&)tv=1(?:&|$)/.test(location.search);
let Zo = !1;
if (g4)
  try {
    xo && localStorage.setItem(vi, "1"), Zo = xo || localStorage.getItem(vi) === "1";
  } catch {
    Zo = xo;
  }
const yo = Zo;
function wo() {
  try {
    if (history.length > 1) {
      history.go(1 - history.length);
      return;
    }
  } catch {
  }
  const e = window.tizen;
  try {
    if (e && e.application) {
      e.application.getCurrentApplication().exit();
      return;
    }
  } catch {
  }
  try {
    window.close();
  } catch {
  }
}
function b4(e) {
  const t = { name: "", path: "", count: 0, total: 0, children: [] }, n = { "": t };
  return e.forEach((a) => {
    if (!a.path) {
      t.count = a.count, t.total = a.total;
      return;
    }
    const i = a.path.split("/").filter(Boolean);
    let c = t, s = "";
    i.forEach((l, f) => {
      s = s ? s + "/" + l : l;
      let h = n[s];
      h || (h = { name: l, path: s, count: 0, total: 0, children: [] }, n[s] = h, c.children.push(h)), f === i.length - 1 && (h.count = a.count, h.total = a.total), c = h;
    });
  }), t;
}
function v4(e) {
  const [t, n] = _(null), [a, i] = _(""), [c, s] = _(re.card && re.card.album && re.card.album !== "all" ? re.card.album : ""), [l, f] = _({ "": !0 });
  H(() => {
    const p = re.card;
    if (!p) {
      n({ name: "", path: "", count: 0, total: 0, children: [] });
      return;
    }
    p.folderTree().then((r) => {
      n(b4(r));
      const m = { "": !0 };
      let A = "";
      String(p.album || "").split("/").filter(Boolean).forEach((w) => {
        A = A ? A + "/" + w : w, m[A] = !0;
      }), f(m);
    }, (r) => {
      n({ name: "", path: "", count: 0, total: 0, children: [] }), i(r.message || String(r));
    });
  }, []);
  const h = (p) => f({ ...l, [p]: !l[p] }), u = (p, r) => {
    const m = p.children.length > 0, A = p.path === "" || !!l[p.path];
    return /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("div", { class: "folder-row", style: { paddingLeft: r * 16 + "px" }, children: [
        m ? /* @__PURE__ */ o("button", { class: "folder-toggle", onClick: () => h(p.path), "aria-label": p.name || d("photos.folder_all"), children: A ? /* @__PURE__ */ o(j1, { size: 14 }) : /* @__PURE__ */ o(Un, { size: 14 }) }) : /* @__PURE__ */ o("span", { class: "folder-toggle" }),
        /* @__PURE__ */ o("button", { class: "folder-name" + (c === p.path ? " active" : ""), onClick: () => s(p.path), children: [
          m && A ? /* @__PURE__ */ o(Xr, { size: 16 }) : /* @__PURE__ */ o(ps, { size: 16 }),
          /* @__PURE__ */ o("span", { children: p.path ? p.name : d("photos.folder_all") }),
          /* @__PURE__ */ o("em", { children: d("photos.folder_count", { n: p.total }) })
        ] })
      ] }),
      m && A && p.children.map((w) => u(w, r + 1))
    ] }, p.path || "/");
  };
  return /* @__PURE__ */ o(
    rt,
    {
      title: d("photos.folder_title"),
      onClose: e.onClose,
      wide: !0,
      footer: /* @__PURE__ */ o(ne, { children: [
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: e.onClose, children: d("common.cancel") }),
        /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: () => e.onPick(c || "all"), children: d("common.done") })
      ] }),
      children: [
        /* @__PURE__ */ o("p", { class: "hint", children: d("photos.folder_hint") }),
        !t && /* @__PURE__ */ o("div", { class: "folder-loading", children: [
          /* @__PURE__ */ o("i", { class: "cam-spinner" }),
          /* @__PURE__ */ o("span", { children: d("photos.folder_loading") })
        ] }),
        a && /* @__PURE__ */ o("p", { class: "hint c-red", children: a }),
        t && /* @__PURE__ */ o("div", { class: "folder-tree", children: u(t, 0) }),
        t && !a && !t.children.length && /* @__PURE__ */ o("p", { class: "hint muted", children: d("photos.folder_empty") })
      ]
    }
  );
}
function rt(e) {
  return /* @__PURE__ */ o("div", { class: "modal", onClick: e.onClose, children: /* @__PURE__ */ o("div", { class: "modal-box" + (e.wide ? " modal-wide" : "") + (e.footer ? " has-foot" : ""), onClick: (t) => t.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "modal-head", children: [
      /* @__PURE__ */ o("h2", { children: e.title }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: e.onClose, children: /* @__PURE__ */ o(je, { size: 24 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-body", children: e.children }),
    e.footer && /* @__PURE__ */ o("div", { class: "modal-foot", children: e.footer })
  ] }) });
}
const x4 = [5e3, 1e4, 3e4, 6e4], y4 = [20, 45, 120, 0];
function w4() {
  const e = En(), t = re.state.screens[e] || [], n = In();
  return e + "/" + (t.some((a) => a.id === n) ? n : t[0] ? t[0].id : "");
}
function k4() {
  const e = Re(), [t, n] = _(!1), [a, i] = _(""), c = e.haLink;
  if (c !== "missing" && c !== "error") return null;
  const s = () => {
    n(!0), i(""), e.createHaDashboard().then(() => n(!1), (l) => {
      n(!1), i(l.message || String(l));
    });
  };
  return /* @__PURE__ */ o("div", { class: "ha-storage", children: [
    /* @__PURE__ */ o("p", { class: "hint", children: d("storage." + c) }),
    c === "missing" && (e.haClient && e.haClient.isAdmin ? /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: t, onClick: s, children: /* @__PURE__ */ o("span", { children: d(t ? "common.loading" : "storage.create") }) }) : /* @__PURE__ */ o("p", { class: "hint small", children: d("storage.ask_admin") })),
    a && /* @__PURE__ */ o("div", { class: "c-red small", children: a })
  ] });
}
function _4() {
  const e = Re(), t = e.migration, [n, a] = _(""), [i, c] = _(""), s = () => {
    a("0 / " + t.photos), c(""), e.migratePhotos((l, f) => a(l + " / " + f)).then(
      () => a(""),
      (l) => {
        a(""), c(l.message || String(l));
      }
    );
  };
  return /* @__PURE__ */ o("div", { class: "migration", children: [
    /* @__PURE__ */ o("p", { children: d("migration.text") }),
    /* @__PURE__ */ o("div", { class: "row-btns", children: [
      t.photos > 0 && /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: s, children: /* @__PURE__ */ o("span", { children: n ? d("photos.uploading") + " " + n : d("migration.photos", { n: t.photos }) }) }),
      t.screens && /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: () => e.migrateScreens(), children: /* @__PURE__ */ o("span", { children: d("migration.screens") }) }),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: () => e.dismissMigration(), children: /* @__PURE__ */ o("span", { children: d("migration.skip") }) })
    ] }),
    i && /* @__PURE__ */ o("div", { class: "c-red small", children: i })
  ] });
}
function z4(e) {
  const t = Re(), { settings: n, photos: a } = t.state, i = !!t.card && !t.card.standalone, c = !!t.card || !!Ln(), [s, l] = _("photos"), f = c ? s : "ha", [h, u] = _(n), [p, r] = _(!1), [m, A] = _(""), [w, b] = _(""), z = (k) => u({ ...h, ...k }), [v, y] = _(!1), [N, M] = _(""), [D, g] = _(""), E = (k, G) => {
    const be = Array.prototype.slice.call(k || []).filter((ge) => /^image\//.test(ge.type) || /\.(heic|heif)$/i.test(ge.name));
    G && (G.value = ""), be.length && (r(!0), M(""), g(""), t.addPhotos(be, (ge, we) => g(we > 1 ? ge + " / " + we : ""), S ? te : void 0).then(
      () => r(!1),
      (ge) => {
        r(!1), M(ge.message || String(ge));
      }
    ));
  }, [x, C] = _($i()), [L, j] = _(Fc()), [Q, U] = _(Vi()), [Z, ee] = _(Ec()), [B, T] = _(xn()), [V, J] = _(dr()), q = Ln(), S = !!t.card && t.card.integration, W = t.card && t.card.config.albums || [], [te, le] = _(t.card && t.card.album && t.card.album !== "all" ? t.card.album : ""), [_e, pe] = _(!1), [se, fe] = _("");
  H(() => {
    t.card && t.card.mediaBrowserUrl(te).then(fe, () => fe(""));
  }, [te, !!t.card]);
  const [de, K] = _(Rt()), [ye, Ae] = _(t.state.homes), ze = JSON.stringify(ye) !== JSON.stringify(t.state.homes), O = (k, G) => Ae(ye.map((be) => be.id === k ? { ...be, ...G } : be)), F = () => {
    t.saveSettings(h), ze && t.saveHomes(ye), e.onClose();
  }, Y = () => {
    try {
      const k = JSON.parse(m);
      if (!k || !Array.isArray(k.cards)) throw new Error(d("settings.no_cards_field"));
      t.saveLayout(k), b(""), A("");
    } catch (k) {
      b(d("settings.import_failed", { error: k.message }));
    }
  };
  return /* @__PURE__ */ o(ne, { children: [
    /* @__PURE__ */ o(
      rt,
      {
        title: /* @__PURE__ */ o("span", { class: "modal-title", children: [
          /* @__PURE__ */ o(Jr, { size: 20, class: "accent-text" }),
          /* @__PURE__ */ o("span", { children: d("settings.title") })
        ] }),
        onClose: e.onClose,
        footer: /* @__PURE__ */ o(ne, { children: [
          f === "photos" && !t.card && a.length > 0 ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: () => t.clearPhotos(), children: [
            /* @__PURE__ */ o(Wt, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("photos.delete_all") })
          ] }) : /* @__PURE__ */ o("span", {}),
          /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: F, children: d("common.done") })
        ] }),
        children: [
          c && /* @__PURE__ */ o("div", { class: "tabs", children: [
            /* @__PURE__ */ o("button", { class: f === "photos" ? "active" : "", onClick: () => l("photos"), children: d("settings.tab.photos") }),
            /* @__PURE__ */ o("button", { class: f === "homes" ? "active" : "", onClick: () => l("homes"), children: d("settings.tab.homes") }),
            /* @__PURE__ */ o("button", { class: f === "layout" ? "active" : "", onClick: () => l("layout"), children: d("settings.tab.layout") }),
            !i && /* @__PURE__ */ o("button", { class: f === "ha" ? "active" : "", onClick: () => l("ha"), children: "Home Assistant" })
          ] }),
          f === "photos" && /* @__PURE__ */ o("div", { children: [
            t.migration && /* @__PURE__ */ o(_4, {}),
            /* @__PURE__ */ o(ko, { title: d("settings.section.photos"), children: [
              /* @__PURE__ */ o("p", { class: "hint", children: t.card ? d("photos.card_hint", { folder: t.card.folder }) : d("photos.local_hint") }),
              /* @__PURE__ */ o(
                "label",
                {
                  class: "drop-zone" + (p ? " busy" : "") + (v ? " over" : ""),
                  onDragOver: (k) => {
                    k.preventDefault(), y(!0);
                  },
                  onDragLeave: () => y(!1),
                  onDrop: (k) => {
                    k.preventDefault(), y(!1), p || E(k.dataTransfer && k.dataTransfer.files);
                  },
                  children: [
                    /* @__PURE__ */ o(
                      "input",
                      {
                        type: "file",
                        multiple: !0,
                        accept: "image/*,.heic,.heif",
                        onChange: (k) => E(k.currentTarget.files, k.currentTarget),
                        disabled: p
                      }
                    ),
                    /* @__PURE__ */ o(Wr, { size: 40, class: "muted" }),
                    /* @__PURE__ */ o("p", { class: "drop-title", children: p ? d("photos.uploading") + (D ? " " + D : "") : d("photos.pick") }),
                    /* @__PURE__ */ o("p", { class: "hint small", children: d(S ? "photos.formats_server" : "photos.formats") })
                  ]
                }
              ),
              (N || t.photoError) && /* @__PURE__ */ o("div", { className: "c-red small upload-error", children: N || t.photoError }),
              S && W.length > 0 && /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("photos.album") }),
                /* @__PURE__ */ o("select", { value: te, onChange: (k) => le(k.currentTarget.value), children: [
                  /* @__PURE__ */ o("option", { value: "", children: d("photos.album_root") }),
                  W.map((k) => /* @__PURE__ */ o("option", { value: k, children: k }, k))
                ] })
              ] }),
              S && t.card && /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("photos.folder") }),
                /* @__PURE__ */ o("button", { class: "folder-choose", onClick: () => pe(!0), children: [
                  /* @__PURE__ */ o(ps, { size: 16 }),
                  /* @__PURE__ */ o("span", { children: t.card.album && t.card.album !== "all" ? t.card.album : d("photos.folder_all") })
                ] })
              ] }),
              t.card && /* @__PURE__ */ o("div", { className: "photos-count", children: [
                /* @__PURE__ */ o("span", { children: d("photos.count", { n: a.length }) }),
                se && /* @__PURE__ */ o("a", { href: se, target: "_blank", rel: "noopener", children: d("photos.open_media") })
              ] }),
              !t.card && a.length > 0 && /* @__PURE__ */ o("div", { className: "thumbs thumbs-small", children: a.map((k) => /* @__PURE__ */ o("div", { className: "thumb", style: { backgroundImage: "url(" + k.url + ")" }, children: /* @__PURE__ */ o("button", { class: "thumb-del", onClick: () => t.deletePhoto(k.id), children: /* @__PURE__ */ o(je, { size: 14 }) }) }, k.id)) })
            ] }),
            /* @__PURE__ */ o(ko, { title: d("settings.section.slideshow"), children: [
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.slide_interval") }),
                /* @__PURE__ */ o("select", { value: h.slideIntervalMs, onChange: (k) => z({ slideIntervalMs: +k.currentTarget.value }), children: x4.map((k) => /* @__PURE__ */ o("option", { value: k, children: d("settings.interval." + k) }, k)) })
              ] }),
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.idle_return") }),
                /* @__PURE__ */ o("select", { value: h.idleSec, onChange: (k) => z({ idleSec: +k.currentTarget.value }), children: y4.map((k) => /* @__PURE__ */ o("option", { value: k, children: d("settings.idle." + k) }, k)) })
              ] }),
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.fit") }),
                /* @__PURE__ */ o("select", { value: B, onChange: (k) => {
                  const G = k.currentTarget.value;
                  T(G), f2(G);
                }, children: [
                  /* @__PURE__ */ o("option", { value: "auto", children: d("settings.fit_auto") }),
                  /* @__PURE__ */ o("option", { value: "contain", children: d("settings.fit_contain") }),
                  /* @__PURE__ */ o("option", { value: "cover", children: d("settings.fit_cover") })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ o(ko, { title: d("settings.section.device"), children: [
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.quality") }),
                /* @__PURE__ */ o("select", { value: Q, onChange: (k) => {
                  const G = k.currentTarget.value;
                  U(G), i2(G);
                }, children: [
                  /* @__PURE__ */ o(
                    "option",
                    {
                      value: "auto",
                      children: d("settings.quality_auto", { mode: d(Bo() === "lite" ? "settings.quality_lite" : "settings.quality_full") })
                    }
                  ),
                  /* @__PURE__ */ o("option", { value: "full", children: d("settings.quality_full") }),
                  /* @__PURE__ */ o("option", { value: "lite", children: d("settings.quality_lite") })
                ] })
              ] }),
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.cameras") }),
                /* @__PURE__ */ o("select", { value: Z, onChange: (k) => {
                  const G = k.currentTarget.value;
                  ee(G), a0(G);
                }, children: [
                  /* @__PURE__ */ o("option", { value: "auto", children: d("settings.cameras_auto", { mode: d(Bo() === "lite" ? "settings.cameras_paused" : "settings.cameras_live") }) }),
                  /* @__PURE__ */ o("option", { value: "live", children: d("settings.cameras_live") }),
                  /* @__PURE__ */ o("option", { value: "paused", children: d("settings.cameras_paused") }),
                  /* @__PURE__ */ o("option", { value: "snapshot", children: d("settings.cameras_snapshot") })
                ] })
              ] }),
              V !== null && /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.autostart") }),
                /* @__PURE__ */ o("select", { value: V ? "on" : "off", onChange: (k) => {
                  const G = k.currentTarget.value === "on";
                  J(G), fr(G);
                }, children: [
                  /* @__PURE__ */ o("option", { value: "on", children: d("settings.autostart_on") }),
                  /* @__PURE__ */ o("option", { value: "off", children: d("settings.autostart_off") })
                ] })
              ] }),
              i && /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.kiosk") }),
                /* @__PURE__ */ o("select", { value: L, onChange: (k) => {
                  const G = k.currentTarget.value;
                  j(G), V0(G);
                }, children: [
                  /* @__PURE__ */ o("option", { value: "", children: d("settings.kiosk_auto") }),
                  /* @__PURE__ */ o("option", { value: "on", children: d("settings.kiosk_on") }),
                  /* @__PURE__ */ o("option", { value: "off", children: d("settings.kiosk_off") })
                ] })
              ] }),
              /* @__PURE__ */ o("div", { className: "option", children: [
                /* @__PURE__ */ o("label", { children: d("settings.language") }),
                /* @__PURE__ */ o("select", { value: x, onChange: (k) => {
                  C(k.currentTarget.value), v2(k.currentTarget.value), jn();
                }, children: [
                  /* @__PURE__ */ o("option", { value: "", children: d("settings.language_auto") }),
                  b2().map((k) => /* @__PURE__ */ o("option", { value: k.code, children: k.name }, k.code))
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
                /* @__PURE__ */ o("input", { value: h.haUrl, placeholder: q ? q.hassUrl : location.protocol + "//" + location.host, onInput: (k) => z({ haUrl: k.currentTarget.value.trim() }) })
              ] }),
              q ? /* @__PURE__ */ o("div", { class: "auth-session", children: [
                /* @__PURE__ */ o("span", { children: d("ha.logged_in", { url: q.hassUrl }) }),
                !q.embedded && /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
                  R2(), location.reload();
                }, children: [
                  /* @__PURE__ */ o(il, { size: 14 }),
                  /* @__PURE__ */ o("span", { children: d("ha.logout") })
                ] })
              ] }) : /* @__PURE__ */ o("button", { class: "btn btn-ghost btn-login", onClick: () => {
                t.saveSettings(h), Q2(h.haUrl);
              }, children: [
                /* @__PURE__ */ o(al, { size: 16 }),
                /* @__PURE__ */ o("span", { children: d("ha.login") })
              ] }),
              /* @__PURE__ */ o("p", { class: "hint", children: d("ha.local_hint") })
            ] }),
            /* @__PURE__ */ o(k4, {}),
            t.frameClient && /* @__PURE__ */ o("label", { class: "field", children: [
              /* @__PURE__ */ o("span", { children: d("frame.name") }),
              /* @__PURE__ */ o(
                "input",
                {
                  value: de,
                  placeholder: d("frame.name_placeholder"),
                  onInput: (k) => K(k.currentTarget.value),
                  onChange: (k) => t.renameFrame(k.currentTarget.value.trim())
                }
              ),
              /* @__PURE__ */ o("small", { class: "option-hint", children: d("frame.hint") })
            ] })
          ] }),
          f === "homes" && /* @__PURE__ */ o("div", { children: [
            /* @__PURE__ */ o("p", { class: "hint", children: d("homes.hint") + (t.card ? d("homes.card_hint") : "") }),
            /* @__PURE__ */ o("div", { class: "option", children: [
              /* @__PURE__ */ o("label", { children: d("screen.start") }),
              /* @__PURE__ */ o("select", { value: w4(), onChange: (k) => {
                const G = k.currentTarget.value.split("/");
                t.setStart(G[0], G[1]);
              }, children: t.state.homes.map((k) => (t.state.screens[k.id] || []).map((G, be) => /* @__PURE__ */ o("option", { value: k.id + "/" + G.id, children: (t.state.homes.length > 1 ? k.name + " · " : "") + Ct(G, be) }, k.id + "/" + G.id))) })
            ] }),
            ye.map((k) => /* @__PURE__ */ o("div", { class: "home-row", children: /* @__PURE__ */ o("div", { class: "home-row-head", children: [
              /* @__PURE__ */ o("input", { class: "home-input", value: k.name, onInput: (G) => O(k.id, { name: G.currentTarget.value }) }),
              k.id !== Me && /* @__PURE__ */ o("button", { class: "icon-btn danger", title: d("homes.delete"), onClick: () => Ae(ye.filter((G) => G.id !== k.id)), children: /* @__PURE__ */ o(Wt, { size: 16 }) })
            ] }) }, k.id)),
            /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => Ae(ye.concat({ id: "h" + Date.now().toString(36), name: d("homes.new_name") })), children: /* @__PURE__ */ o("span", { children: d("homes.add") }) })
          ] }),
          f === "layout" && /* @__PURE__ */ o("div", { children: [
            t.card && t.cardError && /* @__PURE__ */ o("div", { class: "c-red small", children: d("sync.save_failed", { error: t.cardError }) }),
            S && /* @__PURE__ */ o(M4, { client: t.card.client }),
            /* @__PURE__ */ o("div", { class: "field", children: [
              /* @__PURE__ */ o("span", { children: d("layout.title") }),
              /* @__PURE__ */ o("div", { class: "row-btns", children: [
                /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
                  A(JSON.stringify(t.state.layout, null, 2)), b("");
                }, children: [
                  /* @__PURE__ */ o(Yr, { size: 14 }),
                  /* @__PURE__ */ o("span", { children: d("layout.export") })
                ] }),
                /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => t.saveLayout(t1()), children: [
                  /* @__PURE__ */ o(fl, { size: 14 }),
                  /* @__PURE__ */ o("span", { children: d("layout.reset") })
                ] })
              ] }),
              /* @__PURE__ */ o("textarea", { class: "json", value: m, placeholder: d("layout.import_placeholder"), onInput: (k) => A(k.currentTarget.value) }),
              w && /* @__PURE__ */ o("div", { class: "c-red small", children: w }),
              /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !m, onClick: Y, children: /* @__PURE__ */ o("span", { children: d("layout.import") }) })
            ] })
          ] })
        ]
      }
    ),
    _e && /* @__PURE__ */ o(
      v4,
      {
        onPick: (k) => {
          pe(!1), t.setAlbum(k).then(() => le(k === "all" ? "" : k), () => {
          });
        },
        onClose: () => pe(!1)
      }
    )
  ] });
}
function M4(e) {
  const [t, n] = _(null), [a, i] = _(""), [c, s] = _("");
  if (H(() => {
    e.client.call({ type: "photoframe/frames" }).then(
      (f) => {
        const h = f.frames.filter((u) => u.frame_id !== Ue() && (!!u.lockscreen || $e(u.grid) || $e(u.grid_portrait)));
        n(h), h.length && i(h[0].frame_id);
      },
      () => n([])
    );
  }, [e.client]), !t) return null;
  const l = t.filter((f) => f.frame_id === a)[0];
  return /* @__PURE__ */ o("div", { class: "field", children: [
    /* @__PURE__ */ o("span", { children: d("layout.grid_title") }),
    t.length === 0 ? /* @__PURE__ */ o("p", { class: "hint small", children: d("layout.grid_none") }) : /* @__PURE__ */ o(ne, { children: [
      /* @__PURE__ */ o("select", { value: a, onChange: (f) => {
        i(f.currentTarget.value), s("");
      }, children: t.map((f) => /* @__PURE__ */ o("option", { value: f.frame_id, children: (f.name || f.frame_id) + (f.online ? "" : " · " + d("layout.grid_offline")) }, f.frame_id)) }),
      /* @__PURE__ */ o("div", { class: "row-btns", children: [
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !l || !l.lockscreen, onClick: () => {
          me(ha(l.lockscreen)), s("all");
        }, children: /* @__PURE__ */ o("span", { children: d(c === "all" ? "layout.grid_done" : "layout.look_take") }) }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !l, onClick: () => {
          me({ grid: $e(l.grid), gridPortrait: $e(l.grid_portrait) }), s("grid");
        }, children: /* @__PURE__ */ o("span", { children: d(c === "grid" ? "layout.grid_done" : "layout.grid_take") }) })
      ] })
    ] })
  ] });
}
function ko(e) {
  return /* @__PURE__ */ o("div", { class: "settings-section", children: [
    /* @__PURE__ */ o("div", { class: "section-title", children: e.title }),
    e.children
  ] });
}
const tn = 5, xi = 2.5, yi = 8, C4 = 0.25, L4 = 0.18, wi = 0.5, _o = "cubic-bezier(0.2, 0.7, 0.2, 1)";
function ht(e, t, n) {
  if (!e) return;
  const a = e.style;
  a.webkitTransition = n, a.transition = n, a.webkitTransform = t, a.transform = t;
}
function S4(e) {
  const t = ae(), n = e.feeds.length, a = Math.min(Math.max(0, e.index), Math.max(0, n - 1)), i = e.feeds[a], c = i ? i.entity : "", s = i ? t.cameraStreamUrl(i.entity) : "", l = _c(c), [f, h] = _(!0), u = X(null), p = X(null), r = X({ index: a, count: n, props: e, ha: t });
  return r.current = { index: a, count: n, props: e, ha: t }, H(() => {
    const m = (A) => {
      const w = A.key || "", b = w === "ArrowRight" || w === "Right" ? 1 : w === "ArrowLeft" || w === "Left" ? -1 : 0;
      if (!b) return;
      A.preventDefault(), A.stopPropagation();
      const z = r.current;
      z.count > 1 && z.props.onIndex(Et(z.index, b, z.count));
    };
    return window.addEventListener("keydown", m, !0), () => window.removeEventListener("keydown", m, !0);
  }, []), H(() => {
    const m = u.current, A = p.current;
    if (!m || !A) return;
    const w = () => A.querySelector("img");
    let b = 1, z = 0, v = 0;
    const y = () => A.clientWidth || 1, N = () => A.clientHeight || 1, M = (O) => {
      b = Math.max(1, Math.min(tn, b)), z = Math.min(0, Math.max(y() - y() * b, z)), v = Math.min(0, Math.max(N() - N() * b, v)), ht(w(), b === 1 ? "" : "translate(" + z + "px, " + v + "px) scale(" + b + ")", O ? "transform 0.25s ease" : "none");
    }, D = (O) => {
      b = 1, z = 0, v = 0, M(O);
    }, g = (O, F, Y) => {
      const k = Math.max(1, Math.min(tn, O)) / b;
      z = F - (F - z) * k, v = Y - (Y - v) * k, b *= k, M(!0);
    }, E = (O, F) => {
      const Y = A.getBoundingClientRect();
      return { px: O - Y.left, py: F - Y.top };
    };
    let x = null, C = 0;
    const L = () => {
      x && x.parentNode && x.parentNode.removeChild(x), x = null, C = 0;
    }, j = (O) => {
      const F = r.current;
      if (F.count < 2)
        return L(), null;
      if (x && C === O) return x;
      x || (x = document.createElement("div"), x.className = "cam-viewer-peek", m.appendChild(x));
      const Y = F.props.feeds[Et(F.index, O, F.count)], k = Y ? F.ha.cameraSnapshotUrl(Y.entity) : "";
      return x.style.backgroundImage = k ? 'url("' + k + '")' : "", C = O, x;
    }, Q = (O, F) => {
      ht(A, O ? "translateX(" + Math.round(O) + "px)" : "", F);
      const Y = O < 0 ? 1 : O > 0 ? -1 : C, k = Y ? j(Y) : x;
      k && ht(k, "translateX(" + Math.round(O + Y * y()) + "px)", F);
    }, U = (O, F) => {
      const Y = Math.min(1, Math.abs(O) / N());
      ht(A, O ? "translateY(" + Math.round(O) + "px) scale(" + (1 - Y * 0.15).toFixed(3) + ")" : "", F), m.style.backgroundColor = "rgba(0, 0, 0, " + (1 - Math.min(0.85, Y * 1.6)).toFixed(3) + ")", m.style.transition = F.replace(/transform/g, "background-color"), m.classList.toggle("dragging", !!O);
    };
    let Z = null, ee = "", B = null, T = null, V = 0, J = 0, q = 0, S = !1, W = 0;
    const te = (O, F) => Math.sqrt(Math.pow(O.clientX - F.clientX, 2) + Math.pow(O.clientY - F.clientY, 2)), le = (O) => {
      if (S = !1, O.touches.length === 2) {
        const F = O.touches[0], Y = O.touches[1], k = E((F.clientX + Y.clientX) / 2, (F.clientY + Y.clientY) / 2);
        B = { d: te(F, Y) || 1, s: b, mx: k.px, my: k.py, x: z, y: v }, Z = null, T = null, ee = "", Q(0, "none"), U(0, "none");
      } else if (O.touches.length === 1) {
        const F = O.touches[0];
        Z = { x: F.clientX, y: F.clientY, t: Date.now() }, T = { cx: F.clientX, cy: F.clientY, x: z, y: v }, ee = "";
      }
    }, _e = (O) => {
      if (O.cancelable && O.preventDefault(), B && O.touches.length === 2) {
        S = !0;
        const G = O.touches[0], be = O.touches[1], ge = E((G.clientX + be.clientX) / 2, (G.clientY + be.clientY) / 2), we = Math.max(1, Math.min(tn, B.s * te(G, be) / B.d));
        z = ge.px - (B.mx - B.x) * (we / B.s), v = ge.py - (B.my - B.y) * (we / B.s), b = we, M(!1);
        return;
      }
      if (!Z || O.touches.length !== 1) return;
      const F = O.touches[0], Y = F.clientX - Z.x, k = F.clientY - Z.y;
      if ((Math.abs(Y) > yi || Math.abs(k) > yi) && (S = !0), b > 1 && T) {
        z = T.x + Y, v = T.y + k, M(!1);
        return;
      }
      !ee && S && (ee = Math.abs(Y) > Math.abs(k) ? "x" : "y"), ee === "x" ? Q(Y, "none") : ee === "y" && U(k, "none");
    }, pe = (O) => {
      if (O.touches.length < 2 && (B = null), O.touches.length === 1) {
        const Le = O.touches[0];
        T = { cx: Le.clientX, cy: Le.clientY, x: z, y: v }, Z = null;
        return;
      }
      if (O.touches.length) return;
      const F = O.changedTouches[0], Y = Z;
      if (Z = null, !F || !Y) return;
      const k = F.clientX - Y.x, G = F.clientY - Y.y, be = Math.max(1, Date.now() - Y.t), ge = r.current;
      if (ee === "x") {
        if (!(ge.count > 1 && (Math.abs(k) > y() * C4 || Math.abs(k) / be > wi))) {
          Q(0, "transform 0.25s " + _o), window.setTimeout(L, 260);
          return;
        }
        const At = k < 0 ? 1 : -1;
        Q(-At * y(), "transform 0.28s " + _o), window.setTimeout(() => {
          ge.props.onIndex(Et(ge.index, At, ge.count)), ht(A, "", "none");
          const Xe = w(), Gn = x;
          let I = !1;
          const R = () => {
            I || (I = !0, Xe && Xe.removeEventListener("load", R), x === Gn && L());
          };
          Xe && Xe.addEventListener("load", R), window.setTimeout(R, 600);
        }, 280);
        return;
      }
      if (ee === "y") {
        if (!(Math.abs(G) > N() * L4 || Math.abs(G) / be > wi)) {
          U(0, "transform 0.25s " + _o);
          return;
        }
        U((G > 0 ? 1 : -1) * N(), "transform 0.22s ease-in"), window.setTimeout(() => ge.props.onClose(), 200);
        return;
      }
      if (S) return;
      const we = Date.now();
      if (we - V < 300 && Math.abs(F.clientX - J) < 30 && Math.abs(F.clientY - q) < 30) {
        V = 0, clearTimeout(W);
        const Le = E(F.clientX, F.clientY);
        b > 1 ? D(!0) : g(xi, Le.px, Le.py);
      } else
        V = we, J = F.clientX, q = F.clientY, W = window.setTimeout(() => h((Le) => !Le), 300);
    }, se = (O) => {
      O.preventDefault();
      const F = E(O.clientX, O.clientY), Y = Math.max(1, Math.min(tn, b * Math.exp(-O.deltaY * 2e-3))) / b;
      z = F.px - (F.px - z) * Y, v = F.py - (F.py - v) * Y, b *= Y, M(!1);
    }, fe = (O) => {
      const F = E(O.clientX, O.clientY);
      b > 1 ? D(!0) : g(xi, F.px, F.py);
    };
    let de = null;
    const K = (O) => {
      O.button === 0 && b > 1 && (O.preventDefault(), de = { cx: O.clientX, cy: O.clientY, x: z, y: v });
    }, ye = (O) => {
      de && (z = de.x + O.clientX - de.cx, v = de.y + O.clientY - de.cy, M(!1));
    }, Ae = () => {
      de = null;
    }, ze = () => M(!1);
    return A.addEventListener("touchstart", le, { passive: !0 }), A.addEventListener("touchmove", _e, { passive: !1 }), A.addEventListener("touchend", pe), A.addEventListener("touchcancel", pe), A.addEventListener("wheel", se, { passive: !1 }), A.addEventListener("dblclick", fe), A.addEventListener("mousedown", K), window.addEventListener("mousemove", ye), window.addEventListener("mouseup", Ae), window.addEventListener("resize", ze), () => {
      clearTimeout(W), L(), A.removeEventListener("touchstart", le), A.removeEventListener("touchmove", _e), A.removeEventListener("touchend", pe), A.removeEventListener("touchcancel", pe), A.removeEventListener("wheel", se), A.removeEventListener("dblclick", fe), A.removeEventListener("mousedown", K), window.removeEventListener("mousemove", ye), window.removeEventListener("mouseup", Ae), window.removeEventListener("resize", ze);
    };
  }, []), H(() => {
    const m = p.current, A = m && m.querySelector("img");
    ht(A, "", "none");
  }, [c]), /* @__PURE__ */ o("div", { class: "cam-viewer" + (f ? "" : " bare"), ref: u, children: [
    /* @__PURE__ */ o("div", { class: "cam-viewer-stage", ref: p, children: [
      /* @__PURE__ */ o(zc, { src: s, ...l.img }),
      (!s || l.state === "error") && /* @__PURE__ */ o("div", { class: "cam-empty", children: /* @__PURE__ */ o("span", { children: d("camera.no_stream") }) }),
      l.state === "loading" && /* @__PURE__ */ o("div", { class: "cam-loading", children: [
        /* @__PURE__ */ o("i", { class: "cam-spinner" }),
        /* @__PURE__ */ o("span", { children: d("camera.loading") })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "cam-viewer-bar", children: [
      /* @__PURE__ */ o("span", { class: "cam-viewer-name", children: i ? i.name : d("camera.live_title") }),
      /* @__PURE__ */ o("button", { class: "cam-viewer-close", onClick: e.onClose, title: d("camera.close"), "aria-label": d("camera.close"), children: /* @__PURE__ */ o(je, { size: 22 }) })
    ] }),
    n > 1 && /* @__PURE__ */ o("div", { class: "cam-viewer-dots", children: e.feeds.map((m, A) => /* @__PURE__ */ o(
      "button",
      {
        class: A === a ? "active" : "",
        title: m.name,
        "aria-label": m.name,
        onClick: () => e.onIndex(A)
      },
      m.entity + A
    )) })
  ] });
}
function E4(e) {
  const t = Object.keys(kn);
  return /* @__PURE__ */ o(rt, { title: d("editor.new_card"), onClose: e.onClose, children: /* @__PURE__ */ o("div", { class: "type-list", children: t.map((n) => {
    const a = kn[n];
    return /* @__PURE__ */ o("button", { class: "type-row", onClick: () => e.onPick({
      // Новая карточка встаёт в конец сетки (место уточнит placeFree при сохранении).
      id: w2(),
      type: n,
      title: "",
      icon: a.icon,
      x: 0,
      y: 999,
      w: n === "switches" ? 6 : 3,
      h: 3,
      items: []
    }), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(Ce, { name: a.icon, size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: Pt(n) }),
        /* @__PURE__ */ o("small", { children: Ki(n) })
      ] }),
      /* @__PURE__ */ o(lt, { size: 18 })
    ] }, n);
  }) }) });
}
function I4(e) {
  const t = ae(), [n, a] = _(""), [i, c] = _(!1), [s, l] = _(e.cardType ? "devices" : "entities"), f = n.toLowerCase(), h = Object.keys(t.states).filter((r) => {
    if (e.exclude.indexOf(r) !== -1 || !i && !at(t, r) || !i && e.domains.indexOf(r.split(".")[0]) === -1 || !i && e.match && !e.match(t.states[r])) return !1;
    if (!f) return !0;
    const m = String(t.states[r].attributes.friendly_name || "").toLowerCase();
    return r.indexOf(f) !== -1 || m.indexOf(f) !== -1;
  }).sort().slice(0, 150), u = e.cardType, p = u ? Object.keys(t.devices).map((r) => t.devices[r]).map((r) => ({
    dev: r,
    fit: r.entities.filter((m) => t.registry[m] && t.registry[m].ec == null && at(t, m) && ga(u, t.states[m]))
  })).filter((r) => r.fit.length && (e.excludeDevices || []).indexOf(r.dev.id) === -1 && (!f || r.dev.name.toLowerCase().indexOf(f) !== -1)).sort((r, m) => r.dev.name.localeCompare(m.dev.name)) : [];
  return /* @__PURE__ */ o("div", { class: "picker", children: [
    u && /* @__PURE__ */ o("div", { class: "seg seg-wide picker-mode", children: [
      /* @__PURE__ */ o("button", { class: s === "devices" ? "active" : "", onClick: () => l("devices"), children: d("editor.devices") }),
      /* @__PURE__ */ o("button", { class: s === "entities" ? "active" : "", onClick: () => l("entities"), children: d("editor.entities") })
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-search", children: [
      /* @__PURE__ */ o(Ys, { size: 16 }),
      /* @__PURE__ */ o("input", { placeholder: d(s === "devices" ? "editor.search_device" : "editor.search_entity"), value: n, onInput: (r) => a(r.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: e.onClose, children: /* @__PURE__ */ o(je, { size: 18 }) })
    ] }),
    s === "entities" && /* @__PURE__ */ o("label", { class: "check", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: i, onChange: (r) => c(r.currentTarget.checked) }),
      " ",
      d("editor.show_all")
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-list", children: s === "devices" ? /* @__PURE__ */ o(ne, { children: [
      p.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: Object.keys(t.devices).length ? d("editor.no_devices") : d("editor.loading_devices") }),
      p.map(({ dev: r, fit: m }) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => e.onPickDevice && e.onPickDevice(r.id, m[0]), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: r.name || m[0] }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: d("editor.count", { n: m.length }) }),
        /* @__PURE__ */ o("span", { class: "picker-id", children: m.slice(0, 4).map((A) => t.registry[A].en || t.states[A].attributes.friendly_name).join(" · ") })
      ] }, r.id))
    ] }) : /* @__PURE__ */ o(ne, { children: [
      h.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: d("editor.nothing_found") }),
      h.map((r) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => e.onPick(r), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: t.states[r].attributes.friendly_name || r }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: t.states[r].state + (isNaN(parseFloat(t.states[r].state)) ? "" : yn(t, r)) }),
        /* @__PURE__ */ o("span", { class: "picker-id mono", children: r })
      ] }, r))
    ] }) })
  ] });
}
const N4 = ["cover", "width", "height"], D4 = [[2, 2], [3, 3], [4, 3], [6, 3], [3, 6], [6, 6], [12, 3]];
function T4(e) {
  const t = ae(), [n, a] = _(e.card), [i, c] = _(null), [s, l] = _(null), f = kn[n.type], h = (r) => a({ ...n, ...r }), u = (r, m) => h({ items: n.items.map((A, w) => w === r ? { ...A, ...m } : A) }), p = (r, m) => {
    const A = r + m;
    if (A < 0 || A >= n.items.length) return;
    const w = n.items.slice();
    w[r] = n.items[A], w[A] = n.items[r], h({ items: w });
  };
  return /* @__PURE__ */ o(ne, { children: [
    /* @__PURE__ */ o(
      rt,
      {
        title: d("editor.card_title", { type: Pt(n.type) }),
        onClose: e.onClose,
        footer: /* @__PURE__ */ o(ne, { children: [
          e.onDelete ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: e.onDelete, children: [
            /* @__PURE__ */ o(Wt, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("common.delete") })
          ] }) : /* @__PURE__ */ o("span", {}),
          /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: () => e.onSave(n), children: d("common.save") })
        ] }),
        children: [
          /* @__PURE__ */ o("label", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.name") }),
            /* @__PURE__ */ o("input", { value: n.title, placeholder: Pt(n.type), onInput: (r) => h({ title: r.currentTarget.value }) })
          ] }),
          /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.size") }),
            /* @__PURE__ */ o("div", { class: "seg seg-wide", children: D4.map(([r, m]) => /* @__PURE__ */ o("button", { class: n.w === r && n.h === m ? "active" : "", onClick: () => h({ w: r, h: m }), children: [
              r,
              "×",
              m
            ] }, r + "x" + m)) })
          ] }),
          /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.color") }),
            /* @__PURE__ */ o("div", { class: "swatches", children: [
              /* @__PURE__ */ o("button", { class: "swatch swatch-auto" + (n.color ? "" : " active"), onClick: () => h({ color: void 0 }), title: d("editor.color_auto"), children: "A" }),
              Object.keys(Mt).map((r) => /* @__PURE__ */ o("button", { class: "swatch" + (n.color === r ? " active" : ""), style: { background: Mt[r] }, onClick: () => h({ color: r }) }, r))
            ] })
          ] }),
          /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.icon") }),
            /* @__PURE__ */ o("button", { class: "icon-choose", onClick: () => l({ index: null }), children: [
              /* @__PURE__ */ o("span", { class: "icon-choose-preview", children: /* @__PURE__ */ o(Ce, { name: n.icon || f.icon, size: 22 }) }),
              /* @__PURE__ */ o("span", { children: d("editor.choose_icon") }),
              /* @__PURE__ */ o("span", { class: "icon-choose-key mono", children: n.icon || d("editor.icon_default") })
            ] })
          ] }),
          n.type === "cameras" && /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.camera_picture") }),
            /* @__PURE__ */ o("div", { class: "seg seg-wide", children: N4.map((r) => /* @__PURE__ */ o("button", { class: (n.fit || "cover") === r ? "active" : "", onClick: () => h({ fit: r }), children: d("editor.fit." + r) }, r)) })
          ] }),
          n.type !== "cameras" && n.type !== "scenes" && /* @__PURE__ */ o("label", { class: "check check-row", children: [
            /* @__PURE__ */ o("input", { type: "checkbox", checked: !!n.chip, onChange: (r) => h({ chip: r.currentTarget.checked }) }),
            n.type === "weather" ? d("editor.weather_on_photo") : d("editor.chip_on_photo")
          ] }),
          /* @__PURE__ */ o("div", { class: "field", children: [
            /* @__PURE__ */ o("span", { children: d("editor.items", { n: n.items.length, hint: Ki(n.type).toLowerCase() }) }),
            i === null ? /* @__PURE__ */ o("div", { class: "items", children: [
              n.items.map((r, m) => /* @__PURE__ */ o("div", { class: "item-block", children: [
                /* @__PURE__ */ o("div", { class: "item-row", children: [
                  /* @__PURE__ */ o("button", { class: "item-icon", title: d("editor.change_icon"), onClick: () => l({ index: m }), children: /* @__PURE__ */ o(Ce, { name: r.icon || Aa(r.entity, t.states[r.entity] && t.states[r.entity].attributes.device_class), size: 18 }) }),
                  /* @__PURE__ */ o("div", { class: "item-main", children: [
                    /* @__PURE__ */ o("input", { value: r.name || "", placeholder: r.device ? t.devices[r.device] ? t.devices[r.device].name : d("editor.device") : Ie(t, { entity: r.entity }), onInput: (A) => u(m, { name: A.currentTarget.value || void 0 }) }),
                    r.device ? /* @__PURE__ */ o("span", { class: "mono", children: d("editor.device") }) : /* @__PURE__ */ o("span", { class: "mono", children: [
                      r.entity,
                      !at(t, r.entity) && /* @__PURE__ */ o("em", { class: "na-tag", children: [
                        " · ",
                        d("editor.unavailable")
                      ] })
                    ] }),
                    n.type === "climate" && /* @__PURE__ */ o("button", { class: "link", onClick: () => c({ index: m, field: "hum" }), children: [
                      /* @__PURE__ */ o(st, { size: 12 }),
                      r.hum ? r.hum : d("editor.add_humidity")
                    ] }),
                    n.type === "ac" && /* @__PURE__ */ o("button", { class: "link", onClick: () => c({ index: m, field: "temp" }), children: [
                      /* @__PURE__ */ o(sc, { size: 12 }),
                      r.temp ? r.temp : d("editor.room_sensor")
                    ] })
                  ] }),
                  /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => p(m, -1), children: /* @__PURE__ */ o(B1, { size: 16 }) }),
                  /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => p(m, 1), children: /* @__PURE__ */ o(D1, { size: 16 }) }),
                  /* @__PURE__ */ o("button", { class: "icon-btn danger", onClick: () => h({ items: n.items.filter((A, w) => w !== m) }), children: /* @__PURE__ */ o(Wt, { size: 16 }) })
                ] }),
                r.device && /* @__PURE__ */ o(P4, { it: r, type: n.type, onChange: (A) => u(m, A) })
              ] }, r.entity + m)),
              /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => c("add"), children: [
                /* @__PURE__ */ o(lt, { size: 16 }),
                /* @__PURE__ */ o("span", { children: n.type === "weather" && !n.items.length ? d("editor.pick_forecast") : d("editor.add_device") })
              ] })
            ] }) : /* @__PURE__ */ o(
              I4,
              {
                domains: i === "add" ? f.domains : ["sensor"],
                match: i !== "add" ? (r) => r.attributes.device_class === (i.field === "hum" ? "humidity" : "temperature") : (r) => ga(n.type, r),
                exclude: n.items.map((r) => r.entity),
                cardType: i === "add" ? n.type : void 0,
                excludeDevices: n.items.map((r) => r.device || "").filter(Boolean),
                onPickDevice: (r, m) => {
                  h({ items: n.items.concat({ entity: m, device: r }) }), c(null);
                },
                onClose: () => c(null),
                onPick: (r) => {
                  i === "add" ? h({ items: n.items.concat({ entity: r }) }) : u(i.index, { [i.field]: r }), c(null);
                }
              }
            )
          ] })
        ]
      }
    ),
    s && /* @__PURE__ */ o(
      B4,
      {
        value: s.index === null ? n.icon : n.items[s.index] && n.items[s.index].icon,
        onPick: (r) => {
          s.index === null ? h({ icon: r }) : u(s.index, { icon: r }), l(null);
        },
        onClose: () => l(null)
      }
    )
  ] });
}
function B4(e) {
  const [t, n] = _(""), a = Sl().map((i) => ({ ...i, keys: i.keys.filter((c) => Il(c, t)) })).filter((i) => i.keys.length);
  return /* @__PURE__ */ o(rt, { title: d("editor.icon_pick"), onClose: e.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "icon-picker", children: [
    /* @__PURE__ */ o("div", { class: "picker-search icon-picker-search", children: [
      /* @__PURE__ */ o(Ys, { size: 16 }),
      /* @__PURE__ */ o("input", { autoFocus: !0, placeholder: d("editor.icon_search"), value: t, onInput: (i) => n(i.currentTarget.value) }),
      t && /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => n(""), children: /* @__PURE__ */ o(je, { size: 16 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "icon-picker-scroll", children: [
      !a.length && /* @__PURE__ */ o("p", { class: "muted picker-empty", children: d("editor.nothing_found") }),
      a.map((i) => /* @__PURE__ */ o("section", { class: "icon-group", children: [
        /* @__PURE__ */ o("h3", { children: d(i.titleKey) }),
        /* @__PURE__ */ o("div", { class: "icon-grid icon-grid-picker", children: i.keys.map((c) => /* @__PURE__ */ o("button", { class: e.value === c ? "active" : "", title: c, onClick: () => e.onPick(c), children: /* @__PURE__ */ o(Ce, { name: c, size: 22 }) }, c)) })
      ] }, i.titleKey))
    ] })
  ] }) });
}
function P4(e) {
  const t = ae(), n = e.it, a = n.skip || [], i = n.names || {}, c = Lc(t, e.type, { ...n, skip: [], names: {} });
  if (!c.length) return /* @__PURE__ */ o("span", { class: "mono", children: d("editor.no_matching") });
  const s = c.map((u) => u.entity), l = (u, p) => {
    const r = s.slice(), m = r[u];
    r[u] = r[u + p], r[u + p] = m, e.onChange({ order: r });
  }, f = (u, p) => {
    const r = { ...i };
    p ? r[u] = p : delete r[u], e.onChange({ names: Object.keys(r).length ? r : void 0 });
  }, h = (u, p) => {
    const r = p ? a.filter((m) => m !== u) : a.concat(u);
    e.onChange({ skip: r.length ? r : void 0 });
  };
  return /* @__PURE__ */ o("div", { class: "device-parts", children: c.map((u, p) => {
    const r = a.indexOf(u.entity) === -1;
    return /* @__PURE__ */ o("div", { class: "device-part" + (r ? "" : " off"), children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: r, title: d(r ? "editor.part_hide" : "editor.part_show"), onChange: (m) => h(u.entity, m.currentTarget.checked) }),
      /* @__PURE__ */ o("input", { class: "part-name", value: i[u.entity] || "", placeholder: u.name || u.entity, onInput: (m) => f(u.entity, m.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: p === 0, onClick: () => l(p, -1), children: /* @__PURE__ */ o(B1, { size: 14 }) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: p === c.length - 1, onClick: () => l(p, 1), children: /* @__PURE__ */ o(D1, { size: 14 }) })
    ] }, u.entity);
  }) });
}
function O4({ thumb: e, sheet: t }) {
  const [n, a] = _({ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }), [i, c] = _(e ? [e] : []);
  Ve(() => {
    if (!t) return;
    const l = () => a({ x: t.offsetLeft, y: t.offsetTop, w: window.innerWidth, h: window.innerHeight });
    return l(), window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, [t]), H(() => {
    e && i[i.length - 1] !== e && c(i.slice(-1).concat(e));
  }, [e]);
  const s = {
    left: -n.x - n.w * 0.05,
    top: -n.y - n.h * 0.05,
    width: n.w * 1.1,
    height: n.h * 1.1
  };
  return /* @__PURE__ */ o("div", { class: "sheet-glass", children: [
    i.map((l, f) => /* @__PURE__ */ o("div", { class: "glass-layer" + (f > 0 ? " fresh" : ""), style: { ...s, backgroundImage: "url(" + l + ")" } }, l.length + ":" + l.slice(-32))),
    /* @__PURE__ */ o("div", { class: "sheet-tint" })
  ] });
}
function H4({ card: e, tone: t, onCamera: n, onClose: a }) {
  const i = ae(), c = X(null), [s, l] = _(null);
  Ve(() => {
    l(c.current);
  }, []);
  const f = ["switches", "scenes", "cameras", "ac", "speakers", "tv", "weather"].indexOf(e.type) !== -1;
  return /* @__PURE__ */ o("div", { class: "sheet-layer" + (e.type === "cameras" ? " cams" : ""), onClick: a, children: /* @__PURE__ */ o("div", { ref: c, class: "sheet sheet-" + e.type + (f ? " sheet-wide" : "") + (e.color ? " tint-" + e.color : ""), onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ o(O4, { thumb: t ? t.thumb : void 0, sheet: s }),
    /* @__PURE__ */ o("div", { class: "sheet-inner", children: [
      /* @__PURE__ */ o("div", { class: "panel-head", children: [
        /* @__PURE__ */ o("div", { class: "panel-title", children: [
          e.icon && /* @__PURE__ */ o(Ce, { name: e.icon, size: 18, class: "panel-icon" }),
          /* @__PURE__ */ o("h2", { children: pt(i, e) })
        ] }),
        /* @__PURE__ */ o("div", { class: "sheet-actions", children: [
          /* @__PURE__ */ o(Dc, { card: e }),
          /* @__PURE__ */ o("button", { class: "sheet-close", onClick: a, children: /* @__PURE__ */ o(je, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ o(Nc, { card: e, size: { w: f ? 600 : 420, h: 600 }, onCamera: n })
    ] })
  ] }) });
}
const qc = 36e5, pn = 24 * qc, Qc = { "24h": pn, "7d": 7 * pn, "30d": 30 * pn }, F4 = ["binary_sensor", "switch", "light", "input_boolean", "fan", "lock", "cover", "media_player"], R4 = ["on", "open", "unlocked", "playing", "home"];
function Wc(e) {
  if (!e) return "line";
  if (F4.indexOf(e.entity_id.split(".")[0]) !== -1) return "timeline";
  const t = e.attributes.state_class;
  return t === "total" || t === "total_increasing" ? "bars" : isNaN(parseFloat(e.state)) ? "timeline" : "line";
}
function Pn(e) {
  return new Date(e).toISOString();
}
function ki(e) {
  return typeof e == "number" ? e : Date.parse(e);
}
function zo(e, t, n, a) {
  return e.call({
    type: "history/history_during_period",
    start_time: Pn(n),
    end_time: Pn(a),
    entity_ids: [t],
    minimal_response: !0,
    no_attributes: !0
  }).then((i) => (i[t] || []).map((c) => ({ s: c.s, t: (c.lu || c.lc || 0) * 1e3 || n })));
}
function _i(e, t, n, a, i, c) {
  return e.call({
    type: "recorder/statistics_during_period",
    start_time: Pn(n),
    end_time: Pn(a),
    statistic_ids: [t],
    period: i,
    types: c
  }).then((s) => s[t] || []);
}
function zi(e) {
  const t = [];
  return e.forEach((n) => {
    const a = parseFloat(n.s);
    isNaN(a) || t.push({ t: n.t, v: a });
  }), t;
}
function j4(e, t, n) {
  const a = t.entity_id, i = Wc(t), c = Date.now(), s = c - Qc[n], l = { kind: i, from: s, to: c, points: [], segments: [], bucketMs: 0 };
  if (i === "timeline")
    return zo(e, a, s, c).then((f) => {
      const h = f.map((u, p) => ({
        from: Math.max(s, u.t),
        to: p + 1 < f.length ? f[p + 1].t : c,
        on: u.s === "unavailable" || u.s === "unknown" ? null : R4.indexOf(u.s) !== -1
      }));
      return { ...l, segments: h };
    });
  if (i === "bars") {
    const f = n === "24h" ? "hour" : "day";
    return _i(e, a, s, c, f, ["change"]).then((h) => ({
      ...l,
      bucketMs: f === "hour" ? qc : pn,
      points: h.filter((u) => u.change != null).map((u) => ({ t: ki(u.start), v: u.change }))
    }));
  }
  return n === "24h" ? zo(e, a, s, c).then((f) => ({ ...l, points: zi(f) })) : _i(e, a, s, c, n === "7d" ? "hour" : "day", ["mean", "min", "max"]).then((f) => {
    const h = f.filter((u) => u.mean != null).map((u) => ({ t: ki(u.start), v: u.mean, min: u.min == null ? void 0 : u.min, max: u.max == null ? void 0 : u.max }));
    return h.length ? { ...l, points: h } : zo(e, a, s, c).then((u) => ({ ...l, points: zi(u) }));
  });
}
function q4(e) {
  const t = e.points;
  if (e.kind === "timeline") {
    let s = 0, l = 0, f = null;
    return e.segments.forEach((h) => {
      h.on && (l += h.to - h.from, f === !1 && s++), h.on !== null && (f = h.on);
    }), { onCount: s, onMs: l };
  }
  if (!t.length) return {};
  if (e.kind === "bars") {
    let s = 0, l = t[0];
    return t.forEach((f) => {
      s += f.v, f.v > l.v && (l = f);
    }), { total: s, peak: l, avg: s / t.length };
  }
  let n = t[0], a = t[0];
  t.forEach((s) => {
    (s.min != null ? s.min : s.v) < (n.min != null ? n.min : n.v) && (n = s), (s.max != null ? s.max : s.v) > (a.max != null ? a.max : a.v) && (a = s);
  });
  let i = 0, c = 0;
  return t.forEach((s, l) => {
    const f = l + 1 < t.length ? t[l + 1].t : e.to, h = Math.max(0, f - Math.max(s.t, e.from));
    i += s.v * h, c += h;
  }), {
    min: { t: n.t, v: n.min != null ? n.min : n.v },
    max: { t: a.t, v: a.max != null ? a.max : a.v },
    avg: c ? i / c : void 0
  };
}
function Q4(e, t) {
  const n = e.registry[t], a = n && n.di ? e.devices[n.di] : void 0;
  return a ? Promise.resolve(a.entities.filter((i) => i !== t && e.registry[i].ec == null)) : Promise.resolve([]);
}
const W4 = ["24h", "7d", "30d"], U4 = ["switch", "light", "fan", "input_boolean"];
function Mo(e, t) {
  const n = e.states[t];
  return String(n && n.attributes.friendly_name || t);
}
function Y4(e) {
  if (e.length < 2) return e;
  const t = e.map((a) => a.split(" "));
  let n = 0;
  for (; t.every((a) => a.length > n + 1 && a[n] === t[0][n]); ) n++;
  return t.map((a) => a.slice(n).join(" "));
}
function V4(e) {
  const t = Math.round(e / 6e4), n = Math.floor(t / 1440), a = Math.floor(t % 1440 / 60), i = t % 60;
  return [n ? d("duration.days", { n }) : "", a || n ? d("duration.hours", { n: a }) : "", n ? "" : d("duration.minutes", { n: i })].filter(Boolean).join(" ");
}
function G4({ entity: e }) {
  const t = ae(), [n, a] = _(!1);
  H(() => {
    if (!n) return;
    const s = setTimeout(() => a(!1), 4e3);
    return () => clearTimeout(s);
  }, [n]);
  const i = t.states[e] && t.states[e].state === "on", c = () => {
    if (i && !n) {
      a(!0);
      return;
    }
    a(!1), t.toggle(e);
  };
  return /* @__PURE__ */ o("button", { class: "btn " + (n ? "btn-danger" : i ? "btn-ghost" : "btn-accent"), onClick: c, children: [
    /* @__PURE__ */ o(Qt, { size: 16 }),
    /* @__PURE__ */ o("span", { children: d(n ? "detail.confirm_off" : i ? "common.turn_off" : "common.turn_on") })
  ] });
}
function Se(e) {
  return /* @__PURE__ */ o("div", { class: "stat", children: [
    /* @__PURE__ */ o("div", { class: "stat-label", children: e.label }),
    /* @__PURE__ */ o("div", { class: "stat-value", children: e.value }),
    e.note && /* @__PURE__ */ o("div", { class: "stat-note", children: e.note })
  ] });
}
function X4({ series: e, sum: t, unit: n, range: a, current: i }) {
  const c = n ? " " + n : "";
  if (e.kind === "timeline") {
    const s = e.to - e.from;
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(Se, { label: d("stat.now"), value: i }),
      /* @__PURE__ */ o(Se, { label: d("stat.turned_on"), value: String(t.onCount || 0), note: d("stat.times") }),
      /* @__PURE__ */ o(Se, { label: d("stat.on_time"), value: V4(t.onMs || 0) }),
      /* @__PURE__ */ o(Se, { label: d("stat.on_share"), value: Math.round((t.onMs || 0) / s * 100) + "%" })
    ] });
  }
  if (e.kind === "bars") {
    const s = e.bucketMs >= 864e5 ? d("stat.avg_per_day") : d("stat.avg_per_hour");
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(Se, { label: d("stat.total"), value: t.total != null ? ve(t.total) + c : "—" }),
      /* @__PURE__ */ o(Se, { label: s, value: t.avg != null ? ve(t.avg) + c : "—" }),
      /* @__PURE__ */ o(
        Se,
        {
          label: d("stat.peak"),
          value: t.peak ? ve(t.peak.v) + c : "—",
          note: t.peak ? e.bucketMs >= 864e5 ? Ut(t.peak.t) : ct(t.peak.t) : void 0
        }
      ),
      /* @__PURE__ */ o(Se, { label: d("stat.counter_now"), value: i })
    ] });
  }
  return /* @__PURE__ */ o("div", { class: "stats", children: [
    /* @__PURE__ */ o(Se, { label: d("stat.now"), value: i }),
    /* @__PURE__ */ o(Se, { label: d("stat.min"), value: t.min ? ve(t.min.v) + c : "—", note: t.min ? Ye(t.min.t, a) : void 0 }),
    /* @__PURE__ */ o(Se, { label: d("stat.max"), value: t.max ? ve(t.max.v) + c : "—", note: t.max ? Ye(t.max.t, a) : void 0 }),
    /* @__PURE__ */ o(Se, { label: d("stat.avg"), value: t.avg != null ? ve(t.avg) + c : "—" })
  ] });
}
function Z4({ series: e, unit: t, range: n }) {
  const a = e.kind === "timeline" ? e.segments.slice().reverse().slice(0, 60).map((c) => [Ye(c.from, n), c.on ? d("switch.on") : c.on === null ? d("chart.no_connection") : d("switch.off"), "—"]) : e.points.slice().reverse().slice(0, 60).map((c) => [
    e.kind === "bars" && e.bucketMs >= 864e5 ? Ut(c.t) : Ye(c.t, n),
    ve(c.v) + (t ? " " + t : ""),
    c.min != null && c.max != null ? ve(c.min) + " … " + ve(c.max) : "—"
  ]), i = e.kind === "line" && e.points.some((c) => c.min != null);
  return /* @__PURE__ */ o("div", { class: "table-wrap", children: /* @__PURE__ */ o("table", { class: "diag", children: /* @__PURE__ */ o("tbody", { children: a.map((c, s) => /* @__PURE__ */ o("tr", { children: [
    /* @__PURE__ */ o("td", { children: c[0] }),
    /* @__PURE__ */ o("td", { class: "strong", children: c[1] }),
    i && /* @__PURE__ */ o("td", { class: "muted", children: c[2] })
  ] }, s)) }) }) });
}
function $4(e) {
  const t = ae(), [n, a] = _(e.entities[0]), [i, c] = _("24h"), [s, l] = _(null), [f, h] = _(""), [u, p] = _([]), [r, m] = _(!1), A = X(null), w = va(A).w || 600, b = t.states[n], z = yn(t, n).trim(), v = Wc(b);
  H(() => {
    Q4(t, e.entities[0]).then((g) => p(g.filter((E) => !!t.states[E])), () => {
    });
  }, [e.entities[0]]), H(() => {
    if (!b) return;
    let g = !0;
    return l(null), h(""), j4(t, b, i).then(
      (E) => {
        g && l(E);
      },
      (E) => {
        g && h(E.message);
      }
    ), () => {
      g = !1;
    };
  }, [n, i, t.status]);
  const y = e.entities.concat(u.filter((g) => e.entities.indexOf(g) === -1)).filter((g) => g === n || at(t, g)), N = Y4(y.map((g) => Mo(t, g))), M = !b || Tt(b.state) ? d("sensor.no_data") : v === "timeline" ? b.state === "on" ? d("switch.on") : b.state === "off" ? d("switch.off") : b.state : ve(parseFloat(b.state)) + (z ? " " + z : ""), D = n.split(".")[0];
  return D === "weather" ? /* @__PURE__ */ o(rt, { title: Mo(t, n), onClose: e.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: A, children: /* @__PURE__ */ o(Cc, { card: { id: "detail", type: "weather", title: "", x: 0, y: 0, w: 6, h: 6, items: [{ entity: n }] }, size: { w, h: 560 } }) }) }) : /* @__PURE__ */ o(rt, { title: Mo(t, n), onClose: e.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: A, children: [
    /* @__PURE__ */ o("div", { class: "detail-hero", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ o("div", { class: "hero-value", children: M }),
        b && /* @__PURE__ */ o("div", { class: "muted small", children: d("detail.updated", { when: Ye(Date.parse(b.last_changed || "") || Date.now(), "7d") }) })
      ] }),
      U4.indexOf(D) !== -1 && b && /* @__PURE__ */ o(G4, { entity: n }, n)
    ] }),
    y.length > 1 && /* @__PURE__ */ o("div", { class: "chips", children: y.map((g, E) => {
      const x = t.states[g], C = !x || Tt(x.state) ? "—" : isNaN(parseFloat(x.state)) ? x.state === "on" ? d("chip.state_on") : x.state === "off" ? d("chip.state_off") : x.state : ve(parseFloat(x.state)) + yn(t, g);
      return /* @__PURE__ */ o("button", { class: "chip" + (g === n ? " active" : ""), onClick: () => a(g), children: [
        /* @__PURE__ */ o("span", { children: N[E] }),
        /* @__PURE__ */ o("b", { children: C })
      ] }, g);
    }) }),
    /* @__PURE__ */ o("div", { class: "detail-tools", children: [
      /* @__PURE__ */ o("div", { class: "seg", children: W4.map((g) => /* @__PURE__ */ o("button", { class: g === i ? "active" : "", onClick: () => c(g), children: d("range." + g) }, g)) }),
      /* @__PURE__ */ o("button", { class: "chip-btn" + (r ? " on" : ""), onClick: () => m(!r), children: [
        /* @__PURE__ */ o(gl, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("detail.table") })
      ] })
    ] }),
    f && /* @__PURE__ */ o("div", { class: "chart-empty c-red", children: d("detail.load_error", { error: f }) }),
    !f && !s && /* @__PURE__ */ o("div", { class: "chart-empty", children: d("common.loading") }),
    s && (r ? /* @__PURE__ */ o(Z4, { series: s, unit: z, range: i }) : /* @__PURE__ */ o(Pl, { series: s, unit: z, range: i, width: w })),
    s && /* @__PURE__ */ o(X4, { series: s, sum: q4(s), unit: z, range: i, current: M }),
    s && s.kind !== "timeline" && i !== "24h" && /* @__PURE__ */ o("div", { class: "muted small detail-foot", children: [
      s.kind === "bars" ? d("detail.foot_bars") : d(i === "7d" ? "detail.foot_hourly" : "detail.foot_daily"),
      " · ",
      d("detail.days", { n: Math.round(Qc[i] / 864e5) })
    ] })
  ] }) });
}
function Uc(e, t, n) {
  const a = (i) => i.split(",").map((c) => e + c).join(",");
  return a(".accent-text") + "{color:" + t + "}" + a(".light.on .light-icon") + "{background:" + t + "}" + a(".light.on") + "{border-color:" + t + ";background:" + n + "}" + a(".seg .active") + "{background:" + n + ";color:" + t + "}" + a(".room-temp sup") + "{color:" + t + "}";
}
function J4(e) {
  const t = parseInt(e.slice(1), 16);
  return "rgba(" + (t >> 16) + "," + (t >> 8 & 255) + "," + (t & 255) + ",0.2)";
}
const K4 = Object.keys(Mt).map((e) => Uc(".tint-" + e + " ", Mt[e], J4(Mt[e]))).join("");
function e3() {
  const e = Re(), t = x2(), n = ia(), { settings: a, layout: i, sync: c, homes: s, active: l } = e.state;
  H(() => e.start(), []);
  const f = oa(() => new sa("", () => Promise.resolve("")), []), h = e.card ? e.card.client : e.haClient || f, [u, p] = _(""), r = (I) => {
    const R = s.findIndex((ue) => ue.id === l), $ = s[(R + I + s.length) % s.length];
    !$ || $.id === l || (p(I > 0 ? "next" : "prev"), B(null), e.setActive($.id));
  }, m = (I) => {
    p(I > 0 ? "next" : "prev"), B(null), e.step(I);
  }, A = e.photoUrls, w = A.length, [b, z] = _(0), v = w ? A[b % w] : "";
  H(() => {
    const I = e.frameClient;
    if (!I || !v || /^(data|blob):/.test(v)) return;
    const R = v.replace(/^https?:\/\/[^/]+/, "");
    Lt(I, { photo: decodeURIComponent(R.split("?")[0].split("/").pop() || ""), photo_url: R });
  }, [v, e.frameClient]), H(() => {
    e.frameClient && Lt(e.frameClient, { screen: l + "/" + e.state.screen, display: { w: window.innerWidth, h: window.innerHeight } });
  }, [l, e.state.screen, e.frameClient]);
  const [y, N] = _(e.ui.controls), [M, D] = _(!1), g = X(null);
  H(() => {
    y || D(!1);
  }, [y]), H(() => {
    if (!M) return;
    const I = () => D(!1);
    return document.addEventListener("mousedown", I, !0), document.addEventListener("touchstart", I, !0), () => {
      document.removeEventListener("mousedown", I, !0), document.removeEventListener("touchstart", I, !0);
    };
  }, [M]), Ve(() => {
    vr(y && !M), wr(!y);
  }, [y, M]);
  const [E, x] = _(e.ui.editing);
  H(() => {
    e.ui.controls = y, e.ui.editing = E;
  }, [y, E]);
  const [C, L] = _(!1), [j, Q] = _(null), U = (I, R) => Q({ feeds: I, index: R }), Z = X(0);
  H(() => e.onCommand((I) => {
    if (I.command === "next_photo") z((R) => R + 1);
    else if (I.command === "show_panel") N(!0);
    else if (I.command === "show_photos")
      N(!1), B(null), Q(null);
    else if (I.command === "reload") location.reload();
    else if (I.command === "update_apk") D2();
    else if (I.command === "show_screen" && I.screen) {
      const R = I.screen.split("/");
      e.setActive(R[0], R[1]), N(!0);
    } else if (I.command === "show_camera" && I.entity) {
      if (!h.cameraStreamUrl(I.entity)) return;
      const $ = h.states[I.entity], ue = $ && $.attributes.friendly_name || I.entity;
      Q({ feeds: [{ entity: I.entity, name: ue }], index: 0 }), clearTimeout(Z.current), Z.current = window.setTimeout(() => Q(null), (I.duration || 30) * 1e3);
    }
  }), [h]);
  const [ee, B] = _(null), [T, V] = _(null), [J, q] = _(!1), [S, W] = _(null), [te, le] = _(!0), [_e, pe] = _(""), se = mr(_e || void 0);
  H(() => {
    const I = !!e.card && !e.card.standalone;
    se && !I && !Ft && Ar(se.edgeTop, se.edgeBottom);
  }, [se]);
  const fe = ee && i.cards.filter((I) => I.id === ee)[0] || null, de = c === "local" && !e.haClient;
  H(() => {
    de && L(!0);
  }, [de]);
  const K = e.screenOn || !!j;
  H(() => cr(K, e.brightness), [K, e.brightness]);
  const ye = lr(K, e.brightness);
  H(() => rr(() => e.wakeScreen()), []), H(() => {
    if (w < 2 || !K || y) return;
    const I = setInterval(() => z((R) => (R + 1) % w), a.slideIntervalMs);
    return () => clearInterval(I);
  }, [w, a.slideIntervalMs, K, b, y]), H(() => {
    if (!y) {
      ao(!0);
      return;
    }
    const I = k.current;
    let R = 0;
    const $ = () => {
      clearTimeout(R), R = window.setTimeout(() => ao(!1), 800);
    }, ue = () => {
      clearTimeout(R), ao(!0);
    };
    return $(), I && (I.addEventListener("touchstart", ue), I.addEventListener("mousedown", ue), I.addEventListener("touchend", $), I.addEventListener("mouseup", $)), () => {
      clearTimeout(R), I && (I.removeEventListener("touchstart", ue), I.removeEventListener("mousedown", ue), I.removeEventListener("touchend", $), I.removeEventListener("mouseup", $));
    };
  }, [y]);
  const [Ae, ze] = _(null), O = n2((I) => {
    w < 2 || (z((R) => (R % w + I + w) % w), ze((R) => ({ dir: I, key: R ? R.key + 1 : 1 })));
  }, [w]);
  H(() => {
    if (!Ae) return;
    const I = setTimeout(() => ze(null), 700);
    return () => clearTimeout(I);
  }, [Ae]), H(() => {
    let I = window.setTimeout(() => le(!1), 8e3);
    const R = k.current, $ = () => {
      e.ui.controls || (le(!0), clearTimeout(I), I = window.setTimeout(() => le(!1), 5e3));
    };
    return R && (R.addEventListener("touchstart", $), R.addEventListener("mousedown", $)), () => {
      clearTimeout(I), R && (R.removeEventListener("touchstart", $), R.removeEventListener("mousedown", $));
    };
  }, []);
  const F = C || !!j || !!T || J || !!S, Y = F || !!fe;
  Ve(() => {
    kr(Y);
  }, [Y]);
  const k = X(null), G = X(null), be = X(null), ge = X(null);
  H(() => {
    const I = k.current;
    if (!I) return;
    const R = () => {
      I.scrollTop = 0, I.scrollLeft = 0;
    };
    return I.addEventListener("scroll", R), () => I.removeEventListener("scroll", R);
  }, []);
  const [we, Le] = _(!1);
  Cr({ root: k, controls: G, ambient: be, soft: ge }, y, N, !Y && !we, () => Le(!0), O);
  const At = X(() => !1);
  At.current = () => {
    if (j) Q(null);
    else if (S) W(null);
    else if (T) V(null);
    else if (J) q(!1);
    else if (C) L(!1);
    else if (fe) B(null);
    else if (E) x(!1);
    else if (y) N(!1);
    else return !1;
    return !0;
  }, H(() => {
    const I = ($) => {
      const ue = $.key || "", xe = $.target, Xn = !!xe && (/^(TEXTAREA|SELECT)$/.test(xe.tagName) || xe.tagName === "INPUT" && xe.type !== "range" && xe.type !== "checkbox" && xe.type !== "radio");
      if (yo && ($.keyCode === 403 || ue === "ColorF0Red")) {
        $.preventDefault(), wo();
        return;
      }
      if (Rc($, Xn)) {
        if (Xn && xe) {
          xe.blur(), $.preventDefault();
          return;
        }
        if (!y && !Y) {
          yo && ($.preventDefault(), wo());
          return;
        }
        if (we) return;
        At.current() ? (mn(!0), $.preventDefault()) : yo && ($.preventDefault(), wo());
        return;
      }
      if (!y && !Y || we || Xn) return;
      const gt = a4(ue), Zn = document.querySelectorAll(".modal, .sheet-layer, .lock-modal"), $n = Zn.length ? Zn[Zn.length - 1] : M ? g.current : G.current;
      $n && (gt && xe && xe.tagName === "INPUT" && (gt === "left" || gt === "right") || (gt ? (mn(!0), s4($n, gt), $.preventDefault()) : (ue === "Enter" || ue === " ") && c4($n) && $.preventDefault()));
    }, R = () => mn(!1);
    return document.addEventListener("keydown", I), document.addEventListener("mousedown", R, !0), document.addEventListener("touchstart", R, !0), () => {
      document.removeEventListener("keydown", I), document.removeEventListener("mousedown", R, !0), document.removeEventListener("touchstart", R, !0);
    };
  }, [Y, we, y, M]), H(() => {
    if (!document.documentElement.classList.contains("kbd-nav")) return;
    const I = window.setTimeout(() => {
      const R = document.querySelectorAll(".modal, .sheet-layer, .lock-modal");
      R.length && r4(R[R.length - 1]);
    }, 60);
    return () => clearTimeout(I);
  }, [ee, C, !!T, J, !!S, !!j]), H(() => {
    const I = window;
    return I.SmartFrameBack = () => (document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: !0, cancelable: !0 })), !0), () => {
      delete I.SmartFrameBack;
    };
  }, []);
  const Xe = (y || !!fe) && !F && !E;
  H(() => {
    if (!Xe || !a.idleSec || Ft) return;
    let I = 0;
    const R = () => {
      clearTimeout(I), I = window.setTimeout(() => {
        N(!1), B(null), e.goStart();
      }, a.idleSec * 1e3);
    }, $ = ["touchstart", "mousedown", "keydown"];
    return $.forEach((ue) => document.addEventListener(ue, R)), R(), () => {
      clearTimeout(I), $.forEach((ue) => document.removeEventListener(ue, R));
    };
  }, [Xe, a.idleSec]);
  const Gn = (I) => {
    const R = i.cards.some((xe) => xe.id === I.id), $ = Ot(I), ue = R ? i.cards.map((xe) => xe.id === I.id ? $ : xe) : i.cards.concat({ ...$, y: _n(i.cards) });
    e.saveLayout({ ...i, cards: n1(ue, ue.filter((xe) => xe.id === I.id)[0]) }), V(null);
  };
  return /* @__PURE__ */ o(ca.Provider, { value: h, children: /* @__PURE__ */ o(Xi.Provider, { value: W, children: /* @__PURE__ */ o("div", { class: "root q-" + n, children: [
    /* @__PURE__ */ o("style", { children: K4 + (se ? Uc("", se.accent, se.accentSoft) : "") }),
    /* @__PURE__ */ o("div", { class: "app" + (y && M ? " tv-home" : ""), ref: k, lang: t, children: [
      /* @__PURE__ */ o(Ml, { urls: A, index: b % Math.max(w, 1), tone: se, soft: y, softRef: ge, onShow: pe }),
      /* @__PURE__ */ o(cn.Provider, { value: !y || M, children: [
        /* @__PURE__ */ o(
          S0,
          {
            visible: !y || M,
            innerRef: be,
            onSheet: (I) => B(I.id),
            onConnection: () => L(!0),
            showHint: te && !fe,
            onHome: () => {
              le(!1), N(!0);
            },
            photoThumb: se ? se.thumb : void 0,
            customizing: we,
            onDone: () => Le(!1)
          }
        ),
        /* @__PURE__ */ o(
          h4,
          {
            enabled: !y && !Y && !we,
            onStep: O,
            onSheet: (I) => B(I.id),
            onHome: () => {
              le(!1), D(!0), N(!0);
            }
          }
        )
      ] }),
      Ae && /* @__PURE__ */ o("div", { class: "photo-step " + (Ae.dir > 0 ? "next" : "prev"), children: Ae.dir > 0 ? /* @__PURE__ */ o(Un, { size: 40, strokeWidth: 1.6 }) : /* @__PURE__ */ o(ua, { size: 40, strokeWidth: 1.6 }) }, Ae.key),
      /* @__PURE__ */ o(cn.Provider, { value: y && !M, children: /* @__PURE__ */ o(
        n4,
        {
          innerRef: G,
          visible: y && !M,
          editing: E,
          paused: F || !!fe,
          onEditing: x,
          onPhotos: () => N(!1),
          onSettings: () => L(!0),
          onCamera: U,
          onEditCard: (I) => V({ card: I, isNew: !1 }),
          homes: s,
          active: l,
          slide: u,
          onSwitchHome: r,
          onStep: m,
          onAddCard: () => q(!0)
        }
      ) }),
      y && M && /* @__PURE__ */ o(cn.Provider, { value: !0, children: /* @__PURE__ */ o(
        p4,
        {
          innerRef: g,
          covered: Y,
          onOpen: (I) => B(I.id),
          onPhotos: () => N(!1)
        }
      ) })
    ] }),
    fe && /* @__PURE__ */ o(H4, { card: fe, tone: se, onCamera: U, onClose: () => B(null) }),
    ye > 0 && /* @__PURE__ */ o(
      "div",
      {
        class: "screen-dim" + (K ? "" : " asleep"),
        style: { opacity: ye },
        onClick: K ? void 0 : () => e.wakeScreen()
      }
    ),
    j && /* @__PURE__ */ o(
      S4,
      {
        feeds: j.feeds,
        index: j.index,
        onIndex: (I) => Q((R) => R && { ...R, index: I }),
        onClose: () => Q(null)
      }
    ),
    C && /* @__PURE__ */ o(
      z4,
      {
        onClose: () => L(!1)
      }
    ),
    J && /* @__PURE__ */ o(E4, { onClose: () => q(!1), onPick: (I) => {
      q(!1), V({ card: I, isNew: !0 });
    } }),
    T && /* @__PURE__ */ o(
      T4,
      {
        card: T.card,
        onSave: Gn,
        onDelete: T.isNew ? void 0 : () => {
          e.saveLayout({ ...i, cards: i.cards.filter((I) => I.id !== T.card.id) }), V(null);
        },
        onClose: () => V(null)
      }
    ),
    S && /* @__PURE__ */ o($4, { entities: S, onClose: () => W(null) }, S.join(","))
  ] }) }) });
}
class t3 extends sa {
  constructor() {
    super("", () => Promise.resolve("")), this.hass = null;
  }
  // HA присылает новый hass при каждом изменении любого состояния — просто перерисовываемся.
  setHass(t) {
    const n = !this.hass;
    this.hass = t, jn(t.language), t.states !== this.states && (this.states = t.states, this.loaded = !0, this.status !== "connected" ? this.setStatus("connected") : this.emit()), n && this.loadRegistry();
  }
  get isAdmin() {
    return !!(this.hass && this.hass.user && this.hass.user.is_admin);
  }
  fetch(t, n = {}) {
    const a = this.hass;
    if (a && a.fetchWithAuth) return a.fetchWithAuth(t, n);
    const i = { ...n.headers || {}, Authorization: "Bearer " + this.accessToken };
    return fetch(t, { ...n, headers: i });
  }
  get accessToken() {
    return this.hass && this.hass.auth && this.hass.auth.data && this.hass.auth.data.access_token || "";
  }
  connect() {
  }
  disconnect() {
  }
  call(t) {
    return this.hass ? this.hass.callWS(t) : Promise.reject(new Error("not connected"));
  }
  callService(t, n, a) {
    return this.hass ? (this.hass.callService(t.split(".")[0], n, a, { entity_id: t }).catch(() => {
    }), !0) : !1;
  }
  subscribeMessage(t, n) {
    if (!this.hass) return () => {
    };
    let a = null, i = !1;
    return this.hass.connection.subscribeMessage(n, t).then((c) => {
      i ? c().catch(() => {
      }) : a = c;
    }, () => {
    }), () => {
      i = !0, a && a().catch(() => {
      });
    };
  }
  // Тот же origin, что у HA: поток камеры по access_token камеры, картинки — относительными путями.
  cameraStreamUrl(t) {
    const n = this.states[t], a = n && n.attributes.access_token;
    return a ? "/api/camera_proxy_stream/" + t + "?token=" + a : "";
  }
  pictureUrl(t) {
    return t || "";
  }
}
function n3(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Co, Mi;
function o3() {
  return Mi || (Mi = 1, Co = {
    webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
    mp4: "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
  }), Co;
}
var Lo, Ci;
function a3() {
  if (Ci) return Lo;
  Ci = 1;
  const { webm: e, mp4: t } = o3(), n = () => typeof navigator < "u" && parseFloat(
    ("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(
      navigator.userAgent
    ) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")
  ) < 10 && !window.MSStream, a = () => "wakeLock" in navigator;
  class i {
    constructor() {
      if (this.enabled = !1, a()) {
        this._wakeLock = null;
        const s = () => {
          this._wakeLock !== null && document.visibilityState === "visible" && this.enable();
        };
        document.addEventListener("visibilitychange", s), document.addEventListener("fullscreenchange", s);
      } else n() ? this.noSleepTimer = null : (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("title", "No Sleep"), this.noSleepVideo.setAttribute("playsinline", ""), this._addSourceToVideo(this.noSleepVideo, "webm", e), this._addSourceToVideo(this.noSleepVideo, "mp4", t), this.noSleepVideo.addEventListener("loadedmetadata", () => {
        this.noSleepVideo.duration <= 1 ? this.noSleepVideo.setAttribute("loop", "") : this.noSleepVideo.addEventListener("timeupdate", () => {
          this.noSleepVideo.currentTime > 0.5 && (this.noSleepVideo.currentTime = Math.random());
        });
      }));
    }
    _addSourceToVideo(s, l, f) {
      var h = document.createElement("source");
      h.src = f, h.type = `video/${l}`, s.appendChild(h);
    }
    get isEnabled() {
      return this.enabled;
    }
    enable() {
      return a() ? navigator.wakeLock.request("screen").then((s) => {
        this._wakeLock = s, this.enabled = !0, console.log("Wake Lock active."), this._wakeLock.addEventListener("release", () => {
          console.log("Wake Lock released.");
        });
      }).catch((s) => {
        throw this.enabled = !1, console.error(`${s.name}, ${s.message}`), s;
      }) : n() ? (this.disable(), console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `), this.noSleepTimer = window.setInterval(() => {
        document.hidden || (window.location.href = window.location.href.split("#")[0], window.setTimeout(window.stop, 0));
      }, 15e3), this.enabled = !0, Promise.resolve()) : this.noSleepVideo.play().then((l) => (this.enabled = !0, l)).catch((l) => {
        throw this.enabled = !1, l;
      });
    }
    disable() {
      a() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : n() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = !1;
    }
  }
  return Lo = i, Lo;
}
var i3 = a3();
const s3 = /* @__PURE__ */ n3(i3);
let $o = null;
const Li = new s3();
function So() {
  const e = navigator.wakeLock;
  return !e || document.visibilityState !== "visible" ? Promise.resolve(!1) : e.request("screen").then(
    (t) => ($o = t, t.addEventListener("release", () => {
      $o = null;
    }), !0),
    () => !1
  );
}
let Si = !1;
function c3() {
  if (Si || (Si = !0, /SmartFrame\//.test(navigator.userAgent))) return;
  So(), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && !$o && So();
  });
  const e = () => {
    document.removeEventListener("touchend", e), document.removeEventListener("click", e), So().then((t) => {
      !t && !Li.isEnabled && Li.enable().catch(() => {
      });
    });
  };
  document.addEventListener("touchend", e), document.addEventListener("click", e);
}
function r3(e) {
  const t = X(null), [n, a] = _(900);
  H(() => {
    const l = () => {
      t.current && a(t.current.clientWidth);
    };
    return l(), window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, []);
  const { w: i, h: c } = e.disp, s = Math.min(1, n / i, window.innerHeight * 0.72 / c);
  return /* @__PURE__ */ o("div", { class: "admin-screen-wrap", ref: t, children: /* @__PURE__ */ o("div", { class: "admin-iframe-box", style: { width: Math.round(i * s) + "px", height: Math.round(c * s) + "px" }, children: /* @__PURE__ */ o(
    "iframe",
    {
      src: "/photoframe/index.html?preview=1&frame_id=" + encodeURIComponent(e.frame),
      title: "preview",
      style: { width: i + "px", height: c + "px", transform: "scale(" + s + ")" }
    },
    i + "x" + c + e.frame
  ) }) });
}
function l3(e) {
  if (!e) return null;
  if (e.display && e.display.w && e.display.h) return e.display;
  const t = e.displays || {};
  return t.landscape || t.portrait || null;
}
function d3(e) {
  return e.h > e.w ? "portrait" : "landscape";
}
function f3(e) {
  const [t, n] = _(null), [a, i] = _(""), [c, s] = _(""), [l, f] = _({ landscape: null, portrait: null }), [h, u] = _(null), [p, r] = _("clock"), [m, A] = _(""), [w, b] = _("photo"), z = () => {
    i(""), e.hass.callWS({ type: "photoframe/frames" }).then((S) => {
      n(S.frames), !c && S.frames.length && v(S.frames[0]);
    }, (S) => i(S.message || String(S)));
  };
  H(z, []);
  const v = (S) => {
    s(S.frame_id), f({ landscape: $e(S.grid), portrait: $e(S.grid_portrait) }), A("");
  }, y = t && t.filter((S) => S.frame_id === c)[0], N = l3(y), M = N || { w: 1280, h: 800 }, D = d3(M), g = !!N, E = h || l[D], x = (S) => {
    f({ ...l, [D]: S }), A("");
  }, C = (S, W) => e.hass.callWS({ type: "photoframe/frame/set_lockscreen", frame_ids: S, patch: W }), L = () => {
    y && (A(d("admin.saving")), C([y.frame_id], { grid: l.landscape, gridPortrait: l.portrait }).then(
      () => {
        A(d(y.online ? "admin.saved_online" : "admin.saved_offline")), z();
      },
      (S) => A(S.message || String(S))
    ));
  }, [j, Q] = _(!1), [U, Z] = _([]), [ee, B] = _("all"), T = (t || []).filter((S) => S.frame_id !== c), V = () => {
    if (!y || !U.length) return;
    const S = { grid: l.landscape, gridPortrait: l.portrait }, W = ee === "all" ? { ...ha(y.lockscreen), ...S } : S;
    A(d("admin.saving")), C(U, W).then((te) => {
      A(d("admin.copied", { n: U.length, online: te.online.length })), Q(!1), Z([]), z();
    }, (te) => A(te.message || String(te)));
  }, J = (S) => {
    if (!E) return;
    const W = { ...E[p], ...S };
    W.ha || delete W.ha, W.va || delete W.va, x({ ...E, [p]: W });
  }, q = E ? E[p] : null;
  return /* @__PURE__ */ o("div", { class: "admin", children: [
    /* @__PURE__ */ o("header", { class: "admin-head", children: [
      /* @__PURE__ */ o("h1", { children: d("admin.title") }),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: z, children: [
        /* @__PURE__ */ o(dl, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("admin.refresh") })
      ] })
    ] }),
    a && /* @__PURE__ */ o("div", { class: "c-red small", children: a }),
    t && !t.length && /* @__PURE__ */ o("p", { class: "hint", children: d("admin.no_frames") }),
    /* @__PURE__ */ o("div", { class: "admin-body", children: [
      /* @__PURE__ */ o("nav", { class: "admin-list", children: (t || []).map((S) => /* @__PURE__ */ o("button", { class: "admin-frame" + (S.frame_id === c ? " on" : ""), onClick: () => v(S), children: [
        /* @__PURE__ */ o("span", { class: "dot" + (S.online ? " online" : "") }),
        /* @__PURE__ */ o("span", { class: "admin-frame-name", children: S.name || S.frame_id }),
        /* @__PURE__ */ o("small", { children: S.model || "" })
      ] }, S.frame_id)) }),
      y && /* @__PURE__ */ o("section", { class: "admin-editor", children: [
        /* @__PURE__ */ o("div", { class: "admin-tools", children: [
          /* @__PURE__ */ o("div", { class: "seg", children: [
            /* @__PURE__ */ o("button", { class: w === "photo" ? "active" : "", onClick: () => b("photo"), children: [
              /* @__PURE__ */ o(ma, { size: 14 }),
              " ",
              d("admin.mode_photo")
            ] }),
            /* @__PURE__ */ o("button", { class: w === "dashboard" ? "active" : "", onClick: () => b("dashboard"), children: [
              /* @__PURE__ */ o(Ms, { size: 14 }),
              " ",
              d("admin.mode_dashboard")
            ] })
          ] }),
          w === "photo" && /* @__PURE__ */ o("label", { class: "check", children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                checked: !!l[D],
                onChange: (S) => x(S.currentTarget.checked ? v1(qt(), D === "landscape") : null)
              }
            ),
            d("admin.use_grid")
          ] }),
          /* @__PURE__ */ o("span", { class: "hint small", children: [
            M.w,
            "×",
            M.h,
            g ? "" : " · " + d("admin.size_guess")
          ] })
        ] }),
        w === "dashboard" && /* @__PURE__ */ o(ne, { children: [
          /* @__PURE__ */ o("p", { class: "hint small", children: d("admin.dashboard_hint") }),
          /* @__PURE__ */ o(r3, { disp: M, frame: c })
        ] }),
        w === "photo" && /* @__PURE__ */ o(ne, { children: [
          /* @__PURE__ */ o("div", { class: "admin-screen-wrap", children: /* @__PURE__ */ o("div", { class: "admin-screen", style: { aspectRatio: M.w + " / " + M.h, ...M.h > M.w ? { height: "60vh" } : { width: "100%" } }, children: E ? /* @__PURE__ */ o(ne, { children: [
            ["clock", "widgets"].map((S) => {
              const W = E[S];
              return /* @__PURE__ */ o("div", { class: "admin-block admin-" + S, style: {
                left: Ge + W.x / ie * De + "%",
                top: Ge + W.y / ie * De + "%",
                width: W.w / ie * De + "%",
                height: W.h / ie * De + "%"
              }, children: S === "clock" ? "12:00" : "◉ ◉ ◉" }, S);
            }),
            /* @__PURE__ */ o(
              Hc,
              {
                grid: E,
                onDraft: u,
                onDone: (S) => {
                  u(null), x(S);
                },
                onTap: (S) => r(S)
              }
            )
          ] }) : /* @__PURE__ */ o("p", { class: "admin-off", children: d("admin.no_grid") }) }) }),
          E && q && /* @__PURE__ */ o("div", { class: "admin-align", children: [
            /* @__PURE__ */ o("div", { class: "seg", children: [
              /* @__PURE__ */ o("button", { class: p === "clock" ? "active" : "", onClick: () => r("clock"), children: d("lock.clock") }),
              /* @__PURE__ */ o("button", { class: p === "widgets" ? "active" : "", onClick: () => r("widgets"), children: d("lock.widgets") })
            ] }),
            /* @__PURE__ */ o("div", { class: "option", children: [
              /* @__PURE__ */ o("label", { children: d("lock.align_h") }),
              /* @__PURE__ */ o("div", { class: "seg", children: ["", "left", "center", "right"].map((S) => /* @__PURE__ */ o("button", { class: (q.ha || "") === S ? "active" : "", onClick: () => J({ ha: S || void 0 }), children: d("lock.align." + (S || "auto")) }, S)) })
            ] }),
            /* @__PURE__ */ o("div", { class: "option", children: [
              /* @__PURE__ */ o("label", { children: d("lock.align_v") }),
              /* @__PURE__ */ o("div", { class: "seg", children: ["", "top", "middle", "bottom"].map((S) => /* @__PURE__ */ o("button", { class: (q.va || "") === S ? "active" : "", onClick: () => J({ va: S || void 0 }), children: d("lock.align." + (S || "auto")) }, S)) })
            ] })
          ] }),
          j && /* @__PURE__ */ o("div", { class: "admin-copy", children: [
            /* @__PURE__ */ o("div", { class: "seg", children: [
              /* @__PURE__ */ o("button", { class: ee === "all" ? "active" : "", onClick: () => B("all"), children: d("admin.copy_all") }),
              /* @__PURE__ */ o("button", { class: ee === "grid" ? "active" : "", onClick: () => B("grid"), children: d("admin.copy_grid") })
            ] }),
            ee === "all" && !y.lockscreen && /* @__PURE__ */ o("p", { class: "hint small", children: d("admin.copy_no_look") }),
            T.map((S) => /* @__PURE__ */ o("label", { class: "check", children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  checked: U.indexOf(S.frame_id) !== -1,
                  onChange: (W) => Z(W.currentTarget.checked ? U.concat(S.frame_id) : U.filter((te) => te !== S.frame_id))
                }
              ),
              (S.name || S.frame_id) + (S.online ? "" : " · " + d("layout.grid_offline"))
            ] }, S.frame_id)),
            !T.length && /* @__PURE__ */ o("p", { class: "hint small", children: d("admin.copy_none") }),
            /* @__PURE__ */ o("div", { class: "row-btns", children: [
              /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => Q(!1), children: /* @__PURE__ */ o("span", { children: d("common.cancel") }) }),
              /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", disabled: !U.length, onClick: V, children: d("admin.copy_go", { n: U.length }) })
            ] })
          ] }),
          /* @__PURE__ */ o("div", { class: "admin-foot", children: [
            /* @__PURE__ */ o("span", { class: "hint small", children: m }),
            /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => Q(!j), children: /* @__PURE__ */ o("span", { children: d("admin.copy_to") }) }),
            /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: L, children: d("admin.save") })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const h3 = ':host{display:block;min-height:100vh;background:#0b0d14;color:#f5f7fb;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif}.admin{max-width:1200px;margin:0 auto;padding:16px 20px}.admin-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.admin-head h1{font-size:22px;font-weight:600;margin:0}.admin-body{display:flex;align-items:flex-start}.admin-list{width:230px;flex-shrink:0;margin-right:18px;display:flex;flex-direction:column}.admin-frame{display:flex;align-items:center;flex-wrap:wrap;text-align:left;padding:10px 12px;border-radius:12px;margin-bottom:6px;background:rgba(255,255,255,0.05)}.admin-frame.on{background:rgba(125,211,252,0.18)}.admin-frame .dot{width:8px;height:8px;border-radius:50%;background:#64748b;margin-right:8px}.admin-frame .dot.online{background:#4ade80}.admin-frame-name{flex:1;font-size:14px}.admin-frame small{width:100%;padding-left:16px;color:rgba(255,255,255,0.5);font-size:11px}.admin-editor{flex:1;min-width:0}.admin-tools{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:12px}.admin-tools > *{margin-right:14px}.admin-tools .check{margin:0 16px 0 0}.admin-screen-wrap{display:flex;justify-content:center}.admin-screen{position:relative;max-width:100%;max-height:70vh;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,#1e3a5f,#3b2f5c 50%,#5c3a2f);box-shadow:0 0 0 1px rgba(255,255,255,0.15)}.admin-block{position:absolute;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.75);font-size:20px;pointer-events:none}.admin-off{position:absolute;top:50%;left:0;right:0;text-align:center;color:rgba(255,255,255,0.6)}.admin-align{margin-top:14px;max-width:560px}.admin-iframe-box{position:relative;overflow:hidden;border-radius:14px;box-shadow:0 0 0 1px rgba(255,255,255,0.15);background:#000}.admin-iframe-box iframe{position:absolute;top:0;left:0;border:0;transform-origin:0 0}.admin-foot{display:flex;align-items:center;justify-content:flex-end;margin-top:16px}.admin-foot .hint{margin-right:12px}.admin-foot .btn{margin-right:10px}.admin-copy{margin-top:16px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,0.05);max-width:560px}.admin-copy .check{display:flex;margin:8px 0}.admin-copy .row-btns{display:flex;justify-content:flex-end;margin-top:10px}.admin-copy .row-btns > *{margin-left:8px}@media (max-width:700px){.admin-body{flex-direction:column}.admin-list{width:100%;margin:0 0 14px}}';
class u3 extends HTMLElement {
  constructor() {
    super(...arguments), this.root = null, this._hass = null;
  }
  set hass(t) {
    const n = !this._hass;
    this._hass = t, n && this.mount();
  }
  connectedCallback() {
    this.mount();
  }
  mount() {
    if (this.root || !this._hass || !this.isConnected) return;
    const t = this.shadowRoot || this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = h3 + Qi.replace(":root {", ":host {");
    const a = document.createElement("div");
    t.appendChild(n), t.appendChild(a), this.root = a, Do(/* @__PURE__ */ o(f3, { hass: this._hass }), a);
  }
}
customElements.get("photoframe-admin") || customElements.define("photoframe-admin", u3);
const m3 = ':host{display:block;position:relative;height:calc(100vh - var(--header-height, 56px));min-height:420px;overflow:hidden;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif;color:#f5f7fb;background:#000;border-radius:var(--ha-card-border-radius,0)}#app{position:absolute;top:0;left:0;right:0;bottom:0}';
class p3 extends HTMLElement {
  constructor() {
    super(...arguments), this.client = new t3(), this.backend = null, this.config = { type: "custom:photoframe-card" }, this.root = null, this.exitKiosk = null, this.offKiosk = null, this.offIntegration = null;
  }
  // Включить/выключить киоск по текущим настройкам. Фронтенд HA дорисовывается не сразу —
  // поэтому вызывается и при монтировании, и при каждом обновлении hass, пока не получится.
  syncKiosk() {
    const t = this.config.kiosk != null ? this.config.kiosk : !!(this.backend && this.backend.integration && this.backend.config.kiosk), n = this.isConnected && X0(!!t);
    n && !this.exitKiosk && (this.exitKiosk = K0()), !n && this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null);
  }
  setConfig(t) {
    this.config = t, this.backend && !this.backend.integration && (this.backend.config = t, re.applyCardConfig(t)), this.syncKiosk();
  }
  set hass(t) {
    this.client.setHass(t), this.syncKiosk(), this.backend || (this.backend = new zn(this.client, this.config), re.attachCard(this.backend), d1(this.client).then((n) => {
      if (!n) return;
      const a = new zn(this.client, n, void 0, !1, !0);
      this.backend = a, re.attachCard(a), this.isConnected && !this.offIntegration && (this.offIntegration = a.watch((i) => re.applyCardConfig(i))), this.syncKiosk();
    })), this.mount();
  }
  connectedCallback() {
    const t = this.backend;
    t && t.integration && !this.offIntegration && (this.offIntegration = t.watch((n) => re.applyCardConfig(n))), this.mount(), this.offKiosk = G0(() => this.syncKiosk()), this.syncKiosk();
  }
  disconnectedCallback() {
    this.root && Do(null, this.root), this.root = null, this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null), this.offKiosk && (this.offKiosk(), this.offKiosk = null), this.offIntegration && (this.offIntegration(), this.offIntegration = null);
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
    const t = this.shadowRoot || this.attachShadow({ mode: "open" }), n = document.createElement("style");
    n.textContent = m3 + Qi;
    const a = document.createElement("div");
    a.id = "app", t.appendChild(n), t.appendChild(a), this.root = a, Do(/* @__PURE__ */ o(e3, {}), a), c3();
  }
}
customElements.get("photoframe-card") || customElements.define("photoframe-card", p3);
console.info("%c PHOTO-FRAME %c v1.0.0 ", "color:#fff;background:#0891b2;font-weight:700", "color:#0891b2;background:#fff");
V2();
const Jo = window;
Jo.customCards = Jo.customCards || [];
Jo.customCards.push({
  type: "photoframe-card",
  name: "Smart Frame",
  description: "Photo frame with smart-home controls: photos, clock, weather and customizable cards",
  preview: !1
});
var A3 = {
  prefix: "fas",
  iconName: "dog",
  icon: [576, 512, [128021], "f6d3", "M32 112c16.6 0 30.2 12.6 31.8 28.7l.3 6.6C65.8 163.4 79.4 176 96 176l179.1 0 140.9 60.4 0 243.6c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-131.3C296 361 268.8 368 240 368s-56-7-80-19.3L160 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-245.6c-37.3-13.2-64-48.6-64-90.4 0-17.7 14.3-32 32-32zM355.8-32c7.7 0 14.9 3.6 19.6 9.8L392 0 444.1 0c12.7 0 24.9 5.1 33.9 14.1L496 32 552 32c13.3 0 24 10.7 24 24l0 24c0 44.2-35.8 80-80 80l-64 0-7 28-124.7-53.4 31.6-147.2C334.3-23.9 344.2-32 355.8-32zM448 44a20 20 0 1 0 0 40 20 20 0 1 0 0-40z"]
}, g3 = {
  prefix: "fas",
  iconName: "kitchen-set",
  icon: [576, 512, [], "e51a", "M240 144a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288 64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112l71.8 0c8.8-9.8 21.6-16 35.8-16l104 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-104 0c-14.2 0-27-6.2-35.8-16l-71.8 0zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24l0 8 96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-240 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l96 0 0-8c0-13.3 10.7-24 24-24zM288 464l0-112 224 0 0 112c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48zM48 320l128 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-80c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0 32 16 0zM24 464l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, b3 = {
  prefix: "fas",
  iconName: "car",
  icon: [512, 512, [128664, "automobile"], "f1b9", "M135.2 117.4l-26.1 74.6 293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 192c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-320 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 304a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, v3 = {
  prefix: "fas",
  iconName: "map-pin",
  icon: [320, 512, [128205], "f276", "M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]
}, x3 = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]
}, y3 = {
  prefix: "fas",
  iconName: "baby",
  icon: [384, 512, [], "f77c", "M120 88a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM7.7 144.5c13-17.9 38-21.8 55.9-8.8L99.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25l0 36.3-192 0 0-36.3c-15.2-6.7-29.7-15.1-43.3-25L16.5 200.3c-17.9-13-21.8-38-8.8-55.9zM97.5 329.3l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C38 438.6 36.1 417 47.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6l24.3-24.3-26-37.2z"]
}, w3 = {
  prefix: "fas",
  iconName: "truck",
  icon: [576, 512, [128666, 9951], "f0d1", "M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]
}, k3 = {
  prefix: "fas",
  iconName: "bell",
  icon: [448, 512, [128276, 61602], "f0f3", "M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"]
}, _3 = {
  prefix: "fas",
  iconName: "toggle-off",
  icon: [576, 512, [], "f204", "M384 128c70.7 0 128 57.3 128 128S454.7 384 384 384l-192 0c-70.7 0-128-57.3-128-128s57.3-128 128-128l192 0zM576 256c0-106-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192zM192 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]
}, z3 = {
  prefix: "fas",
  iconName: "message",
  icon: [512, 512, ["comment-alt"], "f27a", "M0 352L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120 0c-5.2 0-10.2 1.7-14.4 4.8L166.4 539.2c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24l0-72-32 0c-53 0-96-43-96-96z"]
}, M3 = {
  prefix: "fas",
  iconName: "calendar-days",
  icon: [448, 512, ["calendar-alt"], "f073", "M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]
}, C3 = {
  prefix: "fas",
  iconName: "warehouse",
  icon: [576, 512, [], "f494", "M0 142.1L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-240c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 240c0 17.7 14.3 32 32 32s32-14.3 32-32l0-337.9c0-27.5-17.6-52-43.8-60.7L303.2 5.1c-9.9-3.3-20.5-3.3-30.4 0L43.8 81.4C17.6 90.1 0 114.6 0 142.1zM464 256l-352 0 0 64 352 0 0-64zM112 416l352 0 0-64-352 0 0 64zm352 32l-352 0 0 64 352 0 0-64z"]
}, L3 = {
  prefix: "fas",
  iconName: "circle-pause",
  icon: [512, 512, [62092, "pause-circle"], "f28b", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 192l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, S3 = {
  prefix: "fas",
  iconName: "gift",
  icon: [512, 512, [127873], "f06b", "M321.5 68.8C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-73.3 0 34.8-59.2zm-131 0l34.8 59.2-73.3 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zm89.6-24.3l-24.1 41-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4zM480 272l-200 0 0 208 136 0c35.3 0 64-28.7 64-64l0-144zm-248 0l-200 0 0 144c0 35.3 28.7 64 64 64l136 0 0-208z"]
}, E3 = {
  prefix: "fas",
  iconName: "gauge",
  icon: [512, 512, ["dashboard", "gauge-med", "tachometer-alt-average"], "f624", "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, I3 = {
  prefix: "fas",
  iconName: "toolbox",
  icon: [512, 512, [129520], "f552", "M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 28.1 0c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9l0 76.1-136 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-144 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-136 0 0-76.1c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1L128 96zM0 416l0-96 136 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 144 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 136 0 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64z"]
}, N3 = {
  prefix: "fas",
  iconName: "power-off",
  icon: [512, 512, [9211], "f011", "M288 0c0-17.7-14.3-32-32-32S224-17.7 224 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L288 0zM146.3 98.4c14.5-10.1 18-30.1 7.9-44.6s-30.1-18-44.6-7.9C43.4 92.1 0 169 0 256 0 397.4 114.6 512 256 512S512 397.4 512 256c0-87-43.4-163.9-109.7-210.1-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6c49.8 34.8 82.3 92.4 82.3 157.6 0 106-86 192-192 192S64 362 64 256c0-65.2 32.5-122.9 82.3-157.6z"]
}, D3 = {
  prefix: "fas",
  iconName: "signal",
  icon: [512, 512, [128246, "signal-5", "signal-perfect"], "f012", "M488 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400zM360 128c-13.3 0-24 10.7-24 24l0 304c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-13.3-10.7-24-24-24zM280 248c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 208c0 13.3 10.7 24 24 24s24-10.7 24-24l0-208zM152 320c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zM48 384c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-13.3-10.7-24-24-24z"]
}, T3 = {
  prefix: "fas",
  iconName: "display",
  icon: [512, 512, [], "e163", "M448 96l0 256-384 0 0-256 384 0zM64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l144 0-16 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-16-48 144 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 32z"]
}, B3 = {
  prefix: "fas",
  iconName: "unlock",
  icon: [384, 512, [128275], "f09c", "M128 96c0-35.3 28.7-64 64-64 31.7 0 58 23 63.1 53.3 2.9 17.4 19.4 29.2 36.9 26.3s29.2-19.4 26.3-36.9C308.1 14.1 255.5-32 192-32 121.3-32 64 25.3 64 96l0 64c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-192 0 0-64z"]
}, P3 = {
  prefix: "fas",
  iconName: "key",
  icon: [512, 512, [128273], "f084", "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]
}, O3 = {
  prefix: "fas",
  iconName: "tree",
  icon: [448, 512, [127794], "f1bb", "M224-32c7 0 13.7 3.1 18.3 8.5l136 160c6.1 7.1 7.4 17.1 3.5 25.6S369.4 176 360 176l-24.9 0 75.2 88.5c6.1 7.1 7.4 17.1 3.5 25.6S401.4 304 392 304l-38.5 0 88.8 104.5c6.1 7.1 7.4 17.1 3.5 25.6S433.4 448 424 448l-168 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-168 0c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L94.5 304 56 304c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L112.9 176 88 176c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6l136-160C210.3-28.9 217-32 224-32z"]
}, H3 = {
  prefix: "fas",
  iconName: "smog",
  icon: [576, 512, [], "f75f", "M176 288C96.5 288 32 223.5 32 144S96.5 0 176 0c27.2 0 52.6 7.5 74.3 20.6 20.1-13 44-20.6 69.7-20.6 47.4 0 88.7 25.7 110.9 64l1.1 0c61.9 0 112 50.1 112 112 0 60.3-47.6 109.4-107.2 111.9-22.6 20-52.3 32.1-84.8 32.1-32.5 0-62.1-12.1-84.7-32L176 288zM512 392c0 13.3-10.7 24-24 24L24 416c-13.3 0-24-10.7-24-24s10.7-24 24-24l464 0c13.3 0 24 10.7 24 24zM88 464l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm176 0l288 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, F3 = {
  prefix: "fas",
  iconName: "thermometer",
  icon: [512, 512, [], "f491", "M96 382.1l0-88.8c0-14.9 5.9-29.1 16.4-39.6l21.7-21.7 41 41c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 46.1-46.1 41 41c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 46.1-46.1 41 41c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 7.8-7.8c19.4-19.4 45.6-30.2 73-30.2 57 0 103.2 46.2 103.2 103.2 0 27.4-10.9 53.6-30.2 73L258.3 399.6c-10.5 10.5-24.7 16.4-39.6 16.4l-88.8 0-89 89c-9.4 9.4-24.6 9.4-33.9 0S-2.3 480.4 7 471l89-89z"]
}, R3 = {
  prefix: "fas",
  iconName: "bowl-food",
  icon: [512, 512, [], "e4c6", "M0 176c0-35.3 28.7-64 64-64 .5 0 1.1 0 1.6 0 7.4-36.5 39.7-64 78.4-64 15 0 29 4.1 40.9 11.2 13.3-25.7 40.1-43.2 71.1-43.2s57.8 17.6 71.1 43.2c12-7.1 26-11.2 40.9-11.2 38.7 0 71 27.5 78.4 64 .5 0 1.1 0 1.6 0 35.3 0 64 28.7 64 64 0 11.7-3.1 22.6-8.6 32L8.6 208C3.1 198.6 0 187.7 0 176zM0 283.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4 0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"]
}, j3 = {
  prefix: "fas",
  iconName: "temperature-low",
  icon: [512, 512, [], "f76b", "M96 96c0-53 43-96 96-96s96 43 96 96l0 164.7c29.5 26.4 48 64.7 48 107.3 0 79.5-64.5 144-144 144S48 447.5 48 368c0-42.6 18.5-81 48-107.3L96 96zm96 336c35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3l0-28.7c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 28.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64zM464 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 80a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z"]
}, q3 = {
  prefix: "fas",
  iconName: "door-open",
  icon: [448, 512, [], "f52b", "M288 64l64 0 0 416c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-384c0-35.3-28.7-64-64-64l-96 0 0 0-160 0C60.7 0 32 28.7 32 64l0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-416zM160 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Q3 = {
  prefix: "fas",
  iconName: "camera",
  icon: [512, 512, [62258, "camera-alt"], "f030", "M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0-10.4-31.2C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]
}, W3 = {
  prefix: "fas",
  iconName: "rainbow",
  icon: [640, 512, [127752], "f75b", "M320 96C178.6 96 64 210.6 64 352l0 64c0 17.7-14.3 32-32 32S0 433.7 0 416l0-64C0 175.3 143.3 32 320 32S640 175.3 640 352l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64C576 210.6 461.4 96 320 96zm0 112c-79.5 0-144 64.5-144 144l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-114.9 93.1-208 208-208s208 93.1 208 208l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-79.5-64.5-144-144-144zM288 352l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-53 43-96 96-96s96 43 96 96l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z"]
}, U3 = {
  prefix: "fas",
  iconName: "face-grin-stars",
  icon: [512, 512, [129321, "grin-stars"], "f587", "M256 512c141.4 0 256-114.6 256-256 0-24.4-3.4-48.1-9.8-70.5 18.6-36.1-2.7-83.6-46.7-90-46.9-58.3-118.9-95.5-199.5-95.5S103.4 37.3 56.5 95.5c-44 6.4-65.3 53.9-46.7 90-6.4 22.4-9.8 46-9.8 70.5 0 141.4 114.6 256 256 256zM386.7 324.9c11.9-3.7 23.9 6.3 19.6 18.1-22.4 61.3-81.3 105.1-150.3 105.1S128.1 404.2 105.7 342.9c-4.3-11.8 7.7-21.8 19.6-18.1 39.2 12.2 83.7 19.1 130.7 19.1s91.5-6.9 130.7-19.1zm-31.6-231c5.3-10.7 20.5-10.7 25.8 0l20.9 42.4 46.7 6.8c11.8 1.7 16.5 16.2 8 24.5l-33.8 33 8 46.6c2 11.7-10.3 20.7-20.9 15.2l-41.8-22-41.8 22c-10.5 5.5-22.9-3.4-20.9-15.2l8-46.6-33.8-33c-8.5-8.3-3.8-22.8 8-24.5l46.7-6.8 20.9-42.4zm-198.2 0l20.9 42.4 46.7 6.8c11.8 1.7 16.5 16.2 8 24.5l-33.8 33 8 46.6c2 11.7-10.3 20.7-20.9 15.2l-41.8-22-41.8 22c-10.5 5.5-22.9-3.4-20.9-15.2l8-46.6-33.8-33c-8.5-8.3-3.8-22.8 8-24.5l46.7-6.8 20.9-42.4c5.3-10.7 20.5-10.7 25.8 0z"]
}, Y3 = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]
}, V3 = {
  prefix: "fas",
  iconName: "house-lock",
  icon: [640, 512, [], "e510", "M528 224.1c44.2 0 80 35.8 80 80l0 50.6c18.6 6.6 32 24.4 32 45.3l0 96c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48l0-96c0-20.9 13.4-38.7 32-45.3l0-50.6c0-44.2 35.8-80 80-80zM268.6 6.5c12.2-9.3 29.7-8.7 41.2 2l185 171.8C440.2 195 400 244.8 400 304l0 24.4c-19.6 17.6-32 43.1-32 71.5l0 96c0 5.5 .5 10.9 1.3 16.1L144 512c-35.3 0-64-28.7-64-64l0-176-16 0c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8-35.1l224-208 2.4-2zM272 320c-26.5 0-48 21.5-48 48l0 96 96 0 0-87.3c0-16.5 7-31.5 18.4-42.1-8.7-9-20.9-14.6-34.4-14.6l-32 0zm256-47.9c-17.7 0-32 14.3-32 32l0 47.9 64 0 0-47.9c0-17.7-14.3-32-32-32z"]
}, G3 = {
  prefix: "fas",
  iconName: "share-from-square",
  icon: [576, 512, [61509, "share-square"], "f14d", "M384.5 24l0 72-64 0c-79.5 0-144 64.5-144 144 0 93.4 82.8 134.8 100.6 142.6 2.2 1 4.6 1.4 7.1 1.4l2.5 0c9.8 0 17.8-8 17.8-17.8 0-8.3-5.9-15.5-12.8-20.3-8.9-6.2-19.2-18.2-19.2-40.5 0-45 36.5-81.5 81.5-81.5l30.5 0 0 72c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l136-136c9.4-9.4 9.4-24.6 0-33.9L425.5 7c-6.9-6.9-17.2-8.9-26.2-5.2S384.5 14.3 384.5 24zm-272 72c-44.2 0-80 35.8-80 80l0 256c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32c0 8.8-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0z"]
}, X3 = {
  prefix: "fas",
  iconName: "note-sticky",
  icon: [448, 512, [62026, "sticky-note"], "f249", "M64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 213.5c0 17-6.7 33.3-18.7 45.3L322.7 461.3c-12 12-28.3 18.7-45.3 18.7L64 480zM389.5 304L296 304c-13.3 0-24 10.7-24 24l0 93.5 117.5-117.5z"]
}, Z3 = {
  prefix: "fas",
  iconName: "water",
  icon: [512, 512, [], "f773", "M410.6 124.1c20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.8-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9c21.3-16.1 49.9-16.1 71.2 0zm0 144c20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.7-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9c21.3-16.1 49.9-16.1 71.2 0zm-71.2 144c21.3-16.1 49.9-16.1 71.2 0 20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.8-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9z"]
}, $3 = {
  prefix: "fas",
  iconName: "stop",
  icon: [448, 512, [9209], "f04d", "M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32z"]
}, J3 = {
  prefix: "fas",
  iconName: "temperature-high",
  icon: [512, 512, [], "f769", "M96 96c0-53 43-96 96-96s96 43 96 96l0 164.7c29.5 26.4 48 64.7 48 107.3 0 79.5-64.5 144-144 144S48 447.5 48 368c0-42.6 18.5-81 48-107.3L96 96zm96 336c35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3L216 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 212.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64zM464 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM352 80a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z"]
}, K3 = {
  prefix: "fas",
  iconName: "wave-square",
  icon: [512, 512, [], "f83e", "M64 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 288 96 0 0-128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-288-96 0 0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-128z"]
}, e6 = {
  prefix: "fas",
  iconName: "radio",
  icon: [512, 512, [128251], "f8d7", "M494.8 15c12.7-3.7 20-17.1 16.3-29.8S494-34.8 481.3-31L51.8 94.9C42.4 97.6 33.9 102.1 26.6 108 10.5 119.7 0 138.6 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L218.5 96 494.8 15zM368 208a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM64 248c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 272c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 368c-13.3 0-24-10.7-24-24z"]
}, t6 = {
  prefix: "fas",
  iconName: "unlock-keyhole",
  icon: [384, 512, ["unlock-alt"], "f13e", "M192 32c-35.3 0-64 28.7-64 64l0 64 192 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l0-64c0-70.7 57.3-128 128-128 63.5 0 116.1 46.1 126.2 106.7 2.9 17.4-8.8 33.9-26.3 36.9s-33.9-8.8-36.9-26.3C250 55.1 223.7 32 192 32zm40 328c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0z"]
}, n6 = {
  prefix: "fas",
  iconName: "circle-half-stroke",
  icon: [512, 512, [9680, "adjust"], "f042", "M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]
}, o6 = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, a6 = {
  prefix: "fas",
  iconName: "paper-plane",
  icon: [576, 512, [61913], "f1d8", "M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]
}, i6 = {
  prefix: "fas",
  iconName: "table",
  icon: [448, 512, [], "f0ce", "M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-320 0-6.5-.3C25.2 476.4 0 449.1 0 416L0 96C0 60.7 28.7 32 64 32l320 0zM64 320l0 96 128 0 0-96-128 0zm192 0l0 96 128 0 0-96-128 0zM64 256l128 0 0-96-128 0 0 96zm192 0l128 0 0-96-128 0 0 96z"]
}, s6 = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]
}, c6 = {
  prefix: "fas",
  iconName: "battery-half",
  icon: [640, 512, ["battery-3"], "f242", "M528 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l416 0zM112 64c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80L112 64zm56 112c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24l-144 0z"]
}, r6 = {
  prefix: "fas",
  iconName: "clone",
  icon: [512, 512, [], "f24d", "M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z"]
}, l6 = {
  prefix: "fas",
  iconName: "forward",
  icon: [576, 512, [9193], "f04e", "M371.7 43.1C360.1 32 343 28.9 328.3 35.2S304 56 304 72l0 136.3-172.3-165.1C120.1 32 103 28.9 88.3 35.2S64 56 64 72l0 368c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9L304 303.7 304 440c0 16 9.6 30.5 24.3 36.8s31.8 3.2 43.4-7.9l192-184c7.9-7.5 12.3-18 12.3-28.9s-4.5-21.3-12.3-28.9l-192-184z"]
}, d6 = {
  prefix: "fas",
  iconName: "shield-virus",
  icon: [512, 512, [], "e06c", "M253.4 2.9C249.2 1 244.7 0 240 0s-9.2 1-13.4 2.9L38.3 82.8c-22 9.3-38.4 31-38.3 57.2 .5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0 172.4-82.5 213.2-264 213.6-363.2 .1-26.2-16.3-47.9-38.3-57.2L253.4 2.9zM240 128c13.3 0 24 10.7 24 24 0 22.9 27.7 34.4 43.9 18.2 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-16.2 16.2-4.7 43.9 18.2 43.9 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.9 0-34.4 27.7-18.2 43.9 9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-16.2-16.2-43.9-4.7-43.9 18.2 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-22.9-27.7-34.4-43.9-18.2-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c16.2-16.2 4.7-43.9-18.2-43.9-13.3 0-24-10.7-24-24s10.7-24 24-24c22.9 0 34.4-27.7 18.2-43.9-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c16.2 16.2 43.9 4.7 43.9-18.2 0-13.3 10.7-24 24-24zM208 264a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm88 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]
}, f6 = {
  prefix: "fas",
  iconName: "seedling",
  icon: [512, 512, [127793, "sprout"], "f4d8", "M512 32C512 140.1 435.4 230.3 333.6 251.4 325.7 193.3 299.6 141 261.1 100.5 301.2 40 369.9 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"]
}, h6 = {
  prefix: "fas",
  iconName: "star-half",
  icon: [576, 512, [61731], "f089", "M304.1 7.6c0-11.1-7.6-20.7-18.4-23.3s-21.9 2.5-27 12.4L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L291 416.1c8-4.1 13.1-12.4 13.1-21.4l0-387.1z"]
}, u6 = {
  prefix: "fas",
  iconName: "photo-film",
  icon: [640, 512, ["photo-video"], "f87c", "M192 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224zM320 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm156.5 11.5C472.1 100.4 464.4 96 456 96s-16.1 4.4-20.5 11.5l-54 88.3-17.9-25.6c-4.5-6.4-11.8-10.2-19.7-10.2s-15.2 3.8-19.7 10.2l-56 80c-5.1 7.3-5.8 16.9-1.6 24.8S279.1 288 288 288l256 0c8.7 0 16.7-4.7 20.9-12.3s4.1-16.8-.5-24.3l-88-144zM144 128l0 160c0 61.9 50.1 112 112 112l192 0 0 16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l80 0zM52 196l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0zm0 96c-8.8 0-16 7.2-16 16l0 24c0 8.8 7.2 16 16 16l24 0c8.8 0 16-7.2 16-16l0-24c0-8.8-7.2-16-16-16l-24 0z"]
}, m6 = u6, p6 = {
  prefix: "fas",
  iconName: "fire",
  icon: [448, 512, [128293], "f06d", "M160.5-26.4c9.3-7.8 23-7.5 31.9 .9 12.3 11.6 23.3 24.4 33.9 37.4 13.5 16.5 29.7 38.3 45.3 64.2 5.2-6.8 10-12.8 14.2-17.9 1.1-1.3 2.2-2.7 3.3-4.1 7.9-9.8 17.7-22.1 30.8-22.1 13.4 0 22.8 11.9 30.8 22.1 1.3 1.7 2.6 3.3 3.9 4.8 10.3 12.4 24 30.3 37.7 52.4 27.2 43.9 55.6 106.4 55.6 176.6 0 123.7-100.3 224-224 224S0 411.7 0 288c0-91.1 41.1-170 80.5-225 19.9-27.7 39.7-49.9 54.6-65.1 8.2-8.4 16.5-16.7 25.5-24.2zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-17.3-22.1-49.1-62.4-65.3-83-5.4-6.9-15.2-8-21.5-1.9-18.3 17.8-51.5 56.8-51.5 104.3 0 68.6 50.6 109.2 113.7 109.2z"]
}, A6 = {
  prefix: "fas",
  iconName: "traffic-light",
  icon: [320, 512, [128678], "f637", "M64-32C28.7-32 0-3.3 0 32L0 384c0 88.4 71.6 160 160 160s160-71.6 160-160l0-352c0-35.3-28.7-64-64-64L64-32zm96 392c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-104a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zM160 152a56 56 0 1 1 0-112 56 56 0 1 1 0 112z"]
}, g6 = {
  prefix: "fas",
  iconName: "users",
  icon: [640, 512, [], "f0c0", "M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]
}, b6 = {
  prefix: "fas",
  iconName: "alarm-clock",
  icon: [512, 512, [9200], "f34e", "M504.4 132.5c-4.5 10.5-18.4 9.8-24.9 .4-27.8-40-66.1-72.2-111-92.6-10.4-4.7-13.7-18.3-4.1-24.6 15-9.9 33-15.7 52.3-15.7 52.6 0 95.2 42.6 95.2 95.2 0 13.2-2.7 25.8-7.6 37.3zm-471.9 .4c-6.5 9.4-20.5 10.1-24.9-.4-4.9-11.5-7.6-24.1-7.6-37.3 0-52.6 42.6-95.2 95.2-95.2 19.3 0 37.3 5.8 52.3 15.7 9.6 6.3 6.3 19.9-4.1 24.6-44.8 20.4-83.1 52.6-111 92.6zM390.2 467.4C352.8 495.4 306.3 512 256 512s-96.8-16.6-134.1-44.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l35.2-35.2C48.6 384.8 32 338.3 32 288 32 164.3 132.3 64 256 64S480 164.3 480 288c0 50.3-16.6 96.8-44.6 134.2l35.2 35.2c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-35.2-35.2zM280 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l56 56c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-49-49 0-94.1z"]
}, v6 = {
  prefix: "fas",
  iconName: "newspaper",
  icon: [512, 512, [128240], "f1ea", "M0 416L0 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 288c0 13.3 10.7 24 24 24s24-10.7 24-24L96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM160 128l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0zm-24-72c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-240 0c-13.3 0-24 10.7-24 24zM360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0z"]
}, x6 = {
  prefix: "fas",
  iconName: "cloud-rain",
  icon: [512, 512, [127783, 9926], "f73d", "M96 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8 0-61.9 50.1-112 112-112 43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16 .5 0 1.1 0 1.6 0 53 0 96 43 96 96s-43 96-96 96L96 320zm1.6 68.2c1.1-2.5 3.6-4.2 6.4-4.2s5.3 1.6 6.4 4.2l30.2 68.2c2.2 5.1 3.4 10.5 3.4 16 0 21.9-18.1 39.6-40 39.6s-40-17.7-40-39.6c0-5.5 1.2-11 3.4-16l30.2-68.2zm152 0c1.1-2.5 3.6-4.2 6.4-4.2s5.3 1.6 6.4 4.2l30.2 68.2c2.2 5.1 3.4 10.5 3.4 16 0 21.9-18.1 39.6-40 39.6s-40-17.7-40-39.6c0-5.5 1.2-11 3.4-16l30.2-68.2zm121.8 68.2l30.2-68.2c1.1-2.5 3.6-4.2 6.4-4.2s5.3 1.6 6.4 4.2l30.2 68.2c2.2 5.1 3.4 10.5 3.4 16 0 21.9-18.1 39.6-40 39.6s-40-17.7-40-39.6c0-5.5 1.2-11 3.4-16z"]
}, y6 = {
  prefix: "fas",
  iconName: "hospital",
  icon: [576, 512, [127973, 62589, "hospital-alt", "hospital-wide"], "f0f8", "M128 64c0-35.3 28.7-64 64-64L384 0c35.3 0 64 28.7 64 64l0 64 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l64 0 0-64zM272 352c-17.7 0-32 14.3-32 32l0 80 96 0 0-80c0-17.7-14.3-32-32-32l-32 0zM128 368l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM112 256c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zM512 368l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM496 256c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zM264 104l0 32-32 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"]
}, w6 = {
  prefix: "fas",
  iconName: "fire-flame-curved",
  icon: [384, 512, ["fire-alt"], "f7e4", "M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0 198.4 0 208 9.6 208 21.3l0 22.1c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7 384 434 306 512 209.7 512L192 512C86 512 0 426 0 320l0-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6 12.5 0 22.6 10.1 22.6 22.6L96 288c0 35.3 28.7 64 64 64s64-28.7 64-64l0-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7 0-27.7 9-54.8 25.6-76.9z"]
}, k6 = {
  prefix: "fas",
  iconName: "blender",
  icon: [512, 512, [], "f517", "M0 56C0 25.1 25.1 0 56 0L437.6 0c21.3 0 36.6 20.3 30.8 40.8L457.1 80 344 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l99.4 0-18.3 64-81.1 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l67.4 0-27.4 96-256 0-9.1-96-62.9 0c-30.9 0-56-25.1-56-56L0 56zM114.3 192L100.6 48 56 48c-4.4 0-8 3.6-8 8l0 128c0 4.4 3.6 8 8 8l58.3 0zM136 384l240 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-240 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm120 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
}, Yc = {
  prefix: "fas",
  iconName: "video",
  icon: [576, 512, ["video-camera"], "f03d", "M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z"]
}, _6 = Yc, z6 = {
  prefix: "fas",
  iconName: "user-shield",
  icon: [576, 512, [], "f505", "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l251.5 0C261 469.4 240 414.5 240 356.4l0-31.1c0-7.3 1-14.5 2.9-21.3l-48.6 0zm251 184.5l-13.3 6.3 0-188.1 96 32 0 19.6c0 55.8-32.2 106.5-82.7 130.3zM421.9 259.5l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4l0 31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2l0-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z"]
}, M6 = {
  prefix: "fas",
  iconName: "heart-pulse",
  icon: [512, 512, ["heartbeat"], "f21e", "M256 107.9L241 87.1C216 52.5 175.9 32 133.1 32 59.6 32 0 91.6 0 165.1l0 2.6c0 23.6 6.2 48 16.6 72.3l106 0c3.2 0 6.1-1.9 7.4-4.9l31.8-76.3c3.7-8.8 12.3-14.6 21.8-14.8s18.3 5.4 22.2 14.1l51.3 113.9 41.4-82.8c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3l23.2 46.3c1.4 2.7 4.1 4.4 7.2 4.4l123.6 0c10.5-24.3 16.6-48.7 16.6-72.3l0-2.6C512 91.6 452.4 32 378.9 32 336.2 32 296 52.5 271 87.1l-15 20.7zM469.6 288l-97.8 0c-21.2 0-40.6-12-50.1-31l-1.7-3.4-42.5 85.1c-4.1 8.3-12.7 13.5-22 13.3s-17.6-5.7-21.4-14.1l-49.3-109.5-10.5 25.2c-8.7 20.9-29.1 34.5-51.7 34.5l-80.2 0c47.2 73.8 123 141.7 170.4 177.9 12.4 9.4 27.6 14.1 43.1 14.1s30.8-4.6 43.1-14.1C346.6 429.7 422.4 361.8 469.6 288z"]
}, C6 = {
  prefix: "fas",
  iconName: "hands-bubbles",
  icon: [512, 512, ["hands-wash"], "e05e", "M384 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM128 464a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM0 160l.1 72.6c0 44.8 17.6 87.1 47.9 118.4 .3-77 40.1-148.4 105.4-189.3l1.9-1.2c-2.5-3.7-2.8-8.6-.4-12.7l62-107.4c6.6-11.5 2.7-26.2-8.8-32.8S182 5 175.4 16.5l-68 117.8 0 0 0 0-43.3 75 0-49.3c0-17.7-14.4-32-32-32S0 142.4 0 160zm213.6-35.9c14.1-8.8 29.8-12.7 45.2-12.1l36.5-63.3c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8l-67.1 116.2 27-16.9zm86.5-35.7l-16.4 28.4c15.1 5.5 28.6 15.6 38.3 29.7l19.7-34.2c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8zm46.4 63.7l-12.5 21.7c2 8.6 2.5 17.5 1.7 26.1l4.3 0 0 0 34.4 0 13.7-23.8c6.6-11.5 2.7-26.2-8.8-32.8s-26.2-2.7-32.8 8.8zM283.1 175c-9.4-15-29.1-19.5-44.1-10.2l-60.2 37.6C127.3 234.7 96 291.2 96 352l0 8c0 8.9 .8 17.6 2.2 26.1 35.4 8.2 61.8 40 61.8 77.9 0 6.3-.7 12.5-2.1 18.4 25.2 18.6 56.4 29.6 90.1 29.6l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-92 0c-6.6 0-12-5.4-12-12s5.4-12 12-12l124 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-124 0c-6.6 0-12-5.4-12-12s5.4-12 12-12l156 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-156 0c-6.6 0-12-5.4-12-12s5.4-12 12-12l124 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-136 0 0 0 0 0-93.2 0 46.2-28.9c15-9.4 19.5-29.1 10.2-44.1z"]
}, L6 = C6, S6 = {
  prefix: "fas",
  iconName: "laptop",
  icon: [640, 512, [128187], "f109", "M128 32C92.7 32 64 60.7 64 96l0 240 64 0 0-240 384 0 0 240 64 0 0-240c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2L19.2 384z"]
}, E6 = {
  prefix: "fas",
  iconName: "thumbs-down",
  icon: [512, 512, [128078, 61576], "f165", "M384 32c26.5 0 48 21.5 48 48 0 6.3-1.3 12.2-3.4 17.7 20.4 5.5 35.4 24.1 35.4 46.3 0 9.1-2.6 17.6-7 24.9 22.2 4.2 39 23.7 39 47.1 0 19.7-11.9 36.6-28.9 44 17 7.4 28.9 24.3 28.9 44 0 26.5-21.5 48-48 48l-160 0 28.2 70.4c2.5 6.3 3.8 13.1 3.8 19.9l0 4.2c0 27.3-22.1 49.4-49.4 49.4-18.7 0-35.8-10.6-44.2-27.3L170.1 356.3c-6.7-13.3-10.1-28-10.1-42.9l0-186.6c0-19.4 8.9-37.8 24-50l12.2-9.7C224.6 44.4 259.8 32 296.1 32L384 32zM80 96c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l48 0z"]
}, I6 = {
  prefix: "fas",
  iconName: "broom",
  icon: [576, 512, [129529], "f51a", "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6l0 29.1 108.3 108.3 29.1 0c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8c-22.3 22.3-34.8 52.5-34.8 84 0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9 0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8 30.6-30.6 45.9-73.1 42.3-115.8z"]
}, N6 = {
  prefix: "fas",
  iconName: "utensils",
  icon: [512, 512, [127860, 61685, "cutlery"], "f2e7", "M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z"]
}, D6 = {
  prefix: "fas",
  iconName: "shield-heart",
  icon: [512, 512, [], "e574", "M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2 .5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0 172.4-82.5 213.2-264 213.6-363.2 .1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM249.6 183.5l6.4 8.5 6.4-8.5c11.1-14.8 28.5-23.5 46.9-23.5 32.4 0 58.7 26.3 58.7 58.7l0 5.3c0 49.1-65.8 98.1-96.5 118.3-9.5 6.2-21.5 6.2-30.9 0-30.7-20.2-96.5-69.3-96.5-118.3l0-5.3c0-32.4 26.3-58.7 58.7-58.7 18.5 0 35.9 8.7 46.9 23.5z"]
}, T6 = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM342 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L189.1 315.2 137 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.9 7.5 18.8 7s13.4-4.1 17.5-9.8L347.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]
}, B6 = {
  prefix: "fas",
  iconName: "bath",
  icon: [512, 512, [128705, "bathtub"], "f2cd", "M96 77.3c0-7.3 5.9-13.3 13.3-13.3 3.5 0 6.9 1.4 9.4 3.9l14.9 14.9c-3.6 9.1-5.5 18.9-5.5 29.2 0 19.9 7.2 38 19.2 52-5.3 9.2-4 21.1 3.8 29 9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9-7.8-7.9-19.8-9.1-29-3.8-14-12-32.1-19.2-52-19.2-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0 66.6 0 32 34.6 32 77.3L32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 48c0 28.4 12.4 54 32 71.6L64 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 256 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-40.4c19.6-17.6 32-43.1 32-71.6l0-48c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 256 96 77.3z"]
}, P6 = {
  prefix: "fas",
  iconName: "wand-sparkles",
  icon: [512, 512, [], "f72b", "M464 6.1c9.5-8.5 24-8.1 33 .9l8 8c9 9 9.4 23.5 .9 33l-85.8 95.9c-2.6 2.9-4.1 6.7-4.1 10.7l0 21.4c0 8.8-7.2 16-16 16l-15.8 0c-4.6 0-8.9 1.9-11.9 5.3L100.7 500.9c-6.3 7.1-15.3 11.1-24.8 11.1-8.8 0-17.3-3.5-23.5-9.8L9.7 459.7c-6.2-6.2-9.7-14.7-9.7-23.5 0-9.5 4-18.5 11.1-24.8l111.6-99.8c3.4-3 5.3-7.4 5.3-11.9l0-27.6c0-8.8 7.2-16 16-16l34.6 0c3.9 0 7.7-1.5 10.7-4.1L464 6.1zM432 288c3.6 0 6.7 2.4 7.7 5.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8-14.8 51.7c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8l-14.8-51.7-51.7-14.8c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8 14.8-51.7c1-3.4 4.1-5.8 7.7-5.8zM87.7 69.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8-14.8 51.7c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8L57.5 166.5 5.8 151.7c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8 14.8-51.7c1-3.4 4.1-5.8 7.7-5.8s6.7 2.4 7.7 5.8zM208 0c3.7 0 6.9 2.5 7.8 6.1l6.8 27.3 27.3 6.8c3.6 .9 6.1 4.1 6.1 7.8s-2.5 6.9-6.1 7.8l-27.3 6.8-6.8 27.3c-.9 3.6-4.1 6.1-7.8 6.1s-6.9-2.5-7.8-6.1l-6.8-27.3-27.3-6.8c-3.6-.9-6.1-4.1-6.1-7.8s2.5-6.9 6.1-7.8l27.3-6.8 6.8-27.3c.9-3.6 4.1-6.1 7.8-6.1z"]
}, O6 = {
  prefix: "fas",
  iconName: "shower",
  icon: [512, 512, [128703], "f2cc", "M64 131.9c0-19.8 16.1-35.9 35.9-35.9 9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.1-31.9-123-10.9L170.5 61.3C151.8 42.5 126.4 32 99.9 32 44.7 32 0 76.7 0 131.9L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-316.1zM256 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm64 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, H6 = {
  prefix: "fas",
  iconName: "mountain-sun",
  icon: [576, 512, [], "e52f", "M256.5 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5-7.2 12.1-20.3 19.5-34.3 19.5l-432 0c-14.1 0-27.1-7.4-34.3-19.5s-7.5-27.1-.8-39.5l216-400 2.9-4.6C231.7 6.2 243.6 0 256.5 0zM170.4 249.9l26.8 26.8c6.2 6.2 16.4 6.2 22.6 0l43.3-43.3c6-6 14.1-9.4 22.6-9.4l42.8 0-72.1-133.5-86.1 159.4zM496.5 160a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"]
}, F6 = {
  prefix: "fas",
  iconName: "sun",
  icon: [576, 512, [9728], "f185", "M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]
}, R6 = {
  prefix: "fas",
  iconName: "plug-circle-bolt",
  icon: [640, 512, [], "e55b", "M192-32c17.7 0 32 14.3 32 32l0 96 128 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 48.7c-98.6 8.1-176 90.7-176 191.3 0 27.3 5.7 53.3 16 76.9l0 3.1c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-66.7C165.2 398.1 96 319.1 96 224l0-64c-17.7 0-32-14.3-32-32S78.3 96 96 96l64 0 0-96c0-17.7 14.3-32 32-32zM352 400a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm177.4-77c-5.8-4.2-13.8-4-19.4 .5l-80 64c-5.3 4.2-7.4 11.4-5.1 17.8S433.2 416 440 416l32.9 0-15.9 42.4c-2.5 6.7-.2 14.3 5.6 18.6s13.8 4 19.4-.5l80-64c5.3-4.2 7.4-11.4 5.1-17.8S558.8 384 552 384l-32.9 0 15.9-42.4c2.5-6.7 .2-14.3-5.6-18.6z"]
}, j6 = {
  prefix: "fas",
  iconName: "lightbulb",
  icon: [384, 512, [128161], "f0eb", "M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]
}, q6 = {
  prefix: "fas",
  iconName: "carrot",
  icon: [640, 512, [129365], "f787", "M453.1-36.7L440.9-24.6c-31.2 31.2-31.2 81.9 0 113.1 15.6 15.6 31.2 31.2 46.9 46.9 31.2 31.2 81.9 31.2 113.1 0l12.1-12.1c6.2-6.2 6.2-16.4 0-22.6L600.9 88.6c-31.2-31.2-81.9-31.2-113.1 0 31.2-31.2 31.2-81.9 0-113.1L475.7-36.7c-6.2-6.2-16.4-6.2-22.6 0zM331.6 96c-45.2 0-87.1 20.4-115 54.3L273.3 207c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L191.6 193.2 67.2 466.8c-5.5 12.1-2.9 26.4 6.5 35.9s23.7 12 35.9 6.5l141.6-64.4-43.8-43.8c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l56.5 56.5 95.3-43.3c53.1-24.1 87.2-77.1 87.2-135.5 0-82.2-66.6-148.8-148.8-148.8z"]
}, Q6 = {
  prefix: "fas",
  iconName: "highlighter",
  icon: [576, 512, [], "f591", "M315 315L473.4 99.9 444.1 70.6 229 229 315 315zm-187 5l0 0 0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0 457.6 0 468.5 4.5 476.6 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5 0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5l-71.7 0-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l51.7-51.7 70.6 70.6-19.7 19.7c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z"]
}, W6 = {
  prefix: "fas",
  iconName: "cloud",
  icon: [576, 512, [9729], "f0c2", "M0 336c0 79.5 64.5 144 144 144l304 0c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5-56.9 19.2-97.9 73.1-97.9 136.5z"]
}, U6 = {
  prefix: "fas",
  iconName: "circle-exclamation",
  icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]
}, Y6 = {
  prefix: "fas",
  iconName: "backward",
  icon: [576, 512, [9194], "f04a", "M204.3 43.1C215.9 32 233 28.9 247.7 35.2S272 56 272 72l0 136.3 172.3-165.1C455.9 32 473 28.9 487.7 35.2S512 56 512 72l0 368c0 16-9.6 30.5-24.3 36.8s-31.8 3.2-43.4-7.9L272 303.7 272 440c0 16-9.6 30.5-24.3 36.8s-31.8 3.2-43.4-7.9l-192-184C4.5 277.3 0 266.9 0 256s4.5-21.3 12.3-28.9l192-184z"]
}, V6 = {
  prefix: "fas",
  iconName: "rectangle-list",
  icon: [512, 512, ["list-alt"], "f022", "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm96 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm120-56l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, G6 = {
  prefix: "fas",
  iconName: "hand",
  icon: [512, 512, [129306, 9995, "hand-paper"], "f256", "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4S-3.6 325.7 12.4 341L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z"]
}, X6 = {
  prefix: "fas",
  iconName: "stairs",
  icon: [576, 512, [], "e289", "M384 64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0 0-96c0-17.7 14.3-32 32-32l96 0 0-96c0-17.7 14.3-32 32-32l96 0 0-96z"]
}, Z6 = {
  prefix: "fas",
  iconName: "thumbs-up",
  icon: [512, 512, [128077, 61575], "f164", "M80 160c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32L0 192c0-17.7 14.3-32 32-32l48 0zM270.6 16C297.9 16 320 38.1 320 65.4l0 4.2c0 6.8-1.3 13.6-3.8 19.9L288 160 448 160c26.5 0 48 21.5 48 48 0 19.7-11.9 36.6-28.9 44 17 7.4 28.9 24.3 28.9 44 0 23.4-16.8 42.9-39 47.1 4.4 7.3 7 15.8 7 24.9 0 22.2-15 40.8-35.4 46.3 2.2 5.5 3.4 11.5 3.4 17.7 0 26.5-21.5 48-48 48l-87.9 0c-36.3 0-71.6-12.4-99.9-35.1L184 435.2c-15.2-12.1-24-30.5-24-50l0-186.6c0-14.9 3.5-29.6 10.1-42.9L226.3 43.3C234.7 26.6 251.8 16 270.6 16z"]
}, $6 = {
  prefix: "fas",
  iconName: "chart-line",
  icon: [512, 512, ["line-chart"], "f201", "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]
}, J6 = {
  prefix: "fas",
  iconName: "building",
  icon: [384, 512, [127970, 61687], "f1ad", "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]
}, K6 = {
  prefix: "fas",
  iconName: "bicycle",
  icon: [640, 512, [128690], "f206", "M331.7 43.3C336 36.3 343.7 32 352 32l104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-65.6 0 72.2 148.4c10.7-2.9 21.9-4.4 33.4-4.4 70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128c0-42 20.2-79.2 51.4-102.6l-20.4-41.9-73.5 147c-2.3 4.8-6.3 8.8-11.4 11.2-.6 .3-1.2 .5-1.8 .7-2.9 1.1-5.9 1.6-8.9 1.5L271 368c-7.9 63.1-61.7 112-127 112-70.7 0-128-57.3-128-128S73.3 224 144 224c10.8 0 21.2 1.3 31.2 3.8l28.5-56.9-11.5-26.9-40.2 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0c9.6 0 18.3 5.7 22.1 14.5l14.3 33.5 123.7 0-37.7-77.5c-3.6-7.4-3.2-16.2 1.2-23.2zM228.5 228.7l-45.6 91.3 84.8 0-39.1-91.3zM305.7 287l47.5-95-88.2 0 40.7 95zm168.7 75.5l-29.7-61c-12.8 13-20.7 30.8-20.7 50.5 0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72c-2.7 0-5.5 .2-8.1 .5l29.7 61c5.8 11.9 .8 26.3-11.1 32.1s-26.3 .8-32.1-11.1zM149.2 368c-20.2 0-33.4-21.3-24.3-39.4l24.2-48.5c-1.7-.1-3.4-.2-5.1-.2-39.8 0-72 32.2-72 72s32.2 72 72 72c34.3 0 62.9-23.9 70.2-56l-65 0z"]
}, ed = {
  prefix: "fas",
  iconName: "gear",
  icon: [512, 512, [9881, "cog"], "f013", "M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]
}, td = {
  prefix: "fas",
  iconName: "house-chimney",
  icon: [512, 512, [63499, "home-lg"], "e3af", "M234.2 8.6c12.3-11.4 31.3-11.4 43.5 0L368 92.3 368 80c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 101.5 37.8 35.1c9.6 9 12.8 22.9 8 35.1S493.2 272 480 272l-16 0 0 176c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-176-16 0c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8-35.1l224-208zM240 320c-26.5 0-48 21.5-48 48l0 96 128 0 0-96c0-26.5-21.5-48-48-48l-32 0z"]
}, nd = {
  prefix: "fas",
  iconName: "cloud-showers-heavy",
  icon: [512, 512, [], "f740", "M96 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8 0-61.9 50.1-112 112-112 43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16 .5 0 1.1 0 1.6 0 53 0 96 43 96 96s-43 96-96 96L96 320zm6.8 79.6l-32 96C66.6 508.2 53 515 40.4 510.8S21 493 25.2 480.4l32-96C61.4 371.8 75 365 87.6 369.2S107 387 102.8 399.6zm120 0l-32 96c-4.2 12.6-17.8 19.4-30.4 15.2S141 493 145.2 480.4l32-96c4.2-12.6 17.8-19.4 30.4-15.2S227 387 222.8 399.6zm112 0l-32 96c-4.2 12.6-17.8 19.4-30.4 15.2S253 493 257.2 480.4l32-96c4.2-12.6 17.8-19.4 30.4-15.2S339 387 334.8 399.6zm120 0l-32 96c-4.2 12.6-17.8 19.4-30.4 15.2S373 493 377.2 480.4l32-96c4.2-12.6 17.8-19.4 30.4-15.2S459 387 454.8 399.6z"]
}, od = {
  prefix: "fas",
  iconName: "plate-wheat",
  icon: [512, 512, [], "e55a", "M176 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zM56 64l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24S42.7 64 56 64zM24 136l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 48c0-8.8 7.2-16 16-16 44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16zM400 32c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80l0-16c0-8.8 7.2-16 16-16zm80 160l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM352 176c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80zm-96 16l0 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM3.5 347.6C1.6 332.9 13 320 27.8 320l456.4 0c14.8 0 26.2 12.9 24.4 27.6-6.3 50.2-44.4 89.4-92.6 98.4l0 2c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-2c-48.2-9-86.3-48.2-92.5-98.4z"]
}, ad = {
  prefix: "fas",
  iconName: "shirt",
  icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0L22.9 214.6c-12.5-12.5-12.5-32.8 0-45.3L141.5 50.7c12-12 28.3-18.7 45.3-18.7l53.5 0c0 44.2 35.8 80 80 80z"]
}, id = {
  prefix: "fas",
  iconName: "play",
  icon: [448, 512, [9654], "f04b", "M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]
}, sd = {
  prefix: "fas",
  iconName: "puzzle-piece",
  icon: [512, 512, [129513], "f12e", "M224 0c35.3 0 64 21.5 64 48 0 10.4-4.4 20-12 27.9-6.6 6.9-12 15.3-12 24.9 0 15 12.2 27.2 27.2 27.2l44.8 0c26.5 0 48 21.5 48 48l0 44.8c0 15 12.2 27.2 27.2 27.2 9.5 0 18-5.4 24.9-12 7.9-7.5 17.5-12 27.9-12 26.5 0 48 28.7 48 64s-21.5 64-48 64c-10.4 0-20.1-4.4-27.9-12-6.9-6.6-15.3-12-24.9-12-15 0-27.2 12.2-27.2 27.2L384 464c0 26.5-21.5 48-48 48l-56.8 0c-12.8 0-23.2-10.4-23.2-23.2 0-9.2 5.8-17.3 13.2-22.8 11.6-8.7 18.8-20.7 18.8-34 0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34 7.4 5.5 13.2 13.5 13.2 22.8 0 12.8-10.4 23.2-23.2 23.2L48 512c-26.5 0-48-21.5-48-48L0 343.2c0-12.8 10.4-23.2 23.2-23.2 9.2 0 17.3 5.8 22.8 13.2 8.7 11.6 20.7 18.8 34 18.8 26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8-5.5 7.4-13.5 13.2-22.8 13.2-12.8 0-23.2-10.4-23.2-23.2L0 176c0-26.5 21.5-48 48-48l108.8 0c15 0 27.2-12.2 27.2-27.2 0-9.5-5.4-18-12-24.9-7.5-7.9-12-17.5-12-27.9 0-26.5 28.7-48 64-48z"]
}, cd = {
  prefix: "fas",
  iconName: "glass-water",
  icon: [384, 512, [], "e4f4", "M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4 .1 34.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3l166.6 0c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0L32 0zM73 156.5l-6.6-92.5 251.3 0-6.6 92.5-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0-20.9-10.4-45.5-10.4-66.4 0-19.4 9.7-42.2 9.7-61.6 0L73 156.5z"]
}, rd = {
  prefix: "fas",
  iconName: "gem",
  icon: [512, 512, [128142], "f3a5", "M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5L210.5 179.8 63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8l-147.2-12.3 57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"]
}, ld = {
  prefix: "fas",
  iconName: "toilet",
  icon: [448, 512, [128701], "f7d8", "M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l8 0 0 148.9c-1.9 1.4-3.8 2.9-5.6 4.4-15.5 13.2-26.4 31.6-26.4 54.6 0 46.9 14.3 84.1 37 112.5 14.2 17.7 31.1 31.3 48.5 41.8L65.6 469.9c-3.3 9.8-1.6 20.5 4.4 28.8S85.7 512 96 512l256 0c10.3 0 19.9-4.9 26-13.3s7.7-19.1 4.4-28.8l-19.8-59.5c17.4-10.5 34.3-24.1 48.5-41.8 22.7-28.4 37-65.5 37-112.5 0-23.1-10.9-41.5-26.4-54.6-1.8-1.5-3.7-3-5.6-4.4l0-148.9 8 0c13.3 0 24-10.7 24-24S437.3 0 424 0L24 0zM96 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zM224 288c-88.4 0-160-14.3-160-32s71.6-32 160-32 160 14.3 160 32-71.6 32-160 32z"]
}, dd = {
  prefix: "fas",
  iconName: "wrench",
  icon: [576, 512, [128295], "f0ad", "M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z"]
}, fd = {
  prefix: "fas",
  iconName: "trash-can",
  icon: [448, 512, [61460, "trash-alt"], "f2ed", "M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"]
}, hd = {
  prefix: "fas",
  iconName: "car-side",
  icon: [640, 512, [128663], "f5e4", "M147 106.7l-29.8 85.3 122.9 0 0-96-77.9 0c-6.8 0-12.9 4.3-15.1 10.7zM48.6 193.9L86.5 85.6C97.8 53.5 128.1 32 162.1 32L360 32c25.2 0 48.9 11.9 64 32l96.2 128.3C587.1 196.5 640 252.1 640 320l0 16c0 35.3-28.7 64-64 64l-16.4 0c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80l-144.7 0c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80l-.4 0c-35.3 0-64-28.7-64-64l0-80c0-30.1 20.7-55.3 48.6-62.1zM440 192l-67.2-89.6c-3-4-7.8-6.4-12.8-6.4l-72 0 0 96 152 0zM152 432a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm360-40a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z"]
}, ud = {
  prefix: "fas",
  iconName: "life-ring",
  icon: [512, 512, [], "f1cd", "M367.2 412.5C335.9 434.9 297.5 448 256 448s-79.9-13.1-111.2-35.5l58-58c15.8 8.6 34 13.5 53.3 13.5s37.4-4.9 53.3-13.5l58 58zm90.7 .8c33.8-43.4 54-98 54-157.3S491.8 142.1 458 98.7c9-12.5 7.9-30.1-3.4-41.3S425.8 45 413.3 54C369.9 20.2 315.3 0 256 0S142.1 20.2 98.7 54c-12.5-9-30.1-7.9-41.3 3.4S45 86.2 54 98.7C20.2 142.1 0 196.7 0 256S20.2 369.9 54 413.3c-9 12.5-7.9 30.1 3.4 41.3S86.2 467 98.7 458c43.4 33.8 98 54 157.3 54s113.9-20.2 157.3-54c12.5 9 30.1 7.9 41.3-3.4s12.4-28.8 3.4-41.3zm-45.5-46.1l-58-58c8.6-15.8 13.5-34 13.5-53.3s-4.9-37.4-13.5-53.3l58-58C434.9 176.1 448 214.5 448 256s-13.1 79.9-35.5 111.2zM367.2 99.5l-58 58c-15.8-8.6-34-13.5-53.3-13.5s-37.4 4.9-53.3 13.5l-58-58C176.1 77.1 214.5 64 256 64s79.9 13.1 111.2 35.5zM157.5 309.3l-58 58C77.1 335.9 64 297.5 64 256s13.1-79.9 35.5-111.2l58 58c-8.6 15.8-13.5 34-13.5 53.3s4.9 37.4 13.5 53.3zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]
}, md = {
  prefix: "fas",
  iconName: "fingerprint",
  icon: [512, 512, [], "f577", "M48 256c0-114.9 93.1-208 208-208 63.1 0 119.6 28.1 157.8 72.5 8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0 114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6-15.2 5-18.7 23.7-8.3 35.9 7.1 8.3 18.8 10.8 29.4 7.9 10.6-2.9 21.8-4.4 33.4-4.4 70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3-1.7 14.6 9.4 27.8 24.2 27.8 11.8 0 21.9-8.6 23.3-20.3 3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4-23.1 29.8-36.8 67.1-36.8 107.7l0 24.9c0 24.2-2.6 48.4-7.8 71.9-3.4 15.6 7.9 31.1 23.9 31.1 10.5 0 19.9-7 22.2-17.3 6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1 7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1-3.8 14.3 6.7 29 21.5 29 9.5 0 17.9-6.2 20.4-15.4 10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9-2.7 13.9 7.7 27.2 21.8 27.2 10.2 0 19-7 21-17 7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z"]
}, pd = {
  prefix: "fas",
  iconName: "house",
  icon: [512, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]
}, Ad = {
  prefix: "fas",
  iconName: "sliders",
  icon: [512, 512, ["sliders-h"], "f1de", "M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z"]
}, gd = {
  prefix: "fas",
  iconName: "person-walking",
  icon: [384, 512, [128694, "walking"], "f554", "M192 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM105.4 227.9l22.6-22.6 0 69.3c0 28 12.2 54.7 33.5 72.9l71.4 61.2c5.9 5.1 9.8 12.1 10.9 19.8l12.6 88.1c2.5 17.5 18.7 29.7 36.2 27.2s29.7-18.7 27.2-36.2l-12.6-88.1c-3.3-23.1-14.9-44.1-32.6-59.3l-34.5-29.6 0-115.2 3.8 4.7c18.2 22.8 45.8 36 75 36l33.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-33.2 0c-9.7 0-18.9-4.4-25-12l-17.9-22.4c-23-28.8-57.9-45.6-94.8-45.6-32.2 0-63.1 12.8-85.8 35.6L60.1 182.6C42.1 200.6 32 225 32 250.5L32 288c0 17.7 14.3 32 32 32s32-14.3 32-32l0-37.5c0-8.5 3.4-16.6 9.4-22.6zm12.4 179.4c-1.5 5.2-4.3 10-8.1 13.8L41.4 489.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.3-68.3c11.5-11.5 19.9-25.8 24.4-41.5l2.2-7.6-46-39.4c-2.5-2.2-5-4.4-7.4-6.8l-10.4 36.2z"]
}, bd = {
  prefix: "fas",
  iconName: "champagne-glasses",
  icon: [640, 512, [129346, "glass-cheers"], "f79f", "M155.6 17.3C163 3 179.9-3.6 195 1.9l125 45.6 125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6l31.3 86.2 41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41c-47.4 17.3-94.8 34.5-142.2 51.8-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-33.9-130-95.2l-14.6-64.7-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6.1 25.2 24.4 19.1 41s-24.4 25.2-41 19.1c-47.4-17.3-94.8-34.6-142.2-51.8-16.6-6.1-25.2-24.4-19.1-41S26.3 392 42.9 398l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8 89.2 32.5 13.1-57.9-75.1-27.4zm240.9 0l-75.1 27.4 13.1 57.9 89.2-32.5-27.2-52.8z"]
}, vd = {
  prefix: "fas",
  iconName: "user",
  icon: [448, 512, [128100, 62144, 62470, "user-alt", "user-large"], "f007", "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]
}, xd = {
  prefix: "fas",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M288.2 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 62.1-15-15c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l49 49 0 70.6-61.2-35.3-17.9-66.9c-3.4-12.8-16.6-20.4-29.4-17S95.3 98 98.7 110.8l5.5 20.5-53.7-31C35.2 91.5 15.6 96.7 6.8 112s-3.6 34.9 11.7 43.7l53.7 31-20.5 5.5c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l66.9-17.9 61.2 35.3-61.2 35.3-66.9-17.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l20.5 5.5-53.7 31C3.2 365.1-2 384.7 6.8 400s28.4 20.6 43.7 11.7l53.7-31-5.5 20.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l17.9-66.9 61.2-35.3 0 70.6-49 49c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l15-15 0 62.1c0 17.7 14.3 32 32 32s32-14.3 32-32l0-62.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-49-49 0-70.6 61.2 35.3 17.9 66.9c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-5.5-20.5 53.7 31c15.3 8.8 34.9 3.6 43.7-11.7s3.6-34.9-11.7-43.7l-53.7-31 20.5-5.5c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-66.9 17.9-61.2-35.3 61.2-35.3 66.9 17.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-20.5-5.5 53.7-31c15.3-8.8 20.6-28.4 11.7-43.7s-28.4-20.5-43.7-11.7l-53.7 31 5.5-20.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-17.9 66.9-61.2 35.3 0-70.6 49-49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-15 15 0-62.1z"]
}, yd = {
  prefix: "fas",
  iconName: "wine-glass",
  icon: [320, 512, [127863], "f4e3", "M32.6 25.7C35.6 10.8 48.7 0 64 0L256 0c15.3 0 28.4 10.8 31.4 25.7L316.8 173c2.1 10.5 3.2 21.2 3.2 32l0 3c0 77.4-55 142-128 156.8l0 115.2 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 544c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-115.2C55 350 0 285.4 0 208l0-3c0-10.7 1.1-21.4 3.2-32L32.6 25.7zM77.4 128l165.1 0-12.8-64-139.5 0-12.8 64z"]
}, wd = {
  prefix: "fas",
  iconName: "temperature-half",
  icon: [320, 512, [127777, "temperature-2", "thermometer-2", "thermometer-half"], "f2c9", "M160 0C107 0 64 43 64 96l0 164.7C34.5 287 16 325.4 16 368 16 447.5 80.5 512 160 512s144-64.5 144-144c0-42.6-18.5-81-48-107.3L256 96c0-53-43-96-96-96zm64 368c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3l0-92.7c0-13.3 10.7-24 24-24s24 10.7 24 24l0 92.7c23.5 9.5 40 32.5 40 59.3z"]
}, kd = {
  prefix: "fas",
  iconName: "bookmark",
  icon: [384, 512, [128278, 61591], "f02e", "M64 0C28.7 0 0 28.7 0 64L0 480c0 11.5 6.2 22.2 16.2 27.8s22.3 5.5 32.2-.4L192 421.3 335.5 507.4c9.9 5.9 22.2 6.1 32.2 .4S384 491.5 384 480l0-416c0-35.3-28.7-64-64-64L64 0z"]
}, _d = {
  prefix: "fas",
  iconName: "volume-xmark",
  icon: [576, 512, ["volume-mute", "volume-times"], "f6a9", "M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]
}, zd = {
  prefix: "fas",
  iconName: "gauge-high",
  icon: [512, 512, [62461, "tachometer-alt", "tachometer-alt-fast"], "f625", "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64 0-16.2-6-31.1-16-42.3l69.5-138.9c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L261.1 288.2c-1.7-.1-3.4-.2-5.1-.2-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Md = {
  prefix: "fas",
  iconName: "cloud-sun",
  icon: [640, 512, [9925], "f6c4", "M208.3 192c43.1 0 80.5 24.4 99.2 60.1 14.7-17.2 36.4-28.1 60.8-28.1 44.2 0 80 35.8 80 80 0 5.5-.6 10.9-1.6 16 .5 0 1.1 0 1.6 0 53 0 96 43 96 96s-43 96-96 96l-320 0c-53 0-96-43-96-96 0-42.5 27.7-78.5 66-91.2-1.3-6.8-2-13.7-2-20.8 0-61.9 50.1-112 112-112zm192-223.8c5.3 0 10.3 2.7 13.3 7.1l47.3 70.4 83.3-16.3c5.2-1 10.6 .7 14.3 4.4 3.8 3.8 5.4 9.2 4.4 14.4l-16.3 83.3 70.4 47.3c4.4 3 7.1 8 7.1 13.3 0 5.3-2.6 10.3-7 13.2l-70.4 47.3 14.5 74.2c-17.2-21.7-40.4-38.4-67.2-47.3-2.5-12.7-6.9-24.6-12.8-35.7 9.6-14.9 15.2-32.7 15.2-51.7 0-53-43-96-96-96-47.9 0-87.6 35.1-94.8 80.9-20.9-16-45.9-27-73.1-31.1l21.5-14.5-16.3-83.2-.3-2c-.3-4.6 1.3-9.1 4.6-12.4 3.8-3.8 9.2-5.4 14.4-4.4l83.3 16.3 47.3-70.4 1.2-1.6c3-3.5 7.4-5.5 12.1-5.5zm0 175.8c26.5 0 48 21.5 48 48 0 3.8-.5 7.6-1.4 11.1-21.7-16.9-48.9-27.1-78.6-27.1-4.6 0-9.1 .2-13.5 .7 6.4-19 24.3-32.7 45.5-32.7z"]
}, Cd = {
  prefix: "fas",
  iconName: "dumbbell",
  icon: [640, 512, [], "f44b", "M96 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112 256 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 16 16 0c26.5 0 48 21.5 48 48l0 48c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 48c0 26.5-21.5 48-48 48l-16 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112-256 0 0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-16-16 0c-26.5 0-48-21.5-48-48l0-48c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-48c0-26.5 21.5-48 48-48l16 0 0-16z"]
}, Ld = {
  prefix: "fas",
  iconName: "lock-open",
  icon: [576, 512, [], "f3c1", "M384 96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-70.7-57.3-128-128-128S320 25.3 320 96l0 64-160 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-32 0 0-64z"]
}, Sd = {
  prefix: "fas",
  iconName: "droplet",
  icon: [384, 512, [128167, "tint"], "f043", "M192 512C86 512 0 426 0 320 0 228.8 130.2 45.9 166.6-3.5 172.5-11.5 181.8-16 191.8-16l.4 0c10 0 19.3 4.5 25.2 12.5 36.4 49.4 166.6 232.3 166.6 323.5 0 106-86 192-192 192zM112 312c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 75.1 60.9 136 136 136 13.3 0 24-10.7 24-24s-10.7-24-24-24c-48.6 0-88-39.4-88-88z"]
}, Ed = {
  prefix: "fas",
  iconName: "film",
  icon: [448, 512, [127902, 62368, "film-alt", "film-simple"], "f008", "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm304-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm304-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM352 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0z"]
}, Id = {
  prefix: "fas",
  iconName: "comments",
  icon: [576, 512, [128490, 61670], "f086", "M384 144c0 97.2-86 176-192 176-26.7 0-52.1-5-75.2-14L35.2 349.2c-9.3 4.9-20.7 3.2-28.2-4.2s-9.2-18.9-4.2-28.2l35.6-67.2C14.3 220.2 0 183.6 0 144 0 46.8 86-32 192-32S384 46.8 384 144zm0 368c-94.1 0-172.4-62.1-188.8-144 120-1.5 224.3-86.9 235.8-202.7 83.3 19.2 145 88.3 145 170.7 0 39.6-14.3 76.2-38.4 105.6l35.6 67.2c4.9 9.3 3.2 20.7-4.2 28.2s-18.9 9.2-28.2 4.2L459.2 498c-23.1 9-48.5 14-75.2 14z"]
}, Nd = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]
}, Dd = {
  prefix: "fas",
  iconName: "moon",
  icon: [512, 512, [127769, 9214], "f186", "M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]
}, Td = {
  prefix: "fas",
  iconName: "plane",
  icon: [576, 512, [], "f072", "M520 200c30.9 0 56 25.1 56 56s-25.1 56-56 56l-127.3 0-159.2 173.6c-6.1 6.6-14.6 10.4-23.6 10.4l-43.7 0c-10.9 0-18.6-10.7-15.2-21.1l54.3-162.9-99.7 0-52.8 66c-3 3.8-7.6 6-12.5 6l-19.8 0c-10.4 0-18-9.8-15.5-19.9L32 256 5 147.9C2.4 137.8 10.1 128 20.5 128l19.8 0c4.9 0 9.5 2.2 12.5 6l52.8 66 99.7 0-54.3-162.9C147.6 26.7 155.3 16 166.2 16l43.7 0c9 0 17.5 3.8 23.6 10.4L392.7 200 520 200z"]
}, Bd = {
  prefix: "fas",
  iconName: "mobile-screen",
  icon: [384, 512, ["mobile-android-alt"], "f3cf", "M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM128 440c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24zM304 64l-224 0 0 304 224 0 0-304z"]
}, Pd = {
  prefix: "fas",
  iconName: "phone",
  icon: [512, 512, [128222, 128379], "f095", "M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]
}, Od = {
  prefix: "fas",
  iconName: "circle-play",
  icon: [512, 512, [61469, "play-circle"], "f144", "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]
}, Hd = {
  prefix: "fas",
  iconName: "leaf",
  icon: [512, 512, [], "f06c", "M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9c0 131.2-108.1 237.1-238.8 237.1-77 0-143.4-49.5-167.5-118.7-35.4 30.8-57.7 76.1-57.7 126.7 0 13.3-10.7 24-24 24S0 469.3 0 456C0 381.1 38.2 315.1 96.1 276.3 131.4 252.7 173.5 240 216 240l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.7 0-77.3 8.8-111 24.5 23.3-70 89.2-120.5 167-120.5 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z"]
}, Fd = {
  prefix: "fas",
  iconName: "motorcycle",
  icon: [640, 512, [127949], "f21c", "M280 16c-13.3 0-24 10.7-24 24s10.7 24 24 24l56.6 0 22.5 48.7-95.1 71.3c-33.4-25.1-75-40-120-40l-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c78.5 0 143.2 59.6 151.2 136l-25.4 0c-11.2-59.2-63.3-104-125.8-104-70.7 0-128 57.3-128 128S73.3 480 144 480c62.5 0 114.5-44.8 125.8-104l50.2 0c13.3 0 24-10.7 24-24l0-22.5c0-45.1 25.7-85.4 65.5-107.7l12.1 26.1c-32.4 23.2-53.5 61.2-53.5 104.1 0 70.7 57.3 128 128 128s128-57.3 128-128-57.3-128-128-128c-10.7 0-21 1.3-30.9 3.8L433.8 160 488 160c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-53.3 0c-6.9 0-13.7 2.2-19.2 6.4l-17.1 12.8-24.6-53.3C369.9 21.4 361.4 16 352 16l-72 0zM445.8 300.4l28.4 61.6c5.6 12 19.8 17.3 31.8 11.7s17.3-19.8 11.7-31.8l-28.5-61.6c2.2-.2 4.4-.3 6.7-.3 39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72c0-20.2 8.3-38.5 21.8-51.6zM144 424c-39.8 0-72-32.2-72-72s32.2-72 72-72c31.3 0 58 20 67.9 48L144 328c-13.3 0-24 10.7-24 24s10.7 24 24 24l67.9 0c-9.9 28-36.6 48-67.9 48z"]
}, Rd = {
  prefix: "fas",
  iconName: "spray-can",
  icon: [576, 512, [], "f5bd", "M192 0l64 0c17.7 0 32 14.3 32 32l0 80-128 0 0-80c0-17.7 14.3-32 32-32zM64 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 208c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-208zm240 80a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM320 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM448 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM512 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM448 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, jd = {
  prefix: "fas",
  iconName: "volume-low",
  icon: [448, 512, [128264, "volume-down"], "f027", "M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"]
}, qd = {
  prefix: "fas",
  iconName: "person",
  icon: [384, 512, [129485, "male"], "f183", "M248 24a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm24 212.7l46.3 62.4c10.5 14.2 30.6 17.2 44.8 6.6s17.2-30.6 6.6-44.8l-70.5-95C274 132 234.3 112 192 112s-82 20-107.2 53.9l-70.5 95c-10.5 14.2-7.6 34.2 6.6 44.8s34.2 7.6 44.8-6.6L112 236.7 112 512c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-8.8 7.2-16 16-16s16 7.2 16 16l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-275.3z"]
}, Qd = {
  prefix: "fas",
  iconName: "hourglass",
  icon: [384, 512, [9203, 62032, "hourglass-empty"], "f254", "M0 32C0 14.3 14.3 0 32 0L352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1l-67.9 67.9 67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1l67.9-67.9-67.9-67.9C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9l67.9 67.9 67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11-192 0zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9l-67.9-67.9-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z"]
}, Wd = {
  prefix: "fas",
  iconName: "drumstick-bite",
  icon: [512, 512, [], "f6d7", "M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2-4.6-1.1-9.5-1.8-14.5-1.8-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12 0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4l89.2 0c6.3 0 12.4-.3 18.5-1 11.9-1.2 16.4-15.5 10.8-26-8.5-15.8-13.3-33.8-13.3-53 0-61.9 50.1-112 112-112 8 0 15.7 .8 23.2 2.4 11.7 2.5 24.1-5.9 22-17.6-14.7-82.3-86.7-144.8-173.2-144.8-97.2 0-176 78.8-176 176l0 89.2z"]
}, Ud = {
  prefix: "fas",
  iconName: "chart-simple",
  icon: [512, 512, [], "e473", "M192 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM432 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"]
}, Yd = {
  prefix: "fas",
  iconName: "solar-panel",
  icon: [576, 512, [], "f5ba", "M121.8 32c-30 0-56 20.8-62.5 50.1L9.6 306.1C.7 346.1 31.1 384 72 384l184.1 0 0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64 184.1 0c40.9 0 71.4-37.9 62.5-77.9l-49.8-224C510.4 52.8 484.5 32 454.5 32L121.8 32zM245.6 96l85.2 0 7.3 88-99.8 0 7.3-88zm-55.5 88l-87.8 0 19.6-88 75.6 0-7.3 88zM91.6 232l94.5 0-7.3 88-106.7 0 19.6-88zm142.6 0l107.8 0 7.3 88-122.5 0 7.3-88zm156 0l94.5 0 19.6 88-106.7 0-7.3-88zM474 184l-87.8 0-7.3-88 75.6 0 19.6 88z"]
}, Vd = {
  prefix: "fas",
  iconName: "headphones",
  icon: [448, 512, [127911, 62863, "headphones-alt", "headphones-simple"], "f025", "M64 224c0-88.4 71.6-160 160-160s160 71.6 160 160l0 37.5c-10-3.5-20.8-5.5-32-5.5l-16 0c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48l16 0c53 0 96-43 96-96l0-160C448 100.3 347.7 0 224 0S0 100.3 0 224L0 384c0 53 43 96 96 96l16 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-16 0c-11.2 0-22 1.9-32 5.5L64 224z"]
}, Gd = {
  prefix: "fas",
  iconName: "bus",
  icon: [448, 512, [128653], "f207", "M96 0C43 0 0 43 0 96L0 384c0 29.8 20.4 54.9 48 62l0 34c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 192 0 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-34c27.6-7.1 48-32.2 48-62l0-288c0-53-43-96-96-96L96 0zM64 176c0-17.7 14.3-32 32-32l104 0 0 112-104 0c-17.7 0-32-14.3-32-32l0-48zm184 80l0-112 104 0c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32l-104 0zM96 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm256 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM152 72c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24z"]
}, Xd = {
  prefix: "fas",
  iconName: "plug",
  icon: [448, 512, [128268], "f1e6", "M128-32c17.7 0 32 14.3 32 32l0 96 128 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 95.1-69.2 174.1-160 189.3l0 66.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-66.7C101.2 398.1 32 319.1 32 224l0-64c-17.7 0-32-14.3-32-32S14.3 96 32 96l64 0 0-96c0-17.7 14.3-32 32-32z"]
}, Zd = {
  prefix: "fas",
  iconName: "wand-magic-sparkles",
  icon: [576, 512, ["magic-wand-sparkles"], "e2ca", "M263.4-27L278.2 9.8 315 24.6c3 1.2 5 4.2 5 7.4s-2 6.2-5 7.4L278.2 54.2 263.4 91c-1.2 3-4.2 5-7.4 5s-6.2-2-7.4-5L233.8 54.2 197 39.4c-3-1.2-5-4.2-5-7.4s2-6.2 5-7.4L233.8 9.8 248.6-27c1.2-3 4.2-5 7.4-5s6.2 2 7.4 5zM110.7 41.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7L59.8 164.2 9.7 142.7C3.8 140.2 0 134.4 0 128s3.8-12.2 9.7-14.7L59.8 91.8 81.3 41.7C83.8 35.8 89.6 32 96 32s12.2 3.8 14.7 9.7zM464 304c6.4 0 12.2 3.8 14.7 9.7l21.5 50.1 50.1 21.5c5.9 2.5 9.7 8.3 9.7 14.7s-3.8 12.2-9.7 14.7l-50.1 21.5-21.5 50.1c-2.5 5.9-8.3 9.7-14.7 9.7s-12.2-3.8-14.7-9.7l-21.5-50.1-50.1-21.5c-5.9-2.5-9.7-8.3-9.7-14.7s3.8-12.2 9.7-14.7l50.1-21.5 21.5-50.1c2.5-5.9 8.3-9.7 14.7-9.7zM460 0c11 0 21.6 4.4 29.5 12.2l42.3 42.3C539.6 62.4 544 73 544 84s-4.4 21.6-12.2 29.5l-88.2 88.2-101.3-101.3 88.2-88.2C438.4 4.4 449 0 460 0zM44.2 398.5L308.4 134.3 409.7 235.6 145.5 499.8C137.6 507.6 127 512 116 512s-21.6-4.4-29.5-12.2L44.2 457.5C36.4 449.6 32 439 32 428s4.4-21.6 12.2-29.5z"]
}, $d = {
  prefix: "fas",
  iconName: "bell-slash",
  icon: [576, 512, [128277, 61943], "f1f6", "M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-87.5-87.5c17.2-2.4 30.5-17.3 30.5-35.2 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C464.4 308.5 448 261.8 448 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 3.2c-38.6 7.8-72.2 29.6-95.2 59.7L41-24.9zm87 238.5c0 48.1-16.4 94.8-46.4 132.4l-9.8 12.2c-5 6.3-7.8 14.1-7.8 22.2 0 19.6 15.9 35.5 35.5 35.5l235.3 0-206.9-206.9 0 4.5zM288 512c29.8 0 54.9-20.4 62-48l-124 0c7.1 27.6 32.2 48 62 48z"]
}, Jd = {
  prefix: "fas",
  iconName: "bottle-water",
  icon: [320, 512, [], "e4c5", "M112-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0C94.3 32 80 17.7 80 0s14.3-32 32-32zM16 144c0-35.3 28.7-64 64-64l160 0c35.3 0 64 28.7 64 64 0 24.1-13.3 45.1-33 56 19.7 10.9 33 31.9 33 56s-13.3 45.1-33 56c19.7 10.9 33 31.9 33 56s-13.3 45.1-33 56c19.7 10.9 33 31.9 33 56 0 35.3-28.7 64-64 64L80 544c-35.3 0-64-28.7-64-64 0-24.1 13.3-45.1 33-56-19.7-10.9-33-31.9-33-56s13.3-45.1 33-56c-19.7-10.9-33-31.9-33-56s13.3-45.1 33-56c-19.7-10.9-33-31.9-33-56z"]
}, Kd = {
  prefix: "fas",
  iconName: "tv",
  icon: [576, 512, [63717, "television", "tv-alt"], "f26c", "M64 96l0 240 448 0 0-240-448 0zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 240c0 35.3-28.7 64-64 64L64 400c-35.3 0-64-28.7-64-64L0 96zM160 448l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
}, e8 = {
  prefix: "fas",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]
}, t8 = {
  prefix: "fas",
  iconName: "flag",
  icon: [448, 512, [127988, 61725], "f024", "M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-121.6 62.7-18.8c41.9-12.6 87.1-8.7 126.2 10.9 42.7 21.4 92.5 24 137.2 7.2l37.1-13.9c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-11.8 5.9c-44.9 22.5-97.8 22.5-142.8 0-36.4-18.2-78.3-21.8-117.2-10.1L64 54.4 64 32z"]
}, n8 = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]
}, Vc = {
  prefix: "fas",
  iconName: "mug-saucer",
  icon: [576, 512, ["coffee"], "f0f4", "M64 64c0-17.7 14.3-32 32-32l352 0c70.7 0 128 57.3 128 128S518.7 288 448 288c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L64 64zm448 96c0-35.3-28.7-64-64-64l0 128c35.3 0 64-28.7 64-64zM64 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]
}, o8 = Vc, a8 = {
  prefix: "fas",
  iconName: "lock",
  icon: [384, 512, [128274], "f023", "M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]
}, i8 = {
  prefix: "fas",
  iconName: "volume-high",
  icon: [640, 512, [128266, "volume-up"], "f028", "M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C557.5 113.8 592 180.8 592 256s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.7 640 346.2 640 256S598.5 85.2 533.6 32.5zM473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C434.1 312.9 448 286.1 448 256s-13.9-56.9-35.4-74.5zM80 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L128 160 80 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48z"]
}, s8 = {
  prefix: "fas",
  iconName: "fire-extinguisher",
  icon: [512, 512, [129519], "f134", "M512 32c0-9.6-4.3-18.7-11.7-24.7S483.1-1.3 473.7 .6l-160 32C301.5 35.1 292 44.3 289 56l-65 0 0-24c0-17.7-14.3-32-32-32L160 0c-17.7 0-32 14.3-32 32l0 28.4c-55.3 12.3-101.3 49.5-125.5 99.1-5.8 11.9-.9 26.3 11.1 32.1s26.3 .9 32.1-11.1C62 146.9 91.8 121.1 128 110l0 28.8c-37.8 18-64 56.5-64 101.2l0 128 224 0 0-128c0-44.7-26.2-83.2-64-101.2l0-34.8 65 0c3 11.7 12.5 20.9 24.7 23.4l160 32c9.4 1.9 19.1-.6 26.6-6.6S512 137.6 512 128l0-96zM288 448l0-32-224 0 0 32c0 35.3 28.7 64 64 64l96 0c35.3 0 64-28.7 64-64z"]
}, c8 = {
  prefix: "fas",
  iconName: "couch",
  icon: [640, 512, [], "f4b8", "M144 272C144 224.7 109.8 185.4 64.8 177.5 72 113.6 126.2 64 192 64l256 0c65.8 0 120 49.6 127.2 113.5-45 8-79.2 47.2-79.2 94.5l0 32-352 0 0-32zM0 384L0 272c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 448 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64z"]
}, r8 = {
  prefix: "fas",
  iconName: "child",
  icon: [320, 512, [], "f1ae", "M96 64A64 64 0 1 1 224 64 64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32L80 287.8 59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z"]
}, l8 = {
  prefix: "fas",
  iconName: "toggle-on",
  icon: [576, 512, [], "f205", "M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192S490 64 384 64L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]
}, d8 = {
  prefix: "fas",
  iconName: "battery-full",
  icon: [640, 512, [128267, "battery", "battery-5"], "f240", "M528 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l416 0zM112 64c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80L112 64zm56 112c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24l304 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24l-304 0z"]
}, f8 = {
  prefix: "fas",
  iconName: "shield-halved",
  icon: [512, 512, ["shield-alt"], "f3ed", "M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]
}, h8 = {
  prefix: "fas",
  iconName: "globe",
  icon: [512, 512, [127760], "f0ac", "M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]
}, u8 = {
  prefix: "fas",
  iconName: "battery-quarter",
  icon: [640, 512, ["battery-2"], "f243", "M528 128c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l416 0zM112 64c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80L112 64zm56 112c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24l-64 0z"]
}, m8 = {
  prefix: "fas",
  iconName: "paw",
  icon: [512, 512, [], "f1b0", "M234.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5 .3-86.2 32.6-96.8 70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3-14.3-70.1 10.2-84.1 59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2-25.8 0-46.7-20.9-46.7-46.7l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3 29.1 51.7 10.2 84.1-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5 46.9 53.9 32.6 96.8-52.1 69.1-84.4 58.5z"]
}, p8 = {
  prefix: "fas",
  iconName: "bed",
  icon: [576, 512, [128716], "f236", "M32 32c17.7 0 32 14.3 32 32l0 224 224 0 0-128c0-17.7 14.3-32 32-32l160 0c53 0 96 43 96 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-448 0 0 64c0 17.7-14.3 32-32 32S0 465.7 0 448L0 64C0 46.3 14.3 32 32 32zm80 160a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]
}, A8 = {
  prefix: "fas",
  iconName: "person-running",
  icon: [448, 512, [127939, "running"], "f70c", "M256.5-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM123.6 176c-3.3 0-6.2 2-7.4 5L94.2 235.9c-6.6 16.4-25.2 24.4-41.6 17.8s-24.4-25.2-17.8-41.6l21.9-54.9C67.7 129.9 94.1 112 123.6 112l97.3 0c28.5 0 54.8 15.1 69.1 39.7l32.8 56.3 61.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-61.6 0c-22.8 0-43.8-12.1-55.3-31.8l-10-17.1-20.7 70.4 75.4 22.6c27.7 8.3 41.8 39 30.1 65.5L285.7 509c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l49.2-110.8-95.9-28.8c-32.7-9.8-52-43.7-43.7-76.8l22.7-90.6-35.9 0zm-8 181c13.3 14.9 30.7 26.3 51.2 32.4l4.7 1.4-6.9 19.3c-5.8 16.3-16 30.8-29.3 41.8L52.9 519.8c-13.6 11.2-33.8 9.3-45-4.3s-9.3-33.8 4.3-45l82.4-67.9c4.5-3.7 7.8-8.5 9.8-13.9L115.6 357z"]
}, g8 = {
  prefix: "fas",
  iconName: "music",
  icon: [512, 512, [127925], "f001", "M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]
}, b8 = {
  prefix: "fas",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]
}, v8 = {
  prefix: "fas",
  iconName: "fan",
  icon: [512, 512, [], "f863", "M160 144c0-79.5 64.5-144 144-144 8.8 0 16 7.2 16 16l0 152.2c15-5.3 31.2-8.2 48-8.2 79.5 0 144 64.5 144 144 0 8.8-7.2 16-16 16l-152.2 0c5.3 15 8.2 31.2 8.2 48 0 79.5-64.5 144-144 144-8.8 0-16-7.2-16-16l0-152.2c-15 5.3-31.2 8.2-48 8.2-79.5 0-144-64.5-144-144 0-8.8 7.2-16 16-16l152.2 0c-5.3-15-8.2-31.2-8.2-48zm96 144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, x8 = {
  prefix: "fas",
  iconName: "door-closed",
  icon: [448, 512, [128682], "f52a", "M32 64C32 28.7 60.7 0 96 0L352 0c35.3 0 64 28.7 64 64l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64zM320 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, y8 = {
  prefix: "fas",
  iconName: "soap",
  icon: [512, 512, [129532], "e06e", "M208-32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM320 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM352 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 160l112 0c0 23.8 7.4 45.9 20.1 64L160 224c-53 0-96 43-96 96s43 96 96 96l192 0c53 0 96-43 96-96 0-35.1-18.9-65.9-47-82.6 19-19.8 30.7-46.6 31-76.1 45.4 7.6 80 47.1 80 94.7l0 128c0 53-43 96-96 96L96 480c-53 0-96-43-96-96L0 256c0-53 43-96 96-96zm64 112l192 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48s21.5-48 48-48z"]
}, w8 = {
  prefix: "fas",
  iconName: "recycle",
  icon: [512, 512, [9842, 9850, 9851], "f1b8", "M152.3 60C198.5-20 314-20 360.2 60l37.3 64.6 27.7-16c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3L436.9 223c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l27.7-16-37.3-64.6c-21.6-37.3-75.4-37.3-97 0l-5.3 9.1c-8.8 15.3-28.4 20.5-43.7 11.7S138.2 84.5 147 69.1l5.3-9.1zM449.7 279.1c15.3-8.8 34.9-3.6 43.7 11.7l5.3 9.1c46.2 80-11.5 180-103.9 180l-74.6 0 0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 74.6 0c43.1 0 70.1-46.7 48.5-84l-5.3-9.1c-8.8-15.3-3.6-34.9 11.7-43.7zM51 235.4l-27.7-16c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20L116.5 152c12.8-3.4 26 4.2 29.4 17l23.4 87.4c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-27.7-16-37.3 64.6c-21.6 37.3 5.4 84 48.5 84l10.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.6 0C25.3 480-32.4 380 13.8 300L51 235.4z"]
}, k8 = {
  prefix: "fas",
  iconName: "money-bill-1",
  icon: [512, 512, ["money-bill-alt"], "f3d1", "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm192 80a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM64 184l0-48c0-4.4 3.6-8 8-8l48 0c4.4 0 8.1 3.6 7.5 8-3.6 29-26.6 51.9-55.5 55.5-4.4 .5-8-3.1-8-7.5zm0 144c0-4.4 3.6-8.1 8-7.5 29 3.6 51.9 26.6 55.5 55.5 .5 4.4-3.1 8-7.5 8l-48 0c-4.4 0-8-3.6-8-8l0-48zM440 191.5c-29-3.6-51.9-26.6-55.5-55.5-.5-4.4 3.1-8 7.5-8l48 0c4.4 0 8 3.6 8 8l0 48c0 4.4-3.6 8.1-8 7.5zM448 328l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8.1-3.6-7.5-8 3.6-29 26.6-51.9 55.5-55.5 4.4-.5 8 3.1 8 7.5zM240 188c-11 0-20 9-20 20 0 9.7 6.9 17.7 16 19.6l0 48.4-4 0c-11 0-20 9-20 20s9 20 20 20l48 0c11 0 20-9 20-20s-9-20-20-20l-4 0 0-68c0-11-9-20-20-20l-16 0z"]
}, _8 = {
  prefix: "fas",
  iconName: "cloud-bolt",
  icon: [512, 512, [127785, "thunderstorm"], "f76c", "M0 224c0 53 43 96 96 96l38.6 0 124.1-111c12.2-10.9 28-17 44.4-17 44.6 0 76.5 43 63.7 85.7L354.1 320 416 320c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0 1.1-5.2 1.6-10.5 1.6-16 0-44.2-35.8-80-80-80-24.3 0-46.1 10.9-60.8 28-18.7-35.7-56.1-60-99.2-60-61.9 0-112 50.1-112 112 0 7.1 .7 14.1 1.9 20.8-38.3 12.6-65.9 48.7-65.9 91.2zM160.6 400l61.8 0-31.2 104.1c-3.6 11.9 5.3 23.9 17.8 23.9 4.6 0 9-1.7 12.4-4.7L362.5 396.9c3.5-3.1 5.5-7.6 5.5-12.4 0-9.2-7.4-16.6-16.6-16.6l-61.8 0 31.2-104.1c3.6-11.9-5.3-23.9-17.8-23.9-4.6 0-9 1.7-12.4 4.7L149.5 371.1c-3.5 3.1-5.5 7.6-5.5 12.4 0 9.2 7.4 16.6 16.6 16.6z"]
}, z8 = {
  prefix: "fas",
  iconName: "mug-hot",
  icon: [576, 512, [9749], "f7b6", "M152-16c-13.3 0-24 10.7-24 24 0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.3 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C183.5 31.7 176 24.1 176 8 176-5.3 165.3-16 152-16zM96 192c-17.7 0-32 14.3-32 32l0 192c0 53 43 96 96 96l192 0c41.8 0 77.4-26.7 90.5-64l5.5 0c70.7 0 128-57.3 128-128S518.7 192 448 192L96 192zM448 384l0-128c35.3 0 64 28.7 64 64s-28.7 64-64 64zM288 8c0-13.3-10.7-24-24-24S240-5.3 240 8c0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.3 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C295.5 31.7 288 24.1 288 8z"]
}, M8 = {
  prefix: "fas",
  iconName: "bolt",
  icon: [448, 512, [9889, "zap"], "f0e7", "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"]
}, C8 = {
  prefix: "fas",
  iconName: "jar",
  icon: [320, 512, [], "e516", "M32-8c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 16C42.7 16 32 5.3 32-8zM0 128C0 92.7 28.7 64 64 64l192 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128zm96 64c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L96 192z"]
}, L8 = {
  prefix: "fas",
  iconName: "wifi",
  icon: [576, 512, ["wifi-3", "wifi-strong"], "f1eb", "M288 96c-90.9 0-173.2 36-233.7 94.6-12.7 12.3-33 12-45.2-.7s-12-33 .7-45.2C81.7 74.9 179.9 32 288 32S494.3 74.9 566.3 144.7c12.7 12.3 13 32.6 .7 45.2s-32.6 13-45.2 .7C461.2 132 378.9 96 288 96zM240 432a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM168 326.2c-11.7 13.3-31.9 14.5-45.2 2.8s-14.5-31.9-2.8-45.2C161 237.4 221.1 208 288 208s127 29.4 168 75.8c11.7 13.3 10.4 33.5-2.8 45.2s-33.5 10.4-45.2-2.8C378.6 292.9 335.8 272 288 272s-90.6 20.9-120 54.2z"]
}, S8 = {
  prefix: "fas",
  iconName: "elevator",
  icon: [512, 512, [], "e16d", "M292.7-4.7l64 64c6.2 6.2 16.4 6.2 22.6 0l64-64c4.6-4.6 5.9-11.5 3.5-17.4S438.5-32 432-32L304-32c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4zm-160-22.6l-64 64c-4.6 4.6-5.9 11.5-3.5 17.4S73.5 64 80 64l128 0c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-64-64c-6.2-6.2-16.4-6.2-22.6 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 128zm96 96a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM80 400c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-16zm192 0c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 16c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-16zm32-128a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]
}, E8 = {
  prefix: "fas",
  iconName: "hammer",
  icon: [640, 512, [128296], "f6e3", "M246.9 18.3L271 3.8c21.6-13 46.3-19.8 71.5-19.8 36.8 0 72.2 14.6 98.2 40.7l63.9 63.9c15 15 23.4 35.4 23.4 56.6l0 30.9 19.7 19.7 0 0c15.6-15.6 40.9-15.6 56.6 0s15.6 40.9 0 56.6l-64 64c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L464 240 433.1 240c-21.2 0-41.6-8.4-56.6-23.4l-49.1-49.1c-15-15-23.4-35.4-23.4-56.6l0-12.7c0-11.2-5.9-21.7-15.5-27.4l-41.6-25c-10.4-6.2-10.4-21.2 0-27.4zM50.7 402.7l222.1-222.1 90.5 90.5-222.1 222.1c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5z"]
}, I8 = {
  prefix: "fas",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, N8 = {
  prefix: "fas",
  iconName: "face-smile",
  icon: [512, 512, [128578, "smile"], "f118", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM165.4 321.9c20.4 28 53.4 46.1 90.6 46.1s70.2-18.1 90.6-46.1c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5C356.3 390 309.2 416 256 416s-100.3-26-129.4-65.9c-7.8-10.7-5.4-25.7 5.3-33.5s25.7-5.4 33.5 5.3zM144 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, D8 = {
  prefix: "fas",
  iconName: "umbrella",
  icon: [512, 512, [], "f0e9", "M256-32c17.7 0 32 14.3 32 32l0 2c126.3 15.7 224 123.5 224 254 0 3.8-.1 7.5-.2 11.3-.3 6.9-5 12.8-11.7 14.7s-13.8-.7-17.6-6.5c-14.4-21.4-38.8-35.5-66.5-35.5-29.3 0-54.9 15.7-68.9 39.3-2.7 4.6-7.6 7.6-13 7.8s-10.5-2.2-13.7-6.5c-14.6-19.8-38-32.6-64.5-32.6s-49.9 12.8-64.5 32.6c-3.2 4.3-8.3 6.8-13.7 6.5s-10.2-3.2-13-7.8c-14-23.6-39.6-39.3-68.9-39.3-27.7 0-52.1 14.1-66.5 35.5-3.9 5.7-11 8.4-17.6 6.5S.5 274.2 .2 267.3C.1 263.5 0 259.8 0 256 0 125.5 97.7 17.7 224 2l0-2c0-17.7 14.3-32 32-32zm32 360l0 102.6c0 45-36.5 81.4-81.4 81.4-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6 9.6 0 17.4-7.8 17.4-17.4L224 328c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, T8 = {
  prefix: "fas",
  iconName: "microchip",
  icon: [512, 512, [], "f2db", "M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm16 48l0 160 160 0 0-160-160 0z"]
}, B8 = {
  prefix: "fas",
  iconName: "pause",
  icon: [384, 512, [9208], "f04c", "M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"]
}, P8 = {
  prefix: "fas",
  iconName: "desktop",
  icon: [512, 512, [128421, 61704, "desktop-alt"], "f390", "M64 32C28.7 32 0 60.7 0 96L0 352c0 35.3 28.7 64 64 64l144 0-16 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0-16-48 144 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L96 320c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32z"]
}, O8 = {
  prefix: "fas",
  iconName: "location-dot",
  icon: [384, 512, ["map-marker-alt"], "f3c5", "M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]
}, H8 = {
  prefix: "fas",
  iconName: "screwdriver-wrench",
  icon: [576, 512, ["tools"], "f7d9", "M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z"]
}, F8 = {
  prefix: "fas",
  iconName: "battery-empty",
  icon: [640, 512, ["battery-0"], "f244", "M112 64c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-48c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80L112 64zM96 144c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224z"]
}, R8 = {
  prefix: "fas",
  iconName: "keyboard",
  icon: [576, 512, [9e3], "f11c", "M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM176 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]
}, j8 = {
  prefix: "fas",
  iconName: "stopwatch",
  icon: [448, 512, [9201], "f2f2", "M168.5 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 25.3c-108 11.9-192 103.5-192 214.7 0 119.3 96.7 216 216 216s216-96.7 216-216c0-39.8-10.8-77.1-29.6-109.2l28.2-28.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-23.4 23.4c-32.9-30.2-75.2-50.3-122-55.5l0-25.3 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0zm80 184l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-13.3 10.7-24 24-24s24 10.7 24 24z"]
}, q8 = {
  prefix: "fas",
  iconName: "satellite-dish",
  icon: [512, 512, [128225], "f7c0", "M232 0c154.6 0 280 125.4 280 280 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232-13.3 0-24-10.7-24-24S218.7 0 232 0zM208 120c0-13.3 10.7-24 24-24 101.6 0 184 82.4 184 184 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-75.1-60.9-136-136-136-13.3 0-24-10.7-24-24zM26.4 142.7c8.8-17.9 32.4-19.9 46.5-5.8l128.5 128.5 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32 128.5 128.5c14.1 14.1 12 37.6-5.8 46.5-34.2 16.9-72.6 26.4-113.3 26.4-141.4 0-256-114.6-256-256 0-40.7 9.5-79.2 26.4-113.3z"]
}, Q8 = {
  prefix: "fas",
  iconName: "train",
  icon: [384, 512, [128646], "f238", "M0 96C0 43 43 0 96 0L288 0c53 0 96 43 96 96l0 256c0 40.1-24.6 74.5-59.5 88.8l53.9 63.7c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8l-74-87.5-151.3 0-74 87.5c-8.6 10.1-23.7 11.4-33.8 2.8s-11.4-23.7-2.8-33.8l53.9-63.7C24.6 426.5 0 392.1 0 352L0 96zm64 32l0 96c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32zM192 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]
}, W8 = {
  prefix: "fas",
  iconName: "gamepad",
  icon: [640, 512, [], "f11b", "M448 64c106 0 192 86 192 192S554 448 448 448l-256 0C86 448 0 362 0 256S86 64 192 64l256 0zM192 176c-13.3 0-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24zm240 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64-96a32 32 0 1 0 0 64 32 32 0 1 0 0-64z"]
}, U8 = {
  prefix: "fas",
  iconName: "circle-dot",
  icon: [512, 512, [128280, "dot-circle"], "f192", "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]
}, Y8 = {
  prefix: "fas",
  iconName: "ship",
  icon: [640, 512, [128674], "f21a", "M272 0c-26.5 0-48 21.5-48 48l0 16-16 0c-44.2 0-80 35.8-80 80l0 108.8-21.6 8.6c-14.8 5.9-22.5 22.4-17.4 37.5 10.4 31.3 26.8 59.3 47.7 83.1 20.1-9.2 41.7-13.9 63.3-14 33.1-.2 66.3 10.2 94.4 31.4l1.6 1.2 0-215-104 41.6 0-83.2c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 83.2-104-41.6 0 215 1.6-1.2c27.5-20.7 59.9-31.2 92.4-31.4 22.3-.1 44.6 4.5 65.3 14 20.9-23.7 37.3-51.8 47.7-83.1 5-15.2-2.6-31.6-17.4-37.5L512 252.8 512 144c0-44.2-35.8-80-80-80l-16 0 0-16c0-26.5-21.5-48-48-48L272 0zM403.4 476.1c21.3-16.1 49.9-16.1 71.2 0 19 14.4 41.9 28.2 67.2 33.3 26.5 5.4 54.3 .8 80.7-19.1 10.6-8 12.7-23 4.7-33.6s-23-12.7-33.6-4.7c-14.9 11.2-28.6 13.1-42.3 10.3-14.9-3-30.9-11.9-47.8-24.6-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-21.6 16.3-41.3 25.8-58.9 25.7-9.6-.1-19.9-3-31.2-11.5-10.6-8-25.6-5.9-33.6 4.7S7 482.3 17.6 490.3c19.1 14.4 39.4 21 59.8 21.1 33.9 .2 64.3-17.4 88.1-35.3 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9z"]
}, V8 = {
  prefix: "fas",
  iconName: "cat",
  icon: [576, 512, [128008], "f6be", "M64 96c53 0 96 43 96 96l0 85.8c29.7-44.7 77.8-76.2 133.4-84 25.6 60 85.2 102.1 154.6 102.1 10.9 0 21.6-1.1 32-3.1L480 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-140.8-136 108.8 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144 0c-53 0-96-43-96-96l0-224c0-16.6-12.6-30.2-28.7-31.8l-6.6-.3C44.6 158.2 32 144.6 32 128 32 110.3 46.3 96 64 96zM533.8 3.2C544.2-5.5 560 1.9 560 15.5L560 128c0 61.9-50.1 112-112 112S336 189.9 336 128l0-112.5c0-13.6 15.8-21 26.2-12.3L416 48 480 48 533.8 3.2zM400 108a20 20 0 1 0 0 40 20 20 0 1 0 0-40zm96 0a20 20 0 1 0 0 40 20 20 0 1 0 0-40z"]
}, G8 = {
  prefix: "fas",
  iconName: "cake-candles",
  icon: [448, 512, [127874, "birthday-cake", "cake"], "f1fd", "M86.4-10.5L61.8 31.6C58 38.1 56 45.6 56 53.2L56 56c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L105.6-10.5c-2-3.4-5.7-5.5-9.6-5.5s-7.6 2.1-9.6 5.5zm128 0L189.8 31.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L233.6-10.5c-2-3.4-5.7-5.5-9.6-5.5s-7.6 2.1-9.6 5.5zM317.8 31.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L361.6-10.5c-2-3.4-5.7-5.5-9.6-5.5s-7.6 2.1-9.6 5.5L317.8 31.6zM128 160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.5C26.7 226.6 0 262.2 0 304l0 20.8c20.9 1.3 41.6 7.3 60.3 18l7.1 4.1c26.3 15 58.9 13.4 83.6-4.2 43.7-31.2 102.3-31.2 146 0 24.6 17.6 57.3 19.3 83.6 4.2l7.1-4.1c18.7-10.7 39.3-16.7 60.3-18l0-20.8c0-41.8-26.7-77.4-64-90.5l0-53.5c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48zM448 373c-12.7 1.2-25.1 5-36.5 11.5l-7.1 4.1c-42.6 24.3-95.4 21.7-135.3-6.8-27-19.3-63.2-19.3-90.2 0-39.9 28.5-92.7 31.2-135.3 6.8l-7.1-4.1C25.1 378 12.7 374.1 0 373l0 75c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-75z"]
}, X8 = {
  prefix: "fas",
  iconName: "chair",
  icon: [448, 512, [129681], "f6c0", "M152 256l0-181.8c-24.5 20.5-40 51.4-40 85.8l0 96 40 0zm48 0l48 0 0-205.4c-7.7-1.7-15.8-2.6-24-2.6s-16.3 .9-24 2.6L200 256zM296 74.2l0 181.8 40 0 0-96c0-34.4-15.5-65.2-40-85.8zM32 256l32 0 0-96C64 71.6 135.6 0 224 0S384 71.6 384 160l0 96 32 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-256 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32z"]
}, Z8 = {
  prefix: "fas",
  iconName: "wind",
  icon: [512, 512, [], "f72e", "M288 32c0 17.7 14.3 32 32 32l40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L32 112c-17.7 0-32 14.3-32 32s14.3 32 32 32l328 0c48.6 0 88-39.4 88-88S408.6 0 360 0L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l40 0c48.6 0 88-39.4 88-88s-39.4-88-88-88L32 336c-17.7 0-32 14.3-32 32s14.3 32 32 32l136 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"]
}, $8 = {
  prefix: "fas",
  iconName: "tablet-screen-button",
  icon: [448, 512, ["tablet-alt"], "f3fa", "M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM256 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64l-320 0 0 288 320 0 0-288z"]
}, J8 = {
  prefix: "fas",
  iconName: "shield",
  icon: [512, 512, [128737, "shield-blank"], "f132", "M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0z"]
};
const K8 = {
  "fa-alarm-clock": b6,
  "fa-baby": y3,
  "fa-backward": Y6,
  "fa-bath": B6,
  "fa-battery-empty": F8,
  "fa-battery-full": d8,
  "fa-battery-half": c6,
  "fa-battery-quarter": u8,
  "fa-bed": p8,
  "fa-bell": k3,
  "fa-bell-slash": $d,
  "fa-bicycle": K6,
  "fa-blender": k6,
  "fa-bolt": M8,
  "fa-bookmark": kd,
  "fa-bottle-water": Jd,
  "fa-bowl-food": R3,
  "fa-broom": I6,
  "fa-building": J6,
  "fa-bus": Gd,
  "fa-cake-candles": G8,
  "fa-calendar-days": M3,
  "fa-camera": Q3,
  "fa-car": b3,
  "fa-car-side": hd,
  "fa-carrot": q6,
  "fa-cat": V8,
  "fa-chair": X8,
  "fa-champagne-glasses": bd,
  "fa-chart-line": $6,
  "fa-chart-simple": Ud,
  "fa-child": r8,
  "fa-circle-check": Nd,
  "fa-circle-dot": U8,
  "fa-circle-exclamation": U6,
  "fa-circle-half-stroke": n6,
  "fa-circle-pause": L3,
  "fa-circle-play": Od,
  "fa-clock": o6,
  "fa-clone": r6,
  "fa-cloud": W6,
  "fa-cloud-bolt": _8,
  "fa-cloud-rain": x6,
  "fa-cloud-showers-heavy": nd,
  "fa-cloud-sun": Md,
  "fa-coffee": o8,
  "fa-comments": Id,
  "fa-compass": I8,
  "fa-copy": b8,
  "fa-couch": c8,
  "fa-desktop": P8,
  "fa-display": T3,
  "fa-dog": A3,
  "fa-door-closed": x8,
  "fa-door-open": q3,
  "fa-droplet": Sd,
  "fa-drumstick-bite": Wd,
  "fa-dumbbell": Cd,
  "fa-elevator": S8,
  "fa-envelope": x3,
  "fa-eye": Y3,
  "fa-face-grin-stars": U3,
  "fa-face-smile": N8,
  "fa-fan": v8,
  "fa-film": Ed,
  "fa-fingerprint": md,
  "fa-fire": p6,
  "fa-fire-extinguisher": s8,
  "fa-fire-flame-curved": w6,
  "fa-flag": t8,
  "fa-forward": l6,
  "fa-gamepad": W8,
  "fa-gauge": E3,
  "fa-gauge-high": zd,
  "fa-gear": ed,
  "fa-gem": rd,
  "fa-gift": S3,
  "fa-glass-water": cd,
  "fa-globe": h8,
  "fa-hammer": E8,
  "fa-hand": G6,
  "fa-hands-wash": L6,
  "fa-headphones": Vd,
  "fa-heart": s6,
  "fa-heart-pulse": M6,
  "fa-highlighter": Q6,
  "fa-hospital": y6,
  "fa-hourglass": Qd,
  "fa-house": pd,
  "fa-house-chimney": td,
  "fa-house-lock": V3,
  "fa-jar": C8,
  "fa-key": P3,
  "fa-keyboard": R8,
  "fa-kitchen-set": g3,
  "fa-laptop": S6,
  "fa-leaf": Hd,
  "fa-life-ring": ud,
  "fa-lightbulb": j6,
  "fa-location-dot": O8,
  "fa-lock": a8,
  "fa-lock-open": Ld,
  "fa-map-pin": v3,
  "fa-message": z3,
  "fa-microchip": T8,
  "fa-mobile-screen": Bd,
  "fa-money-bill1": k8,
  "fa-moon": Dd,
  "fa-motorcycle": Fd,
  "fa-mountain-sun": H6,
  "fa-mug-hot": z8,
  "fa-mug-saucer": Vc,
  "fa-music": g8,
  "fa-newspaper": v6,
  "fa-note-sticky": X3,
  "fa-paper-plane": a6,
  "fa-pause": B8,
  "fa-paw": m8,
  "fa-person": qd,
  "fa-person-running": A8,
  "fa-person-walking": gd,
  "fa-phone": Pd,
  "fa-photo-video": m6,
  "fa-plane": Td,
  "fa-plate-wheat": od,
  "fa-play": id,
  "fa-plug": Xd,
  "fa-plug-circle-bolt": R6,
  "fa-power-off": N3,
  "fa-puzzle-piece": sd,
  "fa-radio": e6,
  "fa-rainbow": W3,
  "fa-rectangle-list": V6,
  "fa-recycle": w8,
  "fa-satellite-dish": q8,
  "fa-screwdriver-wrench": H8,
  "fa-seedling": f6,
  "fa-share-from-square": G3,
  "fa-shield": J8,
  "fa-shield-halved": f8,
  "fa-shield-heart": D6,
  "fa-shield-virus": d6,
  "fa-ship": Y8,
  "fa-shirt": ad,
  "fa-shower": O6,
  "fa-signal": D3,
  "fa-sliders": Ad,
  "fa-smog": H3,
  "fa-snowflake": xd,
  "fa-soap": y8,
  "fa-solar-panel": Yd,
  "fa-spray-can": Rd,
  "fa-square-check": T6,
  "fa-stairs": X6,
  "fa-star": e8,
  "fa-star-half": h6,
  "fa-stop": $3,
  "fa-stopwatch": j8,
  "fa-sun": F6,
  "fa-table": i6,
  "fa-tablet-screen-button": $8,
  "fa-temperature-half": wd,
  "fa-temperature-high": J3,
  "fa-temperature-low": j3,
  "fa-thermometer": F3,
  "fa-thumbs-down": E6,
  "fa-thumbs-up": Z6,
  "fa-toggle-off": _3,
  "fa-toggle-on": l8,
  "fa-toilet": ld,
  "fa-toolbox": I3,
  "fa-traffic-light": A6,
  "fa-train": Q8,
  "fa-trash-can": fd,
  "fa-tree": O3,
  "fa-triangle-exclamation": n8,
  "fa-truck": w3,
  "fa-tv": Kd,
  "fa-umbrella": D8,
  "fa-unlock": B3,
  "fa-unlock-keyhole": t6,
  "fa-user": vd,
  "fa-user-shield": z6,
  "fa-users": g6,
  "fa-utensils": N6,
  "fa-video": Yc,
  "fa-video-camera": _6,
  "fa-volume-high": i8,
  "fa-volume-low": jd,
  "fa-volume-xmark": _d,
  "fa-wand-magic-sparkles": Zd,
  "fa-wand-sparkles": P6,
  "fa-warehouse": C3,
  "fa-water": Z3,
  "fa-wave-square": K3,
  "fa-wifi": L8,
  "fa-wind": Z8,
  "fa-wine-glass": yd,
  "fa-wrench": dd
}, ef = [
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
var tf = {
  prefix: "far",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z"]
}, nf = {
  prefix: "far",
  iconName: "bell",
  icon: [448, 512, [128276, 61602], "f0f3", "M224 0c-13.3 0-24 10.7-24 24l0 9.7C118.6 45.3 56 115.4 56 200l0 14.5c0 37.7-10 74.7-29 107.3L5.1 359.2C1.8 365 0 371.5 0 378.2 0 399.1 16.9 416 37.8 416l372.4 0c20.9 0 37.8-16.9 37.8-37.8 0-6.7-1.8-13.3-5.1-19L421 321.7c-19-32.6-29-69.6-29-107.3l0-14.5c0-84.6-62.6-154.7-144-166.3l0-9.7c0-13.3-10.7-24-24-24zM392.4 368l-336.9 0 12.9-22.1C91.7 306 104 260.6 104 214.5l0-14.5c0-66.3 53.7-120 120-120s120 53.7 120 120l0 14.5c0 46.2 12.3 91.5 35.5 131.4L392.4 368zM156.1 464c9.9 28 36.6 48 67.9 48s58-20 67.9-48l-135.8 0z"]
}, of = {
  prefix: "far",
  iconName: "message",
  icon: [512, 512, ["comment-alt"], "f27a", "M203.7 512.9s0 0 0 0l-37.8 26.7c-7.3 5.2-16.9 5.8-24.9 1.7S128 529 128 520l0-72-32 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120.4 0-91.9 64.9zm64.3-104.1c8.1-5.7 17.8-8.8 27.7-8.8L416 400c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L96 80c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l56 0c10.4 0 19.3 6.6 22.6 15.9 .9 2.5 1.4 5.2 1.4 8.1l0 49.7c32.7-23.1 63.3-44.7 91.9-64.9z"]
}, af = {
  prefix: "far",
  iconName: "calendar-days",
  icon: [448, 512, ["calendar-alt"], "f073", "M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z"]
}, sf = {
  prefix: "far",
  iconName: "circle-pause",
  icon: [512, 512, [62092, "pause-circle"], "f28b", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144z"]
}, cf = {
  prefix: "far",
  iconName: "face-grin-stars",
  icon: [512, 512, [129321, "grin-stars"], "f587", "M0 256c0-29.6 5-57.9 14.2-84.4l17.3 16.9-4.6 27c-4.2 24.4 5.6 46.2 22 59.9 9.8 105.8 98.8 188.7 207.1 188.7s197.4-82.8 207.1-188.6c16.4-13.7 26.1-35.4 22-59.9l-4.6-27 17.3-16.9c9.2 26.4 14.2 54.8 14.2 84.4 0 141.4-114.6 256-256 256S0 397.4 0 256zM256 48c-15.2 0-30 1.6-44.3 4.7L201.4 31.8C197 23 191.1 15.8 184.2 10.2 207 3.6 231.1 0 256 0s49 3.6 71.8 10.2C320.9 15.8 315 23 310.6 31.8L300.3 52.7C286 49.6 271.2 48 256 48zM372.2 302.3c11.8-3.6 23.7 6.1 19.6 17.8-19.8 55.9-73.1 96-135.8 96-62.7 0-116-40-135.8-95.9-4.1-11.6 7.8-21.4 19.6-17.8 34.7 10.6 74.2 16.5 116.1 16.5 42 0 81.5-6 116.3-16.6zM353.7 53.1c5.9-11.9 22.8-11.9 28.7 0l23.3 47.2 52 7.6c13.1 1.9 18.4 18 8.9 27.3l-37.7 36.7 8.9 51.8c2.2 13.1-11.5 23-23.2 16.9L368 216 321.5 240.5c-11.7 6.2-25.5-3.8-23.2-16.9l8.9-51.8-37.7-36.7c-9.5-9.3-4.3-25.4 8.9-27.3l52-7.6 23.3-47.2zm-195.3 0l23.3 47.2 52 7.6c13.1 1.9 18.4 18 8.9 27.3l-37.7 36.7 8.9 51.8c2.2 13.1-11.5 23-23.2 16.9L144 216 97.5 240.5c-11.7 6.2-25.5-3.8-23.2-16.9l8.9-51.8-37.7-36.7c-9.5-9.3-4.3-25.4 8.9-27.3l52-7.6 23.3-47.2c5.9-11.9 22.8-11.9 28.7 0z"]
}, rf = {
  prefix: "far",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"]
}, lf = {
  prefix: "far",
  iconName: "share-from-square",
  icon: [576, 512, [61509, "share-square"], "f14d", "M425.5 7c-6.9-6.9-17.2-8.9-26.2-5.2S384.5 14.3 384.5 24l0 56-48 0c-88.4 0-160 71.6-160 160 0 46.7 20.7 80.4 43.6 103.4 8.1 8.2 16.5 14.9 24.3 20.4 9.2 6.5 21.7 5.7 30.1-1.9s10.2-20 4.5-29.8c-3.6-6.3-6.5-14.9-6.5-26.7 0-36.2 29.3-65.5 65.5-65.5l46.5 0 0 56c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l136-136c9.4-9.4 9.4-24.6 0-33.9L425.5 7zm7 97l0-22.1 78.1 78.1-78.1 78.1 0-22.1c0-13.3-10.7-24-24-24L338 192c-50.9 0-93.9 33.5-108.3 79.6-3.3-9.4-5.2-19.8-5.2-31.6 0-61.9 50.1-112 112-112l72 0c13.3 0 24-10.7 24-24zm-320-8c-44.2 0-80 35.8-80 80l0 256c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24 0z"]
}, df = {
  prefix: "far",
  iconName: "note-sticky",
  icon: [448, 512, [62026, "sticky-note"], "f249", "M240 432L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 176-88 0c-39.8 0-72 32.2-72 72l0 88zM380.1 320L288 412.1 288 344c0-13.3 10.7-24 24-24l68.1 0zM0 416c0 35.3 28.7 64 64 64l197.5 0c17 0 33.3-6.7 45.3-18.7L429.3 338.7c12-12 18.7-28.3 18.7-45.3L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416z"]
}, ff = {
  prefix: "far",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, hf = {
  prefix: "far",
  iconName: "paper-plane",
  icon: [576, 512, [61913], "f1d8", "M290.5 287.7L491.4 86.9 359 456.3 290.5 287.7zM457.4 53L256.6 253.8 88 185.3 457.4 53zM38.1 216.8l205.8 83.6 83.6 205.8c5.3 13.1 18.1 21.7 32.3 21.7 14.7 0 27.8-9.2 32.8-23.1L570.6 8c3.5-9.8 1-20.6-6.3-28s-18.2-9.8-28-6.3L39.4 151.7c-13.9 5-23.1 18.1-23.1 32.8 0 14.2 8.6 27 21.7 32.3z"]
}, uf = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"]
}, mf = {
  prefix: "far",
  iconName: "clone",
  icon: [512, 512, [], "f24d", "M288 464L64 464c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l48 0 0-48-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-48 0 0 48c0 8.8-7.2 16-16 16zM224 304c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-224 0zm-64-16c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224z"]
}, pf = {
  prefix: "far",
  iconName: "star-half",
  icon: [576, 512, [61731], "f089", "M285.7-15.8c10.8 2.6 18.4 12.2 18.4 23.3l0 387.1c0 9-5.1 17.3-13.1 21.4L143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3L193.1 125.3 258.8-3.3c5-9.9 16.2-15 27-12.4zM256.1 107.4L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 92.2-46.9 0-272.6z"]
}, Af = {
  prefix: "far",
  iconName: "newspaper",
  icon: [512, 512, [128240], "f1ea", "M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM192 152c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48zm152 24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM216 256l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, gf = {
  prefix: "far",
  iconName: "hospital",
  icon: [576, 512, [127973, 62589, "hospital-alt", "hospital-wide"], "f0f8", "M176 0c-35.3 0-64 28.7-64 64l0 48-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-272c0-35.3-28.7-64-64-64l-48 0 0-48c0-35.3-28.7-64-64-64L176 0zM160 64c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 72c0 13.3 10.7 24 24 24l72 0c8.8 0 16 7.2 16 16l0 272c0 8.8-7.2 16-16 16l-176 0 0-80c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 80-176 0c-8.8 0-16-7.2-16-16l0-272c0-8.8 7.2-16 16-16l72 0c13.3 0 24-10.7 24-24l0-72zM112 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM96 336l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm320 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm16-112c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM264 104l0 32-32 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"]
}, bf = {
  prefix: "far",
  iconName: "comment",
  icon: [512, 512, [128489, 61669], "f075", "M51.9 384.9C19.3 344.6 0 294.4 0 240 0 107.5 114.6 0 256 0S512 107.5 512 240 397.4 480 256 480c-36.5 0-71.2-7.2-102.6-20L37 509.9c-3.7 1.6-7.5 2.1-11.5 2.1-14.1 0-25.5-11.4-25.5-25.5 0-4.3 1.1-8.5 3.1-12.2l48.8-89.4zm37.3-30.2c12.2 15.1 14.1 36.1 4.8 53.2l-18 33.1 58.5-25.1c11.8-5.1 25.2-5.2 37.1-.3 25.7 10.5 54.2 16.4 84.3 16.4 117.8 0 208-88.8 208-192S373.8 48 256 48 48 136.8 48 240c0 42.8 15.1 82.4 41.2 114.7z"]
}, vf = {
  prefix: "far",
  iconName: "thumbs-down",
  icon: [512, 512, [128078, 61576], "f165", "M360 32l7.4 .4c35 3.6 62.5 32.2 64.4 67.7 17.8 11.8 30.1 31.4 32 53.9l.2 6c0 5.7-.7 11.2-2 16.5 10.2 11.5 16.8 26.3 17.8 42.7l.2 4.8c0 13.2-3.6 25.4-9.8 36 4.9 8.4 8.2 17.9 9.3 28l.4 8c0 37.3-28.3 67.9-64.6 71.6l-7.4 .4-109.7 0 14.1 30 3.1 7.6c12.5 35.7-1.8 75.5-34.2 95l-7.2 3.9c-37.5 17.6-81.7 3.6-102.6-31.2l-.6-.9-2.7-5-.6-1.2-30.1-64c-9.4 17.8-28 29.9-49.5 29.9l-32 0c-30.9 0-56-25.1-56-56L0 152c0-30.9 25.1-56 56-56l32 0c12.4 0 23.9 4.1 33.2 11 13.2-21.4 32-39.4 55-51.6l12.2-6.5 .7-.3 6.6-3.2 .7-.3 7.1-3c16.7-6.6 34.5-9.9 52.6-9.9L360 32zM255.9 80c-12 0-23.9 2.3-35.1 6.6l-4.7 2-5.3 2.6 0 0-12.2 6.5c-29.2 15.5-48.3 44.9-50.7 77.6l-.2 8 0 112.9 .1 4.1c.5 8.2 2.5 16.2 6 23.7l56.8 120.9 2.1 3.8c8.4 13.7 26 19.1 40.8 12.2l2.9-1.6c13-7.8 18.7-23.7 13.7-38l-1.2-3-30.2-64.2c-3.5-7.4-2.9-16.1 1.5-23.1s12-11.1 20.2-11.1l147.5 0 2.4-.1c11.3-1.1 20.3-10.1 21.4-21.4l.1-2.5c0-7.1-3.1-13.5-8.2-18-5.2-4.6-8.2-11.1-8.2-18s3-13.4 8.2-18c4.4-3.9 7.4-9.3 8-15.3l.2-2.7c0-8.4-4.4-15.9-11.2-20.2-10.7-6.9-14.2-20.9-8-32 1.5-2.6 2.5-5.6 2.9-8.6l.2-3.2c0-10.6-6.9-19.6-16.6-22.8-11.7-3.8-18.7-15.9-16-28 .2-.9 .3-1.8 .4-2.6l.2-2.6c0-12.4-9.5-22.6-21.6-23.8L360 80 255.9 80zM56 144c-4.4 0-8 3.6-8 8l0 224c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-224c0-4.4-3.6-8-8-8l-32 0z"]
}, xf = {
  prefix: "far",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zm230.7 89.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L211.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"]
}, yf = {
  prefix: "far",
  iconName: "sun",
  icon: [576, 512, [9728], "f185", "M288-32c8 0 15.4 4 19.9 10.6l58.8 87.4 103.4-20.2c7.8-1.5 15.9 .9 21.6 6.6s8.1 13.8 6.6 21.6L478 177.3 565.4 236.1C572 240.5 576 248 576 256s-4 15.4-10.6 19.9L478 334.7 498.2 438c1.5 7.8-.9 15.9-6.6 21.6s-13.8 8.1-21.6 6.6L366.7 446 307.9 533.4C303.4 540 296 544 288 544s-15.4-4-19.9-10.6L209.3 446 105.9 466.2c-7.8 1.5-15.9-.9-21.6-6.6s-8.1-13.8-6.6-21.6L98 334.7 10.6 275.9C4 271.4 0 264 0 256s4-15.4 10.6-19.9L98 177.3 77.8 73.9c-1.5-7.8 .9-15.9 6.6-21.6s13.8-8.1 21.6-6.6l103.3 20.2 58.8-87.4 1.8-2.3C274.4-29 281-32 288-32zm-47.8 138c-5.4 8-15 12-24.5 10.2l-84-16.4 16.4 84c1.8 9.5-2.2 19.1-10.2 24.5L67 256 138 303.8c8 5.4 12 15 10.2 24.5l-16.4 84 84-16.4 3.5-.4c8.3-.4 16.3 3.6 21 10.6l47.8 71 47.8-71 2.2-2.8c5.6-6.1 14-9 22.3-7.3l84 16.4-16.4-84c-1.8-9.5 2.2-19.1 10.2-24.5l71-47.8-71-47.8c-8-5.4-12-15-10.2-24.5l16.4-84-84 16.4c-9.5 1.8-19.1-2.2-24.5-10.2l-47.8-71-47.8 71zM288 376a120 120 0 1 1 0-240 120 120 0 1 1 0 240zm0-192a72 72 0 1 0 0 144 72 72 0 1 0 0-144z"]
}, wf = {
  prefix: "far",
  iconName: "image",
  icon: [448, 512, [], "f03e", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm136 72c8.5 0 16.4 4.5 20.7 11.8l80 136c4.4 7.4 4.4 16.6 .1 24.1S352.6 384 344 384l-240 0c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2s15.2 3.8 19.7 10.2l17.2 24.6 46.5-79c4.3-7.3 12.2-11.8 20.7-11.8z"]
}, kf = {
  prefix: "far",
  iconName: "lightbulb",
  icon: [384, 512, [128161], "f0eb", "M296.5 291.1C321 265.2 336 230.4 336 192 336 112.5 271.5 48 192 48S48 112.5 48 192c0 38.4 15 73.2 39.5 99.1 21.3 22.4 44.9 54 53.3 92.9l102.4 0c8.4-39 32-70.5 53.3-92.9zm34.8 33C307.7 349 288 379.4 288 413.7l0 18.3c0 44.2-35.8 80-80 80l-32 0c-44.2 0-80-35.8-80-80l0-18.3C96 379.4 76.3 349 52.7 324.1 20 289.7 0 243.2 0 192 0 86 86 0 192 0S384 86 384 192c0 51.2-20 97.7-52.7 132.1zM144 184c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40z"]
}, _f = {
  prefix: "far",
  iconName: "map",
  icon: [512, 512, [128506, 62072], "f279", "M512 48c0-8.3-4.3-16-11.3-20.4s-15.9-4.8-23.3-1.1L352.5 88.1 180 29.4c-13.7-4.7-28.7-3.8-41.9 2.3L13.8 90.3C5.4 94.2 0 102.7 0 112L0 464c0 8.2 4.2 15.9 11.1 20.3s15.6 4.9 23.1 1.4l127.3-59.9 170.7 56.9c13.7 4.6 28.5 3.7 41.6-2.5l124.4-58.5c8.4-4 13.8-12.4 13.8-21.7l0-352zM144 82.1l0 299-96 45.2 0-299 96-45.2zm48 303.3l0-301.1 128 43.5 0 300.3-128-42.7zM368 134l96-47.4 0 298.2-96 45.2 0-296z"]
}, zf = {
  prefix: "far",
  iconName: "folder",
  icon: [512, 512, [128193, 128447, 61716, "folder-blank"], "f07b", "M64 400l384 0c8.8 0 16-7.2 16-16l0-240c0-8.8-7.2-16-16-16l-149.3 0c-17.3 0-34.2-5.6-48-16L212.3 83.2c-2.8-2.1-6.1-3.2-9.6-3.2L64 80c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16zm384 48L64 448c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4L448 80c35.3 0 64 28.7 64 64l0 240c0 35.3-28.7 64-64 64z"]
}, Mf = {
  prefix: "far",
  iconName: "circle",
  icon: [512, 512, [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], "f111", "M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]
}, Cf = {
  prefix: "far",
  iconName: "rectangle-list",
  icon: [512, 512, ["list-alt"], "f022", "M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM160 320a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm104-56l160 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l160 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]
}, Lf = {
  prefix: "far",
  iconName: "hand",
  icon: [512, 512, [129306, 9995, "hand-paper"], "f256", "M256.5 0c-25.3 0-47.2 14.7-57.6 36-7-2.6-14.5-4-22.4-4-35.3 0-64 28.7-64 64l0 165.5-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L107 437c48 48 113.1 75 181 75l16.5 0c1.5 0 3-.1 4.5-.4 91.7-6.2 165-79.4 171.1-171.1 .3-1.5 .4-3 .4-4.5l0-176c0-35.3-28.7-64-64-64-5.5 0-10.9 .7-16 2l0-2c0-35.3-28.7-64-64-64-7.9 0-15.4 1.4-22.4 4-10.4-21.3-32.3-36-57.6-36zm-16 96.1l0-.1 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 168c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136c0-8.8 7.2-16 16-16s16 7.2 16 16l0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72c0-8.8 7.2-16 16-16s16 7.2 16 16l0 172.9c-.1 .6-.1 1.3-.2 1.9-3.4 69.7-59.3 125.6-129 129-.6 0-1.3 .1-1.9 .2L288 464C232.9 464 180 442.1 141 403.1L53.2 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l43.7 43.7c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-223.4c0-8.8 7.2-16 16-16 8.8 0 16 7.1 16 15.9l0 136.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-135.9z"]
}, Sf = {
  prefix: "far",
  iconName: "thumbs-up",
  icon: [512, 512, [128077, 61575], "f164", "M171.5 38.8C192.3 4 236.5-10 274 7.6l7.2 3.8C316 32.3 330 76.5 312.4 114l0 0-14.1 30 109.7 0 7.4 .4c36.3 3.7 64.6 34.4 64.6 71.6 0 13.2-3.6 25.4-9.8 36 6.1 10.6 9.7 22.8 9.8 36 0 18.3-6.9 34.8-18 47.5 1.3 5.3 2 10.8 2 16.5 0 25.1-12.9 47-32.2 59.9-1.9 35.5-29.4 64.2-64.4 67.7l-7.4 .4-104.1 0c-18 0-35.9-3.4-52.6-9.9l-7.1-3-.7-.3-6.6-3.2-.7-.3-12.2-6.5c-12.3-6.5-23.3-14.7-32.9-24.1-4.1 26.9-27.3 47.4-55.3 47.4l-32 0c-30.9 0-56-25.1-56-56L0 200c0-30.9 25.1-56 56-56l32 0c10.8 0 20.9 3.1 29.5 8.5l50.1-106.5 .6-1.2 2.7-5 .6-.9zM56 192c-4.4 0-8 3.6-8 8l0 224c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-224c0-4.4-3.6-8-8-8l-32 0zM253.6 51c-14.8-6.9-32.3-1.6-40.7 12l-2.2 4-56.8 120.9c-3.5 7.5-5.5 15.5-6 23.7l-.1 4.2 0 112.9 .2 7.9c2.4 32.7 21.4 62.1 50.7 77.7l11.5 6.1 6.3 3.1c12.4 5.6 25.8 8.5 39.4 8.5l104.1 0 2.4-.1c12.1-1.2 21.6-11.5 21.6-23.9l-.2-2.6c-.1-.9-.2-1.7-.4-2.6-2.7-12.1 4.3-24.2 16-28 9.7-3.1 16.6-12.2 16.6-22.8 0-4.3-1.1-8.2-3.1-11.8-6.3-11.1-2.8-25.2 8-32 6.8-4.3 11.2-11.8 11.2-20.2 0-7.1-3.1-13.5-8.2-18-5.2-4.6-8.2-11.1-8.2-18s3-13.4 8.2-18c5.1-4.5 8.2-10.9 8.2-18l-.1-2.4c-1.1-11.3-10.1-20.3-21.4-21.4l-2.4-.1-147.5 0c-8.2 0-15.8-4.2-20.2-11.1-4.4-6.9-5-15.7-1.5-23.1L269 93.6c7-15 1.4-32.7-12.5-41L253.6 51z"]
}, Ef = {
  prefix: "far",
  iconName: "building",
  icon: [384, 512, [127970, 61687], "f1ad", "M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-80c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 80 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm96 48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]
}, If = {
  prefix: "far",
  iconName: "file",
  icon: [384, 512, [128196, 128459, 61462], "f15b", "M176 48L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-240-88 0c-39.8 0-72-32.2-72-72l0-88zM316.1 160L224 67.9 224 136c0 13.3 10.7 24 24 24l68.1 0zM0 64C0 28.7 28.7 0 64 0L197.5 0c17 0 33.3 6.7 45.3 18.7L365.3 141.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"]
}, Nf = {
  prefix: "far",
  iconName: "gem",
  icon: [512, 512, [128142], "f3a5", "M168.5 72l87.5 93 87.5-93-175 0zM383.9 99.1l-72.3 76.9 129 0-56.6-76.9zm50 124.9L78.1 224 256 420.3 433.9 224zM71.5 176l129 0-72.3-76.9-56.6 76.9zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"]
}, Df = {
  prefix: "far",
  iconName: "trash-can",
  icon: [448, 512, [61460, "trash-alt"], "f2ed", "M166.2-16c-13.3 0-25.3 8.3-30 20.8L120 48 24 48C10.7 48 0 58.7 0 72S10.7 96 24 96l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0-16.2-43.2C307.1-7.7 295.2-16 281.8-16L166.2-16zM32 144l0 304c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-304-48 0 0 304c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16l0-304-48 0zm160 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176z"]
}, Tf = {
  prefix: "far",
  iconName: "life-ring",
  icon: [512, 512, [], "f1cd", "M385.1 419.1C349.7 447.2 304.8 464 256 464s-93.7-16.8-129.1-44.9l80.4-80.4c14.3 8.4 31 13.3 48.8 13.3s34.5-4.8 48.8-13.3l80.4 80.4zm68.1 .2C489.9 374.9 512 318.1 512 256S489.9 137.1 453.2 92.7L465 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L419.3 58.8C374.9 22.1 318.1 0 256 0S137.1 22.1 92.7 58.8L81 47c-9.4-9.4-24.6-9.4-33.9 0S37.7 71.6 47 81L58.8 92.7C22.1 137.1 0 193.9 0 256S22.1 374.9 58.8 419.3L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l11.8-11.8C137.1 489.9 193.9 512 256 512s118.9-22.1 163.3-58.8L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-11.8-11.8zm-34.1-34.1l-80.4-80.4c8.4-14.3 13.3-31 13.3-48.8s-4.8-34.5-13.3-48.8l80.4-80.4C447.2 162.3 464 207.2 464 256s-16.8 93.7-44.9 129.1zM385.1 92.9l-80.4 80.4c-14.3-8.4-31-13.3-48.8-13.3s-34.5 4.8-48.8 13.3L126.9 92.9C162.3 64.8 207.2 48 256 48s93.7 16.8 129.1 44.9zM173.3 304.8L92.9 385.1C64.8 349.7 48 304.8 48 256s16.8-93.7 44.9-129.1l80.4 80.4c-8.4 14.3-13.3 31-13.3 48.8s4.8 34.5 13.3 48.8zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"]
}, Bf = {
  prefix: "far",
  iconName: "house",
  icon: [512, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M240 6.1c9.1-8.2 22.9-8.2 32 0l232 208c9.9 8.8 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-8-7.2 0 205.3c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-205.3-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9L240 6.1zm16 50.1L96 199.7 96 448c0 8.8 7.2 16 16 16l48 0 0-104c0-39.8 32.2-72 72-72l48 0c39.8 0 72 32.2 72 72l0 104 48 0c8.8 0 16-7.2 16-16l0-248.3-160-143.4zM208 464l96 0 0-104c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 104z"]
}, Pf = {
  prefix: "far",
  iconName: "user",
  icon: [448, 512, [128100, 62144, 62470, "user-alt", "user-large"], "f007", "M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"]
}, Of = {
  prefix: "far",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"]
}, Hf = {
  prefix: "far",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm70.7 121.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L243.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"]
}, Ff = {
  prefix: "far",
  iconName: "moon",
  icon: [512, 512, [127769, 9214], "f186", "M239.3 48.7c-107.1 8.5-191.3 98.1-191.3 207.3 0 114.9 93.1 208 208 208 33.3 0 64.7-7.8 92.6-21.7-103.4-23.4-180.6-115.8-180.6-226.3 0-65.8 27.4-125.1 71.3-167.3zM0 256c0-141.4 114.6-256 256-256 19.4 0 38.4 2.2 56.7 6.3 9.9 2.2 17.3 10.5 18.5 20.5s-4 19.8-13.1 24.4c-60.6 30.2-102.1 92.7-102.1 164.8 0 101.6 82.4 184 184 184 5 0 9.9-.2 14.8-.6 10.1-.8 19.6 4.8 23.8 14.1s2 20.1-5.3 27.1C387.3 484.8 324.8 512 256 512 114.6 512 0 397.4 0 256z"]
}, Rf = {
  prefix: "far",
  iconName: "circle-play",
  icon: [512, 512, [61469, "play-circle"], "f144", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM212.5 147.5c-7.4-4.5-16.7-4.7-24.3-.5S176 159.3 176 168l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88zM298 256l-74 45.2 0-90.4 74 45.2z"]
}, jf = {
  prefix: "far",
  iconName: "hourglass",
  icon: [384, 512, [9203, 62032, "hourglass-empty"], "f254", "M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l8 0 0 19c0 40.3 16 79 44.5 107.5l81.5 81.5-81.5 81.5C48 366 32 404.7 32 445l0 19-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-19c0-40.3-16-79-44.5-107.5l-81.5-81.5 81.5-81.5C336 146 352 107.3 352 67l0-19 8 0c13.3 0 24-10.7 24-24S373.3 0 360 0L24 0zM192 289.9l81.5 81.5C293 391 304 417.4 304 445l0 19-224 0 0-19c0-27.6 11-54 30.5-73.5L192 289.9zm0-67.9l-81.5-81.5C91 121 80 94.6 80 67l0-19 224 0 0 19c0 27.6-11 54-30.5 73.5L192 222.1z"]
}, qf = {
  prefix: "far",
  iconName: "star",
  icon: [576, 512, [11088, 61446], "f005", "M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"]
}, Qf = {
  prefix: "far",
  iconName: "lemon",
  icon: [448, 512, [127819], "f094", "M368 80c-3.2 0-6.2 .4-8.9 1.3-19.1 5.5-46.1 10.7-74.3 3.3-57.4-14.9-124.6 7.4-174.7 57.5S37.7 259.4 52.6 316.8c7.3 28.2 2.2 55.2-3.3 74.3-.8 2.8-1.3 5.8-1.3 8.9 0 17.7 14.3 32 32 32 3.2 0 6.2-.4 8.9-1.3 19.1-5.5 46.1-10.7 74.3-3.3 57.4 14.9 124.6-7.4 174.7-57.5s72.4-117.3 57.5-174.7c-7.3-28.2-2.2-55.2 3.3-74.3 .8-2.8 1.3-5.8 1.3-8.9 0-17.7-14.3-32-32-32zm0-48c44.2 0 80 35.8 80 80 0 7.7-1.1 15.2-3.1 22.3-4.6 15.8-7.1 32.9-3 48.9 20.1 77.6-10.9 161.5-70 220.7s-143.1 90.2-220.7 70c-16-4.1-33-1.6-48.9 3-7.1 2-14.6 3.1-22.3 3.1-44.2 0-80-35.8-80-80 0-7.7 1.1-15.2 3.1-22.3 4.6-15.8 7.1-32.9 3-48.9-20.1-77.6 10.9-161.5 70-220.7S219.3 18 296.8 38.1c16 4.1 33 1.6 48.9-3 7.1-2 14.6-3.1 22.3-3.1zM246.7 167c-52 15.2-96.5 59.7-111.7 111.7-3.7 12.7-17.1 20-29.8 16.3S85.2 278 89 265.3c19.8-67.7 76.6-124.5 144.3-144.3 12.7-3.7 26.1 3.6 29.8 16.3s-3.6 26.1-16.3 29.8z"]
}, Wf = {
  prefix: "far",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"]
}, Uf = {
  prefix: "far",
  iconName: "square-plus",
  icon: [448, 512, [61846, "plus-square"], "f0fe", "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, Yf = {
  prefix: "far",
  iconName: "money-bill-1",
  icon: [512, 512, ["money-bill-alt"], "f3d1", "M112 112c0 35.3-28.7 64-64 64l0 160c35.3 0 64 28.7 64 64l288 0c0-35.3 28.7-64 64-64l0-160c-35.3 0-64-28.7-64-64l-288 0zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm256 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm-16 44c-11 0-20 9-20 20 0 9.7 6.9 17.7 16 19.6l0 48.4-4 0c-11 0-20 9-20 20s9 20 20 20l48 0c11 0 20-9 20-20s-9-20-20-20l-4 0 0-68c0-11-9-20-20-20l-16 0z"]
}, Vf = {
  prefix: "far",
  iconName: "compass",
  icon: [512, 512, [129517], "f14e", "M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.3 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Gf = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
}, Xf = {
  prefix: "far",
  iconName: "face-smile",
  icon: [512, 512, [128578, "smile"], "f118", "M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm177.3 63.4C192.3 335 218.4 352 256 352s63.7-17 78.7-32.6c9.2-9.6 24.4-9.9 33.9-.7s9.9 24.4 .7 33.9c-22.1 23-60 47.4-113.3 47.4s-91.2-24.4-113.3-47.4c-9.2-9.6-8.9-24.8 .7-33.9s24.8-8.9 33.9 .7zM144 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Zf = {
  prefix: "far",
  iconName: "keyboard",
  icon: [576, 512, [9e3], "f11c", "M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 320l224 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm16-96l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16z"]
}, $f = {
  prefix: "far",
  iconName: "circle-dot",
  icon: [512, 512, [128280, "dot-circle"], "f192", "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm0 304a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]
};
const Jf = {
  "far-bell": nf,
  "far-building": Ef,
  "far-calendar-days": af,
  "far-circle": Mf,
  "far-circle-check": Hf,
  "far-circle-dot": $f,
  "far-circle-pause": sf,
  "far-circle-play": Rf,
  "far-clock": ff,
  "far-clone": mf,
  "far-comment": bf,
  "far-compass": Vf,
  "far-copy": Wf,
  "far-envelope": tf,
  "far-eye": rf,
  "far-face-grin-stars": cf,
  "far-face-smile": Xf,
  "far-file": If,
  "far-folder": zf,
  "far-gem": Nf,
  "far-hand": Lf,
  "far-heart": uf,
  "far-hospital": gf,
  "far-hourglass": jf,
  "far-house": Bf,
  "far-image": wf,
  "far-keyboard": Zf,
  "far-lemon": Qf,
  "far-life-ring": Tf,
  "far-lightbulb": kf,
  "far-map": _f,
  "far-message": of,
  "far-money-bill1": Yf,
  "far-moon": Ff,
  "far-newspaper": Af,
  "far-note-sticky": df,
  "far-paper-plane": hf,
  "far-rectangle-list": Cf,
  "far-share-from-square": lf,
  "far-snowflake": Of,
  "far-square": Gf,
  "far-square-check": xf,
  "far-square-plus": Uf,
  "far-star": qf,
  "far-star-half": pf,
  "far-sun": yf,
  "far-thumbs-down": vf,
  "far-thumbs-up": Sf,
  "far-trash-can": Df,
  "far-user": Pf
}, Kf = [
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
], eh = { ...K8, ...Jf }, th = [...ef, ...Kf], nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FA: eh,
  FA_GROUPS: th
}, Symbol.toStringTag, { value: "Module" }));
