import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Trip } from './trip.model';

const stationIds = [1, 2, 3, 4, 5];
const stationTrips = stationIds.reduce((accumulator, originStationId) => {
  const result = [...accumulator];

  stationIds.forEach((destinationStationId) => {
    if (originStationId !== destinationStationId) {
      result.push({
        originStationId,
        destinationStationId,
        price: originStationId + destinationStationId,
      });
    }
  });

  return result;
}, []);

const findTrip = (originId: number, destinationId: number) => {
  return stationTrips.find(
    ({ originStationId, destinationStationId }) =>
      originStationId === originId && destinationStationId === destinationId,
  );
};

@Resolver(() => Trip)
export class TripsResolver {
  @Query(() => Trip)
  async trip(
    @Args('originId', { type: () => Int })
    originId: number,
    @Args('destinationId', { type: () => Int })
    destinationId: number,
  ) {
    return findTrip(originId, destinationId);
  }

  @Query(() => [Trip])
  async trips() {
    return stationTrips;
  }
}
