import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAuthSection = styled(Stack)({
  maxWidth: '1200px',
  minHeight: '538px',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0, auto',
  padding: '2rem',
});

export const StyledAuthContainer = styled(Stack)({
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '12px',
  width: '100%',
  maxWidth: '500px',
  position: 'relative',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
});

export const StyledAuthTitle = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '1.5rem',
  color: '#212529',
});

export const StyledLinkContainer = styled(Box)({
  margin: '10px',
  display: 'flex',
  justifyContent: 'space-between',
});
