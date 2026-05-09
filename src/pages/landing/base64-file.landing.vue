<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'Base64 File Converter Online - Encode Files to Base64 | AgentsAITools',
  meta: [
    { name: 'description', content: 'Convert files to Base64 encoding online. Free Base64 file converter tool - encode images, PDFs, documents to Base64 string. No signup required.' },
    { name: 'keywords', content: 'base64 file converter, encode file to base64, base64 encode online, file to base64, base64 converter, base64 encoder, image to base64' },
    { property: 'og:title', content: 'Base64 File Converter Online - Encode Files to Base64 | AgentsAITools' },
    { property: 'og:description', content: 'Convert files to Base64 encoding online. Free tool, no signup required.' },
    { property: 'og:url', content: 'https://agentsaitools.com/base64-file-converter' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/base64-file-converter' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'How to convert file to Base64?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Upload or drag your file into the converter. The tool automatically encodes the file content to Base64 format. You can then copy the Base64 string or download it.' } },
  { '@type': 'Question', 'name': 'What is Base64 encoding?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Base64 is a binary-to-text encoding scheme that represents binary data in ASCII format. It is commonly used for embedding files in HTML, CSS, or JSON data.' } },
  { '@type': 'Question', 'name': 'Is Base64 file converter free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our Base64 file converter is completely free. No signup required. All processing happens in your browser.' } },
]};
function goToTool() { router.push('/base64-file-converter'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>Base64 File Converter</h1><p class="subtitle">Encode files to Base64 format instantly</p><button class="cta-button" @click="goToTool">Convert File →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>📁 Any File Type</h3><p>Supports images, PDFs, documents, and more.</p></div><div class="feature"><h3>⚡ Instant Encoding</h3><p>Convert files to Base64 in seconds.</p></div><div class="feature"><h3>🔒 Private & Secure</h3><p>All processing happens in your browser.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>How to convert file to Base64?</h3><p>Upload your file and the tool automatically encodes it to Base64 format.</p></div><div class="faq-item"><h3>What is Base64 encoding?</h3><p>Base64 is a binary-to-text encoding scheme that represents binary data in ASCII format.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/base64-string-converter">Base64 String Converter</router-link></li><li><router-link to="/json-prettify">JSON Formatter</router-link></li><li><router-link to="/hash-text">Hash Generator</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #06b6d4; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #06b6d4; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #06b6d4; text-decoration: none; } } } }
</style>
