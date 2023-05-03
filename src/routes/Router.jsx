import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

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
          path:'/chefDetails/:id',
          element:<ChefDetails> </ChefDetails>
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