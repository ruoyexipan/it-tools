<script setup lang="ts">
import { ref, onMounted } from 'vue';

const ipInfo = ref({
  ip: '',
  city: '',
  region: '',
  country: '',
  org: '',
  timezone: '',
  asn: '',
});

const loading = ref(true);
const error = ref('');

async function fetchIPInfo() {
  try {
    // Step 1: Get IP from our API (Cloudflare)
    const ipResponse = await fetch('/api/ip');
    if (!ipResponse.ok) throw new Error('API error');
    const ipData = await ipResponse.json();
    
    const ip = ipData.ip;
    if (!ip || ip === 'unknown') throw new Error('No IP');

    // Step 2: Get detailed location from external API
    let geoData = {
      city: ipData.city !== 'N/A' ? ipData.city : '',
      region: ipData.region !== 'N/A' ? ipData.region : '',
      country: ipData.country || '',
      org: ipData.org !== 'N/A' ? ipData.org : '',
      timezone: ipData.timezone !== 'N/A' ? ipData.timezone : '',
      asn: ipData.asn !== 'N/A' ? ipData.asn : '',
    };

    // If we're missing data, fetch from external API
    if (!geoData.city || !geoData.org) {
      try {
        const geoResponse = await fetch(`https://ipinfo.io/${ip}/json`);
        if (geoResponse.ok) {
          const geo = await geoResponse.json();
          geoData = {
            city: geoData.city || geo.city || 'N/A',
            region: geoData.region || geo.region || 'N/A',
            country: geoData.country || geo.country || 'N/A',
            org: geoData.org || geo.org || 'N/A',
            timezone: geoData.timezone || geo.timezone || 'N/A',
            asn: geoData.asn || geo.org || 'N/A',
          };
        }
      } catch (e) {
        // Ignore geo API errors
      }
    }

    ipInfo.value = {
      ip,
      city: geoData.city || 'N/A',
      region: geoData.region || 'N/A',
      country: geoData.country || 'N/A',
      org: geoData.org || 'N/A',
      timezone: geoData.timezone || 'N/A',
      asn: geoData.asn || 'N/A',
    };
  } catch (e) {
    error.value = 'Unable to fetch IP address. Please try again later.';
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchIPInfo();
});

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

function retry() {
  loading.value = true;
  error.value = '';
  fetchIPInfo();
}
</script>

<template>
  <div class="ip-info">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Fetching your IP address...</p>
    </div>

    <div v-else-if="error" class="error-card">
      <div class="error-icon">⚠️</div>
      <p>{{ error }}</p>
      <button class="retry-btn" @click="retry">Try Again</button>
    </div>

    <div v-else class="info-card">
      <div class="ip-address">
        <h3>Your Public IP Address</h3>
        <div class="ip-value">{{ ipInfo.ip }}</div>
        <button class="copy-btn" @click="copyToClipboard(ipInfo.ip)">Copy IP Address</button>
      </div>

      <div class="details">
        <div class="detail-item">
          <span class="label">City:</span>
          <span>{{ ipInfo.city }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Region:</span>
          <span>{{ ipInfo.region }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Country:</span>
          <span>{{ ipInfo.country }}</span>
        </div>
        <div class="detail-item">
          <span class="label">ISP/Org:</span>
          <span>{{ ipInfo.org }}</span>
        </div>
        <div class="detail-item">
          <span class="label">ASN:</span>
          <span>{{ ipInfo.asn }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Timezone:</span>
          <span>{{ ipInfo.timezone }}</span>
        </div>
      </div>

      <div class="info-note">
        <p><strong>About IP Address:</strong></p>
        <p>An IP address is a unique numerical label assigned to each device connected to a computer network. Your public IP address is visible to websites you visit.</p>
        <p><strong>Privacy Tip:</strong> Use a VPN to hide your real IP address and protect your online privacy.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ip-info { max-width: 600px; margin: 0 auto; }
.loading { text-align: center; padding: 60px 20px; }
.spinner {
  width: 40px; height: 40px;
  border: 4px solid #f3f3f3; border-top: 4px solid #18a058;
  border-radius: 50%; animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.error-card {
  text-align: center; padding: 40px 20px;
  background: #fff3f3; border-radius: 12px; border: 1px solid #ffcdd2;
}
.error-icon { font-size: 48px; margin-bottom: 16px; }
.error-card p { color: #d32f2f; margin-bottom: 16px; }
.retry-btn {
  padding: 10px 24px; background: #18a058; color: white;
  border: none; border-radius: 6px; cursor: pointer; font-size: 14px;
}
.info-card { background: #f8f9fa; border-radius: 12px; padding: 24px; }
.ip-address { text-align: center; margin-bottom: 24px; }
.ip-value { font-size: 36px; font-weight: bold; font-family: monospace; margin: 16px 0; color: #18a058; }
.copy-btn {
  padding: 10px 20px; background: #18a058; color: white;
  border: none; border-radius: 6px; cursor: pointer; font-size: 14px;
}
.copy-btn:hover { background: #158a4a; }
.details { display: grid; gap: 12px; margin-bottom: 24px; }
.detail-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e0e0e0;
}
.label { font-weight: 600; color: #333; }
.info-note {
  background: #e8f5e9; padding: 16px; border-radius: 8px;
  font-size: 14px; line-height: 1.6; color: #333;
}
.info-note p { margin: 0 0 8px 0; }
.info-note p:last-child { margin-bottom: 0; }
</style>
