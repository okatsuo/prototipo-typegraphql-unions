import { createUnionType } from 'type-graphql';
import { RequestError } from '../models/request-error';
import { User } from '../models/user';

export const UserUnion = createUnionType({
  name: 'UserRequest',
  types: () => [User, RequestError] as const,
  resolveType: (value) => {
    if ('id' in value) {
      return User
    }
    if ('statusCode' in value) {
      return RequestError
    }
    return undefined
  }
})