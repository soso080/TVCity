import Image from "next/image";
import Header from "../../src/component/Header"
import Loginform from "@/src/component/Loginform";
import Registerform from "@/src/component/Registerform";
import Footer from "../../src/component/Footer"
import React from 'react';

export default function Auth() {
  return (
    <React.Fragment>
    <Header/>
    <Loginform/>
    <Registerform/>
    <Footer/>
    </React.Fragment>
  );
}
