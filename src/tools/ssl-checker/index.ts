import { ShieldCheck } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'SSL Certificate Checker',
  path: '/ssl-checker',
  description: 'Check SSL certificate details for any website. Verify certificate validity, expiration date, and issuer information.',
  keywords: ['ssl checker', 'ssl certificate', 'certificate validator', 'https check', 'ssl test', 'certificate expiry'],
  component: () => import('./ssl-checker.vue'),
  icon: ShieldCheck,
});
