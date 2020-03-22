function loadWidget(e){let t,{waifuPath:a,apiPath:i,cdnPath:n}=e,o=!1;function s(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e}"string"==typeof n&&(o=!0,n.endsWith("/")||(n+="/")),i.endsWith("/")||(i+="/"),localStorage.removeItem("waifu-display"),sessionStorage.removeItem("waifu-text"),document.body.insertAdjacentHTML("beforeend",'<div id="waifu">\n\t\t\t<div id="waifu-tips"></div>\n\t\t\t<canvas id="live2d" width="200" height="200"></canvas>\n\t\t\t<div id="waifu-tool">\n\t\t\t\t<span class="fa fa-lg fa-comment"></span>\n\t\t\t\t<span class="fa fa-lg fa-paper-plane"></span>\n\t\t\t\t<span class="fa fa-lg fa-user-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-street-view"></span>\n\t\t\t\t<span class="fa fa-lg fa-camera-retro"></span>\n\t\t\t\t<span class="fa fa-lg fa-info-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-times"></span>\n\t\t\t</div>\n\t\t</div>'),setTimeout(()=>{document.getElementById("waifu").style.bottom=0},0),function(){document.querySelector("#waifu-tool .fa-comment").addEventListener("click",m),document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click",()=>{if(window.Asteroids)window.ASTEROIDSPLAYERS||(window.ASTEROIDSPLAYERS=[]),window.ASTEROIDSPLAYERS.push(new Asteroids);else{var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/gh/GalaxyMimi/CDN/asteroids.js",document.head.appendChild(e)}}),document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click",v),document.querySelector("#waifu-tool .fa-street-view").addEventListener("click",p),document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click",()=>{u("照好了嘛，是不是很可爱呢？",6e3,9),Live2D.captureName="photo.png",Live2D.captureFrame=!0}),document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click",()=>{open("https://github.com/stevenjoezhang/live2d-widget")}),document.querySelector("#waifu-tool .fa-times").addEventListener("click",()=>{localStorage.setItem("waifu-display",Date.now()),u("愿你有一天能与重要的人重逢。",2e3,11),document.getElementById("waifu").style.bottom="-500px",setTimeout(()=>{document.getElementById("waifu").style.display="none",document.getElementById("waifu-toggle").classList.add("waifu-toggle-active")},3e3)});var e=()=>{};console.log("%c",e),e.toString=(()=>{u("哈哈，你打开了控制台，是想要看看我的小秘密吗？",6e3,9)}),window.addEventListener("copy",()=>{u("你都复制了些什么呀，转载要记得加上出处哦！",6e3,9)}),window.addEventListener("visibilitychange",()=>{document.hidden||u("哇，你终于回来了～",6e3,9)})}(),function(){var e;if("/"===location.pathname){var t=(new Date).getHours();e=t>5&&t<=7?"早上好！一日之计在于晨，美好的一天就要开始了。":t>7&&t<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":t>11&&t<=13?"中午了，工作了一个上午，现在是午餐时间！":t>13&&t<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":t>17&&t<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～":t>19&&t<=21?"晚上好，今天过得怎么样？":t>21&&t<=23?["已经这么晚了呀，早点休息吧，晚安～","深夜时要爱护眼睛呀！"]:"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？"}else if(""!==document.referrer){var a=new URL(document.referrer),i=a.hostname.split(".")[1];e=location.hostname==a.hostname?`欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`:"baidu"==i?`Hello！来自 百度搜索 的朋友<br>你是搜索 <span>${a.search.split("&wd=")[1].split("&")[0]}</span> 找到的我吗？`:"so"==i?`Hello！来自 360搜索 的朋友<br>你是搜索 <span>${a.search.split("&q=")[1].split("&")[0]}</span> 找到的我吗？`:"google"==i?`Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`:`Hello！来自 <span>${a.hostname}</span> 的朋友`}else e=`欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;u(e,7e3,8)}();var l,d,r=!1,c=["好久不见，日子过得好快呢……","大坏蛋！你都多久没理人家了呀，嘤嘤嘤～","嗨～快来逗我玩吧！","拿小拳拳锤你胸口！","记得把小家加入 Adblock 白名单哦！"];function m(){fetch("https://v1.hitokoto.cn").then(e=>e.json()).then(e=>{var t=`这句一言来自 <span>「${e.from}」</span>，是 <span>${e.creator}</span> 在 hitokoto.cn 投稿的。`;u(e.hitokoto,6e3,9),setTimeout(()=>{u(t,4e3,9)},6e3)})}function u(e,t,a){if(e&&(!sessionStorage.getItem("waifu-text")||sessionStorage.getItem("waifu-text")<=a)){d&&(clearTimeout(d),d=null),e=s(e),sessionStorage.setItem("waifu-text",a);var i=document.getElementById("waifu-tips");i.innerHTML=e,i.classList.add("waifu-tips-active"),d=setTimeout(()=>{sessionStorage.removeItem("waifu-text"),i.classList.remove("waifu-tips-active")},t)}}async function f(){let e=await fetch(`${n}model_list.json`),a=await e.json();t=a}async function g(e,a,l){if(localStorage.setItem("modelId",e),localStorage.setItem("modelTexturesId",a),u(l,4e3,10),o){t||await f();let a=s(t.models[e]);loadlive2d("live2d",`${n}model/${a}/index.json`)}else loadlive2d("live2d",`${i}get/?id=${e}-${a}`),console.log(`Live2D 模型 ${e}-${a} 加载完成`)}async function p(){var e=localStorage.getItem("modelId"),a=localStorage.getItem("modelTexturesId");if(o){t||await f();let a=s(t.models[e]);loadlive2d("live2d",`${n}model/${a}/index.json`),u("我的新衣服好看嘛？",4e3,10)}else fetch(`${i}rand_textures/?id=${e}-${a}`).then(e=>e.json()).then(t=>{1!=t.textures.id||1!=a&&0!=a?g(e,t.textures.id,"我的新衣服好看嘛？"):u("我还没有其他衣服呢！",4e3,10)})}async function v(){var e=localStorage.getItem("modelId");if(o){t||await f();let a=++e>=t.models.length?0:e;g(a,0,t.messages[a])}else fetch(`${i}switch/?id=${e}`).then(e=>e.json()).then(e=>{g(e.model.id,0,e.model.message)})}window.addEventListener("mousemove",()=>r=!0),window.addEventListener("keydown",()=>r=!0),setInterval(()=>{r?(r=!1,clearInterval(l),l=null):l||(l=setInterval(()=>{u(s(c),6e3,9)},2e4))},1e3),function(){var e=localStorage.getItem("modelId"),t=localStorage.getItem("modelTexturesId");if(null==e)e=1,t=53;g(e,t),fetch(a).then(e=>e.json()).then(e=>{e.mouseover.forEach(e=>{window.addEventListener("mouseover",t=>{if(t.target.matches(e.selector)){var a=s(e.text);u(a=a.replace("{text}",t.target.innerText),4e3,8)}})}),e.click.forEach(e=>{window.addEventListener("click",t=>{if(t.target.matches(e.selector)){var a=s(e.text);u(a=a.replace("{text}",t.target.innerText),4e3,8)}})}),e.seasons.forEach(e=>{var t=new Date,a=e.date.split("-")[0],i=e.date.split("-")[1]||a;if(a.split("/")[0]<=t.getMonth()+1&&t.getMonth()+1<=i.split("/")[0]&&a.split("/")[1]<=t.getDate()&&t.getDate()<=i.split("/")[1]){var n=s(e.text);n=n.replace("{year}",t.getFullYear()),c.push(n)}})})}()}function initWidget(e,t="/"){"string"==typeof e&&(e={waifuPath:e,apiPath:t}),document.body.insertAdjacentHTML("beforeend",'<div id="waifu-toggle">\n\t\t\t<span>看板娘</span>\n\t\t</div>');var a=document.getElementById("waifu-toggle");a.addEventListener("click",()=>{a.classList.remove("waifu-toggle-active"),a.getAttribute("first-time")?(loadWidget(e),a.removeAttribute("first-time")):(localStorage.removeItem("waifu-display"),document.getElementById("waifu").style.display="",setTimeout(()=>{document.getElementById("waifu").style.bottom=0},0))}),localStorage.getItem("waifu-display")&&Date.now()-localStorage.getItem("waifu-display")<=864e5?(a.setAttribute("first-time",!0),setTimeout(()=>{a.classList.add("waifu-toggle-active")},0)):loadWidget(e)}