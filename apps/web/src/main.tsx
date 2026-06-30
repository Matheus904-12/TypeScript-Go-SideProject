import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient() // criação do cliente RQ

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    { /* envolvimento da apliqcação pelo provedor */ }
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)