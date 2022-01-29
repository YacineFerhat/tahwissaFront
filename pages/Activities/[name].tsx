import { Container, InfoCard } from 'components'
import picture from 'assets/bg.svg'
import Rating from '@mui/material/Rating'
import { useRouter } from 'next/router'
import { useFetchActivityByAlias } from 'api/activities'
import { useState, useEffect } from 'react'

const Activity = () => {
  const city = 'Oran'
  const gps = {
    firstCord: "35° 42' 35'",
    firstDirection: 'north',
    secondCord: " 0° 39' 48",
    secondDirection: 'nuest',
  }
  const {
    query: { name },
  } = useRouter()
  const data = useFetchActivityByAlias(name)
  const [value, setValue] = useState(4)
  useEffect(() => {
    setValue(data?.review)
  }, [data?.review])
  console.log(data)

  return (
    <Container title={data?.name}>
      <div className="text-md py-8 px-4 font-poppins md:py-16 md:px-16 md:text-lg lg:px-32  xl:py-20 xl:px-64 xl:text-xl">
        <div className="grid grid-cols-1 md:grid-cols-8 ">
          <div className="col-span-8 md:col-span-7">
            <img
              style={{
                maxHeight: '35rem',
              }}
              src={data?.picture}
              className="w-full rounded-2xl"
              alt="picture name"
            />
          </div>
          <div className="mt-4 w-full justify-center md:relative md:col-span-1 md:mt-0 md:flex md:items-center">
            <div className="flex h-full w-96 flex-col justify-center rounded-2xl  bg-c-white p-4  shadow-md md:absolute md:top-10 md:right-0">
              <div className="mb-2 text-lg font-bold text-c-blue md:text-xl">
                Participants
              </div>
              <div>Partcipants counter (icon?)</div>
              <div className="mt-4 text-lg font-bold text-c-blue md:text-xl">
                Info
              </div>
              <div className="mt-4 grid grid-cols-2">
                <InfoCard icon="calendar" text="20 June 2021" title="Date" />
                <InfoCard icon="guide" text="Yes" title="Guide" />
              </div>
              <div className="mt-2 grid grid-cols-2">
                <InfoCard icon="time" text="10:00" title="Time" />
                <InfoCard icon="money" text="2000 DA" title="Price" />
              </div>
              <div className="mt-8 flex h-12 w-32 cursor-pointer items-center justify-center rounded-2xl bg-c-orange px-6 py-4 font-bold text-c-white">
                Join
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-4 text-3xl font-bold">{data?.name}</div>
          <div className="mt-2 text-xl">{data?.type}</div>
          <Rating name="simple-controlled" className="mt-2" value={value} />
          <div className="mt-2 leading-10">{data?.description}</div>
          <div className="mt-6 flex font-medium">
            {' '}
            <div className="">Opened at :</div>
            <div className="ml-2 text-c-gray">{data?.openAt}</div>
          </div>
          <div className="mt-2 flex font-medium">
            {' '}
            <div className="">City :</div>
            <div className="ml-2 text-c-blue">{data?.city}</div>
          </div>
          {data?.gps && (
            <div className="mt-2 flex font-medium">
              {' '}
              <div className="">Coordinate :</div>
              <div className="ml-2 flex text-c-gray">
                <div>{gps.firstCord}</div>
                <div className="mx-2 text-c-blue">{gps.firstDirection}</div>
                <div>{gps.secondCord}</div>
                <div className="ml-2 text-c-blue">{gps.secondCord}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Activity
