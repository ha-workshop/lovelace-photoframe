var un, V, zi, ze, zo, Ii, Di, xn, Tt, lt, Bi, Ao, Wn, Un, Ti, Vt = {}, Wt = [], wr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, vt = Array.isArray;
function Me(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function uo(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Ut(t, e, n) {
  var s, i, a, r = {};
  for (a in e) a == "key" ? s = e[a] : a == "ref" ? i = e[a] : r[a] = e[a];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? un.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (a in t.defaultProps) r[a] === void 0 && (r[a] = t.defaultProps[a]);
  return Ot(t, r, s, i, null);
}
function Ot(t, e, n, s, i) {
  var a = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++zi, __i: -1, __u: 0 };
  return i == null && V.vnode != null && V.vnode(a), a;
}
function he(t) {
  return t.children;
}
function Lt(t, e) {
  this.props = t, this.context = e;
}
function je(t, e) {
  if (e == null) return t.__ ? je(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? je(t) : null;
}
function vr(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, s = [], i = [], a = Me({}, e);
    a.__v = e.__v + 1, V.vnode && V.vnode(a), fo(t.__P, a, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, s, n ?? je(e), !!(32 & e.__u), i), a.__v = e.__v, a.__.__k[a.__i] = a, ji(s, a, i), e.__e = e.__ = null, a.__e != n && Oi(a);
  }
}
function Oi(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), Oi(t);
}
function Yn(t) {
  (!t.__d && (t.__d = !0) && ze.push(t) && !Yt.__r++ || zo != V.debounceRendering) && ((zo = V.debounceRendering) || Ii)(Yt);
}
function Yt() {
  try {
    for (var t, e = 1; ze.length; ) ze.length > e && ze.sort(Di), t = ze.shift(), e = ze.length, vr(t);
  } finally {
    ze.length = Yt.__r = 0;
  }
}
function Li(t, e, n, s, i, a, r, c, h, A, u) {
  var f, l, m, p, y, _, C = s && s.__k || Wt, b = e.length;
  for (h = _r(n, e, C, h, b), f = 0; f < b; f++) (m = n.__k[f]) != null && (l = m.__i != -1 && C[m.__i] || Vt, m.__i = f, _ = fo(t, m, l, i, a, r, c, h, A, u), p = m.__e, m.ref && l.ref != m.ref && (l.ref && mo(l.ref, null, m), u.push(m.ref, m.__c || p, m)), y == null && p != null && (y = p), 4 & m.__u ? (h = Pi(m, h, t), l.__e && (l.__e = null)) : typeof m.type == "function" && _ !== void 0 ? h = _ : p && (h = p.nextSibling), m.__u &= -7);
  return n.__e = y, h;
}
function _r(t, e, n, s, i) {
  var a, r, c, h, A, u = n.length, f = u, l = 0;
  for (t.__k = new Array(i), a = 0; a < i; a++) (r = e[a]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = t.__k[a] = Ot(null, r, null, null, null) : vt(r) ? r = t.__k[a] = Ot(he, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? r = t.__k[a] = Ot(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : t.__k[a] = r, h = a + l, r.__ = t, r.__b = t.__b + 1, c = null, (A = r.__i = Cr(r, n, h, f)) != -1 && (f--, (c = n[A]) && (c.__u |= 2)), c == null || c.__v == null ? (A == -1 && (i > u ? l-- : i < u && l++), typeof r.type != "function" && (r.__u |= 4)) : A != h && (A == h - 1 ? l-- : A == h + 1 ? l++ : (A > h ? l-- : l++, r.__u |= 4))) : t.__k[a] = null;
  if (f) for (a = 0; a < u; a++) (c = n[a]) != null && (2 & c.__u) == 0 && (c.__e == s && (s = je(c)), Fi(c, c));
  return s;
}
function Pi(t, e, n) {
  var s, i;
  if (typeof t.type == "function") {
    for (s = t.__k, i = 0; s && i < s.length; i++) s[i] && (s[i].__ = t, e = Pi(s[i], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = je(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Hi(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (vt(t) ? t.some(function(n) {
    Hi(n, e);
  }) : e.push(t)), e;
}
function Cr(t, e, n, s) {
  var i, a, r, c = t.key, h = t.type, A = e[n], u = A != null && (2 & A.__u) == 0;
  if (A === null && c == null || u && c == A.key && h == A.type) return n;
  if (s > (u ? 1 : 0)) {
    for (i = n - 1, a = n + 1; i >= 0 || a < e.length; ) if ((A = e[r = i >= 0 ? i-- : a++]) != null && (2 & A.__u) == 0 && c == A.key && h == A.type) return r;
  }
  return -1;
}
function Io(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || wr.test(e) ? n : n + "px";
}
function Mt(t, e, n, s, i) {
  var a, r;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof s == "string" && (t.style.cssText = s = ""), s) for (e in s) n && e in n || Io(t.style, e, "");
    if (n) for (e in n) s && n[e] == s[e] || Io(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(Bi, "$1")), r = e.toLowerCase(), e = r in t || e == "onFocusOut" || e == "onFocusIn" ? r.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = n, n ? s ? n[lt] = s[lt] : (n[lt] = Ao, t.addEventListener(e, a ? Un : Wn, a)) : t.removeEventListener(e, a ? Un : Wn, a);
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
function Do(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[Tt] == null) e[Tt] = Ao++;
      else if (e[Tt] < n[lt]) return;
      return n(V.event ? V.event(e) : e);
    }
  };
}
function fo(t, e, n, s, i, a, r, c, h, A) {
  var u, f, l, m, p, y, _, C, b, k, I, B, S, g, z, O, D = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (h = !!(32 & n.__u), a = [c = e.__e = n.__e]), (u = V.__b) && u(e);
  e: if (typeof D == "function") {
    f = r.length;
    try {
      if (b = e.props, k = D.prototype && D.prototype.render, I = (u = D.contextType) && s[u.__c], B = u ? I ? I.props.value : u.__ : s, n.__c ? C = (l = e.__c = n.__c).__ = l.__E : (k ? e.__c = l = new D(b, B) : (e.__c = l = new Lt(b, B), l.constructor = D, l.render = Er), I && I.sub(l), l.state || (l.state = {}), l.__n = s, m = l.__d = !0, l.__h = [], l._sb = []), k && l.__s == null && (l.__s = l.state), k && D.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Me({}, l.__s)), Me(l.__s, D.getDerivedStateFromProps(b, l.__s))), p = l.props, y = l.state, l.__v = e, m) k && D.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), k && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (k && D.getDerivedStateFromProps == null && b !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, B), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, B) === !1) {
          e.__v != n.__v && (l.props = b, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(T) {
            T && (T.__ = e);
          }), Wt.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && r.push(l), c = je(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, B), k && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(p, y, _);
        });
      }
      if (l.context = B, l.props = b, l.__P = t, l.__e = !1, S = V.__r, g = 0, k) l.state = l.__s, l.__d = !1, S && S(e), u = l.render(l.props, l.state, l.context), Wt.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, S && S(e), u = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++g < 25);
      l.state = l.__s, l.getChildContext != null && (s = Me(Me({}, s), l.getChildContext())), k && !m && l.getSnapshotBeforeUpdate != null && (_ = l.getSnapshotBeforeUpdate(p, y)), z = u != null && u.type === he && u.key == null ? Ni(u.props.children) : u, c = Li(t, vt(z) ? z : [z], e, n, s, i, a, r, c, h, A), l.base = e.__e, e.__u &= -161, l.__h.length && r.push(l), C && (l.__E = l.__ = null);
    } catch (T) {
      if (r.length = f, e.__v = null, h || a != null) {
        if (T.then) {
          for (e.__u |= h ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          a != null && (a[a.indexOf(c)] = null), e.__e = c;
        } else if (a != null) for (O = a.length; O--; ) uo(a[O]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), T.then || Qi(e), V.__e(T, e, n);
    }
  } else a == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = Mr(n.__e, e, n, s, i, a, r, h, A);
  return (u = V.diffed) && u(e), 128 & e.__u ? void 0 : c;
}
function Qi(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Qi));
}
function ji(t, e, n) {
  for (var s = 0; s < n.length; s++) mo(n[s], n[++s], n[++s]);
  V.__c && V.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      V.__e(a, i.__v);
    }
  });
}
function Ni(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : vt(t) ? t.map(Ni) : t.constructor !== void 0 ? null : Me({}, t);
}
function Mr(t, e, n, s, i, a, r, c, h) {
  var A, u, f, l, m, p, y, _ = n.props || Vt, C = e.props, b = e.type;
  if (b == "svg" ? i = "http://www.w3.org/2000/svg" : b == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (A = 0; A < a.length; A++) if ((m = a[A]) && "setAttribute" in m == !!b && (b ? m.localName == b : m.nodeType == 3)) {
      t = m, a[A] = null;
      break;
    }
  }
  if (t == null) {
    if (b == null) return document.createTextNode(C);
    t = document.createElementNS(i, b, C.is && C), c && (V.__m && V.__m(e, a), c = !1), a = null;
  }
  if (b == null) _ === C || c && t.data == C || (t.data = C);
  else {
    if (a = b == "textarea" && C.defaultValue != null ? null : a && un.call(t.childNodes), !c && a != null) for (_ = {}, A = 0; A < t.attributes.length; A++) _[(m = t.attributes[A]).name] = m.value;
    for (A in _) m = _[A], A == "dangerouslySetInnerHTML" ? f = m : A == "children" || A in C || A == "value" && "defaultValue" in C || A == "checked" && "defaultChecked" in C || Mt(t, A, null, m, i);
    for (A in C) m = C[A], A == "children" ? l = m : A == "dangerouslySetInnerHTML" ? u = m : A == "value" ? p = m : A == "checked" ? y = m : c && typeof m != "function" || _[A] === m || Mt(t, A, m, _[A], i);
    if (u) c || f && (u.__html == f.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
    else if (f && (t.innerHTML = ""), Li(e.type == "template" ? t.content : t, vt(l) ? l : [l], e, n, s, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, r, a ? a[0] : n.__k && je(n, 0), c, h), a != null) for (A = a.length; A--; ) uo(a[A]);
    c && b != "textarea" || (A = "value", b == "progress" && p == null ? t.removeAttribute("value") : p != null && (p !== t[A] || b == "progress" && !p || b == "option" && p != _[A]) && Mt(t, A, p, _[A], i), A = "checked", y != null && y != t[A] && Mt(t, A, y, _[A], i));
  }
  return t;
}
function mo(t, e, n) {
  try {
    if (typeof t == "function") {
      var s = typeof t.__u == "function";
      s && t.__u(), s && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    V.__e(i, n);
  }
}
function Fi(t, e, n) {
  var s, i;
  if (V.unmount && V.unmount(t), (s = t.ref) && (s.current && s.current != t.__e || mo(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount) try {
      s.componentWillUnmount();
    } catch (a) {
      V.__e(a, e);
    }
    s.base = s.__P = s.__n = null;
  }
  if (s = t.__k) for (i = 0; i < s.length; i++) s[i] && Fi(s[i], e, n || typeof t.type != "function");
  n || uo(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Er(t, e, n) {
  return this.constructor(t, n);
}
function Bo(t, e, n) {
  var s, i, a, r;
  e == document && (e = document.documentElement), V.__ && V.__(t, e), i = (s = !1) ? null : e.__k, a = [], r = [], fo(e, t = e.__k = Ut(he, null, [t]), i || Vt, Vt, e.namespaceURI, i ? null : e.firstChild ? un.call(e.childNodes) : null, a, i ? i.__e : e.firstChild, s, r), ji(a, t, r), t.props.children = null;
}
function fn(t) {
  function e(n) {
    var s, i;
    return this.getChildContext || (s = /* @__PURE__ */ new Set(), (i = {})[e.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      s = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && s.forEach(function(r) {
        r.__e = !0, Yn(r);
      });
    }, this.sub = function(a) {
      s.add(a);
      var r = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        s && s.delete(a), r && r.call(a);
      };
    }), n.children;
  }
  return e.__c = "__cC" + Ti++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, s) {
    return n.children(s);
  }).contextType = e, e;
}
un = Wt.slice, V = { __e: function(t, e, n, s) {
  for (var i, a, r; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(t)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), r = i.__d), r) return i.__E = i;
  } catch (c) {
    t = c;
  }
  throw t;
} }, zi = 0, Lt.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Me({}, this.state), typeof t == "function" && (t = t(Me({}, n), this.props)), t && Me(n, t), t != null && this.__v && (e && this._sb.push(e), Yn(this));
}, Lt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Yn(this));
}, Lt.prototype.render = he, ze = [], Ii = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Di = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Yt.__r = 0, xn = Math.random().toString(8), Tt = "__d" + xn, lt = "__a" + xn, Bi = /(PointerCapture)$|Capture$/i, Ao = 0, Wn = Do(!1), Un = Do(!0), Ti = 0;
var Sr = 0;
function o(t, e, n, s, i, a) {
  e || (e = {});
  var r, c, h = e;
  if ("ref" in h) for (c in h = {}, e) c == "ref" ? r = e[c] : h[c] = e[c];
  var A = { type: t, props: h, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Sr, __i: -1, __u: 0, __source: i, __self: a };
  if (typeof t == "function" && (r = t.defaultProps)) for (c in r) h[c] === void 0 && (h[c] = r[c]);
  return V.vnode && V.vnode(A), A;
}
const zr = ':root{--ink: #f5f7fb;--ink-2: rgba(245, 247, 251, .72);--ink-3: rgba(245, 247, 251, .48);--panel: rgba(12, 14, 22, .42);--panel-line: rgba(255, 255, 255, .09);--chip: rgba(255, 255, 255, .1);--chip-line: rgba(255, 255, 255, .14);--warm: #fbbf24;--red: #fb7185;--green: #34d399;--ease: cubic-bezier(.2, .7, .2, 1)}*{box-sizing:border-box;margin:0;padding:0;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}html,body,#app{height:100%}body{background:#000;color:#f5f7fb;overflow:hidden;font-family:Inter,Roboto,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}button,input,select{font:inherit;color:inherit;border:0;background:none;outline:none}button{cursor:pointer}svg{display:block;flex-shrink:0}.app{position:relative;height:100%;overflow:hidden}.native-photos body,.native-photos .backdrop{background:transparent}.backdrop{position:absolute;inset:0;overflow:hidden}.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transform:scale(1);transition:opacity 2s ease-in-out,transform 20s linear}.slide.active{opacity:1;transform:scale(1.08)}.slide.contain,.slide.contain.active{transform:none;background:#000}.slide-glow{position:absolute;inset:-6%;background-size:cover;background-position:center;opacity:.75}.slide-photo{position:absolute;inset:0;background-size:contain;background-position:center;background-repeat:no-repeat}.q-full .slide-glow{-webkit-filter:blur(28px) saturate(1.3);filter:blur(28px) saturate(1.3)}.aurora{background:radial-gradient(ellipse at 20% 30%,rgba(56,189,248,.35) 0%,transparent 55%),radial-gradient(ellipse at 80% 70%,rgba(168,85,247,.32) 0%,transparent 55%),radial-gradient(ellipse at 60% 10%,rgba(251,191,36,.18) 0%,transparent 50%),#05060c}.soft{position:absolute;inset:-5%;background-size:cover;background-position:center;opacity:0;transition:opacity .6s cubic-bezier(.2,.7,.2,1)}.soft.on{opacity:1}.shade{position:absolute;inset:0;background:linear-gradient(to bottom,#00000040,#0000 30%,#00000026 55%,#000000b3);transition:background-color .6s cubic-bezier(.2,.7,.2,1)}.shade.deep{background-color:#04060c61}.ambient{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;padding:0 5vw 9vh;transform:translateY(-100%);pointer-events:none}.ambient.visible{transform:none}.clock-link{pointer-events:auto;cursor:pointer}.ambient-clock{text-shadow:0 2px 30px rgba(0,0,0,.35)}.ambient-time{font-size:22vh;font-weight:200;letter-spacing:-.04em;line-height:.9}.ambient-date{margin-top:2vh;font-size:3vh;font-weight:400;color:#f5f7fbb8;letter-spacing:.01em}.glances{display:flex;flex-wrap:wrap;justify-content:flex-end;max-width:50%;margin-bottom:1vh}.glance{pointer-events:auto;cursor:pointer;transition:transform .15s,background .2s;display:flex;align-items:center;margin:6px 0 0 8px;padding:9px 16px 9px 13px;border-radius:999px;background:#00000052;border:1px solid rgba(255,255,255,.14);font-size:15px;font-weight:500;color:#f5f7fb}.glance:active{transform:scale(.94);background:#00000080}.glance svg{margin-right:8px;color:#f5f7fbb8}.glance.lit svg{color:#fbbf24}.glance.alert{background:#e11d488c;border-color:#fb718599}.glance.alert svg,.glance.warn svg{color:#fff}.glance.warn{background:#d9770680}.ambient{transition:transform .5s cubic-bezier(.2,.7,.2,1),opacity .4s ease}.home-hint{position:absolute;left:50%;bottom:1.5vh;bottom:max(1.5vh,env(safe-area-inset-bottom));transform:translate(-50%);display:flex;padding:6px 24px;background:none;border:0;color:#f5f7fb;opacity:0;pointer-events:none;transition:opacity .6s ease,color 1.2s ease}.home-hint.visible{opacity:1;pointer-events:auto}.home-hint svg{-webkit-filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));-webkit-animation:nudge 2.4s ease-in-out infinite;animation:nudge 2.4s ease-in-out infinite}.home-hint.text-contrast.ink-dark svg{-webkit-filter:drop-shadow(0 1px 6px rgba(255,255,255,.6));filter:drop-shadow(0 1px 6px rgba(255,255,255,.6))}.ambient.customizing .home-hint{display:none}.q-lite .home-hint svg{-webkit-animation:none;animation:none}@-webkit-keyframes nudge{0%,60%,to{-webkit-transform:translateY(0)}30%{-webkit-transform:translateY(-5px)}}@keyframes nudge{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-5px)}}.photo-step{position:absolute;top:50%;width:72px;height:72px;margin-top:-36px;border-radius:50%;display:flex;align-items:center;justify-content:center;pointer-events:none;color:#fff;background:#00000059;opacity:0;-webkit-animation:photo-step .7s ease-out;animation:photo-step .7s ease-out}.photo-step.next{right:3vw}.photo-step.prev{left:3vw;-webkit-animation-name:photo-step-prev;animation-name:photo-step-prev}@-webkit-keyframes photo-step{0%{opacity:0;-webkit-transform:translateX(16px) scale(.8)}30%{opacity:1;-webkit-transform:translateX(0) scale(1)}to{opacity:0;-webkit-transform:translateX(-8px) scale(1)}}@keyframes photo-step{0%{opacity:0;transform:translate(16px) scale(.8)}30%{opacity:1;transform:translate(0) scale(1)}to{opacity:0;transform:translate(-8px) scale(1)}}@-webkit-keyframes photo-step-prev{0%{opacity:0;-webkit-transform:translateX(-16px) scale(.8)}30%{opacity:1;-webkit-transform:translateX(0) scale(1)}to{opacity:0;-webkit-transform:translateX(8px) scale(1)}}@keyframes photo-step-prev{0%{opacity:0;transform:translate(-16px) scale(.8)}30%{opacity:1;transform:translate(0) scale(1)}to{opacity:0;transform:translate(8px) scale(1)}}.dragging .ambient,.dragging .controls,.dragging .soft{transition:none}.dragging .controls{pointer-events:none}.controls{position:absolute;inset:0;display:flex;flex-direction:column;padding:22px 28px 28px;padding-top:max(22px,env(safe-area-inset-top));padding-left:max(28px,env(safe-area-inset-left));padding-right:max(28px,env(safe-area-inset-right));padding-bottom:max(28px,env(safe-area-inset-bottom));opacity:0;transform:scale(.96);transition:opacity .5s cubic-bezier(.2,.7,.2,1),transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}.controls.visible{opacity:1;transform:none;pointer-events:auto}.bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.bar-time{display:flex;align-items:baseline}.bar-clock{font-size:38px;font-weight:300;letter-spacing:-.03em}.bar-date{margin-left:14px;font-size:15px;color:#f5f7fbb8}.bar-actions{display:flex;align-items:center}.conn{display:flex;align-items:center;margin-right:14px;font-size:13px;color:#f5f7fbb8}.conn i{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#fbbf24}.conn-connected i{background:#34d399;box-shadow:0 0 10px #34d399}.conn-auth_invalid i,.conn-disconnected i{background:#fb7185}.round{width:48px;height:48px;margin-left:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);transition:transform .15s}.round:active{transform:scale(.92)}.round.accent{background:#7dd3fc;color:#0b0d14;border-color:transparent}.bar{position:relative}.bar-narrow .bar-date{display:none}.bar-narrow .bar-clock{font-size:30px}.home-switch{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);transition:opacity .2s}.home-switch:active{transform:translate(-50%,-50%) scale(.96)}.bar-narrow.menu-open .home-switch{opacity:0;pointer-events:none}.bar-narrow.bar-editing .home-switch{display:none}.burger{position:relative;display:flex;align-items:center}.burger-items{position:absolute;right:58px;top:0;display:flex;align-items:center;opacity:0;pointer-events:none;transform:translate(24px);transition:opacity .22s cubic-bezier(.2,.7,.2,1),transform .22s cubic-bezier(.2,.7,.2,1)}.menu-open .burger-items{opacity:1;pointer-events:auto;transform:none}.burger-btn{position:relative}.burger-dot{position:absolute;top:4px;right:4px;width:8px;height:8px;border-radius:50%;background:#fbbf24}.burger-btn.conn-connected .burger-dot{background:#34d399}.burger-btn.conn-auth_invalid .burger-dot,.burger-btn.conn-disconnected .burger-dot{background:#fb7185}.grid{position:relative;flex:1;min-height:0;margin:-16px;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.grid::-webkit-scrollbar{display:none}.grid-inner{position:relative}.cell{position:absolute;display:flex;transition:left .22s cubic-bezier(.2,.7,.2,1),top .22s cubic-bezier(.2,.7,.2,1),width .22s cubic-bezier(.2,.7,.2,1),height .22s cubic-bezier(.2,.7,.2,1)}.cell.dragged{z-index:20;transition:none;-webkit-animation:none;animation:none}.cell.dragged .panel{box-shadow:0 30px 60px #0000008c;border-color:#ffffff80}.drop-slot{position:absolute;border-radius:28px;border:2px dashed rgba(255,255,255,.45);background:#ffffff14;transition:left .15s,top .15s,width .15s,height .15s}.grid-dots{position:absolute;inset:0}.grid-dot{position:absolute;border-radius:10px;background:#ffffff09}.grid-note{font-size:12px;color:#f5f7fb7a;padding:8px 16px 0}.hidden-cards{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.hidden-cards .muted{display:flex;align-items:center;margin-right:8px}.hidden-cards .muted svg{margin-right:4px}.hidden-cards .chip{display:flex;align-items:center;margin:0 6px 6px 0}.hidden-cards .chip svg{margin-right:4px}.editing .cell{cursor:move}.dragging-card,.dragging-card *{cursor:-webkit-grabbing;cursor:grabbing}.badge-btn{position:absolute;top:-8px;width:28px;height:28px;border-radius:50%;z-index:2;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.25);box-shadow:0 4px 12px #0006}.badge-del{left:-8px;background:#3f3f46;color:#fff}.badge-edit{right:-8px;background:#e5e7eb;color:#111}.resize-handle{position:absolute;right:2px;bottom:2px;width:30px;height:30px;cursor:nwse-resize;z-index:2;border-right:3px solid rgba(255,255,255,.85);border-bottom:3px solid rgba(255,255,255,.85);border-bottom-right-radius:24px}.size-tag{position:absolute;left:50%;bottom:10px;padding:3px 8px;border-radius:8px;z-index:2;transform:translate(-50%);background:#0000008c;font-size:11px;font-weight:600;color:#f5f7fbb8}.cell>.panel{flex:1;min-width:0}.panel-body{flex:1;min-height:0;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.panel-body::-webkit-scrollbar,.lights::-webkit-scrollbar{display:none}.card-empty{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;font-size:13px;color:#f5f7fb7a;padding:0 12px}.panel{display:flex;flex-direction:column;min-height:0;background:#0c0e166b;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:20px 22px;box-shadow:0 20px 50px #00000040}.panel-head{display:flex;align-items:center;justify-content:space-between;min-height:30px;margin-bottom:14px}.panel-head h2{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#f5f7fbb8}.home-pane{flex:1;min-height:0;display:flex;flex-direction:column}.screen-tabs{display:flex;align-items:center;overflow-x:auto;white-space:nowrap;margin:-8px 0 12px;padding-bottom:2px;-webkit-overflow-scrolling:touch}.screen-tab{display:inline-flex;flex-shrink:0;align-items:center;height:34px;padding:0 14px;margin-right:8px;border-radius:17px;font-size:14px;font-weight:500;color:#f5f7fb7a;background:#ffffff0f}.screen-tab.on{color:#f5f7fb;background:#ffffff29;font-weight:600}.screen-tab.add svg{margin-right:4px}.screen-tab.editing{padding:0 4px}.screen-tab input{width:auto;min-width:0;height:30px;padding:0 6px;border:0;border-radius:10px;background:transparent;color:#f5f7fb;font:inherit;text-align:center}.screen-tab input:focus{background:#00000040;outline:none}.screen-move,.screen-del{display:flex;align-items:center;justify-content:center;min-width:28px;height:28px;border-radius:14px;color:#f5f7fb7a}.screen-del.sure{padding:0 10px;background:#ef4444d9;color:#fff;font-size:13px}.slide-next{-webkit-animation:in-next .35s cubic-bezier(.2,.7,.2,1);animation:in-next .35s cubic-bezier(.2,.7,.2,1)}.slide-prev{-webkit-animation:in-prev .35s cubic-bezier(.2,.7,.2,1);animation:in-prev .35s cubic-bezier(.2,.7,.2,1)}@-webkit-keyframes in-next{0%{opacity:0;-webkit-transform:translateX(60px)}}@keyframes in-next{0%{opacity:0;transform:translate(60px)}}@-webkit-keyframes in-prev{0%{opacity:0;-webkit-transform:translateX(-60px)}}@keyframes in-prev{0%{opacity:0;transform:translate(-60px)}}.home-switch{display:flex;flex-direction:column;align-items:center;padding:6px 14px;border-radius:14px}.home-switch:active{background:#ffffff14}.home-name{font-size:15px;font-weight:600}.home-dots{display:flex;margin-top:5px}.home-dots i{width:6px;height:6px;border-radius:50%;margin:0 3px;background:#ffffff4d}.home-dots i.on{background:#fff}.editing .cell{-webkit-animation:jiggle .9s ease-in-out infinite;animation:jiggle .9s ease-in-out infinite}.editing div:nth-child(2n)>.cell{-webkit-animation-delay:-.45s;animation-delay:-.45s}.editing .cell .panel{border:1px dashed rgba(255,255,255,.35)}.editing .cell .panel-body{pointer-events:none;opacity:.45;overflow:hidden}.editing .cell{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:pan-y}@-webkit-keyframes jiggle{0%,to{-webkit-transform:rotate(-.35deg)}50%{-webkit-transform:rotate(.35deg)}}@keyframes jiggle{0%,to{transform:rotate(-.35deg)}50%{transform:rotate(.35deg)}}.icon-btn.danger{color:#fb7185}.pill-btn{margin-left:10px;display:flex;align-items:center;height:44px;padding:0 18px;border-radius:999px;color:#0b0d14;font-weight:600;background:#7dd3fc}.pill-btn svg{margin-right:6px}.rooms{flex:1;display:flex;flex-direction:column;justify-content:space-around}.rooms.compact .room{padding:4px 0}.rooms.compact .room-temp{font-size:28px}.rooms.compact .room-name{font-size:12px}.room{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.09)}.room:last-child{border-bottom:0}.room-name{font-size:14px;color:#f5f7fbb8}.room-vals{display:flex;align-items:baseline;justify-content:space-between;margin-top:2px}.room-temp{font-size:46px;font-weight:200;letter-spacing:-.03em;line-height:1.05}.room-temp sup{font-size:.5em;font-weight:300;vertical-align:top;position:relative;top:.25em;margin-left:2px;color:#7dd3fc}.room-hum{display:flex;align-items:center;font-size:15px;color:#f5f7fbb8}.room-hum svg{margin-right:4px;color:#7dd3fc}.chip-btn{display:flex;align-items:center;padding:7px 12px;border-radius:999px;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);font-size:13px;font-weight:500}.chip-btn svg{margin-right:6px}.lights{flex:1;min-height:0;display:flex;flex-wrap:wrap;align-content:flex-start;margin:-5px;overflow-y:auto;-webkit-overflow-scrolling:touch}.cols-1 .light{width:calc(100% - 10px)}.cols-2 .light{width:calc(50% - 10px)}.cols-3 .light{width:calc(33.333% - 10px)}.cols-4 .light{width:calc(25% - 10px)}.cols-5 .light{width:calc(20% - 10px)}.cols-6 .light{width:calc(16.666% - 10px)}.lights.compact .light{min-height:70px;padding:10px 12px}.lights.compact .light-icon{width:30px;height:30px;margin-bottom:6px}.lights.list .light{flex-direction:row;align-items:center;justify-content:flex-start;min-height:0;padding:7px 10px;border-radius:14px}.lights.list .light-icon{width:28px;height:28px;margin:0 8px 0 0;flex-shrink:0}.lights.list .light-name{min-width:0;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lights.list .light-state{display:none}.light{width:calc(50% - 10px);margin:5px;min-height:96px;flex-grow:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:14px;border-radius:20px;text-align:left;background:#ffffff0f;border:1px solid rgba(255,255,255,.07);transition:background .25s,border-color .25s,transform .15s,box-shadow .25s}.light:active{transform:scale(.96)}.light-icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;color:#f5f7fbb8;margin-bottom:12px;transition:background .25s,color .25s,box-shadow .25s}.light-name{font-size:15px;font-weight:500;line-height:1.2}.light-state{font-size:12px;color:#f5f7fb7a;margin-top:3px}.light.on{background:#fbbf2429;border-color:#fbbf2480;box-shadow:0 0 30px #fbbf241f}.light.on .light-icon{background:#fbbf24;color:#1a1205;box-shadow:0 0 22px #fbbf248c}.light.on .light-state{color:#f5f7fbb8}.light.na{opacity:.45}.seg{display:flex;background:#00000040;border-radius:999px;padding:3px}.seg button{padding:5px 12px;border-radius:999px;font-size:12px;font-weight:500;color:#f5f7fbb8}.seg .active{background:#ffffff24;color:#f5f7fb}.cam-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.seg-inline{align-self:flex-start;flex-shrink:0;max-width:100%;margin-bottom:10px;overflow-x:auto;-webkit-overflow-scrolling:touch}.seg-inline::-webkit-scrollbar{display:none}.seg-inline button{flex-shrink:0;white-space:nowrap}.seg-full{align-self:stretch}.seg-full button{flex:1 0 auto;text-align:center}.cam{position:relative;flex:1;min-height:120px;border-radius:18px;overflow:hidden;background:#00000073;cursor:pointer}.cam img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.cam.fit-width img{top:50%;height:auto;transform:translateY(-50%)}.cam.fit-height img{left:50%;width:auto;transform:translate(-50%)}.cam.fit-width,.cam.fit-height{background:#000}.cam-empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:13px}.cam-empty svg{margin-bottom:8px}.live{position:absolute;top:10px;left:10px;display:flex;align-items:center;padding:3px 8px;border-radius:6px;background:#00000080;font-size:10px;font-weight:700;letter-spacing:.08em}.live i{width:6px;height:6px;border-radius:50%;background:#fb7185;margin-right:5px;-webkit-animation:pulse 1.6s infinite;animation:pulse 1.6s infinite}@-webkit-keyframes pulse{50%{opacity:.3}}@keyframes pulse{50%{opacity:.3}}.status-row{display:flex;align-items:center;padding:10px 0;color:#f5f7fbb8}.status-row+.status-row{border-top:1px solid rgba(255,255,255,.09)}.status-icon{width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#34d39926;color:#34d399;margin-right:12px}.status-text{flex:1;display:flex;flex-direction:column;min-width:0}.status-text b{font-size:14px;font-weight:500;color:#f5f7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.status-text small{font-size:12px;color:#f5f7fb7a;margin-top:2px}.status-row.alert .status-icon{background:#fb718533;color:#fb7185}.status-row.alert small{color:#fb7185}.sheet-layer{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 5vw 9vh;padding-bottom:calc(9vh + 56px);background:linear-gradient(to top,#00000059,#0000 60%);-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease}.sheet{position:relative;width:460px;max-width:100%;max-height:72vh;overflow:hidden;border-radius:30px;border:1px solid rgba(255,255,255,.16);box-shadow:0 30px 80px #00000073;transform-origin:100% 100%;-webkit-animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1);animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1)}.sheet-wide{width:640px}.sheet .lights{overflow:visible}.sheet-cameras .cam{height:300px;flex:none}.sheet-glass{position:absolute;inset:0;overflow:hidden;background:#10131c}.glass-layer{position:absolute;background-size:cover;background-position:center}.glass-layer.fresh{-webkit-animation:fade-in 1.2s ease;animation:fade-in 1.2s ease}.sheet-tint{position:absolute;inset:0;background:#0a0c1480}.sheet-inner{position:relative;padding:20px 22px 22px;max-height:72vh;overflow-y:auto;-webkit-overflow-scrolling:touch}.sheet .rooms .room{padding:12px 0}.sheet-actions{display:flex;align-items:center}.sheet-close{width:32px;height:32px;margin-left:8px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1f;color:#f5f7fbb8}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes sheet-in{0%{opacity:0;-webkit-transform:translateY(24px) scale(.92)}}@keyframes sheet-in{0%{opacity:0;transform:translateY(24px) scale(.92)}}.modal{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:16px;background:#0009}.modal-box{width:100%;max-width:560px;max-height:92%;overflow-y:auto;-webkit-overflow-scrolling:touch;background:#141620f7;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:24px;box-shadow:0 30px 80px #0009}.modal-wide{max-width:960px}.modal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.modal-head h2{font-size:19px;font-weight:600}.modal-title{display:flex;align-items:center}.modal-title svg{margin-right:10px;color:#7dd3fc}.icon-btn{color:#f5f7fb7a}.cam-full{border-radius:18px;overflow:hidden;background:#000}.cam-full img{display:block;width:100%;max-height:72vh;object-fit:contain}.tabs{display:flex;padding:4px;margin-bottom:18px;border-radius:14px;background:#ffffff0d}.tabs button{flex:1;padding:9px;border-radius:10px;font-size:14px;font-weight:500;color:#f5f7fbb8}.tabs .active{background:#ffffff1a;color:#f5f7fb}.modal-box .hint{position:static;opacity:1;text-align:left;font-size:13px;color:#f5f7fb7a;letter-spacing:0;margin-bottom:14px;line-height:1.45}.modal-box .hint.small{font-size:12px;margin:4px 0 0;text-align:center}.drop-zone{position:relative;display:block;text-align:center;padding:26px 16px;margin-bottom:14px;border:2px dashed rgba(255,255,255,.16);border-radius:20px;background:#ffffff08}.drop-zone svg{margin:0 auto 8px}.drop-zone input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.drop-zone.busy{opacity:.6}.drop-zone.over{border-color:#7dd3fc;background:#7dd3fc14}.upload-error{margin:-6px 0 12px}.drop-title{font-size:14px;font-weight:500}.thumbs{display:flex;flex-wrap:wrap;margin:0 -4px 10px}.thumb{position:relative;width:72px;height:72px;margin:4px;border-radius:12px;background-size:cover;background-position:center}.thumb-del{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#000000a6}.option{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-top:1px solid rgba(255,255,255,.09);font-size:14px;color:#f5f7fbb8}.option select{padding:8px 12px;border-radius:10px;background:#ffffff14;color:#f5f7fb;font-size:13px}.option select option{color:#000}.option-col{display:block}.chip-picker{margin-top:8px}.chip-picker .check{margin:4px 0;color:#f5f7fb}.field{display:block;margin-bottom:14px}.field span{display:block;font-size:12px;color:#f5f7fb7a;margin-bottom:6px}.field input{width:100%;padding:13px 14px;border-radius:12px;font-size:15px;background:#ffffff0f;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text}.field input:focus{border-color:#7dd3fc}.table-wrap{max-height:240px;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:12px;background:#0003}.diag{width:100%;border-collapse:collapse;font-size:12px}.diag td{padding:7px 10px;border-bottom:1px solid rgba(255,255,255,.09);word-break:break-all}.mono{font-family:Menlo,Roboto Mono,monospace}.strong{font-weight:600}.muted{color:#f5f7fb7a}.modal-foot{display:flex;justify-content:space-between;align-items:center;margin-top:18px}.btn{display:flex;align-items:center;padding:11px 18px;border-radius:14px;font-size:14px;font-weight:600}.btn svg{margin-right:6px}.btn-accent{background:#7dd3fc;color:#0b0d14}.btn-danger{background:#fb71851f;color:#fb7185}.type-list .type-row{display:flex;align-items:center;width:100%;padding:12px 6px;text-align:left;color:#f5f7fbb8;border-bottom:1px solid rgba(255,255,255,.09)}.type-list .type-row:last-child{border-bottom:0}.seg-wide{align-self:flex-start;display:inline-flex}.seg-wide button{padding:7px 16px;font-size:13px}.swatches{display:flex;flex-wrap:wrap}.swatch{width:34px;height:34px;border-radius:50%;margin:0 8px 6px 0;border:2px solid transparent}.swatch.active{border-color:#fff;box-shadow:0 0 0 2px #00000080 inset}.swatch-auto{background:#ffffff1a;font-size:12px;font-weight:700;color:#f5f7fbb8}.icon-grid{display:flex;flex-wrap:wrap;margin:0 -3px}.icon-grid button{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0d;color:#f5f7fbb8}.icon-grid .active{background:#fff3;color:#f5f7fb}.check{display:flex;align-items:center;font-size:14px;color:#f5f7fbb8;margin:6px 0 10px}.check input{margin-right:10px;width:18px;height:18px}.check-row{padding:10px 0;border-top:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.09);margin-bottom:14px}.items{border-radius:14px;background:#0003;padding:4px 8px 8px}.item-block{border-bottom:1px solid rgba(255,255,255,.09)}.item-row{display:flex;align-items:center;padding:8px 0}.item-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ffffff14;margin-right:10px;flex-shrink:0}.item-main{flex:1;min-width:0;display:flex;flex-direction:column}.item-main input{padding:6px 8px;margin-left:-8px;border-radius:8px;font-size:14px;-webkit-user-select:text;user-select:text}.item-main input:focus{background:#ffffff0f}.item-main .mono{font-size:11px;color:#f5f7fb7a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item-row .icon-btn{width:32px;height:32px;display:flex;align-items:center;justify-content:center}.na-tag{font-style:normal;color:#fb7185}.link{display:flex;align-items:center;font-size:11px;color:#7dd3fc;margin-top:3px;text-align:left}.link svg{margin-right:4px}.btn-ghost{margin-top:8px;background:#ffffff14;color:#f5f7fb;font-weight:500}.btn[disabled]{opacity:.4}.auth{margin-bottom:16px;padding:14px 16px 2px;border-radius:16px;background:#ffffff0a}.auth-title{font-size:15px;font-weight:600;margin-bottom:12px}.auth-or{display:flex;align-items:center;margin:-2px 0 12px;font-size:12px;color:#f5f7fb7a}.auth-or:before,.auth-or:after{content:"";flex:1;height:1px;background:#ffffff1f}.auth-or span{margin:0 12px}.auth .btn-login{width:100%;justify-content:center;margin:0 0 4px}.auth-session{display:flex;align-items:center;justify-content:space-between;margin:-2px 0 6px;font-size:13px;color:#f5f7fbb8}.auth-session .btn{margin:0 0 0 12px;flex-shrink:0}.ha-storage{margin:0 0 14px}.ha-storage .hint{margin:0}.migration{margin:0 0 14px;padding:12px 14px;border-radius:14px;background:#ffffff14}.migration p{margin:0 0 4px;font-size:14px}.picker{border-radius:14px;background:#00000040;padding:8px}.picker-search{display:flex;align-items:center;padding:4px 6px;border-radius:10px;background:#ffffff12;color:#f5f7fb7a}.picker-search input{flex:1;padding:8px;border:0;background:none;font-size:14px;color:#f5f7fb;-webkit-user-select:text;user-select:text}.picker .check{margin:8px 4px;font-size:13px}.picker-mode{margin-bottom:8px}.picker-list{max-height:260px;overflow-y:auto;-webkit-overflow-scrolling:touch}.picker-row{display:flex;flex-wrap:wrap;align-items:baseline;width:100%;padding:9px 6px;text-align:left;border-bottom:1px solid rgba(255,255,255,.09)}.picker-row:active{background:#ffffff14}.picker-name{flex:1;font-size:14px}.picker-state{font-size:12px;color:#f5f7fb7a;margin-left:8px}.picker-id{width:100%;font-size:11px;color:#f5f7fb7a;margin-top:2px}.picker-empty{padding:16px;text-align:center}.home-row{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.09)}.home-row-head{display:flex;align-items:center;margin-bottom:8px}.home-input{flex:1;min-width:0;padding:8px 10px;border-radius:10px;font-size:15px;font-weight:600;background:#ffffff0f;-webkit-user-select:text;user-select:text}.row-btns{display:flex}.row-btns .btn{margin:0 8px 8px 0}.json{display:block;width:100%;height:120px;padding:10px;border-radius:12px;font:12px Menlo,monospace;color:#f5f7fb;background:#0000004d;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text;resize:vertical}.c-red{color:#fb7185}.small{font-size:12px}.ac-wrap,.media-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.ac{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-main{display:flex;align-items:center}.ac-step{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;border:1px solid rgba(255,255,255,.14);margin:0 10px}.ac-step:active{background:#ffffff2e}.ac-step[disabled]{opacity:.3}.ac-dial{position:relative}.ac-dial svg{position:absolute;top:0;left:0}.ac-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-target{font-size:44px;font-weight:200;letter-spacing:-.03em;line-height:1}.ac.compact .ac-target{font-size:34px}.ac-target sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.ac-mode{font-size:12px;color:#f5f7fbb8;margin-top:4px}.ac-room{font-size:11px;color:#f5f7fb7a;margin-top:2px}.ac-modes{display:flex;flex-wrap:wrap;justify-content:center;margin-top:10px}.ac-mode-btn{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0f;border:1px solid transparent;color:#f5f7fbb8}.ac-mode-btn.active{color:#fff;border-color:#fff6}.ac-fan{margin-top:10px;align-self:center}.ac-fan button{padding:6px 10px;font-size:12px}.media-wrap{flex:1 0 auto}.media{flex:1 0 auto;display:flex;flex-direction:column}.media>:first-child{margin-top:auto}.media>:last-child{margin-bottom:auto}.media.short .media-art{width:52px;height:52px;border-radius:12px}.media.short .media-controls{margin:8px 0 2px}.media.short .media-controls button{width:38px;height:38px}.media.short .media-controls .media-play{width:46px;height:46px}.media-top{display:flex;align-items:center}.media-art{width:72px;height:72px;flex-shrink:0;border-radius:14px;background-size:cover;background-position:center;box-shadow:0 8px 24px #00000059}.media.big .media-art{width:112px;height:112px;border-radius:18px}.media-art-empty{display:flex;align-items:center;justify-content:center;background:#ffffff12;color:#f5f7fb7a}.media-art-empty.big{width:96px;height:96px;border-radius:24px;margin-bottom:12px}.media-info{flex:1;min-width:0;margin-left:14px}.media-title{font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media.big .media-title{font-size:19px}.media-sub{font-size:13px;color:#f5f7fbb8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media-state{display:flex;align-items:center;font-size:11px;color:#f5f7fb7a;margin-top:6px;text-transform:uppercase;letter-spacing:.08em}.media-state.on{color:#34d399}.eq{display:inline-flex;align-items:flex-end;height:10px;margin-right:6px}.eq b{width:2px;margin-right:2px;background:#34d399;-webkit-animation:eq .9s ease-in-out infinite;animation:eq .9s ease-in-out infinite}.eq b:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.eq b:nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}@-webkit-keyframes eq{0%,to{height:3px}50%{height:10px}}@keyframes eq{0%,to{height:3px}50%{height:10px}}.icon-round{width:36px;height:36px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;color:#f5f7fbb8;margin-left:8px}.media-controls{display:flex;align-items:center;justify-content:center;margin:14px 0 6px}.media-controls button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:#f5f7fb;margin:0 6px}.media-controls button:active{background:#ffffff1a}.media-controls .media-play{width:56px;height:56px;background:#ffffffeb;color:#0b0d14}.media-volume{display:flex;align-items:center;margin-top:8px}.media-volume button{width:32px;height:32px;display:flex;align-items:center;justify-content:center;color:#f5f7fbb8}.vol-bar{position:relative;flex:1;height:6px;margin:0 10px;border-radius:3px;background:#ffffff1f;cursor:pointer}.vol-bar:before{content:"";position:absolute;inset:-12px 0}.vol-fill{position:absolute;top:0;left:0;bottom:0;border-radius:3px;background:#f5f7fb}.vol-num{width:28px;text-align:right;font-size:12px;color:#f5f7fb7a}.media-sources{margin:10px -4px 0;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}.media-sources::-webkit-scrollbar{display:none}.media-sources .chip{flex-shrink:0;white-space:nowrap}.media-off{align-items:center;text-align:center}.media-power{margin:14px 0 0}.media-hint{margin-top:10px;max-width:220px}.dot-live{display:inline-block;width:6px;height:6px;border-radius:50%;background:#34d399;margin-right:6px;vertical-align:middle}.weather{flex:1;display:flex;flex-direction:column;min-height:0}.weather-now{display:flex;align-items:center}.weather-temp{font-size:48px;font-weight:200;letter-spacing:-.03em;line-height:1;margin:0 14px 0 10px}.weather-temp sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.weather-desc{display:flex;flex-direction:column;min-width:0}.weather-desc b{font-size:15px;font-weight:500}.weather-desc span{font-size:12px;color:#f5f7fb7a;margin-top:2px}.weather-facts{display:flex;flex-wrap:wrap;margin-top:12px;font-size:13px;color:#f5f7fbb8}.weather-facts span{display:flex;align-items:center;margin-right:16px}.weather-facts svg{margin-right:5px;color:#f5f7fb7a}.weather-rooms{margin-top:10px;border-top:1px solid rgba(255,255,255,.09)}.wroom{display:flex;align-items:center;height:36px;font-size:14px}.wroom-name{flex:1;min-width:0;color:#f5f7fbb8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wroom-hum{display:flex;align-items:center;font-size:12px;color:#f5f7fb7a;margin-right:12px}.wroom-hum svg{margin-right:3px;color:#7dd3fc}.wroom-temp{font-weight:500;font-size:16px}.room-name svg{display:inline-block;vertical-align:-2px;margin-right:6px;color:#f5f7fbb8}.weather-hours{display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px -4px 0;padding-bottom:4px}.weather-hours::-webkit-scrollbar{display:none}.hour{flex-shrink:0;width:52px;display:flex;flex-direction:column;align-items:center;font-size:12px}.hour svg{margin:6px 0;color:#f5f7fbb8}.hour b{font-weight:500;font-size:14px}.weather-days{margin-top:12px;border-top:1px solid rgba(255,255,255,.09);padding-top:4px}.day{display:flex;align-items:center;padding:7px 0;font-size:14px}.day-name{width:72px;color:#f5f7fbb8}.day svg{color:#f5f7fbb8;margin-right:10px}.day-lo{width:34px;text-align:right;color:#f5f7fb7a}.day-hi{width:34px}.day-bar{position:relative;flex:1;height:4px;margin:0 10px;border-radius:2px;background:#ffffff14}.day-bar i{position:absolute;top:0;bottom:0;border-radius:2px;background:linear-gradient(to right,#0891b2,#d97706)}.ambient-weather{display:flex;align-items:center;margin-top:2.4vh;font-size:2.8vh;color:#f5f7fb}.ambient-weather svg{width:4.2vh;height:4.2vh}.aw-temp{font-size:4.6vh;font-weight:300;margin:0 1.6vh 0 1.2vh}.aw-desc{display:flex;flex-direction:column;font-size:2.2vh;color:#f5f7fbb8;line-height:1.25}.aw-desc small{font-size:1.9vh;color:#f5f7fb7a}.tappable{cursor:pointer;border-radius:10px;transition:background .15s}.tappable:active{background:#ffffff12}.detail{position:relative;text-align:left}.detail-hero{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px}.hero-value{font-size:52px;font-weight:200;letter-spacing:-.03em;line-height:1;margin-bottom:6px}.chips{display:flex;flex-wrap:wrap;margin:0 -4px 12px}.chip{display:flex;align-items:baseline;margin:4px;padding:8px 12px;border-radius:12px;background:#ffffff0f;border:1px solid transparent;font-size:13px;color:#f5f7fbb8}.chip b{margin-left:8px;font-weight:600;color:#f5f7fb}.chip.active{border-color:#ffffff59;background:#ffffff1f;color:#f5f7fb}.detail-tools{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.chip-btn.on{background:#fff3}.chart{position:relative;margin:0 auto}.chart svg{display:block;overflow:visible}.chart-tick{fill:#f5f7fb7a;font-size:11px}.chart-legend{display:flex;justify-content:flex-end;font-size:12px;color:#f5f7fb7a;margin-top:2px}.chart-legend span{display:flex;align-items:center;margin-left:14px}.chart-legend i{width:12px;height:12px;border-radius:3px;margin-right:6px}.chart-legend i.key-line{height:2px;border-radius:1px}.chart-legend i.key-na{border:1px dashed rgba(255,255,255,.35)}.chart-tip{position:absolute;top:0;padding:7px 10px;border-radius:10px;pointer-events:none;white-space:nowrap;transform:translate(-50%);background:#080a10eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 8px 24px #0006;display:flex;flex-direction:column;font-size:12px;color:#f5f7fbb8}.chart-tip b{font-size:15px;color:#f5f7fb}.chart-empty{height:210px;display:flex;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:14px}.stats{display:flex;flex-wrap:wrap;margin:14px -5px 0}.stat{flex:1;min-width:120px;margin:5px;padding:12px 14px;border-radius:14px;background:#ffffff0d}.stat-label{font-size:12px;color:#f5f7fb7a}.stat-value{font-size:22px;font-weight:300;margin-top:4px;white-space:nowrap}.stat-note{font-size:11px;color:#f5f7fb7a;margin-top:2px}.detail-foot{margin-top:10px}.detail .table-wrap{max-height:210px}.root{height:100%}@supports (backdrop-filter: blur(1px)){.q-full .panel,.q-full .glance,.q-full .round,.q-full .chip-btn{backdrop-filter:blur(18px) saturate(140%)}.q-full .panel{background:#0c0e1652}.q-full .modal{backdrop-filter:blur(6px)}.q-full .modal-box{background:#141620d1;backdrop-filter:blur(24px) saturate(150%)}}.q-lite .slide{transform:none!important;transition:opacity .6s linear}.q-lite .soft{display:none}.q-lite .shade.deep{background-color:#04060cd1}.q-lite .sheet-glass .glass-layer{display:none}.q-lite .panel,.q-lite .modal-box,.q-lite .sheet,.q-lite .glance,.q-lite .cell.dragged .panel,.q-lite .light.on,.q-lite .light.on .light-icon,.q-lite .media-art,.q-lite .badge-btn{box-shadow:none!important}.q-lite .ambient-clock,.q-lite .ambient .header{text-shadow:none}.q-lite .eq b,.q-lite .live i,.q-lite .editing .cell,.q-lite .sheet,.q-lite .sheet-layer{-webkit-animation:none!important;animation:none!important}.q-lite .controls,.q-lite .ambient{transition-duration:.2s}.q-lite .cell,.q-lite .light,.q-lite .light-icon,.q-lite .soft{transition:none}@media(max-width:900px),(orientation:portrait){.ambient{display:block;padding-top:0}.ambient-clock{position:absolute;left:6vw;bottom:24vh}.ambient-time{font-size:13vh}.ambient-date{font-size:2.2vh}.glances{position:absolute;left:6vw;right:6vw;bottom:10vh;max-width:none;justify-content:flex-start}.glance{margin:6px 8px 0 0}.controls{padding:16px;padding-top:max(16px,env(safe-area-inset-top))}}@media(max-width:700px){.ambient-clock{left:6vw;right:6vw;text-align:center}.ambient-weather,.glances{justify-content:center}.glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.glance span{display:none}.glance svg{margin:0;width:22px;height:22px}}@media(max-width:900px),(orientation:portrait){.bar-date,.conn{display:none}.sheet-layer{justify-content:center;padding:0 12px 12px;padding-bottom:max(12px,env(safe-area-inset-bottom))}.sheet,.sheet-wide{width:100%}.sheet-cameras .cam{height:220px}.hero-value{font-size:40px}.stat{min-width:40%}.rooms .room-temp{font-size:36px}}.ambient.lock-size-xs .ambient-time{font-size:10vh}.ambient.lock-size-s .ambient-time{font-size:15vh}.ambient.lock-size-l .ambient-time{font-size:28vh}.ambient.lock-size-xl .ambient-time{font-size:34vh}.ambient.lock-center,.ambient.lock-top{flex-direction:column;align-items:center;justify-content:flex-end}.ambient.lock-top{justify-content:flex-start;padding-top:10vh}.ambient.lock-center .ambient-clock,.ambient.lock-top .ambient-clock{position:static;text-align:center}.ambient.lock-center .ambient-weather,.ambient.lock-top .ambient-weather{justify-content:center}.ambient.lock-center .glances,.ambient.lock-top .glances{position:static;max-width:none;justify-content:center;margin-top:3vh}.ambient.lock-center .glance,.ambient.lock-top .glance{margin:6px 5px 0}.ambient.lock-top .ambient-clock{display:flex;flex-direction:column;align-items:center}.ambient-date.above{margin:0 0 1vh}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .ambient-weather{justify-content:flex-start}.ambient.chips-icons .glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.ambient.chips-icons .glance span{display:none}.ambient.chips-icons .glance svg{margin:0;width:22px;height:22px}.ambient.chips-text .glance{width:auto;height:auto;padding:9px 16px 9px 13px;border-radius:999px}.ambient.chips-text .glance span{display:inline}.ambient.chips-text .glance svg{margin-right:8px;width:18px;height:18px}@media(max-width:900px),(orientation:portrait){.ambient.lock-size-xs .ambient-time{font-size:7vh}.ambient.lock-size-s .ambient-time{font-size:10vh}.ambient.lock-size-m .ambient-time{font-size:13vh}.ambient.lock-size-l .ambient-time{font-size:17vh}.ambient.lock-size-xl .ambient-time{font-size:21vh}}@media(max-width:700px){.ambient.lock-size-xs .ambient-time{font-size:15vw}.ambient.lock-size-s .ambient-time{font-size:20vw}.ambient.lock-size-m .ambient-time{font-size:26vw}.ambient.lock-size-l .ambient-time{font-size:31vw}.ambient.lock-size-xl .ambient-time{font-size:35vw}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .glances{justify-content:flex-start}}.ambient.customizing{transform:scale(.9)}.ambient.customizing .ambient-clock,.ambient.customizing .glances{pointer-events:auto;cursor:pointer;border-radius:18px;padding:10px 14px;border:1.5px dashed rgba(255,255,255,.55);background:#ffffff0f}.ambient.customizing .glances{min-height:64px;min-width:120px}.glance-add{color:#f5f7fbb8}.lock-ui{position:absolute;inset:0;z-index:30;pointer-events:none}.lock-top{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;padding-top:max(16px,env(safe-area-inset-top));pointer-events:auto;font-size:14px;color:#f5f7fbb8;text-shadow:0 1px 8px rgba(0,0,0,.5)}.lock-modal{position:absolute;inset:0;pointer-events:auto;display:flex;align-items:center;justify-content:center;background:#00000059}.lock-panel{position:relative;width:420px;max-width:calc(100% - 24px);max-height:80%;overflow-y:auto;padding:16px 18px 10px;border-radius:24px;pointer-events:auto;background:#141620eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 20px 60px #00000080}.lock-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;font-size:16px}.lock-fonts{display:flex;margin:0 -4px 12px}.lock-font{flex:1;margin:0 4px;height:64px;border-radius:14px;font-size:34px;background:#ffffff0f;border:1.5px solid transparent}.lock-font.on{border-color:#7dd3fc;background:#7dd3fc1f}.lock-colors{display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;margin:0 -18px 6px;padding:4px 18px;-webkit-overflow-scrolling:touch;scrollbar-width:none}.lock-colors::-webkit-scrollbar{display:none}.lock-colors .lock-color{flex-shrink:0}.lock-color{width:34px;height:34px;margin-right:10px;border-radius:50%;border:2px solid rgba(255,255,255,.15)}.lock-color.on{border-color:#fff;box-shadow:0 0 0 3px #ffffff40}.lock-widget{display:flex;align-items:center;border-top:1px solid rgba(255,255,255,.09)}.lock-widget .check{flex:1;margin:10px 0}.lock-widget .check svg{margin-right:8px;color:#f5f7fbb8}.lock-widget .icon-btn{width:36px;height:36px;display:flex;align-items:center;justify-content:center}.lock-widget .icon-btn[disabled]{opacity:.25}.option-hint{display:block;margin-top:2px;font-size:12px;color:#f5f7fb7a}.device-parts{margin:0 0 8px 52px}.device-part{display:flex;align-items:center;padding:2px 0}.device-part input[type=checkbox]{width:18px;height:18px;margin:0 8px 0 0;flex-shrink:0}.device-part .part-name{flex:1;min-width:0;padding:6px 10px;border-radius:10px;font-size:13px;background:#ffffff0d;border:1px solid transparent;color:#f5f7fb}.device-part .part-name:focus{border-color:#ffffff17;outline:none}.device-part .icon-btn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.device-part .icon-btn[disabled]{opacity:.25}.device-part.off .part-name{opacity:.45;text-decoration:line-through}.photos-count{display:flex;align-items:center;justify-content:space-between;margin:12px 0 4px;font-size:13px;color:#f5f7fbb8}.photos-count a{color:#7dd3fc;text-decoration:none}.ambient.widgets-top .glances,.ambient.widgets-bottom .glances{position:absolute;left:4vw;right:4vw;max-width:none;margin:0;justify-content:center}.ambient.widgets-top .glances{top:4vh;top:max(4vh,env(safe-area-inset-top));bottom:auto}.ambient.widgets-bottom .glances{bottom:7vh;bottom:calc(1.5vh + 48px);top:auto}.ambient.widgets-top .glance,.ambient.widgets-bottom .glance{margin:6px 5px 0}.ambient.lock-top.widgets-top{padding-top:18vh}.ambient-time,.ambient-clock,.glances{transition:color 1.2s ease}.text-contrast .ambient-time,.text-contrast .ambient-date,.text-contrast .ambient-weather,.text-contrast .aw-desc,.text-contrast .aw-desc small,.text-contrast .glance,.text-contrast .glance svg{color:inherit}.text-contrast .ambient-date{opacity:.85}.text-contrast .aw-desc,.text-contrast .aw-desc small{opacity:.8}.text-contrast .glance.lit svg{color:#fbbf24}.text-contrast.ink-dark,.text-contrast.ink-dark .ambient-time{text-shadow:0 1px 24px rgba(255,255,255,.45)}.glances.text-contrast.ink-dark .glance{background:#ffffff80;border-color:#0000001a}.glances.text-contrast.ink-dark .glance.alert{color:#fff}.ambient-clock.ink-fixed .ambient-time,.ambient-clock.ink-fixed .ambient-date,.ambient-clock.ink-fixed .ambient-weather,.ambient-clock.ink-fixed .aw-desc,.ambient-clock.ink-fixed .aw-desc small,.ambient-clock.ink-fixed .ambient-weather svg{color:inherit}.ambient-clock.ink-fixed .ambient-date{opacity:.85}.ambient-clock.ink-fixed .aw-desc,.ambient-clock.ink-fixed .aw-desc small{opacity:.8}.glances.ink-fixed .glance,.glances.ink-fixed .glance svg{color:inherit}.glances.ink-fixed .glance.lit svg{color:#fbbf24}.glances.ink-fixed .glance.alert,.glances.ink-fixed .glance.alert svg,.glances.ink-fixed .glance.warn,.glances.ink-fixed .glance.warn svg{color:#fff}.lock-color-custom{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;background:conic-gradient(#f87171,#fbbf24,#4ade80,#22d3ee,#818cf8,#f472b6,#f87171);background-color:#888}.lock-color-custom input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer;border:0;padding:0}.lock-color-custom span{color:#fff;font-weight:800;font-size:14px;text-shadow:0 0 4px rgba(0,0,0,.6);pointer-events:none}.hex-input{width:110px;height:36px;padding:0 10px;border-radius:10px;background:#ffffff14;font-family:monospace;font-size:15px}.hex-input.invalid{box-shadow:inset 0 0 0 1.5px #f87171}.lock-color-same{width:auto;padding:0 12px;border-radius:17px;font-size:13px;white-space:nowrap;flex-shrink:0;color:#fff;background:#ffffff1a}.lock-color-contrast{background:linear-gradient(135deg,#fff 50%,#111 50%)}.lock-color-contrast{padding:0}.lock-color-contrast span{display:block;color:#8c8c8c;font-size:15px;font-weight:800;line-height:30px;text-align:center}.screen-dim{position:fixed;inset:0;z-index:9000;background:#000;pointer-events:none;transition:opacity .8s ease}.screen-dim.asleep{pointer-events:auto}.ambient.lock-grid{display:block;padding:0}.ambient.lock-grid .ambient-clock,.ambient.lock-grid .glances{position:absolute;display:flex;flex-direction:column;box-sizing:border-box;max-width:none;margin:0;overflow:hidden}.ambient.lock-grid .glances{flex-direction:row;flex-wrap:wrap;align-content:flex-start}.ambient.lock-grid .glance{margin:4px}.ambient.lock-grid .ambient-clock.g-left{align-items:flex-start;text-align:left}.ambient.lock-grid .ambient-clock.g-center{align-items:center;text-align:center}.ambient.lock-grid .ambient-clock.g-right{align-items:flex-end;text-align:right}.ambient.lock-grid .ambient-clock.g-top{justify-content:flex-start}.ambient.lock-grid .ambient-clock.g-middle{justify-content:center}.ambient.lock-grid .ambient-clock.g-bottom{justify-content:flex-end}.ambient.lock-grid .g-left .ambient-weather{justify-content:flex-start}.ambient.lock-grid .g-center .ambient-weather{justify-content:center}.ambient.lock-grid .g-right .ambient-weather{justify-content:flex-end}.ambient.lock-grid .glances.g-left{justify-content:flex-start}.ambient.lock-grid .glances.g-center{justify-content:center}.ambient.lock-grid .glances.g-right{justify-content:flex-end}.ambient.lock-grid .glances.g-middle{align-content:center}.ambient.lock-grid .glances.g-bottom{align-content:flex-end}.ambient.customizing.lock-grid .ambient-clock,.ambient.customizing.lock-grid .glances{border-color:transparent;background:none;padding:0;min-height:0;min-width:0}.grid-editor{position:absolute;z-index:5;pointer-events:none;background-image:linear-gradient(to right,rgba(255,255,255,.14) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.14) 1px,transparent 1px);background-size:8.3333% 8.3333%;outline:1px solid rgba(255,255,255,.14)}.grid-box{position:absolute;box-sizing:border-box;pointer-events:auto;cursor:move;border-radius:12px;border:1.5px dashed rgba(255,255,255,.7);background:#7dd3fc1a}.grid-widgets{background:#fcd34d1a}.grid-label{position:absolute;top:6px;left:8px;font-size:12px;color:#fff;padding:2px 8px;border-radius:8px;background:#00000073}.grid-resize{position:absolute;right:-2px;bottom:-2px;width:28px;height:28px;cursor:nwse-resize;border-radius:0 0 12px;background:linear-gradient(135deg,transparent 50%,rgba(255,255,255,.85) 50%)}.lock-top-btns{display:flex;align-items:center}.lock-top-btns .pill-btn{margin-left:8px;display:inline-flex;align-items:center}.lock-top-btns .pill-btn svg{margin-right:6px}.lock-top-btns .pill-btn:not(.accent-bg){background:#ffffff24;color:#fff}.lock-top-btns .pill-btn.on:not(.accent-bg){background:#7dd3fc;color:#0b0d14}.settings-section{margin-top:18px;padding-top:14px;border-top:1px solid rgba(255,255,255,.09)}.settings-section:first-child,.migration+.settings-section{margin-top:0;padding-top:0;border-top:0}.section-title{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#f5f7fb7a;margin-bottom:10px}.lock-sec{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#f5f7fb7a;margin:14px 0 8px}.lock-panel-head+.lock-sec{margin-top:0}';
var Ne, J, wn, To, ut = 0, Ri = [], $ = V, Oo = $.__b, Lo = $.__r, Po = $.diffed, Ho = $.__c, Qo = $.unmount, jo = $.__;
function _t(t, e) {
  $.__h && $.__h(J, t, ut || e), ut = 0;
  var n = J.__H || (J.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function w(t) {
  return ut = 1, Ir(qi, t);
}
function Ir(t, e, n) {
  var s = _t(Ne++, 2);
  if (s.t = t, !s.__c && (s.__ = [qi(void 0, e), function(c) {
    var h = s.__N ? s.__N[0] : s.__[0], A = s.t(h, c);
    h !== A && (s.__N = [A, s.__[1]], s.__c.setState({}));
  }], s.__c = J, !J.__f)) {
    var i = function(c, h, A) {
      if (!s.__c.__H) return !0;
      var u = !1, f = s.__c.props !== c;
      if (s.__c.__H.__.some(function(m) {
        if (m.__N) {
          u = !0;
          var p = m.__[0];
          m.__ = m.__N, m.__N = void 0, p !== m.__[0] && (f = !0);
        }
      }), a) {
        var l = a.call(this, c, h, A);
        return u ? l || f : l;
      }
      return !u || f;
    };
    J.__f = !0;
    var a = J.shouldComponentUpdate, r = J.componentWillUpdate;
    J.componentWillUpdate = function(c, h, A) {
      if (this.__e) {
        var u = a;
        a = void 0, i(c, h, A), a = u;
      }
      r && r.call(this, c, h, A);
    }, J.shouldComponentUpdate = i;
  }
  return s.__N || s.__;
}
function Q(t, e) {
  var n = _t(Ne++, 3);
  !$.__s && bo(n.__H, e) && (n.__ = t, n.u = e, J.__H.__h.push(n));
}
function po(t, e) {
  var n = _t(Ne++, 4);
  !$.__s && bo(n.__H, e) && (n.__ = t, n.u = e, J.__h.push(n));
}
function se(t) {
  return ut = 5, go(function() {
    return { current: t };
  }, []);
}
function go(t, e) {
  var n = _t(Ne++, 7);
  return bo(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function Dr(t, e) {
  return ut = 8, go(function() {
    return t;
  }, e);
}
function Zt(t) {
  var e = J.context[t.__c], n = _t(Ne++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(J)), e.props.value) : t.__;
}
function Br() {
  for (var t; t = Ri.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(Pt), e.__h.some(Zn), e.__h = [];
    } catch (n) {
      e.__h = [], $.__e(n, t.__v);
    }
  }
}
$.__b = function(t) {
  J = null, Oo && Oo(t);
}, $.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), jo && jo(t, e);
}, $.__r = function(t) {
  Lo && Lo(t), Ne = 0;
  var e = (J = t.__c).__H;
  e && (wn === J ? (e.__h = [], J.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(Pt), e.__h.some(Zn), e.__h = [], Ne = 0)), wn = J;
}, $.diffed = function(t) {
  Po && Po(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Ri.push(e) !== 1 && To === $.requestAnimationFrame || ((To = $.requestAnimationFrame) || Tr)(Br)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), wn = J = null;
}, $.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(Pt), n.__h = n.__h.filter(function(s) {
        return !s.__ || Zn(s);
      });
    } catch (s) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], $.__e(s, n.__v);
    }
  }), Ho && Ho(t, e);
}, $.unmount = function(t) {
  Qo && Qo(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(s) {
    try {
      Pt(s);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && $.__e(e, n.__v));
};
var No = typeof requestAnimationFrame == "function";
function Tr(t) {
  var e, n = function() {
    clearTimeout(s), No && cancelAnimationFrame(e), setTimeout(t);
  }, s = setTimeout(n, 35);
  No && (e = requestAnimationFrame(n));
}
function Pt(t) {
  var e = J, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), J = e;
}
function Zn(t) {
  var e = J;
  t.__c = t.__(), J = e;
}
function bo(t, e) {
  return !t || t.length !== e.length || e.some(function(n, s) {
    return n !== t[s];
  });
}
function qi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Vi = "photoframe.quality", Ie = [];
function Wi() {
  try {
    return localStorage.getItem(Vi) || "auto";
  } catch {
    return "auto";
  }
}
function Or(t) {
  try {
    localStorage.setItem(Vi, t);
  } catch {
  }
  Ie.forEach((e) => e());
}
function Ui() {
  const t = navigator, e = /Android/i.test(navigator.userAgent);
  return typeof t.deviceMemory == "number" ? t.deviceMemory <= 2 ? "lite" : "full" : e && (!navigator.hardwareConcurrency || navigator.hardwareConcurrency <= 4) ? "lite" : "full";
}
function Fe() {
  const t = Wi();
  return t === "auto" ? Ui() : t;
}
function Yi() {
  const [t, e] = w(Fe());
  return Q(() => {
    const n = () => e(Fe());
    return Ie.push(n), () => {
      Ie.splice(Ie.indexOf(n), 1);
    };
  }, []), t;
}
function Lr() {
  return Fe() === "lite" ? 800 : 150;
}
const it = {}, vn = [], Pr = 4;
function Hr() {
  const t = Fe() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  let e = screen.width * t, n = screen.height * t;
  const s = Math.min(1, (Fe() === "lite" ? 1280 : 2560) / Math.max(e, n));
  return e = Math.round(e * s), n = Math.round(n * s), { w: e, h: n };
}
function Qr() {
  const t = Fe() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2), e = Math.max(screen.width, screen.height) * t;
  return Math.round(Math.min(Fe() === "lite" ? 1280 : 2560, e));
}
function jr(t, e) {
  return new Promise((n) => {
    const s = new Image();
    s.onerror = () => n(t), s.onload = () => {
      const i = Math.max(s.naturalWidth, s.naturalHeight);
      if (!i || i <= e) {
        n(t);
        return;
      }
      const a = e / i, r = document.createElement("canvas");
      r.width = Math.round(s.naturalWidth * a), r.height = Math.round(s.naturalHeight * a);
      try {
        r.getContext("2d").drawImage(s, 0, 0, r.width, r.height), r.toBlob((c) => {
          r.width = r.height = 0, n(c ? URL.createObjectURL(c) : t);
        }, "image/jpeg", 0.85);
      } catch {
        n(t);
      }
    }, s.src = t;
  });
}
function Fo(t) {
  if (!t || /^(data|blob):/.test(t) || !HTMLCanvasElement.prototype.toBlob || t.indexOf("/api/photoframe/photo/") !== -1) return Promise.resolve(t);
  const e = Qr(), n = t + "@" + e;
  if (n in it) return it[n];
  const s = jr(t, e);
  for (it[n] = s, vn.push(n); vn.length > Pr; ) {
    const i = vn.shift(), a = it[i];
    delete it[i], a.then((r) => {
      /^blob:/.test(r) && URL.revokeObjectURL(r);
    });
  }
  return s;
}
const Zi = "photoframe.fit";
function Jt() {
  try {
    return localStorage.getItem(Zi) || "auto";
  } catch {
    return "auto";
  }
}
function Nr(t) {
  try {
    localStorage.setItem(Zi, t);
  } catch {
  }
  Ie.forEach((e) => e());
}
function Fr() {
  const [t, e] = w(Jt());
  return Q(() => {
    const n = () => e(Jt());
    return Ie.push(n), () => {
      Ie.splice(Ie.indexOf(n), 1);
    };
  }, []), t;
}
function Rr(t, e) {
  const n = Jt();
  return !t || !e || n === "cover" ? !1 : n === "contain" ? !0 : t >= e != window.innerWidth >= window.innerHeight;
}
class yo {
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
    this.emitTimer || (this.emitTimer = window.setTimeout(() => this.emitNow(), Lr()));
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
    let s;
    try {
      s = new WebSocket(n);
    } catch {
      this.scheduleReconnect();
      return;
    }
    this.ws = s, s.onmessage = (i) => {
      const a = JSON.parse(i.data);
      if (a.type === "auth_required")
        s.send(JSON.stringify({ type: "auth", access_token: e }));
      else if (a.type === "auth_invalid")
        this.stopped = !0, this.setStatus("auth_invalid"), s.close();
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
    }, s.onclose = () => {
      this.ws === s && (this.ws = null), Object.keys(this.pending).forEach((i) => this.pending[+i].reject(new Error("disconnected"))), this.pending = {}, this.subs = {}, this.stopped || (this.setStatus("disconnected"), this.scheduleReconnect());
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
      const n = {}, s = {};
      e.entities.forEach((i) => {
        if (n[i.ei] = i, !i.di) return;
        const a = s[i.di] || (s[i.di] = { id: i.di, name: "", entities: [] });
        a.entities.push(i.ei);
        const r = this.states[i.ei], c = r && String(r.attributes.friendly_name || "");
        c && !a.name && (a.name = i.en && c.length > i.en.length && c.slice(-i.en.length) === i.en ? c.slice(0, -i.en.length).trim() : i.en ? "" : c);
      }), this.registry = n, this.devices = s, this.emit();
    }, () => {
    });
  }
  // Подписка: onEvent вызывается на каждое событие, пока не отпишутся. После переподключения
  // подписки пропадают — компоненты подписываются заново по смене status.
  subscribeMessage(e, n) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return () => {
    };
    const s = this.msgId++, i = this.ws;
    return this.subs[s] = n, i.send(JSON.stringify({ id: s, ...e })), () => {
      delete this.subs[s], i.readyState === WebSocket.OPEN && i.send(JSON.stringify({ id: this.msgId++, type: "unsubscribe_events", subscription: s }));
    };
  }
  // Запрос с ответом: история, статистика, реестр сущностей.
  call(e) {
    return new Promise((n, s) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        s(new Error("not connected"));
        return;
      }
      const i = this.msgId++;
      this.pending[i] = { resolve: n, reject: s }, this.ws.send(JSON.stringify({ id: i, ...e }));
    });
  }
  callService(e, n, s) {
    return this.send({
      type: "call_service",
      domain: e.split(".")[0],
      service: n,
      target: { entity_id: e },
      ...s ? { service_data: s } : {}
    });
  }
  // Обложки и картинки сущностей. Внешние (обложки Яндекс Музыки) — как есть, HA-шные
  // (/api/media_player_proxy/…?token=…) уже подписаны токеном сущности — нужен только адрес HA.
  pictureUrl(e) {
    return this.resolveUrl(e || "");
  }
  // Запрос к REST API HA с авторизацией (загрузка фото в медиатеку). XHR, а не fetch: fetch нет в Chrome 37.
  fetch(e, n = {}) {
    return this.token().then((s) => new Promise((i, a) => {
      const r = new XMLHttpRequest();
      r.open(n.method || "GET", this.baseUrl.replace(/\/+$/, "") + e), r.setRequestHeader("Authorization", "Bearer " + s), r.onload = () => i({ ok: r.status >= 200 && r.status < 300, status: r.status }), r.onerror = () => a(new Error("network")), r.send(n.body || null);
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
    const n = this.states[e], s = n && n.attributes.access_token;
    return s ? this.baseUrl.replace(/\/+$/, "") + "/api/camera_proxy_stream/" + e + "?token=" + s : "";
  }
}
const Ji = fn(null), Jn = fn(!0);
function X() {
  const t = Zt(Ji), e = Zt(Jn), [, n] = w(0), s = se(!1);
  return Q(() => {
    if (!e) {
      s.current = !0;
      return;
    }
    return s.current && (s.current = !1, n((i) => i + 1)), t.subscribe(() => n((i) => i + 1));
  }, [t, e]), t;
}
function mn(t) {
  return t === "on" || t === "open" || t === "playing";
}
function ft(t) {
  return t === void 0 || t === "unavailable" || t === "unknown";
}
function Re(t, e) {
  if (t.status !== "connected" || !t.loaded) return !0;
  const n = t.states[e];
  return !!n && n.state !== "unavailable";
}
function Se(t, e) {
  const n = e ? t.states[e] : void 0;
  return n && !ft(n.state) ? n.state : void 0;
}
function Ht(t, e = 1) {
  return t === void 0 || isNaN(parseFloat(t)) ? "--" : parseFloat(t).toFixed(e);
}
function Gt(t, e) {
  const n = t.states[e];
  return n && n.attributes.unit_of_measurement ? " " + n.attributes.unit_of_measurement : "";
}
const Gi = fn(() => {
});
function pn() {
  return Zt(Gi);
}
const qr = "English", Vr = {
  _language: qr,
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
  "layout.grid_done": "Grid applied",
  "layout.grid_none": "No other frame has set up a photo screen grid yet (Customize → Grid).",
  "layout.grid_offline": "offline",
  "layout.grid_take": "Use this grid",
  "layout.grid_title": "Photo screen — grid from another frame",
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
}, Wr = "Русский", Ur = {
  _language: Wr,
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
  "layout.grid_done": "Сетка взята",
  "layout.grid_none": "Другие рамки ещё не настроили сетку экрана с фото (Настроить → «Сетка»).",
  "layout.grid_offline": "не в сети",
  "layout.grid_take": "Взять сетку",
  "layout.grid_title": "Экран с фото — сетка с другой рамки",
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
}, Ro = /* @__PURE__ */ Object.assign({ "./locales/en.json": Vr, "./locales/ru.json": Ur }), Ee = {};
Object.keys(Ro).forEach((t) => {
  const e = t.replace(/^.*\/([^/]+)\.json$/, "$1");
  Ee[e] = Ro[t];
});
const Xt = "en", Xi = "photoframe.language";
let mt = Xt;
const Qt = [];
function Yr() {
  return Object.keys(Ee).sort().map((t) => ({ code: t, name: Ee[t]._language || t }));
}
function _n(t) {
  if (!t) return null;
  if (Ee[t]) return t;
  const e = t.split(/[-_]/)[0].toLowerCase();
  return Ee[e] ? e : null;
}
function Ki() {
  try {
    return localStorage.getItem(Xi) || "";
  } catch {
    return "";
  }
}
function Zr(t) {
  try {
    localStorage.setItem(Xi, t);
  } catch {
  }
}
let qo;
function gn(t) {
  t && (qo = t);
  const e = _n(Ki()) || _n(qo) || _n(navigator.language) || Xt;
  e !== mt && (mt = e, Qt.forEach((n) => n()));
}
function d(t, e) {
  let n = Ee[mt] && Ee[mt][t] || Ee[Xt] && Ee[Xt][t] || t;
  return e && Object.keys(e).forEach((s) => {
    n = n.split("{" + s + "}").join(String(e[s]));
  }), n;
}
function $e(t) {
  return d(t).split(",").map((e) => e.trim());
}
gn();
function Jr() {
  const [, t] = w(0);
  return Q(() => {
    const e = () => t((n) => n + 1);
    return Qt.push(e), () => {
      Qt.splice(Qt.indexOf(e), 1);
    };
  }, []), mt;
}
const qe = 12, Gr = 2, $i = 2, Xe = 4, Kt = {
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
function pt(t) {
  return d("card." + t + ".title");
}
function es(t) {
  return d("card." + t + ".hint");
}
const dt = {
  amber: "#fbbf24",
  sky: "#7dd3fc",
  green: "#34d399",
  pink: "#f9a8d4",
  violet: "#c4b5fd",
  red: "#fb7185"
};
let ts = 0;
function Xr() {
  return "c" + Date.now().toString(36) + (ts++).toString(36);
}
function ns() {
  return {
    cols: qe,
    cards: [
      { id: "climate", type: "climate", title: "", icon: "thermometer", x: 0, y: 0, w: 3, h: 6, chip: !0, items: [] },
      { id: "lights", type: "switches", title: "", icon: "lightbulb", x: 3, y: 0, w: 6, h: 6, chip: !0, color: "amber", items: [] },
      { id: "weather", type: "weather", title: "", icon: "cloud-sun", x: 9, y: 0, w: 3, h: 3, chip: !0, items: [] },
      { id: "home", type: "sensors", title: "", icon: "shield", x: 9, y: 3, w: 3, h: 3, chip: !0, items: [] }
    ]
  };
}
function Vo(t, e) {
  return t.x < e.x + e.w && e.x < t.x + t.w && t.y < e.y + e.h && e.y < t.y + t.h;
}
function Gn(t, e) {
  return t.y - e.y || t.x - e.x;
}
function gt(t, e = qe) {
  const n = Math.max(Gr, Math.min(e, Math.round(t.w))), s = Math.max($i, Math.round(t.h));
  return { ...t, w: n, h: s, x: Math.max(0, Math.min(e - n, Math.round(t.x))), y: Math.max(0, Math.round(t.y)) };
}
function Pe(t, e) {
  const n = [];
  e && n.push(e), t.filter((a) => !e || a.id !== e.id).slice().sort(Gn).forEach((a) => {
    let r = a.y;
    for (let c = 0; c < 500; c++) {
      const h = n.filter((A) => Vo({ ...a, y: r }, A));
      if (!h.length) break;
      r = Math.max.apply(null, h.map((A) => A.y + A.h));
    }
    n.push({ ...a, y: r });
  });
  const i = [];
  return n.slice().sort((a, r) => Gn(a, r) || (e && a.id === e.id ? -1 : 0)).forEach((a) => {
    let r = a.y;
    for (; r > 0 && !i.some((c) => Vo({ ...a, y: r - 1 }, c)); ) r--;
    i.push({ ...a, y: r });
  }), t.map((a) => i.filter((r) => r.id === a.id)[0]);
}
function Xn(t) {
  return t.reduce((e, n) => Math.max(e, n.y + n.h), 0);
}
function Ce(t, e) {
  const n = t, i = (n && Array.isArray(n.screens) ? n.screens : n && Array.isArray(n.cards) ? [n] : []).filter((a) => a && Array.isArray(a.cards)).map((a, r) => ({ ...$r(a), id: String(a.id || (r ? "s" + r : "main")), name: String(a.name || "") }));
  return i.length ? i : [{ ...e ? e() : { cols: qe, cards: [] }, id: "main", name: "" }];
}
function Kr() {
  return "s" + Date.now().toString(36) + (ts++).toString(36);
}
function jt(t, e) {
  return t.name || d("screen.default", { n: e + 1 });
}
function $r(t) {
  if (t.cols === qe) return Wo(t);
  const e = [], n = (i, a, r, c) => {
    for (let h = a; h < a + c; h++) for (let A = i; A < i + r; A++) if (e[h] && e[h][A]) return !1;
    return !0;
  }, s = t.cards.map((i) => {
    const a = Math.min(i.w || 1, 4), r = i.h || 1;
    for (let c = 0; ; c++)
      for (let h = 0; h + a <= 4; h++)
        if (n(h, c, a, r)) {
          for (let A = c; A < c + r; A++) {
            e[A] = e[A] || [];
            for (let u = h; u < h + a; u++) e[A][u] = !0;
          }
          return { ...i, x: h * 3, y: c * 3, w: a * 3, h: r * 3 };
        }
  });
  return Wo({ ...t, cols: qe, cards: s });
}
function Wo(t) {
  const e = (i) => typeof i == "number" && isFinite(i);
  let n = t.cards.reduce((i, a) => e(a.y) && e(a.h) ? Math.max(i, a.y + a.h) : i, 0);
  const s = t.cards.map((i) => {
    const a = e(i.w) ? i.w : 3, r = e(i.h) ? i.h : 3;
    if (e(i.x) && e(i.y)) return gt({ ...i, w: a, h: r });
    const c = gt({ ...i, x: 0, y: n, w: a, h: r });
    return n += c.h, c;
  });
  return { ...t, cols: qe, cards: Pe(s) };
}
function ec(t) {
  const e = t.slice().sort(Gn), n = e.filter((a) => a.m && !a.m.hide).map((a) => gt({ ...a, x: a.m.x, y: a.m.y, w: a.m.w, h: a.m.h }, Xe));
  let s = Xn(n);
  const i = e.filter((a) => !a.m).map((a) => {
    const r = Math.max($i, Math.min(Xe, Math.round(a.h * 2 / 3))), c = { ...a, x: 0, y: s, w: Xe, h: r };
    return s += r, c;
  });
  return Pe(n.concat(i));
}
function Cn(t, e) {
  return t.map((n) => {
    const s = e.filter((i) => i.id === n.id)[0];
    return s ? { ...n, m: { x: s.x, y: s.y, w: s.w, h: s.h } } : n;
  });
}
const tc = "photoframe", bt = "photos", nc = 1920;
function os() {
  return new Promise((t, e) => {
    const n = indexedDB.open(tc, 1);
    n.onupgradeneeded = () => n.result.createObjectStore(bt, { keyPath: "id", autoIncrement: !0 }), n.onsuccess = () => t(n.result), n.onerror = () => e(n.error);
  });
}
function ko(t, e) {
  return os().then((n) => new Promise((s, i) => {
    const a = e(n.transaction(bt, t).objectStore(bt));
    a.onsuccess = () => s(a.result), a.onerror = () => i(a.error);
  }));
}
function Mn() {
  return os().then((t) => new Promise((e, n) => {
    const s = [], i = t.transaction(bt, "readonly").objectStore(bt).openCursor();
    i.onsuccess = () => {
      const a = i.result;
      a ? (s.push(a.value), a.continue()) : e(s);
    }, i.onerror = () => n(i.error);
  }));
}
function oc(t) {
  return ko("readwrite", (e) => e.delete(t));
}
function Uo() {
  return ko("readwrite", (t) => t.clear());
}
function is(t) {
  return new Promise((e, n) => {
    const s = new FileReader();
    s.onerror = () => n(s.error), s.onload = () => {
      const i = new Image();
      i.onerror = () => n(new Error(d("errors.decode", { name: t.name }))), i.onload = () => {
        const a = Math.min(1, nc / Math.max(i.width, i.height)), r = document.createElement("canvas");
        r.width = Math.round(i.width * a), r.height = Math.round(i.height * a), r.getContext("2d").drawImage(i, 0, 0, r.width, r.height);
        const c = r.toDataURL("image/jpeg", 0.85);
        r.width = r.height = 0, e(c);
      }, i.src = s.result;
    }, s.readAsDataURL(t);
  });
}
function ic(t) {
  return is(t).then((e) => ko("readwrite", (n) => n.add({ data: e }))).then(() => {
  });
}
const yt = "custom:photoframe-card";
function xo(t) {
  if (!t || typeof t != "object") return null;
  if (t.type === yt) return t;
  const e = [t.views, t.cards, t.sections, t.card ? [t.card] : null];
  for (const n of e)
    if (Array.isArray(n))
      for (const s of n) {
        const i = xo(s);
        if (i) return i;
      }
  return null;
}
function sc() {
  const t = location.pathname.split("/")[1] || "lovelace";
  return t === "lovelace" ? null : t;
}
function ss(t) {
  return t.call({ type: "photoframe/config" }).then((e) => ({ ...e, type: yt }), () => null);
}
function ac(t, e) {
  return t.call({ type: "lovelace/config", url_path: e }).then(
    (n) => xo(n),
    (n) => {
      if (/not found|config_not_found|No config/i.test(n.message)) return null;
      throw n;
    }
  );
}
class $t {
  // dashboard — путь дашборда с карточкой; не задан — тот, на котором открыта карточка.
  // standalone — это PWA со своим подключением к HA, а не карточка внутри фронтенда HA.
  // integration — данные в интеграции Photo Frame (photoframe/config/*), а не в конфиге дашборда.
  constructor(e, n, s, i = !1, a = !1) {
    this.client = e, this.config = n, this.dashboard = s, this.standalone = i, this.integration = a, this.album = "", this.sourceJob = null, this.queue = Promise.resolve(), this.saving = 0;
  }
  get folder() {
    const e = (this.config.media_folder || "photoframe").replace(/^\/+|\/+$/g, "");
    return this.album && this.album !== "all" ? e + "/" + this.album : e;
  }
  source() {
    return this.config.media_source ? Promise.resolve(this.config.media_source) : (this.sourceJob || (this.sourceJob = this.client.call({ type: "media_source/browse_media", media_content_id: "media-source://media_source" }).then((e) => {
      const s = [e.media_content_id || ""].concat((e.children || []).map((i) => i.media_content_id)).map((i) => (/^media-source:\/\/media_source\/([^/]+)\//.exec(i) || [])[1]).filter(Boolean);
      return s.indexOf("local") !== -1 ? "local" : s[0] || "local";
    }, () => "local")), this.sourceJob);
  }
  // Ссылка на папку фото (или альбом) в медиатеке HA — там их смотрят, удаляют и раскладывают.
  mediaBrowserUrl(e) {
    return this.source().then((n) => {
      const s = "media-source://media_source/" + n + "/" + (this.config.media_folder || "photoframe").replace(/^\/+|\/+$/g, ""), i = ["app,media-source://media_source", "," + s];
      return e && e !== "all" && i.push("," + s + "/" + e), this.client.resolveUrl("/media-browser/browser/" + i.map(encodeURIComponent).join("/"));
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
      this.busy || (this.config = { ...n, type: yt }, e(this.config));
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
      const a = this.dashboard !== void 0 ? this.dashboard : sc();
      return this.client.call({ type: "lovelace/config", url_path: a }).then((r) => {
        const c = xo(r);
        if (!c) throw new Error(d("errors.card_not_found", { type: yt }));
        return Object.keys(e).forEach((h) => {
          c[h] = e[h];
        }), this.config = { ...this.config, ...e }, this.client.call({ type: "lovelace/config/save", url_path: a, config: r });
      });
    }, s = this.queue.then(n, n), i = () => {
      this.saving--;
    };
    return s.then(i, i), this.queue = s.catch(() => {
    }), s;
  }
  // Только id фото в папке (без подписанных ссылок) — дёшево проверить, не поменялся ли набор.
  // С интеграцией фото готовит сервер: список альбома со ссылками на кадры под размер этого экрана.
  integrationPhotos() {
    const e = Hr();
    return this.client.call({
      type: "photoframe/photos",
      album: this.album || "all",
      width: e.w,
      height: e.h
    }).then((n) => n.photos.map((s) => ({ id: s.id, url: this.client.resolveUrl(s.url) })));
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
      const n = (e.children || []).filter((s) => s.media_class === "image");
      return Promise.all(n.map((s) => this.client.call({
        type: "media_source/resolve_media",
        media_content_id: s.media_content_id,
        expires: 86400
      }).then((i) => ({ id: s.media_content_id, url: this.client.resolveUrl(i.url) }))));
    }, () => {
      throw new Error(d("errors.upload_folder", { folder: this.folder }));
    });
  }
  // album: куда загрузить (подпапка); не задан — альбом этой рамки, а «все» — корень папки фото.
  addPhoto(e, n) {
    if (this.integration) {
      const s = new FormData();
      return s.append("album", n ?? (this.album && this.album !== "all" ? this.album : "")), s.append("file", e, e.name), this.client.fetch("/api/photoframe/upload", { method: "POST", body: s }).then((i) => {
        if (!i.ok)
          throw i.status === 401 || i.status === 403 ? new Error(d("errors.upload_admin")) : i.status === 415 ? new Error(d("errors.decode", { name: e.name })) : new Error(d("errors.upload", { status: i.status }));
      });
    }
    return is(e).then((s) => this.addPhotoData(s, e.name.replace(/\.[^.]+$/, "") + ".jpg"));
  }
  // Уже уменьшенный кадр (dataURL JPEG) — так же лежат фото, загруженные в браузер до перехода на HA.
  addPhotoData(e, n) {
    return this.folderId().then((s) => {
      const i = atob(e.split(",")[1]), a = new Uint8Array(i.length);
      for (let c = 0; c < i.length; c++) a[c] = i.charCodeAt(c);
      const r = new FormData();
      return r.append("media_content_id", s), r.append("file", new Blob([a], { type: "image/jpeg" }), n), this.client.fetch("/api/media_source/local_source/upload", { method: "POST", body: r }).then((c) => {
        if (!c.ok)
          throw c.status === 401 || c.status === 403 ? new Error(d("errors.upload_admin")) : c.status === 400 || c.status === 404 ? new Error(d("errors.upload_folder", { folder: this.folder })) : new Error(d("errors.upload", { status: c.status }));
      });
    });
  }
  deletePhoto(e) {
    return this.client.call({ type: "media_source/local_source/remove", media_content_id: e });
  }
}
function as() {
  try {
    if (window.parent === window) return null;
    const t = window.parent.document.querySelector("home-assistant");
    return t && t.hass && t.hass.auth || null;
  } catch {
    return null;
  }
}
const en = "photoframe.haAuth", rc = "hassTokens";
function Kn(t) {
  try {
    const e = localStorage.getItem(t), n = e ? JSON.parse(e) : null;
    return n && n.hassUrl && n.refresh_token ? n : null;
  } catch {
    return null;
  }
}
function $n(t) {
  try {
    t ? localStorage.setItem(en, JSON.stringify(t)) : localStorage.removeItem(en);
  } catch {
  }
}
function tn(t) {
  return t.replace(/\/+$/, "");
}
function cc() {
  return location.protocol + "//" + location.host + "/";
}
function lc() {
  return location.protocol + "//" + location.host + location.pathname;
}
function nn() {
  if (as())
    return { hassUrl: location.protocol + "//" + location.host, clientId: "", access_token: "", refresh_token: "", expires: 0, embedded: !0 };
  const t = Kn(en);
  if (t) return t;
  const e = Kn(rc);
  return e && tn(e.hassUrl) === tn(location.protocol + "//" + location.host) ? e : null;
}
function dc() {
  $n(null);
}
function hc(t, e) {
  return new Promise((n, s) => {
    const i = new XMLHttpRequest();
    i.open("POST", tn(t) + "/auth/token"), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.timeout = 15e3, i.onload = () => {
      if (i.status >= 200 && i.status < 300)
        try {
          n(JSON.parse(i.responseText));
        } catch (a) {
          s(a);
        }
      else s(new Error("auth " + i.status));
    }, i.onerror = i.ontimeout = () => s(new Error("network")), i.send(Object.keys(e).map((a) => a + "=" + encodeURIComponent(e[a])).join("&"));
  });
}
function Ac() {
  const t = as();
  if (t) return (t.expired ? t.refreshAccessToken() : Promise.resolve()).then(() => t.accessToken);
  const e = nn();
  return e ? e.expires > Date.now() + 6e4 ? Promise.resolve(e.access_token) : hc(e.hassUrl, { grant_type: "refresh_token", refresh_token: e.refresh_token, client_id: e.clientId }).then(
    (n) => {
      const s = { ...e, access_token: n.access_token, expires: Date.now() + n.expires_in * 1e3 };
      return $n(s), s.access_token;
    },
    (n) => {
      if (/auth 4/.test(n.message))
        return Kn(en) && $n(null), "";
      throw n;
    }
  ) : Promise.resolve("");
}
function uc(t) {
  const e = tn(t || location.protocol + "//" + location.host);
  location.href = e + "/auth/authorize?response_type=code&client_id=" + encodeURIComponent(cc()) + "&redirect_uri=" + encodeURIComponent(lc()) + "&state=" + encodeURIComponent(e);
}
const rs = "photoframe.setup", He = "photo-frame";
function fc(t) {
  const e = Date.now();
  return new Promise((n) => {
    const s = () => {
      const i = document.querySelector("home-assistant");
      if (i && i.hass && i.hass.user) return n(i.hass);
      if (Date.now() - e > t) return n(null);
      setTimeout(s, 1e3);
    };
    s();
  });
}
function eo(t) {
  try {
    localStorage.setItem(rs, t);
  } catch {
  }
}
function mc(t) {
  history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function cs(t) {
  const e = d("setup.dashboard_title");
  return t({
    type: "lovelace/dashboards/create",
    url_path: He,
    title: e,
    icon: "mdi:image-frame",
    mode: "storage",
    show_in_sidebar: !0,
    require_admin: !1
  }).then(() => t({
    type: "lovelace/config/save",
    url_path: He,
    config: { title: e, views: [{ title: e, path: "frame", type: "panel", cards: [{ type: yt, media_folder: "photoframe" }] }] }
  })).then(() => "/" + He + "/frame");
}
function pc(t) {
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
  const s = document.createElement("div");
  s.setAttribute("style", "margin:6px 0 12px;color:rgba(245,247,251,.72)"), s.textContent = d("setup.text");
  const i = document.createElement("div");
  i.setAttribute("style", "display:flex;justify-content:flex-end;gap:8px");
  const a = (h, A) => {
    const u = document.createElement("button");
    return u.textContent = h, u.setAttribute("style", "border:0;border-radius:10px;padding:8px 14px;font:inherit;font-weight:600;cursor:pointer;" + (A ? "background:#7dd3fc;color:#0b0d14" : "background:rgba(255,255,255,.1);color:#f5f7fb")), i.appendChild(u), u;
  }, r = a(d("setup.later"), !1), c = a(d("setup.create"), !0);
  e.appendChild(n), e.appendChild(s), e.appendChild(i), document.body.appendChild(e), r.onclick = () => {
    eo("dismissed"), e.remove();
  }, c.onclick = () => {
    c.disabled = !0, c.textContent = d("common.loading"), cs((h) => t.callWS(h)).then((h) => {
      eo("done"), e.remove(), mc(h);
    }, (h) => {
      c.disabled = !1, c.textContent = d("setup.create"), s.textContent = d("setup.failed", { error: h && h.message || String(h) });
    });
  };
}
function gc() {
  try {
    if (localStorage.getItem(rs)) return;
  } catch {
    return;
  }
  fc(3e4).then((t) => {
    if (!(!t || !t.user || !t.user.is_admin))
      return gn(t.language), t.callWS({ type: "lovelace/dashboards/list" }).then((e) => {
        if (e.some((n) => n.url_path === He)) {
          eo("done");
          return;
        }
        pc(t);
      });
  }).catch(() => {
  });
}
const ee = 12, ls = { thin: 200, light: 300, regular: 500, bold: 700 }, ds = {
  white: "#ffffff",
  contrast: "",
  accent: "",
  warm: "#fcd34d",
  mint: "#6ee7b7",
  sky: "#7dd3fc",
  rose: "#fda4af",
  custom: ""
}, ct = /^#[0-9a-f]{6}$/i;
function Yo(t, e) {
  return t === "custom" ? ct.test(e) ? e : "" : ds[t];
}
const hs = "photoframe.lockscreen", As = "photoframe.hiddenChips", Qe = [];
function Et() {
  return { font: "thin", color: "white", widgetsColor: "", customColor: "#ffb86b", widgetsCustomColor: "#ffb86b", size: "m", layout: "auto", date: !0, datePos: "auto", weather: !0, chipStyle: "auto", widgetsPos: "clock", hidden: [], order: [], grid: null };
}
function Ge() {
  try {
    const t = localStorage.getItem(hs);
    if (t) return { ...Et(), ...JSON.parse(t) };
    const e = localStorage.getItem(As);
    return e ? { ...Et(), hidden: JSON.parse(e) } : Et();
  } catch {
    return Et();
  }
}
function le(t) {
  try {
    localStorage.setItem(hs, JSON.stringify({ ...Ge(), ...t })), localStorage.removeItem(As);
  } catch {
  }
  Qe.forEach((e) => e());
}
function bc(t) {
  return Qe.push(t), () => {
    Qe.splice(Qe.indexOf(t), 1);
  };
}
function us() {
  const [, t] = w(0);
  return Q(() => {
    const e = () => t((n) => n + 1);
    return Qe.push(e), () => {
      Qe.splice(Qe.indexOf(e), 1);
    };
  }, []), Ge();
}
function yc(t, e) {
  const n = (s) => {
    const i = e.order.indexOf(s);
    return i === -1 ? 1e6 : i;
  };
  return t.map((s, i) => ({ c: s, i })).sort((s, i) => n(s.c.id) - n(i.c.id) || s.i - i.i).map((s) => s.c);
}
function kc(t, e) {
  const n = t.layout === "auto" ? e ? "corner" : "center" : t.layout, s = n === "top" ? { x: 2, y: 1, w: 8, h: 4 } : n === "corner" ? { x: 0, y: 6, w: 6, h: 5 } : { x: 2, y: 6, w: 8, h: 4 }, i = t.widgetsPos === "top" ? { x: 2, y: 0, w: 8, h: 1 } : t.widgetsPos === "bottom" ? { x: 2, y: 10, w: 8, h: 1 } : n === "corner" ? { x: 6, y: 10, w: 6, h: 1 } : { x: 2, y: s.y + s.h, w: 8, h: 1 };
  return { clock: s, widgets: i };
}
function to(t) {
  const e = Math.max(1, Math.min(ee, Math.round(t.w))), n = Math.max(1, Math.min(ee, Math.round(t.h))), s = { w: e, h: n, x: Math.max(0, Math.min(ee - e, Math.round(t.x))), y: Math.max(0, Math.min(ee - n, Math.round(t.y))) };
  return (t.ha === "left" || t.ha === "center" || t.ha === "right") && (s.ha = t.ha), (t.va === "top" || t.va === "middle" || t.va === "bottom") && (s.va = t.va), s;
}
function Zo(t) {
  const e = t, n = (s) => s && [s.x, s.y, s.w, s.h].every((i) => typeof i == "number" && isFinite(i));
  return e && n(e.clock) && n(e.widgets) ? { clock: to(e.clock), widgets: to(e.widgets) } : null;
}
const Jo = "photoframe.frameId", fs = "photoframe.frameName";
function ms(t) {
  try {
    return localStorage.getItem(t) || "";
  } catch {
    return "";
  }
}
function ps(t, e) {
  try {
    localStorage.setItem(t, e);
  } catch {
  }
}
function wo() {
  let t = ms(Jo);
  if (!t) {
    for (t = ""; t.length < 16; ) t += Math.floor(Math.random() * 16).toString(16);
    ps(Jo, t);
  }
  return t;
}
function on() {
  return ms(fs);
}
function Go(t) {
  ps(fs, t);
}
function xc() {
  const t = navigator.userAgent;
  return /SmartFrame\//.test(t) ? "Android (APK)" : /iPad|iPhone|iPod/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : "Browser";
}
const gs = () => window.SmartFrame;
function Xo() {
  const t = gs();
  try {
    return t && t.getApkVersion ? t.getApkVersion() : "";
  } catch {
    return "";
  }
}
function wc() {
  const t = gs();
  try {
    t && t.updateApk && t.updateApk(location.protocol + "//" + location.host + "/photoframe/photoframe.apk");
  } catch {
  }
}
function vc(t, e) {
  const n = { type: "photoframe/frame/connect", frame_id: wo(), model: xc(), version: "1.0.0" };
  return on() && (n.name = on()), Xo() && (n.apk = Xo()), t.subscribeMessage(n, e);
}
function ht(t, e) {
  t.call({ type: "photoframe/frame/report", frame_id: wo(), ...e }).catch(() => {
  });
}
const ue = "main", bs = "photoframe.cache", ys = "photoframe.mainHome", ks = "photoframe.startScreen";
function sn() {
  try {
    return localStorage.getItem(ys) || ue;
  } catch {
    return ue;
  }
}
function an() {
  try {
    return localStorage.getItem(ks) || "";
  } catch {
    return "";
  }
}
const rn = () => Ce(null, ns), St = "photoframe.localBackup", En = "photoframe.migrated";
function Sn(t) {
  return { screens: t.map((e) => ({ id: e.id, name: e.name, cols: e.cols, cards: e.cards })) };
}
function _c() {
  return {
    settings: {
      haUrl: "",
      slideIntervalMs: 1e4,
      idleSec: 45
    },
    homes: [{ id: ue, name: d("home.default_name") }],
    screens: { [ue]: rn() },
    active: sn(),
    screen: an(),
    layout: rn()[0],
    photos: [],
    sync: "connecting"
  };
}
function Cc() {
  const t = _c();
  try {
    const e = localStorage.getItem(bs);
    if (e) {
      const n = JSON.parse(e), s = {};
      if (n.screens) Object.keys(n.screens).forEach((c) => {
        s[c] = Ce({ screens: n.screens[c] });
      });
      else {
        const c = n.layouts || (n.layout ? { [ue]: n.layout } : {});
        Object.keys(c).forEach((h) => {
          s[h] = Ce(c[h]);
        });
      }
      s[ue] || (s[ue] = t.screens[ue]);
      const i = n.settings || {}, a = { ...t.settings };
      typeof i.haUrl == "string" && (a.haUrl = i.haUrl), typeof i.slideIntervalMs == "number" && (a.slideIntervalMs = i.slideIntervalMs), typeof i.idleSec == "number" && (a.idleSec = i.idleSec);
      const r = n.homes ? n.homes.map((c) => ({ id: c.id, name: c.name })) : t.homes;
      return { ...t, settings: a, homes: r, screens: s, photos: n.photos || [] };
    }
  } catch {
  }
  return t;
}
const no = "photoframe.integration";
function Mc() {
  try {
    return localStorage.getItem(no) === "1";
  } catch {
    return !1;
  }
}
function Ko(t) {
  try {
    t ? localStorage.setItem(no, "1") : localStorage.removeItem(no);
  } catch {
  }
}
class Ec {
  constructor() {
    this.state = Cc(), this.listeners = [], this.card = null, this.ui = { controls: !1, editing: !1 }, this.photoTimer = 0, this.bundled = [], this.photoError = "", this.cardError = "", this.haClient = null, this.haLink = "none", this.migration = null, this.frameOff = null, this.gridOff = null, this.frameClient = null, this.screenOn = !0, this.brightness = 100, this.commandListeners = [];
  }
  subscribe(e) {
    return this.listeners.push(e), () => {
      this.listeners = this.listeners.filter((n) => n !== e);
    };
  }
  set(e) {
    const n = { ...this.state, ...e };
    n.homes.some((a) => a.id === n.active) || (n.active = ue);
    const s = n.screens[n.active] || Ce(null), i = s.filter((a) => a.id === n.screen)[0] || s[0];
    if (n.screen = i.id, n.layout = i, this.state = n, e.settings || e.screens || e.homes || e.photos)
      try {
        const { settings: a, homes: r, screens: c, photos: h } = this.state;
        localStorage.setItem(bs, JSON.stringify({
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
    let s = 0;
    n.forEach((a, r) => {
      a.home === this.state.active && a.screen === this.state.screen && (s = r);
    });
    const i = n[(s + e + n.length) % n.length];
    this.set({ active: i.home, screen: i.screen });
  }
  // Стартовый экран этого устройства — сюда рамка возвращается, когда её оставили в покое.
  setStart(e, n) {
    try {
      localStorage.setItem(ys, e), localStorage.setItem(ks, n);
    } catch {
    }
    this.listeners.forEach((s) => s());
  }
  goStart() {
    this.setActive(sn(), an());
  }
  // Карточки всех экранов дома — информеры на фото собираются со всех.
  homeCards(e = this.state.active) {
    return (this.state.screens[e] || []).reduce((n, s) => n.concat(s.cards), []);
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
      const n = this.state.photos.map((s) => String(s.id)).sort().join("|");
      e.slice().sort().join("|") !== n && this.reloadCardPhotos();
    }, () => {
    });
  }
  applyCardConfig(e) {
    const n = e.homes && e.homes.length ? e.homes.map((r) => ({ id: r.id, name: r.name })) : [{ id: ue, name: d("home.default_name") }], s = {};
    n.forEach((r) => {
      const c = e.layouts && e.layouts[r.id];
      s[r.id] = c ? Ce(c) : r.id === ue ? rn() : Ce(null);
    });
    const i = e.settings || {}, a = { ...this.state.settings };
    typeof i.slideIntervalMs == "number" && (a.slideIntervalMs = i.slideIntervalMs), typeof i.idleSec == "number" && (a.idleSec = i.idleSec), this.set({ sync: "card", homes: n, screens: s, settings: a });
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
      this.cardError = n.message || String(n), this.listeners.forEach((s) => s());
    });
  }
  notify() {
    this.listeners.forEach((e) => e());
  }
  connectHa() {
    const e = nn();
    if (!e || this.haClient) return;
    const n = new yo(e.hassUrl, Ac);
    this.haClient = n, this.haLink = "connecting";
    let s = "";
    n.subscribe(() => {
      if (n.status !== s)
        if (s = n.status, n.status === "connected") {
          const i = (a) => ss(n).then((r) => {
            if (r) {
              Ko(!0), this.useIntegration(n, r);
              return;
            }
            if (Mc() && a > 0) {
              window.setTimeout(() => {
                n.status === "connected" && i(a - 1);
              }, 1e4);
              return;
            }
            Ko(!1), this.loadHaCard(), n.subscribeMessage({ type: "subscribe_events", event_type: "lovelace_updated" }, (c) => {
              c && c.data && c.data.url_path === He && this.loadHaCard();
            });
          });
          i(30);
        } else n.status === "auth_invalid" && (this.haLink = "error", this.notify());
    }), n.connect(), this.notify();
  }
  // Интеграция Photo Frame: данные в её хранилище, изменения — по её подписке.
  useIntegration(e, n) {
    this.haLink = "ready", this.card && this.card.integration ? (this.card.config = n, this.applyCardConfig(n)) : (this.offerMigration(), this.attachCard(new $t(e, n, void 0, !0, !0))), this.card.watch((i) => this.applyCardConfig(i)), this.frameClient = e, this.connectThisFrame();
  }
  connectThisFrame() {
    const e = this.frameClient;
    if (!e) return;
    this.frameOff && this.frameOff(), this.frameOff = vc(e, (s) => s.type === "state" ? this.applyFrameState(s) : this.commandListeners.forEach((i) => i(s)));
    let n = JSON.stringify(Ge().grid);
    ht(e, { grid: Ge().grid }), this.gridOff && this.gridOff(), this.gridOff = bc(() => {
      const s = JSON.stringify(Ge().grid);
      s !== n && e.status === "connected" && (n = s, ht(e, { grid: Ge().grid }));
    });
  }
  // Команды из HA (кнопки устройства, службы): следующее фото, показать камеру… Выполняет App.
  onCommand(e) {
    return this.commandListeners.push(e), () => {
      this.commandListeners = this.commandListeners.filter((n) => n !== e);
    };
  }
  applyFrameState(e) {
    if (e.name && e.name !== on() && Go(e.name), e.start_screen) {
      const [i, a] = e.start_screen.split("/");
      (i !== sn() || a !== an()) && this.setStart(i, a);
    }
    e.screen_on !== void 0 && (this.screenOn = e.screen_on), e.brightness !== void 0 && (this.brightness = e.brightness);
    const n = this.card, s = e.album || "all";
    n && n.album !== s && (n.album = s, this.reloadCardPhotos()), this.notify();
  }
  // Коснулись спящей рамки — просыпается и сообщает HA (сущность «Экран» включается).
  wakeScreen() {
    this.screenOn = !0, this.frameClient && ht(this.frameClient, { screen_on: !0 }), this.notify();
  }
  // Имя рамки поменяли на ней самой — переподключаемся, HA узнает новое имя.
  renameFrame(e) {
    Go(e), this.frameClient && this.frameClient.status === "connected" && this.connectThisFrame();
  }
  loadHaCard() {
    const e = this.haClient;
    e && (this.card && this.card.busy || ac(e, He).then((n) => {
      if (!n) {
        this.haLink = "missing", this.notify();
        return;
      }
      if (this.haLink = "ready", this.card) {
        this.card.config = n, this.applyCardConfig(n);
        return;
      }
      this.offerMigration(), this.attachCard(new $t(e, n, He, !0));
    }, () => {
      this.haLink = "error", this.notify();
    }));
  }
  // Создать в HA дашборд «Фоторамка» с карточкой (нужен администратор HA).
  createHaDashboard() {
    const e = this.haClient;
    return e ? cs((n) => e.call(n)).then(() => this.loadHaCard()) : Promise.reject(new Error("not connected"));
  }
  // Первый переход на HA: запоминаем свои экраны (если их меняли) и считаем фото в браузере.
  offerMigration() {
    let e = "";
    try {
      e = localStorage.getItem(En) || "";
    } catch {
    }
    if (e === "done") return;
    if (!e) {
      const { homes: s, screens: i } = this.state, a = s.length > 1 || JSON.stringify(Sn(i[ue] || [])) !== JSON.stringify(Sn(rn()));
      try {
        a && localStorage.setItem(St, JSON.stringify({ homes: s, screens: i })), localStorage.setItem(En, "pending");
      } catch {
      }
    }
    const n = this.backup();
    Mn().then((s) => s.length, () => 0).then((s) => {
      n || s ? (this.migration = { screens: !!n, photos: s }, this.notify()) : this.finishMigration();
    });
  }
  backup() {
    try {
      const e = localStorage.getItem(St);
      return e ? JSON.parse(e) : null;
    } catch {
      return null;
    }
  }
  // Заменить экраны в HA теми, что были в браузере.
  migrateScreens() {
    const e = this.backup();
    if (!e || !this.card) return;
    const n = e.homes.map((i) => ({ id: i.id, name: i.name })), s = {};
    n.forEach((i) => {
      s[i.id] = Ce({ screens: e.screens[i.id] || [] });
    }), this.set({ homes: n, screens: s }), this.saveCard({ homes: n, layouts: this.packAll() });
    try {
      localStorage.removeItem(St);
    } catch {
    }
    this.updateMigration({ screens: !1 });
  }
  // Фото из браузера — в медиатеку HA; после загрузки из браузера их убираем.
  migratePhotos(e) {
    const n = this.card;
    return n ? Mn().then((s) => s.reduce(
      (i, a, r) => i.then(() => n.addPhotoData(a.data, "frame-" + a.id + ".jpg")).then(() => {
        e && e(r + 1, s.length);
      }),
      Promise.resolve()
    )).then(() => Uo()).then(() => (this.updateMigration({ photos: 0 }), this.reloadCardPhotos())) : Promise.resolve();
  }
  dismissMigration() {
    try {
      localStorage.removeItem(St);
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
      localStorage.setItem(En, "done");
    } catch {
    }
    this.migration = null, this.notify();
  }
  reloadLocalPhotos() {
    return Mn().then((e) => this.set({ photos: e.map((n) => ({ id: n.id, url: n.data })) })).catch(() => this.set({ photos: [] }));
  }
  applyHomes(e) {
    const n = {};
    e.forEach((s) => {
      n[s.id] = this.state.screens[s.id] || Ce(null);
    }), this.set({ homes: e, screens: n });
  }
  saveHomes(e) {
    const n = e.map((s) => ({ id: s.id, name: s.name }));
    this.applyHomes(n), this.card && this.saveCard({ homes: n, layouts: this.packAll() });
  }
  // Адрес HA — только этого устройства; слайдшоу — общее (в карточке HA).
  saveSettings(e) {
    this.set({ settings: e }), this.card && this.saveCard({ settings: { slideIntervalMs: e.slideIntervalMs, idleSec: e.idleSec } });
  }
  // Раскладка показанного экрана.
  saveLayout(e) {
    const n = this.state.screen;
    this.saveScreens(this.state.active, this.screensOf().map((s) => s.id === n ? { ...s, cols: e.cols, cards: e.cards } : s));
  }
  screensOf(e = this.state.active) {
    return this.state.screens[e] || Ce(null);
  }
  packAll() {
    const e = {};
    return Object.keys(this.state.screens).forEach((n) => {
      e[n] = Sn(this.state.screens[n]);
    }), e;
  }
  // Экраны дома целиком: в конфиг карточки HA (без неё — только в этот браузер, через кэш).
  saveScreens(e, n, s) {
    const i = { screens: { ...this.state.screens, [e]: n } };
    s && (i.screen = s), this.set(i), this.card && this.saveCard({ layouts: this.packAll() });
  }
  // Новый пустой экран в конце списка показанного дома — сразу на него и переходим.
  addScreen(e) {
    const n = { id: Kr(), name: e, cols: 12, cards: [] };
    this.saveScreens(this.state.active, this.screensOf().concat(n), n.id);
  }
  renameScreen(e, n) {
    this.saveScreens(this.state.active, this.screensOf().map((s) => s.id === e ? { ...s, name: n } : s));
  }
  // Последний экран дома не удаляется — у дома всегда есть хотя бы один.
  removeScreen(e) {
    const n = this.screensOf();
    if (n.length < 2) return;
    const s = n.map((a) => a.id).indexOf(e), i = n.filter((a) => a.id !== e);
    this.saveScreens(this.state.active, i, i[Math.max(0, s - 1)].id);
  }
  // Сдвинуть экран в списке (dir −1 — левее, +1 — правее).
  moveScreen(e, n) {
    const s = this.screensOf().slice(), i = s.map((c) => c.id).indexOf(e), a = i + n;
    if (i < 0 || a < 0 || a >= s.length) return;
    const r = s[i];
    s[i] = s[a], s[a] = r, this.saveScreens(this.state.active, s);
  }
  // Пачка фото — строго по одному, чтобы не держать в памяти все исходники разом.
  // Ошибка одного файла не останавливает остальные; в конце сообщаем, сколько не загрузилось.
  addPhotos(e, n, s) {
    const i = this.card, a = i ? (A) => i.addPhoto(A, s) : (A) => ic(A), r = () => i ? this.reloadCardPhotos() : this.reloadLocalPhotos(), c = [];
    let h = 0;
    return e.reduce(
      (A, u) => A.then(() => a(u)).catch((f) => {
        c.push(f && f.message || String(f));
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
    return this.card ? this.card.deletePhoto(String(e)).then(() => this.reloadCardPhotos()) : oc(Number(e)).then(() => this.reloadLocalPhotos());
  }
  clearPhotos() {
    return this.card ? this.state.photos.reduce((e, n) => e.then(() => this.card.deletePhoto(String(n.id))), Promise.resolve()).then(() => this.reloadCardPhotos()) : Uo().then(() => this.reloadLocalPhotos());
  }
}
const ie = new Ec();
function nt() {
  const [, t] = w(0);
  return Q(() => ie.subscribe(() => t((e) => e + 1)), []), ie;
}
function bn() {
  const t = window.SmartFrame;
  return t && t.setBrightness ? t : null;
}
const Sc = () => !!bn();
function zc(t, e) {
  const n = bn();
  if (n)
    try {
      n.setBrightness(t ? Math.max(0.02, e / 100) : 0), n.setScreenOn && n.setScreenOn(t);
    } catch {
    }
}
function Ic(t) {
  window.SmartFrameWake = t;
}
function Dc(t, e) {
  return t ? Sc() ? 0 : Math.round((100 - e) * 0.85) / 100 : 1;
}
function Bc() {
  const t = bn();
  try {
    return t && t.getAutostart ? !!t.getAutostart() : null;
  } catch {
    return null;
  }
}
function Tc(t) {
  const e = bn();
  try {
    e && e.setAutostart && e.setAutostart(t);
  } catch {
  }
}
function yn() {
  const t = window.SmartFrame;
  return t && t.showPhoto ? t : null;
}
function $o(t) {
  return !!yn() && /^(https?:)?\//.test(t);
}
function xs(t) {
  return /^https?:/.test(t) ? t : location.protocol + "//" + location.host + t;
}
function ei(t, e, n) {
  const s = yn();
  try {
    s && s.showPhoto(t ? xs(t) : "", e, n);
  } catch {
  }
}
function Oc(t) {
  const e = yn();
  try {
    e && e.preloadPhoto && e.preloadPhoto(xs(t));
  } catch {
  }
}
function Lc(t) {
  window.SmartFramePhoto = (e, n) => t(n);
}
function zn(t) {
  const e = yn();
  try {
    e && e.setPhotosVisible && e.setPhotosVisible(t);
  } catch {
  }
}
const st = {};
function Pc(t, e, n) {
  t /= 255, e /= 255, n /= 255;
  const s = Math.max(t, e, n), i = Math.min(t, e, n), a = (s + i) / 2;
  if (s === i) return [0, 0, a];
  const r = s - i, c = a > 0.5 ? r / (2 - s - i) : r / (s + i);
  return [(s === t ? (e - n) / r + (e < n ? 6 : 0) : s === e ? (n - t) / r + 2 : (t - e) / r + 4) * 60, c, a];
}
function Hc(t) {
  return new Promise((e) => {
    const n = new Image();
    n.onload = () => {
      try {
        const s = 48 / Math.max(n.width, n.height), i = document.createElement("canvas");
        i.width = Math.max(1, Math.round(n.width * s)), i.height = Math.max(1, Math.round(n.height * s));
        const a = i.getContext("2d");
        a.drawImage(n, 0, 0, i.width, i.height);
        const r = a.getImageData(0, 0, i.width, i.height).data;
        let c = 0, h = 0, A = 0, u = 0;
        for (let p = 0; p < r.length; p += 4)
          c += r[p], h += r[p + 1], A += r[p + 2], u++;
        const f = Pc(c / u, h / u, A / u), l = Math.round(f[0]), m = Math.round(Math.min(Math.max(f[1], 0.45), 0.85) * 100);
        e({
          thumb: i.toDataURL("image/jpeg", 0.7),
          accent: "hsl(" + l + "," + m + "%,68%)",
          accentSoft: "hsla(" + l + "," + m + "%,60%,0.22)"
        });
      } catch {
        e(null);
      }
    }, n.onerror = () => e(null), n.src = t;
  });
}
function Qc(t) {
  const [e, n] = w(t && st[t] || null);
  return Q(() => {
    if (!t) return;
    if (t in st) {
      st[t] && n(st[t]);
      return;
    }
    let s = !0;
    return Hc(t).then((i) => {
      st[t] = i, s && i && n(i);
    }), () => {
      s = !1;
    };
  }, [t]), e;
}
const jc = 0.18, ti = 0.5, Nc = 600, at = 10, Fc = 0.12;
function In(t, e) {
  for (; t && t.nodeType === 1; t = t.parentElement)
    if ((t.matches || t.webkitMatchesSelector).call(t, e)) return t;
  return null;
}
function ni(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientY : t.clientY;
}
function oi(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientX : t.clientX;
}
function Rc(t, e, n, s, i, a) {
  Q(() => {
    const r = t.root.current;
    if (!r || !s) return;
    let c = 0, h = 0, A = 0, u = 0, f = 0, l = !1, m = 0, p = "";
    const y = (I) => {
      const B = t.controls.current, S = t.ambient.current, g = t.soft.current, z = r.clientHeight;
      B && (B.style.opacity = String(I), B.style.transform = "scale(" + (0.96 + 0.04 * I).toFixed(4) + ")"), S && (S.style.transform = "translateY(" + Math.round(-I * z) + "px)"), g && (g.style.opacity = String(I));
    }, _ = () => {
      [t.controls.current, t.ambient.current, t.soft.current].forEach((I) => {
        I && (I.style.opacity = "", I.style.transform = "");
      });
    }, C = (I) => {
      const B = I.target;
      e && (!In(B, ".bar") || In(B, "button")) || (c = ni(I), h = oi(I), A = Date.now(), u = 0, f = 0, p = "", l = !0, r.classList.add("dragging"), clearTimeout(m), !e && i && !In(B, "button") && (m = window.setTimeout(() => {
        !l || Math.abs(u) > at || (l = !1, r.classList.remove("dragging"), _(), i());
      }, Nc)));
    }, b = (I) => {
      if (!l) return;
      if (u = ni(I) - c, f = oi(I) - h, (Math.abs(u) > at || Math.abs(f) > at) && clearTimeout(m), !p && (Math.abs(u) > at || Math.abs(f) > at) && (p = !e && a && Math.abs(f) > Math.abs(u) ? "x" : "y"), p === "x") {
        const g = t.ambient.current, z = r.clientWidth || 1;
        g && (g.style.transform = "translateX(" + Math.round(f * 0.25) + "px)", g.style.opacity = String(1 - Math.min(1, Math.abs(f) / z) * 0.6)), I.cancelable && I.preventDefault();
        return;
      }
      const B = r.clientHeight, S = e ? 1 - Math.max(0, u) / B : Math.max(0, -u) / B;
      y(Math.min(1, Math.max(0, S))), I.cancelable && I.preventDefault();
    }, k = () => {
      if (clearTimeout(m), !l) return;
      if (l = !1, r.classList.remove("dragging"), p === "x") {
        _();
        const g = Math.abs(f) / Math.max(1, Date.now() - A) > ti && Math.abs(f) > 30;
        a && (Math.abs(f) > r.clientWidth * Fc || g) && a(f < 0 ? 1 : -1);
        return;
      }
      const I = r.clientHeight, B = Math.abs(u) / Math.max(1, Date.now() - A), S = Math.abs(u) > I * jc || B > ti && Math.abs(u) > 30;
      _(), !e && u < 0 && S && n(!0), e && u > 0 && S && n(!1);
    };
    return r.addEventListener("touchstart", C), r.addEventListener("touchmove", b), r.addEventListener("touchend", k), r.addEventListener("touchcancel", k), r.addEventListener("mousedown", C), window.addEventListener("mousemove", b), window.addEventListener("mouseup", k), () => {
      clearTimeout(m), r.removeEventListener("touchstart", C), r.removeEventListener("touchmove", b), r.removeEventListener("touchend", k), r.removeEventListener("touchcancel", k), r.removeEventListener("mousedown", C), window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", k);
    };
  }, [e, s, a]);
}
const cn = (...t) => t.filter((e, n, s) => !!e && e.trim() !== "" && s.indexOf(e) === n).join(" ").trim();
function qc(t, e, n = []) {
  throw new Error("[lucide]: iconNode is required when icon name is used");
}
const Vc = (t) => {
  let e = "", n = !1;
  for (const s of t) {
    if (s === "-" || s === "_" || s <= " ") {
      n = e.length > 0;
      continue;
    }
    e.length === 0 ? e += s.toLowerCase() : e += n ? s.toUpperCase() : s, n = !1;
  }
  return e;
};
const Wc = (t) => {
  const e = Vc(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
const Te = {
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
function Dn(t) {
  return t != null;
}
function Uc(t, e = {}) {
  const n = e.attributeNames ?? {}, s = (l) => n[l] ?? l, i = t.size ?? t.width ?? Te.width, a = t.size ?? t.height ?? Te.height, r = t.aliases?.filter((l) => typeof l == "string" && l.trim() !== "").map((l) => `lucide-${l}`) ?? [], c = [...t.name ? [`lucide-${t.name}`] : [], ...r], h = e.className?.split(" ").filter(Boolean) ?? [], A = e.includeDefaultClasses === !1 ? cn(...h) : cn("lucide", ...c, ...h), u = e.absoluteStrokeWidth ? Number(e.strokeWidth ?? Te["stroke-width"]) * Number(t.size ?? t.width ?? Te.width) / Number(e.size ?? e.width ?? Te.width) : e.strokeWidth ?? Te["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Te).reduce((l, [m, p]) => (l[s(m)] = p, l), {}),
      ..."color" in e && e.color && {
        [s("stroke")]: e.color
      },
      ..."size" in e && Dn(e.size) && {
        [s("width")]: e.size,
        [s("height")]: e.size
      },
      ..."width" in e && Dn(e.width) && {
        [s("width")]: e.width
      },
      ..."height" in e && Dn(e.height) && {
        [s("height")]: e.height
      },
      [s("stroke-width")]: u,
      ...A && {
        [s("class")]: A
      },
      [s("viewBox")]: `0 0 ${i} ${a}`,
      ...e.hasA11yProp === !1 ? {
        [s("aria-hidden")]: "true"
      } : {},
      ..."attributes" in e && e.attributes
    },
    t.node.map((l) => {
      const [m, p, y] = l, _ = e.nonScalingStroke ? { [s("vector-effect")]: "non-scaling-stroke", ...p } : p;
      return y ? [m, _, y] : [m, _];
    })
  ];
}
const Yc = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
const Zc = fn({
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  absoluteStrokeWidth: !1,
  nonScalingStroke: !1,
  class: ""
}), Jc = () => Zt(Zc);
const Gc = ({
  color: t,
  size: e,
  width: n,
  height: s,
  strokeWidth: i,
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
  ...f
}) => {
  const {
    size: l = 24,
    strokeWidth: m = 2,
    absoluteStrokeWidth: p = !1,
    nonScalingStroke: y = !1,
    color: _ = "currentColor",
    class: C = ""
  } = Jc() ?? {}, [b, k, I = []] = Uc(A, {
    color: t ?? _,
    width: n ?? e ?? l,
    height: s ?? e ?? l,
    strokeWidth: i ?? m,
    absoluteStrokeWidth: a ?? p,
    nonScalingStroke: r ?? y,
    className: cn(C, u),
    hasA11yProp: !!c || Yc(f),
    attributes: f
  });
  return Ut(b, { ...k }, [
    ...I.map(([B, S]) => Ut(B, S)),
    ...Hi(c)
  ]);
};
function M(t, e, n = []) {
  const s = typeof t == "string" ? qc(t, e, n) : t, i = ({ class: a = "", className: r = "", children: c, ...h }) => Ut(
    Gc,
    {
      ...h,
      icon: s,
      class: cn(a, r)
    },
    c
  );
  return s.name && (i.displayName = Wc(s.name)), i;
}
const ws = {
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
ws.node;
const Xc = M(ws);
const vs = {
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
vs.node;
const _s = M(vs);
const Cs = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
Cs.node;
const Ms = M(Cs);
const Es = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
Es.node;
const Ss = M(Es);
const zs = {
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
zs.node;
const Kc = M(zs);
const Is = {
  name: "bed",
  size: 24,
  node: [
    ["path", { d: "M2 4v16", key: "vw9hq8" }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
    ["path", { d: "M2 17h20", key: "18nfp3" }],
    ["path", { d: "M6 8v9", key: "1yriud" }]
  ]
};
Is.node;
const $c = M(Is);
const Ds = {
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
Ds.node;
const el = M(Ds);
const Bs = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
Bs.node;
const tl = M(Bs);
const Ts = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
Ts.node;
const nl = M(Ts);
const Os = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
Os.node;
const Ls = M(Os);
const Ps = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
Ps.node;
const Hs = M(Ps);
const Qs = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
};
Qs.node;
const js = M(Qs);
const Ns = {
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
Ns.node;
const ol = M(Ns);
const Fs = {
  name: "cloud-fog",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 17H7", key: "pygtm1" }],
    ["path", { d: "M17 21H9", key: "1u2q02" }]
  ]
};
Fs.node;
const il = M(Fs);
const Rs = {
  name: "cloud-lightning",
  size: 24,
  node: [
    ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
    ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
  ]
};
Rs.node;
const Bn = M(Rs);
const qs = {
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
qs.node;
const ii = M(qs);
const Vs = {
  name: "cloud-rain",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 14v6", key: "1j4efv" }],
    ["path", { d: "M8 14v6", key: "17c4r9" }],
    ["path", { d: "M12 16v6", key: "c8a4gj" }]
  ]
};
Vs.node;
const sl = M(Vs);
const Ws = {
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
Ws.node;
const Us = M(Ws);
const Ys = {
  name: "cloud-upload",
  size: 24,
  node: [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
  ],
  aliases: ["upload-cloud"]
};
Ys.node;
const al = M(Ys);
const Zs = {
  name: "cloud",
  size: 24,
  node: [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]
};
Zs.node;
const Js = M(Zs);
const Gs = {
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
Gs.node;
const rl = M(Gs);
const Xs = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
Xs.node;
const cl = M(Xs);
const Ks = {
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
Ks.node;
const ll = M(Ks);
const $s = {
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
$s.node;
const Ve = M($s);
const ea = {
  name: "eighth-notes",
  size: 24,
  node: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19", key: "uy6ho8" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
    ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }]
  ],
  aliases: ["music"]
};
ea.node;
const dl = M(ea);
const ta = {
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
ta.node;
const na = M(ta);
const oa = {
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
oa.node;
const ia = M(oa);
const sa = {
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
sa.node;
const aa = M(sa);
const ra = {
  name: "gauge",
  size: 24,
  node: [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
  ]
};
ra.node;
const ca = M(ra);
const la = {
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
la.node;
const hl = M(la);
const da = {
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
da.node;
const Al = M(da);
const ha = {
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
ha.node;
const ul = M(ha);
const Aa = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
Aa.node;
const fl = M(Aa);
const ua = {
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
ua.node;
const ml = M(ua);
const fa = {
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
fa.node;
const pl = M(fa);
const ma = {
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
ma.node;
const gl = M(ma);
const pa = {
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
pa.node;
const bl = M(pa);
const ga = {
  name: "lock",
  size: 24,
  node: [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
  ]
};
ga.node;
const yl = M(ga);
const ba = {
  name: "log-in",
  size: 24,
  node: [
    ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
    ["path", { d: "M15 12H3", key: "6jk70r" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
  ]
};
ba.node;
const kl = M(ba);
const ya = {
  name: "log-out",
  size: 24,
  node: [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
  ]
};
ya.node;
const xl = M(ya);
const ka = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
};
ka.node;
const wl = M(ka);
const xa = {
  name: "minus",
  size: 24,
  node: [["path", { d: "M5 12h14", key: "1ays0h" }]]
};
xa.node;
const vl = M(xa);
const wa = {
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
wa.node;
const va = M(wa);
const _a = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
_a.node;
const _l = M(_a);
const Ca = {
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
Ca.node;
const Ma = M(Ca);
const Ea = {
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
Ea.node;
const Cl = M(Ea);
const Sa = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Sa.node;
const Ue = M(Sa);
const za = {
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
za.node;
const Ml = M(za);
const Ia = {
  name: "power",
  size: 24,
  node: [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
  ]
};
Ia.node;
const kt = M(Ia);
const Da = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
  ]
};
Da.node;
const El = M(Da);
const Ba = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
Ba.node;
const Sl = M(Ba);
const Ta = {
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
Ta.node;
const zl = M(Ta);
const Oa = {
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
Oa.node;
const Il = M(Oa);
const La = {
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
La.node;
const Dl = M(La);
const Pa = {
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
Pa.node;
const Bl = M(Pa);
const Ha = {
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
Ha.node;
const vo = M(Ha);
const Qa = {
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
Qa.node;
const Tl = M(Qa);
const ja = {
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
ja.node;
const oo = M(ja);
const Na = {
  name: "speaker",
  size: 24,
  node: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
    ["path", { d: "M12 14h.01", key: "1etili" }]
  ]
};
Na.node;
const Fa = M(Na);
const Ra = {
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
Ra.node;
const qa = M(Ra);
const Va = {
  name: "table-2",
  size: 24,
  node: [
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
  ]
};
Va.node;
const Ol = M(Va);
const Wa = {
  name: "thermometer",
  size: 24,
  node: [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]]
};
Wa.node;
const Ua = M(Wa);
const Ya = {
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
Ya.node;
const xt = M(Ya);
const Za = {
  name: "tv",
  size: 24,
  node: [
    ["path", { d: "m17 2-5 5-5-5", key: "16satq" }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]
  ]
};
Za.node;
const io = M(Za);
const Ja = {
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
Ja.node;
const Ll = M(Ja);
const Ga = {
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
Ga.node;
const Pl = M(Ga);
const Xa = {
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
Xa.node;
const Hl = M(Xa);
const Ka = {
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
Ka.node;
const Ql = M(Ka);
const $a = {
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
$a.node;
const jl = M($a);
const er = {
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
er.node;
const Nl = M(er);
const tr = {
  name: "wind",
  size: 24,
  node: [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
  ]
};
tr.node;
const ln = M(tr);
const nr = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
nr.node;
const Ye = M(nr);
const or = {
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
or.node;
const Fl = M(or);
function Rl(t) {
  return new Promise((e) => {
    const n = new Image();
    n.onerror = () => e({ w: 0, h: 0, glow: "" }), n.onload = () => {
      let s = "";
      try {
        const i = 48 / Math.max(n.naturalWidth, n.naturalHeight), a = document.createElement("canvas");
        a.width = Math.max(1, Math.round(n.naturalWidth * i)), a.height = Math.max(1, Math.round(n.naturalHeight * i)), a.getContext("2d").drawImage(n, 0, 0, a.width, a.height), s = a.toDataURL("image/jpeg", 0.7);
      } catch {
      }
      e({ w: n.naturalWidth, h: n.naturalHeight, glow: s });
    }, n.src = t;
  });
}
function ql({ urls: t, index: e, tone: n, soft: s, softRef: i, onShow: a }) {
  const r = Fr(), c = Yi(), [h, A] = w([]), u = se(0), f = t.length, l = f ? t[e % f] : "", m = !!l && $o(l);
  return Q(() => Lc(a), []), Q(() => {
    const p = document.documentElement;
    m ? p.classList.add("native-photos") : p.classList.remove("native-photos");
  }, [m]), Q(() => {
    if (m) {
      A([]), ei(l, r, c === "lite"), f > 1 && Oc(t[(e + 1) % f]);
      return;
    }
    if ($o("/") && ei("", r, !1), !l) {
      A([]);
      return;
    }
    let p = !0;
    return Fo(l).then((y) => Rl(y).then((_) => ({ url: y, m: _ }))).then(({ url: y, m: _ }) => {
      if (!p) return;
      const C = ++u.current;
      A((b) => b.slice(-1).map((k) => ({ ...k, on: !1 })).concat({ id: C, url: y, on: !1, w: _.w, h: _.h, glow: _.glow })), requestAnimationFrame(() => requestAnimationFrame(() => {
        p && A((b) => b.map((k) => k.id === C ? { ...k, on: !0 } : k));
      })), a(y);
    }), f > 1 && Fo(t[(e + 1) % f]), () => {
      p = !1;
    };
  }, [l, m, m ? r : "", m ? c : ""]), /* @__PURE__ */ o("div", { class: "backdrop", children: [
    f === 0 && /* @__PURE__ */ o("div", { class: "slide active aurora" }),
    h.map((p) => Rr(p.w, p.h) ? /* @__PURE__ */ o("div", { class: "slide contain" + (p.on ? " active" : ""), children: [
      p.glow && /* @__PURE__ */ o("div", { class: "slide-glow", style: { backgroundImage: "url(" + p.glow + ")" } }),
      /* @__PURE__ */ o("div", { class: "slide-photo", style: { backgroundImage: "url(" + p.url + ")" } })
    ] }, p.id) : /* @__PURE__ */ o("div", { class: "slide" + (p.on ? " active" : ""), style: { backgroundImage: "url(" + p.url + ")" } }, p.id)),
    /* @__PURE__ */ o("div", { ref: i, class: "soft" + (s ? " on" : ""), style: n ? { backgroundImage: "url(" + n.thumb + ")" } : void 0 }),
    /* @__PURE__ */ o("div", { class: "shade" + (s ? " deep" : "") })
  ] });
}
const dn = {
  lightbulb: bl,
  lamp: gl,
  "lamp-ceiling": ml,
  "lamp-desk": pl,
  plug: Ml,
  fan: ia,
  tv: io,
  speaker: Fa,
  thermometer: Ua,
  droplets: Ve,
  snowflake: vo,
  flame: aa,
  wind: ln,
  sun: qa,
  moon: va,
  shield: Il,
  door: ll,
  lock: yl,
  blinds: el,
  video: Pl,
  "washing-machine": jl,
  zap: Fl,
  gauge: ca,
  activity: Xc,
  "air-vent": _s,
  "cloud-sun": Us,
  sparkles: oo,
  house: Al,
  sofa: Tl,
  bed: $c,
  "cooking-pot": rl,
  baby: Kc
};
function Ze(t, e = "house") {
  return dn[t] || dn[e];
}
function _o(t, e) {
  const n = t.split(".")[0];
  return n === "light" ? "lamp-ceiling" : n === "switch" ? "lamp" : n === "fan" ? "fan" : n === "camera" ? "video" : n === "climate" ? "air-vent" : n === "weather" ? "cloud-sun" : n === "media_player" ? e === "tv" ? "tv" : "speaker" : n === "lock" ? "lock" : n === "cover" ? "blinds" : n === "scene" || n === "script" || n === "automation" ? "sparkles" : e === "temperature" ? "thermometer" : e === "humidity" || e === "moisture" ? "droplets" : e === "door" || e === "window" || e === "opening" ? "door" : e === "power" || e === "voltage" || e === "energy" || e === "current" ? "zap" : e === "motion" || e === "occupancy" ? "activity" : "gauge";
}
function ir(t = 1e3) {
  const [e, n] = w(/* @__PURE__ */ new Date());
  return Q(() => {
    const s = setInterval(() => n(/* @__PURE__ */ new Date()), t);
    return () => clearInterval(s);
  }, [t]), e;
}
function Tn(t) {
  return t < 10 ? "0" + t : String(t);
}
function sr(t, e = !1) {
  return Tn(t.getHours()) + ":" + Tn(t.getMinutes()) + (e ? ":" + Tn(t.getSeconds()) : "");
}
function ar(t) {
  return d("date.full", { weekday: $e("date.weekdays")[t.getDay()], day: t.getDate(), month: $e("date.months")[t.getMonth()] });
}
const _e = "#0891b2", so = "#d97706", si = "rgba(255,255,255,0.13)", Vl = "rgba(255,255,255,0.04)", ai = "rgba(255,255,255,0.08)", ri = "#141620", Je = 210, Ae = { l: 46, r: 14, t: 14, b: 26 };
function hn(t) {
  return t < 10 ? "0" + t : String(t);
}
function We(t) {
  const e = new Date(t);
  return hn(e.getHours()) + ":" + hn(e.getMinutes());
}
function wt(t) {
  const e = new Date(t);
  return d("date.day_month", { day: e.getDate(), month: $e("date.months_short")[e.getMonth()] });
}
function De(t, e) {
  return e === "24h" ? We(t) : wt(t) + ", " + We(t);
}
function de(t) {
  const e = Math.abs(t), n = e >= 100 ? t.toFixed(0) : e >= 10 ? t.toFixed(1) : e >= 1 ? t.toFixed(2) : t.toFixed(3);
  return n.indexOf(".") === -1 ? n : n.replace(/\.?0+$/, "");
}
function Wl(t, e, n) {
  t === e && (t -= 1, e += 1);
  const s = (e - t) / n, i = Math.pow(10, Math.floor(Math.log(s) / Math.LN10)), a = [1, 2, 5, 10].map((c) => c * i).filter((c) => c >= s)[0], r = [];
  for (let c = Math.floor(t / a) * a; c <= e + a * 1e-3; c += a) r.push(+c.toFixed(10));
  return r[r.length - 1] < e && r.push(r[r.length - 1] + a), r;
}
function Ul(t, e, n) {
  const s = [], i = new Date(t);
  if (n === "24h")
    for (i.setMinutes(0, 0, 0), i.setHours(Math.ceil(i.getHours() / 6) * 6); i.getTime() <= e; i.setHours(i.getHours() + 6)) s.push({ t: i.getTime(), label: We(i.getTime()) });
  else {
    i.setHours(0, 0, 0, 0), i.setDate(i.getDate() + 1);
    const a = n === "7d" ? 1 : 5;
    for (; i.getTime() <= e; i.setDate(i.getDate() + a))
      s.push({ t: i.getTime(), label: n === "7d" ? $e("date.weekdays_short")[i.getDay()] : i.getDate() + "." + hn(i.getMonth() + 1) });
  }
  return s;
}
function Yl({ series: t, unit: e, range: n, width: s }) {
  const [i, a] = w(null), r = se(null), c = Math.max(200, s), h = c - Ae.l - Ae.r, A = Je - Ae.t - Ae.b, { from: u, to: f } = t, l = (v) => Ae.l + (v - u) / (f - u) * h;
  if (t.kind === "timeline" ? !t.segments.length : !t.points.length) return /* @__PURE__ */ o("div", { class: "chart-empty", children: d("chart.no_data") });
  const p = (v) => {
    const j = r.current;
    if (!j) return;
    const U = j.getBoundingClientRect(), re = u + (v - U.left - Ae.l) / h * (f - u);
    if (t.kind === "timeline") {
      let N = 0;
      t.segments.forEach((q, oe) => {
        q.from <= re && (N = oe);
      }), a(N);
      return;
    }
    const Y = t.points, te = t.kind === "bars" ? t.bucketMs / 2 : 0;
    let W = 0;
    Y.forEach((N, q) => {
      Math.abs(N.t + te - re) < Math.abs(Y[W].t + te - re) && (W = q);
    }), a(W);
  }, y = {
    onMouseMove: (v) => p(v.clientX),
    onMouseLeave: () => a(null),
    onTouchStart: (v) => p(v.touches[0].clientX),
    onTouchMove: (v) => p(v.touches[0].clientX)
  }, C = Ul(u, f, n).map((v) => /* @__PURE__ */ o("text", { x: l(v.t), y: Je - 6, class: "chart-tick", "text-anchor": "middle", children: v.label }, v.t));
  if (t.kind === "timeline") {
    const v = Ae.t + A / 2 - 16, j = i != null ? t.segments[i] : null;
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: Je, ...y, children: [
        t.segments.map((U, re) => {
          const Y = l(U.from), te = l(U.to), W = Math.max(1, te - Y - (te - Y > 3 ? 2 : 0));
          return /* @__PURE__ */ o("rect", { x: Y, y: v, width: W, height: 32, rx: 3, fill: U.on ? so : U.on === null ? Vl : si, stroke: U.on === null ? "rgba(255,255,255,0.25)" : "none", "stroke-dasharray": "3 3", opacity: i == null || i === re ? 1 : 0.55 }, re);
        }),
        /* @__PURE__ */ o("line", { x1: Ae.l, x2: c - Ae.r, y1: v + 44, y2: v + 44, stroke: ai }),
        C
      ] }),
      /* @__PURE__ */ o("div", { class: "chart-legend", children: [
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: so } }),
          d("switch.on")
        ] }),
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: si } }),
          d("switch.off")
        ] }),
        t.segments.some((U) => U.on === null) && /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { class: "key-na" }),
          d("chart.no_connection")
        ] })
      ] }),
      j && /* @__PURE__ */ o(On, { x: l(j.from) + Math.min(l(j.to) - l(j.from), 40) / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: j.on ? d("switch.on") : j.on === null ? d("chart.no_connection") : d("switch.off") }),
        /* @__PURE__ */ o("span", { children: [
          De(j.from, n),
          " — ",
          De(j.to, n)
        ] })
      ] })
    ] });
  }
  const b = t.points, k = b.some((v) => v.min != null && v.max != null);
  let I = 1 / 0, B = -1 / 0;
  b.forEach((v) => {
    I = Math.min(I, v.min != null ? v.min : v.v), B = Math.max(B, v.max != null ? v.max : v.v);
  }), t.kind === "bars" && (I = Math.min(0, I));
  const S = Wl(I, B, 4), g = S[0], z = S[S.length - 1], O = (v) => Ae.t + A - (v - g) / (z - g) * A, D = S.map((v) => /* @__PURE__ */ o("g", { children: [
    /* @__PURE__ */ o("line", { x1: Ae.l, x2: c - Ae.r, y1: O(v), y2: O(v), stroke: ai }),
    /* @__PURE__ */ o("text", { x: Ae.l - 8, y: O(v) + 4, class: "chart-tick", "text-anchor": "end", children: de(v) })
  ] }, v)), T = i != null ? b[i] : null;
  if (t.kind === "bars") {
    const v = t.bucketMs / (f - u) * h, j = Math.max(2, Math.min(24, v - 2)), U = t.bucketMs >= 864e5, re = U && b.map((Y, te) => {
      const W = new Date(Y.t);
      return n === "30d" && (b.length - 1 - te) % 5 ? null : /* @__PURE__ */ o("text", { x: l(Y.t) + v / 2, y: Je - 6, class: "chart-tick", "text-anchor": "middle", children: n === "7d" ? $e("date.weekdays_short")[W.getDay()] : W.getDate() + "." + hn(W.getMonth() + 1) }, Y.t);
    });
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: Je, ...y, children: [
        D,
        b.map((Y, te) => {
          const W = l(Y.t) + (v - j) / 2, N = O(Math.max(0, Y.v)), q = O(0), oe = Math.max(0, q - N), ce = Math.min(4, j / 2, oe), K = "M" + W + "," + q + "V" + (N + ce) + "Q" + W + "," + N + " " + (W + ce) + "," + N + "H" + (W + j - ce) + "Q" + (W + j) + "," + N + " " + (W + j) + "," + (N + ce) + "V" + q + "Z";
          return /* @__PURE__ */ o("path", { d: K, fill: _e, opacity: i == null || i === te ? 1 : 0.5 }, te);
        }),
        U ? re : C
      ] }),
      T && /* @__PURE__ */ o(On, { x: l(T.t) + v / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: [
          de(T.v),
          " ",
          e
        ] }),
        /* @__PURE__ */ o("span", { children: t.bucketMs >= 864e5 ? wt(T.t) : wt(T.t) + ", " + We(T.t) + "–" + We(T.t + t.bucketMs) })
      ] })
    ] });
  }
  const L = k ? b : b.concat({ t: f, v: b[b.length - 1].v }), R = L.map((v, j) => (j ? "L" : "M") + l(Math.max(v.t, u)).toFixed(1) + "," + O(v.v).toFixed(1)).join(""), P = R + "L" + l(L[L.length - 1].t).toFixed(1) + "," + O(g) + "L" + l(Math.max(L[0].t, u)).toFixed(1) + "," + O(g) + "Z", ne = k ? b.map((v, j) => (j ? "L" : "M") + l(v.t).toFixed(1) + "," + O(v.max).toFixed(1)).join("") + b.slice().reverse().map((v) => "L" + l(v.t).toFixed(1) + "," + O(v.min).toFixed(1)).join("") + "Z" : "", ae = b[b.length - 1];
  return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
    /* @__PURE__ */ o("svg", { ref: r, width: c, height: Je, ...y, children: [
      D,
      k ? /* @__PURE__ */ o("path", { d: ne, fill: _e, opacity: 0.22 }) : /* @__PURE__ */ o("path", { d: P, fill: _e, opacity: 0.1 }),
      /* @__PURE__ */ o("path", { d: R, fill: "none", stroke: _e, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }),
      /* @__PURE__ */ o("circle", { cx: l(k ? ae.t : f), cy: O(ae.v), r: 4, fill: _e, stroke: ri, "stroke-width": 2 }),
      T && /* @__PURE__ */ o("g", { children: [
        /* @__PURE__ */ o("line", { x1: l(T.t), x2: l(T.t), y1: Ae.t, y2: Ae.t + A, stroke: "rgba(255,255,255,0.35)" }),
        /* @__PURE__ */ o("circle", { cx: l(T.t), cy: O(T.v), r: 5, fill: _e, stroke: ri, "stroke-width": 2 })
      ] }),
      C
    ] }),
    k && /* @__PURE__ */ o("div", { class: "chart-legend", children: [
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { class: "key-line", style: { background: _e } }),
        d("chart.mean")
      ] }),
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { style: { background: _e, opacity: 0.35 } }),
        d("chart.min_max")
      ] })
    ] }),
    T && /* @__PURE__ */ o(On, { x: l(T.t), W: c, children: [
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
      /* @__PURE__ */ o("span", { children: De(T.t, n) })
    ] })
  ] });
}
function On(t) {
  const e = Math.max(60, Math.min(t.W - 60, t.x));
  return /* @__PURE__ */ o("div", { class: "chart-tip", style: { left: e }, children: t.children });
}
const Nt = {
  cool: { Icon: vo, color: _e },
  heat: { Icon: aa, color: so },
  heat_cool: { Icon: oo, color: "#a3a3a3" },
  auto: { Icon: oo, color: "#a3a3a3" },
  dry: { Icon: Ve, color: "#a3a3a3" },
  fan_only: { Icon: ia, color: "#a3a3a3" },
  off: { Icon: kt, color: "rgba(255,255,255,0.25)" }
}, Zl = ["auto", "low", "medium", "middle", "high", "quiet", "turbo", "diffuse", "focus"], Jl = (t) => Zl.indexOf(t) !== -1 ? d("ac.fan." + t) : t, ci = (t) => Nt[t] ? d("ac.mode." + t) : t;
function li(t, e, n, s, i) {
  const a = (135 + s * 270) * Math.PI / 180, r = (135 + i * 270) * Math.PI / 180, c = (i - s) * 270 > 180 ? 1 : 0;
  return "M" + (t + n * Math.cos(a)).toFixed(1) + "," + (e + n * Math.sin(a)).toFixed(1) + "A" + n + "," + n + " 0 " + c + " 1 " + (t + n * Math.cos(r)).toFixed(1) + "," + (e + n * Math.sin(r)).toFixed(1);
}
function Gl({ it: t, size: e }) {
  const n = X(), s = n.states[t.entity], i = s ? s.attributes : {}, a = s ? s.state : "off", r = a === "off", c = i.target_temp_step || 0.5, h = i.min_temp != null ? i.min_temp : 16, A = i.max_temp != null ? i.max_temp : 31, [u, f] = w(null), l = se(0), m = u ?? i.temperature;
  Q(() => {
    f(null);
  }, [i.temperature]);
  const p = (S) => {
    const g = m ?? (h + A) / 2, z = Math.max(h, Math.min(A, Math.round((g + S * c) / c) * c));
    f(z), clearTimeout(l.current), l.current = window.setTimeout(() => n.callService(t.entity, "set_temperature", { temperature: z }), 800);
  }, y = i.current_temperature != null ? String(i.current_temperature) : t.temp ? Se(n, t.temp) : void 0, _ = Nt[a] || Nt.auto, C = e.h < 260 || e.w < 260, b = C ? 132 : 176, k = m != null ? (m - h) / (A - h) : 0, I = i.hvac_modes || [], B = i.fan_modes || [];
  return /* @__PURE__ */ o("div", { class: "ac" + (C ? " compact" : ""), children: [
    /* @__PURE__ */ o("div", { class: "ac-main", children: [
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => p(-1), children: /* @__PURE__ */ o(vl, { size: 22 }) }),
      /* @__PURE__ */ o("div", { class: "ac-dial", style: { width: b, height: b }, children: [
        /* @__PURE__ */ o("svg", { width: b, height: b, children: [
          /* @__PURE__ */ o("path", { d: li(b / 2, b / 2, b / 2 - 8, 0, 1), stroke: "rgba(255,255,255,0.1)", "stroke-width": 8, fill: "none", "stroke-linecap": "round" }),
          !r && m != null && /* @__PURE__ */ o("path", { d: li(b / 2, b / 2, b / 2 - 8, 0, Math.max(0.01, k)), stroke: _.color, "stroke-width": 8, fill: "none", "stroke-linecap": "round" })
        ] }),
        /* @__PURE__ */ o("div", { class: "ac-center", children: [
          /* @__PURE__ */ o("div", { class: "ac-target", children: [
            m != null && !r ? de(m) : "—",
            /* @__PURE__ */ o("sup", { children: "°" })
          ] }),
          /* @__PURE__ */ o("div", { class: "ac-mode", children: ci(a) }),
          y != null && !ft(y) && /* @__PURE__ */ o("div", { class: "ac-room", children: d("ac.room", { t: de(Number(y)) }) })
        ] })
      ] }),
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => p(1), children: /* @__PURE__ */ o(Ue, { size: 22 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "ac-modes", children: I.map((S) => {
      const g = Nt[S] || { Icon: _s, color: "#a3a3a3" };
      return /* @__PURE__ */ o(
        "button",
        {
          class: "ac-mode-btn" + (S === a ? " active" : ""),
          title: ci(S),
          style: S === a && S !== "off" ? { background: g.color, borderColor: g.color } : void 0,
          onClick: () => n.callService(t.entity, "set_hvac_mode", { hvac_mode: S }),
          children: /* @__PURE__ */ o(g.Icon, { size: 18 })
        },
        S
      );
    }) }),
    !C && B.length > 0 && !r && /* @__PURE__ */ o("div", { class: "seg seg-wide ac-fan", children: B.map((S) => /* @__PURE__ */ o("button", { class: i.fan_mode === S ? "active" : "", onClick: () => n.callService(t.entity, "set_fan_mode", { fan_mode: S }), children: Jl(S) }, S)) })
  ] });
}
function Xl({ card: t, size: e }) {
  const n = X(), [s, i] = w(0), a = t.items[Math.min(s, t.items.length - 1)];
  return /* @__PURE__ */ o("div", { class: "ac-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((r, c) => /* @__PURE__ */ o("button", { class: c === s ? "active" : "", onClick: () => i(c), children: be(n, r) }, r.entity)) }),
    /* @__PURE__ */ o(Gl, { it: a, size: e }, a.entity)
  ] });
}
const xe = {
  PAUSE: 1,
  VOLUME_SET: 4,
  VOLUME_MUTE: 8,
  PREVIOUS: 16,
  NEXT: 32,
  TURN_ON: 128,
  TURN_OFF: 256,
  SELECT_SOURCE: 2048,
  PLAY: 16384
}, Kl = ["playing", "paused", "idle", "on", "off", "standby", "buffering"], zt = (t) => Kl.indexOf(t) !== -1 ? d("media.state." + t) : t;
function $l({ it: t, tv: e, sources: n, size: s }) {
  const i = X(), a = i.states[t.entity], r = a ? a.attributes : {}, c = Number(r.supported_features) || 0, h = (D) => (c & D) === D, A = a ? a.state : "off", u = A === "off" || A === "standby", f = A === "playing", l = (D, T) => i.callService(t.entity, D, T), [m, p] = w(null), y = m ?? (typeof r.volume_level == "number" ? r.volume_level : null);
  Q(() => {
    p(null);
  }, [r.volume_level]);
  const _ = se(0), C = (D) => {
    const T = Math.max(0, Math.min(1, Math.round(D * 100) / 100));
    p(T), clearTimeout(_.current), _.current = window.setTimeout(() => l("volume_set", { volume_level: T }), 400);
  }, b = se(null), k = (D) => {
    const T = b.current;
    if (!T) return;
    const L = T.getBoundingClientRect();
    C((D - L.left) / L.width);
  }, I = i.pictureUrl(r.entity_picture_local || r.entity_picture), B = r.media_title || r.app_name || r.source || zt(A), S = r.media_artist || r.media_album_name || (r.media_title ? zt(A) : "") || "", g = s.h >= 300 && s.w >= 300, z = s.h < 250, O = e ? io : u ? Fa : dl;
  return u && e ? /* @__PURE__ */ o("div", { class: "media media-off", children: [
    /* @__PURE__ */ o("div", { class: "media-art-empty big", children: /* @__PURE__ */ o(io, { size: 40 }) }),
    /* @__PURE__ */ o("div", { class: "media-title", children: be(i, t) }),
    /* @__PURE__ */ o("div", { class: "media-sub", children: zt(A) }),
    h(xe.TURN_ON) ? /* @__PURE__ */ o("button", { class: "pill-btn media-power", onClick: () => l("turn_on"), children: [
      /* @__PURE__ */ o(kt, { size: 18 }),
      /* @__PURE__ */ o("span", { children: d("common.turn_on") })
    ] }) : /* @__PURE__ */ o("div", { class: "muted small media-hint", children: d("media.tv_remote_only") })
  ] }) : /* @__PURE__ */ o("div", { class: "media" + (g ? " big" : "") + (z ? " short" : ""), children: [
    /* @__PURE__ */ o("div", { class: "media-top", children: [
      I && !u ? /* @__PURE__ */ o("div", { class: "media-art", style: { backgroundImage: "url(" + I + ")" } }) : /* @__PURE__ */ o("div", { class: "media-art media-art-empty", children: /* @__PURE__ */ o(O, { size: g ? 36 : 26 }) }),
      /* @__PURE__ */ o("div", { class: "media-info", children: [
        /* @__PURE__ */ o("div", { class: "media-title", children: B }),
        S && /* @__PURE__ */ o("div", { class: "media-sub", children: S }),
        /* @__PURE__ */ o("div", { class: "media-state" + (f ? " on" : ""), children: [
          f && /* @__PURE__ */ o("i", { class: "eq", children: [
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {})
          ] }),
          zt(A)
        ] })
      ] }),
      (h(xe.TURN_OFF) || h(xe.TURN_ON)) && /* @__PURE__ */ o("button", { class: "icon-round", title: d(u ? "common.turn_on" : "common.turn_off"), onClick: () => l(u ? "turn_on" : "turn_off"), children: /* @__PURE__ */ o(kt, { size: 16 }) })
    ] }),
    (h(xe.PAUSE) || h(xe.PLAY) || h(xe.NEXT)) && /* @__PURE__ */ o("div", { class: "media-controls", children: [
      h(xe.PREVIOUS) && /* @__PURE__ */ o("button", { onClick: () => l("media_previous_track"), children: /* @__PURE__ */ o(Dl, { size: 22 }) }),
      /* @__PURE__ */ o("button", { class: "media-play", onClick: () => l("media_play_pause"), children: f ? /* @__PURE__ */ o(_l, { size: 24 }) : /* @__PURE__ */ o(Cl, { size: 24 }) }),
      h(xe.NEXT) && /* @__PURE__ */ o("button", { onClick: () => l("media_next_track"), children: /* @__PURE__ */ o(Bl, { size: 22 }) })
    ] }),
    y != null && h(xe.VOLUME_SET) && /* @__PURE__ */ o("div", { class: "media-volume", children: [
      h(xe.VOLUME_MUTE) && /* @__PURE__ */ o("button", { onClick: () => l("volume_mute", { is_volume_muted: !r.is_volume_muted }), children: r.is_volume_muted ? /* @__PURE__ */ o(Ql, { size: 18 }) : /* @__PURE__ */ o(Hl, { size: 18 }) }),
      /* @__PURE__ */ o(
        "div",
        {
          class: "vol-bar",
          ref: b,
          onClick: (D) => k(D.clientX),
          onTouchMove: (D) => k(D.touches[0].clientX),
          children: /* @__PURE__ */ o("div", { class: "vol-fill", style: { width: Math.round(y * 100) + "%" } })
        }
      ),
      /* @__PURE__ */ o("span", { class: "vol-num", children: Math.round(y * 100) })
    ] }),
    n && h(xe.SELECT_SOURCE) && r.source_list && /* @__PURE__ */ o("div", { class: "chips media-sources", children: r.source_list.map((D) => /* @__PURE__ */ o("button", { class: "chip" + (r.source === D ? " active" : ""), onClick: () => l("select_source", { source: D }), children: D }, D)) })
  ] });
}
function ed({ card: t, size: e }) {
  const n = X(), s = t.items.findIndex((h) => n.states[h.entity] && n.states[h.entity].state === "playing"), [i, a] = w(s >= 0 ? s : 0), r = t.items[Math.min(i, t.items.length - 1)], c = t.type === "tv" || !!n.states[r.entity] && n.states[r.entity].attributes.device_class === "tv";
  return /* @__PURE__ */ o("div", { class: "media-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline seg-full", children: t.items.map((h, A) => {
      const u = n.states[h.entity];
      return /* @__PURE__ */ o("button", { class: A === i ? "active" : "", onClick: () => a(A), children: [
        u && u.state === "playing" && /* @__PURE__ */ o("i", { class: "dot-live" }),
        be(n, h)
      ] }, h.entity);
    }) }),
    Re(n, r.entity) && /* @__PURE__ */ o($l, { it: r, tv: c, sources: t.type === "tv", size: e }, r.entity)
  ] });
}
const td = {
  "clear-night": { Icon: va },
  cloudy: { Icon: Js },
  exceptional: { Icon: Bn },
  fog: { Icon: il },
  hail: { Icon: ii },
  lightning: { Icon: Bn },
  "lightning-rainy": { Icon: Bn },
  partlycloudy: { Icon: Us },
  pouring: { Icon: sl },
  rainy: { Icon: ol },
  snowy: { Icon: vo },
  "snowy-rainy": { Icon: ii },
  sunny: { Icon: qa },
  windy: { Icon: ln },
  "windy-variant": { Icon: ln }
};
function Ke(t) {
  const e = td[t || ""];
  return { label: e ? d("weather." + t) : t || "—", Icon: e ? e.Icon : Js };
}
function rr(t, e) {
  const [n, s] = w([]), [i, a] = w([]), r = e ? t.states[e] : void 0, c = r && Number(r.attributes.supported_features) || 0;
  return Q(() => {
    if (!e || t.status !== "connected" || !c) return;
    const h = [];
    c & 2 && h.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: "hourly" },
      (u) => s(u.forecast || [])
    ));
    const A = c & 1 ? "daily" : c & 4 ? "twice_daily" : "";
    return A && h.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: A },
      (u) => a(nd(u.forecast || [], A === "twice_daily"))
    )), () => h.forEach((u) => u());
  }, [e, t.status, c]), { hourly: n, days: i };
}
function nd(t, e) {
  if (!e) return t.map((i) => ({ t: Date.parse(i.datetime), hi: i.temperature, lo: i.templow, condition: i.condition }));
  const n = {}, s = [];
  return t.forEach((i) => {
    const a = new Date(Date.parse(i.datetime)), r = a.getFullYear() + "-" + a.getMonth() + "-" + a.getDate();
    n[r] || (n[r] = { t: a.getTime() }, s.push(r));
    const c = n[r];
    [i.temperature, i.templow].filter((A) => typeof A == "number").forEach((A) => {
      c.hi = c.hi == null ? A : Math.max(c.hi, A), c.lo = c.lo == null ? A : Math.min(c.lo, A);
    }), (i.is_daytime !== !1 || !c.condition) && (c.condition = i.condition);
  }), s.map((i) => n[i]);
}
function od(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "m/s" ? n : e === "mph" ? n * 0.447 : n / 3.6;
}
function id(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "mmHg" ? n : e === "inHg" ? n * 25.4 : n * 0.750062;
}
function ge(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : String(Math.round(e));
}
const sd = 64, ad = 32, di = 36, hi = 84, rd = 33;
function cr({ card: t, size: e }) {
  const n = X(), s = pn(), i = t.items.filter((g) => g.entity.indexOf("weather.") === 0)[0], a = t.items.filter((g) => g !== i), r = i && i.entity, c = r ? n.states[r] : void 0, { hourly: h, days: A } = rr(n, r);
  let u = e.h - (c ? sd + ad : 0);
  const f = Math.max(0, Math.min(a.length, Math.floor(u / di)));
  u -= f * di + (f ? 10 : 0);
  const l = !!c && h.length > 0 && u >= hi;
  l && (u -= hi + 12);
  const m = c ? Math.max(0, Math.min(A.length, 7, Math.floor((u - 10) / rd))) : 0, p = A.slice(0, m), y = Math.min.apply(null, p.map((g) => g.lo != null ? g.lo : 99)), _ = Math.max.apply(null, p.map((g) => g.hi != null ? g.hi : -99)), C = (g) => (g - y) / Math.max(1, _ - y) * 100, b = Date.now(), k = c ? c.attributes : {}, I = Ke(c && c.state), B = od(k.wind_speed, k.wind_speed_unit), S = id(k.pressure, k.pressure_unit);
  return /* @__PURE__ */ o("div", { class: "weather", children: [
    c && /* @__PURE__ */ o("div", { class: "weather-now", children: [
      /* @__PURE__ */ o(I.Icon, { size: e.w > 360 ? 54 : 40 }),
      /* @__PURE__ */ o("div", { class: "weather-temp", children: [
        ge(k.temperature),
        /* @__PURE__ */ o("sup", { children: "°" })
      ] }),
      /* @__PURE__ */ o("div", { class: "weather-desc", children: [
        /* @__PURE__ */ o("b", { children: I.label }),
        k.apparent_temperature != null && /* @__PURE__ */ o("span", { children: d("weather.feels_like", { t: ge(k.apparent_temperature) }) }),
        A[0] && A[0].hi != null && /* @__PURE__ */ o("span", { children: [
          ge(A[0].lo),
          "° … ",
          ge(A[0].hi),
          "°"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ o("div", { class: "weather-facts", children: [
      B != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(ln, { size: 14 }),
        d("weather.wind", { v: B.toFixed(1) })
      ] }),
      k.humidity != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(Ve, { size: 14 }),
        ge(k.humidity),
        "%"
      ] }),
      S != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(ca, { size: 14 }),
        d("weather.pressure", { v: Math.round(S) })
      ] })
    ] }),
    f > 0 && /* @__PURE__ */ o("div", { class: "weather-rooms", children: a.slice(0, f).map((g) => {
      const z = n.states[g.entity], O = g.entity.indexOf("weather.") === 0, D = O ? z && z.attributes.temperature : z && z.state, T = O ? z && z.attributes.humidity : g.hum ? Se(n, g.hum) : void 0;
      return /* @__PURE__ */ o("div", { class: "wroom tappable", onClick: () => s(g.hum ? [g.entity, g.hum] : [g.entity]), children: [
        /* @__PURE__ */ o("span", { class: "wroom-name", children: be(n, g) }),
        T != null && /* @__PURE__ */ o("span", { class: "wroom-hum", children: [
          /* @__PURE__ */ o(Ve, { size: 12 }),
          ge(T),
          "%"
        ] }),
        /* @__PURE__ */ o("b", { class: "wroom-temp", children: [
          cd(D),
          "°"
        ] })
      ] }, g.entity);
    }) }),
    l && /* @__PURE__ */ o("div", { class: "weather-hours", children: h.filter((g) => Date.parse(g.datetime) > b - 36e5).slice(0, 12).map((g) => {
      const z = Ke(g.condition);
      return /* @__PURE__ */ o("div", { class: "hour", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: We(Date.parse(g.datetime)) }),
        /* @__PURE__ */ o(z.Icon, { size: 18 }),
        /* @__PURE__ */ o("b", { children: [
          ge(g.temperature),
          "°"
        ] })
      ] }, g.datetime);
    }) }),
    p.length > 0 && /* @__PURE__ */ o("div", { class: "weather-days", children: p.map((g, z) => {
      const O = Ke(g.condition);
      return /* @__PURE__ */ o("div", { class: "day", children: [
        /* @__PURE__ */ o("span", { class: "day-name", children: z === 0 ? d("weather.today") : $e("date.weekdays_short")[new Date(g.t).getDay()] }),
        /* @__PURE__ */ o(O.Icon, { size: 18 }),
        /* @__PURE__ */ o("span", { class: "day-lo", children: [
          ge(g.lo),
          "°"
        ] }),
        /* @__PURE__ */ o("span", { class: "day-bar", children: g.lo != null && g.hi != null && /* @__PURE__ */ o("i", { style: { left: C(g.lo) + "%", width: Math.max(4, C(g.hi) - C(g.lo)) + "%" } }) }),
        /* @__PURE__ */ o("span", { class: "day-hi", children: [
          ge(g.hi),
          "°"
        ] })
      ] }, g.t);
    }) })
  ] });
}
function cd(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : (Math.round(e * 10) / 10).toFixed(1);
}
function ld({ entity: t }) {
  const e = X(), n = e.states[t], { days: s } = rr(e, t);
  if (!n || n.state === "unavailable") return null;
  const i = Ke(n.state), a = s[0];
  return /* @__PURE__ */ o("div", { class: "ambient-weather", children: [
    /* @__PURE__ */ o(i.Icon, { size: 30 }),
    /* @__PURE__ */ o("span", { class: "aw-temp", children: [
      ge(n.attributes.temperature),
      "°"
    ] }),
    /* @__PURE__ */ o("span", { class: "aw-desc", children: [
      i.label,
      a && a.hi != null && /* @__PURE__ */ o("small", { children: [
        ge(a.lo),
        "° … ",
        ge(a.hi),
        "°"
      ] })
    ] })
  ] });
}
function Co(t, e) {
  if (!e || Kt[t].domains.indexOf(e.entity_id.split(".")[0]) === -1) return !1;
  const n = e.attributes.device_class, s = e.entity_id.indexOf("weather.") === 0;
  return t === "climate" || t === "weather" ? s || n === "temperature" : !0;
}
function Ai(t, e, n) {
  return e.filter((s) => t.states[s] && t.states[s].entity_id.indexOf("sensor.") === 0 && t.states[s].attributes.device_class === n)[0];
}
function lr(t, e, n) {
  if (!n.device) return [n];
  const s = t.devices[n.device];
  if (!s) return n.entity ? [{ entity: n.entity, name: n.name }] : [];
  const i = s.entities.filter((l) => t.registry[l] && t.registry[l].ec == null && !!t.states[l]), a = n.skip || [], r = n.order || [], c = (l) => {
    const m = r.indexOf(l);
    return m === -1 ? 1e6 : m;
  }, h = i.filter((l) => Co(e, t.states[l]) && a.indexOf(l) === -1).map((l, m) => ({ id: l, i: m })).sort((l, m) => c(l.id) - c(m.id) || l.i - m.i).map((l) => l.id), A = h.length === 1, u = n.names || {}, f = (l) => u[l] || (A ? n.name || s.name : t.registry[l].en || s.name || void 0);
  return e === "climate" ? h.map((l) => ({ entity: l, hum: Ai(t, i, "humidity"), name: f(l) })) : e === "ac" ? h.map((l) => ({ entity: l, temp: n.temp || Ai(t, i, "temperature"), name: f(l) })) : h.map((l) => ({ entity: l, name: f(l), icon: void 0 }));
}
function dd(t, e) {
  if (!e.items.some((i) => i.device)) return e;
  const n = {}, s = [];
  return e.items.forEach((i) => lr(t, e.type, i).forEach((a) => {
    n[a.entity] || (n[a.entity] = !0, s.push(a));
  })), { ...e, items: s };
}
function kn(t, e) {
  const n = dd(t, e.title ? e : { ...e, title: pt(e.type) }), s = n.items.filter((i) => Re(t, i.entity));
  return s.length === n.items.length ? n : { ...n, items: s };
}
function be(t, e) {
  const n = t.states[e.entity];
  return e.name || n && n.attributes.friendly_name || e.entity;
}
function hd(t, e) {
  const n = t.states[e];
  return n ? n.attributes.device_class : void 0;
}
const Ad = [
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
], ud = ["door", "window", "opening", "garage_door", "moisture", "smoke", "gas", "problem", "safety"];
function ao(t, e) {
  const n = t.states[e];
  if (!n || ft(n.state)) return { text: d("sensor.no_data"), alert: !1, on: !1 };
  const s = e.split(".")[0], i = n.attributes.device_class;
  if (s === "binary_sensor") {
    const r = n.state === "on", c = Ad.indexOf(i) !== -1 ? "sensor." + i + "." : "sensor.";
    return { text: d(c + (r ? "on" : "off")), alert: r && ud.indexOf(i) !== -1, on: r };
  }
  if (s === "lock") return { text: n.state === "locked" ? d("sensor.locked") : d("sensor.unlocked"), alert: n.state !== "locked", on: n.state !== "locked" };
  if (s === "cover") return { text: n.state === "open" ? d("sensor.open") : n.state === "closed" ? d("sensor.closed") : n.state, alert: !1, on: n.state === "open" };
  const a = parseFloat(n.state);
  return { text: (isNaN(a) ? n.state : String(Math.round(a * 10) / 10)) + Gt(t, e), alert: !1, on: !1 };
}
function fd(t) {
  return Math.max(1, Math.min(5, Math.floor(t.w / 150)));
}
function dr(t, e) {
  const s = (r) => (e.h + 10) / Math.ceil(t / r) - 10;
  let i = fd(e);
  for (; i < Math.min(t, 6) && s(i) < 96 && e.w / (i + 1) >= 120; ) i++;
  const a = s(i);
  return "lights cols-" + i + (a >= 96 ? "" : a >= 70 ? " compact" : " list");
}
function md({ card: t, size: e }) {
  const n = X(), s = pn(), i = e.h / Math.max(1, t.items.length) < 95;
  return /* @__PURE__ */ o("div", { class: "rooms" + (i ? " compact" : ""), children: t.items.map((a) => {
    const r = a.entity.indexOf("weather.") === 0 ? n.states[a.entity] : void 0, c = r ? Ke(r.state).Icon : null;
    return /* @__PURE__ */ o("div", { class: "room tappable" + (r ? " room-outside" : ""), onClick: () => s(a.hum ? [a.entity, a.hum] : [a.entity]), children: [
      /* @__PURE__ */ o("div", { class: "room-name", children: [
        c && /* @__PURE__ */ o(c, { size: 14 }),
        be(n, a)
      ] }),
      /* @__PURE__ */ o("div", { class: "room-vals", children: [
        /* @__PURE__ */ o("span", { class: "room-temp", children: [
          Ht(r ? String(r.attributes.temperature) : Se(n, a.entity)),
          /* @__PURE__ */ o("sup", { children: "°" })
        ] }),
        r && r.attributes.humidity != null && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Ve, { size: 14 }),
          Math.round(r.attributes.humidity),
          "%"
        ] }),
        !r && a.hum && Re(n, a.hum) && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Ve, { size: 14 }),
          Ht(Se(n, a.hum), 0),
          "%"
        ] })
      ] })
    ] }, a.entity);
  }) });
}
function pd(t, e) {
  const n = se(0), s = se(!1), i = () => {
    s.current = !1, clearTimeout(n.current), n.current = window.setTimeout(() => {
      s.current = !0, t();
    }, 550);
  }, a = () => clearTimeout(n.current);
  return {
    onTouchStart: i,
    onMouseDown: i,
    onTouchEnd: a,
    onTouchMove: a,
    onMouseUp: a,
    onMouseLeave: a,
    onContextMenu: (r) => r.preventDefault(),
    onClick: () => {
      s.current ? s.current = !1 : e();
    }
  };
}
function gd({ it: t }) {
  const e = X(), n = pn(), s = pd(() => n([t.entity]), () => e.toggle(t.entity)), i = Se(e, t.entity), a = mn(i), r = Ze(t.icon || _o(t.entity));
  return /* @__PURE__ */ o("button", { class: "light" + (a ? " on" : "") + (i === void 0 ? " na" : ""), ...s, children: [
    /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(r, { size: 22 }) }),
    /* @__PURE__ */ o("span", { class: "light-name", children: be(e, t) }),
    /* @__PURE__ */ o("span", { class: "light-state", children: d(i === void 0 ? "switch.unavailable" : a ? "switch.on" : "switch.off") })
  ] });
}
function bd({ card: t, size: e }) {
  return /* @__PURE__ */ o("div", { class: dr(t.items.length, e), children: t.items.map((n) => /* @__PURE__ */ o(gd, { it: n }, n.entity)) });
}
function yd({ card: t, onCamera: e }) {
  const n = X(), [s, i] = w(0), a = t.items[Math.min(s, t.items.length - 1)], r = a ? n.cameraStreamUrl(a.entity) : "";
  return /* @__PURE__ */ o("div", { class: "cam-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((c, h) => /* @__PURE__ */ o("button", { class: h === s ? "active" : "", onClick: () => i(h), children: be(n, c) }, c.entity + h)) }),
    /* @__PURE__ */ o("div", { class: "cam fit-" + (t.fit || "cover"), onClick: () => r && e(r), children: [
      r ? /* @__PURE__ */ o("img", { src: r, alt: "" }) : /* @__PURE__ */ o("div", { class: "cam-empty", children: [
        /* @__PURE__ */ o(Ll, { size: 26 }),
        /* @__PURE__ */ o("span", { children: d("camera.no_stream") })
      ] }),
      r && /* @__PURE__ */ o("span", { class: "live", children: [
        /* @__PURE__ */ o("i", {}),
        "LIVE"
      ] })
    ] })
  ] });
}
function kd({ card: t }) {
  const e = X(), n = pn();
  return /* @__PURE__ */ o("div", { class: "sensors", children: t.items.map((s) => {
    const i = ao(e, s.entity), a = Ze(s.icon || _o(s.entity, hd(e, s.entity)));
    return /* @__PURE__ */ o("div", { class: "status-row tappable" + (i.alert ? " alert" : ""), onClick: () => n([s.entity]), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(a, { size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: be(e, s) }),
        /* @__PURE__ */ o("small", { children: i.text })
      ] })
    ] }, s.entity);
  }) });
}
function xd({ card: t, size: e }) {
  const n = X(), [s, i] = w(""), a = (r) => {
    const c = r.split(".")[0];
    n.callService(r, c === "automation" ? "trigger" : "turn_on"), i(r), setTimeout(() => i(""), 1200);
  };
  return /* @__PURE__ */ o("div", { class: dr(t.items.length, e), children: t.items.map((r) => {
    const c = Ze(r.icon || "sparkles");
    return /* @__PURE__ */ o("button", { class: "light scene" + (s === r.entity ? " on" : ""), onClick: () => a(r.entity), children: [
      /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(c, { size: 22 }) }),
      /* @__PURE__ */ o("span", { class: "light-name", children: be(n, r) }),
      /* @__PURE__ */ o("span", { class: "light-state", children: s === r.entity ? d("scene.started") : d("scene.tap_to_run") })
    ] }, r.entity);
  }) });
}
function hr(t) {
  const e = X(), { size: n, onCamera: s } = t;
  if (!t.card.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.empty") });
  const i = kn(e, t.card);
  if (!i.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.all_unavailable") });
  switch (i.type) {
    case "climate":
      return /* @__PURE__ */ o(md, { card: i, size: n });
    case "switches":
      return /* @__PURE__ */ o(bd, { card: i, size: n });
    case "cameras":
      return /* @__PURE__ */ o(yd, { card: i, onCamera: s });
    case "sensors":
      return /* @__PURE__ */ o(kd, { card: i });
    case "scenes":
      return /* @__PURE__ */ o(xd, { card: i, size: n });
    case "ac":
      return /* @__PURE__ */ o(Xl, { card: i, size: n });
    case "speakers":
    case "tv":
      return /* @__PURE__ */ o(ed, { card: i, size: n });
    case "weather":
      return /* @__PURE__ */ o(cr, { card: i, size: n });
  }
}
function Ar(t) {
  const e = X(), n = kn(e, t.card);
  if (n.type !== "switches") return null;
  const s = n.items.filter((i) => mn(Se(e, i.entity)));
  return s.length ? /* @__PURE__ */ o("button", { class: "chip-btn", onClick: () => s.forEach((i) => e.turnOff(i.entity)), children: [
    /* @__PURE__ */ o(kt, { size: 14 }),
    /* @__PURE__ */ o("span", { children: d("switches.all_off") })
  ] }) : null;
}
function Mo(t, e) {
  const n = kn(t, e);
  if (n.type === "switches") {
    const s = n.items.filter((i) => mn(Se(t, i.entity))).length;
    return d("switches.title_count", { title: n.title, on: s, total: n.items.length });
  }
  return n.title;
}
function ui(t, e) {
  const n = kn(t, e), s = n.items[0];
  if (n.type === "climate") {
    const i = n.items.filter((a) => a.entity.indexOf("weather.") !== 0)[0];
    return { text: i ? Ht(Se(t, i.entity)) + "°" : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "switches") {
    const i = n.items.filter((a) => mn(Se(t, a.entity))).length;
    return { text: i ? d("chip.on_count", { title: n.title, n: i }) : d("chip.off", { title: n.title }), lit: i > 0, alert: !1 };
  }
  if (n.type === "sensors") {
    for (let i = 0; i < n.items.length; i++) {
      const a = ao(t, n.items[i].entity);
      if (a.alert) return { text: be(t, n.items[i]) + ": " + a.text.toLowerCase(), lit: !1, alert: !0 };
    }
    return { text: s ? ao(t, s.entity).text : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "ac" && s) {
    const i = t.states[s.entity];
    return !i || i.state === "off" ? { text: d("chip.off", { title: n.title }), lit: !1, alert: !1 } : { text: n.title + ": " + i.attributes.temperature + "°", lit: !0, alert: !1 };
  }
  if ((n.type === "speakers" || n.type === "tv") && n.items.length) {
    const i = n.items.filter((c) => t.states[c.entity] && t.states[c.entity].state === "playing")[0], a = i && t.states[i.entity];
    return a ? { text: "♪ " + (a.attributes.media_title || be(t, i)), lit: !0, alert: !1 } : { text: n.items.filter((c) => t.states[c.entity] && ["on", "idle", "paused"].indexOf(t.states[c.entity].state) !== -1).length && n.type === "tv" ? d("chip.on", { title: n.title }) : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "weather" && s) {
    const i = t.states[s.entity];
    return { text: i ? Math.round(i.attributes.temperature) + "° " + Ke(i.state).label.toLowerCase() : n.title, lit: !1, alert: !1 };
  }
  return { text: n.title, lit: !1, alert: !1 };
}
function wd(t) {
  return /* @__PURE__ */ o("section", { class: "panel " + (t.class || ""), children: [
    /* @__PURE__ */ o("div", { class: "panel-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      t.aside
    ] }),
    t.children
  ] });
}
function ur(t) {
  return t.layout === "auto" ? window.innerWidth <= 700 ? "center" : "corner" : t.layout;
}
const et = 3, Le = 100 - et * 2;
function fr(t) {
  const e = (n) => (et + n / ee * Le) / 100;
  return [e(t.x), e(t.y), e(t.x + t.w), e(t.y + t.h)];
}
function fi(t) {
  return {
    left: et + t.x / ee * Le + "%",
    top: et + t.y / ee * Le + "%",
    width: t.w / ee * Le + "%",
    height: t.h / ee * Le + "%"
  };
}
function mi(t) {
  const e = t.x + t.w / 2, n = t.y + t.h / 2;
  return " g-" + (t.ha || (e < ee / 3 ? "left" : e > ee * 2 / 3 ? "right" : "center")) + " g-" + (t.va || (n < ee / 3 ? "top" : n > ee * 2 / 3 ? "bottom" : "middle"));
}
function mr(t) {
  if (t.grid) return fr(t.grid.clock);
  const e = ur(t);
  return e === "top" ? [0.2, 0.05, 0.8, 0.35] : e === "corner" ? [0, 0.55, 0.55, 0.95] : [0.2, 0.55, 0.8, 0.9];
}
const vd = [0.4, 0.88, 0.6, 1];
function _d(t) {
  return t.grid ? fr(t.grid.widgets) : t.widgetsPos === "top" ? [0.15, 0, 0.85, 0.2] : t.widgetsPos === "bottom" ? [0.15, 0.78, 0.85, 0.96] : ur(t) === "corner" ? [0.5, 0.7, 1, 0.96] : mr(t);
}
function Ln([t, e, n]) {
  const s = (i) => (i /= 255, i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * s(t) + 0.7152 * s(e) + 0.0722 * s(n);
}
const Pn = { color: "#ffffff", dark: !1 };
function Hn(t, e, n) {
  const [s, i] = w(Pn), a = e.join(",");
  return Q(() => {
    if (!n || !t) return;
    const r = new Image();
    r.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = r.width, c.height = r.height;
        const h = c.getContext("2d");
        h.drawImage(r, 0, 0);
        const A = Math.floor(e[0] * c.width), u = Math.floor(e[1] * c.height), f = Math.max(1, Math.floor((e[2] - e[0]) * c.width)), l = Math.max(1, Math.floor((e[3] - e[1]) * c.height)), m = h.getImageData(A, u, f, l).data, p = [0, 0, 0];
        for (let S = 0; S < m.length; S += 4)
          p[0] += m[S], p[1] += m[S + 1], p[2] += m[S + 2];
        const y = m.length / 4, _ = p.map((S) => S / y), C = _.map((S) => 255 - S), b = Ln(_), k = Ln(C), B = (Math.max(b, k) + 0.05) / (Math.min(b, k) + 0.05) >= 3 ? C : b > 0.35 ? [17, 17, 17] : [255, 255, 255];
        i({ color: "rgb(" + B.map(Math.round).join(",") + ")", dark: Ln(B) < 0.25 });
      } catch {
        i(Pn);
      }
    }, r.src = t;
  }, [t, a, n]), n ? s : Pn;
}
function Cd({ prefs: t }) {
  const e = ir(5e3), n = t.datePos === "above" || t.datePos !== "below" && t.layout === "top", s = t.date && /* @__PURE__ */ o("div", { class: "ambient-date" + (n ? " above" : ""), children: ar(e) });
  return /* @__PURE__ */ o(he, { children: [
    n && s,
    /* @__PURE__ */ o("div", { class: "ambient-time", style: { fontWeight: ls[t.font] }, children: sr(e) }),
    !n && s
  ] });
}
function Md(t) {
  const e = X(), n = nt(), s = us(), [i, a] = w(""), r = n.homeCards().filter((L) => L.chip), c = r.filter((L) => L.type === "weather" && L.items.length)[0], h = yc(r.filter((L) => L.type !== "weather"), s), A = h.filter((L) => s.hidden.indexOf(L.id) === -1), u = A.filter((L) => ui(e, L).alert), f = t.customizing, l = () => {
    a(""), t.onDone();
  }, [m, p] = w(null), y = m || s.grid, _ = () => le({ grid: s.grid ? null : kc(s, window.innerWidth > 700) }), C = s.color === "contrast", b = s.widgetsColor || s.color, k = b === "contrast", I = !k && !(s.widgetsColor === "" && b === "white"), B = Yo(b, s.widgetsColor ? s.widgetsCustomColor : s.customColor), S = !C && s.color !== "white", g = Yo(s.color, s.customColor), z = Hn(t.photoThumb, mr(s), C), O = Hn(t.photoThumb, _d(s), k), D = Hn(t.photoThumb, vd, C), T = "ambient" + (t.visible ? " visible" : "") + (y ? " lock-grid" : " lock-" + s.layout + " widgets-" + s.widgetsPos) + " lock-size-" + s.size + " chips-" + s.chipStyle + (f ? " customizing" : "");
  return /* @__PURE__ */ o(he, { children: [
    /* @__PURE__ */ o("div", { ref: t.innerRef, class: T, children: [
      /* @__PURE__ */ o(
        "div",
        {
          class: "ambient-clock" + (C ? " text-contrast" : "") + (S ? " ink-fixed" + (s.color === "accent" ? " accent-text" : "") : "") + (z.dark ? " ink-dark" : "") + (y ? mi(y.clock) : ""),
          style: { ...y ? fi(y.clock) : {}, ...C ? { color: z.color } : S && g ? { color: g } : {} },
          onClick: f ? () => a("clock") : void 0,
          children: [
            /* @__PURE__ */ o(Cd, { prefs: s }),
            s.weather && c && /* @__PURE__ */ o(ld, { entity: c.items[0].entity })
          ]
        }
      ),
      /* @__PURE__ */ o(
        "div",
        {
          class: "glances" + (k ? " text-contrast" : "") + (I ? " ink-fixed" + (b === "accent" ? " accent-text" : "") : "") + (O.dark ? " ink-dark" : "") + (y ? mi(y.widgets) : ""),
          style: { ...y ? fi(y.widgets) : {}, ...k ? { color: O.color } : I && B ? { color: B } : {} },
          onClick: f ? () => a("widgets") : void 0,
          children: [
            e.status !== "connected" && e.status !== "connecting" && !f && /* @__PURE__ */ o("button", { class: "glance warn", onClick: t.onConnection, children: [
              /* @__PURE__ */ o(Nl, { size: 18 }),
              /* @__PURE__ */ o("span", { children: d("ambient.offline") })
            ] }),
            f && !A.length && /* @__PURE__ */ o("span", { class: "glance glance-add", children: [
              /* @__PURE__ */ o(Ue, { size: 18 }),
              /* @__PURE__ */ o("span", { children: d("lock.add_widgets") })
            ] }),
            u.concat(A.filter((L) => u.indexOf(L) === -1)).map((L) => {
              const R = ui(e, L), P = Ze(L.icon);
              return /* @__PURE__ */ o(
                "button",
                {
                  class: "glance" + (R.lit ? " lit" : "") + (R.alert ? " alert" : ""),
                  title: R.text,
                  onClick: f ? void 0 : () => t.onSheet(L),
                  children: [
                    /* @__PURE__ */ o(P, { size: 18 }),
                    /* @__PURE__ */ o("span", { children: R.text })
                  ]
                },
                L.id
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ o(
        "button",
        {
          class: "home-hint" + (C ? " text-contrast" : "") + (t.showHint ? " visible" : "") + (D.dark ? " ink-dark" : ""),
          "aria-label": d("ambient.home_hint"),
          style: C ? { color: D.color } : void 0,
          onClick: t.onHome,
          tabIndex: t.showHint ? 0 : -1,
          children: /* @__PURE__ */ o(js, { size: 36, strokeWidth: 1.8 })
        }
      ),
      f && y && !i && /* @__PURE__ */ o(Sd, { grid: y, onDraft: p, onDone: (L) => {
        p(null), le({ grid: L });
      }, onTap: a })
    ] }),
    f && /* @__PURE__ */ o("div", { class: "lock-ui", children: [
      /* @__PURE__ */ o("div", { class: "lock-top", children: [
        /* @__PURE__ */ o("span", { children: d(y ? "lock.grid_hint" : "lock.hint") }),
        /* @__PURE__ */ o("span", { class: "lock-top-btns", children: [
          /* @__PURE__ */ o("button", { class: "pill-btn" + (s.grid ? " on" : ""), onClick: _, title: d("lock.grid"), children: [
            /* @__PURE__ */ o(hl, { size: 16 }),
            /* @__PURE__ */ o("span", { children: d("lock.grid") })
          ] }),
          /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: l, children: d("common.done") })
        ] })
      ] }),
      i && /* @__PURE__ */ o("div", { class: "lock-modal", onClick: (L) => {
        L.target === L.currentTarget && a("");
      }, children: /* @__PURE__ */ o(Qd, { kind: i, widgets: h, hasWeather: !!c, onClose: () => a("") }) })
    ] })
  ] });
}
const Ed = ["clock", "widgets"];
function Sd(t) {
  const e = se(null), n = (s, i, a) => {
    const r = e.current;
    if (!r) return;
    s.stopPropagation(), s.cancelable && s.preventDefault();
    const c = r.getBoundingClientRect(), h = (z) => {
      const O = "touches" in z ? z.touches[0] || z.changedTouches[0] : z;
      return { x: O.clientX, y: O.clientY };
    }, A = h(s), u = t.grid[i], f = c.width / ee, l = c.height / ee, m = r.parentElement ? r.parentElement.querySelector(i === "clock" ? ".ambient-clock" : ".glances") : null, y = (m ? [].slice.call(m.children) : []).map((z) => {
      const O = z.getBoundingClientRect(), D = getComputedStyle(z);
      return { w: O.width + parseFloat(D.marginLeft) + parseFloat(D.marginRight), h: O.height + parseFloat(D.marginTop) + parseFloat(D.marginBottom) };
    }), _ = m ? (() => {
      const z = getComputedStyle(m);
      return { x: parseFloat(z.paddingLeft) + parseFloat(z.paddingRight), y: parseFloat(z.paddingTop) + parseFloat(z.paddingBottom) };
    })() : { x: 0, y: 0 }, C = y.reduce((z, O) => Math.max(z, O.w), 0), b = Math.max(1, Math.ceil((C + _.x) / f - 0.05)), k = (z) => {
      if (!y.length) return 1;
      if (i === "clock") return Math.max(1, Math.ceil((y.reduce((R, P) => R + P.h, 0) + _.y) / l - 0.05));
      const O = z * f - _.x;
      let D = 0, T = 0, L = 0;
      return y.forEach((R) => {
        D && D + R.w > O && (L += T, D = 0, T = 0), D += R.w, T = Math.max(T, R.h);
      }), L += T, Math.max(1, Math.ceil((L + _.y) / l - 0.05));
    };
    let I = !1, B = t.grid;
    const S = (z) => {
      const O = h(z), D = (O.x - A.x) / c.width * ee, T = (O.y - A.y) / c.height * ee;
      if ((Math.abs(D) > 0.3 || Math.abs(T) > 0.3) && (I = !0), !I) return;
      z.cancelable && z.preventDefault();
      let L = a ? { ...u, w: u.w + D, h: u.h + T } : { ...u, x: u.x + D, y: u.y + T };
      if (a) {
        const R = Math.max(b, Math.round(L.w));
        L = { ...L, w: R, h: Math.max(k(R), Math.round(L.h)) };
      }
      B = { ...t.grid, [i]: to(L) }, t.onDraft(B);
    }, g = () => {
      document.removeEventListener("touchmove", S), document.removeEventListener("touchend", g), document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", g), I ? t.onDone(B) : t.onTap(i);
    };
    document.addEventListener("touchmove", S, { passive: !1 }), document.addEventListener("touchend", g), document.addEventListener("mousemove", S), document.addEventListener("mouseup", g);
  };
  return /* @__PURE__ */ o("div", { class: "grid-editor", ref: e, style: { left: et + "%", top: et + "%", width: Le + "%", height: Le + "%" }, children: Ed.map((s) => {
    const i = t.grid[s], a = { left: i.x / ee * 100 + "%", top: i.y / ee * 100 + "%", width: i.w / ee * 100 + "%", height: i.h / ee * 100 + "%" };
    return /* @__PURE__ */ o(
      "div",
      {
        class: "grid-box grid-" + s,
        style: a,
        onTouchStart: (r) => n(r, s, !1),
        onMouseDown: (r) => n(r, s, !1),
        children: [
          /* @__PURE__ */ o("span", { class: "grid-label", children: d(s === "clock" ? "lock.clock" : "lock.widgets") }),
          /* @__PURE__ */ o("span", { class: "grid-resize", onTouchStart: (r) => n(r, s, !0), onMouseDown: (r) => n(r, s, !0) })
        ]
      },
      s
    );
  }) });
}
function pi(t) {
  const [e, n] = w(t.custom);
  Q(() => n(t.custom), [t.custom]);
  const s = t.value === "custom";
  return /* @__PURE__ */ o(he, { children: [
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
      Id.map((i) => /* @__PURE__ */ o(
        "button",
        {
          title: d("lock.color." + i),
          class: "lock-color" + (t.value === i ? " on" : "") + (i === "accent" ? " accent-bg" : "") + (i === "contrast" ? " lock-color-contrast" : ""),
          style: i === "accent" || i === "contrast" ? void 0 : { background: ds[i] },
          onClick: () => t.onPick(i),
          children: i === "contrast" ? /* @__PURE__ */ o("span", { children: "A" }) : null
        },
        i
      )),
      /* @__PURE__ */ o(
        "label",
        {
          class: "lock-color lock-color-custom" + (s ? " on" : ""),
          title: d("lock.color.custom"),
          style: s && ct.test(t.custom) ? { background: t.custom } : void 0,
          onClick: () => {
            s || t.onPick("custom");
          },
          children: [
            /* @__PURE__ */ o("input", { type: "color", value: ct.test(t.custom) ? t.custom : "#ffb86b", onInput: (i) => t.onCustom(i.currentTarget.value) }),
            /* @__PURE__ */ o("span", { children: "#" })
          ]
        }
      )
    ] }),
    s && /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.color.custom") }),
      /* @__PURE__ */ o(
        "input",
        {
          class: "hex-input" + (ct.test(e) ? "" : " invalid"),
          value: e,
          maxLength: 7,
          placeholder: "#ffb86b",
          onInput: (i) => {
            let a = i.currentTarget.value.trim();
            a && a[0] !== "#" && (a = "#" + a), n(a), ct.test(a) && t.onCustom(a.toLowerCase());
          }
        }
      )
    ] })
  ] });
}
const zd = ["thin", "light", "regular", "bold"], Id = ["contrast", "white", "accent", "warm", "mint", "sky", "rose"], Dd = ["xs", "s", "m", "l", "xl"], Bd = ["clock", "top", "bottom"], Td = ["auto", "above", "below"], Od = ["auto", "corner", "center", "top"], Ld = ["", "left", "center", "right"], Pd = ["", "top", "middle", "bottom"];
function gi(t) {
  const e = t.grid[t.kind], n = (s) => {
    const i = { ...e, ...s };
    i.ha || delete i.ha, i.va || delete i.va, le({ grid: { ...t.grid, [t.kind]: i } });
  };
  return /* @__PURE__ */ o(he, { children: [
    /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.align_h") }),
      /* @__PURE__ */ o("div", { class: "seg", children: Ld.map((s) => /* @__PURE__ */ o("button", { class: (e.ha || "") === s ? "active" : "", onClick: () => n({ ha: s || void 0 }), children: d("lock.align." + (s || "auto")) }, s)) })
    ] }),
    /* @__PURE__ */ o("div", { class: "option", children: [
      /* @__PURE__ */ o("label", { children: d("lock.align_v") }),
      /* @__PURE__ */ o("div", { class: "seg", children: Pd.map((s) => /* @__PURE__ */ o("button", { class: (e.va || "") === s ? "active" : "", onClick: () => n({ va: s || void 0 }), children: d("lock.align." + (s || "auto")) }, s)) })
    ] })
  ] });
}
const Hd = ["auto", "text", "icons"];
function Qd(t) {
  const e = us(), n = (i, a) => {
    const r = t.widgets.map((A) => A.id), c = i + a, h = r[i];
    r[i] = r[c], r[c] = h, le({ order: r });
  }, s = (i, a) => {
    const r = e.hidden.filter((c) => c !== i);
    le({ hidden: a ? r : r.concat(i) });
  };
  return /* @__PURE__ */ o("div", { class: "lock-panel", onClick: (i) => i.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "lock-panel-head", children: [
      /* @__PURE__ */ o("b", { children: t.kind === "clock" ? d("lock.clock") : d("lock.widgets") }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Ye, { size: 20 }) })
    ] }),
    t.kind === "clock" ? /* @__PURE__ */ o(he, { children: [
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.look") }),
      /* @__PURE__ */ o("div", { class: "lock-fonts", children: zd.map((i) => /* @__PURE__ */ o("button", { class: "lock-font" + (e.font === i ? " on" : ""), style: { fontWeight: ls[i] }, onClick: () => le({ font: i }), children: "12" }, i)) }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.size") }),
        /* @__PURE__ */ o("div", { class: "seg", children: Dd.map((i) => /* @__PURE__ */ o("button", { class: e.size === i ? "active" : "", onClick: () => le({ size: i }), children: d("lock.size." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.color") }),
      /* @__PURE__ */ o(
        pi,
        {
          value: e.color,
          custom: e.customColor,
          onPick: (i) => le({ color: i }),
          onCustom: (i) => le({ color: "custom", customColor: i })
        }
      ),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.place") }),
      e.grid ? /* @__PURE__ */ o(gi, { kind: "clock", grid: e.grid }) : /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.layout") }),
        /* @__PURE__ */ o("select", { value: e.layout, onChange: (i) => le({ layout: i.currentTarget.value }), children: Od.map((i) => /* @__PURE__ */ o("option", { value: i, children: d("lock.layout." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.show") }),
      /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.date, onChange: (i) => le({ date: i.currentTarget.checked }) }),
        d("lock.date")
      ] }),
      e.date && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.date_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: Td.map((i) => /* @__PURE__ */ o("button", { class: e.datePos === i ? "active" : "", onClick: () => le({ datePos: i }), children: d("lock.date_pos." + i) }, i)) })
      ] }),
      t.hasWeather && /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.weather, onChange: (i) => le({ weather: i.currentTarget.checked }) }),
        d("lock.weather")
      ] })
    ] }) : /* @__PURE__ */ o(he, { children: [
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.color") }),
      /* @__PURE__ */ o(
        pi,
        {
          value: e.widgetsColor,
          custom: e.widgetsCustomColor,
          same: !0,
          onPick: (i) => le({ widgetsColor: i }),
          onCustom: (i) => le({ widgetsColor: "custom", widgetsCustomColor: i })
        }
      ),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.place") }),
      e.grid ? /* @__PURE__ */ o(gi, { kind: "widgets", grid: e.grid }) : /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.widgets_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: Bd.map((i) => /* @__PURE__ */ o("button", { class: e.widgetsPos === i ? "active" : "", onClick: () => le({ widgetsPos: i }), children: d("lock.widgets_pos." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.look") }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.chip_style") }),
        /* @__PURE__ */ o("select", { value: e.chipStyle, onChange: (i) => le({ chipStyle: i.currentTarget.value }), children: Hd.map((i) => /* @__PURE__ */ o("option", { value: i, children: d("lock.chip_style." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "lock-sec", children: d("lock.sec.which") }),
      !t.widgets.length && /* @__PURE__ */ o("p", { class: "hint", children: d("lock.no_widgets") }),
      t.widgets.map((i, a) => {
        const r = Ze(i.icon);
        return /* @__PURE__ */ o("div", { class: "lock-widget", children: [
          /* @__PURE__ */ o("label", { class: "check", children: [
            /* @__PURE__ */ o("input", { type: "checkbox", checked: e.hidden.indexOf(i.id) === -1, onChange: (c) => s(i.id, c.currentTarget.checked) }),
            /* @__PURE__ */ o(r, { size: 16 }),
            /* @__PURE__ */ o("span", { children: i.title || pt(i.type) })
          ] }),
          /* @__PURE__ */ o("button", { class: "icon-btn", disabled: a === 0, onClick: () => n(a, -1), children: /* @__PURE__ */ o(js, { size: 18 }) }),
          /* @__PURE__ */ o("button", { class: "icon-btn", disabled: a === t.widgets.length - 1, onClick: () => n(a, 1), children: /* @__PURE__ */ o(nl, { size: 18 }) })
        ] }, i.id);
      })
    ] })
  ] });
}
function Eo(t) {
  const [e, n] = w({ w: 0, h: 0 });
  return po(() => {
    const s = t.current;
    if (!s) return;
    const i = () => {
      const r = s.clientWidth, c = s.clientHeight;
      n((h) => h.w === r && h.h === c ? h : { w: r, h: c });
    };
    i();
    const a = window.ResizeObserver;
    if (a) {
      const r = new a(i);
      return r.observe(s), () => r.disconnect();
    }
    return window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, []), e;
}
const Oe = 12, It = 16, jd = 700, Dt = 6, Nd = 350, Fd = 44, Rd = 84;
function bi(t) {
  const e = "touches" in t ? t.touches[0] || t.changedTouches[0] : t;
  return { x: e.clientX, y: e.clientY };
}
function qd({ editing: t, onCamera: e, onEdit: n }) {
  const s = X(), i = nt(), a = se(null), r = Eo(a), [c, h] = w(null), A = se(null), u = i.state.layout.cards, f = r.w - It * 2, l = r.h - It * 2, m = r.w > 0 && f < jd, p = m ? Xe : qe, y = m ? ec(u) : u, _ = m ? u.filter((P) => P.m && P.m.hide) : [], C = (f - Oe * (p - 1)) / p, b = C + Oe, k = Math.max(1, Math.floor((l + Oe) / b)), I = Math.max(0, (l - (k * b - Oe)) / 2), B = (P) => ({ left: P.x * b, top: P.y * b, width: P.w * b - Oe, height: P.h * b - Oe }), S = (P, ne, ae) => {
    if (!t || "button" in P && P.button !== 0) return;
    P.stopPropagation();
    const j = "touches" in P && ae === "move", U = bi(P), re = { id: ne.id, mode: ae, x0: U.x, y0: U.y, orig: ne, dx: 0, dy: 0, active: ae === "resize", preview: y };
    A.current = re;
    let Y = !j, te = 0;
    j ? te = window.setTimeout(() => {
      const q = A.current;
      if (!q) return;
      Y = !0;
      const oe = { ...q, active: !0 };
      A.current = oe, h(oe);
      try {
        navigator.vibrate && navigator.vibrate(15);
      } catch {
      }
    }, Nd) : h(re);
    const W = (q) => {
      const oe = A.current;
      if (!oe) return;
      const ce = bi(q), K = ce.x - oe.x0, fe = ce.y - oe.y0;
      if (!Y) {
        (Math.abs(K) > Dt || Math.abs(fe) > Dt) && N();
        return;
      }
      const ve = oe.active || Math.abs(K) > Dt || Math.abs(fe) > Dt;
      if (!ve) return;
      q.cancelable && q.preventDefault();
      const ye = oe.orig, Be = gt(oe.mode === "move" ? { ...ye, x: ye.x + K / b, y: ye.y + fe / b } : { ...ye, w: ye.w + K / b, h: ye.h + fe / b }, p), we = { ...oe, dx: K, dy: fe, active: ve, preview: Pe(y, Be) };
      A.current = we, h(we);
    }, N = () => {
      clearTimeout(te);
      const q = A.current;
      A.current = null, h(null), window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", N), document.removeEventListener("touchmove", W, { passive: !1 }), document.removeEventListener("touchend", N), document.removeEventListener("touchcancel", N), q && q.active && g(q.preview);
    };
    window.addEventListener("mousemove", W), window.addEventListener("mouseup", N), document.addEventListener("touchmove", W, { passive: !1 }), document.addEventListener("touchend", N), document.addEventListener("touchcancel", N);
  }, g = (P) => i.saveLayout({ ...i.state.layout, cards: m ? Cn(u, P) : P }), z = c && c.active ? c.preview : y, O = (P) => {
    if (!m) {
      i.saveLayout({ ...i.state.layout, cards: Pe(u.filter((v) => v.id !== P.id)) });
      return;
    }
    const ne = y.filter((v) => v.id !== P.id), ae = Cn(u, Pe(ne)).map((v) => v.id === P.id ? { ...v, m: { x: 0, y: 0, w: Xe, h: 3, hide: !0 } } : v);
    i.saveLayout({ ...i.state.layout, cards: ae });
  }, D = (P) => {
    const ae = Cn(u, y).map((v) => v.id === P.id ? { ...v, m: { x: 0, y: Xn(y), w: Xe, h: 3 } } : v);
    i.saveLayout({ ...i.state.layout, cards: ae });
  }, T = Xn(z), L = t ? Math.max(k, T) : T, R = L <= k ? I : 0;
  return /* @__PURE__ */ o("main", { class: "grid" + (t ? " editing" : "") + (c && c.active ? " dragging-card" : "") + (m ? " narrow" : ""), ref: a, children: [
    t && m && /* @__PURE__ */ o("div", { class: "grid-note", children: [
      /* @__PURE__ */ o("span", { children: d("grid.narrow_note") }),
      _.length > 0 && /* @__PURE__ */ o("div", { class: "hidden-cards", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: [
          /* @__PURE__ */ o(na, { size: 14 }),
          d("grid.hidden_on_phone")
        ] }),
        _.map((P) => /* @__PURE__ */ o("button", { class: "chip", onClick: () => D(P), children: [
          /* @__PURE__ */ o(Ue, { size: 14 }),
          /* @__PURE__ */ o("span", { children: Mo(s, P) })
        ] }, P.id))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "grid-inner", style: { height: Math.max(0, L * b - Oe), margin: It + R + "px " + It + "px" }, children: [
      t && r.w > 0 && /* @__PURE__ */ o(Vd, { rows: L, cols: p, cell: C, step: b }),
      r.w > 0 && z.map((P) => {
        const ne = !!c && c.active && c.id === P.id;
        let ae = B(P);
        if (ne && c) {
          const v = B(c.orig);
          ae = c.mode === "move" ? { ...v, left: v.left + c.dx, top: v.top + c.dy } : { ...v, width: Math.max(C * 2, v.width + c.dx), height: Math.max(C * 2, v.height + c.dy) };
        }
        return /* @__PURE__ */ o("div", { children: [
          ne && /* @__PURE__ */ o("div", { class: "drop-slot", style: B(P) }),
          /* @__PURE__ */ o(
            Wd,
            {
              card: P,
              style: ae,
              editing: t,
              dragged: ne,
              onCamera: e,
              onEdit: n,
              onRemove: O,
              narrow: m,
              onStart: S,
              ha: s
            }
          )
        ] }, P.id);
      })
    ] })
  ] });
}
function Vd({ rows: t, cols: e, cell: n, step: s }) {
  const i = [];
  for (let a = 0; a < t; a++)
    for (let r = 0; r < e; r++)
      i.push(/* @__PURE__ */ o("div", { class: "grid-dot", style: { left: r * s, top: a * s, width: n, height: n } }, a + ":" + r));
  return /* @__PURE__ */ o("div", { class: "grid-dots", children: i });
}
function Wd({ card: t, style: e, editing: n, dragged: s, ha: i, onCamera: a, onEdit: r, onRemove: c, narrow: h, onStart: A }) {
  const u = t.color ? " tint-" + t.color : "";
  return /* @__PURE__ */ o(
    "div",
    {
      class: "cell" + u + (s ? " dragged" : ""),
      style: e,
      onMouseDown: A ? (f) => A(f, t, "move") : void 0,
      onTouchStart: A ? (f) => A(f, t, "move") : void 0,
      children: [
        /* @__PURE__ */ o(wd, { title: Mo(i, t), aside: !n && /* @__PURE__ */ o(Ar, { card: t }), class: "card-" + t.type, children: /* @__PURE__ */ o("div", { class: "panel-body", children: /* @__PURE__ */ o(hr, { card: t, onCamera: a, size: { w: e.width - Fd, h: e.height - Rd } }) }) }),
        n && /* @__PURE__ */ o(he, { children: [
          /* @__PURE__ */ o("button", { class: "badge-btn badge-del", onMouseDown: Bt, onTouchStart: Bt, onClick: () => c(t), title: d(h ? "grid.hide_on_phone" : "common.delete"), children: h ? /* @__PURE__ */ o(na, { size: 14 }) : /* @__PURE__ */ o(Ye, { size: 16 }) }),
          /* @__PURE__ */ o("button", { class: "badge-btn badge-edit", onMouseDown: Bt, onTouchStart: Bt, onClick: () => r(t), title: d("common.edit"), children: /* @__PURE__ */ o(Ma, { size: 14 }) }),
          A && /* @__PURE__ */ o(
            "div",
            {
              class: "resize-handle",
              onMouseDown: (f) => A(f, t, "resize"),
              onTouchStart: (f) => A(f, t, "resize")
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
function Bt(t) {
  t.stopPropagation();
}
const ro = "photoframe.kiosk", Ft = [];
function co() {
  return ro + ":" + (location.pathname.split("/")[1] || "lovelace");
}
function pr() {
  try {
    const t = localStorage.getItem(ro);
    return t !== null && (localStorage.setItem(co(), t), localStorage.removeItem(ro)), localStorage.getItem(co()) || "";
  } catch {
    return "";
  }
}
function Ud(t) {
  try {
    localStorage.setItem(co(), t);
  } catch {
  }
  Ft.forEach((e) => e());
}
function Yd(t) {
  return Ft.push(t), () => {
    Ft.splice(Ft.indexOf(t), 1);
  };
}
function Zd(t) {
  const e = new URLSearchParams(location.search);
  if (e.has("kiosk")) return e.get("kiosk") !== "0" && e.get("kiosk") !== "false";
  const n = pr();
  return n ? n === "on" : t;
}
function rt(t) {
  return t && t.shadowRoot ? t.shadowRoot : null;
}
const yi = "photoframe-kiosk";
let At = !1;
const Rt = [];
function Jd(t) {
  return Rt.push(t), () => {
    Rt.splice(Rt.indexOf(t), 1);
  };
}
function ki(t) {
  t !== At && (At = t, Rt.forEach((e) => e()));
}
function Qn(t, e, n) {
  if (!t || t.getElementById(yi)) return;
  const s = document.createElement("style");
  s.id = yi, s.textContent = e, t.appendChild(s), n.push(() => s.remove());
}
function Gd() {
  const [t, e] = w(At);
  return Q(() => {
    const n = Jd(() => e(At));
    return e(At), n;
  }, []), t;
}
function Xd() {
  history.pushState(null, "", "/"), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function Kd() {
  const t = rt(document.querySelector("home-assistant"))?.querySelector("home-assistant-main"), e = rt(t);
  if (!e) return null;
  const n = e.querySelector("ha-panel-lovelace"), s = rt(n)?.querySelector("hui-root"), i = rt(s);
  if (!s || !i) return null;
  const a = [], r = (A, u, f) => {
    const l = A.style.getPropertyValue(u);
    A.style.setProperty(u, f), a.push(() => l ? A.style.setProperty(u, l) : A.style.removeProperty(u));
  }, c = e.querySelector("ha-drawer");
  [t, c].forEach((A) => {
    A && (r(A, "--ha-sidebar-width", "0px"), r(A, "--mdc-drawer-width", "0px"));
  }), Qn(e, ":host{--ha-sidebar-width:0px!important;--mdc-drawer-width:0px!important}ha-sidebar{display:none!important}", a), Qn(rt(c), ".sidebar-shell,aside,.mdc-drawer{display:none!important;width:0!important}.app-content,.mdc-drawer-app-content{margin-left:0!important;margin-right:0!important;margin-inline-start:0!important;padding-left:0!important;padding-inline-start:0!important;width:100%!important}", a);
  const h = e.querySelector("ha-sidebar");
  if (h) {
    const A = h.style.display;
    h.style.display = "none", a.push(() => {
      h.style.display = A;
    });
  }
  return r(s, "--header-height", "0px"), Qn(i, ".header,app-header,.toolbar{display:none!important}#view{padding-top:0!important;min-height:100vh}", a), ki(!0), () => {
    a.splice(0).reverse().forEach((A) => A()), ki(!1);
  };
}
const xi = (t) => d("status." + t);
function $d() {
  const t = ir();
  return /* @__PURE__ */ o(he, { children: [
    /* @__PURE__ */ o("span", { class: "bar-clock", children: sr(t) }),
    /* @__PURE__ */ o("span", { class: "bar-date", children: ar(t) })
  ] });
}
function eh(t) {
  const { active: e, screen: n, screens: s } = ie.state, i = s[e] || [], [a, r] = w("");
  return Q(() => r(""), [n, t.editing]), i.length < 2 && !t.editing ? null : /* @__PURE__ */ o("div", { class: "screen-tabs", children: [
    i.map((c, h) => t.editing && c.id === n ? /* @__PURE__ */ o("span", { class: "screen-tab on editing", children: [
      h > 0 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => ie.moveScreen(c.id, -1), children: /* @__PURE__ */ o(Ls, { size: 14 }) }),
      /* @__PURE__ */ o(
        "input",
        {
          value: c.name,
          placeholder: jt(c, h),
          size: Math.max(6, (c.name || jt(c, h)).length),
          onChange: (A) => ie.renameScreen(c.id, A.currentTarget.value.trim())
        }
      ),
      h < i.length - 1 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => ie.moveScreen(c.id, 1), children: /* @__PURE__ */ o(Hs, { size: 14 }) }),
      i.length > 1 && /* @__PURE__ */ o(
        "button",
        {
          class: "screen-del" + (a === c.id ? " sure" : ""),
          title: d("screen.delete"),
          onClick: () => a === c.id || !c.cards.length ? ie.removeScreen(c.id) : r(c.id),
          children: a === c.id ? /* @__PURE__ */ o("span", { children: d("screen.delete_sure") }) : /* @__PURE__ */ o(xt, { size: 14 })
        }
      )
    ] }, c.id) : /* @__PURE__ */ o("button", { class: "screen-tab" + (c.id === n ? " on" : ""), onClick: () => ie.setActive(e, c.id), children: jt(c, h) }, c.id)),
    t.editing && /* @__PURE__ */ o("button", { class: "screen-tab add", onClick: () => ie.addScreen(""), children: [
      /* @__PURE__ */ o(Ue, { size: 14 }),
      /* @__PURE__ */ o("span", { children: d("screen.add") })
    ] })
  ] });
}
function th(t, e) {
  const n = se(null), s = (a) => "touches" in a ? a.touches[0] || a.changedTouches[0] : a;
  return {
    onTouchStart: (a) => {
      if (t) {
        const r = s(a);
        n.current = { x: r.clientX, y: r.clientY };
      }
    },
    onMouseDown: (a) => {
      t && (n.current = { x: a.clientX, y: a.clientY });
    },
    onTouchEnd: (a) => i(s(a)),
    onMouseUp: (a) => i(a)
  };
  function i(a) {
    const r = n.current;
    if (n.current = null, !r) return;
    const c = a.clientX - r.x, h = a.clientY - r.y;
    Math.abs(c) > 90 && Math.abs(c) > Math.abs(h) * 2 && e(c < 0 ? 1 : -1);
  }
}
function nh(t) {
  const e = X(), n = t.homes.length > 1, s = Gd(), i = t.homes.reduce((m, p) => m + (ie.state.screens[p.id] || []).length, 0), a = th(i > 1 && !t.editing, t.onStep), r = t.homes.filter((m) => m.id === t.active)[0];
  Q(() => {
    !t.visible && t.editing && t.onEditing(!1);
  }, [t.visible]);
  const c = Eo(t.innerRef), h = c.w > 0 && c.w < 760, [A, u] = w(!1);
  Q(() => {
    (!t.visible || !h) && u(!1);
  }, [t.visible, h]), Q(() => {
    if (!A) return;
    const m = () => u(!1), p = window.setTimeout(() => document.addEventListener("click", m), 0);
    return () => {
      clearTimeout(p), document.removeEventListener("click", m);
    };
  }, [A]);
  const f = !ie.card || ie.card.canEdit, l = /* @__PURE__ */ o(he, { children: [
    f && /* @__PURE__ */ o("button", { class: "round", onClick: () => t.onEditing(!0), title: d("controls.customize"), children: /* @__PURE__ */ o(Ma, { size: 18 }) }),
    /* @__PURE__ */ o("button", { class: "round", onClick: t.onSettings, title: d("controls.settings"), children: /* @__PURE__ */ o(zl, { size: 20 }) }),
    /* @__PURE__ */ o("button", { class: "round accent", onClick: t.onPhotos, title: d("controls.to_photos"), children: /* @__PURE__ */ o(fl, { size: 20 }) })
  ] });
  return /* @__PURE__ */ o("div", { ref: t.innerRef, class: "controls" + (t.visible ? " visible" : ""), children: [
    /* @__PURE__ */ o("header", { class: "bar" + (h ? " bar-narrow" : "") + (A ? " menu-open" : "") + (t.editing ? " bar-editing" : ""), children: [
      /* @__PURE__ */ o("div", { class: "bar-time" + (s ? " clock-link" : ""), onClick: s ? Xd : void 0, children: /* @__PURE__ */ o($d, {}) }),
      n && /* @__PURE__ */ o("button", { class: "home-switch", onClick: () => t.onSwitchHome(1), title: d("controls.next_home"), children: [
        /* @__PURE__ */ o("span", { class: "home-name", children: r ? r.name : "" }),
        /* @__PURE__ */ o("span", { class: "home-dots", children: t.homes.map((m) => /* @__PURE__ */ o("i", { class: m.id === t.active ? "on" : "" }, m.id)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "bar-actions", children: t.editing ? /* @__PURE__ */ o(he, { children: [
        /* @__PURE__ */ o("button", { class: "round", onClick: t.onAddCard, title: d("controls.add_card"), children: /* @__PURE__ */ o(Ue, { size: 20 }) }),
        /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: () => t.onEditing(!1), children: [
          /* @__PURE__ */ o(tl, { size: 18 }),
          /* @__PURE__ */ o("span", { children: d("common.done") })
        ] })
      ] }) : h ? /* @__PURE__ */ o("div", { class: "burger", children: [
        /* @__PURE__ */ o("div", { class: "burger-items", children: l }),
        /* @__PURE__ */ o("button", { class: "round burger-btn conn-" + e.status, onClick: () => u(!A), title: xi(e.status), children: [
          A ? /* @__PURE__ */ o(Ye, { size: 20 }) : /* @__PURE__ */ o(wl, { size: 20 }),
          /* @__PURE__ */ o("i", { class: "burger-dot" })
        ] })
      ] }) : /* @__PURE__ */ o(he, { children: [
        /* @__PURE__ */ o("span", { class: "conn conn-" + e.status, children: [
          /* @__PURE__ */ o("i", {}),
          xi(e.status)
        ] }),
        l
      ] }) })
    ] }),
    /* @__PURE__ */ o(eh, { editing: t.editing }),
    /* @__PURE__ */ o("div", { class: "home-pane" + (t.slide ? " slide-" + t.slide : ""), ...a, children: /* @__PURE__ */ o(qd, { editing: t.editing, onCamera: t.onCamera, onEdit: t.onEditCard }) }, t.active + "/" + ie.state.screen)
  ] });
}
function tt(t) {
  return /* @__PURE__ */ o("div", { class: "modal", onClick: t.onClose, children: /* @__PURE__ */ o("div", { class: "modal-box" + (t.wide ? " modal-wide" : ""), onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "modal-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Ye, { size: 24 }) })
    ] }),
    t.children
  ] }) });
}
function oh(t) {
  return /* @__PURE__ */ o(tt, { title: d("camera.live_title"), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "cam-full", children: /* @__PURE__ */ o("img", { src: t.url, alt: "" }) }) });
}
const ih = [5e3, 1e4, 3e4, 6e4], sh = [20, 45, 120, 0];
function ah() {
  const t = sn(), e = ie.state.screens[t] || [], n = an();
  return t + "/" + (e.some((s) => s.id === n) ? n : e[0] ? e[0].id : "");
}
function rh() {
  const t = nt(), [e, n] = w(!1), [s, i] = w(""), a = t.haLink;
  if (a !== "missing" && a !== "error") return null;
  const r = () => {
    n(!0), i(""), t.createHaDashboard().then(() => n(!1), (c) => {
      n(!1), i(c.message || String(c));
    });
  };
  return /* @__PURE__ */ o("div", { class: "ha-storage", children: [
    /* @__PURE__ */ o("p", { class: "hint", children: d("storage." + a) }),
    a === "missing" && (t.haClient && t.haClient.isAdmin ? /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: e, onClick: r, children: /* @__PURE__ */ o("span", { children: d(e ? "common.loading" : "storage.create") }) }) : /* @__PURE__ */ o("p", { class: "hint small", children: d("storage.ask_admin") })),
    s && /* @__PURE__ */ o("div", { class: "c-red small", children: s })
  ] });
}
function ch() {
  const t = nt(), e = t.migration, [n, s] = w(""), [i, a] = w(""), r = () => {
    s("0 / " + e.photos), a(""), t.migratePhotos((c, h) => s(c + " / " + h)).then(
      () => s(""),
      (c) => {
        s(""), a(c.message || String(c));
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
    i && /* @__PURE__ */ o("div", { class: "c-red small", children: i })
  ] });
}
function lh(t) {
  const e = nt(), { settings: n, photos: s } = e.state, i = !!e.card && !e.card.standalone, a = !!e.card || !!nn(), [r, c] = w("photos"), h = a ? r : "ha", [A, u] = w(n), [f, l] = w(!1), [m, p] = w(""), [y, _] = w(""), C = (x) => u({ ...A, ...x }), [b, k] = w(!1), [I, B] = w(""), [S, g] = w(""), z = (x, F) => {
    const ke = Array.prototype.slice.call(x || []).filter((me) => /^image\//.test(me.type) || /\.(heic|heif)$/i.test(me.name));
    F && (F.value = ""), ke.length && (l(!0), B(""), g(""), e.addPhotos(ke, (me, ot) => g(ot > 1 ? me + " / " + ot : ""), re ? te : void 0).then(
      () => l(!1),
      (me) => {
        l(!1), B(me.message || String(me));
      }
    ));
  }, [O, D] = w(Ki()), [T, L] = w(pr()), [R, P] = w(Wi()), [ne, ae] = w(Jt()), [v, j] = w(Bc()), U = nn(), re = !!e.card && e.card.integration, Y = e.card && e.card.config.albums || [], [te, W] = w(e.card && e.card.album && e.card.album !== "all" ? e.card.album : ""), [N, q] = w("");
  Q(() => {
    e.card && e.card.mediaBrowserUrl(te).then(q, () => q(""));
  }, [te, !!e.card]);
  const [oe, ce] = w(on()), [K, fe] = w(e.state.homes), ve = JSON.stringify(K) !== JSON.stringify(e.state.homes), ye = (x, F) => fe(K.map((ke) => ke.id === x ? { ...ke, ...F } : ke)), Be = () => {
    e.saveSettings(A), ve && e.saveHomes(K), t.onClose();
  }, we = () => {
    try {
      const x = JSON.parse(m);
      if (!x || !Array.isArray(x.cards)) throw new Error(d("settings.no_cards_field"));
      e.saveLayout(x), _(""), p("");
    } catch (x) {
      _(d("settings.import_failed", { error: x.message }));
    }
  };
  return /* @__PURE__ */ o(tt, { title: /* @__PURE__ */ o("span", { class: "modal-title", children: [
    /* @__PURE__ */ o(ul, { size: 20, class: "accent-text" }),
    /* @__PURE__ */ o("span", { children: d("settings.title") })
  ] }), onClose: t.onClose, children: [
    a && /* @__PURE__ */ o("div", { class: "tabs", children: [
      /* @__PURE__ */ o("button", { class: h === "photos" ? "active" : "", onClick: () => c("photos"), children: d("settings.tab.photos") }),
      /* @__PURE__ */ o("button", { class: h === "homes" ? "active" : "", onClick: () => c("homes"), children: d("settings.tab.homes") }),
      /* @__PURE__ */ o("button", { class: h === "layout" ? "active" : "", onClick: () => c("layout"), children: d("settings.tab.layout") }),
      !i && /* @__PURE__ */ o("button", { class: h === "ha" ? "active" : "", onClick: () => c("ha"), children: "Home Assistant" })
    ] }),
    h === "photos" && /* @__PURE__ */ o("div", { children: [
      e.migration && /* @__PURE__ */ o(ch, {}),
      /* @__PURE__ */ o(jn, { title: d("settings.section.photos"), children: [
        /* @__PURE__ */ o("p", { class: "hint", children: e.card ? d("photos.card_hint", { folder: e.card.folder }) : d("photos.local_hint") }),
        /* @__PURE__ */ o(
          "label",
          {
            class: "drop-zone" + (f ? " busy" : "") + (b ? " over" : ""),
            onDragOver: (x) => {
              x.preventDefault(), k(!0);
            },
            onDragLeave: () => k(!1),
            onDrop: (x) => {
              x.preventDefault(), k(!1), f || z(x.dataTransfer && x.dataTransfer.files);
            },
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "file",
                  multiple: !0,
                  accept: "image/*,.heic,.heif",
                  onChange: (x) => z(x.currentTarget.files, x.currentTarget),
                  disabled: f
                }
              ),
              /* @__PURE__ */ o(al, { size: 40, class: "muted" }),
              /* @__PURE__ */ o("p", { class: "drop-title", children: f ? d("photos.uploading") + (S ? " " + S : "") : d("photos.pick") }),
              /* @__PURE__ */ o("p", { class: "hint small", children: d(re ? "photos.formats_server" : "photos.formats") })
            ]
          }
        ),
        (I || e.photoError) && /* @__PURE__ */ o("div", { className: "c-red small upload-error", children: I || e.photoError }),
        re && Y.length > 0 && /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("photos.album") }),
          /* @__PURE__ */ o("select", { value: te, onChange: (x) => W(x.currentTarget.value), children: [
            /* @__PURE__ */ o("option", { value: "", children: d("photos.album_root") }),
            Y.map((x) => /* @__PURE__ */ o("option", { value: x, children: x }, x))
          ] })
        ] }),
        e.card && /* @__PURE__ */ o("div", { className: "photos-count", children: [
          /* @__PURE__ */ o("span", { children: d("photos.count", { n: s.length }) }),
          N && /* @__PURE__ */ o("a", { href: N, target: "_blank", rel: "noopener", children: d("photos.open_media") })
        ] }),
        !e.card && s.length > 0 && /* @__PURE__ */ o("div", { className: "thumbs thumbs-small", children: s.map((x) => /* @__PURE__ */ o("div", { className: "thumb", style: { backgroundImage: "url(" + x.url + ")" }, children: /* @__PURE__ */ o("button", { class: "thumb-del", onClick: () => e.deletePhoto(x.id), children: /* @__PURE__ */ o(Ye, { size: 14 }) }) }, x.id)) })
      ] }),
      /* @__PURE__ */ o(jn, { title: d("settings.section.slideshow"), children: [
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.slide_interval") }),
          /* @__PURE__ */ o("select", { value: A.slideIntervalMs, onChange: (x) => C({ slideIntervalMs: +x.currentTarget.value }), children: ih.map((x) => /* @__PURE__ */ o("option", { value: x, children: d("settings.interval." + x) }, x)) })
        ] }),
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.idle_return") }),
          /* @__PURE__ */ o("select", { value: A.idleSec, onChange: (x) => C({ idleSec: +x.currentTarget.value }), children: sh.map((x) => /* @__PURE__ */ o("option", { value: x, children: d("settings.idle." + x) }, x)) })
        ] }),
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.fit") }),
          /* @__PURE__ */ o("select", { value: ne, onChange: (x) => {
            const F = x.currentTarget.value;
            ae(F), Nr(F);
          }, children: [
            /* @__PURE__ */ o("option", { value: "auto", children: d("settings.fit_auto") }),
            /* @__PURE__ */ o("option", { value: "contain", children: d("settings.fit_contain") }),
            /* @__PURE__ */ o("option", { value: "cover", children: d("settings.fit_cover") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ o(jn, { title: d("settings.section.device"), children: [
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.quality") }),
          /* @__PURE__ */ o("select", { value: R, onChange: (x) => {
            const F = x.currentTarget.value;
            P(F), Or(F);
          }, children: [
            /* @__PURE__ */ o(
              "option",
              {
                value: "auto",
                children: d("settings.quality_auto", { mode: d(Ui() === "lite" ? "settings.quality_lite" : "settings.quality_full") })
              }
            ),
            /* @__PURE__ */ o("option", { value: "full", children: d("settings.quality_full") }),
            /* @__PURE__ */ o("option", { value: "lite", children: d("settings.quality_lite") })
          ] })
        ] }),
        v !== null && /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.autostart") }),
          /* @__PURE__ */ o("select", { value: v ? "on" : "off", onChange: (x) => {
            const F = x.currentTarget.value === "on";
            j(F), Tc(F);
          }, children: [
            /* @__PURE__ */ o("option", { value: "on", children: d("settings.autostart_on") }),
            /* @__PURE__ */ o("option", { value: "off", children: d("settings.autostart_off") })
          ] })
        ] }),
        i && /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.kiosk") }),
          /* @__PURE__ */ o("select", { value: T, onChange: (x) => {
            const F = x.currentTarget.value;
            L(F), Ud(F);
          }, children: [
            /* @__PURE__ */ o("option", { value: "", children: d("settings.kiosk_auto") }),
            /* @__PURE__ */ o("option", { value: "on", children: d("settings.kiosk_on") }),
            /* @__PURE__ */ o("option", { value: "off", children: d("settings.kiosk_off") })
          ] })
        ] }),
        /* @__PURE__ */ o("div", { className: "option", children: [
          /* @__PURE__ */ o("label", { children: d("settings.language") }),
          /* @__PURE__ */ o("select", { value: O, onChange: (x) => {
            D(x.currentTarget.value), Zr(x.currentTarget.value), gn();
          }, children: [
            /* @__PURE__ */ o("option", { value: "", children: d("settings.language_auto") }),
            Yr().map((x) => /* @__PURE__ */ o("option", { value: x.code, children: x.name }, x.code))
          ] })
        ] })
      ] })
    ] }),
    h === "ha" && i && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("p", { class: "hint", children: d("ha.card_hint") }) }),
    h === "ha" && !i && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("div", { class: "auth", children: [
        /* @__PURE__ */ o("div", { class: "auth-title", children: d("ha.auth") }),
        /* @__PURE__ */ o("label", { class: "field", children: [
          /* @__PURE__ */ o("span", { children: d("ha.url") }),
          /* @__PURE__ */ o("input", { value: A.haUrl, placeholder: U ? U.hassUrl : location.protocol + "//" + location.host, onInput: (x) => C({ haUrl: x.currentTarget.value.trim() }) })
        ] }),
        U ? /* @__PURE__ */ o("div", { class: "auth-session", children: [
          /* @__PURE__ */ o("span", { children: d("ha.logged_in", { url: U.hassUrl }) }),
          !U.embedded && /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
            dc(), location.reload();
          }, children: [
            /* @__PURE__ */ o(xl, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("ha.logout") })
          ] })
        ] }) : /* @__PURE__ */ o("button", { class: "btn btn-ghost btn-login", onClick: () => {
          e.saveSettings(A), uc(A.haUrl);
        }, children: [
          /* @__PURE__ */ o(kl, { size: 16 }),
          /* @__PURE__ */ o("span", { children: d("ha.login") })
        ] }),
        /* @__PURE__ */ o("p", { class: "hint", children: d("ha.local_hint") })
      ] }),
      /* @__PURE__ */ o(rh, {}),
      e.frameClient && /* @__PURE__ */ o("label", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: d("frame.name") }),
        /* @__PURE__ */ o(
          "input",
          {
            value: oe,
            placeholder: d("frame.name_placeholder"),
            onInput: (x) => ce(x.currentTarget.value),
            onChange: (x) => e.renameFrame(x.currentTarget.value.trim())
          }
        ),
        /* @__PURE__ */ o("small", { class: "option-hint", children: d("frame.hint") })
      ] })
    ] }),
    h === "homes" && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("p", { class: "hint", children: d("homes.hint") + (e.card ? d("homes.card_hint") : "") }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("screen.start") }),
        /* @__PURE__ */ o("select", { value: ah(), onChange: (x) => {
          const F = x.currentTarget.value.split("/");
          e.setStart(F[0], F[1]);
        }, children: e.state.homes.map((x) => (e.state.screens[x.id] || []).map((F, ke) => /* @__PURE__ */ o("option", { value: x.id + "/" + F.id, children: (e.state.homes.length > 1 ? x.name + " · " : "") + jt(F, ke) }, x.id + "/" + F.id))) })
      ] }),
      K.map((x) => /* @__PURE__ */ o("div", { class: "home-row", children: /* @__PURE__ */ o("div", { class: "home-row-head", children: [
        /* @__PURE__ */ o("input", { class: "home-input", value: x.name, onInput: (F) => ye(x.id, { name: F.currentTarget.value }) }),
        x.id !== ue && /* @__PURE__ */ o("button", { class: "icon-btn danger", title: d("homes.delete"), onClick: () => fe(K.filter((F) => F.id !== x.id)), children: /* @__PURE__ */ o(xt, { size: 16 }) })
      ] }) }, x.id)),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => fe(K.concat({ id: "h" + Date.now().toString(36), name: d("homes.new_name") })), children: /* @__PURE__ */ o("span", { children: d("homes.add") }) })
    ] }),
    h === "layout" && /* @__PURE__ */ o("div", { children: [
      e.card && e.cardError && /* @__PURE__ */ o("div", { class: "c-red small", children: d("sync.save_failed", { error: e.cardError }) }),
      re && /* @__PURE__ */ o(dh, { client: e.card.client }),
      /* @__PURE__ */ o("div", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: d("layout.title") }),
        /* @__PURE__ */ o("div", { class: "row-btns", children: [
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
            p(JSON.stringify(e.state.layout, null, 2)), _("");
          }, children: [
            /* @__PURE__ */ o(cl, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("layout.export") })
          ] }),
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => e.saveLayout(ns()), children: [
            /* @__PURE__ */ o(El, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("layout.reset") })
          ] })
        ] }),
        /* @__PURE__ */ o("textarea", { class: "json", value: m, placeholder: d("layout.import_placeholder"), onInput: (x) => p(x.currentTarget.value) }),
        y && /* @__PURE__ */ o("div", { class: "c-red small", children: y }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !m, onClick: we, children: /* @__PURE__ */ o("span", { children: d("layout.import") }) })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      h === "photos" && !e.card && s.length > 0 ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: () => e.clearPhotos(), children: [
        /* @__PURE__ */ o(xt, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("photos.delete_all") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: Be, children: d("common.done") })
    ] })
  ] });
}
function dh(t) {
  const [e, n] = w(null), [s, i] = w(""), [a, r] = w(!1);
  if (Q(() => {
    t.client.call({ type: "photoframe/frames" }).then(
      (h) => {
        const A = h.frames.filter((u) => u.frame_id !== wo() && Zo(u.grid));
        n(A), A.length && i(A[0].frame_id);
      },
      () => n([])
    );
  }, [t.client]), !e) return null;
  const c = e.filter((h) => h.frame_id === s)[0];
  return /* @__PURE__ */ o("div", { class: "field", children: [
    /* @__PURE__ */ o("span", { children: d("layout.grid_title") }),
    e.length === 0 ? /* @__PURE__ */ o("p", { class: "hint small", children: d("layout.grid_none") }) : /* @__PURE__ */ o(he, { children: [
      /* @__PURE__ */ o("select", { value: s, onChange: (h) => {
        i(h.currentTarget.value), r(!1);
      }, children: e.map((h) => /* @__PURE__ */ o("option", { value: h.frame_id, children: (h.name || h.frame_id) + (h.online ? "" : " · " + d("layout.grid_offline")) }, h.frame_id)) }),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !c, onClick: () => {
        le({ grid: Zo(c.grid) }), r(!0);
      }, children: /* @__PURE__ */ o("span", { children: d(a ? "layout.grid_done" : "layout.grid_take") }) })
    ] })
  ] });
}
function jn(t) {
  return /* @__PURE__ */ o("div", { class: "settings-section", children: [
    /* @__PURE__ */ o("div", { class: "section-title", children: t.title }),
    t.children
  ] });
}
function hh(t) {
  const e = Object.keys(Kt);
  return /* @__PURE__ */ o(tt, { title: d("editor.new_card"), onClose: t.onClose, children: /* @__PURE__ */ o("div", { class: "type-list", children: e.map((n) => {
    const s = Kt[n], i = Ze(s.icon);
    return /* @__PURE__ */ o("button", { class: "type-row", onClick: () => t.onPick({
      // Новая карточка встаёт в конец сетки; settle при сохранении поднимет её на свободное место.
      id: Xr(),
      type: n,
      title: "",
      icon: s.icon,
      x: 0,
      y: 999,
      w: n === "switches" ? 6 : 3,
      h: 3,
      items: []
    }), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(i, { size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: pt(n) }),
        /* @__PURE__ */ o("small", { children: es(n) })
      ] }),
      /* @__PURE__ */ o(Ue, { size: 18 })
    ] }, n);
  }) }) });
}
function Ah(t) {
  const e = X(), [n, s] = w(""), [i, a] = w(!1), [r, c] = w(t.cardType ? "devices" : "entities"), h = n.toLowerCase(), A = Object.keys(e.states).filter((l) => {
    if (t.exclude.indexOf(l) !== -1 || !i && !Re(e, l) || !i && t.domains.indexOf(l.split(".")[0]) === -1 || !i && t.match && !t.match(e.states[l])) return !1;
    if (!h) return !0;
    const m = String(e.states[l].attributes.friendly_name || "").toLowerCase();
    return l.indexOf(h) !== -1 || m.indexOf(h) !== -1;
  }).sort().slice(0, 150), u = t.cardType, f = u ? Object.keys(e.devices).map((l) => e.devices[l]).map((l) => ({
    dev: l,
    fit: l.entities.filter((m) => e.registry[m] && e.registry[m].ec == null && Re(e, m) && Co(u, e.states[m]))
  })).filter((l) => l.fit.length && (t.excludeDevices || []).indexOf(l.dev.id) === -1 && (!h || l.dev.name.toLowerCase().indexOf(h) !== -1)).sort((l, m) => l.dev.name.localeCompare(m.dev.name)) : [];
  return /* @__PURE__ */ o("div", { class: "picker", children: [
    u && /* @__PURE__ */ o("div", { class: "seg seg-wide picker-mode", children: [
      /* @__PURE__ */ o("button", { class: r === "devices" ? "active" : "", onClick: () => c("devices"), children: d("editor.devices") }),
      /* @__PURE__ */ o("button", { class: r === "entities" ? "active" : "", onClick: () => c("entities"), children: d("editor.entities") })
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-search", children: [
      /* @__PURE__ */ o(Sl, { size: 16 }),
      /* @__PURE__ */ o("input", { placeholder: d(r === "devices" ? "editor.search_device" : "editor.search_entity"), value: n, onInput: (l) => s(l.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Ye, { size: 18 }) })
    ] }),
    r === "entities" && /* @__PURE__ */ o("label", { class: "check", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: i, onChange: (l) => a(l.currentTarget.checked) }),
      " ",
      d("editor.show_all")
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-list", children: r === "devices" ? /* @__PURE__ */ o(he, { children: [
      f.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: Object.keys(e.devices).length ? d("editor.no_devices") : d("editor.loading_devices") }),
      f.map(({ dev: l, fit: m }) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPickDevice && t.onPickDevice(l.id, m[0]), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: l.name || m[0] }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: d("editor.count", { n: m.length }) }),
        /* @__PURE__ */ o("span", { class: "picker-id", children: m.slice(0, 4).map((p) => e.registry[p].en || e.states[p].attributes.friendly_name).join(" · ") })
      ] }, l.id))
    ] }) : /* @__PURE__ */ o(he, { children: [
      A.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: d("editor.nothing_found") }),
      A.map((l) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPick(l), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: e.states[l].attributes.friendly_name || l }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: e.states[l].state + (isNaN(parseFloat(e.states[l].state)) ? "" : Gt(e, l)) }),
        /* @__PURE__ */ o("span", { class: "picker-id mono", children: l })
      ] }, l))
    ] }) })
  ] });
}
const uh = ["cover", "width", "height"], fh = [[2, 2], [3, 3], [4, 3], [6, 3], [3, 6], [6, 6], [12, 3]];
function mh(t) {
  const e = X(), [n, s] = w(t.card), [i, a] = w(null), r = Kt[n.type], c = (f) => s({ ...n, ...f }), h = (f, l) => c({ items: n.items.map((m, p) => p === f ? { ...m, ...l } : m) }), A = (f, l) => {
    const m = f + l;
    if (m < 0 || m >= n.items.length) return;
    const p = n.items.slice();
    p[f] = n.items[m], p[m] = n.items[f], c({ items: p });
  }, u = Object.keys(dn);
  return /* @__PURE__ */ o(tt, { title: d("editor.card_title", { type: pt(n.type) }), onClose: t.onClose, children: [
    /* @__PURE__ */ o("label", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.name") }),
      /* @__PURE__ */ o("input", { value: n.title, placeholder: pt(n.type), onInput: (f) => c({ title: f.currentTarget.value }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.size") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: fh.map(([f, l]) => /* @__PURE__ */ o("button", { class: n.w === f && n.h === l ? "active" : "", onClick: () => c({ w: f, h: l }), children: [
        f,
        "×",
        l
      ] }, f + "x" + l)) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.color") }),
      /* @__PURE__ */ o("div", { class: "swatches", children: [
        /* @__PURE__ */ o("button", { class: "swatch swatch-auto" + (n.color ? "" : " active"), onClick: () => c({ color: void 0 }), title: d("editor.color_auto"), children: "A" }),
        Object.keys(dt).map((f) => /* @__PURE__ */ o("button", { class: "swatch" + (n.color === f ? " active" : ""), style: { background: dt[f] }, onClick: () => c({ color: f }) }, f))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.icon") }),
      /* @__PURE__ */ o("div", { class: "icon-grid", children: u.map((f) => {
        const l = dn[f];
        return /* @__PURE__ */ o("button", { class: n.icon === f ? "active" : "", onClick: () => c({ icon: f }), children: /* @__PURE__ */ o(l, { size: 18 }) }, f);
      }) })
    ] }),
    n.type === "cameras" && /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.camera_picture") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: uh.map((f) => /* @__PURE__ */ o("button", { class: (n.fit || "cover") === f ? "active" : "", onClick: () => c({ fit: f }), children: d("editor.fit." + f) }, f)) })
    ] }),
    n.type !== "cameras" && n.type !== "scenes" && /* @__PURE__ */ o("label", { class: "check check-row", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: !!n.chip, onChange: (f) => c({ chip: f.currentTarget.checked }) }),
      n.type === "weather" ? d("editor.weather_on_photo") : d("editor.chip_on_photo")
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.items", { n: n.items.length, hint: es(n.type).toLowerCase() }) }),
      i === null ? /* @__PURE__ */ o("div", { class: "items", children: [
        n.items.map((f, l) => {
          const m = Ze(f.icon || _o(f.entity, e.states[f.entity] && e.states[f.entity].attributes.device_class));
          return /* @__PURE__ */ o("div", { class: "item-block", children: [
            /* @__PURE__ */ o("div", { class: "item-row", children: [
              /* @__PURE__ */ o("button", { class: "item-icon", title: d("editor.change_icon"), onClick: () => {
                const p = u.indexOf(f.icon || "");
                h(l, { icon: u[(p + 1) % u.length] });
              }, children: /* @__PURE__ */ o(m, { size: 18 }) }),
              /* @__PURE__ */ o("div", { class: "item-main", children: [
                /* @__PURE__ */ o("input", { value: f.name || "", placeholder: f.device ? e.devices[f.device] ? e.devices[f.device].name : d("editor.device") : be(e, { entity: f.entity }), onInput: (p) => h(l, { name: p.currentTarget.value || void 0 }) }),
                f.device ? /* @__PURE__ */ o("span", { class: "mono", children: d("editor.device") }) : /* @__PURE__ */ o("span", { class: "mono", children: [
                  f.entity,
                  !Re(e, f.entity) && /* @__PURE__ */ o("em", { class: "na-tag", children: [
                    " · ",
                    d("editor.unavailable")
                  ] })
                ] }),
                n.type === "climate" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "hum" }), children: [
                  /* @__PURE__ */ o(Ve, { size: 12 }),
                  f.hum ? f.hum : d("editor.add_humidity")
                ] }),
                n.type === "ac" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "temp" }), children: [
                  /* @__PURE__ */ o(Ua, { size: 12 }),
                  f.temp ? f.temp : d("editor.room_sensor")
                ] })
              ] }),
              /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => A(l, -1), children: /* @__PURE__ */ o(Ss, { size: 16 }) }),
              /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => A(l, 1), children: /* @__PURE__ */ o(Ms, { size: 16 }) }),
              /* @__PURE__ */ o("button", { class: "icon-btn danger", onClick: () => c({ items: n.items.filter((p, y) => y !== l) }), children: /* @__PURE__ */ o(xt, { size: 16 }) })
            ] }),
            f.device && /* @__PURE__ */ o(ph, { it: f, type: n.type, onChange: (p) => h(l, p) })
          ] }, f.entity + l);
        }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => a("add"), children: [
          /* @__PURE__ */ o(Ue, { size: 16 }),
          /* @__PURE__ */ o("span", { children: n.type === "weather" && !n.items.length ? d("editor.pick_forecast") : d("editor.add_device") })
        ] })
      ] }) : /* @__PURE__ */ o(
        Ah,
        {
          domains: i === "add" ? r.domains : ["sensor"],
          match: i !== "add" ? (f) => f.attributes.device_class === (i.field === "hum" ? "humidity" : "temperature") : (f) => Co(n.type, f),
          exclude: n.items.map((f) => f.entity),
          cardType: i === "add" ? n.type : void 0,
          excludeDevices: n.items.map((f) => f.device || "").filter(Boolean),
          onPickDevice: (f, l) => {
            c({ items: n.items.concat({ entity: l, device: f }) }), a(null);
          },
          onClose: () => a(null),
          onPick: (f) => {
            i === "add" ? c({ items: n.items.concat({ entity: f }) }) : h(i.index, { [i.field]: f }), a(null);
          }
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      t.onDelete ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: t.onDelete, children: [
        /* @__PURE__ */ o(xt, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("common.delete") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: () => t.onSave(n), children: d("common.save") })
    ] })
  ] });
}
function ph(t) {
  const e = X(), n = t.it, s = n.skip || [], i = n.names || {}, a = lr(e, t.type, { ...n, skip: [], names: {} });
  if (!a.length) return /* @__PURE__ */ o("span", { class: "mono", children: d("editor.no_matching") });
  const r = a.map((u) => u.entity), c = (u, f) => {
    const l = r.slice(), m = l[u];
    l[u] = l[u + f], l[u + f] = m, t.onChange({ order: l });
  }, h = (u, f) => {
    const l = { ...i };
    f ? l[u] = f : delete l[u], t.onChange({ names: Object.keys(l).length ? l : void 0 });
  }, A = (u, f) => {
    const l = f ? s.filter((m) => m !== u) : s.concat(u);
    t.onChange({ skip: l.length ? l : void 0 });
  };
  return /* @__PURE__ */ o("div", { class: "device-parts", children: a.map((u, f) => {
    const l = s.indexOf(u.entity) === -1;
    return /* @__PURE__ */ o("div", { class: "device-part" + (l ? "" : " off"), children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: l, title: d(l ? "editor.part_hide" : "editor.part_show"), onChange: (m) => A(u.entity, m.currentTarget.checked) }),
      /* @__PURE__ */ o("input", { class: "part-name", value: i[u.entity] || "", placeholder: u.name || u.entity, onInput: (m) => h(u.entity, m.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: f === 0, onClick: () => c(f, -1), children: /* @__PURE__ */ o(Ss, { size: 14 }) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: f === a.length - 1, onClick: () => c(f, 1), children: /* @__PURE__ */ o(Ms, { size: 14 }) })
    ] }, u.entity);
  }) });
}
function gh({ thumb: t, sheet: e }) {
  const [n, s] = w({ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }), [i, a] = w(t ? [t] : []);
  po(() => {
    if (!e) return;
    const c = () => s({ x: e.offsetLeft, y: e.offsetTop, w: window.innerWidth, h: window.innerHeight });
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, [e]), Q(() => {
    t && i[i.length - 1] !== t && a(i.slice(-1).concat(t));
  }, [t]);
  const r = {
    left: -n.x - n.w * 0.05,
    top: -n.y - n.h * 0.05,
    width: n.w * 1.1,
    height: n.h * 1.1
  };
  return /* @__PURE__ */ o("div", { class: "sheet-glass", children: [
    i.map((c, h) => /* @__PURE__ */ o("div", { class: "glass-layer" + (h > 0 ? " fresh" : ""), style: { ...r, backgroundImage: "url(" + c + ")" } }, c.length + ":" + c.slice(-32))),
    /* @__PURE__ */ o("div", { class: "sheet-tint" })
  ] });
}
function bh({ card: t, tone: e, onCamera: n, onClose: s }) {
  const i = X(), a = se(null), [r, c] = w(null);
  po(() => {
    c(a.current);
  }, []);
  const h = ["switches", "scenes", "cameras", "ac", "speakers", "tv", "weather"].indexOf(t.type) !== -1;
  return /* @__PURE__ */ o("div", { class: "sheet-layer", onClick: s, children: /* @__PURE__ */ o("div", { ref: a, class: "sheet sheet-" + t.type + (h ? " sheet-wide" : "") + (t.color ? " tint-" + t.color : ""), onClick: (A) => A.stopPropagation(), children: [
    /* @__PURE__ */ o(gh, { thumb: e ? e.thumb : void 0, sheet: r }),
    /* @__PURE__ */ o("div", { class: "sheet-inner", children: [
      /* @__PURE__ */ o("div", { class: "panel-head", children: [
        /* @__PURE__ */ o("h2", { children: Mo(i, t) }),
        /* @__PURE__ */ o("div", { class: "sheet-actions", children: [
          /* @__PURE__ */ o(Ar, { card: t }),
          /* @__PURE__ */ o("button", { class: "sheet-close", onClick: s, children: /* @__PURE__ */ o(Ye, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ o(hr, { card: t, size: { w: h ? 600 : 420, h: 600 }, onCamera: n })
    ] })
  ] }) });
}
const gr = 36e5, qt = 24 * gr, br = { "24h": qt, "7d": 7 * qt, "30d": 30 * qt }, yh = ["binary_sensor", "switch", "light", "input_boolean", "fan", "lock", "cover", "media_player"], kh = ["on", "open", "unlocked", "playing", "home"];
function yr(t) {
  if (!t) return "line";
  if (yh.indexOf(t.entity_id.split(".")[0]) !== -1) return "timeline";
  const e = t.attributes.state_class;
  return e === "total" || e === "total_increasing" ? "bars" : isNaN(parseFloat(t.state)) ? "timeline" : "line";
}
function An(t) {
  return new Date(t).toISOString();
}
function wi(t) {
  return typeof t == "number" ? t : Date.parse(t);
}
function Nn(t, e, n, s) {
  return t.call({
    type: "history/history_during_period",
    start_time: An(n),
    end_time: An(s),
    entity_ids: [e],
    minimal_response: !0,
    no_attributes: !0
  }).then((i) => (i[e] || []).map((a) => ({ s: a.s, t: (a.lu || a.lc || 0) * 1e3 || n })));
}
function vi(t, e, n, s, i, a) {
  return t.call({
    type: "recorder/statistics_during_period",
    start_time: An(n),
    end_time: An(s),
    statistic_ids: [e],
    period: i,
    types: a
  }).then((r) => r[e] || []);
}
function _i(t) {
  const e = [];
  return t.forEach((n) => {
    const s = parseFloat(n.s);
    isNaN(s) || e.push({ t: n.t, v: s });
  }), e;
}
function xh(t, e, n) {
  const s = e.entity_id, i = yr(e), a = Date.now(), r = a - br[n], c = { kind: i, from: r, to: a, points: [], segments: [], bucketMs: 0 };
  if (i === "timeline")
    return Nn(t, s, r, a).then((h) => {
      const A = h.map((u, f) => ({
        from: Math.max(r, u.t),
        to: f + 1 < h.length ? h[f + 1].t : a,
        on: u.s === "unavailable" || u.s === "unknown" ? null : kh.indexOf(u.s) !== -1
      }));
      return { ...c, segments: A };
    });
  if (i === "bars") {
    const h = n === "24h" ? "hour" : "day";
    return vi(t, s, r, a, h, ["change"]).then((A) => ({
      ...c,
      bucketMs: h === "hour" ? gr : qt,
      points: A.filter((u) => u.change != null).map((u) => ({ t: wi(u.start), v: u.change }))
    }));
  }
  return n === "24h" ? Nn(t, s, r, a).then((h) => ({ ...c, points: _i(h) })) : vi(t, s, r, a, n === "7d" ? "hour" : "day", ["mean", "min", "max"]).then((h) => {
    const A = h.filter((u) => u.mean != null).map((u) => ({ t: wi(u.start), v: u.mean, min: u.min == null ? void 0 : u.min, max: u.max == null ? void 0 : u.max }));
    return A.length ? { ...c, points: A } : Nn(t, s, r, a).then((u) => ({ ...c, points: _i(u) }));
  });
}
function wh(t) {
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
  let n = e[0], s = e[0];
  e.forEach((r) => {
    (r.min != null ? r.min : r.v) < (n.min != null ? n.min : n.v) && (n = r), (r.max != null ? r.max : r.v) > (s.max != null ? s.max : s.v) && (s = r);
  });
  let i = 0, a = 0;
  return e.forEach((r, c) => {
    const h = c + 1 < e.length ? e[c + 1].t : t.to, A = Math.max(0, h - Math.max(r.t, t.from));
    i += r.v * A, a += A;
  }), {
    min: { t: n.t, v: n.min != null ? n.min : n.v },
    max: { t: s.t, v: s.max != null ? s.max : s.v },
    avg: a ? i / a : void 0
  };
}
function vh(t, e) {
  const n = t.registry[e], s = n && n.di ? t.devices[n.di] : void 0;
  return s ? Promise.resolve(s.entities.filter((i) => i !== e && t.registry[i].ec == null)) : Promise.resolve([]);
}
const _h = ["24h", "7d", "30d"], Ch = ["switch", "light", "fan", "input_boolean"];
function Fn(t, e) {
  const n = t.states[e];
  return String(n && n.attributes.friendly_name || e);
}
function Mh(t) {
  if (t.length < 2) return t;
  const e = t.map((s) => s.split(" "));
  let n = 0;
  for (; e.every((s) => s.length > n + 1 && s[n] === e[0][n]); ) n++;
  return e.map((s) => s.slice(n).join(" "));
}
function Eh(t) {
  const e = Math.round(t / 6e4), n = Math.floor(e / 1440), s = Math.floor(e % 1440 / 60), i = e % 60;
  return [n ? d("duration.days", { n }) : "", s || n ? d("duration.hours", { n: s }) : "", n ? "" : d("duration.minutes", { n: i })].filter(Boolean).join(" ");
}
function Sh({ entity: t }) {
  const e = X(), [n, s] = w(!1);
  Q(() => {
    if (!n) return;
    const r = setTimeout(() => s(!1), 4e3);
    return () => clearTimeout(r);
  }, [n]);
  const i = e.states[t] && e.states[t].state === "on", a = () => {
    if (i && !n) {
      s(!0);
      return;
    }
    s(!1), e.toggle(t);
  };
  return /* @__PURE__ */ o("button", { class: "btn " + (n ? "btn-danger" : i ? "btn-ghost" : "btn-accent"), onClick: a, children: [
    /* @__PURE__ */ o(kt, { size: 16 }),
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
function zh({ series: t, sum: e, unit: n, range: s, current: i }) {
  const a = n ? " " + n : "";
  if (t.kind === "timeline") {
    const r = t.to - t.from;
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(pe, { label: d("stat.now"), value: i }),
      /* @__PURE__ */ o(pe, { label: d("stat.turned_on"), value: String(e.onCount || 0), note: d("stat.times") }),
      /* @__PURE__ */ o(pe, { label: d("stat.on_time"), value: Eh(e.onMs || 0) }),
      /* @__PURE__ */ o(pe, { label: d("stat.on_share"), value: Math.round((e.onMs || 0) / r * 100) + "%" })
    ] });
  }
  if (t.kind === "bars") {
    const r = t.bucketMs >= 864e5 ? d("stat.avg_per_day") : d("stat.avg_per_hour");
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(pe, { label: d("stat.total"), value: e.total != null ? de(e.total) + a : "—" }),
      /* @__PURE__ */ o(pe, { label: r, value: e.avg != null ? de(e.avg) + a : "—" }),
      /* @__PURE__ */ o(
        pe,
        {
          label: d("stat.peak"),
          value: e.peak ? de(e.peak.v) + a : "—",
          note: e.peak ? t.bucketMs >= 864e5 ? wt(e.peak.t) : We(e.peak.t) : void 0
        }
      ),
      /* @__PURE__ */ o(pe, { label: d("stat.counter_now"), value: i })
    ] });
  }
  return /* @__PURE__ */ o("div", { class: "stats", children: [
    /* @__PURE__ */ o(pe, { label: d("stat.now"), value: i }),
    /* @__PURE__ */ o(pe, { label: d("stat.min"), value: e.min ? de(e.min.v) + a : "—", note: e.min ? De(e.min.t, s) : void 0 }),
    /* @__PURE__ */ o(pe, { label: d("stat.max"), value: e.max ? de(e.max.v) + a : "—", note: e.max ? De(e.max.t, s) : void 0 }),
    /* @__PURE__ */ o(pe, { label: d("stat.avg"), value: e.avg != null ? de(e.avg) + a : "—" })
  ] });
}
function Ih({ series: t, unit: e, range: n }) {
  const s = t.kind === "timeline" ? t.segments.slice().reverse().slice(0, 60).map((a) => [De(a.from, n), a.on ? d("switch.on") : a.on === null ? d("chart.no_connection") : d("switch.off"), "—"]) : t.points.slice().reverse().slice(0, 60).map((a) => [
    t.kind === "bars" && t.bucketMs >= 864e5 ? wt(a.t) : De(a.t, n),
    de(a.v) + (e ? " " + e : ""),
    a.min != null && a.max != null ? de(a.min) + " … " + de(a.max) : "—"
  ]), i = t.kind === "line" && t.points.some((a) => a.min != null);
  return /* @__PURE__ */ o("div", { class: "table-wrap", children: /* @__PURE__ */ o("table", { class: "diag", children: /* @__PURE__ */ o("tbody", { children: s.map((a, r) => /* @__PURE__ */ o("tr", { children: [
    /* @__PURE__ */ o("td", { children: a[0] }),
    /* @__PURE__ */ o("td", { class: "strong", children: a[1] }),
    i && /* @__PURE__ */ o("td", { class: "muted", children: a[2] })
  ] }, r)) }) }) });
}
function Dh(t) {
  const e = X(), [n, s] = w(t.entities[0]), [i, a] = w("24h"), [r, c] = w(null), [h, A] = w(""), [u, f] = w([]), [l, m] = w(!1), p = se(null), y = Eo(p).w || 600, _ = e.states[n], C = Gt(e, n).trim(), b = yr(_);
  Q(() => {
    vh(e, t.entities[0]).then((g) => f(g.filter((z) => !!e.states[z])), () => {
    });
  }, [t.entities[0]]), Q(() => {
    if (!_) return;
    let g = !0;
    return c(null), A(""), xh(e, _, i).then(
      (z) => {
        g && c(z);
      },
      (z) => {
        g && A(z.message);
      }
    ), () => {
      g = !1;
    };
  }, [n, i, e.status]);
  const k = t.entities.concat(u.filter((g) => t.entities.indexOf(g) === -1)).filter((g) => g === n || Re(e, g)), I = Mh(k.map((g) => Fn(e, g))), B = !_ || ft(_.state) ? d("sensor.no_data") : b === "timeline" ? _.state === "on" ? d("switch.on") : _.state === "off" ? d("switch.off") : _.state : de(parseFloat(_.state)) + (C ? " " + C : ""), S = n.split(".")[0];
  return S === "weather" ? /* @__PURE__ */ o(tt, { title: Fn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: p, children: /* @__PURE__ */ o(cr, { card: { id: "detail", type: "weather", title: "", x: 0, y: 0, w: 6, h: 6, items: [{ entity: n }] }, size: { w: y, h: 560 } }) }) }) : /* @__PURE__ */ o(tt, { title: Fn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: p, children: [
    /* @__PURE__ */ o("div", { class: "detail-hero", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ o("div", { class: "hero-value", children: B }),
        _ && /* @__PURE__ */ o("div", { class: "muted small", children: d("detail.updated", { when: De(Date.parse(_.last_changed || "") || Date.now(), "7d") }) })
      ] }),
      Ch.indexOf(S) !== -1 && _ && /* @__PURE__ */ o(Sh, { entity: n }, n)
    ] }),
    k.length > 1 && /* @__PURE__ */ o("div", { class: "chips", children: k.map((g, z) => {
      const O = e.states[g], D = !O || ft(O.state) ? "—" : isNaN(parseFloat(O.state)) ? O.state === "on" ? d("chip.state_on") : O.state === "off" ? d("chip.state_off") : O.state : de(parseFloat(O.state)) + Gt(e, g);
      return /* @__PURE__ */ o("button", { class: "chip" + (g === n ? " active" : ""), onClick: () => s(g), children: [
        /* @__PURE__ */ o("span", { children: I[z] }),
        /* @__PURE__ */ o("b", { children: D })
      ] }, g);
    }) }),
    /* @__PURE__ */ o("div", { class: "detail-tools", children: [
      /* @__PURE__ */ o("div", { class: "seg", children: _h.map((g) => /* @__PURE__ */ o("button", { class: g === i ? "active" : "", onClick: () => a(g), children: d("range." + g) }, g)) }),
      /* @__PURE__ */ o("button", { class: "chip-btn" + (l ? " on" : ""), onClick: () => m(!l), children: [
        /* @__PURE__ */ o(Ol, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("detail.table") })
      ] })
    ] }),
    h && /* @__PURE__ */ o("div", { class: "chart-empty c-red", children: d("detail.load_error", { error: h }) }),
    !h && !r && /* @__PURE__ */ o("div", { class: "chart-empty", children: d("common.loading") }),
    r && (l ? /* @__PURE__ */ o(Ih, { series: r, unit: C, range: i }) : /* @__PURE__ */ o(Yl, { series: r, unit: C, range: i, width: y })),
    r && /* @__PURE__ */ o(zh, { series: r, sum: wh(r), unit: C, range: i, current: B }),
    r && r.kind !== "timeline" && i !== "24h" && /* @__PURE__ */ o("div", { class: "muted small detail-foot", children: [
      r.kind === "bars" ? d("detail.foot_bars") : d(i === "7d" ? "detail.foot_hourly" : "detail.foot_daily"),
      " · ",
      d("detail.days", { n: Math.round(br[i] / 864e5) })
    ] })
  ] }) });
}
function kr(t, e, n) {
  const s = (i) => i.split(",").map((a) => t + a).join(",");
  return s(".accent-text") + "{color:" + e + "}" + s(".light.on .light-icon") + "{background:" + e + "}" + s(".light.on") + "{border-color:" + e + ";background:" + n + "}" + s(".seg .active") + "{background:" + n + ";color:" + e + "}" + s(".room-temp sup") + "{color:" + e + "}";
}
function Bh(t) {
  const e = parseInt(t.slice(1), 16);
  return "rgba(" + (e >> 16) + "," + (e >> 8 & 255) + "," + (e & 255) + ",0.2)";
}
const Th = Object.keys(dt).map((t) => kr(".tint-" + t + " ", dt[t], Bh(dt[t]))).join("");
function Oh() {
  const t = nt(), e = Jr(), n = Yi(), { settings: s, layout: i, sync: a, homes: r, active: c } = t.state;
  Q(() => t.start(), []);
  const h = go(() => new yo("", () => Promise.resolve("")), []), A = t.card ? t.card.client : t.haClient || h, [u, f] = w(""), l = (E) => {
    const H = r.findIndex((G) => G.id === c), Z = r[(H + E + r.length) % r.length];
    !Z || Z.id === c || (f(E > 0 ? "next" : "prev"), R(null), t.setActive(Z.id));
  }, m = (E) => {
    f(E > 0 ? "next" : "prev"), R(null), t.step(E);
  }, p = t.photoUrls, y = p.length, [_, C] = w(0), b = y ? p[_ % y] : "";
  Q(() => {
    const E = t.frameClient;
    if (!E || !b || /^(data|blob):/.test(b)) return;
    const H = b.replace(/^https?:\/\/[^/]+/, "");
    ht(E, { photo: decodeURIComponent(H.split("?")[0].split("/").pop() || ""), photo_url: H });
  }, [b, t.frameClient]), Q(() => {
    t.frameClient && ht(t.frameClient, { screen: c + "/" + t.state.screen });
  }, [c, t.state.screen, t.frameClient]);
  const [k, I] = w(t.ui.controls), [B, S] = w(t.ui.editing);
  Q(() => {
    t.ui.controls = k, t.ui.editing = B;
  }, [k, B]);
  const [g, z] = w(!1), [O, D] = w(""), T = se(0);
  Q(() => t.onCommand((E) => {
    if (E.command === "next_photo") C((H) => H + 1);
    else if (E.command === "show_panel") I(!0);
    else if (E.command === "show_photos")
      I(!1), R(null), D("");
    else if (E.command === "reload") location.reload();
    else if (E.command === "update_apk") wc();
    else if (E.command === "show_screen" && E.screen) {
      const H = E.screen.split("/");
      t.setActive(H[0], H[1]), I(!0);
    } else if (E.command === "show_camera" && E.entity) {
      const H = A.cameraStreamUrl(E.entity);
      if (!H) return;
      D(H), clearTimeout(T.current), T.current = window.setTimeout(() => D(""), (E.duration || 30) * 1e3);
    }
  }), [A]);
  const [L, R] = w(null), [P, ne] = w(null), [ae, v] = w(!1), [j, U] = w(null), [re, Y] = w(!0), [te, W] = w(""), N = Qc(te || void 0), q = L && i.cards.filter((E) => E.id === L)[0] || null, oe = a === "local" && !t.haClient;
  Q(() => {
    oe && z(!0);
  }, [oe]);
  const ce = t.screenOn || !!O;
  Q(() => zc(ce, t.brightness), [ce, t.brightness]), Q(() => Ic(() => t.wakeScreen()), []), Q(() => {
    if (y < 2 || !ce || k) return;
    const E = setInterval(() => C((H) => (H + 1) % y), s.slideIntervalMs);
    return () => clearInterval(E);
  }, [y, s.slideIntervalMs, ce, _, k]), Q(() => {
    if (!k) {
      zn(!0);
      return;
    }
    const E = we.current;
    let H = 0;
    const Z = () => {
      clearTimeout(H), H = window.setTimeout(() => zn(!1), 800);
    }, G = () => {
      clearTimeout(H), zn(!0);
    };
    return Z(), E && (E.addEventListener("touchstart", G), E.addEventListener("mousedown", G), E.addEventListener("touchend", Z), E.addEventListener("mouseup", Z)), () => {
      clearTimeout(H), E && (E.removeEventListener("touchstart", G), E.removeEventListener("mousedown", G), E.removeEventListener("touchend", Z), E.removeEventListener("mouseup", Z));
    };
  }, [k]);
  const [K, fe] = w(null), ve = Dr((E) => {
    y < 2 || (C((H) => (H % y + E + y) % y), fe((H) => ({ dir: E, key: H ? H.key + 1 : 1 })));
  }, [y]);
  Q(() => {
    if (!K) return;
    const E = setTimeout(() => fe(null), 700);
    return () => clearTimeout(E);
  }, [K]), Q(() => {
    let E = window.setTimeout(() => Y(!1), 8e3);
    const H = we.current, Z = () => {
      t.ui.controls || (Y(!0), clearTimeout(E), E = window.setTimeout(() => Y(!1), 5e3));
    };
    return H && (H.addEventListener("touchstart", Z), H.addEventListener("mousedown", Z)), () => {
      clearTimeout(E), H && (H.removeEventListener("touchstart", Z), H.removeEventListener("mousedown", Z));
    };
  }, []);
  const ye = g || !!O || !!P || ae || !!j, Be = ye || !!q, we = se(null), x = se(null), F = se(null), ke = se(null);
  Q(() => {
    const E = we.current;
    if (!E) return;
    const H = () => {
      E.scrollTop = 0, E.scrollLeft = 0;
    };
    return E.addEventListener("scroll", H), () => E.removeEventListener("scroll", H);
  }, []);
  const [me, ot] = w(!1);
  Rc({ root: we, controls: x, ambient: F, soft: ke }, k, I, !Be && !me, () => ot(!0), ve), Q(() => {
    if (Be || me) return;
    const E = (H) => {
      const Z = H.target;
      if (Z && /^(INPUT|TEXTAREA|SELECT)$/.test(Z.tagName)) return;
      const G = H.key || "";
      if (!k && (G === "ArrowLeft" || G === "Left")) ve(-1);
      else if (!k && (G === "ArrowRight" || G === "Right")) ve(1);
      else if (!k && (G === "ArrowUp" || G === "Up")) I(!0);
      else if (k && !B && (G === "ArrowDown" || G === "Down" || G === "Escape" || G === "Esc")) I(!1);
      else return;
      H.preventDefault();
    };
    return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
  }, [Be, me, k, B, ve]);
  const So = (k || !!q) && !ye && !B;
  Q(() => {
    if (!So || !s.idleSec) return;
    let E = 0;
    const H = () => {
      clearTimeout(E), E = window.setTimeout(() => {
        I(!1), R(null), t.goStart();
      }, s.idleSec * 1e3);
    }, Z = ["touchstart", "mousedown", "keydown"];
    return Z.forEach((G) => document.addEventListener(G, H)), H(), () => {
      clearTimeout(E), Z.forEach((G) => document.removeEventListener(G, H));
    };
  }, [So, s.idleSec]);
  const xr = (E) => {
    const H = i.cards.some((Ct) => Ct.id === E.id), Z = gt(E), G = H ? i.cards.map((Ct) => Ct.id === E.id ? Z : Ct) : i.cards.concat(Z);
    t.saveLayout({ ...i, cards: Pe(G, Z) }), ne(null);
  };
  return /* @__PURE__ */ o(Ji.Provider, { value: A, children: /* @__PURE__ */ o(Gi.Provider, { value: U, children: /* @__PURE__ */ o("div", { class: "root q-" + n, children: [
    /* @__PURE__ */ o("style", { children: Th + (N ? kr("", N.accent, N.accentSoft) : "") }),
    /* @__PURE__ */ o("div", { class: "app", ref: we, lang: e, children: [
      /* @__PURE__ */ o(ql, { urls: p, index: _ % Math.max(y, 1), tone: N, soft: k, softRef: ke, onShow: W }),
      /* @__PURE__ */ o(Jn.Provider, { value: !k, children: /* @__PURE__ */ o(
        Md,
        {
          visible: !k,
          innerRef: F,
          onSheet: (E) => R(E.id),
          onConnection: () => z(!0),
          showHint: re && !q,
          onHome: () => {
            Y(!1), I(!0);
          },
          photoThumb: N ? N.thumb : void 0,
          customizing: me,
          onDone: () => ot(!1)
        }
      ) }),
      K && /* @__PURE__ */ o("div", { class: "photo-step " + (K.dir > 0 ? "next" : "prev"), children: K.dir > 0 ? /* @__PURE__ */ o(Hs, { size: 40, strokeWidth: 1.6 }) : /* @__PURE__ */ o(Ls, { size: 40, strokeWidth: 1.6 }) }, K.key),
      /* @__PURE__ */ o(Jn.Provider, { value: k, children: /* @__PURE__ */ o(
        nh,
        {
          innerRef: x,
          visible: k,
          editing: B,
          onEditing: S,
          onPhotos: () => I(!1),
          onSettings: () => z(!0),
          onCamera: D,
          onEditCard: (E) => ne({ card: E, isNew: !1 }),
          homes: r,
          active: c,
          slide: u,
          onSwitchHome: l,
          onStep: m,
          onAddCard: () => v(!0)
        }
      ) })
    ] }),
    q && /* @__PURE__ */ o(bh, { card: q, tone: N, onCamera: D, onClose: () => R(null) }),
    /* @__PURE__ */ o(
      "div",
      {
        class: "screen-dim" + (ce ? "" : " asleep"),
        style: { opacity: Dc(ce, t.brightness) },
        onClick: ce ? void 0 : () => t.wakeScreen()
      }
    ),
    O && /* @__PURE__ */ o(oh, { url: O, onClose: () => D("") }),
    g && /* @__PURE__ */ o(
      lh,
      {
        onClose: () => z(!1)
      }
    ),
    ae && /* @__PURE__ */ o(hh, { onClose: () => v(!1), onPick: (E) => {
      v(!1), ne({ card: E, isNew: !0 });
    } }),
    P && /* @__PURE__ */ o(
      mh,
      {
        card: P.card,
        onSave: xr,
        onDelete: P.isNew ? void 0 : () => {
          t.saveLayout({ ...i, cards: Pe(i.cards.filter((E) => E.id !== P.card.id)) }), ne(null);
        },
        onClose: () => ne(null)
      }
    ),
    j && /* @__PURE__ */ o(Dh, { entities: j, onClose: () => U(null) }, j.join(","))
  ] }) }) });
}
class Lh extends yo {
  constructor() {
    super("", () => Promise.resolve("")), this.hass = null;
  }
  // HA присылает новый hass при каждом изменении любого состояния — просто перерисовываемся.
  setHass(e) {
    const n = !this.hass;
    this.hass = e, gn(e.language), e.states !== this.states && (this.states = e.states, this.loaded = !0, this.status !== "connected" ? this.setStatus("connected") : this.emit()), n && this.loadRegistry();
  }
  get isAdmin() {
    return !!(this.hass && this.hass.user && this.hass.user.is_admin);
  }
  fetch(e, n = {}) {
    const s = this.hass;
    if (s && s.fetchWithAuth) return s.fetchWithAuth(e, n);
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
  callService(e, n, s) {
    return this.hass ? (this.hass.callService(e.split(".")[0], n, s, { entity_id: e }).catch(() => {
    }), !0) : !1;
  }
  subscribeMessage(e, n) {
    if (!this.hass) return () => {
    };
    let s = null, i = !1;
    return this.hass.connection.subscribeMessage(n, e).then((a) => {
      i ? a().catch(() => {
      }) : s = a;
    }, () => {
    }), () => {
      i = !0, s && s().catch(() => {
      });
    };
  }
  // Тот же origin, что у HA: поток камеры по access_token камеры, картинки — относительными путями.
  cameraStreamUrl(e) {
    const n = this.states[e], s = n && n.attributes.access_token;
    return s ? "/api/camera_proxy_stream/" + e + "?token=" + s : "";
  }
  pictureUrl(e) {
    return e || "";
  }
}
function Ph(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Rn, Ci;
function Hh() {
  return Ci || (Ci = 1, Rn = {
    webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
    mp4: "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
  }), Rn;
}
var qn, Mi;
function Qh() {
  if (Mi) return qn;
  Mi = 1;
  const { webm: t, mp4: e } = Hh(), n = () => typeof navigator < "u" && parseFloat(
    ("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(
      navigator.userAgent
    ) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")
  ) < 10 && !window.MSStream, s = () => "wakeLock" in navigator;
  class i {
    constructor() {
      if (this.enabled = !1, s()) {
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
      return s() ? navigator.wakeLock.request("screen").then((r) => {
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
      s() ? (this._wakeLock && this._wakeLock.release(), this._wakeLock = null) : n() ? this.noSleepTimer && (console.warn(`
          NoSleep now disabled for older iOS devices.
        `), window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : this.noSleepVideo.pause(), this.enabled = !1;
    }
  }
  return qn = i, qn;
}
var jh = Qh();
const Nh = /* @__PURE__ */ Ph(jh);
let lo = null;
const Ei = new Nh();
function Vn() {
  const t = navigator.wakeLock;
  return !t || document.visibilityState !== "visible" ? Promise.resolve(!1) : t.request("screen").then(
    (e) => (lo = e, e.addEventListener("release", () => {
      lo = null;
    }), !0),
    () => !1
  );
}
let Si = !1;
function Fh() {
  if (Si || (Si = !0, /SmartFrame\//.test(navigator.userAgent))) return;
  Vn(), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && !lo && Vn();
  });
  const t = () => {
    document.removeEventListener("touchend", t), document.removeEventListener("click", t), Vn().then((e) => {
      !e && !Ei.isEnabled && Ei.enable().catch(() => {
      });
    });
  };
  document.addEventListener("touchend", t), document.addEventListener("click", t);
}
const Rh = ':host{display:block;position:relative;height:calc(100vh - var(--header-height, 56px));min-height:420px;overflow:hidden;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif;color:#f5f7fb;background:#000;border-radius:var(--ha-card-border-radius,0)}#app{position:absolute;top:0;left:0;right:0;bottom:0}';
class qh extends HTMLElement {
  constructor() {
    super(...arguments), this.client = new Lh(), this.backend = null, this.config = { type: "custom:photoframe-card" }, this.root = null, this.exitKiosk = null, this.offKiosk = null, this.offIntegration = null;
  }
  // Включить/выключить киоск по текущим настройкам. Фронтенд HA дорисовывается не сразу —
  // поэтому вызывается и при монтировании, и при каждом обновлении hass, пока не получится.
  syncKiosk() {
    const e = this.config.kiosk != null ? this.config.kiosk : !!(this.backend && this.backend.integration && this.backend.config.kiosk), n = this.isConnected && Zd(!!e);
    n && !this.exitKiosk && (this.exitKiosk = Kd()), !n && this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null);
  }
  setConfig(e) {
    this.config = e, this.backend && !this.backend.integration && (this.backend.config = e, ie.applyCardConfig(e)), this.syncKiosk();
  }
  set hass(e) {
    this.client.setHass(e), this.syncKiosk(), this.backend || (this.backend = new $t(this.client, this.config), ie.attachCard(this.backend), ss(this.client).then((n) => {
      if (!n) return;
      const s = new $t(this.client, n, void 0, !1, !0);
      this.backend = s, ie.attachCard(s), this.isConnected && !this.offIntegration && (this.offIntegration = s.watch((i) => ie.applyCardConfig(i))), this.syncKiosk();
    })), this.mount();
  }
  connectedCallback() {
    const e = this.backend;
    e && e.integration && !this.offIntegration && (this.offIntegration = e.watch((n) => ie.applyCardConfig(n))), this.mount(), this.offKiosk = Yd(() => this.syncKiosk()), this.syncKiosk();
  }
  disconnectedCallback() {
    this.root && Bo(null, this.root), this.root = null, this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null), this.offKiosk && (this.offKiosk(), this.offKiosk = null), this.offIntegration && (this.offIntegration(), this.offIntegration = null);
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
    n.textContent = Rh + zr;
    const s = document.createElement("div");
    s.id = "app", e.appendChild(n), e.appendChild(s), this.root = s, Bo(/* @__PURE__ */ o(Oh, {}), s), Fh();
  }
}
customElements.get("photoframe-card") || customElements.define("photoframe-card", qh);
console.info("%c PHOTO-FRAME %c v1.0.0 ", "color:#fff;background:#0891b2;font-weight:700", "color:#0891b2;background:#fff");
gc();
const ho = window;
ho.customCards = ho.customCards || [];
ho.customCards.push({
  type: "photoframe-card",
  name: "Smart Frame",
  description: "Photo frame with smart-home controls: photos, clock, weather and customizable cards",
  preview: !1
});
