import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Apple } from "@icons-pack/react-simple-icons";
import React from "react";

export const en = {
  announcement: (
    <>
      <span className="mr-1">Coming soon to the App Store.</span>
      <a
        className=" inline-flex translate-y-0.5 items-center border-b hover:opacity-80"
        href="#"
      >
        <Apple className="mr-0.5 -translate-y-px" size={14} />
        Join Wait List
        <ArrowRightIcon className="ml-1 h-3 w-3" />
      </a>
    </>
  ),
};
