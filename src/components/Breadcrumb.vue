<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { IconChevronRight, IconHome } from '@tabler/icons-vue';

const route = useRoute();

const category = computed(() => String(route.meta.category || 'Tools'));
const toolName = computed(() => String(route.meta.name || ''));

const breadcrumbs = computed(() => {
  const items = [
    { name: 'Home', path: '/', icon: IconHome },
  ];

  if (route.meta.isTool) {
    items.push({
      name: category.value,
      path: '/',
      icon: null,
    });
    items.push({
      name: toolName.value,
      path: route.path,
      icon: null,
    });
  }

  return items;
});
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol class="breadcrumb-list" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li
        v-for="(item, index) in breadcrumbs"
        :key="item.path"
        class="breadcrumb-item"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <router-link
          v-if="index < breadcrumbs.length - 1"
          :to="item.path"
          class="breadcrumb-link"
          itemprop="item"
        >
          <n-icon v-if="item.icon" :component="item.icon" size="14" />
          <span itemprop="name">{{ item.name }}</span>
        </router-link>
        <span v-else class="breadcrumb-current" aria-current="page" itemprop="name">
          {{ item.name }}
        </span>
        <meta itemprop="position" :content="String(index + 1)" />
        <n-icon
          v-if="index < breadcrumbs.length - 1"
          :component="IconChevronRight"
          size="14"
          class="breadcrumb-separator"
        />
      </li>
    </ol>
  </nav>
</template>

<style scoped lang="less">
.breadcrumb {
  padding: 8px 0;
  margin-bottom: 16px;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  opacity: 0.7;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
}

.breadcrumb-separator {
  margin: 0 8px;
  opacity: 0.5;
}

.breadcrumb-current {
  font-weight: 500;
}
</style>
