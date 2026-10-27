var on, q, hi, we, go, ui, fi, An, wt, $e, mi, Kn, Tn, On, pi, Ht = {}, Lt = [], nr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ht = Array.isArray;
function ke(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function $n(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Qt(t, e, n) {
  var s, i, a, r = {};
  for (a in e) a == "key" ? s = e[a] : a == "ref" ? i = e[a] : r[a] = e[a];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? on.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (a in t.defaultProps) r[a] === void 0 && (r[a] = t.defaultProps[a]);
  return Ct(t, r, s, i, null);
}
function Ct(t, e, n, s, i) {
  var a = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++hi, __i: -1, __u: 0 };
  return i == null && q.vnode != null && q.vnode(a), a;
}
function ae(t) {
  return t.children;
}
function Mt(t, e) {
  this.props = t, this.context = e;
}
function De(t, e) {
  if (e == null) return t.__ ? De(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? De(t) : null;
}
function or(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, s = [], i = [], a = ke({}, e);
    a.__v = e.__v + 1, q.vnode && q.vnode(a), eo(t.__P, a, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, s, n ?? De(e), !!(32 & e.__u), i), a.__v = e.__v, a.__.__k[a.__i] = a, _i(s, a, i), e.__e = e.__ = null, a.__e != n && gi(a);
  }
}
function gi(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), gi(t);
}
function Pn(t) {
  (!t.__d && (t.__d = !0) && we.push(t) && !jt.__r++ || go != q.debounceRendering) && ((go = q.debounceRendering) || ui)(jt);
}
function jt() {
  try {
    for (var t, e = 1; we.length; ) we.length > e && we.sort(fi), t = we.shift(), e = we.length, or(t);
  } finally {
    we.length = jt.__r = 0;
  }
}
function bi(t, e, n, s, i, a, r, c, h, A, f) {
  var u, l, m, p, v, C, M = s && s.__k || Lt, g = e.length;
  for (h = ir(n, e, M, h, g), u = 0; u < g; u++) (m = n.__k[u]) != null && (l = m.__i != -1 && M[m.__i] || Ht, m.__i = u, C = eo(t, m, l, i, a, r, c, h, A, f), p = m.__e, m.ref && l.ref != m.ref && (l.ref && to(l.ref, null, m), f.push(m.ref, m.__c || p, m)), v == null && p != null && (v = p), 4 & m.__u ? (h = yi(m, h, t), l.__e && (l.__e = null)) : typeof m.type == "function" && C !== void 0 ? h = C : p && (h = p.nextSibling), m.__u &= -7);
  return n.__e = v, h;
}
function ir(t, e, n, s, i) {
  var a, r, c, h, A, f = n.length, u = f, l = 0;
  for (t.__k = new Array(i), a = 0; a < i; a++) (r = e[a]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = t.__k[a] = Ct(null, r, null, null, null) : ht(r) ? r = t.__k[a] = Ct(ae, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? r = t.__k[a] = Ct(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : t.__k[a] = r, h = a + l, r.__ = t, r.__b = t.__b + 1, c = null, (A = r.__i = sr(r, n, h, u)) != -1 && (u--, (c = n[A]) && (c.__u |= 2)), c == null || c.__v == null ? (A == -1 && (i > f ? l-- : i < f && l++), typeof r.type != "function" && (r.__u |= 4)) : A != h && (A == h - 1 ? l-- : A == h + 1 ? l++ : (A > h ? l-- : l++, r.__u |= 4))) : t.__k[a] = null;
  if (u) for (a = 0; a < f; a++) (c = n[a]) != null && (2 & c.__u) == 0 && (c.__e == s && (s = De(c)), wi(c, c));
  return s;
}
function yi(t, e, n) {
  var s, i;
  if (typeof t.type == "function") {
    for (s = t.__k, i = 0; s && i < s.length; i++) s[i] && (s[i].__ = t, e = yi(s[i], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = De(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function xi(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (ht(t) ? t.some(function(n) {
    xi(n, e);
  }) : e.push(t)), e;
}
function sr(t, e, n, s) {
  var i, a, r, c = t.key, h = t.type, A = e[n], f = A != null && (2 & A.__u) == 0;
  if (A === null && c == null || f && c == A.key && h == A.type) return n;
  if (s > (f ? 1 : 0)) {
    for (i = n - 1, a = n + 1; i >= 0 || a < e.length; ) if ((A = e[r = i >= 0 ? i-- : a++]) != null && (2 & A.__u) == 0 && c == A.key && h == A.type) return r;
  }
  return -1;
}
function bo(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || nr.test(e) ? n : n + "px";
}
function bt(t, e, n, s, i) {
  var a, r;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof s == "string" && (t.style.cssText = s = ""), s) for (e in s) n && e in n || bo(t.style, e, "");
    if (n) for (e in n) s && n[e] == s[e] || bo(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(mi, "$1")), r = e.toLowerCase(), e = r in t || e == "onFocusOut" || e == "onFocusIn" ? r.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = n, n ? s ? n[$e] = s[$e] : (n[$e] = Kn, t.addEventListener(e, a ? On : Tn, a)) : t.removeEventListener(e, a ? On : Tn, a);
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
function yo(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[wt] == null) e[wt] = Kn++;
      else if (e[wt] < n[$e]) return;
      return n(q.event ? q.event(e) : e);
    }
  };
}
function eo(t, e, n, s, i, a, r, c, h, A) {
  var f, u, l, m, p, v, C, M, g, k, S, I, E, b, T, P, B = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (h = !!(32 & n.__u), a = [c = e.__e = n.__e]), (f = q.__b) && f(e);
  e: if (typeof B == "function") {
    u = r.length;
    try {
      if (g = e.props, k = B.prototype && B.prototype.render, S = (f = B.contextType) && s[f.__c], I = f ? S ? S.props.value : f.__ : s, n.__c ? M = (l = e.__c = n.__c).__ = l.__E : (k ? e.__c = l = new B(g, I) : (e.__c = l = new Mt(g, I), l.constructor = B, l.render = rr), S && S.sub(l), l.state || (l.state = {}), l.__n = s, m = l.__d = !0, l.__h = [], l._sb = []), k && l.__s == null && (l.__s = l.state), k && B.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ke({}, l.__s)), ke(l.__s, B.getDerivedStateFromProps(g, l.__s))), p = l.props, v = l.state, l.__v = e, m) k && B.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), k && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (k && B.getDerivedStateFromProps == null && g !== p && l.componentWillReceiveProps != null && l.componentWillReceiveProps(g, I), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(g, l.__s, I) === !1) {
          e.__v != n.__v && (l.props = g, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(D) {
            D && (D.__ = e);
          }), Lt.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && r.push(l), c = De(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(g, l.__s, I), k && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(p, v, C);
        });
      }
      if (l.context = I, l.props = g, l.__P = t, l.__e = !1, E = q.__r, b = 0, k) l.state = l.__s, l.__d = !1, E && E(e), f = l.render(l.props, l.state, l.context), Lt.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, E && E(e), f = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++b < 25);
      l.state = l.__s, l.getChildContext != null && (s = ke(ke({}, s), l.getChildContext())), k && !m && l.getSnapshotBeforeUpdate != null && (C = l.getSnapshotBeforeUpdate(p, v)), T = f != null && f.type === ae && f.key == null ? vi(f.props.children) : f, c = bi(t, ht(T) ? T : [T], e, n, s, i, a, r, c, h, A), l.base = e.__e, e.__u &= -161, l.__h.length && r.push(l), M && (l.__E = l.__ = null);
    } catch (D) {
      if (r.length = u, e.__v = null, h || a != null) {
        if (D.then) {
          for (e.__u |= h ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          a != null && (a[a.indexOf(c)] = null), e.__e = c;
        } else if (a != null) for (P = a.length; P--; ) $n(a[P]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), D.then || ki(e), q.__e(D, e, n);
    }
  } else a == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = ar(n.__e, e, n, s, i, a, r, h, A);
  return (f = q.diffed) && f(e), 128 & e.__u ? void 0 : c;
}
function ki(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(ki));
}
function _i(t, e, n) {
  for (var s = 0; s < n.length; s++) to(n[s], n[++s], n[++s]);
  q.__c && q.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      q.__e(a, i.__v);
    }
  });
}
function vi(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : ht(t) ? t.map(vi) : t.constructor !== void 0 ? null : ke({}, t);
}
function ar(t, e, n, s, i, a, r, c, h) {
  var A, f, u, l, m, p, v, C = n.props || Ht, M = e.props, g = e.type;
  if (g == "svg" ? i = "http://www.w3.org/2000/svg" : g == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (A = 0; A < a.length; A++) if ((m = a[A]) && "setAttribute" in m == !!g && (g ? m.localName == g : m.nodeType == 3)) {
      t = m, a[A] = null;
      break;
    }
  }
  if (t == null) {
    if (g == null) return document.createTextNode(M);
    t = document.createElementNS(i, g, M.is && M), c && (q.__m && q.__m(e, a), c = !1), a = null;
  }
  if (g == null) C === M || c && t.data == M || (t.data = M);
  else {
    if (a = g == "textarea" && M.defaultValue != null ? null : a && on.call(t.childNodes), !c && a != null) for (C = {}, A = 0; A < t.attributes.length; A++) C[(m = t.attributes[A]).name] = m.value;
    for (A in C) m = C[A], A == "dangerouslySetInnerHTML" ? u = m : A == "children" || A in M || A == "value" && "defaultValue" in M || A == "checked" && "defaultChecked" in M || bt(t, A, null, m, i);
    for (A in M) m = M[A], A == "children" ? l = m : A == "dangerouslySetInnerHTML" ? f = m : A == "value" ? p = m : A == "checked" ? v = m : c && typeof m != "function" || C[A] === m || bt(t, A, m, C[A], i);
    if (f) c || u && (f.__html == u.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (u && (t.innerHTML = ""), bi(e.type == "template" ? t.content : t, ht(l) ? l : [l], e, n, s, g == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, r, a ? a[0] : n.__k && De(n, 0), c, h), a != null) for (A = a.length; A--; ) $n(a[A]);
    c && g != "textarea" || (A = "value", g == "progress" && p == null ? t.removeAttribute("value") : p != null && (p !== t[A] || g == "progress" && !p || g == "option" && p != C[A]) && bt(t, A, p, C[A], i), A = "checked", v != null && v != t[A] && bt(t, A, v, C[A], i));
  }
  return t;
}
function to(t, e, n) {
  try {
    if (typeof t == "function") {
      var s = typeof t.__u == "function";
      s && t.__u(), s && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    q.__e(i, n);
  }
}
function wi(t, e, n) {
  var s, i;
  if (q.unmount && q.unmount(t), (s = t.ref) && (s.current && s.current != t.__e || to(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount) try {
      s.componentWillUnmount();
    } catch (a) {
      q.__e(a, e);
    }
    s.base = s.__P = s.__n = null;
  }
  if (s = t.__k) for (i = 0; i < s.length; i++) s[i] && wi(s[i], e, n || typeof t.type != "function");
  n || $n(t.__e), t.__c = t.__ = t.__e = void 0;
}
function rr(t, e, n) {
  return this.constructor(t, n);
}
function xo(t, e, n) {
  var s, i, a, r;
  e == document && (e = document.documentElement), q.__ && q.__(t, e), i = (s = !1) ? null : e.__k, a = [], r = [], eo(e, t = e.__k = Qt(ae, null, [t]), i || Ht, Ht, e.namespaceURI, i ? null : e.firstChild ? on.call(e.childNodes) : null, a, i ? i.__e : e.firstChild, s, r), _i(a, t, r), t.props.children = null;
}
function no(t) {
  function e(n) {
    var s, i;
    return this.getChildContext || (s = /* @__PURE__ */ new Set(), (i = {})[e.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      s = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && s.forEach(function(r) {
        r.__e = !0, Pn(r);
      });
    }, this.sub = function(a) {
      s.add(a);
      var r = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        s && s.delete(a), r && r.call(a);
      };
    }), n.children;
  }
  return e.__c = "__cC" + pi++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, s) {
    return n.children(s);
  }).contextType = e, e;
}
on = Lt.slice, q = { __e: function(t, e, n, s) {
  for (var i, a, r; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(t)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), r = i.__d), r) return i.__E = i;
  } catch (c) {
    t = c;
  }
  throw t;
} }, hi = 0, Mt.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ke({}, this.state), typeof t == "function" && (t = t(ke({}, n), this.props)), t && ke(n, t), t != null && this.__v && (e && this._sb.push(e), Pn(this));
}, Mt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Pn(this));
}, Mt.prototype.render = ae, we = [], ui = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, fi = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, jt.__r = 0, An = Math.random().toString(8), wt = "__d" + An, $e = "__a" + An, mi = /(PointerCapture)$|Capture$/i, Kn = 0, Tn = yo(!1), On = yo(!0), pi = 0;
var cr = 0;
function o(t, e, n, s, i, a) {
  e || (e = {});
  var r, c, h = e;
  if ("ref" in h) for (c in h = {}, e) c == "ref" ? r = e[c] : h[c] = e[c];
  var A = { type: t, props: h, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --cr, __i: -1, __u: 0, __source: i, __self: a };
  if (typeof t == "function" && (r = t.defaultProps)) for (c in r) h[c] === void 0 && (h[c] = r[c]);
  return q.vnode && q.vnode(A), A;
}
const lr = ':root{--ink: #f5f7fb;--ink-2: rgba(245, 247, 251, .72);--ink-3: rgba(245, 247, 251, .48);--panel: rgba(12, 14, 22, .42);--panel-line: rgba(255, 255, 255, .09);--chip: rgba(255, 255, 255, .1);--chip-line: rgba(255, 255, 255, .14);--warm: #fbbf24;--red: #fb7185;--green: #34d399;--ease: cubic-bezier(.2, .7, .2, 1)}*{box-sizing:border-box;margin:0;padding:0;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}html,body,#app{height:100%}body{background:#000;color:#f5f7fb;overflow:hidden;font-family:Inter,Roboto,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}button,input,select{font:inherit;color:inherit;border:0;background:none;outline:none}button{cursor:pointer}svg{display:block;flex-shrink:0}.app{position:relative;height:100%;overflow:hidden}.native-photos body,.native-photos .backdrop{background:transparent}.backdrop{position:absolute;inset:0;overflow:hidden}.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transform:scale(1);transition:opacity 2s ease-in-out,transform 20s linear}.slide.active{opacity:1;transform:scale(1.08)}.slide.contain,.slide.contain.active{transform:none;background:#000}.slide-glow{position:absolute;inset:-6%;background-size:cover;background-position:center;opacity:.75}.slide-photo{position:absolute;inset:0;background-size:contain;background-position:center;background-repeat:no-repeat}.q-full .slide-glow{-webkit-filter:blur(28px) saturate(1.3);filter:blur(28px) saturate(1.3)}.aurora{background:radial-gradient(ellipse at 20% 30%,rgba(56,189,248,.35) 0%,transparent 55%),radial-gradient(ellipse at 80% 70%,rgba(168,85,247,.32) 0%,transparent 55%),radial-gradient(ellipse at 60% 10%,rgba(251,191,36,.18) 0%,transparent 50%),#05060c}.soft{position:absolute;inset:-5%;background-size:cover;background-position:center;opacity:0;transition:opacity .6s cubic-bezier(.2,.7,.2,1)}.soft.on{opacity:1}.shade{position:absolute;inset:0;background:linear-gradient(to bottom,#00000040,#0000 30%,#00000026 55%,#000000b3);transition:background-color .6s cubic-bezier(.2,.7,.2,1)}.shade.deep{background-color:#04060c61}.ambient{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;padding:0 5vw 9vh;transform:translateY(-100%);pointer-events:none}.ambient.visible{transform:none}.clock-link{pointer-events:auto;cursor:pointer}.ambient-clock{text-shadow:0 2px 30px rgba(0,0,0,.35)}.ambient-time{font-size:22vh;font-weight:200;letter-spacing:-.04em;line-height:.9}.ambient-date{margin-top:2vh;font-size:3vh;font-weight:400;color:#f5f7fbb8;letter-spacing:.01em}.glances{display:flex;flex-wrap:wrap;justify-content:flex-end;max-width:50%;margin-bottom:1vh}.glance{pointer-events:auto;cursor:pointer;transition:transform .15s,background .2s;display:flex;align-items:center;margin:6px 0 0 8px;padding:9px 16px 9px 13px;border-radius:999px;background:#00000052;border:1px solid rgba(255,255,255,.14);font-size:15px;font-weight:500;color:#f5f7fb}.glance:active{transform:scale(.94);background:#00000080}.glance svg{margin-right:8px;color:#f5f7fbb8}.glance.lit svg{color:#fbbf24}.glance.alert{background:#e11d488c;border-color:#fb718599}.glance.alert svg,.glance.warn svg{color:#fff}.glance.warn{background:#d9770680}.ambient{transition:transform .5s cubic-bezier(.2,.7,.2,1)}.home-hint{position:absolute;left:50%;bottom:1.5vh;bottom:max(1.5vh,env(safe-area-inset-bottom));transform:translate(-50%);display:flex;padding:6px 24px;background:none;border:0;color:#f5f7fb;opacity:0;pointer-events:none;transition:opacity .6s ease,color 1.2s ease}.home-hint.visible{opacity:1;pointer-events:auto}.home-hint svg{-webkit-filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));filter:drop-shadow(0 1px 6px rgba(0,0,0,.55));-webkit-animation:nudge 2.4s ease-in-out infinite;animation:nudge 2.4s ease-in-out infinite}.text-contrast .home-hint.ink-dark svg{-webkit-filter:drop-shadow(0 1px 6px rgba(255,255,255,.6));filter:drop-shadow(0 1px 6px rgba(255,255,255,.6))}.ambient.customizing .home-hint{display:none}.q-lite .home-hint svg{-webkit-animation:none;animation:none}@-webkit-keyframes nudge{0%,60%,to{-webkit-transform:translateY(0)}30%{-webkit-transform:translateY(-5px)}}@keyframes nudge{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-5px)}}.dragging .ambient,.dragging .controls,.dragging .soft{transition:none}.dragging .controls{pointer-events:none}.controls{position:absolute;inset:0;display:flex;flex-direction:column;padding:22px 28px 28px;padding-top:max(22px,env(safe-area-inset-top));padding-left:max(28px,env(safe-area-inset-left));padding-right:max(28px,env(safe-area-inset-right));padding-bottom:max(28px,env(safe-area-inset-bottom));opacity:0;transform:scale(.96);transition:opacity .5s cubic-bezier(.2,.7,.2,1),transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}.controls.visible{opacity:1;transform:none;pointer-events:auto}.bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.bar-time{display:flex;align-items:baseline}.bar-clock{font-size:38px;font-weight:300;letter-spacing:-.03em}.bar-date{margin-left:14px;font-size:15px;color:#f5f7fbb8}.bar-actions{display:flex;align-items:center}.conn{display:flex;align-items:center;margin-right:14px;font-size:13px;color:#f5f7fbb8}.conn i{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#fbbf24}.conn-connected i{background:#34d399;box-shadow:0 0 10px #34d399}.conn-auth_invalid i,.conn-disconnected i{background:#fb7185}.round{width:48px;height:48px;margin-left:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);transition:transform .15s}.round:active{transform:scale(.92)}.round.accent{background:#7dd3fc;color:#0b0d14;border-color:transparent}.bar{position:relative}.bar-narrow .bar-date{display:none}.bar-narrow .bar-clock{font-size:30px}.home-switch{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);transition:opacity .2s}.home-switch:active{transform:translate(-50%,-50%) scale(.96)}.bar-narrow.menu-open .home-switch{opacity:0;pointer-events:none}.bar-narrow.bar-editing .home-switch{display:none}.burger{position:relative;display:flex;align-items:center}.burger-items{position:absolute;right:58px;top:0;display:flex;align-items:center;opacity:0;pointer-events:none;transform:translate(24px);transition:opacity .22s cubic-bezier(.2,.7,.2,1),transform .22s cubic-bezier(.2,.7,.2,1)}.menu-open .burger-items{opacity:1;pointer-events:auto;transform:none}.burger-btn{position:relative}.burger-dot{position:absolute;top:4px;right:4px;width:8px;height:8px;border-radius:50%;background:#fbbf24}.burger-btn.conn-connected .burger-dot{background:#34d399}.burger-btn.conn-auth_invalid .burger-dot,.burger-btn.conn-disconnected .burger-dot{background:#fb7185}.grid{position:relative;flex:1;min-height:0;margin:-16px;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.grid::-webkit-scrollbar{display:none}.grid-inner{position:relative}.cell{position:absolute;display:flex;transition:left .22s cubic-bezier(.2,.7,.2,1),top .22s cubic-bezier(.2,.7,.2,1),width .22s cubic-bezier(.2,.7,.2,1),height .22s cubic-bezier(.2,.7,.2,1)}.cell.dragged{z-index:20;transition:none;-webkit-animation:none;animation:none}.cell.dragged .panel{box-shadow:0 30px 60px #0000008c;border-color:#ffffff80}.drop-slot{position:absolute;border-radius:28px;border:2px dashed rgba(255,255,255,.45);background:#ffffff14;transition:left .15s,top .15s,width .15s,height .15s}.grid-dots{position:absolute;inset:0}.grid-dot{position:absolute;border-radius:10px;background:#ffffff09}.grid-note{font-size:12px;color:#f5f7fb7a;padding:8px 16px 0}.hidden-cards{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.hidden-cards .muted{display:flex;align-items:center;margin-right:8px}.hidden-cards .muted svg{margin-right:4px}.hidden-cards .chip{display:flex;align-items:center;margin:0 6px 6px 0}.hidden-cards .chip svg{margin-right:4px}.editing .cell{cursor:move}.dragging-card,.dragging-card *{cursor:-webkit-grabbing;cursor:grabbing}.badge-btn{position:absolute;top:-8px;width:28px;height:28px;border-radius:50%;z-index:2;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.25);box-shadow:0 4px 12px #0006}.badge-del{left:-8px;background:#3f3f46;color:#fff}.badge-edit{right:-8px;background:#e5e7eb;color:#111}.resize-handle{position:absolute;right:2px;bottom:2px;width:30px;height:30px;cursor:nwse-resize;z-index:2;border-right:3px solid rgba(255,255,255,.85);border-bottom:3px solid rgba(255,255,255,.85);border-bottom-right-radius:24px}.size-tag{position:absolute;left:50%;bottom:10px;padding:3px 8px;border-radius:8px;z-index:2;transform:translate(-50%);background:#0000008c;font-size:11px;font-weight:600;color:#f5f7fbb8}.cell>.panel{flex:1;min-width:0}.panel-body{flex:1;min-height:0;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.panel-body::-webkit-scrollbar,.lights::-webkit-scrollbar{display:none}.card-empty{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;font-size:13px;color:#f5f7fb7a;padding:0 12px}.panel{display:flex;flex-direction:column;min-height:0;background:#0c0e166b;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:20px 22px;box-shadow:0 20px 50px #00000040}.panel-head{display:flex;align-items:center;justify-content:space-between;min-height:30px;margin-bottom:14px}.panel-head h2{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#f5f7fbb8}.home-pane{flex:1;min-height:0;display:flex;flex-direction:column}.screen-tabs{display:flex;align-items:center;overflow-x:auto;white-space:nowrap;margin:-8px 0 12px;padding-bottom:2px;-webkit-overflow-scrolling:touch}.screen-tab{display:inline-flex;flex-shrink:0;align-items:center;height:34px;padding:0 14px;margin-right:8px;border-radius:17px;font-size:14px;font-weight:500;color:#f5f7fb7a;background:#ffffff0f}.screen-tab.on{color:#f5f7fb;background:#ffffff29;font-weight:600}.screen-tab.add svg{margin-right:4px}.screen-tab.editing{padding:0 4px}.screen-tab input{width:auto;min-width:0;height:30px;padding:0 6px;border:0;border-radius:10px;background:transparent;color:#f5f7fb;font:inherit;text-align:center}.screen-tab input:focus{background:#00000040;outline:none}.screen-move,.screen-del{display:flex;align-items:center;justify-content:center;min-width:28px;height:28px;border-radius:14px;color:#f5f7fb7a}.screen-del.sure{padding:0 10px;background:#ef4444d9;color:#fff;font-size:13px}.slide-next{-webkit-animation:in-next .35s cubic-bezier(.2,.7,.2,1);animation:in-next .35s cubic-bezier(.2,.7,.2,1)}.slide-prev{-webkit-animation:in-prev .35s cubic-bezier(.2,.7,.2,1);animation:in-prev .35s cubic-bezier(.2,.7,.2,1)}@-webkit-keyframes in-next{0%{opacity:0;-webkit-transform:translateX(60px)}}@keyframes in-next{0%{opacity:0;transform:translate(60px)}}@-webkit-keyframes in-prev{0%{opacity:0;-webkit-transform:translateX(-60px)}}@keyframes in-prev{0%{opacity:0;transform:translate(-60px)}}.home-switch{display:flex;flex-direction:column;align-items:center;padding:6px 14px;border-radius:14px}.home-switch:active{background:#ffffff14}.home-name{font-size:15px;font-weight:600}.home-dots{display:flex;margin-top:5px}.home-dots i{width:6px;height:6px;border-radius:50%;margin:0 3px;background:#ffffff4d}.home-dots i.on{background:#fff}.editing .cell{-webkit-animation:jiggle .9s ease-in-out infinite;animation:jiggle .9s ease-in-out infinite}.editing div:nth-child(2n)>.cell{-webkit-animation-delay:-.45s;animation-delay:-.45s}.editing .cell .panel{border:1px dashed rgba(255,255,255,.35)}.editing .cell .panel-body{pointer-events:none;opacity:.45}@-webkit-keyframes jiggle{0%,to{-webkit-transform:rotate(-.35deg)}50%{-webkit-transform:rotate(.35deg)}}@keyframes jiggle{0%,to{transform:rotate(-.35deg)}50%{transform:rotate(.35deg)}}.icon-btn.danger{color:#fb7185}.pill-btn{margin-left:10px;display:flex;align-items:center;height:44px;padding:0 18px;border-radius:999px;color:#0b0d14;font-weight:600;background:#7dd3fc}.pill-btn svg{margin-right:6px}.rooms{flex:1;display:flex;flex-direction:column;justify-content:space-around}.rooms.compact .room{padding:4px 0}.rooms.compact .room-temp{font-size:28px}.rooms.compact .room-name{font-size:12px}.room{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.09)}.room:last-child{border-bottom:0}.room-name{font-size:14px;color:#f5f7fbb8}.room-vals{display:flex;align-items:baseline;justify-content:space-between;margin-top:2px}.room-temp{font-size:46px;font-weight:200;letter-spacing:-.03em;line-height:1.05}.room-temp sup{font-size:.5em;font-weight:300;vertical-align:top;position:relative;top:.25em;margin-left:2px;color:#7dd3fc}.room-hum{display:flex;align-items:center;font-size:15px;color:#f5f7fbb8}.room-hum svg{margin-right:4px;color:#7dd3fc}.chip-btn{display:flex;align-items:center;padding:7px 12px;border-radius:999px;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);font-size:13px;font-weight:500}.chip-btn svg{margin-right:6px}.lights{flex:1;min-height:0;display:flex;flex-wrap:wrap;align-content:flex-start;margin:-5px;overflow-y:auto;-webkit-overflow-scrolling:touch}.cols-1 .light{width:calc(100% - 10px)}.cols-2 .light{width:calc(50% - 10px)}.cols-3 .light{width:calc(33.333% - 10px)}.cols-4 .light{width:calc(25% - 10px)}.cols-5 .light{width:calc(20% - 10px)}.cols-6 .light{width:calc(16.666% - 10px)}.lights.compact .light{min-height:70px;padding:10px 12px}.lights.compact .light-icon{width:30px;height:30px;margin-bottom:6px}.lights.list .light{flex-direction:row;align-items:center;justify-content:flex-start;min-height:0;padding:7px 10px;border-radius:14px}.lights.list .light-icon{width:28px;height:28px;margin:0 8px 0 0;flex-shrink:0}.lights.list .light-name{min-width:0;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lights.list .light-state{display:none}.light{width:calc(50% - 10px);margin:5px;min-height:96px;flex-grow:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:14px;border-radius:20px;text-align:left;background:#ffffff0f;border:1px solid rgba(255,255,255,.07);transition:background .25s,border-color .25s,transform .15s,box-shadow .25s}.light:active{transform:scale(.96)}.light-icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;color:#f5f7fbb8;margin-bottom:12px;transition:background .25s,color .25s,box-shadow .25s}.light-name{font-size:15px;font-weight:500;line-height:1.2}.light-state{font-size:12px;color:#f5f7fb7a;margin-top:3px}.light.on{background:#fbbf2429;border-color:#fbbf2480;box-shadow:0 0 30px #fbbf241f}.light.on .light-icon{background:#fbbf24;color:#1a1205;box-shadow:0 0 22px #fbbf248c}.light.on .light-state{color:#f5f7fbb8}.light.na{opacity:.45}.seg{display:flex;background:#00000040;border-radius:999px;padding:3px}.seg button{padding:5px 12px;border-radius:999px;font-size:12px;font-weight:500;color:#f5f7fbb8}.seg .active{background:#ffffff24;color:#f5f7fb}.cam-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.seg-inline{align-self:flex-start;flex-shrink:0;max-width:100%;margin-bottom:10px;overflow-x:auto;-webkit-overflow-scrolling:touch}.seg-inline::-webkit-scrollbar{display:none}.seg-inline button{flex-shrink:0;white-space:nowrap}.seg-full{align-self:stretch}.seg-full button{flex:1 0 auto;text-align:center}.cam{position:relative;flex:1;min-height:120px;border-radius:18px;overflow:hidden;background:#00000073;cursor:pointer}.cam img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.cam.fit-width img{top:50%;height:auto;transform:translateY(-50%)}.cam.fit-height img{left:50%;width:auto;transform:translate(-50%)}.cam.fit-width,.cam.fit-height{background:#000}.cam-empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:13px}.cam-empty svg{margin-bottom:8px}.live{position:absolute;top:10px;left:10px;display:flex;align-items:center;padding:3px 8px;border-radius:6px;background:#00000080;font-size:10px;font-weight:700;letter-spacing:.08em}.live i{width:6px;height:6px;border-radius:50%;background:#fb7185;margin-right:5px;-webkit-animation:pulse 1.6s infinite;animation:pulse 1.6s infinite}@-webkit-keyframes pulse{50%{opacity:.3}}@keyframes pulse{50%{opacity:.3}}.status-row{display:flex;align-items:center;padding:10px 0;color:#f5f7fbb8}.status-row+.status-row{border-top:1px solid rgba(255,255,255,.09)}.status-icon{width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#34d39926;color:#34d399;margin-right:12px}.status-text{flex:1;display:flex;flex-direction:column;min-width:0}.status-text b{font-size:14px;font-weight:500;color:#f5f7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.status-text small{font-size:12px;color:#f5f7fb7a;margin-top:2px}.status-row.alert .status-icon{background:#fb718533;color:#fb7185}.status-row.alert small{color:#fb7185}.sheet-layer{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 5vw 9vh;padding-bottom:calc(9vh + 56px);background:linear-gradient(to top,#00000059,#0000 60%);-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease}.sheet{position:relative;width:460px;max-width:100%;max-height:72vh;overflow:hidden;border-radius:30px;border:1px solid rgba(255,255,255,.16);box-shadow:0 30px 80px #00000073;transform-origin:100% 100%;-webkit-animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1);animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1)}.sheet-wide{width:640px}.sheet .lights{overflow:visible}.sheet-cameras .cam{height:300px;flex:none}.sheet-glass{position:absolute;inset:0;overflow:hidden;background:#10131c}.glass-layer{position:absolute;background-size:cover;background-position:center}.glass-layer.fresh{-webkit-animation:fade-in 1.2s ease;animation:fade-in 1.2s ease}.sheet-tint{position:absolute;inset:0;background:#0a0c1480}.sheet-inner{position:relative;padding:20px 22px 22px;max-height:72vh;overflow-y:auto;-webkit-overflow-scrolling:touch}.sheet .rooms .room{padding:12px 0}.sheet-actions{display:flex;align-items:center}.sheet-close{width:32px;height:32px;margin-left:8px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1f;color:#f5f7fbb8}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes sheet-in{0%{opacity:0;-webkit-transform:translateY(24px) scale(.92)}}@keyframes sheet-in{0%{opacity:0;transform:translateY(24px) scale(.92)}}.modal{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:16px;background:#0009}.modal-box{width:100%;max-width:560px;max-height:92%;overflow-y:auto;-webkit-overflow-scrolling:touch;background:#141620f7;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:24px;box-shadow:0 30px 80px #0009}.modal-wide{max-width:960px}.modal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.modal-head h2{font-size:19px;font-weight:600}.modal-title{display:flex;align-items:center}.modal-title svg{margin-right:10px;color:#7dd3fc}.icon-btn{color:#f5f7fb7a}.cam-full{border-radius:18px;overflow:hidden;background:#000}.cam-full img{display:block;width:100%;max-height:72vh;object-fit:contain}.tabs{display:flex;padding:4px;margin-bottom:18px;border-radius:14px;background:#ffffff0d}.tabs button{flex:1;padding:9px;border-radius:10px;font-size:14px;font-weight:500;color:#f5f7fbb8}.tabs .active{background:#ffffff1a;color:#f5f7fb}.modal-box .hint{position:static;opacity:1;text-align:left;font-size:13px;color:#f5f7fb7a;letter-spacing:0;margin-bottom:14px;line-height:1.45}.modal-box .hint.small{font-size:12px;margin:4px 0 0;text-align:center}.drop-zone{position:relative;display:block;text-align:center;padding:26px 16px;margin-bottom:14px;border:2px dashed rgba(255,255,255,.16);border-radius:20px;background:#ffffff08}.drop-zone svg{margin:0 auto 8px}.drop-zone input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.drop-zone.busy{opacity:.6}.drop-zone.over{border-color:#7dd3fc;background:#7dd3fc14}.upload-error{margin:-6px 0 12px}.drop-title{font-size:14px;font-weight:500}.thumbs{display:flex;flex-wrap:wrap;margin:0 -4px 10px}.thumb{position:relative;width:72px;height:72px;margin:4px;border-radius:12px;background-size:cover;background-position:center}.thumb-del{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#000000a6}.option{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-top:1px solid rgba(255,255,255,.09);font-size:14px;color:#f5f7fbb8}.option select{padding:8px 12px;border-radius:10px;background:#ffffff14;color:#f5f7fb;font-size:13px}.option select option{color:#000}.option-col{display:block}.chip-picker{margin-top:8px}.chip-picker .check{margin:4px 0;color:#f5f7fb}.field{display:block;margin-bottom:14px}.field span{display:block;font-size:12px;color:#f5f7fb7a;margin-bottom:6px}.field input{width:100%;padding:13px 14px;border-radius:12px;font-size:15px;background:#ffffff0f;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text}.field input:focus{border-color:#7dd3fc}.table-wrap{max-height:240px;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:12px;background:#0003}.diag{width:100%;border-collapse:collapse;font-size:12px}.diag td{padding:7px 10px;border-bottom:1px solid rgba(255,255,255,.09);word-break:break-all}.mono{font-family:Menlo,Roboto Mono,monospace}.strong{font-weight:600}.muted{color:#f5f7fb7a}.modal-foot{display:flex;justify-content:space-between;align-items:center;margin-top:18px}.btn{display:flex;align-items:center;padding:11px 18px;border-radius:14px;font-size:14px;font-weight:600}.btn svg{margin-right:6px}.btn-accent{background:#7dd3fc;color:#0b0d14}.btn-danger{background:#fb71851f;color:#fb7185}.type-list .type-row{display:flex;align-items:center;width:100%;padding:12px 6px;text-align:left;color:#f5f7fbb8;border-bottom:1px solid rgba(255,255,255,.09)}.type-list .type-row:last-child{border-bottom:0}.seg-wide{align-self:flex-start;display:inline-flex}.seg-wide button{padding:7px 16px;font-size:13px}.swatches{display:flex;flex-wrap:wrap}.swatch{width:34px;height:34px;border-radius:50%;margin:0 8px 6px 0;border:2px solid transparent}.swatch.active{border-color:#fff;box-shadow:0 0 0 2px #00000080 inset}.swatch-auto{background:#ffffff1a;font-size:12px;font-weight:700;color:#f5f7fbb8}.icon-grid{display:flex;flex-wrap:wrap;margin:0 -3px}.icon-grid button{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0d;color:#f5f7fbb8}.icon-grid .active{background:#fff3;color:#f5f7fb}.check{display:flex;align-items:center;font-size:14px;color:#f5f7fbb8;margin:6px 0 10px}.check input{margin-right:10px;width:18px;height:18px}.check-row{padding:10px 0;border-top:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.09);margin-bottom:14px}.items{border-radius:14px;background:#0003;padding:4px 8px 8px}.item-block{border-bottom:1px solid rgba(255,255,255,.09)}.item-row{display:flex;align-items:center;padding:8px 0}.item-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ffffff14;margin-right:10px;flex-shrink:0}.item-main{flex:1;min-width:0;display:flex;flex-direction:column}.item-main input{padding:6px 8px;margin-left:-8px;border-radius:8px;font-size:14px;-webkit-user-select:text;user-select:text}.item-main input:focus{background:#ffffff0f}.item-main .mono{font-size:11px;color:#f5f7fb7a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item-row .icon-btn{width:32px;height:32px;display:flex;align-items:center;justify-content:center}.na-tag{font-style:normal;color:#fb7185}.link{display:flex;align-items:center;font-size:11px;color:#7dd3fc;margin-top:3px;text-align:left}.link svg{margin-right:4px}.btn-ghost{margin-top:8px;background:#ffffff14;color:#f5f7fb;font-weight:500}.btn[disabled]{opacity:.4}.auth{margin-bottom:16px;padding:14px 16px 2px;border-radius:16px;background:#ffffff0a}.auth-title{font-size:15px;font-weight:600;margin-bottom:12px}.auth-or{display:flex;align-items:center;margin:-2px 0 12px;font-size:12px;color:#f5f7fb7a}.auth-or:before,.auth-or:after{content:"";flex:1;height:1px;background:#ffffff1f}.auth-or span{margin:0 12px}.auth .btn-login{width:100%;justify-content:center;margin:0 0 4px}.auth-session{display:flex;align-items:center;justify-content:space-between;margin:-2px 0 6px;font-size:13px;color:#f5f7fbb8}.auth-session .btn{margin:0 0 0 12px;flex-shrink:0}.ha-storage{margin:0 0 14px}.ha-storage .hint{margin:0}.migration{margin:0 0 14px;padding:12px 14px;border-radius:14px;background:#ffffff14}.migration p{margin:0 0 4px;font-size:14px}.picker{border-radius:14px;background:#00000040;padding:8px}.picker-search{display:flex;align-items:center;padding:4px 6px;border-radius:10px;background:#ffffff12;color:#f5f7fb7a}.picker-search input{flex:1;padding:8px;border:0;background:none;font-size:14px;color:#f5f7fb;-webkit-user-select:text;user-select:text}.picker .check{margin:8px 4px;font-size:13px}.picker-mode{margin-bottom:8px}.picker-list{max-height:260px;overflow-y:auto;-webkit-overflow-scrolling:touch}.picker-row{display:flex;flex-wrap:wrap;align-items:baseline;width:100%;padding:9px 6px;text-align:left;border-bottom:1px solid rgba(255,255,255,.09)}.picker-row:active{background:#ffffff14}.picker-name{flex:1;font-size:14px}.picker-state{font-size:12px;color:#f5f7fb7a;margin-left:8px}.picker-id{width:100%;font-size:11px;color:#f5f7fb7a;margin-top:2px}.picker-empty{padding:16px;text-align:center}.home-row{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.09)}.home-row-head{display:flex;align-items:center;margin-bottom:8px}.home-input{flex:1;min-width:0;padding:8px 10px;border-radius:10px;font-size:15px;font-weight:600;background:#ffffff0f;-webkit-user-select:text;user-select:text}.row-btns{display:flex}.row-btns .btn{margin:0 8px 8px 0}.json{display:block;width:100%;height:120px;padding:10px;border-radius:12px;font:12px Menlo,monospace;color:#f5f7fb;background:#0000004d;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text;resize:vertical}.c-red{color:#fb7185}.small{font-size:12px}.ac-wrap,.media-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.ac{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-main{display:flex;align-items:center}.ac-step{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;border:1px solid rgba(255,255,255,.14);margin:0 10px}.ac-step:active{background:#ffffff2e}.ac-step[disabled]{opacity:.3}.ac-dial{position:relative}.ac-dial svg{position:absolute;top:0;left:0}.ac-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-target{font-size:44px;font-weight:200;letter-spacing:-.03em;line-height:1}.ac.compact .ac-target{font-size:34px}.ac-target sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.ac-mode{font-size:12px;color:#f5f7fbb8;margin-top:4px}.ac-room{font-size:11px;color:#f5f7fb7a;margin-top:2px}.ac-modes{display:flex;flex-wrap:wrap;justify-content:center;margin-top:10px}.ac-mode-btn{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0f;border:1px solid transparent;color:#f5f7fbb8}.ac-mode-btn.active{color:#fff;border-color:#fff6}.ac-fan{margin-top:10px;align-self:center}.ac-fan button{padding:6px 10px;font-size:12px}.media-wrap{flex:1 0 auto}.media{flex:1 0 auto;display:flex;flex-direction:column}.media>:first-child{margin-top:auto}.media>:last-child{margin-bottom:auto}.media.short .media-art{width:52px;height:52px;border-radius:12px}.media.short .media-controls{margin:8px 0 2px}.media.short .media-controls button{width:38px;height:38px}.media.short .media-controls .media-play{width:46px;height:46px}.media-top{display:flex;align-items:center}.media-art{width:72px;height:72px;flex-shrink:0;border-radius:14px;background-size:cover;background-position:center;box-shadow:0 8px 24px #00000059}.media.big .media-art{width:112px;height:112px;border-radius:18px}.media-art-empty{display:flex;align-items:center;justify-content:center;background:#ffffff12;color:#f5f7fb7a}.media-art-empty.big{width:96px;height:96px;border-radius:24px;margin-bottom:12px}.media-info{flex:1;min-width:0;margin-left:14px}.media-title{font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media.big .media-title{font-size:19px}.media-sub{font-size:13px;color:#f5f7fbb8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media-state{display:flex;align-items:center;font-size:11px;color:#f5f7fb7a;margin-top:6px;text-transform:uppercase;letter-spacing:.08em}.media-state.on{color:#34d399}.eq{display:inline-flex;align-items:flex-end;height:10px;margin-right:6px}.eq b{width:2px;margin-right:2px;background:#34d399;-webkit-animation:eq .9s ease-in-out infinite;animation:eq .9s ease-in-out infinite}.eq b:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.eq b:nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}@-webkit-keyframes eq{0%,to{height:3px}50%{height:10px}}@keyframes eq{0%,to{height:3px}50%{height:10px}}.icon-round{width:36px;height:36px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;color:#f5f7fbb8;margin-left:8px}.media-controls{display:flex;align-items:center;justify-content:center;margin:14px 0 6px}.media-controls button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:#f5f7fb;margin:0 6px}.media-controls button:active{background:#ffffff1a}.media-controls .media-play{width:56px;height:56px;background:#ffffffeb;color:#0b0d14}.media-volume{display:flex;align-items:center;margin-top:8px}.media-volume button{width:32px;height:32px;display:flex;align-items:center;justify-content:center;color:#f5f7fbb8}.vol-bar{position:relative;flex:1;height:6px;margin:0 10px;border-radius:3px;background:#ffffff1f;cursor:pointer}.vol-bar:before{content:"";position:absolute;inset:-12px 0}.vol-fill{position:absolute;top:0;left:0;bottom:0;border-radius:3px;background:#f5f7fb}.vol-num{width:28px;text-align:right;font-size:12px;color:#f5f7fb7a}.media-sources{margin:10px -4px 0;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}.media-sources::-webkit-scrollbar{display:none}.media-sources .chip{flex-shrink:0;white-space:nowrap}.media-off{align-items:center;text-align:center}.media-power{margin:14px 0 0}.media-hint{margin-top:10px;max-width:220px}.dot-live{display:inline-block;width:6px;height:6px;border-radius:50%;background:#34d399;margin-right:6px;vertical-align:middle}.weather{flex:1;display:flex;flex-direction:column;min-height:0}.weather-now{display:flex;align-items:center}.weather-temp{font-size:48px;font-weight:200;letter-spacing:-.03em;line-height:1;margin:0 14px 0 10px}.weather-temp sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.weather-desc{display:flex;flex-direction:column;min-width:0}.weather-desc b{font-size:15px;font-weight:500}.weather-desc span{font-size:12px;color:#f5f7fb7a;margin-top:2px}.weather-facts{display:flex;flex-wrap:wrap;margin-top:12px;font-size:13px;color:#f5f7fbb8}.weather-facts span{display:flex;align-items:center;margin-right:16px}.weather-facts svg{margin-right:5px;color:#f5f7fb7a}.weather-rooms{margin-top:10px;border-top:1px solid rgba(255,255,255,.09)}.wroom{display:flex;align-items:center;height:36px;font-size:14px}.wroom-name{flex:1;min-width:0;color:#f5f7fbb8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wroom-hum{display:flex;align-items:center;font-size:12px;color:#f5f7fb7a;margin-right:12px}.wroom-hum svg{margin-right:3px;color:#7dd3fc}.wroom-temp{font-weight:500;font-size:16px}.room-name svg{display:inline-block;vertical-align:-2px;margin-right:6px;color:#f5f7fbb8}.weather-hours{display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px -4px 0;padding-bottom:4px}.weather-hours::-webkit-scrollbar{display:none}.hour{flex-shrink:0;width:52px;display:flex;flex-direction:column;align-items:center;font-size:12px}.hour svg{margin:6px 0;color:#f5f7fbb8}.hour b{font-weight:500;font-size:14px}.weather-days{margin-top:12px;border-top:1px solid rgba(255,255,255,.09);padding-top:4px}.day{display:flex;align-items:center;padding:7px 0;font-size:14px}.day-name{width:72px;color:#f5f7fbb8}.day svg{color:#f5f7fbb8;margin-right:10px}.day-lo{width:34px;text-align:right;color:#f5f7fb7a}.day-hi{width:34px}.day-bar{position:relative;flex:1;height:4px;margin:0 10px;border-radius:2px;background:#ffffff14}.day-bar i{position:absolute;top:0;bottom:0;border-radius:2px;background:linear-gradient(to right,#0891b2,#d97706)}.ambient-weather{display:flex;align-items:center;margin-top:2.4vh;font-size:2.8vh;color:#f5f7fb}.ambient-weather svg{width:4.2vh;height:4.2vh}.aw-temp{font-size:4.6vh;font-weight:300;margin:0 1.6vh 0 1.2vh}.aw-desc{display:flex;flex-direction:column;font-size:2.2vh;color:#f5f7fbb8;line-height:1.25}.aw-desc small{font-size:1.9vh;color:#f5f7fb7a}.tappable{cursor:pointer;border-radius:10px;transition:background .15s}.tappable:active{background:#ffffff12}.detail{position:relative;text-align:left}.detail-hero{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px}.hero-value{font-size:52px;font-weight:200;letter-spacing:-.03em;line-height:1;margin-bottom:6px}.chips{display:flex;flex-wrap:wrap;margin:0 -4px 12px}.chip{display:flex;align-items:baseline;margin:4px;padding:8px 12px;border-radius:12px;background:#ffffff0f;border:1px solid transparent;font-size:13px;color:#f5f7fbb8}.chip b{margin-left:8px;font-weight:600;color:#f5f7fb}.chip.active{border-color:#ffffff59;background:#ffffff1f;color:#f5f7fb}.detail-tools{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.chip-btn.on{background:#fff3}.chart{position:relative;margin:0 auto}.chart svg{display:block;overflow:visible}.chart-tick{fill:#f5f7fb7a;font-size:11px}.chart-legend{display:flex;justify-content:flex-end;font-size:12px;color:#f5f7fb7a;margin-top:2px}.chart-legend span{display:flex;align-items:center;margin-left:14px}.chart-legend i{width:12px;height:12px;border-radius:3px;margin-right:6px}.chart-legend i.key-line{height:2px;border-radius:1px}.chart-legend i.key-na{border:1px dashed rgba(255,255,255,.35)}.chart-tip{position:absolute;top:0;padding:7px 10px;border-radius:10px;pointer-events:none;white-space:nowrap;transform:translate(-50%);background:#080a10eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 8px 24px #0006;display:flex;flex-direction:column;font-size:12px;color:#f5f7fbb8}.chart-tip b{font-size:15px;color:#f5f7fb}.chart-empty{height:210px;display:flex;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:14px}.stats{display:flex;flex-wrap:wrap;margin:14px -5px 0}.stat{flex:1;min-width:120px;margin:5px;padding:12px 14px;border-radius:14px;background:#ffffff0d}.stat-label{font-size:12px;color:#f5f7fb7a}.stat-value{font-size:22px;font-weight:300;margin-top:4px;white-space:nowrap}.stat-note{font-size:11px;color:#f5f7fb7a;margin-top:2px}.detail-foot{margin-top:10px}.detail .table-wrap{max-height:210px}.root{height:100%}@supports (backdrop-filter: blur(1px)){.q-full .panel,.q-full .glance,.q-full .round,.q-full .chip-btn{backdrop-filter:blur(18px) saturate(140%)}.q-full .panel{background:#0c0e1652}.q-full .modal{backdrop-filter:blur(6px)}.q-full .modal-box{background:#141620d1;backdrop-filter:blur(24px) saturate(150%)}}.q-lite .slide{transform:none!important;transition:opacity .6s linear}.q-lite .soft{display:none}.q-lite .shade.deep{background-color:#04060cd1}.q-lite .sheet-glass .glass-layer{display:none}.q-lite .panel,.q-lite .modal-box,.q-lite .sheet,.q-lite .glance,.q-lite .cell.dragged .panel,.q-lite .light.on,.q-lite .light.on .light-icon,.q-lite .media-art,.q-lite .badge-btn{box-shadow:none!important}.q-lite .ambient-clock,.q-lite .ambient .header{text-shadow:none}.q-lite .eq b,.q-lite .live i,.q-lite .editing .cell,.q-lite .sheet,.q-lite .sheet-layer{-webkit-animation:none!important;animation:none!important}.q-lite .controls,.q-lite .ambient{transition-duration:.2s}.q-lite .cell,.q-lite .light,.q-lite .light-icon,.q-lite .soft{transition:none}@media(max-width:900px),(orientation:portrait){.ambient{display:block;padding-top:0}.ambient-clock{position:absolute;left:6vw;bottom:24vh}.ambient-time{font-size:13vh}.ambient-date{font-size:2.2vh}.glances{position:absolute;left:6vw;right:6vw;bottom:10vh;max-width:none;justify-content:flex-start}.glance{margin:6px 8px 0 0}.controls{padding:16px;padding-top:max(16px,env(safe-area-inset-top))}}@media(max-width:700px){.ambient-clock{left:6vw;right:6vw;text-align:center}.ambient-weather,.glances{justify-content:center}.glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.glance span{display:none}.glance svg{margin:0;width:22px;height:22px}}@media(max-width:900px),(orientation:portrait){.bar-date,.conn{display:none}.sheet-layer{justify-content:center;padding:0 12px 12px;padding-bottom:max(12px,env(safe-area-inset-bottom))}.sheet,.sheet-wide{width:100%}.sheet-cameras .cam{height:220px}.hero-value{font-size:40px}.stat{min-width:40%}.rooms .room-temp{font-size:36px}}.ambient.lock-size-xs .ambient-time{font-size:10vh}.ambient.lock-size-s .ambient-time{font-size:15vh}.ambient.lock-size-l .ambient-time{font-size:28vh}.ambient.lock-size-xl .ambient-time{font-size:34vh}.ambient.lock-center,.ambient.lock-top{flex-direction:column;align-items:center;justify-content:flex-end}.ambient.lock-top{justify-content:flex-start;padding-top:10vh}.ambient.lock-center .ambient-clock,.ambient.lock-top .ambient-clock{position:static;text-align:center}.ambient.lock-center .ambient-weather,.ambient.lock-top .ambient-weather{justify-content:center}.ambient.lock-center .glances,.ambient.lock-top .glances{position:static;max-width:none;justify-content:center;margin-top:3vh}.ambient.lock-center .glance,.ambient.lock-top .glance{margin:6px 5px 0}.ambient.lock-top .ambient-clock{display:flex;flex-direction:column;align-items:center}.ambient-date.above{margin:0 0 1vh}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .ambient-weather{justify-content:flex-start}.ambient.chips-icons .glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.ambient.chips-icons .glance span{display:none}.ambient.chips-icons .glance svg{margin:0;width:22px;height:22px}.ambient.chips-text .glance{width:auto;height:auto;padding:9px 16px 9px 13px;border-radius:999px}.ambient.chips-text .glance span{display:inline}.ambient.chips-text .glance svg{margin-right:8px;width:18px;height:18px}@media(max-width:900px),(orientation:portrait){.ambient.lock-size-xs .ambient-time{font-size:7vh}.ambient.lock-size-s .ambient-time{font-size:10vh}.ambient.lock-size-m .ambient-time{font-size:13vh}.ambient.lock-size-l .ambient-time{font-size:17vh}.ambient.lock-size-xl .ambient-time{font-size:21vh}}@media(max-width:700px){.ambient.lock-size-xs .ambient-time{font-size:15vw}.ambient.lock-size-s .ambient-time{font-size:20vw}.ambient.lock-size-m .ambient-time{font-size:26vw}.ambient.lock-size-l .ambient-time{font-size:31vw}.ambient.lock-size-xl .ambient-time{font-size:35vw}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .glances{justify-content:flex-start}}.ambient.customizing{transform:scale(.9)}.ambient.customizing.panel-up{transform-origin:50% 0;transform:translateY(2vh) scale(.5)}.ambient.customizing .ambient-clock,.ambient.customizing .glances{pointer-events:auto;cursor:pointer;border-radius:18px;padding:10px 14px;border:1.5px dashed rgba(255,255,255,.55);background:#ffffff0f}.ambient.customizing .glances{min-height:64px;min-width:120px}.glance-add{color:#f5f7fbb8}.lock-ui{position:absolute;inset:0;z-index:30;pointer-events:none}.lock-top{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;padding-top:max(16px,env(safe-area-inset-top));pointer-events:auto;font-size:14px;color:#f5f7fbb8;text-shadow:0 1px 8px rgba(0,0,0,.5)}.lock-panel{position:absolute;left:50%;bottom:16px;width:420px;max-width:calc(100% - 24px);max-height:70%;overflow-y:auto;transform:translate(-50%);padding:16px 18px 10px;border-radius:24px;pointer-events:auto;background:#141620eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 20px 60px #00000080}.lock-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;font-size:16px}.lock-fonts{display:flex;margin:0 -4px 12px}.lock-font{flex:1;margin:0 4px;height:64px;border-radius:14px;font-size:34px;background:#ffffff0f;border:1.5px solid transparent}.lock-font.on{border-color:#7dd3fc;background:#7dd3fc1f}.lock-colors{display:flex;margin:0 0 6px}.lock-color{width:34px;height:34px;margin-right:10px;border-radius:50%;border:2px solid rgba(255,255,255,.15)}.lock-color.on{border-color:#fff;box-shadow:0 0 0 3px #ffffff40}.lock-widget{display:flex;align-items:center;border-top:1px solid rgba(255,255,255,.09)}.lock-widget .check{flex:1;margin:10px 0}.lock-widget .check svg{margin-right:8px;color:#f5f7fbb8}.lock-widget .icon-btn{width:36px;height:36px;display:flex;align-items:center;justify-content:center}.lock-widget .icon-btn[disabled]{opacity:.25}.option-hint{display:block;margin-top:2px;font-size:12px;color:#f5f7fb7a}.device-parts{margin:0 0 8px 52px}.device-part{display:flex;align-items:center;padding:2px 0}.device-part input[type=checkbox]{width:18px;height:18px;margin:0 8px 0 0;flex-shrink:0}.device-part .part-name{flex:1;min-width:0;padding:6px 10px;border-radius:10px;font-size:13px;background:#ffffff0d;border:1px solid transparent;color:#f5f7fb}.device-part .part-name:focus{border-color:#ffffff17;outline:none}.device-part .icon-btn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.device-part .icon-btn[disabled]{opacity:.25}.device-part.off .part-name{opacity:.45;text-decoration:line-through}.photos-count{display:flex;align-items:center;justify-content:space-between;margin:12px 0 4px;font-size:13px;color:#f5f7fbb8}.photos-count a{color:#7dd3fc;text-decoration:none}.ambient.widgets-top .glances,.ambient.widgets-bottom .glances{position:absolute;left:4vw;right:4vw;max-width:none;margin:0;justify-content:center}.ambient.widgets-top .glances{top:4vh;top:max(4vh,env(safe-area-inset-top));bottom:auto}.ambient.widgets-bottom .glances{bottom:7vh;bottom:calc(1.5vh + 48px);top:auto}.ambient.widgets-top .glance,.ambient.widgets-bottom .glance{margin:6px 5px 0}.ambient.lock-top.widgets-top{padding-top:18vh}.ambient-time,.ambient-clock,.glances{transition:color 1.2s ease}.text-contrast .ambient-time,.text-contrast .ambient-date,.text-contrast .ambient-weather,.text-contrast .aw-desc,.text-contrast .aw-desc small,.text-contrast .glance,.text-contrast .glance svg{color:inherit}.text-contrast .ambient-date{opacity:.85}.text-contrast .aw-desc,.text-contrast .aw-desc small{opacity:.8}.text-contrast .glance.lit svg{color:#fbbf24}.text-contrast .ink-dark,.text-contrast .ink-dark .ambient-time{text-shadow:0 1px 24px rgba(255,255,255,.45)}.text-contrast .glances.ink-dark .glance{background:#ffffff80;border-color:#0000001a}.text-contrast .glances.ink-dark .glance.alert{color:#fff}.lock-color-contrast{background:linear-gradient(135deg,#fff 50%,#111 50%)}.lock-color-contrast{padding:0}.lock-color-contrast span{display:block;color:#fff;font-size:16px;font-weight:800;line-height:30px;text-align:center;text-shadow:-1px -1px 0 #111,1px -1px 0 #111,-1px 1px 0 #111,1px 1px 0 #111}.screen-dim{position:fixed;inset:0;z-index:9000;background:#000;pointer-events:none;transition:opacity .8s ease}.screen-dim.asleep{pointer-events:auto}';
var Te, W, hn, ko, nt = 0, Ci = [], X = q, _o = X.__b, vo = X.__r, wo = X.diffed, Co = X.__c, Mo = X.unmount, So = X.__;
function ut(t, e) {
  X.__h && X.__h(W, t, nt || e), nt = 0;
  var n = W.__H || (W.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function _(t) {
  return nt = 1, dr(Mi, t);
}
function dr(t, e, n) {
  var s = ut(Te++, 2);
  if (s.t = t, !s.__c && (s.__ = [Mi(void 0, e), function(c) {
    var h = s.__N ? s.__N[0] : s.__[0], A = s.t(h, c);
    h !== A && (s.__N = [A, s.__[1]], s.__c.setState({}));
  }], s.__c = W, !W.__f)) {
    var i = function(c, h, A) {
      if (!s.__c.__H) return !0;
      var f = !1, u = s.__c.props !== c;
      if (s.__c.__H.__.some(function(m) {
        if (m.__N) {
          f = !0;
          var p = m.__[0];
          m.__ = m.__N, m.__N = void 0, p !== m.__[0] && (u = !0);
        }
      }), a) {
        var l = a.call(this, c, h, A);
        return f ? l || u : l;
      }
      return !f || u;
    };
    W.__f = !0;
    var a = W.shouldComponentUpdate, r = W.componentWillUpdate;
    W.componentWillUpdate = function(c, h, A) {
      if (this.__e) {
        var f = a;
        a = void 0, i(c, h, A), a = f;
      }
      r && r.call(this, c, h, A);
    }, W.shouldComponentUpdate = i;
  }
  return s.__N || s.__;
}
function H(t, e) {
  var n = ut(Te++, 3);
  !X.__s && ao(n.__H, e) && (n.__ = t, n.u = e, W.__H.__h.push(n));
}
function oo(t, e) {
  var n = ut(Te++, 4);
  !X.__s && ao(n.__H, e) && (n.__ = t, n.u = e, W.__h.push(n));
}
function ne(t) {
  return nt = 5, io(function() {
    return { current: t };
  }, []);
}
function io(t, e) {
  var n = ut(Te++, 7);
  return ao(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function Ar(t, e) {
  return nt = 8, io(function() {
    return t;
  }, e);
}
function so(t) {
  var e = W.context[t.__c], n = ut(Te++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(W)), e.props.value) : t.__;
}
function hr() {
  for (var t; t = Ci.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(St), e.__h.some(Hn), e.__h = [];
    } catch (n) {
      e.__h = [], X.__e(n, t.__v);
    }
  }
}
X.__b = function(t) {
  W = null, _o && _o(t);
}, X.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), So && So(t, e);
}, X.__r = function(t) {
  vo && vo(t), Te = 0;
  var e = (W = t.__c).__H;
  e && (hn === W ? (e.__h = [], W.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(St), e.__h.some(Hn), e.__h = [], Te = 0)), hn = W;
}, X.diffed = function(t) {
  wo && wo(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Ci.push(e) !== 1 && ko === X.requestAnimationFrame || ((ko = X.requestAnimationFrame) || ur)(hr)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), hn = W = null;
}, X.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(St), n.__h = n.__h.filter(function(s) {
        return !s.__ || Hn(s);
      });
    } catch (s) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], X.__e(s, n.__v);
    }
  }), Co && Co(t, e);
}, X.unmount = function(t) {
  Mo && Mo(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(s) {
    try {
      St(s);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && X.__e(e, n.__v));
};
var Eo = typeof requestAnimationFrame == "function";
function ur(t) {
  var e, n = function() {
    clearTimeout(s), Eo && cancelAnimationFrame(e), setTimeout(t);
  }, s = setTimeout(n, 35);
  Eo && (e = requestAnimationFrame(n));
}
function St(t) {
  var e = W, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), W = e;
}
function Hn(t) {
  var e = W;
  t.__c = t.__(), W = e;
}
function ao(t, e) {
  return !t || t.length !== e.length || e.some(function(n, s) {
    return n !== t[s];
  });
}
function Mi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const Si = "photoframe.quality", Ce = [];
function Ei() {
  try {
    return localStorage.getItem(Si) || "auto";
  } catch {
    return "auto";
  }
}
function fr(t) {
  try {
    localStorage.setItem(Si, t);
  } catch {
  }
  Ce.forEach((e) => e());
}
function zi() {
  const t = navigator, e = /Android/i.test(navigator.userAgent);
  return typeof t.deviceMemory == "number" ? t.deviceMemory <= 2 ? "lite" : "full" : e && (!navigator.hardwareConcurrency || navigator.hardwareConcurrency <= 4) ? "lite" : "full";
}
function Oe() {
  const t = Ei();
  return t === "auto" ? zi() : t;
}
function Ii() {
  const [t, e] = _(Oe());
  return H(() => {
    const n = () => e(Oe());
    return Ce.push(n), () => {
      Ce.splice(Ce.indexOf(n), 1);
    };
  }, []), t;
}
function mr() {
  return Oe() === "lite" ? 800 : 150;
}
const Je = {}, un = [], pr = 4;
function gr() {
  const t = Oe() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  let e = screen.width * t, n = screen.height * t;
  const s = Math.min(1, (Oe() === "lite" ? 1280 : 2560) / Math.max(e, n));
  return e = Math.round(e * s), n = Math.round(n * s), { w: e, h: n };
}
function br() {
  const t = Oe() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2), e = Math.max(screen.width, screen.height) * t;
  return Math.round(Math.min(Oe() === "lite" ? 1280 : 2560, e));
}
function yr(t, e) {
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
function zo(t) {
  if (!t || /^(data|blob):/.test(t) || !HTMLCanvasElement.prototype.toBlob || t.indexOf("/api/photoframe/photo/") !== -1) return Promise.resolve(t);
  const e = br(), n = t + "@" + e;
  if (n in Je) return Je[n];
  const s = yr(t, e);
  for (Je[n] = s, un.push(n); un.length > pr; ) {
    const i = un.shift(), a = Je[i];
    delete Je[i], a.then((r) => {
      /^blob:/.test(r) && URL.revokeObjectURL(r);
    });
  }
  return s;
}
const Bi = "photoframe.fit";
function Ft() {
  try {
    return localStorage.getItem(Bi) || "auto";
  } catch {
    return "auto";
  }
}
function xr(t) {
  try {
    localStorage.setItem(Bi, t);
  } catch {
  }
  Ce.forEach((e) => e());
}
function kr() {
  const [t, e] = _(Ft());
  return H(() => {
    const n = () => e(Ft());
    return Ce.push(n), () => {
      Ce.splice(Ce.indexOf(n), 1);
    };
  }, []), t;
}
function _r(t, e) {
  const n = Ft();
  return !t || !e || n === "cover" ? !1 : n === "contain" ? !0 : t >= e != window.innerWidth >= window.innerHeight;
}
class ro {
  // baseUrl — адрес HA; token — отдаёт свежий access-токен входа через HA (lib/haAuth).
  constructor(e, n) {
    this.baseUrl = e, this.token = n, this.states = {}, this.loaded = !1, this.registry = {}, this.devices = {}, this.status = "idle", this.admin = !1, this.ws = null, this.msgId = 1, this.listeners = [], this.stopped = !1, this.pending = {}, this.subs = {}, this.emitTimer = 0;
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
    clearTimeout(this.emitTimer), this.emitTimer = 0, this.listeners.forEach((e) => e());
  }
  emit() {
    this.emitTimer || (this.emitTimer = window.setTimeout(() => this.emitNow(), mr()));
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
          }), this.states = c, this.loaded = !0, this.emit(), this.loadRegistry();
        }, () => {
        });
      else if (a.type === "result") {
        const r = this.pending[a.id];
        r && (delete this.pending[a.id], a.success ? r.resolve(a.result) : r.reject(new Error(a.error && a.error.message || "HA error")));
      } else if (a.type === "event" && this.subs[a.id])
        this.subs[a.id](a.event);
      else if (a.type === "event" && a.event.event_type === "state_changed") {
        const r = a.event.data.new_state;
        r && (this.states = { ...this.states, [r.entity_id]: r }, this.emit());
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
const Di = no(null);
function U() {
  const t = so(Di), [, e] = _(0);
  return H(() => t.subscribe(() => e((n) => n + 1)), [t]), t;
}
function sn(t) {
  return t === "on" || t === "open" || t === "playing";
}
function ot(t) {
  return t === void 0 || t === "unavailable" || t === "unknown";
}
function Pe(t, e) {
  if (t.status !== "connected" || !t.loaded) return !0;
  const n = t.states[e];
  return !!n && n.state !== "unavailable";
}
function ve(t, e) {
  const n = e ? t.states[e] : void 0;
  return n && !ot(n.state) ? n.state : void 0;
}
function Et(t, e = 1) {
  return t === void 0 || isNaN(parseFloat(t)) ? "--" : parseFloat(t).toFixed(e);
}
function Nt(t, e) {
  const n = t.states[e];
  return n && n.attributes.unit_of_measurement ? " " + n.attributes.unit_of_measurement : "";
}
const Ti = no(() => {
});
function an() {
  return so(Ti);
}
const vr = "English", wr = {
  _language: vr,
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
  "lock.title": "Photo screen",
  "lock.long_press": "or press and hold the photo",
  "lock.customize": "Customize",
  "lock.hint": "Tap the clock or the widgets",
  "lock.clock": "Clock",
  "lock.widgets": "Widgets",
  "lock.add_widgets": "Widgets",
  "lock.no_widgets": "No cards have “Show a chip on the photo” checked — turn it on in the card editor.",
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
  "lock.color.mint": "Mint",
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
}, Cr = "Русский", Mr = {
  _language: Cr,
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
  "lock.title": "Экран с фото",
  "lock.long_press": "или удерживайте палец на фото",
  "lock.customize": "Настроить",
  "lock.hint": "Нажмите на часы или виджеты",
  "lock.clock": "Часы",
  "lock.widgets": "Виджеты",
  "lock.add_widgets": "Виджеты",
  "lock.no_widgets": "Нет карточек с галочкой «Показывать информер на фото» — включите её в редакторе карточки.",
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
  "lock.color.mint": "Мятный",
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
}, Io = /* @__PURE__ */ Object.assign({ "./locales/en.json": wr, "./locales/ru.json": Mr }), _e = {};
Object.keys(Io).forEach((t) => {
  const e = t.replace(/^.*\/([^/]+)\.json$/, "$1");
  _e[e] = Io[t];
});
const qt = "en", Oi = "photoframe.language";
let it = qt;
const zt = [];
function Sr() {
  return Object.keys(_e).sort().map((t) => ({ code: t, name: _e[t]._language || t }));
}
function fn(t) {
  if (!t) return null;
  if (_e[t]) return t;
  const e = t.split(/[-_]/)[0].toLowerCase();
  return _e[e] ? e : null;
}
function Pi() {
  try {
    return localStorage.getItem(Oi) || "";
  } catch {
    return "";
  }
}
function Er(t) {
  try {
    localStorage.setItem(Oi, t);
  } catch {
  }
}
let Bo;
function rn(t) {
  t && (Bo = t);
  const e = fn(Pi()) || fn(Bo) || fn(navigator.language) || qt;
  e !== it && (it = e, zt.forEach((n) => n()));
}
function d(t, e) {
  let n = _e[it] && _e[it][t] || _e[qt] && _e[qt][t] || t;
  return e && Object.keys(e).forEach((s) => {
    n = n.split("{" + s + "}").join(String(e[s]));
  }), n;
}
function Ye(t) {
  return d(t).split(",").map((e) => e.trim());
}
rn();
function zr() {
  const [, t] = _(0);
  return H(() => {
    const e = () => t((n) => n + 1);
    return zt.push(e), () => {
      zt.splice(zt.indexOf(e), 1);
    };
  }, []), it;
}
const He = 12, Ir = 2, Hi = 2, Ve = 4, Rt = {
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
function st(t) {
  return d("card." + t + ".title");
}
function Li(t) {
  return d("card." + t + ".hint");
}
const et = {
  amber: "#fbbf24",
  sky: "#7dd3fc",
  green: "#34d399",
  pink: "#f9a8d4",
  violet: "#c4b5fd",
  red: "#fb7185"
};
let Qi = 0;
function Br() {
  return "c" + Date.now().toString(36) + (Qi++).toString(36);
}
function ji() {
  return {
    cols: He,
    cards: [
      { id: "climate", type: "climate", title: "", icon: "thermometer", x: 0, y: 0, w: 3, h: 6, chip: !0, items: [] },
      { id: "lights", type: "switches", title: "", icon: "lightbulb", x: 3, y: 0, w: 6, h: 6, chip: !0, color: "amber", items: [] },
      { id: "weather", type: "weather", title: "", icon: "cloud-sun", x: 9, y: 0, w: 3, h: 3, chip: !0, items: [] },
      { id: "home", type: "sensors", title: "", icon: "shield", x: 9, y: 3, w: 3, h: 3, chip: !0, items: [] }
    ]
  };
}
function Do(t, e) {
  return t.x < e.x + e.w && e.x < t.x + t.w && t.y < e.y + e.h && e.y < t.y + t.h;
}
function Ln(t, e) {
  return t.y - e.y || t.x - e.x;
}
function at(t, e = He) {
  const n = Math.max(Ir, Math.min(e, Math.round(t.w))), s = Math.max(Hi, Math.round(t.h));
  return { ...t, w: n, h: s, x: Math.max(0, Math.min(e - n, Math.round(t.x))), y: Math.max(0, Math.round(t.y)) };
}
function Ie(t, e) {
  const n = [];
  e && n.push(e), t.filter((a) => !e || a.id !== e.id).slice().sort(Ln).forEach((a) => {
    let r = a.y;
    for (let c = 0; c < 500; c++) {
      const h = n.filter((A) => Do({ ...a, y: r }, A));
      if (!h.length) break;
      r = Math.max.apply(null, h.map((A) => A.y + A.h));
    }
    n.push({ ...a, y: r });
  });
  const i = [];
  return n.slice().sort((a, r) => Ln(a, r) || (e && a.id === e.id ? -1 : 0)).forEach((a) => {
    let r = a.y;
    for (; r > 0 && !i.some((c) => Do({ ...a, y: r - 1 }, c)); ) r--;
    i.push({ ...a, y: r });
  }), t.map((a) => i.filter((r) => r.id === a.id)[0]);
}
function Qn(t) {
  return t.reduce((e, n) => Math.max(e, n.y + n.h), 0);
}
function xe(t, e) {
  const n = t, i = (n && Array.isArray(n.screens) ? n.screens : n && Array.isArray(n.cards) ? [n] : []).filter((a) => a && Array.isArray(a.cards)).map((a, r) => ({ ...Tr(a), id: String(a.id || (r ? "s" + r : "main")), name: String(a.name || "") }));
  return i.length ? i : [{ ...e ? e() : { cols: He, cards: [] }, id: "main", name: "" }];
}
function Dr() {
  return "s" + Date.now().toString(36) + (Qi++).toString(36);
}
function It(t, e) {
  return t.name || d("screen.default", { n: e + 1 });
}
function Tr(t) {
  if (t.cols === He) return To(t);
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
            for (let f = h; f < h + a; f++) e[A][f] = !0;
          }
          return { ...i, x: h * 3, y: c * 3, w: a * 3, h: r * 3 };
        }
  });
  return To({ ...t, cols: He, cards: s });
}
function To(t) {
  const e = (i) => typeof i == "number" && isFinite(i);
  let n = t.cards.reduce((i, a) => e(a.y) && e(a.h) ? Math.max(i, a.y + a.h) : i, 0);
  const s = t.cards.map((i) => {
    const a = e(i.w) ? i.w : 3, r = e(i.h) ? i.h : 3;
    if (e(i.x) && e(i.y)) return at({ ...i, w: a, h: r });
    const c = at({ ...i, x: 0, y: n, w: a, h: r });
    return n += c.h, c;
  });
  return { ...t, cols: He, cards: Ie(s) };
}
function Or(t) {
  const e = t.slice().sort(Ln), n = e.filter((a) => a.m && !a.m.hide).map((a) => at({ ...a, x: a.m.x, y: a.m.y, w: a.m.w, h: a.m.h }, Ve));
  let s = Qn(n);
  const i = e.filter((a) => !a.m).map((a) => {
    const r = Math.max(Hi, Math.min(Ve, Math.round(a.h * 2 / 3))), c = { ...a, x: 0, y: s, w: Ve, h: r };
    return s += r, c;
  });
  return Ie(n.concat(i));
}
function mn(t, e) {
  return t.map((n) => {
    const s = e.filter((i) => i.id === n.id)[0];
    return s ? { ...n, m: { x: s.x, y: s.y, w: s.w, h: s.h } } : n;
  });
}
const Pr = "photoframe", rt = "photos", Hr = 1920;
function Fi() {
  return new Promise((t, e) => {
    const n = indexedDB.open(Pr, 1);
    n.onupgradeneeded = () => n.result.createObjectStore(rt, { keyPath: "id", autoIncrement: !0 }), n.onsuccess = () => t(n.result), n.onerror = () => e(n.error);
  });
}
function co(t, e) {
  return Fi().then((n) => new Promise((s, i) => {
    const a = e(n.transaction(rt, t).objectStore(rt));
    a.onsuccess = () => s(a.result), a.onerror = () => i(a.error);
  }));
}
function pn() {
  return Fi().then((t) => new Promise((e, n) => {
    const s = [], i = t.transaction(rt, "readonly").objectStore(rt).openCursor();
    i.onsuccess = () => {
      const a = i.result;
      a ? (s.push(a.value), a.continue()) : e(s);
    }, i.onerror = () => n(i.error);
  }));
}
function Lr(t) {
  return co("readwrite", (e) => e.delete(t));
}
function Oo() {
  return co("readwrite", (t) => t.clear());
}
function Ni(t) {
  return new Promise((e, n) => {
    const s = new FileReader();
    s.onerror = () => n(s.error), s.onload = () => {
      const i = new Image();
      i.onerror = () => n(new Error(d("errors.decode", { name: t.name }))), i.onload = () => {
        const a = Math.min(1, Hr / Math.max(i.width, i.height)), r = document.createElement("canvas");
        r.width = Math.round(i.width * a), r.height = Math.round(i.height * a), r.getContext("2d").drawImage(i, 0, 0, r.width, r.height);
        const c = r.toDataURL("image/jpeg", 0.85);
        r.width = r.height = 0, e(c);
      }, i.src = s.result;
    }, s.readAsDataURL(t);
  });
}
function Qr(t) {
  return Ni(t).then((e) => co("readwrite", (n) => n.add({ data: e }))).then(() => {
  });
}
const ct = "custom:photoframe-card";
function lo(t) {
  if (!t || typeof t != "object") return null;
  if (t.type === ct) return t;
  const e = [t.views, t.cards, t.sections, t.card ? [t.card] : null];
  for (const n of e)
    if (Array.isArray(n))
      for (const s of n) {
        const i = lo(s);
        if (i) return i;
      }
  return null;
}
function jr() {
  const t = location.pathname.split("/")[1] || "lovelace";
  return t === "lovelace" ? null : t;
}
function qi(t) {
  return t.call({ type: "photoframe/config" }).then((e) => ({ ...e, type: ct }), () => null);
}
function Fr(t, e) {
  return t.call({ type: "lovelace/config", url_path: e }).then(
    (n) => lo(n),
    (n) => {
      if (/not found|config_not_found|No config/i.test(n.message)) return null;
      throw n;
    }
  );
}
class Vt {
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
      this.busy || (this.config = { ...n, type: ct }, e(this.config));
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
      const a = this.dashboard !== void 0 ? this.dashboard : jr();
      return this.client.call({ type: "lovelace/config", url_path: a }).then((r) => {
        const c = lo(r);
        if (!c) throw new Error(d("errors.card_not_found", { type: ct }));
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
    const e = gr();
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
    return Ni(e).then((s) => this.addPhotoData(s, e.name.replace(/\.[^.]+$/, "") + ".jpg"));
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
function Ri() {
  try {
    if (window.parent === window) return null;
    const t = window.parent.document.querySelector("home-assistant");
    return t && t.hass && t.hass.auth || null;
  } catch {
    return null;
  }
}
const Wt = "photoframe.haAuth", Nr = "hassTokens";
function jn(t) {
  try {
    const e = localStorage.getItem(t), n = e ? JSON.parse(e) : null;
    return n && n.hassUrl && n.refresh_token ? n : null;
  } catch {
    return null;
  }
}
function Fn(t) {
  try {
    t ? localStorage.setItem(Wt, JSON.stringify(t)) : localStorage.removeItem(Wt);
  } catch {
  }
}
function Yt(t) {
  return t.replace(/\/+$/, "");
}
function qr() {
  return location.protocol + "//" + location.host + "/";
}
function Rr() {
  return location.protocol + "//" + location.host + location.pathname;
}
function Ut() {
  if (Ri())
    return { hassUrl: location.protocol + "//" + location.host, clientId: "", access_token: "", refresh_token: "", expires: 0, embedded: !0 };
  const t = jn(Wt);
  if (t) return t;
  const e = jn(Nr);
  return e && Yt(e.hassUrl) === Yt(location.protocol + "//" + location.host) ? e : null;
}
function Vr() {
  Fn(null);
}
function Wr(t, e) {
  return new Promise((n, s) => {
    const i = new XMLHttpRequest();
    i.open("POST", Yt(t) + "/auth/token"), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.timeout = 15e3, i.onload = () => {
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
function Yr() {
  const t = Ri();
  if (t) return (t.expired ? t.refreshAccessToken() : Promise.resolve()).then(() => t.accessToken);
  const e = Ut();
  return e ? e.expires > Date.now() + 6e4 ? Promise.resolve(e.access_token) : Wr(e.hassUrl, { grant_type: "refresh_token", refresh_token: e.refresh_token, client_id: e.clientId }).then(
    (n) => {
      const s = { ...e, access_token: n.access_token, expires: Date.now() + n.expires_in * 1e3 };
      return Fn(s), s.access_token;
    },
    (n) => {
      if (/auth 4/.test(n.message))
        return jn(Wt) && Fn(null), "";
      throw n;
    }
  ) : Promise.resolve("");
}
function Ur(t) {
  const e = Yt(t || location.protocol + "//" + location.host);
  location.href = e + "/auth/authorize?response_type=code&client_id=" + encodeURIComponent(qr()) + "&redirect_uri=" + encodeURIComponent(Rr()) + "&state=" + encodeURIComponent(e);
}
const Vi = "photoframe.setup", Be = "photo-frame";
function Zr(t) {
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
function Nn(t) {
  try {
    localStorage.setItem(Vi, t);
  } catch {
  }
}
function Jr(t) {
  history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function Wi(t) {
  const e = d("setup.dashboard_title");
  return t({
    type: "lovelace/dashboards/create",
    url_path: Be,
    title: e,
    icon: "mdi:image-frame",
    mode: "storage",
    show_in_sidebar: !0,
    require_admin: !1
  }).then(() => t({
    type: "lovelace/config/save",
    url_path: Be,
    config: { title: e, views: [{ title: e, path: "frame", type: "panel", cards: [{ type: ct, media_folder: "photoframe" }] }] }
  })).then(() => "/" + Be + "/frame");
}
function Gr(t) {
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
    const f = document.createElement("button");
    return f.textContent = h, f.setAttribute("style", "border:0;border-radius:10px;padding:8px 14px;font:inherit;font-weight:600;cursor:pointer;" + (A ? "background:#7dd3fc;color:#0b0d14" : "background:rgba(255,255,255,.1);color:#f5f7fb")), i.appendChild(f), f;
  }, r = a(d("setup.later"), !1), c = a(d("setup.create"), !0);
  e.appendChild(n), e.appendChild(s), e.appendChild(i), document.body.appendChild(e), r.onclick = () => {
    Nn("dismissed"), e.remove();
  }, c.onclick = () => {
    c.disabled = !0, c.textContent = d("common.loading"), Wi((h) => t.callWS(h)).then((h) => {
      Nn("done"), e.remove(), Jr(h);
    }, (h) => {
      c.disabled = !1, c.textContent = d("setup.create"), s.textContent = d("setup.failed", { error: h && h.message || String(h) });
    });
  };
}
function Xr() {
  try {
    if (localStorage.getItem(Vi)) return;
  } catch {
    return;
  }
  Zr(3e4).then((t) => {
    if (!(!t || !t.user || !t.user.is_admin))
      return rn(t.language), t.callWS({ type: "lovelace/dashboards/list" }).then((e) => {
        if (e.some((n) => n.url_path === Be)) {
          Nn("done");
          return;
        }
        Gr(t);
      });
  }).catch(() => {
  });
}
const Po = "photoframe.frameId", Yi = "photoframe.frameName";
function Ui(t) {
  try {
    return localStorage.getItem(t) || "";
  } catch {
    return "";
  }
}
function Zi(t, e) {
  try {
    localStorage.setItem(t, e);
  } catch {
  }
}
function Ji() {
  let t = Ui(Po);
  if (!t) {
    for (t = ""; t.length < 16; ) t += Math.floor(Math.random() * 16).toString(16);
    Zi(Po, t);
  }
  return t;
}
function Zt() {
  return Ui(Yi);
}
function Ho(t) {
  Zi(Yi, t);
}
function Kr() {
  const t = navigator.userAgent;
  return /SmartFrame\//.test(t) ? "Android (APK)" : /iPad|iPhone|iPod/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : "Browser";
}
const Gi = () => window.SmartFrame;
function Lo() {
  const t = Gi();
  try {
    return t && t.getApkVersion ? t.getApkVersion() : "";
  } catch {
    return "";
  }
}
function $r() {
  const t = Gi();
  try {
    t && t.updateApk && t.updateApk(location.protocol + "//" + location.host + "/photoframe/photoframe.apk");
  } catch {
  }
}
function ec(t, e) {
  const n = { type: "photoframe/frame/connect", frame_id: Ji(), model: Kr(), version: "0.3.1" };
  return Zt() && (n.name = Zt()), Lo() && (n.apk = Lo()), t.subscribeMessage(n, e);
}
function qn(t, e) {
  t.call({ type: "photoframe/frame/report", frame_id: Ji(), ...e }).catch(() => {
  });
}
const ce = "main", Xi = "photoframe.cache", Ki = "photoframe.mainHome", $i = "photoframe.startScreen";
function Jt() {
  try {
    return localStorage.getItem(Ki) || ce;
  } catch {
    return ce;
  }
}
function Gt() {
  try {
    return localStorage.getItem($i) || "";
  } catch {
    return "";
  }
}
const Xt = () => xe(null, ji), yt = "photoframe.localBackup", gn = "photoframe.migrated";
function bn(t) {
  return { screens: t.map((e) => ({ id: e.id, name: e.name, cols: e.cols, cards: e.cards })) };
}
function tc() {
  return {
    settings: {
      haUrl: "",
      slideIntervalMs: 1e4,
      idleSec: 45
    },
    homes: [{ id: ce, name: d("home.default_name") }],
    screens: { [ce]: Xt() },
    active: Jt(),
    screen: Gt(),
    layout: Xt()[0],
    photos: [],
    sync: "connecting"
  };
}
function nc() {
  const t = tc();
  try {
    const e = localStorage.getItem(Xi);
    if (e) {
      const n = JSON.parse(e), s = {};
      if (n.screens) Object.keys(n.screens).forEach((c) => {
        s[c] = xe({ screens: n.screens[c] });
      });
      else {
        const c = n.layouts || (n.layout ? { [ce]: n.layout } : {});
        Object.keys(c).forEach((h) => {
          s[h] = xe(c[h]);
        });
      }
      s[ce] || (s[ce] = t.screens[ce]);
      const i = n.settings || {}, a = { ...t.settings };
      typeof i.haUrl == "string" && (a.haUrl = i.haUrl), typeof i.slideIntervalMs == "number" && (a.slideIntervalMs = i.slideIntervalMs), typeof i.idleSec == "number" && (a.idleSec = i.idleSec);
      const r = n.homes ? n.homes.map((c) => ({ id: c.id, name: c.name })) : t.homes;
      return { ...t, settings: a, homes: r, screens: s, photos: n.photos || [] };
    }
  } catch {
  }
  return t;
}
const Rn = "photoframe.integration";
function oc() {
  try {
    return localStorage.getItem(Rn) === "1";
  } catch {
    return !1;
  }
}
function Qo(t) {
  try {
    t ? localStorage.setItem(Rn, "1") : localStorage.removeItem(Rn);
  } catch {
  }
}
class ic {
  constructor() {
    this.state = nc(), this.listeners = [], this.card = null, this.ui = { controls: !1, editing: !1 }, this.photoTimer = 0, this.bundled = [], this.photoError = "", this.cardError = "", this.haClient = null, this.haLink = "none", this.migration = null, this.frameOff = null, this.frameClient = null, this.screenOn = !0, this.brightness = 100, this.commandListeners = [];
  }
  subscribe(e) {
    return this.listeners.push(e), () => {
      this.listeners = this.listeners.filter((n) => n !== e);
    };
  }
  set(e) {
    const n = { ...this.state, ...e };
    n.homes.some((a) => a.id === n.active) || (n.active = ce);
    const s = n.screens[n.active] || xe(null), i = s.filter((a) => a.id === n.screen)[0] || s[0];
    if (n.screen = i.id, n.layout = i, this.state = n, e.settings || e.screens || e.homes || e.photos)
      try {
        const { settings: a, homes: r, screens: c, photos: h } = this.state;
        localStorage.setItem(Xi, JSON.stringify({
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
      localStorage.setItem(Ki, e), localStorage.setItem($i, n);
    } catch {
    }
    this.listeners.forEach((s) => s());
  }
  goStart() {
    this.setActive(Jt(), Gt());
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
    const n = e.homes && e.homes.length ? e.homes.map((r) => ({ id: r.id, name: r.name })) : [{ id: ce, name: d("home.default_name") }], s = {};
    n.forEach((r) => {
      const c = e.layouts && e.layouts[r.id];
      s[r.id] = c ? xe(c) : r.id === ce ? Xt() : xe(null);
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
    const e = Ut();
    if (!e || this.haClient) return;
    const n = new ro(e.hassUrl, Yr);
    this.haClient = n, this.haLink = "connecting";
    let s = "";
    n.subscribe(() => {
      if (n.status !== s)
        if (s = n.status, n.status === "connected") {
          const i = (a) => qi(n).then((r) => {
            if (r) {
              Qo(!0), this.useIntegration(n, r);
              return;
            }
            if (oc() && a > 0) {
              window.setTimeout(() => {
                n.status === "connected" && i(a - 1);
              }, 1e4);
              return;
            }
            Qo(!1), this.loadHaCard(), n.subscribeMessage({ type: "subscribe_events", event_type: "lovelace_updated" }, (c) => {
              c && c.data && c.data.url_path === Be && this.loadHaCard();
            });
          });
          i(30);
        } else n.status === "auth_invalid" && (this.haLink = "error", this.notify());
    }), n.connect(), this.notify();
  }
  // Интеграция Photo Frame: данные в её хранилище, изменения — по её подписке.
  useIntegration(e, n) {
    this.haLink = "ready", this.card && this.card.integration ? (this.card.config = n, this.applyCardConfig(n)) : (this.offerMigration(), this.attachCard(new Vt(e, n, void 0, !0, !0))), this.card.watch((i) => this.applyCardConfig(i)), this.frameClient = e, this.connectThisFrame();
  }
  connectThisFrame() {
    const e = this.frameClient;
    e && (this.frameOff && this.frameOff(), this.frameOff = ec(e, (n) => n.type === "state" ? this.applyFrameState(n) : this.commandListeners.forEach((s) => s(n))));
  }
  // Команды из HA (кнопки устройства, службы): следующее фото, показать камеру… Выполняет App.
  onCommand(e) {
    return this.commandListeners.push(e), () => {
      this.commandListeners = this.commandListeners.filter((n) => n !== e);
    };
  }
  applyFrameState(e) {
    if (e.name && e.name !== Zt() && Ho(e.name), e.start_screen) {
      const [i, a] = e.start_screen.split("/");
      (i !== Jt() || a !== Gt()) && this.setStart(i, a);
    }
    e.screen_on !== void 0 && (this.screenOn = e.screen_on), e.brightness !== void 0 && (this.brightness = e.brightness);
    const n = this.card, s = e.album || "all";
    n && n.album !== s && (n.album = s, this.reloadCardPhotos()), this.notify();
  }
  // Коснулись спящей рамки — просыпается и сообщает HA (сущность «Экран» включается).
  wakeScreen() {
    this.screenOn = !0, this.frameClient && qn(this.frameClient, { screen_on: !0 }), this.notify();
  }
  // Имя рамки поменяли на ней самой — переподключаемся, HA узнает новое имя.
  renameFrame(e) {
    Ho(e), this.frameClient && this.frameClient.status === "connected" && this.connectThisFrame();
  }
  loadHaCard() {
    const e = this.haClient;
    e && (this.card && this.card.busy || Fr(e, Be).then((n) => {
      if (!n) {
        this.haLink = "missing", this.notify();
        return;
      }
      if (this.haLink = "ready", this.card) {
        this.card.config = n, this.applyCardConfig(n);
        return;
      }
      this.offerMigration(), this.attachCard(new Vt(e, n, Be, !0));
    }, () => {
      this.haLink = "error", this.notify();
    }));
  }
  // Создать в HA дашборд «Фоторамка» с карточкой (нужен администратор HA).
  createHaDashboard() {
    const e = this.haClient;
    return e ? Wi((n) => e.call(n)).then(() => this.loadHaCard()) : Promise.reject(new Error("not connected"));
  }
  // Первый переход на HA: запоминаем свои экраны (если их меняли) и считаем фото в браузере.
  offerMigration() {
    let e = "";
    try {
      e = localStorage.getItem(gn) || "";
    } catch {
    }
    if (e === "done") return;
    if (!e) {
      const { homes: s, screens: i } = this.state, a = s.length > 1 || JSON.stringify(bn(i[ce] || [])) !== JSON.stringify(bn(Xt()));
      try {
        a && localStorage.setItem(yt, JSON.stringify({ homes: s, screens: i })), localStorage.setItem(gn, "pending");
      } catch {
      }
    }
    const n = this.backup();
    pn().then((s) => s.length, () => 0).then((s) => {
      n || s ? (this.migration = { screens: !!n, photos: s }, this.notify()) : this.finishMigration();
    });
  }
  backup() {
    try {
      const e = localStorage.getItem(yt);
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
      s[i.id] = xe({ screens: e.screens[i.id] || [] });
    }), this.set({ homes: n, screens: s }), this.saveCard({ homes: n, layouts: this.packAll() });
    try {
      localStorage.removeItem(yt);
    } catch {
    }
    this.updateMigration({ screens: !1 });
  }
  // Фото из браузера — в медиатеку HA; после загрузки из браузера их убираем.
  migratePhotos(e) {
    const n = this.card;
    return n ? pn().then((s) => s.reduce(
      (i, a, r) => i.then(() => n.addPhotoData(a.data, "frame-" + a.id + ".jpg")).then(() => {
        e && e(r + 1, s.length);
      }),
      Promise.resolve()
    )).then(() => Oo()).then(() => (this.updateMigration({ photos: 0 }), this.reloadCardPhotos())) : Promise.resolve();
  }
  dismissMigration() {
    try {
      localStorage.removeItem(yt);
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
      localStorage.setItem(gn, "done");
    } catch {
    }
    this.migration = null, this.notify();
  }
  reloadLocalPhotos() {
    return pn().then((e) => this.set({ photos: e.map((n) => ({ id: n.id, url: n.data })) })).catch(() => this.set({ photos: [] }));
  }
  applyHomes(e) {
    const n = {};
    e.forEach((s) => {
      n[s.id] = this.state.screens[s.id] || xe(null);
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
    return this.state.screens[e] || xe(null);
  }
  packAll() {
    const e = {};
    return Object.keys(this.state.screens).forEach((n) => {
      e[n] = bn(this.state.screens[n]);
    }), e;
  }
  // Экраны дома целиком: в конфиг карточки HA (без неё — только в этот браузер, через кэш).
  saveScreens(e, n, s) {
    const i = { screens: { ...this.state.screens, [e]: n } };
    s && (i.screen = s), this.set(i), this.card && this.saveCard({ layouts: this.packAll() });
  }
  // Новый пустой экран в конце списка показанного дома — сразу на него и переходим.
  addScreen(e) {
    const n = { id: Dr(), name: e, cols: 12, cards: [] };
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
    const i = this.card, a = i ? (A) => i.addPhoto(A, s) : (A) => Qr(A), r = () => i ? this.reloadCardPhotos() : this.reloadLocalPhotos(), c = [];
    let h = 0;
    return e.reduce(
      (A, f) => A.then(() => a(f)).catch((u) => {
        c.push(u && u.message || String(u));
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
    return this.card ? this.card.deletePhoto(String(e)).then(() => this.reloadCardPhotos()) : Lr(Number(e)).then(() => this.reloadLocalPhotos());
  }
  clearPhotos() {
    return this.card ? this.state.photos.reduce((e, n) => e.then(() => this.card.deletePhoto(String(n.id))), Promise.resolve()).then(() => this.reloadCardPhotos()) : Oo().then(() => this.reloadLocalPhotos());
  }
}
const $ = new ic();
function Ze() {
  const [, t] = _(0);
  return H(() => $.subscribe(() => t((e) => e + 1)), []), $;
}
function cn() {
  const t = window.SmartFrame;
  return t && t.setBrightness ? t : null;
}
const sc = () => !!cn();
function ac(t, e) {
  const n = cn();
  if (n)
    try {
      n.setBrightness(t ? Math.max(0.02, e / 100) : 0), n.setScreenOn && n.setScreenOn(t);
    } catch {
    }
}
function rc(t) {
  window.SmartFrameWake = t;
}
function cc(t, e) {
  return t ? sc() ? 0 : Math.round((100 - e) * 0.85) / 100 : 1;
}
function lc() {
  const t = cn();
  try {
    return t && t.getAutostart ? !!t.getAutostart() : null;
  } catch {
    return null;
  }
}
function dc(t) {
  const e = cn();
  try {
    e && e.setAutostart && e.setAutostart(t);
  } catch {
  }
}
const Ge = {};
function Ac(t, e, n) {
  t /= 255, e /= 255, n /= 255;
  const s = Math.max(t, e, n), i = Math.min(t, e, n), a = (s + i) / 2;
  if (s === i) return [0, 0, a];
  const r = s - i, c = a > 0.5 ? r / (2 - s - i) : r / (s + i);
  return [(s === t ? (e - n) / r + (e < n ? 6 : 0) : s === e ? (n - t) / r + 2 : (t - e) / r + 4) * 60, c, a];
}
function hc(t) {
  return new Promise((e) => {
    const n = new Image();
    n.onload = () => {
      try {
        const s = 48 / Math.max(n.width, n.height), i = document.createElement("canvas");
        i.width = Math.max(1, Math.round(n.width * s)), i.height = Math.max(1, Math.round(n.height * s));
        const a = i.getContext("2d");
        a.drawImage(n, 0, 0, i.width, i.height);
        const r = a.getImageData(0, 0, i.width, i.height).data;
        let c = 0, h = 0, A = 0, f = 0;
        for (let p = 0; p < r.length; p += 4)
          c += r[p], h += r[p + 1], A += r[p + 2], f++;
        const u = Ac(c / f, h / f, A / f), l = Math.round(u[0]), m = Math.round(Math.min(Math.max(u[1], 0.45), 0.85) * 100);
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
function uc(t) {
  const [e, n] = _(t && Ge[t] || null);
  return H(() => {
    if (!t) return;
    if (t in Ge) {
      Ge[t] && n(Ge[t]);
      return;
    }
    let s = !0;
    return hc(t).then((i) => {
      Ge[t] = i, s && i && n(i);
    }), () => {
      s = !1;
    };
  }, [t]), e;
}
const fc = 0.18, jo = 0.5, mc = 600, Xe = 10, pc = 0.12;
function yn(t, e) {
  for (; t && t.nodeType === 1; t = t.parentElement)
    if ((t.matches || t.webkitMatchesSelector).call(t, e)) return t;
  return null;
}
function Fo(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientY : t.clientY;
}
function No(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientX : t.clientX;
}
function gc(t, e, n, s, i, a) {
  H(() => {
    const r = t.root.current;
    if (!r || !s) return;
    let c = 0, h = 0, A = 0, f = 0, u = 0, l = !1, m = 0, p = "";
    const v = (S) => {
      const I = t.controls.current, E = t.ambient.current, b = t.soft.current, T = r.clientHeight;
      I && (I.style.opacity = String(S), I.style.transform = "scale(" + (0.96 + 0.04 * S).toFixed(4) + ")"), E && (E.style.transform = "translateY(" + Math.round(-S * T) + "px)"), b && (b.style.opacity = String(S));
    }, C = () => {
      [t.controls.current, t.ambient.current, t.soft.current].forEach((S) => {
        S && (S.style.opacity = "", S.style.transform = "");
      });
    }, M = (S) => {
      const I = S.target;
      e && (!yn(I, ".bar") || yn(I, "button")) || (c = Fo(S), h = No(S), A = Date.now(), f = 0, u = 0, p = "", l = !0, r.classList.add("dragging"), clearTimeout(m), !e && i && !yn(I, "button") && (m = window.setTimeout(() => {
        !l || Math.abs(f) > Xe || (l = !1, r.classList.remove("dragging"), C(), i());
      }, mc)));
    }, g = (S) => {
      if (!l) return;
      if (f = Fo(S) - c, u = No(S) - h, (Math.abs(f) > Xe || Math.abs(u) > Xe) && clearTimeout(m), !p && (Math.abs(f) > Xe || Math.abs(u) > Xe) && (p = !e && a && Math.abs(u) > Math.abs(f) ? "x" : "y"), p === "x") {
        S.cancelable && S.preventDefault();
        return;
      }
      const I = r.clientHeight, E = e ? 1 - Math.max(0, f) / I : Math.max(0, -f) / I;
      v(Math.min(1, Math.max(0, E))), S.cancelable && S.preventDefault();
    }, k = () => {
      if (clearTimeout(m), !l) return;
      if (l = !1, r.classList.remove("dragging"), p === "x") {
        const b = Math.abs(u) / Math.max(1, Date.now() - A) > jo && Math.abs(u) > 30;
        a && (Math.abs(u) > r.clientWidth * pc || b) && a(u < 0 ? 1 : -1);
        return;
      }
      const S = r.clientHeight, I = Math.abs(f) / Math.max(1, Date.now() - A), E = Math.abs(f) > S * fc || I > jo && Math.abs(f) > 30;
      C(), !e && f < 0 && E && n(!0), e && f > 0 && E && n(!1);
    };
    return r.addEventListener("touchstart", M), r.addEventListener("touchmove", g), r.addEventListener("touchend", k), r.addEventListener("touchcancel", k), r.addEventListener("mousedown", M), window.addEventListener("mousemove", g), window.addEventListener("mouseup", k), () => {
      clearTimeout(m), r.removeEventListener("touchstart", M), r.removeEventListener("touchmove", g), r.removeEventListener("touchend", k), r.removeEventListener("touchcancel", k), r.removeEventListener("mousedown", M), window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", k);
    };
  }, [e, s, a]);
}
function Ao() {
  const t = window.SmartFrame;
  return t && t.showPhoto ? t : null;
}
function qo(t) {
  return !!Ao() && /^(https?:)?\//.test(t);
}
function es(t) {
  return /^https?:/.test(t) ? t : location.protocol + "//" + location.host + t;
}
function Ro(t, e, n) {
  const s = Ao();
  try {
    s && s.showPhoto(t ? es(t) : "", e, n);
  } catch {
  }
}
function bc(t) {
  const e = Ao();
  try {
    e && e.preloadPhoto && e.preloadPhoto(es(t));
  } catch {
  }
}
function yc(t) {
  window.SmartFramePhoto = (e, n) => t(n);
}
function xc(t) {
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
function kc({ urls: t, index: e, tone: n, soft: s, softRef: i, onShow: a }) {
  const r = kr(), c = Ii(), [h, A] = _([]), f = ne(0), u = t.length, l = u ? t[e % u] : "", m = !!l && qo(l);
  return H(() => yc(a), []), H(() => {
    const p = document.documentElement;
    m ? p.classList.add("native-photos") : p.classList.remove("native-photos");
  }, [m]), H(() => {
    if (m) {
      A([]), Ro(l, r, c === "lite"), u > 1 && bc(t[(e + 1) % u]);
      return;
    }
    if (qo("/") && Ro("", r, !1), !l) {
      A([]);
      return;
    }
    let p = !0;
    return zo(l).then((v) => xc(v).then((C) => ({ url: v, m: C }))).then(({ url: v, m: C }) => {
      if (!p) return;
      const M = ++f.current;
      A((g) => g.slice(-1).map((k) => ({ ...k, on: !1 })).concat({ id: M, url: v, on: !1, w: C.w, h: C.h, glow: C.glow })), requestAnimationFrame(() => requestAnimationFrame(() => {
        p && A((g) => g.map((k) => k.id === M ? { ...k, on: !0 } : k));
      })), a(v);
    }), u > 1 && zo(t[(e + 1) % u]), () => {
      p = !1;
    };
  }, [l, m, m ? r : "", m ? c : ""]), /* @__PURE__ */ o("div", { class: "backdrop", children: [
    u === 0 && /* @__PURE__ */ o("div", { class: "slide active aurora" }),
    h.map((p) => _r(p.w, p.h) ? /* @__PURE__ */ o("div", { class: "slide contain" + (p.on ? " active" : ""), children: [
      p.glow && /* @__PURE__ */ o("div", { class: "slide-glow", style: { backgroundImage: "url(" + p.glow + ")" } }),
      /* @__PURE__ */ o("div", { class: "slide-photo", style: { backgroundImage: "url(" + p.url + ")" } })
    ] }, p.id) : /* @__PURE__ */ o("div", { class: "slide" + (p.on ? " active" : ""), style: { backgroundImage: "url(" + p.url + ")" } }, p.id)),
    /* @__PURE__ */ o("div", { ref: i, class: "soft" + (s ? " on" : ""), style: n ? { backgroundImage: "url(" + n.thumb + ")" } : void 0 }),
    /* @__PURE__ */ o("div", { class: "shade" + (s ? " deep" : "") })
  ] });
}
const Kt = (...t) => t.filter((e, n, s) => !!e && e.trim() !== "" && s.indexOf(e) === n).join(" ").trim();
function _c(t, e, n = []) {
  throw new Error("[lucide]: iconNode is required when icon name is used");
}
const vc = (t) => {
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
const wc = (t) => {
  const e = vc(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
const Ee = {
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
function xn(t) {
  return t != null;
}
function Cc(t, e = {}) {
  const n = e.attributeNames ?? {}, s = (l) => n[l] ?? l, i = t.size ?? t.width ?? Ee.width, a = t.size ?? t.height ?? Ee.height, r = t.aliases?.filter((l) => typeof l == "string" && l.trim() !== "").map((l) => `lucide-${l}`) ?? [], c = [...t.name ? [`lucide-${t.name}`] : [], ...r], h = e.className?.split(" ").filter(Boolean) ?? [], A = e.includeDefaultClasses === !1 ? Kt(...h) : Kt("lucide", ...c, ...h), f = e.absoluteStrokeWidth ? Number(e.strokeWidth ?? Ee["stroke-width"]) * Number(t.size ?? t.width ?? Ee.width) / Number(e.size ?? e.width ?? Ee.width) : e.strokeWidth ?? Ee["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Ee).reduce((l, [m, p]) => (l[s(m)] = p, l), {}),
      ..."color" in e && e.color && {
        [s("stroke")]: e.color
      },
      ..."size" in e && xn(e.size) && {
        [s("width")]: e.size,
        [s("height")]: e.size
      },
      ..."width" in e && xn(e.width) && {
        [s("width")]: e.width
      },
      ..."height" in e && xn(e.height) && {
        [s("height")]: e.height
      },
      [s("stroke-width")]: f,
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
      const [m, p, v] = l, C = e.nonScalingStroke ? { [s("vector-effect")]: "non-scaling-stroke", ...p } : p;
      return v ? [m, C, v] : [m, C];
    })
  ];
}
const Mc = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
const Sc = no({
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  absoluteStrokeWidth: !1,
  nonScalingStroke: !1,
  class: ""
}), Ec = () => so(Sc);
const zc = ({
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
  class: f = "",
  ...u
}) => {
  const {
    size: l = 24,
    strokeWidth: m = 2,
    absoluteStrokeWidth: p = !1,
    nonScalingStroke: v = !1,
    color: C = "currentColor",
    class: M = ""
  } = Ec() ?? {}, [g, k, S = []] = Cc(A, {
    color: t ?? C,
    width: n ?? e ?? l,
    height: s ?? e ?? l,
    strokeWidth: i ?? m,
    absoluteStrokeWidth: a ?? p,
    nonScalingStroke: r ?? v,
    className: Kt(M, f),
    hasA11yProp: !!c || Mc(u),
    attributes: u
  });
  return Qt(g, { ...k }, [
    ...S.map(([I, E]) => Qt(I, E)),
    ...xi(c)
  ]);
};
function w(t, e, n = []) {
  const s = typeof t == "string" ? _c(t, e, n) : t, i = ({ class: a = "", className: r = "", children: c, ...h }) => Qt(
    zc,
    {
      ...h,
      icon: s,
      class: Kt(a, r)
    },
    c
  );
  return s.name && (i.displayName = wc(s.name)), i;
}
const ts = {
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
ts.node;
const Ic = w(ts);
const ns = {
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
ns.node;
const os = w(ns);
const is = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
is.node;
const ss = w(is);
const as = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
as.node;
const rs = w(as);
const cs = {
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
cs.node;
const Bc = w(cs);
const ls = {
  name: "bed",
  size: 24,
  node: [
    ["path", { d: "M2 4v16", key: "vw9hq8" }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
    ["path", { d: "M2 17h20", key: "18nfp3" }],
    ["path", { d: "M6 8v9", key: "1yriud" }]
  ]
};
ls.node;
const Dc = w(ls);
const ds = {
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
ds.node;
const Tc = w(ds);
const As = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
As.node;
const Oc = w(As);
const hs = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
hs.node;
const Pc = w(hs);
const us = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
us.node;
const Hc = w(us);
const fs = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
fs.node;
const Lc = w(fs);
const ms = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
};
ms.node;
const ps = w(ms);
const gs = {
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
gs.node;
const Qc = w(gs);
const bs = {
  name: "cloud-fog",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 17H7", key: "pygtm1" }],
    ["path", { d: "M17 21H9", key: "1u2q02" }]
  ]
};
bs.node;
const jc = w(bs);
const ys = {
  name: "cloud-lightning",
  size: 24,
  node: [
    ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
    ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
  ]
};
ys.node;
const kn = w(ys);
const xs = {
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
xs.node;
const Vo = w(xs);
const ks = {
  name: "cloud-rain",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 14v6", key: "1j4efv" }],
    ["path", { d: "M8 14v6", key: "17c4r9" }],
    ["path", { d: "M12 16v6", key: "c8a4gj" }]
  ]
};
ks.node;
const Fc = w(ks);
const _s = {
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
_s.node;
const vs = w(_s);
const ws = {
  name: "cloud-upload",
  size: 24,
  node: [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
  ],
  aliases: ["upload-cloud"]
};
ws.node;
const Nc = w(ws);
const Cs = {
  name: "cloud",
  size: 24,
  node: [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]
};
Cs.node;
const Ms = w(Cs);
const Ss = {
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
Ss.node;
const qc = w(Ss);
const Es = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
Es.node;
const Rc = w(Es);
const zs = {
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
zs.node;
const Vc = w(zs);
const Is = {
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
Is.node;
const Le = w(Is);
const Bs = {
  name: "eighth-notes",
  size: 24,
  node: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19", key: "uy6ho8" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
    ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }]
  ],
  aliases: ["music"]
};
Bs.node;
const Wc = w(Bs);
const Ds = {
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
Ds.node;
const Ts = w(Ds);
const Os = {
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
Os.node;
const Ps = w(Os);
const Hs = {
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
Hs.node;
const Ls = w(Hs);
const Qs = {
  name: "gauge",
  size: 24,
  node: [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
  ]
};
Qs.node;
const js = w(Qs);
const Fs = {
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
Fs.node;
const Yc = w(Fs);
const Ns = {
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
Ns.node;
const Uc = w(Ns);
const qs = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
qs.node;
const Zc = w(qs);
const Rs = {
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
Rs.node;
const Jc = w(Rs);
const Vs = {
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
Vs.node;
const Gc = w(Vs);
const Ws = {
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
Ws.node;
const Xc = w(Ws);
const Ys = {
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
Ys.node;
const Kc = w(Ys);
const Us = {
  name: "lock",
  size: 24,
  node: [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
  ]
};
Us.node;
const $c = w(Us);
const Zs = {
  name: "log-in",
  size: 24,
  node: [
    ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
    ["path", { d: "M15 12H3", key: "6jk70r" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
  ]
};
Zs.node;
const el = w(Zs);
const Js = {
  name: "log-out",
  size: 24,
  node: [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
  ]
};
Js.node;
const tl = w(Js);
const Gs = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
};
Gs.node;
const nl = w(Gs);
const Xs = {
  name: "minus",
  size: 24,
  node: [["path", { d: "M5 12h14", key: "1ays0h" }]]
};
Xs.node;
const ol = w(Xs);
const Ks = {
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
Ks.node;
const $s = w(Ks);
const ea = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
ea.node;
const il = w(ea);
const ta = {
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
ta.node;
const na = w(ta);
const oa = {
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
oa.node;
const sl = w(oa);
const ia = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
ia.node;
const je = w(ia);
const sa = {
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
sa.node;
const al = w(sa);
const aa = {
  name: "power",
  size: 24,
  node: [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
  ]
};
aa.node;
const lt = w(aa);
const ra = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
  ]
};
ra.node;
const rl = w(ra);
const ca = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
ca.node;
const cl = w(ca);
const la = {
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
la.node;
const ll = w(la);
const da = {
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
da.node;
const dl = w(da);
const Aa = {
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
Aa.node;
const Al = w(Aa);
const ha = {
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
ha.node;
const hl = w(ha);
const ua = {
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
ua.node;
const ho = w(ua);
const fa = {
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
fa.node;
const ul = w(fa);
const ma = {
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
ma.node;
const Vn = w(ma);
const pa = {
  name: "speaker",
  size: 24,
  node: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
    ["path", { d: "M12 14h.01", key: "1etili" }]
  ]
};
pa.node;
const ga = w(pa);
const ba = {
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
ba.node;
const ya = w(ba);
const xa = {
  name: "table-2",
  size: 24,
  node: [
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
  ]
};
xa.node;
const fl = w(xa);
const ka = {
  name: "thermometer",
  size: 24,
  node: [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]]
};
ka.node;
const _a = w(ka);
const va = {
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
va.node;
const dt = w(va);
const wa = {
  name: "tv",
  size: 24,
  node: [
    ["path", { d: "m17 2-5 5-5-5", key: "16satq" }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]
  ]
};
wa.node;
const Wn = w(wa);
const Ca = {
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
Ca.node;
const ml = w(Ca);
const Ma = {
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
Ma.node;
const pl = w(Ma);
const Sa = {
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
Sa.node;
const gl = w(Sa);
const Ea = {
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
Ea.node;
const bl = w(Ea);
const za = {
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
za.node;
const yl = w(za);
const Ia = {
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
Ia.node;
const xl = w(Ia);
const Ba = {
  name: "wind",
  size: 24,
  node: [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
  ]
};
Ba.node;
const $t = w(Ba);
const Da = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
Da.node;
const Fe = w(Da);
const Ta = {
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
Ta.node;
const kl = w(Ta), en = {
  lightbulb: Kc,
  lamp: Xc,
  "lamp-ceiling": Jc,
  "lamp-desk": Gc,
  plug: al,
  fan: Ps,
  tv: Wn,
  speaker: ga,
  thermometer: _a,
  droplets: Le,
  snowflake: ho,
  flame: Ls,
  wind: $t,
  sun: ya,
  moon: $s,
  shield: dl,
  door: Vc,
  lock: $c,
  blinds: Tc,
  video: pl,
  "washing-machine": yl,
  zap: kl,
  gauge: js,
  activity: Ic,
  "air-vent": os,
  "cloud-sun": vs,
  sparkles: Vn,
  house: Yc,
  sofa: ul,
  bed: Dc,
  "cooking-pot": qc,
  baby: Bc
};
function Ne(t, e = "house") {
  return en[t] || en[e];
}
function uo(t, e) {
  const n = t.split(".")[0];
  return n === "light" ? "lamp-ceiling" : n === "switch" ? "lamp" : n === "fan" ? "fan" : n === "camera" ? "video" : n === "climate" ? "air-vent" : n === "weather" ? "cloud-sun" : n === "media_player" ? e === "tv" ? "tv" : "speaker" : n === "lock" ? "lock" : n === "cover" ? "blinds" : n === "scene" || n === "script" || n === "automation" ? "sparkles" : e === "temperature" ? "thermometer" : e === "humidity" || e === "moisture" ? "droplets" : e === "door" || e === "window" || e === "opening" ? "door" : e === "power" || e === "voltage" || e === "energy" || e === "current" ? "zap" : e === "motion" || e === "occupancy" ? "activity" : "gauge";
}
function Oa(t = 1e3) {
  const [e, n] = _(/* @__PURE__ */ new Date());
  return H(() => {
    const s = setInterval(() => n(/* @__PURE__ */ new Date()), t);
    return () => clearInterval(s);
  }, [t]), e;
}
function _n(t) {
  return t < 10 ? "0" + t : String(t);
}
function Pa(t, e = !1) {
  return _n(t.getHours()) + ":" + _n(t.getMinutes()) + (e ? ":" + _n(t.getSeconds()) : "");
}
function Ha(t) {
  return d("date.full", { weekday: Ye("date.weekdays")[t.getDay()], day: t.getDate(), month: Ye("date.months")[t.getMonth()] });
}
const La = { thin: 200, light: 300, regular: 500, bold: 700 }, Qa = {
  white: "#ffffff",
  contrast: "",
  accent: "",
  warm: "#fcd34d",
  mint: "#6ee7b7",
  sky: "#7dd3fc",
  rose: "#fda4af"
}, ja = "photoframe.lockscreen", Fa = "photoframe.hiddenChips", Bt = [];
function xt() {
  return { font: "thin", color: "white", size: "m", layout: "auto", date: !0, datePos: "auto", weather: !0, chipStyle: "auto", widgetsPos: "clock", hidden: [], order: [] };
}
function Na() {
  try {
    const t = localStorage.getItem(ja);
    if (t) return { ...xt(), ...JSON.parse(t) };
    const e = localStorage.getItem(Fa);
    return e ? { ...xt(), hidden: JSON.parse(e) } : xt();
  } catch {
    return xt();
  }
}
function me(t) {
  try {
    localStorage.setItem(ja, JSON.stringify({ ...Na(), ...t })), localStorage.removeItem(Fa);
  } catch {
  }
  Bt.forEach((e) => e());
}
function qa() {
  const [, t] = _(0);
  return H(() => {
    const e = () => t((n) => n + 1);
    return Bt.push(e), () => {
      Bt.splice(Bt.indexOf(e), 1);
    };
  }, []), Na();
}
function _l(t, e) {
  const n = (s) => {
    const i = e.order.indexOf(s);
    return i === -1 ? 1e6 : i;
  };
  return t.map((s, i) => ({ c: s, i })).sort((s, i) => n(s.c.id) - n(i.c.id) || s.i - i.i).map((s) => s.c);
}
const ye = "#0891b2", Yn = "#d97706", Wo = "rgba(255,255,255,0.13)", vl = "rgba(255,255,255,0.04)", Yo = "rgba(255,255,255,0.08)", Uo = "#141620", Re = 210, se = { l: 46, r: 14, t: 14, b: 26 };
function tn(t) {
  return t < 10 ? "0" + t : String(t);
}
function Qe(t) {
  const e = new Date(t);
  return tn(e.getHours()) + ":" + tn(e.getMinutes());
}
function At(t) {
  const e = new Date(t);
  return d("date.day_month", { day: e.getDate(), month: Ye("date.months_short")[e.getMonth()] });
}
function Me(t, e) {
  return e === "24h" ? Qe(t) : At(t) + ", " + Qe(t);
}
function ee(t) {
  const e = Math.abs(t), n = e >= 100 ? t.toFixed(0) : e >= 10 ? t.toFixed(1) : e >= 1 ? t.toFixed(2) : t.toFixed(3);
  return n.indexOf(".") === -1 ? n : n.replace(/\.?0+$/, "");
}
function wl(t, e, n) {
  t === e && (t -= 1, e += 1);
  const s = (e - t) / n, i = Math.pow(10, Math.floor(Math.log(s) / Math.LN10)), a = [1, 2, 5, 10].map((c) => c * i).filter((c) => c >= s)[0], r = [];
  for (let c = Math.floor(t / a) * a; c <= e + a * 1e-3; c += a) r.push(+c.toFixed(10));
  return r[r.length - 1] < e && r.push(r[r.length - 1] + a), r;
}
function Cl(t, e, n) {
  const s = [], i = new Date(t);
  if (n === "24h")
    for (i.setMinutes(0, 0, 0), i.setHours(Math.ceil(i.getHours() / 6) * 6); i.getTime() <= e; i.setHours(i.getHours() + 6)) s.push({ t: i.getTime(), label: Qe(i.getTime()) });
  else {
    i.setHours(0, 0, 0, 0), i.setDate(i.getDate() + 1);
    const a = n === "7d" ? 1 : 5;
    for (; i.getTime() <= e; i.setDate(i.getDate() + a))
      s.push({ t: i.getTime(), label: n === "7d" ? Ye("date.weekdays_short")[i.getDay()] : i.getDate() + "." + tn(i.getMonth() + 1) });
  }
  return s;
}
function Ml({ series: t, unit: e, range: n, width: s }) {
  const [i, a] = _(null), r = ne(null), c = Math.max(200, s), h = c - se.l - se.r, A = Re - se.t - se.b, { from: f, to: u } = t, l = (x) => se.l + (x - f) / (u - f) * h;
  if (t.kind === "timeline" ? !t.segments.length : !t.points.length) return /* @__PURE__ */ o("div", { class: "chart-empty", children: d("chart.no_data") });
  const p = (x) => {
    const Q = r.current;
    if (!Q) return;
    const R = Q.getBoundingClientRect(), Z = f + (x - R.left - se.l) / h * (u - f);
    if (t.kind === "timeline") {
      let N = 0;
      t.segments.forEach((J, fe) => {
        J.from <= Z && (N = fe);
      }), a(N);
      return;
    }
    const F = t.points, V = t.kind === "bars" ? t.bucketMs / 2 : 0;
    let Y = 0;
    F.forEach((N, J) => {
      Math.abs(N.t + V - Z) < Math.abs(F[Y].t + V - Z) && (Y = J);
    }), a(Y);
  }, v = {
    onMouseMove: (x) => p(x.clientX),
    onMouseLeave: () => a(null),
    onTouchStart: (x) => p(x.touches[0].clientX),
    onTouchMove: (x) => p(x.touches[0].clientX)
  }, M = Cl(f, u, n).map((x) => /* @__PURE__ */ o("text", { x: l(x.t), y: Re - 6, class: "chart-tick", "text-anchor": "middle", children: x.label }, x.t));
  if (t.kind === "timeline") {
    const x = se.t + A / 2 - 16, Q = i != null ? t.segments[i] : null;
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: Re, ...v, children: [
        t.segments.map((R, Z) => {
          const F = l(R.from), V = l(R.to), Y = Math.max(1, V - F - (V - F > 3 ? 2 : 0));
          return /* @__PURE__ */ o("rect", { x: F, y: x, width: Y, height: 32, rx: 3, fill: R.on ? Yn : R.on === null ? vl : Wo, stroke: R.on === null ? "rgba(255,255,255,0.25)" : "none", "stroke-dasharray": "3 3", opacity: i == null || i === Z ? 1 : 0.55 }, Z);
        }),
        /* @__PURE__ */ o("line", { x1: se.l, x2: c - se.r, y1: x + 44, y2: x + 44, stroke: Yo }),
        M
      ] }),
      /* @__PURE__ */ o("div", { class: "chart-legend", children: [
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: Yn } }),
          d("switch.on")
        ] }),
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: Wo } }),
          d("switch.off")
        ] }),
        t.segments.some((R) => R.on === null) && /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { class: "key-na" }),
          d("chart.no_connection")
        ] })
      ] }),
      Q && /* @__PURE__ */ o(vn, { x: l(Q.from) + Math.min(l(Q.to) - l(Q.from), 40) / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: Q.on ? d("switch.on") : Q.on === null ? d("chart.no_connection") : d("switch.off") }),
        /* @__PURE__ */ o("span", { children: [
          Me(Q.from, n),
          " — ",
          Me(Q.to, n)
        ] })
      ] })
    ] });
  }
  const g = t.points, k = g.some((x) => x.min != null && x.max != null);
  let S = 1 / 0, I = -1 / 0;
  g.forEach((x) => {
    S = Math.min(S, x.min != null ? x.min : x.v), I = Math.max(I, x.max != null ? x.max : x.v);
  }), t.kind === "bars" && (S = Math.min(0, S));
  const E = wl(S, I, 4), b = E[0], T = E[E.length - 1], P = (x) => se.t + A - (x - b) / (T - b) * A, B = E.map((x) => /* @__PURE__ */ o("g", { children: [
    /* @__PURE__ */ o("line", { x1: se.l, x2: c - se.r, y1: P(x), y2: P(x), stroke: Yo }),
    /* @__PURE__ */ o("text", { x: se.l - 8, y: P(x) + 4, class: "chart-tick", "text-anchor": "end", children: ee(x) })
  ] }, x)), D = i != null ? g[i] : null;
  if (t.kind === "bars") {
    const x = t.bucketMs / (u - f) * h, Q = Math.max(2, Math.min(24, x - 2)), R = t.bucketMs >= 864e5, Z = R && g.map((F, V) => {
      const Y = new Date(F.t);
      return n === "30d" && (g.length - 1 - V) % 5 ? null : /* @__PURE__ */ o("text", { x: l(F.t) + x / 2, y: Re - 6, class: "chart-tick", "text-anchor": "middle", children: n === "7d" ? Ye("date.weekdays_short")[Y.getDay()] : Y.getDate() + "." + tn(Y.getMonth() + 1) }, F.t);
    });
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: Re, ...v, children: [
        B,
        g.map((F, V) => {
          const Y = l(F.t) + (x - Q) / 2, N = P(Math.max(0, F.v)), J = P(0), fe = Math.max(0, J - N), G = Math.min(4, Q / 2, fe), le = "M" + Y + "," + J + "V" + (N + G) + "Q" + Y + "," + N + " " + (Y + G) + "," + N + "H" + (Y + Q - G) + "Q" + (Y + Q) + "," + N + " " + (Y + Q) + "," + (N + G) + "V" + J + "Z";
          return /* @__PURE__ */ o("path", { d: le, fill: ye, opacity: i == null || i === V ? 1 : 0.5 }, V);
        }),
        R ? Z : M
      ] }),
      D && /* @__PURE__ */ o(vn, { x: l(D.t) + x / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: [
          ee(D.v),
          " ",
          e
        ] }),
        /* @__PURE__ */ o("span", { children: t.bucketMs >= 864e5 ? At(D.t) : At(D.t) + ", " + Qe(D.t) + "–" + Qe(D.t + t.bucketMs) })
      ] })
    ] });
  }
  const oe = k ? g : g.concat({ t: u, v: g[g.length - 1].v }), re = oe.map((x, Q) => (Q ? "L" : "M") + l(Math.max(x.t, f)).toFixed(1) + "," + P(x.v).toFixed(1)).join(""), O = re + "L" + l(oe[oe.length - 1].t).toFixed(1) + "," + P(b) + "L" + l(Math.max(oe[0].t, f)).toFixed(1) + "," + P(b) + "Z", K = k ? g.map((x, Q) => (Q ? "L" : "M") + l(x.t).toFixed(1) + "," + P(x.max).toFixed(1)).join("") + g.slice().reverse().map((x) => "L" + l(x.t).toFixed(1) + "," + P(x.min).toFixed(1)).join("") + "Z" : "", te = g[g.length - 1];
  return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
    /* @__PURE__ */ o("svg", { ref: r, width: c, height: Re, ...v, children: [
      B,
      k ? /* @__PURE__ */ o("path", { d: K, fill: ye, opacity: 0.22 }) : /* @__PURE__ */ o("path", { d: O, fill: ye, opacity: 0.1 }),
      /* @__PURE__ */ o("path", { d: re, fill: "none", stroke: ye, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }),
      /* @__PURE__ */ o("circle", { cx: l(k ? te.t : u), cy: P(te.v), r: 4, fill: ye, stroke: Uo, "stroke-width": 2 }),
      D && /* @__PURE__ */ o("g", { children: [
        /* @__PURE__ */ o("line", { x1: l(D.t), x2: l(D.t), y1: se.t, y2: se.t + A, stroke: "rgba(255,255,255,0.35)" }),
        /* @__PURE__ */ o("circle", { cx: l(D.t), cy: P(D.v), r: 5, fill: ye, stroke: Uo, "stroke-width": 2 })
      ] }),
      M
    ] }),
    k && /* @__PURE__ */ o("div", { class: "chart-legend", children: [
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { class: "key-line", style: { background: ye } }),
        d("chart.mean")
      ] }),
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { style: { background: ye, opacity: 0.35 } }),
        d("chart.min_max")
      ] })
    ] }),
    D && /* @__PURE__ */ o(vn, { x: l(D.t), W: c, children: [
      /* @__PURE__ */ o("b", { children: [
        ee(D.v),
        " ",
        e
      ] }),
      D.min != null && D.max != null && /* @__PURE__ */ o("span", { children: [
        ee(D.min),
        " … ",
        ee(D.max),
        " ",
        e
      ] }),
      /* @__PURE__ */ o("span", { children: Me(D.t, n) })
    ] })
  ] });
}
function vn(t) {
  const e = Math.max(60, Math.min(t.W - 60, t.x));
  return /* @__PURE__ */ o("div", { class: "chart-tip", style: { left: e }, children: t.children });
}
const Dt = {
  cool: { Icon: ho, color: ye },
  heat: { Icon: Ls, color: Yn },
  heat_cool: { Icon: Vn, color: "#a3a3a3" },
  auto: { Icon: Vn, color: "#a3a3a3" },
  dry: { Icon: Le, color: "#a3a3a3" },
  fan_only: { Icon: Ps, color: "#a3a3a3" },
  off: { Icon: lt, color: "rgba(255,255,255,0.25)" }
}, Sl = ["auto", "low", "medium", "middle", "high", "quiet", "turbo", "diffuse", "focus"], El = (t) => Sl.indexOf(t) !== -1 ? d("ac.fan." + t) : t, Zo = (t) => Dt[t] ? d("ac.mode." + t) : t;
function Jo(t, e, n, s, i) {
  const a = (135 + s * 270) * Math.PI / 180, r = (135 + i * 270) * Math.PI / 180, c = (i - s) * 270 > 180 ? 1 : 0;
  return "M" + (t + n * Math.cos(a)).toFixed(1) + "," + (e + n * Math.sin(a)).toFixed(1) + "A" + n + "," + n + " 0 " + c + " 1 " + (t + n * Math.cos(r)).toFixed(1) + "," + (e + n * Math.sin(r)).toFixed(1);
}
function zl({ it: t, size: e }) {
  const n = U(), s = n.states[t.entity], i = s ? s.attributes : {}, a = s ? s.state : "off", r = a === "off", c = i.target_temp_step || 0.5, h = i.min_temp != null ? i.min_temp : 16, A = i.max_temp != null ? i.max_temp : 31, [f, u] = _(null), l = ne(0), m = f ?? i.temperature;
  H(() => {
    u(null);
  }, [i.temperature]);
  const p = (E) => {
    const b = m ?? (h + A) / 2, T = Math.max(h, Math.min(A, Math.round((b + E * c) / c) * c));
    u(T), clearTimeout(l.current), l.current = window.setTimeout(() => n.callService(t.entity, "set_temperature", { temperature: T }), 800);
  }, v = i.current_temperature != null ? String(i.current_temperature) : t.temp ? ve(n, t.temp) : void 0, C = Dt[a] || Dt.auto, M = e.h < 260 || e.w < 260, g = M ? 132 : 176, k = m != null ? (m - h) / (A - h) : 0, S = i.hvac_modes || [], I = i.fan_modes || [];
  return /* @__PURE__ */ o("div", { class: "ac" + (M ? " compact" : ""), children: [
    /* @__PURE__ */ o("div", { class: "ac-main", children: [
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => p(-1), children: /* @__PURE__ */ o(ol, { size: 22 }) }),
      /* @__PURE__ */ o("div", { class: "ac-dial", style: { width: g, height: g }, children: [
        /* @__PURE__ */ o("svg", { width: g, height: g, children: [
          /* @__PURE__ */ o("path", { d: Jo(g / 2, g / 2, g / 2 - 8, 0, 1), stroke: "rgba(255,255,255,0.1)", "stroke-width": 8, fill: "none", "stroke-linecap": "round" }),
          !r && m != null && /* @__PURE__ */ o("path", { d: Jo(g / 2, g / 2, g / 2 - 8, 0, Math.max(0.01, k)), stroke: C.color, "stroke-width": 8, fill: "none", "stroke-linecap": "round" })
        ] }),
        /* @__PURE__ */ o("div", { class: "ac-center", children: [
          /* @__PURE__ */ o("div", { class: "ac-target", children: [
            m != null && !r ? ee(m) : "—",
            /* @__PURE__ */ o("sup", { children: "°" })
          ] }),
          /* @__PURE__ */ o("div", { class: "ac-mode", children: Zo(a) }),
          v != null && !ot(v) && /* @__PURE__ */ o("div", { class: "ac-room", children: d("ac.room", { t: ee(Number(v)) }) })
        ] })
      ] }),
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => p(1), children: /* @__PURE__ */ o(je, { size: 22 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "ac-modes", children: S.map((E) => {
      const b = Dt[E] || { Icon: os, color: "#a3a3a3" };
      return /* @__PURE__ */ o(
        "button",
        {
          class: "ac-mode-btn" + (E === a ? " active" : ""),
          title: Zo(E),
          style: E === a && E !== "off" ? { background: b.color, borderColor: b.color } : void 0,
          onClick: () => n.callService(t.entity, "set_hvac_mode", { hvac_mode: E }),
          children: /* @__PURE__ */ o(b.Icon, { size: 18 })
        },
        E
      );
    }) }),
    !M && I.length > 0 && !r && /* @__PURE__ */ o("div", { class: "seg seg-wide ac-fan", children: I.map((E) => /* @__PURE__ */ o("button", { class: i.fan_mode === E ? "active" : "", onClick: () => n.callService(t.entity, "set_fan_mode", { fan_mode: E }), children: El(E) }, E)) })
  ] });
}
function Il({ card: t, size: e }) {
  const n = U(), [s, i] = _(0), a = t.items[Math.min(s, t.items.length - 1)];
  return /* @__PURE__ */ o("div", { class: "ac-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((r, c) => /* @__PURE__ */ o("button", { class: c === s ? "active" : "", onClick: () => i(c), children: ue(n, r) }, r.entity)) }),
    /* @__PURE__ */ o(zl, { it: a, size: e }, a.entity)
  ] });
}
const pe = {
  PAUSE: 1,
  VOLUME_SET: 4,
  VOLUME_MUTE: 8,
  PREVIOUS: 16,
  NEXT: 32,
  TURN_ON: 128,
  TURN_OFF: 256,
  SELECT_SOURCE: 2048,
  PLAY: 16384
}, Bl = ["playing", "paused", "idle", "on", "off", "standby", "buffering"], kt = (t) => Bl.indexOf(t) !== -1 ? d("media.state." + t) : t;
function Dl({ it: t, tv: e, sources: n, size: s }) {
  const i = U(), a = i.states[t.entity], r = a ? a.attributes : {}, c = Number(r.supported_features) || 0, h = (B) => (c & B) === B, A = a ? a.state : "off", f = A === "off" || A === "standby", u = A === "playing", l = (B, D) => i.callService(t.entity, B, D), [m, p] = _(null), v = m ?? (typeof r.volume_level == "number" ? r.volume_level : null);
  H(() => {
    p(null);
  }, [r.volume_level]);
  const C = ne(0), M = (B) => {
    const D = Math.max(0, Math.min(1, Math.round(B * 100) / 100));
    p(D), clearTimeout(C.current), C.current = window.setTimeout(() => l("volume_set", { volume_level: D }), 400);
  }, g = ne(null), k = (B) => {
    const D = g.current;
    if (!D) return;
    const oe = D.getBoundingClientRect();
    M((B - oe.left) / oe.width);
  }, S = i.pictureUrl(r.entity_picture_local || r.entity_picture), I = r.media_title || r.app_name || r.source || kt(A), E = r.media_artist || r.media_album_name || (r.media_title ? kt(A) : "") || "", b = s.h >= 300 && s.w >= 300, T = s.h < 250, P = e ? Wn : f ? ga : Wc;
  return f && e ? /* @__PURE__ */ o("div", { class: "media media-off", children: [
    /* @__PURE__ */ o("div", { class: "media-art-empty big", children: /* @__PURE__ */ o(Wn, { size: 40 }) }),
    /* @__PURE__ */ o("div", { class: "media-title", children: ue(i, t) }),
    /* @__PURE__ */ o("div", { class: "media-sub", children: kt(A) }),
    h(pe.TURN_ON) ? /* @__PURE__ */ o("button", { class: "pill-btn media-power", onClick: () => l("turn_on"), children: [
      /* @__PURE__ */ o(lt, { size: 18 }),
      /* @__PURE__ */ o("span", { children: d("common.turn_on") })
    ] }) : /* @__PURE__ */ o("div", { class: "muted small media-hint", children: d("media.tv_remote_only") })
  ] }) : /* @__PURE__ */ o("div", { class: "media" + (b ? " big" : "") + (T ? " short" : ""), children: [
    /* @__PURE__ */ o("div", { class: "media-top", children: [
      S && !f ? /* @__PURE__ */ o("div", { class: "media-art", style: { backgroundImage: "url(" + S + ")" } }) : /* @__PURE__ */ o("div", { class: "media-art media-art-empty", children: /* @__PURE__ */ o(P, { size: b ? 36 : 26 }) }),
      /* @__PURE__ */ o("div", { class: "media-info", children: [
        /* @__PURE__ */ o("div", { class: "media-title", children: I }),
        E && /* @__PURE__ */ o("div", { class: "media-sub", children: E }),
        /* @__PURE__ */ o("div", { class: "media-state" + (u ? " on" : ""), children: [
          u && /* @__PURE__ */ o("i", { class: "eq", children: [
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {})
          ] }),
          kt(A)
        ] })
      ] }),
      (h(pe.TURN_OFF) || h(pe.TURN_ON)) && /* @__PURE__ */ o("button", { class: "icon-round", title: d(f ? "common.turn_on" : "common.turn_off"), onClick: () => l(f ? "turn_on" : "turn_off"), children: /* @__PURE__ */ o(lt, { size: 16 }) })
    ] }),
    (h(pe.PAUSE) || h(pe.PLAY) || h(pe.NEXT)) && /* @__PURE__ */ o("div", { class: "media-controls", children: [
      h(pe.PREVIOUS) && /* @__PURE__ */ o("button", { onClick: () => l("media_previous_track"), children: /* @__PURE__ */ o(Al, { size: 22 }) }),
      /* @__PURE__ */ o("button", { class: "media-play", onClick: () => l("media_play_pause"), children: u ? /* @__PURE__ */ o(il, { size: 24 }) : /* @__PURE__ */ o(sl, { size: 24 }) }),
      h(pe.NEXT) && /* @__PURE__ */ o("button", { onClick: () => l("media_next_track"), children: /* @__PURE__ */ o(hl, { size: 22 }) })
    ] }),
    v != null && h(pe.VOLUME_SET) && /* @__PURE__ */ o("div", { class: "media-volume", children: [
      h(pe.VOLUME_MUTE) && /* @__PURE__ */ o("button", { onClick: () => l("volume_mute", { is_volume_muted: !r.is_volume_muted }), children: r.is_volume_muted ? /* @__PURE__ */ o(bl, { size: 18 }) : /* @__PURE__ */ o(gl, { size: 18 }) }),
      /* @__PURE__ */ o(
        "div",
        {
          class: "vol-bar",
          ref: g,
          onClick: (B) => k(B.clientX),
          onTouchMove: (B) => k(B.touches[0].clientX),
          children: /* @__PURE__ */ o("div", { class: "vol-fill", style: { width: Math.round(v * 100) + "%" } })
        }
      ),
      /* @__PURE__ */ o("span", { class: "vol-num", children: Math.round(v * 100) })
    ] }),
    n && h(pe.SELECT_SOURCE) && r.source_list && /* @__PURE__ */ o("div", { class: "chips media-sources", children: r.source_list.map((B) => /* @__PURE__ */ o("button", { class: "chip" + (r.source === B ? " active" : ""), onClick: () => l("select_source", { source: B }), children: B }, B)) })
  ] });
}
function Tl({ card: t, size: e }) {
  const n = U(), s = t.items.findIndex((h) => n.states[h.entity] && n.states[h.entity].state === "playing"), [i, a] = _(s >= 0 ? s : 0), r = t.items[Math.min(i, t.items.length - 1)], c = t.type === "tv" || !!n.states[r.entity] && n.states[r.entity].attributes.device_class === "tv";
  return /* @__PURE__ */ o("div", { class: "media-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline seg-full", children: t.items.map((h, A) => {
      const f = n.states[h.entity];
      return /* @__PURE__ */ o("button", { class: A === i ? "active" : "", onClick: () => a(A), children: [
        f && f.state === "playing" && /* @__PURE__ */ o("i", { class: "dot-live" }),
        ue(n, h)
      ] }, h.entity);
    }) }),
    Pe(n, r.entity) && /* @__PURE__ */ o(Dl, { it: r, tv: c, sources: t.type === "tv", size: e }, r.entity)
  ] });
}
const Ol = {
  "clear-night": { Icon: $s },
  cloudy: { Icon: Ms },
  exceptional: { Icon: kn },
  fog: { Icon: jc },
  hail: { Icon: Vo },
  lightning: { Icon: kn },
  "lightning-rainy": { Icon: kn },
  partlycloudy: { Icon: vs },
  pouring: { Icon: Fc },
  rainy: { Icon: Qc },
  snowy: { Icon: ho },
  "snowy-rainy": { Icon: Vo },
  sunny: { Icon: ya },
  windy: { Icon: $t },
  "windy-variant": { Icon: $t }
};
function We(t) {
  const e = Ol[t || ""];
  return { label: e ? d("weather." + t) : t || "—", Icon: e ? e.Icon : Ms };
}
function Ra(t, e) {
  const [n, s] = _([]), [i, a] = _([]), r = e ? t.states[e] : void 0, c = r && Number(r.attributes.supported_features) || 0;
  return H(() => {
    if (!e || t.status !== "connected" || !c) return;
    const h = [];
    c & 2 && h.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: "hourly" },
      (f) => s(f.forecast || [])
    ));
    const A = c & 1 ? "daily" : c & 4 ? "twice_daily" : "";
    return A && h.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: A },
      (f) => a(Pl(f.forecast || [], A === "twice_daily"))
    )), () => h.forEach((f) => f());
  }, [e, t.status, c]), { hourly: n, days: i };
}
function Pl(t, e) {
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
function Hl(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "m/s" ? n : e === "mph" ? n * 0.447 : n / 3.6;
}
function Ll(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "mmHg" ? n : e === "inHg" ? n * 25.4 : n * 0.750062;
}
function he(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : String(Math.round(e));
}
const Ql = 64, jl = 32, Go = 36, Xo = 84, Fl = 33;
function Va({ card: t, size: e }) {
  const n = U(), s = an(), i = t.items.filter((b) => b.entity.indexOf("weather.") === 0)[0], a = t.items.filter((b) => b !== i), r = i && i.entity, c = r ? n.states[r] : void 0, { hourly: h, days: A } = Ra(n, r);
  let f = e.h - (c ? Ql + jl : 0);
  const u = Math.max(0, Math.min(a.length, Math.floor(f / Go)));
  f -= u * Go + (u ? 10 : 0);
  const l = !!c && h.length > 0 && f >= Xo;
  l && (f -= Xo + 12);
  const m = c ? Math.max(0, Math.min(A.length, 7, Math.floor((f - 10) / Fl))) : 0, p = A.slice(0, m), v = Math.min.apply(null, p.map((b) => b.lo != null ? b.lo : 99)), C = Math.max.apply(null, p.map((b) => b.hi != null ? b.hi : -99)), M = (b) => (b - v) / Math.max(1, C - v) * 100, g = Date.now(), k = c ? c.attributes : {}, S = We(c && c.state), I = Hl(k.wind_speed, k.wind_speed_unit), E = Ll(k.pressure, k.pressure_unit);
  return /* @__PURE__ */ o("div", { class: "weather", children: [
    c && /* @__PURE__ */ o("div", { class: "weather-now", children: [
      /* @__PURE__ */ o(S.Icon, { size: e.w > 360 ? 54 : 40 }),
      /* @__PURE__ */ o("div", { class: "weather-temp", children: [
        he(k.temperature),
        /* @__PURE__ */ o("sup", { children: "°" })
      ] }),
      /* @__PURE__ */ o("div", { class: "weather-desc", children: [
        /* @__PURE__ */ o("b", { children: S.label }),
        k.apparent_temperature != null && /* @__PURE__ */ o("span", { children: d("weather.feels_like", { t: he(k.apparent_temperature) }) }),
        A[0] && A[0].hi != null && /* @__PURE__ */ o("span", { children: [
          he(A[0].lo),
          "° … ",
          he(A[0].hi),
          "°"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ o("div", { class: "weather-facts", children: [
      I != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o($t, { size: 14 }),
        d("weather.wind", { v: I.toFixed(1) })
      ] }),
      k.humidity != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(Le, { size: 14 }),
        he(k.humidity),
        "%"
      ] }),
      E != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(js, { size: 14 }),
        d("weather.pressure", { v: Math.round(E) })
      ] })
    ] }),
    u > 0 && /* @__PURE__ */ o("div", { class: "weather-rooms", children: a.slice(0, u).map((b) => {
      const T = n.states[b.entity], P = b.entity.indexOf("weather.") === 0, B = P ? T && T.attributes.temperature : T && T.state, D = P ? T && T.attributes.humidity : b.hum ? ve(n, b.hum) : void 0;
      return /* @__PURE__ */ o("div", { class: "wroom tappable", onClick: () => s(b.hum ? [b.entity, b.hum] : [b.entity]), children: [
        /* @__PURE__ */ o("span", { class: "wroom-name", children: ue(n, b) }),
        D != null && /* @__PURE__ */ o("span", { class: "wroom-hum", children: [
          /* @__PURE__ */ o(Le, { size: 12 }),
          he(D),
          "%"
        ] }),
        /* @__PURE__ */ o("b", { class: "wroom-temp", children: [
          Nl(B),
          "°"
        ] })
      ] }, b.entity);
    }) }),
    l && /* @__PURE__ */ o("div", { class: "weather-hours", children: h.filter((b) => Date.parse(b.datetime) > g - 36e5).slice(0, 12).map((b) => {
      const T = We(b.condition);
      return /* @__PURE__ */ o("div", { class: "hour", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: Qe(Date.parse(b.datetime)) }),
        /* @__PURE__ */ o(T.Icon, { size: 18 }),
        /* @__PURE__ */ o("b", { children: [
          he(b.temperature),
          "°"
        ] })
      ] }, b.datetime);
    }) }),
    p.length > 0 && /* @__PURE__ */ o("div", { class: "weather-days", children: p.map((b, T) => {
      const P = We(b.condition);
      return /* @__PURE__ */ o("div", { class: "day", children: [
        /* @__PURE__ */ o("span", { class: "day-name", children: T === 0 ? d("weather.today") : Ye("date.weekdays_short")[new Date(b.t).getDay()] }),
        /* @__PURE__ */ o(P.Icon, { size: 18 }),
        /* @__PURE__ */ o("span", { class: "day-lo", children: [
          he(b.lo),
          "°"
        ] }),
        /* @__PURE__ */ o("span", { class: "day-bar", children: b.lo != null && b.hi != null && /* @__PURE__ */ o("i", { style: { left: M(b.lo) + "%", width: Math.max(4, M(b.hi) - M(b.lo)) + "%" } }) }),
        /* @__PURE__ */ o("span", { class: "day-hi", children: [
          he(b.hi),
          "°"
        ] })
      ] }, b.t);
    }) })
  ] });
}
function Nl(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : (Math.round(e * 10) / 10).toFixed(1);
}
function ql({ entity: t }) {
  const e = U(), n = e.states[t], { days: s } = Ra(e, t);
  if (!n || n.state === "unavailable") return null;
  const i = We(n.state), a = s[0];
  return /* @__PURE__ */ o("div", { class: "ambient-weather", children: [
    /* @__PURE__ */ o(i.Icon, { size: 30 }),
    /* @__PURE__ */ o("span", { class: "aw-temp", children: [
      he(n.attributes.temperature),
      "°"
    ] }),
    /* @__PURE__ */ o("span", { class: "aw-desc", children: [
      i.label,
      a && a.hi != null && /* @__PURE__ */ o("small", { children: [
        he(a.lo),
        "° … ",
        he(a.hi),
        "°"
      ] })
    ] })
  ] });
}
function fo(t, e) {
  if (!e || Rt[t].domains.indexOf(e.entity_id.split(".")[0]) === -1) return !1;
  const n = e.attributes.device_class, s = e.entity_id.indexOf("weather.") === 0;
  return t === "climate" || t === "weather" ? s || n === "temperature" : !0;
}
function Ko(t, e, n) {
  return e.filter((s) => t.states[s] && t.states[s].entity_id.indexOf("sensor.") === 0 && t.states[s].attributes.device_class === n)[0];
}
function Wa(t, e, n) {
  if (!n.device) return [n];
  const s = t.devices[n.device];
  if (!s) return n.entity ? [{ entity: n.entity, name: n.name }] : [];
  const i = s.entities.filter((l) => t.registry[l] && t.registry[l].ec == null && !!t.states[l]), a = n.skip || [], r = n.order || [], c = (l) => {
    const m = r.indexOf(l);
    return m === -1 ? 1e6 : m;
  }, h = i.filter((l) => fo(e, t.states[l]) && a.indexOf(l) === -1).map((l, m) => ({ id: l, i: m })).sort((l, m) => c(l.id) - c(m.id) || l.i - m.i).map((l) => l.id), A = h.length === 1, f = n.names || {}, u = (l) => f[l] || (A ? n.name || s.name : t.registry[l].en || s.name || void 0);
  return e === "climate" ? h.map((l) => ({ entity: l, hum: Ko(t, i, "humidity"), name: u(l) })) : e === "ac" ? h.map((l) => ({ entity: l, temp: n.temp || Ko(t, i, "temperature"), name: u(l) })) : h.map((l) => ({ entity: l, name: u(l), icon: void 0 }));
}
function Rl(t, e) {
  if (!e.items.some((i) => i.device)) return e;
  const n = {}, s = [];
  return e.items.forEach((i) => Wa(t, e.type, i).forEach((a) => {
    n[a.entity] || (n[a.entity] = !0, s.push(a));
  })), { ...e, items: s };
}
function ln(t, e) {
  const n = Rl(t, e.title ? e : { ...e, title: st(e.type) }), s = n.items.filter((i) => Pe(t, i.entity));
  return s.length === n.items.length ? n : { ...n, items: s };
}
function ue(t, e) {
  const n = t.states[e.entity];
  return e.name || n && n.attributes.friendly_name || e.entity;
}
function Vl(t, e) {
  const n = t.states[e];
  return n ? n.attributes.device_class : void 0;
}
const Wl = [
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
], Yl = ["door", "window", "opening", "garage_door", "moisture", "smoke", "gas", "problem", "safety"];
function Un(t, e) {
  const n = t.states[e];
  if (!n || ot(n.state)) return { text: d("sensor.no_data"), alert: !1, on: !1 };
  const s = e.split(".")[0], i = n.attributes.device_class;
  if (s === "binary_sensor") {
    const r = n.state === "on", c = Wl.indexOf(i) !== -1 ? "sensor." + i + "." : "sensor.";
    return { text: d(c + (r ? "on" : "off")), alert: r && Yl.indexOf(i) !== -1, on: r };
  }
  if (s === "lock") return { text: n.state === "locked" ? d("sensor.locked") : d("sensor.unlocked"), alert: n.state !== "locked", on: n.state !== "locked" };
  if (s === "cover") return { text: n.state === "open" ? d("sensor.open") : n.state === "closed" ? d("sensor.closed") : n.state, alert: !1, on: n.state === "open" };
  const a = parseFloat(n.state);
  return { text: (isNaN(a) ? n.state : String(Math.round(a * 10) / 10)) + Nt(t, e), alert: !1, on: !1 };
}
function Ul(t) {
  return Math.max(1, Math.min(5, Math.floor(t.w / 150)));
}
function Ya(t, e) {
  const s = (r) => (e.h + 10) / Math.ceil(t / r) - 10;
  let i = Ul(e);
  for (; i < Math.min(t, 6) && s(i) < 96 && e.w / (i + 1) >= 120; ) i++;
  const a = s(i);
  return "lights cols-" + i + (a >= 96 ? "" : a >= 70 ? " compact" : " list");
}
function Zl({ card: t, size: e }) {
  const n = U(), s = an(), i = e.h / Math.max(1, t.items.length) < 95;
  return /* @__PURE__ */ o("div", { class: "rooms" + (i ? " compact" : ""), children: t.items.map((a) => {
    const r = a.entity.indexOf("weather.") === 0 ? n.states[a.entity] : void 0, c = r ? We(r.state).Icon : null;
    return /* @__PURE__ */ o("div", { class: "room tappable" + (r ? " room-outside" : ""), onClick: () => s(a.hum ? [a.entity, a.hum] : [a.entity]), children: [
      /* @__PURE__ */ o("div", { class: "room-name", children: [
        c && /* @__PURE__ */ o(c, { size: 14 }),
        ue(n, a)
      ] }),
      /* @__PURE__ */ o("div", { class: "room-vals", children: [
        /* @__PURE__ */ o("span", { class: "room-temp", children: [
          Et(r ? String(r.attributes.temperature) : ve(n, a.entity)),
          /* @__PURE__ */ o("sup", { children: "°" })
        ] }),
        r && r.attributes.humidity != null && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Le, { size: 14 }),
          Math.round(r.attributes.humidity),
          "%"
        ] }),
        !r && a.hum && Pe(n, a.hum) && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Le, { size: 14 }),
          Et(ve(n, a.hum), 0),
          "%"
        ] })
      ] })
    ] }, a.entity);
  }) });
}
function Jl(t, e) {
  const n = ne(0), s = ne(!1), i = () => {
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
function Gl({ it: t }) {
  const e = U(), n = an(), s = Jl(() => n([t.entity]), () => e.toggle(t.entity)), i = ve(e, t.entity), a = sn(i), r = Ne(t.icon || uo(t.entity));
  return /* @__PURE__ */ o("button", { class: "light" + (a ? " on" : "") + (i === void 0 ? " na" : ""), ...s, children: [
    /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(r, { size: 22 }) }),
    /* @__PURE__ */ o("span", { class: "light-name", children: ue(e, t) }),
    /* @__PURE__ */ o("span", { class: "light-state", children: d(i === void 0 ? "switch.unavailable" : a ? "switch.on" : "switch.off") })
  ] });
}
function Xl({ card: t, size: e }) {
  return /* @__PURE__ */ o("div", { class: Ya(t.items.length, e), children: t.items.map((n) => /* @__PURE__ */ o(Gl, { it: n }, n.entity)) });
}
function Kl({ card: t, onCamera: e }) {
  const n = U(), [s, i] = _(0), a = t.items[Math.min(s, t.items.length - 1)], r = a ? n.cameraStreamUrl(a.entity) : "";
  return /* @__PURE__ */ o("div", { class: "cam-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((c, h) => /* @__PURE__ */ o("button", { class: h === s ? "active" : "", onClick: () => i(h), children: ue(n, c) }, c.entity + h)) }),
    /* @__PURE__ */ o("div", { class: "cam fit-" + (t.fit || "cover"), onClick: () => r && e(r), children: [
      r ? /* @__PURE__ */ o("img", { src: r, alt: "" }) : /* @__PURE__ */ o("div", { class: "cam-empty", children: [
        /* @__PURE__ */ o(ml, { size: 26 }),
        /* @__PURE__ */ o("span", { children: d("camera.no_stream") })
      ] }),
      r && /* @__PURE__ */ o("span", { class: "live", children: [
        /* @__PURE__ */ o("i", {}),
        "LIVE"
      ] })
    ] })
  ] });
}
function $l({ card: t }) {
  const e = U(), n = an();
  return /* @__PURE__ */ o("div", { class: "sensors", children: t.items.map((s) => {
    const i = Un(e, s.entity), a = Ne(s.icon || uo(s.entity, Vl(e, s.entity)));
    return /* @__PURE__ */ o("div", { class: "status-row tappable" + (i.alert ? " alert" : ""), onClick: () => n([s.entity]), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(a, { size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: ue(e, s) }),
        /* @__PURE__ */ o("small", { children: i.text })
      ] })
    ] }, s.entity);
  }) });
}
function ed({ card: t, size: e }) {
  const n = U(), [s, i] = _(""), a = (r) => {
    const c = r.split(".")[0];
    n.callService(r, c === "automation" ? "trigger" : "turn_on"), i(r), setTimeout(() => i(""), 1200);
  };
  return /* @__PURE__ */ o("div", { class: Ya(t.items.length, e), children: t.items.map((r) => {
    const c = Ne(r.icon || "sparkles");
    return /* @__PURE__ */ o("button", { class: "light scene" + (s === r.entity ? " on" : ""), onClick: () => a(r.entity), children: [
      /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(c, { size: 22 }) }),
      /* @__PURE__ */ o("span", { class: "light-name", children: ue(n, r) }),
      /* @__PURE__ */ o("span", { class: "light-state", children: s === r.entity ? d("scene.started") : d("scene.tap_to_run") })
    ] }, r.entity);
  }) });
}
function Ua(t) {
  const e = U(), { size: n, onCamera: s } = t;
  if (!t.card.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.empty") });
  const i = ln(e, t.card);
  if (!i.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: d("card.all_unavailable") });
  switch (i.type) {
    case "climate":
      return /* @__PURE__ */ o(Zl, { card: i, size: n });
    case "switches":
      return /* @__PURE__ */ o(Xl, { card: i, size: n });
    case "cameras":
      return /* @__PURE__ */ o(Kl, { card: i, onCamera: s });
    case "sensors":
      return /* @__PURE__ */ o($l, { card: i });
    case "scenes":
      return /* @__PURE__ */ o(ed, { card: i, size: n });
    case "ac":
      return /* @__PURE__ */ o(Il, { card: i, size: n });
    case "speakers":
    case "tv":
      return /* @__PURE__ */ o(Tl, { card: i, size: n });
    case "weather":
      return /* @__PURE__ */ o(Va, { card: i, size: n });
  }
}
function Za(t) {
  const e = U(), n = ln(e, t.card);
  if (n.type !== "switches") return null;
  const s = n.items.filter((i) => sn(ve(e, i.entity)));
  return s.length ? /* @__PURE__ */ o("button", { class: "chip-btn", onClick: () => s.forEach((i) => e.turnOff(i.entity)), children: [
    /* @__PURE__ */ o(lt, { size: 14 }),
    /* @__PURE__ */ o("span", { children: d("switches.all_off") })
  ] }) : null;
}
function mo(t, e) {
  const n = ln(t, e);
  if (n.type === "switches") {
    const s = n.items.filter((i) => sn(ve(t, i.entity))).length;
    return d("switches.title_count", { title: n.title, on: s, total: n.items.length });
  }
  return n.title;
}
function $o(t, e) {
  const n = ln(t, e), s = n.items[0];
  if (n.type === "climate") {
    const i = n.items.filter((a) => a.entity.indexOf("weather.") !== 0)[0];
    return { text: i ? Et(ve(t, i.entity)) + "°" : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "switches") {
    const i = n.items.filter((a) => sn(ve(t, a.entity))).length;
    return { text: i ? d("chip.on_count", { title: n.title, n: i }) : d("chip.off", { title: n.title }), lit: i > 0, alert: !1 };
  }
  if (n.type === "sensors") {
    for (let i = 0; i < n.items.length; i++) {
      const a = Un(t, n.items[i].entity);
      if (a.alert) return { text: ue(t, n.items[i]) + ": " + a.text.toLowerCase(), lit: !1, alert: !0 };
    }
    return { text: s ? Un(t, s.entity).text : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "ac" && s) {
    const i = t.states[s.entity];
    return !i || i.state === "off" ? { text: d("chip.off", { title: n.title }), lit: !1, alert: !1 } : { text: n.title + ": " + i.attributes.temperature + "°", lit: !0, alert: !1 };
  }
  if ((n.type === "speakers" || n.type === "tv") && n.items.length) {
    const i = n.items.filter((c) => t.states[c.entity] && t.states[c.entity].state === "playing")[0], a = i && t.states[i.entity];
    return a ? { text: "♪ " + (a.attributes.media_title || ue(t, i)), lit: !0, alert: !1 } : { text: n.items.filter((c) => t.states[c.entity] && ["on", "idle", "paused"].indexOf(t.states[c.entity].state) !== -1).length && n.type === "tv" ? d("chip.on", { title: n.title }) : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "weather" && s) {
    const i = t.states[s.entity];
    return { text: i ? Math.round(i.attributes.temperature) + "° " + We(i.state).label.toLowerCase() : n.title, lit: !1, alert: !1 };
  }
  return { text: n.title, lit: !1, alert: !1 };
}
function td(t) {
  return /* @__PURE__ */ o("section", { class: "panel " + (t.class || ""), children: [
    /* @__PURE__ */ o("div", { class: "panel-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      t.aside
    ] }),
    t.children
  ] });
}
function Ja(t) {
  return t.layout === "auto" ? window.innerWidth <= 700 ? "center" : "corner" : t.layout;
}
function Ga(t) {
  const e = Ja(t);
  return e === "top" ? [0.2, 0.05, 0.8, 0.35] : e === "corner" ? [0, 0.55, 0.55, 0.95] : [0.2, 0.55, 0.8, 0.9];
}
const nd = [0.4, 0.88, 0.6, 1];
function od(t) {
  return t.widgetsPos === "top" ? [0.15, 0, 0.85, 0.2] : t.widgetsPos === "bottom" ? [0.15, 0.78, 0.85, 0.96] : Ja(t) === "corner" ? [0.5, 0.7, 1, 0.96] : Ga(t);
}
function wn([t, e, n]) {
  const s = (i) => (i /= 255, i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * s(t) + 0.7152 * s(e) + 0.0722 * s(n);
}
const Cn = { color: "#ffffff", dark: !1 };
function Mn(t, e, n) {
  const [s, i] = _(Cn), a = e.join(",");
  return H(() => {
    if (!n || !t) return;
    const r = new Image();
    r.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = r.width, c.height = r.height;
        const h = c.getContext("2d");
        h.drawImage(r, 0, 0);
        const A = Math.floor(e[0] * c.width), f = Math.floor(e[1] * c.height), u = Math.max(1, Math.floor((e[2] - e[0]) * c.width)), l = Math.max(1, Math.floor((e[3] - e[1]) * c.height)), m = h.getImageData(A, f, u, l).data, p = [0, 0, 0];
        for (let E = 0; E < m.length; E += 4)
          p[0] += m[E], p[1] += m[E + 1], p[2] += m[E + 2];
        const v = m.length / 4, C = p.map((E) => E / v), M = C.map((E) => 255 - E), g = wn(C), k = wn(M), I = (Math.max(g, k) + 0.05) / (Math.min(g, k) + 0.05) >= 3 ? M : g > 0.35 ? [17, 17, 17] : [255, 255, 255];
        i({ color: "rgb(" + I.map(Math.round).join(",") + ")", dark: wn(I) < 0.25 });
      } catch {
        i(Cn);
      }
    }, r.src = t;
  }, [t, a, n]), n ? s : Cn;
}
function id({ prefs: t }) {
  const e = Oa(5e3), n = t.color === "contrast" ? "" : Qa[t.color], s = t.datePos === "above" || t.datePos !== "below" && t.layout === "top", i = t.date && /* @__PURE__ */ o("div", { class: "ambient-date" + (s ? " above" : ""), children: Ha(e) });
  return /* @__PURE__ */ o(ae, { children: [
    s && i,
    /* @__PURE__ */ o("div", { class: "ambient-time" + (t.color === "accent" ? " accent-text" : ""), style: { fontWeight: La[t.font], color: n || void 0 }, children: Pa(e) }),
    !s && i
  ] });
}
function sd(t) {
  const e = U(), n = Ze(), s = qa(), [i, a] = _(""), r = n.homeCards().filter((g) => g.chip), c = r.filter((g) => g.type === "weather" && g.items.length)[0], h = _l(r.filter((g) => g.type !== "weather"), s), A = h.filter((g) => s.hidden.indexOf(g.id) === -1), f = A.filter((g) => $o(e, g).alert), u = t.customizing, l = () => {
    a(""), t.onDone();
  }, m = s.color === "contrast", p = Mn(t.photoThumb, Ga(s), m), v = Mn(t.photoThumb, od(s), m), C = Mn(t.photoThumb, nd, m), M = "ambient" + (m ? " text-contrast" : "") + (t.visible ? " visible" : "") + " lock-" + s.layout + " lock-size-" + s.size + " chips-" + s.chipStyle + " widgets-" + s.widgetsPos + (u ? " customizing" : "") + (u && i ? " panel-up" : "");
  return /* @__PURE__ */ o(ae, { children: [
    /* @__PURE__ */ o("div", { ref: t.innerRef, class: M, children: [
      /* @__PURE__ */ o("div", { class: "ambient-clock" + (p.dark ? " ink-dark" : ""), style: m ? { color: p.color } : void 0, onClick: u ? () => a("clock") : void 0, children: [
        /* @__PURE__ */ o(id, { prefs: s }),
        s.weather && c && /* @__PURE__ */ o(ql, { entity: c.items[0].entity })
      ] }),
      /* @__PURE__ */ o("div", { class: "glances" + (v.dark ? " ink-dark" : ""), style: m ? { color: v.color } : void 0, onClick: u ? () => a("widgets") : void 0, children: [
        e.status !== "connected" && e.status !== "connecting" && !u && /* @__PURE__ */ o("button", { class: "glance warn", onClick: t.onConnection, children: [
          /* @__PURE__ */ o(xl, { size: 18 }),
          /* @__PURE__ */ o("span", { children: d("ambient.offline") })
        ] }),
        u && !A.length && /* @__PURE__ */ o("span", { class: "glance glance-add", children: [
          /* @__PURE__ */ o(je, { size: 18 }),
          /* @__PURE__ */ o("span", { children: d("lock.add_widgets") })
        ] }),
        f.concat(A.filter((g) => f.indexOf(g) === -1)).map((g) => {
          const k = $o(e, g), S = Ne(g.icon);
          return /* @__PURE__ */ o(
            "button",
            {
              class: "glance" + (k.lit ? " lit" : "") + (k.alert ? " alert" : ""),
              title: k.text,
              onClick: u ? void 0 : () => t.onSheet(g),
              children: [
                /* @__PURE__ */ o(S, { size: 18 }),
                /* @__PURE__ */ o("span", { children: k.text })
              ]
            },
            g.id
          );
        })
      ] }),
      /* @__PURE__ */ o(
        "button",
        {
          class: "home-hint" + (t.showHint ? " visible" : "") + (C.dark ? " ink-dark" : ""),
          "aria-label": d("ambient.home_hint"),
          style: m ? { color: C.color } : void 0,
          onClick: t.onHome,
          tabIndex: t.showHint ? 0 : -1,
          children: /* @__PURE__ */ o(ps, { size: 36, strokeWidth: 1.8 })
        }
      )
    ] }),
    u && /* @__PURE__ */ o("div", { class: "lock-ui", children: [
      /* @__PURE__ */ o("div", { class: "lock-top", children: [
        /* @__PURE__ */ o("span", { children: d("lock.hint") }),
        /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: l, children: d("common.done") })
      ] }),
      i && /* @__PURE__ */ o(ud, { kind: i, widgets: h, hasWeather: !!c, onClose: () => a("") })
    ] })
  ] });
}
const ad = ["thin", "light", "regular", "bold"], rd = ["contrast", "white", "accent", "warm", "mint", "sky", "rose"], cd = ["xs", "s", "m", "l", "xl"], ld = ["clock", "top", "bottom"], dd = ["auto", "above", "below"], Ad = ["auto", "corner", "center", "top"], hd = ["auto", "text", "icons"];
function ud(t) {
  const e = qa(), n = (i, a) => {
    const r = t.widgets.map((A) => A.id), c = i + a, h = r[i];
    r[i] = r[c], r[c] = h, me({ order: r });
  }, s = (i, a) => {
    const r = e.hidden.filter((c) => c !== i);
    me({ hidden: a ? r : r.concat(i) });
  };
  return /* @__PURE__ */ o("div", { class: "lock-panel", onClick: (i) => i.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "lock-panel-head", children: [
      /* @__PURE__ */ o("b", { children: t.kind === "clock" ? d("lock.clock") : d("lock.widgets") }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Fe, { size: 20 }) })
    ] }),
    t.kind === "clock" ? /* @__PURE__ */ o(ae, { children: [
      /* @__PURE__ */ o("div", { class: "lock-fonts", children: ad.map((i) => /* @__PURE__ */ o("button", { class: "lock-font" + (e.font === i ? " on" : ""), style: { fontWeight: La[i] }, onClick: () => me({ font: i }), children: "12" }, i)) }),
      /* @__PURE__ */ o("div", { class: "lock-colors", children: rd.map((i) => /* @__PURE__ */ o(
        "button",
        {
          title: d("lock.color." + i),
          class: "lock-color" + (e.color === i ? " on" : "") + (i === "accent" ? " accent-bg" : "") + (i === "contrast" ? " lock-color-contrast" : ""),
          style: i === "accent" || i === "contrast" ? void 0 : { background: Qa[i] },
          onClick: () => me({ color: i }),
          children: i === "contrast" ? /* @__PURE__ */ o("span", { children: "A" }) : null
        },
        i
      )) }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.size") }),
        /* @__PURE__ */ o("div", { class: "seg", children: cd.map((i) => /* @__PURE__ */ o("button", { class: e.size === i ? "active" : "", onClick: () => me({ size: i }), children: d("lock.size." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.layout") }),
        /* @__PURE__ */ o("select", { value: e.layout, onChange: (i) => me({ layout: i.currentTarget.value }), children: Ad.map((i) => /* @__PURE__ */ o("option", { value: i, children: d("lock.layout." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.date, onChange: (i) => me({ date: i.currentTarget.checked }) }),
        d("lock.date")
      ] }),
      e.date && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.date_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: dd.map((i) => /* @__PURE__ */ o("button", { class: e.datePos === i ? "active" : "", onClick: () => me({ datePos: i }), children: d("lock.date_pos." + i) }, i)) })
      ] }),
      t.hasWeather && /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.weather, onChange: (i) => me({ weather: i.currentTarget.checked }) }),
        d("lock.weather")
      ] })
    ] }) : /* @__PURE__ */ o(ae, { children: [
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.widgets_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: ld.map((i) => /* @__PURE__ */ o("button", { class: e.widgetsPos === i ? "active" : "", onClick: () => me({ widgetsPos: i }), children: d("lock.widgets_pos." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("lock.chip_style") }),
        /* @__PURE__ */ o("select", { value: e.chipStyle, onChange: (i) => me({ chipStyle: i.currentTarget.value }), children: hd.map((i) => /* @__PURE__ */ o("option", { value: i, children: d("lock.chip_style." + i) }, i)) })
      ] }),
      !t.widgets.length && /* @__PURE__ */ o("p", { class: "hint", children: d("lock.no_widgets") }),
      t.widgets.map((i, a) => {
        const r = Ne(i.icon);
        return /* @__PURE__ */ o("div", { class: "lock-widget", children: [
          /* @__PURE__ */ o("label", { class: "check", children: [
            /* @__PURE__ */ o("input", { type: "checkbox", checked: e.hidden.indexOf(i.id) === -1, onChange: (c) => s(i.id, c.currentTarget.checked) }),
            /* @__PURE__ */ o(r, { size: 16 }),
            /* @__PURE__ */ o("span", { children: i.title || st(i.type) })
          ] }),
          /* @__PURE__ */ o("button", { class: "icon-btn", disabled: a === 0, onClick: () => n(a, -1), children: /* @__PURE__ */ o(ps, { size: 18 }) }),
          /* @__PURE__ */ o("button", { class: "icon-btn", disabled: a === t.widgets.length - 1, onClick: () => n(a, 1), children: /* @__PURE__ */ o(Pc, { size: 18 }) })
        ] }, i.id);
      })
    ] })
  ] });
}
function po(t) {
  const [e, n] = _({ w: 0, h: 0 });
  return oo(() => {
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
const ze = 12, _t = 16, fd = 700, ei = 6, md = 44, pd = 84;
function ti(t) {
  const e = "touches" in t ? t.touches[0] || t.changedTouches[0] : t;
  return { x: e.clientX, y: e.clientY };
}
function gd({ editing: t, onCamera: e, onEdit: n }) {
  const s = U(), i = Ze(), a = ne(null), r = po(a), [c, h] = _(null), A = ne(null), f = i.state.layout.cards, u = r.w - _t * 2, l = r.h - _t * 2, m = r.w > 0 && u < fd, p = m ? Ve : He, v = m ? Or(f) : f, C = m ? f.filter((O) => O.m && O.m.hide) : [], M = (u - ze * (p - 1)) / p, g = M + ze, k = Math.max(1, Math.floor((l + ze) / g)), S = Math.max(0, (l - (k * g - ze)) / 2), I = (O) => ({ left: O.x * g, top: O.y * g, width: O.w * g - ze, height: O.h * g - ze }), E = (O, K, te) => {
    if (!t || "button" in O && O.button !== 0) return;
    O.stopPropagation();
    const x = ti(O), Q = { id: K.id, mode: te, x0: x.x, y0: x.y, orig: K, dx: 0, dy: 0, active: te === "resize", preview: v };
    A.current = Q, h(Q);
    const R = (F) => {
      const V = A.current;
      if (!V) return;
      const Y = ti(F), N = Y.x - V.x0, J = Y.y - V.y0, fe = V.active || Math.abs(N) > ei || Math.abs(J) > ei;
      if (!fe) return;
      F.cancelable && F.preventDefault();
      const G = V.orig, le = at(V.mode === "move" ? { ...G, x: G.x + N / g, y: G.y + J / g } : { ...G, w: G.w + N / g, h: G.h + J / g }, p), be = { ...V, dx: N, dy: J, active: fe, preview: Ie(v, le) };
      A.current = be, h(be);
    }, Z = () => {
      const F = A.current;
      A.current = null, h(null), window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", Z), document.removeEventListener("touchmove", R, { passive: !1 }), document.removeEventListener("touchend", Z), document.removeEventListener("touchcancel", Z), F && F.active && b(F.preview);
    };
    window.addEventListener("mousemove", R), window.addEventListener("mouseup", Z), document.addEventListener("touchmove", R, { passive: !1 }), document.addEventListener("touchend", Z), document.addEventListener("touchcancel", Z);
  }, b = (O) => i.saveLayout({ ...i.state.layout, cards: m ? mn(f, O) : O }), T = c && c.active ? c.preview : v, P = (O) => {
    if (!m) {
      i.saveLayout({ ...i.state.layout, cards: Ie(f.filter((x) => x.id !== O.id)) });
      return;
    }
    const K = v.filter((x) => x.id !== O.id), te = mn(f, Ie(K)).map((x) => x.id === O.id ? { ...x, m: { x: 0, y: 0, w: Ve, h: 3, hide: !0 } } : x);
    i.saveLayout({ ...i.state.layout, cards: te });
  }, B = (O) => {
    const te = mn(f, v).map((x) => x.id === O.id ? { ...x, m: { x: 0, y: Qn(v), w: Ve, h: 3 } } : x);
    i.saveLayout({ ...i.state.layout, cards: te });
  }, D = Qn(T), oe = t ? Math.max(k, D) : D, re = oe <= k ? S : 0;
  return /* @__PURE__ */ o("main", { class: "grid" + (t ? " editing" : "") + (c && c.active ? " dragging-card" : "") + (m ? " narrow" : ""), ref: a, children: [
    t && m && /* @__PURE__ */ o("div", { class: "grid-note", children: [
      /* @__PURE__ */ o("span", { children: d("grid.narrow_note") }),
      C.length > 0 && /* @__PURE__ */ o("div", { class: "hidden-cards", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: [
          /* @__PURE__ */ o(Ts, { size: 14 }),
          d("grid.hidden_on_phone")
        ] }),
        C.map((O) => /* @__PURE__ */ o("button", { class: "chip", onClick: () => B(O), children: [
          /* @__PURE__ */ o(je, { size: 14 }),
          /* @__PURE__ */ o("span", { children: mo(s, O) })
        ] }, O.id))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "grid-inner", style: { height: Math.max(0, oe * g - ze), margin: _t + re + "px " + _t + "px" }, children: [
      t && r.w > 0 && /* @__PURE__ */ o(bd, { rows: oe, cols: p, cell: M, step: g }),
      r.w > 0 && T.map((O) => {
        const K = !!c && c.active && c.id === O.id;
        let te = I(O);
        if (K && c) {
          const x = I(c.orig);
          te = c.mode === "move" ? { ...x, left: x.left + c.dx, top: x.top + c.dy } : { ...x, width: Math.max(M * 2, x.width + c.dx), height: Math.max(M * 2, x.height + c.dy) };
        }
        return /* @__PURE__ */ o("div", { children: [
          K && /* @__PURE__ */ o("div", { class: "drop-slot", style: I(O) }),
          /* @__PURE__ */ o(
            yd,
            {
              card: O,
              style: te,
              editing: t,
              dragged: K,
              onCamera: e,
              onEdit: n,
              onRemove: P,
              narrow: m,
              onStart: E,
              ha: s
            }
          )
        ] }, O.id);
      })
    ] })
  ] });
}
function bd({ rows: t, cols: e, cell: n, step: s }) {
  const i = [];
  for (let a = 0; a < t; a++)
    for (let r = 0; r < e; r++)
      i.push(/* @__PURE__ */ o("div", { class: "grid-dot", style: { left: r * s, top: a * s, width: n, height: n } }, a + ":" + r));
  return /* @__PURE__ */ o("div", { class: "grid-dots", children: i });
}
function yd({ card: t, style: e, editing: n, dragged: s, ha: i, onCamera: a, onEdit: r, onRemove: c, narrow: h, onStart: A }) {
  const f = t.color ? " tint-" + t.color : "";
  return /* @__PURE__ */ o(
    "div",
    {
      class: "cell" + f + (s ? " dragged" : ""),
      style: e,
      onMouseDown: A ? (u) => A(u, t, "move") : void 0,
      onTouchStart: A ? (u) => A(u, t, "move") : void 0,
      children: [
        /* @__PURE__ */ o(td, { title: mo(i, t), aside: !n && /* @__PURE__ */ o(Za, { card: t }), class: "card-" + t.type, children: /* @__PURE__ */ o("div", { class: "panel-body", children: /* @__PURE__ */ o(Ua, { card: t, onCamera: a, size: { w: e.width - md, h: e.height - pd } }) }) }),
        n && /* @__PURE__ */ o(ae, { children: [
          /* @__PURE__ */ o("button", { class: "badge-btn badge-del", onMouseDown: vt, onTouchStart: vt, onClick: () => c(t), title: d(h ? "grid.hide_on_phone" : "common.delete"), children: h ? /* @__PURE__ */ o(Ts, { size: 14 }) : /* @__PURE__ */ o(Fe, { size: 16 }) }),
          /* @__PURE__ */ o("button", { class: "badge-btn badge-edit", onMouseDown: vt, onTouchStart: vt, onClick: () => r(t), title: d("common.edit"), children: /* @__PURE__ */ o(na, { size: 14 }) }),
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
function vt(t) {
  t.stopPropagation();
}
const Zn = "photoframe.kiosk", Tt = [];
function Jn() {
  return Zn + ":" + (location.pathname.split("/")[1] || "lovelace");
}
function Xa() {
  try {
    const t = localStorage.getItem(Zn);
    return t !== null && (localStorage.setItem(Jn(), t), localStorage.removeItem(Zn)), localStorage.getItem(Jn()) || "";
  } catch {
    return "";
  }
}
function xd(t) {
  try {
    localStorage.setItem(Jn(), t);
  } catch {
  }
  Tt.forEach((e) => e());
}
function kd(t) {
  return Tt.push(t), () => {
    Tt.splice(Tt.indexOf(t), 1);
  };
}
function _d(t) {
  const e = new URLSearchParams(location.search);
  if (e.has("kiosk")) return e.get("kiosk") !== "0" && e.get("kiosk") !== "false";
  const n = Xa();
  return n ? n === "on" : t;
}
function Ke(t) {
  return t && t.shadowRoot ? t.shadowRoot : null;
}
const ni = "photoframe-kiosk";
let tt = !1;
const Ot = [];
function vd(t) {
  return Ot.push(t), () => {
    Ot.splice(Ot.indexOf(t), 1);
  };
}
function oi(t) {
  t !== tt && (tt = t, Ot.forEach((e) => e()));
}
function Sn(t, e, n) {
  if (!t || t.getElementById(ni)) return;
  const s = document.createElement("style");
  s.id = ni, s.textContent = e, t.appendChild(s), n.push(() => s.remove());
}
function wd() {
  const [t, e] = _(tt);
  return H(() => {
    const n = vd(() => e(tt));
    return e(tt), n;
  }, []), t;
}
function Cd() {
  history.pushState(null, "", "/"), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function Md() {
  const t = Ke(document.querySelector("home-assistant"))?.querySelector("home-assistant-main"), e = Ke(t);
  if (!e) return null;
  const n = e.querySelector("ha-panel-lovelace"), s = Ke(n)?.querySelector("hui-root"), i = Ke(s);
  if (!s || !i) return null;
  const a = [], r = (A, f, u) => {
    const l = A.style.getPropertyValue(f);
    A.style.setProperty(f, u), a.push(() => l ? A.style.setProperty(f, l) : A.style.removeProperty(f));
  }, c = e.querySelector("ha-drawer");
  [t, c].forEach((A) => {
    A && (r(A, "--ha-sidebar-width", "0px"), r(A, "--mdc-drawer-width", "0px"));
  }), Sn(e, ":host{--ha-sidebar-width:0px!important;--mdc-drawer-width:0px!important}ha-sidebar{display:none!important}", a), Sn(Ke(c), ".sidebar-shell,aside,.mdc-drawer{display:none!important;width:0!important}.app-content,.mdc-drawer-app-content{margin-left:0!important;margin-right:0!important;margin-inline-start:0!important;padding-left:0!important;padding-inline-start:0!important;width:100%!important}", a);
  const h = e.querySelector("ha-sidebar");
  if (h) {
    const A = h.style.display;
    h.style.display = "none", a.push(() => {
      h.style.display = A;
    });
  }
  return r(s, "--header-height", "0px"), Sn(i, ".header,app-header,.toolbar{display:none!important}#view{padding-top:0!important;min-height:100vh}", a), oi(!0), () => {
    a.splice(0).reverse().forEach((A) => A()), oi(!1);
  };
}
const ii = (t) => d("status." + t);
function Sd() {
  const t = Oa();
  return /* @__PURE__ */ o(ae, { children: [
    /* @__PURE__ */ o("span", { class: "bar-clock", children: Pa(t) }),
    /* @__PURE__ */ o("span", { class: "bar-date", children: Ha(t) })
  ] });
}
function Ed(t) {
  const { active: e, screen: n, screens: s } = $.state, i = s[e] || [], [a, r] = _("");
  return H(() => r(""), [n, t.editing]), i.length < 2 && !t.editing ? null : /* @__PURE__ */ o("div", { class: "screen-tabs", children: [
    i.map((c, h) => t.editing && c.id === n ? /* @__PURE__ */ o("span", { class: "screen-tab on editing", children: [
      h > 0 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => $.moveScreen(c.id, -1), children: /* @__PURE__ */ o(Hc, { size: 14 }) }),
      /* @__PURE__ */ o(
        "input",
        {
          value: c.name,
          placeholder: It(c, h),
          size: Math.max(6, (c.name || It(c, h)).length),
          onChange: (A) => $.renameScreen(c.id, A.currentTarget.value.trim())
        }
      ),
      h < i.length - 1 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => $.moveScreen(c.id, 1), children: /* @__PURE__ */ o(Lc, { size: 14 }) }),
      i.length > 1 && /* @__PURE__ */ o(
        "button",
        {
          class: "screen-del" + (a === c.id ? " sure" : ""),
          title: d("screen.delete"),
          onClick: () => a === c.id || !c.cards.length ? $.removeScreen(c.id) : r(c.id),
          children: a === c.id ? /* @__PURE__ */ o("span", { children: d("screen.delete_sure") }) : /* @__PURE__ */ o(dt, { size: 14 })
        }
      )
    ] }, c.id) : /* @__PURE__ */ o("button", { class: "screen-tab" + (c.id === n ? " on" : ""), onClick: () => $.setActive(e, c.id), children: It(c, h) }, c.id)),
    t.editing && /* @__PURE__ */ o("button", { class: "screen-tab add", onClick: () => $.addScreen(""), children: [
      /* @__PURE__ */ o(je, { size: 14 }),
      /* @__PURE__ */ o("span", { children: d("screen.add") })
    ] })
  ] });
}
function zd(t, e) {
  const n = ne(null), s = (a) => "touches" in a ? a.touches[0] || a.changedTouches[0] : a;
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
function Id(t) {
  const e = U(), n = t.homes.length > 1, s = wd(), i = t.homes.reduce((m, p) => m + ($.state.screens[p.id] || []).length, 0), a = zd(i > 1 && !t.editing, t.onStep), r = t.homes.filter((m) => m.id === t.active)[0];
  H(() => {
    !t.visible && t.editing && t.onEditing(!1);
  }, [t.visible]);
  const c = po(t.innerRef), h = c.w > 0 && c.w < 760, [A, f] = _(!1);
  H(() => {
    (!t.visible || !h) && f(!1);
  }, [t.visible, h]), H(() => {
    if (!A) return;
    const m = () => f(!1), p = window.setTimeout(() => document.addEventListener("click", m), 0);
    return () => {
      clearTimeout(p), document.removeEventListener("click", m);
    };
  }, [A]);
  const u = !$.card || $.card.canEdit, l = /* @__PURE__ */ o(ae, { children: [
    u && /* @__PURE__ */ o("button", { class: "round", onClick: () => t.onEditing(!0), title: d("controls.customize"), children: /* @__PURE__ */ o(na, { size: 18 }) }),
    /* @__PURE__ */ o("button", { class: "round", onClick: t.onSettings, title: d("controls.settings"), children: /* @__PURE__ */ o(ll, { size: 20 }) }),
    /* @__PURE__ */ o("button", { class: "round accent", onClick: t.onPhotos, title: d("controls.to_photos"), children: /* @__PURE__ */ o(Zc, { size: 20 }) })
  ] });
  return /* @__PURE__ */ o("div", { ref: t.innerRef, class: "controls" + (t.visible ? " visible" : ""), children: [
    /* @__PURE__ */ o("header", { class: "bar" + (h ? " bar-narrow" : "") + (A ? " menu-open" : "") + (t.editing ? " bar-editing" : ""), children: [
      /* @__PURE__ */ o("div", { class: "bar-time" + (s ? " clock-link" : ""), onClick: s ? Cd : void 0, children: /* @__PURE__ */ o(Sd, {}) }),
      n && /* @__PURE__ */ o("button", { class: "home-switch", onClick: () => t.onSwitchHome(1), title: d("controls.next_home"), children: [
        /* @__PURE__ */ o("span", { class: "home-name", children: r ? r.name : "" }),
        /* @__PURE__ */ o("span", { class: "home-dots", children: t.homes.map((m) => /* @__PURE__ */ o("i", { class: m.id === t.active ? "on" : "" }, m.id)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "bar-actions", children: t.editing ? /* @__PURE__ */ o(ae, { children: [
        /* @__PURE__ */ o("button", { class: "round", onClick: t.onAddCard, title: d("controls.add_card"), children: /* @__PURE__ */ o(je, { size: 20 }) }),
        /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: () => t.onEditing(!1), children: [
          /* @__PURE__ */ o(Oc, { size: 18 }),
          /* @__PURE__ */ o("span", { children: d("common.done") })
        ] })
      ] }) : h ? /* @__PURE__ */ o("div", { class: "burger", children: [
        /* @__PURE__ */ o("div", { class: "burger-items", children: l }),
        /* @__PURE__ */ o("button", { class: "round burger-btn conn-" + e.status, onClick: () => f(!A), title: ii(e.status), children: [
          A ? /* @__PURE__ */ o(Fe, { size: 20 }) : /* @__PURE__ */ o(nl, { size: 20 }),
          /* @__PURE__ */ o("i", { class: "burger-dot" })
        ] })
      ] }) : /* @__PURE__ */ o(ae, { children: [
        /* @__PURE__ */ o("span", { class: "conn conn-" + e.status, children: [
          /* @__PURE__ */ o("i", {}),
          ii(e.status)
        ] }),
        l
      ] }) })
    ] }),
    /* @__PURE__ */ o(Ed, { editing: t.editing }),
    /* @__PURE__ */ o("div", { class: "home-pane" + (t.slide ? " slide-" + t.slide : ""), ...a, children: /* @__PURE__ */ o(gd, { editing: t.editing, onCamera: t.onCamera, onEdit: t.onEditCard }) }, t.active + "/" + $.state.screen)
  ] });
}
function Ue(t) {
  return /* @__PURE__ */ o("div", { class: "modal", onClick: t.onClose, children: /* @__PURE__ */ o("div", { class: "modal-box" + (t.wide ? " modal-wide" : ""), onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "modal-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Fe, { size: 24 }) })
    ] }),
    t.children
  ] }) });
}
function Bd(t) {
  return /* @__PURE__ */ o(Ue, { title: d("camera.live_title"), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "cam-full", children: /* @__PURE__ */ o("img", { src: t.url, alt: "" }) }) });
}
const Dd = [5e3, 1e4, 3e4, 6e4], Td = [20, 45, 120, 0];
function Od() {
  const t = Jt(), e = $.state.screens[t] || [], n = Gt();
  return t + "/" + (e.some((s) => s.id === n) ? n : e[0] ? e[0].id : "");
}
function Pd() {
  const t = Ze(), [e, n] = _(!1), [s, i] = _(""), a = t.haLink;
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
function Hd() {
  const t = Ze(), e = t.migration, [n, s] = _(""), [i, a] = _(""), r = () => {
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
function Ld(t) {
  const e = Ze(), { settings: n, photos: s } = e.state, i = !!e.card && !e.card.standalone, a = !!e.card || !!Ut(), [r, c] = _("photos"), h = a ? r : "ha", [A, f] = _(n), [u, l] = _(!1), [m, p] = _(""), [v, C] = _(""), M = (y) => f({ ...A, ...y }), [g, k] = _(!1), [S, I] = _(""), [E, b] = _(""), T = (y, j) => {
    const de = Array.prototype.slice.call(y || []).filter((ge) => /^image\//.test(ge.type) || /\.(heic|heif)$/i.test(ge.name));
    j && (j.value = ""), de.length && (l(!0), I(""), b(""), e.addPhotos(de, (ge, pt) => b(pt > 1 ? ge + " / " + pt : ""), Z ? V : void 0).then(
      () => l(!1),
      (ge) => {
        l(!1), I(ge.message || String(ge));
      }
    ));
  }, [P, B] = _(Pi()), [D, oe] = _(Xa()), [re, O] = _(Ei()), [K, te] = _(Ft()), [x, Q] = _(lc()), R = Ut(), Z = !!e.card && e.card.integration, F = e.card && e.card.config.albums || [], [V, Y] = _(e.card && e.card.album && e.card.album !== "all" ? e.card.album : ""), [N, J] = _("");
  H(() => {
    e.card && e.card.mediaBrowserUrl(V).then(J, () => J(""));
  }, [V, !!e.card]);
  const [fe, G] = _(Zt()), [le, be] = _(e.state.homes), dn = JSON.stringify(le) !== JSON.stringify(e.state.homes), qe = (y, j) => be(le.map((de) => de.id === y ? { ...de, ...j } : de)), ft = () => {
    e.saveSettings(A), dn && e.saveHomes(le), t.onClose();
  }, mt = () => {
    try {
      const y = JSON.parse(m);
      if (!y || !Array.isArray(y.cards)) throw new Error(d("settings.no_cards_field"));
      e.saveLayout(y), C(""), p("");
    } catch (y) {
      C(d("settings.import_failed", { error: y.message }));
    }
  };
  return /* @__PURE__ */ o(Ue, { title: /* @__PURE__ */ o("span", { class: "modal-title", children: [
    /* @__PURE__ */ o(Uc, { size: 20, class: "accent-text" }),
    /* @__PURE__ */ o("span", { children: d("settings.title") })
  ] }), onClose: t.onClose, children: [
    a && /* @__PURE__ */ o("div", { class: "tabs", children: [
      /* @__PURE__ */ o("button", { class: h === "photos" ? "active" : "", onClick: () => c("photos"), children: d("settings.tab.photos") }),
      /* @__PURE__ */ o("button", { class: h === "homes" ? "active" : "", onClick: () => c("homes"), children: d("settings.tab.homes") }),
      /* @__PURE__ */ o("button", { class: h === "layout" ? "active" : "", onClick: () => c("layout"), children: d("settings.tab.layout") }),
      !i && /* @__PURE__ */ o("button", { class: h === "ha" ? "active" : "", onClick: () => c("ha"), children: "Home Assistant" })
    ] }),
    h === "photos" && /* @__PURE__ */ o("div", { children: [
      e.migration && /* @__PURE__ */ o(Hd, {}),
      /* @__PURE__ */ o("p", { class: "hint", children: e.card ? d("photos.card_hint", { folder: e.card.folder }) : d("photos.local_hint") }),
      /* @__PURE__ */ o(
        "label",
        {
          class: "drop-zone" + (u ? " busy" : "") + (g ? " over" : ""),
          onDragOver: (y) => {
            y.preventDefault(), k(!0);
          },
          onDragLeave: () => k(!1),
          onDrop: (y) => {
            y.preventDefault(), k(!1), u || T(y.dataTransfer && y.dataTransfer.files);
          },
          children: [
            /* @__PURE__ */ o("input", { type: "file", multiple: !0, accept: "image/*,.heic,.heif", onChange: (y) => T(y.currentTarget.files, y.currentTarget), disabled: u }),
            /* @__PURE__ */ o(Nc, { size: 40, class: "muted" }),
            /* @__PURE__ */ o("p", { class: "drop-title", children: u ? d("photos.uploading") + (E ? " " + E : "") : d("photos.pick") }),
            /* @__PURE__ */ o("p", { class: "hint small", children: d(Z ? "photos.formats_server" : "photos.formats") })
          ]
        }
      ),
      (S || e.photoError) && /* @__PURE__ */ o("div", { class: "c-red small upload-error", children: S || e.photoError }),
      Z && F.length > 0 && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("photos.album") }),
        /* @__PURE__ */ o("select", { value: V, onChange: (y) => Y(y.currentTarget.value), children: [
          /* @__PURE__ */ o("option", { value: "", children: d("photos.album_root") }),
          F.map((y) => /* @__PURE__ */ o("option", { value: y, children: y }, y))
        ] })
      ] }),
      e.card && /* @__PURE__ */ o("div", { class: "photos-count", children: [
        /* @__PURE__ */ o("span", { children: d("photos.count", { n: s.length }) }),
        N && /* @__PURE__ */ o("a", { href: N, target: "_blank", rel: "noopener", children: d("photos.open_media") })
      ] }),
      !e.card && s.length > 0 && /* @__PURE__ */ o("div", { class: "thumbs thumbs-small", children: s.map((y) => /* @__PURE__ */ o("div", { class: "thumb", style: { backgroundImage: "url(" + y.url + ")" }, children: /* @__PURE__ */ o("button", { class: "thumb-del", onClick: () => e.deletePhoto(y.id), children: /* @__PURE__ */ o(Fe, { size: 14 }) }) }, y.id)) }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("settings.slide_interval") }),
        /* @__PURE__ */ o("select", { value: A.slideIntervalMs, onChange: (y) => M({ slideIntervalMs: +y.currentTarget.value }), children: Dd.map((y) => /* @__PURE__ */ o("option", { value: y, children: d("settings.interval." + y) }, y)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("settings.idle_return") }),
        /* @__PURE__ */ o("select", { value: A.idleSec, onChange: (y) => M({ idleSec: +y.currentTarget.value }), children: Td.map((y) => /* @__PURE__ */ o("option", { value: y, children: d("settings.idle." + y) }, y)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("settings.language") }),
        /* @__PURE__ */ o("select", { value: P, onChange: (y) => {
          B(y.currentTarget.value), Er(y.currentTarget.value), rn();
        }, children: [
          /* @__PURE__ */ o("option", { value: "", children: d("settings.language_auto") }),
          Sr().map((y) => /* @__PURE__ */ o("option", { value: y.code, children: y.name }, y.code))
        ] })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("settings.quality") }),
        /* @__PURE__ */ o("select", { value: re, onChange: (y) => {
          const j = y.currentTarget.value;
          O(j), fr(j);
        }, children: [
          /* @__PURE__ */ o("option", { value: "auto", children: d("settings.quality_auto", { mode: d(zi() === "lite" ? "settings.quality_lite" : "settings.quality_full") }) }),
          /* @__PURE__ */ o("option", { value: "full", children: d("settings.quality_full") }),
          /* @__PURE__ */ o("option", { value: "lite", children: d("settings.quality_lite") })
        ] })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("settings.fit") }),
        /* @__PURE__ */ o("select", { value: K, onChange: (y) => {
          const j = y.currentTarget.value;
          te(j), xr(j);
        }, children: [
          /* @__PURE__ */ o("option", { value: "auto", children: d("settings.fit_auto") }),
          /* @__PURE__ */ o("option", { value: "contain", children: d("settings.fit_contain") }),
          /* @__PURE__ */ o("option", { value: "cover", children: d("settings.fit_cover") })
        ] })
      ] }),
      x !== null && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("settings.autostart") }),
        /* @__PURE__ */ o("select", { value: x ? "on" : "off", onChange: (y) => {
          const j = y.currentTarget.value === "on";
          Q(j), dc(j);
        }, children: [
          /* @__PURE__ */ o("option", { value: "on", children: d("settings.autostart_on") }),
          /* @__PURE__ */ o("option", { value: "off", children: d("settings.autostart_off") })
        ] })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: [
          d("lock.title"),
          /* @__PURE__ */ o("small", { class: "option-hint", children: d("lock.long_press") })
        ] }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: t.onCustomize, children: d("lock.customize") })
      ] }),
      i && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("settings.kiosk") }),
        /* @__PURE__ */ o("select", { value: D, onChange: (y) => {
          const j = y.currentTarget.value;
          oe(j), xd(j);
        }, children: [
          /* @__PURE__ */ o("option", { value: "", children: d("settings.kiosk_auto") }),
          /* @__PURE__ */ o("option", { value: "on", children: d("settings.kiosk_on") }),
          /* @__PURE__ */ o("option", { value: "off", children: d("settings.kiosk_off") })
        ] })
      ] })
    ] }),
    h === "ha" && i && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("p", { class: "hint", children: d("ha.card_hint") }) }),
    h === "ha" && !i && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("div", { class: "auth", children: [
        /* @__PURE__ */ o("div", { class: "auth-title", children: d("ha.auth") }),
        /* @__PURE__ */ o("label", { class: "field", children: [
          /* @__PURE__ */ o("span", { children: d("ha.url") }),
          /* @__PURE__ */ o("input", { value: A.haUrl, placeholder: R ? R.hassUrl : location.protocol + "//" + location.host, onInput: (y) => M({ haUrl: y.currentTarget.value.trim() }) })
        ] }),
        R ? /* @__PURE__ */ o("div", { class: "auth-session", children: [
          /* @__PURE__ */ o("span", { children: d("ha.logged_in", { url: R.hassUrl }) }),
          !R.embedded && /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
            Vr(), location.reload();
          }, children: [
            /* @__PURE__ */ o(tl, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("ha.logout") })
          ] })
        ] }) : /* @__PURE__ */ o("button", { class: "btn btn-ghost btn-login", onClick: () => {
          e.saveSettings(A), Ur(A.haUrl);
        }, children: [
          /* @__PURE__ */ o(el, { size: 16 }),
          /* @__PURE__ */ o("span", { children: d("ha.login") })
        ] }),
        /* @__PURE__ */ o("p", { class: "hint", children: d("ha.local_hint") })
      ] }),
      /* @__PURE__ */ o(Pd, {}),
      e.frameClient && /* @__PURE__ */ o("label", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: d("frame.name") }),
        /* @__PURE__ */ o(
          "input",
          {
            value: fe,
            placeholder: d("frame.name_placeholder"),
            onInput: (y) => G(y.currentTarget.value),
            onChange: (y) => e.renameFrame(y.currentTarget.value.trim())
          }
        ),
        /* @__PURE__ */ o("small", { class: "option-hint", children: d("frame.hint") })
      ] })
    ] }),
    h === "homes" && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("p", { class: "hint", children: d("homes.hint") + (e.card ? d("homes.card_hint") : "") }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: d("screen.start") }),
        /* @__PURE__ */ o("select", { value: Od(), onChange: (y) => {
          const j = y.currentTarget.value.split("/");
          e.setStart(j[0], j[1]);
        }, children: e.state.homes.map((y) => (e.state.screens[y.id] || []).map((j, de) => /* @__PURE__ */ o("option", { value: y.id + "/" + j.id, children: (e.state.homes.length > 1 ? y.name + " · " : "") + It(j, de) }, y.id + "/" + j.id))) })
      ] }),
      le.map((y) => /* @__PURE__ */ o("div", { class: "home-row", children: /* @__PURE__ */ o("div", { class: "home-row-head", children: [
        /* @__PURE__ */ o("input", { class: "home-input", value: y.name, onInput: (j) => qe(y.id, { name: j.currentTarget.value }) }),
        y.id !== ce && /* @__PURE__ */ o("button", { class: "icon-btn danger", title: d("homes.delete"), onClick: () => be(le.filter((j) => j.id !== y.id)), children: /* @__PURE__ */ o(dt, { size: 16 }) })
      ] }) }, y.id)),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => be(le.concat({ id: "h" + Date.now().toString(36), name: d("homes.new_name") })), children: /* @__PURE__ */ o("span", { children: d("homes.add") }) })
    ] }),
    h === "layout" && /* @__PURE__ */ o("div", { children: [
      e.card && e.cardError && /* @__PURE__ */ o("div", { class: "c-red small", children: d("sync.save_failed", { error: e.cardError }) }),
      /* @__PURE__ */ o("div", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: d("layout.title") }),
        /* @__PURE__ */ o("div", { class: "row-btns", children: [
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
            p(JSON.stringify(e.state.layout, null, 2)), C("");
          }, children: [
            /* @__PURE__ */ o(Rc, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("layout.export") })
          ] }),
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => e.saveLayout(ji()), children: [
            /* @__PURE__ */ o(rl, { size: 14 }),
            /* @__PURE__ */ o("span", { children: d("layout.reset") })
          ] })
        ] }),
        /* @__PURE__ */ o("textarea", { class: "json", value: m, placeholder: d("layout.import_placeholder"), onInput: (y) => p(y.currentTarget.value) }),
        v && /* @__PURE__ */ o("div", { class: "c-red small", children: v }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !m, onClick: mt, children: /* @__PURE__ */ o("span", { children: d("layout.import") }) })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      h === "photos" && !e.card && s.length > 0 ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: () => e.clearPhotos(), children: [
        /* @__PURE__ */ o(dt, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("photos.delete_all") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: ft, children: d("common.done") })
    ] })
  ] });
}
function Qd(t) {
  const e = Object.keys(Rt);
  return /* @__PURE__ */ o(Ue, { title: d("editor.new_card"), onClose: t.onClose, children: /* @__PURE__ */ o("div", { class: "type-list", children: e.map((n) => {
    const s = Rt[n], i = Ne(s.icon);
    return /* @__PURE__ */ o("button", { class: "type-row", onClick: () => t.onPick({
      // Новая карточка встаёт в конец сетки; settle при сохранении поднимет её на свободное место.
      id: Br(),
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
        /* @__PURE__ */ o("b", { children: st(n) }),
        /* @__PURE__ */ o("small", { children: Li(n) })
      ] }),
      /* @__PURE__ */ o(je, { size: 18 })
    ] }, n);
  }) }) });
}
function jd(t) {
  const e = U(), [n, s] = _(""), [i, a] = _(!1), [r, c] = _(t.cardType ? "devices" : "entities"), h = n.toLowerCase(), A = Object.keys(e.states).filter((l) => {
    if (t.exclude.indexOf(l) !== -1 || !i && !Pe(e, l) || !i && t.domains.indexOf(l.split(".")[0]) === -1 || !i && t.match && !t.match(e.states[l])) return !1;
    if (!h) return !0;
    const m = String(e.states[l].attributes.friendly_name || "").toLowerCase();
    return l.indexOf(h) !== -1 || m.indexOf(h) !== -1;
  }).sort().slice(0, 150), f = t.cardType, u = f ? Object.keys(e.devices).map((l) => e.devices[l]).map((l) => ({
    dev: l,
    fit: l.entities.filter((m) => e.registry[m] && e.registry[m].ec == null && Pe(e, m) && fo(f, e.states[m]))
  })).filter((l) => l.fit.length && (t.excludeDevices || []).indexOf(l.dev.id) === -1 && (!h || l.dev.name.toLowerCase().indexOf(h) !== -1)).sort((l, m) => l.dev.name.localeCompare(m.dev.name)) : [];
  return /* @__PURE__ */ o("div", { class: "picker", children: [
    f && /* @__PURE__ */ o("div", { class: "seg seg-wide picker-mode", children: [
      /* @__PURE__ */ o("button", { class: r === "devices" ? "active" : "", onClick: () => c("devices"), children: d("editor.devices") }),
      /* @__PURE__ */ o("button", { class: r === "entities" ? "active" : "", onClick: () => c("entities"), children: d("editor.entities") })
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-search", children: [
      /* @__PURE__ */ o(cl, { size: 16 }),
      /* @__PURE__ */ o("input", { placeholder: d(r === "devices" ? "editor.search_device" : "editor.search_entity"), value: n, onInput: (l) => s(l.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Fe, { size: 18 }) })
    ] }),
    r === "entities" && /* @__PURE__ */ o("label", { class: "check", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: i, onChange: (l) => a(l.currentTarget.checked) }),
      " ",
      d("editor.show_all")
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-list", children: r === "devices" ? /* @__PURE__ */ o(ae, { children: [
      u.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: Object.keys(e.devices).length ? d("editor.no_devices") : d("editor.loading_devices") }),
      u.map(({ dev: l, fit: m }) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPickDevice && t.onPickDevice(l.id, m[0]), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: l.name || m[0] }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: d("editor.count", { n: m.length }) }),
        /* @__PURE__ */ o("span", { class: "picker-id", children: m.slice(0, 4).map((p) => e.registry[p].en || e.states[p].attributes.friendly_name).join(" · ") })
      ] }, l.id))
    ] }) : /* @__PURE__ */ o(ae, { children: [
      A.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: d("editor.nothing_found") }),
      A.map((l) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPick(l), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: e.states[l].attributes.friendly_name || l }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: e.states[l].state + (isNaN(parseFloat(e.states[l].state)) ? "" : Nt(e, l)) }),
        /* @__PURE__ */ o("span", { class: "picker-id mono", children: l })
      ] }, l))
    ] }) })
  ] });
}
const Fd = ["cover", "width", "height"], Nd = [[2, 2], [3, 3], [4, 3], [6, 3], [3, 6], [6, 6], [12, 3]];
function qd(t) {
  const e = U(), [n, s] = _(t.card), [i, a] = _(null), r = Rt[n.type], c = (u) => s({ ...n, ...u }), h = (u, l) => c({ items: n.items.map((m, p) => p === u ? { ...m, ...l } : m) }), A = (u, l) => {
    const m = u + l;
    if (m < 0 || m >= n.items.length) return;
    const p = n.items.slice();
    p[u] = n.items[m], p[m] = n.items[u], c({ items: p });
  }, f = Object.keys(en);
  return /* @__PURE__ */ o(Ue, { title: d("editor.card_title", { type: st(n.type) }), onClose: t.onClose, children: [
    /* @__PURE__ */ o("label", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.name") }),
      /* @__PURE__ */ o("input", { value: n.title, placeholder: st(n.type), onInput: (u) => c({ title: u.currentTarget.value }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.size") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: Nd.map(([u, l]) => /* @__PURE__ */ o("button", { class: n.w === u && n.h === l ? "active" : "", onClick: () => c({ w: u, h: l }), children: [
        u,
        "×",
        l
      ] }, u + "x" + l)) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.color") }),
      /* @__PURE__ */ o("div", { class: "swatches", children: [
        /* @__PURE__ */ o("button", { class: "swatch swatch-auto" + (n.color ? "" : " active"), onClick: () => c({ color: void 0 }), title: d("editor.color_auto"), children: "A" }),
        Object.keys(et).map((u) => /* @__PURE__ */ o("button", { class: "swatch" + (n.color === u ? " active" : ""), style: { background: et[u] }, onClick: () => c({ color: u }) }, u))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.icon") }),
      /* @__PURE__ */ o("div", { class: "icon-grid", children: f.map((u) => {
        const l = en[u];
        return /* @__PURE__ */ o("button", { class: n.icon === u ? "active" : "", onClick: () => c({ icon: u }), children: /* @__PURE__ */ o(l, { size: 18 }) }, u);
      }) })
    ] }),
    n.type === "cameras" && /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.camera_picture") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: Fd.map((u) => /* @__PURE__ */ o("button", { class: (n.fit || "cover") === u ? "active" : "", onClick: () => c({ fit: u }), children: d("editor.fit." + u) }, u)) })
    ] }),
    n.type !== "cameras" && n.type !== "scenes" && /* @__PURE__ */ o("label", { class: "check check-row", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: !!n.chip, onChange: (u) => c({ chip: u.currentTarget.checked }) }),
      n.type === "weather" ? d("editor.weather_on_photo") : d("editor.chip_on_photo")
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: d("editor.items", { n: n.items.length, hint: Li(n.type).toLowerCase() }) }),
      i === null ? /* @__PURE__ */ o("div", { class: "items", children: [
        n.items.map((u, l) => {
          const m = Ne(u.icon || uo(u.entity, e.states[u.entity] && e.states[u.entity].attributes.device_class));
          return /* @__PURE__ */ o("div", { class: "item-block", children: [
            /* @__PURE__ */ o("div", { class: "item-row", children: [
              /* @__PURE__ */ o("button", { class: "item-icon", title: d("editor.change_icon"), onClick: () => {
                const p = f.indexOf(u.icon || "");
                h(l, { icon: f[(p + 1) % f.length] });
              }, children: /* @__PURE__ */ o(m, { size: 18 }) }),
              /* @__PURE__ */ o("div", { class: "item-main", children: [
                /* @__PURE__ */ o("input", { value: u.name || "", placeholder: u.device ? e.devices[u.device] ? e.devices[u.device].name : d("editor.device") : ue(e, { entity: u.entity }), onInput: (p) => h(l, { name: p.currentTarget.value || void 0 }) }),
                u.device ? /* @__PURE__ */ o("span", { class: "mono", children: d("editor.device") }) : /* @__PURE__ */ o("span", { class: "mono", children: [
                  u.entity,
                  !Pe(e, u.entity) && /* @__PURE__ */ o("em", { class: "na-tag", children: [
                    " · ",
                    d("editor.unavailable")
                  ] })
                ] }),
                n.type === "climate" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "hum" }), children: [
                  /* @__PURE__ */ o(Le, { size: 12 }),
                  u.hum ? u.hum : d("editor.add_humidity")
                ] }),
                n.type === "ac" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "temp" }), children: [
                  /* @__PURE__ */ o(_a, { size: 12 }),
                  u.temp ? u.temp : d("editor.room_sensor")
                ] })
              ] }),
              /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => A(l, -1), children: /* @__PURE__ */ o(rs, { size: 16 }) }),
              /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => A(l, 1), children: /* @__PURE__ */ o(ss, { size: 16 }) }),
              /* @__PURE__ */ o("button", { class: "icon-btn danger", onClick: () => c({ items: n.items.filter((p, v) => v !== l) }), children: /* @__PURE__ */ o(dt, { size: 16 }) })
            ] }),
            u.device && /* @__PURE__ */ o(Rd, { it: u, type: n.type, onChange: (p) => h(l, p) })
          ] }, u.entity + l);
        }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => a("add"), children: [
          /* @__PURE__ */ o(je, { size: 16 }),
          /* @__PURE__ */ o("span", { children: n.type === "weather" && !n.items.length ? d("editor.pick_forecast") : d("editor.add_device") })
        ] })
      ] }) : /* @__PURE__ */ o(
        jd,
        {
          domains: i === "add" ? r.domains : ["sensor"],
          match: i !== "add" ? (u) => u.attributes.device_class === (i.field === "hum" ? "humidity" : "temperature") : (u) => fo(n.type, u),
          exclude: n.items.map((u) => u.entity),
          cardType: i === "add" ? n.type : void 0,
          excludeDevices: n.items.map((u) => u.device || "").filter(Boolean),
          onPickDevice: (u, l) => {
            c({ items: n.items.concat({ entity: l, device: u }) }), a(null);
          },
          onClose: () => a(null),
          onPick: (u) => {
            i === "add" ? c({ items: n.items.concat({ entity: u }) }) : h(i.index, { [i.field]: u }), a(null);
          }
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      t.onDelete ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: t.onDelete, children: [
        /* @__PURE__ */ o(dt, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("common.delete") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: () => t.onSave(n), children: d("common.save") })
    ] })
  ] });
}
function Rd(t) {
  const e = U(), n = t.it, s = n.skip || [], i = n.names || {}, a = Wa(e, t.type, { ...n, skip: [], names: {} });
  if (!a.length) return /* @__PURE__ */ o("span", { class: "mono", children: d("editor.no_matching") });
  const r = a.map((f) => f.entity), c = (f, u) => {
    const l = r.slice(), m = l[f];
    l[f] = l[f + u], l[f + u] = m, t.onChange({ order: l });
  }, h = (f, u) => {
    const l = { ...i };
    u ? l[f] = u : delete l[f], t.onChange({ names: Object.keys(l).length ? l : void 0 });
  }, A = (f, u) => {
    const l = u ? s.filter((m) => m !== f) : s.concat(f);
    t.onChange({ skip: l.length ? l : void 0 });
  };
  return /* @__PURE__ */ o("div", { class: "device-parts", children: a.map((f, u) => {
    const l = s.indexOf(f.entity) === -1;
    return /* @__PURE__ */ o("div", { class: "device-part" + (l ? "" : " off"), children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: l, title: d(l ? "editor.part_hide" : "editor.part_show"), onChange: (m) => A(f.entity, m.currentTarget.checked) }),
      /* @__PURE__ */ o("input", { class: "part-name", value: i[f.entity] || "", placeholder: f.name || f.entity, onInput: (m) => h(f.entity, m.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: u === 0, onClick: () => c(u, -1), children: /* @__PURE__ */ o(rs, { size: 14 }) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: u === a.length - 1, onClick: () => c(u, 1), children: /* @__PURE__ */ o(ss, { size: 14 }) })
    ] }, f.entity);
  }) });
}
function Vd({ thumb: t, sheet: e }) {
  const [n, s] = _({ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }), [i, a] = _(t ? [t] : []);
  oo(() => {
    if (!e) return;
    const c = () => s({ x: e.offsetLeft, y: e.offsetTop, w: window.innerWidth, h: window.innerHeight });
    return c(), window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, [e]), H(() => {
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
function Wd({ card: t, tone: e, onCamera: n, onClose: s }) {
  const i = U(), a = ne(null), [r, c] = _(null);
  oo(() => {
    c(a.current);
  }, []);
  const h = ["switches", "scenes", "cameras", "ac", "speakers", "tv", "weather"].indexOf(t.type) !== -1;
  return /* @__PURE__ */ o("div", { class: "sheet-layer", onClick: s, children: /* @__PURE__ */ o("div", { ref: a, class: "sheet sheet-" + t.type + (h ? " sheet-wide" : "") + (t.color ? " tint-" + t.color : ""), onClick: (A) => A.stopPropagation(), children: [
    /* @__PURE__ */ o(Vd, { thumb: e ? e.thumb : void 0, sheet: r }),
    /* @__PURE__ */ o("div", { class: "sheet-inner", children: [
      /* @__PURE__ */ o("div", { class: "panel-head", children: [
        /* @__PURE__ */ o("h2", { children: mo(i, t) }),
        /* @__PURE__ */ o("div", { class: "sheet-actions", children: [
          /* @__PURE__ */ o(Za, { card: t }),
          /* @__PURE__ */ o("button", { class: "sheet-close", onClick: s, children: /* @__PURE__ */ o(Fe, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ o(Ua, { card: t, size: { w: h ? 600 : 420, h: 600 }, onCamera: n })
    ] })
  ] }) });
}
const Ka = 36e5, Pt = 24 * Ka, $a = { "24h": Pt, "7d": 7 * Pt, "30d": 30 * Pt }, Yd = ["binary_sensor", "switch", "light", "input_boolean", "fan", "lock", "cover", "media_player"], Ud = ["on", "open", "unlocked", "playing", "home"];
function er(t) {
  if (!t) return "line";
  if (Yd.indexOf(t.entity_id.split(".")[0]) !== -1) return "timeline";
  const e = t.attributes.state_class;
  return e === "total" || e === "total_increasing" ? "bars" : isNaN(parseFloat(t.state)) ? "timeline" : "line";
}
function nn(t) {
  return new Date(t).toISOString();
}
function si(t) {
  return typeof t == "number" ? t : Date.parse(t);
}
function En(t, e, n, s) {
  return t.call({
    type: "history/history_during_period",
    start_time: nn(n),
    end_time: nn(s),
    entity_ids: [e],
    minimal_response: !0,
    no_attributes: !0
  }).then((i) => (i[e] || []).map((a) => ({ s: a.s, t: (a.lu || a.lc || 0) * 1e3 || n })));
}
function ai(t, e, n, s, i, a) {
  return t.call({
    type: "recorder/statistics_during_period",
    start_time: nn(n),
    end_time: nn(s),
    statistic_ids: [e],
    period: i,
    types: a
  }).then((r) => r[e] || []);
}
function ri(t) {
  const e = [];
  return t.forEach((n) => {
    const s = parseFloat(n.s);
    isNaN(s) || e.push({ t: n.t, v: s });
  }), e;
}
function Zd(t, e, n) {
  const s = e.entity_id, i = er(e), a = Date.now(), r = a - $a[n], c = { kind: i, from: r, to: a, points: [], segments: [], bucketMs: 0 };
  if (i === "timeline")
    return En(t, s, r, a).then((h) => {
      const A = h.map((f, u) => ({
        from: Math.max(r, f.t),
        to: u + 1 < h.length ? h[u + 1].t : a,
        on: f.s === "unavailable" || f.s === "unknown" ? null : Ud.indexOf(f.s) !== -1
      }));
      return { ...c, segments: A };
    });
  if (i === "bars") {
    const h = n === "24h" ? "hour" : "day";
    return ai(t, s, r, a, h, ["change"]).then((A) => ({
      ...c,
      bucketMs: h === "hour" ? Ka : Pt,
      points: A.filter((f) => f.change != null).map((f) => ({ t: si(f.start), v: f.change }))
    }));
  }
  return n === "24h" ? En(t, s, r, a).then((h) => ({ ...c, points: ri(h) })) : ai(t, s, r, a, n === "7d" ? "hour" : "day", ["mean", "min", "max"]).then((h) => {
    const A = h.filter((f) => f.mean != null).map((f) => ({ t: si(f.start), v: f.mean, min: f.min == null ? void 0 : f.min, max: f.max == null ? void 0 : f.max }));
    return A.length ? { ...c, points: A } : En(t, s, r, a).then((f) => ({ ...c, points: ri(f) }));
  });
}
function Jd(t) {
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
function Gd(t, e) {
  const n = t.registry[e], s = n && n.di ? t.devices[n.di] : void 0;
  return s ? Promise.resolve(s.entities.filter((i) => i !== e && t.registry[i].ec == null)) : Promise.resolve([]);
}
const Xd = ["24h", "7d", "30d"], Kd = ["switch", "light", "fan", "input_boolean"];
function zn(t, e) {
  const n = t.states[e];
  return String(n && n.attributes.friendly_name || e);
}
function $d(t) {
  if (t.length < 2) return t;
  const e = t.map((s) => s.split(" "));
  let n = 0;
  for (; e.every((s) => s.length > n + 1 && s[n] === e[0][n]); ) n++;
  return e.map((s) => s.slice(n).join(" "));
}
function eA(t) {
  const e = Math.round(t / 6e4), n = Math.floor(e / 1440), s = Math.floor(e % 1440 / 60), i = e % 60;
  return [n ? d("duration.days", { n }) : "", s || n ? d("duration.hours", { n: s }) : "", n ? "" : d("duration.minutes", { n: i })].filter(Boolean).join(" ");
}
function tA({ entity: t }) {
  const e = U(), [n, s] = _(!1);
  H(() => {
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
    /* @__PURE__ */ o(lt, { size: 16 }),
    /* @__PURE__ */ o("span", { children: d(n ? "detail.confirm_off" : i ? "common.turn_off" : "common.turn_on") })
  ] });
}
function Ae(t) {
  return /* @__PURE__ */ o("div", { class: "stat", children: [
    /* @__PURE__ */ o("div", { class: "stat-label", children: t.label }),
    /* @__PURE__ */ o("div", { class: "stat-value", children: t.value }),
    t.note && /* @__PURE__ */ o("div", { class: "stat-note", children: t.note })
  ] });
}
function nA({ series: t, sum: e, unit: n, range: s, current: i }) {
  const a = n ? " " + n : "";
  if (t.kind === "timeline") {
    const r = t.to - t.from;
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(Ae, { label: d("stat.now"), value: i }),
      /* @__PURE__ */ o(Ae, { label: d("stat.turned_on"), value: String(e.onCount || 0), note: d("stat.times") }),
      /* @__PURE__ */ o(Ae, { label: d("stat.on_time"), value: eA(e.onMs || 0) }),
      /* @__PURE__ */ o(Ae, { label: d("stat.on_share"), value: Math.round((e.onMs || 0) / r * 100) + "%" })
    ] });
  }
  if (t.kind === "bars") {
    const r = t.bucketMs >= 864e5 ? d("stat.avg_per_day") : d("stat.avg_per_hour");
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(Ae, { label: d("stat.total"), value: e.total != null ? ee(e.total) + a : "—" }),
      /* @__PURE__ */ o(Ae, { label: r, value: e.avg != null ? ee(e.avg) + a : "—" }),
      /* @__PURE__ */ o(
        Ae,
        {
          label: d("stat.peak"),
          value: e.peak ? ee(e.peak.v) + a : "—",
          note: e.peak ? t.bucketMs >= 864e5 ? At(e.peak.t) : Qe(e.peak.t) : void 0
        }
      ),
      /* @__PURE__ */ o(Ae, { label: d("stat.counter_now"), value: i })
    ] });
  }
  return /* @__PURE__ */ o("div", { class: "stats", children: [
    /* @__PURE__ */ o(Ae, { label: d("stat.now"), value: i }),
    /* @__PURE__ */ o(Ae, { label: d("stat.min"), value: e.min ? ee(e.min.v) + a : "—", note: e.min ? Me(e.min.t, s) : void 0 }),
    /* @__PURE__ */ o(Ae, { label: d("stat.max"), value: e.max ? ee(e.max.v) + a : "—", note: e.max ? Me(e.max.t, s) : void 0 }),
    /* @__PURE__ */ o(Ae, { label: d("stat.avg"), value: e.avg != null ? ee(e.avg) + a : "—" })
  ] });
}
function oA({ series: t, unit: e, range: n }) {
  const s = t.kind === "timeline" ? t.segments.slice().reverse().slice(0, 60).map((a) => [Me(a.from, n), a.on ? d("switch.on") : a.on === null ? d("chart.no_connection") : d("switch.off"), "—"]) : t.points.slice().reverse().slice(0, 60).map((a) => [
    t.kind === "bars" && t.bucketMs >= 864e5 ? At(a.t) : Me(a.t, n),
    ee(a.v) + (e ? " " + e : ""),
    a.min != null && a.max != null ? ee(a.min) + " … " + ee(a.max) : "—"
  ]), i = t.kind === "line" && t.points.some((a) => a.min != null);
  return /* @__PURE__ */ o("div", { class: "table-wrap", children: /* @__PURE__ */ o("table", { class: "diag", children: /* @__PURE__ */ o("tbody", { children: s.map((a, r) => /* @__PURE__ */ o("tr", { children: [
    /* @__PURE__ */ o("td", { children: a[0] }),
    /* @__PURE__ */ o("td", { class: "strong", children: a[1] }),
    i && /* @__PURE__ */ o("td", { class: "muted", children: a[2] })
  ] }, r)) }) }) });
}
function iA(t) {
  const e = U(), [n, s] = _(t.entities[0]), [i, a] = _("24h"), [r, c] = _(null), [h, A] = _(""), [f, u] = _([]), [l, m] = _(!1), p = ne(null), v = po(p).w || 600, C = e.states[n], M = Nt(e, n).trim(), g = er(C);
  H(() => {
    Gd(e, t.entities[0]).then((b) => u(b.filter((T) => !!e.states[T])), () => {
    });
  }, [t.entities[0]]), H(() => {
    if (!C) return;
    let b = !0;
    return c(null), A(""), Zd(e, C, i).then(
      (T) => {
        b && c(T);
      },
      (T) => {
        b && A(T.message);
      }
    ), () => {
      b = !1;
    };
  }, [n, i, e.status]);
  const k = t.entities.concat(f.filter((b) => t.entities.indexOf(b) === -1)).filter((b) => b === n || Pe(e, b)), S = $d(k.map((b) => zn(e, b))), I = !C || ot(C.state) ? d("sensor.no_data") : g === "timeline" ? C.state === "on" ? d("switch.on") : C.state === "off" ? d("switch.off") : C.state : ee(parseFloat(C.state)) + (M ? " " + M : ""), E = n.split(".")[0];
  return E === "weather" ? /* @__PURE__ */ o(Ue, { title: zn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: p, children: /* @__PURE__ */ o(Va, { card: { id: "detail", type: "weather", title: "", x: 0, y: 0, w: 6, h: 6, items: [{ entity: n }] }, size: { w: v, h: 560 } }) }) }) : /* @__PURE__ */ o(Ue, { title: zn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: p, children: [
    /* @__PURE__ */ o("div", { class: "detail-hero", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ o("div", { class: "hero-value", children: I }),
        C && /* @__PURE__ */ o("div", { class: "muted small", children: d("detail.updated", { when: Me(Date.parse(C.last_changed || "") || Date.now(), "7d") }) })
      ] }),
      Kd.indexOf(E) !== -1 && C && /* @__PURE__ */ o(tA, { entity: n }, n)
    ] }),
    k.length > 1 && /* @__PURE__ */ o("div", { class: "chips", children: k.map((b, T) => {
      const P = e.states[b], B = !P || ot(P.state) ? "—" : isNaN(parseFloat(P.state)) ? P.state === "on" ? d("chip.state_on") : P.state === "off" ? d("chip.state_off") : P.state : ee(parseFloat(P.state)) + Nt(e, b);
      return /* @__PURE__ */ o("button", { class: "chip" + (b === n ? " active" : ""), onClick: () => s(b), children: [
        /* @__PURE__ */ o("span", { children: S[T] }),
        /* @__PURE__ */ o("b", { children: B })
      ] }, b);
    }) }),
    /* @__PURE__ */ o("div", { class: "detail-tools", children: [
      /* @__PURE__ */ o("div", { class: "seg", children: Xd.map((b) => /* @__PURE__ */ o("button", { class: b === i ? "active" : "", onClick: () => a(b), children: d("range." + b) }, b)) }),
      /* @__PURE__ */ o("button", { class: "chip-btn" + (l ? " on" : ""), onClick: () => m(!l), children: [
        /* @__PURE__ */ o(fl, { size: 14 }),
        /* @__PURE__ */ o("span", { children: d("detail.table") })
      ] })
    ] }),
    h && /* @__PURE__ */ o("div", { class: "chart-empty c-red", children: d("detail.load_error", { error: h }) }),
    !h && !r && /* @__PURE__ */ o("div", { class: "chart-empty", children: d("common.loading") }),
    r && (l ? /* @__PURE__ */ o(oA, { series: r, unit: M, range: i }) : /* @__PURE__ */ o(Ml, { series: r, unit: M, range: i, width: v })),
    r && /* @__PURE__ */ o(nA, { series: r, sum: Jd(r), unit: M, range: i, current: I }),
    r && r.kind !== "timeline" && i !== "24h" && /* @__PURE__ */ o("div", { class: "muted small detail-foot", children: [
      r.kind === "bars" ? d("detail.foot_bars") : d(i === "7d" ? "detail.foot_hourly" : "detail.foot_daily"),
      " · ",
      d("detail.days", { n: Math.round($a[i] / 864e5) })
    ] })
  ] }) });
}
function tr(t, e, n) {
  const s = (i) => i.split(",").map((a) => t + a).join(",");
  return s(".accent-text") + "{color:" + e + "}" + s(".light.on .light-icon") + "{background:" + e + "}" + s(".light.on") + "{border-color:" + e + ";background:" + n + "}" + s(".seg .active") + "{background:" + n + ";color:" + e + "}" + s(".room-temp sup") + "{color:" + e + "}";
}
function sA(t) {
  const e = parseInt(t.slice(1), 16);
  return "rgba(" + (e >> 16) + "," + (e >> 8 & 255) + "," + (e & 255) + ",0.2)";
}
const aA = Object.keys(et).map((t) => tr(".tint-" + t + " ", et[t], sA(et[t]))).join("");
function rA() {
  const t = Ze(), e = zr(), n = Ii(), { settings: s, layout: i, sync: a, homes: r, active: c } = t.state;
  H(() => t.start(), []);
  const h = io(() => new ro("", () => Promise.resolve("")), []), A = t.card ? t.card.client : t.haClient || h, [f, u] = _(""), l = (z) => {
    const L = r.findIndex((Se) => Se.id === c), ie = r[(L + z + r.length) % r.length];
    !ie || ie.id === c || (u(z > 0 ? "next" : "prev"), re(null), t.setActive(ie.id));
  }, m = (z) => {
    u(z > 0 ? "next" : "prev"), re(null), t.step(z);
  }, p = t.photoUrls, v = p.length, [C, M] = _(0), g = v ? p[C % v] : "";
  H(() => {
    const z = t.frameClient;
    if (!z || !g || /^(data|blob):/.test(g)) return;
    const L = g.replace(/^https?:\/\/[^/]+/, "");
    qn(z, { photo: decodeURIComponent(L.split("?")[0].split("/").pop() || ""), photo_url: L });
  }, [g, t.frameClient]), H(() => {
    t.frameClient && qn(t.frameClient, { screen: c + "/" + t.state.screen });
  }, [c, t.state.screen, t.frameClient]);
  const [k, S] = _(t.ui.controls), [I, E] = _(t.ui.editing);
  H(() => {
    t.ui.controls = k, t.ui.editing = I;
  }, [k, I]);
  const [b, T] = _(!1), [P, B] = _(""), D = ne(0);
  H(() => t.onCommand((z) => {
    if (z.command === "next_photo") M((L) => L + 1);
    else if (z.command === "show_panel") S(!0);
    else if (z.command === "show_photos")
      S(!1), re(null), B("");
    else if (z.command === "reload") location.reload();
    else if (z.command === "update_apk") $r();
    else if (z.command === "show_screen" && z.screen) {
      const L = z.screen.split("/");
      t.setActive(L[0], L[1]), S(!0);
    } else if (z.command === "show_camera" && z.entity) {
      const L = A.cameraStreamUrl(z.entity);
      if (!L) return;
      B(L), clearTimeout(D.current), D.current = window.setTimeout(() => B(""), (z.duration || 30) * 1e3);
    }
  }), [A]);
  const [oe, re] = _(null), [O, K] = _(null), [te, x] = _(!1), [Q, R] = _(null), [Z, F] = _(!0), [V, Y] = _(""), N = uc(V || void 0), J = oe && i.cards.filter((z) => z.id === oe)[0] || null, fe = a === "local" && !t.haClient;
  H(() => {
    fe && T(!0);
  }, [fe]);
  const G = t.screenOn || !!P;
  H(() => ac(G, t.brightness), [G, t.brightness]), H(() => rc(() => t.wakeScreen()), []), H(() => {
    if (v < 2 || !G) return;
    const z = setInterval(() => M((L) => (L + 1) % v), s.slideIntervalMs);
    return () => clearInterval(z);
  }, [v, s.slideIntervalMs, G, C]);
  const le = Ar((z) => {
    v > 1 && M((L) => (L % v + z + v) % v);
  }, [v]);
  H(() => {
    let z = window.setTimeout(() => F(!1), 8e3);
    const L = qe.current, ie = () => {
      t.ui.controls || (F(!0), clearTimeout(z), z = window.setTimeout(() => F(!1), 5e3));
    };
    return L && (L.addEventListener("touchstart", ie), L.addEventListener("mousedown", ie)), () => {
      clearTimeout(z), L && (L.removeEventListener("touchstart", ie), L.removeEventListener("mousedown", ie));
    };
  }, []);
  const be = b || !!P || !!O || te || !!Q, dn = be || !!J, qe = ne(null), ft = ne(null), mt = ne(null), y = ne(null);
  H(() => {
    const z = qe.current;
    if (!z) return;
    const L = () => {
      z.scrollTop = 0, z.scrollLeft = 0;
    };
    return z.addEventListener("scroll", L), () => z.removeEventListener("scroll", L);
  }, []);
  const [j, de] = _(!1);
  gc({ root: qe, controls: ft, ambient: mt, soft: y }, k, S, !dn && !j, () => de(!0), le);
  const ge = (k || !!J) && !be && !I;
  H(() => {
    if (!ge || !s.idleSec) return;
    let z = 0;
    const L = () => {
      clearTimeout(z), z = window.setTimeout(() => {
        S(!1), re(null), t.goStart();
      }, s.idleSec * 1e3);
    }, ie = ["touchstart", "mousedown", "keydown"];
    return ie.forEach((Se) => document.addEventListener(Se, L)), L(), () => {
      clearTimeout(z), ie.forEach((Se) => document.removeEventListener(Se, L));
    };
  }, [ge, s.idleSec]);
  const pt = (z) => {
    const L = i.cards.some((gt) => gt.id === z.id), ie = at(z), Se = L ? i.cards.map((gt) => gt.id === z.id ? ie : gt) : i.cards.concat(ie);
    t.saveLayout({ ...i, cards: Ie(Se, ie) }), K(null);
  };
  return /* @__PURE__ */ o(Di.Provider, { value: A, children: /* @__PURE__ */ o(Ti.Provider, { value: R, children: /* @__PURE__ */ o("div", { class: "root q-" + n, children: [
    /* @__PURE__ */ o("style", { children: aA + (N ? tr("", N.accent, N.accentSoft) : "") }),
    /* @__PURE__ */ o("div", { class: "app", ref: qe, lang: e, children: [
      /* @__PURE__ */ o(kc, { urls: p, index: C % Math.max(v, 1), tone: N, soft: k, softRef: y, onShow: Y }),
      /* @__PURE__ */ o(
        sd,
        {
          visible: !k,
          innerRef: mt,
          onSheet: (z) => re(z.id),
          onConnection: () => T(!0),
          showHint: Z && !J,
          onHome: () => {
            F(!1), S(!0);
          },
          photoThumb: N ? N.thumb : void 0,
          customizing: j,
          onDone: () => de(!1)
        }
      ),
      /* @__PURE__ */ o(
        Id,
        {
          innerRef: ft,
          visible: k,
          editing: I,
          onEditing: E,
          onPhotos: () => S(!1),
          onSettings: () => T(!0),
          onCamera: B,
          onEditCard: (z) => K({ card: z, isNew: !1 }),
          homes: r,
          active: c,
          slide: f,
          onSwitchHome: l,
          onStep: m,
          onAddCard: () => x(!0)
        }
      )
    ] }),
    J && /* @__PURE__ */ o(Wd, { card: J, tone: N, onCamera: B, onClose: () => re(null) }),
    /* @__PURE__ */ o(
      "div",
      {
        class: "screen-dim" + (G ? "" : " asleep"),
        style: { opacity: cc(G, t.brightness) },
        onClick: G ? void 0 : () => t.wakeScreen()
      }
    ),
    P && /* @__PURE__ */ o(Bd, { url: P, onClose: () => B("") }),
    b && /* @__PURE__ */ o(
      Ld,
      {
        onClose: () => T(!1),
        onCustomize: () => {
          T(!1), S(!1), de(!0);
        }
      }
    ),
    te && /* @__PURE__ */ o(Qd, { onClose: () => x(!1), onPick: (z) => {
      x(!1), K({ card: z, isNew: !0 });
    } }),
    O && /* @__PURE__ */ o(
      qd,
      {
        card: O.card,
        onSave: pt,
        onDelete: O.isNew ? void 0 : () => {
          t.saveLayout({ ...i, cards: Ie(i.cards.filter((z) => z.id !== O.card.id)) }), K(null);
        },
        onClose: () => K(null)
      }
    ),
    Q && /* @__PURE__ */ o(iA, { entities: Q, onClose: () => R(null) }, Q.join(","))
  ] }) }) });
}
class cA extends ro {
  constructor() {
    super("", () => Promise.resolve("")), this.hass = null;
  }
  // HA присылает новый hass при каждом изменении любого состояния — просто перерисовываемся.
  setHass(e) {
    const n = !this.hass;
    this.hass = e, rn(e.language), e.states !== this.states && (this.states = e.states, this.loaded = !0, this.status !== "connected" ? this.setStatus("connected") : this.emit()), n && this.loadRegistry();
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
function lA(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var In, ci;
function dA() {
  return ci || (ci = 1, In = {
    webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
    mp4: "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
  }), In;
}
var Bn, li;
function AA() {
  if (li) return Bn;
  li = 1;
  const { webm: t, mp4: e } = dA(), n = () => typeof navigator < "u" && parseFloat(
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
  return Bn = i, Bn;
}
var hA = AA();
const uA = /* @__PURE__ */ lA(hA);
let Gn = null;
const di = new uA();
function Dn() {
  const t = navigator.wakeLock;
  return !t || document.visibilityState !== "visible" ? Promise.resolve(!1) : t.request("screen").then(
    (e) => (Gn = e, e.addEventListener("release", () => {
      Gn = null;
    }), !0),
    () => !1
  );
}
let Ai = !1;
function fA() {
  if (Ai || (Ai = !0, /SmartFrame\//.test(navigator.userAgent))) return;
  Dn(), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && !Gn && Dn();
  });
  const t = () => {
    document.removeEventListener("touchend", t), document.removeEventListener("click", t), Dn().then((e) => {
      !e && !di.isEnabled && di.enable().catch(() => {
      });
    });
  };
  document.addEventListener("touchend", t), document.addEventListener("click", t);
}
const mA = ':host{display:block;position:relative;height:calc(100vh - var(--header-height, 56px));min-height:420px;overflow:hidden;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif;color:#f5f7fb;background:#000;border-radius:var(--ha-card-border-radius,0)}#app{position:absolute;top:0;left:0;right:0;bottom:0}';
class pA extends HTMLElement {
  constructor() {
    super(...arguments), this.client = new cA(), this.backend = null, this.config = { type: "custom:photoframe-card" }, this.root = null, this.exitKiosk = null, this.offKiosk = null, this.offIntegration = null;
  }
  // Включить/выключить киоск по текущим настройкам. Фронтенд HA дорисовывается не сразу —
  // поэтому вызывается и при монтировании, и при каждом обновлении hass, пока не получится.
  syncKiosk() {
    const e = this.config.kiosk != null ? this.config.kiosk : !!(this.backend && this.backend.integration && this.backend.config.kiosk), n = this.isConnected && _d(!!e);
    n && !this.exitKiosk && (this.exitKiosk = Md()), !n && this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null);
  }
  setConfig(e) {
    this.config = e, this.backend && !this.backend.integration && (this.backend.config = e, $.applyCardConfig(e)), this.syncKiosk();
  }
  set hass(e) {
    this.client.setHass(e), this.syncKiosk(), this.backend || (this.backend = new Vt(this.client, this.config), $.attachCard(this.backend), qi(this.client).then((n) => {
      if (!n) return;
      const s = new Vt(this.client, n, void 0, !1, !0);
      this.backend = s, $.attachCard(s), this.isConnected && !this.offIntegration && (this.offIntegration = s.watch((i) => $.applyCardConfig(i))), this.syncKiosk();
    })), this.mount();
  }
  connectedCallback() {
    const e = this.backend;
    e && e.integration && !this.offIntegration && (this.offIntegration = e.watch((n) => $.applyCardConfig(n))), this.mount(), this.offKiosk = kd(() => this.syncKiosk()), this.syncKiosk();
  }
  disconnectedCallback() {
    this.root && xo(null, this.root), this.root = null, this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null), this.offKiosk && (this.offKiosk(), this.offKiosk = null), this.offIntegration && (this.offIntegration(), this.offIntegration = null);
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
    n.textContent = mA + lr;
    const s = document.createElement("div");
    s.id = "app", e.appendChild(n), e.appendChild(s), this.root = s, xo(/* @__PURE__ */ o(rA, {}), s), fA();
  }
}
customElements.get("photoframe-card") || customElements.define("photoframe-card", pA);
console.info("%c PHOTO-FRAME %c v0.3.1 ", "color:#fff;background:#0891b2;font-weight:700", "color:#0891b2;background:#fff");
Xr();
const Xn = window;
Xn.customCards = Xn.customCards || [];
Xn.customCards.push({
  type: "photoframe-card",
  name: "Smart Frame",
  description: "Photo frame with smart-home controls: photos, clock, weather and customizable cards",
  preview: !1
});
