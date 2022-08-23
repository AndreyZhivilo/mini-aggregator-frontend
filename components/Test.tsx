import React, { ReactNode, useState } from 'react'
import { Select, Option } from '@material-tailwind/react'

const Test: React.FC = () => {
  const [selected, setSelected] = useState('Показать все')
  const selectHandler = (value: ReactNode) => {
    console.log(value)
    value && setSelected(value.toString())
  }
  const options = [
    { title: 'Показать все', slug: 'show-all' },
    { title: '10 лет', slug: '10-let' },
    { title: '7 лет', slug: '7-let' },
    { title: '5 лет', slug: '5-let' },
    { title: 'Для иммунитета', slug: 'dlya-immeniteta' },
  ]
  return (
    <>
      <Select label="Фильтрация" value={selected} onChange={selectHandler}>
        {options.map((option) => {
          return (
            <Option key={option.slug} value={option.slug}>
              {option.title}
            </Option>
          )
        })}
      </Select>
    </>
  )
}
export default Test
