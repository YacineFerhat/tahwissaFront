import Rating from '@mui/material/Rating'
import { useState } from 'react'
interface Props {
  data: {
    picture: string
    description: string
    localisation: string
    title: string
  }
}

export const Card = ({
  data: { picture, title, description, localisation },
}: Props) => {
  const [value, setValue] = useState(2)
  return (
    <div className="max-w-sm cursor-pointer overflow-hidden rounded-2xl shadow-lg">
      <img className="w-full" src={picture} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-2 flex items-center">
          <div className=" mr-2 align-middle text-xl font-bold">{title}</div>{' '}
          <Rating name="simple-controlled" value={value} />
        </div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #photography
        </span>
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #travel
        </span>
      </div>
    </div>
  )
}
