<script setup lang="ts">
import { IconMoon, IconSun } from '@tabler/icons-vue';
import { useStyleStore } from '@/stores/style.store';

const styleStore = useStyleStore();
const { isDarkTheme } = toRefs(styleStore);
</script>

<template>
  <button 
    class="theme-toggle" 
    :title="isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'" 
    @click="styleStore.toggleDark()"
  >
    <n-icon v-if="isDarkTheme" size="18" :component="IconSun" />
    <n-icon v-else size="18" :component="IconMoon" />
  </button>
</template>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  color: #1d1d1f;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
}

/* Dark mode */
:root.dark .theme-toggle {
  color: #f5f5f7;
}

:root.dark .theme-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
