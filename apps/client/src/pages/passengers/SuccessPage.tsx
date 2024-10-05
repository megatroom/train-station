import { Card, Flex, Text } from '@radix-ui/themes';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Link } from '../../components/Link';

import StationBgImg from '../../assets/station-bg.avif';

export default function SuccessPage() {
  return (
    <div
      style={{
        backgroundImage: `url("${StationBgImg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card size="3">
        <Flex direction="column" align="center">
          <CheckCircledIcon width="64" height="64" />
          <Text as="div" size="4" weight="bold" mt="4" mb="4">
            Payment made successfully!
          </Text>
          <Link to="/">Go to home</Link>
        </Flex>
      </Card>
    </div>
  );
}
