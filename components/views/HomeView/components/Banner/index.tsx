import Image from "next/image";
import logo from "../../../../../public/images/logo2.png";
import man from "../../../../../public/images/man1.png";
import cls from "./styles.module.scss";
import AvailableBlock from "../../../../common/AvailableBlock";

const Banner = () => {
  return (
    <section>
      <div className={cls.background}>
        <div className="container">
          <div className={cls.imgWrapp}>
            <Image src={logo} alt="logo" sizes="100vh" className="img" />
          </div>
          <div className={cls.imgMan}>
            <Image src={man} alt="man" sizes="100vh" className="img" />
          </div>
        </div>
      <AvailableBlock variant="banner"/>
      </div>
    </section>
  );
};

export default Banner;
