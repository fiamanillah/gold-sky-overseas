import { Link } from 'react-router-dom';
import Section from './Section';
import SocialIcons from './SocialIcons';

export default function Footer() {
    return (
        <Section>
            <div className="flex justify-between py-10 mobile-lg:flex-col mobile-lg:justify-center mobile-lg:gap-10">
                <div className="basis-1/3 flex flex-col gap-4 items-start mobile-lg:items-center">
                    <Link to={'/'}>
                        <img className="h-16" src="/GoldSkyLogo.png" alt="" />
                    </Link>
                    <p className="w-4/5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, vero.
                    </p>
                </div>
                <div className="flex flex-col basis-1/3 items-center gap-2">
                    <strong className="text-xl">About Us</strong>
                    <Link to={'/'}>About Service</Link>
                    <Link to={'/'}>Contact Us</Link>
                    <Link to={'/'}>Career</Link>
                </div>
                <div className="basis-1/3 flex flex-col gap-4 text-right items-end mobile-lg:items-center">
                    <strong className="text-xl"> Get In Touch </strong>
                    <p>Questions or feedback? We&apos;d love to hear from you</p>
                    <SocialIcons />
                </div>
            </div>
            <hr />
            <div className="text-center my-5">
                <p>@2024 Gold Sky Overseas | All Rights Reserved.</p>
            </div>
        </Section>
    );
}
