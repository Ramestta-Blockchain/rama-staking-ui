'use client'

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import { config } from '@/configs'
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";


type Props = {
  children: ReactNode,
  initialState: State, 
}

const queryClient = new QueryClient()

export function Providers({ children, initialState }: Props) {  
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider  client={queryClient}>
        <RainbowKitProvider modalSize="compact" >
          {children}
          </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}