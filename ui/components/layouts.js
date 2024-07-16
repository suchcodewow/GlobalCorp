export function LimitedPage({children}) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-3xl">{children}</div>
      </div>
    )
  }

export function FullPage({children}){
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
    )
}

export function AboutPage({children}){
  return (
      <div className="mx-auto max-w-7xl sm:px-6 bg-slate-300 lg:px-8">{children}</div>
  )
}