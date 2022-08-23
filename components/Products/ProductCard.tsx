import React from 'react'
import ReactStars from 'react-stars'
import ProsCons from './ProsCons'
import Slider from './Slider'
import { IGallery, IButton } from '../../interfaces/apiResponce'
import ProductBtns from './ProductsBtns'

interface ProductCardProps {
  title: string
  description: string
  pros?: string
  cons?: string
  recomend: number
  noRecomend: number
  rating: number
  video: string | null
  gallery: IGallery
  price: number
  buttons: IButton[]
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  pros,
  cons,
  noRecomend,
  recomend,
  rating,
  video,
  gallery,
  price,
  buttons,
}) => {
  return (
    <section className="body-font overflow-hidden mb-5">
      <div className="flex flex-col md:flex-row flex-wrap bg-white px-3 py-5 lg:py-10 lg:px-10 lg:rounded-lg">
        <Slider video={video} gallery={gallery} />
        <div className="xl:pl-10 md:py-0 mt-6 lg:mt-0 pr-4 mb-5 lg:mb-0 md:order-last xl:order-none shrink grow xl:w-min">
          <h2 className="text-gray-900 text-2xl title-font font-medium uppercase">
            {title}
          </h2>
          <div className="flex flex-wrap mb-4 items-center border-b-[1px] border-x-blue-gray-100 py-2">
            <span className="basis-full mb-2 lg:basis-auto mr-2">
              <ReactStars
                count={5}
                size={25}
                color2={'#ff9900'}
                value={rating}
                className="block w-max"
                half={true}
                edit={false}
              />
            </span>
            <span className="text-md lg:text-basis basis-1/2">
              Рейтинг: {rating}
            </span>
            <span className="text-md lg:text-basis basis-1/2 lg:basis-full">
              Отзывов: {recomend + noRecomend}
            </span>
          </div>
          <p className="leading-relaxed">{description}</p>
        </div>
        <ProductBtns buttons={buttons} />
      </div>
      {pros && cons && <ProsCons pros={pros} cons={cons} />}
    </section>
  )
}
export default ProductCard
