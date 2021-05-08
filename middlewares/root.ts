import { Status, RouterContext } from '../deps.ts';

export function getHome(ctx: RouterContext) {
  // throw new Error("Panic 🤯'");
  ctx.response.status = Status.OK;
  ctx.response.body = 'Todo list API with 🦕';
}
