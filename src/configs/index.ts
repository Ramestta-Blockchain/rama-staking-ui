import { 
    createConfig, 
    http, 
    cookieStorage,
    createStorage 
  } from 'wagmi'
  import { polygon,polygonMumbai } from 'wagmi/chains'
  
  export const config = createConfig({
    chains: [polygon, polygonMumbai],
    ssr: true,
    storage: createStorage({  
      storage: cookieStorage, 
    }),  
    transports: {
      [polygon.id]: http(),
      [polygonMumbai.id]: http(),
    },
  })

// import {
//   getDefaultConfig
// } from '@rainbow-me/rainbowkit';

// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
//   zora,
// } from 'wagmi/chains';

// export const config = getDefaultConfig({
//   appName: 'My RainbowKit App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains: [mainnet, polygon, optimism, arbitrum, base, zora],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });