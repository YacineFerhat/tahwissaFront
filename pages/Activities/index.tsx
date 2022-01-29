import { CardContainer, Container, Discover } from 'components'
import { useFetchSearchActivities } from 'api/activities'
import { useState } from 'react'
export default function Activities() {
  const [input, setInput] = useState('')
  const handleChangeInput = (search: string) => {
    setInput(search)
  }
  const data = useFetchSearchActivities(0, input)
  return (
    <Container title="Activities">
      <Discover
        handleChangeInput={handleChangeInput}
        text="Discover and book the best activities in Town !"
      />
      <CardContainer data={data} title="Explore our top activities" />
    </Container>
  )
}
