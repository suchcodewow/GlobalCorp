import { FullPage } from '@@/core/Layouts'
import Myinfo from '@@/Myinfo'
import { cookies } from 'next/headers'
import Myactions from '@@/Myactions'
import Myrecents from '@@/Myrecent'

export default async function Banking() {
  const userCookie = cookies().get('scwuser')?.value
  const userId = cookies().get('scwid')?.value
  const problem = false

  // user data
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = fetch(
    process.env.NEXT_PUBLIC_MAINAPI + '/api/users/login/' + userCookie,
    options,
  )
  const userResponse = response.json()

  console.log(userResponse)
  const fetchAccounts = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_MAINAPI + '/api/users/' + state.id,
      {
        method: 'GET',
      },
    )
    const data = await response.json()
    return data.accounts
  }
  // fetchAccounts().catch(console.error)

  const fetchTransactions = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_MAINAPI + '/api/mytransactions/' + state.user,
      {
        method: 'GET',
      },
    )
    const data = await response.json()
    return data
  }
  // fetchTransactions().catch(console.error)

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
              <Myinfo state={fetchUser} />
              {/* <Myactions setCurrentPanel={setCurrentPanel} /> */}
            </aside>
            {/* activity panel */}
            {/* {currentPanel == 'recent' && (
              <Myrecents transactions={transactions} accounts={accounts} />
            )} */}
            {/* transfer & pay */}
            {/* {currentPanel == 'transfer' && (
              <>
                <PayBills
                  setCurrentPanel={setCurrentPanel}
                  refreshData={refreshData}
                  accounts={accounts}
                  user={state}
                />
              </>
            )} */}
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
