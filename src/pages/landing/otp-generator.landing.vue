<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'OTP Generator Online - Free TOTP/HOTP Code Generator | AgentsAITools',
  meta: [
    { name: 'description', content: 'Generate OTP (One-Time Password) codes online. Free TOTP and HOTP generator for 2FA authentication. Compatible with Google Authenticator.' },
    { name: 'keywords', content: 'otp generator, totp generator, hotp generator, 2fa code generator, one time password, authenticator app, otp online tool' },
    { property: 'og:title', content: 'OTP Generator Online - Free TOTP/HOTP Code Generator | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/otp-generator-landing' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/otp-generator-landing' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'What is OTP?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'OTP stands for One-Time Password. It is a temporary code used for two-factor authentication (2FA). TOTP is time-based, HOTP is counter-based.' } },
  { '@type': 'Question', 'name': 'How does TOTP work?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TOTP (Time-based OTP) generates a new code every 30 seconds using a shared secret and current time. It is compatible with apps like Google Authenticator.' } },
  { '@type': 'Question', 'name': 'Is this OTP generator secure?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, all OTP generation happens locally in your browser. The secret key never leaves your device.' } },
]};
function goToTool() { router.push('/otp-generator'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>OTP Generator Online</h1><p class="subtitle">Generate TOTP/HOTP codes for 2FA authentication</p><button class="cta-button" @click="goToTool">Generate OTP →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>🔑 TOTP & HOTP</h3><p>Supports both time-based and counter-based OTP.</p></div><div class="feature"><h3>📱 Compatible</h3><p>Works with Google Authenticator, Authy, and more.</p></div><div class="feature"><h3>🔒 Secure</h3><p>All generation happens locally in your browser.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>What is OTP?</h3><p>OTP stands for One-Time Password. It is a temporary code used for two-factor authentication.</p></div><div class="faq-item"><h3>How does TOTP work?</h3><p>TOTP generates a new code every 30 seconds using a shared secret and current time.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/hash-text">Hash Generator</router-link></li><li><router-link to="/encryption">Encryption Tool</router-link></li><li><router-link to="/jwt-parser">JWT Decoder</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #10b981; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #10b981; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #10b981; text-decoration: none; } } } }
</style>
