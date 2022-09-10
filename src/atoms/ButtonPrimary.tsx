export const ButtonPrimary = ({
  children,
  type,
  onClick,
}: React.PropsWithChildren & {
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
}) => {
  return (
    <button type={type} className='btn btn-primary w-full' onClick={onClick}>
      {children}
    </button>
  )
}
