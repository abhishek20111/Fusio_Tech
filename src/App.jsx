import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./component/ErrorPage";
import UserProfile from "./component/UserProfile";
import Home from "./component/Home";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Navbar from "./component/Navbar";
import { updateToken, setIsLogin } from "./store/UserSilce.js";
import Footer from "./component/Footer";
import Cource from "./component/Cource";
import CourseDesc from "./component/CouseDesc";
import MyCource from "./component/MyCource";
import About from "./component/About";
import Internship from "./component/Intership";
import VideoWindow from "./component/VideoWindow";
import Logout from "./component/Logout";
import Manage from "./component/Manage";
import UploadVideo from "./component/UploadVideo";
import YourVideo from "./component/YourVideo";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const USER_TYPE = {
  PUBLIC: "Public User",
  USER: "User",
  ADMIN: "Admin",
  SUPER_ADMIN: "Super Admin",
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(updateToken(token));
      dispatch(setIsLogin(true));
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen">
       <Helmet>
        <title>FusioTech</title>
        <meta name="description" content="Fusiotech is platform for Courses" />
        <meta name="keywords" content="FusioTech, Fusiotech, Education, Learning platform, course, buy courses, courses" />
      </Helmet>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

function AppRoutes() {
  const CURRENT_USER_TYPE = useSelector((state) => state.userData.role);

  return (
    <Fade>
      <Routes>
        <Route
          path="/signup"
          element={
            <PublicElement>
              <Signup />
            </PublicElement>
          }
        />
        <Route
          path="/about"
          element={
            <PublicElement>
              <About />
            </PublicElement>
          }
        />
        <Route
          path="/intern"
          element={
            <PublicElement>
              <Internship />
            </PublicElement>
          }
        />
        <Route
          path="/VWindow"
          element={
            <PublicElement>
              <VideoWindow />
            </PublicElement>
          }
        />
        <Route
          path="/manage"
          element={
            <AdminElement>
              <Manage />
            </AdminElement>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicElement>
              <Signin />
            </PublicElement>
          }
        />
        <Route
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        />
        <Route
          path="*"
          element={
            <PublicElement>
              <ErrorPage />
            </PublicElement>
          }
        />
        <Route
          path="/UserProfile"
          element={
            <UserElement>
              <UserProfile />
            </UserElement>
          }
        />
        <Route
          path="/logout"
          element={
            <UserElement>
              <Logout />
            </UserElement>
          }
        />
        <Route
          path="/myCourse"
          element={
            <UserElement>
              <MyCource />
            </UserElement>
          }
        />
        <Route
          path="/courses"
          element={
            <PublicElement>
              <Cource />
            </PublicElement>
          }
        />
        <Route
          path="/course_description"
          element={
            <UserElement>
              <CourseDesc />
            </UserElement>
          }
        />
        <Route
          path="/uploadVideo"
          element={
            <AdminElement>
              <UploadVideo />
            </AdminElement>
          }
        />
        <Route
          path="/yourVideo"
          element={
            <AdminElement>
              <YourVideo />
            </AdminElement>
          }
        />
      </Routes>

      <ToastContainer />
    </Fade>
  );
}

function PublicElement({ children }) {
  return <>{children}</>;
}

function UserElement({ children }) {
  const CURRENT_USER_TYPE = useSelector((state) => state.userData.role);

  if (
    CURRENT_USER_TYPE === USER_TYPE.USER ||
    CURRENT_USER_TYPE === USER_TYPE.ADMIN ||
    CURRENT_USER_TYPE === USER_TYPE.SUPER_ADMIN
  )
    return <>{children}</>;
  else return <>do not access to this domain</>;
}

function OnlyUserElement({ children }) {
  const CURRENT_USER_TYPE = useSelector((state) => state.userData.role);

  if (CURRENT_USER_TYPE === USER_TYPE.USER) return <>{children}</>;
  else return <>You do not need to access this site</>;
}

function AdminElement({ children }) {
  const CURRENT_USER_TYPE = useSelector((state) => state.userData.role);

  if (
    CURRENT_USER_TYPE === USER_TYPE.ADMIN ||
    CURRENT_USER_TYPE === USER_TYPE.SUPER_ADMIN
  )
    return <>{children}</>;
  else return <>do not access to Admin domain</>;
}

export default App;
