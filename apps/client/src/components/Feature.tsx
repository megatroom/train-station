import {
  Avatar,
  AvatarProps,
  Box,
  Card,
  Flex,
  Skeleton,
  Text,
} from '@radix-ui/themes';
import { ReactNode } from 'react';

export interface FeatureProps {
  id: number;
  color: string;
  title: string;
  children: ReactNode;
}

export function Feature({ id, color, title, children }: FeatureProps) {
  return (
    <Card size="3">
      <Flex gap="4" align="center">
        <Avatar
          size="5"
          radius="full"
          fallback={`${id}`}
          color={color as AvatarProps['color']}
        />
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

export function FeatureSkeleton() {
  return (
    <Box>
      <Card size="3">
        <Flex gap="4" align="center">
          <Skeleton>
            <Avatar size="5" radius="full" fallback="L" />
          </Skeleton>
          <Box>
            <Text as="div" size="4" weight="bold">
              <Skeleton>Loading...</Skeleton>
            </Text>
            <Box pt="2">
              <Skeleton>Loading</Skeleton>
            </Box>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}
