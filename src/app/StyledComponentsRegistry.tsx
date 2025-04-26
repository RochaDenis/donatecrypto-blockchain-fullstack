'use client';
import React, { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { useServerInsertedHTML } from 'next/navigation';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Cria um único sheet para a vida inteira da renderização
  const [sheet] = useState(() => new ServerStyleSheet());

  // Injeta as tags <style> logo após o HTML ser gerado no servidor
  useServerInsertedHTML(() => (
    <>
      {sheet.getStyleElement()}
    </>
  ));

  // No cliente: apenas renderiza normalmente
  if (typeof window !== 'undefined') return <>{children}</>;

  // No servidor: coleta os estilos
  return (
    <StyleSheetManager sheet={sheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
