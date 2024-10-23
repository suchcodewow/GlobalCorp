import { FullPage } from '@@/core/Layouts'
import { storeCatalog } from '@@/core/Library'
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { Button } from '@@/bits/button'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function cartStatus() {
  const getCart = cookies().get('cart')?.value
  if (!getCart) {
    return
  }
  const currentCart = JSON.parse(getCart)
  let cartTotal = 0
  let totalItems = 0
  let shipping = 0
  //TODO: deal with the cart returning no items.  Possible problem card?
  currentCart.map((item) => (cartTotal += item.price * item.qty))
  currentCart.map((item) => (totalItems += item.qty))
  shipping = (0.08 * cartTotal).toFixed(2)
  let total = (1.08 * cartTotal).toFixed(2)
  return totalItems
}

export default async function Home() {
  const catalog = await storeCatalog()
  return (
    <FullPage>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
          <div className="flex border-b-2 border-gray-100 py-3">
            {cartStatus() && (
              <Link href="/checkout">
                <Button>
                  <ShoppingBagIcon className="flex h-5 w-5" />
                  <b>({cartStatus()})</b> view cart / checkout
                </Button>
              </Link>
            )}
          </div>
          <h2 className="sr-only">Products</h2>
          <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3">
            {catalog.map((product) => (
              <div
                key={product.id}
                className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
              >
                <Link href={'store/' + product.id}>
                  <>
                    <div className="aspect-h-1 aspect-w-1 max-h-48 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                      <Image
                        width="250"
                        height="250"
                        alt={product.img}
                        src={'/images/store/' + product.img}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="pb-4 pt-10 text-center">
                      <h3 className="text-sm font-medium text-gray-900">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </h3>
                      <div className="mt-3 flex flex-col items-center">
                        <p className="sr-only">
                          {product.rating} out of 5 stars
                        </p>
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                product.rating > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0',
                              )}
                            />
                          ))}
                        </div>
                        <p className="mt-1 text-left text-sm text-gray-500">
                          {product.shortDesc}
                        </p>
                      </div>
                      <p className="mt-4 text-base font-medium text-gray-900">
                        ${product.price}.00
                      </p>
                    </div>
                  </>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FullPage>
  )
}
