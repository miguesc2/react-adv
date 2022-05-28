import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {
  
  return (
    <div>
      <h1>FormikComponents</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />
            
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Adress</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-senior</option>
              <option value="it-jr">It-jr</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type='submit'>Submit</button>
          </Form>
        }
      </Formik>
    </div>
  )
}
