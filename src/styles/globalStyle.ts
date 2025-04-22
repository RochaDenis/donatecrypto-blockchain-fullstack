"use client";
import { createGlobalStyle } from "styled-components";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #0b0b0b;
    --foreground: #f4f4f4;
    --neon: #ff7f11;
    --glow: 0 0 10px rgba(255, 127, 17, 0.7);
  }

  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: ${orbitron.style.fontFamily}, sans-serif;
    scroll-behavior: smooth;
  }

  /* Botões com efeito neon */
  button {
    background-color: var(--neon);
    color: black;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    box-shadow: var(--glow);
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background-color: #ff9900;
  }

  /* Estilos para inputs e textareas */
  input, textarea {
    background-color: #1c1c1c;
    color: var(--foreground);
    border: 1px solid var(--neon);
    border-radius: 4px;
    padding: 8px;
    margin: 4px 0;
    width: 100%;
  }

  input::placeholder, 
  textarea::placeholder {
    color: #888;
  }

  /* Títulos com efeito neon */
  h1, h2, h3 {
    color: var(--neon);
    text-shadow: var(--glow);
  }
`;

export default GlobalStyle;
