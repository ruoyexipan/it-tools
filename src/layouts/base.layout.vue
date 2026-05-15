<script lang="ts" setup>
import { NIcon, useThemeVars } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { Menu2, Settings, MessageCircle, FileText, Shield, BrandTwitter, Heart } from '@vicons/tabler';
import { storeToRefs } from 'pinia';
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

const twitterUrl = 'https://x.com/ruoyexi666';
const paypalUrl = 'https://www.paypal.com/paypalme/ruoyexi';
</script>

<template>
  <MenuLayout class="menu-layout" :class="{ isSmallScreen: styleStore.isSmallScreen }">
    <template #sider>
      <!-- Logo Section -->
      <div class="sidebar-header">
        <RouterLink to="/" class="logo-link">
          <div class="logo-icon">
            <img src="/logo.png" alt="AgentsAITools" class="logo-img" />
          </div>
          <div class="logo-info">
            <span class="logo-name">AgentsAITools</span>
            <span class="logo-desc">Developer Tools</span>
          </div>
        </RouterLink>
      </div>

      <!-- Tools Menu -->
      <div class="sidebar-tools">
        <CollapsibleToolMenu :tools-by-category="tools" />
      </div>

      <!-- Bottom Links -->
      <div class="sidebar-footer">
        <a :href="twitterUrl" target="_blank" rel="noopener noreferrer" class="footer-link twitter">
          <NIcon size="16" :component="BrandTwitter" />
          <span>Twitter</span>
        </a>
        <RouterLink to="/sponsor" class="footer-link sponsor">
          <NIcon size="16" :component="Heart" />
          <span>Sponsor</span>
        </RouterLink>
        <div class="footer-divider" />
        <RouterLink to="/about" class="footer-link">
          <NIcon size="16" :component="Settings" />
          <span>About</span>
        </RouterLink>
        <RouterLink to="/contact" class="footer-link">
          <NIcon size="16" :component="MessageCircle" />
          <span>Contact</span>
        </RouterLink>
        <RouterLink to="/privacy-policy" class="footer-link">
          <NIcon size="16" :component="Shield" />
          <span>Privacy</span>
        </RouterLink>
        <RouterLink to="/terms-of-service" class="footer-link">
          <NIcon size="16" :component="FileText" />
          <span>Terms</span>
        </RouterLink>
        <div class="footer-version">v{{ version }}</div>
      </div>
    </template>

    <template #content>
      <!-- Toolbar -->
      <header class="toolbar">
        <div class="toolbar-left">
          <button class="toolbar-btn" @click="styleStore.isMenuCollapsed = !styleStore.isMenuCollapsed">
            <NIcon size="20" :component="Menu2" />
          </button>
          <RouterLink to="/" class="toolbar-btn home-btn">
            <span style="font-size: 14px; font-weight: 600;">🏠 Home</span>
          </RouterLink>
        </div>
        <div class="toolbar-center">
          <command-palette />
        </div>
        <div class="toolbar-right">
          <locale-selector v-if="!styleStore.isSmallScreen" />
          <NavbarButtons />
          <a :href="twitterUrl" target="_blank" rel="noopener noreferrer" class="toolbar-btn twitter-btn" title="Follow us on Twitter">
            <NIcon size="18" :component="BrandTwitter" />
          </a>
          <RouterLink to="/sponsor" class="toolbar-btn sponsor-btn" title="Support us">
            <NIcon size="18" :component="Heart" />
          </RouterLink>
        </div>
      </header>

      <!-- Content -->
      <main class="main-content">
        <slot />
      </main>
    </template>
  </MenuLayout>
</template>

<style scoped>
/* Sidebar Header */
.sidebar-header {
  padding: 20px 16px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
}

.logo-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-info {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-size: 15px;
  font-weight: 600;
  color: #1d1d1f;
}

.logo-desc {
  font-size: 12px;
  color: #86868b;
}

:root.dark .logo-name {
  color: #f5f5f7;
}

/* Tools Section */
.sidebar-tools {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

/* Footer */
.sidebar-footer {
  padding: 16px;
  border-top: 1px solid rgba(128, 128, 128, 0.1);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  color: #86868b;
  text-decoration: none;
  font-size: 13px;
  transition: all 0.2s ease;
}

.footer-link:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #1d1d1f;
}

.footer-link.twitter:hover {
  color: #1da1f2;
}

.footer-link.sponsor:hover {
  color: #ff6b6b;
}

:root.dark .footer-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #f5f5f7;
}

.footer-divider {
  height: 1px;
  background: rgba(128, 128, 128, 0.1);
  margin: 8px 0;
}

.footer-version {
  text-align: center;
  font-size: 12px;
  color: #86868b;
  margin-top: 8px;
}

/* Toolbar */
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid #e8e8ed;
  position: sticky;
  top: 0;
  z-index: 100;
}

:root.dark .toolbar {
  background: rgba(30, 30, 30, 0.8);
  border-bottom-color: #2d2d2d;
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
  max-width: 400px;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 12px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  color: #1d1d1f;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 14px;
}

.toolbar-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

.home-btn {
  padding: 0 16px;
}

.twitter-btn:hover {
  color: #1da1f2;
  background: rgba(29, 161, 242, 0.1);
}

.sponsor-btn {
  color: #86868b;
}

.sponsor-btn:hover {
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
}

:root.dark .toolbar-btn {
  color: #f5f5f7;
}

:root.dark .toolbar-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Main Content */
.main-content {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .toolbar-center {
    max-width: 200px;
  }
}
</style>
