import { TitleContainer } from 'components'
import { IconHolder } from 'components'
export const ServiceContainer = () => {
  return (
    <div
      className={`  py-8 px-4 md:py-16 md:px-16 md:text-lg lg:px-32 xl:py-20 xl:px-64 xl:text-xl`}
    >
      <TitleContainer title="Our services" orange={true} />
      <div className="mt-4 grid  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <IconHolder
          title="Adventures"
          icon="explore"
          description="Are you getting bored? we got entertainments for you ! "
        />
        <IconHolder
          title="Food and drinks"
          icon="restaurants"
          description="Are you hunrgy? no issues we got the best adresses for you"
        />
        <IconHolder
          title="Affordable hotels"
          icon="hotel"
          description="Do you need a place to stay at? we got you cover"
        />
        <IconHolder
          title="Tour guides"
          icon="explore"
          description="Do you want to see the city in a different view? we got the tour guides for you"
        />
      </div>
    </div>
  )
}
