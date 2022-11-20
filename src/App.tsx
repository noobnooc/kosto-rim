import React, { FC } from "react";
import { I18NProvider } from "./i18n";
import { Announcement } from "./views/Announcement";
import { Footer } from "./views/Footer";
import { Home } from "./views/Home";

export const App: FC = () => {
  return (
    <I18NProvider>
      <div className="transition-colors dark:bg-black dark:text-white">
        <Home />

        <Footer />
        <Announcement />
      </div>
    </I18NProvider>
  );
};
