import { ImgPaintTextAccent } from '../atoms/ImgPaintTextAccent'
import { VerticalText } from '../atoms/VerticalText'
import { Logo } from '../molecules/Logo'

export const LogoWithCaption = ({ comment }: { comment: string }) => {
  return (
    <div className='relative w-full justify-around items-center'>
      {/* 中央 */}
      <div
        className={`
          absolute
          md:top-[50%] md:translate-y-[-50%]
          left-[50%] translate-x-[-50%]
          translate-y-[-46%]
        `}
      >
        <Logo title='プログラム研究部' />
      </div>
      <div
        className={`
          flex justify-around items-center
          flex-row-reverse md:flex-row
          pt-[30%] md:pt-0
          h-full w-full
        `}
      >
        {/* 左 */}
        <div className='flex flex-col items-center'>
          <div className='text-2xl tracking-[.60em] text-shadow'>
            <VerticalText text='今ここにない' />
          </div>
          {/* TODO: z-indexを整える */}
          <div className='relative mt-1 flex'>
            <div
              className={`
                absolute w-max
                top-[40%] translate-y-[-50%]
                left-[50%] translate-x-[-50%]
              `}
            >
              <ImgPaintTextAccent />
            </div>
            <div className='text-4xl tracking-[.60em] text-shadow'>
              <VerticalText text='未来' />
            </div>
          </div>
          <div className='text-2xl tracking-[.60em] text-shadow'>
            <VerticalText text='はプロ研で創る。' />
          </div>
        </div>
        {/* 中央 */}
        <div className='md:w-[80%] lg:w-0'></div>
        {/* 右 */}
        <div className='text-2xl tracking-[.60em] text-shadow'>
          <VerticalText text={comment} />
        </div>
      </div>
    </div>
  )
}
