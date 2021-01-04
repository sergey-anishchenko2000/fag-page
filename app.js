const faqItems = document.getElementsByClassName('faq-list');
let faqIndex ;
for (let faqItem  of faqItems) {
    faqItem.addEventListener("click" , () => {
        faqItem.getElementsByClassName('faq-question')[0].classList.toggle('faq-question-active')
        faqItem.getElementsByClassName('faq-answer')[0].classList.toggle('faq-answer-active')
        faqItem.getElementsByTagName("img")[0].classList.toggle('faq-arrow-active')
    })
    faqItem.addEventListener("mouseover" , () => {
        document.getElementsByClassName('img-box')[0].classList.add('img-box-active')
       
    })
    faqItem.addEventListener("mouseout" , () => {
        document.getElementsByClassName('img-box')[0].classList.remove('img-box-active')
    })
};
