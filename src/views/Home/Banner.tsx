/* This example requires Tailwind CSS v3.0+ */
import React from "react";
import appIconURL from "../../assets/app-icon.png";
import { Apple } from "@icons-pack/react-simple-icons";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useI18N } from "../../i18n";
import { ReactComponent as TwitterVerified } from "../../assets/twitter-verified.svg";

export default function Banner() {
  const i18n = useI18N();

  return (
    <div className="isolate dark:bg-indigo-900/10">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B1B2FF" />
              <stop offset={1} stopColor="#AAC4FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a
                href="#"
                className="relative -m-1.5 inline-flex items-center p-1.5"
              >
                <img
                  className="h-8 w-8 rounded-lg sm:h-12 sm:w-12"
                  src={appIconURL}
                />
                <span className="ml-2 text-lg font-bold sm:ml-4 sm:text-xl">
                  {i18n.content?.appName}
                </span>
                <TwitterVerified className="absolute top-0 bottom-0 -right-5 my-auto h-5 w-5 sm:-right-6 sm:h-6 sm:w-6" />
              </a>
            </div>
            <div className="flex min-w-0 flex-1 justify-end gap-x-5 sm:gap-x-12 lg:justify-center">
              {i18n.content?.banner.links.map((link) => (
                <a
                  key={link.label}
                  href={link.link}
                  className="font-semibold text-gray-900 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 transition-colors hover:ring-gray-900/20 dark:ring-gray-400/20 dark:hover:ring-gray-400/40">
                  <span className="text-gray-600 dark:text-gray-400">
                    {i18n.content?.announcement}
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  {i18n.content?.banner.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-500 sm:text-center">
                  {i18n.content?.banner.summary}
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href={i18n.content?.appStoreURL}
                    className="inline-flex items-center rounded-lg bg-indigo-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-500 transition-colors hover:bg-indigo-600 hover:ring-indigo-600"
                  >
                    <Apple className="mx-1 -translate-y-0.5" size={20} />
                    {i18n.content?.banner.appStore}
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-100 dark:ring-gray-100/20 dark:hover:ring-gray-100/50"
                  >
                    {i18n.content?.banner.showcase}
                    <ArrowRightIcon
                      className="ml-1 h-4 w-4 text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-x-hidden blur-3xl dark:hidden sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B1B2FF" />
                      <stop offset={1} stopColor="#AAC4FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
