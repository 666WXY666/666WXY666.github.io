const live2d_path="/live2d/";function loadExternalResource(e,n){return new Promise((i,t)=>{let s;"css"===n?((s=document.createElement("link")).rel="stylesheet",s.href=e):"js"===n&&((s=document.createElement("script")).src=e),s&&(s.onload=(()=>i(e)),s.onerror=(()=>t(e)),document.head.appendChild(s))})}screen.width>=768&&Promise.all([loadExternalResource("/live2d/waifu.css","css"),loadExternalResource("/live2d/live2d.min.js","js"),loadExternalResource("/live2d/waifu-tips.js","js")]).then(()=>{initWidget({waifuPath:"/live2d/waifu-tips.json",apiPath:"https://live2d.fghrsh.net/api/"})}),console.log("\n  く__,.ヘヽ.        /  ,ー､ 〉\n           ＼ ', !-─‐-i  /  /´\n           ／｀ｰ'       L/／｀ヽ､\n         /   ／,   /|   ,   ,       ',\n       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i\n        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |\n          !,/7 '0'     ´0iソ|    |\n          |.从\"    _     ,,,, / |./    |\n          ﾚ'| i＞.､,,__  _,.イ /   .i   |\n            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |\n              | |/i 〈|/   i  ,.ﾍ |  i  |\n             .|/ /  ｉ：    ﾍ!    ＼  |\n              kヽ>､ﾊ    _,.ﾍ､    /､!\n              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'\n              ﾚ'ヽL__|___i,___,ンﾚ|ノ\n                  ﾄ-,/  |___./\n                  'ｰ'    !_,.:\n");