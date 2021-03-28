/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2.png",
    "revision": "76ac15f2c1486d17812347e3f6b8f595"
  },
  {
    "url": "404.html",
    "revision": "65e3704755e824b4305d3b65b8cf4e9d"
  },
  {
    "url": "assets/css/0.styles.497310e6.css",
    "revision": "c8fb0db5cb33358924c492e64ad8cbe6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.911b502a.js",
    "revision": "7f9f8990fdf4d7c9d83a849cfb080e68"
  },
  {
    "url": "assets/js/11.b8f15151.js",
    "revision": "2dc805578486d7d92bbcf4c83a15e212"
  },
  {
    "url": "assets/js/12.16558254.js",
    "revision": "c4e5c134e1aef47eb3a39df68dc00050"
  },
  {
    "url": "assets/js/13.92b433b6.js",
    "revision": "1bab3322bc3f41ae3695bad8b2206d3c"
  },
  {
    "url": "assets/js/14.74e44524.js",
    "revision": "6c2ab309c2be86547ab8cc10d38ec081"
  },
  {
    "url": "assets/js/15.146f01ee.js",
    "revision": "e83a3e935ca5af32e5f5898304fa264b"
  },
  {
    "url": "assets/js/16.4fa55f36.js",
    "revision": "79c0007d95e75f382297bd31ac24203a"
  },
  {
    "url": "assets/js/17.03203cfb.js",
    "revision": "e7766ca6314e1ade9e7af4aa161cf03c"
  },
  {
    "url": "assets/js/18.8be32f69.js",
    "revision": "790087ae4a7176a1b11bc380cb4790d5"
  },
  {
    "url": "assets/js/19.756bb7f8.js",
    "revision": "96fe2952f93b20119536f998a109f32d"
  },
  {
    "url": "assets/js/2.c9f26c1d.js",
    "revision": "97b621988df9040dc295f9a12a000b4b"
  },
  {
    "url": "assets/js/20.0452b0ca.js",
    "revision": "76fc4958c3fe780c1f371eff4c8dd72a"
  },
  {
    "url": "assets/js/21.46a316e1.js",
    "revision": "c42d61353abfc83326d16ea8128fd0a1"
  },
  {
    "url": "assets/js/22.02481c2d.js",
    "revision": "eb7a202be1fdd35f4101d8e545e542e5"
  },
  {
    "url": "assets/js/23.b67743f1.js",
    "revision": "0aaa192772eead540961bfaffcf992d7"
  },
  {
    "url": "assets/js/24.36be6c09.js",
    "revision": "12063ba801c0a3711a2a4781e08d777c"
  },
  {
    "url": "assets/js/25.f73e575e.js",
    "revision": "081a4eaa9886cc7e2e81598693d57bfd"
  },
  {
    "url": "assets/js/3.6363e2fb.js",
    "revision": "ff9a291939644e5a2d70fd55dd2ab33f"
  },
  {
    "url": "assets/js/4.22d45e33.js",
    "revision": "edcf5d62a3b03971ed59c95cdde132b4"
  },
  {
    "url": "assets/js/5.2f266737.js",
    "revision": "ccdd67d627e3e72fb6c911ec5907693c"
  },
  {
    "url": "assets/js/6.8d961da3.js",
    "revision": "916d8f310cee6f05cee30f559e9143e0"
  },
  {
    "url": "assets/js/7.59a02a9d.js",
    "revision": "519d7fc0daffe5a20bab8c60daa4a96c"
  },
  {
    "url": "assets/js/8.6e870e43.js",
    "revision": "2f56485345ed75b3f49a36886f9810a0"
  },
  {
    "url": "assets/js/9.712b4233.js",
    "revision": "d6021cd61508ca2492f6d03885e8a72a"
  },
  {
    "url": "assets/js/app.6d60600d.js",
    "revision": "8de3cd0977e83b0aae6496f0588f891c"
  },
  {
    "url": "avatar.png",
    "revision": "26f3032ec70a1fbb59c7a2f272ece583"
  },
  {
    "url": "home/index.html",
    "revision": "d5648e21576972cee28ce2c1528c2dc5"
  },
  {
    "url": "index.html",
    "revision": "1309d3d2b6e732d20df4bc31dcf2001c"
  },
  {
    "url": "work/accumulate/css/index.html",
    "revision": "f05dd6aeccabf146eae35f5ad74ce4e2"
  },
  {
    "url": "work/accumulate/html/index.html",
    "revision": "336c97d7a1b9b3d944bb30c0fc3564ed"
  },
  {
    "url": "work/accumulate/index.html",
    "revision": "d468218cd0d210ec84ff1d2298aea31c"
  },
  {
    "url": "work/accumulate/js/get-type-of-data.html",
    "revision": "228f7ba4778f8d53616faa369cc9e7b3"
  },
  {
    "url": "work/accumulate/js/index.html",
    "revision": "8d8cf9302c676daa61328c7dd1308ee7"
  },
  {
    "url": "work/accumulate/js/map-vs-object.html",
    "revision": "dd2c8bf4ffca2fb5c72c25c5c6fbde43"
  },
  {
    "url": "work/accumulate/js/throttle-debounce.html",
    "revision": "3647d3565a73156e3f40a34303523c5b"
  },
  {
    "url": "work/accumulate/vue/vue-plugin.html",
    "revision": "dcba3e2579a880f0aba946217f9d23f8"
  },
  {
    "url": "work/index.html",
    "revision": "c343fc22494a965e8845e5da5589951d"
  },
  {
    "url": "work/node/buffer.html",
    "revision": "58d2b38e88c28153579d20d65713e5bc"
  },
  {
    "url": "work/node/index.html",
    "revision": "f7cdb510e6f7184f06f0be39bd992489"
  },
  {
    "url": "work/tools/index.html",
    "revision": "4b5fc40cbe8e912a8a8a0828cdff2ded"
  },
  {
    "url": "work/tools/template/index.html",
    "revision": "56621f413c50be534e40629f8eeb4e45"
  },
  {
    "url": "work/tools/vue-press/index.html",
    "revision": "fae4a736dda3139e2547ece4f1560ab2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
