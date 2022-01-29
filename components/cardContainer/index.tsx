import { TitleContainer, Card } from 'components'
import bg from 'assets/oran.png'
import clsx from 'clsx'
interface Props {
  home?: boolean
  title: string
  data?: Place[]
}
interface Place {
  picture: string
  name: string
  description: string
  tags: string[]
  review: number
  alias: string
}
export const CardContainer = ({ data, title, home }: Props) => {
  return (
    <div
      className={` py-8 px-4 md:py-16 md:px-16 md:text-lg lg:px-32 xl:py-20 xl:px-64 xl:text-xl`}
    >
      <TitleContainer title={title} />
      <div
        className={clsx(
          `mt-4 grid grid-cols-1   place-items-center gap-4 md:grid-cols-2 `,
          home ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
        )}
      >
        {data
          ? data.map((obj, index) => <Card data={obj} key={index} />)
          : Data.map((obj, index) => <Card data={obj} key={index} />)}
      </div>
    </div>
  )
}

const Data = [
  {
    picture: bg.src,
    name: 'test1',
    description:
      'eligendi. Sunt, suscipit. Ipsum corrupti culpa repellendus laudantium! Neque animi ducimus exercitationem soluta.',
    localisation: 'Adresse 1',
    review: 4,
    tags: ['hotel'],
    alias: 'SJKF2903',
  },
  {
    picture: bg.src,
    alias: 'SJKF2902',
    review: 4,

    tags: ['hotel'],
    name: 'test2',
    description:
      'eligendi. Sunt, suscipit. Ipsum corrupti culpa repellendus laudantium! Neque animi ducimus exercitationem soluta.',
    localisation: 'Adresse 1',
  },
  {
    review: 4,

    alias: 'SJKF29X3',
    picture: bg.src,
    name: 'test3',
    tags: ['hotel'],
    description:
      'eligendi. Sunt, suscipit. Ipsum corrupti culpa repellendus laudantium! Neque animi ducimus exercitationem soluta.',
    localisation: 'Adresse 1',
  },
]
