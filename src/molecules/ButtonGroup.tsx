export const ButtonGroup = ({ childs }: { childs: React.ReactNode[] }) => {
  return (
    <div
      className={`
        btn-group grid ${(() => {
          switch (childs.length) {
            case 1:
              return `grid-cols-1`
            case 2:
              return `grid-cols-2`
            case 3:
              return `grid-cols-3`
            case 4:
              return `grid-cols-4`
            case 5:
              return `grid-cols-5`
            default:
              break
          }
        })()} w-full
      `}
    >
      {childs}
    </div>
  )
}
