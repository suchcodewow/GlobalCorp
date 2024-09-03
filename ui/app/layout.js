import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@@/footer'
import Header from '@@/header'
import UserProvider from '@@/context'
import RouteGuard from '@@/routeguard'

const inter = Inter({ subsets: ['latin'] })

function classNames(...classes) {
  console.log(...classes)
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
            'h-dvh bg-white text-typography-950',
          )}
        >
          <body className="flex h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </body>
        </html>
      </RouteGuard>
    </UserProvider>
  )
}
