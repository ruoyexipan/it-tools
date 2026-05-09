<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'Number Base Converter Online - Binary Hex Decimal Octal | AgentsAITools',
  meta: [
    { name: 'description', content: 'Convert numbers between different bases online. Free base converter tool - binary, decimal, hex, octal conversion. Instant conversion, no signup.' },
    { name: 'keywords', content: 'base converter, binary converter, hex converter, decimal converter, octal converter, number base converter, binary to decimal, hex to decimal' },
    { property: 'og:title', content: 'Number Base Converter Online - Binary Hex Decimal Octal | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/integer-base-converter' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/integer-base-converter' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'How to convert binary to decimal?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your binary number in the input field. The converter automatically shows the decimal equivalent and other base formats.' } },
  { '@type': 'Question', 'name': 'What number bases are supported?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The converter supports binary (base 2), octal (base 8), decimal (base 10), hexadecimal (base 16), and any custom base from 2 to 36.' } },
  { '@type': 'Question', 'name': 'Is this base converter free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our base converter is completely free. No signup required. All conversions happen in your browser.' } },
]};
function goToTool() { router.push('/base-converter'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>Number Base Converter</h1><p class="subtitle">Convert between binary, decimal, hex, octal instantly</p><button class="cta-button" @click="goToTool">Convert Number →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>🔢 All Bases</h3><p>Binary, octal, decimal, hex, and custom bases.</p></div><div class="feature"><h3>⚡ Instant</h3><p>See all bases update in real-time.</p></div><div class="feature"><h3>📋 Easy Copy</h3><p>Copy any result with one click.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>How to convert binary to decimal?</h3><p>Enter your binary number and the converter shows decimal equivalent.</p></div><div class="faq-item"><h3>What number bases are supported?</h3><p>Supports binary, octal, decimal, hexadecimal, and any custom base from 2 to 36.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/json-prettify">JSON Formatter</router-link></li><li><router-link to="/base64-string-converter">Base64 Converter</router-link></li><li><router-link to="/hash-text">Hash Generator</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #6366f1; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #6366f1; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #6366f1; text-decoration: none; } } } }
</style>
