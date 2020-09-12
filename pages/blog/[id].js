import Layout from '../../components/layout.js'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Link from 'next/link'

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
            <h4>
              <Date dateString={postData.date} />
            </h4>
            <h5>{postData.author}</h5>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
          <Link href="/blog">
              <a>← Back to Blogs</a>
            </Link>
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