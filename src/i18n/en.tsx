import { ArrowRightIcon, RectangleGroupIcon } from "@heroicons/react/24/solid";
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
  banner: {
    title: "Just Another Accounting App",
    summary:
      "I know there are countless account apps out there, but why not give me a try?",
    showcase: "Show Me",
    links: [
      {
        label: "Blog",
        link: "#",
      },
      {
        label: "About",
        link: "#",
      },
    ],
  },
  featuresSection: {
    title: "It's simple, but maybe enough?",
    summary:
      "Some apps want that all the functions has been contained in it. But it's too much to brain for some people like me. We want an accounting app to keep simple, but flexible and powerful. Therefore there is Kosto.",
    features: [
      {
        icon: <RectangleGroupIcon className="h-6 w-6" />,
        label: "Categories",
        summary: "Categorize records",
      },
      {
        icon: <RectangleGroupIcon className="h-6 w-6" />,
        label: "Categories",
        summary: "Categorize records",
      },
      {
        icon: <RectangleGroupIcon className="h-6 w-6" />,
        label: "Categories",
        summary: "Categorize records",
      },
      {
        icon: <RectangleGroupIcon className="h-6 w-6" />,
        label: "Categories",
        summary: "Categorize records",
      },
    ],
  },
  faq: {
    label: "FAQ",
    questions: [
      {
        q: " Why there are countless accounting apps still have to try Kosto?",
        a: "Some apps want that all the functions has been contained in it. But it's too much to brain for some people like me. We want an accounting app to keep simple, but flexible and powerful. Therefore there is Kosto.",
      },
      {
        q: " Why there are countless accounting apps still have to try Kosto?",
        a: "Some apps want that all the functions has been contained in it. But it's too much to brain for some people like me. We want an accounting app to keep simple, but flexible and powerful. Therefore there is Kosto.",
      },
      {
        q: " Why there are countless accounting apps still have to try Kosto?",
        a: "Some apps want that all the functions has been contained in it. But it's too much to brain for some people like me. We want an accounting app to keep simple, but flexible and powerful. Therefore there is Kosto.",
      },
    ],
  },
  footer: {
    bio: "An idealist standing between existentialism and nihilism.",
    links: [
      {
        label: "Author",
        link: "https://nooc.ink",
      },
      {
        label: "Blog",
        link: "#",
      },
      {
        label: "Privacy",
        link: "#",
      },
      {
        label: "About",
        link: "#",
      },
    ],
  },
};
