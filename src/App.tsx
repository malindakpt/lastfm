import { TopBar } from './components/presentational/TopBar/TopBar';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './services/apiSlice';
import { RoutesContainer } from './components/container/RoutesContainer/RoutesContainer';

const App = () => {
  return (
    <ApiProvider api={apiSlice}>
      <TopBar />
      <RoutesContainer />
    </ApiProvider>
  );
};

export default App;
