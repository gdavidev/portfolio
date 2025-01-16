import {createBrowserRouter, Outlet, RouterProvider, useLocation} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import Formation from "./pages/Formation.tsx";
import Projects from "./pages/Projects.tsx";
import CacheProvider from "./context/CacheProvider.tsx";
import FontAwesomeHelper from "./scripts/FontAwesomeHelper.ts";
import OverlayButtons from "./components/OverlayButtons.tsx";

FontAwesomeHelper.initialize();

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/formation', element: <Formation/>},
            {path: '/projects', element: <Projects/>},
        ]
    },
]);

function Layout() {
    const [ allowNavbarTransition, setAllowNavbarTransition ] = useState<boolean>(false)
    const location = useLocation();

    useEffect(() => {
        setAllowNavbarTransition(location.pathname !== '/')
    }, [location.pathname]);

    return (
        <>
            <Navbar allowTransitionEffect={ allowNavbarTransition } />
            <main>
                <Outlet/>
            </main>
            <OverlayButtons />
            <Footer/>
        </>
    );
}

export default function App() {
    return (
        <CacheProvider>
            <RouterProvider router={browserRouter}/>
        </CacheProvider>
    )
}
