import Image from "next/image";
import Header from "../../src/component/Header"
import Contactform from "../../src/component/Contactform"
import Footer from "../../src/component/Footer"
import React from 'react';

export default function Contact() {
  return (
    <React.Fragment>
    <Header/>
    <Contactform/>
    <Footer/>
    </React.Fragment>
  );
}
