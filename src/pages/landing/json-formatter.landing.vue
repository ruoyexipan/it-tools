<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'JSON Formatter Online - Free JSON Prettify & Validator | AgentsAITools',
  meta: [
    { name: 'description', content: 'Format, prettify, and validate JSON data online. Free JSON formatter tool with syntax highlighting, error detection, and minification. No signup required.' },
    { name: 'keywords', content: 'json formatter, json prettify, json validator, json beautifier, json online, json format tool, json viewer, json editor' },
    { property: 'og:title', content: 'JSON Formatter Online - Free JSON Prettify & Validator | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/json-formatter' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/json-formatter' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What is JSON formatter?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'JSON formatter is a tool that formats (prettifies) JSON data with proper indentation and line breaks, making it easier to read and debug.' } },
  { '@type': 'Question', 'name': 'How to format JSON?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Paste your JSON data into the input field. The tool automatically formats it with proper indentation and highlights any syntax errors.' } },
  { '@type': 'Question', 'name': 'Is this JSON formatter free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, this JSON formatter is completely free to use. No signup required. It formats, validates, and minifies JSON data.' } },
]};
function goToTool() { router.push('/json-prettify'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>JSON Formatter Online</h1><p class="subtitle">Format, prettify, and validate JSON data instantly</p><button class="cta-button" @click="goToTool">Format JSON →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>⚡ Instant Formatting</h3><p>Format JSON in real-time as you type.</p></div><div class="feature"><h3>🎨 Syntax Highlighting</h3><p>Color-coded JSON for easy reading.</p></div><div class="feature"><h3>✅ Error Detection</h3><p>Highlights JSON syntax errors.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What is JSON formatter?</h3><p>JSON formatter is a tool that formats JSON data with proper indentation and line breaks.</p></div><div class="faq-item"><h3>How to format JSON?</h3><p>Paste your JSON data into the input field. The tool automatically formats it.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/json-minify">JSON Minifier</router-link></li><li><router-link to="/json-to-yaml-converter">JSON to YAML</router-link></li><li><router-link to="/json-to-csv">JSON to CSV</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #f97316; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #f97316; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #f97316; text-decoration: none; } } } }
</style>
