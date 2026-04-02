export type StructuredData = Record<string, unknown>;

export const SITE_URL = "https://1panel.cn";
export const SITE_NAME = "1Panel";
export const ORGANIZATION_NAME = "杭州飞致云信息科技有限公司";
export const ORGANIZATION_ALTERNATE_NAME = "FIT2CLOUD 飞致云";
export const ORGANIZATION_URL = "https://www.fit2cloud.com/";
export const GITHUB_URL = "https://github.com/1Panel-dev/1Panel";
export const DEFAULT_DESCRIPTION =
  "1Panel 是现代化、开源的 Linux 服务器运维管理面板，提供网站、数据库、容器、文件、备份与安全管理，支持应用商店一键部署及本地 AI 模型与智能体管理。";
export const DEFAULT_KEYWORDS = [
  "1Panel",
  "1Panel 官网",
  "Linux 面板",
  "Linux 服务器管理",
  "开源面板",
  "服务器运维",
  "Docker 管理",
  "容器管理",
  "网站部署",
  "数据库管理",
  "应用商店",
  "AI 模型管理",
];
export const DEFAULT_OG_IMAGE = "/images/overview-full.png";

export function toAbsoluteUrl(path: string, base: string = SITE_URL) {
  return new URL(path, base).toString();
}

export function createOrganizationSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION_NAME,
    alternateName: ORGANIZATION_ALTERNATE_NAME,
    url: ORGANIZATION_URL,
    logo: toAbsoluteUrl("/images/logo-light-FIT2CLOUD.svg"),
    sameAs: [ORGANIZATION_URL],
  };
}

export function createWebsiteSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: `${SITE_NAME} 官网`,
    alternateName: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "zh-CN",
    description: DEFAULT_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function createWebPageSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "zh-CN",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "Thing",
      name: SITE_NAME,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function createSoftwareApplicationSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: DEFAULT_DESCRIPTION,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux",
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    screenshot: toAbsoluteUrl("/images/dashboard-preview.png"),
    downloadUrl: GITHUB_URL,
    softwareHelp: toAbsoluteUrl("/docs"),
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CNY",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    sameAs: [GITHUB_URL],
    featureList: [
      "Linux 服务器图形化管理",
      "应用商店一键部署",
      "网站与域名管理",
      "数据库管理",
      "容器与文件管理",
      "备份与恢复",
      "安全防护",
      "本地 AI 模型与智能体管理",
    ],
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
