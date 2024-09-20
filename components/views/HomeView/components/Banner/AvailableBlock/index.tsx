import cls from "./styles.module.scss";
import Img1 from "../../../../../../public/icons/block1/img1.svg";
import Img2 from "../../../../../../public/icons/block1/img2.svg";
import Img3 from "../../../../../../public/icons/block1/img3.svg";
import Img4 from "../../../../../../public/icons/block1/img4.svg";
import Img5 from "../../../../../../public/icons/block1/img5.svg";
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

const AvailableBlock = () => {
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>AVAILABLE ON</h1>
      <ul className={cls.iconsList}>
        {svgData.map((item, index) => (
          <li key={index}>
            <Link
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
