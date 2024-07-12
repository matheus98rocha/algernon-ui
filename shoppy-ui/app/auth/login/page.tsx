import React from 'react'
import dynamic from 'next/dynamic'
import { CircularProgress } from '@mui/material'
const DynamicAuthForm = dynamic(() => import('@/app/components/forms/auth-form/auth-form.component'),
  {
    loading: () => <CircularProgress />,
  })

function Login() {
  return (
    <DynamicAuthForm type='login' />
  )
}

export default Login