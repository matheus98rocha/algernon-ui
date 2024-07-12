'use client'
import { Box, CircularProgress, Link, Stack, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
import { useAuthForm } from './hooks/authForm';
import { ValidatePassword } from './components/ValidatePassword.component';
import { AuthFormProps } from './auth-form.types';
import LoadingButton from '@mui/lab/LoadingButton';

function AuthForm({ type }: AuthFormProps) {
  const { errors, handleSubmit, isSignup, onSubmit, register, watch, isLoadingSignup } = useAuthForm({
    type
  });

  const password = watch("password")
  const canShowPasswordValidation = password?.length > 0 && isSignup

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md border border-[#222229] rounded-lg'>
      <Stack spacing={3} padding={8}>
        <Typography variant="h3" className='self-center'>{isSignup ? 'Sign up' : 'Login'}</Typography>
        <TextField
          {...register('email')}
          label="Email"
          variant='filled'
          type='email'
          helperText={errors.email?.message}
          error={!!errors.email}
        />
        <TextField
          {...register('password')}
          label="Password"
          variant='filled'
          type='password'
          helperText={errors.password?.message}
          error={!!errors.password}
        />
        {
          canShowPasswordValidation &&
          <ValidatePassword password={
            password
          } />
        }
        {isSignup && (
          <TextField
            {...register('confirmPassword')}
            label="Confirm Password"
            variant='filled'
            type='password'
            helperText={errors.confirmPassword?.message}
            error={!!errors.confirmPassword}
          />
        )}
        <LoadingButton type={'submit'} variant='contained' loading={isLoadingSignup} loadingPosition='center' loadingIndicator={
          <CircularProgress color="info" size={16} />
        }>{isSignup ? 'Sign up' : 'Login'}</LoadingButton>
        <Box
          borderTop={1}
          gap={1}
          borderColor={"#222229"}
          className="flex items-center justify-center pt-2"
        >
          {isSignup ? "Don't have an account?" : "Already have an account"}
          <Link
            component={NextLink}
            style={{ textDecoration: 'none' }}
            href={`/auth/${isSignup ? 'login' : 'signup'}`}
          >
            {isSignup ? 'Login' : 'Sign up'}
          </Link>
        </Box>
      </Stack>
    </form >
  );
}

export default AuthForm;
