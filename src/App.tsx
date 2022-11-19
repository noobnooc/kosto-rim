import React, { FC } from "react";
import { Announcement } from "./views/Announcement";
import { Footer } from "./views/Footer";
import { Home } from "./views/Home";

export const App: FC = () => {
  return (
    <div className="">
      <Home />

      <Footer />
      <Announcement />
    </div>
  );
};
