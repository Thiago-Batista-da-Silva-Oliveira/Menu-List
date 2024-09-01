import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu } from "./pages/Menu";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Menu />
    </QueryClientProvider>
  );
}

export default App;
