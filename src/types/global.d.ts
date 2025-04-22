export {};

declare global {
  interface CustomEthereumProvider {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
    on: (eventName: 'accountsChanged', callback: (accounts: string[]) => void) => void;
    removeListener: (eventName: 'accountsChanged', callback: (accounts: string[]) => void) => void;
  }

  interface Window {
    ethereum?: CustomEthereumProvider;
  }
}
