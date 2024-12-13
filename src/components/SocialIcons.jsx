import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

export default function SocialIcons() {
    return (
        <div className="flex items-center gap-2">
            <a
                className=" rounded-full bg-accentContent text-accent hover:bg-accent hover:text-accent-content duration-200 h-8 w-8 grid place-content-center"
                href="#"
            >
                <FaFacebookF />
            </a>
            <a
                className=" rounded-full bg-accentContent text-accent hover:bg-accent hover:text-accent-content duration-200 h-8 w-8 grid place-content-center"
                href="#"
            >
                <FaInstagram />
            </a>
            <a
                className=" rounded-full bg-accentContent text-accent hover:bg-accent hover:text-accent-content duration-200 h-8 w-8 grid place-content-center"
                href="#"
            >
                <FaLinkedinIn />
            </a>
        </div>
    );
}
