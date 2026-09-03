var p = ',"children":[';
var m = [
  "contentManagement",
  "externalModules",
  "localModules",
  "presets",
  "colorStyles",
  "routeSegmentRoot",
  "entityRoot",
  "customCodeScope",
  "branches",
  "agentSkills",
];
function x(e, t, r) {
  return e.slice(t, r + p.length) + "]}";
}
function N(e, t) {
  let r = `"id":"${t}"`;
  return e.indexOf(r) >= 0;
}
function D(e, t = 1) {
  return e.startsWith(`{"v":${t},`) && e.indexOf(p) >= 0 && e.endsWith("]}}");
}
function h(e, t) {
  if (e !== "children") return t;
}
function u(e, t) {
  let r = JSON.stringify(e, h),
    a = `${p}${t.join(",")}]`;
  return `${r.slice(0, -1)}${a}}`;
}
function E(e) {
  if (!e.children) return JSON.stringify(e);
  let t = e.children.map((r) => JSON.stringify(r));
  return u(e, t);
}
function o(e, t) {
  return e == null || typeof e != "object" ? !1 : Object.hasOwnProperty.call(e, t);
}
function y(e, t, r, a, i = new Set()) {
  (i.add(t.id), r.delete(t.id));
  let s = o(t, "replicaInfo") && typeof t.replicaInfo == "object" && t.replicaInfo;
  if (
    (s && o(s, "master") && typeof s.master == "string" && (i.has(s.master) || r.add(s.master)),
    a && t.codeComponentIdentifier === "framer/Prototype")
  ) {
    let n =
      o(t, "$control__children") && typeof t.$control__children == "object" && t.$control__children;
    if (n && (o(n, "type") && n.type) === "componentinstance") {
      let c = o(n, "value") && n.value;
      if (typeof c == "string" && !i.has(c)) r.add(c);
      else if (Array.isArray(c)) {
        let l = c[0];
        (o(l, "type") && l.type) === "componentinstance" &&
          typeof l.value == "string" &&
          (i.has(l.value) || r.add(l.value));
      }
    }
  }
  if (t.children) for (let n of t.children) y(e, n, r, a, i);
}
export { p as a, m as b, x as c, N as d, D as e, u as f, E as g, o as h, y as i };
//# sourceMappingURL=https://app.framerstatic.com/chunk-W5NEMDPS.mjs.map
