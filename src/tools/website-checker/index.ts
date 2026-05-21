import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Website Down Checker',
  path: '/website-checker',
  description: 'Check if a website is down or up. Test website availability from multiple locations worldwide.',
  keywords: ['website checker', 'site down', 'website status', 'is website down', 'uptime checker', 'website monitor'],
  component: () => import('./website-checker.vue'),
  icon: World,
});
