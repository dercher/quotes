// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();

putNewQuote(false);



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
      var el = document.createElement('div');
      el.classList.add('unit');
      el.innerHTML = units[i];
      document.getElementsByTagName('h3')[0].appendChild(el);
      el.style.top = '-100px';
      el.style.left = '50%';
    } 
         replaceElems(bool);   
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
	  for (var i = 0; i < units.length; i++) {
	  	units[i].style.top = '-70%';
	  	left += 170;
      units[i].style.left = left + 'px';
	  }
  if(bool) {
  	 left = 400, width = 0;
      var timer = setTimeout(function() {
      	for (var i = 0; i < units.length; i++) {
      		left += ( width + 10 );
      		units[i].style.top = '50%';
      		units[i].style.left = left + 'px';
      		var computedStyle = getComputedStyle(units[i]); 
          width = computedStyle.width;
          width = Number(width.substr(0, width.length - 2));
      	}
      }, 1);

  }
}
 
