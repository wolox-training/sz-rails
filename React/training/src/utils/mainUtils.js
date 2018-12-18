export function getToken(tokenSelected) {
  const token = localStorage.getItem(tokenSelected);
  return token;
}
