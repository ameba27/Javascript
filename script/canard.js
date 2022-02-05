//-----------Déplacement du canard---------//

var canard = document.querySelector('#canard');
btnNew = document.querySelector('#button');
var vitesse = 27;

canard.style.top = '0px';
canard.style.left = '0px';

document.addEventListener('keydown', function movingDuck(event) {

  var top = parseInt(canard.style.top);
  var left = parseInt(canard.style.left);

  if(event.key == 'ArrowRight') {
    left = left + vitesse;
    if(left >= 1200) {
      left = 1200;
    }
  }

  if(event.key == 'ArrowLeft') {
    left = left - vitesse;
    if(left <= 0) {
      left = 0;
    }
  }

  if(event.key == 'ArrowUp') {
    top = top - vitesse;
    if(top <= 0) {
      top = 0;
    }
  }

  if(event.key == 'ArrowDown') {
    top = top + vitesse;
    if(top >= 500) {
        top = 500;
    }
  }
  
    canard.style.top = top + 'px';
    canard.style.left = left + 'px';
   
  
});
//---------------Le timer-----------------//

var time= document.querySelector('#temps');
function compter() {
  var faire = 0;
  return setInterval(function() {
    faire++;
    time.innerHTML = faire;
    console.log(faire);
  }, 1000);
}
var compte = compter();

setTimeout(function() {
  
  clearInterval(compte);
  
},120000)

//----------------Retour(du canard) au point de départ----------------//


 function movingDuck(event) {
  console.log(event);
  document.addEventListener('keydown', movingDuck);
  
}


setTimeout(function() {
  canard.style.top =0 + 'px';
  canard.style.left = 0 + 'px';
  document.removeEventListener('keydown', movingDuck );

}, 120000);

//-------------------Score du Chasseur------------------//
var cible = document.querySelector('#canard'); 
var chasseur= document.querySelector('#chasseur');
 var nombre= 0; 
 function cliquer(){
   updateDisplay(++nombre);
 }
 function updateDisplay(val){
   chasseur.innerHTML = val;
 }

 //------------------Score du Canard----------------------//
 var decompt = document.querySelector('#canar');
 
function scoreCanard() {
  var score = 0;
  return setInterval(function(){
    score++;
    decompt.innerHTML = score;
  }, 10000);
}
var scoreC = scoreCanard(); 
setTimeout(function() {
  clearInterval(scoreC);
}, 120000);

//-------Le bouton de réinitialisation-----//

btnNew.addEventListener('click', function() {
  canard.style.top =0 + 'px';
  canard.style.left = 0 + 'px';

  var ptCanard = scoreCanard();
  var timer = compter();
  timer = 0;
  ptCanard = 0;

   document.addEventListener('keydown', movingDuck );
  duck.addEventListener('click', cliquer);

  setTimeout(function(){
  document.removeEventListener('keydown', movingDuck );
  canard.removeEventListener('click', cliquer)
 
  }, 120000);
});
