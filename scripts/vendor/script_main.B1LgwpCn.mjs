import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  C as n,
  F as r,
  I as i,
  N as a,
  P as o,
  R as s,
  T as c,
  a as l,
  g as u,
  i as d,
  k as f,
  m as p,
  n as m,
  p as h,
  r as g,
  t as _,
  u as v,
  v as y,
  z as b,
} from "./react.BNsJAPhr.mjs";
import {
  Ct as x,
  G as S,
  H as C,
  Q as w,
  U as T,
  W as E,
  Y as D,
  Z as O,
  c as k,
  dt as A,
  et as j,
  ht as M,
  it as N,
  m as P,
  o as F,
  p as I,
  q as L,
  u as R,
  xt as z,
} from "./framer.Bct4reZY.mjs";
async function B({ routeId: e, pathVariables: s, localeId: c, collectionItemId: l }) {
  let p = U[e].page.preload();
  w({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let m = v(I, {
    children: v(k, {
      children: v(P, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: s,
        routes: U,
        collectionUtils: G,
        framerSiteId: K,
        notFoundPage: S(() => import(`./ZdFD8bxs0zHNK3lZgUFekuhrgXzCQUqM_whaxwHxn4o.CIZZB15e.mjs`)),
        isReducedMotion: void 0,
        localeId: c,
        locales: W,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://glorious-task-766013.framer.app`,
        EditorBar:
          t === void 0
            ? void 0
            : (() => {
                if (J) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return S(async () => {
                  t.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: N, useLocaleInfo: A, useRouter: M },
                    react: {
                      createElement: v,
                      Fragment: r,
                      memo: u,
                      useCallback: a,
                      useEffect: o,
                      useRef: f,
                      useState: i,
                      useLayoutEffect: n,
                    },
                    "react-dom": { createPortal: d },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        loadSnippetsModule: new R(
          () => import(`./ygCJq-OCoiqlXOGEceX0qNhnAd3p0BOsWuuvut0IMs0.dObCGW41.mjs`)
        ),
        initialCollectionItemId: l,
      }),
    }),
    value: { routes: {} },
  });
  return (await p, m);
}
function V() {
  q && t.__framer_events.push(arguments);
}
async function H(e, n) {
  function r(e, n, r = !0) {
    if (e.caught || t.__framer_hadFatalError) return;
    let i = n?.componentStack;
    if (r) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          i
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        i
      );
    V(r ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: i,
      stack: i ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let i, a, o, s, c;
    if (e)
      ((c = JSON.parse(n.dataset.framerHydrateV2)),
        (i = c.routeId),
        (a = c.localeId),
        (o = c.pathVariables),
        (s = c.breakpoints),
        (i = D(U, i)));
    else {
      D(U, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((i = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!i || !a) {
        let e = C(U, decodeURIComponent(location.pathname), !0, W);
        ((i = e.routeId), (a = e.localeId), (o = e.pathVariables));
      }
    }
    let l = B({ routeId: i, localeId: a, pathVariables: o, collectionItemId: c?.collectionItemId });
    t !== void 0 &&
      (async () => {
        let e = U[i],
          n = W.find(({ id: e }) => (a ? e === a : e === "default")).code,
          r = c?.collectionItemId ?? null;
        if (r === null && e?.collectionId && G) {
          let t = await G[e.collectionId]?.(),
            [i] = Object.values(o);
          t && typeof i == `string` && (r = (await t.getRecordIdBySlug(i, n || void 0)) ?? null);
        }
        let s = Intl.DateTimeFormat().resolvedOptions(),
          l = s.timeZone,
          u = s.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          t.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: K,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: r,
              framerLocale: n || null,
              webPageId: e?.abTestingVariantId ?? i,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: t.location.href,
              hostname: t.location.hostname || null,
              pathname: t.location.pathname || null,
              hash: t.location.hash || null,
              search: t.location.search || null,
              timezone: l,
              locale: u,
            },
            `eager`,
          ]),
          await x({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: n || null } })
          ));
      })();
    let u = await l;
    e
      ? (z(`framer-rewrite-breakpoints`, () => {
          (O(s), t.__framer_onRewriteBreakpoints?.(s));
        }),
        (J ? (e) => e() : y)(() => {
          (L(), j(), _(n, u, { onRecoverableError: r }));
        }))
      : g(n, { onRecoverableError: r }).render(u);
  } catch (e) {
    throw (r(e, void 0, !1), e);
  }
}
var U, W, G, K, q, J;
e(() => {
  if (
    (s(),
    E(),
    c(),
    l(),
    m(),
    (U = {
      augiA20Il: {
        elements: { UA2V9xo4X: `projects` },
        page: S(() => import(`./ZHwFpsei6ApV23DN0nNYO94dy6x4ytbomxEUDI5XB6A.gE7c6K0w.mjs`)),
        path: `/`,
      },
      oagvbnVyh: {
        elements: {},
        page: S(() => import(`./ZdFD8bxs0zHNK3lZgUFekuhrgXzCQUqM_whaxwHxn4o.CIZZB15e.mjs`)),
        path: `/404`,
      },
      XRJ3kSQ31: {
        elements: { SfPs90e8Q: `header` },
        page: S(() => import(`./jHc6B5WyTjHIMIoGsMDdAEljxpUTQvVIt-UtudQUpFE.dQfu0hqZ.mjs`)),
        path: `/about-me`,
      },
      WeNSyGoW7: {
        collectionId: `AcQ8tZaTg`,
        elements: { CaabKmIov: `top-section` },
        page: S(() => import(`./7koC6hgbbJ83ho50F1zuJ_UC7CSEjMN2naD1P8Jd_VM.CiQKp_uq.mjs`)),
        path: `/projects/:MNDPyEtDT`,
      },
    }),
    (W = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (G = {
      AcQ8tZaTg: async () =>
        (await import(`./jvrdnwcxpEBlciO_tU6_LQmvWSUjrTXlJZXero0oHxY.CE40myKp.mjs`))?.utils,
    }),
    (K = `0b2c25f892d106e6c6b7e24b16948dda0dc513de970316611c0270083cfe848c`),
    (q = typeof document < `u`),
    (J = q && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(b.userAgent)),
    q)
  ) {
    ((t.__framer_importFromPackage = (e, t) => () =>
      v(F, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (t.__framer_events = t.__framer_events || []),
      T());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? H(!0, e) : H(!1, e);
  }
})();
export { B as getPageRoot };
//# sourceMappingURL=script_main.B1LgwpCn.mjs.map
