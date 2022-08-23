import { useState, useContext } from 'react'
import Review from './Review'
import { Button, Input, Textarea, Checkbox } from '@material-tailwind/react'
import { Select, Option } from '@material-tailwind/react'
import ReactStars from 'react-stars'
import SiteContext from '../contexts/SiteContext'

const Reviews: React.FC = () => {
  const initialCoun = 2
  const step = 2
  const { products, reviews } = useContext(SiteContext)
  const [visible, setVisible] = useState(initialCoun as number)
  const [rating, setRating] = useState(0)

  const addMore = () => {
    setVisible((prev) => prev + step)
  }
  return (
    <>
      <div className="bg-white">
        <div className="container pt-6 pb-16">
          <h2 className="font-bold uppercase text-2xl mb-4">Отзывы</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4">
            {reviews.map((review, index) => {
              return (
                <Review
                  key={review.id}
                  name={review.attributes.Author_name}
                  text={review.attributes.Review_text}
                  rating={review.attributes.Rating}
                  product={review.attributes.product.data.attributes.Name}
                  date={review.attributes.createdAt}
                  isVisible={index + 1 <= visible}
                />
              )
            })}
          </div>
          {reviews.length > visible && (
            <Button size="lg" color="orange" className="mb-8" onClick={addMore}>
              Показать еще отзывы
            </Button>
          )}
          <div>
            <h2 className="font-bold uppercase text-2xl mb-4">
              Оставить отзыв
            </h2>
            <form action="#">
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-5">
                <Input label="Ваше имя*" />
                <Input label="Ваш e-mail*" />
                <Select label="Выбрать">
                  {products.data.map((product) => {
                    return (
                      <Option key={product.id}>
                        {product.attributes.Name}
                      </Option>
                    )
                  })}
                </Select>
                <div className="space-x-3 flex items-center">
                  <div>Оценка:</div>
                  <ReactStars
                    count={5}
                    onChange={setRating}
                    size={30}
                    color2={'#ffd700'}
                    value={rating}
                    className="block w-max"
                    half={false}
                  />
                </div>
              </div>
              <Textarea label="Отзыв" className="mb-5" />
              <div className="flex justify-between flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="ml-[-0.75rem]">
                  <Checkbox label="Даю согласие на обработку персональных данных" />
                </div>
                <Button size="lg" color="orange">
                  Оставить отзыв
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Reviews
