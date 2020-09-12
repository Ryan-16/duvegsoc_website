import Layout from '../components/layout.js'
import { Card, Container } from 'react-bootstrap'
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
          <h1 className="text-center">Blog</h1>
          <section className="pt-5 pl-1">
            {allPostsData.map(({ id, date, title, author, emoji }) => (
              <Link href="/blog/[id]" as={`/blog/${id}`}>
                <a>
                  <Card className="blog-card shadow p-3 mb-5 bg-white rounded">
                    <h2>
                      {title}
                    </h2>
                    <h4>
                      <Date dateString={date} />
                    </h4>
                    <h5>
                      {author} 
                      <span className="float-right" id="emoji">
                        {emoji}
                      </span>
                    </h5>
                  </Card>
                </a>
              </Link>
            ))}
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