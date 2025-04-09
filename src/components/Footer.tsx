import Logo from "./Logo.tsx";

export default function Footer() {
    return (
        <footer className="bg-page-background px-10 sm:px-28 pt-16 pb-28">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Logo className='mb-4 sm:mb-0' />
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
                                target="_blank"
                                className="hover:underline cursor-pointer">
                                    Whatsapp
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <span className="block text-sm text-font-dark sm:text-center">© 2025 <a
                    href="https://gdavidev.github.io/portfolio/" target="_blank" className="hover:underline">
                    GABRIEL DAVID™</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}