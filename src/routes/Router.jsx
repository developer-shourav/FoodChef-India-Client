import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage> </ErrorPage>,
      element: <Main> </Main>,
      children:[
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