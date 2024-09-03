'use client'
import { useState, useEffect } from 'react'
import {
  CreditCardIcon,
  InboxIcon,
  HomeModernIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'
import { useSearchParams } from 'next/navigation'
import { useUserContext } from '@@/context'
import { NumericFormat } from 'react-number-format'
import PayBills from '@@/paybills'
import { format } from 'date-fns'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Banking() {
  // const searchParams = useSearchParams()
  // const problem = searchParams.get('problem')
  const { state, dispatch } = useUserContext()
  const [currentPanel, setCurrentPanel] = useState('recent')
  const [transactions, setTransactions] = useState()
  const [accounts, setAccounts] = useState()
  useEffect(() => {
    if (!state.id) {
      return
    }
    const fetchAccounts = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_MAINAPI + '/api/users/' + state.id,
        {
          method: 'GET',
        },
      )
      const data = await response.json()
      setAccounts(data.accounts)
    }
    fetchAccounts().catch(console.error)
  }, [state.id])
  useEffect(() => {
    if (!state.user) {
      return
    }
    const fetchTransactions = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_MAINAPI + '/api/mytransactions/' + state.user,
        {
          method: 'GET',
        },
      )
      const data = await response.json()
      setTransactions(data)
    }
    fetchTransactions().catch(console.error)
  }, [state.user])

  async function refreshData() {}

  // console.log('accounts', accounts)
  return (
    <>
      <div className="flex min-h-screen w-screen flex-col items-center">
        <div className="w-full max-w-7xl flex-1 px-2 sm:px-6 md:flex lg:px-8">
          {/* SideBar */}
          <aside
            className="sticky py-1 md:w-1/3 md:py-4 md:pl-4"
            aria-label="Sidebar"
          >
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
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      My Address
                    </span>
                  </div>
                  <div className="ml-8 mt-1 text-sm">
                    {state.defaultAddress?.address1}
                  </div>
                  <div className="ml-8 text-sm">
                    {state.defaultAddress?.address2}
                  </div>
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
            <div className="bg-azure-800 mt-1 overflow-y-auto px-3 py-1 text-white md:mt-4 md:rounded-md md:py-4">
              <ul className="md:space-y-1">
                <li className="md:mb-2">
                  <span className="font-bold md:ml-1">Quick Actions</span>
                </li>
                <li>
                  <div className="flex space-x-4">
                    <div
                      className="flex w-full cursor-pointer justify-center rounded-md bg-orange-400 px-3 py-2 font-bold hover:bg-orange-500"
                      onClick={() => setCurrentPanel('transfer')}
                    >
                      <CurrencyDollarIcon className="mr-1 w-5" />
                      Transfer & Pay
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          {/* activity panel */}
          {currentPanel == 'recent' && (
            <div className="mx-auto w-full border bg-white md:m-4 md:ml-5 md:rounded-md md:p-5">
              <div className="w-full rounded-lg bg-white p-1 md:p-2">
                <div className="relative mt-2 overflow-x-auto sm:rounded-lg">
                  <span className="p-1 text-lg font-bold">
                    My Account Balances
                  </span>
                  <table className="mb-4 w-full text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead className="bg-gray-200 text-xs uppercase text-gray-700">
                      <tr>
                        <th scope="col" className="p-2 pl-2">
                          Account
                        </th>
                        <th scope="col" className="p-2">
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {accounts?.map((account) => (
                        <tr key={account.name} className="border-b bg-gray-100">
                          <td className="whitespace-nowrap py-2 pl-2 font-medium text-gray-900">
                            {account.name}
                          </td>
                          <td className="whitespace-nowrap p-1 font-medium text-gray-900">
                            <NumericFormat
                              displayType="text"
                              prefix={'$'}
                              valueIsNumericString={true}
                              thousandSeparator=","
                              value={account.balance.toFixed(2)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <span className="text-lg font-bold">Recent Activity</span>
                  <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                    <thead className="bg-gray-200 text-xs uppercase text-gray-700">
                      <tr>
                        <th scope="col" className="p-2 pl-2">
                          Payee
                        </th>
                        <th scope="col" className="p-2 pl-2">
                          Account
                        </th>
                        <th scope="col" className="p-2">
                          Amount
                        </th>
                        <th scope="col" className="p-2">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions?.map((element) => (
                        <tr key={element.id} className="border-b bg-gray-100">
                          <td className="whitespace-nowrap py-2 pl-2 font-medium text-gray-900">
                            {element.vendor}
                          </td>
                          <td className="whitespace-nowrap py-2 pl-2 font-medium text-gray-900">
                            {element.accountName}
                          </td>
                          <td className="whitespace-nowrap p-1 font-medium text-gray-900">
                            <NumericFormat
                              displayType="text"
                              prefix={'$'}
                              valueIsNumericString={true}
                              thousandSeparator=","
                              value={element.amount.toFixed(2)}
                            />
                          </td>
                          <td className="whitespace-nowrap py-2 pl-2 font-medium text-gray-900">
                            {format(new Date(element.timestamp), 'M/d/yy H:m')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {/* transfer & pay */}
          {currentPanel == 'transfer' && (
            <>
              <PayBills
                setCurrentPanel={setCurrentPanel}
                refreshData={refreshData}
                accounts={accounts}
                user={state}
              />
            </>
          )}
        </div>
        {problem && (
          <div className="w-full max-w-7xl bg-green-500 p-1 text-center text-sm text-white">
            pssst! when asked, replace amount with -100 and submit. Thanks!
          </div>
        )}
      </div>
    </>
  )
}
