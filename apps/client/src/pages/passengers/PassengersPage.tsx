import { Grid, Heading } from '@radix-ui/themes';

import { Feature } from '../../components/Feature';
import { Link } from '../../components/Link';
import { PassengersLayout } from '../../layouts/PassengersLayout';
import { STATIONS } from '../../models';

export default function PassengersPage() {
  return (
    <PassengersLayout>
      <Heading mb="8">Choose the origin station</Heading>
      <Grid columns={{ initial: '1' }} gap="4" width="auto">
        {STATIONS.map((station) => (
          <Feature key={`station-${station.id}`} {...station}>
            <Link to={`/passengers/trips/${station.id}`}>Start trip</Link>
          </Feature>
        ))}
      </Grid>
    </PassengersLayout>
  );
}
