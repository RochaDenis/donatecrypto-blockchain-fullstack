'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

export default function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      const provider = window.ethereum as CustomEthereumProvider | undefined;

      if (!provider) {
        alert('MetaMask não encontrada!');
        return;
      }

      const accounts = (await provider.request({
        method: 'eth_requestAccounts',
      })) as string[];

      setAccount(accounts[0]);
    } catch (error) {
      console.error('Erro ao conectar carteira:', error);
    }
  };

  return (
    <WalletButton onClick={connectWallet}>
      {account ? `Conectado: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Conectar Carteira'}
    </WalletButton>
  );
}

const WalletButton = styled.button`
  background-color: var(--neon);
  color: #000;
  font-weight: bold;
  padding: 0.6rem 1.4rem;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 12px var(--neon);
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #ff9900;
  }
`;
