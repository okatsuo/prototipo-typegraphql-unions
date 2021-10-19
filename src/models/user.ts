import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number

  @Field()
  name: string
  
  @Field()
  role: string
  
  @Field()
  status: boolean
}