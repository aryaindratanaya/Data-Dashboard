import { Dispatch, SetStateAction, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Upload, Button, Table, Modal, Checkbox } from 'antd'

const Papa = require('papaparse')
const CheckboxGroup = Checkbox.Group

const SingleView: NextPage = () => {
  const [columns, setColumns] = useState([])
  const [sltColumns, setSltColumns] = useState([])
  const [dataSource, setDataSource] = useState([])
  const [showModal, setShowModal] = useState(false)

  const csvToJson = (file: any) => {
    Papa.parse(file, {
      header: true,
      complete: (results: any) => {
        const columns = results.meta.fields.map(
          (field: string, index: number) => ({
            key: index,
            title: field,
            dataIndex: field,
            displayed: true,
          })
        )

        setColumns(columns)
        setSltColumns(columns.map(({ title }: { title: string }) => title))
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

        <Button onClick={() => setShowModal(true)}>View</Button>
        <Modal
          title={`${sltColumns.length} column(s) are selected`}
          visible={showModal}
          onOk={() => {}}
          onCancel={() => setShowModal(false)}
        >
          <CheckboxGroup
            options={columns.map(({ title }) => title)}
            // value={Array.from(
            //   columns,
            //   ({ title, displayed }) => displayed && title
            // )}
            value={sltColumns}
            onChange={(sltTitles: any) => {
              setSltColumns(sltTitles)
            }}
          />
        </Modal>

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
