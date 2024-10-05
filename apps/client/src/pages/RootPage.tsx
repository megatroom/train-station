import { Container, Grid, Heading, Section } from '@radix-ui/themes';

import PassengerImg from '../assets/passenger.avif';
import StationImg from '../assets/station.avif';
import { MainCard } from '../components/MainCard';

export default function RootPage() {
  return (
    <Container>
      <Section pt="8">
        <Heading align="center" mb="8" size="9">
          Who you are?
        </Heading>
        <Grid columns={{ initial: '1', md: '2' }} gap="4" width="auto">
          <MainCard
            image={PassengerImg}
            title="Passenger"
            description="Platform for passengers to make their trips."
            linkTo="passengers"
          />
          <MainCard
            image={StationImg}
            title="Admin"
            description="Platform for station administrators."
            linkTo="admin"
          />
        </Grid>
      </Section>
    </Container>
  );
}
