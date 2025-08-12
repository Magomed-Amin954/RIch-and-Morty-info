import ReactDOM from 'react-dom/client'
import { App } from '@/app/App'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { AppThemeProvider } from '@/app/providers/ThemeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </QueryClientProvider>
  </StoreProvider>
)
