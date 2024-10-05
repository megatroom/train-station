import { useEffect, useState } from 'react';
import { Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then(setGreeting);
  }, []);

  return (
    <Theme accentColor="yellow">
      <h1>{greeting}</h1>
    </Theme>
  );
}

export default App;
