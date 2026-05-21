import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'DNS Lookup',
  path: '/dns-lookup',
  description: 'Look up DNS records for any domain. Check A, AAAA, MX, TXT, CNAME, and NS records online.',
  keywords: ['dns lookup', 'dns records', 'dns checker', 'domain lookup', 'mx records', 'a record', 'cname record', 'dns query'],
  component: () => import('./dns-lookup.vue'),
  icon: World,
});
