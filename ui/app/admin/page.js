import { FullPage } from '@@/core/Layouts'
import { allOrders, allQuotes, allTransactions } from '@@/core/Library'

export default async function MyAccount() {
  const orders = await allOrders()
  // id: 1,
  // name: 'IcyGiraffe',
  // cartTotal: '56.50',
  // totalItems: 1,
  // status: 'new'
  const payments = await allTransactions()
  // accountName: 'Checking',
  // amount: -100,
  // id: '66f2e10a018d800908eb3d1b',
  // timestamp: 'Tue, 24 Sep 2024 15:55:54 GMT',
  // userId: 'Cold Honey',
  // vendor: 'Test Company'
  const quotes = await allQuotes()
  // id: '671fa72822d563f37bfa5bef',
  // name: 'HollowCellar',
  // birthdate: '10/22/1968',
  // email: 'HollowCellar@mail.com',
  // homesize: '5457',
  // caryear: '2019',
  // carmodel: 'Metris Cargo',
  // status: 'new'

  return (
    <FullPage>
      <div className="my-4 rounded-xl border-2">
        <form>
          <div className="space-y-2">
            <div className="p-2">
              <div>
                <div className="grid grid-cols-4 gap-x-6 gap-y-2">
                  <div>
                    <label
                      htmlFor="MainAPI"
                      className="block text-sm font-medium text-gray-900"
                    >
                      MainAPI
                    </label>
                    <div>
                      <div className="flex sm:max-w-md">
                        <input
                          id="MainAPI"
                          name="MainAPI"
                          type="text"
                          readOnly
                          defaultValue={process.env.NEXT_PUBLIC_MAINAPI}
                          autoComplete="MainAPI"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="CATALOGAPI"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      CatalogAPI
                    </label>
                    <div>
                      <div className="flex sm:max-w-md">
                        <input
                          id="CATALOGAPI"
                          name="CATALOGAPI"
                          type="text"
                          readOnly
                          defaultValue={process.env.NEXT_PUBLIC_CATALOGAPI}
                          autoComplete="CATALOGAPI"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="ORDERSAPI"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      OrdersAPI
                    </label>
                    <div>
                      <div className="flex sm:max-w-md">
                        <input
                          id="ORDERSAPI"
                          name="ORDERSAPI"
                          type="text"
                          readOnly
                          defaultValue={process.env.NEXT_PUBLIC_ORDERSAPI}
                          autoComplete="ORDERSAPI"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="QUOTESAPI"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      QuotesAPI
                    </label>
                    <div>
                      <div className="flex sm:max-w-md">
                        <input
                          id="QUOTESAPI"
                          name="QUOTESAPI"
                          type="text"
                          readOnly
                          defaultValue={process.env.NEXT_PUBLIC_QUOTESAPI}
                          autoComplete="QUOTESAPI"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-6 flex items-center justify-end gap-x-6 p-4">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div> */}
          </div>
        </form>
      </div>
      {/* Columns */}
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
        {/* My Quotes */}
        <div className="rounded-xl border-2">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="py-2 text-center text-base font-semibold leading-6">
                Quotes in Progress
              </h1>
            </div>
          </div>
          <div className="flow-root">
            <div className="overflow-hidden">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Quote #
                      </th>

                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Car Model
                      </th>
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        House Size
                      </th>
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 rounded-xl">
                    {quotes.data.map((quote) => (
                      <tr key={quote.id}>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {quote.id.substr(quote.id.length - 8)}
                        </td>

                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {quote.carmodel}
                        </td>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {quote.homesize}
                        </td>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {quote.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* My Orders */}
        <div className="rounded-xl border-2">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="py-2 text-center text-base font-semibold leading-6">
                Orders in Progress
              </h1>
            </div>
          </div>
          <div className="flow-root">
            <div className="overflow-hidden">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Order #
                      </th>

                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {order.id}
                        </td>

                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          ${order.cartTotal}
                        </td>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {order.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Payments */}
        <div className="rounded-xl border-2">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="py-2 text-center text-base font-semibold leading-6">
                Recent Payments
              </h1>
            </div>
          </div>
          <div className="flow-root">
            <div className="overflow-hidden">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Account
                      </th>

                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Payee
                      </th>
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {payments.map((payment) => (
                      <tr key={payment.id}>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {payment.accountName}
                        </td>

                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {payment.vendor}
                        </td>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          ${Math.abs(payment.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullPage>
  )
}
