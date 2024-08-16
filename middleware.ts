import { NextRequest } from "next/server";
import { unauthenticatedRoutes } from "./app/common/constants/routes";
import authenticated from "./app/(auth)/services/authenticated";

export function middleware(request: NextRequest) {
  const isAuthenticated = authenticated();
  const isUnauthenticatedRoute = unauthenticatedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route.path),
  );

  if (isAuthenticated && isUnauthenticatedRoute) {
    // Redireciona o usuário autenticado para a página inicial
    return Response.redirect(new URL("/", request.url));
  }

  if (!isAuthenticated && !isUnauthenticatedRoute) {
    // Redireciona o usuário não autenticado para a página de login
    return Response.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
