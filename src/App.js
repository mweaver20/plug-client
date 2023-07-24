import React from "react";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.css';

import Root from "./components/Root/Root";
import Home from "./pages/Home/Home";
import HourPage from "./pages/HourPage/HourPage";

const router = createBrowserRouter( createRoutesFromElements(
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={ <Root/> }> 
    <Route index element={<Home/>} />
    <Route path="HourPage" element={<HourPage />} />
  </Route>
))

function App() {
  return (
    <>
      { /* Replace below and add Router Provider*/}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
