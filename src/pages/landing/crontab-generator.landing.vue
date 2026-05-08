<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'Crontab Generator Online - Free Cron Expression Tool | AgentsAITools',
  meta: [
    { name: 'description', content: 'Generate crontab expressions with human-readable descriptions. Free online crontab generator tool - create cron schedules easily. Supports all cron syntax.' },
    { name: 'keywords', content: 'crontab generator, cron expression generator, cron schedule generator, crontab syntax, cron job generator, online crontab tool, free crontab generator' },
    { property: 'og:title', content: 'Crontab Generator Online - Free Cron Expression Tool | AgentsAITools' },
    { property: 'og:description', content: 'Generate crontab expressions with human-readable descriptions. Free online tool.' },
    { property: 'og:url', content: 'https://agentsaitools.com/crontab-generator' },
    { name: 'twitter:title', content: 'Crontab Generator Online - Free Cron Expression Tool | AgentsAITools' },
    { name: 'twitter:description', content: 'Generate crontab expressions with human-readable descriptions. Free tool.' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/crontab-generator' }],
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'What is a crontab expression?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A crontab expression is a string of five fields that defines a schedule for running commands or scripts. The fields represent minute, hour, day of month, month, and day of week.' } },
    { '@type': 'Question', 'name': 'How to create a cron job?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Use our crontab generator to create the expression, then add it to your crontab file using the crontab -e command. The generator shows human-readable descriptions to help you verify the schedule.' } },
    { '@type': 'Question', 'name': 'Is this crontab generator free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our crontab generator is completely free to use. No signup required. It generates valid cron expressions with human-readable descriptions.' } },
  ],
};

function goToTool() { router.push('/crontab-generator'); }
</script>

<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero">
      <h1>Crontab Generator Online</h1>
      <p class="subtitle">Generate cron expressions with human-readable descriptions</p>
      <button class="cta-button" @click="goToTool">Generate Crontab →</button>
    </div>
    <div class="features">
      <h2>Features</h2>
      <div class="feature-grid">
        <div class="feature"><h3>⚡ Instant Generation</h3><p>Generate cron expressions in real-time with visual interface.</p></div>
        <div class="feature"><h3>📖 Human Readable</h3><p>See what your cron expression means in plain English.</p></div>
        <div class="feature"><h3>🔧 All Syntax Supported</h3><p>Supports standard cron, @daily, @weekly, @monthly, and more.</p></div>
        <div class="feature"><h3>💯 Free Forever</h3><p>Completely free. No signup, no limits.</p></div>
      </div>
    </div>
    <div class="faq">
      <h2>FAQ</h2>
      <div class="faq-item"><h3>What is a crontab expression?</h3><p>A crontab expression is a string of five fields that defines a schedule for running commands or scripts.</p></div>
      <div class="faq-item"><h3>How to create a cron job?</h3><p>Use our generator to create the expression, then add it to your crontab file using crontab -e.</p></div>
    </div>
    <div class="related-tools">
      <h2>Related Tools</h2>
      <ul>
        <li><router-link to="/json-prettify">JSON Formatter</router-link></li>
        <li><router-link to="/regex-tester">Regex Tester</router-link></li>
        <li><router-link to="/chmod-calculator">Chmod Calculator</router-link></li>
      </ul>
    </div>
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
