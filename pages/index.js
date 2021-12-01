import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey. I'm Josh. I'm a software developer.</p>
        <p>
          Feel free to check out my{' '}
          <a href="https://joshyap-bucket.s3.amazonaws.com/joshua-yap-resume-2021.pdf">resume</a>.
        </p>
      </section>
    </Layout>
  )
}