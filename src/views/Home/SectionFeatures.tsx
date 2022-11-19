import React, { FC } from "react";
import { useI18N } from "../../i18n";

export const SectionFeatures: FC = () => {
  const i18n = useI18N();

  return (
    <section id="features">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {i18n.content?.featuresSection.title}
            </h2>

            <p className="mt-4 text-gray-600">
              {i18n.content?.featuresSection.summary}
            </p>

            <a
              className="mt-8 inline-flex items-center rounded border border-indigo-500 bg-indigo-500 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="/get-started"
            >
              <span className="text-sm font-medium"> Get Started </span>

              <svg
                className="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {i18n.content?.featuresSection.features.map((feature) => {
              return (
                <a
                  key={feature.label}
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="#"
                >
                  <div className="flex items-center sm:block">
                    <span className="mr-3 inline-block rounded-lg bg-gray-50 p-1 sm:p-3">
                      {feature.icon}
                    </span>

                    <h2 className="font-bold sm:mt-2">{feature.label}</h2>
                  </div>

                  <p className="mt-1 block text-sm text-gray-600">
                    {feature.summary}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
