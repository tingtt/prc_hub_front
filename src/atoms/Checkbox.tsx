import { forwardRef, InputHTMLAttributes } from 'react'

type InputProps = { label?: string } & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = forwardRef<HTMLInputElement, InputProps>(function _(
  props,
  ref
) {
  return (
    <div className='flex items-center'>
      {props.label && (
        <label className='label mr-2'>
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
        type='checkbox'
        className='checkbox'
      />
    </div>
  )
})
