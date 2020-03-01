
// SERVICE WORKER INIT

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js', { scope: "/"})
    .then(reg => console.log('JS: Service Worker registered', reg))
    .catch(err => console.log('JS: Service Worker not registered', err));
}

// STYLES INIT

var head = document.head;
var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = './css/style.css';
link.media = "screen,print";
head.appendChild(link);

// var bs4 = document.createElement("link");
// bs4.type = "text/css";
// bs4.rel = "stylesheet";
// bs4.href = './css/bootstrap.min.css';
// bs4.media = "screen,print";

// <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
// https://www.pwabuilder.com/
// https://nostalgic-neumann-a1a8fd.netlify.com/

// JS INIT

// ## TO DO ##

// ONLOAD INIT

const init = () => {
  "use strict";
  console.log("Onload: Init process");
  // jsFadeIn(content, ms);
  let size = document.querySelector(".page__viewport");
  if (size) {
    window.onresize = doResize;
    function doResize() {
      size.innerHTML = '' + window.innerWidth + '<small>x</small>' + window.innerHeight + '';
    }
    window.dispatchEvent(new Event('resize'));
  }
  // doSomethingElse();
}

// ON LOAD EVENT

window.onload = init; 

// ON BEFORE UNLOAD EVENT

window.addEventListener("beforeunload", function(event) {
  console.log("Unload: unload process");
  // doSomething();
  // jsFadeOut(content, ms);
});
