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
    <div class="hero-section">
      <h1 class="sr-only">AgentsAITools - Free Online Developer Tools</h1>
      <h2 class="hero-title">Developer Tools</h2>
      <p class="hero-subtitle">Free online tools for developers. No signup required.</p>
    </div>

    <div class="tools-section">
      <!-- Favorite Tools -->
      <transition name="fade">
        <div v-if="toolStore.favoriteTools.length > 0" class="tool-group">
          <h3 class="group-title">
            {{ t('home.categories.favoriteTools') }}
            <span class="drag-hint">
              <n-icon :component="IconDragDrop" size="16" />
            </span>
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
        <h3 class="group-title">{{ t('home.categories.newestTools') }}</h3>
        <div class="tools-grid">
          <ToolCard v-for="tool in toolStore.newTools" :key="tool.name" :tool="tool" />
        </div>
      </div>

      <!-- All Tools -->
      <div class="tool-group">
        <h3 class="group-title">{{ t('home.categories.allTools') }}</h3>
        <div class="tools-grid">
          <ToolCard v-for="tool in toolStore.tools" :key="tool.name" :tool="tool" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  padding: 48px 20px;
  margin-bottom: 32px;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: #1d1d1f;
  letter-spacing: -1px;
  margin: 0 0 12px;
}

.hero-subtitle {
  font-size: 18px;
  color: #6e6e73;
  margin: 0;
}

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

.drag-hint {
  color: #86868b;
  font-size: 12px;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
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

  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
