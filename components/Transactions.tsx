import { Avatar, Drawer, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { pdata } from '../data/pdata'
import FlexBetween from './styleComponents/FlexBetween'
import ImageIcon from '@mui/icons-material/Image';
import moment from 'moment'

const Transactions = () => {

  const limitedPurchases = pdata.purchases.slice(0, 3); // Get the first three purchases

  return (
    <Box>
      <FlexBetween>
        <Typography variant='h5'>Transactions</Typography>
        <Typography variant='body1'>View All</Typography>
      </FlexBetween>

      <Stack spacing={2} pt={2} pb={2}>
        {limitedPurchases.map((purchase) => (
          <Paper
            sx={{ width: '100%', maxWidth: 360, padding: 2 }}>
            <Grid container spacing={2} key={purchase.id}>
              <Grid item xs={2}>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </Grid>
              <Grid container item xs={10} flexDirection='column'>
                <FlexBetween>
                  <Typography  >{purchase.store}</Typography>
                  <Typography >{purchase.amount}$</Typography>
                </FlexBetween>
                <FlexBetween>
                  <Typography variant='body2'>Bank Account</Typography>
                  <Typography variant='body2'>{moment(purchase.date).format('ddd, DD MMMM YYYY')}</Typography>
                </FlexBetween>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Stack>
    </Box>
  )
}

export default Transactions