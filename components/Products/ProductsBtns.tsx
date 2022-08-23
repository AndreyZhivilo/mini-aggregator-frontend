import React from 'react'
import ProductBtn from './ProductBtn'
import { IButton } from '../../interfaces/apiResponce'

interface ProductBtnsProps {
  buttons: IButton[]
}

const ProductBtns: React.FC<ProductBtnsProps> = ({ buttons }) => {
  interface IColor {
    bg: string
    bgHover: string
  }
  const colors: IColor[] = [
    { bg: 'bg-blue-600', bgHover: 'bg-blue-700' },
    { bg: 'bg-indigo-500', bgHover: 'bg-indigo-600' },
    { bg: 'bg-orange-500', bgHover: 'bg-orange-600' },
    { bg: 'bg-red-500', bgHover: 'bg-red-600' },
    { bg: 'bg-teal-600', bgHover: 'bg-teal-700' },
    { bg: 'bg-green-700', bgHover: 'bg-green-800' },
  ]
  const getColors = (index: number): IColor => {
    if (index <= colors.length) return colors[index]
    return getColors(index - colors.length)
  }

  const getUrl = (direct: boolean, url: string, slug: string): string => {
    if (direct) return url
    return '/r/' + slug
  }

  return (
    <>
      <div className="space-y-4 xl:border-l-[1px] xl:border-l-blue-gray-100 md:pl-5 md:w-max">
        {buttons.map((button, index) => {
          const colors = getColors(index)
          const url = getUrl(
            button.attributes.Direct_link,
            button.attributes.Url,
            button.attributes.Slug
          )
          return (
            <ProductBtn
              key={button.id}
              text={button.attributes.Anchor}
              bg={colors.bg}
              bgHover={colors.bgHover}
              url={url}
              noFollow={button.attributes.No_follow}
            />
          )
        })}
      </div>
    </>
  )
}
export default ProductBtns
