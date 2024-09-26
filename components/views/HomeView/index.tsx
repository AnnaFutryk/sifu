import Container from "../../common/Container";
import AvailableSection from "./components/AvailableSction";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import News from "./components/News";
import SliderSection from "./components/SliderSection";

const HomeView = () => {
  return (
    <Container>
      <Banner />
      <SliderSection />
      <News />
      <Gallery />
      <AvailableSection />
    </Container>
  );
};

export default HomeView;
