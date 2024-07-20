'use client'
import { Box, CircularProgress, Link, Stack, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { useLoginUserForm } from './hooks/useLoginUser';
import AuthFormLayout from '@/app/auth/components/auth-form-layout/auth-form-layout.component';

function LoginForm() {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    isLoading
  } = useLoginUserForm();

  return (
    <AuthFormLayout titleForm={'Login'} handleSubmit={handleSubmit} onSubmit={onSubmit}>
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
      <LoadingButton type={'submit'} variant='contained' loading={isLoading} loadingPosition='center' loadingIndicator={
        <CircularProgress color="info" size={16} />
      }>{'Login'}</LoadingButton>
      <Box
        gap={1}
        className="flex items-center justify-center pt-2"
      >
        {"Don't have an account?"}
        <Link
          component={NextLink}
          underline='none'
          href={"/auth/signup"}
        >
          {'Sign up'}
        </Link>
      </Box>
    </AuthFormLayout>
  );
}

export default LoginForm;
