<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'NATO Phonetic Alphabet Converter - Free Online Tool | AgentsAITools',
  meta: [
    { name: 'description', content: 'Convert text to NATO phonetic alphabet. Free online tool by AgentsAITools - no signup required. Fast, secure, and easy to use.' },
    { name: 'keywords', content: 'nato alphabet, phonetic alphabet, military alphabet, online tool, free tool, developer tool' },
    { property: 'og:title', content: 'NATO Phonetic Alphabet Converter - Free Online Tool | AgentsAITools' },
    { property: 'og:description', content: 'Convert text to NATO phonetic alphabet. Free tool, no signup required.' },
    { property: 'og:url', content: 'https://agentsaitools.com/text-to-nato-alphabet' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/text-to-nato-alphabet' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What is NATO Phonetic Alphabet Converter?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Convert text to NATO phonetic alphabet. It is a free online tool that works directly in your browser.' } },
  { '@type': 'Question', 'name': 'How to use NATO Phonetic Alphabet Converter?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Simply enter your input data and the tool will process it instantly. No signup or installation required.' } },
  { '@type': 'Question', 'name': 'Is NATO Phonetic Alphabet Converter free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, NATO Phonetic Alphabet Converter is completely free to use. No signup required. All processing happens in your browser.' } },
]};
function goToTool() { router.push('/text-to-nato-alphabet'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>NATO Phonetic Alphabet Converter</h1><p class="subtitle">Convert text to NATO phonetic alphabet</p><button class="cta-button" @click="goToTool">Use Tool →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>⚡ Fast & Instant</h3><p>Get results in real-time as you type.</p></div><div class="feature"><h3>🔒 Private & Secure</h3><p>All processing happens in your browser.</p></div><div class="feature"><h3>📱 Mobile Friendly</h3><p>Works on all devices.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What is NATO Phonetic Alphabet Converter?</h3><p>Convert text to NATO phonetic alphabet.</p></div><div class="faq-item"><h3>Is it free?</h3><p>Yes, completely free. No signup required.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/json-prettify">JSON Formatter</router-link></li><li><router-link to="/base64-string-converter">Base64 Converter</router-link></li><li><router-link to="/hash-text">Hash Generator</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #10b981 0%, #10b981dd 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #10b981; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #10b981; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #10b981; text-decoration: none; } } } }
</style>
