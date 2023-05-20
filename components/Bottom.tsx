import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setTitleHeader } from '../store/slice/paramSlice';

export default function Bottom() {
  const router = useRouter();
  const dispatch = useDispatch();

  const isActive = (route) => {
    return router.pathname === route;
  };

  const handleClick = (route, title) => {
    dispatch(setTitleHeader(title));
    router.push(route);
  };

  const getColor = (route) => {
    return isActive(route) ? 'info' : 'inherit';
  };

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      right: 0,
    }}>
      <AppBar color='inherit' position="static" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton>
            <HomeIcon
              onClick={() => handleClick('/', 'Home')}
              color={getColor('/')}
            />
          </IconButton>
          <IconButton>
            <CreditCardIcon
              onClick={() => handleClick('/expenses', 'Expenses')}
              color={getColor('/expenses')}
            />
          </IconButton>
          <IconButton>
            <AddCircleIcon
              fontSize='large'
              color={getColor('/add')}
            />
          </IconButton>
          <IconButton>
            <CalendarTodayIcon
              color={getColor('/calendar')}
            />
          </IconButton>
          <IconButton>
            <SettingsIcon
              color={getColor('/settings')}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
