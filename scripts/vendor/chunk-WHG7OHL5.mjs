import { yb as p } from "./chunk-QC4B33ZK.mjs";
import { n as d, v as c } from "./chunk-N5IX35J7.mjs";
import { Ra as s, Za as m, wh as f } from "./chunk-JFJOKIT4.mjs";
import { _a as o } from "./chunk-UJYN5YU4.mjs";
import { b as n } from "./chunk-LA34HORX.mjs";
function R(e, i, r, l) {
  let { imageSize: t, originalFilename: u } = i,
    g = n(e.fillImage) ? f(e.fillImage)?.preferredSize : void 0,
    a = {
      fillType: "image",
      fillImage: c(i, l ?? g, r),
      fillImageOriginalName: u,
      fillImagePixelWidth: t.naturalWidth,
      fillImagePixelHeight: t.naturalHeight,
      ...P(e),
    };
  if ((s(e) && e.fillEnabled === !1 && (a.fillEnabled = !0), o(e))) {
    let { nonZeroNaturalWidth: h, nonZeroNaturalHeight: F } = d(t);
    ((a.intrinsicWidth = h), (a.intrinsicHeight = F));
  }
  e.set(a);
}
function P(e) {
  if (m(e)) return { fillImagePositionX: void 0, fillImagePositionY: void 0 };
}
function O(e, i, r) {
  if (!i && !r) return !1;
  for (let l of e) {
    let t = p[l];
    if (r) {
      if (r.includes(l)) return !0;
    } else if (i && t && i.includes(t)) return !0;
  }
  return !1;
}
export { R as a, O as b };
//# sourceMappingURL=https://app.framerstatic.com/chunk-WHG7OHL5.mjs.map
