/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/07/13/Linux-MOOC习题-11~15章/index.html","e5d04bf2358b6bdc4e00d1cc6ffb2564"],["/2020/07/13/Linux-MOOC习题-1~5章/index.html","8bd92c57fe5f6e3eca5c0941b258fbc5"],["/2020/07/13/Linux-MOOC习题-6~10章/index.html","cb88796f4bcc0ce70cc39145facdb25e"],["/2020/07/13/Linux-上机实战1-正则表达式/index.html","7c7b642ce0bfe2c05b9e17f18ab5a1a6"],["/2020/07/13/Linux-上机实战2-遍历目录/index.html","bb47dfe24b9017522cccbd07a13fd5b3"],["/2020/07/13/Linux-上机实战3-shell脚本程序设计/index.html","65ca1a00c06dd235263fbe4e1501959b"],["/2020/07/13/Linux-上机实战4-SimpleShell/index.html","790839f86354aef94a419e17fe344e41"],["/2020/07/13/Linux-拓展学习/index.html","63beac4d61bcd8de8386f402a409d794"],["/2020/07/13/Python-爬虫小Demo-学堂在线课程/index.html","b7cc58c5ede66463e1125479d2ec0351"],["/2020/07/13/大数据-习题/index.html","116f53c0470b9325ee7ee083e910e21c"],["/2020/07/13/大数据实战-Python可视化-Matplotlib可视化/index.html","3f2114798c58e6919a21ba7b30e1b061"],["/2020/07/13/大数据实战-Spark-Java单词计数/index.html","af636baf827106c0f060c01a62b04816"],["/2020/07/13/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","6b227e2080e783faed9ccf3340bb8c91"],["/2020/07/13/大数据实战-Spark-分析流量日志/index.html","a4e91bd188d56eb9fd3693319d9134b6"],["/2020/07/13/大数据实战-Spark-自选日志分析/index.html","dc3a9fe0e5185360302930f246faec8b"],["/2020/07/13/我的第一篇博客/index.html","ec038e8ea913ca6bed662ba5d4f33ded"],["/2020/07/13/机器学习-实验-K-Means聚类/index.html","46bd067488c23f1e38dc1faf657c27d2"],["/2020/07/13/机器学习-实验-决策树/index.html","792077f8ba0e03e72397da039fc690a1"],["/2020/07/13/机器学习-知识拓展-条件熵/index.html","ce037021a7ef55cad5a17683ec3f36fd"],["/2020/07/13/现代交换原理-MOOC习题-1~4章/index.html","9cd51a574df0edaf81b2990828617277"],["/2020/07/13/现代交换原理-MOOC习题-5~6章/index.html","60361868c46499f8930da0a2bdfd0ada"],["/2020/07/13/计算机系统结构-实验-1和2遇到的问题/index.html","06e4b40f350802009c36cc6b22306e89"],["/2020/07/13/计算机系统结构-实验-使用MIPS指令实现冒泡排序法/index.html","97a204f89a514514093a0c86f4dc6fbe"],["/2020/07/13/计算机系统结构-实验-使用MIPS指令实现求两个数组的点积/index.html","02439d3e9b9907ce0a67c8b590d7fb13"],["/2020/07/13/计算机系统结构-实验-指令调度与延迟分支/index.html","e988c24f8ed782863cd9f8c56aca8261"],["/2020/07/15/C++工程项目-单词消除游戏/index.html","f19f06b6a3d1cf6143da044106d28996"],["/2020/07/15/C和C++的struct使用总结/index.html","ee5d62033ab291dbd7e992eedd09b087"],["/2020/07/15/机器学习-实验-DNN-手写识别/index.html","b943745ea8bc2a3053187b426bba12cc"],["/2020/07/15/机器学习-实验-RNN-为baby起名字/index.html","04e72c7b6464db025bfe0c78c55ba77c"],["/2020/07/15/机器学习-实验-花卉识别/index.html","8237674a3fb3bfa870a840df79c9dbcb"],["/2020/07/15/杂项工程项目集锦/index.html","25b01e8465346065494a077ad063222b"],["/404.html","a6bb531842d2b6886789865102075e6e"],["/about/index.html","caf3478dcd99a0c610187ba9db026816"],["/archives/2020/07/index.html","db17bafaa5e8e303e127ba7df9419a65"],["/archives/2020/07/page/2/index.html","5b4b91b3fde37ac2006dbb4567680e43"],["/archives/2020/07/page/3/index.html","488166fba35aff5ed24a2211ae72ab0c"],["/archives/2020/07/page/4/index.html","e76571c0a5eda49190bbb88a0f0fba48"],["/archives/2020/index.html","6f9f101abb15047e74ef8a79320593b8"],["/archives/2020/page/2/index.html","cafff6a726654d2250fdefeb21bd0bc1"],["/archives/2020/page/3/index.html","e8714267fe9886eae2ea7e9457ab2c4f"],["/archives/2020/page/4/index.html","ef0fe54da34dd6fa0cdb9e053e063896"],["/archives/index.html","1a458449aee7858dce1ec4208d9feeb5"],["/archives/page/2/index.html","1a458449aee7858dce1ec4208d9feeb5"],["/archives/page/3/index.html","11651afe41f10b95368373bcd683fce8"],["/archives/page/4/index.html","1a458449aee7858dce1ec4208d9feeb5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","d75d45080fb8a8a5f835586b740dc3ae"],["/categories/C-C/拓展学习/index.html","57060add6d18fe4716b8ee93352304a7"],["/categories/C/index.html","a8dcd55e9dbd1bf68c0c1ed41b3973f2"],["/categories/C/项目/index.html","536972ea124435a8ebe2d8c1636cc959"],["/categories/Linux/index.html","dd6ae8c5066dbf9bb8aecaa490ed4888"],["/categories/Linux/上机实战/index.html","3fbf8ad2153ae45c38d1cd81a03c6f45"],["/categories/Linux/习题/index.html","3fcf7bd8a448838be76d8349a7c60d2c"],["/categories/Linux/拓展学习/index.html","a180ae2954b6ccdae2123df4db526168"],["/categories/Python/index.html","8c6870956cdc139e43a23d5a7ef83c7c"],["/categories/Python/爬虫/index.html","30e2f69d46edc5894e15bb3b2e2a643b"],["/categories/index.html","286fe112b1278285b63b233ba4bdf61f"],["/categories/其他/index.html","bd3f2da04a6637e0d94104e393e2267e"],["/categories/大数据/index.html","9e0e4821eebde50d10729c6235a17523"],["/categories/大数据/习题/index.html","8f8a8dfe2f37649198929cde4df24d2f"],["/categories/大数据/实战/index.html","e963e22229e0a20ce7e0245a930c4bc4"],["/categories/机器学习/index.html","707a73a5da4eac32d7cc7e5188f655fd"],["/categories/机器学习/实验/index.html","6593a5c6ae8ed16c1351fee43275b55c"],["/categories/机器学习/知识拓展/index.html","3507e911b91989ff61387960a390f864"],["/categories/杂项/index.html","8712ba363d1ab087e4512d75e67e2bf0"],["/categories/现代交换原理/index.html","94570a699400257eb98ec8d992119eea"],["/categories/现代交换原理/习题/index.html","332e63eeb4b783013a3c8f06ebd304e5"],["/categories/计算机系统结构/index.html","dfe8051c0a4c1b5d973286f5ecef5bd9"],["/categories/计算机系统结构/实验/index.html","738766c4137484d3af0f54699d4949ed"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/style.css","0bb57cb96a43fe2b47a2fd9172818358"],["/faqs/index.html","ec45e1818739fbbbe23f8e849aedd901"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","3986875a1e668f43ee87b5735f59c190"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","33692402f7ebe0ae25f0edc8481bdb4c"],["/js/app.js","d89efa1c5649ea2a08658cd3f43adbde"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/live2d/README.html","011e812cee75c999bf7019e86a59f697"],["/live2d/assets/browserstack.svg","2a6baa3b856d36858a04a990c2642938"],["/live2d/assets/screenshot-1.png","95523f052a8a42c551781ffda4da4ae3"],["/live2d/assets/screenshot-2.png","fbfb026d51a9b32b4a621f044af93bdf"],["/live2d/assets/screenshot-3.png","dc41756e1297f7b616bce7744053a1eb"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","75f6877292f87bbaae506bdd2f29592f"],["/live2d/demo/demo2.html","acfba239ba592b5faf49c58be22d1583"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","c5dce0549b455ce0cbbce856dfe8ae22"],["/mylist/index.html","095f16e89732e7e338777591f45a8c90"],["/page/2/index.html","c14d42b56bac3008b53f19efa6115ab4"],["/page/3/index.html","0bd644fc9b3db39bbb368adbe27ed8ba"],["/page/4/index.html","079d17ef36f9a0186c0cd3ca292e4d6c"],["/shuoshuo/index.html","59cf38f3b09be47471da318089f2ca71"],["/tags/AI/index.html","3986e649b46de23a015ffe043843ff78"],["/tags/C/index.html","0451110614bd53637d47e6a2e5fa1774"],["/tags/C99/index.html","b5fadd694fb86892513aaaf201c1906f"],["/tags/DNN/index.html","f557a0add1aee7515f866b43ba628829"],["/tags/HDFS/index.html","a8a3114908be53f8d9b25217d4ee2629"],["/tags/Java/index.html","65e2f025807d1f0b0e5c0cab4e3ba54b"],["/tags/K-Means/index.html","a94bfb263f4db6db404643e883331b52"],["/tags/Kafka/index.html","e4191b639c7e344de430362cde2bc50b"],["/tags/Linux/index.html","5a15d56d28d76423c31b138adcbcc89f"],["/tags/MIPS/index.html","83c76265933a8308cccc3fb4e7f3a72d"],["/tags/MOOC/index.html","1b60ed6d53bd1b311dddb556dde615d3"],["/tags/MapReduce/index.html","5b0d83049dac0b83dd91a5e8583efef7"],["/tags/Matplotlib/index.html","cf70a089c20ce7c0642042bbece27139"],["/tags/Python/index.html","d51ea5b282997671a21a65edbb45adcd"],["/tags/QT/index.html","74662ae3b2d6cd3d9469992f01797afc"],["/tags/RNN/index.html","64505629607850eb79389362fc240b72"],["/tags/Scala/index.html","f055c33dd92a77e88e442a95da7f116e"],["/tags/Shell/index.html","4797c4b714b015e13ea931ba5445095c"],["/tags/Spark/index.html","d25e8f501b1fbbe7517f5f66c040ff42"],["/tags/Streaming/index.html","92a764cb99734c21bf405821538f5ed3"],["/tags/Struct/index.html","7d310c0036de5e839865c3674c3c6eb1"],["/tags/first/index.html","4e1f0f40ef6a4674dad3241b0cc64c20"],["/tags/iPython/index.html","5587c36dc3150d9b87c496d1680c5c79"],["/tags/index.html","5921a48a93b7cb723ba7ed32db374754"],["/tags/ls/index.html","2154dc4e5a603128cc814f076e4097a0"],["/tags/习题/index.html","a8a00ff6eb7611a143ccabd4411621b5"],["/tags/人工智能/index.html","a9e1e432e97021b5b33a5324a0f47f04"],["/tags/决策树/index.html","0bdfdb70b228d655f61aeeed446b440b"],["/tags/分类/index.html","cae4538bd41f39ec16c9bea60034e5af"],["/tags/华为云/index.html","f64a45fc4adb43975039816ace13c330"],["/tags/单词计数/index.html","5c2c806aaa365a9f3dbe5271cf5d60a0"],["/tags/可视化/index.html","bf02bed6d452bbaef405dc7bebcd6045"],["/tags/大数据/index.html","bc9f1ae2608d9e5d80ba24f38470479b"],["/tags/学堂在线/index.html","2c4d7c26119acbd00cd022911dd7f68a"],["/tags/实战/index.html","1f1c1ecc8d93950304730c5835ec71b7"],["/tags/实验/index.html","43126f4a5636b05daef31898c90b2fe6"],["/tags/小游戏/index.html","7d65fe938a80e8711539a9716e9d2f5e"],["/tags/工程/index.html","7a6d3501493973391bd375762935df16"],["/tags/手写识别/index.html","68e7a339837ab2eec5e814908582a53e"],["/tags/拓展/index.html","61610efa46a445c8780ccdc6c9d8e359"],["/tags/数据处理/index.html","017c2c1344791d21e4ed2a3bb3866502"],["/tags/日志分析/index.html","3dab7a139a12e85e3dfe4463526e7323"],["/tags/易错点/index.html","88823134b6238a0d32d5fb08f50d41f1"],["/tags/机器学习/index.html","9584852ade874394ea66b24abc5e8b5b"],["/tags/条件熵/index.html","21b5ae04bda00973cc40c9fcc14ac45d"],["/tags/正则表达式/index.html","c88d62cddbd32c6d8b0b9a9ee485b6a0"],["/tags/汇编/index.html","93f1895e7587778bec14b38c4c04cd1d"],["/tags/流计算/index.html","e5be92755c30ea9054a38bc4111b7a23"],["/tags/爬虫/index.html","c46826797a6f32bfa285d02c790da92f"],["/tags/现代交换原理/index.html","fc7e36a451d65c06db441acb5c2375d6"],["/tags/知识/index.html","1e79194739d19097ea1c43bd3cefa658"],["/tags/网课/index.html","dfabf859b817ad614a360c7065c95d22"],["/tags/聚类/index.html","1a7aa60fd0cd6b54e724967cb0cb7ced"],["/tags/脚本/index.html","1c9dfa870701c696d607e83ac2023940"],["/tags/计算机系统结构/index.html","fe23702d05a1f7ca6fdc6f6f2fd7f165"],["/tags/课程/index.html","97b76302a565830878dd882afff1e3de"],["/tags/起名字/index.html","07b0f4eaad6b95eb35ed9b640f9e5e67"],["/tags/遍历目录/index.html","4361694ff5273e5c6a117a8ef5253758"],["/tags/难点/index.html","68c8dde5df5ae838f64c8823d8e6a636"],["/tags/项目/index.html","badf484b328b530eb59e35e8233e4abf"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




