<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import type { HeadObject } from '@vueuse/head';

import BaseLayout from './base.layout.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import type { Tool } from '@/tools/tools.types';

const route = useRoute();

const toolName = computed(() => String(route.meta.name || ''));
const toolDesc = computed(() => String(route.meta?.description || ''));
const toolUrl = computed(() => `https://agentsaitools.com${route.path}`);

const head = computed<HeadObject>(() => ({
  title: `${toolName.value} - Free Online Tool | AgentsAITools`,
  link: [
    {
      rel: 'canonical',
      href: toolUrl.value,
    },
  ],
  meta: [
    {
      name: 'description',
      content: `${toolDesc.value} Free online tool by AgentsAITools - no signup required.`,
    },
    {
      name: 'keywords',
      content: [...((route.meta.keywords ?? []) as string[]), 'online', 'free', 'tool', 'developer'].join(', '),
    },
    {
      property: 'og:title',
      content: `${toolName.value} - Free Online Tool | AgentsAITools`,
    },
    {
      property: 'og:description',
      content: `${toolDesc.value} Free online tool by AgentsAITools - no signup required.`,
    },
    {
      property: 'og:url',
      content: toolUrl.value,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@agentsaitools',
    },
    {
      name: 'twitter:title',
      content: `${toolName.value} - Free Online Tool | AgentsAITools`,
    },
    {
      name: 'twitter:description',
      content: `${toolDesc.value} Free online tool by AgentsAITools - no signup required.`,
    },
    {
      name: 'twitter:image',
      content: 'https://agentsaitools.com/banner.png?v=2',
    },
    {
      name: 'twitter:image:alt',
      content: `${toolName.value} - AgentsAITools`,
    },
  ],
}));
useHead(head);
const { t } = useI18n();

const i18nKey = computed<string>(() => route.path.trim().replace('/', ''));
const toolTitle = computed<string>(() => t(`tools.${i18nKey.value}.title`, toolName.value));
const toolDescription = computed<string>(() => t(`tools.${i18nKey.value}.description`, toolDesc.value));

// Tool JSON-LD
const toolJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': `${toolName.value} - AgentsAITools`,
  'url': toolUrl.value,
  'description': toolDesc.value,
  'applicationCategory': 'DeveloperApplication',
  'operatingSystem': 'Web',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD',
  },
  'provider': {
    '@type': 'Organization',
    'name': 'AgentsAITools',
    'url': 'https://agentsaitools.com',
  },
}));

// BreadcrumbList JSON-LD
const breadcrumbJsonLd = computed(() => {
  const category = String(route.meta.category || 'Tools');
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://agentsaitools.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': category,
        'item': `https://agentsaitools.com/#${category.toLowerCase().replace(/\s+/g, '-')}`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': toolName.value,
        'item': toolUrl.value,
      },
    ],
  };
});
</script>

<template>
  <BaseLayout>
    <div class="tool-layout">
      <Breadcrumb />
      
      <script type="application/ld+json">
      {{ JSON.stringify(toolJsonLd) }}
      </script>
      
      <script type="application/ld+json">
      {{ JSON.stringify(breadcrumbJsonLd) }}
      </script>

      <div class="tool-header">
        <div flex flex-nowrap items-center justify-between>
          <n-h1>
            {{ toolTitle }}
          </n-h1>

          <div>
            <FavoriteButton :tool="{ name: route.meta.name, path: route.path } as Tool" />
          </div>
        </div>

        <div class="separator" />

        <div class="description">
          {{ toolDescription }}
        </div>
      </div>
    </div>

    <div class="tool-content">
      <slot />
    </div>
  </BaseLayout>
</template>

<style lang="less" scoped>
.tool-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  ::v-deep(& > *) {
    flex: 0 1 600px;
  }
}

.tool-layout {
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;

  .tool-header {
    padding: 40px 0;
    width: 100%;

    .n-h1 {
      opacity: 0.9;
      font-size: 40px;
      font-weight: 400;
      margin: 0;
      line-height: 1;
    }

    .separator {
      width: 200px;
      height: 2px;
      background: rgb(161, 161, 161);
      opacity: 0.2;

      margin: 10px 0;
    }

    .description {
      margin: 0;

      opacity: 0.7;
    }
  }
}
</style>
