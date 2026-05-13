<script setup lang="ts">
import { ref, computed } from 'vue';

const timestamp = ref(Math.floor(Date.now() / 1000));
const dateInput = ref(new Date().toISOString().slice(0, 19));

const convertedDate = computed(() => {
  return new Date(timestamp.value * 1000).toLocaleString();
});

const convertedTimestamp = computed(() => {
  return Math.floor(new Date(dateInput.value).getTime() / 1000);
});

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <div class="converter">
    <div class="section">
      <h3>Timestamp to Date</h3>
      <div class="input-group">
        <input v-model="timestamp" type="number" placeholder="Enter Unix timestamp" />
        <button @click="copyToClipboard(convertedDate)">Copy</button>
      </div>
      <div class="result">{{ convertedDate }}</div>
    </div>

    <div class="section">
      <h3>Date to Timestamp</h3>
      <div class="input-group">
        <input v-model="dateInput" type="datetime-local" />
        <button @click="copyToClipboard(String(convertedTimestamp))">Copy</button>
      </div>
      <div class="result">{{ convertedTimestamp }}</div>
    </div>

    <div class="section">
      <h3>Current Timestamp</h3>
      <div class="result">{{ Math.floor(Date.now() / 1000) }}</div>
      <button @click="timestamp = Math.floor(Date.now() / 1000)">Refresh</button>
    </div>
  </div>
</template>

<style scoped>
.converter { max-width: 600px; margin: 0 auto; }
.section { margin-bottom: 24px; padding: 16px; background: #f8f9fa; border-radius: 8px; }
.input-group { display: flex; gap: 8px; margin-bottom: 8px; }
input { flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
button { padding: 8px 16px; background: #18a058; color: white; border: none; border-radius: 4px; cursor: pointer; }
.result { padding: 8px; background: white; border-radius: 4px; font-family: monospace; }
</style>
