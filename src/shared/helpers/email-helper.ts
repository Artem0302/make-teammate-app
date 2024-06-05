export function getOtherEmail(
  emailArray: string[],
  email: string,
): string | null {
  return emailArray[0] === email
    ? emailArray[1]
    : emailArray[1] === email
    ? emailArray[0]
    : null;
}
