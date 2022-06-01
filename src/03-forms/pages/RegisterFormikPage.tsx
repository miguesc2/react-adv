import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup'
import { MyTextInput } from '../components';
import '../styles/styles.css'

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>
      
      <Formik initialValues={{ name: '', email: '', password1: '', password2: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={ Yup.object({
          name:Yup.string()
                      .required('requerido')
                      .max(15, 'Debe tener maximo 15 caracteres')
                      .min(2, 'Debe tener minimo 2 caracteres'),
          email:    Yup.string()
                      .email('Invalid email adress')
                      .required('requerido'),
          password1:Yup.string()
                      .required('requerido')
                      .min(6, 'Debe tener al menos 6 caracteres'),
          password2:Yup.string()
                      .required('requerido')
                      .min(6, 'Debe tener al menos 6 caracteres')
                      .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
        })}
      >
  
        {({ handleReset }) => 
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Name" />
            <MyTextInput label="Email" name="email" type="email" placeholder="mi@gm.com" />
            <MyTextInput label="Password" name="password1" type="password" placeholder="******" />
            <MyTextInput label="Repeat Password" name="password2" type="password" placeholder="******" />

            <button type="submit">Create</button>
            <button type="button" onClick={ handleReset }>Reset Form</button>
          </Form>
        }
      </Formik>
    </div>
  )
}
