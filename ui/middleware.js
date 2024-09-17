import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// 1. Specify public routes
const publicPaths = ['/', '/login', '/logout', '/store', '/insurance']

export default async function middleware(req) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isPublicRoute = publicPaths.includes(path)

  // 3. Check for a user cookie NOMNOMNOM
  const userCookie = cookies().get('scwuser')?.value
  console.log(userCookie)

  // 4. Redirect to /login if the user is not authenticated
  if (!isPublicRoute && !userCookie) {
    const response = NextResponse.next()
    console.log(`path is ${path}`)
    req.cookies.set('returnUrl', 'your mom')
    return NextResponse.redirect(
      new URL(`/login?returnUrl=${path}`, req.nextUrl),
    )
  }
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
