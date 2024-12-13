import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import Section from './Section';

import { GrLocation } from 'react-icons/gr';
import SocialIcons from './SocialIcons';

export default function HeaderInfo() {
    return (
        <Section
            className={'bg-secondary !py-1 bg-opacity-95 text-accentContent mobile-lg:hidden '}
        >
            <div className="flex justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <FiPhone />
                        <span> 88 0255111637 </span>
                    </div>
                    <span>|</span>
                    <div className="flex items-center gap-2">
                        <MdOutlineEmail />
                        <span> example@gmail.com </span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="flex items-center gap-2">
                        <GrLocation /> <span> Mirpur-1, Dhaka-1216 </span>
                    </div>
                    <SocialIcons />
                </div>
            </div>
        </Section>
    );
}