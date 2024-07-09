import '../scss/style.scss'
import './swiper'

var btnMenu = document.querySelector('.header__li-burger')
var btnBack = document.querySelector('.nav__header-content-back')
var nav = document.querySelector('.nav')
var main = document.querySelector('.main')

var btnRead = document.querySelector('.sectiona__text-div')
var text = document.querySelector('.sectiona__text-p-hid')

var tenib = document.querySelector('.sectionb__teni')
var strelkaf = document.querySelector('.sectionf__img')

btnMenu.addEventListener('click', function() {
    nav.style = 'left: 0'
    main.style = 'display: none'
})

btnBack.addEventListener('click', function() {
    nav.style = 'left: -100%'
    main.style = 'display: block'
})

btnRead.addEventListener('click', function() {
    text.style = 'display: block'
    btnRead.style = 'display: none'
    tenib.style = 'top: 793px'
    strelkaf.style = 'top: 1704px'
})
