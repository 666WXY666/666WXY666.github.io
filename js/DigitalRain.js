window.onload=function(){var t=document.getElementById("canvas"),a=t.getContext("2d"),e=window.screen,n=t.width=e.width,o=t.height;t.width=n,t.height=o;for(var r=12,h=Math.floor(n/r),l=[],i=0;i<h;i++)l.push(0);var d="WELCOME TO MY BLOG";function C(){a.fillStyle="rgba(238,238,238,.08)",a.fillRect(0,0,n,o),a.font="600 "+r+"px  Georgia",a.fillStyle=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"][parseInt(10*Math.random())];for(var e=0;e<h;e++){var i=Math.floor(Math.random()*d.length),C=e*r,f=l[e]*r;a.fillText(d[i],C,f),f>=t.height&&Math.random()>.99&&(l[e]=0),l[e]++}}C(),setInterval(C,35)};