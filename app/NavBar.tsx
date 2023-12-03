import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex border-b space-x-6 mb-5 px-5 h-14 items-center">
      <Link href="/"><AiFillBug className="text-2xl"/></Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li>
            <Link className="text-zinc-500 hover:text-zinc-800 transition-colors" key={link.href} href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
