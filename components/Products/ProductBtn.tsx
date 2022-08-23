import React from 'react'

interface ProductBtn {
  text: string
  bg: string
  bgHover: string
  url: string
  noFollow: boolean
}

const ProductBtn: React.FC<ProductBtn> = ({
  text,
  bg,
  bgHover,
  url,
  noFollow,
}) => {
  return (
    <>
      <a
        href={url}
        className={`flex ml-auto justify-center text-white ${bg} ${bgHover} border-0 py-3.5 px-6 focus:outline-none rounded w-full`}
        {...(noFollow ? { rel: 'nofollow' } : {})}
      >
        {text}
      </a>
    </>
  )
}
export default ProductBtn
