<script setup lang="ts">
import { ref, onMounted } from 'vue';

const ipInfo = ref({
  ip: '',
  city: '',
  region: '',
  country: '',
  org: '',
  timezone: '',
});

const loading = ref(true);
const error = ref('');

// CORS-friendly IP APIs
const ipApis = [
  'https://api.ipify.org?format=json',
  'https://api.seeip.org/jsonip',
  'https://ipinfo.io/json',
];

// CORS-friendly Geo APIs
function getGeoUrl(ip: string) {
  return [
    `https://ipinfo.io/${ip}/json`,
    `https://ipapi.co/${ip}/json/`,
  ];
}

async function fetchWithTimeout(url: string, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (e) {
    clearTimeout(timeoutId);
    throw e;
  }
}

async function fetchIP(): Promise<{ ip: string; data?: any }> {
  for (const url of ipApis) {
    try {
      const response = await fetchWithTimeout(url);
      if (!response.ok) continue;
      const data = await response.json();
      const ip = data.ip || data.IPv4;
      if (ip) {
        // If we got ipinfo.io, we already have geo data
        if (data.city) {
          return { ip, data };
        }
        return { ip };
      }
    } catch (e) {
      continue;
    }
  }
  throw new Error('Unable to fetch IP');
}

async function fetchGeoInfo(ip: string) {
  for (const url of getGeoUrl(ip)) {
    try {
      const response = await fetchWithTimeout(url);
      if (!response.ok) continue;
      const data = await response.json();
      return {
        city: data.city || 'N/A',
        region: data.region || data.regionName || 'N/A',
        country: data.country_name || data.country || 'N/A',
        org: data.org || data.isp || 'N/A',
        timezone: data.timezone || 'N/A',
      };
    } catch (e) {
      continue;
    }
  }
  return { city: 'N/A', region: 'N/A', country: 'N/A', org: 'N/A', timezone: 'N/A' };
}

onMounted(async () => {
  try {
    const result = await fetchIP();
    let geo;

    if (result.data) {
      // We already have geo data from ipinfo.io
      geo = {
        city: result.data.city || 'N/A',
        region: result.data.region || 'N/A',
        country: result.data.country || 'N/A',
        org: result.data.org || 'N/A',
        timezone: result.data.timezone || 'N/A',
      };
    } else {
      geo = await fetchGeoInfo(result.ip);
    }

    ipInfo.value = { ip: result.ip, ...geo };
  } catch (e) {
    error.value = 'Unable to fetch IP address. Please try again later.';
  } finally {
    loading.value = false;
  }
});

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

function retry() {
  loading.value = true;
  error.value = '';
  location.reload();
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
          <span class="label">ISP:</span>
          <span>{{ ipInfo.org }}</span>
        </div>
        <div class="detail-item">
          <span class="label">Timezone:</span>
          <span>{{ ipInfo.timezone }}</span>
        </div>
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
.details { display: grid; gap: 12px; }
.detail-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e0e0e0;
}
.label { font-weight: 600; color: #333; }
</style>
