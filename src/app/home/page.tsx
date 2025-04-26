'use client';

import styled from 'styled-components';

import HomeSection from '../components/HomeSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
    
      <LandingWrapper>
        <HomeSection />

        <Divider />

        <AboutSection id="sobre">
          <h2>Sobre o DonateCrypto</h2>
          <p>
            A DonateCrypto é uma plataforma descentralizada para doações diretas via blockchain.
            Criada com transparência, velocidade e segurança como pilares principais, ela permite que
            qualquer pessoa crie campanhas e receba apoio global, sem intermediários.
          </p>
        </AboutSection>

        <StatsSection>
          <StatBox>
            <h3>+120</h3>
            <p>Campanhas criadas</p>
          </StatBox>
          <StatBox>
            <h3>+300 MATIC</h3>
            <p>Doações realizadas</p>
          </StatBox>
          <StatBox>
            <h3>100%</h3>
            <p>Transparência blockchain</p>
          </StatBox>
        </StatsSection>

        <LogoSection>
          <h2>Nosso símbolo</h2>
          <p>
            Um elo entre pessoas, tecnologia e solidariedade. A marca representa a conexão entre cripto e impacto social.
          </p>
          <LogoPlaceholder />
        </LogoSection>

        <Footer />
      </LandingWrapper>
    </>
  );
}

// 🔶 Styled Components

const LandingWrapper = styled.main`
  padding-top: 120px;
  background-color: #0a0a0a;
  color: var(--foreground);
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Divider = styled.hr`
  height: 2px;
  border: none;
  background: var(--neon);
  box-shadow: 0 0 10px var(--neon);
  margin-inline: 2rem;
`;

const AboutSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;

  h2 {
    font-size: 2rem;
    color: var(--neon);
    margin-bottom: 1rem;
    text-shadow: 0 0 10px var(--neon);
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
    line-height: 1.6;
  }
`;

const StatsSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 2rem;
`;

const StatBox = styled.div`
  background: #1c1c1c;
  border: 1px solid var(--neon);
  padding: 2rem;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  box-shadow: 0 0 12px var(--neon);

  h3 {
    font-size: 1.75rem;
    color: var(--neon);
  }

  p {
    color: #ccc;
    margin-top: 0.5rem;
  }
`;

const LogoSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;

  h2 {
    font-size: 2rem;
    color: var(--neon);
    margin-bottom: 1rem;
    text-shadow: 0 0 10px var(--neon);
  }

  p {
    color: #ccc;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const LogoPlaceholder = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(var(--neon), transparent);
  margin: 0 auto;
  border: 2px dashed var(--neon);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 10px var(--neon);
    }
    50% {
      box-shadow: 0 0 25px var(--neon);
    }
  }
`;
