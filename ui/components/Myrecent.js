import { format } from 'date-fns'
// import { NumericFormat } from 'react-number-format'

async function accounts(userId) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_MAINAPI + '/api/users/' + userId,
    {
      method: 'GET',
    },
  )
  const responseJson = await response.json()
  return responseJson.accounts
}

async function transactions(userCookie) {
  // user data
  const response = await fetch(
    process.env.NEXT_PUBLIC_MAINAPI + '/api/mytransactions/' + userCookie,
    {
      method: 'GET',
    },
  )
  const responseJson = await response.json()
  return responseJson
}

export default async function Myrecent({ userCookie, userId }) {
  console.log(`userid: ${userId}`)
  const accountData = await accounts(userId)
  console.log(accountData)
  const transactionsData = await transactions(userCookie)
  console.log(transactionsData)

  return (
    <div className="mx-auto w-full border bg-white md:m-4 md:ml-5 md:rounded-md md:p-5">
      <div className="w-full rounded-lg bg-white p-1 md:p-2">
        <div className="relative mt-2 overflow-x-auto sm:rounded-lg">
          <span className="p-1 text-lg font-bold">My Account Balances</span>
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
              {accountData?.map((account) => (
                <tr key={account.name} className="border-b bg-gray-100">
                  <td className="whitespace-nowrap py-2 pl-2 font-medium text-gray-900">
                    {account.name}
                  </td>
                  <td className="whitespace-nowrap p-1 font-medium text-gray-900">
                    {/* <NumericFormat
                      displayType="text"
                      prefix={'$'}
                      valueIsNumericString={true}
                      thousandSeparator=","
                      value={account.balance.toFixed(2)}

                    /> */}
                    ${account.balance.toFixed(2)}
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
              {transactionsData?.map((element) => (
                <tr key={element.id} className="border-b bg-gray-100">
                  <td className="whitespace-nowrap py-2 pl-2 font-medium text-gray-900">
                    {element.vendor}
                  </td>
                  <td className="whitespace-nowrap py-2 pl-2 font-medium text-gray-900">
                    {element.accountName}
                  </td>
                  <td className="whitespace-nowrap p-1 font-medium text-gray-900">
                    {/* <NumericFormat
                      displayType="text"
                      prefix={'$'}
                      valueIsNumericString={true}
                      thousandSeparator=","
                      value={element.amount.toFixed(2)}
                    /> */}
                    ${element.amount.toFixed(2)}
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
  )
}
