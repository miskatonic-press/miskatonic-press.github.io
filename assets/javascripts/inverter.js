function inverter(){var e=document.body,t=document.getElementById("contrast"),n=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},i=function(e,t){n(e,t)||(e.className+=" "+t)},r=function(e,t){var i=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(n(e,t)){for(;i.indexOf(" "+t+" ")>=0;)i=i.replace(" "+t+" "," ");e.className=i.replace(/^\s+|\s+$/g,"")}};t.addEventListener("click",function(){n(e,"inverted")?(r(e,"inverted"),docCookies.removeItem("miskatonic-inverted")):(i(e,"inverted"),docCookies.setItem("miskatonic-inverted"))});var c=docCookies.getItem("miskatonic-inverted");c&&i(e,"inverted")}inverter();