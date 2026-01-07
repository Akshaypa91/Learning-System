import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HomeCourses from "./components/HomeCourses";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <HomeCourses />
      <Testimonial />
    </div>
  )
}

export default App;