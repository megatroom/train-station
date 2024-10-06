import { Box, Button, Card, Grid, Heading, Text } from '@radix-ui/themes';
import { useQuery } from '@apollo/client';

import { PassengersLayout } from '../../layouts/PassengersLayout';
import { Feature } from '../../components/Feature';
import { Link } from '../../components/Link';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_TRIP } from '../../services/trips.service';

export default function CheckoutPage() {
  const { start, destination } = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_TRIP, {
    variables: {
      originId: parseInt(start!, 10),
      destinationId: parseInt(destination!, 10),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const originStation = data!.origin;
  const destinationStation = data!.destination;
  const { price } = data!.trip;

  const handlePayment = () => {
    navigate('/passengers/trips/success');
  };

  return (
    <PassengersLayout>
      <Heading mb="6">Trip</Heading>
      <Grid columns={{ initial: '1', md: '2' }} gap="4" width="auto" mb="8">
        <Feature {...originStation}>
          <Link to="/passengers">Change origin</Link>
        </Feature>
        <Feature {...destinationStation}>
          <Link to={`/passengers/trips/${originStation.id}`}>
            Change destination
          </Link>
        </Feature>
      </Grid>
      <Heading mb="6">Checkout</Heading>
      <Card size="3">
        <Box mb="6">
          <Text as="div" size="4" mb="2">
            Price
          </Text>
          <Text as="div" size="8" weight="bold">
            {`$ ${price}`}
          </Text>
        </Box>
        <Box>
          <Button onClick={handlePayment}>Make the payment</Button>
        </Box>
      </Card>
    </PassengersLayout>
  );
}
