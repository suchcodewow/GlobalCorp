'use client'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuItem,
  MenuItems,
  MenuButton,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useUserContext } from '@@/core/Context'
import Link from 'next/link'
import { logoutUser } from '@@/actions/auth-actions'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderClient({
  navigation,
  userNavigation,
  userCookie,
}) {
  console.log(navigation)
  const { dispatch } = useUserContext()
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    logoutUser()
  }
  const pathname = usePathname()
  return (
    <Disclosure as="nav" className="flex-none bg-sky-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    className="h-8 w-8"
                    src="/images/globalcorp.png"
                    alt="GlocalCorp"
                    width={500}
                    height={500}
                  />
                </div>
                <span className="ml-2 bg-gradient-to-r from-sky-200 via-cyan-200 to-lime-200 bg-clip-text text-2xl font-bold text-transparent">
                  GlobalCorp
                </span>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? 'bg-sky-950 text-white'
                            : 'text-gray-300 hover:bg-sky-800 hover:text-white',
                          'relative flex rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.new === 'on' ? (
                          <div className="border-1 absolute -right-1 -top-1 ml-1 inline-flex h-4 w-10 items-center justify-center rounded-full border-gray-200 bg-sky-600 text-xs text-white">
                            new!
                          </div>
                        ) : (
                          <div></div>
                        )}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  {userCookie ? (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm">
                          <span className="absolute -inset-1.5" />
                          <span className="relative flex rounded-full bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600">
                            {userCookie}
                          </span>
                        </MenuButton>
                      </div>

                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                      >
                        <MenuItem>
                          <a
                            href="/myaccount"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            My Account
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="/admin"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            Administration
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="/operations"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            Operations
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            onClick={handleLogout}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            logout
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  ) : (
                    <div className="relative ml-3">
                      <Link
                        className="relative flex rounded-full bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600"
                        href="/login"
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
