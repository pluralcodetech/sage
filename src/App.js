import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { useEffect } from "react";
import Navbar from "./components/molecules/Navbar";
import Home from "./components/pages/Home";
import MiniMBA from "./components/pages/MiniMBA";
import Courses from "./components/pages/Courses";
import EachCourse from "./components/pages/EachCourse";
import ScrolltoTop from "./components/molecules/ScrolltoTop";
import Verify from "./components/pages/Verify";
import Partners from "./components/pages/Partners";
import AboutUs from "./components/pages/AboutUs";
import CourseMarketing from "./components/pages/CourseMarketing";
import CourseBusiness from "./components/pages/CourseBusiness";
import CourseInternationalBusiness from "./components/pages/CourseInternationalBusiness";
import CourseProductM from "./components/pages/CourseProductM";
import CourseAgilePM from "./components/pages/CourseAgilePM";
import CourseInnovation from "./components/pages/CourseInnovation";
import CourseFinance from "./components/pages/CourseFinance";
import CourseTeam from "./components/pages/CourseTeam";
import CourseGrowth from "./components/pages/CourseGrowth";
import CheckoutPage from "./components/pages/CheckoutPage";
// import { useLocation } from "react-router-dom";
// import CheckoutNav from "./components/molecules/CheckoutNav";


function App() {
  // const location = useLocation();
  //       let navbar = <Navbar />;   // default navbar
  //       if (location.pathname.includes('/checkout')) {
  //         navbar = <CheckoutNav />;
  //       }
        // useEffect(()=>{
        //   const closeNav=(e)=>{
        //     if (!navref.current.contains(e.target)){
        //       navref.current.style.display="none"
        //     }
        //   }
        //   document.addEventListener("click",closeNav)
        //   return ()=> document.removeEventListener("click",closeNav)
        // },[])
  return (
    <div>
      
      <Navbar />

      <ScrolltoTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="minimba" element={<MiniMBA />} />
          <Route path="courses" element={<Courses />} />
          <Route path="operations_management" element={<EachCourse />} />
          <Route path="marketing" element={<CourseMarketing />} />
          <Route path="business_analysis" element={<CourseBusiness />} />
          <Route path="international_business" element={<CourseInternationalBusiness />} />
          <Route path="product_management" element={<CourseProductM />} />
          <Route path="agile_project_management" element={<CourseAgilePM />} />
          <Route path="innovation" element={<CourseInnovation />} />
          <Route path="finance" element={<CourseFinance />} />
          <Route path="team" element={<CourseTeam />} />
          <Route path="growth" element={<CourseGrowth />} />
          <Route path="verify" element={<Verify />} />
          <Route path="partners" element={<Partners />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<h1 className="p-5">Page not found!</h1>} />
        </Routes>
      </ScrolltoTop>
    </div>
  );
}

export default App;
