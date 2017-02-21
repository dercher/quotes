// document.createElement();getElementById();getElementsByTagName();getElementsByName();getElementsByClassName();querySelector();querySelectorAll();el.classList.add();el.innerHTML = "";e.style.background = '';el.appendChild();setInterval();setTimeout();clearInterval();

putNewQuote();



//=============== ALL FUNCTIONS ============
  function setRandom(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //----------
  function putNewQuote() {
    var random = setRandom(0, 36);
    var length  = quotes[random][0].length;
    console.log(length);
  	var h3 = document.querySelector('h3');
  	var h5 = document.querySelector('h5');
  	h3.innerHTML = quotes[random][0];
  	h5.innerHTML = quotes[random][1];
  }