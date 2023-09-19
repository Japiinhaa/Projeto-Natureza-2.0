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

function ativarcontent(indice) {
    textos[indice].classList.add('active')
}

imagens.forEach(() => {
    item.addEventListener('click', () => {
        ativarcontent(indice)
    })
})

