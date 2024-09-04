'use client'
import { useState, useEffect } from 'react'
import {
  CreditCardIcon,
  InboxIcon,
  HomeModernIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'
import { useSearchParams } from 'next/navigation'
import { useUserContext } from '@@/core/Context'
import { NumericFormat } from 'react-number-format'
import PayBills from '@@/Paybills'
import { format } from 'date-fns'
import { LimitedPage } from '@@/core/Layouts'
import Myinfo from '@@/Myinfo'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Banking() {
  const problem = false
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
      <LimitedPage>
        <div className="flex min-h-screen w-screen flex-col items-center">
          <div className="w-full max-w-7xl flex-1 bg-slate-100 px-2 sm:px-6 md:flex lg:px-8">
            {/* SideBar */}
            <aside
              className="sticky bg-slate-800 py-1 md:w-1/3 md:py-4 md:pl-4"
              aria-label="Sidebar"
            >
              <Myinfo state={state} />
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
                          <tr
                            key={account.name}
                            className="border-b bg-gray-100"
                          >
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
                              {format(
                                new Date(element.timestamp),
                                'M/d/yy H:m',
                              )}
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
      </LimitedPage>
    </>
  )
}
