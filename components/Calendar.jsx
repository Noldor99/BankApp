import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import CheckIcon from "@mui/icons-material/Check";
import { pdata } from "../data/pdata";

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const dateObjects = pdata.purchases.map(
      (purchase) => new Date(purchase.date)
    );
    setDates(dateObjects);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        orientation="portrait"
        value={value}
        disableFuture
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected = dates.some((date) => {
            return (
              date.getDate() === day.getDate() &&
              date.getMonth() === day.getMonth() &&
              date.getFullYear() === day.getFullYear()
            );
          });

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? <CheckIcon color="red" /> : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
