import Container from "../../common/Container";
import AvailableSection from "./components/AvailableSction";
import Banner from "./components/Banner";
import FollowUs from "./components/FollowUs";
import Gallery from "./components/Gallery";
import News from "./components/News";
import NewsLetter from "./components/NewsLetterSection";
import SliderSection from "./components/SliderSection";

const HomeView = () => {
  return (
    <Container>
      <Banner />
      <SliderSection />
      <News />
      <Gallery />
      <AvailableSection />
      <NewsLetter />
      <FollowUs/>
    </Container>
  );
};

export default HomeView;
