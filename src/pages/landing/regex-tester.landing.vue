<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'Regex Tester Online - Free Regular Expression Testing Tool | AgentsAITools',
  meta: [
    { name: 'description', content: 'Test regular expressions online with real-time matching. Free regex tester tool with syntax highlighting, match details, and common patterns library.' },
    { name: 'keywords', content: 'regex tester, regular expression tester, regex online, regex tool, regex validator, regex pattern tester, regex checker' },
    { property: 'og:title', content: 'Regex Tester Online - Free Regular Expression Testing Tool | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/regex-tester' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/regex-tester' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What is regex?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Regex (Regular Expression) is a sequence of characters that defines a search pattern. It is used for pattern matching, validation, and text manipulation.' } },
  { '@type': 'Question', 'name': 'How to test regex?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your regex pattern and test string. The tool highlights matches in real-time and shows match details including groups and positions.' } },
  { '@type': 'Question', 'name': 'What regex flavors are supported?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The tester supports JavaScript regex flavor, which is compatible with most modern programming languages and tools.' } },
]};
function goToTool() { router.push('/regex-tester'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>Regex Tester Online</h1><p class="subtitle">Test regular expressions with real-time matching</p><button class="cta-button" @click="goToTool">Test Regex →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>⚡ Real-time Matching</h3><p>See matches highlighted as you type.</p></div><div class="feature"><h3>📊 Match Details</h3><p>View groups, positions, and match counts.</p></div><div class="feature"><h3>📚 Pattern Library</h3><p>Common regex patterns ready to use.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What is regex?</h3><p>Regex (Regular Expression) is a sequence of characters that defines a search pattern.</p></div><div class="faq-item"><h3>How to test regex?</h3><p>Enter your regex pattern and test string. The tool highlights matches in real-time.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/json-prettify">JSON Formatter</router-link></li><li><router-link to="/text-diff">Text Diff</router-link></li><li><router-link to="/hash-text">Hash Generator</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #ec4899; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #ec4899; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #ec4899; text-decoration: none; } } } }
</style>
