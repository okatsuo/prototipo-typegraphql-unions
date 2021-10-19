import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class RequestError {
  @Field(() => Int)
  statusCode: number

  @Field()
  message: string
  
  @Field(() => String)
  reason: string | undefined
}