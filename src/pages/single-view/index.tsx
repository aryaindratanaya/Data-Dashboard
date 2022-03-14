import { useState, useCallback } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useDropzone } from 'react-dropzone'

const Papa = require('papaparse')

const SingleView: NextPage = () => {
  // State that contained the data
  const [parsedCsvData, setParsedCsvData] = useState([])

  // The Parser
  const parseFile = (file: any) => {
    Papa.parse(file, {
      header: true,
      complete: (results: any) => {
        setParsedCsvData(results.data)
      },
    })
  }

  // The drop zone
  const onDrop = useCallback((acceptedFiles) => {
    parseFile(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  // Displaying the data
  console.log(parsedCsvData)

  return (
    <>
      <Head>
        <title>Data Dashboard - Single View</title>
      </Head>

      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
      </div>
    </>
  )
}

export default SingleView
