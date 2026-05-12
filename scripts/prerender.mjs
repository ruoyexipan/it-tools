#!/usr/bin/env node

/**
 * 预渲染脚本 - 为重要页面生成静态 HTML
 * 
 * 使用方法：
 * node scripts/prerender.mjs
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

// 需要预渲染的页面
const pages = [
  { path: '/', title: 'AgentsAITools - Free Online Developer Tools Collection', description: 'Free online developer tools collection including JSON formatter, Base64 encoder, hash generator, timestamp converter, and 100+ more handy tools for developers.' },
  { path: '/json-prettify', title: 'JSON Formatter - Free Online Tool | AgentsAITools', description: 'Format, validate, and prettify JSON data online. Free JSON formatter tool with syntax highlighting.' },
  { path: '/base64-string-converter', title: 'Base64 Encoder Decoder - Free Online Tool | AgentsAITools', description: 'Encode and decode Base64 strings online. Free Base64 converter tool.' },
  { path: '/hash-text', title: 'Hash Generator - Free Online Tool | AgentsAITools', description: 'Generate MD5, SHA1, SHA256, SHA512 hashes online. Free hash generator tool.' },
  { path: '/jwt-parser', title: 'JWT Decoder - Free Online Tool | AgentsAITools', description: 'Decode and parse JWT tokens online. Free JWT decoder tool.' },
  { path: '/uuid-generator', title: 'UUID Generator - Free Online Tool | AgentsAITools', description: 'Generate UUID v4 identifiers online. Free UUID generator tool.' },
  { path: '/regex-tester', title: 'Regex Tester - Free Online Tool | AgentsAITools', description: 'Test regular expressions online. Free regex tester tool.' },
  { path: '/color-converter', title: 'Color Converter - Free Online Tool | AgentsAITools', description: 'Convert colors between HEX, RGB, HSL formats online. Free color converter tool.' },
  { path: '/date-converter', title: 'Date Time Converter - Free Online Tool | AgentsAITools', description: 'Convert dates and timestamps online. Free date time converter tool.' },
  { path: '/base-converter', title: 'Number Base Converter - Free Online Tool | AgentsAITools', description: 'Convert numbers between binary, decimal, hex, octal online. Free base converter tool.' },
  { path: '/about', title: 'About AgentsAITools - Free Developer Tools', description: 'About AgentsAITools - Free online developer tools collection created by ruoyeAi.' },
  { path: '/contact', title: 'Contact Us - AgentsAITools', description: 'Contact AgentsAITools for questions, feedback, or support.' },
  { path: '/privacy-policy', title: 'Privacy Policy - AgentsAITools', description: 'Privacy Policy for AgentsAITools.' },
  { path: '/terms-of-service', title: 'Terms of Service - AgentsAITools', description: 'Terms of Service for AgentsAITools.' },
];

// 读取原始 index.html
const indexHtml = readFileSync('dist/index.html', 'utf-8');

// 为每个页面生成静态 HTML
pages.forEach(({ path, title, description }) => {
  // 生成带有正确 meta 标签的 HTML
  const html = indexHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="https://agentsaitools.com${path}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="https://agentsaitools.com${path}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${description}"`)
    .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`)
    .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${description}"`);

  // 创建目录
  const dir = join('dist', path);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  // 写入文件
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`✅ Generated: ${path}/index.html`);
});

console.log('\n🎉 Pre-rendering complete!');
