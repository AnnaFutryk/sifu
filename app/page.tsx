
import { Metadata } from "next";
import HomeView from "../components/views/HomeView";

export const metadata: Metadata = {
  title: "SIFU",
  description:
    "Sifu is an action game where you play as a kung-fu master seeking revenge. Each defeat ages the character but unlocks new abilities. The game combines intense combat and strategy, requiring skill and precision",
  keywords: "Sifu game, Kung-fu action game, Sifu combat mechanics ,Sifu Sloclap ,Martial arts revenge game, Sifu aging mechanic ,Sifu gameplay ,Sifu PS5/PC game",
  metadataBase: new URL('https://annafutryk.github.io/sifu/'),
  openGraph: {
    title: "SIFU",
    description: "Sifu is an action game where you play as a kung-fu master seeking revenge. Each defeat ages the character but unlocks new abilities. The game combines intense combat and strategy, requiring skill and precision",
    url: "https://sifu-annafutryks-projects.vercel.app/sifu/",
    images: [
      {
        url: "https://sifu-annafutryks-projects.vercel.app/sifu/images/news.jpg",
        width: 800,
        height: 600,
        alt: "SIFU",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomeView />;
}
