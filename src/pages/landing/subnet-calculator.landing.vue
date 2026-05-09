<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
useHead({
  title: 'IP Subnet Calculator Online - CIDR VLSM Calculator | AgentsAITools',
  meta: [
    { name: 'description', content: 'Calculate IP subnets online. Free IPv4 subnet calculator with CIDR and VLSM support. Calculate network address, broadcast, host range instantly.' },
    { name: 'keywords', content: 'subnet calculator, ip subnet calculator, cidr calculator, vlsm calculator, network calculator, ip range calculator, subnet mask calculator' },
    { property: 'og:title', content: 'IP Subnet Calculator Online - CIDR VLSM Calculator | AgentsAITools' },
    { property: 'og:url', content: 'https://agentsaitools.com/ipv4-subnet-calculator' },
  ],
  link: [{ rel: 'canonical', href: 'https://agentsaitools.com/ipv4-subnet-calculator' }],
});
const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
  { '@type': 'Question', 'name': 'How to calculate subnet mask?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your IP address and CIDR notation (e.g., 192.168.1.0/24). The calculator shows network address, broadcast address, host range, and subnet mask.' } },
  { '@type': 'Question', 'name': 'What is CIDR notation?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'CIDR (Classless Inter-Domain Routing) notation specifies IP addresses and their routing prefix. For example, /24 means the first 24 bits are the network portion.' } },
  { '@type': 'Question', 'name': 'Is this subnet calculator free?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, our subnet calculator is completely free. No signup required. All calculations happen in your browser.' } },
];
function goToTool() { router.push('/ipv4-subnet-calculator'); }
</script>
<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>
    <div class="hero"><h1>IP Subnet Calculator</h1><p class="subtitle">Calculate IPv4 subnets with CIDR and VLSM support</p><button class="cta-button" @click="goToTool">Calculate Subnet →</button></div>
    <div class="features"><h2>Features</h2><div class="feature-grid"><div class="feature"><h3>🌐 CIDR Support</h3><p>Full CIDR notation support.</p></div><div class="feature"><h3>📊 Detailed Info</h3><p>Network, broadcast, host range, subnet mask.</p></div><div class="feature"><h3>⚡ Instant</h3><p>Calculate subnets in real-time.</p></div><div class="feature"><h3>💯 Free Forever</h3><p>No signup, no limits.</p></div></div></div>
    <div class="faq"><h2>FAQ</h2><div class="faq-item"><h3>How to calculate subnet mask?</h3><p>Enter IP address and CIDR notation to get all subnet details.</p></div><div class="faq-item"><h3>What is CIDR notation?</h3><p>CIDR notation specifies IP addresses and their routing prefix.</p></div></div>
    <div class="related-tools"><h2>Related Tools</h2><ul><li><router-link to="/ipv4-address-converter">IPv4 Address Converter</router-link></li><li><router-link to="/mac-address-lookup">MAC Address Lookup</router-link></li><li><router-link to="/ipv6-ula-generator">IPv6 ULA Generator</router-link></li></ul></div>
  </div>
</template>
<style scoped lang="less">
.landing-page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
.hero { text-align: center; padding: 60px 0; background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); border-radius: 16px; color: white; margin-bottom: 40px; h1 { font-size: 36px; margin-bottom: 16px; } .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; } .cta-button { background: white; color: #0ea5e9; border: none; padding: 16px 32px; font-size: 18px; font-weight: 600; border-radius: 8px; cursor: pointer; &:hover { transform: scale(1.05); } } }
h2 { font-size: 28px; margin-bottom: 24px; }
.features { margin-bottom: 40px; .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; } .feature { padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { margin-bottom: 8px; } p { color: #666; } } }
.faq { margin-bottom: 40px; .faq-item { margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px; h3 { color: #0ea5e9; margin-bottom: 12px; } p { color: #666; } } }
.related-tools { ul { list-style: none; padding: 0; li { padding: 12px 0; border-bottom: 1px solid #eee; a { color: #0ea5e9; text-decoration: none; } } } }
</style>
