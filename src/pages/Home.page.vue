<script setup lang="ts">
import { IconDragDrop } from '@tabler/icons-vue';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import Draggable from 'vuedraggable';
import ToolCard from '../components/ToolCard.vue';
import { useToolStore } from '@/tools/tools.store';

const toolStore = useToolStore();
useHead({ 
  title: 'AgentsAITools - Free Online Developer Tools for JSON, Base64, Hash & More',
  meta: [
    { name: 'description', content: 'AgentsAITools provides 90+ free online developer tools including JSON formatter, Base64 encoder, hash generator, JWT decoder, UUID generator, and more. No signup required.' },
  ],
});
const { t } = useI18n();
const favoriteTools = computed(() => toolStore.favoriteTools);

function onUpdateFavoriteTools() {
  toolStore.updateFavoriteTools(favoriteTools.value);
}
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="sr-only">AgentsAITools - Free Online Developer Tools</h1>
      <div class="hero-content">
        <div class="hero-text">
          <h2 class="hero-title">Developer Tools</h2>
          <p class="hero-subtitle">Free online tools for developers. No signup required.</p>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">90+</span>
            <span class="stat-label">Tools</span>
          </div>
          <div class="stat">
            <span class="stat-number">100%</span>
            <span class="stat-label">Free</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="tools-section">
      <!-- Favorite Tools -->
      <transition name="fade">
        <div v-if="toolStore.favoriteTools.length > 0" class="tool-group">
          <h3 class="group-title">
            ⭐ {{ t('home.categories.favoriteTools') }}
            <span class="drag-hint">(drag to reorder)</span>
          </h3>
          <Draggable
            :list="favoriteTools"
            class="tools-grid"
            ghost-class="ghost-card"
            item-key="name"
            @end="onUpdateFavoriteTools"
          >
            <template #item="{ element: tool }">
              <ToolCard :tool="tool" />
            </template>
          </Draggable>
        </div>
      </transition>

      <!-- New Tools -->
      <div v-if="toolStore.newTools.length > 0" class="tool-group">
        <h3 class="group-title">🆕 {{ t('home.categories.newestTools') }}</h3>
        <div class="tools-grid">
          <ToolCard v-for="tool in toolStore.newTools" :key="tool.name" :tool="tool" />
        </div>
      </div>

      <!-- All Tools -->
      <div class="tool-group">
        <h3 class="group-title">🛠️ {{ t('home.categories.allTools') }}</h3>
        <div class="tools-grid">
          <ToolCard v-for="tool in toolStore.tools" :key="tool.name" :tool="tool" />
        </div>
      </div>
    </section>

    <!-- SEO Content Section -->
    <section class="seo-content">
      <h2>Why Choose AgentsAITools?</h2>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h3>100% Free</h3>
          <p>All tools are completely free to use. No hidden fees, no premium tiers.</p>
        </div>
        <div class="benefit">
          <h3>No Signup Required</h3>
          <p>Start using tools immediately. No registration or email required.</p>
        </div>
        <div class="benefit">
          <h3>Privacy First</h3>
          <p>All processing happens in your browser. No data sent to servers.</p>
        </div>
        <div class="benefit">
          <h3>Mobile Friendly</h3>
          <p>Works on desktop, tablet, and mobile devices.</p>
        </div>
      </div>

      <h2>Popular Tool Categories</h2>
      
      <div class="categories-list">
        <ul>
          <li><strong>Crypto Tools:</strong> Hash generator, JWT decoder, UUID generator, encryption</li>
          <li><strong>Converters:</strong> JSON formatter, Base64 encoder, YAML converter, color converter</li>
          <li><strong>Web Tools:</strong> URL encoder, HTML entities, meta tag generator</li>
          <li><strong>Development:</strong> SQL formatter, regex tester, Docker converter</li>
          <li><strong>Network:</strong> IP calculator, MAC address lookup, subnet calculator</li>
          <li><strong>Text Tools:</strong> Lorem ipsum generator, text diff, case converter</li>
        </ul>
      </div>

      <h2>Frequently Asked Questions</h2>
      
      <div class="faq-section">
        <div class="faq-item">
          <h3>What is AgentsAITools?</h3>
          <p>AgentsAITools is a free online developer tools collection with 90+ tools including JSON formatter, Base64 encoder, hash generator, JWT decoder, UUID generator, regex tester, and more.</p>
        </div>
        <div class="faq-item">
          <h3>Is AgentsAITools free to use?</h3>
          <p>Yes, AgentsAITools is completely free. No signup or registration required. All tools run directly in your browser.</p>
        </div>
        <div class="faq-item">
          <h3>Is my data safe?</h3>
          <p>Yes, all tools run entirely in your browser. No data is sent to any server. Your information stays on your device.</p>
        </div>
        <div class="faq-item">
          <h3>What tools are available?</h3>
          <p>90+ tools including: JSON formatter, Base64 encoder, hash generator, JWT decoder, UUID generator, regex tester, color converter, SQL formatter, Docker converter, and many more.</p>
        </div>
      </div>

      <h2>External Resources</h2>
      <p>Learn more about developer tools from these authoritative sources:</p>
      <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener" title="MDN Web Docs - JavaScript documentation and tutorials">MDN Web Docs - JavaScript</a></li>
        <li><a href="https://json.org" target="_blank" rel="noopener" title="JSON.org - Official JSON specification and documentation">JSON.org - JSON Specification</a></li>
        <li><a href="https://base64.guru" target="_blank" rel="noopener" title="Base64.guru - Learn about Base64 encoding and decoding">Base64.guru - Base64 Encoding Guide</a></li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 40px 20px;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
}

