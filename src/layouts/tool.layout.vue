<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import type { HeadObject } from '@vueuse/head';
import BaseLayout from './base.layout.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import ToolsSections from '@/components/ToolsSections.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import type { Tool } from '@/tools/tools.types';

const route = useRoute();
const toolName = computed(() => String(route.meta.name || ''));
const toolDesc = computed(() => String(route.meta?.description || ''));
const toolUrl = computed(() => `https://agentsaitools.com${route.path}`);

const head = computed<HeadObject>(() => ({
  title: `${toolName.value} - Free Online Tool | AgentsAITools`,
  link: [{ rel: 'canonical', href: toolUrl.value }],
  meta: [
    { name: 'description', content: `${toolDesc.value} Free online tool by AgentsAITools - no signup required.` },
    { property: 'og:title', content: `${toolName.value} - Free Online Tool | AgentsAITools` },
    { property: 'og:description', content: `${toolDesc.value} Free online tool by AgentsAITools - no signup required.` },
    { property: 'og:url', content: toolUrl.value },
  ],
}));
useHead(head);
const { t } = useI18n();
const i18nKey = computed<string>(() => route.path.trim().replace('/', ''));
const toolTitle = computed<string>(() => t(`tools.${i18nKey.value}.title`, toolName.value));
const toolDescription = computed<string>(() => t(`tools.${i18nKey.value}.description`, toolDesc.value));

const toolJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': `${toolName.value} - AgentsAITools`,
  'url': toolUrl.value,
  'description': toolDesc.value,
  'applicationCategory': 'DeveloperApplication',
  'operatingSystem': 'Web',
  'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
  'provider': { '@type': 'Organization', 'name': 'AgentsAITools', 'url': 'https://agentsaitools.com' },
}));

const breadcrumbJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://agentsaitools.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Tools', 'item': 'https://agentsaitools.com/#tools' },
    { '@type': 'ListItem', 'position': 3, 'name': toolName.value, 'item': toolUrl.value },
  ],
}));
</script>

<template>
  <BaseLayout>
    <div class="tool-layout">
      <Breadcrumb />
      <script type="application/ld+json">{{ JSON.stringify(toolJsonLd) }}</script>
      <script type="application/ld+json">{{ JSON.stringify(breadcrumbJsonLd) }}</script>

      <div class="tool-header">
        <div class="tool-header-top">
          <h1 class="tool-title">{{ toolTitle }}</h1>
          <FavoriteButton :tool="{ name: route.meta.name, path: route.path } as Tool" />
        </div>
        <div class="tool-separator" />
        <p class="tool-description">{{ toolDescription }}</p>
      </div>

      <div class="tool-content">
        <slot />
      </div>

      <!-- Related Tools & All Tools -->
      <ToolsSections />
    </div>
  </BaseLayout>
</template>

<style scoped>
.tool-layout {
  max-width: 800px;
  margin: 0 auto;
}

.tool-header {
  padding: 32px 0 24px;
}

.tool-header-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.tool-title {
  font-size: 32px;
  font-weight: 600;
  color: #1d1d1f;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin: 0;
}

:root.dark .tool-title {
  color: #f5f5f7;
}

.tool-separator {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #0071e3, #34c759);
  border-radius: 2px;
  margin: 16px 0;
}

.tool-description {
  font-size: 16px;
  color: #6e6e73;
  line-height: 1.6;
  margin: 0;
}

:root.dark .tool-description {
  color: #999;
}

.tool-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 768px) {
  .tool-title {
    font-size: 24px;
  }
  .tool-header {
    padding: 20px 0 16px;
  }
}
</style>
