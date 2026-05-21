<script setup lang="ts">
import { ref } from 'vue';

const url = ref('');
const result = ref<any>(null);
const isChecking = ref(false);
const error = ref('');

async function checkSSL() {
  if (!url.value) return;
  isChecking.value = true;
  result.value = null;
  error.value = '';

  try {
    const cleanUrl = url.value.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    const response = await fetch(`https://ssl-checker.io/api/v1/check/${cleanUrl}`);
    const data = await response.json();

    if (data.valid !== undefined) {
      result.value = {
        valid: data.valid,
        domain: cleanUrl,
        issuer: data.issuer || 'Unknown',
        validFrom: data.valid_from || 'Unknown',
        validTo: data.valid_to || 'Unknown',
        daysRemaining: data.days_remaining || 0,
        protocol: data.protocol || 'TLS',
        keySize: data.key_size || 'Unknown',
      };
    } else {
      error.value = 'Could not check SSL certificate for this domain.';
    }
  } catch (e) {
    error.value = 'Failed to check SSL certificate. Please try again.';
  } finally {
    isChecking.value = false;
  }
}
</script>

<template>
  <div class="ssl-checker">
    <div class="checker-card">
      <h2>SSL Certificate Checker</h2>
      <p>Check SSL certificate details for any website.</p>
      <div class="input-group">
        <input v-model="url" type="text" placeholder="Enter domain (e.g., example.com)" class="ssl-input" @keyup.enter="checkSSL" />
        <button class="check-btn" :disabled="isChecking || !url" @click="checkSSL">
          {{ isChecking ? 'Checking...' : 'Check SSL' }}
        </button>
      </div>
    </div>

    <div v-if="error" class="error-card">
      <p>{{ error }}</p>
    </div>

    <div v-if="result" class="result-card">
      <div class="status-badge" :class="{ valid: result.valid, invalid: !result.valid }">
        {{ result.valid ? '✓ Valid' : '✗ Invalid' }}
      </div>
      <h3>SSL Certificate for {{ result.domain }}</h3>
      <div class="details-grid">
        <div class="detail-item">
          <span class="label">Issuer</span>
          <span class="value">{{ result.issuer }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Valid From</span>
          <span class="value">{{ result.validFrom }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Valid To</span>
          <span class="value">{{ result.validTo }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Days Remaining</span>
          <span class="value" :class="{ warning: result.daysRemaining < 30 }">{{ result.daysRemaining }} days</span>
        </div>
        <div class="detail-item">
          <span class="label">Protocol</span>
          <span class="value">{{ result.protocol }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Key Size</span>
          <span class="value">{{ result.keySize }}</span>
        </div>
      </div>
    </div>

    <div class="info-section">
      <h3>What is SSL Certificate?</h3>
      <p>An SSL certificate is a digital certificate that authenticates a website's identity and enables an encrypted connection. It's essential for secure communication between a web server and a browser.</p>
      <h4>Why Check SSL?</h4>
      <ul>
        <li>Verify website security</li>
        <li>Check certificate expiration</li>
        <li>Validate certificate issuer</li>
        <li>Troubleshoot connection issues</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.ssl-checker { max-width: 800px; margin: 0 auto; }
.checker-card { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 32px; margin-bottom: 24px; }
.checker-card h2 { font-size: 28px; font-weight: 600; color: #1d1d1f; margin: 0 0 8px; }
.checker-card p { font-size: 16px; color: #6e6e73; margin: 0 0 24px; }
.input-group { display: flex; gap: 12px; }
.ssl-input { flex: 1; padding: 12px 16px; border: 1px solid #d2d2d7; border-radius: 8px; font-size: 16px; outline: none; }
.ssl-input:focus { border-color: #0071e3; box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1); }
.check-btn { padding: 12px 24px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }
.check-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.error-card { background: #fff3f3; border: 1px solid #ffcdd2; border-radius: 12px; padding: 16px; margin-bottom: 24px; }
.error-card p { color: #d32f2f; margin: 0; }
.result-card { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 24px; margin-bottom: 24px; }
.status-badge { display: inline-block; padding: 6px 16px; border-radius: 20px; font-weight: 600; margin-bottom: 16px; }
.status-badge.valid { background: #d1fae5; color: #065f46; }
.status-badge.invalid { background: #fee2e2; color: #991b1b; }
.result-card h3 { font-size: 20px; font-weight: 600; color: #1d1d1f; margin: 0 0 20px; }
.details-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.detail-item { padding: 12px; background: #f5f5f7; border-radius: 8px; }
.label { display: block; font-size: 12px; color: #6e6e73; margin-bottom: 4px; }
.value { font-size: 16px; font-weight: 600; color: #1d1d1f; }
.value.warning { color: #ff9500; }
.info-section { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 24px; }
.info-section h3 { font-size: 20px; font-weight: 600; color: #1d1d1f; margin: 0 0 12px; }
.info-section h4 { font-size: 16px; font-weight: 600; color: #1d1d1f; margin: 16px 0 8px; }
.info-section p { font-size: 15px; color: #333; line-height: 1.6; margin: 0 0 12px; }
.info-section ul { margin: 0 0 12px; padding-left: 20px; }
.info-section li { font-size: 15px; color: #333; margin-bottom: 8px; line-height: 1.5; }
:root.dark .checker-card, :root.dark .result-card, :root.dark .info-section { background: #1e1e1e; border-color: #333; }
:root.dark .checker-card h2, :root.dark .result-card h3, :root.dark .info-section h3, :root.dark .info-section h4 { color: #f5f5f7; }
:root.dark .checker-card p, :root.dark .info-section p, :root.dark .info-section li { color: #999; }
:root.dark .ssl-input { background: #2d2d2d; border-color: #444; color: #f5f5f7; }
:root.dark .detail-item { background: #2d2d2d; }
:root.dark .value { color: #f5f5f7; }
</style>
