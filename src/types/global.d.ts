export {};

declare global {
  interface EthereumProvider {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: unknown[] }) => Promise<string[]>;
    on: (eventName: 'accountsChanged', callback: (accounts: string[]) => void) => void;
    removeListener: (eventName: 'accountsChanged', callback: (accounts: string[]) => void) => void;
  }

  interface Window {
    ethereum?: EthereumProvider;
  }
}
