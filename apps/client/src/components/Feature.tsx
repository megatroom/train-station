import { Avatar, AvatarProps, Box, Card, Flex, Text } from '@radix-ui/themes';
import { ReactNode } from 'react';

export interface FeatureProps {
  id: number;
  color: AvatarProps['color'];
  title: string;
  children: ReactNode;
}

export function Feature({ id, color, title, children }: FeatureProps) {
  return (
    <Card size="3">
      <Flex gap="4" align="center">
        <Avatar size="5" radius="full" fallback={`${id}`} color={color} />
        <Box>
          <Text as="div" size="4" weight="bold">
            {title}
          </Text>
          <Box pt="2">{children}</Box>
        </Box>
      </Flex>
    </Card>
  );
}
