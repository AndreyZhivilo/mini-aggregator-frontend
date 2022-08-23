import React from 'react'

interface TextCardProps {
  text: string
  number: number
  title: string
}

const TextCard: React.FC<TextCardProps> = ({ text, number, title }) => {
  return (
    <>
      <div className="mb-5">
        <div className="bg-white py-8 px-5 flex flex-col md:flex-row items-start space-x-8">
          <div className="text-red-800/30 font-bold text-7xl">
            {number < 11 ? '0' + number : number}
          </div>
          <div>
            <h2 className="font-bold uppercase text-2xl mb-4">{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default TextCard
