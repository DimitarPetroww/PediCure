import Link from 'next/link'
import { GetStaticProps } from 'next';

import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

import { getHeaderSettings, HeaderResponse, HeaderType } from '@/lib/globals/header';

import './Header.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = async () => {
    const { data: { facebookLink, phone, address }, error, loading }: HeaderResponse = await getHeaderSettings();

    return (
        <section className='header'>
            <ul>
                <li>
                    <FaPhoneAlt />
                    <Link
                        href={`tel:${phone.value}`}
                    >
                        {phone.value}
                    </Link>
                </li>
                <li>
                    <MdPlace size={20} />
                    <Link
                        href={address.value}
                        target='_blank'
                    >
                        {address.label}
                    </Link>
                </li>
            </ul>
            <Link
                href={facebookLink}
                target='_blank'
                className='header__facebook'
            >
                <FaFacebookF />
            </Link>
        </section>
    )
};

export default Header;