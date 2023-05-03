import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage> </ErrorPage>,
      element: <Main> </Main>,
      children:[
        {
          path:'/',
          element:<Home> </Home>
        },

        {
          path:'/blogs',
          element:<Blogs> </Blogs>
        },

        {
          path:'/login',
          element:<Login> </Login>
        },

        {
          path:'/register',
          element: <Register> </Register>
        },
      ]
    },
  ]);


  export default router;