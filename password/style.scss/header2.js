const toggleBar= document.querySelector('.toggle-bar')
const headerToggle = document.querySelector('.header-toggle')
const closeMenu = document.querySelector('.close-menu')
const blurOverlay =document.querySelector('.blur_overlay')
const IS_ACTIVE = 'is--active'


const toggleNavigation = () =>{
    headerToggle.classList.toggle(IS_ACTIVE)
    blurOverlay.classList.toggle(IS_ACTIVE)
}

const click ='click'

toggleBar.addEventListener(click , toggleNavigation)
closeMenu.addEventListener(click , toggleNavigation)
blurOverlay.addEventListener(click , toggleNavigation)  