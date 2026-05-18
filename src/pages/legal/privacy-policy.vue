<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Privacy Policy - AgentsAITools',
  meta: [
    { name: 'description', content: 'Privacy Policy for AgentsAITools - Free online developer tools.' },
  ],
});
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <h1>Privacy Policy</h1>
      <p class="page-subtitle">Last updated: May 2026</p>
    </header>

    <main class="page-content">
      <section class="content-section">
        <h2>Introduction</h2>
        <p>Welcome to AgentsAITools. We respect your privacy and are committed to protecting your personal data.</p>
        <p>This privacy policy explains how we collect, use, and protect your information when you use our website.</p>
      </section>

      <section class="content-section">
        <h2>Information We Collect</h2>
        <p>We collect minimal information to provide and improve our service:</p>
        <ul>
          <li><strong>Usage Data:</strong> Anonymous analytics about how you use our tools</li>
          <li><strong>Device Information:</strong> Browser type, operating system, screen resolution</li>
          <li><strong>IP Address:</strong> For security and analytics purposes</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and maintain our tools</li>
          <li>Improve user experience</li>
          <li>Analyze usage patterns</li>
          <li>Detect and prevent abuse</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>Data Processing</h2>
        <p><strong>All tool processing happens locally in your browser.</strong></p>
        <p>When you use our tools (JSON formatter, hash generator, etc.), your data is processed entirely on your device. No data is sent to our servers.</p>
      </section>

      <section class="content-section">
        <h2>Cookies</h2>
        <p>We use cookies for:</p>
        <ul>
          <li><strong>Essential cookies:</strong> Required for the website to function</li>
          <li><strong>Analytics cookies:</strong> To understand how visitors use our site</li>
          <li><strong>Advertising cookies:</strong> To display relevant ads (Google AdSense)</li>
        </ul>
        <p>You can control cookies through your browser settings.</p>
      </section>

      <section class="content-section">
        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>Google Analytics:</strong> Website analytics</li>
          <li><strong>Google AdSense:</strong> Advertising</li>
          <li><strong>Cloudflare:</strong> CDN and security</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>Data Security</h2>
        <p>We implement appropriate security measures to protect your information, including:</p>
        <ul>
          <li>HTTPS encryption</li>
          <li>Cloudflare security features</li>
          <li>Regular security updates</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request data deletion</li>
          <li>Opt-out of analytics tracking</li>
          <li>Disable cookies</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
      </section>

      <section class="content-section">
        <h2>Contact Us</h2>
        <p>If you have questions about this privacy policy, please contact us:</p>
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
