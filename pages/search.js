import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

const Search = () => {
  return (
    <div>
        {/* chages the title in head */}
        <Head>
            <title>Search Results</title>
        </Head>
    
        <Header />
    </div>
  )
}

export default Search