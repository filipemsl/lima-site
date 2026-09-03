import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  _ as i,
  b as a,
  c as o,
  j as s,
  k as c,
  l,
  o as u,
  s as d,
} from "./react.BNsJAPhr.mjs";
import { C as f, a as p, r as m, t as h } from "./motion.CA7Ore89.mjs";
import {
  A as g,
  C as _,
  I as v,
  L as y,
  O as b,
  R as x,
  S,
  St as C,
  T as w,
  W as T,
  X as ee,
  _t as E,
  a as D,
  at as O,
  b as k,
  bt as A,
  ct as j,
  d as M,
  dt as N,
  ft as te,
  g as P,
  gt as F,
  h as ne,
  ht as I,
  i as L,
  l as re,
  lt as ie,
  mt as ae,
  nt as R,
  ot as oe,
  pt as z,
  r as B,
  s as se,
  st as ce,
  t as le,
  tt as ue,
  ut as de,
  w as V,
  x as H,
  y as fe,
  yt as U,
  z as pe,
} from "./framer.Bct4reZY.mjs";
import {
  a as me,
  c as he,
  i as ge,
  n as _e,
  o as ve,
  r as ye,
  s as be,
  t as xe,
} from "./E1cy6o9Uk.JVFmGK8s.mjs";
import { n as Se, t as Ce } from "./LiP8W1iRK.BJetlflW.mjs";
import { a as we, t as Te } from "./AcQ8tZaTg.BMQIb9SM.mjs";
import Ee, { t as De } from "./RYjZ3Rb7klNNm4tMbKYM_mbQzoqat-78H1N-pZ653aY.Bm_9eCct.mjs";
function Oe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  W,
  We = e(() => {
    (u(),
      T(),
      h(),
      r(),
      he(),
      (ke = U(f.div)),
      (Ae = A(U(f.div))),
      (je = [`LyYqIhL9G`, `HRAXoMV0F`, `HZWFdfmTf`]),
      (Me = `framer-QBMLA`),
      (Ne = {
        HRAXoMV0F: `framer-v-nulx1o`,
        HZWFdfmTf: `framer-v-mysnjh`,
        LyYqIhL9G: `framer-v-iff1iq`,
      }),
      (Pe = { duration: 0, type: `tween` }),
      (Fe = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Ie = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Le = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Re = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (ze = ({ value: e, children: t }) => {
        let r = s(p),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: t });
      }),
      (Be = f.create(t)),
      (Ve = { Default: `LyYqIhL9G`, Hidden: `HZWFdfmTf`, Loading: `HRAXoMV0F` }),
      (He = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: Ve[i.variant] ?? i.variant ?? `LyYqIhL9G`,
        Wld3NDzSj: e ?? i.Wld3NDzSj,
      })),
      (Ue = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = E(
        i(function (e, n) {
          let r = c(null),
            i = n ?? r,
            s = a(),
            { activeLocale: u, setLocale: d } = N();
          R();
          let { style: p, className: h, layoutId: g, variant: _, Wld3NDzSj: v, ...y } = He(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: ee,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = F({
              cycleOrder: je,
              defaultVariant: `LyYqIhL9G`,
              ref: i,
              variant: _,
              variantClassNames: Ne,
            }),
            A = Ue(e, O),
            { activeVariantCallback: j, delay: M } = ue(x),
            te = j(async (...e) => {
              if ((E({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            P = [me],
            ne = () => x !== `HZWFdfmTf`,
            I = b(Me, ...P),
            L = () => x !== `HRAXoMV0F`,
            re = () => x === `HRAXoMV0F`;
          return o(m, {
            id: g ?? s,
            children: o(Be, {
              animate: O,
              initial: !1,
              children:
                ne() &&
                o(ze, {
                  value: Pe,
                  children: l(f.button, {
                    ...y,
                    ...w,
                    className: b(I, `framer-iff1iq`, h, S),
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: A,
                    layoutId: `LyYqIhL9G`,
                    onTap: te,
                    ref: i,
                    style: {
                      backdropFilter: `blur(10px)`,
                      backgroundColor: `rgba(0, 0, 0, 0.25)`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      WebkitBackdropFilter: `blur(10px)`,
                      ...p,
                    },
                    ...Oe({ HRAXoMV0F: { "data-framer-name": `Loading` } }, x, T),
                    children: [
                      L() &&
                        o(k, {
                          __fromCanvasComponent: !0,
                          children: o(t, {
                            children: o(f.h1, {
                              className: `framer-styles-preset-1daus99`,
                              "data-styles-preset": `aeorLkodY`,
                              style: {
                                "--framer-text-color": `var(--extracted-gdpscs, rgb(255, 255, 255))`,
                              },
                              children: `SHOW MORE`,
                            }),
                          }),
                          className: `framer-kexe3e`,
                          fonts: [`Inter`],
                          layoutDependency: A,
                          layoutId: `rIgtxzIjo`,
                          style: { "--extracted-gdpscs": `rgb(255, 255, 255)` },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      re() &&
                        o(Ae, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: Fe,
                          className: `framer-1ig5hb0`,
                          "data-framer-appear-id": `1ig5hb0`,
                          "data-framer-name": `Spinner`,
                          initial: Ie,
                          layoutDependency: A,
                          layoutId: `DWmLi0f27`,
                          optimized: !0,
                          style: {
                            mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                            WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          },
                          children: o(ke, {
                            __framer__loop: Re,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: Le,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-72i0d0`,
                            "data-framer-name": `Conic`,
                            layoutDependency: A,
                            layoutId: `St3oB8sc5`,
                            style: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(255, 255, 255) 342deg)`,
                            },
                            children: o(f.div, {
                              className: `framer-z36l04`,
                              "data-framer-name": `Round`,
                              layoutDependency: A,
                              layoutId: `M_Cj7LYeu`,
                              style: {
                                backgroundColor: `rgb(255, 255, 255)`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                            }),
                          }),
                        }),
                      L() &&
                        l(H, {
                          className: `framer-1i62524`,
                          layoutDependency: A,
                          layoutId: `YFrK6U8IX`,
                          opacity: 1,
                          requiresOverflowVisible: !0,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.001 20.001" overflow="visible"><g><path d="M 13.333 8.974 L 10 12.308 L 6.667 8.974" fill="transparent" stroke-width="2.333" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 20.001 10.001 C 20.001 4.477 15.524 0 10.001 0 C 4.477 0 0 4.477 0 10.001 C 0 15.524 4.477 20.001 10.001 20.001 C 15.524 20.001 20.001 15.524 20.001 10.001 Z" fill="transparent" stroke-width="2.333" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                          withExternalLayout: !0,
                          children: [
                            o(H, {
                              className: `framer-1fvbl05`,
                              layoutDependency: A,
                              layoutId: `d3AFAhDx4`,
                              opacity: 1,
                              requiresOverflowVisible: !0,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.667 3.333" overflow="visible"><path d="M 6.667 0 L 3.333 3.333 L 0 0" fill="transparent" stroke-width="2.333" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            o(H, {
                              className: `framer-mpi7bd`,
                              layoutDependency: A,
                              layoutId: `fBKhh0jRO`,
                              opacity: 1,
                              requiresOverflowVisible: !0,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.001 20.001" overflow="visible"><path d="M 20.001 10.001 C 20.001 4.477 15.524 0 10.001 0 C 4.477 0 0 4.477 0 10.001 C 0 15.524 4.477 20.001 10.001 20.001 C 15.524 20.001 20.001 15.524 20.001 10.001 Z" fill="transparent" stroke-width="2.333" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-QBMLA.framer-1vmsae, .framer-QBMLA .framer-1vmsae { display: block; }`,
          `.framer-QBMLA.framer-iff1iq { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 40px; justify-content: center; padding: 0px 32px 0px 32px; position: relative; width: min-content; }`,
          `.framer-QBMLA .framer-kexe3e { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-QBMLA .framer-1ig5hb0 { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
          `.framer-QBMLA .framer-72i0d0 { bottom: 0px; flex: none; gap: 10px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-QBMLA .framer-z36l04 { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-QBMLA .framer-1i62524 { height: 20px; position: relative; width: 20px; }`,
          `.framer-QBMLA .framer-1fvbl05 { height: 4px; left: 7px; position: absolute; top: 9px; width: 7px; }`,
          `.framer-QBMLA .framer-mpi7bd { height: 20px; left: 0px; position: absolute; top: 0px; width: 20px; }`,
          ...ve,
        ],
        `framer-QBMLA`
      )),
      (W.displayName = `Load More 2`),
      (W.defaultProps = { height: 40, width: 292.5 }),
      w(W, {
        variant: {
          options: [`LyYqIhL9G`, `HRAXoMV0F`, `HZWFdfmTf`],
          optionTitles: [`Default`, `Loading`, `Hidden`],
          title: `Variant`,
          type: D.Enum,
        },
        Wld3NDzSj: { title: `Click`, type: D.EventHandler },
      }),
      V(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...y(be),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  K,
  et = e(() => {
    (u(),
      T(),
      h(),
      r(),
      (Ge = [`zhhy0HMrd`, `fpxH_SWiZ`, `RxDvKlaCR`, `N9YlPPvNU`]),
      (Ke = `framer-QAOvr`),
      (qe = {
        fpxH_SWiZ: `framer-v-19kvz5f`,
        N9YlPPvNU: `framer-v-1pyb79x`,
        RxDvKlaCR: `framer-v-1kfg67w`,
        zhhy0HMrd: `framer-v-ozrb53`,
      }),
      (Je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ye = ({ value: e, children: t }) => {
        let r = s(p),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: t });
      }),
      (Xe = f.create(t)),
      (Ze = {
        Github: `N9YlPPvNU`,
        Instagram: `fpxH_SWiZ`,
        LinkedIn: `zhhy0HMrd`,
        WhatsApp: `RxDvKlaCR`,
      }),
      (Qe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ze[r.variant] ?? r.variant ?? `zhhy0HMrd`,
      })),
      ($e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = E(
        i(function (e, t) {
          let n = c(null),
            r = t ?? n,
            i = a(),
            { activeLocale: s, setLocale: u } = N();
          R();
          let { style: d, className: p, layoutId: h, variant: g, ..._ } = Qe(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: ee,
              variants: E,
            } = F({
              cycleOrder: Ge,
              defaultVariant: `zhhy0HMrd`,
              ref: r,
              variant: g,
              variantClassNames: qe,
            }),
            D = $e(e, E),
            O = b(Ke),
            k = () => v === `fpxH_SWiZ`,
            A = () => ![`fpxH_SWiZ`, `RxDvKlaCR`, `N9YlPPvNU`].includes(v),
            j = () => v === `RxDvKlaCR`,
            te = () => v === `N9YlPPvNU`;
          return o(m, {
            id: h ?? i,
            children: o(Xe, {
              animate: E,
              initial: !1,
              children: o(Ye, {
                value: Je,
                children: o(M, {
                  href: `https://www.linkedin.com/in/filipemsl/`,
                  motionChild: !0,
                  nodeId: `zhhy0HMrd`,
                  openInNewTab: !0,
                  scopeId: `E2FBOyoMg`,
                  ...G(
                    {
                      fpxH_SWiZ: { href: `https://www.instagram.com/filipelima.me/` },
                      N9YlPPvNU: { href: `https://github.com/filipemsl` },
                      RxDvKlaCR: { href: `https://wa.me/message/AH52ZQE3MURMM1` },
                    },
                    v,
                    C
                  ),
                  children: l(f.a, {
                    ..._,
                    ...S,
                    className: `${b(O, `framer-ozrb53`, p, y)} framer-1c3qiwx`,
                    "data-border": !0,
                    "data-framer-name": `LinkedIn`,
                    layoutDependency: D,
                    layoutId: `zhhy0HMrd`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `9px`,
                      "--border-color": `rgba(255, 255, 255, 0.2)`,
                      "--border-left-width": `9px`,
                      "--border-right-width": `9px`,
                      "--border-style": `solid`,
                      "--border-top-width": `9px`,
                      backgroundColor: `rgb(255, 255, 255)`,
                      borderBottomLeftRadius: 128,
                      borderBottomRightRadius: 128,
                      borderTopLeftRadius: 128,
                      borderTopRightRadius: 128,
                      ...d,
                    },
                    ...G(
                      {
                        fpxH_SWiZ: { "data-framer-name": `Instagram` },
                        N9YlPPvNU: { "data-framer-name": `Github` },
                        RxDvKlaCR: { "data-framer-name": `WhatsApp` },
                      },
                      v,
                      C
                    ),
                    children: [
                      k() &&
                        l(H, {
                          className: `framer-15melak`,
                          layoutDependency: D,
                          layoutId: `wa7rUcbRx`,
                          opacity: 1,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.001 32" overflow="visible"></svg>`,
                          withExternalLayout: !0,
                          ...G(
                            {
                              fpxH_SWiZ: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.001 32" overflow="visible"><g><path d="M 0.001 0 L 32.001 0 L 32.001 32 L 0.001 32 Z" fill="transparent"></path><path d="M 9.374 0.112 C 7.672 0.192 6.51 0.464 5.494 0.863 C 4.427 1.266 3.46 1.897 2.663 2.713 C 1.85 3.514 1.222 4.482 0.823 5.55 C 0.428 6.568 0.161 7.731 0.085 9.435 C 0.01 11.138 -0.006 11.685 0.002 16.031 C 0.01 20.376 0.029 20.921 0.112 22.627 C 0.193 24.329 0.464 25.491 0.863 26.508 C 1.267 27.575 1.898 28.541 2.714 29.338 C 3.515 30.151 4.483 30.779 5.552 31.178 C 6.57 31.572 7.733 31.84 9.437 31.914 C 11.14 31.989 11.687 32.006 16.031 31.998 C 20.375 31.99 20.921 31.971 22.629 31.89 C 24.335 31.808 25.491 31.536 26.509 31.138 C 27.575 30.734 28.541 30.103 29.339 29.288 C 30.151 28.487 30.779 27.519 31.178 26.45 C 31.572 25.432 31.84 24.268 31.914 22.567 C 31.988 20.859 32.006 20.314 31.998 15.969 C 31.989 11.625 31.97 11.08 31.889 9.374 C 31.808 7.668 31.537 6.509 31.138 5.492 C 30.734 4.426 30.103 3.46 29.288 2.662 C 28.488 1.848 27.52 1.22 26.451 0.821 C 25.433 0.428 24.271 0.16 22.567 0.086 C 20.864 0.012 20.316 -0.006 15.97 0.002 C 11.625 0.01 11.081 0.029 9.374 0.112 Z M 9.561 29.036 C 8.001 28.968 7.154 28.709 6.59 28.492 C 5.895 28.237 5.265 27.829 4.747 27.3 C 4.214 26.785 3.804 26.157 3.547 25.462 C 3.328 24.898 3.064 24.052 2.991 22.492 C 2.911 20.806 2.895 20.3 2.886 16.028 C 2.876 11.756 2.893 11.25 2.966 9.564 C 3.033 8.005 3.294 7.157 3.511 6.593 C 3.766 5.897 4.173 5.267 4.704 4.75 C 5.219 4.217 5.847 3.807 6.542 3.55 C 7.106 3.33 7.952 3.067 9.512 2.993 C 11.199 2.913 11.704 2.897 15.975 2.888 C 20.246 2.878 20.753 2.895 22.441 2.968 C 24 3.037 24.848 3.295 25.411 3.513 C 26.107 3.768 26.736 4.176 27.254 4.706 C 27.816 5.266 28.163 5.796 28.454 6.545 C 28.674 7.107 28.937 7.953 29.01 9.513 C 29.09 11.2 29.109 11.706 29.117 15.977 C 29.124 20.247 29.109 20.755 29.035 22.441 C 28.967 24.001 28.709 24.848 28.491 25.413 C 28.235 26.108 27.827 26.738 27.297 27.255 C 26.782 27.788 26.154 28.198 25.46 28.455 C 24.896 28.675 24.05 28.938 22.491 29.012 C 20.804 29.092 20.298 29.108 16.026 29.117 C 11.753 29.127 11.249 29.109 9.562 29.037 M 22.605 7.448 C 22.583 8.148 22.945 8.805 23.549 9.161 C 24.152 9.517 24.902 9.516 25.504 9.158 C 26.107 8.8 26.467 8.142 26.443 7.442 C 26.408 6.406 25.557 5.585 24.521 5.587 C 23.485 5.589 22.637 6.412 22.605 7.448 Z M 7.785 16.015 C 7.745 18.98 9.307 21.737 11.87 23.228 C 14.434 24.718 17.602 24.712 20.159 23.21 C 22.717 21.709 24.267 18.946 24.215 15.981 C 24.136 11.494 20.471 7.9 15.983 7.909 C 11.495 7.918 7.845 11.527 7.785 16.015 Z M 10.668 16.009 C 10.662 13.064 13.046 10.672 15.991 10.666 C 18.936 10.66 21.328 13.044 21.334 15.989 C 21.339 18.934 18.956 21.326 16.011 21.332 C 13.066 21.338 10.673 18.954 10.668 16.009 Z" fill="rgb(0,0,0)"></path></g></svg>`,
                              },
                            },
                            v,
                            C
                          ),
                          children: [
                            o(H, {
                              className: `framer-phjw8e`,
                              layoutDependency: D,
                              layoutId: `vF7LnM88R`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" overflow="visible"><path d="M 0 0 L 32 0 L 32 32 L 0 32 Z" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            l(H, {
                              className: `framer-1iqpgc0`,
                              layoutDependency: D,
                              layoutId: `PSNTR4S6b`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" overflow="visible"><path d="M 9.374 0.112 C 7.672 0.192 6.51 0.464 5.494 0.863 C 4.427 1.266 3.46 1.897 2.663 2.713 C 1.85 3.513 1.222 4.481 0.823 5.55 C 0.428 6.568 0.161 7.731 0.085 9.435 C 0.01 11.138 -0.006 11.685 0.002 16.031 C 0.01 20.376 0.029 20.921 0.112 22.627 C 0.193 24.329 0.464 25.491 0.863 26.508 C 1.267 27.575 1.898 28.54 2.714 29.338 C 3.515 30.15 4.483 30.778 5.552 31.178 C 6.57 31.572 7.733 31.84 9.437 31.914 C 11.14 31.989 11.687 32.006 16.031 31.998 C 20.375 31.99 20.921 31.971 22.629 31.89 C 24.335 31.808 25.491 31.536 26.509 31.138 C 27.575 30.734 28.541 30.103 29.339 29.288 C 30.151 28.487 30.779 27.518 31.178 26.45 C 31.572 25.432 31.84 24.268 31.914 22.567 C 31.988 20.859 32.006 20.314 31.998 15.969 C 31.989 11.625 31.97 11.08 31.889 9.374 C 31.808 7.668 31.537 6.509 31.138 5.492 C 30.734 4.425 30.103 3.46 29.288 2.662 C 28.488 1.848 27.52 1.22 26.451 0.821 C 25.433 0.428 24.271 0.16 22.567 0.086 C 20.864 0.012 20.316 -0.006 15.97 0.002 C 11.625 0.01 11.081 0.029 9.374 0.112 Z M 9.561 29.036 C 8.001 28.968 7.154 28.709 6.59 28.492 C 5.895 28.236 5.265 27.829 4.747 27.3 C 4.214 26.785 3.804 26.157 3.547 25.462 C 3.328 24.898 3.064 24.052 2.991 22.492 C 2.911 20.806 2.895 20.3 2.886 16.028 C 2.876 11.756 2.893 11.25 2.966 9.564 C 3.033 8.005 3.294 7.157 3.511 6.593 C 3.766 5.897 4.173 5.267 4.704 4.75 C 5.219 4.217 5.847 3.807 6.542 3.55 C 7.106 3.33 7.952 3.067 9.512 2.993 C 11.199 2.913 11.704 2.897 15.975 2.888 C 20.246 2.878 20.753 2.895 22.441 2.968 C 24 3.037 24.848 3.295 25.411 3.513 C 26.107 3.768 26.736 4.175 27.254 4.706 C 27.816 5.266 28.163 5.796 28.454 6.545 C 28.674 7.107 28.937 7.953 29.01 9.513 C 29.09 11.2 29.109 11.706 29.117 15.977 C 29.124 20.247 29.109 20.755 29.035 22.441 C 28.967 24.001 28.709 24.848 28.491 25.413 C 28.235 26.108 27.827 26.738 27.297 27.255 C 26.782 27.787 26.154 28.197 25.46 28.455 C 24.896 28.675 24.05 28.938 22.491 29.012 C 20.804 29.092 20.298 29.108 16.026 29.117 C 11.753 29.127 11.249 29.109 9.562 29.037 M 22.605 7.448 C 22.583 8.148 22.945 8.805 23.549 9.161 C 24.152 9.516 24.902 9.515 25.504 9.157 C 26.107 8.8 26.467 8.142 26.443 7.442 C 26.408 6.406 25.557 5.585 24.521 5.587 C 23.485 5.588 22.637 6.412 22.605 7.448 Z M 7.785 16.015 C 7.745 18.98 9.307 21.737 11.87 23.227 C 14.434 24.718 17.602 24.712 20.159 23.21 C 22.717 21.709 24.267 18.946 24.215 15.981 C 24.136 11.493 20.471 7.9 15.983 7.909 C 11.495 7.918 7.845 11.527 7.785 16.015 Z M 10.668 16.009 C 10.662 13.063 13.046 10.671 15.991 10.666 C 18.936 10.66 21.328 13.043 21.334 15.989 C 21.339 18.934 18.956 21.326 16.011 21.332 C 13.066 21.337 10.673 18.954 10.668 16.009 Z" fill="rgb(0,0,0)"></path></svg>`,
                              withExternalLayout: !0,
                              children: [
                                o(H, {
                                  className: `framer-1tqrsmu`,
                                  layoutDependency: D,
                                  layoutId: `kMSJ7Du1d`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" overflow="visible"><path d="M 9.374 0.112 C 7.672 0.192 6.51 0.464 5.494 0.863 C 4.427 1.266 3.46 1.897 2.663 2.713 C 1.85 3.513 1.222 4.481 0.823 5.55 C 0.428 6.568 0.161 7.731 0.085 9.435 C 0.01 11.138 -0.006 11.685 0.002 16.031 C 0.01 20.376 0.029 20.921 0.112 22.627 C 0.193 24.329 0.464 25.491 0.863 26.508 C 1.267 27.575 1.898 28.54 2.714 29.338 C 3.515 30.15 4.483 30.778 5.552 31.178 C 6.57 31.572 7.733 31.84 9.437 31.914 C 11.14 31.989 11.687 32.006 16.031 31.998 C 20.375 31.99 20.921 31.971 22.629 31.89 C 24.335 31.808 25.491 31.536 26.509 31.138 C 27.575 30.734 28.541 30.103 29.339 29.288 C 30.151 28.487 30.779 27.518 31.178 26.45 C 31.572 25.432 31.84 24.268 31.914 22.567 C 31.988 20.859 32.006 20.314 31.998 15.969 C 31.989 11.625 31.97 11.08 31.889 9.374 C 31.808 7.668 31.537 6.509 31.138 5.492 C 30.734 4.425 30.103 3.46 29.288 2.662 C 28.488 1.848 27.52 1.22 26.451 0.821 C 25.433 0.428 24.271 0.16 22.567 0.086 C 20.864 0.012 20.316 -0.006 15.97 0.002 C 11.625 0.01 11.081 0.029 9.374 0.112 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-1ht76zg`,
                                  layoutDependency: D,
                                  layoutId: `Jql8uS0e0`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.235 26.234" overflow="visible"><path d="M 6.678 26.151 C 5.118 26.083 4.271 25.824 3.707 25.607 C 3.011 25.351 2.382 24.944 1.864 24.415 C 1.331 23.9 0.92 23.272 0.664 22.577 C 0.445 22.013 0.181 21.167 0.108 19.607 C 0.028 17.921 0.012 17.415 0.003 13.143 C -0.007 8.871 0.01 8.365 0.083 6.679 C 0.15 5.12 0.411 4.272 0.628 3.708 C 0.882 3.012 1.29 2.382 1.821 1.865 C 2.336 1.332 2.964 0.922 3.659 0.665 C 4.223 0.445 5.069 0.182 6.629 0.108 C 8.316 0.028 8.821 0.012 13.092 0.003 C 17.363 -0.007 17.87 0.01 19.558 0.083 C 21.117 0.152 21.965 0.41 22.528 0.628 C 23.223 0.883 23.853 1.29 24.371 1.821 C 24.933 2.381 25.28 2.911 25.571 3.66 C 25.791 4.222 26.054 5.068 26.127 6.628 C 26.207 8.315 26.226 8.821 26.234 13.092 C 26.241 17.362 26.226 17.87 26.152 19.556 C 26.084 21.116 25.826 21.963 25.608 22.528 C 25.352 23.223 24.944 23.853 24.414 24.37 C 23.899 24.902 23.271 25.312 22.577 25.57 C 22.013 25.79 21.167 26.053 19.608 26.127 C 17.921 26.207 17.415 26.223 13.143 26.232 C 8.87 26.242 8.366 26.224 6.679 26.152" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-taikk4`,
                                  layoutDependency: D,
                                  layoutId: `zgctAjaqz`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.84 3.84" overflow="visible"><path d="M 0.001 1.861 C -0.021 2.561 0.341 3.218 0.945 3.574 C 1.548 3.93 2.298 3.929 2.9 3.571 C 3.503 3.213 3.863 2.555 3.839 1.855 C 3.804 0.819 2.953 -0.002 1.917 0 C 0.881 0.002 0.033 0.825 0.001 1.861 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-1ieuri1`,
                                  layoutDependency: D,
                                  layoutId: `fwGdn_iu7`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.432 16.432" overflow="visible"><path d="M 0.001 8.106 C -0.039 11.071 1.522 13.828 4.086 15.319 C 6.65 16.809 9.818 16.803 12.375 15.301 C 14.933 13.8 16.483 11.037 16.431 8.072 C 16.352 3.585 12.687 -0.009 8.199 0 C 3.711 0.009 0.061 3.618 0.001 8.106 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-1b2cqce`,
                                  layoutDependency: D,
                                  layoutId: `CVn45PID1`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.666 10.666" overflow="visible"><path d="M 0 5.343 C -0.006 2.398 2.378 0.006 5.323 0 C 8.268 -0.006 10.66 2.378 10.666 5.323 C 10.672 8.268 8.288 10.66 5.343 10.666 C 2.398 10.672 0.006 8.288 0 5.343 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      A() &&
                        o(f.div, {
                          className: `framer-ye37gf`,
                          "data-framer-name": `formkit:linkedin`,
                          layoutDependency: D,
                          layoutId: `xkFX7AjYS`,
                          children: o(H, {
                            className: `framer-i6rz3v`,
                            "data-framer-name": `Vector`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 24,
                            intrinsicWidth: 24,
                            layoutDependency: D,
                            layoutId: `Q8MIMmbKB`,
                            svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.88 5.76C4.48 5.76 5.76 4.46 5.76 2.88C5.76 1.3 4.46 0 2.88 0C1.3 0 0 1.3 0 2.88C0 4.46 1.3 5.76 2.88 5.76ZM8.5 7.94V23.98H13.46V16.06C13.46 13.96 13.86 11.94 16.44 11.94C19.02 11.94 19.02 14.34 19.02 16.18V23.98H24V15.18C24 10.86 23.08 7.54 18.04 7.54C15.62 7.54 14 8.86 13.34 10.12H13.28V7.92H8.52L8.5 7.94ZM0.4 7.94H5.38V23.98H0.4V7.94Z" fill="black"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                        }),
                      j() &&
                        l(H, {
                          className: `framer-1980vhr`,
                          layoutDependency: D,
                          layoutId: `MDwv70Feu`,
                          opacity: 1,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.823 32" overflow="visible"></svg>`,
                          withExternalLayout: !0,
                          ...G(
                            {
                              RxDvKlaCR: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.823 32" overflow="visible"><g><path d="M 0 0 L 31.823 0 L 31.823 32 L 0 32 Z" fill="transparent"></path><path d="M 31.823 15.857 C 31.82 24.593 24.711 31.702 15.978 31.702 L 15.972 31.702 C 13.326 31.702 10.723 31.039 8.4 29.773 L 0 31.977 L 2.248 23.765 C 0.859 21.357 0.129 18.624 0.133 15.844 C 0.136 7.108 7.244 0 15.978 0 C 20.185 -0.011 24.221 1.662 27.186 4.647 C 30.167 7.615 31.836 11.651 31.823 15.857 Z M 29.148 15.856 C 29.159 12.36 27.771 9.005 25.294 6.539 C 22.831 4.06 19.479 2.669 15.984 2.677 C 8.72 2.677 2.811 8.585 2.808 15.844 C 2.804 18.324 3.502 20.754 4.821 22.854 L 5.134 23.352 L 3.804 28.212 L 8.789 26.905 L 9.27 27.19 C 11.293 28.39 13.61 29.026 15.973 29.026 L 15.978 29.026 C 23.238 29.026 29.145 23.118 29.148 15.856 Z M 23.201 19.164 C 23.597 19.362 23.862 19.462 23.96 19.627 C 24.06 19.792 24.06 20.585 23.73 21.509 C 23.4 22.434 21.818 23.278 21.057 23.392 C 20.375 23.494 19.512 23.537 18.564 23.235 C 17.989 23.053 17.251 22.809 16.307 22.401 C 12.335 20.685 9.742 16.687 9.543 16.422 C 9.345 16.158 7.927 14.274 7.927 12.326 C 7.927 10.378 8.949 9.42 9.312 9.024 C 9.675 8.628 10.104 8.528 10.368 8.528 C 10.621 8.527 10.875 8.531 11.128 8.542 C 11.37 8.555 11.696 8.45 12.018 9.221 C 12.349 10.014 13.14 11.963 13.239 12.161 C 13.337 12.36 13.404 12.591 13.271 12.855 C 13.139 13.119 13.074 13.285 12.876 13.515 C 12.677 13.746 12.459 14.031 12.281 14.209 C 12.084 14.406 11.878 14.62 12.108 15.017 C 12.339 15.413 13.134 16.709 14.311 17.759 C 15.823 19.108 17.099 19.526 17.495 19.724 C 17.891 19.922 18.122 19.89 18.353 19.625 C 18.584 19.362 19.343 18.47 19.607 18.073 C 19.87 17.677 20.134 17.743 20.497 17.875 C 20.86 18.007 22.806 18.964 23.202 19.163 Z" fill="rgb(0,0,0)"></path></g></svg>`,
                              },
                            },
                            v,
                            C
                          ),
                          children: [
                            o(H, {
                              className: `framer-wwwyvc`,
                              layoutDependency: D,
                              layoutId: `VZ1PEKiGB`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.823 32" overflow="visible"><path d="M 0 0 L 31.823 0 L 31.823 32 L 0 32 Z" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            l(H, {
                              className: `framer-1ydvmxu`,
                              layoutDependency: D,
                              layoutId: `KVaNoflHB`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.823 31.977" overflow="visible"><path d="M 31.823 15.857 C 31.82 24.593 24.711 31.702 15.978 31.702 L 15.972 31.702 C 13.326 31.702 10.723 31.039 8.4 29.773 L 0 31.977 L 2.248 23.765 C 0.859 21.357 0.129 18.624 0.133 15.844 C 0.136 7.108 7.244 0 15.978 0 C 20.185 -0.011 24.221 1.662 27.186 4.647 C 30.167 7.615 31.836 11.651 31.823 15.857 Z M 29.148 15.856 C 29.159 12.36 27.771 9.005 25.294 6.539 C 22.831 4.06 19.479 2.669 15.984 2.677 C 8.72 2.677 2.811 8.585 2.808 15.844 C 2.804 18.324 3.502 20.754 4.821 22.854 L 5.134 23.352 L 3.804 28.212 L 8.789 26.905 L 9.27 27.19 C 11.293 28.39 13.61 29.026 15.973 29.026 L 15.978 29.026 C 23.238 29.026 29.145 23.118 29.148 15.856 Z M 23.201 19.164 C 23.597 19.362 23.862 19.462 23.96 19.627 C 24.06 19.792 24.06 20.585 23.73 21.509 C 23.4 22.434 21.818 23.278 21.057 23.392 C 20.375 23.494 19.512 23.537 18.564 23.235 C 17.989 23.053 17.251 22.809 16.307 22.401 C 12.335 20.685 9.742 16.687 9.543 16.422 C 9.345 16.158 7.927 14.274 7.927 12.326 C 7.927 10.378 8.949 9.42 9.312 9.024 C 9.675 8.628 10.104 8.528 10.368 8.528 C 10.621 8.527 10.875 8.531 11.128 8.542 C 11.37 8.555 11.696 8.45 12.018 9.221 C 12.349 10.014 13.14 11.963 13.239 12.161 C 13.337 12.36 13.404 12.591 13.271 12.855 C 13.139 13.119 13.074 13.285 12.876 13.515 C 12.677 13.746 12.459 14.031 12.281 14.209 C 12.084 14.406 11.878 14.62 12.108 15.017 C 12.339 15.413 13.134 16.709 14.311 17.759 C 15.823 19.108 17.099 19.526 17.495 19.724 C 17.891 19.922 18.122 19.89 18.353 19.625 C 18.584 19.362 19.343 18.47 19.607 18.073 C 19.87 17.677 20.134 17.743 20.497 17.875 C 20.86 18.007 22.806 18.964 23.202 19.163 Z" fill="rgb(0,0,0)"></path></svg>`,
                              withExternalLayout: !0,
                              children: [
                                o(H, {
                                  className: `framer-18adexm`,
                                  layoutDependency: D,
                                  layoutId: `d5jmpR7ei`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 31.823 31.977" overflow="visible"><path d="M 27.186 4.647 C 24.221 1.662 20.185 -0.011 15.978 0 C 7.244 0 0.136 7.108 0.133 15.844 C 0.129 18.624 0.859 21.357 2.248 23.765 L 0 31.977 L 8.4 29.773 C 10.723 31.039 13.326 31.702 15.972 31.702 L 15.978 31.702 C 24.711 31.702 31.82 24.593 31.823 15.857 C 31.836 11.651 30.167 7.615 27.186 4.647 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-544z7e`,
                                  layoutDependency: D,
                                  layoutId: `PivbmEZ3n`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.34 26.349" overflow="visible"><path d="M 13.17 26.349 L 13.165 26.349 C 10.802 26.349 8.485 25.713 6.462 24.513 L 5.981 24.228 L 0.996 25.535 L 2.326 20.675 L 2.013 20.177 C 0.694 18.077 -0.004 15.647 0 13.167 C 0.003 5.908 5.912 0 13.176 0 C 16.671 -0.008 20.023 1.383 22.486 3.862 C 24.963 6.328 26.351 9.683 26.34 13.179 C 26.337 20.441 20.43 26.349 13.17 26.349 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-1gxjc8h`,
                                  layoutDependency: D,
                                  layoutId: `jUJbDa9h7`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.091 14.94" overflow="visible"><path d="M 15.275 10.635 C 14.879 10.436 12.933 9.479 12.57 9.347 C 12.207 9.215 11.943 9.149 11.68 9.545 C 11.416 9.942 10.657 10.834 10.426 11.097 C 10.195 11.362 9.964 11.394 9.568 11.196 C 9.172 10.998 7.896 10.58 6.384 9.231 C 5.207 8.181 4.412 6.885 4.181 6.489 C 3.951 6.092 4.157 5.878 4.354 5.681 C 4.532 5.503 4.75 5.218 4.949 4.987 C 5.147 4.757 5.212 4.591 5.344 4.327 C 5.477 4.063 5.41 3.832 5.312 3.633 C 5.213 3.435 4.422 1.486 4.091 0.693 C 3.769 -0.078 3.443 0.027 3.201 0.014 C 2.948 0.004 2.694 -0.001 2.441 0 C 2.177 0 1.748 0.1 1.385 0.496 C 1.022 0.892 0 1.85 0 3.798 C 0 5.746 1.418 7.63 1.616 7.894 C 1.815 8.159 4.408 12.157 8.38 13.873 C 9.324 14.281 10.062 14.525 10.637 14.707 C 11.585 15.009 12.448 14.966 13.13 14.864 C 13.891 14.75 15.473 13.906 15.803 12.981 C 16.133 12.057 16.133 11.264 16.033 11.099 C 15.935 10.934 15.67 10.834 15.274 10.636 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      te() &&
                        l(H, {
                          className: `framer-15sa253`,
                          layoutDependency: D,
                          layoutId: `s5fEtDF7G`,
                          opacity: 1,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.768 32" overflow="visible"></svg>`,
                          withExternalLayout: !0,
                          ...G(
                            {
                              N9YlPPvNU: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.768 32" overflow="visible"><g><path d="M 0 0 L 32.768 0 L 32.768 32 L 0 32 Z" fill="transparent"></path><path d="M 16.384 0 C 7.337 0 0 7.335 0 16.384 C 0 23.624 4.695 29.764 11.204 31.931 C 12.024 32.083 12.324 31.576 12.324 31.143 C 12.324 30.753 12.309 29.462 12.302 28.093 C 7.744 29.083 6.782 26.159 6.782 26.159 C 6.036 24.266 4.962 23.762 4.962 23.762 C 3.476 22.745 5.075 22.766 5.075 22.766 C 6.72 22.882 7.586 24.454 7.586 24.454 C 9.048 26.959 11.419 26.235 12.354 25.816 C 12.501 24.757 12.926 24.035 13.394 23.626 C 9.755 23.211 5.93 21.806 5.93 15.528 C 5.93 13.74 6.57 12.278 7.618 11.131 C 7.448 10.718 6.887 9.051 7.776 6.795 C 7.776 6.795 9.152 6.355 12.283 8.475 C 13.62 8.111 14.999 7.925 16.384 7.923 C 17.776 7.929 19.179 8.111 20.489 8.474 C 23.616 6.354 24.989 6.794 24.989 6.794 C 25.881 9.052 25.32 10.718 25.15 11.131 C 26.2 12.278 26.837 13.74 26.837 15.528 C 26.837 21.821 23.004 23.207 19.355 23.613 C 19.943 24.121 20.467 25.118 20.467 26.647 C 20.467 28.839 20.447 30.603 20.447 31.143 C 20.447 31.579 20.743 32.09 21.573 31.929 C 28.079 29.759 32.768 23.621 32.768 16.384 C 32.768 7.335 25.433 0 16.384 0 Z M 6.136 23.34 C 6.1 23.42 5.972 23.445 5.856 23.39 C 5.736 23.336 5.67 23.225 5.709 23.143 C 5.744 23.06 5.872 23.036 5.991 23.093 C 6.11 23.146 6.178 23.258 6.136 23.34 Z M 6.942 24.059 C 6.864 24.131 6.712 24.097 6.608 23.983 C 6.501 23.869 6.481 23.716 6.56 23.643 C 6.64 23.57 6.788 23.603 6.896 23.718 C 7.003 23.834 7.024 23.985 6.942 24.058 Z M 7.495 24.979 C 7.395 25.049 7.231 24.983 7.129 24.837 C 7.029 24.692 7.029 24.517 7.131 24.447 C 7.233 24.377 7.395 24.44 7.498 24.584 C 7.598 24.733 7.598 24.907 7.495 24.979 Z M 8.43 26.044 C 8.34 26.144 8.15 26.117 8.01 25.982 C 7.866 25.849 7.826 25.662 7.916 25.563 C 8.007 25.463 8.199 25.492 8.34 25.626 C 8.483 25.757 8.526 25.946 8.43 26.044 Z M 9.639 26.404 C 9.599 26.532 9.415 26.591 9.229 26.536 C 9.044 26.48 8.923 26.33 8.96 26.2 C 8.999 26.07 9.184 26.01 9.37 26.068 C 9.556 26.124 9.677 26.273 9.639 26.404 Z M 11.014 26.557 C 11.019 26.692 10.861 26.804 10.666 26.807 C 10.471 26.811 10.312 26.701 10.31 26.568 C 10.31 26.432 10.464 26.321 10.66 26.318 C 10.854 26.314 11.014 26.422 11.014 26.557 Z M 12.365 26.505 C 12.388 26.637 12.253 26.772 12.06 26.808 C 11.87 26.843 11.693 26.762 11.67 26.631 C 11.646 26.496 11.783 26.361 11.973 26.325 C 12.167 26.292 12.34 26.371 12.365 26.505 Z" fill="rgb(0,0,0)"></path></g></svg>`,
                              },
                            },
                            v,
                            C
                          ),
                          children: [
                            o(H, {
                              className: `framer-qmg6y`,
                              layoutDependency: D,
                              layoutId: `a24p8MoH4`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.768 32" overflow="visible"><path d="M 0 0 L 32.768 0 L 32.768 32 L 0 32 Z" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            l(H, {
                              className: `framer-1xph0n0`,
                              layoutDependency: D,
                              layoutId: `p2aZR2Wgg`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.768 31.959" overflow="visible"><path d="M 16.384 0 C 7.337 0 0 7.335 0 16.384 C 0 23.624 4.695 29.764 11.204 31.931 C 12.024 32.083 12.324 31.576 12.324 31.143 C 12.324 30.753 12.309 29.462 12.302 28.093 C 7.744 29.083 6.782 26.159 6.782 26.159 C 6.036 24.266 4.962 23.762 4.962 23.762 C 3.476 22.745 5.075 22.766 5.075 22.766 C 6.72 22.882 7.586 24.454 7.586 24.454 C 9.048 26.959 11.419 26.235 12.354 25.816 C 12.501 24.757 12.926 24.035 13.394 23.626 C 9.755 23.211 5.93 21.806 5.93 15.528 C 5.93 13.74 6.57 12.278 7.618 11.131 C 7.448 10.718 6.887 9.051 7.776 6.795 C 7.776 6.795 9.152 6.355 12.283 8.475 C 13.62 8.111 14.999 7.925 16.384 7.923 C 17.776 7.929 19.179 8.111 20.489 8.474 C 23.616 6.354 24.989 6.794 24.989 6.794 C 25.881 9.052 25.32 10.718 25.15 11.131 C 26.2 12.278 26.837 13.74 26.837 15.528 C 26.837 21.821 23.004 23.207 19.355 23.613 C 19.943 24.121 20.467 25.118 20.467 26.647 C 20.467 28.839 20.447 30.603 20.447 31.143 C 20.447 31.579 20.743 32.09 21.573 31.929 C 28.079 29.759 32.768 23.621 32.768 16.384 C 32.768 7.335 25.433 0 16.384 0 Z M 6.136 23.34 C 6.1 23.42 5.972 23.445 5.856 23.39 C 5.736 23.336 5.67 23.225 5.709 23.143 C 5.744 23.06 5.872 23.036 5.991 23.093 C 6.11 23.146 6.178 23.258 6.136 23.34 Z M 6.942 24.059 C 6.864 24.131 6.712 24.097 6.608 23.983 C 6.501 23.869 6.481 23.716 6.56 23.643 C 6.64 23.57 6.788 23.603 6.896 23.718 C 7.003 23.834 7.024 23.985 6.942 24.058 Z M 7.495 24.979 C 7.395 25.049 7.231 24.983 7.129 24.837 C 7.029 24.692 7.029 24.517 7.131 24.447 C 7.233 24.377 7.395 24.44 7.498 24.584 C 7.598 24.733 7.598 24.907 7.495 24.979 Z M 8.43 26.044 C 8.34 26.144 8.15 26.117 8.01 25.982 C 7.866 25.849 7.826 25.662 7.916 25.563 C 8.007 25.463 8.199 25.492 8.34 25.626 C 8.483 25.757 8.526 25.946 8.43 26.044 Z M 9.639 26.404 C 9.599 26.532 9.415 26.591 9.229 26.536 C 9.044 26.48 8.923 26.33 8.96 26.2 C 8.999 26.07 9.184 26.01 9.37 26.068 C 9.556 26.124 9.677 26.273 9.639 26.404 Z M 11.014 26.557 C 11.019 26.692 10.861 26.804 10.666 26.807 C 10.471 26.811 10.312 26.701 10.31 26.568 C 10.31 26.432 10.464 26.321 10.66 26.318 C 10.854 26.314 11.014 26.422 11.014 26.557 Z M 12.365 26.505 C 12.388 26.637 12.253 26.772 12.06 26.808 C 11.87 26.843 11.693 26.762 11.67 26.631 C 11.646 26.496 11.783 26.361 11.973 26.325 C 12.167 26.292 12.34 26.371 12.365 26.505 Z" fill="rgb(0,0,0)"></path></svg>`,
                              withExternalLayout: !0,
                              children: [
                                o(H, {
                                  className: `framer-7d19gz`,
                                  layoutDependency: D,
                                  layoutId: `POhf2M6rX`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.768 31.959" overflow="visible"><path d="M 16.384 0 C 7.337 0 0 7.335 0 16.384 C 0 23.624 4.695 29.764 11.204 31.931 C 12.024 32.083 12.324 31.576 12.324 31.143 C 12.324 30.753 12.309 29.462 12.302 28.093 C 7.744 29.083 6.782 26.159 6.782 26.159 C 6.036 24.266 4.962 23.762 4.962 23.762 C 3.476 22.745 5.075 22.766 5.075 22.766 C 6.72 22.882 7.586 24.454 7.586 24.454 C 9.048 26.959 11.419 26.235 12.354 25.816 C 12.501 24.757 12.926 24.035 13.394 23.626 C 9.755 23.211 5.93 21.806 5.93 15.528 C 5.93 13.74 6.57 12.278 7.618 11.131 C 7.448 10.718 6.887 9.051 7.776 6.795 C 7.776 6.795 9.152 6.355 12.283 8.475 C 13.62 8.111 14.999 7.925 16.384 7.923 C 17.776 7.929 19.179 8.111 20.489 8.474 C 23.616 6.354 24.989 6.794 24.989 6.794 C 25.881 9.052 25.32 10.718 25.15 11.131 C 26.2 12.278 26.837 13.74 26.837 15.528 C 26.837 21.821 23.004 23.207 19.355 23.613 C 19.943 24.121 20.467 25.118 20.467 26.647 C 20.467 28.839 20.447 30.603 20.447 31.143 C 20.447 31.579 20.743 32.09 21.573 31.929 C 28.079 29.759 32.768 23.621 32.768 16.384 C 32.768 7.335 25.433 0 16.384 0 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-qv9d1a`,
                                  layoutDependency: D,
                                  layoutId: `BFPaM2Ej5`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.438 0.278 C 0.402 0.358 0.274 0.383 0.158 0.328 C 0.038 0.274 -0.028 0.163 0.011 0.081 C 0.046 -0.002 0.174 -0.026 0.293 0.031 C 0.412 0.084 0.48 0.196 0.438 0.278 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-rjwxo`,
                                  layoutDependency: D,
                                  layoutId: `dxXkf_hPN`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.43 0.455 C 0.352 0.527 0.2 0.493 0.096 0.379 C -0.011 0.265 -0.031 0.112 0.048 0.039 C 0.128 -0.034 0.276 -0.001 0.384 0.114 C 0.491 0.23 0.512 0.381 0.43 0.454 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-au240r`,
                                  layoutDependency: D,
                                  layoutId: `GX9w9XxrO`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.441 0.561 C 0.341 0.631 0.177 0.565 0.075 0.419 C -0.025 0.274 -0.025 0.099 0.077 0.029 C 0.179 -0.041 0.341 0.022 0.444 0.166 C 0.544 0.315 0.544 0.489 0.441 0.561 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-18plr8j`,
                                  layoutDependency: D,
                                  layoutId: `Qbw8J8fiv`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.562 0.541 C 0.472 0.641 0.282 0.614 0.142 0.479 C -0.002 0.346 -0.042 0.159 0.048 0.06 C 0.139 -0.04 0.331 -0.011 0.472 0.123 C 0.615 0.254 0.658 0.443 0.562 0.541 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-1gzt5aa`,
                                  layoutDependency: D,
                                  layoutId: `ByQIaMTWX`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.686 0.358 C 0.646 0.486 0.462 0.545 0.276 0.49 C 0.091 0.434 -0.03 0.284 0.007 0.154 C 0.046 0.024 0.231 -0.036 0.417 0.022 C 0.603 0.078 0.724 0.227 0.686 0.358 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-nq1jsg`,
                                  layoutDependency: D,
                                  layoutId: `Vu4GAX1pS`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.704 0.239 C 0.709 0.374 0.551 0.486 0.356 0.489 C 0.161 0.493 0.002 0.383 0 0.25 C 0 0.114 0.154 0.003 0.35 0 C 0.544 -0.004 0.704 0.104 0.704 0.239 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                o(H, {
                                  className: `framer-f04bob`,
                                  layoutDependency: D,
                                  layoutId: `eel4tCv1M`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.698 0.187 C 0.721 0.319 0.586 0.454 0.393 0.49 C 0.203 0.525 0.026 0.444 0.003 0.313 C -0.021 0.178 0.116 0.043 0.306 0.007 C 0.5 -0.026 0.673 0.053 0.698 0.187 Z" fill="transparent"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-QAOvr.framer-1c3qiwx, .framer-QAOvr .framer-1c3qiwx { display: block; }`,
          `.framer-QAOvr.framer-ozrb53 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QAOvr .framer-15melak, .framer-QAOvr .framer-1980vhr { height: 32px; position: relative; width: 32px; }`,
          `.framer-QAOvr .framer-phjw8e, .framer-QAOvr .framer-1iqpgc0, .framer-QAOvr .framer-1tqrsmu, .framer-QAOvr .framer-wwwyvc, .framer-QAOvr .framer-1ydvmxu, .framer-QAOvr .framer-18adexm { height: 32px; left: 0px; position: absolute; top: 0px; width: 32px; }`,
          `.framer-QAOvr .framer-1ht76zg { height: 26px; left: 3px; position: absolute; top: 3px; width: 26px; }`,
          `.framer-QAOvr .framer-taikk4 { height: 4px; left: 23px; position: absolute; top: 6px; width: 4px; }`,
          `.framer-QAOvr .framer-1ieuri1 { height: 17px; left: 8px; position: absolute; top: 8px; width: 17px; }`,
          `.framer-QAOvr .framer-1b2cqce { height: 11px; left: 11px; position: absolute; top: 11px; width: 11px; }`,
          `.framer-QAOvr .framer-ye37gf { flex: none; gap: 0px; height: 32px; overflow: visible; position: relative; width: 32px; }`,
          `.framer-QAOvr .framer-i6rz3v { bottom: 4px; flex: none; left: 4px; position: absolute; right: 4px; top: 4px; }`,
          `.framer-QAOvr .framer-544z7e { height: 27px; left: 3px; position: absolute; top: 3px; width: 27px; }`,
          `.framer-QAOvr .framer-1gxjc8h { height: 15px; left: 8px; position: absolute; top: 9px; width: 16px; }`,
          `.framer-QAOvr .framer-15sa253 { height: 32px; position: relative; width: 33px; }`,
          `.framer-QAOvr .framer-qmg6y, .framer-QAOvr .framer-1xph0n0, .framer-QAOvr .framer-7d19gz { height: 32px; left: 0px; position: absolute; top: 0px; width: 33px; }`,
          `.framer-QAOvr .framer-qv9d1a { height: 1px; left: 6px; position: absolute; top: 23px; width: 1px; }`,
          `.framer-QAOvr .framer-rjwxo { height: 1px; left: 7px; position: absolute; top: 24px; width: 1px; }`,
          `.framer-QAOvr .framer-au240r { height: 1px; left: 7px; position: absolute; top: 25px; width: 1px; }`,
          `.framer-QAOvr .framer-18plr8j { height: 1px; left: 8px; position: absolute; top: 26px; width: 1px; }`,
          `.framer-QAOvr .framer-1gzt5aa { height: 1px; left: 9px; position: absolute; top: 26px; width: 1px; }`,
          `.framer-QAOvr .framer-nq1jsg { height: 1px; left: 11px; position: absolute; top: 27px; width: 1px; }`,
          `.framer-QAOvr .framer-f04bob { height: 1px; left: 12px; position: absolute; top: 27px; width: 1px; }`,
          `.framer-QAOvr[data-border="true"]::after, .framer-QAOvr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-QAOvr`
      )),
      (K.displayName = `Icon Link`),
      (K.defaultProps = { height: 56, width: 56 }),
      w(K, {
        variant: {
          options: [`zhhy0HMrd`, `fpxH_SWiZ`, `RxDvKlaCR`, `N9YlPPvNU`],
          optionTitles: [`LinkedIn`, `Instagram`, `WhatsApp`, `Github`],
          title: `Variant`,
          type: D.Enum,
        },
      }),
      V(K, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  J,
  ut = e(() => {
    (u(),
      T(),
      h(),
      r(),
      (tt = [`BTO_xytvh`, `SGi0DvBQG`, `MtoXSlXGI`, `EJbLJeOH3`, `oQ57iFWLA`, `dKYKcSqcz`]),
      (nt = `framer-qHy6o`),
      (rt = {
        BTO_xytvh: `framer-v-rt0i48`,
        dKYKcSqcz: `framer-v-1vbnlro`,
        EJbLJeOH3: `framer-v-l1qsg`,
        MtoXSlXGI: `framer-v-1u8wuq5`,
        oQ57iFWLA: `framer-v-1h4prw6`,
        SGi0DvBQG: `framer-v-p3paak`,
      }),
      (it = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (at = ({ value: e, children: t }) => {
        let r = s(p),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: t });
      }),
      (ot = f.create(t)),
      (st = {
        "Cashback App": `oQ57iFWLA`,
        Bradesco: `SGi0DvBQG`,
        BRZ: `EJbLJeOH3`,
        Fusion: `MtoXSlXGI`,
        IFPE: `dKYKcSqcz`,
        Serena: `BTO_xytvh`,
      }),
      (ct = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: st[r.variant] ?? r.variant ?? `BTO_xytvh`,
      })),
      (lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = E(
        i(function (e, t) {
          let n = c(null),
            r = t ?? n,
            i = a(),
            { activeLocale: s, setLocale: u } = N();
          R();
          let { style: d, className: p, layoutId: h, variant: g, ..._ } = ct(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: ee,
              variants: E,
            } = F({
              cycleOrder: tt,
              defaultVariant: `BTO_xytvh`,
              ref: r,
              variant: g,
              variantClassNames: rt,
            }),
            D = lt(e, E),
            O = b(nt),
            k = () => ![`SGi0DvBQG`, `MtoXSlXGI`, `EJbLJeOH3`, `oQ57iFWLA`].includes(v),
            A = () => v === `SGi0DvBQG`,
            j = () => v === `MtoXSlXGI`,
            M = () => v === `EJbLJeOH3`,
            te = () => v === `oQ57iFWLA`;
          return o(m, {
            id: h ?? i,
            children: o(ot, {
              animate: E,
              initial: !1,
              children: o(at, {
                value: it,
                children: l(f.div, {
                  ..._,
                  ...S,
                  className: b(O, `framer-rt0i48`, p, y),
                  "data-border": !0,
                  "data-framer-name": `Serena`,
                  layoutDependency: D,
                  layoutId: `BTO_xytvh`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `2px`,
                    "--border-color": `rgba(255, 255, 255, 0.25)`,
                    "--border-left-width": `2px`,
                    "--border-right-width": `2px`,
                    "--border-style": `solid`,
                    "--border-top-width": `2px`,
                    backdropFilter: `blur(10px)`,
                    backgroundColor: `rgba(255, 255, 255, 0.5)`,
                    borderBottomLeftRadius: 1e3,
                    borderBottomRightRadius: 1e3,
                    borderTopLeftRadius: 1e3,
                    borderTopRightRadius: 1e3,
                    WebkitBackdropFilter: `blur(10px)`,
                    ...d,
                  },
                  ...q(
                    {
                      dKYKcSqcz: { "data-framer-name": `IFPE` },
                      EJbLJeOH3: { "data-framer-name": `BRZ` },
                      MtoXSlXGI: { "data-framer-name": `Fusion` },
                      oQ57iFWLA: { "data-framer-name": `Cashback App` },
                      SGi0DvBQG: { "data-framer-name": `Bradesco` },
                    },
                    v,
                    C
                  ),
                  children: [
                    k() &&
                      l(H, {
                        className: `framer-4a4ccm`,
                        layoutDependency: D,
                        layoutId: `Fj62BQ32l`,
                        opacity: 1,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 170.887 29.773" overflow="visible"><path d="M 0 10.236 L 29.773 2.258 L 29.773 0 L 0 7.978 Z M 29.773 11.217 L 0 11.217 L 0 15.169 L 29.773 15.169 Z M 0 29.771 L 29.773 21.795 L 29.773 16.15 L 0 24.127 L 0 29.773 Z M 56.765 13.891 C 55.555 13.391 53.951 12.904 51.946 12.434 C 51.813 12.401 51.68 12.372 51.546 12.346 L 51.371 12.3 C 50.073 12.007 49.109 11.734 48.476 11.483 C 47.84 11.232 47.363 10.93 47.038 10.577 C 46.713 10.223 46.549 9.766 46.551 9.206 C 46.551 8.322 46.905 7.703 47.613 7.349 C 48.321 6.995 49.337 6.818 50.663 6.818 C 52.286 6.818 53.486 7.07 54.269 7.572 C 55.05 8.072 55.454 8.837 55.483 9.869 L 59.907 9.869 C 59.876 7.835 59.116 6.244 57.628 5.094 C 56.14 3.945 53.863 3.369 50.796 3.369 C 47.938 3.369 45.741 3.878 44.209 4.896 C 42.675 5.912 41.91 7.423 41.91 9.425 C 41.91 10.782 42.213 11.866 42.817 12.676 C 43.422 13.487 44.3 14.151 45.449 14.667 C 46.597 15.182 48.159 15.689 50.134 16.192 L 50.929 16.367 C 52.227 16.692 53.215 16.974 53.892 17.208 C 54.571 17.444 55.1 17.776 55.483 18.202 C 55.867 18.632 56.057 19.185 56.057 19.862 C 56.057 20.924 55.668 21.689 54.888 22.161 C 54.106 22.633 52.904 22.869 51.285 22.869 C 49.426 22.869 48.019 22.552 47.06 21.918 C 46.103 21.284 45.594 20.26 45.535 18.844 L 40.938 18.844 C 40.966 21.261 41.822 23.125 43.503 24.439 C 45.183 25.75 47.689 26.406 51.019 26.404 C 53.201 26.404 55.013 26.103 56.459 25.498 C 57.903 24.894 58.986 24.077 59.708 23.044 C 60.431 22.012 60.791 20.819 60.791 19.463 C 60.791 18.106 60.422 16.891 59.686 15.991 C 58.949 15.095 57.977 14.394 56.767 13.891 Z M 80.554 4.717 C 78.874 3.819 76.84 3.369 74.453 3.369 C 72.065 3.369 70.008 3.847 68.284 4.805 C 66.591 5.728 65.213 7.137 64.327 8.849 C 63.414 10.59 62.957 12.624 62.957 14.953 C 62.957 17.28 63.412 19.183 64.327 20.92 C 65.222 22.642 66.617 24.052 68.329 24.965 C 70.082 25.926 72.167 26.404 74.585 26.404 C 77.504 26.404 79.92 25.777 81.836 24.525 C 83.753 23.271 85.005 21.482 85.595 19.153 L 80.862 19.153 C 80.537 20.184 79.838 21.032 78.764 21.696 C 77.686 22.36 76.324 22.69 74.674 22.69 C 73.228 22.69 71.99 22.366 70.958 21.718 C 69.925 21.069 69.138 20.155 68.594 18.976 C 68.179 18.083 67.923 17.049 67.822 15.882 L 85.726 15.882 C 85.785 15.546 85.815 15.205 85.815 14.864 L 85.815 14.335 C 85.785 12.124 85.32 10.194 84.422 8.541 C 83.542 6.91 82.195 5.578 80.554 4.717 Z M 68.441 10.774 C 68.861 9.64 69.616 8.662 70.606 7.968 C 71.607 7.26 72.861 6.906 74.364 6.906 C 75.867 6.906 77.061 7.199 78.035 7.789 C 79.007 8.379 79.72 9.25 80.178 10.398 C 80.436 11.05 80.599 11.786 80.675 12.609 L 67.947 12.609 C 68.052 11.982 68.216 11.367 68.437 10.772 Z M 95.741 4.474 C 94.695 5.121 93.876 6.095 93.288 7.393 L 92.492 3.723 L 88.158 3.723 L 88.822 8.984 L 88.822 26.052 L 93.508 26.052 L 93.508 11.155 C 94.629 9.363 96.525 8.408 99.909 8.408 L 101.07 8.408 L 101.07 3.502 L 99.875 3.502 C 98.166 3.502 96.788 3.825 95.741 4.474 Z M 118.799 4.717 C 117.118 3.819 115.084 3.369 112.698 3.369 C 110.31 3.369 108.254 3.847 106.53 4.805 C 104.837 5.728 103.459 7.137 102.572 8.849 C 101.658 10.59 101.201 12.624 101.201 14.953 C 101.201 17.28 101.656 19.183 102.572 20.92 C 103.466 22.642 104.862 24.052 106.574 24.965 C 108.327 25.926 110.413 26.404 112.831 26.404 C 115.748 26.404 118.167 25.777 120.083 24.525 C 121.997 23.271 123.251 21.482 123.841 19.153 L 119.109 19.153 C 118.783 20.184 118.082 21.032 117.009 21.696 C 115.932 22.36 114.569 22.69 112.919 22.69 C 111.475 22.69 110.236 22.366 109.205 21.718 C 108.172 21.069 107.385 20.155 106.839 18.976 C 106.424 18.083 106.168 17.049 106.068 15.882 L 123.972 15.882 C 124.03 15.545 124.059 15.205 124.06 14.864 L 124.06 14.335 C 124.031 12.124 123.566 10.194 122.668 8.541 C 121.787 6.91 120.44 5.578 118.799 4.717 Z M 106.683 10.775 C 107.104 9.641 107.861 8.661 108.852 7.968 C 109.853 7.26 111.107 6.906 112.61 6.906 C 114.114 6.906 115.307 7.201 116.279 7.791 C 117.252 8.381 117.966 9.25 118.424 10.398 C 118.682 11.05 118.846 11.788 118.92 12.611 L 106.193 12.611 C 106.297 11.984 106.461 11.369 106.683 10.774 L 106.685 10.774 Z M 170.887 26.052 L 170.269 21.232 L 170.269 11.503 C 170.269 8.615 169.487 6.544 167.925 5.29 C 166.363 4.038 163.99 3.411 160.805 3.411 C 157.623 3.411 155.345 3.994 153.796 5.157 C 152.249 6.323 151.431 8.039 151.344 10.309 L 155.853 10.309 C 155.853 9.043 156.282 8.135 157.134 7.59 C 157.99 7.044 159.214 6.773 160.805 6.773 C 162.308 6.773 163.474 7.09 164.298 7.723 C 165.124 8.357 165.537 9.5 165.537 11.149 L 165.537 13.14 L 159.79 13.14 C 156.546 13.14 154.128 13.736 152.539 14.931 C 150.946 16.124 150.151 17.798 150.151 19.95 C 150.151 21.247 150.454 22.382 151.057 23.354 C 151.661 24.328 152.561 25.08 153.754 25.609 C 154.95 26.14 156.401 26.404 158.112 26.404 C 160.38 26.404 162.207 25.954 163.594 25.056 C 164.542 24.437 165.331 23.602 165.894 22.619 L 166.556 26.052 Z M 163.944 21.298 C 162.883 22.521 161.307 23.135 159.214 23.135 C 157.798 23.135 156.715 22.847 155.965 22.272 C 155.213 21.697 154.837 20.776 154.836 19.508 C 154.836 18.711 155.014 18.062 155.366 17.562 C 155.72 17.061 156.273 16.699 157.025 16.478 C 157.776 16.259 158.742 16.133 159.92 16.104 L 165.535 16.104 L 165.535 16.502 C 165.535 18.477 165.004 20.074 163.944 21.3 Z M 138.612 3.367 C 136.755 3.367 135.157 3.773 133.814 4.584 C 132.837 5.175 132.045 5.983 131.436 7.004 L 130.74 3.723 L 126.409 3.723 L 127.071 8.497 L 127.071 26.052 L 131.756 26.052 L 131.756 10.998 C 132.227 9.961 132.837 9.141 133.59 8.541 C 135.238 7.226 137.04 7.305 137.286 7.305 C 139.055 7.305 140.373 7.865 141.242 8.984 C 142.112 10.105 142.547 11.8 142.547 14.07 L 142.547 26.052 L 147.232 26.052 L 147.232 13.627 C 147.232 10.238 146.556 7.68 145.201 5.956 C 143.844 4.23 141.647 3.369 138.612 3.369 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                        withExternalLayout: !0,
                        children: [
                          o(H, {
                            className: `framer-tiw392`,
                            layoutDependency: D,
                            layoutId: `DyrKu9E8C`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.773 10.236" overflow="visible"><path d="M 0 10.236 L 29.773 2.258 L 29.773 0 L 0 7.978 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-12mu4b6`,
                            layoutDependency: D,
                            layoutId: `KGhW7G0rt`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.773 3.952" overflow="visible"><path d="M 29.773 0 L 0 0 L 0 3.952 L 29.773 3.952 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-h72joc`,
                            layoutDependency: D,
                            layoutId: `NIMDvifAI`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.773 13.623" overflow="visible"><path d="M 0 13.622 L 29.773 5.646 L 29.773 0 L 0 7.978 L 0 13.623 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-va3yjl`,
                            layoutDependency: D,
                            layoutId: `s5QXPvsjO`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.854 23.035" overflow="visible"><path d="M 15.828 10.523 C 14.618 10.022 13.013 9.535 11.008 9.065 C 10.875 9.033 10.742 9.003 10.609 8.977 L 10.433 8.932 C 9.136 8.638 8.172 8.365 7.538 8.114 C 6.903 7.863 6.426 7.562 6.101 7.208 C 5.775 6.854 5.612 6.397 5.614 5.838 C 5.614 4.953 5.967 4.334 6.675 3.981 C 7.383 3.627 8.399 3.45 9.725 3.45 C 11.348 3.45 12.548 3.701 13.332 4.203 C 14.112 4.703 14.517 5.469 14.545 6.5 L 18.969 6.5 C 18.939 4.466 18.179 2.875 16.691 1.726 C 15.202 0.576 12.926 0 9.859 0 C 7 0 4.803 0.509 3.271 1.527 C 1.737 2.543 0.972 4.055 0.972 6.057 C 0.972 7.413 1.276 8.497 1.879 9.308 C 2.484 10.118 3.362 10.782 4.511 11.298 C 5.659 11.813 7.221 12.321 9.196 12.823 L 9.992 12.998 C 11.289 13.323 12.277 13.605 12.954 13.839 C 13.634 14.075 14.163 14.407 14.545 14.833 C 14.929 15.263 15.12 15.816 15.12 16.493 C 15.12 17.555 14.731 18.32 13.95 18.792 C 13.168 19.264 11.967 19.5 10.347 19.5 C 8.489 19.5 7.081 19.183 6.122 18.549 C 5.165 17.916 4.656 16.891 4.597 15.475 L 0 15.475 C 0.029 17.892 0.885 19.756 2.565 21.07 C 4.245 22.382 6.751 23.037 10.081 23.035 C 12.263 23.035 14.075 22.734 15.521 22.129 C 16.965 21.525 18.049 20.708 18.77 19.675 C 19.493 18.644 19.854 17.451 19.854 16.094 C 19.854 14.737 19.485 13.522 18.748 12.622 C 18.012 11.726 17.039 11.025 15.829 10.523 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-1gb2p0d`,
                            layoutDependency: D,
                            layoutId: `r2t8X4Gwo`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.858 23.035" overflow="visible"><path d="M 17.597 1.348 C 15.917 0.45 13.883 0 11.497 0 C 9.109 0 7.051 0.479 5.327 1.436 C 3.635 2.36 2.257 3.768 1.37 5.48 C 0.457 7.221 0 9.255 0 11.584 C 0 13.912 0.455 15.814 1.37 17.552 C 2.265 19.273 3.661 20.683 5.373 21.596 C 7.125 22.557 9.21 23.035 11.628 23.035 C 14.547 23.035 16.964 22.409 18.88 21.156 C 20.796 19.903 22.048 18.113 22.638 15.784 L 17.906 15.784 C 17.58 16.815 16.881 17.663 15.807 18.327 C 14.729 18.991 13.367 19.321 11.717 19.321 C 10.271 19.321 9.033 18.998 8.001 18.349 C 6.968 17.7 6.181 16.787 5.637 15.607 C 5.223 14.714 4.966 13.681 4.865 12.513 L 22.769 12.513 C 22.829 12.177 22.858 11.836 22.858 11.495 L 22.858 10.966 C 22.828 8.755 22.363 6.825 21.465 5.172 C 20.585 3.541 19.238 2.21 17.597 1.348 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-cl16q`,
                            layoutDependency: D,
                            layoutId: `jJLtSQoTK`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.729 5.703" overflow="visible"><path d="M 0.494 3.868 C 0.914 2.734 1.669 1.755 2.659 1.062 C 3.66 0.354 4.914 0 6.417 0 C 7.921 0 9.114 0.293 10.088 0.883 C 11.06 1.473 11.773 2.344 12.231 3.492 C 12.489 4.144 12.653 4.88 12.729 5.703 L 0 5.703 C 0.105 5.076 0.269 4.461 0.49 3.866 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-1ajideg`,
                            layoutDependency: D,
                            layoutId: `oocMBkiA8`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.912 22.55" overflow="visible"><path d="M 7.584 0.972 C 6.537 1.62 5.718 2.594 5.13 3.891 L 4.334 0.221 L 0 0.221 L 0.664 5.482 L 0.664 22.55 L 5.351 22.55 L 5.351 7.653 C 6.471 5.861 8.367 4.906 11.751 4.906 L 12.912 4.906 L 12.912 0 L 11.717 0 C 10.009 0 8.63 0.324 7.584 0.972 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-195o6ir`,
                            layoutDependency: D,
                            layoutId: `PAQsu927T`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.858 23.035" overflow="visible"><path d="M 17.597 1.348 C 15.917 0.45 13.883 0 11.497 0 C 9.109 0 7.053 0.479 5.329 1.436 C 3.636 2.359 2.257 3.768 1.37 5.48 C 0.457 7.221 0 9.255 0 11.584 C 0 13.912 0.455 15.814 1.37 17.552 C 2.265 19.273 3.66 20.683 5.373 21.596 C 7.125 22.557 9.211 23.035 11.63 23.035 C 14.547 23.035 16.965 22.409 18.881 21.156 C 20.796 19.903 22.05 18.113 22.639 15.784 L 17.907 15.784 C 17.582 16.815 16.881 17.663 15.807 18.327 C 14.731 18.991 13.367 19.321 11.717 19.321 C 10.273 19.321 9.035 18.998 8.003 18.349 C 6.97 17.7 6.183 16.787 5.637 15.607 C 5.223 14.714 4.966 13.681 4.867 12.513 L 22.771 12.513 C 22.829 12.177 22.858 11.836 22.858 11.495 L 22.858 10.966 C 22.83 8.755 22.365 6.825 21.466 5.172 C 20.586 3.541 19.239 2.209 17.597 1.348 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-1an5i0e`,
                            layoutDependency: D,
                            layoutId: `F9u5YW9Nj`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.727 5.705" overflow="visible"><path d="M 0.49 3.869 C 0.911 2.735 1.668 1.755 2.659 1.062 C 3.66 0.354 4.914 0 6.417 0 C 7.921 0 9.114 0.295 10.086 0.885 C 11.058 1.475 11.773 2.344 12.231 3.492 C 12.489 4.144 12.653 4.882 12.727 5.705 L 0 5.705 C 0.104 5.078 0.268 4.463 0.49 3.868 L 0.492 3.868 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-vdzj6z`,
                            layoutDependency: D,
                            layoutId: `HRJksN5eH`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.737 22.993" overflow="visible"><path d="M 20.737 22.641 L 20.118 17.821 L 20.118 8.092 C 20.118 5.204 19.336 3.133 17.774 1.879 C 16.212 0.627 13.839 0 10.654 0 C 7.472 0 5.194 0.583 3.645 1.746 C 2.098 2.912 1.281 4.628 1.193 6.898 L 5.703 6.898 C 5.703 5.632 6.131 4.724 6.984 4.179 C 7.84 3.633 9.063 3.362 10.654 3.362 C 12.157 3.362 13.323 3.679 14.148 4.313 C 14.973 4.946 15.386 6.089 15.386 7.739 L 15.386 9.729 L 9.64 9.729 C 6.395 9.729 3.977 10.325 2.388 11.52 C 0.795 12.713 0 14.387 0 16.539 C 0 17.836 0.303 18.971 0.907 19.943 C 1.51 20.917 2.41 21.669 3.603 22.198 C 4.8 22.729 6.251 22.993 7.961 22.993 C 10.229 22.993 12.056 22.543 13.443 21.645 C 14.392 21.026 15.18 20.191 15.743 19.208 L 16.406 22.641 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-3uoxq3`,
                            layoutDependency: D,
                            layoutId: `AWkVFSDiT`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.7 7.031" overflow="visible"><path d="M 9.109 5.194 C 8.047 6.417 6.471 7.031 4.378 7.031 C 2.963 7.031 1.879 6.743 1.129 6.168 C 0.377 5.593 0.002 4.671 0 3.404 C 0 2.607 0.179 1.958 0.531 1.458 C 0.885 0.957 1.438 0.595 2.189 0.374 C 2.941 0.155 3.906 0.029 5.084 0 L 10.7 0 L 10.7 0.398 C 10.7 2.373 10.169 3.97 9.109 5.196 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-i364v3`,
                            layoutDependency: D,
                            layoutId: `e_vRp_7l1`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.823 22.685" overflow="visible"><path d="M 12.203 0 C 10.346 0 8.748 0.406 7.405 1.217 C 6.427 1.808 5.635 2.615 5.027 3.637 L 4.331 0.356 L 0 0.356 L 0.662 5.13 L 0.662 22.685 L 5.347 22.685 L 5.347 7.631 C 5.817 6.594 6.427 5.774 7.181 5.174 C 8.829 3.859 10.63 3.938 10.876 3.938 C 12.646 3.938 13.964 4.498 14.833 5.617 C 15.703 6.738 16.138 8.433 16.138 10.703 L 16.138 22.685 L 20.823 22.685 L 20.823 10.26 C 20.823 6.871 20.147 4.313 18.792 2.589 C 17.435 0.863 15.238 0.002 12.203 0.002 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    A() &&
                      l(H, {
                        className: `framer-1bm4ic3`,
                        layoutDependency: D,
                        layoutId: `nCyMC9atZ`,
                        opacity: 1,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 154.344 30" overflow="visible"></svg>`,
                        withExternalLayout: !0,
                        ...q(
                          {
                            SGi0DvBQG: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 154.344 30" overflow="visible"><path d="M 43.436 12.723 C 42.307 12.734 41.193 13 40.173 13.501 L 40.173 5.324 C 38.872 5.837 37.647 6.536 36.536 7.401 C 36.042 7.809 35.762 8.434 35.782 9.088 L 35.782 29.076 C 37.643 29.712 39.594 30.019 41.554 29.984 C 47.324 29.984 50.587 26.349 50.587 21.158 C 50.587 15.967 48.327 12.723 43.436 12.723 Z M 41.804 26.349 C 41.249 26.381 40.694 26.292 40.173 26.09 L 40.173 17.005 C 40.97 16.669 41.822 16.492 42.682 16.486 C 44.942 16.486 46.07 18.044 46.07 21.029 C 46.07 24.015 44.69 26.351 41.804 26.351 Z M 14.578 21.289 L 12.823 22.327 C 12.572 22.455 12.572 22.587 12.572 22.846 L 12.572 29.465 C 12.572 29.725 12.696 29.854 12.823 29.854 L 14.578 29.854 L 14.578 21.288 Z M 61.753 12.85 C 60.005 12.827 58.36 13.703 57.362 15.187 C 57.24 14.483 57.072 13.791 56.86 13.111 L 55.103 12.851 L 53.347 13.111 L 53.347 29.594 C 54.036 29.823 54.759 29.911 55.48 29.853 L 57.738 29.594 L 57.738 21.546 C 57.738 18.302 59.369 16.614 61.502 16.614 L 63.007 16.614 C 63.194 15.41 63.194 14.183 63.007 12.98 L 61.753 12.851 Z M 17.841 19.34 L 15.581 20.638 L 15.457 20.638 L 15.457 29.594 L 17.966 29.594 C 18.243 29.594 18.468 29.361 18.468 29.075 L 18.468 19.73 C 18.521 19.558 18.453 19.372 18.303 19.279 C 18.154 19.186 17.963 19.211 17.841 19.34 Z M 14.327 6.362 C 12.475 6.347 10.627 6.521 8.808 6.88 C 10.782 4.225 13.85 2.686 17.089 2.727 C 19.532 2.727 21.909 3.547 23.863 5.065 C 24.114 5.323 24.365 5.452 24.616 5.193 C 24.724 5.094 24.786 4.953 24.786 4.804 C 24.786 4.655 24.724 4.513 24.616 4.415 C 22.341 1.546 18.917 -0.081 15.332 0.003 C 10.474 0.093 6.155 3.226 4.417 7.92 L 0.401 9.607 C 0.067 9.867 -0.059 10.126 0.025 10.385 C 0.076 10.537 0.192 10.656 0.34 10.707 C 0.487 10.758 0.649 10.735 0.778 10.646 C 1.804 10.309 2.853 10.049 3.915 9.867 C 3.805 10.465 3.762 11.075 3.79 11.684 C 3.72 15.88 5.763 19.812 9.184 22.068 C 9.435 22.196 9.811 22.196 9.936 21.938 C 10.062 21.677 10.062 21.418 9.812 21.158 C 7.688 19.173 6.498 16.334 6.548 13.373 C 6.509 11.976 6.81 10.594 7.426 9.349 L 10.939 9.09 C 19.471 9.09 26.747 12.074 26.747 15.839 C 26.747 19.602 24.364 19.733 21.478 21.03 C 20.85 21.289 20.85 21.549 20.85 21.808 C 20.85 22.069 21.228 22.199 21.604 22.069 C 26.622 20.511 30.261 17.656 30.261 14.411 C 30.261 11.167 23.234 6.364 14.326 6.364 Z M 89.479 9.087 L 89.479 12.981 L 87.221 12.722 C 82.33 12.722 79.067 16.095 79.067 21.546 C 79.067 26.998 82.203 29.984 87.221 29.984 C 89.481 30.05 91.732 29.699 93.871 28.944 L 93.871 5.325 C 92.57 5.839 91.345 6.537 90.233 7.402 C 89.702 7.779 89.412 8.427 89.479 9.09 Z M 89.479 26.089 C 88.873 26.295 88.235 26.384 87.599 26.349 C 84.712 26.349 83.584 24.402 83.584 21.546 C 83.584 18.691 84.713 16.355 87.599 16.355 L 89.479 16.614 Z M 134.396 26.349 C 132.263 26.349 130.758 24.532 130.758 21.418 C 130.758 18.302 132.012 16.486 134.396 16.486 C 135.381 16.458 136.362 16.634 137.281 17.003 C 137.549 15.861 138.064 14.796 138.787 13.889 C 137.289 13.048 135.598 12.644 133.894 12.72 C 129 12.72 126.24 16.227 126.24 21.416 C 126.24 26.609 129.126 29.983 134.02 29.983 C 135.709 30.069 137.392 29.712 138.912 28.945 C 138.175 27.959 137.583 26.865 137.156 25.699 C 136.3 26.145 135.353 26.368 134.396 26.349 Z M 69.907 12.723 C 68.303 12.689 66.702 12.864 65.14 13.242 C 64.888 14.439 64.888 15.679 65.14 16.877 C 66.445 16.492 67.799 16.317 69.155 16.356 C 71.414 16.356 72.543 17.264 72.543 19.211 L 72.543 19.471 L 70.41 19.211 C 66.772 19.211 63.51 20.639 63.51 24.404 C 63.51 28.167 66.395 29.984 70.661 29.984 C 72.696 29.935 74.718 29.63 76.682 29.076 L 76.682 19.602 C 76.682 15.058 74.298 12.853 69.908 12.723 Z M 72.543 26.349 L 70.661 26.349 C 68.653 26.349 67.525 25.701 67.525 24.274 C 67.525 22.846 68.653 22.197 70.661 22.197 L 72.543 22.197 L 72.543 26.351 Z M 146.69 12.723 C 141.798 12.723 139.038 16.227 139.038 21.418 C 139.038 26.61 141.923 29.984 146.69 29.984 C 151.459 29.984 154.344 26.61 154.344 21.418 C 154.344 16.227 151.585 12.723 146.69 12.723 Z M 146.69 26.349 C 144.181 26.349 143.554 24.274 143.554 21.418 C 143.554 18.563 144.181 16.358 146.69 16.358 C 149.201 16.358 149.953 18.433 149.953 21.418 C 149.953 24.404 149.074 26.349 146.69 26.349 Z M 103.908 12.723 C 99.265 12.723 96.381 15.967 96.381 21.418 C 96.381 26.87 99.392 29.984 104.662 29.984 C 106.377 30.043 108.086 29.734 109.68 29.076 C 109.928 27.922 109.928 26.724 109.68 25.571 C 108.222 26.072 106.698 26.335 105.162 26.351 C 102.654 26.351 101.023 25.312 100.646 22.716 L 110.558 22.716 C 110.71 21.946 110.793 21.164 110.809 20.379 C 110.809 15.447 108.049 12.723 103.908 12.723 Z M 100.647 19.341 C 100.68 18.48 101.042 17.669 101.654 17.085 C 102.265 16.501 103.076 16.192 103.908 16.227 C 105.916 16.227 106.668 17.524 106.668 19.341 Z M 120.846 19.861 L 118.964 19.082 C 117.96 18.563 117.458 18.303 117.458 17.525 C 117.458 16.745 118.337 16.228 119.466 16.228 C 120.876 16.266 122.272 16.528 123.606 17.005 C 123.857 15.895 123.857 14.741 123.606 13.631 C 122.108 12.945 120.475 12.634 118.839 12.723 C 115.45 12.723 112.941 14.539 112.941 17.395 C 112.941 20.25 113.946 21.288 116.956 22.587 L 118.337 23.105 C 119.591 23.624 119.967 24.015 119.967 24.923 C 119.967 25.831 118.713 26.351 117.709 26.351 C 116.077 26.375 114.457 26.066 112.941 25.442 C 112.568 26.578 112.568 27.81 112.941 28.946 C 114.636 29.726 116.485 30.082 118.337 29.984 C 121.724 29.984 124.484 28.167 124.484 24.923 C 124.484 21.677 123.354 20.899 120.846 19.861 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                            },
                          },
                          v,
                          C
                        ),
                        children: [
                          o(H, {
                            className: `framer-1boutgp`,
                            layoutDependency: D,
                            layoutId: `PJsbcqdV7`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.806 24.663" overflow="visible"><path d="M 7.655 7.399 C 6.526 7.41 5.412 7.676 4.392 8.177 L 4.392 0 C 3.091 0.513 1.867 1.212 0.755 2.077 C 0.261 2.485 -0.019 3.11 0.001 3.764 L 0.001 23.752 C 1.862 24.388 3.813 24.695 5.773 24.66 C 11.543 24.66 14.806 21.026 14.806 15.834 C 14.806 10.643 12.546 7.399 7.655 7.399 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-9mijlv`,
                            layoutDependency: D,
                            layoutId: `jwc_riDWZ`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.897 9.87" overflow="visible"><path d="M 1.631 9.864 C 1.076 9.895 0.521 9.806 0 9.604 L 0 0.519 C 0.797 0.183 1.648 0.006 2.509 0 C 4.769 0 5.897 1.558 5.897 4.543 C 5.897 7.529 4.517 9.865 1.631 9.865 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-13eq00a`,
                            layoutDependency: D,
                            layoutId: `ojoV5c7dt`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.006 8.566" overflow="visible"><path d="M 2.006 0.001 L 0.251 1.039 C 0 1.167 0 1.299 0 1.558 L 0 8.177 C 0 8.437 0.124 8.566 0.251 8.566 L 2.006 8.566 L 2.006 0 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-pmaeoq`,
                            layoutDependency: D,
                            layoutId: `wJrVZwAkz`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.801 17.021" overflow="visible"><path d="M 8.406 0 C 6.658 -0.022 5.013 0.854 4.015 2.338 C 3.894 1.634 3.726 0.941 3.514 0.261 L 1.757 0.002 L 0 0.261 L 0 16.744 C 0.689 16.974 1.412 17.062 2.133 17.004 L 4.391 16.744 L 4.391 8.697 C 4.391 5.452 6.023 3.765 8.155 3.765 L 9.66 3.765 C 9.848 2.561 9.848 1.334 9.66 0.13 L 8.406 0.002 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-jujr8k`,
                            layoutDependency: D,
                            layoutId: `oiZY92gMi`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.028 10.371" overflow="visible"><path d="M 2.384 0.117 L 0.124 1.415 L 0 1.415 L 0 10.371 L 2.509 10.371 C 2.786 10.371 3.011 10.138 3.011 9.852 L 3.011 0.507 C 3.063 0.335 2.995 0.149 2.846 0.056 C 2.697 -0.037 2.506 -0.012 2.384 0.117 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-u6m2ty`,
                            layoutDependency: D,
                            layoutId: `K9AIcIppb`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.261 22.152" overflow="visible"><path d="M 14.327 6.362 C 12.475 6.347 10.627 6.521 8.808 6.88 C 10.782 4.225 13.85 2.686 17.089 2.727 C 19.532 2.727 21.909 3.547 23.863 5.065 C 24.114 5.323 24.365 5.452 24.616 5.193 C 24.724 5.094 24.786 4.953 24.786 4.804 C 24.786 4.655 24.724 4.513 24.616 4.415 C 22.341 1.546 18.917 -0.081 15.332 0.003 C 10.474 0.093 6.155 3.226 4.417 7.92 L 0.401 9.607 C 0.067 9.867 -0.059 10.126 0.025 10.385 C 0.076 10.537 0.192 10.656 0.34 10.707 C 0.487 10.758 0.649 10.735 0.778 10.646 C 1.804 10.309 2.853 10.049 3.915 9.867 C 3.805 10.465 3.762 11.075 3.79 11.684 C 3.72 15.88 5.763 19.812 9.184 22.068 C 9.435 22.196 9.811 22.196 9.936 21.938 C 10.062 21.677 10.062 21.418 9.812 21.158 C 7.688 19.173 6.498 16.334 6.548 13.373 C 6.509 11.976 6.81 10.594 7.426 9.349 L 10.939 9.09 C 19.471 9.09 26.747 12.074 26.747 15.839 C 26.747 19.602 24.364 19.733 21.478 21.03 C 20.85 21.289 20.85 21.549 20.85 21.808 C 20.85 22.069 21.228 22.199 21.604 22.069 C 26.622 20.511 30.261 17.656 30.261 14.411 C 30.261 11.167 23.234 6.364 14.326 6.364 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-1pqu26f`,
                            layoutDependency: D,
                            layoutId: `HRgHVrsq3`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.804 24.667" overflow="visible"><path d="M 10.412 3.762 L 10.412 7.656 L 8.154 7.396 C 3.263 7.396 0 10.77 0 16.221 C 0 21.673 3.136 24.659 8.154 24.659 C 10.414 24.724 12.665 24.374 14.804 23.618 L 14.804 0 C 13.503 0.513 12.278 1.212 11.166 2.077 C 10.635 2.454 10.345 3.101 10.412 3.764 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-8uyo80`,
                            layoutDependency: D,
                            layoutId: `bnA8TGyJt`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.896 10.002" overflow="visible"><path d="M 5.896 9.734 C 5.29 9.94 4.652 10.029 4.015 9.995 C 1.128 9.995 0 8.048 0 5.191 C 0 2.336 1.13 0 4.015 0 L 5.896 0.259 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-1u88yn7`,
                            layoutDependency: D,
                            layoutId: `VGf9OceK4`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.672 17.284" overflow="visible"><path d="M 8.155 13.638 C 6.023 13.638 4.518 11.821 4.518 8.707 C 4.518 5.591 5.772 3.775 8.155 3.775 C 9.141 3.747 10.122 3.923 11.041 4.292 C 11.309 3.15 11.824 2.085 12.547 1.178 C 11.048 0.337 9.357 -0.067 7.654 0.009 C 2.76 0.009 0 3.515 0 8.705 C 0 13.898 2.885 17.272 7.779 17.272 C 9.469 17.358 11.152 17.001 12.672 16.234 C 11.935 15.248 11.343 14.154 10.915 12.988 C 10.06 13.434 9.113 13.657 8.155 13.638 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-1vh1utr`,
                            layoutDependency: D,
                            layoutId: `DjnVpBhpF`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.172 17.265" overflow="visible"><path d="M 6.397 0.004 C 4.794 -0.03 3.192 0.145 1.63 0.523 C 1.379 1.721 1.379 2.96 1.63 4.158 C 2.935 3.773 4.289 3.598 5.645 3.637 C 7.905 3.637 9.033 4.545 9.033 6.492 L 9.033 6.752 L 6.9 6.492 C 3.263 6.492 0 7.921 0 11.685 C 0 15.448 2.885 17.265 7.151 17.265 C 9.186 17.216 11.208 16.911 13.172 16.357 L 13.172 6.883 C 13.172 2.339 10.789 0.134 6.399 0.004 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-1vglqji`,
                            layoutDependency: D,
                            layoutId: `BgT5uE8uU`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.018 4.154" overflow="visible"><path d="M 5.018 4.152 L 3.136 4.152 C 1.128 4.152 0 3.504 0 2.077 C 0 0.649 1.128 0 3.136 0 L 5.018 0 L 5.018 4.154 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-emyivy`,
                            layoutDependency: D,
                            layoutId: `Qoy_Z_0Qw`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.307 17.261" overflow="visible"><path d="M 7.653 0 C 2.76 0 0 3.504 0 8.695 C 0 13.887 2.885 17.261 7.653 17.261 C 12.421 17.261 15.307 13.887 15.307 8.695 C 15.307 3.504 12.547 0 7.653 0 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-12fyler`,
                            layoutDependency: D,
                            layoutId: `oKBIYWnIf`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.399 9.992" overflow="visible"><path d="M 3.136 9.992 C 0.627 9.992 0 7.916 0 5.06 C 0 2.205 0.627 0 3.136 0 C 5.646 0 6.399 2.075 6.399 5.06 C 6.399 8.046 5.52 9.992 3.136 9.992 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-1vym6tr`,
                            layoutDependency: D,
                            layoutId: `vzlE5d2_B`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.427 17.268" overflow="visible"><path d="M 7.527 0 C 2.884 0 0 3.244 0 8.695 C 0 14.147 3.011 17.261 8.281 17.261 C 9.996 17.32 11.705 17.011 13.299 16.353 C 13.547 15.199 13.547 14.001 13.299 12.848 C 11.841 13.349 10.317 13.612 8.781 13.628 C 6.273 13.628 4.642 12.589 4.264 9.993 L 14.177 9.993 C 14.328 9.223 14.412 8.441 14.427 7.656 C 14.427 2.724 11.668 0 7.527 0 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-1m8x8yg`,
                            layoutDependency: D,
                            layoutId: `anLu4VRzQ`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.021 3.117" overflow="visible"><path d="M 0 3.117 C 0.033 2.257 0.395 1.445 1.007 0.861 C 1.619 0.277 2.43 -0.032 3.261 0.003 C 5.269 0.003 6.021 1.3 6.021 3.117 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          o(H, {
                            className: `framer-gcyi3b`,
                            layoutDependency: D,
                            layoutId: `xSzo0o2Um`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.822 17.292" overflow="visible"><path d="M 8.184 7.153 L 6.302 6.374 C 5.298 5.855 4.796 5.595 4.796 4.817 C 4.796 4.037 5.675 3.52 6.804 3.52 C 8.214 3.558 9.611 3.82 10.944 4.297 C 11.196 3.187 11.196 2.033 10.944 0.923 C 9.446 0.237 7.813 -0.074 6.177 0.015 C 2.789 0.015 0.28 1.831 0.28 4.687 C 0.28 7.542 1.284 8.58 4.295 9.879 L 5.675 10.397 C 6.929 10.916 7.305 11.307 7.305 12.215 C 7.305 13.123 6.052 13.643 5.047 13.643 C 3.416 13.667 1.796 13.358 0.28 12.734 C -0.093 13.87 -0.093 15.102 0.28 16.238 C 1.974 17.018 3.823 17.374 5.675 17.276 C 9.062 17.276 11.822 15.459 11.822 12.215 C 11.822 8.969 10.692 8.191 8.184 7.153 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    j() &&
                      l(H, {
                        className: `framer-dmhk5c`,
                        layoutDependency: D,
                        layoutId: `bwpjS4xKZ`,
                        opacity: 1,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 95.602 30" overflow="visible"></svg>`,
                        withExternalLayout: !0,
                        ...q(
                          {
                            MtoXSlXGI: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 95.602 30" overflow="visible"><g><path d="M 0 0 L 95.602 0 L 95.602 30 L 0 30 Z" fill="transparent"></path><g transform="translate(0.11 0.034)"><g transform="translate(0.037 0.673)"><path d="M 16.467 0.006 L 12.061 0.006 C 4.895 0.006 2.651 4.909 2.651 7.155 L 2.651 7.172 C 2.652 7.523 2.685 7.84 2.732 8.132 C 3.104 7.589 3.719 7.264 4.378 7.263 C 4.537 7.263 4.689 7.286 4.838 7.322 C 4.857 6.347 5.708 2.165 12.527 2.165 L 16.727 2.165 C 16.423 1.808 16.256 1.356 16.253 0.888 C 16.253 0.57 16.335 0.273 16.467 0.006 Z M 20.035 0.006 C 20.166 0.273 20.248 0.57 20.248 0.888 C 20.248 1.378 20.063 1.822 19.77 2.169 C 20.072 2.169 20.381 2.136 20.673 2.218 C 21.311 2.401 21.652 3.028 21.457 3.772 C 21.224 4.661 20.316 5.38 19.429 5.38 L 16.177 5.375 L 13.721 5.375 C 10.859 5.36 7.337 6.562 5.303 8.674 C 5.06 8.914 3.816 10.423 3.816 10.423 C 2.243 12.313 1.317 15.271 0.793 17.602 C 1.026 17.509 1.273 17.461 1.523 17.459 C 2.104 17.459 2.623 17.714 2.989 18.112 C 3.267 16.874 3.685 15.35 4.287 13.953 L 4.289 13.953 C 4.647 13.121 5.067 12.333 5.565 11.678 C 7.531 8.79 11.114 7.452 14.509 7.534 L 19.694 7.534 L 19.697 7.522 C 21.687 7.389 23.658 5.762 24.181 3.77 C 24.66 1.944 23.761 0.422 22.128 0.08 C 21.605 -0.032 20.548 0.006 20.034 0.006 M 5.994 11.85 C 6.678 12.09 8.185 12.496 10.546 12.496 L 12.008 12.496 L 12.03 12.484 L 16.402 12.488 C 16.588 12.488 16.706 12.474 16.889 12.513 C 17.432 12.629 17.733 13.13 17.573 13.737 C 17.392 14.431 16.682 14.993 15.99 14.993 L 13.2 14.991 C 12.871 14.991 12.494 14.993 12.16 15.009 C 10.993 15.063 7.688 15.514 5.767 18.789 C 5.649 19.039 5.223 20.08 4.687 22.919 C 4.611 23.601 4.036 24.117 3.351 24.12 C 2.027 24.12 1.956 22.838 2.124 21.819 C 2.135 21.754 2.175 21.57 2.23 21.324 C 2.01 21.409 1.774 21.46 1.523 21.46 C 1.033 21.458 0.561 21.275 0.199 20.945 C 0.141 21.369 0.091 21.794 0.048 22.22 C 0.018 22.398 0.002 22.578 0 22.758 L 0 22.767 C -0.001 24.619 1.499 26.121 3.351 26.123 C 4.24 26.122 5.093 25.768 5.721 25.139 C 6.349 24.509 6.702 23.656 6.701 22.766 C 7.575 16.902 12.585 17.252 12.585 17.252 L 15.673 17.252 L 15.676 17.236 C 17.477 17.076 19.241 15.597 19.714 13.794 C 20.215 11.884 19.077 10.337 17.17 10.337 L 12.004 10.337 C 9.602 10.337 8.337 10.16 7.733 10.031 L 7.661 10.102 C 7.661 10.102 6.53 11.082 5.994 11.85 Z" fill="rgb(0, 0, 0)"></path></g><path d="M 18.288 0.001 C 17.426 0.001 16.728 0.699 16.728 1.561 C 16.728 2.422 17.426 3.12 18.288 3.12 C 19.149 3.12 19.848 2.422 19.848 1.56 C 19.848 0.699 19.149 0 18.288 0 M 1.56 18.575 C 0.698 18.575 0 19.273 0 20.134 C 0 20.996 0.698 21.694 1.56 21.694 C 2.421 21.694 3.12 20.995 3.12 20.134 C 3.12 19.272 2.421 18.573 1.56 18.573 M 4.412 8.377 C 3.697 8.378 3.075 8.865 2.901 9.559 C 2.728 10.252 3.048 10.975 3.678 11.312 C 3.736 11.24 3.793 11.168 3.852 11.096 C 3.852 11.096 5.097 9.588 5.338 9.347 C 5.447 9.233 5.558 9.124 5.672 9.02 C 5.379 8.616 4.911 8.377 4.412 8.377 Z M 60.593 24.311 L 61.209 25.926 L 61.836 24.311 L 62.397 24.311 L 61.407 26.734 C 61.304 26.989 61.226 27.149 61.176 27.214 C 61.065 27.341 60.897 27.405 60.671 27.41 L 60.158 27.41 L 60.158 26.905 L 60.671 26.905 C 60.738 26.905 60.785 26.894 60.813 26.871 C 60.851 26.832 60.88 26.785 60.897 26.734 L 60.976 26.528 L 60.031 24.311 Z M 58.383 25.907 C 58.521 26.024 58.698 26.086 58.879 26.083 C 59.056 26.087 59.228 26.024 59.361 25.907 C 59.497 25.782 59.57 25.602 59.56 25.418 C 59.57 25.231 59.498 25.05 59.364 24.92 C 59.231 24.801 59.058 24.737 58.879 24.742 C 58.699 24.737 58.522 24.794 58.379 24.905 C 58.242 25.014 58.174 25.183 58.174 25.412 C 58.174 25.628 58.242 25.792 58.383 25.907 Z M 58.181 23.366 L 58.181 24.644 C 58.334 24.417 58.588 24.277 58.862 24.271 L 58.954 24.271 C 59.294 24.271 59.57 24.376 59.781 24.587 C 59.992 24.797 60.099 25.074 60.099 25.417 C 60.099 25.769 59.994 26.047 59.785 26.25 C 59.576 26.455 59.304 26.557 58.967 26.557 C 58.931 26.557 58.894 26.555 58.858 26.553 C 58.575 26.544 58.316 26.392 58.169 26.15 L 58.169 26.513 L 57.647 26.513 L 57.647 23.366 Z M 68.572 26.538 L 68.572 29.549 L 67.345 29.549 L 67.345 26.731 C 67.345 25.897 66.842 25.34 66.083 25.34 C 65.271 25.34 64.653 25.971 64.653 26.891 L 64.653 29.548 L 63.424 29.548 L 63.424 24.237 L 64.631 24.237 L 64.631 24.965 L 64.674 24.965 C 65.059 24.452 65.678 24.132 66.394 24.132 C 67.717 24.132 68.573 25.04 68.573 26.538 Z M 77.973 25.436 L 77.973 24.237 L 75.676 24.237 L 75.676 22.387 L 74.449 22.387 L 74.449 24.237 L 70.623 24.237 C 69.705 24.237 69.022 24.869 69.022 25.756 C 69.022 26.463 69.513 27.017 70.262 27.19 L 72.365 27.65 C 72.546 27.692 72.643 27.82 72.643 28.002 C 72.643 28.227 72.493 28.367 72.301 28.367 L 69.234 28.367 L 69.234 29.553 L 72.31 29.553 C 73.24 29.553 73.933 28.902 73.933 28.002 C 73.933 27.285 73.442 26.718 72.673 26.558 L 70.58 26.098 C 70.421 26.069 70.307 25.928 70.313 25.767 C 70.313 25.563 70.452 25.436 70.654 25.436 L 73.493 25.436 L 73.493 25.438 L 74.448 25.436 L 74.448 28.109 C 74.448 29.018 74.993 29.554 75.911 29.554 L 77.972 29.554 L 77.972 28.355 L 76.157 28.355 C 75.847 28.355 75.675 28.184 75.675 27.895 L 75.675 25.433 L 77.972 25.433 Z M 79.563 26.314 L 82.467 26.314 C 82.307 25.649 81.752 25.221 81.005 25.221 C 80.268 25.221 79.712 25.66 79.562 26.313 Z M 83.738 27.318 L 79.539 27.318 C 79.636 28.002 80.212 28.548 81.046 28.569 C 81.644 28.58 82.168 28.313 82.38 27.885 L 83.651 27.885 C 83.31 29.041 82.273 29.703 81.025 29.703 C 79.284 29.703 78.269 28.409 78.269 26.901 C 78.269 25.328 79.392 24.088 81.025 24.088 C 82.787 24.088 83.897 25.489 83.737 27.318 Z M 88.426 26.216 C 88.244 25.681 87.72 25.274 87.025 25.274 C 86.054 25.274 85.444 26.003 85.444 26.901 C 85.444 27.789 86.054 28.526 87.026 28.526 C 87.699 28.526 88.244 28.131 88.426 27.564 L 89.718 27.564 C 89.483 28.794 88.436 29.703 87.016 29.703 C 85.318 29.703 84.217 28.463 84.217 26.891 C 84.217 25.318 85.318 24.087 87.015 24.087 C 88.436 24.087 89.483 24.985 89.717 26.216 Z M 95.437 26.538 L 95.437 29.549 L 94.21 29.549 L 94.21 26.731 C 94.21 25.897 93.707 25.34 92.949 25.34 C 92.138 25.34 91.519 25.97 91.519 26.891 L 91.519 29.548 L 90.29 29.548 L 90.29 21.895 L 91.519 21.895 L 91.519 24.965 L 91.572 24.965 C 91.945 24.452 92.543 24.132 93.259 24.132 C 94.582 24.132 95.438 25.04 95.438 26.537 Z M 38.416 3.923 L 38.416 0.706 L 33.733 0.706 C 31.576 0.706 30.08 2.154 30.08 4.291 L 30.08 6.159 L 28.364 6.159 L 28.364 9.35 L 30.08 9.35 L 30.08 18.388 L 33.389 18.388 L 33.389 9.35 L 38.416 9.35 L 38.416 6.159 L 33.389 6.159 L 33.389 4.832 C 33.389 4.268 33.782 3.923 34.371 3.923 Z M 39.219 12.739 C 39.219 16.423 41.548 18.757 45.201 18.757 C 48.879 18.757 51.159 16.423 51.159 12.739 L 51.159 6.159 L 47.849 6.159 L 47.849 12.691 C 47.849 14.262 46.917 15.54 45.201 15.54 C 43.46 15.54 42.528 14.262 42.528 12.691 L 42.528 6.159 L 39.218 6.159 L 39.218 12.739 Z M 56.031 6.159 C 53.8 6.159 52.084 7.656 52.084 9.768 C 52.084 11.413 53.31 12.715 55.074 13.083 L 59.733 14.09 C 59.981 14.151 60.154 14.375 60.15 14.63 C 60.157 14.776 60.103 14.917 60 15.02 C 59.898 15.123 59.756 15.178 59.611 15.171 L 52.599 15.171 L 52.599 18.388 L 59.66 18.388 C 61.891 18.388 63.632 16.865 63.632 14.704 C 63.632 12.985 62.456 11.708 60.616 11.315 L 56.031 10.382 C 55.787 10.331 55.613 10.115 55.615 9.866 C 55.615 9.571 55.811 9.35 56.129 9.35 L 62.749 9.35 L 62.749 6.159 Z M 75.878 18.757 C 79.85 18.757 82.447 15.933 82.447 12.274 C 82.447 8.639 79.874 5.791 75.878 5.791 C 71.88 5.791 69.307 8.639 69.307 12.274 C 69.307 15.932 71.906 18.757 75.877 18.757 Z M 75.878 15.54 C 73.916 15.54 72.616 14.091 72.616 12.274 C 72.616 10.456 73.917 8.983 75.878 8.983 C 77.839 8.983 79.138 10.456 79.138 12.274 C 79.138 14.091 77.815 15.54 75.878 15.54 Z M 90.581 5.813 C 89.062 5.813 87.689 6.502 86.88 7.63 L 86.757 7.63 L 86.757 6.157 L 83.545 6.157 L 83.545 18.388 L 86.855 18.388 L 86.855 12.051 C 86.855 10.209 88.13 9.055 89.625 9.055 C 90.998 9.055 92.127 10.038 92.127 11.807 L 92.127 18.388 L 95.437 18.388 L 95.437 11.315 C 95.437 7.803 93.548 5.814 90.581 5.814 Z M 64.79 6.217 L 64.79 18.387 L 68.125 18.387 L 68.125 6.217 Z M 66.458 1.653 C 67.206 1.652 67.882 2.103 68.168 2.795 C 68.454 3.486 68.295 4.283 67.765 4.811 C 67.043 5.533 65.872 5.533 65.15 4.811 C 64.428 4.088 64.428 2.918 65.15 2.196 C 65.497 1.848 65.967 1.653 66.458 1.653 Z" fill="rgb(0, 0, 0)"></path></g></g></svg>`,
                            },
                          },
                          v,
                          C
                        ),
                        children: [
                          o(H, {
                            className: `framer-182gp6s`,
                            layoutDependency: D,
                            layoutId: `dRWuQ95fA`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 95.602 30" overflow="visible"><path d="M 0 0 L 95.602 0 L 95.602 30 L 0 30 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          l(H, {
                            className: `framer-v765bm`,
                            layoutDependency: D,
                            layoutId: `UHzL3bBvl`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 95.438 29.703" overflow="visible"><g><g transform="translate(0.037 0.673)"><path d="M 16.467 0.006 L 12.061 0.006 C 4.895 0.006 2.651 4.909 2.651 7.155 L 2.651 7.172 C 2.652 7.523 2.685 7.84 2.732 8.132 C 3.104 7.589 3.719 7.264 4.378 7.263 C 4.537 7.263 4.689 7.286 4.838 7.322 C 4.857 6.347 5.708 2.165 12.527 2.165 L 16.727 2.165 C 16.423 1.808 16.256 1.356 16.253 0.888 C 16.253 0.57 16.335 0.273 16.467 0.006 Z M 20.035 0.006 C 20.166 0.273 20.248 0.57 20.248 0.888 C 20.248 1.378 20.063 1.822 19.77 2.169 C 20.072 2.169 20.381 2.136 20.673 2.218 C 21.311 2.401 21.652 3.028 21.457 3.772 C 21.224 4.661 20.316 5.38 19.429 5.38 L 16.177 5.375 L 13.721 5.375 C 10.859 5.36 7.337 6.562 5.303 8.674 C 5.06 8.914 3.816 10.423 3.816 10.423 C 2.243 12.313 1.317 15.271 0.793 17.602 C 1.026 17.509 1.273 17.461 1.523 17.459 C 2.104 17.459 2.623 17.714 2.989 18.112 C 3.267 16.874 3.685 15.35 4.287 13.953 L 4.289 13.953 C 4.647 13.121 5.067 12.333 5.565 11.678 C 7.531 8.79 11.114 7.452 14.509 7.534 L 19.694 7.534 L 19.697 7.522 C 21.687 7.389 23.658 5.762 24.181 3.77 C 24.66 1.944 23.761 0.422 22.128 0.08 C 21.605 -0.032 20.548 0.006 20.034 0.006 M 5.994 11.85 C 6.678 12.09 8.185 12.496 10.546 12.496 L 12.008 12.496 L 12.03 12.484 L 16.402 12.488 C 16.588 12.488 16.706 12.474 16.889 12.513 C 17.432 12.629 17.733 13.13 17.573 13.737 C 17.392 14.431 16.682 14.993 15.99 14.993 L 13.2 14.991 C 12.871 14.991 12.494 14.993 12.16 15.009 C 10.993 15.063 7.688 15.514 5.767 18.789 C 5.649 19.039 5.223 20.08 4.687 22.919 C 4.611 23.601 4.036 24.117 3.351 24.12 C 2.027 24.12 1.956 22.838 2.124 21.819 C 2.135 21.754 2.175 21.57 2.23 21.324 C 2.01 21.409 1.774 21.46 1.523 21.46 C 1.033 21.458 0.561 21.275 0.199 20.945 C 0.141 21.369 0.091 21.794 0.048 22.22 C 0.018 22.398 0.002 22.578 0 22.758 L 0 22.767 C -0.001 24.619 1.499 26.121 3.351 26.123 C 4.24 26.122 5.093 25.768 5.721 25.139 C 6.349 24.509 6.702 23.656 6.701 22.766 C 7.575 16.902 12.585 17.252 12.585 17.252 L 15.673 17.252 L 15.676 17.236 C 17.477 17.076 19.241 15.597 19.714 13.794 C 20.215 11.884 19.077 10.337 17.17 10.337 L 12.004 10.337 C 9.602 10.337 8.337 10.16 7.733 10.031 L 7.661 10.102 C 7.661 10.102 6.53 11.082 5.994 11.85 Z" fill="rgb(0, 0, 0)"></path></g><path d="M 18.288 0.001 C 17.426 0.001 16.728 0.699 16.728 1.561 C 16.728 2.422 17.426 3.12 18.288 3.12 C 19.149 3.12 19.848 2.422 19.848 1.56 C 19.848 0.699 19.149 0 18.288 0 M 1.56 18.575 C 0.698 18.575 0 19.273 0 20.134 C 0 20.996 0.698 21.694 1.56 21.694 C 2.421 21.694 3.12 20.995 3.12 20.134 C 3.12 19.272 2.421 18.573 1.56 18.573 M 4.412 8.377 C 3.697 8.378 3.075 8.865 2.901 9.559 C 2.728 10.252 3.048 10.975 3.678 11.312 C 3.736 11.24 3.793 11.168 3.852 11.096 C 3.852 11.096 5.097 9.588 5.338 9.347 C 5.447 9.233 5.558 9.124 5.672 9.02 C 5.379 8.616 4.911 8.377 4.412 8.377 Z M 60.593 24.311 L 61.209 25.926 L 61.836 24.311 L 62.397 24.311 L 61.407 26.734 C 61.304 26.989 61.226 27.149 61.176 27.214 C 61.065 27.341 60.897 27.405 60.671 27.41 L 60.158 27.41 L 60.158 26.905 L 60.671 26.905 C 60.738 26.905 60.785 26.894 60.813 26.871 C 60.851 26.832 60.88 26.785 60.897 26.734 L 60.976 26.528 L 60.031 24.311 Z M 58.383 25.907 C 58.521 26.024 58.698 26.086 58.879 26.083 C 59.056 26.087 59.228 26.024 59.361 25.907 C 59.497 25.782 59.57 25.602 59.56 25.418 C 59.57 25.231 59.498 25.05 59.364 24.92 C 59.231 24.801 59.058 24.737 58.879 24.742 C 58.699 24.737 58.522 24.794 58.379 24.905 C 58.242 25.014 58.174 25.183 58.174 25.412 C 58.174 25.628 58.242 25.792 58.383 25.907 Z M 58.181 23.366 L 58.181 24.644 C 58.334 24.417 58.588 24.277 58.862 24.271 L 58.954 24.271 C 59.294 24.271 59.57 24.376 59.781 24.587 C 59.992 24.797 60.099 25.074 60.099 25.417 C 60.099 25.769 59.994 26.047 59.785 26.25 C 59.576 26.455 59.304 26.557 58.967 26.557 C 58.931 26.557 58.894 26.555 58.858 26.553 C 58.575 26.544 58.316 26.392 58.169 26.15 L 58.169 26.513 L 57.647 26.513 L 57.647 23.366 Z M 68.572 26.538 L 68.572 29.549 L 67.345 29.549 L 67.345 26.731 C 67.345 25.897 66.842 25.34 66.083 25.34 C 65.271 25.34 64.653 25.971 64.653 26.891 L 64.653 29.548 L 63.424 29.548 L 63.424 24.237 L 64.631 24.237 L 64.631 24.965 L 64.674 24.965 C 65.059 24.452 65.678 24.132 66.394 24.132 C 67.717 24.132 68.573 25.04 68.573 26.538 Z M 77.973 25.436 L 77.973 24.237 L 75.676 24.237 L 75.676 22.387 L 74.449 22.387 L 74.449 24.237 L 70.623 24.237 C 69.705 24.237 69.022 24.869 69.022 25.756 C 69.022 26.463 69.513 27.017 70.262 27.19 L 72.365 27.65 C 72.546 27.692 72.643 27.82 72.643 28.002 C 72.643 28.227 72.493 28.367 72.301 28.367 L 69.234 28.367 L 69.234 29.553 L 72.31 29.553 C 73.24 29.553 73.933 28.902 73.933 28.002 C 73.933 27.285 73.442 26.718 72.673 26.558 L 70.58 26.098 C 70.421 26.069 70.307 25.928 70.313 25.767 C 70.313 25.563 70.452 25.436 70.654 25.436 L 73.493 25.436 L 73.493 25.438 L 74.448 25.436 L 74.448 28.109 C 74.448 29.018 74.993 29.554 75.911 29.554 L 77.972 29.554 L 77.972 28.355 L 76.157 28.355 C 75.847 28.355 75.675 28.184 75.675 27.895 L 75.675 25.433 L 77.972 25.433 Z M 79.563 26.314 L 82.467 26.314 C 82.307 25.649 81.752 25.221 81.005 25.221 C 80.268 25.221 79.712 25.66 79.562 26.313 Z M 83.738 27.318 L 79.539 27.318 C 79.636 28.002 80.212 28.548 81.046 28.569 C 81.644 28.58 82.168 28.313 82.38 27.885 L 83.651 27.885 C 83.31 29.041 82.273 29.703 81.025 29.703 C 79.284 29.703 78.269 28.409 78.269 26.901 C 78.269 25.328 79.392 24.088 81.025 24.088 C 82.787 24.088 83.897 25.489 83.737 27.318 Z M 88.426 26.216 C 88.244 25.681 87.72 25.274 87.025 25.274 C 86.054 25.274 85.444 26.003 85.444 26.901 C 85.444 27.789 86.054 28.526 87.026 28.526 C 87.699 28.526 88.244 28.131 88.426 27.564 L 89.718 27.564 C 89.483 28.794 88.436 29.703 87.016 29.703 C 85.318 29.703 84.217 28.463 84.217 26.891 C 84.217 25.318 85.318 24.087 87.015 24.087 C 88.436 24.087 89.483 24.985 89.717 26.216 Z M 95.437 26.538 L 95.437 29.549 L 94.21 29.549 L 94.21 26.731 C 94.21 25.897 93.707 25.34 92.949 25.34 C 92.138 25.34 91.519 25.97 91.519 26.891 L 91.519 29.548 L 90.29 29.548 L 90.29 21.895 L 91.519 21.895 L 91.519 24.965 L 91.572 24.965 C 91.945 24.452 92.543 24.132 93.259 24.132 C 94.582 24.132 95.438 25.04 95.438 26.537 Z M 38.416 3.923 L 38.416 0.706 L 33.733 0.706 C 31.576 0.706 30.08 2.154 30.08 4.291 L 30.08 6.159 L 28.364 6.159 L 28.364 9.35 L 30.08 9.35 L 30.08 18.388 L 33.389 18.388 L 33.389 9.35 L 38.416 9.35 L 38.416 6.159 L 33.389 6.159 L 33.389 4.832 C 33.389 4.268 33.782 3.923 34.371 3.923 Z M 39.219 12.739 C 39.219 16.423 41.548 18.757 45.201 18.757 C 48.879 18.757 51.159 16.423 51.159 12.739 L 51.159 6.159 L 47.849 6.159 L 47.849 12.691 C 47.849 14.262 46.917 15.54 45.201 15.54 C 43.46 15.54 42.528 14.262 42.528 12.691 L 42.528 6.159 L 39.218 6.159 L 39.218 12.739 Z M 56.031 6.159 C 53.8 6.159 52.084 7.656 52.084 9.768 C 52.084 11.413 53.31 12.715 55.074 13.083 L 59.733 14.09 C 59.981 14.151 60.154 14.375 60.15 14.63 C 60.157 14.776 60.103 14.917 60 15.02 C 59.898 15.123 59.756 15.178 59.611 15.171 L 52.599 15.171 L 52.599 18.388 L 59.66 18.388 C 61.891 18.388 63.632 16.865 63.632 14.704 C 63.632 12.985 62.456 11.708 60.616 11.315 L 56.031 10.382 C 55.787 10.331 55.613 10.115 55.615 9.866 C 55.615 9.571 55.811 9.35 56.129 9.35 L 62.749 9.35 L 62.749 6.159 Z M 75.878 18.757 C 79.85 18.757 82.447 15.933 82.447 12.274 C 82.447 8.639 79.874 5.791 75.878 5.791 C 71.88 5.791 69.307 8.639 69.307 12.274 C 69.307 15.932 71.906 18.757 75.877 18.757 Z M 75.878 15.54 C 73.916 15.54 72.616 14.091 72.616 12.274 C 72.616 10.456 73.917 8.983 75.878 8.983 C 77.839 8.983 79.138 10.456 79.138 12.274 C 79.138 14.091 77.815 15.54 75.878 15.54 Z M 90.581 5.813 C 89.062 5.813 87.689 6.502 86.88 7.63 L 86.757 7.63 L 86.757 6.157 L 83.545 6.157 L 83.545 18.388 L 86.855 18.388 L 86.855 12.051 C 86.855 10.209 88.13 9.055 89.625 9.055 C 90.998 9.055 92.127 10.038 92.127 11.807 L 92.127 18.388 L 95.437 18.388 L 95.437 11.315 C 95.437 7.803 93.548 5.814 90.581 5.814 Z M 64.79 6.217 L 64.79 18.387 L 68.125 18.387 L 68.125 6.217 Z M 66.458 1.653 C 67.206 1.652 67.882 2.103 68.168 2.795 C 68.454 3.486 68.295 4.283 67.765 4.811 C 67.043 5.533 65.872 5.533 65.15 4.811 C 64.428 4.088 64.428 2.918 65.15 2.196 C 65.497 1.848 65.967 1.653 66.458 1.653 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                            withExternalLayout: !0,
                            children: [
                              o(H, {
                                className: `framer-105j0o4`,
                                layoutDependency: D,
                                layoutId: `xzKKxHh11`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.309 26.123" overflow="visible"><g><path d="M 16.467 0.006 L 12.061 0.006 C 4.895 0.006 2.651 4.909 2.651 7.155 L 2.651 7.172 C 2.652 7.523 2.685 7.84 2.732 8.132 C 3.104 7.589 3.719 7.264 4.378 7.263 C 4.537 7.263 4.689 7.286 4.838 7.322 C 4.857 6.347 5.708 2.165 12.527 2.165 L 16.727 2.165 C 16.423 1.808 16.256 1.356 16.253 0.888 C 16.253 0.57 16.335 0.273 16.467 0.006 Z M 20.035 0.006 C 20.166 0.273 20.248 0.57 20.248 0.888 C 20.248 1.378 20.063 1.822 19.77 2.169 C 20.072 2.169 20.381 2.136 20.673 2.218 C 21.311 2.401 21.652 3.028 21.457 3.772 C 21.224 4.661 20.316 5.38 19.429 5.38 L 16.177 5.375 L 13.721 5.375 C 10.859 5.36 7.337 6.562 5.303 8.674 C 5.06 8.914 3.816 10.423 3.816 10.423 C 2.243 12.313 1.317 15.271 0.793 17.602 C 1.026 17.509 1.273 17.461 1.523 17.459 C 2.104 17.459 2.623 17.714 2.989 18.112 C 3.267 16.874 3.685 15.35 4.287 13.953 L 4.289 13.953 C 4.647 13.121 5.067 12.333 5.565 11.678 C 7.531 8.79 11.114 7.452 14.509 7.534 L 19.694 7.534 L 19.697 7.522 C 21.687 7.389 23.658 5.762 24.181 3.77 C 24.66 1.944 23.761 0.422 22.128 0.08 C 21.605 -0.032 20.548 0.006 20.034 0.006 M 5.994 11.85 C 6.678 12.09 8.185 12.496 10.546 12.496 L 12.008 12.496 L 12.03 12.484 L 16.402 12.488 C 16.588 12.488 16.706 12.474 16.889 12.513 C 17.432 12.629 17.733 13.13 17.573 13.737 C 17.392 14.431 16.682 14.993 15.99 14.993 L 13.2 14.991 C 12.871 14.991 12.494 14.993 12.16 15.009 C 10.993 15.063 7.688 15.514 5.767 18.789 C 5.649 19.039 5.223 20.08 4.687 22.919 C 4.611 23.601 4.036 24.117 3.351 24.12 C 2.027 24.12 1.956 22.838 2.124 21.819 C 2.135 21.754 2.175 21.57 2.23 21.324 C 2.01 21.409 1.774 21.46 1.523 21.46 C 1.033 21.458 0.561 21.275 0.199 20.945 C 0.141 21.369 0.091 21.794 0.048 22.22 C 0.018 22.398 0.002 22.578 0 22.758 L 0 22.767 C -0.001 24.619 1.499 26.121 3.351 26.123 C 4.24 26.122 5.093 25.768 5.721 25.139 C 6.349 24.509 6.702 23.656 6.701 22.766 C 7.575 16.902 12.585 17.252 12.585 17.252 L 15.673 17.252 L 15.676 17.236 C 17.477 17.076 19.241 15.597 19.714 13.794 C 20.215 11.884 19.077 10.337 17.17 10.337 L 12.004 10.337 C 9.602 10.337 8.337 10.16 7.733 10.031 L 7.661 10.102 C 7.661 10.102 6.53 11.082 5.994 11.85 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                withExternalLayout: !0,
                                children: l(H, {
                                  className: `framer-jajqo9`,
                                  layoutDependency: D,
                                  layoutId: `nAyA2b5gd`,
                                  opacity: 1,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.309 26.123" overflow="visible"><path d="M 16.467 0.006 L 12.061 0.006 C 4.895 0.006 2.651 4.909 2.651 7.155 L 2.651 7.172 C 2.652 7.523 2.685 7.84 2.732 8.132 C 3.104 7.589 3.719 7.264 4.378 7.263 C 4.537 7.263 4.689 7.286 4.838 7.322 C 4.857 6.347 5.708 2.165 12.527 2.165 L 16.727 2.165 C 16.423 1.808 16.256 1.356 16.253 0.888 C 16.253 0.57 16.335 0.273 16.467 0.006 Z M 20.035 0.006 C 20.166 0.273 20.248 0.57 20.248 0.888 C 20.248 1.378 20.063 1.822 19.77 2.169 C 20.072 2.169 20.381 2.136 20.673 2.218 C 21.311 2.401 21.652 3.028 21.457 3.772 C 21.224 4.661 20.316 5.38 19.429 5.38 L 16.177 5.375 L 13.721 5.375 C 10.859 5.36 7.337 6.562 5.303 8.674 C 5.06 8.914 3.816 10.423 3.816 10.423 C 2.243 12.313 1.317 15.271 0.793 17.602 C 1.026 17.509 1.273 17.461 1.523 17.459 C 2.104 17.459 2.623 17.714 2.989 18.112 C 3.267 16.874 3.685 15.35 4.287 13.953 L 4.289 13.953 C 4.647 13.121 5.067 12.333 5.565 11.678 C 7.531 8.79 11.114 7.452 14.509 7.534 L 19.694 7.534 L 19.697 7.522 C 21.687 7.389 23.658 5.762 24.181 3.77 C 24.66 1.944 23.761 0.422 22.128 0.08 C 21.605 -0.032 20.548 0.006 20.034 0.006 M 5.994 11.85 C 6.678 12.09 8.185 12.496 10.546 12.496 L 12.008 12.496 L 12.03 12.484 L 16.402 12.488 C 16.588 12.488 16.706 12.474 16.889 12.513 C 17.432 12.629 17.733 13.13 17.573 13.737 C 17.392 14.431 16.682 14.993 15.99 14.993 L 13.2 14.991 C 12.871 14.991 12.494 14.993 12.16 15.009 C 10.993 15.063 7.688 15.514 5.767 18.789 C 5.649 19.039 5.223 20.08 4.687 22.919 C 4.611 23.601 4.036 24.117 3.351 24.12 C 2.027 24.12 1.956 22.838 2.124 21.819 C 2.135 21.754 2.175 21.57 2.23 21.324 C 2.01 21.409 1.774 21.46 1.523 21.46 C 1.033 21.458 0.561 21.275 0.199 20.945 C 0.141 21.369 0.091 21.794 0.048 22.22 C 0.018 22.398 0.002 22.578 0 22.758 L 0 22.767 C -0.001 24.619 1.499 26.121 3.351 26.123 C 4.24 26.122 5.093 25.768 5.721 25.139 C 6.349 24.509 6.702 23.656 6.701 22.766 C 7.575 16.902 12.585 17.252 12.585 17.252 L 15.673 17.252 L 15.676 17.236 C 17.477 17.076 19.241 15.597 19.714 13.794 C 20.215 11.884 19.077 10.337 17.17 10.337 L 12.004 10.337 C 9.602 10.337 8.337 10.16 7.733 10.031 L 7.661 10.102 C 7.661 10.102 6.53 11.082 5.994 11.85 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    o(H, {
                                      className: `framer-1nmw025`,
                                      layoutDependency: D,
                                      layoutId: `UBMWSOu5_`,
                                      opacity: 1,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.076 8.126" overflow="visible"><path d="M 13.816 0 L 9.41 0 C 2.243 0 0 4.902 0 7.149 L 0 7.166 C 0.001 7.517 0.033 7.834 0.081 8.126 C 0.453 7.583 1.068 7.258 1.726 7.257 C 1.885 7.257 2.038 7.28 2.187 7.316 C 2.206 6.341 3.057 2.159 9.876 2.159 L 14.076 2.159 C 13.772 1.802 13.604 1.35 13.602 0.882 C 13.602 0.564 13.683 0.267 13.816 0 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-fgncfi`,
                                      layoutDependency: D,
                                      layoutId: `VCkDDuPW2`,
                                      opacity: 1,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.517 18.112" overflow="visible"><path d="M 19.243 0.006 C 19.374 0.273 19.455 0.57 19.455 0.888 C 19.455 1.378 19.27 1.822 18.977 2.169 C 19.279 2.169 19.588 2.136 19.881 2.218 C 20.519 2.401 20.859 3.028 20.664 3.772 C 20.431 4.661 19.524 5.38 18.637 5.38 L 15.384 5.375 L 12.928 5.375 C 10.066 5.36 6.544 6.562 4.51 8.674 C 4.268 8.914 3.024 10.423 3.024 10.423 C 1.451 12.313 0.525 15.271 0 17.602 C 0.233 17.509 0.48 17.461 0.73 17.459 C 1.312 17.459 1.831 17.714 2.197 18.112 C 2.475 16.874 2.893 15.35 3.494 13.953 L 3.496 13.953 C 3.854 13.121 4.274 12.333 4.772 11.678 C 6.739 8.79 10.322 7.452 13.717 7.534 L 18.901 7.534 L 18.905 7.522 C 20.895 7.389 22.865 5.762 23.388 3.77 C 23.867 1.944 22.969 0.422 21.336 0.08 C 20.812 -0.032 19.755 0.006 19.241 0.006" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-mxnf85`,
                                      layoutDependency: D,
                                      layoutId: `ZbOk5ECkc`,
                                      opacity: 1,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.832 16.092" overflow="visible"><path d="M 5.994 1.819 C 6.678 2.059 8.185 2.465 10.546 2.465 L 12.008 2.465 L 12.03 2.453 L 16.402 2.457 C 16.588 2.457 16.706 2.443 16.889 2.482 C 17.432 2.598 17.733 3.099 17.573 3.706 C 17.392 4.4 16.682 4.962 15.99 4.962 L 13.2 4.96 C 12.871 4.96 12.494 4.962 12.16 4.978 C 10.993 5.032 7.688 5.483 5.767 8.758 C 5.649 9.008 5.223 10.049 4.687 12.888 C 4.611 13.57 4.036 14.086 3.351 14.089 C 2.027 14.089 1.956 12.807 2.124 11.788 C 2.135 11.723 2.175 11.539 2.23 11.293 C 2.01 11.378 1.774 11.429 1.523 11.429 C 1.033 11.427 0.561 11.244 0.199 10.914 C 0.141 11.338 0.091 11.763 0.048 12.189 C 0.018 12.367 0.002 12.547 0 12.727 L 0 12.736 C -0.001 14.588 1.499 16.09 3.351 16.092 C 4.24 16.091 5.093 15.737 5.721 15.108 C 6.349 14.478 6.702 13.625 6.701 12.735 C 7.575 6.871 12.585 7.221 12.585 7.221 L 15.673 7.221 L 15.676 7.205 C 17.477 7.045 19.241 5.566 19.714 3.763 C 20.215 1.853 19.077 0.306 17.17 0.306 L 12.004 0.306 C 9.602 0.306 8.337 0.129 7.733 0 L 7.661 0.071 C 7.661 0.071 6.53 1.051 5.994 1.819 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                              l(H, {
                                className: `framer-vnt7px`,
                                layoutDependency: D,
                                layoutId: `a4UvWmN_l`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 95.438 29.703" overflow="visible"><path d="M 18.288 0.001 C 17.426 0.001 16.728 0.699 16.728 1.561 C 16.728 2.422 17.426 3.12 18.288 3.12 C 19.149 3.12 19.848 2.422 19.848 1.56 C 19.848 0.699 19.149 0 18.288 0 M 1.56 18.575 C 0.698 18.575 0 19.273 0 20.134 C 0 20.996 0.698 21.694 1.56 21.694 C 2.421 21.694 3.12 20.995 3.12 20.134 C 3.12 19.272 2.421 18.573 1.56 18.573 M 4.412 8.377 C 3.697 8.378 3.075 8.865 2.901 9.559 C 2.728 10.252 3.048 10.975 3.678 11.312 C 3.736 11.24 3.793 11.168 3.852 11.096 C 3.852 11.096 5.097 9.588 5.338 9.347 C 5.447 9.233 5.558 9.124 5.672 9.02 C 5.379 8.616 4.911 8.377 4.412 8.377 Z M 60.593 24.311 L 61.209 25.926 L 61.836 24.311 L 62.397 24.311 L 61.407 26.734 C 61.304 26.989 61.226 27.149 61.176 27.214 C 61.065 27.341 60.897 27.405 60.671 27.41 L 60.158 27.41 L 60.158 26.905 L 60.671 26.905 C 60.738 26.905 60.785 26.894 60.813 26.871 C 60.851 26.832 60.88 26.785 60.897 26.734 L 60.976 26.528 L 60.031 24.311 Z M 58.383 25.907 C 58.521 26.024 58.698 26.086 58.879 26.083 C 59.056 26.087 59.228 26.024 59.361 25.907 C 59.497 25.782 59.57 25.602 59.56 25.418 C 59.57 25.231 59.498 25.05 59.364 24.92 C 59.231 24.801 59.058 24.737 58.879 24.742 C 58.699 24.737 58.522 24.794 58.379 24.905 C 58.242 25.014 58.174 25.183 58.174 25.412 C 58.174 25.628 58.242 25.792 58.383 25.907 Z M 58.181 23.366 L 58.181 24.644 C 58.334 24.417 58.588 24.277 58.862 24.271 L 58.954 24.271 C 59.294 24.271 59.57 24.376 59.781 24.587 C 59.992 24.797 60.099 25.074 60.099 25.417 C 60.099 25.769 59.994 26.047 59.785 26.25 C 59.576 26.455 59.304 26.557 58.967 26.557 C 58.931 26.557 58.894 26.555 58.858 26.553 C 58.575 26.544 58.316 26.392 58.169 26.15 L 58.169 26.513 L 57.647 26.513 L 57.647 23.366 Z M 68.572 26.538 L 68.572 29.549 L 67.345 29.549 L 67.345 26.731 C 67.345 25.897 66.842 25.34 66.083 25.34 C 65.271 25.34 64.653 25.971 64.653 26.891 L 64.653 29.548 L 63.424 29.548 L 63.424 24.237 L 64.631 24.237 L 64.631 24.965 L 64.674 24.965 C 65.059 24.452 65.678 24.132 66.394 24.132 C 67.717 24.132 68.573 25.04 68.573 26.538 Z M 77.973 25.436 L 77.973 24.237 L 75.676 24.237 L 75.676 22.387 L 74.449 22.387 L 74.449 24.237 L 70.623 24.237 C 69.705 24.237 69.022 24.869 69.022 25.756 C 69.022 26.463 69.513 27.017 70.262 27.19 L 72.365 27.65 C 72.546 27.692 72.643 27.82 72.643 28.002 C 72.643 28.227 72.493 28.367 72.301 28.367 L 69.234 28.367 L 69.234 29.553 L 72.31 29.553 C 73.24 29.553 73.933 28.902 73.933 28.002 C 73.933 27.285 73.442 26.718 72.673 26.558 L 70.58 26.098 C 70.421 26.069 70.307 25.928 70.313 25.767 C 70.313 25.563 70.452 25.436 70.654 25.436 L 73.493 25.436 L 73.493 25.438 L 74.448 25.436 L 74.448 28.109 C 74.448 29.018 74.993 29.554 75.911 29.554 L 77.972 29.554 L 77.972 28.355 L 76.157 28.355 C 75.847 28.355 75.675 28.184 75.675 27.895 L 75.675 25.433 L 77.972 25.433 Z M 79.563 26.314 L 82.467 26.314 C 82.307 25.649 81.752 25.221 81.005 25.221 C 80.268 25.221 79.712 25.66 79.562 26.313 Z M 83.738 27.318 L 79.539 27.318 C 79.636 28.002 80.212 28.548 81.046 28.569 C 81.644 28.58 82.168 28.313 82.38 27.885 L 83.651 27.885 C 83.31 29.041 82.273 29.703 81.025 29.703 C 79.284 29.703 78.269 28.409 78.269 26.901 C 78.269 25.328 79.392 24.088 81.025 24.088 C 82.787 24.088 83.897 25.489 83.737 27.318 Z M 88.426 26.216 C 88.244 25.681 87.72 25.274 87.025 25.274 C 86.054 25.274 85.444 26.003 85.444 26.901 C 85.444 27.789 86.054 28.526 87.026 28.526 C 87.699 28.526 88.244 28.131 88.426 27.564 L 89.718 27.564 C 89.483 28.794 88.436 29.703 87.016 29.703 C 85.318 29.703 84.217 28.463 84.217 26.891 C 84.217 25.318 85.318 24.087 87.015 24.087 C 88.436 24.087 89.483 24.985 89.717 26.216 Z M 95.437 26.538 L 95.437 29.549 L 94.21 29.549 L 94.21 26.731 C 94.21 25.897 93.707 25.34 92.949 25.34 C 92.138 25.34 91.519 25.97 91.519 26.891 L 91.519 29.548 L 90.29 29.548 L 90.29 21.895 L 91.519 21.895 L 91.519 24.965 L 91.572 24.965 C 91.945 24.452 92.543 24.132 93.259 24.132 C 94.582 24.132 95.438 25.04 95.438 26.537 Z M 38.416 3.923 L 38.416 0.706 L 33.733 0.706 C 31.576 0.706 30.08 2.154 30.08 4.291 L 30.08 6.159 L 28.364 6.159 L 28.364 9.35 L 30.08 9.35 L 30.08 18.388 L 33.389 18.388 L 33.389 9.35 L 38.416 9.35 L 38.416 6.159 L 33.389 6.159 L 33.389 4.832 C 33.389 4.268 33.782 3.923 34.371 3.923 Z M 39.219 12.739 C 39.219 16.423 41.548 18.757 45.201 18.757 C 48.879 18.757 51.159 16.423 51.159 12.739 L 51.159 6.159 L 47.849 6.159 L 47.849 12.691 C 47.849 14.262 46.917 15.54 45.201 15.54 C 43.46 15.54 42.528 14.262 42.528 12.691 L 42.528 6.159 L 39.218 6.159 L 39.218 12.739 Z M 56.031 6.159 C 53.8 6.159 52.084 7.656 52.084 9.768 C 52.084 11.413 53.31 12.715 55.074 13.083 L 59.733 14.09 C 59.981 14.151 60.154 14.375 60.15 14.63 C 60.157 14.776 60.103 14.917 60 15.02 C 59.898 15.123 59.756 15.178 59.611 15.171 L 52.599 15.171 L 52.599 18.388 L 59.66 18.388 C 61.891 18.388 63.632 16.865 63.632 14.704 C 63.632 12.985 62.456 11.708 60.616 11.315 L 56.031 10.382 C 55.787 10.331 55.613 10.115 55.615 9.866 C 55.615 9.571 55.811 9.35 56.129 9.35 L 62.749 9.35 L 62.749 6.159 Z M 75.878 18.757 C 79.85 18.757 82.447 15.933 82.447 12.274 C 82.447 8.639 79.874 5.791 75.878 5.791 C 71.88 5.791 69.307 8.639 69.307 12.274 C 69.307 15.932 71.906 18.757 75.877 18.757 Z M 75.878 15.54 C 73.916 15.54 72.616 14.091 72.616 12.274 C 72.616 10.456 73.917 8.983 75.878 8.983 C 77.839 8.983 79.138 10.456 79.138 12.274 C 79.138 14.091 77.815 15.54 75.878 15.54 Z M 90.581 5.813 C 89.062 5.813 87.689 6.502 86.88 7.63 L 86.757 7.63 L 86.757 6.157 L 83.545 6.157 L 83.545 18.388 L 86.855 18.388 L 86.855 12.051 C 86.855 10.209 88.13 9.055 89.625 9.055 C 90.998 9.055 92.127 10.038 92.127 11.807 L 92.127 18.388 L 95.437 18.388 L 95.437 11.315 C 95.437 7.803 93.548 5.814 90.581 5.814 Z M 64.79 6.217 L 64.79 18.387 L 68.125 18.387 L 68.125 6.217 Z M 66.458 1.653 C 67.206 1.652 67.882 2.103 68.168 2.795 C 68.454 3.486 68.295 4.283 67.765 4.811 C 67.043 5.533 65.872 5.533 65.15 4.811 C 64.428 4.088 64.428 2.918 65.15 2.196 C 65.497 1.848 65.967 1.653 66.458 1.653 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  o(H, {
                                    className: `framer-1ybw94o`,
                                    layoutDependency: D,
                                    layoutId: `IKQiesdEo`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.12 3.12" overflow="visible"><path d="M 1.56 0.001 C 0.698 0.001 0 0.699 0 1.561 C 0 2.422 0.698 3.12 1.56 3.12 C 2.421 3.12 3.12 2.422 3.12 1.56 C 3.12 0.699 2.421 0 1.56 0" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-sggs7q`,
                                    layoutDependency: D,
                                    layoutId: `ZHKW7PAyR`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.12 3.12" overflow="visible"><path d="M 1.56 0.001 C 0.698 0.001 0 0.699 0 1.561 C 0 2.422 0.698 3.12 1.56 3.12 C 2.421 3.12 3.12 2.422 3.12 1.56 C 3.12 0.699 2.421 0 1.56 0" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1gpfr2t`,
                                    layoutDependency: D,
                                    layoutId: `SutbuMCu4`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.817 2.935" overflow="visible"><path d="M 1.558 0 C 0.843 0.001 0.22 0.488 0.047 1.181 C -0.127 1.875 0.194 2.597 0.824 2.935 C 0.882 2.862 0.938 2.79 0.997 2.719 C 0.997 2.719 2.242 1.211 2.484 0.969 C 2.593 0.856 2.704 0.747 2.817 0.643 C 2.524 0.239 2.056 0 1.558 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1qbhh4o`,
                                    layoutDependency: D,
                                    layoutId: `AwjJkJoUZ`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.366 3.099" overflow="visible"><path d="M 0.561 0 L 1.178 1.615 L 1.805 0 L 2.366 0 L 1.376 2.423 C 1.273 2.678 1.195 2.838 1.145 2.904 C 1.034 3.03 0.866 3.095 0.64 3.099 L 0.127 3.099 L 0.127 2.595 L 0.64 2.595 C 0.707 2.595 0.754 2.583 0.781 2.56 C 0.82 2.521 0.848 2.475 0.866 2.423 L 0.945 2.218 L 0 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1thm6zu`,
                                    layoutDependency: D,
                                    layoutId: `GYmeFY7ks`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.387 1.341" overflow="visible"><path d="M 0.209 1.165 C 0.348 1.282 0.524 1.345 0.706 1.341 C 0.883 1.345 1.055 1.283 1.187 1.165 C 1.323 1.04 1.396 0.861 1.386 0.676 C 1.396 0.49 1.325 0.308 1.191 0.178 C 1.058 0.059 0.884 -0.005 0.706 0 C 0.525 -0.005 0.348 0.053 0.206 0.164 C 0.069 0.273 0 0.442 0 0.671 C 0 0.886 0.069 1.051 0.209 1.165 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-crukiy`,
                                    layoutDependency: D,
                                    layoutId: `b4jklLro6`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.452 3.192" overflow="visible"><path d="M 0.535 0 L 0.535 1.278 C 0.687 1.051 0.941 0.912 1.215 0.905 L 1.307 0.905 C 1.647 0.905 1.923 1.01 2.134 1.222 C 2.346 1.432 2.452 1.709 2.452 2.051 C 2.452 2.403 2.348 2.681 2.139 2.885 C 1.93 3.089 1.657 3.192 1.321 3.192 C 1.284 3.192 1.247 3.189 1.212 3.187 C 0.929 3.178 0.669 3.027 0.522 2.785 L 0.522 3.147 L 0 3.147 L 0 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1h6naml`,
                                    layoutDependency: D,
                                    layoutId: `juOLPVgpO`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.149 5.417" overflow="visible"><path d="M 5.148 2.407 L 5.148 5.417 L 3.921 5.417 L 3.921 2.599 C 3.921 1.765 3.418 1.208 2.659 1.208 C 1.848 1.208 1.229 1.84 1.229 2.759 L 1.229 5.416 L 0 5.416 L 0 0.106 L 1.207 0.106 L 1.207 0.834 L 1.251 0.834 C 1.635 0.32 2.254 0 2.97 0 C 4.293 0 5.149 0.908 5.149 2.407 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1audbqp`,
                                    layoutDependency: D,
                                    layoutId: `vtAep2Vms`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.951 7.167" overflow="visible"><path d="M 8.951 3.048 L 8.951 1.85 L 6.654 1.85 L 6.654 0 L 5.427 0 L 5.427 1.85 L 1.601 1.85 C 0.683 1.85 0 2.481 0 3.368 C 0 4.075 0.491 4.63 1.239 4.802 L 3.343 5.263 C 3.524 5.305 3.621 5.433 3.621 5.615 C 3.621 5.839 3.471 5.98 3.279 5.98 L 0.212 5.98 L 0.212 7.166 L 3.288 7.166 C 4.218 7.166 4.911 6.514 4.911 5.615 C 4.911 4.898 4.42 4.331 3.651 4.171 L 1.557 3.711 C 1.399 3.682 1.285 3.541 1.291 3.379 C 1.291 3.176 1.43 3.048 1.632 3.048 L 4.471 3.048 L 4.471 3.05 L 5.426 3.048 L 5.426 5.722 C 5.426 6.631 5.971 7.167 6.889 7.167 L 8.95 7.167 L 8.95 5.967 L 7.135 5.967 C 6.824 5.967 6.653 5.796 6.653 5.507 L 6.653 3.046 L 8.95 3.046 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-10p05n9`,
                                    layoutDependency: D,
                                    layoutId: `Bf7YMRaGK`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.906 1.093" overflow="visible"><path d="M 0.001 1.093 L 2.906 1.093 C 2.746 0.428 2.19 0 1.443 0 C 0.706 0 0.15 0.439 0 1.092 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1qg8bwa`,
                                    layoutDependency: D,
                                    layoutId: `zwdjNndN5`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.483 5.615" overflow="visible"><path d="M 5.469 3.229 L 1.271 3.229 C 1.367 3.914 1.943 4.46 2.777 4.481 C 3.375 4.492 3.9 4.224 4.111 3.796 L 5.383 3.796 C 5.041 4.952 4.004 5.615 2.756 5.615 C 1.015 5.615 0 4.321 0 2.812 C 0 1.239 1.123 0 2.756 0 C 4.518 0 5.628 1.401 5.468 3.229 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1xx4mle`,
                                    layoutDependency: D,
                                    layoutId: `Y5FCdcvsD`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.5 5.616" overflow="visible"><path d="M 4.209 2.129 C 4.026 1.594 3.503 1.187 2.808 1.187 C 1.836 1.187 1.227 1.915 1.227 2.814 C 1.227 3.702 1.836 4.439 2.809 4.439 C 3.482 4.439 4.026 4.044 4.209 3.477 L 5.5 3.477 C 5.266 4.707 4.219 5.616 2.799 5.616 C 1.101 5.616 0 4.375 0 2.804 C 0 1.231 1.101 0 2.798 0 C 4.219 0 5.266 0.898 5.499 2.129 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-h2s0fu`,
                                    layoutDependency: D,
                                    layoutId: `qgcZ8bOYl`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.148 7.654" overflow="visible"><path d="M 5.147 4.643 L 5.147 7.654 L 3.92 7.654 L 3.92 4.836 C 3.92 4.002 3.417 3.445 2.659 3.445 C 1.848 3.445 1.228 4.075 1.228 4.996 L 1.228 7.653 L 0 7.653 L 0 0 L 1.228 0 L 1.228 3.07 L 1.282 3.07 C 1.655 2.557 2.253 2.237 2.969 2.237 C 4.292 2.237 5.148 3.145 5.148 4.642 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-v9vynr`,
                                    layoutDependency: D,
                                    layoutId: `AMBqU9F1x`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.053 17.682" overflow="visible"><path d="M 10.053 3.217 L 10.053 0 L 5.369 0 C 3.213 0 1.716 1.448 1.716 3.585 L 1.716 5.453 L 0 5.453 L 0 8.644 L 1.716 8.644 L 1.716 17.682 L 5.026 17.682 L 5.026 8.644 L 10.053 8.644 L 10.053 5.453 L 5.026 5.453 L 5.026 4.126 C 5.026 3.562 5.418 3.217 6.007 3.217 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1pvk4y8`,
                                    layoutDependency: D,
                                    layoutId: `VvPKh7jpE`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.941 12.598" overflow="visible"><path d="M 0.001 6.581 C 0.001 10.265 2.33 12.598 5.983 12.598 C 9.661 12.598 11.941 10.265 11.941 6.581 L 11.941 0 L 8.631 0 L 8.631 6.532 C 8.631 8.104 7.699 9.381 5.983 9.381 C 4.242 9.381 3.31 8.104 3.31 6.532 L 3.31 0 L 0 0 L 0 6.581 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-3g0ooq`,
                                    layoutDependency: D,
                                    layoutId: `fQYMYlZF1`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.548 12.229" overflow="visible"><path d="M 3.947 0 C 1.716 0 0 1.497 0 3.61 C 0 5.255 1.226 6.556 2.99 6.924 L 7.649 7.932 C 7.897 7.992 8.07 8.217 8.066 8.472 C 8.074 8.617 8.019 8.759 7.916 8.862 C 7.814 8.965 7.672 9.019 7.527 9.012 L 0.515 9.012 L 0.515 12.229 L 7.576 12.229 C 9.807 12.229 11.548 10.706 11.548 8.545 C 11.548 6.827 10.372 5.549 8.532 5.157 L 3.947 4.223 C 3.703 4.172 3.529 3.957 3.531 3.707 C 3.531 3.413 3.727 3.192 4.045 3.192 L 10.665 3.192 L 10.665 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1abmuwq`,
                                    layoutDependency: D,
                                    layoutId: `eGLwFNF7t`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.141 12.966" overflow="visible"><path d="M 6.571 12.966 C 10.543 12.966 13.141 10.143 13.141 6.483 C 13.141 2.848 10.567 0 6.571 0 C 2.573 0 0 2.848 0 6.483 C 0 10.142 2.599 12.966 6.57 12.966 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-1olhw16`,
                                    layoutDependency: D,
                                    layoutId: `JyM5lACN3`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.522 6.556" overflow="visible"><path d="M 3.262 6.556 C 1.3 6.556 0 5.108 0 3.29 C 0 1.473 1.301 0 3.262 0 C 5.223 0 6.522 1.473 6.522 3.29 C 6.522 5.108 5.199 6.556 3.262 6.556 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-16r511g`,
                                    layoutDependency: D,
                                    layoutId: `r8gYKa0nX`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.892 12.575" overflow="visible"><path d="M 7.037 0 C 5.517 0 4.144 0.689 3.335 1.818 L 3.213 1.818 L 3.213 0.345 L 0 0.345 L 0 12.575 L 3.31 12.575 L 3.31 6.239 C 3.31 4.397 4.586 3.243 6.081 3.243 C 7.454 3.243 8.582 4.225 8.582 5.994 L 8.582 12.575 L 11.892 12.575 L 11.892 5.503 C 11.892 1.99 10.004 0.001 7.037 0.001 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-lo5s38`,
                                    layoutDependency: D,
                                    layoutId: `t7hvS9QQW`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.335 12.169" overflow="visible"><path d="M 0 0 L 0 12.169 L 3.335 12.169 L 3.335 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  o(H, {
                                    className: `framer-ku43wk`,
                                    layoutDependency: D,
                                    layoutId: `wcm0jOTmZ`,
                                    opacity: 1,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.7 3.7" overflow="visible"><path d="M 1.849 0 C 2.598 -0.001 3.273 0.45 3.56 1.142 C 3.846 1.833 3.687 2.63 3.156 3.158 C 2.434 3.88 1.263 3.88 0.541 3.158 C -0.181 2.435 -0.18 1.264 0.542 0.542 C 0.888 0.195 1.359 0 1.849 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    M() &&
                      l(H, {
                        className: `framer-1cbvf03`,
                        layoutDependency: D,
                        layoutId: `Nirf5iVtK`,
                        opacity: 1,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 122.648 30" overflow="visible"></svg>`,
                        withExternalLayout: !0,
                        ...q(
                          {
                            EJbLJeOH3: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 122.648 30" overflow="visible"><g><path d="M 0 0.096 L 122.64 0.096 L 122.64 29.927 L 0 29.927 Z" fill="transparent"></path><path d="M 84.286 14.574 C 85.915 15.613 86.716 17.016 86.817 18.684 C 86.642 21.996 84.836 23.833 81.201 24.002 L 70.82 24.002 L 70.82 6.112 L 80.599 6.112 C 83.683 6.281 85.388 8.021 85.489 11.334 C 85.563 13.001 85.112 14.041 84.284 14.572 Z M 74.606 13.268 L 79.771 13.268 C 81.225 13.268 82.028 12.495 82.028 11.093 C 82.028 10.223 81.225 9.788 79.771 9.691 L 74.53 9.691 L 74.53 13.268 Z M 74.606 21.198 L 80.674 21.198 C 82.404 21.198 83.307 20.328 83.307 18.587 C 83.307 17.451 82.404 16.847 80.674 16.847 L 74.606 16.847 Z M 100.759 16.146 L 105.372 23.906 L 101.109 23.906 L 96.671 16.581 L 93.338 16.581 L 93.338 23.906 L 89.626 23.906 L 89.626 6.112 L 97.674 6.112 C 102.01 6.112 104.092 7.852 104.092 11.261 C 104.193 13.871 103.014 15.442 100.757 16.145 Z M 93.336 13.27 L 98.502 13.27 C 99.956 13.27 100.759 12.568 100.759 11.359 C 100.759 10.223 99.956 9.618 98.502 9.522 L 93.262 9.522 L 93.262 13.268 L 93.336 13.268 Z M 122.648 23.906 L 107.905 23.906 L 107.905 22.672 L 116.505 9.426 L 107.905 9.426 L 107.905 6.112 L 122.648 6.112 L 122.648 7.417 L 114.049 20.592 L 122.648 20.592 L 122.648 23.905 Z M 49.503 1.305 C 41.579 1.305 35.135 7.494 35.135 15.158 C 35.135 22.796 41.554 29.009 49.501 29.009 C 57.426 29.009 63.87 22.82 63.87 15.156 C 63.846 7.494 57.426 1.307 49.503 1.307 Z M 49.503 24.077 C 44.363 24.053 40.2 20.017 40.224 15.06 C 40.251 10.105 44.438 6.091 49.577 6.116 C 54.718 6.139 58.88 10.178 58.855 15.133 C 58.806 20.088 54.618 24.077 49.503 24.077 Z M 15.15 4.472 L 15.15 0 L 0.006 0 L 0.006 30 L 15.175 30 L 15.175 25.529 L 4.92 25.529 L 4.92 4.472 Z" fill="rgb(0, 0, 0)"></path><path d="M 33.254 0.169 L 11.589 13.828 L 11.589 16.149 L 33.254 29.902 L 33.254 24.15 L 18.535 14.964 L 33.254 5.85 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                            },
                          },
                          v,
                          C
                        ),
                        children: [
                          o(H, {
                            className: `framer-1rvk7z5`,
                            layoutDependency: D,
                            layoutId: `J_vxZDB6O`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 122.64 29.831" overflow="visible"><path d="M 0 0 L 122.64 0 L 122.64 29.831 L 0 29.831 Z" fill="transparent"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          l(H, {
                            className: `framer-4r6n57`,
                            layoutDependency: D,
                            layoutId: `UnFFSlVMd`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 122.643 30" overflow="visible"><path d="M 84.28 14.574 C 85.909 15.613 86.711 17.016 86.811 18.684 C 86.636 21.996 84.83 23.833 81.195 24.002 L 70.814 24.002 L 70.814 6.112 L 80.593 6.112 C 83.677 6.281 85.382 8.021 85.483 11.334 C 85.557 13.001 85.106 14.041 84.278 14.572 Z M 74.6 13.268 L 79.765 13.268 C 81.22 13.268 82.023 12.495 82.023 11.093 C 82.023 10.223 81.22 9.788 79.765 9.691 L 74.524 9.691 L 74.524 13.268 Z M 74.6 21.198 L 80.668 21.198 C 82.398 21.198 83.302 20.328 83.302 18.587 C 83.302 17.451 82.398 16.847 80.668 16.847 L 74.6 16.847 Z M 100.753 16.146 L 105.366 23.906 L 101.103 23.906 L 96.665 16.581 L 93.332 16.581 L 93.332 23.906 L 89.62 23.906 L 89.62 6.112 L 97.668 6.112 C 102.004 6.112 104.086 7.852 104.086 11.261 C 104.187 13.871 103.009 15.442 100.751 16.145 Z M 93.33 13.27 L 98.496 13.27 C 99.95 13.27 100.753 12.568 100.753 11.359 C 100.753 10.223 99.95 9.618 98.496 9.522 L 93.256 9.522 L 93.256 13.268 L 93.33 13.268 Z M 122.643 23.906 L 107.9 23.906 L 107.9 22.672 L 116.499 9.426 L 107.9 9.426 L 107.9 6.112 L 122.643 6.112 L 122.643 7.417 L 114.043 20.592 L 122.643 20.592 L 122.643 23.905 Z M 49.497 1.305 C 41.573 1.305 35.129 7.494 35.129 15.158 C 35.129 22.796 41.549 29.009 49.495 29.009 C 57.42 29.009 63.865 22.82 63.865 15.156 C 63.84 7.494 57.42 1.307 49.497 1.307 Z M 49.497 24.077 C 44.358 24.053 40.194 20.017 40.219 15.06 C 40.245 10.105 44.432 6.091 49.571 6.116 C 54.712 6.139 58.874 10.178 58.85 15.133 C 58.8 20.088 54.613 24.077 49.497 24.077 Z M 15.145 4.472 L 15.145 0 L 0 0 L 0 30 L 15.169 30 L 15.169 25.529 L 4.914 25.529 L 4.914 4.472 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                            withExternalLayout: !0,
                            children: [
                              o(H, {
                                className: `framer-1i6qwci`,
                                layoutDependency: D,
                                layoutId: `BTZNB1GTm`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.997 17.891" overflow="visible"><path d="M 13.466 8.462 C 15.095 9.502 15.896 10.905 15.997 12.572 C 15.822 15.885 14.016 17.721 10.381 17.891 L 0 17.891 L 0 0 L 9.779 0 C 12.863 0.169 14.568 1.91 14.669 5.222 C 14.743 6.89 14.292 7.929 13.464 8.461 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-5mb7l4`,
                                layoutDependency: D,
                                layoutId: `p_rK7dLWe`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.499 3.577" overflow="visible"><path d="M 0.076 3.577 L 5.241 3.577 C 6.696 3.577 7.499 2.803 7.499 1.402 C 7.499 0.531 6.696 0.096 5.241 0 L 0 0 L 0 3.577 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-bz4gfp`,
                                layoutDependency: D,
                                layoutId: `R5fPNzw0S`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.702 4.351" overflow="visible"><path d="M 0 4.351 L 6.068 4.351 C 7.798 4.351 8.702 3.481 8.702 1.74 C 8.702 0.604 7.798 0 6.068 0 L 0 0 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-1xw5yxg`,
                                layoutDependency: D,
                                layoutId: `qv_esm1gf`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.746 17.794" overflow="visible"><path d="M 11.132 10.035 L 15.746 17.794 L 11.483 17.794 L 7.044 10.47 L 3.711 10.47 L 3.711 17.794 L 0 17.794 L 0 0 L 8.047 0 C 12.384 0 14.466 1.74 14.466 5.149 C 14.566 7.76 13.388 9.331 11.131 10.033 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-kpbhm4`,
                                layoutDependency: D,
                                layoutId: `Vjw0OOjQ0`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.497 3.748" overflow="visible"><path d="M 0.074 3.748 L 5.24 3.748 C 6.694 3.748 7.497 3.046 7.497 1.837 C 7.497 0.701 6.694 0.096 5.24 0 L 0 0 L 0 3.746 L 0.074 3.746 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-94pr0j`,
                                layoutDependency: D,
                                layoutId: `sp3SFGUJt`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.743 17.794" overflow="visible"><path d="M 14.743 17.794 L 0 17.794 L 0 16.561 L 8.599 3.314 L 0 3.314 L 0 0 L 14.743 0 L 14.743 1.305 L 6.144 14.48 L 14.743 14.48 L 14.743 17.793 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-7q8rx1`,
                                layoutDependency: D,
                                layoutId: `ObgWLnZpr`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.736 27.703" overflow="visible"><path d="M 14.368 0 C 6.444 0 0 6.189 0 13.852 C 0 21.491 6.42 27.703 14.366 27.703 C 22.291 27.703 28.736 21.515 28.736 13.851 C 28.711 6.189 22.291 0.001 14.368 0.001 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-1kzl0fx`,
                                layoutDependency: D,
                                layoutId: `uh6TFI6ym`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.631 17.961" overflow="visible"><path d="M 9.278 17.961 C 4.139 17.938 -0.025 13.901 0 8.944 C 0.026 3.989 4.214 -0.025 9.353 0 C 14.493 0.023 18.656 4.062 18.631 9.017 C 18.581 13.972 14.394 17.961 9.278 17.961 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-cket3s`,
                                layoutDependency: D,
                                layoutId: `eyv_yGNVe`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.169 30" overflow="visible"><path d="M 15.145 4.472 L 15.145 0 L 0 0 L 0 30 L 15.169 30 L 15.169 25.529 L 4.914 25.529 L 4.914 4.472 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(H, {
                            className: `framer-1afkdef`,
                            layoutDependency: D,
                            layoutId: `PhzEKBRW4`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.665 29.733" overflow="visible"><path d="M 21.665 0 L 0 13.658 L 0 15.98 L 21.665 29.733 L 21.665 23.98 L 6.945 14.794 L 21.665 5.681 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    te() &&
                      l(H, {
                        className: `framer-a09ju5`,
                        layoutDependency: D,
                        layoutId: `iBbMqk3Oj`,
                        opacity: 1,
                        requiresOverflowVisible: !0,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 236.801 30" overflow="visible"></svg>`,
                        withExternalLayout: !0,
                        ...q(
                          {
                            oQ57iFWLA: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 236.801 30" overflow="visible"><g><path d="M 19.416 12.875 L 19.416 12.89 M 3.604 8.654 C 1.646 7.149 1.14 4.408 2.432 2.303 C 3.725 0.197 6.398 -0.593 8.627 0.472 C 10.856 1.537 11.921 4.112 11.096 6.44" fill="transparent" stroke-width="1.872" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 20.922 1.719 L 20.922 7.839 C 22.913 8.991 24.429 10.814 25.199 12.982 L 27.356 12.982 C 28.245 12.982 28.965 13.702 28.965 14.591 L 28.965 17.809 C 28.965 18.697 28.245 19.418 27.356 19.418 L 25.197 19.418 C 24.655 20.946 23.738 22.314 22.529 23.396 L 22.529 26.657 C 22.529 27.989 21.449 29.07 20.116 29.07 C 18.783 29.07 17.702 27.989 17.702 26.657 L 17.702 25.72 C 17.169 25.809 16.633 25.854 16.093 25.852 L 9.657 25.852 C 9.119 25.852 8.579 25.809 8.048 25.72 L 8.048 26.657 C 8.048 27.989 6.968 29.07 5.635 29.07 C 4.302 29.07 3.221 27.989 3.221 26.657 L 3.221 23.396 C 0.236 20.728 -0.793 16.494 0.636 12.754 C 2.064 9.014 5.654 6.544 9.657 6.546 L 13.68 6.546 Z" fill="transparent" stroke-width="1.872" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 54.209 24.632 C 52.576 24.632 51.18 24.308 50.018 23.662 C 48.88 23.034 47.95 22.088 47.343 20.939 C 46.724 19.77 46.413 18.416 46.413 16.875 C 46.413 15.333 46.722 13.982 47.341 12.819 C 47.946 11.668 48.876 10.721 50.016 10.097 C 51.18 9.444 52.577 9.118 54.21 9.118 C 55.685 9.118 56.961 9.386 58.039 9.92 C 59.079 10.411 59.954 11.193 60.557 12.172 C 61.15 13.14 61.451 14.276 61.458 15.581 L 56.442 15.581 C 56.371 14.79 56.143 14.19 55.758 13.78 C 55.384 13.363 54.846 13.134 54.288 13.152 C 53.817 13.152 53.406 13.29 53.054 13.565 C 52.701 13.831 52.426 14.24 52.23 14.789 C 52.034 15.33 51.938 16.012 51.938 16.834 C 51.938 17.659 52.034 18.343 52.23 18.892 C 52.426 19.435 52.701 19.842 53.054 20.117 C 53.406 20.384 53.817 20.518 54.288 20.518 C 54.687 20.518 55.039 20.427 55.345 20.243 C 55.663 20.042 55.921 19.758 56.089 19.421 C 56.285 19.055 56.402 18.613 56.442 18.089 L 61.458 18.089 C 61.437 19.414 61.135 20.571 60.547 21.556 C 59.953 22.541 59.085 23.331 58.049 23.829 C 56.978 24.365 55.697 24.632 54.209 24.632 Z M 67.88 24.594 C 66.921 24.594 66.072 24.437 65.334 24.123 C 64.627 23.824 64.026 23.319 63.61 22.674 C 63.192 22.027 62.982 21.204 62.982 20.205 C 62.982 19.382 63.123 18.68 63.404 18.099 C 63.686 17.511 64.076 17.032 64.579 16.659 C 65.109 16.274 65.703 15.986 66.333 15.808 C 67.042 15.605 67.771 15.476 68.507 15.425 C 69.35 15.359 70.025 15.282 70.536 15.191 C 71.051 15.093 71.423 14.959 71.651 14.789 C 71.873 14.627 72.002 14.367 71.995 14.092 L 71.995 14.055 C 72.012 13.695 71.841 13.354 71.543 13.152 C 71.242 12.944 70.857 12.839 70.388 12.839 C 69.872 12.839 69.451 12.954 69.124 13.183 C 68.805 13.405 68.612 13.747 68.547 14.211 L 63.57 14.211 C 63.632 13.306 63.933 12.434 64.442 11.684 C 64.964 10.907 65.726 10.287 66.725 9.822 C 67.723 9.353 68.97 9.118 70.465 9.118 C 71.543 9.118 72.511 9.245 73.365 9.499 C 74.221 9.747 74.948 10.097 75.548 10.548 C 76.15 10.991 76.607 11.514 76.92 12.114 C 77.24 12.709 77.401 13.355 77.401 14.055 L 77.401 24.358 L 72.348 24.358 L 72.348 22.244 L 72.229 22.244 C 71.928 22.804 71.564 23.258 71.132 23.604 C 70.708 23.949 70.221 24.202 69.671 24.358 C 69.088 24.521 68.485 24.6 67.88 24.594 Z M 69.644 21.185 C 70.056 21.185 70.439 21.099 70.799 20.931 C 71.165 20.759 71.462 20.515 71.691 20.195 C 71.92 19.875 72.035 19.487 72.035 19.029 L 72.035 17.774 C 71.72 17.902 71.396 18.007 71.065 18.087 C 70.674 18.184 70.278 18.262 69.879 18.323 C 69.52 18.371 69.171 18.481 68.849 18.648 C 68.609 18.772 68.406 18.957 68.262 19.186 C 68.136 19.399 68.072 19.643 68.076 19.891 C 68.076 20.31 68.224 20.63 68.518 20.851 C 68.81 21.075 69.186 21.185 69.644 21.185 Z M 93.735 14.211 L 88.761 14.211 C 88.741 13.918 88.627 13.64 88.437 13.417 C 88.239 13.188 87.986 13.013 87.702 12.908 C 87.391 12.781 87.058 12.718 86.722 12.722 C 86.258 12.722 85.862 12.808 85.527 12.977 C 85.195 13.147 85.032 13.389 85.037 13.7 C 85.037 13.939 85.141 14.165 85.323 14.319 C 85.524 14.508 85.912 14.654 86.488 14.759 L 89.544 15.308 C 91.085 15.588 92.231 16.062 92.982 16.728 C 93.739 17.388 94.12 18.273 94.127 19.382 C 94.12 20.453 93.801 21.384 93.168 22.173 C 92.541 22.957 91.683 23.566 90.591 23.996 C 89.508 24.42 88.271 24.632 86.878 24.632 C 84.582 24.632 82.782 24.162 81.482 23.222 C 80.19 22.282 79.468 21.041 79.316 19.5 L 84.685 19.5 C 84.743 19.956 85.002 20.362 85.39 20.607 C 85.795 20.862 86.304 20.989 86.92 20.989 C 87.415 20.989 87.824 20.903 88.143 20.735 C 88.47 20.563 88.637 20.322 88.642 20.009 C 88.637 19.722 88.492 19.493 88.212 19.323 C 87.937 19.153 87.507 19.017 86.92 18.911 L 84.255 18.441 C 82.72 18.175 81.57 17.664 80.807 16.913 C 80.044 16.164 79.664 15.196 79.671 14.015 C 79.664 12.97 79.939 12.085 80.494 11.361 C 81.054 10.629 81.855 10.073 82.894 9.695 C 83.937 9.31 85.175 9.118 86.607 9.118 C 88.78 9.118 90.493 9.568 91.747 10.469 C 93.008 11.369 93.672 12.617 93.735 14.211 Z M 101.607 15.896 L 101.607 24.358 L 96.197 24.358 L 96.197 4.298 L 101.409 4.298 L 101.409 12.174 L 101.564 12.174 C 101.904 11.213 102.47 10.465 103.26 9.931 C 104.051 9.387 105 9.118 106.11 9.118 C 107.175 9.118 108.098 9.358 108.882 9.841 C 109.672 10.326 110.282 10.993 110.714 11.84 C 111.151 12.69 111.367 13.663 111.36 14.759 L 111.36 24.358 L 105.954 24.358 L 105.954 15.896 C 105.959 15.151 105.774 14.567 105.395 14.142 C 105.022 13.718 104.491 13.506 103.798 13.506 C 103.394 13.497 102.995 13.598 102.643 13.798 C 102.317 13.988 102.062 14.263 101.878 14.624 C 101.692 15.021 101.598 15.456 101.603 15.896 Z M 113.953 24.358 L 113.953 4.298 L 119.359 4.298 L 119.359 11.938 L 119.438 11.938 C 119.637 11.423 119.929 10.948 120.299 10.537 C 120.677 10.108 121.148 9.764 121.709 9.51 C 122.325 9.237 122.994 9.103 123.668 9.118 C 124.667 9.119 125.646 9.393 126.5 9.91 C 127.4 10.439 128.133 11.271 128.693 12.408 C 129.26 13.544 129.546 15.021 129.546 16.836 C 129.546 18.572 129.274 20.013 128.733 21.156 C 128.198 22.297 127.478 23.15 126.579 23.712 C 125.696 24.269 124.672 24.562 123.629 24.554 C 122.924 24.554 122.295 24.439 121.738 24.21 C 121.21 23.99 120.731 23.667 120.328 23.262 C 119.948 22.864 119.646 22.399 119.438 21.89 L 119.319 21.89 L 119.319 24.358 L 113.954 24.358 Z M 119.242 16.836 C 119.242 17.566 119.336 18.201 119.526 18.735 C 119.722 19.265 119.995 19.676 120.349 19.97 C 120.708 20.257 121.135 20.399 121.631 20.399 C 122.128 20.399 122.549 20.262 122.895 19.98 C 123.247 19.693 123.515 19.284 123.698 18.756 C 123.887 18.22 123.983 17.58 123.983 16.836 C 123.983 16.092 123.888 15.454 123.698 14.926 C 123.515 14.39 123.247 13.981 122.895 13.7 C 122.539 13.41 122.09 13.258 121.631 13.271 C 121.135 13.271 120.708 13.413 120.349 13.7 C 119.995 13.982 119.722 14.39 119.526 14.926 C 119.336 15.454 119.242 16.092 119.242 16.834 Z M 136 24.594 C 135.041 24.594 134.192 24.437 133.455 24.123 C 132.748 23.824 132.147 23.319 131.73 22.674 C 131.313 22.027 131.103 21.204 131.103 20.205 C 131.103 19.382 131.244 18.68 131.524 18.099 C 131.804 17.511 132.196 17.032 132.7 16.659 C 133.23 16.274 133.823 15.986 134.453 15.808 C 135.163 15.605 135.892 15.476 136.628 15.425 C 137.47 15.359 138.146 15.282 138.656 15.191 C 139.172 15.093 139.543 14.959 139.772 14.789 C 139.994 14.627 140.122 14.367 140.116 14.092 L 140.116 14.055 C 140.133 13.695 139.961 13.354 139.664 13.152 C 139.363 12.944 138.978 12.839 138.508 12.839 C 137.993 12.839 137.572 12.954 137.245 13.183 C 136.925 13.405 136.731 13.747 136.666 14.211 L 131.691 14.211 C 131.753 13.306 132.054 12.434 132.562 11.684 C 133.085 10.907 133.845 10.287 134.845 9.822 C 135.842 9.353 137.09 9.118 138.586 9.118 C 139.664 9.118 140.631 9.245 141.486 9.499 C 142.342 9.747 143.069 10.097 143.669 10.548 C 144.271 10.991 144.728 11.514 145.041 12.114 C 145.36 12.709 145.522 13.355 145.522 14.055 L 145.522 24.358 L 140.468 24.358 L 140.468 22.244 L 140.348 22.244 C 140.049 22.804 139.683 23.258 139.253 23.604 C 138.828 23.949 138.342 24.202 137.792 24.358 C 137.209 24.521 136.606 24.6 136 24.594 Z M 137.764 21.185 C 138.175 21.185 138.56 21.099 138.919 20.931 C 139.285 20.759 139.583 20.515 139.811 20.195 C 140.04 19.875 140.154 19.487 140.154 19.029 L 140.154 17.774 C 139.839 17.903 139.514 18.007 139.184 18.087 C 138.792 18.184 138.397 18.262 137.998 18.323 C 137.639 18.371 137.291 18.481 136.97 18.648 C 136.73 18.772 136.527 18.957 136.382 19.186 C 136.257 19.399 136.193 19.643 136.196 19.891 C 136.196 20.31 136.343 20.63 136.636 20.851 C 136.93 21.075 137.307 21.185 137.764 21.185 Z M 155.353 24.632 C 153.72 24.632 152.322 24.308 151.16 23.662 C 150.023 23.034 149.094 22.088 148.487 20.939 C 147.867 19.77 147.556 18.416 147.556 16.875 C 147.556 15.333 147.865 13.982 148.486 12.819 C 149.106 11.65 149.998 10.744 151.16 10.097 C 152.322 9.444 153.722 9.118 155.353 9.118 C 156.828 9.118 158.105 9.386 159.183 9.92 C 160.223 10.41 161.097 11.193 161.7 12.172 C 162.294 13.14 162.593 14.276 162.6 15.581 L 157.586 15.581 C 157.514 14.79 157.285 14.19 156.9 13.78 C 156.527 13.363 155.989 13.134 155.43 13.152 C 154.961 13.152 154.55 13.29 154.196 13.565 C 153.844 13.831 153.57 14.24 153.374 14.789 C 153.178 15.33 153.08 16.012 153.08 16.834 C 153.08 17.659 153.178 18.343 153.373 18.892 C 153.57 19.435 153.844 19.842 154.198 20.117 C 154.55 20.384 154.961 20.518 155.43 20.518 C 155.829 20.518 156.182 20.427 156.489 20.243 C 156.795 20.054 157.044 19.781 157.234 19.421 C 157.43 19.055 157.546 18.613 157.586 18.089 L 162.6 18.089 C 162.581 19.414 162.277 20.571 161.689 21.556 C 161.096 22.541 160.228 23.331 159.191 23.829 C 158.121 24.365 156.842 24.632 155.353 24.632 Z M 169.689 20.793 L 169.729 14.367 L 170.434 14.367 L 174.078 9.314 L 180.151 9.314 L 174.038 17.188 L 172.51 17.188 Z M 164.832 24.358 L 164.832 4.298 L 170.238 4.298 L 170.238 24.358 Z M 174.118 24.358 L 170.669 18.402 L 174.195 14.563 L 180.308 24.358 Z M 191.246 24.594 C 190.287 24.594 189.437 24.437 188.698 24.123 C 187.992 23.823 187.392 23.318 186.976 22.674 C 186.556 22.027 186.348 21.204 186.348 20.205 C 186.348 19.382 186.489 18.68 186.769 18.099 C 187.05 17.511 187.442 17.032 187.945 16.659 C 188.475 16.274 189.068 15.985 189.699 15.808 C 190.408 15.605 191.137 15.476 191.873 15.425 C 192.715 15.359 193.391 15.282 193.9 15.191 C 194.416 15.093 194.789 14.959 195.017 14.789 C 195.239 14.627 195.366 14.367 195.359 14.092 L 195.359 14.055 C 195.377 13.696 195.206 13.354 194.909 13.152 C 194.608 12.944 194.223 12.839 193.754 12.839 C 193.238 12.839 192.815 12.954 192.49 13.183 C 192.169 13.405 191.976 13.747 191.911 14.211 L 186.936 14.211 C 186.998 13.306 187.299 12.435 187.808 11.684 C 188.33 10.907 189.09 10.286 190.091 9.822 C 191.089 9.353 192.336 9.118 193.831 9.118 C 194.811 9.104 195.788 9.233 196.731 9.499 C 197.516 9.714 198.256 10.069 198.914 10.548 C 199.516 10.991 199.973 11.514 200.286 12.114 C 200.606 12.709 200.766 13.355 200.766 14.055 L 200.766 24.358 L 195.712 24.358 L 195.712 22.244 L 195.595 22.244 C 195.325 22.766 194.951 23.229 194.498 23.604 C 194.068 23.952 193.572 24.209 193.039 24.358 C 192.455 24.521 191.851 24.6 191.246 24.594 Z M 193.009 21.185 C 193.42 21.185 193.805 21.099 194.165 20.931 C 194.531 20.759 194.826 20.515 195.055 20.195 C 195.284 19.875 195.399 19.487 195.399 19.029 L 195.399 17.774 C 195.084 17.902 194.76 18.007 194.429 18.087 C 194.038 18.184 193.642 18.263 193.243 18.323 C 192.884 18.371 192.537 18.481 192.215 18.648 C 191.975 18.772 191.772 18.957 191.627 19.186 C 191.502 19.399 191.438 19.643 191.442 19.891 C 191.442 20.31 191.588 20.63 191.882 20.851 C 192.176 21.075 192.552 21.185 193.009 21.185 Z M 203.349 30 L 203.349 9.314 L 208.718 9.314 L 208.718 11.938 L 208.835 11.938 C 209.03 11.43 209.318 10.962 209.696 10.537 C 210.087 10.098 210.569 9.748 211.107 9.51 C 211.724 9.237 212.393 9.103 213.067 9.118 C 214.064 9.119 215.043 9.393 215.896 9.91 C 216.797 10.439 217.529 11.271 218.091 12.408 C 218.659 13.544 218.942 15.021 218.942 16.836 C 218.942 18.572 218.672 20.013 218.129 21.156 C 217.595 22.297 216.876 23.15 215.975 23.712 C 215.094 24.27 214.07 24.562 213.027 24.554 C 212.322 24.554 211.692 24.439 211.136 24.21 C 210.609 23.99 210.129 23.668 209.727 23.262 C 209.346 22.864 209.043 22.399 208.835 21.89 L 208.755 21.89 L 208.755 30 Z M 208.639 16.836 C 208.639 17.566 208.733 18.201 208.922 18.735 C 209.118 19.265 209.393 19.676 209.746 19.97 C 210.105 20.257 210.533 20.399 211.028 20.399 C 211.525 20.399 211.946 20.262 212.291 19.98 C 212.646 19.693 212.912 19.284 213.096 18.756 C 213.285 18.22 213.38 17.58 213.38 16.836 C 213.38 16.092 213.285 15.454 213.096 14.926 C 212.912 14.39 212.646 13.981 212.291 13.7 C 211.936 13.41 211.487 13.257 211.028 13.271 C 210.533 13.271 210.105 13.413 209.746 13.7 C 209.393 13.982 209.118 14.39 208.922 14.926 C 208.733 15.454 208.639 16.092 208.639 16.834 Z M 221.208 30 L 221.208 9.314 L 226.575 9.314 L 226.575 11.938 L 226.693 11.938 C 226.889 11.43 227.176 10.962 227.554 10.537 C 227.946 10.098 228.427 9.748 228.966 9.51 C 229.582 9.237 230.25 9.103 230.924 9.118 C 231.922 9.119 232.901 9.393 233.755 9.91 C 234.656 10.439 235.388 11.271 235.948 12.408 C 236.517 13.544 236.801 15.021 236.801 16.836 C 236.801 18.572 236.529 20.013 235.988 21.156 C 235.453 22.297 234.735 23.15 233.834 23.712 C 232.952 24.27 231.929 24.562 230.886 24.554 C 230.179 24.554 229.55 24.439 228.995 24.21 C 228.467 23.99 227.987 23.667 227.584 23.262 C 227.203 22.864 226.901 22.399 226.693 21.89 L 226.614 21.89 L 226.614 30 Z M 226.497 16.836 C 226.497 17.566 226.592 18.201 226.781 18.735 C 226.977 19.265 227.252 19.676 227.604 19.97 C 227.964 20.257 228.39 20.399 228.887 20.399 C 229.383 20.399 229.805 20.262 230.15 19.98 C 230.503 19.693 230.771 19.284 230.953 18.756 C 231.144 18.22 231.238 17.58 231.238 16.836 C 231.238 16.092 231.144 15.454 230.953 14.926 C 230.771 14.39 230.503 13.981 230.15 13.7 C 229.794 13.41 229.346 13.257 228.887 13.271 C 228.39 13.271 227.964 13.413 227.604 13.7 C 227.252 13.982 226.977 14.39 226.781 14.926 C 226.592 15.454 226.497 16.092 226.497 16.834 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                            },
                          },
                          v,
                          C
                        ),
                        children: [
                          l(H, {
                            className: `framer-16rn09h`,
                            layoutDependency: D,
                            layoutId: `FVKJVYA0a`,
                            opacity: 1,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.697 12.89" overflow="visible"><path d="M 17.697 12.875 L 17.697 12.89 M 1.885 8.654 C -0.073 7.149 -0.579 4.408 0.713 2.303 C 2.006 0.197 4.679 -0.593 6.908 0.472 C 9.137 1.537 10.202 4.112 9.377 6.44" fill="transparent" stroke-width="1.872" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                            withExternalLayout: !0,
                            children: [
                              o(H, {
                                className: `framer-1kd6hm6`,
                                layoutDependency: D,
                                layoutId: `AHcdn7MbL`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0 0 L 0 0.015" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-1vlolwc`,
                                layoutDependency: D,
                                layoutId: `Pf2u7WX6v`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.655 8.654" overflow="visible"><path d="M 1.885 8.654 C -0.073 7.149 -0.579 4.408 0.713 2.303 C 2.006 0.197 4.679 -0.593 6.908 0.472 C 9.137 1.537 10.202 4.112 9.377 6.44" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(H, {
                            className: `framer-fy9ip4`,
                            layoutDependency: D,
                            layoutId: `n_wsAd65C`,
                            opacity: 1,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.965 27.351" overflow="visible"><path d="M 20.922 0 L 20.922 6.12 C 22.913 7.272 24.429 9.095 25.199 11.263 L 27.356 11.263 C 28.245 11.263 28.965 11.983 28.965 12.872 L 28.965 16.09 C 28.965 16.978 28.245 17.699 27.356 17.699 L 25.197 17.699 C 24.655 19.227 23.738 20.595 22.529 21.677 L 22.529 24.938 C 22.529 26.27 21.449 27.351 20.116 27.351 C 18.783 27.351 17.702 26.27 17.702 24.938 L 17.702 24.001 C 17.169 24.09 16.633 24.135 16.093 24.133 L 9.657 24.133 C 9.119 24.133 8.579 24.09 8.048 24.001 L 8.048 24.938 C 8.048 26.27 6.968 27.351 5.635 27.351 C 4.302 27.351 3.221 26.27 3.221 24.938 L 3.221 21.677 C 0.236 19.009 -0.793 14.775 0.636 11.035 C 2.064 7.295 5.654 4.825 9.657 4.827 L 13.68 4.827 Z" fill="transparent" stroke-width="1.872" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                            withExternalLayout: !0,
                          }),
                          l(H, {
                            className: `framer-1e5xv26`,
                            layoutDependency: D,
                            layoutId: `R6qwRubyN`,
                            opacity: 1,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 190.388 25.702" overflow="visible"><path d="M 7.796 20.334 C 6.163 20.334 4.767 20.011 3.605 19.365 C 2.467 18.737 1.537 17.791 0.93 16.642 C 0.311 15.473 0 14.118 0 12.578 C 0 11.036 0.309 9.685 0.928 8.521 C 1.533 7.37 2.463 6.424 3.603 5.8 C 4.767 5.147 6.164 4.82 7.797 4.82 C 9.272 4.82 10.548 5.088 11.626 5.623 C 12.666 6.113 13.541 6.896 14.144 7.875 C 14.737 8.843 15.038 9.979 15.045 11.284 L 10.029 11.284 C 9.958 10.493 9.73 9.893 9.344 9.482 C 8.971 9.066 8.433 8.836 7.875 8.855 C 7.404 8.855 6.993 8.992 6.64 9.267 C 6.288 9.534 6.013 9.943 5.817 10.491 C 5.621 11.033 5.525 11.715 5.525 12.537 C 5.525 13.362 5.621 14.046 5.817 14.594 C 6.013 15.138 6.288 15.545 6.64 15.82 C 6.993 16.086 7.404 16.22 7.875 16.22 C 8.274 16.22 8.626 16.129 8.932 15.945 C 9.25 15.745 9.508 15.46 9.676 15.124 C 9.872 14.758 9.989 14.316 10.029 13.792 L 15.045 13.792 C 15.024 15.117 14.722 16.274 14.134 17.259 C 13.54 18.244 12.672 19.033 11.636 19.531 C 10.565 20.068 9.284 20.334 7.796 20.334 Z M 21.467 20.296 C 20.508 20.296 19.658 20.14 18.921 19.825 C 18.214 19.526 17.613 19.021 17.197 18.376 C 16.779 17.73 16.569 16.906 16.569 15.908 C 16.569 15.084 16.71 14.383 16.991 13.802 C 17.273 13.214 17.663 12.734 18.166 12.361 C 18.696 11.976 19.29 11.688 19.92 11.51 C 20.629 11.307 21.358 11.179 22.094 11.127 C 22.937 11.062 23.612 10.984 24.123 10.893 C 24.638 10.795 25.01 10.661 25.238 10.491 C 25.46 10.329 25.589 10.069 25.582 9.795 L 25.582 9.757 C 25.599 9.398 25.428 9.056 25.13 8.855 C 24.829 8.647 24.444 8.542 23.975 8.542 C 23.459 8.542 23.038 8.657 22.711 8.886 C 22.392 9.107 22.199 9.449 22.134 9.913 L 17.157 9.913 C 17.219 9.009 17.52 8.137 18.029 7.387 C 18.551 6.61 19.313 5.989 20.312 5.525 C 21.31 5.056 22.557 4.82 24.052 4.82 C 25.13 4.82 26.098 4.947 26.952 5.202 C 27.808 5.449 28.535 5.8 29.135 6.25 C 29.737 6.694 30.194 7.216 30.507 7.816 C 30.827 8.411 30.988 9.057 30.988 9.757 L 30.988 20.061 L 25.935 20.061 L 25.935 17.946 L 25.816 17.946 C 25.515 18.507 25.151 18.961 24.719 19.306 C 24.295 19.652 23.808 19.904 23.258 20.061 C 22.675 20.223 22.072 20.302 21.467 20.296 Z M 23.231 16.887 C 23.643 16.887 24.026 16.802 24.386 16.633 C 24.752 16.461 25.049 16.217 25.278 15.897 C 25.507 15.578 25.622 15.189 25.622 14.732 L 25.622 13.477 C 25.307 13.605 24.983 13.71 24.652 13.79 C 24.261 13.886 23.865 13.965 23.466 14.025 C 23.107 14.073 22.758 14.183 22.436 14.35 C 22.196 14.474 21.993 14.66 21.849 14.888 C 21.723 15.102 21.659 15.346 21.663 15.593 C 21.663 16.012 21.811 16.332 22.105 16.554 C 22.397 16.777 22.773 16.887 23.231 16.887 Z M 47.322 9.913 L 42.348 9.913 C 42.328 9.621 42.214 9.343 42.024 9.119 C 41.826 8.891 41.573 8.716 41.289 8.61 C 40.978 8.483 40.645 8.42 40.309 8.425 C 39.845 8.425 39.449 8.511 39.114 8.679 C 38.782 8.849 38.619 9.092 38.624 9.403 C 38.624 9.641 38.728 9.867 38.91 10.022 C 39.111 10.211 39.499 10.357 40.075 10.462 L 43.131 11.01 C 44.672 11.29 45.818 11.765 46.569 12.43 C 47.326 13.09 47.707 13.975 47.714 15.084 C 47.707 16.155 47.388 17.087 46.755 17.876 C 46.128 18.66 45.27 19.268 44.178 19.698 C 43.095 20.123 41.858 20.334 40.465 20.334 C 38.169 20.334 36.369 19.865 35.069 18.924 C 33.777 17.984 33.055 16.743 32.903 15.203 L 38.272 15.203 C 38.33 15.658 38.589 16.064 38.977 16.31 C 39.382 16.564 39.891 16.691 40.507 16.691 C 41.002 16.691 41.411 16.606 41.73 16.437 C 42.057 16.265 42.224 16.025 42.229 15.712 C 42.224 15.425 42.079 15.196 41.799 15.026 C 41.524 14.856 41.094 14.72 40.507 14.613 L 37.842 14.144 C 36.307 13.877 35.157 13.367 34.394 12.616 C 33.631 11.866 33.251 10.898 33.258 9.718 C 33.251 8.672 33.526 7.787 34.081 7.063 C 34.641 6.331 35.442 5.776 36.481 5.398 C 37.524 5.013 38.762 4.82 40.194 4.82 C 42.366 4.82 44.08 5.27 45.333 6.171 C 46.595 7.072 47.259 8.32 47.322 9.913 Z M 55.194 11.598 L 55.194 20.061 L 49.784 20.061 L 49.784 0 L 54.996 0 L 54.996 7.876 L 55.151 7.876 C 55.491 6.916 56.057 6.168 56.847 5.633 C 57.638 5.09 58.587 4.82 59.697 4.82 C 60.762 4.82 61.685 5.061 62.468 5.544 C 63.259 6.029 63.869 6.696 64.301 7.543 C 64.738 8.392 64.954 9.365 64.947 10.462 L 64.947 20.061 L 59.541 20.061 L 59.541 11.598 C 59.546 10.854 59.361 10.269 58.982 9.845 C 58.609 9.42 58.078 9.209 57.385 9.209 C 56.981 9.2 56.582 9.301 56.23 9.501 C 55.904 9.69 55.649 9.965 55.465 10.326 C 55.279 10.724 55.185 11.159 55.19 11.598 Z M 67.54 20.061 L 67.54 0 L 72.946 0 L 72.946 7.641 L 73.025 7.641 C 73.224 7.125 73.516 6.651 73.886 6.24 C 74.264 5.81 74.735 5.466 75.296 5.212 C 75.912 4.939 76.581 4.806 77.255 4.82 C 78.254 4.822 79.233 5.096 80.087 5.613 C 80.987 6.142 81.72 6.974 82.28 8.11 C 82.847 9.247 83.133 10.723 83.133 12.538 C 83.133 14.275 82.861 15.715 82.32 16.858 C 81.785 18 81.065 18.852 80.166 19.414 C 79.283 19.972 78.259 20.264 77.216 20.257 C 76.511 20.257 75.882 20.142 75.325 19.913 C 74.797 19.692 74.318 19.37 73.915 18.964 C 73.535 18.567 73.233 18.101 73.025 17.592 L 72.906 17.592 L 72.906 20.061 L 67.541 20.061 Z M 72.829 12.538 C 72.829 13.269 72.923 13.903 73.113 14.438 C 73.309 14.967 73.582 15.378 73.936 15.672 C 74.295 15.959 74.722 16.102 75.218 16.102 C 75.715 16.102 76.136 15.964 76.482 15.682 C 76.834 15.395 77.102 14.986 77.285 14.459 C 77.474 13.922 77.57 13.283 77.57 12.538 C 77.57 11.794 77.475 11.156 77.285 10.629 C 77.102 10.092 76.834 9.683 76.482 9.403 C 76.126 9.113 75.677 8.96 75.218 8.973 C 74.722 8.973 74.295 9.116 73.936 9.403 C 73.582 9.685 73.309 10.092 73.113 10.629 C 72.923 11.156 72.829 11.794 72.829 12.537 Z M 89.587 20.296 C 88.628 20.296 87.779 20.14 87.042 19.825 C 86.335 19.526 85.734 19.021 85.317 18.376 C 84.9 17.73 84.69 16.906 84.69 15.908 C 84.69 15.084 84.831 14.383 85.111 13.802 C 85.391 13.214 85.783 12.734 86.287 12.361 C 86.817 11.976 87.41 11.688 88.04 11.51 C 88.75 11.307 89.479 11.179 90.215 11.127 C 91.057 11.062 91.733 10.984 92.243 10.893 C 92.759 10.795 93.13 10.661 93.359 10.491 C 93.581 10.33 93.709 10.069 93.703 9.795 L 93.703 9.757 C 93.72 9.398 93.548 9.056 93.251 8.855 C 92.95 8.647 92.565 8.542 92.095 8.542 C 91.58 8.542 91.159 8.657 90.832 8.886 C 90.512 9.107 90.318 9.449 90.253 9.913 L 85.278 9.913 C 85.34 9.009 85.641 8.137 86.149 7.387 C 86.672 6.61 87.432 5.989 88.432 5.525 C 89.429 5.056 90.677 4.82 92.173 4.82 C 93.251 4.82 94.218 4.947 95.073 5.202 C 95.929 5.449 96.656 5.8 97.256 6.25 C 97.858 6.694 98.315 7.216 98.628 7.816 C 98.947 8.411 99.109 9.057 99.109 9.757 L 99.109 20.061 L 94.055 20.061 L 94.055 17.946 L 93.935 17.946 C 93.636 18.507 93.27 18.961 92.84 19.306 C 92.415 19.652 91.929 19.904 91.379 20.061 C 90.796 20.223 90.193 20.302 89.587 20.296 Z M 91.351 16.887 C 91.762 16.887 92.147 16.802 92.506 16.633 C 92.872 16.461 93.17 16.217 93.398 15.897 C 93.627 15.578 93.741 15.189 93.741 14.732 L 93.741 13.477 C 93.426 13.605 93.101 13.71 92.771 13.79 C 92.379 13.886 91.984 13.965 91.585 14.025 C 91.226 14.073 90.878 14.183 90.557 14.35 C 90.317 14.474 90.114 14.66 89.969 14.888 C 89.844 15.102 89.78 15.346 89.783 15.593 C 89.783 16.012 89.93 16.332 90.223 16.554 C 90.517 16.777 90.894 16.887 91.351 16.887 Z M 108.94 20.334 C 107.307 20.334 105.909 20.011 104.747 19.365 C 103.61 18.737 102.681 17.79 102.074 16.642 C 101.454 15.473 101.143 14.118 101.143 12.578 C 101.143 11.036 101.452 9.685 102.073 8.521 C 102.693 7.352 103.585 6.446 104.747 5.8 C 105.909 5.147 107.309 4.82 108.94 4.82 C 110.415 4.82 111.692 5.088 112.77 5.623 C 113.81 6.113 114.684 6.895 115.287 7.875 C 115.881 8.843 116.18 9.979 116.187 11.284 L 111.173 11.284 C 111.101 10.493 110.872 9.893 110.487 9.482 C 110.114 9.066 109.576 8.836 109.017 8.855 C 108.548 8.855 108.137 8.992 107.783 9.267 C 107.431 9.534 107.157 9.943 106.961 10.491 C 106.765 11.033 106.667 11.715 106.667 12.537 C 106.667 13.362 106.765 14.046 106.96 14.594 C 107.157 15.138 107.431 15.545 107.785 15.82 C 108.137 16.086 108.548 16.22 109.017 16.22 C 109.416 16.22 109.769 16.129 110.076 15.945 C 110.382 15.756 110.631 15.483 110.821 15.124 C 111.017 14.758 111.133 14.316 111.173 13.792 L 116.187 13.792 C 116.168 15.117 115.864 16.274 115.276 17.259 C 114.683 18.244 113.815 19.033 112.778 19.531 C 111.708 20.068 110.429 20.334 108.94 20.334 Z M 123.276 16.496 L 123.316 10.07 L 124.021 10.07 L 127.665 5.016 L 133.738 5.016 L 127.625 12.891 L 126.097 12.891 Z M 118.419 20.061 L 118.419 0 L 123.825 0 L 123.825 20.061 Z M 127.705 20.061 L 124.256 14.104 L 127.782 10.266 L 133.895 20.061 Z M 144.833 20.296 C 143.873 20.296 143.024 20.14 142.285 19.825 C 141.579 19.526 140.979 19.021 140.563 18.376 C 140.143 17.73 139.935 16.906 139.935 15.908 C 139.935 15.084 140.076 14.383 140.356 13.802 C 140.637 13.214 141.029 12.734 141.532 12.361 C 142.062 11.976 142.655 11.688 143.286 11.51 C 143.995 11.307 144.724 11.179 145.46 11.127 C 146.302 11.062 146.978 10.984 147.487 10.893 C 148.003 10.795 148.376 10.661 148.604 10.491 C 148.826 10.329 148.953 10.069 148.946 9.795 L 148.946 9.757 C 148.964 9.398 148.793 9.056 148.496 8.855 C 148.195 8.647 147.81 8.542 147.341 8.542 C 146.825 8.542 146.402 8.657 146.077 8.886 C 145.756 9.107 145.563 9.449 145.498 9.913 L 140.523 9.913 C 140.585 9.009 140.886 8.137 141.395 7.387 C 141.917 6.61 142.677 5.989 143.678 5.525 C 144.676 5.056 145.923 4.82 147.418 4.82 C 148.398 4.807 149.375 4.935 150.318 5.202 C 151.103 5.416 151.843 5.771 152.501 6.25 C 153.103 6.694 153.56 7.216 153.873 7.816 C 154.193 8.411 154.353 9.057 154.353 9.757 L 154.353 20.061 L 149.299 20.061 L 149.299 17.946 L 149.182 17.946 C 148.912 18.469 148.538 18.931 148.085 19.306 C 147.655 19.655 147.159 19.912 146.626 20.061 C 146.042 20.223 145.438 20.302 144.833 20.296 Z M 146.596 16.887 C 147.007 16.887 147.392 16.802 147.752 16.633 C 148.118 16.461 148.413 16.217 148.642 15.897 C 148.871 15.578 148.986 15.189 148.986 14.732 L 148.986 13.477 C 148.671 13.605 148.347 13.709 148.016 13.79 C 147.625 13.887 147.229 13.965 146.83 14.025 C 146.471 14.073 146.124 14.183 145.802 14.35 C 145.562 14.474 145.359 14.66 145.214 14.888 C 145.089 15.102 145.025 15.346 145.029 15.593 C 145.029 16.012 145.175 16.332 145.469 16.554 C 145.763 16.777 146.139 16.887 146.596 16.887 Z M 156.936 25.702 L 156.936 5.016 L 162.305 5.016 L 162.305 7.641 L 162.422 7.641 C 162.617 7.132 162.905 6.665 163.283 6.24 C 163.674 5.801 164.156 5.45 164.694 5.212 C 165.311 4.939 165.98 4.806 166.654 4.82 C 167.651 4.822 168.63 5.096 169.483 5.613 C 170.384 6.142 171.116 6.974 171.678 8.11 C 172.246 9.247 172.529 10.723 172.529 12.538 C 172.529 14.275 172.259 15.715 171.716 16.858 C 171.182 18 170.463 18.852 169.562 19.414 C 168.681 19.972 167.657 20.264 166.614 20.257 C 165.909 20.257 165.278 20.142 164.723 19.913 C 164.196 19.692 163.716 19.37 163.314 18.964 C 162.933 18.567 162.63 18.101 162.422 17.592 L 162.342 17.592 L 162.342 25.702 Z M 162.226 12.538 C 162.226 13.269 162.32 13.903 162.509 14.438 C 162.705 14.967 162.98 15.378 163.333 15.672 C 163.692 15.959 164.12 16.102 164.615 16.102 C 165.112 16.102 165.533 15.964 165.878 15.682 C 166.233 15.395 166.499 14.986 166.683 14.459 C 166.872 13.922 166.967 13.283 166.967 12.538 C 166.967 11.794 166.872 11.156 166.683 10.629 C 166.499 10.092 166.233 9.683 165.878 9.403 C 165.523 9.113 165.074 8.96 164.615 8.973 C 164.12 8.973 163.692 9.116 163.333 9.403 C 162.98 9.685 162.705 10.092 162.509 10.629 C 162.32 11.156 162.226 11.794 162.226 12.537 Z M 174.795 25.702 L 174.795 5.016 L 180.162 5.016 L 180.162 7.641 L 180.28 7.641 C 180.476 7.132 180.763 6.665 181.141 6.24 C 181.533 5.801 182.014 5.45 182.553 5.212 C 183.169 4.939 183.837 4.805 184.511 4.82 C 185.509 4.822 186.488 5.096 187.342 5.613 C 188.243 6.142 188.975 6.974 189.535 8.11 C 190.104 9.247 190.388 10.723 190.388 12.538 C 190.388 14.275 190.116 15.715 189.575 16.858 C 189.04 18 188.322 18.852 187.421 19.414 C 186.539 19.972 185.516 20.264 184.473 20.257 C 183.766 20.257 183.137 20.142 182.582 19.913 C 182.054 19.692 181.574 19.37 181.171 18.964 C 180.79 18.567 180.488 18.101 180.28 17.592 L 180.201 17.592 L 180.201 25.702 Z M 180.084 12.538 C 180.084 13.269 180.179 13.903 180.368 14.438 C 180.564 14.967 180.839 15.378 181.191 15.672 C 181.551 15.959 181.977 16.102 182.474 16.102 C 182.97 16.102 183.392 15.964 183.737 15.682 C 184.09 15.395 184.358 14.986 184.54 14.459 C 184.731 13.922 184.825 13.283 184.825 12.538 C 184.825 11.794 184.731 11.156 184.54 10.629 C 184.358 10.092 184.09 9.683 183.737 9.403 C 183.381 9.113 182.933 8.96 182.474 8.973 C 181.977 8.973 181.551 9.116 181.191 9.403 C 180.839 9.685 180.564 10.092 180.368 10.629 C 180.179 11.156 180.084 11.794 180.084 12.537 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                            withExternalLayout: !0,
                            children: [
                              o(H, {
                                className: `framer-128h0ih`,
                                layoutDependency: D,
                                layoutId: `Qy_c4oqtY`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.045 15.514" overflow="visible"><path d="M 7.796 15.514 C 6.163 15.514 4.767 15.191 3.605 14.544 C 2.467 13.917 1.537 12.97 0.93 11.822 C 0.311 10.653 0 9.298 0 7.758 C 0 6.216 0.309 4.865 0.928 3.701 C 1.533 2.55 2.463 1.604 3.603 0.98 C 4.767 0.327 6.164 0 7.797 0 C 9.272 0 10.548 0.268 11.626 0.803 C 12.666 1.293 13.541 2.076 14.144 3.055 C 14.737 4.022 15.038 5.159 15.045 6.463 L 10.029 6.463 C 9.958 5.673 9.73 5.073 9.344 4.662 C 8.971 4.246 8.433 4.016 7.875 4.034 C 7.404 4.034 6.993 4.172 6.64 4.447 C 6.288 4.713 6.013 5.123 5.817 5.671 C 5.621 6.212 5.525 6.895 5.525 7.717 C 5.525 8.542 5.621 9.226 5.817 9.774 C 6.013 10.317 6.288 10.725 6.64 11 C 6.993 11.266 7.404 11.4 7.875 11.4 C 8.274 11.4 8.626 11.309 8.932 11.125 C 9.25 10.925 9.508 10.64 9.676 10.304 C 9.872 9.938 9.989 9.496 10.029 8.971 L 15.045 8.971 C 15.024 10.297 14.722 11.454 14.134 12.439 C 13.54 13.423 12.672 14.213 11.636 14.711 C 10.565 15.248 9.284 15.514 7.796 15.514 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-1dh2mg6`,
                                layoutDependency: D,
                                layoutId: `EyQ9761Dl`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.419 15.476" overflow="visible"><path d="M 4.897 15.476 C 3.938 15.476 3.089 15.32 2.352 15.005 C 1.645 14.706 1.044 14.201 0.627 13.556 C 0.21 12.91 0 12.086 0 11.088 C 0 10.264 0.141 9.563 0.421 8.982 C 0.703 8.394 1.093 7.914 1.597 7.541 C 2.127 7.156 2.72 6.868 3.35 6.69 C 4.06 6.487 4.789 6.359 5.525 6.307 C 6.367 6.242 7.043 6.164 7.553 6.073 C 8.069 5.975 8.44 5.841 8.669 5.671 C 8.891 5.509 9.019 5.249 9.013 4.975 L 9.013 4.937 C 9.03 4.578 8.858 4.236 8.561 4.034 C 8.26 3.826 7.875 3.722 7.405 3.722 C 6.89 3.722 6.469 3.837 6.142 4.065 C 5.822 4.287 5.63 4.629 5.564 5.093 L 0.588 5.093 C 0.65 4.189 0.951 3.317 1.459 2.566 C 1.982 1.789 2.744 1.169 3.742 0.705 C 4.741 0.236 5.987 0 7.483 0 C 8.561 0 9.528 0.127 10.383 0.382 C 11.239 0.629 11.966 0.98 12.566 1.43 C 13.168 1.874 13.625 2.396 13.938 2.996 C 14.257 3.591 14.419 4.237 14.419 4.937 L 14.419 15.241 L 9.365 15.241 L 9.365 13.126 L 9.247 13.126 C 8.946 13.687 8.581 14.14 8.15 14.486 C 7.725 14.832 7.239 15.084 6.689 15.241 C 6.106 15.403 5.503 15.482 4.897 15.476 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-nrvt8z`,
                                layoutDependency: D,
                                layoutId: `gnI9C9dBa`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.959 3.41" overflow="visible"><path d="M 1.568 3.41 C 1.98 3.41 2.364 3.325 2.723 3.156 C 3.089 2.984 3.387 2.74 3.615 2.42 C 3.844 2.101 3.959 1.712 3.959 1.255 L 3.959 0 C 3.644 0.128 3.32 0.233 2.989 0.313 C 2.598 0.409 2.202 0.488 1.803 0.548 C 1.444 0.596 1.096 0.706 0.774 0.873 C 0.533 0.997 0.331 1.183 0.186 1.411 C 0.061 1.625 -0.003 1.869 0 2.116 C 0 2.536 0.148 2.855 0.442 3.077 C 0.734 3.3 1.111 3.41 1.568 3.41 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-hkyh77`,
                                layoutDependency: D,
                                layoutId: `ZVHptyHXm`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.811 15.514" overflow="visible"><path d="M 14.419 5.093 L 9.444 5.093 C 9.424 4.801 9.311 4.522 9.121 4.299 C 8.922 4.071 8.669 3.896 8.385 3.79 C 8.075 3.663 7.741 3.6 7.405 3.605 C 6.941 3.605 6.546 3.691 6.211 3.859 C 5.879 4.029 5.716 4.272 5.721 4.583 C 5.721 4.821 5.825 5.047 6.006 5.202 C 6.207 5.391 6.596 5.537 7.172 5.642 L 10.228 6.19 C 11.768 6.47 12.915 6.945 13.666 7.61 C 14.422 8.27 14.804 9.155 14.811 10.264 C 14.804 11.335 14.484 12.267 13.852 13.056 C 13.224 13.84 12.366 14.448 11.275 14.878 C 10.192 15.303 8.954 15.514 7.562 15.514 C 5.265 15.514 3.466 15.045 2.166 14.104 C 0.873 13.164 0.151 11.923 0 10.383 L 5.368 10.383 C 5.427 10.838 5.685 11.244 6.073 11.49 C 6.479 11.744 6.988 11.871 7.603 11.871 C 8.098 11.871 8.507 11.785 8.827 11.617 C 9.154 11.445 9.32 11.204 9.326 10.892 C 9.32 10.605 9.176 10.376 8.896 10.206 C 8.621 10.036 8.191 9.9 7.603 9.793 L 4.939 9.324 C 3.404 9.057 2.254 8.547 1.49 7.796 C 0.727 7.046 0.347 6.078 0.354 4.897 C 0.347 3.852 0.622 2.967 1.178 2.243 C 1.738 1.511 2.539 0.956 3.577 0.578 C 4.621 0.193 5.858 0 7.29 0 C 9.463 0 11.177 0.45 12.43 1.351 C 13.692 2.252 14.355 3.5 14.419 5.093 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-lzt6qp`,
                                layoutDependency: D,
                                layoutId: `qomPo1gJ_`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.163 20.061" overflow="visible"><path d="M 5.41 11.598 L 5.41 20.061 L 0 20.061 L 0 0 L 5.212 0 L 5.212 7.876 L 5.367 7.876 C 5.707 6.916 6.273 6.168 7.063 5.633 C 7.854 5.09 8.803 4.82 9.913 4.82 C 10.978 4.82 11.901 5.061 12.685 5.544 C 13.475 6.029 14.085 6.696 14.517 7.543 C 14.954 8.392 15.17 9.365 15.163 10.462 L 15.163 20.061 L 9.757 20.061 L 9.757 11.598 C 9.762 10.854 9.577 10.269 9.198 9.845 C 8.825 9.42 8.294 9.209 7.601 9.209 C 7.197 9.2 6.798 9.301 6.446 9.501 C 6.12 9.69 5.865 9.965 5.681 10.326 C 5.495 10.724 5.401 11.159 5.406 11.598 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-19359em`,
                                layoutDependency: D,
                                layoutId: `Fjf0Aona1`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.593 20.257" overflow="visible"><path d="M 0 20.061 L 0 0 L 5.406 0 L 5.406 7.641 L 5.485 7.641 C 5.685 7.125 5.977 6.651 6.347 6.24 C 6.725 5.81 7.196 5.466 7.756 5.212 C 8.373 4.939 9.042 4.806 9.716 4.82 C 10.714 4.822 11.693 5.096 12.547 5.613 C 13.448 6.142 14.18 6.974 14.74 8.11 C 15.308 9.247 15.593 10.723 15.593 12.538 C 15.593 14.275 15.321 15.715 14.78 16.858 C 14.245 18 13.525 18.852 12.626 19.414 C 11.744 19.972 10.72 20.264 9.676 20.257 C 8.971 20.257 8.342 20.142 7.785 19.913 C 7.258 19.692 6.779 19.37 6.376 18.964 C 5.996 18.567 5.694 18.101 5.485 17.592 L 5.367 17.592 L 5.367 20.061 L 0.002 20.061 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-102cjyk`,
                                layoutDependency: D,
                                layoutId: `n0mfXEeSR`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.741 7.129" overflow="visible"><path d="M 0 3.566 C 0 4.297 0.095 4.931 0.284 5.465 C 0.48 5.995 0.753 6.406 1.107 6.7 C 1.466 6.987 1.893 7.129 2.389 7.129 C 2.886 7.129 3.307 6.992 3.653 6.71 C 4.005 6.423 4.273 6.014 4.456 5.486 C 4.645 4.95 4.741 4.31 4.741 3.566 C 4.741 2.822 4.646 2.184 4.456 1.656 C 4.273 1.12 4.005 0.711 3.653 0.431 C 3.297 0.14 2.848 -0.012 2.389 0.001 C 1.893 0.001 1.466 0.143 1.107 0.431 C 0.753 0.712 0.48 1.12 0.284 1.656 C 0.095 2.184 0 2.822 0 3.564 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-1as288x`,
                                layoutDependency: D,
                                layoutId: `rQFNHVm4x`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.419 15.476" overflow="visible"><path d="M 4.897 15.476 C 3.938 15.476 3.089 15.32 2.352 15.005 C 1.645 14.706 1.044 14.201 0.627 13.556 C 0.21 12.91 0 12.086 0 11.088 C 0 10.264 0.141 9.563 0.421 8.982 C 0.701 8.394 1.093 7.914 1.597 7.541 C 2.127 7.156 2.72 6.868 3.35 6.69 C 4.06 6.487 4.789 6.359 5.525 6.307 C 6.367 6.242 7.043 6.164 7.553 6.073 C 8.069 5.975 8.44 5.841 8.669 5.671 C 8.891 5.51 9.019 5.249 9.013 4.975 L 9.013 4.937 C 9.03 4.578 8.858 4.236 8.561 4.034 C 8.26 3.826 7.875 3.722 7.405 3.722 C 6.89 3.722 6.469 3.837 6.142 4.065 C 5.822 4.287 5.628 4.629 5.563 5.093 L 0.588 5.093 C 0.65 4.189 0.951 3.317 1.459 2.566 C 1.982 1.789 2.742 1.169 3.742 0.705 C 4.739 0.236 5.987 0 7.483 0 C 8.561 0 9.528 0.127 10.383 0.382 C 11.239 0.629 11.966 0.98 12.566 1.43 C 13.168 1.874 13.625 2.396 13.938 2.996 C 14.257 3.591 14.419 4.237 14.419 4.937 L 14.419 15.241 L 9.365 15.241 L 9.365 13.126 L 9.245 13.126 C 8.946 13.687 8.58 14.14 8.15 14.486 C 7.725 14.832 7.239 15.084 6.689 15.241 C 6.106 15.403 5.503 15.482 4.897 15.476 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-4yznap`,
                                layoutDependency: D,
                                layoutId: `eiinFajof`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.957 3.41" overflow="visible"><path d="M 1.568 3.41 C 1.979 3.41 2.364 3.325 2.723 3.156 C 3.089 2.984 3.387 2.74 3.615 2.42 C 3.844 2.101 3.957 1.712 3.957 1.255 L 3.957 0 C 3.642 0.128 3.318 0.233 2.988 0.313 C 2.596 0.409 2.2 0.488 1.802 0.548 C 1.443 0.596 1.095 0.706 0.774 0.873 C 0.533 0.997 0.331 1.183 0.186 1.411 C 0.061 1.625 -0.004 1.869 0 2.116 C 0 2.536 0.146 2.855 0.44 3.077 C 0.734 3.3 1.111 3.41 1.568 3.41 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-1p80fbv`,
                                layoutDependency: D,
                                layoutId: `meZL85jhT`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.045 15.514" overflow="visible"><path d="M 7.797 15.514 C 6.164 15.514 4.767 15.191 3.605 14.544 C 2.467 13.917 1.538 12.97 0.932 11.822 C 0.311 10.653 0 9.298 0 7.758 C 0 6.216 0.309 4.865 0.93 3.701 C 1.551 2.532 2.443 1.626 3.605 0.98 C 4.767 0.327 6.166 0 7.797 0 C 9.272 0 10.55 0.268 11.627 0.803 C 12.667 1.293 13.542 2.075 14.144 3.055 C 14.739 4.022 15.038 5.159 15.045 6.463 L 10.03 6.463 C 9.958 5.673 9.73 5.073 9.344 4.662 C 8.971 4.246 8.433 4.016 7.875 4.034 C 7.405 4.034 6.995 4.172 6.64 4.447 C 6.288 4.713 6.015 5.123 5.819 5.671 C 5.623 6.212 5.525 6.895 5.525 7.717 C 5.525 8.542 5.623 9.226 5.817 9.774 C 6.015 10.317 6.288 10.725 6.642 11 C 6.995 11.266 7.405 11.4 7.875 11.4 C 8.274 11.4 8.626 11.309 8.934 11.125 C 9.24 10.936 9.489 10.663 9.678 10.304 C 9.874 9.938 9.991 9.496 10.03 8.971 L 15.045 8.971 C 15.026 10.297 14.722 11.454 14.134 12.439 C 13.54 13.424 12.672 14.213 11.636 14.711 C 10.565 15.248 9.286 15.514 7.797 15.514 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-rhoktg`,
                                layoutDependency: D,
                                layoutId: `tzmePNGN7`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.462 11.479" overflow="visible"><path d="M 0 11.479 L 0.04 5.054 L 0.744 5.054 L 4.389 0 L 10.462 0 L 4.349 7.875 L 2.821 7.875 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-pxkjoq`,
                                layoutDependency: D,
                                layoutId: `AOC25P2Af`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.406 20.061" overflow="visible"><path d="M 0 20.061 L 0 0 L 5.406 0 L 5.406 20.061 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-y4tf2i`,
                                layoutDependency: D,
                                layoutId: `D9WM2gfGR`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.638 9.795" overflow="visible"><path d="M 3.448 9.795 L 0 3.839 L 3.526 0 L 9.638 9.795 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-ctzjfw`,
                                layoutDependency: D,
                                layoutId: `FUcrpTe8_`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.417 15.477" overflow="visible"><path d="M 4.897 15.477 C 3.938 15.477 3.089 15.321 2.35 15.006 C 1.643 14.707 1.043 14.202 0.627 13.557 C 0.208 12.911 0 12.087 0 11.088 C 0 10.265 0.141 9.564 0.421 8.983 C 0.701 8.395 1.093 7.915 1.597 7.542 C 2.126 7.157 2.72 6.869 3.35 6.691 C 4.06 6.488 4.789 6.36 5.525 6.308 C 6.367 6.243 7.043 6.165 7.552 6.074 C 8.067 5.976 8.44 5.842 8.669 5.672 C 8.89 5.51 9.018 5.25 9.011 4.976 L 9.011 4.938 C 9.029 4.579 8.858 4.237 8.561 4.035 C 8.26 3.827 7.875 3.723 7.405 3.723 C 6.89 3.723 6.467 3.838 6.142 4.066 C 5.821 4.288 5.628 4.63 5.563 5.094 L 0.588 5.094 C 0.65 4.19 0.951 3.318 1.459 2.567 C 1.982 1.79 2.742 1.17 3.742 0.706 C 4.741 0.236 5.987 0.001 7.483 0.001 C 8.463 -0.012 9.44 0.116 10.383 0.383 C 11.168 0.597 11.908 0.952 12.566 1.431 C 13.168 1.875 13.625 2.397 13.938 2.997 C 14.257 3.592 14.417 4.238 14.417 4.938 L 14.417 15.242 L 9.363 15.242 L 9.363 13.127 L 9.247 13.127 C 8.976 13.65 8.603 14.112 8.15 14.487 C 7.72 14.836 7.223 15.093 6.69 15.242 C 6.107 15.404 5.503 15.483 4.897 15.477 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-wm19yn`,
                                layoutDependency: D,
                                layoutId: `O2XAebtky`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.957 3.41" overflow="visible"><path d="M 1.568 3.41 C 1.979 3.41 2.364 3.325 2.723 3.156 C 3.089 2.984 3.385 2.74 3.613 2.42 C 3.842 2.101 3.957 1.712 3.957 1.255 L 3.957 0 C 3.642 0.128 3.318 0.232 2.988 0.313 C 2.596 0.41 2.2 0.488 1.802 0.548 C 1.443 0.596 1.095 0.706 0.774 0.873 C 0.533 0.997 0.331 1.183 0.186 1.411 C 0.061 1.625 -0.003 1.869 0 2.116 C 0 2.536 0.146 2.855 0.44 3.077 C 0.734 3.3 1.111 3.41 1.568 3.41 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-162pyz6`,
                                layoutDependency: D,
                                layoutId: `VoAAGFd22`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.593 20.883" overflow="visible"><path d="M 0 20.883 L 0 0.197 L 5.368 0.197 L 5.368 2.822 L 5.485 2.822 C 5.681 2.313 5.968 1.846 6.347 1.421 C 6.738 0.982 7.219 0.631 7.758 0.393 C 8.375 0.12 9.043 -0.013 9.718 0.001 C 10.715 0.003 11.693 0.277 12.547 0.794 C 13.448 1.323 14.18 2.155 14.742 3.291 C 15.309 4.427 15.593 5.904 15.593 7.719 C 15.593 9.456 15.323 10.896 14.78 12.039 C 14.245 13.181 13.527 14.033 12.626 14.595 C 11.744 15.153 10.721 15.445 9.678 15.438 C 8.973 15.438 8.342 15.323 7.787 15.094 C 7.259 14.873 6.78 14.551 6.377 14.145 C 5.997 13.748 5.694 13.282 5.485 12.773 L 5.406 12.773 L 5.406 20.883 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-3knaew`,
                                layoutDependency: D,
                                layoutId: `bV4Bp7W2Z`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.741 7.129" overflow="visible"><path d="M 0 3.566 C 0 4.297 0.095 4.931 0.284 5.465 C 0.48 5.995 0.755 6.406 1.107 6.7 C 1.466 6.987 1.894 7.129 2.389 7.129 C 2.886 7.129 3.307 6.992 3.653 6.71 C 4.007 6.423 4.273 6.014 4.457 5.486 C 4.646 4.95 4.741 4.31 4.741 3.566 C 4.741 2.822 4.646 2.184 4.457 1.656 C 4.273 1.12 4.007 0.711 3.653 0.431 C 3.297 0.14 2.849 -0.012 2.389 0.001 C 1.894 0.001 1.466 0.143 1.107 0.431 C 0.755 0.712 0.48 1.12 0.284 1.656 C 0.095 2.184 0 2.822 0 3.564 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-thmnxb`,
                                layoutDependency: D,
                                layoutId: `hVNR75Nc_`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.593 20.884" overflow="visible"><path d="M 0 20.884 L 0 0.197 L 5.367 0.197 L 5.367 2.822 L 5.485 2.822 C 5.681 2.313 5.968 1.846 6.347 1.421 C 6.738 0.982 7.219 0.631 7.758 0.393 C 8.374 0.12 9.042 -0.014 9.716 0.001 C 10.714 0.003 11.693 0.277 12.547 0.794 C 13.448 1.323 14.18 2.155 14.74 3.291 C 15.309 4.428 15.593 5.904 15.593 7.719 C 15.593 9.456 15.321 10.896 14.78 12.039 C 14.245 13.181 13.527 14.033 12.626 14.595 C 11.744 15.153 10.721 15.445 9.678 15.438 C 8.971 15.438 8.342 15.323 7.787 15.094 C 7.259 14.873 6.78 14.551 6.376 14.145 C 5.995 13.748 5.693 13.282 5.485 12.773 L 5.406 12.773 L 5.406 20.884 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                              o(H, {
                                className: `framer-1g7zw7d`,
                                layoutDependency: D,
                                layoutId: `MJeysUg1y`,
                                opacity: 1,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.741 7.129" overflow="visible"><path d="M 0 3.566 C 0 4.297 0.095 4.931 0.284 5.465 C 0.48 5.995 0.755 6.406 1.107 6.7 C 1.466 6.987 1.893 7.129 2.389 7.129 C 2.886 7.129 3.307 6.992 3.653 6.71 C 4.005 6.423 4.273 6.014 4.456 5.486 C 4.646 4.95 4.741 4.31 4.741 3.566 C 4.741 2.822 4.646 2.184 4.456 1.656 C 4.273 1.12 4.005 0.711 3.653 0.431 C 3.297 0.14 2.849 -0.012 2.389 0.001 C 1.893 0.001 1.466 0.143 1.107 0.431 C 0.755 0.712 0.48 1.12 0.284 1.656 C 0.095 2.184 0 2.822 0 3.564 Z" fill="transparent"></path></svg>`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qHy6o.framer-1v9ycl5, .framer-qHy6o .framer-1v9ycl5 { display: block; }`,
          `.framer-qHy6o.framer-rt0i48 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 32px 16px 32px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-qHy6o .framer-4a4ccm { height: 30px; position: relative; width: 171px; }`,
          `.framer-qHy6o .framer-tiw392 { height: 10px; left: 0px; position: absolute; top: 0px; width: 30px; }`,
          `.framer-qHy6o .framer-12mu4b6 { height: 4px; left: 0px; position: absolute; top: 11px; width: 30px; }`,
          `.framer-qHy6o .framer-h72joc { height: 14px; left: 0px; position: absolute; top: 16px; width: 30px; }`,
          `.framer-qHy6o .framer-va3yjl { height: 23px; left: 41px; position: absolute; top: 4px; width: 20px; }`,
          `.framer-qHy6o .framer-1gb2p0d { height: 23px; left: 63px; position: absolute; top: 4px; width: 23px; }`,
          `.framer-qHy6o .framer-cl16q { height: 6px; left: 68px; position: absolute; top: 7px; width: 13px; }`,
          `.framer-qHy6o .framer-1ajideg { height: 23px; left: 88px; position: absolute; top: 4px; width: 13px; }`,
          `.framer-qHy6o .framer-195o6ir { height: 23px; left: 101px; position: absolute; top: 4px; width: 23px; }`,
          `.framer-qHy6o .framer-1an5i0e { height: 6px; left: 106px; position: absolute; top: 7px; width: 13px; }`,
          `.framer-qHy6o .framer-vdzj6z { height: 23px; left: 150px; position: absolute; top: 4px; width: 21px; }`,
          `.framer-qHy6o .framer-3uoxq3 { height: 7px; left: 155px; position: absolute; top: 16px; width: 11px; }`,
          `.framer-qHy6o .framer-i364v3 { height: 23px; left: 127px; position: absolute; top: 4px; width: 21px; }`,
          `.framer-qHy6o .framer-1bm4ic3 { height: 30px; position: relative; width: 155px; }`,
          `.framer-qHy6o .framer-1boutgp { height: 25px; left: 36px; position: absolute; top: 6px; width: 15px; }`,
          `.framer-qHy6o .framer-9mijlv { height: 10px; left: 40px; position: absolute; top: 17px; width: 6px; }`,
          `.framer-qHy6o .framer-13eq00a { height: 9px; left: 13px; position: absolute; top: 22px; width: 2px; }`,
          `.framer-qHy6o .framer-pmaeoq { height: 17px; left: 54px; position: absolute; top: 13px; width: 10px; }`,
          `.framer-qHy6o .framer-jujr8k { height: 11px; left: 16px; position: absolute; top: 19px; width: 3px; }`,
          `.framer-qHy6o .framer-u6m2ty { height: 22px; left: 0px; position: absolute; top: 0px; width: 31px; }`,
          `.framer-qHy6o .framer-1pqu26f { height: 25px; left: 79px; position: absolute; top: 6px; width: 15px; }`,
          `.framer-qHy6o .framer-8uyo80 { height: 10px; left: 84px; position: absolute; top: 17px; width: 6px; }`,
          `.framer-qHy6o .framer-1u88yn7 { height: 18px; left: 126px; position: absolute; top: 13px; width: 13px; }`,
          `.framer-qHy6o .framer-1vh1utr { height: 18px; left: 64px; position: absolute; top: 13px; width: 13px; }`,
          `.framer-qHy6o .framer-1vglqji { height: 4px; left: 68px; position: absolute; top: 22px; width: 5px; }`,
          `.framer-qHy6o .framer-emyivy { height: 18px; left: 139px; position: absolute; top: 13px; width: 16px; }`,
          `.framer-qHy6o .framer-12fyler { height: 10px; left: 144px; position: absolute; top: 17px; width: 7px; }`,
          `.framer-qHy6o .framer-1vym6tr { height: 18px; left: 97px; position: absolute; top: 13px; width: 15px; }`,
          `.framer-qHy6o .framer-1m8x8yg { height: 3px; left: 101px; position: absolute; top: 16px; width: 6px; }`,
          `.framer-qHy6o .framer-gcyi3b { height: 18px; left: 113px; position: absolute; top: 13px; width: 12px; }`,
          `.framer-qHy6o .framer-dmhk5c { height: 30px; position: relative; width: 96px; }`,
          `.framer-qHy6o .framer-182gp6s, .framer-qHy6o .framer-v765bm, .framer-qHy6o .framer-vnt7px { height: 30px; left: 0px; position: absolute; top: 0px; width: 96px; }`,
          `.framer-qHy6o .framer-105j0o4 { height: 26px; left: 0px; position: absolute; top: 1px; width: 25px; }`,
          `.framer-qHy6o .framer-jajqo9 { height: 26px; left: 0px; position: absolute; top: 0px; width: 25px; }`,
          `.framer-qHy6o .framer-1nmw025 { height: 8px; left: 3px; position: absolute; top: 0px; width: 14px; }`,
          `.framer-qHy6o .framer-fgncfi { height: 18px; left: 1px; position: absolute; top: 0px; width: 24px; }`,
          `.framer-qHy6o .framer-mxnf85 { height: 16px; left: 0px; position: absolute; top: 10px; width: 20px; }`,
          `.framer-qHy6o .framer-1ybw94o { height: 3px; left: 17px; position: absolute; top: 0px; width: 3px; }`,
          `.framer-qHy6o .framer-sggs7q { height: 3px; left: 0px; position: absolute; top: 19px; width: 3px; }`,
          `.framer-qHy6o .framer-1gpfr2t { height: 3px; left: 3px; position: absolute; top: 9px; width: 3px; }`,
          `.framer-qHy6o .framer-1qbhh4o { height: 3px; left: 60px; position: absolute; top: 25px; width: 3px; }`,
          `.framer-qHy6o .framer-1thm6zu { height: 2px; left: 58px; position: absolute; top: 25px; width: 2px; }`,
          `.framer-qHy6o .framer-crukiy { height: 3px; left: 58px; position: absolute; top: 24px; width: 3px; }`,
          `.framer-qHy6o .framer-1h6naml { height: 6px; left: 64px; position: absolute; top: 24px; width: 5px; }`,
          `.framer-qHy6o .framer-1audbqp { height: 7px; left: 69px; position: absolute; top: 23px; width: 9px; }`,
          `.framer-qHy6o .framer-10p05n9 { height: 1px; left: 80px; position: absolute; top: 25px; width: 3px; }`,
          `.framer-qHy6o .framer-1qg8bwa { height: 6px; left: 79px; position: absolute; top: 24px; width: 6px; }`,
          `.framer-qHy6o .framer-1xx4mle { height: 6px; left: 84px; position: absolute; top: 24px; width: 6px; }`,
          `.framer-qHy6o .framer-h2s0fu { height: 8px; left: 91px; position: absolute; top: 22px; width: 5px; }`,
          `.framer-qHy6o .framer-v9vynr { height: 18px; left: 29px; position: absolute; top: 1px; width: 10px; }`,
          `.framer-qHy6o .framer-1pvk4y8 { height: 13px; left: 39px; position: absolute; top: 6px; width: 12px; }`,
          `.framer-qHy6o .framer-3g0ooq { height: 12px; left: 52px; position: absolute; top: 6px; width: 12px; }`,
          `.framer-qHy6o .framer-1abmuwq { height: 13px; left: 70px; position: absolute; top: 6px; width: 13px; }`,
          `.framer-qHy6o .framer-1olhw16 { height: 7px; left: 73px; position: absolute; top: 9px; width: 7px; }`,
          `.framer-qHy6o .framer-16r511g { height: 13px; left: 84px; position: absolute; top: 6px; width: 12px; }`,
          `.framer-qHy6o .framer-lo5s38 { height: 12px; left: 65px; position: absolute; top: 6px; width: 4px; }`,
          `.framer-qHy6o .framer-ku43wk { height: 4px; left: 65px; position: absolute; top: 2px; width: 4px; }`,
          `.framer-qHy6o .framer-1cbvf03 { height: 30px; position: relative; width: 123px; }`,
          `.framer-qHy6o .framer-1rvk7z5, .framer-qHy6o .framer-4r6n57 { height: 30px; left: 0px; position: absolute; top: 0px; width: 123px; }`,
          `.framer-qHy6o .framer-1i6qwci { height: 18px; left: 71px; position: absolute; top: 6px; width: 16px; }`,
          `.framer-qHy6o .framer-5mb7l4 { height: 4px; left: 75px; position: absolute; top: 10px; width: 8px; }`,
          `.framer-qHy6o .framer-bz4gfp { height: 5px; left: 75px; position: absolute; top: 17px; width: 9px; }`,
          `.framer-qHy6o .framer-1xw5yxg { height: 18px; left: 90px; position: absolute; top: 6px; width: 16px; }`,
          `.framer-qHy6o .framer-kpbhm4 { height: 4px; left: 94px; position: absolute; top: 10px; width: 8px; }`,
          `.framer-qHy6o .framer-94pr0j { height: 18px; left: 108px; position: absolute; top: 6px; width: 15px; }`,
          `.framer-qHy6o .framer-7q8rx1 { height: 28px; left: 35px; position: absolute; top: 2px; width: 29px; }`,
          `.framer-qHy6o .framer-1kzl0fx { height: 18px; left: 40px; position: absolute; top: 6px; width: 19px; }`,
          `.framer-qHy6o .framer-cket3s { height: 30px; left: 0px; position: absolute; top: 0px; width: 15px; }`,
          `.framer-qHy6o .framer-1afkdef { height: 30px; left: 12px; position: absolute; top: 0px; width: 22px; }`,
          `.framer-qHy6o .framer-a09ju5 { height: 30px; position: relative; width: 237px; }`,
          `.framer-qHy6o .framer-16rn09h { height: 13px; left: 2px; position: absolute; top: 0px; width: 18px; }`,
          `.framer-qHy6o .framer-1kd6hm6 { height: 1px; left: 18px; position: absolute; top: 13px; width: 1px; }`,
          `.framer-qHy6o .framer-1vlolwc { height: 9px; left: 0px; position: absolute; top: 0px; width: 10px; }`,
          `.framer-qHy6o .framer-fy9ip4 { height: 28px; left: 0px; position: absolute; top: 2px; width: 29px; }`,
          `.framer-qHy6o .framer-1e5xv26 { height: 26px; left: 47px; position: absolute; top: 5px; width: 191px; }`,
          `.framer-qHy6o .framer-128h0ih { height: 16px; left: 0px; position: absolute; top: 5px; width: 15px; }`,
          `.framer-qHy6o .framer-1dh2mg6 { height: 16px; left: 17px; position: absolute; top: 5px; width: 15px; }`,
          `.framer-qHy6o .framer-nrvt8z { height: 4px; left: 22px; position: absolute; top: 14px; width: 4px; }`,
          `.framer-qHy6o .framer-hkyh77 { height: 16px; left: 33px; position: absolute; top: 5px; width: 15px; }`,
          `.framer-qHy6o .framer-lzt6qp { height: 20px; left: 50px; position: absolute; top: 0px; width: 15px; }`,
          `.framer-qHy6o .framer-19359em { height: 21px; left: 68px; position: absolute; top: 0px; width: 16px; }`,
          `.framer-qHy6o .framer-102cjyk { height: 7px; left: 73px; position: absolute; top: 9px; width: 5px; }`,
          `.framer-qHy6o .framer-1as288x { height: 16px; left: 85px; position: absolute; top: 5px; width: 15px; }`,
          `.framer-qHy6o .framer-4yznap { height: 4px; left: 90px; position: absolute; top: 14px; width: 4px; }`,
          `.framer-qHy6o .framer-1p80fbv { height: 16px; left: 101px; position: absolute; top: 5px; width: 15px; }`,
          `.framer-qHy6o .framer-rhoktg { height: 12px; left: 124px; position: absolute; top: 5px; width: 11px; }`,
          `.framer-qHy6o .framer-pxkjoq { height: 20px; left: 119px; position: absolute; top: 0px; width: 6px; }`,
          `.framer-qHy6o .framer-y4tf2i { height: 10px; left: 125px; position: absolute; top: 11px; width: 10px; }`,
          `.framer-qHy6o .framer-ctzjfw { height: 16px; left: 140px; position: absolute; top: 5px; width: 15px; }`,
          `.framer-qHy6o .framer-wm19yn { height: 4px; left: 145px; position: absolute; top: 14px; width: 4px; }`,
          `.framer-qHy6o .framer-162pyz6 { height: 21px; left: 157px; position: absolute; top: 5px; width: 16px; }`,
          `.framer-qHy6o .framer-3knaew { height: 7px; left: 162px; position: absolute; top: 9px; width: 5px; }`,
          `.framer-qHy6o .framer-thmnxb { height: 21px; left: 175px; position: absolute; top: 5px; width: 16px; }`,
          `.framer-qHy6o .framer-1g7zw7d { height: 7px; left: 180px; position: absolute; top: 9px; width: 5px; }`,
          `.framer-qHy6o[data-border="true"]::after, .framer-qHy6o [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-qHy6o`
      )),
      (J.displayName = `Empresa`),
      (J.defaultProps = { height: 62, width: 235 }),
      w(J, {
        variant: {
          options: [`BTO_xytvh`, `SGi0DvBQG`, `MtoXSlXGI`, `EJbLJeOH3`, `oQ57iFWLA`, `dKYKcSqcz`],
          optionTitles: [`Serena`, `Bradesco`, `Fusion`, `BRZ`, `Cashback App`, `IFPE`],
          title: `Variant`,
          type: D.Enum,
        },
      }),
      V(J, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function dt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  Y,
  xt = e(() => {
    (u(),
      T(),
      h(),
      r(),
      (ft = [`dFYPNeX9Z`, `En_EzY2cQ`]),
      (pt = `framer-bzjRJ`),
      (mt = { dFYPNeX9Z: `framer-v-1duzdet`, En_EzY2cQ: `framer-v-wsqk2k` }),
      (ht = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (gt = ({ value: e, children: t }) => {
        let r = s(p),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: t });
      }),
      (_t = f.create(t)),
      (vt = { "Locked project": `En_EzY2cQ`, "Open project": `dFYPNeX9Z` }),
      (yt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: vt[r.variant] ?? r.variant ?? `dFYPNeX9Z`,
      })),
      (bt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = E(
        i(function (e, t) {
          let n = c(null),
            r = t ?? n,
            i = a(),
            { activeLocale: s, setLocale: u } = N();
          R();
          let { style: d, className: p, layoutId: h, variant: g, ..._ } = yt(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: ee,
              variants: E,
            } = F({
              cycleOrder: ft,
              defaultVariant: `dFYPNeX9Z`,
              ref: r,
              variant: g,
              variantClassNames: mt,
            }),
            D = bt(e, E),
            O = b(pt),
            k = () => v !== `En_EzY2cQ`,
            A = () => v === `En_EzY2cQ`;
          return o(m, {
            id: h ?? i,
            children: o(_t, {
              animate: E,
              initial: !1,
              children: o(gt, {
                value: ht,
                children: l(f.div, {
                  ..._,
                  ...S,
                  className: b(O, `framer-1duzdet`, p, y),
                  "data-framer-name": `Open project`,
                  layoutDependency: D,
                  layoutId: `dFYPNeX9Z`,
                  ref: r,
                  style: {
                    backgroundColor: `rgb(0, 0, 0)`,
                    borderBottomLeftRadius: 1e3,
                    borderBottomRightRadius: 1e3,
                    borderTopLeftRadius: 1e3,
                    borderTopRightRadius: 1e3,
                    ...d,
                  },
                  ...dt({ En_EzY2cQ: { "data-framer-name": `Locked project` } }, v, C),
                  children: [
                    k() &&
                      o(H, {
                        className: `framer-1lphdw5`,
                        "data-framer-name": `tabler:lock-open`,
                        layout: `position`,
                        layoutDependency: D,
                        layoutId: `ktMNEfv98`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M 6.667 17.333 C 6.667 16.626 6.948 15.948 7.448 15.448 C 7.948 14.948 8.626 14.667 9.333 14.667 L 22.667 14.667 C 23.374 14.667 24.052 14.948 24.552 15.448 C 25.052 15.948 25.333 16.626 25.333 17.333 L 25.333 25.333 C 25.333 26.041 25.052 26.719 24.552 27.219 C 24.052 27.719 23.374 28 22.667 28 L 9.333 28 C 8.626 28 7.948 27.719 7.448 27.219 C 6.948 26.719 6.667 26.041 6.667 25.333 Z" fill="transparent" stroke-width="2.66667" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 10.667 14.667 L 10.667 8 C 10.667 6.585 11.229 5.229 12.229 4.229 C 13.229 3.229 14.585 2.667 16 2.667 C 17.415 2.667 18.771 3.229 19.771 4.229 C 20.771 5.229 21.333 6.585 21.333 8 M 14.667 21.333 C 14.667 21.687 14.807 22.026 15.057 22.276 C 15.307 22.526 15.646 22.667 16 22.667 C 16.354 22.667 16.693 22.526 16.943 22.276 C 17.193 22.026 17.333 21.687 17.333 21.333 C 17.333 20.98 17.193 20.641 16.943 20.391 C 16.693 20.14 16.354 20 16 20 C 15.646 20 15.307 20.14 15.057 20.391 C 14.807 20.641 14.667 20.98 14.667 21.333 Z" fill="transparent" stroke-width="2.66667" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                        svgContentId: 9563086939,
                        withExternalLayout: !0,
                      }),
                    k() &&
                      o(H, {
                        className: `framer-19ijrbp`,
                        "data-framer-name": `tabler:circle-check`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 32,
                        intrinsicWidth: 32,
                        layoutDependency: D,
                        layoutId: `KrUsDYBQN`,
                        svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.4241 4 12.8637 4.31039 11.4078 4.91345C9.95189 5.5165 8.62902 6.40042 7.51472 7.51472C6.40042 8.62902 5.5165 9.95189 4.91345 11.4078C4.31039 12.8637 4 14.4241 4 16Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15.9999L14.6667 18.6666L20 13.3333" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                    A() &&
                      o(H, {
                        className: `framer-1im6ssd`,
                        "data-framer-name": `tabler:lock`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 32,
                        intrinsicWidth: 32,
                        layoutDependency: D,
                        layoutId: `U4BxUmpiz`,
                        svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66666 17.3333C6.66666 16.626 6.94761 15.9478 7.4477 15.4477C7.9478 14.9476 8.62608 14.6666 9.33332 14.6666H22.6667C23.3739 14.6666 24.0522 14.9476 24.5523 15.4477C25.0524 15.9478 25.3333 16.626 25.3333 17.3333V25.3333C25.3333 26.0405 25.0524 26.7188 24.5523 27.2189C24.0522 27.719 23.3739 28 22.6667 28H9.33332C8.62608 28 7.9478 27.719 7.4477 27.2189C6.94761 26.7188 6.66666 26.0405 6.66666 25.3333V17.3333Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 14.6667V9.33333C10.6667 7.91885 11.2286 6.56229 12.2288 5.5621C13.2289 4.5619 14.5855 4 16 4C17.4145 4 18.771 4.5619 19.7712 5.5621C20.7714 6.56229 21.3333 7.91885 21.3333 9.33333V14.6667M14.6667 21.3333C14.6667 21.687 14.8071 22.0261 15.0572 22.2761C15.3072 22.5262 15.6464 22.6667 16 22.6667C16.3536 22.6667 16.6928 22.5262 16.9428 22.2761C17.1928 22.0261 17.3333 21.687 17.3333 21.3333C17.3333 20.9797 17.1928 20.6406 16.9428 20.3905C16.6928 20.1405 16.3536 20 16 20C15.6464 20 15.3072 20.1405 15.0572 20.3905C14.8071 20.6406 14.6667 20.9797 14.6667 21.3333Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                    A() &&
                      o(H, {
                        className: `framer-vvtgzz`,
                        "data-framer-name": `tabler:alert-triangle`,
                        fill: `rgba(0,0,0,1)`,
                        intrinsicHeight: 32,
                        intrinsicWidth: 32,
                        layoutDependency: D,
                        layoutId: `SMO920qW4`,
                        svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 12V17.3333M16 21.3333H16.0133M13.8173 4.78797L3.00934 22.8333C2.78653 23.2191 2.66863 23.6566 2.66735 24.1022C2.66608 24.5477 2.78148 24.9858 3.00207 25.3729C3.22266 25.7601 3.54076 26.0827 3.92473 26.3087C4.30869 26.5347 4.74515 26.6563 5.19067 26.6613H26.8093C27.2547 26.6562 27.6909 26.5346 28.0747 26.3086C28.4585 26.0827 28.7764 25.7602 28.997 25.3733C29.2175 24.9864 29.333 24.5485 29.3319 24.1031C29.3308 23.6578 29.2131 23.2204 28.9907 22.8346L18.1827 4.78663C17.9553 4.41131 17.6349 4.10096 17.2526 3.88556C16.8703 3.67017 16.4388 3.55701 16 3.55701C15.5612 3.55701 15.1297 3.67017 14.7474 3.88556C14.3651 4.10096 14.0447 4.41131 13.8173 4.78663V4.78797Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-bzjRJ.framer-9b2hux, .framer-bzjRJ .framer-9b2hux { display: block; }`,
          `.framer-bzjRJ.framer-1duzdet { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 12px; position: relative; width: min-content; }`,
          `.framer-bzjRJ .framer-1lphdw5, .framer-bzjRJ .framer-19ijrbp, .framer-bzjRJ .framer-1im6ssd, .framer-bzjRJ .framer-vvtgzz { flex: none; height: 32px; position: relative; width: 32px; }`,
          `.framer-bzjRJ.framer-v-wsqk2k .framer-1im6ssd { order: 1; }`,
          `.framer-bzjRJ.framer-v-wsqk2k .framer-vvtgzz { order: 3; }`,
        ],
        `framer-bzjRJ`
      )),
      (Y.displayName = `Visibility`),
      (Y.defaultProps = { height: 56, width: 98 }),
      w(Y, {
        variant: {
          options: [`dFYPNeX9Z`, `En_EzY2cQ`],
          optionTitles: [`Open project`, `Locked project`],
          title: `Variant`,
          type: D.Enum,
        },
      }),
      V(Y, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function X(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Z,
  Ht = e(() => {
    (u(),
      T(),
      h(),
      r(),
      ge(),
      ut(),
      xt(),
      (St = v(J)),
      (Ct = v(Y)),
      (wt = pe(Y)),
      (Tt = pe(J)),
      (Et = [`r1w08lc3q`, `hTTpL0qkX`, `ztgnbX6dc`]),
      (Dt = `framer-4UTJi`),
      (Ot = {
        hTTpL0qkX: `framer-v-a2fm7k`,
        r1w08lc3q: `framer-v-11ka6fz`,
        ztgnbX6dc: `framer-v-ak3fne`,
      }),
      (kt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (At = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (jt = (e, t) => `translateX(-50%) ${t}`),
      (Mt = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (Nt = { month: `short`, timeZone: `UTC`, year: `numeric` }),
      (Pt = (e, t) => Mt(e, Nt, t)),
      (Ft = ({ value: e, children: t }) => {
        let r = s(p),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(p.Provider, { value: a, children: t });
      }),
      (It = f.create(t)),
      (Lt = { "Locked project": `En_EzY2cQ`, "Open project": `dFYPNeX9Z` }),
      (Rt = {
        "Cashback App": `oQ57iFWLA`,
        Bradesco: `SGi0DvBQG`,
        BRZ: `EJbLJeOH3`,
        Fusion: `MtoXSlXGI`,
        IFPE: `dKYKcSqcz`,
        Serena: `BTO_xytvh`,
      }),
      (zt = { "All round": `hTTpL0qkX`, "Bottom right": `r1w08lc3q`, Mobile: `ztgnbX6dc` }),
      (Bt = ({
        businessPartner: e,
        category: t,
        date: n,
        description: r,
        height: i,
        id: a,
        image: o,
        link: s,
        projectName: c,
        projectVisibility: l,
        width: u,
        ...d
      }) => ({
        ...d,
        D4JFAdc6i: t ?? d.D4JFAdc6i ?? `Category`,
        H7C97Eu6c: r ?? d.H7C97Eu6c ?? `Description - Lorem ipsum dolor sit amet adipis`,
        H8LJ3thMf: o ??
          d.H8LJ3thMf ?? {
            alt: ``,
            pixelHeight: 4032,
            pixelWidth: 3024,
            src: `https://framerusercontent.com/images/38lysfzMwqO6T8wa4y8ghzSA.jpg?scale-down-to=1024&width=3024&height=4032`,
            srcSet: `https://framerusercontent.com/images/38lysfzMwqO6T8wa4y8ghzSA.jpg?scale-down-to=1024&width=3024&height=4032 768w,https://framerusercontent.com/images/38lysfzMwqO6T8wa4y8ghzSA.jpg?scale-down-to=2048&width=3024&height=4032 1536w,https://framerusercontent.com/images/38lysfzMwqO6T8wa4y8ghzSA.jpg?width=3024&height=4032 3024w`,
          },
        i_O1Is8BV: Rt[e] ?? e ?? d.i_O1Is8BV ?? `BTO_xytvh`,
        KQUCvl5et: Lt[l] ?? l ?? d.KQUCvl5et ?? `dFYPNeX9Z`,
        LruDvQpYl: s ?? d.LruDvQpYl,
        nChQMbWzi: n ?? d.nChQMbWzi ?? `2025-11-16T00:00:00.000Z`,
        qVcR_Smrz: c ?? d.qVcR_Smrz ?? `Project name`,
        variant: zt[d.variant] ?? d.variant ?? `r1w08lc3q`,
      })),
      (Vt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = E(
        i(function (e, n) {
          let r = c(null),
            i = n ?? r,
            s = a(),
            { activeLocale: u, setLocale: d } = N(),
            p = R(),
            {
              style: h,
              className: g,
              layoutId: _,
              variant: v,
              KQUCvl5et: y,
              D4JFAdc6i: C,
              qVcR_Smrz: w,
              H7C97Eu6c: T,
              H8LJ3thMf: ee,
              i_O1Is8BV: E,
              LruDvQpYl: D,
              nChQMbWzi: O,
              ...A
            } = Bt(e),
            {
              baseVariant: j,
              classNames: te,
              clearLoadingGesture: P,
              gestureHandlers: ne,
              gestureVariant: I,
              isLoading: L,
              setGestureState: ie,
              setVariant: ae,
              variants: oe,
            } = F({
              cycleOrder: Et,
              defaultVariant: `r1w08lc3q`,
              ref: i,
              variant: v,
              variantClassNames: Ot,
            }),
            z = Vt(e, oe),
            se = b(Dt, xe),
            ce = () => j === `ztgnbX6dc`,
            le = de(),
            ue = Pt(O, le),
            V = () => j === `hTTpL0qkX`;
          return o(m, {
            id: _ ?? s,
            children: o(It, {
              animate: oe,
              initial: !1,
              children: o(Ft, {
                value: kt,
                children: l(f.div, {
                  ...A,
                  ...ne,
                  className: b(se, `framer-11ka6fz`, g, te),
                  "data-framer-name": `Bottom right`,
                  layoutDependency: z,
                  layoutId: `r1w08lc3q`,
                  ref: i,
                  style: {
                    backgroundColor: `rgb(255, 255, 255)`,
                    borderBottomLeftRadius: 32,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                    ...h,
                  },
                  variants: {
                    hTTpL0qkX: { borderBottomRightRadius: 32 },
                    ztgnbX6dc: { borderBottomRightRadius: 32 },
                  },
                  ...X(
                    {
                      hTTpL0qkX: { "data-framer-name": `All round` },
                      ztgnbX6dc: { "data-framer-name": `Mobile` },
                    },
                    j,
                    I
                  ),
                  children: [
                    o(re, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: x((p?.y || 0) + 0 + (((p?.height || 644) - 0 - 844) / 2 + 0 + 0)),
                        pixelHeight: 4032,
                        pixelWidth: 3024,
                        sizes: `523px`,
                        ...At(ee),
                      },
                      className: `framer-2vwdkb`,
                      layoutDependency: z,
                      layoutId: `gKoD8gDSq`,
                      ...X(
                        {
                          hTTpL0qkX: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: x(
                                (p?.y || 0) +
                                  0 +
                                  (((p?.height || 712) -
                                    0 -
                                    (Math.max(0, ((p?.height || 712) - 0 - 590) / 1) * 1 +
                                      590 +
                                      0)) /
                                    2 +
                                    0 +
                                    0)
                              ),
                              pixelHeight: 4032,
                              pixelWidth: 3024,
                              sizes: p?.width || `100vw`,
                              ...At(ee),
                            },
                          },
                          ztgnbX6dc: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: x(
                                (p?.y || 0) + 0 + (((p?.height || 631) - 0 - 918) / 2 + 0 + 0)
                              ),
                              pixelHeight: 4032,
                              pixelWidth: 3024,
                              sizes: p?.width || `100vw`,
                              ...At(ee),
                            },
                          },
                        },
                        j,
                        I
                      ),
                      children: o(B, {
                        height: 62,
                        y:
                          (p?.y || 0) +
                          0 +
                          (((p?.height || 644) - 0 - 844) / 2 + 0 + 0) +
                          450 -
                          85.5,
                        ...X(
                          {
                            hTTpL0qkX: {
                              y:
                                (p?.y || 0) +
                                0 +
                                (((p?.height || 712) -
                                  0 -
                                  (Math.max(0, ((p?.height || 712) - 0 - 590) / 1) * 1 + 590 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                Math.max(0, ((p?.height || 712) - 0 - 590) / 1) * 1 -
                                85.5,
                            },
                            ztgnbX6dc: {
                              y:
                                (p?.y || 0) +
                                0 +
                                (((p?.height || 631) - 0 - 918) / 2 + 0 + 0) +
                                320 -
                                85.5,
                            },
                          },
                          j,
                          I
                        ),
                        children: o(S, {
                          className: `framer-1j6eu0k-container`,
                          "data-framer-name": `Empresa`,
                          layoutDependency: z,
                          layoutId: `gFz39lw1O-container`,
                          name: `Empresa`,
                          nodeId: `gFz39lw1O`,
                          rendersWithMotion: !0,
                          scopeId: `GF12J4iSw`,
                          ...X({ ztgnbX6dc: { transformTemplate: jt } }, j, I),
                          children: o(J, {
                            height: `100%`,
                            id: `gFz39lw1O`,
                            layoutId: `gFz39lw1O`,
                            name: `Empresa`,
                            variant: `BTO_xytvh`,
                            width: `100%`,
                            ...X({ hTTpL0qkX: { variant: E }, ztgnbX6dc: { variant: E } }, j, I),
                          }),
                        }),
                      }),
                    }),
                    l(f.div, {
                      className: `framer-t8qv57`,
                      layoutDependency: z,
                      layoutId: `IkrD9_Ihb`,
                      children: [
                        l(f.div, {
                          className: `framer-1d1ost1`,
                          layoutDependency: z,
                          layoutId: `hgbjLSve7`,
                          children: [
                            o(k, {
                              __fromCanvasComponent: !0,
                              children: o(t, {
                                children: o(f.p, {
                                  style: {
                                    "--framer-font-size": `20px`,
                                    "--framer-line-height": `150%`,
                                  },
                                  children: `Category`,
                                }),
                              }),
                              className: `framer-djti7m`,
                              fonts: [`Inter`],
                              layoutDependency: z,
                              layoutId: `VIXSHQrBs`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: C,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  ztgnbX6dc: {
                                    children: o(t, {
                                      children: o(f.p, {
                                        style: {
                                          "--framer-font-size": `18px`,
                                          "--framer-line-height": `150%`,
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: `Category`,
                                      }),
                                    }),
                                  },
                                },
                                j,
                                I
                              ),
                            }),
                            o(k, {
                              __fromCanvasComponent: !0,
                              children: o(t, {
                                children: o(f.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItQm9sZA==`,
                                    "--framer-font-size": `32px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-line-height": `100%`,
                                  },
                                  children: `Project name`,
                                }),
                              }),
                              className: `framer-1yh2ivb`,
                              fonts: [`Inter-Bold`],
                              layoutDependency: z,
                              layoutId: `ZDf1u1cRr`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: w,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  ztgnbX6dc: {
                                    children: o(t, {
                                      children: o(f.p, {
                                        style: {
                                          "--font-selector": `SW50ZXItQm9sZA==`,
                                          "--framer-font-size": `24px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `100%`,
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: `Project name`,
                                      }),
                                    }),
                                  },
                                },
                                j,
                                I
                              ),
                            }),
                            ce() &&
                              o(k, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(f.p, {
                                    style: {
                                      "--framer-font-size": `12px`,
                                      "--framer-line-height": `100%`,
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(117, 117, 117))`,
                                    },
                                    children: `Nov 2025`,
                                  }),
                                }),
                                className: `framer-uwf52t`,
                                fonts: [`Inter`],
                                layoutDependency: z,
                                layoutId: `F2w3yOjGg`,
                                style: {
                                  "--extracted-r6o4lv": `rgb(117, 117, 117)`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: ue,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            V() &&
                              o(k, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(f.p, {
                                    style: {
                                      "--framer-font-size": `12px`,
                                      "--framer-line-height": `100%`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(117, 117, 117))`,
                                    },
                                    children: `Nov 2025`,
                                  }),
                                }),
                                className: `framer-zevams`,
                                fonts: [`Inter`],
                                layoutDependency: z,
                                layoutId: `m5SHDoLOG`,
                                style: {
                                  "--extracted-r6o4lv": `rgb(117, 117, 117)`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: ue,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            V() &&
                              o(f.div, {
                                className: `framer-16zx0o8`,
                                layoutDependency: z,
                                layoutId: `wgkNllf08`,
                                children:
                                  V() &&
                                  o(k, {
                                    __fromCanvasComponent: !0,
                                    children: o(t, {
                                      children: o(f.p, {
                                        style: {
                                          "--font-selector": `SW50ZXItQm9sZA==`,
                                          "--framer-font-size": `20px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `100%`,
                                        },
                                        children: o(M, {
                                          href: D,
                                          motionChild: !0,
                                          nodeId: `SLztPNa_i`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `GF12J4iSw`,
                                          smoothScroll: !1,
                                          children: o(f.a, {
                                            className: `framer-styles-preset-aqyyvd`,
                                            "data-styles-preset": `E1cy6o9Uk`,
                                            children: `Read more`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1js70mr`,
                                    fonts: [`Inter-Bold`],
                                    layoutDependency: z,
                                    layoutId: `SLztPNa_i`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                              }),
                            o(k, {
                              __fromCanvasComponent: !0,
                              children: o(t, {
                                children: l(f.p, {
                                  style: {
                                    "--framer-line-height": `150%`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(114, 114, 114))`,
                                  },
                                  children: [
                                    `Description - Lorem ipsum dolor sit `,
                                    o(f.br, {}),
                                    `amet adipis`,
                                  ],
                                }),
                              }),
                              className: `framer-16gresj`,
                              fonts: [`Inter`],
                              layoutDependency: z,
                              layoutId: `tNc1Pm8NQ`,
                              style: {
                                "--extracted-r6o4lv": `rgb(114, 114, 114)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: T,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  ztgnbX6dc: {
                                    children: o(t, {
                                      children: o(f.p, {
                                        style: {
                                          "--framer-font-size": `14px`,
                                          "--framer-line-height": `150%`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(114, 114, 114))`,
                                        },
                                        children: `Description - Lorem ipsum dolor sit amet adipis`,
                                      }),
                                    }),
                                  },
                                },
                                j,
                                I
                              ),
                            }),
                            ce() &&
                              o(f.div, {
                                className: `framer-quk4c0`,
                                layoutDependency: z,
                                layoutId: `ap2LdrpYi`,
                                children:
                                  ce() &&
                                  o(k, {
                                    __fromCanvasComponent: !0,
                                    children: o(t, {
                                      children: o(f.p, {
                                        style: {
                                          "--font-selector": `SW50ZXItQm9sZA==`,
                                          "--framer-font-size": `20px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `100%`,
                                          "--framer-text-alignment": `center`,
                                        },
                                        children: o(M, {
                                          href: D,
                                          motionChild: !0,
                                          nodeId: `mJieQw_2o`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `GF12J4iSw`,
                                          smoothScroll: !1,
                                          children: o(f.a, {
                                            className: `framer-styles-preset-aqyyvd`,
                                            "data-styles-preset": `E1cy6o9Uk`,
                                            children: `Read more`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1ykwien`,
                                    fonts: [`Inter-Bold`],
                                    layoutDependency: z,
                                    layoutId: `mJieQw_2o`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                              }),
                          ],
                        }),
                        o(B, {
                          height: 56,
                          y: (p?.y || 0) + 0 + (((p?.height || 644) - 0 - 844) / 2 + 450 + 0) + 169,
                          ...X(
                            {
                              hTTpL0qkX: {
                                y:
                                  (p?.y || 0) +
                                  0 +
                                  (((p?.height || 712) -
                                    0 -
                                    (Math.max(0, ((p?.height || 712) - 0 - 590) / 1) * 1 +
                                      590 +
                                      0)) /
                                    2 +
                                    Math.max(0, ((p?.height || 712) - 0 - 590) / 1) * 1 +
                                    0) +
                                  267,
                              },
                              ztgnbX6dc: {
                                y:
                                  (p?.y || 0) +
                                  0 +
                                  (((p?.height || 631) - 0 - 918) / 2 + 320 + 0) +
                                  32 +
                                  0,
                              },
                            },
                            j,
                            I
                          ),
                          children: o(S, {
                            className: `framer-1jeqzej-container`,
                            layoutDependency: z,
                            layoutId: `nVXKYIIxi-container`,
                            nodeId: `nVXKYIIxi`,
                            rendersWithMotion: !0,
                            scopeId: `GF12J4iSw`,
                            children: o(Y, {
                              height: `100%`,
                              id: `nVXKYIIxi`,
                              layoutId: `nVXKYIIxi`,
                              variant: y,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-4UTJi.framer-15jbhrv, .framer-4UTJi .framer-15jbhrv { display: block; }`,
          `.framer-4UTJi.framer-11ka6fz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-4UTJi .framer-2vwdkb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 450px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 523px; }`,
          `.framer-4UTJi .framer-1j6eu0k-container { bottom: 24px; flex: none; height: auto; left: 24px; position: absolute; width: auto; z-index: 1; }`,
          `.framer-4UTJi .framer-t8qv57 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 32px 40px 32px 40px; position: relative; width: 523px; }`,
          `.framer-4UTJi .framer-1d1ost1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-4UTJi .framer-djti7m { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-4UTJi .framer-1yh2ivb, .framer-4UTJi .framer-uwf52t, .framer-4UTJi .framer-zevams, .framer-4UTJi .framer-16gresj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-4UTJi .framer-16zx0o8, .framer-4UTJi .framer-quk4c0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 200px; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-4UTJi .framer-1js70mr, .framer-4UTJi .framer-1ykwien { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-4UTJi .framer-1jeqzej-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-4UTJi.framer-v-a2fm7k.framer-11ka6fz { height: 712px; width: 520px; }`,
          `.framer-4UTJi.framer-v-a2fm7k .framer-2vwdkb { flex: 1 0 0px; height: 1px; width: 100%; }`,
          `.framer-4UTJi.framer-v-a2fm7k .framer-t8qv57 { padding: 32px; width: 100%; }`,
          `.framer-4UTJi.framer-v-a2fm7k .framer-djti7m, .framer-4UTJi.framer-v-ak3fne .framer-1jeqzej-container { order: 0; }`,
          `.framer-4UTJi.framer-v-a2fm7k .framer-1yh2ivb { order: 1; }`,
          `.framer-4UTJi.framer-v-a2fm7k .framer-zevams { order: 4; }`,
          `.framer-4UTJi.framer-v-a2fm7k .framer-16zx0o8 { min-height: unset; order: 5; }`,
          `.framer-4UTJi.framer-v-a2fm7k .framer-16gresj { order: 3; }`,
          `.framer-4UTJi.framer-v-ak3fne .framer-2vwdkb { align-self: stretch; height: 320px; width: auto; }`,
          `.framer-4UTJi.framer-v-ak3fne .framer-1j6eu0k-container { left: 50%; }`,
          `.framer-4UTJi.framer-v-ak3fne .framer-t8qv57 { flex-direction: column; width: 320px; }`,
          `.framer-4UTJi.framer-v-ak3fne .framer-1d1ost1 { align-content: center; align-items: center; flex: none; order: 1; width: 241px; }`,
          `.framer-4UTJi.framer-v-ak3fne .framer-quk4c0 { min-height: unset; }`,
          ..._e,
        ],
        `framer-4UTJi`
      )),
      (Z.displayName = `Card`),
      (Z.defaultProps = { height: 644, width: 523 }),
      w(Z, {
        variant: {
          options: [`r1w08lc3q`, `hTTpL0qkX`, `ztgnbX6dc`],
          optionTitles: [`Bottom right`, `All round`, `Mobile`],
          title: `Variant`,
          type: D.Enum,
        },
        KQUCvl5et: wt?.variant && {
          ...wt.variant,
          defaultValue: `dFYPNeX9Z`,
          description: void 0,
          hidden: void 0,
          title: `Project visibility`,
        },
        D4JFAdc6i: {
          defaultValue: `Category`,
          displayTextArea: !1,
          title: `Category`,
          type: D.String,
        },
        qVcR_Smrz: {
          defaultValue: `Project name`,
          displayTextArea: !1,
          title: `Project name`,
          type: D.String,
        },
        H7C97Eu6c: {
          defaultValue: `Description - Lorem ipsum dolor sit amet adipis`,
          displayTextArea: !1,
          title: `Description`,
          type: D.String,
        },
        H8LJ3thMf: {
          __defaultAssetReference: `data:framer/asset-reference,38lysfzMwqO6T8wa4y8ghzSA.jpg?originalFilename=pexels-aditya-aiyar-615049-1407305.jpg&width=3024&height=4032`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,38lysfzMwqO6T8wa4y8ghzSA.jpg?originalFilename=pexels-aditya-aiyar-615049-1407305.jpg&width=3024&height=4032`,
          },
          title: `Image`,
          type: D.ResponsiveImage,
        },
        i_O1Is8BV: Tt?.variant && {
          ...Tt.variant,
          defaultValue: `BTO_xytvh`,
          description: void 0,
          hidden: void 0,
          title: `Business Partner`,
        },
        LruDvQpYl: { title: `Link`, type: D.Link },
        nChQMbWzi: { defaultValue: `2025-11-16T00:00:00.000Z`, title: `Date`, type: D.Date },
      }),
      V(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
            ],
          },
          ...St,
          ...Ct,
          ...y(ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  Q,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  $,
  mn;
e(() => {
  (u(),
    T(),
    h(),
    r(),
    We(),
    et(),
    Ht(),
    Se(),
    we(),
    De(),
    (Ut = v(Ce)),
    (Wt = v(Z)),
    (Gt = v(W)),
    (Kt = U(f.div)),
    (qt = C(f.div)),
    (Jt = v(K)),
    (Yt = {
      cT0oGnq0S: `(max-width: 809.98px)`,
      D2RFb9sz1: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (Xt = () => typeof document < `u`),
    (Zt = []),
    (Qt = `framer-Ttar1`),
    ($t = {
      cT0oGnq0S: `framer-v-10e6z3q`,
      D2RFb9sz1: `framer-v-1594ls3`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (en = (e, t, n) => (e && t ? `position` : n)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (tn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -150,
      y: 0,
    }),
    (nn = { delay: 0, duration: 0.4, ease: [0.5, 0, 0.88, 0.77], type: `tween` }),
    (rn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: nn,
      x: -150,
      y: 0,
    }),
    (an = (e, t) => {
      switch (e) {
        case `WGYAzNx4F`:
          return `dFYPNeX9Z`;
        default:
          return `En_EzY2cQ`;
      }
    }),
    (on = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (sn = (e, t) => {
      switch (e) {
        case `t_hWbfw2h`:
          return `BTO_xytvh`;
        case `OrOzuaR3I`:
          return `SGi0DvBQG`;
        case `VVEVAGIe6`:
          return `EJbLJeOH3`;
        case `oSfmFN5kG`:
          return `MtoXSlXGI`;
        case `gKP0Eud58`:
          return `oQ57iFWLA`;
        case `HmZr6KcyS`:
          return `dKYKcSqcz`;
        default:
          return `BTO_xytvh`;
      }
    }),
    (cn = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (ln = () => ({
      from: { alias: `a5hY7_qKM`, data: Te, type: `Collection` },
      select: [
        { collection: `a5hY7_qKM`, name: `MNDPyEtDT`, type: `Identifier` },
        { collection: `a5hY7_qKM`, name: `lnUiUHsEo`, type: `Identifier` },
        { collection: `a5hY7_qKM`, name: `WfgYieG_g`, type: `Identifier` },
        { collection: `a5hY7_qKM`, name: `oUrnuHZfq`, type: `Identifier` },
        { collection: `a5hY7_qKM`, name: `nJxSfN0Eu`, type: `Identifier` },
        { collection: `a5hY7_qKM`, name: `h0H25p5JB`, type: `Identifier` },
        { collection: `a5hY7_qKM`, name: `VOlyYeT7O`, type: `Identifier` },
        { collection: `a5hY7_qKM`, name: `Oq3rJECoL`, type: `Identifier` },
        { collection: `a5hY7_qKM`, name: `id`, type: `Identifier` },
      ],
    })),
    (un = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ie(e, t, `a5hY7_qKM`);
      return n(z(r), i, a);
    }),
    (dn = { Desktop: `WQLkyLRf1`, Phone: `cT0oGnq0S`, Tablet: `D2RFb9sz1` }),
    (fn = ({ value: e }) =>
      j()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (pn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: dn[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    ($ = E(
      i(function (e, r) {
        let i = c(null),
          u = r ?? i,
          h = a(),
          { activeLocale: g, setLocale: v } = N(),
          y = R(),
          { style: S, className: C, layoutId: w, variant: T, ...ee } = pn(e);
        te(n(() => Ee({}, g), [g]));
        let [E, D] = ce(T, Yt, !1),
          { activeVariantCallback: A, delay: j } = ue(void 0),
          F = ({ loadMore: e }) =>
            A(async (...t) => {
              e();
            }),
          ie = b(Qt),
          z = s(se)?.isLayoutTemplate,
          de = !!s(p)?.transition?.layout,
          V = en(z, de);
        I();
        let U = ae(`UA2V9xo4X`),
          pe = oe(),
          me = () => !Xt() || E !== `cT0oGnq0S`,
          he = () => !Xt() || E === `cT0oGnq0S`;
        return (
          O({}),
          o(se.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: dn,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: $t,
            },
            children: l(m, {
              id: w ?? h,
              children: [
                o(fn, { value: `html body { background: rgb(255, 255, 255); }` }),
                l(f.div, {
                  ...ee,
                  className: b(ie, `framer-72rtr7`, C),
                  ref: u,
                  style: { ...S },
                  children: [
                    o(fe, {
                      links: [
                        {
                          href: {
                            hash: `:MNDPyEtDT-:UA2V9xo4X`,
                            hashVariables: {
                              MNDPyEtDT: `mobile-banking-app-redesign-copy-copy-copy`,
                            },
                            unresolvedHashSlugs: {
                              MNDPyEtDT: {
                                collectionId: `AcQ8tZaTg`,
                                collectionItemId: `QTgtN6IPx`,
                              },
                            },
                            webPageId: `augiA20Il`,
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            hash: `:MNDPyEtDT-:UA2V9xo4X`,
                            hashVariables: {
                              MNDPyEtDT: `mobile-banking-app-redesign-copy-copy-copy`,
                            },
                            unresolvedHashSlugs: {
                              MNDPyEtDT: {
                                collectionId: `AcQ8tZaTg`,
                                collectionItemId: `QTgtN6IPx`,
                              },
                            },
                            webPageId: `augiA20Il`,
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            hash: `:MNDPyEtDT-:UA2V9xo4X`,
                            hashVariables: {
                              MNDPyEtDT: `mobile-banking-app-redesign-copy-copy-copy`,
                            },
                            unresolvedHashSlugs: {
                              MNDPyEtDT: {
                                collectionId: `AcQ8tZaTg`,
                                collectionItemId: `QTgtN6IPx`,
                              },
                            },
                            webPageId: `augiA20Il`,
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (e) =>
                        o(B, {
                          height: 88,
                          width: y?.width || `100vw`,
                          y: (y?.y || 0) + 0 + 0,
                          children: o(L, {
                            className: `framer-w84qof-container`,
                            layout: V,
                            nodeId: `LnxjaasQi`,
                            scopeId: `augiA20Il`,
                            children: o(P, {
                              breakpoint: E,
                              overrides: {
                                cT0oGnq0S: {
                                  CF6SqYrUw: e[1],
                                  style: { width: `100%` },
                                  variant: Q(`hC8G37n1K`),
                                },
                                D2RFb9sz1: {
                                  CF6SqYrUw: e[2],
                                  style: { width: `100%` },
                                  variant: Q(`zyA88BTGG`),
                                },
                              },
                              children: o(Ce, {
                                CF6SqYrUw: e[0],
                                height: `100%`,
                                id: `LnxjaasQi`,
                                layoutId: `LnxjaasQi`,
                                style: { height: `100%`, width: `100%` },
                                variant: Q(`f7mkPhfX6`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                    }),
                    o(f.div, {
                      className: `framer-chgukb`,
                      "data-framer-name": `Body`,
                      layout: V,
                      children: l(`div`, {
                        className: `framer-1x84i0j`,
                        "data-framer-name": `Hero`,
                        children: [
                          l(`div`, {
                            className: `framer-wygtcx`,
                            "data-framer-name": `Card`,
                            children: [
                              o(P, {
                                breakpoint: E,
                                overrides: {
                                  cT0oGnq0S: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 388,
                                      intrinsicWidth: 633,
                                      loading: x((y?.y || 0) + 0 + 88 + 0 + 0 + 40 + 0 + 0 + 0),
                                      pixelHeight: 776,
                                      pixelWidth: 1266,
                                      sizes: `calc(${y?.width || `100vw`} - 48px)`,
                                      src: `../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png?width=1266&height=776`,
                                      srcSet: `../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png?scale-down-to=512&width=1266&height=776 512w,../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png 1024w,../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png?width=1266&height=776 1266w`,
                                    },
                                  },
                                  D2RFb9sz1: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 388,
                                      intrinsicWidth: 633,
                                      loading: x((y?.y || 0) + 0 + 88 + 40 + 0 + 0 + 0 + 0 + 0),
                                      pixelHeight: 776,
                                      pixelWidth: 1266,
                                      sizes: `calc(${y?.width || `100vw`} - 160px)`,
                                      src: `../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png?width=1266&height=776`,
                                      srcSet: `../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png?scale-down-to=512&width=1266&height=776 512w,../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png 1024w,../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png?width=1266&height=776 1266w`,
                                    },
                                  },
                                },
                                children: o(re, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 388,
                                    intrinsicWidth: 633,
                                    loading: x((y?.y || 0) + 0 + 88 + 48 + 0 + 0 + 0 + 0),
                                    pixelHeight: 776,
                                    pixelWidth: 1266,
                                    sizes: `max((${y?.width || `100vw`} - 240px) / 2, 1px)`,
                                    src: `../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png?width=1266&height=776`,
                                    srcSet: `../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png?scale-down-to=512&width=1266&height=776 512w,../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png 1024w,../../assets/images/z39w1jdMrPnNvxFYhXeFr0Zg4Q8.png?width=1266&height=776 1266w`,
                                  },
                                  className: `framer-a51c5e`,
                                  "data-framer-name": `Image`,
                                }),
                              }),
                              l(`div`, {
                                className: `framer-1inr46b`,
                                children: [
                                  l(`div`, {
                                    className: `framer-d082lq`,
                                    children: [
                                      o(P, {
                                        breakpoint: E,
                                        overrides: {
                                          cT0oGnq0S: {
                                            children: o(t, {
                                              children: l(`p`, {
                                                style: {
                                                  "--framer-font-size": `32px`,
                                                  "--framer-line-height": `112.3%`,
                                                  "--framer-text-alignment": `center`,
                                                },
                                                children: [
                                                  `Hi! My name `,
                                                  o(`br`, {}),
                                                  `is `,
                                                  o(`span`, {
                                                    style: {
                                                      "--font-selector": `SW50ZXItQm9sZA==`,
                                                      "--framer-font-weight": `700`,
                                                    },
                                                    children: `Filipe Lima`,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          },
                                        },
                                        children: o(k, {
                                          __fromCanvasComponent: !0,
                                          children: l(t, {
                                            children: [
                                              o(`p`, {
                                                style: {
                                                  "--framer-font-size": `32px`,
                                                  "--framer-line-height": `112.3%`,
                                                },
                                                children: `Hi! My name is `,
                                              }),
                                              o(`p`, {
                                                style: {
                                                  "--font-selector": `SW50ZXItQm9sZA==`,
                                                  "--framer-font-size": `32px`,
                                                  "--framer-font-weight": `700`,
                                                  "--framer-line-height": `112.3%`,
                                                },
                                                children: `Filipe Lima`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-1xnufoz`,
                                          "data-framer-name": `Hi! My name is Filipe Lima`,
                                          fonts: [`Inter-Bold`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      o(P, {
                                        breakpoint: E,
                                        overrides: {
                                          cT0oGnq0S: {
                                            children: l(t, {
                                              children: [
                                                o(`p`, {
                                                  style: {
                                                    "--framer-text-color": `rgb(113, 113, 113)`,
                                                  },
                                                  children: `Currently based in Brazil`,
                                                }),
                                                o(`p`, {
                                                  style: {
                                                    "--framer-text-color": `rgb(113, 113, 113)`,
                                                  },
                                                  children: `Get to know me better :)`,
                                                }),
                                              ],
                                            }),
                                          },
                                        },
                                        children: o(k, {
                                          __fromCanvasComponent: !0,
                                          children: l(t, {
                                            children: [
                                              o(`p`, {
                                                style: {
                                                  "--framer-font-size": `20px`,
                                                  "--framer-text-color": `rgb(113, 113, 113)`,
                                                },
                                                children: `Currently based in Brazil`,
                                              }),
                                              o(`p`, {
                                                style: {
                                                  "--framer-font-size": `20px`,
                                                  "--framer-text-color": `rgb(113, 113, 113)`,
                                                },
                                                children: `Get to know me better :)`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-164av2n`,
                                          "data-framer-name": `Currently based in Brazil Get to know me better :)`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  o(M, {
                                    href: { webPageId: `XRJ3kSQ31` },
                                    motionChild: !0,
                                    nodeId: `uykdVGc3t`,
                                    openInNewTab: !1,
                                    scopeId: `augiA20Il`,
                                    children: o(H, {
                                      as: `a`,
                                      className: `framer-1yk9v60 framer-lux5qc`,
                                      "data-framer-name": `tabler:circle-chevron-up`,
                                      fill: `rgba(0,0,0,1)`,
                                      intrinsicHeight: 52,
                                      intrinsicWidth: 52,
                                      svg: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8333 19.5L30.3333 26L23.8333 32.5" stroke="black" stroke-width="4.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26 6.5C23.4392 6.5 20.9035 7.00438 18.5377 7.98435C16.1718 8.96432 14.0222 10.4007 12.2114 12.2114C10.4007 14.0222 8.96431 16.1718 7.98435 18.5377C7.00438 20.9035 6.5 23.4392 6.5 26C6.5 28.5608 7.00438 31.0965 7.98435 33.4623C8.96431 35.8282 10.4007 37.9778 12.2114 39.7886C14.0222 41.5993 16.1718 43.0357 18.5377 44.0157C20.9035 44.9956 23.4392 45.5 26 45.5C28.5608 45.5 31.0965 44.9956 33.4623 44.0157C35.8282 43.0357 37.9778 41.5993 39.7886 39.7886C41.5993 37.9778 43.0357 35.8282 44.0157 33.4623C44.9956 31.0965 45.5 28.5608 45.5 26C45.5 23.4392 44.9956 20.9035 44.0157 18.5377C43.0357 16.1718 41.5993 14.0222 39.7886 12.2114C37.9778 10.4007 35.8282 8.96432 33.4623 7.98435C31.0965 7.00438 28.5608 6.5 26 6.5Z" stroke="black" stroke-width="4.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l(`div`, {
                            className: `framer-1gjgug6`,
                            "data-framer-name": `Text`,
                            children: [
                              o(P, {
                                breakpoint: E,
                                overrides: {
                                  cT0oGnq0S: {
                                    children: o(t, {
                                      children: l(`h1`, {
                                        style: {
                                          "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                                          "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                                          "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on`,
                                          "--framer-font-size": `32px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-letter-spacing": `-0.04em`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-alignment": `left`,
                                        },
                                        children: [
                                          `PRODUCT  `,
                                          o(`br`, {}),
                                          `DESIGNER`,
                                          o(`br`, {}),
                                          `AND`,
                                          o(`br`, {}),
                                          `FRONT`,
                                          o(`br`, {}),
                                          `END`,
                                          o(`br`, {}),
                                          `DEVELOPER.`,
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: o(k, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: l(`h1`, {
                                      style: {
                                        "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                                        "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                                        "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on`,
                                        "--framer-font-size": `40px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: [
                                        `PRODUCT  `,
                                        o(`br`, {}),
                                        `DESIGNER`,
                                        o(`br`, {}),
                                        `AND`,
                                        o(`br`, {}),
                                        `FRONT`,
                                        o(`br`, {}),
                                        `END`,
                                        o(`br`, {}),
                                        `DEVELOPER.`,
                                      ],
                                    }),
                                  }),
                                  className: `framer-owhi0s`,
                                  fonts: [`FS;Panchang-bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(k, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: l(`h1`, {
                                    style: {
                                      "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on`,
                                      "--framer-font-size": `24px`,
                                      "--framer-letter-spacing": `-0.04em`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `rgb(153, 153, 153)`,
                                    },
                                    children: [
                                      `I started my career as a graphic designer in 2018, driven by my passion for Photoshop, CorelDRAW, and Illustrator. My love for design led me to specialize in visual identity and logotypes. Over time, I transitioned into product design and built a solid foundation in front-end development. `,
                                      o(`br`, {}),
                                      o(`br`, {}),
                                      `Originally from a small town in Pernambuco, Brazil, I am now based in Recife.`,
                                    ],
                                  }),
                                }),
                                className: `framer-102auha`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    l(Kt, {
                      __framer__animate: { transition: nn },
                      __framer__animateOnce: !1,
                      __framer__enter: tn,
                      __framer__exit: rn,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-tj5zkk`,
                      "data-framer-name": `Projects`,
                      layout: V,
                      children: [
                        o(P, {
                          breakpoint: E,
                          overrides: {
                            cT0oGnq0S: {
                              children: o(t, {
                                children: o(`h1`, {
                                  style: {
                                    "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                                    "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on`,
                                    "--framer-font-size": `32px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                  },
                                  children: `PROJECTS`,
                                }),
                              }),
                            },
                          },
                          children: o(k, {
                            __fromCanvasComponent: !0,
                            children: o(t, {
                              children: o(`h1`, {
                                style: {
                                  "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                                  "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                                  "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on`,
                                  "--framer-font-size": `40px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `-0.04em`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                },
                                children: `PROJECTS`,
                              }),
                            }),
                            className: `framer-1azq5i4`,
                            fonts: [`FS;Panchang-bold`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        o(`div`, {
                          className: `framer-1h0k8n9`,
                          "data-framer-name": `Projects`,
                          children: o(le, {
                            children: o(un, {
                              pageSize: 4,
                              query: ln(),
                              children: (e, t, n) =>
                                l(d, {
                                  children: [
                                    e?.map(
                                      (
                                        {
                                          h0H25p5JB: e,
                                          id: t,
                                          lnUiUHsEo: n,
                                          MNDPyEtDT: r,
                                          nJxSfN0Eu: i,
                                          Oq3rJECoL: a,
                                          oUrnuHZfq: s,
                                          VOlyYeT7O: c,
                                          WfgYieG_g: l,
                                        },
                                        u
                                      ) => (
                                        (r ??= ``),
                                        (l ??= ``),
                                        (s ??= ``),
                                        (i ??= ``),
                                        o(
                                          m,
                                          {
                                            id: `a5hY7_qKM-${t}`,
                                            children: o(ne.Provider, {
                                              value: { MNDPyEtDT: r },
                                              children: o(`div`, {
                                                className: `framer-1xkvrr3`,
                                                id: `${r}-${U}`,
                                                ref: pe(`${r}-${U}`),
                                                children: o(fe, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { MNDPyEtDT: r },
                                                        webPageId: `WeNSyGoW7`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { MNDPyEtDT: r },
                                                        webPageId: `WeNSyGoW7`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { MNDPyEtDT: r },
                                                        webPageId: `WeNSyGoW7`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (t) =>
                                                    o(P, {
                                                      breakpoint: E,
                                                      overrides: {
                                                        cT0oGnq0S: {
                                                          height: 0,
                                                          width: `min(max(${y?.width || `100vw`} - 48px, 1px), ${y?.width || `100vw`} - 48px)`,
                                                          y:
                                                            (y?.y || 0) +
                                                            0 +
                                                            808.336 +
                                                            80 +
                                                            72 +
                                                            0 +
                                                            96 +
                                                            0,
                                                        },
                                                        D2RFb9sz1: {
                                                          width: `max(max(${y?.width || `100vw`} - 160px, 525px), 1px)`,
                                                          y:
                                                            (y?.y || 0) +
                                                            0 +
                                                            925.872 +
                                                            96 +
                                                            88 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                      },
                                                      children: o(B, {
                                                        height: 700,
                                                        width: `max(max((${y?.width || `100vw`} - 192px) / 2, 525px), 1px)`,
                                                        y:
                                                          (y?.y || 0) +
                                                          0 +
                                                          797.872 +
                                                          120 +
                                                          120 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: o(L, {
                                                          className: `framer-1fr83zb-container`,
                                                          nodeId: `fHOdRtfCP`,
                                                          scopeId: `augiA20Il`,
                                                          children: o(P, {
                                                            breakpoint: E,
                                                            overrides: {
                                                              cT0oGnq0S: {
                                                                LruDvQpYl: t[1],
                                                                style: {
                                                                  height: `100%`,
                                                                  maxWidth: `100%`,
                                                                  width: `100%`,
                                                                },
                                                                variant: Q(`ztgnbX6dc`),
                                                              },
                                                              D2RFb9sz1: { LruDvQpYl: t[2] },
                                                            },
                                                            children: o(Z, {
                                                              D4JFAdc6i: l,
                                                              H7C97Eu6c: i,
                                                              H8LJ3thMf: on(e),
                                                              height: `100%`,
                                                              i_O1Is8BV: sn(c, g),
                                                              id: `fHOdRtfCP`,
                                                              KQUCvl5et: an(n, g),
                                                              layoutId: `fHOdRtfCP`,
                                                              LruDvQpYl: t[0],
                                                              nChQMbWzi: a,
                                                              qVcR_Smrz: s,
                                                              style: {
                                                                height: `100%`,
                                                                width: `100%`,
                                                              },
                                                              variant: Q(`hTTpL0qkX`),
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              }),
                                            }),
                                          },
                                          t
                                        )
                                      )
                                    ),
                                    o(P, {
                                      breakpoint: E,
                                      overrides: {
                                        cT0oGnq0S: {
                                          y: (y?.y || 0) + 0 + 808.336 + 80 + 72 + 96 - 20,
                                        },
                                        D2RFb9sz1: {
                                          y: (y?.y || 0) + 0 + 925.872 + 96 + 88 + 2896 - 20,
                                        },
                                      },
                                      children: o(B, {
                                        height: 40,
                                        y: (y?.y || 0) + 0 + 797.872 + 120 + 120 + 1432 - 20,
                                        children: o(L, {
                                          className: `framer-1cnof2z-container`,
                                          nodeId: `prD23wQ4p`,
                                          scopeId: `augiA20Il`,
                                          children: o(W, {
                                            height: `100%`,
                                            id: `prD23wQ4p`,
                                            layoutId: `prD23wQ4p`,
                                            variant: cn(
                                              t,
                                              { disabled: `HZWFdfmTf`, loading: `HRAXoMV0F` },
                                              Q(`LyYqIhL9G`)
                                            ),
                                            width: `100%`,
                                            Wld3NDzSj: F({ loadMore: n }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(f.div, {
                      className: `framer-6496o`,
                      "data-framer-name": `Previous Experience`,
                      layout: V,
                      children: [
                        o(P, {
                          breakpoint: E,
                          overrides: {
                            cT0oGnq0S: {
                              children: o(t, {
                                children: o(`h1`, {
                                  style: {
                                    "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                                    "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on`,
                                    "--framer-font-size": `32px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                  },
                                  children: `PREVIOUS EXPERIENCE`,
                                }),
                              }),
                            },
                          },
                          children: o(k, {
                            __fromCanvasComponent: !0,
                            children: o(t, {
                              children: o(`h1`, {
                                style: {
                                  "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                                  "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                                  "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on`,
                                  "--framer-font-size": `40px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `-0.04em`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-alignment": `center`,
                                },
                                children: `PREVIOUS EXPERIENCE`,
                              }),
                            }),
                            className: `framer-3b6yzu`,
                            fonts: [`FS;Panchang-bold`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        l(qt, {
                          className: `framer-4dis2z`,
                          tickerEffectAlign: `center`,
                          tickerEffectDirectionModifier: `default`,
                          tickerEffectDraggable: !1,
                          tickerEffectEnabled: !0,
                          tickerEffectGap: 10,
                          tickerEffectHoverModifier: 100,
                          tickerEffectOverflow: `clip`,
                          tickerEffectPosition: `relative`,
                          tickerEffectStackDirection: `row`,
                          tickerEffectVelocity: 50,
                          children: [
                            o(_, {
                              children: o(`div`, {
                                className: `framer-1y3921h`,
                                children: l(H, {
                                  className: `framer-1wr7vfq`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 170.028 32.072" overflow="visible"><g><path d="M 0.028 0.003 L 170.028 0.003 L 170.028 32.055 L 0.028 32.055 Z" fill="transparent"></path><path d="M 47.849 13.602 C 46.605 13.614 45.379 13.898 44.255 14.434 L 44.255 5.692 C 42.822 6.24 41.473 6.987 40.248 7.912 C 39.704 8.349 39.396 9.017 39.418 9.716 L 39.418 31.084 C 41.468 31.765 43.617 32.093 45.776 32.055 C 52.133 32.055 55.727 28.169 55.727 22.62 C 55.727 17.07 53.238 13.602 47.849 13.602 Z M 46.052 28.169 C 45.441 28.203 44.829 28.108 44.255 27.892 L 44.255 18.179 C 45.133 17.82 46.071 17.632 47.019 17.625 C 49.508 17.625 50.752 19.29 50.752 22.481 C 50.752 25.673 49.231 28.171 46.052 28.171 Z M 16.059 22.76 L 14.126 23.869 C 13.849 24.006 13.849 24.147 13.849 24.424 L 13.849 31.5 C 13.849 31.778 13.986 31.916 14.126 31.916 L 16.059 31.916 L 16.059 22.758 Z M 68.028 13.737 C 66.102 13.713 64.29 14.649 63.19 16.236 C 63.057 15.484 62.872 14.743 62.638 14.016 L 60.703 13.739 L 58.767 14.016 L 58.767 31.638 C 59.526 31.883 60.323 31.977 61.117 31.915 L 63.605 31.638 L 63.605 23.034 C 63.605 19.566 65.402 17.762 67.752 17.762 L 69.409 17.762 C 69.616 16.475 69.616 15.163 69.409 13.876 L 68.028 13.739 Z M 19.654 20.675 L 17.164 22.063 L 17.028 22.063 L 17.028 31.638 L 19.792 31.638 C 20.097 31.638 20.344 31.389 20.344 31.083 L 20.344 21.093 C 20.403 20.909 20.328 20.71 20.163 20.61 C 19.999 20.511 19.788 20.538 19.654 20.675 Z M 15.783 6.801 C 13.743 6.785 11.707 6.971 9.703 7.356 C 11.878 4.517 15.258 2.872 18.825 2.915 C 21.517 2.915 24.136 3.792 26.288 5.414 C 26.565 5.69 26.841 5.829 27.117 5.551 C 27.236 5.446 27.304 5.295 27.304 5.135 C 27.304 4.976 27.236 4.825 27.117 4.719 C 24.611 1.653 20.84 -0.086 16.89 0.003 C 11.538 0.1 6.78 3.448 4.865 8.467 L 0.442 10.271 C 0.073 10.548 -0.065 10.825 0.028 11.103 C 0.084 11.265 0.212 11.392 0.374 11.446 C 0.536 11.501 0.714 11.477 0.857 11.382 C 1.987 11.021 3.142 10.743 4.313 10.548 C 4.191 11.188 4.144 11.84 4.175 12.491 C 4.098 16.977 6.349 21.18 10.117 23.592 C 10.393 23.729 10.808 23.729 10.946 23.453 C 11.084 23.174 11.084 22.897 10.809 22.62 C 8.47 20.497 7.159 17.462 7.213 14.297 C 7.171 12.803 7.502 11.325 8.18 9.995 L 12.051 9.718 C 21.449 9.718 29.465 12.908 29.465 16.933 C 29.465 20.956 26.839 21.096 23.661 22.483 C 22.969 22.76 22.969 23.037 22.969 23.315 C 22.969 23.593 23.385 23.732 23.799 23.593 C 29.327 21.928 33.336 18.876 33.336 15.406 C 33.336 11.938 25.595 6.804 15.782 6.804 Z M 98.572 9.715 L 98.572 13.878 L 96.084 13.6 C 90.696 13.6 87.101 17.207 87.101 23.034 C 87.101 28.863 90.556 32.055 96.084 32.055 C 98.573 32.125 101.053 31.75 103.409 30.943 L 103.409 5.693 C 101.976 6.242 100.627 6.988 99.402 7.913 C 98.817 8.316 98.498 9.009 98.572 9.718 Z M 98.572 27.891 C 97.904 28.111 97.201 28.206 96.5 28.169 C 93.32 28.169 92.077 26.088 92.077 23.034 C 92.077 19.982 93.321 17.484 96.5 17.484 L 98.572 17.762 Z M 148.052 28.169 C 145.703 28.169 144.045 26.227 144.045 22.897 C 144.045 19.566 145.426 17.625 148.052 17.625 C 149.138 17.595 150.219 17.783 151.231 18.178 C 151.526 16.956 152.093 15.818 152.89 14.848 C 151.239 13.949 149.376 13.517 147.5 13.599 C 142.108 13.599 139.068 17.347 139.068 22.895 C 139.068 28.447 142.247 32.054 147.638 32.054 C 149.499 32.146 151.353 31.764 153.028 30.944 C 152.215 29.89 151.563 28.721 151.093 27.475 C 150.15 27.95 149.107 28.189 148.052 28.169 Z M 77.011 13.602 C 75.244 13.566 73.479 13.752 71.759 14.156 C 71.482 15.437 71.482 16.762 71.759 18.042 C 73.196 17.631 74.688 17.444 76.182 17.486 C 78.671 17.486 79.914 18.457 79.914 20.538 L 79.914 20.815 L 77.565 20.538 C 73.557 20.538 69.963 22.065 69.963 26.089 C 69.963 30.112 73.142 32.055 77.841 32.055 C 80.083 32.003 82.31 31.677 84.474 31.084 L 84.474 20.956 C 84.474 16.098 81.848 13.74 77.012 13.602 Z M 79.914 28.169 L 77.841 28.169 C 75.629 28.169 74.386 27.476 74.386 25.951 C 74.386 24.424 75.629 23.731 77.841 23.731 L 79.914 23.731 L 79.914 28.171 Z M 161.596 13.602 C 156.206 13.602 153.166 17.347 153.166 22.897 C 153.166 28.448 156.344 32.055 161.596 32.055 C 166.849 32.055 170.028 28.448 170.028 22.897 C 170.028 17.347 166.988 13.602 161.596 13.602 Z M 161.596 28.169 C 158.832 28.169 158.142 25.951 158.142 22.897 C 158.142 19.845 158.832 17.487 161.596 17.487 C 164.362 17.487 165.19 19.706 165.19 22.897 C 165.19 26.089 164.222 28.169 161.596 28.169 Z M 114.467 13.602 C 109.352 13.602 106.175 17.07 106.175 22.897 C 106.175 28.726 109.491 32.055 115.297 32.055 C 117.187 32.118 119.069 31.788 120.825 31.084 C 121.098 29.85 121.098 28.57 120.825 27.337 C 119.219 27.873 117.54 28.154 115.848 28.171 C 113.085 28.171 111.288 27.06 110.872 24.285 L 121.792 24.285 C 121.959 23.462 122.052 22.626 122.068 21.786 C 122.068 16.514 119.028 13.602 114.467 13.602 Z M 110.874 20.677 C 110.91 19.757 111.309 18.889 111.983 18.265 C 112.657 17.64 113.55 17.31 114.467 17.347 C 116.678 17.347 117.507 18.734 117.507 20.677 Z M 133.126 21.233 L 131.052 20.399 C 129.946 19.845 129.393 19.567 129.393 18.735 C 129.393 17.902 130.362 17.349 131.605 17.349 C 133.159 17.389 134.697 17.669 136.166 18.179 C 136.443 16.993 136.443 15.759 136.166 14.572 C 134.516 13.839 132.716 13.506 130.914 13.602 C 127.182 13.602 124.418 15.543 124.418 18.597 C 124.418 21.649 125.524 22.758 128.841 24.147 L 130.362 24.701 C 131.743 25.256 132.157 25.673 132.157 26.644 C 132.157 27.615 130.776 28.171 129.67 28.171 C 127.872 28.196 126.088 27.866 124.418 27.199 C 124.007 28.414 124.007 29.731 124.418 30.946 C 126.285 31.78 128.321 32.16 130.362 32.055 C 134.093 32.055 137.133 30.112 137.133 26.644 C 137.133 23.174 135.888 22.342 133.126 21.233 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    o(H, {
                                      className: `framer-111e3xw`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 170 32.052" overflow="visible"><path d="M 0 0 L 170 0 L 170 32.052 L 0 32.052 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    l(H, {
                                      className: `framer-n12k2t`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 170.028 32.072" overflow="visible"><path d="M 47.849 13.602 C 46.605 13.614 45.379 13.898 44.255 14.434 L 44.255 5.692 C 42.822 6.24 41.473 6.987 40.248 7.912 C 39.704 8.349 39.396 9.017 39.418 9.716 L 39.418 31.084 C 41.468 31.765 43.617 32.093 45.776 32.055 C 52.133 32.055 55.727 28.169 55.727 22.62 C 55.727 17.07 53.238 13.602 47.849 13.602 Z M 46.052 28.169 C 45.441 28.203 44.829 28.108 44.255 27.892 L 44.255 18.179 C 45.133 17.82 46.071 17.632 47.019 17.625 C 49.508 17.625 50.752 19.29 50.752 22.481 C 50.752 25.673 49.231 28.171 46.052 28.171 Z M 16.059 22.76 L 14.126 23.869 C 13.849 24.006 13.849 24.147 13.849 24.424 L 13.849 31.5 C 13.849 31.778 13.986 31.916 14.126 31.916 L 16.059 31.916 L 16.059 22.758 Z M 68.028 13.737 C 66.102 13.713 64.29 14.649 63.19 16.236 C 63.057 15.484 62.872 14.743 62.638 14.016 L 60.703 13.739 L 58.767 14.016 L 58.767 31.638 C 59.526 31.883 60.323 31.977 61.117 31.915 L 63.605 31.638 L 63.605 23.034 C 63.605 19.566 65.402 17.762 67.752 17.762 L 69.409 17.762 C 69.616 16.475 69.616 15.163 69.409 13.876 L 68.028 13.739 Z M 19.654 20.675 L 17.164 22.063 L 17.028 22.063 L 17.028 31.638 L 19.792 31.638 C 20.097 31.638 20.344 31.389 20.344 31.083 L 20.344 21.093 C 20.403 20.909 20.328 20.71 20.163 20.61 C 19.999 20.511 19.788 20.538 19.654 20.675 Z M 15.783 6.801 C 13.743 6.785 11.707 6.971 9.703 7.356 C 11.878 4.517 15.258 2.872 18.825 2.915 C 21.517 2.915 24.136 3.792 26.288 5.414 C 26.565 5.69 26.841 5.829 27.117 5.551 C 27.236 5.446 27.304 5.295 27.304 5.135 C 27.304 4.976 27.236 4.825 27.117 4.719 C 24.611 1.653 20.84 -0.086 16.89 0.003 C 11.538 0.1 6.78 3.448 4.865 8.467 L 0.442 10.271 C 0.073 10.548 -0.065 10.825 0.028 11.103 C 0.084 11.265 0.212 11.392 0.374 11.446 C 0.536 11.501 0.714 11.477 0.857 11.382 C 1.987 11.021 3.142 10.743 4.313 10.548 C 4.191 11.188 4.144 11.84 4.175 12.491 C 4.098 16.977 6.349 21.18 10.117 23.592 C 10.393 23.729 10.808 23.729 10.946 23.453 C 11.084 23.174 11.084 22.897 10.809 22.62 C 8.47 20.497 7.159 17.462 7.213 14.297 C 7.171 12.803 7.502 11.325 8.18 9.995 L 12.051 9.718 C 21.449 9.718 29.465 12.908 29.465 16.933 C 29.465 20.956 26.839 21.096 23.661 22.483 C 22.969 22.76 22.969 23.037 22.969 23.315 C 22.969 23.593 23.385 23.732 23.799 23.593 C 29.327 21.928 33.336 18.876 33.336 15.406 C 33.336 11.938 25.595 6.804 15.782 6.804 Z M 98.572 9.715 L 98.572 13.878 L 96.084 13.6 C 90.696 13.6 87.101 17.207 87.101 23.034 C 87.101 28.863 90.556 32.055 96.084 32.055 C 98.573 32.125 101.053 31.75 103.409 30.943 L 103.409 5.693 C 101.976 6.242 100.627 6.988 99.402 7.913 C 98.817 8.316 98.498 9.009 98.572 9.718 Z M 98.572 27.891 C 97.904 28.111 97.201 28.206 96.5 28.169 C 93.32 28.169 92.077 26.088 92.077 23.034 C 92.077 19.982 93.321 17.484 96.5 17.484 L 98.572 17.762 Z M 148.052 28.169 C 145.703 28.169 144.045 26.227 144.045 22.897 C 144.045 19.566 145.426 17.625 148.052 17.625 C 149.138 17.595 150.219 17.783 151.231 18.178 C 151.526 16.956 152.093 15.818 152.89 14.848 C 151.239 13.949 149.376 13.517 147.5 13.599 C 142.108 13.599 139.068 17.347 139.068 22.895 C 139.068 28.447 142.247 32.054 147.638 32.054 C 149.499 32.146 151.353 31.764 153.028 30.944 C 152.215 29.89 151.563 28.721 151.093 27.475 C 150.15 27.95 149.107 28.189 148.052 28.169 Z M 77.011 13.602 C 75.244 13.566 73.479 13.752 71.759 14.156 C 71.482 15.437 71.482 16.762 71.759 18.042 C 73.196 17.631 74.688 17.444 76.182 17.486 C 78.671 17.486 79.914 18.457 79.914 20.538 L 79.914 20.815 L 77.565 20.538 C 73.557 20.538 69.963 22.065 69.963 26.089 C 69.963 30.112 73.142 32.055 77.841 32.055 C 80.083 32.003 82.31 31.677 84.474 31.084 L 84.474 20.956 C 84.474 16.098 81.848 13.74 77.012 13.602 Z M 79.914 28.169 L 77.841 28.169 C 75.629 28.169 74.386 27.476 74.386 25.951 C 74.386 24.424 75.629 23.731 77.841 23.731 L 79.914 23.731 L 79.914 28.171 Z M 161.596 13.602 C 156.206 13.602 153.166 17.347 153.166 22.897 C 153.166 28.448 156.344 32.055 161.596 32.055 C 166.849 32.055 170.028 28.448 170.028 22.897 C 170.028 17.347 166.988 13.602 161.596 13.602 Z M 161.596 28.169 C 158.832 28.169 158.142 25.951 158.142 22.897 C 158.142 19.845 158.832 17.487 161.596 17.487 C 164.362 17.487 165.19 19.706 165.19 22.897 C 165.19 26.089 164.222 28.169 161.596 28.169 Z M 114.467 13.602 C 109.352 13.602 106.175 17.07 106.175 22.897 C 106.175 28.726 109.491 32.055 115.297 32.055 C 117.187 32.118 119.069 31.788 120.825 31.084 C 121.098 29.85 121.098 28.57 120.825 27.337 C 119.219 27.873 117.54 28.154 115.848 28.171 C 113.085 28.171 111.288 27.06 110.872 24.285 L 121.792 24.285 C 121.959 23.462 122.052 22.626 122.068 21.786 C 122.068 16.514 119.028 13.602 114.467 13.602 Z M 110.874 20.677 C 110.91 19.757 111.309 18.889 111.983 18.265 C 112.657 17.64 113.55 17.31 114.467 17.347 C 116.678 17.347 117.507 18.734 117.507 20.677 Z M 133.126 21.233 L 131.052 20.399 C 129.946 19.845 129.393 19.567 129.393 18.735 C 129.393 17.902 130.362 17.349 131.605 17.349 C 133.159 17.389 134.697 17.669 136.166 18.179 C 136.443 16.993 136.443 15.759 136.166 14.572 C 134.516 13.839 132.716 13.506 130.914 13.602 C 127.182 13.602 124.418 15.543 124.418 18.597 C 124.418 21.649 125.524 22.758 128.841 24.147 L 130.362 24.701 C 131.743 25.256 132.157 25.673 132.157 26.644 C 132.157 27.615 130.776 28.171 129.67 28.171 C 127.872 28.196 126.088 27.866 124.418 27.199 C 124.007 28.414 124.007 29.731 124.418 30.946 C 126.285 31.78 128.321 32.16 130.362 32.055 C 134.093 32.055 137.133 30.112 137.133 26.644 C 137.133 23.174 135.888 22.342 133.126 21.233 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        o(H, {
                                          className: `framer-kvzx4p`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.31 26.366" overflow="visible"><path d="M 8.433 7.91 C 7.189 7.922 5.962 8.206 4.838 8.742 L 4.838 0 C 3.406 0.549 2.056 1.295 0.831 2.22 C 0.287 2.657 -0.02 3.325 0.001 4.024 L 0.001 25.393 C 2.051 26.073 4.201 26.401 6.359 26.363 C 12.716 26.363 16.31 22.478 16.31 16.928 C 16.31 11.378 13.821 7.91 8.433 7.91 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-5atf23`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.496 10.551" overflow="visible"><path d="M 1.797 10.545 C 1.185 10.578 0.573 10.484 0 10.267 L 0 0.555 C 0.878 0.195 1.816 0.007 2.764 0 C 5.253 0 6.496 1.666 6.496 4.856 C 6.496 8.049 4.976 10.546 1.797 10.546 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-owc6v3`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.21 9.158" overflow="visible"><path d="M 2.21 0.002 L 0.276 1.111 C 0 1.248 0 1.388 0 1.666 L 0 8.742 C 0 9.019 0.137 9.158 0.276 9.158 L 2.21 9.158 L 2.21 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-elo28y`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.797 18.197" overflow="visible"><path d="M 9.26 0 C 7.335 -0.024 5.523 0.912 4.423 2.5 C 4.289 1.747 4.104 1.006 3.871 0.279 L 1.935 0.002 L 0 0.279 L 0 17.901 C 0.759 18.146 1.556 18.24 2.35 18.178 L 4.837 17.901 L 4.837 9.297 C 4.837 5.829 6.635 4.025 8.984 4.025 L 10.642 4.025 C 10.848 2.738 10.848 1.426 10.642 0.139 L 9.26 0.002 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-cv5agl`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.336 11.087" overflow="visible"><path d="M 2.626 0.125 L 0.137 1.513 L 0 1.513 L 0 11.087 L 2.764 11.087 C 3.069 11.087 3.317 10.839 3.317 10.532 L 3.317 0.542 C 3.375 0.359 3.3 0.159 3.135 0.06 C 2.971 -0.04 2.76 -0.013 2.626 0.125 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1v7g3xi`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.336 23.682" overflow="visible"><path d="M 15.783 6.801 C 13.743 6.785 11.707 6.971 9.703 7.356 C 11.878 4.517 15.258 2.872 18.825 2.915 C 21.517 2.915 24.136 3.792 26.288 5.414 C 26.565 5.69 26.841 5.829 27.117 5.551 C 27.236 5.446 27.304 5.295 27.304 5.135 C 27.304 4.976 27.236 4.825 27.117 4.719 C 24.611 1.653 20.84 -0.086 16.89 0.003 C 11.538 0.1 6.78 3.448 4.865 8.467 L 0.442 10.271 C 0.073 10.548 -0.065 10.825 0.028 11.103 C 0.084 11.265 0.212 11.392 0.374 11.446 C 0.536 11.501 0.714 11.477 0.857 11.382 C 1.987 11.021 3.142 10.743 4.313 10.548 C 4.191 11.188 4.144 11.84 4.175 12.491 C 4.098 16.977 6.349 21.18 10.117 23.592 C 10.393 23.729 10.808 23.729 10.946 23.453 C 11.084 23.174 11.084 22.897 10.809 22.62 C 8.47 20.497 7.159 17.462 7.213 14.297 C 7.171 12.803 7.502 11.325 8.18 9.995 L 12.051 9.718 C 21.449 9.718 29.465 12.908 29.465 16.933 C 29.465 20.956 26.839 21.096 23.661 22.483 C 22.969 22.76 22.969 23.037 22.969 23.315 C 22.969 23.593 23.385 23.732 23.799 23.593 C 29.327 21.928 33.336 18.876 33.336 15.406 C 33.336 11.938 25.595 6.804 15.782 6.804 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1rvn0ss`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.308 26.37" overflow="visible"><path d="M 11.47 4.021 L 11.47 8.184 L 8.983 7.907 C 3.594 7.907 0 11.514 0 17.341 C 0 23.17 3.455 26.362 8.983 26.362 C 11.472 26.432 13.952 26.057 16.308 25.25 L 16.308 0 C 14.875 0.549 13.526 1.295 12.301 2.22 C 11.715 2.623 11.397 3.316 11.47 4.024 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-tnxju9`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.495 10.693" overflow="visible"><path d="M 6.495 10.406 C 5.827 10.627 5.124 10.722 4.423 10.685 C 1.243 10.685 0 8.603 0 5.55 C 0 2.498 1.245 0 4.423 0 L 6.495 0.277 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1610yn0`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.96 18.478" overflow="visible"><path d="M 8.984 14.58 C 6.635 14.58 4.977 12.637 4.977 9.308 C 4.977 5.977 6.358 4.036 8.984 4.036 C 10.07 4.006 11.15 4.194 12.163 4.589 C 12.458 3.367 13.025 2.229 13.822 1.259 C 12.171 0.36 10.308 -0.072 8.432 0.01 C 3.04 0.01 0 3.758 0 9.306 C 0 14.858 3.178 18.465 8.57 18.465 C 10.431 18.557 12.285 18.175 13.96 17.355 C 13.147 16.301 12.495 15.132 12.024 13.885 C 11.082 14.361 10.039 14.6 8.984 14.58 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1xo60ta`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.511 18.458" overflow="visible"><path d="M 7.047 0.004 C 5.281 -0.032 3.516 0.155 1.796 0.559 C 1.519 1.839 1.519 3.164 1.796 4.445 C 3.233 4.034 4.725 3.846 6.219 3.889 C 8.708 3.889 9.951 4.859 9.951 6.941 L 9.951 7.218 L 7.601 6.941 C 3.594 6.941 0 8.468 0 12.492 C 0 16.515 3.178 18.458 7.878 18.458 C 10.12 18.405 12.347 18.08 14.511 17.487 L 14.511 7.358 C 14.511 2.5 11.885 0.143 7.049 0.004 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1llpgte`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.528 4.44" overflow="visible"><path d="M 5.528 4.439 L 3.455 4.439 C 1.243 4.439 0 3.746 0 2.22 C 0 0.693 1.243 0 3.455 0 L 5.528 0 L 5.528 4.44 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-tnqw9`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.862 18.453" overflow="visible"><path d="M 8.43 0 C 3.04 0 0 3.746 0 9.295 C 0 14.846 3.178 18.453 8.43 18.453 C 13.683 18.453 16.862 14.846 16.862 9.295 C 16.862 3.746 13.822 0 8.43 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1mqh74a`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.049 10.682" overflow="visible"><path d="M 3.455 10.682 C 0.691 10.682 0 8.463 0 5.41 C 0 2.357 0.691 0 3.455 0 C 6.22 0 7.049 2.219 7.049 5.41 C 7.049 8.602 6.081 10.682 3.455 10.682 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1pjeux1`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.893 18.461" overflow="visible"><path d="M 8.292 0 C 3.177 0 0 3.468 0 9.295 C 0 15.124 3.317 18.453 9.122 18.453 C 11.012 18.517 12.894 18.186 14.65 17.483 C 14.924 16.248 14.924 14.968 14.65 13.736 C 13.044 14.271 11.365 14.552 9.673 14.569 C 6.911 14.569 5.114 13.458 4.698 10.683 L 15.617 10.683 C 15.784 9.861 15.877 9.024 15.893 8.184 C 15.893 2.912 12.853 0 8.292 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-20rppa`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.633 3.332" overflow="visible"><path d="M 0 3.332 C 0.036 2.412 0.435 1.545 1.109 0.92 C 1.783 0.296 2.676 -0.034 3.593 0.003 C 5.804 0.003 6.633 1.389 6.633 3.332 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-kizpoq`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.023 18.486" overflow="visible"><path d="M 9.016 7.647 L 6.943 6.814 C 5.836 6.259 5.284 5.982 5.284 5.15 C 5.284 4.316 6.252 3.763 7.495 3.763 C 9.049 3.804 10.587 4.084 12.056 4.594 C 12.333 3.407 12.333 2.173 12.056 0.987 C 10.406 0.253 8.607 -0.08 6.805 0.016 C 3.072 0.016 0.308 1.957 0.308 5.011 C 0.308 8.063 1.415 9.173 4.731 10.561 L 6.252 11.115 C 7.633 11.67 8.048 12.088 8.048 13.058 C 8.048 14.029 6.666 14.585 5.56 14.585 C 3.763 14.611 1.978 14.28 0.308 13.613 C -0.103 14.828 -0.103 16.145 0.308 17.36 C 2.175 18.194 4.211 18.574 6.252 18.469 C 9.983 18.469 13.023 16.527 13.023 13.058 C 13.023 9.589 11.779 8.757 9.016 7.647 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            o(_, {
                              children: o(`div`, {
                                className: `framer-1dp4t39`,
                                children: l(H, {
                                  className: `framer-1nzwc8v`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172.835 29.82" overflow="visible"><path d="M 0 10.252 L 30.112 2.262 L 30.112 0 L 0 7.991 Z M 30.112 11.235 L 0 11.235 L 0 15.193 L 30.112 15.193 Z M 0 29.819 L 30.112 21.83 L 30.112 16.175 L 0 24.166 L 0 29.82 Z M 57.412 13.913 C 56.188 13.412 54.566 12.924 52.537 12.453 C 52.403 12.421 52.269 12.392 52.134 12.366 L 51.956 12.32 C 50.644 12.026 49.669 11.753 49.028 11.501 C 48.385 11.25 47.903 10.948 47.574 10.593 C 47.245 10.239 47.08 9.781 47.082 9.221 C 47.082 8.335 47.439 7.715 48.155 7.361 C 48.871 7.007 49.899 6.829 51.24 6.829 C 52.882 6.829 54.095 7.081 54.888 7.584 C 55.677 8.085 56.086 8.851 56.115 9.884 L 60.589 9.884 C 60.559 7.847 59.79 6.254 58.285 5.103 C 56.78 3.951 54.477 3.374 51.375 3.374 C 48.484 3.374 46.262 3.884 44.712 4.903 C 43.161 5.921 42.388 7.435 42.388 9.44 C 42.388 10.799 42.694 11.885 43.305 12.696 C 43.916 13.508 44.804 14.173 45.967 14.69 C 47.128 15.206 48.708 15.714 50.705 16.217 L 51.51 16.393 C 52.822 16.719 53.821 17.001 54.506 17.235 C 55.193 17.472 55.728 17.804 56.115 18.231 C 56.504 18.662 56.696 19.215 56.696 19.894 C 56.696 20.957 56.303 21.723 55.513 22.196 C 54.723 22.669 53.507 22.905 51.869 22.905 C 49.989 22.905 48.566 22.588 47.596 21.953 C 46.628 21.318 46.113 20.292 46.054 18.874 L 41.404 18.874 C 41.433 21.295 42.299 23.162 43.998 24.478 C 45.698 25.791 48.232 26.448 51.6 26.446 C 53.807 26.446 55.64 26.144 57.102 25.538 C 58.563 24.934 59.659 24.115 60.388 23.081 C 61.119 22.048 61.484 20.852 61.484 19.494 C 61.484 18.135 61.111 16.918 60.366 16.017 C 59.621 15.119 58.638 14.416 57.414 13.913 Z M 81.472 4.724 C 79.773 3.825 77.715 3.374 75.302 3.374 C 72.887 3.374 70.806 3.854 69.062 4.812 C 67.35 5.738 65.957 7.148 65.06 8.863 C 64.136 10.607 63.674 12.644 63.674 14.977 C 63.674 17.308 64.134 19.214 65.06 20.954 C 65.965 22.678 67.376 24.09 69.108 25.005 C 70.881 25.967 72.989 26.446 75.435 26.446 C 78.387 26.446 80.831 25.818 82.769 24.564 C 84.707 23.308 85.973 21.516 86.57 19.183 L 81.784 19.183 C 81.455 20.216 80.748 21.065 79.662 21.73 C 78.571 22.395 77.194 22.726 75.525 22.726 C 74.063 22.726 72.81 22.402 71.767 21.752 C 70.722 21.102 69.926 20.187 69.376 19.006 C 68.956 18.111 68.697 17.077 68.595 15.907 L 86.703 15.907 C 86.763 15.57 86.793 15.229 86.793 14.887 L 86.793 14.357 C 86.762 12.143 86.292 10.21 85.384 8.554 C 84.493 6.921 83.132 5.587 81.472 4.724 Z M 69.22 10.791 C 69.645 9.656 70.409 8.675 71.411 7.98 C 72.423 7.272 73.691 6.917 75.212 6.917 C 76.732 6.917 77.939 7.211 78.924 7.802 C 79.907 8.392 80.628 9.265 81.092 10.414 C 81.353 11.068 81.518 11.805 81.595 12.629 L 68.721 12.629 C 68.827 12.002 68.993 11.386 69.217 10.789 Z M 96.832 4.481 C 95.774 5.13 94.945 6.105 94.351 7.405 L 93.546 3.729 L 89.162 3.729 L 89.834 8.998 L 89.834 26.093 L 94.574 26.093 L 94.574 11.172 C 95.707 9.378 97.625 8.421 101.047 8.421 L 102.222 8.421 L 102.222 3.507 L 101.013 3.507 C 99.285 3.507 97.891 3.832 96.832 4.481 Z M 120.152 4.724 C 118.453 3.825 116.396 3.374 113.982 3.374 C 111.567 3.374 109.488 3.854 107.744 4.812 C 106.032 5.737 104.637 7.148 103.74 8.863 C 102.817 10.607 102.355 12.644 102.355 14.977 C 102.355 17.308 102.815 19.214 103.74 20.954 C 104.645 22.678 106.057 24.09 107.788 25.005 C 109.561 25.967 111.671 26.446 114.117 26.446 C 117.067 26.446 119.513 25.818 121.451 24.564 C 123.387 23.308 124.655 21.516 125.252 19.183 L 120.466 19.183 C 120.137 20.216 119.428 21.065 118.342 21.73 C 117.253 22.395 115.874 22.726 114.206 22.726 C 112.745 22.726 111.492 22.402 110.449 21.752 C 109.404 21.102 108.608 20.187 108.056 19.006 C 107.637 18.111 107.378 17.077 107.277 15.907 L 125.385 15.907 C 125.444 15.57 125.473 15.229 125.474 14.887 L 125.474 14.357 C 125.445 12.143 124.974 10.21 124.066 8.554 C 123.175 6.921 121.813 5.587 120.152 4.724 Z M 107.899 10.793 C 108.325 9.656 109.09 8.675 110.093 7.98 C 111.105 7.272 112.373 6.917 113.894 6.917 C 115.414 6.917 116.621 7.212 117.604 7.803 C 118.588 8.394 119.31 9.265 119.774 10.414 C 120.035 11.068 120.2 11.807 120.275 12.631 L 107.403 12.631 C 107.508 12.003 107.674 11.387 107.899 10.791 L 107.901 10.791 Z M 172.835 26.093 L 172.209 21.266 L 172.209 11.522 C 172.209 8.629 171.418 6.554 169.838 5.298 C 168.258 4.044 165.858 3.416 162.637 3.416 C 159.419 3.416 157.115 4 155.548 5.165 C 153.984 6.333 153.157 8.051 153.068 10.325 L 157.629 10.325 C 157.629 9.057 158.062 8.148 158.925 7.602 C 159.791 7.055 161.028 6.784 162.637 6.784 C 164.157 6.784 165.337 7.101 166.17 7.736 C 167.005 8.37 167.423 9.515 167.423 11.167 L 167.423 13.161 L 161.611 13.161 C 158.33 13.161 155.884 13.758 154.277 14.955 C 152.666 16.15 151.862 17.826 151.862 19.982 C 151.862 21.281 152.168 22.417 152.779 23.391 C 153.389 24.367 154.299 25.12 155.506 25.65 C 156.716 26.181 158.183 26.446 159.913 26.446 C 162.208 26.446 164.055 25.996 165.458 25.096 C 166.417 24.476 167.215 23.639 167.784 22.655 L 168.454 26.093 Z M 165.812 21.332 C 164.739 22.557 163.145 23.172 161.028 23.172 C 159.596 23.172 158.5 22.883 157.742 22.307 C 156.982 21.732 156.602 20.809 156.6 19.539 C 156.6 18.741 156.781 18.091 157.137 17.59 C 157.495 17.088 158.054 16.726 158.814 16.504 C 159.574 16.285 160.551 16.158 161.742 16.13 L 167.421 16.13 L 167.421 16.528 C 167.421 18.506 166.884 20.106 165.812 21.334 Z M 140.191 3.372 C 138.313 3.372 136.697 3.779 135.339 4.591 C 134.35 5.184 133.549 5.992 132.934 7.015 L 132.23 3.729 L 127.85 3.729 L 128.519 8.51 L 128.519 26.093 L 133.258 26.093 L 133.258 11.015 C 133.733 9.977 134.35 9.155 135.112 8.554 C 136.779 7.238 138.601 7.317 138.85 7.317 C 140.64 7.317 141.972 7.877 142.852 8.998 C 143.731 10.121 144.171 11.819 144.171 14.092 L 144.171 26.093 L 148.91 26.093 L 148.91 13.648 C 148.91 10.254 148.226 7.692 146.856 5.965 C 145.484 4.237 143.261 3.374 140.191 3.374 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    o(H, {
                                      className: `framer-103iybw`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.112 10.252" overflow="visible"><path d="M 0 10.252 L 30.112 2.262 L 30.112 0 L 0 7.991 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-1e8cq65`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.112 3.958" overflow="visible"><path d="M 30.112 0 L 0 0 L 0 3.958 L 30.112 3.958 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-1pu6e3k`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.112 13.645" overflow="visible"><path d="M 0 13.643 L 30.112 5.655 L 30.112 0 L 0 7.991 L 0 13.645 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-16qqpqn`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.08 23.072" overflow="visible"><path d="M 16.008 10.539 C 14.784 10.038 13.162 9.55 11.133 9.079 C 10.999 9.047 10.865 9.018 10.729 8.992 L 10.552 8.946 C 9.24 8.652 8.265 8.379 7.624 8.127 C 6.981 7.876 6.499 7.574 6.17 7.219 C 5.841 6.865 5.676 6.407 5.677 5.847 C 5.677 4.961 6.035 4.341 6.751 3.987 C 7.467 3.632 8.495 3.455 9.836 3.455 C 11.478 3.455 12.691 3.707 13.484 4.21 C 14.273 4.711 14.682 5.477 14.711 6.51 L 19.185 6.51 C 19.154 4.473 18.386 2.88 16.881 1.728 C 15.376 0.577 13.073 0 9.971 0 C 7.08 0 4.858 0.51 3.308 1.529 C 1.757 2.547 0.983 4.061 0.983 6.066 C 0.983 7.425 1.29 8.51 1.9 9.322 C 2.512 10.134 3.4 10.799 4.563 11.316 C 5.723 11.832 7.303 12.34 9.301 12.843 L 10.106 13.019 C 11.418 13.345 12.417 13.627 13.102 13.861 C 13.789 14.097 14.324 14.43 14.711 14.857 C 15.1 15.287 15.292 15.841 15.292 16.52 C 15.292 17.583 14.898 18.349 14.109 18.822 C 13.318 19.295 12.103 19.531 10.465 19.531 C 8.585 19.531 7.162 19.214 6.192 18.579 C 5.224 17.944 4.709 16.918 4.65 15.5 L 0 15.5 C 0.029 17.921 0.895 19.787 2.594 21.104 C 4.293 22.417 6.828 23.074 10.196 23.072 C 12.403 23.072 14.235 22.77 15.698 22.164 C 17.159 21.56 18.254 20.741 18.984 19.706 C 19.715 18.673 20.08 17.478 20.08 16.12 C 20.08 14.761 19.707 13.544 18.962 12.642 C 18.217 11.744 17.234 11.042 16.01 10.539 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-154whwu`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.119 23.072" overflow="visible"><path d="M 17.798 1.35 C 16.098 0.451 14.041 0 11.628 0 C 9.212 0 7.131 0.479 5.388 1.438 C 3.676 2.363 2.282 3.774 1.386 5.489 C 0.462 7.233 0 9.27 0 11.603 C 0 13.934 0.46 15.839 1.386 17.58 C 2.291 19.304 3.702 20.716 5.434 21.631 C 7.206 22.593 9.315 23.072 11.761 23.072 C 14.713 23.072 17.157 22.444 19.095 21.19 C 21.033 19.934 22.299 18.142 22.896 15.809 L 18.11 15.809 C 17.781 16.842 17.073 17.691 15.988 18.356 C 14.897 19.021 13.52 19.352 11.851 19.352 C 10.389 19.352 9.136 19.028 8.093 18.378 C 7.048 17.728 6.252 16.813 5.701 15.632 C 5.282 14.737 5.023 13.702 4.921 12.533 L 23.029 12.533 C 23.089 12.196 23.119 11.855 23.119 11.513 L 23.119 10.983 C 23.088 8.769 22.618 6.836 21.709 5.18 C 20.819 3.547 19.457 2.213 17.798 1.35 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-1gz9zdj`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.874 5.712" overflow="visible"><path d="M 0.499 3.874 C 0.924 2.739 1.688 1.758 2.69 1.063 C 3.702 0.354 4.97 0 6.49 0 C 8.011 0 9.218 0.294 10.203 0.884 C 11.186 1.475 11.907 2.348 12.371 3.497 C 12.632 4.151 12.797 4.888 12.874 5.712 L 0 5.712 C 0.106 5.084 0.272 4.468 0.496 3.872 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-fo1q07`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.059 22.586" overflow="visible"><path d="M 7.67 0.974 C 6.611 1.622 5.783 2.598 5.188 3.897 L 4.384 0.221 L 0 0.221 L 0.672 5.491 L 0.672 22.586 L 5.412 22.586 L 5.412 7.665 C 6.545 5.871 8.463 4.914 11.885 4.914 L 13.059 4.914 L 13.059 0 L 11.851 0 C 10.123 0 8.728 0.324 7.67 0.974 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-1sls3d8`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.119 23.072" overflow="visible"><path d="M 17.798 1.35 C 16.098 0.451 14.041 0 11.628 0 C 9.212 0 7.133 0.479 5.389 1.438 C 3.677 2.363 2.283 3.774 1.386 5.489 C 0.462 7.233 0 9.27 0 11.603 C 0 13.934 0.46 15.839 1.386 17.58 C 2.291 19.304 3.702 20.716 5.434 21.631 C 7.206 22.593 9.316 23.072 11.762 23.072 C 14.713 23.072 17.159 22.444 19.096 21.19 C 21.033 19.934 22.301 18.142 22.897 15.809 L 18.111 15.809 C 17.782 16.842 17.073 17.691 15.988 18.356 C 14.898 19.021 13.52 19.352 11.851 19.352 C 10.39 19.352 9.137 19.028 8.094 18.378 C 7.05 17.728 6.254 16.813 5.701 15.632 C 5.282 14.737 5.023 13.702 4.922 12.533 L 23.03 12.533 C 23.089 12.196 23.119 11.855 23.119 11.513 L 23.119 10.983 C 23.09 8.769 22.62 6.836 21.711 5.18 C 20.821 3.546 19.458 2.213 17.798 1.35 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-1h8fpdk`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.872 5.714" overflow="visible"><path d="M 0.496 3.875 C 0.922 2.739 1.687 1.758 2.69 1.063 C 3.702 0.354 4.97 0 6.49 0 C 8.011 0 9.218 0.295 10.201 0.886 C 11.184 1.477 11.907 2.348 12.371 3.497 C 12.632 4.151 12.797 4.89 12.872 5.714 L 0 5.714 C 0.105 5.086 0.271 4.47 0.496 3.874 L 0.498 3.874 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-4xpgaq`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.973 23.03" overflow="visible"><path d="M 20.973 22.677 L 20.348 17.85 L 20.348 8.105 C 20.348 5.212 19.557 3.138 17.977 1.882 C 16.397 0.628 13.997 0 10.775 0 C 7.557 0 5.253 0.584 3.687 1.749 C 2.122 2.917 1.295 4.635 1.207 6.909 L 5.768 6.909 C 5.768 5.641 6.201 4.731 7.063 4.186 C 7.929 3.639 9.166 3.367 10.775 3.367 C 12.296 3.367 13.475 3.685 14.309 4.319 C 15.144 4.954 15.561 6.098 15.561 7.751 L 15.561 9.744 L 9.749 9.744 C 6.468 9.744 4.022 10.342 2.415 11.539 C 0.804 12.734 0 14.41 0 16.565 C 0 17.865 0.307 19.001 0.917 19.975 C 1.527 20.95 2.437 21.703 3.644 22.233 C 4.854 22.765 6.322 23.03 8.052 23.03 C 10.346 23.03 12.194 22.579 13.596 21.68 C 14.556 21.06 15.353 20.223 15.923 19.239 L 16.593 22.677 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-h7ukw9`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.821 7.042" overflow="visible"><path d="M 9.212 5.202 C 8.139 6.428 6.545 7.042 4.428 7.042 C 2.996 7.042 1.9 6.753 1.142 6.178 C 0.382 5.602 0.002 4.679 0 3.41 C 0 2.611 0.181 1.961 0.537 1.46 C 0.895 0.959 1.454 0.596 2.214 0.375 C 2.974 0.155 3.951 0.029 5.142 0 L 10.821 0 L 10.821 0.398 C 10.821 2.377 10.285 3.977 9.212 5.204 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    o(H, {
                                      className: `framer-gcukok`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.06 22.721" overflow="visible"><path d="M 12.342 0 C 10.464 0 8.848 0.407 7.489 1.219 C 6.501 1.811 5.7 2.62 5.084 3.643 L 4.38 0.356 L 0 0.356 L 0.67 5.138 L 0.67 22.721 L 5.408 22.721 L 5.408 7.643 C 5.884 6.605 6.501 5.783 7.263 5.182 C 8.93 3.865 10.752 3.945 11 3.945 C 12.79 3.945 14.123 4.505 15.002 5.626 C 15.882 6.748 16.322 8.446 16.322 10.72 L 16.322 22.721 L 21.06 22.721 L 21.06 10.276 C 21.06 6.882 20.377 4.319 19.006 2.593 C 17.634 0.864 15.411 0.002 12.342 0.002 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            o(_, {
                              children: o(`div`, {
                                className: `framer-v1lten`,
                                children: l(H, {
                                  className: `framer-rad0bv`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 135.901 42.979" overflow="visible"><g><path d="M 0 0 L 135.901 0 L 135.901 42.979 L 0 42.979 Z" fill="transparent"></path><g transform="translate(0.156 0.049)"><g transform="translate(0.052 0.964)"><path d="M 23.408 0.009 L 17.146 0.009 C 6.958 0.009 3.769 7.032 3.769 10.251 L 3.769 10.275 C 3.77 10.778 3.816 11.232 3.884 11.651 C 4.412 10.872 5.287 10.407 6.223 10.405 C 6.449 10.405 6.665 10.439 6.877 10.49 C 6.904 9.093 8.115 3.102 17.808 3.102 L 23.778 3.102 C 23.346 2.591 23.108 1.943 23.105 1.272 C 23.105 0.816 23.22 0.391 23.408 0.009 Z M 28.481 0.009 C 28.667 0.391 28.783 0.816 28.783 1.272 C 28.783 1.974 28.52 2.61 28.103 3.108 C 28.533 3.108 28.972 3.06 29.388 3.178 C 30.295 3.439 30.778 4.338 30.502 5.405 C 30.17 6.677 28.881 7.707 27.62 7.707 L 22.996 7.701 L 19.505 7.701 C 15.436 7.679 10.43 9.4 7.538 12.426 C 7.193 12.77 5.425 14.933 5.425 14.933 C 3.189 17.64 1.873 21.878 1.127 25.218 C 1.459 25.084 1.809 25.016 2.165 25.013 C 2.991 25.013 3.729 25.377 4.249 25.947 C 4.644 24.175 5.239 21.991 6.093 19.99 L 6.097 19.99 C 6.605 18.798 7.203 17.669 7.911 16.731 C 10.706 12.594 15.799 10.676 20.625 10.794 L 27.996 10.794 L 28 10.776 C 30.829 10.585 33.631 8.255 34.374 5.401 C 35.055 2.785 33.778 0.605 31.456 0.114 C 30.712 -0.045 29.209 0.009 28.479 0.009 M 8.521 16.976 C 9.493 17.32 11.635 17.902 14.992 17.902 L 17.07 17.902 L 17.101 17.886 L 23.317 17.891 C 23.58 17.891 23.748 17.871 24.009 17.927 C 24.78 18.093 25.208 18.811 24.981 19.681 C 24.723 20.674 23.715 21.48 22.73 21.48 L 18.764 21.477 C 18.296 21.477 17.76 21.48 17.286 21.503 C 15.627 21.581 10.929 22.226 8.198 26.917 C 8.031 27.276 7.424 28.768 6.662 32.835 C 6.555 33.812 5.738 34.552 4.763 34.555 C 2.881 34.555 2.781 32.719 3.02 31.259 C 3.036 31.166 3.093 30.902 3.17 30.55 C 2.857 30.671 2.522 30.744 2.165 30.744 C 1.469 30.742 0.798 30.479 0.283 30.007 C 0.201 30.614 0.13 31.224 0.068 31.834 C 0.025 32.088 0.003 32.346 0 32.604 L 0 32.617 C -0.002 35.27 2.13 37.423 4.763 37.425 C 6.027 37.424 7.239 36.917 8.133 36.015 C 9.026 35.113 9.527 33.89 9.526 32.616 C 10.768 24.215 17.89 24.716 17.89 24.716 L 22.28 24.716 L 22.285 24.692 C 24.845 24.463 27.352 22.345 28.024 19.762 C 28.737 17.026 27.119 14.809 24.408 14.809 L 17.064 14.809 C 13.65 14.809 11.852 14.556 10.992 14.371 L 10.891 14.473 C 10.891 14.473 9.282 15.876 8.521 16.976 Z" fill="rgb(0, 0, 0)"></path></g><path d="M 25.997 0.002 C 24.772 0.002 23.78 1.002 23.78 2.236 C 23.78 3.47 24.772 4.47 25.997 4.47 C 27.222 4.47 28.215 3.47 28.215 2.235 C 28.215 1.001 27.222 0 25.997 0 M 2.217 26.611 C 0.993 26.611 0 27.611 0 28.845 C 0 30.079 0.993 31.079 2.217 31.079 C 3.442 31.079 4.435 30.079 4.435 28.844 C 4.435 27.61 3.442 26.609 2.217 26.609 M 6.272 12.002 C 5.256 12.003 4.371 12.701 4.124 13.694 C 3.878 14.688 4.333 15.723 5.229 16.206 C 5.311 16.103 5.392 15.999 5.476 15.897 C 5.476 15.897 7.245 13.736 7.588 13.391 C 7.743 13.228 7.901 13.072 8.062 12.922 C 7.646 12.344 6.981 12.002 6.272 12.002 Z M 86.135 34.828 L 87.012 37.142 L 87.903 34.828 L 88.699 34.828 L 87.293 38.3 C 87.146 38.665 87.035 38.894 86.964 38.988 C 86.806 39.17 86.567 39.262 86.247 39.269 L 85.517 39.269 L 85.517 38.546 L 86.247 38.546 C 86.342 38.546 86.408 38.53 86.447 38.496 C 86.502 38.441 86.543 38.374 86.567 38.3 L 86.68 38.006 L 85.336 34.828 Z M 82.993 37.115 C 83.19 37.283 83.441 37.373 83.699 37.367 C 83.951 37.373 84.195 37.283 84.384 37.115 C 84.577 36.936 84.681 36.679 84.666 36.415 C 84.681 36.147 84.579 35.887 84.388 35.701 C 84.2 35.53 83.953 35.439 83.699 35.446 C 83.443 35.439 83.191 35.521 82.988 35.68 C 82.794 35.837 82.696 36.079 82.696 36.407 C 82.696 36.716 82.794 36.951 82.993 37.115 Z M 82.707 33.475 L 82.707 35.306 C 82.924 34.98 83.285 34.781 83.674 34.771 L 83.805 34.771 C 84.289 34.771 84.681 34.922 84.981 35.225 C 85.281 35.526 85.433 35.923 85.433 36.413 C 85.433 36.918 85.284 37.316 84.987 37.607 C 84.69 37.901 84.303 38.047 83.824 38.047 C 83.772 38.047 83.72 38.044 83.669 38.041 C 83.267 38.028 82.898 37.811 82.69 37.464 L 82.69 37.983 L 81.947 37.983 L 81.947 33.475 Z M 97.478 38.02 L 97.478 42.333 L 95.733 42.333 L 95.733 38.295 C 95.733 37.101 95.019 36.303 93.939 36.303 C 92.786 36.303 91.907 37.208 91.907 38.525 L 91.907 42.331 L 90.159 42.331 L 90.159 34.723 L 91.876 34.723 L 91.876 35.766 L 91.937 35.766 C 92.484 35.031 93.364 34.572 94.382 34.572 C 96.262 34.572 97.479 35.873 97.479 38.02 Z M 110.842 36.44 L 110.842 34.723 L 107.577 34.723 L 107.577 32.073 L 105.832 32.073 L 105.832 34.723 L 100.393 34.723 C 99.088 34.723 98.118 35.628 98.118 36.899 C 98.118 37.912 98.816 38.706 99.88 38.953 L 102.869 39.613 C 103.127 39.673 103.264 39.856 103.264 40.117 C 103.264 40.439 103.051 40.64 102.779 40.64 L 98.419 40.64 L 98.419 42.339 L 102.792 42.339 C 104.113 42.339 105.099 41.406 105.099 40.117 C 105.099 39.09 104.401 38.278 103.307 38.049 L 100.331 37.389 C 100.106 37.348 99.945 37.146 99.952 36.915 C 99.952 36.623 100.15 36.44 100.437 36.44 L 104.473 36.44 L 104.473 36.443 L 105.831 36.44 L 105.831 40.27 C 105.831 41.573 106.605 42.341 107.91 42.341 L 110.84 42.341 L 110.84 40.622 L 108.26 40.622 C 107.819 40.622 107.575 40.377 107.575 39.963 L 107.575 36.437 L 110.84 36.437 Z M 113.101 37.698 L 117.231 37.698 C 117.003 36.746 116.213 36.133 115.151 36.133 C 114.103 36.133 113.313 36.762 113.1 37.697 Z M 119.037 39.136 L 113.068 39.136 C 113.206 40.117 114.024 40.899 115.209 40.93 C 116.06 40.946 116.806 40.562 117.106 39.949 L 118.914 39.949 C 118.428 41.605 116.954 42.554 115.179 42.554 C 112.705 42.554 111.262 40.7 111.262 38.539 C 111.262 36.286 112.858 34.51 115.179 34.51 C 117.684 34.51 119.263 36.517 119.035 39.136 Z M 125.701 37.558 C 125.442 36.792 124.697 36.209 123.71 36.209 C 122.328 36.209 121.463 37.252 121.463 38.539 C 121.463 39.812 122.328 40.868 123.711 40.868 C 124.667 40.868 125.442 40.302 125.701 39.49 L 127.537 39.49 C 127.204 41.251 125.715 42.554 123.697 42.554 C 121.282 42.554 119.718 40.777 119.718 38.525 C 119.718 36.271 121.282 34.508 123.695 34.508 C 125.715 34.508 127.204 35.795 127.535 37.558 Z M 135.667 38.02 L 135.667 42.333 L 133.923 42.333 L 133.923 38.295 C 133.923 37.101 133.208 36.303 132.131 36.303 C 130.977 36.303 130.097 37.206 130.097 38.525 L 130.097 42.331 L 128.351 42.331 L 128.351 31.368 L 130.097 31.368 L 130.097 35.766 L 130.173 35.766 C 130.704 35.031 131.554 34.572 132.572 34.572 C 134.452 34.572 135.669 35.873 135.669 38.018 Z M 54.61 5.62 L 54.61 1.011 L 47.953 1.011 C 44.887 1.011 42.76 3.086 42.76 6.147 L 42.76 8.823 L 40.32 8.823 L 40.32 13.395 L 42.76 13.395 L 42.76 26.343 L 47.464 26.343 L 47.464 13.395 L 54.61 13.395 L 54.61 8.823 L 47.464 8.823 L 47.464 6.923 C 47.464 6.114 48.022 5.62 48.86 5.62 Z M 55.751 18.251 C 55.751 23.529 59.062 26.872 64.254 26.872 C 69.483 26.872 72.725 23.529 72.725 18.251 L 72.725 8.823 L 68.019 8.823 L 68.019 18.181 C 68.019 20.433 66.694 22.263 64.254 22.263 C 61.78 22.263 60.456 20.433 60.456 18.181 L 60.456 8.823 L 55.75 8.823 L 55.75 18.251 Z M 79.651 8.823 C 76.479 8.823 74.039 10.968 74.039 13.994 C 74.039 16.351 75.782 18.216 78.29 18.743 L 84.913 20.186 C 85.266 20.273 85.512 20.594 85.506 20.96 C 85.516 21.168 85.439 21.371 85.293 21.518 C 85.147 21.666 84.946 21.744 84.739 21.734 L 74.771 21.734 L 74.771 26.343 L 84.809 26.343 C 87.98 26.343 90.455 24.161 90.455 21.065 C 90.455 18.603 88.783 16.773 86.168 16.211 L 79.651 14.873 C 79.304 14.8 79.056 14.491 79.058 14.134 C 79.058 13.712 79.338 13.395 79.79 13.395 L 89.2 13.395 L 89.2 8.823 Z M 107.863 26.872 C 113.509 26.872 117.202 22.827 117.202 17.584 C 117.202 12.376 113.544 8.296 107.863 8.296 C 102.18 8.296 98.522 12.376 98.522 17.584 C 98.522 22.825 102.217 26.872 107.861 26.872 Z M 107.863 22.263 C 105.074 22.263 103.226 20.188 103.226 17.584 C 103.226 14.98 105.075 12.87 107.863 12.87 C 110.65 12.87 112.498 14.98 112.498 17.584 C 112.498 20.188 110.617 22.263 107.863 22.263 Z M 128.765 8.328 C 126.605 8.328 124.653 9.315 123.503 10.932 L 123.329 10.932 L 123.329 8.821 L 118.762 8.821 L 118.762 26.343 L 123.468 26.343 L 123.468 17.265 C 123.468 14.626 125.28 12.973 127.406 12.973 C 129.357 12.973 130.961 14.381 130.961 16.915 L 130.961 26.343 L 135.667 26.343 L 135.667 16.211 C 135.667 11.178 132.983 8.329 128.765 8.329 Z M 92.102 8.907 L 92.102 26.341 L 96.842 26.341 L 96.842 8.907 Z M 94.472 2.368 C 95.536 2.367 96.496 3.013 96.903 4.004 C 97.311 4.995 97.084 6.136 96.33 6.893 C 95.303 7.927 93.639 7.927 92.613 6.892 C 91.586 5.857 91.587 4.18 92.614 3.145 C 93.106 2.648 93.775 2.369 94.472 2.368 Z" fill="rgb(0, 0, 0)"></path></g></g></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    o(H, {
                                      className: `framer-8ghp58`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 135.901 42.979" overflow="visible"><path d="M 0 0 L 135.901 0 L 135.901 42.979 L 0 42.979 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    l(H, {
                                      className: `framer-1te5xn4`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 135.669 42.554" overflow="visible"><g><g transform="translate(0.052 0.964)"><path d="M 23.408 0.009 L 17.146 0.009 C 6.958 0.009 3.769 7.032 3.769 10.251 L 3.769 10.275 C 3.77 10.778 3.816 11.232 3.884 11.651 C 4.412 10.872 5.287 10.407 6.223 10.405 C 6.449 10.405 6.665 10.439 6.877 10.49 C 6.904 9.093 8.115 3.102 17.808 3.102 L 23.778 3.102 C 23.346 2.591 23.108 1.943 23.105 1.272 C 23.105 0.816 23.22 0.391 23.408 0.009 Z M 28.481 0.009 C 28.667 0.391 28.783 0.816 28.783 1.272 C 28.783 1.974 28.52 2.61 28.103 3.108 C 28.533 3.108 28.972 3.06 29.388 3.178 C 30.295 3.439 30.778 4.338 30.502 5.405 C 30.17 6.677 28.881 7.707 27.62 7.707 L 22.996 7.701 L 19.505 7.701 C 15.436 7.679 10.43 9.4 7.538 12.426 C 7.193 12.77 5.425 14.933 5.425 14.933 C 3.189 17.64 1.873 21.878 1.127 25.218 C 1.459 25.084 1.809 25.016 2.165 25.013 C 2.991 25.013 3.729 25.377 4.249 25.947 C 4.644 24.175 5.239 21.991 6.093 19.99 L 6.097 19.99 C 6.605 18.798 7.203 17.669 7.911 16.731 C 10.706 12.594 15.799 10.676 20.625 10.794 L 27.996 10.794 L 28 10.776 C 30.829 10.585 33.631 8.255 34.374 5.401 C 35.055 2.785 33.778 0.605 31.456 0.114 C 30.712 -0.045 29.209 0.009 28.479 0.009 M 8.521 16.976 C 9.493 17.32 11.635 17.902 14.992 17.902 L 17.07 17.902 L 17.101 17.886 L 23.317 17.891 C 23.58 17.891 23.748 17.871 24.009 17.927 C 24.78 18.093 25.208 18.811 24.981 19.681 C 24.723 20.674 23.715 21.48 22.73 21.48 L 18.764 21.477 C 18.296 21.477 17.76 21.48 17.286 21.503 C 15.627 21.581 10.929 22.226 8.198 26.917 C 8.031 27.276 7.424 28.768 6.662 32.835 C 6.555 33.812 5.738 34.552 4.763 34.555 C 2.881 34.555 2.781 32.719 3.02 31.259 C 3.036 31.166 3.093 30.902 3.17 30.55 C 2.857 30.671 2.522 30.744 2.165 30.744 C 1.469 30.742 0.798 30.479 0.283 30.007 C 0.201 30.614 0.13 31.224 0.068 31.834 C 0.025 32.088 0.003 32.346 0 32.604 L 0 32.617 C -0.002 35.27 2.13 37.423 4.763 37.425 C 6.027 37.424 7.239 36.917 8.133 36.015 C 9.026 35.113 9.527 33.89 9.526 32.616 C 10.768 24.215 17.89 24.716 17.89 24.716 L 22.28 24.716 L 22.285 24.692 C 24.845 24.463 27.352 22.345 28.024 19.762 C 28.737 17.026 27.119 14.809 24.408 14.809 L 17.064 14.809 C 13.65 14.809 11.852 14.556 10.992 14.371 L 10.891 14.473 C 10.891 14.473 9.282 15.876 8.521 16.976 Z" fill="rgb(0, 0, 0)"></path></g><path d="M 25.997 0.002 C 24.772 0.002 23.78 1.002 23.78 2.236 C 23.78 3.47 24.772 4.47 25.997 4.47 C 27.222 4.47 28.215 3.47 28.215 2.235 C 28.215 1.001 27.222 0 25.997 0 M 2.217 26.611 C 0.993 26.611 0 27.611 0 28.845 C 0 30.079 0.993 31.079 2.217 31.079 C 3.442 31.079 4.435 30.079 4.435 28.844 C 4.435 27.61 3.442 26.609 2.217 26.609 M 6.272 12.002 C 5.256 12.003 4.371 12.701 4.124 13.694 C 3.878 14.688 4.333 15.723 5.229 16.206 C 5.311 16.103 5.392 15.999 5.476 15.897 C 5.476 15.897 7.245 13.736 7.588 13.391 C 7.743 13.228 7.901 13.072 8.062 12.922 C 7.646 12.344 6.981 12.002 6.272 12.002 Z M 86.135 34.828 L 87.012 37.142 L 87.903 34.828 L 88.699 34.828 L 87.293 38.3 C 87.146 38.665 87.035 38.894 86.964 38.988 C 86.806 39.17 86.567 39.262 86.247 39.269 L 85.517 39.269 L 85.517 38.546 L 86.247 38.546 C 86.342 38.546 86.408 38.53 86.447 38.496 C 86.502 38.441 86.543 38.374 86.567 38.3 L 86.68 38.006 L 85.336 34.828 Z M 82.993 37.115 C 83.19 37.283 83.441 37.373 83.699 37.367 C 83.951 37.373 84.195 37.283 84.384 37.115 C 84.577 36.936 84.681 36.679 84.666 36.415 C 84.681 36.147 84.579 35.887 84.388 35.701 C 84.2 35.53 83.953 35.439 83.699 35.446 C 83.443 35.439 83.191 35.521 82.988 35.68 C 82.794 35.837 82.696 36.079 82.696 36.407 C 82.696 36.716 82.794 36.951 82.993 37.115 Z M 82.707 33.475 L 82.707 35.306 C 82.924 34.98 83.285 34.781 83.674 34.771 L 83.805 34.771 C 84.289 34.771 84.681 34.922 84.981 35.225 C 85.281 35.526 85.433 35.923 85.433 36.413 C 85.433 36.918 85.284 37.316 84.987 37.607 C 84.69 37.901 84.303 38.047 83.824 38.047 C 83.772 38.047 83.72 38.044 83.669 38.041 C 83.267 38.028 82.898 37.811 82.69 37.464 L 82.69 37.983 L 81.947 37.983 L 81.947 33.475 Z M 97.478 38.02 L 97.478 42.333 L 95.733 42.333 L 95.733 38.295 C 95.733 37.101 95.019 36.303 93.939 36.303 C 92.786 36.303 91.907 37.208 91.907 38.525 L 91.907 42.331 L 90.159 42.331 L 90.159 34.723 L 91.876 34.723 L 91.876 35.766 L 91.937 35.766 C 92.484 35.031 93.364 34.572 94.382 34.572 C 96.262 34.572 97.479 35.873 97.479 38.02 Z M 110.842 36.44 L 110.842 34.723 L 107.577 34.723 L 107.577 32.073 L 105.832 32.073 L 105.832 34.723 L 100.393 34.723 C 99.088 34.723 98.118 35.628 98.118 36.899 C 98.118 37.912 98.816 38.706 99.88 38.953 L 102.869 39.613 C 103.127 39.673 103.264 39.856 103.264 40.117 C 103.264 40.439 103.051 40.64 102.779 40.64 L 98.419 40.64 L 98.419 42.339 L 102.792 42.339 C 104.113 42.339 105.099 41.406 105.099 40.117 C 105.099 39.09 104.401 38.278 103.307 38.049 L 100.331 37.389 C 100.106 37.348 99.945 37.146 99.952 36.915 C 99.952 36.623 100.15 36.44 100.437 36.44 L 104.473 36.44 L 104.473 36.443 L 105.831 36.44 L 105.831 40.27 C 105.831 41.573 106.605 42.341 107.91 42.341 L 110.84 42.341 L 110.84 40.622 L 108.26 40.622 C 107.819 40.622 107.575 40.377 107.575 39.963 L 107.575 36.437 L 110.84 36.437 Z M 113.101 37.698 L 117.231 37.698 C 117.003 36.746 116.213 36.133 115.151 36.133 C 114.103 36.133 113.313 36.762 113.1 37.697 Z M 119.037 39.136 L 113.068 39.136 C 113.206 40.117 114.024 40.899 115.209 40.93 C 116.06 40.946 116.806 40.562 117.106 39.949 L 118.914 39.949 C 118.428 41.605 116.954 42.554 115.179 42.554 C 112.705 42.554 111.262 40.7 111.262 38.539 C 111.262 36.286 112.858 34.51 115.179 34.51 C 117.684 34.51 119.263 36.517 119.035 39.136 Z M 125.701 37.558 C 125.442 36.792 124.697 36.209 123.71 36.209 C 122.328 36.209 121.463 37.252 121.463 38.539 C 121.463 39.812 122.328 40.868 123.711 40.868 C 124.667 40.868 125.442 40.302 125.701 39.49 L 127.537 39.49 C 127.204 41.251 125.715 42.554 123.697 42.554 C 121.282 42.554 119.718 40.777 119.718 38.525 C 119.718 36.271 121.282 34.508 123.695 34.508 C 125.715 34.508 127.204 35.795 127.535 37.558 Z M 135.667 38.02 L 135.667 42.333 L 133.923 42.333 L 133.923 38.295 C 133.923 37.101 133.208 36.303 132.131 36.303 C 130.977 36.303 130.097 37.206 130.097 38.525 L 130.097 42.331 L 128.351 42.331 L 128.351 31.368 L 130.097 31.368 L 130.097 35.766 L 130.173 35.766 C 130.704 35.031 131.554 34.572 132.572 34.572 C 134.452 34.572 135.669 35.873 135.669 38.018 Z M 54.61 5.62 L 54.61 1.011 L 47.953 1.011 C 44.887 1.011 42.76 3.086 42.76 6.147 L 42.76 8.823 L 40.32 8.823 L 40.32 13.395 L 42.76 13.395 L 42.76 26.343 L 47.464 26.343 L 47.464 13.395 L 54.61 13.395 L 54.61 8.823 L 47.464 8.823 L 47.464 6.923 C 47.464 6.114 48.022 5.62 48.86 5.62 Z M 55.751 18.251 C 55.751 23.529 59.062 26.872 64.254 26.872 C 69.483 26.872 72.725 23.529 72.725 18.251 L 72.725 8.823 L 68.019 8.823 L 68.019 18.181 C 68.019 20.433 66.694 22.263 64.254 22.263 C 61.78 22.263 60.456 20.433 60.456 18.181 L 60.456 8.823 L 55.75 8.823 L 55.75 18.251 Z M 79.651 8.823 C 76.479 8.823 74.039 10.968 74.039 13.994 C 74.039 16.351 75.782 18.216 78.29 18.743 L 84.913 20.186 C 85.266 20.273 85.512 20.594 85.506 20.96 C 85.516 21.168 85.439 21.371 85.293 21.518 C 85.147 21.666 84.946 21.744 84.739 21.734 L 74.771 21.734 L 74.771 26.343 L 84.809 26.343 C 87.98 26.343 90.455 24.161 90.455 21.065 C 90.455 18.603 88.783 16.773 86.168 16.211 L 79.651 14.873 C 79.304 14.8 79.056 14.491 79.058 14.134 C 79.058 13.712 79.338 13.395 79.79 13.395 L 89.2 13.395 L 89.2 8.823 Z M 107.863 26.872 C 113.509 26.872 117.202 22.827 117.202 17.584 C 117.202 12.376 113.544 8.296 107.863 8.296 C 102.18 8.296 98.522 12.376 98.522 17.584 C 98.522 22.825 102.217 26.872 107.861 26.872 Z M 107.863 22.263 C 105.074 22.263 103.226 20.188 103.226 17.584 C 103.226 14.98 105.075 12.87 107.863 12.87 C 110.65 12.87 112.498 14.98 112.498 17.584 C 112.498 20.188 110.617 22.263 107.863 22.263 Z M 128.765 8.328 C 126.605 8.328 124.653 9.315 123.503 10.932 L 123.329 10.932 L 123.329 8.821 L 118.762 8.821 L 118.762 26.343 L 123.468 26.343 L 123.468 17.265 C 123.468 14.626 125.28 12.973 127.406 12.973 C 129.357 12.973 130.961 14.381 130.961 16.915 L 130.961 26.343 L 135.667 26.343 L 135.667 16.211 C 135.667 11.178 132.983 8.329 128.765 8.329 Z M 92.102 8.907 L 92.102 26.341 L 96.842 26.341 L 96.842 8.907 Z M 94.472 2.368 C 95.536 2.367 96.496 3.013 96.903 4.004 C 97.311 4.995 97.084 6.136 96.33 6.893 C 95.303 7.927 93.639 7.927 92.613 6.892 C 91.586 5.857 91.587 4.18 92.614 3.145 C 93.106 2.648 93.775 2.369 94.472 2.368 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        o(H, {
                                          className: `framer-1gn2jkp`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.556 37.425" overflow="visible"><g><path d="M 23.408 0.009 L 17.146 0.009 C 6.958 0.009 3.769 7.032 3.769 10.251 L 3.769 10.275 C 3.77 10.778 3.816 11.232 3.884 11.651 C 4.412 10.872 5.287 10.407 6.223 10.405 C 6.449 10.405 6.665 10.439 6.877 10.49 C 6.904 9.093 8.115 3.102 17.808 3.102 L 23.778 3.102 C 23.346 2.591 23.108 1.943 23.105 1.272 C 23.105 0.816 23.22 0.391 23.408 0.009 Z M 28.481 0.009 C 28.667 0.391 28.783 0.816 28.783 1.272 C 28.783 1.974 28.52 2.61 28.103 3.108 C 28.533 3.108 28.972 3.06 29.388 3.178 C 30.295 3.439 30.778 4.338 30.502 5.405 C 30.17 6.677 28.881 7.707 27.62 7.707 L 22.996 7.701 L 19.505 7.701 C 15.436 7.679 10.43 9.4 7.538 12.426 C 7.193 12.77 5.425 14.933 5.425 14.933 C 3.189 17.64 1.873 21.878 1.127 25.218 C 1.459 25.084 1.809 25.016 2.165 25.013 C 2.991 25.013 3.729 25.377 4.249 25.947 C 4.644 24.175 5.239 21.991 6.093 19.99 L 6.097 19.99 C 6.605 18.798 7.203 17.669 7.911 16.731 C 10.706 12.594 15.799 10.676 20.625 10.794 L 27.996 10.794 L 28 10.776 C 30.829 10.585 33.631 8.255 34.374 5.401 C 35.055 2.785 33.778 0.605 31.456 0.114 C 30.712 -0.045 29.209 0.009 28.479 0.009 M 8.521 16.976 C 9.493 17.32 11.635 17.902 14.992 17.902 L 17.07 17.902 L 17.101 17.886 L 23.317 17.891 C 23.58 17.891 23.748 17.871 24.009 17.927 C 24.78 18.093 25.208 18.811 24.981 19.681 C 24.723 20.674 23.715 21.48 22.73 21.48 L 18.764 21.477 C 18.296 21.477 17.76 21.48 17.286 21.503 C 15.627 21.581 10.929 22.226 8.198 26.917 C 8.031 27.276 7.424 28.768 6.662 32.835 C 6.555 33.812 5.738 34.552 4.763 34.555 C 2.881 34.555 2.781 32.719 3.02 31.259 C 3.036 31.166 3.093 30.902 3.17 30.55 C 2.857 30.671 2.522 30.744 2.165 30.744 C 1.469 30.742 0.798 30.479 0.283 30.007 C 0.201 30.614 0.13 31.224 0.068 31.834 C 0.025 32.088 0.003 32.346 0 32.604 L 0 32.617 C -0.002 35.27 2.13 37.423 4.763 37.425 C 6.027 37.424 7.239 36.917 8.133 36.015 C 9.026 35.113 9.527 33.89 9.526 32.616 C 10.768 24.215 17.89 24.716 17.89 24.716 L 22.28 24.716 L 22.285 24.692 C 24.845 24.463 27.352 22.345 28.024 19.762 C 28.737 17.026 27.119 14.809 24.408 14.809 L 17.064 14.809 C 13.65 14.809 11.852 14.556 10.992 14.371 L 10.891 14.473 C 10.891 14.473 9.282 15.876 8.521 16.976 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                          withExternalLayout: !0,
                                          children: l(H, {
                                            className: `framer-1yqhrgn`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34.556 37.425" overflow="visible"><path d="M 23.408 0.009 L 17.146 0.009 C 6.958 0.009 3.769 7.032 3.769 10.251 L 3.769 10.275 C 3.77 10.778 3.816 11.232 3.884 11.651 C 4.412 10.872 5.287 10.407 6.223 10.405 C 6.449 10.405 6.665 10.439 6.877 10.49 C 6.904 9.093 8.115 3.102 17.808 3.102 L 23.778 3.102 C 23.346 2.591 23.108 1.943 23.105 1.272 C 23.105 0.816 23.22 0.391 23.408 0.009 Z M 28.481 0.009 C 28.667 0.391 28.783 0.816 28.783 1.272 C 28.783 1.974 28.52 2.61 28.103 3.108 C 28.533 3.108 28.972 3.06 29.388 3.178 C 30.295 3.439 30.778 4.338 30.502 5.405 C 30.17 6.677 28.881 7.707 27.62 7.707 L 22.996 7.701 L 19.505 7.701 C 15.436 7.679 10.43 9.4 7.538 12.426 C 7.193 12.77 5.425 14.933 5.425 14.933 C 3.189 17.64 1.873 21.878 1.127 25.218 C 1.459 25.084 1.809 25.016 2.165 25.013 C 2.991 25.013 3.729 25.377 4.249 25.947 C 4.644 24.175 5.239 21.991 6.093 19.99 L 6.097 19.99 C 6.605 18.798 7.203 17.669 7.911 16.731 C 10.706 12.594 15.799 10.676 20.625 10.794 L 27.996 10.794 L 28 10.776 C 30.829 10.585 33.631 8.255 34.374 5.401 C 35.055 2.785 33.778 0.605 31.456 0.114 C 30.712 -0.045 29.209 0.009 28.479 0.009 M 8.521 16.976 C 9.493 17.32 11.635 17.902 14.992 17.902 L 17.07 17.902 L 17.101 17.886 L 23.317 17.891 C 23.58 17.891 23.748 17.871 24.009 17.927 C 24.78 18.093 25.208 18.811 24.981 19.681 C 24.723 20.674 23.715 21.48 22.73 21.48 L 18.764 21.477 C 18.296 21.477 17.76 21.48 17.286 21.503 C 15.627 21.581 10.929 22.226 8.198 26.917 C 8.031 27.276 7.424 28.768 6.662 32.835 C 6.555 33.812 5.738 34.552 4.763 34.555 C 2.881 34.555 2.781 32.719 3.02 31.259 C 3.036 31.166 3.093 30.902 3.17 30.55 C 2.857 30.671 2.522 30.744 2.165 30.744 C 1.469 30.742 0.798 30.479 0.283 30.007 C 0.201 30.614 0.13 31.224 0.068 31.834 C 0.025 32.088 0.003 32.346 0 32.604 L 0 32.617 C -0.002 35.27 2.13 37.423 4.763 37.425 C 6.027 37.424 7.239 36.917 8.133 36.015 C 9.026 35.113 9.527 33.89 9.526 32.616 C 10.768 24.215 17.89 24.716 17.89 24.716 L 22.28 24.716 L 22.285 24.692 C 24.845 24.463 27.352 22.345 28.024 19.762 C 28.737 17.026 27.119 14.809 24.408 14.809 L 17.064 14.809 C 13.65 14.809 11.852 14.556 10.992 14.371 L 10.891 14.473 C 10.891 14.473 9.282 15.876 8.521 16.976 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              o(H, {
                                                className: `framer-2wbsx1`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.009 11.642" overflow="visible"><path d="M 19.639 0 L 13.377 0 C 3.189 0 0 7.023 0 10.242 L 0 10.266 C 0.002 10.769 0.047 11.223 0.115 11.642 C 0.644 10.864 1.519 10.398 2.454 10.396 C 2.68 10.396 2.897 10.43 3.108 10.481 C 3.135 9.084 4.346 3.093 14.039 3.093 L 20.009 3.093 C 19.577 2.582 19.339 1.934 19.336 1.263 C 19.336 0.807 19.451 0.382 19.639 0 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              o(H, {
                                                className: `framer-hdvi7b`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.43 25.947" overflow="visible"><path d="M 27.354 0.009 C 27.541 0.391 27.656 0.816 27.656 1.272 C 27.656 1.974 27.394 2.61 26.976 3.108 C 27.406 3.108 27.846 3.06 28.261 3.178 C 29.168 3.439 29.652 4.338 29.375 5.405 C 29.043 6.677 27.754 7.707 26.493 7.707 L 21.869 7.701 L 18.378 7.701 C 14.309 7.679 9.303 9.4 6.411 12.426 C 6.067 12.77 4.298 14.933 4.298 14.933 C 2.062 17.64 0.746 21.878 0 25.218 C 0.332 25.084 0.683 25.016 1.038 25.013 C 1.865 25.013 2.603 25.377 3.123 25.947 C 3.518 24.175 4.112 21.991 4.967 19.99 L 4.97 19.99 C 5.479 18.798 6.076 17.669 6.784 16.731 C 9.579 12.594 14.673 10.676 19.499 10.794 L 26.869 10.794 L 26.874 10.776 C 29.702 10.585 32.504 8.255 33.247 5.401 C 33.928 2.785 32.651 0.605 30.33 0.114 C 29.585 -0.045 28.083 0.009 27.352 0.009" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              o(H, {
                                                className: `framer-17bz4f7`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.192 23.054" overflow="visible"><path d="M 8.521 2.605 C 9.493 2.949 11.635 3.531 14.992 3.531 L 17.07 3.531 L 17.101 3.515 L 23.317 3.52 C 23.58 3.52 23.748 3.501 24.009 3.556 C 24.78 3.722 25.208 4.44 24.981 5.31 C 24.723 6.303 23.715 7.109 22.73 7.109 L 18.764 7.106 C 18.296 7.106 17.76 7.109 17.286 7.132 C 15.627 7.21 10.929 7.855 8.198 12.546 C 8.031 12.905 7.424 14.397 6.662 18.465 C 6.555 19.441 5.738 20.181 4.763 20.185 C 2.881 20.185 2.781 18.348 3.02 16.888 C 3.036 16.795 3.093 16.531 3.17 16.179 C 2.857 16.3 2.522 16.373 2.165 16.373 C 1.469 16.371 0.798 16.108 0.283 15.636 C 0.201 16.243 0.13 16.853 0.068 17.463 C 0.025 17.718 0.003 17.976 0 18.234 L 0 18.246 C -0.002 20.899 2.13 23.052 4.763 23.054 C 6.027 23.053 7.239 22.546 8.133 21.644 C 9.026 20.742 9.527 19.519 9.526 18.245 C 10.768 9.844 17.89 10.345 17.89 10.345 L 22.28 10.345 L 22.285 10.322 C 24.845 10.092 27.352 7.974 28.024 5.391 C 28.737 2.655 27.119 0.438 24.408 0.438 L 17.064 0.438 C 13.65 0.438 11.852 0.185 10.992 0 L 10.891 0.102 C 10.891 0.102 9.282 1.505 8.521 2.605 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                        l(H, {
                                          className: `framer-600bil`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 135.669 42.554" overflow="visible"><path d="M 25.997 0.002 C 24.772 0.002 23.78 1.002 23.78 2.236 C 23.78 3.47 24.772 4.47 25.997 4.47 C 27.222 4.47 28.215 3.47 28.215 2.235 C 28.215 1.001 27.222 0 25.997 0 M 2.217 26.611 C 0.993 26.611 0 27.611 0 28.845 C 0 30.079 0.993 31.079 2.217 31.079 C 3.442 31.079 4.435 30.079 4.435 28.844 C 4.435 27.61 3.442 26.609 2.217 26.609 M 6.272 12.002 C 5.256 12.003 4.371 12.701 4.124 13.694 C 3.878 14.688 4.333 15.723 5.229 16.206 C 5.311 16.103 5.392 15.999 5.476 15.897 C 5.476 15.897 7.245 13.736 7.588 13.391 C 7.743 13.228 7.901 13.072 8.062 12.922 C 7.646 12.344 6.981 12.002 6.272 12.002 Z M 86.135 34.828 L 87.012 37.142 L 87.903 34.828 L 88.699 34.828 L 87.293 38.3 C 87.146 38.665 87.035 38.894 86.964 38.988 C 86.806 39.17 86.567 39.262 86.247 39.269 L 85.517 39.269 L 85.517 38.546 L 86.247 38.546 C 86.342 38.546 86.408 38.53 86.447 38.496 C 86.502 38.441 86.543 38.374 86.567 38.3 L 86.68 38.006 L 85.336 34.828 Z M 82.993 37.115 C 83.19 37.283 83.441 37.373 83.699 37.367 C 83.951 37.373 84.195 37.283 84.384 37.115 C 84.577 36.936 84.681 36.679 84.666 36.415 C 84.681 36.147 84.579 35.887 84.388 35.701 C 84.2 35.53 83.953 35.439 83.699 35.446 C 83.443 35.439 83.191 35.521 82.988 35.68 C 82.794 35.837 82.696 36.079 82.696 36.407 C 82.696 36.716 82.794 36.951 82.993 37.115 Z M 82.707 33.475 L 82.707 35.306 C 82.924 34.98 83.285 34.781 83.674 34.771 L 83.805 34.771 C 84.289 34.771 84.681 34.922 84.981 35.225 C 85.281 35.526 85.433 35.923 85.433 36.413 C 85.433 36.918 85.284 37.316 84.987 37.607 C 84.69 37.901 84.303 38.047 83.824 38.047 C 83.772 38.047 83.72 38.044 83.669 38.041 C 83.267 38.028 82.898 37.811 82.69 37.464 L 82.69 37.983 L 81.947 37.983 L 81.947 33.475 Z M 97.478 38.02 L 97.478 42.333 L 95.733 42.333 L 95.733 38.295 C 95.733 37.101 95.019 36.303 93.939 36.303 C 92.786 36.303 91.907 37.208 91.907 38.525 L 91.907 42.331 L 90.159 42.331 L 90.159 34.723 L 91.876 34.723 L 91.876 35.766 L 91.937 35.766 C 92.484 35.031 93.364 34.572 94.382 34.572 C 96.262 34.572 97.479 35.873 97.479 38.02 Z M 110.842 36.44 L 110.842 34.723 L 107.577 34.723 L 107.577 32.073 L 105.832 32.073 L 105.832 34.723 L 100.393 34.723 C 99.088 34.723 98.118 35.628 98.118 36.899 C 98.118 37.912 98.816 38.706 99.88 38.953 L 102.869 39.613 C 103.127 39.673 103.264 39.856 103.264 40.117 C 103.264 40.439 103.051 40.64 102.779 40.64 L 98.419 40.64 L 98.419 42.339 L 102.792 42.339 C 104.113 42.339 105.099 41.406 105.099 40.117 C 105.099 39.09 104.401 38.278 103.307 38.049 L 100.331 37.389 C 100.106 37.348 99.945 37.146 99.952 36.915 C 99.952 36.623 100.15 36.44 100.437 36.44 L 104.473 36.44 L 104.473 36.443 L 105.831 36.44 L 105.831 40.27 C 105.831 41.573 106.605 42.341 107.91 42.341 L 110.84 42.341 L 110.84 40.622 L 108.26 40.622 C 107.819 40.622 107.575 40.377 107.575 39.963 L 107.575 36.437 L 110.84 36.437 Z M 113.101 37.698 L 117.231 37.698 C 117.003 36.746 116.213 36.133 115.151 36.133 C 114.103 36.133 113.313 36.762 113.1 37.697 Z M 119.037 39.136 L 113.068 39.136 C 113.206 40.117 114.024 40.899 115.209 40.93 C 116.06 40.946 116.806 40.562 117.106 39.949 L 118.914 39.949 C 118.428 41.605 116.954 42.554 115.179 42.554 C 112.705 42.554 111.262 40.7 111.262 38.539 C 111.262 36.286 112.858 34.51 115.179 34.51 C 117.684 34.51 119.263 36.517 119.035 39.136 Z M 125.701 37.558 C 125.442 36.792 124.697 36.209 123.71 36.209 C 122.328 36.209 121.463 37.252 121.463 38.539 C 121.463 39.812 122.328 40.868 123.711 40.868 C 124.667 40.868 125.442 40.302 125.701 39.49 L 127.537 39.49 C 127.204 41.251 125.715 42.554 123.697 42.554 C 121.282 42.554 119.718 40.777 119.718 38.525 C 119.718 36.271 121.282 34.508 123.695 34.508 C 125.715 34.508 127.204 35.795 127.535 37.558 Z M 135.667 38.02 L 135.667 42.333 L 133.923 42.333 L 133.923 38.295 C 133.923 37.101 133.208 36.303 132.131 36.303 C 130.977 36.303 130.097 37.206 130.097 38.525 L 130.097 42.331 L 128.351 42.331 L 128.351 31.368 L 130.097 31.368 L 130.097 35.766 L 130.173 35.766 C 130.704 35.031 131.554 34.572 132.572 34.572 C 134.452 34.572 135.669 35.873 135.669 38.018 Z M 54.61 5.62 L 54.61 1.011 L 47.953 1.011 C 44.887 1.011 42.76 3.086 42.76 6.147 L 42.76 8.823 L 40.32 8.823 L 40.32 13.395 L 42.76 13.395 L 42.76 26.343 L 47.464 26.343 L 47.464 13.395 L 54.61 13.395 L 54.61 8.823 L 47.464 8.823 L 47.464 6.923 C 47.464 6.114 48.022 5.62 48.86 5.62 Z M 55.751 18.251 C 55.751 23.529 59.062 26.872 64.254 26.872 C 69.483 26.872 72.725 23.529 72.725 18.251 L 72.725 8.823 L 68.019 8.823 L 68.019 18.181 C 68.019 20.433 66.694 22.263 64.254 22.263 C 61.78 22.263 60.456 20.433 60.456 18.181 L 60.456 8.823 L 55.75 8.823 L 55.75 18.251 Z M 79.651 8.823 C 76.479 8.823 74.039 10.968 74.039 13.994 C 74.039 16.351 75.782 18.216 78.29 18.743 L 84.913 20.186 C 85.266 20.273 85.512 20.594 85.506 20.96 C 85.516 21.168 85.439 21.371 85.293 21.518 C 85.147 21.666 84.946 21.744 84.739 21.734 L 74.771 21.734 L 74.771 26.343 L 84.809 26.343 C 87.98 26.343 90.455 24.161 90.455 21.065 C 90.455 18.603 88.783 16.773 86.168 16.211 L 79.651 14.873 C 79.304 14.8 79.056 14.491 79.058 14.134 C 79.058 13.712 79.338 13.395 79.79 13.395 L 89.2 13.395 L 89.2 8.823 Z M 107.863 26.872 C 113.509 26.872 117.202 22.827 117.202 17.584 C 117.202 12.376 113.544 8.296 107.863 8.296 C 102.18 8.296 98.522 12.376 98.522 17.584 C 98.522 22.825 102.217 26.872 107.861 26.872 Z M 107.863 22.263 C 105.074 22.263 103.226 20.188 103.226 17.584 C 103.226 14.98 105.075 12.87 107.863 12.87 C 110.65 12.87 112.498 14.98 112.498 17.584 C 112.498 20.188 110.617 22.263 107.863 22.263 Z M 128.765 8.328 C 126.605 8.328 124.653 9.315 123.503 10.932 L 123.329 10.932 L 123.329 8.821 L 118.762 8.821 L 118.762 26.343 L 123.468 26.343 L 123.468 17.265 C 123.468 14.626 125.28 12.973 127.406 12.973 C 129.357 12.973 130.961 14.381 130.961 16.915 L 130.961 26.343 L 135.667 26.343 L 135.667 16.211 C 135.667 11.178 132.983 8.329 128.765 8.329 Z M 92.102 8.907 L 92.102 26.341 L 96.842 26.341 L 96.842 8.907 Z M 94.472 2.368 C 95.536 2.367 96.496 3.013 96.903 4.004 C 97.311 4.995 97.084 6.136 96.33 6.893 C 95.303 7.927 93.639 7.927 92.613 6.892 C 91.586 5.857 91.587 4.18 92.614 3.145 C 93.106 2.648 93.775 2.369 94.472 2.368 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            o(H, {
                                              className: `framer-lqay0n`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.435 4.47" overflow="visible"><path d="M 2.217 0.002 C 0.993 0.002 0 1.002 0 2.236 C 0 3.47 0.993 4.47 2.217 4.47 C 3.442 4.47 4.435 3.47 4.435 2.235 C 4.435 1.001 3.442 0 2.217 0" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-1i1nby`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.435 4.47" overflow="visible"><path d="M 2.217 0.002 C 0.993 0.002 0 1.002 0 2.236 C 0 3.47 0.993 4.47 2.217 4.47 C 3.442 4.47 4.435 3.47 4.435 2.235 C 4.435 1.001 3.442 0 2.217 0" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-1inqemn`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.005 4.204" overflow="visible"><path d="M 2.214 0 C 1.198 0.001 0.313 0.699 0.066 1.692 C -0.18 2.686 0.275 3.721 1.171 4.204 C 1.253 4.101 1.334 3.997 1.418 3.895 C 1.418 3.895 3.188 1.734 3.53 1.389 C 3.685 1.226 3.843 1.07 4.005 0.921 C 3.588 0.342 2.923 0 2.214 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-tc5fti`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.363 4.44" overflow="visible"><path d="M 0.798 0 L 1.675 2.314 L 2.566 0 L 3.363 0 L 1.956 3.472 C 1.809 3.837 1.699 4.066 1.628 4.16 C 1.47 4.341 1.231 4.434 0.91 4.44 L 0.18 4.44 L 0.18 3.717 L 0.91 3.717 C 1.005 3.717 1.071 3.701 1.111 3.668 C 1.165 3.612 1.206 3.545 1.231 3.472 L 1.343 3.177 L 0 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-1phx51m`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.972 1.921" overflow="visible"><path d="M 0.297 1.67 C 0.494 1.837 0.745 1.927 1.003 1.921 C 1.255 1.927 1.499 1.838 1.688 1.67 C 1.881 1.49 1.985 1.233 1.971 0.969 C 1.985 0.702 1.883 0.441 1.692 0.255 C 1.504 0.085 1.257 -0.007 1.003 0 C 0.747 -0.007 0.495 0.076 0.292 0.235 C 0.098 0.391 0 0.633 0 0.961 C 0 1.27 0.098 1.505 0.297 1.67 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-ichoeb`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.486 4.572" overflow="visible"><path d="M 0.76 0 L 0.76 1.831 C 0.977 1.506 1.338 1.306 1.727 1.296 L 1.858 1.296 C 2.342 1.296 2.734 1.448 3.034 1.75 C 3.334 2.051 3.486 2.448 3.486 2.938 C 3.486 3.443 3.337 3.841 3.04 4.133 C 2.743 4.426 2.356 4.572 1.877 4.572 C 1.825 4.572 1.773 4.569 1.722 4.566 C 1.32 4.553 0.952 4.336 0.743 3.989 L 0.743 4.509 L 0 4.509 L 0 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-agk2ey`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.32 7.761" overflow="visible"><path d="M 7.318 3.448 L 7.318 7.761 L 5.574 7.761 L 5.574 3.723 C 5.574 2.529 4.859 1.731 3.78 1.731 C 2.626 1.731 1.748 2.636 1.748 3.953 L 1.748 7.759 L 0 7.759 L 0 0.151 L 1.716 0.151 L 1.716 1.194 L 1.778 1.194 C 2.325 0.459 3.205 0 4.222 0 C 6.103 0 7.32 1.301 7.32 3.448 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-gxh122`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.724 10.267" overflow="visible"><path d="M 12.724 4.367 L 12.724 2.65 L 9.459 2.65 L 9.459 0 L 7.715 0 L 7.715 2.65 L 2.276 2.65 C 0.97 2.65 0 3.555 0 4.826 C 0 5.838 0.698 6.633 1.762 6.88 L 4.752 7.539 C 5.009 7.6 5.147 7.783 5.147 8.044 C 5.147 8.366 4.934 8.567 4.662 8.567 L 0.302 8.567 L 0.302 10.266 L 4.674 10.266 C 5.995 10.266 6.982 9.333 6.982 8.044 C 6.982 7.017 6.283 6.205 5.19 5.975 L 2.214 5.316 C 1.988 5.274 1.827 5.073 1.835 4.841 C 1.835 4.55 2.032 4.367 2.32 4.367 L 6.356 4.367 L 6.356 4.37 L 7.713 4.367 L 7.713 8.197 C 7.713 9.5 8.488 10.267 9.793 10.267 L 12.723 10.267 L 12.723 8.549 L 10.142 8.549 C 9.701 8.549 9.458 8.304 9.458 7.89 L 9.458 4.364 L 12.723 4.364 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-1t1d2s3`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.131 1.566" overflow="visible"><path d="M 0.002 1.566 L 4.131 1.566 C 3.903 0.613 3.113 0 2.051 0 C 1.003 0 0.213 0.629 0 1.564 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-15x2ecs`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.795 8.044" overflow="visible"><path d="M 7.775 4.626 L 1.806 4.626 C 1.944 5.608 2.762 6.389 3.947 6.42 C 4.798 6.436 5.544 6.052 5.844 5.439 L 7.652 5.439 C 7.166 7.095 5.692 8.044 3.917 8.044 C 1.443 8.044 0 6.19 0 4.029 C 0 1.776 1.596 0 3.917 0 C 6.422 0 8.001 2.007 7.773 4.626 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-8p2bha`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.819 8.046" overflow="visible"><path d="M 5.983 3.05 C 5.724 2.284 4.979 1.701 3.992 1.701 C 2.611 1.701 1.745 2.744 1.745 4.031 C 1.745 5.303 2.611 6.359 3.993 6.359 C 4.949 6.359 5.724 5.794 5.983 4.982 L 7.819 4.982 C 7.486 6.743 5.997 8.046 3.979 8.046 C 1.564 8.046 0 6.268 0 4.017 C 0 1.763 1.564 0 3.977 0 C 5.997 0 7.486 1.287 7.817 3.05 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-kgxf9h`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.318 10.965" overflow="visible"><path d="M 7.317 6.652 L 7.317 10.965 L 5.572 10.965 L 5.572 6.928 C 5.572 5.733 4.858 4.935 3.78 4.935 C 2.626 4.935 1.746 5.838 1.746 7.157 L 1.746 10.963 L 0 10.963 L 0 0 L 1.746 0 L 1.746 4.399 L 1.822 4.399 C 2.353 3.663 3.203 3.204 4.221 3.204 C 6.101 3.204 7.318 4.505 7.318 6.651 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-1ro2kbm`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.29 25.332" overflow="visible"><path d="M 14.29 4.609 L 14.29 0 L 7.633 0 C 4.567 0 2.44 2.075 2.44 5.136 L 2.44 7.812 L 0 7.812 L 0 12.384 L 2.44 12.384 L 2.44 25.332 L 7.144 25.332 L 7.144 12.384 L 14.29 12.384 L 14.29 7.812 L 7.144 7.812 L 7.144 5.912 C 7.144 5.103 7.702 4.609 8.54 4.609 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-1x1osdf`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.975 18.049" overflow="visible"><path d="M 0.002 9.428 C 0.002 14.706 3.312 18.049 8.505 18.049 C 13.734 18.049 16.975 14.706 16.975 9.428 L 16.975 0 L 12.269 0 L 12.269 9.358 C 12.269 11.61 10.945 13.44 8.505 13.44 C 6.03 13.44 4.706 11.61 4.706 9.358 L 4.706 0 L 0 0 L 0 9.428 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-rdoz31`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.416 17.52" overflow="visible"><path d="M 5.611 0 C 2.44 0 0 2.145 0 5.171 C 0 7.528 1.743 9.393 4.251 9.92 L 10.874 11.363 C 11.226 11.45 11.472 11.771 11.466 12.137 C 11.477 12.345 11.399 12.548 11.253 12.696 C 11.107 12.843 10.906 12.921 10.7 12.911 L 0.732 12.911 L 0.732 17.52 L 10.769 17.52 C 13.941 17.52 16.416 15.338 16.416 12.242 C 16.416 9.78 14.744 7.95 12.128 7.388 L 5.611 6.05 C 5.265 5.977 5.017 5.668 5.019 5.311 C 5.019 4.889 5.299 4.572 5.751 4.572 L 15.161 4.572 L 15.161 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-1h69wj9`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.68 18.576" overflow="visible"><path d="M 9.341 18.576 C 14.987 18.576 18.68 14.531 18.68 9.288 C 18.68 4.08 15.022 0 9.341 0 C 3.658 0 0 4.08 0 9.288 C 0 14.529 3.695 18.576 9.339 18.576 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-1rqi076`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.271 9.393" overflow="visible"><path d="M 4.636 9.393 C 1.847 9.393 0 7.318 0 4.714 C 0 2.11 1.849 0 4.636 0 C 7.424 0 9.271 2.11 9.271 4.714 C 9.271 7.318 7.391 9.393 4.636 9.393 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-eak8q`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.905 18.015" overflow="visible"><path d="M 10.003 0 C 7.843 0 5.891 0.987 4.741 2.604 L 4.567 2.604 L 4.567 0.494 L 0 0.494 L 0 18.015 L 4.706 18.015 L 4.706 8.938 C 4.706 6.299 6.519 4.646 8.644 4.646 C 10.596 4.646 12.2 6.053 12.2 8.587 L 12.2 18.015 L 16.905 18.015 L 16.905 7.883 C 16.905 2.851 14.221 0.002 10.003 0.002 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-1bfcdx5`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.741 17.434" overflow="visible"><path d="M 0 0 L 0 17.434 L 4.741 17.434 L 4.741 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            o(H, {
                                              className: `framer-z15gnm`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.26 5.3" overflow="visible"><path d="M 2.629 0 C 3.693 -0.001 4.653 0.644 5.06 1.636 C 5.467 2.627 5.241 3.767 4.487 4.525 C 3.46 5.559 1.796 5.559 0.77 4.524 C -0.257 3.489 -0.256 1.812 0.77 0.777 C 1.263 0.28 1.931 0 2.629 0 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            o(_, {
                              children: o(`div`, {
                                className: `framer-10zw1vl`,
                                children: l(H, {
                                  className: `framer-10gbb9c`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 113.113 28.066" overflow="visible"><g><path d="M 0 0.09 L 113.105 0.09 L 113.105 27.997 L 0 27.997 Z" fill="transparent"></path><path d="M 77.733 13.634 C 79.236 14.606 79.975 15.919 80.068 17.479 C 79.906 20.578 78.241 22.296 74.888 22.455 L 65.314 22.455 L 65.314 5.717 L 74.333 5.717 C 77.177 5.876 78.749 7.504 78.842 10.603 C 78.911 12.163 78.495 13.135 77.732 13.633 Z M 68.806 12.413 L 73.57 12.413 C 74.911 12.413 75.651 11.689 75.651 10.378 C 75.651 9.564 74.911 9.157 73.57 9.067 L 68.736 9.067 L 68.736 12.413 Z M 68.806 19.831 L 74.402 19.831 C 75.997 19.831 76.831 19.017 76.831 17.389 C 76.831 16.326 75.997 15.761 74.402 15.761 L 68.806 15.761 Z M 92.925 15.105 L 97.18 22.364 L 93.249 22.364 L 89.155 15.512 L 86.081 15.512 L 86.081 22.364 L 82.658 22.364 L 82.658 5.717 L 90.08 5.717 C 94.079 5.717 95.999 7.346 95.999 10.535 C 96.092 12.977 95.006 14.447 92.924 15.104 Z M 86.08 12.414 L 90.844 12.414 C 92.185 12.414 92.925 11.757 92.925 10.626 C 92.925 9.564 92.185 8.998 90.844 8.908 L 86.011 8.908 L 86.011 12.413 L 86.08 12.413 Z M 113.113 22.364 L 99.516 22.364 L 99.516 21.21 L 107.447 8.818 L 99.516 8.818 L 99.516 5.717 L 113.113 5.717 L 113.113 6.939 L 105.182 19.264 L 113.113 19.264 L 113.113 22.363 Z M 45.654 1.221 C 38.347 1.221 32.403 7.011 32.403 14.18 C 32.403 21.326 38.324 27.138 45.653 27.138 C 52.962 27.138 58.905 21.348 58.905 14.179 C 58.882 7.011 52.962 1.222 45.654 1.222 Z M 45.654 22.524 C 40.914 22.502 37.074 18.726 37.097 14.089 C 37.121 9.453 40.983 5.698 45.723 5.722 C 50.464 5.743 54.303 9.521 54.28 14.157 C 54.234 18.793 50.372 22.524 45.654 22.524 Z M 13.973 4.184 L 13.973 0 L 0.005 0 L 0.005 28.066 L 13.995 28.066 L 13.995 23.883 L 4.538 23.883 L 4.538 4.184 Z" fill="rgb(0, 0, 0)"></path><path d="M 30.669 0.158 L 10.688 12.936 L 10.688 15.108 L 30.669 27.974 L 30.669 22.593 L 17.094 13.999 L 30.669 5.473 Z" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    o(H, {
                                      className: `framer-xebrj5`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 113.105 27.907" overflow="visible"><path d="M 0 0 L 113.105 0 L 113.105 27.907 L 0 27.907 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    l(H, {
                                      className: `framer-t1je1v`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 113.108 28.066" overflow="visible"><path d="M 77.728 13.634 C 79.23 14.606 79.969 15.919 80.062 17.479 C 79.901 20.578 78.235 22.296 74.882 22.455 L 65.309 22.455 L 65.309 5.717 L 74.328 5.717 C 77.171 5.876 78.744 7.504 78.837 10.603 C 78.906 12.163 78.49 13.135 77.726 13.633 Z M 68.8 12.413 L 73.564 12.413 C 74.905 12.413 75.646 11.689 75.646 10.378 C 75.646 9.564 74.905 9.157 73.564 9.067 L 68.73 9.067 L 68.73 12.413 Z M 68.8 19.831 L 74.396 19.831 C 75.992 19.831 76.825 19.017 76.825 17.389 C 76.825 16.326 75.992 15.761 74.396 15.761 L 68.8 15.761 Z M 92.92 15.105 L 97.175 22.364 L 93.243 22.364 L 89.15 15.512 L 86.076 15.512 L 86.076 22.364 L 82.653 22.364 L 82.653 5.717 L 90.075 5.717 C 94.074 5.717 95.994 7.346 95.994 10.535 C 96.087 12.977 95 14.447 92.919 15.104 Z M 86.074 12.414 L 90.838 12.414 C 92.179 12.414 92.92 11.757 92.92 10.626 C 92.92 9.564 92.179 8.998 90.838 8.908 L 86.006 8.908 L 86.006 12.413 L 86.074 12.413 Z M 113.108 22.364 L 99.511 22.364 L 99.511 21.21 L 107.442 8.818 L 99.511 8.818 L 99.511 5.717 L 113.108 5.717 L 113.108 6.939 L 105.177 19.264 L 113.108 19.264 L 113.108 22.363 Z M 45.649 1.221 C 38.341 1.221 32.398 7.011 32.398 14.18 C 32.398 21.326 38.318 27.138 45.647 27.138 C 52.956 27.138 58.9 21.348 58.9 14.179 C 58.877 7.011 52.956 1.222 45.649 1.222 Z M 45.649 22.524 C 40.909 22.502 37.069 18.726 37.092 14.089 C 37.116 9.453 40.978 5.698 45.717 5.722 C 50.458 5.743 54.297 9.521 54.274 14.157 C 54.229 18.793 50.367 22.524 45.649 22.524 Z M 13.967 4.184 L 13.967 0 L 0 0 L 0 28.066 L 13.99 28.066 L 13.99 23.883 L 4.532 23.883 L 4.532 4.184 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        o(H, {
                                          className: `framer-5uv3n9`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.753 16.737" overflow="visible"><path d="M 12.419 7.916 C 13.921 8.889 14.661 10.202 14.753 11.761 C 14.592 14.86 12.926 16.579 9.574 16.737 L 0 16.737 L 0 0 L 9.019 0 C 11.863 0.158 13.435 1.787 13.528 4.886 C 13.597 6.445 13.181 7.418 12.417 7.915 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1dwe8sc`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.916 3.346" overflow="visible"><path d="M 0.07 3.346 L 4.834 3.346 C 6.175 3.346 6.916 2.622 6.916 1.311 C 6.916 0.497 6.175 0.09 4.834 0 L 0 0 L 0 3.346 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1ouz7yl`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.025 4.07" overflow="visible"><path d="M 0 4.07 L 5.596 4.07 C 7.192 4.07 8.025 3.256 8.025 1.628 C 8.025 0.565 7.192 0 5.596 0 L 0 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-q9fjd5`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.522 16.647" overflow="visible"><path d="M 10.267 9.388 L 14.522 16.647 L 10.59 16.647 L 6.497 9.795 L 3.423 9.795 L 3.423 16.647 L 0 16.647 L 0 0 L 7.422 0 C 11.421 0 13.341 1.628 13.341 4.817 C 13.434 7.26 12.347 8.729 10.266 9.386 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-144xzyr`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.914 3.506" overflow="visible"><path d="M 0.069 3.506 L 4.833 3.506 C 6.174 3.506 6.914 2.849 6.914 1.718 C 6.914 0.656 6.174 0.09 4.833 0 L 0 0 L 0 3.505 L 0.069 3.505 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-qloadb`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.597 16.647" overflow="visible"><path d="M 13.597 16.647 L 0 16.647 L 0 15.493 L 7.931 3.1 L 0 3.1 L 0 0 L 13.597 0 L 13.597 1.221 L 5.666 13.547 L 13.597 13.547 L 13.597 16.646 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1i2tr6e`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26.502 25.917" overflow="visible"><path d="M 13.251 0 C 5.943 0 0 5.79 0 12.959 C 0 20.105 5.921 25.917 13.249 25.917 C 20.558 25.917 26.502 20.127 26.502 12.958 C 26.479 5.79 20.558 0.001 13.251 0.001 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1qzgsy3`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.183 16.803" overflow="visible"><path d="M 8.557 16.803 C 3.817 16.781 -0.023 13.004 0 8.367 C 0.024 3.732 3.886 -0.023 8.626 0 C 13.367 0.022 17.206 3.8 17.183 8.436 C 17.137 13.071 13.275 16.803 8.557 16.803 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-17160hn`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.99 28.066" overflow="visible"><path d="M 13.967 4.184 L 13.967 0 L 0 0 L 0 28.066 L 13.99 28.066 L 13.99 23.883 L 4.532 23.883 L 4.532 4.184 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    o(H, {
                                      className: `framer-18vhk64`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.981 27.816" overflow="visible"><path d="M 19.981 0 L 0 12.778 L 0 14.949 L 19.981 27.816 L 19.981 22.434 L 6.405 13.84 L 19.981 5.315 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            o(_, {
                              children: o(`div`, {
                                className: `framer-ophpt6`,
                                children: l(H, {
                                  className: `framer-43i9wl`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 88.007 29" overflow="visible"><g><path d="M 0 0 L 88.007 0 L 88.007 29 L 0 29 Z" fill="transparent"></path><path d="M 2.429 25.526 L 0.652 25.526 C 0.494 25.525 0.343 25.587 0.231 25.699 C 0.12 25.81 0.058 25.962 0.059 26.119 L 0.059 26.714 C 0.059 27.04 0.325 27.306 0.652 27.306 L 2.423 27.295 L 2.423 27.883 L 0.658 27.888 L 0.658 27.784 C 0.657 27.701 0.59 27.633 0.507 27.632 L 0.209 27.632 C 0.169 27.632 0.13 27.648 0.102 27.676 C 0.073 27.705 0.057 27.744 0.058 27.784 L 0.058 27.888 C 0.058 28.221 0.321 28.483 0.652 28.483 L 2.429 28.483 C 2.587 28.484 2.739 28.422 2.851 28.31 C 2.962 28.198 3.024 28.046 3.023 27.888 L 3.023 27.296 C 3.022 26.969 2.757 26.703 2.429 26.702 L 0.658 26.714 L 0.658 26.125 L 2.424 26.119 L 2.424 26.224 C 2.424 26.305 2.493 26.375 2.574 26.375 L 2.872 26.375 C 2.912 26.376 2.95 26.36 2.979 26.332 C 3.007 26.303 3.023 26.265 3.023 26.224 L 3.023 26.119 C 3.024 25.962 2.962 25.81 2.85 25.699 C 2.738 25.588 2.587 25.526 2.429 25.527 Z M 6.937 25.526 L 5.16 25.526 C 5.003 25.525 4.851 25.587 4.74 25.699 C 4.628 25.81 4.566 25.962 4.568 26.119 L 4.568 27.896 C 4.568 28.227 4.829 28.488 5.16 28.488 L 6.938 28.488 C 7.096 28.489 7.247 28.427 7.359 28.315 C 7.47 28.204 7.532 28.053 7.531 27.896 L 7.531 26.119 C 7.532 25.962 7.47 25.811 7.359 25.7 C 7.247 25.588 7.096 25.526 6.938 25.527 Z M 6.937 27.888 L 5.166 27.888 L 5.166 26.125 L 6.932 26.125 L 6.937 27.89 Z M 11.917 27.888 L 9.704 27.888 L 9.704 25.672 C 9.704 25.632 9.689 25.593 9.66 25.564 C 9.632 25.536 9.593 25.52 9.552 25.52 L 9.25 25.52 C 9.21 25.52 9.171 25.536 9.142 25.564 C 9.114 25.593 9.098 25.632 9.099 25.672 L 9.099 28.337 C 9.099 28.418 9.163 28.488 9.25 28.488 L 11.917 28.488 C 11.958 28.488 11.997 28.473 12.025 28.444 C 12.054 28.416 12.07 28.377 12.07 28.337 L 12.07 28.035 C 12.068 27.951 12.001 27.884 11.917 27.882 M 16.245 25.526 L 15.943 25.526 C 15.903 25.526 15.864 25.542 15.836 25.57 C 15.807 25.598 15.791 25.637 15.792 25.677 L 15.792 27.888 L 14.026 27.894 L 14.026 25.677 C 14.024 25.594 13.957 25.528 13.874 25.526 L 13.578 25.526 C 13.538 25.526 13.499 25.542 13.471 25.57 C 13.442 25.598 13.426 25.637 13.427 25.677 L 13.427 27.894 C 13.427 28.227 13.688 28.488 14.02 28.488 L 15.798 28.488 C 15.955 28.489 16.106 28.427 16.218 28.315 C 16.329 28.204 16.391 28.053 16.39 27.896 L 16.39 25.677 C 16.388 25.594 16.322 25.528 16.239 25.526 M 20.766 25.526 L 18.552 25.526 C 18.394 25.525 18.242 25.587 18.131 25.698 C 18.019 25.81 17.957 25.962 17.958 26.119 L 17.958 27.894 C 17.958 28.225 18.221 28.488 18.552 28.488 L 19.082 28.488 L 19.001 28.814 C 18.989 28.86 19.001 28.907 19.03 28.942 C 19.058 28.978 19.1 28.999 19.146 29 L 19.443 29 C 19.513 29 19.573 28.952 19.589 28.884 L 19.688 28.482 L 20.766 28.482 C 20.848 28.48 20.915 28.413 20.917 28.331 L 20.917 28.029 C 20.915 27.946 20.848 27.879 20.766 27.877 L 18.558 27.877 L 18.552 26.113 L 20.766 26.113 C 20.806 26.114 20.844 26.098 20.873 26.069 C 20.901 26.041 20.917 26.002 20.917 25.962 L 20.917 25.66 C 20.915 25.578 20.848 25.511 20.766 25.509 M 24.819 25.526 L 23.043 25.526 C 22.885 25.525 22.734 25.587 22.622 25.698 C 22.51 25.81 22.448 25.962 22.449 26.119 L 22.449 27.896 C 22.449 28.227 22.711 28.488 23.042 28.488 L 24.82 28.488 C 24.978 28.489 25.129 28.427 25.24 28.315 C 25.352 28.204 25.414 28.053 25.413 27.896 L 25.413 26.119 C 25.414 25.962 25.352 25.811 25.24 25.7 C 25.129 25.588 24.978 25.526 24.82 25.527 Z M 24.819 27.888 L 23.049 27.888 L 23.049 26.125 L 24.814 26.125 L 24.82 27.89 Z M 29.567 25.526 L 27.138 25.526 C 27.097 25.526 27.059 25.542 27.03 25.57 C 27.002 25.599 26.986 25.638 26.987 25.678 L 26.987 28.343 C 26.987 28.424 27.057 28.494 27.138 28.494 L 29.567 28.494 C 29.65 28.492 29.717 28.426 29.718 28.343 L 29.718 28.041 C 29.717 27.957 29.65 27.89 29.567 27.888 L 27.587 27.888 L 27.587 27.308 L 29.147 27.308 C 29.187 27.309 29.226 27.293 29.254 27.264 C 29.283 27.236 29.299 27.197 29.298 27.157 L 29.298 26.855 C 29.299 26.815 29.283 26.776 29.255 26.747 C 29.226 26.719 29.187 26.703 29.147 26.703 L 27.587 26.703 L 27.587 26.121 L 29.567 26.121 C 29.607 26.121 29.646 26.105 29.674 26.077 C 29.702 26.048 29.718 26.01 29.718 25.97 L 29.718 25.667 C 29.717 25.585 29.65 25.518 29.567 25.516 M 33.621 25.526 L 31.843 25.526 C 31.686 25.525 31.534 25.587 31.423 25.699 C 31.311 25.81 31.249 25.962 31.251 26.119 L 31.251 26.714 C 31.251 27.04 31.518 27.306 31.843 27.306 L 33.615 27.295 L 33.615 27.883 L 31.849 27.888 L 31.849 27.784 C 31.85 27.744 31.834 27.706 31.806 27.677 C 31.778 27.648 31.74 27.632 31.699 27.632 L 31.402 27.632 C 31.361 27.632 31.323 27.648 31.294 27.676 C 31.266 27.705 31.25 27.744 31.251 27.784 L 31.251 27.888 C 31.251 28.221 31.512 28.483 31.843 28.483 L 33.621 28.483 C 33.779 28.484 33.931 28.421 34.042 28.31 C 34.154 28.198 34.216 28.046 34.214 27.888 L 34.214 27.296 C 34.214 26.969 33.949 26.704 33.621 26.702 L 31.851 26.714 L 31.851 26.125 L 33.615 26.119 L 33.615 26.224 C 33.615 26.305 33.686 26.375 33.767 26.375 L 34.063 26.375 C 34.103 26.376 34.142 26.36 34.171 26.332 C 34.2 26.304 34.216 26.265 34.215 26.224 L 34.215 26.119 C 34.216 25.962 34.154 25.81 34.042 25.699 C 33.931 25.588 33.779 25.526 33.621 25.527 Z M 40.914 25.526 L 38.252 25.526 C 38.212 25.526 38.173 25.542 38.145 25.57 C 38.116 25.598 38.1 25.637 38.101 25.677 L 38.101 25.979 C 38.101 26.061 38.165 26.131 38.252 26.131 L 39.282 26.131 L 39.282 28.343 C 39.282 28.424 39.353 28.494 39.434 28.494 L 39.731 28.494 C 39.814 28.492 39.881 28.425 39.882 28.343 L 39.882 26.131 L 40.914 26.131 C 40.954 26.132 40.993 26.116 41.022 26.088 C 41.05 26.059 41.066 26.021 41.065 25.98 L 41.065 25.678 C 41.064 25.595 40.997 25.528 40.914 25.526 Z M 45.09 25.526 L 42.661 25.526 C 42.621 25.526 42.582 25.542 42.553 25.57 C 42.525 25.599 42.509 25.638 42.51 25.678 L 42.51 28.343 C 42.51 28.424 42.574 28.494 42.661 28.494 L 45.09 28.494 C 45.173 28.492 45.239 28.425 45.241 28.343 L 45.241 28.041 C 45.24 27.957 45.173 27.89 45.09 27.888 L 43.111 27.888 L 43.111 27.308 L 44.671 27.308 C 44.712 27.309 44.751 27.293 44.779 27.265 C 44.808 27.236 44.824 27.198 44.824 27.157 L 44.824 26.855 C 44.824 26.815 44.809 26.776 44.78 26.747 C 44.751 26.718 44.712 26.702 44.671 26.703 L 43.111 26.703 L 43.111 26.121 L 45.091 26.121 C 45.131 26.121 45.17 26.105 45.198 26.077 C 45.227 26.048 45.243 26.01 45.242 25.97 L 45.242 25.667 C 45.24 25.585 45.174 25.518 45.091 25.516 M 49.598 25.526 L 47.385 25.526 C 47.227 25.525 47.075 25.587 46.964 25.699 C 46.852 25.81 46.791 25.962 46.792 26.119 L 46.792 27.896 C 46.792 28.227 47.053 28.488 47.385 28.488 L 49.598 28.488 C 49.681 28.486 49.749 28.42 49.751 28.337 L 49.751 28.035 C 49.749 27.951 49.681 27.885 49.598 27.884 L 47.391 27.884 L 47.385 26.119 L 49.598 26.119 C 49.639 26.12 49.678 26.104 49.706 26.076 C 49.735 26.047 49.751 26.009 49.751 25.968 L 49.751 25.666 C 49.749 25.583 49.681 25.516 49.598 25.515 M 54.106 25.526 L 53.81 25.526 C 53.77 25.526 53.731 25.542 53.703 25.57 C 53.674 25.598 53.659 25.637 53.659 25.677 L 53.659 27.586 L 51.969 25.579 C 51.94 25.545 51.898 25.525 51.853 25.526 L 51.445 25.526 C 51.405 25.525 51.366 25.541 51.337 25.569 C 51.308 25.598 51.292 25.637 51.293 25.677 L 51.293 28.343 C 51.293 28.424 51.357 28.494 51.445 28.494 L 51.742 28.494 C 51.825 28.492 51.892 28.426 51.894 28.343 L 51.894 26.434 L 53.583 28.442 C 53.611 28.476 53.654 28.495 53.699 28.494 L 54.106 28.494 C 54.19 28.492 54.257 28.426 54.259 28.343 L 54.259 25.677 C 54.257 25.594 54.19 25.527 54.106 25.526 Z M 58.19 25.526 L 56.413 25.526 C 56.255 25.525 56.104 25.587 55.993 25.699 C 55.881 25.81 55.819 25.962 55.82 26.119 L 55.82 27.896 C 55.82 28.227 56.082 28.488 56.413 28.488 L 58.19 28.488 C 58.348 28.489 58.499 28.427 58.611 28.316 C 58.723 28.204 58.785 28.053 58.784 27.896 L 58.784 26.119 C 58.785 25.962 58.723 25.81 58.611 25.699 C 58.499 25.588 58.348 25.526 58.19 25.527 Z M 58.19 27.888 L 56.419 27.888 L 56.419 26.125 L 58.185 26.125 L 58.19 27.89 Z M 63.164 27.888 L 60.95 27.888 L 60.95 25.672 C 60.951 25.632 60.935 25.593 60.907 25.564 C 60.878 25.536 60.84 25.52 60.799 25.52 L 60.503 25.52 C 60.462 25.519 60.423 25.535 60.394 25.564 C 60.366 25.593 60.35 25.632 60.35 25.672 L 60.35 28.337 C 60.35 28.418 60.421 28.488 60.503 28.488 L 63.164 28.488 C 63.204 28.488 63.243 28.472 63.271 28.444 C 63.3 28.415 63.316 28.377 63.315 28.337 L 63.315 28.035 C 63.314 27.951 63.247 27.884 63.164 27.882 M 67.049 25.526 L 65.274 25.526 C 65.115 25.524 64.963 25.586 64.851 25.698 C 64.74 25.81 64.677 25.961 64.678 26.119 L 64.678 27.896 C 64.678 28.227 64.941 28.488 65.274 28.488 L 67.049 28.488 C 67.207 28.489 67.359 28.427 67.47 28.316 C 67.582 28.204 67.644 28.053 67.643 27.896 L 67.643 26.119 C 67.644 25.962 67.582 25.811 67.471 25.7 C 67.359 25.588 67.208 25.526 67.051 25.527 Z M 67.049 27.888 L 65.278 27.888 L 65.278 26.125 L 67.045 26.125 L 67.049 27.89 Z M 71.582 25.526 L 69.804 25.526 C 69.646 25.525 69.494 25.587 69.383 25.699 C 69.272 25.81 69.21 25.962 69.211 26.119 L 69.211 27.896 C 69.211 28.227 69.472 28.488 69.804 28.488 L 71.582 28.488 C 71.739 28.489 71.891 28.427 72.002 28.315 C 72.113 28.204 72.175 28.053 72.175 27.896 L 72.175 26.935 C 72.175 26.895 72.16 26.856 72.131 26.827 C 72.103 26.799 72.065 26.783 72.025 26.783 L 71.069 26.783 C 70.985 26.784 70.918 26.852 70.918 26.935 L 70.918 27.237 C 70.918 27.318 70.982 27.388 71.069 27.388 L 71.582 27.388 L 71.582 27.888 L 69.816 27.894 L 69.816 26.125 L 71.582 26.119 L 71.582 26.224 C 71.582 26.305 71.651 26.375 71.733 26.375 L 72.029 26.375 C 72.113 26.374 72.18 26.308 72.182 26.224 L 72.182 26.119 C 72.183 25.962 72.12 25.81 72.008 25.699 C 71.896 25.587 71.745 25.526 71.587 25.527 M 74.191 25.526 L 73.893 25.526 C 73.853 25.526 73.815 25.542 73.786 25.57 C 73.758 25.598 73.742 25.637 73.742 25.677 L 73.742 28.343 C 73.742 28.424 73.812 28.494 73.893 28.494 L 74.191 28.494 C 74.274 28.492 74.34 28.425 74.342 28.343 L 74.342 25.677 C 74.34 25.594 74.274 25.528 74.191 25.526 Z M 78.815 25.526 L 76.602 25.526 C 76.444 25.525 76.293 25.587 76.181 25.699 C 76.07 25.81 76.008 25.962 76.009 26.119 L 76.009 27.896 C 76.009 28.227 76.27 28.488 76.602 28.488 L 78.815 28.488 C 78.899 28.487 78.966 28.42 78.968 28.337 L 78.968 28.035 C 78.966 27.951 78.899 27.884 78.815 27.884 L 76.608 27.884 L 76.602 26.119 L 78.815 26.119 C 78.856 26.12 78.895 26.104 78.923 26.076 C 78.952 26.047 78.968 26.009 78.968 25.968 L 78.968 25.666 C 78.966 25.583 78.899 25.516 78.815 25.515 M 82.887 25.526 L 81.111 25.526 C 80.953 25.524 80.801 25.586 80.689 25.698 C 80.577 25.81 80.515 25.961 80.516 26.119 L 80.516 28.337 C 80.516 28.418 80.58 28.488 80.668 28.488 L 80.971 28.488 C 81.011 28.488 81.05 28.472 81.078 28.444 C 81.107 28.415 81.122 28.377 81.122 28.337 L 81.122 27.516 L 82.888 27.516 L 82.888 28.338 C 82.888 28.418 82.957 28.488 83.038 28.488 L 83.341 28.488 C 83.381 28.488 83.42 28.473 83.449 28.444 C 83.477 28.416 83.493 28.377 83.493 28.337 L 83.493 26.119 C 83.494 25.962 83.432 25.81 83.32 25.699 C 83.208 25.588 83.057 25.526 82.899 25.527 M 82.882 26.119 L 82.882 26.917 L 81.116 26.917 L 81.116 26.125 Z M 87.558 26.375 L 87.856 26.375 C 87.896 26.376 87.935 26.36 87.963 26.332 C 87.992 26.303 88.008 26.265 88.007 26.224 L 88.007 26.119 C 88.008 25.962 87.946 25.81 87.834 25.699 C 87.723 25.588 87.571 25.526 87.413 25.527 L 85.636 25.527 C 85.479 25.526 85.327 25.588 85.215 25.699 C 85.104 25.81 85.041 25.962 85.042 26.119 L 85.042 26.714 C 85.042 27.04 85.31 27.306 85.636 27.306 L 87.407 27.295 L 87.407 27.883 L 85.642 27.888 L 85.642 27.784 C 85.643 27.744 85.627 27.705 85.599 27.676 C 85.57 27.648 85.532 27.632 85.491 27.632 L 85.194 27.632 C 85.153 27.632 85.114 27.648 85.086 27.676 C 85.057 27.705 85.042 27.744 85.042 27.784 L 85.042 27.888 C 85.042 28.221 85.305 28.483 85.636 28.483 L 87.413 28.483 C 87.571 28.484 87.723 28.422 87.835 28.31 C 87.947 28.198 88.009 28.046 88.007 27.888 L 88.007 27.296 C 88.007 26.969 87.741 26.703 87.413 26.702 L 85.642 26.714 L 85.642 26.125 L 87.408 26.119 L 87.408 26.224 C 87.408 26.305 87.477 26.375 87.558 26.375 Z M 40.319 20.225 C 40.319 19.667 39.743 18.69 39.201 18.05 L 36.825 15.239 C 36.486 14.843 36.237 14.535 36.084 14.337 C 36.411 14.244 36.895 14.076 37.477 13.82 C 39.206 13.039 39.778 11.683 39.83 11.55 C 40.302 10.503 40.326 8.641 40.326 8.279 L 40.326 6.191 C 40.326 3.974 39.859 2.484 38.858 1.496 C 37.855 0.506 36.353 0.046 34.128 0.029 L 1.899 0.029 L 1.899 0.024 C 0.853 0.024 0.004 0.869 0 1.914 L 0 3.119 C 0 4.166 0.85 5.016 1.899 5.016 L 6.757 5.016 C 7.514 5.016 8.131 5.632 8.131 6.384 L 8.131 19.353 C 8.131 20.4 8.981 21.25 10.03 21.25 L 11.259 21.25 C 12.302 21.25 13.158 20.4 13.158 19.353 L 13.158 6.388 C 13.158 5.632 13.775 5.022 14.528 5.022 L 33.901 5.022 C 34.658 5.022 35.269 5.638 35.269 6.388 L 35.269 8.047 C 35.269 8.804 34.652 9.414 33.901 9.414 L 20.939 9.414 C 19.89 9.414 19.039 10.263 19.039 11.311 L 19.039 19.359 C 19.039 20.406 19.891 21.256 20.939 21.256 L 22.139 21.256 C 23.187 21.256 24.038 20.406 24.038 19.359 L 24.038 14.477 C 24.277 14.459 24.754 14.436 25.407 14.436 L 28.074 14.436 C 28.897 14.43 30.031 14.96 30.556 15.583 L 34.191 19.906 C 34.814 20.644 36.107 21.25 37.074 21.25 L 38.42 21.25 C 39.503 21.25 40.319 20.807 40.319 20.225 Z M 87.855 19.357 L 87.855 1.897 C 87.855 0.926 87.064 0.133 86.091 0.133 L 84.833 0.133 C 83.859 0.133 83.067 0.926 83.067 1.897 L 83.067 12.452 C 83.067 12.749 83.015 12.906 82.969 12.987 C 82.899 13.12 82.812 13.12 82.783 13.12 C 82.643 13.12 82.444 12.987 82.247 12.749 L 72.735 1.426 C 72.135 0.709 70.884 0.128 69.95 0.128 L 68.605 0.128 C 67.632 0.128 66.839 0.92 66.839 1.891 L 66.839 19.353 C 66.839 20.324 67.632 21.117 68.605 21.117 L 69.805 21.117 C 70.777 21.117 71.57 20.324 71.57 19.353 L 71.57 8.746 C 71.57 8.333 71.68 8.07 71.855 8.07 C 71.995 8.07 72.194 8.203 72.391 8.443 L 81.962 19.818 C 82.562 20.534 83.813 21.116 84.745 21.116 L 86.091 21.116 C 87.064 21.116 87.856 20.324 87.856 19.353 M 55.167 7.64 L 51.69 7.64 C 51.003 7.64 50.444 8.199 50.444 8.885 L 50.444 12.359 C 50.444 13.045 51.003 13.603 51.69 13.603 L 55.167 13.603 C 55.854 13.603 56.413 13.045 56.413 12.359 L 56.413 8.885 C 56.413 8.199 55.854 7.64 55.167 7.64 Z" fill="rgb(0, 0, 0)"></path><path d="M 59.541 0 L 47.32 0 C 44.822 0.003 42.797 2.026 42.795 4.522 L 42.795 16.728 C 42.797 19.224 44.822 21.247 47.32 21.25 L 59.541 21.25 C 62.04 21.248 64.066 19.225 64.068 16.728 L 64.068 4.522 C 64.066 2.025 62.04 0.002 59.541 0 Z M 59.017 14.866 C 59.017 15.623 58.401 16.234 57.648 16.234 L 49.157 16.234 C 48.398 16.234 47.781 15.618 47.781 14.866 L 47.781 6.384 C 47.781 5.626 48.398 5.016 49.155 5.016 L 57.648 5.016 C 58.405 5.016 59.017 5.632 59.017 6.384 Z M 23.3 25.02 C 23.364 25.001 23.43 24.993 23.497 24.997 C 23.631 24.997 23.747 25.067 23.876 25.148 C 24.021 25.235 24.173 25.323 24.353 25.323 C 24.466 25.321 24.578 25.295 24.68 25.247 C 24.737 25.225 24.775 25.169 24.773 25.108 L 24.773 24.875 C 24.772 24.823 24.746 24.776 24.703 24.747 C 24.659 24.718 24.602 24.718 24.558 24.747 C 24.501 24.78 24.437 24.8 24.371 24.805 C 24.254 24.788 24.144 24.724 24.021 24.66 C 23.863 24.571 23.701 24.478 23.497 24.478 C 23.394 24.477 23.291 24.495 23.195 24.532 C 23.136 24.553 23.097 24.608 23.095 24.671 L 23.095 24.881 C 23.095 24.933 23.12 24.979 23.159 25.002 C 23.2 25.031 23.253 25.038 23.3 25.02 Z M 66.089 25.27 L 66.416 25.27 C 66.485 25.27 66.545 25.222 66.561 25.154 L 66.7 24.59 C 66.711 24.545 66.701 24.497 66.671 24.461 C 66.643 24.426 66.6 24.405 66.555 24.403 L 66.234 24.403 C 66.164 24.403 66.104 24.452 66.089 24.519 L 65.949 25.084 C 65.936 25.131 65.949 25.177 65.978 25.212 C 66.006 25.248 66.049 25.269 66.095 25.27" fill="rgb(0, 0, 0)"></path></g></svg>`,
                                  withExternalLayout: !0,
                                  children: [
                                    o(H, {
                                      className: `framer-1foqjel`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 88.007 29" overflow="visible"><path d="M 0 0 L 88.007 0 L 88.007 29 L 0 29 Z" fill="transparent"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                    l(H, {
                                      className: `framer-nfq6g0`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 88.007 28.976" overflow="visible"><path d="M 2.429 25.502 L 0.652 25.502 C 0.494 25.501 0.343 25.563 0.231 25.675 C 0.12 25.786 0.058 25.938 0.059 26.095 L 0.059 26.69 C 0.059 27.016 0.325 27.282 0.652 27.282 L 2.423 27.271 L 2.423 27.859 L 0.658 27.864 L 0.658 27.76 C 0.657 27.677 0.59 27.609 0.507 27.608 L 0.209 27.608 C 0.169 27.608 0.13 27.624 0.102 27.652 C 0.073 27.681 0.057 27.72 0.058 27.76 L 0.058 27.864 C 0.058 28.196 0.321 28.459 0.652 28.459 L 2.429 28.459 C 2.587 28.46 2.739 28.398 2.851 28.286 C 2.962 28.174 3.024 28.022 3.023 27.864 L 3.023 27.272 C 3.022 26.944 2.757 26.679 2.429 26.678 L 0.658 26.69 L 0.658 26.101 L 2.424 26.095 L 2.424 26.2 C 2.424 26.281 2.493 26.351 2.574 26.351 L 2.872 26.351 C 2.912 26.352 2.95 26.336 2.979 26.307 C 3.007 26.279 3.023 26.24 3.023 26.2 L 3.023 26.095 C 3.024 25.938 2.962 25.786 2.85 25.675 C 2.738 25.564 2.587 25.502 2.429 25.503 Z M 6.937 25.502 L 5.16 25.502 C 5.003 25.501 4.851 25.563 4.74 25.675 C 4.628 25.786 4.566 25.938 4.568 26.095 L 4.568 27.871 C 4.568 28.202 4.829 28.463 5.16 28.463 L 6.938 28.463 C 7.096 28.464 7.247 28.402 7.359 28.291 C 7.47 28.18 7.532 28.029 7.531 27.871 L 7.531 26.095 C 7.532 25.938 7.47 25.787 7.359 25.675 C 7.247 25.564 7.096 25.502 6.938 25.503 Z M 6.937 27.864 L 5.166 27.864 L 5.166 26.101 L 6.932 26.101 L 6.937 27.865 Z M 11.917 27.864 L 9.704 27.864 L 9.704 25.648 C 9.704 25.608 9.689 25.569 9.66 25.54 C 9.632 25.511 9.593 25.496 9.552 25.496 L 9.25 25.496 C 9.21 25.496 9.171 25.511 9.142 25.54 C 9.114 25.569 9.098 25.608 9.099 25.648 L 9.099 28.312 C 9.099 28.393 9.163 28.464 9.25 28.464 L 11.917 28.464 C 11.958 28.464 11.997 28.448 12.025 28.42 C 12.054 28.392 12.07 28.353 12.07 28.312 L 12.07 28.01 C 12.068 27.927 12.001 27.859 11.917 27.858 M 16.245 25.502 L 15.943 25.502 C 15.903 25.502 15.864 25.517 15.836 25.546 C 15.807 25.574 15.791 25.613 15.792 25.653 L 15.792 27.864 L 14.026 27.87 L 14.026 25.653 C 14.024 25.57 13.957 25.504 13.874 25.502 L 13.578 25.502 C 13.538 25.502 13.499 25.517 13.471 25.546 C 13.442 25.574 13.426 25.613 13.427 25.653 L 13.427 27.87 C 13.427 28.202 13.688 28.463 14.02 28.463 L 15.798 28.463 C 15.955 28.464 16.106 28.402 16.218 28.291 C 16.329 28.18 16.391 28.029 16.39 27.871 L 16.39 25.653 C 16.388 25.57 16.322 25.504 16.239 25.502 M 20.766 25.502 L 18.552 25.502 C 18.394 25.501 18.242 25.563 18.131 25.674 C 18.019 25.786 17.957 25.937 17.958 26.095 L 17.958 27.87 C 17.958 28.201 18.221 28.464 18.552 28.464 L 19.082 28.464 L 19.001 28.79 C 18.989 28.836 19.001 28.883 19.03 28.918 C 19.058 28.953 19.1 28.975 19.146 28.976 L 19.443 28.976 C 19.513 28.976 19.573 28.928 19.589 28.86 L 19.688 28.457 L 20.766 28.457 C 20.848 28.456 20.915 28.389 20.917 28.306 L 20.917 28.004 C 20.915 27.922 20.848 27.855 20.766 27.853 L 18.558 27.853 L 18.552 26.089 L 20.766 26.089 C 20.806 26.089 20.844 26.074 20.873 26.045 C 20.901 26.017 20.917 25.978 20.917 25.938 L 20.917 25.636 C 20.915 25.553 20.848 25.487 20.766 25.485 M 24.819 25.502 L 23.043 25.502 C 22.885 25.501 22.734 25.563 22.622 25.674 C 22.51 25.786 22.448 25.937 22.449 26.095 L 22.449 27.871 C 22.449 28.203 22.711 28.464 23.042 28.464 L 24.82 28.464 C 24.978 28.464 25.129 28.402 25.24 28.291 C 25.352 28.18 25.414 28.029 25.413 27.871 L 25.413 26.095 C 25.414 25.938 25.352 25.787 25.24 25.675 C 25.129 25.564 24.978 25.502 24.82 25.503 Z M 24.819 27.864 L 23.049 27.864 L 23.049 26.101 L 24.814 26.101 L 24.82 27.865 Z M 29.567 25.502 L 27.138 25.502 C 27.097 25.502 27.059 25.518 27.03 25.546 C 27.002 25.575 26.986 25.614 26.987 25.654 L 26.987 28.319 C 26.987 28.399 27.057 28.47 27.138 28.47 L 29.567 28.47 C 29.65 28.468 29.717 28.401 29.718 28.319 L 29.718 28.016 C 29.717 27.933 29.65 27.865 29.567 27.864 L 27.587 27.864 L 27.587 27.284 L 29.147 27.284 C 29.187 27.284 29.226 27.269 29.254 27.24 C 29.283 27.212 29.299 27.173 29.298 27.133 L 29.298 26.831 C 29.299 26.791 29.283 26.752 29.255 26.723 C 29.226 26.694 29.187 26.678 29.147 26.679 L 27.587 26.679 L 27.587 26.096 L 29.567 26.096 C 29.607 26.097 29.646 26.081 29.674 26.052 C 29.702 26.024 29.718 25.985 29.718 25.945 L 29.718 25.643 C 29.717 25.56 29.65 25.494 29.567 25.492 M 33.621 25.502 L 31.843 25.502 C 31.686 25.501 31.534 25.563 31.423 25.675 C 31.311 25.786 31.249 25.938 31.251 26.095 L 31.251 26.69 C 31.251 27.016 31.518 27.282 31.843 27.282 L 33.615 27.271 L 33.615 27.859 L 31.849 27.864 L 31.849 27.76 C 31.85 27.72 31.834 27.681 31.806 27.653 C 31.778 27.624 31.74 27.608 31.699 27.608 L 31.402 27.608 C 31.361 27.608 31.323 27.624 31.294 27.652 C 31.266 27.681 31.25 27.72 31.251 27.76 L 31.251 27.864 C 31.251 28.196 31.512 28.459 31.843 28.459 L 33.621 28.459 C 33.779 28.46 33.931 28.397 34.042 28.285 C 34.154 28.174 34.216 28.022 34.214 27.864 L 34.214 27.272 C 34.214 26.945 33.949 26.68 33.621 26.678 L 31.851 26.69 L 31.851 26.101 L 33.615 26.095 L 33.615 26.2 C 33.615 26.281 33.686 26.351 33.767 26.351 L 34.063 26.351 C 34.103 26.352 34.142 26.336 34.171 26.308 C 34.2 26.279 34.216 26.241 34.215 26.2 L 34.215 26.095 C 34.216 25.938 34.154 25.786 34.042 25.675 C 33.931 25.564 33.779 25.502 33.621 25.503 Z M 40.914 25.502 L 38.252 25.502 C 38.212 25.502 38.173 25.517 38.145 25.546 C 38.116 25.574 38.1 25.613 38.101 25.653 L 38.101 25.955 C 38.101 26.037 38.165 26.107 38.252 26.107 L 39.282 26.107 L 39.282 28.318 C 39.282 28.399 39.353 28.47 39.434 28.47 L 39.731 28.47 C 39.814 28.468 39.881 28.401 39.882 28.318 L 39.882 26.107 L 40.914 26.107 C 40.954 26.108 40.993 26.092 41.022 26.063 C 41.05 26.035 41.066 25.996 41.065 25.956 L 41.065 25.654 C 41.064 25.571 40.997 25.504 40.914 25.502 Z M 45.09 25.502 L 42.661 25.502 C 42.621 25.502 42.582 25.518 42.553 25.546 C 42.525 25.575 42.509 25.614 42.51 25.654 L 42.51 28.319 C 42.51 28.399 42.574 28.47 42.661 28.47 L 45.09 28.47 C 45.173 28.468 45.239 28.401 45.241 28.319 L 45.241 28.016 C 45.24 27.933 45.173 27.866 45.09 27.864 L 43.111 27.864 L 43.111 27.284 L 44.671 27.284 C 44.712 27.285 44.751 27.269 44.779 27.241 C 44.808 27.212 44.824 27.173 44.824 27.133 L 44.824 26.831 C 44.824 26.79 44.809 26.751 44.78 26.723 C 44.751 26.694 44.712 26.678 44.671 26.679 L 43.111 26.679 L 43.111 26.096 L 45.091 26.096 C 45.131 26.097 45.17 26.081 45.198 26.052 C 45.227 26.024 45.243 25.985 45.242 25.945 L 45.242 25.643 C 45.24 25.561 45.174 25.494 45.091 25.492 M 49.598 25.502 L 47.385 25.502 C 47.227 25.501 47.075 25.563 46.964 25.675 C 46.852 25.786 46.791 25.938 46.792 26.095 L 46.792 27.871 C 46.792 28.203 47.053 28.464 47.385 28.464 L 49.598 28.464 C 49.681 28.462 49.749 28.396 49.751 28.312 L 49.751 28.01 C 49.749 27.927 49.681 27.861 49.598 27.859 L 47.391 27.859 L 47.385 26.095 L 49.598 26.095 C 49.639 26.096 49.678 26.08 49.706 26.052 C 49.735 26.023 49.751 25.984 49.751 25.944 L 49.751 25.642 C 49.749 25.559 49.681 25.492 49.598 25.491 M 54.106 25.502 L 53.81 25.502 C 53.77 25.502 53.731 25.517 53.703 25.546 C 53.674 25.574 53.659 25.613 53.659 25.653 L 53.659 27.562 L 51.969 25.555 C 51.94 25.52 51.898 25.501 51.853 25.502 L 51.445 25.502 C 51.405 25.501 51.366 25.517 51.337 25.545 C 51.308 25.574 51.292 25.613 51.293 25.653 L 51.293 28.319 C 51.293 28.399 51.357 28.47 51.445 28.47 L 51.742 28.47 C 51.825 28.468 51.892 28.402 51.894 28.319 L 51.894 26.409 L 53.583 28.418 C 53.611 28.452 53.654 28.471 53.699 28.47 L 54.106 28.47 C 54.19 28.468 54.257 28.402 54.259 28.319 L 54.259 25.653 C 54.257 25.57 54.19 25.503 54.106 25.502 Z M 58.19 25.502 L 56.413 25.502 C 56.255 25.501 56.104 25.563 55.993 25.675 C 55.881 25.786 55.819 25.938 55.82 26.095 L 55.82 27.871 C 55.82 28.202 56.082 28.463 56.413 28.463 L 58.19 28.463 C 58.348 28.465 58.499 28.403 58.611 28.292 C 58.723 28.18 58.785 28.029 58.784 27.871 L 58.784 26.095 C 58.785 25.938 58.723 25.786 58.611 25.675 C 58.499 25.564 58.348 25.502 58.19 25.503 Z M 58.19 27.864 L 56.419 27.864 L 56.419 26.101 L 58.185 26.101 L 58.19 27.865 Z M 63.164 27.864 L 60.95 27.864 L 60.95 25.648 C 60.951 25.608 60.935 25.569 60.907 25.54 C 60.878 25.511 60.84 25.496 60.799 25.496 L 60.503 25.496 C 60.462 25.495 60.423 25.511 60.394 25.54 C 60.366 25.568 60.35 25.608 60.35 25.648 L 60.35 28.312 C 60.35 28.393 60.421 28.463 60.503 28.463 L 63.164 28.463 C 63.204 28.464 63.243 28.448 63.271 28.42 C 63.3 28.391 63.316 28.353 63.315 28.312 L 63.315 28.01 C 63.314 27.927 63.247 27.86 63.164 27.858 M 67.049 25.502 L 65.274 25.502 C 65.115 25.5 64.963 25.562 64.851 25.674 C 64.74 25.785 64.677 25.937 64.678 26.095 L 64.678 27.871 C 64.678 28.203 64.941 28.464 65.274 28.464 L 67.049 28.464 C 67.207 28.465 67.359 28.403 67.47 28.292 C 67.582 28.18 67.644 28.029 67.643 27.871 L 67.643 26.095 C 67.644 25.938 67.582 25.787 67.471 25.675 C 67.359 25.564 67.208 25.502 67.051 25.503 Z M 67.049 27.864 L 65.278 27.864 L 65.278 26.101 L 67.045 26.101 L 67.049 27.865 Z M 71.582 25.502 L 69.804 25.502 C 69.646 25.501 69.494 25.563 69.383 25.675 C 69.272 25.786 69.21 25.938 69.211 26.095 L 69.211 27.871 C 69.211 28.202 69.472 28.463 69.804 28.463 L 71.582 28.463 C 71.739 28.464 71.891 28.402 72.002 28.291 C 72.113 28.18 72.175 28.029 72.175 27.871 L 72.175 26.911 C 72.175 26.871 72.16 26.832 72.131 26.803 C 72.103 26.775 72.065 26.759 72.025 26.759 L 71.069 26.759 C 70.985 26.76 70.918 26.827 70.918 26.911 L 70.918 27.213 C 70.918 27.294 70.982 27.364 71.069 27.364 L 71.582 27.364 L 71.582 27.864 L 69.816 27.87 L 69.816 26.101 L 71.582 26.095 L 71.582 26.2 C 71.582 26.281 71.651 26.351 71.733 26.351 L 72.029 26.351 C 72.113 26.35 72.18 26.283 72.182 26.2 L 72.182 26.095 C 72.183 25.937 72.12 25.786 72.008 25.675 C 71.896 25.563 71.745 25.501 71.587 25.503 M 74.191 25.502 L 73.893 25.502 C 73.853 25.502 73.815 25.517 73.786 25.546 C 73.758 25.574 73.742 25.613 73.742 25.653 L 73.742 28.318 C 73.742 28.399 73.812 28.47 73.893 28.47 L 74.191 28.47 C 74.274 28.468 74.34 28.401 74.342 28.318 L 74.342 25.653 C 74.34 25.57 74.274 25.504 74.191 25.502 Z M 78.815 25.502 L 76.602 25.502 C 76.444 25.501 76.293 25.563 76.181 25.675 C 76.07 25.786 76.008 25.938 76.009 26.095 L 76.009 27.871 C 76.009 28.203 76.27 28.464 76.602 28.464 L 78.815 28.464 C 78.899 28.463 78.966 28.396 78.968 28.312 L 78.968 28.01 C 78.966 27.927 78.899 27.86 78.815 27.859 L 76.608 27.859 L 76.602 26.095 L 78.815 26.095 C 78.856 26.096 78.895 26.08 78.923 26.052 C 78.952 26.023 78.968 25.984 78.968 25.944 L 78.968 25.642 C 78.966 25.559 78.899 25.492 78.815 25.491 M 82.887 25.502 L 81.111 25.502 C 80.953 25.5 80.801 25.562 80.689 25.674 C 80.577 25.785 80.515 25.937 80.516 26.095 L 80.516 28.312 C 80.516 28.393 80.58 28.464 80.668 28.464 L 80.971 28.464 C 81.011 28.464 81.05 28.448 81.078 28.42 C 81.107 28.391 81.122 28.353 81.122 28.312 L 81.122 27.492 L 82.888 27.492 L 82.888 28.314 C 82.888 28.393 82.957 28.464 83.038 28.464 L 83.341 28.464 C 83.381 28.464 83.42 28.448 83.449 28.42 C 83.477 28.392 83.493 28.353 83.493 28.312 L 83.493 26.095 C 83.494 25.938 83.432 25.786 83.32 25.675 C 83.208 25.564 83.057 25.502 82.899 25.503 M 82.882 26.095 L 82.882 26.893 L 81.116 26.893 L 81.116 26.101 Z M 87.558 26.351 L 87.856 26.351 C 87.896 26.352 87.935 26.336 87.963 26.307 C 87.992 26.279 88.008 26.24 88.007 26.2 L 88.007 26.095 C 88.008 25.938 87.946 25.786 87.834 25.675 C 87.723 25.564 87.571 25.502 87.413 25.503 L 85.636 25.503 C 85.479 25.502 85.327 25.564 85.215 25.675 C 85.104 25.786 85.041 25.938 85.042 26.095 L 85.042 26.69 C 85.042 27.016 85.31 27.282 85.636 27.282 L 87.407 27.271 L 87.407 27.859 L 85.642 27.864 L 85.642 27.76 C 85.643 27.72 85.627 27.681 85.599 27.652 C 85.57 27.624 85.532 27.608 85.491 27.608 L 85.194 27.608 C 85.153 27.608 85.114 27.624 85.086 27.652 C 85.057 27.681 85.042 27.72 85.042 27.76 L 85.042 27.864 C 85.042 28.196 85.305 28.459 85.636 28.459 L 87.413 28.459 C 87.571 28.46 87.723 28.398 87.835 28.286 C 87.947 28.174 88.009 28.022 88.007 27.864 L 88.007 27.272 C 88.007 26.944 87.741 26.679 87.413 26.678 L 85.642 26.69 L 85.642 26.101 L 87.408 26.095 L 87.408 26.2 C 87.408 26.281 87.477 26.351 87.558 26.351 Z M 40.319 20.201 C 40.319 19.643 39.743 18.666 39.201 18.026 L 36.825 15.215 C 36.486 14.819 36.237 14.511 36.084 14.313 C 36.411 14.22 36.895 14.052 37.477 13.796 C 39.206 13.015 39.778 11.659 39.83 11.526 C 40.302 10.479 40.326 8.617 40.326 8.255 L 40.326 6.167 C 40.326 3.95 39.859 2.46 38.858 1.472 C 37.855 0.482 36.353 0.022 34.128 0.005 L 1.899 0.005 L 1.899 0 C 0.853 0 0.004 0.845 0 1.89 L 0 3.095 C 0 4.142 0.85 4.992 1.899 4.992 L 6.757 4.992 C 7.514 4.992 8.131 5.608 8.131 6.359 L 8.131 19.329 C 8.131 20.376 8.981 21.226 10.03 21.226 L 11.259 21.226 C 12.302 21.226 13.158 20.376 13.158 19.329 L 13.158 6.364 C 13.158 5.608 13.775 4.998 14.528 4.998 L 33.901 4.998 C 34.658 4.998 35.269 5.614 35.269 6.364 L 35.269 8.023 C 35.269 8.78 34.652 9.39 33.901 9.39 L 20.939 9.39 C 19.89 9.39 19.039 10.239 19.039 11.287 L 19.039 19.335 C 19.039 20.382 19.891 21.232 20.939 21.232 L 22.139 21.232 C 23.187 21.232 24.038 20.382 24.038 19.335 L 24.038 14.453 C 24.277 14.435 24.754 14.412 25.407 14.412 L 28.074 14.412 C 28.897 14.406 30.031 14.936 30.556 15.559 L 34.191 19.882 C 34.814 20.62 36.107 21.226 37.074 21.226 L 38.42 21.226 C 39.503 21.226 40.319 20.783 40.319 20.201 Z M 87.855 19.333 L 87.855 1.873 C 87.855 0.901 87.064 0.109 86.091 0.109 L 84.833 0.109 C 83.859 0.109 83.067 0.901 83.067 1.873 L 83.067 12.428 C 83.067 12.725 83.015 12.882 82.969 12.963 C 82.899 13.096 82.812 13.096 82.783 13.096 C 82.643 13.096 82.444 12.963 82.247 12.725 L 72.735 1.402 C 72.135 0.685 70.884 0.104 69.95 0.104 L 68.605 0.104 C 67.632 0.104 66.839 0.895 66.839 1.867 L 66.839 19.329 C 66.839 20.3 67.632 21.093 68.605 21.093 L 69.805 21.093 C 70.777 21.093 71.57 20.3 71.57 19.329 L 71.57 8.722 C 71.57 8.309 71.68 8.046 71.855 8.046 C 71.995 8.046 72.194 8.179 72.391 8.418 L 81.962 19.794 C 82.562 20.51 83.813 21.091 84.745 21.091 L 86.091 21.091 C 87.064 21.091 87.856 20.3 87.856 19.329 M 55.167 7.616 L 51.69 7.616 C 51.003 7.616 50.444 8.174 50.444 8.861 L 50.444 12.335 C 50.444 13.021 51.003 13.579 51.69 13.579 L 55.167 13.579 C 55.854 13.579 56.413 13.021 56.413 12.335 L 56.413 8.861 C 56.413 8.174 55.854 7.616 55.167 7.616 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        o(H, {
                                          className: `framer-okq0dl`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.965 2.957" overflow="visible"><path d="M 2.371 0 L 0.594 0 C 0.436 -0.001 0.285 0.061 0.173 0.173 C 0.062 0.284 0 0.436 0.001 0.593 L 0.001 1.188 C 0.001 1.514 0.267 1.78 0.594 1.78 L 2.365 1.769 L 2.365 2.357 L 0.6 2.362 L 0.6 2.258 C 0.599 2.175 0.532 2.107 0.449 2.106 L 0.151 2.106 C 0.111 2.106 0.072 2.122 0.044 2.15 C 0.015 2.179 -0.001 2.218 0 2.258 L 0 2.362 C 0 2.695 0.263 2.957 0.594 2.957 L 2.371 2.957 C 2.529 2.958 2.681 2.896 2.793 2.784 C 2.904 2.672 2.966 2.52 2.965 2.362 L 2.965 1.77 C 2.964 1.443 2.699 1.177 2.371 1.176 L 0.6 1.188 L 0.6 0.599 L 2.366 0.593 L 2.366 0.698 C 2.366 0.779 2.435 0.849 2.516 0.849 L 2.814 0.849 C 2.854 0.85 2.892 0.834 2.921 0.806 C 2.949 0.777 2.965 0.739 2.965 0.698 L 2.965 0.593 C 2.966 0.436 2.903 0.284 2.792 0.173 C 2.68 0.062 2.529 0 2.371 0.001 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1qt118s`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.964 2.962" overflow="visible"><path d="M 2.37 0 L 0.593 0 C 0.435 -0.001 0.284 0.061 0.172 0.173 C 0.061 0.284 -0.001 0.436 0 0.593 L 0 2.37 C 0 2.701 0.261 2.962 0.593 2.962 L 2.371 2.962 C 2.528 2.963 2.68 2.901 2.791 2.789 C 2.902 2.678 2.965 2.527 2.964 2.37 L 2.964 0.593 C 2.965 0.436 2.902 0.285 2.791 0.174 C 2.68 0.062 2.528 0 2.371 0.001 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1q3zu6i`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.771 1.764" overflow="visible"><path d="M 1.771 1.763 L 0 1.763 L 0 0 L 1.766 0 L 1.771 1.764 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-h28rft`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.971 2.968" overflow="visible"><path d="M 2.818 2.368 L 0.605 2.368 L 0.605 0.152 C 0.605 0.112 0.59 0.073 0.561 0.044 C 0.533 0.016 0.494 0 0.454 0 L 0.151 0 C 0.111 0 0.072 0.016 0.044 0.044 C 0.015 0.073 -0.001 0.112 0 0.152 L 0 2.817 C 0 2.898 0.064 2.968 0.151 2.968 L 2.818 2.968 C 2.859 2.968 2.898 2.953 2.927 2.924 C 2.955 2.896 2.971 2.857 2.971 2.817 L 2.971 2.515 C 2.97 2.431 2.902 2.364 2.818 2.362" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1n6oi8i`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.964 2.962" overflow="visible"><path d="M 2.818 0 L 2.516 0 C 2.476 0 2.437 0.015 2.409 0.044 C 2.38 0.072 2.364 0.111 2.365 0.151 L 2.365 2.362 L 0.599 2.368 L 0.599 0.151 C 0.597 0.068 0.53 0.002 0.448 0 L 0.151 0 C 0.111 0 0.072 0.015 0.044 0.044 C 0.016 0.072 0 0.111 0 0.151 L 0 2.368 C 0 2.701 0.261 2.962 0.593 2.962 L 2.371 2.962 C 2.528 2.963 2.68 2.901 2.791 2.789 C 2.902 2.678 2.965 2.527 2.964 2.37 L 2.964 0.151 C 2.962 0.068 2.895 0.002 2.812 0" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-dkfvcs`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.959 3.491" overflow="visible"><path d="M 2.808 0.017 L 0.594 0.017 C 0.436 0.016 0.284 0.078 0.173 0.189 C 0.061 0.301 -0.001 0.452 0 0.61 L 0 2.385 C 0 2.716 0.263 2.979 0.594 2.979 L 1.124 2.979 L 1.043 3.305 C 1.031 3.351 1.043 3.398 1.072 3.433 C 1.1 3.469 1.142 3.49 1.188 3.491 L 1.485 3.491 C 1.555 3.491 1.615 3.443 1.631 3.375 L 1.73 2.972 L 2.808 2.972 C 2.89 2.971 2.957 2.904 2.959 2.821 L 2.959 2.519 C 2.957 2.437 2.89 2.37 2.808 2.368 L 0.6 2.368 L 0.594 0.604 L 2.808 0.604 C 2.848 0.604 2.886 0.589 2.915 0.56 C 2.943 0.532 2.959 0.493 2.959 0.453 L 2.959 0.151 C 2.957 0.068 2.89 0.002 2.808 0" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1icous7`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.964 2.962" overflow="visible"><path d="M 2.37 0 L 0.594 0 C 0.436 -0.001 0.284 0.061 0.173 0.172 C 0.061 0.284 -0.001 0.436 0 0.593 L 0 2.37 C 0 2.701 0.261 2.962 0.593 2.962 L 2.371 2.962 C 2.528 2.963 2.68 2.901 2.791 2.789 C 2.902 2.678 2.965 2.527 2.964 2.37 L 2.964 0.593 C 2.965 0.436 2.902 0.285 2.791 0.174 C 2.68 0.062 2.528 0 2.371 0.001 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1fh95k9`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.771 1.764" overflow="visible"><path d="M 1.77 1.763 L 0 1.763 L 0 0 L 1.765 0 L 1.771 1.764 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1voj3xz`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.731 2.977" overflow="visible"><path d="M 2.58 0.01 L 0.151 0.01 C 0.111 0.009 0.072 0.025 0.044 0.054 C 0.015 0.083 -0.001 0.122 0 0.162 L 0 2.826 C 0 2.907 0.07 2.977 0.151 2.977 L 2.58 2.977 C 2.663 2.976 2.73 2.909 2.731 2.826 L 2.731 2.524 C 2.731 2.441 2.664 2.373 2.58 2.372 L 0.6 2.372 L 0.6 1.792 L 2.16 1.792 C 2.201 1.792 2.239 1.776 2.268 1.748 C 2.296 1.72 2.312 1.681 2.312 1.641 L 2.312 1.339 C 2.312 1.298 2.297 1.26 2.268 1.231 C 2.24 1.202 2.201 1.186 2.16 1.187 L 0.6 1.187 L 0.6 0.604 L 2.58 0.604 C 2.62 0.604 2.659 0.589 2.687 0.56 C 2.716 0.532 2.732 0.493 2.731 0.453 L 2.731 0.151 C 2.73 0.068 2.663 0.001 2.58 0" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-ity3h0`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.965 2.957" overflow="visible"><path d="M 2.371 0 L 0.593 0 C 0.435 -0.001 0.284 0.061 0.172 0.173 C 0.061 0.284 -0.001 0.436 0 0.593 L 0 1.188 C 0 1.514 0.267 1.78 0.593 1.78 L 2.365 1.769 L 2.365 2.357 L 0.599 2.362 L 0.599 2.258 C 0.599 2.218 0.584 2.179 0.556 2.151 C 0.528 2.122 0.489 2.106 0.449 2.106 L 0.151 2.106 C 0.111 2.106 0.072 2.122 0.044 2.15 C 0.015 2.179 -0.001 2.218 0 2.258 L 0 2.362 C 0 2.695 0.261 2.957 0.593 2.957 L 2.371 2.957 C 2.529 2.958 2.68 2.895 2.792 2.784 C 2.903 2.672 2.965 2.52 2.964 2.362 L 2.964 1.77 C 2.963 1.443 2.698 1.178 2.371 1.176 L 0.6 1.188 L 0.6 0.599 L 2.365 0.593 L 2.365 0.698 C 2.365 0.779 2.435 0.849 2.516 0.849 L 2.812 0.849 C 2.853 0.85 2.892 0.834 2.92 0.806 C 2.949 0.778 2.965 0.739 2.965 0.698 L 2.965 0.593 C 2.966 0.436 2.903 0.284 2.792 0.173 C 2.68 0.062 2.529 0 2.371 0.001 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-7uop7p`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.965 2.968" overflow="visible"><path d="M 2.814 0 L 0.151 0 C 0.111 0 0.072 0.015 0.044 0.044 C 0.016 0.072 0 0.111 0 0.151 L 0 0.453 C 0 0.535 0.064 0.605 0.151 0.605 L 1.182 0.605 L 1.182 2.817 C 1.182 2.898 1.252 2.968 1.333 2.968 L 1.631 2.968 C 1.713 2.966 1.78 2.899 1.782 2.817 L 1.782 0.605 L 2.814 0.605 C 2.854 0.606 2.892 0.59 2.921 0.561 C 2.949 0.533 2.965 0.494 2.965 0.454 L 2.965 0.152 C 2.964 0.069 2.897 0.002 2.814 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1qi9je1`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.733 2.977" overflow="visible"><path d="M 2.58 0.01 L 0.151 0.01 C 0.111 0.009 0.072 0.025 0.044 0.054 C 0.015 0.083 -0.001 0.122 0 0.162 L 0 2.826 C 0 2.907 0.064 2.977 0.151 2.977 L 2.58 2.977 C 2.663 2.975 2.729 2.909 2.731 2.826 L 2.731 2.524 C 2.73 2.441 2.663 2.374 2.58 2.372 L 0.601 2.372 L 0.601 1.792 L 2.162 1.792 C 2.202 1.793 2.241 1.777 2.27 1.749 C 2.298 1.72 2.314 1.681 2.314 1.641 L 2.314 1.339 C 2.315 1.298 2.299 1.259 2.27 1.23 C 2.241 1.202 2.202 1.186 2.162 1.187 L 0.601 1.187 L 0.601 0.604 L 2.581 0.604 C 2.622 0.604 2.66 0.589 2.689 0.56 C 2.717 0.532 2.733 0.493 2.733 0.453 L 2.733 0.151 C 2.731 0.068 2.664 0.002 2.581 0" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1y8mgwg`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.959 2.972" overflow="visible"><path d="M 2.806 0.011 L 0.593 0.011 C 0.435 0.01 0.284 0.072 0.172 0.184 C 0.061 0.295 -0.001 0.447 0 0.604 L 0 2.38 C 0 2.712 0.261 2.972 0.593 2.972 L 2.806 2.972 C 2.89 2.971 2.957 2.905 2.959 2.821 L 2.959 2.519 C 2.957 2.436 2.89 2.37 2.806 2.368 L 0.599 2.368 L 0.593 0.604 L 2.806 0.604 C 2.847 0.605 2.886 0.589 2.914 0.561 C 2.943 0.532 2.959 0.493 2.959 0.453 L 2.959 0.151 C 2.957 0.068 2.89 0.001 2.806 0" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-kzfjsl`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.966 2.968" overflow="visible"><path d="M 2.814 0 L 2.517 0 C 2.477 0 2.438 0.016 2.41 0.044 C 2.382 0.072 2.366 0.111 2.366 0.151 L 2.366 2.06 L 0.676 0.053 C 0.648 0.019 0.605 -0.001 0.56 0 L 0.152 0 C 0.112 -0.001 0.073 0.015 0.044 0.043 C 0.016 0.072 0 0.111 0 0.151 L 0 2.817 C 0 2.898 0.064 2.968 0.152 2.968 L 0.449 2.968 C 0.532 2.966 0.599 2.9 0.601 2.817 L 0.601 0.907 L 2.29 2.916 C 2.319 2.95 2.361 2.969 2.406 2.968 L 2.814 2.968 C 2.897 2.966 2.964 2.9 2.966 2.817 L 2.966 0.151 C 2.964 0.068 2.897 0.001 2.814 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-18pybdn`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.964 2.962" overflow="visible"><path d="M 2.37 0 L 0.593 0 C 0.435 -0.001 0.284 0.061 0.172 0.173 C 0.061 0.284 -0.001 0.436 0 0.593 L 0 2.37 C 0 2.701 0.261 2.962 0.593 2.962 L 2.37 2.962 C 2.527 2.963 2.679 2.901 2.791 2.79 C 2.902 2.678 2.965 2.527 2.964 2.37 L 2.964 0.593 C 2.965 0.436 2.902 0.284 2.791 0.173 C 2.679 0.062 2.527 0 2.37 0.001 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-71c21r`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.771 1.764" overflow="visible"><path d="M 1.771 1.763 L 0 1.763 L 0 0 L 1.766 0 L 1.771 1.764 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1m5jsa1`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.965 2.968" overflow="visible"><path d="M 2.814 2.368 L 0.6 2.368 L 0.6 0.152 C 0.601 0.112 0.585 0.073 0.557 0.044 C 0.528 0.016 0.489 0 0.449 0 L 0.152 0 C 0.112 -0.001 0.073 0.015 0.044 0.044 C 0.015 0.073 -0.001 0.112 0 0.152 L 0 2.817 C 0 2.898 0.07 2.968 0.152 2.968 L 2.814 2.968 C 2.854 2.968 2.892 2.952 2.921 2.924 C 2.949 2.895 2.965 2.857 2.965 2.817 L 2.965 2.515 C 2.964 2.431 2.897 2.364 2.814 2.362" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-7lk704`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.965 2.962" overflow="visible"><path d="M 2.371 0 L 0.595 0 C 0.437 -0.002 0.285 0.06 0.173 0.172 C 0.061 0.284 -0.001 0.435 0 0.593 L 0 2.37 C 0 2.701 0.263 2.962 0.595 2.962 L 2.371 2.962 C 2.529 2.963 2.68 2.901 2.792 2.79 C 2.903 2.678 2.966 2.527 2.965 2.37 L 2.965 0.593 C 2.966 0.436 2.904 0.285 2.792 0.174 C 2.681 0.062 2.53 0 2.372 0.001 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-ozlut5`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.771 1.764" overflow="visible"><path d="M 1.771 1.763 L 0 1.763 L 0 0 L 1.766 0 L 1.771 1.764 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-ghswi1`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.971 2.962" overflow="visible"><path d="M 2.371 0 L 0.593 0 C 0.435 -0.001 0.284 0.061 0.172 0.173 C 0.061 0.284 -0.001 0.436 0 0.593 L 0 2.37 C 0 2.701 0.261 2.962 0.593 2.962 L 2.371 2.962 C 2.528 2.963 2.68 2.901 2.791 2.789 C 2.902 2.678 2.965 2.527 2.964 2.37 L 2.964 1.409 C 2.964 1.369 2.949 1.33 2.921 1.301 C 2.892 1.273 2.854 1.257 2.814 1.257 L 1.858 1.257 C 1.775 1.258 1.707 1.326 1.707 1.409 L 1.707 1.711 C 1.707 1.792 1.771 1.862 1.858 1.862 L 2.371 1.862 L 2.371 2.362 L 0.605 2.368 L 0.605 0.599 L 2.371 0.593 L 2.371 0.698 C 2.371 0.779 2.44 0.849 2.522 0.849 L 2.818 0.849 C 2.902 0.848 2.969 0.781 2.971 0.698 L 2.971 0.593 C 2.972 0.436 2.909 0.284 2.797 0.173 C 2.686 0.061 2.534 0 2.376 0.001" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-6etd69`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 2.968" overflow="visible"><path d="M 0.449 0 L 0.151 0 C 0.111 0 0.072 0.015 0.044 0.044 C 0.016 0.072 0 0.111 0 0.151 L 0 2.817 C 0 2.898 0.07 2.968 0.151 2.968 L 0.449 2.968 C 0.531 2.966 0.598 2.899 0.6 2.817 L 0.6 0.151 C 0.598 0.068 0.531 0.002 0.449 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-9wht6w`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.959 2.972" overflow="visible"><path d="M 2.806 0.011 L 0.593 0.011 C 0.435 0.01 0.284 0.072 0.172 0.184 C 0.061 0.295 -0.001 0.447 0 0.604 L 0 2.38 C 0 2.712 0.261 2.972 0.593 2.972 L 2.806 2.972 C 2.89 2.972 2.957 2.905 2.959 2.821 L 2.959 2.519 C 2.957 2.436 2.89 2.369 2.806 2.368 L 0.599 2.368 L 0.593 0.604 L 2.806 0.604 C 2.847 0.605 2.886 0.589 2.914 0.561 C 2.943 0.532 2.959 0.493 2.959 0.453 L 2.959 0.151 C 2.957 0.068 2.89 0.001 2.806 0" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-vs6698`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.977 2.962" overflow="visible"><path d="M 2.371 0 L 0.595 0 C 0.437 -0.002 0.285 0.06 0.173 0.172 C 0.061 0.284 -0.001 0.435 0 0.593 L 0 2.811 C 0 2.892 0.064 2.962 0.152 2.962 L 0.455 2.962 C 0.495 2.962 0.534 2.946 0.562 2.918 C 0.591 2.889 0.606 2.851 0.606 2.811 L 0.606 1.99 L 2.372 1.99 L 2.372 2.812 C 2.372 2.892 2.441 2.962 2.522 2.962 L 2.824 2.962 C 2.865 2.962 2.904 2.947 2.933 2.918 C 2.961 2.89 2.977 2.851 2.977 2.811 L 2.977 0.593 C 2.978 0.436 2.916 0.284 2.804 0.173 C 2.692 0.062 2.541 0 2.383 0.001" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-9aodh4`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.766 1" overflow="visible"><path d="M 1.766 0 L 1.766 0.797 L 0 0.797 L 0 0.006 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-15kxcrb`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.965 2.956" overflow="visible"><path d="M 2.516 0.848 L 2.814 0.848 C 2.854 0.849 2.892 0.833 2.921 0.804 C 2.949 0.776 2.965 0.737 2.965 0.697 L 2.965 0.592 C 2.966 0.435 2.903 0.283 2.792 0.172 C 2.68 0.061 2.529 -0.001 2.371 0 L 0.594 0 C 0.436 -0.001 0.285 0.061 0.173 0.172 C 0.061 0.283 -0.001 0.435 0 0.592 L 0 1.187 C 0 1.513 0.267 1.779 0.594 1.779 L 2.365 1.768 L 2.365 2.356 L 0.6 2.361 L 0.6 2.257 C 0.601 2.217 0.585 2.178 0.557 2.149 C 0.528 2.121 0.489 2.105 0.449 2.105 L 0.151 2.105 C 0.111 2.105 0.072 2.121 0.044 2.149 C 0.015 2.178 -0.001 2.217 0 2.257 L 0 2.361 C 0 2.693 0.263 2.956 0.594 2.956 L 2.371 2.956 C 2.529 2.957 2.681 2.895 2.793 2.783 C 2.904 2.671 2.966 2.519 2.965 2.361 L 2.965 1.769 C 2.964 1.441 2.699 1.176 2.371 1.175 L 0.6 1.187 L 0.6 0.598 L 2.366 0.592 L 2.366 0.697 C 2.366 0.778 2.435 0.848 2.516 0.848 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-180zslw`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40.326 21.232" overflow="visible"><path d="M 40.319 20.201 C 40.319 19.643 39.743 18.666 39.201 18.026 L 36.825 15.215 C 36.486 14.819 36.237 14.511 36.084 14.313 C 36.411 14.22 36.895 14.052 37.477 13.796 C 39.206 13.015 39.778 11.659 39.83 11.526 C 40.302 10.479 40.326 8.617 40.326 8.255 L 40.326 6.167 C 40.326 3.95 39.859 2.46 38.858 1.472 C 37.855 0.482 36.353 0.022 34.128 0.005 L 1.899 0.005 L 1.899 0 C 0.853 0 0.004 0.845 0 1.89 L 0 3.095 C 0 4.142 0.85 4.992 1.899 4.992 L 6.757 4.992 C 7.514 4.992 8.131 5.608 8.131 6.359 L 8.131 19.329 C 8.131 20.376 8.981 21.226 10.03 21.226 L 11.259 21.226 C 12.302 21.226 13.158 20.376 13.158 19.329 L 13.158 6.364 C 13.158 5.608 13.775 4.998 14.528 4.998 L 33.901 4.998 C 34.658 4.998 35.269 5.614 35.269 6.364 L 35.269 8.023 C 35.269 8.78 34.652 9.39 33.901 9.39 L 20.939 9.39 C 19.89 9.39 19.039 10.239 19.039 11.287 L 19.039 19.335 C 19.039 20.382 19.891 21.232 20.939 21.232 L 22.139 21.232 C 23.187 21.232 24.038 20.382 24.038 19.335 L 24.038 14.453 C 24.277 14.435 24.754 14.412 25.407 14.412 L 28.074 14.412 C 28.897 14.406 30.031 14.936 30.556 15.559 L 34.191 19.882 C 34.814 20.62 36.107 21.226 37.074 21.226 L 38.42 21.226 C 39.503 21.226 40.319 20.783 40.319 20.201 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1y5ocno`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.017 20.989" overflow="visible"><path d="M 21.016 19.229 L 21.016 1.769 C 21.016 0.798 20.225 0.005 19.252 0.005 L 17.994 0.005 C 17.021 0.005 16.228 0.798 16.228 1.769 L 16.228 12.324 C 16.228 12.621 16.176 12.778 16.13 12.859 C 16.06 12.992 15.973 12.992 15.944 12.992 C 15.804 12.992 15.605 12.859 15.408 12.621 L 5.896 1.298 C 5.296 0.581 4.045 0 3.111 0 L 1.766 0 C 0.794 0 0 0.791 0 1.763 L 0 19.225 C 0 20.196 0.794 20.989 1.766 20.989 L 2.966 20.989 C 3.939 20.989 4.731 20.196 4.731 19.225 L 4.731 8.618 C 4.731 8.205 4.841 7.942 5.016 7.942 C 5.157 7.942 5.355 8.075 5.552 8.315 L 15.123 19.69 C 15.723 20.406 16.975 20.988 17.906 20.988 L 19.252 20.988 C 20.225 20.988 21.017 20.196 21.017 19.225" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-wxjv8p`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.969 5.963" overflow="visible"><path d="M 4.724 0 L 1.246 0 C 0.559 0 0 0.558 0 1.245 L 0 4.719 C 0 5.405 0.559 5.963 1.246 5.963 L 4.724 5.963 C 5.411 5.963 5.969 5.405 5.969 4.719 L 5.969 1.245 C 5.969 0.558 5.411 0 4.724 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    l(H, {
                                      className: `framer-5y22jw`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 43.609 25.323" overflow="visible"><path d="M 36.446 0 L 24.225 0 C 21.727 0.003 19.702 2.026 19.7 4.522 L 19.7 16.728 C 19.702 19.224 21.727 21.247 24.225 21.25 L 36.446 21.25 C 38.945 21.248 40.97 19.225 40.972 16.728 L 40.972 4.522 C 40.97 2.025 38.945 0.002 36.446 0 Z M 35.922 14.866 C 35.922 15.623 35.305 16.234 34.553 16.234 L 26.061 16.234 C 25.303 16.234 24.686 15.618 24.686 14.866 L 24.686 6.384 C 24.686 5.626 25.303 5.016 26.06 5.016 L 34.553 5.016 C 35.31 5.016 35.922 5.632 35.922 6.384 Z M 0.204 25.02 C 0.268 25.001 0.335 24.993 0.402 24.997 C 0.536 24.997 0.652 25.067 0.78 25.148 C 0.925 25.235 1.078 25.323 1.258 25.323 C 1.371 25.321 1.482 25.295 1.585 25.247 C 1.642 25.225 1.679 25.169 1.678 25.108 L 1.678 24.875 C 1.676 24.823 1.65 24.776 1.608 24.747 C 1.563 24.718 1.507 24.718 1.462 24.747 C 1.406 24.78 1.342 24.8 1.276 24.805 C 1.159 24.788 1.049 24.724 0.925 24.66 C 0.768 24.571 0.606 24.478 0.402 24.478 C 0.298 24.477 0.196 24.495 0.099 24.532 C 0.041 24.553 0.001 24.608 0 24.671 L 0 24.881 C 0 24.933 0.024 24.979 0.064 25.002 C 0.105 25.031 0.158 25.038 0.204 25.02 Z M 42.994 25.27 L 43.32 25.27 C 43.39 25.27 43.45 25.222 43.465 25.154 L 43.604 24.59 C 43.616 24.545 43.605 24.497 43.575 24.461 C 43.547 24.426 43.505 24.405 43.459 24.403 L 43.139 24.403 C 43.069 24.403 43.009 24.452 42.994 24.519 L 42.853 25.084 C 42.841 25.131 42.853 25.177 42.882 25.212 C 42.911 25.248 42.954 25.269 43 25.27" fill="rgb(0, 0, 0)"></path></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        o(H, {
                                          className: `framer-1w5a3tc`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.272 21.25" overflow="visible"><path d="M 16.746 0 L 4.525 0 C 2.027 0.003 0.002 2.026 0 4.522 L 0 16.728 C 0.002 19.224 2.027 21.247 4.525 21.25 L 16.746 21.25 C 19.245 21.248 21.27 19.225 21.272 16.728 L 21.272 4.522 C 21.27 2.025 19.245 0.002 16.746 0 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1819j6r`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.236 11.218" overflow="visible"><path d="M 11.236 9.85 C 11.236 10.607 10.619 11.218 9.867 11.218 L 1.375 11.218 C 0.617 11.218 0 10.602 0 9.85 L 0 1.368 C 0 0.61 0.617 0 1.374 0 L 9.867 0 C 10.624 0 11.236 0.616 11.236 1.368 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1ub1gg4`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.678 1" overflow="visible"><path d="M 0.204 0.541 C 0.268 0.522 0.335 0.515 0.402 0.519 C 0.536 0.519 0.652 0.589 0.78 0.67 C 0.925 0.757 1.078 0.845 1.258 0.845 C 1.371 0.843 1.482 0.817 1.585 0.769 C 1.642 0.747 1.679 0.691 1.678 0.63 L 1.678 0.396 C 1.676 0.345 1.65 0.297 1.608 0.268 C 1.563 0.24 1.507 0.24 1.462 0.268 C 1.406 0.302 1.342 0.322 1.276 0.326 C 1.159 0.309 1.049 0.245 0.925 0.181 C 0.768 0.093 0.606 0 0.402 0 C 0.298 -0.002 0.196 0.016 0.099 0.053 C 0.041 0.075 0.001 0.13 0 0.192 L 0 0.403 C 0 0.454 0.024 0.5 0.064 0.523 C 0.105 0.552 0.158 0.559 0.204 0.541 Z" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        o(H, {
                                          className: `framer-1itud0a`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.145 0.866 L 0.472 0.866 C 0.541 0.866 0.601 0.818 0.617 0.75 L 0.756 0.186 C 0.767 0.141 0.757 0.094 0.727 0.058 C 0.699 0.022 0.656 0.001 0.611 0 L 0.29 0 C 0.221 0 0.16 0.048 0.145 0.116 L 0.005 0.68 C -0.007 0.727 0.005 0.773 0.034 0.808 C 0.062 0.844 0.105 0.866 0.151 0.866" fill="transparent"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l(Kt, {
                      __framer__animate: { transition: nn },
                      __framer__animateOnce: !1,
                      __framer__enter: tn,
                      __framer__exit: rn,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-1ynu6qx`,
                      "data-framer-name": `Frame 54`,
                      layout: V,
                      children: [
                        o(P, {
                          breakpoint: E,
                          overrides: {
                            cT0oGnq0S: {
                              children: o(t, {
                                children: l(`h1`, {
                                  style: {
                                    "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                                    "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                                    "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on`,
                                    "--framer-font-size": `13px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.04em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                  },
                                  children: [
                                    o(`span`, {
                                      style: { "--framer-font-size": `32px` },
                                      children: `LET'S CREATE `,
                                    }),
                                    o(`span`, {
                                      style: { "--framer-font-size": `32px` },
                                      children: o(`br`, {}),
                                    }),
                                    o(`span`, {
                                      style: { "--framer-font-size": `32px` },
                                      children: `SOMETHING `,
                                    }),
                                    o(`span`, {
                                      style: { "--framer-font-size": `32px` },
                                      children: o(`br`, {}),
                                    }),
                                    o(`span`, {
                                      style: { "--framer-font-size": `32px` },
                                      children: `GREAT`,
                                    }),
                                    o(`span`, {
                                      style: { "--framer-font-size": `32px` },
                                      children: o(`br`, {}),
                                    }),
                                    o(`span`, {
                                      style: { "--framer-font-size": `32px` },
                                      children: `TOGETHER`,
                                    }),
                                  ],
                                }),
                              }),
                            },
                          },
                          children: o(k, {
                            __fromCanvasComponent: !0,
                            children: o(t, {
                              children: l(`h1`, {
                                style: {
                                  "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                                  "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                                  "--framer-font-open-type-features": `'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on`,
                                  "--framer-font-size": `40px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-letter-spacing": `-0.04em`,
                                  "--framer-line-height": `1em`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                },
                                children: [
                                  `LET'S CREATE `,
                                  o(`br`, {}),
                                  `SOMETHING `,
                                  o(`br`, {}),
                                  `GREAT`,
                                  o(`br`, {}),
                                  `TOGETHER`,
                                ],
                              }),
                            }),
                            className: `framer-l55vgi`,
                            fonts: [`FS;Panchang-bold`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        l(`div`, {
                          className: `framer-syzelj`,
                          "data-framer-name": `Frame 63`,
                          children: [
                            o(P, {
                              breakpoint: E,
                              overrides: {
                                cT0oGnq0S: { y: (y?.y || 0) + 0 + 1448.336 + 80 + 92 + 0 + 0 },
                                D2RFb9sz1: { y: (y?.y || 0) + 0 + 4453.872 + 90 + 100 + 0 },
                              },
                              children: o(B, {
                                height: 56,
                                y: (y?.y || 0) + 0 + 2949.872 + 90 + 100 + 0,
                                children: o(L, {
                                  className: `framer-acrtj2-container`,
                                  nodeId: `g4IRTl9Qq`,
                                  scopeId: `augiA20Il`,
                                  children: o(K, {
                                    height: `100%`,
                                    id: `g4IRTl9Qq`,
                                    layoutId: `g4IRTl9Qq`,
                                    variant: Q(`RxDvKlaCR`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            o(P, {
                              breakpoint: E,
                              overrides: {
                                cT0oGnq0S: { y: (y?.y || 0) + 0 + 1448.336 + 80 + 92 + 0 + 0 },
                                D2RFb9sz1: { y: (y?.y || 0) + 0 + 4453.872 + 90 + 100 + 0 },
                              },
                              children: o(B, {
                                height: 56,
                                y: (y?.y || 0) + 0 + 2949.872 + 90 + 100 + 0,
                                children: o(L, {
                                  className: `framer-142vw7p-container`,
                                  nodeId: `iDo7pxCWJ`,
                                  scopeId: `augiA20Il`,
                                  children: o(K, {
                                    height: `100%`,
                                    id: `iDo7pxCWJ`,
                                    layoutId: `iDo7pxCWJ`,
                                    variant: Q(`zhhy0HMrd`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            o(P, {
                              breakpoint: E,
                              overrides: {
                                cT0oGnq0S: { y: (y?.y || 0) + 0 + 1448.336 + 80 + 92 + 0 + 104 },
                                D2RFb9sz1: { y: (y?.y || 0) + 0 + 4453.872 + 90 + 100 + 0 },
                              },
                              children: o(B, {
                                height: 56,
                                y: (y?.y || 0) + 0 + 2949.872 + 90 + 100 + 0,
                                children: o(L, {
                                  className: `framer-14rjy9e-container`,
                                  nodeId: `BXlSAMU9o`,
                                  scopeId: `augiA20Il`,
                                  children: o(K, {
                                    height: `100%`,
                                    id: `BXlSAMU9o`,
                                    layoutId: `BXlSAMU9o`,
                                    variant: Q(`fpxH_SWiZ`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            o(P, {
                              breakpoint: E,
                              overrides: {
                                cT0oGnq0S: { y: (y?.y || 0) + 0 + 1448.336 + 80 + 92 + 0 + 104 },
                                D2RFb9sz1: { y: (y?.y || 0) + 0 + 4453.872 + 90 + 100 + 0 },
                              },
                              children: o(B, {
                                height: 56,
                                y: (y?.y || 0) + 0 + 2949.872 + 90 + 100 + 0,
                                children: o(L, {
                                  className: `framer-spthqf-container`,
                                  nodeId: `l08ESGEai`,
                                  scopeId: `augiA20Il`,
                                  children: o(K, {
                                    height: `100%`,
                                    id: `l08ESGEai`,
                                    layoutId: `l08ESGEai`,
                                    variant: Q(`N9YlPPvNU`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            me() &&
                              o(H, {
                                className: `framer-5437c9 hidden-10e6z3q`,
                                "data-framer-name": `Camada_1`,
                                fill: `rgba(0,0,0,1)`,
                                intrinsicHeight: 35,
                                intrinsicWidth: 110,
                                svg: `<svg width="110" height="35" viewBox="0 0 110 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2312_182)">
<path d="M35.7689 0.0172414V35H30.5444V0.0172414H35.7689ZM97.304 0.844828C97.304 0.551724 97.09 0.293103 96.9831 0.0172414H91.9725C91.8477 0.293103 91.7764 0.551724 91.6694 0.844828C87.907 10.8793 82.736 24.8621 79.0093 34.8966H84.644L94.4867 8.43104L104.365 35H110C106.291 24.9138 101.12 10.9483 97.3575 0.844828H97.304ZM5.2956 0H-0.000233456V32.2931C-0.0715578 33.7241 1.06963 34.931 2.54961 35C2.58527 35 2.62094 35 2.6566 35H23.1802V29.7069H5.20644L5.27777 0H5.2956ZM94.558 20.8966C93.078 20.8621 91.8299 22 91.812 23.4483C91.7764 24.8793 92.9532 26.0862 94.451 26.1035C95.931 26.1379 97.1792 25 97.197 23.5517C97.197 23.5 97.197 23.4655 97.197 23.4138C97.1792 22.0172 96.0023 20.8966 94.558 20.8793V20.8966ZM74.1236 0.0172414H68.9169L58.6462 22.1552L48.3755 0.0172414H43.1688V0.775862V35H48.4825V12.7586L55.7219 28.4483L56.1855 29.4483V29.569C56.5065 30.2069 57.0593 30.6897 57.7368 30.9138C58.2718 31.0862 58.878 31.0862 59.413 30.9138C60.0905 30.6897 60.6433 30.2241 60.9464 29.6035C60.9464 29.6035 60.9464 29.5172 60.9464 29.4655L61.41 28.4828L68.6495 12.8103V35H73.9631V0.775862L74.1058 0.0172414H74.1236Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2312_182">
<rect width="110" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                                withExternalLayout: !0,
                              }),
                          ],
                        }),
                        o(k, {
                          __fromCanvasComponent: !0,
                          children: o(t, {
                            children: l(`p`, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `SW50ZXItQm9sZA==`,
                                "--framer-font-size": `24px`,
                                "--framer-font-weight": `700`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `rgb(255, 255, 255)`,
                              },
                              children: [
                                `FILIPE LIMA `,
                                o(`span`, {
                                  style: {
                                    "--font-selector": `SW50ZXI=`,
                                    "--framer-font-weight": `400`,
                                  },
                                  children: `| 2026`,
                                }),
                              ],
                            }),
                          }),
                          className: `framer-1uf0ad7`,
                          "data-framer-name": `Lima © 2024`,
                          fonts: [`Inter-Bold`, `Inter`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        he() &&
                          o(H, {
                            className: `framer-1si6wc7 hidden-72rtr7 hidden-1594ls3`,
                            "data-framer-name": `Camada_1`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 35,
                            intrinsicWidth: 110,
                            svg: `<svg width="110" height="35" viewBox="0 0 110 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2312_182)">
<path d="M35.7689 0.0172414V35H30.5444V0.0172414H35.7689ZM97.304 0.844828C97.304 0.551724 97.09 0.293103 96.9831 0.0172414H91.9725C91.8477 0.293103 91.7764 0.551724 91.6694 0.844828C87.907 10.8793 82.736 24.8621 79.0093 34.8966H84.644L94.4867 8.43104L104.365 35H110C106.291 24.9138 101.12 10.9483 97.3575 0.844828H97.304ZM5.2956 0H-0.000233456V32.2931C-0.0715578 33.7241 1.06963 34.931 2.54961 35C2.58527 35 2.62094 35 2.6566 35H23.1802V29.7069H5.20644L5.27777 0H5.2956ZM94.558 20.8966C93.078 20.8621 91.8299 22 91.812 23.4483C91.7764 24.8793 92.9532 26.0862 94.451 26.1035C95.931 26.1379 97.1792 25 97.197 23.5517C97.197 23.5 97.197 23.4655 97.197 23.4138C97.1792 22.0172 96.0023 20.8966 94.558 20.8793V20.8966ZM74.1236 0.0172414H68.9169L58.6462 22.1552L48.3755 0.0172414H43.1688V0.775862V35H48.4825V12.7586L55.7219 28.4483L56.1855 29.4483V29.569C56.5065 30.2069 57.0593 30.6897 57.7368 30.9138C58.2718 31.0862 58.878 31.0862 59.413 30.9138C60.0905 30.6897 60.6433 30.2241 60.9464 29.6035C60.9464 29.6035 60.9464 29.5172 60.9464 29.4655L61.41 28.4828L68.6495 12.8103V35H73.9631V0.775862L74.1058 0.0172414H74.1236Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2312_182">
<rect width="110" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                      ],
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-Ttar1.framer-lux5qc, .framer-Ttar1 .framer-lux5qc { display: block; }`,
        `.framer-Ttar1.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Ttar1 .framer-w84qof-container { flex: none; height: 88px; position: sticky; top: 0px; width: 100%; z-index: 10; }`,
        `.framer-Ttar1 .framer-chgukb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 48px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-1x84i0j { align-content: flex-start; align-items: flex-start; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 80px 80px 80px; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-wygtcx { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; box-shadow: 0px 15px 30px -15px rgba(0, 0, 0, 0.25); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Ttar1 .framer-a51c5e { aspect-ratio: 1.6314432989690721 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-1inr46b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 32px; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-d082lq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Ttar1 .framer-1xnufoz, .framer-Ttar1 .framer-164av2n, .framer-Ttar1 .framer-1uf0ad7 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Ttar1 .framer-1yk9v60 { flex: none; height: 52px; position: relative; text-decoration: none; width: 52px; }`,
        `.framer-Ttar1 .framer-1gjgug6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Ttar1 .framer-owhi0s, .framer-Ttar1 .framer-1azq5i4, .framer-Ttar1 .framer-3b6yzu, .framer-Ttar1 .framer-l55vgi { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Ttar1 .framer-102auha { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ttar1 .framer-tj5zkk { align-content: center; align-items: center; background-color: #000000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 80px 120px 80px; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-1h0k8n9 { display: grid; flex: none; gap: 32px 32px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(525px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-1xkvrr3 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 700px; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-1fr83zb-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-Ttar1 .framer-1cnof2z-container { bottom: -20px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; }`,
        `.framer-Ttar1 .framer-6496o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 80px 120px 80px; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-4dis2z { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Ttar1 .framer-1y3921h, .framer-Ttar1 .framer-ophpt6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 200px; }`,
        `.framer-Ttar1 .framer-1wr7vfq { height: 32px; position: relative; width: 170px; }`,
        `.framer-Ttar1 .framer-111e3xw, .framer-Ttar1 .framer-n12k2t { height: 32px; left: 0px; position: absolute; top: 0px; width: 170px; }`,
        `.framer-Ttar1 .framer-kvzx4p { height: 27px; left: 39px; position: absolute; top: 6px; width: 17px; }`,
        `.framer-Ttar1 .framer-5atf23 { height: 11px; left: 44px; position: absolute; top: 18px; width: 7px; }`,
        `.framer-Ttar1 .framer-owc6v3 { height: 9px; left: 14px; position: absolute; top: 23px; width: 2px; }`,
        `.framer-Ttar1 .framer-elo28y { height: 18px; left: 59px; position: absolute; top: 14px; width: 11px; }`,
        `.framer-Ttar1 .framer-cv5agl { height: 11px; left: 17px; position: absolute; top: 21px; width: 4px; }`,
        `.framer-Ttar1 .framer-1v7g3xi { height: 24px; left: 0px; position: absolute; top: 0px; width: 34px; }`,
        `.framer-Ttar1 .framer-1rvn0ss { height: 27px; left: 87px; position: absolute; top: 6px; width: 17px; }`,
        `.framer-Ttar1 .framer-tnxju9 { height: 11px; left: 92px; position: absolute; top: 17px; width: 7px; }`,
        `.framer-Ttar1 .framer-1610yn0 { height: 19px; left: 139px; position: absolute; top: 14px; width: 14px; }`,
        `.framer-Ttar1 .framer-1xo60ta { height: 19px; left: 70px; position: absolute; top: 14px; width: 15px; }`,
        `.framer-Ttar1 .framer-1llpgte { height: 5px; left: 74px; position: absolute; top: 24px; width: 6px; }`,
        `.framer-Ttar1 .framer-tnqw9 { height: 19px; left: 153px; position: absolute; top: 14px; width: 17px; }`,
        `.framer-Ttar1 .framer-1mqh74a { height: 11px; left: 158px; position: absolute; top: 17px; width: 7px; }`,
        `.framer-Ttar1 .framer-1pjeux1 { height: 19px; left: 106px; position: absolute; top: 14px; width: 16px; }`,
        `.framer-Ttar1 .framer-20rppa { height: 4px; left: 111px; position: absolute; top: 17px; width: 7px; }`,
        `.framer-Ttar1 .framer-kizpoq { height: 19px; left: 124px; position: absolute; top: 14px; width: 13px; }`,
        `.framer-Ttar1 .framer-1dp4t39, .framer-Ttar1 .framer-v1lten, .framer-Ttar1 .framer-10zw1vl { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 200px; }`,
        `.framer-Ttar1 .framer-1nzwc8v { height: 30px; position: relative; width: 173px; }`,
        `.framer-Ttar1 .framer-103iybw { height: 11px; left: 0px; position: absolute; top: 0px; width: 30px; }`,
        `.framer-Ttar1 .framer-1e8cq65 { height: 4px; left: 0px; position: absolute; top: 11px; width: 30px; }`,
        `.framer-Ttar1 .framer-1pu6e3k { height: 14px; left: 0px; position: absolute; top: 16px; width: 30px; }`,
        `.framer-Ttar1 .framer-16qqpqn { height: 23px; left: 41px; position: absolute; top: 3px; width: 20px; }`,
        `.framer-Ttar1 .framer-154whwu { height: 23px; left: 64px; position: absolute; top: 3px; width: 23px; }`,
        `.framer-Ttar1 .framer-1gz9zdj { height: 6px; left: 69px; position: absolute; top: 7px; width: 13px; }`,
        `.framer-Ttar1 .framer-fo1q07 { height: 23px; left: 89px; position: absolute; top: 4px; width: 13px; }`,
        `.framer-Ttar1 .framer-1sls3d8 { height: 23px; left: 102px; position: absolute; top: 3px; width: 23px; }`,
        `.framer-Ttar1 .framer-1h8fpdk { height: 6px; left: 107px; position: absolute; top: 7px; width: 13px; }`,
        `.framer-Ttar1 .framer-4xpgaq { height: 23px; left: 152px; position: absolute; top: 3px; width: 21px; }`,
        `.framer-Ttar1 .framer-h7ukw9 { height: 7px; left: 157px; position: absolute; top: 16px; width: 11px; }`,
        `.framer-Ttar1 .framer-gcukok { height: 23px; left: 128px; position: absolute; top: 3px; width: 21px; }`,
        `.framer-Ttar1 .framer-rad0bv { height: 43px; position: relative; width: 136px; }`,
        `.framer-Ttar1 .framer-8ghp58, .framer-Ttar1 .framer-1te5xn4, .framer-Ttar1 .framer-600bil { height: 43px; left: 0px; position: absolute; top: 0px; width: 136px; }`,
        `.framer-Ttar1 .framer-1gn2jkp { height: 38px; left: 0px; position: absolute; top: 1px; width: 35px; }`,
        `.framer-Ttar1 .framer-1yqhrgn { height: 38px; left: 0px; position: absolute; top: 0px; width: 35px; }`,
        `.framer-Ttar1 .framer-2wbsx1 { height: 12px; left: 4px; position: absolute; top: 0px; width: 20px; }`,
        `.framer-Ttar1 .framer-hdvi7b { height: 26px; left: 1px; position: absolute; top: 0px; width: 34px; }`,
        `.framer-Ttar1 .framer-17bz4f7 { height: 23px; left: 0px; position: absolute; top: 14px; width: 28px; }`,
        `.framer-Ttar1 .framer-lqay0n { height: 5px; left: 24px; position: absolute; top: 0px; width: 5px; }`,
        `.framer-Ttar1 .framer-1i1nby { height: 5px; left: 0px; position: absolute; top: 27px; width: 5px; }`,
        `.framer-Ttar1 .framer-1inqemn { height: 4px; left: 4px; position: absolute; top: 12px; width: 4px; }`,
        `.framer-Ttar1 .framer-tc5fti { height: 5px; left: 85px; position: absolute; top: 35px; width: 4px; }`,
        `.framer-Ttar1 .framer-1phx51m { height: 2px; left: 83px; position: absolute; top: 35px; width: 2px; }`,
        `.framer-Ttar1 .framer-ichoeb { height: 5px; left: 82px; position: absolute; top: 33px; width: 4px; }`,
        `.framer-Ttar1 .framer-agk2ey { height: 8px; left: 90px; position: absolute; top: 35px; width: 8px; }`,
        `.framer-Ttar1 .framer-gxh122 { height: 11px; left: 98px; position: absolute; top: 32px; width: 13px; }`,
        `.framer-Ttar1 .framer-1t1d2s3 { height: 2px; left: 113px; position: absolute; top: 36px; width: 4px; }`,
        `.framer-Ttar1 .framer-15x2ecs { height: 8px; left: 111px; position: absolute; top: 35px; width: 8px; }`,
        `.framer-Ttar1 .framer-8p2bha { height: 8px; left: 120px; position: absolute; top: 35px; width: 8px; }`,
        `.framer-Ttar1 .framer-kgxf9h { height: 11px; left: 128px; position: absolute; top: 31px; width: 8px; }`,
        `.framer-Ttar1 .framer-1ro2kbm { height: 26px; left: 40px; position: absolute; top: 1px; width: 15px; }`,
        `.framer-Ttar1 .framer-1x1osdf { height: 18px; left: 56px; position: absolute; top: 9px; width: 17px; }`,
        `.framer-Ttar1 .framer-rdoz31 { height: 18px; left: 74px; position: absolute; top: 9px; width: 17px; }`,
        `.framer-Ttar1 .framer-1h69wj9 { height: 19px; left: 99px; position: absolute; top: 8px; width: 19px; }`,
        `.framer-Ttar1 .framer-1rqi076 { height: 10px; left: 103px; position: absolute; top: 13px; width: 10px; }`,
        `.framer-Ttar1 .framer-eak8q { height: 18px; left: 119px; position: absolute; top: 8px; width: 17px; }`,
        `.framer-Ttar1 .framer-1bfcdx5 { height: 18px; left: 92px; position: absolute; top: 9px; width: 5px; }`,
        `.framer-Ttar1 .framer-z15gnm { height: 6px; left: 92px; position: absolute; top: 2px; width: 6px; }`,
        `.framer-Ttar1 .framer-10gbb9c { height: 28px; position: relative; width: 113px; }`,
        `.framer-Ttar1 .framer-xebrj5, .framer-Ttar1 .framer-t1je1v { height: 28px; left: 0px; position: absolute; top: 0px; width: 113px; }`,
        `.framer-Ttar1 .framer-5uv3n9 { height: 17px; left: 65px; position: absolute; top: 6px; width: 15px; }`,
        `.framer-Ttar1 .framer-1dwe8sc { height: 4px; left: 69px; position: absolute; top: 9px; width: 7px; }`,
        `.framer-Ttar1 .framer-1ouz7yl { height: 4px; left: 69px; position: absolute; top: 16px; width: 8px; }`,
        `.framer-Ttar1 .framer-q9fjd5 { height: 17px; left: 83px; position: absolute; top: 6px; width: 15px; }`,
        `.framer-Ttar1 .framer-144xzyr { height: 4px; left: 86px; position: absolute; top: 9px; width: 7px; }`,
        `.framer-Ttar1 .framer-qloadb { height: 17px; left: 100px; position: absolute; top: 6px; width: 14px; }`,
        `.framer-Ttar1 .framer-1i2tr6e { height: 26px; left: 32px; position: absolute; top: 1px; width: 27px; }`,
        `.framer-Ttar1 .framer-1qzgsy3 { height: 17px; left: 37px; position: absolute; top: 6px; width: 17px; }`,
        `.framer-Ttar1 .framer-17160hn { height: 28px; left: 0px; position: absolute; top: 0px; width: 14px; }`,
        `.framer-Ttar1 .framer-18vhk64 { height: 28px; left: 11px; position: absolute; top: 0px; width: 20px; }`,
        `.framer-Ttar1 .framer-43i9wl { height: 29px; position: relative; width: 88px; }`,
        `.framer-Ttar1 .framer-1foqjel, .framer-Ttar1 .framer-nfq6g0 { height: 29px; left: 0px; position: absolute; top: 0px; width: 88px; }`,
        `.framer-Ttar1 .framer-okq0dl { height: 3px; left: 0px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-1qt118s { height: 3px; left: 5px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-1q3zu6i { height: 2px; left: 5px; position: absolute; top: 26px; width: 2px; }`,
        `.framer-Ttar1 .framer-h28rft { height: 3px; left: 9px; position: absolute; top: 25px; width: 3px; }`,
        `.framer-Ttar1 .framer-1n6oi8i { height: 3px; left: 13px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-dkfvcs { height: 4px; left: 18px; position: absolute; top: 25px; width: 3px; }`,
        `.framer-Ttar1 .framer-1icous7 { height: 3px; left: 22px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-1fh95k9 { height: 2px; left: 23px; position: absolute; top: 26px; width: 2px; }`,
        `.framer-Ttar1 .framer-1voj3xz { height: 3px; left: 27px; position: absolute; top: 25px; width: 3px; }`,
        `.framer-Ttar1 .framer-ity3h0 { height: 3px; left: 31px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-7uop7p { height: 3px; left: 38px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-1qi9je1 { height: 3px; left: 43px; position: absolute; top: 25px; width: 3px; }`,
        `.framer-Ttar1 .framer-1y8mgwg { height: 3px; left: 47px; position: absolute; top: 25px; width: 3px; }`,
        `.framer-Ttar1 .framer-kzfjsl { height: 3px; left: 51px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-18pybdn { height: 3px; left: 56px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-71c21r { height: 2px; left: 56px; position: absolute; top: 26px; width: 2px; }`,
        `.framer-Ttar1 .framer-1m5jsa1 { height: 3px; left: 60px; position: absolute; top: 25px; width: 3px; }`,
        `.framer-Ttar1 .framer-7lk704 { height: 3px; left: 65px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-ozlut5 { height: 2px; left: 65px; position: absolute; top: 26px; width: 2px; }`,
        `.framer-Ttar1 .framer-ghswi1 { height: 3px; left: 69px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-6etd69 { height: 3px; left: 74px; position: absolute; top: 26px; width: 1px; }`,
        `.framer-Ttar1 .framer-9wht6w { height: 3px; left: 76px; position: absolute; top: 25px; width: 3px; }`,
        `.framer-Ttar1 .framer-vs6698 { height: 3px; left: 81px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-9aodh4 { height: 1px; left: 81px; position: absolute; top: 26px; width: 2px; }`,
        `.framer-Ttar1 .framer-15kxcrb { height: 3px; left: 85px; position: absolute; top: 26px; width: 3px; }`,
        `.framer-Ttar1 .framer-180zslw { height: 21px; left: 0px; position: absolute; top: 0px; width: 41px; }`,
        `.framer-Ttar1 .framer-1y5ocno { height: 21px; left: 67px; position: absolute; top: 0px; width: 21px; }`,
        `.framer-Ttar1 .framer-wxjv8p { height: 6px; left: 50px; position: absolute; top: 8px; width: 6px; }`,
        `.framer-Ttar1 .framer-5y22jw { height: 26px; left: 23px; position: absolute; top: 0px; width: 44px; }`,
        `.framer-Ttar1 .framer-1w5a3tc { height: 21px; left: 20px; position: absolute; top: 0px; width: 22px; }`,
        `.framer-Ttar1 .framer-1819j6r { height: 11px; left: 25px; position: absolute; top: 5px; width: 11px; }`,
        `.framer-Ttar1 .framer-1ub1gg4 { height: 1px; left: 0px; position: absolute; top: 24px; width: 2px; }`,
        `.framer-Ttar1 .framer-1itud0a { height: 1px; left: 43px; position: absolute; top: 24px; width: 1px; }`,
        `.framer-Ttar1 .framer-1ynu6qx { align-content: flex-start; align-items: flex-start; background-color: #000000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 90px 80px 90px 80px; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-syzelj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ttar1 .framer-acrtj2-container, .framer-Ttar1 .framer-142vw7p-container, .framer-Ttar1 .framer-14rjy9e-container, .framer-Ttar1 .framer-spthqf-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Ttar1 .framer-5437c9, .framer-Ttar1 .framer-1si6wc7 { flex: none; height: 35px; position: relative; width: 110px; }`,
        `@media (max-width: 809.98px) { .framer-Ttar1.framer-72rtr7 { width: 390px; } .framer-Ttar1 .framer-w84qof-container { height: auto; } .framer-Ttar1 .framer-chgukb { gap: 10px; padding: 0px 24px 48px 24px; } .framer-Ttar1 .framer-1x84i0j { flex-direction: column; gap: 40px; overflow: visible; padding: 40px 0px 0px 0px; } .framer-Ttar1 .framer-wygtcx { border-bottom-right-radius: 32px; flex: none; width: 100%; } .framer-Ttar1 .framer-1inr46b { padding: 20px; } .framer-Ttar1 .framer-1yk9v60 { height: 32px; width: 32px; } .framer-Ttar1 .framer-1gjgug6 { flex: none; width: 100%; } .framer-Ttar1 .framer-owhi0s, .framer-Ttar1 .framer-1azq5i4, .framer-Ttar1 .framer-3b6yzu { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-Ttar1 .framer-tj5zkk { gap: 40px; padding: 80px 24px 80px 24px; } .framer-Ttar1 .framer-1h0k8n9 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; } .framer-Ttar1 .framer-1xkvrr3 { align-self: unset; height: min-content; justify-content: center; } .framer-Ttar1 .framer-1fr83zb-container { align-self: stretch; height: auto; max-width: 100%; } .framer-Ttar1 .framer-6496o { gap: 40px; padding: 120px 0px 120px 0px; } .framer-Ttar1 .framer-1ynu6qx { align-content: center; align-items: center; justify-content: flex-start; padding: 80px 24px 80px 24px; } .framer-Ttar1 .framer-l55vgi { order: 0; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-Ttar1 .framer-syzelj { align-content: unset; align-items: unset; display: grid; gap: 48px 48px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); justify-content: center; order: 1; width: min-content; } .framer-Ttar1 .framer-acrtj2-container, .framer-Ttar1 .framer-142vw7p-container, .framer-Ttar1 .framer-14rjy9e-container, .framer-Ttar1 .framer-spthqf-container { align-self: start; justify-self: start; width: fit-content; } .framer-Ttar1 .framer-1uf0ad7 { order: 3; } .framer-Ttar1 .framer-1si6wc7 { order: 2; }}`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Ttar1.framer-72rtr7 { justify-content: center; width: 810px; } .framer-Ttar1 .framer-w84qof-container { height: auto; } .framer-Ttar1 .framer-chgukb { overflow: visible; padding: 40px 80px 0px 80px; } .framer-Ttar1 .framer-1x84i0j { flex-direction: column; gap: 48px; order: 0; overflow: visible; padding: 0px 0px 80px 0px; } .framer-Ttar1 .framer-wygtcx { border-bottom-right-radius: 32px; flex: none; width: 100%; } .framer-Ttar1 .framer-1gjgug6 { flex: none; width: 100%; } .framer-Ttar1 .framer-tj5zkk { gap: 48px; padding: 96px 80px 120px 80px; } .framer-Ttar1 .framer-1h0k8n9 { grid-template-columns: repeat(1, minmax(525px, 1fr)); } .framer-Ttar1 .framer-1cnof2z-container { left: 50%; } .framer-Ttar1 .framer-6496o { gap: 48px; padding: 120px 0px 120px 0px; }}`,
      ],
      `framer-Ttar1`
    )),
    ($.displayName = `Portfolio – Product Designer`),
    ($.defaultProps = { height: 3460, width: 1200 }),
    V(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Panchang`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Panchang`,
              url: `../../assets/misc/EE3DYKUPHF3W5SWXFO53CRP5KMNTTNTH.woff2`,
              weight: `700`,
            },
          ],
        },
        ...Ut,
        ...Wt,
        ...Gt,
        ...Jt,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = ee.get(ln(), n);
        return Promise.allSettled([
          r.preload(),
          g(Ce, {}, t),
          g(K, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [g(Z, {}, t), g(W, {}, t)]));
          })(),
        ]);
      },
    }),
    (mn = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"cT0oGnq0S":{"layout":["fixed","auto"]},"D2RFb9sz1":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `3460`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `{"UA2V9xo4X":{"pattern":":MNDPyEtDT-:UA2V9xo4X","name":"projects","slugs":{"MNDPyEtDT":{"identifier":"local-module:collection/AcQ8tZaTg:default","provider":"a5hY7_qKM"}}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { mn as __FramerMetadata__, $ as default, Zt as queryParamNames };
//# sourceMappingURL=ZHwFpsei6ApV23DN0nNYO94dy6x4ytbomxEUDI5XB6A.gE7c6K0w.mjs.map
