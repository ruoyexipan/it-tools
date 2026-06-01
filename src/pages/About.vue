<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'About AgentsAITools - Free Developer Tools Platform',
  meta: [
    { name: 'description', content: 'Learn about AgentsAITools - a free online developer tools platform with 90+ tools for developers and IT professionals.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://agentsaitools.com/about' },
  ],
});
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <h1>About AgentsAITools</h1>
      <p class="page-subtitle">Free Online Developer Tools Platform</p>
    </header>

    <main class="page-content">
      <section class="content-section">
        <h2>Our Mission</h2>
        <p>AgentsAITools is a free online developer tools platform providing 90+ tools for developers and IT professionals worldwide.</p>
        <p>We believe that essential developer tools should be accessible to everyone, without signup requirements or hidden fees.</p>
      </section>

      <section class="content-section">
        <h2>What We Offer</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>90+ Tools</h3>
            <p>JSON formatter, Base64 encoder, hash generator, JWT decoder, UUID generator, regex tester, and more.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🆓</div>
            <h3>100% Free</h3>
            <p>All tools are completely free to use. No hidden fees, no premium tiers.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Privacy First</h3>
            <p>All processing happens in your browser. No data sent to servers.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>Works on desktop, tablet, and mobile devices.</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Tool Categories</h2>
        <ul class="category-list">
          <li><strong>Crypto:</strong> Hash generators, encryption, UUID, JWT tools</li>
          <li><strong>Converters:</strong> JSON, YAML, Base64, color converters</li>
          <li><strong>Web:</strong> URL encoder, HTML entities, meta tags</li>
          <li><strong>Development:</strong> SQL formatter, regex tester, Docker tools</li>
          <li><strong>Network:</strong> IP calculators, MAC address tools</li>
          <li><strong>Text:</strong> Lorem ipsum, text diff, case converter</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>Technology</h2>
        <p>AgentsAITools is built with modern web technologies:</p>
        <ul class="tech-list">
          <li>Vue.js 3 with TypeScript</li>
          <li>Vite build tool</li>
          <li>Cloudflare Pages hosting</li>
          <li>Cloudflare CDN for global performance</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>Contact Us</h2>
        <p>Have questions, suggestions, or feedback? We'd love to hear from you.</p>
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
  font-size: 18px;
  color: #86868b;
  margin: 0;
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.content-section {
  background: #ffffff;
  border: 1px solid #e8e8ed;
  border-radius: 16px;
  padding: 24px;
}

.content-section h2 {
  font-size: 24px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 16px;
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.feature-card {
  padding: 20px;
  background: #f5f5f7;
  border-radius: 12px;
}

.feature-icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.feature-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 8px;
}

.feature-card p {
  font-size: 14px;
  color: #6e6e73;
  margin: 0;
  line-height: 1.5;
}

.category-list,
.tech-list {
  margin: 0;
  padding-left: 20px;
}

.category-list li,
.tech-list li {
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
:root.dark .content-section h2,
:root.dark .feature-card h3 {
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
:root.dark .category-list li,
:root.dark .tech-list li {
  color: #ccc;
}

:root.dark .feature-card {
  background: #2d2d2d;
}

:root.dark .feature-card p {
  color: #999;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 28px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
