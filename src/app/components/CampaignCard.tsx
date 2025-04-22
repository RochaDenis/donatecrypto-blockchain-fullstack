'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface CampaignCardProps {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  balance: bigint;
  supporters: bigint;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  description,
  author,
  imageUrl,
  balance,
  supporters,
}) => {
  return (
    <Card>
      <Thumbnail>
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Thumbnail>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Footer>
        <span>
          Autor: {author.slice(0, 6)}...{author.slice(-4)}
        </span>
        <span>
          {(Number(balance) / 1e18).toFixed(4)} MATIC • {String(supporters)} apoiadores
        </span>
      </Footer>
    </Card>
  );
};

export default CampaignCard;

// 🔶 Styled Components
const Card = styled.div`
  background-color: #111;
  border: 1px solid rgba(255, 115, 0, 0.3);
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 0 10px rgba(255, 115, 0, 0.2);
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 115, 0, 0.5);
  }
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(255, 115, 0, 0.2);
`;

const Title = styled.h3`
  color: var(--neon);
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 14px;
`;

const Description = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  margin-top: 8px;
`;

const Footer = styled.div`
  margin-top: 12px;
  color: #aaa;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
