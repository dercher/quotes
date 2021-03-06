// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();

putNewQuote(true)
//=============== ALL FUNCTIONS ============
  function setRandom(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //----------
  function putNewQuote(bool, direction) {
    var random = setRandom(0, 34);
    var units = quotes[random][0].split(" ");
    if (bool) delAll();
    for (var i = 0; i < units.length; i++) {
    	createElem('unit', units[i], document.getElementsByTagName('h3')[0])
    } 
      createElem('author', quotes[random][1], document.getElementsByTagName('h3')[0])
      replaceElems(bool);
      var photo = document.querySelector('.ramka');
      //------
      if( direction == 0 ) { fadeOutScale(photo, random)} 
 else if( direction == 'right' ) {fadeOut(photo, random, ['right', 'left'])} 
 else if( direction == 'left' ) {fadeOut(photo, random, ['left', 'right'])}
 else if( direction == 'top' ) {fadeOut(photo, random, ['top', 'bottom'])} 
 else if( direction == 'bottom' ) {fadeOut(photo, random, ['bottom', 'top'])}     
}
// //--------------------
function fadeOutScale(el, random) {
    el.style.transform = 'scale(0.01)';
   setTimeout( function() {
   	el.style.background = "url('img/writers/" +quotes[random][1]+ ".jpg')";
    el.style.transform = 'scale(1)';
   }, 500);
}
//--------------------
function fadeOut(el, random, direction) {
	var dist;
	if(direction[0] == 'right' || direction[0] == 'left') {
		dist = document.body.clientWidth / 2 + 400;
	} else if(direction[0] == 'top' || direction[0] == 'bottom') {
		dist = document.body.clientHeight / 2 + 400;
	}
  setDirection(el, dist, direction[0]);   // --- for animation 

  setTimeout(function() {
    el.parentNode.removeChild(el);
    var elem = document.createElement('div');
    elem.classList.add('ramka')
    setDirection(elem, dist, direction[1]);
    elem.innerHTML = '<div></div>';
    elem.style.background = "url('img/writers/" +quotes[random][1]+ ".jpg')";
    var parent = document.getElementsByTagName('body')[0];
    var reference = document.getElementsByTagName( 'h1' )[0];
    parent.insertBefore(elem, reference);

    setTimeout(function(){
     elem.style.transform = 'translateX(0px)';
    }, 20)

  }, 500)
}
//---------------
function setDirection(el, dist, direction) {  // --- for animation
     if(direction == 'right')  {return el.style.transform = 'translateX(' +dist+ 'px)'} 
else if(direction == 'left')   {return el.style.transform = 'translateX(' +(-dist)+ 'px)'}
else if(direction == 'top')    {return el.style.transform = 'translateY('   +dist+ 'px)'}
else if(direction == 'bottom') {return el.style.transform = 'translateY(' +(-dist)+ 'px)'}   
}    
//----------------------
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
      		if ( all >= h3Width - 140 ) {
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
//===================== rotate book ==============
var rotateX = 0;
var rotateY = 20;
var rotateZ = 0;
document.querySelector('.nav__top').onclick = function() { 
    rotateBook( rotateX += 360);
    putNewQuote(true, 'bottom');
}

document.querySelector('.nav__bottom').onclick = function() {
   rotateBook(  rotateX -= 360 );
   putNewQuote(true, 'top');
}

document.querySelector('.nav__right').onclick = function() {
   rotateBook(  rotateY -= 360 );
   putNewQuote(true, 'left');
}

document.querySelector('.nav__left').onclick = function() {
   rotateBook(  rotateY += 360 );
   putNewQuote(true, 'right');
}
function rotateBook() {
	el = document.querySelector('.cube');	
	el.style.transform = 'rotateX(' +rotateX+ 'deg) rotateY(' +rotateY+ 'deg)';
}
 
