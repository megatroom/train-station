import { ReactNode } from 'react';

import { Link as RxLink } from '@radix-ui/themes';
import { Link as RLink } from 'react-router-dom';

export interface LinkProps {
  children: ReactNode;
  to: string;
}

export function Link({ children, to }: LinkProps) {
  return (
    <RxLink asChild>
      <RLink to={to}>{children}</RLink>
    </RxLink>
  );
}
