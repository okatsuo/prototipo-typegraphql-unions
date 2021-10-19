import { AuthChecker } from 'type-graphql';

export const customAuthChecker: AuthChecker<any> = (
  { context },
  roles,
): boolean => {
  const { authorization } = context.header
  if (!authorization) false
  if (roles.includes(authorization)) return true

  return false;
};