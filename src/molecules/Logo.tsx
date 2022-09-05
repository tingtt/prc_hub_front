import Image from 'next/image'

export const Logo = ({ title }: { title: string }) => {
  return (
    <div className='relative'>
      <Image
        src='/paint_center.png'
        width={640}
        height={642.2}
        alt='paint_center'
        layout='fixed'
        className={`
          w-max
        `}
      />
      <div
        className={`
          absolute
          top-[50%] translate-y-[-50%]
          left-[50%] translate-x-[-50%]
          bg-neutral px-20 py-2
        `}
      >
        <p className='text-neutral-content text-4xl whitespace-nowrap'>
          {title}
        </p>
      </div>
    </div>
  )
}
