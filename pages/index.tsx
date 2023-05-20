import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import MainLayout from '../layouts/MainLayout';
import Mastercard from '../components/Mastercard';
import Chart from '../components/Chart';

const Login = () => {

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const data = [
    { name: 'Стовпець 1', value: 10 },
    { name: 'Стовпець 2', value: 20 },
    { name: 'Стовпець 3', value: 15 },

  ];
  return (
    <MainLayout>
      MM
      <Mastercard />
      <div>
        <h1>Графік</h1>

        {domLoaded && <Chart data={data} />}
      </div>
    </MainLayout>
  );
};

export default Login


