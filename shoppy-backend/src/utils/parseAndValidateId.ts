export function parseAndValidateId(userId: string): number {
  const parsedId = parseInt(userId, 10);
  if (isNaN(parsedId)) {
    throw new Error('Invalid userID');
  }
  return parsedId;
}