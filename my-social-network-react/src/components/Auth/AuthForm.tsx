import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Stack, TextField } from '@mui/material';
import type { FormValues } from './Auth.types';

interface AuthFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (data: FormValues) => void;
}

export const AuthForm: FC<AuthFormProps> = ({ onChange, onSubmit }) => {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='modal-form' id='profileForm' noValidate>
      <Stack
        sx={{
          gap: '0.5rem',
          fontWeight: '600',
          color: '0 5px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <TextField
          {...register('login')}
          onChange={onChange}
          type='email'
          id='login'
          value=''
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
            },
            '& input': {
              padding: '10px 14px',
              border: '1px solid #ddd',
              borderRadius: '12px',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:focus': {
                borderColor: '#1976d2',
                outline: 'none',
              },
            },
          }}
          required
        />
      </Stack>
      <Stack
        sx={{
          gap: '0.5rem',
          fontWeight: '600',
          color: '0 5px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <TextField
          {...register('password')}
          onChange={onChange}
          type='text'
          id='password'
          value=''
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
            },
            '& input': {
              padding: '10px 14px',
              border: '1px solid #ddd',
              borderRadius: '12px',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              '&:focus': {
                borderColor: '#1976d2',
                outline: 'none',
              },
            },
          }}
          required
        />
      </Stack>
      <Stack sx={{ gap: '5px' }}>
        <Button
          type='submit'
          sx={{
            width: '100%',
            backgroundColor: '#4361ee',
            color: 'white',
            border: 'none',
            padding: '0.7rem',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '0.5rem',
          }}
        >
          Войти
        </Button>
      </Stack>
    </form>
  );
};
