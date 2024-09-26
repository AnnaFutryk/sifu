"use client";

import cls from "./styles.module.scss";
import Ellipse from "../../../../../public/icons/ellipse.svg";
import { useState } from "react";
import Tabs from "./Tabs";
import GallerySlider from "./GallerySlider";

const Gallery = () => {
  const [activeButton, setActiveButton] = useState<number | null>(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  const renderComponent = () => {
    switch (activeButton) {
      case 0:
        return <GallerySlider/>;
      case 1:
        return <p>Video</p>;
      default:
        return null;
    }
  };

  return (
    <section className={cls.wrapper}>
      <div className={cls.titleAndTab}>
        <div className="titleBlock">
          <h2>GALLERY</h2>
          <Ellipse />
          <h2 style={{ fontWeight: 100 }}>艺术</h2>
        </div>
        <div>
          <div className={cls.tabsWrapper}>
            <Tabs
              activeButton={activeButton}
              handleButtonClick={handleButtonClick}
            />
            <hr className={cls.hr} />
          </div>
        </div>
      </div>
      {renderComponent()}
    </section>
  );
};

export default Gallery;
