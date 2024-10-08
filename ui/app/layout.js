import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@@/core/Footer'
import Header from '@@/core/Header'
import UserProvider from '@@/core/Context'
import { Toaster } from 'react-hot-toast'

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
      <html
        lang="en"
        className={classNames(inter.className, 'text-typography-950')}
      >
        <body className="flex h-screen flex-col bg-white">
          <Toaster />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </UserProvider>
  )
}
