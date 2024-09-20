// "use client";
// import { useState } from "react";
// import MenuSvg from "../../../../../public/icons/menu.svg";
// import BurgerMenu from "../BurgerMenu";
// import cls from "./styles.module.scss";

// const Burger = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const handleBackdropClick = () => {
//     setMenuOpen(false);
//   };
// // 
//   return (
//     <>
//       <button className={cls.burgerBox} onClick={handleMenuClick} aria-label="меню">
//         <MenuSvg className={cls.burgerSvg}/>
//       </button>
//       {isMenuOpen && (
//         <>
//           <div className={cls.overlay} onClick={handleBackdropClick} />
//           <BurgerMenu setIsMenuOpen={setMenuOpen} />
//         </>
//       )}
//     </>
//   );
// };

// export default Burger;
