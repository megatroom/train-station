import { Container, Section } from '@radix-ui/themes';
import { ReactNode } from 'react';

import BackgroundImg from '../assets/background-dpurple.jpg';
import { PageBackground } from '../components/PageBackground';

export interface PassengersLayoutProps {
  children: ReactNode;
}

export function PassengersLayout({ children }: PassengersLayoutProps) {
  return (
    <PageBackground backgroundImage={BackgroundImg}>
      <Container mx="4">
        <Section pt="8">{children}</Section>
      </Container>
    </PageBackground>
  );
}
