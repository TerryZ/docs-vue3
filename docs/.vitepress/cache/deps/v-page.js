import {
  computed,
  defineComponent,
  h,
  onMounted,
  ref,
  toRefs,
  watch
} from "./chunk-RJK54SHS.js";

// node_modules/.pnpm/registry.npmmirror.com+v-page@3.0.0-beta.1_vue@3.2.45/node_modules/v-page/dist/v-page.js
(function() {
  "use strict";
  try {
    var i = document.createElement("style");
    i.appendChild(document.createTextNode(".v-pagination{display:flex;justify-content:flex-start;box-sizing:border-box}.v-pagination--right{justify-content:flex-end}.v-pagination--center{justify-content:center}.v-pagination ul{margin:0;padding:0;display:flex}.v-pagination ul li{list-style:none;display:flex}.v-pagination ul li a{padding:.3rem .6rem;text-decoration:none;line-height:1.3;font-size:14px;margin:0;outline:0;color:#333;border-radius:.25rem}.v-pagination ul li:not(.active):not(.disabled):not(.v-pagination__list):not(.v-pagination__info):not(.v-pagination__slot) a:hover{background-color:#fafafa}.v-pagination ul li.active a{background-color:#eee;color:#aaa}.v-pagination ul li.disabled a{color:#999;cursor:default}.v-pagination ul li select{width:auto!important;font-size:12px;padding:0;outline:0;margin:0 0 0 5px;border:1px solid #ccc;color:#333;border-radius:2px}.v-pagination ul li select:hover[disabled]{color:#999}.v-pagination.v-pagination--border ul{box-shadow:0 1px 2px #0000000d;border-radius:.25rem}.v-pagination.v-pagination--border ul li:not(:first-child) a{margin-left:-1px}.v-pagination.v-pagination--border ul li a{border:1px solid #DEE2E6;border-radius:0}.v-pagination.v-pagination--border ul li:first-child>a{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.v-pagination.v-pagination--border ul li:last-child>a{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.v-pagination.v-pagination--border ul li.active a{color:#999;background-color:#eee}")), document.head.appendChild(i);
  } catch (a) {
    console.error("vite-plugin-css-injected-by-js", a);
  }
})();
var [
  z,
  T,
  D,
  G,
  Z
] = ["cn", "en", "de", "jp", "pt"];
var I = {
  [z]: {
    pageLength: "每页记录数 ",
    pageInfo: "当前显示第 #pageNumber# / #totalPage# 页（共#totalRow#条记录）",
    first: "首页",
    previous: "«",
    next: "»",
    last: "尾页",
    all: "全部"
  },
  [T]: {
    pageLength: "Page length ",
    pageInfo: "Current #pageNumber# / #totalPage# (total #totalRow# records)",
    first: "First",
    previous: "«",
    next: "»",
    last: "Last",
    all: "All"
  },
  [D]: {
    pageLength: "Seitenlänge ",
    pageInfo: "Aktuell #pageNumber# / #totalPage# (gesamt #totalRow# Aufzeichnungen)",
    first: "Zuerst",
    previous: "«",
    next: "»",
    last: "Letzte",
    all: "Alle"
  },
  [G]: {
    pageLength: "ページごとの記録数",
    pageInfo: "現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）",
    first: "トップページ",
    previous: "«",
    next: "»",
    last: "尾のページ",
    all: "すべて"
  },
  [Z]: {
    pageLength: "Resultados por página ",
    pageInfo: "#pageNumber# / #totalPage# (total de #totalRow#)",
    first: "Início",
    previous: "<",
    next: ">",
    last: "Fim",
    all: "Todos"
  }
};
var r = 1;
var J = 5;
var B = 10;
var q = [B, 20, 50, 100];
var x = 0;
function H(e, s, t) {
  if (s <= t)
    return r;
  const v = Math.floor(t / 2), n = s - t + 1, o = e - v;
  return o < r ? r : o > n ? n : o;
}
function K(e, s, t) {
  const v = H(e, s, t);
  return Array.from({ length: t }).map((n, o) => v + o).filter((n) => n >= r && n <= s);
}
var R = defineComponent({
  name: "VPage",
  props: {
    modelValue: { type: Number, default: 0 },
    totalRow: { type: Number, default: 0 },
    language: { type: String, default: z },
    pageSizeMenu: {
      type: [Boolean, Array],
      default: () => q
    },
    align: { type: String, default: "right" },
    disabled: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    info: { type: Boolean, default: true },
    pageNumber: { type: Boolean, default: true },
    first: { type: Boolean, default: true },
    last: { type: Boolean, default: true },
    displayAll: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: s, slots: t, expose: v }) {
    const { pageSizeMenu: n, totalRow: o } = toRefs(e), l = ref(0), f = ref(
      n.value === false ? B : n.value[0]
    ), N = ref(J), g = ref(I[e.language] || I[z]), b = ref(-1), p = computed(() => f.value === x ? r : Math.ceil(o.value / f.value)), C = computed(() => K(
      l.value,
      p.value,
      N.value
    )), M = computed(() => g.value.pageInfo.replace("#pageNumber#", l.value).replace("#totalPage#", p.value).replace("#totalRow#", o.value)), V = computed(() => ({
      "v-pagination": true,
      "v-pagination--border": e.border,
      "v-pagination--right": e.align === "right",
      "v-pagination--center": e.align === "center",
      "v-pagination--disabled": e.disabled
    })), A = computed(() => l.value === r), L = computed(() => l.value === p.value);
    watch(
      () => e.modelValue,
      (a) => {
        typeof a == "number" && a > 0 && m(a, false);
      }
    );
    function m(a = r, y = true) {
      if (e.disabled || typeof a != "number")
        return;
      let d = a < r ? r : a;
      a > p.value && p.value > 0 && (d = p.value), !(d === l.value && f.value === b.value) && (l.value = d, y && s("update:modelValue", l.value), b.value = f.value, w());
    }
    function w() {
      s("change", {
        pageNumber: l.value,
        pageSize: Number(f.value)
      });
    }
    function h2(a, y, d) {
      return h("li", { class: a }, [h("a", {
        href: "javascript:void(0)",
        onClick: () => m(y)
      }, d)]);
    }
    return onMounted(() => {
      m(e.modelValue || r);
    }), v({
      current: l,
      totalPage: p,
      pageNumbers: C,
      goPage: m,
      reload: w
    }), () => {
      const a = [];
      if (Array.isArray(n.value) && n.value.length) {
        const i = {
          disabled: e.disabled,
          onChange: (S) => {
            f.value = Number(S.target.value), m();
          }
        }, _ = n.value.map(
          (S) => h("option", { value: S }, S)
        );
        e.displayAll && _.push(
          h("option", { value: x }, g.value.all)
        );
        const E = h("li", { class: "v-pagination__list" }, [
          h("a", [
            h("span", g.value.pageLength),
            h("select", i, _)
          ])
        ]);
        a.push(E);
      }
      if (e.info && a.push(
        h("li", { class: "v-pagination__info" }, [h("a", M.value)])
      ), "default" in t) {
        const i = h("li", { class: "v-pagination__slot" }, [
          h(
            "a",
            t.default({
              pageNumber: l.value,
              pageSize: f.value,
              totalPage: p.value,
              totalRow: o.value,
              isFirst: A.value,
              isLast: L.value
            })
          )
        ]);
        a.push(i);
      }
      if (e.first) {
        const i = ["v-pagination__first", { disabled: A.value }];
        a.push(h2(i, r, g.value.first));
      }
      const y = ["v-pagination__previous", { disabled: A.value }];
      a.push(
        h2(y, l.value - 1, g.value.previous)
      ), e.pageNumber && a.push(
        ...C.value.map((i) => {
          const _ = { active: i === l.value };
          return h2(_, i, i);
        })
      );
      const d = ["v-pagination__next", { disabled: L.value }];
      if (a.push(
        h2(d, l.value + 1, g.value.next)
      ), e.last) {
        const i = ["v-pagination__last", { disabled: L.value }];
        a.push(
          h2(i, p.value, g.value.last)
        );
      }
      return h("div", { class: V.value }, [h("ul", a)]);
    };
  }
});
R.install = (e, s = {}) => {
  if (Object.keys(s).length) {
    const { props: t } = R, {
      language: v,
      align: n,
      info: o,
      border: l,
      pageNumber: f,
      first: N,
      last: g,
      pageSizeMenu: b
    } = s;
    v && (t.language.default = v), n && (t.align.default = n), typeof o == "boolean" && (t.info.default = o), typeof l == "boolean" && (t.border.default = l), typeof f == "boolean" && (t.pageNumber.default = f), typeof N == "boolean" && (t.first.default = N), typeof g == "boolean" && (t.last.default = g), typeof b < "u" && (t.pageSizeMenu.default = b);
  }
  e.component(R.name, R);
};
export {
  R as Page,
  R as default
};
//# sourceMappingURL=v-page.js.map
