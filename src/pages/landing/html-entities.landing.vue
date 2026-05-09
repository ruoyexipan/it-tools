<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'HTML Entities Encoder Decoder Online | AgentsAITools',
  meta: [
    { name: 'description', content: 'Encode and decode HTML entities online. Free HTML special characters converter tool. Escape and unescape HTML entities instantly.' },
    { name: 'keywords', content: 'html entities, html encoder, html decoder, html special characters, html entities encoder, html escape, html unescape' },
    { property: 'og:title', content: 'HTML Entities Encoder Decoder Online | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/html-entities' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/html-entities' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What are HTML entities?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'HTML entities are special characters that are represented by codes in HTML. For example, &amp; represents & and &lt; represents <.' } },
  { '@type': 'Question', 'name': 'How to encode HTML entities?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your text in the input field. The tool automatically encodes special characters to HTML entities.' } },
  { '@type': 'Question', 'name': 'Is this HTML encoder free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our HTML entities encoder is completely free. No signup required. All encoding happens in your browser.' } },
]};
function goToTool() { router.push('/html-entities'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>HTML Entities Encoder</h1><p class="subtitle">Encode and decode HTML special characters instantly</p><button class="cta-button" @click="goToTool">Encode HTML →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>📝 All Entities</h3><p>Supports 200+ HTML entities.</p></div><div class="feature"><h3>⚡ Instant</h3><p>Encode and decode in real-time.</p></div><div class="feature"><h3>📋 Easy Copy</h3><p>Copy encoded output with one click.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What are HTML entities?</h3><p>HTML entities are special characters represented by codes in HTML.</p></div><div class="faq-item"><h3>How to encode HTML entities?</h3><p>Enter your text and the tool automatically encodes special characters.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/url-encoder">URL Encoder</router-link></li><li><router-link to="/json-prettify">JSON Formatter</router-link></li><li><router-link to="/base64-string-converter">Base64 Converter</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #d946ef 0%, #c026d3 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #d946ef; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #d946ef; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #d946ef; text-decoration: none; } } } }
</style>
