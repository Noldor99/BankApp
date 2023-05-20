import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FlexBetween from './styleComponents/FlexBetween';

export default function Header() {
  return (
    <Box >
      <AppBar color='inherit' position="static" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          <Avatar>H</Avatar>
          <Typography variant="h6" component="div" alignItems='center'>
            News
          </Typography>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon color="action" />
          </Badge>

        </Toolbar>
      </AppBar>
    </Box>
  );
}