import { LimitedPage } from '@@/core/Layouts'
import { randomCarHouse } from '@@/core/Library'
import { saveQuote } from '@@/core/Library'
import Link from 'next/link'
export default function Quote() {
  const myInfo = randomCarHouse()

  return (
    <LimitedPage>
      <div className="my-4 text-4xl font-bold">Your Info</div>
      <form action={saveQuote}>
        <div className="mb-4 space-y-2 rounded-2xl border-2 border-gray-200 bg-white">
          <div className="p-4">
            <div className="border-b border-gray-900/10 py-4">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="Email"
                        name="Email"
                        type="text"
                        defaultValue={myInfo.userId + '@mail.com'}
                        autoComplete="Email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Birth Date
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="BirthDate"
                        name="BirthDate"
                        type="text"
                        defaultValue={myInfo.birthdate}
                        autoComplete="BirthDate"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 py-4">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Car #1 Information
              </h2>
              <div className="col-span-full">
                <label
                  htmlFor="carYear"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Car Year
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="carYear"
                      name="carYear"
                      type="text"
                      defaultValue={myInfo.carData.Year}
                      autoComplete="carYear"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full py-4">
                <label
                  htmlFor="carMake"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Car Manufacturer
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="carMake"
                      name="carMake"
                      type="text"
                      defaultValue={myInfo.carData.Make}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full py-4">
                <label
                  htmlFor="carModel"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Car Model
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="carModel"
                      name="carModel"
                      type="text"
                      defaultValue={myInfo.carData.Model}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                House Information
              </h2>

              <div className="col-span-full py-4">
                <label
                  htmlFor="houseYear"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  What year was construction completed on your house?
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="houseYear"
                      name="houseYear"
                      type="text"
                      defaultValue={myInfo.houseYear}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full py-4">
                <label
                  htmlFor="houseSize"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  What is the approximate size of your house in square feet?
                  (This can be adjusted later)
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="houseSize"
                      name="houseSize"
                      type="text"
                      defaultValue={myInfo.houseSqFeet}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full py-4">
                <label
                  htmlFor="houseSize"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  How many stories is your house?
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      id="houseType"
                      name="houseType"
                      type="text"
                      defaultValue={myInfo.houseStories}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      defaultChecked={myInfo.HouseFinishedBasement}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      Finished Basement (at least 60% living space)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 p-4">
            <Link href="/insurance">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </LimitedPage>
  )
}
