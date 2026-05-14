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
    category: 'Home',
  },
  // 法律页面
  {
    path: '/about',
    title: 'About AgentsAITools - Free Developer Tools',
    description: 'About AgentsAITools - Free online developer tools collection created by ruoyeAi. 100+ tools for developers.',
    keywords: 'about, agentsaitools, developer tools',
    category: 'About',
  },
  {
    path: '/contact',
    title: 'Contact Us - AgentsAITools',
    description: 'Contact AgentsAITools for questions, feedback, or support.',
    keywords: 'contact, support, feedback',
    category: 'Contact',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - AgentsAITools',
    description: 'Privacy Policy for AgentsAITools - Free online developer tools.',
    keywords: 'privacy policy',
    category: 'Legal',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service - AgentsAITools',
    description: 'Terms of Service for AgentsAITools - Free online developer tools.',
    keywords: 'terms of service',
    category: 'Legal',
  },
  // Crypto 工具
  {
    path: '/token-generator',
    title: 'Random Token Generator - Free Online Tool | AgentsAITools',
    description: 'Generate random tokens and strings online for API keys, passwords, and authentication secrets. Free token generator with customizable length and character sets. No signup required.',
    keywords: 'token generator, random string, api key generator, password generator',
    category: 'Crypto',
  },
  {
    path: '/hash-text',
    title: 'Hash Generator Online - MD5 SHA256 SHA512 Free | AgentsAITools',
    description: 'Generate MD5, SHA1, SHA256, SHA384, SHA512 hashes online. Free hash generator tool for text. Supports multiple algorithms with instant results.',
    keywords: 'hash generator, md5, sha256, sha512, hash tool',
    category: 'Crypto',
  },
  {
    path: '/bcrypt',
    title: 'Bcrypt Password Hash Generator | AgentsAITools',
    description: 'Generate bcrypt password hashes online with adjustable cost factor. Free bcrypt hash generator with automatic salt generation. Secure your passwords with industry-standard hashing.',
    keywords: 'bcrypt, password hash, bcrypt generator',
    category: 'Crypto',
  },
  {
    path: '/uuid-generator',
    title: 'UUID Generator Online Free - v4 UUID Generator | AgentsAITools',
    description: 'Generate UUID v4 identifiers online. Free UUID generator for creating unique identifiers for databases, applications, and distributed systems.',
    keywords: 'uuid generator, guid generator, unique id',
    category: 'Crypto',
  },
  {
    path: '/ulid-generator',
    title: 'ULID Generator - Free Online Tool | AgentsAITools',
    description: 'Generate ULID (Universally Unique Lexicographically Sortable Identifier) online. Free ULID generator for time-ordered unique IDs. Perfect for database primary keys.',
    keywords: 'ulid generator, unique id, sortable id',
    category: 'Crypto',
  },
  {
    path: '/encryption',
    title: 'Text Encryption Tool - Free Online | AgentsAITools',
    description: 'Encrypt and decrypt text online using AES, DES, and other algorithms. Free encryption tool for secure data transmission and storage. Client-side processing for privacy.',
    keywords: 'encryption, decrypt, encrypt text',
    category: 'Crypto',
  },
  {
    path: '/bip39-generator',
    title: 'BIP39 Mnemonic Generator | AgentsAITools',
    description: 'Generate BIP39 mnemonic phrases for cryptocurrency wallets. Free BIP39 seed phrase generator with word list validation. Create secure wallet recovery phrases.',
    keywords: 'bip39, mnemonic, seed phrase, crypto wallet',
    category: 'Crypto',
  },
  {
    path: '/hmac-generator',
    title: 'HMAC Generator Online | AgentsAITools',
    description: 'Generate HMAC (Hash-based Message Authentication Code) signatures online. Free HMAC generator supporting MD5, SHA1, SHA256, SHA512 algorithms for API authentication.',
    keywords: 'hmac, hmac generator, hash message authentication',
    category: 'Crypto',
  },
  {
    path: '/rsa-key-pair-generator',
    title: 'RSA Key Pair Generator | AgentsAITools',
    description: 'Generate RSA public and private key pairs online. Free RSA key generator for encryption, digital signatures, and secure communication. Supports 1024-4096 bit keys.',
    keywords: 'rsa, key pair, encryption key',
    category: 'Crypto',
  },
  {
    path: '/password-strength-analyser',
    title: 'Password Strength Analyzer | AgentsAITools',
    description: 'Check password strength online with detailed analysis. Free password strength analyzer that evaluates length, complexity, and common patterns. Improve your security.',
    keywords: 'password strength, password checker, password analyzer',
    category: 'Crypto',
  },
  {
    path: '/pdf-signature-checker',
    title: 'PDF Signature Checker | AgentsAITools',
    description: 'Verify PDF digital signatures online. Free PDF signature checker that validates certificate chains and signature integrity. Ensure document authenticity.',
    keywords: 'pdf signature, digital signature, pdf validator',
    category: 'Crypto',
  },
  // Converter 工具
  {
    path: '/date-converter',
    title: 'Date Time Converter - Unix Timestamp | AgentsAITools',
    description: 'Convert dates and timestamps between formats online. Free Unix timestamp converter supporting ISO 8601, RFC 2822, and human-readable formats. Timezone conversion included.',
    keywords: 'date converter, timestamp converter, unix timestamp',
    category: 'Converter',
  },
  {
    path: '/base-converter',
    title: 'Number Base Converter - Binary Hex Decimal | AgentsAITools',
    description: 'Convert numbers between binary, octal, decimal, hexadecimal, and custom bases online. Free number base converter with instant conversion and step-by-step explanations.',
    keywords: 'base converter, binary converter, hex converter, decimal converter',
    category: 'Converter',
  },
  {
    path: '/roman-numeral-converter',
    title: 'Roman Numeral Converter | AgentsAITools',
    description: 'Convert to and from Roman numerals online. Free Roman numeral converter supporting numbers up to 3,999,999. Instant conversion with validation.',
    keywords: 'roman numerals, roman converter',
    category: 'Converter',
  },
  {
    path: '/base64-string-converter',
    title: 'Base64 Converter Online Free - Encode & Decode Text | AgentsAITools',
    description: 'Encode and decode Base64 strings online. Free Base64 converter tool supporting text encoding. Instant conversion with copy-to-clipboard.',
    keywords: 'base64, encoder, decoder, base64 converter',
    category: 'Converter',
  },
  {
    path: '/base64-file-converter',
    title: 'Base64 File Converter | AgentsAITools',
    description: 'Convert files to Base64 encoding online. Free Base64 file converter supporting images, documents, and any file type. Download encoded output directly.',
    keywords: 'base64 file, file converter, encode file',
    category: 'Converter',
  },
  {
    path: '/color-converter',
    title: 'Color Converter Online - HEX RGB HSL CMYK | AgentsAITools',
    description: 'Convert colors between HEX, RGB, HSL, HSV, and CMYK formats online. Free color converter with color picker and palette generator.',
    keywords: 'color converter, hex to rgb, rgb to hex, hsl',
    category: 'Converter',
  },
  {
    path: '/case-converter',
    title: 'Case Converter - Uppercase Lowercase | AgentsAITools',
    description: 'Convert text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, and kebab-case online. Free case converter with instant transformation.',
    keywords: 'case converter, uppercase, lowercase, title case',
    category: 'Converter',
  },
  {
    path: '/text-to-nato-alphabet',
    title: 'NATO Phonetic Alphabet Converter | AgentsAITools',
    description: 'Convert text to NATO phonetic alphabet online. Free NATO alphabet converter for clear communication. Supports letters, numbers, and common punctuation.',
    keywords: 'nato alphabet, phonetic alphabet',
    category: 'Converter',
  },
  {
    path: '/text-to-binary',
    title: 'Text to Binary Converter | AgentsAITools',
    description: 'Convert text to binary code and vice versa online. Free text to binary converter with ASCII and UTF-8 support. Instant conversion with character-by-character breakdown.',
    keywords: 'text to binary, binary converter',
    category: 'Converter',
  },
  {
    path: '/text-to-unicode',
    title: 'Text to Unicode Converter | AgentsAITools',
    description: 'Convert text to Unicode code points and vice versa online. Free Unicode converter supporting all characters and encodings. Perfect for internationalization.',
    keywords: 'text to unicode, unicode converter',
    category: 'Converter',
  },
  {
    path: '/yaml-to-json-converter',
    title: 'YAML to JSON Converter | AgentsAITools',
    description: 'Convert YAML to JSON format online. Free YAML to JSON converter with syntax validation and formatting. Instant conversion with error highlighting.',
    keywords: 'yaml to json, yaml converter',
    category: 'Converter',
  },
  {
    path: '/yaml-to-toml',
    title: 'YAML to TOML Converter | AgentsAITools',
    description: 'Convert YAML to TOML format online. Free YAML to TOML converter with syntax validation. Perfect for configuration file migration.',
    keywords: 'yaml to toml, yaml converter',
    category: 'Converter',
  },
  {
    path: '/json-to-yaml-converter',
    title: 'JSON to YAML Converter | AgentsAITools',
    description: 'Convert JSON to YAML format online. Free JSON to YAML converter with syntax validation and formatting. Instant conversion with error detection.',
    keywords: 'json to yaml, json converter',
    category: 'Converter',
  },
  {
    path: '/json-to-toml',
    title: 'JSON to TOML Converter | AgentsAITools',
    description: 'Convert JSON to TOML format online. Free JSON to TOML converter with syntax validation. Perfect for configuration file creation.',
    keywords: 'json to toml, json converter',
    category: 'Converter',
  },
  {
    path: '/list-converter',
    title: 'List Converter | AgentsAITools',
    description: 'Convert lists between different formats online. Free list converter supporting CSV, JSON arrays, numbered lists, and custom delimiters. Bulk conversion supported.',
    keywords: 'list converter, list format',
    category: 'Converter',
  },
  {
    path: '/toml-to-json',
    title: 'TOML to JSON Converter | AgentsAITools',
    description: 'Convert TOML to JSON format online. Free TOML to JSON converter with syntax validation. Instant conversion with error highlighting and formatting.',
    keywords: 'toml to json, toml converter',
    category: 'Converter',
  },
  {
    path: '/toml-to-yaml',
    title: 'TOML to YAML Converter | AgentsAITools',
    description: 'Convert TOML to YAML format online. Free TOML to YAML converter with syntax validation. Perfect for configuration file migration and comparison.',
    keywords: 'toml to yaml, toml converter',
    category: 'Converter',
  },
  {
    path: '/xml-to-json',
    title: 'XML to JSON Converter | AgentsAITools',
    description: 'Convert XML to JSON format online. Free XML to JSON converter with syntax validation and formatting. Instant conversion with attribute handling.',
    keywords: 'xml to json, xml converter',
    category: 'Converter',
  },
  {
    path: '/json-to-xml',
    title: 'JSON to XML Converter | AgentsAITools',
    description: 'Convert JSON to XML format online. Free JSON to XML converter with syntax validation and formatting. Instant conversion with customizable root elements.',
    keywords: 'json to xml, json converter',
    category: 'Converter',
  },
  {
    path: '/markdown-to-html',
    title: 'Markdown to HTML Converter | AgentsAITools',
    description: 'Convert Markdown to HTML online. Free Markdown to HTML converter with live preview and syntax highlighting. Supports GitHub Flavored Markdown.',
    keywords: 'markdown to html, markdown converter',
    category: 'Converter',
  },
  // Web 工具
  {
    path: '/url-encoder',
    title: 'URL Encoder Decoder | AgentsAITools',
    description: 'Encode and decode URLs online. Free URL encoder/decoder supporting percent encoding, query parameters, and special characters. Instant conversion with validation.',
    keywords: 'url encoder, url decoder, percent encoding',
    category: 'Web',
  },
  {
    path: '/html-entities',
    title: 'HTML Entities Encoder | AgentsAITools',
    description: 'Encode and decode HTML entities online. Free HTML entities encoder/decoder supporting all named and numeric character references. Perfect for web development.',
    keywords: 'html entities, html encoder, html decoder',
    category: 'Web',
  },
  {
    path: '/url-parser',
    title: 'URL Parser Online | AgentsAITools',
    description: 'Parse and analyze URLs online. Free URL parser that breaks down protocol, host, path, query parameters, and fragments. Debug and validate URLs easily.',
    keywords: 'url parser, url analyzer',
    category: 'Web',
  },
  {
    path: '/device-information',
    title: 'Device Information Tool | AgentsAITools',
    description: 'View your device information online including browser, OS, screen resolution, and hardware details. Free device info tool for debugging and testing.',
    keywords: 'device info, browser info, user agent',
    category: 'Web',
  },
  {
    path: '/basic-auth-generator',
    title: 'Basic Auth Header Generator | AgentsAITools',
    description: 'Generate Basic Authentication headers online. Free Basic Auth generator for API testing and development. Encode username and password to Base64.',
    keywords: 'basic auth, authorization header',
    category: 'Web',
  },
  {
    path: '/og-meta-generator',
    title: 'Meta Tag Generator | AgentsAITools',
    description: 'Generate Open Graph and Twitter Card meta tags online. Free meta tag generator for social media previews. Create optimized tags for Facebook, Twitter, LinkedIn.',
    keywords: 'meta tag generator, og tags, seo meta tags',
    category: 'Web',
  },
  {
    path: '/otp-generator',
    title: 'OTP Generator Online | AgentsAITools',
    description: 'Generate OTP (One-Time Password) codes online. Free TOTP and HOTP generator for two-factor authentication. Compatible with Google Authenticator and Authy.',
    keywords: 'otp generator, totp, hotp, 2fa',
    category: 'Web',
  },
  {
    path: '/mime-types',
    title: 'MIME Types Reference | AgentsAITools',
    description: 'Look up MIME types and file extensions online. Free MIME types reference with search functionality. Find the correct content type for any file format.',
    keywords: 'mime types, content type',
    category: 'Web',
  },
  {
    path: '/jwt-parser',
    title: 'JWT Decoder Online - Parse & Verify JSON Web Tokens | AgentsAITools',
    description: 'Decode and parse JWT tokens online. Free JWT decoder that displays header, payload, and signature. Validate tokens and check expiration.',
    keywords: 'jwt parser, jwt decoder, json web token',
    category: 'Web',
  },
  {
    path: '/keycode-info',
    title: 'Keyboard KeyCode Info | AgentsAITools',
    description: 'View keyboard key codes and event information online. Free keycode checker for web development. Get JavaScript key codes, char codes, and event details.',
    keywords: 'keycode, keyboard code, key event',
    category: 'Web',
  },
  {
    path: '/slugify-string',
    title: 'URL Slug Generator | AgentsAITools',
    description: 'Generate URL-friendly slugs from text online. Free slug generator supporting multiple languages and special characters. Create SEO-friendly URLs instantly.',
    keywords: 'slug generator, url slug, slugify',
    category: 'Web',
  },
  {
    path: '/html-wysiwyg-editor',
    title: 'HTML WYSIWYG Editor | AgentsAITools',
    description: 'Edit HTML with a visual WYSIWYG editor online. Free HTML editor with real-time preview and code view. Create and test HTML content easily.',
    keywords: 'html editor, wysiwyg editor',
    category: 'Web',
  },
  {
    path: '/user-agent-parser',
    title: 'User Agent Parser | AgentsAITools',
    description: 'Parse and analyze user agent strings online. Free user agent parser that identifies browser, OS, device, and rendering engine details. Debug and test.',
    keywords: 'user agent parser, browser detection',
    category: 'Web',
  },
  {
    path: '/http-status-codes',
    title: 'HTTP Status Codes Reference | AgentsAITools',
    description: 'Look up HTTP status codes and their meanings online. Free HTTP status code reference with detailed explanations. Learn about 2xx, 3xx, 4xx, and 5xx codes.',
    keywords: 'http status codes, http codes',
    category: 'Web',
  },
  {
    path: '/json-diff',
    title: 'JSON Diff Comparator | AgentsAITools',
    description: 'Compare two JSON objects and find differences online. Free JSON diff tool with visual highlighting. Identify added, removed, and modified properties easily.',
    keywords: 'json diff, json compare',
    category: 'Web',
  },
  {
    path: '/safelink-decoder',
    title: 'Outlook SafeLink Decoder | AgentsAITools',
    description: 'Decode Outlook SafeLink URLs online. Free SafeLink decoder that extracts the original URL from Microsoft\'s wrapped links. Bypass link protection safely.',
    keywords: 'safelink decoder, outlook safelink',
    category: 'Web',
  },
  // Images 工具
  {
    path: '/qr-code-generator',
    title: 'QR Code Generator | AgentsAITools',
    description: 'Generate QR codes online. Free QR code generator.',
    keywords: 'qr code generator, create qr code',
    category: 'Images',
  },
  {
    path: '/wifi-qrcode-generator',
    title: 'WiFi QR Code Generator | AgentsAITools',
    description: 'Generate QR codes for WiFi networks. Free WiFi QR generator.',
    keywords: 'wifi qr code, wifi qr generator',
    category: 'Images',
  },
  {
    path: '/svg-placeholder-generator',
    title: 'SVG Placeholder Generator | AgentsAITools',
    description: 'Generate SVG placeholder images online. Free placeholder generator.',
    keywords: 'svg placeholder, placeholder image',
    category: 'Images',
  },
  {
    path: '/camera-recorder',
    title: 'Camera Recorder Online | AgentsAITools',
    description: 'Record video from your camera online. Free camera recorder.',
    keywords: 'camera recorder, video recorder',
    category: 'Images',
  },
  // Development 工具
  {
    path: '/git-memo',
    title: 'Git Commands Cheatsheet | AgentsAITools',
    description: 'Git commands cheatsheet and reference guide. Free Git memo with common commands, branching strategies, and workflow examples. Perfect for beginners and pros.',
    keywords: 'git commands, git cheatsheet',
    category: 'Development',
  },
  {
    path: '/random-port-generator',
    title: 'Random Port Generator | AgentsAITools',
    description: 'Generate random port numbers online. Free random port generator for development and testing. Find available ports for local servers and applications.',
    keywords: 'random port, port generator',
    category: 'Development',
  },
  {
    path: '/crontab-generator',
    title: 'Crontab Generator Online - Cron Expression Generator | AgentsAITools',
    description: 'Generate crontab expressions online with human-readable descriptions. Free crontab generator supporting all cron syntax. Schedule tasks easily.',
    keywords: 'crontab generator, cron expression',
    category: 'Development',
  },
  {
    path: '/json-prettify',
    title: 'JSON Formatter Online Free - Format & Validate JSON | AgentsAITools',
    description: 'Format, validate, and prettify JSON data online. Free JSON formatter with syntax highlighting, error detection, and minification. No signup required.',
    keywords: 'json formatter, json prettify, json validator',
    category: 'Development',
  },
  {
    path: '/json-minify',
    title: 'JSON Minifier | AgentsAITools',
    description: 'Minify and compress JSON data online. Free JSON minifier that removes whitespace and reduces file size. Optimize JSON for production with instant results.',
    keywords: 'json minify, compress json',
    category: 'Development',
  },
  {
    path: '/json-to-csv',
    title: 'JSON to CSV Converter | AgentsAITools',
    description: 'Convert JSON to CSV format online. Free JSON to CSV converter with customizable delimiters and headers. Export JSON data to spreadsheets easily.',
    keywords: 'json to csv, json csv converter',
    category: 'Development',
  },
  {
    path: '/sql-prettify',
    title: 'SQL Formatter Online Free - Beautify SQL Queries | AgentsAITools',
    description: 'Format and prettify SQL queries online. Free SQL formatter with syntax highlighting and indentation. Clean up messy SQL code instantly.',
    keywords: 'sql formatter, sql beautifier',
    category: 'Development',
  },
  {
    path: '/chmod-calculator',
    title: 'Chmod Calculator Online | AgentsAITools',
    description: 'Calculate Linux file permissions online. Free chmod calculator with visual permission display. Convert between octal notation and symbolic representation.',
    keywords: 'chmod calculator, linux permissions',
    category: 'Development',
  },
  {
    path: '/docker-run-to-docker-compose-converter',
    title: 'Docker Run to Compose Converter - Convert docker run | AgentsAITools',
    description: 'Convert docker run commands to docker-compose.yml format online. Free Docker converter that generates valid YAML from command line arguments.',
    keywords: 'docker converter, docker compose, docker run',
    category: 'Development',
  },
  {
    path: '/xml-formatter',
    title: 'XML Formatter Online | AgentsAITools',
    description: 'Format and prettify XML data online. Free XML formatter with syntax highlighting and validation. Clean up messy XML with instant formatting.',
    keywords: 'xml formatter, xml beautifier',
    category: 'Development',
  },
  {
    path: '/yaml-prettify',
    title: 'YAML Viewer Online | AgentsAITools',
    description: 'Format and validate YAML data online. Free YAML viewer with syntax highlighting and tree structure. Debug and clean up YAML configurations.',
    keywords: 'yaml viewer, yaml formatter',
    category: 'Development',
  },
  {
    path: '/email-normalizer',
    title: 'Email Address Normalizer | AgentsAITools',
    description: 'Normalize and validate email addresses online. Free email normalizer that standardizes formats, removes aliases, and validates syntax. Clean email lists.',
    keywords: 'email normalizer, email validator',
    category: 'Development',
  },
  {
    path: '/regex-tester',
    title: 'Regex Tester Online Free - Test Regular Expressions | AgentsAITools',
    description: 'Test regular expressions online with real-time matching. Free regex tester with syntax highlighting, capture groups, and match details.',
    keywords: 'regex tester, regex validator, regular expression',
    category: 'Development',
  },
  {
    path: '/regex-memo',
    title: 'Regex Cheatsheet | AgentsAITools',
    description: 'Regular expressions cheatsheet and reference guide. Free regex memo with common patterns, syntax examples, and testing tips. Perfect for quick reference.',
    keywords: 'regex cheatsheet, regex reference',
    category: 'Development',
  },
  // Network 工具
  {
    path: '/ipv4-subnet-calculator',
    title: 'IPv4 Subnet Calculator | AgentsAITools',
    description: 'Calculate IPv4 subnets online. Free subnet calculator supporting CIDR notation. Get network address, broadcast address, host range, and subnet mask.',
    keywords: 'subnet calculator, cidr calculator',
    category: 'Network',
  },
  {
    path: '/ipv4-address-converter',
    title: 'IPv4 Address Converter | AgentsAITools',
    description: 'Convert IPv4 addresses between formats online. Free IP address converter supporting decimal, binary, hexadecimal, and dotted notation. Instant conversion.',
    keywords: 'ipv4 converter, ip address converter',
    category: 'Network',
  },
  {
    path: '/ipv4-range-expander',
    title: 'IPv4 Range Expander | AgentsAITools',
    description: 'Expand IPv4 address ranges and CIDR notation online. Free IP range expander that lists all IPs in a subnet. Generate IP address lists easily.',
    keywords: 'ipv4 range, ip range expander',
    category: 'Network',
  },
  {
    path: '/mac-address-lookup',
    title: 'MAC Address Lookup | AgentsAITools',
    description: 'Look up MAC address vendor information online. Free MAC address lookup with OUI database. Identify device manufacturers from MAC addresses.',
    keywords: 'mac address lookup, mac vendor',
    category: 'Network',
  },
  {
    path: '/mac-address-generator',
    title: 'MAC Address Generator | AgentsAITools',
    description: 'Generate random MAC addresses online. Free MAC address generator with vendor selection. Create valid MAC addresses for testing and development.',
    keywords: 'mac address generator, random mac',
    category: 'Network',
  },
  {
    path: '/ipv6-ula-generator',
    title: 'IPv6 ULA Generator | AgentsAITools',
    description: 'Generate IPv6 Unique Local Address (ULA) prefixes online. Free IPv6 ULA generator for private networks. Create unique /48 prefixes for your infrastructure.',
    keywords: 'ipv6 ula, ipv6 generator',
    category: 'Network',
  },
  // Math 工具
  {
    path: '/math-evaluator',
    title: 'Math Expression Evaluator | AgentsAITools',
    description: 'Evaluate mathematical expressions online. Free math evaluator supporting arithmetic, trigonometry, logarithms, and more. Instant calculation with step-by-step.',
    keywords: 'math evaluator, calculator, math expression',
    category: 'Math',
  },
  {
    path: '/eta-calculator',
    title: 'ETA Calculator | AgentsAITools',
    description: 'Calculate estimated time of arrival online. Free ETA calculator for travel time estimation. Account for distance, speed, and stops in your calculations.',
    keywords: 'eta calculator, arrival time',
    category: 'Math',
  },
  {
    path: '/percentage-calculator',
    title: 'Percentage Calculator | AgentsAITools',
    description: 'Calculate percentages online. Free percentage calculator for discounts, tips, increases, and decreases. Instant results with step-by-step explanations.',
    keywords: 'percentage calculator, percent calc',
    category: 'Math',
  },
  // Measurement 工具
  {
    path: '/chronometer',
    title: 'Chronometer Timer Online | AgentsAITools',
    description: 'Online stopwatch and chronometer with lap times. Free chronometer tool for timing activities, workouts, and experiments. Save and export timing data.',
    keywords: 'chronometer, stopwatch, timer',
    category: 'Measurement',
  },
  {
    path: '/temperature-converter',
    title: 'Temperature Converter | AgentsAITools',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin online. Free temperature converter with instant conversion. Perfect for cooking, science, and travel.',
    keywords: 'temperature converter, celsius to fahrenheit',
    category: 'Measurement',
  },
  {
    path: '/benchmark-builder',
    title: 'Benchmark Builder Online | AgentsAITools',
    description: 'Create and run performance benchmarks online. Free benchmark builder for testing algorithms, APIs, and code execution times. Compare results easily.',
    keywords: 'benchmark builder, performance test',
    category: 'Measurement',
  },
  // Text 工具
  {
    path: '/lorem-ipsum-generator',
    title: 'Lorem Ipsum Generator | AgentsAITools',
    description: 'Generate Lorem Ipsum placeholder text online. Free Lorem Ipsum generator with customizable paragraphs, sentences, and words. Perfect for design mockups.',
    keywords: 'lorem ipsum, placeholder text',
    category: 'Text',
  },
  {
    path: '/text-statistics',
    title: 'Text Statistics Analyzer | AgentsAITools',
    description: 'Analyze text statistics online. Free text statistics tool counting words, characters, sentences, paragraphs, and reading time. Improve your writing clarity.',
    keywords: 'text statistics, word count, character count',
    category: 'Text',
  },
  {
    path: '/emoji-picker',
    title: 'Emoji Picker Online | AgentsAITools',
    description: 'Browse and copy emojis easily. Free emoji picker with search functionality and category filtering. Find the perfect emoji for any occasion.',
    keywords: 'emoji picker, emoji list',
    category: 'Text',
  },
  {
    path: '/string-obfuscator',
    title: 'String Obfuscator | AgentsAITools',
    description: 'Obfuscate and mask strings online. Free string obfuscator for protecting sensitive text data. Generate masked versions of emails, phone numbers, and more.',
    keywords: 'string obfuscator, text mask',
    category: 'Text',
  },
  {
    path: '/text-diff',
    title: 'Text Diff Comparator | AgentsAITools',
    description: 'Compare two texts and find differences online. Free text diff tool with side-by-side comparison and change highlighting. Identify additions, deletions, and modifications.',
    keywords: 'text diff, text compare, diff tool',
    category: 'Text',
  },
  {
    path: '/numeronym-generator',
    title: 'Numeronym Generator | AgentsAITools',
    description: 'Generate numeronyms from words online. Free numeronym generator for creating abbreviations like i18n, l10n, and a11y. Perfect for tech terminology.',
    keywords: 'numeronym generator, abbreviation',
    category: 'Text',
  },
  {
    path: '/ascii-text-drawer',
    title: 'ASCII Text Art Generator | AgentsAITools',
    description: 'Create ASCII art text online. Free ASCII text generator with multiple font styles. Generate decorative text for terminals, README files, and messages.',
    keywords: 'ascii art, text art, ascii text',
    category: 'Text',
  },
  // Data 工具
  {
    path: '/phone-parser-and-formatter',
    title: 'Phone Number Parser | AgentsAITools',
    description: 'Parse and format phone numbers online. Free phone parser supporting international formats. Validate, format, and extract country codes from phone numbers.',
    keywords: 'phone parser, phone formatter',
    category: 'Data',
  },
  {
    path: '/iban-validator-and-parser',
    title: 'IBAN Validator and Parser | AgentsAITools',
    description: 'Validate and parse IBAN (International Bank Account Number) online. Free IBAN validator with country detection and bank information extraction.',
    keywords: 'iban validator, iban check',
    category: 'Data',
  },
  // New tools
  {
    path: '/unix-timestamp-converter',
    title: 'Unix Timestamp Converter Online - Epoch Converter | AgentsAITools',
    description: 'Convert between Unix timestamps and human-readable dates online. Free timestamp converter supporting seconds and milliseconds.',
    keywords: 'unix timestamp, epoch converter, timestamp to date, date to timestamp',
    category: 'Converter',
  },
  {
    path: '/my-ip',
    title: 'What Is My IP Address - Check Public IP Online | AgentsAITools',
    description: 'Check your public IP address online. Free IP address lookup tool showing your IP, location, and ISP information.',
    keywords: 'my ip, what is my ip, ip address, public ip, ip lookup',
    category: 'Network',
  },
];

