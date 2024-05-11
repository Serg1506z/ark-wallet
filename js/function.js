import { validation } from "./validation.js"
import { submit, overlay } from "./constants.js"


export function submitForm(e){
    e.preventDefault()
    const form = e.target
    const {userName,contact,question} = form.elements//получение элементов формы (input,textarea) с помощью деструктуризации
    const obj = {
        userName: userName.value,
        contact: contact.value,
        question: question.value
    }
    console.log(obj)
}

export function checkInput (e){
    const input = e.target // получили инпут
    validation[input.name].isValid(input.value); // вызвали метод проверки инпута
    const errP = input.nextElementSibling // получили элемент ошибки на странице
    errP.textContent = validation[input.name].valid ? '' : validation[input.name].errMesage // заполняем элемент ошибки строкой ошибки
    const arrValidations = Object.values(validation) // получем массив значений для проверки всех полей валидции
    submit.disabled = !arrValidations.every(item => item.valid) // проверка всех полей валидации для блокировки кнопки
}

//Получаем текс карточек
function viewCard (e){
    const card = e.currentTarget
    const cardText = card.querySelector(".card__Text")
    cardText.classList.toggle("viewCard")
}

export function conditionOpenCard (e){
   const widthWindow = window.outerWidth
    widthWindow <= 500 ? viewCard(e) : openCard(e)
}

function openCard (e){
    const card = e.currentTarget
    const titleCard = card.querySelector(".card__title")
    const textCard = card.querySelector(".card__Text")
    const btnCard = card.querySelector(".card__btn")
    const titleModal = overlay.querySelector(".card__title")
    const btnModal = overlay.querySelector(".card__btn")
    const textModal = overlay.querySelector(".card__Text")
    titleModal.textContent = titleCard.textContent
    textModal.textContent = textCard.textContent
    btnModal.textContent = btnCard.textContent
    overlay.classList.remove("none")
}

export function transition (elem){
    const position = elem.offsetTop
    window.scroll({
        top: position - 30,
        behavior: "smooth" 
    })
}

export function scrollSlide (redContainer, count){
    const slideHeight = redContainer.querySelector(".form__redBlock__title").clientHeight
    redContainer.scroll({
        top: count * slideHeight,
        behavior: "smooth" 
    })
}