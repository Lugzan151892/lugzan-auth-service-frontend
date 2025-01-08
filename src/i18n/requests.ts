import { getRequestConfig } from 'next-intl/server';

function detectLocale(): string {
  if (typeof window === 'undefined') return 'en';
  const browserLocale = navigator.language || navigator.languages?.[0] || 'en';
  return browserLocale.split('-')[0];
}

export default getRequestConfig(async () => {
  const locale = detectLocale() || 'en';

  return {
    locale,
    messages: (await import(`../locales/${locale}/common.json`)).default,
  };
});
