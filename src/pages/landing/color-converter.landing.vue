<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'Color Converter Online - HEX RGB HSL CMYK Converter | AgentsAITools',
  meta: [
    { name: 'description', content: 'Convert colors between HEX, RGB, HSL, HSV, CMYK formats online. Free color code converter with color picker. Instant conversion, no signup.' },
    { name: 'keywords', content: 'color converter, hex to rgb, rgb to hex, hsl to hex, color code converter, color picker, hex color code, rgb color code' },
    { property: 'og:title', content: 'Color Converter Online - HEX RGB HSL CMYK Converter | AgentsAITools' },
    { property: 'og:description', content: 'Convert colors between HEX, RGB, HSL, HSV, CMYK formats online. Free tool.' },
    { property: 'og:url', content: 'https://agentsaitools.com/color-converter' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/color-converter' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'How to convert HEX to RGB?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your HEX color code (e.g., #FF5733) in the input field. The converter automatically shows the RGB values (e.g., rgb(255, 87, 51)).' } },
  { '@type': 'Question', 'name': 'What color formats are supported?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The converter supports HEX, RGB, HSL, HSV, HSV, CMYK, and more. You can convert between any of these formats.' } },
  { '@type': 'Question', 'name': 'Is this color converter free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our color converter is completely free to use. No signup required. All conversions happen in your browser.' } },
]};
function goToTool() { router.push('/color-converter'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>Color Converter Online</h1><p class="subtitle">Convert between HEX, RGB, HSL, CMYK instantly</p><button class="cta-button" @click="goToTool">Convert Colors →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>🎨 All Formats</h3><p>Supports HEX, RGB, HSL, HSV, CMYK, and more.</p></div><div class="feature"><h3>👁️ Color Picker</h3><p>Visual color picker for easy selection.</p></div><div class="feature"><h3>⚡ Instant Conversion</h3><p>See all formats update in real-time.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>How to convert HEX to RGB?</h3><p>Enter your HEX color code and the converter automatically shows RGB values.</p></div><div class="faq-item"><h3>What color formats are supported?</h3><p>Supports HEX, RGB, HSL, HSV, CMYK, and more.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/json-prettify">JSON Formatter</router-link></li><li><router-link to="/base64-string-converter">Base64 Converter</router-link></li><li><router-link to="/hash-text">Hash Generator</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #a855f7; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #a855f7; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #a855f7; text-decoration: none; } } } }
</style>
