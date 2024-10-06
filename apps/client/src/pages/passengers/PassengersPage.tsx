import { Grid, Heading } from '@radix-ui/themes';
import { useQuery } from '@apollo/client';

import { Feature, FeatureSkeleton } from '../../components/Feature';
import { Link } from '../../components/Link';
import { PassengersLayout } from '../../layouts/PassengersLayout';
import { GET_STATIONS } from '../../services/stations.service';
import { ErrorAlert } from '../../components/ErrorAlert';

export default function PassengersPage() {
  const { loading, error, data } = useQuery(GET_STATIONS);

  return (
    <PassengersLayout>
      <Heading mb="8">Choose the origin station</Heading>
      {error && <ErrorAlert message={error.message} server />}
      <Grid columns={{ initial: '1' }} gap="4" width="auto">
        {loading && (
          <>
            <FeatureSkeleton />
            <FeatureSkeleton />
            <FeatureSkeleton />
          </>
        )}
        {data?.stations.map((station) => (
          <Feature key={`station-${station.id}`} {...station}>
            <Link to={`/passengers/trips/${station.id}`}>Start trip</Link>
          </Feature>
        ))}
      </Grid>
    </PassengersLayout>
  );
}
