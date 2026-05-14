<script setup lang="ts">
import type { Tool } from '@/tools/tools.types';
import { useRouter } from 'vue-router';

const props = defineProps<{ tool: Tool }>();
const router = useRouter();

function handleClick() {
  router.push(props.tool.path);
}
</script>

<template>
  <div class="tool-card" @click="handleClick">
    <div class="tool-card-icon">
      <n-icon :component="tool.icon" size="22" />
    </div>
    <div class="tool-card-content">
      <h3 class="tool-card-name">{{ tool.name }}</h3>
      <p class="tool-card-desc">{{ tool.description }}</p>
    </div>
    <div class="tool-card-arrow">→</div>
  </div>
</template>

<style scoped>
.tool-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  background: #ffffff;
  border: 1px solid #e8e8ed;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tool-card:hover {
  border-color: #0071e3;
  box-shadow: 0 4px 12px rgba(0, 113, 227, 0.1);
  transform: translateY(-2px);
}

/* Dark mode */
:root.dark .tool-card {
  background: #1e1e1e;
  border-color: #333;
}

:root.dark .tool-card:hover {
  border-color: #0071e3;
  box-shadow: 0 4px 12px rgba(0, 113, 227, 0.2);
}

.tool-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  color: white;
  flex-shrink: 0;
}

.tool-card-content {
  flex: 1;
  min-width: 0;
}

.tool-card-name {
  font-size: 14px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

:root.dark .tool-card-name {
  color: #f5f5f7;
}

.tool-card-desc {
  font-size: 12px;
  color: #6e6e73;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

:root.dark .tool-card-desc {
  color: #999;
}

.tool-card-arrow {
  color: #86868b;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.2s ease;
  flex-shrink: 0;
}

.tool-card:hover .tool-card-arrow {
  opacity: 1;
}
</style>
