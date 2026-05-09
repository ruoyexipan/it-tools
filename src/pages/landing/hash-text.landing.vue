<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'Hash Generator Online - MD5 SHA256 SHA512 Hash Tool | AgentsAITools',
  meta: [
    { name: 'description', content: 'Generate MD5, SHA1, SHA256, SHA512 hashes online. Free hash generator tool for text and files. Instant hashing, no signup required.' },
    { name: 'keywords', content: 'hash generator, md5 generator, sha256 generator, hash tool, md5 hash online, sha256 hash, hash calculator, text hash' },
    { property: 'og:title', content: 'Hash Generator Online - MD5 SHA256 SHA512 Hash Tool | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/hash-text' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/hash-text' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What is a hash function?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A hash function converts input data into a fixed-size string of characters. It is one-way, meaning you cannot reverse a hash to get the original data.' } },
  { '@type': 'Question', 'name': 'How to generate MD5 hash?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your text in the input field. The tool automatically generates MD5, SHA1, SHA256, and other hashes.' } },
  { '@type': 'Question', 'name': 'Is this hash generator free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our hash generator is completely free. No signup required. All hashing happens in your browser.' } },
]};
function goToTool() { router.push('/hash-text'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>Hash Generator Online</h1><p class="subtitle">Generate MD5, SHA1, SHA256, SHA512 hashes instantly</p><button class="cta-button" @click="goToTool">Generate Hash →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>🔐 All Algorithms</h3><p>Supports MD5, SHA1, SHA256, SHA512, and more.</p></div><div class="feature"><h3>⚡ Instant Hashing</h3><p>Generate hashes in real-time.</p></div><div class="feature"><h3>🔒 Secure</h3><p>All hashing happens in your browser.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What is a hash function?</h3><p>A hash function converts input data into a fixed-size string of characters.</p></div><div class="faq-item"><h3>How to generate MD5 hash?</h3><p>Enter your text and the tool automatically generates multiple hashes.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/bcrypt">Bcrypt Generator</router-link></li><li><router-link to="/encryption">Encryption Tool</router-link></li><li><router-link to="/jwt-parser">JWT Decoder</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #ef4444; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #ef4444; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #ef4444; text-decoration: none; } } } }
</style>
