var tn, j, ei, ve, co, ti, ni, rn, kt, Xe, oi, Un, zn, In, ii, Tt = {}, Ot = [], Ra = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, lt = Array.isArray;
function ye(t, e) {
  for (var n in e) t[n] = e[n];
  return t;
}
function Yn(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Pt(t, e, n) {
  var s, i, a, r = {};
  for (a in e) a == "key" ? s = e[a] : a == "ref" ? i = e[a] : r[a] = e[a];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? tn.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (a in t.defaultProps) r[a] === void 0 && (r[a] = t.defaultProps[a]);
  return _t(t, r, s, i, null);
}
function _t(t, e, n, s, i) {
  var a = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++ei, __i: -1, __u: 0 };
  return i == null && j.vnode != null && j.vnode(a), a;
}
function ae(t) {
  return t.children;
}
function vt(t, e) {
  this.props = t, this.context = e;
}
function De(t, e) {
  if (e == null) return t.__ ? De(t.__, t.__i + 1) : null;
  for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
  return typeof t.type == "function" ? De(t) : null;
}
function qa(t) {
  if (t.__P && t.__d) {
    var e = t.__v, n = e.__e, s = [], i = [], a = ye({}, e);
    a.__v = e.__v + 1, j.vnode && j.vnode(a), Zn(t.__P, a, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [n] : null, s, n ?? De(e), !!(32 & e.__u), i), a.__v = e.__v, a.__.__k[a.__i] = a, di(s, a, i), e.__e = e.__ = null, a.__e != n && si(a);
  }
}
function si(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), si(t);
}
function Bn(t) {
  (!t.__d && (t.__d = !0) && ve.push(t) && !Ht.__r++ || co != j.debounceRendering) && ((co = j.debounceRendering) || ti)(Ht);
}
function Ht() {
  try {
    for (var t, e = 1; ve.length; ) ve.length > e && ve.sort(ni), t = ve.shift(), e = ve.length, qa(t);
  } finally {
    ve.length = Ht.__r = 0;
  }
}
function ai(t, e, n, s, i, a, r, c, d, h, f) {
  var u, l, p, g, w, y, C = s && s.__k || Ot, m = e.length;
  for (d = Na(n, e, C, d, m), u = 0; u < m; u++) (p = n.__k[u]) != null && (l = p.__i != -1 && C[p.__i] || Tt, p.__i = u, y = Zn(t, p, l, i, a, r, c, d, h, f), g = p.__e, p.ref && l.ref != p.ref && (l.ref && Jn(l.ref, null, p), f.push(p.ref, p.__c || g, p)), w == null && g != null && (w = g), 4 & p.__u ? (d = ri(p, d, t), l.__e && (l.__e = null)) : typeof p.type == "function" && y !== void 0 ? d = y : g && (d = g.nextSibling), p.__u &= -7);
  return n.__e = w, d;
}
function Na(t, e, n, s, i) {
  var a, r, c, d, h, f = n.length, u = f, l = 0;
  for (t.__k = new Array(i), a = 0; a < i; a++) (r = e[a]) != null && typeof r != "boolean" && typeof r != "function" ? (typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? r = t.__k[a] = _t(null, r, null, null, null) : lt(r) ? r = t.__k[a] = _t(ae, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? r = t.__k[a] = _t(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : t.__k[a] = r, d = a + l, r.__ = t, r.__b = t.__b + 1, c = null, (h = r.__i = Va(r, n, d, u)) != -1 && (u--, (c = n[h]) && (c.__u |= 2)), c == null || c.__v == null ? (h == -1 && (i > f ? l-- : i < f && l++), typeof r.type != "function" && (r.__u |= 4)) : h != d && (h == d - 1 ? l-- : h == d + 1 ? l++ : (h > d ? l-- : l++, r.__u |= 4))) : t.__k[a] = null;
  if (u) for (a = 0; a < f; a++) (c = n[a]) != null && (2 & c.__u) == 0 && (c.__e == s && (s = De(c)), hi(c, c));
  return s;
}
function ri(t, e, n) {
  var s, i;
  if (typeof t.type == "function") {
    for (s = t.__k, i = 0; s && i < s.length; i++) s[i] && (s[i].__ = t, e = ri(s[i], e, n));
    return e;
  }
  t.__e != e && (e && t.type && !e.parentNode && (e = De(t)), e = n.insertBefore(t.__e, e || null));
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function ci(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (lt(t) ? t.some(function(n) {
    ci(n, e);
  }) : e.push(t)), e;
}
function Va(t, e, n, s) {
  var i, a, r, c = t.key, d = t.type, h = e[n], f = h != null && (2 & h.__u) == 0;
  if (h === null && c == null || f && c == h.key && d == h.type) return n;
  if (s > (f ? 1 : 0)) {
    for (i = n - 1, a = n + 1; i >= 0 || a < e.length; ) if ((h = e[r = i >= 0 ? i-- : a++]) != null && (2 & h.__u) == 0 && c == h.key && d == h.type) return r;
  }
  return -1;
}
function lo(t, e, n) {
  e[0] == "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Ra.test(e) ? n : n + "px";
}
function pt(t, e, n, s, i) {
  var a, r;
  e: if (e == "style") if (typeof n == "string") t.style.cssText = n;
  else {
    if (typeof s == "string" && (t.style.cssText = s = ""), s) for (e in s) n && e in n || lo(t.style, e, "");
    if (n) for (e in n) s && n[e] == s[e] || lo(t.style, e, n[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(oi, "$1")), r = e.toLowerCase(), e = r in t || e == "onFocusOut" || e == "onFocusIn" ? r.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = n, n ? s ? n[Xe] = s[Xe] : (n[Xe] = Un, t.addEventListener(e, a ? In : zn, a)) : t.removeEventListener(e, a ? In : zn, a);
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
function Ao(t) {
  return function(e) {
    if (this.l) {
      var n = this.l[e.type + t];
      if (e[kt] == null) e[kt] = Un++;
      else if (e[kt] < n[Xe]) return;
      return n(j.event ? j.event(e) : e);
    }
  };
}
function Zn(t, e, n, s, i, a, r, c, d, h) {
  var f, u, l, p, g, w, y, C, m, M, D, O, E, b, B, P, z = e.type;
  if (e.constructor !== void 0) return null;
  128 & n.__u && (d = !!(32 & n.__u), a = [c = e.__e = n.__e]), (f = j.__b) && f(e);
  e: if (typeof z == "function") {
    u = r.length;
    try {
      if (m = e.props, M = z.prototype && z.prototype.render, D = (f = z.contextType) && s[f.__c], O = f ? D ? D.props.value : f.__ : s, n.__c ? C = (l = e.__c = n.__c).__ = l.__E : (M ? e.__c = l = new z(m, O) : (e.__c = l = new vt(m, O), l.constructor = z, l.render = Ua), D && D.sub(l), l.state || (l.state = {}), l.__n = s, p = l.__d = !0, l.__h = [], l._sb = []), M && l.__s == null && (l.__s = l.state), M && z.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ye({}, l.__s)), ye(l.__s, z.getDerivedStateFromProps(m, l.__s))), g = l.props, w = l.state, l.__v = e, p) M && z.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), M && l.componentDidMount != null && l.__h.push(l.componentDidMount);
      else {
        if (M && z.getDerivedStateFromProps == null && m !== g && l.componentWillReceiveProps != null && l.componentWillReceiveProps(m, O), e.__v == n.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(m, l.__s, O) === !1) {
          e.__v != n.__v && (l.props = m, l.state = l.__s, l.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some(function(I) {
            I && (I.__ = e);
          }), Ot.push.apply(l.__h, l._sb), l._sb = [], l.__h.length && r.push(l), c = De(n);
          break e;
        }
        l.componentWillUpdate != null && l.componentWillUpdate(m, l.__s, O), M && l.componentDidUpdate != null && l.__h.push(function() {
          l.componentDidUpdate(g, w, y);
        });
      }
      if (l.context = O, l.props = m, l.__P = t, l.__e = !1, E = j.__r, b = 0, M) l.state = l.__s, l.__d = !1, E && E(e), f = l.render(l.props, l.state, l.context), Ot.push.apply(l.__h, l._sb), l._sb = [];
      else do
        l.__d = !1, E && E(e), f = l.render(l.props, l.state, l.context), l.state = l.__s;
      while (l.__d && ++b < 25);
      l.state = l.__s, l.getChildContext != null && (s = ye(ye({}, s), l.getChildContext())), M && !p && l.getSnapshotBeforeUpdate != null && (y = l.getSnapshotBeforeUpdate(g, w)), B = f != null && f.type === ae && f.key == null ? Ai(f.props.children) : f, c = ai(t, lt(B) ? B : [B], e, n, s, i, a, r, c, d, h), l.base = e.__e, e.__u &= -161, l.__h.length && r.push(l), C && (l.__E = l.__ = null);
    } catch (I) {
      if (r.length = u, e.__v = null, d || a != null) {
        if (I.then) {
          for (e.__u |= d ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
          a != null && (a[a.indexOf(c)] = null), e.__e = c;
        } else if (a != null) for (P = a.length; P--; ) Yn(a[P]);
      } else e.__e = n.__e;
      e.__k == null && (e.__k = n.__k || []), I.then || li(e), j.__e(I, e, n);
    }
  } else a == null && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = Wa(n.__e, e, n, s, i, a, r, d, h);
  return (f = j.diffed) && f(e), 128 & e.__u ? void 0 : c;
}
function li(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(li));
}
function di(t, e, n) {
  for (var s = 0; s < n.length; s++) Jn(n[s], n[++s], n[++s]);
  j.__c && j.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      j.__e(a, i.__v);
    }
  });
}
function Ai(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : lt(t) ? t.map(Ai) : t.constructor !== void 0 ? null : ye({}, t);
}
function Wa(t, e, n, s, i, a, r, c, d) {
  var h, f, u, l, p, g, w, y = n.props || Tt, C = e.props, m = e.type;
  if (m == "svg" ? i = "http://www.w3.org/2000/svg" : m == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (h = 0; h < a.length; h++) if ((p = a[h]) && "setAttribute" in p == !!m && (m ? p.localName == m : p.nodeType == 3)) {
      t = p, a[h] = null;
      break;
    }
  }
  if (t == null) {
    if (m == null) return document.createTextNode(C);
    t = document.createElementNS(i, m, C.is && C), c && (j.__m && j.__m(e, a), c = !1), a = null;
  }
  if (m == null) y === C || c && t.data == C || (t.data = C);
  else {
    if (a = m == "textarea" && C.defaultValue != null ? null : a && tn.call(t.childNodes), !c && a != null) for (y = {}, h = 0; h < t.attributes.length; h++) y[(p = t.attributes[h]).name] = p.value;
    for (h in y) p = y[h], h == "dangerouslySetInnerHTML" ? u = p : h == "children" || h in C || h == "value" && "defaultValue" in C || h == "checked" && "defaultChecked" in C || pt(t, h, null, p, i);
    for (h in C) p = C[h], h == "children" ? l = p : h == "dangerouslySetInnerHTML" ? f = p : h == "value" ? g = p : h == "checked" ? w = p : c && typeof p != "function" || y[h] === p || pt(t, h, p, y[h], i);
    if (f) c || u && (f.__html == u.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
    else if (u && (t.innerHTML = ""), ai(e.type == "template" ? t.content : t, lt(l) ? l : [l], e, n, s, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, r, a ? a[0] : n.__k && De(n, 0), c, d), a != null) for (h = a.length; h--; ) Yn(a[h]);
    c && m != "textarea" || (h = "value", m == "progress" && g == null ? t.removeAttribute("value") : g != null && (g !== t[h] || m == "progress" && !g || m == "option" && g != y[h]) && pt(t, h, g, y[h], i), h = "checked", w != null && w != t[h] && pt(t, h, w, y[h], i));
  }
  return t;
}
function Jn(t, e, n) {
  try {
    if (typeof t == "function") {
      var s = typeof t.__u == "function";
      s && t.__u(), s && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (i) {
    j.__e(i, n);
  }
}
function hi(t, e, n) {
  var s, i;
  if (j.unmount && j.unmount(t), (s = t.ref) && (s.current && s.current != t.__e || Jn(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount) try {
      s.componentWillUnmount();
    } catch (a) {
      j.__e(a, e);
    }
    s.base = s.__P = s.__n = null;
  }
  if (s = t.__k) for (i = 0; i < s.length; i++) s[i] && hi(s[i], e, n || typeof t.type != "function");
  n || Yn(t.__e), t.__c = t.__ = t.__e = void 0;
}
function Ua(t, e, n) {
  return this.constructor(t, n);
}
function ho(t, e, n) {
  var s, i, a, r;
  e == document && (e = document.documentElement), j.__ && j.__(t, e), i = (s = !1) ? null : e.__k, a = [], r = [], Zn(e, t = e.__k = Pt(ae, null, [t]), i || Tt, Tt, e.namespaceURI, i ? null : e.firstChild ? tn.call(e.childNodes) : null, a, i ? i.__e : e.firstChild, s, r), di(a, t, r), t.props.children = null;
}
function Gn(t) {
  function e(n) {
    var s, i;
    return this.getChildContext || (s = /* @__PURE__ */ new Set(), (i = {})[e.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      s = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && s.forEach(function(r) {
        r.__e = !0, Bn(r);
      });
    }, this.sub = function(a) {
      s.add(a);
      var r = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        s && s.delete(a), r && r.call(a);
      };
    }), n.children;
  }
  return e.__c = "__cC" + ii++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(n, s) {
    return n.children(s);
  }).contextType = e, e;
}
tn = Ot.slice, j = { __e: function(t, e, n, s) {
  for (var i, a, r; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(t)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), r = i.__d), r) return i.__E = i;
  } catch (c) {
    t = c;
  }
  throw t;
} }, ei = 0, vt.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = ye({}, this.state), typeof t == "function" && (t = t(ye({}, n), this.props)), t && ye(n, t), t != null && this.__v && (e && this._sb.push(e), Bn(this));
}, vt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Bn(this));
}, vt.prototype.render = ae, ve = [], ti = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ni = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Ht.__r = 0, rn = Math.random().toString(8), kt = "__d" + rn, Xe = "__a" + rn, oi = /(PointerCapture)$|Capture$/i, Un = 0, zn = Ao(!1), In = Ao(!0), ii = 0;
var Ya = 0;
function o(t, e, n, s, i, a) {
  e || (e = {});
  var r, c, d = e;
  if ("ref" in d) for (c in d = {}, e) c == "ref" ? r = e[c] : d[c] = e[c];
  var h = { type: t, props: d, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ya, __i: -1, __u: 0, __source: i, __self: a };
  if (typeof t == "function" && (r = t.defaultProps)) for (c in r) d[c] === void 0 && (d[c] = r[c]);
  return j.vnode && j.vnode(h), h;
}
const Za = ':root{--ink: #f5f7fb;--ink-2: rgba(245, 247, 251, .72);--ink-3: rgba(245, 247, 251, .48);--panel: rgba(12, 14, 22, .42);--panel-line: rgba(255, 255, 255, .09);--chip: rgba(255, 255, 255, .1);--chip-line: rgba(255, 255, 255, .14);--warm: #fbbf24;--red: #fb7185;--green: #34d399;--ease: cubic-bezier(.2, .7, .2, 1)}*{box-sizing:border-box;margin:0;padding:0;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}html,body,#app{height:100%}body{background:#000;color:#f5f7fb;overflow:hidden;font-family:Inter,Roboto,-apple-system,Segoe UI,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%}button,input,select{font:inherit;color:inherit;border:0;background:none;outline:none}button{cursor:pointer}svg{display:block;flex-shrink:0}.app{position:relative;height:100%;overflow:hidden}.backdrop{position:absolute;inset:0;overflow:hidden}.slide{position:absolute;inset:0;background-size:cover;background-position:center;opacity:0;transform:scale(1);transition:opacity 2s ease-in-out,transform 20s linear}.slide.active{opacity:1;transform:scale(1.08)}.slide.contain,.slide.contain.active{transform:none;background:#000}.slide-glow{position:absolute;inset:-6%;background-size:cover;background-position:center;opacity:.75}.slide-photo{position:absolute;inset:0;background-size:contain;background-position:center;background-repeat:no-repeat}.q-full .slide-glow{-webkit-filter:blur(28px) saturate(1.3);filter:blur(28px) saturate(1.3)}.aurora{background:radial-gradient(ellipse at 20% 30%,rgba(56,189,248,.35) 0%,transparent 55%),radial-gradient(ellipse at 80% 70%,rgba(168,85,247,.32) 0%,transparent 55%),radial-gradient(ellipse at 60% 10%,rgba(251,191,36,.18) 0%,transparent 50%),#05060c}.soft{position:absolute;inset:-5%;background-size:cover;background-position:center;opacity:0;transition:opacity .6s cubic-bezier(.2,.7,.2,1)}.soft.on{opacity:1}.shade{position:absolute;inset:0;background:linear-gradient(to bottom,#00000040,#0000 30%,#00000026 55%,#000000b3);transition:background-color .6s cubic-bezier(.2,.7,.2,1)}.shade.deep{background-color:#04060c61}.ambient{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;padding:0 5vw 9vh;transform:translateY(-100%);pointer-events:none}.ambient.visible{transform:none}.clock-link{pointer-events:auto;cursor:pointer}.ambient-clock{text-shadow:0 2px 30px rgba(0,0,0,.35)}.ambient-time{font-size:22vh;font-weight:200;letter-spacing:-.04em;line-height:.9}.ambient-date{margin-top:2vh;font-size:3vh;font-weight:400;color:#f5f7fbb8;letter-spacing:.01em}.glances{display:flex;flex-wrap:wrap;justify-content:flex-end;max-width:50%;margin-bottom:1vh}.glance{pointer-events:auto;cursor:pointer;transition:transform .15s,background .2s;display:flex;align-items:center;margin:6px 0 0 8px;padding:9px 16px 9px 13px;border-radius:999px;background:#00000052;border:1px solid rgba(255,255,255,.14);font-size:15px;font-weight:500;color:#f5f7fb}.glance:active{transform:scale(.94);background:#00000080}.glance svg{margin-right:8px;color:#f5f7fbb8}.glance.lit svg{color:#fbbf24}.glance.alert{background:#e11d488c;border-color:#fb718599}.glance.alert svg,.glance.warn svg{color:#fff}.glance.warn{background:#d9770680}.ambient{transition:transform .5s cubic-bezier(.2,.7,.2,1)}.grabber{position:absolute;left:0;right:0;bottom:10px;bottom:max(10px,env(safe-area-inset-bottom));display:flex;flex-direction:column;align-items:center}.grabber-text{font-size:13px;color:#f5f7fbb8;letter-spacing:.03em;margin-bottom:10px;opacity:0;transition:opacity 1s;-webkit-animation:nudge 2.4s ease-in-out infinite;animation:nudge 2.4s ease-in-out infinite}.grabber-text.visible{opacity:1}.grabber-bar{width:134px;height:5px;border-radius:3px;background:#ffffffb3;box-shadow:0 0 12px #0000004d}@-webkit-keyframes nudge{0%,60%,to{-webkit-transform:translateY(0)}30%{-webkit-transform:translateY(-6px)}}@keyframes nudge{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-6px)}}.dragging .ambient,.dragging .controls,.dragging .soft{transition:none}.dragging .controls{pointer-events:none}.controls{position:absolute;inset:0;display:flex;flex-direction:column;padding:22px 28px 28px;padding-top:max(22px,env(safe-area-inset-top));padding-left:max(28px,env(safe-area-inset-left));padding-right:max(28px,env(safe-area-inset-right));padding-bottom:max(28px,env(safe-area-inset-bottom));opacity:0;transform:scale(.96);transition:opacity .5s cubic-bezier(.2,.7,.2,1),transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}.controls.visible{opacity:1;transform:none;pointer-events:auto}.bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.bar-time{display:flex;align-items:baseline}.bar-clock{font-size:38px;font-weight:300;letter-spacing:-.03em}.bar-date{margin-left:14px;font-size:15px;color:#f5f7fbb8}.bar-actions{display:flex;align-items:center}.conn{display:flex;align-items:center;margin-right:14px;font-size:13px;color:#f5f7fbb8}.conn i{width:8px;height:8px;border-radius:50%;margin-right:8px;background:#fbbf24}.conn-connected i{background:#34d399;box-shadow:0 0 10px #34d399}.conn-auth_invalid i,.conn-disconnected i{background:#fb7185}.round{width:48px;height:48px;margin-left:10px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);transition:transform .15s}.round:active{transform:scale(.92)}.round.accent{background:#7dd3fc;color:#0b0d14;border-color:transparent}.bar{position:relative}.bar-narrow .bar-date{display:none}.bar-narrow .bar-clock{font-size:30px}.home-switch{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);transition:opacity .2s}.home-switch:active{transform:translate(-50%,-50%) scale(.96)}.bar-narrow.menu-open .home-switch{opacity:0;pointer-events:none}.bar-narrow.bar-editing .home-switch{display:none}.burger{position:relative;display:flex;align-items:center}.burger-items{position:absolute;right:58px;top:0;display:flex;align-items:center;opacity:0;pointer-events:none;transform:translate(24px);transition:opacity .22s cubic-bezier(.2,.7,.2,1),transform .22s cubic-bezier(.2,.7,.2,1)}.menu-open .burger-items{opacity:1;pointer-events:auto;transform:none}.burger-btn{position:relative}.burger-dot{position:absolute;top:4px;right:4px;width:8px;height:8px;border-radius:50%;background:#fbbf24}.burger-btn.conn-connected .burger-dot{background:#34d399}.burger-btn.conn-auth_invalid .burger-dot,.burger-btn.conn-disconnected .burger-dot{background:#fb7185}.grid{position:relative;flex:1;min-height:0;margin:-16px;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.grid::-webkit-scrollbar{display:none}.grid-inner{position:relative}.cell{position:absolute;display:flex;transition:left .22s cubic-bezier(.2,.7,.2,1),top .22s cubic-bezier(.2,.7,.2,1),width .22s cubic-bezier(.2,.7,.2,1),height .22s cubic-bezier(.2,.7,.2,1)}.cell.dragged{z-index:20;transition:none;-webkit-animation:none;animation:none}.cell.dragged .panel{box-shadow:0 30px 60px #0000008c;border-color:#ffffff80}.drop-slot{position:absolute;border-radius:28px;border:2px dashed rgba(255,255,255,.45);background:#ffffff14;transition:left .15s,top .15s,width .15s,height .15s}.grid-dots{position:absolute;inset:0}.grid-dot{position:absolute;border-radius:10px;background:#ffffff09}.grid-note{font-size:12px;color:#f5f7fb7a;padding:8px 16px 0}.hidden-cards{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.hidden-cards .muted{display:flex;align-items:center;margin-right:8px}.hidden-cards .muted svg{margin-right:4px}.hidden-cards .chip{display:flex;align-items:center;margin:0 6px 6px 0}.hidden-cards .chip svg{margin-right:4px}.editing .cell{cursor:move}.dragging-card,.dragging-card *{cursor:-webkit-grabbing;cursor:grabbing}.badge-btn{position:absolute;top:-8px;width:28px;height:28px;border-radius:50%;z-index:2;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.25);box-shadow:0 4px 12px #0006}.badge-del{left:-8px;background:#3f3f46;color:#fff}.badge-edit{right:-8px;background:#e5e7eb;color:#111}.resize-handle{position:absolute;right:2px;bottom:2px;width:30px;height:30px;cursor:nwse-resize;z-index:2;border-right:3px solid rgba(255,255,255,.85);border-bottom:3px solid rgba(255,255,255,.85);border-bottom-right-radius:24px}.size-tag{position:absolute;left:50%;bottom:10px;padding:3px 8px;border-radius:8px;z-index:2;transform:translate(-50%);background:#0000008c;font-size:11px;font-weight:600;color:#f5f7fbb8}.cell>.panel{flex:1;min-width:0}.panel-body{flex:1;min-height:0;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.panel-body::-webkit-scrollbar,.lights::-webkit-scrollbar{display:none}.card-empty{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;font-size:13px;color:#f5f7fb7a;padding:0 12px}.panel{display:flex;flex-direction:column;min-height:0;background:#0c0e166b;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:20px 22px;box-shadow:0 20px 50px #00000040}.panel-head{display:flex;align-items:center;justify-content:space-between;min-height:30px;margin-bottom:14px}.panel-head h2{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:#f5f7fbb8}.home-pane{flex:1;min-height:0;display:flex;flex-direction:column}.screen-tabs{display:flex;align-items:center;overflow-x:auto;white-space:nowrap;margin:-8px 0 12px;padding-bottom:2px;-webkit-overflow-scrolling:touch}.screen-tab{display:inline-flex;flex-shrink:0;align-items:center;height:34px;padding:0 14px;margin-right:8px;border-radius:17px;font-size:14px;font-weight:500;color:#f5f7fb7a;background:#ffffff0f}.screen-tab.on{color:#f5f7fb;background:#ffffff29;font-weight:600}.screen-tab.add svg{margin-right:4px}.screen-tab.editing{padding:0 4px}.screen-tab input{width:auto;min-width:0;height:30px;padding:0 6px;border:0;border-radius:10px;background:transparent;color:#f5f7fb;font:inherit;text-align:center}.screen-tab input:focus{background:#00000040;outline:none}.screen-move,.screen-del{display:flex;align-items:center;justify-content:center;min-width:28px;height:28px;border-radius:14px;color:#f5f7fb7a}.screen-del.sure{padding:0 10px;background:#ef4444d9;color:#fff;font-size:13px}.slide-next{-webkit-animation:in-next .35s cubic-bezier(.2,.7,.2,1);animation:in-next .35s cubic-bezier(.2,.7,.2,1)}.slide-prev{-webkit-animation:in-prev .35s cubic-bezier(.2,.7,.2,1);animation:in-prev .35s cubic-bezier(.2,.7,.2,1)}@-webkit-keyframes in-next{0%{opacity:0;-webkit-transform:translateX(60px)}}@keyframes in-next{0%{opacity:0;transform:translate(60px)}}@-webkit-keyframes in-prev{0%{opacity:0;-webkit-transform:translateX(-60px)}}@keyframes in-prev{0%{opacity:0;transform:translate(-60px)}}.home-switch{display:flex;flex-direction:column;align-items:center;padding:6px 14px;border-radius:14px}.home-switch:active{background:#ffffff14}.home-name{font-size:15px;font-weight:600}.home-dots{display:flex;margin-top:5px}.home-dots i{width:6px;height:6px;border-radius:50%;margin:0 3px;background:#ffffff4d}.home-dots i.on{background:#fff}.editing .cell{-webkit-animation:jiggle .9s ease-in-out infinite;animation:jiggle .9s ease-in-out infinite}.editing div:nth-child(2n)>.cell{-webkit-animation-delay:-.45s;animation-delay:-.45s}.editing .cell .panel{border:1px dashed rgba(255,255,255,.35)}.editing .cell .panel-body{pointer-events:none;opacity:.45}@-webkit-keyframes jiggle{0%,to{-webkit-transform:rotate(-.35deg)}50%{-webkit-transform:rotate(.35deg)}}@keyframes jiggle{0%,to{transform:rotate(-.35deg)}50%{transform:rotate(.35deg)}}.icon-btn.danger{color:#fb7185}.pill-btn{margin-left:10px;display:flex;align-items:center;height:44px;padding:0 18px;border-radius:999px;color:#0b0d14;font-weight:600;background:#7dd3fc}.pill-btn svg{margin-right:6px}.rooms{flex:1;display:flex;flex-direction:column;justify-content:space-around}.rooms.compact .room{padding:4px 0}.rooms.compact .room-temp{font-size:28px}.rooms.compact .room-name{font-size:12px}.room{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.09)}.room:last-child{border-bottom:0}.room-name{font-size:14px;color:#f5f7fbb8}.room-vals{display:flex;align-items:baseline;justify-content:space-between;margin-top:2px}.room-temp{font-size:46px;font-weight:200;letter-spacing:-.03em;line-height:1.05}.room-temp sup{font-size:.5em;font-weight:300;vertical-align:top;position:relative;top:.25em;margin-left:2px;color:#7dd3fc}.room-hum{display:flex;align-items:center;font-size:15px;color:#f5f7fbb8}.room-hum svg{margin-right:4px;color:#7dd3fc}.chip-btn{display:flex;align-items:center;padding:7px 12px;border-radius:999px;background:#ffffff1a;border:1px solid rgba(255,255,255,.14);font-size:13px;font-weight:500}.chip-btn svg{margin-right:6px}.lights{flex:1;min-height:0;display:flex;flex-wrap:wrap;align-content:flex-start;margin:-5px;overflow-y:auto;-webkit-overflow-scrolling:touch}.cols-1 .light{width:calc(100% - 10px)}.cols-2 .light{width:calc(50% - 10px)}.cols-3 .light{width:calc(33.333% - 10px)}.cols-4 .light{width:calc(25% - 10px)}.cols-5 .light{width:calc(20% - 10px)}.cols-6 .light{width:calc(16.666% - 10px)}.lights.compact .light{min-height:70px;padding:10px 12px}.lights.compact .light-icon{width:30px;height:30px;margin-bottom:6px}.lights.list .light{flex-direction:row;align-items:center;justify-content:flex-start;min-height:0;padding:7px 10px;border-radius:14px}.lights.list .light-icon{width:28px;height:28px;margin:0 8px 0 0;flex-shrink:0}.lights.list .light-name{min-width:0;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lights.list .light-state{display:none}.light{width:calc(50% - 10px);margin:5px;min-height:96px;flex-grow:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:14px;border-radius:20px;text-align:left;background:#ffffff0f;border:1px solid rgba(255,255,255,.07);transition:background .25s,border-color .25s,transform .15s,box-shadow .25s}.light:active{transform:scale(.96)}.light-icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1a;color:#f5f7fbb8;margin-bottom:12px;transition:background .25s,color .25s,box-shadow .25s}.light-name{font-size:15px;font-weight:500;line-height:1.2}.light-state{font-size:12px;color:#f5f7fb7a;margin-top:3px}.light.on{background:#fbbf2429;border-color:#fbbf2480;box-shadow:0 0 30px #fbbf241f}.light.on .light-icon{background:#fbbf24;color:#1a1205;box-shadow:0 0 22px #fbbf248c}.light.on .light-state{color:#f5f7fbb8}.light.na{opacity:.45}.seg{display:flex;background:#00000040;border-radius:999px;padding:3px}.seg button{padding:5px 12px;border-radius:999px;font-size:12px;font-weight:500;color:#f5f7fbb8}.seg .active{background:#ffffff24;color:#f5f7fb}.cam-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.seg-inline{align-self:flex-start;flex-shrink:0;max-width:100%;margin-bottom:10px;overflow-x:auto;-webkit-overflow-scrolling:touch}.seg-inline::-webkit-scrollbar{display:none}.seg-inline button{flex-shrink:0;white-space:nowrap}.seg-full{align-self:stretch}.seg-full button{flex:1 0 auto;text-align:center}.cam{position:relative;flex:1;min-height:120px;border-radius:18px;overflow:hidden;background:#00000073;cursor:pointer}.cam img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.cam.fit-width img{top:50%;height:auto;transform:translateY(-50%)}.cam.fit-height img{left:50%;width:auto;transform:translate(-50%)}.cam.fit-width,.cam.fit-height{background:#000}.cam-empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:13px}.cam-empty svg{margin-bottom:8px}.live{position:absolute;top:10px;left:10px;display:flex;align-items:center;padding:3px 8px;border-radius:6px;background:#00000080;font-size:10px;font-weight:700;letter-spacing:.08em}.live i{width:6px;height:6px;border-radius:50%;background:#fb7185;margin-right:5px;-webkit-animation:pulse 1.6s infinite;animation:pulse 1.6s infinite}@-webkit-keyframes pulse{50%{opacity:.3}}@keyframes pulse{50%{opacity:.3}}.status-row{display:flex;align-items:center;padding:10px 0;color:#f5f7fbb8}.status-row+.status-row{border-top:1px solid rgba(255,255,255,.09)}.status-icon{width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#34d39926;color:#34d399;margin-right:12px}.status-text{flex:1;display:flex;flex-direction:column;min-width:0}.status-text b{font-size:14px;font-weight:500;color:#f5f7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.status-text small{font-size:12px;color:#f5f7fb7a;margin-top:2px}.status-row.alert .status-icon{background:#fb718533;color:#fb7185}.status-row.alert small{color:#fb7185}.sheet-layer{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 5vw 9vh;padding-bottom:calc(9vh + 56px);background:linear-gradient(to top,#00000059,#0000 60%);-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease}.sheet{position:relative;width:460px;max-width:100%;max-height:72vh;overflow:hidden;border-radius:30px;border:1px solid rgba(255,255,255,.16);box-shadow:0 30px 80px #00000073;transform-origin:100% 100%;-webkit-animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1);animation:sheet-in .42s cubic-bezier(.2,.9,.25,1.1)}.sheet-wide{width:640px}.sheet .lights{overflow:visible}.sheet-cameras .cam{height:300px;flex:none}.sheet-glass{position:absolute;inset:0;overflow:hidden;background:#10131c}.glass-layer{position:absolute;background-size:cover;background-position:center}.glass-layer.fresh{-webkit-animation:fade-in 1.2s ease;animation:fade-in 1.2s ease}.sheet-tint{position:absolute;inset:0;background:#0a0c1480}.sheet-inner{position:relative;padding:20px 22px 22px;max-height:72vh;overflow-y:auto;-webkit-overflow-scrolling:touch}.sheet .rooms .room{padding:12px 0}.sheet-actions{display:flex;align-items:center}.sheet-close{width:32px;height:32px;margin-left:8px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff1f;color:#f5f7fbb8}@-webkit-keyframes fade-in{0%{opacity:0}}@keyframes fade-in{0%{opacity:0}}@-webkit-keyframes sheet-in{0%{opacity:0;-webkit-transform:translateY(24px) scale(.92)}}@keyframes sheet-in{0%{opacity:0;transform:translateY(24px) scale(.92)}}.modal{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:16px;background:#0009}.modal-box{width:100%;max-width:560px;max-height:92%;overflow-y:auto;-webkit-overflow-scrolling:touch;background:#141620f7;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:24px;box-shadow:0 30px 80px #0009}.modal-wide{max-width:960px}.modal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.modal-head h2{font-size:19px;font-weight:600}.modal-title{display:flex;align-items:center}.modal-title svg{margin-right:10px;color:#7dd3fc}.icon-btn{color:#f5f7fb7a}.cam-full{border-radius:18px;overflow:hidden;background:#000}.cam-full img{display:block;width:100%;max-height:72vh;object-fit:contain}.tabs{display:flex;padding:4px;margin-bottom:18px;border-radius:14px;background:#ffffff0d}.tabs button{flex:1;padding:9px;border-radius:10px;font-size:14px;font-weight:500;color:#f5f7fbb8}.tabs .active{background:#ffffff1a;color:#f5f7fb}.modal-box .hint{position:static;opacity:1;text-align:left;font-size:13px;color:#f5f7fb7a;letter-spacing:0;margin-bottom:14px;line-height:1.45}.modal-box .hint.small{font-size:12px;margin:4px 0 0;text-align:center}.drop-zone{position:relative;display:block;text-align:center;padding:26px 16px;margin-bottom:14px;border:2px dashed rgba(255,255,255,.16);border-radius:20px;background:#ffffff08}.drop-zone svg{margin:0 auto 8px}.drop-zone input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.drop-zone.busy{opacity:.6}.drop-zone.over{border-color:#7dd3fc;background:#7dd3fc14}.upload-error{margin:-6px 0 12px}.drop-title{font-size:14px;font-weight:500}.thumbs{display:flex;flex-wrap:wrap;margin:0 -4px 10px}.thumb{position:relative;width:72px;height:72px;margin:4px;border-radius:12px;background-size:cover;background-position:center}.thumb-del{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#000000a6}.option{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-top:1px solid rgba(255,255,255,.09);font-size:14px;color:#f5f7fbb8}.option select{padding:8px 12px;border-radius:10px;background:#ffffff14;color:#f5f7fb;font-size:13px}.option select option{color:#000}.option-col{display:block}.chip-picker{margin-top:8px}.chip-picker .check{margin:4px 0;color:#f5f7fb}.field{display:block;margin-bottom:14px}.field span{display:block;font-size:12px;color:#f5f7fb7a;margin-bottom:6px}.field input{width:100%;padding:13px 14px;border-radius:12px;font-size:15px;background:#ffffff0f;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text}.field input:focus{border-color:#7dd3fc}.table-wrap{max-height:240px;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:12px;background:#0003}.diag{width:100%;border-collapse:collapse;font-size:12px}.diag td{padding:7px 10px;border-bottom:1px solid rgba(255,255,255,.09);word-break:break-all}.mono{font-family:Menlo,Roboto Mono,monospace}.strong{font-weight:600}.muted{color:#f5f7fb7a}.modal-foot{display:flex;justify-content:space-between;align-items:center;margin-top:18px}.btn{display:flex;align-items:center;padding:11px 18px;border-radius:14px;font-size:14px;font-weight:600}.btn svg{margin-right:6px}.btn-accent{background:#7dd3fc;color:#0b0d14}.btn-danger{background:#fb71851f;color:#fb7185}.type-list .type-row{display:flex;align-items:center;width:100%;padding:12px 6px;text-align:left;color:#f5f7fbb8;border-bottom:1px solid rgba(255,255,255,.09)}.type-list .type-row:last-child{border-bottom:0}.seg-wide{align-self:flex-start;display:inline-flex}.seg-wide button{padding:7px 16px;font-size:13px}.swatches{display:flex;flex-wrap:wrap}.swatch{width:34px;height:34px;border-radius:50%;margin:0 8px 6px 0;border:2px solid transparent}.swatch.active{border-color:#fff;box-shadow:0 0 0 2px #00000080 inset}.swatch-auto{background:#ffffff1a;font-size:12px;font-weight:700;color:#f5f7fbb8}.icon-grid{display:flex;flex-wrap:wrap;margin:0 -3px}.icon-grid button{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0d;color:#f5f7fbb8}.icon-grid .active{background:#fff3;color:#f5f7fb}.check{display:flex;align-items:center;font-size:14px;color:#f5f7fbb8;margin:6px 0 10px}.check input{margin-right:10px;width:18px;height:18px}.check-row{padding:10px 0;border-top:1px solid rgba(255,255,255,.09);border-bottom:1px solid rgba(255,255,255,.09);margin-bottom:14px}.items{border-radius:14px;background:#0003;padding:4px 8px 8px}.item-block{border-bottom:1px solid rgba(255,255,255,.09)}.item-row{display:flex;align-items:center;padding:8px 0}.item-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ffffff14;margin-right:10px;flex-shrink:0}.item-main{flex:1;min-width:0;display:flex;flex-direction:column}.item-main input{padding:6px 8px;margin-left:-8px;border-radius:8px;font-size:14px;-webkit-user-select:text;user-select:text}.item-main input:focus{background:#ffffff0f}.item-main .mono{font-size:11px;color:#f5f7fb7a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item-row .icon-btn{width:32px;height:32px;display:flex;align-items:center;justify-content:center}.na-tag{font-style:normal;color:#fb7185}.link{display:flex;align-items:center;font-size:11px;color:#7dd3fc;margin-top:3px;text-align:left}.link svg{margin-right:4px}.btn-ghost{margin-top:8px;background:#ffffff14;color:#f5f7fb;font-weight:500}.btn[disabled]{opacity:.4}.auth{margin-bottom:16px;padding:14px 16px 2px;border-radius:16px;background:#ffffff0a}.auth-title{font-size:15px;font-weight:600;margin-bottom:12px}.auth-or{display:flex;align-items:center;margin:-2px 0 12px;font-size:12px;color:#f5f7fb7a}.auth-or:before,.auth-or:after{content:"";flex:1;height:1px;background:#ffffff1f}.auth-or span{margin:0 12px}.auth .btn-login{width:100%;justify-content:center;margin:0 0 4px}.auth-session{display:flex;align-items:center;justify-content:space-between;margin:-2px 0 6px;font-size:13px;color:#f5f7fbb8}.auth-session .btn{margin:0 0 0 12px;flex-shrink:0}.ha-storage{margin:0 0 14px}.ha-storage .hint{margin:0}.migration{margin:0 0 14px;padding:12px 14px;border-radius:14px;background:#ffffff14}.migration p{margin:0 0 4px;font-size:14px}.picker{border-radius:14px;background:#00000040;padding:8px}.picker-search{display:flex;align-items:center;padding:4px 6px;border-radius:10px;background:#ffffff12;color:#f5f7fb7a}.picker-search input{flex:1;padding:8px;border:0;background:none;font-size:14px;color:#f5f7fb;-webkit-user-select:text;user-select:text}.picker .check{margin:8px 4px;font-size:13px}.picker-mode{margin-bottom:8px}.picker-list{max-height:260px;overflow-y:auto;-webkit-overflow-scrolling:touch}.picker-row{display:flex;flex-wrap:wrap;align-items:baseline;width:100%;padding:9px 6px;text-align:left;border-bottom:1px solid rgba(255,255,255,.09)}.picker-row:active{background:#ffffff14}.picker-name{flex:1;font-size:14px}.picker-state{font-size:12px;color:#f5f7fb7a;margin-left:8px}.picker-id{width:100%;font-size:11px;color:#f5f7fb7a;margin-top:2px}.picker-empty{padding:16px;text-align:center}.home-row{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.09)}.home-row-head{display:flex;align-items:center;margin-bottom:8px}.home-input{flex:1;min-width:0;padding:8px 10px;border-radius:10px;font-size:15px;font-weight:600;background:#ffffff0f;-webkit-user-select:text;user-select:text}.row-btns{display:flex}.row-btns .btn{margin:0 8px 8px 0}.json{display:block;width:100%;height:120px;padding:10px;border-radius:12px;font:12px Menlo,monospace;color:#f5f7fb;background:#0000004d;border:1px solid rgba(255,255,255,.09);-webkit-user-select:text;user-select:text;resize:vertical}.c-red{color:#fb7185}.small{font-size:12px}.ac-wrap,.media-wrap{flex:1;display:flex;flex-direction:column;min-height:0}.ac{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-main{display:flex;align-items:center}.ac-step{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;border:1px solid rgba(255,255,255,.14);margin:0 10px}.ac-step:active{background:#ffffff2e}.ac-step[disabled]{opacity:.3}.ac-dial{position:relative}.ac-dial svg{position:absolute;top:0;left:0}.ac-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ac-target{font-size:44px;font-weight:200;letter-spacing:-.03em;line-height:1}.ac.compact .ac-target{font-size:34px}.ac-target sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.ac-mode{font-size:12px;color:#f5f7fbb8;margin-top:4px}.ac-room{font-size:11px;color:#f5f7fb7a;margin-top:2px}.ac-modes{display:flex;flex-wrap:wrap;justify-content:center;margin-top:10px}.ac-mode-btn{width:40px;height:40px;margin:3px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#ffffff0f;border:1px solid transparent;color:#f5f7fbb8}.ac-mode-btn.active{color:#fff;border-color:#fff6}.ac-fan{margin-top:10px;align-self:center}.ac-fan button{padding:6px 10px;font-size:12px}.media-wrap{flex:1 0 auto}.media{flex:1 0 auto;display:flex;flex-direction:column}.media>:first-child{margin-top:auto}.media>:last-child{margin-bottom:auto}.media.short .media-art{width:52px;height:52px;border-radius:12px}.media.short .media-controls{margin:8px 0 2px}.media.short .media-controls button{width:38px;height:38px}.media.short .media-controls .media-play{width:46px;height:46px}.media-top{display:flex;align-items:center}.media-art{width:72px;height:72px;flex-shrink:0;border-radius:14px;background-size:cover;background-position:center;box-shadow:0 8px 24px #00000059}.media.big .media-art{width:112px;height:112px;border-radius:18px}.media-art-empty{display:flex;align-items:center;justify-content:center;background:#ffffff12;color:#f5f7fb7a}.media-art-empty.big{width:96px;height:96px;border-radius:24px;margin-bottom:12px}.media-info{flex:1;min-width:0;margin-left:14px}.media-title{font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media.big .media-title{font-size:19px}.media-sub{font-size:13px;color:#f5f7fbb8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.media-state{display:flex;align-items:center;font-size:11px;color:#f5f7fb7a;margin-top:6px;text-transform:uppercase;letter-spacing:.08em}.media-state.on{color:#34d399}.eq{display:inline-flex;align-items:flex-end;height:10px;margin-right:6px}.eq b{width:2px;margin-right:2px;background:#34d399;-webkit-animation:eq .9s ease-in-out infinite;animation:eq .9s ease-in-out infinite}.eq b:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.eq b:nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}@-webkit-keyframes eq{0%,to{height:3px}50%{height:10px}}@keyframes eq{0%,to{height:3px}50%{height:10px}}.icon-round{width:36px;height:36px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#ffffff14;color:#f5f7fbb8;margin-left:8px}.media-controls{display:flex;align-items:center;justify-content:center;margin:14px 0 6px}.media-controls button{width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;color:#f5f7fb;margin:0 6px}.media-controls button:active{background:#ffffff1a}.media-controls .media-play{width:56px;height:56px;background:#ffffffeb;color:#0b0d14}.media-volume{display:flex;align-items:center;margin-top:8px}.media-volume button{width:32px;height:32px;display:flex;align-items:center;justify-content:center;color:#f5f7fbb8}.vol-bar{position:relative;flex:1;height:6px;margin:0 10px;border-radius:3px;background:#ffffff1f;cursor:pointer}.vol-bar:before{content:"";position:absolute;inset:-12px 0}.vol-fill{position:absolute;top:0;left:0;bottom:0;border-radius:3px;background:#f5f7fb}.vol-num{width:28px;text-align:right;font-size:12px;color:#f5f7fb7a}.media-sources{margin:10px -4px 0;flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch}.media-sources::-webkit-scrollbar{display:none}.media-sources .chip{flex-shrink:0;white-space:nowrap}.media-off{align-items:center;text-align:center}.media-power{margin:14px 0 0}.media-hint{margin-top:10px;max-width:220px}.dot-live{display:inline-block;width:6px;height:6px;border-radius:50%;background:#34d399;margin-right:6px;vertical-align:middle}.weather{flex:1;display:flex;flex-direction:column;min-height:0}.weather-now{display:flex;align-items:center}.weather-temp{font-size:48px;font-weight:200;letter-spacing:-.03em;line-height:1;margin:0 14px 0 10px}.weather-temp sup{font-size:.45em;vertical-align:top;position:relative;top:.3em}.weather-desc{display:flex;flex-direction:column;min-width:0}.weather-desc b{font-size:15px;font-weight:500}.weather-desc span{font-size:12px;color:#f5f7fb7a;margin-top:2px}.weather-facts{display:flex;flex-wrap:wrap;margin-top:12px;font-size:13px;color:#f5f7fbb8}.weather-facts span{display:flex;align-items:center;margin-right:16px}.weather-facts svg{margin-right:5px;color:#f5f7fb7a}.weather-rooms{margin-top:10px;border-top:1px solid rgba(255,255,255,.09)}.wroom{display:flex;align-items:center;height:36px;font-size:14px}.wroom-name{flex:1;min-width:0;color:#f5f7fbb8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wroom-hum{display:flex;align-items:center;font-size:12px;color:#f5f7fb7a;margin-right:12px}.wroom-hum svg{margin-right:3px;color:#7dd3fc}.wroom-temp{font-weight:500;font-size:16px}.room-name svg{display:inline-block;vertical-align:-2px;margin-right:6px;color:#f5f7fbb8}.weather-hours{display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;margin:14px -4px 0;padding-bottom:4px}.weather-hours::-webkit-scrollbar{display:none}.hour{flex-shrink:0;width:52px;display:flex;flex-direction:column;align-items:center;font-size:12px}.hour svg{margin:6px 0;color:#f5f7fbb8}.hour b{font-weight:500;font-size:14px}.weather-days{margin-top:12px;border-top:1px solid rgba(255,255,255,.09);padding-top:4px}.day{display:flex;align-items:center;padding:7px 0;font-size:14px}.day-name{width:72px;color:#f5f7fbb8}.day svg{color:#f5f7fbb8;margin-right:10px}.day-lo{width:34px;text-align:right;color:#f5f7fb7a}.day-hi{width:34px}.day-bar{position:relative;flex:1;height:4px;margin:0 10px;border-radius:2px;background:#ffffff14}.day-bar i{position:absolute;top:0;bottom:0;border-radius:2px;background:linear-gradient(to right,#0891b2,#d97706)}.ambient-weather{display:flex;align-items:center;margin-top:2.4vh;font-size:2.8vh;color:#f5f7fb}.ambient-weather svg{width:4.2vh;height:4.2vh}.aw-temp{font-size:4.6vh;font-weight:300;margin:0 1.6vh 0 1.2vh}.aw-desc{display:flex;flex-direction:column;font-size:2.2vh;color:#f5f7fbb8;line-height:1.25}.aw-desc small{font-size:1.9vh;color:#f5f7fb7a}.tappable{cursor:pointer;border-radius:10px;transition:background .15s}.tappable:active{background:#ffffff12}.detail{position:relative;text-align:left}.detail-hero{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px}.hero-value{font-size:52px;font-weight:200;letter-spacing:-.03em;line-height:1;margin-bottom:6px}.chips{display:flex;flex-wrap:wrap;margin:0 -4px 12px}.chip{display:flex;align-items:baseline;margin:4px;padding:8px 12px;border-radius:12px;background:#ffffff0f;border:1px solid transparent;font-size:13px;color:#f5f7fbb8}.chip b{margin-left:8px;font-weight:600;color:#f5f7fb}.chip.active{border-color:#ffffff59;background:#ffffff1f;color:#f5f7fb}.detail-tools{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.chip-btn.on{background:#fff3}.chart{position:relative;margin:0 auto}.chart svg{display:block;overflow:visible}.chart-tick{fill:#f5f7fb7a;font-size:11px}.chart-legend{display:flex;justify-content:flex-end;font-size:12px;color:#f5f7fb7a;margin-top:2px}.chart-legend span{display:flex;align-items:center;margin-left:14px}.chart-legend i{width:12px;height:12px;border-radius:3px;margin-right:6px}.chart-legend i.key-line{height:2px;border-radius:1px}.chart-legend i.key-na{border:1px dashed rgba(255,255,255,.35)}.chart-tip{position:absolute;top:0;padding:7px 10px;border-radius:10px;pointer-events:none;white-space:nowrap;transform:translate(-50%);background:#080a10eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 8px 24px #0006;display:flex;flex-direction:column;font-size:12px;color:#f5f7fbb8}.chart-tip b{font-size:15px;color:#f5f7fb}.chart-empty{height:210px;display:flex;align-items:center;justify-content:center;color:#f5f7fb7a;font-size:14px}.stats{display:flex;flex-wrap:wrap;margin:14px -5px 0}.stat{flex:1;min-width:120px;margin:5px;padding:12px 14px;border-radius:14px;background:#ffffff0d}.stat-label{font-size:12px;color:#f5f7fb7a}.stat-value{font-size:22px;font-weight:300;margin-top:4px;white-space:nowrap}.stat-note{font-size:11px;color:#f5f7fb7a;margin-top:2px}.detail-foot{margin-top:10px}.detail .table-wrap{max-height:210px}.root{height:100%}@supports (backdrop-filter: blur(1px)){.q-full .panel,.q-full .glance,.q-full .round,.q-full .chip-btn{backdrop-filter:blur(18px) saturate(140%)}.q-full .panel{background:#0c0e1652}.q-full .modal{backdrop-filter:blur(6px)}.q-full .modal-box{background:#141620d1;backdrop-filter:blur(24px) saturate(150%)}}.q-lite .slide{transform:none!important;transition:opacity .6s linear}.q-lite .soft{display:none}.q-lite .shade.deep{background-color:#04060cd1}.q-lite .sheet-glass .glass-layer{display:none}.q-lite .panel,.q-lite .modal-box,.q-lite .sheet,.q-lite .glance,.q-lite .cell.dragged .panel,.q-lite .light.on,.q-lite .light.on .light-icon,.q-lite .media-art,.q-lite .badge-btn{box-shadow:none!important}.q-lite .ambient-clock,.q-lite .ambient .header{text-shadow:none}.q-lite .eq b,.q-lite .live i,.q-lite .grabber-text,.q-lite .editing .cell,.q-lite .sheet,.q-lite .sheet-layer{-webkit-animation:none!important;animation:none!important}.q-lite .controls,.q-lite .ambient{transition-duration:.2s}.q-lite .cell,.q-lite .light,.q-lite .light-icon,.q-lite .soft{transition:none}@media(max-width:900px),(orientation:portrait){.ambient{display:block;padding-top:0}.ambient-clock{position:absolute;left:6vw;bottom:24vh}.ambient-time{font-size:13vh}.ambient-date{font-size:2.2vh}.glances{position:absolute;left:6vw;right:6vw;bottom:10vh;max-width:none;justify-content:flex-start}.glance{margin:6px 8px 0 0}.controls{padding:16px;padding-top:max(16px,env(safe-area-inset-top))}}@media(max-width:700px){.ambient-clock{left:6vw;right:6vw;text-align:center}.ambient-weather,.glances{justify-content:center}.glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.glance span{display:none}.glance svg{margin:0;width:22px;height:22px}}@media(max-width:900px),(orientation:portrait){.bar-date,.conn{display:none}.sheet-layer{justify-content:center;padding:0 12px 12px;padding-bottom:max(12px,env(safe-area-inset-bottom))}.sheet,.sheet-wide{width:100%}.sheet-cameras .cam{height:220px}.hero-value{font-size:40px}.stat{min-width:40%}.rooms .room-temp{font-size:36px}}.ambient.lock-size-xs .ambient-time{font-size:10vh}.ambient.lock-size-s .ambient-time{font-size:15vh}.ambient.lock-size-l .ambient-time{font-size:28vh}.ambient.lock-size-xl .ambient-time{font-size:34vh}.ambient.lock-center,.ambient.lock-top{flex-direction:column;align-items:center;justify-content:flex-end}.ambient.lock-top{justify-content:flex-start;padding-top:10vh}.ambient.lock-center .ambient-clock,.ambient.lock-top .ambient-clock{position:static;text-align:center}.ambient.lock-center .ambient-weather,.ambient.lock-top .ambient-weather{justify-content:center}.ambient.lock-center .glances,.ambient.lock-top .glances{position:static;max-width:none;justify-content:center;margin-top:3vh}.ambient.lock-center .glance,.ambient.lock-top .glance{margin:6px 5px 0}.ambient.lock-top .ambient-clock{display:flex;flex-direction:column;align-items:center}.ambient-date.above{margin:0 0 1vh}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .ambient-weather{justify-content:flex-start}.ambient.chips-icons .glance{width:52px;height:52px;padding:0;margin:6px 5px 0;justify-content:center;border-radius:50%}.ambient.chips-icons .glance span{display:none}.ambient.chips-icons .glance svg{margin:0;width:22px;height:22px}.ambient.chips-text .glance{width:auto;height:auto;padding:9px 16px 9px 13px;border-radius:999px}.ambient.chips-text .glance span{display:inline}.ambient.chips-text .glance svg{margin-right:8px;width:18px;height:18px}@media(max-width:900px),(orientation:portrait){.ambient.lock-size-xs .ambient-time{font-size:7vh}.ambient.lock-size-s .ambient-time{font-size:10vh}.ambient.lock-size-m .ambient-time{font-size:13vh}.ambient.lock-size-l .ambient-time{font-size:17vh}.ambient.lock-size-xl .ambient-time{font-size:21vh}}@media(max-width:700px){.ambient.lock-size-xs .ambient-time{font-size:15vw}.ambient.lock-size-s .ambient-time{font-size:20vw}.ambient.lock-size-m .ambient-time{font-size:26vw}.ambient.lock-size-l .ambient-time{font-size:31vw}.ambient.lock-size-xl .ambient-time{font-size:35vw}.ambient.lock-corner .ambient-clock{text-align:left}.ambient.lock-corner .glances{justify-content:flex-start}}.ambient.customizing{transform:scale(.9)}.ambient.customizing.panel-up{transform-origin:50% 0;transform:translateY(2vh) scale(.5)}.ambient.customizing .ambient-clock,.ambient.customizing .glances{pointer-events:auto;cursor:pointer;border-radius:18px;padding:10px 14px;border:1.5px dashed rgba(255,255,255,.55);background:#ffffff0f}.ambient.customizing .glances{min-height:64px;min-width:120px}.ambient.customizing .grabber{display:none}.glance-add{color:#f5f7fbb8}.lock-ui{position:absolute;inset:0;z-index:30;pointer-events:none}.lock-top{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;padding-top:max(16px,env(safe-area-inset-top));pointer-events:auto;font-size:14px;color:#f5f7fbb8;text-shadow:0 1px 8px rgba(0,0,0,.5)}.lock-panel{position:absolute;left:50%;bottom:16px;width:420px;max-width:calc(100% - 24px);max-height:70%;overflow-y:auto;transform:translate(-50%);padding:16px 18px 10px;border-radius:24px;pointer-events:auto;background:#141620eb;border:1px solid rgba(255,255,255,.09);box-shadow:0 20px 60px #00000080}.lock-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;font-size:16px}.lock-fonts{display:flex;margin:0 -4px 12px}.lock-font{flex:1;margin:0 4px;height:64px;border-radius:14px;font-size:34px;background:#ffffff0f;border:1.5px solid transparent}.lock-font.on{border-color:#7dd3fc;background:#7dd3fc1f}.lock-colors{display:flex;margin:0 0 6px}.lock-color{width:34px;height:34px;margin-right:10px;border-radius:50%;border:2px solid rgba(255,255,255,.15)}.lock-color.on{border-color:#fff;box-shadow:0 0 0 3px #ffffff40}.lock-widget{display:flex;align-items:center;border-top:1px solid rgba(255,255,255,.09)}.lock-widget .check{flex:1;margin:10px 0}.lock-widget .check svg{margin-right:8px;color:#f5f7fbb8}.lock-widget .icon-btn{width:36px;height:36px;display:flex;align-items:center;justify-content:center}.lock-widget .icon-btn[disabled]{opacity:.25}.option-hint{display:block;margin-top:2px;font-size:12px;color:#f5f7fb7a}.device-parts{margin:0 0 8px 52px}.device-part{display:flex;align-items:center;padding:2px 0}.device-part input[type=checkbox]{width:18px;height:18px;margin:0 8px 0 0;flex-shrink:0}.device-part .part-name{flex:1;min-width:0;padding:6px 10px;border-radius:10px;font-size:13px;background:#ffffff0d;border:1px solid transparent;color:#f5f7fb}.device-part .part-name:focus{border-color:#ffffff17;outline:none}.device-part .icon-btn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.device-part .icon-btn[disabled]{opacity:.25}.device-part.off .part-name{opacity:.45;text-decoration:line-through}.photos-count{display:flex;align-items:center;justify-content:space-between;margin:12px 0 4px;font-size:13px;color:#f5f7fbb8}.photos-count a{color:#7dd3fc;text-decoration:none}.ambient.widgets-top .glances,.ambient.widgets-bottom .glances{position:absolute;left:4vw;right:4vw;max-width:none;margin:0;justify-content:center}.ambient.widgets-top .glances{top:4vh;top:max(4vh,env(safe-area-inset-top));bottom:auto}.ambient.widgets-bottom .glances{bottom:7vh;top:auto}.ambient.widgets-top .glance,.ambient.widgets-bottom .glance{margin:6px 5px 0}.ambient.lock-top.widgets-top{padding-top:18vh}.ambient-time,.ambient-clock,.glances,.grabber-text{transition:color 1.2s ease}.text-contrast .ambient-time,.text-contrast .ambient-date,.text-contrast .ambient-weather,.text-contrast .aw-desc,.text-contrast .aw-desc small,.text-contrast .glance,.text-contrast .glance svg{color:inherit}.text-contrast .ambient-date{opacity:.85}.text-contrast .aw-desc,.text-contrast .aw-desc small{opacity:.8}.text-contrast .glance.lit svg{color:#fbbf24}.text-contrast .ink-dark,.text-contrast .ink-dark .ambient-time{text-shadow:0 1px 24px rgba(255,255,255,.45)}.text-contrast .glances.ink-dark .glance{background:#ffffff80;border-color:#0000001a}.text-contrast .glances.ink-dark .glance.alert{color:#fff}.lock-color-contrast{background:linear-gradient(135deg,#fff 50%,#111 50%)}.lock-color-contrast{padding:0}.lock-color-contrast span{display:block;color:#fff;font-size:16px;font-weight:800;line-height:30px;text-align:center;text-shadow:-1px -1px 0 #111,1px -1px 0 #111,-1px 1px 0 #111,1px 1px 0 #111}';
var Te, N, cn, uo, Qt = 0, ui = [], J = j, fo = J.__b, po = J.__r, mo = J.diffed, go = J.__c, bo = J.unmount, yo = J.__;
function dt(t, e) {
  J.__h && J.__h(N, t, Qt || e), Qt = 0;
  var n = N.__H || (N.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({}), n.__[t];
}
function _(t) {
  return Qt = 1, Ja(pi, t);
}
function Ja(t, e, n) {
  var s = dt(Te++, 2);
  if (s.t = t, !s.__c && (s.__ = [pi(void 0, e), function(c) {
    var d = s.__N ? s.__N[0] : s.__[0], h = s.t(d, c);
    d !== h && (s.__N = [h, s.__[1]], s.__c.setState({}));
  }], s.__c = N, !N.__f)) {
    var i = function(c, d, h) {
      if (!s.__c.__H) return !0;
      var f = !1, u = s.__c.props !== c;
      if (s.__c.__H.__.some(function(p) {
        if (p.__N) {
          f = !0;
          var g = p.__[0];
          p.__ = p.__N, p.__N = void 0, g !== p.__[0] && (u = !0);
        }
      }), a) {
        var l = a.call(this, c, d, h);
        return f ? l || u : l;
      }
      return !f || u;
    };
    N.__f = !0;
    var a = N.shouldComponentUpdate, r = N.componentWillUpdate;
    N.componentWillUpdate = function(c, d, h) {
      if (this.__e) {
        var f = a;
        a = void 0, i(c, d, h), a = f;
      }
      r && r.call(this, c, d, h);
    }, N.shouldComponentUpdate = i;
  }
  return s.__N || s.__;
}
function H(t, e) {
  var n = dt(Te++, 3);
  !J.__s && $n(n.__H, e) && (n.__ = t, n.u = e, N.__H.__h.push(n));
}
function Xn(t, e) {
  var n = dt(Te++, 4);
  !J.__s && $n(n.__H, e) && (n.__ = t, n.u = e, N.__h.push(n));
}
function ne(t) {
  return Qt = 5, fi(function() {
    return { current: t };
  }, []);
}
function fi(t, e) {
  var n = dt(Te++, 7);
  return $n(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__;
}
function Kn(t) {
  var e = N.context[t.__c], n = dt(Te++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(N)), e.props.value) : t.__;
}
function Ga() {
  for (var t; t = ui.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(wt), e.__h.some(Dn), e.__h = [];
    } catch (n) {
      e.__h = [], J.__e(n, t.__v);
    }
  }
}
J.__b = function(t) {
  N = null, fo && fo(t);
}, J.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), yo && yo(t, e);
}, J.__r = function(t) {
  po && po(t), Te = 0;
  var e = (N = t.__c).__H;
  e && (cn === N ? (e.__h = [], N.__h = [], e.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (e.__h.some(wt), e.__h.some(Dn), e.__h = [], Te = 0)), cn = N;
}, J.diffed = function(t) {
  mo && mo(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (ui.push(e) !== 1 && uo === J.requestAnimationFrame || ((uo = J.requestAnimationFrame) || Xa)(Ga)), e.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), cn = N = null;
}, J.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.some(wt), n.__h = n.__h.filter(function(s) {
        return !s.__ || Dn(s);
      });
    } catch (s) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], J.__e(s, n.__v);
    }
  }), go && go(t, e);
}, J.unmount = function(t) {
  bo && bo(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.some(function(s) {
    try {
      wt(s);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && J.__e(e, n.__v));
};
var xo = typeof requestAnimationFrame == "function";
function Xa(t) {
  var e, n = function() {
    clearTimeout(s), xo && cancelAnimationFrame(e), setTimeout(t);
  }, s = setTimeout(n, 35);
  xo && (e = requestAnimationFrame(n));
}
function wt(t) {
  var e = N, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), N = e;
}
function Dn(t) {
  var e = N;
  t.__c = t.__(), N = e;
}
function $n(t, e) {
  return !t || t.length !== e.length || e.some(function(n, s) {
    return n !== t[s];
  });
}
function pi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const mi = "photoframe.quality", we = [];
function gi() {
  try {
    return localStorage.getItem(mi) || "auto";
  } catch {
    return "auto";
  }
}
function Ka(t) {
  try {
    localStorage.setItem(mi, t);
  } catch {
  }
  we.forEach((e) => e());
}
function bi() {
  const t = navigator, e = /Android/i.test(navigator.userAgent);
  return typeof t.deviceMemory == "number" ? t.deviceMemory <= 2 ? "lite" : "full" : e && (!navigator.hardwareConcurrency || navigator.hardwareConcurrency <= 4) ? "lite" : "full";
}
function Oe() {
  const t = gi();
  return t === "auto" ? bi() : t;
}
function $a() {
  const [t, e] = _(Oe());
  return H(() => {
    const n = () => e(Oe());
    return we.push(n), () => {
      we.splice(we.indexOf(n), 1);
    };
  }, []), t;
}
function er() {
  return Oe() === "lite" ? 800 : 150;
}
const Ze = {}, ln = [], tr = 4;
function nr() {
  const t = Oe() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  let e = screen.width * t, n = screen.height * t;
  const s = Math.min(1, (Oe() === "lite" ? 1280 : 2560) / Math.max(e, n));
  return e = Math.round(e * s), n = Math.round(n * s), { w: e, h: n };
}
function or() {
  const t = Oe() === "lite" ? 1 : Math.min(window.devicePixelRatio || 1, 2), e = Math.max(screen.width, screen.height) * t;
  return Math.round(Math.min(Oe() === "lite" ? 1280 : 2560, e));
}
function ir(t, e) {
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
function ko(t) {
  if (!t || /^(data|blob):/.test(t) || !HTMLCanvasElement.prototype.toBlob || t.indexOf("/api/photoframe/photo/") !== -1) return Promise.resolve(t);
  const e = or(), n = t + "@" + e;
  if (n in Ze) return Ze[n];
  const s = ir(t, e);
  for (Ze[n] = s, ln.push(n); ln.length > tr; ) {
    const i = ln.shift(), a = Ze[i];
    delete Ze[i], a.then((r) => {
      /^blob:/.test(r) && URL.revokeObjectURL(r);
    });
  }
  return s;
}
const yi = "photoframe.fit";
function Lt() {
  try {
    return localStorage.getItem(yi) || "auto";
  } catch {
    return "auto";
  }
}
function sr(t) {
  try {
    localStorage.setItem(yi, t);
  } catch {
  }
  we.forEach((e) => e());
}
function ar() {
  const [t, e] = _(Lt());
  return H(() => {
    const n = () => e(Lt());
    return we.push(n), () => {
      we.splice(we.indexOf(n), 1);
    };
  }, []), t;
}
function rr(t, e) {
  const n = Lt();
  return !t || !e || n === "cover" ? !1 : n === "contain" ? !0 : t >= e != window.innerWidth >= window.innerHeight;
}
class eo {
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
    this.emitTimer || (this.emitTimer = window.setTimeout(() => this.emitNow(), er()));
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
          r.forEach((d) => {
            c[d.entity_id] = d;
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
const xi = Gn(null);
function Z() {
  const t = Kn(xi), [, e] = _(0);
  return H(() => t.subscribe(() => e((n) => n + 1)), [t]), t;
}
function nn(t) {
  return t === "on" || t === "open" || t === "playing";
}
function et(t) {
  return t === void 0 || t === "unavailable" || t === "unknown";
}
function Pe(t, e) {
  if (t.status !== "connected" || !t.loaded) return !0;
  const n = t.states[e];
  return !!n && n.state !== "unavailable";
}
function ke(t, e) {
  const n = e ? t.states[e] : void 0;
  return n && !et(n.state) ? n.state : void 0;
}
function Ct(t, e = 1) {
  return t === void 0 || isNaN(parseFloat(t)) ? "--" : parseFloat(t).toFixed(e);
}
function jt(t, e) {
  const n = t.states[e];
  return n && n.attributes.unit_of_measurement ? " " + n.attributes.unit_of_measurement : "";
}
const ki = Gn(() => {
});
function on() {
  return Kn(ki);
}
const cr = "English", lr = {
  _language: cr,
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
}, dr = "Русский", Ar = {
  _language: dr,
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
}, _o = /* @__PURE__ */ Object.assign({ "./locales/en.json": lr, "./locales/ru.json": Ar }), xe = {};
Object.keys(_o).forEach((t) => {
  const e = t.replace(/^.*\/([^/]+)\.json$/, "$1");
  xe[e] = _o[t];
});
const Ft = "en", _i = "photoframe.language";
let tt = Ft;
const Mt = [];
function hr() {
  return Object.keys(xe).sort().map((t) => ({ code: t, name: xe[t]._language || t }));
}
function dn(t) {
  if (!t) return null;
  if (xe[t]) return t;
  const e = t.split(/[-_]/)[0].toLowerCase();
  return xe[e] ? e : null;
}
function vi() {
  try {
    return localStorage.getItem(_i) || "";
  } catch {
    return "";
  }
}
function ur(t) {
  try {
    localStorage.setItem(_i, t);
  } catch {
  }
}
let vo;
function sn(t) {
  t && (vo = t);
  const e = dn(vi()) || dn(vo) || dn(navigator.language) || Ft;
  e !== tt && (tt = e, Mt.forEach((n) => n()));
}
function A(t, e) {
  let n = xe[tt] && xe[tt][t] || xe[Ft] && xe[Ft][t] || t;
  return e && Object.keys(e).forEach((s) => {
    n = n.split("{" + s + "}").join(String(e[s]));
  }), n;
}
function We(t) {
  return A(t).split(",").map((e) => e.trim());
}
sn();
function fr() {
  const [, t] = _(0);
  return H(() => {
    const e = () => t((n) => n + 1);
    return Mt.push(e), () => {
      Mt.splice(Mt.indexOf(e), 1);
    };
  }, []), tt;
}
const He = 12, pr = 2, wi = 2, Ne = 4, Rt = {
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
function nt(t) {
  return A("card." + t + ".title");
}
function Ci(t) {
  return A("card." + t + ".hint");
}
const Ke = {
  amber: "#fbbf24",
  sky: "#7dd3fc",
  green: "#34d399",
  pink: "#f9a8d4",
  violet: "#c4b5fd",
  red: "#fb7185"
};
let Mi = 0;
function mr() {
  return "c" + Date.now().toString(36) + (Mi++).toString(36);
}
function Ei() {
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
function wo(t, e) {
  return t.x < e.x + e.w && e.x < t.x + t.w && t.y < e.y + e.h && e.y < t.y + t.h;
}
function Tn(t, e) {
  return t.y - e.y || t.x - e.x;
}
function ot(t, e = He) {
  const n = Math.max(pr, Math.min(e, Math.round(t.w))), s = Math.max(wi, Math.round(t.h));
  return { ...t, w: n, h: s, x: Math.max(0, Math.min(e - n, Math.round(t.x))), y: Math.max(0, Math.round(t.y)) };
}
function Ie(t, e) {
  const n = [];
  e && n.push(e), t.filter((a) => !e || a.id !== e.id).slice().sort(Tn).forEach((a) => {
    let r = a.y;
    for (let c = 0; c < 500; c++) {
      const d = n.filter((h) => wo({ ...a, y: r }, h));
      if (!d.length) break;
      r = Math.max.apply(null, d.map((h) => h.y + h.h));
    }
    n.push({ ...a, y: r });
  });
  const i = [];
  return n.slice().sort((a, r) => Tn(a, r) || (e && a.id === e.id ? -1 : 0)).forEach((a) => {
    let r = a.y;
    for (; r > 0 && !i.some((c) => wo({ ...a, y: r - 1 }, c)); ) r--;
    i.push({ ...a, y: r });
  }), t.map((a) => i.filter((r) => r.id === a.id)[0]);
}
function On(t) {
  return t.reduce((e, n) => Math.max(e, n.y + n.h), 0);
}
function be(t, e) {
  const n = t, i = (n && Array.isArray(n.screens) ? n.screens : n && Array.isArray(n.cards) ? [n] : []).filter((a) => a && Array.isArray(a.cards)).map((a, r) => ({ ...br(a), id: String(a.id || (r ? "s" + r : "main")), name: String(a.name || "") }));
  return i.length ? i : [{ ...e ? e() : { cols: He, cards: [] }, id: "main", name: "" }];
}
function gr() {
  return "s" + Date.now().toString(36) + (Mi++).toString(36);
}
function Et(t, e) {
  return t.name || A("screen.default", { n: e + 1 });
}
function br(t) {
  if (t.cols === He) return Co(t);
  const e = [], n = (i, a, r, c) => {
    for (let d = a; d < a + c; d++) for (let h = i; h < i + r; h++) if (e[d] && e[d][h]) return !1;
    return !0;
  }, s = t.cards.map((i) => {
    const a = Math.min(i.w || 1, 4), r = i.h || 1;
    for (let c = 0; ; c++)
      for (let d = 0; d + a <= 4; d++)
        if (n(d, c, a, r)) {
          for (let h = c; h < c + r; h++) {
            e[h] = e[h] || [];
            for (let f = d; f < d + a; f++) e[h][f] = !0;
          }
          return { ...i, x: d * 3, y: c * 3, w: a * 3, h: r * 3 };
        }
  });
  return Co({ ...t, cols: He, cards: s });
}
function Co(t) {
  const e = (i) => typeof i == "number" && isFinite(i);
  let n = t.cards.reduce((i, a) => e(a.y) && e(a.h) ? Math.max(i, a.y + a.h) : i, 0);
  const s = t.cards.map((i) => {
    const a = e(i.w) ? i.w : 3, r = e(i.h) ? i.h : 3;
    if (e(i.x) && e(i.y)) return ot({ ...i, w: a, h: r });
    const c = ot({ ...i, x: 0, y: n, w: a, h: r });
    return n += c.h, c;
  });
  return { ...t, cols: He, cards: Ie(s) };
}
function yr(t) {
  const e = t.slice().sort(Tn), n = e.filter((a) => a.m && !a.m.hide).map((a) => ot({ ...a, x: a.m.x, y: a.m.y, w: a.m.w, h: a.m.h }, Ne));
  let s = On(n);
  const i = e.filter((a) => !a.m).map((a) => {
    const r = Math.max(wi, Math.min(Ne, Math.round(a.h * 2 / 3))), c = { ...a, x: 0, y: s, w: Ne, h: r };
    return s += r, c;
  });
  return Ie(n.concat(i));
}
function An(t, e) {
  return t.map((n) => {
    const s = e.filter((i) => i.id === n.id)[0];
    return s ? { ...n, m: { x: s.x, y: s.y, w: s.w, h: s.h } } : n;
  });
}
const xr = "photoframe", it = "photos", kr = 1920;
function Si() {
  return new Promise((t, e) => {
    const n = indexedDB.open(xr, 1);
    n.onupgradeneeded = () => n.result.createObjectStore(it, { keyPath: "id", autoIncrement: !0 }), n.onsuccess = () => t(n.result), n.onerror = () => e(n.error);
  });
}
function to(t, e) {
  return Si().then((n) => new Promise((s, i) => {
    const a = e(n.transaction(it, t).objectStore(it));
    a.onsuccess = () => s(a.result), a.onerror = () => i(a.error);
  }));
}
function hn() {
  return Si().then((t) => new Promise((e, n) => {
    const s = [], i = t.transaction(it, "readonly").objectStore(it).openCursor();
    i.onsuccess = () => {
      const a = i.result;
      a ? (s.push(a.value), a.continue()) : e(s);
    }, i.onerror = () => n(i.error);
  }));
}
function _r(t) {
  return to("readwrite", (e) => e.delete(t));
}
function Mo() {
  return to("readwrite", (t) => t.clear());
}
function zi(t) {
  return new Promise((e, n) => {
    const s = new FileReader();
    s.onerror = () => n(s.error), s.onload = () => {
      const i = new Image();
      i.onerror = () => n(new Error(A("errors.decode", { name: t.name }))), i.onload = () => {
        const a = Math.min(1, kr / Math.max(i.width, i.height)), r = document.createElement("canvas");
        r.width = Math.round(i.width * a), r.height = Math.round(i.height * a), r.getContext("2d").drawImage(i, 0, 0, r.width, r.height);
        const c = r.toDataURL("image/jpeg", 0.85);
        r.width = r.height = 0, e(c);
      }, i.src = s.result;
    }, s.readAsDataURL(t);
  });
}
function vr(t) {
  return zi(t).then((e) => to("readwrite", (n) => n.add({ data: e }))).then(() => {
  });
}
const st = "custom:photoframe-card";
function no(t) {
  if (!t || typeof t != "object") return null;
  if (t.type === st) return t;
  const e = [t.views, t.cards, t.sections, t.card ? [t.card] : null];
  for (const n of e)
    if (Array.isArray(n))
      for (const s of n) {
        const i = no(s);
        if (i) return i;
      }
  return null;
}
function wr() {
  const t = location.pathname.split("/")[1] || "lovelace";
  return t === "lovelace" ? null : t;
}
function Ii(t) {
  return t.call({ type: "photoframe/config" }).then((e) => ({ ...e, type: st }), () => null);
}
function Cr(t, e) {
  return t.call({ type: "lovelace/config", url_path: e }).then(
    (n) => no(n),
    (n) => {
      if (/not found|config_not_found|No config/i.test(n.message)) return null;
      throw n;
    }
  );
}
class qt {
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
      this.busy || (this.config = { ...n, type: st }, e(this.config));
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
      const a = this.dashboard !== void 0 ? this.dashboard : wr();
      return this.client.call({ type: "lovelace/config", url_path: a }).then((r) => {
        const c = no(r);
        if (!c) throw new Error(A("errors.card_not_found", { type: st }));
        return Object.keys(e).forEach((d) => {
          c[d] = e[d];
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
    const e = nr();
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
      throw new Error(A("errors.upload_folder", { folder: this.folder }));
    });
  }
  // album: куда загрузить (подпапка); не задан — альбом этой рамки, а «все» — корень папки фото.
  addPhoto(e, n) {
    if (this.integration) {
      const s = new FormData();
      return s.append("album", n ?? (this.album && this.album !== "all" ? this.album : "")), s.append("file", e, e.name), this.client.fetch("/api/photoframe/upload", { method: "POST", body: s }).then((i) => {
        if (!i.ok)
          throw i.status === 401 || i.status === 403 ? new Error(A("errors.upload_admin")) : i.status === 415 ? new Error(A("errors.decode", { name: e.name })) : new Error(A("errors.upload", { status: i.status }));
      });
    }
    return zi(e).then((s) => this.addPhotoData(s, e.name.replace(/\.[^.]+$/, "") + ".jpg"));
  }
  // Уже уменьшенный кадр (dataURL JPEG) — так же лежат фото, загруженные в браузер до перехода на HA.
  addPhotoData(e, n) {
    return this.folderId().then((s) => {
      const i = atob(e.split(",")[1]), a = new Uint8Array(i.length);
      for (let c = 0; c < i.length; c++) a[c] = i.charCodeAt(c);
      const r = new FormData();
      return r.append("media_content_id", s), r.append("file", new Blob([a], { type: "image/jpeg" }), n), this.client.fetch("/api/media_source/local_source/upload", { method: "POST", body: r }).then((c) => {
        if (!c.ok)
          throw c.status === 401 || c.status === 403 ? new Error(A("errors.upload_admin")) : c.status === 400 || c.status === 404 ? new Error(A("errors.upload_folder", { folder: this.folder })) : new Error(A("errors.upload", { status: c.status }));
      });
    });
  }
  deletePhoto(e) {
    return this.client.call({ type: "media_source/local_source/remove", media_content_id: e });
  }
}
function Bi() {
  try {
    if (window.parent === window) return null;
    const t = window.parent.document.querySelector("home-assistant");
    return t && t.hass && t.hass.auth || null;
  } catch {
    return null;
  }
}
const Nt = "photoframe.haAuth", Mr = "hassTokens";
function Pn(t) {
  try {
    const e = localStorage.getItem(t), n = e ? JSON.parse(e) : null;
    return n && n.hassUrl && n.refresh_token ? n : null;
  } catch {
    return null;
  }
}
function Hn(t) {
  try {
    t ? localStorage.setItem(Nt, JSON.stringify(t)) : localStorage.removeItem(Nt);
  } catch {
  }
}
function Vt(t) {
  return t.replace(/\/+$/, "");
}
function Er() {
  return location.protocol + "//" + location.host + "/";
}
function Sr() {
  return location.protocol + "//" + location.host + location.pathname;
}
function Wt() {
  if (Bi())
    return { hassUrl: location.protocol + "//" + location.host, clientId: "", access_token: "", refresh_token: "", expires: 0, embedded: !0 };
  const t = Pn(Nt);
  if (t) return t;
  const e = Pn(Mr);
  return e && Vt(e.hassUrl) === Vt(location.protocol + "//" + location.host) ? e : null;
}
function zr() {
  Hn(null);
}
function Ir(t, e) {
  return new Promise((n, s) => {
    const i = new XMLHttpRequest();
    i.open("POST", Vt(t) + "/auth/token"), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.timeout = 15e3, i.onload = () => {
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
function Br() {
  const t = Bi();
  if (t) return (t.expired ? t.refreshAccessToken() : Promise.resolve()).then(() => t.accessToken);
  const e = Wt();
  return e ? e.expires > Date.now() + 6e4 ? Promise.resolve(e.access_token) : Ir(e.hassUrl, { grant_type: "refresh_token", refresh_token: e.refresh_token, client_id: e.clientId }).then(
    (n) => {
      const s = { ...e, access_token: n.access_token, expires: Date.now() + n.expires_in * 1e3 };
      return Hn(s), s.access_token;
    },
    (n) => {
      if (/auth 4/.test(n.message))
        return Pn(Nt) && Hn(null), "";
      throw n;
    }
  ) : Promise.resolve("");
}
function Dr(t) {
  const e = Vt(t || location.protocol + "//" + location.host);
  location.href = e + "/auth/authorize?response_type=code&client_id=" + encodeURIComponent(Er()) + "&redirect_uri=" + encodeURIComponent(Sr()) + "&state=" + encodeURIComponent(e);
}
const Di = "photoframe.setup", Be = "photo-frame";
function Tr(t) {
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
function Qn(t) {
  try {
    localStorage.setItem(Di, t);
  } catch {
  }
}
function Or(t) {
  history.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function Ti(t) {
  const e = A("setup.dashboard_title");
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
    config: { title: e, views: [{ title: e, path: "frame", type: "panel", cards: [{ type: st, media_folder: "photoframe" }] }] }
  })).then(() => "/" + Be + "/frame");
}
function Pr(t) {
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
  n.textContent = A("setup.title");
  const s = document.createElement("div");
  s.setAttribute("style", "margin:6px 0 12px;color:rgba(245,247,251,.72)"), s.textContent = A("setup.text");
  const i = document.createElement("div");
  i.setAttribute("style", "display:flex;justify-content:flex-end;gap:8px");
  const a = (d, h) => {
    const f = document.createElement("button");
    return f.textContent = d, f.setAttribute("style", "border:0;border-radius:10px;padding:8px 14px;font:inherit;font-weight:600;cursor:pointer;" + (h ? "background:#7dd3fc;color:#0b0d14" : "background:rgba(255,255,255,.1);color:#f5f7fb")), i.appendChild(f), f;
  }, r = a(A("setup.later"), !1), c = a(A("setup.create"), !0);
  e.appendChild(n), e.appendChild(s), e.appendChild(i), document.body.appendChild(e), r.onclick = () => {
    Qn("dismissed"), e.remove();
  }, c.onclick = () => {
    c.disabled = !0, c.textContent = A("common.loading"), Ti((d) => t.callWS(d)).then((d) => {
      Qn("done"), e.remove(), Or(d);
    }, (d) => {
      c.disabled = !1, c.textContent = A("setup.create"), s.textContent = A("setup.failed", { error: d && d.message || String(d) });
    });
  };
}
function Hr() {
  try {
    if (localStorage.getItem(Di)) return;
  } catch {
    return;
  }
  Tr(3e4).then((t) => {
    if (!(!t || !t.user || !t.user.is_admin))
      return sn(t.language), t.callWS({ type: "lovelace/dashboards/list" }).then((e) => {
        if (e.some((n) => n.url_path === Be)) {
          Qn("done");
          return;
        }
        Pr(t);
      });
  }).catch(() => {
  });
}
const Eo = "photoframe.frameId", Oi = "photoframe.frameName";
function Pi(t) {
  try {
    return localStorage.getItem(t) || "";
  } catch {
    return "";
  }
}
function Hi(t, e) {
  try {
    localStorage.setItem(t, e);
  } catch {
  }
}
function Qi() {
  let t = Pi(Eo);
  if (!t) {
    for (t = ""; t.length < 16; ) t += Math.floor(Math.random() * 16).toString(16);
    Hi(Eo, t);
  }
  return t;
}
function Ut() {
  return Pi(Oi);
}
function So(t) {
  Hi(Oi, t);
}
function Qr() {
  const t = navigator.userAgent;
  return /SmartFrame\//.test(t) ? "Android (APK)" : /iPad|iPhone|iPod/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : "Browser";
}
function Lr(t, e) {
  const n = { type: "photoframe/frame/connect", frame_id: Qi(), model: Qr(), version: "0.3.1" };
  return Ut() && (n.name = Ut()), t.subscribeMessage(n, e);
}
function zo(t, e) {
  t.call({ type: "photoframe/frame/report", frame_id: Qi(), ...e }).catch(() => {
  });
}
const ce = "main", Li = "photoframe.cache", ji = "photoframe.mainHome", Fi = "photoframe.startScreen";
function Yt() {
  try {
    return localStorage.getItem(ji) || ce;
  } catch {
    return ce;
  }
}
function Zt() {
  try {
    return localStorage.getItem(Fi) || "";
  } catch {
    return "";
  }
}
const Jt = () => be(null, Ei), mt = "photoframe.localBackup", un = "photoframe.migrated";
function fn(t) {
  return { screens: t.map((e) => ({ id: e.id, name: e.name, cols: e.cols, cards: e.cards })) };
}
function jr() {
  return {
    settings: {
      haUrl: "",
      slideIntervalMs: 1e4,
      idleSec: 45
    },
    homes: [{ id: ce, name: A("home.default_name") }],
    screens: { [ce]: Jt() },
    active: Yt(),
    screen: Zt(),
    layout: Jt()[0],
    photos: [],
    sync: "connecting"
  };
}
function Fr() {
  const t = jr();
  try {
    const e = localStorage.getItem(Li);
    if (e) {
      const n = JSON.parse(e), s = {};
      if (n.screens) Object.keys(n.screens).forEach((c) => {
        s[c] = be({ screens: n.screens[c] });
      });
      else {
        const c = n.layouts || (n.layout ? { [ce]: n.layout } : {});
        Object.keys(c).forEach((d) => {
          s[d] = be(c[d]);
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
class Rr {
  constructor() {
    this.state = Fr(), this.listeners = [], this.card = null, this.ui = { controls: !1, editing: !1 }, this.photoTimer = 0, this.bundled = [], this.photoError = "", this.cardError = "", this.haClient = null, this.haLink = "none", this.migration = null, this.frameOff = null, this.frameClient = null, this.commandListeners = [];
  }
  subscribe(e) {
    return this.listeners.push(e), () => {
      this.listeners = this.listeners.filter((n) => n !== e);
    };
  }
  set(e) {
    const n = { ...this.state, ...e };
    n.homes.some((a) => a.id === n.active) || (n.active = ce);
    const s = n.screens[n.active] || be(null), i = s.filter((a) => a.id === n.screen)[0] || s[0];
    if (n.screen = i.id, n.layout = i, this.state = n, e.settings || e.screens || e.homes || e.photos)
      try {
        const { settings: a, homes: r, screens: c, photos: d } = this.state;
        localStorage.setItem(Li, JSON.stringify({
          settings: a,
          homes: r,
          screens: c,
          photos: this.state.sync === "local" ? [] : d
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
      localStorage.setItem(ji, e), localStorage.setItem(Fi, n);
    } catch {
    }
    this.listeners.forEach((s) => s());
  }
  goStart() {
    this.setActive(Yt(), Zt());
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
    const n = e.homes && e.homes.length ? e.homes.map((r) => ({ id: r.id, name: r.name })) : [{ id: ce, name: A("home.default_name") }], s = {};
    n.forEach((r) => {
      const c = e.layouts && e.layouts[r.id];
      s[r.id] = c ? be(c) : r.id === ce ? Jt() : be(null);
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
    const e = Wt();
    if (!e || this.haClient) return;
    const n = new eo(e.hassUrl, Br);
    this.haClient = n, this.haLink = "connecting";
    let s = "";
    n.subscribe(() => {
      n.status !== s && (s = n.status, n.status === "connected" ? Ii(n).then((i) => {
        if (i) {
          this.useIntegration(n, i);
          return;
        }
        this.loadHaCard(), n.subscribeMessage({ type: "subscribe_events", event_type: "lovelace_updated" }, (a) => {
          a && a.data && a.data.url_path === Be && this.loadHaCard();
        });
      }) : n.status === "auth_invalid" && (this.haLink = "error", this.notify()));
    }), n.connect(), this.notify();
  }
  // Интеграция Photo Frame: данные в её хранилище, изменения — по её подписке.
  useIntegration(e, n) {
    this.haLink = "ready", this.card && this.card.integration ? (this.card.config = n, this.applyCardConfig(n)) : (this.offerMigration(), this.attachCard(new qt(e, n, void 0, !0, !0))), this.card.watch((i) => this.applyCardConfig(i)), this.frameClient = e, this.connectThisFrame();
  }
  connectThisFrame() {
    const e = this.frameClient;
    e && (this.frameOff && this.frameOff(), this.frameOff = Lr(e, (n) => n.type === "state" ? this.applyFrameState(n) : this.commandListeners.forEach((s) => s(n))));
  }
  // Команды из HA (кнопки устройства, службы): следующее фото, показать камеру… Выполняет App.
  onCommand(e) {
    return this.commandListeners.push(e), () => {
      this.commandListeners = this.commandListeners.filter((n) => n !== e);
    };
  }
  applyFrameState(e) {
    if (e.name && e.name !== Ut() && So(e.name), e.start_screen) {
      const [i, a] = e.start_screen.split("/");
      (i !== Yt() || a !== Zt()) && this.setStart(i, a);
    }
    const n = this.card, s = e.album || "all";
    n && n.album !== s && (n.album = s, this.reloadCardPhotos()), this.notify();
  }
  // Имя рамки поменяли на ней самой — переподключаемся, HA узнает новое имя.
  renameFrame(e) {
    So(e), this.frameClient && this.frameClient.status === "connected" && this.connectThisFrame();
  }
  loadHaCard() {
    const e = this.haClient;
    e && (this.card && this.card.busy || Cr(e, Be).then((n) => {
      if (!n) {
        this.haLink = "missing", this.notify();
        return;
      }
      if (this.haLink = "ready", this.card) {
        this.card.config = n, this.applyCardConfig(n);
        return;
      }
      this.offerMigration(), this.attachCard(new qt(e, n, Be, !0));
    }, () => {
      this.haLink = "error", this.notify();
    }));
  }
  // Создать в HA дашборд «Фоторамка» с карточкой (нужен администратор HA).
  createHaDashboard() {
    const e = this.haClient;
    return e ? Ti((n) => e.call(n)).then(() => this.loadHaCard()) : Promise.reject(new Error("not connected"));
  }
  // Первый переход на HA: запоминаем свои экраны (если их меняли) и считаем фото в браузере.
  offerMigration() {
    let e = "";
    try {
      e = localStorage.getItem(un) || "";
    } catch {
    }
    if (e === "done") return;
    if (!e) {
      const { homes: s, screens: i } = this.state, a = s.length > 1 || JSON.stringify(fn(i[ce] || [])) !== JSON.stringify(fn(Jt()));
      try {
        a && localStorage.setItem(mt, JSON.stringify({ homes: s, screens: i })), localStorage.setItem(un, "pending");
      } catch {
      }
    }
    const n = this.backup();
    hn().then((s) => s.length, () => 0).then((s) => {
      n || s ? (this.migration = { screens: !!n, photos: s }, this.notify()) : this.finishMigration();
    });
  }
  backup() {
    try {
      const e = localStorage.getItem(mt);
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
      s[i.id] = be({ screens: e.screens[i.id] || [] });
    }), this.set({ homes: n, screens: s }), this.saveCard({ homes: n, layouts: this.packAll() });
    try {
      localStorage.removeItem(mt);
    } catch {
    }
    this.updateMigration({ screens: !1 });
  }
  // Фото из браузера — в медиатеку HA; после загрузки из браузера их убираем.
  migratePhotos(e) {
    const n = this.card;
    return n ? hn().then((s) => s.reduce(
      (i, a, r) => i.then(() => n.addPhotoData(a.data, "frame-" + a.id + ".jpg")).then(() => {
        e && e(r + 1, s.length);
      }),
      Promise.resolve()
    )).then(() => Mo()).then(() => (this.updateMigration({ photos: 0 }), this.reloadCardPhotos())) : Promise.resolve();
  }
  dismissMigration() {
    try {
      localStorage.removeItem(mt);
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
      localStorage.setItem(un, "done");
    } catch {
    }
    this.migration = null, this.notify();
  }
  reloadLocalPhotos() {
    return hn().then((e) => this.set({ photos: e.map((n) => ({ id: n.id, url: n.data })) })).catch(() => this.set({ photos: [] }));
  }
  applyHomes(e) {
    const n = {};
    e.forEach((s) => {
      n[s.id] = this.state.screens[s.id] || be(null);
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
    return this.state.screens[e] || be(null);
  }
  packAll() {
    const e = {};
    return Object.keys(this.state.screens).forEach((n) => {
      e[n] = fn(this.state.screens[n]);
    }), e;
  }
  // Экраны дома целиком: в конфиг карточки HA (без неё — только в этот браузер, через кэш).
  saveScreens(e, n, s) {
    const i = { screens: { ...this.state.screens, [e]: n } };
    s && (i.screen = s), this.set(i), this.card && this.saveCard({ layouts: this.packAll() });
  }
  // Новый пустой экран в конце списка показанного дома — сразу на него и переходим.
  addScreen(e) {
    const n = { id: gr(), name: e, cols: 12, cards: [] };
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
    const i = this.card, a = i ? (h) => i.addPhoto(h, s) : (h) => vr(h), r = () => i ? this.reloadCardPhotos() : this.reloadLocalPhotos(), c = [];
    let d = 0;
    return e.reduce(
      (h, f) => h.then(() => a(f)).catch((u) => {
        c.push(u && u.message || String(u));
      }).then(() => {
        d++, n && n(d, e.length);
      }),
      Promise.resolve()
    ).then(() => d > c.length ? r() : void 0).then(() => {
      if (c.length)
        throw c.length === e.length ? new Error(c[0]) : new Error(A("errors.upload_some", { failed: c.length, total: e.length }) + " — " + c[0]);
    });
  }
  deletePhoto(e) {
    return this.card ? this.card.deletePhoto(String(e)).then(() => this.reloadCardPhotos()) : _r(Number(e)).then(() => this.reloadLocalPhotos());
  }
  clearPhotos() {
    return this.card ? this.state.photos.reduce((e, n) => e.then(() => this.card.deletePhoto(String(n.id))), Promise.resolve()).then(() => this.reloadCardPhotos()) : Mo().then(() => this.reloadLocalPhotos());
  }
}
const K = new Rr();
function Ye() {
  const [, t] = _(0);
  return H(() => K.subscribe(() => t((e) => e + 1)), []), K;
}
const Je = {};
function qr(t, e, n) {
  t /= 255, e /= 255, n /= 255;
  const s = Math.max(t, e, n), i = Math.min(t, e, n), a = (s + i) / 2;
  if (s === i) return [0, 0, a];
  const r = s - i, c = a > 0.5 ? r / (2 - s - i) : r / (s + i);
  return [(s === t ? (e - n) / r + (e < n ? 6 : 0) : s === e ? (n - t) / r + 2 : (t - e) / r + 4) * 60, c, a];
}
function Nr(t) {
  return new Promise((e) => {
    const n = new Image();
    n.onload = () => {
      try {
        const s = 48 / Math.max(n.width, n.height), i = document.createElement("canvas");
        i.width = Math.max(1, Math.round(n.width * s)), i.height = Math.max(1, Math.round(n.height * s));
        const a = i.getContext("2d");
        a.drawImage(n, 0, 0, i.width, i.height);
        const r = a.getImageData(0, 0, i.width, i.height).data;
        let c = 0, d = 0, h = 0, f = 0;
        for (let g = 0; g < r.length; g += 4)
          c += r[g], d += r[g + 1], h += r[g + 2], f++;
        const u = qr(c / f, d / f, h / f), l = Math.round(u[0]), p = Math.round(Math.min(Math.max(u[1], 0.45), 0.85) * 100);
        e({
          thumb: i.toDataURL("image/jpeg", 0.7),
          accent: "hsl(" + l + "," + p + "%,68%)",
          accentSoft: "hsla(" + l + "," + p + "%,60%,0.22)"
        });
      } catch {
        e(null);
      }
    }, n.onerror = () => e(null), n.src = t;
  });
}
function Vr(t) {
  const [e, n] = _(t && Je[t] || null);
  return H(() => {
    if (!t) return;
    if (t in Je) {
      Je[t] && n(Je[t]);
      return;
    }
    let s = !0;
    return Nr(t).then((i) => {
      Je[t] = i, s && i && n(i);
    }), () => {
      s = !1;
    };
  }, [t]), e;
}
const Wr = 0.18, Ur = 0.5, Yr = 600, Io = 10;
function pn(t, e) {
  for (; t && t.nodeType === 1; t = t.parentElement)
    if ((t.matches || t.webkitMatchesSelector).call(t, e)) return t;
  return null;
}
function Bo(t) {
  return "touches" in t ? (t.touches[0] || t.changedTouches[0]).clientY : t.clientY;
}
function Zr(t, e, n, s, i) {
  H(() => {
    const a = t.root.current;
    if (!a || !s) return;
    let r = 0, c = 0, d = 0, h = !1, f = 0;
    const u = (y) => {
      const C = t.controls.current, m = t.ambient.current, M = t.soft.current, D = a.clientHeight;
      C && (C.style.opacity = String(y), C.style.transform = "scale(" + (0.96 + 0.04 * y).toFixed(4) + ")"), m && (m.style.transform = "translateY(" + Math.round(-y * D) + "px)"), M && (M.style.opacity = String(y));
    }, l = () => {
      [t.controls.current, t.ambient.current, t.soft.current].forEach((y) => {
        y && (y.style.opacity = "", y.style.transform = "");
      });
    }, p = (y) => {
      const C = y.target;
      e && (!pn(C, ".bar") || pn(C, "button")) || (r = Bo(y), c = Date.now(), d = 0, h = !0, a.classList.add("dragging"), clearTimeout(f), !e && i && !pn(C, "button") && (f = window.setTimeout(() => {
        !h || Math.abs(d) > Io || (h = !1, a.classList.remove("dragging"), l(), i());
      }, Yr)));
    }, g = (y) => {
      if (!h) return;
      d = Bo(y) - r, Math.abs(d) > Io && clearTimeout(f);
      const C = a.clientHeight, m = e ? 1 - Math.max(0, d) / C : Math.max(0, -d) / C;
      u(Math.min(1, Math.max(0, m))), y.cancelable && y.preventDefault();
    }, w = () => {
      if (clearTimeout(f), !h) return;
      h = !1, a.classList.remove("dragging");
      const y = a.clientHeight, C = Math.abs(d) / Math.max(1, Date.now() - c), m = Math.abs(d) > y * Wr || C > Ur && Math.abs(d) > 30;
      l(), !e && d < 0 && m && n(!0), e && d > 0 && m && n(!1);
    };
    return a.addEventListener("touchstart", p), a.addEventListener("touchmove", g), a.addEventListener("touchend", w), a.addEventListener("touchcancel", w), a.addEventListener("mousedown", p), window.addEventListener("mousemove", g), window.addEventListener("mouseup", w), () => {
      clearTimeout(f), a.removeEventListener("touchstart", p), a.removeEventListener("touchmove", g), a.removeEventListener("touchend", w), a.removeEventListener("touchcancel", w), a.removeEventListener("mousedown", p), window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", w);
    };
  }, [e, s]);
}
function Jr(t) {
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
function Gr({ urls: t, index: e, tone: n, soft: s, softRef: i, onShow: a }) {
  ar();
  const [r, c] = _([]), d = ne(0), h = t.length, f = h ? t[e % h] : "";
  return H(() => {
    if (!f) {
      c([]);
      return;
    }
    let u = !0;
    return ko(f).then((l) => Jr(l).then((p) => ({ url: l, m: p }))).then(({ url: l, m: p }) => {
      if (!u) return;
      const g = ++d.current;
      c((w) => w.slice(-1).map((y) => ({ ...y, on: !1 })).concat({ id: g, url: l, on: !1, w: p.w, h: p.h, glow: p.glow })), requestAnimationFrame(() => requestAnimationFrame(() => {
        u && c((w) => w.map((y) => y.id === g ? { ...y, on: !0 } : y));
      })), a(l);
    }), h > 1 && ko(t[(e + 1) % h]), () => {
      u = !1;
    };
  }, [f]), /* @__PURE__ */ o("div", { class: "backdrop", children: [
    h === 0 && /* @__PURE__ */ o("div", { class: "slide active aurora" }),
    r.map((u) => rr(u.w, u.h) ? /* @__PURE__ */ o("div", { class: "slide contain" + (u.on ? " active" : ""), children: [
      u.glow && /* @__PURE__ */ o("div", { class: "slide-glow", style: { backgroundImage: "url(" + u.glow + ")" } }),
      /* @__PURE__ */ o("div", { class: "slide-photo", style: { backgroundImage: "url(" + u.url + ")" } })
    ] }, u.id) : /* @__PURE__ */ o("div", { class: "slide" + (u.on ? " active" : ""), style: { backgroundImage: "url(" + u.url + ")" } }, u.id)),
    /* @__PURE__ */ o("div", { ref: i, class: "soft" + (s ? " on" : ""), style: n ? { backgroundImage: "url(" + n.thumb + ")" } : void 0 }),
    /* @__PURE__ */ o("div", { class: "shade" + (s ? " deep" : "") })
  ] });
}
const Gt = (...t) => t.filter((e, n, s) => !!e && e.trim() !== "" && s.indexOf(e) === n).join(" ").trim();
function Xr(t, e, n = []) {
  throw new Error("[lucide]: iconNode is required when icon name is used");
}
const Kr = (t) => {
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
const $r = (t) => {
  const e = Kr(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
};
const Se = {
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
function mn(t) {
  return t != null;
}
function ec(t, e = {}) {
  const n = e.attributeNames ?? {}, s = (l) => n[l] ?? l, i = t.size ?? t.width ?? Se.width, a = t.size ?? t.height ?? Se.height, r = t.aliases?.filter((l) => typeof l == "string" && l.trim() !== "").map((l) => `lucide-${l}`) ?? [], c = [...t.name ? [`lucide-${t.name}`] : [], ...r], d = e.className?.split(" ").filter(Boolean) ?? [], h = e.includeDefaultClasses === !1 ? Gt(...d) : Gt("lucide", ...c, ...d), f = e.absoluteStrokeWidth ? Number(e.strokeWidth ?? Se["stroke-width"]) * Number(t.size ?? t.width ?? Se.width) / Number(e.size ?? e.width ?? Se.width) : e.strokeWidth ?? Se["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Se).reduce((l, [p, g]) => (l[s(p)] = g, l), {}),
      ..."color" in e && e.color && {
        [s("stroke")]: e.color
      },
      ..."size" in e && mn(e.size) && {
        [s("width")]: e.size,
        [s("height")]: e.size
      },
      ..."width" in e && mn(e.width) && {
        [s("width")]: e.width
      },
      ..."height" in e && mn(e.height) && {
        [s("height")]: e.height
      },
      [s("stroke-width")]: f,
      ...h && {
        [s("class")]: h
      },
      [s("viewBox")]: `0 0 ${i} ${a}`,
      ...e.hasA11yProp === !1 ? {
        [s("aria-hidden")]: "true"
      } : {},
      ..."attributes" in e && e.attributes
    },
    t.node.map((l) => {
      const [p, g, w] = l, y = e.nonScalingStroke ? { [s("vector-effect")]: "non-scaling-stroke", ...g } : g;
      return w ? [p, y, w] : [p, y];
    })
  ];
}
const tc = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
};
const nc = Gn({
  size: 24,
  color: "currentColor",
  strokeWidth: 2,
  absoluteStrokeWidth: !1,
  nonScalingStroke: !1,
  class: ""
}), oc = () => Kn(nc);
const ic = ({
  color: t,
  size: e,
  width: n,
  height: s,
  strokeWidth: i,
  absoluteStrokeWidth: a,
  nonScalingStroke: r,
  children: c,
  iconNode: d = [],
  icon: h = {
    node: d,
    aliases: [],
    size: 24
  },
  class: f = "",
  ...u
}) => {
  const {
    size: l = 24,
    strokeWidth: p = 2,
    absoluteStrokeWidth: g = !1,
    nonScalingStroke: w = !1,
    color: y = "currentColor",
    class: C = ""
  } = oc() ?? {}, [m, M, D = []] = ec(h, {
    color: t ?? y,
    width: n ?? e ?? l,
    height: s ?? e ?? l,
    strokeWidth: i ?? p,
    absoluteStrokeWidth: a ?? g,
    nonScalingStroke: r ?? w,
    className: Gt(C, f),
    hasA11yProp: !!c || tc(u),
    attributes: u
  });
  return Pt(m, { ...M }, [
    ...D.map(([O, E]) => Pt(O, E)),
    ...ci(c)
  ]);
};
function v(t, e, n = []) {
  const s = typeof t == "string" ? Xr(t, e, n) : t, i = ({ class: a = "", className: r = "", children: c, ...d }) => Pt(
    ic,
    {
      ...d,
      icon: s,
      class: Gt(a, r)
    },
    c
  );
  return s.name && (i.displayName = $r(s.name)), i;
}
const Ri = {
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
Ri.node;
const sc = v(Ri);
const qi = {
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
qi.node;
const Ni = v(qi);
const Vi = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
Vi.node;
const Wi = v(Vi);
const Ui = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
Ui.node;
const Yi = v(Ui);
const Zi = {
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
Zi.node;
const ac = v(Zi);
const Ji = {
  name: "bed",
  size: 24,
  node: [
    ["path", { d: "M2 4v16", key: "vw9hq8" }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
    ["path", { d: "M2 17h20", key: "18nfp3" }],
    ["path", { d: "M6 8v9", key: "1yriud" }]
  ]
};
Ji.node;
const rc = v(Ji);
const Gi = {
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
Gi.node;
const cc = v(Gi);
const Xi = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
Xi.node;
const lc = v(Xi);
const Ki = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
Ki.node;
const dc = v(Ki);
const $i = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
$i.node;
const Ac = v($i);
const es = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
es.node;
const hc = v(es);
const ts = {
  name: "chevron-up",
  size: 24,
  node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
};
ts.node;
const uc = v(ts);
const ns = {
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
ns.node;
const fc = v(ns);
const os = {
  name: "cloud-fog",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 17H7", key: "pygtm1" }],
    ["path", { d: "M17 21H9", key: "1u2q02" }]
  ]
};
os.node;
const pc = v(os);
const is = {
  name: "cloud-lightning",
  size: 24,
  node: [
    ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
    ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
  ]
};
is.node;
const gn = v(is);
const ss = {
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
ss.node;
const Do = v(ss);
const as = {
  name: "cloud-rain",
  size: 24,
  node: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "M16 14v6", key: "1j4efv" }],
    ["path", { d: "M8 14v6", key: "17c4r9" }],
    ["path", { d: "M12 16v6", key: "c8a4gj" }]
  ]
};
as.node;
const mc = v(as);
const rs = {
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
rs.node;
const cs = v(rs);
const ls = {
  name: "cloud-upload",
  size: 24,
  node: [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
  ],
  aliases: ["upload-cloud"]
};
ls.node;
const gc = v(ls);
const ds = {
  name: "cloud",
  size: 24,
  node: [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]]
};
ds.node;
const As = v(ds);
const hs = {
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
hs.node;
const bc = v(hs);
const us = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
us.node;
const yc = v(us);
const fs = {
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
fs.node;
const xc = v(fs);
const ps = {
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
ps.node;
const Qe = v(ps);
const ms = {
  name: "eighth-notes",
  size: 24,
  node: [
    ["path", { d: "M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19", key: "uy6ho8" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
    ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }]
  ],
  aliases: ["music"]
};
ms.node;
const kc = v(ms);
const gs = {
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
gs.node;
const bs = v(gs);
const ys = {
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
ys.node;
const xs = v(ys);
const ks = {
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
ks.node;
const _s = v(ks);
const vs = {
  name: "gauge",
  size: 24,
  node: [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
  ]
};
vs.node;
const ws = v(vs);
const Cs = {
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
Cs.node;
const _c = v(Cs);
const Ms = {
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
Ms.node;
const vc = v(Ms);
const Es = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
Es.node;
const wc = v(Es);
const Ss = {
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
Ss.node;
const Cc = v(Ss);
const zs = {
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
zs.node;
const Mc = v(zs);
const Is = {
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
Is.node;
const Ec = v(Is);
const Bs = {
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
Bs.node;
const Sc = v(Bs);
const Ds = {
  name: "lock",
  size: 24,
  node: [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
  ]
};
Ds.node;
const zc = v(Ds);
const Ts = {
  name: "log-in",
  size: 24,
  node: [
    ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
    ["path", { d: "M15 12H3", key: "6jk70r" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
  ]
};
Ts.node;
const Ic = v(Ts);
const Os = {
  name: "log-out",
  size: 24,
  node: [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
  ]
};
Os.node;
const Bc = v(Os);
const Ps = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
};
Ps.node;
const Dc = v(Ps);
const Hs = {
  name: "minus",
  size: 24,
  node: [["path", { d: "M5 12h14", key: "1ays0h" }]]
};
Hs.node;
const Tc = v(Hs);
const Qs = {
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
Qs.node;
const Ls = v(Qs);
const js = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
js.node;
const Oc = v(js);
const Fs = {
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
Fs.node;
const Rs = v(Fs);
const qs = {
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
qs.node;
const Pc = v(qs);
const Ns = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Ns.node;
const je = v(Ns);
const Vs = {
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
Vs.node;
const Hc = v(Vs);
const Ws = {
  name: "power",
  size: 24,
  node: [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
  ]
};
Ws.node;
const at = v(Ws);
const Us = {
  name: "rotate-ccw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
  ]
};
Us.node;
const Qc = v(Us);
const Ys = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
Ys.node;
const Lc = v(Ys);
const Zs = {
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
Zs.node;
const jc = v(Zs);
const Js = {
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
Js.node;
const Fc = v(Js);
const Gs = {
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
Gs.node;
const Rc = v(Gs);
const Xs = {
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
Xs.node;
const qc = v(Xs);
const Ks = {
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
Ks.node;
const oo = v(Ks);
const $s = {
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
$s.node;
const Nc = v($s);
const ea = {
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
ea.node;
const Ln = v(ea);
const ta = {
  name: "speaker",
  size: 24,
  node: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
    ["path", { d: "M12 14h.01", key: "1etili" }]
  ]
};
ta.node;
const na = v(ta);
const oa = {
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
oa.node;
const ia = v(oa);
const sa = {
  name: "table-2",
  size: 24,
  node: [
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
  ]
};
sa.node;
const Vc = v(sa);
const aa = {
  name: "thermometer",
  size: 24,
  node: [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]]
};
aa.node;
const ra = v(aa);
const ca = {
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
ca.node;
const rt = v(ca);
const la = {
  name: "tv",
  size: 24,
  node: [
    ["path", { d: "m17 2-5 5-5-5", key: "16satq" }],
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]
  ]
};
la.node;
const jn = v(la);
const da = {
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
da.node;
const Wc = v(da);
const Aa = {
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
Aa.node;
const Uc = v(Aa);
const ha = {
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
ha.node;
const Yc = v(ha);
const ua = {
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
ua.node;
const Zc = v(ua);
const fa = {
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
fa.node;
const Jc = v(fa);
const pa = {
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
pa.node;
const Gc = v(pa);
const ma = {
  name: "wind",
  size: 24,
  node: [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
  ]
};
ma.node;
const Xt = v(ma);
const ga = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
ga.node;
const Fe = v(ga);
const ba = {
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
ba.node;
const Xc = v(ba), Kt = {
  lightbulb: Sc,
  lamp: Ec,
  "lamp-ceiling": Cc,
  "lamp-desk": Mc,
  plug: Hc,
  fan: xs,
  tv: jn,
  speaker: na,
  thermometer: ra,
  droplets: Qe,
  snowflake: oo,
  flame: _s,
  wind: Xt,
  sun: ia,
  moon: Ls,
  shield: Fc,
  door: xc,
  lock: zc,
  blinds: cc,
  video: Uc,
  "washing-machine": Jc,
  zap: Xc,
  gauge: ws,
  activity: sc,
  "air-vent": Ni,
  "cloud-sun": cs,
  sparkles: Ln,
  house: _c,
  sofa: Nc,
  bed: rc,
  "cooking-pot": bc,
  baby: ac
};
function Re(t, e = "house") {
  return Kt[t] || Kt[e];
}
function io(t, e) {
  const n = t.split(".")[0];
  return n === "light" ? "lamp-ceiling" : n === "switch" ? "lamp" : n === "fan" ? "fan" : n === "camera" ? "video" : n === "climate" ? "air-vent" : n === "weather" ? "cloud-sun" : n === "media_player" ? e === "tv" ? "tv" : "speaker" : n === "lock" ? "lock" : n === "cover" ? "blinds" : n === "scene" || n === "script" || n === "automation" ? "sparkles" : e === "temperature" ? "thermometer" : e === "humidity" || e === "moisture" ? "droplets" : e === "door" || e === "window" || e === "opening" ? "door" : e === "power" || e === "voltage" || e === "energy" || e === "current" ? "zap" : e === "motion" || e === "occupancy" ? "activity" : "gauge";
}
function ya(t = 1e3) {
  const [e, n] = _(/* @__PURE__ */ new Date());
  return H(() => {
    const s = setInterval(() => n(/* @__PURE__ */ new Date()), t);
    return () => clearInterval(s);
  }, [t]), e;
}
function bn(t) {
  return t < 10 ? "0" + t : String(t);
}
function xa(t, e = !1) {
  return bn(t.getHours()) + ":" + bn(t.getMinutes()) + (e ? ":" + bn(t.getSeconds()) : "");
}
function ka(t) {
  return A("date.full", { weekday: We("date.weekdays")[t.getDay()], day: t.getDate(), month: We("date.months")[t.getMonth()] });
}
const _a = { thin: 200, light: 300, regular: 500, bold: 700 }, va = {
  white: "#ffffff",
  contrast: "",
  accent: "",
  warm: "#fcd34d",
  mint: "#6ee7b7",
  sky: "#7dd3fc",
  rose: "#fda4af"
}, wa = "photoframe.lockscreen", Ca = "photoframe.hiddenChips", St = [];
function gt() {
  return { font: "thin", color: "white", size: "m", layout: "auto", date: !0, datePos: "auto", weather: !0, chipStyle: "auto", widgetsPos: "clock", hidden: [], order: [] };
}
function Ma() {
  try {
    const t = localStorage.getItem(wa);
    if (t) return { ...gt(), ...JSON.parse(t) };
    const e = localStorage.getItem(Ca);
    return e ? { ...gt(), hidden: JSON.parse(e) } : gt();
  } catch {
    return gt();
  }
}
function ue(t) {
  try {
    localStorage.setItem(wa, JSON.stringify({ ...Ma(), ...t })), localStorage.removeItem(Ca);
  } catch {
  }
  St.forEach((e) => e());
}
function Ea() {
  const [, t] = _(0);
  return H(() => {
    const e = () => t((n) => n + 1);
    return St.push(e), () => {
      St.splice(St.indexOf(e), 1);
    };
  }, []), Ma();
}
function Kc(t, e) {
  const n = (s) => {
    const i = e.order.indexOf(s);
    return i === -1 ? 1e6 : i;
  };
  return t.map((s, i) => ({ c: s, i })).sort((s, i) => n(s.c.id) - n(i.c.id) || s.i - i.i).map((s) => s.c);
}
const ge = "#0891b2", Fn = "#d97706", To = "rgba(255,255,255,0.13)", $c = "rgba(255,255,255,0.04)", Oo = "rgba(255,255,255,0.08)", Po = "#141620", qe = 210, se = { l: 46, r: 14, t: 14, b: 26 };
function $t(t) {
  return t < 10 ? "0" + t : String(t);
}
function Le(t) {
  const e = new Date(t);
  return $t(e.getHours()) + ":" + $t(e.getMinutes());
}
function ct(t) {
  const e = new Date(t);
  return A("date.day_month", { day: e.getDate(), month: We("date.months_short")[e.getMonth()] });
}
function Ce(t, e) {
  return e === "24h" ? Le(t) : ct(t) + ", " + Le(t);
}
function ee(t) {
  const e = Math.abs(t), n = e >= 100 ? t.toFixed(0) : e >= 10 ? t.toFixed(1) : e >= 1 ? t.toFixed(2) : t.toFixed(3);
  return n.indexOf(".") === -1 ? n : n.replace(/\.?0+$/, "");
}
function el(t, e, n) {
  t === e && (t -= 1, e += 1);
  const s = (e - t) / n, i = Math.pow(10, Math.floor(Math.log(s) / Math.LN10)), a = [1, 2, 5, 10].map((c) => c * i).filter((c) => c >= s)[0], r = [];
  for (let c = Math.floor(t / a) * a; c <= e + a * 1e-3; c += a) r.push(+c.toFixed(10));
  return r[r.length - 1] < e && r.push(r[r.length - 1] + a), r;
}
function tl(t, e, n) {
  const s = [], i = new Date(t);
  if (n === "24h")
    for (i.setMinutes(0, 0, 0), i.setHours(Math.ceil(i.getHours() / 6) * 6); i.getTime() <= e; i.setHours(i.getHours() + 6)) s.push({ t: i.getTime(), label: Le(i.getTime()) });
  else {
    i.setHours(0, 0, 0, 0), i.setDate(i.getDate() + 1);
    const a = n === "7d" ? 1 : 5;
    for (; i.getTime() <= e; i.setDate(i.getDate() + a))
      s.push({ t: i.getTime(), label: n === "7d" ? We("date.weekdays_short")[i.getDay()] : i.getDate() + "." + $t(i.getMonth() + 1) });
  }
  return s;
}
function nl({ series: t, unit: e, range: n, width: s }) {
  const [i, a] = _(null), r = ne(null), c = Math.max(200, s), d = c - se.l - se.r, h = qe - se.t - se.b, { from: f, to: u } = t, l = (x) => se.l + (x - f) / (u - f) * d;
  if (t.kind === "timeline" ? !t.segments.length : !t.points.length) return /* @__PURE__ */ o("div", { class: "chart-empty", children: A("chart.no_data") });
  const g = (x) => {
    const Q = r.current;
    if (!Q) return;
    const V = Q.getBoundingClientRect(), Y = f + (x - V.left - se.l) / d * (u - f);
    if (t.kind === "timeline") {
      let F = 0;
      t.segments.forEach((G, ie) => {
        G.from <= Y && (F = ie);
      }), a(F);
      return;
    }
    const R = t.points, W = t.kind === "bars" ? t.bucketMs / 2 : 0;
    let q = 0;
    R.forEach((F, G) => {
      Math.abs(F.t + W - Y) < Math.abs(R[q].t + W - Y) && (q = G);
    }), a(q);
  }, w = {
    onMouseMove: (x) => g(x.clientX),
    onMouseLeave: () => a(null),
    onTouchStart: (x) => g(x.touches[0].clientX),
    onTouchMove: (x) => g(x.touches[0].clientX)
  }, C = tl(f, u, n).map((x) => /* @__PURE__ */ o("text", { x: l(x.t), y: qe - 6, class: "chart-tick", "text-anchor": "middle", children: x.label }, x.t));
  if (t.kind === "timeline") {
    const x = se.t + h / 2 - 16, Q = i != null ? t.segments[i] : null;
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: qe, ...w, children: [
        t.segments.map((V, Y) => {
          const R = l(V.from), W = l(V.to), q = Math.max(1, W - R - (W - R > 3 ? 2 : 0));
          return /* @__PURE__ */ o("rect", { x: R, y: x, width: q, height: 32, rx: 3, fill: V.on ? Fn : V.on === null ? $c : To, stroke: V.on === null ? "rgba(255,255,255,0.25)" : "none", "stroke-dasharray": "3 3", opacity: i == null || i === Y ? 1 : 0.55 }, Y);
        }),
        /* @__PURE__ */ o("line", { x1: se.l, x2: c - se.r, y1: x + 44, y2: x + 44, stroke: Oo }),
        C
      ] }),
      /* @__PURE__ */ o("div", { class: "chart-legend", children: [
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: Fn } }),
          A("switch.on")
        ] }),
        /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { style: { background: To } }),
          A("switch.off")
        ] }),
        t.segments.some((V) => V.on === null) && /* @__PURE__ */ o("span", { children: [
          /* @__PURE__ */ o("i", { class: "key-na" }),
          A("chart.no_connection")
        ] })
      ] }),
      Q && /* @__PURE__ */ o(yn, { x: l(Q.from) + Math.min(l(Q.to) - l(Q.from), 40) / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: Q.on ? A("switch.on") : Q.on === null ? A("chart.no_connection") : A("switch.off") }),
        /* @__PURE__ */ o("span", { children: [
          Ce(Q.from, n),
          " — ",
          Ce(Q.to, n)
        ] })
      ] })
    ] });
  }
  const m = t.points, M = m.some((x) => x.min != null && x.max != null);
  let D = 1 / 0, O = -1 / 0;
  m.forEach((x) => {
    D = Math.min(D, x.min != null ? x.min : x.v), O = Math.max(O, x.max != null ? x.max : x.v);
  }), t.kind === "bars" && (D = Math.min(0, D));
  const E = el(D, O, 4), b = E[0], B = E[E.length - 1], P = (x) => se.t + h - (x - b) / (B - b) * h, z = E.map((x) => /* @__PURE__ */ o("g", { children: [
    /* @__PURE__ */ o("line", { x1: se.l, x2: c - se.r, y1: P(x), y2: P(x), stroke: Oo }),
    /* @__PURE__ */ o("text", { x: se.l - 8, y: P(x) + 4, class: "chart-tick", "text-anchor": "end", children: ee(x) })
  ] }, x)), I = i != null ? m[i] : null;
  if (t.kind === "bars") {
    const x = t.bucketMs / (u - f) * d, Q = Math.max(2, Math.min(24, x - 2)), V = t.bucketMs >= 864e5, Y = V && m.map((R, W) => {
      const q = new Date(R.t);
      return n === "30d" && (m.length - 1 - W) % 5 ? null : /* @__PURE__ */ o("text", { x: l(R.t) + x / 2, y: qe - 6, class: "chart-tick", "text-anchor": "middle", children: n === "7d" ? We("date.weekdays_short")[q.getDay()] : q.getDate() + "." + $t(q.getMonth() + 1) }, R.t);
    });
    return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
      /* @__PURE__ */ o("svg", { ref: r, width: c, height: qe, ...w, children: [
        z,
        m.map((R, W) => {
          const q = l(R.t) + (x - Q) / 2, F = P(Math.max(0, R.v)), G = P(0), ie = Math.max(0, G - F), $ = Math.min(4, Q / 2, ie), Me = "M" + q + "," + G + "V" + (F + $) + "Q" + q + "," + F + " " + (q + $) + "," + F + "H" + (q + Q - $) + "Q" + (q + Q) + "," + F + " " + (q + Q) + "," + (F + $) + "V" + G + "Z";
          return /* @__PURE__ */ o("path", { d: Me, fill: ge, opacity: i == null || i === W ? 1 : 0.5 }, W);
        }),
        V ? Y : C
      ] }),
      I && /* @__PURE__ */ o(yn, { x: l(I.t) + x / 2, W: c, children: [
        /* @__PURE__ */ o("b", { children: [
          ee(I.v),
          " ",
          e
        ] }),
        /* @__PURE__ */ o("span", { children: t.bucketMs >= 864e5 ? ct(I.t) : ct(I.t) + ", " + Le(I.t) + "–" + Le(I.t + t.bucketMs) })
      ] })
    ] });
  }
  const oe = M ? m : m.concat({ t: u, v: m[m.length - 1].v }), re = oe.map((x, Q) => (Q ? "L" : "M") + l(Math.max(x.t, f)).toFixed(1) + "," + P(x.v).toFixed(1)).join(""), T = re + "L" + l(oe[oe.length - 1].t).toFixed(1) + "," + P(b) + "L" + l(Math.max(oe[0].t, f)).toFixed(1) + "," + P(b) + "Z", X = M ? m.map((x, Q) => (Q ? "L" : "M") + l(x.t).toFixed(1) + "," + P(x.max).toFixed(1)).join("") + m.slice().reverse().map((x) => "L" + l(x.t).toFixed(1) + "," + P(x.min).toFixed(1)).join("") + "Z" : "", te = m[m.length - 1];
  return /* @__PURE__ */ o("div", { class: "chart", style: { width: c }, children: [
    /* @__PURE__ */ o("svg", { ref: r, width: c, height: qe, ...w, children: [
      z,
      M ? /* @__PURE__ */ o("path", { d: X, fill: ge, opacity: 0.22 }) : /* @__PURE__ */ o("path", { d: T, fill: ge, opacity: 0.1 }),
      /* @__PURE__ */ o("path", { d: re, fill: "none", stroke: ge, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }),
      /* @__PURE__ */ o("circle", { cx: l(M ? te.t : u), cy: P(te.v), r: 4, fill: ge, stroke: Po, "stroke-width": 2 }),
      I && /* @__PURE__ */ o("g", { children: [
        /* @__PURE__ */ o("line", { x1: l(I.t), x2: l(I.t), y1: se.t, y2: se.t + h, stroke: "rgba(255,255,255,0.35)" }),
        /* @__PURE__ */ o("circle", { cx: l(I.t), cy: P(I.v), r: 5, fill: ge, stroke: Po, "stroke-width": 2 })
      ] }),
      C
    ] }),
    M && /* @__PURE__ */ o("div", { class: "chart-legend", children: [
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { class: "key-line", style: { background: ge } }),
        A("chart.mean")
      ] }),
      /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o("i", { style: { background: ge, opacity: 0.35 } }),
        A("chart.min_max")
      ] })
    ] }),
    I && /* @__PURE__ */ o(yn, { x: l(I.t), W: c, children: [
      /* @__PURE__ */ o("b", { children: [
        ee(I.v),
        " ",
        e
      ] }),
      I.min != null && I.max != null && /* @__PURE__ */ o("span", { children: [
        ee(I.min),
        " … ",
        ee(I.max),
        " ",
        e
      ] }),
      /* @__PURE__ */ o("span", { children: Ce(I.t, n) })
    ] })
  ] });
}
function yn(t) {
  const e = Math.max(60, Math.min(t.W - 60, t.x));
  return /* @__PURE__ */ o("div", { class: "chart-tip", style: { left: e }, children: t.children });
}
const zt = {
  cool: { Icon: oo, color: ge },
  heat: { Icon: _s, color: Fn },
  heat_cool: { Icon: Ln, color: "#a3a3a3" },
  auto: { Icon: Ln, color: "#a3a3a3" },
  dry: { Icon: Qe, color: "#a3a3a3" },
  fan_only: { Icon: xs, color: "#a3a3a3" },
  off: { Icon: at, color: "rgba(255,255,255,0.25)" }
}, ol = ["auto", "low", "medium", "middle", "high", "quiet", "turbo", "diffuse", "focus"], il = (t) => ol.indexOf(t) !== -1 ? A("ac.fan." + t) : t, Ho = (t) => zt[t] ? A("ac.mode." + t) : t;
function Qo(t, e, n, s, i) {
  const a = (135 + s * 270) * Math.PI / 180, r = (135 + i * 270) * Math.PI / 180, c = (i - s) * 270 > 180 ? 1 : 0;
  return "M" + (t + n * Math.cos(a)).toFixed(1) + "," + (e + n * Math.sin(a)).toFixed(1) + "A" + n + "," + n + " 0 " + c + " 1 " + (t + n * Math.cos(r)).toFixed(1) + "," + (e + n * Math.sin(r)).toFixed(1);
}
function sl({ it: t, size: e }) {
  const n = Z(), s = n.states[t.entity], i = s ? s.attributes : {}, a = s ? s.state : "off", r = a === "off", c = i.target_temp_step || 0.5, d = i.min_temp != null ? i.min_temp : 16, h = i.max_temp != null ? i.max_temp : 31, [f, u] = _(null), l = ne(0), p = f ?? i.temperature;
  H(() => {
    u(null);
  }, [i.temperature]);
  const g = (E) => {
    const b = p ?? (d + h) / 2, B = Math.max(d, Math.min(h, Math.round((b + E * c) / c) * c));
    u(B), clearTimeout(l.current), l.current = window.setTimeout(() => n.callService(t.entity, "set_temperature", { temperature: B }), 800);
  }, w = i.current_temperature != null ? String(i.current_temperature) : t.temp ? ke(n, t.temp) : void 0, y = zt[a] || zt.auto, C = e.h < 260 || e.w < 260, m = C ? 132 : 176, M = p != null ? (p - d) / (h - d) : 0, D = i.hvac_modes || [], O = i.fan_modes || [];
  return /* @__PURE__ */ o("div", { class: "ac" + (C ? " compact" : ""), children: [
    /* @__PURE__ */ o("div", { class: "ac-main", children: [
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => g(-1), children: /* @__PURE__ */ o(Tc, { size: 22 }) }),
      /* @__PURE__ */ o("div", { class: "ac-dial", style: { width: m, height: m }, children: [
        /* @__PURE__ */ o("svg", { width: m, height: m, children: [
          /* @__PURE__ */ o("path", { d: Qo(m / 2, m / 2, m / 2 - 8, 0, 1), stroke: "rgba(255,255,255,0.1)", "stroke-width": 8, fill: "none", "stroke-linecap": "round" }),
          !r && p != null && /* @__PURE__ */ o("path", { d: Qo(m / 2, m / 2, m / 2 - 8, 0, Math.max(0.01, M)), stroke: y.color, "stroke-width": 8, fill: "none", "stroke-linecap": "round" })
        ] }),
        /* @__PURE__ */ o("div", { class: "ac-center", children: [
          /* @__PURE__ */ o("div", { class: "ac-target", children: [
            p != null && !r ? ee(p) : "—",
            /* @__PURE__ */ o("sup", { children: "°" })
          ] }),
          /* @__PURE__ */ o("div", { class: "ac-mode", children: Ho(a) }),
          w != null && !et(w) && /* @__PURE__ */ o("div", { class: "ac-room", children: A("ac.room", { t: ee(Number(w)) }) })
        ] })
      ] }),
      /* @__PURE__ */ o("button", { class: "ac-step", disabled: r, onClick: () => g(1), children: /* @__PURE__ */ o(je, { size: 22 }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "ac-modes", children: D.map((E) => {
      const b = zt[E] || { Icon: Ni, color: "#a3a3a3" };
      return /* @__PURE__ */ o(
        "button",
        {
          class: "ac-mode-btn" + (E === a ? " active" : ""),
          title: Ho(E),
          style: E === a && E !== "off" ? { background: b.color, borderColor: b.color } : void 0,
          onClick: () => n.callService(t.entity, "set_hvac_mode", { hvac_mode: E }),
          children: /* @__PURE__ */ o(b.Icon, { size: 18 })
        },
        E
      );
    }) }),
    !C && O.length > 0 && !r && /* @__PURE__ */ o("div", { class: "seg seg-wide ac-fan", children: O.map((E) => /* @__PURE__ */ o("button", { class: i.fan_mode === E ? "active" : "", onClick: () => n.callService(t.entity, "set_fan_mode", { fan_mode: E }), children: il(E) }, E)) })
  ] });
}
function al({ card: t, size: e }) {
  const n = Z(), [s, i] = _(0), a = t.items[Math.min(s, t.items.length - 1)];
  return /* @__PURE__ */ o("div", { class: "ac-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((r, c) => /* @__PURE__ */ o("button", { class: c === s ? "active" : "", onClick: () => i(c), children: he(n, r) }, r.entity)) }),
    /* @__PURE__ */ o(sl, { it: a, size: e }, a.entity)
  ] });
}
const fe = {
  PAUSE: 1,
  VOLUME_SET: 4,
  VOLUME_MUTE: 8,
  PREVIOUS: 16,
  NEXT: 32,
  TURN_ON: 128,
  TURN_OFF: 256,
  SELECT_SOURCE: 2048,
  PLAY: 16384
}, rl = ["playing", "paused", "idle", "on", "off", "standby", "buffering"], bt = (t) => rl.indexOf(t) !== -1 ? A("media.state." + t) : t;
function cl({ it: t, tv: e, sources: n, size: s }) {
  const i = Z(), a = i.states[t.entity], r = a ? a.attributes : {}, c = Number(r.supported_features) || 0, d = (z) => (c & z) === z, h = a ? a.state : "off", f = h === "off" || h === "standby", u = h === "playing", l = (z, I) => i.callService(t.entity, z, I), [p, g] = _(null), w = p ?? (typeof r.volume_level == "number" ? r.volume_level : null);
  H(() => {
    g(null);
  }, [r.volume_level]);
  const y = ne(0), C = (z) => {
    const I = Math.max(0, Math.min(1, Math.round(z * 100) / 100));
    g(I), clearTimeout(y.current), y.current = window.setTimeout(() => l("volume_set", { volume_level: I }), 400);
  }, m = ne(null), M = (z) => {
    const I = m.current;
    if (!I) return;
    const oe = I.getBoundingClientRect();
    C((z - oe.left) / oe.width);
  }, D = i.pictureUrl(r.entity_picture_local || r.entity_picture), O = r.media_title || r.app_name || r.source || bt(h), E = r.media_artist || r.media_album_name || (r.media_title ? bt(h) : "") || "", b = s.h >= 300 && s.w >= 300, B = s.h < 250, P = e ? jn : f ? na : kc;
  return f && e ? /* @__PURE__ */ o("div", { class: "media media-off", children: [
    /* @__PURE__ */ o("div", { class: "media-art-empty big", children: /* @__PURE__ */ o(jn, { size: 40 }) }),
    /* @__PURE__ */ o("div", { class: "media-title", children: he(i, t) }),
    /* @__PURE__ */ o("div", { class: "media-sub", children: bt(h) }),
    d(fe.TURN_ON) ? /* @__PURE__ */ o("button", { class: "pill-btn media-power", onClick: () => l("turn_on"), children: [
      /* @__PURE__ */ o(at, { size: 18 }),
      /* @__PURE__ */ o("span", { children: A("common.turn_on") })
    ] }) : /* @__PURE__ */ o("div", { class: "muted small media-hint", children: A("media.tv_remote_only") })
  ] }) : /* @__PURE__ */ o("div", { class: "media" + (b ? " big" : "") + (B ? " short" : ""), children: [
    /* @__PURE__ */ o("div", { class: "media-top", children: [
      D && !f ? /* @__PURE__ */ o("div", { class: "media-art", style: { backgroundImage: "url(" + D + ")" } }) : /* @__PURE__ */ o("div", { class: "media-art media-art-empty", children: /* @__PURE__ */ o(P, { size: b ? 36 : 26 }) }),
      /* @__PURE__ */ o("div", { class: "media-info", children: [
        /* @__PURE__ */ o("div", { class: "media-title", children: O }),
        E && /* @__PURE__ */ o("div", { class: "media-sub", children: E }),
        /* @__PURE__ */ o("div", { class: "media-state" + (u ? " on" : ""), children: [
          u && /* @__PURE__ */ o("i", { class: "eq", children: [
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {}),
            /* @__PURE__ */ o("b", {})
          ] }),
          bt(h)
        ] })
      ] }),
      (d(fe.TURN_OFF) || d(fe.TURN_ON)) && /* @__PURE__ */ o("button", { class: "icon-round", title: A(f ? "common.turn_on" : "common.turn_off"), onClick: () => l(f ? "turn_on" : "turn_off"), children: /* @__PURE__ */ o(at, { size: 16 }) })
    ] }),
    (d(fe.PAUSE) || d(fe.PLAY) || d(fe.NEXT)) && /* @__PURE__ */ o("div", { class: "media-controls", children: [
      d(fe.PREVIOUS) && /* @__PURE__ */ o("button", { onClick: () => l("media_previous_track"), children: /* @__PURE__ */ o(Rc, { size: 22 }) }),
      /* @__PURE__ */ o("button", { class: "media-play", onClick: () => l("media_play_pause"), children: u ? /* @__PURE__ */ o(Oc, { size: 24 }) : /* @__PURE__ */ o(Pc, { size: 24 }) }),
      d(fe.NEXT) && /* @__PURE__ */ o("button", { onClick: () => l("media_next_track"), children: /* @__PURE__ */ o(qc, { size: 22 }) })
    ] }),
    w != null && d(fe.VOLUME_SET) && /* @__PURE__ */ o("div", { class: "media-volume", children: [
      d(fe.VOLUME_MUTE) && /* @__PURE__ */ o("button", { onClick: () => l("volume_mute", { is_volume_muted: !r.is_volume_muted }), children: r.is_volume_muted ? /* @__PURE__ */ o(Zc, { size: 18 }) : /* @__PURE__ */ o(Yc, { size: 18 }) }),
      /* @__PURE__ */ o(
        "div",
        {
          class: "vol-bar",
          ref: m,
          onClick: (z) => M(z.clientX),
          onTouchMove: (z) => M(z.touches[0].clientX),
          children: /* @__PURE__ */ o("div", { class: "vol-fill", style: { width: Math.round(w * 100) + "%" } })
        }
      ),
      /* @__PURE__ */ o("span", { class: "vol-num", children: Math.round(w * 100) })
    ] }),
    n && d(fe.SELECT_SOURCE) && r.source_list && /* @__PURE__ */ o("div", { class: "chips media-sources", children: r.source_list.map((z) => /* @__PURE__ */ o("button", { class: "chip" + (r.source === z ? " active" : ""), onClick: () => l("select_source", { source: z }), children: z }, z)) })
  ] });
}
function ll({ card: t, size: e }) {
  const n = Z(), s = t.items.findIndex((d) => n.states[d.entity] && n.states[d.entity].state === "playing"), [i, a] = _(s >= 0 ? s : 0), r = t.items[Math.min(i, t.items.length - 1)], c = t.type === "tv" || !!n.states[r.entity] && n.states[r.entity].attributes.device_class === "tv";
  return /* @__PURE__ */ o("div", { class: "media-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline seg-full", children: t.items.map((d, h) => {
      const f = n.states[d.entity];
      return /* @__PURE__ */ o("button", { class: h === i ? "active" : "", onClick: () => a(h), children: [
        f && f.state === "playing" && /* @__PURE__ */ o("i", { class: "dot-live" }),
        he(n, d)
      ] }, d.entity);
    }) }),
    Pe(n, r.entity) && /* @__PURE__ */ o(cl, { it: r, tv: c, sources: t.type === "tv", size: e }, r.entity)
  ] });
}
const dl = {
  "clear-night": { Icon: Ls },
  cloudy: { Icon: As },
  exceptional: { Icon: gn },
  fog: { Icon: pc },
  hail: { Icon: Do },
  lightning: { Icon: gn },
  "lightning-rainy": { Icon: gn },
  partlycloudy: { Icon: cs },
  pouring: { Icon: mc },
  rainy: { Icon: fc },
  snowy: { Icon: oo },
  "snowy-rainy": { Icon: Do },
  sunny: { Icon: ia },
  windy: { Icon: Xt },
  "windy-variant": { Icon: Xt }
};
function Ve(t) {
  const e = dl[t || ""];
  return { label: e ? A("weather." + t) : t || "—", Icon: e ? e.Icon : As };
}
function Sa(t, e) {
  const [n, s] = _([]), [i, a] = _([]), r = e ? t.states[e] : void 0, c = r && Number(r.attributes.supported_features) || 0;
  return H(() => {
    if (!e || t.status !== "connected" || !c) return;
    const d = [];
    c & 2 && d.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: "hourly" },
      (f) => s(f.forecast || [])
    ));
    const h = c & 1 ? "daily" : c & 4 ? "twice_daily" : "";
    return h && d.push(t.subscribeMessage(
      { type: "weather/subscribe_forecast", entity_id: e, forecast_type: h },
      (f) => a(Al(f.forecast || [], h === "twice_daily"))
    )), () => d.forEach((f) => f());
  }, [e, t.status, c]), { hourly: n, days: i };
}
function Al(t, e) {
  if (!e) return t.map((i) => ({ t: Date.parse(i.datetime), hi: i.temperature, lo: i.templow, condition: i.condition }));
  const n = {}, s = [];
  return t.forEach((i) => {
    const a = new Date(Date.parse(i.datetime)), r = a.getFullYear() + "-" + a.getMonth() + "-" + a.getDate();
    n[r] || (n[r] = { t: a.getTime() }, s.push(r));
    const c = n[r];
    [i.temperature, i.templow].filter((h) => typeof h == "number").forEach((h) => {
      c.hi = c.hi == null ? h : Math.max(c.hi, h), c.lo = c.lo == null ? h : Math.min(c.lo, h);
    }), (i.is_daytime !== !1 || !c.condition) && (c.condition = i.condition);
  }), s.map((i) => n[i]);
}
function hl(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "m/s" ? n : e === "mph" ? n * 0.447 : n / 3.6;
}
function ul(t, e) {
  const n = Number(t);
  if (!isNaN(n))
    return e === "mmHg" ? n : e === "inHg" ? n * 25.4 : n * 0.750062;
}
function Ae(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : String(Math.round(e));
}
const fl = 64, pl = 32, Lo = 36, jo = 84, ml = 33;
function za({ card: t, size: e }) {
  const n = Z(), s = on(), i = t.items.filter((b) => b.entity.indexOf("weather.") === 0)[0], a = t.items.filter((b) => b !== i), r = i && i.entity, c = r ? n.states[r] : void 0, { hourly: d, days: h } = Sa(n, r);
  let f = e.h - (c ? fl + pl : 0);
  const u = Math.max(0, Math.min(a.length, Math.floor(f / Lo)));
  f -= u * Lo + (u ? 10 : 0);
  const l = !!c && d.length > 0 && f >= jo;
  l && (f -= jo + 12);
  const p = c ? Math.max(0, Math.min(h.length, 7, Math.floor((f - 10) / ml))) : 0, g = h.slice(0, p), w = Math.min.apply(null, g.map((b) => b.lo != null ? b.lo : 99)), y = Math.max.apply(null, g.map((b) => b.hi != null ? b.hi : -99)), C = (b) => (b - w) / Math.max(1, y - w) * 100, m = Date.now(), M = c ? c.attributes : {}, D = Ve(c && c.state), O = hl(M.wind_speed, M.wind_speed_unit), E = ul(M.pressure, M.pressure_unit);
  return /* @__PURE__ */ o("div", { class: "weather", children: [
    c && /* @__PURE__ */ o("div", { class: "weather-now", children: [
      /* @__PURE__ */ o(D.Icon, { size: e.w > 360 ? 54 : 40 }),
      /* @__PURE__ */ o("div", { class: "weather-temp", children: [
        Ae(M.temperature),
        /* @__PURE__ */ o("sup", { children: "°" })
      ] }),
      /* @__PURE__ */ o("div", { class: "weather-desc", children: [
        /* @__PURE__ */ o("b", { children: D.label }),
        M.apparent_temperature != null && /* @__PURE__ */ o("span", { children: A("weather.feels_like", { t: Ae(M.apparent_temperature) }) }),
        h[0] && h[0].hi != null && /* @__PURE__ */ o("span", { children: [
          Ae(h[0].lo),
          "° … ",
          Ae(h[0].hi),
          "°"
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ o("div", { class: "weather-facts", children: [
      O != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(Xt, { size: 14 }),
        A("weather.wind", { v: O.toFixed(1) })
      ] }),
      M.humidity != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(Qe, { size: 14 }),
        Ae(M.humidity),
        "%"
      ] }),
      E != null && /* @__PURE__ */ o("span", { children: [
        /* @__PURE__ */ o(ws, { size: 14 }),
        A("weather.pressure", { v: Math.round(E) })
      ] })
    ] }),
    u > 0 && /* @__PURE__ */ o("div", { class: "weather-rooms", children: a.slice(0, u).map((b) => {
      const B = n.states[b.entity], P = b.entity.indexOf("weather.") === 0, z = P ? B && B.attributes.temperature : B && B.state, I = P ? B && B.attributes.humidity : b.hum ? ke(n, b.hum) : void 0;
      return /* @__PURE__ */ o("div", { class: "wroom tappable", onClick: () => s(b.hum ? [b.entity, b.hum] : [b.entity]), children: [
        /* @__PURE__ */ o("span", { class: "wroom-name", children: he(n, b) }),
        I != null && /* @__PURE__ */ o("span", { class: "wroom-hum", children: [
          /* @__PURE__ */ o(Qe, { size: 12 }),
          Ae(I),
          "%"
        ] }),
        /* @__PURE__ */ o("b", { class: "wroom-temp", children: [
          gl(z),
          "°"
        ] })
      ] }, b.entity);
    }) }),
    l && /* @__PURE__ */ o("div", { class: "weather-hours", children: d.filter((b) => Date.parse(b.datetime) > m - 36e5).slice(0, 12).map((b) => {
      const B = Ve(b.condition);
      return /* @__PURE__ */ o("div", { class: "hour", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: Le(Date.parse(b.datetime)) }),
        /* @__PURE__ */ o(B.Icon, { size: 18 }),
        /* @__PURE__ */ o("b", { children: [
          Ae(b.temperature),
          "°"
        ] })
      ] }, b.datetime);
    }) }),
    g.length > 0 && /* @__PURE__ */ o("div", { class: "weather-days", children: g.map((b, B) => {
      const P = Ve(b.condition);
      return /* @__PURE__ */ o("div", { class: "day", children: [
        /* @__PURE__ */ o("span", { class: "day-name", children: B === 0 ? A("weather.today") : We("date.weekdays_short")[new Date(b.t).getDay()] }),
        /* @__PURE__ */ o(P.Icon, { size: 18 }),
        /* @__PURE__ */ o("span", { class: "day-lo", children: [
          Ae(b.lo),
          "°"
        ] }),
        /* @__PURE__ */ o("span", { class: "day-bar", children: b.lo != null && b.hi != null && /* @__PURE__ */ o("i", { style: { left: C(b.lo) + "%", width: Math.max(4, C(b.hi) - C(b.lo)) + "%" } }) }),
        /* @__PURE__ */ o("span", { class: "day-hi", children: [
          Ae(b.hi),
          "°"
        ] })
      ] }, b.t);
    }) })
  ] });
}
function gl(t) {
  const e = Number(t);
  return isNaN(e) ? "—" : (Math.round(e * 10) / 10).toFixed(1);
}
function bl({ entity: t }) {
  const e = Z(), n = e.states[t], { days: s } = Sa(e, t);
  if (!n || n.state === "unavailable") return null;
  const i = Ve(n.state), a = s[0];
  return /* @__PURE__ */ o("div", { class: "ambient-weather", children: [
    /* @__PURE__ */ o(i.Icon, { size: 30 }),
    /* @__PURE__ */ o("span", { class: "aw-temp", children: [
      Ae(n.attributes.temperature),
      "°"
    ] }),
    /* @__PURE__ */ o("span", { class: "aw-desc", children: [
      i.label,
      a && a.hi != null && /* @__PURE__ */ o("small", { children: [
        Ae(a.lo),
        "° … ",
        Ae(a.hi),
        "°"
      ] })
    ] })
  ] });
}
function so(t, e) {
  if (!e || Rt[t].domains.indexOf(e.entity_id.split(".")[0]) === -1) return !1;
  const n = e.attributes.device_class, s = e.entity_id.indexOf("weather.") === 0;
  return t === "climate" || t === "weather" ? s || n === "temperature" : !0;
}
function Fo(t, e, n) {
  return e.filter((s) => t.states[s] && t.states[s].entity_id.indexOf("sensor.") === 0 && t.states[s].attributes.device_class === n)[0];
}
function Ia(t, e, n) {
  if (!n.device) return [n];
  const s = t.devices[n.device];
  if (!s) return n.entity ? [{ entity: n.entity, name: n.name }] : [];
  const i = s.entities.filter((l) => t.registry[l] && t.registry[l].ec == null && !!t.states[l]), a = n.skip || [], r = n.order || [], c = (l) => {
    const p = r.indexOf(l);
    return p === -1 ? 1e6 : p;
  }, d = i.filter((l) => so(e, t.states[l]) && a.indexOf(l) === -1).map((l, p) => ({ id: l, i: p })).sort((l, p) => c(l.id) - c(p.id) || l.i - p.i).map((l) => l.id), h = d.length === 1, f = n.names || {}, u = (l) => f[l] || (h ? n.name || s.name : t.registry[l].en || s.name || void 0);
  return e === "climate" ? d.map((l) => ({ entity: l, hum: Fo(t, i, "humidity"), name: u(l) })) : e === "ac" ? d.map((l) => ({ entity: l, temp: n.temp || Fo(t, i, "temperature"), name: u(l) })) : d.map((l) => ({ entity: l, name: u(l), icon: void 0 }));
}
function yl(t, e) {
  if (!e.items.some((i) => i.device)) return e;
  const n = {}, s = [];
  return e.items.forEach((i) => Ia(t, e.type, i).forEach((a) => {
    n[a.entity] || (n[a.entity] = !0, s.push(a));
  })), { ...e, items: s };
}
function an(t, e) {
  const n = yl(t, e.title ? e : { ...e, title: nt(e.type) }), s = n.items.filter((i) => Pe(t, i.entity));
  return s.length === n.items.length ? n : { ...n, items: s };
}
function he(t, e) {
  const n = t.states[e.entity];
  return e.name || n && n.attributes.friendly_name || e.entity;
}
function xl(t, e) {
  const n = t.states[e];
  return n ? n.attributes.device_class : void 0;
}
const kl = [
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
], _l = ["door", "window", "opening", "garage_door", "moisture", "smoke", "gas", "problem", "safety"];
function Rn(t, e) {
  const n = t.states[e];
  if (!n || et(n.state)) return { text: A("sensor.no_data"), alert: !1, on: !1 };
  const s = e.split(".")[0], i = n.attributes.device_class;
  if (s === "binary_sensor") {
    const r = n.state === "on", c = kl.indexOf(i) !== -1 ? "sensor." + i + "." : "sensor.";
    return { text: A(c + (r ? "on" : "off")), alert: r && _l.indexOf(i) !== -1, on: r };
  }
  if (s === "lock") return { text: n.state === "locked" ? A("sensor.locked") : A("sensor.unlocked"), alert: n.state !== "locked", on: n.state !== "locked" };
  if (s === "cover") return { text: n.state === "open" ? A("sensor.open") : n.state === "closed" ? A("sensor.closed") : n.state, alert: !1, on: n.state === "open" };
  const a = parseFloat(n.state);
  return { text: (isNaN(a) ? n.state : String(Math.round(a * 10) / 10)) + jt(t, e), alert: !1, on: !1 };
}
function vl(t) {
  return Math.max(1, Math.min(5, Math.floor(t.w / 150)));
}
function Ba(t, e) {
  const s = (r) => (e.h + 10) / Math.ceil(t / r) - 10;
  let i = vl(e);
  for (; i < Math.min(t, 6) && s(i) < 96 && e.w / (i + 1) >= 120; ) i++;
  const a = s(i);
  return "lights cols-" + i + (a >= 96 ? "" : a >= 70 ? " compact" : " list");
}
function wl({ card: t, size: e }) {
  const n = Z(), s = on(), i = e.h / Math.max(1, t.items.length) < 95;
  return /* @__PURE__ */ o("div", { class: "rooms" + (i ? " compact" : ""), children: t.items.map((a) => {
    const r = a.entity.indexOf("weather.") === 0 ? n.states[a.entity] : void 0, c = r ? Ve(r.state).Icon : null;
    return /* @__PURE__ */ o("div", { class: "room tappable" + (r ? " room-outside" : ""), onClick: () => s(a.hum ? [a.entity, a.hum] : [a.entity]), children: [
      /* @__PURE__ */ o("div", { class: "room-name", children: [
        c && /* @__PURE__ */ o(c, { size: 14 }),
        he(n, a)
      ] }),
      /* @__PURE__ */ o("div", { class: "room-vals", children: [
        /* @__PURE__ */ o("span", { class: "room-temp", children: [
          Ct(r ? String(r.attributes.temperature) : ke(n, a.entity)),
          /* @__PURE__ */ o("sup", { children: "°" })
        ] }),
        r && r.attributes.humidity != null && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Qe, { size: 14 }),
          Math.round(r.attributes.humidity),
          "%"
        ] }),
        !r && a.hum && Pe(n, a.hum) && /* @__PURE__ */ o("span", { class: "room-hum", children: [
          /* @__PURE__ */ o(Qe, { size: 14 }),
          Ct(ke(n, a.hum), 0),
          "%"
        ] })
      ] })
    ] }, a.entity);
  }) });
}
function Cl(t, e) {
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
function Ml({ it: t }) {
  const e = Z(), n = on(), s = Cl(() => n([t.entity]), () => e.toggle(t.entity)), i = ke(e, t.entity), a = nn(i), r = Re(t.icon || io(t.entity));
  return /* @__PURE__ */ o("button", { class: "light" + (a ? " on" : "") + (i === void 0 ? " na" : ""), ...s, children: [
    /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(r, { size: 22 }) }),
    /* @__PURE__ */ o("span", { class: "light-name", children: he(e, t) }),
    /* @__PURE__ */ o("span", { class: "light-state", children: A(i === void 0 ? "switch.unavailable" : a ? "switch.on" : "switch.off") })
  ] });
}
function El({ card: t, size: e }) {
  return /* @__PURE__ */ o("div", { class: Ba(t.items.length, e), children: t.items.map((n) => /* @__PURE__ */ o(Ml, { it: n }, n.entity)) });
}
function Sl({ card: t, onCamera: e }) {
  const n = Z(), [s, i] = _(0), a = t.items[Math.min(s, t.items.length - 1)], r = a ? n.cameraStreamUrl(a.entity) : "";
  return /* @__PURE__ */ o("div", { class: "cam-wrap", children: [
    t.items.length > 1 && /* @__PURE__ */ o("div", { class: "seg seg-inline", children: t.items.map((c, d) => /* @__PURE__ */ o("button", { class: d === s ? "active" : "", onClick: () => i(d), children: he(n, c) }, c.entity + d)) }),
    /* @__PURE__ */ o("div", { class: "cam fit-" + (t.fit || "cover"), onClick: () => r && e(r), children: [
      r ? /* @__PURE__ */ o("img", { src: r, alt: "" }) : /* @__PURE__ */ o("div", { class: "cam-empty", children: [
        /* @__PURE__ */ o(Wc, { size: 26 }),
        /* @__PURE__ */ o("span", { children: A("camera.no_stream") })
      ] }),
      r && /* @__PURE__ */ o("span", { class: "live", children: [
        /* @__PURE__ */ o("i", {}),
        "LIVE"
      ] })
    ] })
  ] });
}
function zl({ card: t }) {
  const e = Z(), n = on();
  return /* @__PURE__ */ o("div", { class: "sensors", children: t.items.map((s) => {
    const i = Rn(e, s.entity), a = Re(s.icon || io(s.entity, xl(e, s.entity)));
    return /* @__PURE__ */ o("div", { class: "status-row tappable" + (i.alert ? " alert" : ""), onClick: () => n([s.entity]), children: [
      /* @__PURE__ */ o("span", { class: "status-icon", children: /* @__PURE__ */ o(a, { size: 20 }) }),
      /* @__PURE__ */ o("span", { class: "status-text", children: [
        /* @__PURE__ */ o("b", { children: he(e, s) }),
        /* @__PURE__ */ o("small", { children: i.text })
      ] })
    ] }, s.entity);
  }) });
}
function Il({ card: t, size: e }) {
  const n = Z(), [s, i] = _(""), a = (r) => {
    const c = r.split(".")[0];
    n.callService(r, c === "automation" ? "trigger" : "turn_on"), i(r), setTimeout(() => i(""), 1200);
  };
  return /* @__PURE__ */ o("div", { class: Ba(t.items.length, e), children: t.items.map((r) => {
    const c = Re(r.icon || "sparkles");
    return /* @__PURE__ */ o("button", { class: "light scene" + (s === r.entity ? " on" : ""), onClick: () => a(r.entity), children: [
      /* @__PURE__ */ o("span", { class: "light-icon", children: /* @__PURE__ */ o(c, { size: 22 }) }),
      /* @__PURE__ */ o("span", { class: "light-name", children: he(n, r) }),
      /* @__PURE__ */ o("span", { class: "light-state", children: s === r.entity ? A("scene.started") : A("scene.tap_to_run") })
    ] }, r.entity);
  }) });
}
function Da(t) {
  const e = Z(), { size: n, onCamera: s } = t;
  if (!t.card.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: A("card.empty") });
  const i = an(e, t.card);
  if (!i.items.length) return /* @__PURE__ */ o("div", { class: "card-empty", children: A("card.all_unavailable") });
  switch (i.type) {
    case "climate":
      return /* @__PURE__ */ o(wl, { card: i, size: n });
    case "switches":
      return /* @__PURE__ */ o(El, { card: i, size: n });
    case "cameras":
      return /* @__PURE__ */ o(Sl, { card: i, onCamera: s });
    case "sensors":
      return /* @__PURE__ */ o(zl, { card: i });
    case "scenes":
      return /* @__PURE__ */ o(Il, { card: i, size: n });
    case "ac":
      return /* @__PURE__ */ o(al, { card: i, size: n });
    case "speakers":
    case "tv":
      return /* @__PURE__ */ o(ll, { card: i, size: n });
    case "weather":
      return /* @__PURE__ */ o(za, { card: i, size: n });
  }
}
function Ta(t) {
  const e = Z(), n = an(e, t.card);
  if (n.type !== "switches") return null;
  const s = n.items.filter((i) => nn(ke(e, i.entity)));
  return s.length ? /* @__PURE__ */ o("button", { class: "chip-btn", onClick: () => s.forEach((i) => e.turnOff(i.entity)), children: [
    /* @__PURE__ */ o(at, { size: 14 }),
    /* @__PURE__ */ o("span", { children: A("switches.all_off") })
  ] }) : null;
}
function ao(t, e) {
  const n = an(t, e);
  if (n.type === "switches") {
    const s = n.items.filter((i) => nn(ke(t, i.entity))).length;
    return A("switches.title_count", { title: n.title, on: s, total: n.items.length });
  }
  return n.title;
}
function Ro(t, e) {
  const n = an(t, e), s = n.items[0];
  if (n.type === "climate") {
    const i = n.items.filter((a) => a.entity.indexOf("weather.") !== 0)[0];
    return { text: i ? Ct(ke(t, i.entity)) + "°" : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "switches") {
    const i = n.items.filter((a) => nn(ke(t, a.entity))).length;
    return { text: i ? A("chip.on_count", { title: n.title, n: i }) : A("chip.off", { title: n.title }), lit: i > 0, alert: !1 };
  }
  if (n.type === "sensors") {
    for (let i = 0; i < n.items.length; i++) {
      const a = Rn(t, n.items[i].entity);
      if (a.alert) return { text: he(t, n.items[i]) + ": " + a.text.toLowerCase(), lit: !1, alert: !0 };
    }
    return { text: s ? Rn(t, s.entity).text : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "ac" && s) {
    const i = t.states[s.entity];
    return !i || i.state === "off" ? { text: A("chip.off", { title: n.title }), lit: !1, alert: !1 } : { text: n.title + ": " + i.attributes.temperature + "°", lit: !0, alert: !1 };
  }
  if ((n.type === "speakers" || n.type === "tv") && n.items.length) {
    const i = n.items.filter((c) => t.states[c.entity] && t.states[c.entity].state === "playing")[0], a = i && t.states[i.entity];
    return a ? { text: "♪ " + (a.attributes.media_title || he(t, i)), lit: !0, alert: !1 } : { text: n.items.filter((c) => t.states[c.entity] && ["on", "idle", "paused"].indexOf(t.states[c.entity].state) !== -1).length && n.type === "tv" ? A("chip.on", { title: n.title }) : n.title, lit: !1, alert: !1 };
  }
  if (n.type === "weather" && s) {
    const i = t.states[s.entity];
    return { text: i ? Math.round(i.attributes.temperature) + "° " + Ve(i.state).label.toLowerCase() : n.title, lit: !1, alert: !1 };
  }
  return { text: n.title, lit: !1, alert: !1 };
}
function Bl(t) {
  return /* @__PURE__ */ o("section", { class: "panel " + (t.class || ""), children: [
    /* @__PURE__ */ o("div", { class: "panel-head", children: [
      /* @__PURE__ */ o("h2", { children: t.title }),
      t.aside
    ] }),
    t.children
  ] });
}
function Oa(t) {
  return t.layout === "auto" ? window.innerWidth <= 700 ? "center" : "corner" : t.layout;
}
function Pa(t) {
  const e = Oa(t);
  return e === "top" ? [0.2, 0.05, 0.8, 0.35] : e === "corner" ? [0, 0.55, 0.55, 0.95] : [0.2, 0.55, 0.8, 0.9];
}
function Dl(t) {
  return t.widgetsPos === "top" ? [0.15, 0, 0.85, 0.2] : t.widgetsPos === "bottom" ? [0.15, 0.78, 0.85, 0.96] : Oa(t) === "corner" ? [0.5, 0.7, 1, 0.96] : Pa(t);
}
const Tl = [0.25, 0.88, 0.75, 1];
function xn([t, e, n]) {
  const s = (i) => (i /= 255, i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
  return 0.2126 * s(t) + 0.7152 * s(e) + 0.0722 * s(n);
}
const kn = { color: "#ffffff", dark: !1 };
function _n(t, e, n) {
  const [s, i] = _(kn), a = e.join(",");
  return H(() => {
    if (!n || !t) return;
    const r = new Image();
    r.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = r.width, c.height = r.height;
        const d = c.getContext("2d");
        d.drawImage(r, 0, 0);
        const h = Math.floor(e[0] * c.width), f = Math.floor(e[1] * c.height), u = Math.max(1, Math.floor((e[2] - e[0]) * c.width)), l = Math.max(1, Math.floor((e[3] - e[1]) * c.height)), p = d.getImageData(h, f, u, l).data, g = [0, 0, 0];
        for (let E = 0; E < p.length; E += 4)
          g[0] += p[E], g[1] += p[E + 1], g[2] += p[E + 2];
        const w = p.length / 4, y = g.map((E) => E / w), C = y.map((E) => 255 - E), m = xn(y), M = xn(C), O = (Math.max(m, M) + 0.05) / (Math.min(m, M) + 0.05) >= 3 ? C : m > 0.35 ? [17, 17, 17] : [255, 255, 255];
        i({ color: "rgb(" + O.map(Math.round).join(",") + ")", dark: xn(O) < 0.25 });
      } catch {
        i(kn);
      }
    }, r.src = t;
  }, [t, a, n]), n ? s : kn;
}
function Ol({ prefs: t }) {
  const e = ya(5e3), n = t.color === "contrast" ? "" : va[t.color], s = t.datePos === "above" || t.datePos !== "below" && t.layout === "top", i = t.date && /* @__PURE__ */ o("div", { class: "ambient-date" + (s ? " above" : ""), children: ka(e) });
  return /* @__PURE__ */ o(ae, { children: [
    s && i,
    /* @__PURE__ */ o("div", { class: "ambient-time" + (t.color === "accent" ? " accent-text" : ""), style: { fontWeight: _a[t.font], color: n || void 0 }, children: xa(e) }),
    !s && i
  ] });
}
function Pl(t) {
  const e = Z(), n = Ye(), s = Ea(), [i, a] = _(""), r = n.homeCards().filter((m) => m.chip), c = r.filter((m) => m.type === "weather" && m.items.length)[0], d = Kc(r.filter((m) => m.type !== "weather"), s), h = d.filter((m) => s.hidden.indexOf(m.id) === -1), f = h.filter((m) => Ro(e, m).alert), u = t.customizing, l = () => {
    a(""), t.onDone();
  }, p = s.color === "contrast", g = _n(t.photoThumb, Pa(s), p), w = _n(t.photoThumb, Dl(s), p), y = _n(t.photoThumb, Tl, p), C = "ambient" + (p ? " text-contrast" : "") + (t.visible ? " visible" : "") + " lock-" + s.layout + " lock-size-" + s.size + " chips-" + s.chipStyle + " widgets-" + s.widgetsPos + (u ? " customizing" : "") + (u && i ? " panel-up" : "");
  return /* @__PURE__ */ o(ae, { children: [
    /* @__PURE__ */ o("div", { ref: t.innerRef, class: C, children: [
      /* @__PURE__ */ o("div", { class: "ambient-clock" + (g.dark ? " ink-dark" : ""), style: p ? { color: g.color } : void 0, onClick: u ? () => a("clock") : void 0, children: [
        /* @__PURE__ */ o(Ol, { prefs: s }),
        s.weather && c && /* @__PURE__ */ o(bl, { entity: c.items[0].entity })
      ] }),
      /* @__PURE__ */ o("div", { class: "glances" + (w.dark ? " ink-dark" : ""), style: p ? { color: w.color } : void 0, onClick: u ? () => a("widgets") : void 0, children: [
        e.status !== "connected" && e.status !== "connecting" && !u && /* @__PURE__ */ o("button", { class: "glance warn", onClick: t.onConnection, children: [
          /* @__PURE__ */ o(Gc, { size: 18 }),
          /* @__PURE__ */ o("span", { children: A("ambient.offline") })
        ] }),
        u && !h.length && /* @__PURE__ */ o("span", { class: "glance glance-add", children: [
          /* @__PURE__ */ o(je, { size: 18 }),
          /* @__PURE__ */ o("span", { children: A("lock.add_widgets") })
        ] }),
        f.concat(h.filter((m) => f.indexOf(m) === -1)).map((m) => {
          const M = Ro(e, m), D = Re(m.icon);
          return /* @__PURE__ */ o(
            "button",
            {
              class: "glance" + (M.lit ? " lit" : "") + (M.alert ? " alert" : ""),
              title: M.text,
              onClick: u ? void 0 : () => t.onSheet(m),
              children: [
                /* @__PURE__ */ o(D, { size: 18 }),
                /* @__PURE__ */ o("span", { children: M.text })
              ]
            },
            m.id
          );
        })
      ] }),
      /* @__PURE__ */ o("div", { class: "grabber", children: [
        /* @__PURE__ */ o("div", { class: "grabber-text" + (t.showHint ? " visible" : "") + (y.dark ? " ink-dark" : ""), style: p ? { color: y.color } : void 0, children: A("ambient.swipe_hint") }),
        /* @__PURE__ */ o("div", { class: "grabber-bar" })
      ] })
    ] }),
    u && /* @__PURE__ */ o("div", { class: "lock-ui", children: [
      /* @__PURE__ */ o("div", { class: "lock-top", children: [
        /* @__PURE__ */ o("span", { children: A("lock.hint") }),
        /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: l, children: A("common.done") })
      ] }),
      i && /* @__PURE__ */ o(Nl, { kind: i, widgets: d, hasWeather: !!c, onClose: () => a("") })
    ] })
  ] });
}
const Hl = ["thin", "light", "regular", "bold"], Ql = ["contrast", "white", "accent", "warm", "mint", "sky", "rose"], Ll = ["xs", "s", "m", "l", "xl"], jl = ["clock", "top", "bottom"], Fl = ["auto", "above", "below"], Rl = ["auto", "corner", "center", "top"], ql = ["auto", "text", "icons"];
function Nl(t) {
  const e = Ea(), n = (i, a) => {
    const r = t.widgets.map((h) => h.id), c = i + a, d = r[i];
    r[i] = r[c], r[c] = d, ue({ order: r });
  }, s = (i, a) => {
    const r = e.hidden.filter((c) => c !== i);
    ue({ hidden: a ? r : r.concat(i) });
  };
  return /* @__PURE__ */ o("div", { class: "lock-panel", onClick: (i) => i.stopPropagation(), children: [
    /* @__PURE__ */ o("div", { class: "lock-panel-head", children: [
      /* @__PURE__ */ o("b", { children: t.kind === "clock" ? A("lock.clock") : A("lock.widgets") }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Fe, { size: 20 }) })
    ] }),
    t.kind === "clock" ? /* @__PURE__ */ o(ae, { children: [
      /* @__PURE__ */ o("div", { class: "lock-fonts", children: Hl.map((i) => /* @__PURE__ */ o("button", { class: "lock-font" + (e.font === i ? " on" : ""), style: { fontWeight: _a[i] }, onClick: () => ue({ font: i }), children: "12" }, i)) }),
      /* @__PURE__ */ o("div", { class: "lock-colors", children: Ql.map((i) => /* @__PURE__ */ o(
        "button",
        {
          title: A("lock.color." + i),
          class: "lock-color" + (e.color === i ? " on" : "") + (i === "accent" ? " accent-bg" : "") + (i === "contrast" ? " lock-color-contrast" : ""),
          style: i === "accent" || i === "contrast" ? void 0 : { background: va[i] },
          onClick: () => ue({ color: i }),
          children: i === "contrast" ? /* @__PURE__ */ o("span", { children: "A" }) : null
        },
        i
      )) }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("lock.size") }),
        /* @__PURE__ */ o("div", { class: "seg", children: Ll.map((i) => /* @__PURE__ */ o("button", { class: e.size === i ? "active" : "", onClick: () => ue({ size: i }), children: A("lock.size." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("lock.layout") }),
        /* @__PURE__ */ o("select", { value: e.layout, onChange: (i) => ue({ layout: i.currentTarget.value }), children: Rl.map((i) => /* @__PURE__ */ o("option", { value: i, children: A("lock.layout." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.date, onChange: (i) => ue({ date: i.currentTarget.checked }) }),
        A("lock.date")
      ] }),
      e.date && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("lock.date_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: Fl.map((i) => /* @__PURE__ */ o("button", { class: e.datePos === i ? "active" : "", onClick: () => ue({ datePos: i }), children: A("lock.date_pos." + i) }, i)) })
      ] }),
      t.hasWeather && /* @__PURE__ */ o("label", { class: "check", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", checked: e.weather, onChange: (i) => ue({ weather: i.currentTarget.checked }) }),
        A("lock.weather")
      ] })
    ] }) : /* @__PURE__ */ o(ae, { children: [
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("lock.widgets_pos") }),
        /* @__PURE__ */ o("div", { class: "seg", children: jl.map((i) => /* @__PURE__ */ o("button", { class: e.widgetsPos === i ? "active" : "", onClick: () => ue({ widgetsPos: i }), children: A("lock.widgets_pos." + i) }, i)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("lock.chip_style") }),
        /* @__PURE__ */ o("select", { value: e.chipStyle, onChange: (i) => ue({ chipStyle: i.currentTarget.value }), children: ql.map((i) => /* @__PURE__ */ o("option", { value: i, children: A("lock.chip_style." + i) }, i)) })
      ] }),
      !t.widgets.length && /* @__PURE__ */ o("p", { class: "hint", children: A("lock.no_widgets") }),
      t.widgets.map((i, a) => {
        const r = Re(i.icon);
        return /* @__PURE__ */ o("div", { class: "lock-widget", children: [
          /* @__PURE__ */ o("label", { class: "check", children: [
            /* @__PURE__ */ o("input", { type: "checkbox", checked: e.hidden.indexOf(i.id) === -1, onChange: (c) => s(i.id, c.currentTarget.checked) }),
            /* @__PURE__ */ o(r, { size: 16 }),
            /* @__PURE__ */ o("span", { children: i.title || nt(i.type) })
          ] }),
          /* @__PURE__ */ o("button", { class: "icon-btn", disabled: a === 0, onClick: () => n(a, -1), children: /* @__PURE__ */ o(uc, { size: 18 }) }),
          /* @__PURE__ */ o("button", { class: "icon-btn", disabled: a === t.widgets.length - 1, onClick: () => n(a, 1), children: /* @__PURE__ */ o(dc, { size: 18 }) })
        ] }, i.id);
      })
    ] })
  ] });
}
function ro(t) {
  const [e, n] = _({ w: 0, h: 0 });
  return Xn(() => {
    const s = t.current;
    if (!s) return;
    const i = () => {
      const r = s.clientWidth, c = s.clientHeight;
      n((d) => d.w === r && d.h === c ? d : { w: r, h: c });
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
const ze = 12, yt = 16, Vl = 700, qo = 6, Wl = 44, Ul = 84;
function No(t) {
  const e = "touches" in t ? t.touches[0] || t.changedTouches[0] : t;
  return { x: e.clientX, y: e.clientY };
}
function Yl({ editing: t, onCamera: e, onEdit: n }) {
  const s = Z(), i = Ye(), a = ne(null), r = ro(a), [c, d] = _(null), h = ne(null), f = i.state.layout.cards, u = r.w - yt * 2, l = r.h - yt * 2, p = r.w > 0 && u < Vl, g = p ? Ne : He, w = p ? yr(f) : f, y = p ? f.filter((T) => T.m && T.m.hide) : [], C = (u - ze * (g - 1)) / g, m = C + ze, M = Math.max(1, Math.floor((l + ze) / m)), D = Math.max(0, (l - (M * m - ze)) / 2), O = (T) => ({ left: T.x * m, top: T.y * m, width: T.w * m - ze, height: T.h * m - ze }), E = (T, X, te) => {
    if (!t || "button" in T && T.button !== 0) return;
    T.stopPropagation();
    const x = No(T), Q = { id: X.id, mode: te, x0: x.x, y0: x.y, orig: X, dx: 0, dy: 0, active: te === "resize", preview: w };
    h.current = Q, d(Q);
    const V = (R) => {
      const W = h.current;
      if (!W) return;
      const q = No(R), F = q.x - W.x0, G = q.y - W.y0, ie = W.active || Math.abs(F) > qo || Math.abs(G) > qo;
      if (!ie) return;
      R.cancelable && R.preventDefault();
      const $ = W.orig, Me = ot(W.mode === "move" ? { ...$, x: $.x + F / m, y: $.y + G / m } : { ...$, w: $.w + F / m, h: $.h + G / m }, g), _e = { ...W, dx: F, dy: G, active: ie, preview: Ie(w, Me) };
      h.current = _e, d(_e);
    }, Y = () => {
      const R = h.current;
      h.current = null, d(null), window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", Y), document.removeEventListener("touchmove", V, { passive: !1 }), document.removeEventListener("touchend", Y), document.removeEventListener("touchcancel", Y), R && R.active && b(R.preview);
    };
    window.addEventListener("mousemove", V), window.addEventListener("mouseup", Y), document.addEventListener("touchmove", V, { passive: !1 }), document.addEventListener("touchend", Y), document.addEventListener("touchcancel", Y);
  }, b = (T) => i.saveLayout({ ...i.state.layout, cards: p ? An(f, T) : T }), B = c && c.active ? c.preview : w, P = (T) => {
    if (!p) {
      i.saveLayout({ ...i.state.layout, cards: Ie(f.filter((x) => x.id !== T.id)) });
      return;
    }
    const X = w.filter((x) => x.id !== T.id), te = An(f, Ie(X)).map((x) => x.id === T.id ? { ...x, m: { x: 0, y: 0, w: Ne, h: 3, hide: !0 } } : x);
    i.saveLayout({ ...i.state.layout, cards: te });
  }, z = (T) => {
    const te = An(f, w).map((x) => x.id === T.id ? { ...x, m: { x: 0, y: On(w), w: Ne, h: 3 } } : x);
    i.saveLayout({ ...i.state.layout, cards: te });
  }, I = On(B), oe = t ? Math.max(M, I) : I, re = oe <= M ? D : 0;
  return /* @__PURE__ */ o("main", { class: "grid" + (t ? " editing" : "") + (c && c.active ? " dragging-card" : "") + (p ? " narrow" : ""), ref: a, children: [
    t && p && /* @__PURE__ */ o("div", { class: "grid-note", children: [
      /* @__PURE__ */ o("span", { children: A("grid.narrow_note") }),
      y.length > 0 && /* @__PURE__ */ o("div", { class: "hidden-cards", children: [
        /* @__PURE__ */ o("span", { class: "muted", children: [
          /* @__PURE__ */ o(bs, { size: 14 }),
          A("grid.hidden_on_phone")
        ] }),
        y.map((T) => /* @__PURE__ */ o("button", { class: "chip", onClick: () => z(T), children: [
          /* @__PURE__ */ o(je, { size: 14 }),
          /* @__PURE__ */ o("span", { children: ao(s, T) })
        ] }, T.id))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "grid-inner", style: { height: Math.max(0, oe * m - ze), margin: yt + re + "px " + yt + "px" }, children: [
      t && r.w > 0 && /* @__PURE__ */ o(Zl, { rows: oe, cols: g, cell: C, step: m }),
      r.w > 0 && B.map((T) => {
        const X = !!c && c.active && c.id === T.id;
        let te = O(T);
        if (X && c) {
          const x = O(c.orig);
          te = c.mode === "move" ? { ...x, left: x.left + c.dx, top: x.top + c.dy } : { ...x, width: Math.max(C * 2, x.width + c.dx), height: Math.max(C * 2, x.height + c.dy) };
        }
        return /* @__PURE__ */ o("div", { children: [
          X && /* @__PURE__ */ o("div", { class: "drop-slot", style: O(T) }),
          /* @__PURE__ */ o(
            Jl,
            {
              card: T,
              style: te,
              editing: t,
              dragged: X,
              onCamera: e,
              onEdit: n,
              onRemove: P,
              narrow: p,
              onStart: E,
              ha: s
            }
          )
        ] }, T.id);
      })
    ] })
  ] });
}
function Zl({ rows: t, cols: e, cell: n, step: s }) {
  const i = [];
  for (let a = 0; a < t; a++)
    for (let r = 0; r < e; r++)
      i.push(/* @__PURE__ */ o("div", { class: "grid-dot", style: { left: r * s, top: a * s, width: n, height: n } }, a + ":" + r));
  return /* @__PURE__ */ o("div", { class: "grid-dots", children: i });
}
function Jl({ card: t, style: e, editing: n, dragged: s, ha: i, onCamera: a, onEdit: r, onRemove: c, narrow: d, onStart: h }) {
  const f = t.color ? " tint-" + t.color : "";
  return /* @__PURE__ */ o(
    "div",
    {
      class: "cell" + f + (s ? " dragged" : ""),
      style: e,
      onMouseDown: h ? (u) => h(u, t, "move") : void 0,
      onTouchStart: h ? (u) => h(u, t, "move") : void 0,
      children: [
        /* @__PURE__ */ o(Bl, { title: ao(i, t), aside: !n && /* @__PURE__ */ o(Ta, { card: t }), class: "card-" + t.type, children: /* @__PURE__ */ o("div", { class: "panel-body", children: /* @__PURE__ */ o(Da, { card: t, onCamera: a, size: { w: e.width - Wl, h: e.height - Ul } }) }) }),
        n && /* @__PURE__ */ o(ae, { children: [
          /* @__PURE__ */ o("button", { class: "badge-btn badge-del", onMouseDown: xt, onTouchStart: xt, onClick: () => c(t), title: A(d ? "grid.hide_on_phone" : "common.delete"), children: d ? /* @__PURE__ */ o(bs, { size: 14 }) : /* @__PURE__ */ o(Fe, { size: 16 }) }),
          /* @__PURE__ */ o("button", { class: "badge-btn badge-edit", onMouseDown: xt, onTouchStart: xt, onClick: () => r(t), title: A("common.edit"), children: /* @__PURE__ */ o(Rs, { size: 14 }) }),
          h && /* @__PURE__ */ o(
            "div",
            {
              class: "resize-handle",
              onMouseDown: (u) => h(u, t, "resize"),
              onTouchStart: (u) => h(u, t, "resize")
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
function xt(t) {
  t.stopPropagation();
}
const qn = "photoframe.kiosk", It = [];
function Nn() {
  return qn + ":" + (location.pathname.split("/")[1] || "lovelace");
}
function Ha() {
  try {
    const t = localStorage.getItem(qn);
    return t !== null && (localStorage.setItem(Nn(), t), localStorage.removeItem(qn)), localStorage.getItem(Nn()) || "";
  } catch {
    return "";
  }
}
function Gl(t) {
  try {
    localStorage.setItem(Nn(), t);
  } catch {
  }
  It.forEach((e) => e());
}
function Xl(t) {
  return It.push(t), () => {
    It.splice(It.indexOf(t), 1);
  };
}
function Kl(t) {
  const e = new URLSearchParams(location.search);
  if (e.has("kiosk")) return e.get("kiosk") !== "0" && e.get("kiosk") !== "false";
  const n = Ha();
  return n ? n === "on" : t;
}
function Ge(t) {
  return t && t.shadowRoot ? t.shadowRoot : null;
}
const Vo = "photoframe-kiosk";
let $e = !1;
const Bt = [];
function $l(t) {
  return Bt.push(t), () => {
    Bt.splice(Bt.indexOf(t), 1);
  };
}
function Wo(t) {
  t !== $e && ($e = t, Bt.forEach((e) => e()));
}
function vn(t, e, n) {
  if (!t || t.getElementById(Vo)) return;
  const s = document.createElement("style");
  s.id = Vo, s.textContent = e, t.appendChild(s), n.push(() => s.remove());
}
function ed() {
  const [t, e] = _($e);
  return H(() => {
    const n = $l(() => e($e));
    return e($e), n;
  }, []), t;
}
function td() {
  history.pushState(null, "", "/"), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } }));
}
function nd() {
  const t = Ge(document.querySelector("home-assistant"))?.querySelector("home-assistant-main"), e = Ge(t);
  if (!e) return null;
  const n = e.querySelector("ha-panel-lovelace"), s = Ge(n)?.querySelector("hui-root"), i = Ge(s);
  if (!s || !i) return null;
  const a = [], r = (h, f, u) => {
    const l = h.style.getPropertyValue(f);
    h.style.setProperty(f, u), a.push(() => l ? h.style.setProperty(f, l) : h.style.removeProperty(f));
  }, c = e.querySelector("ha-drawer");
  [t, c].forEach((h) => {
    h && (r(h, "--ha-sidebar-width", "0px"), r(h, "--mdc-drawer-width", "0px"));
  }), vn(e, ":host{--ha-sidebar-width:0px!important;--mdc-drawer-width:0px!important}ha-sidebar{display:none!important}", a), vn(Ge(c), ".sidebar-shell,aside,.mdc-drawer{display:none!important;width:0!important}.app-content,.mdc-drawer-app-content{margin-left:0!important;margin-right:0!important;margin-inline-start:0!important;padding-left:0!important;padding-inline-start:0!important;width:100%!important}", a);
  const d = e.querySelector("ha-sidebar");
  if (d) {
    const h = d.style.display;
    d.style.display = "none", a.push(() => {
      d.style.display = h;
    });
  }
  return r(s, "--header-height", "0px"), vn(i, ".header,app-header,.toolbar{display:none!important}#view{padding-top:0!important;min-height:100vh}", a), Wo(!0), () => {
    a.splice(0).reverse().forEach((h) => h()), Wo(!1);
  };
}
const Uo = (t) => A("status." + t);
function od() {
  const t = ya();
  return /* @__PURE__ */ o(ae, { children: [
    /* @__PURE__ */ o("span", { class: "bar-clock", children: xa(t) }),
    /* @__PURE__ */ o("span", { class: "bar-date", children: ka(t) })
  ] });
}
function id(t) {
  const { active: e, screen: n, screens: s } = K.state, i = s[e] || [], [a, r] = _("");
  return H(() => r(""), [n, t.editing]), i.length < 2 && !t.editing ? null : /* @__PURE__ */ o("div", { class: "screen-tabs", children: [
    i.map((c, d) => t.editing && c.id === n ? /* @__PURE__ */ o("span", { class: "screen-tab on editing", children: [
      d > 0 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => K.moveScreen(c.id, -1), children: /* @__PURE__ */ o(Ac, { size: 14 }) }),
      /* @__PURE__ */ o(
        "input",
        {
          value: c.name,
          placeholder: Et(c, d),
          size: Math.max(6, (c.name || Et(c, d)).length),
          onChange: (h) => K.renameScreen(c.id, h.currentTarget.value.trim())
        }
      ),
      d < i.length - 1 && /* @__PURE__ */ o("button", { class: "screen-move", onClick: () => K.moveScreen(c.id, 1), children: /* @__PURE__ */ o(hc, { size: 14 }) }),
      i.length > 1 && /* @__PURE__ */ o(
        "button",
        {
          class: "screen-del" + (a === c.id ? " sure" : ""),
          title: A("screen.delete"),
          onClick: () => a === c.id || !c.cards.length ? K.removeScreen(c.id) : r(c.id),
          children: a === c.id ? /* @__PURE__ */ o("span", { children: A("screen.delete_sure") }) : /* @__PURE__ */ o(rt, { size: 14 })
        }
      )
    ] }, c.id) : /* @__PURE__ */ o("button", { class: "screen-tab" + (c.id === n ? " on" : ""), onClick: () => K.setActive(e, c.id), children: Et(c, d) }, c.id)),
    t.editing && /* @__PURE__ */ o("button", { class: "screen-tab add", onClick: () => K.addScreen(""), children: [
      /* @__PURE__ */ o(je, { size: 14 }),
      /* @__PURE__ */ o("span", { children: A("screen.add") })
    ] })
  ] });
}
function sd(t, e) {
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
    const c = a.clientX - r.x, d = a.clientY - r.y;
    Math.abs(c) > 90 && Math.abs(c) > Math.abs(d) * 2 && e(c < 0 ? 1 : -1);
  }
}
function ad(t) {
  const e = Z(), n = t.homes.length > 1, s = ed(), i = t.homes.reduce((p, g) => p + (K.state.screens[g.id] || []).length, 0), a = sd(i > 1 && !t.editing, t.onStep), r = t.homes.filter((p) => p.id === t.active)[0];
  H(() => {
    !t.visible && t.editing && t.onEditing(!1);
  }, [t.visible]);
  const c = ro(t.innerRef), d = c.w > 0 && c.w < 760, [h, f] = _(!1);
  H(() => {
    (!t.visible || !d) && f(!1);
  }, [t.visible, d]), H(() => {
    if (!h) return;
    const p = () => f(!1), g = window.setTimeout(() => document.addEventListener("click", p), 0);
    return () => {
      clearTimeout(g), document.removeEventListener("click", p);
    };
  }, [h]);
  const u = !K.card || K.card.canEdit, l = /* @__PURE__ */ o(ae, { children: [
    u && /* @__PURE__ */ o("button", { class: "round", onClick: () => t.onEditing(!0), title: A("controls.customize"), children: /* @__PURE__ */ o(Rs, { size: 18 }) }),
    /* @__PURE__ */ o("button", { class: "round", onClick: t.onSettings, title: A("controls.settings"), children: /* @__PURE__ */ o(jc, { size: 20 }) }),
    /* @__PURE__ */ o("button", { class: "round accent", onClick: t.onPhotos, title: A("controls.to_photos"), children: /* @__PURE__ */ o(wc, { size: 20 }) })
  ] });
  return /* @__PURE__ */ o("div", { ref: t.innerRef, class: "controls" + (t.visible ? " visible" : ""), children: [
    /* @__PURE__ */ o("header", { class: "bar" + (d ? " bar-narrow" : "") + (h ? " menu-open" : "") + (t.editing ? " bar-editing" : ""), children: [
      /* @__PURE__ */ o("div", { class: "bar-time" + (s ? " clock-link" : ""), onClick: s ? td : void 0, children: /* @__PURE__ */ o(od, {}) }),
      n && /* @__PURE__ */ o("button", { class: "home-switch", onClick: () => t.onSwitchHome(1), title: A("controls.next_home"), children: [
        /* @__PURE__ */ o("span", { class: "home-name", children: r ? r.name : "" }),
        /* @__PURE__ */ o("span", { class: "home-dots", children: t.homes.map((p) => /* @__PURE__ */ o("i", { class: p.id === t.active ? "on" : "" }, p.id)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "bar-actions", children: t.editing ? /* @__PURE__ */ o(ae, { children: [
        /* @__PURE__ */ o("button", { class: "round", onClick: t.onAddCard, title: A("controls.add_card"), children: /* @__PURE__ */ o(je, { size: 20 }) }),
        /* @__PURE__ */ o("button", { class: "pill-btn accent-bg", onClick: () => t.onEditing(!1), children: [
          /* @__PURE__ */ o(lc, { size: 18 }),
          /* @__PURE__ */ o("span", { children: A("common.done") })
        ] })
      ] }) : d ? /* @__PURE__ */ o("div", { class: "burger", children: [
        /* @__PURE__ */ o("div", { class: "burger-items", children: l }),
        /* @__PURE__ */ o("button", { class: "round burger-btn conn-" + e.status, onClick: () => f(!h), title: Uo(e.status), children: [
          h ? /* @__PURE__ */ o(Fe, { size: 20 }) : /* @__PURE__ */ o(Dc, { size: 20 }),
          /* @__PURE__ */ o("i", { class: "burger-dot" })
        ] })
      ] }) : /* @__PURE__ */ o(ae, { children: [
        /* @__PURE__ */ o("span", { class: "conn conn-" + e.status, children: [
          /* @__PURE__ */ o("i", {}),
          Uo(e.status)
        ] }),
        l
      ] }) })
    ] }),
    /* @__PURE__ */ o(id, { editing: t.editing }),
    /* @__PURE__ */ o("div", { class: "home-pane" + (t.slide ? " slide-" + t.slide : ""), ...a, children: /* @__PURE__ */ o(Yl, { editing: t.editing, onCamera: t.onCamera, onEdit: t.onEditCard }) }, t.active + "/" + K.state.screen)
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
function rd(t) {
  return /* @__PURE__ */ o(Ue, { title: A("camera.live_title"), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "cam-full", children: /* @__PURE__ */ o("img", { src: t.url, alt: "" }) }) });
}
const cd = [5e3, 1e4, 3e4, 6e4], ld = [20, 45, 120, 0];
function dd() {
  const t = Yt(), e = K.state.screens[t] || [], n = Zt();
  return t + "/" + (e.some((s) => s.id === n) ? n : e[0] ? e[0].id : "");
}
function Ad() {
  const t = Ye(), [e, n] = _(!1), [s, i] = _(""), a = t.haLink;
  if (a !== "missing" && a !== "error") return null;
  const r = () => {
    n(!0), i(""), t.createHaDashboard().then(() => n(!1), (c) => {
      n(!1), i(c.message || String(c));
    });
  };
  return /* @__PURE__ */ o("div", { class: "ha-storage", children: [
    /* @__PURE__ */ o("p", { class: "hint", children: A("storage." + a) }),
    a === "missing" && (t.haClient && t.haClient.isAdmin ? /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: e, onClick: r, children: /* @__PURE__ */ o("span", { children: A(e ? "common.loading" : "storage.create") }) }) : /* @__PURE__ */ o("p", { class: "hint small", children: A("storage.ask_admin") })),
    s && /* @__PURE__ */ o("div", { class: "c-red small", children: s })
  ] });
}
function hd() {
  const t = Ye(), e = t.migration, [n, s] = _(""), [i, a] = _(""), r = () => {
    s("0 / " + e.photos), a(""), t.migratePhotos((c, d) => s(c + " / " + d)).then(
      () => s(""),
      (c) => {
        s(""), a(c.message || String(c));
      }
    );
  };
  return /* @__PURE__ */ o("div", { class: "migration", children: [
    /* @__PURE__ */ o("p", { children: A("migration.text") }),
    /* @__PURE__ */ o("div", { class: "row-btns", children: [
      e.photos > 0 && /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: r, children: /* @__PURE__ */ o("span", { children: n ? A("photos.uploading") + " " + n : A("migration.photos", { n: e.photos }) }) }),
      e.screens && /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: () => t.migrateScreens(), children: /* @__PURE__ */ o("span", { children: A("migration.screens") }) }),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !!n, onClick: () => t.dismissMigration(), children: /* @__PURE__ */ o("span", { children: A("migration.skip") }) })
    ] }),
    i && /* @__PURE__ */ o("div", { class: "c-red small", children: i })
  ] });
}
function ud(t) {
  const e = Ye(), { settings: n, photos: s } = e.state, i = !!e.card && !e.card.standalone, a = !!e.card || !!Wt(), [r, c] = _("photos"), d = a ? r : "ha", [h, f] = _(n), [u, l] = _(!1), [p, g] = _(""), [w, y] = _(""), C = (k) => f({ ...h, ...k }), [m, M] = _(!1), [D, O] = _(""), [E, b] = _(""), B = (k, L) => {
    const le = Array.prototype.slice.call(k || []).filter((pe) => /^image\//.test(pe.type) || /\.(heic|heif)$/i.test(pe.name));
    L && (L.value = ""), le.length && (l(!0), O(""), b(""), e.addPhotos(le, (pe, ut) => b(ut > 1 ? pe + " / " + ut : ""), Q ? Y : void 0).then(
      () => l(!1),
      (pe) => {
        l(!1), O(pe.message || String(pe));
      }
    ));
  }, [P, z] = _(vi()), [I, oe] = _(Ha()), [re, T] = _(gi()), [X, te] = _(Lt()), x = Wt(), Q = !!e.card && e.card.integration, V = e.card && e.card.config.albums || [], [Y, R] = _(e.card && e.card.album && e.card.album !== "all" ? e.card.album : ""), [W, q] = _("");
  H(() => {
    e.card && e.card.mediaBrowserUrl(Y).then(q, () => q(""));
  }, [Y, !!e.card]);
  const [F, G] = _(Ut()), [ie, $] = _(e.state.homes), Me = JSON.stringify(ie) !== JSON.stringify(e.state.homes), _e = (k, L) => $(ie.map((le) => le.id === k ? { ...le, ...L } : le)), At = () => {
    e.saveSettings(h), Me && e.saveHomes(ie), t.onClose();
  }, ht = () => {
    try {
      const k = JSON.parse(p);
      if (!k || !Array.isArray(k.cards)) throw new Error(A("settings.no_cards_field"));
      e.saveLayout(k), y(""), g("");
    } catch (k) {
      y(A("settings.import_failed", { error: k.message }));
    }
  };
  return /* @__PURE__ */ o(Ue, { title: /* @__PURE__ */ o("span", { class: "modal-title", children: [
    /* @__PURE__ */ o(vc, { size: 20, class: "accent-text" }),
    /* @__PURE__ */ o("span", { children: A("settings.title") })
  ] }), onClose: t.onClose, children: [
    a && /* @__PURE__ */ o("div", { class: "tabs", children: [
      /* @__PURE__ */ o("button", { class: d === "photos" ? "active" : "", onClick: () => c("photos"), children: A("settings.tab.photos") }),
      /* @__PURE__ */ o("button", { class: d === "homes" ? "active" : "", onClick: () => c("homes"), children: A("settings.tab.homes") }),
      /* @__PURE__ */ o("button", { class: d === "layout" ? "active" : "", onClick: () => c("layout"), children: A("settings.tab.layout") }),
      !i && /* @__PURE__ */ o("button", { class: d === "ha" ? "active" : "", onClick: () => c("ha"), children: "Home Assistant" })
    ] }),
    d === "photos" && /* @__PURE__ */ o("div", { children: [
      e.migration && /* @__PURE__ */ o(hd, {}),
      /* @__PURE__ */ o("p", { class: "hint", children: e.card ? A("photos.card_hint", { folder: e.card.folder }) : A("photos.local_hint") }),
      /* @__PURE__ */ o(
        "label",
        {
          class: "drop-zone" + (u ? " busy" : "") + (m ? " over" : ""),
          onDragOver: (k) => {
            k.preventDefault(), M(!0);
          },
          onDragLeave: () => M(!1),
          onDrop: (k) => {
            k.preventDefault(), M(!1), u || B(k.dataTransfer && k.dataTransfer.files);
          },
          children: [
            /* @__PURE__ */ o("input", { type: "file", multiple: !0, accept: "image/*,.heic,.heif", onChange: (k) => B(k.currentTarget.files, k.currentTarget), disabled: u }),
            /* @__PURE__ */ o(gc, { size: 40, class: "muted" }),
            /* @__PURE__ */ o("p", { class: "drop-title", children: u ? A("photos.uploading") + (E ? " " + E : "") : A("photos.pick") }),
            /* @__PURE__ */ o("p", { class: "hint small", children: A(Q ? "photos.formats_server" : "photos.formats") })
          ]
        }
      ),
      (D || e.photoError) && /* @__PURE__ */ o("div", { class: "c-red small upload-error", children: D || e.photoError }),
      Q && V.length > 0 && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("photos.album") }),
        /* @__PURE__ */ o("select", { value: Y, onChange: (k) => R(k.currentTarget.value), children: [
          /* @__PURE__ */ o("option", { value: "", children: A("photos.album_root") }),
          V.map((k) => /* @__PURE__ */ o("option", { value: k, children: k }, k))
        ] })
      ] }),
      e.card && /* @__PURE__ */ o("div", { class: "photos-count", children: [
        /* @__PURE__ */ o("span", { children: A("photos.count", { n: s.length }) }),
        W && /* @__PURE__ */ o("a", { href: W, target: "_blank", rel: "noopener", children: A("photos.open_media") })
      ] }),
      !e.card && s.length > 0 && /* @__PURE__ */ o("div", { class: "thumbs thumbs-small", children: s.map((k) => /* @__PURE__ */ o("div", { class: "thumb", style: { backgroundImage: "url(" + k.url + ")" }, children: /* @__PURE__ */ o("button", { class: "thumb-del", onClick: () => e.deletePhoto(k.id), children: /* @__PURE__ */ o(Fe, { size: 14 }) }) }, k.id)) }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("settings.slide_interval") }),
        /* @__PURE__ */ o("select", { value: h.slideIntervalMs, onChange: (k) => C({ slideIntervalMs: +k.currentTarget.value }), children: cd.map((k) => /* @__PURE__ */ o("option", { value: k, children: A("settings.interval." + k) }, k)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("settings.idle_return") }),
        /* @__PURE__ */ o("select", { value: h.idleSec, onChange: (k) => C({ idleSec: +k.currentTarget.value }), children: ld.map((k) => /* @__PURE__ */ o("option", { value: k, children: A("settings.idle." + k) }, k)) })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("settings.language") }),
        /* @__PURE__ */ o("select", { value: P, onChange: (k) => {
          z(k.currentTarget.value), ur(k.currentTarget.value), sn();
        }, children: [
          /* @__PURE__ */ o("option", { value: "", children: A("settings.language_auto") }),
          hr().map((k) => /* @__PURE__ */ o("option", { value: k.code, children: k.name }, k.code))
        ] })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("settings.quality") }),
        /* @__PURE__ */ o("select", { value: re, onChange: (k) => {
          const L = k.currentTarget.value;
          T(L), Ka(L);
        }, children: [
          /* @__PURE__ */ o("option", { value: "auto", children: A("settings.quality_auto", { mode: A(bi() === "lite" ? "settings.quality_lite" : "settings.quality_full") }) }),
          /* @__PURE__ */ o("option", { value: "full", children: A("settings.quality_full") }),
          /* @__PURE__ */ o("option", { value: "lite", children: A("settings.quality_lite") })
        ] })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("settings.fit") }),
        /* @__PURE__ */ o("select", { value: X, onChange: (k) => {
          const L = k.currentTarget.value;
          te(L), sr(L);
        }, children: [
          /* @__PURE__ */ o("option", { value: "auto", children: A("settings.fit_auto") }),
          /* @__PURE__ */ o("option", { value: "contain", children: A("settings.fit_contain") }),
          /* @__PURE__ */ o("option", { value: "cover", children: A("settings.fit_cover") })
        ] })
      ] }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: [
          A("lock.title"),
          /* @__PURE__ */ o("small", { class: "option-hint", children: A("lock.long_press") })
        ] }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: t.onCustomize, children: A("lock.customize") })
      ] }),
      i && /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("settings.kiosk") }),
        /* @__PURE__ */ o("select", { value: I, onChange: (k) => {
          const L = k.currentTarget.value;
          oe(L), Gl(L);
        }, children: [
          /* @__PURE__ */ o("option", { value: "", children: A("settings.kiosk_auto") }),
          /* @__PURE__ */ o("option", { value: "on", children: A("settings.kiosk_on") }),
          /* @__PURE__ */ o("option", { value: "off", children: A("settings.kiosk_off") })
        ] })
      ] })
    ] }),
    d === "ha" && i && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("p", { class: "hint", children: A("ha.card_hint") }) }),
    d === "ha" && !i && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("div", { class: "auth", children: [
        /* @__PURE__ */ o("div", { class: "auth-title", children: A("ha.auth") }),
        /* @__PURE__ */ o("label", { class: "field", children: [
          /* @__PURE__ */ o("span", { children: A("ha.url") }),
          /* @__PURE__ */ o("input", { value: h.haUrl, placeholder: x ? x.hassUrl : location.protocol + "//" + location.host, onInput: (k) => C({ haUrl: k.currentTarget.value.trim() }) })
        ] }),
        x ? /* @__PURE__ */ o("div", { class: "auth-session", children: [
          /* @__PURE__ */ o("span", { children: A("ha.logged_in", { url: x.hassUrl }) }),
          !x.embedded && /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
            zr(), location.reload();
          }, children: [
            /* @__PURE__ */ o(Bc, { size: 14 }),
            /* @__PURE__ */ o("span", { children: A("ha.logout") })
          ] })
        ] }) : /* @__PURE__ */ o("button", { class: "btn btn-ghost btn-login", onClick: () => {
          e.saveSettings(h), Dr(h.haUrl);
        }, children: [
          /* @__PURE__ */ o(Ic, { size: 16 }),
          /* @__PURE__ */ o("span", { children: A("ha.login") })
        ] }),
        /* @__PURE__ */ o("p", { class: "hint", children: A("ha.local_hint") })
      ] }),
      /* @__PURE__ */ o(Ad, {}),
      e.frameClient && /* @__PURE__ */ o("label", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: A("frame.name") }),
        /* @__PURE__ */ o(
          "input",
          {
            value: F,
            placeholder: A("frame.name_placeholder"),
            onInput: (k) => G(k.currentTarget.value),
            onChange: (k) => e.renameFrame(k.currentTarget.value.trim())
          }
        ),
        /* @__PURE__ */ o("small", { class: "option-hint", children: A("frame.hint") })
      ] })
    ] }),
    d === "homes" && /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ o("p", { class: "hint", children: A("homes.hint") + (e.card ? A("homes.card_hint") : "") }),
      /* @__PURE__ */ o("div", { class: "option", children: [
        /* @__PURE__ */ o("label", { children: A("screen.start") }),
        /* @__PURE__ */ o("select", { value: dd(), onChange: (k) => {
          const L = k.currentTarget.value.split("/");
          e.setStart(L[0], L[1]);
        }, children: e.state.homes.map((k) => (e.state.screens[k.id] || []).map((L, le) => /* @__PURE__ */ o("option", { value: k.id + "/" + L.id, children: (e.state.homes.length > 1 ? k.name + " · " : "") + Et(L, le) }, k.id + "/" + L.id))) })
      ] }),
      ie.map((k) => /* @__PURE__ */ o("div", { class: "home-row", children: /* @__PURE__ */ o("div", { class: "home-row-head", children: [
        /* @__PURE__ */ o("input", { class: "home-input", value: k.name, onInput: (L) => _e(k.id, { name: L.currentTarget.value }) }),
        k.id !== ce && /* @__PURE__ */ o("button", { class: "icon-btn danger", title: A("homes.delete"), onClick: () => $(ie.filter((L) => L.id !== k.id)), children: /* @__PURE__ */ o(rt, { size: 16 }) })
      ] }) }, k.id)),
      /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => $(ie.concat({ id: "h" + Date.now().toString(36), name: A("homes.new_name") })), children: /* @__PURE__ */ o("span", { children: A("homes.add") }) })
    ] }),
    d === "layout" && /* @__PURE__ */ o("div", { children: [
      e.card && e.cardError && /* @__PURE__ */ o("div", { class: "c-red small", children: A("sync.save_failed", { error: e.cardError }) }),
      /* @__PURE__ */ o("div", { class: "field", children: [
        /* @__PURE__ */ o("span", { children: A("layout.title") }),
        /* @__PURE__ */ o("div", { class: "row-btns", children: [
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => {
            g(JSON.stringify(e.state.layout, null, 2)), y("");
          }, children: [
            /* @__PURE__ */ o(yc, { size: 14 }),
            /* @__PURE__ */ o("span", { children: A("layout.export") })
          ] }),
          /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => e.saveLayout(Ei()), children: [
            /* @__PURE__ */ o(Qc, { size: 14 }),
            /* @__PURE__ */ o("span", { children: A("layout.reset") })
          ] })
        ] }),
        /* @__PURE__ */ o("textarea", { class: "json", value: p, placeholder: A("layout.import_placeholder"), onInput: (k) => g(k.currentTarget.value) }),
        w && /* @__PURE__ */ o("div", { class: "c-red small", children: w }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", disabled: !p, onClick: ht, children: /* @__PURE__ */ o("span", { children: A("layout.import") }) })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      d === "photos" && !e.card && s.length > 0 ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: () => e.clearPhotos(), children: [
        /* @__PURE__ */ o(rt, { size: 14 }),
        /* @__PURE__ */ o("span", { children: A("photos.delete_all") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: At, children: A("common.done") })
    ] })
  ] });
}
function fd(t) {
  const e = Object.keys(Rt);
  return /* @__PURE__ */ o(Ue, { title: A("editor.new_card"), onClose: t.onClose, children: /* @__PURE__ */ o("div", { class: "type-list", children: e.map((n) => {
    const s = Rt[n], i = Re(s.icon);
    return /* @__PURE__ */ o("button", { class: "type-row", onClick: () => t.onPick({
      // Новая карточка встаёт в конец сетки; settle при сохранении поднимет её на свободное место.
      id: mr(),
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
        /* @__PURE__ */ o("b", { children: nt(n) }),
        /* @__PURE__ */ o("small", { children: Ci(n) })
      ] }),
      /* @__PURE__ */ o(je, { size: 18 })
    ] }, n);
  }) }) });
}
function pd(t) {
  const e = Z(), [n, s] = _(""), [i, a] = _(!1), [r, c] = _(t.cardType ? "devices" : "entities"), d = n.toLowerCase(), h = Object.keys(e.states).filter((l) => {
    if (t.exclude.indexOf(l) !== -1 || !i && !Pe(e, l) || !i && t.domains.indexOf(l.split(".")[0]) === -1 || !i && t.match && !t.match(e.states[l])) return !1;
    if (!d) return !0;
    const p = String(e.states[l].attributes.friendly_name || "").toLowerCase();
    return l.indexOf(d) !== -1 || p.indexOf(d) !== -1;
  }).sort().slice(0, 150), f = t.cardType, u = f ? Object.keys(e.devices).map((l) => e.devices[l]).map((l) => ({
    dev: l,
    fit: l.entities.filter((p) => e.registry[p] && e.registry[p].ec == null && Pe(e, p) && so(f, e.states[p]))
  })).filter((l) => l.fit.length && (t.excludeDevices || []).indexOf(l.dev.id) === -1 && (!d || l.dev.name.toLowerCase().indexOf(d) !== -1)).sort((l, p) => l.dev.name.localeCompare(p.dev.name)) : [];
  return /* @__PURE__ */ o("div", { class: "picker", children: [
    f && /* @__PURE__ */ o("div", { class: "seg seg-wide picker-mode", children: [
      /* @__PURE__ */ o("button", { class: r === "devices" ? "active" : "", onClick: () => c("devices"), children: A("editor.devices") }),
      /* @__PURE__ */ o("button", { class: r === "entities" ? "active" : "", onClick: () => c("entities"), children: A("editor.entities") })
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-search", children: [
      /* @__PURE__ */ o(Lc, { size: 16 }),
      /* @__PURE__ */ o("input", { placeholder: A(r === "devices" ? "editor.search_device" : "editor.search_entity"), value: n, onInput: (l) => s(l.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", onClick: t.onClose, children: /* @__PURE__ */ o(Fe, { size: 18 }) })
    ] }),
    r === "entities" && /* @__PURE__ */ o("label", { class: "check", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: i, onChange: (l) => a(l.currentTarget.checked) }),
      " ",
      A("editor.show_all")
    ] }),
    /* @__PURE__ */ o("div", { class: "picker-list", children: r === "devices" ? /* @__PURE__ */ o(ae, { children: [
      u.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: Object.keys(e.devices).length ? A("editor.no_devices") : A("editor.loading_devices") }),
      u.map(({ dev: l, fit: p }) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPickDevice && t.onPickDevice(l.id, p[0]), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: l.name || p[0] }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: A("editor.count", { n: p.length }) }),
        /* @__PURE__ */ o("span", { class: "picker-id", children: p.slice(0, 4).map((g) => e.registry[g].en || e.states[g].attributes.friendly_name).join(" · ") })
      ] }, l.id))
    ] }) : /* @__PURE__ */ o(ae, { children: [
      h.length === 0 && /* @__PURE__ */ o("div", { class: "muted picker-empty", children: A("editor.nothing_found") }),
      h.map((l) => /* @__PURE__ */ o("button", { class: "picker-row", onClick: () => t.onPick(l), children: [
        /* @__PURE__ */ o("span", { class: "picker-name", children: e.states[l].attributes.friendly_name || l }),
        /* @__PURE__ */ o("span", { class: "picker-state", children: e.states[l].state + (isNaN(parseFloat(e.states[l].state)) ? "" : jt(e, l)) }),
        /* @__PURE__ */ o("span", { class: "picker-id mono", children: l })
      ] }, l))
    ] }) })
  ] });
}
const md = ["cover", "width", "height"], gd = [[2, 2], [3, 3], [4, 3], [6, 3], [3, 6], [6, 6], [12, 3]];
function bd(t) {
  const e = Z(), [n, s] = _(t.card), [i, a] = _(null), r = Rt[n.type], c = (u) => s({ ...n, ...u }), d = (u, l) => c({ items: n.items.map((p, g) => g === u ? { ...p, ...l } : p) }), h = (u, l) => {
    const p = u + l;
    if (p < 0 || p >= n.items.length) return;
    const g = n.items.slice();
    g[u] = n.items[p], g[p] = n.items[u], c({ items: g });
  }, f = Object.keys(Kt);
  return /* @__PURE__ */ o(Ue, { title: A("editor.card_title", { type: nt(n.type) }), onClose: t.onClose, children: [
    /* @__PURE__ */ o("label", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: A("editor.name") }),
      /* @__PURE__ */ o("input", { value: n.title, placeholder: nt(n.type), onInput: (u) => c({ title: u.currentTarget.value }) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: A("editor.size") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: gd.map(([u, l]) => /* @__PURE__ */ o("button", { class: n.w === u && n.h === l ? "active" : "", onClick: () => c({ w: u, h: l }), children: [
        u,
        "×",
        l
      ] }, u + "x" + l)) })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: A("editor.color") }),
      /* @__PURE__ */ o("div", { class: "swatches", children: [
        /* @__PURE__ */ o("button", { class: "swatch swatch-auto" + (n.color ? "" : " active"), onClick: () => c({ color: void 0 }), title: A("editor.color_auto"), children: "A" }),
        Object.keys(Ke).map((u) => /* @__PURE__ */ o("button", { class: "swatch" + (n.color === u ? " active" : ""), style: { background: Ke[u] }, onClick: () => c({ color: u }) }, u))
      ] })
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: A("editor.icon") }),
      /* @__PURE__ */ o("div", { class: "icon-grid", children: f.map((u) => {
        const l = Kt[u];
        return /* @__PURE__ */ o("button", { class: n.icon === u ? "active" : "", onClick: () => c({ icon: u }), children: /* @__PURE__ */ o(l, { size: 18 }) }, u);
      }) })
    ] }),
    n.type === "cameras" && /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: A("editor.camera_picture") }),
      /* @__PURE__ */ o("div", { class: "seg seg-wide", children: md.map((u) => /* @__PURE__ */ o("button", { class: (n.fit || "cover") === u ? "active" : "", onClick: () => c({ fit: u }), children: A("editor.fit." + u) }, u)) })
    ] }),
    n.type !== "cameras" && n.type !== "scenes" && /* @__PURE__ */ o("label", { class: "check check-row", children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: !!n.chip, onChange: (u) => c({ chip: u.currentTarget.checked }) }),
      n.type === "weather" ? A("editor.weather_on_photo") : A("editor.chip_on_photo")
    ] }),
    /* @__PURE__ */ o("div", { class: "field", children: [
      /* @__PURE__ */ o("span", { children: A("editor.items", { n: n.items.length, hint: Ci(n.type).toLowerCase() }) }),
      i === null ? /* @__PURE__ */ o("div", { class: "items", children: [
        n.items.map((u, l) => {
          const p = Re(u.icon || io(u.entity, e.states[u.entity] && e.states[u.entity].attributes.device_class));
          return /* @__PURE__ */ o("div", { class: "item-block", children: [
            /* @__PURE__ */ o("div", { class: "item-row", children: [
              /* @__PURE__ */ o("button", { class: "item-icon", title: A("editor.change_icon"), onClick: () => {
                const g = f.indexOf(u.icon || "");
                d(l, { icon: f[(g + 1) % f.length] });
              }, children: /* @__PURE__ */ o(p, { size: 18 }) }),
              /* @__PURE__ */ o("div", { class: "item-main", children: [
                /* @__PURE__ */ o("input", { value: u.name || "", placeholder: u.device ? e.devices[u.device] ? e.devices[u.device].name : A("editor.device") : he(e, { entity: u.entity }), onInput: (g) => d(l, { name: g.currentTarget.value || void 0 }) }),
                u.device ? /* @__PURE__ */ o("span", { class: "mono", children: A("editor.device") }) : /* @__PURE__ */ o("span", { class: "mono", children: [
                  u.entity,
                  !Pe(e, u.entity) && /* @__PURE__ */ o("em", { class: "na-tag", children: [
                    " · ",
                    A("editor.unavailable")
                  ] })
                ] }),
                n.type === "climate" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "hum" }), children: [
                  /* @__PURE__ */ o(Qe, { size: 12 }),
                  u.hum ? u.hum : A("editor.add_humidity")
                ] }),
                n.type === "ac" && /* @__PURE__ */ o("button", { class: "link", onClick: () => a({ index: l, field: "temp" }), children: [
                  /* @__PURE__ */ o(ra, { size: 12 }),
                  u.temp ? u.temp : A("editor.room_sensor")
                ] })
              ] }),
              /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => h(l, -1), children: /* @__PURE__ */ o(Yi, { size: 16 }) }),
              /* @__PURE__ */ o("button", { class: "icon-btn", onClick: () => h(l, 1), children: /* @__PURE__ */ o(Wi, { size: 16 }) }),
              /* @__PURE__ */ o("button", { class: "icon-btn danger", onClick: () => c({ items: n.items.filter((g, w) => w !== l) }), children: /* @__PURE__ */ o(rt, { size: 16 }) })
            ] }),
            u.device && /* @__PURE__ */ o(yd, { it: u, type: n.type, onChange: (g) => d(l, g) })
          ] }, u.entity + l);
        }),
        /* @__PURE__ */ o("button", { class: "btn btn-ghost", onClick: () => a("add"), children: [
          /* @__PURE__ */ o(je, { size: 16 }),
          /* @__PURE__ */ o("span", { children: n.type === "weather" && !n.items.length ? A("editor.pick_forecast") : A("editor.add_device") })
        ] })
      ] }) : /* @__PURE__ */ o(
        pd,
        {
          domains: i === "add" ? r.domains : ["sensor"],
          match: i !== "add" ? (u) => u.attributes.device_class === (i.field === "hum" ? "humidity" : "temperature") : (u) => so(n.type, u),
          exclude: n.items.map((u) => u.entity),
          cardType: i === "add" ? n.type : void 0,
          excludeDevices: n.items.map((u) => u.device || "").filter(Boolean),
          onPickDevice: (u, l) => {
            c({ items: n.items.concat({ entity: l, device: u }) }), a(null);
          },
          onClose: () => a(null),
          onPick: (u) => {
            i === "add" ? c({ items: n.items.concat({ entity: u }) }) : d(i.index, { [i.field]: u }), a(null);
          }
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { class: "modal-foot", children: [
      t.onDelete ? /* @__PURE__ */ o("button", { class: "btn btn-danger", onClick: t.onDelete, children: [
        /* @__PURE__ */ o(rt, { size: 14 }),
        /* @__PURE__ */ o("span", { children: A("common.delete") })
      ] }) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o("button", { class: "btn btn-accent", onClick: () => t.onSave(n), children: A("common.save") })
    ] })
  ] });
}
function yd(t) {
  const e = Z(), n = t.it, s = n.skip || [], i = n.names || {}, a = Ia(e, t.type, { ...n, skip: [], names: {} });
  if (!a.length) return /* @__PURE__ */ o("span", { class: "mono", children: A("editor.no_matching") });
  const r = a.map((f) => f.entity), c = (f, u) => {
    const l = r.slice(), p = l[f];
    l[f] = l[f + u], l[f + u] = p, t.onChange({ order: l });
  }, d = (f, u) => {
    const l = { ...i };
    u ? l[f] = u : delete l[f], t.onChange({ names: Object.keys(l).length ? l : void 0 });
  }, h = (f, u) => {
    const l = u ? s.filter((p) => p !== f) : s.concat(f);
    t.onChange({ skip: l.length ? l : void 0 });
  };
  return /* @__PURE__ */ o("div", { class: "device-parts", children: a.map((f, u) => {
    const l = s.indexOf(f.entity) === -1;
    return /* @__PURE__ */ o("div", { class: "device-part" + (l ? "" : " off"), children: [
      /* @__PURE__ */ o("input", { type: "checkbox", checked: l, title: A(l ? "editor.part_hide" : "editor.part_show"), onChange: (p) => h(f.entity, p.currentTarget.checked) }),
      /* @__PURE__ */ o("input", { class: "part-name", value: i[f.entity] || "", placeholder: f.name || f.entity, onInput: (p) => d(f.entity, p.currentTarget.value) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: u === 0, onClick: () => c(u, -1), children: /* @__PURE__ */ o(Yi, { size: 14 }) }),
      /* @__PURE__ */ o("button", { class: "icon-btn", disabled: u === a.length - 1, onClick: () => c(u, 1), children: /* @__PURE__ */ o(Wi, { size: 14 }) })
    ] }, f.entity);
  }) });
}
function xd({ thumb: t, sheet: e }) {
  const [n, s] = _({ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight }), [i, a] = _(t ? [t] : []);
  Xn(() => {
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
    i.map((c, d) => /* @__PURE__ */ o("div", { class: "glass-layer" + (d > 0 ? " fresh" : ""), style: { ...r, backgroundImage: "url(" + c + ")" } }, c.length + ":" + c.slice(-32))),
    /* @__PURE__ */ o("div", { class: "sheet-tint" })
  ] });
}
function kd({ card: t, tone: e, onCamera: n, onClose: s }) {
  const i = Z(), a = ne(null), [r, c] = _(null);
  Xn(() => {
    c(a.current);
  }, []);
  const d = ["switches", "scenes", "cameras", "ac", "speakers", "tv", "weather"].indexOf(t.type) !== -1;
  return /* @__PURE__ */ o("div", { class: "sheet-layer", onClick: s, children: /* @__PURE__ */ o("div", { ref: a, class: "sheet sheet-" + t.type + (d ? " sheet-wide" : "") + (t.color ? " tint-" + t.color : ""), onClick: (h) => h.stopPropagation(), children: [
    /* @__PURE__ */ o(xd, { thumb: e ? e.thumb : void 0, sheet: r }),
    /* @__PURE__ */ o("div", { class: "sheet-inner", children: [
      /* @__PURE__ */ o("div", { class: "panel-head", children: [
        /* @__PURE__ */ o("h2", { children: ao(i, t) }),
        /* @__PURE__ */ o("div", { class: "sheet-actions", children: [
          /* @__PURE__ */ o(Ta, { card: t }),
          /* @__PURE__ */ o("button", { class: "sheet-close", onClick: s, children: /* @__PURE__ */ o(Fe, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ o(Da, { card: t, size: { w: d ? 600 : 420, h: 600 }, onCamera: n })
    ] })
  ] }) });
}
const Qa = 36e5, Dt = 24 * Qa, La = { "24h": Dt, "7d": 7 * Dt, "30d": 30 * Dt }, _d = ["binary_sensor", "switch", "light", "input_boolean", "fan", "lock", "cover", "media_player"], vd = ["on", "open", "unlocked", "playing", "home"];
function ja(t) {
  if (!t) return "line";
  if (_d.indexOf(t.entity_id.split(".")[0]) !== -1) return "timeline";
  const e = t.attributes.state_class;
  return e === "total" || e === "total_increasing" ? "bars" : isNaN(parseFloat(t.state)) ? "timeline" : "line";
}
function en(t) {
  return new Date(t).toISOString();
}
function Yo(t) {
  return typeof t == "number" ? t : Date.parse(t);
}
function wn(t, e, n, s) {
  return t.call({
    type: "history/history_during_period",
    start_time: en(n),
    end_time: en(s),
    entity_ids: [e],
    minimal_response: !0,
    no_attributes: !0
  }).then((i) => (i[e] || []).map((a) => ({ s: a.s, t: (a.lu || a.lc || 0) * 1e3 || n })));
}
function Zo(t, e, n, s, i, a) {
  return t.call({
    type: "recorder/statistics_during_period",
    start_time: en(n),
    end_time: en(s),
    statistic_ids: [e],
    period: i,
    types: a
  }).then((r) => r[e] || []);
}
function Jo(t) {
  const e = [];
  return t.forEach((n) => {
    const s = parseFloat(n.s);
    isNaN(s) || e.push({ t: n.t, v: s });
  }), e;
}
function wd(t, e, n) {
  const s = e.entity_id, i = ja(e), a = Date.now(), r = a - La[n], c = { kind: i, from: r, to: a, points: [], segments: [], bucketMs: 0 };
  if (i === "timeline")
    return wn(t, s, r, a).then((d) => {
      const h = d.map((f, u) => ({
        from: Math.max(r, f.t),
        to: u + 1 < d.length ? d[u + 1].t : a,
        on: f.s === "unavailable" || f.s === "unknown" ? null : vd.indexOf(f.s) !== -1
      }));
      return { ...c, segments: h };
    });
  if (i === "bars") {
    const d = n === "24h" ? "hour" : "day";
    return Zo(t, s, r, a, d, ["change"]).then((h) => ({
      ...c,
      bucketMs: d === "hour" ? Qa : Dt,
      points: h.filter((f) => f.change != null).map((f) => ({ t: Yo(f.start), v: f.change }))
    }));
  }
  return n === "24h" ? wn(t, s, r, a).then((d) => ({ ...c, points: Jo(d) })) : Zo(t, s, r, a, n === "7d" ? "hour" : "day", ["mean", "min", "max"]).then((d) => {
    const h = d.filter((f) => f.mean != null).map((f) => ({ t: Yo(f.start), v: f.mean, min: f.min == null ? void 0 : f.min, max: f.max == null ? void 0 : f.max }));
    return h.length ? { ...c, points: h } : wn(t, s, r, a).then((f) => ({ ...c, points: Jo(f) }));
  });
}
function Cd(t) {
  const e = t.points;
  if (t.kind === "timeline") {
    let r = 0, c = 0, d = null;
    return t.segments.forEach((h) => {
      h.on && (c += h.to - h.from, d === !1 && r++), h.on !== null && (d = h.on);
    }), { onCount: r, onMs: c };
  }
  if (!e.length) return {};
  if (t.kind === "bars") {
    let r = 0, c = e[0];
    return e.forEach((d) => {
      r += d.v, d.v > c.v && (c = d);
    }), { total: r, peak: c, avg: r / e.length };
  }
  let n = e[0], s = e[0];
  e.forEach((r) => {
    (r.min != null ? r.min : r.v) < (n.min != null ? n.min : n.v) && (n = r), (r.max != null ? r.max : r.v) > (s.max != null ? s.max : s.v) && (s = r);
  });
  let i = 0, a = 0;
  return e.forEach((r, c) => {
    const d = c + 1 < e.length ? e[c + 1].t : t.to, h = Math.max(0, d - Math.max(r.t, t.from));
    i += r.v * h, a += h;
  }), {
    min: { t: n.t, v: n.min != null ? n.min : n.v },
    max: { t: s.t, v: s.max != null ? s.max : s.v },
    avg: a ? i / a : void 0
  };
}
function Md(t, e) {
  const n = t.registry[e], s = n && n.di ? t.devices[n.di] : void 0;
  return s ? Promise.resolve(s.entities.filter((i) => i !== e && t.registry[i].ec == null)) : Promise.resolve([]);
}
const Ed = ["24h", "7d", "30d"], Sd = ["switch", "light", "fan", "input_boolean"];
function Cn(t, e) {
  const n = t.states[e];
  return String(n && n.attributes.friendly_name || e);
}
function zd(t) {
  if (t.length < 2) return t;
  const e = t.map((s) => s.split(" "));
  let n = 0;
  for (; e.every((s) => s.length > n + 1 && s[n] === e[0][n]); ) n++;
  return e.map((s) => s.slice(n).join(" "));
}
function Id(t) {
  const e = Math.round(t / 6e4), n = Math.floor(e / 1440), s = Math.floor(e % 1440 / 60), i = e % 60;
  return [n ? A("duration.days", { n }) : "", s || n ? A("duration.hours", { n: s }) : "", n ? "" : A("duration.minutes", { n: i })].filter(Boolean).join(" ");
}
function Bd({ entity: t }) {
  const e = Z(), [n, s] = _(!1);
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
    /* @__PURE__ */ o(at, { size: 16 }),
    /* @__PURE__ */ o("span", { children: A(n ? "detail.confirm_off" : i ? "common.turn_off" : "common.turn_on") })
  ] });
}
function de(t) {
  return /* @__PURE__ */ o("div", { class: "stat", children: [
    /* @__PURE__ */ o("div", { class: "stat-label", children: t.label }),
    /* @__PURE__ */ o("div", { class: "stat-value", children: t.value }),
    t.note && /* @__PURE__ */ o("div", { class: "stat-note", children: t.note })
  ] });
}
function Dd({ series: t, sum: e, unit: n, range: s, current: i }) {
  const a = n ? " " + n : "";
  if (t.kind === "timeline") {
    const r = t.to - t.from;
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(de, { label: A("stat.now"), value: i }),
      /* @__PURE__ */ o(de, { label: A("stat.turned_on"), value: String(e.onCount || 0), note: A("stat.times") }),
      /* @__PURE__ */ o(de, { label: A("stat.on_time"), value: Id(e.onMs || 0) }),
      /* @__PURE__ */ o(de, { label: A("stat.on_share"), value: Math.round((e.onMs || 0) / r * 100) + "%" })
    ] });
  }
  if (t.kind === "bars") {
    const r = t.bucketMs >= 864e5 ? A("stat.avg_per_day") : A("stat.avg_per_hour");
    return /* @__PURE__ */ o("div", { class: "stats", children: [
      /* @__PURE__ */ o(de, { label: A("stat.total"), value: e.total != null ? ee(e.total) + a : "—" }),
      /* @__PURE__ */ o(de, { label: r, value: e.avg != null ? ee(e.avg) + a : "—" }),
      /* @__PURE__ */ o(
        de,
        {
          label: A("stat.peak"),
          value: e.peak ? ee(e.peak.v) + a : "—",
          note: e.peak ? t.bucketMs >= 864e5 ? ct(e.peak.t) : Le(e.peak.t) : void 0
        }
      ),
      /* @__PURE__ */ o(de, { label: A("stat.counter_now"), value: i })
    ] });
  }
  return /* @__PURE__ */ o("div", { class: "stats", children: [
    /* @__PURE__ */ o(de, { label: A("stat.now"), value: i }),
    /* @__PURE__ */ o(de, { label: A("stat.min"), value: e.min ? ee(e.min.v) + a : "—", note: e.min ? Ce(e.min.t, s) : void 0 }),
    /* @__PURE__ */ o(de, { label: A("stat.max"), value: e.max ? ee(e.max.v) + a : "—", note: e.max ? Ce(e.max.t, s) : void 0 }),
    /* @__PURE__ */ o(de, { label: A("stat.avg"), value: e.avg != null ? ee(e.avg) + a : "—" })
  ] });
}
function Td({ series: t, unit: e, range: n }) {
  const s = t.kind === "timeline" ? t.segments.slice().reverse().slice(0, 60).map((a) => [Ce(a.from, n), a.on ? A("switch.on") : a.on === null ? A("chart.no_connection") : A("switch.off"), "—"]) : t.points.slice().reverse().slice(0, 60).map((a) => [
    t.kind === "bars" && t.bucketMs >= 864e5 ? ct(a.t) : Ce(a.t, n),
    ee(a.v) + (e ? " " + e : ""),
    a.min != null && a.max != null ? ee(a.min) + " … " + ee(a.max) : "—"
  ]), i = t.kind === "line" && t.points.some((a) => a.min != null);
  return /* @__PURE__ */ o("div", { class: "table-wrap", children: /* @__PURE__ */ o("table", { class: "diag", children: /* @__PURE__ */ o("tbody", { children: s.map((a, r) => /* @__PURE__ */ o("tr", { children: [
    /* @__PURE__ */ o("td", { children: a[0] }),
    /* @__PURE__ */ o("td", { class: "strong", children: a[1] }),
    i && /* @__PURE__ */ o("td", { class: "muted", children: a[2] })
  ] }, r)) }) }) });
}
function Od(t) {
  const e = Z(), [n, s] = _(t.entities[0]), [i, a] = _("24h"), [r, c] = _(null), [d, h] = _(""), [f, u] = _([]), [l, p] = _(!1), g = ne(null), w = ro(g).w || 600, y = e.states[n], C = jt(e, n).trim(), m = ja(y);
  H(() => {
    Md(e, t.entities[0]).then((b) => u(b.filter((B) => !!e.states[B])), () => {
    });
  }, [t.entities[0]]), H(() => {
    if (!y) return;
    let b = !0;
    return c(null), h(""), wd(e, y, i).then(
      (B) => {
        b && c(B);
      },
      (B) => {
        b && h(B.message);
      }
    ), () => {
      b = !1;
    };
  }, [n, i, e.status]);
  const M = t.entities.concat(f.filter((b) => t.entities.indexOf(b) === -1)).filter((b) => b === n || Pe(e, b)), D = zd(M.map((b) => Cn(e, b))), O = !y || et(y.state) ? A("sensor.no_data") : m === "timeline" ? y.state === "on" ? A("switch.on") : y.state === "off" ? A("switch.off") : y.state : ee(parseFloat(y.state)) + (C ? " " + C : ""), E = n.split(".")[0];
  return E === "weather" ? /* @__PURE__ */ o(Ue, { title: Cn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: g, children: /* @__PURE__ */ o(za, { card: { id: "detail", type: "weather", title: "", x: 0, y: 0, w: 6, h: 6, items: [{ entity: n }] }, size: { w, h: 560 } }) }) }) : /* @__PURE__ */ o(Ue, { title: Cn(e, n), onClose: t.onClose, wide: !0, children: /* @__PURE__ */ o("div", { class: "detail", ref: g, children: [
    /* @__PURE__ */ o("div", { class: "detail-hero", children: [
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ o("div", { class: "hero-value", children: O }),
        y && /* @__PURE__ */ o("div", { class: "muted small", children: A("detail.updated", { when: Ce(Date.parse(y.last_changed || "") || Date.now(), "7d") }) })
      ] }),
      Sd.indexOf(E) !== -1 && y && /* @__PURE__ */ o(Bd, { entity: n }, n)
    ] }),
    M.length > 1 && /* @__PURE__ */ o("div", { class: "chips", children: M.map((b, B) => {
      const P = e.states[b], z = !P || et(P.state) ? "—" : isNaN(parseFloat(P.state)) ? P.state === "on" ? A("chip.state_on") : P.state === "off" ? A("chip.state_off") : P.state : ee(parseFloat(P.state)) + jt(e, b);
      return /* @__PURE__ */ o("button", { class: "chip" + (b === n ? " active" : ""), onClick: () => s(b), children: [
        /* @__PURE__ */ o("span", { children: D[B] }),
        /* @__PURE__ */ o("b", { children: z })
      ] }, b);
    }) }),
    /* @__PURE__ */ o("div", { class: "detail-tools", children: [
      /* @__PURE__ */ o("div", { class: "seg", children: Ed.map((b) => /* @__PURE__ */ o("button", { class: b === i ? "active" : "", onClick: () => a(b), children: A("range." + b) }, b)) }),
      /* @__PURE__ */ o("button", { class: "chip-btn" + (l ? " on" : ""), onClick: () => p(!l), children: [
        /* @__PURE__ */ o(Vc, { size: 14 }),
        /* @__PURE__ */ o("span", { children: A("detail.table") })
      ] })
    ] }),
    d && /* @__PURE__ */ o("div", { class: "chart-empty c-red", children: A("detail.load_error", { error: d }) }),
    !d && !r && /* @__PURE__ */ o("div", { class: "chart-empty", children: A("common.loading") }),
    r && (l ? /* @__PURE__ */ o(Td, { series: r, unit: C, range: i }) : /* @__PURE__ */ o(nl, { series: r, unit: C, range: i, width: w })),
    r && /* @__PURE__ */ o(Dd, { series: r, sum: Cd(r), unit: C, range: i, current: O }),
    r && r.kind !== "timeline" && i !== "24h" && /* @__PURE__ */ o("div", { class: "muted small detail-foot", children: [
      r.kind === "bars" ? A("detail.foot_bars") : A(i === "7d" ? "detail.foot_hourly" : "detail.foot_daily"),
      " · ",
      A("detail.days", { n: Math.round(La[i] / 864e5) })
    ] })
  ] }) });
}
function Fa(t, e, n) {
  const s = (i) => i.split(",").map((a) => t + a).join(",");
  return s(".accent-text") + "{color:" + e + "}" + s(".light.on .light-icon") + "{background:" + e + "}" + s(".light.on") + "{border-color:" + e + ";background:" + n + "}" + s(".seg .active") + "{background:" + n + ";color:" + e + "}" + s(".room-temp sup") + "{color:" + e + "}";
}
function Pd(t) {
  const e = parseInt(t.slice(1), 16);
  return "rgba(" + (e >> 16) + "," + (e >> 8 & 255) + "," + (e & 255) + ",0.2)";
}
const Hd = Object.keys(Ke).map((t) => Fa(".tint-" + t + " ", Ke[t], Pd(Ke[t]))).join("");
function Qd() {
  const t = Ye(), e = fr(), n = $a(), { settings: s, layout: i, sync: a, homes: r, active: c } = t.state;
  H(() => t.start(), []);
  const d = fi(() => new eo("", () => Promise.resolve("")), []), h = t.card ? t.card.client : t.haClient || d, [f, u] = _(""), l = (S) => {
    const U = r.findIndex((Ee) => Ee.id === c), me = r[(U + S + r.length) % r.length];
    !me || me.id === c || (u(S > 0 ? "next" : "prev"), re(null), t.setActive(me.id));
  }, p = (S) => {
    u(S > 0 ? "next" : "prev"), re(null), t.step(S);
  }, g = t.photoUrls, w = g.length, [y, C] = _(0), m = w ? g[y % w] : "";
  H(() => {
    const S = t.frameClient;
    if (!S || !m || /^(data|blob):/.test(m)) return;
    const U = m.replace(/^https?:\/\/[^/]+/, "");
    zo(S, { photo: decodeURIComponent(U.split("?")[0].split("/").pop() || ""), photo_url: U });
  }, [m, t.frameClient]), H(() => {
    t.frameClient && zo(t.frameClient, { screen: c + "/" + t.state.screen });
  }, [c, t.state.screen, t.frameClient]);
  const [M, D] = _(t.ui.controls), [O, E] = _(t.ui.editing);
  H(() => {
    t.ui.controls = M, t.ui.editing = O;
  }, [M, O]);
  const [b, B] = _(!1), [P, z] = _(""), I = ne(0);
  H(() => t.onCommand((S) => {
    if (S.command === "next_photo") C((U) => U + 1);
    else if (S.command === "show_panel") D(!0);
    else if (S.command === "show_photos")
      D(!1), re(null), z("");
    else if (S.command === "reload") location.reload();
    else if (S.command === "show_screen" && S.screen) {
      const U = S.screen.split("/");
      t.setActive(U[0], U[1]), D(!0);
    } else if (S.command === "show_camera" && S.entity) {
      const U = h.cameraStreamUrl(S.entity);
      if (!U) return;
      z(U), clearTimeout(I.current), I.current = window.setTimeout(() => z(""), (S.duration || 30) * 1e3);
    }
  }), [h]);
  const [oe, re] = _(null), [T, X] = _(null), [te, x] = _(!1), [Q, V] = _(null), [Y, R] = _(!0), [W, q] = _(""), F = Vr(W || void 0), G = oe && i.cards.filter((S) => S.id === oe)[0] || null, ie = a === "local" && !t.haClient;
  H(() => {
    ie && B(!0);
  }, [ie]), H(() => {
    if (w < 2) return;
    const S = setInterval(() => C((U) => (U + 1) % w), s.slideIntervalMs);
    return () => clearInterval(S);
  }, [w, s.slideIntervalMs]), H(() => {
    const S = setTimeout(() => R(!1), 8e3);
    return () => clearTimeout(S);
  }, []);
  const $ = b || !!P || !!T || te || !!Q, Me = $ || !!G, _e = ne(null), At = ne(null), ht = ne(null), k = ne(null);
  H(() => {
    const S = _e.current;
    if (!S) return;
    const U = () => {
      S.scrollTop = 0, S.scrollLeft = 0;
    };
    return S.addEventListener("scroll", U), () => S.removeEventListener("scroll", U);
  }, []);
  const [L, le] = _(!1);
  Zr({ root: _e, controls: At, ambient: ht, soft: k }, M, D, !Me && !L, () => le(!0));
  const pe = (M || !!G) && !$ && !O;
  H(() => {
    if (!pe || !s.idleSec) return;
    let S = 0;
    const U = () => {
      clearTimeout(S), S = window.setTimeout(() => {
        D(!1), re(null), t.goStart();
      }, s.idleSec * 1e3);
    }, me = ["touchstart", "mousedown", "keydown"];
    return me.forEach((Ee) => document.addEventListener(Ee, U)), U(), () => {
      clearTimeout(S), me.forEach((Ee) => document.removeEventListener(Ee, U));
    };
  }, [pe, s.idleSec]);
  const ut = (S) => {
    const U = i.cards.some((ft) => ft.id === S.id), me = ot(S), Ee = U ? i.cards.map((ft) => ft.id === S.id ? me : ft) : i.cards.concat(me);
    t.saveLayout({ ...i, cards: Ie(Ee, me) }), X(null);
  };
  return /* @__PURE__ */ o(xi.Provider, { value: h, children: /* @__PURE__ */ o(ki.Provider, { value: V, children: /* @__PURE__ */ o("div", { class: "root q-" + n, children: [
    /* @__PURE__ */ o("style", { children: Hd + (F ? Fa("", F.accent, F.accentSoft) : "") }),
    /* @__PURE__ */ o("div", { class: "app", ref: _e, lang: e, children: [
      /* @__PURE__ */ o(Gr, { urls: g, index: y % Math.max(w, 1), tone: F, soft: M, softRef: k, onShow: q }),
      /* @__PURE__ */ o(
        Pl,
        {
          visible: !M,
          showHint: Y && !G,
          innerRef: ht,
          onSheet: (S) => re(S.id),
          onConnection: () => B(!0),
          photoThumb: F ? F.thumb : void 0,
          customizing: L,
          onDone: () => le(!1)
        }
      ),
      /* @__PURE__ */ o(
        ad,
        {
          innerRef: At,
          visible: M,
          editing: O,
          onEditing: E,
          onPhotos: () => D(!1),
          onSettings: () => B(!0),
          onCamera: z,
          onEditCard: (S) => X({ card: S, isNew: !1 }),
          homes: r,
          active: c,
          slide: f,
          onSwitchHome: l,
          onStep: p,
          onAddCard: () => x(!0)
        }
      )
    ] }),
    G && /* @__PURE__ */ o(kd, { card: G, tone: F, onCamera: z, onClose: () => re(null) }),
    P && /* @__PURE__ */ o(rd, { url: P, onClose: () => z("") }),
    b && /* @__PURE__ */ o(
      ud,
      {
        onClose: () => B(!1),
        onCustomize: () => {
          B(!1), D(!1), le(!0);
        }
      }
    ),
    te && /* @__PURE__ */ o(fd, { onClose: () => x(!1), onPick: (S) => {
      x(!1), X({ card: S, isNew: !0 });
    } }),
    T && /* @__PURE__ */ o(
      bd,
      {
        card: T.card,
        onSave: ut,
        onDelete: T.isNew ? void 0 : () => {
          t.saveLayout({ ...i, cards: Ie(i.cards.filter((S) => S.id !== T.card.id)) }), X(null);
        },
        onClose: () => X(null)
      }
    ),
    Q && /* @__PURE__ */ o(Od, { entities: Q, onClose: () => V(null) }, Q.join(","))
  ] }) }) });
}
class Ld extends eo {
  constructor() {
    super("", () => Promise.resolve("")), this.hass = null;
  }
  // HA присылает новый hass при каждом изменении любого состояния — просто перерисовываемся.
  setHass(e) {
    const n = !this.hass;
    this.hass = e, sn(e.language), e.states !== this.states && (this.states = e.states, this.loaded = !0, this.status !== "connected" ? this.setStatus("connected") : this.emit()), n && this.loadRegistry();
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
function jd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Mn, Go;
function Fd() {
  return Go || (Go = 1, Mn = {
    webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
    mp4: "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
  }), Mn;
}
var En, Xo;
function Rd() {
  if (Xo) return En;
  Xo = 1;
  const { webm: t, mp4: e } = Fd(), n = () => typeof navigator < "u" && parseFloat(
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
    _addSourceToVideo(r, c, d) {
      var h = document.createElement("source");
      h.src = d, h.type = `video/${c}`, r.appendChild(h);
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
  return En = i, En;
}
var qd = Rd();
const Nd = /* @__PURE__ */ jd(qd);
let Vn = null;
const Ko = new Nd();
function Sn() {
  const t = navigator.wakeLock;
  return !t || document.visibilityState !== "visible" ? Promise.resolve(!1) : t.request("screen").then(
    (e) => (Vn = e, e.addEventListener("release", () => {
      Vn = null;
    }), !0),
    () => !1
  );
}
let $o = !1;
function Vd() {
  if ($o || ($o = !0, /SmartFrame\//.test(navigator.userAgent))) return;
  Sn(), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible" && !Vn && Sn();
  });
  const t = () => {
    document.removeEventListener("touchend", t), document.removeEventListener("click", t), Sn().then((e) => {
      !e && !Ko.isEnabled && Ko.enable().catch(() => {
      });
    });
  };
  document.addEventListener("touchend", t), document.addEventListener("click", t);
}
const Wd = ':host{display:block;position:relative;height:calc(100vh - var(--header-height, 56px));min-height:420px;overflow:hidden;font-family:Inter,Roboto,-apple-system,"Segoe UI",sans-serif;color:#f5f7fb;background:#000;border-radius:var(--ha-card-border-radius,0)}#app{position:absolute;top:0;left:0;right:0;bottom:0}';
class Ud extends HTMLElement {
  constructor() {
    super(...arguments), this.client = new Ld(), this.backend = null, this.config = { type: "custom:photoframe-card" }, this.root = null, this.exitKiosk = null, this.offKiosk = null, this.offIntegration = null;
  }
  // Включить/выключить киоск по текущим настройкам. Фронтенд HA дорисовывается не сразу —
  // поэтому вызывается и при монтировании, и при каждом обновлении hass, пока не получится.
  syncKiosk() {
    const e = this.config.kiosk != null ? this.config.kiosk : !!(this.backend && this.backend.integration && this.backend.config.kiosk), n = this.isConnected && Kl(!!e);
    n && !this.exitKiosk && (this.exitKiosk = nd()), !n && this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null);
  }
  setConfig(e) {
    this.config = e, this.backend && !this.backend.integration && (this.backend.config = e, K.applyCardConfig(e)), this.syncKiosk();
  }
  set hass(e) {
    this.client.setHass(e), this.syncKiosk(), this.backend || (this.backend = new qt(this.client, this.config), K.attachCard(this.backend), Ii(this.client).then((n) => {
      if (!n) return;
      const s = new qt(this.client, n, void 0, !1, !0);
      this.backend = s, K.attachCard(s), this.isConnected && !this.offIntegration && (this.offIntegration = s.watch((i) => K.applyCardConfig(i))), this.syncKiosk();
    })), this.mount();
  }
  connectedCallback() {
    const e = this.backend;
    e && e.integration && !this.offIntegration && (this.offIntegration = e.watch((n) => K.applyCardConfig(n))), this.mount(), this.offKiosk = Xl(() => this.syncKiosk()), this.syncKiosk();
  }
  disconnectedCallback() {
    this.root && ho(null, this.root), this.root = null, this.exitKiosk && (this.exitKiosk(), this.exitKiosk = null), this.offKiosk && (this.offKiosk(), this.offKiosk = null), this.offIntegration && (this.offIntegration(), this.offIntegration = null);
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
    n.textContent = Wd + Za;
    const s = document.createElement("div");
    s.id = "app", e.appendChild(n), e.appendChild(s), this.root = s, ho(/* @__PURE__ */ o(Qd, {}), s), Vd();
  }
}
customElements.get("photoframe-card") || customElements.define("photoframe-card", Ud);
console.info("%c PHOTO-FRAME %c v0.3.1 ", "color:#fff;background:#0891b2;font-weight:700", "color:#0891b2;background:#fff");
Hr();
const Wn = window;
Wn.customCards = Wn.customCards || [];
Wn.customCards.push({
  type: "photoframe-card",
  name: "Smart Frame",
  description: "Photo frame with smart-home controls: photos, clock, weather and customizable cards",
  preview: !1
});
