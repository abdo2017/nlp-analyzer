// js files
import { checkForURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'

// sass files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    checkForURL,
    handleSubmit
   }

// handle submit click
const submitButton = document.querySelector(".btn-submit")

submitButton.addEventListener("click",handleSubmit)