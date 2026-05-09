import { createRouter, createWebHistory } from 'vue-router';
import { layouts } from './layouts/index';
import HomePage from './pages/Home.page.vue';
import NotFound from './pages/404.page.vue';
import { tools } from './tools';
import { config } from './config';
import { routes as demoRoutes } from './ui/demo/demo.routes';

const toolsRoutes = tools.map(({ path, name, component, ...config }) => ({
  path,
  name,
  component,
  meta: { isTool: true, layout: layouts.toolLayout, name, ...config },
}));
const toolsRedirectRoutes = tools
  .filter(({ redirectFrom }) => redirectFrom && redirectFrom.length > 0)
  .flatMap(
    ({ path, redirectFrom }) => redirectFrom?.map(redirectSource => ({ path: redirectSource, redirect: path })) ?? [],
  );

const router = createRouter({
  history: createWebHistory(config.app.baseUrl),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./pages/Contact.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('./pages/legal/privacy-policy.vue'),
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('./pages/legal/terms-of-service.vue'),
    },
    // Landing pages for SEO
    {
      path: '/docker-run-to-compose-converter',
      name: 'docker-landing',
      component: () => import('./pages/landing/docker-run-to-compose.landing.vue'),
    },
    {
      path: '/jwt-decoder',
      name: 'jwt-landing',
      component: () => import('./pages/landing/jwt-decoder.landing.vue'),
    },
    {
      path: '/crontab-generator-landing',
      name: 'crontab-landing',
      component: () => import('./pages/landing/crontab-generator.landing.vue'),
    },
    {
      path: '/chmod-calculator-landing',
      name: 'chmod-landing',
      component: () => import('./pages/landing/chmod-calculator.landing.vue'),
    },
    {
      path: '/bcrypt-generator',
      name: 'bcrypt-landing',
      component: () => import('./pages/landing/bcrypt-generator.landing.vue'),
    },
    {
      path: '/otp-generator',
      name: 'otp-landing',
      component: () => import('./pages/landing/otp-generator.landing.vue'),
    },
    {
      path: '/uuid-generator-landing',
      name: 'uuid-landing',
      component: () => import('./pages/landing/uuid-generator.landing.vue'),
    },
    {
      path: '/regex-tester-landing',
      name: 'regex-landing',
      component: () => import('./pages/landing/regex-tester.landing.vue'),
    },
    {
      path: '/base64-converter',
      name: 'base64-landing',
      component: () => import('./pages/landing/base64-converter.landing.vue'),
    },
    {
      path: '/json-formatter',
      name: 'json-landing',
      component: () => import('./pages/landing/json-formatter.landing.vue'),
    },
    // New landing pages
    {
      path: '/base64-file',
      name: 'base64-file-landing',
      component: () => import('./pages/landing/base64-file.landing.vue'),
    },
    {
      path: '/color-converter-landing',
      name: 'color-landing',
      component: () => import('./pages/landing/color-converter.landing.vue'),
    },
    {
      path: '/date-time-converter-landing',
      name: 'datetime-landing',
      component: () => import('./pages/landing/date-time-converter.landing.vue'),
    },
    {
      path: '/hash-text-landing',
      name: 'hash-landing',
      component: () => import('./pages/landing/hash-text.landing.vue'),
    },
    {
      path: '/case-converter-landing',
      name: 'case-landing',
      component: () => import('./pages/landing/case-converter.landing.vue'),
    },
    {
      path: '/subnet-calculator',
      name: 'subnet-landing',
      component: () => import('./pages/landing/subnet-calculator.landing.vue'),
    },
    {
      path: '/base-converter',
      name: 'base-landing',
      component: () => import('./pages/landing/base-converter.landing.vue'),
    },
    {
      path: '/html-entities-landing',
      name: 'html-entities-landing',
      component: () => import('./pages/landing/html-entities.landing.vue'),
    },
    ...toolsRoutes,
    ...toolsRedirectRoutes,
    ...(config.app.env === 'development' ? demoRoutes : []),
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
    // All tools landing pages
    { path: '/ascii-text-drawer-landing', name: 'ascii-landing', component: () => import('./pages/landing/ascii-text-drawer.landing.vue') },
    { path: '/base64-string-landing', name: 'base64-string-landing', component: () => import('./pages/landing/base64-string-converter.landing.vue') },
    { path: '/basic-auth-landing', name: 'basic-auth-landing', component: () => import('./pages/landing/basic-auth-generator.landing.vue') },
    { path: '/benchmark-landing', name: 'benchmark-landing', component: () => import('./pages/landing/benchmark-builder.landing.vue') },
    { path: '/bip39-landing', name: 'bip39-landing', component: () => import('./pages/landing/bip39-generator.landing.vue') },
    { path: '/camera-recorder-landing', name: 'camera-landing', component: () => import('./pages/landing/camera-recorder.landing.vue') },
    { path: '/chronometer-landing', name: 'chronometer-landing', component: () => import('./pages/landing/chronometer.landing.vue') },
    { path: '/device-info-landing', name: 'device-info-landing', component: () => import('./pages/landing/device-information.landing.vue') },
    { path: '/email-normalizer-landing', name: 'email-landing', component: () => import('./pages/landing/email-normalizer.landing.vue') },
    { path: '/emoji-picker-landing', name: 'emoji-landing', component: () => import('./pages/landing/emoji-picker.landing.vue') },
    { path: '/encryption-landing', name: 'encryption-landing', component: () => import('./pages/landing/encryption.landing.vue') },
    { path: '/eta-calculator-landing', name: 'eta-landing', component: () => import('./pages/landing/eta-calculator.landing.vue') },
    { path: '/git-memo-landing', name: 'git-landing', component: () => import('./pages/landing/git-memo.landing.vue') },
    { path: '/hmac-landing', name: 'hmac-landing', component: () => import('./pages/landing/hmac-generator.landing.vue') },
    { path: '/html-wysiwyg-landing', name: 'html-wysiwyg-landing', component: () => import('./pages/landing/html-wysiwyg-editor.landing.vue') },
    { path: '/http-status-landing', name: 'http-status-landing', component: () => import('./pages/landing/http-status-codes.landing.vue') },
    { path: '/iban-landing', name: 'iban-landing', component: () => import('./pages/landing/iban-validator-and-parser.landing.vue') },
    { path: '/ipv4-address-landing', name: 'ipv4-address-landing', component: () => import('./pages/landing/ipv4-address-converter.landing.vue') },
    { path: '/ipv4-range-landing', name: 'ipv4-range-landing', component: () => import('./pages/landing/ipv4-range-expander.landing.vue') },
    { path: '/ipv6-ula-landing', name: 'ipv6-ula-landing', component: () => import('./pages/landing/ipv6-ula-generator.landing.vue') },
    { path: '/json-diff-landing', name: 'json-diff-landing', component: () => import('./pages/landing/json-diff.landing.vue') },
    { path: '/json-minify-landing', name: 'json-minify-landing', component: () => import('./pages/landing/json-minify.landing.vue') },
    { path: '/json-to-csv-landing', name: 'json-to-csv-landing', component: () => import('./pages/landing/json-to-csv.landing.vue') },
    { path: '/json-to-toml-landing', name: 'json-to-toml-landing', component: () => import('./pages/landing/json-to-toml.landing.vue') },
    { path: '/json-to-xml-landing', name: 'json-to-xml-landing', component: () => import('./pages/landing/json-to-xml.landing.vue') },
    { path: '/json-viewer-landing', name: 'json-viewer-landing', component: () => import('./pages/landing/json-viewer.landing.vue') },
    { path: '/jwt-parser-landing', name: 'jwt-parser-landing', component: () => import('./pages/landing/jwt-parser.landing.vue') },
    { path: '/keycode-landing', name: 'keycode-landing', component: () => import('./pages/landing/keycode-info.landing.vue') },
    { path: '/list-converter-landing', name: 'list-landing', component: () => import('./pages/landing/list-converter.landing.vue') },
    { path: '/lorem-ipsum-landing', name: 'lorem-landing', component: () => import('./pages/landing/lorem-ipsum-generator.landing.vue') },
    { path: '/mac-generator-landing', name: 'mac-generator-landing', component: () => import('./pages/landing/mac-address-generator.landing.vue') },
    { path: '/mac-lookup-landing', name: 'mac-lookup-landing', component: () => import('./pages/landing/mac-address-lookup.landing.vue') },
    { path: '/markdown-to-html-landing', name: 'markdown-landing', component: () => import('./pages/landing/markdown-to-html.landing.vue') },
    { path: '/math-evaluator-landing', name: 'math-landing', component: () => import('./pages/landing/math-evaluator.landing.vue') },
    { path: '/meta-tag-landing', name: 'meta-tag-landing', component: () => import('./pages/landing/meta-tag-generator.landing.vue') },
    { path: '/mime-types-landing', name: 'mime-landing', component: () => import('./pages/landing/mime-types.landing.vue') },
    { path: '/numeronym-landing', name: 'numeronym-landing', component: () => import('./pages/landing/numeronym-generator.landing.vue') },
    { path: '/password-landing', name: 'password-landing', component: () => import('./pages/landing/password-strength-analyser.landing.vue') },
    { path: '/pdf-signature-landing', name: 'pdf-signature-landing', component: () => import('./pages/landing/pdf-signature-checker.landing.vue') },
    { path: '/percentage-landing', name: 'percentage-landing', component: () => import('./pages/landing/percentage-calculator.landing.vue') },
    { path: '/phone-parser-landing', name: 'phone-landing', component: () => import('./pages/landing/phone-parser-and-formatter.landing.vue') },
    { path: '/qr-code-landing', name: 'qr-landing', component: () => import('./pages/landing/qr-code-generator.landing.vue') },
    { path: '/random-port-landing', name: 'random-port-landing', component: () => import('./pages/landing/random-port-generator.landing.vue') },
    { path: '/regex-memo-landing', name: 'regex-memo-landing', component: () => import('./pages/landing/regex-memo.landing.vue') },
    { path: '/roman-numeral-landing', name: 'roman-landing', component: () => import('./pages/landing/roman-numeral-converter.landing.vue') },
    { path: '/rsa-landing', name: 'rsa-landing', component: () => import('./pages/landing/rsa-key-pair-generator.landing.vue') },
    { path: '/safelink-landing', name: 'safelink-landing', component: () => import('./pages/landing/safelink-decoder.landing.vue') },
    { path: '/slugify-landing', name: 'slugify-landing', component: () => import('./pages/landing/slugify-string.landing.vue') },
    { path: '/sql-landing', name: 'sql-landing', component: () => import('./pages/landing/sql-prettify.landing.vue') },
    { path: '/string-obfuscator-landing', name: 'string-obfuscator-landing', component: () => import('./pages/landing/string-obfuscator.landing.vue') },
    { path: '/svg-placeholder-landing', name: 'svg-placeholder-landing', component: () => import('./pages/landing/svg-placeholder-generator.landing.vue') },
    { path: '/temperature-landing', name: 'temperature-landing', component: () => import('./pages/landing/temperature-converter.landing.vue') },
    { path: '/text-diff-landing', name: 'text-diff-landing', component: () => import('./pages/landing/text-diff.landing.vue') },
    { path: '/text-statistics-landing', name: 'text-statistics-landing', component: () => import('./pages/landing/text-statistics.landing.vue') },
    { path: '/text-to-binary-landing', name: 'text-to-binary-landing', component: () => import('./pages/landing/text-to-binary.landing.vue') },
    { path: '/nato-alphabet-landing', name: 'nato-landing', component: () => import('./pages/landing/text-to-nato-alphabet.landing.vue') },
    { path: '/text-to-unicode-landing', name: 'unicode-landing', component: () => import('./pages/landing/text-to-unicode.landing.vue') },
    { path: '/token-generator-landing', name: 'token-landing', component: () => import('./pages/landing/token-generator.landing.vue') },
    { path: '/toml-to-json-landing', name: 'toml-to-json-landing', component: () => import('./pages/landing/toml-to-json.landing.vue') },
    { path: '/toml-to-yaml-landing', name: 'toml-to-yaml-landing', component: () => import('./pages/landing/toml-to-yaml.landing.vue') },
    { path: '/ulid-landing', name: 'ulid-landing', component: () => import('./pages/landing/ulid-generator.landing.vue') },
    { path: '/url-encoder-landing', name: 'url-encoder-landing', component: () => import('./pages/landing/url-encoder.landing.vue') },
    { path: '/url-parser-landing', name: 'url-parser-landing', component: () => import('./pages/landing/url-parser.landing.vue') },
    { path: '/user-agent-landing', name: 'user-agent-landing', component: () => import('./pages/landing/user-agent-parser.landing.vue') },
    { path: '/wifi-qr-landing', name: 'wifi-qr-landing', component: () => import('./pages/landing/wifi-qr-code-generator.landing.vue') },
    { path: '/xml-formatter-landing', name: 'xml-formatter-landing', component: () => import('./pages/landing/xml-formatter.landing.vue') },
    { path: '/xml-to-json-landing', name: 'xml-to-json-landing', component: () => import('./pages/landing/xml-to-json.landing.vue') },
    { path: '/yaml-to-json-landing', name: 'yaml-to-json-landing', component: () => import('./pages/landing/yaml-to-json-converter.landing.vue') },
    { path: '/yaml-to-toml-landing', name: 'yaml-to-toml-landing', component: () => import('./pages/landing/yaml-to-toml.landing.vue') },
    { path: '/yaml-viewer-landing', name: 'yaml-viewer-landing', component: () => import('./pages/landing/yaml-viewer.landing.vue') },
