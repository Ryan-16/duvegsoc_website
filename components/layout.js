import Head from 'next/head'
import Navigation from '../components/navigation'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Durham University Vegetarian and Vegan Society Website"
        />
      </Head>
      <Navigation></Navigation>
      <main>{children}</main>
    </div>
  )
}