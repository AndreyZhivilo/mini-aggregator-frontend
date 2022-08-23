import React from 'react'
import Head from 'next/head'
import { IButton } from './../../interfaces/apiResponce'
import getExternalLinks from '../../api/getExternalLinks'
import getExternalLink from '../../api/getExternalLink'
import { NextPage, GetStaticProps } from 'next'

export async function getStaticPaths() {
  const links: IButton[] = await getExternalLinks()
  const hiddenLinks: IButton[] = links.filter(
    (link) => !link.attributes.Direct_link
  )

  const paths = hiddenLinks.map((link) => ({
    params: { slug: link.attributes.Slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params?.slug) return { notFound: true }
  const slug = Array.isArray(ctx.params.slug)
    ? ctx.params.slug[0]
    : ctx.params.slug

  const links: IButton[] = await getExternalLink(slug)

  if (links.length !== 1) return { notFound: true }

  return {
    props: { link: links[0] },
    revalidate: 3600,
  }
}

interface LinkPageProps {
  link: IButton
}

const LinkPage: NextPage<LinkPageProps> = ({ link }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          httpEquiv="refresh"
          content={`0;URL=${link.attributes.Url}`}
        ></meta>
      </Head>
    </>
  )
}
export default LinkPage
