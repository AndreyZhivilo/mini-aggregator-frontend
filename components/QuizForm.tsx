import { Input, Checkbox } from '@material-tailwind/react'

const QuizForm = () => {
  return (
    <>
      <p className="font-bold text-lg">Получите лучшее предложение</p>
      <div className="flex flex-col mt-4 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <Input label="Ваше имя" />
        <Input label="Ваш e-mail" />
        <Input label="Ваш телефон" />
      </div>
      <div className="mt-4 ml-[-0.75rem]">
        <Checkbox label="Даю согласие на обработку персональных данных" />
      </div>
    </>
  )
}

export default QuizForm
