import Link from 'next/link'
import { cookies } from 'next/headers'
import HeaderClient from '@@/core/HeaderClient'

export function Links() {
  const pathname = usePathname()
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Banking', href: '/banking', current: false },
  { name: 'Insurance', href: '/insurance', current: false, new: true },
  { name: 'Store', href: '/store', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Header() {
  const userCookie = cookies().get('scwuser')?.value
  return (
    <HeaderClient
      userCookie={userCookie}
      navigation={navigation}
      userNavigation={userNavigation}
    />
  )
}
