'use client'
import { Box, CircularProgress, Link, Stack, TextField, Typography } from '@mui/material'
import NextLink from 'next/link'
import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { useLoginUserForm } from './hooks/useLoginUser';

function LoginForm() {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    isLoading
  } = useLoginUserForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md border border-[#222229] rounded-lg'>
      <Stack spacing={3} padding={8}>
        <Typography variant="h3" className='self-center'>{'Login'}</Typography>
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
        <LoadingButton type={'submit'} variant='contained' loading={isLoading} loadingPosition='center' loadingIndicator={
          <CircularProgress color="info" size={16} />
        }>{'Login'}</LoadingButton>
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
            href={"/auth/signup"}
          >
            {'Sign up'}
          </Link>
        </Box>
      </Stack>
    </form >
  );
}

export default LoginForm;
