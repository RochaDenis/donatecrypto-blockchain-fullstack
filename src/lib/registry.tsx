'use client';


import { StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Aqui não usamos ServerStyleSheet para não complicar o setup com Turbopack.
  // Apenas retornamos o StyleSheetManager sem custom sheet.
  return <StyleSheetManager>{children}</StyleSheetManager>;
}
