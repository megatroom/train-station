import { Box, Button, Card, Grid, Heading, Text } from '@radix-ui/themes';
import { PassengersLayout } from '../../layouts/PassengersLayout';
import { STATIONS } from '../../models';
import { Feature } from '../../components/Feature';
import { Link } from '../../components/Link';
import { useNavigate, useParams } from 'react-router-dom';

export default function CheckoutPage() {
  const { start, destination } = useParams();
  const navigate = useNavigate();

  const originState = STATIONS.find((s) => `${s.id}` === start);
  const destinationStation = STATIONS.find((s) => `${s.id}` === destination);

  if (!originState || !destinationStation) {
    return null;
  }

  const handlePayment = () => {
    navigate('/passengers/trips/success');
  };

  return (
    <PassengersLayout>
      <Heading mb="6">Trip</Heading>
      <Grid columns={{ initial: '1', md: '2' }} gap="4" width="auto" mb="8">
        <Feature {...originState}>
          <Link to="/passengers">Change origin</Link>
        </Feature>
        <Feature {...destinationStation}>
          <Link to={`/passengers/trips/${originState.id}`}>
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
            $ 12,12
          </Text>
        </Box>
        <Box>
          <Button onClick={handlePayment}>Make the payment</Button>
        </Box>
      </Card>
    </PassengersLayout>
  );
}
