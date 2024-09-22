import { FullPage } from '@@/core/Layouts'
import Myinfo from '@@/Myinfo'
import { cookies } from 'next/headers'
import Myactions from '@@/Myactions'
import Myrecents from '@@/Myrecent'

export default async function Banking() {
  const userCookie = cookies().get('scwuser')?.value
  const userId = cookies().get('scwid')?.value
  const problem = false
  const currentPanel = 'recent'

  // const fetchAccounts = async () => {
  //   const response = await fetch(
  //     process.env.NEXT_PUBLIC_MAINAPI + '/api/users/' + state.id,
  //     {
  //       method: 'GET',
  //     },
  //   )
  //   const data = await response.json()
  //   return data.accounts
  // }

  // const fetchTransactions = async () => {
  //   const response = await fetch(
  //     process.env.NEXT_PUBLIC_MAINAPI + '/api/mytransactions/' + state.user,
  //     {
  //       method: 'GET',
  //     },
  //   )
  //   const data = await response.json()
  //   return data
  // }

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
              <Myinfo userCookie={userCookie} />
              {/* <Myactions userCookie={userCookie} userId={userId} /> */}
            </aside>
            {/* activity panel */}
            {currentPanel == 'recent' && (
              <Myrecents userCookie={userCookie} userId={userId} />
            )}
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
