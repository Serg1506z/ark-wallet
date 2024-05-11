import { form, formElements, overlay, cards, privateBtn, sectionForm, mainBtn, containerCards, redContainer } from "./constants.js";
import { submitForm, checkInput, conditionOpenCard, transition,scrollSlide } from "./function.js";

mainBtn.addEventListener("click",() => transition(containerCards) )
privateBtn.addEventListener("click",() => transition(sectionForm))
form.addEventListener("submit", submitForm)
formElements.forEach(elem => elem.addEventListener("input", checkInput));
cards.forEach(card => card.addEventListener("click",conditionOpenCard))
overlay.addEventListener("click",(e) => {
    if(e.target.classList.contains('overlay')){
        overlay.classList.add("none")
    }
})


let count = 0
setInterval(()=> {
    count < redContainer.children.length - 1 ? count+=1 : count = 0
    scrollSlide(redContainer, count)
}, 5000)
