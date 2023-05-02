import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage> </ErrorPage>,
      element: <Main> </Main>,
    },
  ]);


  export default router;