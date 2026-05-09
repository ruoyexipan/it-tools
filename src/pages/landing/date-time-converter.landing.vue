<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'Date Time Converter Online - Unix Timestamp Converter | AgentsAITools',
  meta: [
    { name: 'description', content: 'Convert dates and timestamps online. Free Unix timestamp converter, epoch converter, ISO 8601 converter. Instant conversion, no signup.' },
    { name: 'keywords', content: 'unix timestamp converter, epoch converter, date converter, timestamp to date, iso 8601 converter, date format converter, time converter' },
    { property: 'og:title', content: 'Date Time Converter Online - Unix Timestamp Converter | AgentsAITools' },
    { property: 'og:description', content: 'Convert dates and timestamps online. Free Unix timestamp converter.' },
    { property: 'og:url', content: 'https://agentsaitools.com/date-time-converter' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/date-time-converter' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What is Unix timestamp?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Unix timestamp is the number of seconds since January 1, 1970 00:00:00 UTC. It is widely used in programming and databases to store dates.' } },
  { '@type': 'Question', 'name': 'How to convert timestamp to date?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your Unix timestamp in the input field. The converter automatically shows the human-readable date and time.' } },
  { '@type': 'Question', 'name': 'What date formats are supported?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The converter supports Unix timestamp, ISO 8601, RFC 2822, and various date formats. You can convert between any of these formats.' } },
]};
function goToTool() { router.push('/date-converter'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>Date Time Converter</h1><p class="subtitle">Convert Unix timestamps and date formats instantly</p><button class="cta-button" @click="goToTool">Convert Date →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>⏰ All Formats</h3><p>Supports Unix, ISO 8601, RFC 2822, and more.</p></div><div class="feature"><h3>⚡ Instant Conversion</h3><p>See all formats update in real-time.</p></div><div class="feature"><h3>🌍 Timezone Support</h3><p>Convert between different timezones.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What is Unix timestamp?</h3><p>Unix timestamp is the number of seconds since January 1, 1970 00:00:00 UTC.</p></div><div class="faq-item"><h3>How to convert timestamp to date?</h3><p>Enter your Unix timestamp and the converter shows the human-readable date.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/json-prettify">JSON Formatter</router-link></li><li><router-link to="/cron-generator">Crontab Generator</router-link></li><li><router-link to="/regex-tester">Regex Tester</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #f59e0b; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #f59e0b; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #f59e0b; text-decoration: none; } } } }
</style>
