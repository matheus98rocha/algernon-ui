import React from 'react'
import dynamic from 'next/dynamic'
import { CircularProgress } from '@mui/material'
const DynamicSignupForm = dynamic(() => import('./components/signup-form/signup-form.component'),
  {
    loading: () => <CircularProgress />,
  })

function Signup() {
  return (
    <DynamicSignupForm />
  )
}

export default Signup