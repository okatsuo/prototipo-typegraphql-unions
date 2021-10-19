import { users } from '../data/user'
import { RequestError } from '../models/request-error'
import { User } from '../models/user'
import { DisabledError, NotFoundError } from '../request-errors'

export const getUserByName = async (user_name: string): Promise<User | RequestError> => {
  const user = users.find((user) => user.name === user_name)
  if (!user) return NotFoundError('user not found')
  if (!user.status) return DisabledError('the user is disabled')
  return user
}