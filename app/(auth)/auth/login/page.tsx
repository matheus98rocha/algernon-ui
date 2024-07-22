import React from 'react'
import dynamic from 'next/dynamic' 
import { CircularProgress } from '@mui/material'
const DynamicLoginForm = dynamic(() => import('./components/login-form/login-form.component'),
{
  loading: () => <CircularProgress />,
})

function Login() {
  return (
    <DynamicLoginForm />
  )
}

export default Login