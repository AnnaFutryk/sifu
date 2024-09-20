import { useCallback, useEffect} from "react";
import CloseSvg from "../../../../public/icons/close.svg";
import cls from "./styles.module.scss";
import LinksList from "../components/LinksList";
import DropDown from "../components/DropDown";

interface BurgerMenuProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

const BurgerMenu = (props: BurgerMenuProps) => {
  const { setIsMenuOpen } = props;

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMenuOpen(false);
    }
  }, [setIsMenuOpen]);

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
          <button className={cls.closeBtn} onClick={handleClick}>
            <CloseSvg className={cls.closeSvg} />
          </button>
          <div className={cls.navWrapper} onClick={handleClick}>
            <LinksList variant="burger" />
          </div>
          <DropDown/>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
