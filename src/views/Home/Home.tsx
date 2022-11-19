import React, { FC } from "react";
import Banner from "./Banner";
import { FAQ } from "./FAQ";
import { SectionFeatures } from "./SectionFeatures";

export const Home: FC = () => {
  return (
    <div className="">
      <Banner />
      <SectionFeatures />
      <FAQ />
    </div>
  );
};
