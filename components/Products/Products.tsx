import React, { ReactNode, useContext, useState } from 'react'
import SiteContext from '../../contexts/SiteContext'
import ProductCard from './ProductCard'
import { Select, Option } from '@material-tailwind/react'
import { ICategory } from '../../interfaces/apiResponce'
import useProductsFilter from '../../hooks/useProductFilter'
import { useRouter } from 'next/router'

const Products: React.FC = () => {
  const { products, cats } = useContext(SiteContext)
  const filteredProducts = useProductsFilter(products.data)

  const router = useRouter()

  interface ICat {
    title: string
    slug: string
  }

  const sortCats = (a: ICat, b: ICat): number => {
    if (a.title > b.title) return 1
    if (a.title == b.title) return 0
    if (a.title < b.title) return -1
    return 1
  }

  const sortedCats: ICat[] = [...cats]
    .map(
      (item: ICategory): ICat => ({
        title: item.attributes.Title,
        slug: item.attributes.slug,
      })
    )
    .sort(sortCats)

  sortedCats.unshift({ title: 'Показать все', slug: 'show-all' })

  const [selectedCat, setSelectedCat] = useState('show-all')
  const [selectedSort, setSelectedSort] = useState('rating')

  const catSelector = (value: ReactNode) => {
    const valueStr = value?.toString()
    valueStr && setSelectedCat(valueStr)
    router.push(`/?filter=${valueStr}&sort=${selectedSort}`)
  }

  const sortSelector = (value: ReactNode) => {
    const valueStr = value?.toString()
    valueStr && setSelectedSort(valueStr)
    router.push(`/?filter=${selectedCat}&sort=${valueStr}`)
  }

  return (
    <div className="container mb-8">
      <div className="flex mb-5 flex-col space-y-4 md:space-y-0 md:flex-row justify-between">
        <div>
          <Select label="Фильтрация" value={selectedCat} onChange={catSelector}>
            {sortedCats.map((cat) => {
              return (
                <Option key={cat.slug} value={cat.slug}>
                  {cat.title}
                </Option>
              )
            })}
          </Select>
        </div>
        <div>
          <Select
            label="Сортировка"
            size="lg"
            value={selectedSort}
            onChange={sortSelector}
          >
            <Option value="rating">По рейтингу</Option>
            <Option value="price">По цене</Option>
          </Select>
        </div>
      </div>
      {filteredProducts.length === 0 && <>Не нашлось ничего подходящего...</>}
      {filteredProducts.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.attributes.Name}
            description={product.attributes.Description}
            pros={product.attributes.Pros_Cons?.Pros}
            cons={product.attributes.Pros_Cons?.Cons}
            rating={product.attributes.Rating}
            recomend={product.attributes.Recomend}
            noRecomend={product.attributes.No_recomend}
            video={product.attributes.Video}
            gallery={product.attributes.Gallery}
            price={product.attributes.Price}
            buttons={product.attributes.buttons.data}
          />
        )
      })}
    </div>
  )
}
export default Products
