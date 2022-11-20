import {
  ArrowPathRoundedSquareIcon,
  ArrowTrendingDownIcon,
  Bars3BottomRightIcon,
  ChartBarIcon,
  ChartPieIcon,
  CloudIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  CurrencyEuroIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  FingerPrintIcon,
  FolderOpenIcon,
  FunnelIcon,
  HandRaisedIcon,
  HeartIcon,
  LockClosedIcon,
  SquaresPlusIcon,
  SwatchIcon,
  TagIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export const en = {
  appName: "Kosto",
  appStoreURL: undefined,
  announcement: (
    <>
      <span className="">
        Coming soon to App Store!
        <span className="mx-1 opacity-50">(Folder created)</span>
      </span>
    </>
  ),
  banner: {
    title: "Just Another Accounting App",
    summary:
      "Just like the name ('Cost' in Esperanto), it's an accounting app that only cares about costs, but not only that. Hope you will like it, if not, that's ok.",
    appStore: "Coming Soon",
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
    summary: (
      <>
        What would we expect in an accounting app? Accounts, categories,
        records, that&apos;s all. Pair that with out-of-box charts, local data
        storage, and optional cloud syncing, and it&apos;s even more perfect.{" "}
        <br /> — Nobody
      </>
    ),
    appStore: "Coming Soon",
    features: [
      {
        icon: <TagIcon className="h-6 w-6 text-yellow-500" />,
        label: "Simple",
        link: "#simple",
        summary: "Accounts, Categories, Records, That's all.",
      },
      {
        icon: <SwatchIcon className="h-6 w-6 text-blue-500" />,
        label: "Flexible",
        link: "#flexible",
        summary:
          "Record cost, Manage subscriptions, Analyze budget, And more possibilities.",
      },
      {
        icon: <ChartPieIcon className="h-6 w-6 text-red-500" />,
        label: "Visualization",
        link: "#visualization",
        summary: "Pie, Bar, Tree, And more charts to analyze your records.",
      },
      {
        icon: <LockClosedIcon className="h-6 w-6 text-green-500" />,
        label: "Secure",
        link: "#secure",
        summary:
          "Completely local, iCloud Sync, Authentication ... Your data are yours.",
      },
    ],
  },
  simpleSection: {
    title: "Less is more",
    summary:
      "If you are like us and often feel overwhelmed by the dazzling buttons after opening an app, you can give Kosto a try.",
    items: [
      {
        icon: <FolderOpenIcon className="h-6 w-6 text-yellow-500" />,
        label: "Accounts",
        summary: "Collect all related records to an account.",
      },
      {
        icon: <SquaresPlusIcon className="h-6 w-6 text-yellow-500" />,
        label: "Categories",
        summary:
          "Use categories to distinguish different records for easy analysis。",
      },
      {
        icon: <DocumentTextIcon className="h-6 w-6 text-yellow-500" />,
        label: "Records",
        summary: "Records...just records.",
      },
      {
        icon: <Cog6ToothIcon className="h-6 w-6 text-yellow-500" />,
        label: "More Tools",
        summary:
          "Of course it's not all, but other tools don't need to care too much, just use theme.",
      },
    ],
  },
  flexibleSection: {
    title: "Do more things with less tools",
    summary: "Do more things with less tools",
    items: [
      {
        icon: <DocumentTextIcon className="h-6 w-6 text-blue-500" />,
        label: "Record Costs",
        summary: "Records all your costs, and analyze theme.",
      },
      {
        icon: <ArrowPathRoundedSquareIcon className="h-6 w-6 text-blue-500" />,
        label: "Manage Subscriptions",
        summary:
          "Add continuous records to reveal subscriptions cost per month.",
      },
      {
        icon: <ArrowTrendingDownIcon className="h-6 w-6 text-blue-500" />,
        label: "Analyze Budget",
        summary:
          "Add budget records, and analyze theme through a lot of charts.",
      },
      {
        icon: <CursorArrowRaysIcon className="h-6 w-6 text-blue-500" />,
        label: "Explore More",
        summary: "Maybe you can explore more scenes.",
      },
    ],
  },
  visualizationSection: {
    title: "Chart theme",
    summary: "Chart theme",
    items: [
      {
        icon: <ChartPieIcon className="h-6 w-6 text-red-500" />,
        label: "Pie Charts",
        summary:
          "Pie charts about different categories costs, and more others.",
      },
      {
        icon: <ChartBarIcon className="h-6 w-6 text-red-500" />,
        label: "Bar Charts",
        summary: "Bar charts for costs per month, and more others.",
      },
      {
        icon: <Bars3BottomRightIcon className="h-6 w-6 text-red-500" />,
        label: "Tree Charts",
        summary:
          "Tree charts for categories and subcategories costs, and more others.",
      },
      {
        icon: <FunnelIcon className="h-6 w-6 text-red-500" />,
        label: "More Charts",
        summary: "There are a lot of other charts, go to check out.",
      },
    ],
  },
  secureSection: {
    title: "Your data is yours",
    summary: "Your data is yours",
    items: [
      {
        icon: <DevicePhoneMobileIcon className="h-6 w-6 text-green-500" />,
        label: "Stored Locally",
        summary:
          "All the data are stored locally, we don't even have a server.",
      },
      {
        icon: <CloudIcon className="h-6 w-6 text-green-500" />,
        label: "iCloud Sync",
        summary: "Optional iCloud Sync, handled by Apple.",
      },
      {
        icon: <FingerPrintIcon className="h-6 w-6 text-green-500" />,
        label: "Authentication",
        summary: "Keep your data safe with TouchID or FaceID.",
      },
      {
        icon: <WrenchScrewdriverIcon className="h-6 w-6 text-green-500" />,
        label: "More",
        summary: "Data encryption, snapshot backup and more.",
      },
    ],
  },
  nextSection: {
    title: "What's Next",
    summary: "",
    items: [
      {
        icon: <HandRaisedIcon className="h-6 w-6 text-orange-500" />,
        label: "Apple Watch",
        summary: "Support for Apple Watch.",
      },
      {
        icon: <ComputerDesktopIcon className="h-6 w-6 text-lime-500" />,
        label: "Mac",
        summary: "Native support for macOS.",
      },
      {
        icon: <CurrencyEuroIcon className="h-6 w-6 text-cyan-500" />,
        label: "Currency converting?",
        summary: (
          <>
            Automatically convert currencies.
            <span className="mx-2 opacity-60">(MAYBE NOT)</span>
          </>
        ),
      },
      {
        icon: <HeartIcon className="h-6 w-6 text-rose-500" />,
        label: "More",
        summary: "And more functions that you can touch us.",
      },
    ],
  },
  faq: {
    label: "FAQ",
    questions: [
      {
        q: "What kind of app is Kosto?",
        a: "Kosto is an accounting app that only cases about costs. Like the name, kosto means cost in Esperanto.",
      },
      {
        q: "Why there are countless accounting apps still have to try Kosto?",
        a: "Some apps want that all the functions has been contained in it. But it's too much to brain for some people like me. We want an accounting app to keep simple, but flexible and powerful. Therefore there is Kosto.",
      },
      {
        q: "Can I get a long-term license for Kosto?",
        a: "We support purchase a long-term license currently, but maybe it will be canceled in future. Don't worry, the purchased will be valid forever.",
      },
    ],
  },
  about: {
    title: "About",
    subtitle: "Craft Simple, Flexible, Powerful apps.",
    appName: "Kosto",
    appURL: "https://kosto.nooc.ink",
    summary:
      "Kosto is a simple and flexible accounting app on iOS that only cares about costs. There is simple and clear user interface, and a lot of powerful out-of-box charts. The data are stored completely locally, but with optional iCloud sync.",
  },
  cta: {
    title: "Want to have a try?",
    subtitle: "Get it on App Store now.",
    appStore: "Coming Soon",
    learnMore: "Learn More",
  },
  footer: {
    bio: "An idealist between existentialism and nihilism.",
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
        label: "中文",
        link: "?lang=zh",
      },
    ],
  },
};
