import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { AuthFormLayoutProps } from './auth-form-layout.types';

function AuthFormLayout<T extends FieldValues>({ handleSubmit, onSubmit, titleForm, children }: AuthFormLayoutProps<T>) {
  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-md border rounded-lg'
      sx={{
        boxShadow: 3
      }}
    >
      <Stack spacing={3} padding={8}>
        <Typography variant="h3" className='self-center'>{titleForm}</Typography>
        {children}
      </Stack>
    </Box>
  )
}

export default AuthFormLayout