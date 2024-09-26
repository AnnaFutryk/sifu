import cls from "./styles.module.scss";
import Img1 from "../../../public/icons/block1/img1.svg";
import Img2 from "../../../public/icons/block1/img2.svg";
import Img3 from "../../../public/icons/block1/img3.svg";
import Img4 from "../../../public/icons/block1/img4.svg";
import Img5 from "../../../public/icons/block1/img5.svg";
import Ellipse from "../../../public/icons/ellipse.svg";
import Link from "next/link";

const svgData = [
  {
    img: <Img1 className={cls.svg} />,
    href: "https://store.playstation.com/ru-ua/concept/10001973/",
  },
  {
    img: <Img2 className={cls.svg} />,
    href: "https://store.epicgames.com/en-US/p/sifu",
  },
  {
    img: <Img3 className={cls.svg} />,
    href: "https://www.nintendo.com/us/store/products/sifu-switch/",
  },
  {
    img: <Img4 className={cls.svg} />,
    href: "https://store.steampowered.com/agecheck/app/2138710/",
  },
  {
    img: <Img5 className={cls.svg} />,
    href: "https://www.xbox.com/ru-RU/games/store/sifu/9p7pf6zp3958",
  },
];

interface Props {
  variant: "banner" | "section";
}

const AvailableBlock = (props: Props) => {
  const { variant } = props;

  return (
    <div
      className={variant === "banner" ? cls.wrapper : cls.sectionWrapper}
      id={variant === "section" ? "available" : ""}
    >
      {variant === "section" && <div className={cls.gradient} />}
      {variant === "banner" ? (
        <h2 className={cls.title}>AVAILABLE ON</h2>
      ) : (
        <div className="titleBlock" style={{ position: "relative", zIndex: 2 }}>
          <h2>AVAILABLE</h2>
          <Ellipse />
          <h2 style={{ fontWeight: 100 }}>可用</h2>
        </div>
      )}

      <ul
        className={`${cls.iconsList} ${
          variant === "section" && cls.sectionList
        }`}
      >
        {svgData.map((item, index) => (
          <li key={index}>
            <Link
              className={variant === "banner" ? cls.bannerLink : cls.link}
              href={item.href}
              rel="noopener noreferrer nofollow"
              target={"_blank"}
            >
              {item.img}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableBlock;
