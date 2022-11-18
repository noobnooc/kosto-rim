import React, { FC } from "react";
import { Banner } from "./Banner";
import { FAQ } from "./FAQ";
import { Section1 } from "./Section1";

export const Home: FC = () => {
  return (
    <div className="">
      <Banner />
      <Section1 />
      <FAQ />
    </div>
  );
};
