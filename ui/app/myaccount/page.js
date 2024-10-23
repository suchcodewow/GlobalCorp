import { FullPage } from '@@/core/Layouts'
import { myOrders, userTransactions } from '@@/core/Library'

export default async function MyAccount() {
  const people = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    // More people...
  ]
  const orders = await myOrders()
  const payments = await userTransactions()
  console.log(payments)
  return (
    <FullPage>
      {/* Columns */}
      <div className="grid grid-cols-3 gap-2 divide-x divide-solid divide-opacity-65 pt-5">
        {/* My Orders */}
        <div className="mx-2 lg:px-1">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-center text-base font-semibold leading-6 text-gray-900">
                My Orders
              </h1>
            </div>
          </div>
          <div className="flow-root">
            <div className="overflow-hidden">
              <div className="inline-block min-w-full align-middle sm:px-1 lg:px-2">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Order #
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {order.id}
                        </td>

                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                          ${order.cartTotal}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
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
        {/* My Quotes */}
        <div className="mx-2 lg:px-1">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-center text-base font-semibold leading-6 text-gray-900">
                My Orders
              </h1>
            </div>
          </div>
          <div className="flow-root">
            <div className="overflow-hidden">
              <div className="inline-block min-w-full align-middle sm:px-1 lg:px-2">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Order #
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {order.id}
                        </td>

                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                          ${order.cartTotal}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
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
        <div className="mx-2 lg:px-1">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-center text-base font-semibold leading-6 text-gray-900">
                My Payments
              </h1>
            </div>
          </div>
          <div className="flow-root">
            <div className="overflow-hidden">
              <div className="inline-block min-w-full align-middle sm:px-1 lg:px-2">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Account
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        Payee
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {payments.map((payment) => (
                      <tr key={payment.id}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {payment.accountName}
                        </td>

                        <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                          {payment.vendor}
                        </td>
                        <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
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
