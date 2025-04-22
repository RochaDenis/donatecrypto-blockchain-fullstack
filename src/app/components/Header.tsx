'use client';

import Link from 'next/link';
import styled from 'styled-components';
import WalletConnect from './WalletConnect';

export default function Header() {
  return (
    <HeaderContainer>
      <Brand>
        <Link href="/home" passHref>
          <LogoLink>
            <Logo>DonateCrypto</Logo>
          </LogoLink>
        </Link>
        <Subtitle>Conectando doações, transformando vidas</Subtitle>
      </Brand>

      <Nav>
        <StyledLink href="/home">Home</StyledLink>
        <StyledLink href="/campanhas">Campanhas</StyledLink>
        <StyledLink href="/home#sobre">Sobre</StyledLink>
      </Nav>

      <WalletConnect />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: #000;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--neon);
  z-index: 1000;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

const LogoLink = styled.a`
  text-decoration: none;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: var(--neon);
  font-weight: bold;
  text-shadow: var(--glow);
`;

const Subtitle = styled.span`
  color: var(--foreground);
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: var(--foreground);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: var(--neon);
  }
`;
