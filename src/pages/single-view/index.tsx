import type { NextPage } from 'next'
import Head from 'next/head'
import { Table } from 'antd'

const SingleView: NextPage = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]

  return (
    <>
      <Head>
        <title>Data Dashboard - Single View</title>
      </Head>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  )
}

export default SingleView
