'use client';

import styled from 'styled-components';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <SectionWrapper>
      <Hero>
        <HeroText>
          <h1>Transforme Cripto em Causa</h1>
          <p>
            Doe com segurança e transparência usando blockchain. Sua ajuda chega rápido
            e direto onde é mais necessário.
          </p>
          <Link href="#criar">
            <ActionButton>Comece Agora</ActionButton>
          </Link>
        </HeroText>
        <HeroVisual />
      </Hero>

      <HowItWorks>
        <h2>Como Funciona</h2>
        <Steps>
          <Step>
            <span>1</span>
            <p>Crie sua campanha</p>
          </Step>
          <Step>
            <span>2</span>
            <p>Compartilhe com o mundo</p>
          </Step>
          <Step>
            <span>3</span>
            <p>Receba doações via blockchain</p>
          </Step>
        </Steps>
      </HowItWorks>
    </SectionWrapper>
  );
}

// 🔶 Styled Components

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem 2rem;
  background-color: #0a0a0a;
  color: var(--foreground);
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const HeroText = styled.div`
  max-width: 600px;

  h1 {
    font-size: 2.5rem;
    color: var(--neon);
    text-shadow: 0 0 12px var(--neon);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    color: var(--foreground);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const ActionButton = styled.button`
  background-color: var(--neon);
  color: #000;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 10px var(--neon);
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #ff9900;
  }
`;

const HeroVisual = styled.div`
  width: 350px;
  height: 350px;
  border: 3px dashed var(--neon);
  border-radius: 12px;
  background-image: radial-gradient(rgba(255, 127, 17, 0.15), transparent 70%);
  animation: pulse 2s infinite ease-in-out;

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 20px var(--neon);
    }
    50% {
      box-shadow: 0 0 50px var(--neon);
    }
  }
`;

const HowItWorks = styled.div`
  text-align: center;

  h2 {
    font-size: 2rem;
    color: var(--neon);
    margin-bottom: 2rem;
    text-shadow: 0 0 8px var(--neon);
  }
`;

const Steps = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Step = styled.div`
  background: #1a1a1a;
  border: 1px solid var(--neon);
  padding: 2rem;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 0 10px var(--neon);

  span {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: var(--neon);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--foreground);
    font-size: 1rem;
  }
`;
