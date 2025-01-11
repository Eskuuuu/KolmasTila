// homepage for our app
import React from "react";
import VideoHero from "../Components/herot/videohero";
import Carouselshow from "../Components/carousel/carousel";
import Empty from "../Components/empty/empty";
import InstagramFeed from "../Components/feed/feed";
import Header from "../Components/feed/feedheader";

export default function Home() {
  return (
    <div>
      <div>
        <VideoHero />
      </div>
      <Empty />
      <div id="info">
        <Header
          text={"Mikä kolmas tila?"}
          textColor={"var(--secondary-color"}
        />
        <Carouselshow />
        <Empty />
        <Empty />
        <Header text={"Nuorten tarinat"} />
        <InstagramFeed />
      </div>
    </div>
  );
}
