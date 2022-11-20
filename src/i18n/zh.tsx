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

export const zh = {
  appName: (
    <>
      知出<span className="ml-1 font-normal opacity-50">(Kosto)</span>
    </>
  ),
  appStoreURL: undefined,
  announcement: (
    <>
      <span className="mr-1">
        即将上线 App Store！
        <span className="opacity-50">(文件夹真的建好了)</span>
      </span>
    </>
  ),
  banner: {
    title: <>又又又一款记账应用</>,
    summary: (
      <>
        顾名思义（Kosto 在世界语里是花费的意思），这是一款只关心支出的记账应用
        <span className="mx-1 opacity-50">
          (绝对不是因为我没有收入，绝对不是！)
        </span>
        。 我们希望你能喜欢，如果不喜欢，那也没关系。
      </>
    ),
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
        —— 不愿透露姓名的作者
      </>
    ),
    appStore: "快了",
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
        icon: <ChartPieIcon className="h-6 w-6 text-red-500" />,
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
    title: "追忆似水年华",
    summary: "没有什么可说的。",
    items: [
      {
        icon: <FolderOpenIcon className="h-6 w-6 text-yellow-500" />,
        label: "账户",
        summary: (
          <>
            将所有相关的记录记在一个账户里，如生活支出、服务订阅、装修预算等。
            <span className="mx-2 opacity-60">(当然细分维度取决于你)</span>
          </>
        ),
      },
      {
        icon: <SquaresPlusIcon className="h-6 w-6 text-yellow-500" />,
        label: "类别",
        summary:
          "将账户中不同类型的记录用类别区分，方便统计分析。如生活账户下的饮食、服装、瞎买等类别。",
      },
      {
        icon: <DocumentTextIcon className="h-6 w-6 text-yellow-500" />,
        label: "记录",
        summary: "记录...就是记录。可以将标记为每月自动记录的持续性记录等。",
      },
      {
        icon: <Cog6ToothIcon className="h-6 w-6 text-yellow-500" />,
        label: "其他工具",
        summary:
          "当然还有一些替他的附加功能，但是这些功能无需过多关心，用就行了，奥力给！",
      },
    ],
  },
  flexibleSection: {
    title: "等待戈多",
    summary: "我们相信同一个工具在不同人的手里能用出不同的效果。",
    items: [
      {
        icon: <DocumentTextIcon className="h-6 w-6 text-blue-500" />,
        label: "记录支出",
        summary: "记录你的所有支出，并通过各种图表来分析他们。",
      },
      {
        icon: <ArrowPathRoundedSquareIcon className="h-6 w-6 text-blue-500" />,
        label: "管理订阅",
        summary: "添加持续性的记录，自动统计每月或每年的订阅费用。",
      },
      {
        icon: <ArrowTrendingDownIcon className="h-6 w-6 text-blue-500" />,
        label: "分析预算",
        summary: "记录预算，然后通过树状图或其他图表来分析和优化。",
      },
      {
        icon: <CursorArrowRaysIcon className="h-6 w-6 text-blue-500" />,
        label: "探索更多",
        summary: (
          <>
            或许你能玩出不同的花样。
            <span className="mx-2 opacity-60">(如果有好点子也请告诉我们)</span>
          </>
        ),
      },
    ],
  },
  visualizationSection: {
    title: "堂吉诃德",
    summary: "从不同的角度看，也许会有新发现。",
    items: [
      {
        icon: <ChartPieIcon className="h-6 w-6 text-red-500" />,
        label: "按分类",
        summary: "可以按类别分析不同分类的支出情况。",
      },
      {
        icon: <ChartBarIcon className="h-6 w-6 text-red-500" />,
        label: "按时间",
        summary: "按时间统计不同时间段的支出变化。",
      },
      {
        icon: <Bars3BottomRightIcon className="h-6 w-6 text-red-500" />,
        label: "子类别",
        summary: "添加预算记录后，用树状图清晰地展示不同类别与子类别的情况。",
      },
      {
        icon: <FunnelIcon className="h-6 w-6 text-red-500" />,
        label: "更多",
        summary: "还有一大堆图表可以从不同角度分析记录。",
      },
    ],
  },
  secureSection: {
    title: "克拉拉与太阳",
    summary: "有我在，别怕！",
    items: [
      {
        icon: <DevicePhoneMobileIcon className="h-6 w-6 text-green-500" />,
        label: "本地存储",
        summary: (
          <>
            所有数据均存储在本地，我们甚至都没有服务器。
            <span className="opacity-50">(真的是因为穷，打钱！)</span>
          </>
        ),
      },
      {
        icon: <CloudIcon className="h-6 w-6 text-green-500" />,
        label: "iCloud 同步",
        summary: "可以使用 iCloud 同步所有数据，有苹果在，你的数据有保障！",
      },
      {
        icon: <FingerPrintIcon className="h-6 w-6 text-green-500" />,
        label: "身份验证",
        summary: "通过 TouchID 或者 FaceID 保证你的数据不会被他人看到。",
      },
      {
        icon: <WrenchScrewdriverIcon className="h-6 w-6 text-green-500" />,
        label: "更多",
        summary: "还有像数据加密，快照备份什么的，就不多说了。",
      },
    ],
  },
  nextSection: {
    title: "到灯塔去",
    summary: "我们一直在朝着前方远行，下列功能已提上日程。",
    items: [
      {
        icon: <HandRaisedIcon className="h-6 w-6 text-orange-500" />,
        label: "Apple Watch",
        summary: "添加对 Apple Watch 的支持，随时随地记录。",
      },
      {
        icon: <ComputerDesktopIcon className="h-6 w-6 text-lime-500" />,
        label: "macOS",
        summary: "新增对 macOS 的原生支持，一家人就是要整整齐齐的。",
      },
      {
        icon: <CurrencyEuroIcon className="h-6 w-6 text-cyan-500" />,
        label: "汇率转换？",
        summary: (
          <>
            为账户添加货币和汇率转换。
            <span className="mx-2 opacity-60">
              (因为考虑到复杂度也可能不会支持)
            </span>
          </>
        ),
      },
      {
        icon: <HeartIcon className="h-6 w-6 text-rose-500" />,
        label: "更多",
        summary: (
          <>
            你可以联系我们提供更多需求。
            <span className="mx-2 opacity-60">(没事干找我们聊天也行)</span>
          </>
        ),
      },
    ],
  },
  faq: {
    label: "常见问题",
    questions: [
      {
        q: "知出（Kosto）是怎样一款软件？",
        a: "正如其名，知出是一款只关心支出的记账软件（Kosto 在世界语里是花费的意思）。如果你和我们一样，只是想要一个记录自己支出的应用，但经常为了一个应用打开后玲琅满目的按钮而不知所措，那不妨试试知出吧。",
      },
      {
        q: "已经有这么多记账应用了，为什么你们还要做一个?",
        a: "在试用了很多记账应用后，发现大部分应用都不是没有满足自己的需求，而是有太多在自己需求之外的功能，导致使用起来心智负担会变大。于是作为程序员的我决定自己做一个，如果能顺便能满足其他人的要求那就更好了。",
      },
      {
        q: "我不喜欢订阅制，可以买断吗?",
        a: "我们在早期将会提供长期买断的选项，但在未来可能会取消。不过不用担心，已经购买的将一直有效。",
      },
    ],
  },
  about: {
    title: "关于",
    subtitle: "尝试设计简单、灵活且又强大的应用。",
    appName: (
      <>
        知出<span className="ml-1 opacity-50">(Kosto)</span>
      </>
    ),
    appURL: "https://kosto.nooc.ink",
    summary:
      "知出（Kosto）是一款运行在 iOS 平台上，只关心支出、简单且灵活的记账应用。它有简单清晰的用户界面、大量开箱即用的图表和苹果的生态。如果你和我们一样，只是想要一个记录自己支出的应用，但经常为了一个应用打开后玲琅满目的按钮而不知所措，那不妨试试知出吧。",
  },
  cta: {
    title: "想要试试吗?",
    subtitle: "立即从 App Store 下载",
    appStore: "再等等",
    learnMore: "了解更多",
  },
  footer: {
    bio: "在虚无主义与存在主义中间的理想主义者。",
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
        label: "English",
        link: "?lang=en",
      },
    ],
  },
};
