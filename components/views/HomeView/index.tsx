import Container from "../../common/Container";
import Banner from "./components/Banner";
import News from "./components/News";
import SliderSection from "./components/SliderSection";

const HomeView = () => {
  return (
    <Container>
          <Banner />
      <SliderSection />
      <News/>
    </Container>
  );
};

export default HomeView;
