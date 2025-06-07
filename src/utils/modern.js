export function fancyHello(user) {
  return `Hello, ${user?.name ?? "Guest"}!`;
}
