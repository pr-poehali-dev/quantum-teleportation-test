export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Фонд поддержки предпринимательства логотип" role="img">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-base font-bold text-foreground leading-tight">
        Фонд поддержки<br/>
        <span className="text-primary">предпринимательства</span>
      </span>
    </div>
  )
}