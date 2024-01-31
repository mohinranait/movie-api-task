import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";


const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="" style={{minHeight:'80vh'}}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;