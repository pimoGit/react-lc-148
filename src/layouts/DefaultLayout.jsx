import { Outlet } from "react-router-dom";
import MainNavBar from "../components/MainNavBar";

export default function DefaultLayout() {
    return (
        <>
            <header>
                <MainNavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
