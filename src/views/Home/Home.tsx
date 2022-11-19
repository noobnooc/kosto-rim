import React, { FC } from "react";
import About from "./About";
import Banner from "./Banner";
import CTA from "./CTA";
import { FAQ } from "./FAQ";
import { SectionFeatures } from "./SectionFeatures";

export const Home: FC = () => {
  return (
    <div className="">
      <Banner />
      <SectionFeatures />
      <FAQ />
      <About />
      <CTA />
    </div>
  );
};
