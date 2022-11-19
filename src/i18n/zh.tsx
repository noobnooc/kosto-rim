import {
  ComputerDesktopIcon,
  CurrencyEuroIcon,
  HandRaisedIcon,
  LockClosedIcon,
  NewspaperIcon,
  SwatchIcon,
  TagIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export const zh = {
  appName: (
    <>
      知出<span className="ml-2 font-normal opacity-50">(Kosto)</span>
    </>
  ),
  appStoreURL: undefined,
  announcement: (
    <>
      <span className="mr-1">即将上线 App Store！</span>
    </>
  ),
  banner: {
    title: <>又又又一款记账应用</>,
    summary:
      "顾名思义（Kosto 在世界语里是花费的意思），这是一款只关心支出的记账应用。我们希望你能喜欢，如果不喜欢，那也没事。",
    appStore: "敬请期待",
    showcase: "仔细瞧瞧",
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
    summary: (
      <>
        我们需要一款怎样的记账应用？账户、分类、记录，有这些就够。再搭配开箱即用的图表、数据本地存储和可选的云同步，那就完美了。
        <br />
        —— 不知名人士
      </>
    ),
    appStore: "敬请期待",
    features: [
      {
        icon: <TagIcon className="h-6 w-6 text-yellow-500" />,
        label: "简单",
        link: "#simple",
        summary: "账户、类别、记录，就这么多。",
      },
      {
        icon: <SwatchIcon className="h-6 w-6 text-blue-500" />,
        label: "灵活",
        link: "#flexible",
        summary: "支出记录、订阅管理、预算分析...或者探索更多玩法。",
      },
      {
        icon: <NewspaperIcon className="h-6 w-6 text-red-500" />,
        label: "可视化",
        link: "#visualization",
        summary: "饼图、条状图、树...各种可视化图形分析。",
      },
      {
        icon: <LockClosedIcon className="h-6 w-6 text-green-500" />,
        label: "安全",
        link: "#secure",
        summary: "完全本地、iCloud同步、身份认证...数据由你掌控。",
      },
    ],
  },
  simpleSection: {
    title: "Less is more",
    summary: "Less is more",
  },
  flexibleSection: {
    title: "Do more things with less tools",
    summary: "Do more things with less tools",
  },
  visualizationSection: {
    title: "Chart theme",
    summary: "Chart theme",
  },
  secureSection: {
    title: "Your data is yours",
    summary: "Your data is yours",
  },
  nextSection: {
    title: "下一步",
    summary: "",
    items: [
      {
        icon: <HandRaisedIcon className="h-6 w-6 text-orange-500" />,
        label: "Apple Watch",
        summary: "对 Apple Watch 的支持，随时随地记录。",
      },
      {
        icon: <ComputerDesktopIcon className="h-6 w-6 text-lime-500" />,
        label: "macOS",
        summary: "对 macOS 的原生支持。",
      },
      {
        icon: <CurrencyEuroIcon className="h-6 w-6 text-emerald-500" />,
        label: "汇率转换？",
        summary: (
          <>
            实时的汇率转换
            <span className="mx-2 opacity-60">(也可能不会支持)</span>
          </>
        ),
      },
      {
        icon: <TruckIcon className="h-6 w-6 text-cyan-500" />,
        label: "更多",
        summary: "你可以联系我们提供更多需求。",
      },
    ],
  },
  faq: {
    label: "常见问题",
    questions: [
      {
        q: "知出（Kosto）是怎样一款软件？",
        a: "正如其名，知出是一款只关心支出的记账软件（Kosto 在世界语里是花费的意思）。",
      },
      {
        q: "已经有这么多记账应用了，为什么你们还要做一个?",
        a: "在试用了很多记账应用后，发现大部分应用都不是没有满足自己的需求，而是有太多在自己需求之外的功能，导致使用起来心智负担会变大。于是作为程序员的我决定自己做一个，如果能顺便能满足其他人的要求那就更好了。",
      },
      {
        q: "我不喜欢订阅制，可以买断吗?",
        a: "我们在早期将会提供长期买断选项，但在未来可能会取消。不过不用担心，已经购买的将一直有效。",
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
      "知出（Kosto）是一款运行在 iOS 平台上，只关心支出、简单且灵活的记账应用。它有简单清晰的用户界面，以及大量开箱即用的图表。其数据均保存在本地，且可以选择开启 iCloud 同步功能。",
  },
  cta: {
    title: "想要试试吗?",
    subtitle: "立即从 App Store 下载",
    appStore: "敬请期待",
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
