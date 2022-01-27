import clsx from 'clsx'
interface Props {
  title: string
  orange?: boolean
}

export const TitleContainer = ({ title, orange }: Props) => {
  return (
    <div
      className={clsx(
        `mb-8 text-center text-2xl font-poppins font-semibold  md:mb-16 md:text-4xl xl:mb-20`,
        orange ? 'text-c-orange' : 'text-c-blue'
      )}
    >
      {title}
    </div>
  )
}
