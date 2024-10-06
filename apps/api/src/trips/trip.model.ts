import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Trip {
  @Field(() => Int)
  originStationId: number;

  @Field(() => Int)
  destinationStationId: number;

  @Field(() => Float)
  price: number;
}
