import cls from "./styles.module.scss";
import Svg1 from "../../../../../../public/icons/studioList/svg1.svg";
import Svg2 from "../../../../../../public/icons/studioList/svg2.svg";
import Svg3 from "../../../../../../public/icons/studioList/svg3.svg";
import Link from "next/link";

const data = [
  {
    svg: <Svg1 className={cls.svg} />,
    href: "https://sloclap.com/en",
  },
  {
    svg: <Svg2 className={cls.svg} />,
    href: "https://kepler-interactive.com/",
  },
  {
    svg: <Svg3 className={cls.svg} />,
    href: "https://www.unrealengine.com/en-US",
  },
];

const StudioList = () => {
  return (
    <ul className={cls.list}>
      {data.map(({ href, svg }, index) => (
        <li key={index}>
          <Link
            href={href}
            rel="noopener noreferrer nofollow"
            target={"_blank"}
            className={cls.link}
          >
            {svg}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StudioList;
