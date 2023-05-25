import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/homeDetail';
import About from './components/about/aboutDetail';
import { ThemeProvider, createTheme } from '@mui/material';
import Services from './components/services/serviceDetail';
import Career from './components/career/CareerDetails';
import News from './components/news/newsDetail';
import SingleCareer from './components/career/SingleCareer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/careers",
    element: <Career />
  },
  {
    path: "/careers/:id",
    element: <SingleCareer />
  },
  {
    path: "/news",
    element: <News />
  }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
