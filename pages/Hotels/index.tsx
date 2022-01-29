import { CardContainer, Container, Discover } from 'components'
import { useFetchSearchHotels } from 'api/hotel'
import { useState } from 'react'
export default function Hotels() {
  const [input, setInput] = useState('')
  const handleChangeInput = (search: string) => {
    setInput(search)
  }
  const data = useFetchSearchHotels(0, input)
  return (
    <Container title="Hotels">
      <Discover
        handleChangeInput={handleChangeInput}
        text="Discover and book the best hotels in Town !"
      />
      <CardContainer data={data} title="Explore our top hotels" />
    </Container>
  )
}
