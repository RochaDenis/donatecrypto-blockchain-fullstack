import StyledComponentsRegistry from '../lib/registry';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from '../styles/globalStyle';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DonateCrypto',
  description: 'Ajude campanhas via criptomoedas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          <Toaster position="top-center" />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
