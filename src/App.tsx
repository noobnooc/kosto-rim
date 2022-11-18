import React, { FC } from "react";
import { Announcement } from "./Announcement";
import { Footer } from "./Footer";
import { Home } from "./Home";

export const App: FC = () => {
  return (
    <div className="">
      <Home />
      <Footer />

      <Announcement />
    </div>
  );
};
