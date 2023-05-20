import React, { useEffect, useState } from 'react';
import { MenuItem, NativeSelect, Select, Typography } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import Mastercard from '../components/Mastercard';
import Chart from '../components/Chart';
import FlexBetween from '../components/styleComponents/FlexBetween';
import Transactions from '../components/Transactions';

const Login = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2023'); // Значення за замовчуванням 2023

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <MainLayout>
      <Mastercard />
      <FlexBetween sx={{ pt: 2, pb: 2 }}>
        <Typography variant='h5'>Analytics</Typography>
        <NativeSelect
          value={selectedYear}
          onChange={handleYearChange}
          inputProps={{
            name: 'year',
            id: 'year-select',
          }}
        >
          <option value={'2021'}>Year - 2021</option>
          <option value={'2022'}>Year - 2022</option>
          <option value={'2023'}>Year - 2023</option>
        </NativeSelect>
      </FlexBetween>
      {domLoaded && <Chart selectedYear={selectedYear} />}
      <Transactions />
    </MainLayout>
  );
};

export default Login;
