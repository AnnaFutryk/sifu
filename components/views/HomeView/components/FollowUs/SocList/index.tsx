import cls from "./styles.module.scss";
import Facebook from "../../../../../../public/icons/soclist/facebook.svg";
import Twitter from "../../../../../../public/icons/soclist/twitter.svg";
import Utube from "../../../../../../public/icons/soclist/utube.svg";
import Reddit from "../../../../../../public/icons/soclist/reddit.svg";
import Link from "next/link";

const data = [
  {
    svg: <Facebook className={cls.svg} />,
    href: "https://www.facebook.com/SifuGame",
  },
  {
    svg: <Twitter className={cls.svg} />,
    href: "https://x.com/SifuGame",
  },
  {
    svg: <Utube className={cls.svg} />,
    href: "https://www.youtube.com/c/Sloclap/videos",
  },
  {
    svg: <Reddit className={cls.svg} />,
    href: "https://www.reddit.com/r/SifuGame/",
  },
];

const SocList = () => {
  return (
    <ul className={cls.list}>
      {data.map(({ href, svg }, index) => (
        <li key={index}>
          <Link
            href={href}
            rel="noopener noreferrer nofollow"
            target={"_blank"}
          >
            {svg}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocList;
