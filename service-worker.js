"use strict";var precacheConfig=[["/NearYou/index.html","6aded0e7d9095449e90a675cc0bc2b4a"],["/NearYou/static/css/main.649899f4.css","9304b0108f7646ecab61b521ef9271df"],["/NearYou/static/js/main.332b2451.js","2b742559efe9758c008709544fee4cf1"],["/NearYou/static/media/basket.6a08d223.png","6a08d223c9a4bfe9d7a17d3cdd4d287b"],["/NearYou/static/media/ceiling.c70d693f.svg","c70d693f91135ab483e15ad880dff738"],["/NearYou/static/media/desktop.e14c8d95.svg","e14c8d95a46815d18ad7e3252e7792d7"],["/NearYou/static/media/dnstore.c3e4dfe5.svg","c3e4dfe5ba7ca6ce503279bc0744394c"],["/NearYou/static/media/door.f03e9b13.svg","f03e9b130d2aad264d5a6b644549eac1"],["/NearYou/static/media/electrician.1729e3e3.svg","1729e3e3f4ab7ddfeb9ee255ed1a6c64"],["/NearYou/static/media/grassleft.4623d8ee.svg","4623d8eed6501534516ecc295465522a"],["/NearYou/static/media/grassright.b0ef7033.svg","b0ef70337e95f9fcb54fe31407bc8773"],["/NearYou/static/media/pharmacies.385608f8.svg","385608f88db1c7f160c4cd7a5f6999b0"],["/NearYou/static/media/plumber.c0caad86.svg","c0caad86636e33318debadff8ceff13d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/NearYou/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});