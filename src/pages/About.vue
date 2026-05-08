<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'About Us - AgentsAITools',
  meta: [
    { name: 'description', content: 'About AgentsAITools - Free online developer tools collection for developers and IT professionals.' },
  ],
});
</script>

<template>
  <div class="about-page">
    <div class="hero">
      <h1>About AgentsAITools</h1>
      <p class="subtitle">Free Online Developer Tools Collection</p>
    </div>

    <section class="mission">
      <h2>Our Mission</h2>
      <p>AgentsAITools is dedicated to providing developers and IT professionals with a comprehensive collection of free, high-quality online tools. Our mission is to simplify daily development tasks by offering easy-to-use utilities that work directly in your browser.</p>
    </section>

    <section class="features">
      <h2>Why Choose AgentsAITools?</h2>
      <div class="feature-grid">
        <div class="feature">
          <h3>100+ Tools</h3>
          <p>A comprehensive collection covering JSON, Base64, Hash, Docker, JWT, Regex, and more.</p>
        </div>
        <div class="feature">
          <h3>Free Forever</h3>
          <p>All tools are completely free to use. No signup, no hidden fees, no limitations.</p>
        </div>
        <div class="feature">
          <h3>Privacy First</h3>
          <p>All processing happens in your browser. Your data never leaves your device.</p>
        </div>
        <div class="feature">
          <h3>No Installation</h3>
          <p>Works directly in your browser. No downloads or installations required.</p>
        </div>
      </div>
    </section>

    <section class="categories">
      <h2>Tool Categories</h2>
      <ul>
        <li><strong>Crypto:</strong> Hash generators, encryption, UUID, JWT tools</li>
        <li><strong>Converters:</strong> Base64, JSON, YAML, XML, color converters</li>
        <li><strong>Web:</strong> URL encoder, HTML entities, MIME types</li>
        <li><strong>Development:</strong> Docker converter, Git cheatsheet, SQL formatter</li>
        <li><strong>Network:</strong> IP calculators, MAC address tools</li>
        <li><strong>Text:</strong> Lorem ipsum, text diff, case converter</li>
        <li><strong>Math:</strong> Calculators, percentage tools</li>
      </ul>
    </section>

    <section class="contact">
      <h2>Contact Us</h2>
      <p>Have questions, suggestions, or feedback? We'd love to hear from you!</p>
      <p>Email: <a href="mailto:contact@agentsaitools.com">contact@agentsaitools.com</a></p>
      <p>Or visit our <router-link to="/contact">Contact Page</router-link>.</p>
    </section>
  </div>
</template>

<style scoped lang="less">
.about-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #18a058 0%, #0d7a3f 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 40px;

  h1 {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 18px;
    opacity: 0.9;
  }
}

h2 {
  font-size: 28px;
  margin-bottom: 24px;
  color: #1a1a1a;
}

section {
  margin-bottom: 40px;
}

p {
  margin-bottom: 16px;
  color: #333;
  line-height: 1.8;
}

.features {
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .feature {
    padding: 24px;
    background: #f8f9fa;
    border-radius: 12px;

    h3 {
      font-size: 18px;
      margin-bottom: 8px;
      color: #18a058;
    }

    p {
      color: #666;
    }
  }
}

.categories {
  ul {
    padding-left: 24px;

    li {
      margin-bottom: 12px;
      line-height: 1.6;

      strong {
        color: #18a058;
      }
    }
  }
}

.contact {
  background: #f8f9fa;
  padding: 32px;
  border-radius: 12px;

  a {
    color: #18a058;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .features .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
