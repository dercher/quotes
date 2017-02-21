// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();

// putNewQuote(false);
putNewQuote(true)



//=============== ALL FUNCTIONS ============
  function setRandom(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //----------
  function putNewQuote(bool) {
    var random = setRandom(0, 36);
    var units = quotes[random][0].split(" ");
    if (bool) delAll();
    for (var i = 0; i < units.length; i++) {
    	createElem('unit', units[i], document.getElementsByTagName('h3')[0])
    } 
      createElem('author', quotes[random][1], document.getElementsByTagName('h3')[0])
      replaceElems(bool);   
}
//--------------------
function createElem(Class, text, parent) {
  var el = document.createElement('div');
   el.classList.add(Class); 
   el.innerHTML = text;
   parent.appendChild(el);
   el.style.top = '-100px';
   el.style.left = '50%';
}
 //------------------
function delAll() {
  while (document.querySelector('h3').hasChildNodes()) {
    document.querySelector('h3').removeChild( document.querySelector('h3').firstChild );
  }
}
//---------------
function replaceElems(bool) {
	  var left = -300;
	  var units = document.querySelectorAll('.unit');
	  var author = document.querySelectorAll('.author')[0];
	  author.style.top = '-300px';
	  for (var i = 0; i < units.length; i++) {
	  	units[i].style.top = '-300px';
	  	left += 170;
      units[i].style.left = left + 'px';
	  }
  if(bool) {
    animateElems(units, author);
  }
}
function animateElems(units, author) {
	  	var left = 0, top1 = 0, width = 0, all = 0;
      var timer = setTimeout(function() {
      var computedH3 = getComputedStyle(document.getElementsByTagName('h3')[0]); 
      var h3Width = computedH3.width;
      h3Width = Number(h3Width.substr(0, h3Width.length - 2));
      	for (var i = 0; i < units.length; i++) {
      		if ( all >= h3Width - 70 ) {
      		  left = 0, all = 0, width = 0, top1 += 30;
      		}
    		units[i].style.top = top1 + 'px';
    		left += ( width + 10 );
    		units[i].style.left = left + 'px';   		
    		var computedStyle = getComputedStyle(units[i]); 
        width = computedStyle.width;
        width = Number(width.substr(0, width.length - 2));
        all += width;
      	}
      	author.style.top = (top1 + 30) + 'px';
      }, 1);
}
 
