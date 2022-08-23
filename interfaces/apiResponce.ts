export interface ApiResponseI {
  data: Data
  meta: Meta
}

export interface Data {
  id: number
  attributes: Attributes
}

export interface Attributes {
  createdAt: string
  updatedAt: string
  Title: string
  Site_url: string
  Allow_index: boolean
  H1: string
  SEO_title: string
  SEO_description: string
  Author_name: string
  Author_description: string
  Logo: ImageI
  Favicon: ImageI
  Author_image: ImageI
  Intro_text: string
  Intro_image: ImageI
  products: IProducts
  Contact_mail: string
  Text_card: ITextCard[]
  Quiz_title: string
  Quiz_intro: string
  Quiz: IQuiz<IQuizOption>[]
  Metrika: string
}
export interface IQuiz<Type> {
  id: number
  Title: string
  Option: Type[]
}

export interface IQuizOption {
  id: number
  Option: string
}

export interface IQuizOptionEx extends IQuizOption {
  isSelected: boolean
}
export interface ITextCard {
  id: number
  Title: string
  Text: string
}

export interface IProducts {
  data: IProductsData[]
}

export interface IProductsData {
  id: number
  attributes: IProductsAttrs
}

export interface IProductsAttrs {
  Name: string
  Description: string
  Video: string | null
  createdAt: string
  updatedAt: string
  Pros_Cons: IProsCons | null
  Rating: number
  Price: number
  Recomend: number
  No_recomend: number
  Gallery: IGallery
  categories: ICategories
  buttons: IButtons
}
export interface IButtons {
  data: IButton[]
}
export interface IButton {
  id: number
  attributes: IButtonAttrs
}

export interface IButtonAttrs {
  Name: string
  Url: string
  Slug: string
  Direct_link: boolean
  Anchor: string
  No_follow: boolean
  createdAt: string
  updatedAt: string
}
export interface IReviews {
  data: IReview[]
}

export interface IReview {
  id: number
  attributes: IReviewAttrs
}

export interface IReviewAttrs {
  Author_name: string
  Review_text: string
  Rating: number
  publishedAt: null | string
  createdAt: string
  updatedAt: string
  product: { data: IProductsData }
}

export interface ICategories {
  data: ICategory[]
}

export interface ICategory {
  id: number
  attributes: ICategoryAttrs
}

export interface ICategoryAttrs {
  Title: string
  slug: string
  createdAt: string
  updatedAt: string
}

export interface IGallery {
  data: Data2[]
}

export interface IProsCons {
  id: number
  Pros: string
  Cons: string
}

export interface ImageI {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
}

export interface Meta {}
