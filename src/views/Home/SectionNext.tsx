import { Apple } from "@icons-pack/react-simple-icons";
import React, { FC } from "react";
import { useI18N } from "../../i18n";

export const SectionNext: FC = () => {
  const i18n = useI18N();

  return (
    <section id="next" className="dark:bg-indigo-900/10">
      <div className="relative mx-auto max-w-screen-lg px-4 py-16 sm:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {i18n.content?.nextSection.title}
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {i18n.content?.nextSection.summary}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {i18n.content?.nextSection.items.map((item) => {
              return (
                <div
                  key={item.label}
                  className="block rounded-xl border border-gray-100 p-4 shadow-lg shadow-gray-100 transition-all hover:scale-105 hover:border-gray-200 hover:shadow-gray-200 focus:outline-none focus:ring dark:border-gray-500 dark:shadow-none dark:hover:border-gray-300"
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
