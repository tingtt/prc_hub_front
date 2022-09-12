import { forwardRef, InputHTMLAttributes } from 'react'

type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(function _(
  props,
  ref
) {
  return (
    <div>
      {props.label && (
        <label className='label'>
          <span className='label-text'>{props.label}</span>
        </label>
      )}
      <input
        ref={ref}
        autoComplete={(() => {
          if (props.type == 'password') {
            return 'off'
          } else if (props.type == 'email') {
            //* NOTE: emailを入力補完すると
            //* Cannot read properties of undefined (reading 'toLowerCase')
            //* となるため'off'
            return 'off'
          }
        })()}
        {...props}
        className='input input-primary input-bordered w-full'
      />
    </div>
  )
})
