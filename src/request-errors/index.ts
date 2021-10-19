import { RequestError } from '../models/request-error'

export const UnauthorizedError = (reason?: string | undefined): RequestError => {
  return {
    statusCode: 401,
    message: 'access forbiden',
    reason: reason ? reason : 'you are not authorized'
  }
}

export const NotFoundError = (reason?: string | undefined): RequestError => {
  return {
    statusCode: 404,
    message: 'resource not found',
    reason: reason ? reason : 'the resource was not found'
  }
}

export const DisabledError = (reason?: string | undefined): RequestError => {
  return {
    statusCode: 403,
    message: 'disabled',
    reason: reason ? reason : 'the resource is disabled'
  }
}

export const NoContentError = (reason?: string | undefined): RequestError => {

  return {
    statusCode: 204,
    message: 'no content',
    reason: reason ? reason : 'the resource have no data'
  }
}