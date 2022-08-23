import React, { useContext } from 'react'
import SiteContext from '../contexts/SiteContext'
import monthHandler from '../../utils/monthHandler'

const Intro: React.FC = () => {
  const { Intro_image, Intro_text } = useContext(SiteContext)
  const date = new Date()
  const year = date.getFullYear()
  const month = monthHandler(date.getMonth())
  const day = date.getDate()
  return (
    <div className="container mb-8">
      <div className="bg-white px-3 py-5 lg:px-10 lg:py-10 sm:rounded-lg flex">
        <img
          className="max-w-[225px] max-h-[150px] hidden lg:block rounded-md"
          src={Intro_image.data.attributes.url}
          alt=""
        />
        <div className="lg:pl-5">
          <p className="mb-4 font-semibold">
            Обновлено: {day} {month} {year}
          </p>
          <p>{Intro_text}</p>
        </div>
      </div>
    </div>
  )
}
export default Intro
