<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({
  title: 'Docker Run to Docker Compose Converter Online - Free Tool | AgentsAITools',
  meta: [
    {
      name: 'description',
      content: 'Convert docker run commands to docker-compose.yml format instantly. Free online Docker Run to Compose converter tool - no signup required. Supports all docker run options.',
    },
    {
      name: 'keywords',
      content: 'docker run to compose, docker compose converter, docker run command converter, docker-compose.yml generator, docker run to yaml, online docker tool, free docker converter',
    },
    {
      property: 'og:title',
      content: 'Docker Run to Docker Compose Converter Online - Free Tool | AgentsAITools',
    },
    {
      property: 'og:description',
      content: 'Convert docker run commands to docker-compose.yml format instantly. Free online Docker Run to Compose converter tool - no signup required.',
    },
    {
      property: 'og:url',
      content: 'https://agentsaitools.com/docker-run-to-compose-converter',
    },
    {
      name: 'twitter:title',
      content: 'Docker Run to Docker Compose Converter Online - Free Tool | AgentsAITools',
    },
    {
      name: 'twitter:description',
      content: 'Convert docker run commands to docker-compose.yml format instantly. Free online tool.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://agentsaitools.com/docker-run-to-compose-converter',
    },
  ],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'Docker Run to Docker Compose Converter - AgentsAITools',
  'url': 'https://agentsaitools.com/docker-run-to-compose-converter',
  'description': 'Convert docker run commands to docker-compose.yml format instantly. Free online tool.',
  'applicationCategory': 'DeveloperApplication',
  'operatingSystem': 'Web',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD',
  },
  'provider': {
    '@type': 'Organization',
    'name': 'AgentsAITools',
    'url': 'https://agentsaitools.com',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How to convert docker run to docker-compose?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Paste your docker run command into the input field and the tool will automatically generate the equivalent docker-compose.yml format. The converter supports all common docker run options including volumes, ports, environment variables, and networking.',
      },
    },
    {
      '@type': 'Question',
      'name': 'What docker run options are supported?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'The converter supports most docker run options including: -p (ports), -v (volumes), -e (environment variables), --name, --network, --restart, --memory, --cpus, --privileged, and many more.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Is this Docker converter free to use?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes, this Docker Run to Compose converter is completely free to use. No signup or registration required. The conversion happens directly in your browser.',
      },
    },
  ],
};

function goToTool() {
  router.push('/docker-run-to-docker-compose-converter');
}
</script>

<template>
  <div class="landing-page">
    <script type="application/ld+json">
    {{ JSON.stringify(jsonLd) }}
    </script>
    
    <script type="application/ld+json">
    {{ JSON.stringify(faqJsonLd) }}
    </script>

    <div class="hero">
      <h1>Docker Run to Docker Compose Converter</h1>
      <p class="subtitle">Convert docker run commands to docker-compose.yml format instantly</p>
      <button class="cta-button" @click="goToTool">
        Use Converter Now →
      </button>
    </div>

    <div class="features">
      <h2>Why Use Our Docker Converter?</h2>
      <div class="feature-grid">
        <div class="feature">
          <h3>⚡ Instant Conversion</h3>
          <p>Convert docker run commands to compose format in real-time as you type.</p>
        </div>
        <div class="feature">
          <h3>🔧 All Options Supported</h3>
          <p>Supports ports, volumes, environment variables, networking, and more.</p>
        </div>
        <div class="feature">
          <h3>🔒 Privacy First</h3>
          <p>All conversions happen in your browser. No data is sent to any server.</p>
        </div>
        <div class="feature">
          <h3>💯 Free Forever</h3>
          <p>Completely free to use. No signup, no limits, no hidden fees.</p>
        </div>
      </div>
    </div>

    <div class="how-to">
      <h2>How to Convert Docker Run to Compose</h2>
      <ol>
        <li>Paste your docker run command in the input field</li>
        <li>The converter automatically generates the docker-compose.yml</li>
        <li>Copy the generated compose file</li>
        <li>Use it in your project with <code>docker-compose up</code></li>
      </ol>
    </div>

    <div class="examples">
      <h2>Example Conversion</h2>
      <div class="example-box">
        <h3>Input (docker run):</h3>
        <pre><code>docker run -d --name myapp -p 8080:80 -v /data:/app/data -e NODE_ENV=production nginx:latest</code></pre>
      </div>
      <div class="example-box">
        <h3>Output (docker-compose.yml):</h3>
        <pre><code>version: '3'
services:
  myapp:
    image: nginx:latest
    container_name: myapp
    ports:
      - "8080:80"
    volumes:
      - /data:/app/data
    environment:
      - NODE_ENV=production</code></pre>
      </div>
    </div>

    <div class="faq">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-item">
        <h3>How to convert docker run to docker-compose?</h3>
        <p>Paste your docker run command into the input field and the tool will automatically generate the equivalent docker-compose.yml format. The converter supports all common docker run options including volumes, ports, environment variables, and networking.</p>
      </div>
      <div class="faq-item">
        <h3>What docker run options are supported?</h3>
        <p>The converter supports most docker run options including: -p (ports), -v (volumes), -e (environment variables), --name, --network, --restart, --memory, --cpus, --privileged, and many more.</p>
      </div>
      <div class="faq-item">
        <h3>Is this Docker converter free to use?</h3>
        <p>Yes, this Docker Run to Compose converter is completely free to use. No signup or registration required. The conversion happens directly in your browser.</p>
      </div>
    </div>

    <div class="related-tools">
      <h2>Related Developer Tools</h2>
      <ul>
        <li><router-link to="/json-prettify">JSON Formatter</router-link> - Format and validate JSON data</li>
        <li><router-link to="/base64-string-converter">Base64 Encoder/Decoder</router-link> - Encode and decode Base64 strings</li>
        <li><router-link to="/hash-text">Hash Generator</router-link> - Generate MD5, SHA256, and other hashes</li>
        <li><router-link to="/regex-tester">Regex Tester</router-link> - Test regular expressions online</li>
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
    margin-bottom: 32px;
  }

  .cta-button {
    background: white;
    color: #18a058;
    border: none;
    padding: 16px 32px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
}

h2 {
  font-size: 28px;
  margin-bottom: 24px;
  color: #1a1a1a;
}

.features {
  margin-bottom: 40px;

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
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  }
}

.how-to {
  margin-bottom: 40px;

  ol {
    padding-left: 24px;

    li {
      margin-bottom: 12px;
      line-height: 1.6;
    }
  }
}

.examples {
  margin-bottom: 40px;

  .example-box {
    background: #1e1e1e;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 16px;

    h3 {
      color: #a0a0a0;
      font-size: 14px;
      margin-bottom: 12px;
    }

    pre {
      margin: 0;

      code {
        color: #e0e0e0;
        font-family: 'Monaco', 'Menlo', monospace;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}

.faq {
  margin-bottom: 40px;

  .faq-item {
    margin-bottom: 24px;
    padding: 24px;
    background: #f8f9fa;
    border-radius: 12px;

    h3 {
      font-size: 18px;
      margin-bottom: 12px;
      color: #18a058;
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  }
}

.related-tools {
  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 12px 0;
      border-bottom: 1px solid #eee;

      a {
        color: #18a058;
        text-decoration: none;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 28px;
  }

  .features .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
