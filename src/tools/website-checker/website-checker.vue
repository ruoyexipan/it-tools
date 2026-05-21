<script setup lang="ts">
import { ref } from 'vue';

const url = ref('');
const result = ref<any>(null);
const isChecking = ref(false);
const error = ref('');

async function checkWebsite() {
  if (!url.value) return;
  isChecking.value = true;
  result.value = null;
  error.value = '';

  try {
    const cleanUrl = url.value.startsWith('http') ? url.value : `https://${url.value}`;
    const startTime = performance.now();

    try {
      const response = await fetch(cleanUrl, { mode: 'no-cors', cache: 'no-store' });
      const endTime = performance.now();
      const responseTime = Math.round(endTime - startTime);

      result.value = {
        url: cleanUrl,
        status: 'up',
        responseTime,
        statusCode: response.status || 'N/A (CORS)',
      };
    } catch (fetchError) {
      const endTime = performance.now();
      const responseTime = Math.round(endTime - startTime);

      result.value = {
        url: cleanUrl,
        status: 'down',
        responseTime,
        statusCode: 'Connection Failed',
      };
    }
  } catch (e) {
    error.value = 'Failed to check website. Please try again.';
  } finally {
    isChecking.value = false;
  }
}
</script>

<template>
  <div class="website-checker">
    <div class="checker-card">
      <h2>Website Down Checker</h2>
      <p>Check if a website is down or up from your location.</p>
      <div class="input-group">
        <input v-model="url" type="text" placeholder="Enter URL (e.g., example.com)" class="checker-input" @keyup.enter="checkWebsite" />
        <button class="check-btn" :disabled="isChecking || !url" @click="checkWebsite">
          {{ isChecking ? 'Checking...' : 'Check Website' }}
        </button>
      </div>
    </div>

    <div v-if="error" class="error-card">
      <p>{{ error }}</p>
    </div>

    <div v-if="result" class="result-card">
      <div class="status-indicator" :class="{ up: result.status === 'up', down: result.status === 'down' }">
        <span class="status-icon">{{ result.status === 'up' ? '✓' : '✗' }}</span>
        <span class="status-text">{{ result.status === 'up' ? 'Website is UP' : 'Website is DOWN' }}</span>
      </div>
      <div class="result-details">
        <div class="detail">
          <span class="label">URL:</span>
          <span class="value">{{ result.url }}</span>
        </div>
        <div class="detail">
          <span class="label">Response Time:</span>
          <span class="value">{{ result.responseTime }}ms</span>
        </div>
        <div class="detail">
          <span class="label">Status:</span>
          <span class="value">{{ result.statusCode }}</span>
        </div>
      </div>
    </div>

    <div class="info-section">
      <h3>How does Website Down Checker work?</h3>
      <p>This tool sends a request to the specified URL and checks if the server responds. If the server responds with any HTTP status code, the website is considered "up". If the connection fails or times out, the website is considered "down".</p>
      <h4>Common HTTP Status Codes</h4>
      <ul>
        <li><strong>200:</strong> OK - Request succeeded</li>
        <li><strong>301:</strong> Moved Permanently - URL redirected</li>
        <li><strong>404:</strong> Not Found - Page doesn't exist</li>
        <li><strong>500:</strong> Internal Server Error - Server problem</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.website-checker { max-width: 800px; margin: 0 auto; }
.checker-card { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 32px; margin-bottom: 24px; }
.checker-card h2 { font-size: 28px; font-weight: 600; color: #1d1d1f; margin: 0 0 8px; }
.checker-card p { font-size: 16px; color: #6e6e73; margin: 0 0 24px; }
.input-group { display: flex; gap: 12px; }
.checker-input { flex: 1; padding: 12px 16px; border: 1px solid #d2d2d7; border-radius: 8px; font-size: 16px; outline: none; }
.checker-input:focus { border-color: #0071e3; box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1); }
.check-btn { padding: 12px 24px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }
.check-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.error-card { background: #fff3f3; border: 1px solid #ffcdd2; border-radius: 12px; padding: 16px; margin-bottom: 24px; }
.error-card p { color: #d32f2f; margin: 0; }
.result-card { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 24px; margin-bottom: 24px; }
.status-indicator { text-align: center; margin-bottom: 24px; }
.status-icon { font-size: 48px; display: block; margin-bottom: 8px; }
.status-text { font-size: 24px; font-weight: 600; }
.status-indicator.up .status-icon { color: #34c759; }
.status-indicator.up .status-text { color: #065f46; }
.status-indicator.down .status-icon { color: #ff3b30; }
.status-indicator.down .status-text { color: #991b1b; }
.result-details { display: grid; gap: 12px; }
.detail { display: flex; justify-content: space-between; padding: 12px; background: #f5f5f7; border-radius: 8px; }
.label { color: #6e6e73; }
.value { font-weight: 600; color: #1d1d1f; }
.info-section { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 24px; }
.info-section h3 { font-size: 20px; font-weight: 600; color: #1d1d1f; margin: 0 0 12px; }
.info-section h4 { font-size: 16px; font-weight: 600; color: #1d1d1f; margin: 16px 0 8px; }
.info-section p { font-size: 15px; color: #333; line-height: 1.6; margin: 0 0 12px; }
.info-section ul { margin: 0 0 12px; padding-left: 20px; }
.info-section li { font-size: 15px; color: #333; margin-bottom: 8px; line-height: 1.5; }
:root.dark .checker-card, :root.dark .result-card, :root.dark .info-section { background: #1e1e1e; border-color: #333; }
:root.dark .checker-card h2, :root.dark .result-card h3, :root.dark .info-section h3, :root.dark .info-section h4 { color: #f5f5f7; }
:root.dark .checker-card p, :root.dark .info-section p, :root.dark .info-section li { color: #999; }
:root.dark .checker-input { background: #2d2d2d; border-color: #444; color: #f5f5f7; }
:root.dark .detail { background: #2d2d2d; }
:root.dark .value { color: #f5f5f7; }
</style>
