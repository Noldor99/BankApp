import React, { useEffect, useState, ChangeEvent } from 'react';
import { NativeSelect, Typography } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import Mastercard from '../components/Mastercard';
import Chart from '../components/Chart';
import FlexBetween from '../components/styleComponents/FlexBetween';
import Transactions from '../components/Transactions';
import NativeSelectForm from '../components/styleComponents/NativeSelectForm';
import theme from '../theme/thema';

const App = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>('2023');

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  return (
    <MainLayout>
      <Mastercard />
      <FlexBetween sx={{ pt: 2, pb: 2 }}>
        <Typography variant='subtitle1'>Analytics</Typography>
        <NativeSelectForm
          theme={theme}
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
        </NativeSelectForm>
      </FlexBetween>
      {domLoaded && <Chart selectedYear={selectedYear} />}
      <Transactions />
    </MainLayout>
  );
};

export default App;
