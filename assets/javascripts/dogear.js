function init(){goToDogear(),setPilcrows()}function setPilcrows(){$("p").each(function(o){o>0&&$(this).before('<a href="#" id="'+(o+1)+'" data-section="'+(o+1)+'" class="counter">&para; '+(o+1)+"</a> ")});for(var o=document.getElementsByClassName("counter"),e=0;e<o.length;e++){var t=o[e];t.addEventListener("click",dogear,!1)}isActivePilcrow()}function isActivePilcrow(){var o=docCookies.getItem("bookmark");if(console.log("bookmark "+o),null!==o){var e=o.indexOf("#"),t=o.substring(e+"#".length);o.substring(0,e);var n=o.substring(o.lastIndexOf("/")+1,o.lastIndexOf("#"));setActivePilcrow(t,n)}}function setActivePilcrow(o,e){var t=window.location.href,n=t.substring(t.lastIndexOf("/")+1,t.lastIndexOf("#"));if(console.log("chapter from bookmark: "+e),console.log("current url: "+t),console.log("section from dogear: "+o),console.log("current chapter: "+n),e==n){var a=document.getElementById(o);console.log(a),a.setAttribute("class","counter active")}}function goToDogear(){checkIndex()&&loadDogear()}function checkIndex(){var o="http://localhost:4567/",e=window.location.href==o;return e?!0:!1}function loadDogear(){var o=docCookies.getItem("bookmark");o&&window.location.assign(o)}function clearDogear(){console.log("clear dogear"),docCookies.removeItem("bookmark");var o=docCookies.getItem("bookmark");console.log(o)}function dogear(o){o.preventDefault();var e=o.target,t=e.dataset.section,n=location.pathname+"#"+t,a=e.classList.contains("active");if(clearDogear(),a)e.setAttribute("class","counter");else{for(var c=document.getElementsByClassName("active"),r=0;r<c.length;r++)c[r].setAttribute("class","counter");e.setAttribute("class","counter active"),docCookies.setItem("bookmark",n),console.log("latest dogear: "+n)}}$(document).ready(function(){init()});