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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "576560e32f4430d771374f4dd9f08331"
  },
  {
    "url": "assets/css/0.styles.f11b2706.css",
    "revision": "f03de7d253bd2b8167f43f31b9acf009"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.3960fb8f.js",
    "revision": "4c4a9e79b7ff0d9478add86645b8ebf2"
  },
  {
    "url": "assets/js/4.441bde7f.js",
    "revision": "eb3fabfc9e48462ae30bd4c1d6fd92aa"
  },
  {
    "url": "assets/js/5.500d36ca.js",
    "revision": "664299b744e44e76117e8d7213014949"
  },
  {
    "url": "assets/js/6.d04ea0af.js",
    "revision": "916d00004f945dc40e6e2bac0ec2b670"
  },
  {
    "url": "assets/js/app.23a0ee63.js",
    "revision": "d2c30746d5935004e5fcf132f039dd07"
  },
  {
    "url": "docs/libraries-and-tools.html",
    "revision": "7c1a2fdebaa6600507da0dce04c0495a"
  },
  {
    "url": "docs/misc.html",
    "revision": "d55b24b93355badcb2fed2f46def6405"
  },
  {
    "url": "index.html",
    "revision": "a023a9abd9631c3034005a173ad3d557"
  },
  {
    "url": "logo.svg",
    "revision": "185c2afecb8c92147f3cb30c3db5b7c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
