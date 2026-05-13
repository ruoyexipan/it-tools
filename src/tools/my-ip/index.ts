import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'What Is My IP Address',
  path: '/my-ip',
  description: 'Check your public IP address online. Free IP address lookup tool showing your IP, location, and ISP information.',
  keywords: ['my ip', 'what is my ip', 'ip address', 'public ip', 'ip lookup'],
  component: () => import('./my-ip.vue'),
  icon: World,
});
