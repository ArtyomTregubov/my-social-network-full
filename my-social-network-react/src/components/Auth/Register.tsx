import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AuthForm } from './AuthForm';
import { StyledAuthContainer, StyledAuthSection, StyledAuthTitle, StyledLinkContainer } from './AuthForm.styled';

export const Register = () => {
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
