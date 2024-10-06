import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Station {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  color?: string;
}
