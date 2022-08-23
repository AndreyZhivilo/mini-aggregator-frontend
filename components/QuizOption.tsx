import React from 'react'
import { Radio } from '@material-tailwind/react'

interface QuizOptionProps {
  step: number
  id: number
  label: string
  isSelected: boolean
  handler: (step: number, id: number) => void
}

const QuizOption: React.FC<QuizOptionProps> = ({
  step,
  id,
  label,
  isSelected,
  handler,
}) => {
  const borderColor = isSelected ? 'border-amber-700' : 'border-gray-300'

  return (
    <div className={`border-[1px]  p-4 ${borderColor}`}>
      <Radio
        value={id}
        color="amber"
        id={id.toString()}
        name={`step ${step}`}
        label={label}
        onChange={() => handler(step, id)}
        checked={isSelected}
      />
    </div>
  )
}

export default QuizOption
