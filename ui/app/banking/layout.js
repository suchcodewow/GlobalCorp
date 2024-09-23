import { SplitPage, SideBar, MainArea } from '@@/core/Layouts'
import Myactions from '@@/Myactions'
import Myinfo from '@@/Myinfo'
import { cookies } from 'next/headers'

export default function RootLayout({ children }) {
  const userCookie = cookies().get('scwuser')?.value
  const userId = cookies().get('scwid')?.value
  return (
    <SplitPage>
      <SideBar>
        <Myinfo userCookie={userCookie} />
        <Myactions userCookie={userCookie} userId={userId} />
      </SideBar>
      <MainArea>{children}</MainArea>
    </SplitPage>
  )
}
