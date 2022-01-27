import { svgHandler } from 'utils'

export const Discover = () => {
  const illustration = svgHandler('illustrationHome')
  const gps = svgHandler('gps')
  const date = svgHandler('date')
  return (
    <div className="text-md bg-c-orange/25 py-8 px-4 md:py-16 md:px-16 md:text-lg lg:px-32 xl:py-20  xl:px-64 xl:text-xl">
      <div className="grid grid-cols-1 gap-8  md:grid-cols-2">
        <div className="flex items-center">
          <p className="align-middle font-merriweather text-2xl leading-10 md:text-4xl">
            <a className="font-light leading-10 text-c-blue">Discover Oran </a>
            <a className="font-semibold leading-10 text-c-blue">
              and book the best{' '}
            </a>
            <a className="font-bold leading-10 text-c-white">guide in Town !</a>
          </p>
        </div>
        <div>
          <img src={illustration} alt="illustration" />
        </div>
      </div>
      <div className="mt-8 md:mt-16 xl:mt-20">
        <div className="flex h-12 w-56 items-center rounded-2xl bg-c-orange px-6 py-4 font-poppins font-bold text-c-white">
          Online booking
        </div>
        <div className="flex h-20 items-center justify-between rounded-2xl bg-c-white px-10">
          <div className="flex w-full items-center justify-between ">
            <img src={gps} alt="gps icon" className="w-8" />
            <input
              className="ml-2 block w-full  appearance-none rounded border py-3 px-4 leading-tight focus:border-c-orange/40 focus:outline-none"
              id="Position"
              type="text"
              placeholder="Oran"
            />
          </div>
          <div className="mx-16 flex w-full items-center justify-between">
            <img src={date} alt="gps icon" className="w-8" />
            <input
              className="ml-2 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:border-c-orange/40 focus:outline-none"
              id="Position"
              type="date"
              placeholder="Oran"
            />
          </div>
          <div className="flex h-12 w-56 items-center rounded-2xl bg-c-orange px-6 py-4 font-poppins font-bold text-c-white">
            Search
          </div>
        </div>
      </div>
    </div>
  )
}
