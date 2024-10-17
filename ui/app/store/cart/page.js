import { LimitedPage } from '@@/core/Layouts'
import { cookies } from 'next/headers'

export default function cart() {
  const getCart = cookies().get('cart')?.value
  if (!getCart) {
    return
  }
  const cart = JSON.parse(getCart)
  let cartTotal = 0
  let totalItems = 0
  let shipping = 0
  cart.map((item) => (cartTotal += item.price * item.qty))
  cart.map((item) => (totalItems += item.qty))
  shipping = (0.08 * cartTotal).toFixed(2)
  let total = (1.08 * cartTotal).toFixed(2)

  return (
    <LimitedPage>
      <div>hi mom</div>
    </LimitedPage>
  )
}
