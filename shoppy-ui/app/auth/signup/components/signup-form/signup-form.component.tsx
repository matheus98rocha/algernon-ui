'use client'
import { Box, CircularProgress, Link, Stack, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
import { ValidatePassword } from './components/ValidatePassword.component';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCreateUserForm } from './hooks/useCreateUser';

function SignupForm() {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    watch,
    isLoading
  } = useCreateUserForm()

  const password = watch("password")
  const canShowPasswordValidation = password?.length > 0

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md border border-[#222229] rounded-lg'>
      <Stack spacing={3} padding={8}>
        <Typography variant="h3" className='self-center'>{'Sign up'}</Typography>
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
        <TextField
          {...register('confirmPassword')}
          label="Confirm Password"
          variant='filled'
          type='password'
          helperText={errors.confirmPassword?.message}
          error={!!errors.confirmPassword}
        />
        <LoadingButton type={'submit'} variant='contained' loading={isLoading} loadingPosition='center' loadingIndicator={
          <CircularProgress color="info" size={16} />
        }>{'Sign up'}</LoadingButton>
        <span className={`text-xs text-red-500`}>{errors.root?.message}</span>
        <Box
          borderTop={1}
          gap={1}
          borderColor={"#222229"}
          className="flex items-center justify-center pt-2"
        >
          {"Don't have an account?"}
          <Link
            component={NextLink}
            style={{ textDecoration: 'none' }}
            href={'/auth/login'}
          >
            Sign up
          </Link>
        </Box>
      </Stack>
    </form >
  );
}

export default SignupForm;
