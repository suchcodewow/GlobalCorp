import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@@/core/Footer'
import Header from '@@/core/Header'
import UserProvider from '@@/core/Context'
import RouteGuard from '@@/core/Routeguard'

const inter = Inter({ subsets: ['latin'] })

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const metadata = {
  title: 'GlobalCorp',
  description: 'Anything you need... anytime!',
}

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <RouteGuard>
        <html
          lang="en"
          className={classNames(
            inter.className,
            'h-full bg-white text-typography-950',
          )}
        >
          <body className="flex h-full flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </body>
        </html>
      </RouteGuard>
    </UserProvider>
  )
}
