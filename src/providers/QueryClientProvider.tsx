import {
  QueryClient,
  QueryClientProvider as DefaultQueryProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DefaultQueryProvider client={queryClient}>{children}</DefaultQueryProvider>
  );
};

export default QueryClientProvider;
