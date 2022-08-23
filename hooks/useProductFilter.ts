import { useMemo } from 'react'
import { IProductsData } from '../interfaces/apiResponce'
import { useRouter } from 'next/router'

const useProductsFilter = (inputProducts: IProductsData[]): IProductsData[] => {
  const router = useRouter()
  const sortQuery: string | undefined = Array.isArray(router.query.sort)
    ? router.query.sort[0]
    : router.query.sort
  const filterQuery: string | undefined = Array.isArray(router.query.filter)
    ? router.query.filter[0]
    : router.query.filter

  const outputProducts: IProductsData[] = useMemo(
    () => productsHandler(inputProducts, sortQuery, filterQuery),
    [router]
  )
  return outputProducts
}

export default useProductsFilter

function productsHandler(
  products: IProductsData[],
  sortQuery: string | undefined,
  filterQuery: string | undefined
): IProductsData[] {
  const sorted: IProductsData[] = productSorter(products, sortQuery)
  if (!filterQuery || filterQuery === 'show-all') return sorted

  const filtered: IProductsData[] = productFilter(products, filterQuery)

  return filtered
}

function productSorter(
  products: IProductsData[],
  param: string | undefined
): IProductsData[] {
  const sorted = products.sort((a, b) => {
    if (param === 'rating') return b.attributes.Rating - a.attributes.Rating
    if (param === 'price') return a.attributes.Price - b.attributes.Price
    return b.attributes.Rating - a.attributes.Rating
  })
  return sorted
}

function productFilter(
  products: IProductsData[],
  query: string | undefined
): IProductsData[] {
  const filtered = products.filter((product) =>
    product.attributes.categories.data.some(
      (cat) => cat.attributes.slug === query
    )
  )
  return filtered
}
