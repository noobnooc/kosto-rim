import {
  ArrowRightIcon,
  LockClosedIcon,
  NewspaperIcon,
  SwatchIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
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
    title: <>又又又一款记账应用</>,
    summary:
      "我们的目的不是要制作一款功能完备界面复杂的记账应用，而是想要设计一款简单易用的记账应用，没准儿你会需要它。",
    appStore: "立即下载",
    showcase: "看看",
    links: [
      {
        label: "功能",
        link: "#features",
      },
      {
        label: "关于",
        link: "#about",
      },
    ],
  },
  featuresSection: {
    title: "简单且灵活",
    summary:
      "我们需要一款怎样的记账应用？账户、分类、记录，有这些就够。再搭配开箱即用的图表、数据本地存储和可选的云同步，那就完美了。   —— 不知名人士",
    appStore: "立即下载",
    features: [
      {
        icon: <TagIcon className="h-6 w-6" />,
        label: "简单",
        summary: "账户、类别、记录，就这么多。",
      },
      {
        icon: <SwatchIcon className="h-6 w-6" />,
        label: "灵活",
        summary: "支出记录、订阅管理、预算分析...或者探索更多玩法。",
      },
      {
        icon: <NewspaperIcon className="h-6 w-6" />,
        label: "可视化",
        summary: "饼图、条状图、树...各种可视化图形分析。",
      },
      {
        icon: <LockClosedIcon className="h-6 w-6" />,
        label: "安全",
        summary: "完全本地、iCloud同步、身份认证...数据由你掌控。",
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
  about: {
    title: "关于",
    subtitle: "设计简单、灵活且又强大的应用。",
    appName: (
      <>
        知出<span className="ml-1 opacity-50">(Kosto)</span>
      </>
    ),
    appURL: "https://kosto.nooc.ink",
    summary:
      "知出（Kosto）是 iOS 上一款简单且灵活的记账应用。它有简单清晰的用户界面，以及大量开箱即用的图表。其数据均保存在本地，且可以选择开启 iCloud 同步功能。",
  },
  cta: {
    title: "想要试试吗?",
    subtitle: "立即从 App Store 下载",
    appStore: "立即下载",
    learnMore: "了解更多",
  },
  footer: {
    bio: "站在存在主义与虚无主义中间的理想主义者。",
    links: [
      {
        label: "作者",
        link: "https://nooc.ink",
      },
      {
        label: "关于",
        link: "#about",
      },
      {
        label: "隐私政策",
        link: "#",
      },
    ],
  },
};
