export const validation = {
    userName: {
        valid: false,
        isValid: function (str){
            this.valid = str.length > 1
        },
        errMesage: "Имя должно быть больше одного симаола"
    },
    contact: {
        valid: false,
        isValid: function (str){
            this.valid = str.includes("@")
        },
        errMesage: "Введите адрес почты или telegram"
    },
    question: {
        valid: false,
        isValid: function (str){
            this.valid = str.length > 0
        },
        errMesage: "Поле не должно быть пустым"
    }
}

