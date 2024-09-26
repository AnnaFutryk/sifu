import SocList from "./SocList";
import StudioList from "./StudioList";
import cls from "./styles.module.scss";

const FollowUs = () => {
  return (
    <section className={cls.wrapper}>
      <div className={cls.content}>
        <h2 className={cls.title}>FOLLOW US</h2>
        <SocList />
        <StudioList />
      </div>
    </section>
  );
};

export default FollowUs;
