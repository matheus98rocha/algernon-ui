'use client'
import { Box, CircularProgress, Link, Stack, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
import { ValidatePassword } from './components/ValidatePassword.component';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCreateUserForm } from './hooks/useCreateUser';
import AuthFormLayout from '@/app/auth/components/auth-form-layout/auth-form-layout.component';

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
    <AuthFormLayout titleForm={'Sign up'} handleSubmit={handleSubmit} onSubmit={onSubmit}>
      <TextField
        {...register('email')}
        label="Email"
        variant='outlined'
        type='email'
        helperText={errors.email?.message}
        error={!!errors.email}
      />
      <TextField
        {...register('password')}
        label="Password"
        variant='outlined'
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
        variant='outlined'
        type='password'
        helperText={errors.confirmPassword?.message}
        error={!!errors.confirmPassword}
      />
      <LoadingButton type={'submit'} variant='contained' loading={isLoading} loadingPosition='center' loadingIndicator={
        <CircularProgress color="info" size={16} />
      }>{'Sign up'}</LoadingButton>
      <span className={`text-xs text-red-500`}>{errors.root?.message}</span>
      <Box
        gap={1}
        className="flex items-center justify-center pt-2"
      >
        {"Already have an account?"}
        <Link
          component={NextLink}
          underline='none'
          href={'/auth/login'}
        >
          Sign in
        </Link>
      </Box>
    </AuthFormLayout >
  );
}

export default SignupForm;
