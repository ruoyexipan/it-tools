<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Support AgentsAITools - Sponsor & Donate',
  meta: [
    { name: 'description', content: 'Support AgentsAITools development. Help us keep the tools free and improve the platform.' },
  ],
});

const tiers = [
  {
    amount: 5,
    label: '$5',
    title: 'Supporter',
    description: 'Buy us a coffee! ☕',
    icon: '☕',
    color: '#10b981',
    url: 'https://www.paypal.com/ncp/payment/2XHMPQ9BV8Z22',
  },
  {
    amount: 15,
    label: '$15',
    title: 'Champion',
    description: 'Help us cover hosting costs',
    icon: '🏆',
    color: '#3b82f6',
    featured: true,
    url: 'https://www.paypal.com/ncp/payment/RVX6SUHYVUM4A',
  },
  {
    amount: 25,
    label: '$25',
    title: 'Hero',
    description: 'Fund new tool development',
    icon: '🚀',
    color: '#8b5cf6',
    url: 'https://www.paypal.com/ncp/payment/LRDALQQ94V4JW',
  },
];

function donate(tier: any) {
  window.open(tier.url, '_blank');
}

function donateCustom() {
  // Custom amount uses the $25 link as base
  window.open('https://www.paypal.com/ncp/payment/LRDALQQ94V4JW', '_blank');
}
</script>

