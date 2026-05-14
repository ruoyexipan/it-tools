<script setup lang="ts">
import { IconDragDrop } from '@tabler/icons-vue';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import Draggable from 'vuedraggable';
import ToolCard from '../components/ToolCard.vue';
import { useToolStore } from '@/tools/tools.store';

const toolStore = useToolStore();
useHead({ title: 'AgentsAITools - Free Online Developer Tools Collection' });
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
      <h1 class="sr-only">AgentsAITools</h1>
      <div class="hero-content">
        <h2 class="hero-title">Developer Tools</h2>
        <p class="hero-subtitle">Free online tools for developers. No signup required.</p>
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
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 48px 24px;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 0 12px;
}

.hero-subtitle {
  font-size: 18px;
  opacity: 0.9;
  margin: 0 0 24px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
}

.stat-label {
  font-size: 14px;
  opacity: 0.8;
}

/* Tools Section */
.tools-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
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

:root.dark .group-title {
  color: #f5f5f7;
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
}
</style>
