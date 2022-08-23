import React from 'react'
import QuizOption from './QuizOption'
import { IQuizOptionEx } from './../interfaces/apiResponce'

interface QuizFrameProps {
  step: number
  title: string
  isVisible: boolean
  options: IQuizOptionEx[]
  handleRadio: (step: number, id: number) => void
}

const QuizFrame: React.FC<QuizFrameProps> = ({
  step,
  title,
  options,
  isVisible,
  handleRadio,
}) => {
  const visibilityClass = isVisible ? '' : 'hidden'

  return (
    <>
      <div className={`${visibilityClass}`}>
        <p className="font-bold text-lg">{title}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mt-3">
          {options.map((option) => {
            return (
              <QuizOption
                key={option.id}
                step={step}
                id={option.id}
                label={option.Option}
                isSelected={option.isSelected}
                handler={handleRadio}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default QuizFrame
