'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClousemodel = document.querySelector('.close-modal');
const btnsOpenmodel = document.querySelectorAll('.show-modal');
console.log(btnsOpenmodel);

 const openmodal=function(){
 modal.classList.remove('hidden');
 overlay.classList.remove('hidden');
 }


 const closmodal = function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
 };
 
for (let i = 0; i < btnsOpenmodel.length; i++)
  btnsOpenmodel[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
 
  btnClousemodel.addEventListener('click',closmodal);
  overlay.addEventListener('click', closmodal);

  document.addEventListener('keydown',function(e){
    console.log('key was prsesd');
    console.log(e.key)
    if(e.key==='Escape'){
        if(!modal.classList.contains('hidden')){
            closmodal();
        }
    }
  })
