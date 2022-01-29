import {
  CardContainer,
  Container,
  Discover,
  ServiceContainer,
} from 'components'
import { useState } from 'react'
import { useFetchSearchTop } from 'api/activities'
export default function Home() {
  const [input, setInput] = useState('')
  const handleChangeInput = (search: string) => {
    setInput(search)
  }
  const data = useFetchSearchTop(0, input)
  return (
    <Container title="Tahwissa">
      <Discover
        handleChangeInput={handleChangeInput}
        text="Do you want to get the best of Oran? don't worry we got you covered !"
      />
      <CardContainer
        data={data}
        title="Explore our top destinations"
        home={true}
      />
      <ServiceContainer />
    </Container>
  )
}
