<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'Chmod Calculator Online - Free Linux Permission Tool | AgentsAITools',
  meta: [
    { name: 'description', content: 'Calculate Linux file permissions with our free chmod calculator. Convert between octal and symbolic notation. Supports user, group, and other permissions.' },
    { name: 'keywords', content: 'chmod calculator, linux permissions calculator, file permissions calculator, chmod command generator, unix permissions, linux chmod tool' },
    { property: 'og:title', content: 'Chmod Calculator Online - Free Linux Permission Tool | AgentsAITools' },
    { property: 'og:description', content: 'Calculate Linux file permissions. Convert between octal and symbolic notation. Free tool.' },
    { property: 'og:url', content: 'https://agentsaitools.com/chmod-calculator' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/chmod-calculator' }],
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': 'What is chmod?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'chmod is a Unix/Linux command that changes the access permissions of files and directories. It uses octal (755) or symbolic (rwxr-xr-x) notation.' } },
    { '@type': 'Question', 'name': 'How to use chmod calculator?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Click the checkboxes to set read, write, and execute permissions for user, group, and others. The calculator shows both octal and symbolic notation.' } },
    { '@type': 'Question', 'name': 'What does 755 mean in chmod?', 'acceptedAnswer': { '@type': 'Answer', 'text': '755 means: owner has read+write+execute (7), group has read+execute (5), others have read+execute (5). It is the standard permission for directories and executable files.' } },
  ],
};

function goToTool() { router.push('/chmod-calculator'); }
</script>

<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero">
      <h1>Chmod Calculator Online</h1>
      <p class="subtitle">Calculate Linux file permissions instantly</p>
      <button class="cta-button" @click="goToTool">Calculate Permissions →</button>
    </div>
    <div class="features">
      <h2>Features</h2>
      <div class="feature-grid">
        <div class="feature"><h3>⚡ Instant Calculation</h3><p>See permission changes in real-time as you click.</p></div>
        <div class="feature"><h3>📊 Dual Notation</h3><p>Shows both octal (755) and symbolic (rwxr-xr-x) notation.</p></div>
        <div class="feature"><h3>🎯 Visual Interface</h3><p>Easy-to-use checkboxes for each permission.</p></div>
        <div class="feature"><h3>💯 Free Forever</h3><p>Completely free. No signup required.</p></div>
      </div>
    </div>
    <div class="faq">
      <h2>FAQ</h2>
      <div class="faq-item"><h3>What is chmod?</h3><p>chmod is a Unix/Linux command that changes the access permissions of files and directories.</p></div>
      <div class="faq-item"><h3>What does 755 mean?</h3><p>755 means: owner has read+write+execute (7), group has read+execute (5), others have read+execute (5).</p></div>
    </div>
    <div class="related-tools">
      <h2>Related Tools</h2>
      <ul>
        <li><router-link to="/crontab-generator">Crontab Generator</router-link></li>
        <li><router-link to="/json-prettify">JSON Formatter</router-link></li>
        <li><router-link to="/regex-tester">Regex Tester</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #8b5cf6; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #8b5cf6; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #8b5cf6; text-decoration: none; } } } }
</style>
