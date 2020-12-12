// Burger code--------------------------------
const burger_content = document.querySelector('.burger_content');
const social = document.querySelector('.social');
const logo = document.querySelector('.logo');
const burger = document.querySelector('.burger');
const burger2 = document.querySelector('.burger2');
const section = document.querySelector('.slideshow-container');
const navbar_list = document.querySelector('.navbar_list');
const navbar = document.getElementById('navbar');

burger.addEventListener('click',show);
burger2.addEventListener('click',close);

function show(){
  navbar_list.style.filter = 'blur(3px)';
  section.style.filter = 'blur(3px)';
  burger_content.style.display = 'block';
}

function close(){
  burger_content.style.display = 'none';
  section.style.filter = 'blur(0px)';
  navbar_list.style.filter = 'blur(0px)';
}


// NavBar Carousel ------------------------------------->>>>>>>>>>>>>
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  burger_content.style.display = 'none';
  section.style.filter = 'blur(0px)';
  navbar_list.style.filter = 'blur(0px)';
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var list = document.getElementsByClassName("nav_list");
  var burger_active = document.getElementsByClassName("burger_active");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      list[i].className = list[i].className.replace(" nav", "");
      burger_active[i].className = burger_active[i].className.replace(" burger_hold", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  list[slideIndex-1].className += " nav";
  burger_active[slideIndex-1].className += " burger_hold";
}


// TypeWriter script ===================>>>>>>>>>>>>>>>>>>>>
var typewriter = function(txt) {
  var container = document.getElementById('typewriter'),
    speed = 28,
    i = 0,
    wordsObj = txt.split(" ")
  container.textContent = "";
  console.log(txt)
  runAllWords();
  function runAllWords() {

    if (i < wordsObj.length) {
      var a = (i == 0) ? i : i - 1;
      setTimeout(function() {
        showWord(wordsObj[i], 0)
      }, wordsObj[a].length * speed);
    }
  }

  function showWord(word, countWord) {
    if (countWord < word.length) {
      setTimeout(function() {
        showLetter(word, countWord)
      }, speed);
    } else {
      container.textContent = container.textContent + " ";
      i += 1;
      runAllWords();
    }
    if (i === wordsObj.length) {
      console.log('complete')
    }
  }

  function showLetter(word, countWord) {
    container.textContent = container.textContent + word[countWord];
    showWord(word, countWord + 1);
  }
}
// window.onload = typewriter();
// var container = document.getElementById('typewriter'),
//   dataText = container.dataset.typewriter,
//   splitTxt = dataText.split(",")
// for (var x = 0, ln = splitTxt.length; x < ln; x++) {
//   setTimeout(typewriter(splitTxt[x]), x * 9000, x);
// }


var i = 0;
function myLoop () {  
//  create a loop function

 var dataType = document.getElementById('typewriter').dataset.typewriter,
     w = dataType.split(',')
 setTimeout(function () {    //  call a 3s setTimeout when the loop is called
    typewriter(w[i]);          //  your code here
    i++;                     //  increment the counter
    if (i < w.length) {            //  if the counter < 10, call the loop function
       myLoop();             //  ..  again which will trigger another 
    }                        //  ..  setTimeout()
 }, 3000)
}

myLoop();


// Service Carousel ------------------------------------->>>>>>>>>>>>>
var Index = 1;
Slides(Index);

// Next/previous controls
function Slides(n) {
  Slides(Index += n);
}

// Thumbnail box controls
function Slide(n) {
  Slides(Index = n);
}

function Slides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("service_dot");
  if (n > slides.length) {Index = 1}
  if (n < 1) {Index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[Index-1].style.display = "flex";
  dots[Index-1].className += " active";
}



// Blog Carousel ------------------------------------->>>>>>>>>>>>>
var blog_slideIndex = 1;
blog_showSlides(blog_slideIndex);

// Next/previous controls
function plusSlides(n) {
  blog_showSlides(blog_slideIndex += n);
}

// Thumbnail image controls
function blog_currentSlide(n) {
  blog_showSlides(blog_slideIndex = n);
}

function blog_showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("blog_slides");
  var dots = document.getElementsByClassName("blog_dot");
  if (n > slides.length) {blog_slideIndex = 1}
  if (n < 1) {blog_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[blog_slideIndex-1].style.display = "flex";
  dots[blog_slideIndex-1].className += " active";
}


// client Carousel ------------------------------------->>>>>>>>>>>>>
var client_slideIndex = 1;
client_showSlides(client_slideIndex);

// Next/previous controls
function plusSlides(n) {
  client_showSlides(client_slideIndex += n);
}

// Thumbnail image controls
function client_currentSlide(n) {
  client_showSlides(client_slideIndex = n);
}

function client_showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("client_slides");
  var dots = document.getElementsByClassName("client_dot");
  if (n > slides.length) {client_slideIndex = 1}
  if (n < 1) {client_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[client_slideIndex-1].style.display = "block";
  dots[client_slideIndex-1].className += " active";
}



// partner Carousel ------------------------------------->>>>>>>>>>>>>
var partner_slideIndex = 1;
partner_showSlides(partner_slideIndex);

