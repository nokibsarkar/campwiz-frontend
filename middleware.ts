import AuthorizationMiddleWare from "./middlewares/authorization";

const middleware = AuthorizationMiddleWare;
export const config = {
    matcher: [
        /*
        * Match all request paths except for the ones starting with:
        * - api (API routes)
        * - _next/static (static files)
        * - _next/image (image optimization files)
        * - favicon.ico, sitemap.xml, robots.txt (metadata files)
        */
        '/((?!user/(?:login|callback)|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}
/*
 The  Middlewares  array is an array of all the middlewares that you want to apply to your Next.js application. 
 The  AuthorizationMiddleWare  is a middleware that we will use to check if the user is authenticated before allowing them to access the protected routes. 
 Now, let’s create the  AuthorizationMiddleWare  in the  frontend/middlewares/authorization.ts  file:
 */
export default middleware;