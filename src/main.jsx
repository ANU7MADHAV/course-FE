import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignupPage from "./pages/instructor/SignupPage";
import SigninPage from "./pages/instructor/SigninPage";
import UserSignupPage from "./pages/user/UserSignupPage";
import UserSigninPage from "./pages/user/UserSigninPage";
import App from "./App";
import HomeLayout from "./layout/HomeLayout";
import UserDashboard from "./components/user/UserDashboard";
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";
import AdminDashboardPage from "./pages/instructor/AdminDashboardPage";
import CourseAdd from "./components/instructor/CourseAdd";
import CourseCard from "./components/instructor/CourseCard";
import CoursesPage from "./pages/user/CoursesPage";
import InstructorPage from "./pages/instructor/InstructorPage";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/instructor/signup",
        element: <SignupPage />,
      },
      {
        path: "/instructor/signin",
        element: <SigninPage />,
      },
      {
        path: "/user/signup",
        element: <UserSignupPage />,
      },
      {
        path: "/user/signin",
        element: <UserSigninPage />,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboardPage />,
      },
      {
        path: "/admin/courses",
        element: <CourseCard />,
      },
      {
        path: "/admin/instructors",
        element: <InstructorPage />,
      },
      {
        path: "/admin/courses/add-course",
        element: <CourseAdd />,
      },
    ],
  },
  {
    element: <UserLayout />,
    children: [
      {
        path: "/user/dashboard",
        element: <UserDashboard />,
      },
      {
        path: "/user/courses",
        element: <CoursesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
