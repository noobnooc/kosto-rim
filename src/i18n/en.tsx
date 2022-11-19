import {
  ArrowRightIcon,
  LockClosedIcon,
  NewspaperIcon,
  SwatchIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
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
      "We are not target on that to make a fully armed accounting app. We just want to craft a simple app what ourself needed, and maybe you need it too.",
    appStore: "App Store",
    showcase: "Show Me",
    links: [
      {
        label: "Features",
        link: "#features",
      },
      {
        label: "About",
        link: "#about",
      },
    ],
  },
  featuresSection: {
    title: "Simple, and flexible.",
    summary:
      "What would we expect in an accounting app? Accounts, categories, records, that's all. Pair that with out-of-box charts, local data storage, and optional cloud syncing, and it's even more perfect. — Nobody",
    appStore: "App Store",
    features: [
      {
        icon: <TagIcon className="h-6 w-6" />,
        label: "Simple",
        summary: "Accounts, Categories, Records, That's all.",
      },
      {
        icon: <SwatchIcon className="h-6 w-6" />,
        label: "Flexible",
        summary:
          "Record cost, Manage subscriptions, Analyze budget, And more possibilities.",
      },
      {
        icon: <NewspaperIcon className="h-6 w-6" />,
        label: "Visualization",
        summary: "Pie, Bar, Tree, And more charts to analyze your records.",
      },
      {
        icon: <LockClosedIcon className="h-6 w-6" />,
        label: "Secure",
        summary:
          "Completely local, iCloud Sync, Authentication ... Your data are yours.",
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
  about: {
    title: "About",
    subtitle: "Craft Simple, Flexible, Powerful apps.",
    appName: "Kosto",
    appURL: "https://kosto.nooc.ink",
    summary:
      "A simple and flexible accounting app on iOS. There is simple and clear user interface, and a lot of powerful out-of-box charts. The data are stored completely locally, but with optional iCloud sync.",
  },
  cta: {
    title: "Want to have a try?",
    subtitle: "Get it on App Store now.",
    appStore: "App Store",
    learnMore: "Learn More",
  },
  footer: {
    bio: "An idealist standing between existentialism and nihilism.",
    links: [
      {
        label: "Author",
        link: "https://nooc.ink",
      },
      {
        label: "About",
        link: "#about",
      },
      {
        label: "Privacy",
        link: "#",
      },
    ],
  },
};
