import { Context, green, cyan } from '../deps.ts';

// TODO: Why? error: type next: () => Promise<void>
// Answer: the type of use method was changed
export async function logger(ctx: Context, next: () => Promise<unknown>) {
  await next();
  console.log(`${green(ctx.request.method)} ${cyan(ctx.request.url.pathname)}`);
}
