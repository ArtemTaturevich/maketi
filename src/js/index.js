import '../scss/style.scss'
import './swiper'

var btnMenu = document.querySelector('.header__li-burger')
var btnBack = document.querySelector('.nav__header-content-back')
var nav = document.querySelector('.nav')
var back = document.querySelector('.div__white')
var main = document.querySelector('.main')

var btnRead = document.querySelector('.sectiona__text-div')
var text = document.querySelector('.sectiona__text-p-hid')

var tenib = document.querySelector('.sectionb__teni')
var strelkaf = document.querySelector('.sectionf__img')

var btnPocaz = document.querySelector('.swiper-pocaz')
var elPocazs = document.querySelectorAll('.swiper-slide-pl')
var elpocazspk = document.querySelectorAll('.swiper-slide-pka')

var btnPocazb = document.querySelector('.swiper-pocazz')
var elPocazsb = document.querySelectorAll('.swiper-slide-pla')
var elPocazpk = document.querySelectorAll('.swiper-slide-pk')

var btnMessage = document.querySelector('.nav__main-li-chat')
var nava = document.querySelector('.nava')
var navaburg = document.querySelector('.nava__header-burger')

var btnTel = document.querySelector('.nav__main-li-tel')
var navb = document.querySelector('.navb')
var navaburgb = document.querySelector('.navb__header-burger')


//nav 
btnMenu.addEventListener('click', function() {
    nav.style = 'left: 0'
    back.style = 'display: block'
})

btnBack.addEventListener('click', function() {
    nav.style = 'left: -100%'
    back.style = 'display:  none'
})

back.addEventListener('click', function() {
    nav.style = 'left: -100%'
    back.style = 'display:  none'
} )

//nava

btnMessage.addEventListener('click', function() {
    nava.style = 'display: block'
    back.style = 'display: block'
})

navaburg.addEventListener('click', function() {
    nava.style = 'display: none'
    back.style = 'display: none'
})

//navb

btnTel.addEventListener('click', function() {
    navb.style = 'display: block'
    back.style = 'display: block'
})

navaburgb.addEventListener('click', function() {
    navb.style = 'display: none'
    back.style = 'display: none'
})

//text
btnRead.addEventListener('click', function() {
    text.style = 'display: block'
    btnRead.style = 'display: none'
    tenib.style = 'top: 793px'
    strelkaf.style = 'top: 1704px'
})

//pocazb


var funcPocaz = function(el) {
    btnPocaz.addEventListener('click', function() {
        el.style = 'display: block'
        btnPocaz.style = 'display: none'
    })
}


for (var i = 0; i < elPocazs.length; i++) {
    funcPocaz(elPocazs[i])
}

for (var i = 0; i < elPocazpk.length; i++) {
    funcPocaz(elPocazpk[i])
}

//pocazc

var funcPocaz = function(el) {
    btnPocazb.addEventListener('click', function() {
        el.style = 'display: block'
        btnPocazb.style = 'display: none'
    })
}


for (var i = 0; i < elPocazsb.length; i++) {
    funcPocaz(elPocazsb[i])
}

for (var i = 0; i < elpocazspk.length; i++) {
    funcPocaz(elpocazspk[i])
}

//render 
const widthre = window.innerWidth

if (widthre > 768) {
    location.reload
}

if (widthre > 1440) {
    location.reload
}

if (widthre < 768) {
    location.reload
}