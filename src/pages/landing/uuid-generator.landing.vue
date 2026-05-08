<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'UUID Generator Online - Free GUID/UUID v4 Generator | AgentsAITools',
  meta: [
    { name: 'description', content: 'Generate UUID (Universally Unique Identifier) online. Free UUID v4 generator tool. Create unique IDs for databases, applications, and more.' },
    { name: 'keywords', content: 'uuid generator, guid generator, uuid v4 generator, unique id generator, uuid online, generate uuid, random uuid' },
    { property: 'og:title', content: 'UUID Generator Online - Free GUID/UUID v4 Generator | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/uuid-generator' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/uuid-generator' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What is a UUID?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information in computer systems. UUID v4 is randomly generated and has 122 random bits.' } },
  { '@type': 'Question', 'name': 'How to generate UUID?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Click the generate button to create a new UUID v4. You can generate multiple UUIDs at once and copy them all at once.' } },
  { '@type': 'Question', 'name': 'Is UUID unique?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'UUIDs are designed to be unique. The probability of collision is extremely low (1 in 2^122 for UUID v4), making them practically unique.' } },
]};
function goToTool() { router.push('/uuid-generator'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>UUID Generator Online</h1><p class="subtitle">Generate unique identifiers (UUID v4) instantly</p><button class="cta-button" @click="goToTool">Generate UUID →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>⚡ Instant Generation</h3><p>Generate UUIDs in real-time with one click.</p></div><div class="feature"><h3>📦 Bulk Generate</h3><p>Create multiple UUIDs at once.</p></div><div class="feature"><h3>📋 Easy Copy</h3><p>Copy individual or all UUIDs with one click.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What is a UUID?</h3><p>UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information in computer systems.</p></div><div class="faq-item"><h3>How to generate UUID?</h3><p>Click the generate button to create a new UUID v4. You can generate multiple UUIDs at once.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/token-generator">Token Generator</router-link></li><li><router-link to="/hash-text">Hash Generator</router-link></li><li><router-link to="/ulid-generator">ULID Generator</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #3b82f6; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #3b82f6; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #3b82f6; text-decoration: none; } } } }
</style>
