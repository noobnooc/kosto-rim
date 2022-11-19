import { Apple } from "@icons-pack/react-simple-icons";
import React from "react";
import { useI18N } from "../../i18n";

export default function CTA() {
  const i18n = useI18N();

  return (
    <div className=" bg-indigo-50 dark:bg-indigo-400/10">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
          <span className="block">{i18n.content?.cta.title}</span>
          <span className="block text-indigo-500">
            {i18n.content?.cta.subtitle}
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-xl shadow-lg shadow-indigo-100 dark:shadow-none">
            <a
              href={i18n.content?.appStoreURL}
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-600"
            >
              <Apple className="mx-1 -translate-y-0.5" size={20} />
              {i18n.content?.cta.appStore}
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-xl shadow-lg shadow-indigo-100 dark:shadow-none">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-500 transition-colors hover:bg-indigo-50 hover:ring-1 hover:ring-indigo-500"
            >
              {i18n.content?.cta.learnMore}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
