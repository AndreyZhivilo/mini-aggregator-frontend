import React, { useContext } from 'react'
import SiteContext from '../contexts/SiteContext'
import TextCard from './TextCard'

const TextCards: React.FC = () => {
  const data = useContext(SiteContext)

  return (
    <div className="container mb-8">
      {data.Text_card.map((card, index) => {
        return (
          <TextCard
            key={card.id}
            title={card.Title}
            text={card.Text}
            number={index + 1}
          />
        )
      })}
    </div>
  )
}
export default TextCards
