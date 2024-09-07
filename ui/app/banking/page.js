'use client'
import { useState, useEffect } from 'react'
import { useUserContext } from '@@/core/Context'
import PayBills from '@@/Paybills'
import { FullPage } from '@@/core/Layouts'
import Myinfo from '@@/Myinfo'
import Myactions from '@@/Myactions'
import Myrecents from '@@/Myrecent'

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

  return (
    <>
      <FullPage>
        <div className="flex min-h-screen w-screen flex-col items-center">
          <div className="w-full max-w-7xl flex-1 bg-slate-100 px-2 sm:px-6 md:flex lg:px-8">
            {/* SideBar */}
            <aside
              className="sticky bg-slate-800 py-1 md:w-1/3 md:py-4 md:pl-4"
              aria-label="Sidebar"
            >
              <Myinfo state={state} />
              <Myactions setCurrentPanel={setCurrentPanel} />
            </aside>
            {/* activity panel */}
            {currentPanel == 'recent' && (
              <Myrecents transactions={transactions} accounts={accounts} />
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
      </FullPage>
    </>
  )
}
