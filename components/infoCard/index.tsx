import clsx from 'clsx'
import {
  FaRegCalendar,
  FaDollarSign,
  FaRegClock,
  FaHiking,
} from 'react-icons/fa'

interface Props {
  icon: string
  text: string
  title: string
}

export const InfoCard: React.FunctionComponent<Props> = ({
  icon,
  text,
  title,
}) => {
  const iconToShow =
    icon === 'calendar' ? (
      <FaRegCalendar size={28} />
    ) : icon === 'money' ? (
      <FaDollarSign size={28} />
    ) : icon === 'time' ? (
      <FaRegClock size={28} />
    ) : (
      <FaHiking size={28} />
    )
  return (
    <div className="flex justify-start">
      <div
        className={clsx(
          'flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b',
          icon === 'calendar'
            ? 'from-c-g-green'
            : icon === 'money'
            ? 'from-c-g-orange'
            : icon === 'time'
            ? 'from-c-g-blue'
            : 'from-c-g-pink'
        )}
      >
        {iconToShow}
      </div>
      <div className="ml-2 flex flex-col items-start justify-center">
        <div className="text-sm font-bold text-c-blue">{title}</div>
        <div className="text-sm font-bold text-c-gray">{text}</div>
      </div>
    </div>
  )
}
