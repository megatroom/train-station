import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';

export type Station = {
  id: number;
  title: string;
  color: string;
};

interface GetStationsData {
  stations: Station[];
}

export const GET_STATIONS: TypedDocumentNode<GetStationsData, undefined> = gql`
  query GetStations {
    stations {
      id
      title
      color
    }
  }
`;

interface GetStationData {
  station: Station;
}

interface GetStationVars {
  id: number;
}

export const GET_STATION: TypedDocumentNode<GetStationData, GetStationVars> =
  gql`
    query GetStation($id: Int!) {
      station(id: $id) {
        id
        title
        color
      }
    }
  `;
