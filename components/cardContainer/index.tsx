import { TitleContainer, Card } from 'components'
import bg from 'assets/oran.png'

export const CardContainer = () => {
  return (
    <div
      className={` py-8 px-4 md:py-16 md:px-16 md:text-lg lg:px-32 xl:py-20 xl:px-64 xl:text-xl`}
    >
      <TitleContainer title="Explore our top destinations" />
      <div className="mt-4 grid  grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Data.map((obj, index) => (
          <Card data={obj} key={index} />
        ))}
      </div>
    </div>
  )
}

const Data = [
  {
    picture: bg.src,
    title: 'test1',
    description:
      'eligendi. Sunt, suscipit. Ipsum corrupti culpa repellendus laudantium! Neque animi ducimus exercitationem soluta.',
    localisation: 'Adresse 1',
  },
  {
    picture: bg.src,

    title: 'test2',
    description:
      'eligendi. Sunt, suscipit. Ipsum corrupti culpa repellendus laudantium! Neque animi ducimus exercitationem soluta.',
    localisation: 'Adresse 1',
  },
  {
    picture: bg.src,
    title: 'test3',
    description:
      'eligendi. Sunt, suscipit. Ipsum corrupti culpa repellendus laudantium! Neque animi ducimus exercitationem soluta.',
    localisation: 'Adresse 1',
  },
]
