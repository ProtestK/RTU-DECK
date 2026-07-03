const C="rtudeck-v2";
const ASSETS=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png",
"https://unpkg.com/react@18/umd/react.production.min.js",
"https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
"https://unpkg.com/@babel/standalone/babel.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const u=e.request.url;
  if(u.includes("api.anthropic.com")||e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{
    const cp=n.clone();caches.open(C).then(c=>c.put(e.request,cp));return n;
  }).catch(()=>caches.match("./index.html"))));
});