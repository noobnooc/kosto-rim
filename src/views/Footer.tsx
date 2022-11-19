import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import React, { FC } from "react";
import { useI18N } from "../i18n";

export const Footer: FC = () => {
  const i18n = useI18N();

  return (
    <footer aria-label="Site Footer" className="">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <svg
            className="opacity-50"
            width="35px"
            viewBox="0 0 291 249"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Nooc"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Avatar-Template"
                transform="translate(-54.000000, -54.000000)"
                className="fill-indigo-700"
              >
                <path
                  d="M199.5,54 C279.857431,54 345,119.142569 345,199.5 C345,239.745848 328.65989,276.17526 302.25197,302.515935 L199,199.264935 L96.249446,302.016217 C70.1345949,275.715474 54,239.491955 54,199.5 C54,119.142569 119.142569,54 199.5,54 Z"
                  id="Sun"
                ></path>
              </g>
            </g>
          </svg>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          {i18n.content?.footer.bio}
        </p>

        <nav aria-label="Footer Nav" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {i18n.content?.footer.links.map((link) => {
              return (
                <li key={link.label}>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href={link.link}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.instagram.com/noobnooc/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" aria-hidden />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/noobnooc"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" aria-hidden />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/noobnooc/kosto-rim"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
