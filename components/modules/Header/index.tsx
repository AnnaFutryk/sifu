"use client";
import logo from "../../../public/images/logo.png";
import { useEffect, useState } from "react";
import cls from "./styles.module.scss";
import Image from "next/image";
import LinksList from "./components/LinksList";
import Button from "@/components/common/Button";
import Link from "next/link";
import DropDown from "./components/DropDown";

const Header = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [isPopupOpen, setPopupOpen] = useState(false);
  // const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);

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
          <DropDown/>
          <Link href="#available">
          <Button
            text="Buy now"
            color="red"
            onClick={() => {
    
            }}
            /></Link>
          
        </div>
        {/* <Burger /> */}
      </div>
    </header>
  );
};

export default Header;
