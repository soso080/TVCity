import Image from "next/image";
import Header from "../src/component/Header"
import Footer from "../src/component/Footer"
import Accueil from "../src/component/Accueil"
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
    <Header/>
    <Accueil/>
    <Footer/>
    </React.Fragment>
  );
}
