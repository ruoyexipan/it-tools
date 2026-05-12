#!/usr/bin/env node

/**
 * SSG 预渲染脚本
 * 为每个页面生成独立的 HTML 文件，包含正确的 title、description、canonical
 * 
 * 使用方法：
 * 1. 先运行 pnpm build
 * 2. 然后运行 node scripts/ssg.mjs
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const BASE_URL = 'https://agentsaitools.com';

// 读取原始 index.html
const indexHtml = readFileSync(join(DIST_DIR, 'index.html'), 'utf-8');

// 所有工具页面配置
const pages = [
  // 首页
  {
    path: '/',
    title: 'AgentsAITools - Free Online Developer Tools Collection',
    description: 'Free online developer tools collection including JSON formatter, Base64 encoder, hash generator, timestamp converter, and 100+ more handy tools for developers.',
    keywords: 'developer tools, online tools, json formatter, base64, hash generator, free tools',
  },
  // 法律页面
  {
    path: '/about',
    title: 'About AgentsAITools - Free Developer Tools',
    description: 'About AgentsAITools - Free online developer tools collection created by ruoyeAi. 100+ tools for developers.',
    keywords: 'about, agentsaitools, developer tools',
  },
  {
    path: '/contact',
    title: 'Contact Us - AgentsAITools',
    description: 'Contact AgentsAITools for questions, feedback, or support.',
    keywords: 'contact, support, feedback',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - AgentsAITools',
    description: 'Privacy Policy for AgentsAITools - Free online developer tools.',
    keywords: 'privacy policy',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service - AgentsAITools',
    description: 'Terms of Service for AgentsAITools - Free online developer tools.',
    keywords: 'terms of service',
  },
  // Crypto 工具
  {
    path: '/token-generator',
    title: 'Random Token Generator - Free Online Tool | AgentsAITools',
    description: 'Generate random tokens and strings online. Free token generator for API keys, passwords, and secrets.',
    keywords: 'token generator, random string, api key generator, password generator',
  },
  {
    path: '/hash-text',
    title: 'Hash Generator - MD5 SHA256 SHA512 | AgentsAITools',
    description: 'Generate MD5, SHA1, SHA256, SHA512 hashes online. Free hash generator tool for text and files.',
    keywords: 'hash generator, md5, sha256, sha512, hash tool',
  },
  {
    path: '/bcrypt',
    title: 'Bcrypt Password Hash Generator | AgentsAITools',
    description: 'Generate bcrypt password hashes online. Free bcrypt hash generator with salt.',
    keywords: 'bcrypt, password hash, bcrypt generator',
  },
  {
    path: '/uuid-generator',
    title: 'UUID Generator - Free Online Tool | AgentsAITools',
    description: 'Generate UUID v4 identifiers online. Free UUID generator tool.',
    keywords: 'uuid generator, guid generator, unique id',
  },
  {
    path: '/ulid-generator',
    title: 'ULID Generator - Free Online Tool | AgentsAITools',
    description: 'Generate ULID identifiers online. Free ULID generator tool.',
    keywords: 'ulid generator, unique id, sortable id',
  },
  {
    path: '/encryption',
    title: 'Text Encryption Tool - Free Online | AgentsAITools',
    description: 'Encrypt and decrypt text online. Free encryption tool for secure data.',
    keywords: 'encryption, decrypt, encrypt text',
  },
  {
    path: '/bip39-generator',
    title: 'BIP39 Mnemonic Generator | AgentsAITools',
    description: 'Generate BIP39 mnemonic phrases for crypto wallets. Free BIP39 generator.',
    keywords: 'bip39, mnemonic, seed phrase, crypto wallet',
  },
  {
    path: '/hmac-generator',
    title: 'HMAC Generator Online | AgentsAITools',
    description: 'Generate HMAC signatures online. Free HMAC hash generator.',
    keywords: 'hmac, hmac generator, hash message authentication',
  },
  {
    path: '/rsa-key-pair-generator',
    title: 'RSA Key Pair Generator | AgentsAITools',
    description: 'Generate RSA key pairs online. Free RSA key generator.',
    keywords: 'rsa, key pair, encryption key',
  },
  {
    path: '/password-strength-analyser',
    title: 'Password Strength Analyzer | AgentsAITools',
    description: 'Check password strength online. Free password strength analyzer.',
    keywords: 'password strength, password checker, password analyzer',
  },
  {
    path: '/pdf-signature-checker',
    title: 'PDF Signature Checker | AgentsAITools',
    description: 'Verify PDF digital signatures online. Free PDF signature checker.',
    keywords: 'pdf signature, digital signature, pdf validator',
  },
  // Converter 工具
  {
    path: '/date-converter',
    title: 'Date Time Converter - Unix Timestamp | AgentsAITools',
    description: 'Convert dates and timestamps online. Free Unix timestamp converter.',
    keywords: 'date converter, timestamp converter, unix timestamp',
  },
  {
    path: '/base-converter',
    title: 'Number Base Converter - Binary Hex Decimal | AgentsAITools',
    description: 'Convert numbers between binary, decimal, hex, octal online. Free base converter.',
    keywords: 'base converter, binary converter, hex converter, decimal converter',
  },
  {
    path: '/roman-numeral-converter',
    title: 'Roman Numeral Converter | AgentsAITools',
    description: 'Convert to and from Roman numerals online. Free Roman numeral converter.',
    keywords: 'roman numerals, roman converter',
  },
  {
    path: '/base64-string-converter',
    title: 'Base64 Encoder Decoder | AgentsAITools',
    description: 'Encode and decode Base64 strings online. Free Base64 converter tool.',
    keywords: 'base64, encoder, decoder, base64 converter',
  },
  {
    path: '/base64-file-converter',
    title: 'Base64 File Converter | AgentsAITools',
    description: 'Convert files to Base64 encoding online. Free Base64 file converter.',
    keywords: 'base64 file, file converter, encode file',
  },
  {
    path: '/color-converter',
    title: 'Color Converter - HEX RGB HSL | AgentsAITools',
    description: 'Convert colors between HEX, RGB, HSL formats online. Free color converter.',
    keywords: 'color converter, hex to rgb, rgb to hex, hsl',
  },
  {
    path: '/case-converter',
    title: 'Case Converter - Uppercase Lowercase | AgentsAITools',
    description: 'Convert text case online. Free case converter tool.',
    keywords: 'case converter, uppercase, lowercase, title case',
  },
  {
    path: '/text-to-nato-alphabet',
    title: 'NATO Phonetic Alphabet Converter | AgentsAITools',
    description: 'Convert text to NATO phonetic alphabet online. Free NATO alphabet converter.',
    keywords: 'nato alphabet, phonetic alphabet',
  },
  {
    path: '/text-to-binary',
    title: 'Text to Binary Converter | AgentsAITools',
    description: 'Convert text to binary code online. Free text to binary converter.',
    keywords: 'text to binary, binary converter',
  },
  {
    path: '/text-to-unicode',
    title: 'Text to Unicode Converter | AgentsAITools',
    description: 'Convert text to Unicode codes online. Free Unicode converter.',
    keywords: 'text to unicode, unicode converter',
  },
  {
    path: '/yaml-to-json-converter',
    title: 'YAML to JSON Converter | AgentsAITools',
    description: 'Convert YAML to JSON format online. Free YAML converter.',
    keywords: 'yaml to json, yaml converter',
  },
  {
    path: '/yaml-to-toml',
    title: 'YAML to TOML Converter | AgentsAITools',
    description: 'Convert YAML to TOML format online. Free YAML to TOML converter.',
    keywords: 'yaml to toml, yaml converter',
  },
  {
    path: '/json-to-yaml-converter',
    title: 'JSON to YAML Converter | AgentsAITools',
    description: 'Convert JSON to YAML format online. Free JSON to YAML converter.',
    keywords: 'json to yaml, json converter',
  },
  {
    path: '/json-to-toml',
    title: 'JSON to TOML Converter | AgentsAITools',
    description: 'Convert JSON to TOML format online. Free JSON to TOML converter.',
    keywords: 'json to toml, json converter',
  },
  {
    path: '/list-converter',
    title: 'List Converter | AgentsAITools',
    description: 'Convert lists between formats online. Free list converter tool.',
    keywords: 'list converter, list format',
  },
  {
    path: '/toml-to-json',
    title: 'TOML to JSON Converter | AgentsAITools',
    description: 'Convert TOML to JSON format online. Free TOML converter.',
    keywords: 'toml to json, toml converter',
  },
  {
    path: '/toml-to-yaml',
    title: 'TOML to YAML Converter | AgentsAITools',
    description: 'Convert TOML to YAML format online. Free TOML to YAML converter.',
    keywords: 'toml to yaml, toml converter',
  },
  {
    path: '/xml-to-json',
    title: 'XML to JSON Converter | AgentsAITools',
    description: 'Convert XML to JSON format online. Free XML converter.',
    keywords: 'xml to json, xml converter',
  },
  {
    path: '/json-to-xml',
    title: 'JSON to XML Converter | AgentsAITools',
    description: 'Convert JSON to XML format online. Free JSON to XML converter.',
    keywords: 'json to xml, json converter',
  },
  {
    path: '/markdown-to-html',
    title: 'Markdown to HTML Converter | AgentsAITools',
    description: 'Convert Markdown to HTML online. Free Markdown converter.',
    keywords: 'markdown to html, markdown converter',
  },
  // Web 工具
  {
    path: '/url-encoder',
    title: 'URL Encoder Decoder | AgentsAITools',
    description: 'Encode and decode URLs online. Free URL encoder tool.',
    keywords: 'url encoder, url decoder, percent encoding',
  },
  {
    path: '/html-entities',
    title: 'HTML Entities Encoder | AgentsAITools',
    description: 'Encode and decode HTML entities online. Free HTML entities encoder.',
    keywords: 'html entities, html encoder, html decoder',
  },
  {
    path: '/url-parser',
    title: 'URL Parser Online | AgentsAITools',
    description: 'Parse and analyze URLs online. Free URL parser tool.',
    keywords: 'url parser, url analyzer',
  },
  {
    path: '/device-information',
    title: 'Device Information Tool | AgentsAITools',
    description: 'View your device information online. Free device info tool.',
    keywords: 'device info, browser info, user agent',
  },
  {
    path: '/basic-auth-generator',
    title: 'Basic Auth Header Generator | AgentsAITools',
    description: 'Generate Basic Authentication headers online. Free basic auth generator.',
    keywords: 'basic auth, authorization header',
  },
  {
    path: '/og-meta-generator',
    title: 'Meta Tag Generator | AgentsAITools',
    description: 'Generate HTML meta tags online. Free meta tag generator.',
    keywords: 'meta tag generator, og tags, seo meta tags',
  },
  {
    path: '/otp-generator',
    title: 'OTP Generator Online | AgentsAITools',
    description: 'Generate OTP codes online. Free TOTP and HOTP generator.',
    keywords: 'otp generator, totp, hotp, 2fa',
  },
  {
    path: '/mime-types',
    title: 'MIME Types Reference | AgentsAITools',
    description: 'MIME types reference guide. Free MIME types lookup.',
    keywords: 'mime types, content type',
  },
  {
    path: '/jwt-parser',
    title: 'JWT Token Parser | AgentsAITools',
    description: 'Parse and decode JWT tokens online. Free JWT decoder.',
    keywords: 'jwt parser, jwt decoder, json web token',
  },
  {
    path: '/keycode-info',
    title: 'Keyboard KeyCode Info | AgentsAITools',
    description: 'View keyboard key codes online. Free keycode info tool.',
    keywords: 'keycode, keyboard code, key event',
  },
  {
    path: '/slugify-string',
    title: 'URL Slug Generator | AgentsAITools',
    description: 'Generate URL-friendly slugs online. Free slug generator.',
    keywords: 'slug generator, url slug, slugify',
  },
  {
    path: '/html-wysiwyg-editor',
    title: 'HTML WYSIWYG Editor | AgentsAITools',
    description: 'Visual HTML editor online. Free WYSIWYG editor.',
    keywords: 'html editor, wysiwyg editor',
  },
  {
    path: '/user-agent-parser',
    title: 'User Agent Parser | AgentsAITools',
    description: 'Parse user agent strings online. Free user agent parser.',
    keywords: 'user agent parser, browser detection',
  },
  {
    path: '/http-status-codes',
    title: 'HTTP Status Codes Reference | AgentsAITools',
    description: 'Complete HTTP status codes reference. Free HTTP codes guide.',
    keywords: 'http status codes, http codes',
  },
  {
    path: '/json-diff',
    title: 'JSON Diff Comparator | AgentsAITools',
    description: 'Compare two JSON objects online. Free JSON diff tool.',
    keywords: 'json diff, json compare',
  },
  {
    path: '/safelink-decoder',
    title: 'Outlook SafeLink Decoder | AgentsAITools',
    description: 'Decode Outlook SafeLink URLs online. Free SafeLink decoder.',
    keywords: 'safelink decoder, outlook safelink',
  },
  // Images 工具
  {
    path: '/qr-code-generator',
    title: 'QR Code Generator | AgentsAITools',
    description: 'Generate QR codes online. Free QR code generator.',
    keywords: 'qr code generator, create qr code',
  },
  {
    path: '/wifi-qrcode-generator',
    title: 'WiFi QR Code Generator | AgentsAITools',
    description: 'Generate QR codes for WiFi networks. Free WiFi QR generator.',
    keywords: 'wifi qr code, wifi qr generator',
  },
  {
    path: '/svg-placeholder-generator',
    title: 'SVG Placeholder Generator | AgentsAITools',
    description: 'Generate SVG placeholder images online. Free placeholder generator.',
    keywords: 'svg placeholder, placeholder image',
  },
  {
    path: '/camera-recorder',
    title: 'Camera Recorder Online | AgentsAITools',
    description: 'Record video from your camera online. Free camera recorder.',
    keywords: 'camera recorder, video recorder',
  },
  // Development 工具
  {
    path: '/git-memo',
    title: 'Git Commands Cheatsheet | AgentsAITools',
    description: 'Git commands reference and cheatsheet. Free Git guide.',
    keywords: 'git commands, git cheatsheet',
  },
  {
    path: '/random-port-generator',
    title: 'Random Port Generator | AgentsAITools',
    description: 'Generate random port numbers online. Free port generator.',
    keywords: 'random port, port generator',
  },
  {
    path: '/crontab-generator',
    title: 'Crontab Generator Online | AgentsAITools',
    description: 'Generate crontab expressions online. Free crontab generator.',
    keywords: 'crontab generator, cron expression',
  },
  {
    path: '/json-prettify',
    title: 'JSON Formatter & Validator | AgentsAITools',
    description: 'Format, validate, and prettify JSON data online. Free JSON formatter.',
    keywords: 'json formatter, json prettify, json validator',
  },
  {
    path: '/json-minify',
    title: 'JSON Minifier | AgentsAITools',
    description: 'Minify and compress JSON data online. Free JSON minifier.',
    keywords: 'json minify, compress json',
  },
  {
    path: '/json-to-csv',
    title: 'JSON to CSV Converter | AgentsAITools',
    description: 'Convert JSON to CSV format online. Free JSON to CSV converter.',
    keywords: 'json to csv, json csv converter',
  },
  {
    path: '/sql-prettify',
    title: 'SQL Formatter Online | AgentsAITools',
    description: 'Format and prettify SQL queries online. Free SQL formatter.',
    keywords: 'sql formatter, sql beautifier',
  },
  {
    path: '/chmod-calculator',
    title: 'Chmod Calculator Online | AgentsAITools',
    description: 'Calculate Linux file permissions online. Free chmod calculator.',
    keywords: 'chmod calculator, linux permissions',
  },
  {
    path: '/docker-run-to-docker-compose-converter',
    title: 'Docker Run to Compose Converter | AgentsAITools',
    description: 'Convert docker run commands to docker-compose.yml format online.',
    keywords: 'docker converter, docker compose, docker run',
  },
  {
    path: '/xml-formatter',
    title: 'XML Formatter Online | AgentsAITools',
    description: 'Format and prettify XML online. Free XML formatter.',
    keywords: 'xml formatter, xml beautifier',
  },
  {
    path: '/yaml-prettify',
    title: 'YAML Viewer Online | AgentsAITools',
    description: 'View and format YAML data online. Free YAML viewer.',
    keywords: 'yaml viewer, yaml formatter',
  },
  {
    path: '/email-normalizer',
    title: 'Email Address Normalizer | AgentsAITools',
    description: 'Normalize and validate email addresses online. Free email normalizer.',
    keywords: 'email normalizer, email validator',
  },
  {
    path: '/regex-tester',
    title: 'Regex Tester Online | AgentsAITools',
    description: 'Test regular expressions online. Free regex tester tool.',
    keywords: 'regex tester, regex validator, regular expression',
  },
  {
    path: '/regex-memo',
    title: 'Regex Cheatsheet | AgentsAITools',
    description: 'Regular expressions reference guide. Free regex cheatsheet.',
    keywords: 'regex cheatsheet, regex reference',
  },
  // Network 工具
  {
    path: '/ipv4-subnet-calculator',
    title: 'IPv4 Subnet Calculator | AgentsAITools',
    description: 'Calculate IPv4 subnets online. Free subnet calculator.',
    keywords: 'subnet calculator, cidr calculator',
  },
  {
    path: '/ipv4-address-converter',
    title: 'IPv4 Address Converter | AgentsAITools',
    description: 'Convert IPv4 addresses between formats online. Free IP converter.',
    keywords: 'ipv4 converter, ip address converter',
  },
  {
    path: '/ipv4-range-expander',
    title: 'IPv4 Range Expander | AgentsAITools',
    description: 'Expand IPv4 address ranges online. Free IP range expander.',
    keywords: 'ipv4 range, ip range expander',
  },
  {
    path: '/mac-address-lookup',
    title: 'MAC Address Lookup | AgentsAITools',
    description: 'Look up MAC address vendor online. Free MAC address lookup.',
    keywords: 'mac address lookup, mac vendor',
  },
  {
    path: '/mac-address-generator',
    title: 'MAC Address Generator | AgentsAITools',
    description: 'Generate random MAC addresses online. Free MAC address generator.',
    keywords: 'mac address generator, random mac',
  },
  {
    path: '/ipv6-ula-generator',
    title: 'IPv6 ULA Generator | AgentsAITools',
    description: 'Generate IPv6 ULA addresses online. Free IPv6 generator.',
    keywords: 'ipv6 ula, ipv6 generator',
  },
  // Math 工具
  {
    path: '/math-evaluator',
    title: 'Math Expression Evaluator | AgentsAITools',
    description: 'Evaluate math expressions online. Free math evaluator.',
    keywords: 'math evaluator, calculator, math expression',
  },
  {
    path: '/eta-calculator',
    title: 'ETA Calculator | AgentsAITools',
    description: 'Calculate estimated time of arrival online. Free ETA calculator.',
    keywords: 'eta calculator, arrival time',
  },
  {
    path: '/percentage-calculator',
    title: 'Percentage Calculator | AgentsAITools',
    description: 'Calculate percentages online. Free percentage calculator.',
    keywords: 'percentage calculator, percent calc',
  },
  // Measurement 工具
  {
    path: '/chronometer',
    title: 'Chronometer Timer Online | AgentsAITools',
    description: 'Online stopwatch and chronometer. Free timer tool.',
    keywords: 'chronometer, stopwatch, timer',
  },
  {
    path: '/temperature-converter',
    title: 'Temperature Converter | AgentsAITools',
    description: 'Convert between temperature units online. Free temperature converter.',
    keywords: 'temperature converter, celsius to fahrenheit',
  },
  {
    path: '/benchmark-builder',
    title: 'Benchmark Builder Online | AgentsAITools',
    description: 'Create and run performance benchmarks online. Free benchmark tool.',
    keywords: 'benchmark builder, performance test',
  },
  // Text 工具
  {
    path: '/lorem-ipsum-generator',
    title: 'Lorem Ipsum Generator | AgentsAITools',
    description: 'Generate placeholder text online. Free lorem ipsum generator.',
    keywords: 'lorem ipsum, placeholder text',
  },
  {
    path: '/text-statistics',
    title: 'Text Statistics Analyzer | AgentsAITools',
    description: 'Analyze text statistics online. Free word count tool.',
    keywords: 'text statistics, word count, character count',
  },
  {
    path: '/emoji-picker',
    title: 'Emoji Picker Online | AgentsAITools',
    description: 'Browse and copy emojis easily. Free emoji picker.',
    keywords: 'emoji picker, emoji list',
  },
  {
    path: '/string-obfuscator',
    title: 'String Obfuscator | AgentsAITools',
    description: 'Obfuscate and mask strings online. Free string obfuscator.',
    keywords: 'string obfuscator, text mask',
  },
  {
    path: '/text-diff',
    title: 'Text Diff Comparator | AgentsAITools',
    description: 'Compare two texts and find differences online. Free text diff tool.',
    keywords: 'text diff, text compare, diff tool',
  },
  {
    path: '/numeronym-generator',
    title: 'Numeronym Generator | AgentsAITools',
    description: 'Generate numeronyms from words online. Free numeronym generator.',
    keywords: 'numeronym generator, abbreviation',
  },
  {
    path: '/ascii-text-drawer',
    title: 'ASCII Text Art Generator | AgentsAITools',
    description: 'Create ASCII art text online. Free ASCII text generator.',
    keywords: 'ascii art, text art, ascii text',
  },
  // Data 工具
  {
    path: '/phone-parser-and-formatter',
    title: 'Phone Number Parser | AgentsAITools',
    description: 'Parse and format phone numbers online. Free phone parser.',
    keywords: 'phone parser, phone formatter',
  },
  {
    path: '/iban-validator-and-parser',
    title: 'IBAN Validator and Parser | AgentsAITools',
    description: 'Validate and parse IBAN numbers online. Free IBAN validator.',
    keywords: 'iban validator, iban check',
  },
];

// 生成 HTML
function generateHtml(page) {
  const url = `${BASE_URL}${page.path}`;
  
  // 替换 Title
  let html = indexHtml.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
  
  // 替换 Meta Description (支持多行)
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/s,
    `<meta\n      name="description"\n      content="${page.description}"\n    />`
  );
  
  // 替换 itemprop description
  html = html.replace(
    /<meta\s+itemprop="description"\s+content="[^"]*"\s*\/>/s,
    `<meta\n      itemprop="description"\n      content="${page.description}"\n    />`
  );
  
  // 替换 Canonical
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  
  // 替换 OG tags
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${page.title}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${page.description}"`);
  
  // 替换 Twitter tags
  html = html.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${page.title}"`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${page.description}"`);
  
  // 替换 Keywords
  html = html.replace(/<meta name="keywords" content="[^"]*"/, `<meta name="keywords" content="${page.keywords}"`);

  // 添加 JSON-LD 结构化数据
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.title,
    "description": page.description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "AgentsAITools",
      "url": BASE_URL
    }
  };

  html = html.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(jsonLd, null, 2)}</script>\n  </head>`);

  return html;
}

// 创建目录
function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

// 主函数
function main() {
  console.log('🚀 开始 SSG 预渲染...\n');

  let successCount = 0;
  let errorCount = 0;

  pages.forEach(page => {
    try {
      const html = generateHtml(page);
      const dir = join(DIST_DIR, page.path === '/' ? '' : page.path);
      ensureDir(dir);
      writeFileSync(join(dir, 'index.html'), html);
      console.log(`✅ ${page.path}/index.html`);
      successCount++;
    } catch (error) {
      console.error(`❌ ${page.path}: ${error.message}`);
      errorCount++;
    }
  });

  console.log(`\n🎉 SSG 预渲染完成！`);
  console.log(`   成功: ${successCount} 个页面`);
  console.log(`   失败: ${errorCount} 个页面`);
  console.log(`\n📁 输出目录: ${DIST_DIR}`);
}

main();
