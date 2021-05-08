import { RouterContext, Status } from '../deps.ts';
import { todoModel } from '../models/mod.ts';

export async function getAll(ctx: RouterContext) {
  const todos = await todoModel.getAll();
  ctx.response.status = Status.OK;
  ctx.response.body = {
    data: todos,
  };
}
