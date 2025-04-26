'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import WalletConnect from './WalletConnect';

export default function Header() {
  const pathname = usePathname();
  const sobreHref = pathname.startsWith('/home') ? '#sobre' : '/home#sobre';

  return (
    <Bar>
      <Brand href="/home">
        <strong>Donate</strong>Crypto
      </Brand>

      <Nav>
        <MenuLink href="/home">Home</MenuLink>
        <MenuLink href="/campanhas">Campanhas</MenuLink>
        <MenuLink href={sobreHref}>Sobre</MenuLink>

        {/* Botão de conectar carteira alinhado com os links */}
        <WalletWrapper>
          <WalletConnect />
        </WalletWrapper>
      </Nav>
    </Bar>
  );
}

/* ---------------- styled-components ---------------- */

const Bar = styled.header`
  width: 100%;
  background: #000;
  padding: 1rem 2rem;
  border-bottom: 2px solid var(--neon);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Brand = styled(Link)`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  color: var(--neon);
  text-shadow: 0 0 8px var(--neon);
  text-decoration: none;

  strong {
    font-weight: 900;
  }

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: var(--neon);
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const MenuLink = styled(Link)`
  color: var(--foreground);
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: var(--neon);
  }

  &:active {
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: var(--neon);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const WalletWrapper = styled.div`
  margin-left: 1rem;
`;
