import type { AppProps } from 'next/app';
import '../styles/menu.css';
import { appWithTranslation } from 'next-i18next';
import { LanguageProvider } from '../context/LanguageContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default appWithTranslation(MyApp);
