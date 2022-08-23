import React, { useContext } from 'react'
import Script from 'next/script'
import SiteContext from '../contexts/SiteContext'
import getScriptInner from './../../utils/getScriptInner'

const Metrika: React.FC = () => {
  const data = useContext(SiteContext)
  const code = getScriptInner(data.Metrika)

  return (
    <>
      {data.Metrika && code && (
        <Script strategy="afterInteractive">{code}</Script>
      )}
    </>
  )
}
export default Metrika
