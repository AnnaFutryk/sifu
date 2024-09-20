"use client";
import logo from "../../../public/images/logo.png";
import { useEffect, useState } from "react";
import cls from "./styles.module.scss";
import Image from "next/image";
import LinksList from "./components/LinksList";

import Link from "next/link";
import DropDown from "./components/DropDown";
import Burger from "./Burger";
import Button from "../../common/Button";

const Header = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;

      if (scrollY > lastScrollY && windowWidth > 989) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`${scrolledDown ? cls.none : cls.header}`}>
      <div className={cls.headerContainer}>
          <Image src={logo} alt="logo" sizes="100vh" className={cls.logo} />
          <div className={cls.linksList}>
            <LinksList variant="header"/>
          </div>
        <div className={cls.rightBlock}>
          <div className={cls.dropdawnWrapp}>
            <DropDown/>
          </div>
          <Link href="#available">
          <Button
            text="Buy now"
            color="red"
            onClick={() => {
    
            }}
            /></Link>
          
        </div>
        <Burger />
      </div>
    </header>
  );
};

export default Header;
