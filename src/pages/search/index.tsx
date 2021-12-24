import React, { useState } from 'react'
import { BoxHeader, SearchBox, Layout, BookList, BackIcon } from 'components/index'
import useSearch from 'service/search'

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [getData, getMore] = useSearch()
  const [books, setBooks] = useState([])
  const header = (
    <BoxHeader left={<BackIcon />}>
      <SearchBox
        value={searchValue}
        setValue={setSearchValue}
        searchClick={(value) => getData(value).then((data) => setBooks(data))}
      />
    </BoxHeader>
  )

  return (
    <Layout header={header} contentClass="more-book__content">
      <>
        {searchValue && (
          <BookList books={books} onPullUp={() => getMore().then((data) => setBooks([...books, ...data]))} />
        )}
      </>
    </Layout>
  )
}

export default Search
