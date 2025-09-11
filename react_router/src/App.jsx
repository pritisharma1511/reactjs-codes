import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {

    const router  = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },  
      {
        path: "/movie",
        element: <Movie/>,
      },
    ]);




 return <RouterProvider router={router} />;

};
export default App;
