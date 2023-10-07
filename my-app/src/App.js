import React from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import Form from "./components/form";
import PopularListing from "./components/popularListing";
import Navbar from "./components/footer/navbar";
import Body from "./components/footer/body";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/footer/scrolltotop";
import Services from "./components/services";

export default function App() {
  return (
    <>
      <div className="container_of_form_popularlisting">
        <Form />
      </div>
      <Footer />
      <ScrollToTop />

      {/* <Services /> */}
    </>

    // <div className="app-main">

    //     <div className="top-part">
    //         <Header />
    //         <Nav />

    //     </div>
    //     <div className="Used_vechicles">
    //         <h1>Used Vehicles For Sale </h1>
    //     </div>

    // </div>
  );
}
