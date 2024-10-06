import { Box, Grid, Heading } from '@radix-ui/themes';
import { Feature } from '../../components/Feature';
import { useParams } from 'react-router-dom';
import { Link } from '../../components/Link';
import { PassengersLayout } from '../../layouts/PassengersLayout';
import { useQuery } from '@apollo/client';
import { GET_STATIONS } from '../../services/stations.service';

export default function TripsPage() {
  const { start } = useParams();
  const { loading, error, data } = useQuery(GET_STATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const originStation = data?.stations.find((s) => `${s.id}` === start);

  if (!originStation) {
    return null;
  }

  const destinations =
    data?.stations.filter((s) => s.id !== originStation.id) || [];

  return (
    <PassengersLayout>
      <Heading mb="6">Origin</Heading>
      <Box mb="8">
        <Feature {...originStation}>
          <Link to="/passengers">Change origin</Link>
        </Feature>
      </Box>
      <Heading mb="6">Choose your destination</Heading>
      <Grid columns={{ initial: '1' }} gap="4" width="auto">
        {destinations.map((station) => (
          <Feature key={`station-${station.id}`} {...station}>
            <Link to={`/passengers/trips/${start}/${station.id}`}>
              End trip
            </Link>
          </Feature>
        ))}
      </Grid>
    </PassengersLayout>
  );
}
