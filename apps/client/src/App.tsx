import { Theme } from '@radix-ui/themes';

import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';

import '@radix-ui/themes/styles.css';
import './styles.css';

function App() {
  return (
    <Theme accentColor="yellow" appearance="dark">
      <RouterProvider router={router} />
    </Theme>
  );
}

export default App;