.hero-text {
  margin-bottom: 24px;
}

.hero-title {
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 0 8px;
}

.hero-subtitle {
  font-size: 16px;
  opacity: 0.9;
  margin: 0 0 12px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
}

.stat-label {
  font-size: 13px;
  opacity: 0.8;
}

.tools-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
}

.tool-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.group-title {
  font-size: 20px;
  font-weight: 600;
  color: #1d1d1f;
  display: flex;
  align-items: center;
  gap: 8px;
}

.drag-hint {
  font-size: 12px;
  color: #86868b;
  font-weight: 400;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
}

.seo-content {
  background: #f8f9fa;
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 40px;
}

.seo-content h2 {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 16px;
  color: #1d1d1f;
}

.seo-content p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin: 0 0 16px;
}

.seo-content ul {
  margin: 0 0 16px;
  padding-left: 24px;
}

.seo-content li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.benefit {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e8e8ed;
}

.benefit h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #18a058;
}

.benefit p {
  font-size: 14px;
  margin: 0;
  color: #666;
}

.categories-list ul {
  list-style: none;
  padding: 0;
}

.categories-list li {
  padding: 12px;
  background: white;
  margin-bottom: 8px;
  border-radius: 8px;
  border: 1px solid #e8e8ed;
}

.faq-section {
  margin-top: 16px;
}

.faq-item {
  background: white;
  padding: 20px;
  margin-bottom: 16px;
  border-radius: 12px;
  border: 1px solid #e8e8ed;
}

.faq-item h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px;
  color: #18a058;
}

.faq-item p {
  font-size: 14px;
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.ghost-card {
  opacity: 0.4;
  background: #f5f5f7;
  border: 2px dashed #0071e3;
  border-radius: 12px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Dark Mode */
:root.dark .group-title {
  color: #f5f5f7;
}

:root.dark .seo-content {
  background: #1e1e1e;
  border-color: #333;
}

:root.dark .seo-content h2 {
  color: #f5f5f7;
}

:root.dark .seo-content p,
:root.dark .seo-content li {
  color: #ccc;
}

:root.dark .benefit {
  background: #2d2d2d;
  border-color: #444;
}

:root.dark .benefit h3 {
  color: #34c759;
}

:root.dark .benefit p {
  color: #999;
}

:root.dark .categories-list li {
  background: #2d2d2d;
  border-color: #444;
  color: #ccc;
}

:root.dark .faq-item {
  background: #2d2d2d;
  border-color: #444;
}

:root.dark .faq-item h3 {
  color: #34c759;
}

:root.dark .faq-item p {
  color: #999;
}

:root.dark .seo-content a {
  color: #0071e3;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-stats {
    gap: 24px;
  }

  .stat-number {
    font-size: 24px;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
