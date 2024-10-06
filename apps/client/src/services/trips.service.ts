import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Station } from './stations.service';
import { gql } from '@apollo/client';

interface TripData {
  origin: Station;
  destination: Station;
  trip: {
    price: number;
  };
}

interface TripVars {
  originId: number;
  destinationId: number;
}

export const GET_TRIP: TypedDocumentNode<TripData, TripVars> = gql`
  query GetTrip($originId: Int!, $destinationId: Int!) {
    origin: station(id: $originId) {
      id
      title
      color
    }
    destination: station(id: $destinationId) {
      id
      title
      color
    }
    trip(originId: $originId, destinationId: $destinationId) {
      price
    }
  }
`;
