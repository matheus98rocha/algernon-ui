import { createParamDecorator, ExecutionContext } from "@nestjs/common";

function getCurrentUserByContext(context: ExecutionContext) {
  console.log(context)
  return context.switchToHttp().getRequest().user;
}

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context))