import { Context, isHttpError, Status } from '../deps.ts';

//TODO: Why? error: type next: () => Promise<void>
// Answer: the type of use method was changed
export async function errorHandler(ctx: Context, next: () => Promise<unknown>) {
  try {
    await next();
  } catch (error) {
    if (!isHttpError(error)) {
      ctx.response.status = Status.InternalServerError;
      ctx.response.body = {
        error: {
          message: error.message,
          stack: error.stack,
        },
      };
    }
    return;
  }
}
