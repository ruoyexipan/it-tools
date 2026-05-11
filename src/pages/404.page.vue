<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const router = useRouter();

useHead({ 
  title: '404 - Page Not Found | AgentsAITools',
  meta: [
    { name: 'description', content: 'The page you are looking for does not exist. Return to AgentsAITools homepage.' },
  ],
});

// Ensure 404 status is set
if (typeof window !== 'undefined') {
  // Client-side - no way to set HTTP status
  // But we can set the proper title and meta
}
</script>

<template>
  <div class="error-page">
    <div class="error-content">
      <div class="error-icon">404</div>
      
      <h1>Page Not Found</h1>
      
      <p class="error-message">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <p class="error-suggestion">
        Here are some helpful links:
      </p>
      
      <div class="error-actions">
        <button class="primary-button" @click="router.push('/')">
          Go to Homepage
        </button>
        <button class="secondary-button" @click="router.push('/json-prettify')">
          Try JSON Formatter
        </button>
      </div>
      
      <div class="popular-tools">
        <h2>Popular Tools</h2>
        <ul>
          <li><router-link to="/json-prettify">JSON Formatter</router-link></li>
          <li><router-link to="/base64-string-converter">Base64 Converter</router-link></li>
          <li><router-link to="/hash-text">Hash Generator</router-link></li>
          <li><router-link to="/jwt-parser">JWT Decoder</router-link></li>
          <li><router-link to="/regex-tester">Regex Tester</router-link></li>
          <li><router-link to="/uuid-generator">UUID Generator</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.error-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.error-content {
  text-align: center;
  max-width: 600px;
}

.error-icon {
  font-size: 120px;
  font-weight: 700;
  color: #e0e0e0;
  line-height: 1;
  margin-bottom: 20px;
}

h1 {
  font-size: 32px;
  margin-bottom: 16px;
  color: #1a1a1a;
}

.error-message {
  font-size: 18px;
  color: #666;
  margin-bottom: 24px;
}

.error-suggestion {
  font-size: 16px;
  color: #888;
  margin-bottom: 24px;
}

.error-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 40px;
}

.primary-button {
  background: #18a058;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0d7a3f;
  }
}

.secondary-button {
  background: white;
  color: #18a058;
  border: 2px solid #18a058;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0fdf4;
  }
}

.popular-tools {
  text-align: left;
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;

  h2 {
    font-size: 20px;
    margin-bottom: 16px;
    color: #1a1a1a;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  li {
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

@media (max-width: 640px) {
  .error-icon {
    font-size: 80px;
  }

  h1 {
    font-size: 24px;
  }

  .error-actions {
    flex-direction: column;
  }

  .popular-tools ul {
    grid-template-columns: 1fr;
  }
}
</style>
