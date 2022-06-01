const fields = document.querySelectorAll('[required]')
const btnSubmit = document.querySelector('#btn-submit')



function checkFields (fields) {
    fields.forEach( field => {
        checkEmptyField(field)
    })
}

function checkEmptyField (field) {
    if (field.value.trim() === '') {
        showError(field, "Campo Obrigatório")
    } else {
        showValid(field)
    }
}



function applyError (element) {
    element.classList.add('error')
    element.classList.remove('valid')
}

function applyValid (element) {
    element.classList.add('valid')
    element.classList.remove('error')
}



function showValid (input) {
    const formValidation = input.parentNode
    applyValid(formValidation)
}

function showError(input, message) {
    const formValidation = input.parentNode
    const errorMessage = formValidation.querySelector('p')
    
    applyError(formValidation)
    errorMessage.innerHTML = message
}



btnSubmit.addEventListener("click", e => {
    e.preventDefault()
    checkFields(fields)
})


fields.forEach(field => {
    field.addEventListener('blur', () => {
        checkEmptyField(field)
    })

})
