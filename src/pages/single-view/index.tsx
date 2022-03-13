import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from 'antd'
import s from 'styles/Home.module.css'

const SingleView: NextPage = () => {
  return (
    <>
      <Head>
        <title>Data Dashboard - Single View</title>
      </Head>

      <main>
        <h1 className={s.mainHello}>Hi, this is the single-view page</h1>
        <p>Below is an example of an Antd Button</p>
        <Button type="primary">Button</Button>
        <></>
      </main>
    </>
  )
}

export default SingleView
