/**
 * 文本处理工具函数
 * 包含字符统计、中英文处理等功能
 */

// 匹配中英文和日韩文字的正则表达式
const CHINESE_CHAR_PATTERN =
  /[a-zA-Z0-9_\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g;

/**
 * 统计文本中的字符数
 * 中文字符按实际长度计算，英文字符每个计为1
 * @param data 输入文本
 */
export function countWord(data: string): number {
  const m = data.match(CHINESE_CHAR_PATTERN);

  if (!m) {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < m.length; i += 1) {
    // 中文字符范围
    if (m[i].charCodeAt(0) >= 0x4e00) {
      count += m[i].length;
    } else {
      count += 1;
    }
  }
  return count;
}
