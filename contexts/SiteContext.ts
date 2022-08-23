import { createContext } from 'react'

import { Attributes, ICategory, IReview } from './../interfaces/apiResponce'

interface ISiteContext extends Attributes {
  cats: ICategory[]
  reviews: IReview[]
}

const SiteContext = createContext({} as ISiteContext)

export default SiteContext
