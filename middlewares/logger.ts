import { Context, green, cyan } from '../deps.ts';

// TODO: Why? error: type next: () => Promise<void>
export async function logger(ctx: Context, next: () => void) {
  await next();
  console.log(`${green(ctx.request.method)} ${cyan(ctx.request.url.pathname)}`);
}
