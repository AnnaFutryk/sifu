import cls from "./stules.module.scss";

const tabName = [
  {
    name: "PHOTOS",
    subname: "_相片",
  },
  {
    name: "VIDEOS",
    subname: "_影片",
  },
];

interface Props {
  activeButton: number | null;
  handleButtonClick: (index: number) => void;
}

const Tabs = (props: Props) => {
  const { activeButton, handleButtonClick } = props;

  const handleClick = (index: number) => {
    handleButtonClick(index);
  };

  return (
    <div className={cls.btnsWrapp}>
      {tabName.map(({ name, subname }, index) => (
        <button
          key={index}
          type="button"
          className={`${cls.btn} ${activeButton === index ? cls.active : ""}`}
          onClick={() => handleClick(index)}
        >
          {name} <span style={{fontWeight:100}}>{subname}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
