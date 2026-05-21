<script setup lang="ts">
import { ref, onMounted } from 'vue';

const downloadSpeed = ref<number | null>(null);
const uploadSpeed = ref<number | null>(null);
const ping = ref<number | null>(null);
const isTesting = ref(false);
const testProgress = ref(0);
const currentTest = ref('');

async function runSpeedTest() {
  isTesting.value = true;
  testProgress.value = 0;
  downloadSpeed.value = null;
  uploadSpeed.value = null;
  ping.value = null;

  // Test ping
  currentTest.value = 'Testing ping...';
  const pingStart = performance.now();
  try {
    await fetch('https://agentsaitools.com/favicon.ico', { cache: 'no-store' });
  } catch (e) {}
  const pingEnd = performance.now();
  ping.value = Math.round(pingEnd - pingStart);
  testProgress.value = 33;

  // Test download speed
  currentTest.value = 'Testing download speed...';
  const downloadStart = performance.now();
  try {
    const response = await fetch('https://speed.cloudflare.com/__down?bytes=10000000');
    const blob = await response.blob();
    const downloadEnd = performance.now();
    const duration = (downloadEnd - downloadStart) / 1000;
    const bits = blob.size * 8;
    downloadSpeed.value = Math.round((bits / duration / 1000000) * 100) / 100;
  } catch (e) {
    downloadSpeed.value = 0;
  }
  testProgress.value = 66;

  // Test upload speed
  currentTest.value = 'Testing upload speed...';
  const uploadData = new Uint8Array(1000000);
  const uploadStart = performance.now();
  try {
    await fetch('https://speed.cloudflare.com/__up', {
      method: 'POST',
      body: uploadData,
    });
    const uploadEnd = performance.now();
    const duration = (uploadEnd - uploadStart) / 1000;
    const bits = uploadData.length * 8;
    uploadSpeed.value = Math.round((bits / duration / 1000000) * 100) / 100;
  } catch (e) {
    uploadSpeed.value = 0;
  }
  testProgress.value = 100;
  currentTest.value = 'Test complete!';
  isTesting.value = false;
}
</script>

<template>
  <div class="speed-test">
    <div class="test-card">
      <div class="test-header">
        <h2>Internet Speed Test</h2>
        <p>Test your download speed, upload speed, and ping latency.</p>
      </div>

      <div class="results-grid">
        <div class="result-card">
          <div class="result-icon">⬇️</div>
          <div class="result-label">Download</div>
          <div class="result-value">{{ downloadSpeed ?? '--' }}</div>
          <div class="result-unit">Mbps</div>
        </div>
        <div class="result-card">
          <div class="result-icon">⬆️</div>
          <div class="result-label">Upload</div>
          <div class="result-value">{{ uploadSpeed ?? '--' }}</div>
          <div class="result-unit">Mbps</div>
        </div>
        <div class="result-card">
          <div class="result-icon">📡</div>
          <div class="result-label">Ping</div>
          <div class="result-value">{{ ping ?? '--' }}</div>
          <div class="result-unit">ms</div>
        </div>
      </div>

      <div v-if="isTesting" class="progress-section">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: testProgress + '%' }"></div>
        </div>
        <p class="progress-text">{{ currentTest }}</p>
      </div>

      <button class="test-button" :disabled="isTesting" @click="runSpeedTest">
        {{ isTesting ? 'Testing...' : 'Start Speed Test' }}
      </button>
    </div>

    <div class="info-section">
      <h3>About Internet Speed Test</h3>
      <p>This tool measures your internet connection speed by testing:</p>
      <ul>
        <li><strong>Download Speed:</strong> How fast you can receive data from the internet</li>
        <li><strong>Upload Speed:</strong> How fast you can send data to the internet</li>
        <li><strong>Ping:</strong> The time it takes for data to travel to a server and back</li>
      </ul>
      <p>All tests are performed directly in your browser. No data is sent to external servers.</p>
    </div>
  </div>
</template>

<style scoped>
.speed-test { max-width: 800px; margin: 0 auto; }
.test-card { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 32px; margin-bottom: 24px; }
.test-header { text-align: center; margin-bottom: 32px; }
.test-header h2 { font-size: 28px; font-weight: 600; color: #1d1d1f; margin: 0 0 8px; }
.test-header p { font-size: 16px; color: #6e6e73; margin: 0; }
.results-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 32px; }
.result-card { text-align: center; padding: 24px; background: #f5f5f7; border-radius: 12px; }
.result-icon { font-size: 32px; margin-bottom: 8px; }
.result-label { font-size: 14px; color: #6e6e73; margin-bottom: 8px; }
.result-value { font-size: 36px; font-weight: 700; color: #1d1d1f; font-family: monospace; }
.result-unit { font-size: 14px; color: #6e6e73; margin-top: 4px; }
.progress-section { margin-bottom: 24px; }
.progress-bar { height: 8px; background: #e8e8ed; border-radius: 4px; overflow: hidden; }
.progress-fill { height: 100%; background: linear-gradient(90deg, #667eea, #764ba2); transition: width 0.3s ease; }
.progress-text { text-align: center; font-size: 14px; color: #6e6e73; margin-top: 8px; }
.test-button { display: block; width: 100%; padding: 16px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 12px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
.test-button:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4); }
.test-button:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
.info-section { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 24px; }
.info-section h3 { font-size: 20px; font-weight: 600; color: #1d1d1f; margin: 0 0 12px; }
.info-section p { font-size: 15px; color: #333; line-height: 1.6; margin: 0 0 12px; }
.info-section ul { margin: 0 0 12px; padding-left: 20px; }
.info-section li { font-size: 15px; color: #333; margin-bottom: 8px; line-height: 1.5; }
:root.dark .test-card, :root.dark .info-section { background: #1e1e1e; border-color: #333; }
:root.dark .result-card { background: #2d2d2d; }
:root.dark .test-header h2, :root.dark .info-section h3, :root.dark .result-value { color: #f5f5f7; }
:root.dark .test-header p, :root.dark .result-label, :root.dark .result-unit, :root.dark .info-section p, :root.dark .info-section li { color: #999; }
@media (max-width: 768px) { .results-grid { grid-template-columns: 1fr; } }
</style>
