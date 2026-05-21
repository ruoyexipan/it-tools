<script setup lang="ts">
import { ref } from 'vue';

const domain = ref('');
const results = ref<any[]>([]);
const isSearching = ref(false);
const error = ref('');

const recordTypes = ['A', 'AAAA', 'MX', 'TXT', 'CNAME', 'NS'];

async function lookupDNS() {
  if (!domain.value) return;
  isSearching.value = true;
  results.value = [];
  error.value = '';

  try {
    const cleanDomain = domain.value.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    const allResults = [];

    for (const type of recordTypes) {
      try {
        const response = await fetch(`https://dns.google/resolve?name=${cleanDomain}&type=${type}`);
        const data = await response.json();
        if (data.Answer && data.Answer.length > 0) {
          allResults.push({
            type,
            records: data.Answer.map((a: any) => ({
              value: a.data,
              ttl: a.TTL,
            })),
          });
        }
      } catch (e) {
        // Skip failed lookups
      }
    }

    if (allResults.length === 0) {
      error.value = 'No DNS records found for this domain.';
    } else {
      results.value = allResults;
    }
  } catch (e) {
    error.value = 'Failed to lookup DNS records. Please try again.';
  } finally {
    isSearching.value = false;
  }
}
</script>

<template>
  <div class="dns-lookup">
    <div class="lookup-card">
      <h2>DNS Lookup</h2>
      <p>Look up DNS records for any domain name.</p>
      <div class="input-group">
        <input v-model="domain" type="text" placeholder="Enter domain name (e.g., example.com)" class="dns-input" @keyup.enter="lookupDNS" />
        <button class="lookup-btn" :disabled="isSearching || !domain" @click="lookupDNS">
          {{ isSearching ? 'Searching...' : 'Lookup' }}
        </button>
      </div>
    </div>

    <div v-if="error" class="error-card">
      <p>{{ error }}</p>
    </div>

    <div v-if="results.length > 0" class="results-card">
      <h3>DNS Records for {{ domain }}</h3>
      <div v-for="result in results" :key="result.type" class="record-group">
        <h4>{{ result.type }} Records</h4>
        <div v-for="(record, index) in result.records" :key="index" class="record-item">
          <span class="record-value">{{ record.value }}</span>
          <span class="record-ttl">TTL: {{ record.ttl }}s</span>
        </div>
      </div>
    </div>

    <div class="info-section">
      <h3>What is DNS Lookup?</h3>
      <p>DNS (Domain Name System) lookup is the process of finding the IP address associated with a domain name. This tool shows all DNS records for a given domain.</p>
      <h4>Record Types</h4>
      <ul>
        <li><strong>A:</strong> Maps domain to IPv4 address</li>
        <li><strong>AAAA:</strong> Maps domain to IPv6 address</li>
        <li><strong>CNAME:</strong> Canonical name (alias) for another domain</li>
        <li><strong>MX:</strong> Mail exchange servers</li>
        <li><strong>TXT:</strong> Text records (SPF, DKIM, etc.)</li>
        <li><strong>NS:</strong> Name servers for the domain</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dns-lookup { max-width: 800px; margin: 0 auto; }
.lookup-card { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 32px; margin-bottom: 24px; }
.lookup-card h2 { font-size: 28px; font-weight: 600; color: #1d1d1f; margin: 0 0 8px; }
.lookup-card p { font-size: 16px; color: #6e6e73; margin: 0 0 24px; }
.input-group { display: flex; gap: 12px; }
.dns-input { flex: 1; padding: 12px 16px; border: 1px solid #d2d2d7; border-radius: 8px; font-size: 16px; outline: none; }
.dns-input:focus { border-color: #0071e3; box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1); }
.lookup-btn { padding: 12px 24px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }
.lookup-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.error-card { background: #fff3f3; border: 1px solid #ffcdd2; border-radius: 12px; padding: 16px; margin-bottom: 24px; }
.error-card p { color: #d32f2f; margin: 0; }
.results-card { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 24px; margin-bottom: 24px; }
.results-card h3 { font-size: 20px; font-weight: 600; color: #1d1d1f; margin: 0 0 20px; }
.record-group { margin-bottom: 20px; }
.record-group h4 { font-size: 16px; font-weight: 600; color: #667eea; margin: 0 0 12px; }
.record-item { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f5f5f7; border-radius: 8px; margin-bottom: 8px; }
.record-value { font-family: monospace; font-size: 14px; color: #1d1d1f; }
.record-ttl { font-size: 12px; color: #6e6e73; }
.info-section { background: #ffffff; border: 1px solid #e8e8ed; border-radius: 16px; padding: 24px; }
.info-section h3 { font-size: 20px; font-weight: 600; color: #1d1d1f; margin: 0 0 12px; }
.info-section h4 { font-size: 16px; font-weight: 600; color: #1d1d1f; margin: 16px 0 8px; }
.info-section p { font-size: 15px; color: #333; line-height: 1.6; margin: 0 0 12px; }
.info-section ul { margin: 0 0 12px; padding-left: 20px; }
.info-section li { font-size: 15px; color: #333; margin-bottom: 8px; line-height: 1.5; }
:root.dark .lookup-card, :root.dark .results-card, :root.dark .info-section { background: #1e1e1e; border-color: #333; }
:root.dark .lookup-card h2, :root.dark .results-card h3, :root.dark .info-section h3, :root.dark .info-section h4 { color: #f5f5f7; }
:root.dark .lookup-card p, :root.dark .info-section p, :root.dark .info-section li { color: #999; }
:root.dark .dns-input { background: #2d2d2d; border-color: #444; color: #f5f5f7; }
:root.dark .record-item { background: #2d2d2d; }
:root.dark .record-value { color: #f5f5f7; }
</style>
