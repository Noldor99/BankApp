import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Bottom() {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      right: 0,
    }} >
      <AppBar color='inherit' position="static" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <CreditCardIcon />
          <CreditCardIcon />
          <AddCircleIcon fontSize='large' color='info' />
          <CalendarTodayIcon />
          <SettingsIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}