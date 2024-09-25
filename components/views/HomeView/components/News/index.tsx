import Image from "next/image";
import Ellipse from "../../../../../public/icons/ellipse.svg";
import newsImg from "../../../../../public/images/newsImg.png";
import Svg from "../../../../../public/icons/chevron.svg";
import cls from "./styles.module.scss";
import Link from "next/link";
import NewsList from "./NewsList";

const News = () => {
  return (
    <section className={cls.wrapper}>
      <div className="titleBlock">
        <h2>LATEST NEWS</h2>
        <Ellipse />
        <h2 style={{fontWeight:100}}>消息</h2>
      </div>
      <div className={cls.content}>
        <div className={cls.leftBlock}>
          <div className={cls.imageWrapp}>
            <Image src={newsImg} alt="image" sizes="100vh" className="img" />
          </div>
          <p className={cls.date}>March 28, 2023</p>
          <h3 className={cls.newsTitle}>
            PATCH 1.19 & 1.20 - ARENAS & DAY 1 PATCH
          </h3>
          <p className={cls.descr}>
            Sifu is finally on Steam and Xbox, and the Arenas update is here!
          </p>
          <Link href={"/"} className={cls.link}>
            <p className={cls.linktxt}>READ MORE</p>
            <Svg />
          </Link>
        </div>
                  <NewsList/>
      </div>
    </section>
  );
};

export default News;
