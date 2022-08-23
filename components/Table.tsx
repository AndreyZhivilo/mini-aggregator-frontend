import React, { useContext } from 'react'
import SiteContext from '../contexts/SiteContext'
import ReactStars from 'react-stars'
import useProductsFilter from '../hooks/useProductFilter'

const Table: React.FC = () => {
  const { products } = useContext(SiteContext)
  const filteredProducts = useProductsFilter(products.data)
  return (
    <>
      <div className="container mb-8">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-black font-bold uppercase bg-white">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Название
                </th>
                <th scope="col" className="py-3 px-6">
                  Рейтинг
                </th>
                <th scope="col" className="py-3 px-6">
                  Рекомендуют
                </th>
                <th scope="col" className="py-3 px-6">
                  Не рекомендуют
                </th>
                <th scope="col" className="py-3 px-6">
                  Баллы
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => {
                return (
                  <tr
                    key={product.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex space-x-2 items-center"
                    >
                      <img
                        className="w-[38px] h-[38px] rounded-full mr-2"
                        src={
                          product.attributes.Gallery.data[0].attributes.formats
                            .thumbnail.url
                        }
                        alt={product.attributes.Gallery.data[0].attributes.name}
                        width="38"
                        height="38"
                      />
                      {product.attributes.Name}
                    </th>
                    <td className="py-4 px-6">
                      <ReactStars
                        count={5}
                        size={25}
                        color2={'#ff9900'}
                        value={product.attributes.Rating}
                        className="block w-max"
                        half={true}
                        edit={false}
                      />
                    </td>
                    <td className="py-4 px-6 text-green-900 font-semibold">
                      {product.attributes.Recomend}
                    </td>
                    <td className="py-4 px-6 text-deep-orange-700 font-semibold">
                      {product.attributes.No_recomend}
                    </td>
                    <td className="py-4 px-6 text-green-900 font-semibold">
                      {product.attributes.Recomend -
                        product.attributes.No_recomend}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default Table
