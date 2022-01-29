import { CardContainer, Container, Discover } from 'components'
import { useFetchSearchRestaurants } from 'api/restaurant'
import { useState } from 'react'
export default function Hotels() {
  const [input, setInput] = useState('')
  const handleChangeInput = (search: string) => {
    setInput(search)
  }
  const data = useFetchSearchRestaurants(0, input)
  console.log(data)
  return (
    <Container title="Restaurants">
      <Discover
        handleChangeInput={handleChangeInput}
        text="Do you want to have a taste of the oranese cuisine? come discover it!"
      />
      <CardContainer data={data} title="Explore our top restaurants" />
    </Container>
  )
}