// Next/previous controls
function plusSlides(n) {
  partner_showSlides(partner_slideIndex += n);
}

// Thumbnail image controls
function partner_currentSlide(n) {
  partner_showSlides(partner_slideIndex = n);
}

function partner_showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("partner_slides");
  var dots = document.getElementsByClassName("partner_dot");
  if (n > slides.length) {partner_slideIndex = 1}
  if (n < 1) {partner_slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[partner_slideIndex-1].style.display = "block";
  dots[partner_slideIndex-1].className += " active";
}



// snow fall------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// snow fall------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// snow fall------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// snow fall------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
 // Array to store our Snowflake objects
 var snowflakes = [];

 // Global variables to store our browser's window size
 var browserWidth;
 var browserHeight;

 // Specify the number of snowflakes you want visible
 var numberOfSnowflakes = 50;

 // Flag to reset the position of the snowflakes
 var resetPosition = false;

 // Handle accessibility
 var enableAnimations = false;
 var reduceMotionQuery = matchMedia("(prefers-reduced-motion)");

 // Handle animation accessibility preferences 
 function setAccessibilityState() {
   if (reduceMotionQuery.matches) {
     enableAnimations = false;
   } else { 
     enableAnimations = true;
   }
 }
 setAccessibilityState();

 reduceMotionQuery.addListener(setAccessibilityState);

 //
 // It all starts here...
 //
 function setup() {
   if (enableAnimations) {
     window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
     window.addEventListener("resize", setResetFlag, false);
   }
 }
 setup();

 //
 // Constructor for our Snowflake object
 //
 function Snowflake(element, speed, xPos, yPos) {
   // set initial snowflake properties
   this.element = element;
   this.speed = speed;
   this.xPos = xPos;
   this.yPos = yPos;
   this.scale = 1;

   // declare variables used for snowflake's motion
   this.counter = 0;
   this.sign = Math.random() < 0.5 ? 1 : -1;

   // setting an initial opacity and size for our snowflake
   this.element.style.opacity = (.1 + Math.random()) / 3;
 }

 //
 // The function responsible for actually moving our snowflake
 //
 Snowflake.prototype.update = function () {
   // using some trigonometry to determine our x and y position
   this.counter += this.speed / 5000;
   this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
   this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;
   this.scale = .5 + Math.abs(10 * Math.cos(this.counter) / 20);

   // setting our snowflake's position
   setTransform(Math.round(this.xPos), Math.round(this.yPos), this.scale, this.element);

   // if snowflake goes below the browser window, move it back to the top
   if (this.yPos > browserHeight) {
     this.yPos = -50;
   }
 }

 //
 // A performant way to set your snowflake's position and size
 //
 function setTransform(xPos, yPos, scale, el) {
   el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale})`;
 }

 //
 // The function responsible for creating the snowflake
 //
 function generateSnowflakes() {

   // get our snowflake element from the DOM and store it
   var originalSnowflake = document.querySelector(".snowflake");

   // access our snowflake element's parent container
   var snowflakeContainer = originalSnowflake.parentNode;
   snowflakeContainer.style.display = "block";

   // get our browser's size
   browserWidth = document.documentElement.clientWidth;
   browserHeight = document.documentElement.clientHeight;

   // create each individual snowflake
   for (var i = 0; i < numberOfSnowflakes; i++) {

     // clone our original snowflake and add it to snowflakeContainer
     var snowflakeClone = originalSnowflake.cloneNode(true);
     snowflakeContainer.appendChild(snowflakeClone);

     // set our snowflake's initial position and related properties
     var initialXPos = getPosition(50, browserWidth);
     var initialYPos = getPosition(50, browserHeight);
     var speed = 5 + Math.random() * 40;

     // create our Snowflake object
     var snowflakeObject = new Snowflake(snowflakeClone,
       speed,
       initialXPos,
       initialYPos);
     snowflakes.push(snowflakeObject);
   }

   // remove the original snowflake because we no longer need it visible
   snowflakeContainer.removeChild(originalSnowflake);

   moveSnowflakes();
 }

 //
 // Responsible for moving each snowflake by calling its update function
 //
 function moveSnowflakes() {

   if (enableAnimations) {
     for (var i = 0; i < snowflakes.length; i++) {
       var snowflake = snowflakes[i];
       snowflake.update();
     }      
   }

   // Reset the position of all the snowflakes to a new value
   if (resetPosition) {
     browserWidth = document.documentElement.clientWidth;
     browserHeight = document.documentElement.clientHeight;

     for (var i = 0; i < snowflakes.length; i++) {
       var snowflake = snowflakes[i];

       snowflake.xPos = getPosition(50, browserWidth);
       snowflake.yPos = getPosition(50, browserHeight);
     }

     resetPosition = false;
   }

   requestAnimationFrame(moveSnowflakes);
 }

 //
 // This function returns a number between (maximum - offset) and (maximum + offset)
 //
 function getPosition(offset, size) {
   return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
 }

 //
 // Trigger a reset of all the snowflakes' positions
 //
 function setResetFlag(e) {
   resetPosition = true;
 }