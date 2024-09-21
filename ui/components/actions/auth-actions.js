'use server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { getUser } from '../core/Library'

export const logoutUser = () => {
  cookies().delete('scwuser')
  cookies().delete('scwid')
  redirect('/')
}

export async function loginUser(formData) {
  const userObject = await getUser(formData.get('global'))
  cookies().set('scwuser', userObject.user)
  cookies().set('scwid', userObject.id)
  const returnUrl = formData.get('returnUrl') || '/'
  // console.log(returnUrl)
  redirect(returnUrl)
}
