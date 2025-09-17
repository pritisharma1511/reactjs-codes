import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";  
import { Header } from "./Header";  
const AppLayout = () => {
    const navigate = useNavigate();
    console.log(navigate);

    if(navigate.state === "loading") {return <h1>Loading...</h1>}
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};
export default AppLayout;