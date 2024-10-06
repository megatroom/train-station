import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import { Station } from './stations.service';

interface GetAdminAnalyticsData {
  stations: Station[];
  trips: {
    originStationId: number;
    destinationStationId: number;
    price: number;
  }[];
}

export const GET_ADMIN_ANALYTICS: TypedDocumentNode<
  GetAdminAnalyticsData,
  undefined
> = gql`
  query GetAdminAnalytics {
    stations {
      id
      title
      color
    }
    trips {
      originStationId
      destinationStationId
      price
    }
  }
`;
