/**
 * Markdown 解析工具
 * 封装 marked 库并提供自定义解析规则
 */

import { marked } from "marked";

/**
 * 解析 Markdown 内容
 * 支持自定义的提示块语法 (NOTE, TIP, IMPORTANT, WARNING, CAUTION)
 * @param content Markdown 内容
 */
export function parseMarkdown(content: string): string {
  if (!content) return "";

  // 处理自定义提示块语法
  // 转换格式: > ![TYPE] 内容 -> 自定义 HTML
  let processed = content.replace(
    /^> \[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n([\s\S]*?)(?=\n## |\n--- |\n\n[^>])/gm,
    (match, type, text) => {
      const typeClass = type.toLowerCase();
      const textContent = text.replace(/^> /gm, "").replace(/\n$/, "").trim();
      const innerHtml = marked.parseInline(textContent);
      return `<div class="markdown-alert markdown-alert-${typeClass}">\n<p class="markdown-alert-title">${type}</p>\n${innerHtml}\n</div>`;
    }
  );

  return marked.parse(processed);
}

/**
 * 解析内联 Markdown 文本
 * @param text 文本内容
 */
export function parseMarkdownInline(text: string): string {
  if (!text) return "";
  return marked.parseInline(text);
}

/**
 * 格式化日期
 * @param dateStr 日期字符串
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return "";

  const date = new Date(dateStr);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

/**
 * 检查是否为测试版版本
 * @param version 版本号
 */
export function isBetaVersion(version: string): boolean {
  if (!version) return false;
  const lowerVersion = version.toLowerCase();
  return lowerVersion.includes("beta") || lowerVersion.includes("pre") || lowerVersion.includes("alpha");
}
