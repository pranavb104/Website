
startList = function() {
	var sfEls = document.getElementById("over").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			//first remove all existing classes of .over
			for (var j=0; j<sfEls.length; j++){
				sfEls[j].className=sfEls[j].className.replace(new RegExp(" over\\b"), "");
			}
				this.className+=" over";
				
		}
	}
}
// addLoadEvent 
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(startList);