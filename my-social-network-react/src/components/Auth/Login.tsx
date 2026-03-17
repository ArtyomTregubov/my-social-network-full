import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { authorize } from './Auth';
import type { FormValues } from './Auth.types';
import { AuthForm } from './AuthForm';
import { StyledAuthContainer, StyledAuthSection, StyledAuthTitle, StyledLinkContainer } from './AuthForm.styled';

export const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState<FormValues>({
    login: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!formValue.login || !formValue.password) {
      return;
    }

    authorize(formValue.login, formValue.password)
      .then((data) => {
        if (data.jwt) {
          setFormValue({ login: '', password: '' });
          navigate('/main', { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledAuthSection>
      <StyledAuthContainer>
        <StyledAuthTitle>Авторизация</StyledAuthTitle>
        <AuthForm />
      </StyledAuthContainer>
      <StyledLinkContainer>
        <Typography>Нет аккаунта?</Typography>
        <Link to='/Register' style={{ textDecoration: 'none', color: '#1976d2', marginLeft: '10px' }}>
          Зарегистрироваться
        </Link>
      </StyledLinkContainer>
    </StyledAuthSection>
  );
};
