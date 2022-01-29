import {
  CardContainer,
  Container,
  Discover,
  ServiceContainer,
} from 'components'
import { useState } from 'react'
export default function Home() {
  const [input, setInput] = useState('')
  const handleChangeInput = (search: string) => {
    setInput(search)
  }
  return (
    <Container title="Tahwissa">
      <Discover
        handleChangeInput={handleChangeInput}
        text="Do you want to get the best of Oran? don't worry we got you covered !"
      />
      <CardContainer title="Explore our top destinations" home={true} />
      <ServiceContainer />
    </Container>
  )
}
