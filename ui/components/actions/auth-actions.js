'use server'

import { cookies } from 'next/headers'
import { getUser } from '../core/Library'

export const createCookie = ({ state }) => {
  cookies().set('scwuser', state.user)
  cookies().set('scwid', state.id)
}

export const removeCookie = () => {
  cookies().delete('scwuser')
  cookies().delete('scwid')
}

export async function loginUser(formData, props) {
  console.log(props)
  const userObject = await getUser(formData.get('global'))
  cookies().set('scwuser', userObject.user)
  cookies().set('scwid', userObject.id)
  // const returnUrl = cookies().get('returnUrl')?.value
  // NextResponse.redirect(new URL('/login', req.nextUrl))
  console.log(userObject)
}
