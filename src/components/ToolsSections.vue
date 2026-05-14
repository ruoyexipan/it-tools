<script setup lang="ts">
import { computed, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToolStore } from '@/tools/tools.store';

const route = useRoute();
const router = useRouter();
const toolStore = useToolStore();

const currentPath = computed(() => route.path);

// Scroll to top function
function scrollToTop() {
  nextTick(() => {
    // Try Naive UI scroll container first
    const scrollContainer = document.querySelector('.n-layout-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback to window
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// Navigate and scroll
function navigateTo(path: string) {
  router.push(path);
  scrollToTop();
}

// 获取相关工具（同类别）
const relatedTools = computed(() => {
  const currentTool = toolStore.tools.find(t => t.path === currentPath.value);
  if (!currentTool) return [];
  
  // 获取同类别工具
  const category = getToolCategory(currentTool.name);
  const sameCategory = toolStore.tools
    .filter(t => t.path !== currentPath.value && getToolCategory(t.name) === category)
    .slice(0, 6);
  
  // 如果同类不足，补充其他工具
  if (sameCategory.length < 6) {
    const others = toolStore.tools
      .filter(t => t.path !== currentPath.value && !sameCategory.includes(t))
      .slice(0, 6 - sameCategory.length);
    sameCategory.push(...others);
  }
  
  return sameCategory;
});

// 获取工具类别
function getToolCategory(toolName: string): string {
  const categories: Record<string, string[]> = {
    'Crypto': ['Token', 'Hash', 'Bcrypt', 'UUID', 'ULID', 'Encryption', 'BIP39', 'HMAC', 'RSA', 'Password', 'PDF Signature'],
    'Converter': ['DateTime', 'Base', 'Roman', 'Base64', 'Color', 'Case', 'NATO', 'Text to Binary', 'Text to Unicode', 'YAML', 'JSON', 'List', 'TOML', 'XML', 'Markdown', 'Unix Timestamp'],
    'Web': ['URL', 'HTML Entities', 'Device', 'Basic Auth', 'Meta Tag', 'OTP', 'MIME', 'JWT', 'Keycode', 'Slugify', 'HTML WYSIWYG', 'User Agent', 'HTTP Status', 'JSON Diff', 'SafeLink'],
    'Images': ['QR Code', 'WiFi QR', 'SVG Placeholder', 'Camera'],
    'Development': ['Git', 'Random Port', 'Crontab', 'JSON', 'SQL', 'Chmod', 'Docker', 'XML', 'YAML', 'Email', 'Regex'],
    'Network': ['IPv4', 'MAC', 'IPv6', 'IP'],
    'Math': ['Math', 'ETA', 'Percentage'],
    'Measurement': ['Chronometer', 'Temperature', 'Benchmark'],
    'Text': ['Lorem Ipsum', 'Text Statistics', 'Emoji', 'String Obfuscator', 'Text Diff', 'Numeronym', 'ASCII'],
    'Data': ['Phone', 'IBAN'],
  };
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(k => toolName.toLowerCase().includes(k.toLowerCase()))) {
      return category;
    }
  }
  return 'Other';
}

// 获取所有工具分类
const allToolsByCategory = computed(() => {
  const categories: Record<string, any[]> = {};
  const categoryOrder = ['Crypto', 'Converter', 'Web', 'Images', 'Development', 'Network', 'Math', 'Measurement', 'Text', 'Data'];
  
  toolStore.tools.forEach(tool => {
    const category = getToolCategory(tool.name);
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(tool);
  });
  
  // 按顺序排序
  return categoryOrder
    .filter(cat => categories[cat])
    .map(cat => ({ name: cat, tools: categories[cat] }));
});

// 特殊页面
const specialPages = [
  { name: 'About AgentsAITools', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
];

// 是否显示相关工具（首页不显示）
const showRelatedTools = computed(() => currentPath.value !== '/');
</script>

<template>
  <div class="tools-sections">
    <!-- Related Tools -->
    <div v-if="showRelatedTools && relatedTools.length > 0" class="section-card">
      <h3 class="section-title">Related Tools</h3>
      <div class="tools-grid">
        <a
          v-for="tool in relatedTools"
          :key="tool.path"
          href="#"
          class="tool-link"
          @click.prevent="navigateTo(tool.path)"
        >
          {{ tool.name }}
        </a>
      </div>
    </div>

    <!-- All Tools -->
    <div v-if="showRelatedTools" class="section-card">
      <h3 class="section-title">All Developer Tools</h3>
      
      <div v-for="category in allToolsByCategory" :key="category.name" class="category-group">
        <h4 class="category-title">{{ category.name }}</h4>
        <div class="tools-grid">
          <a
            v-for="tool in category.tools"
            :key="tool.path"
            href="#"
            class="tool-link"
            @click.prevent="navigateTo(tool.path)"
          >
            {{ tool.name }}
          </a>
        </div>
      </div>

      <!-- Special Pages -->
      <div class="special-pages">
        <div class="tools-grid">
          <a
            v-for="page in specialPages"
            :key="page.path"
            href="#"
            class="tool-link special"
            @click.prevent="navigateTo(page.path)"
          >
            {{ page.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tools-sections {
  width: 100%;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-card {
  background: #ffffff;
  border: 1px solid #e8e8ed;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 20px;
}

.category-group {
  margin-bottom: 20px;
}

.category-title {
  font-size: 14px;
  font-weight: 600;
  color: #6e6e73;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 10px;
}

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tool-link {
  display: inline-flex;
  padding: 6px 12px;
  background: #f5f5f7;
  color: #1d1d1f;
  text-decoration: none;
  border-radius: 6px;
  font-size: 12px;
  border: 1px solid #e8e8ed;
  transition: all 0.2s;
}

.tool-link:hover {
  background: #e8e8ed;
  border-color: #d2d2d7;
}

.tool-link.special {
  color: #6e6e73;
}

.special-pages {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e8e8ed;
}

/* Dark Mode */
:root.dark .section-card {
  background: #1e1e1e;
  border-color: #333;
}

:root.dark .section-title {
  color: #f5f5f7;
}

:root.dark .category-title {
  color: #999;
}

:root.dark .tool-link {
  background: #2d2d2d;
  color: #f5f5f7;
  border-color: #444;
}

:root.dark .tool-link:hover {
  background: #3d3d3d;
  border-color: #0071e3;
}

:root.dark .tool-link.special {
  color: #999;
}

:root.dark .special-pages {
  border-top-color: #333;
}
</style>
