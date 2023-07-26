import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Stack, TextField } from '@mui/material';
import dayjs from 'dayjs';


export default function DateTimePicker({ startDate, onStartDateChange, startTime, onStartTimeChange }) {
  return (
    <form>
      <Stack spacing={4} sx={{ width: '250px' }} >
        <DatePicker
          label="Select a date"
          value={dayjs(startDate)}
          onChange={onStartDateChange}
        />
        <TimePicker 
          label="Select a start time" 
          value={startTime}
          onChange={onStartTimeChange}
        />
      </Stack>
    </form>
  );
}