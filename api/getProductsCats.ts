import { ICategory } from './../interfaces/apiResponce'

export default async function getProductsCats(): Promise<ICategory[]> {
  const baseURL = process.env.BACKEND_BASE_URL
  const siteID = process.env.SITE_ID
  if (!baseURL || !siteID) throw new Error('Something wrong with the .env file')

  const apiEndpoint: string = `${baseURL}/api/categories?filters[products][site][id][$eq]=${siteID}`

  try {
    let res = await fetch(apiEndpoint)
    const dataFromServer = await res.json()
    const categories: ICategory[] = dataFromServer.data
    return categories
  } catch (e: any) {
    throw new Error(e)
  }
}
