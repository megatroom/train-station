import { Container, Section } from '@radix-ui/themes';
import { ReactNode } from 'react';

export interface PassengersLayoutProps {
  children: ReactNode;
}

export function PassengersLayout({ children }: PassengersLayoutProps) {
  return (
    <Container>
      <Section pt="8">{children}</Section>
    </Container>
  );
}
