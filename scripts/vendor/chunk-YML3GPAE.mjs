import { _ as O } from "./chunk-WJKXLTYC.mjs";
import { a as E } from "./chunk-W774OHJB.mjs";
import { c as C, e as a, j as d } from "./chunk-U3GQEZQR.mjs";
import { b as g, c as U } from "./chunk-KPMZENE5.mjs";
import { e as T } from "./chunk-WLHSDIGQ.mjs";
var {
    onewayMethodTemplate: Q,
    voidMethodTemplate: X,
    valueMethodTemplate: Y,
    streamMethodTemplate: y,
  } = d,
  M;
((s) =>
  (s.service = {
    id: "__Flags__",
    fingerprint: "2dc758b5859fc43cd99a9ea5569fd9d8",
    methods: {
      experimentsUpdatesStream: {},
      employeesOnlySettingsUpdatesStream: {},
      projectFeaturesUpdatesStream: {},
    },
    newOutgoingWrapper: (r) => ({
      experimentsUpdatesStream: y.bind(-1, "experimentsUpdatesStream", r),
      employeesOnlySettingsUpdatesStream: y.bind(-1, "employeesOnlySettingsUpdatesStream", r),
      projectFeaturesUpdatesStream: y.bind(-1, "projectFeaturesUpdatesStream", r),
    }),
  }))((M ||= {}));
var _;
((o) => {
  o.service = M.service;
  function s(t) {
    let i = a.shared();
    return {
      expect: () => i.expectWithoutDiscovery(o.service, t),
      discover: (n) => i.discover(o.service, t, n),
      register: (n) => i.register({ channel: t, service: o.service, implementation: n }),
    };
  }
  o.on = s;
  async function r(t) {
    a.shared().unregister(t);
  }
  o.unregister = r;
})((_ ||= {}));
var {
    onewayMethodTemplate: ve,
    voidMethodTemplate: S,
    valueMethodTemplate: me,
    streamMethodTemplate: x,
  } = d,
  h;
((s) =>
  (s.service = {
    id: "__ModulePreviewSandbox__",
    fingerprint: "7d3481e152201279e2e44414c505af5c",
    methods: {
      render: {},
      setColorMode: {},
      componentSizeStream: {},
      previewKeyboardEventStream: {},
      renderUpdateStream: {},
      setTargetModuleRevisions: {},
      setModuleWidth: {},
    },
    newOutgoingWrapper: (r) => ({
      render: S.bind(-1, "render", !0, r),
      setColorMode: S.bind(-1, "setColorMode", !0, r),
      componentSizeStream: x.bind(-1, "componentSizeStream", r),
      previewKeyboardEventStream: x.bind(-1, "previewKeyboardEventStream", r),
      renderUpdateStream: x.bind(-1, "renderUpdateStream", r),
      setTargetModuleRevisions: S.bind(-1, "setTargetModuleRevisions", !0, r),
      setModuleWidth: S.bind(-1, "setModuleWidth", !0, r),
    }),
  }))((h ||= {}));
var F;
((o) => {
  o.service = h.service;
  function s(t) {
    let i = a.shared();
    return {
      expect: () => i.expectWithoutDiscovery(o.service, t),
      discover: (n) => i.discover(o.service, t, n),
      register: (n) => i.register({ channel: t, service: o.service, implementation: n }),
    };
  }
  o.on = s;
  async function r(t) {
    a.shared().unregister(t);
  }
  o.unregister = r;
})((F ||= {}));
var {
    onewayMethodTemplate: Ee,
    voidMethodTemplate: _e,
    valueMethodTemplate: Fe,
    streamMethodTemplate: P,
  } = d,
  b;
((s) =>
  (s.service = {
    id: "__ModulesUpdates__",
    fingerprint: "170b4b1e78f8ad9ae2c048b233235e85",
    methods: { moduleUpdatesStream: {}, fastRefreshModuleUpdatesStream: {} },
    newOutgoingWrapper: (r) => ({
      moduleUpdatesStream: P.bind(-1, "moduleUpdatesStream", r),
      fastRefreshModuleUpdatesStream: P.bind(-1, "fastRefreshModuleUpdatesStream", r),
    }),
  }))((b ||= {}));
var N;
((o) => {
  o.service = b.service;
  function s(t) {
    let i = a.shared();
    return {
      expect: () => i.expectWithoutDiscovery(o.service, t),
      discover: (n) => i.discover(o.service, t, n),
      register: (n) => i.register({ channel: t, service: o.service, implementation: n }),
    };
  }
  o.on = s;
  async function r(t) {
    a.shared().unregister(t);
  }
  o.unregister = r;
})((N ||= {}));
var c = T(E());
function Ke(e, s) {
  let r = { service: e.service.service, onDiscover: e.onDiscover },
    o = (0, c.useRef)(r);
  if (o.current.service !== r.service)
    throw new Error("useServiceStream: service must be identical between re-renders");
  let t = { onStreamValue: s, onError: e.onError },
    i = (0, c.useRef)(t);
  i.current = t;
  let n = (0, c.useRef)(),
    { channel: v, enabled: R = !0 } = e;
  (0, c.useEffect)(() => {
    if (!R || !v) return;
    let l = !0,
      w = () => {
        let p = n.current;
        ((n.current = void 0), p?.cancel().catch(() => {}));
      };
    return (
      (async () => {
        let p = !1,
          m = 0;
        for (; !p; ) {
          p = !0;
          try {
            let u = o.current,
              f = await a.shared().discover(u.service, v);
            if (!l) return;
            let I = u.onDiscover(f);
            ((n.current = I),
              (m = 0),
              await I.read((V) => (l ? i.current.onStreamValue(V) : Promise.resolve())));
          } catch (u) {
            if (!l) return;
            let f = i.current.onError(U(u));
            if ((m++, m > 1)) continue;
            if (f?.retry === !0) {
              if ((await O(0), !l)) return;
              p = !1;
            }
          }
        }
      })().catch(g),
      () => {
        ((l = !1), w());
      }
    );
  }, [v, R]);
}
function Ae(e) {
  if (e instanceof C.ServiceGone) return { retry: !0 };
  g(e);
}
export { _ as a, F as b, N as c, Ke as d, Ae as e };
//# sourceMappingURL=https://app.framerstatic.com/chunk-YML3GPAE.mjs.map
