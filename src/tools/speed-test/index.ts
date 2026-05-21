import { Gauge } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Internet Speed Test',
  path: '/speed-test',
  description: 'Test your internet connection speed online. Measure download speed, upload speed, and ping latency.',
  keywords: ['speed test', 'internet speed', 'bandwidth test', 'download speed', 'upload speed', 'ping test', 'network speed', 'connection test'],
  component: () => import('./speed-test.vue'),
  icon: Gauge,
});
