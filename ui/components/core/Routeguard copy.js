'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useUserContext } from '@@/core/Context'
import { useEffect } from 'react'

export default function RouteGuard({ children }) {
  const { state } = useUserContext()
  const router = useRouter()
  const pathname = usePathname()
  console.log(pathname)

  useEffect(() => {
    if (state.prerender) {
      return
    }
    const publicPaths = ['/', '/login', '/logout', '/store', '/insurance']

    if (!state.user && !publicPaths.includes(pathname)) {
      router.push('/login?returnUrl=' + pathname)
    }
  })
  if (state.prerender) {
    return
  }
  return children
}
