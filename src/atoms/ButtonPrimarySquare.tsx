export const ButtonPrimarySquare = ({
  children,
  onClick,
}: React.PropsWithChildren & {
  onClick?: () => void
}) => {
  return (
    <div className='btn btn-lg btn-primary btn-square' onClick={onClick}>
      {children}
    </div>
  )
}
