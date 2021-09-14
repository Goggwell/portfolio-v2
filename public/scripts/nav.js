export default function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    const navButton = document.getElementById("navButton");
    const navButtonHam = document.getElementById("navButtonHam");
    const navButtonHamInner = document.getElementById("navButtonHamInner");
    const navContent = document.getElementById("navContent");
    const navContentButton = document.getElementById("navContentButton");
    const bodyBlur = document.getElementById("body");

    navButton.addEventListener("click", () => {
        navButton.classList.toggle("navigation__menu__button");
        navButton.classList.toggle("navigation__menu__button--open");

        navButtonHam.classList.toggle("navigation__menu__button--ham");
        navButtonHam.classList.toggle("navigation__menu__button--open--ham");
    
        navButtonHamInner.classList.toggle("navigation__menu__button--ham--inner");
        navButtonHamInner.classList.toggle("navigation__menu__button--open--ham--inner");
    
        navContent.classList.toggle("navigation__menu__content");
        navContent.classList.toggle("navigation__menu__content--open");
    
        navContentButton.classList.toggle("navigation__menu__content__button");
        navContentButton.classList.toggle("navigation__menu__content--open__button");
    
        bodyBlur.classList.toggle("blur");
    })

    document.addEventListener("click", (e) => {
        if(e.target !== navMenu && !navMenu.contains(e.target)) {
            navButton.classList.add("navigation__menu__button");
            navButton.classList.remove("navigation__menu__button--open");

            navButtonHam.classList.add("navigation__menu__button--ham");
            navButtonHam.classList.remove("navigation__menu__button--open--ham");
            
            navButtonHamInner.classList.add("navigation__menu__button--ham--inner");
            navButtonHamInner.classList.remove("navigation__menu__button--open--ham--inner");

            navContent.classList.add("navigation__menu__content");
            navContent.classList.remove("navigation__menu__content--open");

            navContentButton.classList.add("navigation__menu__content__button");
            navContentButton.classList.remove("navigation__menu__content--open__button");

            bodyBlur.classList.remove("blur");
        }
    }, true);

    document.addEventListener("touchstart", (evt) => {
        if(evt.target !== navMenu && !navMenu.contains(evt.target)) {
            navButton.classList.add("navigation__menu__button");
            navButton.classList.remove("navigation__menu__button--open");

            navButtonHam.classList.add("navigation__menu__button--ham");
            navButtonHam.classList.remove("navigation__menu__button--open--ham");
            
            navButtonHamInner.classList.add("navigation__menu__button--ham--inner");
            navButtonHamInner.classList.remove("navigation__menu__button--open--ham--inner");

            navContent.classList.add("navigation__menu__content");
            navContent.classList.remove("navigation__menu__content--open");

            navContentButton.classList.add("navigation__menu__content__button");
            navContentButton.classList.remove("navigation__menu__content--open__button");

            bodyBlur.classList.remove("blur");
        }
    }, true);
}