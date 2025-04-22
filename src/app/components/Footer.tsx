'use client';

import styled from 'styled-components';
import Link from 'next/link';

export default function Footer() {
  return (
    <FooterWrapper>
      <NeonBar />
      <Content>
        <Brand>DonateCrypto</Brand>

        <Links>
          <StyledLink href="/home">Início</StyledLink>
          <StyledLink href="#sobre">Sobre</StyledLink>
          <StyledLink href="#criar">Criar Campanha</StyledLink>
        </Links>

        <Copyright>
          © {new Date().getFullYear()} DonateCrypto. Todos os direitos reservados.
        </Copyright>
      </Content>
    </FooterWrapper>
  );
}

// 🔶 Styled Components

const FooterWrapper = styled.footer`
  background-color: #0a0a0a;
  padding: 3rem 2rem 2rem;
  color: var(--foreground);
`;

const NeonBar = styled.div`
  height: 3px;
  width: 100%;
  background: var(--neon);
  box-shadow: 0 0 10px var(--neon);
  margin-bottom: 2rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Brand = styled.h3`
  font-size: 1.75rem;
  color: var(--neon);
  margin-bottom: 1rem;
  text-shadow: 0 0 10px var(--neon);
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    color: var(--neon);
    text-shadow: 0 0 5px var(--neon);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #666;
`;
