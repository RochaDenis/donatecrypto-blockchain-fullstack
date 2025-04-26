'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount((accounts as string[])[0]);
        console.log('Carteira conectada:', accounts[0]);
      } catch (error) {
        console.error('Erro ao conectar a carteira:', error);
      }
    } else {
      alert('MetaMask não encontrada! Por favor, instale a extensão.');
    }
  };

  return (
    <Button onClick={connectWallet}>
      {account ? `Conectado: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Conectar Carteira'}
    </Button>
  );
}

const Button = styled.button`
  background-color: #ff7f11;
  color: black;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 10px #ff7f11;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #ffa733;
  }
`;
