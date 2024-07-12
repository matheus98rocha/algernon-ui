import React from 'react'
import dynamic from 'next/dynamic'
import { CircularProgress } from '@mui/material'
const DynamicAuthForm = dynamic(() => import('@/app/components/forms/auth-form/auth-form.component'),
  {
    loading: () => <CircularProgress />,
  })

function Signup() {
  return (
    <DynamicAuthForm type='signup' />
  )
}

export default Signup