import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput, MySelect, MyCheckbox } from '../components'
import '../styles/styles.css'

export const FormikAbstraction = () => {
  
  return (
    <div>
      <h1>FormikAbstraction</h1>

      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', terms: false, jobType: '' }}
        onSubmit={ (values, { setSubmitting }) => {
          console.log(values)
        }}
        validationSchema={ Yup.object({
          firstName:Yup.string()
                        .max(15, 'Debe tener máximo 15 carácteres')
                        .required('requerido'),
          lastName: Yup.string()
                        .max(10, 'Debe tener máximo 10 carácteres')
                        .required('requerido'),
          email:    Yup.string()
                        .email('Invalid email address')
                        .required('requerido'),
          terms:    Yup.boolean()
                        .oneOf([true], 'Debe aceptar las condiciones'),
          jobType:  Yup.string()
                        .required('requerido')
                        .notOneOf(['it-jr'], 'esta opcion no es permitida')
        })}
      >

        {(formik) =>
          <Form>
            <MyTextInput label={"First Name"} name={'firstName'} placeholder="Nombre" />
            <MyTextInput label={"Last Name"} name={'lastName'} placeholder="Apellido" />
            <MyTextInput label={"Email Adress"} name={'email'} placeholder="Correo" type="email" />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-senior</option>
              <option value="it-jr">It-jr</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms"  />

            <button type='submit'>Submit</button>
          </Form>
        }
      </Formik>
    </div>
  )
}
