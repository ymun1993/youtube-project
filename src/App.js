import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./component/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
