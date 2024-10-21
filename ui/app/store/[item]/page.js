import { LimitedPage } from '@@/core/Layouts'
import { storeItem } from '@@/core/Library'
import {
  StarIcon,
  ArrowLeftIcon,
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
// import { AddToCart } from '@@/StoreClient'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

async function AddToCart(formData) {
  'use server'
  const item = JSON.parse(formData.get('item'))
  const cartCookie = cookies().get('cart')?.value || '[]'
  let cart
  try {
    cart = await JSON.parse(cartCookie)
  } catch {
    cart = []
  }
  const newCart = () => {
    // console.log('cart', item)
    var addExist = cart.find((cart) => cart.id === item.id)
    if (addExist) {
      return cart.map((x) =>
        x.id === item.id ? { ...addExist, qty: addExist.qty + 1 } : x,
      )
    } else {
      return [...cart, { ...item, qty: 1 }]
    }
  }
  cookies().set('cart', JSON.stringify(await newCart()))
  redirect('/store')
  // console.log('omg', await newCart())
}

const policies = [
  {
    name: 'International delivery',
    icon: GlobeAmericasIcon,
    description: 'Get your order in 2 years',
  },
  {
    name: 'Loyalty rewards',
    icon: CurrencyDollarIcon,
    description: "Please no don't go",
  },
]
export default async function showItem({ params }) {
  // console.log(params)
  const item = await storeItem(params.item)
  // console.log(item)
  return (
    <LimitedPage>
      <div className="bg-white">
        <div className="pb-16 pt-6 sm:pb-24">
          <Link href="/store">
            <div className="flex text-sm">
              <ArrowLeftIcon className="flex h-5 w-5" />
              <p className="ml-1">return to store</p>
            </div>
          </Link>

          <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex justify-between">
                  <p className="text-xl font-medium text-gray-900">
                    ${item.price}.00
                  </p>
                </div>
                {/* Reviews */}
                <div className="mt-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-700">
                      {item.rating}
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                    <div className="ml-1 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            item.rating > rating
                              ? 'text-yellow-400'
                              : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0',
                          )}
                        />
                      ))}
                    </div>
                    <div
                      aria-hidden="true"
                      className="ml-4 text-sm text-gray-300"
                    >
                      ·
                    </div>
                  </div>
                </div>
              </div>

              {/* Image gallery */}
              <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                <h2 className="sr-only">Images</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                  <Image
                    width="250"
                    height="250"
                    alt={item.img}
                    src={'/images/store/' + item.img}
                    className="rounded-lg lg:col-span-2 lg:row-span-2"
                  />
                </div>
              </div>

              <div className="mt-8 lg:col-span-5">
                {/* Item details */}
                <div className="mt-10">
                  <h1 className="text-xl font-medium text-gray-900">
                    Description
                  </h1>
                  <h2 className="mt-2 font-medium text-gray-900">
                    {item.shortDesc}
                  </h2>
                </div>
                <form action={AddToCart}>
                  <input
                    type="hidden"
                    name="item"
                    value={JSON.stringify(item)}
                  />
                  <button
                    type="submit"
                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to cart
                  </button>
                </form>

                <h2 className="mt-6 text-xl font-medium text-gray-900">
                  Important to know
                </h2>

                {/* Policies */}
                <section aria-labelledby="policies-heading" className="mt-2">
                  <h2 id="policies-heading" className="sr-only">
                    Our Policies
                  </h2>

                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {policies.map((policy) => (
                      <div
                        key={policy.name}
                        className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                      >
                        <dt>
                          <policy.icon
                            aria-hidden="true"
                            className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                          />
                          <span className="mt-4 text-sm font-medium text-gray-900">
                            {policy.name}
                          </span>
                        </dt>
                        <dd className="mt-1 text-sm text-gray-500">
                          {policy.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LimitedPage>
  )
}
