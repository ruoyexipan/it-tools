<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { IconChevronRight, IconHome } from '@tabler/icons-vue';

const route = useRoute();

const breadcrumbs = computed(() => {
  const items = [
    { name: 'Home', path: '/', icon: IconHome },
  ];

  if (route.meta.isTool) {
    items.push({
      name: 'Tools',
      path: '/',
      icon: null,
    });
    items.push({
      name: String(route.meta.name || ''),
      path: route.path,
      icon: null,
    });
  }

  return items;
});
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol class="breadcrumb-list">
      <li
        v-for="(item, index) in breadcrumbs"
        :key="item.path"
        class="breadcrumb-item"
      >
        <router-link
          v-if="index < breadcrumbs.length - 1"
          :to="item.path"
          class="breadcrumb-link"
        >
          <n-icon v-if="item.icon" :component="item.icon" size="14" />
          <span>{{ item.name }}</span>
        </router-link>
        <span v-else class="breadcrumb-current" aria-current="page">
          {{ item.name }}
        </span>
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
