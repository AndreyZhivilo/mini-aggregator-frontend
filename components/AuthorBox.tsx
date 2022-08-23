import React, { useContext } from 'react'
import SiteContext from '../contexts/SiteContext'

const AuthorBox: React.FC = () => {
  const { H1, Author_image, Author_name, Author_description } =
    useContext(SiteContext)
  return (
    <div className="py-8 bg-white mb-8">
      <div className="flex container justify-between flex-col md:flex-row">
        <h1 className="box-border pb-8 align-baseline text-4xl font-extrabold uppercase leading-5max-w-[50%] md:max-w-[50%]">
          {H1}
        </h1>
        <div className="flex md:pl-6">
          <div className="max-w-[400px]">
            <p className="align-baseline text-lg leading-4 font-bold mb-4 md:text-right">
              {Author_name}
            </p>
            <p className="md:text-right text-sm md:text-base">
              {Author_description}
            </p>
          </div>
          <img
            className="rounded-full w-20 h-20 md:w-[107px] md:h-[107px] ml-4"
            src={Author_image.data.attributes.url}
            alt={Author_name}
          />
        </div>
      </div>
    </div>
  )
}
export default AuthorBox
