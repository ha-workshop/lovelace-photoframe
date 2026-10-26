var It, F, ro, fe, vn, co, lo, Lt, tt, He, Ao, cn, Jt, Gt, ho, ht = {}, ut = [], xs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ye = Array.isArray;
function Ae(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function ln(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function pt(t, e, n) {
  var s, i, a, r = {};
  for (a in e) a == "key" ? s = e[a] : a == "ref" ? i = e[a] : r[a] = e[a];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? It.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (a in t.defaultProps) r[a] === void 0 && (r[a] = t.defaultProps[a]);
  return nt(t, r, s, i, null);
}
function nt(t, e, n, s, i) {
  var a = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++ro, __i: -1, __u: 0 };
  return i == null && F.vnode != null && F.vnode(a), a;
}
function he(t) {
  return t.children;
}
function ot(t, e) {
  this.props = t, this.context = e;
}
function xe(t, e) {
  if (e == null) return t.__ ? xe(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? xe(t) : null;
}
function vs(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, s = [], i = [], a = Ae({}, e);
    a.__v = e.__v + 1, F.vnode && F.vnode(a), An(t.__P, a, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, s, n ?? xe(e), !!(32 & e.__u), i), a.__v = e.__v, a.__.__k[a.__i] = a, bo(s, a, i), e.__e = e.__ = null, a.__e != n && uo(a);
  }
}
function uo(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), uo(t);
}
function Xt(t) {
  (!t.__d && (t.__d = !0) && fe.push(t) && !ft.__r++ || vn != F.debounceRendering) && ((vn = F.debounceRendering) || co)(ft);
}
function ft() {
  try {
    for (var t, e = 1; fe.length; ) fe.length > e && fe.sort(lo), t = fe.shift(), e = fe.length, vs(t);
  } finally {
    fe.length = ft.__r = 0;
  }
}
function po(t, e, n, s, i, a, r, c, A, d, u) {
  var p, l, f, m, x, E, w = s && s.__k || ut, b = e.length;
  for (A = ws(n, e, w, A, b), p = 0; p < b; p++) (f = n.__k[p]) != null && (l = f.__i != -1 && w[f.__i] || ht, f.__i = p, E = An(t, f, l, i, a, r, c, A, d, u), m = f.__e, f.ref && l.ref != f.ref && (l.ref && dn(l.ref, null, f), u.push(f.ref, f.__c || m, f)), x == null && m != null && (x = m), 4 & f.__u ? (A = fo(f, A, t), l.__e && (l.__e = null)) : typeof f.type == "function" && E !== void 0 ? A = E : m && (A = m.nextSibling), f.__u &= -7);
  return n.__e = x, A;
}
function ws(t, e, n, s, i) {
  var a, r, c, A, d, u = n.length, p = u, l = 0;
  for (t.__k = new Array(i), a = 0; a < i; a++) (r = e[a]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = t.__k[a] = nt(null, r, null, null, null) : Ye(r) ? r = t.__k[a] = nt(he, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? r = t.__k[a] = nt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : t.__k[a] = r, A = a + l, r.__ = t, r.__b = t.__b + 1, c = null, (d = r.__i = ks(r, n, A, p)) != -1 && (p--, (c = n[d]) && (c.__u |= 2)), c == null || c.__v == null ? (d == -1 && (i > u ? l-- : i < u && l++), typeof r.type != "function" && (r.__u |= 4)) : d != A && (d == A - 1 ? l-- : d == A + 1 ? l++ : (d > A ? l-- : l++, r.__u |= 4))) : t.__k[a] = null;
  if (p) for (a = 0; a < u; a++) (c = n[a]) != null && (2 & c.__u) == 0 && (c.__e == s && (s = xe(c)), _o(c, c));
  return s;
}
function fo(t, e, n) {
  var s, i;
  if (typeof t.type == "function") {
    for (s = t.__k, i = 0; s && i < s.length; i++) s[i] && (s[i].__ = t, e = fo(s[i], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = xe(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function mo(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Ye(t) ? t.some(function(n) {
    mo(n, e);
  }) : e.push(t)), e;
}
function ks(t, e, n, s) {
  var i, a, r, c = t.key, A = t.type, d = e[n], u = d != null && (2 & d.__u) == 0;
  if (d === null && c == null || u && c == d.key && A == d.type) return n;
  if (s > (u ? 1 : 0)) {
    for (i = n - 1, a = n + 1; i >= 0 || a < e.length; ) if ((d = e[r = i >= 0 ? i-- : a++]) != null && (2 & d.__u) == 0 && c == d.key && A == d.type) return r;
  }
  return -1;
}
function wn(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || xs.test(e) ? n : n + "px";
}
function Ge(t, e, n, s, i) {
  var a, r;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof s == "string" && (t.style.cssText = s = ""), s) for (e in s) n && e in n || wn(t.style, e, "");
    if (n) for (e in n) s && n[e] == s[e] || wn(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(Ao, "$1")), r = e.toLowerCase(), e = r in t || e == "onFocusOut" || e == "onFocusIn" ? r.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = n, n ? s ? n[He] = s[He] : (n[He] = cn, t.addEventListener(e, a ? Gt : Jt, a)) : t.removeEventListener(e, a ? Gt : Jt, a);
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
function kn(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[tt] == null) e[tt] = cn++;
      else if (e[tt] < n[He]) return;
      return n(F.event ? F.event(e) : e);
    }
  };
}
function An(t, e, n, s, i, a, r, c, A, d) {
  var u, p, l, f, m, x, E, w, b, B, O, T, I, _, y, k, z = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (A = !!(32 & n.__u), a = [c = e.__e = n.__e]), (u = F.__b) && u(e);
  e: if (typeof z == "function") {
    p = r.length;
    try {
      if (b = e.props, B = z.prototype && z.prototype.render, O = (u = z.contextType) && s[u.__c], T = u ? O ? O.props.value : u.__ : s, n.__c ? w = (l = e.__c = n.__c).__ = l.__E : (B ? e.__c = l = new z(b, T) : (e.__c = l = new ot(b, T), l.constructor = z, l.render = Ms), O && O.sub(l), l.state || (l.state = {}), l.__n = s, f = l.__d = !0, l.__h = [], l._sb = []), B && l.__s == null && (l.__s = l.state), B && z.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Ae({}, l.__s)), Ae(l.__s, z.getDerivedStateFromProps(b, l.__s))), m = l.props, x = l.state, l.__v = e, f) B && z.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), B && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (B && z.getDerivedStateFromProps == null && b !== m && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, T), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, T) === !1) {
          e.__v != n.__v && (l.props = b, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(S) {
            S && (S.__ = e);
          }), ut.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && r.push(l), c = xe(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, T), B && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(m, x, E);
        });
      }
      if (l.context = T, l.props = b, l.__P = t, l.__e = !1, I = F.__r, _ = 0, B) l.state = l.__s, l.__d = !1, I && I(e), u = l.render(l.props, l.state, l.context), ut.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, I && I(e), u = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++_ < 25);
      l.state = l.__s, l.getChildContext != null && (s = Ae(Ae({}, s), l.getChildContext())), B && !f && l.getSnapshotBeforeUpdate != null && (E = l.getSnapshotBeforeUpdate(m, x)), y = u != null && u.type === he && u.key == null ? yo(u.props.children) : u, c = po(t, Ye(y) ? y : [y], e, n, s, i, a, r, c, A, d), l.base = e.__e, e.__u &= -161, l.__h.length && r.push(l), w && (l.__E = l.__ = null);
    } catch (S) {
      if (r.length = p, e.__v = null, A || a != null) {
        if (S.then) {
          for (e.__u |= A ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          a != null && (a[a.indexOf(c)] = null), e.__e = c;
        } else if (a != null) for (k = a.length; k--; ) ln(a[k]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), S.then || go(e), F.__e(S, e, n);
    }
  } else a == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = Cs(n.__e, e, n, s, i, a, r, A, d);
  return (u = F.diffed) && u(e), 128 & e.__u ? void 0 : c;
}
function go(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(go));
}
function bo(t, e, n) {
  for (var s = 0; s < n.length; s++) dn(n[s], n[++s], n[++s]);
  F.__c && F.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      F.__e(a, i.__v);
    }
  });
}
function yo(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : Ye(t) ? t.map(yo) : t.constructor !== void 0 ? null : Ae({}, t);
}
function Cs(t, e, n, s, i, a, r, c, A) {
  var d, u, p, l, f, m, x, E = n.props || ht, w = e.props, b = e.type;
  if (b == "svg" ? i = "http://www.w3.org/2000/svg" : b == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((f = a[d]) && "setAttribute" in f == !!b && (b ? f.localName == b : f.nodeType == 3)) {
      t = f, a[d] = null;
      break;
    }
  }
  if (t == null) {
    if (b == null) return document.createTextNode(w);
    t = document.createElementNS(i, b, w.is && w), c && (F.__m && F.__m(e, a), c = !1), a = null;
  }
  if (b == null) E === w || c && t.data == w || (t.data = w);
  else {
    if (a = b == "textarea" && w.defaultValue != null ? null : a && It.call(t.childNodes), !c && a != null) for (E = {}, d = 0; d < t.attributes.length; d++) E[(f = t.attributes[d]).name] = f.value;
    for (d in E) f = E[d], d == "dangerouslySetInnerHTML" ? p = f : d == "children" || d in w || d == "value" && "defaultValue" in w || d == "checked" && "defaultChecked" in w || Ge(t, d, null, f, i);
    for (d in w) f = w[d], d == "children" ? l = f : d == "dangerouslySetInnerHTML" ? u = f : d == "value" ? m = f : d == "checked" ? x = f : c && typeof f != "function" || E[d] === f || Ge(t, d, f, E[d], i);
    if (u) c || p && (u.__html == p.__html || u.__html == t.innerHTML) || (t.innerHTML = u.__html), e.__k = [];
    else if (p && (t.innerHTML = ""), po(e.type == "template" ? t.content : t, Ye(l) ? l : [l], e, n, s, b == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, r, a ? a[0] : n.__k && xe(n, 0), c, A), a != null) for (d = a.length; d--; ) ln(a[d]);
    c && b != "textarea" || (d = "value", b == "progress" && m == null ? t.removeAttribute("value") : m != null && (m !== t[d] || b == "progress" && !m || b == "option" && m != E[d]) && Ge(t, d, m, E[d], i), d = "checked", x != null && x != t[d] && Ge(t, d, x, E[d], i));
  }
  return t;
}
function dn(t, e, n) {
  try {
    if (typeof t == "function") {
      var s = typeof t.__u == "function";
      s && t.__u(), s && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    F.__e(i, n);
  }
}
function _o(t, e, n) {
  var s, i;
  if (F.unmount && F.unmount(t), (s = t.ref) && (s.current && s.current != t.__e || dn(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount) try {
      s.componentWillUnmount();
    } catch (a) {
      F.__e(a, e);
    }
    s.base = s.__P = s.__n = null;
  }
  if (s = t.__k) for (i = 0; i < s.length; i++) s[i] && _o(s[i], e, n || typeof t.type != "function");
  n || ln(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ms(t, e, n) {
  return this.constructor(t, n);
}
function Cn(t, e, n) {
  var s, i, a, r;
  e == document && (e = document.documentElement), F.__ && F.__(t, e), i = (s = !1) ? null : e.__k, a = [], r = [], An(e, t = e.__k = pt(he, null, [t]), i || ht, ht, e.namespaceURI, i ? null : e.firstChild ? It.call(e.childNodes) : null, a, i ? i.__e : e.firstChild, s, r), bo(a, t, r), t.props.children = null;
}
function hn(t) {
  function e(n) {
    var s, i;
    return this.getChildContext || (s = /* @__PURE__ */ new Set(), (i = {})[e.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      s = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && s.forEach(function(r) {
        r.__e = !0, Xt(r);
      });
    }, this.sub = function(a) {
      s.add(a);
      var r = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        s && s.delete(a), r && r.call(a);
      };
    }), n.children;
  }
  return e.__c = "__cC" + ho++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, s) {
    return n.children(s);
  }).contextType = e, e;
}
It = ut.slice, F = { __e: function(t, e, n, s) {
  for (var i, a, r; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(t)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), r = i.__d), r) return i.__E = i;
  } catch (c) {
    t = c;
  }
  throw t;
} }, ro = 0, ot.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ae({}, this.state), typeof t == "function" && (t = t(Ae({}, n), this.props)), t && Ae(n, t), t != null && this.__v && (e && this._sb.push(e), Xt(this));
}, ot.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Xt(this));
}, ot.prototype.render = he, fe = [], co = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, lo = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, ft.__r = 0, Lt = Math.random().toString(8), tt = "__d" + Lt, He = "__a" + Lt, Ao = /(PointerCapture)$|Capture$/i, cn = 0, Jt = kn(!1), Gt = kn(!0), ho = 0;
var Es = 0;
function o(t, e, n, s, i, a) {
  e || (e = {});
  var r, c, A = e;
  if ("ref" in A) for (c in A = {}, e) c == "ref" ? r = e[c] : A[c] = e[c];
  var d = { type: t, props: A, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Es, __i: -1, __u: 0, __source: i, __self: a };
  if (typeof t == "function" && (r = t.defaultProps)) for (c in r) A[c] === void 0 && (A[c] = r[c]);
  return F.vnode && F.vnode(d), d;
}
const Ss = ':root{--ink: #f5f7fb;--ink-2: rgba(245, 247, 251, .72);--ink-3: rgba(245, 247, 251, .48);--panel: rgba(12, 14, 22, .42);--panel-line: rgba(255, 255, 255, .09);--chip: rgba(255, 255, 255, .1);--chip-line: rgba(255, 255, 255, .14);--warm: #fbbf24;--red: #fb7185;--green: #34d399;--ease: cubic-bezier(.2, .7, .2, 1)}*{box-sizing:border-box;margin:0;padding:0;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}html,body,#app{height:100%}body{background:#000;color:#f5f7fb;overflow:hidden;font-family:Inter,Roboto,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}button,input,select{font:inherit;color:inherit;border:0;background:none;outline:none}button{cursor:pointer}svg{display:block;flex-shrink:0}.app{position:relative;height:100%;overflow:hidden}.backdrop{position:absolute;inset:0;overflow:hidden}.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transform:scale(1);transition:opacity 2s ease-in-out,transform 20s linear}.slide.active{opacity:1;transform:scale(1.08)}.aurora{background:radial-gradient(ellipse at 20% 30%,rgba(56,189,248,.35) 0%,transparent 55%),radial-gradient(ellipse at 80% 70%,rgba(168,85,247,.32) 0%,transparent 55%),radial-gradient(ellipse at 60% 10%,rgba(251,191,36,.18) 0%,transparent 50%),#05060c}.soft{position:absolute;inset:-5%;background-size:cover;background-position:center;opacity:0;transition:opacity .6s cubic-bezier(.2,.7,.2,1)}.soft.on{opacity:1}.shade{position:absolute;inset:0;background:linear-gradient(to bottom,#00000040,#0000 30%,#00000026 55%,#000000b3);transition:background-color .6s cubic-bezier(.2,.7,.2,1)}.shade.deep{background-color:#04060c61}.ambient{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;padding:0 5vw 9vh;opacity:0;transform:translateY(-80px);pointer-events:none}.ambient.visible{opacity:1;transform:none}.ambient-clock{text-shadow:0 2px 30px rgba(0,0,0,.35)}.ambient-time{font-size:22vh;font-weight:200;letter-spacing:-.04em;line-height:.9}.ambient-date{margin-top:2vh;font-size:3vh;font-weight:400;color:#f5f7fbb8;letter-spacing:.01em}.glances{display:flex;flex-wrap:wrap;justify-content:flex-end;max-width:50%;margin-bottom:1vh}.glance{pointer-events:auto;cursor:pointer;transition:transform .15s,background .2s;display:flex;align-items:center;margin:6px 0 0 8px;padding:9px 16px 9px 13px;border-radius:999px;background:#00000052;border:1px solid rgba(255,255,255,.14);font-size:15px;font-weight:500;color:#f5f7fb}.glance:active{transform:scale(.94);background:#00000080}.glance svg{margin-right:8px;color:#f5f7fbb8}.glance.lit svg{color:#fbbf24}.glance.alert{background:#e11d488c;border-color:#fb718599}.glance.alert svg,.glance.warn svg{color:#fff}.glance.warn{background:#d9770680}.ambient{transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1)}.grabber{position:absolute;left:0;right:0;bottom:10px;bottom:max(10px,env(safe-area-inset-bottom));display:flex;flex-direction:column;align-items:center}.grabber-text{font-size:13px;color:#f5f7fbb8;letter-spacing:.03em;margin-bottom:10px;opacity:0;transition:opacity 1s;-webkit-animation:nudge 2.4s ease-in-out infinite;animation:nudge 2.4s ease-in-out infinite}.grabber-text.visible{opacity:1}.grabber-bar{width:134px;height:5px;border-radius:3px;background:#ffffffb3;box-shadow:0 0 12px #0000004d}@-webkit-keyframes nudge{0%,60%,to{-webkit-transform:translateY(0)}30%{-webkit-transform:translateY(-6px)}}@keyframes nudge{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-6px)}}.dragging .ambient,.dragging .controls,.dragging .soft{transition:none}.dragging .controls{pointer-events:none}.grabber-top{display:flex;justify-content:center;margin:-10px 0 8px;padding:4px 0}.grabber-top .grabber-bar{width:60px;height:4px;background:#ffffff59;box-shadow:none}.controls{position:absolute;inset:0;display:flex;flex-direction:column;padding:22px 28px 28px;padding-top:max(22px,env(safe-area-inset-top));padding-left:max(28px,env(safe-area-inset-left));padding-right:max(28px,env(safe-area-inset-right));padding-bottom:max(28px,env(safe-area-inset-bottom));opacity:0;transform:translateY(60px);transition:opacity .45s cubic-bezier(.2,.7,.2,1),transform .45s cubic-bezier(.2,.7,.2,1);pointer-events:none}.controls.visible{opacity:1;transform:none;pointer-events:auto}.bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.bar-time{display:flex;align-items:baseline}.bar-clock{font-size:38px;font-weight:300;letter-spacing:-.03em}.bar-date{margin-left:14px;font-size:15px;color:#f5f7fbb8}.bar-actions{display:flex;align-items:center}.conn{display:flex;align-items:center;margin-right:14px;font-size:13px;color:#f5f7fbb8}.conn i{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#fbbf24}.conn-connected i{background:#34d399;box-shadow:0 0 10px #34d399}.conn-auth_invalid i,.conn-disconnected i{background:#fb7185}.round{width:48px;height:48px;margin-left:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);transition:transform .15s}.round:active{transform:scale(.92)}.round.accent{background:#7dd3fc;color:#0b0d14;border-color:transparent}.grid{position:relative;flex:1;min-height:0;margin:-16px;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.grid::-webkit-scrollbar{display:none}.grid-inner{position:relative}.cell{position:absolute;display:flex;transition:left .22s cubic-bezier(.2,.7,.2,1),top .22s cubic-bezier(.2,.7,.2,1),width .22s cubic-bezier(.2,.7,.2,1),height .22s cubic-bezier(.2,.7,.2,1)}.cell.dragged{z-index:20;transition:none;-webkit-animation:none;animation:none}.cell.dragged .panel{box-shadow:0 30px 60px #0000008c;border-color:#ffffff80}.drop-slot{position:absolute;border-radius:28px;border:2px dashed rgba(255,255,255,.45);background:#ffffff14;transition:left .15s,top .15s,width .15s,height .15s}.grid-dots{position:absolute;inset:0}.grid-dot{position:absolute;border-radius:10px;background:#ffffff09}.grid-note{font-size:12px;color:#f5f7fb7a;margin-bottom:10px}.editing .cell{cursor:move}.dragging-card,.dragging-card *{cursor:-webkit-grabbing;cursor:grabbing}.badge-btn{position:absolute;top:-8px;width:28px;height:28px;border-radius:50%;z-index:2;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.25);box-shadow:0 4px 12px #0006}.badge-del{left:-8px;background:#3f3f46;color:#fff}.badge-edit{right:-8px;background:#e5e7eb;color:#111}.resize-handle{position:absolute;right:2px;bottom:2px;width:30px;height:30px;cursor:nwse-resize;z-index:2;border-right:3px solid rgba(255,255,255,.85);border-bottom:3px solid rgba(255,255,255,.85);border-bottom-right-radius:24px}.size-tag{position:absolute;left:50%;bottom:10px;padding:3px 8px;border-radius:8px;z-index:2;transform:translate(-50%);background:#0000008c;font-size:11px;font-weight:600;color:#f5f7fbb8}.cell>.panel{flex:1;min-width:0}.panel-body{flex:1;min-height:0;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.panel-body::-webkit-scrollbar,.lights::-webkit-scrollbar{display:none}.card-empty{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;font-size:13px;color:#f5f7fb7a;padding:0 12px}.panel{display:flex;flex-direction:column;min-height:0;background:#0c0e166b;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:20px 22px;box-shadow:0 20px 50px #00000040}.panel-head{display:flex;align-items:center;justify-content:space-between;min-height:30px;margin-bottom:14px}.panel-head h2{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#f5f7fbb8}.home-pane{flex:1;min-height:0;display:flex;flex-direction:column}.slide-next{-webkit-animation:in-next .35s cubic-bezier(.2,.7,.2,1);animation:in-next .35s cubic-bezier(.2,.7,.2,1)}.slide-prev{-webkit-animation:in-prev .35s cubic-bezier(.2,.7,.2,1);animation:in-prev .35s cubic-bezier(.2,.7,.2,1)}@-webkit-keyframes in-next{0%{opacity:0;-webkit-transform:translateX(60px)}}@keyframes in-next{0%{opacity:0;transform:translate(60px)}}@-webkit-keyframes in-prev{0%{opacity:0;-webkit-transform:translateX(-60px)}}@keyframes in-prev{0%{opacity:0;transform:translate(-60px)}}.home-switch{display:flex;flex-direction:column;align-items:center;padding:6px 14px;border-radius:14px}.home-switch:active{background:#ffffff14}.home-name{font-size:15px;font-weight:600}.home-dots{display:flex;margin-top:5px}.home-dots i{width:6px;height:6px;border-radius:50%;margin:0 3px;background:#ffffff4d}.home-dots i.on{background:#fff}.editing .cell{-webkit-animation:jiggle .9s ease-in-out infinite;animation:jiggle .9s ease-in-out infinite}.editing div:nth-child(2n)>.cell{-webkit-animation-delay:-.45s;animation-delay:-.45s}.editing .cell .panel{border:1px dashed rgba(255,255,255,.35)}.editing .cell .panel-body{pointer-events:none;opacity:.45}@-webkit-keyframes jiggle{0%,to{-webkit-transform:rotate(-.35deg)}50%{-webkit-transform:rotate(.35deg)}}@keyframes jiggle{0%,to{transform:rotate(-.35deg)}50%{transform:rotate(.35deg)}}.icon-btn.danger{color:#fb7185}.pill-btn{margin-left:10px;display:flex;align-items:center;height:44px;padding:0 18px;border-radius:999px;color:#0b0d14;font-weight:600;background:#7dd3fc}.pill-btn svg{margin-right:6px}.rooms{flex:1;display:flex;flex-direction:column;justify-content:space-around}.rooms.compact .room{padding:4px 0}.rooms.compact .room-temp{font-size:28px}.rooms.compact .room-name{font-size:12px}.room{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.09)}.room:last-child{border-bottom:0}.room-name{font-size:14px;color:#f5f7fbb8}.room-vals{display:flex;align-items:baseline;justify-content:space-between;margin-top:2px}.room-temp{font-size:46px;font-weight:200;letter-spacing:-.03em;line-height:1.05}.room-temp sup{font-size:.5em;font-weight:300;vertical-align:top;position:relative;top:.25em;margin-left:2px;color:#7dd3fc}.room-hum{display:flex;align-items:center;font-size:15px;color:#f5f7fbb8}.room-hum svg{margin-right:4px;color:#7dd3fc}.chip-btn{display:flex;align-items:center;padding:7px 12px;border-radius:999px;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);font-size:13px;font-weight:500}.chip-btn svg{margin-right:6px}.lights{flex:1;min-height:0;display:flex;flex-wrap:wrap;align-content:flex-start;margin:-5px;overflow-y:auto;-webkit-overflow-scrolling:touch}.cols-1 .light{width:calc(100% - 10px)}.cols-2 .light{width:calc(50% - 10px)}.cols-3 .light{width:calc(33.333% - 10px)}.cols-4 .light{width:calc(25% - 10px)}.cols-5 .light{width:calc(20% - 10px)}.lights.compact .light{min-height:70px;padding:10px 12px}.lights.compact .light-icon{width:30px;height:30px;margin-bottom:6px}.light{width:calc(50% - 10px);margin:5px;min-height:96px;flex-grow:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:14px;border-radius:20px;text-align:left;background:#ffffff0f;border:1px solid rgba(255,255,255,.07);transition:background .25s,border-color .25s,transform .15s,box-shadow .25s}.light:active{transform:scale(.96)}.light-icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;color:#f5f7fbb8;margin-bottom:12px;transition:background .25s,color .25s,box-shadow .25s}.light-name{font-size:15px;font-weight:500;line-height:1.2}.light-state{font-size:12px;color:#f5f7fb7a;margin-top:3px}.light.on{background:#fbbf2429;border-color:#fbbf2480;box-shadow:0 0 30px #fbbf241f}.light.on .light-icon{background:#fbbf24;color:#1a1205;box-shadow:0 0 22px #fbbf248c}.light.on .light-state{color:#f5f7fbb8}.light.na{opacity:.45}.seg{display:flex;background:#00000040;border-radius:999px;padding:3px}.seg button{padding:5px 12px;border-radius:999px;font-size:12px;font-weight:500;color:#f5f7fbb8}.seg .active{background:#ffffff24;color:#f5f7fb}.cam-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.seg-inline{align-self:flex-start;margin-bottom:10px}.cam{position:relative;flex:1;min-height:120px;border-radius:18px;overflow:hidden;background:#00000073;cursor:pointer}.cam img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.cam.fit-width img{top:50%;height:auto;transform:translateY(-50%)}.cam.fit-height img{left:50%;width:auto;transform:translate(-50%)}.cam.fit-width,.cam.fit-height{background:#000}.cam-empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:13px}.cam-empty svg{margin-bottom:8px}.live{position:absolute;top:10px;left:10px;display:flex;align-items:center;padding:3px 8px;border-radius:6px;background:#00000080;font-size:10px;font-weight:700;letter-spacing:.08em}.live i{width:6px;height:6px;border-radius:50%;background:#fb7185;margin-right:5px;-webkit-animation:pulse 1.6s infinite;animation:pulse 1.6s infinite}@-webkit-keyframes pulse{50%{opacity:.3}}@keyframes pulse{50%{opacity:.3}}.status-row{display:flex;align-items:center;padding:10px 0;color:#f5f7fbb8}.status-row+.status-row{border-top:1px solid rgba(255,255,255,.09)}.status-icon{width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#34d39926;color:#34d399;margin-right:12px}.status-text{flex:1;display:flex;flex-direction:column;min-width:0}.status-text b{font-size:14px;font-weight:500;color:#f5f7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.status-text small{font-size:12px;color:#f5f7fb7a;margin-top:2px}.status-row.alert .status-icon{background:#fb718533;color:#fb7185}.status-row.alert small{color:#fb7185}.sheet-layer{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 5vw 9vh;padding-bottom:calc(9vh + 56px);background:linear-gradient(to top,#00000059,#0000 60%);-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease}.sheet{position:relative;width:460px;max-width:100%;max-height:72vh;overflow:hidden;border-radius:30px;border:1px solid rgba(255,255,255,.16);box-shadow:0 30px 80px #00000073;transform-origin:100% 100%;-webkit-animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1);animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1)}.sheet-wide{width:640px}.sheet .lights{overflow:visible}.sheet-cameras .cam{height:300px;flex:none}.sheet-glass{position:absolute;inset:0;overflow:hidden;background:#10131c}.glass-layer{position:absolute;background-size:cover;background-position:center}.glass-layer.fresh{-webkit-animation:fade-in 1.2s ease;animation:fade-in 1.2s ease}.sheet-tint{position:absolute;inset:0;background:#0a0c1480}.sheet-inner{position:relative;padding:20px 22px 22px;max-height:72vh;overflow-y:auto;-webkit-overflow-scrolling:touch}.sheet .rooms .room{padding:12px 0}.sheet-actions{display:flex;align-items:center}.sheet-close{width:32px;height:32px;margin-left:8px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1f;color:#f5f7fbb8}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes sheet-in{0%{opacity:0;-webkit-transform:translateY(24px) scale(.92)}}@keyframes sheet-in{0%{opacity:0;transform:translateY(24px) scale(.92)}}.modal{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:16px;background:#0009}.modal-box{width:100%;max-width:560px;max-height:92%;overflow-y:auto;-webkit-overflow-scrolling:touch;background:#141620f7;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:24px;box-shadow:0 30px 80px #0009}.modal-wide{max-width:960px}.modal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.modal-head h2{font-size:19px;font-weight:600}.modal-title{display:flex;align-items:center}.modal-title svg{margin-right:10px;color:#7dd3fc}.icon-btn{color:#f5f7fb7a}.cam-full{border-radius:18px;overflow:hidden;background:#000}.cam-full img{display:block;width:100%;max-height:72vh;object-fit:contain}.tabs{display:flex;padding:4px;margin-bottom:18px;border-radius:14px;background:#ffffff0d}.tabs button{flex:1;padding:9px;border-radius:10px;font-size:14px;font-weight:500;color:#f5f7fbb8}.tabs .active{background:#ffffff1a;color:#f5f7fb}.modal-box .hint{position:static;opacity:1;text-align:left;font-size:13px;color:#f5f7fb7a;letter-spacing:0;margin-bottom:14px;line-height:1.45}.modal-box .hint.small{font-size:12px;margin:4px 0 0;text-align:center}.drop-zone{position:relative;display:block;text-align:center;padding:26px 16px;margin-bottom:14px;border:2px dashed rgba(255,255,255,.16);border-radius:20px;background:#ffffff08}.drop-zone svg{margin:0 auto 8px}.drop-zone input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.drop-zone.busy{opacity:.6}.drop-zone.over{border-color:#7dd3fc;background:#7dd3fc14}.upload-error{margin:-6px 0 12px}.drop-title{font-size:14px;font-weight:500}.thumbs{display:flex;flex-wrap:wrap;margin:0 -4px 10px}.thumb{position:relative;width:72px;height:72px;margin:4px;border-radius:12px;background-size:cover;background-position:center}.thumb-del{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#000000a6}.option{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-top:1px solid rgba(255,255,255,.09);font-size:14px;color:#f5f7fbb8}.option select{padding:8px 12px;border-radius:10px;background:#ffffff14;color:#f5f7fb;font-size:13px}.option select option{color:#000}.field{display:block;margin-bottom:14px}.field span{display:block;font-size:12px;color:#f5f7fb7a;margin-bottom:6px}.field input{width:100%;padding:13px 14px;border-radius:12px;font-size:15px;background:#ffffff0f;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text}.field input:focus{border-color:#7dd3fc}.diag-head{display:flex;align-items:center;font-size:12px;color:#f5f7fb7a;margin:8px 0}.diag-head svg{margin-right:6px}.table-wrap{max-height:240px;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:12px;background:#0003}.diag{width:100%;border-collapse:collapse;font-size:12px}.diag td{padding:7px 10px;border-bottom:1px solid rgba(255,255,255,.09);word-break:break-all}.mono{font-family:Menlo,Roboto Mono,monospace}.strong{font-weight:600}.muted{color:#f5f7fb7a}.modal-foot{display:flex;justify-content:space-between;align-items:center;margin-top:18px}.btn{display:flex;align-items:center;padding:11px 18px;border-radius:14px;font-size:14px;font-weight:600}.btn svg{margin-right:6px}.btn-accent{background:#7dd3fc;color:#0b0d14}.btn-danger{background:#fb71851f;color:#fb7185}.type-list .type-row{display:flex;align-items:center;width:100%;padding:12px 6px;text-align:left;color:#f5f7fbb8;border-bottom:1px solid rgba(255,255,255,.09)}.type-list .type-row:last-child{border-bottom:0}.seg-wide{align-self:flex-start;display:inline-flex}.seg-wide button{padding:7px 16px;font-size:13px}.swatches{display:flex;flex-wrap:wrap}.swatch{width:34px;height:34px;border-radius:50%;margin:0 8px 6px 0;border:2px solid transparent}.swatch.active{border-color:#fff;box-shadow:0 0 0 2px #00000080 inset}.swatch-auto{background:#ffffff1a;font-size:12px;font-weight:700;color:#f5f7fbb8}.icon-grid{display:flex;flex-wrap:wrap;margin:0 -3px}.icon-grid button{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0d;color:#f5f7fbb8}.icon-grid .active{background:#fff3;color:#f5f7fb}.check{display:flex;align-items:center;font-size:14px;color:#f5f7fbb8;margin:6px 0 10px}.check input{margin-right:10px;width:18px;height:18px}.check-row{padding:10px 0;border-top:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.09);margin-bottom:14px}.items{border-radius:14px;background:#0003;padding:4px 8px 8px}.item-row{display:flex;align-items:center;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.09)}.item-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ffffff14;margin-right:10px;flex-shrink:0}.item-main{flex:1;min-width:0;display:flex;flex-direction:column}.item-main input{padding:6px 8px;margin-left:-8px;border-radius:8px;font-size:14px;-webkit-user-select:text;user-select:text}.item-main input:focus{background:#ffffff0f}.item-main .mono{font-size:11px;color:#f5f7fb7a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item-row .icon-btn{width:32px;height:32px;display:flex;align-items:center;justify-content:center}.na-tag{font-style:normal;color:#fb7185}.link{display:flex;align-items:center;font-size:11px;color:#7dd3fc;margin-top:3px;text-align:left}.link svg{margin-right:4px}.btn-ghost{margin-top:8px;background:#ffffff14;color:#f5f7fb;font-weight:500}.btn[disabled]{opacity:.4}.picker{border-radius:14px;background:#00000040;padding:8px}.picker-search{display:flex;align-items:center;padding:4px 6px;border-radius:10px;background:#ffffff12;color:#f5f7fb7a}.picker-search input{flex:1;padding:8px;border:0;background:none;font-size:14px;color:#f5f7fb;-webkit-user-select:text;user-select:text}.picker .check{margin:8px 4px;font-size:13px}.picker-mode{margin-bottom:8px}.picker-list{max-height:260px;overflow-y:auto;-webkit-overflow-scrolling:touch}.picker-row{display:flex;flex-wrap:wrap;align-items:baseline;width:100%;padding:9px 6px;text-align:left;border-bottom:1px solid rgba(255,255,255,.09)}.picker-row:active{background:#ffffff14}.picker-name{flex:1;font-size:14px}.picker-state{font-size:12px;color:#f5f7fb7a;margin-left:8px}.picker-id{width:100%;font-size:11px;color:#f5f7fb7a;margin-top:2px}.picker-empty{padding:16px;text-align:center}.home-row{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.09)}.home-row-head{display:flex;align-items:center;margin-bottom:8px}.home-input{flex:1;min-width:0;padding:8px 10px;border-radius:10px;font-size:15px;font-weight:600;background:#ffffff0f;-webkit-user-select:text;user-select:text}.main-check{margin:0 8px 0 12px;font-size:13px;white-space:nowrap}.home-ha input{display:block;width:100%;margin-top:8px;padding:10px 12px;border-radius:10px;font-size:14px;background:#ffffff0f;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text}.sync-state{display:flex;align-items:center;padding:12px 14px;border-radius:12px;background:#ffffff0d;font-size:13px;margin-bottom:16px;color:#f5f7fbb8}.sync-state i{width:8px;height:8px;border-radius:50%;margin-right:10px;background:#fbbf24;flex-shrink:0}.sync-synced i{background:#34d399;box-shadow:0 0 8px #34d399}.sync-offline i{background:#fb7185}.sync-local i{background:#f5f7fb7a}.row-btns{display:flex}.row-btns .btn{margin:0 8px 8px 0}.json{display:block;width:100%;height:120px;padding:10px;border-radius:12px;font:12px Menlo,monospace;color:#f5f7fb;background:#0000004d;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text;resize:vertical}.c-red{color:#fb7185}.small{font-size:12px}.ac-wrap,.media-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.ac{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-main{display:flex;align-items:center}.ac-step{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;border:1px solid rgba(255,255,255,.14);margin:0 10px}.ac-step:active{background:#ffffff2e}.ac-step[disabled]{opacity:.3}.ac-dial{position:relative}.ac-dial svg{position:absolute;top:0;left:0}.ac-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-target{font-size:44px;font-weight:200;letter-spacing:-.03em;line-height:1}.ac.compact .ac-target{font-size:34px}.ac-target sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.ac-mode{font-size:12px;color:#f5f7fbb8;margin-top:4px}.ac-room{font-size:11px;color:#f5f7fb7a;margin-top:2px}.ac-modes{display:flex;flex-wrap:wrap;justify-content:center;margin-top:10px}.ac-mode-btn{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0f;border:1px solid transparent;color:#f5f7fbb8}.ac-mode-btn.active{color:#fff;border-color:#fff6}.ac-fan{margin-top:10px;align-self:center}.ac-fan button{padding:6px 10px;font-size:12px}.media{flex:1;display:flex;flex-direction:column;justify-content:center;min-height:0}.media-top{display:flex;align-items:center}.media-art{width:72px;height:72px;flex-shrink:0;border-radius:14px;background-size:cover;background-position:center;box-shadow:0 8px 24px #00000059}.media.big .media-art{width:112px;height:112px;border-radius:18px}.media-art-empty{display:flex;align-items:center;justify-content:center;background:#ffffff12;color:#f5f7fb7a}.media-art-empty.big{width:96px;height:96px;border-radius:24px;margin-bottom:12px}.media-info{flex:1;min-width:0;margin-left:14px}.media-title{font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media.big .media-title{font-size:19px}.media-sub{font-size:13px;color:#f5f7fbb8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media-state{display:flex;align-items:center;font-size:11px;color:#f5f7fb7a;margin-top:6px;text-transform:uppercase;letter-spacing:.08em}.media-state.on{color:#34d399}.eq{display:inline-flex;align-items:flex-end;height:10px;margin-right:6px}.eq b{width:2px;margin-right:2px;background:#34d399;-webkit-animation:eq .9s ease-in-out infinite;animation:eq .9s ease-in-out infinite}.eq b:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.eq b:nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}@-webkit-keyframes eq{0%,to{height:3px}50%{height:10px}}@keyframes eq{0%,to{height:3px}50%{height:10px}}.icon-round{width:36px;height:36px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;color:#f5f7fbb8;margin-left:8px}.media-controls{display:flex;align-items:center;justify-content:center;margin:14px 0 6px}.media-controls button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:#f5f7fb;margin:0 6px}.media-controls button:active{background:#ffffff1a}.media-controls .media-play{width:56px;height:56px;background:#ffffffeb;color:#0b0d14}.media-volume{display:flex;align-items:center;margin-top:8px}.media-volume button{width:32px;height:32px;display:flex;align-items:center;justify-content:center;color:#f5f7fbb8}.vol-bar{position:relative;flex:1;height:6px;margin:0 10px;border-radius:3px;background:#ffffff1f;cursor:pointer}.vol-bar:before{content:"";position:absolute;inset:-12px 0}.vol-fill{position:absolute;top:0;left:0;bottom:0;border-radius:3px;background:#f5f7fb}.vol-num{width:28px;text-align:right;font-size:12px;color:#f5f7fb7a}.media-sources{margin:10px -4px 0}.media-off{align-items:center;text-align:center}.media-power{margin:14px 0 0}.media-hint{margin-top:10px;max-width:220px}.dot-live{display:inline-block;width:6px;height:6px;border-radius:50%;background:#34d399;margin-right:6px;vertical-align:middle}.weather{flex:1;display:flex;flex-direction:column;min-height:0}.weather-now{display:flex;align-items:center}.weather-temp{font-size:48px;font-weight:200;letter-spacing:-.03em;line-height:1;margin:0 14px 0 10px}.weather-temp sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.weather-desc{display:flex;flex-direction:column;min-width:0}.weather-desc b{font-size:15px;font-weight:500}.weather-desc span{font-size:12px;color:#f5f7fb7a;margin-top:2px}.weather-facts{display:flex;flex-wrap:wrap;margin-top:12px;font-size:13px;color:#f5f7fbb8}.weather-facts span{display:flex;align-items:center;margin-right:16px}.weather-facts svg{margin-right:5px;color:#f5f7fb7a}.weather-rooms{margin-top:10px;border-top:1px solid rgba(255,255,255,.09)}.wroom{display:flex;align-items:center;height:36px;font-size:14px}.wroom-name{flex:1;min-width:0;color:#f5f7fbb8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wroom-hum{display:flex;align-items:center;font-size:12px;color:#f5f7fb7a;margin-right:12px}.wroom-hum svg{margin-right:3px;color:#7dd3fc}.wroom-temp{font-weight:500;font-size:16px}.room-name svg{display:inline-block;vertical-align:-2px;margin-right:6px;color:#f5f7fbb8}.weather-hours{display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px -4px 0;padding-bottom:4px}.weather-hours::-webkit-scrollbar{display:none}.hour{flex-shrink:0;width:52px;display:flex;flex-direction:column;align-items:center;font-size:12px}.hour svg{margin:6px 0;color:#f5f7fbb8}.hour b{font-weight:500;font-size:14px}.weather-days{margin-top:12px;border-top:1px solid rgba(255,255,255,.09);padding-top:4px}.day{display:flex;align-items:center;padding:7px 0;font-size:14px}.day-name{width:72px;color:#f5f7fbb8}.day svg{color:#f5f7fbb8;margin-right:10px}.day-lo{width:34px;text-align:right;color:#f5f7fb7a}.day-hi{width:34px}.day-bar{position:relative;flex:1;height:4px;margin:0 10px;border-radius:2px;background:#ffffff14}.day-bar i{position:absolute;top:0;bottom:0;border-radius:2px;background:linear-gradient(to right,#0891b2,#d97706)}.ambient-weather{display:flex;align-items:center;margin-top:2.4vh;font-size:2.8vh;color:#f5f7fb}.ambient-weather svg{width:4.2vh;height:4.2vh}.aw-temp{font-size:4.6vh;font-weight:300;margin:0 1.6vh 0 1.2vh}.aw-desc{display:flex;flex-direction:column;font-size:2.2vh;color:#f5f7fbb8;line-height:1.25}.aw-desc small{font-size:1.9vh;color:#f5f7fb7a}.tappable{cursor:pointer;border-radius:10px;transition:background .15s}.tappable:active{background:#ffffff12}.detail{position:relative;text-align:left}.detail-hero{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px}.hero-value{font-size:52px;font-weight:200;letter-spacing:-.03em;line-height:1;margin-bottom:6px}.chips{display:flex;flex-wrap:wrap;margin:0 -4px 12px}.chip{display:flex;align-items:baseline;margin:4px;padding:8px 12px;border-radius:12px;background:#ffffff0f;border:1px solid transparent;font-size:13px;color:#f5f7fbb8}.chip b{margin-left:8px;font-weight:600;color:#f5f7fb}.chip.active{border-color:#ffffff59;background:#ffffff1f;color:#f5f7fb}.detail-tools{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.chip-btn.on{background:#fff3}.chart{position:relative;margin:0 auto}.chart svg{display:block;overflow:visible}.chart-tick{fill:#f5f7fb7a;font-size:11px}.chart-legend{display:flex;justify-content:flex-end;font-size:12px;color:#f5f7fb7a;margin-top:2px}.chart-legend span{display:flex;align-items:center;margin-left:14px}.chart-legend i{width:12px;height:12px;border-radius:3px;margin-right:6px}.chart-legend i.key-line{height:2px;border-radius:1px}.chart-legend i.key-na{border:1px dashed rgba(255,255,255,.35)}.chart-tip{position:absolute;top:0;padding:7px 10px;border-radius:10px;pointer-events:none;white-space:nowrap;transform:translate(-50%);background:#080a10eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 8px 24px #0006;display:flex;flex-direction:column;font-size:12px;color:#f5f7fbb8}.chart-tip b{font-size:15px;color:#f5f7fb}.chart-empty{height:210px;display:flex;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:14px}.stats{display:flex;flex-wrap:wrap;margin:14px -5px 0}.stat{flex:1;min-width:120px;margin:5px;padding:12px 14px;border-radius:14px;background:#ffffff0d}.stat-label{font-size:12px;color:#f5f7fb7a}.stat-value{font-size:22px;font-weight:300;margin-top:4px;white-space:nowrap}.stat-note{font-size:11px;color:#f5f7fb7a;margin-top:2px}.detail-foot{margin-top:10px}.detail .table-wrap{max-height:210px}@media(max-width:900px),(orientation:portrait){.ambient{display:block;padding-top:0}.ambient-clock{position:absolute;left:6vw;bottom:24vh}.ambient-time{font-size:13vh}.ambient-date{font-size:2.2vh}.glances{position:absolute;left:6vw;right:6vw;bottom:10vh;max-width:none;justify-content:flex-start}.glance{margin:6px 8px 0 0}.controls{padding:16px;padding-top:max(16px,env(safe-area-inset-top))}.bar-date,.conn{display:none}.sheet-layer{justify-content:center;padding:0 12px 12px;padding-bottom:max(12px,env(safe-area-inset-bottom))}.sheet,.sheet-wide{width:100%}.sheet-cameras .cam{height:220px}.hero-value{font-size:40px}.stat{min-width:40%}.rooms .room-temp{font-size:36px}}';
var ve, N, jt, Mn, mt = 0, xo = [], W = F, En = W.__b, Sn = W.__r, In = W.diffed, zn = W.__c, Bn = W.unmount, Dn = W.__;
function Ze(t, e) {
  W.__h && W.__h(N, t, mt || e), mt = 0;
  var n = N.__H || (N.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function M(t) {
  return mt = 1, Is(wo, t);
}
function Is(t, e, n) {
  var s = Ze(ve++, 2);
  if (s.t = t, !s.__c && (s.__ = [wo(void 0, e), function(c) {
    var A = s.__N ? s.__N[0] : s.__[0], d = s.t(A, c);
    A !== d && (s.__N = [d, s.__[1]], s.__c.setState({}));
  }], s.__c = N, !N.__f)) {
    var i = function(c, A, d) {
      if (!s.__c.__H) return !0;
      var u = !1, p = s.__c.props !== c;
      if (s.__c.__H.__.some(function(f) {
        if (f.__N) {
          u = !0;
          var m = f.__[0];
          f.__ = f.__N, f.__N = void 0, m !== f.__[0] && (p = !0);
        }
      }), a) {
        var l = a.call(this, c, A, d);
        return u ? l || p : l;
      }
      return !u || p;
    };
    N.__f = !0;
    var a = N.shouldComponentUpdate, r = N.componentWillUpdate;
    N.componentWillUpdate = function(c, A, d) {
      if (this.__e) {
        var u = a;
        a = void 0, i(c, A, d), a = u;
      }
      r && r.call(this, c, A, d);
    }, N.shouldComponentUpdate = i;
  }
  return s.__N || s.__;
}
function U(t, e) {
  var n = Ze(ve++, 3);
  !W.__s && pn(n.__H, e) && (n.__ = t, n.u = e, N.__H.__h.push(n));
}
function zt(t, e) {
  var n = Ze(ve++, 4);
  !W.__s && pn(n.__H, e) && (n.__ = t, n.u = e, N.__h.push(n));
}
function ee(t) {
  return mt = 5, vo(function() {
    return { current: t };
  }, []);
}
function vo(t, e) {
  var n = Ze(ve++, 7);
  return pn(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function un(t) {
  var e = N.context[t.__c], n = Ze(ve++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(N)), e.props.value) : t.__;
}
function zs() {
  for (var t; t = xo.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(it), e.__h.some(Kt), e.__h = [];
    } catch (n) {
      e.__h = [], W.__e(n, t.__v);
    }
  }
}
W.__b = function(t) {
  N = null, En && En(t);
}, W.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Dn && Dn(t, e);
}, W.__r = function(t) {
  Sn && Sn(t), ve = 0;
  var e = (N = t.__c).__H;
  e && (jt === N ? (e.__h = [], N.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(it), e.__h.some(Kt), e.__h = [], ve = 0)), jt = N;
}, W.diffed = function(t) {
  In && In(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (xo.push(e) !== 1 && Mn === W.requestAnimationFrame || ((Mn = W.requestAnimationFrame) || Bs)(zs)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), jt = N = null;
}, W.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(it), n.__h = n.__h.filter(function(s) {
        return !s.__ || Kt(s);
      });
    } catch (s) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], W.__e(s, n.__v);
    }
  }), zn && zn(t, e);
}, W.unmount = function(t) {
  Bn && Bn(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(s) {
    try {
      it(s);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && W.__e(e, n.__v));
};
var Tn = typeof requestAnimationFrame == "function";
function Bs(t) {
  var e, n = function() {
    clearTimeout(s), Tn && cancelAnimationFrame(e), setTimeout(t);
  }, s = setTimeout(n, 35);
  Tn && (e = requestAnimationFrame(n));
}
function it(t) {
  var e = N, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), N = e;
}
function Kt(t) {
  var e = N;
  t.__c = t.__(), N = e;
}
function pn(t, e) {
  return !t || t.length !== e.length || e.some(function(n, s) {
    return n !== t[s];
  });
}
function wo(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const ko = "photoframe.service";
function gt() {
  try {
    return (localStorage.getItem(ko) || "").replace(/\/+$/, "");
  } catch {
    return "";
  }
}
function Ds(t) {
  try {
    localStorage.setItem(ko, t.trim());
  } catch {
  }
}
function Se(t) {
  return /^(data:|https?:)/.test(t) ? t : gt() + t;
}
const Co = Math.random().toString(36).slice(2);
function pe(t, e, n) {
  return new Promise((s, i) => {
    const a = new XMLHttpRequest();
    a.open(t, gt() + e), a.timeout = 15e3, a.setRequestHeader("X-Client-Id", Co), n !== void 0 && a.setRequestHeader("Content-Type", "application/json"), a.onload = () => {
      if (a.status >= 200 && a.status < 300)
        try {
          s(JSON.parse(a.responseText));
        } catch (r) {
          i(r);
        }
      else
        i(new Error("HTTP " + a.status));
    }, a.onerror = a.ontimeout = () => i(new Error("network")), a.send(n === void 0 ? null : JSON.stringify(n));
  });
}
function Ts(t) {
  return (/^https?:/.test(t) ? t : location.protocol + "//" + location.host + t).replace(/^http/, "ws");
}
class $t {
  // proxy — подключаемся к сервису рамок, он сам авторизуется в HA (токена на рамке нет).
  // Без proxy — напрямую в HA с токеном: только когда сервиса нет.
  // home — какой дом спрашивать у сервиса (у каждого дома может быть свой HA).
  constructor(e, n, s, i = "main") {
    this.baseUrl = e, this.token = n, this.proxy = s, this.home = i, this.states = {}, this.loaded = !1, this.registry = {}, this.devices = {}, this.status = "idle", this.ws = null, this.msgId = 1, this.listeners = [], this.stopped = !1, this.pending = {}, this.subs = {};
  }
  homeQuery(e) {
    return this.home === "main" ? "" : e + "home=" + encodeURIComponent(this.home);
  }
  subscribe(e) {
    return this.listeners.push(e), () => {
      this.listeners = this.listeners.filter((n) => n !== e);
    };
  }
  emit() {
    this.listeners.forEach((e) => e());
  }
  setStatus(e) {
    this.status = e, this.emit();
  }
  connect() {
    if (!this.proxy && (!this.baseUrl || !this.token)) {
      this.setStatus("idle");
      return;
    }
    this.stopped = !1, this.setStatus("connecting");
    const e = this.proxy ? Ts(Se("/api/ha/websocket" + this.homeQuery("?"))) : this.baseUrl.replace(/\/+$/, "").replace(/^http/, "ws") + "/api/websocket";
    let n;
    try {
      n = new WebSocket(e);
    } catch {
      this.scheduleReconnect();
      return;
    }
    this.ws = n, n.onmessage = (s) => {
      const i = JSON.parse(s.data);
      if (i.type === "auth_required")
        n.send(JSON.stringify({ type: "auth", access_token: this.token }));
      else if (i.type === "auth_invalid")
        this.stopped = !0, this.setStatus("auth_invalid"), n.close(), this.proxy && this.scheduleReconnect(3e4);
      else if (i.type === "auth_ok")
        this.setStatus("connected"), this.send({ type: "subscribe_events", event_type: "state_changed" }), this.call({ type: "get_states" }).then((a) => {
          const r = {};
          a.forEach((c) => {
            r[c.entity_id] = c;
          }), this.states = r, this.loaded = !0, this.emit(), this.loadRegistry();
        }, () => {
        });
      else if (i.type === "result") {
        const a = this.pending[i.id];
        a && (delete this.pending[i.id], i.success ? a.resolve(i.result) : a.reject(new Error(i.error && i.error.message || "HA error")));
      } else if (i.type === "event" && this.subs[i.id])
        this.subs[i.id](i.event);
      else if (i.type === "event" && i.event.event_type === "state_changed") {
        const a = i.event.data.new_state;
        a && (this.states = { ...this.states, [a.entity_id]: a }, this.emit());
      }
    }, n.onclose = () => {
      this.ws === n && (this.ws = null), Object.keys(this.pending).forEach((s) => this.pending[+s].reject(new Error("disconnected"))), this.pending = {}, this.subs = {}, this.stopped || (this.setStatus("disconnected"), this.scheduleReconnect());
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
  // Обложки и картинки сущностей. Внешние (обложки Яндекс Музыки) грузим как есть,
  // HA-шные (/api/media_player_proxy/…) — через сервис, он добавит авторизацию.
  pictureUrl(e) {
    return e ? /^https?:/.test(e) ? e : this.proxy ? Se("/api/ha/picture?path=" + encodeURIComponent(e) + this.homeQuery("&")) : this.baseUrl.replace(/\/+$/, "") + e : "";
  }
  toggle(e) {
    return this.callService(e, "toggle");
  }
  turnOff(e) {
    return this.callService(e, "turn_off");
  }
  // Через сервис — его прокси с авторизацией. Напрямую camera_proxy_stream принимает
  // не долгоживущий токен, а access_token из атрибутов камеры.
  cameraStreamUrl(e) {
    if (this.proxy) return Se("/api/ha/camera/" + e + this.homeQuery("?"));
    const n = this.states[e], s = n && n.attributes.access_token;
    return s ? this.baseUrl.replace(/\/+$/, "") + "/api/camera_proxy_stream/" + e + "?token=" + s : "";
  }
}
const Mo = hn(null);
function Y() {
  const t = un(Mo), [, e] = M(0);
  return U(() => t.subscribe(() => e((n) => n + 1)), [t]), t;
}
function Bt(t) {
  return t === "on" || t === "open" || t === "playing";
}
function je(t) {
  return t === void 0 || t === "unavailable" || t === "unknown";
}
function we(t, e) {
  if (t.status !== "connected" || !t.loaded) return !0;
  const n = t.states[e];
  return !!n && n.state !== "unavailable";
}
function ue(t, e) {
  const n = e ? t.states[e] : void 0;
  return n && !je(n.state) ? n.state : void 0;
}
function st(t, e = 1) {
  return t === void 0 || isNaN(parseFloat(t)) ? "--" : parseFloat(t).toFixed(e);
}
function bt(t, e) {
  const n = t.states[e];
  return n && n.attributes.unit_of_measurement ? " " + n.attributes.unit_of_measurement : "";
}
const Eo = hn(() => {
});
function Dt() {
  return un(Eo);
}
const Qs = "English", Os = {
  _language: Qs,
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
  "ambient.offline": "No connection to home",
  "ambient.swipe_hint": "Swipe up to control your home",
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
  "editor.device_items": "device · {list}",
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
  "errors.upload": "upload: HTTP {status}",
  "grid.narrow_note": "Drag cards on a wide screen. Here you can edit or delete them.",
  "ha.card_hint": "The frame runs inside this Home Assistant — no connection or token needed, everything runs as the signed-in user.",
  "ha.entities": "Home Assistant entities ({n})",
  "ha.local_hint": "Without the service the frame connects to HA directly; the token is stored on this device.",
  "ha.no_data": "No data — check the URL and token",
  "ha.service_hint": "The token is stored only in the service: frames connect to HA through it and never see the token.",
  "ha.token": "Long-lived access token",
  "ha.token_saved": "Saved in the service — leave empty to keep it",
  "ha.url": "Home Assistant URL",
  "home.default_name": "Home",
  "homes.add": "+ Add home",
  "homes.card_hint": " All homes use devices from this Home Assistant — for example, a country house connected via Remote Home Assistant.",
  "homes.delete": "Delete home",
  "homes.ha_on_tab": "Home Assistant — see the Home Assistant tab",
  "homes.hint": "Homes and their layouts are shared by all devices. Each device has its own main home: the frame starts there and returns to it. Swipe sideways on the panel to switch.",
  "homes.local_hint": "Multiple homes need the service — the frame is running without it.",
  "homes.main_here": "Main here",
  "homes.new_name": "Country house",
  "homes.own_ha": "Own HA",
  "homes.same_ha": "Same HA",
  "homes.token_saved": "Token saved — leave empty",
  "layout.export": "Export",
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
  "photos.formats": "PNG, JPG, WEBP — resized to 1920 px",
  "photos.local_hint": "Photos are stored on this device.",
  "photos.pick": "Drop photos here or tap to choose",
  "photos.service_hint": "Shared album: photos go to the service and show on every frame.",
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
  "settings.slide_interval": "Photo interval",
  "settings.tab.ha": "Home Assistant",
  "settings.tab.homes": "Homes",
  "settings.tab.photos": "Photos",
  "settings.tab.sync": "Service",
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
  "status.auth_invalid": "Invalid token",
  "status.connected": "Home connected",
  "status.connecting": "Connecting…",
  "status.disconnected": "Offline",
  "status.idle": "HA not set up",
  "switch.off": "Off",
  "switch.on": "On",
  "switch.unavailable": "Unavailable",
  "switches.all_off": "Turn all off",
  "switches.title_count": "{title} · {on} of {total}",
  "sync.card": "HA dashboard card: layout and settings live in the dashboard config and are shared by all devices",
  "sync.connecting": "Connecting to the service…",
  "sync.local": "No service: settings and photos are stored on this device only",
  "sync.offline": "Service unavailable — changes may not be saved",
  "sync.save_failed": "Not saved: {error}. Admin rights and a UI-mode dashboard are required.",
  "sync.service_url": "Service URL (empty — same address the frame was opened from)",
  "sync.synced": "Synced with the service",
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
  "setup.failed": "Failed: {error}"
}, Hs = "Русский", Ls = {
  _language: Hs,
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
  "ambient.offline": "Нет связи с домом",
  "ambient.swipe_hint": "Смахните вверх, чтобы управлять домом",
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
  "editor.device_items": "устройство · {list}",
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
  "errors.upload": "загрузка: HTTP {status}",
  "grid.narrow_note": "Перетаскивать карточки можно на широком экране. Здесь — изменить или удалить.",
  "ha.card_hint": "Рамка работает внутри этого Home Assistant — подключение и токен не нужны, всё от имени вошедшего пользователя.",
  "ha.entities": "Сущности Home Assistant ({n})",
  "ha.local_hint": "Без сервиса рамка подключается к HA напрямую, токен хранится на устройстве.",
  "ha.no_data": "Нет данных — проверьте адрес и токен",
  "ha.service_hint": "Токен хранится только в сервисе: рамки подключаются к HA через него и токена не видят.",
  "ha.token": "Долгоживущий токен",
  "ha.token_saved": "Сохранён в сервисе — оставьте пустым, чтобы не менять",
  "ha.url": "Адрес Home Assistant",
  "home.default_name": "Дом",
  "homes.add": "+ Добавить дом",
  "homes.card_hint": " Все дома берут устройства из этого Home Assistant — например, дачу, подключённую к нему через Remote Home Assistant.",
  "homes.delete": "Удалить дом",
  "homes.ha_on_tab": "Home Assistant — на вкладке «Home Assistant»",
  "homes.hint": "Дома и их раскладки общие для всех устройств. Главный дом — свой у каждого устройства: с него рамка начинает и к нему возвращается. Переключение — боковым свайпом по панели.",
  "homes.local_hint": "Несколько домов работают через сервис — сейчас рамка без него.",
  "homes.main_here": "Главный здесь",
  "homes.new_name": "Дача",
  "homes.own_ha": "Свой HA",
  "homes.same_ha": "Тот же HA",
  "homes.token_saved": "Токен сохранён — оставьте пустым",
  "layout.export": "Экспорт",
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
  "photos.formats": "PNG, JPG, WEBP — кадр уменьшается до 1920 px",
  "photos.local_hint": "Фото хранятся в памяти этого устройства.",
  "photos.pick": "Перетащите фото сюда или нажмите, чтобы выбрать",
  "photos.service_hint": "Общий альбом: фото попадают в сервис и показываются на всех рамках.",
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
  "settings.slide_interval": "Интервал смены фото",
  "settings.tab.ha": "Home Assistant",
  "settings.tab.homes": "Дома",
  "settings.tab.photos": "Фото",
  "settings.tab.sync": "Сервис",
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
  "status.auth_invalid": "Неверный токен",
  "status.connected": "Дом на связи",
  "status.connecting": "Подключение…",
  "status.disconnected": "Нет связи",
  "status.idle": "HA не настроен",
  "switch.off": "Выключено",
  "switch.on": "Включено",
  "switch.unavailable": "Недоступно",
  "switches.all_off": "Выключить всё",
  "switches.title_count": "{title} · {on} из {total}",
  "sync.card": "Карточка дашборда HA: раскладка и настройки хранятся в конфиге дашборда и общие для всех устройств",
  "sync.connecting": "Подключение к сервису…",
  "sync.local": "Без сервиса: настройки и фото хранятся только на этом устройстве",
  "sync.offline": "Сервис недоступен — изменения могут не сохраниться",
  "sync.save_failed": "Не сохранилось: {error}. Нужны права администратора и дашборд в режиме UI.",
  "sync.service_url": "Адрес сервиса (пусто — тот же адрес, откуда открыта рамка)",
  "sync.synced": "Синхронизировано с сервисом",
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
  "setup.failed": "Не получилось: {error}"
}, Qn = /* @__PURE__ */ Object.assign({ "./locales/en.json": Os, "./locales/ru.json": Ls }), de = {};
Object.keys(Qn).forEach((t) => {
  const e = t.replace(/^.*\/([^/]+)\.json$/, "$1");
  de[e] = Qn[t];
});
const yt = "en", So = "photoframe.language";
let Pe = yt;
const at = [];
function js() {
  return Object.keys(de).sort().map((t) => ({ code: t, name: de[t]._language || t }));
}
function Pt(t) {
  if (!t) return null;
  if (de[t]) return t;
  const e = t.split(/[-_]/)[0].toLowerCase();
  return de[e] ? e : null;
}
function Io() {
  try {
    return localStorage.getItem(So) || "";
  } catch {
    return "";
  }
}
function Ps(t) {
  try {
    localStorage.setItem(So, t);
  } catch {
  }
}
let On;
function Tt(t) {
  t && (On = t);
  const e = Pt(Io()) || Pt(On) || Pt(navigator.language) || yt;
  e !== Pe && (Pe = e, at.forEach((n) => n()));
}
function h(t, e) {
  let n = de[Pe] && de[Pe][t] || de[yt] && de[yt][t] || t;
  return e && Object.keys(e).forEach((s) => {
    n = n.split("{" + s + "}").join(String(e[s]));
  }), n;
}
function ze(t) {
  return h(t).split(",").map((e) => e.trim());
}
Tt();
function Fs() {
  const [, t] = M(0);
  return U(() => {
    const e = () => t((n) => n + 1);
    return at.push(e), () => {
      at.splice(at.indexOf(e), 1);
    };
  }, []), Pe;
}
const ge = 12, Rs = 2, Ns = 2, _t = {
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
function xt(t) {
  return h("card." + t + ".title");
}
function zo(t) {
  return h("card." + t + ".hint");
}
const Le = {
  amber: "#fbbf24",
  sky: "#7dd3fc",
  green: "#34d399",
  pink: "#f9a8d4",
  violet: "#c4b5fd",
  red: "#fb7185"
};
let Vs = 0;
function Us() {
  return "c" + Date.now().toString(36) + (Vs++).toString(36);
}
function Fe() {
  return {
    cols: ge,
    cards: [
      { id: "climate", type: "climate", title: "", icon: "thermometer", x: 0, y: 0, w: 3, h: 6, chip: !0, items: [] },
      { id: "lights", type: "switches", title: "", icon: "lightbulb", x: 3, y: 0, w: 6, h: 6, chip: !0, color: "amber", items: [] },
      { id: "weather", type: "weather", title: "", icon: "cloud-sun", x: 9, y: 0, w: 3, h: 3, chip: !0, items: [] },
      { id: "home", type: "sensors", title: "", icon: "shield", x: 9, y: 3, w: 3, h: 3, chip: !0, items: [] }
    ]
  };
}
function Hn(t, e) {
  return t.x < e.x + e.w && e.x < t.x + t.w && t.y < e.y + e.h && e.y < t.y + t.h;
}
function Ln(t, e) {
  return t.y - e.y || t.x - e.x;
}
function vt(t, e = ge) {
  const n = Math.max(Rs, Math.min(e, Math.round(t.w))), s = Math.max(Ns, Math.round(t.h));
  return { ...t, w: n, h: s, x: Math.max(0, Math.min(e - n, Math.round(t.x))), y: Math.max(0, Math.round(t.y)) };
}
function Re(t, e) {
  const n = [];
  e && n.push(e), t.filter((a) => !e || a.id !== e.id).slice().sort(Ln).forEach((a) => {
    let r = a.y;
    for (let c = 0; c < 500; c++) {
      const A = n.filter((d) => Hn({ ...a, y: r }, d));
      if (!A.length) break;
      r = Math.max.apply(null, A.map((d) => d.y + d.h));
    }
    n.push({ ...a, y: r });
  });
  const i = [];
  return n.slice().sort((a, r) => Ln(a, r) || (e && a.id === e.id ? -1 : 0)).forEach((a) => {
    let r = a.y;
    for (; r > 0 && !i.some((c) => Hn({ ...a, y: r - 1 }, c)); ) r--;
    i.push({ ...a, y: r });
  }), t.map((a) => i.filter((r) => r.id === a.id)[0]);
}
function Ys(t) {
  return t.reduce((e, n) => Math.max(e, n.y + n.h), 0);
}
function rt(t) {
  if (t.cols === ge) return jn(t);
  const e = [], n = (i, a, r, c) => {
    for (let A = a; A < a + c; A++) for (let d = i; d < i + r; d++) if (e[A] && e[A][d]) return !1;
    return !0;
  }, s = t.cards.map((i) => {
    const a = Math.min(i.w || 1, 4), r = i.h || 1;
    for (let c = 0; ; c++)
      for (let A = 0; A + a <= 4; A++)
        if (n(A, c, a, r)) {
          for (let d = c; d < c + r; d++) {
            e[d] = e[d] || [];
            for (let u = A; u < A + a; u++) e[d][u] = !0;
          }
          return { ...i, x: A * 3, y: c * 3, w: a * 3, h: r * 3 };
        }
  });
  return jn({ ...t, cols: ge, cards: s });
}
function jn(t) {
  const e = (i) => typeof i == "number" && isFinite(i);
  let n = t.cards.reduce((i, a) => e(a.y) && e(a.h) ? Math.max(i, a.y + a.h) : i, 0);
  const s = t.cards.map((i) => {
    const a = e(i.w) ? i.w : 3, r = e(i.h) ? i.h : 3;
    if (e(i.x) && e(i.y)) return vt({ ...i, w: a, h: r });
    const c = vt({ ...i, x: 0, y: n, w: a, h: r });
    return n += c.h, c;
  });
  return { ...t, cols: ge, cards: Re(s) };
}
const Zs = "photoframe", Ne = "photos", Ws = 1920;
function Bo() {
  return new Promise((t, e) => {
    const n = indexedDB.open(Zs, 1);
    n.onupgradeneeded = () => n.result.createObjectStore(Ne, { keyPath: "id", autoIncrement: !0 }), n.onsuccess = () => t(n.result), n.onerror = () => e(n.error);
  });
}
function fn(t, e) {
  return Bo().then((n) => new Promise((s, i) => {
    const a = e(n.transaction(Ne, t).objectStore(Ne));
    a.onsuccess = () => s(a.result), a.onerror = () => i(a.error);
  }));
}
function qs() {
  return Bo().then((t) => new Promise((e, n) => {
    const s = [], i = t.transaction(Ne, "readonly").objectStore(Ne).openCursor();
    i.onsuccess = () => {
      const a = i.result;
      a ? (s.push(a.value), a.continue()) : e(s);
    }, i.onerror = () => n(i.error);
  }));
}
function Js(t) {
  return fn("readwrite", (e) => e.delete(t));
}
function Gs() {
  return fn("readwrite", (t) => t.clear());
}
function mn(t) {
  return new Promise((e, n) => {
    const s = new FileReader();
    s.onerror = () => n(s.error), s.onload = () => {
      const i = new Image();
      i.onerror = n, i.onload = () => {
        const a = Math.min(1, Ws / Math.max(i.width, i.height)), r = document.createElement("canvas");
        r.width = Math.round(i.width * a), r.height = Math.round(i.height * a), r.getContext("2d").drawImage(i, 0, 0, r.width, r.height), e(r.toDataURL("image/jpeg", 0.85));
      }, i.src = s.result;
    }, s.readAsDataURL(t);
  });
}
function Xs(t) {
  return t.reduce(
    (e, n) => e.then(() => mn(n)).then((s) => fn("readwrite", (i) => i.add({ data: s }))),
    Promise.resolve()
  ).then(() => {
  });
}
const Z = "main", Do = "photoframe.cache", To = "photoframe.mainHome";
function Xe() {
  return { cols: 12, cards: [] };
}
function gn() {
  try {
    return localStorage.getItem(To) || Z;
  } catch {
    return Z;
  }
}
function Ks() {
  return {
    settings: {
      haUrl: "",
      token: "",
      slideIntervalMs: 1e4,
      idleSec: 45
    },
    homes: [{ id: Z, name: h("home.default_name"), haUrl: "" }],
    layouts: { [Z]: Fe() },
    active: gn(),
    layout: Fe(),
    photos: [],
    sync: "connecting"
  };
}
function $s() {
  const t = Ks();
  try {
    const e = localStorage.getItem(Do);
    if (e) {
      const s = JSON.parse(e), i = {}, a = s.layouts || (s.layout ? { [Z]: s.layout } : {});
      return Object.keys(a).forEach((r) => {
        i[r] = rt(a[r]);
      }), i[Z] || (i[Z] = t.layout), { ...t, settings: { ...t.settings, ...s.settings }, homes: s.homes || t.homes, layouts: i, photos: s.photos || [] };
    }
    const n = localStorage.getItem("photoframe.settings");
    if (n) return { ...t, settings: { ...t.settings, ...JSON.parse(n) } };
  } catch {
  }
  return t;
}
function ea() {
  try {
    localStorage.removeItem("photoframe.settings");
  } catch {
  }
}
class ta {
  constructor() {
    this.state = $s(), this.listeners = [], this.events = null, this.card = null, this.photoTimer = 0, this.bundled = [], this.photoError = "", this.cardError = "";
  }
  subscribe(e) {
    return this.listeners.push(e), () => {
      this.listeners = this.listeners.filter((n) => n !== e);
    };
  }
  set(e) {
    const n = { ...this.state, ...e };
    if (n.homes.some((s) => s.id === n.active) || (n.active = Z), n.layout = n.layouts[n.active] || Xe(), this.state = n, e.settings || e.layouts || e.homes || e.photos)
      try {
        const { settings: s, homes: i, layouts: a, photos: r } = this.state, c = this.state.sync === "local";
        localStorage.setItem(Do, JSON.stringify({
          settings: c ? s : { ...s, token: "" },
          homes: i,
          layouts: a,
          photos: c ? [] : r
        }));
      } catch {
      }
    this.listeners.forEach((s) => s());
  }
  setActive(e) {
    e !== this.state.active && this.set({ active: e });
  }
  setMainHome(e) {
    try {
      localStorage.setItem(To, e);
    } catch {
    }
    this.listeners.forEach((n) => n());
  }
  get photoUrls() {
    return this.bundled.concat(this.state.photos.map((e) => Se(e.url)));
  }
  start() {
    this.card || this.pull().then(() => this.listen(), () => this.goLocal());
  }
  // Режим карточки дашборда: источник данных — конфиг карточки, его HA присылает заново при каждом сохранении.
  attachCard(e) {
    const n = !this.card;
    this.card = e, this.applyCardConfig(e.config), n && (this.reloadCardPhotos(), this.photoTimer = window.setInterval(() => this.reloadCardPhotos(), 12 * 36e5));
  }
  applyCardConfig(e) {
    const n = e.homes && e.homes.length ? e.homes.map((r) => ({ id: r.id, name: r.name, haUrl: "" })) : [{ id: Z, name: h("home.default_name"), haUrl: "" }], s = {};
    n.forEach((r) => {
      const c = e.layouts && e.layouts[r.id];
      s[r.id] = c ? rt(c) : r.id === Z ? Fe() : Xe();
    });
    const i = e.settings || {}, a = { ...this.state.settings };
    typeof i.slideIntervalMs == "number" && (a.slideIntervalMs = i.slideIntervalMs), typeof i.idleSec == "number" && (a.idleSec = i.idleSec), this.set({ sync: "card", homes: n, layouts: s, settings: a });
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
  pull() {
    return pe("GET", "/api/state").then((e) => {
      const n = e.homes || [{ id: Z, name: h("home.default_name"), haUrl: "" }], s = e.layouts || { [Z]: e.layout }, i = {};
      n.forEach((c) => {
        const A = s[c.id];
        i[c.id] = A ? rt(A.value) : c.id === Z ? this.state.layouts[Z] || Fe() : Xe();
      });
      const a = { photos: e.photos, homes: n, layouts: i, sync: "synced" };
      e.settings && (a.settings = { ...this.state.settings, ...e.settings.value, token: "" }), this.set(a);
      const r = s[Z];
      (!r || r.value.cols !== i[Z].cols) && pe("PUT", "/api/layout", i[Z]).catch(() => {
      }), (!e.settings || !e.settings.value.hasToken && this.state.settings.token) && pe("PUT", "/api/settings", this.state.settings).catch(() => {
      }), ea(), this.state.settings.token && this.set({ settings: { ...this.state.settings, token: "", hasToken: !0 } });
    });
  }
  listen() {
    if (typeof EventSource > "u" || this.events) return;
    const e = new EventSource(Se("/api/events"));
    this.events = e, e.onmessage = (n) => {
      const s = JSON.parse(n.data);
      s.type === "hello" ? (this.state.sync !== "synced" && this.pull().catch(() => {
      }), this.set({ sync: "synced" })) : s.source === Co || (s.type === "settings" ? this.set({ settings: { ...this.state.settings, ...s.value, token: "" } }) : s.type === "layout" ? this.set({ layouts: { ...this.state.layouts, [s.home || Z]: rt(s.value) } }) : s.type === "homes" ? this.applyHomes(s.homes) : s.type === "photos" && this.set({ photos: s.photos }));
    }, e.onerror = () => {
      this.state.sync === "synced" && this.set({ sync: "offline" });
    };
  }
  goLocal() {
    this.set({ sync: "local" }), this.reloadLocalPhotos();
  }
  reloadLocalPhotos() {
    return qs().then((e) => this.set({ photos: e.map((n) => ({ id: n.id, url: n.data })) })).catch(() => this.set({ photos: [] }));
  }
  push(e, n) {
    this.state.sync !== "local" && pe("PUT", e, n).catch(() => this.set({ sync: "offline" }));
  }
  applyHomes(e) {
    const n = {};
    e.forEach((s) => {
      n[s.id] = this.state.layouts[s.id] || Xe();
    }), this.set({ homes: e, layouts: n });
  }
  // Список домов с токенами (если их ввели) уходит в сервис; на рамке остаются без токенов.
  saveHomes(e) {
    if (this.card) {
      const n = e.map((s) => ({ id: s.id, name: s.name, haUrl: "" }));
      this.applyHomes(n), this.saveCard({ homes: n, layouts: this.state.layouts });
      return;
    }
    this.applyHomes(e.map((n) => ({ id: n.id, name: n.name, haUrl: n.haUrl, hasToken: n.hasToken || !!n.token }))), this.state.sync !== "local" && pe("PUT", "/api/homes", e).then((n) => this.applyHomes(n), () => this.set({ sync: "offline" }));
  }
  saveSettings(e) {
    if (this.card) {
      this.set({ settings: e }), this.saveCard({ settings: { slideIntervalMs: e.slideIntervalMs, idleSec: e.idleSec } });
      return;
    }
    if (this.state.sync === "local") {
      this.set({ settings: e });
      return;
    }
    this.set({ settings: { ...e, token: "", hasToken: e.hasToken || !!e.token } }), this.push("/api/settings", e);
  }
  // Раскладка активного дома.
  saveLayout(e) {
    const n = this.state.active;
    if (this.set({ layouts: { ...this.state.layouts, [n]: e } }), this.card) {
      this.saveCard({ layouts: this.state.layouts });
      return;
    }
    this.push("/api/layout" + (n === Z ? "" : "?home=" + encodeURIComponent(n)), e);
  }
  addPhotos(e) {
    return this.card ? this.card.addPhotos(e).then(() => this.reloadCardPhotos()) : this.state.sync === "local" ? Xs(e).then(() => this.reloadLocalPhotos()) : e.reduce(
      (n, s) => n.then(() => mn(s)).then((i) => pe("POST", "/api/photos", { data: i })),
      Promise.resolve()
    ).then(() => pe("GET", "/api/state")).then((n) => this.set({ photos: n.photos }));
  }
  deletePhoto(e) {
    return this.card ? this.card.deletePhoto(String(e)).then(() => this.reloadCardPhotos()) : this.state.sync === "local" ? Js(Number(e)).then(() => this.reloadLocalPhotos()) : (this.set({ photos: this.state.photos.filter((n) => n.id !== e) }), pe("DELETE", "/api/photos/" + e).then(() => {
    }));
  }
  clearPhotos() {
    return this.card ? this.state.photos.reduce((e, n) => e.then(() => this.card.deletePhoto(String(n.id))), Promise.resolve()).then(() => this.reloadCardPhotos()) : this.state.sync === "local" ? Gs().then(() => this.reloadLocalPhotos()) : this.state.photos.reduce((e, n) => e.then(() => this.deletePhoto(n.id)), Promise.resolve()).then(() => {
    });
  }
}
const Be = new ta();
function Qt() {
  const [, t] = M(0);
  return U(() => Be.subscribe(() => t((e) => e + 1)), []), Be;
}
const Qe = {};
function na(t, e, n) {
  t /= 255, e /= 255, n /= 255;
  const s = Math.max(t, e, n), i = Math.min(t, e, n), a = (s + i) / 2;
  if (s === i) return [0, 0, a];
  const r = s - i, c = a > 0.5 ? r / (2 - s - i) : r / (s + i);
  return [(s === t ? (e - n) / r + (e < n ? 6 : 0) : s === e ? (n - t) / r + 2 : (t - e) / r + 4) * 60, c, a];
}
function oa(t) {
  return new Promise((e) => {
    const n = new Image();
    n.onload = () => {
      try {
        const s = 48 / Math.max(n.width, n.height), i = document.createElement("canvas");
        i.width = Math.max(1, Math.round(n.width * s)), i.height = Math.max(1, Math.round(n.height * s));
        const a = i.getContext("2d");
        a.drawImage(n, 0, 0, i.width, i.height);
        const r = a.getImageData(0, 0, i.width, i.height).data;
        let c = 0, A = 0, d = 0, u = 0;
        for (let m = 0; m < r.length; m += 4)
          c += r[m], A += r[m + 1], d += r[m + 2], u++;
        const p = na(c / u, A / u, d / u), l = Math.round(p[0]), f = Math.round(Math.min(Math.max(p[1], 0.45), 0.85) * 100);
        e({
          thumb: i.toDataURL("image/jpeg", 0.7),
          accent: "hsl(" + l + "," + f + "%,68%)",
          accentSoft: "hsla(" + l + "," + f + "%,60%,0.22)"
        });
      } catch {
        e(null);
      }
    }, n.onerror = () => e(null), n.src = t;
  });
}
function ia(t) {
  const [e, n] = M(t && Qe[t] || null);
  return U(() => {
    if (!t) return;
    if (t in Qe) {
      Qe[t] && n(Qe[t]);
      return;
    }
    let s = !0;
    return oa(t).then((i) => {
      Qe[t] = i, s && i && n(i);
    }), () => {
      s = !1;
    };
  }, [t]), e;
}
const sa = 0.18, aa = 0.5;
function Pn(t, e) {
  for (; t && t.nodeType === 1; t = t.parentElement)
    if ((t.matches || t.webkitMatchesSelector).call(t, e)) return t;
  return null;
}
function Fn(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientY : t.clientY;
}
function ra(t, e, n, s) {
  U(() => {
    const i = t.root.current;
    if (!i || !s) return;
    let a = 0, r = 0, c = 0, A = !1;
    const d = (m) => {
      const x = t.controls.current, E = t.ambient.current, w = t.soft.current;
      x && (x.style.opacity = String(m), x.style.transform = "translateY(" + Math.round((1 - m) * 60) + "px)"), E && (E.style.opacity = String(1 - m), E.style.transform = "translateY(" + Math.round(-m * 80) + "px)"), w && (w.style.opacity = String(m));
    }, u = () => {
      [t.controls.current, t.ambient.current, t.soft.current].forEach((m) => {
        m && (m.style.opacity = "", m.style.transform = "");
      });
    }, p = (m) => {
      const x = m.target;
      e && (!Pn(x, ".bar, .grabber-top") || Pn(x, "button")) || (a = Fn(m), r = Date.now(), c = 0, A = !0, i.classList.add("dragging"));
    }, l = (m) => {
      if (!A) return;
      c = Fn(m) - a;
      const x = i.clientHeight, E = e ? 1 - Math.max(0, c) / x * 1.6 : Math.max(0, -c) / x * 1.6;
      d(Math.min(1, Math.max(0, E))), m.cancelable && m.preventDefault();
    }, f = () => {
      if (!A) return;
      A = !1, i.classList.remove("dragging");
      const m = i.clientHeight, x = Math.abs(c) / Math.max(1, Date.now() - r), E = Math.abs(c) > m * sa || x > aa && Math.abs(c) > 30;
      u(), !e && c < 0 && E && n(!0), e && c > 0 && E && n(!1);
    };
    return i.addEventListener("touchstart", p), i.addEventListener("touchmove", l), i.addEventListener("touchend", f), i.addEventListener("touchcancel", f), i.addEventListener("mousedown", p), window.addEventListener("mousemove", l), window.addEventListener("mouseup", f), () => {
      i.removeEventListener("touchstart", p), i.removeEventListener("touchmove", l), i.removeEventListener("touchend", f), i.removeEventListener("touchcancel", f), i.removeEventListener("mousedown", p), window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", f);
    };
  }, [e, s]);
}
function ca({ urls: t, index: e, tone: n, soft: s, softRef: i }) {
  return /* @__PURE__ */ o("div", { class: "backdrop", children: [
    t.length === 0 && /* @__PURE__ */ o("div", { class: "slide active aurora" }),
    t.map((a, r) => /* @__PURE__ */ o("div", { class: "slide" + (r === e ? " active" : ""), style: { backgroundImage: "url(" + a + ")" } }, a.length > 200 ? r : a)),
    /* @__PURE__ */ o("div", { ref: i, class: "soft" + (s ? " on" : ""), style: n ? { backgroundImage: "url(" + n.thumb + ")" } : void 0 }),
    /* @__PURE__ */ o("div", { class: "shade" + (s ? " deep" : "") })
  ] });
}
const wt = (...t) => t.filter((e, n, s) => !!e && e.trim() !== "" && s.indexOf(e) === n).join(" ").trim();
function la(t, e, n = []) {
  throw new Error("[lucide]: iconNode is required when icon name is used");
}
const Aa = (t) => {
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
const da = (t) => {
  const e = Aa(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
const _e = {
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
function Ft(t) {
  return t != null;
}
function ha(t, e = {}) {
  const n = e.attributeNames ?? {}, s = (l) => n[l] ?? l, i = t.size ?? t.width ?? _e.width, a = t.size ?? t.height ?? _e.height, r = t.aliases?.filter((l) => typeof l == "string" && l.trim() !== "").map((l) => `lucide-${l}`) ?? [], c = [...t.name ? [`lucide-${t.name}`] : [], ...r], A = e.className?.split(" ").filter(Boolean) ?? [], d = e.includeDefaultClasses === !1 ? wt(...A) : wt("lucide", ...c, ...A), u = e.absoluteStrokeWidth ? Number(e.strokeWidth ?? _e["stroke-width"]) * Number(t.size ?? t.width ?? _e.width) / Number(e.size ?? e.width ?? _e.width) : e.strokeWidth ?? _e["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(_e).reduce((l, [f, m]) => (l[s(f)] = m, l), {}),
      ..."color" in e && e.color && {
        [s("stroke")]: e.color
      },
      ..."size" in e && Ft(e.size) && {
        [s("width")]: e.size,
        [s("height")]: e.size
      },
      ..."width" in e && Ft(e.width) && {
        [s("width")]: e.width
      },
      ..."height" in e && Ft(e.height) && {
        [s("height")]: e.height
      },
      [s("stroke-width")]: u,
      ...d && {
        [s("class")]: d
      },
      [s("viewBox")]: `0 0 ${i} ${a}`,
      ...e.hasA11yProp === !1 ? {
        [s("aria-hidden")]: "true"
      } : {},
      ..."attributes" in e && e.attributes
    },
    t.node.map((l) => {
      const [f, m, x] = l, E = e.nonScalingStroke ? { [s("vector-effect")]: "non-scaling-stroke", ...m } : m;
      return x ? [f, E, x] : [f, E];
    })
  ];
}
const ua = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
const pa = hn({
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  absoluteStrokeWidth: !1,
  nonScalingStroke: !1,
  class: ""
}), fa = () => un(pa);
const ma = ({
  color: t,
  size: e,
  width: n,
  height: s,
  strokeWidth: i,
  absoluteStrokeWidth: a,
  nonScalingStroke: r,
  children: c,
  iconNode: A = [],
  icon: d = {
    node: A,
    aliases: [],
    size: 24
  },
  class: u = "",
  ...p
}) => {
  const {
    size: l = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: m = !1,
    nonScalingStroke: x = !1,
    color: E = "currentColor",
    class: w = ""
  } = fa() ?? {}, [b, B, O = []] = ha(d, {
    color: t ?? E,
    width: n ?? e ?? l,
    height: s ?? e ?? l,
    strokeWidth: i ?? f,
    absoluteStrokeWidth: a ?? m,
    nonScalingStroke: r ?? x,
    className: wt(w, u),
    hasA11yProp: !!c || ua(p),
    attributes: p
  });
  return pt(b, { ...B }, [
    ...O.map(([T, I]) => pt(T, I)),
    ...mo(c)
  ]);
};
function v(t, e, n = []) {
  const s = typeof t == "string" ? la(t, e, n) : t, i = ({ class: a = "", className: r = "", children: c, ...A }) => pt(
    ma,
    {
      ...A,
      icon: s,
      class: wt(a, r)
    },
    c
  );
  return s.name && (i.displayName = da(s.name)), i;
}
const Qo = {
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
Qo.node;
const ga = v(Qo);
const Oo = {
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
Oo.node;
const Ho = v(Oo);
const Lo = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
Lo.node;
const ba = v(Lo);
const jo = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
jo.node;
const ya = v(jo);
const Po = {
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
Po.node;
const _a = v(Po);
const Fo = {
  name: "bed",
  size: 24,
  node: [
    ["path", { d: "M2 4v16", key: "vw9hq8" }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
    ["path", { d: "M2 17h20", key: "18nfp3" }],
    ["path", { d: "M6 8v9", key: "1yriud" }]
  ]
};
Fo.node;
const xa = v(Fo);
const Ro = {
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
Ro.node;
const va = v(Ro);
const No = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
No.node;
const wa = v(No);
const Vo = {
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
Vo.node;
const ka = v(Vo);
const Uo = {
  name: "cloud-fog",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 17H7", key: "pygtm1" }],
    ["path", { d: "M17 21H9", key: "1u2q02" }]
  ]
};
Uo.node;
const Ca = v(Uo);
const Yo = {
  name: "cloud-lightning",
  size: 24,
  node: [
    ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
    ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
  ]
};
Yo.node;
const Rt = v(Yo);
const Zo = {
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
Zo.node;
const Rn = v(Zo);
const Wo = {
  name: "cloud-rain",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 14v6", key: "1j4efv" }],
    ["path", { d: "M8 14v6", key: "17c4r9" }],
    ["path", { d: "M12 16v6", key: "c8a4gj" }]
  ]
};
Wo.node;
const Ma = v(Wo);
const qo = {
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
qo.node;
const Jo = v(qo);
const Go = {
  name: "cloud-upload",
  size: 24,
  node: [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
  ],
  aliases: ["upload-cloud"]
};
Go.node;
const Ea = v(Go);
const Xo = {
  name: "cloud",
  size: 24,
  node: [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]
};
Xo.node;
const Ko = v(Xo);
const $o = {
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
$o.node;
const Sa = v($o);
const ei = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
ei.node;
const Ia = v(ei);
const ti = {
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
ti.node;
const za = v(ti);
const ni = {
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
ni.node;
const ke = v(ni);
const oi = {
  name: "eighth-notes",
  size: 24,
  node: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19", key: "uy6ho8" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
    ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }]
  ],
  aliases: ["music"]
};
oi.node;
const Ba = v(oi);
const ii = {
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
ii.node;
const si = v(ii);
const ai = {
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
ai.node;
const ri = v(ai);
const ci = {
  name: "gauge",
  size: 24,
  node: [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
  ]
};
ci.node;
const li = v(ci);
const Ai = {
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
Ai.node;
const Da = v(Ai);
const di = {
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
di.node;
const Ta = v(di);
const hi = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
hi.node;
const Qa = v(hi);
const ui = {
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
ui.node;
const Oa = v(ui);
const pi = {
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
pi.node;
const Ha = v(pi);
const fi = {
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
fi.node;
const La = v(fi);
const mi = {
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
mi.node;
const ja = v(mi);
const gi = {
  name: "lock",
  size: 24,
  node: [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
  ]
};
gi.node;
const Pa = v(gi);
const bi = {
  name: "minus",
  size: 24,
  node: [["path", { d: "M5 12h14", key: "1ays0h" }]]
};
bi.node;
const Fa = v(bi);
const yi = {
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
yi.node;
const _i = v(yi);
const xi = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
xi.node;
const Ra = v(xi);
const vi = {
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
vi.node;
const wi = v(vi);
const ki = {
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
ki.node;
const Na = v(ki);
const Ci = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Ci.node;
const Ot = v(Ci);
const Mi = {
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
Mi.node;
const Va = v(Mi);
const Ei = {
  name: "power",
  size: 24,
  node: [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
  ]
};
Ei.node;
const Ve = v(Ei);
const Si = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
  ]
};
Si.node;
const Ua = v(Si);
const Ii = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
Ii.node;
const Ya = v(Ii);
const zi = {
  name: "server",
  size: 24,
  node: [
    ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
  ]
};
zi.node;
const Za = v(zi);
const Bi = {
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
Bi.node;
const Wa = v(Bi);
const Di = {
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
Di.node;
const qa = v(Di);
const Ti = {
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
Ti.node;
const Ja = v(Ti);
const Qi = {
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
Qi.node;
const Ga = v(Qi);
const Oi = {
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
Oi.node;
const bn = v(Oi);
const Hi = {
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
Hi.node;
const Xa = v(Hi);
const Li = {
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
Li.node;
const en = v(Li);
const ji = {
  name: "speaker",
  size: 24,
  node: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
    ["path", { d: "M12 14h.01", key: "1etili" }]
  ]
};
ji.node;
const Pi = v(ji);
const Fi = {
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
Fi.node;
const Ri = v(Fi);
const Ni = {
  name: "table-2",
  size: 24,
  node: [
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
  ]
};
Ni.node;
const Ka = v(Ni);
const Vi = {
  name: "thermometer",
  size: 24,
  node: [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]]
};
Vi.node;
const Ui = v(Vi);
const Yi = {
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
Yi.node;
const kt = v(Yi);
const Zi = {
  name: "tv",
  size: 24,
  node: [
    ["path", { d: "m17 2-5 5-5-5", key: "16satq" }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]
  ]
};
Zi.node;
const tn = v(Zi);
const Wi = {
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
Wi.node;
const $a = v(Wi);
const qi = {
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
qi.node;
const er = v(qi);
const Ji = {
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
Ji.node;
const tr = v(Ji);
const Gi = {
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
Gi.node;
const nr = v(Gi);
const Xi = {
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
Xi.node;
const or = v(Xi);
const Ki = {
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
Ki.node;
const ir = v(Ki);
const $i = {
  name: "wind",
  size: 24,
  node: [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
  ]
};
$i.node;
const Ct = v($i);
const es = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
es.node;
const We = v(es);
const ts = {
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
ts.node;
const sr = v(ts), Mt = {
  lightbulb: ja,
  lamp: La,
  "lamp-ceiling": Oa,
  "lamp-desk": Ha,
  plug: Va,
  fan: si,
  tv: tn,
  speaker: Pi,
  thermometer: Ui,
  droplets: ke,
  snowflake: bn,
  flame: ri,
  wind: Ct,
  sun: Ri,
  moon: _i,
  shield: qa,
  door: za,
  lock: Pa,
  blinds: va,
  video: er,
  "washing-machine": or,
  zap: sr,
  gauge: li,
  activity: ga,
  "air-vent": Ho,
  "cloud-sun": Jo,
  sparkles: en,
  house: Da,
  sofa: Xa,
  bed: xa,
  "cooking-pot": Sa,
  baby: _a
};
function Te(t, e = "house") {
  return Mt[t] || Mt[e];
}
function yn(t, e) {
  const n = t.split(".")[0];
  return n === "light" ? "lamp-ceiling" : n === "switch" ? "lamp" : n === "fan" ? "fan" : n === "camera" ? "video" : n === "climate" ? "air-vent" : n === "weather" ? "cloud-sun" : n === "media_player" ? e === "tv" ? "tv" : "speaker" : n === "lock" ? "lock" : n === "cover" ? "blinds" : n === "scene" || n === "script" || n === "automation" ? "sparkles" : e === "temperature" ? "thermometer" : e === "humidity" || e === "moisture" ? "droplets" : e === "door" || e === "window" || e === "opening" ? "door" : e === "power" || e === "voltage" || e === "energy" || e === "current" ? "zap" : e === "motion" || e === "occupancy" ? "activity" : "gauge";
}
function ns(t = 1e3) {
  const [e, n] = M(/* @__PURE__ */ new Date());
  return U(() => {
    const s = setInterval(() => n(/* @__PURE__ */ new Date()), t);
    return () => clearInterval(s);
  }, [t]), e;
}
function Nt(t) {
  return t < 10 ? "0" + t : String(t);
}
function os(t, e = !1) {
  return Nt(t.getHours()) + ":" + Nt(t.getMinutes()) + (e ? ":" + Nt(t.getSeconds()) : "");
}
function is(t) {
  return h("date.full", { weekday: ze("date.weekdays")[t.getDay()], day: t.getDate(), month: ze("date.months")[t.getMonth()] });
}
const le = "#0891b2", nn = "#d97706", Nn = "rgba(255,255,255,0.13)", ar = "rgba(255,255,255,0.04)", Vn = "rgba(255,255,255,0.08)", Un = "#141620", Ee = 210, $ = { l: 46, r: 14, t: 14, b: 26 };
function Et(t) {
  return t < 10 ? "0" + t : String(t);
}
function Ce(t) {
  const e = new Date(t);
  return Et(e.getHours()) + ":" + Et(e.getMinutes());
}
function Ue(t) {
  const e = new Date(t);
  return h("date.day_month", { day: e.getDate(), month: ze("date.months_short")[e.getMonth()] });
}
function me(t, e) {
  return e === "24h" ? Ce(t) : Ue(t) + ", " + Ce(t);
}
function G(t) {
  const e = Math.abs(t), n = e >= 100 ? t.toFixed(0) : e >= 10 ? t.toFixed(1) : e >= 1 ? t.toFixed(2) : t.toFixed(3);
  return n.indexOf(".") === -1 ? n : n.replace(/\.?0+$/, "");
}
function rr(t, e, n) {
  t === e && (t -= 1, e += 1);
  const s = (e - t) / n, i = Math.pow(10, Math.floor(Math.log(s) / Math.LN10)), a = [1, 2, 5, 10].map((c) => c * i).filter((c) => c >= s)[0], r = [];
  for (let c = Math.floor(t / a) * a; c <= e + a * 1e-3; c += a) r.push(+c.toFixed(10));
  return r[r.length - 1] < e && r.push(r[r.length - 1] + a), r;
}
function cr(t, e, n) {
  const s = [], i = new Date(t);
  if (n === "24h")
    for (i.setMinutes(0, 0, 0), i.setHours(Math.ceil(i.getHours() / 6) * 6); i.getTime() <= e; i.setHours(i.getHours() + 6)) s.push({ t: i.getTime(), label: Ce(i.getTime()) });
  else {
    i.setHours(0, 0, 0, 0), i.setDate(i.getDate() + 1);
    const a = n === "7d" ? 1 : 5;
    for (; i.getTime() <= e; i.setDate(i.getDate() + a))
      s.push({ t: i.getTime(), label: n === "7d" ? ze("date.weekdays_short")[i.getDay()] : i.getDate() + "." + Et(i.getMonth() + 1) });
  }
  return s;
}
function lr({ series: t, unit: e, range: n, width: s }) {
  const [i, a] = M(null), r = ee(null), c = Math.max(200, s), A = c - $.l - $.r, d = Ee - $.t - $.b, { from: u, to: p } = t, l = (C) => $.l + (C - u) / (p - u) * A;
  if (t.kind === "timeline" ? !t.segments.length : !t.points.length) return /* @__PURE__ */ o("div", { class: "chart-empty", children: h("chart.no_data") });
  const m = (C) => {
    const L = r.current;
    if (!L) return;
    const j = L.getBoundingClientRect(), g = u + (C - j.left - $.l) / A * (p - u);
    if (t.kind === "timeline") {
      let J = 0;
      t.segments.forEach((re, Me) => {
        re.from <= g && (J = Me);
      }), a(J);
      return;
    }
    const D = t.points, P = t.kind === "bars" ? t.bucketMs / 2 : 0;
    let R = 0;
    D.forEach((J, re) => {
      Math.abs(J.t + P - g) < Math.abs(D[R].t + P - g) && (R = re);
    }), a(R);
  }, x = {
    onMouseMove: (C) => m(C.clientX),
    onMouseLeave: () => a(null),
    onTouchStart: (C) => m(C.touches[0].clientX),
    onTouchMove: (C) => m(C.touches[0].clientX)
  }, w = cr(u, p, n).map((C) => /* @__PURE__ */ o("text", { x: l(C.t), y: Ee - 6, class: "chart-tick", "text-anchor": "middle", children: C.label }, C.t));
  if (t.kind === "timeline") {
    const C = $.t + d / 2 - 16, L = i != null ? t.segments[i] : null;
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: Ee, ...x, children: [
        t.segments.map((j, g) => {
          const D = l(j.from), P = l(j.to), R = Math.max(1, P - D - (P - D > 3 ? 2 : 0));
          return /* @__PURE__ */ o("rect", { x: D, y: C, width: R, height: 32, rx: 3, fill: j.on ? nn : j.on === null ? ar : Nn, stroke: j.on === null ? "rgba(255,255,255,0.25)" : "none", "stroke-dasharray": "3 3", opacity: i == null || i === g ? 1 : 0.55 }, g);
        }),
        /* @__PURE__ */ o("line", { x1: $.l, x2: c - $.r, y1: C + 44, y2: C + 44, stroke: Vn }),
        w
      ] }),
      /* @__PURE__ */ o("div", { class: "chart-legend", children: [
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: nn } }),
          h("switch.on")
        ] }),
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: Nn } }),
          h("switch.off")
        ] }),
        t.segments.some((j) => j.on === null) && /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { class: "key-na" }),
          h("chart.no_connection")
        ] })
      ] }),
      L && /* @__PURE__ */ o(Vt, { x: l(L.from) + Math.min(l(L.to) - l(L.from), 40) / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: L.on ? h("switch.on") : L.on === null ? h("chart.no_connection") : h("switch.off") }),
        /* @__PURE__ */ o("span", { children: [
          me(L.from, n),
          " — ",
          me(L.to, n)
        ] })
      ] })
    ] });
  }
  const b = t.points, B = b.some((C) => C.min != null && C.max != null);
  let O = 1 / 0, T = -1 / 0;
  b.forEach((C) => {
    O = Math.min(O, C.min != null ? C.min : C.v), T = Math.max(T, C.max != null ? C.max : C.v);
  }), t.kind === "bars" && (O = Math.min(0, O));
  const I = rr(O, T, 4), _ = I[0], y = I[I.length - 1], k = (C) => $.t + d - (C - _) / (y - _) * d, z = I.map((C) => /* @__PURE__ */ o("g", { children: [
    /* @__PURE__ */ o("line", { x1: $.l, x2: c - $.r, y1: k(C), y2: k(C), stroke: Vn }),
    /* @__PURE__ */ o("text", { x: $.l - 8, y: k(C) + 4, class: "chart-tick", "text-anchor": "end", children: G(C) })
  ] }, C)), S = i != null ? b[i] : null;
  if (t.kind === "bars") {
    const C = t.bucketMs / (p - u) * A, L = Math.max(2, Math.min(24, C - 2)), j = t.bucketMs >= 864e5, g = j && b.map((D, P) => {
      const R = new Date(D.t);
      return n === "30d" && (b.length - 1 - P) % 5 ? null : /* @__PURE__ */ o("text", { x: l(D.t) + C / 2, y: Ee - 6, class: "chart-tick", "text-anchor": "middle", children: n === "7d" ? ze("date.weekdays_short")[R.getDay()] : R.getDate() + "." + Et(R.getMonth() + 1) }, D.t);
    });
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: Ee, ...x, children: [
        z,
        b.map((D, P) => {
          const R = l(D.t) + (C - L) / 2, J = k(Math.max(0, D.v)), re = k(0), Me = Math.max(0, re - J), be = Math.min(4, L / 2, Me), qe = "M" + R + "," + re + "V" + (J + be) + "Q" + R + "," + J + " " + (R + be) + "," + J + "H" + (R + L - be) + "Q" + (R + L) + "," + J + " " + (R + L) + "," + (J + be) + "V" + re + "Z";
          return /* @__PURE__ */ o("path", { d: qe, fill: le, opacity: i == null || i === P ? 1 : 0.5 }, P);
        }),
        j ? g : w
      ] }),
      S && /* @__PURE__ */ o(Vt, { x: l(S.t) + C / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: [
          G(S.v),
          " ",
          e
        ] }),
        /* @__PURE__ */ o("span", { children: t.bucketMs >= 864e5 ? Ue(S.t) : Ue(S.t) + ", " + Ce(S.t) + "–" + Ce(S.t + t.bucketMs) })
      ] })
    ] });
  }
  const H = B ? b : b.concat({ t: p, v: b[b.length - 1].v }), V = H.map((C, L) => (L ? "L" : "M") + l(Math.max(C.t, u)).toFixed(1) + "," + k(C.v).toFixed(1)).join(""), X = V + "L" + l(H[H.length - 1].t).toFixed(1) + "," + k(_) + "L" + l(Math.max(H[0].t, u)).toFixed(1) + "," + k(_) + "Z", K = B ? b.map((C, L) => (L ? "L" : "M") + l(C.t).toFixed(1) + "," + k(C.max).toFixed(1)).join("") + b.slice().reverse().map((C) => "L" + l(C.t).toFixed(1) + "," + k(C.min).toFixed(1)).join("") + "Z" : "", q = b[b.length - 1];
  return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
    /* @__PURE__ */ o("svg", { ref: r, width: c, height: Ee, ...x, children: [
      z,
      B ? /* @__PURE__ */ o("path", { d: K, fill: le, opacity: 0.22 }) : /* @__PURE__ */ o("path", { d: X, fill: le, opacity: 0.1 }),
      /* @__PURE__ */ o("path", { d: V, fill: "none", stroke: le, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }),
      /* @__PURE__ */ o("circle", { cx: l(B ? q.t : p), cy: k(q.v), r: 4, fill: le, stroke: Un, "stroke-width": 2 }),
      S && /* @__PURE__ */ o("g", { children: [
        /* @__PURE__ */ o("line", { x1: l(S.t), x2: l(S.t), y1: $.t, y2: $.t + d, stroke: "rgba(255,255,255,0.35)" }),
        /* @__PURE__ */ o("circle", { cx: l(S.t), cy: k(S.v), r: 5, fill: le, stroke: Un, "stroke-width": 2 })
      ] }),
      w
    ] }),
    B && /* @__PURE__ */ o("div", { class: "chart-legend", children: [
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { class: "key-line", style: { background: le } }),
        h("chart.mean")
      ] }),
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { style: { background: le, opacity: 0.35 } }),
        h("chart.min_max")
      ] })
    ] }),
    S && /* @__PURE__ */ o(Vt, { x: l(S.t), W: c, children: [
      /* @__PURE__ */ o("b", { children: [
        G(S.v),
        " ",
        e
      ] }),
      S.min != null && S.max != null && /* @__PURE__ */ o("span", { children: [
        G(S.min),
        " … ",
        G(S.max),
        " ",
        e
      ] }),
      /* @__PURE__ */ o("span", { children: me(S.t, n) })
    ] })
  ] });
}
function Vt(t) {
  const e = Math.max(60, Math.min(t.W - 60, t.x));
  return /* @__PURE__ */ o("div", { class: "chart-tip", style: { left: e }, children: t.children });
}
const ct = {
  cool: { Icon: bn, color: le },
  heat: { Icon: ri, color: nn },
  heat_cool: { Icon: en, color: "#a3a3a3" },
  auto: { Icon: en, color: "#a3a3a3" },
  dry: { Icon: ke, color: "#a3a3a3" },
  fan_only: { Icon: si, color: "#a3a3a3" },
  off: { Icon: Ve, color: "rgba(255,255,255,0.25)" }
}, Ar = ["auto", "low", "medium", "middle", "high", "quiet", "turbo", "diffuse", "focus"], dr = (t) => Ar.indexOf(t) !== -1 ? h("ac.fan." + t) : t, Yn = (t) => ct[t] ? h("ac.mode." + t) : t;
function Zn(t, e, n, s, i) {
  const a = (135 + s * 270) * Math.PI / 180, r = (135 + i * 270) * Math.PI / 180, c = (i - s) * 270 > 180 ? 1 : 0;
  return "M" + (t + n * Math.cos(a)).toFixed(1) + "," + (e + n * Math.sin(a)).toFixed(1) + "A" + n + "," + n + " 0 " + c + " 1 " + (t + n * Math.cos(r)).toFixed(1) + "," + (e + n * Math.sin(r)).toFixed(1);
}
function hr({ it: t, size: e }) {
  const n = Y(), s = n.states[t.entity], i = s ? s.attributes : {}, a = s ? s.state : "off", r = a === "off", c = i.target_temp_step || 0.5, A = i.min_temp != null ? i.min_temp : 16, d = i.max_temp != null ? i.max_temp : 31, [u, p] = M(null), l = ee(0), f = u ?? i.temperature;
  U(() => {
    p(null);
  }, [i.temperature]);
  const m = (I) => {
    const _ = f ?? (A + d) / 2, y = Math.max(A, Math.min(d, Math.round((_ + I * c) / c) * c));
    p(y), clearTimeout(l.current), l.current = window.setTimeout(() => n.callService(t.entity, "set_temperature", { temperature: y }), 800);
  }, x = i.current_temperature != null ? String(i.current_temperature) : t.temp ? ue(n, t.temp) : void 0, E = ct[a] || ct.auto, w = e.h < 260 || e.w < 260, b = w ? 132 : 176, B = f != null ? (f - A) / (d - A) : 0, O = i.hvac_modes || [], T = i.fan_modes || [];
  return /* @__PURE__ */ o("div", { class: "ac" + (w ? " compact" : ""), children: [
    /* @__PURE__ */ o("div", { class: "ac-main", children: [
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => m(-1), children: /* @__PURE__ */ o(Fa, { size: 22 }) }),
      /* @__PURE__ */ o("div", { class: "ac-dial", style: { width: b, height: b }, children: [
        /* @__PURE__ */ o("svg", { width: b, height: b, children: [
          /* @__PURE__ */ o("path", { d: Zn(b / 2, b / 2, b / 2 - 8, 0, 1), stroke: "rgba(255,255,255,0.1)", "stroke-width": 8, fill: "none", "stroke-linecap": "round" }),
          !r && f != null && /* @__PURE__ */ o("path", { d: Zn(b / 2, b / 2, b / 2 - 8, 0, Math.max(0.01, B)), stroke: E.color, "stroke-width": 8, fill: "none", "stroke-linecap": "round" })
        ] }),
        /* @__PURE__ */ o("div", { class: "ac-center", children: [
          /* @__PURE__ */ o("div", { class: "ac-target", children: [
            f != null && !r ? G(f) : "—",
            /* @__PURE__ */ o("sup", { children: "°" })
          ] }),
          /* @__PURE__ */ o("div", { class: "ac-mode", children: Yn(a) }),
          x != null && !je(x) && /* @__PURE__ */ o("div", { class: "ac-room", children: h("ac.room", { t: G(Number(x)) }) })
        ] })
      ] }),
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => m(1), children: /* @__PURE__ */ o(Ot, { size: 22 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "ac-modes", children: O.map((I) => {
      const _ = ct[I] || { Icon: Ho, color: "#a3a3a3" };
      return /* @__PURE__ */ o(
        "button",
        {
          class: "ac-mode-btn" + (I === a ? " active" : ""),
          title: Yn(I),
          style: I === a && I !== "off" ? { background: _.color, borderColor: _.color } : void 0,
          onClick: () => n.callService(t.entity, "set_hvac_mode", { hvac_mode: I }),
          children: /* @__PURE__ */ o(_.Icon, { size: 18 })
        },
        I
      );
    }) }),
    !w && T.length > 0 && !r && /* @__PURE__ */ o("div", { class: "seg seg-wide ac-fan", children: T.map((I) => /* @__PURE__ */ o("button", { class: i.fan_mode === I ? "active" : "", onClick: () => n.callService(t.entity, "set_fan_mode", { fan_mode: I }), children: dr(I) }, I)) })
  ] });
}
function ur({ card: t, size: e }) {
  const n = Y(), [s, i] = M(0), a = t.items[Math.min(s, t.items.length - 1)];
  return /* @__PURE__ */ o("div", { class: "ac-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((r, c) => /* @__PURE__ */ o("button", { class: c === s ? "active" : "", onClick: () => i(c), children: ie(n, r) }, r.entity)) }),
    /* @__PURE__ */ o(hr, { it: a, size: e }, a.entity)
  ] });
}
const se = {
  PAUSE: 1,
  VOLUME_SET: 4,
  VOLUME_MUTE: 8,
  PREVIOUS: 16,
  NEXT: 32,
  TURN_ON: 128,
  TURN_OFF: 256,
  SELECT_SOURCE: 2048,
  PLAY: 16384
}, pr = ["playing", "paused", "idle", "on", "off", "standby", "buffering"], Ke = (t) => pr.indexOf(t) !== -1 ? h("media.state." + t) : t;
function fr({ it: t, tv: e, size: n }) {
  const s = Y(), i = s.states[t.entity], a = i ? i.attributes : {}, r = Number(a.supported_features) || 0, c = (y) => (r & y) === y, A = i ? i.state : "off", d = A === "off" || A === "standby", u = A === "playing", p = (y, k) => s.callService(t.entity, y, k), [l, f] = M(null), m = l ?? (typeof a.volume_level == "number" ? a.volume_level : null);
  U(() => {
    f(null);
  }, [a.volume_level]);
  const x = ee(0), E = (y) => {
    const k = Math.max(0, Math.min(1, Math.round(y * 100) / 100));
    f(k), clearTimeout(x.current), x.current = window.setTimeout(() => p("volume_set", { volume_level: k }), 400);
  }, w = ee(null), b = (y) => {
    const k = w.current;
    if (!k) return;
    const z = k.getBoundingClientRect();
    E((y - z.left) / z.width);
  }, B = s.pictureUrl(a.entity_picture_local || a.entity_picture), O = a.media_title || a.app_name || a.source || Ke(A), T = a.media_artist || a.media_album_name || (a.media_title ? Ke(A) : "") || "", I = n.h >= 300 && n.w >= 300, _ = e ? tn : d ? Pi : Ba;
  return d && e ? /* @__PURE__ */ o("div", { class: "media media-off", children: [
    /* @__PURE__ */ o("div", { class: "media-art-empty big", children: /* @__PURE__ */ o(tn, { size: 40 }) }),
    /* @__PURE__ */ o("div", { class: "media-title", children: ie(s, t) }),
    /* @__PURE__ */ o("div", { class: "media-sub", children: Ke(A) }),
    c(se.TURN_ON) ? /* @__PURE__ */ o("button", { class: "pill-btn media-power", onClick: () => p("turn_on"), children: [
      /* @__PURE__ */ o(Ve, { size: 18 }),
      /* @__PURE__ */ o("span", { children: h("common.turn_on") })
    ] }) : /* @__PURE__ */ o("div", { class: "muted small media-hint", children: h("media.tv_remote_only") })
  ] }) : /* @__PURE__ */ o("div", { class: "media" + (I ? " big" : ""), children: [
    /* @__PURE__ */ o("div", { class: "media-top", children: [
      B && !d ? /* @__PURE__ */ o("div", { class: "media-art", style: { backgroundImage: "url(" + B + ")" } }) : /* @__PURE__ */ o("div", { class: "media-art media-art-empty", children: /* @__PURE__ */ o(_, { size: I ? 36 : 26 }) }),
      /* @__PURE__ */ o("div", { class: "media-info", children: [
        /* @__PURE__ */ o("div", { class: "media-title", children: O }),
        T && /* @__PURE__ */ o("div", { class: "media-sub", children: T }),
        /* @__PURE__ */ o("div", { class: "media-state" + (u ? " on" : ""), children: [
          u && /* @__PURE__ */ o("i", { class: "eq", children: [
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {})
          ] }),
          Ke(A)
        ] })
      ] }),
      (c(se.TURN_OFF) || c(se.TURN_ON)) && /* @__PURE__ */ o("button", { class: "icon-round", title: h(d ? "common.turn_on" : "common.turn_off"), onClick: () => p(d ? "turn_on" : "turn_off"), children: /* @__PURE__ */ o(Ve, { size: 16 }) })
    ] }),
    (c(se.PAUSE) || c(se.PLAY) || c(se.NEXT)) && /* @__PURE__ */ o("div", { class: "media-controls", children: [
      c(se.PREVIOUS) && /* @__PURE__ */ o("button", { onClick: () => p("media_previous_track"), children: /* @__PURE__ */ o(Ja, { size: 22 }) }),
      /* @__PURE__ */ o("button", { class: "media-play", onClick: () => p("media_play_pause"), children: u ? /* @__PURE__ */ o(Ra, { size: 24 }) : /* @__PURE__ */ o(Na, { size: 24 }) }),
      c(se.NEXT) && /* @__PURE__ */ o("button", { onClick: () => p("media_next_track"), children: /* @__PURE__ */ o(Ga, { size: 22 }) })
    ] }),
    m != null && c(se.VOLUME_SET) && /* @__PURE__ */ o("div", { class: "media-volume", children: [
      c(se.VOLUME_MUTE) && /* @__PURE__ */ o("button", { onClick: () => p("volume_mute", { is_volume_muted: !a.is_volume_muted }), children: a.is_volume_muted ? /* @__PURE__ */ o(nr, { size: 18 }) : /* @__PURE__ */ o(tr, { size: 18 }) }),
      /* @__PURE__ */ o(
        "div",
        {
          class: "vol-bar",
          ref: w,
          onClick: (y) => b(y.clientX),
          onTouchMove: (y) => b(y.touches[0].clientX),
          children: /* @__PURE__ */ o("div", { class: "vol-fill", style: { width: Math.round(m * 100) + "%" } })
        }
      ),
      /* @__PURE__ */ o("span", { class: "vol-num", children: Math.round(m * 100) })
    ] }),
    e && c(se.SELECT_SOURCE) && a.source_list && /* @__PURE__ */ o("div", { class: "chips media-sources", children: a.source_list.map((y) => /* @__PURE__ */ o("button", { class: "chip" + (a.source === y ? " active" : ""), onClick: () => p("select_source", { source: y }), children: y }, y)) })
  ] });
}
function mr({ card: t, size: e }) {
  const n = Y(), s = t.items.findIndex((A) => n.states[A.entity] && n.states[A.entity].state === "playing"), [i, a] = M(s >= 0 ? s : 0), r = t.items[Math.min(i, t.items.length - 1)], c = t.type === "tv" || !!n.states[r.entity] && n.states[r.entity].attributes.device_class === "tv";
  return /* @__PURE__ */ o("div", { class: "media-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((A, d) => {
      const u = n.states[A.entity];
      return /* @__PURE__ */ o("button", { class: d === i ? "active" : "", onClick: () => a(d), children: [
        u && u.state === "playing" && /* @__PURE__ */ o("i", { class: "dot-live" }),
        ie(n, A)
      ] }, A.entity);
    }) }),
    we(n, r.entity) && /* @__PURE__ */ o(fr, { it: r, tv: c, size: e }, r.entity)
  ] });
}
const gr = {
  "clear-night": { Icon: _i },
  cloudy: { Icon: Ko },
  exceptional: { Icon: Rt },
  fog: { Icon: Ca },
  hail: { Icon: Rn },
  lightning: { Icon: Rt },
  "lightning-rainy": { Icon: Rt },
  partlycloudy: { Icon: Jo },
  pouring: { Icon: Ma },
  rainy: { Icon: ka },
  snowy: { Icon: bn },
  "snowy-rainy": { Icon: Rn },
  sunny: { Icon: Ri },
  windy: { Icon: Ct },
  "windy-variant": { Icon: Ct }
};
function Ie(t) {
  const e = gr[t || ""];
  return { label: e ? h("weather." + t) : t || "—", Icon: e ? e.Icon : Ko };
}
function ss(t, e) {
  const [n, s] = M([]), [i, a] = M([]), r = e ? t.states[e] : void 0, c = r && Number(r.attributes.supported_features) || 0;
  return U(() => {
    if (!e || t.status !== "connected" || !c) return;
    const A = [];
    c & 2 && A.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: "hourly" },
      (u) => s(u.forecast || [])
    ));
    const d = c & 1 ? "daily" : c & 4 ? "twice_daily" : "";
    return d && A.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: d },
      (u) => a(br(u.forecast || [], d === "twice_daily"))
    )), () => A.forEach((u) => u());
  }, [e, t.status, c]), { hourly: n, days: i };
}
function br(t, e) {
  if (!e) return t.map((i) => ({ t: Date.parse(i.datetime), hi: i.temperature, lo: i.templow, condition: i.condition }));
  const n = {}, s = [];
  return t.forEach((i) => {
    const a = new Date(Date.parse(i.datetime)), r = a.getFullYear() + "-" + a.getMonth() + "-" + a.getDate();
    n[r] || (n[r] = { t: a.getTime() }, s.push(r));
    const c = n[r];
    [i.temperature, i.templow].filter((d) => typeof d == "number").forEach((d) => {
      c.hi = c.hi == null ? d : Math.max(c.hi, d), c.lo = c.lo == null ? d : Math.min(c.lo, d);
    }), (i.is_daytime !== !1 || !c.condition) && (c.condition = i.condition);
  }), s.map((i) => n[i]);
}
function yr(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "m/s" ? n : e === "mph" ? n * 0.447 : n / 3.6;
}
function _r(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "mmHg" ? n : e === "inHg" ? n * 25.4 : n * 0.750062;
}
function oe(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : String(Math.round(e));
}
const xr = 64, vr = 32, Wn = 36, qn = 84, wr = 33;
function as({ card: t, size: e }) {
  const n = Y(), s = Dt(), i = t.items.filter((_) => _.entity.indexOf("weather.") === 0)[0], a = t.items.filter((_) => _ !== i), r = i && i.entity, c = r ? n.states[r] : void 0, { hourly: A, days: d } = ss(n, r);
  let u = e.h - (c ? xr + vr : 0);
  const p = Math.max(0, Math.min(a.length, Math.floor(u / Wn)));
  u -= p * Wn + (p ? 10 : 0);
  const l = !!c && A.length > 0 && u >= qn;
  l && (u -= qn + 12);
  const f = c ? Math.max(0, Math.min(d.length, 7, Math.floor((u - 10) / wr))) : 0, m = d.slice(0, f), x = Math.min.apply(null, m.map((_) => _.lo != null ? _.lo : 99)), E = Math.max.apply(null, m.map((_) => _.hi != null ? _.hi : -99)), w = (_) => (_ - x) / Math.max(1, E - x) * 100, b = Date.now(), B = c ? c.attributes : {}, O = Ie(c && c.state), T = yr(B.wind_speed, B.wind_speed_unit), I = _r(B.pressure, B.pressure_unit);
  return /* @__PURE__ */ o("div", { class: "weather", children: [
    c && /* @__PURE__ */ o("div", { class: "weather-now", children: [
      /* @__PURE__ */ o(O.Icon, { size: e.w > 360 ? 54 : 40 }),
      /* @__PURE__ */ o("div", { class: "weather-temp", children: [
        oe(B.temperature),
        /* @__PURE__ */ o("sup", { children: "°" })
      ] }),
      /* @__PURE__ */ o("div", { class: "weather-desc", children: [
        /* @__PURE__ */ o("b", { children: O.label }),
        B.apparent_temperature != null && /* @__PURE__ */ o("span", { children: h("weather.feels_like", { t: oe(B.apparent_temperature) }) }),
        d[0] && d[0].hi != null && /* @__PURE__ */ o("span", { children: [
          oe(d[0].lo),
          "° … ",
          oe(d[0].hi),
          "°"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ o("div", { class: "weather-facts", children: [
      T != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(Ct, { size: 14 }),
        h("weather.wind", { v: T.toFixed(1) })
      ] }),
      B.humidity != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(ke, { size: 14 }),
        oe(B.humidity),
        "%"
      ] }),
      I != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(li, { size: 14 }),
        h("weather.pressure", { v: Math.round(I) })
      ] })
    ] }),
    p > 0 && /* @__PURE__ */ o("div", { class: "weather-rooms", children: a.slice(0, p).map((_) => {
      const y = n.states[_.entity], k = _.entity.indexOf("weather.") === 0, z = k ? y && y.attributes.temperature : y && y.state, S = k ? y && y.attributes.humidity : _.hum ? ue(n, _.hum) : void 0;
      return /* @__PURE__ */ o("div", { class: "wroom tappable", onClick: () => s(_.hum ? [_.entity, _.hum] : [_.entity]), children: [
        /* @__PURE__ */ o("span", { class: "wroom-name", children: ie(n, _) }),
        S != null && /* @__PURE__ */ o("span", { class: "wroom-hum", children: [
          /* @__PURE__ */ o(ke, { size: 12 }),
          oe(S),
          "%"
        ] }),
        /* @__PURE__ */ o("b", { class: "wroom-temp", children: [
          kr(z),
          "°"
        ] })
      ] }, _.entity);
    }) }),
    l && /* @__PURE__ */ o("div", { class: "weather-hours", children: A.filter((_) => Date.parse(_.datetime) > b - 36e5).slice(0, 12).map((_) => {
      const y = Ie(_.condition);
      return /* @__PURE__ */ o("div", { class: "hour", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: Ce(Date.parse(_.datetime)) }),
        /* @__PURE__ */ o(y.Icon, { size: 18 }),
        /* @__PURE__ */ o("b", { children: [
          oe(_.temperature),
          "°"
        ] })
      ] }, _.datetime);
    }) }),
    m.length > 0 && /* @__PURE__ */ o("div", { class: "weather-days", children: m.map((_, y) => {
      const k = Ie(_.condition);
      return /* @__PURE__ */ o("div", { class: "day", children: [
        /* @__PURE__ */ o("span", { class: "day-name", children: y === 0 ? h("weather.today") : ze("date.weekdays_short")[new Date(_.t).getDay()] }),
        /* @__PURE__ */ o(k.Icon, { size: 18 }),
        /* @__PURE__ */ o("span", { class: "day-lo", children: [
          oe(_.lo),
          "°"
        ] }),
        /* @__PURE__ */ o("span", { class: "day-bar", children: _.lo != null && _.hi != null && /* @__PURE__ */ o("i", { style: { left: w(_.lo) + "%", width: Math.max(4, w(_.hi) - w(_.lo)) + "%" } }) }),
        /* @__PURE__ */ o("span", { class: "day-hi", children: [
          oe(_.hi),
          "°"
        ] })
      ] }, _.t);
    }) })
  ] });
}
function kr(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : (Math.round(e * 10) / 10).toFixed(1);
}
function Cr({ entity: t }) {
  const e = Y(), n = e.states[t], { days: s } = ss(e, t);
  if (!n || n.state === "unavailable") return null;
  const i = Ie(n.state), a = s[0];
  return /* @__PURE__ */ o("div", { class: "ambient-weather", children: [
    /* @__PURE__ */ o(i.Icon, { size: 30 }),
    /* @__PURE__ */ o("span", { class: "aw-temp", children: [
      oe(n.attributes.temperature),
      "°"
    ] }),
    /* @__PURE__ */ o("span", { class: "aw-desc", children: [
      i.label,
      a && a.hi != null && /* @__PURE__ */ o("small", { children: [
        oe(a.lo),
        "° … ",
        oe(a.hi),
        "°"
      ] })
    ] })
  ] });
}
function _n(t, e) {
  if (!e || _t[t].domains.indexOf(e.entity_id.split(".")[0]) === -1) return !1;
  const n = e.attributes.device_class, s = e.entity_id.indexOf("weather.") === 0;
  return t === "climate" || t === "weather" ? s || n === "temperature" : !0;
}
function Jn(t, e, n) {
  return e.filter((s) => t.states[s] && t.states[s].entity_id.indexOf("sensor.") === 0 && t.states[s].attributes.device_class === n)[0];
}
function rs(t, e, n) {
  if (!n.device) return [n];
  const s = t.devices[n.device];
  if (!s) return n.entity ? [{ entity: n.entity, name: n.name }] : [];
  const i = s.entities.filter((A) => t.registry[A] && t.registry[A].ec == null && !!t.states[A]), a = i.filter((A) => _n(e, t.states[A])), r = a.length === 1, c = (A) => r ? n.name || s.name : t.registry[A].en || s.name || void 0;
  return e === "climate" ? a.map((A) => ({ entity: A, hum: Jn(t, i, "humidity"), name: c(A) })) : e === "ac" ? a.map((A) => ({ entity: A, temp: n.temp || Jn(t, i, "temperature"), name: c(A) })) : a.map((A) => ({ entity: A, name: c(A), icon: void 0 }));
}
function Mr(t, e) {
  if (!e.items.some((i) => i.device)) return e;
  const n = {}, s = [];
  return e.items.forEach((i) => rs(t, e.type, i).forEach((a) => {
    n[a.entity] || (n[a.entity] = !0, s.push(a));
  })), { ...e, items: s };
}
function Ht(t, e) {
  const n = Mr(t, e.title ? e : { ...e, title: xt(e.type) }), s = n.items.filter((i) => we(t, i.entity));
  return s.length === n.items.length ? n : { ...n, items: s };
}
function ie(t, e) {
  const n = t.states[e.entity];
  return e.name || n && n.attributes.friendly_name || e.entity;
}
function Er(t, e) {
  const n = t.states[e];
  return n ? n.attributes.device_class : void 0;
}
const Sr = [
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
], Ir = ["door", "window", "opening", "garage_door", "moisture", "smoke", "gas", "problem", "safety"];
function on(t, e) {
  const n = t.states[e];
  if (!n || je(n.state)) return { text: h("sensor.no_data"), alert: !1, on: !1 };
  const s = e.split(".")[0], i = n.attributes.device_class;
  if (s === "binary_sensor") {
    const r = n.state === "on", c = Sr.indexOf(i) !== -1 ? "sensor." + i + "." : "sensor.";
    return { text: h(c + (r ? "on" : "off")), alert: r && Ir.indexOf(i) !== -1, on: r };
  }
  if (s === "lock") return { text: n.state === "locked" ? h("sensor.locked") : h("sensor.unlocked"), alert: n.state !== "locked", on: n.state !== "locked" };
  if (s === "cover") return { text: n.state === "open" ? h("sensor.open") : n.state === "closed" ? h("sensor.closed") : n.state, alert: !1, on: n.state === "open" };
  const a = parseFloat(n.state);
  return { text: (isNaN(a) ? n.state : String(Math.round(a * 10) / 10)) + bt(t, e), alert: !1, on: !1 };
}
function cs(t) {
  return Math.max(1, Math.min(5, Math.floor(t.w / 150)));
}
function zr({ card: t, size: e }) {
  const n = Y(), s = Dt(), i = e.h / Math.max(1, t.items.length) < 95;
  return /* @__PURE__ */ o("div", { class: "rooms" + (i ? " compact" : ""), children: t.items.map((a) => {
    const r = a.entity.indexOf("weather.") === 0 ? n.states[a.entity] : void 0, c = r ? Ie(r.state).Icon : null;
    return /* @__PURE__ */ o("div", { class: "room tappable" + (r ? " room-outside" : ""), onClick: () => s(a.hum ? [a.entity, a.hum] : [a.entity]), children: [
      /* @__PURE__ */ o("div", { class: "room-name", children: [
        c && /* @__PURE__ */ o(c, { size: 14 }),
        ie(n, a)
      ] }),
      /* @__PURE__ */ o("div", { class: "room-vals", children: [
        /* @__PURE__ */ o("span", { class: "room-temp", children: [
          st(r ? String(r.attributes.temperature) : ue(n, a.entity)),
          /* @__PURE__ */ o("sup", { children: "°" })
        ] }),
        r && r.attributes.humidity != null && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(ke, { size: 14 }),
          Math.round(r.attributes.humidity),
          "%"
        ] }),
        !r && a.hum && we(n, a.hum) && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(ke, { size: 14 }),
          st(ue(n, a.hum), 0),
          "%"
        ] })
      ] })
    ] }, a.entity);
  }) });
}
function Br(t, e) {
  const n = ee(0), s = ee(!1), i = () => {
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
function Dr({ it: t }) {
  const e = Y(), n = Dt(), s = Br(() => n([t.entity]), () => e.toggle(t.entity)), i = ue(e, t.entity), a = Bt(i), r = Te(t.icon || yn(t.entity));
  return /* @__PURE__ */ o("button", { class: "light" + (a ? " on" : "") + (i === void 0 ? " na" : ""), ...s, children: [
    /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(r, { size: 22 }) }),
    /* @__PURE__ */ o("span", { class: "light-name", children: ie(e, t) }),
    /* @__PURE__ */ o("span", { class: "light-state", children: h(i === void 0 ? "switch.unavailable" : a ? "switch.on" : "switch.off") })
  ] });
}
function Tr({ card: t, size: e }) {
  return /* @__PURE__ */ o("div", { class: "lights cols-" + cs(e) + (e.h < 300 ? " compact" : ""), children: t.items.map((n) => /* @__PURE__ */ o(Dr, { it: n }, n.entity)) });
}
function Qr({ card: t, onCamera: e }) {
  const n = Y(), [s, i] = M(0), a = t.items[Math.min(s, t.items.length - 1)], r = a ? n.cameraStreamUrl(a.entity) : "";
  return /* @__PURE__ */ o("div", { class: "cam-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((c, A) => /* @__PURE__ */ o("button", { class: A === s ? "active" : "", onClick: () => i(A), children: ie(n, c) }, c.entity + A)) }),
    /* @__PURE__ */ o("div", { class: "cam fit-" + (t.fit || "cover"), onClick: () => r && e(r), children: [
      r ? /* @__PURE__ */ o("img", { src: r, alt: "" }) : /* @__PURE__ */ o("div", { class: "cam-empty", children: [
        /* @__PURE__ */ o($a, { size: 26 }),
        /* @__PURE__ */ o("span", { children: h("camera.no_stream") })
      ] }),
      r && /* @__PURE__ */ o("span", { class: "live", children: [
        /* @__PURE__ */ o("i", {}),
        "LIVE"
      ] })
    ] })
  ] });
}
function Or({ card: t }) {
  const e = Y(), n = Dt();
  return /* @__PURE__ */ o("div", { class: "sensors", children: t.items.map((s) => {
    const i = on(e, s.entity), a = Te(s.icon || yn(s.entity, Er(e, s.entity)));
    return /* @__PURE__ */ o("div", { class: "status-row tappable" + (i.alert ? " alert" : ""), onClick: () => n([s.entity]), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(a, { size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: ie(e, s) }),
        /* @__PURE__ */ o("small", { children: i.text })
      ] })
    ] }, s.entity);
  }) });
}
function Hr({ card: t, size: e }) {
  const n = Y(), [s, i] = M(""), a = (r) => {
    const c = r.split(".")[0];
    n.callService(r, c === "automation" ? "trigger" : "turn_on"), i(r), setTimeout(() => i(""), 1200);
  };
  return /* @__PURE__ */ o("div", { class: "lights cols-" + cs(e) + (e.h < 300 ? " compact" : ""), children: t.items.map((r) => {
    const c = Te(r.icon || "sparkles");
    return /* @__PURE__ */ o("button", { class: "light scene" + (s === r.entity ? " on" : ""), onClick: () => a(r.entity), children: [
      /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(c, { size: 22 }) }),
      /* @__PURE__ */ o("span", { class: "light-name", children: ie(n, r) }),
      /* @__PURE__ */ o("span", { class: "light-state", children: s === r.entity ? h("scene.started") : h("scene.tap_to_run") })
    ] }, r.entity);
  }) });
}
function ls(t) {
  const e = Y(), { size: n, onCamera: s } = t;
  if (!t.card.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: h("card.empty") });
  const i = Ht(e, t.card);
  if (!i.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: h("card.all_unavailable") });
  switch (i.type) {
    case "climate":
      return /* @__PURE__ */ o(zr, { card: i, size: n });
    case "switches":
      return /* @__PURE__ */ o(Tr, { card: i, size: n });
    case "cameras":
      return /* @__PURE__ */ o(Qr, { card: i, onCamera: s });
    case "sensors":
      return /* @__PURE__ */ o(Or, { card: i });
    case "scenes":
      return /* @__PURE__ */ o(Hr, { card: i, size: n });
    case "ac":
      return /* @__PURE__ */ o(ur, { card: i, size: n });
    case "speakers":
    case "tv":
      return /* @__PURE__ */ o(mr, { card: i, size: n });
    case "weather":
      return /* @__PURE__ */ o(as, { card: i, size: n });
  }
}
function As(t) {
  const e = Y(), n = Ht(e, t.card);
  if (n.type !== "switches") return null;
  const s = n.items.filter((i) => Bt(ue(e, i.entity)));
  return s.length ? /* @__PURE__ */ o("button", { class: "chip-btn", onClick: () => s.forEach((i) => e.turnOff(i.entity)), children: [
    /* @__PURE__ */ o(Ve, { size: 14 }),
    /* @__PURE__ */ o("span", { children: h("switches.all_off") })
  ] }) : null;
}
function ds(t, e) {
  const n = Ht(t, e);
  if (n.type === "switches") {
    const s = n.items.filter((i) => Bt(ue(t, i.entity))).length;
    return h("switches.title_count", { title: n.title, on: s, total: n.items.length });
  }
  return n.title;
}
function Gn(t, e) {
  const n = Ht(t, e), s = n.items[0];
  if (n.type === "climate") {
    const i = n.items.filter((a) => a.entity.indexOf("weather.") !== 0)[0];
    return { text: i ? st(ue(t, i.entity)) + "°" : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "switches") {
    const i = n.items.filter((a) => Bt(ue(t, a.entity))).length;
    return { text: i ? h("chip.on_count", { title: n.title, n: i }) : h("chip.off", { title: n.title }), lit: i > 0, alert: !1 };
  }
  if (n.type === "sensors") {
    for (let i = 0; i < n.items.length; i++) {
      const a = on(t, n.items[i].entity);
      if (a.alert) return { text: ie(t, n.items[i]) + ": " + a.text.toLowerCase(), lit: !1, alert: !0 };
    }
    return { text: s ? on(t, s.entity).text : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "ac" && s) {
    const i = t.states[s.entity];
    return !i || i.state === "off" ? { text: h("chip.off", { title: n.title }), lit: !1, alert: !1 } : { text: n.title + ": " + i.attributes.temperature + "°", lit: !0, alert: !1 };
  }
  if ((n.type === "speakers" || n.type === "tv") && n.items.length) {
    const i = n.items.filter((c) => t.states[c.entity] && t.states[c.entity].state === "playing")[0], a = i && t.states[i.entity];
    return a ? { text: "♪ " + (a.attributes.media_title || ie(t, i)), lit: !0, alert: !1 } : { text: n.items.filter((c) => t.states[c.entity] && ["on", "idle", "paused"].indexOf(t.states[c.entity].state) !== -1).length && n.type === "tv" ? h("chip.on", { title: n.title }) : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "weather" && s) {
    const i = t.states[s.entity];
    return { text: i ? Math.round(i.attributes.temperature) + "° " + Ie(i.state).label.toLowerCase() : n.title, lit: !1, alert: !1 };
  }
  return { text: n.title, lit: !1, alert: !1 };
}
function Lr(t) {
  return /* @__PURE__ */ o("section", { class: "panel " + (t.class || ""), children: [
    /* @__PURE__ */ o("div", { class: "panel-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      t.aside
    ] }),
    t.children
  ] });
}
function jr(t) {
  const e = Y(), n = Qt(), s = ns(5e3), i = n.state.layout.cards.filter((c) => c.type === "weather" && c.chip && c.items.length)[0], a = n.state.layout.cards.filter((c) => c.chip && c.type !== "weather"), r = a.filter((c) => Gn(e, c).alert);
  return /* @__PURE__ */ o("div", { ref: t.innerRef, class: "ambient" + (t.visible ? " visible" : ""), children: [
    /* @__PURE__ */ o("div", { class: "ambient-clock", children: [
      /* @__PURE__ */ o("div", { class: "ambient-time", children: os(s) }),
      /* @__PURE__ */ o("div", { class: "ambient-date", children: is(s) }),
      i && /* @__PURE__ */ o(Cr, { entity: i.items[0].entity })
    ] }),
    /* @__PURE__ */ o("div", { class: "glances", children: [
      e.status !== "connected" && e.status !== "connecting" && /* @__PURE__ */ o("button", { class: "glance warn", onClick: t.onConnection, children: [
        /* @__PURE__ */ o(ir, { size: 18 }),
        /* @__PURE__ */ o("span", { children: h("ambient.offline") })
      ] }),
      r.concat(a.filter((c) => r.indexOf(c) === -1)).map((c) => {
        const A = Gn(e, c), d = Te(c.icon);
        return /* @__PURE__ */ o("button", { class: "glance" + (A.lit ? " lit" : "") + (A.alert ? " alert" : ""), onClick: () => t.onSheet(c), children: [
          /* @__PURE__ */ o(d, { size: 18 }),
          /* @__PURE__ */ o("span", { children: A.text })
        ] }, c.id);
      })
    ] }),
    /* @__PURE__ */ o("div", { class: "grabber", children: [
      /* @__PURE__ */ o("div", { class: "grabber-text" + (t.showHint ? " visible" : ""), children: h("ambient.swipe_hint") }),
      /* @__PURE__ */ o("div", { class: "grabber-bar" })
    ] })
  ] });
}
const ae = 12, Oe = 16, Pr = 700, Xn = 6, Fr = 44, Rr = 84;
function Nr(t) {
  const [e, n] = M({ w: 0, h: 0 });
  return zt(() => {
    const s = () => {
      const i = t.current;
      i && n({ w: i.clientWidth, h: i.clientHeight });
    };
    return s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []), e;
}
function Kn(t) {
  const e = "touches" in t ? t.touches[0] || t.changedTouches[0] : t;
  return { x: e.clientX, y: e.clientY };
}
function Vr({ editing: t, onCamera: e, onEdit: n }) {
  const s = Y(), i = Qt(), a = ee(null), r = Nr(a), [c, A] = M(null), d = ee(null), u = i.state.layout.cards, p = r.w - Oe * 2, l = r.h - Oe * 2, f = r.w > 0 && p < Pr, m = (p - ae * (ge - 1)) / ge, x = m + ae, E = Math.max(1, Math.floor((l + ae) / x)), w = Math.max(0, (l - (E * x - ae)) / 2), b = (k) => ({ left: k.x * x, top: k.y * x, width: k.w * x - ae, height: k.h * x - ae }), B = (k, z, S) => {
    if (!t || f || "button" in k && k.button !== 0) return;
    k.stopPropagation();
    const H = Kn(k), V = { id: z.id, mode: S, x0: H.x, y0: H.y, orig: z, dx: 0, dy: 0, active: S === "resize", preview: u };
    d.current = V, A(V);
    const X = (q) => {
      const C = d.current;
      if (!C) return;
      const L = Kn(q), j = L.x - C.x0, g = L.y - C.y0, D = C.active || Math.abs(j) > Xn || Math.abs(g) > Xn;
      if (!D) return;
      q.cancelable && q.preventDefault();
      const P = C.orig, R = vt(C.mode === "move" ? { ...P, x: P.x + j / x, y: P.y + g / x } : { ...P, w: P.w + j / x, h: P.h + g / x }), J = { ...C, dx: j, dy: g, active: D, preview: Re(u, R) };
      d.current = J, A(J);
    }, K = () => {
      const q = d.current;
      d.current = null, A(null), window.removeEventListener("mousemove", X), window.removeEventListener("mouseup", K), document.removeEventListener("touchmove", X, { passive: !1 }), document.removeEventListener("touchend", K), document.removeEventListener("touchcancel", K), q && q.active && i.saveLayout({ ...i.state.layout, cards: q.preview });
    };
    window.addEventListener("mousemove", X), window.addEventListener("mouseup", K), document.addEventListener("touchmove", X, { passive: !1 }), document.addEventListener("touchend", K), document.addEventListener("touchcancel", K);
  }, O = c && c.active ? c.preview : u, T = (k) => i.saveLayout({ ...i.state.layout, cards: Re(u.filter((z) => z.id !== k.id)) });
  if (f) {
    const k = (p - ae * 5) / 6;
    let z = 0;
    const S = u.slice().sort((H, V) => H.y - V.y || H.x - V.x).map((H) => {
      const V = Math.max(3, Math.min(H.h, 6)) * (k + ae) - ae, X = { left: 0, top: z, width: p, height: V };
      return z += V + ae, { card: H, style: X };
    });
    return /* @__PURE__ */ o("main", { class: "grid", ref: a, children: [
      t && /* @__PURE__ */ o("div", { class: "grid-note", children: h("grid.narrow_note") }),
      /* @__PURE__ */ o("div", { class: "grid-inner", style: { height: z, margin: Oe }, children: S.map(({ card: H, style: V }) => /* @__PURE__ */ o($n, { card: H, style: V, editing: t, onCamera: e, onEdit: n, onRemove: T, ha: s }, H.id)) })
    ] });
  }
  const I = Ys(O), _ = t ? Math.max(E, I) : I, y = _ <= E ? w : 0;
  return /* @__PURE__ */ o("main", { class: "grid" + (t ? " editing" : "") + (c && c.active ? " dragging-card" : ""), ref: a, children: /* @__PURE__ */ o("div", { class: "grid-inner", style: { height: Math.max(0, _ * x - ae), margin: Oe + y + "px " + Oe + "px" }, children: [
    t && r.w > 0 && /* @__PURE__ */ o(Ur, { rows: _, cell: m, step: x }),
    r.w > 0 && O.map((k) => {
      const z = !!c && c.active && c.id === k.id;
      let S = b(k);
      if (z && c) {
        const H = b(c.orig);
        S = c.mode === "move" ? { ...H, left: H.left + c.dx, top: H.top + c.dy } : { ...H, width: Math.max(m * 2, H.width + c.dx), height: Math.max(m * 2, H.height + c.dy) };
      }
      return /* @__PURE__ */ o("div", { children: [
        z && /* @__PURE__ */ o("div", { class: "drop-slot", style: b(k) }),
        /* @__PURE__ */ o(
          $n,
          {
            card: k,
            style: S,
            editing: t,
            dragged: z,
            onCamera: e,
            onEdit: n,
            onRemove: T,
            onStart: B,
            ha: s
          }
        )
      ] }, k.id);
    })
  ] }) });
}
function Ur({ rows: t, cell: e, step: n }) {
  const s = [];
  for (let i = 0; i < t; i++)
    for (let a = 0; a < ge; a++)
      s.push(/* @__PURE__ */ o("div", { class: "grid-dot", style: { left: a * n, top: i * n, width: e, height: e } }, i + ":" + a));
  return /* @__PURE__ */ o("div", { class: "grid-dots", children: s });
}
function $n({ card: t, style: e, editing: n, dragged: s, ha: i, onCamera: a, onEdit: r, onRemove: c, onStart: A }) {
  const d = t.color ? " tint-" + t.color : "";
  return /* @__PURE__ */ o(
    "div",
    {
      class: "cell" + d + (s ? " dragged" : ""),
      style: e,
      onMouseDown: A ? (u) => A(u, t, "move") : void 0,
      onTouchStart: A ? (u) => A(u, t, "move") : void 0,
      children: [
        /* @__PURE__ */ o(Lr, { title: ds(i, t), aside: !n && /* @__PURE__ */ o(As, { card: t }), class: "card-" + t.type, children: /* @__PURE__ */ o("div", { class: "panel-body", children: /* @__PURE__ */ o(ls, { card: t, onCamera: a, size: { w: e.width - Fr, h: e.height - Rr } }) }) }),
        n && /* @__PURE__ */ o(he, { children: [
          /* @__PURE__ */ o("button", { class: "badge-btn badge-del", onMouseDown: $e, onTouchStart: $e, onClick: () => c(t), title: h("common.delete"), children: /* @__PURE__ */ o(We, { size: 16 }) }),
          /* @__PURE__ */ o("button", { class: "badge-btn badge-edit", onMouseDown: $e, onTouchStart: $e, onClick: () => r(t), title: h("common.edit"), children: /* @__PURE__ */ o(wi, { size: 14 }) }),
          A && /* @__PURE__ */ o(
            "div",
            {
              class: "resize-handle",
              onMouseDown: (u) => A(u, t, "resize"),
              onTouchStart: (u) => A(u, t, "resize")
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
function $e(t) {
  t.stopPropagation();
}
const Yr = (t) => h("status." + t);
function Zr(t, e) {
  const n = ee(null), s = (a) => "touches" in a ? a.touches[0] || a.changedTouches[0] : a;
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
    const c = a.clientX - r.x, A = a.clientY - r.y;
    Math.abs(c) > 90 && Math.abs(c) > Math.abs(A) * 2 && e(c < 0 ? 1 : -1);
  }
}
function Wr(t) {
  const e = Y(), n = ns(), s = t.homes.length > 1, i = Zr(s && !t.editing, t.onSwitchHome), a = t.homes.filter((r) => r.id === t.active)[0];
  return U(() => {
    !t.visible && t.editing && t.onEditing(!1);
  }, [t.visible]), /* @__PURE__ */ o("div", { ref: t.innerRef, class: "controls" + (t.visible ? " visible" : ""), children: [
    /* @__PURE__ */ o("div", { class: "grabber-top", children: /* @__PURE__ */ o("div", { class: "grabber-bar" }) }),
    /* @__PURE__ */ o("header", { class: "bar", children: [
      /* @__PURE__ */ o("div", { class: "bar-time", children: [
        /* @__PURE__ */ o("span", { class: "bar-clock", children: os(n) }),
        /* @__PURE__ */ o("span", { class: "bar-date", children: is(n) })
      ] }),
      s && /* @__PURE__ */ o("button", { class: "home-switch", onClick: () => t.onSwitchHome(1), title: h("controls.next_home"), children: [
        /* @__PURE__ */ o("span", { class: "home-name", children: a ? a.name : "" }),
        /* @__PURE__ */ o("span", { class: "home-dots", children: t.homes.map((r) => /* @__PURE__ */ o("i", { class: r.id === t.active ? "on" : "" }, r.id)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "bar-actions", children: t.editing ? /* @__PURE__ */ o(he, { children: [
        /* @__PURE__ */ o("button", { class: "round", onClick: t.onAddCard, title: h("controls.add_card"), children: /* @__PURE__ */ o(Ot, { size: 20 }) }),
        /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: () => t.onEditing(!1), children: [
          /* @__PURE__ */ o(wa, { size: 18 }),
          /* @__PURE__ */ o("span", { children: h("common.done") })
        ] })
      ] }) : /* @__PURE__ */ o(he, { children: [
        /* @__PURE__ */ o("span", { class: "conn conn-" + e.status, children: [
          /* @__PURE__ */ o("i", {}),
          Yr(e.status)
        ] }),
        (!Be.card || Be.card.canEdit) && /* @__PURE__ */ o("button", { class: "round", onClick: () => t.onEditing(!0), title: h("controls.customize"), children: /* @__PURE__ */ o(wi, { size: 18 }) }),
        /* @__PURE__ */ o("button", { class: "round", onClick: t.onSettings, title: h("controls.settings"), children: /* @__PURE__ */ o(Wa, { size: 20 }) }),
        /* @__PURE__ */ o("button", { class: "round accent", onClick: t.onPhotos, title: h("controls.to_photos"), children: /* @__PURE__ */ o(Qa, { size: 20 }) })
      ] }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "home-pane" + (t.slide ? " slide-" + t.slide : ""), ...i, children: /* @__PURE__ */ o(Vr, { editing: t.editing, onCamera: t.onCamera, onEdit: t.onEditCard }) }, t.active)
  ] });
}
const hs = "photoframe.kiosk", lt = [];
function us() {
  try {
    return localStorage.getItem(hs) || "";
  } catch {
    return "";
  }
}
function qr(t) {
  try {
    localStorage.setItem(hs, t);
  } catch {
  }
  lt.forEach((e) => e());
}
function Jr(t) {
  return lt.push(t), () => {
    lt.splice(lt.indexOf(t), 1);
  };
}
function Gr(t) {
  const e = new URLSearchParams(location.search);
  if (e.has("kiosk")) return e.get("kiosk") !== "0" && e.get("kiosk") !== "false";
  const n = us();
  return n ? n === "on" : t;
}
function et(t) {
  return t && t.shadowRoot ? t.shadowRoot : null;
}
const eo = "photoframe-kiosk";
function Xr() {
  const t = et(document.querySelector("home-assistant"))?.querySelector("home-assistant-main"), e = et(t);
  if (!e) return null;
  const n = e.querySelector("ha-panel-lovelace"), s = et(n)?.querySelector("hui-root"), i = et(s);
  if (!s || !i) return null;
  const a = [], r = (d, u, p) => {
    const l = d.style.getPropertyValue(u);
    d.style.setProperty(u, p), a.push(() => l ? d.style.setProperty(u, l) : d.style.removeProperty(u));
  }, c = e.querySelector("ha-drawer");
  c && r(c, "--mdc-drawer-width", "0px");
  const A = e.querySelector("ha-sidebar");
  if (A) {
    const d = A.style.display;
    A.style.display = "none", a.push(() => {
      A.style.display = d;
    });
  }
  if (r(s, "--header-height", "0px"), !i.getElementById(eo)) {
    const d = document.createElement("style");
    d.id = eo, d.textContent = ".header,app-header,.toolbar{display:none!important}#view{padding-top:0!important;min-height:100vh}", i.appendChild(d), a.push(() => d.remove());
  }
  return () => a.splice(0).reverse().forEach((d) => d());
}
function De(t) {
  return /* @__PURE__ */ o("div", { class: "modal", onClick: t.onClose, children: /* @__PURE__ */ o("div", { class: "modal-box" + (t.wide ? " modal-wide" : ""), onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "modal-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(We, { size: 24 }) })
    ] }),
    t.children
  ] }) });
}
function Kr(t) {
  return /* @__PURE__ */ o(De, { title: h("camera.live_title"), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "cam-full", children: /* @__PURE__ */ o("img", { src: t.url, alt: "" }) }) });
}
const $r = [5e3, 1e4, 3e4, 6e4], ec = [20, 45, 120, 0], tc = (t) => h("sync." + t);
function nc(t) {
  const e = Y(), n = Qt(), { settings: s, photos: i, sync: a } = n.state, r = !!n.card || !!s.hasToken || !!(s.haUrl && s.token), [c, A] = M(r ? "photos" : "ha"), [d, u] = M(s), [p, l] = M(!1), [f, m] = M(gt()), [x, E] = M(""), [w, b] = M(""), B = (g) => u({ ...d, ...g }), [O, T] = M(!1), [I, _] = M(""), y = (g, D) => {
    const P = Array.prototype.slice.call(g || []).filter((R) => /^image\//.test(R.type));
    D && (D.value = ""), P.length && (l(!0), _(""), n.addPhotos(P).then(
      () => l(!1),
      (R) => {
        l(!1), _(R.message || String(R));
      }
    ));
  }, [k, z] = M(Io()), [S, H] = M(us()), [V, X] = M(n.state.homes), K = JSON.stringify(V) !== JSON.stringify(n.state.homes), q = (g, D) => X(V.map((P) => P.id === g ? { ...P, ...D } : P)), C = () => {
    if (n.saveSettings(d), K && n.saveHomes(V), f !== gt()) {
      Ds(f), location.reload();
      return;
    }
    t.onClose();
  }, L = () => {
    try {
      const g = JSON.parse(x);
      if (!g || !Array.isArray(g.cards)) throw new Error(h("settings.no_cards_field"));
      n.saveLayout(g), b(""), E("");
    } catch (g) {
      b(h("settings.import_failed", { error: g.message }));
    }
  }, j = Object.keys(e.states).sort();
  return /* @__PURE__ */ o(De, { title: /* @__PURE__ */ o("span", { class: "modal-title", children: [
    /* @__PURE__ */ o(Ta, { size: 20, class: "accent-text" }),
    /* @__PURE__ */ o("span", { children: h("settings.title") })
  ] }), onClose: t.onClose, children: [
    /* @__PURE__ */ o("div", { class: "tabs", children: [
      /* @__PURE__ */ o("button", { class: c === "photos" ? "active" : "", onClick: () => A("photos"), children: h("settings.tab.photos") }),
      /* @__PURE__ */ o("button", { class: c === "ha" ? "active" : "", onClick: () => A("ha"), children: "Home Assistant" }),
      /* @__PURE__ */ o("button", { class: c === "homes" ? "active" : "", onClick: () => A("homes"), children: h("settings.tab.homes") }),
      /* @__PURE__ */ o("button", { class: c === "sync" ? "active" : "", onClick: () => A("sync"), children: h("settings.tab.sync") })
    ] }),
    c === "photos" && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("p", { class: "hint", children: a === "local" ? h("photos.local_hint") : n.card ? h("photos.card_hint", { folder: n.card.folder }) : h("photos.service_hint") }),
      /* @__PURE__ */ o(
        "label",
        {
          class: "drop-zone" + (p ? " busy" : "") + (O ? " over" : ""),
          onDragOver: (g) => {
            g.preventDefault(), T(!0);
          },
          onDragLeave: () => T(!1),
          onDrop: (g) => {
            g.preventDefault(), T(!1), p || y(g.dataTransfer && g.dataTransfer.files);
          },
          children: [
            /* @__PURE__ */ o("input", { type: "file", multiple: !0, accept: "image/*", onChange: (g) => y(g.currentTarget.files, g.currentTarget), disabled: p }),
            /* @__PURE__ */ o(Ea, { size: 40, class: "muted" }),
            /* @__PURE__ */ o("p", { class: "drop-title", children: h(p ? "photos.uploading" : "photos.pick") }),
            /* @__PURE__ */ o("p", { class: "hint small", children: h("photos.formats") })
          ]
        }
      ),
      (I || n.photoError) && /* @__PURE__ */ o("div", { class: "c-red small upload-error", children: I || n.photoError }),
      i.length > 0 && /* @__PURE__ */ o("div", { class: "thumbs thumbs-small", children: i.map((g) => /* @__PURE__ */ o("div", { class: "thumb", style: { backgroundImage: "url(" + Se(g.url) + ")" }, children: /* @__PURE__ */ o("button", { class: "thumb-del", onClick: () => n.deletePhoto(g.id), children: /* @__PURE__ */ o(We, { size: 14 }) }) }, g.id)) }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: h("settings.slide_interval") }),
        /* @__PURE__ */ o("select", { value: d.slideIntervalMs, onChange: (g) => B({ slideIntervalMs: +g.currentTarget.value }), children: $r.map((g) => /* @__PURE__ */ o("option", { value: g, children: h("settings.interval." + g) }, g)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: h("settings.idle_return") }),
        /* @__PURE__ */ o("select", { value: d.idleSec, onChange: (g) => B({ idleSec: +g.currentTarget.value }), children: ec.map((g) => /* @__PURE__ */ o("option", { value: g, children: h("settings.idle." + g) }, g)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: h("settings.language") }),
        /* @__PURE__ */ o("select", { value: k, onChange: (g) => {
          z(g.currentTarget.value), Ps(g.currentTarget.value), Tt();
        }, children: [
          /* @__PURE__ */ o("option", { value: "", children: h("settings.language_auto") }),
          js().map((g) => /* @__PURE__ */ o("option", { value: g.code, children: g.name }, g.code))
        ] })
      ] }),
      n.card && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: h("settings.kiosk") }),
        /* @__PURE__ */ o("select", { value: S, onChange: (g) => {
          const D = g.currentTarget.value;
          H(D), qr(D);
        }, children: [
          /* @__PURE__ */ o("option", { value: "", children: h("settings.kiosk_auto") }),
          /* @__PURE__ */ o("option", { value: "on", children: h("settings.kiosk_on") }),
          /* @__PURE__ */ o("option", { value: "off", children: h("settings.kiosk_off") })
        ] })
      ] })
    ] }),
    c === "ha" && n.card && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("p", { class: "hint", children: h("ha.card_hint") }) }),
    c === "ha" && !n.card && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("label", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: h("ha.url") }),
        /* @__PURE__ */ o("input", { value: d.haUrl, placeholder: "http://192.168.1.10:8123", onInput: (g) => B({ haUrl: g.currentTarget.value.trim() }) })
      ] }),
      /* @__PURE__ */ o("label", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: h("ha.token") }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "password",
            value: d.token,
            placeholder: a !== "local" && s.hasToken ? h("ha.token_saved") : "",
            onInput: (g) => B({ token: g.currentTarget.value.trim() })
          }
        )
      ] }),
      /* @__PURE__ */ o("p", { class: "hint", children: h(a === "local" ? "ha.local_hint" : "ha.service_hint") }),
      /* @__PURE__ */ o("div", { class: "diag-head", children: [
        /* @__PURE__ */ o(Za, { size: 14 }),
        /* @__PURE__ */ o("span", { children: h("ha.entities", { n: j.length }) })
      ] }),
      /* @__PURE__ */ o("div", { class: "table-wrap", children: /* @__PURE__ */ o("table", { class: "diag", children: /* @__PURE__ */ o("tbody", { children: [
        j.length === 0 && /* @__PURE__ */ o("tr", { children: /* @__PURE__ */ o("td", { class: "muted", children: h("ha.no_data") }) }),
        j.map((g) => /* @__PURE__ */ o("tr", { children: [
          /* @__PURE__ */ o("td", { class: "mono", children: g }),
          /* @__PURE__ */ o("td", { class: "strong", children: e.states[g].state })
        ] }, g))
      ] }) }) })
    ] }),
    c === "homes" && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("p", { class: "hint", children: a === "local" ? h("homes.local_hint") : h("homes.hint") + (n.card ? h("homes.card_hint") : "") }),
      V.map((g) => /* @__PURE__ */ o("div", { class: "home-row", children: [
        /* @__PURE__ */ o("div", { class: "home-row-head", children: [
          /* @__PURE__ */ o("input", { class: "home-input", value: g.name, onInput: (D) => q(g.id, { name: D.currentTarget.value }) }),
          /* @__PURE__ */ o("label", { class: "check main-check", children: [
            /* @__PURE__ */ o("input", { type: "radio", name: "main-home", checked: gn() === g.id, onChange: () => n.setMainHome(g.id) }),
            h("homes.main_here")
          ] }),
          g.id !== Z && /* @__PURE__ */ o("button", { class: "icon-btn danger", title: h("homes.delete"), onClick: () => X(V.filter((D) => D.id !== g.id)), children: /* @__PURE__ */ o(kt, { size: 16 }) })
        ] }),
        n.card ? null : g.id === Z ? /* @__PURE__ */ o("div", { class: "muted small", children: h("homes.ha_on_tab") }) : /* @__PURE__ */ o("div", { children: [
          /* @__PURE__ */ o("div", { class: "seg seg-wide", children: [
            /* @__PURE__ */ o("button", { class: g.haUrl ? "" : "active", onClick: () => q(g.id, { haUrl: "", token: "" }), children: h("homes.same_ha") }),
            /* @__PURE__ */ o("button", { class: g.haUrl ? "active" : "", onClick: () => q(g.id, { haUrl: g.haUrl || "http://" }), children: h("homes.own_ha") })
          ] }),
          g.haUrl && /* @__PURE__ */ o("div", { class: "home-ha", children: [
            /* @__PURE__ */ o("input", { value: g.haUrl, placeholder: "http://192.168.1.20:8123", onInput: (D) => q(g.id, { haUrl: D.currentTarget.value.trim() }) }),
            /* @__PURE__ */ o(
              "input",
              {
                type: "password",
                value: g.token || "",
                placeholder: g.hasToken ? h("homes.token_saved") : h("ha.token"),
                onInput: (D) => q(g.id, { token: D.currentTarget.value.trim() })
              }
            )
          ] })
        ] })
      ] }, g.id)),
      a !== "local" && /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => X(V.concat({ id: "h" + Date.now().toString(36), name: h("homes.new_name"), haUrl: "" })), children: /* @__PURE__ */ o("span", { children: h("homes.add") }) })
    ] }),
    c === "sync" && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("div", { class: "sync-state sync-" + a, children: [
        /* @__PURE__ */ o("i", {}),
        tc(a)
      ] }),
      n.card && n.cardError && /* @__PURE__ */ o("div", { class: "c-red small", children: h("sync.save_failed", { error: n.cardError }) }),
      !n.card && /* @__PURE__ */ o("label", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: h("sync.service_url") }),
        /* @__PURE__ */ o("input", { value: f, placeholder: "http://192.168.1.10:8787", onInput: (g) => m(g.currentTarget.value.trim()) })
      ] }),
      /* @__PURE__ */ o("div", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: h("layout.title") }),
        /* @__PURE__ */ o("div", { class: "row-btns", children: [
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
            E(JSON.stringify(n.state.layout, null, 2)), b("");
          }, children: [
            /* @__PURE__ */ o(Ia, { size: 14 }),
            /* @__PURE__ */ o("span", { children: h("layout.export") })
          ] }),
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => n.saveLayout(Fe()), children: [
            /* @__PURE__ */ o(Ua, { size: 14 }),
            /* @__PURE__ */ o("span", { children: h("layout.reset") })
          ] })
        ] }),
        /* @__PURE__ */ o("textarea", { class: "json", value: x, placeholder: h("layout.import_placeholder"), onInput: (g) => E(g.currentTarget.value) }),
        w && /* @__PURE__ */ o("div", { class: "c-red small", children: w }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !x, onClick: L, children: /* @__PURE__ */ o("span", { children: h("layout.import") }) })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      c === "photos" && i.length > 0 ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: () => n.clearPhotos(), children: [
        /* @__PURE__ */ o(kt, { size: 14 }),
        /* @__PURE__ */ o("span", { children: h("photos.delete_all") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: C, children: h("common.done") })
    ] })
  ] });
}
function oc(t) {
  const e = Object.keys(_t);
  return /* @__PURE__ */ o(De, { title: h("editor.new_card"), onClose: t.onClose, children: /* @__PURE__ */ o("div", { class: "type-list", children: e.map((n) => {
    const s = _t[n], i = Te(s.icon);
    return /* @__PURE__ */ o("button", { class: "type-row", onClick: () => t.onPick({
      // Новая карточка встаёт в конец сетки; settle при сохранении поднимет её на свободное место.
      id: Us(),
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
        /* @__PURE__ */ o("b", { children: xt(n) }),
        /* @__PURE__ */ o("small", { children: zo(n) })
      ] }),
      /* @__PURE__ */ o(Ot, { size: 18 })
    ] }, n);
  }) }) });
}
function ic(t) {
  const e = Y(), [n, s] = M(""), [i, a] = M(!1), [r, c] = M(t.cardType ? "devices" : "entities"), A = n.toLowerCase(), d = Object.keys(e.states).filter((l) => {
    if (t.exclude.indexOf(l) !== -1 || !i && !we(e, l) || !i && t.domains.indexOf(l.split(".")[0]) === -1 || !i && t.match && !t.match(e.states[l])) return !1;
    if (!A) return !0;
    const f = String(e.states[l].attributes.friendly_name || "").toLowerCase();
    return l.indexOf(A) !== -1 || f.indexOf(A) !== -1;
  }).sort().slice(0, 150), u = t.cardType, p = u ? Object.keys(e.devices).map((l) => e.devices[l]).map((l) => ({
    dev: l,
    fit: l.entities.filter((f) => e.registry[f] && e.registry[f].ec == null && we(e, f) && _n(u, e.states[f]))
  })).filter((l) => l.fit.length && (t.excludeDevices || []).indexOf(l.dev.id) === -1 && (!A || l.dev.name.toLowerCase().indexOf(A) !== -1)).sort((l, f) => l.dev.name.localeCompare(f.dev.name)) : [];
  return /* @__PURE__ */ o("div", { class: "picker", children: [
    u && /* @__PURE__ */ o("div", { class: "seg seg-wide picker-mode", children: [
      /* @__PURE__ */ o("button", { class: r === "devices" ? "active" : "", onClick: () => c("devices"), children: h("editor.devices") }),
      /* @__PURE__ */ o("button", { class: r === "entities" ? "active" : "", onClick: () => c("entities"), children: h("editor.entities") })
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-search", children: [
      /* @__PURE__ */ o(Ya, { size: 16 }),
      /* @__PURE__ */ o("input", { placeholder: h(r === "devices" ? "editor.search_device" : "editor.search_entity"), value: n, onInput: (l) => s(l.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(We, { size: 18 }) })
    ] }),
    r === "entities" && /* @__PURE__ */ o("label", { class: "check", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: i, onChange: (l) => a(l.currentTarget.checked) }),
      " ",
      h("editor.show_all")
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-list", children: r === "devices" ? /* @__PURE__ */ o(he, { children: [
      p.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: Object.keys(e.devices).length ? h("editor.no_devices") : h("editor.loading_devices") }),
      p.map(({ dev: l, fit: f }) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPickDevice && t.onPickDevice(l.id, f[0]), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: l.name || f[0] }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: h("editor.count", { n: f.length }) }),
        /* @__PURE__ */ o("span", { class: "picker-id", children: f.slice(0, 4).map((m) => e.registry[m].en || e.states[m].attributes.friendly_name).join(" · ") })
      ] }, l.id))
    ] }) : /* @__PURE__ */ o(he, { children: [
      d.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: h("editor.nothing_found") }),
      d.map((l) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPick(l), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: e.states[l].attributes.friendly_name || l }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: e.states[l].state + (isNaN(parseFloat(e.states[l].state)) ? "" : bt(e, l)) }),
        /* @__PURE__ */ o("span", { class: "picker-id mono", children: l })
      ] }, l))
    ] }) })
  ] });
}
const sc = ["cover", "width", "height"], ac = [[2, 2], [3, 3], [4, 3], [6, 3], [3, 6], [6, 6], [12, 3]];
function rc(t) {
  const e = Y(), [n, s] = M(t.card), [i, a] = M(null), r = _t[n.type], c = (p) => s({ ...n, ...p }), A = (p, l) => c({ items: n.items.map((f, m) => m === p ? { ...f, ...l } : f) }), d = (p, l) => {
    const f = p + l;
    if (f < 0 || f >= n.items.length) return;
    const m = n.items.slice();
    m[p] = n.items[f], m[f] = n.items[p], c({ items: m });
  }, u = Object.keys(Mt);
  return /* @__PURE__ */ o(De, { title: h("editor.card_title", { type: xt(n.type) }), onClose: t.onClose, children: [
    /* @__PURE__ */ o("label", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: h("editor.name") }),
      /* @__PURE__ */ o("input", { value: n.title, placeholder: xt(n.type), onInput: (p) => c({ title: p.currentTarget.value }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: h("editor.size") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: ac.map(([p, l]) => /* @__PURE__ */ o("button", { class: n.w === p && n.h === l ? "active" : "", onClick: () => c({ w: p, h: l }), children: [
        p,
        "×",
        l
      ] }, p + "x" + l)) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: h("editor.color") }),
      /* @__PURE__ */ o("div", { class: "swatches", children: [
        /* @__PURE__ */ o("button", { class: "swatch swatch-auto" + (n.color ? "" : " active"), onClick: () => c({ color: void 0 }), title: h("editor.color_auto"), children: "A" }),
        Object.keys(Le).map((p) => /* @__PURE__ */ o("button", { class: "swatch" + (n.color === p ? " active" : ""), style: { background: Le[p] }, onClick: () => c({ color: p }) }, p))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: h("editor.icon") }),
      /* @__PURE__ */ o("div", { class: "icon-grid", children: u.map((p) => {
        const l = Mt[p];
        return /* @__PURE__ */ o("button", { class: n.icon === p ? "active" : "", onClick: () => c({ icon: p }), children: /* @__PURE__ */ o(l, { size: 18 }) }, p);
      }) })
    ] }),
    n.type === "cameras" && /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: h("editor.camera_picture") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: sc.map((p) => /* @__PURE__ */ o("button", { class: (n.fit || "cover") === p ? "active" : "", onClick: () => c({ fit: p }), children: h("editor.fit." + p) }, p)) })
    ] }),
    n.type !== "cameras" && n.type !== "scenes" && /* @__PURE__ */ o("label", { class: "check check-row", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: !!n.chip, onChange: (p) => c({ chip: p.currentTarget.checked }) }),
      n.type === "weather" ? h("editor.weather_on_photo") : h("editor.chip_on_photo")
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: h("editor.items", { n: n.items.length, hint: zo(n.type).toLowerCase() }) }),
      i === null ? /* @__PURE__ */ o("div", { class: "items", children: [
        n.items.map((p, l) => {
          const f = Te(p.icon || yn(p.entity, e.states[p.entity] && e.states[p.entity].attributes.device_class));
          return /* @__PURE__ */ o("div", { class: "item-row", children: [
            /* @__PURE__ */ o("button", { class: "item-icon", title: h("editor.change_icon"), onClick: () => {
              const m = u.indexOf(p.icon || "");
              A(l, { icon: u[(m + 1) % u.length] });
            }, children: /* @__PURE__ */ o(f, { size: 18 }) }),
            /* @__PURE__ */ o("div", { class: "item-main", children: [
              /* @__PURE__ */ o("input", { value: p.name || "", placeholder: p.device ? e.devices[p.device] ? e.devices[p.device].name : h("editor.device") : ie(e, { entity: p.entity }), onInput: (m) => A(l, { name: m.currentTarget.value || void 0 }) }),
              p.device ? /* @__PURE__ */ o("span", { class: "mono", children: h("editor.device_items", { list: rs(e, n.type, p).map((m) => m.name || m.entity).join(", ") || h("editor.no_matching") }) }) : /* @__PURE__ */ o("span", { class: "mono", children: [
                p.entity,
                !we(e, p.entity) && /* @__PURE__ */ o("em", { class: "na-tag", children: [
                  " · ",
                  h("editor.unavailable")
                ] })
              ] }),
              n.type === "climate" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "hum" }), children: [
                /* @__PURE__ */ o(ke, { size: 12 }),
                p.hum ? p.hum : h("editor.add_humidity")
              ] }),
              n.type === "ac" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "temp" }), children: [
                /* @__PURE__ */ o(Ui, { size: 12 }),
                p.temp ? p.temp : h("editor.room_sensor")
              ] })
            ] }),
            /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => d(l, -1), children: /* @__PURE__ */ o(ya, { size: 16 }) }),
            /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => d(l, 1), children: /* @__PURE__ */ o(ba, { size: 16 }) }),
            /* @__PURE__ */ o("button", { class: "icon-btn danger", onClick: () => c({ items: n.items.filter((m, x) => x !== l) }), children: /* @__PURE__ */ o(kt, { size: 16 }) })
          ] }, p.entity + l);
        }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => a("add"), children: [
          /* @__PURE__ */ o(Ot, { size: 16 }),
          /* @__PURE__ */ o("span", { children: n.type === "weather" && !n.items.length ? h("editor.pick_forecast") : h("editor.add_device") })
        ] })
      ] }) : /* @__PURE__ */ o(
        ic,
        {
          domains: i === "add" ? r.domains : ["sensor"],
          match: i !== "add" ? (p) => p.attributes.device_class === (i.field === "hum" ? "humidity" : "temperature") : (p) => _n(n.type, p),
          exclude: n.items.map((p) => p.entity),
          cardType: i === "add" ? n.type : void 0,
          excludeDevices: n.items.map((p) => p.device || "").filter(Boolean),
          onPickDevice: (p, l) => {
            c({ items: n.items.concat({ entity: l, device: p }) }), a(null);
          },
          onClose: () => a(null),
          onPick: (p) => {
            i === "add" ? c({ items: n.items.concat({ entity: p }) }) : A(i.index, { [i.field]: p }), a(null);
          }
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      t.onDelete ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: t.onDelete, children: [
        /* @__PURE__ */ o(kt, { size: 14 }),
        /* @__PURE__ */ o("span", { children: h("common.delete") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: () => t.onSave(n), children: h("common.save") })
    ] })
  ] });
}
function cc({ thumb: t, sheet: e }) {
  const [n, s] = M({ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }), [i, a] = M(t ? [t] : []);
  zt(() => {
    if (!e) return;
    const c = () => s({ x: e.offsetLeft, y: e.offsetTop, w: window.innerWidth, h: window.innerHeight });
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, [e]), U(() => {
    t && i[i.length - 1] !== t && a(i.slice(-1).concat(t));
  }, [t]);
  const r = {
    left: -n.x - n.w * 0.05,
    top: -n.y - n.h * 0.05,
    width: n.w * 1.1,
    height: n.h * 1.1
  };
  return /* @__PURE__ */ o("div", { class: "sheet-glass", children: [
    i.map((c, A) => /* @__PURE__ */ o("div", { class: "glass-layer" + (A > 0 ? " fresh" : ""), style: { ...r, backgroundImage: "url(" + c + ")" } }, c.length + ":" + c.slice(-32))),
    /* @__PURE__ */ o("div", { class: "sheet-tint" })
  ] });
}
function lc({ card: t, tone: e, onCamera: n, onClose: s }) {
  const i = Y(), a = ee(null), [r, c] = M(null);
  zt(() => {
    c(a.current);
  }, []);
  const A = ["switches", "scenes", "cameras", "ac", "speakers", "tv", "weather"].indexOf(t.type) !== -1;
  return /* @__PURE__ */ o("div", { class: "sheet-layer", onClick: s, children: /* @__PURE__ */ o("div", { ref: a, class: "sheet sheet-" + t.type + (A ? " sheet-wide" : "") + (t.color ? " tint-" + t.color : ""), onClick: (d) => d.stopPropagation(), children: [
    /* @__PURE__ */ o(cc, { thumb: e ? e.thumb : void 0, sheet: r }),
    /* @__PURE__ */ o("div", { class: "sheet-inner", children: [
      /* @__PURE__ */ o("div", { class: "panel-head", children: [
        /* @__PURE__ */ o("h2", { children: ds(i, t) }),
        /* @__PURE__ */ o("div", { class: "sheet-actions", children: [
          /* @__PURE__ */ o(As, { card: t }),
          /* @__PURE__ */ o("button", { class: "sheet-close", onClick: s, children: /* @__PURE__ */ o(We, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ o(ls, { card: t, size: { w: A ? 600 : 420, h: 600 }, onCamera: n })
    ] })
  ] }) });
}
const ps = 36e5, At = 24 * ps, fs = { "24h": At, "7d": 7 * At, "30d": 30 * At }, Ac = ["binary_sensor", "switch", "light", "input_boolean", "fan", "lock", "cover", "media_player"], dc = ["on", "open", "unlocked", "playing", "home"];
function ms(t) {
  if (!t) return "line";
  if (Ac.indexOf(t.entity_id.split(".")[0]) !== -1) return "timeline";
  const e = t.attributes.state_class;
  return e === "total" || e === "total_increasing" ? "bars" : isNaN(parseFloat(t.state)) ? "timeline" : "line";
}
function St(t) {
  return new Date(t).toISOString();
}
function to(t) {
  return typeof t == "number" ? t : Date.parse(t);
}
function Ut(t, e, n, s) {
  return t.call({
    type: "history/history_during_period",
    start_time: St(n),
    end_time: St(s),
    entity_ids: [e],
    minimal_response: !0,
    no_attributes: !0
  }).then((i) => (i[e] || []).map((a) => ({ s: a.s, t: (a.lu || a.lc || 0) * 1e3 || n })));
}
function no(t, e, n, s, i, a) {
  return t.call({
    type: "recorder/statistics_during_period",
    start_time: St(n),
    end_time: St(s),
    statistic_ids: [e],
    period: i,
    types: a
  }).then((r) => r[e] || []);
}
function oo(t) {
  const e = [];
  return t.forEach((n) => {
    const s = parseFloat(n.s);
    isNaN(s) || e.push({ t: n.t, v: s });
  }), e;
}
function hc(t, e, n) {
  const s = e.entity_id, i = ms(e), a = Date.now(), r = a - fs[n], c = { kind: i, from: r, to: a, points: [], segments: [], bucketMs: 0 };
  if (i === "timeline")
    return Ut(t, s, r, a).then((A) => {
      const d = A.map((u, p) => ({
        from: Math.max(r, u.t),
        to: p + 1 < A.length ? A[p + 1].t : a,
        on: u.s === "unavailable" || u.s === "unknown" ? null : dc.indexOf(u.s) !== -1
      }));
      return { ...c, segments: d };
    });
  if (i === "bars") {
    const A = n === "24h" ? "hour" : "day";
    return no(t, s, r, a, A, ["change"]).then((d) => ({
      ...c,
      bucketMs: A === "hour" ? ps : At,
      points: d.filter((u) => u.change != null).map((u) => ({ t: to(u.start), v: u.change }))
    }));
  }
  return n === "24h" ? Ut(t, s, r, a).then((A) => ({ ...c, points: oo(A) })) : no(t, s, r, a, n === "7d" ? "hour" : "day", ["mean", "min", "max"]).then((A) => {
    const d = A.filter((u) => u.mean != null).map((u) => ({ t: to(u.start), v: u.mean, min: u.min == null ? void 0 : u.min, max: u.max == null ? void 0 : u.max }));
    return d.length ? { ...c, points: d } : Ut(t, s, r, a).then((u) => ({ ...c, points: oo(u) }));
  });
}
function uc(t) {
  const e = t.points;
  if (t.kind === "timeline") {
    let r = 0, c = 0, A = null;
    return t.segments.forEach((d) => {
      d.on && (c += d.to - d.from, A === !1 && r++), d.on !== null && (A = d.on);
    }), { onCount: r, onMs: c };
  }
  if (!e.length) return {};
  if (t.kind === "bars") {
    let r = 0, c = e[0];
    return e.forEach((A) => {
      r += A.v, A.v > c.v && (c = A);
    }), { total: r, peak: c, avg: r / e.length };
  }
  let n = e[0], s = e[0];
  e.forEach((r) => {
    (r.min != null ? r.min : r.v) < (n.min != null ? n.min : n.v) && (n = r), (r.max != null ? r.max : r.v) > (s.max != null ? s.max : s.v) && (s = r);
  });
  let i = 0, a = 0;
  return e.forEach((r, c) => {
    const A = c + 1 < e.length ? e[c + 1].t : t.to, d = Math.max(0, A - Math.max(r.t, t.from));
    i += r.v * d, a += d;
  }), {
    min: { t: n.t, v: n.min != null ? n.min : n.v },
    max: { t: s.t, v: s.max != null ? s.max : s.v },
    avg: a ? i / a : void 0
  };
}
function pc(t, e) {
  const n = t.registry[e], s = n && n.di ? t.devices[n.di] : void 0;
  return s ? Promise.resolve(s.entities.filter((i) => i !== e && t.registry[i].ec == null)) : Promise.resolve([]);
}
const fc = ["24h", "7d", "30d"], mc = ["switch", "light", "fan", "input_boolean"];
function Yt(t, e) {
  const n = t.states[e];
  return String(n && n.attributes.friendly_name || e);
}
function gc(t) {
  if (t.length < 2) return t;
  const e = t.map((s) => s.split(" "));
  let n = 0;
  for (; e.every((s) => s.length > n + 1 && s[n] === e[0][n]); ) n++;
  return e.map((s) => s.slice(n).join(" "));
}
function bc(t) {
  const e = Math.round(t / 6e4), n = Math.floor(e / 1440), s = Math.floor(e % 1440 / 60), i = e % 60;
  return [n ? h("duration.days", { n }) : "", s || n ? h("duration.hours", { n: s }) : "", n ? "" : h("duration.minutes", { n: i })].filter(Boolean).join(" ");
}
function yc({ entity: t }) {
  const e = Y(), [n, s] = M(!1);
  U(() => {
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
    /* @__PURE__ */ o(Ve, { size: 16 }),
    /* @__PURE__ */ o("span", { children: h(n ? "detail.confirm_off" : i ? "common.turn_off" : "common.turn_on") })
  ] });
}
function ne(t) {
  return /* @__PURE__ */ o("div", { class: "stat", children: [
    /* @__PURE__ */ o("div", { class: "stat-label", children: t.label }),
    /* @__PURE__ */ o("div", { class: "stat-value", children: t.value }),
    t.note && /* @__PURE__ */ o("div", { class: "stat-note", children: t.note })
  ] });
}
function _c({ series: t, sum: e, unit: n, range: s, current: i }) {
  const a = n ? " " + n : "";
  if (t.kind === "timeline") {
    const r = t.to - t.from;
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(ne, { label: h("stat.now"), value: i }),
      /* @__PURE__ */ o(ne, { label: h("stat.turned_on"), value: String(e.onCount || 0), note: h("stat.times") }),
      /* @__PURE__ */ o(ne, { label: h("stat.on_time"), value: bc(e.onMs || 0) }),
      /* @__PURE__ */ o(ne, { label: h("stat.on_share"), value: Math.round((e.onMs || 0) / r * 100) + "%" })
    ] });
  }
  if (t.kind === "bars") {
    const r = t.bucketMs >= 864e5 ? h("stat.avg_per_day") : h("stat.avg_per_hour");
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(ne, { label: h("stat.total"), value: e.total != null ? G(e.total) + a : "—" }),
      /* @__PURE__ */ o(ne, { label: r, value: e.avg != null ? G(e.avg) + a : "—" }),
      /* @__PURE__ */ o(
        ne,
        {
          label: h("stat.peak"),
          value: e.peak ? G(e.peak.v) + a : "—",
          note: e.peak ? t.bucketMs >= 864e5 ? Ue(e.peak.t) : Ce(e.peak.t) : void 0
        }
      ),
      /* @__PURE__ */ o(ne, { label: h("stat.counter_now"), value: i })
    ] });
  }
  return /* @__PURE__ */ o("div", { class: "stats", children: [
    /* @__PURE__ */ o(ne, { label: h("stat.now"), value: i }),
    /* @__PURE__ */ o(ne, { label: h("stat.min"), value: e.min ? G(e.min.v) + a : "—", note: e.min ? me(e.min.t, s) : void 0 }),
    /* @__PURE__ */ o(ne, { label: h("stat.max"), value: e.max ? G(e.max.v) + a : "—", note: e.max ? me(e.max.t, s) : void 0 }),
    /* @__PURE__ */ o(ne, { label: h("stat.avg"), value: e.avg != null ? G(e.avg) + a : "—" })
  ] });
}
function xc({ series: t, unit: e, range: n }) {
  const s = t.kind === "timeline" ? t.segments.slice().reverse().slice(0, 60).map((a) => [me(a.from, n), a.on ? h("switch.on") : a.on === null ? h("chart.no_connection") : h("switch.off"), "—"]) : t.points.slice().reverse().slice(0, 60).map((a) => [
    t.kind === "bars" && t.bucketMs >= 864e5 ? Ue(a.t) : me(a.t, n),
    G(a.v) + (e ? " " + e : ""),
    a.min != null && a.max != null ? G(a.min) + " … " + G(a.max) : "—"
  ]), i = t.kind === "line" && t.points.some((a) => a.min != null);
  return /* @__PURE__ */ o("div", { class: "table-wrap", children: /* @__PURE__ */ o("table", { class: "diag", children: /* @__PURE__ */ o("tbody", { children: s.map((a, r) => /* @__PURE__ */ o("tr", { children: [
    /* @__PURE__ */ o("td", { children: a[0] }),
    /* @__PURE__ */ o("td", { class: "strong", children: a[1] }),
    i && /* @__PURE__ */ o("td", { class: "muted", children: a[2] })
  ] }, r)) }) }) });
}
function vc(t) {
  const e = Y(), [n, s] = M(t.entities[0]), [i, a] = M("24h"), [r, c] = M(null), [A, d] = M(""), [u, p] = M([]), [l, f] = M(!1), [m, x] = M(600), E = ee(null), w = e.states[n], b = bt(e, n).trim(), B = ms(w);
  zt(() => {
    const y = () => {
      E.current && x(E.current.clientWidth);
    };
    return y(), window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
  }, []), U(() => {
    pc(e, t.entities[0]).then((y) => p(y.filter((k) => !!e.states[k])), () => {
    });
  }, [t.entities[0]]), U(() => {
    if (!w) return;
    let y = !0;
    return c(null), d(""), hc(e, w, i).then(
      (k) => {
        y && c(k);
      },
      (k) => {
        y && d(k.message);
      }
    ), () => {
      y = !1;
    };
  }, [n, i, e.status]);
  const O = t.entities.concat(u.filter((y) => t.entities.indexOf(y) === -1)).filter((y) => y === n || we(e, y)), T = gc(O.map((y) => Yt(e, y))), I = !w || je(w.state) ? h("sensor.no_data") : B === "timeline" ? w.state === "on" ? h("switch.on") : w.state === "off" ? h("switch.off") : w.state : G(parseFloat(w.state)) + (b ? " " + b : ""), _ = n.split(".")[0];
  return _ === "weather" ? /* @__PURE__ */ o(De, { title: Yt(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: E, children: /* @__PURE__ */ o(as, { card: { id: "detail", type: "weather", title: "", x: 0, y: 0, w: 6, h: 6, items: [{ entity: n }] }, size: { w: m, h: 560 } }) }) }) : /* @__PURE__ */ o(De, { title: Yt(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: E, children: [
    /* @__PURE__ */ o("div", { class: "detail-hero", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ o("div", { class: "hero-value", children: I }),
        w && /* @__PURE__ */ o("div", { class: "muted small", children: h("detail.updated", { when: me(Date.parse(w.last_changed || "") || Date.now(), "7d") }) })
      ] }),
      mc.indexOf(_) !== -1 && w && /* @__PURE__ */ o(yc, { entity: n }, n)
    ] }),
    O.length > 1 && /* @__PURE__ */ o("div", { class: "chips", children: O.map((y, k) => {
      const z = e.states[y], S = !z || je(z.state) ? "—" : isNaN(parseFloat(z.state)) ? z.state === "on" ? h("chip.state_on") : z.state === "off" ? h("chip.state_off") : z.state : G(parseFloat(z.state)) + bt(e, y);
      return /* @__PURE__ */ o("button", { class: "chip" + (y === n ? " active" : ""), onClick: () => s(y), children: [
        /* @__PURE__ */ o("span", { children: T[k] }),
        /* @__PURE__ */ o("b", { children: S })
      ] }, y);
    }) }),
    /* @__PURE__ */ o("div", { class: "detail-tools", children: [
      /* @__PURE__ */ o("div", { class: "seg", children: fc.map((y) => /* @__PURE__ */ o("button", { class: y === i ? "active" : "", onClick: () => a(y), children: h("range." + y) }, y)) }),
      /* @__PURE__ */ o("button", { class: "chip-btn" + (l ? " on" : ""), onClick: () => f(!l), children: [
        /* @__PURE__ */ o(Ka, { size: 14 }),
        /* @__PURE__ */ o("span", { children: h("detail.table") })
      ] })
    ] }),
    A && /* @__PURE__ */ o("div", { class: "chart-empty c-red", children: h("detail.load_error", { error: A }) }),
    !A && !r && /* @__PURE__ */ o("div", { class: "chart-empty", children: h("common.loading") }),
    r && (l ? /* @__PURE__ */ o(xc, { series: r, unit: b, range: i }) : /* @__PURE__ */ o(lr, { series: r, unit: b, range: i, width: m })),
    r && /* @__PURE__ */ o(_c, { series: r, sum: uc(r), unit: b, range: i, current: I }),
    r && r.kind !== "timeline" && i !== "24h" && /* @__PURE__ */ o("div", { class: "muted small detail-foot", children: [
      r.kind === "bars" ? h("detail.foot_bars") : h(i === "7d" ? "detail.foot_hourly" : "detail.foot_daily"),
      " · ",
      h("detail.days", { n: Math.round(fs[i] / 864e5) })
    ] })
  ] }) });
}
function gs(t, e, n) {
  const s = (i) => i.split(",").map((a) => t + a).join(",");
  return s(".accent-text") + "{color:" + e + "}" + s(".light.on .light-icon") + "{background:" + e + "}" + s(".light.on") + "{border-color:" + e + ";background:" + n + "}" + s(".seg .active") + "{background:" + n + ";color:" + e + "}" + s(".room-temp sup") + "{color:" + e + "}";
}
function wc(t) {
  const e = parseInt(t.slice(1), 16);
  return "rgba(" + (e >> 16) + "," + (e >> 8 & 255) + "," + (e & 255) + ",0.2)";
}
const kc = Object.keys(Le).map((t) => gs(".tint-" + t + " ", Le[t], wc(Le[t]))).join("");
function Cc() {
  const t = Qt(), e = Fs(), { settings: n, layout: s, sync: i, homes: a, active: r } = t.state;
  U(() => t.start(), []);
  const c = i !== "local" && i !== "card", A = vo(() => ({}), [c, c ? "" : n.haUrl, c ? "" : n.token]), d = t.card ? t.card.client : A[r] || (A[r] = c ? new $t("", "", !0, r) : new $t(n.haUrl, n.token, !1));
  U(() => {
    d.status === "idle" && d.connect();
  }, [d]), U(() => () => Object.keys(A).forEach((Q) => A[Q].disconnect()), [A]);
  const [u, p] = M(""), l = (Q) => {
    const te = a.findIndex((ye) => ye.id === r), ce = a[(te + Q + a.length) % a.length];
    !ce || ce.id === r || (p(Q > 0 ? "next" : "prev"), z(null), t.setActive(ce.id));
  }, f = t.photoUrls, m = f.length, [x, E] = M(0), [w, b] = M(!1), [B, O] = M(!1), [T, I] = M(!1), [_, y] = M(""), [k, z] = M(null), [S, H] = M(null), [V, X] = M(!1), [K, q] = M(null), [C, L] = M(!0), j = ia(f[x % Math.max(m, 1)]), g = k && s.cards.filter((Q) => Q.id === k)[0] || null, D = i === "local" ? !n.haUrl || !n.token : i === "synced" && !n.hasToken;
  U(() => {
    D && I(!0);
  }, [D]), U(() => {
    if (m < 2) return;
    const Q = setInterval(() => E((te) => (te + 1) % m), n.slideIntervalMs);
    return () => clearInterval(Q);
  }, [m, n.slideIntervalMs]), U(() => {
    const Q = setTimeout(() => L(!1), 8e3);
    return () => clearTimeout(Q);
  }, []);
  const P = T || !!_ || !!S || V || !!K, R = P || !!g, J = ee(null), re = ee(null), Me = ee(null), be = ee(null);
  U(() => {
    const Q = J.current;
    if (!Q) return;
    const te = () => {
      Q.scrollTop = 0, Q.scrollLeft = 0;
    };
    return Q.addEventListener("scroll", te), () => Q.removeEventListener("scroll", te);
  }, []), ra({ root: J, controls: re, ambient: Me, soft: be }, w, b, !R);
  const qe = (w || !!g) && !P && !B;
  U(() => {
    if (!qe || !n.idleSec) return;
    let Q = 0;
    const te = () => {
      clearTimeout(Q), Q = window.setTimeout(() => {
        b(!1), z(null), t.setActive(gn());
      }, n.idleSec * 1e3);
    }, ce = ["touchstart", "mousedown", "keydown"];
    return ce.forEach((ye) => document.addEventListener(ye, te)), te(), () => {
      clearTimeout(Q), ce.forEach((ye) => document.removeEventListener(ye, te));
    };
  }, [qe, n.idleSec]);
  const _s = (Q) => {
    const te = s.cards.some((Je) => Je.id === Q.id), ce = vt(Q), ye = te ? s.cards.map((Je) => Je.id === Q.id ? ce : Je) : s.cards.concat(ce);
    t.saveLayout({ ...s, cards: Re(ye, ce) }), H(null);
  };
  return /* @__PURE__ */ o(Mo.Provider, { value: d, children: /* @__PURE__ */ o(Eo.Provider, { value: q, children: [
    /* @__PURE__ */ o("style", { children: kc + (j ? gs("", j.accent, j.accentSoft) : "") }),
    /* @__PURE__ */ o("div", { class: "app", ref: J, lang: e, children: [
      /* @__PURE__ */ o(ca, { urls: f, index: x % Math.max(m, 1), tone: j, soft: w, softRef: be }),
      /* @__PURE__ */ o(
        jr,
        {
          visible: !w,
          showHint: C && !g,
          innerRef: Me,
          onSheet: (Q) => z(Q.id),
          onConnection: () => I(!0)
        }
      ),
      /* @__PURE__ */ o(
        Wr,
        {
          innerRef: re,
          visible: w,
          editing: B,
          onEditing: O,
          onPhotos: () => b(!1),
          onSettings: () => I(!0),
          onCamera: y,
          onEditCard: (Q) => H({ card: Q, isNew: !1 }),
          homes: a,
          active: r,
          slide: u,
          onSwitchHome: l,
          onAddCard: () => X(!0)
        }
      )
    ] }),
    g && /* @__PURE__ */ o(lc, { card: g, tone: j, onCamera: y, onClose: () => z(null) }),
    _ && /* @__PURE__ */ o(Kr, { url: _, onClose: () => y("") }),
    T && /* @__PURE__ */ o(nc, { onClose: () => I(!1) }),
    V && /* @__PURE__ */ o(oc, { onClose: () => X(!1), onPick: (Q) => {
      X(!1), H({ card: Q, isNew: !0 });
    } }),
    S && /* @__PURE__ */ o(
      rc,
      {
        card: S.card,
        onSave: _s,
        onDelete: S.isNew ? void 0 : () => {
          t.saveLayout({ ...s, cards: Re(s.cards.filter((Q) => Q.id !== S.card.id)) }), H(null);
        },
        onClose: () => H(null)
      }
    ),
    K && /* @__PURE__ */ o(vc, { entities: K, onClose: () => q(null) }, K.join(","))
  ] }) });
}
class Mc extends $t {
  constructor() {
    super("", "", !1, "main"), this.hass = null;
  }
  // HA присылает новый hass при каждом изменении любого состояния — просто перерисовываемся.
  setHass(e) {
    const n = !this.hass;
    this.hass = e, Tt(e.language), e.states !== this.states && (this.states = e.states, this.loaded = !0, this.status !== "connected" ? this.setStatus("connected") : this.emit()), n && this.loadRegistry();
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
const xn = "custom:photoframe-card";
function bs(t) {
  if (!t || typeof t != "object") return null;
  if (t.type === xn) return t;
  const e = [t.views, t.cards, t.sections, t.card ? [t.card] : null];
  for (const n of e)
    if (Array.isArray(n))
      for (const s of n) {
        const i = bs(s);
        if (i) return i;
      }
  return null;
}
function Ec() {
  const t = location.pathname.split("/")[1] || "lovelace";
  return t === "lovelace" ? null : t;
}
class Sc {
  constructor(e, n) {
    this.client = e, this.config = n, this.queue = Promise.resolve();
  }
  get folder() {
    return (this.config.media_folder || "photoframe").replace(/^\/+|\/+$/g, "");
  }
  get folderId() {
    return "media-source://media_source/local/" + this.folder;
  }
  get canEdit() {
    return this.client.isAdmin;
  }
  // Записываем изменения в конфиг дашборда. Нужны права администратора и дашборд в режиме UI (не YAML).
  save(e) {
    const n = () => {
      const i = Ec();
      return this.client.call({ type: "lovelace/config", url_path: i }).then((a) => {
        const r = bs(a);
        if (!r) throw new Error(h("errors.card_not_found", { type: xn }));
        return Object.keys(e).forEach((c) => {
          r[c] = e[c];
        }), this.config = { ...this.config, ...e }, this.client.call({ type: "lovelace/config/save", url_path: i, config: a });
      });
    }, s = this.queue.then(n, n);
    return this.queue = s.catch(() => {
    }), s;
  }
  // Папки нет — HA отвечает ошибкой; отдаём понятный текст, чтобы показать его в настройках.
  listPhotos() {
    return this.client.call({
      type: "media_source/browse_media",
      media_content_id: this.folderId
    }).then((e) => {
      const n = (e.children || []).filter((s) => s.media_class === "image");
      return Promise.all(n.map((s) => this.client.call({
        type: "media_source/resolve_media",
        media_content_id: s.media_content_id,
        expires: 86400
      }).then((i) => ({ id: s.media_content_id, url: i.url }))));
    }, () => {
      throw new Error(h("errors.upload_folder", { folder: this.folder }));
    });
  }
  addPhotos(e) {
    return e.reduce((n, s) => n.then(() => mn(s)).then((i) => {
      const a = atob(i.split(",")[1]), r = new Uint8Array(a.length);
      for (let A = 0; A < a.length; A++) r[A] = a.charCodeAt(A);
      const c = new FormData();
      return c.append("media_content_id", this.folderId), c.append("file", new Blob([r], { type: "image/jpeg" }), s.name.replace(/\.[^.]+$/, "") + ".jpg"), this.client.fetch("/api/media_source/local_source/upload", { method: "POST", body: c }).then((A) => {
        if (!A.ok)
          throw A.status === 401 || A.status === 403 ? new Error(h("errors.upload_admin")) : A.status === 400 || A.status === 404 ? new Error(h("errors.upload_folder", { folder: this.folder })) : new Error(h("errors.upload", { status: A.status }));
      });
    }), Promise.resolve()).then(() => {
    });
  }
  deletePhoto(e) {
    return this.client.call({ type: "media_source/local_source/remove", media_content_id: e });
  }
}
function Ic(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Zt, io;
function zc() {
  return io || (io = 1, Zt = {
    webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
    mp4: "data:video/mp4;base64,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"
  }), Zt;
}
var Wt, so;
function Bc() {
  if (so) return Wt;
  so = 1;
  const { webm: t, mp4: e } = zc(), n = () => typeof navigator < "u" && parseFloat(
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
    _addSourceToVideo(r, c, A) {
      var d = document.createElement("source");
      d.src = A, d.type = `video/${c}`, r.appendChild(d);
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
  return Wt = i, Wt;
}
var Dc = Bc();
const Tc = /* @__PURE__ */ Ic(Dc);
let sn = null;
const ao = new Tc();
function qt() {
  const t = navigator.wakeLock;
  return !t || document.visibilityState !== "visible" ? Promise.resolve(!1) : t.request("screen").then(
    (e) => (sn = e, e.addEventListener("release", () => {
      sn = null;
    }), !0),
    () => !1
  );
}
function Qc() {
  qt(), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && !sn && qt();
  });
  const t = () => {
    document.removeEventListener("touchend", t), document.removeEventListener("click", t), qt().then((e) => {
      !e && !ao.isEnabled && ao.enable().catch(() => {
      });
    });
  };
  document.addEventListener("touchend", t), document.addEventListener("click", t);
}
const ys = "photoframe.setup", dt = "photo-frame";
function Oc(t) {
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
function an(t) {
  try {
    localStorage.setItem(ys, t);
  } catch {
  }
}
function Hc(t) {
  history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function Lc(t) {
  const e = h("setup.dashboard_title");
  return t.callWS({
    type: "lovelace/dashboards/create",
    url_path: dt,
    title: e,
    icon: "mdi:image-frame",
    mode: "storage",
    show_in_sidebar: !0,
    require_admin: !1
  }).then(() => t.callWS({
    type: "lovelace/config/save",
    url_path: dt,
    config: { title: e, views: [{ title: e, path: "frame", type: "panel", cards: [{ type: xn, media_folder: "photoframe" }] }] }
  })).then(() => "/" + dt + "/frame");
}
function jc(t) {
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
  n.textContent = h("setup.title");
  const s = document.createElement("div");
  s.setAttribute("style", "margin:6px 0 12px;color:rgba(245,247,251,.72)"), s.textContent = h("setup.text");
  const i = document.createElement("div");
  i.setAttribute("style", "display:flex;justify-content:flex-end;gap:8px");
  const a = (A, d) => {
    const u = document.createElement("button");
    return u.textContent = A, u.setAttribute("style", "border:0;border-radius:10px;padding:8px 14px;font:inherit;font-weight:600;cursor:pointer;" + (d ? "background:#7dd3fc;color:#0b0d14" : "background:rgba(255,255,255,.1);color:#f5f7fb")), i.appendChild(u), u;
  }, r = a(h("setup.later"), !1), c = a(h("setup.create"), !0);
  e.appendChild(n), e.appendChild(s), e.appendChild(i), document.body.appendChild(e), r.onclick = () => {
    an("dismissed"), e.remove();
  }, c.onclick = () => {
    c.disabled = !0, c.textContent = h("common.loading"), Lc(t).then((A) => {
      an("done"), e.remove(), Hc(A);
    }, (A) => {
      c.disabled = !1, c.textContent = h("setup.create"), s.textContent = h("setup.failed", { error: A && A.message || String(A) });
    });
  };
}
function Pc() {
  try {
    if (localStorage.getItem(ys)) return;
  } catch {
    return;
  }
  Oc(3e4).then((t) => {
    if (!(!t || !t.user || !t.user.is_admin))
      return Tt(t.language), t.callWS({ type: "lovelace/dashboards/list" }).then((e) => {
        if (e.some((n) => n.url_path === dt)) {
          an("done");
          return;
        }
        jc(t);
      });
  }).catch(() => {
  });
}
const Fc = ':host{display:block;position:relative;height:calc(100vh - var(--header-height, 56px));min-height:420px;overflow:hidden;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif;color:#f5f7fb;background:#000;border-radius:var(--ha-card-border-radius,0)}#app{position:absolute;top:0;left:0;right:0;bottom:0}';
class Rc extends HTMLElement {
  constructor() {
    super(...arguments), this.client = new Mc(), this.backend = null, this.config = { type: "custom:photoframe-card" }, this.root = null, this.exitKiosk = null, this.offKiosk = null;
  }
  // Включить/выключить киоск по текущим настройкам. Фронтенд HA дорисовывается не сразу —
  // поэтому вызывается и при монтировании, и при каждом обновлении hass, пока не получится.
  syncKiosk() {
    const e = this.isConnected && Gr(!!this.config.kiosk);
    e && !this.exitKiosk && (this.exitKiosk = Xr()), !e && this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null);
  }
  setConfig(e) {
    this.config = e, this.backend && (this.backend.config = e, Be.applyCardConfig(e)), this.syncKiosk();
  }
  set hass(e) {
    this.client.setHass(e), this.syncKiosk(), this.backend || (this.backend = new Sc(this.client, this.config), Be.attachCard(this.backend)), this.mount();
  }
  connectedCallback() {
    this.mount(), this.offKiosk = Jr(() => this.syncKiosk()), this.syncKiosk();
  }
  disconnectedCallback() {
    this.root && Cn(null, this.root), this.root = null, this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null), this.offKiosk && (this.offKiosk(), this.offKiosk = null);
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
    n.textContent = Fc + Ss;
    const s = document.createElement("div");
    s.id = "app", e.appendChild(n), e.appendChild(s), this.root = s, Cn(/* @__PURE__ */ o(Cc, {}), s), Qc();
  }
}
customElements.get("photoframe-card") || customElements.define("photoframe-card", Rc);
console.info("%c PHOTO-FRAME %c v0.2.0 ", "color:#fff;background:#0891b2;font-weight:700", "color:#0891b2;background:#fff");
Pc();
const rn = window;
rn.customCards = rn.customCards || [];
rn.customCards.push({
  type: "photoframe-card",
  name: "Smart Frame",
  description: "Photo frame with smart-home controls: photos, clock, weather and customizable cards",
  preview: !1
});
