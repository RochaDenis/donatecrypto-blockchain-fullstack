'use client';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #0b0b0b;
  padding: 100px 20px 60px; // espaço para o header fixo
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
`;

export const NeonDivider = styled.hr`
  border: none;
  height: 1px;
  background: #ff7f11;
  box-shadow: 0 0 10px rgba(255, 127, 17, 0.7);
  margin: 60px 0;
`;
