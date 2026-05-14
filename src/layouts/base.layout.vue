<script lang="ts" setup>
import { NIcon, useThemeVars } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { Home2, Menu2 } from '@vicons/tabler';
import { storeToRefs } from 'pinia';
import HeroGradient from '../assets/hero-gradient.svg?component';
import MenuLayout from '../components/MenuLayout.vue';
import NavbarButtons from '../components/NavbarButtons.vue';
import { useStyleStore } from '@/stores/style.store';
import { config } from '@/config';
import type { ToolCategory } from '@/tools/tools.types';
import { useToolStore } from '@/tools/tools.store';
import CollapsibleToolMenu from '@/components/CollapsibleToolMenu.vue';

const themeVars = useThemeVars();
const styleStore = useStyleStore();
const version = config.app.version;
const { t } = useI18n();
const toolStore = useToolStore();
const { favoriteTools, toolsByCategory } = storeToRefs(toolStore);

const tools = computed<ToolCategory[]>(() => [
  ...(favoriteTools.value.length > 0 ? [{ name: t('tools.categories.favorite-tools'), components: favoriteTools.value }] : []),
  ...toolsByCategory.value,
]);
</script>

<template>
  <MenuLayout class="menu-layout" :class="{ isSmallScreen: styleStore.isSmallScreen }">
    <template #sider>
      <RouterLink to="/" class="hero-wrapper">
        <HeroGradient class="gradient" />
        <div class="text-wrapper">
          <div class="title">AgentsAITools</div>
          <div class="divider" />
          <div class="subtitle">{{ $t('home.subtitle') }}</div>
        </div>
      </RouterLink>

      <div class="sider-content">
        <div v-if="styleStore.isSmallScreen" flex flex-col items-center>
          <locale-selector w="90%" />
          <div flex justify-center>
            <NavbarButtons />
          </div>
        </div>

        <CollapsibleToolMenu :tools-by-category="tools" />

        <div class="footer">
          <div>AgentsAITools <span>v{{ version }}</span></div>
          <div>© {{ new Date().getFullYear() }} <span>AgentsAITools</span></div>
        </div>
      </div>
    </template>

    <template #content>
      <div class="toolbar">
        <div class="toolbar-left">
          <button class="menu-btn" @click="styleStore.isMenuCollapsed = !styleStore.isMenuCollapsed">
            <NIcon size="20" :component="Menu2" />
          </button>
          <RouterLink to="/" class="home-btn">
            <NIcon size="20" :component="Home2" />
          </RouterLink>
        </div>
        <div class="toolbar-center">
          <command-palette />
        </div>
        <div class="toolbar-right">
          <locale-selector v-if="!styleStore.isSmallScreen" />
          <NavbarButtons v-if="!styleStore.isSmallScreen" />
        </div>
      </div>
      <main class="main-content">
        <slot />
      </main>
    </template>
  </MenuLayout>
</template>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--apple-border-light, #e8e8ed);
  position: sticky;
  top: 0;
  z-index: 100;
}

.toolbar-left,
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.toolbar-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.menu-btn,
.home-btn {
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

.menu-btn:hover,
.home-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

.main-content {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer {
  text-align: center;
  color: #86868b;
  margin-top: 20px;
  padding: 20px 0;
  font-size: 13px;
}

.footer span {
  opacity: 0.7;
}

.hero-wrapper {
  display: block;
  position: relative;
  text-decoration: none;
  color: white;
}

.gradient {
  width: 100%;
  display: block;
}

.text-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}

.title {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.divider {
  width: 40px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  margin: 8px auto;
  border-radius: 1px;
}

.subtitle {
  font-size: 14px;
  opacity: 0.8;
}

.sider-content {
  padding: 16px;
  padding-top: 200px;
}
</style>
