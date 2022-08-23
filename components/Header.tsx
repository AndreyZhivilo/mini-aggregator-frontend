import React, { useState, useEffect, useContext } from 'react'

//components
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import ReactStars from 'react-stars'

//context
import SiteContext from '../contexts/SiteContext'

const Header: React.FC = () => {
  const { Logo, SEO_title } = useContext(SiteContext)

  const [openNav, setOpenNav] = useState(false as boolean)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg text-black hover:text-cyan-600 uppercase"
      >
        <a href="#" className="flex items-center">
          Рейтинг
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg text-black hover:text-cyan-600 uppercase"
      >
        <a href="#" className="flex items-center">
          Подборка
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg text-black hover:text-cyan-600 uppercase"
      >
        <a href="#" className="flex items-center">
          Подбор онлайн
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg text-black hover:text-cyan-600 uppercase"
      >
        <a href="#" className="flex items-center">
          Отзывы
        </a>
      </Typography>
    </ul>
  )

  return (
    <>
      <Navbar
        className="mx-auto py-2 px-4 lg:px-8 lg:py-4 mb-8"
        fullWidth={true}
      >
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center">
            <img
              className="w-[60px] h-[60px]"
              src={Logo.data.attributes.url}
              alt={SEO_title}
            />
            <ReactStars
              count={5}
              size={25}
              color2={'#ff9900'}
              value={5}
              className="block w-max"
              half={true}
              edit={false}
            />
          </div>
          <div className="hidden lg:block">{navList}</div>
          {!openNav && (
            <div className="space-x-6 hidden xl:flex">
              <div>
                <span className="inline-block box-border h-[30px] w-[30px] text-center align-baseline text-xs leading-7 text-white rounded-full font-bold bg-cyan-600  mr-2">
                  15
                </span>
                <span className="box-border align-baseline leading-4text-[100%] text-lg">
                  Витаминов
                </span>
              </div>
              <div>
                <span className="inline-block box-border h-[30px] w-[30px] text-center align-baseline text-xs leading-7 text-white rounded-full font-bold bg-cyan-600  mr-2">
                  1K+
                </span>
                <span className="box-border align-baseline leading-4text-[100%] text-lg">
                  Отзывов
                </span>
              </div>
            </div>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  )
}
export default Header
