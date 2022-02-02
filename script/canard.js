var vitesse = 27;
var canard = document.querySelector('#canard');

canard.style.top = '0px';
canard.style.left = '0px';

document.addEventListener('keydown', function(event) {

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
//---------------------------------//
var duck= document.querySelector('#canard');
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

//---------------------------------//
  

 function compteur(event) {
  console.log(event);
  
 
}
document.addEventListener('keydown', compteur);

setTimeout(function() {

document.removeEventListener('keydown', compteur);
}, 120000);