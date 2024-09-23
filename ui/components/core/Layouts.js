export function LimitedPage({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  )
}

export function FullPage({ children }) {
  return (
    <div className="mx-auto h-full max-w-7xl sm:px-6 lg:px-8">
      <div className="h-full flex-col">{children}</div>
    </div>
  )
}

export function SplitPage({ children }) {
  return (
    <div className="mx-auto h-full max-w-7xl sm:px-6 lg:px-8">
      <div className="flex h-full">{children} </div>
    </div>
  )
}

export function SideBar({ children }) {
  return (
    <aside
      className="sticky bg-slate-800 py-1 md:w-1/3 md:py-4 md:pl-4"
      aria-label="Sidebar"
    >
      {children}
    </aside>
  )
}

export function MainArea({ children }) {
  return <div className="ml-6 mt-6 h-full w-full">{children}</div>
}
