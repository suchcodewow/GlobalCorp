import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function Myactions({ setCurrentPanel }) {
  return (
    <div className="bg-azure-800 mt-1 overflow-y-auto px-3 py-1 text-white md:mt-4 md:rounded-md md:py-4">
      <ul className="md:space-y-1">
        <li className="md:mb-2">
          <span className="font-bold md:ml-1">Quick Actions</span>
        </li>
        <li>
          <div className="flex space-x-4">
            <div
              className="flex w-full cursor-pointer justify-center rounded-md bg-orange-500 px-3 py-2 font-bold hover:bg-orange-600"
              onClick={() => setCurrentPanel('transfer')}
            >
              <CurrencyDollarIcon className="mr-1 w-5" />
              Transfer & Pay
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}