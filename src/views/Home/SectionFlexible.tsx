import React, { FC } from "react";
import { useI18N } from "../../i18n";

export const SectionFlexible: FC = () => {
  const i18n = useI18N();

  return (
    <section
      id="flexible"
      className="relative isolate overflow-hidden bg-blue-50 bg-cover bg-center bg-no-repeat dark:bg-indigo-400/10"
    >
      <div className="absolute inset-x-0 top-[-10rem] -z-10 translate-y-80 rotate-45 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
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
      <div className="relative mx-auto max-w-screen-lg px-4 py-16 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {i18n.content?.flexibleSection.title}
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {i18n.content?.flexibleSection.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {i18n.content?.flexibleSection.items.map((item) => {
              return (
                <div
                  key={item.label}
                  className="block rounded-xl border border-gray-200 bg-white p-4 shadow-lg shadow-gray-400/10 transition-all hover:scale-105 hover:border-gray-200 hover:shadow-gray-400/20 focus:outline-none focus:ring dark:border-gray-500 dark:bg-black/20 dark:shadow-none dark:hover:border-gray-300"
                >
                  <div className="flex items-center sm:block">
                    <span className="mr-3 inline-block rounded-lg bg-gray-100 p-1 dark:bg-neutral-900/40 sm:p-3">
                      {item.icon}
                    </span>

                    <h2 className="font-bold sm:mt-2">{item.label}</h2>
                  </div>

                  <p className="mt-1 block text-sm text-gray-600 dark:text-gray-400">
                    {item.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
