export default function validateInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Por favor informe seu nome Completo"
    }

    if (!values.email) {
        errors.email = "Por favor informe seu E-mail"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Endereço de E-mail é inválido"
    }

    if (!values.email2) {
        errors.email2 = "Por favor informe um E-mail para conhecer nosso projeto"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email2 = "Endereço de E-mail é inválido"
    }

    return errors
}