'use client';

import styled from 'styled-components';
import CampaignCard from './CampaignCard';
import { Campaign } from '@/app/campanhas/page';

interface Props {
  campaigns: Campaign[];
}

export default function CampaignList({ campaigns }: Props) {
  if (!campaigns.length) {
    return <EmptyMsg>Nenhuma campanha encontrada.</EmptyMsg>;
  }

  return (
    <CampaignSection>
      <Title>Campanhas Recentes</Title>
      <Grid>
        {campaigns.map((campaign, i) => (
          <CampaignCard
            key={i}
            title={campaign.title}
            description={campaign.description}
            imageUrl={campaign.imageUrl}
            author={campaign.author}
            balance={campaign.balance}
            supporters={campaign.supporters}
          />
        ))}
      </Grid>
    </CampaignSection>
  );
}

const CampaignSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  text-align: center;
  color: var(--neon);
  text-shadow: 0 0 10px var(--neon);
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const EmptyMsg = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 1rem;
`;
