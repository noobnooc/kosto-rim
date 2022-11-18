import React, { FC, useState } from "react";

const CURRENT_ANNOUNCEMENT_VERSION = 1;

export const Announcement: FC = () => {
  const [showing, hide] = useAnnouncementShowing();

  if (!showing) {
    return <></>;
  }

  return (
    <div className="fixed inset-x-0 bottom-0">
      <div className="relative bg-indigo-600 px-4 py-3 pr-14 text-white">
        <p className="text-left text-sm font-medium sm:text-center">
          Kosto is now on App Store!{" "}
          <a className="underline" href="#">
            {" "}
            Check Out &rarr;{" "}
          </a>
        </p>

        <button
          aria-label="Close"
          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
          onClick={() => {
            hide();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ANNOUNCEMENT_STORAGE_KEY = "hidden-announcement-version";

function useAnnouncementShowing() {
  const hiddenVersion = Number(localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY));

  const [showing, setShowing] = useState(
    hiddenVersion !== CURRENT_ANNOUNCEMENT_VERSION
  );

  return [
    showing,
    () => {
      setShowing(false);
      localStorage.setItem(
        ANNOUNCEMENT_STORAGE_KEY,
        String(CURRENT_ANNOUNCEMENT_VERSION)
      );
    },
  ] as const;
}
