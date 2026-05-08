<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'Base64 Encoder Decoder Online - Free Base64 Converter | AgentsAITools',
  meta: [
    { name: 'description', content: 'Encode and decode Base64 strings online. Free Base64 converter tool. Supports text and file encoding. No signup required.' },
    { name: 'keywords', content: 'base64 encoder, base64 decoder, base64 converter, base64 online, base64 encode, base64 decode, base64 tool' },
    { property: 'og:title', content: 'Base64 Encoder Decoder Online - Free Base64 Converter | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/base64-converter' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/base64-converter' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What is Base64?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format. It is commonly used for encoding data in emails, URLs, and web applications.' } },
  { '@type': 'Question', 'name': 'How to encode Base64?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your text in the input field and the tool automatically encodes it to Base64. You can also decode Base64 back to text.' } },
  { '@type': 'Question', 'name': 'Is Base64 encryption?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No, Base64 is an encoding scheme, not encryption. It does not provide security - anyone can decode Base64. It is designed for data transport, not security.' } },
]};
function goToTool() { router.push('/base64-string-converter'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>Base64 Encoder Decoder</h1><p class="subtitle">Encode and decode Base64 strings instantly</p><button class="cta-button" @click="goToTool">Convert Base64 →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>⚡ Instant Conversion</h3><p>Encode and decode Base64 in real-time.</p></div><div class="feature"><h3>📁 File Support</h3><p>Encode files to Base64 and decode back.</p></div><div class="feature"><h3>📋 Easy Copy</h3><p>Copy results with one click.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What is Base64?</h3><p>Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format.</p></div><div class="faq-item"><h3>Is Base64 encryption?</h3><p>No, Base64 is an encoding scheme, not encryption. It does not provide security.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/url-encoder">URL Encoder</router-link></li><li><router-link to="/hash-text">Hash Generator</router-link></li><li><router-link to="/json-prettify">JSON Formatter</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #14b8a6; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #14b8a6; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #14b8a6; text-decoration: none; } } } }
</style>
