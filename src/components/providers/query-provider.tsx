
import { FC, PropsWithChildren } from 'react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
