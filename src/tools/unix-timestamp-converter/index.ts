import { Clock } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Unix Timestamp Converter',
  path: '/unix-timestamp-converter',
  description: 'Convert between Unix timestamps and human-readable dates online. Free timestamp converter supporting seconds and milliseconds.',
  keywords: ['unix timestamp', 'epoch converter', 'timestamp to date', 'date to timestamp', 'unix time'],
  component: () => import('./unix-timestamp-converter.vue'),
  icon: Clock,
});
