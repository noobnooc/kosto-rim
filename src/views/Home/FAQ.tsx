import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { useI18N } from "../../i18n";

export const FAQ: FC = () => {
  const i18n = useI18N();

  return (
    <div className="relative bg-indigo-50 bg-cover bg-center bg-no-repeat">
      <div className="relative mx-auto max-w-screen-lg px-4 py-16 sm:py-32 sm:px-6 lg:h-screen lg:items-center lg:px-8">
        <h1 className="mb-5 text-3xl font-extrabold sm:text-5xl">
          {i18n.content?.faq.label}
        </h1>
        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {i18n.content?.faq.questions.map((question, index) => {
            return (
              <details
                key={question.q}
                className="group p-6"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    {question.q}
                  </h2>

                  <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                    <ChevronLeftIcon className="h-5 w-5 transition-transform group-open:-rotate-90" />
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {question.a}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
};
