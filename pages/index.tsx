//types
import type { NextPage, GetStaticProps } from 'next'
import { Attributes, ICategory, IReview } from './../interfaces/apiResponce'
//components
import Head from 'next/head'
import Header from '../components/Header'
import Table from '../components/Table'
import Footer from '../components/Footer'
import TextCards from '../components/TextCards'
import Quiz from '../components/Quiz'
import Reviews from '../components/Reviews'
import Intro from '../components/Intro'
import AuthorBox from '../components/AuthorBox'
import Products from '../components/Products/Products'

//context
import SiteContext from '../contexts/SiteContext'
//utils
import getSiteData from './../api/getSiteData'
import getProductsCats from '../api/getProductsCats'
import getReviews from '../api/getReviews'
import Metrika from '../components/Metrika'

export const getStaticProps: GetStaticProps = async () => {
  const data: Attributes = await getSiteData()
  const categories: ICategory[] = await getProductsCats()
  const reviews: IReview[] = await getReviews()

  return {
    props: { data, categories, reviews },
    revalidate: 3600,
  }
}

interface MainPageProps {
  data: Attributes
  categories: ICategory[]
  reviews: IReview[]
}

const Home: NextPage<MainPageProps> = ({ data, categories, reviews }) => {
  const robots = data.Allow_index ? 'index, follow' : 'noindex, nofollow'
  return (
    <SiteContext.Provider
      value={{ ...data, cats: categories, reviews: reviews }}
    >
      <div>
        <Head>
          <title>{data.SEO_title}</title>
          <meta name="description" content={data.SEO_description} />
          <meta name="robots" content={robots} />
          <link rel="canonical" href={data.Site_url} />
          <link rel="icon" href={data.Favicon.data.attributes.url} />
        </Head>
        <Header />
        <main>
          <AuthorBox />
          <Intro />
          <Products />
          <Table />
          <TextCards />
          <Quiz />
          <Reviews />
          <Footer />
          <Metrika />
        </main>
      </div>
    </SiteContext.Provider>
  )
}

export default Home