<template>
  <div class="sponsor-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-icon">❤️</div>
      <h1>Support AgentsAITools</h1>
      <p class="hero-desc">
        Help us keep these tools free and improve the platform for developers worldwide.
      </p>
    </section>

    <!-- Why Support -->
    <section class="why-section">
      <h2>Why Support Us?</h2>
      <div class="reasons">
        <div class="reason">
          <div class="reason-icon">🆓</div>
          <h3>Keep Tools Free</h3>
          <p>All 90+ tools will always be free, no signup required.</p>
        </div>
        <div class="reason">
          <div class="reason-icon">🔧</div>
          <h3>New Tools</h3>
          <p>Help us develop new tools and improve existing ones.</p>
        </div>
        <div class="reason">
          <div class="reason-icon">⚡</div>
          <h3>Better Performance</h3>
          <p>Faster servers and better infrastructure for everyone.</p>
        </div>
      </div>
    </section>

    <!-- Donation Tiers -->
    <section class="tiers-section">
      <h2>Choose Your Support Level</h2>
      <div class="tiers-grid">
        <div
          v-for="tier in tiers"
          :key="tier.amount"
          class="tier-card"
          :class="{ featured: tier.featured }"
          @click="donate(tier)"
        >
          <div class="tier-icon">{{ tier.icon }}</div>
          <div class="tier-amount">{{ tier.label }}</div>
          <div class="tier-title">{{ tier.title }}</div>
          <div class="tier-desc">{{ tier.description }}</div>
          <button class="tier-btn" :style="{ background: tier.color }">
            Donate {{ tier.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Custom Amount -->
    <section class="custom-section">
      <h2>Other Amounts</h2>
      <p class="custom-desc">For custom amounts, please contact us directly.</p>
      <a href="mailto:contact@agentsaitools.com" class="contact-btn">
        📧 Contact Us
      </a>
    </section>

    <!-- Other Ways -->
    <section class="other-section">
      <h2>Other Ways to Support</h2>
      <div class="other-methods">
        <a href="https://x.com/ruoyexi666" target="_blank" rel="noopener noreferrer" class="method">
          <span class="method-icon">🐦</span>
          <span>Follow on Twitter</span>
        </a>
        <a href="https://github.com/ruoyexipan/it-tools" target="_blank" rel="noopener noreferrer" class="method">
          <span class="method-icon">⭐</span>
          <span>Star on GitHub</span>
        </a>
        <a href="mailto:contact@agentsaitools.com" class="method">
          <span class="method-icon">📧</span>
          <span>Share Feedback</span>
        </a>
      </div>
    </section>

    <!-- Thank You -->
    <section class="thankyou-section">
      <p>Thank you for your support! 🙏</p>
      <p class="small">Every contribution helps us keep the tools free and improve them.</p>
    </section>
  </div>
</template>

<style scoped>
.sponsor-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Hero */
.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 40px;
}

.hero-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.hero h1 {
  font-size: 36px;
  margin: 0 0 12px;
}

.hero-desc {
  font-size: 18px;
  opacity: 0.9;
  max-width: 500px;
  margin: 0 auto;
}

/* Why Section */
.why-section {
  margin-bottom: 40px;
}

.why-section h2 {
  font-size: 28px;
  text-align: center;
  margin-bottom: 24px;
}

.reasons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.reason {
  text-align: center;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
}

.reason-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.reason h3 {
  font-size: 16px;
  margin-bottom: 8px;
}

.reason p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* Tiers Section */
.tiers-section {
  margin-bottom: 40px;
}

.tiers-section h2 {
  font-size: 28px;
  text-align: center;
  margin-bottom: 24px;
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.tier-card {
  text-align: center;
  padding: 32px 24px;
  background: #ffffff;
  border: 2px solid #e8e8ed;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tier-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.tier-card.featured {
  border-color: #3b82f6;
  background: linear-gradient(180deg, #eff6ff 0%, #ffffff 100%);
}

.tier-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.tier-amount {
  font-size: 32px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 4px;
}

.tier-title {
  font-size: 18px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 8px;
}

.tier-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.tier-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.tier-btn:hover {
  opacity: 0.9;
}

/* Custom Section */
.custom-section {
  margin-bottom: 40px;
  text-align: center;
}

.custom-section h2 {
  font-size: 28px;
  margin-bottom: 12px;
}

.custom-desc {
  color: #666;
  margin-bottom: 16px;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #f8f9fa;
  border: 1px solid #e8e8ed;
  border-radius: 8px;
  text-decoration: none;
  color: #1d1d1f;
  font-size: 14px;
  transition: all 0.2s;
}

.contact-btn:hover {
  background: #e8e8ed;
  transform: translateY(-2px);
}

/* Other Section */
.other-section {
  margin-bottom: 40px;
}

.other-section h2 {
  font-size: 28px;
  text-align: center;
  margin-bottom: 24px;
}

.other-methods {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.method {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #f8f9fa;
  border: 1px solid #e8e8ed;
  border-radius: 8px;
  text-decoration: none;
  color: #1d1d1f;
  transition: all 0.2s;
}

.method:hover {
  background: #e8e8ed;
  transform: translateY(-2px);
}

.method-icon {
  font-size: 20px;
}

/* Thank You */
.thankyou-section {
  text-align: center;
  padding: 32px;
  background: #f0fdf4;
  border-radius: 12px;
}

.thankyou-section p {
  font-size: 18px;
  color: #166534;
  margin: 0;
}

.thankyou-section .small {
  font-size: 14px;
  color: #86868b;
  margin-top: 8px;
}

/* Dark Mode */
:root.dark .tier-card {
  background: #1e1e1e;
  border-color: #333;
}

:root.dark .tier-amount,
:root.dark .tier-title {
  color: #f5f5f7;
}

:root.dark .tier-desc {
  color: #999;
}

:root.dark .reason {
  background: #1e1e1e;
}

:root.dark .reason p {
  color: #999;
}

:root.dark .amount-input {
  background: #1e1e1e;
  border-color: #333;
}

:root.dark .currency {
  color: #f5f5f7;
}

:root.dark .method {
  background: #1e1e1e;
  border-color: #333;
  color: #f5f5f7;
}

:root.dark .thankyou-section {
  background: #1a2e1a;
}

@media (max-width: 768px) {
  .reasons,
  .tiers-grid {
    grid-template-columns: 1fr;
  }

  .custom-form {
    flex-direction: column;
  }

  .other-methods {
    flex-direction: column;
    align-items: center;
  }
}
</style>
