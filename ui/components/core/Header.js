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

const enableCollecticare = process.env.enableCollecticare
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Banking', href: '/banking' },
  {
    name: 'Insurance',
    href: '/insurance',
    new: enableCollecticare,
  },
  { name: 'Store', href: '/store' },
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
