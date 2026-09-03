import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  E as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  O as u,
  P as d,
  R as f,
  S as p,
  T as m,
  _ as h,
  a as g,
  b as _,
  c as v,
  d as y,
  f as b,
  g as x,
  h as S,
  i as C,
  j as w,
  k as T,
  l as E,
  m as D,
  o as O,
  s as k,
  u as A,
  v as j,
  w as M,
  x as ee,
  y as te,
  z as N,
} from "./react.BNsJAPhr.mjs";
import {
  $ as ne,
  A as re,
  B as ie,
  C as P,
  D as ae,
  E as oe,
  F as se,
  G as ce,
  H as le,
  I as ue,
  J as de,
  K as fe,
  L as pe,
  M as me,
  N as he,
  O as ge,
  P as F,
  Q as _e,
  R as ve,
  S as ye,
  T as be,
  U as xe,
  V as I,
  W as Se,
  X as Ce,
  Y as we,
  Z as Te,
  _ as Ee,
  a as De,
  at as Oe,
  b as ke,
  c as Ae,
  ct as je,
  d as Me,
  et as Ne,
  f as Pe,
  g as Fe,
  h as Ie,
  i as Le,
  it as Re,
  j as ze,
  k as Be,
  l as Ve,
  lt as He,
  m as Ue,
  n as We,
  nt as Ge,
  o as Ke,
  ot as qe,
  p as Je,
  q as Ye,
  r as Xe,
  rt as Ze,
  s as Qe,
  st as $e,
  tt as et,
  u as tt,
  v as nt,
  w as rt,
  x as it,
  y as at,
  z as ot,
} from "./motion.CA7Ore89.mjs";
function st(e) {
  return typeof e == `function`;
}
function ct(e) {
  return typeof e == `boolean`;
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function lt(e) {
  return Array.isArray(e);
}
function z(e) {
  return typeof e == `object` && !!e && !lt(e);
}
function ut(e) {
  for (let t in e) return !1;
  return !0;
}
function dt(e) {
  return e === void 0;
}
function ft(e) {
  return e === null;
}
function pt(e) {
  return e == null;
}
function mt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function ht(e) {
  return z(e) && st(e.return);
}
function gt(e) {
  return z(e) && st(e.then);
}
function _t(e) {
  return e instanceof Promise;
}
function vt(e) {
  return `url('${yt(e)}')`;
}
function yt(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function bt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function xt(e, t, n) {
  if (m_.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (m_.set(e, t), t))
    .catch((t) => {
      throw (m_.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(o_), m_.set(e, r));
}
function St(e, t) {
  s_ && (h_.set(e, t), g_.has(e) && xt(e, t, `registered loader ${e}`));
}
function Ct() {
  if (!s_) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(__),
      i = r ? e.slice(__.length) : e;
    if (!i) continue;
    g_.add(i);
    let a = h_.get(i);
    a ? xt(i, a, `registered loader ${i}`) : r && xt(i, () => import(n), n);
  }
}
function wt(e) {
  return typeof e == `object` && !!e && !b(e) && y_ in e;
}
function Tt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function Et(e, t = `default`, n) {
  n && St(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !m_.has(n)) return;
      let e = m_.get(n);
      _t(e) ? s(() => e) : (i = Tt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = Tt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = h(function (t, r) {
      if (
        (d(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && v_ !== void 0 && v_.add(n), !i)) throw s(e);
      return v(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function Dt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ot(e) {
  return e === null || !(x_ in e) ? !1 : typeof e.equals == `function`;
}
function kt(e, t) {
  return e === t || (e !== e && t !== t);
}
function At(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!kt(e[r], t[r])) return !1;
  return !0;
}
function jt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Lt(e[r], t[r], !0)) return !1;
  return !0;
}
function Mt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!kt(r, t.get(n))) return !1;
  return !0;
}
function Nt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Lt(r, t.get(n), !0)) return !1;
  return !0;
}
function Pt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Ft(e, t) {
  let n = b_(e);
  if (n.length !== b_(t).length) return !1;
  for (let r of n)
    if (!Dt(t, r) || (!(r === `_owner` && Dt(e, `$$typeof`) && e.$$typeof) && !kt(e[r], t[r])))
      return !1;
  return !0;
}
function It(e, t) {
  let n = b_(e);
  if (n.length !== b_(t).length) return !1;
  for (let r of n)
    if (!Dt(t, r) || (!(r === `_owner` && Dt(e, `$$typeof`) && e.$$typeof) && !Lt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Lt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? jt(e, t) : At(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? Nt(e, t) : Mt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Pt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? Ot(e) && Ot(t)
        ? e.equals(t)
        : n
          ? It(e, t)
          : Ft(e, t)
      : !1;
}
function Rt(e, t, n = !0) {
  try {
    return Lt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function zt(e) {
  return p.useCallback((t) => e[t], [e]);
}
function Bt({ api: e, children: t }) {
  return v(S_.Provider, { value: e, children: t });
}
function Vt() {
  return p.useContext(S_);
}
function Ht({ routes: e, children: t }) {
  let n = zt(e),
    r = c(() => ({ getRoute: n }), [n]);
  return v(S_.Provider, { value: r, children: t });
}
function Ut() {
  let e = Vt(),
    t = w(C_),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = n ? e.getRoute?.(n) : void 0;
  return c(() => {
    if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
  }, [n, r, i]);
}
function Wt() {
  let e = Ut();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Gt(e) {
  let t = Ut(),
    n = p.useRef(t);
  Rt(n.current, t) || !t || ((n.current = t), e(t));
}
function Kt(e) {
  let t = Vt();
  if (e) return t.getRoute?.(e);
}
function qt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Jt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Yt(e, t) {
  let n = Ut(),
    r = Kt(t) ?? n;
  return p.useMemo(() => (r ? qt(r, e) : e), [e, r]);
}
function Xt() {
  return Ut()?.pathVariables;
}
function B(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function V(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function Zt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Qt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === R_
  );
}
function $t(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function en(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function tn(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = en(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function nn(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function rn(e) {
  return z_.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function an(e) {
  return !(!Number.isInteger(e) || e < 0 || e > I_);
}
function on(e) {
  return !(!Number.isInteger(e) || e < 0 || e > F_);
}
function sn(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return an(+e);
}
function cn(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !sn(t[n]); n--);
  return ((t.length = n + 1), t);
}
function ln(e) {
  return new Uint8Array(e).toBase64();
}
function un(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function dn(e) {
  return Buffer.from(e).toString(`base64`);
}
function fn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function pn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function mn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function hn(e, t) {
  return gn(JSON.parse(e), t);
}
function gn(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === O_) return;
    if (e === A_) return NaN;
    if (e === j_) return 1 / 0;
    if (e === M_) return -1 / 0;
    if (e === N_) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = U_(t);
            r[e] = n;
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === P_) {
        let t = s[1];
        if (!on(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[I_] = void 0), delete n[I_]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!an(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== k_ && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function _n(e, t) {
  let n = vn(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function vn(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return O_;
    if (Number.isNaN(n)) return A_;
    if (n === 1 / 0) return j_;
    if (n === -1 / 0) return M_;
    if (n === 0 && 1 / n < 0) return N_;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new L_(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new L_(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Zt(n)) u = yn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new L_(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = $t(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${tn(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${tn(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${tn(r)},"${i}"]` : `["RegExp",${tn(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += k_;
            else {
              let t = cn(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + P_ + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += k_));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${Zt(e) ? yn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${H_(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${tn(n.toString())}]`;
          break;
        default:
          if (!Qt(n)) throw new L_(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (nn(n).length > 0) throw new L_(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new L_(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(rn(e)), (u += `,${tn(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new L_(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(rn(r)), (u += `${tn(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function yn(e) {
  let t = typeof e;
  return t === `string`
    ? tn(e)
    : e === void 0
      ? O_.toString()
      : e === 0 && 1 / e < 0
        ? N_.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function bn(e, t, n = `lazy`) {
  switch ((K.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function xn(e) {
  return L(e) && (e === `` || G_.test(e));
}
function Sn() {
  return { [K_.QueryCache]: new Map(), [K_.CollectionUtilsCache]: new Map() };
}
function Cn() {
  if (!s_) return;
  if (q_ !== void 0) return q_;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      q_ = hn(e.text) ?? Sn();
    } catch (e) {
      ((q_ = Sn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      u_(() => {
        (e?.remove(), (e = null));
      }),
      q_
    );
  }
}
function wn(e, t) {
  if (
    (console.warn(
      bt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    bn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function Tn(e, t) {
  let n = Cn();
  return n ? n[e].has(t) : !1;
}
function En(e, t) {
  let n = Cn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function Dn(e) {
  return e?.id ?? T_;
}
function On(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function kn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Z_.has(n)) return Z_.get(n);
    let r = new $_(n, t);
    return (Z_.set(n, r), r);
  };
}
function An({ children: e, collectionUtils: t }) {
  let n = c(() => ({ get: kn(t) }), [t]);
  return v(Q_.Provider, { value: n, children: e });
}
function jn() {
  return w(Q_);
}
function Mn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Nn() {
  return N === void 0 ? void 0 : N;
}
function Pn() {
  let e = Nn();
  return e ? ev.test(e.platform) : !1;
}
function Fn() {
  let e = Nn();
  return e
    ? tv.test(e.platform)
      ? !0
      : nv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function In() {
  return Pn() || Fn();
}
function Ln() {
  let e = Nn();
  return e ? rv.test(e.userAgent) : !1;
}
function Rn() {
  let e = Nn();
  return e ? iv.test(e.userAgent) && av.test(e.vendor) && !Ln() : !1;
}
function zn() {
  let e = Nn();
  return e ? ov.test(e.userAgent) && sv.test(e.vendor) : !1;
}
function Bn() {
  let e = Nn();
  return e ? cv.test(e.userAgent) : !1;
}
function Vn() {
  return typeof document == `object`;
}
function Hn() {
  let e = Nn();
  if (!e) return -1;
  let t = lv.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Un() {
  let e = Nn();
  return e ? uv.test(e.userAgent) : !1;
}
function Wn() {
  return !1;
}
function Gn() {
  let e = Nn();
  return e && dv.test(e.userAgent) ? `tablet` : e && fv.test(e.userAgent) ? `phone` : `desktop`;
}
function Kn() {
  return Gn() === `desktop`;
}
function qn(e) {
  return In() ? e.metaKey : e.ctrlKey;
}
function Jn() {}
function Yn(e) {
  return typeof e == `function` ? e() : e;
}
function Xn(e, t) {
  return gv[e] > gv[t];
}
function Zn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Qn(e, t) {
  let n = e?.priority,
    r = Zn();
  return n === `background`
    ? (t?.() ?? Mn(1))
    : r?.yield
      ? r.yield(e).catch(Jn)
      : r?.postTask
        ? r.postTask(Jn, e).catch(Jn)
        : t
          ? t()
          : n === `user-blocking`
            ? _v
            : Mn(0);
}
function $n(e, t, r) {
  let i = -1 / 0,
    a,
    o = new Set();
  function s() {
    for (let e of o) e();
    o.clear();
  }
  function c() {
    return document.hidden ? (s(), !0) : !1;
  }
  function l() {
    Vn() && (document.addEventListener(`visibilitychange`, c), n.addEventListener(`pagehide`, s));
  }
  function u(n) {
    return new Promise((r) => {
      (setTimeout(r, vv),
        e(() => {
          Qn(n, t).then(r);
        }));
    });
  }
  function d(e) {
    return Vn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), o.delete(r), t());
            };
          (o.add(r), c() || l(), e.then(r, r));
        })
      : e;
  }
  function f(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? u(a) : Qn(a, t);
    return i ? d(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let r = f(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (i = performance.now()),
          n && e.pendingPaintYieldCount--,
          a === e && e.pendingPaintYieldCount === 0 && (a = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      r.then(
        () => c(!0),
        () => c(!0)
      ),
      r
    );
  }
  function m(e, t) {
    let n = a;
    if (!n) {
      let r = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? pv : mv),
        s = Vn() && document.hidden ? hv : o;
      if (r - i < s) return;
      ((n = { pendingPaintYieldCount: 0 }), (a = n));
    }
    let o = e.continueAfter === `paint` && (n.pendingPaintYieldCount > 0 || r?.() !== !1);
    return p(n, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Vn() && !t ? (n ? void 0 : _v) : n ? m(i, r) : f(i);
  }
  return h;
}
function er() {
  let e = jn(),
    { getRoute: t } = Vt();
  return l(
    (n, r, i) => {
      if (!n || !t) return;
      let a = t(n),
        { pathVariables: o, locale: s } = r;
      return nr(a, { routeId: n, pathVariables: o, locale: s, collectionUtils: e }, i);
    },
    [t, e]
  );
}
function tr(e, t = !0) {
  let n = er();
  d(() => {
    if (!(!t || !xv)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function nr(e, t, n = {}) {
  if (!xv || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!(!o || !wt(o))) {
    i && (await bv({ priority: r }));
    try {
      let e = await o.preload();
      a && t && e && (await rr(e, t, r));
    } catch {}
  }
}
async function rr(e, t, n) {
  let r = e.loader;
  if (!r?.load) return;
  let i = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    priority: n,
    collectionUtils: t.collectionUtils,
  };
  try {
    await r.load({}, i);
  } catch {}
}
function ir(e, t) {
  return e.replace(Sv, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function ar(e, t = !1) {
  let r = ``;
  if (n !== void 0)
    if (t) r = n.location.search;
    else {
      let e = n.history?.state?.queryParamBackAnchorSearch;
      r = e === void 0 ? n.location.search : e === `` ? `` : `?${e}`;
    }
  return r ? or(r, e) : e;
}
function or(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Cv && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function sr(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Sv)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !L(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = _t(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = _t(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = _t(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function cr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function lr({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await sr(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = cr(u.path, t.slug)),
    o && u.path && (u.path = ar(u.path, !0)),
    u
  );
}
function ur() {
  if (wv) return;
  wv = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (n.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((n.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), bn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function dr({ children: e, value: t }) {
  return v(Tv.Provider, { value: t, children: e });
}
function fr() {
  return p.useContext(Tv);
}
function pr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function mr(e) {
  let t = Ev,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Dv; ) ((n = e.next(t)), r.push(n.value), (t += Ev));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Ev }
  );
}
function hr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function gr(e) {
  let { innerWidth: t, innerHeight: r } = n,
    [i, a] = hr(e.x),
    [o, s] = hr(e.y);
  return { x: a === `px` ? i : (i / 100) * t, y: s === `px` ? o : (o / 100) * r };
}
function _r(e) {
  let [t, n] = hr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function vr(e) {
  let { x: t, y: r } = gr(e);
  return Math.hypot(Math.max(t, n.innerWidth - t), Math.max(r, n.innerHeight - r));
}
function yr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function br(e) {
  return e ? Av[e] : void 0;
}
function xr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Sr(t)) {
    let { easing: e, duration: n } = mr(
      re({ keyframes: [0, 1], ...Cr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = br(n?.mask?.type),
    o = yr(n, `start`, e, a),
    s = yr({ ...jv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function Sr(e) {
  return e.type === `spring`;
}
function Cr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function wr({ exit: e = Nv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Mv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += xr(`exit`, e)),
    (r += xr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Tr() {
  u_(() => {
    Fe.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Mv);
      e && document.head.removeChild(e);
    });
  });
}
function Er() {
  return !!document.startViewTransition;
}
function Dr(e) {
  return new Promise((t) => {
    Fe.render(() => {
      (performance.mark(`framer-vt-style`), wr(e), t());
    });
  });
}
async function Or(e, t, n) {
  if (!Er()) {
    e();
    return;
  }
  if ((await Dr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Pv),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Tr());
      })
      .catch(Pv),
    r
  );
}
function kr() {
  let e = fr(),
    t = T(void 0);
  return (
    d(() => {
      t.current &&= (t.current(), void 0);
    }),
    l(
      (n, r, i, a) => {
        let o = pr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Or(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Ar(e, t) {
  u_(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function jr(e, t) {
  u_(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function Mr(e) {
  u_(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function Nr(e, t, n, i = r) {
  i(() => {
    let t = async (e) => (await bv({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Pr(e) {
  let t = T(new Set());
  return (
    Nr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    l(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Fr(e) {
  return z(e) && `routeId` in e;
}
function Ir(e = n.history.state) {
  return Fr(e) ? e : void 0;
}
function Lr(e) {
  return e?.entryId;
}
function Rr(e) {
  Lv = e;
}
function zr() {
  return Lv;
}
function Br() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Vr(e, t) {
  return Hr(e, Lr(e) ?? Lr(t));
}
function Hr(e, t = Br()) {
  return { ...e, entryId: t };
}
function Ur(e, t) {
  (performance.mark(`framer-history-replace`), Rr(Vr(e, Ir())), t && Ar(t, n.location.href));
  let r =
    !t || t === n.location.href
      ? n.History.prototype.replaceState.bind(n.history)
      : n.history.replaceState.bind(n.history);
  try {
    r(Lv, ``, t);
  } catch {}
}
function Wr(e) {
  (performance.mark(`framer-history-replace`),
    Rr(Hr(e)),
    History.prototype.replaceState.call(n.history, Lv, ``, void 0));
}
function Gr(e) {
  let t = n.navigation?.transition;
  if (!t) {
    e();
    return;
  }
  let r = () => {
    let r = n.navigation.transition;
    if (r && r !== t) {
      Gr(e);
      return;
    }
    e();
  };
  t.finished.then(r, r);
}
function Kr(e, t) {
  (performance.mark(`framer-history-push`), Rr(Hr(e)), Ar(t, n.location.href), ur());
  try {
    n.history.pushState(Lv, ``, t);
  } catch {}
}
function qr({ disabled: e, routeId: t, initialPathVariables: i, initialLocaleId: a }) {
  r(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let r = n.location.hash ? n.location.hash.slice(1) : void 0;
    Ur({ ...Ir(), routeId: t, hash: r, pathVariables: i, localeId: a });
  }, []);
}
function Jr(e, t, r) {
  let i = kr(),
    a = Pr(`framer-route-change`),
    { onHistoryTraversal: o, usesCustomScrollRestoration: s } = e,
    c = s ? `manual` : `after-transition`,
    u = T(void 0),
    f = l(() => {
      (u.current?.resolve(), (u.current = void 0));
    }, []),
    p = l(
      async ({ state: e }) => {
        if (!Fr(e)) return;
        let s = a({ popstate: !0 }),
          l = Jt();
        (s.promise.finally(l), Lr(zr()) !== (Lr(e) ?? Lr(Ir())) && o(), Rr(e));
        let { routeId: u, hash: d, pathVariables: p, localeId: m } = e,
          h = L(d) ? d : n.location.hash ? n.location.hash.slice(1) : void 0,
          g = !1,
          _ = () => {
            g ||=
              (r(
                u,
                L(m) ? m : void 0,
                h,
                n.location.pathname + n.location.search + n.location.hash,
                z(p) ? p : void 0,
                !0,
                s,
                !1
              ),
              !0);
          },
          v = c === `after-transition`;
        (await Promise.resolve(i(t.current, u, _))
          .then((e) => e?.updateCallbackDone)
          .catch(_)
          .finally(() => {
            v || f();
          }),
          await s.promise,
          v && f(),
          await n.navigation?.transition?.finished.catch(o_),
          Iv(),
          Ar(n.location.href));
      },
      [t, a, o, f, r, i, c]
    ),
    m = l(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Fr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                u.current = { resolve: e, reject: t };
              }),
                (u.current = void 0));
            },
            scroll: c,
          });
      },
      [c]
    );
  d(
    () => (
      n.addEventListener(`popstate`, p),
      Rv && n.navigation.addEventListener(`navigate`, m),
      () => {
        (n.removeEventListener(`popstate`, p),
          Rv && n.navigation.removeEventListener(`navigate`, m));
      }
    ),
    [p, m]
  );
}
async function Yr(e, t, r) {
  if (!e.path || !t) return !1;
  let i = cr(ir(e.path, t), r.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((n.location.href = n.location.origin + i), !0)
    : !1;
}
function Xr() {
  let e = jn();
  return l((t) => Zr({ ...t, collectionUtils: e }), [e]);
}
async function Zr(e) {
  let t = await lr(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!L(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await Yr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Qr(e, t) {
  let n = Lr(Ir());
  n &&
    Gr(() => {
      let r = Ir();
      if (!r || Lr(r) !== n) return;
      let i = { ...r.paginationInfo, [e]: t };
      Ur({ ...r, paginationInfo: i });
    });
}
function $r(e) {
  let t = T(Promise.resolve()),
    r = T(),
    i = l(
      (n) => {
        if (n.navigationType === `traverse` || !n.canIntercept) return;
        let i = r.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          n.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return l(
    (e, a, o) => {
      if (!Rv) {
        o?.();
        return;
      }
      ((t.current = e),
        (r.current = a),
        n.navigation.addEventListener(`navigate`, i),
        o?.(),
        e.finally(() => {
          t.current === e &&
            ((r.current = void 0), n.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [i]
  );
}
function ei(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function ti(e) {
  return ei(e.trim().toLowerCase().replace(zv, `-`));
}
function ni({ children: e, value: t }) {
  return v(Vv.Provider, { value: t, children: e });
}
function ri() {
  return w(Vv);
}
function ii(e, t) {
  let n = o(() => ({ inputs: t, result: e() }))[0],
    r = T(!0),
    i = T(n),
    a =
      r.current || (t && i.current.inputs && Rt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    d(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function ai(e, t) {
  return ii(() => e, t);
}
function oi() {
  return p.useContext(Gv);
}
function si() {
  return oi().activeLocale?.code ?? `en-US`;
}
function ci() {
  return p.useContext(Kv);
}
function li() {
  return n.location.search;
}
function ui() {
  return ``;
}
function di(e) {
  return (
    qv.add(e),
    n.addEventListener(`popstate`, e),
    () => {
      (qv.delete(e), n.removeEventListener(`popstate`, e));
    }
  );
}
function fi() {
  for (let e of qv) e();
}
function pi({ children: e, routerRenderKey: t, isNavigationCommitPending: r }) {
  let i = ri() === `preview`,
    [a, s] = o(``),
    c = T(t);
  Hv(() => {
    c.current = t;
  }, [t]);
  let d = ee(di, li, ui),
    f = u(d),
    p = t !== u(t),
    m = i ? a : p ? d : f,
    h = l(
      async (e) => {
        if (i) {
          j(() => {
            s((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let a = r(),
          o = t;
        if ((await bv({ continueAfter: `paint` }), a || r() || c.current !== o)) return;
        let l = Ir();
        if (!l) return;
        let u = new URL(n.location.href),
          d = e(u.searchParams).toString();
        u.search = d;
        let f = l.queryParamBackAnchorSearch,
          p = n.location.search.slice(1),
          m = f === void 0 && d !== p,
          h = f !== void 0 && d === f,
          g = { ...l, queryParamBackAnchorSearch: h ? void 0 : (f ?? (m ? p : void 0)) },
          _ = u.toString();
        (m || h ? Kr(g, _) : Ur(g, _), fi());
      },
      [r, i, t]
    ),
    g = ii(() => ({ urlSearchParams: new URLSearchParams(m), replaceSearchParams: h }), [m, h]);
  return v(Jv.Provider, { value: g, children: e });
}
function mi(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = hi(e),
    [r, i] = hi(t),
    a = gi(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function hi(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function gi(e, t) {
  if (e === t || ((e = `/` + _i(e)), (t = `/` + _i(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Zv(e, 1 + s);
    if (n !== Zv(t, 1 + s)) break;
    n === Xv && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Zv(t, 1 + s) === Xv) return $v(t, 1 + s + 1);
      if (s === 0) return $v(t, 1 + s);
    } else r > a && (Zv(e, 1 + s) === Xv ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Zv(e, s) === Xv) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${$v(t, 1 + o)}`;
}
function _i(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Zv(e, o);
    else if (ny(a)) break;
    else a = Xv;
    if (ny(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Zv(t, t.length - 1) !== Yv || Zv(t, t.length - 2) !== Yv) {
            if (t.length > 2) {
              let e = Qv(t, ty);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = $v(t, 0, e)), (n = t.length - 1 - Qv(t, ty))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          ey && ((t += t.length > 0 ? `${ty}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${ty}${$v(e, r + 1, o)}`) : (t = $v(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Yv && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function vi(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || n.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function yi(e, t, n) {
  let r = qt(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Sv, (e, t) => i[t] ?? e);
}
function bi(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    hashVariables: s,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
    localeSlug: p,
  }
) {
  let m = yi(a, e, s);
  if (u) return m ?? ``;
  let h = t ?? `/`;
  (r && f && (h = r[f] ?? h), i && (h = h.replace(Sv, (e, t) => String(i[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  o && (g = g.replace(Sv, (e, t) => String(o[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && o !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (c)
    if (ry.has(h) && n !== void 0) {
      let e = vi(d);
      g = mi(n.location.pathname, e + g);
    } else g = mi(h, g);
  else g = cr(g, p);
  let y = _ || v;
  return ((l || y) && (g = ar(g, y)), m && (g = `${g}#${m}`), g);
}
function xi(e) {
  return iy in e && e[iy] === 1;
}
function Si() {
  if (!ay) return;
  ((sy = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  ay.forEach((n) => t.addEventListener(n, oy, e));
}
function Ci() {
  return (
    d(() => {
      if (!sy || !ay) return;
      let e = { capture: !0 },
        t = document.body;
      (ay.forEach((n) => t.removeEventListener(n, oy, e)),
        (ay = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function wi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Ti(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Ei() {
  ((Dy = new Ey()), Dy.render.markStart());
}
function Di() {
  (M(() => {
    Dy?.useInsertionEffects.markRouterStart();
  }, []),
    r(() => {
      Dy?.useLayoutEffects.markRouterStart();
    }, []),
    d(() => {
      Dy?.useEffects.markRouterStart();
    }, []));
}
function Oi() {
  (M(() => {
    (Dy?.render.markEnd(), Dy?.useInsertionEffects.markStart());
  }, []),
    r(() => {
      if ((Dy?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Oy = !0;
        return;
      }
      Fe.read(() => {
        (Dy?.browserRendering.requestAnimationFrame.markStart(),
          Dy?.unattributedHydrationOverhead.measure());
      });
    }, []),
    d(() => {
      (Dy?.useEffects.markStart(),
        Dy?.browserRendering.hasStarted ||
          (Dy?.mutationEffects.measure(), Dy?.useEffects.markAreSynchronous()));
    }, []));
}
function ki() {
  (M(() => {
    Dy?.useInsertionEffects.markEnd();
  }, []),
    r(() => {
      (Dy?.useLayoutEffects.markEnd(),
        !(Oy || document.visibilityState !== `visible`) &&
          Fe.read(() => {
            (Dy?.browserRendering.requestAnimationFrame.markEnd(),
              bv().then(() => {
                Dy?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    d(() => {
      Dy?.useEffects.markEnd();
    }, []));
}
function Ai() {
  return (Oi(), null);
}
function ji() {
  return (ki(), null);
}
function Mi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return p.isValidElement(e) ? p.cloneElement(e, n) : v(e, { ...n });
}
function Ni() {
  return My;
}
function Pi(e) {
  if (Ny?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      B(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Li(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          B(t, `localizedPath must be defined`);
          let i = Li(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    Ny = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Ny.pathRoutes,
    paths: Ny.paths,
    pathRoutesLocalized: Ny.pathRoutesLocalized,
    pathsLocalized: Ny.pathsLocalized,
  };
}
function Fi(e, t, n = !0, r = Ni()) {
  return Ii(e, t, r, n);
}
function Ii(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Pi(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Ri(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Ri(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Ri(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Ri(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Li(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Ri(e, t) {
  let n = [],
    r = zi(t).replace(Sv, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function zi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Bi() {
  if (`PerformanceServerTiming` in n) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Vi(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Hi(e, t) {
  for (let [n, r] of t) Vi(e, n, r);
}
function Ui(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Wi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Gi(e, t) {
  if (n === void 0) return t;
  let r = t;
  if (t) {
    Wi(e, t);
    let n = e[t]?.abTestingParentId;
    n && (r = n);
  }
  return (Hi(e, Bi()), Ui(e), r);
}
function Ki(e) {
  (d(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    M(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function qi(e, ...t) {
  Py.has(e) || (Py.add(e), console.warn(e, ...t));
}
function Ji(e, t, n) {
  qi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Yi(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Ly in e &&
    e[Ly] instanceof Function &&
    Ry in e &&
    e[Ry] instanceof Function
  );
}
function Xi(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Iy(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Zi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Qi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function $i(e) {
  return Math.round(e * 2) / 2;
}
function ea(e, t) {
  return { x: e, y: t };
}
function ta(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function na(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ra(e) {
  let t = ia(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function ia(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function aa(e, t, n) {
  return (
    (Vy.rgb_r = e / 255),
    (Vy.rgb_g = t / 255),
    (Vy.rgb_b = n / 255),
    Vy.rgbToHsluv(),
    { h: Vy.hsluv_h, s: Vy.hsluv_s, l: Vy.hsluv_l }
  );
}
function oa(e, t, n, r = 1) {
  return (
    (Vy.hsluv_h = e),
    (Vy.hsluv_s = t),
    (Vy.hsluv_l = n),
    Vy.hsluvToRgb(),
    { r: Vy.rgb_r * 255, g: Vy.rgb_g * 255, b: Vy.rgb_b * 255, a: r }
  );
}
function sa(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function ca(e, t, n) {
  return {
    r: na(e) ? ha(e, 255) * 255 : 0,
    g: na(t) ? ha(t, 255) * 255 : 0,
    b: na(n) ? ha(n, 255) * 255 : 0,
  };
}
function la(e, t, n, r) {
  let i = [
    va(Math.round(e).toString(16)),
    va(Math.round(t).toString(16)),
    va(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ua(e, t, n) {
  let r,
    i,
    a = ha(e, 255),
    o = ha(t, 255),
    s = ha(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function da(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function fa(e, t, n) {
  let r, i, a;
  if (((e = ha(e, 360)), (t = ha(t * 100, 100)), (n = ha(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = da(s, o, e + 1 / 3)), (i = da(s, o, e)), (a = da(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function pa(e, t, n) {
  ((e = ha(e, 255)), (t = ha(t, 255)), (n = ha(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function ma(e, t, n) {
  ((e = ha(e, 360) * 6), (t = ha(t * 100, 100)), (n = ha(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function ha(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    ga(e) && (e = `100%`);
    let t = _a(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ga(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function _a(e) {
  return typeof e == `string` && e.includes(`%`);
}
function va(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function ya(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = By[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Hy.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Hy.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Hy.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: ra(r[2] ?? ``), l: ra(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Hy.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: ra(r[2] ?? ``),
              l: ra(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Hy.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: ra(r[2] ?? ``), v: ra(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Hy.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: ra(r[2] ?? ``),
                  v: ra(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Hy.hex8.exec(t))
                ? {
                    r: ba(r[1] ?? ``),
                    g: ba(r[2] ?? ``),
                    b: ba(r[3] ?? ``),
                    a: xa(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Hy.hex6.exec(t))
                  ? {
                      r: ba(r[1] ?? ``),
                      g: ba(r[2] ?? ``),
                      b: ba(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Hy.hex4.exec(t))
                    ? {
                        r: ba(`${r[1]}${r[1]}`),
                        g: ba(`${r[2]}${r[2]}`),
                        b: ba(`${r[3]}${r[3]}`),
                        a: xa(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Hy.hex3.exec(t))
                      ? {
                          r: ba(`${r[1]}${r[1]}`),
                          g: ba(`${r[2]}${r[2]}`),
                          b: ba(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ba(e) {
  return parseInt(e, 16);
}
function xa(e) {
  return ba(e) / 255;
}
function Sa(e) {
  let t = Uy.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Ca(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function wa({ r: e, g: t, b: n, a: r }) {
  return { r: Ca(e), g: Ca(t), b: Ca(n), a: r };
}
function Ta(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Ea({ r: e, g: t, b: n, a: r }) {
  return { r: Ta(e), g: Ta(t), b: Ta(n), a: r };
}
function Da({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Oa(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function ka({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Oa(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Aa(e) {
  return qy(Ky(e));
}
function ja(e) {
  return Gy(Wy(e));
}
function Ma(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Fa({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Na(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Fa(e)
              : Ia(e)),
    i
  );
}
function Na(e) {
  let t = ya(e);
  if (t) return t.format === `hsl` ? Ia(t) : t.format === `hsv` ? Pa(t) : Fa(t);
}
function Pa(e) {
  let t = ma(e.h, e.s, e.v);
  return { ...ua(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : La(e.a) };
}
function Fa(e) {
  let t = ca(e.r, e.g, e.b);
  return { ...ua(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : La(e.a) };
}
function Ia(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = na(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = na(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = ia(e.s)),
    (r = na(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = ia(e.l)),
    (i = fa(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function La(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ra() {
  return K.location.origin === `https://screenshot.framer.invalid`;
}
function za({ children: e }) {
  if (w(sb).top) return v(k, { children: e });
  let t = T({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = T({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = T(new Set()).current,
    i = T({
      getLayoutId: l(({ id: e, name: i, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = i ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = i || e;
        if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            r.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            B(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === i;
              d && !r.has(d) && (!i || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === i;
            if (u && !r.has(u) && (!i || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, i] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = i || f || e,
          { layoutId: m, value: h } = Ba(p, (t.current.count[o][p] ?? -1) + 1, r);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), r.add(m), m);
      }, []),
      persistLayoutIdCache: l(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          r.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return v(sb.Provider, { value: i, children: e });
}
function Ba(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Va({ enabled: e = !0, ...t }) {
  let n = w(sb),
    r = c(() => ({ ...n, enabled: e }), [e]);
  return v(sb.Provider, { ...t, value: r });
}
function Ha(e) {
  let t = T(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Ua(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Wa(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return E(`div`, {
    style: lb,
    children: [
      v(`div`, { className: `text`, style: db, children: r }),
      i && v(`div`, { className: `text`, style: fb, children: i }),
    ],
  });
}
function Wa(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Ga() {
  let e = J.current();
  return e === J.canvas || e === J.export;
}
function Ka() {
  let [e] = o(() => Ga());
  return e;
}
function qa(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Ja(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Sb) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Ya(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Xa(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Cb) continue;
    let n = Ya(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Ya(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Za(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of xb) {
    let n = Ya(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Qa(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Za(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Xa(n, t, Ja(t.pixelWidth, t.pixelHeight)) };
}
function $a() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: vt(Y.imagePlaceholderSvg),
  };
}
function eo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function to(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function no(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...bb,
    objectPosition: to(e.positionX, e.positionY),
    objectFit: eo(e.fit),
  };
}
function ro(e) {
  let t = p.useRef(e ? `auto` : `async`),
    n = l((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = l(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = l(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function io({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Y.useImageSource(e, t, n),
    s = no(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = ro(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Qa(e.nodeFixedSize, e, o);
  return v(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function ao({ image: e, containerSize: t, nodeId: n }) {
  let r = p.useRef(null),
    i = Y.useImageElement(e, t, n),
    a = no(e);
  return (
    p.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    v(`div`, { ref: r, style: { display: `contents`, ...bb } })
  );
}
function oo({ nodeId: e, image: t, containerSize: n }) {
  let r = p.useRef(null),
    i = Y.useImageSource(t, n, e);
  return (
    p.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = no(t);
      Y.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    v(`div`, { ref: r, style: { display: `contents`, ...bb } })
  );
}
function so({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (L(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = R(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = $i(e * (t.pixelWidth / 2)),
        s = Y.useImageSource(t, n);
      ((r = {
        ...wb,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: to(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        J.current() === J.canvas
          ? Y.canRenderOptimizedCanvasImage(Y.useImageSource(t))
            ? v(oo, { image: t, ...n })
            : v(ao, { image: t, ...n })
          : v(io, { image: t, avoidAsyncDecoding: J.current() === J.export, ...n });
  let o = a ? wb : (r ?? { ...wb, ...$a() });
  return i
    ? v(P.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : v(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function co(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function lo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...bb,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), v(P.div, { style: n }))
    : (co(e, n, !1), v(P.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function uo(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function fo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Eb.isImageObject(t)) return;
  let r = null;
  if (((r = L(n) ? { alt: ``, src: n } : Iy.get(t, null)), Eb.isImageObject(r))) return uo(r, e);
}
function po(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function mo(e) {
  return typeof e != `string` && typeof e != `number`;
}
function ho(e) {
  return e != null && typeof e != `boolean` && !po(e);
}
function H(e) {
  return Number.isFinite(e);
}
function go(e) {
  return (Math.PI / 180) * e;
}
function _o(e) {
  return dt(e) ? !1 : e === 2 || e === 5;
}
function vo(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function yo(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return bo(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function bo(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      V(e, `unknown constraint key`);
  }
}
function xo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(yo(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(yo(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function So(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(yo(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(yo(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Co(e, t, n, r, i) {
  let a = So(H(e) ? e : jb, n, r, i),
    o = xo(H(t) ? t : Mb, n, r, i);
  return (
    H(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (H(n.left) && H(n.right)
        ? (o = a / n.aspectRatio)
        : (H(n.top) && H(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function wo(e, t) {
  return !H(e) || !H(t) ? null : e + t;
}
function To(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Eo(e) {
  return !e._constraints || To(e) ? !1 : e._constraints.enabled;
}
function Do(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    H(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    H(n) && H(r) ? { width: n, height: r } : null
  );
}
function Oo(e) {
  let t = Do(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return H(n) && H(r) ? { x: n, y: r, ...t } : null;
}
function ko(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Eo(e) || r) return Oo(e);
  let i = Ao(e),
    a = jo(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Ab.toRect(i, o, null, n, null);
}
function Ao(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = kb.quickfix({
      left: H(t),
      right: H(n),
      top: H(r),
      bottom: H(i),
      widthType: vo(c),
      heightType: vo(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function jo(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Mo() {
  return p.useContext(Nb).parentSize;
}
function No(e) {
  return typeof e == `object`;
}
function Po(e) {
  return No(e) ? e.width : e;
}
function Fo(e) {
  return No(e) ? e.height : e;
}
function Io(e, t) {
  return v(Pb, { parentSize: t, children: e });
}
function Lo(e) {
  return ko(e, Mo(), !0);
}
function Ro({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function zo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Bo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? P[e] : P.div;
}
function Vo(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Ho(e, t, n = Ib) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Lb) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Lb = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Lb;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Uo() {
  return Ra() ? J.preview : J.current();
}
function Wo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? qb.variable(e) : e === `` ? `""` : e;
}
function Go(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Ko(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return qo(r);
    case `lower-roman`:
    case `upper-roman`:
      return Yo(r);
    default:
      return Ko(r);
  }
}
function Ko(e) {
  return String(e).length;
}
function qo(e) {
  let t = 1;
  for (; Jo(t) < e; ) t++;
  return t;
}
function Jo(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function Yo(e) {
  let t = 0;
  for (let n of Xb) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Xo(e, t) {
  return qb.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Zo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Qo() {
  return J.current() === J.preview ? hx.value : mx.value;
}
function $o(e) {
  return Vb(e, Qo, `framer-lib-combinedCSSRules`);
}
function es(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function ts(e) {
  let t = {};
  return (!e || !gx || J.current() !== J.canvas || es(t, e), t);
}
function ns(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function rs(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = p.Children.map(t, (e) =>
        p.isValidElement(e) ? p.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function is(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function as(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = w(sb);
  return c(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !i || o)) return;
    let d = c || l({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [u]);
}
function os() {
  let [e, t] = p.useState(0);
  return p.useCallback(() => t((e) => e + 1), []);
}
function ss(e) {
  let t = os();
  d(() => {
    let n = e?.current;
    if (n)
      return (
        yx?.observeElementWithCallback(e.current, t),
        () => {
          yx?.unobserve(n);
        }
      );
  }, [e, t]);
}
function cs(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(bx)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(ls)
    .map(us);
}
function ls(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function us(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(ls);
  return t ? us(t) : e;
}
function ds(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = w(_x),
    l = J.current() === J.canvas;
  Hv(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && Y.queueMeasureRequest(ns(i), t.current, n(t.current)));
  });
}
function fs(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Y.queueMeasureRequest(ns(t.id), t, cs(t));
}
function ps(e) {
  e.willChange = `transform`;
  let t = J.current() === J.canvas;
  Cx && t && (e.translateZ = xx);
}
function ms(e) {
  ((e.willChange = `transform`), hs(e, !0));
}
function hs(e, t) {
  let n = J.current() === J.canvas;
  if (!Cx || !n) return;
  let r = (L(e.transform) && e.transform) || ``;
  t ? r.includes(Sx) || (e.transform = r + Sx) : (e.transform = r.replace(Sx, ``));
}
function gs(e, t, n, r = !0) {
  if (!e) return;
  let i = pb(e.style),
    a = n || i[t],
    o = () => {
      _s(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function _s(e) {
  return L(e) || R(e) || ft(e);
}
function vs(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function ys(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  vs(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function bs(e, t) {
  let n = [e, t];
  return Dx.test(e) ? e : ys(1e3, Ox, n, () => Ex.multiplyAlpha(e, t));
}
function xs(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: bs(e.value, t) }))
  );
}
function Ss(e, t) {
  let n = 0;
  return (
    xs(e, t).forEach((e) => {
      n ^= Tx(e.value) ^ e.position;
    }),
    n
  );
}
function Cs(e) {
  return e && kx.every((t) => t in e);
}
function ws(e) {
  return e && Ax.every((t) => t in e);
}
function Ts({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Xy(t)
      ? (n.backgroundColor = t)
      : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e))
    : e &&
      ((e = Iy.get(e, null)),
      typeof e == `string` || Xy(e)
        ? (n.background = e)
        : Mx.isLinearGradient(e)
          ? (n.background = Mx.toCSS(e))
          : Px.isRadialGradient(e)
            ? (n.background = Px.toCSS(e))
            : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e)));
}
function U(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Es(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Ds(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Os(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    it(n)
      ? (t.cornerShape = he(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    U(e, `size`, t),
    U(e, `width`, t),
    U(e, `height`, t),
    U(e, `minWidth`, t),
    U(e, `minHeight`, t),
    U(e, `top`, t),
    U(e, `right`, t),
    U(e, `bottom`, t),
    U(e, `left`, t),
    U(e, `position`, t),
    U(e, `overflow`, t),
    U(e, `opacity`, t),
    e._border?.borderWidth || U(e, `border`, t),
    U(e, `borderRadius`, t),
    U(e, `radius`, t, `borderRadius`),
    U(e, `color`, t),
    U(e, `shadow`, t, `boxShadow`),
    U(e, `x`, t),
    U(e, `y`, t),
    U(e, `z`, t),
    U(e, `rotate`, t),
    U(e, `rotateX`, t),
    U(e, `rotateY`, t),
    U(e, `rotateZ`, t),
    U(e, `scale`, t),
    U(e, `scaleX`, t),
    U(e, `scaleY`, t),
    U(e, `skew`, t),
    U(e, `skewX`, t),
    U(e, `skewY`, t),
    U(e, `originX`, t),
    U(e, `originY`, t),
    U(e, `originZ`, t),
    Ts(e, t),
    t
  );
}
function ks(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof pb(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function As(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (Ix.has(t)) return `pointer`;
}
function js(e) {
  return Ms(e) ? !0 : e.style ? !!Ms(e.style) : !1;
}
function Ms(e) {
  return Lx in e && (e[Lx] === `scroll` || e[Lx] === `auto`);
}
function Ns(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = ge(e.minWidth),
    h = ge(e.minHeight),
    g = ge(e.maxWidth),
    _ = ge(e.maxHeight);
  return {
    top: ge(n),
    left: ge(t),
    bottom: ge(r),
    right: ge(i),
    width: ge(a),
    height: ge(o),
    size: ge(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Ps(e) {
  let t = w(_x),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Ns(e),
    s = Lo(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: J.current() === J.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !ks(e) && !e.__fromCanvasComponent && !js(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = p.Children.count(e.children) > 0 &&
      p.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    f = Os(e);
  (a === void 0 && !i && (Es(f) || (c.width = Rx.width), Ds(f) || (c.height = Rx.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let m = {};
  (Eo(o) &&
    s &&
    !Ro(e) &&
    (m = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, m, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    wx.applyWillChange(e, c, !0));
  let h = c;
  c.transform || (h = { x: 0, y: 0, ...c });
  let g = Ga();
  return (
    e.positionSticky
      ? (!g || Y.isOnPageCanvas || t) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = Y.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, s]
  );
}
function Fs(e) {
  let t = {};
  for (let n in e)
    (ye(n) || hb(n)) && !zx.has(n)
      ? (t[n] = pb(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof pb(e)[n] != `boolean` && !e.transition && (t.transition = pb(e)[n]));
  return t;
}
function Is(e) {
  return `data-framer-name` in e;
}
function Ls(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Rs(e) {
  return v(P.div, { layoutId: Hx, style: Gx, children: e.children });
}
function zs(e, t) {
  st(e) ? e(t) : Bs(e) && (e.current = t);
}
function Bs(e) {
  return z(e) && `current` in e;
}
function Vs() {
  let e = Ha(() => new Set()),
    t = Ha(() => new Map());
  return Ha(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Hs(e) {
  let t = T(null),
    n = Vs();
  return Ha(() => (Bs(e) ? n(e) : st(e) ? n(t, e) : n(t)));
}
function Us(e, t, n) {
  let r = T(),
    i = T();
  (ii(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Ws(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Kx({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Gs(e, t, n) {
  let r = Ha(() => `${n.rootMargin}`),
    i = w(qx),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Us(
    e,
    (e) => {
      if (a && e !== null) return Ws(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Ks(e, t, n) {
  let r = p.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  Jx(
    e,
    p.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Js(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: Yx, rootMargin: s, enabled: i ?? !0 }
  );
}
function qs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, K.innerHeight);
}
function Js({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && qs(t, e) >= r;
}
function Ys() {
  return new Map();
}
function Xs() {
  return Ha(Ys);
}
function Zs(e, t = []) {
  let { register: n, deregister: r } = w(eS);
  d(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function Qs(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function $s(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (H(t.originX) && (r.originX = t.originX),
      H(t.originY) && (r.originY = t.originY),
      H(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (H(n.originX) && (r.originX = n.originX),
      H(n.originY) && (r.originY = n.originY),
      H(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function ec(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function tc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return oS.PushLeft;
    case `left`:
      return oS.PushRight;
    case `bottom`:
      return oS.PushUp;
    case `top`:
      return oS.PushDown;
  }
}
function nc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return oS.OverlayLeft;
    case `left`:
      return oS.OverlayRight;
    case `bottom`:
      return oS.OverlayUp;
    case `top`:
      return oS.OverlayDown;
  }
}
function rc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return oS.FlipLeft;
    case `left`:
      return oS.FlipRight;
    case `bottom`:
      return oS.FlipUp;
    case `top`:
      return oS.FlipDown;
  }
}
function ic(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return oc(e, t.transition, t.component);
    case `removeOverlay`:
      return sc(e);
    case `add`:
      return cc(e, t.key, t.transition, t.component);
    case `remove`:
      return dc(e);
    case `update`:
      return ac(e, t.key, t.component);
    case `back`:
      return lc(e);
    case `forward`:
      return uc(e);
    default:
      return;
  }
}
function ac(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function oc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function sc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function cc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? gc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = mc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = fc(e, t, c),
    p = hc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function lc(e) {
  let t = { ...e.containers },
    n = dc(e);
  if (n) return ((n.containers = t), n);
}
function uc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = cc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function dc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (B(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = pc(e, r, n),
    u = hc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function fc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function pc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function mc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function hc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = _c(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function gc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function _c(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return vc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return vc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return vc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return vc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function vc(e, t, n) {
  let r = {},
    i = {};
  return (
    cS.forEach((e) => {
      ((r[e] = rS[e]), (i[e] = { ...n, from: rS[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${pb(rS)[a]}%` : pb(rS)[a];
        ((pb(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function yc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function bc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function xc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : fS;
}
function Sc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Cc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function wc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function Tc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Ec(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Dc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function Oc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return fS;
}
function kc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Ac(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function jc(e) {
  return p.Children.map(e.component, (t) => {
    if (!ho(t) || !mo(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? z(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      p.cloneElement(t, n)
    );
  });
}
function Mc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Nc(e, t) {
  let n = de(),
    r = ot();
  return v(dS, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Pc(e) {
  return z(e) || st(e);
}
function Fc(e) {
  return !!e && hS in e && e[hS] === !0;
}
function Ic(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return ct(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return dt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return lt(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return lt(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = z(e.defaultValue) ? e.defaultValue : {};
        return (z(e.controls) && Lc(t, e.controls), t);
      }
      case `array`:
        return lt(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Lc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!dt(i) || Fc(r)) continue;
    let a = Ic(r);
    dt(a) || (e[n] = a);
  }
}
function Rc(e) {
  if (z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function zc(e, t) {
  Pc(e) && Lc(Rc(e), t);
}
function Bc(e, t) {
  (Object.assign(e, { propertyControls: t }), zc(e, t));
}
function Vc(e) {
  return e.propertyControls;
}
function Hc(e) {
  return xS in e;
}
function Uc(e, t) {
  if (!Hc(e)) return;
  let n = Iy.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Wc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Gc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Kc(e, t) {
  let n = [];
  (H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    H(e.invert) && n.push(`invert(${e.invert / 100})`),
    H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    H(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Wc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function qc(e, t) {
  H(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Jc(e, t) {
  (qc(e, t), Kc(e, t));
}
function Yc(e, t) {
  let n,
    r = (...r) => {
      (K.clearTimeout(n), (n = K.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      K.clearTimeout(n);
    }),
    r
  );
}
function Xc(...e) {
  return e.filter(Boolean).join(` `);
}
function Zc(e) {
  if (e.startsWith(ES)) return e.substr(DS);
}
function Qc(e, n, r) {
  let a = i.map(e, (e) => (b(e) ? t(e, n) : e));
  return r ? a : v(k, { children: a });
}
function $c(e) {
  let t = Ha(() => el(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function el(e) {
  let n = { forwardedRef: e, childRef: null, ref: null };
  n.ref = tl(n);
  let r = (e, t) => {
      if (!n.forwardedRef && n.forwardedRef === e) {
        n.ref = t;
        return;
      }
      let r = !1;
      (n.childRef !== t && ((n.childRef = t), (r = !0)),
        n.forwardedRef !== e && ((n.forwardedRef = e), (r = !0)),
        r && (n.ref = tl(n)));
    },
    a = !1;
  function o(o, s) {
    if (a)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (a = !0),
      i.count(o) > 1 && e && ((n.forwardedRef = void 0), (n.ref = n.childRef)),
      i.map(o, (e) => {
        if (b(e)) {
          let i = `ref` in e ? e.ref : void 0;
          r(n.forwardedRef, i);
          let a = st(s) ? s(e.props) : s;
          return t(e, n.ref === i ? a : { ...a, ref: n.ref });
        }
        return e;
      })
    );
  }
  let s = function (e, t) {
    return v(k, { children: o(e, t) });
  };
  return (
    (s.cloneAsArray = o),
    {
      useSetup: (e) => {
        ((a = !1), r(e, n.childRef));
      },
      cloneAsElement: s,
    }
  );
}
function tl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (zs(n, e), zs(t, e));
  };
}
function nl(e, t, n, r, i, a, o, s) {
  let c = p.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !p.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !ol(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = al([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = al([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = v(
        kS.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = il(e, a, r);
    (f.length
      ? (B(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = v(
          `div`,
          { className: `${AS} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : B(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    B(!s || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? m : [...m, v(`div`, { className: jS }, `property-overrides-separator`)]
  );
}
function rl(e) {
  return e.split(`-`)[2];
}
function il(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${rl(a)}`);
  }
  return r;
}
function al(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function ol(e, t) {
  for (let n of Object.keys(t)) if (!Rt(e[n], t[n], !0)) return !0;
  return !1;
}
function sl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function cl(e) {
  return p.forwardRef(({ optimized: t, ...n }, r) => {
    let i = p.useContext(OS),
      a = p.useContext(kS)?.variants,
      o = n[zS];
    o && !Vn() && LS.setAll(o, a, t ? n : null, i);
    let s = VS(n);
    return v(e, { ref: r, ...n, ...s });
  });
}
function ll(e) {
  return L(e) || Array.isArray(e);
}
function ul(e) {
  return e in WS;
}
function dl(e, t) {
  let n = Ha(() => ({ values: US(t ? e : void 0) }));
  return (
    p.useEffect(() => {
      if (!t)
        for (let e of HS) {
          let t = WS[e];
          dt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function fl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  s
) {
  let u = Ye(),
    f = Ha(US),
    p = T(!1),
    m = JS(),
    h = T(null),
    g = l(async () => {
      if (!i) return;
      let e = n || void 0,
        t = p.current && r === `mirror`,
        a = t ? WS : i,
        o = t ? i : WS;
      return (
        (p.current = !p.current),
        (h.current = Promise.all(
          HS.map((t) => {
            if (!(u && t !== `opacity`))
              return (
                f[t].jump(o[t] ?? WS[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Pe(f[t], i, r);
                })
              );
          })
        )),
        h.current
      );
    }, [i, r, n, u]),
    [_, v] = o(!1),
    y = T(!1),
    b = l(async () => {
      !e || !y.current || (await g(), await m(t ?? 0), b());
    }, [g, m, e, t]),
    x = l(() => {
      y.current || ((y.current = !0), j(() => v(!0)), b());
    }, [b]),
    S = l((e = !0) => {
      (HS.forEach((e) => {
        f[e].stop();
      }),
        HS.forEach((e) => {
          f[e].set(WS[e]);
        }),
        (p.current = !1),
        e && ((y.current = !1), j(() => v(!1))));
    }, []),
    C = e && i,
    w = l(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (d(() => {
    if (C)
      return (
        document.addEventListener(`visibilitychange`, w),
        () => {
          document.removeEventListener(`visibilitychange`, w);
        }
      );
  }, [C, w]),
    d(() => {
      (C && a) || (C ? x() : S());
    }, [x, S, a, C]),
    d(() => () => S(), [S]));
  let E = T(!1),
    D = l(async () => {
      h.current && (await h.current, !E.current && S());
    }, [S]);
  Jx(
    s,
    l(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    ),
    { enabled: C && a }
  );
  let O = _ || !a;
  return c(() => ({ values: f, style: C && O ? GS : KS }), [C, O]);
}
function pl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function ml(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = p.useRef(null),
    c = Ye(),
    l = p.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : pl(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = we(),
    d = Te(u, l),
    f = le(a && s.current === null ? `hidden` : n),
    m = le(0),
    h = w(qx);
  return (
    Us(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Ws(h, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            Fe.update(() => {
              (d.set(l(u.get())), a && f.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Gt(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? m : d }, style: o ? { ...GS, visibility: f } : KS }
  );
}
function hl(e) {
  return typeof e == `object` && !!e;
}
function gl(e) {
  if (hl(e)) return e?.transition;
}
function _l(e, t, n, r, i, a) {
  let o = gl(e);
  return Promise.all(
    HS.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = hl(e) ? (e?.[s] ?? WS[s]) : WS[s];
          if ((it(u) && (u = u.get()), !R(u))) return c();
          let d = _e.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (L(i) && !l?.hasAnimated && K.MotionHandoffAnimation) {
            let e = K.MotionHandoffAnimation(i, s, Fe);
            e && (f = e);
          }
          a ? l.set(u) : Pe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function vl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  l,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = ce(),
    g = T({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Ha(() => {
      let e = d ?? l;
      if (!z(e)) return { values: US() };
      let t = {};
      for (let n in e) {
        let r = z(e) ? e[n] : void 0;
        R(r) && (t[n] = r);
      }
      return { values: US(t) };
    });
  Us(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = _e.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!ul(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, R(t) ? t : WS[e]);
        }
      }
    },
    [f]
  );
  let v = Ye();
  Us(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            _l(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              _l(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Rt(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      _l(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && f;
  return c(() => ({ values: _.values, style: y ? GS : KS }), [y]);
}
function yl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function bl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = yl(o.current, document.documentElement) - ZS - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function xl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Sl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Wt();
  p.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return Be((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = xl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < QS) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Cl(e, t, n) {
  let r = bl(e, t),
    i = [...eC],
    a = r[0];
  if (!R(a)) return tC;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!R(e)) return tC;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function wl(e) {
  return {
    x: e?.x ?? WS.x,
    y: e?.y ?? WS.y,
    scale: e?.scale ?? WS.scale,
    opacity: e?.opacity ?? WS.opacity,
    transformPerspective: e?.transformPerspective ?? WS.transformPerspective,
    rotate: e?.rotate ?? WS.rotate,
    rotateX: e?.rotateX ?? WS.rotateX,
    rotateY: e?.rotateY ?? WS.rotateY,
    skewX: e?.skewX ?? WS.skewX,
    skewY: e?.skewY ?? WS.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Tl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return p.useMemo(
    () => ({
      initial: r ?? wl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? wl({ opacity: t }),
      exit: i ?? wl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function El(e, t) {
  let n = Ye(),
    r = Tl(e),
    i = e.styleAppearEffectEnabled,
    a = dl(i ? r.initial : r.animate, i),
    o = p.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Wt(),
    l = p.useRef(),
    u = p.useCallback(async ({ transition: i, ...o }, s) => {
      let c = i ?? r.animate.transition ?? e.transition;
      await l.current;
      let u = _e.get(t.current);
      l.current = Promise.all(
        HS.map((e) => {
          s && a.values[e].set(r.initial[e] ?? WS[e]);
          let t = o[e] ?? WS[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (R(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && Pe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  Ks(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    p.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return Be((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Cl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = me(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = pb(r)[l];
        d && u(d);
      });
    }, [s, f]),
    Sl(e.scrollDirection, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Gt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of HS) a.values[e].set(r.initial?.[e] ?? WS[e]);
    }),
    c(() => ({ values: a.values, style: i ? GS : KS }), [i])
  );
}
function Dl(e, t) {
  let n = p.useRef({});
  p.useEffect(() => {
    if (t !== void 0)
      for (let r of b_(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Je({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Fe.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Ol(e, t) {
  let n = iC();
  return {
    inputRange: bl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of HS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function kl(e) {
  let t = iC();
  for (let { target: n } of e) for (let e of HS) t[e]?.push(n[e]);
  return t;
}
function Al(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = Ye(),
    c = dl(rC(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Wt();
  return (
    r(() => {
      if (!(l || !u))
        return Be((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = Ol(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of HS)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(me(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    Us(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = kl(n);
        return Be(
          (e, { y: t }) => {
            for (let e of HS)
              (s && e !== `opacity`) ||
                (aC.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(me(t.progress, aC, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    Dl(c.values, i),
    Gt(() => {
      if (l) return;
      let e = rC(n, s);
      for (let t of HS) c.values[t].set(e?.[t] ?? WS[t]);
    }),
    p.useMemo(() => ({ values: c.values, style: t ? GS : KS }), [t])
  );
}
function jl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Ml(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Zc(n);
    if (r) {
      for (let i of sC)
        if (oC[i]?.has(r)) {
          t[i][r] = pb(e)[n];
          break;
        }
    } else t.forwardedProps[n] = pb(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = jl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = jl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Nl(e) {
  return z(e) && uC in e;
}
function Pl(e, t) {
  if (!e || !z(e)) return t;
  for (let n in e) {
    let r = e[n];
    !it(r) || !ul(n) || (R(r.get()) && t[n].push(r));
  }
}
function Fl(e) {
  return L(e) || Array.isArray(e);
}
function Il({ componentIdentifier: e, children: t }) {
  return t(w(fC)[e] ?? {});
}
function Ll() {
  return p.useContext(pC);
}
function Rl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function zl() {
  if (n === void 0 || yC)
    return v(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw xC;
}
function Bl({ children: e }) {
  return w(CC) ? v(k, { children: e }) : v(D, { fallback: SC, children: e });
}
function Vl() {
  return v(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Hl(e, t) {
  if (!s_ || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  bn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Ul(...e) {
  console.error(...e);
}
function Wl() {
  return J.current() !== J.canvas;
}
function Gl({ getErrorMessage: e, fallback: t, children: n }) {
  return Wl()
    ? v(Kl, { fallback: t, children: v(TC, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Kl({ children: e, fallback: t = wC }) {
  return n === void 0 ? v(D, { fallback: t, children: e }) : v(Bl, { children: e });
}
function ql() {
  return p.useContext(DC);
}
function Jl() {
  let e = ql();
  return p.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function Yl({ children: e, scopeId: t, nodeId: n }) {
  let r = ql(),
    i = p.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return v(DC.Provider, { value: i, children: e });
}
function Xl(e, t) {
  return `${OC}${e}:${t}`;
}
function Zl(e, t) {
  return $l(`component`, e, t);
}
function Ql(e, t) {
  return $l(`override`, e, t);
}
function $l(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Xl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function eu(e, t, n, r, i, a) {
  let o = nu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function tu(e, t, n, r) {
  return nu(e, t, n, r);
}
function nu(e, t, n, r) {
  return !!(dt(n) || (n === 1 && r && e === t));
}
function ru(e, t, n, r, i, a) {
  let o = ql();
  if (dt(t) || dt(n)) return v(EC, { children: e });
  let { disableCustomCode: s } = _C();
  return s && r
    ? v(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (eu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = v(Gl, { getErrorMessage: Zl.bind(null, t, n), fallback: null, children: e })),
      i && (e = v(Yl, { scopeId: t, nodeId: n, children: e })),
      e);
}
function iu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function au(e) {
  return !(!e || e.placement || e.alignment);
}
function ou(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      V(e);
  }
}
function su(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${ou(t)}, -100%`;
    case `right`:
      return `0%, ${ou(t)}`;
    case `bottom`:
      return `${ou(t)}, 0%`;
    case `left`:
      return `-100%, ${ou(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function cu(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(LC)) {
      let e = n.getAttribute(LC);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function lu(e) {
  let { registerCursors: t } = w(jC),
    n = Ha(() => e),
    i = _();
  r(() => t(n, i), [t, i]);
}
function uu(e) {
  return !!(e && typeof e == `object` && zC in e);
}
function du(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function fu() {
  return J.current() === J.canvas;
}
function pu(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function mu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function hu(e, t, n, r) {
  if (L(e)) {
    let i = pu(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = Fi(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function gu(e) {
  return L(e) && e.startsWith(`data:${KC}`);
}
function _u(e) {
  if (gu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(KC.length),
        r = t.searchParams,
        i = r.has(HC) ? r.get(HC) : void 0,
        a,
        o = r.get(UC),
        s = r.get(WC),
        c = r.get(GC);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function vu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = _u(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function yu(e) {
  if (!gu(e)) return e;
  let t = _u(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: bu(i) };
}
function bu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function xu(e, t, n, r, a, o) {
  let s = w(qC),
    u = Jl(),
    d = c(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: u }), [t, n, u]),
    f = Vt(),
    p = Ut(),
    { locales: m } = oi(),
    h = c(() => {
      let e = uu(r) ? r : yu(r);
      if (e) return hu(e, f, p, m);
    }, [p, r, f, m]),
    g = !!(!fu() && s?.nodeId && d.nodeId),
    _ = l(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), qn(e))) {
            wu(a.href, ``, `_blank`);
            return;
          }
          h ? a.navigate?.() : wu(a.href, a.rel, a.target);
        }
      },
      [a, h]
    ),
    y = l(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), wu(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = l(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : wu(a.href, a.rel, a.target));
      },
      [a, h]
    );
  Us(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (i.forEach(e, (e) => {
        Cu(e) &&
          (B(
            Su(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          B(
            Su(d),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          VC.collectNestedLink(s, d));
      }),
      (x = i.map(e, (e) => {
        if (!Cu(e)) return e;
        let t = Tu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: y,
            onKeyDown: b,
            as: r.as && Tu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return A(t, { ...i, ref: a }, n);
      }))),
    v(qC.Provider, { value: d, children: x })
  );
}
function Su(e) {
  return !dt(e?.nodeId);
}
function Cu(e) {
  return b(e) && (Tu(e.type) !== e.type || Tu(e.props.as) !== e.props.as);
}
function wu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Tu(e) {
  return e === `a` ? `span` : ke(e) && F(e) === `a` ? P.span : e;
}
function Eu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Eu(e.parentElement, t)
      : null;
}
function Du({ children: e }) {
  return v(Bl, { children: e });
}
function Ou(e) {
  return h(function (t, n) {
    return v(Du, { children: v(e, { ...t, ref: n }) });
  });
}
function ku(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return ju(e, t, o, s, a, c, l, i, r);
}
function Au(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && pu(t))
    try {
      let [i, a] = t.split(`#`, 2);
      B(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      B(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = Fi(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function ju(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = bi(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Mu() {
  let e = w(QC),
    t = Ut()?.pathVariables;
  return e || t;
}
function Nu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(ZC)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Pu() {
  let e = N.connection || N.mozConnection || N.webkitConnection || {},
    t = N.deviceMemory && N.deviceMemory > tw,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? nw : rw));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: ew }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = ow.get(n);
    if (!a?.size || aw.has(n)) return;
    (++s, aw.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), iw.delete(t));
    for (let e of a) (o.unobserve(e), iw.delete(e));
    (a.clear(), ow.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = iw.get(e);
      if (!n || aw.has(n.id)) {
        (o.unobserve(e), iw.delete(e));
        continue;
      }
      let r = n.id,
        a = ow.get(r),
        l = ow.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : ow.set(r, new Set([e])), setTimeout(c, $C, n, e));
      } else (a && a.delete(e), l <= 1 && ow.delete(r));
    }
  }
  return (e, t, n) => {
    if (!aw.has(n))
      return (
        iw.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (iw.delete(e), o.unobserve(e));
        }
      );
  };
}
function Fu(e, t) {
  let n = pu(e),
    r = {
      href: e === `` || mu(e, n) ? e : `https://${e}`,
      target: Iu(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = ar(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Iu(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Lu(e, t) {
  console.warn(
    bt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Ru(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Lu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return _t(i) ? i.catch(Lu) : i;
  } catch (e) {
    Lu(e);
  }
}
function zu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Ru(o, r, n);
      _t(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Bu() {
  let e = jn();
  return l((t, n, r, i = []) => zu(t, n, r, e, i), [e]);
}
function Vu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = jn();
  return l(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = uu(r) ? r : yu(r);
      if (!uu(c))
        return bn(
          `published_site_click`,
          {
            ...s,
            href: o ? Hu(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (L(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (_t(n) ? await n : n) ?? null;
        }
      }
      return bn(
        `published_site_click`,
        {
          ...s,
          href: o ? Hu(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Hu(e) {
  try {
    let t = new URL(e, K.document.baseURI);
    return t.origin === K.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Uu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Wu(e, t, n) {
  return async (r) => {
    let i = qn(r),
      a = Eu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await bv({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Gu(e, t, n, r, i, a, o, s) {
  if (!n) return Fu(e, r);
  let c = Au(t, e, s, o);
  if (!c) return Fu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Fu(e, r);
  let m = bi(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !c_,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Iu(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) =>
      Uu(
        t,
        l,
        () =>
          i(l, _, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      );
  return {
    href: m,
    target: h,
    onClick: Wu(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && Nu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, _, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Ku(e, t, n) {
  let r = qu(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (st(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (st(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function qu(e, t) {
  let n = z(e) ? e : void 0,
    r = n && !ut(n),
    i = t && !ut(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Ju(e, t, n) {
  if (!(t && Fn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Yu } : { ...i, onTap: r }) : e;
}
function Yu(e) {
  let t = Eu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Xu(e, t, n, r, i, a) {
  let o = uu(e) ? e : yu(e);
  if (!uu(o)) return L(e) ? Fu(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (_t(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return bi(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function Zu({ EditorBar: e, fast: t = !1 }) {
  let n = w(lw),
    r = ee(d_, t ? fw : pw, p_),
    i = _C(),
    a = c(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : v(dw, { children: v(D, { children: v(e, { framerSiteId: n, features: a }) }) });
}
function Qu({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = T(),
    i = T(),
    a = T(t),
    s = T(null);
  ((a.current = t),
    d(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [c] = o(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? ed(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? ed(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && $u(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return v(mw.Provider, { value: c, children: n });
}
async function $u(e, t) {
  if (!xn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    bn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function ed(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? ir(r.path, n) : r.path) : ``;
}
function td(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function nd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((hw = e.timeZone), (gw = e.locale));
}
function rd({ routeId: e, url: t, pathVariables: n, localeId: r }) {
  Kr({ routeId: e, pathVariables: n, localeId: r, paginationInfo: Ir()?.paginationInfo }, t);
}
function id(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let { historyPath: i, hash: a, pathVariables: o, localeId: s, currentRoutePath: c } = n,
    l = c !== void 0 && c === r,
    u = Ir();
  Kr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      localeId: s,
      queryParamBackAnchorSearch: l ? u?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function ad(e, t, n, r) {
  let i = Ir();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Kr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
      },
      bi(t, n)
    ));
}
function od() {
  return Hn() >= 17 ? bw : yw;
}
function sd(e = pd) {
  let t = (e) => {
    e.persisted && gd();
  };
  zn() && (n.addEventListener(`pageshow`, t), (vw = Date.now() - od()));
  let r = cd(),
    i = md(e);
  return function () {
    (n.removeEventListener(`pageshow`, t), r(), i());
  };
}
function cd() {
  let e = n.history.scrollRestoration;
  return (
    (n.history.scrollRestoration = `manual`),
    function () {
      n.history.scrollRestoration = e;
    }
  );
}
function ld(e) {
  return z(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function ud() {
  return { x: n.scrollX, y: n.scrollY };
}
function dd() {
  let e = Ir();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (ld(t)) return t;
}
function fd(e) {
  let t = Ir();
  t && (Ur({ ...t, scrollPosition: e }), zn() && (vw = Date.now()));
}
function pd(e, t = !1) {
  let n = dd();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (zn() && !t) {
      let e = od();
      if (Date.now() - vw < e) return;
    }
    fd(e);
  }
}
function md(e) {
  let t = () => {
      e(ud());
    },
    r = () => {
      e(ud(), !0);
    },
    i = () => {
      document.visibilityState === `hidden` && r();
    };
  (document.addEventListener(`visibilitychange`, i), n.addEventListener(`pagehide`, r));
  let a = () => {
    (document.removeEventListener(`visibilitychange`, i), n.removeEventListener(`pagehide`, r));
  };
  if (!(`onscrollend` in n)) {
    let e = hd(t);
    return function () {
      (a(), e());
    };
  }
  return (
    n.addEventListener(`scrollend`, t),
    function () {
      (a(), n.removeEventListener(`scrollend`, t));
    }
  );
}
function hd(e) {
  let t, r;
  function i() {
    (clearTimeout(t), (t = void 0), (r = void 0));
  }
  let a = () => {
      let t = r;
      (i(), !(t === void 0 || Lr(Ir()) !== t) && e());
    },
    o = () => {
      let e = Lr(Ir());
      if (e === void 0) {
        i();
        return;
      }
      (clearTimeout(t), (r = e));
      let o = zn() ? od() : 100;
      t = n.setTimeout(a, o);
    };
  return (
    n.addEventListener(`scroll`, o),
    function () {
      (n.removeEventListener(`scroll`, o), i());
    }
  );
}
function gd() {
  let e = dd();
  return e ? (n.scrollTo(e.x, e.y), !0) : !1;
}
function _d(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function vd(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (_d(n, t), !0);
}
function yd(e, t, r) {
  r !== `preserve-scroll-position` &&
    Fe.render(
      () => {
        (r === `restore-scroll-position` && gd()) || vd(e, t) || n.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function bd(e, t) {
  Fe.read(() => {
    n.scrollY !== 0 ||
      n.scrollX !== 0 ||
      Fe.render(
        () => {
          gd() || vd(e, t);
        },
        !1,
        !0
      );
  });
}
function xd(e) {
  let t = _C().scrollRestoration,
    n = T(void 0),
    i = T(!1),
    a = !!(t && !e),
    o = l(
      (e) => {
        ((n.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = l((e, t = !1) => {
      i.current || pd(e, t);
    }, []),
    c = l(() => {
      a && (i.current = !0);
    }, [a]),
    u = l(() => n.current !== void 0 || i.current, []),
    d = l((e, t) => {
      let r = n.current;
      !r ||
        r.routeId !== e ||
        r.remountKey !== t ||
        ((n.current = void 0), (i.current = !1), yd(r.hash, r.shouldSmoothScroll, r.behavior));
    }, []);
  return (
    r(() => {
      if (a) return sd(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: u,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: d,
    }
  );
}
function Sd({ currentRouteId: e, remountKey: t, scrollRestoration: i }) {
  let { commitNavigationScroll: a, usesCustomScrollRestoration: o } = i;
  return (
    r(() => {
      a(e, t);
    }),
    d(() => {
      o && bd(n.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Cd() {
  let [e, t] = p.useState(0);
  return [e, p.useCallback(() => t((e) => e + 1), [])];
}
function wd({ children: e, loadSnippetsModule: t }) {
  return v(jw.Provider, { value: t, children: e });
}
function Td() {
  return p.useContext(jw);
}
function Ed(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Dd(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (B(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (B(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      V(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Od(a.createContextualFragment(e), r, i));
}
async function Od(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = kd(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Od(r, e, null)));
  }
}
function kd(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Ad(r, t, n);
}
function Ad(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function jd(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = Dw), (n = Ow));
      break;
    case `bodyEnd`:
      ((t = kw), (n = Aw));
      break;
    case `headStart`:
      ((t = Cw), (n = ww));
      break;
    case `headEnd`:
      ((t = Tw), (n = Ew));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Md(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Ed(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Nd(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = jd(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Md(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Pd(t, o), s)) {
      await Dd(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Ed(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Id(e.id, n, r, i);
    d ? await Dd(u, d, `afterend`) : await Dd(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Pd(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (Fd(n) && n.remove(), (n = e));
  }
}
function Fd(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Id(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Md(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Ld() {
  let e = Td();
  return l(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(xw)?.dataset[Sw] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await Nd(t, n, r);
      }
    },
    [e]
  );
}
function Rd(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function zd({
  siteCanonicalURL: e,
  activeLocale: t,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !r?.canonicalLocaleIdByLocaleId) return;
  let c,
    l = [],
    u = r.canonicalLocaleIdByLocaleId[t.id],
    d,
    f;
  for (let e of o)
    if (((d ??= e.id === T_ ? e : void 0), (f ??= e.id === u ? e : void 0), f && d)) break;
  if (f) {
    let { path: n } = await lr({
      currentLocale: t,
      nextLocale: f,
      defaultLocale: d,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    n && (c = Rd(n, e));
  }
  let p;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o } = await lr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: d,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o) continue;
    let c = Rd(o, e);
    (l.push({ href: c, hrefLang: n.code }), n.id === T_ && (p = c));
  }
  return (
    p && l.push({ href: p, hrefLang: `x-default` }),
    () => {
      (jr(c, n.location.href), Mr(l));
    }
  );
}
function Bd({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = jn(),
    l = Ld();
  d(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t || e.id === t.id
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Hl(e);
        }),
        d)
      : (lr({
          currentLocale: e,
          nextLocale: t,
          defaultLocale: o.find(({ id: e }) => e === T_),
          route: r,
          routeId: i,
          pathVariables: n,
          collectionUtils: c,
          preserveQueryParams: !1,
        })
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await zd({
              siteCanonicalURL: s,
              activeLocale: e,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Hl(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function Vd(e) {
  if (!e) return o_;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Hd(e) {
  let t = $r(e),
    r = T(void 0),
    i = l(() => {
      (r.current?.abort(), (r.current = void 0));
    }, []);
  return {
    startNavigation: l(
      async (e, a, o, s = !0) => {
        i();
        let c = s ? new AbortController() : void 0;
        r.current = c;
        let l = c?.signal,
          u = Jt(l);
        if ((a.promise.finally(u), o === void 0)) return (e(l), a.promise);
        let d,
          f = new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(o_);
        if ((t(f, c, o), e(l), await a.promise, l?.aborted)) return;
        let p = n.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || Iv();
      },
      [i, t]
    ),
    cancelPendingNavigation: i,
  };
}
function Ud({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: i,
  initialRoute: o,
  notFoundPage: s,
  collectionUtils: u,
  routes: f,
  initialLocaleId: p,
  initialCollectionItemId: m,
  locales: h = w_,
  preserveQueryParams: g = !1,
  LayoutTemplate: _,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextDirection: x,
}) {
  (Di(), qr({ disabled: t, routeId: o, initialPathVariables: i, initialLocaleId: p }));
  let S = kr(),
    [C, w] = Cd(),
    D = Pr(`framer-route-change`),
    O = c(() => (!_C().synchronousNavigationOnDesktop || !Kn() ? j : (e) => e()), []),
    k = T(!0),
    A = T(),
    M = T(o),
    ee = T(i),
    te = T(p),
    N = xd(t),
    { isNavigationCommitPending: ne, usesCustomScrollRestoration: re } = N,
    { startNavigation: ie, cancelPendingNavigation: P } = Hd(re),
    ae = N.scheduleScroll,
    oe = te.current,
    se = M.current,
    ce = f[se],
    le = ce?.path;
  if (!ce) throw Error(`Router cannot find route for ${se}`);
  let ue = c(() => h.find(({ id: e }) => (oe ? e === oe : e === T_)) ?? null, [oe, h]),
    de = !ue || !ce.includedLocales || ce.includedLocales.includes(ue.id),
    fe = c(() => {
      if (!ue) return null;
      let e;
      return (
        (e = de
          ? ce?.canonicalLocaleIdByLocaleId?.[ue.id]
          : Object.values(f).find((e) => e.path && ry.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              ue.id
            ]),
        e ? (h.find(({ id: t }) => t === e) ?? ue) : ue
      );
    }, [ue, ce, h, de, f]),
    pe = ue?.textDirection ?? `ltr`,
    me = x ? pe : `ltr`;
  r(() => {
    x && document.documentElement.setAttribute(`dir`, pe);
  }, [pe, x]);
  let he = Xr(),
    ge = c(
      () => ({
        activeLocale: ue,
        contentLocale: fe,
        locales: h,
        setLocale: async (e) => {
          let n = D({ localized: !0 });
          await bv({ priority: `user-blocking`, continueAfter: `paint` });
          let r;
          L(e) ? (r = e) : z(e) && (r = e.id);
          let i = h.find(({ id: e }) => e === T_),
            a = h.find(({ id: e }) => e === r);
          if (!a) return;
          let o = M.current,
            s = f[o];
          if (s)
            try {
              let e = await he({
                currentLocale: ue,
                nextLocale: a,
                route: s,
                routeId: o,
                defaultLocale: i,
                pathVariables: ee.current,
                preserveQueryParams: g,
              });
              if (!e) return;
              let r = e.path;
              ((k.current = !1),
                (ee.current = e.pathVariables),
                (te.current = a.id),
                (A.current = r));
              let c = s.path && e.pathVariables ? ir(s.path, e.pathVariables) : s.path;
              (ae({
                routeId: o,
                remountKey: `${a.id}${c}`,
                hash: void 0,
                shouldSmoothScroll: !1,
                behavior: `preserve-scroll-position`,
              }),
                ie(
                  () => {
                    S(o, o, () => O(w));
                  },
                  n,
                  t
                    ? void 0
                    : r
                      ? () => {
                          rd({
                            routeId: o,
                            url: r,
                            pathVariables: e.pathVariables,
                            localeId: a.id,
                          });
                        }
                      : void 0,
                  !1
                ));
            } catch {}
        },
      }),
      [ue, fe, t, w, h, g, f, ae, ie, S, D, O, he]
    ),
    F = l(
      (e, t, n, r, i, a, o, s, c) => {
        k.current = !1;
        let l = M.current,
          u = f[e],
          d = qt(u, n),
          p = u?.path && i ? ir(u.path, i) : u?.path;
        if (
          ((M.current = e),
          (ee.current = i),
          (te.current = t),
          (A.current = r),
          ae({
            routeId: e,
            remountKey: `${t}${p}`,
            hash: d,
            shouldSmoothScroll: s ?? !1,
            behavior: a
              ? re
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          a)
        ) {
          (P(), O(w));
          return;
        }
        ie(
          (t) => {
            S(l, e, () => O(w), t);
          },
          o,
          c,
          !0
        );
      },
      [w, f, re, ae, ie, S, O, P]
    );
  (Jr(N, M, F),
    d(() => {
      if (t) return;
      let e = () => {
        let e = Ir(),
          t = n.location.hash === `` ? void 0 : n.location.hash.slice(1);
        (e && qt(f[e.routeId], e.hash) === t) ||
          Wr({
            ...(e ||
              (zr() ?? { routeId: M.current, pathVariables: ee.current, localeId: te.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (n.addEventListener(`hashchange`, e), () => n.removeEventListener(`hashchange`, e));
    }, [t, f]));
  let _e = l(
      async (e, n, r, i, a) => {
        let o = f[e],
          s = wt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = D({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = Vd(a);
        if (
          (bv({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await bv({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Sv)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let d = qt(o, n),
          p = ee.current,
          m = te.current;
        if (td({ routeId: M.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          let a = ne();
          if (a) {
            let t = o?.path && r ? ir(o.path, r) : o?.path;
            ae({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: d,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else P();
          (l.ignore?.(), !a && re && yd(d, i, `scroll-to-hash-or-top`));
          let s = f[e];
          (!t &&
            s &&
            ad(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: m,
                preserveQueryParams: g,
                siteCanonicalURL: b,
              },
              u
            ),
            !a && !re && yd(d, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let _ = f[M.current],
          v =
            vi(b) +
            bi(o, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              localeSlug: h.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: g,
              relative: !1,
              siteCanonicalURL: b,
            });
        F(
          e,
          m,
          n,
          v,
          r,
          !1,
          l,
          i,
          t
            ? void 0
            : () => {
                (u(),
                  id(e, o, {
                    historyPath: v,
                    currentRoutePath: _?.path,
                    hash: n,
                    pathVariables: r,
                    localeId: m,
                  }));
              }
        );
      },
      [P, f, h, F, t, g, b, D, re, ne, ae]
    ),
    ve = zt(f),
    ye = A.current,
    be = ee.current,
    xe = _w(ce, se, ye, be, ue, m),
    I = k.current;
  Bd({
    activeLocale: ue,
    contentLocale: fe,
    currentPathVariables: be,
    currentRoute: ce,
    currentRouteId: se,
    isInitialNavigation: I,
    locales: h,
    siteCanonicalURL: b,
  });
  let Se = c(
      () => ({
        navigate: _e,
        getRoute: ve,
        currentRouteId: se,
        currentPathVariables: be,
        routes: f,
        collectionUtils: u,
        preserveQueryParams: g,
        pageviewEventData: xe,
        siteCanonicalURL: b,
        isInitialNavigation: I,
      }),
      [_e, ve, se, be, f, u, g, b, xe, I]
    ),
    Ce = le && be ? ir(le, be) : le,
    we = `${oe}${Ce}`,
    Te = Ha(() => ({ ...e, display: `contents` }));
  return v(Bt, {
    api: Se,
    children: v(Gv.Provider, {
      value: ge,
      children: v(Kv.Provider, {
        value: me,
        children: v(FC, {
          children: v(pi, {
            routerRenderKey: C,
            isNavigationCommitPending: N.isNavigationCommitPending,
            children: E(Qu, {
              currentRoutePath: Ce,
              routerAPI: Se,
              children: [
                y && v(Zu, { EditorBar: y, fast: !0 }),
                v(bC, {
                  children: E(Bl, {
                    children: [
                      v(ky.Start, {}),
                      v(Sd, { currentRouteId: se, remountKey: we, scrollRestoration: N }),
                      v(jy, {
                        notFoundPage: s,
                        defaultPageStyle: e,
                        routerRenderKey: C,
                        children: v(Wd, {
                          LayoutTemplate: _,
                          webPageId: ce?.abTestingVariantId ?? se,
                          style: e,
                          children: (t) =>
                            v(a, { children: de ? Mi(ce.page, t ? Te : e) : s && Mi(s, e) }, we),
                        }),
                      }),
                      y && v(Zu, { EditorBar: y }),
                      v(Ci, {}),
                      v(ky.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Wd({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? v(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Gd(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Kd(e) {
  return typeof e == `object` && !!e;
}
function qd(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Kd(r)) return;
    r = r[e];
  }
  return r;
}
function Jd(e) {
  return `${e.credentials}:${e.url}`;
}
function Yd(e) {
  return L(e) && !Number.isNaN(Number(e));
}
function Xd(e, t) {
  switch (e) {
    case `string`:
      return L(t) || R(t);
    case `color`:
      return L(t);
    case `boolean`:
      return ct(t);
    case `number`:
      return R(t) || Yd(t);
    case `link`:
    case `image`:
      return L(t) && mu(t, !1);
    default:
      return !1;
  }
}
function Zd(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = qd(e.data, t.resultKeyPath);
  if (dt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Xd(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Qd(e, t) {
  if (J.current() === J.canvas) return !1;
  let n = Math.max(t * 1e3, Nw);
  return Date.now() >= e + n;
}
function $d(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    skipAnimations: d = !1,
    includeDataObserver: f = !1,
    localeId: m,
    locales: h,
    preserveQueryParams: g,
    EditorBar: _,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: T,
  } = e;
  return (
    p.useEffect(() => {
      n || ib.start();
    }, []),
    n
      ? v(ni, {
          value: r ?? `preview`,
          children: v(Le, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: v(An, {
              collectionUtils: c,
              children: v(Rw, {
                children: v(lw.Provider, {
                  value: a,
                  children: v(wd, {
                    loadSnippetsModule: w,
                    children: v(Ud, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: m,
                      initialCollectionItemId: T,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: h,
                      defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: g,
                      EditorBar: _,
                      disableHistory: b,
                      LayoutTemplate: x,
                      siteCanonicalURL: S,
                      adaptLayoutToTextDirection: C,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : v(f ? TS : p.Fragment, {
          children: v(Ht, {
            routes: s,
            children: v(pS, { children: p.isValidElement(t) ? t : p.createElement(t, { key: i }) }),
          }),
        })
  );
}
function ef(e, t) {
  let n = Vt(),
    { activeLocale: r } = oi(),
    i = Bu();
  return ii(() => {
    let t = [],
      a = (e) => {
        if (e)
          return L(e) || uu(e)
            ? Xu(e, n, void 0, void 0, r, o)
            : Xu(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function tf(e) {
  return {
    trace(...t) {
      return Y.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Y.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Y.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Y.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Y.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Y.getLogger(e) !== void 0;
    },
  };
}
function nf() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function rf() {
  return Bw.priority;
}
function af(e) {
  let t = Bw;
  return (
    (Bw = e),
    {
      [nf()]() {
        Bw = t;
      },
    }
  );
}
function of(e = Bw.priority, t = Bw.canYield) {
  if (!(!t || e === void 0)) return bv({ batch: !0, priority: Yn(e) });
}
function sf(e) {
  var t = [];
  try {
    je(t, af({ priority: Bw.priority, canYield: !1 }));
    let n = e.next();
    return (B(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    Ne(t, n, r);
  }
}
async function cf(e, t, n = Bw.priority, r = Bw.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (je(o, af(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      Ne(o, s, c);
    }
  }
  for (; !a.done; ) {
    var l = [];
    try {
      let t = await a.value,
        o = of(n, r);
      (o && (await o), je(l, af(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      Ne(l, u, d);
    }
  }
  return a.value;
}
function lf(e, t = Bw.priority, n = Bw.canYield) {
  var r = [];
  try {
    je(r, af({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : cf(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    Ne(r, i, a);
  }
}
function* W(e, t = Bw.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (ht(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            cf(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* uf(e, t = Bw.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = of(t);
    r && (yield r);
    let o = e[a];
    if (ht(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            cf(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function df(e) {
  return mf(e) || _f(e);
}
function ff(e) {
  return lt(e) && e.every(z);
}
function pf(e) {
  return z(e) && st(e.read) && st(e.preload);
}
function mf(e) {
  return ff(e) || pf(e);
}
function hf(e) {
  return z(e) && z(e.schema);
}
function gf(e) {
  return z(e) && z(e.collectionByLocaleId);
}
function _f(e) {
  return hf(e) || gf(e);
}
function vf(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = qf(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function yf(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Z.cast(e, t.definition)) };
  }
  return null;
}
function bf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xf(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Sf(e) {
  return xf(e)?.value ?? !1;
}
function Cf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function wf(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Tf(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Ef(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return mt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Df(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Of(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function kf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Af(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function jf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Mf(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Nf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Pf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Ff(e) {
  return Pf(e)?.value ?? null;
}
function If(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = qf(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Lf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = Z.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function Rf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function zf(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Bf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Vf(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Hf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Uf(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Wf(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Gf(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Kf(e) {
  return Gf(e)?.value ?? null;
}
function qf(e, t, n) {
  if (ft(e) || ft(t)) return (B(e === t), 0);
  switch (e.type) {
    case `array`:
      return (B(e.type === t.type), vf(e, t, n));
    case `boolean`:
      return (B(e.type === t.type), bf(e, t));
    case `color`:
      return (B(e.type === t.type), Cf(e, t));
    case `date`:
      return (B(e.type === t.type), Tf(e, t));
    case `enum`:
      return (B(e.type === t.type), Df(e, t));
    case `file`:
      return (B(e.type === t.type), kf(e, t));
    case `link`:
      return (B(e.type === t.type), jf(e, t));
    case `number`:
      return (B(e.type === t.type), Nf(e, t));
    case `object`:
      return (B(e.type === t.type), If(e, t, n));
    case `responsiveimage`:
      return (B(e.type === t.type), Rf(e, t));
    case `richtext`:
      return (B(e.type === t.type), Bf(e, t));
    case `vectorsetitem`:
      return (B(e.type === t.type), Hf(e, t));
    case `string`:
      return (B(e.type === t.type), Wf(e, t, n));
    default:
      V(e);
  }
}
async function Jf(e, t) {
  return pf(e) ? (await e.preload(t), e.read(t)) : e;
}
function Yf(e) {
  return e.includes(Gw);
}
function Xf(e) {
  if (!_f(e) || !e.id) return;
  let t = Uw.get(e.id);
  if (!t) return (Uw.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Zf(e) {
  let t = Xf(e);
  if (t) return t;
  let n = Ww.get(e);
  if (n) return n;
  let r = `${Gw}${Math.random().toString(16).slice(2)}`;
  return (Ww.set(e, r), r);
}
function Qf(e, t) {
  if (mf(e)) {
    let n = Zf(e) + (t?.id ?? T_),
      r = Kw.get(n);
    if (r) return r;
    let i = new Hw(e, t);
    return (Kw.set(n, i), i);
  }
  if (hf(e)) return e;
  if (gf(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  V(e, `Unsupported collection type`);
}
function $f(e) {
  return e;
}
function ep(e) {
  return st(e.getHash);
}
function G(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (z(r) && ep(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return $f(`${n})`);
}
function tp(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function np(e) {
  if (e !== void 0) return Yn(e);
}
function rp(e, t) {
  return { collectionId: Zf(e), pointer: t };
}
function ip(e) {
  return z(e) && L(e.collectionId);
}
function ap(e, t) {
  return { collectionId: Zf(e), pointer: t };
}
function op(e) {
  return z(e) && L(e.collectionId);
}
function sp(e, t) {
  let n = new Map();
  function r(e) {
    if (z(e))
      if (e.type === `Collection` && df(e.data)) {
        let r = Qf(e.data, t),
          i = Zf(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (lt(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function cp(e) {
  return e;
}
function lp(e) {
  return e;
}
function up(e) {
  return e;
}
function dp() {
  return 25;
}
function fp() {
  return 12500;
}
function pp(e) {
  return Array(e).fill({ type: `All` });
}
function mp(e) {
  return e;
}
function hp(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new $T(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function gp(e) {
  let t = new Set();
  if (!e) return t;
  hp(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (hp(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function _p(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) _p(n, t);
      return;
    case `object`:
      for (let n in e.value) _p(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function vp(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function yp(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function bp(e) {
  return `${e.functionName}(${e.arguments.map((e) => Tp(e)).join(`, `)})`;
}
function xp(e) {
  let t = `CASE`;
  e.value && (t += ` ${Tp(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Tp(n.when)} THEN ${Tp(n.then)}`;
  return (e.else && (t += ` ELSE ${Tp(e.else)}`), (t += ` END`), t);
}
function Sp(e) {
  let t = Tp(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Cp(e) {
  let t = Tp(e.left),
    n = Tp(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function wp(e) {
  return `CAST(${Tp(e.value)} as ${e.dataType})`;
}
function Tp(e) {
  switch (e.type) {
    case `Identifier`:
      return vp(e);
    case `LiteralValue`:
      return yp(e);
    case `FunctionCall`:
      return bp(e);
    case `Case`:
      return xp(e);
    case `UnaryOperation`:
      return Sp(e);
    case `BinaryOperation`:
      return Cp(e);
    case `TypeCast`:
      return wp(e);
    case `Select`:
      return `${Ap(e)}`;
    default:
      V(e);
  }
}
function Ep(e) {
  return hf(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Dp(e) {
  let t = `${Op(e.left)} LEFT JOIN ${Op(e.right)}`;
  return (e.constraint && (t += ` ON ${Tp(e.constraint)}`), t);
}
function Op(e) {
  switch (e.type) {
    case `Collection`:
      return Ep(e);
    case `LeftJoin`:
      return Dp(e);
    default:
      V(e);
  }
}
function kp(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Ap(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Tp(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Op(e.from)}`),
    e.where && (t += ` WHERE ${Tp(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Tp(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Tp(e.limit)}`),
    e.offset && (t += ` OFFSET ${Tp(e.offset)}`),
    kp(t)
  );
}
function jp(e) {
  return z(e) && e.type === `Collection`;
}
function Mp(e, t) {
  return jp(t) && df(t.data) ? Zf(t.data) : t;
}
function Np(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, Mp) + n;
}
function Pp(e) {
  let { activeLocale: t } = oi();
  return gE.get(e, t).use();
}
function Fp(e) {
  return Pp({ ...e, select: [] }).length;
}
function Ip(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(dt(e) || z(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Lp(e) {
  let t = T(e);
  return (
    M(() => {
      t.current = e;
    }, [e]),
    ai((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Rp(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function zp() {
  return new Set();
}
function Bp(e) {
  let t = Ha(zp),
    n = Ha(zp);
  return (
    Zs(() => () => Rp(n, t)),
    d(() => () => Rp(n, t), []),
    d(() => {
      Rp(n, t);
    }, [e]),
    T({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Vp(e, t, n) {
  return p.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Hp(e) {
  for (let [t, n] of Object.entries(e)) if (K.matchMedia(n).matches) return t;
}
function Up(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && K.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Wp(e, t, n = !0) {
  let r = w(uS),
    i = Ka(),
    a = Ra(),
    o = Vn() && (!i || a),
    s = T(o ? (Hp(t) ?? e) : e),
    c = T(n && r ? e : s.current),
    u = os(),
    f = ie(),
    p = l(
      (e) => {
        if (e !== s.current || e !== c.current) {
          let t = function () {
            ((s.current = c.current = e),
              j(() => {
                u();
              }));
          };
          i
            ? t()
            : f(() => {
                t();
              });
        }
      },
      [f, u, i]
    );
  return (
    Hv(() => {
      if (i) {
        if (a) {
          p(Hp(t) ?? e);
          return;
        }
        p(e);
      }
    }, [e, a, i, t, p]),
    Hv(() => {
      !n || r !== !0 || p(s.current);
    }, []),
    d(() => {
      if (!o || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = K.matchMedia(r),
          i = (e) => {
            e.matches && p(n);
          };
        (Gp(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => Kp(e, t));
    }, [a, t, p, o]),
    [s.current, c.current]
  );
}
function Gp(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Kp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function qp(e) {
  setTimeout(e, 1);
}
function Jp(e) {
  let t = new Set(),
    n = Up(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Yp(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (l_ ? K.requestIdleCallback : qp)(() => {
    document.querySelector(_E)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Yp(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Xp(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Yp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Xp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Zp() {
  let e = Ha(() => new Map());
  return p.useCallback((t) => {
    let n = e.get(t);
    if (n) return n;
    let r = S();
    return (e.set(t, r), r);
  }, []);
}
function Qp(e) {
  return z(e) && vE in e && e.page !== void 0;
}
function $p(e) {
  if (n === void 0) return;
  let t = Ir()?.paginationInfo?.[e]?.currentPage;
  return typeof t == `number` ? t : void 0;
}
function em(e, t) {
  return e ? 1 : ($p(t) ?? 1);
}
function tm(e, t, n, r = !1) {
  let { isInitialNavigation: i = !0 } = Vt(),
    [a, s] = te(),
    u = Math.ceil(e / t),
    f = $p(n),
    p = T(i ? f : void 0),
    [m, h] = o(() => em(i, n)),
    g = T(m),
    _ = c(() => ({ currentPage: m, totalPages: u, isLoading: a }), [m, u, a]);
  (Hv(() => {
    let e = p.current;
    (e !== void 0 && e !== g.current) || ((p.current = void 0), Qr(n, _));
  }, [n, _]),
    d(
      function () {
        if (!i) return;
        let e = p.current;
        if (e === void 0 || e === g.current) {
          p.current = void 0;
          return;
        }
        ((g.current = e), j(() => h(e)));
      },
      [i]
    ));
  let v = fu(),
    y = T(!1);
  return {
    paginationInfo: _,
    loadMore: l(async () => {
      if (!v && !(g.current >= u) && !y.current) {
        y.current = !0;
        try {
          if ((await bv({ priority: `user-blocking`, continueAfter: `paint` }), g.current >= u))
            return;
          let e = Math.min(g.current + 1, u);
          ((g.current = e),
            (r ? s : j)(() => {
              h(e);
            }));
        } finally {
          y.current = !1;
        }
      }
    }, [u, r, v]),
  };
}
function nm(e, t, n) {
  let { paginationInfo: r, loadMore: i } = tm(Fp(e), t, n, !0);
  return {
    paginatedQuery: c(() => {
      let n = t * r.currentPage;
      if (e.limit) {
        if (e.limit.type !== `LiteralValue` || typeof e.limit.value != `number`)
          throw Error(`Unexpected type for query limit`);
        n = Math.min(n, e.limit.value);
      }
      return { ...e, limit: { type: `LiteralValue`, value: n } };
    }, [e, t, r]),
    paginationInfo: r,
    loadMore: i,
  };
}
function rm(e, t) {
  return `${e}-${t}`;
}
function im(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (B(r !== void 0, `nextVariant should be defined`), r);
}
function am(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function om(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function sm(e, t) {
  return t[e] || `framer-v-${e}`;
}
function cm(e, t, n) {
  return e && n.has(e) ? e : t;
}
function lm() {
  let e = T(),
    t = T(),
    n = l(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    d(
      () => () => {
        n();
      },
      [n]
    ),
    l(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function um() {
  let e = T(),
    t = T(!1),
    n = T(),
    r = w(qx);
  return (
    d(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    l(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = Ws(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function dm(e) {
  let t = lm(),
    n = um();
  return l(
    (r, i = !1) => {
      if (c_) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function fm() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (xE = () => {
        (e(), (t = void 0));
      }));
  });
}
function pm(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (bE = fm()));
}
function mm() {
  (performance.mark(`click-received-listener`), (bE = void 0), xE?.(), (xE = void 0));
}
function hm(e = !1) {
  d(() => {
    e &&
      (document.addEventListener(`pointerup`, pm, !0),
      document.__proto__.addEventListener.call(document, `click`, mm, !0));
  }, [e]);
}
function gm({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: s,
}) {
  let u = os(),
    d = fu(),
    f = Ha(() => new Set(i));
  hm(_C().yieldOnTap);
  let p = dm(s),
    m = T({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: cm(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = l((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = cm(e, a, f),
        s = om(i?.[o], t, n, !1, r);
      return [o, s ? rm(o, s) : void 0];
    }, []),
    g = l(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = _C().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          bE &&
          (performance.mark(`wait-for-tap-start`),
          await bE,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await bv({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: g,
        } = m.current;
        if (l || f || d || g) {
          j(u);
          return;
        }
        p(() => j(u), i);
      },
      [h, u, p]
    ),
    _ = l(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g]
    ),
    v = l(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === yE ? im(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    y = l(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => j(u), !0));
    }, [u, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: b,
      gestureVariant: x,
      defaultVariant: S,
      enabledGestures: C,
      isHovered: w,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = m.current,
    k = Vp(m.current.baseVariant, m.current.gestureVariant, a);
  return c(() => {
    let e = [];
    b !== S && e.push(b);
    let t = C?.[b]?.loading,
      n = !D && !d && !!t && !O[b],
      r = n ? rm(b, `loading`) : x;
    r && e.push(r);
    let i = C?.[b],
      a = { onMouseEnter: () => _({ isHovered: !0 }), onMouseLeave: () => _({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => _({ isPressed: !0 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTap: () => _({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: b,
        gestureVariant: r,
        isLoading: n,
        transition: am(m.current.transitions, b),
        setVariant: v,
        setGestureState: _,
        clearLoadingGesture: y,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: Xc(sm(b, o), om(i, w, E, n, D)),
      }
    );
  }, [b, x, w, E, O, k, v, S, C, _, y, o]);
}
function _m(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Wl()) return r(e);
  let a = vm(e, r),
    o = !1;
  function s(r, s) {
    let c = ql(),
      { disableCustomCode: l } = _C();
    if (l) return v(e, { ...r, ref: s });
    if (tu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? v(Bv.Provider, {
            value: n,
            children: v(Gl, {
              getErrorMessage: Ql.bind(null, t, n),
              fallback: v(e, { ...r, ref: s }),
              children: v(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Ul(a.error), Ul(Ql(t, n)), Hl(a.error), !0)), v(e, { ...r, ref: s }));
    if (a.status === `success`)
      return v(Bv.Provider, { value: n, children: v(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return p.forwardRef(s);
}
function vm(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function ym(e) {
  let t = [];
  return (
    i.forEach(e, (e) => {
      b(e) && e.type === a ? t.push(...ym(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function bm(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function xm(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = bm(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c; ) {
    let { start: e, end: n } = t[ne(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Sm(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = bm(e, t, a),
    c = e,
    l = !1;
  for (; !l; ) {
    let { start: r, end: u } = t[ne(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function Cm() {
  let e = w(SE);
  return (Lm(!!e, `useTicker must be used within a Ticker component`), e);
}
function wm() {
  let e = w(CE);
  return (Lm(!!e, `useTickerItem must be used within a TickerItem`), e);
}
function Tm(e, t) {
  return (t?.offsetWidth ?? n.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function Em(e, t) {
  return e === `y` ? EE : t === `ltr` ? TE : DE;
}
function Dm({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i = 0,
  itemIndex: a,
  cloneIndex: o,
  bounds: s,
  alignItems: c,
  reproject: l = !0,
  size: u = `auto`,
  safeMargin: d,
}) {
  let { start: f, end: p } = s,
    { visibleLength: m, direction: h, inset: g } = Cm(),
    { sign: _ } = Em(n, h),
    y = Te(() => {
      if (!l) return 0;
      let e = t.get();
      if ((!f && !p) || !r) return 0;
      if (e * _ + s.end <= -g - d) return r * _;
      if (d > 0) {
        let t = m - d - g;
        if (e * _ + s.start >= t) return -r * _;
      }
      return 0;
    }),
    b = Te(() => {
      let e = t.get(),
        n = y.get();
      return (!f && !p) || !r ? 0 : e * _ + f + n * _;
    }),
    x =
      o === void 0
        ? { "aria-hidden": !1, "aria-posinset": a + 1, "aria-setsize": i }
        : { "aria-hidden": !0 },
    S = u === `fill`,
    C = c === `stretch` ? `100%` : `fit-content`,
    w = {
      className: o === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: u === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return v(CE.Provider, {
    value: { start: f, end: p, offset: b, projection: y, itemIndex: a, cloneIndex: o, props: w },
    children: u === `manual` ? e : v(Om, { children: e }),
  });
}
function Om({ children: e }) {
  let { props: t } = wm();
  return v(P.li, { ...t, children: e });
}
function km(e, t, r, i, a) {
  let o = T(!1);
  d(() => {
    let s = e.current;
    if (!s) return;
    let c = !1,
      l = new AbortController(),
      u = { signal: l.signal },
      d = { ...u, capture: !0 },
      f = t === `x` ? `scrollLeft` : `scrollTop`,
      p = t === `x` ? `offsetLeft` : `offsetTop`,
      m = t === `x` ? `ArrowLeft` : `ArrowUp`,
      h = t === `x` ? `ArrowRight` : `ArrowDown`,
      g = [],
      _ = 0,
      v = () => {
        let e = g[_];
        e &&
          (e.focus({ preventScroll: !0 }),
          r.set(-e[p]),
          (s[f] = 0),
          Fe.render(() => {
            s[f] = 0;
          }));
      },
      y = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), S());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(jm);
          t.sort(Am);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (s.contains(n)) {
            t[r].focus();
            return;
          } else {
            let n = t.indexOf(g[_]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!s.contains(n)) {
                n.focus();
                return;
              }
            }
          }
          return;
        } else e.key === m ? _-- : e.key === h && _++;
        ((_ = ne(0, g.length, _)), v());
      },
      b = () => {
        o.current ||
          ((g = Array.from(
            s.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(jm)),
          (_ = 0),
          g.length &&
            (a(!0),
            (o.current = !0),
            v(),
            n.addEventListener(`focus`, x, d),
            n.addEventListener(`blur`, x, d),
            s.addEventListener(`keydown`, y, u)));
      },
      x = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !s.contains(e.target)) && S();
      },
      S = () => {
        o.current &&
          ((o.current = !1),
          a(!1),
          i.set(r.get()),
          n.removeEventListener(`focus`, x),
          n.removeEventListener(`blur`, x),
          s.removeEventListener(`keydown`, y));
      },
      C = (e) => {
        let { target: t } = e;
        jm(t) && (o.current || b());
      },
      w = () => {
        c || ((c = !0), s.addEventListener(`focus`, C, d), n.addEventListener(`pointermove`, T, u));
      },
      T = () => {
        c &&
          ((c = !1),
          s.removeEventListener(`focus`, C, !0),
          n.removeEventListener(`pointermove`, T, u));
      };
    return (
      n.addEventListener(`keydown`, w, u),
      s.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        u
      ),
      s.addEventListener(
        `scroll`,
        () => {
          ((s.scrollLeft = 0), (s.scrollTop = 0));
        },
        u
      ),
      () => {
        (l.abort(), S());
      }
    );
  }, []);
}
function Am(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function jm(e) {
  return e instanceof HTMLElement;
}
function Mm(e) {
  return e.end - e.start;
}
function Nm(e) {
  return e[e.length - 1].end - e[0].start;
}
function Pm(e, t, n) {
  let r = Nm(t),
    i = Math.max(...t.map(Mm)),
    a = 0,
    o = 0;
  for (; o < e; ) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function Fm(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: r = 1,
    gap: i = 10,
    axis: a = `x`,
    align: s = `center`,
    offset: u,
    isStatic: d = !1,
    itemSize: f = `auto`,
    overflow: p = !1,
    loop: m = !0,
    children: h,
    as: g = `div`,
    snap: _,
    safeMargin: y = 0,
    fade: b = 0,
    fadeTransition: x,
    pageTransition: S,
    ...C
  },
  w
) {
  let E = T(null),
    D = pe(w, E),
    O = T(null),
    [k, A] = o({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    j = OE[s] || s,
    { sign: M } = Em(a, k.direction);
  if (d) {
    let t = le(0);
    return v(SE.Provider, {
      value: { ...k, gap: i, clampOffset: be, offset: t, renderedOffset: t },
      children: v(Im, {
        containerProps: C,
        containerRef: D,
        children: h,
        gap: i,
        axis: a,
        alignItems: j,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: f,
        state: k,
        overflow: p,
        safeMargin: y,
        isStatic: !0,
        as: g,
        fade: b,
        sign: M,
      }),
    });
  }
  let [ee, te] = o(!1),
    N = le(1),
    re = le(0);
  u ??= re;
  let ie = Te(() =>
      k.direction === `rtl` && a === `x`
        ? ne(k.totalItemLength + i + k.inset, k.inset, u.get())
        : ne(-k.totalItemLength - i - k.inset, -k.inset, u.get())
    ),
    P = le(0),
    oe = ee ? P : m ? ie : u,
    se = ve(E, { margin: `100px` }),
    ce = Se(),
    de = se && ce,
    me = fe(),
    he = () => {
      if (!E.current || !O.current) return;
      let e = n.getComputedStyle(E.current).direction,
        { measureItem: t, lengthProp: r, viewportLengthProp: i, getCumulativeInset: o } = Em(a, e),
        s = a === `x` ? `paddingLeft` : `paddingTop`,
        c = a === `x` ? `paddingRight` : `paddingBottom`,
        l = E.current,
        u = O.current.querySelectorAll(`.ticker-item`);
      if (!u.length) return;
      let d = !1,
        f = [];
      for (let e = 0; e < u.length; e++) {
        let n = t(u[e], l);
        f.push(n);
        let r = k.itemPositions[e];
        (!r || n.start !== r.start || n.end !== r.end) && (d = !0);
      }
      let h = Math.min(l[r], n[i]),
        g = p ? n[i] : h;
      y > 0 && (g += y * 2);
      let _ = Nm(f),
        v = n.getComputedStyle(l),
        b = parseInt(v[s] ?? 0),
        x = parseInt(v[c] ?? 0),
        S = p ? o(u[0]) : b,
        C = m === !1 ? Math.max(0, _ - h + b + x) : null;
      (g !== k.visibleLength ||
        _ !== k.totalItemLength ||
        S !== k.inset ||
        k.itemPositions.length !== f.length ||
        d) &&
        A({
          direction: e,
          visibleLength: g,
          itemPositions: f,
          totalItemLength: _,
          inset: S,
          containerLength: h,
          maxInset: C,
          isMeasured: !0,
        });
    };
  I(() => {
    if (!de || !E.current) return;
    he();
    let e = p ? ae(he) : void 0,
      t = ae(E.current, he);
    return () => {
      (e?.(), t());
    };
  }, [e, de, p]);
  let ge = k.totalItemLength > 0;
  ue(
    ge && de && u === re && !me
      ? (e, n) => {
          let r = (n / 1e3) * (t * M * N.get());
          u.set(u.get() - r);
        }
      : be
  );
  let F = c(() => (!ge || !k.visibleLength ? 0 : Pm(k.visibleLength, k.itemPositions, i)), [ge, k]),
    _e = k.totalItemLength === 0 ? 0 : (k.totalItemLength + i) * (F + 1),
    ye = [];
  if (m)
    for (let t = 0; t < F; t++) {
      let n = [];
      e.forEach((r, o) => {
        let s = k.itemPositions[o],
          c = (k.totalItemLength + i) * (t + 1),
          l = s ? { start: s.start + c, end: s.end + c } : AE;
        n.push(
          v(
            Dm,
            {
              offset: oe,
              axis: a,
              listSize: _e,
              itemIndex: o,
              cloneIndex: o,
              bounds: l,
              alignItems: j,
              size: f,
              safeMargin: y,
              numItems: e.length,
              children: r,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let r = `ticker-group-${t}`;
      ye.push(v(Xe, { id: r, children: n }, r));
    }
  km(E, a, P, u, te);
  let xe = l((e) => (k.maxInset === null ? e : Ie(-k.maxInset, 0, e)), [k.maxInset]);
  return v(SE.Provider, {
    value: { ...k, gap: i, clampOffset: xe, offset: u, renderedOffset: oe },
    children: v(Im, {
      containerProps: C,
      children: h,
      containerRef: D,
      listRef: O,
      gap: i,
      axis: a,
      alignItems: j,
      isMeasured: ge,
      isInView: de,
      offset: u,
      renderedOffset: oe,
      items: e,
      itemSize: f,
      clonedItems: ye,
      clampOffset: xe,
      snap: _,
      safeMargin: y,
      onPointerEnter: () => {
        Pe(N, r);
      },
      onPointerLeave: () => {
        Pe(N, 1);
      },
      totalListSize: _e,
      state: k,
      overflow: p,
      loop: m,
      as: g,
      fade: b,
      sign: M,
      fadeTransition: x,
      pageTransition: S,
    }),
  });
}
function Im({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: s,
  isInView: l,
  isStatic: u,
  items: d,
  offset: f,
  clonedItems: p,
  clampOffset: m,
  renderedOffset: h,
  onPointerEnter: g,
  onPointerLeave: _,
  totalListSize: y,
  itemSize: b,
  overflow: x,
  state: S,
  safeMargin: C,
  snap: w,
  loop: D,
  as: O,
  fade: A,
  sign: j,
  fadeTransition: M = NE,
  pageTransition: ee,
}) {
  let te = c(() => P.create(O), [O]),
    N = {},
    { maxInset: ne } = S;
  ne !== null &&
    (N =
      a === `x`
        ? j > 0
          ? { left: ne * -1, right: 0 }
          : { right: ne, left: 0 }
        : { top: ne * -1, bottom: 0 });
  let {
      drag: re,
      _dragX: ie,
      _dragY: ae,
      dragMomentum: oe = !1,
      onDragEnd: se,
      onPointerDown: ce,
      ...ue
    } = t,
    de = a === `x` ? ie : ae,
    fe = T(null),
    pe = () => {
      fe.current &&= (fe.current.stop(), null);
    };
  !se &&
    re &&
    de &&
    ((ce = () => {
      (de.jump(f.get()), pe());
    }),
    (se = (e, { velocity: t }) => {
      let n = f.get();
      (pe(),
        Fe.postRender(() => {
          let e = n + t[a] * (w ? 0.3 : 0.8);
          if (w)
            if (t[a] < 0) e = -xm(-n, S.itemPositions, i, -e);
            else if (t[a] > 0) e = -Sm(-n, S.itemPositions, i, -e, S.containerLength);
            else {
              let t = -xm(-n, S.itemPositions, i, -n),
                r = -Sm(-n, S.itemPositions, i, -n, S.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          let r = D
            ? {}
            : j > 0
              ? { max: 0, min: N[a === `x` ? `left` : `top`] }
              : { min: 0, max: N.right };
          fe.current = Pe(
            de,
            m(e * j) * j,
            w
              ? ee
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let me = le(+!D),
    he = le(0),
    ge = Em(a, S.direction),
    F = typeof A == `number` ? `px` : ``,
    _e = Te(
      () =>
        `linear-gradient(to ${ge.direction}, rgba(0,0,0,${me.get()}) 0px, black ${A}${F}, black calc(100% - ${A}${F}), rgba(0,0,0,${he.get()}) 100%)`
    ),
    ve = A ? { maskImage: _e, WebkitMaskImage: _e } : {},
    ye = T({ start: !0, end: !1 });
  return (
    xe(h, `change`, (e) => {
      if (ne === null) return;
      let t = ne * -1;
      ((e *= j),
        e < 0
          ? ye.current.start && (Pe(me, 0, M), (ye.current.start = !1))
          : ye.current.start || (Pe(me, 1, M), (ye.current.start = !0)),
        e > t
          ? ye.current.end && (Pe(he, 0, M), (ye.current.end = !1))
          : ye.current.end || (Pe(he, 1, M), (ye.current.end = !0)));
    }),
    E(k, {
      children: [
        v(te, {
          ...ue,
          ref: n,
          style: {
            overflowX: !x && a === `x` ? `clip` : void 0,
            overflowY: !x && a === `y` ? `clip` : void 0,
            ...jE,
            ...t.style,
            ...ve,
          },
          onPointerEnter: g,
          onPointerLeave: _,
          drag: re,
          _dragX: ie,
          _dragY: ae,
          dragConstraints: N,
          dragMomentum: oe,
          onPointerDown: ce,
          onDragEnd: se,
          children: E(P.ul, {
            ref: r,
            style: {
              ...ME,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? h : 0,
              y: a === `y` ? h : 0,
              opacity: s || u ? 1 : 0,
              alignItems: o,
              willChange: s && l ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              d.map((e, t) =>
                v(
                  Dm,
                  {
                    axis: a,
                    offset: h,
                    listSize: y,
                    itemIndex: t,
                    bounds: S.itemPositions[t] ?? AE,
                    alignItems: o,
                    size: b,
                    reproject: D,
                    safeMargin: C,
                    numItems: d.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              p || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function Lm(e, t) {
  if (!e) throw Error(t);
}
function Rm(e, t) {
  if (H(e)) return e;
  if (!L(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return zm(parseInt(i));
  if (t === `y` && r) return zm(parseInt(r));
}
function zm(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function Bm(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Vm(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${qE[e]}` : `${qE[e]} ${n}`;
}
function Hm() {
  return n === void 0 ? (YE ?? {}) : YE || ((YE = Um()), YE);
}
function Um() {
  let e = n.location,
    t = n?.bootstrap?.services;
  if (t) return t;
  let r;
  try {
    if (((r = n.top.location.origin), (t = n.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (r && r !== e.origin) throw Error(`Unexpectedly embedded by ${r} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function Wm(e) {
  return e.key + e.extension;
}
function Gm(e) {
  return `${Hm().userContent}/assets/${e}`;
}
function Km(e) {
  return Gm(Wm(e));
}
function qm(e, t) {
  return t ? `${e} ${XE}` : e;
}
function Jm(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return qm(e.name, e.isVariable);
  }
}
function Ym(e) {
  return !!(e && Array.isArray(e));
}
function Xm(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Qm(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function Zm(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Qm(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function $m(e) {
  return $E[th(e)];
}
function eh(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? $m(`variable`) ?? 500);
}
function th(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function nh(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function rh(e, t) {
  return { ...ih(e, t), ...ah(e, t) };
}
function ih(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function ah(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function oh(e) {
  return !!e.variationAxes;
}
function sh(e) {
  return ch(e) || lh(e);
}
function ch(e) {
  return e.startsWith(nD);
}
function lh(e) {
  return e.startsWith(tD);
}
function uh(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function dh(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? XE : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function fh({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = Xm(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function ph(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: oh(e), selector: e.selector };
}
function mh(e) {
  let t = e.fonts.map((e) => ph(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = ph(n);
    if (!e) continue;
    let r = rh(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function hh(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function gh(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function _h(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function vh(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-YSYBFRE6.BZ57zP5h.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-TIA7QUPT.CjCmvCKY.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function yh(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-H6SFY4F5.5HW9yzMR.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-PZLWRK4B.CuFl42Lb.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-RD2SUPQH.BV4yRwNx.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function bh(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(xh);
}
function xh(e) {
  return iD.includes(e);
}
function Sh(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = bh(e)[0];
  return n && t[n];
}
function Ch(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function wh(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function Th(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Eh(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function Dh(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = Th(r, c, s, i);
  if (!bD.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: L(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), SD.set(l, { fontFace: u, doc: t }), Oh(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < vD) return Dh(e, t, n + 1);
          throw new yD(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    bD.set(l, d);
  }
  await bD.get(l);
}
async function Oh(e, t, n) {
  let r = Eh(e, t, n);
  if (!xD.has(r)) {
    let i = new gD.default(e, { style: t, weight: n }).load(null, _D);
    xD.set(r, i);
  }
  try {
    await xD.get(r);
  } catch {
    throw new yD(
      `Failed to check if font is ready (${_D}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function kh(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = Th(n, t, i, r),
    o = SD.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), SD.delete(a)), bD.delete(a), xD.delete(Eh(n, t, i)));
}
function Ah(e) {
  try {
    if (e === `framer`) return jh(wD) ? wD : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-EGNT223R.4Zga1324.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-SXU5BGFE.DwUZJPwH.mjs`)).default;
          default:
            V(e);
        }
      })();
      return jh(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function jh(e) {
  return z(e) && Object.values(e).every(Nh);
}
function Mh(e) {
  return z(e) && L(e.tag);
}
function Nh(e) {
  return Array.isArray(e) && e.every(Mh);
}
function Ph(e, t) {
  d(() => {
    function r(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (n.addEventListener(`keyup`, r), () => n.removeEventListener(`keyup`, r));
  }, [e, t]);
}
function Fh(e, t, r, i) {
  let a = n.innerHeight - i,
    o = Math.min(n.innerWidth - r, t),
    s = a / e;
  return Math.min(o, s);
}
function Ih(e, { width: t, height: r }) {
  if (!e.src || !e.srcSet) return;
  let i = new n.Image();
  return (
    (i.src = e.src),
    (i.srcset = e.srcSet),
    (i.sizes = e.sizes || ``),
    (i.width = t),
    (i.height = r),
    i.decode()
  );
}
function Lh() {
  return document.getElementById(YC) ?? document.getElementById(JC) ?? document.body;
}
function Rh(e, t) {
  return R(e) ? e : (t ?? 0);
}
function zh(e) {
  return Rh(e?.paddingTop, e?.padding) + Rh(e?.paddingBottom, e?.padding);
}
function Bh(e) {
  return Rh(e?.paddingLeft, e?.padding) + Rh(e?.paddingRight, e?.padding);
}
function Vh(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Bh(e)}px)`,
      srcSet: Qa(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Hh(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in DD)) continue;
    let n = DD[t],
      r = e[t];
    if (!(!R(n) || !R(r)) && n !== r) return !0;
  }
  return !1;
}
function Uh(e) {
  let t = _e.get(e.current);
  if (!t) return !1;
  if (Hh(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Hh(e.latestValues)) return !0;
  return !1;
}
function Wh(e) {
  return h(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...i }, s) {
    let u = w(De),
      f = w(IE),
      p = !!f,
      m = T(null),
      h = s ?? m,
      g = T(),
      y = c(() => Vh(t, i.background), [t, i.background]),
      [b, x] = o(!1),
      [S, D] = o(),
      O = l(() => {
        if (t) {
          if (b) {
            j(() => {
              x(!0);
            });
            return;
          }
          Fe.read(() => {
            if (!h.current) return;
            let e = getComputedStyle(h.current),
              n =
                h.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(h.current, `::after`)
                  : void 0,
              r = h.current.offsetWidth ?? 1,
              i = h.current.offsetHeight ?? 1,
              a = Uh(h) || p ? { duration: 0 } : t.transition;
            j(() => {
              (D({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: n?.borderTopWidth,
                borderRight: n?.borderRightWidth,
                borderBottom: n?.borderBottomWidth,
                borderLeft: n?.borderLeftWidth,
                borderStyle: n?.borderStyle,
                borderColor: n?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                x(!0),
                f?.stop());
            });
          });
        }
      }, [t, b, h, f?.stop, p]),
      A = S?.aspectRatio ?? 1,
      M = Lp(() => {
        if (!t || !y?.src) return;
        let e = g.current?.[y.src];
        if (e) return e;
        let n = Fh(A, t.maxWidth, Bh(t), zh(t)),
          r = Ih(y, { width: n, height: n * A });
        return ((g.current = { [y.src]: r }), r);
      }),
      ee = l(
        async (e) => {
          (r?.(e), !(b || !t || !y) && (await M(), O()));
        },
        [r, O, b, y, t, M]
      ),
      te = l((e) => {
        (e?.stopPropagation(),
          j(() => {
            x(!1);
          }));
      }, []);
    (Ph(b, te),
      d(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            M();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = h.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, M),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, M));
          }
        );
      }, [M, h, t]));
    let N = _(),
      ne = S?.transition ?? i.transition ?? u.transition,
      re = S?.borderRadius,
      ie = S?.imageRendering,
      ae = S?.filter,
      oe = S?.borderTop,
      se = S?.borderRight,
      ce = S?.borderBottom,
      le = S?.borderLeft,
      ue = S?.borderStyle,
      de = S?.borderColor,
      fe = !!(oe || se || ce || le || ue || de),
      pe = fe
        ? {
            "--border-top-width": oe,
            "--border-right-width": se,
            "--border-bottom-width": ce,
            "--border-left-width": le,
            "--border-style": ue,
            "--border-color": de,
          }
        : void 0,
      me = { [LC]: i.id },
      he = Rh(t?.paddingTop, t?.padding),
      ge = Rh(t?.paddingBottom, t?.padding),
      F = Rh(t?.paddingLeft, t?.padding),
      _e = Rh(t?.paddingRight, t?.padding),
      ve = S?.borderRadius ? { ...i.style, borderRadius: S.borderRadius } : i.style,
      ye = b ? (i.layoutDependency ? `${i.layoutDependency}-open` : `open`) : i.layoutDependency,
      be = p && b ? void 0 : (i.layoutId ?? (t ? N : void 0));
    return E(k, {
      children: [
        v(e, {
          ...i,
          style: ve,
          onClick: ee,
          layoutId: be,
          ref: h,
          layoutDependency: ye,
          transition: ne,
        }),
        v(We, {
          onExitComplete: () => {
            j(() => {
              (D(void 0), f?.start());
            });
          },
          children:
            b &&
            t &&
            y &&
            v(
              a,
              {
                children: C(
                  E(k, {
                    children: [
                      v(P.div, {
                        ...me,
                        className: n,
                        onClick: te,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: ne,
                        initial: OD,
                        animate: kD,
                        exit: OD,
                      }),
                      v(P.div, {
                        ...me,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${he}px ${_e}px ${ge}px ${F}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: v(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: A,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: v(P.div, {
                            layoutId: be,
                            transition: ne,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": fe,
                            style: {
                              aspectRatio: A,
                              borderRadius: re,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ie,
                              filter: ae,
                              ...pe,
                            },
                            children: v(so, { image: y, alt: y.alt, draggable: i.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Lh()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Gh(e, t) {
  return MD && !t
    ? Document.parseHTMLUnsafe(e)
    : ((jD ??= new DOMParser()), jD.parseFromString(e, t ?? `text/html`));
}
function Kh(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function qh(e, t, n, r) {
  return e.replace(ND, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = _u(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Qp(f) || !Qp(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = qt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = yu(u);
    if (!_ || L(_)) return e;
    Nu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(ZC, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = mi(m, v)), i + o + `"${Kh(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Jh(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Yh(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Xh(e, t, n) {
  let r = T([]);
  Jh(r.current, e) ||
    ((r.current = e),
    ED.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || J.current() !== J.canvas || (e > 0 && fs(n.current));
    }));
}
function Zh() {
  return { current: null };
}
async function Qh(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function $h(e) {
  return e in LD;
}
function eg(e, t) {
  let n = {};
  for (let r in e) {
    if (!$h(r)) continue;
    let i = e[r],
      a = LD[r];
    dt(i) || dt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function tg(e, t = `character`, n, r, i) {
  if (r) {
    let t = Zh();
    return (n.add(t), v(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r;
        return E(
          a,
          {
            children: [
              v(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(RD)?.map((e, t) => {
                  let r = Zh();
                  return (n.add(r), v(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              o ? null : ` `,
            ],
          },
          e + t + o
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r,
          s = Zh();
        return (
          n.add(s),
          E(
            a,
            { children: [v(`span`, { ref: s, style: i, children: e }), o ? null : ` `] },
            e + t + o
          )
        );
      });
    }
    default:
      return e;
  }
}
function ng(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      V(t);
  }
}
function rg(e) {
  let t = [];
  return (
    R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function ig(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : rg(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : rg(n.effect),
              };
      }
    default:
      V(i);
  }
}
function ag(e, t, n) {
  let r = Ha(() => new Set()),
    i = Ga(),
    a = n || !i,
    o = Ye(),
    s = T({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    f = e?.threshold;
  d(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            sg(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          V(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Ee(n, e, { amount: f ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? Ee(t, e, {
              amount: f ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        V(l);
    }
  }, [a, r, n, t, u, f, l]);
  let p = !!e,
    m = e ? ng(e) : void 0;
  return c(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = ig(a, n || og(e, t, i), s.current.effect, o);
        return {
          text: (e) => tg(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Zh();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            sg(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            V(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function og(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function sg(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = eg(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await cg(n, u);
      if (
        e === null ||
        (Pe(e, l, { ...r, restDelta: 0.001, delay: ze(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Pe(e, n, { ...r, restDelta: 0.001, delay: ze(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Qh(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Fe.read(() => {
          ((e = lg(n)),
            e.length !== 0 &&
              Fe.update(() => {
                let t = e.map((e, t) =>
                  Pe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Pe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      V(e);
  }
}
async function cg(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Qh(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function lg(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function ug(e) {
  let t = {};
  for (let n in e) (ye(n) || hb(n)) && (t[n] = e[n]);
  return t;
}
function dg(e) {
  return e.type === a;
}
function fg(e) {
  return e.type === `br`;
}
function pg(e, n, r, a, o = {}, s, c = dg(e) ? -1 : 0) {
  let l = i.toArray(e.props.children);
  dt(r) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!b(e) || !fg(e)) && (u = !1), b(e))) return pg(e, n, r, a, o, s, c + 1);
    let t = dt(r) ? e : r;
    return L(t) && s ? s.text(t) : t;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (L(e.type) || ke(e.type)) {
    let t = F(e.type) || e.type,
      r = d || t,
      p = L(r) ? n?.[r] : void 0;
    ((f.className = Xc(`framer-text`, f.className, p)),
      s && c === 0 && !u && Object.assign(f, s.props(f.style)));
    let m = t === `h1` || t === `h2` || t === `h3` || t === `h4` || t === `h5` || t === `h6`,
      h = n?.anchor;
    if (m && h) {
      let e = mg(l, o);
      f.id = e;
      let t = Xc(`framer-text`, h),
        n = v(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...f.style, scrollMarginTop: a }), (l = [n]));
    }
    r === `ol` &&
      (f.style = { ...f.style, [Yb]: gg(f.start ?? 1, i.count(f.children), f.style?.[Jb] ?? ``) });
  }
  return t(e, f, ...l);
}
function mg(e, t) {
  let n = ti(e.map(hg).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function hg(e) {
  return L(e) || R(e)
    ? e.toString()
    : b(e)
      ? hg(e.props.children)
      : Array.isArray(e)
        ? e.map(hg).join(``)
        : ``;
}
function gg(e, t, n) {
  return Go(Number(e) || 1, t, n);
}
function _g(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = ea(n.x, n.y),
    i = Db(ea(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: ea.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  B(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !ea.isEqual(e, s) && !ea.isEqual(e, c));
  B(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Db.intersection(i, Db(s, c)),
    f = Db.intersection(i, Db(l, u));
  return (B(d && f, `linearGradientLine: Must have a start and end point.`), Db(d, f));
}
function vg(e, t) {
  let n = _g(e.angle),
    r = xs(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Db.pointAtPercentDistance(n, i),
    s = Db.pointAtPercentDistance(n, a),
    c = at([i, a], [0, 1]);
  return {
    id: `id${t}g${Mx.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: Ex.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function yg(e, t) {
  return {
    id: `id${t}g${Px.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: xs(e).map((t) => ({
      color: t.value,
      alpha: Ex.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function bg(e) {
  if (!L(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return R(parseFloat(t));
}
function xg(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return R(n) ? n : 50;
}
function Sg(e) {
  return bg(e) ? xg(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Cg(e) {
  return bg(e) ? xg(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function wg(e, t, n, r) {
  if (((e = Iy.get(e, `#09F`)), !Eb.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * Sg(e.positionX) + f),
        (d = (t.height - l) * Cg(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Cg(e.positionY)))
        : ((n = g), (u = (1 - g) * Sg(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function Tg(e) {
  return e.startsWith(`data:${KD}`);
}
function Eg(e, t) {
  if (/^\w+:/u.test(e) && !Tg(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = J.current() === J.export;
  return Y.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Dg(e) {
  try {
    let t = Gh(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function Og(e, t) {
  Ag(e, kg(t));
}
function kg(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Ag(e, t) {
  (jg(e, t),
    Array.from(e.children).forEach((e) => {
      Ag(e, t);
    }));
}
function jg(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function Mg(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * ($D[t[2]] || 1));
}
function Ng(e) {
  let t = Mg(e.getAttribute(`width`)),
    n = Mg(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Pg(e) {
  return e.indexOf(`image`) >= 0;
}
function Fg(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Ig(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Lg(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? K,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = QD.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Eo(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    H(s) &&
    H(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function Rg({ height: e, width: t, children: n }) {
  let r = zg();
  if (!r || !n) return n;
  let { props: i } = r;
  return v(P.li, {
    ...i,
    style: { ...i.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: n,
  });
}
function zg() {
  try {
    return wm();
  } catch {
    return;
  }
}
function Bg(e) {
  return e > iO ? `lazy` : void 0;
}
function Vg(e, t, n) {
  let r = Wg(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Hg(e) {
  return e ? (e.fonts ?? Ni()) : Ni();
}
function Ug(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Wg(e);
}
function Wg(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Gg(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Kg) })
      : t.fonts.push(Kg(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Gg(e) {
  return aO in e;
}
function Kg(e) {
  let t = qg(e) || Jg(e) ? e : Yg(e);
  return Jg(t) ? t : Xg(t);
}
function qg(e) {
  return `source` in e;
}
function Jg(e) {
  return `cssFamilyName` in e;
}
function Yg(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Xg(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${XE}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Zg(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Qg(e) {
  return e.loader;
}
function $g(e, t, n) {
  let r = Qg(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  K,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  q,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  J,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  Y,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  X,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Z,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  Q,
  eT,
  tT,
  nT,
  rT,
  iT,
  $,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO = e(() => {
    (f(),
      nt(),
      He(),
      m(),
      O(),
      g(),
      (e_ = et({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              if (
                ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8)
              )
                this.lch_h = 0;
              else {
                let e = Math.atan2(this.luv_v, this.luv_u);
                ((this.lch_h = (e * 180) / Math.PI),
                  this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
              }
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
                let e = this.calcMaxChromaHsluv(this.hsluv_h);
                this.lch_c = (e / 100) * this.hsluv_s;
              }
              this.lch_h = this.hsluv_h;
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
                let e = this.calcMaxChromaHpluv();
                this.lch_c = (e / 100) * this.hpluv_p;
              }
              this.lch_h = this.hpluv_h;
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (t_ = et({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (n_ = et({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (r_ = et({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = n_();
        },
      })),
      (i_ = et({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = r_(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (a_ = et({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function r(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function i(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function a(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function o(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function s(t, n) {
              function r() {
                var e = i;
                o(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), o(t));
            }
            function c(e, t, r) {
              ((t ||= {}),
                (r ||= n),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = r));
            }
            var l = null,
              u = null,
              d = null,
              f = null;
            function p(e) {
              return (
                u === null &&
                  (m(e) && /Apple/.test(n.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        n.navigator.userAgent
                      )),
                      (u = !!e && 603 > parseInt(e[1], 10)))
                    : (u = !1)),
                u
              );
            }
            function m(e) {
              return (f === null && (f = !!e.document.fonts), f);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (d === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                d = i.style.font !== ``;
              }
              return [n, r, d ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((c.prototype.load = function (e, t) {
              var o = this,
                c = e || `BESbswy`,
                u = 0,
                d = t || 3e3,
                f = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(o.context) && !p(o.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - f >= d
                          ? t(Error(`` + d + `ms timeout exceeded`))
                          : o.context.document.fonts
                              .load(h(o, `"` + o.family + `"`), c)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      u = setTimeout(function () {
                        t(Error(`` + d + `ms timeout exceeded`));
                      }, d);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(u), e(o));
                  }, t);
                } else
                  r(function () {
                    function r() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (l === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              n.navigator.userAgent
                            )),
                            (l =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            l &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(u),
                          e(o)));
                    }
                    function p() {
                      if (new Date().getTime() - f >= d)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + d + `ms timeout exceeded`)));
                      else {
                        var e = o.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          r()),
                          (u = setTimeout(p, 50)));
                      }
                    }
                    var m = new i(c),
                      g = new i(c),
                      _ = new i(c),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      a(m, h(o, `sans-serif`)),
                      a(g, h(o, `serif`)),
                      a(_, h(o, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      o.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      s(m, function (e) {
                        ((v = e), r());
                      }),
                      a(m, h(o, `"` + o.family + `",sans-serif`)),
                      s(g, function (e) {
                        ((y = e), r());
                      }),
                      a(g, h(o, `"` + o.family + `",serif`)),
                      s(_, function (e) {
                        ((b = e), r());
                      }),
                      a(_, h(o, `"` + o.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = c)
                : ((n.FontFaceObserver = c),
                  (n.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (o_ = () => {}),
      (s_ = n !== void 0),
      (c_ =
        s_ &&
        (N.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(N.userAgent))),
      (l_ = s_ && typeof n.requestIdleCallback == `function`),
      (u_ = l_ ? n.requestIdleCallback : setTimeout),
      (d_ = () => o_),
      (f_ = () => !0),
      (p_ = () => !1),
      (m_ = new Map()),
      (h_ = new Map()),
      (g_ = new Set()),
      (__ = `:`),
      (v_ = s_ ? void 0 : new Set()),
      (y_ = `preload`),
      (b_ = Object.keys),
      (x_ = `equals`),
      (S_ = p.createContext({})),
      (C_ = p.createContext({})),
      (w_ = []),
      (T_ = `default`),
      (E_ = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (D_ = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && St(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = E_.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === E_.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === E_.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== E_.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && v_ !== void 0 && v_.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = E_.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = E_.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && m_.has(this.cacheHash) ? m_.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!_t(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === E_.Fulfilled) return this.value;
          throw this.promiseState === E_.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (O_ = -1),
      (k_ = -2),
      (A_ = -3),
      (j_ = -4),
      (M_ = -5),
      (N_ = -6),
      (P_ = -7),
      (F_ = 2 ** 32 - 1),
      (I_ = F_ - 1),
      (L_ = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (R_ = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (z_ = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (B_ = typeof Uint8Array.fromBase64 == `function`),
      (V_ = typeof process == `object` && process.versions?.node !== void 0),
      (H_ = B_ ? ln : V_ ? dn : pn),
      (U_ = B_ ? un : V_ ? fn : mn),
      (K = s_
        ? n
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (W_ = 2),
      (G_ = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (K_ = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (J_ = class {
        payload = Sn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return _n(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (Y_ = s_ ? void 0 : new J_()),
      (X_ = K_.CollectionUtilsCache),
      (Z_ = new WeakMap()),
      (Q_ = s(void 0)),
      ($_ = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new D_(async () => {
              try {
                let t = await e();
                return (B(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(bt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = Dn(n),
            i = On(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Y_ !== void 0) {
              if (_t(e)) return e.then((e) => (Y_.set(X_, i, e), e));
              Y_.set(X_, i, e);
            }
            return e;
          }
          if (Tn(X_, i)) {
            let e = En(X_, i);
            return (this.cacheMap.set(i, new D_(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = _t(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(bt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Y_ !== void 0 && Y_.set(X_, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new D_(() =>
            s
              .then((e) => (Y_ !== void 0 && Y_.set(X_, i, e), e))
              .catch((e) => {
                console.error(bt(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (ev = /Mac/u),
      (tv = /iPhone|iPod|iPad/iu),
      (nv = /MacIntel/iu),
      (rv = /Edg\//u),
      (iv = /Chrome/u),
      (av = /Google Inc/u),
      (ov = /Safari/u),
      (sv = /Apple Computer/u),
      (cv = /Firefox\/\d+\.\d+$/u),
      (lv = /Version\/([\d.]+)/u),
      (uv = /FramerX/u),
      (dv = /tablet|iPad|Nexus 9/iu),
      (fv = /mobi/iu),
      (pv = 1e3 / 60),
      (mv = 1e3 / 25),
      (hv = 500),
      (gv = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (_v = Promise.resolve()),
      (vv = 100),
      (yv = (e) => {
        Fe.read(e, !1, !0);
      }),
      (bv = $n(yv)),
      (xv = !c_),
      (Sv = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Cv = `framer_variant`),
      (wv = !1),
      (Tv = p.createContext({ global: void 0, routes: {} })),
      (Ev = 10),
      (Dv = 1e4),
      (Ov = (e) => `--view-transition-${e}`),
      (kv = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Ov(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Ov(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${Ov(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Av = {
        circle: {
          makeKeyframe: (e, t) => `${Ov(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Ov(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${vr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Ov(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: kv,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${_r(e.x)} ${_r(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = hr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Ov(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Ov(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Ov(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Ov(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Ov(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${Ov(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (jv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Mv = `view-transition-styles`),
      (Nv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Pv = () => {}),
      (Iv = () => {
        (Fv ||
          ((Fv = document.createElement(`div`)),
          Fv.setAttribute(`aria-live`, `assertive`),
          Fv.setAttribute(`aria-atomic`, `true`),
          (Fv.style.position = `absolute`),
          (Fv.style.transform = `scale(0)`),
          document.body.append(Fv)),
          setTimeout(() => {
            Fv.textContent = document.title;
          }, 60));
      }),
      (Rv =
        s_ &&
        typeof n.navigation?.back == `function` &&
        !(() => {
          if (N === void 0) return !1;
          let e = N.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !zn()),
      (zv = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Bv = p.createContext(null)),
      (Vv = (() => {
        let e = s(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Hv = typeof document < `u` ? r : d),
      (Uv = async () => {}),
      (Wv = { contentLocale: null, activeLocale: null, locales: [], setLocale: Uv }),
      (Gv = (() => {
        let e = p.createContext(Wv);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Kv = (() => {
        let e = p.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (qv = new Set()),
      (Jv = (() => {
        let e = s({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Yv = 46),
      (Xv = 47),
      (Zv = (e, t) => e.charCodeAt(t)),
      (Qv = (e, t) => e.lastIndexOf(t)),
      ($v = (e, t, n) => e.slice(t, n)),
      (ey = !1),
      (ty = `/`),
      (ny = (e) => e === Xv),
      (ry = new Set([`/404.html`, `/404`, `/404/`])),
      (iy = `__f_replay`),
      (ay =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (oy = (e) => {
        e.target?.closest?.(`#main`) &&
          (xi(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (sy = !1),
      (wy = [wi]),
      (Cy = [wi]),
      (Sy = [wi]),
      (xy = [wi]),
      (by = [wi]),
      (yy = [wi]),
      (vy = [wi]),
      (_y = [wi]),
      (gy = [wi]),
      (hy = [wi]),
      (my = [wi]),
      (py = [wi]),
      (fy = [wi]),
      (dy = [wi]),
      (uy = [wi]),
      (ly = [wi]),
      (cy = [wi]),
      (Ey = class {
        constructor() {
          (qe(Ty, 5, this),
            Oe(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            Oe(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            Oe(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            Oe(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            Oe(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            Oe(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            Oe(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            Ti(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Ti(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            Ti(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            Ti(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            Ti(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Ti(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            Ti(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          Ti(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          Ti(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (Ty = Re(null)),
      Ge(Ty, 1, `markRenderStart`, wy, Ey),
      Ge(Ty, 1, `markRenderEnd`, Cy, Ey),
      Ge(Ty, 1, `markUseInsertionEffectsStart`, Sy, Ey),
      Ge(Ty, 1, `markUseInsertionEffectRouterStart`, xy, Ey),
      Ge(Ty, 1, `markUseInsertionEffectsEnd`, by, Ey),
      Ge(Ty, 1, `markUseLayoutEffectsStart`, yy, Ey),
      Ge(Ty, 1, `markRouterUseLayoutEffectStart`, vy, Ey),
      Ge(Ty, 1, `markUseLayoutEffectsEnd`, _y, Ey),
      Ge(Ty, 1, `markUseEffectsStart`, gy, Ey),
      Ge(Ty, 1, `markUseEffectsRouterStart`, hy, Ey),
      Ge(Ty, 1, `markUseEffectsAreSynchronous`, my, Ey),
      Ge(Ty, 1, `markUseEffectsEnd`, py, Ey),
      Ge(Ty, 1, `markRafStart`, fy, Ey),
      Ge(Ty, 1, `markRafEnd`, dy, Ey),
      Ge(Ty, 1, `markLayoutStylePaintEnd`, uy, Ey),
      Ge(Ty, 1, `measureMutationEffects`, ly, Ey),
      Ge(Ty, 1, `measureUnattributedHydrationOverhead`, cy, Ey),
      Ze(Ty, Ey),
      (Oy = !1),
      (ky = { Start: Ai, End: ji }),
      (Ay = class extends Error {}),
      (jy = class extends y {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Ay)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Mi(e, t);
        }
      }),
      (My = Object.freeze([])),
      (Py = new Set()),
      (Fy = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Iy = (() => {
        function e(e) {
          return (
            Ji(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Yi(e) ? e : new zy(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Yi(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Yi(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Ly = `onUpdate`),
      (Ry = `finishTransaction`),
      (zy = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new Fy();
        static interpolationFor(e, t) {
          if (Yi(e)) return Xi(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Yi(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Qi(e.x, t.x), y: Qi(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((ea ||= {})),
      (By = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (Vy = new (e_().Hsluv)()),
      (Hy = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (Uy =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Wy = (e) => {
        let { r: t, g: n, b: r, a: i } = wa(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Gy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ea({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Ky = (e) => {
        let { r: t, g: n, b: r, a: i } = wa(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (qy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ea({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Jy = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return Da(this);
        }
        rgb() {
          return ja(this);
        }
        hsl() {
          return ua(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(ka(t));
            case `srgb`:
              return new e(Aa(ka(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Aa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = q(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Sa(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!L(t) || !q.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Yy = new Map()),
      (q = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Yy.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Yy.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Ma(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && ya(e) !== !1),
          (e.isColorObject = (e) =>
            z(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => la(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Jy.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...aa(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = pa(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = pa(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = la(e.r, e.g, e.b, !0);
            for (let e of Object.keys(By)) if (By[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: ta(i, [0, 1], [t.r, r.r], a),
                g: ta(i, [0, 1], [t.g, r.g], a),
                b: ta(i, [0, 1], [t.b, r.b], a),
                a: ta(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: ta(i, [0, 1], [u, u + f], a),
                s: ta(i, [0, 1], [c.s, l.s], a),
                l: ta(i, [0, 1], [c.l, l.l], a),
                a: ta(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(oa(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => ua(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Xy = (e) => e instanceof Qe),
      (Zy = t_().EventEmitter),
      (Qy = class {
        _emitter = new Zy();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      ($y = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (eb = K.requestAnimationFrame || $y),
      (tb = (e) => eb(e)),
      (nb = 1 / 60),
      (rb = class extends Qy {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          nb = e;
        }
        static get TimeStep() {
          return nb;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), tb(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * nb;
        }
        tick = () => {
          this._started &&
            (tb(this.tick),
            this.emit(`update`, this._frame, nb),
            this.emit(`render`, this._frame, nb),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (ib = new rb()),
      (ab = { target: Ra() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => ab.target,
        hasRestrictions: () => {
          let e = ab.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (ob = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Me({
        borderTopWidth: ob(`y`),
        borderLeftWidth: ob(`x`),
        borderRightWidth: ob(`x`),
        borderBottomWidth: ob(`y`),
      }),
      (sb = p.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (cb = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (lb = {
        ...cb,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (ub = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (db = { ...ub, fontWeight: 500 }),
      (fb = {
        ...ub,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (pb = (e) => e),
      (mb =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (hb = qa(
        (e) =>
          mb.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (gb = (e) => () => {
        qi(e);
      }),
      (_b = () => () => {}),
      (vb = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = Y.useImageSource(e, t, n);
          return c(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (yb = !1),
      (Y = new Proxy(vb, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? _b()
              : gb(
                  yb
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (bb = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (xb = [1, 2, 2.2]),
      (Sb = [512, 1024, 2048, 4096]),
      (Cb = 512),
      (wb = { position: `absolute`, ...bb, top: 0, right: 0, bottom: 0, left: 0 }),
      (Tb = `src`),
      (Eb = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Tb in e;
        },
      }),
      (Db = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = go(ea.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(ea(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => ea.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Zi(e.x, t),
          y: Zi(e.y, t),
          width: Zi(e.width, t),
          height: Zi(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: ea.distance(t, n), height: ea.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            ea.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [Db(t, n), Db(n, r), Db(r, i), Db(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  V(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              V(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  V(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              V(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Db(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Db.intersection(n, t, !0)) {
              let n = Ob[e];
              return (B(n, () => `Invalid edge name: ${JSON.stringify(Ob)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          B(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            B(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Ob = [`top`, `right`, `bottom`, `left`]),
      (kb = {
        quickfix: (e) => (
          (_o(e.widthType) || _o(e.heightType)) && (e.aspectRatio = null),
          H(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || _o(e.widthType) || H(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || _o(e.heightType) || H(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Ab = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = kb.quickfix({
              left: H(t) || Yi(t),
              right: H(n) || Yi(n),
              top: H(r) || Yi(r),
              bottom: H(i) || Yi(i),
              widthType: vo(a),
              heightType: vo(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Iy.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Iy.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Iy.getNumber(t) : null,
              right: d.right ? Iy.getNumber(n) : null,
              top: d.top ? Iy.getNumber(r) : null,
              bottom: d.bottom ? Iy.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Iy.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Iy.getNumber(t?.sizing.height) : null,
            c = wo(e.left, e.right);
          if (o && H(c)) i = o - c;
          else if (n && _o(e.widthType)) i = n.width;
          else if (H(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.widthType);
            }
          let l = wo(e.top, e.bottom);
          if (s && H(l)) a = s - l;
          else if (n && _o(e.heightType)) a = n.height;
          else if (H(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                V(e.heightType);
            }
          return Co(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Ab.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Iy.getNumber(l.width) : null,
            d = l ? Iy.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (jb = 200),
      (Mb = 200),
      (Nb = p.createContext({ parentSize: 0 })),
      (Pb = (e) => {
        let t = Mo(),
          { parentSize: n, children: r } = e,
          i = p.useMemo(() => ({ parentSize: n }), [Po(n), Fo(n)]);
        return t === 1
          ? r
            ? v(k, { children: r })
            : null
          : v(Nb.Provider, { value: i, children: r });
      }),
      (Fb = p.createContext(void 0)),
      (Ib = new Set()),
      (Rb = `style[data-framer-css-ssr-minified]`),
      (zb = (() => {
        if (!Vn()) return new Set();
        let e = document.querySelector(Rb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Bb = `data-framer-css-ssr`),
      (Vb = (e, t, n) =>
        p.forwardRef((r, i) => {
          let { sheet: a, cache: o } = p.useContext(Fb) ?? {},
            s = n;
          if (!Vn()) {
            st(t) && (t = t(Uo(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Ub.add(e, s);
          }
          return (
            M(() => {
              (s && zb.has(s)) ||
                (st(t)
                  ? t(Uo(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Ho(e, a, o));
            }, []),
            v(e, { ...r, ref: i })
          );
        })),
      (Hb = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Ub = new Hb()),
      (Wb = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (Gb = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Gb || {})),
      (Kb = Gb),
      (qb = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (B(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Wo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            B(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${Kb.BorderTopWidth}${Kb.BorderRightWidth}${Kb.BorderBottomWidth}${Kb.BorderLeftWidth}`,
      (Jb = `--list-style-type`),
      (Yb = `--max-list-digits`),
      (Xb = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Zb = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Qb = { display: `inline-block` }),
      ($b = { display: `block` }),
      (ex = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Zb.display};
            flex-direction: ${Zb.flexDirection};
            justify-content: ${Zb.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Xo([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Xo([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Xo([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Qb.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Xo([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Xo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Xo([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Xo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Xo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Xo([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Xo([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Xo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Xo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Xo([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Xo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Xo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Xo([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Xo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${$b.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${Yb}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${Zo(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (tx = `--text-truncation-display-inline-for-safari-16`),
      (nx = `--text-truncation-display-none-for-safari-16`),
      (rx = `--text-truncation-line-break-for-safari-16`),
      (ix = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (ax = `(background: -webkit-named-image(i))`),
      (ox = `(contain-intrinsic-size: inherit)`),
      (sx = [
        `@supports ${ax} and (not ${ox}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${ix.join(`, `)} { display: var(${tx}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${ix.map((e) => `${e}::after`).join(`, `)} { content: var(${rx}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${nx}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${tx}, ${Qb.display}) }
    }`,
      ]),
      (cx = `--framer-will-change-override`),
      (lx = `--framer-will-change-effect-override`),
      (ux = `--framer-will-change-filter-override`),
      (dx = `--overflow-clip-fallback`),
      (fx = `--one-if-corner-shape-supported`),
      (px = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${cx}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${cx}: transform; } }`,
                ]
              : [`body { ${cx}: none; ${lx}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${ux}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${ux}: filter; } }`,
                ]
              : [`body { ${ux}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${dx}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${fx}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...ex,
          ...Wb,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...sx,
          f,
        ];
      }),
      (mx = Vo(() => px(!1))),
      (hx = Vo(() => px(!0))),
      (gx = Rn()),
      (_x = p.createContext(!1)),
      (vx = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (yx = Vn() ? new vx() : void 0),
      (bx = `data-framer-size-compatibility-wrapper`),
      (xx = `0.000001px`),
      (Sx = ` translateZ(${xx})`),
      (Cx = Un() || zn() || Wn()),
      (wx = (() => {
        class e extends y {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ps(t) : ms(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Rt(this.props, e);
          }
          componentDidUpdate(e) {
            pb(this.props).clip &&
              pb(this.props).radius === 0 &&
              pb(e).radius !== 0 &&
              gs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (Tx = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (Ex = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: (e) => {
          let t = ya(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
        toHex: (e) => q.toHexString(q(e)).toUpperCase(),
        toRgb: (e) => q.toRgb(q(e)),
        toRgbString: (e) => q.toRgbString(q(e)),
        toHSV: (e) => q.toHsv(q(e)),
        toHSL: (e) => q.toHsl(q(e)),
        toHslString: (e) => q.toHslString(q(e)),
        toHsvString: (e) => q.toHsvString(q(e)),
        hsvToHSLString: (e) => q.toHslString(q(sa(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => q.toHex(q(sa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => q.toHexString(q(sa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => q.toRgbString(q(sa(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => sa(e.h, e.s, e.v),
        rgbaToString: (e) => q.toRgbString(q(e)),
        rgbToHexValue: (e) => q.toHex(q(e)),
        rgbToHexString: (e) => q.toHexString(q(e)),
        hslToString: (e) => q.toHslString(q(e)),
        hslToRgbString: (e) => q.toRgbString(q(e)),
        toColorPickerSquare: (e) => q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => q(e).isValid !== !1,
        equals: (e, t) =>
          q.isP3String(e) || q.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = q(e)),
              typeof t == `string` && (t = q(t)),
              q.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = q(e);
          return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
        },
        toFormatString: (e) => (q.isP3String(e) ? e : q.toRgbString(q(e))),
      }),
      (Dx = /var\(.+\)/u),
      (Ox = new Map()),
      (kx = [`stops`]),
      (Ax = [`start`, `end`]),
      (jx = [`angle`, `alpha`]),
      (Mx = {
        isLinearGradient: (e) => z(e) && jx.every((t) => t in e) && (ws(e) || Cs(e)),
        hash: (e) => e.angle ^ Ss(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = xs(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (Nx = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (Px = {
        isRadialGradient: (e) => z(e) && Nx.every((t) => t in e) && (ws(e) || Cs(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Ss(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = xs(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Fx = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (Ix = new Set([...Fx, ...Fx.map((e) => `${e}Capture`)])),
      (Lx = `overflow`),
      (Rx = { x: 0, y: 0, width: 200, height: 200 }),
      (zx = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (Bx = h(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = rs(e),
          l = Fs(s),
          u = as(e),
          d = As(e),
          f = T(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": pb(e)[`data-framer-offset-parent-id`],
          };
        !Is(e) && n && (pb(m)[`data-framer-name`] = n);
        let [h, g] = Ps(s),
          _ = Ns(s),
          y = Ro(_);
        (r && !(g && !y && Eo(_))
          ? ((l.transformTemplate ||= is(r)), Object.assign(m, ts(r)))
          : (l.transformTemplate ||= void 0),
          ds(e, p));
        let b = fo(e),
          x = Ls(s, _, g, w(_x)),
          S = Io(
            E(k, {
              children: [
                b
                  ? v(so, {
                      alt: e.alt ?? ``,
                      image: b,
                      containerSize: g ?? void 0,
                      nodeId: e.id && ns(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                v(lo, { ...a, border: i, layoutId: u }),
              ],
            }),
            x
          ),
          C = Bo(e.as),
          D = zo(b);
        return (
          e.fitImageDimension &&
            D &&
            ((h[e.fitImageDimension] = `auto`), (h.aspectRatio = D.width / D.height)),
          E(C, { ...m, ...l, layoutId: u, style: h, ref: p, children: [S, o] })
        );
      })),
      (Vx = $o(
        h(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? v(Bx, { ...e, ref: t }) : null;
        })
      )),
      (Hx = `__LAYOUT_TREE_ROOT`),
      (Ux = p.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (Wx = class extends y {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === Hx && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return v(Ux.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (Gx = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Kx = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (qx = s(new Map())),
      (Jx = typeof IntersectionObserver > `u` ? o_ : Gs),
      (Yx = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Xx = p.createContext(null)),
      (Zx = class extends y {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === Hx && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return v(Ve.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (Qx = (e) => {
        let t = p.useContext(Ux);
        return v(Zx, { ...e, sharedLayoutContext: t });
      }),
      ($x = p.createContext(!0)),
      (eS = s({ register: () => {}, deregister: () => {} })),
      (tS = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = Xs(),
          i = T({
            register: l(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: l(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          d(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, st(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          v(eS.Provider, { value: i, children: n })
        );
      }),
      (nS = p.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: f,
        exitAnimation: p,
        instant: m,
        initialProps: h,
        exitProps: g,
        position: _ = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: b,
        areMagicMotionLayersPresent: x,
        id: S,
        isInitial: C,
      }) {
        let D = se(),
          O = w(Ae),
          { persistLayoutIdCache: k } = w(sb),
          A = T({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: $s({}, h, a),
          }),
          j = T(null),
          M = O !== null && !O.isPresent;
        (t && A.current.wasCurrent === void 0 && k(),
          d(() => {
            if (e || !D) return;
            if (M) {
              A.current = { ...A.current, wasBeingRemoved: M };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = A.current,
              o = (t && !i) || (!M && A.current.wasBeingRemoved && t),
              s = n && !r,
              c = $s(A.current.origins, h, a),
              l = A.current.wasReset;
            (o || s
              ? (D.stop(), D.start({ zIndex: b, ...c, ...a }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: b, ...rS, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, M]));
        let ee = m ? { type: !1 } : `velocity` in f ? { ...f, velocity: 0 } : f,
          te = m ? { type: !1 } : p || f,
          N = { ..._ };
        ((N.left === void 0 || N.right === void 0) && (N.width = `auto`),
          (N.top === void 0 || N.bottom === void 0) && (N.height = `auto`));
        let ne = (ec(a) || ec(h)) && (e || t || n) ? 1200 : void 0,
          re = { ...rS, ...A.current.origins },
          ie = e
            ? {
                initial: { ...re, ...h },
                animate: { ...re, ...a, transition: ee },
                exit: { ...re, ...g, transition: f },
              }
            : { animate: D, exit: { ...re, ...g, transition: te } },
          P = !(M || x === !1),
          ae = !!t && P,
          oe = t && C;
        return E(Vx, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || M || (t && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: ne,
          },
          children: [
            e &&
              v(Vx, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: f,
                initial: { opacity: m && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: M ? void 0 : c,
              }),
            v(Vx, {
              ...N,
              ...ie,
              transition: {
                default: ee,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: M ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: oe || e || (t && y) ? 1 : 0 },
              "data-is-present": P ? void 0 : !1,
              ref: j,
              children: v(Xx.Provider, {
                value: j,
                children: v($x.Provider, {
                  value: ae,
                  children: v(tS, {
                    isCurrent: ae,
                    isOverlayed: r,
                    children: v(Qx, {
                      isLead: t,
                      animatesLayout: !!y,
                      transition: ee,
                      isExiting: !P,
                      isOverlayed: r,
                      id: S,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Qs)),
      (rS = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (iS = class {
        warning = () => {
          qi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (aS = s(new iS())),
      (oS = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (sS = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (cS = b_(rS)),
      (lS = p.createContext(void 0)),
      (uS = p.createContext(void 0)),
      (dS = (() => {
        class e extends y {
          #e = null;
          state = sS();
          static defaultProps = { enabled: !0 };
          static contextType = lS;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !ho(t) || !mo(t)) return;
            let n = { ...oS.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = ic(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!ho(t) || !mo(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, oS.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = ic(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !ho(e) || !mo(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, oS.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, oS.Fade, t);
          }
          push(e, t) {
            this.#i(e, tc(t), t);
          }
          modal(e, t) {
            this.#i(e, oS.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, nc(t), t);
          }
          flip(e, t) {
            this.#i(e, rc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, oS.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = yc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              B(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              B(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                v(
                  nS,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: kc(o, e),
                    transitionProps: u,
                    animation: Oc(o, e),
                    backfaceVisible: Ec(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: v(Rs, { children: jc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              v(
                nS,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Tc(n, t),
                  transitionProps: Dc(n, t),
                  instant: kc(n, t, !0),
                  animation: Oc(n, t),
                  exitProps: e.transition.enter,
                  visible: Ac(n, t),
                  backdropColor: Cc(e.transition),
                  backfaceVisible: wc(n, t),
                  onTapBackdrop: Mc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: jc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return v(Vx, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: v(aS.Provider, {
                value: this,
                children: E(uS.Provider, {
                  value: i,
                  children: [
                    v(nS, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: bc(n),
                      animation: xc(n),
                      backfaceVisible: Sc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: v(za, {
                        children: v(Wx, {
                          children: v(We, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    v(We, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (fS = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (pS = $o(p.forwardRef(Nc))),
      $e(i_(), 1),
      (mS = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(mS || {})),
      (hS = `optional`),
      $e(i_(), 1),
      $e(i_(), 1),
      (gS = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (_S = Symbol(`private`)),
      (vS = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [_S]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Fy(),
                reset() {
                  for (let t in i)
                    if (gS(i, t)) {
                      let n = gS(e, t) ? pb(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, bS);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[_S].reset()),
          (e.addObserver = (e, t) => e[_S].observers.add(t)),
          e
        );
      })()),
      (yS = class {
        set = (e, t, n, r) => {
          if (t === _S) return !1;
          let i = e[_S],
            a,
            o;
          if (
            (Yi(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = Iy(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = pb(e)[t];
          if (l !== void 0) {
            Yi(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (pb(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === _S) return pb(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[_S].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(_S);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== _S) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (bS = new yS()),
      (xS = `opacity`),
      (SS = (() => {
        function e(t = {}) {
          let n = vS(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => vS.resetObject(e));
          }),
          (e.addObserver = (e, t) => vS.addObserver(e, t)),
          e
        );
      })()),
      (CS = { update: 0 }),
      (wS = p.createContext({ update: NaN })),
      (TS = class extends y {
        observers = [];
        state = CS;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), ib.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), SS.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            SS._stores.forEach((e) => {
              let t = SS.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            v(wS.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      $e(i_(), 1),
      (ES = `__framer__`),
      (DS = ES.length),
      (OS = p.createContext(void 0)),
      (kS = p.createContext(void 0)),
      (AS = `ssr-variant`),
      (jS = `ssr-variant-group-separator`),
      (MS = p.forwardRef(function (e, t) {
        let n = $c(t),
          r = p.useContext(kS),
          i = p.useSyncExternalStore(d_, p_, f_),
          a = Ha(() => (i ? (Vn() ? 1 : 2) : 0)),
          o = p.useContext(OS);
        return ii(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, sl(t, c, i));
            case 1:
              return nl(i, s, c, u, l, d, n, t);
            case 2:
              return nl(i, s, c, u, l, d, Qc, void 0);
            default:
              V(a);
          }
        }, [o, r, n, e]);
      })),
      (NS = Vb(MS, `.${AS} { display: contents }`, `PropertyOverrides`)),
      (PS = `default`),
      (FS = new Set([PS])),
      (IS = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (B(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (B(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = PS, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return PS;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = rl(r)) : PS;
        }
        setAll(e, t = FS, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = st(n.transformTemplate) ? n.transformTemplate?.({}, RS) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: z(a) ? a : void 0,
              animate: z(o) ? o : void 0,
              transformTemplate: L(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (LS = new IS()),
      (RS = `__Appear_Animation_Transform__`),
      (zS = `data-framer-appear-id`),
      (BS = `data-framer-appear-animation`),
      (VS = (e) => {
        if (Ga())
          return {
            animate: ll(e.animate) ? e.animate : void 0,
            initial: ll(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (HS = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (US = (e) => ({
        x: rt(e?.x ?? 0),
        y: rt(e?.y ?? 0),
        opacity: rt(e?.opacity ?? 1),
        scale: rt(e?.scale ?? 1),
        rotate: rt(e?.rotate ?? 0),
        rotateX: rt(e?.rotateX ?? 0),
        rotateY: rt(e?.rotateY ?? 0),
        skewX: rt(e?.skewX ?? 0),
        skewY: rt(e?.skewY ?? 0),
        transformPerspective: rt(e?.transformPerspective ?? 0),
      })),
      (WS = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (GS = { willChange: `transform` }),
      Object.freeze(GS),
      (KS = {}),
      Object.freeze(KS),
      (qS = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (JS = () => {
        let e = T();
        return (
          d(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (YS = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (XS = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (ZS = 1),
      (QS = 4),
      ($S = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (eC = [`animate`, `animate`]),
      (tC = { inputRange: [], outputRange: [] }),
      (nC = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (rC = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (iC = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (aC = [0, 1]),
      (oC = { parallax: YS, styleAppear: $S, styleTransform: nC, loop: qS, presence: XS }),
      (sC = b_(oC)),
      (cC = (e) => e.reduce((e, t) => (e += t), 0)),
      (lC = (e) => e.reduce((e, t) => (e *= t), 1)),
      (uC = `current`),
      (dC = (e) =>
        p.forwardRef((t, n) => {
          if (t.__withFX)
            return v(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = VS(t);
          if (r) return v(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = Ml(t),
            m = Hs(n),
            { values: h, style: g } = vl(s, m, f, t.style, t[oe]),
            { values: _, style: y } = ml(i, m, t.style?.visibility),
            { values: b, style: x } = Al(o, m),
            { values: S, style: C } = El(a, m),
            { values: w, style: T } = fl(c, m),
            E = p.useMemo(() => {
              let e = new Qe(u ?? 1);
              return {
                scale: [S.scale, w.scale, h.scale, b.scale],
                opacity: [S.opacity, w.opacity, h.opacity, e, b.opacity],
                x: [S.x, w.x, h.x, b.x],
                y: [S.y, w.y, _.y, h.y, b.y],
                rotate: [S.rotate, w.rotate, h.rotate, b.rotate],
                rotateX: [S.rotateX, w.rotateX, h.rotateX, b.rotateX],
                rotateY: [S.rotateY, w.rotateY, h.rotateY, b.rotateY],
                skewX: [S.skewX, w.skewX, h.skewX, b.skewX],
                skewY: [S.skewY, w.skewY, h.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, S.transformPerspective],
              };
            }, [u, b, _, S, w, h]);
          Pl(t.style, E);
          let D = Te(E.scale, lC),
            O = Te(E.opacity, lC),
            k = Te(E.x, cC),
            A = Te(E.y, cC),
            j = Te(E.rotate, cC),
            M = Te(E.rotateX, cC),
            ee = Te(E.rotateY, cC),
            te = Te(E.skewX, cC),
            N = Te(E.skewY, cC),
            ne = Te(E.transformPerspective, cC),
            { drag: re, dragConstraints: ie } = l;
          ss(re && Nl(ie) ? ie : void 0);
          let P = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: ee,
            skewX: te,
            skewY: N,
          };
          dt(d) && (P.transformPerspective = ne);
          let ae = Fl(t.animate) ? t.animate : void 0,
            se = Fl(t.initial) ? t.initial : void 0,
            ce = Fl(t.exit) ? t.exit : void 0,
            le = f && !s.presenceInitial ? { initial: se, animate: ae, exit: ce } : {};
          return v(e, {
            ...l,
            ...le,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...P, ...C, ...g },
            values: h,
            ref: m,
          });
        })),
      (fC = s({})),
      (pC = p.createContext({})),
      (mC = p.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = p.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = $c(a);
        return v(pC.Provider, { value: o, children: s(r, i) });
      })),
      (hC = (e) =>
        p.forwardRef((t, n) =>
          v(e, { layoutId: as(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (gC = {}),
      (_C = () => gC),
      (vC = (e) => {
        gC = e;
      }),
      (yC = !1),
      (bC = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Rl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              bt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          bn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Rl(e)) throw e;
          return ((yC = !0), this.props.children);
        }
      }),
      (xC = n === void 0 ? null : new Promise(() => {})),
      (SC = v(zl, {})),
      (CC = s(!1)),
      (CC.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (wC = v(Vl, {})),
      (TC = class extends y {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Ul(this.props.getErrorMessage(), t?.componentStack), Hl(e, t));
        }
        render() {
          let { children: e, fallback: t = wC } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (EC = class extends y {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Hl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (DC = p.createContext(void 0)),
      (OC = `code-crash:`),
      (kC = hC(
        p.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = Ha(() => (t ? `${t}-container` : void 0)),
            d = Bo(n),
            f = ru(
              p.Children.map(e, (e) =>
                p.isValidElement(e) ? p.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return v(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: v(_x.Provider, {
              value: !0,
              children: v(Bv.Provider, {
                value: i ?? null,
                children: v(Va, {
                  enabled: !1,
                  children: v(Xe, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (AC = p.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = ru(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Bo(f);
          return v(Bv.Provider, {
            value: a ?? null,
            children: v(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return v(Bv.Provider, {
            value: a ?? null,
            children: v(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (jC = s({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (MC = `framer-cursor-none`),
      (NC = `framer-pointer-events-none`),
      (PC = x(function ({ children: e }) {
        let t = Ha(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = iu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = Ye();
        return E(jC.Provider, { value: t, children: [e, !n && v(RC, {})] });
      })),
      (FC = Vb(
        PC,
        [
          `.${MC}, .${MC} * { cursor: none !important; }`,
          `.${NC}, .${NC} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (IC = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (LC = `data-framer-portal-id`),
      (RC = x(function () {
        let { onRegisterCursors: e } = w(jC),
          [t, n] = o(!1),
          i = le(0),
          a = le(0),
          s = le(0),
          c = T(null),
          u = T({ cursors: {}, cursorHash: void 0 }),
          f = os();
        (r(() => {
          let e = K.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? j(() => n(!1)) : n(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          d(() => {
            if (!t) return;
            let e = 0,
              n = 0;
            function r() {
              (i.set(e), a.set(n), Pe(s, 1, { type: `tween`, duration: 0.2 }));
            }
            let o = () => {
              if (ut(u.current.cursors)) return;
              let t = cu(e, n);
              t !== u.current.cursorHash && ((u.current.cursorHash = t), Fe.update(() => f()));
            };
            function l(t) {
              if (t.pointerType === `touch`) {
                Ue(o);
                return;
              }
              (Fe.read(o, !0), (e = t.clientX), (n = t.clientY), Fe.update(r));
            }
            function d(e) {
              if (e.target === c.current || !c.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              Fe.update(() => {
                c.current?.dispatchEvent(t);
              });
            }
            return (
              K.addEventListener(`pointermove`, l),
              document.addEventListener(`pointerdown`, d),
              document.addEventListener(`pointerup`, d),
              Fe.read(o, !0),
              () => {
                (K.removeEventListener(`pointermove`, l),
                  document.removeEventListener(`pointerdown`, d),
                  document.removeEventListener(`pointerup`, d),
                  Ue(o));
              }
            );
          }, [s, i, a, f, t]),
          d(() => {
            if (!t) return;
            function e() {
              Pe(s, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              K.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), K.removeEventListener(`blur`, e));
              }
            );
          }, [s, t]),
          r(() => {
            function t(e) {
              ((u.current.cursors = e),
                (u.current.cursorHash = ut(e) ? null : cu(i.get(), a.get())),
                f());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(MC, !1));
            };
          }, [i, a, e, f]));
        let { cursors: p, cursorHash: m } = u.current,
          h = m ? p[m] : null,
          g = au(h);
        r(() => {
          t && document.body.classList.toggle(MC, g);
        }, [g, t]);
        let _ = h?.component,
          y = h?.transition ?? { duration: 0 },
          b = y.duration === void 0 ? y : { ...y, duration: y.duration * 1e3 },
          x = Ce(i, b),
          S = Ce(a, b),
          C = Te(() => x.get() + (h?.offset?.x ?? 0)),
          E = Te(() => S.get() + (h?.offset?.y ?? 0)),
          O = h?.alignment,
          k = h?.placement,
          A = l((e, t) => `translate(${su(k, O)}) ${t}`, [O, k]);
        return !t || !h || !_
          ? null
          : v(D, {
              children: v(_, {
                transformTemplate: A,
                style: { ...IC, x: C, y: E, opacity: s },
                globalTapTarget: !0,
                variant: h?.variant,
                ref: c,
                className: NC,
              }),
            });
      })),
      (zC = `webPageId`),
      (BC = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            B(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (B(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((s_ && !Wn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(du(e), e), this.collectedLinks.set(du(t), t));
          let n = this.nestingInfo.get(du(e)) ?? new Set();
          (n.add(du(t)), this.nestingInfo.set(du(e), n));
        }
      }),
      (VC = new BC()),
      (HC = `element`),
      (UC = `collection`),
      (WC = `collectionItemId`),
      (GC = `pathVariables`),
      (KC = `framer/page-link,`),
      (qC = s(void 0)),
      (JC = `overlay`),
      (YC = `template-overlay`),
      (XC = class extends y {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((n.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(bt(c_ ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          bn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (c_ && document.getElementById(`main`)?.innerHTML) || ``;
          return v(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${bt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (ZC = /:([a-z]\w*)/gi),
      (QC = s(void 0)),
      ($C = 500),
      (ew = 0.9),
      (tw = 1.7),
      (nw = 4),
      (rw = 1 / 0),
      (iw = new WeakMap()),
      (aw = new Set()),
      (ow = new Map()),
      (sw = !xv || typeof IntersectionObserver > `u` ? null : Pu()),
      (cw = Ou(
        h(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = Vt(),
            m = Ut(),
            h = Mu(),
            { activeLocale: g, locales: _ } = oi(),
            v = Bu(),
            y = er(),
            x = fu(),
            S = Vu({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            C = c(() => {
              if (!t) return {};
              let e = uu(t) ? t : yu(t);
              if (!e) return {};
              if (L(e))
                return Gu(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: S,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (_t(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = ku(p, m, e, g, c, h),
                x = Iu(n, !0),
                C = x === `_blank`,
                w = { pathVariables: f, locale: b },
                T = (e) =>
                  Uu(
                    p,
                    l,
                    () =>
                      y(l, w, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e
                  );
              return {
                href: u,
                target: x,
                onClick: Wu(u, S, T),
                "data-framer-page-link-current": (m && Nu(m, e, h)) || void 0,
                navigate: T,
                preload: () =>
                  y(l, w, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
              };
            }, [t, p, g, h, n, m, r, S, a, _, o, v, y]),
            w = Hs(b(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: k, ...A } = C;
          Us(
            w,
            (e) => {
              if (!(e === null || !D || !E || x))
                return sw?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k, x]
          );
          let j = !!T;
          return xu(
            $c(f).cloneAsArray(e, (e) => Ku(e, { ...d, ...Ju(A, u, j) }, w)),
            l,
            s,
            t,
            C,
            w
          );
        })
      )),
      (lw = p.createContext(void 0)),
      (uw = `__framer_force_showing_editorbar_since`),
      (dw = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (fw = () => {
        try {
          return !!localStorage[uw];
        } catch {
          return !1;
        }
      }),
      (pw = () => !fw()),
      (mw = (() => {
        let e = s(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (hw = null),
      (gw = null),
      u_(nd),
      (_w = (e, t, r, i, a, o) => {
        let s = w(lw),
          c = T(),
          l = jn(),
          u = T(!0);
        return (
          d(() => {
            function d() {
              (!hw || !gw) && nd();
              let n = r ? new URL(r, K.location.href) : K.location,
                c = {
                  version: W_,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: n.href,
                  hostname: n.hostname,
                  pathname: n.pathname,
                  search: n.search || null,
                  hash: n.hash || null,
                  timezone: hw,
                  locale: gw,
                },
                d = u.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && L(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (_t(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = d()),
                t = e instanceof Promise ? await e : e;
              ((c.current = t),
                u.current ? (u.current = !1) : bn(`published_site_pageview`, t, `eager`));
            })();
            let f = async (e) => {
              if (e.persisted) {
                let e = (c.current = d()),
                  t = e instanceof Promise ? await e : e;
                ((c.current = t), bn(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              n.addEventListener(`pageshow`, f),
              () => {
                n.removeEventListener(`pageshow`, f);
              }
            );
          }, [e, t, r, i, a, s, l, o]),
          c
        );
      }),
      (vw = 0),
      (yw = 500),
      (bw = 200),
      (xw = `main`),
      (Sw = `framerGeneratedPage`),
      (Cw = `<!-- Start of headStart -->`),
      (ww = `<!-- End of headStart -->`),
      (Tw = `<!-- Start of headEnd -->`),
      (Ew = `<!-- End of headEnd -->`),
      (Dw = `<!-- Start of bodyStart -->`),
      (Ow = `<!-- End of bodyStart -->`),
      (kw = `<!-- Start of bodyEnd -->`),
      (Aw = `<!-- End of bodyEnd -->`),
      (jw = p.createContext(void 0)),
      (Mw = { status: `loading`, data: void 0 }),
      (Nw = 5e3),
      (Pw = () => {}),
      (Fw = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Jd(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Jd(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = K.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Qd(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Yc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Qd(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Vn() || !mu(e.url, !1)) return;
          let t = Jd(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Zd(n, e);
          return (e.resultOutputType === `image` && L(i) && (await Gd(i).catch(Pw)), i);
        }
        async fetchWithCache(e) {
          if (!Vn()) return;
          let t = Jd(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Qd(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, Mw);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!mu(r, !1)) return Pw;
          let a = Jd(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (Iw = s(void 0)),
      (Lw = s(!0)),
      (Rw = ({ children: e, client: t }) => {
        let [n] = o(() => t ?? new Fw()),
          [r, i] = o(!0);
        return (
          d(
            () => (
              n.hydrateCache(),
              j(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          v(Lw.Provider, { value: r, children: v(Iw.Provider, { value: n, children: e }) })
        );
      }),
      (Ke.WillChange = tt),
      (zw = Ou(
        h(function ({ links: e, children: t, ...n }, r) {
          return $c(r)(t(ef((t) => e.map(t), [e])), n);
        })
      )),
      (Bw = { priority: void 0, canYield: !0 }),
      (Z = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return yf(e, t);
            case `boolean`:
              return xf(e);
            case `color`:
              return wf(e);
            case `date`:
              return Ef(e);
            case `enum`:
              return Of(e);
            case `file`:
              return Af(e);
            case `link`:
              return Mf(e);
            case `number`:
              return Pf(e);
            case `object`:
              return Lf(e, t);
            case `responsiveimage`:
              return zf(e);
            case `richtext`:
              return Vf(e);
            case `string`:
              return Gf(e);
            case `vectorsetitem`:
              return Uf(e);
            case `unknown`:
              return e;
            default:
              V(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return ct(e)
            ? { type: `boolean`, value: e }
            : mt(e)
              ? { type: `date`, value: e.toISOString() }
              : R(e)
                ? { type: `number`, value: e }
                : L(e)
                  ? { type: `string`, value: e }
                  : lt(e)
                    ? { type: `array`, value: e.map(Z.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && qf(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && qf(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && qf(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && qf(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && qf(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Z.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Z.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Kf(e),
            i = Kf(t);
          return ft(r) || ft(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Kf(e),
            i = Kf(t);
          return ft(r) || ft(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Kf(e),
            i = Kf(t);
          return ft(r) || ft(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Z.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              V(e);
          }
        },
      }),
      (Vw = { type: `unknown`, isNullable: !0 }),
      (Hw = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Vc(e);
          B(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (B(n !== `array`, `Array properties are not supported`),
              B(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (pt(i)) continue;
            let a = this.schema[t];
            if (!dt(a)) {
              if ((B(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Jf(this.collection, this.locale))[t]?.[n];
          return D_.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Jf(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = of(e);
            i && (await i);
            let a = t[r];
            B(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Jf(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = of(t);
            e && (await e);
            let a = n[Number(i)];
            (B(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (Uw = new Map()),
      (Ww = new WeakMap()),
      (Gw = `$r_`),
      (Kw = new Map()),
      (qw = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = sp(e, t)), (this.priority = tp(n)));
        }
        *resolveArrayValue(e) {
          return yield* uf(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* W(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          B(ip(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          B(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return gt(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          B(op(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (B(n, `Can't find collection for vector set item pointer`),
            B(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return gt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (Jw = `index`),
      (Yw = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), G(this.name, ...e));
        }
      }),
      (Xw = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new Qw();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (Zw = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
      }),
      (Qw = class extends Yw {
        name = `Indexes`;
      }),
      ($w = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          B(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                B(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: rp(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                B(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: ap(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends Yw {
        name = `Fields`;
      }),
      (eT = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return G(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (tT = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return G(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== Jw) return !1;
          return !0;
        }
      }),
      (nT = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return G(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (rT = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (B(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (B(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new tT();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new nT(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          B(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (B(e, `Field must exist`), e.field);
        }
      }),
      (iT = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = dp(),
            i = fp(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (aT = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (oT = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (sT = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (cT = class extends sT {
        group;
        getGroup() {
          return (B(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (B(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return sf(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return cf(this.evaluate(void 0), void 0, e);
        }
      }),
      (lT = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return G(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (uT = class e extends cT {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return G(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new nT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new lT(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* uf(
              n.tuples.map((t) =>
                uf(
                  this.projections.map((n) => W({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new aT();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            B(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (dT = { type: 0 }),
      (fT = class extends sT {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return sf(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return cf(this.evaluate(void 0, void 0));
        }
      }),
      (pT = { type: 0 }),
      (mT = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return G(`CaseCondition`, this.when, this.then);
        }
      }),
      (hT = class e extends fT {
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return G(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new mT(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* W({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: uf(
              this.conditions.map((n) =>
                W({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Z.equal(n, e, pT)) return t;
          } else for (let { when: e, then: t } of r) if (Sf(e)) return t;
          return i;
        }
      }),
      (gT = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new rT();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new tT();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (dt(t)) continue;
                a.add(t.field);
                let r = new eT(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new $w(up(this.fieldId++), void 0, t.definition, void 0),
                  a = new lT(t, r);
                i.push(a);
                let s = new eT(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (dt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              B(n.alias, `Subqueries should have an alias`);
              let r = up(this.fieldId++),
                a = n.alias,
                s = new $w(r, a, t.definition, void 0),
                c = new lT(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              V(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Qf(t.data, this.locale),
            i = t.alias,
            a = new Xw(cp(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new $w(up(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new $w(up(this.fieldId++), Jw, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: Jw, collectionName: i });
            let t = new tT(),
              r = new eT(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new tT(),
              o = new Zw(lp(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new tT(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              V(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              V(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(Vw, null);
        }
        buildLiteralValue(e) {
          let t = Z.parse(e.value);
          return this.normalizer.newScalarConstant(Vw, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (B(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              V(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new _T(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new _T(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new mT(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              V(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              V(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (_T = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (vT = class e extends cT {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return G(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new nT(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* uf(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Sf(n[t] ?? null));
        }
      }),
      (yT = class e extends cT {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return G(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * iT : 50 * iT);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, rf()),
            i = rf(),
            a = [];
          for (let n of r) {
            let r = of(i);
            r && (yield r);
            let o = new aT();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new oT(n, a);
        }
      }),
      (bT = class e extends cT {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return G(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new nT(new tT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (xT = class e extends cT {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return G(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return $.estimate(1, 200 * iT);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(rf()),
            r = rf(),
            i = [];
          for (let a of n) {
            let n = of(r);
            n && (yield n);
            let o = new aT();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new oT(t, i);
        }
      }),
      (ST = class e extends cT {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return G(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new nT(new tT(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (CT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Sf(n) && Sf(r) };
        }
      }),
      (wT = class extends fT {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return G(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (TT = { type: 0 }),
      (ET = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.contains(n, r, TT) };
        }
      }),
      (DT = { type: 0 }),
      (OT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.endsWith(n, r, DT) };
        }
      }),
      (kT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.equal(n, r, dT) };
        }
      }),
      (AT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThan(n, r, dT) };
        }
      }),
      (jT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThanOrEqual(n, r, dT) };
        }
      }),
      (MT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThan(n, r, dT) };
        }
      }),
      (NT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThanOrEqual(n, r, dT) };
        }
      }),
      (PT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.equal(n, r, dT) };
        }
      }),
      (FT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Sf(n) || Sf(r) };
        }
      }),
      (IT = { type: 0 }),
      (LT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.startsWith(n, r, IT) };
        }
      }),
      (RT = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof vT) {
            if (e.predicate instanceof CT) {
              let n = new bT(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof FT) {
              let n = new ST(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof xT)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new yT(n, pp(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof vT) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof xT)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof kT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof wT &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = pp(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new yT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof PT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof wT &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = pp(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new yT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof MT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof wT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = pp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new yT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof NT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof wT &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = pp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new yT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof AT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof wT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = pp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new yT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof jT &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof wT &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = pp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new yT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ET &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof wT &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = pp(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new yT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof LT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof wT &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = pp(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new yT(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof OT &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof wT &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = pp(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new yT(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (zT = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new BT();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          B(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (BT = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (VT = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (HT = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new zT(mp(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new VT(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            B(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (UT = class e extends cT {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return G(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new nT(new tT(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new oT(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new aT();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* W({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof kT) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new oT(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new aT();
              (n.merge(i),
                n.merge(a),
                Sf(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (WT = class e extends cT {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return G(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new nT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* W({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Ff(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (GT = class e extends cT {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return G(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new nT(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* W({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Ff(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (KT = class e extends fT {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return G(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) dt(n.collection) || e.add(n);
          return new nT(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new aT();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (qT = class e extends fT {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            B(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return G(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Z.cast(n, this.definition);
        }
      }),
      (JT = class e extends fT {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return G(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (dt(this.field.collection) || e.add(this.field), new nT(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new aT();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (YT = { type: 0 }),
      (XT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.in(n, r, YT) };
        }
      }),
      (ZT = { type: 1 }),
      (QT = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return G(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* W({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Z.indexOf(n, r, ZT) };
        }
      }),
      ($T = class extends Error {}),
      (eE = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return G(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = gp(n),
            a = gp(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (tE = class e extends fT {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return G(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Z.length(n) };
        }
      }),
      (nE = class e extends fT {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Sf(yield* this.input.evaluate(e, t)) };
        }
      }),
      (rE = { type: 0 }),
      (iE = class e extends fT {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return G(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* W({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.in(n, r, rE) };
        }
      }),
      (aE = class extends fT {
        constructor(e, t) {
          B(e.name !== Jw, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return G(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (B(e, `Context must exist`), e.getValue(this.field))
            : (B(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (oE = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new xT(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new yT(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new UT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof wT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof UT && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new vT(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new uT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof uT &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new WT(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new GT(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof wT) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new aE(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new wT(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof nE)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof kT) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof PT) return this.newScalarEquals(e.left, e.right);
          if (e instanceof MT) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof NT) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof AT) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof jT) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof CT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof FT) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new nE(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof wT && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof wT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof wT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof wT && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new CT(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof wT && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof wT && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof wT && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof wT && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new FT(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof aE;
          if (t instanceof aE && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new kT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof aE;
          if (t instanceof aE && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new PT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof aE;
          if (t instanceof aE && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new MT(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof aE;
          if (t instanceof aE && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new NT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof aE;
          if (t instanceof aE && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new AT(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof aE;
          if (t instanceof aE && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new jT(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new XT(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new iE(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new mT(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new hT(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new ET(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new LT(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new OT(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new tE(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new QT(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new KT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new JT(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new eE(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new qT(e, t);
          return this.finishScalar(n);
        }
      }),
      (sE = class extends cT {}),
      (cE = class e extends sE {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return G(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new nT(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * iT).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          B(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            B(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) _p(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                B(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new aT();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (B(s, `Item not found`), B(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (lE = { type: 0 }),
      (uE = class e extends sE {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return G(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== Jw && (dt(e.collection) || t.add(e));
          return new nT(new tT(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === Jw) {
                let r = n.collection;
                B(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                B(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                B(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Z.equal(a, o, lE)) {
                if (ft(a) || Z.lessThan(a, o, lE)) return i ? -1 : 1;
                if (ft(o) || Z.greaterThan(a, o, lE)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (dE = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new HT();
        normalizer = new oE(this.memo);
        explorer = new RT(this.normalizer);
        optimize(e) {
          let t = new gT(this.normalizer, this.query, this.locale).build(),
            n = of(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (B(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new cE(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new uE(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (fE = tf(`query-engine`)),
      (pE = class {
        async evalQuery(e, t, n, r) {
          fE.enabled &&
            fE.debug(`Query:
${Ap(e)}`);
          let i = new qw(e, t, r),
            a = new dE(e, t, i),
            o = of(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = _t(s) ? await s : s,
            u = of(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = of(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(W(a, r)));
          }
          let h = lf(uf(m, r), r);
          return n ? [_t(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new qw(t, n, r);
          return lf(
            uf(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return W(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (mE = K_.QueryCache),
      (hE = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = Y_ === void 0 ? void 0 : new Map();
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = Np(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = np(n) ?? `user-visible`,
              o = np(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Xn(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              Y_ !== void 0 &&
                this.serializedCache !== void 0 &&
                !Yf(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && Y_.set(mE, r, e);
            }
            return i.value;
          }
          let a = new D_(() => {
            let i = Yf(r),
              a = i ? void 0 : En(mE, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                wn(e, r);
              }
            return Y_ !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), Y_.set(mE, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (gE = new hE(new pE())),
      (_E = `style[data-framer-breakpoint-css]`),
      (vE = `page`),
      (yE = Symbol(`cycle`)),
      (SE = (() => {
        let e = s(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (CE = (() => {
        let e = s(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (wE = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r; ) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (TE = wE(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (EE = wE(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (DE = {
        ...TE,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = Tm(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n; ) ((t += Tm(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (OE = { start: `flex-start`, end: `flex-end` }),
      (kE = h(Fm)),
      (AE = { start: 0, end: 0 }),
      (jE = { display: `flex`, position: `relative` }),
      (ME = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (NE = { duration: 0.2, ease: `linear` }),
      (PE = h(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? P.div,
          m = Ka(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return v(kE, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (FE = h(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: f,
            ...p
          } = e,
          m = r ?? P.div,
          h = ci() === `rtl` && o === `x` ? -1 : 1,
          g = (f === `paused` ? 0 : (i ?? 100)) * s * h,
          _ = le(0),
          y = T(0),
          b = T(!1),
          x = T(!1),
          S = T(!1),
          C = (e) => {
            S.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          ue((e, t) => {
            let n = Math.abs(_.getVelocity()),
              r = x.current ? g * c : g;
            if (performance.now() > y.current && (!b.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = _.get() - e;
              ((b.current &&= (_.stop(), !1)), _.set(n));
            }
          }),
          d(() => {
            f === `paused` && _.stop();
          }, [f, _]),
          v(kE, {
            ref: t,
            as: m,
            ...p,
            gap: l,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: u,
            _dragX: o === `x` ? _ : void 0,
            _dragY: o === `y` ? _ : void 0,
            offset: _,
            drag: o,
            dragMomentum: !0,
            onClickCapture: C,
            onDragStart: () => {
              S.current = !0;
            },
            onDragEnd: () => {
              ((y.current = performance.now()),
                (b.current = !0),
                setTimeout(() => {
                  S.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              x.current = !0;
            },
            onMouseLeave: () => {
              x.current = !1;
            },
          })
        );
      })),
      (IE = (() => {
        let e = s(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (LE = ({ onPlayStateChange: e, children: t }) => {
        let n = c(
          () => ({ start: () => j(() => e(`running`)), stop: () => j(() => e(`paused`)) }),
          [e]
        );
        return v(IE.Provider, { value: n, children: t });
      }),
      (RE = h(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: i,
            tickerEffectXOverflow: a,
            tickerEffectYOverflow: s,
            tickerEffectOverflow: c,
            tickerEffectGap: l,
            tickerEffectDirectionModifier: u,
            tickerEffectHoverModifier: d,
            tickerEffectPosition: f,
            tickerEffectIsDataRepeater: p,
            style: m,
            ...h
          } = e,
          g = Ka(),
          [_, y] = o(`running`),
          b = i?.startsWith(`column`) ? `y` : `x`,
          x = u === `reverse` ? -1 : 1,
          S = H(d) ? d / 100 : 1,
          C = (b === `x` ? (a ?? c ?? `visible`) : (s ?? c ?? `visible`)) === `visible`,
          w = Rm(l, b),
          T = ym(n),
          E = { ...m, "--ticker-cms-total-children": p ? T.length : void 0, position: f };
        return g || !r
          ? v(LE, {
              onPlayStateChange: y,
              children: v(PE, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: _,
              }),
            })
          : v(LE, {
              onPlayStateChange: y,
              children: v(FE, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: _,
              }),
            });
      })),
      (zE = (e) => (t) => (t.tickerEffectEnabled ? v(RE, { ...t, as: e }) : v(e, { ...t }))),
      (BE = p.createContext(void 0)),
      (VE = () => p.useContext(BE)),
      (HE = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (UE = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (WE = HE),
      (GE = `System Default`),
      (KE = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(WE)) {
            let n = WE[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(UE)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: GE, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Vm(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (qE = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (JE = class extends Map {
        _hash = 0;
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (XE = `Variable`),
      (ZE = `BI;`),
      (QE = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = Km(n),
              u = Xm(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: Ym(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? eh(u, e.font.faceDescriptors?.weight) : $m(c),
                style: nh(c),
                cssFamilyName: qm(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = $m(e.variant),
                r = $m(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = th(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : $E[t],
            style: nh(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Ym(t)
            ? t?.map((e) => {
                if (Zm(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${ZE}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(ZE)) return null;
          let [t, n] = e.split(ZE);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      ($E = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (eD = tf(`custom-font-source`)),
      (tD = `CUSTOM;`),
      (nD = `CUSTOMV2;`),
      (rD = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = fh(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = Km(i),
              f = hh(i),
              p = dh(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: Ym(u),
                variationAxes: Xm(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = uh(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              eD.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              gh(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && mh(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = _h(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${nD}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${tD}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            B(sh(e), `Selector must be a custom font selector`),
            lh(e) ? e.slice(tD.length) : e.slice(nD.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Ym(t)
            ? t?.map((e) => {
                if (Zm(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (iD = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (aD = `FS;`),
      (oD = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (sD = Object.keys(oD)),
      (cD = RegExp(`^(?:${[...sD, `italic`, `variable`].join(`|`)})`, `u`)),
      (lD = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = sD.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && oD[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(aD)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(aD, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${aD}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${aD}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await vh(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!cD.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = rh(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: Sh(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: qm(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await yh(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (uD = `Inter`),
      (dD = `FR;`),
      (fD = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (pD = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(dD) && !e.startsWith(uD)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && fD[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${dD}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await yh(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (mD = `GF;`),
      (hD = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        supportedSubsetsByFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        getSupportedSubsetsByFamilyName(e) {
          return this.supportedSubsetsByFamilyName.get(e) ?? [];
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(mD)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(mD, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${mD}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${mD}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.supportedSubsetsByFamilyName.clear());
          let i = await vh(`google`),
            a = [],
            o = wh(t, (e) => e.family),
            s = wh(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            this.supportedSubsetsByFamilyName.set(n.family, n.subsets ?? []);
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(Bm),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (Bm(e) ? rh(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: Ch(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: qm(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await yh(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (gD = $e(a_(), 1)),
      (_D = 5e3),
      (vD = 3),
      (yD = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (bD = new Map()),
      (xD = new Map()),
      (SD = new Map()),
      (CD = (e, t) => Dh(e, t)),
      (wD = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (TD = class {
        enabled = !1;
        bySelector = new JE();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new KE()),
            (this.google = new hD()),
            (this.fontshare = new lD()),
            (this.framer = new pD()),
            (this.custom = new rD()),
            (this.builtIn = new QE()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await Y.fetchGoogleFontsList(),
                n = await Ah(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = Y.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Ah(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = Y.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Ah(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!sh(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            sh(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                kh({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = hD.parseVariant(n.variant);
            if (Bm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: Jm(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = lD.parseVariant(r.variant);
            if (Bm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: Jm(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = QE.parseVariant(i.variant);
            if (Bm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: Jm(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return pD.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = oh(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Wn() || (await Oh(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await CD({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await CD({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (kh({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              V(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(aD)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                qi(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(mD)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  qi(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(ZE)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  qi(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(sh) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  qi(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !ED.loadedSelectors.has(e));
          n.length !== 0 &&
            (await ED.loadWebFontsFromSelectors(n),
            n.every((e) => ED.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (B(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (ED = new TD()),
      (DD = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (OD = { opacity: 0 }),
      (kD = { opacity: 1 }),
      (AD = Wh(
        p.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: s,
              style: l,
              ...u
            } = e,
            d = { ...l },
            f = c(() => zo(n), [n]),
            [m, h] = o();
          p.useEffect(() => {
            if (!n?.src || !s || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                j(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, s, f]);
          let g = f ?? m;
          return (
            s && g && ((d[s] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            E(Bo(e.as), {
              ...u,
              style: d,
              ref: t,
              draggable: a,
              children: [n && v(so, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (MD = !Bn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (ND =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (PD = `{{ text-placeholder }}`),
      (FD = `rich-text-wrapper`),
      (ID = $o(
        h(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: s,
              fonts: l = [],
              width: u,
              height: f,
              left: p,
              right: m,
              top: h,
              bottom: g,
              center: _,
              className: y,
              stylesPresetsClassName: b,
              visible: x = !0,
              opacity: S,
              rotation: C = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = J.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: j,
              positionStickyRight: M,
              positionStickyBottom: ee,
              positionStickyLeft: te,
              __htmlStructure: N,
              __fromCanvasComponent: ne = !1,
              _forwardedOverrideId: re,
              _forwardedOverrides: ie,
              _usesDOMRect: ae,
              children: oe,
              ...se
            } = e,
            ce = Mo(),
            le = as(e),
            ue = T(null),
            de = t ?? ue,
            { navigate: fe, getRoute: pe } = Vt(),
            me = Ut();
          (tr(e.preload ?? []), ds(e, de));
          let he = w(_x),
            ge = fu(),
            F = o,
            _e = re ?? n;
          if (_e && ie) {
            let e = ie[_e];
            typeof e == `string` && (F = e);
          }
          let ve = ``;
          if (F) {
            let e = Kh(F);
            ve = N ? N.replace(PD, e) : `<p>${e}</p>`;
          } else if (i) ve = i;
          else if (s) {
            let e = Kh(s);
            ve = N ? N.replace(PD, e) : `<p>${e}</p>`;
          } else a && (ve = a);
          let ye = Mu(),
            be = c(() => (ge || !pe || !me ? ve : qh(ve, pe, me, ye)), [ve, pe, me, ye]);
          if (
            (d(() => {
              let e = de.current;
              if (e === null) return;
              function t(e) {
                let t = Eu(e.target, de.current);
                qn(e) ||
                  !fe ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (vu(fe, t, ye) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [fe, ye]),
            Xh(l, ne, de),
            !x)
          )
            return null;
          let xe = D && O() === J.canvas,
            I = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Yh(E),
              opacity: xe ? 0 : S,
              flexShrink: 0,
            },
            Se = J.hasRestrictions(),
            Ce = ko(e, ce || 0, !1),
            we = ae && (u === `auto` || f === `auto`),
            Te =
              e.transformTemplate || !Ce || !Se || ne || we
                ? (e.transformTemplate ?? is(_))
                : void 0;
          if (!k) {
            if (Ce && Se && !we) {
              let e = Iy.getNumber(C).toFixed(4);
              ((I.transform = `translate(${Ce.x}px, ${Ce.y}px) rotate(${e}deg)`),
                (I.width = Ce.width),
                (I.minWidth = Ce.width),
                (I.height = Ce.height));
            } else
              ((I.left = p),
                (I.right = m),
                (I.top = h),
                (I.bottom = g),
                (I.width = u),
                (I.height = f),
                (I.rotate = C));
            A
              ? (!ge || he) &&
                ((I.position = `sticky`),
                (I.willChange = `transform`),
                (I.top = j),
                (I.right = M),
                (I.bottom = ee),
                (I.left = te))
              : ge && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`);
          }
          return (
            Jc(e, I),
            Gc(e, I),
            Object.assign(I, e.style),
            v(P.div, {
              id: n,
              ref: de,
              ...se,
              style: I,
              layoutId: le,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": _,
              className: Xc(y, b, FD),
              transformTemplate: Te,
              dangerouslySetInnerHTML: { __html: be },
            })
          );
        })
      )),
      (LD = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (RD = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (zD = h(function (e, t) {
        return v(`svg`, { ...e, ref: t, children: e.children });
      })),
      (BD = P.create(zD)),
      (VD = h(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return v(BD, {
          ...r,
          ref: i,
          viewBox: t,
          children: v(P.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (HD = []),
      (UD = `RichTextContainer`),
      (WD = h(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: s,
            bottom: l,
            center: u,
            children: d,
            environment: f = J.current,
            fonts: p = HD,
            height: m,
            isEditable: h = !1,
            left: g,
            name: _,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: S,
            positionStickyRight: C,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: ee,
            verticalAlignment: te = `top`,
            visible: N = !0,
            width: ne,
            withExternalLayout: re = !1,
            viewBox: ie,
            viewBoxScale: P = 1,
            effect: ae,
            ...oe
          } = e,
          se = Mo(),
          ce = f(),
          le = ce === J.canvas,
          ue = le || ce === J.export,
          de = w(_x),
          fe = as(e),
          pe = T(null),
          me = t ?? pe;
        (ds(e, me), Xh(p, n, me));
        let he = ag(ae, me),
          ge = c(() => {
            if (d) return pg(d, j, M, o, void 0, he.getTokenizer());
          }, [d, j, M, o, he]);
        if (!N) return null;
        let F = { opacity: h && le ? 0 : y },
          _e = Yh(te);
        _e !== Zb.justifyContent && (F.justifyContent = _e);
        let ve = {},
          ye = J.hasRestrictions(),
          be = ko(e, se || 0, !1),
          xe = a && (ne === `auto` || m === `auto`),
          I =
            e.transformTemplate || !be || !ye || n || xe ? (e.transformTemplate ?? is(u)) : void 0;
        (re ||
          (be && ye && !xe
            ? ((ve.x = be.x + (R(k?.x) ? k.x : 0)),
              (ve.y = be.y + (R(k?.y) ? k.y : 0)),
              (ve.left = 0),
              (ve.top = 0),
              (F.rotate = Iy.getNumber(O)),
              (F.width = be.width),
              (F.minWidth = be.width),
              (F.height = be.height))
            : ((F.left = g),
              (F.right = D),
              (F.top = ee),
              (F.bottom = l),
              (F.width = ne),
              (F.height = m),
              (F.rotate = O)),
          b
            ? (!ue || de) &&
              ((F.position = `sticky`),
              (F.willChange = `transform`),
              (F.top = E),
              (F.right = C),
              (F.bottom = x),
              (F.left = S))
            : le && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`)),
          Jc(e, F),
          Gc(e, F),
          Object.assign(F, A, k, ve),
          fe && (oe.layout = `preserve-aspect`));
        let Se = Bo(e.as),
          Ce = oe[`data-framer-name`] ?? _,
          we = le ? ug(pb(oe)) : oe;
        return L(e.viewBox)
          ? e.as === void 0
            ? v(VD, {
                ...we,
                ref: me,
                style: F,
                layoutId: fe,
                viewBox: ie,
                viewBoxScale: P,
                transformTemplate: I,
                "data-framer-name": Ce,
                "data-framer-component-type": UD,
                children: ge,
              })
            : v(Se, {
                ...we,
                ref: me,
                style: F,
                layoutId: fe,
                transformTemplate: I,
                "data-framer-name": Ce,
                "data-framer-component-type": UD,
                children: v(VD, {
                  viewBox: ie,
                  viewBoxScale: P,
                  style: { width: `100%`, height: `100%` },
                  children: ge,
                }),
              })
          : v(Se, {
              ...we,
              ref: me,
              style: F,
              layoutId: fe,
              transformTemplate: I,
              "data-framer-name": Ce,
              "data-framer-component-type": UD,
              children: ge,
            });
      })),
      (GD = $o(
        h(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (L(a)) {
            !r.stylesPresetsClassName &&
              z(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
            return v(ID, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return v(WD, { ...r, ref: i, children: b(a) ? a : void 0 });
        })
      )),
      (KD = `framer/asset-reference,`),
      (qD = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Eg(t);
        return v(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: v(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (JD = Vn()),
      (YD = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (XD = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (ZD = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(Tx(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Dg(e);
            (s &&
              (t && Og(s, n),
              (s.id = n),
              (o = Ng(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          JD && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = XD),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          JD && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new YD(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !JD) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        JD && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${XD}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (QD = new ZD()),
      ($D = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (eO = h(function (e, t) {
        let n = Mo(),
          r = as(e),
          i = p.useRef(null),
          a = t ?? i,
          o = VE();
        return (
          ds(e, i),
          v(nO, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (tO = 5e4),
      (nO = class e extends wx {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...wx.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return ko(e, e.parentSize || 0);
        }
        container = p.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return ko(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (QD.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || Lg(this.container, this.props);
        }
        componentWillUnmount() {
          (QD.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (Eb.isImageObject(t) &&
            Eb.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            gs(this.svgElement, `fill`, null, !1),
            Lg(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = Iy.getNumber(r);
          if (
            ((e.opacity = H(this.props.opacity) ? this.props.opacity : 1), J.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              Eo(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = ab;
            if (l === J.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: _,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            T = {};
          (this.collectLayout(w, T),
            Uc(this.props, w),
            Jc(this.props, w),
            wx.applyWillChange(this.props, w, !1));
          let D = null;
          if (typeof r == `string` || q.isColorObject(r)) {
            let e = q.isColorObject(r) ? r.initialValue || q.toRgbString(r) : r;
            ((w.fill = e), (w.color = e));
          } else if (Mx.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${Mx.hash(t)}`;
            w.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = vg(t, x);
            D = v(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: v(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  v(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (Px.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${Px.hash(t)}`;
            w.fill = `url(#${n})`;
            let i = yg(t, x);
            D = v(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: v(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  v(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (Eb.isImageObject(r)) {
            let e = wg(r, C, x);
            e &&
              ((w.fill = `url(#${e.id})`),
              (D = v(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: v(`defs`, { children: v(qD, { ...e }) }),
              })));
          }
          let O = { "data-framer-component-type": `SVG` },
            A = !S;
          A && Object.assign(O, ts(this.props.center));
          let j =
              !y &&
              !D &&
              !w.fill &&
              !w.background &&
              !w.backgroundImage &&
              i.length < tO &&
              !Pg(i) &&
              !Fg(i),
            M = null;
          if (j)
            ((w.backgroundSize = `100% 100%`),
              (w.backgroundImage = vt(i)),
              QD.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = QD.subscribe(i, !m, e, y);
            (QD.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              Ig(w) && (w.overflow = `hidden`),
              (M = E(k, {
                children: [
                  D,
                  v(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: T,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    Eb.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let ee = Bo(this.props.as),
            { href: te, target: N, rel: ne, onClick: re, onTap: ie } = this.props,
            P = s || c;
          return v(ee, {
            ...O,
            ...b,
            layoutId: l,
            transformTemplate: A ? is(this.props.center) : void 0,
            id: e,
            ref: p,
            style: w,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: P ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": P ? void 0 : `true`,
            onTap: ie,
            onClick: re,
            href: te,
            target: N,
            rel: ne,
            children: M,
          });
        }
      }),
      (rO = $o(eO)),
      (iO = 1e3),
      (aO = `explicitInter`),
      (Qe.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = rt(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  QD as $,
  $g as A,
  Ip as B,
  Rg as C,
  bv as Ct,
  Ub as D,
  hx as E,
  Bb as F,
  Et as G,
  Fi as H,
  Hg as I,
  VC as J,
  v_ as K,
  Ug as L,
  LS as M,
  zS as N,
  Xc as O,
  RS as P,
  vC as Q,
  Bg as R,
  AC as S,
  zE as St,
  Bc as T,
  Ct as U,
  Y_ as V,
  oO as W,
  gE as X,
  Gi as Y,
  Jp as Z,
  pE as _,
  Vb as _t,
  mS as a,
  lu as at,
  GD as b,
  cl as bt,
  XC as c,
  fu as ct,
  cw as d,
  oi as dt,
  Si as et,
  Ay as f,
  Ki as ft,
  NS as g,
  gm as gt,
  QC as h,
  Vt as ht,
  kC as i,
  Ut as it,
  BS as j,
  ED as k,
  AD as l,
  nm as lt,
  $d as m,
  Yt as mt,
  Il as n,
  Ll as nt,
  Ua as o,
  Zp as ot,
  dr as p,
  Pp as pt,
  Ei as q,
  mC as r,
  Xt as rt,
  OS as s,
  Wp as st,
  Du as t,
  Bp as tt,
  D_ as u,
  si as ut,
  J as v,
  _m as vt,
  Vg as w,
  rO as x,
  Zg as xt,
  zw as y,
  dC as yt,
  Vc as z,
};
//# sourceMappingURL=framer.Bct4reZY.mjs.map
