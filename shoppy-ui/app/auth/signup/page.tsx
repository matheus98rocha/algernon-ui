import { Button, Link, Stack, TextField } from '@mui/material'

import React from 'react'
import NextLink from 'next/link'

function Signup() {
  return (
    <Stack spacing={2} className='w-full max-w-xs'>
      <TextField label="Email" variant='outlined' type='email' />
      <TextField label="Password" variant='outlined' type='password' />
      <TextField label="Confirm Password" variant='outlined' type='password' />
      <Button variant='contained'>Signup</Button>
      <Link component={NextLink} href={"/auth/login"} className='self-center'>Login</Link>
    </Stack>
  )
}

export default Signup