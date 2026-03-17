import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { register } from './Auth';
import type { FormValues } from './Auth.types';
import { AuthForm } from './AuthForm';
import { StyledAuthContainer, StyledAuthSection, StyledAuthTitle, StyledLinkContainer } from './AuthForm.styled';

export const Register = () => {
  const [formValue, setFormValue] = useState<FormValues>({
    login: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (formValue.password) {
      const { password, login } = formValue;

      register(password, login).then((res) => {
        navigate('/login', { replace: true });
      });
    }
  };

  return (
    <StyledAuthSection>
      <StyledAuthContainer>
        <StyledAuthTitle>Регистрация</StyledAuthTitle>
        <AuthForm />
      </StyledAuthContainer>
      <StyledLinkContainer>
        <Typography>Есть аккаунт?</Typography>
        <Link to='/login' style={{ textDecoration: 'none', color: '#1976d2', marginLeft: '10px' }}>
          Войти
        </Link>
      </StyledLinkContainer>
    </StyledAuthSection>
  );
};
