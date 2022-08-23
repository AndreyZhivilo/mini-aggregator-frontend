import { IButton } from './../interfaces/apiResponce'

export default async function getExternalLink(
  slug: string
): Promise<IButton[]> {
  const baseURL = process.env.BACKEND_BASE_URL
  const siteID = process.env.SITE_ID
  if (!baseURL || !siteID) throw new Error('Something wrong with the .env file')

  const apiEndpoint: string = `${baseURL}/api/buttons?filters[$and][0][Slug][$eq]=${slug}&filters[$and][1][products][site][id][$eq]=${siteID}`

  try {
    let res = await fetch(apiEndpoint)
    const dataFromServer = await res.json()
    const link: IButton[] = dataFromServer.data
    return link
  } catch (e: any) {
    throw new Error(e)
  }
}
