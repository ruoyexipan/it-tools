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

onMounted(async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    ipInfo.value = {
      ip: data.ip || '',
      city: data.city || '',
      region: data.region || '',
      country: data.country_name || '',
      org: data.org || '',
      timezone: data.timezone || '',
    };
  } catch (error) {
    ipInfo.value.ip = 'Unable to fetch';
  } finally {
    loading.value = false;
  }
});

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <div class="ip-info">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else class="info-card">
      <div class="ip-address">
        <h3>Your IP Address</h3>
        <div class="ip-value">{{ ipInfo.ip }}</div>
        <button @click="copyToClipboard(ipInfo.ip)">Copy</button>
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
.loading { text-align: center; padding: 40px; }
.info-card { background: #f8f9fa; border-radius: 12px; padding: 24px; }
.ip-address { text-align: center; margin-bottom: 24px; }
.ip-value { font-size: 32px; font-weight: bold; font-family: monospace; margin: 16px 0; }
button { padding: 8px 16px; background: #18a058; color: white; border: none; border-radius: 4px; cursor: pointer; }
.details { display: grid; gap: 12px; }
.detail-item { display: flex; justify-content: space-between; padding: 8px; background: white; border-radius: 4px; }
.label { font-weight: bold; color: #666; }
</style>
