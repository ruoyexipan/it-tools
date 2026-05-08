<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Privacy Policy - AgentsAITools',
  meta: [
    { name: 'description', content: 'Privacy Policy for AgentsAITools - Free online developer tools collection.' },
  ],
});
</script>

<template>
  <div class="legal-page">
    <h1>Privacy Policy</h1>
    <p class="last-updated">Last updated: May 8, 2026</p>

    <section>
      <h2>1. Introduction</h2>
      <p>Welcome to AgentsAITools ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website https://agentsaitools.com (the "Service").</p>
    </section>

    <section>
      <h2>2. Information We Collect</h2>
      <h3>2.1 Automatically Collected Information</h3>
      <p>When you visit our Service, we may automatically collect certain information, including:</p>
      <ul>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>IP address (anonymized)</li>
        <li>Pages visited and time spent</li>
        <li>Referring website addresses</li>
      </ul>

      <h3>2.2 Tools Usage Data</h3>
      <p>All tools on our website operate entirely within your browser. We do not collect, store, or transmit any data you input into our tools. Your data remains on your device.</p>
    </section>

    <section>
      <h2>3. Use of Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Provide and maintain our Service</li>
        <li>Improve user experience</li>
        <li>Monitor and analyze usage patterns</li>
        <li>Detect and prevent technical issues</li>
      </ul>
    </section>

    <section>
      <h2>4. Cookies</h2>
      <p>We use cookies to enhance your experience. You can set your browser to refuse all cookies or indicate when a cookie is being sent.</p>
    </section>

    <section>
      <h2>5. Third-Party Services</h2>
      <p>We may use third-party services for:</p>
      <ul>
        <li><strong>Analytics:</strong> Google Analytics to understand website usage</li>
        <li><strong>Advertising:</strong> Google AdSense to display advertisements</li>
        <li><strong>Hosting:</strong> Cloudflare for content delivery and security</li>
      </ul>
    </section>

    <section>
      <h2>6. Data Security</h2>
      <p>We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>
    </section>

    <section>
      <h2>7. Children's Privacy</h2>
      <p>Our Service is not intended for children under 13. We do not knowingly collect personal information from children.</p>
    </section>

    <section>
      <h2>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
    </section>

    <section>
      <h2>9. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, please contact us at:</p>
      <ul>
        <li>Email: contact@agentsaitools.com</li>
        <li>Website: https://agentsaitools.com/contact</li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="less">
.legal-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.8;
}

h1 {
  font-size: 36px;
  margin-bottom: 8px;
}

.last-updated {
  color: #666;
  margin-bottom: 40px;
}

h2 {
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 16px;
  color: #1a1a1a;
}

h3 {
  font-size: 18px;
  margin-top: 24px;
  margin-bottom: 12px;
}

p {
  margin-bottom: 16px;
  color: #333;
}

ul {
  padding-left: 24px;
  margin-bottom: 16px;

  li {
    margin-bottom: 8px;
    color: #333;
  }
}

section {
  margin-bottom: 32px;
}
</style>
