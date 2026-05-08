<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'JWT Token Decoder Online - Free JWT Parser Tool | AgentsAITools',
  meta: [
    {
      name: 'description',
      content: 'Decode and parse JWT (JSON Web Token) tokens online. Free JWT decoder tool - view header, payload, and signature. No signup required. Supports HS256, HS384, HS512, RS256, RS384, RS512.',
    },
    {
      name: 'keywords',
      content: 'jwt decoder, jwt parser, jwt token decoder, json web token decoder, jwt decode online, free jwt tool, jwt viewer, jwt validator',
    },
    {
      property: 'og:title',
      content: 'JWT Token Decoder Online - Free JWT Parser Tool | AgentsAITools',
    },
    {
      property: 'og:description',
      content: 'Decode and parse JWT tokens online. View header, payload, and signature. Free tool, no signup required.',
    },
    {
      property: 'og:url',
      content: 'https://agentsaitools.com/jwt-decoder',
    },
    {
      name: 'twitter:title',
      content: 'JWT Token Decoder Online - Free JWT Parser Tool | AgentsAITools',
    },
    {
      name: 'twitter:description',
      content: 'Decode and parse JWT tokens online. Free tool, no signup required.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://agentsaitools.com/jwt-decoder',
    },
  ],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'JWT Token Decoder - AgentsAITools',
  'url': 'https://agentsaitools.com/jwt-decoder',
  'description': 'Decode and parse JWT tokens online. View header, payload, and signature.',
  'applicationCategory': 'DeveloperApplication',
  'operatingSystem': 'Web',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is a JWT token?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It consists of three parts: header, payload, and signature, separated by dots.',
      },
    },
    {
      '@type': 'Question',
      'name': 'How to decode a JWT token?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Paste your JWT token into the decoder input field. The tool will automatically parse and display the header, payload, and signature in a readable format.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Is this JWT decoder secure?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes, all JWT decoding happens locally in your browser. No token data is sent to any server. Your JWT tokens remain private and secure.',
      },
    },
  ],
};

function goToTool() {
  router.push('/jwt-parser');
}
</script>

<template>
  <div class="landing-page">
    <script type="application/ld+json">{{ JSON.stringify(jsonLd) }}</script>
    <script type="application/ld+json">{{ JSON.stringify(faqJsonLd) }}</script>

    <div class="hero">
      <h1>JWT Token Decoder Online</h1>
      <p class="subtitle">Decode and parse JWT (JSON Web Token) tokens instantly</p>
      <button class="cta-button" @click="goToTool">Decode JWT Now →</button>
    </div>

    <div class="features">
      <h2>Why Use Our JWT Decoder?</h2>
      <div class="feature-grid">
        <div class="feature">
          <h3>⚡ Instant Decoding</h3>
          <p>Decode JWT tokens in real-time as you paste them.</p>
        </div>
        <div class="feature">
          <h3>🔐 All Algorithms</h3>
          <p>Supports HS256, HS384, HS512, RS256, RS384, RS512, and more.</p>
        </div>
        <div class="feature">
          <h3>🔒 Secure & Private</h3>
          <p>All decoding happens in your browser. No data sent to servers.</p>
        </div>
        <div class="feature">
          <h3>💯 Free Forever</h3>
          <p>Completely free to use. No signup, no limits.</p>
        </div>
      </div>
    </div>

    <div class="how-to">
      <h2>How to Decode a JWT Token</h2>
      <ol>
        <li>Copy your JWT token (starts with eyJ...)</li>
        <li>Paste it into the decoder input field</li>
        <li>View the decoded header, payload, and signature</li>
        <li>Check token expiration and claims</li>
      </ol>
    </div>

    <div class="faq">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-item">
        <h3>What is a JWT token?</h3>
        <p>JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties. It consists of three parts: header, payload, and signature, separated by dots.</p>
      </div>
      <div class="faq-item">
        <h3>How to decode a JWT token?</h3>
        <p>Paste your JWT token into the decoder input field. The tool will automatically parse and display the header, payload, and signature in a readable format.</p>
      </div>
      <div class="faq-item">
        <h3>Is this JWT decoder secure?</h3>
        <p>Yes, all JWT decoding happens locally in your browser. No token data is sent to any server. Your JWT tokens remain private and secure.</p>
      </div>
    </div>

    <div class="related-tools">
      <h2>Related Developer Tools</h2>
      <ul>
        <li><router-link to="/json-prettify">JSON Formatter</router-link> - Format and validate JSON data</li>
        <li><router-link to="/base64-string-converter">Base64 Encoder/Decoder</router-link> - Encode and decode Base64 strings</li>
        <li><router-link to="/hash-text">Hash Generator</router-link> - Generate MD5, SHA256, and other hashes</li>
        <li><router-link to="/encryption">Encryption Tool</router-link> - Encrypt and decrypt text</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.landing-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 40px;

  h1 { font-size: 36px; margin-bottom: 16px; }
  .subtitle { font-size: 18px; opacity: 0.9; margin-bottom: 32px; }
  .cta-button {
    background: white;
    color: #6366f1;
    border: none;
    padding: 16px 32px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover { transform: scale(1.05); }
  }
}

h2 { font-size: 28px; margin-bottom: 24px; color: #1a1a1a; }

.features {
  margin-bottom: 40px;
  .feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .feature {
    padding: 24px; background: #f8f9fa; border-radius: 12px;
    h3 { font-size: 18px; margin-bottom: 8px; }
    p { color: #666; line-height: 1.6; }
  }
}

.how-to { margin-bottom: 40px; ol { padding-left: 24px; li { margin-bottom: 12px; line-height: 1.6; } } }

.faq {
  margin-bottom: 40px;
  .faq-item {
    margin-bottom: 24px; padding: 24px; background: #f8f9fa; border-radius: 12px;
    h3 { font-size: 18px; margin-bottom: 12px; color: #6366f1; }
    p { color: #666; line-height: 1.6; }
  }
}

.related-tools {
  ul { list-style: none; padding: 0;
    li { padding: 12px 0; border-bottom: 1px solid #eee;
      a { color: #6366f1; text-decoration: none; font-weight: 500; &:hover { text-decoration: underline; } }
    }
  }
}

@media (max-width: 768px) {
  .hero h1 { font-size: 28px; }
  .features .feature-grid { grid-template-columns: 1fr; }
}
</style>
