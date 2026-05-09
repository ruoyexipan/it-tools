<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'About - AgentsAITools',
  meta: [
    { name: 'description', content: 'About AgentsAITools - Free online developer tools collection created by ruoyeAi.' },
  ],
});
</script>

<template>
  <div class="about-page">
    <h1>About AgentsAITools</h1>
    <p class="last-updated">Created by ruoyeAi</p>

    <section>
      <h2>What is AgentsAITools?</h2>
      <p>AgentsAITools is a comprehensive collection of free online developer tools designed to make your daily development tasks easier. Whether you're a developer, designer, or IT professional, you'll find useful tools to help you work more efficiently.</p>
      <p>All tools run directly in your browser - no installation required, no data sent to servers, completely free to use.</p>
    </section>

    <section>
      <h2>Available Tools</h2>
      <div class="tools-grid">
        <div class="tool-category">
          <h3>Crypto Tools</h3>
          <ul>
            <li>Token Generator</li>
            <li>Hash Text (MD5, SHA256, etc.)</li>
            <li>Bcrypt Generator</li>
            <li>UUID Generator</li>
            <li>JWT Parser</li>
            <li>Encryption/Decryption</li>
          </ul>
        </div>

        <div class="tool-category">
          <h3>Converter Tools</h3>
          <ul>
            <li>Base64 Encoder/Decoder</li>
            <li>JSON Formatter</li>
            <li>YAML Converter</li>
            <li>XML Converter</li>
            <li>Color Converter</li>
            <li>Case Converter</li>
          </ul>
        </div>

        <div class="tool-category">
          <h3>Web Tools</h3>
          <ul>
            <li>URL Encoder/Decoder</li>
            <li>HTML Entities</li>
            <li>Meta Tag Generator</li>
            <li>MIME Types</li>
            <li>User Agent Parser</li>
            <li>HTTP Status Codes</li>
          </ul>
        </div>

        <div class="tool-category">
          <h3>Development Tools</h3>
          <ul>
            <li>Docker Converter</li>
            <li>Git Cheatsheet</li>
            <li>Crontab Generator</li>
            <li>JSON Viewer</li>
            <li>SQL Formatter</li>
            <li>Regex Tester</li>
          </ul>
        </div>

        <div class="tool-category">
          <h3>Network Tools</h3>
          <ul>
            <li>IPv4 Calculator</li>
            <li>MAC Address Lookup</li>
            <li>IPv6 Generator</li>
          </ul>
        </div>

        <div class="tool-category">
          <h3>Text Tools</h3>
          <ul>
            <li>Lorem Ipsum Generator</li>
            <li>Text Diff</li>
            <li>Text Statistics</li>
            <li>Emoji Picker</li>
            <li>ASCII Art Generator</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>Why Choose AgentsAITools?</h2>
      <ul>
        <li><strong>100% Free:</strong> All tools are completely free to use, forever.</li>
        <li><strong>Privacy First:</strong> All processing happens in your browser. Your data never leaves your device.</li>
        <li><strong>No Signup:</strong> Use any tool instantly without creating an account.</li>
        <li><strong>Fast & Reliable:</strong> Tools load quickly and work reliably.</li>
        <li><strong>Mobile Friendly:</strong> All tools work on desktop, tablet, and mobile devices.</li>
      </ul>
    </section>

    <section>
      <h2>Technology</h2>
      <p>AgentsAITools is built with modern web technologies including Vue.js and hosted on Cloudflare Pages for fast, reliable access worldwide.</p>
    </section>

    <section>
      <h2>Feedback</h2>
      <p>Have a suggestion for a new tool or found a bug? We'd love to hear from you!</p>
      <p>Contact us at: contact@agentsaitools.com</p>
    </section>
  </div>
</template>

<style scoped lang="less">
.about-page {
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
  font-style: italic;
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
  color: #18a058;
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

.tools-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 16px;
}

.tool-category {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;

  h3 {
    margin-top: 0;
    margin-bottom: 12px;
    color: #18a058;
  }

  ul {
    margin-bottom: 0;
    
    li {
      color: #555;
    }
  }
}

strong {
  color: #18a058;
}

@media (max-width: 768px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
