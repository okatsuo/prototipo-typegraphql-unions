import { Arg, Query, Resolver } from 'type-graphql';
import { getUserByName } from '../controller/user';
import { RequestError } from '../models/request-error';
import { User } from '../models/user';

@Resolver()
export class UserResolver {
  @Query(() => User)
  async getUser(
    @Arg('name') name: string
  ): Promise<User | RequestError> {
    return await getUserByName(name)
  }
}