import React, { FC } from "react";
import About from "./About";
import Banner from "./Banner";
import CTA from "./CTA";
import { FAQ } from "./FAQ";
import { SectionFeatures } from "./SectionFeatures";
import { SectionFlexible } from "./SectionFlexible";
import { SectionNext } from "./SectionNext";
import { SectionSecure } from "./SectionSecure";
import { SectionSimple } from "./SectionSimple";
import { SectionVisualization } from "./SectionVisualization";

export const Home: FC = () => {
  return (
    <div className="">
      <Banner />
      <SectionFeatures />
      <SectionSimple />
      <SectionFlexible />
      <SectionVisualization />
      <SectionSecure />
      <SectionNext />
      <FAQ />
      <About />
      <CTA />
    </div>
  );
};
