<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Terms of Service - AgentsAITools',
  meta: [
    { name: 'description', content: 'Terms of Service for AgentsAITools - Free online developer tools.' },
  ],
});
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <h1>Terms of Service</h1>
      <p class="page-subtitle">Last updated: May 2026</p>
    </header>

    <main class="page-content">
      <section class="content-section">
        <h2>Agreement to Terms</h2>
        <p>By accessing and using AgentsAITools, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
      </section>

      <section class="content-section">
        <h2>Description of Service</h2>
        <p>AgentsAITools provides free online developer tools including:</p>
        <ul>
          <li>JSON formatter and validator</li>
          <li>Base64 encoder/decoder</li>
          <li>Hash generators (MD5, SHA256, etc.)</li>
          <li>JWT decoder</li>
          <li>UUID generator</li>
          <li>Regex tester</li>
          <li>And 80+ more developer tools</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>User Responsibilities</h2>
        <p>When using our service, you agree to:</p>
        <ul>
          <li>Use the tools for lawful purposes only</li>
          <li>Not attempt to disrupt or overload our service</li>
          <li>Not use automated tools to access our service excessively</li>
          <li>Not redistribute or resell our tools without permission</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>Intellectual Property</h2>
        <p>The AgentsAITools website, including its design, code, and content, is protected by copyright and other intellectual property laws.</p>
        <p>Our tools are open-source and available under the GPL-3.0 license.</p>
      </section>

      <section class="content-section">
        <h2>Disclaimer of Warranties</h2>
        <p>Our service is provided "as is" without warranties of any kind. We do not guarantee:</p>
        <ul>
          <li>Uninterrupted or error-free service</li>
          <li>Accuracy of tool results</li>
          <li>Availability of specific tools</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>Limitation of Liability</h2>
        <p>AgentsAITools shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service.</p>
      </section>

      <section class="content-section">
        <h2>Third-Party Links</h2>
        <p>Our service may contain links to third-party websites. We are not responsible for the content or practices of these external sites.</p>
      </section>

      <section class="content-section">
        <h2>Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page.</p>
      </section>

      <section class="content-section">
        <h2>Contact Us</h2>
        <p>If you have questions about these terms, please contact us:</p>
        <p>Email: <a href="mailto:contact@agentsaitools.com" class="apple-link">contact@agentsaitools.com</a></p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 36px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 8px;
  letter-spacing: -0.5px;
}

.page-subtitle {
  font-size: 16px;
  color: #86868b;
  margin: 0;
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.content-section {
  background: #ffffff;
  border: 1px solid #e8e8ed;
  border-radius: 16px;
  padding: 24px;
}

.content-section h2 {
  font-size: 20px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 12px;
}

.content-section p {
  font-size: 15px;
  line-height: 1.6;
  color: #333;
  margin: 0 0 12px;
}

.content-section p:last-child {
  margin-bottom: 0;
}

.content-section ul {
  margin: 0 0 12px;
  padding-left: 20px;
}

.content-section li {
  font-size: 15px;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.5;
}

.apple-link {
  color: #0071e3;
  text-decoration: none;
}

.apple-link:hover {
  text-decoration: underline;
}

/* Dark Mode */
:root.dark .page-header h1,
:root.dark .content-section h2 {
  color: #f5f5f7;
}

:root.dark .page-subtitle {
  color: #999;
}

:root.dark .content-section {
  background: #1e1e1e;
  border-color: #333;
}

:root.dark .content-section p,
:root.dark .content-section li {
  color: #ccc;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 28px;
  }
}
</style>
