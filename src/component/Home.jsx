import React from "react";
import LandingPage from "./LandingPage";
import Features from "./Features";
import TopCourses from "./TopCourses";
import { Fade } from "react-awesome-reveal";
import Services from "./SpecialAdditions/Services";
import ContactUs from "./ContactUs";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
        <Helmet>
        <title>FusioTech | Home Page</title>
        <meta name="description" content="Fusiotech Home Page" />
        <meta name="keywords" content="FusioTech, fusiotech, Home, Study, Contest, Education, Learning platform, course, buy courses, courses, intership, web development, app development" />
      </Helmet>
        <LandingPage />
        <Services />
        <Features />
        <ContactUs />
    </div>
  );
}
