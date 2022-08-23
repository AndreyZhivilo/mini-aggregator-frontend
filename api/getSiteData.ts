// import { ApiDataI } from '../interfaces/apiResponce'
import { ApiResponseI, Attributes } from './../interfaces/apiResponce'
import relativeUrlFixer from './../../utils/relativeUrlFixer'

export default async function getSiteData(): Promise<Attributes> {
  const baseURL = process.env.BACKEND_BASE_URL
  const siteID = process.env.SITE_ID

  if (!baseURL || !siteID) throw new Error('Something wrong with the .env file')

  const apiEndpoint: string = `${baseURL}/api/sites/${siteID}?populate=Logo&populate=Author_image&populate=Intro_image&populate=products&populate=products.Pros_Cons&populate=products.Gallery&populate=products.categories&populate=Text_card&populate=Quiz.Option&populate=products.reviews&populate=products.buttons&populate=Favicon`

  try {
    let res = await fetch(apiEndpoint)
    const dataFromServer: ApiResponseI = await res.json()
    const attrs = dataFromServer.data.attributes
    const output = relativeUrlFixer(baseURL, JSON.stringify(attrs))
    return JSON.parse(output)
  } catch (e: any) {
    throw new Error(e)
  }
}
