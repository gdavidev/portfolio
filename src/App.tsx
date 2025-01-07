import {createBrowserRouter, Outlet, RouterProvider, useLocation} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./pages/Contact.tsx";
import Formation from "./pages/Formation.tsx";
import Projects from "./pages/Projects.tsx";

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/contact', element: <Contact/>},
            {path: '/formation', element: <Formation/>},
            {path: '/projects', element: <Projects/>},
        ]
    },
]);

function Layout() {
    const location = useLocation();

    return (
        <>
            <Navbar allowTransitionEffect={ location.pathname === '/' } />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default function App() {
    return <RouterProvider router={browserRouter}/>
}
