import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/Gallery' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className="laptop-xl:w-full">
            <ul className="flex justify-center space-x-8 list-none laptop-xl:flex-col laptop-xl:p-10 laptop-xl:space-x-0 laptop-xl:gap-5 laptop-xl:w-full">
                {navItems.map(item => (
                    <li key={item.path} className="transition duration-200 w-full">
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `text-lg font-semibold px-4 py-2 rounded-full border transition-all duration-300 laptop-xl:w-full laptop-xl:flex ${
                                    isActive
                                        ? 'bg-primary text-secondary-content border-primaryFocus'
                                        : 'border-transparent hover:bg-primaryFocus'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
