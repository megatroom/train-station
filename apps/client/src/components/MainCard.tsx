import { Box, Button, Card, Inset, Text } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

type MainCardProps = {
  image: string;
  title: string;
  description: string;
  linkTo: string;
};

export function MainCard({ image, title, description, linkTo }: MainCardProps) {
  const navigate = useNavigate();

  return (
    <Card size="3">
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src={image}
          alt="Passenger"
          style={{
            display: 'block',
            objectFit: 'cover',
            width: '100%',
            height: 180,
            backgroundColor: 'var(--gray-5)',
          }}
        />
      </Inset>
      <Text as="div" size="4" weight="bold" mb="2">
        {title}
      </Text>
      <Text as="div" size="4" color="gray" mb="4">
        {description}
      </Text>
      <Box>
        <Button
          onClick={() => {
            navigate(linkTo);
          }}
        >
          Start
        </Button>
      </Box>
    </Card>
  );
}
