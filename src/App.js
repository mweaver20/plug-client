import React from "react";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.css';

import Root from "./components/Root/Root";
import Home from "./pages/Home/Home";

const router = createBrowserRouter( createRoutesFromElements(
  /* Wrap this Root Route to create Router here */
  <Route path="/free" element={ <Root/> }> 
    <Route index element={<Home/>} />
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
