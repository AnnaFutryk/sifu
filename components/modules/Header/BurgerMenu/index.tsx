import Button from "../../../common/Buttons/Button";
import LinksList from "../../../common/LinksList";
import PhoneNumber from "../../../common/PhoneNumber";
import { useEffect, useState } from "react";
import CloseSvg from "../../../../../public/icons/close.svg";
import Logo from "../../../common/Logo";
import cls from "./styles.module.scss";
import ModalWindowWithPopupsComponent from "../../ModalWindowWithPopupsComponent";

interface BurgerMenuProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

const BurgerMenu = (props: BurgerMenuProps) => {
  const { setIsMenuOpen } = props;

  const [isModalOpen, setModalOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <div className={cls.menuOverlay} onClick={handleClick}>
        <div className={cls.menuContainer} onClick={handleMenuClick}>
          <div className={cls.logoWrapp}>
            <Logo variant="footer" />
          </div>
          <button className={cls.closeBtn} onClick={handleClick}>
            <CloseSvg className={cls.closeSvg} />
          </button>
          <div className={cls.navWrapper} onClick={handleClick}>
            <LinksList variant="burger" />
          </div>
          <div className={cls.contactContainer}>
            <PhoneNumber variant="burger" />
  
              <Button
                text="Залишити заявку"
                variant="normal"
                color="transparent"
                styles={cls.btn}
                onClick={() => {
                  setModalOpen(true);
                }}
              />
          </div>
        </div>
      </div>
      <ModalWindowWithPopupsComponent isModalOpen={isModalOpen} isPopupOpen={isPopupOpen} isErrorPopupOpen={isErrorPopupOpen} setModalOpen={setModalOpen} setErrorPopupOpen={setErrorPopupOpen} setPopupOpen={setPopupOpen} />
    </>
  );
};

export default BurgerMenu;
