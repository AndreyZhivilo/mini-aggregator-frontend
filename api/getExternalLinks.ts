import { IButton } from './../interfaces/apiResponce'

export default async function getExternalLinks(): Promise<IButton[]> {
  const baseURL = process.env.BACKEND_BASE_URL
  const siteID = process.env.SITE_ID
  if (!baseURL || !siteID) throw new Error('Something wrong with the .env file')

  const apiEndpoint: string = `${baseURL}/api/buttons?populate=products&filters[products][site][id][$eq]=${siteID}`

  try {
    let res = await fetch(apiEndpoint)
    const dataFromServer = await res.json()
    const links: IButton[] = dataFromServer.data
    return links
  } catch (e: any) {
    throw new Error(e)
  }
}
