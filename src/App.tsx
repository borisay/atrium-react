
import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import {ContactUs, MainPage, HomeStaging, FurnishAndStyle,VacationRental,Portfolio,GetAQuote} from "./pages";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={"text-p font-extralight text-gray-dark"}>
    <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          {/*<Route path="/services/" element={<Services/>}/>*/}
            <Route path="/services/home-staging" element={<HomeStaging/>}/>
            <Route path="/services/furnish-and-style" element={<FurnishAndStyle/>}/>
            <Route path="/services/vacation-rental" element={<VacationRental/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/get-a-quote" element={<GetAQuote/>}/>
          {/*<Route path={"/test-area/build-atrium/index.html"} element={<MainPage/>}/>*/}
          {/*<Route path="/test-area/build-atrium/services/home-staging" element={<HomeStaging/>}/>*/}
          {/*<Route path="/test-area/build-atrium/services/furnish-and-style" element={<FurnishAndStyle/>}/>*/}
          {/*<Route path="/test-area/build-atrium/services/vacation-rental" element={<VacationRental/>}/>*/}
          {/*<Route path="/test-area/build-atrium/portfolio" element={<Portfolio/>}/>*/}
          {/*<Route path="/test-area/build-atrium/contact" element={<ContactUs/>}/>*/}
          {/*<Route path="/test-area/build-atrium/get-a-quote" element={<GetAQuote/>}/>*/}
        </Routes>
      <Footer/>
    </div>

)
}

export default App;
