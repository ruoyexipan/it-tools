<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'Bcrypt Hash Generator Online - Free Password Hashing Tool | AgentsAITools',
  meta: [
    { name: 'description', content: 'Generate bcrypt hashes online. Free bcrypt password hashing tool with salt generation. Secure your passwords with bcrypt encryption.' },
    { name: 'keywords', content: 'bcrypt generator, bcrypt hash, password hash generator, bcrypt online, bcrypt encryption, secure password tool' },
    { property: 'og:title', content: 'Bcrypt Hash Generator Online - Free Password Hashing Tool | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/bcrypt-generator' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/bcrypt-generator' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What is bcrypt?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Bcrypt is a password hashing function designed to be slow and resistant to brute-force attacks. It includes a salt to prevent rainbow table attacks.' } },
  { '@type': 'Question', 'name': 'How to generate bcrypt hash?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your password and click generate. The tool creates a bcrypt hash with a random salt. You can adjust the cost factor (rounds) for security.' } },
  { '@type': 'Question', 'name': 'Is bcrypt secure?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, bcrypt is considered one of the most secure password hashing algorithms. It is designed to be slow, making brute-force attacks impractical.' } },
]};
function goToTool() { router.push('/bcrypt'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>Bcrypt Hash Generator</h1><p class="subtitle">Generate secure bcrypt password hashes online</p><button class="cta-button" @click="goToTool">Generate Bcrypt Hash →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>🔐 Secure Hashing</h3><p>Industry-standard bcrypt algorithm with configurable cost.</p></div><div class="feature"><h3>🧂 Auto Salt</h3><p>Automatic salt generation for each hash.</p></div><div class="feature"><h3>⚡ Instant Results</h3><p>Generate hashes in real-time.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What is bcrypt?</h3><p>Bcrypt is a password hashing function designed to be slow and resistant to brute-force attacks.</p></div><div class="faq-item"><h3>Is bcrypt secure?</h3><p>Yes, bcrypt is considered one of the most secure password hashing algorithms.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/hash-text">Hash Generator</router-link></li><li><router-link to="/encryption">Encryption Tool</router-link></li><li><router-link to="/jwt-parser">JWT Decoder</router-link></li></ul></div>
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
