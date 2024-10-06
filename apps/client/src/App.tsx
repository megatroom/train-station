import { Theme } from '@radix-ui/themes';

import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';

import '@radix-ui/themes/styles.css';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import { graphqlClient } from './services/clients/graphql.client';

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <Theme accentColor="yellow" appearance="dark">
        <RouterProvider router={router} />
      </Theme>
    </ApolloProvider>
  );
}

export default App;
