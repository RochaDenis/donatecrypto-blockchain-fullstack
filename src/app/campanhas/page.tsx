'use client';

import { useEffect, useState } from 'react';
import { getContract } from '@/lib/contract';

import CreateCampaign from '../components/CreateCampaign';
import CampaignList from '../components/CampaignList';
import styled from 'styled-components';

export type Campaign = {
  author: string;
  title: string;
  description: string;
  videoUrl: string;
  imageUrl: string;
  balance: bigint;
  active: boolean;
  supporters: bigint;
};

export default function HomePage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        const contract = await getContract();
        const result = await contract.getLastFiveCampaigns();
        setCampaigns(result);
      } catch (error) {
        console.error('Erro ao carregar campanhas:', error);
      }
    };

    loadCampaigns();
  }, []);

  return (
    <>
   
      <MainContainer>
        <CreateCampaign />
        <NeonLine />
        <CampaignList campaigns={campaigns} />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 120px; /* Compensação para o header fixo */
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const NeonLine = styled.hr`
  border: none;
  height: 2px;
  background: var(--neon);
  box-shadow: 0 0 10px var(--neon);
`;
