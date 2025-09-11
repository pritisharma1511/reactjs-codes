import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {

    const router  = createBrowserRouter([
        {
            path: "/",
            element: <h1>Hello react router</h1>
        }
    ]);




 return <RouterProvider router={router} />;

};
export default App;
