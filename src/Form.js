import React, { useState } from 'react'
import FormLogin from './FormLogin'

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(values) {
        console.log(values)
        setIsSubmitted(true)
    }

    return (
        <div>
           {!isSubmitted ? (<FormLogin submitForm={submitForm}/>)
           : <h1>Formulário submitido com sucesso</h1>}
        </div>
    )
}

export default Form
