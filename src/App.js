import React from "react";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import Root from "./components/Root/Root";
import Home from "./pages/Home/Home";
import HourPage from "./pages/HourPage/HourPage";
import DayPage from "./pages/DayPage/DayPage";
import WeekPage from "./pages/WeekPage/WeekPage";

const router = createBrowserRouter( createRoutesFromElements(
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={ <Root/> }> 
    <Route index element={<Home/>} />
    <Route path="HourPage" element={<HourPage />} />
    <Route path="DayPage" element={<DayPage />} />
    <Route path="WeekPage" element={<WeekPage />} />
  </Route>
))

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router}/>
    </LocalizationProvider>
  );
}

export default App;
