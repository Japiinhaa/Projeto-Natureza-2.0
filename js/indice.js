const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        if (faq.classList.contains("active")) {
            faq.classList.remove("active");
        } else {
            faqs.forEach(otherFaq => otherFaq.classList.remove("active"));
            faq.classList.add("active");
        }
    });
});

const imagens = document.querySelectorAll('.js-list li')
const textos = document.querySelectorAll('.js-content section')

console.log(imagens)
console.log(textos)

function ativarConteudo (indice){
    textos.forEach((item) => {
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item, indice) =>{
    item.addEventListener('click',() =>{
        ativarConteudo(indice)
    })
})

export default function menuMobileInit() {
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-list');

    if (toggle && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const toggleIcon = toggle.querySelector('span');
            toggleIcon.classList.toggle('active');
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        toggle.addEventListener('click', toggleMenu);
    }
}

import accordionInit from "./modules/accordion.js";
import tabMenuInit from "./modules/tabmenu.js";
import menuMobileInit from "./modules/menuMobile.js";
import { Modal } from "./modules/modal.js";

tabMenuInit()
accordionInit()
menuMobileInit()

new Modal('.js-modal', 
'.modal-close', 
'.modal-forms').init();