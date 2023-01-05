import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./component/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
