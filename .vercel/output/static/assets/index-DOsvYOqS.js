import { r as S, j as h } from "./index-BObBo3qA.js";
const gi = S.createContext({});
function Vt(t) {
  const e = S.useRef(null);
  return (e.current === null && (e.current = t()), e.current);
}
const mo = typeof window < "u",
  mn = mo ? S.useLayoutEffect : S.useEffect,
  pn = S.createContext(null);
function gn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function le(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const tt = (t, e, n) => (n > e ? e : n < t ? t : n);
let yn = () => {};
const ct = {},
  yi = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  xi = (t) => typeof t == "object" && t !== null,
  vi = (t) => /^0[^.\s]+$/u.test(t);
function bi(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const $ = (t) => t,
  Kt = (...t) => t.reduce((e, n) => (s) => n(e(s))),
  Ct = (t, e, n) => {
    const s = e - t;
    return s ? (n - t) / s : 1;
  };
class xn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (gn(this.subscriptions, e), () => le(this.subscriptions, e));
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const G = (t) => t * 1e3,
  X = (t) => t / 1e3,
  vn = (t, e) => (e ? t * (1e3 / e) : 0),
  wi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  po = 1e-7,
  go = 12;
function yo(t, e, n, s, i) {
  let o,
    r,
    a = 0;
  do ((r = e + (n - e) / 2), (o = wi(r, s, i) - t), o > 0 ? (n = r) : (e = r));
  while (Math.abs(o) > po && ++a < go);
  return r;
}
function Gt(t, e, n, s) {
  if (t === e && n === s) return $;
  const i = (o) => yo(o, 0, 1, t, n);
  return (o) => (o === 0 || o === 1 ? o : wi(i(o), e, s));
}
const Ti = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  Si = (t) => (e) => 1 - t(1 - e),
  Pi = Gt(0.33, 1.53, 0.69, 0.99),
  bn = Si(Pi),
  ji = Ti(bn),
  Ai = (t) => (t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * bn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
  wn = (t) => 1 - Math.sin(Math.acos(t)),
  Vi = Si(wn),
  Ci = Ti(wn),
  xo = Gt(0.42, 0, 1, 1),
  vo = Gt(0, 0, 0.58, 1),
  Mi = Gt(0.42, 0, 0.58, 1),
  bo = (t) => Array.isArray(t) && typeof t[0] != "number",
  ki = (t) => Array.isArray(t) && typeof t[0] == "number",
  wo = {
    linear: $,
    easeIn: xo,
    easeInOut: Mi,
    easeOut: vo,
    circIn: wn,
    circInOut: Ci,
    circOut: Vi,
    backIn: bn,
    backInOut: ji,
    backOut: Pi,
    anticipate: Ai,
  },
  To = (t) => typeof t == "string",
  Gn = (t) => {
    if (ki(t)) {
      yn(t.length === 4);
      const [e, n, s, i] = t;
      return Gt(e, n, s, i);
    } else if (To(t)) return wo[t];
    return t;
  },
  Yt = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function So(t, e) {
  let n = new Set(),
    s = new Set(),
    i = !1,
    o = !1;
  const r = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(c) {
    (r.has(c) && (u.schedule(c), t()), c(a));
  }
  const u = {
    schedule: (c, d = !1, f = !1) => {
      const p = f && i ? n : s;
      return (d && r.add(c), p.add(c), c);
    },
    cancel: (c) => {
      (s.delete(c), r.delete(c));
    },
    process: (c) => {
      if (((a = c), i)) {
        o = !0;
        return;
      }
      i = !0;
      const d = n;
      ((n = s), (s = d), n.forEach(l), n.clear(), (i = !1), o && ((o = !1), u.process(c)));
    },
  };
  return u;
}
const Po = 40;
function Ei(t, e) {
  let n = !1,
    s = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    r = Yt.reduce((b, T) => ((b[T] = So(o)), b), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: m,
      postRender: p,
    } = r,
    g = () => {
      const b = ct.useManualTiming,
        T = b ? i.timestamp : performance.now();
      ((n = !1),
        b || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(T - i.timestamp, Po), 1)),
        (i.timestamp = T),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        m.process(i),
        p.process(i),
        (i.isProcessing = !1),
        n && e && ((s = !1), t(g)));
    },
    y = () => {
      ((n = !0), (s = !0), i.isProcessing || t(g));
    };
  return {
    schedule: Yt.reduce((b, T) => {
      const A = r[T];
      return ((b[T] = (E, M = !1, j = !1) => (n || y(), A.schedule(E, M, j))), b);
    }, {}),
    cancel: (b) => {
      for (let T = 0; T < Yt.length; T++) r[Yt[T]].cancel(b);
    },
    state: i,
    steps: r,
  };
}
const {
  schedule: V,
  cancel: Y,
  state: B,
  steps: Se,
} = Ei(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $, !0);
let te;
function jo() {
  te = void 0;
}
const U = {
    now: () => (
      te === void 0 &&
        U.set(B.isProcessing || ct.useManualTiming ? B.timestamp : performance.now()),
      te
    ),
    set: (t) => {
      ((te = t), queueMicrotask(jo));
    },
  },
  Di = (t) => (e) => typeof e == "string" && e.startsWith(t),
  Ni = Di("--"),
  Ao = Di("var(--"),
  Tn = (t) => (Ao(t) ? Vo.test(t.split("/*")[0].trim()) : !1),
  Vo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function _n(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const Et = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t },
  zt = { ...Et, transform: (t) => tt(0, 1, t) },
  qt = { ...Et, default: 1 },
  It = (t) => Math.round(t * 1e5) / 1e5,
  Sn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Co(t) {
  return t == null;
}
const Mo =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Pn = (t, e) => (n) =>
    !!(
      (typeof n == "string" && Mo.test(n) && n.startsWith(t)) ||
      (e && !Co(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  Ri = (t, e, n) => (s) => {
    if (typeof s != "string") return s;
    const [i, o, r, a] = s.match(Sn);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(o),
      [n]: parseFloat(r),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  ko = (t) => tt(0, 255, t),
  Pe = { ...Et, transform: (t) => Math.round(ko(t)) },
  pt = {
    test: Pn("rgb", "red"),
    parse: Ri("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
      "rgba(" +
      Pe.transform(t) +
      ", " +
      Pe.transform(e) +
      ", " +
      Pe.transform(n) +
      ", " +
      It(zt.transform(s)) +
      ")",
  };
function Eo(t) {
  let e = "",
    n = "",
    s = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (s = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (s = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (s += s),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(s, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const We = { test: Pn("#"), parse: Eo, transform: pt.transform },
  _t = (t) => ({
    test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  at = _t("deg"),
  rt = _t("%"),
  w = _t("px"),
  Do = _t("vh"),
  No = _t("vw"),
  Xn = { ...rt, parse: (t) => rt.parse(t) / 100, transform: (t) => rt.transform(t * 100) },
  Tt = {
    test: Pn("hsl", "hue"),
    parse: Ri("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      rt.transform(It(e)) +
      ", " +
      rt.transform(It(n)) +
      ", " +
      It(zt.transform(s)) +
      ")",
  },
  R = {
    test: (t) => pt.test(t) || We.test(t) || Tt.test(t),
    parse: (t) => (pt.test(t) ? pt.parse(t) : Tt.test(t) ? Tt.parse(t) : We.parse(t)),
    transform: (t) =>
      typeof t == "string" ? t : t.hasOwnProperty("red") ? pt.transform(t) : Tt.transform(t),
    getAnimatableNone: (t) => {
      const e = R.parse(t);
      return ((e.alpha = 0), R.transform(e));
    },
  },
  Ro =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Lo(t) {
  return (
    isNaN(t) && typeof t == "string" && (t.match(Sn)?.length || 0) + (t.match(Ro)?.length || 0) > 0
  );
}
const Li = "number",
  Bi = "color",
  Bo = "var",
  Io = "var(",
  Yn = "${}",
  Fo =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Mt(t) {
  const e = t.toString(),
    n = [],
    s = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = e
    .replace(
      Fo,
      (l) => (
        R.test(l)
          ? (s.color.push(o), i.push(Bi), n.push(R.parse(l)))
          : l.startsWith(Io)
            ? (s.var.push(o), i.push(Bo), n.push(l))
            : (s.number.push(o), i.push(Li), n.push(parseFloat(l))),
        ++o,
        Yn
      ),
    )
    .split(Yn);
  return { values: n, split: a, indexes: s, types: i };
}
function Oo(t) {
  return Mt(t).values;
}
function Ii({ split: t, types: e }) {
  const n = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < n; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const r = e[o];
        r === Li ? (i += It(s[o])) : r === Bi ? (i += R.transform(s[o])) : (i += s[o]);
      }
    return i;
  };
}
function Wo(t) {
  return Ii(Mt(t));
}
const Uo = (t) => (typeof t == "number" ? 0 : R.test(t) ? R.getAnimatableNone(t) : t),
  zo = (t, e) => (typeof t == "number" ? (e?.trim().endsWith("/") ? t : 0) : Uo(t));
function Ho(t) {
  const e = Mt(t);
  return Ii(e)(e.values.map((s, i) => zo(s, e.split[i])));
}
const Q = { test: Lo, parse: Oo, createTransformer: Wo, getAnimatableNone: Ho };
function je(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
  );
}
function $o({ hue: t, saturation: e, lightness: n, alpha: s }) {
  ((t /= 360), (e /= 100), (n /= 100));
  let i = 0,
    o = 0,
    r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    ((i = je(l, a, t + 1 / 3)), (o = je(l, a, t)), (r = je(l, a, t - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s,
  };
}
function ce(t, e) {
  return (n) => (n > 0 ? e : t);
}
const k = (t, e, n) => t + (e - t) * n,
  Ae = (t, e, n) => {
    const s = t * t,
      i = n * (e * e - s) + s;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Ko = [We, pt, Tt],
  Go = (t) => Ko.find((e) => e.test(t));
function qn(t) {
  const e = Go(t);
  if (!e) return !1;
  let n = e.parse(t);
  return (e === Tt && (n = $o(n)), n);
}
const Zn = (t, e) => {
    const n = qn(t),
      s = qn(e);
    if (!n || !s) return ce(t, e);
    const i = { ...n };
    return (o) => (
      (i.red = Ae(n.red, s.red, o)),
      (i.green = Ae(n.green, s.green, o)),
      (i.blue = Ae(n.blue, s.blue, o)),
      (i.alpha = k(n.alpha, s.alpha, o)),
      pt.transform(i)
    );
  },
  Ue = new Set(["none", "hidden"]);
function _o(t, e) {
  return Ue.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function Xo(t, e) {
  return (n) => k(t, e, n);
}
function jn(t) {
  return typeof t == "number"
    ? Xo
    : typeof t == "string"
      ? Tn(t)
        ? ce
        : R.test(t)
          ? Zn
          : Zo
      : Array.isArray(t)
        ? Fi
        : typeof t == "object"
          ? R.test(t)
            ? Zn
            : Yo
          : ce;
}
function Fi(t, e) {
  const n = [...t],
    s = n.length,
    i = t.map((o, r) => jn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++) n[r] = i[r](o);
    return n;
  };
}
function Yo(t, e) {
  const n = { ...t, ...e },
    s = {};
  for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = jn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s) n[o] = s[o](i);
    return n;
  };
}
function qo(t, e) {
  const n = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i],
      r = t.indexes[o][s[o]],
      a = t.values[r] ?? 0;
    ((n[i] = a), s[o]++);
  }
  return n;
}
const Zo = (t, e) => {
  const n = Q.createTransformer(e),
    s = Mt(t),
    i = Mt(e);
  return s.indexes.var.length === i.indexes.var.length &&
    s.indexes.color.length === i.indexes.color.length &&
    s.indexes.number.length >= i.indexes.number.length
    ? (Ue.has(t) && !i.values.length) || (Ue.has(e) && !s.values.length)
      ? _o(t, e)
      : Kt(Fi(qo(s, i), i.values), n)
    : ce(t, e);
};
function Oi(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number"
    ? k(t, e, n)
    : jn(t)(t, e);
}
const Jo = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: (n = !0) => V.update(e, n),
      stop: () => Y(e),
      now: () => (B.isProcessing ? B.timestamp : U.now()),
    };
  },
  Wi = (t, e, n = 10) => {
    let s = "";
    const i = Math.max(Math.round(e / n), 2);
    for (let o = 0; o < i; o++) s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  ue = 2e4;
function An(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < ue; ) ((e += n), (s = t.next(e)));
  return e >= ue ? 1 / 0 : e;
}
function Qo(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }),
    i = Math.min(An(s), ue);
  return { type: "keyframes", ease: (o) => s.next(i * o).value / e, duration: X(i) };
}
const D = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function ze(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const ta = 12;
function ea(t, e, n) {
  let s = n;
  for (let i = 1; i < ta; i++) s = s - t(s) / e(s);
  return s;
}
const Ve = 0.001;
function na({
  duration: t = D.duration,
  bounce: e = D.bounce,
  velocity: n = D.velocity,
  mass: s = D.mass,
}) {
  let i,
    o,
    r = 1 - e;
  ((r = tt(D.minDamping, D.maxDamping, r)),
    (t = tt(D.minDuration, D.maxDuration, X(t))),
    r < 1
      ? ((i = (u) => {
          const c = u * r,
            d = c * t,
            f = c - n,
            m = ze(u, r),
            p = Math.exp(-d);
          return Ve - (f / m) * p;
        }),
        (o = (u) => {
          const d = u * r * t,
            f = d * n + n,
            m = Math.pow(r, 2) * Math.pow(u, 2) * t,
            p = Math.exp(-d),
            g = ze(Math.pow(u, 2), r);
          return ((-i(u) + Ve > 0 ? -1 : 1) * ((f - m) * p)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * t),
            d = (u - n) * t + 1;
          return -Ve + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * t),
            d = (n - u) * (t * t);
          return c * d;
        })));
  const a = 5 / t,
    l = ea(i, o, a);
  if (((t = G(t)), isNaN(l))) return { stiffness: D.stiffness, damping: D.damping, duration: t };
  {
    const u = Math.pow(l, 2) * s;
    return { stiffness: u, damping: r * 2 * Math.sqrt(s * u), duration: t };
  }
}
const sa = ["duration", "bounce"],
  ia = ["stiffness", "damping", "mass"];
function Jn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function ra(t) {
  let e = {
    velocity: D.velocity,
    stiffness: D.stiffness,
    damping: D.damping,
    mass: D.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Jn(t, ia) && Jn(t, sa))
    if (((e.velocity = 0), t.visualDuration)) {
      const n = t.visualDuration,
        s = (2 * Math.PI) / (n * 1.2),
        i = s * s,
        o = 2 * tt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = { ...e, mass: D.mass, stiffness: i, damping: o };
    } else {
      const n = na({ ...t, velocity: 0 });
      ((e = { ...e, ...n, mass: D.mass }), (e.isResolvedFromDuration = !0));
    }
  return e;
}
function he(t = D.visualDuration, e = D.bounce) {
  const n = typeof t != "object" ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0],
    r = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: m,
    } = ra({ ...n, velocity: -X(n.velocity || 0) }),
    p = f || 0,
    g = u / (2 * Math.sqrt(l * c)),
    y = r - o,
    x = X(Math.sqrt(l / c)),
    v = Math.abs(y) < 5;
  (s || (s = v ? D.restSpeed.granular : D.restSpeed.default),
    i || (i = v ? D.restDelta.granular : D.restDelta.default));
  let b, T, A, E, M, j;
  if (g < 1)
    ((A = ze(x, g)),
      (E = (p + g * x * y) / A),
      (b = (P) => {
        const N = Math.exp(-g * x * P);
        return r - N * (E * Math.sin(A * P) + y * Math.cos(A * P));
      }),
      (M = g * x * E + y * A),
      (j = g * x * y - E * A),
      (T = (P) => Math.exp(-g * x * P) * (M * Math.sin(A * P) + j * Math.cos(A * P))));
  else if (g === 1) {
    b = (N) => r - Math.exp(-x * N) * (y + (p + x * y) * N);
    const P = p + x * y;
    T = (N) => Math.exp(-x * N) * (x * P * N - p);
  } else {
    const P = x * Math.sqrt(g * g - 1);
    b = (et) => {
      const ot = Math.exp(-g * x * et),
        nt = Math.min(P * et, 300);
      return r - (ot * ((p + g * x * y) * Math.sinh(nt) + P * y * Math.cosh(nt))) / P;
    };
    const N = (p + g * x * y) / P,
      H = g * x * N - y * P,
      ht = g * x * y - N * P;
    T = (et) => {
      const ot = Math.exp(-g * x * et),
        nt = Math.min(P * et, 300);
      return ot * (H * Math.sinh(nt) + ht * Math.cosh(nt));
    };
  }
  const I = {
    calculatedDuration: (m && d) || null,
    velocity: (P) => G(T(P)),
    next: (P) => {
      if (!m && g < 1) {
        const H = Math.exp(-g * x * P),
          ht = Math.sin(A * P),
          et = Math.cos(A * P),
          ot = r - H * (E * ht + y * et),
          nt = G(H * (M * ht + j * et));
        return (
          (a.done = Math.abs(nt) <= s && Math.abs(r - ot) <= i),
          (a.value = a.done ? r : ot),
          a
        );
      }
      const N = b(P);
      if (m) a.done = P >= d;
      else {
        const H = G(T(P));
        a.done = Math.abs(H) <= s && Math.abs(r - N) <= i;
      }
      return ((a.value = a.done ? r : N), a);
    },
    toString: () => {
      const P = Math.min(An(I), ue),
        N = Wi((H) => I.next(P * H).value, P, 30);
      return P + "ms " + N;
    },
    toTransition: () => {},
  };
  return I;
}
he.applyToOptions = (t) => {
  const e = Qo(t, 100, he);
  return ((t.ease = e.ease), (t.duration = G(e.duration)), (t.type = "keyframes"), t);
};
const oa = 5;
function Ui(t, e, n) {
  const s = Math.max(e - oa, 0);
  return vn(n - t(s), e - s);
}
function He({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: s = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: r,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = t[0],
    f = { done: !1, value: d },
    m = (j) => (a !== void 0 && j < a) || (l !== void 0 && j > l),
    p = (j) => (a === void 0 ? l : l === void 0 || Math.abs(a - j) < Math.abs(l - j) ? a : l);
  let g = n * e;
  const y = d + g,
    x = r === void 0 ? y : r(y);
  x !== y && (g = x - d);
  const v = (j) => -g * Math.exp(-j / s),
    b = (j) => x + v(j),
    T = (j) => {
      const I = v(j),
        P = b(j);
      ((f.done = Math.abs(I) <= u), (f.value = f.done ? x : P));
    };
  let A, E;
  const M = (j) => {
    m(f.value) &&
      ((A = j),
      (E = he({
        keyframes: [f.value, p(f.value)],
        velocity: Ui(b, j, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    M(0),
    {
      calculatedDuration: null,
      next: (j) => {
        let I = !1;
        return (
          !E && A === void 0 && ((I = !0), T(j), M(j)),
          A !== void 0 && j >= A ? E.next(j - A) : (!I && T(j), f)
        );
      },
    }
  );
}
function aa(t, e, n) {
  const s = [],
    i = n || ct.mix || Oi,
    o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || $ : e;
      a = Kt(l, a);
    }
    s.push(a);
  }
  return s;
}
function Vn(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ((yn(o === e.length), o === 1)) return () => e[0];
  if (o === 2 && e[0] === e[1]) return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const a = aa(e, s, i),
    l = a.length,
    u = (c) => {
      if (r && c < t[0]) return e[0];
      let d = 0;
      if (l > 1) for (; d < t.length - 2 && !(c < t[d + 1]); d++);
      const f = Ct(t[d], t[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(tt(t[0], t[o - 1], c)) : u;
}
function la(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Ct(0, e, s);
    t.push(k(n, 1, i));
  }
}
function zi(t) {
  const e = [0];
  return (la(e, t.length - 1), e);
}
function ca(t, e) {
  return t.map((n) => n * e);
}
function ua(t, e) {
  return t.map(() => e || Mi).splice(0, t.length - 1);
}
function Ft({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = bo(s) ? s.map(Gn) : Gn(s),
    o = { done: !1, value: e[0] },
    r = ca(n && n.length === e.length ? n : zi(e), t),
    a = Vn(r, e, { ease: Array.isArray(i) ? i : ua(e, i) });
  return { calculatedDuration: t, next: (l) => ((o.value = a(l)), (o.done = l >= t), o) };
}
const ha = (t) => t !== null;
function ve(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const o = t.filter(ha),
    a = i < 0 || (e && n !== "loop" && e % 2 === 1) ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const da = { decay: He, inertia: He, tween: Ft, keyframes: Ft, spring: he };
function Hi(t) {
  typeof t.type == "string" && (t.type = da[t.type]);
}
class Cn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const fa = (t) => t / 100;
class de extends Cn {
  constructor(e) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== U.now() && this.tick(U.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = e),
      this.initAnimation(),
      this.play(),
      e.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: e } = this;
    Hi(e);
    const { type: n = Ft, repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || Ft;
    l !== Ft &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = Kt(fa, Oi(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...e, keyframes: a });
    (o === "mirror" &&
      (this.mirroredGenerator = l({ ...e, keyframes: [...a].reverse(), velocity: -r })),
      u.calculatedDuration === null && (u.calculatedDuration = An(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (s + 1) - i),
      (this.generator = u));
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = n);
  }
  tick(e, n = !1) {
    const {
      generator: s,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: r,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: m,
      type: p,
      onUpdate: g,
      finalKeyframe: y,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)),
      n ? (this.currentTime = e) : this.updateTime(e));
    const x = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      v = this.playbackSpeed >= 0 ? x < 0 : x > i;
    ((this.currentTime = Math.max(x, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = i));
    let b = this.currentTime,
      T = s;
    if (d) {
      const j = Math.min(this.currentTime, i) / a;
      let I = Math.floor(j),
        P = j % 1;
      (!P && j >= 1 && (P = 1),
        P === 1 && I--,
        (I = Math.min(I, d + 1)),
        I % 2 && (f === "reverse" ? ((P = 1 - P), m && (P -= m / a)) : f === "mirror" && (T = r)),
        (b = tt(0, 1, P) * a));
    }
    let A;
    (v ? ((this.delayState.value = c[0]), (A = this.delayState)) : (A = T.next(b)),
      o && !v && (A.value = o(A.value)));
    let { done: E } = A;
    !v &&
      l !== null &&
      (E = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const M =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && E));
    return (
      M && p !== He && (A.value = ve(c, this.options, y, this.speed)),
      g && g(A.value),
      M && this.finish(),
      A
    );
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return X(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + X(e);
  }
  get time() {
    return X(this.currentTime);
  }
  set time(e) {
    ((e = G(e)),
      (this.currentTime = e),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = e)
        : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = e), this.tick(e)));
  }
  getGeneratorVelocity() {
    const e = this.currentTime;
    if (e <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(e);
    const n = this.generator.next(e).value;
    return Ui((s) => this.generator.next(s).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    (n && this.driver && this.updateTime(U.now()),
      (this.playbackSpeed = e),
      n && this.driver && (this.time = X(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: e = Jo, startTime: n } = this.options;
    (this.driver || (this.driver = e((i) => this.tick(i))), this.options.onPlay?.());
    const s = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = n ?? s),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"), this.updateTime(U.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return ((this.startTime = 0), this.tick(e, !0));
  }
  attachTimeline(e) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
      this.driver?.stop(),
      e.observe(this)
    );
  }
}
function ma(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const gt = (t) => (t * 180) / Math.PI,
  $e = (t) => {
    const e = gt(Math.atan2(t[1], t[0]));
    return Ke(e);
  },
  pa = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: $e,
    rotateZ: $e,
    skewX: (t) => gt(Math.atan(t[1])),
    skewY: (t) => gt(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  Ke = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  Qn = $e,
  ts = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  es = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  ga = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: ts,
    scaleY: es,
    scale: (t) => (ts(t) + es(t)) / 2,
    rotateX: (t) => Ke(gt(Math.atan2(t[6], t[5]))),
    rotateY: (t) => Ke(gt(Math.atan2(-t[2], t[0]))),
    rotateZ: Qn,
    rotate: Qn,
    skewX: (t) => gt(Math.atan(t[4])),
    skewY: (t) => gt(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function Ge(t) {
  return t.includes("scale") ? 1 : 0;
}
function _e(t, e) {
  if (!t || t === "none") return Ge(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n) ((s = ga), (i = n));
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((s = pa), (i = a));
  }
  if (!i) return Ge(e);
  const o = s[e],
    r = i[1].split(",").map(xa);
  return typeof o == "function" ? o(r) : r[o];
}
const ya = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return _e(n, e);
};
function xa(t) {
  return parseFloat(t.trim());
}
const Dt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Nt = new Set([...Dt, "pathRotation"]),
  ns = (t) => t === Et || t === w,
  va = new Set(["x", "y", "z"]),
  ba = Dt.filter((t) => !va.has(t));
function wa(t) {
  const e = [];
  return (
    ba.forEach((n) => {
      const s = t.getValue(n);
      s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const lt = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0", boxSizing: s }) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0", boxSizing: s }) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: (t, { transform: e }) => _e(e, "x"),
  y: (t, { transform: e }) => _e(e, "y"),
};
lt.translateX = lt.x;
lt.translateY = lt.y;
const yt = new Set();
let Xe = !1,
  Ye = !1,
  qe = !1;
function $i() {
  if (Ye) {
    const t = Array.from(yt).filter((s) => s.needsMeasurement),
      e = new Set(t.map((s) => s.element)),
      n = new Map();
    (e.forEach((s) => {
      const i = wa(s);
      i.length && (n.set(s, i), s.render());
    }),
      t.forEach((s) => s.measureInitialState()),
      e.forEach((s) => {
        s.render();
        const i = n.get(s);
        i &&
          i.forEach(([o, r]) => {
            s.getValue(o)?.set(r);
          });
      }),
      t.forEach((s) => s.measureEndState()),
      t.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      }));
  }
  ((Ye = !1), (Xe = !1), yt.forEach((t) => t.complete(qe)), yt.clear());
}
function Ki() {
  yt.forEach((t) => {
    (t.readKeyframes(), t.needsMeasurement && (Ye = !0));
  });
}
function Ta() {
  ((qe = !0), Ki(), $i(), (qe = !1));
}
class Mn {
  constructor(e, n, s, i, o, r = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = s),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = r));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (yt.add(this), Xe || ((Xe = !0), V.read(Ki), V.resolveKeyframes($i)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    if (e[0] === null) {
      const o = i?.get(),
        r = e[e.length - 1];
      if (o !== void 0) e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      (e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]));
    }
    ma(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
      yt.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (yt.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Sa = (t) => t.startsWith("--");
function Gi(t, e, n) {
  Sa(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
}
const Pa = {};
function kn(t, e) {
  const n = bi(t);
  return () => Pa[e] ?? n();
}
const En = kn(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  _i = kn(() => window.ViewTimeline !== void 0, "viewTimeline"),
  Xi = kn(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Lt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
  ss = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Lt([0, 0.65, 0.55, 1]),
    circOut: Lt([0.55, 0, 1, 0.45]),
    backIn: Lt([0.31, 0.01, 0.66, -0.59]),
    backOut: Lt([0.33, 1.53, 0.69, 0.99]),
  };
function Yi(t, e) {
  if (t)
    return typeof t == "function"
      ? Xi()
        ? Wi(t, e)
        : "ease-out"
      : ki(t)
        ? Lt(t)
        : Array.isArray(t)
          ? t.map((n) => Yi(n, e) || ss.easeOut)
          : ss[t];
}
function ja(
  t,
  e,
  n,
  {
    delay: s = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [e]: n };
  l && (c.offset = l);
  const d = Yi(a, i);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: s,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal",
  };
  return (u && (f.pseudoElement = u), t.animate(c, f));
}
function qi(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Aa({ type: t, ...e }) {
  return qi(t) && Xi()
    ? t.applyToOptions(e)
    : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Zi extends Cn {
  constructor(e) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !e)
    )
      return;
    const {
      element: n,
      name: s,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: r = !1,
      finalKeyframe: a,
      onComplete: l,
    } = e;
    ((this.isPseudoElement = !!o),
      (this.allowFlatten = r),
      (this.options = e),
      yn(typeof e.type != "string"));
    const u = Aa(e);
    ((this.animation = ja(n, s, i, u, o)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const c = ve(i, this.options, a, this.speed);
          (this.updateMotionValue && this.updateMotionValue(c),
            Gi(n, s, c),
            this.animation.cancel());
        }
        (l?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" ||
      e === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return X(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + X(e);
  }
  get time() {
    return X(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = G(e)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, rangeStart: n, rangeEnd: s, observe: i }) {
    return (
      this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      e && En()
        ? ((this.animation.timeline = e),
          n && (this.animation.rangeStart = n),
          s && (this.animation.rangeEnd = s),
          $)
        : i(this)
    );
  }
}
const Ji = { anticipate: Ai, backInOut: ji, circInOut: Ci };
function Va(t) {
  return t in Ji;
}
function Ca(t) {
  typeof t.ease == "string" && Va(t.ease) && (t.ease = Ji[t.ease]);
}
const Ce = 10;
class Ma extends Zi {
  constructor(e) {
    (Ca(e),
      Hi(e),
      super(e),
      e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
      (this.options = e));
  }
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: o, ...r } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new de({ ...r, autoplay: !1 }),
      l = Math.max(Ce, U.now() - this.startTime),
      u = tt(0, Ce, l - Ce),
      c = a.sample(l).value,
      { name: d } = this.options;
    (o && d && Gi(o, d, c), n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u), a.stop());
  }
}
const is = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" && (Q.test(t) || t === "0") && !t.startsWith("url("))
      );
function ka(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function Ea(t, e, n, s) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const o = t[t.length - 1],
    r = is(i, e),
    a = is(o, e);
  return !r || !a ? !1 : ka(t) || ((n === "spring" || qi(n)) && s);
}
function Ze(t) {
  ((t.duration = 0), (t.type = "keyframes"));
}
const Qi = new Set(["opacity", "clipPath", "filter", "transform"]),
  Da = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Na(t) {
  for (let e = 0; e < t.length; e++) if (typeof t[e] == "string" && Da.test(t[e])) return !0;
  return !1;
}
const Ra = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  La = bi(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ba(t) {
  const {
    motionValue: e,
    name: n,
    repeatDelay: s,
    repeatType: i,
    damping: o,
    type: r,
    keyframes: a,
  } = t;
  if (!(e?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: u, transformTemplate: c } = e.owner.getProps();
  return (
    La() &&
    n &&
    (Qi.has(n) || (Ra.has(n) && Na(a))) &&
    (n !== "transform" || !c) &&
    !u &&
    !s &&
    i !== "mirror" &&
    o !== 0 &&
    r !== "inertia"
  );
}
const Ia = 40;
class Fa extends Cn {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: s = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: r = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = U.now()));
    const f = {
        autoplay: e,
        delay: n,
        type: s,
        repeat: i,
        repeatDelay: o,
        repeatType: r,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      m = c?.KeyframeResolver || Mn;
    ((this.keyframeResolver = new m(
      a,
      (p, g, y) => this.onKeyframesResolved(p, g, f, !y),
      l,
      u,
      c,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: c } = s;
    this.resolvedAt = U.now();
    let d = !0;
    Ea(e, o, r, a) ||
      ((d = !1),
      (ct.instantAnimations || !l) && c?.(ve(e, s, n)),
      (e[0] = e[e.length - 1]),
      Ze(s),
      (s.repeat = 0));
    const m = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Ia
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...s,
        keyframes: e,
      },
      p = d && !u && Ba(m),
      g = m.motionValue?.owner?.current;
    let y;
    if (p)
      try {
        y = new Ma({ ...m, element: g });
      } catch {
        y = new de(m);
      }
    else y = new de(m);
    (y.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch($),
      this.pendingTimeline &&
        ((this.stopTimeline = y.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = y));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {});
  }
  get animation() {
    return (this._animation || (this.keyframeResolver?.resume(), Ta()), this._animation);
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(e))
        : (this.pendingTimeline = e),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
  }
}
function tr(t, e, n, s = 0, i = 1) {
  const o = Array.from(t)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(e),
    r = t.size,
    a = (r - 1) * s;
  return typeof n == "function" ? n(o, r) : i === 1 ? o * s : a - o * s;
}
const rs = 30,
  Oa = (t) => !isNaN(parseFloat(t)),
  Ot = { current: void 0 };
class Wa {
  constructor(e, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        const i = U.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner));
  }
  setCurrent(e) {
    ((this.current = e),
      (this.updatedAt = U.now()),
      this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Oa(this.current)));
  }
  setPrevFrameValue(e = this.current) {
    ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new xn());
    const s = this.events[e].add(n);
    return e === "change"
      ? () => {
          (s(),
            V.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    ((this.passiveEffect = e), (this.stopPassiveEffect = n));
  }
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - s));
  }
  jump(e, n = !0) {
    (this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(e));
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return (Ot.current && Ot.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = U.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > rs)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, rs);
    return vn(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function J(t, e) {
  return new Wa(t, e);
}
function er(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...s } = t;
    return { ...e, ...s };
  }
  return t;
}
function Dn(t, e) {
  const n = t?.[e] ?? t?.default ?? t;
  return n !== t ? er(n, t) : n;
}
const Ua = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  za = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ha = { type: "keyframes", duration: 0.8 },
  $a = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ka = (t, { keyframes: e }) =>
    e.length > 2 ? Ha : Nt.has(t) ? (t.startsWith("scale") ? za(e[1]) : Ua) : $a,
  Ga = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function _a(t) {
  for (const e in t) if (!Ga.has(e)) return !0;
  return !1;
}
const Nn =
    (t, e, n, s = {}, i, o) =>
    (r) => {
      const a = Dn(s, t) || {},
        l = a.delay || s.delay || 0;
      let { elapsed: u = 0 } = s;
      u = u - G(l);
      const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (f) => {
          (e.set(f), a.onUpdate && a.onUpdate(f));
        },
        onComplete: () => {
          (r(), a.onComplete && a.onComplete());
        },
        name: t,
        motionValue: e,
        element: o ? void 0 : i,
      };
      (_a(a) || Object.assign(c, Ka(t, c)),
        c.duration && (c.duration = G(c.duration)),
        c.repeatDelay && (c.repeatDelay = G(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from));
      let d = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          (Ze(c), c.delay === 0 && (d = !0)),
        (ct.instantAnimations ||
          ct.skipAnimations ||
          i?.shouldSkipAnimations ||
          a.skipAnimations) &&
          ((d = !0), Ze(c), (c.delay = 0)),
        (c.allowFlatten = !a.type && !a.ease),
        d && !o && e.get() !== void 0)
      ) {
        const f = ve(c.keyframes, a);
        if (f !== void 0) {
          V.update(() => {
            (c.onUpdate(f), c.onComplete());
          });
          return;
        }
      }
      return a.isSync ? new de(c) : new Fa(c);
    },
  Xa = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Ya(t) {
  const e = Xa.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function nr(t, e, n = 1) {
  const [s, i] = Ya(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return yi(r) ? parseFloat(r) : r;
  }
  return Tn(i) ? nr(i, e, n + 1) : i;
}
function os(t) {
  const e = [{}, {}];
  return (
    t?.values.forEach((n, s) => {
      ((e[0][s] = n.get()), (e[1][s] = n.getVelocity()));
    }),
    e
  );
}
function Rn(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = os(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if ((typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function")) {
    const [i, o] = os(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function xt(t, e, n) {
  const s = t.getProps();
  return Rn(s, e, n !== void 0 ? n : s.custom, t);
}
const sr = new Set(["width", "height", "top", "left", "right", "bottom", ...Dt]),
  Je = (t) => Array.isArray(t);
function qa(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, J(n));
}
function Za(t) {
  return Je(t) ? t[t.length - 1] || 0 : t;
}
function Ja(t, e) {
  const n = xt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = Za(o[r]);
    qa(t, r, a);
  }
}
const O = (t) => !!(t && t.getVelocity);
function Qa(t) {
  return !!(O(t) && t.add);
}
function Qe(t, e) {
  const n = t.getValue("willChange");
  if (Qa(n)) return n.add(e);
  if (!n && ct.WillChange) {
    const s = new ct.WillChange("auto");
    (t.addValue("willChange", s), s.add(e));
  }
}
function Ln(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const tl = "framerAppearId",
  ir = "data-" + Ln(tl);
function rr(t) {
  return t.props[ir];
}
function el({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return ((e[n] = !1), s);
}
function or(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o, transitionEnd: r, ...a } = e;
  const l = t.getDefaultTransition();
  o = o ? er(o, l) : l;
  const u = o?.reduceMotion,
    c = o?.skipAnimations;
  s && (o = s);
  const d = [],
    f = i && t.animationState && t.animationState.getState()[i],
    m = o?.path;
  m && m.animateVisualElement(t, a, o, n, d);
  for (const p in a) {
    const g = t.getValue(p, t.latestValues[p] ?? null),
      y = a[p];
    if (y === void 0 || (f && el(f, p))) continue;
    const x = { delay: n, ...Dn(o || {}, p) };
    c && (x.skipAnimations = !0);
    const v = g.get();
    if (v !== void 0 && !g.isAnimating() && !Array.isArray(y) && y === v && !x.velocity) {
      V.update(() => g.set(y));
      continue;
    }
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const E = rr(t);
      if (E) {
        const M = window.MotionHandoffAnimation(E, p, V);
        M !== null && ((x.startTime = M), (b = !0));
      }
    }
    Qe(t, p);
    const T = u ?? t.shouldReduceMotion;
    g.start(Nn(p, g, y, T && sr.has(p) ? { type: !1 } : x, t, b));
    const A = g.animation;
    A && d.push(A);
  }
  if (r) {
    const p = () =>
      V.update(() => {
        r && Ja(t, r);
      });
    d.length ? Promise.all(d).then(p) : p();
  }
  return d;
}
function tn(t, e, n = {}) {
  const s = xt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(or(t, s, n)) : () => Promise.resolve(),
    r =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = i;
            return nl(t, e, l, u, c, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => u());
  } else return Promise.all([o(), r(n.delay)]);
}
function nl(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren)
    (l.notify("AnimationStart", e),
      a.push(
        tn(l, e, {
          ...r,
          delay: n + (typeof s == "function" ? 0 : s) + tr(t.variantChildren, l, s, i, o),
        }).then(() => l.notify("AnimationComplete", e)),
      ));
  return Promise.all(a);
}
function sl(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => tn(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = tn(t, e, n);
  else {
    const i = typeof e == "function" ? xt(t, e, n.custom) : e;
    s = Promise.all(or(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const il = { test: (t) => t === "auto", parse: (t) => t },
  ar = (t) => (e) => e.test(t),
  lr = [Et, w, rt, at, No, Do, il],
  as = (t) => lr.find(ar(t));
function rl(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || vi(t) : !0;
}
const ol = new Set(["brightness", "contrast", "saturate", "opacity"]);
function al(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(Sn) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let o = ol.has(e) ? 1 : 0;
  return (s !== n && (o *= 100), e + "(" + o + i + ")");
}
const ll = /\b([a-z-]*)\(.*?\)/gu,
  en = {
    ...Q,
    getAnimatableNone: (t) => {
      const e = t.match(ll);
      return e ? e.map(al).join(" ") : t;
    },
  },
  nn = {
    ...Q,
    getAnimatableNone: (t) => {
      const e = Q.parse(t);
      return Q.createTransformer(t)(
        e.map((s) => (typeof s == "number" ? 0 : typeof s == "object" ? { ...s, alpha: 1 } : s)),
      );
    },
  },
  ls = { ...Et, transform: Math.round },
  cl = {
    rotate: at,
    pathRotation: at,
    rotateX: at,
    rotateY: at,
    rotateZ: at,
    scale: qt,
    scaleX: qt,
    scaleY: qt,
    scaleZ: qt,
    skew: at,
    skewX: at,
    skewY: at,
    distance: w,
    translateX: w,
    translateY: w,
    translateZ: w,
    x: w,
    y: w,
    z: w,
    perspective: w,
    transformPerspective: w,
    opacity: zt,
    originX: Xn,
    originY: Xn,
    originZ: w,
  },
  fe = {
    borderWidth: w,
    borderTopWidth: w,
    borderRightWidth: w,
    borderBottomWidth: w,
    borderLeftWidth: w,
    borderRadius: w,
    borderTopLeftRadius: w,
    borderTopRightRadius: w,
    borderBottomRightRadius: w,
    borderBottomLeftRadius: w,
    width: w,
    maxWidth: w,
    height: w,
    maxHeight: w,
    top: w,
    right: w,
    bottom: w,
    left: w,
    inset: w,
    insetBlock: w,
    insetBlockStart: w,
    insetBlockEnd: w,
    insetInline: w,
    insetInlineStart: w,
    insetInlineEnd: w,
    padding: w,
    paddingTop: w,
    paddingRight: w,
    paddingBottom: w,
    paddingLeft: w,
    paddingBlock: w,
    paddingBlockStart: w,
    paddingBlockEnd: w,
    paddingInline: w,
    paddingInlineStart: w,
    paddingInlineEnd: w,
    margin: w,
    marginTop: w,
    marginRight: w,
    marginBottom: w,
    marginLeft: w,
    marginBlock: w,
    marginBlockStart: w,
    marginBlockEnd: w,
    marginInline: w,
    marginInlineStart: w,
    marginInlineEnd: w,
    fontSize: w,
    backgroundPositionX: w,
    backgroundPositionY: w,
    ...cl,
    zIndex: ls,
    fillOpacity: zt,
    strokeOpacity: zt,
    numOctaves: ls,
  },
  ul = {
    ...fe,
    color: R,
    backgroundColor: R,
    outlineColor: R,
    fill: R,
    stroke: R,
    borderColor: R,
    borderTopColor: R,
    borderRightColor: R,
    borderBottomColor: R,
    borderLeftColor: R,
    filter: en,
    WebkitFilter: en,
    mask: nn,
    WebkitMask: nn,
  },
  cr = (t) => ul[t],
  hl = new Set([en, nn]);
function ur(t, e) {
  let n = cr(t);
  return (hl.has(n) || (n = Q), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0);
}
const dl = new Set(["auto", "none", "0"]);
function fl(t, e, n) {
  let s = 0,
    i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    (typeof o == "string" && !dl.has(o) && Mt(o).values.length && (i = t[s]), s++);
  }
  if (i && n) for (const o of e) t[o] = ur(n, i);
}
class ml extends Mn {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < e.length; c++) {
      let d = e[c];
      if (typeof d == "string" && ((d = d.trim()), Tn(d))) {
        const f = nr(d, n.current);
        (f !== void 0 && (e[c] = f), c === e.length - 1 && (this.finalKeyframe = d));
      }
    }
    if ((this.resolveNoneKeyframes(), !sr.has(s) || e.length !== 2)) return;
    const [i, o] = e,
      r = as(i),
      a = as(o),
      l = _n(i),
      u = _n(o);
    if (l !== u && lt[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (r !== a)
      if (ns(r) && ns(a))
        for (let c = 0; c < e.length; c++) {
          const d = e[c];
          typeof d == "string" && (e[c] = parseFloat(d));
        }
      else lt[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      s = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || rl(e[i])) && s.push(i);
    s.length && fl(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    (s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = lt[s](e.measureViewportBox(), window.getComputedStyle(e.current))),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      r = s[o];
    ((s[o] = lt[n](e.measureViewportBox(), window.getComputedStyle(e.current))),
      r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([a, l]) => {
          e.getValue(a).set(l);
        }),
      this.resolveNoneKeyframes());
  }
}
function hr(t, e, n) {
  if (t == null) return [];
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    const i = document.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t).filter((s) => s != null);
}
const sn = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
function dr(t) {
  return xi(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: kt, cancel: fr } = Ei(queueMicrotask, !1),
  Z = { x: !1, y: !1 };
function mr() {
  return Z.x || Z.y;
}
function pl(t) {
  return t === "x" || t === "y"
    ? Z[t]
      ? null
      : ((Z[t] = !0),
        () => {
          Z[t] = !1;
        })
    : Z.x || Z.y
      ? null
      : ((Z.x = Z.y = !0),
        () => {
          Z.x = Z.y = !1;
        });
}
function pr(t, e) {
  const n = hr(t),
    s = new AbortController(),
    i = { passive: !0, ...e, signal: s.signal };
  return [n, i, () => s.abort()];
}
function gl(t) {
  return !(t.pointerType === "touch" || mr());
}
function yl(t, e, n = {}) {
  const [s, i, o] = pr(t, n);
  return (
    s.forEach((r) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          r.removeEventListener("pointerleave", p);
        },
        d = (y) => {
          (u && (u(y), (u = void 0)), c());
        },
        f = (y) => {
          ((a = !1),
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && ((l = !1), d(y)));
        },
        m = () => {
          ((a = !0),
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i));
        },
        p = (y) => {
          if (y.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            d(y);
          }
        },
        g = (y) => {
          if (!gl(y)) return;
          l = !1;
          const x = e(r, y);
          typeof x == "function" && ((u = x), r.addEventListener("pointerleave", p, i));
        };
      (r.addEventListener("pointerenter", g, i), r.addEventListener("pointerdown", m, i));
    }),
    o
  );
}
const gr = (t, e) => (e ? (t === e ? !0 : gr(t, e.parentElement)) : !1),
  Bn = (t) =>
    t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
  xl = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function vl(t) {
  return xl.has(t.tagName) || t.isContentEditable === !0;
}
const bl = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function wl(t) {
  return bl.has(t.tagName) || t.isContentEditable === !0;
}
const ee = new WeakSet();
function cs(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Me(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Tl = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const s = cs(() => {
    if (ee.has(n)) return;
    Me(n, "down");
    const i = cs(() => {
        Me(n, "up");
      }),
      o = () => Me(n, "cancel");
    (n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e));
  });
  (n.addEventListener("keydown", s, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", s), e));
};
function us(t) {
  return Bn(t) && !mr();
}
const hs = new WeakSet();
function Sl(t, e, n = {}) {
  const [s, i, o] = pr(t, n),
    r = (a) => {
      const l = a.currentTarget;
      if (!us(a) || hs.has(a)) return;
      (ee.add(l), n.stopPropagation && hs.add(a));
      const u = e(l, a),
        c = (m, p) => {
          (window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            ee.has(l) && ee.delete(l),
            us(m) && typeof u == "function" && u(m, { success: p }));
        },
        d = (m) => {
          c(m, l === window || l === document || n.useGlobalTarget || gr(l, m.target));
        },
        f = (m) => {
          c(m, !1);
        };
      (window.addEventListener("pointerup", d, i), window.addEventListener("pointercancel", f, i));
    };
  return (
    s.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i),
        dr(a) &&
          (a.addEventListener("focus", (u) => Tl(u, i)),
          !vl(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    o
  );
}
function In(t) {
  return xi(t) && "ownerSVGElement" in t;
}
const ne = new WeakMap();
let se;
const yr = (t, e, n) => (s, i) =>
    i && i[0] ? i[0][t + "Size"] : In(s) && "getBBox" in s ? s.getBBox()[e] : s[n],
  Pl = yr("inline", "width", "offsetWidth"),
  jl = yr("block", "height", "offsetHeight");
function Al({ target: t, borderBoxSize: e }) {
  ne.get(t)?.forEach((n) => {
    n(t, {
      get width() {
        return Pl(t, e);
      },
      get height() {
        return jl(t, e);
      },
    });
  });
}
function Vl(t) {
  t.forEach(Al);
}
function Cl() {
  typeof ResizeObserver > "u" || (se = new ResizeObserver(Vl));
}
function Ml(t, e) {
  se || Cl();
  const n = hr(t);
  return (
    n.forEach((s) => {
      let i = ne.get(s);
      (i || ((i = new Set()), ne.set(s, i)), i.add(e), se?.observe(s));
    }),
    () => {
      n.forEach((s) => {
        const i = ne.get(s);
        (i?.delete(e), i?.size || se?.unobserve(s));
      });
    }
  );
}
const ie = new Set();
let St;
function kl() {
  ((St = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    ie.forEach((e) => e(t));
  }),
    window.addEventListener("resize", St));
}
function El(t) {
  return (
    ie.add(t),
    St || kl(),
    () => {
      (ie.delete(t),
        !ie.size &&
          typeof St == "function" &&
          (window.removeEventListener("resize", St), (St = void 0)));
    }
  );
}
function rn(t, e) {
  return typeof t == "function" ? El(t) : Ml(t, e);
}
function xr(t, e) {
  let n;
  const s = () => {
    const { currentTime: i } = e,
      r = (i === null ? 0 : i.value) / 100;
    (n !== r && t(r), (n = r));
  };
  return (V.preUpdate(s, !0), () => Y(s));
}
function Dl(t) {
  return In(t) && t.tagName === "svg";
}
function Nl(...t) {
  const e = !Array.isArray(t[0]),
    n = e ? 0 : -1,
    s = t[0 + n],
    i = t[1 + n],
    o = t[2 + n],
    r = t[3 + n],
    a = Vn(i, o, r);
  return e ? a(s) : a;
}
const Rl = [...lr, R, Q],
  Ll = (t) => Rl.find(ar(t)),
  ds = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Pt = () => ({ x: ds(), y: ds() }),
  fs = () => ({ min: 0, max: 0 }),
  L = () => ({ x: fs(), y: fs() }),
  Bl = new WeakMap();
function be(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Ht(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Fn = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  On = ["initial", ...Fn];
function we(t) {
  return be(t.animate) || On.some((e) => Ht(t[e]));
}
function vr(t) {
  return !!(we(t) || t.variants);
}
function Il(t, e, n) {
  for (const s in e) {
    const i = e[s],
      o = n[s];
    if (O(i)) t.addValue(s, i);
    else if (O(o)) t.addValue(s, J(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, J(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const on = { current: null },
  br = { current: !1 },
  Fl = typeof window < "u";
function Ol() {
  if (((br.current = !0), !!Fl))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (on.current = t.matches);
      (t.addEventListener("change", e), e());
    } else on.current = !1;
}
const ms = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let me = {};
function wr(t) {
  me = t;
}
function Wl() {
  return me;
}
class Ul {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: s,
      reducedMotionConfig: i,
      skipAnimations: o,
      blockInitialAnimation: r,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Mn),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const m = U.now();
        this.renderScheduledAt < m && ((this.renderScheduledAt = m), V.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = a;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = s),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = o),
      (this.options = l),
      (this.blockInitialAnimation = !!r),
      (this.isControllingVariants = we(n)),
      (this.isVariantNode = vr(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current)));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const m in f) {
      const p = f[m];
      u[m] !== void 0 && O(p) && p.set(u[m]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        (this.values.get(n)?.jump(this.initialValues[n]),
          (this.latestValues[n] = this.initialValues[n]));
    ((this.current = e),
      Bl.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (br.current || Ol(), (this.shouldReduceMotion = on.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      Y(this.notifyUpdate),
      Y(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  addChild(e) {
    (this.children.add(e),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(e));
  }
  removeChild(e) {
    (this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e));
  }
  bindToMotionValue(e, n) {
    if (
      (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
      n.accelerate && Qi.has(e) && this.current instanceof HTMLElement)
    ) {
      const { factory: r, keyframes: a, times: l, ease: u, duration: c } = n.accelerate,
        d = new Zi({
          element: this.current,
          name: e,
          keyframes: a,
          times: l,
          ease: u,
          duration: G(c),
        }),
        f = r(d);
      this.valueSubscriptions.set(e, () => {
        (f(), d.cancel());
      });
      return;
    }
    const s = Nt.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (r) => {
      ((this.latestValues[e] = r),
        this.props.onUpdate && V.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let o;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, e, n)),
      this.valueSubscriptions.set(e, () => {
        (i(), o && o());
      }));
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in me) {
      const n = me[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (
        (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : L();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    ((e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let s = 0; s < ms.length; s++) {
      const i = ms[s];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    ((this.prevMotionValues = Il(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e));
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s &&
      (s && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    (n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState));
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return (
      s === void 0 &&
        n !== void 0 &&
        ((s = J(n === null ? void 0 : n, { owner: this })), this.addValue(e, s)),
      s
    );
  }
  readValue(e, n) {
    let s =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (this.getBaseTargetFromProps(this.props, e) ??
          this.readValueFromInstance(this.current, e, this.options));
    return (
      s != null &&
        (typeof s == "string" && (yi(s) || vi(s))
          ? (s = parseFloat(s))
          : !Ll(s) && Q.test(n) && (s = ur(e, n)),
        this.setBaseTarget(e, O(s) ? s.get() : s)),
      O(s) ? s.get() : s
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const o = Rn(this.props, n, this.presenceContext?.custom);
      o && (s = o[e]);
    }
    if (n && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !O(i)
      ? i
      : this.initialValues[e] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return (this.events[e] || (this.events[e] = new xn()), this.events[e].add(n));
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    kt.render(this.render);
  }
}
class Tr extends Ul {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = ml));
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    const s = e.style;
    return s ? s[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    (delete n[e], delete s[e]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    O(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class ut {
  constructor(e) {
    ((this.isMounted = !1), (this.node = e));
  }
  update() {}
}
function Sr({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function zl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Hl(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function ke(t) {
  return t === void 0 || t === 1;
}
function an({ scale: t, scaleX: e, scaleY: n }) {
  return !ke(t) || !ke(e) || !ke(n);
}
function mt(t) {
  return an(t) || Pr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Pr(t) {
  return ps(t.x) || ps(t.y);
}
function ps(t) {
  return t && t !== "0%";
}
function pe(t, e, n) {
  const s = t - n,
    i = e * s;
  return n + i;
}
function gs(t, e, n, s, i) {
  return (i !== void 0 && (t = pe(t, i, s)), pe(t, n, s) + e);
}
function ln(t, e = 0, n = 1, s, i) {
  ((t.min = gs(t.min, e, n, s, i)), (t.max = gs(t.max, e, n, s, i)));
}
function jr(t, { x: e, y: n }) {
  (ln(t.x, e.translate, e.scale, e.originPoint), ln(t.y, n.translate, n.scale, n.originPoint));
}
const ys = 0.999999999999,
  xs = 1.0000000000001;
function $l(t, e, n, s = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (r = o.projectionDelta));
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (s &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        (it(t.x, -o.scroll.offset.x), it(t.y, -o.scroll.offset.y)),
      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), jr(t, r)),
      s && mt(o.latestValues) && re(t, o.latestValues, o.layout?.layoutBox));
  }
  (e.x < xs && e.x > ys && (e.x = 1), e.y < xs && e.y > ys && (e.y = 1));
}
function it(t, e) {
  ((t.min += e), (t.max += e));
}
function vs(t, e, n, s, i = 0.5) {
  const o = k(t.min, t.max, i);
  ln(t, e, n, o, s);
}
function bs(t, e) {
  return typeof t == "string" ? (parseFloat(t) / 100) * (e.max - e.min) : t;
}
function re(t, e, n) {
  const s = n ?? t;
  (vs(t.x, bs(e.x, s.x), e.scaleX, e.scale, e.originX),
    vs(t.y, bs(e.y, s.y), e.scaleY, e.scale, e.originY));
}
function Ar(t, e) {
  return Sr(Hl(t.getBoundingClientRect(), e));
}
function Kl(t, e, n) {
  const s = Ar(t, n),
    { scroll: i } = e;
  return (i && (it(s.x, i.offset.x), it(s.y, i.offset.y)), s);
}
const Gl = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  _l = Dt.length;
function Xl(t, e, n) {
  let s = "",
    i = !0;
  for (let r = 0; r < _l; r++) {
    const a = Dt[r],
      l = t[a];
    if (l === void 0) continue;
    let u = !0;
    if (typeof l == "number") u = l === (a.startsWith("scale") ? 1 : 0);
    else {
      const c = parseFloat(l);
      u = a.startsWith("scale") ? c === 1 : c === 0;
    }
    if (!u || n) {
      const c = sn(l, fe[a]);
      if (!u) {
        i = !1;
        const d = Gl[a] || a;
        s += `${d}(${c}) `;
      }
      n && (e[a] = c);
    }
  }
  const o = t.pathRotation;
  return (
    o && ((i = !1), (s += `rotate(${sn(o, fe.pathRotation)}) `)),
    (s = s.trim()),
    n ? (s = n(e, i ? "" : s)) : i && (s = "none"),
    s
  );
}
function Wn(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1,
    a = !1;
  for (const l in e) {
    const u = e[l];
    if (Nt.has(l)) {
      r = !0;
      continue;
    } else if (Ni(l)) {
      i[l] = u;
      continue;
    } else {
      const c = sn(u, fe[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (s[l] = c);
    }
  }
  if (
    (e.transform ||
      (r || n ? (s.transform = Xl(e, t.transform, n)) : s.transform && (s.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Vr(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e) o[r] = e[r];
  i?.applyProjectionStyles(o, s);
  for (r in n) o.setProperty(r, n[r]);
}
function ws(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const Rt = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (w.test(t)) t = parseFloat(t);
        else return t;
      const n = ws(t, e.target.x),
        s = ws(t, e.target.y);
      return `${n}% ${s}%`;
    },
  },
  Yl = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const s = t,
        i = Q.parse(t);
      if (i.length > 5) return s;
      const o = Q.createTransformer(t),
        r = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      ((i[0 + r] /= a), (i[1 + r] /= l));
      const u = k(a, l, 0.5);
      return (
        typeof i[2 + r] == "number" && (i[2 + r] /= u),
        typeof i[3 + r] == "number" && (i[3 + r] /= u),
        o(i)
      );
    },
  },
  cn = {
    borderRadius: {
      ...Rt,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Rt,
    borderTopRightRadius: Rt,
    borderBottomLeftRadius: Rt,
    borderBottomRightRadius: Rt,
    boxShadow: Yl,
  };
function Cr(t, { layout: e, layoutId: n }) {
  return (
    Nt.has(t) || t.startsWith("origin") || ((e || n !== void 0) && (!!cn[t] || t === "opacity"))
  );
}
function Un(t, e, n) {
  const s = t.style,
    i = e?.style,
    o = {};
  if (!s) return o;
  for (const r in s)
    (O(s[r]) || (i && O(i[r])) || Cr(r, t) || n?.getValue(r)?.liveStyle !== void 0) &&
      (o[r] = s[r]);
  return o;
}
function ql(t) {
  return window.getComputedStyle(t);
}
class Zl extends Tr {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Vr));
  }
  readValueFromInstance(e, n) {
    if (Nt.has(n)) return this.projection?.isProjecting ? Ge(n) : ya(e, n);
    {
      const s = ql(e),
        i = (Ni(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ar(e, n);
  }
  build(e, n, s) {
    Wn(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Un(e, n, s);
  }
}
const Jl = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Ql = { offset: "strokeDashoffset", array: "strokeDasharray" };
function tc(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Jl : Ql;
  ((t[o.offset] = `${-s}`), (t[o.array] = `${e} ${n}`));
}
const ec = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Mr(
  t,
  { attrX: e, attrY: n, attrScale: s, pathLength: i, pathSpacing: o = 1, pathOffset: r = 0, ...a },
  l,
  u,
  c,
) {
  if ((Wn(t, a, u), l)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  ((t.attrs = t.style), (t.style = {}));
  const { attrs: d, style: f } = t;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"), delete d.transformOrigin),
    f.transform && ((f.transformBox = c?.transformBox ?? "fill-box"), delete d.transformBox));
  for (const m of ec) d[m] !== void 0 && ((f[m] = d[m]), delete d[m]);
  (e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    s !== void 0 && (d.scale = s),
    i !== void 0 && tc(d, i, o, r, !1));
}
const kr = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Er = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function nc(t, e, n, s) {
  Vr(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(kr.has(i) ? i : Ln(i), e.attrs[i]);
}
function Dr(t, e, n) {
  const s = Un(t, e, n);
  for (const i in t)
    if (O(t[i]) || O(e[i])) {
      const o = Dt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
class sc extends Tr {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = L));
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Nt.has(n)) {
      const s = cr(n);
      return (s && s.default) || 0;
    }
    return ((n = kr.has(n) ? n : Ln(n)), e.getAttribute(n));
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Dr(e, n, s);
  }
  build(e, n, s) {
    Mr(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    nc(e, n, s, i);
  }
  mount(e) {
    ((this.isSVGTag = Er(e.tagName)), super.mount(e));
  }
}
const ic = On.length;
function Nr(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Nr(t.parent) || {} : {};
    return (t.props.initial !== void 0 && (n.initial = t.props.initial), n);
  }
  const e = {};
  for (let n = 0; n < ic; n++) {
    const s = On[n],
      i = t.props[s];
    (Ht(i) || i === !1) && (e[s] = i);
  }
  return e;
}
function Rr(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
  return !0;
}
const rc = [...Fn].reverse(),
  oc = Fn.length;
function ac(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => sl(t, n, s)));
}
function lc(t) {
  let e = ac(t),
    n = Ts(),
    s = !0,
    i = !1;
  const o = (u) => (c, d) => {
    const f = xt(t, d, u === "exit" ? t.presenceContext?.custom : void 0);
    if (f) {
      const { transition: m, transitionEnd: p, ...g } = f;
      c = { ...c, ...g, ...p };
    }
    return c;
  };
  function r(u) {
    e = u(t);
  }
  function a(u) {
    const { props: c } = t,
      d = Nr(t.parent) || {},
      f = [],
      m = new Set();
    let p = {},
      g = 1 / 0;
    for (let x = 0; x < oc; x++) {
      const v = rc[x],
        b = n[v],
        T = c[v] !== void 0 ? c[v] : d[v],
        A = Ht(T),
        E = v === u ? b.isActive : null;
      E === !1 && (g = x);
      let M = T === d[v] && T !== c[v] && A;
      if (
        (M && (s || i) && t.manuallyAnimateOnMount && (M = !1),
        (b.protectedKeys = { ...p }),
        (!b.isActive && E === null) || (!T && !b.prevProp) || be(T) || typeof T == "boolean")
      )
        continue;
      if (v === "exit" && b.isActive && E !== !0) {
        b.prevResolvedValues && (p = { ...p, ...b.prevResolvedValues });
        continue;
      }
      const j = cc(b.prevProp, T);
      let I = j || (v === u && b.isActive && !M && A) || (x > g && A),
        P = !1;
      const N = Array.isArray(T) ? T : [T];
      let H = N.reduce(o(v), {});
      E === !1 && (H = {});
      const { prevResolvedValues: ht = {} } = b,
        et = { ...ht, ...H },
        ot = (F) => {
          ((I = !0), m.has(F) && ((P = !0), m.delete(F)), (b.needsAnimating[F] = !0));
          const _ = t.getValue(F);
          _ && (_.liveStyle = !1);
        };
      for (const F in et) {
        const _ = H[F],
          dt = ht[F];
        if (p.hasOwnProperty(F)) continue;
        let vt = !1;
        (Je(_) && Je(dt) ? (vt = !Rr(_, dt) || j) : (vt = _ !== dt),
          vt
            ? _ != null
              ? ot(F)
              : m.add(F)
            : _ !== void 0 && m.has(F)
              ? ot(F)
              : (b.protectedKeys[F] = !0));
      }
      ((b.prevProp = T),
        (b.prevResolvedValues = H),
        b.isActive && (p = { ...p, ...H }),
        (s || i) && t.blockInitialAnimation && (I = !1));
      const nt = M && j;
      I &&
        (!nt || P) &&
        f.push(
          ...N.map((F) => {
            const _ = { type: v };
            if (typeof F == "string" && (s || i) && !nt && t.manuallyAnimateOnMount && t.parent) {
              const { parent: dt } = t,
                vt = xt(dt, F);
              if (dt.enteringChildren && vt) {
                const { delayChildren: fo } = vt.transition || {};
                _.delay = tr(dt.enteringChildren, t, fo);
              }
            }
            return { animation: F, options: _ };
          }),
        );
    }
    if (m.size) {
      const x = {};
      if (typeof c.initial != "boolean") {
        const v = xt(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        v && v.transition && (x.transition = v.transition);
      }
      (m.forEach((v) => {
        const b = t.getBaseTarget(v),
          T = t.getValue(v);
        (T && (T.liveStyle = !0), (x[v] = b ?? null));
      }),
        f.push({ animation: x }));
    }
    let y = !!f.length;
    return (
      s && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (y = !1),
      (s = !1),
      (i = !1),
      y ? e(f) : Promise.resolve()
    );
  }
  function l(u, c) {
    if (n[u].isActive === c) return Promise.resolve();
    (t.variantChildren?.forEach((f) => f.animationState?.setActive(u, c)), (n[u].isActive = c));
    const d = a(u);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      ((n = Ts()), (i = !0));
    },
  };
}
function cc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Rr(e, t) : !1;
}
function ft(t = !1) {
  return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Ts() {
  return {
    animate: ft(!0),
    whileInView: ft(),
    whileHover: ft(),
    whileTap: ft(),
    whileDrag: ft(),
    whileFocus: ft(),
    exit: ft(),
  };
}
function un(t, e) {
  ((t.min = e.min), (t.max = e.max));
}
function q(t, e) {
  (un(t.x, e.x), un(t.y, e.y));
}
function Ss(t, e) {
  ((t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin));
}
const Lr = 1e-4,
  uc = 1 - Lr,
  hc = 1 + Lr,
  Br = 0.01,
  dc = 0 - Br,
  fc = 0 + Br;
function z(t) {
  return t.max - t.min;
}
function mc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Ps(t, e, n, s = 0.5) {
  ((t.origin = s),
    (t.originPoint = k(e.min, e.max, t.origin)),
    (t.scale = z(n) / z(e)),
    (t.translate = k(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= uc && t.scale <= hc) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= dc && t.translate <= fc) || isNaN(t.translate)) && (t.translate = 0));
}
function Wt(t, e, n, s) {
  (Ps(t.x, e.x, n.x, s ? s.originX : void 0), Ps(t.y, e.y, n.y, s ? s.originY : void 0));
}
function js(t, e, n, s = 0) {
  const i = s ? k(n.min, n.max, s) : n.min;
  ((t.min = i + e.min), (t.max = t.min + z(e)));
}
function pc(t, e, n, s) {
  (js(t.x, e.x, n.x, s?.x), js(t.y, e.y, n.y, s?.y));
}
function As(t, e, n, s = 0) {
  const i = s ? k(n.min, n.max, s) : n.min;
  ((t.min = e.min - i), (t.max = t.min + z(e)));
}
function ge(t, e, n, s) {
  (As(t.x, e.x, n.x, s?.x), As(t.y, e.y, n.y, s?.y));
}
function Vs(t, e, n, s, i) {
  return ((t -= e), (t = pe(t, 1 / n, s)), i !== void 0 && (t = pe(t, 1 / i, s)), t);
}
function gc(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (
    (rt.test(e) && ((e = parseFloat(e)), (e = k(r.min, r.max, e / 100) - r.min)),
    typeof e != "number")
  )
    return;
  let a = k(o.min, o.max, s);
  (t === o && (a -= e), (t.min = Vs(t.min, e, n, a, i)), (t.max = Vs(t.max, e, n, a, i)));
}
function Cs(t, e, [n, s, i], o, r) {
  gc(t, e[n], e[s], e[i], e.scale, o, r);
}
const yc = ["x", "scaleX", "originX"],
  xc = ["y", "scaleY", "originY"];
function Ms(t, e, n, s) {
  (Cs(t.x, e, yc, n ? n.x : void 0, s ? s.x : void 0),
    Cs(t.y, e, xc, n ? n.y : void 0, s ? s.y : void 0));
}
function ks(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ir(t) {
  return ks(t.x) && ks(t.y);
}
function Es(t, e) {
  return t.min === e.min && t.max === e.max;
}
function vc(t, e) {
  return Es(t.x, e.x) && Es(t.y, e.y);
}
function Ds(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Fr(t, e) {
  return Ds(t.x, e.x) && Ds(t.y, e.y);
}
function Ns(t) {
  return z(t.x) / z(t.y);
}
function Rs(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function st(t) {
  return [t("x"), t("y")];
}
function bc(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x,
    o = t.y.translate / e.y,
    r = n?.z || 0;
  if (
    ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      pathRotation: d,
      rotateX: f,
      rotateY: m,
      skewX: p,
      skewY: g,
    } = n;
    (u && (s = `perspective(${u}px) ${s}`),
      c && (s += `rotate(${c}deg) `),
      d && (s += `rotate(${d}deg) `),
      f && (s += `rotateX(${f}deg) `),
      m && (s += `rotateY(${m}deg) `),
      p && (s += `skewX(${p}deg) `),
      g && (s += `skewY(${g}deg) `));
  }
  const a = t.x.scale * e.x,
    l = t.y.scale * e.y;
  return ((a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none");
}
const Or = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  wc = Or.length,
  Ls = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Bs = (t) => typeof t == "number" || w.test(t);
function Tc(t, e, n, s, i, o) {
  i
    ? ((t.opacity = k(0, n.opacity ?? 1, Sc(s))), (t.opacityExit = k(e.opacity ?? 1, 0, Pc(s))))
    : o && (t.opacity = k(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < wc; r++) {
    const a = Or[r];
    let l = Is(e, a),
      u = Is(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Bs(l) === Bs(u)
        ? ((t[a] = Math.max(k(Ls(l), Ls(u), s), 0)), (rt.test(u) || rt.test(l)) && (t[a] += "%"))
        : (t[a] = u));
  }
  (e.rotate || n.rotate) && (t.rotate = k(e.rotate || 0, n.rotate || 0, s));
}
function Is(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Sc = Wr(0, 0.5, Vi),
  Pc = Wr(0.5, 0.95, $);
function Wr(t, e, n) {
  return (s) => (s < t ? 0 : s > e ? 1 : n(Ct(t, e, s)));
}
function jc(t, e, n) {
  const s = O(t) ? t : J(t);
  return (s.start(Nn("", s, e, n)), s.animation);
}
function $t(t, e, n, s = { passive: !0 }) {
  return (t.addEventListener(e, n, s), () => t.removeEventListener(e, n));
}
const Ac = (t, e) => t.depth - e.depth;
class Vc {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(e) {
    (gn(this.children, e), (this.isDirty = !0));
  }
  remove(e) {
    (le(this.children, e), (this.isDirty = !0));
  }
  forEach(e) {
    (this.isDirty && this.children.sort(Ac), (this.isDirty = !1), this.children.forEach(e));
  }
}
function Cc(t, e) {
  const n = U.now(),
    s = ({ timestamp: i }) => {
      const o = i - n;
      o >= e && (Y(s), t(o - e));
    };
  return (V.setup(s, !0), () => Y(s));
}
function oe(t) {
  return O(t) ? t.get() : t;
}
class Mc {
  constructor() {
    this.members = [];
  }
  add(e) {
    gn(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s === e || s === this.lead || s === this.prevLead) continue;
      const i = s.instance;
      (!i || i.isConnected === !1) && !s.snapshot && (le(this.members, s), s.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if ((le(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    for (let n = this.members.indexOf(e) - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s.isPresent !== !1 && s.instance?.isConnected !== !1) return (this.promote(s), !0);
    }
    return !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
      (s.updateSnapshot(), e.scheduleRender());
      const { layoutDependency: i } = s.options,
        { layoutDependency: o } = e.options;
      ((i === void 0 || i !== o) &&
        ((e.resumeFrom = s),
        n && (s.preserveOpacity = !0),
        s.snapshot &&
          ((e.snapshot = s.snapshot),
          (e.snapshot.latestValues = s.animationValues || s.latestValues)),
        e.root?.isUpdating && (e.isLayoutDirty = !0)),
        e.options.crossfade === !1 && s.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      (e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const ae = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Ee = ["", "X", "Y", "Z"],
  kc = 1e3;
let Ec = 0;
function De(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Ur(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = rr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Ur(s);
}
function zr({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: s,
  resetTransform: i,
}) {
  return class {
    constructor(r = {}, a = e?.()) {
      ((this.id = Ec++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Rc),
            this.nodes.forEach(Wc),
            this.nodes.forEach(Uc),
            this.nodes.forEach(Lc));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = r),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Vc());
    }
    addEventListener(r, a) {
      return (
        this.eventHandlers.has(r) || this.eventHandlers.set(r, new xn()),
        this.eventHandlers.get(r).add(a)
      );
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r) {
      if (this.instance) return;
      ((this.isSVG = In(r) && !Dl(r)), (this.instance = r));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(r),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        t)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        (V.read(() => {
          d = window.innerWidth;
        }),
          t(r, () => {
            const m = window.innerWidth;
            m !== d &&
              ((d = m),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = Cc(f, 250)),
              ae.hasAnimatedSinceResize &&
                ((ae.hasAnimatedSinceResize = !1), this.nodes.forEach(Ws)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: m }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const p = this.options.transition || u.getDefaultTransition() || Gc,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: y } = u.getProps(),
                x = !this.targetLayout || !Fr(this.targetLayout, m),
                v = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                v ||
                (d && (x || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const b = { ...Dn(p, "layout"), onPlay: g, onComplete: y };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b),
                  this.setAnimationOrigin(c, v, b.path));
              } else
                (d || Ws(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = m;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const r = this.getStack();
      (r && r.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Y(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(zc), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ur(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        ((d.shouldResetTransform = !0),
          (typeof d.latestValues.x == "string" || typeof d.latestValues.y == "string") &&
            (d.isLayoutDirty = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        r && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const l = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          l && this.nodes.forEach(Ic),
          this.nodes.forEach(Fs));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Os);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Fc),
            this.nodes.forEach(Oc),
            this.nodes.forEach(Dc),
            this.nodes.forEach(Nc))
          : this.nodes.forEach(Os),
        this.clearAllSnapshots());
      const a = U.now();
      ((B.delta = tt(0, 1e3 / 60, a - B.timestamp)),
        (B.timestamp = a),
        (B.isProcessing = !0),
        Se.update.process(B),
        Se.preRender.process(B),
        Se.render.process(B),
        (B.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), kt.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Bc), this.sharedNodes.forEach(Hc));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), V.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !z(this.snapshot.measuredBox.x) &&
          !z(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = L()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === r &&
          (a = !1),
        a && this.instance)
      ) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Ir(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      r &&
        this.instance &&
        (a || mt(this.latestValues) || c) &&
        (i(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        r && (l = this.removeTransform(l)),
        _c(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r) return L();
      const a = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Xc))) {
        const { scroll: u } = this.root;
        u && (it(a.x, u.offset.x), it(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      const a = L();
      if ((q(a, r), this.scroll?.wasRoot)) return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        u !== this.root &&
          c &&
          d.layoutScroll &&
          (c.wasRoot && q(a, r), it(a.x, c.offset.x), it(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1, l) {
      const u = l || L();
      q(u, r);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (!a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          (it(u.x, -d.scroll.offset.x), it(u.y, -d.scroll.offset.y)),
          mt(d.latestValues) && re(u, d.latestValues, d.layout?.layoutBox));
      }
      return (mt(this.latestValues) && re(u, this.latestValues, this.layout?.layoutBox), u);
    }
    removeTransform(r) {
      const a = L();
      q(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!mt(u.latestValues)) continue;
        let c;
        (u.instance &&
          (an(u.latestValues) && u.updateSnapshot(), (c = L()), q(c, u.measurePageBox())),
          Ms(a, u.latestValues, u.snapshot?.layoutBox, c));
      }
      return (mt(this.latestValues) && Ms(a, this.latestValues), a);
    }
    setTargetDelta(r) {
      ((this.targetDelta = r), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== B.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          r ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!this.layout || !(c || d)) return;
      this.resolvedRelativeTargetAt = B.timestamp;
      const f = this.getClosestProjectingParent();
      (f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && f && f.layout
            ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = L()), (this.targetWithTransforms = L())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              pc(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : q(this.target, this.layout.layoutBox),
                jr(this.target, this.targetDelta))
              : q(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || an(this.parent.latestValues) || Pr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(r, a, l) {
      ((this.relativeParent = r),
        (this.linkedParentVersion = r.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = L()),
        (this.relativeTargetOrigin = L()),
        ge(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0),
        q(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const r = this.getLead(),
        a = !!this.resumingFrom || this !== r;
      let l = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1),
        a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
        this.resolvedRelativeTargetAt === B.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      q(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      ($l(this.layoutCorrected, this.treeScale, this.path, a),
        r.layout &&
          !r.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((r.target = r.layout.layoutBox), (r.targetWithTransforms = L())));
      const { target: m } = r;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ss(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ss(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Wt(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !Rs(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Rs(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if ((this.options.visualElement?.scheduleRender(), r)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Pt()),
        (this.projectionDelta = Pt()),
        (this.projectionDeltaWithTransform = Pt()));
    }
    setAnimationOrigin(r, a = !1, l) {
      const u = this.snapshot,
        c = u ? u.latestValues : {},
        d = { ...this.latestValues },
        f = Pt();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const m = L(),
        p = u ? u.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        y = p !== g,
        x = this.getStack(),
        v = !x || x.members.length <= 1,
        b = !!(y && !v && this.options.crossfade === !0 && !this.path.some(Kc));
      this.animationProgress = 0;
      let T;
      const A = l?.interpolateProjection(r);
      ((this.mixTargetDelta = (E) => {
        const M = E / 1e3,
          j = A?.(M);
        (j
          ? ((f.x.translate = j.x),
            (f.x.scale = k(r.x.scale, 1, M)),
            (f.x.origin = r.x.origin),
            (f.x.originPoint = r.x.originPoint),
            (f.y.translate = j.y),
            (f.y.scale = k(r.y.scale, 1, M)),
            (f.y.origin = r.y.origin),
            (f.y.originPoint = r.y.originPoint))
          : (Us(f.x, r.x, M), Us(f.y, r.y, M)),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ge(
              m,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            $c(this.relativeTarget, this.relativeTargetOrigin, m, M),
            T && vc(this.relativeTarget, T) && (this.isProjectionDirty = !1),
            T || (T = L()),
            q(T, this.relativeTarget)),
          y && ((this.animationValues = d), Tc(d, c, this.latestValues, M, b, v)),
          j &&
            j.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = d),
            (this.animationValues.pathRotation = j.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = M));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(r) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation && (Y(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = V.update(() => {
          ((ae.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = J(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = jc(this.motionValue, [0, 1e3], {
              ...r,
              velocity: 0,
              isSync: !0,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a));
              },
              onStop: () => {},
              onComplete: () => {
                (r.onComplete && r.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const r = this.getStack();
      (r && r.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(kc), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (
          this !== r &&
          this.layout &&
          u &&
          Hr(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || L();
          const d = z(this.layout.layoutBox.x);
          ((l.x.min = r.target.x.min), (l.x.max = l.x.min + d));
          const f = z(this.layout.layoutBox.y);
          ((l.y.min = r.target.y.min), (l.y.max = l.y.min + f));
        }
        (q(a, l), re(a, c), Wt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(r, a) {
      (this.sharedNodes.has(r) || this.sharedNodes.set(r, new Mc()),
        this.sharedNodes.get(r).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0,
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = !1;
      const { latestValues: l } = r;
      if (
        ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && De("z", r, u, this.animationValues);
      for (let c = 0; c < Ee.length; c++)
        (De(`rotate${Ee[c]}`, r, u, this.animationValues),
          De(`skew${Ee[c]}`, r, u, this.animationValues));
      r.render();
      for (const c in u)
        (r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]));
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (r.visibility = ""),
          (r.opacity = ""),
          (r.pointerEvents = oe(a?.pointerEvents) || ""),
          (r.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (r.pointerEvents = oe(a?.pointerEvents) || "")),
          this.hasProjected &&
            !mt(this.latestValues) &&
            ((r.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      r.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = bc(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (d = l(c, d)), (r.transform = d));
      const { x: f, y: m } = this.projectionDelta;
      ((r.transformOrigin = `${f.origin * 100}% ${m.origin * 100}% 0`),
        u.animationValues
          ? (r.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (r.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const p in cn) {
        if (c[p] === void 0) continue;
        const { correct: g, applyTo: y, isCSSVariable: x } = cn[p],
          v = d === "none" ? c[p] : g(c[p], u);
        if (y) {
          const b = y.length;
          for (let T = 0; T < b; T++) r[y[T]] = v;
        } else x ? (this.options.visualElement.renderState.vars[p] = v) : (r[p] = v);
      }
      this.options.layoutId && (r.pointerEvents = u === this ? oe(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((r) => r.currentAnimation?.stop()),
        this.root.nodes.forEach(Fs),
        this.root.sharedNodes.clear());
    }
  };
}
function Dc(t) {
  t.updateLayout();
}
function Nc(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: s } = t.layout,
      { animationType: i } = t.options,
      o = e.source !== t.layout.source;
    if (i === "size")
      st((c) => {
        const d = o ? e.measuredBox[c] : e.layoutBox[c],
          f = z(d);
        ((d.min = n[c].min), (d.max = d.min + f));
      });
    else if (i === "x" || i === "y") {
      const c = i === "x" ? "y" : "x";
      un(o ? e.measuredBox[c] : e.layoutBox[c], n[c]);
    } else
      Hr(i, e.layoutBox, n) &&
        st((c) => {
          const d = o ? e.measuredBox[c] : e.layoutBox[c],
            f = z(n[c]);
          ((d.max = d.min + f),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[c].max = t.relativeTarget[c].min + f)));
        });
    const r = Pt();
    Wt(r, n, e.layoutBox);
    const a = Pt();
    o ? Wt(a, t.applyTransform(s, !0), e.measuredBox) : Wt(a, n, e.layoutBox);
    const l = !Ir(r);
    let u = !1;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: d, layout: f } = c;
        if (d && f) {
          const m = t.options.layoutAnchor || void 0,
            p = L();
          ge(p, e.layoutBox, d.layoutBox, m);
          const g = L();
          (ge(g, n, f.layoutBox, m),
            Fr(p, g) || (u = !0),
            c.options.layoutRoot &&
              ((t.relativeTarget = g), (t.relativeTargetOrigin = p), (t.relativeParent = c)));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u,
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Rc(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Lc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Bc(t) {
  t.clearSnapshot();
}
function Fs(t) {
  t.clearMeasurements();
}
function Ic(t) {
  ((t.isLayoutDirty = !0), t.updateLayout());
}
function Os(t) {
  t.isLayoutDirty = !1;
}
function Fc(t) {
  t.isAnimationBlocked &&
    t.layout &&
    !t.isLayoutDirty &&
    ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
}
function Oc(t) {
  const { visualElement: e } = t.options;
  (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform());
}
function Ws(t) {
  (t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0));
}
function Wc(t) {
  t.resolveTargetDelta();
}
function Uc(t) {
  t.calcProjection();
}
function zc(t) {
  t.resetSkewAndRotation();
}
function Hc(t) {
  t.removeLeadSnapshot();
}
function Us(t, e, n) {
  ((t.translate = k(e.translate, 0, n)),
    (t.scale = k(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint));
}
function zs(t, e, n, s) {
  ((t.min = k(e.min, n.min, s)), (t.max = k(e.max, n.max, s)));
}
function $c(t, e, n, s) {
  (zs(t.x, e.x, n.x, s), zs(t.y, e.y, n.y, s));
}
function Kc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Gc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Hs = (t) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
  $s = Hs("applewebkit/") && !Hs("chrome/") ? Math.round : $;
function Ks(t) {
  ((t.min = $s(t.min)), (t.max = $s(t.max)));
}
function _c(t) {
  (Ks(t.x), Ks(t.y));
}
function Hr(t, e, n) {
  return t === "position" || (t === "preserve-aspect" && !mc(Ns(e), Ns(n), 0.2));
}
function Xc(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const Yc = zr({
    attachResizeListener: (t, e) => $t(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ne = { current: void 0 },
  $r = zr({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Ne.current) {
        const t = new Yc({});
        (t.mount(window), t.setOptions({ layoutScroll: !0 }), (Ne.current = t));
      }
      return Ne.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  zn = S.createContext({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: "never" });
function qc(t = !0) {
  const e = S.useContext(pn);
  if (e === null) return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e,
    o = S.useId();
  S.useEffect(() => {
    if (t) return i(o);
  }, [t]);
  const r = S.useCallback(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const Kr = S.createContext({ strict: !1 }),
  Gs = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let _s = !1;
function Zc() {
  if (_s) return;
  const t = {};
  for (const e in Gs) t[e] = { isEnabled: (n) => Gs[e].some((s) => !!n[s]) };
  (wr(t), (_s = !0));
}
function Gr() {
  return (Zc(), Wl());
}
function Jc(t) {
  const e = Gr();
  for (const n in t) e[n] = { ...e[n], ...t[n] };
  wr(e);
}
const Qc = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function ye(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    Qc.has(t)
  );
}
let _r = (t) => !ye(t);
function tu(t) {
  typeof t == "function" && (_r = (e) => (e.startsWith("on") ? !ye(e) : t(e)));
}
try {
  tu(require("@emotion/is-prop-valid").default);
} catch {}
function eu(t, e, n) {
  const s = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      O(t[i]) ||
      ((_r(i) ||
        (n === !0 && ye(i)) ||
        (!e && !ye(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (s[i] = t[i]));
  return s;
}
const Te = S.createContext({});
function nu(t, e) {
  if (we(t)) {
    const { initial: n, animate: s } = t;
    return { initial: n === !1 || Ht(n) ? n : void 0, animate: Ht(s) ? s : void 0 };
  }
  return t.inherit !== !1 ? e : {};
}
function su(t) {
  const { initial: e, animate: n } = nu(t, S.useContext(Te));
  return S.useMemo(() => ({ initial: e, animate: n }), [Xs(e), Xs(n)]);
}
function Xs(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Hn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Xr(t, e, n) {
  for (const s in e) !O(e[s]) && !Cr(s, n) && (t[s] = e[s]);
}
function iu({ transformTemplate: t }, e) {
  return S.useMemo(() => {
    const n = Hn();
    return (Wn(n, e, t), Object.assign({}, n.vars, n.style));
  }, [e]);
}
function ru(t, e) {
  const n = t.style || {},
    s = {};
  return (Xr(s, n, t), Object.assign(s, iu(t, e)), s);
}
function ou(t, e) {
  const n = {},
    s = ru(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    (n.style = s),
    n
  );
}
const Yr = () => ({ ...Hn(), attrs: {} });
function au(t, e, n, s) {
  const i = S.useMemo(() => {
    const o = Yr();
    return (Mr(o, e, Er(s), t.transformTemplate, t.style), { ...o.attrs, style: { ...o.style } });
  }, [e]);
  if (t.style) {
    const o = {};
    (Xr(o, t.style, t), (i.style = { ...o, ...i.style }));
  }
  return i;
}
const lu = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function $n(t) {
  return typeof t != "string" || t.includes("-") ? !1 : !!(lu.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function cu(t, e, n, { latestValues: s }, i, o = !1, r) {
  const l = ((r ?? $n(t)) ? au : ou)(e, s, i, t),
    u = eu(e, typeof t == "string", o),
    c = t !== S.Fragment ? { ...u, ...l, ref: n } : {},
    { children: d } = e,
    f = S.useMemo(() => (O(d) ? d.get() : d), [d]);
  return S.createElement(t, { ...c, children: f });
}
function uu({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return { latestValues: hu(n, s, i, t), renderState: e() };
}
function hu(t, e, n, s) {
  const i = {},
    o = s(t, {});
  for (const f in o) i[f] = oe(o[f]);
  let { initial: r, animate: a } = t;
  const l = we(t),
    u = vr(t);
  e &&
    u &&
    !l &&
    t.inherit !== !1 &&
    (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const d = c ? a : r;
  if (d && typeof d != "boolean" && !be(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let m = 0; m < f.length; m++) {
      const p = Rn(t, f[m]);
      if (p) {
        const { transitionEnd: g, transition: y, ...x } = p;
        for (const v in x) {
          let b = x[v];
          if (Array.isArray(b)) {
            const T = c ? b.length - 1 : 0;
            b = b[T];
          }
          b !== null && (i[v] = b);
        }
        for (const v in g) i[v] = g[v];
      }
    }
  }
  return i;
}
const qr = (t) => (e, n) => {
    const s = S.useContext(Te),
      i = S.useContext(pn),
      o = () => uu(t, e, s, i);
    return n ? o() : Vt(o);
  },
  du = qr({ scrapeMotionValuesFromProps: Un, createRenderState: Hn }),
  fu = qr({ scrapeMotionValuesFromProps: Dr, createRenderState: Yr }),
  mu = Symbol.for("motionComponentSymbol");
function pu(t, e, n) {
  const s = S.useRef(n);
  S.useInsertionEffect(() => {
    s.current = n;
  });
  const i = S.useRef(null);
  return S.useCallback(
    (o) => {
      (o && t.onMount?.(o), e && (o ? e.mount(o) : e.unmount()));
      const r = s.current;
      if (typeof r == "function")
        if (o) {
          const a = r(o);
          typeof a == "function" && (i.current = a);
        } else i.current ? (i.current(), (i.current = null)) : r(o);
      else r && (r.current = o);
    },
    [e],
  );
}
const Zr = S.createContext({});
function wt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function gu(t, e, n, s, i, o) {
  const { visualElement: r } = S.useContext(Te),
    a = S.useContext(Kr),
    l = S.useContext(pn),
    u = S.useContext(zn),
    c = u.reducedMotion,
    d = u.skipAnimations,
    f = S.useRef(null),
    m = S.useRef(!1);
  ((s = s || a.renderer),
    !f.current &&
      s &&
      ((f.current = s(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: o,
      })),
      m.current && f.current && (f.current.manuallyAnimateOnMount = !0)));
  const p = f.current,
    g = S.useContext(Zr);
  p && !p.projection && i && (p.type === "html" || p.type === "svg") && yu(f.current, n, i, g);
  const y = S.useRef(!1);
  S.useInsertionEffect(() => {
    p && y.current && p.update(n, l);
  });
  const x = n[ir],
    v = S.useRef(
      !!x &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(x) &&
        window.MotionHasOptimisedAnimation?.(x),
    );
  return (
    mn(() => {
      ((m.current = !0),
        p &&
          ((y.current = !0),
          (window.MotionIsMounted = !0),
          p.updateFeatures(),
          p.scheduleRenderMicrotask(),
          v.current && p.animationState && p.animationState.animateChanges()));
    }),
    S.useEffect(() => {
      p &&
        (!v.current && p.animationState && p.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(x);
          }),
          (v.current = !1)),
        (p.enteringChildren = void 0));
    }),
    p
  );
}
function yu(t, e, n, s) {
  const {
    layoutId: i,
    layout: o,
    drag: r,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutAnchor: c,
    layoutCrossfade: d,
  } = e;
  ((t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Jr(t.parent))),
    t.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!r || (a && wt(a)),
      visualElement: t,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: s,
      crossfade: d,
      layoutScroll: l,
      layoutRoot: u,
      layoutAnchor: c,
    }));
}
function Jr(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : Jr(t.parent);
}
function Re(t, { forwardMotionProps: e = !1, type: n } = {}, s, i) {
  s && Jc(s);
  const o = n ? n === "svg" : $n(t),
    r = o ? fu : du;
  function a(u, c) {
    let d;
    const f = { ...S.useContext(zn), ...u, layoutId: xu(u) },
      { isStatic: m } = f,
      p = su(u),
      g = r(u, m);
    if (!m && typeof window < "u") {
      vu();
      const y = bu(f);
      ((d = y.MeasureLayout), (p.visualElement = gu(t, g, f, i, y.ProjectionNode, o)));
    }
    return h.jsxs(Te.Provider, {
      value: p,
      children: [
        d && p.visualElement ? h.jsx(d, { visualElement: p.visualElement, ...f }) : null,
        cu(t, u, pu(g, p.visualElement, c), g, m, e, o),
      ],
    });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const l = S.forwardRef(a);
  return ((l[mu] = t), l);
}
function xu({ layoutId: t }) {
  const e = S.useContext(gi).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function vu(t, e) {
  S.useContext(Kr).strict;
}
function bu(t) {
  const e = Gr(),
    { drag: n, layout: s } = e;
  if (!n && !s) return {};
  const i = { ...n, ...s };
  return {
    MeasureLayout: n?.isEnabled(t) || s?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function wu(t, e) {
  if (typeof Proxy > "u") return Re;
  const n = new Map(),
    s = (o, r) => Re(o, r, t, e),
    i = (o, r) => s(o, r);
  return new Proxy(i, {
    get: (o, r) => (r === "create" ? s : (n.has(r) || n.set(r, Re(r, void 0, t, e)), n.get(r))),
  });
}
const Tu = (t, e) =>
  (e.isSVG ?? $n(t)) ? new sc(e) : new Zl(e, { allowProjection: t !== S.Fragment });
class Su extends ut {
  constructor(e) {
    (super(e), e.animationState || (e.animationState = lc(e)));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    be(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let Pu = 0;
class ju extends ut {
  constructor() {
    (super(...arguments), (this.id = Pu++), (this.isExitComplete = !1));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    if (e && s === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: r } = this.node.getProps();
        if (typeof o == "string" || (typeof o == "object" && o !== null && !Array.isArray(o))) {
          const a = xt(this.node, o, r);
          if (a) {
            const { transition: l, transitionEnd: u, ...c } = a;
            for (const d in c) this.node.getValue(d)?.jump(c[d]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !e);
    n &&
      !e &&
      i.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), e && (this.unmount = e(this.id)));
  }
  unmount() {}
}
const Au = { animation: { Feature: Su }, exit: { Feature: ju } };
function Xt(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const Vu = (t) => (e) => Bn(e) && t(e, Xt(e));
function Ut(t, e, n, s) {
  return $t(t, e, Vu(n), s);
}
const Qr = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  Ys = (t, e) => Math.abs(t - e);
function Cu(t, e) {
  const n = Ys(t.x, e.x),
    s = Ys(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
const qs = new Set(["auto", "scroll"]);
class to {
  constructor(
    e,
    n,
    {
      transformPagePoint: s,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: r = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (m) => {
        this.handleScroll(m.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Zt(this.lastRawMoveEventInfo, this.transformPagePoint));
        const m = Le(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          g = Cu(m.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!p && !g) return;
        const { point: y } = m,
          { timestamp: x } = B;
        this.history.push({ ...y, timestamp: x });
        const { onStart: v, onMove: b } = this.handlers;
        (p || (v && v(this.lastMoveEvent, m), (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, m));
      }),
      (this.handlePointerMove = (m, p) => {
        ((this.lastMoveEvent = m),
          (this.lastRawMoveEventInfo = p),
          (this.lastMoveEventInfo = Zt(p, this.transformPagePoint)),
          V.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (m, p) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const v = Le(
          m.type === "pointercancel" ? this.lastMoveEventInfo : Zt(p, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && g && g(m, v), y && y(m, v));
      }),
      !Bn(e))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = s),
      (this.distanceThreshold = r),
      (this.contextWindow = i || window));
    const l = Xt(e),
      u = Zt(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: d } = B;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    (f && f(e, Le(u, this.history)),
      (this.removeListeners = Kt(
        Ut(this.contextWindow, "pointermove", this.handlePointerMove),
        Ut(this.contextWindow, "pointerup", this.handlePointerUp),
        Ut(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n; ) {
      const s = getComputedStyle(n);
      ((qs.has(s.overflowX) || qs.has(s.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(e) {
    const n = this.scrollPositions.get(e);
    if (!n) return;
    const s = e === window,
      i = s ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
      o = { x: i.x - n.x, y: i.y - n.y };
    (o.x === 0 && o.y === 0) ||
      (s
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += o.x), (this.lastMoveEventInfo.point.y += o.y))
        : this.history.length > 0 && ((this.history[0].x -= o.x), (this.history[0].y -= o.y)),
      this.scrollPositions.set(e, i),
      V.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Y(this.updatePoint));
  }
}
function Zt(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Zs(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Le({ point: t }, e) {
  return { point: t, delta: Zs(t, eo(e)), offset: Zs(t, Mu(e)), velocity: ku(e, 0.1) };
}
function Mu(t) {
  return t[0];
}
function eo(t) {
  return t[t.length - 1];
}
function ku(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    s = null;
  const i = eo(t);
  for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > G(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  s === t[0] && t.length > 2 && i.timestamp - s.timestamp > G(e) * 2 && (s = t[1]);
  const o = X(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return (r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r);
}
function Eu(t, { min: e, max: n }, s) {
  return (
    e !== void 0 && t < e
      ? (t = s ? k(e, t, s.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = s ? k(n, t, s.max) : Math.min(t, n)),
    t
  );
}
function Js(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function Du(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: Js(t.x, n, i), y: Js(t.y, e, s) };
}
function Qs(t, e) {
  let n = e.min - t.min,
    s = e.max - t.max;
  return (e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s });
}
function Nu(t, e) {
  return { x: Qs(t.x, e.x), y: Qs(t.y, e.y) };
}
function Ru(t, e) {
  let n = 0.5;
  const s = z(t),
    i = z(e);
  return (
    i > s ? (n = Ct(e.min, e.max - s, t.min)) : s > i && (n = Ct(t.min, t.max - i, e.min)),
    tt(0, 1, n)
  );
}
function Lu(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const hn = 0.35;
function Bu(t = hn) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = hn),
    { x: ti(t, "left", "right"), y: ti(t, "top", "bottom") }
  );
}
function ti(t, e, n) {
  return { min: ei(t, e), max: ei(t, n) };
}
function ei(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Iu = new WeakMap();
class Fu {
  constructor(e) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = L()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = e));
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (d) => {
        (n && this.snapToCursor(Xt(d).point), this.stopAnimation());
      },
      r = (d, f) => {
        const { drag: m, dragPropagation: p, onDragStart: g } = this.getProps();
        if (
          m &&
          !p &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = pl(m)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          st((x) => {
            let v = this.getAxisMotionValue(x).get() || 0;
            if (rt.test(v)) {
              const { projection: b } = this.visualElement;
              if (b && b.layout) {
                const T = b.layout.layoutBox[x];
                T && (v = z(T) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[x] = v;
          }),
          g && V.update(() => g(d, f), !1, !0),
          Qe(this.visualElement, "transform"));
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        ((this.latestPointerEvent = d), (this.latestPanInfo = f));
        const {
          dragPropagation: m,
          dragDirectionLock: p,
          onDirectionLock: g,
          onDrag: y,
        } = this.getProps();
        if (!m && !this.openDragLock) return;
        const { offset: x } = f;
        if (p && this.currentDirection === null) {
          ((this.currentDirection = Wu(x)),
            this.currentDirection !== null && g && g(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, x),
          this.updateAxis("y", f.point, x),
          this.visualElement.render(),
          y && V.update(() => y(d, f), !1, !0));
      },
      l = (d, f) => {
        ((this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new to(
      e,
      { onSessionStart: o, onStart: r, onMove: a, onSessionEnd: l, resumeAnimation: u },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: s,
        contextWindow: Qr(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(e, n) {
    const s = e || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !s)) return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && V.postRender(() => a(s, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    (e && (e.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: s } = this.getProps();
    (!s && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Jt(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    (this.constraints && this.constraints[e] && (r = Eu(r, this.constraints[e], this.elastic[e])),
      o.set(r));
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      i = this.constraints;
    (e && wt(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && s
        ? (this.constraints = Du(s.layoutBox, e))
        : (this.constraints = !1),
      (this.elastic = Bu(n)),
      i !== this.constraints &&
        !wt(e) &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        st((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Lu(s.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !wt(e)) return !1;
    const s = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    i.root && ((i.root.scroll = void 0), i.root.updateScroll());
    const o = Kl(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Nu(i.layout.layoutBox, o);
    if (n) {
      const a = n(zl(r));
      ((this.hasMutatedConstraints = !!a), a && (r = Sr(a)));
    }
    return r;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: s,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = st((c) => {
        if (!Jt(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        (r === !0 || r === c) && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: s ? e[c] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, p);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return (Qe(this.visualElement, e), s.start(Nn(e, s, 0, n, this.visualElement, !1)));
  }
  stopAnimation() {
    st((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      i = this.visualElement.getProps()[n];
    return i || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
  }
  snapToCursor(e) {
    st((n) => {
      const { drag: s } = this.getProps();
      if (!Jt(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n],
          l = o.get() || 0;
        o.set(e[n] - k(r, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!wt(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    st((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = Ru({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      st((r) => {
        if (!Jt(r, e, null)) return;
        const a = this.getAxisMotionValue(r),
          { min: l, max: u } = this.constraints[r];
        a.set(k(l, u, i[r]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Iu.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = Ut(e, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps(),
          f = u.target,
          m = f !== e && wl(f);
        c && d && !m && this.start(u);
      });
    let s;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        wt(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          s || (s = Ou(e, u.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: o } = this.visualElement,
      r = o.addEventListener("measure", i);
    (o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), V.read(i));
    const a = $t(window, "resize", () => this.scalePositionWithinConstraints()),
      l = o.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
        this.isDragging &&
          c &&
          (st((d) => {
            const f = this.getAxisMotionValue(d);
            f && ((this.originPoint[d] += u[d].translate), f.set(f.get() + u[d].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (a(), n(), r(), l && l(), s && s());
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: s = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: r = hn,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a,
    };
  }
}
function ni(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function Ou(t, e, n) {
  const s = rn(t, ni(n)),
    i = rn(e, ni(n));
  return () => {
    (s(), i());
  };
}
function Jt(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Wu(t, e = 10) {
  let n = null;
  return (Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n);
}
class Uu extends ut {
  constructor(e) {
    (super(e),
      (this.removeGroupControls = $),
      (this.removeListeners = $),
      (this.controls = new Fu(e)));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    (e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || $));
  }
  update() {
    const { dragControls: e } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    e !== n &&
      (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Be = (t) => (e, n) => {
  t && V.update(() => t(e, n), !1, !0);
};
class zu extends ut {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = $));
  }
  onPointerDown(e) {
    this.session = new to(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Qr(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Be(e),
      onStart: Be(n),
      onMove: Be(s),
      onEnd: (o, r) => {
        (delete this.session, i && V.postRender(() => i(o, r)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ut(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Ie = !1;
class Hu extends S.Component {
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props,
      { projection: o } = e;
    (o &&
      (n.group && n.group.add(o),
      s && s.register && i && s.register(o),
      Ie && o.root.didUpdate(),
      o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      o.setOptions({
        ...o.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (ae.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props,
      { projection: r } = s;
    return (
      r &&
        ((r.isPresent = o),
        e.layoutDependency !== n && r.setOptions({ ...r.options, layoutDependency: n }),
        (Ie = !0),
        i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o
          ? r.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== o &&
          (o
            ? r.promote()
            : r.relegate() ||
              V.postRender(() => {
                const a = r.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props,
      { projection: s } = e;
    s &&
      ((s.options.layoutAnchor = n),
      s.root.didUpdate(),
      kt.postRender(() => {
        !s.currentAnimation && s.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props,
      { projection: i } = e;
    ((Ie = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        s && s.deregister && s.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function no(t) {
  const [e, n] = qc(),
    s = S.useContext(gi);
  return h.jsx(Hu, {
    ...t,
    layoutGroup: s,
    switchLayoutGroup: S.useContext(Zr),
    isPresent: e,
    safeToRemove: n,
  });
}
const $u = { pan: { Feature: zu }, drag: { Feature: Uu, ProjectionNode: $r, MeasureLayout: no } };
function si(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = s[i];
  o && V.postRender(() => o(e, Xt(e)));
}
class Ku extends ut {
  mount() {
    const { current: e } = this.node;
    e &&
      (this.unmount = yl(e, (n, s) => (si(this.node, s, "Start"), (i) => si(this.node, i, "End"))));
  }
  unmount() {}
}
class Gu extends ut {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Kt(
      $t(this.node.current, "focus", () => this.onFocus()),
      $t(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function ii(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = s[i];
  o && V.postRender(() => o(e, Xt(e)));
}
class _u extends ut {
  mount() {
    const { current: e } = this.node;
    if (!e) return;
    const { globalTapTarget: n, propagate: s } = this.node.props;
    this.unmount = Sl(
      e,
      (i, o) => (
        ii(this.node, o, "Start"),
        (r, { success: a }) => ii(this.node, r, a ? "End" : "Cancel")
      ),
      { useGlobalTarget: n, stopPropagation: s?.tap === !1 },
    );
  }
  unmount() {}
}
const dn = new WeakMap(),
  Fe = new WeakMap(),
  Xu = (t) => {
    const e = dn.get(t.target);
    e && e(t);
  },
  Yu = (t) => {
    t.forEach(Xu);
  };
function qu({ root: t, ...e }) {
  const n = t || document;
  Fe.has(n) || Fe.set(n, {});
  const s = Fe.get(n),
    i = JSON.stringify(e);
  return (s[i] || (s[i] = new IntersectionObserver(Yu, { root: t, ...e })), s[i]);
}
function Zu(t, e, n) {
  const s = qu(e);
  return (
    dn.set(t, n),
    s.observe(t),
    () => {
      (dn.delete(t), s.unobserve(t));
    }
  );
}
const Ju = { some: 0, all: 1 };
class Qu extends ut {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: s, amount: i = "some", once: o } = e,
      r = {
        root: n ? n.current : void 0,
        rootMargin: s,
        threshold: typeof i == "number" ? i : Ju[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (this.isInView === u || ((this.isInView = u), o && !u && this.hasEnteredView)) return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    this.stopObserver = Zu(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(th(e, n)) && this.startObserver();
  }
  unmount() {
    (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
  }
}
function th({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const eh = {
    inView: { Feature: Qu },
    tap: { Feature: _u },
    focus: { Feature: Gu },
    hover: { Feature: Ku },
  },
  nh = { layout: { ProjectionNode: $r, MeasureLayout: no } },
  sh = { ...Au, ...eh, ...$u, ...nh },
  C = wu(sh, Tu);
function xe(t) {
  return typeof window > "u" ? !1 : t ? _i() : En();
}
const ih = 50,
  ri = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  rh = () => ({ time: 0, x: ri(), y: ri() }),
  oh = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
function oi(t, e, n, s) {
  const i = n[e],
    { length: o, position: r } = oh[e],
    a = i.current,
    l = n.time;
  ((i.current = Math.abs(t[`scroll${r}`])),
    (i.scrollLength = t[`scroll${o}`] - t[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Ct(0, i.scrollLength, i.current)));
  const u = s - l;
  i.velocity = u > ih ? 0 : vn(i.current - a, u);
}
function ah(t, e, n) {
  (oi(t, "x", e, n), oi(t, "y", e, n), (e.time = n));
}
function lh(t, e) {
  const n = { x: 0, y: 0 };
  let s = t;
  for (; s && s !== e; )
    if (dr(s)) ((n.x += s.offsetLeft), (n.y += s.offsetTop), (s = s.offsetParent));
    else if (s.tagName === "svg") {
      const i = s.getBoundingClientRect();
      s = s.parentElement;
      const o = s.getBoundingClientRect();
      ((n.x += i.left - o.left), (n.y += i.top - o.top));
    } else if (s instanceof SVGGraphicsElement) {
      const { x: i, y: o } = s.getBBox();
      ((n.x += i), (n.y += o));
      let r = null,
        a = s.parentNode;
      for (; !r; ) (a.tagName === "svg" && (r = a), (a = s.parentNode));
      s = r;
    } else break;
  return n;
}
const fn = { start: 0, center: 0.5, end: 1 };
function ai(t, e, n = 0) {
  let s = 0;
  if ((t in fn && (t = fn[t]), typeof t == "string")) {
    const i = parseFloat(t);
    t.endsWith("px")
      ? (s = i)
      : t.endsWith("%")
        ? (t = i / 100)
        : t.endsWith("vw")
          ? (s = (i / 100) * document.documentElement.clientWidth)
          : t.endsWith("vh")
            ? (s = (i / 100) * document.documentElement.clientHeight)
            : (t = i);
  }
  return (typeof t == "number" && (s = e * t), n + s);
}
const ch = [0, 0];
function uh(t, e, n, s) {
  let i = Array.isArray(t) ? t : ch,
    o = 0,
    r = 0;
  return (
    typeof t == "number"
      ? (i = [t, t])
      : typeof t == "string" &&
        ((t = t.trim()), t.includes(" ") ? (i = t.split(" ")) : (i = [t, fn[t] ? t : "0"])),
    (o = ai(i[0], n, s)),
    (r = ai(i[1], e)),
    o - r
  );
}
const Bt = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  hh = { x: 0, y: 0 };
function dh(t) {
  return "getBBox" in t && t.tagName !== "svg"
    ? t.getBBox()
    : { width: t.clientWidth, height: t.clientHeight };
}
function fh(t, e, n) {
  const { offset: s = Bt.All } = n,
    { target: i = t, axis: o = "y" } = n,
    r = o === "y" ? "height" : "width",
    a = i !== t ? lh(i, t) : hh,
    l = i === t ? { width: t.scrollWidth, height: t.scrollHeight } : dh(i),
    u = { width: t.clientWidth, height: t.clientHeight };
  e[o].offset.length = 0;
  let c = !e[o].interpolate;
  const d = s.length;
  for (let f = 0; f < d; f++) {
    const m = uh(s[f], u[r], l[r], a[o]);
    (!c && m !== e[o].interpolatorOffsets[f] && (c = !0), (e[o].offset[f] = m));
  }
  (c &&
    ((e[o].interpolate = Vn(e[o].offset, zi(s), { clamp: !1 })),
    (e[o].interpolatorOffsets = [...e[o].offset])),
    (e[o].progress = tt(0, 1, e[o].interpolate(e[o].current))));
}
function mh(t, e = t, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), e !== t)) {
    let s = e;
    for (; s && s !== t; )
      ((n.x.targetOffset += s.offsetLeft), (n.y.targetOffset += s.offsetTop), (s = s.offsetParent));
  }
  ((n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
    (n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight),
    (n.x.containerLength = t.clientWidth),
    (n.y.containerLength = t.clientHeight));
}
function ph(t, e, n, s = {}) {
  return {
    measure: (i) => {
      (mh(t, s.target, n), ah(t, n, i), (s.offset || s.target) && fh(t, n, s));
    },
    notify: () => e(n),
  };
}
const bt = new WeakMap(),
  li = new WeakMap(),
  Oe = new WeakMap(),
  ci = new WeakMap(),
  Qt = new WeakMap(),
  ui = (t) => (t === document.scrollingElement ? window : t);
function so(t, { container: e = document.scrollingElement, trackContentSize: n = !1, ...s } = {}) {
  if (!e) return $;
  let i = Oe.get(e);
  i || ((i = new Set()), Oe.set(e, i));
  const o = rh(),
    r = ph(e, t, o, s);
  if ((i.add(r), !bt.has(e))) {
    const l = () => {
        for (const f of i) f.measure(B.timestamp);
        V.preUpdate(u);
      },
      u = () => {
        for (const f of i) f.notify();
      },
      c = () => V.read(l);
    bt.set(e, c);
    const d = ui(e);
    (window.addEventListener("resize", c),
      e !== document.documentElement && li.set(e, rn(e, c)),
      d.addEventListener("scroll", c),
      c());
  }
  if (n && !Qt.has(e)) {
    const l = bt.get(e),
      u = { width: e.scrollWidth, height: e.scrollHeight };
    ci.set(e, u);
    const c = () => {
        const f = e.scrollWidth,
          m = e.scrollHeight;
        (u.width !== f || u.height !== m) && (l(), (u.width = f), (u.height = m));
      },
      d = V.read(c, !0);
    Qt.set(e, d);
  }
  const a = bt.get(e);
  return (
    V.read(a, !1, !0),
    () => {
      Y(a);
      const l = Oe.get(e);
      if (!l || (l.delete(r), l.size)) return;
      const u = bt.get(e);
      (bt.delete(e),
        u &&
          (ui(e).removeEventListener("scroll", u),
          li.get(e)?.(),
          window.removeEventListener("resize", u)));
      const c = Qt.get(e);
      (c && (Y(c), Qt.delete(e)), ci.delete(e));
    }
  );
}
const gh = [
    [Bt.Enter, "entry"],
    [Bt.Exit, "exit"],
    [Bt.Any, "cover"],
    [Bt.All, "contain"],
  ],
  hi = { start: 0, end: 1 };
function yh(t) {
  const e = t.trim().split(/\s+/);
  if (e.length !== 2) return;
  const n = hi[e[0]],
    s = hi[e[1]];
  if (!(n === void 0 || s === void 0)) return [n, s];
}
function xh(t) {
  if (t.length !== 2) return;
  const e = [];
  for (const n of t)
    if (Array.isArray(n)) e.push(n);
    else if (typeof n == "string") {
      const s = yh(n);
      if (!s) return;
      e.push(s);
    } else return;
  return e;
}
function vh(t, e) {
  const n = xh(t);
  if (!n) return !1;
  for (let s = 0; s < 2; s++) {
    const i = n[s],
      o = e[s];
    if (i[0] !== o[0] || i[1] !== o[1]) return !1;
  }
  return !0;
}
function Kn(t) {
  if (!t) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [e, n] of gh) if (vh(t, e)) return { rangeStart: `${n} 0%`, rangeEnd: `${n} 100%` };
}
const di = new Map();
function fi(t) {
  const e = { value: 0 },
    n = so((s) => {
      e.value = s[t.axis].progress * 100;
    }, t);
  return { currentTime: e, cancel: n };
}
function io({ source: t, container: e, ...n }) {
  const { axis: s } = n;
  t && (e = t);
  let i = di.get(e);
  i || ((i = new Map()), di.set(e, i));
  const o = n.target ?? "self";
  let r = i.get(o);
  r || ((r = {}), i.set(o, r));
  const a = s + (n.offset ?? []).join(",");
  return (
    r[a] ||
      (n.target && xe(n.target)
        ? Kn(n.offset)
          ? (r[a] = new ViewTimeline({ subject: n.target, axis: s }))
          : (r[a] = fi({ container: e, ...n }))
        : xe()
          ? (r[a] = new ScrollTimeline({ source: e, axis: s }))
          : (r[a] = fi({ container: e, ...n }))),
    r[a]
  );
}
function bh(t, e) {
  const n = io(e),
    s = e.target ? Kn(e.offset) : void 0,
    i = e.target ? xe(e.target) && !!s : xe();
  return t.attachTimeline({
    timeline: i ? n : void 0,
    ...(s && i && { rangeStart: s.rangeStart, rangeEnd: s.rangeEnd }),
    observe: (o) => (
      o.pause(),
      xr((r) => {
        o.time = o.iterationDuration * r;
      }, n)
    ),
  });
}
function wh(t) {
  return t && (t.target || t.offset);
}
function Th(t) {
  return t.length === 2;
}
function Sh(t, e) {
  return Th(t) || wh(e)
    ? so((n) => {
        t(n[e.axis].progress, n);
      }, e)
    : xr(t, io(e));
}
function ro(t, { axis: e = "y", container: n = document.scrollingElement, ...s } = {}) {
  if (!n) return $;
  const i = { axis: e, container: n, ...s };
  return typeof t == "function" ? Sh(t, i) : bh(t, i);
}
const Ph = () => ({ scrollX: J(0), scrollY: J(0), scrollXProgress: J(0), scrollYProgress: J(0) }),
  jt = (t) => (t ? !t.current : !1);
function mi(t, e, n, s) {
  return {
    factory: (i) => {
      let o;
      const r = () => {
        if (jt(n) || jt(s)) {
          kt.read(r);
          return;
        }
        o = ro(i, { ...e, axis: t, container: n?.current || void 0, target: s?.current || void 0 });
      };
      return (
        kt.read(r),
        () => {
          (fr(r), o?.());
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (i) => i,
    duration: 1,
  };
}
function jh(t, e) {
  return typeof window > "u" ? !1 : t ? _i() && !!Kn(e) : En();
}
function oo({ container: t, target: e, ...n } = {}) {
  const s = Vt(Ph);
  jh(e, n.offset) &&
    ((s.scrollXProgress.accelerate = mi("x", n, t, e)),
    (s.scrollYProgress.accelerate = mi("y", n, t, e)));
  const i = S.useRef(null),
    o = S.useRef(!1),
    r = S.useCallback(
      () => (
        (i.current = ro(
          (a, { x: l, y: u }) => {
            (s.scrollX.set(l.current),
              s.scrollXProgress.set(l.progress),
              s.scrollY.set(u.current),
              s.scrollYProgress.set(u.progress));
          },
          { ...n, container: t?.current || void 0, target: e?.current || void 0 },
        )),
        () => {
          i.current?.();
        }
      ),
      [t, e, JSON.stringify(n.offset)],
    );
  return (
    mn(() => {
      if (((o.current = !1), jt(t) || jt(e))) {
        o.current = !0;
        return;
      } else return r();
    }, [r]),
    S.useEffect(() => {
      if (!o.current) return;
      let a;
      const l = () => {
        const u = jt(t),
          c = jt(e);
        !u && !c && (a = r());
      };
      return (
        kt.read(l),
        () => {
          (fr(l), a?.());
        }
      );
    }, [r]),
    s
  );
}
function Ah(t) {
  const e = Vt(() => J(t)),
    { isStatic: n } = S.useContext(zn);
  if (n) {
    const [, s] = S.useState(t);
    S.useEffect(() => e.on("change", s), []);
  }
  return e;
}
function ao(t, e) {
  const n = Ah(e()),
    s = () => n.set(e());
  return (
    s(),
    mn(() => {
      const i = () => V.preRender(s, !1, !0),
        o = t.map((r) => r.on("change", i));
      return () => {
        (o.forEach((r) => r()), Y(s));
      };
    }),
    n
  );
}
function Vh(t) {
  ((Ot.current = []), t());
  const e = ao(Ot.current, t);
  return ((Ot.current = void 0), e);
}
function At(t, e, n, s) {
  if (typeof t == "function") return Vh(t);
  if (n !== void 0 && !Array.isArray(n) && typeof e != "function") return Ch(t, e, n, s);
  const r = typeof e == "function" ? e : Nl(e, n, s),
    a = Array.isArray(t) ? pi(t, r) : pi([t], ([u]) => r(u)),
    l = Array.isArray(t) ? void 0 : t.accelerate;
  return (
    l &&
      !l.isTransformed &&
      typeof e != "function" &&
      Array.isArray(n) &&
      s?.clamp !== !1 &&
      (a.accelerate = { ...l, times: e, keyframes: n, isTransformed: !0 }),
    a
  );
}
function pi(t, e) {
  const n = Vt(() => []);
  return ao(t, () => {
    n.length = 0;
    const s = t.length;
    for (let i = 0; i < s; i++) n[i] = t[i].get();
    return e(n);
  });
}
function Ch(t, e, n, s) {
  const i = Vt(() => Object.keys(n)),
    o = Vt(() => ({}));
  for (const r of i) o[r] = At(t, e, n[r], s);
  return o;
}
const Mh = "/assets/logo1principal-ClIfHp36.png";
function kh() {
  const { scrollY: t } = oo(),
    e = At(t, [0, 120], ["rgba(18,18,18,0)", "rgba(18,18,18,0.75)"]),
    n = At(t, [0, 120], ["blur(0px)", "blur(14px)"]);
  return h.jsx(C.nav, {
    style: { backgroundColor: e, backdropFilter: n },
    className: "fixed top-0 inset-x-0 z-50 border-b border-white/0",
    children: h.jsxs("div", {
      className: "max-w-[1600px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between",
      children: [
        h.jsx("a", {
          href: "#top",
          className: "flex items-center gap-3",
          children: h.jsx("img", {
            src: Mh,
            alt: "Lifestyle Barber & Beauty",
            className: "h-10 md:h-12 w-auto object-contain",
          }),
        }),
        h.jsx("div", {
          className:
            "hidden md:flex gap-10 font-mono text-[10px] uppercase tracking-[0.25em] text-champagne/70",
          children: ["Experience", "Services", "Artisans", "Gallery", "Visit"].map((s) =>
            h.jsx(
              "a",
              {
                href: `#${s.toLowerCase()}`,
                className: "hover:text-gold transition-colors",
                children: s,
              },
              s,
            ),
          ),
        }),
        h.jsx("a", {
          href: "#book",
          className:
            "bg-gold text-charcoal px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-champagne transition-colors",
          children: "Book Now",
        }),
      ],
    }),
  });
}
const lo = "/assets/barberia4-qf7ag7vD.jpg",
  Eh = "/assets/fade5-CsMoiu34.jpg",
  co = "/assets/mujer1-CUI8GTNP.JPG",
  uo = "/assets/fade6-DcqwxqAs.MOV",
  Dh = "/assets/mujer4-Dzhu5n90.JPG",
  Nh = "/assets/fade2-D9UMAtim.jpg",
  Rh = "/assets/mujer5-U4wrUFQ1.JPG",
  Lh = "/assets/fade3-CMqBJ_WJ.JPG",
  ho = "/assets/facialvideo2-D46yWUuc.mov",
  Bh = "/assets/fade9-TQCkW4Ze.MOV",
  Ih = "/assets/mujer6-D5fz0w_y.JPG",
  Fh = "/assets/fade4-CPvUoarH.jpg",
  Oh = "/assets/barberia1-Dk--rgIX.jpg",
  Wh = "/assets/barberia2-BXvCMMuB.jpg";
function K({ src: t, alt: e, className: n, loading: s }) {
  return typeof t == "string" &&
    (t.toLowerCase().endsWith(".mov") || t.toLowerCase().endsWith(".mp4"))
    ? h.jsx("video", { src: t, className: n, autoPlay: !0, loop: !0, muted: !0, playsInline: !0 })
    : h.jsx("img", { src: t, alt: e, className: n, loading: s });
}
const W = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: !0, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
};
function Uh() {
  const t = S.useRef(null),
    { scrollYProgress: e } = oo({ target: t, offset: ["start start", "end start"] }),
    n = At(e, [0, 1], ["0%", "30%"]),
    s = At(e, [0, 1], [1, 1.15]),
    i = At(e, [0, 1], [1, 0.2]);
  return h.jsxs("section", {
    id: "top",
    ref: t,
    className: "relative min-h-screen w-full overflow-hidden flex flex-col justify-end p-6 md:p-16",
    children: [
      h.jsxs(C.div, {
        style: { y: n, scale: s },
        className: "absolute inset-0 z-0",
        children: [
          h.jsx(K, {
            src: lo,
            alt: "Luxury barbershop interior",
            className: "w-full h-full object-cover",
          }),
          h.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60",
          }),
          h.jsx("div", { className: "absolute inset-0 grain opacity-60 mix-blend-overlay" }),
        ],
      }),
      h.jsxs(C.div, {
        style: { opacity: i },
        className: "relative z-10 max-w-[1600px] w-full mx-auto pb-12 md:pb-20",
        children: [
          h.jsx(C.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.1 },
            className: "font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-8",
            children: "· Leander, Texas · Est. 2014 ·",
          }),
          h.jsxs("div", {
            className: "grid md:grid-cols-12 gap-8 items-end",
            children: [
              h.jsx(C.div, {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                className: "md:col-span-8",
                children: h.jsxs("h1", {
                  className:
                    "font-display text-[18vw] md:text-[10vw] leading-[0.85] text-champagne italic text-balance",
                  children: [
                    "Modern ",
                    h.jsx("span", { className: "block text-gold", children: "Grooming" }),
                    h.jsx("span", {
                      className:
                        "font-sans not-italic font-black uppercase text-[7vw] md:text-[3.5vw] tracking-tighter text-rose/40 block mt-2",
                      children: "& Beauty Lifestyle",
                    }),
                  ],
                }),
              }),
              h.jsxs(C.div, {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] },
                className: "md:col-span-4 flex flex-col gap-8",
                children: [
                  h.jsx("p", {
                    className: "text-champagne/70 max-w-sm text-base md:text-lg leading-relaxed",
                    children:
                      "A cinematic fusion of luxury barbering and modern beauty atelier — reimagining style in the heart of Leander.",
                  }),
                  h.jsx("div", {
                    className: "flex items-center gap-4",
                    children: h.jsxs("div", {
                      className:
                        "font-mono text-[10px] uppercase tracking-widest text-champagne/60 leading-tight",
                      children: [
                        h.jsx("div", {
                          className: "text-gold text-sm font-bold",
                          children: "★ 4.6",
                        }),
                        "170+ Reviews",
                      ],
                    }),
                  }),
                  h.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-3",
                    children: [
                      h.jsx("a", {
                        href: "#book",
                        className:
                          "bg-gold text-charcoal px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-center hover:bg-champagne transition-all gold-glow",
                        children: "Book Appointment",
                      }),
                      h.jsx("a", {
                        href: "#services",
                        className:
                          "border border-champagne/30 text-champagne px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-center hover:border-gold hover:text-gold transition-all",
                        children: "Explore Services",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      h.jsx(C.div, {
        animate: { y: [0, 10, 0] },
        transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
        className:
          "absolute bottom-6 left-1/2 -translate-x-1/2 z-10 font-mono text-[9px] uppercase tracking-[0.3em] text-champagne/40",
        children: "Scroll ↓",
      }),
    ],
  });
}
function zh() {
  const t = [
    "2405 S Hwy 183 #102, Leander TX",
    "•",
    "Est. 2014",
    "•",
    "Premium Cuts & Couture Beauty",
    "•",
    "Open 7 Days",
    "•",
  ];
  return h.jsx("div", {
    className: "bg-gold py-5 overflow-hidden border-y border-charcoal/10",
    children: h.jsx("div", {
      className:
        "flex animate-marquee whitespace-nowrap font-mono text-[11px] md:text-sm uppercase tracking-[0.4em] text-charcoal/80",
      children: [...Array(4)].map((e, n) =>
        h.jsx(
          "div",
          {
            className: "flex items-center gap-10 pr-10",
            children: t.map((s, i) => h.jsx("span", { children: s }, i)),
          },
          n,
        ),
      ),
    }),
  });
}
function Hh() {
  return h.jsx("section", {
    id: "space",
    className: "bg-ink text-champagne py-24 md:py-40 px-6 md:px-10 relative overflow-hidden",
    children: h.jsxs("div", {
      className: "max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 items-center",
      children: [
        h.jsxs(C.div, {
          ...W,
          className: "relative z-40",
          children: [
            h.jsx("div", {
              className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6",
              children: "— The Space",
            }),
            h.jsxs("h2", {
              className:
                "font-display text-5xl md:text-7xl text-champagne italic leading-[0.95] mb-8",
              children: [
                "Designed for ",
                h.jsx("span", { className: "text-gold block mt-2", children: "your comfort." }),
              ],
            }),
            h.jsx("p", {
              className: "text-champagne/60 text-lg max-w-md leading-relaxed",
              children:
                "A modern sanctuary where luxury meets raw industrial aesthetic. Relax, have a drink, and enjoy a premium grooming experience in an environment crafted exclusively for you.",
            }),
          ],
        }),
        h.jsxs("div", {
          className:
            "relative h-[500px] md:h-[700px] w-full flex items-center justify-center mt-10 lg:mt-0",
          children: [
            h.jsx(C.div, {
              initial: { opacity: 0, y: 50, rotate: -5 },
              whileInView: { opacity: 1, y: 0, rotate: -10 },
              transition: { duration: 1, ease: "easeOut" },
              viewport: { once: !0 },
              className: "absolute top-0 left-0 w-3/5 md:w-1/2 aspect-[4/5] z-10 shadow-2xl",
              children: h.jsx(K, {
                src: Oh,
                className: "w-full h-full object-cover border-[8px] border-charcoal",
              }),
            }),
            h.jsx(C.div, {
              initial: { opacity: 0, y: 50, x: 50, rotate: 5 },
              whileInView: { opacity: 1, y: 0, x: 0, rotate: 5 },
              transition: { duration: 1, delay: 0.2, ease: "easeOut" },
              viewport: { once: !0 },
              className: "absolute bottom-0 right-0 w-3/4 md:w-3/5 aspect-[4/3] z-20 shadow-2xl",
              children: h.jsx(K, {
                src: lo,
                className: "w-full h-full object-cover border-[8px] border-charcoal",
              }),
            }),
            h.jsx(C.div, {
              initial: { opacity: 0, y: -50, x: 20, rotate: 15 },
              whileInView: { opacity: 1, y: 0, x: 0, rotate: 15 },
              transition: { duration: 1, delay: 0.4, ease: "easeOut" },
              viewport: { once: !0 },
              className: "absolute top-1/4 right-5 w-2/5 aspect-square z-30 shadow-2xl",
              children: h.jsx(K, {
                src: Wh,
                className: "w-full h-full object-cover border-[8px] border-charcoal",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function $h() {
  return h.jsx("section", {
    id: "experience",
    className: "bg-champagne text-ink py-24 md:py-40 px-6 md:px-10 overflow-hidden relative",
    children: h.jsxs("div", {
      className: "max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 items-center",
      children: [
        h.jsxs(C.div, {
          ...W,
          className: "lg:col-span-5",
          children: [
            h.jsx("div", {
              className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6",
              children: "— The Philosophy",
            }),
            h.jsxs("h2", {
              className: "font-display text-5xl md:text-7xl text-ink leading-[0.95] mb-8 italic",
              children: [
                "The hush of a",
                " ",
                h.jsx("span", {
                  className:
                    "not-italic font-sans font-black uppercase text-3xl md:text-5xl tracking-tighter",
                  children: "Lounge.",
                }),
                h.jsx("br", {}),
                "The polish of a ",
                h.jsx("span", { className: "text-gold", children: "Couture" }),
                " studio.",
              ],
            }),
            h.jsx("p", {
              className: "text-ink/60 text-lg max-w-md leading-relaxed mb-12",
              children:
                "We believe that grooming is a ritual, not a chore. Our space is divided between the dark leather comfort of a master barber and the sun-drenched marble of a couture styling studio.",
            }),
            h.jsxs("div", {
              className: "grid grid-cols-3 gap-6 border-t border-ink/10 pt-8",
              children: [
                h.jsxs("div", {
                  children: [
                    h.jsx("div", { className: "font-display text-4xl text-gold", children: "12+" }),
                    h.jsx("div", {
                      className: "font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-2",
                      children: "Years Crafting",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("div", { className: "font-display text-4xl text-gold", children: "8" }),
                    h.jsx("div", {
                      className: "font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-2",
                      children: "Master Artisans",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("div", {
                      className: "font-display text-4xl text-gold",
                      children: "170+",
                    }),
                    h.jsx("div", {
                      className: "font-mono text-[9px] uppercase tracking-widest text-ink/50 mt-2",
                      children: "5★ Reviews",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        h.jsxs("div", {
          className:
            "lg:col-span-7 relative h-[500px] md:h-[700px] flex items-center justify-center",
          children: [
            h.jsxs(C.div, {
              initial: { opacity: 0, y: 60, rotate: 8 },
              whileInView: { opacity: 1, y: 0, rotate: 3 },
              viewport: { once: !0 },
              transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
              className: "absolute top-0 right-0 w-2/3 aspect-[4/5] z-20 shadow-2xl",
              children: [
                h.jsx(K, {
                  src: Eh,
                  alt: "Barber craft",
                  className: "w-full h-full object-cover border-[6px] border-champagne",
                  loading: "lazy",
                }),
                h.jsx("div", {
                  className:
                    "absolute -bottom-3 -left-3 bg-charcoal text-gold font-mono text-[9px] uppercase tracking-widest px-3 py-1.5",
                  children: "Barber Craft",
                }),
              ],
            }),
            h.jsxs(C.div, {
              initial: { opacity: 0, y: 60, rotate: -8 },
              whileInView: { opacity: 1, y: 0, rotate: -4 },
              viewport: { once: !0 },
              transition: { duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              className: "absolute bottom-0 left-0 w-3/5 aspect-[4/5] z-10 shadow-xl",
              children: [
                h.jsx(K, {
                  src: co,
                  alt: "Beauty couture",
                  className: "w-full h-full object-cover border-[6px] border-champagne",
                  loading: "lazy",
                }),
                h.jsx("div", {
                  className:
                    "absolute -top-3 -right-3 bg-rose text-ink font-mono text-[9px] uppercase tracking-widest px-3 py-1.5",
                  children: "Beauty Couture",
                }),
              ],
            }),
            h.jsx(C.div, {
              animate: { y: [-10, 10, -10] },
              transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
              className:
                "absolute top-1/2 left-1/2 -translate-x-1/2 size-32 rounded-full bg-gold/20 blur-3xl pointer-events-none",
            }),
          ],
        }),
      ],
    }),
  });
}
function Kh() {
  const t = [
      { name: "Taper & Skin Fade", price: "$45+" },
      { name: "Beard Sculpting", price: "$30+" },
      { name: "The Razor Line Up", price: "$35+" },
      { name: "Hot Towel Shave", price: "$50+" },
      { name: "Kids Cuts", price: "$25+" },
      { name: "Signature Ritual", price: "$85+" },
    ],
    e = [
      { name: "Couture Color", price: "$120+" },
      { name: "Balayage & Highlights", price: "$180+" },
      { name: "Sculpted Styling", price: "$65+" },
      { name: "Bespoke Facial", price: "$95+" },
      { name: "Brow Artistry", price: "$30+" },
      { name: "Lash Extensions", price: "$110+" },
    ];
  return h.jsxs("section", {
    id: "services",
    className: "grid md:grid-cols-2 min-h-screen",
    children: [
      h.jsxs(C.div, {
        ...W,
        className:
          "bg-charcoal text-champagne p-10 md:p-20 flex flex-col justify-between min-h-[600px] relative overflow-hidden group",
        children: [
          h.jsx("div", {
            className:
              "absolute -bottom-32 -right-32 size-96 bg-gold/10 blur-3xl rounded-full pointer-events-none",
          }),
          h.jsxs("div", {
            className: "relative z-10",
            children: [
              h.jsx("div", {
                className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6",
                children: "— For Him",
              }),
              h.jsx("h3", {
                className: "font-display italic text-gold text-5xl md:text-6xl mb-12",
                children: "Master Barbering",
              }),
              h.jsx("ul", {
                className: "space-y-5",
                children: t.map((n, s) =>
                  h.jsxs(
                    "li",
                    {
                      className: `flex justify-between items-end pt-5 group/item cursor-pointer ${s > 0 ? "border-t border-white/5" : ""}`,
                      children: [
                        h.jsx("span", {
                          className:
                            "font-sans font-extrabold uppercase text-lg md:text-2xl text-champagne group-hover/item:text-gold group-hover/item:translate-x-1 transition-all",
                          children: n.name,
                        }),
                        h.jsx("span", {
                          className: "font-mono text-gold text-xs pb-1.5 whitespace-nowrap ml-4",
                          children: n.price,
                        }),
                      ],
                    },
                    n.name,
                  ),
                ),
              }),
            ],
          }),
          h.jsx("button", {
            className:
              "mt-12 self-start border border-gold text-gold px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-gold hover:text-charcoal transition-all",
            children: "The Barber Menu →",
          }),
        ],
      }),
      h.jsxs(C.div, {
        ...W,
        className:
          "bg-rose text-ink p-10 md:p-20 flex flex-col justify-between min-h-[600px] relative overflow-hidden group",
        children: [
          h.jsx("div", {
            className:
              "absolute -top-32 -left-32 size-96 bg-gold/20 blur-3xl rounded-full pointer-events-none",
          }),
          h.jsxs("div", {
            className: "relative z-10",
            children: [
              h.jsx("div", {
                className: "font-mono text-espresso text-[10px] uppercase tracking-[0.4em] mb-6",
                children: "— For Her",
              }),
              h.jsx("h3", {
                className: "font-display italic text-espresso text-5xl md:text-6xl mb-12",
                children: "Artisan Beauty",
              }),
              h.jsx("ul", {
                className: "space-y-5",
                children: e.map((n, s) =>
                  h.jsxs(
                    "li",
                    {
                      className: `flex justify-between items-end pt-5 group/item cursor-pointer ${s > 0 ? "border-t border-ink/10" : ""}`,
                      children: [
                        h.jsx("span", {
                          className:
                            "font-sans font-extrabold uppercase text-lg md:text-2xl text-ink group-hover/item:text-espresso group-hover/item:translate-x-1 transition-all",
                          children: n.name,
                        }),
                        h.jsx("span", {
                          className:
                            "font-mono text-espresso text-xs pb-1.5 whitespace-nowrap ml-4",
                          children: n.price,
                        }),
                      ],
                    },
                    n.name,
                  ),
                ),
              }),
            ],
          }),
          h.jsx("button", {
            className:
              "mt-12 self-start border border-espresso text-espresso px-8 py-3.5 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-espresso hover:text-rose transition-all",
            children: "The Beauty Menu →",
          }),
        ],
      }),
    ],
  });
}
function Gh() {
  return h.jsx("section", {
    id: "artisans",
    className: "bg-charcoal py-24 md:py-32 overflow-hidden relative",
    children: h.jsxs("div", {
      className: "max-w-[1600px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center",
      children: [
        h.jsxs(C.div, {
          ...W,
          className: "max-w-2xl",
          children: [
            h.jsx("div", {
              className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4",
              children: "— The Founder",
            }),
            h.jsxs("h2", {
              className:
                "font-display text-5xl md:text-7xl text-champagne italic leading-[0.95] mb-8",
              children: ["Our ", h.jsx("span", { className: "text-gold", children: "Story." })],
            }),
            h.jsxs("div", {
              className: "space-y-6 text-champagne/70 text-lg leading-relaxed",
              children: [
                h.jsx("p", {
                  children:
                    "Lifestyle Barber & Beauty was born with a clear vision: to elevate the traditional barbershop into a space where flawless technique meets modern comfort.",
                }),
                h.jsx("p", {
                  children:
                    "What began as a genuine vocation for grooming has become a benchmark of style. Driven by passion and perfectionism, we have created an environment where every client not only receives exceptional service but lives a true experience of personal care, exclusivity, and style.",
                }),
              ],
            }),
          ],
        }),
        h.jsx("div", {
          className: "flex justify-center lg:justify-end",
          children: h.jsxs(C.div, {
            initial: { opacity: 0, y: 60 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            className: "w-full max-w-sm group cursor-pointer",
            children: [
              h.jsxs("div", {
                className:
                  "relative aspect-[3/4] overflow-hidden mb-6 bg-espresso flex items-center justify-center shadow-2xl border border-white/5",
                children: [
                  h.jsx("div", {
                    className:
                      "text-champagne/20 font-display italic text-8xl group-hover:scale-110 transition-transform duration-700",
                    children: "A",
                  }),
                  h.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent",
                  }),
                  h.jsxs("div", {
                    className: "absolute bottom-6 left-6 right-6 flex justify-between items-end",
                    children: [
                      h.jsx("span", {
                        className:
                          "font-mono text-[10px] uppercase tracking-widest text-gold bg-charcoal/80 backdrop-blur px-3 py-1.5 border border-gold/20",
                        children: "Master Barber",
                      }),
                      h.jsx("button", {
                        className:
                          "size-12 rounded-full bg-gold text-charcoal flex items-center justify-center text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg",
                        children: "→",
                      }),
                    ],
                  }),
                ],
              }),
              h.jsx("h4", {
                className: "font-display text-4xl text-champagne italic mb-2",
                children: "Alberto",
              }),
              h.jsxs("div", {
                className: "flex justify-between items-center mt-1 border-t border-white/10 pt-3",
                children: [
                  h.jsx("p", {
                    className: "font-mono text-xs uppercase tracking-[0.2em] text-gold font-bold",
                    children: "CEO & Manager",
                  }),
                  h.jsx("p", {
                    className: "font-mono text-[10px] uppercase tracking-widest text-champagne/40",
                    children: "Founder",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function _h() {
  return h.jsx("section", {
    id: "gallery",
    className: "bg-charcoal py-24 md:py-32 px-6 md:px-10",
    children: h.jsxs("div", {
      className: "max-w-[1600px] mx-auto",
      children: [
        h.jsxs(C.div, {
          ...W,
          className: "mb-16 max-w-2xl",
          children: [
            h.jsx("div", {
              className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4",
              children: "— Visual Archive",
            }),
            h.jsxs("h2", {
              className: "font-display text-5xl md:text-7xl text-champagne italic leading-[0.9]",
              children: [
                "Moments, ",
                h.jsx("span", { className: "text-gold", children: "captured." }),
              ],
            }),
          ],
        }),
        h.jsxs("div", {
          className: "grid grid-cols-12 gap-3 md:gap-5",
          children: [
            h.jsx(C.div, {
              ...W,
              className: "col-span-6 md:col-span-4 aspect-[3/4] overflow-hidden group",
              children: h.jsx(K, {
                src: uo,
                alt: "Razor line up",
                className:
                  "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy",
              }),
            }),
            h.jsx(C.div, {
              ...W,
              className:
                "col-span-6 md:col-span-5 aspect-[4/3] mt-0 md:mt-16 overflow-hidden group",
              children: h.jsx(K, {
                src: Nh,
                alt: "Salon interior",
                className:
                  "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy",
              }),
            }),
            h.jsx(C.div, {
              ...W,
              className:
                "col-span-12 md:col-span-3 aspect-square md:aspect-[3/5] overflow-hidden group",
              children: h.jsx(K, {
                src: Dh,
                alt: "Balayage detail",
                className:
                  "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy",
              }),
            }),
            h.jsx(C.div, {
              ...W,
              className: "col-span-6 md:col-span-4 aspect-[4/5] md:-mt-16 overflow-hidden group",
              children: h.jsx(K, {
                src: Rh,
                alt: "Beauty atelier",
                className:
                  "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy",
              }),
            }),
            h.jsx(C.div, {
              ...W,
              className: "col-span-6 md:col-span-4 aspect-square overflow-hidden group",
              children: h.jsx(K, {
                src: Lh,
                alt: "Editorial portrait",
                className:
                  "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy",
              }),
            }),
            h.jsx(C.div, {
              ...W,
              className: "col-span-12 md:col-span-4 aspect-[4/3] overflow-hidden group",
              children: h.jsx(K, {
                src: ho,
                alt: "Beauty editorial",
                className:
                  "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function Xh() {
  const t = [
    { img: Bh, title: "Hot Towel Ritual" },
    { img: Ih, title: "Balayage Magic" },
    { img: Fh, title: "The Skin Fade" },
    { img: co, title: "Beauty Glow Up" },
    { img: ho, title: "Beard Sculpt" },
    { img: uo, title: "Color Story" },
  ];
  return h.jsxs("section", {
    className: "bg-espresso py-24 overflow-hidden",
    children: [
      h.jsxs("div", {
        className: "px-6 md:px-10 max-w-[1600px] mx-auto mb-12 flex justify-between items-end",
        children: [
          h.jsxs(C.div, {
            ...W,
            children: [
              h.jsx("div", {
                className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4",
                children: "— @lifestyle_barberstx",
              }),
              h.jsxs("h2", {
                className: "font-display text-4xl md:text-6xl text-champagne italic",
                children: [
                  "The Ritual ",
                  h.jsx("span", { className: "text-gold", children: "In Motion" }),
                ],
              }),
            ],
          }),
          h.jsx("a", {
            href: "https://www.instagram.com/lifestyle_barberstx/reels/",
            target: "_blank",
            rel: "noreferrer",
            className:
              "font-mono text-[10px] text-champagne/50 uppercase tracking-widest hover:text-gold",
            children: "Follow on Instagram →",
          }),
        ],
      }),
      h.jsx("div", {
        className: "overflow-hidden px-6 md:px-10 pb-8 cursor-grab active:cursor-grabbing",
        children: h.jsx(C.div, {
          animate: { x: ["0%", "-50%"] },
          transition: { duration: 25, ease: "linear", repeat: 1 / 0 },
          className: "flex gap-5 w-max",
          children: [...t, ...t].map((e, n) =>
            h.jsxs(
              "div",
              {
                className: "flex-none w-60 md:w-72 aspect-[9/16] relative group overflow-hidden",
                children: [
                  h.jsx(K, {
                    src: e.img,
                    alt: e.title,
                    className:
                      "w-full h-full object-cover transition-all duration-700 group-hover:scale-110 pointer-events-none",
                    loading: "lazy",
                  }),
                  h.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none",
                  }),
                  h.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                    children: h.jsx("div", {
                      className:
                        "size-14 rounded-full border-2 border-champagne flex items-center justify-center backdrop-blur",
                      children: h.jsx("div", {
                        className:
                          "size-0 border-l-[12px] border-l-champagne border-y-[8px] border-y-transparent ml-1",
                      }),
                    }),
                  }),
                  h.jsxs("div", {
                    className: "absolute bottom-4 left-4 right-4 pointer-events-none",
                    children: [
                      h.jsx("div", {
                        className: "font-mono text-[9px] uppercase tracking-widest text-gold mb-1",
                        children: "Reel",
                      }),
                      h.jsx("div", {
                        className: "font-display italic text-champagne text-lg",
                        children: e.title,
                      }),
                    ],
                  }),
                ],
              },
              n,
            ),
          ),
        }),
      }),
    ],
  });
}
function Yh() {
  const t = [
    {
      quote:
        "Excellent service and amazing attention to detail. The best taper fade I've had in years.",
      name: "Marcus R.",
      rating: 5,
    },
    {
      quote: "Professional, modern, and highly recommended. Walked out feeling like a new person.",
      name: "Sofia K.",
      rating: 5,
    },
    {
      quote:
        "Best barber shop in Leander. The atmosphere is incredible and the cuts are precision-level.",
      name: "Daniel V.",
      rating: 5,
    },
  ];
  return h.jsxs("section", {
    className: "bg-charcoal py-24 md:py-32 px-6 md:px-10 relative overflow-hidden",
    children: [
      h.jsx("div", { className: "absolute inset-0 grain opacity-30" }),
      h.jsxs("div", {
        className: "max-w-[1600px] mx-auto relative",
        children: [
          h.jsxs(C.div, {
            ...W,
            className: "mb-16 max-w-3xl",
            children: [
              h.jsx("div", {
                className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-4",
                children: "— Voices",
              }),
              h.jsxs("h2", {
                className: "font-display text-5xl md:text-7xl text-champagne italic leading-[0.9]",
                children: [
                  "A standard ",
                  h.jsx("span", { className: "text-gold", children: "our guests" }),
                  " recognize.",
                ],
              }),
            ],
          }),
          h.jsx("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: t.map((e, n) =>
              h.jsxs(
                C.div,
                {
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.8, delay: n * 0.15 },
                  className: `border border-white/10 p-8 md:p-10 bg-espresso/40 backdrop-blur hover:border-gold/40 transition-all ${n === 1 ? "md:translate-y-12" : ""}`,
                  children: [
                    h.jsx("div", {
                      className: "flex gap-1 mb-6 text-gold",
                      children: [...Array(e.rating)].map((s, i) =>
                        h.jsx("span", { children: "★" }, i),
                      ),
                    }),
                    h.jsxs("p", {
                      className: "font-display italic text-2xl text-champagne leading-snug mb-8",
                      children: ['"', e.quote, '"'],
                    }),
                    h.jsxs("div", {
                      className: "flex items-center gap-3 pt-6 border-t border-white/10",
                      children: [
                        h.jsx("div", {
                          className:
                            "size-10 rounded-full bg-gold/20 flex items-center justify-center font-mono text-xs text-gold",
                          children: e.name[0],
                        }),
                        h.jsxs("div", {
                          children: [
                            h.jsx("div", {
                              className: "font-mono text-xs text-champagne",
                              children: e.name,
                            }),
                            h.jsx("div", {
                              className:
                                "font-mono text-[9px] uppercase tracking-widest text-champagne/40",
                              children: "Verified Guest",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                n,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function qh() {
  return h.jsx("section", {
    id: "book",
    className: "bg-champagne text-ink py-24 md:py-32 px-6 md:px-10 relative overflow-hidden",
    children: h.jsx("div", {
      className: "max-w-[1600px] mx-auto relative",
      children: h.jsxs("div", {
        className: "grid lg:grid-cols-12 gap-12",
        children: [
          h.jsxs(C.div, {
            ...W,
            className: "lg:col-span-7",
            children: [
              h.jsx("div", {
                className: "font-mono text-gold text-[10px] uppercase tracking-[0.4em] mb-6",
                children: "— Reserve Your Seat",
              }),
              h.jsxs("h2", {
                className:
                  "font-display text-5xl md:text-8xl italic leading-[0.9] text-ink mb-12 text-balance",
                children: [
                  "Book your ",
                  h.jsx("span", { className: "text-gold", children: "appointment" }),
                  " today.",
                ],
              }),
              h.jsxs("div", {
                className: "space-y-6 max-w-md",
                children: [
                  h.jsxs("div", {
                    className: "border-b border-ink/20 pb-3",
                    children: [
                      h.jsx("label", {
                        className:
                          "font-mono text-[9px] uppercase tracking-widest text-ink/50 block mb-1",
                        children: "Name",
                      }),
                      h.jsx("input", {
                        type: "text",
                        placeholder: "Your full name",
                        className:
                          "w-full bg-transparent font-display text-xl text-ink placeholder:text-ink/30 focus:outline-none",
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "border-b border-ink/20 pb-3",
                    children: [
                      h.jsx("label", {
                        className:
                          "font-mono text-[9px] uppercase tracking-widest text-ink/50 block mb-1",
                        children: "Phone",
                      }),
                      h.jsx("input", {
                        type: "tel",
                        placeholder: "(830) 555-0000",
                        className:
                          "w-full bg-transparent font-display text-xl text-ink placeholder:text-ink/30 focus:outline-none",
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "border-b border-ink/20 pb-3",
                    children: [
                      h.jsx("label", {
                        className:
                          "font-mono text-[9px] uppercase tracking-widest text-ink/50 block mb-1",
                        children: "Service",
                      }),
                      h.jsx("input", {
                        type: "text",
                        placeholder: "What can we do for you?",
                        className:
                          "w-full bg-transparent font-display text-xl text-ink placeholder:text-ink/30 focus:outline-none",
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-3 pt-4",
                    children: [
                      h.jsx("button", {
                        className:
                          "bg-ink text-champagne px-8 py-4 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-gold hover:text-ink transition-all",
                        children: "Request Booking",
                      }),
                      h.jsx("a", {
                        href: "https://wa.me/18303302172",
                        className:
                          "border border-ink/30 text-ink px-8 py-4 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-ink hover:text-champagne transition-all text-center",
                        children: "WhatsApp Us",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          h.jsxs(C.div, {
            ...W,
            className: "lg:col-span-5 flex flex-col gap-8",
            children: [
              h.jsx("div", {
                className: "aspect-[4/3] bg-ink relative overflow-hidden",
                children: h.jsx("iframe", {
                  title: "Lifestyle Barber Map",
                  src: "https://www.google.com/maps?q=2405+S+Hwy+183+%23102,+Leander,+TX+78641&output=embed",
                  className: "w-full h-full grayscale contrast-125 opacity-90",
                  loading: "lazy",
                }),
              }),
              h.jsxs("div", {
                className: "grid grid-cols-2 gap-6 font-mono text-xs",
                children: [
                  h.jsxs("div", {
                    children: [
                      h.jsx("div", {
                        className: "text-gold uppercase tracking-widest text-[9px] mb-2",
                        children: "Location",
                      }),
                      h.jsxs("p", {
                        className: "text-ink/70 leading-relaxed",
                        children: ["2405 S Hwy 183 #102", h.jsx("br", {}), "Leander, TX 78641"],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    children: [
                      h.jsx("div", {
                        className: "text-gold uppercase tracking-widest text-[9px] mb-2",
                        children: "Contact",
                      }),
                      h.jsx("a", {
                        href: "tel:8303302172",
                        className: "block text-ink/70 hover:text-gold",
                        children: "(830) 330-2172",
                      }),
                      h.jsx("a", {
                        href: "https://wa.me/18303302172",
                        className: "block text-ink/70 hover:text-gold mt-1",
                        children: "WhatsApp",
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    children: [
                      h.jsx("div", {
                        className: "text-gold uppercase tracking-widest text-[9px] mb-2",
                        children: "Hours",
                      }),
                      h.jsxs("p", {
                        className: "text-ink/70 leading-relaxed",
                        children: ["Mon–Sat: 9–8", h.jsx("br", {}), "Sunday: 10–6"],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    children: [
                      h.jsx("div", {
                        className: "text-gold uppercase tracking-widest text-[9px] mb-2",
                        children: "Rating",
                      }),
                      h.jsx("p", { className: "text-ink/70", children: "★ 4.6 / 170+ reviews" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Zh() {
  return h.jsx("footer", {
    id: "visit",
    className:
      "bg-charcoal pt-24 pb-10 px-6 md:px-10 border-t border-white/5 relative overflow-hidden",
    children: h.jsxs("div", {
      className: "max-w-[1600px] mx-auto",
      children: [
        h.jsx("div", {
          className:
            "font-display text-champagne text-[18vw] md:text-[14vw] italic opacity-[0.04] select-none leading-[0.8] mb-12 -mx-2 pointer-events-none",
          children: "Lifestyle.",
        }),
        h.jsxs("div", {
          className:
            "grid md:grid-cols-4 gap-12 font-mono text-[10px] uppercase tracking-widest text-champagne/40",
          children: [
            h.jsxs("div", {
              className: "md:col-span-1",
              children: [
                h.jsx("div", {
                  className:
                    "font-display italic text-2xl text-champagne normal-case tracking-normal mb-2",
                  children: "Lifestyle",
                }),
                h.jsx("div", { className: "text-gold", children: "Barber · Beauty" }),
              ],
            }),
            h.jsxs("div", {
              className: "space-y-3",
              children: [
                h.jsx("div", { className: "text-champagne", children: "Visit" }),
                h.jsxs("p", {
                  className: "leading-relaxed",
                  children: ["2405 S Hwy 183 #102", h.jsx("br", {}), "Leander, TX 78641"],
                }),
              ],
            }),
            h.jsxs("div", {
              className: "space-y-3",
              children: [
                h.jsx("div", { className: "text-champagne", children: "Hours" }),
                h.jsxs("p", {
                  className: "leading-relaxed",
                  children: ["Mon–Sat: 9AM – 8PM", h.jsx("br", {}), "Sun: 10AM – 6PM"],
                }),
              ],
            }),
            h.jsxs("div", {
              className: "space-y-3",
              children: [
                h.jsx("div", { className: "text-champagne", children: "Connect" }),
                h.jsxs("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    h.jsx("a", {
                      href: "https://www.instagram.com/lifestyle_barberstx/",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "hover:text-gold",
                      children: "Instagram",
                    }),
                    h.jsx("a", {
                      href: "https://wa.me/18303302172",
                      className: "hover:text-gold",
                      children: "WhatsApp",
                    }),
                    h.jsx("a", {
                      href: "tel:8303302172",
                      className: "hover:text-gold",
                      children: "(830) 330-2172",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        h.jsxs("div", {
          className:
            "mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 font-mono text-[9px] uppercase tracking-widest text-champagne/30",
          children: [
            h.jsx("span", { children: "© 2026 Lifestyle Barber & Beauty Salon" }),
            h.jsx("span", { children: "Crafted with precision in Leander, TX" }),
          ],
        }),
      ],
    }),
  });
}
function Jh() {
  return h.jsx("a", {
    href: "https://wa.me/18303302172",
    className:
      "fixed bottom-6 right-6 z-40 size-16 rounded-full bg-gold text-charcoal flex items-center justify-center font-mono text-[10px] uppercase tracking-tighter font-bold shadow-2xl gold-glow hover:bg-champagne transition-all",
    "aria-label": "Book via WhatsApp",
    children: "Book",
  });
}
function nd() {
  return h.jsxs("div", {
    className: "bg-charcoal text-champagne overflow-x-hidden",
    children: [
      h.jsx(kh, {}),
      h.jsxs("main", {
        children: [
          h.jsx(Uh, {}),
          h.jsx(zh, {}),
          h.jsx(Hh, {}),
          h.jsx($h, {}),
          h.jsx(Kh, {}),
          h.jsx(Xh, {}),
          h.jsx(_h, {}),
          h.jsx(Yh, {}),
          h.jsx(Gh, {}),
          h.jsx(qh, {}),
        ],
      }),
      h.jsx(Zh, {}),
      h.jsx(Jh, {}),
    ],
  });
}
export { nd as component };
