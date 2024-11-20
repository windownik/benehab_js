'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "23674970ca90557a50d711574ec9ab97",
"version.json": "d8fc0d7ca564c375f315e94676d5b2d1",
"index.html": "434799e7865d23b04b2b6e7e51875421",
"/": "434799e7865d23b04b2b6e7e51875421",
"main.dart.js": "19d4f0adaff37945b2d3146cc7f96857",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"README.md": "1e5bf4edc45f6461b269d3444a439a6d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dae09b8cd96edf4a63464c4f58022e87",
".git/ORIG_HEAD": "d52e49873c7653e58554b3719215521c",
".git/config": "a06e73f6afb49847fe40a7536ed98cc0",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/04a4db732b794029ac25398e7ff9bce2983420": "666184c15b45cdb2694a4b18596bdb43",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/dbfb0313ec3b28481174257fdf9043ca29916c": "424e367bd1e01770cec6c476c2c52367",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/67/5893601f42f187fc5d492db399031cebcd927c": "149e9debeececdeeef24163622e88027",
".git/objects/0e/eb05c3860dbb09d54c18546767a4d04263339f": "8b4bcecd169888bd723477e623d5a8d6",
".git/objects/a3/b18cc21a6b98c0e5156b1b36a31c27ffda6b7f": "34c3bade0a4d4290632b40ec9ff1f574",
".git/objects/b5/d50cca92681640129cda13eb4b9fdd6a58891e": "2c2ac073b70169f8f0f9efd9be454ee2",
".git/objects/d7/6ca795e346e6e56b562bfb7202f686f706242e": "ed3d6e90c556fac5f26d0e07fe2c14a4",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/836023548fea0da7aa9a4500c7afe169010693": "59a39123f52782b6a1b8ed4722e5a05e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ed725e69b3d2a76b5a2fa60774e8169130a21a": "fbab41c0b5d06b4606fc471aa79dadaf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/829791feb02785677ade4c17ac5658c9c2950e": "eddb873067e2935447cacde5c2be9e75",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/164b5f2295502459976fe3c3e8259394fa47f9": "3daad5cbcbb28e2407658d1627f34bf2",
".git/objects/c8/e9cd7bcd4c1d0e839a271ab8fb75f4d4c1d148": "32d95baed389aa1ae4daf361178d6868",
".git/objects/pack/pack-df487c8d0df416d2d2bb4384fd9d9dcefae37c91.idx": "8ccdb612fac439a76035e1e4238877fc",
".git/objects/pack/pack-df487c8d0df416d2d2bb4384fd9d9dcefae37c91.pack": "a18d628642988cb39a5df7f6167342a9",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/6861e5461a60851e7f6b08646f06956610b136": "9903ddef027840ac2b146ce696496cc9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/20e2311ed810801947081370a9fd4b1a726bfc": "6605d06783a062b818189b0784d33ec1",
".git/objects/8f/0647d915840f37dd375cd96e6c7559571b38b7": "6ad7575f95811004c0d885228f6a5379",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/d7018b9b0a5a7e35f72e24582a21da7e27904b": "c7a769c100053af911899173ea0885c3",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/09/fcc857c45c84edd39a3026ccadb0909f8b14f1": "f9371f505250b3099ee09bc6eb40bff2",
".git/objects/5d/47239750c42e6e5367cf4e2f2e3a4800f30fe9": "c6e3b5af917e21f3c914fea534afd9e3",
".git/objects/91/a077e19edf138df053c4cb51edfdaf4d0c6c17": "cb344b9931bad6011b3121c5f70b86f6",
".git/objects/65/aec538bf0489a0ec39f069a9c32f13cdaaf755": "246e73a927dc11a5930c26869c7da17c",
".git/objects/62/20ba2f17c5ee29010c77bc6f8c84eae6577a19": "abb9388f981061663d9afb306eb0b14a",
".git/objects/96/0c09a115c8f3d98f43dc1bc0417c8c97c58925": "74e90347e90a5e1875dea148c9a14aaf",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/62ba699c0a4e018099e92511847ad669e46b21": "a64546278c7bbf4e95ec280535882ddf",
".git/objects/5e/3a8fb01268e2d81780f9c424fb6d0aab116c49": "f0278ccb975b889927749c42bf187207",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/5746b4fe9415d91ced86f3ccc363f6bdba3df7": "d13d21272c9872f5dc67f73b4d8df438",
".git/objects/39/e4b63b74680d6cb55f63cf1cccb3281029f50e": "227574740744fbe70a708c1e6c6ab9d9",
".git/objects/64/5c36a4423442e7b0f1230889522b706c636209": "091d4eb7b7509eb419d7afcffcf89164",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ec83c5cbdac766a371c445e571961e9e36543b": "fd6167baa5fa66b1348e618624041d11",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/580103b2fe415d117b4c33e9866439ae16997c": "8186865b7daac8293f3e126998e74d22",
".git/objects/e1/b065b808ba5458b36f26cebba9ba4db04b388e": "76b9c5274a41d947ed64a336459ea4f6",
".git/objects/e6/1e6f8240c3251a8243b805bac74d841cef6dfa": "8c06b652d014565fb8420b3e36e03b64",
".git/objects/e8/f57be80e49e4467ed2338685295405c44218b1": "78ec4ef02374dc14726609258595aff1",
".git/objects/c5/faa0568ad34fb7d17f544be7146e74fd718668": "47260cec179bd5a6d0470542fcd0e4c0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/7a466f5edc68d64368444fefb2db37efa19a71": "57cef582332a225e9ee7ac0b7aa4503c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/88f863d4cb7a9e6ff23045baced109a491cf5f": "556f9b038e25e611331c9c1f54bc399b",
".git/objects/85/ef765ccddd1c5bde29b644b905320b7fd9988f": "828a3bf55031cf465a4e06da4e694157",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/82afa33374676321f4cbb7fe62f292ff24736b": "f6e8d9e3342f3d4bba1e28d319d9cd59",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8b/45a5852c395a4aee84956649e1396d8a2473cf": "6d1a91e8e671481dbbffd7f95aac870f",
".git/objects/8e/13921cce432399f00d7dca93109ceacdfcb15d": "7832b6e9e5a23ed2936471e486d04c7a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1355845535ce6004547481db7dbab6e",
".git/logs/refs/heads/main": "a1355845535ce6004547481db7dbab6e",
".git/logs/refs/remotes/origin/HEAD": "ede8583c58f5c9262a7a414758a8e99d",
".git/logs/refs/remotes/origin/main": "eb0001aeaf3cc7dff695d788dcdfff15",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2d8eb526449d115ed9c4ac1260cdf1bb",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2d8eb526449d115ed9c4ac1260cdf1bb",
".git/index": "d36cd5e31eb3878f69d2d8c9ee604844",
".git/packed-refs": "f6c1e3464ab4ab6e2492826b04fedd9a",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/FETCH_HEAD": "814930607b7ea2db814cd9e916c6e1d5",
"assets/AssetManifest.json": "b8031cfd1532a0df586e268e4360dfb4",
"assets/NOTICES": "00e4c3cd8ef4170de625691ac46cc2c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d03f1014c56d76bd46b8ff6ffe5dcc9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/o3d/assets/model-viewer.min.js": "a9dc98f8bf360be897a0898a7395f905",
"assets/packages/o3d/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d091c4204d03af57b4664140a6657ea9",
"assets/fonts/MaterialIcons-Regular.otf": "8d1f1f0d26a0ac9eb3a8de5d35b32e82",
"assets/assets/glb/facial_body_animated.glb": "6158cfffe23890a66b5dcf4a0e264a45",
"assets/assets/glb/just_a_girl.glb": "0cdac4f237b975283ad28174cc583381",
"assets/assets/glb/girl.glb": "ce23379f7667777b85dabcb4f18879b2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
