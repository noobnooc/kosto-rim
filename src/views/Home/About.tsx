import React from "react";
import { useI18N } from "../../i18n";
import appIconURL from "../../assets/app-icon.png";
import { ReactComponent as TwitterVerified } from "../../assets/twitter-verified.svg";

export default function About() {
  const i18n = useI18N();

  return (
    <div
      id="about"
      className="relative bg-cover bg-center bg-no-repeat dark:bg-indigo-900/10"
    >
      <div className="relative mx-auto max-w-screen-lg px-4 py-16 sm:py-32 sm:px-6 lg:h-screen lg:items-center lg:px-8">
        <h1 className="mb-5 items-baseline text-3xl font-extrabold sm:flex sm:text-5xl">
          {i18n.content?.about.title}
          <p className="mt-4 text-sm text-gray-400 sm:ml-5">
            {i18n.content?.about.subtitle}
          </p>
        </h1>
        <div className="mt-20 flex flex-col items-center sm:mt-40">
          <img
            className="w-14 rounded-xl sm:w-20 sm:rounded-2xl"
            src={appIconURL}
            alt="App Icon"
            aria-hidden
          />
          <p className="relative mt-5 text-2xl">
            {i18n.content?.about.appName}
            <TwitterVerified className="absolute top-0 bottom-0 -right-8 my-auto h-6 w-6" />
          </p>
          <a
            className="block text-gray-700 dark:text-gray-400"
            href={i18n.content?.about.appURL}
          >
            {i18n.content?.about.appURL}
          </a>
          <p className="mt-5 max-w-sm text-gray-500 dark:text-gray-300">
            {i18n.content?.about.summary}
          </p>
        </div>
      </div>
    </div>
  );
}
