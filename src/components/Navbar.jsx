import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="laptop-xl:w-full">
            <ul className="flex justify-center space-x-8 list-none laptop-xl:flex-col laptop-xl:p-10 laptop-xl:space-x-0 laptop-xl:gap-5 laptop-xl:w-full">
                <li className="transition duration-200 w-full ">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-lg font-semibold px-4 py-2 rounded-md border transition-all duration-300 laptop-xl:w-full laptop-xl:flex ${
                                isActive
                                    ? 'bg-secondary text-secondary-content border-secondaryFocus'
                                    : 'border-transparent hover:bg-secondaryFocus'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="transition duration-200 w-full">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-lg font-semibold px-4 py-2 rounded-md border transition-all duration-300 laptop-xl:w-full laptop-xl:flex ${
                                isActive
                                    ? 'bg-secondary text-secondary-content border-secondaryFocus'
                                    : 'border-transparent hover:bg-secondaryFocus'
                            }`
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li className="transition duration-200 w-full">
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `text-lg font-semibold px-4 py-2 rounded-md border transition-all duration-300 laptop-xl:w-full laptop-xl:flex ${
                                isActive
                                    ? 'bg-secondary text-secondary-content border-secondaryFocus'
                                    : 'border-transparent hover:bg-secondaryFocus'
                            }`
                        }
                    >
                        Services
                    </NavLink>
                </li>
                <li className="transition duration-200 w-full">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-lg font-semibold px-4 py-2 rounded-md border transition-all duration-300 laptop-xl:w-full laptop-xl:flex ${
                                isActive
                                    ? 'bg-secondary text-secondary-content border-secondaryFocus'
                                    : 'border-transparent hover:bg-secondaryFocus'
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
