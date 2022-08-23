import React from 'react'

interface ProsConsProps {
  pros: string
  cons: string
}

const ProsCons: React.FC<ProsConsProps> = ({ pros, cons }) => {
  const prosArray: string[] = pros.split('\n')
  const consArray: string[] = cons.split('\n')

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-3 space-y-3 lg:space-y-0 mt-3">
        <div className="bg-white lg:rounded-lg px-3 py-5 lg:py-10 lg:px-10 lg:w-1/2">
          <div className="uppercase text-green-700 text-lg font-bold mb-3">
            Плюсы:
          </div>

          <ul className="space-y-1">
            {prosArray.map((p, index) => {
              return (
                <li
                  key={index}
                  className="table before:content-['+'] before:pr-1 before:text-green-700 before:font-bold before:table-cell"
                >
                  {p}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="bg-white lg:rounded-lg px-3 py-5 lg:py-10 lg:px-10 lg:w-1/2">
          <div className="uppercase text-red-700 text-lg font-bold mb-3">
            Минусы:
          </div>
          <ul className="space-y-1">
            {consArray.map((c, index) => {
              return (
                <li
                  key={index}
                  className="table before:content-['-'] before:pr-1 before:text-red-700 before:font-bold before:table-cell"
                >
                  {c}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
export default ProsCons
