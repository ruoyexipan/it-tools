<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'Case Converter Online - Uppercase Lowercase Title Case | AgentsAITools',
  meta: [
    { name: 'description', content: 'Convert text case online. Free case converter tool - uppercase, lowercase, title case, camelCase, snake_case. Instant conversion, no signup.' },
    { name: 'keywords', content: 'case converter, uppercase converter, lowercase converter, title case converter, camel case, snake case, text case converter' },
    { property: 'og:title', content: 'Case Converter Online - Uppercase Lowercase Title Case | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/case-converter' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/case-converter' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'How to convert text to uppercase?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your text in the input field and click the Uppercase button. The tool instantly converts your text to uppercase.' } },
  { '@type': 'Question', 'name': 'What case formats are supported?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The converter supports uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case, and more.' } },
  { '@type': 'Question', 'name': 'Is this case converter free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our case converter is completely free. No signup required. All conversions happen in your browser.' } },
]};
function goToTool() { router.push('/case-converter'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>Case Converter Online</h1><p class="subtitle">Convert text case instantly - uppercase, lowercase, title case</p><button class="cta-button" @click="goToTool">Convert Case →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>📝 All Formats</h3><p>Uppercase, lowercase, title case, camelCase, snake_case.</p></div><div class="feature"><h3>⚡ Instant</h3><p>Convert text case in real-time.</p></div><div class="feature"><h3>📋 Easy Copy</h3><p>Copy converted text with one click.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>How to convert text to uppercase?</h3><p>Enter your text and click the Uppercase button.</p></div><div class="faq-item"><h3>What case formats are supported?</h3><p>Supports uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case, and more.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/text-statistics">Text Statistics</router-link></li><li><router-link to="/lorem-ipsum-generator">Lorem Ipsum Generator</router-link></li><li><router-link to="/text-diff">Text Diff</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #84cc16; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #84cc16; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #84cc16; text-decoration: none; } } } }
</style>
