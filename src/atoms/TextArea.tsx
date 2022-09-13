import { forwardRef, TextareaHTMLAttributes } from 'react'

type TextAreaProps = {
  label?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function _(props, ref) {
    return (
      <div>
        {props.label && (
          <label className='label'>
            <span className='label-text'>{props.label}</span>
          </label>
        )}
        <textarea
          ref={ref}
          {...props}
          className='input input-primary input-bordered w-full h-full pt-3'
        />
      </div>
    )
  }
)
