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
          font-serif font-bold
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
        <div
          className={`
            flex flex-col items-center
            opacity-0 animate-[fadein_2s_ease-in_2s_forwards]
          `}
        >
          <div className='text-2xl tracking-[.60em] text-shadow font-serif'>
            <VerticalText text='今ここにない' />
          </div>
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
            <div className='text-4xl tracking-[.60em] text-shadow font-serif z-10'>
              <VerticalText text='未来' />
            </div>
          </div>
          <div className='text-2xl tracking-[.60em] text-shadow font-serif'>
            <VerticalText text='はプロ研で創る。' />
          </div>
        </div>
        {/* 中央 */}
        <div className='md:w-[80%] lg:w-0'></div>
        {/* 右 */}
        <div
          className={`
            text-2xl tracking-[.60em] text-shadow font-serif
            opacity-0 animate-[fadein_2s_ease-in_3s_forwards]
          `}
        >
          <VerticalText text={comment} />
        </div>
      </div>
    </div>
  )
}
