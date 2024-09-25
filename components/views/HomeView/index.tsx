import Container from "../../common/Container";
import Banner from "./components/Banner";
import SliderSection from "./components/SliderSection";

const HomeView = () => {
  return (
    <Container>
          <Banner />
          <SliderSection/>
    </Container>
  );
};

export default HomeView;
