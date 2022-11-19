import { ArrowRightIcon, RectangleGroupIcon } from "@heroicons/react/24/solid";
import { Apple } from "@icons-pack/react-simple-icons";
import React from "react";

export const zh = {
  announcement: (
    <>
      <span className="mr-1">即将上线 App Store！</span>
      <a
        className="inline-flex translate-y-0.5 items-center border-b hover:opacity-80"
        href="#"
      >
        <Apple className="mr-0.5 -translate-y-px" size={14} />
        加入等待列表
        <ArrowRightIcon className="ml-1 h-3 w-3" />
      </a>
    </>
  ),
  banner: {
    title: (
      <>
        另一个记账 App<br></br>仅此而已
      </>
    ),
    summary:
      "虽然市面上已经有数不胜数的记账应用，但再试试我们又何妨？我们尝试使用简单的功能，灵活地覆盖更多使用场景。",
    showcase: "看看",
    links: [
      {
        label: "博客",
        link: "#",
      },
      {
        label: "关于",
        link: "#",
      },
    ],
  },
  featuresSection: {
    title: "简单, 但也许够用了？",
    summary:
      "很多应用着力于实现越来越多的功能以覆盖更多使用场景。但过于复杂繁多的功能会使一些像我一样的人陷入迷茫。我想要一款功能简单但又灵活的记账应用，于是就有了 Kosto。",
    features: [
      {
        icon: <RectangleGroupIcon className="h-6 w-6" />,
        label: "类别",
        summary: "记录按自定义类别分类",
      },
      {
        icon: <RectangleGroupIcon className="h-6 w-6" />,
        label: "类别",
        summary: "记录按自定义类别分类",
      },
      {
        icon: <RectangleGroupIcon className="h-6 w-6" />,
        label: "类别",
        summary: "记录按自定义类别分类",
      },
      {
        icon: <RectangleGroupIcon className="h-6 w-6" />,
        label: "类别",
        summary: "记录按自定义类别分类",
      },
    ],
  },
  faq: {
    label: "常见问题",
    questions: [
      {
        q: "已经有这么多记账应用了，为什么你们还要做一个?",
        a: "在试用了很多记账应用后，发现大部分应用都不是没有满足自己的需求，而是有太多在自己需求之外的功能，导致使用起来心智负担会变大。于是作为程序员的我决定自己做一个，如果能顺便能满足其他人的要求那就更好了。",
      },
      {
        q: "已经有这么多记账应用了，为什么你们还要做一个?",
        a: "在试用了很多记账应用后，发现大部分应用都不是没有满足自己的需求，而是有太多在自己需求之外的功能，导致使用起来心智负担会变大。于是作为程序员的我决定自己做一个，如果能顺便能满足其他人的要求那就更好了。",
      },
      {
        q: "已经有这么多记账应用了，为什么你们还要做一个?",
        a: "在试用了很多记账应用后，发现大部分应用都不是没有满足自己的需求，而是有太多在自己需求之外的功能，导致使用起来心智负担会变大。于是作为程序员的我决定自己做一个，如果能顺便能满足其他人的要求那就更好了。",
      },
    ],
  },
  footer: {
    bio: "站在存在主义与虚无主义中间的理想主义者。",
    links: [
      {
        label: "作者",
        link: "https://nooc.ink",
      },
      {
        label: "博客",
        link: "#",
      },
      {
        label: "隐私政策",
        link: "#",
      },
      {
        label: "关于",
        link: "#",
      },
    ],
  },
};
