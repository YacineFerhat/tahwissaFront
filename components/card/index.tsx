import Rating from '@mui/material/Rating'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  data: {
    picture: string
    description: string
    name: string
    tags: string[]
    review: number
    alias: string
  }
}

export const Card = ({
  data: { picture, name, description, tags, review, alias },
}: Props) => {
  const { pathname } = useRouter()
  return (
    <Link href={`${pathname}/${alias}`}>
      <div className="max-w-sm  h-full cursor-pointer overflow-hidden rounded-2xl shadow-lg">
        <img className="w-full h-44" src={picture} alt={name} />
        <div className="px-6 py-4">
          <div className="mb-2 flex items-center">
            <div className=" mr-2 align-middle text-xl font-bold">{name}</div>{' '}
          </div>
          <Rating name="simple-controlled" value={review} />
          <p className="text-base text-gray-700 line-clamp-3">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags ? (
            tags.map((tag) => (
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #{tag}
              </span>
            ))
          ) : (
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              #travel
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
