import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AuthForm } from './AuthForm';
import { StyledAuthContainer, StyledAuthSection, StyledAuthTitle, StyledLinkContainer } from './AuthForm.styled';

export const Login = () => {
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
