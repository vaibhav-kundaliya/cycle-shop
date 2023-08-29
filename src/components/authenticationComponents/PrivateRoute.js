import {React} from 'react'
import {Outlet} from "react-router-dom"
import ErrorPage from '../../pages/ErrorPage'
export default function PrivateRoute() {
  const isAuthenticated = sessionStorage.getItem("user")
  
  return (
    isAuthenticated ? <Outlet /> : <ErrorPage status_code="403" />
  )
}
