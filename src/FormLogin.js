import React from 'react'
import useForm from './useForm'
import validate from './validateInfos'
import './Form.css'


const FormLogin = ({submitForm}) => {

    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm, 
        validate
    )

    return (
        <div className="form-content-rigth">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Preencha os dados a baixo com atenção. O relatório da conversa de WhatsApp será enviado a ele ao final do proceso.
                </h1>
                <div className="form-inputs">
                    <label 
                    htmlFor="username" className="form-label">
                        Nome Completo    
                        <input
                        id="username" 
                        type="text" 
                        name="username" className="form-input"
                        placeholder="Digite seu nome completo"
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </label>
                </div>
                <div className="form-inputs">
                    <label 
                    htmlFor="email" className="form-label">
                        Email
                        <input
                        id="email" 
                        type="email" 
                        name="email" className="form-input"
                        placeholder="Digite seu E-mail"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </label>
                </div>
                <div className="form-inputs">
                    <label 
                    htmlFor="email2" className="form-label">
                        Divulgue o projeto:
                        <input
                        id="marketingEmail" 
                        type="email" 
                        name="email2" className="form-input"
                        placeholder="Digite um E-mail de um amigo"
                        value={values.email2}
                        onChange={handleChange}
                        />
                        {errors.email2 && <p>{errors.email2}</p>}
                    </label>
                </div>
                <button className="form-input-bnt">
                    Informar números
                </button>
            </form>
        </div>
    )
}

export default FormLogin
