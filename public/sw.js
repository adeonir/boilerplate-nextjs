if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,t)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=t(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/b089880ded93a500da625c0b0ca83c3984449317.eb62e695ea14086e5524.js",revision:"b6a7574de6f7e5d52d774efd4a054982"},{url:"/_next/static/chunks/ba8c6c780bb3458af61cf827e1e93a85fbc261d9.099c5bdb700148843b58.js",revision:"76c1511715e75442f308cd6ab195501d"},{url:"/_next/static/chunks/framework.c6faae2799416a6da8e8.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/runtime/main-e26e52ed52ff5674a8a7.js",revision:"576064f1450f7774f108d0b8a4d6bb12"},{url:"/_next/static/runtime/polyfills-b4159d6a0c257fa8becc.js",revision:"aac51d93a73c09c16b3b6706fd3d7219"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/_next/static/rwOjqgW7hkbYxhKiCktR_/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/rwOjqgW7hkbYxhKiCktR_/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/rwOjqgW7hkbYxhKiCktR_/pages/_app.js",revision:"f043558c518298229c72f8c46b4cfce4"},{url:"/_next/static/rwOjqgW7hkbYxhKiCktR_/pages/_error.js",revision:"7d7e9531965e5a68df767e7ba54345c3"},{url:"/_next/static/rwOjqgW7hkbYxhKiCktR_/pages/index.js",revision:"728d14412ebea54392f519a6fb8fc160"},{url:"/assets/hero-illustration.svg",revision:"88c8223ee930928adfe216e3fa2572b1"},{url:"/assets/icon-192.png",revision:"a246d88f2396d52ddcacb157bc36219a"},{url:"/assets/icon-512.png",revision:"492f42b2e691ea8c9dc69b92b5e2f88e"},{url:"/assets/logo-gh.svg",revision:"b4a7a9906eba282a74ee3a4e40b6ff26"},{url:"/assets/logo.svg",revision:"a75d2551d2685540e93a8e5a829bc349"},{url:"/manifest.json",revision:"42139ec86e068140d3db6691d384b8ee"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
