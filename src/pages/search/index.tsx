import React, { useState } from 'react'
import { BoxHeader, SearchBox, Layout, BookList, BackIcon } from 'components/index'
import useSearch from 'service/search'

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [getData, getMore] = useSearch()
  const [books, setBooks] = useState([])
  const [click, setClick] = useState(false)
  const header = (
    <BoxHeader left={<BackIcon />}>
      <SearchBox
        value={searchValue}
        setValue={setSearchValue}
        searchClick={(value) => {
          if (!value) return
          setClick(true)
          setBooks([])
          getData(value).then((data) => setBooks(data))
        }}
      />
    </BoxHeader>
  )

  return (
    <Layout header={header} contentClass="more-book__content">
      <>
        {click && <BookList books={books} onPullUp={() => getMore().then((data) => setBooks([...books, ...data]))} />}
      </>
    </Layout>
  )
}

export default Search
