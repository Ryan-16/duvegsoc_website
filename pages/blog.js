import Layout from '../components/layout.js'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Blog({ allPostsData }) {
  return (
    <div>
      <Layout>
        <Head>
          <title>DUVegSoc - Blog</title>
        </Head>
        <Container>
          <h1>Blog</h1>
          <section>
          <ul>
            {allPostsData.map(({ id, date, title, author, emoji }) => (
            <li key={id}>
              <h2>
                <Link href="/blog/[id]" as={`/blog/${id}`}>
                  <a>{emoji + title}</a>
                </Link>
              </h2>
              <h4>
                <Date dateString={date} />
              </h4>
              <h5>
                {author}
              </h5>
            </li>   
          ))}
          </ul>
        </section>
        </Container>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}