import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { FormikBasePage } from "../03-forms/pages/FormikBasePage"
import { RegisterPage } from "../03-forms/pages/RegisterPage"
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo" />

          <ul>
            <li>
              <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/Users" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="register" element={ <RegisterPage /> } />
            <Route path="formik-basic" element={ <FormikBasePage /> } />
            <Route path="users" element={ <h1>Users Page</h1> } />
            <Route path="home" element={ <h1>Home Page</h1> } />
            <Route path="/*" element={ <Navigate to="/home" replace  /> } />
        </Routes>
      </div>    
    </BrowserRouter>
  )
}
