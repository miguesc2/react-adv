import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { 
  FormikAbstraction, FormikBasePage, FormikComponents, FormikYupPage, RegisterPage, RegisterFormikPage, DynamicForm 
} from '../03-forms/pages'
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo" />

          <ul>
            <li><NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Register Page</NavLink></li>
            <li><NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink></li>
            <li><NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink></li>
            <li><NavLink to="/formik-components" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Components</NavLink></li>
            <li><NavLink to="/formik-abstraction" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Abstractation</NavLink></li>
            <li><NavLink to="/formik-register" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Register Formik</NavLink></li>
            <li><NavLink to="/dynamic-form" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={ <RegisterPage /> } />
          <Route path="formik-basic" element={ <FormikBasePage /> } />
          <Route path="formik-yup" element={ <FormikYupPage /> } />
          <Route path="formik-components" element={ <FormikComponents /> } />
          <Route path="formik-abstraction" element={ <FormikAbstraction /> } />
          <Route path="formik-register" element={ <RegisterFormikPage /> } />
          <Route path="dynamic-form" element={ <DynamicForm /> } />

          <Route path="home" element={ <h1>Home Page</h1> } />
          <Route path="/*" element={ <Navigate to="/home" replace  /> } />
        </Routes>
      </div>    
    </BrowserRouter>
  )
}
