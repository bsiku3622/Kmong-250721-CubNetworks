import React from "react";
import Navbar from "../components/orgamisms/Navbar";
import ContentWrapper from "../components/ContentWrapper";
import Hero from "../components/orgamisms/Hero";
import About from "../components/orgamisms/About";
import Services from "../components/orgamisms/Services";
import References from "../components/orgamisms/References";
import Partners from "../components/orgamisms/Partners";
import Recuit from "../components/orgamisms/Recuit";
import ContactInfo from "../components/orgamisms/ContactInfo";
import Footer from "../components/orgamisms/Footer";

const Home: React.FC = () => {
  return (
    <ContentWrapper>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <References />
        <Partners />
        <Recuit />
        <ContactInfo />
      </main>
      <Footer />
    </ContentWrapper>
  );
};

export default Home;
