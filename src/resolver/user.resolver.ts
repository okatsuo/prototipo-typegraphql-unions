import { Arg, Authorized, Query, Resolver } from 'type-graphql';
import { getUserByName } from '../controller/user';
import { RequestError } from '../models/request-error';
import { User } from '../models/user';
import { UserUnion } from '../unions/User';

@Resolver()
export class UserResolver {

  @Authorized(['admin', 'potato'])
  @Query(() => [UserUnion])
  async getUser(
    @Arg('name') name: string
  ): Promise<Array<typeof UserUnion>> {
    const request_result = await getUserByName(name)
    return [request_result]
  }
}