import { useState, useEffect } from 'react'
import { Container } from 'components'
import Rating from '@mui/material/Rating'
import { useRouter } from 'next/router'
import { useFetchRestaurantByAlias } from 'api/restaurant'
import { FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from 'react-icons/fa'
interface menu {
  name: string
  price: number
  ingredients: string
}
const Activity = () => {
  const {
    query: { name },
  } = useRouter()
  const data = useFetchRestaurantByAlias(name)
  const [value, setValue] = useState(4)

  useEffect(() => {
    setValue(data?.review)
  }, [data?.review])
  console.log(data)

  return (
    <Container title={data?.name}>
      <div className="text-md py-8 px-4 font-poppins md:py-16 md:px-16 md:text-lg lg:px-32  xl:py-20 xl:px-64 xl:text-xl">
        <div className=" ">
          <img
            src={data?.picture}
            className="w-full  rounded-2xl"
            alt="picture name"
            style={{
              maxHeight: '35rem',
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="mt-4 text-3xl font-bold">{data?.name}</div>
          <div className="mt-2 text-xl">
            <strong>N°{data?.ranking}</strong> in 4 hotels in Oran
          </div>
          <Rating
            name="simple-controlled"
            className="mt-2"
            readOnly
            value={value}
          />
          <div className="mt-8" />
          <div className="mt-2 flex items-center text-xl">
            {' '}
            <FaMapMarkerAlt size={28} className="mr-4" /> {data?.adress}
          </div>
          <div className="mt-4 flex items-center text-xl">
            {' '}
            <FaPhoneAlt size={28} className="mr-4" /> {data?.phoneNumber}
          </div>
          <div className="mt-4 flex cursor-pointer items-center text-xl">
            {' '}
            <FaGlobe size={28} className="mr-4" /> Website
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="mt-2 text-xl">
              {' '}
              <strong>Details</strong>
              <p className="mt-2">{data?.description}</p>
            </div>
            <div className="mt-4 text-xl">
              {' '}
              <strong>Menu</strong>
              {data?.menu?.map((object: menu, index: number) => (
                <div key={index}>
                  <div className="font-semibold">{object.name}</div>
                  <div className="flex">
                    <p className="w-40 font-normal">Ingredients : </p>
                    <p className='font-light'>{object.ingredients}</p>
                  </div>
                  <p> price : {object.price} DA</p>
                </div>
              ))}
              <div></div>
            </div>
          </div>
          <div>
            <iframe
              className="rounded-2xl"
              src={data?.iframe}
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Activity
