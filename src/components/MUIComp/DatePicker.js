import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack, TextField } from '@mui/material';
import dayjs from 'dayjs';


export default function Datepicker({ startDate, onStartDateChange }) {
  return (
    <form>
      <Stack spacing={4} sx={{ width: '250px' }} >
        <DatePicker
          label="Select a start date"
          value={dayjs(startDate)}
          onChange={onStartDateChange}
        />
      </Stack>
    </form>
  );
}