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

onMounted(async () => {
  try {
    // Try multiple IP APIs for reliability
    const apis = [
      'https://api.ipify.org?format=json',
      'https://api.my-ip.io/v2/ip.json',
      'https://ipapi.co/json/',
    ];

    let ip = '';
    
    // First get the IP address
    for (const api of apis) {
      try {
        const response = await fetch(api);
        const data = await response.json();
        ip = data.ip || data.IPv4 || '';
        if (ip) break;
      } catch (e) {
        continue;
      }
    }

    if (!ip) {
      throw new Error('Unable to fetch IP');
    }

    // Then get location info
    try {
      const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const geoData = await geoResponse.json();
      ipInfo.value = {
        ip: ip,
        city: geoData.city || 'N/A',
        region: geoData.region || 'N/A',
        country: geoData.country_name || 'N/A',
        org: geoData.org || 'N/A',
        timezone: geoData.timezone || 'N/A',
      };
    } catch (e) {
      // If geo fails, just show IP
      ipInfo.value = {
        ip: ip,
        city: 'N/A',
        region: 'N/A',
        country: 'N/A',
        org: 'N/A',
        timezone: 'N/A',
      };
    }
  } catch (e) {
    error.value = 'Unable to fetch IP address. Please try again later.';
    ipInfo.value.ip = 'Error';
  } finally {
    loading.value = false;
  }
});

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    alert('IP address copied to clipboard!');
  });
}
</script>

<template>
  <div class="ip-info">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Fetching your IP address...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="location.reload()">Try Again</button>
    </div>
    
    <div v-else class="info-card">
      <div class="ip-address">
        <h3>Your Public IP Address</h3>
        <div class="ip-value">{{ ipInfo.ip }}</div>
        <button class="copy-btn" @click="copyToClipboard(ipInfo.ip)">
          📋 Copy IP Address
        </button>
      </div>
      
      <div class="details">
        <div class="detail-item">
          <span class="label">📍 City:</span>
          <span>{{ ipInfo.city }}</span>
        </div>
        <div class="detail-item">
          <span class="label">🗺️ Region:</span>
          <span>{{ ipInfo.region }}</span>
        </div>
        <div class="detail-item">
          <span class="label">🌍 Country:</span>
          <span>{{ ipInfo.country }}</span>
        </div>
        <div class="detail-item">
          <span class="label">🏢 ISP:</span>
          <span>{{ ipInfo.org }}</span>
        </div>
        <div class="detail-item">
          <span class="label">🕐 Timezone:</span>
          <span>{{ ipInfo.timezone }}</span>
        </div>
      </div>

      <div class="info-note">
        <p><strong>About IP Address:</strong></p>
        <p>An IP address is a unique numerical label assigned to each device connected to a computer network. Your public IP address is visible to websites you visit and can be used to approximate your location.</p>
        <p><strong>Privacy Tip:</strong> Use a VPN to hide your real IP address and protect your online privacy.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ip-info { 
  max-width: 600px; 
  margin: 0 auto; 
}

.loading { 
  text-align: center; 
  padding: 60px 20px; 
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #18a058;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  text-align: center;
  padding: 40px 20px;
  color: #dc3545;
}

.error button {
  margin-top: 16px;
  padding: 8px 16px;
  background: #18a058;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.info-card { 
  background: #f8f9fa; 
  border-radius: 12px; 
  padding: 24px; 
}

.ip-address { 
  text-align: center; 
  margin-bottom: 24px; 
}

.ip-value { 
  font-size: 36px; 
  font-weight: bold; 
  font-family: 'Monaco', 'Menlo', monospace; 
  margin: 16px 0;
  color: #18a058;
}

.copy-btn { 
  padding: 10px 20px; 
  background: #18a058; 
  color: white; 
  border: none; 
  border-radius: 6px; 
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.copy-btn:hover {
  background: #158a4a;
}

.details { 
  display: grid; 
  gap: 12px; 
  margin-bottom: 24px;
}

.detail-item { 
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  padding: 12px 16px; 
  background: white; 
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.label { 
  font-weight: 600; 
  color: #333;
}

.info-note {
  background: #e8f5e9;
  padding: 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

.info-note p {
  margin: 0 0 8px 0;
}

.info-note p:last-child {
  margin-bottom: 0;
}
</style>
