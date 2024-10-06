import { Container, Section } from '@radix-ui/themes';
import { ReactNode } from 'react';

import BackgroundImg from '../assets/background-purple.avif';
import { PageBackground } from '../components/PageBackground';

export interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <PageBackground backgroundImage={BackgroundImg}>
      <Container mx="4">
        <Section pt="8">{children}</Section>
      </Container>
    </PageBackground>
  );
}
