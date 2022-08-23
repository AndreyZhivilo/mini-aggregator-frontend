import React, { useState, useContext, useMemo } from 'react'
import QuizForm from './QuizForm'
import QuizFrame from './QuizFrame'
import { Button } from '@material-tailwind/react'
import SiteContext from '../contexts/SiteContext'
import { IQuiz, IQuizOptionEx } from './../interfaces/apiResponce'

const Quiz: React.FC = () => {
  const { Quiz, Quiz_title, Quiz_intro } = useContext(SiteContext)

  const quizSections: IQuiz<IQuizOptionEx>[] = useMemo(() => {
    return Quiz.map((section) => {
      const options: IQuizOptionEx[] = section.Option.map((item) => ({
        ...item,
        isSelected: false,
      }))

      return { ...section, Option: options }
    })
  }, [Quiz])

  const [data, setData] = useState(quizSections as IQuiz<IQuizOptionEx>[])

  const [step, setStep] = useState(0 as number)

  const [isForm, setIsForm] = useState(false as boolean)

  const canGoNext: boolean = useMemo(() => {
    if (!data[step]) return false
    return data[step].Option.some((opt) => opt.isSelected)
  }, [data, step])

  const getVisibility = (num: number): boolean => (num === step ? true : false)

  const handleRadio = (step: number, id: number): void => {
    const newState: IQuiz<IQuizOptionEx>[] = data.map((item, index) => {
      if (index === step) {
        const options = item.Option.map((option) =>
          option.id === id
            ? { ...option, isSelected: true }
            : { ...option, isSelected: false }
        )
        return { ...item, Option: options }
      } else {
        return { ...item }
      }
    })
    setData(newState)
  }

  const setFormVisibility = (nextStep: number): void => {
    if (nextStep >= data.length) {
      setIsForm(true)
    } else {
      setIsForm(false)
    }
  }

  const nextStep = () => {
    setStep((prev) => {
      setFormVisibility(prev + 1)
      return prev + 1
    })
  }

  const prevStep = () => {
    setStep((prev) => {
      setFormVisibility(prev - 1)
      return prev - 1
    })
  }
  return (
    <>
      <div className="container mb-20">
        <div className="bg-white py-4 px-4">
          <h2 className="font-bold uppercase text-2xl mb-4">{Quiz_title}</h2>
          <p>{Quiz_intro}</p>
          <div className="mt-5">
            {isForm ? (
              <QuizForm />
            ) : (
              data.map((item, index) => {
                return (
                  <QuizFrame
                    key={item.id}
                    title={item.Title}
                    step={index}
                    options={item.Option}
                    isVisible={getVisibility(index)}
                    handleRadio={handleRadio}
                  />
                )
              })
            )}
          </div>

          <div className="flex justify-center space-x-4 translate-y-[70%]">
            {step > 0 && (
              <Button size="lg" color="blue" onClick={prevStep}>
                Назад
              </Button>
            )}
            {step < data.length && (
              <Button
                size="lg"
                color="orange"
                onClick={nextStep}
                disabled={!canGoNext}
              >
                Следующий шаг
              </Button>
            )}
            {isForm && (
              <Button size="lg" color="green">
                Отправить
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default Quiz
