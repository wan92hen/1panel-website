export const BLOG_PAGE_SIZE = 10;
export const BLOG_SECTION_NAME = "1Panel 产品动态";
export const BLOG_DESCRIPTION =
  "关注 1Panel 版本发布、功能更新、应用生态与实践分享，及时了解产品能力演进与使用场景。";
export const BLOG_KEYWORDS = [
  "1Panel 产品动态",
  "1Panel 版本发布",
  "1Panel 更新日志",
  "1Panel 功能更新",
  "1Panel 应用生态",
  "1Panel 实践教程",
  "1Panel 应用商店",
  "Linux 面板",
  "开源 Linux 面板",
];

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  dateText: string;
  slug: string;
  path: string;
  url: string;
  cover: string;
  content?: string;
};

export type BlogArticle = BlogPost & {
  content: string;
};

export function sortBlogPosts<T extends BlogPost>(posts: T[]) {
  return posts.slice().sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogTotalPages(totalPosts: number) {
  return Math.max(1, Math.ceil(totalPosts / BLOG_PAGE_SIZE));
}

export function getBlogPagePath(page: number) {
  return page <= 1 ? "/blog.html" : `/blog/${page}.html`;
}

export function getBlogPagePosts<T extends BlogPost>(posts: T[], page: number) {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return posts.slice(start, start + BLOG_PAGE_SIZE);
}

export function getBlogPageTitle(page: number) {
  return page <= 1
    ? "1Panel 产品动态 - 版本发布、更新日志、应用生态与实践教程"
    : `1Panel 产品动态 - 第 ${page} 页`;
}

export function getBlogPageDescription<T extends BlogPost>(posts: T[], page: number) {
  const pagePosts = getBlogPagePosts(posts, page);
  if (page <= 1) {
    return "汇总 1Panel 最新产品动态，涵盖版本发布、功能更新、应用生态与实践教程，帮助用户及时了解产品能力演进。";
  }

  const firstPost = pagePosts[0];
  const lastPost = pagePosts.at(-1);
  const dateRange = firstPost && lastPost
    ? `${lastPost.dateText}至${firstPost.dateText}`
    : "历史";

  return `1Panel 产品动态第 ${page} 页，收录 ${dateRange} 的版本发布、功能更新、应用生态与实践教程。`;
}

export function getBlogPageLastmod<T extends BlogPost>(posts: T[], page: number) {
  return getBlogPagePosts(posts, page)[0]?.date ?? posts[0]?.date ?? "2026-05-28";
}

export function getBlogPostKeywords(post: BlogPost) {
  const titleTerms = post.title
    .split(/[丨|｜,，、：:（）()《》\s]+/)
    .map((term) => term.trim())
    .filter((term) => term.length > 1);

  return Array.from(new Set([post.title, ...titleTerms, ...BLOG_KEYWORDS]));
}

export function getBlogPostPreviewImage(post: BlogPost) {
  if (post.cover) {
    return post.cover;
  }
  return post.content?.match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i)?.[1] ?? "";
}
