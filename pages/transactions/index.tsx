import { Avatar, Box, Grid, Paper, Stack, Typography } from '@mui/material';
import moment from 'moment';
import FlexBetween from '../../components/styleComponents/FlexBetween';
import ImageIcon from '@mui/icons-material/Image';
import { IPurchase, pdata } from '../../data/pdata';
import MainLayout from '../../layouts/MainLayout';


export default function TransactionsAll() {


  return (
    <MainLayout>
      <Stack spacing={2} pt={2} pb={2}>
        {pdata.purchases.map((purchase: IPurchase) => (
          <Paper
            key={purchase.id}
            sx={{ width: '100%', maxWidth: 360, padding: 2 }}>
            <Grid container spacing={2} >
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

    </MainLayout>
  );
}
