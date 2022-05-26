import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {
  const { formData, onChange, resetForm, isValidEmail, name, email, password1, password2 } = useForm({
    name: "", email: "", password1: "", password2: "" 
  })
  
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <h1>Register Page</h1>
  
      <form noValidate onSubmit={(event) => onSubmit(event) }>
        <input 
          onChange={ onChange } 
          name="name" 
          type="text" 
          placeholder="Name" 
          value={ name }
          className={`${ name.trim().length <= 0 && 'has-error' }`} 
        />
        { name.trim().length <= 0 && <span>Este campo es necesario.</span> }

        <input 
          onChange={ onChange } 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={ email }
          className={`${ !isValidEmail(email) && 'has-error' }`}
        />
        { !isValidEmail(email) && <span>Email inválido.</span> }

        <input 
          onChange={ onChange } 
          name="password1" 
          type="password" 
          placeholder="Password" 
          value={ password1 } 
          className={`${ !isValidEmail(email) && 'has-error' }`}
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario.</span> }
        { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener al menos 6 carácteres.</span> }

        <input 
          onChange={ onChange } 
          name="password2" 
          type="password" 
          placeholder="Repeat Password" 
          value={ password2 } 
          className={`${ !isValidEmail(email) && 'has-error' }`}

        />
        { password2.trim().length <= 0 && <span>Este campo es necesario.</span> }
        { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben coincidir.</span> }

        <button type="submit">Create</button>
        <button type="button" onClick={ resetForm }>Reset Form</button>
      </form>
    </div>
  )
}
