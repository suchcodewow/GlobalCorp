import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { postTransaction, payees } from '@@/core/Library'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function PayBills({
  setCurrentPanel,
  refreshData,
  user,
  accounts,
}) {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const router = useRouter()
  const randomPayee = payees[Math.floor(Math.random() * payees.length)]
  //Form Validation Config & Imports
  const schema = yup
    .object()
    .shape({
      vendor: yup.string().required(),
      accountName: yup.string().required(),
      amount: yup
        .number()
        .test(
          'isvalid',
          'Valid Number',
          (value, context) => value > 0 || value == -100,
        ),
    })
    .required()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onBlur' })
  //Form Submit
  const onSubmit = async (data) => {
    data.userId = user.user
    data.id = user.id
    const postSuccess = await postTransaction(data)
    console.log('postback', postSuccess)
    refreshData()
    setCurrentPanel('recent')
    switch (postSuccess) {
      case 'transaction added':
        toast.success('Payment Successful')
        break
      case 'dbissuestart':
        toast.success('Payment Succes...*KABOOM*')
        break
      case 'dberror':
        toast.error('ERR-1091 Transaction Failed')
        break
    }
    router.refresh()
    // console.log(data);
  }

  return (
    <div className="mx-auto w-full bg-white p-5 md:m-4 md:ml-5 md:rounded-md">
      <div className="mb-4 text-xl font-bold">Pay a bill</div>
      <div className="flex w-full align-bottom">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full overflow-hidden sm:rounded-md">
            <div className="w-full bg-white px-4"></div>
            <div className="grid w-full grid-cols-6 gap-6 p-2">
              <div className="col-span-6">
                <label
                  htmlFor="vendor"
                  className="inline text-sm font-medium text-gray-700"
                >
                  Payee
                </label>
                {errors.vendor && (
                  <label className="text-bold bg-crimson-800 ml-2 rounded-md px-3 text-sm text-white">
                    payee needed
                  </label>
                )}
                <input
                  {...register('vendor')}
                  type="text"
                  name="vendor"
                  id="vendor"
                  autoComplete="vendor"
                  defaultValue={randomPayee}
                  className="focus:border-azure-500 focus:ring-azure-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="accountName"
                  className="inline text-sm font-medium text-gray-700"
                >
                  From Account
                </label>
                {errors.accountName && (
                  <label className="text-bold bg-crimson-800 ml-2 rounded-md px-3 text-sm text-white">
                    {errors.accountName.message}
                  </label>
                )}
                <select
                  {...register('accountName')}
                  type="text"
                  name="accountName"
                  id="accountName"
                  autoComplete="accountName"
                  className="focus:border-azure-500 focus:ring-azure-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                >
                  {accounts?.map((account) => (
                    <option key={account.name} value={account.name}>
                      {account.name == 'Dynacard'
                        ? 'Dynacard (+$22.00 cash advance fee)'
                        : account.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="amount"
                  className="text-sm font-medium text-gray-700"
                >
                  Payment Amount
                </label>
                {errors.amount && (
                  <label className="text-bold bg-crimson-800 ml-2 rounded-md px-3 text-sm text-white">
                    paymount amount required
                  </label>
                )}
                <input
                  {...register('amount')}
                  type="text"
                  name="amount"
                  id="amount"
                  autoComplete="amount"
                  defaultValue={randomNumber(50, 200)}
                  className="focus:border-azure-500 focus:ring-azure-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="bg-azure-600 hover:bg-azure-700 focus:ring-azure-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Send Payment
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="relative overflow-x-auto">
        <button
          className="bg-azure-600 hover:bg-azure-700 focus:ring-azure-500 mt-2 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          onClick={() => setCurrentPanel('recent')}
        >
          back
        </button>
      </div>
    </div>
  )
}
