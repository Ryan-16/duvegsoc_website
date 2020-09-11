import Layout from '../../components/layout.js'
import { Card, Carousel, Container } from 'react-bootstrap'
import Head from 'next/head'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Blog({ postData }) {
  return (
    <div>
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Container>
        <article>
          <h1>{postData.title}</h1>
          <div>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        </Container>
      </Layout>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}