const slider=document.querySelector("#slider");
let sliderSection=document.querySelectorAll(".slider__section");
let sliderSectionLast=sliderSection[sliderSection.length-1];
let tituloSlider=document.getElementById('titulo-popupSli');
let parrafoSlider=document.getElementById('parrafo-popupSli');
const btnLeft=document.querySelector("#btn-left");
const btnRight=document.querySelector("#btn-right");
var titulo=["Titulo 1 Manzana","Titulo 2 Universidad","Titulo 3 Ing. Sistemas","Titulo 4 Otros"]
var descripcion=["la manzana es rica","Estudio de 5 años con laboratorios","Diseño web responsive","salones amplios"]
slider.insertAdjacentElement('afterbegin',sliderSectionLast);

var i=-1;
function Next(){
    let sliderSectionFirst=document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all 1s";
    setTimeout(function(){
        slider.style.transition="none";
        i++;
        if(titulo.length<=i){
            i=0;
        }
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        tituloSlider.innerHTML=titulo[i];
        parrafoSlider.innerHTML=descripcion[i];
        
        
        slider.style.marginLeft="-100%";
        
    },1000);
}

function Prev(){
    let sliderSection=document.querySelectorAll(".slider__section");
    let sliderSectionLast=sliderSection[sliderSection.length-1];
    slider.style.marginLeft="0%";
    slider.style.transition="all 1s";
    setTimeout(function(){
        i--;
        if(i<0){
            i=titulo.length-1;
        } 
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        tituloSlider.innerHTML=titulo[i];
        parrafoSlider.innerHTML=descripcion[i];
        
           
        slider.style.marginLeft="-100%";
    },1000);
    
}

btnRight.addEventListener('click',function(){
    Next();
    timer.reset(5000);
})
btnLeft.addEventListener('click',function(){
    Prev();
    timer.reset(5000);
})
function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new or original interval, stop current interval
    this.reset = function(newT = t) {
        t = newT;
        return this.stop().start();
    }
}
var timer;