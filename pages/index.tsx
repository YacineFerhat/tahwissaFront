import {
  CardContainer,
  Container,
  Discover,
  ServiceContainer,
} from 'components'
export default function Home() {
  return (
    <Container title="Tahwissa">
      <Discover />
      <CardContainer />
      <ServiceContainer />
    </Container>
  )
}
