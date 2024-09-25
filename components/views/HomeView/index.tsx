import Container from "../../common/Container";
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
      <Gallery/>
    </Container>
  );
};

export default HomeView;
