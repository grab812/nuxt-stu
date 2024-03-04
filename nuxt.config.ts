// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      // Default meta
      htmlAttrs: { lang: "ko" },
      viewport:
        "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0",
      title: "CJ ENM AD Portal IMFFECT C",
      link: [{ rel: "icon", href: "/favicon.svg" }],
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { property: "og:site_name", content: "IMFFECT C" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "CJ ENM AD Portal IMFFECT C" },
        {
          property: "og:description",
          content:
            "CJ ENM의 통합마케팅솔루션, 최적의 캠페인으로 광고주와 함께 합니다.",
        },
        {
          property: "og:keywords",
          content:
            "tvN, Tving, Mnet, OCN, tvN Story, tvN Thrills, tvN Show, Olive, DIA TV, Tooniverse, 투니버스, CJ ENM, 방송광고, TV광고, 동영상광고, 디지털광고, 온라인광고, 방송 캠페인, 디지털 캠페인, 캠페인 집행, On-Off 이벤트, 프로모션, 디지털 스튜디오, 인플루언서 광고",
        },
        {
          property: "og:image",
          content: "https://imffectc.cjenm.com/kakaoshare_image.png",
        },
        { property: "og:url", content: "https://imffectc.cjenm.com" },
        { charset: "utf-8" },
      ],
    },
  },
  css: [resolve("/assets/scss/_index.scss")],
  imports: {
    dirs: [resolve("./stores"), "/stores", "api"],
  },
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      //"defineStore",  import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
