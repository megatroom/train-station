import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Station } from './station.model';

const stationsStub = [
  { id: 1, color: 'indigo', title: 'Station 1' },
  { id: 2, color: 'cyan', title: 'Station 2' },
  { id: 3, color: 'orange', title: 'Station 3' },
  { id: 4, color: 'crimson', title: 'Station 4' },
  { id: 5, color: 'purple', title: 'Station 5' },
];

@Resolver(() => Station)
export class StationsResolver {
  @Query(() => [Station])
  async stations() {
    return stationsStub;
  }

  @Query(() => Station)
  async station(
    @Args('id', { type: () => Int })
    id: number,
  ) {
    return stationsStub.find((s) => s.id === id);
  }
}