// 生成 HTML
function generateHtml(page) {
  const path = page.path === '/' ? '/' : `${page.path}/`;
  const url = `${BASE_URL}${path}`;
  const category = page.category || 'Tools';
  
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
  
  // 替换 OG tags (支持多行)
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/s, `<meta\n      property="og:url"\n      content="${url}"\n    />`);
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/s, `<meta\n      property="og:title"\n      content="${page.title}"\n    />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/s, `<meta\n      property="og:description"\n      content="${page.description}"\n    />`);
  
  // 替换 Twitter tags (支持多行)
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/s, `<meta\n      name="twitter:title"\n      content="${page.title}"\n    />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/s, `<meta\n      name="twitter:description"\n      content="${page.description}"\n    />`);
  
  // 替换 Keywords
  html = html.replace(/<meta name="keywords" content="[^"]*"/, `<meta name="keywords" content="${page.keywords}"`);

  // 移除所有现有的 JSON-LD
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');

  // 添加页面级 JSON-LD 结构化数据
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.title,
    "description": page.description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "AgentsAITools",
      "url": BASE_URL
    },
    "datePublished": "2026-05-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  // 面包屑 JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category,
        "item": `${BASE_URL}/#${category.toLowerCase().replace(/\s+/g, '-')}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": page.title.split(' - ')[0].split(' | ')[0],
        "item": url
      }
    ]
  };

  // 只在首页添加 WebApplication 和 Organization schema
  let extraJsonLd = '';
  if (page.path === '/') {
    const webAppJsonLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "AgentsAITools",
      "url": BASE_URL,
      "description": page.description,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "isAccessibleForFree": true
    };

    const orgJsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AgentsAITools",
      "url": BASE_URL,
      "logo": `${BASE_URL}/favicon-32x32.png`,
      "sameAs": ["https://github.com/ruoyexipan/it-tools"],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@agentsaitools.com"
      }
    };

    extraJsonLd = `
  <script type="application/ld+json">${JSON.stringify(webAppJsonLd, null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(orgJsonLd, null, 2)}</script>`;
  }

  // 添加所有 JSON-LD 到 head
  html = html.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(webPageJsonLd, null, 2)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd, null, 2)}</script>${extraJsonLd}
  </head>`);

  // 添加 H1 标签
  const h1Title = page.title.split(' - ')[0].split(' | ')[0];
  const h1Html = `
    <h1 style="max-width: 600px; margin: 40px auto 20px; font-size: 32px; font-weight: 600; color: #1d1d1f;">${h1Title}</h1>
    <p style="max-width: 600px; margin: 0 auto 20px; color: #6e6e73; font-size: 16px; line-height: 1.6;">${page.description}</p>
  `;
  // 在 <div id="app"> 之后添加 H1（仅非首页）
  if (page.path !== '/') {
    html = html.replace('<div id="app">', `<div id="app">\n    ${h1Html}`);
  }

  // 添加相关工具链接（仅工具页面，非首页）
  let relatedHtml = '';
  let allToolsHtml = '';
  
  if (page.path !== '/') {
    const relatedTools = getRelatedTools(page);
    const allTools = getAllToolsList(page);
    
    // 相关工具（同类别）
    if (relatedTools.length > 0) {
      relatedHtml = `
    <div class="related-tools" style="max-width: 600px; margin: 24px auto; padding: 24px; background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px;">
      <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #1d1d1f;">Related Tools</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${relatedTools.map(tool => `<a href="${BASE_URL}${tool.path}/" style="display: inline-flex; align-items: center; padding: 8px 14px; background: #f5f5f7; color: #1d1d1f; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: 500; border: 1px solid #e8e8ed; transition: all 0.2s;">${tool.name}</a>`).join('\n        ')}
      </div>
    </div>`;
    }

    // 所有工具列表（按类别分组，About/Contact/Legal 放最后）
    const categories = {};
    const specialPages = [];
    
    allTools.forEach(tool => {
      if (['About', 'Contact', 'Legal'].includes(tool.category)) {
        specialPages.push(tool);
      } else {
        if (!categories[tool.category]) {
          categories[tool.category] = [];
        }
        categories[tool.category].push(tool);
      }
    });

    // 按类别排序：Crypto, Converter, Web, Images, Development, Network, Math, Measurement, Text, Data
    const categoryOrder = ['Crypto', 'Converter', 'Web', 'Images', 'Development', 'Network', 'Math', 'Measurement', 'Text', 'Data'];
    const sortedCategories = Object.entries(categories).sort(([a], [b]) => {
      const aIndex = categoryOrder.indexOf(a);
      const bIndex = categoryOrder.indexOf(b);
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
    });

    allToolsHtml = `
    <div class="all-tools" style="max-width: 600px; margin: 24px auto; padding: 24px; background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px;">
      <h3 style="margin-bottom: 20px; font-size: 18px; font-weight: 600; color: #1d1d1f;">All Developer Tools</h3>
      ${sortedCategories.map(([category, tools]) => `
        <div style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 10px; font-size: 14px; font-weight: 600; color: #6e6e73; text-transform: uppercase; letter-spacing: 0.5px;">${category}</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${tools.map(tool => `<a href="${BASE_URL}${tool.path}/" style="display: inline-flex; padding: 6px 12px; background: #f5f5f7; color: #1d1d1f; text-decoration: none; border-radius: 6px; font-size: 12px; border: 1px solid #e8e8ed; transition: all 0.2s;">${tool.name}</a>`).join('\n            ')}
          </div>
        </div>
      `).join('')}
      ${specialPages.length > 0 ? `
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e8e8ed;">
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${specialPages.map(tool => `<a href="${BASE_URL}${tool.path}/" style="display: inline-flex; padding: 6px 12px; background: #f5f5f7; color: #6e6e73; text-decoration: none; border-radius: 6px; font-size: 12px; border: 1px solid #e8e8ed;">${tool.name}</a>`).join('\n            ')}
          </div>
        </div>
      ` : ''}
    </div>`;
  }

  // 添加暗黑模式支持的 CSS
  const darkModeCss = `
    <style>
      /* Dark mode support for injected elements */
      :root.dark .related-tools,
      :root.dark .all-tools {
        background: #1e1e1e !important;
        border-color: #333 !important;
      }
      :root.dark .related-tools h3,
      :root.dark .all-tools h3,
      :root.dark .all-tools h4 {
        color: #f5f5f7 !important;
      }
      :root.dark .related-tools a,
      :root.dark .all-tools a {
        background: #2d2d2d !important;
        color: #f5f5f7 !important;
        border-color: #444 !important;
      }
      :root.dark .related-tools a:hover,
      :root.dark .all-tools a:hover {
        background: #3d3d3d !important;
        border-color: #0071e3 !important;
      }
      :root.dark h1 {
        color: #f5f5f7 !important;
      }
      :root.dark h1 + p {
        color: #999 !important;
      }
    </style>
  `;

  // 在 </head> 之前添加暗黑模式 CSS
  html = html.replace('</head>', `${darkModeCss}\n  </head>`);

  // 在 </body> 之前添加
  html = html.replace('</body>', `${relatedHtml}\n${allToolsHtml}\n  </body>`);

  return html;
}

// 获取相关工具
function getRelatedTools(currentPage) {
  const category = currentPage.category || 'Tools';
  const related = pages
    .filter(p => p.path !== '/' && p.path !== currentPage.path && p.category === category)
    .slice(0, 6);
  
  // 如果同类工具不足，添加其他类别的工具
  if (related.length < 6) {
    const others = pages
      .filter(p => p.path !== '/' && p.path !== currentPage.path && p.category !== category && !related.includes(p))
      .slice(0, 6 - related.length);
    related.push(...others);
  }
  
  return related.map(p => ({
    name: p.title.split(' - ')[0].split(' | ')[0],
    path: p.path
  }));
}

// 获取所有工具列表（用于底部链接）
function getAllToolsList(currentPage) {
  return pages
    .filter(p => p.path !== '/' && p.path !== currentPage.path)
    .map(p => ({
      name: p.title.split(' - ')[0].split(' | ')[0],
      path: p.path,
      category: p.category || 'Tools'
    }));
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
