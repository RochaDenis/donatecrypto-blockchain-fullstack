// src/app/layout.tsx
import type { Metadata } from 'next';
import StyledComponentsRegistry from './StyledComponentsRegistry';
import GlobalStyle from '@/styles/globalStyle';      // se usar createGlobalStyle
import Header from './components/Header';     // cabeçalho único

export const metadata: Metadata = {
  title: 'DonateCrypto',
  description: 'Conectando doações na blockchain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
