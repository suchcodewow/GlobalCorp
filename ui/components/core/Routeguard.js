'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useUserContext } from '@@/core/Context'

export default function RouteGuard({ children }) {
  const { state } = useUserContext()
  const router = useRouter()

  const publicPaths = ['/', '/login', '/logout', '/store', '/insurance']
  const pathname = usePathname()
  console.log(pathname)
  // if (state.prerender) {
  //   return
  // }
  if (!state.user && !publicPaths.includes(pathname)) {
    router.push('/login?returnUrl=' + pathname)
  } else {
    return children
  }
}
