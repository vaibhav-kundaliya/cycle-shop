import {React, useEffect} from 'react'
import {Outlet, Navigate, Route} from "react-router-dom"
import ErrorPage from '../../pages/ErrorPage'
import { useGlobalContext } from '../../context'
export default function PrivateRoute() {
  const isAuthenticated = sessionStorage.getItem("user")
  
  return (
    isAuthenticated ? <Outlet /> : <ErrorPage status_code="403" />
  )
}
