
import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Navbar} from "./components/Navbar/Navbar";
import {
  ContactUs,
  MainPage,
  HomeStaging,
  FurnishAndStyle,
  VacationRental,
  Portfolio,
  GetAQuote,
} from "./pages";

import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className={" body text-p font-extralight text-gray-dark"}>
      <Navbar/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        {/*<Route path="/services/" element={<Services/>}/>*/}
        <Route path="/services/home-staging" element={<HomeStaging/>}/>
        <Route path="/services/furnish-and-style" element={<FurnishAndStyle/>}/>
        <Route path="/services/vacation-rental" element={<VacationRental/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/get-a-quote" element={<GetAQuote/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
