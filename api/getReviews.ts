import { IReviews, IReview } from './../interfaces/apiResponce'
import relativeUrlFixer from './../../utils/relativeUrlFixer'

export default async function getSiteData(): Promise<IReview[]> {
  const baseURL = process.env.BACKEND_BASE_URL
  const siteID = process.env.SITE_ID

  if (!baseURL || !siteID) throw new Error('Something wrong with the .env file')

  const apiEndpoint: string = `${baseURL}/api/reviews?populate=product&filters[product][site][id][$eq]=${siteID}`

  try {
    let res = await fetch(apiEndpoint)
    const dataFromServer: IReviews = await res.json()
    const attrs = dataFromServer.data
    const output = relativeUrlFixer(baseURL, JSON.stringify(attrs))
    return JSON.parse(output)
  } catch (e: any) {
    throw new Error(e)
  }
}
