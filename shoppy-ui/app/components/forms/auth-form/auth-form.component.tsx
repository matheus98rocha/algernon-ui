import { Box, Button, Fade, Link, Stack, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'

function AuthForm({ type }: AuthFormPops) {
  const isSignup = type === "signup";

  return (
    <Stack spacing={3} className='w-full max-w-md border border-slate-500 rounded-lg' padding={8}>
      <Typography variant="h3" className='self-center'>{isSignup ? "Sign up" : "Login"}</Typography>
      <TextField label="Email" variant='filled' type='email' />
      <TextField label="Password" variant='filled' type='password' />
      {
        isSignup &&
        <TextField label="Confirm Password" variant='filled' type='password' />
      }
      <Button variant='contained'>{isSignup ? "Sign up" : "Login"}</Button>
      <Box
        borderTop={1}
        borderColor={"#1A1A1E"}
        className="flex items-center justify-center pt-2"
      >
        <Link component={NextLink}
          style={{ textDecoration: 'none' }}
          href={`/auth/${isSignup ? "login" : "signup"}`}>
          {isSignup ? "Login" : "Sign up"}
        </Link>
      </Box>
    </Stack>
  )
}

export default AuthForm