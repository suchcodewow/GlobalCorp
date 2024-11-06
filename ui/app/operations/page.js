import { FullPage } from '@@/core/Layouts'
async function saveChanges(formData) {
  'use server'
  if (formData.get('enableCollecticare')) {
    process.env.enableCollecticare = 'on'
  } else {
    process.env.enableCollecticare = 'off'
  }
}
export default function Operations() {
  const enableCollecticare = process.env.enableCollecticare
  console.log(enableCollecticare)
  return (
    <FullPage>
      <div className="my-4 rounded-xl border-2">
        <form action={saveChanges}>
          <div className="space-y-2">
            <div className="p-2">
              <div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-2 lg:grid-cols-3">
                  <div className="flex items-center">
                    <label
                      htmlFor="MainAPI"
                      className="text-sm font-medium text-gray-900"
                    >
                      MainAPI
                    </label>
                    <div>
                      <div className="ml-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          id="MainAPI"
                          name="MainAPI"
                          type="text"
                          readOnly
                          defaultValue={process.env.NEXT_PUBLIC_MAINAPI}
                          autoComplete="MainAPI"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label
                      htmlFor="CATALOGAPI"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      CatalogAPI
                    </label>
                    <div>
                      <div className="ml-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          id="CATALOGAPI"
                          name="CATALOGAPI"
                          type="text"
                          readOnly
                          defaultValue={process.env.NEXT_PUBLIC_CATALOGAPI}
                          autoComplete="CATALOGAPI"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label
                      htmlFor="ORDERSAPI"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      OrdersAPI
                    </label>
                    <div>
                      <div className="ml-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          id="ORDERSAPI"
                          name="ORDERSAPI"
                          type="text"
                          readOnly
                          defaultValue={process.env.NEXT_PUBLIC_ORDERSAPI}
                          autoComplete="ORDERSAPI"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label
                      htmlFor="QUOTESAPI"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      QuotesAPI
                    </label>
                    <div>
                      <div className="ml-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          id="QUOTESAPI"
                          name="QUOTESAPI"
                          type="text"
                          readOnly
                          defaultValue={process.env.NEXT_PUBLIC_QUOTESAPI}
                          autoComplete="QUOTESAPI"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex h-6 items-center">
                      <input
                        id="enableCollecticare"
                        name="enableCollecticare"
                        type="checkbox"
                        defaultChecked={
                          enableCollecticare === 'on' ? true : false
                        }
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="enableCollecticare"
                        className="pl-1 font-medium text-gray-900"
                      >
                        Enable Collecticare
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6 pb-2 pr-2">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </FullPage>
  )
}
