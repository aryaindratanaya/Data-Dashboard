import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Upload, Button, Table } from 'antd'

const Papa = require('papaparse')

const SingleView: NextPage = () => {
  const [columns, setColumns] = useState([])
  const [dataSource, setDataSource] = useState([])

  const csvToJson = (file: any) => {
    Papa.parse(file, {
      header: true,
      complete: (results: any) => {
        const columns = results.meta.fields.map((item: string, i: number) => {
          return {
            key: i,
            title: item,
            dataIndex: item,
          }
        })

        setColumns(columns)
        setDataSource(results.data)
      },
    })
  }

  return (
    <>
      <Head>
        <title>Data Dashboard - Single View</title>
      </Head>

      <div>
        <Upload
          accept=".csv"
          maxCount={1}
          beforeUpload={(file) => {
            csvToJson(file)
            return false
          }}
        >
          <Button>Select File</Button>
        </Upload>

        <Table
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: 'max-content' }}
        />
      </div>
    </>
  )
}

export default SingleView
