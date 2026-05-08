<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Terms of Service - AgentsAITools',
  meta: [
    { name: 'description', content: 'Terms of Service for AgentsAITools - Free online developer tools collection.' },
  ],
});
</script>

<template>
  <div class="legal-page">
    <h1>Terms of Service</h1>
    <p class="last-updated">Last updated: May 8, 2026</p>

    <section>
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using AgentsAITools (the "Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>
    </section>

    <section>
      <h2>2. Description of Service</h2>
      <p>AgentsAITools provides a collection of free online developer tools, including but not limited to:</p>
      <ul>
        <li>JSON Formatter and Validator</li>
        <li>Base64 Encoder/Decoder</li>
        <li>Hash Generator</li>
        <li>Docker Converter</li>
        <li>JWT Decoder</li>
        <li>Various other developer utilities</li>
      </ul>
    </section>

    <section>
      <h2>3. User Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Use the Service for lawful purposes only</li>
        <li>Not attempt to disrupt or overload the Service</li>
        <li>Not use automated tools to access the Service excessively</li>
        <li>Not redistribute or resell the Service without permission</li>
      </ul>
    </section>

    <section>
      <h2>4. Intellectual Property</h2>
      <p>The Service and its original content, features, and functionality are owned by AgentsAITools and are protected by international copyright, trademark, and other intellectual property laws.</p>
    </section>

    <section>
      <h2>5. Privacy</h2>
      <p>Your use of the Service is also governed by our <router-link to="/privacy-policy">Privacy Policy</router-link>, which is incorporated into these Terms by reference.</p>
    </section>

    <section>
      <h2>6. Disclaimer of Warranties</h2>
      <p>The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:</p>
      <ul>
        <li>The Service will be uninterrupted or error-free</li>
        <li>The results obtained from the Service will be accurate or reliable</li>
        <li>The quality of any products, services, or information obtained through the Service will meet your expectations</li>
      </ul>
    </section>

    <section>
      <h2>7. Limitation of Liability</h2>
      <p>In no event shall AgentsAITools be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
    </section>

    <section>
      <h2>8. Third-Party Links</h2>
      <p>The Service may contain links to third-party websites or services that are not owned or controlled by AgentsAITools. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.</p>
    </section>

    <section>
      <h2>9. Changes to Terms</h2>
      <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>
    </section>

    <section>
      <h2>10. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at:</p>
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

a {
  color: #18a058;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
