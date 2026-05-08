import { createRouter, createWebHistory } from 'vue-router';
import { layouts } from './layouts/index';
import HomePage from './pages/Home.page.vue';
import NotFound from './pages/404.page.vue';
import { tools } from './tools';
import { config } from './config';
import { routes as demoRoutes } from './ui/demo/demo.routes';

const toolsRoutes = tools.map(({ path, name, component, ...config }) => ({
  path,
  name,
  component,
  meta: { isTool: true, layout: layouts.toolLayout, name, ...config },
}));
const toolsRedirectRoutes = tools
  .filter(({ redirectFrom }) => redirectFrom && redirectFrom.length > 0)
  .flatMap(
    ({ path, redirectFrom }) => redirectFrom?.map(redirectSource => ({ path: redirectSource, redirect: path })) ?? [],
  );

const router = createRouter({
  history: createWebHistory(config.app.baseUrl),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./pages/Contact.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('./pages/legal/privacy-policy.vue'),
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('./pages/legal/terms-of-service.vue'),
    },
    // Landing pages for SEO
    {
      path: '/docker-run-to-compose-converter',
      name: 'docker-landing',
      component: () => import('./pages/landing/docker-run-to-compose.landing.vue'),
    },
    {
      path: '/jwt-decoder',
      name: 'jwt-landing',
      component: () => import('./pages/landing/jwt-decoder.landing.vue'),
    },
    {
      path: '/crontab-generator-landing',
      name: 'crontab-landing',
      component: () => import('./pages/landing/crontab-generator.landing.vue'),
    },
    {
      path: '/chmod-calculator-landing',
      name: 'chmod-landing',
      component: () => import('./pages/landing/chmod-calculator.landing.vue'),
    },
    {
      path: '/bcrypt-generator',
      name: 'bcrypt-landing',
      component: () => import('./pages/landing/bcrypt-generator.landing.vue'),
    },
    {
      path: '/otp-generator',
      name: 'otp-landing',
      component: () => import('./pages/landing/otp-generator.landing.vue'),
    },
    {
      path: '/uuid-generator-landing',
      name: 'uuid-landing',
      component: () => import('./pages/landing/uuid-generator.landing.vue'),
    },
    {
      path: '/regex-tester-landing',
      name: 'regex-landing',
      component: () => import('./pages/landing/regex-tester.landing.vue'),
    },
    {
      path: '/base64-converter',
      name: 'base64-landing',
      component: () => import('./pages/landing/base64-converter.landing.vue'),
    },
    {
      path: '/json-formatter',
      name: 'json-landing',
      component: () => import('./pages/landing/json-formatter.landing.vue'),
    },
    ...toolsRoutes,
    ...toolsRedirectRoutes,
    ...(config.app.env === 'development' ? demoRoutes : []),
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
