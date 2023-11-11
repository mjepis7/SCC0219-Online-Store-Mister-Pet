import { Hero } from '../components/Hero'
import { Popular } from '../components/Popular'
import { Offers } from '../components/Offers'
import { NewProducts } from '../components/NewProducts'
import { NewsLetter } from '../components/NewsLetter'

export function Shop() {
  return (
    <div className="shop">
      <Hero />
      <Popular />
      <Offers />
      <NewProducts />
      <NewsLetter />
    </div>
  )
}
