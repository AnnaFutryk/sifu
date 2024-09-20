"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import cls from "./styles.module.scss";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "About", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contacts" },
];

interface Props{
  variant:'header'|'burger'
}

const LinksList = (props: Props) => {
  const { variant } = props;

  const pathname = usePathname();

  return (
    <nav>
      <ul className={variant==='header'?cls.linksList:cls.burgerLinks}>
        {navLinks.map(({ name, href },index) => {
          const isActive = pathname === href;
          return (
            <li key={index} className={isActive ? cls.isActive : ""} >
              <Link href={href} className={cls.link}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LinksList;