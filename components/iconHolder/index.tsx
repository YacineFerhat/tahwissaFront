import { FaHotel, FaUtensils, FaHiking, FaGlobeAfrica } from 'react-icons/fa'

interface Props {
  icon: string
  title: string
  description: string
}
export const IconHolder = ({ icon, title, description }: Props) => {
  const iconClass = ' text-c-orange'
  const iconToShow =
    icon === 'hotel' ? (
      <FaHotel size={56} className={iconClass} />
    ) : icon === 'restaurants' ? (
      <FaUtensils size={56} className={iconClass} />
    ) : icon === 'explore' ? (
      <FaHiking size={56} className={iconClass} />
    ) : (
      <FaGlobeAfrica size={56} className={iconClass} />
    )
  return (
    <div className="flex flex-col items-center justify-center font-poppins">
      {iconToShow}
      <div className="my-4 font-semibold">{title}</div>
      <div className="h-32 text-center">{description}</div>
    </div>
  )
}
