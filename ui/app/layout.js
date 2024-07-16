import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import UserProvider from '@/components/contexts/context'

const inter = Inter({ subsets: ['latin'] })

function classNames(...classes) {
  console.log(...classes)
  return classes.filter(Boolean).join(' ')
}
export const metadata = {
  title: 'GlobalCorp',
  description: 'Everything you need, anytime',
}

export default function RootLayout({ children }) {
  return (
    <UserProvider>
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
    </UserProvider>
  )
}
