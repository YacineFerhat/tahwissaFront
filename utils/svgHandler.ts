import IllustrationHome from 'assets/illustrationHome.svg'
import gps from 'assets/gps.svg'
import date from 'assets/date.svg'
export const svgHandler = (title: string) => {
  if (title === 'illustrationHome') return IllustrationHome.src
  if (title === 'gps') return gps.src
  if (title === 'date') return date.src
}
