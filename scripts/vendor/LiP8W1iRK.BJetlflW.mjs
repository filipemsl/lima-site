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
} from "./react.BNsJAPhr.mjs";
import { C as d, a as f, r as p, t as m } from "./motion.CA7Ore89.mjs";
import {
  I as h,
  L as g,
  O as _,
  S as v,
  T as y,
  W as b,
  _t as x,
  a as S,
  b as C,
  d as w,
  dt as T,
  gt as E,
  nt as D,
  r as O,
  tt as k,
  w as A,
  x as j,
} from "./framer.Bct4reZY.mjs";
import { i as M, n as N, r as P, t as F } from "./yXFtqEvhG.QYtwick-.mjs";
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (u(),
      b(),
      m(),
      r(),
      (L = [`Bh7Yvtjni`, `A_QV3OMTF`]),
      (R = `framer-GrZbH`),
      (z = { A_QV3OMTF: `framer-v-qlmk2q`, Bh7Yvtjni: `framer-v-grnb2l` }),
      (B = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (V = ({ value: e, children: t }) => {
        let r = s(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: a, children: t });
      }),
      (H = d.create(t)),
      (U = { Close: `A_QV3OMTF`, Open: `Bh7Yvtjni` }),
      (W = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: U[i.variant] ?? i.variant ?? `Bh7Yvtjni`,
        ZwDMlVjmq: e ?? i.ZwDMlVjmq,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = x(
        i(function (e, t) {
          let n = c(null),
            r = t ?? n,
            i = a(),
            { activeLocale: s, setLocale: u } = T();
          D();
          let { style: f, className: m, layoutId: h, variant: g, ZwDMlVjmq: v, ...y } = W(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: O,
              setGestureState: A,
              setVariant: M,
              variants: N,
            } = E({
              cycleOrder: L,
              defaultVariant: `Bh7Yvtjni`,
              ref: r,
              variant: g,
              variantClassNames: z,
            }),
            P = G(e, N),
            { activeVariantCallback: F, delay: U } = k(b),
            K = F(async (...e) => {
              if ((A({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
              await U(() => M(`A_QV3OMTF`), 300);
            }),
            q = F(async (...e) => {
              if ((A({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
              await U(() => M(`Bh7Yvtjni`), 300);
            }),
            J = _(R);
          return o(p, {
            id: h ?? i,
            children: o(H, {
              animate: N,
              initial: !1,
              children: o(V, {
                value: B,
                children: l(d.div, {
                  ...y,
                  ...C,
                  className: _(J, `framer-grnb2l`, m, x),
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  layoutDependency: P,
                  layoutId: `Bh7Yvtjni`,
                  onTap: K,
                  ref: r,
                  style: { ...f },
                  ...I({ A_QV3OMTF: { "data-framer-name": `Close`, onTap: q } }, b, w),
                  children: [
                    o(j, {
                      className: `framer-13rfu92`,
                      layoutDependency: P,
                      layoutId: `nCfdlv1P1`,
                      opacity: 1,
                      requiresOverflowVisible: !0,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 1" overflow="visible"><path d="M 0 0 L 32 0" fill="transparent" stroke-width="2" stroke="rgb(0, 0, 0)"></path></svg>`,
                      variants: { A_QV3OMTF: { rotate: 45 } },
                      withExternalLayout: !0,
                    }),
                    o(j, {
                      className: `framer-ci9cyx`,
                      layoutDependency: P,
                      layoutId: `AkBzSTZ7o`,
                      opacity: 1,
                      requiresOverflowVisible: !0,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 1" overflow="visible"><path d="M 0 0 L 32 0" fill="transparent" stroke-width="2" stroke="rgb(0, 0, 0)"></path></svg>`,
                      variants: { A_QV3OMTF: { rotate: -45 } },
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
          `.framer-GrZbH.framer-13vz8s5, .framer-GrZbH .framer-13vz8s5 { display: block; }`,
          `.framer-GrZbH.framer-grnb2l { cursor: pointer; height: 48px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 48px; }`,
          `.framer-GrZbH .framer-13rfu92 { height: 1px; left: 8px; position: absolute; top: 16px; width: 32px; }`,
          `.framer-GrZbH .framer-ci9cyx { height: 1px; left: 8px; position: absolute; top: 33px; width: 32px; }`,
          `.framer-GrZbH.framer-v-qlmk2q.framer-grnb2l { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 48px); }`,
          `.framer-GrZbH.framer-v-qlmk2q .framer-13rfu92, .framer-GrZbH.framer-v-qlmk2q .framer-ci9cyx { top: 24px; }`,
        ],
        `framer-GrZbH`
      )),
      (K.displayName = `Menu Icon`),
      (K.defaultProps = { height: 48, width: 48 }),
      y(K, {
        variant: {
          options: [`Bh7Yvtjni`, `A_QV3OMTF`],
          optionTitles: [`Open`, `Close`],
          title: `Variant`,
          type: S.Enum,
        },
        ZwDMlVjmq: { title: `Click`, type: S.EventHandler },
      }),
      A(K, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ee,
  te,
  ne,
  re,
  ie,
  ae,
  oe,
  se,
  Y,
  ce = e(() => {
    (u(),
      b(),
      m(),
      r(),
      M(),
      (ee = { VJcImkzW4: { hover: !0 } }),
      (te = `framer-Si9Wu`),
      (ne = { VJcImkzW4: `framer-v-11bchax` }),
      (re = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ie = ({ value: e, children: t }) => {
        let r = s(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: a, children: t });
      }),
      (ae = d.create(t)),
      (oe = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (se = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = x(
        i(function (e, n) {
          let r = c(null),
            i = n ?? r,
            s = a(),
            { activeLocale: u, setLocale: f } = T();
          D();
          let { style: m, className: h, layoutId: g, variant: v, ...y } = oe(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: A,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = E({
              defaultVariant: `VJcImkzW4`,
              enabledGestures: ee,
              ref: i,
              variant: v,
              variantClassNames: ne,
            }),
            I = se(e, P),
            L = _(te, F),
            R = () => k === `VJcImkzW4-hover`,
            z = () => k !== `VJcImkzW4-hover`;
          return o(p, {
            id: g ?? s,
            children: o(ae, {
              animate: P,
              initial: !1,
              children: o(ie, {
                value: re,
                children: o(w, {
                  href: `https://drive.google.com/file/d/10oS_fHNTNfVqXJOiqzxixwCdhlD-YXB7/view?usp=sharing`,
                  motionChild: !0,
                  nodeId: `VJcImkzW4`,
                  openInNewTab: !0,
                  scopeId: `j_dCYEk_K`,
                  children: l(d.a, {
                    ...y,
                    ...O,
                    className: `${_(L, `framer-11bchax`, h, x)} framer-12viwiw`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: I,
                    layoutId: `VJcImkzW4`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgb(0, 0, 0)`,
                      borderBottomLeftRadius: 1e3,
                      borderBottomRightRadius: 1e3,
                      borderTopLeftRadius: 1e3,
                      borderTopRightRadius: 1e3,
                      ...m,
                    },
                    variants: {
                      "VJcImkzW4-hover": {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgb(0, 0, 0)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                    },
                    ...J(
                      { "VJcImkzW4-hover": { "data-border": !0, "data-framer-name": void 0 } },
                      b,
                      k
                    ),
                    children: [
                      R() &&
                        o(j, {
                          className: `framer-lmehtx`,
                          "data-framer-name": `material-symbols:download`,
                          layout: `position`,
                          layoutDependency: I,
                          layoutId: `WuNPbPw5c`,
                          opacity: 1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 10 13.333 L 5.833 9.167 L 7 7.958 L 9.167 10.125 L 9.167 3.333 L 10.833 3.333 L 10.833 10.125 L 13 7.958 L 14.167 9.167 Z M 5 16.667 C 4.542 16.667 4.149 16.503 3.823 16.177 C 3.496 15.85 3.333 15.458 3.333 15 L 3.333 12.5 L 5 12.5 L 5 15 L 15 15 L 15 12.5 L 16.667 12.5 L 16.667 15 C 16.667 15.458 16.503 15.851 16.177 16.177 C 15.85 16.504 15.458 16.667 15 16.667 Z" fill="rgb(0, 0, 0)"></path></svg>`,
                          svgContentId: 11010666831,
                          withExternalLayout: !0,
                          ...J({ "VJcImkzW4-hover": { svgContentId: 12126006611 } }, b, k),
                        }),
                      z() &&
                        o(j, {
                          className: `framer-1s213ht`,
                          "data-framer-name": `material-symbols:download`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 20,
                          intrinsicWidth: 20,
                          layoutDependency: I,
                          layoutId: `s3L9j4X3Y`,
                          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13.3333L5.83333 9.16666L7 7.95833L9.16667 10.125V3.33333H10.8333V10.125L13 7.95833L14.1667 9.16666L10 13.3333ZM5 16.6667C4.54167 16.6667 4.14917 16.5033 3.8225 16.1767C3.49583 15.85 3.33278 15.4578 3.33333 15V12.5H5V15H15V12.5H16.6667V15C16.6667 15.4583 16.5033 15.8508 16.1767 16.1775C15.85 16.5042 15.4578 16.6672 15 16.6667H5Z" fill="white"/>
</svg>
`,
                          withExternalLayout: !0,
                        }),
                      o(C, {
                        __fromCanvasComponent: !0,
                        children: o(t, {
                          children: o(d.p, {
                            className: `framer-styles-preset-qyjhgz`,
                            "data-styles-preset": `yXFtqEvhG`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                            },
                            children: `DOWNLOAD CV`,
                          }),
                        }),
                        className: `framer-1yb3ogb`,
                        fonts: [`Inter`],
                        layoutDependency: I,
                        layoutId: `idOu2_8np`,
                        style: {
                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: { "VJcImkzW4-hover": { "--extracted-r6o4lv": `rgb(0, 0, 0)` } },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...J(
                          {
                            "VJcImkzW4-hover": {
                              children: o(t, {
                                children: o(d.p, {
                                  className: `framer-styles-preset-qyjhgz`,
                                  "data-styles-preset": `yXFtqEvhG`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(0, 0, 0))`,
                                  },
                                  children: `DOWNLOAD CV`,
                                }),
                              }),
                            },
                          },
                          b,
                          k
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-Si9Wu.framer-12viwiw, .framer-Si9Wu .framer-12viwiw { display: block; }`,
          `.framer-Si9Wu.framer-11bchax { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 16px 4px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Si9Wu .framer-lmehtx, .framer-Si9Wu .framer-1s213ht { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-Si9Wu .framer-1yb3ogb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...N,
          `.framer-Si9Wu[data-border="true"]::after, .framer-Si9Wu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Si9Wu`
      )),
      (Y.displayName = `Download CV Button`),
      (Y.defaultProps = { height: 28, width: 258 }),
      A(
        Y,
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
          ...g(P),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function le(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  X,
  ve = e(() => {
    (u(),
      b(),
      m(),
      r(),
      (ue = { dBk58AfZJ: { hover: !0 } }),
      (de = `framer-o71eM`),
      (fe = { dBk58AfZJ: `framer-v-199q6cd` }),
      (pe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (me = ({ value: e, children: t }) => {
        let r = s(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: a, children: t });
      }),
      (he = d.create(t)),
      (ge = ({ height: e, icon: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        NyfJX4TCZ: r ?? o.NyfJX4TCZ,
        p4HJEOLcp: t ?? o.p4HJEOLcp,
        tB1qINJdi: i ?? o.tB1qINJdi ?? `TEXT`,
      })),
      (_e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = x(
        i(function (e, n) {
          let r = c(null),
            i = n ?? r,
            s = a(),
            { activeLocale: u, setLocale: f } = T();
          D();
          let {
              style: m,
              className: h,
              layoutId: g,
              variant: v,
              p4HJEOLcp: y,
              NyfJX4TCZ: b,
              tB1qINJdi: x,
              ...S
            } = ge(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: P,
              setGestureState: F,
              setVariant: I,
              variants: L,
            } = E({
              defaultVariant: `dBk58AfZJ`,
              enabledGestures: ue,
              ref: i,
              variant: v,
              variantClassNames: fe,
            }),
            R = _e(e, L),
            z = _(de),
            B = (e) => N !== `dBk58AfZJ-hover` && e;
          return o(p, {
            id: g ?? s,
            children: o(he, {
              animate: L,
              initial: !1,
              children: o(me, {
                value: pe,
                children: o(w, {
                  href: b,
                  motionChild: !0,
                  nodeId: `dBk58AfZJ`,
                  openInNewTab: !1,
                  scopeId: `m9iy6UB2L`,
                  smoothScroll: !0,
                  children: l(d.a, {
                    ...S,
                    ...M,
                    className: `${_(z, `framer-199q6cd`, h, k)} framer-9i64k5`,
                    "data-framer-name": `Default`,
                    layoutDependency: R,
                    layoutId: `dBk58AfZJ`,
                    ref: i,
                    style: { ...m },
                    ...le({ "dBk58AfZJ-hover": { "data-framer-name": void 0 } }, O, N),
                    children: [
                      o(C, {
                        __fromCanvasComponent: !0,
                        children: o(t, {
                          children: o(d.p, {
                            style: {
                              "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                              "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                              "--framer-font-weight": `700`,
                              "--framer-line-height": `150%`,
                            },
                            children: `TEXT`,
                          }),
                        }),
                        className: `framer-18yeo06`,
                        fonts: [`FS;Panchang-bold`],
                        layoutDependency: R,
                        layoutId: `PmkE1LTcK`,
                        text: x,
                        variants: {
                          "dBk58AfZJ-hover": { "--extracted-r6o4lv": `rgb(117, 117, 117)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...le(
                          {
                            "dBk58AfZJ-hover": {
                              children: o(t, {
                                children: o(d.p, {
                                  style: {
                                    "--font-selector": `RlM7UGFuY2hhbmctYm9sZA==`,
                                    "--framer-font-family": `"Panchang", "Panchang Placeholder", sans-serif`,
                                    "--framer-font-weight": `700`,
                                    "--framer-line-height": `150%`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(117, 117, 117))`,
                                  },
                                  children: `TEXT`,
                                }),
                              }),
                            },
                          },
                          O,
                          N
                        ),
                      }),
                      B(y) &&
                        o(j, {
                          className: `framer-1pwo0hw`,
                          "data-framer-name": `Computers, Devices, Electronics/joystick-xbox`,
                          fill: `rgba(0,0,0,1)`,
                          intrinsicHeight: 20,
                          intrinsicWidth: 20,
                          layoutDependency: R,
                          layoutId: `uBgklJ4yj`,
                          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8.33333H7.5" stroke="#F5F7FF" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25004 7.08334V9.58334" stroke="#F5F7FF" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3744 4.4801C12.2624 2.95107 7.7377 2.95107 3.62564 4.4801C2.90382 4.76921 2.36217 5.3839 2.16618 6.13636C1.4769 9.11079 1.50106 12.2061 2.23669 15.1694C2.3857 15.7057 2.79233 16.1324 3.32085 16.307L4.27002 16.6234C4.68733 16.7642 5.14198 16.5545 5.30579 16.1457C5.63952 15.3113 6.17896 13.9627 6.47368 13.226C6.60007 12.9103 6.90631 12.7037 7.24637 12.7047H12.7535C13.0943 12.7047 13.4007 12.9122 13.5273 13.2286L14.6926 16.1421C14.8564 16.5518 15.3113 16.7628 15.7299 16.6232L16.6794 16.3067C17.2078 16.132 17.6144 15.7053 17.7634 15.1691C18.4989 12.2059 18.5231 9.11071 17.8339 6.13639C17.6379 5.38392 17.0963 4.76922 16.3744 4.4801Z" stroke="#F5F7FF" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9584 8.33349C11.9583 8.41398 11.893 8.47917 11.8125 8.47914C11.732 8.47911 11.6667 8.41386 11.6667 8.33337C11.6667 8.25288 11.7319 8.18758 11.8124 8.18747C11.8511 8.18743 11.8883 8.20279 11.9157 8.23019C11.9431 8.25758 11.9584 8.29475 11.9584 8.33349" stroke="#F5F7FF" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8.33349C14.9999 8.41398 14.9346 8.47917 14.8541 8.47914C14.7736 8.47911 14.7084 8.41386 14.7083 8.33337C14.7083 8.25288 14.7735 8.18758 14.854 8.18747C14.8927 8.18743 14.9299 8.20279 14.9573 8.23019C14.9847 8.25758 15 8.29475 15 8.33349" stroke="#F5F7FF" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3335 9.70833C13.414 9.70843 13.4792 9.77373 13.4791 9.85423C13.4791 9.93472 13.4138 9.99997 13.3334 10C13.2529 10 13.1876 9.93484 13.1875 9.85435C13.1874 9.81561 13.2028 9.77844 13.2302 9.75105C13.2576 9.72365 13.2947 9.70828 13.3335 9.70833" stroke="#F5F7FF" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3335 6.66667C13.414 6.66677 13.4792 6.73207 13.4791 6.81256C13.4791 6.89306 13.4138 6.9583 13.3334 6.95834C13.2529 6.95837 13.1876 6.89318 13.1875 6.81269C13.1874 6.77394 13.2028 6.73678 13.2302 6.70938C13.2576 6.68199 13.2947 6.66662 13.3335 6.66667" stroke="#F5F7FF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                          withExternalLayout: !0,
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
          `.framer-o71eM.framer-9i64k5, .framer-o71eM .framer-9i64k5 { display: block; }`,
          `.framer-o71eM.framer-199q6cd { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 24px 12px 24px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-o71eM .framer-18yeo06 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-o71eM .framer-1pwo0hw { flex: none; height: 20px; position: relative; width: 20px; }`,
        ],
        `framer-o71eM`
      )),
      (X.displayName = `Link text`),
      (X.defaultProps = { height: 48, width: 117.5 }),
      y(X, {
        p4HJEOLcp: { defaultValue: !1, title: `Icon`, type: S.Boolean },
        NyfJX4TCZ: { title: `Link`, type: S.Link },
        tB1qINJdi: { defaultValue: `TEXT`, displayTextArea: !1, title: `Title`, type: S.String },
      }),
      A(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ye,
  be,
  xe,
  Se,
  Q,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  $,
  Ae = e(() => {
    (u(),
      b(),
      m(),
      r(),
      q(),
      ce(),
      ve(),
      (ye = h(K)),
      (be = h(X)),
      (xe = h(Y)),
      (Se = [`f7mkPhfX6`, `hC8G37n1K`, `KZe4OPBpS`, `zyA88BTGG`, `M1keIGVfU`]),
      (Q = `framer-VuoOH`),
      (Ce = {
        f7mkPhfX6: `framer-v-grvilu`,
        hC8G37n1K: `framer-v-19dhe3r`,
        KZe4OPBpS: `framer-v-1cjrg28`,
        M1keIGVfU: `framer-v-1fuuy5i`,
        zyA88BTGG: `framer-v-1iyxxep`,
      }),
      (we = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Te = ({ value: e, children: t }) => {
        let r = s(f),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: a, children: t });
      }),
      (Ee = d.create(t)),
      (De = {
        "Mobile Expanded": `KZe4OPBpS`,
        "Tablet Expanded": `M1keIGVfU`,
        Desktop: `f7mkPhfX6`,
        Mobile: `hC8G37n1K`,
        Tablet: `zyA88BTGG`,
      }),
      (Oe = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        CF6SqYrUw: n ?? i.CF6SqYrUw,
        variant: De[i.variant] ?? i.variant ?? `f7mkPhfX6`,
      })),
      (ke = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = x(
        i(function (e, t) {
          let n = c(null),
            r = t ?? n,
            i = a(),
            { activeLocale: s, setLocale: u } = T(),
            f = D(),
            { style: m, className: h, layoutId: g, variant: y, CF6SqYrUw: b, ...x } = Oe(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: A,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: P,
              setGestureState: F,
              setVariant: I,
              variants: L,
            } = E({
              cycleOrder: Se,
              defaultVariant: `f7mkPhfX6`,
              ref: r,
              variant: y,
              variantClassNames: Ce,
            }),
            R = ke(e, L),
            { activeVariantCallback: z, delay: B } = k(S),
            V = z(async (...e) => {
              I(`KZe4OPBpS`);
            }),
            H = z(async (...e) => {
              I(`hC8G37n1K`);
            }),
            U = z(async (...e) => {
              I(`M1keIGVfU`);
            }),
            W = z(async (...e) => {
              I(`zyA88BTGG`);
            }),
            G = _(Q),
            q = () => !![`hC8G37n1K`, `KZe4OPBpS`, `zyA88BTGG`, `M1keIGVfU`].includes(S);
          return o(p, {
            id: g ?? i,
            children: o(Ee, {
              animate: L,
              initial: !1,
              children: o(Te, {
                value: we,
                children: l(d.div, {
                  ...x,
                  ...M,
                  className: _(G, `framer-grvilu`, h, C),
                  "data-framer-name": `Desktop`,
                  layoutDependency: R,
                  layoutId: `f7mkPhfX6`,
                  ref: r,
                  style: {
                    backdropFilter: `blur(10px)`,
                    backgroundColor: `rgba(255, 255, 255, 0.8)`,
                    WebkitBackdropFilter: `blur(10px)`,
                    ...m,
                  },
                  ...Z(
                    {
                      hC8G37n1K: { "data-framer-name": `Mobile` },
                      KZe4OPBpS: { "data-framer-name": `Mobile Expanded` },
                      M1keIGVfU: { "data-framer-name": `Tablet Expanded` },
                      zyA88BTGG: { "data-framer-name": `Tablet` },
                    },
                    S,
                    N
                  ),
                  children: [
                    l(d.div, {
                      className: `framer-1yyqba`,
                      layoutDependency: R,
                      layoutId: `aadyTeHJz`,
                      children: [
                        o(w, {
                          href: { webPageId: `augiA20Il` },
                          motionChild: !0,
                          nodeId: `AOPr2CJUe`,
                          openInNewTab: !1,
                          scopeId: `LiP8W1iRK`,
                          children: o(j, {
                            as: `a`,
                            className: `framer-x2nki1 framer-ccfzol`,
                            "data-framer-name": `Lima Logo`,
                            layout: `position`,
                            layoutDependency: R,
                            layoutId: `AOPr2CJUe`,
                            opacity: 1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 32"><path d="M 32.195 0.016 L 32.195 32 L 27.493 32 L 27.493 0.016 Z M 87.577 0.772 C 87.577 0.504 87.384 0.268 87.288 0.016 L 82.778 0.016 C 82.666 0.268 82.602 0.504 82.506 0.772 C 79.119 9.947 74.466 22.731 71.112 31.905 L 76.183 31.905 L 85.041 7.708 L 93.932 32 L 99.003 32 C 95.665 22.778 91.011 10.01 87.625 0.772 Z M 4.769 0 L 0.003 0 L 0.003 29.525 C -0.061 30.834 0.966 31.937 2.298 32 C 2.33 32 2.362 32 2.394 32 L 20.865 32 L 20.865 27.161 L 4.689 27.161 L 4.753 0 Z M 85.105 19.105 C 83.773 19.074 82.65 20.114 82.634 21.438 C 82.602 22.747 83.661 23.85 85.009 23.866 C 86.341 23.898 87.464 22.857 87.48 21.533 C 87.48 21.486 87.48 21.454 87.48 21.407 C 87.464 20.13 86.405 19.105 85.105 19.09 Z M 66.714 0.016 L 62.028 0.016 L 52.785 20.256 L 43.541 0.016 L 38.855 0.016 L 38.855 0.709 L 38.855 32 L 43.637 32 L 43.637 11.665 L 50.153 26.01 L 50.57 26.924 L 50.57 27.035 C 50.859 27.618 51.356 28.059 51.966 28.264 C 52.448 28.422 52.993 28.422 53.475 28.264 C 54.085 28.059 54.582 27.634 54.855 27.066 C 54.855 27.066 54.855 26.987 54.855 26.94 L 55.272 26.041 L 61.788 11.712 L 61.788 32 L 66.57 32 L 66.57 0.709 L 66.698 0.016 Z" fill="rgb(0,0,0)"></path></svg>`,
                            svgContentId: 9317415937,
                            withExternalLayout: !0,
                          }),
                        }),
                        q() &&
                          o(O, {
                            ...Z(
                              {
                                hC8G37n1K: {
                                  height: 48,
                                  width: `48px`,
                                  y: (f?.y || 0) + 0 + 0 + 20,
                                },
                                KZe4OPBpS: {
                                  height: 48,
                                  width: `48px`,
                                  y: (f?.y || 0) + 0 + 0 + 20,
                                },
                                M1keIGVfU: {
                                  height: 48,
                                  width: `48px`,
                                  y: (f?.y || 0) + 0 + 0 + 20,
                                },
                                zyA88BTGG: {
                                  height: 48,
                                  width: `48px`,
                                  y: (f?.y || 0) + 0 + 0 + 20,
                                },
                              },
                              S,
                              N
                            ),
                            children: o(v, {
                              className: `framer-hhn5fq-container`,
                              layoutDependency: R,
                              layoutId: `WFvJW9Kt5-container`,
                              nodeId: `WFvJW9Kt5`,
                              rendersWithMotion: !0,
                              scopeId: `LiP8W1iRK`,
                              children: o(K, {
                                height: `100%`,
                                id: `WFvJW9Kt5`,
                                layoutId: `WFvJW9Kt5`,
                                style: { height: `100%`, width: `100%` },
                                variant: `Bh7Yvtjni`,
                                width: `100%`,
                                ...Z(
                                  {
                                    hC8G37n1K: { ZwDMlVjmq: V },
                                    KZe4OPBpS: { variant: `A_QV3OMTF`, ZwDMlVjmq: H },
                                    M1keIGVfU: { variant: `A_QV3OMTF`, ZwDMlVjmq: W },
                                    zyA88BTGG: { ZwDMlVjmq: U },
                                  },
                                  S,
                                  N
                                ),
                              }),
                            }),
                          }),
                      ],
                    }),
                    l(d.div, {
                      className: `framer-mo0pua`,
                      layoutDependency: R,
                      layoutId: `ddtO99YIO`,
                      style: { opacity: 1 },
                      variants: {
                        hC8G37n1K: { opacity: 0 },
                        KZe4OPBpS: { opacity: 1 },
                        M1keIGVfU: { opacity: 1 },
                        zyA88BTGG: { opacity: 0 },
                      },
                      children: [
                        o(O, {
                          height: 48,
                          y: (f?.y || 0) + (0 + ((f?.height || 88) - 0 - 48) / 2) + 0,
                          ...Z(
                            {
                              hC8G37n1K: { y: (f?.y || 0) + 0 + 88 + 0 + 0 },
                              KZe4OPBpS: { y: (f?.y || 0) + 0 + 88 + 0 + 0 },
                              M1keIGVfU: { y: (f?.y || 0) + 0 + 88 + 0 + 0 },
                              zyA88BTGG: { y: (f?.y || 0) + 0 + 88 + 0 + 0 },
                            },
                            S,
                            N
                          ),
                          children: o(v, {
                            className: `framer-1c06nfc-container`,
                            layoutDependency: R,
                            layoutId: `E8wCA09XN-container`,
                            nodeId: `E8wCA09XN`,
                            rendersWithMotion: !0,
                            scopeId: `LiP8W1iRK`,
                            children: o(X, {
                              height: `100%`,
                              id: `E8wCA09XN`,
                              layoutId: `E8wCA09XN`,
                              NyfJX4TCZ: b,
                              p4HJEOLcp: !1,
                              tB1qINJdi: `PROJECTS`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        o(O, {
                          height: 28,
                          y: (f?.y || 0) + (0 + ((f?.height || 88) - 0 - 48) / 2) + 10,
                          ...Z(
                            {
                              hC8G37n1K: { y: (f?.y || 0) + 0 + 88 + 0 + 64 },
                              KZe4OPBpS: { y: (f?.y || 0) + 0 + 88 + 0 + 64 },
                              M1keIGVfU: { y: (f?.y || 0) + 0 + 88 + 0 + 64 },
                              zyA88BTGG: { y: (f?.y || 0) + 0 + 88 + 0 + 64 },
                            },
                            S,
                            N
                          ),
                          children: o(v, {
                            className: `framer-lk2ce9-container`,
                            layoutDependency: R,
                            layoutId: `nTEAyDnXX-container`,
                            nodeId: `nTEAyDnXX`,
                            rendersWithMotion: !0,
                            scopeId: `LiP8W1iRK`,
                            children: o(Y, {
                              height: `100%`,
                              id: `nTEAyDnXX`,
                              layoutId: `nTEAyDnXX`,
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
          `.framer-VuoOH.framer-ccfzol, .framer-VuoOH .framer-ccfzol { display: block; }`,
          `.framer-VuoOH.framer-grvilu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 88px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 80px 0px 80px; position: relative; width: 1200px; }`,
          `.framer-VuoOH .framer-1yyqba { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-VuoOH .framer-x2nki1 { flex: none; height: 32px; position: relative; text-decoration: none; width: 100px; }`,
          `.framer-VuoOH .framer-hhn5fq-container { flex: none; height: 48px; position: relative; width: 48px; }`,
          `.framer-VuoOH .framer-mo0pua { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-VuoOH .framer-1c06nfc-container, .framer-VuoOH .framer-lk2ce9-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-VuoOH.framer-v-19dhe3r.framer-grvilu { flex-direction: column; gap: 0px; justify-content: flex-start; padding: 0px 24px 0px 24px; width: 390px; }`,
          `.framer-VuoOH.framer-v-19dhe3r .framer-1yyqba { gap: unset; height: 88px; justify-content: space-between; overflow: hidden; width: 100%; z-index: 1; }`,
          `.framer-VuoOH.framer-v-19dhe3r .framer-mo0pua, .framer-VuoOH.framer-v-1cjrg28 .framer-mo0pua, .framer-VuoOH.framer-v-1iyxxep .framer-mo0pua, .framer-VuoOH.framer-v-1fuuy5i .framer-mo0pua { flex-direction: column; }`,
          `.framer-VuoOH.framer-v-1cjrg28.framer-grvilu { flex-direction: column; gap: 0px; height: min-content; justify-content: flex-start; max-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: visible; padding: 0px 24px 24px 24px; width: 390px; }`,
          `.framer-VuoOH.framer-v-1cjrg28 .framer-1yyqba { gap: unset; height: 88px; justify-content: space-between; width: 100%; z-index: 1; }`,
          `.framer-VuoOH.framer-v-1iyxxep.framer-grvilu { flex-direction: column; gap: 0px; justify-content: flex-start; width: 390px; }`,
          `.framer-VuoOH.framer-v-1iyxxep .framer-1yyqba { gap: unset; height: 88px; justify-content: space-between; overflow: hidden; padding: 16px; width: 100%; z-index: 1; }`,
          `.framer-VuoOH.framer-v-1fuuy5i.framer-grvilu { flex-direction: column; gap: 0px; height: min-content; justify-content: flex-start; max-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: visible; padding: 0px 80px 24px 80px; width: 390px; }`,
          `.framer-VuoOH.framer-v-1fuuy5i .framer-1yyqba { gap: unset; height: 88px; justify-content: space-between; padding: 16px; width: 100%; z-index: 1; }`,
        ],
        `framer-VuoOH`
      )),
      ($.displayName = `Header Desktop`),
      ($.defaultProps = { height: 88, width: 1200 }),
      y($, {
        variant: {
          options: [`f7mkPhfX6`, `hC8G37n1K`, `KZe4OPBpS`, `zyA88BTGG`, `M1keIGVfU`],
          optionTitles: [`Desktop`, `Mobile`, `Mobile Expanded`, `Tablet`, `Tablet Expanded`],
          title: `Variant`,
          type: S.Enum,
        },
        CF6SqYrUw: { title: `Link`, type: S.Link },
      }),
      A($, [{ explicitInter: !0, fonts: [] }, ...ye, ...be, ...xe], {
        supportsExplicitInterCodegen: !0,
      }));
  });
export { Ae as n, $ as t };
//# sourceMappingURL=LiP8W1iRK.BJetlflW.mjs.map
