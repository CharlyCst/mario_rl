"use strict";var precacheConfig=[["/assets/block.png","41f3d93f9ae5bc264f8c9609180a3216"],["/assets/block_shadow.png","7fc9ce91e903febd4d8defa2138d6be6"],["/assets/border_bottom.png","5ed92ff9b28b08f1f34e4086b2cf5f66"],["/assets/border_bottom2.png","04461351dd5943c7e931d300c67df8a6"],["/assets/border_bottom_left.png","4c21ea8bc2483b6db324294d296fcc59"],["/assets/border_bottom_left2.png","abd1c64ca6bc88e5e532086c4dfd427a"],["/assets/border_bottom_right.png","fdc39c1befe504c252e94271b0f28c3a"],["/assets/border_bottom_right2.png","b598c644c784179e28c136a63bf9f060"],["/assets/border_left.png","ebeab23e894e41a1c6f0e4f6b6dbc5b9"],["/assets/border_left_up.png","51026e7868a74c903e98c95b3d7b1459"],["/assets/border_right.png","4592cfb0355f4c8d8029f7afbd5f3bb3"],["/assets/border_right_up.png","594e187e09ad448967381a34b74b4fdc"],["/assets/border_top.png","234f844f67df2e194a5ba4f1d8825f90"],["/assets/goomba.png","caafa0bcfd75f14b063e713baaa59012"],["/assets/goomba2.png","af5889697f73fb14ace83182f5b8c95c"],["/assets/goomba3.png","f3f0d6f9f7d383e209f31d162d6f498f"],["/assets/ground.png","cd14b3c9095b8fc6380087c6ee43f400"],["/assets/icon.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/assets/mario_back.png","d6b4ad7caf363581a4c358ab9d43cea7"],["/assets/mario_back1.png","a8d5af9df9549a397ad550c4bc5b12d6"],["/assets/mario_back2.png","c90cbbf77f415b2b56a292e75e56ff52"],["/assets/mario_front.png","a5a21d7bad298598a066072aa0ea3daa"],["/assets/mario_front1.png","3efd1f9ee655b332945c98a81a28de76"],["/assets/mario_front2.png","469baae56c1cf728f9496129d7583a95"],["/assets/mario_left.png","7b179fbba46457342bf6df6249ab5271"],["/assets/mario_left1.png","c839a0026060ad97450269a99ce9ffec"],["/assets/mario_left2.png","20846e622bc02cc72ca97b76c8422ace"],["/assets/mario_right.png","481619fbef48f917bee0fa06d1cbb08f"],["/assets/mario_right1.png","76584cd15085b766c513c2413886c30d"],["/assets/mario_right2.png","ecd3e312d46946d7407c1e332f2ba4f8"],["/bundle.062ad.js","86c2200ca4b6be61d060b5937f14eca6"],["/bundle.51edd.css","fcd193de7cabda9478988da95ad1ffe1"],["/favicon.ico","94eae66bebbd6bbfe48a669f245048ac"],["/index.html","0a6bbc46ecbef725ce5afe5f01835fd9"],["/manifest.json","9ae035ff102e7838f9d11338d9e4628b"],["/route-home/index.tsx.chunk.13eb0.js","48a36b27236f1925ced4530c52f87e5a"],["/route-profile/index.tsx.chunk.7e181.js","505e6893e6f525e54425e49978d09de8"],["/route-profile/index.tsx.chunk.9190f.css","593559f5bbc5ef1a56309bd0243d4cec"],["/sw-debug.js","13b82ed03d648451c57be206f75f0216"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),s=createCacheKey(n,hashParamName,t,!1);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});