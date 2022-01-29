import { svgHandler } from 'utils'
import { CustumInput } from 'components'
import InputAdornment from '@mui/material/InputAdornment'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'
interface Props {
  text: string
  handleChangeInput: (e: any) => void
}

export const Discover = ({ text, handleChangeInput }: Props) => {
  const illustration = svgHandler('illustrationHome')
  const [searchField, setSearchField] = useState('')
  const gps = svgHandler('gps')
  const date = svgHandler('date')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value)
    handleChangeInput(event.target.value)
  }
  return (
    <div className="text-md bg-gradient-to-b from-c-orange  py-8 px-4 md:py-16 md:px-16 md:text-lg lg:px-32 xl:py-20  xl:px-64 xl:text-xl">
      <div className="grid grid-cols-1 gap-8  md:grid-cols-2">
        <div className="flex items-center">
          <p className=" leading-2 align-middle font-merriweather text-2xl  font-semibold text-c-blue md:text-4xl">
            {text}
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
        <div className="flex flex-col items-center justify-between rounded-2xl bg-c-white py-4 px-10 md:flex-row">
          <CustumInput
            type="text"
            name="place"
            value={searchField}
            onChange={handleChange}
            placeholder="The place you are looking for"
            startAdornment={
              <InputAdornment position="start">
                <FaMapMarkerAlt size={28} />
              </InputAdornment>
            }
            className="mr-0 w-full md:mt-0 md:mr-8"
          />

          <div className="flex h-12 w-56 items-center rounded-2xl bg-c-orange px-6 py-4 font-poppins font-bold text-c-white">
            Search
          </div>
        </div>
      </div>
    </div>
  )
}
