import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from 'antd'
import s from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Data Dashboard - Home</title>
      </Head>

      <main>
        <h1 className={s.mainHello}>Hello and welcome</h1>
        <p>Below is an example of an Antd Button</p>
        <Button type="primary">Button</Button>
        <></>
      </main>
    </>
  )
}

export default Home
