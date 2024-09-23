import {
  CreditCardIcon,
  InboxIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'
import { userInfo } from './core/Library'

export default async function MyInfo() {
  const state = await userInfo()
  return (
    <div className="bg-azure-800 overflow-y-auto px-3 py-4 text-white md:rounded-md">
      <ul className="space-y-2">
        <li className="mb-6">
          <span className="ml-1 font-bold">Overview</span>
        </li>
        <li>
          <div className="flex">
            <CreditCardIcon className="w-5" />
            <span className="ml-3 mr-1 whitespace-nowrap bg-gradient-to-r from-[#ae67fa] to-[#f49867] bg-clip-text font-bold text-transparent">
              GlobalCard
            </span>
            <span>status: </span>
            <span className="ml-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-xs font-medium text-gray-800 shadow-md dark:bg-gray-700 dark:text-gray-300">
              APPROVED
            </span>
          </div>
        </li>
        <li>
          <div className="flex">
            <InboxIcon className="w-5" />
            <span className="ml-3 flex-1 whitespace-nowrap">
              Account Messages
            </span>
            <span className="bg-azure-600 ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium shadow-md">
              0
            </span>
          </div>
        </li>
        <li>
          <div className="flex">
            <HomeModernIcon className="w-5" />
            <span className="ml-3 flex-1 whitespace-nowrap">My Address</span>
          </div>
          <div className="ml-8 mt-1 text-sm">
            {state.defaultAddress?.address1}
          </div>
          <div className="ml-8 text-sm">{state.defaultAddress?.address2}</div>
          <div className="ml-8 text-sm">
            {state.defaultAddress?.city +
              ', ' +
              state.defaultAddress?.state.substring(0, 2) +
              ' ' +
              state.defaultAddress?.zip}
          </div>
        </li>
      </ul>
    </div>
  )
}
