import React from 'react';
import { format, parse } from 'date-fns';
import { pdata } from '../data/pdata';
import { Stack, Paper, Grid, Avatar, Typography, Slider, LinearProgress } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import FlexBetween from './styleComponents/FlexBetween';

interface Purchase {
  id: number;
  amount: number;
  store: string;
  date: string;
}

interface MonthlySummary {
  month: string;
  purchases: Purchase[];
}

const ExpensesStore = () => {
  const purchases: Purchase[] = pdata.purchases;

  const sumByMonth: { [month: string]: Purchase[] } = {};

  purchases.forEach((purchase: Purchase) => {
    const { id, date, amount, store } = purchase;

    const month = format(new Date(date), 'MM-yyyy');

    if (sumByMonth[month]) {
      sumByMonth[month].push({ id, date, amount, store });
    } else {
      sumByMonth[month] = [{ id, date, amount, store }];
    }
  });

  const result: MonthlySummary[] = Object.entries(sumByMonth).map(
    ([month, purchases]: [string, Purchase[]]) => ({
      month,
      purchases,
    })
  );

  return (
    <Stack spacing={2} pt={2} pb={2}>
      {result.map((item: MonthlySummary) =>
        item.purchases.map((purchase: Purchase) => (
          <Paper key={purchase.id} sx={{ width: '100%', maxWidth: 360, padding: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </Grid>
              <Grid container item xs={10} flexDirection='column'>
                <FlexBetween>
                  <Typography>{purchase.store}</Typography>
                  <Typography variant='body2'>
                    {format(parse(item.month, 'MM-yyyy', new Date()), 'MMMM yyyy')}
                  </Typography>
                </FlexBetween>
                <FlexBetween>
                  <Typography variant='body2'>Bank Account</Typography>
                </FlexBetween>
              </Grid>
            </Grid>
            <Grid container spacing={2} pt={2} alignItems='center' justifyContent='space-between'>
              <Grid item>
                <Typography pb={2}>Total Spend</Typography>
                <Typography>{purchase.amount}$</Typography>
              </Grid>
              <Grid item>
                <Typography pb={2}>Total Budget</Typography>
                <Typography>200$</Typography>
              </Grid>
              <Grid item>
                <Typography>Value</Typography>
              </Grid>
            </Grid>
            <Slider defaultValue={purchase.amount} max={200} disabled />
          </Paper>
        ))
      )}
    </Stack>
  );
};

export default ExpensesStore;
