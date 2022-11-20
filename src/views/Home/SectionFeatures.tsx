import { Apple } from "@icons-pack/react-simple-icons";
import React, { FC } from "react";
import { useI18N } from "../../i18n";

export const SectionFeatures: FC = () => {
  const i18n = useI18N();

  return (
    <section
      id="features"
      className="isolate bg-gradient-to-b from-indigo-50/0 to-indigo-50 dark:from-indigo-900/10 dark:to-indigo-400/10"
    >
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {i18n.content?.featuresSection.title}
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {i18n.content?.featuresSection.summary}
            </p>
            <a
              className="shadow-gray-10 mt-8 inline-flex items-center rounded-xl border border-indigo-500 bg-indigo-500 px-8 py-3 text-white shadow-lg transition-colors hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
              href={i18n.content?.appStoreURL}
            >
              <Apple className="mx-1 -translate-y-0.5" size={20} />
              {i18n.content?.featuresSection.appStore}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {i18n.content?.featuresSection.features.map((feature) => {
              return (
                <a
                  key={feature.label}
                  className="block rounded-xl border border-gray-100 bg-white p-4 shadow-lg shadow-gray-400/10 transition-all hover:scale-105 hover:border-gray-200 hover:shadow-gray-400/20 focus:outline-none focus:ring dark:border-gray-500 dark:bg-black/20 dark:shadow-none dark:hover:border-gray-300"
                  href={feature.link}
                >
                  <div className="flex items-center sm:block">
                    <span className="mr-3 inline-block rounded-lg bg-gray-100 p-1 dark:bg-neutral-900/40 sm:p-3">
                      {feature.icon}
                    </span>

                    <h2 className="font-bold sm:mt-2">{feature.label}</h2>
                  </div>

                  <p className="mt-1 block text-sm text-gray-600 dark:text-gray-400">
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
