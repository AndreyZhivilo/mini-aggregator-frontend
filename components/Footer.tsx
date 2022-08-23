import React, { useContext } from 'react'
import SiteContext from '../contexts/SiteContext'

const Footer: React.FC = () => {
  const data = useContext(SiteContext)
  return (
    <>
      <footer className="py-8 text-white bg-blue-gray-900">
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap justify-between">
            <img
              className="w-[60px] h-[60px] mr-4 flex-none"
              src={data.Logo.data.attributes.url}
              alt={data.H1}
            />
            <div className="mr-4 mb-6 flex-1 md:basis-auto md:grow-0">
              <p>По всем вопросам обращайтесь на почту:</p>
              <a className="underline" href={`mailto:${data.Contact_mail}`}>
                {data.Contact_mail}
              </a>
            </div>
            <div className="mr-4 basis-full md:basis-auto md:grow-0">
              <p className="text-sm max-w-lg mb-3">
                Cайт не оказывает и не продает услуги. Вся информация носит
                исключительно информационный характер и может быть устаревшей.
                Точную информацию уточняйте у производителя.
              </p>
              <a className="text-sm underline" href="#">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
