'use client'
import createUser from '@/app/auth/signup/services/create-user.action';
import { Box, Button, Fade, Link, Stack, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom';

function AuthForm({ type }: AuthFormPops) {
  const isSignup = type === "signup";
  const [state, formAction] = useFormState(createUser, {
    error: ""
  })
  return (
    <form action={formAction} className='w-full max-w-md border border-[#222229] rounded-lg'>
      <Stack spacing={3} padding={8}>
        <Typography variant="h3" className='self-center'>{isSignup ? "Sign up" : "Login"}</Typography>
        <TextField name="email" label="Email" variant='filled' type='email' helperText={state.error} error={!!state.error} />
        <TextField name="password" label="Password" variant='filled' type='password' helperText={state.error} error={!!state.error} />
        {
          isSignup &&
          <TextField label="Confirm Password" variant='filled' type='password' />
        }
        <Button type={'submit'} variant='contained'>{isSignup ? "Sign up" : "Login"}</Button>
        <Box
          borderTop={1}
          gap={1}
          borderColor={"#222229"}
          className="flex items-center justify-center pt-2"
        >
          {
            isSignup ?
              "Don't have an account?" :
              "Already have an account"
          }

          <Link component={NextLink}
            style={{ textDecoration: 'none' }}
            href={`/auth/${isSignup ? "login" : "signup"}`}>
            {isSignup ? "Login" : "Sign up"}
          </Link>
        </Box>
      </Stack>
    </form>
  )
}

export default AuthForm