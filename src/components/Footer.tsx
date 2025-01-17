import Logo from "./Logo.tsx";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-page-background rounded-lg pt-16">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Logo />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-font-dark sm:mb-0">
                        <li>
                            <a
                                href="https://www.instagram.com/gabriel.david.david/"
                                className="hover:underline cursor-pointer me-4 md:me-6">
                                    Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.link/dg78tr"
                                className="hover:underline cursor-pointer">
                                    Whatsapp
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <span className="block text-sm text-font-dark sm:text-center">© 2025 <a
                    href="https://flowbite.com/" className="hover:underline">GABRIEL DAVID™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}