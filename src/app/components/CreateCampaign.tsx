'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { getContract } from '@/lib/contract';
import toast from 'react-hot-toast';

export default function CreateCampaign() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !videoUrl || !imageUrl) {
      toast.error('Preencha todos os campos!');
      return;
    }

    try {
      setLoading(true);
      const contract = await getContract();
      const tx = await contract.addCampaign(title, description, videoUrl, imageUrl, {
        gasLimit: 3000000,
      });
      await tx.wait();
      toast.success('Campanha criada com sucesso!');
      setTitle('');
      setDescription('');
      setVideoUrl('');
      setImageUrl('');
    } catch (err) {
      console.error(err);
      toast.error('Erro ao criar campanha.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper id="criar">
      <FormBox onSubmit={handleCreate}>
        <h2>Criar Nova Campanha</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
        />
        <input
          type="text"
          placeholder="URL do Vídeo"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL da Imagem"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Criando...' : 'Criar Campanha'}
        </button>
      </FormBox>
    </FormWrapper>
  );
}

// 🔶 Styled Components

const FormWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
`;

const FormBox = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: #111;
  border: 2px solid var(--neon);
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px var(--neon), inset 0 0 8px rgba(255, 127, 17, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: var(--neon);
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    text-align: center;
    text-shadow: var(--glow);
  }

  input,
  textarea {
    background-color: #1c1c1c;
    color: var(--foreground);
    border: 1px solid var(--neon);
    border-radius: 6px;
    padding: 0.85rem;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  button {
    background-color: var(--neon);
    color: #000;
    font-weight: bold;
    padding: 0.85rem;
    border: none;
    border-radius: 6px;
    box-shadow: var(--glow);
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s ease;

    &:hover {
      background-color: #ff9900;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
