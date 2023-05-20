import React from 'react';
import { IconButton, Paper, styled, Typography } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import FlexBetween from './styleComponents/FlexBetween';


const MastercardLogo = styled('img')(({ theme }) => ({
  width: '80%',
  height: 'auto',
}));

const Mastercard: React.FC = () => {
  const cardNumber = '2544754537851023';

  // Функція для додавання пропусків між чотирма цифрами
  const formatCardNumber = (number) => {
    const parts = number.match(/[\s\S]{1,4}/g) || [];
    return parts.join(' ');
  };

  return (
    <Paper sx={{
      background: '#2F3046',
      borderRadius: '24px',
      padding: '24px 29px'
    }}>
      <FlexBetween>
        <Typography variant='h6' color='white'>Total Balance</Typography>
        <IconButton color='inherit' style={{ color: '#fff' }}>
          <MoreHoriz />
        </IconButton>
      </FlexBetween>
      <Typography variant='h4' color='white' sx={{ pt: 2 }}>$76,22.00</Typography>
      <FlexBetween sx={{ pt: 4 }}>
        <Typography variant="body1" component="span" color='#A3A3A3'>
          {formatCardNumber(cardNumber)}
        </Typography>
        <svg width="47" height="29" viewBox="0 0 47 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32.5" cy="14.5" r="14.5" fill="#FF9F00" />
          <circle cx="14.5" cy="14.5" r="14.5" fill="#FF0015" fillOpacity="0.84" />
        </svg>
      </FlexBetween>

    </Paper>
  );
};

export default Mastercard;
