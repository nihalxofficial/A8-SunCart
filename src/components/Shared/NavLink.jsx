import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    const path = usePathname();
    const isActive = path === href;
    return (
        <Link
            href={href}
            className={`${isActive ? "text-sky-500 border-b-2 border-sky-500 ": "text-amber-800 hover:text-sky-600 hover:border-b-2 hover:border-sky-500 transition"}  font-medium px-2 py-1 flex justify-start md:justify-between items-center gap-2`}
        >
            {children}
        </Link>
    );
};

export default NavLink;