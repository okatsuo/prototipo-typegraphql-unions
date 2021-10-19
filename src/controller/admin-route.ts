import { users } from '../data/user'
import { RequestError } from '../models/request-error'
import { UnauthorizedError } from '../request-errors'

export const accessAdminRoute = (user_trying_to_access: string): boolean | RequestError => {
  const user = users.find((user) => user.name === user_trying_to_access)
  if (!user || user.role !== 'admin') return UnauthorizedError('you do not have permission to access this route')
  return true
}