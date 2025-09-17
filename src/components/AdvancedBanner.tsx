import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import banner from "../images/SOV-20240212-7704-1920.webp"
import React from "react";

export const AdvancedBannerTop = () => {
  const background: BannerLayer = {
    image: banner,
    translateY: [0, 40],
    opacity: [1, 0.3],
    scale: [1.1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const headline: BannerLayer = {
    translateY: [30, 70],
    scale: [1.1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <h1 className={"flex flex-col"}>
        <span className={"text-white text-h1 text-center font-Ubuntu uppercase font-extralight"}>Atrium </span>
        {/*<span className={"text-white text-h2-plus text-center font-Eyesome"}>Staging & Design</span>*/}
      </h1>
    )
  };

  const foreground: BannerLayer = {
    translateY: [50, 80],
    scale: [1.1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <h1 className={"flex flex-col"}>
        {/*<span className={"text-white text-h1 text-center font-Ubuntu uppercase font-extralight"}>Atrium </span>*/}
        <span className={"text-white text-h2-plus text-center font-Eyesome"}>Staging & Design</span>
      </h1>
    )
  };

  // const foreground: BannerLayer = {
    // image:
    //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    // translateY: [0, 40],
    // scale: [1.1, 1, "easeOutCubic"],
    // shouldAlwaysCompleteAnimation: true,
    // children: (
    //   <div className="inset center">
    //     <span className={"text-white text-h1 text-center font-Ubuntu uppercase font-extralight"}>Atrium</span>
    //   </div>
    // )
  // };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      // layers={[background, headline, foreground]}
      className="full"
    />
  );
};
