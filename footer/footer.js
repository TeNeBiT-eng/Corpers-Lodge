const Open= document.querySelector('.Open')
const dropCont = document.querySelector('.drop-cont')
const Close = document.querySelector('.Close')
const blurOverlay =document.querySelector('.blur_overlay')
const IS_ACTIVE = 'is--active'


const toggleNavigation = () =>{
    dropCont.classList.toggle(IS_ACTIVE)
    blurOverlay.classList.toggle(IS_ACTIVE)
}

const click ='click'

Open.addEventListener(click , toggleNavigation)
Close.addEventListener(click , toggleNavigation)
blurOverlay.addEventListener(click , toggleNavigation)  